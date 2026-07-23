/* practice.js — the adaptive Practice engine (Duolingo-style). Mixes exercise types, never
 * the same format twice in a row, weighted toward the meds and fact-types the user gets wrong.
 * Separate from the SRS: SRS schedules WHEN a card is due; this decides WHAT to drill now. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  // ---------------- adaptive selection ----------------
  // Practice only ever drills meds the user has actually learned — never a preview of the deck.
  function learnedMeds() {
    var cards = PML.store.get().cards;
    return PML.deck.all().filter(function (m) { return cards[m.id] && cards[m.id].learned; });
  }
  function candidatePool(opts) {
    opts = opts || {};
    if (opts.medId) { var m = PML.deck.get(opts.medId); return m ? [m] : []; }   // explicit "drill this med"
    var learned = learnedMeds();
    return opts.classFilter ? learned.filter(function (m) { return m.class === opts.classFilter; }) : learned;
  }
  // Ids the exercise generators may quiz: the pool, plus everything else already learned so
  // cross-med formats (matching, confusables, bank vignettes) still have somewhere to draw from.
  function scopeIds(opts) {
    var ids = {};
    learnedMeds().forEach(function (m) { ids[m.id] = 1; });
    candidatePool(opts).forEach(function (m) { ids[m.id] = 1; });
    return Object.keys(ids);
  }

  // How deep a session the learned material can actually support. With three meds under your belt
  // there is no honest 50-question set, so the cap scales with the pool instead of pretending.
  var PER_MED = 5;
  var HARD_CAP = 100;
  function maxQuestions(opts) {
    var n = candidatePool(opts).length;
    return n ? Math.max(3, Math.min(HARD_CAP, n * PER_MED)) : 0;
  }

  function medWeight(m) {
    var c = PML.store.get().cards[m.id];
    var acc = c.seen ? c.correct / c.seen : 0.4;         // unseen → treat as fairly weak
    var diff = c.difficulty != null ? c.difficulty : 0.5; // prior decays toward measured
    var recency = c.lastPracticed ? Math.min(1, (U.daysBetween(c.lastPracticed, U.todayKey()) + 1) / 3) : 1;
    return 0.15 + diff * 0.5 + (1 - acc) * 0.8 + recency * 0.2;
  }
  function weightedPick(list, weightFn) {
    var total = 0, weights = list.map(function (x) { var w = Math.max(0.01, weightFn(x)); total += w; return w; });
    var r = Math.random() * total;
    for (var i = 0; i < list.length; i++) { r -= weights[i]; if (r <= 0) return list[i]; }
    return list[list.length - 1];
  }
  function typeFor(med, avoid) {
    var c = PML.store.get().cards[med.id];
    var types = PML.exercises.TYPES.filter(function (t) { return t !== avoid; });
    return weightedPick(types, function (t) {
      var e = c.ex[t];
      var acc = e && e.seen ? e.correct / e.seen : 0.3;
      return 0.2 + (1 - acc);   // weaker types drawn more often
    });
  }

  // A stable signature for an exercise, used to guarantee no question repeats within a session.
  // Matching stems are generic ("Match each drug to its class"), so key those on their pair set;
  // everything else on type + med + subtype + stem + answer.
  function exSig(ex) {
    if (ex.type === 'matching') return 'matching|' + (ex.pairs || []).map(function (p) { return p.id; }).sort().join(',');
    return ex.type + '|' + (ex.medId || '') + '|' + (ex.subtype || '') + '|' + U.normalize(ex.stem || '') + '|' + U.normalize(String(ex.answer || ex.answerDisplay || ''));
  }

  function buildSession(n, opts) {
    opts = opts || {};
    var pool = candidatePool(opts);
    if (!pool.length) return [];
    n = Math.max(1, Math.min(n || 12, maxQuestions(opts)));
    var cats = opts.categories && opts.categories.length ? opts.categories : null;
    var exercises = [], seen = {};
    PML.exercises.setScope(scopeIds(opts));
    PML.exercises.setCategoryScope(cats);
    try {
      var lastType = null, lastMed = null, guard = 0, stale = 0;
      var vignettesOk = !cats || cats.indexOf('vignette') >= 0;
      // `stale` counts consecutive dead-ends (null / duplicate / same-format skip). When it climbs we
      // relax the variety guards so a narrow scope (e.g. vignettes-only) can still fill instead of
      // deadlocking; if the unique material truly runs out we simply return a shorter set.
      while (exercises.length < n && guard < n * 40 + 80) {
        guard++;
        var relax = stale >= 3;
        var ex = null;
        // occasional standalone cross-med bank vignette for variety (not when drilling one med)
        if (!opts.medId && vignettesOk && lastType !== 'vignette' && Math.random() < 0.16) {
          ex = PML.exercises.bankVignette();
        }
        if (!ex) {
          var med = opts.medId ? PML.deck.get(opts.medId) : weightedPick(pool, medWeight);
          if (!opts.medId && med === lastMed && pool.length > 2 && !relax) { stale++; continue; }
          var type = typeFor(med, relax ? null : lastType);
          ex = PML.exercises.generate(type, med, relax ? null : lastType);
          if (ex) { ex._med = med; }
        }
        if (!ex) { stale++; continue; }
        var sig = exSig(ex);
        if (seen[sig]) { stale++; continue; }                            // no repeated questions
        if (ex.type === lastType && exercises.length && !relax) { stale++; continue; } // prefer variety unless stuck
        seen[sig] = 1;
        var m = ex._med; delete ex._med;
        exercises.push(ex);
        lastType = ex.type; lastMed = m || (ex.medId ? PML.deck.get(ex.medId) : null); stale = 0;
      }
    } finally { PML.exercises.setScope(null); PML.exercises.setCategoryScope(null); }
    return exercises;
  }

  // ---------------- exercise renderers ----------------
  // each returns { node, getResult } where getResult()-> {answered, correct} after user acts;
  // renderers call onAnswer(correct) when the user commits.
  function renderChoice(ex, onAnswer) {
    var node = ce('div', { class: 'stack' });
    node.appendChild(ce('div', { class: 'q-type-label' }, [typeLabel(ex)]));
    node.appendChild(ce('div', { class: 'q-stem' }, [ex.stem]));
    var list = ce('div', { class: 'opt-list' });
    var done = false;
    ex.options.forEach(function (opt, i) {
      var b = ce('button', { class: 'opt', 'data-opt': opt }, [ce('span', { class: 'key' }, [String(i + 1)]), ce('span', { text: opt })]);
      b.addEventListener('click', function () {
        if (done) return; done = true;
        var correct = opt === ex.answer;
        U.qsa('.opt', list).forEach(function (x) { x.disabled = true; if (x.dataset.opt === ex.answer) x.classList.add('correct'); });
        if (!correct) b.classList.add('wrong');
        onAnswer(correct, opt);
      });
      list.appendChild(b);
    });
    node.appendChild(list);
    node._choose = function (i) { var bs = U.qsa('.opt', list); if (bs[i]) bs[i].click(); };
    return node;
  }

  function renderType(ex, onAnswer) {
    var node = ce('div', { class: 'stack' });
    node.appendChild(ce('div', { class: 'q-type-label' }, [typeLabel(ex)]));
    node.appendChild(ce('div', { class: 'q-stem' }, [ex.stem]));
    if (ex.clozeText) node.appendChild(ce('div', { class: 'card pad-sm', style: { fontStyle: 'italic' } }, [ex.clozeText]));
    var input = ce('input', { class: 'text-answer', placeholder: 'Type your answer…', autocomplete: 'off', autocorrect: 'off', spellcheck: 'false' });
    var btn = ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' } }, ['Check']);
    if (ex.hint) node.appendChild(ce('div', { class: 'dim', style: { fontSize: '.78rem' } }, [ex.hint]));
    var done = false;
    function submit() {
      if (done) return; if (!input.value.trim()) return; done = true;
      input.disabled = true; btn.disabled = true;
      var correct = U.answerMatches(input.value, ex.accept, 0.78);
      onAnswer(correct, input.value.trim());
    }
    btn.addEventListener('click', submit);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
    node.appendChild(input); node.appendChild(btn);
    node._focus = function () { input.focus(); };
    node._submit = submit;
    return node;
  }

  function renderMatching(ex, onAnswer) {
    var node = ce('div', { class: 'stack' });
    node.appendChild(ce('div', { class: 'q-type-label' }, [typeLabel(ex)]));
    node.appendChild(ce('div', { class: 'q-stem' }, [ex.stem]));
    var left = ex.pairs.map(function (p) { return p.l; });
    var right = U.sample(ex.pairs.map(function (p) { return p.r; }), ex.pairs.length);
    var answerMap = {}; ex.pairs.forEach(function (p) { answerMap[p.l] = p.r; });
    var sel = { l: null, node: null };
    var matched = 0, wrongs = 0;
    var grid = ce('div', { class: 'match-grid' });
    var lc = ce('div', { class: 'match-col' }), rc = ce('div', { class: 'match-col' });
    left.forEach(function (l) { lc.appendChild(ce('div', { class: 'match-item', 'data-l': l, onclick: function () { pickLeft(l, this); } }, [l])); });
    right.forEach(function (r) { rc.appendChild(ce('div', { class: 'match-item', 'data-r': r, onclick: function () { pickRight(r, this); } }, [r])); });
    grid.appendChild(lc); grid.appendChild(rc);
    node.appendChild(grid);
    function pickLeft(l, el) { if (el.classList.contains('done')) return; U.qsa('.match-item', lc).forEach(function (x) { x.classList.remove('sel'); }); el.classList.add('sel'); sel.l = l; sel.node = el; }
    function pickRight(r, el) {
      if (!sel.l || el.classList.contains('done')) return;
      if (answerMap[sel.l] === r) {
        el.classList.add('done'); sel.node.classList.add('done'); matched++;
        sel.l = null; sel.node = null;
        if (matched === ex.pairs.length) onAnswer(wrongs === 0);
      } else {
        wrongs++;
        el.classList.add('wrong'); (function (e) { setTimeout(function () { e.classList.remove('wrong'); }, 500); })(el);
      }
    }
    return node;
  }

  function renderBuild(ex, onAnswer) {
    var node = ce('div', { class: 'stack' });
    node.appendChild(ce('div', { class: 'q-type-label' }, [typeLabel(ex)]));
    node.appendChild(ce('div', { class: 'q-stem' }, [ex.stem]));
    var answer = ce('div', { class: 'tile-answer' });
    var bank = ce('div', { class: 'tile-bank' });
    var placed = [];
    ex.tiles.forEach(function (w, i) {
      var t = ce('button', { class: 'word-tile', text: w });
      t.addEventListener('click', function () {
        if (t.parentNode === bank) { answer.appendChild(t); placed.push(w); }
        else { bank.appendChild(t); placed.splice(placed.indexOf(w), 1); }
      });
      bank.appendChild(t);
    });
    var btn = ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' } }, ['Check']);
    var done = false;
    btn.addEventListener('click', function () {
      if (done) return; done = true; btn.disabled = true;
      var got = U.qsa('.word-tile', answer).map(function (x) { return x.textContent; }).join(' ');
      var correct = U.normalize(got) === U.normalize(ex.answerSeq.join(' '));
      onAnswer(correct, got);
    });
    node.appendChild(ce('div', { class: 'muted', style: { fontSize: '.78rem' } }, ['Tap tiles to build the answer:']));
    node.appendChild(answer); node.appendChild(bank); node.appendChild(btn);
    return node;
  }

  function typeLabel(ex) {
    var m = { mcq: 'Multiple choice', type: 'Type the answer', matching: 'Match', build: 'Build the answer', reverse: 'Reverse recall', cloze: 'Fill the blank', confusable: 'Confusables', vignette: 'Clinical vignette' };
    return (m[ex.type] || ex.type) + (ex.subtype ? ' · ' + ex.subtype : '');
  }

  function renderExercise(ex, onAnswer) {
    if (ex.type === 'mcq' || ex.type === 'vignette' || ex.type === 'confusable') return renderChoice(ex, onAnswer);
    if (ex.type === 'type' || ex.type === 'reverse' || ex.type === 'cloze') return renderType(ex, onAnswer);
    if (ex.type === 'matching') return renderMatching(ex, onAnswer);
    if (ex.type === 'build') return renderBuild(ex, onAnswer);
    return renderChoice(ex, onAnswer);
  }

  // ---------------- shared feedback / review helpers ----------------
  // The explanatory tail (answer, explanation, wiki interlinks, source) — reused by the live
  // feedback panel and the read-only "review a past question" panel.
  function feedbackDetails(ex, correct, skipAnswer) {
    var out = [];
    if (!skipAnswer && !correct && ex.answerDisplay) out.push(ce('p', { style: { margin: '6px 0 0' } }, [ce('b', {}, ['Answer: ']), ex.answerDisplay]));
    else if (!skipAnswer && !correct && ex.answer && !ex.answerDisplay) out.push(ce('p', { style: { margin: '6px 0 0' } }, [ce('b', {}, ['Answer: ']), ex.answer]));
    if (ex.explanation) {
      var expl = ce('p', { class: 'muted', style: { margin: '6px 0 0', fontSize: '.9rem' } });
      expl.appendChild(PML.wiki && PML.wiki.linkify ? PML.wiki.linkify(ex.explanation) : document.createTextNode(ex.explanation));
      out.push(expl);
    }
    if (PML.wiki && (ex.disorder || (ex.meds && ex.meds.length))) {
      var rel = ce('div', { class: 'row wrap', style: { gap: '6px', marginTop: '8px', alignItems: 'center' } }, [ce('span', { class: 'dim', style: { fontSize: '.72rem' } }, ['📖 Wiki:'])]);
      if (ex.disorder) { var hit = PML.wiki.resolveName(ex.disorder); if (hit) rel.appendChild(ce('button', { class: 'chip wikilink', style: { cursor: 'pointer' }, onclick: function () { PML.wiki.open(hit); } }, [ex.disorder])); }
      (ex.meds || []).slice(0, 5).forEach(function (mid) { var m = PML.deck.get(mid); if (m) rel.appendChild(ce('button', { class: 'chip wikilink', style: { cursor: 'pointer' }, onclick: function () { PML.wiki.medPage(mid); } }, [m.generic])); });
      if (rel.childNodes.length > 1) out.push(rel);
    }
    if (ex.source && ex.source.name) {
      var src = ex.source.url ? ce('a', { class: 'src-link', href: ex.source.url, target: '_blank', rel: 'noopener' }, ['Source: ' + ex.source.name]) : ce('span', { class: 'src-link' }, ['Source: ' + ex.source.name]);
      out.push(ce('div', { style: { marginTop: '6px' } }, [src]));
    }
    return out;
  }

  // Read-only depiction of what was asked and how the user answered.
  function reviewAnswerBlock(ex, r) {
    var wrap = ce('div', { class: 'stack', style: { marginTop: 'var(--sp-3)' } });
    if (ex.type === 'mcq' || ex.type === 'vignette' || ex.type === 'confusable') {
      var list = ce('div', { class: 'opt-list' });
      (ex.options || []).forEach(function (opt) {
        var cls = 'opt';
        if (opt === ex.answer) cls += ' correct';
        else if (r.pick != null && opt === r.pick) cls += ' wrong';
        list.appendChild(ce('div', { class: cls }, [ce('span', { text: opt })]));
      });
      wrap.appendChild(list);
    } else if (ex.type === 'matching') {
      var pl = ce('div', {});
      (ex.pairs || []).forEach(function (p) { pl.appendChild(ce('div', { class: 'review-pair' }, [ce('b', {}, [p.l]), ' → ', p.r])); });
      wrap.appendChild(pl);
    } else {
      var corr = ex.answerDisplay || ex.answer || (ex.accept && ex.accept[0]) || '';
      if (r.pick != null && String(r.pick).trim() !== '') wrap.appendChild(ce('div', { class: 'review-line' }, [ce('span', { class: 'muted' }, ['Your answer: ']), ce('b', { class: r.correct ? 'ok-text' : 'no-text' }, [String(r.pick)])]));
      if (corr) wrap.appendChild(ce('div', { class: 'review-line' }, [ce('span', { class: 'muted' }, ['Correct: ']), ce('b', {}, [corr])]));
      if (ex.clozeText) wrap.appendChild(ce('div', { class: 'card pad-sm', style: { fontStyle: 'italic', marginTop: '6px' } }, [ex.clozeText.replace('_____', '“' + (corr || '____') + '”')]));
    }
    return wrap;
  }

  // A full read-only review card for one already-answered question.
  function renderReview(r, backLabel, onBack) {
    var ex = r.ex;
    var card = ce('div', { class: 'card pad view' });
    card.appendChild(ce('div', { class: 'row spread', style: { alignItems: 'center' } }, [
      ce('div', { class: 'q-type-label' }, [typeLabel(ex)]),
      ce('span', { class: 'chip ' + (r.correct ? 'ok-chip' : 'no-chip') }, [r.correct ? '✓ You got it' : '✗ Missed']),
    ]));
    card.appendChild(ce('div', { class: 'q-stem' }, [ex.stem]));
    card.appendChild(reviewAnswerBlock(ex, r));
    var det = ce('div', { class: 'feedback ' + (r.correct ? 'ok' : 'no'), style: { marginTop: 'var(--sp-4)' } });
    feedbackDetails(ex, r.correct, true).forEach(function (n) { det.appendChild(n); });
    if (!det.childNodes.length) det = null;
    if (det) card.appendChild(det);
    if (backLabel) card.appendChild(ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' }, onclick: onBack }, [backLabel]));
    return card;
  }

  // ---------------- session runner ----------------
  var active = null; // { exNode, answered, next, reviewing } for keyboard

  function runSession(root, opts) {
    var exercises = opts.exercises;
    var total = exercises.length;
    var i = 0, correctCount = 0, viewing = null;
    var results = new Array(total);   // results[k] = { ex, correct, pick }
    var liveCard = null, liveActive = null;
    PML.game.resetCombo();
    if (PML.sfxOn()) PML.sfx.start();
    PML.store.get().stats.sessions = (PML.store.get().stats.sessions || 0) + 1;

    // ----- layout scaffold: left progress grid + main question column -----
    var grid = ce('div', { class: 'qgrid' });
    var sideCount = ce('span', { class: 'qgrid-count' }, ['0/' + total]);
    var aside = ce('aside', { class: 'practice-side' }, [
      ce('div', { class: 'practice-side-head' }, [ce('b', {}, ['Progress']), sideCount]),
      grid,
      ce('div', { class: 'qgrid-legend' }, [legendItem('ok', 'right'), legendItem('no', 'wrong'), legendItem('current', 'now')]),
      ce('p', { class: 'dim qgrid-hint' }, ['Tap a finished question to review it.']),
    ]);
    var posLabel = ce('span', { class: 'muted' }, ['1 / ' + total]);
    var comboBadge = ce('span', { class: 'chip combo-badge' }, ['⚡ ' + PML.game.comboState().count]);
    var headRow = ce('div', { class: 'row spread', style: { marginBottom: '10px' } }, [posLabel, comboBadge]);
    var mainSlot = ce('div');
    var mainSection = ce('section', { class: 'practice-main' }, [headRow, mainSlot]);
    root.appendChild(ce('div', { class: 'practice-layout view' }, [aside, mainSection]));

    var cells = [];
    for (var k = 0; k < total; k++) {
      (function (k) {
        var c = ce('button', { class: 'qcell', type: 'button', 'aria-label': 'Question ' + (k + 1), onclick: function () { onCell(k); } }, [String(k + 1)]);
        cells.push(c); grid.appendChild(c);
      })(k);
    }
    updateGrid();

    function legendItem(cls, label) { return ce('span', { class: 'qgrid-legend-item' }, [ce('i', { class: 'qcell mini ' + cls }), label]); }
    function answeredCount() { var n = 0; for (var k = 0; k < total; k++) if (results[k]) n++; return n; }

    function updateGrid() {
      for (var k = 0; k < total; k++) {
        var c = cells[k], r = results[k];
        c.className = 'qcell';
        c.classList.add(r ? (r.correct ? 'ok' : 'no') : 'pending');
        if (k === i && viewing === null) c.classList.add('current');
        if (viewing === k) c.classList.add('reviewing');
        c.disabled = !r && k !== i;   // only answered cells (or the live one) are actionable
      }
      sideCount.textContent = answeredCount() + '/' + total;
    }

    function onCell(k) {
      if (!results[k] && k !== i) return;                    // unreached question — ignore
      if (k === i) { if (viewing !== null) exitReview(); return; }  // clicking the live one returns to it
      enterReview(k);
    }
    function enterReview(k) {
      viewing = k;
      U.clear(mainSlot);
      mainSlot.appendChild(renderReview(results[k], '← Back to question ' + (i + 1), exitReview));
      posLabel.textContent = 'Reviewing ' + (k + 1) + ' / ' + total;
      active = { reviewing: true };
      updateGrid();
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    function exitReview() {
      viewing = null;
      U.clear(mainSlot);
      mainSlot.appendChild(liveCard);
      posLabel.textContent = (i + 1) + ' / ' + total;
      active = liveActive;
      updateGrid();
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    function finish() {
      active = null;
      var acc = total ? Math.round(correctCount / total * 100) : 0;
      U.clear(root);
      var recap = ce('div', { class: 'qgrid recap' });
      for (var k = 0; k < total; k++) {
        (function (k) {
          var r = results[k];
          var c = ce('button', { class: 'qcell ' + (r ? (r.correct ? 'ok' : 'no') : 'pending'), type: 'button', 'aria-label': 'Review question ' + (k + 1), onclick: function () { if (r) openReviewModal(r); } }, [String(k + 1)]);
          recap.appendChild(c);
        })(k);
      }
      root.appendChild(ce('div', { class: 'card pad center view stack' }, [
        ce('div', { style: { fontSize: '3rem' } }, [acc >= 80 ? '🎉' : acc >= 50 ? '👍' : '💪']),
        ce('h2', {}, ['Session complete']),
        ce('div', { class: 'stat-tiles' }, [
          bigTile(correctCount + '/' + total, 'correct'),
          bigTile(acc + '%', 'accuracy'),
          bigTile(PML.game.comboState().best, 'best combo'),
        ]),
        ce('div', { class: 'muted', style: { fontSize: '.82rem' } }, ['Tap any question to review it:']),
        recap,
        ce('div', { class: 'row', style: { justifyContent: 'center', gap: '8px' } }, [
          ce('button', { class: 'btn primary lg', onclick: function () { opts.onDone && opts.onDone({ again: true }); } }, ['Practice again']),
          ce('button', { class: 'btn lg ghost', onclick: function () { opts.onDone && opts.onDone({}); } }, ['Done']),
        ]),
      ]));
      // reward a strong session with a big center-screen moment
      if (total >= 4 && acc >= 80 && PML.ui.moment) {
        PML.ui.moment({ kind: 'generic', glyph: acc === 100 ? '🏆' : '🎯', title: acc === 100 ? 'Perfect session!' : 'Great session!', sub: correctCount + ' / ' + total + ' correct — ' + acc + '% accuracy.', sound: 'fanfare' });
      }
      PML.ui.refreshHud();
    }
    function openReviewModal(r) {
      var dlg; var node = renderReview(r, 'Close', function () { dlg && dlg.close(); });
      dlg = PML.ui.modal(node, { label: 'Question review' });
    }

    function renderLive() {
      if (i >= total) return finish();
      var ex = exercises[i];
      posLabel.textContent = (i + 1) + ' / ' + total;
      comboBadge.textContent = '⚡ ' + PML.game.comboState().count;

      var card = ce('div', { class: 'card pad view' });
      liveCard = card;
      var answered = false;
      var fbSlot = ce('div');
      var exNode = renderExercise(ex, onAnswer);
      card.appendChild(exNode);
      card.appendChild(fbSlot);

      function onAnswer(correct, pick) {
        if (answered) return; answered = true;
        results[i] = { ex: ex, correct: correct, pick: pick != null ? pick : null };
        var cardRec = PML.store.card(ex.medId); cardRec.lastPracticed = U.todayKey();
        var res = PML.game.recordAnswer(ex.medId, ex.type, correct, ex.tags);
        if (correct) correctCount++;
        PML.game.noteQuest('answer', 1);
        if (ex.type === 'vignette') PML.game.noteQuest('vignette', 1);
        var med = PML.deck.get(ex.medId);
        if (med) PML.game.noteQuest('classAnswer', 1, { cls: med.class });
        if (res.combo >= 5) PML.game.noteQuest('combo', res.combo);
        comboBadge.textContent = '⚡ ' + res.combo;
        comboBadge.classList.add('bump'); setTimeout(function () { comboBadge.classList.remove('bump'); }, 220);
        if (PML.sfxOn()) { correct ? (res.combo >= 3 ? PML.sfx.combo(res.combo) : PML.sfx.correct()) : PML.sfx.wrong(); }
        if (correct && window.PMLConfetti && res.combo && res.combo % 5 === 0) PMLConfetti.burst({ count: 50 });
        PML.ui.celebrate(res, {});
        updateGrid();
        renderFeedback(correct, res);
        PML.ui.refreshHud();
      }

      function renderFeedback(correct, res) {
        var fb = ce('div', { class: 'feedback ' + (correct ? 'ok' : 'no'), style: { marginTop: 'var(--sp-4)' } });
        fb.appendChild(ce('div', { class: 'row spread' }, [
          ce('h4', { style: { margin: 0 } }, [correct ? '✓ Correct' : '✗ Not quite']),
          ce('span', { class: 'combo-flash' }, ['+' + res.xp + ' XP' + (res.combo > 1 ? '  ×' + res.combo + ' combo' : '')]),
        ]));
        feedbackDetails(ex, correct, false).forEach(function (n) { fb.appendChild(n); });
        var next = ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' } }, [i + 1 >= total ? 'See results' : 'Continue →']);
        next.addEventListener('click', function () { i++; renderLive(); window.scrollTo({ top: 0, behavior: 'auto' }); });
        fb.appendChild(next);
        fbSlot.appendChild(fb);
        liveActive.next = function () { next.click(); };
        next.focus();
      }

      liveActive = { exNode: exNode, answered: function () { return answered; }, next: null, reviewing: false };
      active = liveActive;
      U.clear(mainSlot); mainSlot.appendChild(card);
      updateGrid();
      if (exNode._focus) exNode._focus();
    }

    renderLive();
  }

  function bigTile(big, label) { return ce('div', { class: 'tile' }, [ce('b', { text: String(big) }), ce('span', { text: label })]); }

  // ---------------- setup view ----------------
  function nothingLearnedCard(msg) {
    return ce('div', { class: 'card pad center stack' }, [
      ce('div', { style: { fontSize: '3rem' } }, ['🌱']),
      ce('h2', {}, ['Nothing to practice yet']),
      ce('p', { class: 'muted' }, [msg || 'Practice only drills meds you have already learned. Learn your first one and it will show up here.']),
      ce('button', { class: 'btn primary lg', onclick: function () { PML.ui.go('home'); } }, ['Learn a med →']),
    ]);
  }

  function view(root, params) {
    params = params || {};
    if (params.start) return start(root, params);
    var learned = learnedMeds();
    var wrap = ce('div', { class: 'view stack' });
    wrap.appendChild(ce('div', { class: 'pagehead' }, [ce('div', {}, [
      ce('h1', {}, ['Practice']),
      ce('p', { class: 'muted' }, ['An adaptive mix drawn only from the ' + learned.length + ' med' + (learned.length === 1 ? '' : 's') + ' you have learned — weighted toward what you get wrong.']),
    ])]));

    if (!learned.length) { wrap.appendChild(nothingLearnedCard()); root.appendChild(wrap); return; }

    var counts = {};
    learned.forEach(function (m) { counts[m.class] = (counts[m.class] || 0) + 1; });
    var classSel = ce('select', {}, [ce('option', { value: '', text: 'All learned meds (' + learned.length + ')' })].concat(
      PML.deck.classes().filter(function (c) { return counts[c]; }).map(function (c) { return ce('option', { value: c, text: c + ' (' + counts[c] + ')' }); })
    ));
    var countInput = ce('input', { type: 'number', min: '1', value: '12', step: '1', class: 'qcount-input', 'aria-label': 'Number of questions', inputmode: 'numeric' });
    var capNote = ce('span', { class: 'dim', style: { fontSize: '.72rem' } });
    var presets = ce('div', { class: 'qcount-presets' });
    var poolNote = ce('p', { class: 'muted', style: { fontSize: '.85rem' } });
    var cap = 0;

    // ----- topic (category) selection: which kinds of info to drill -----
    var CATS = PML.exercises.CATEGORIES;
    var catOn = {}; CATS.forEach(function (c) { catOn[c.key] = true; });   // all on by default
    var catChips = ce('div', { class: 'cat-chips' });
    function renderCatChips() {
      U.clear(catChips);
      CATS.forEach(function (c) {
        var chip = ce('button', { class: 'cat-chip' + (catOn[c.key] ? ' on' : ''), type: 'button', 'aria-pressed': catOn[c.key] ? 'true' : 'false', onclick: function () {
          catOn[c.key] = !catOn[c.key];
          if (!Object.keys(catOn).some(function (k) { return catOn[k]; })) catOn[c.key] = true; // keep ≥1 selected
          renderCatChips();
        } }, [c.label]);
        catChips.appendChild(chip);
      });
    }
    renderCatChips();
    function selectedCats() {
      var on = CATS.filter(function (c) { return catOn[c.key]; }).map(function (c) { return c.key; });
      return (on.length === CATS.length) ? null : on;   // all selected → null (full mix, incl. class items)
    }
    var catAll = ce('button', { class: 'btn sm ghost', type: 'button', onclick: function () { CATS.forEach(function (c) { catOn[c.key] = true; }); renderCatChips(); } }, ['All']);

    function clampCount() { var v = Math.round(+countInput.value || 0); if (v < 1) v = 1; if (v > cap) v = cap; countInput.value = v; return v; }
    function syncCap() {
      var opts = { classFilter: classSel.value || null };
      var n = candidatePool(opts).length;
      cap = maxQuestions(opts);
      countInput.max = String(cap);
      capNote.textContent = '(1–' + cap + ')';
      poolNote.textContent = n + ' med' + (n === 1 ? '' : 's') + ' learned' + (classSel.value ? ' in ' + classSel.value : '') +
        ' → up to ' + cap + ' question' + (cap === 1 ? '' : 's') + '. Learn more to unlock longer sessions.';
      U.clear(presets);
      [5, 10, 20, 50, 100].filter(function (x) { return x < cap; }).concat([cap]).forEach(function (x) {
        presets.appendChild(ce('button', { class: 'btn sm ghost', type: 'button', onclick: function () { countInput.value = x; clampCount(); } }, [String(x)]));
      });
      clampCount();
    }
    classSel.addEventListener('change', syncCap);
    countInput.addEventListener('change', clampCount);
    countInput.addEventListener('blur', clampCount);

    wrap.appendChild(ce('div', { class: 'card pad stack' }, [
      ce('div', { class: 'filters' }, [ce('span', { class: 'muted' }, ['Focus:']), classSel]),
      ce('div', { class: 'topic-row' }, [
        ce('div', { class: 'row spread', style: { alignItems: 'baseline' } }, [ce('span', { class: 'muted' }, ['Include topics:']), catAll]),
        catChips,
        ce('p', { class: 'dim', style: { fontSize: '.72rem' } }, ['Tap to include/exclude the kinds of information you want quizzed. All on = the full adaptive mix.']),
      ]),
      ce('div', { class: 'qcount-row' }, [ce('span', { class: 'muted' }, ['Questions:']), countInput, capNote, presets]),
      poolNote,
      ce('button', { class: 'btn primary lg block', onclick: function () { start(root, { classFilter: classSel.value || null, n: clampCount(), categories: selectedCats() }); } }, ['▶ Start practice']),
    ]));
    syncCap();
    root.appendChild(wrap);
  }

  function start(root, opts) {
    U.clear(root);
    var cap = maxQuestions(opts);
    if (!cap) { root.appendChild(nothingLearnedCard(opts.classFilter ? 'You have not learned any ' + opts.classFilter + ' yet.' : null)); return; }
    var exercises = buildSession(Math.min(cap, opts.n || 12), { classFilter: opts.classFilter, medId: opts.medId, categories: opts.categories });
    if (!exercises.length) {
      root.appendChild(ce('div', { class: 'card pad center stack' }, [
        ce('p', {}, [opts.categories && opts.categories.length ? 'No questions could be built from the topics you selected for what you have learned so far. Try selecting more topics or learning a few more meds.' : 'Could not build a session from what you have learned so far. Learn a few more meds first.']),
        ce('button', { class: 'btn', onclick: function () { PML.ui.go('practice'); } }, ['Back to setup']),
      ]));
      return;
    }
    runSession(root, { exercises: exercises, onDone: function (r) { if (r && r.again) start(root, opts); else PML.ui.go('home'); } });
  }

  function key(e) {
    if (PML.ui.celebActive && PML.ui.celebActive()) return;   // a blocking celebration owns the keyboard
    if (!active || active.reviewing || !active.exNode) return;
    if (active.answered && active.answered()) { if ((e.key === 'Enter' || e.key === ' ') && active.next) { e.preventDefault(); active.next(); } return; }
    var n = active.exNode;
    if (n._choose && /^[1-9]$/.test(e.key)) { e.preventDefault(); n._choose(+e.key - 1); }
    else if (n._submit && e.key === 'Enter') { e.preventDefault(); n._submit(); }
  }

  PML.practice = { view: view, buildSession: buildSession, runSession: runSession, renderExercise: renderExercise, key: key, learnedMeds: learnedMeds, candidatePool: candidatePool, maxQuestions: maxQuestions };
})();
