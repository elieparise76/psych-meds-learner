/* practice.js — the adaptive Practice engine (Duolingo-style). Mixes exercise types, never
 * the same format twice in a row, weighted toward the meds and fact-types the user gets wrong.
 * Separate from the SRS: SRS schedules WHEN a card is due; this decides WHAT to drill now. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  // ---------------- adaptive selection ----------------
  function candidatePool(opts) {
    var all = PML.deck.all();
    var learned = all.filter(function (m) { return PML.store.get().cards[m.id].learned; });
    var base = (opts && opts.classFilter) ? all.filter(function (m) { return m.class === opts.classFilter; }) : (learned.length >= 4 ? learned : all);
    if (opts && opts.classFilter) { var lf = base.filter(function (m) { return PML.store.get().cards[m.id].learned; }); if (lf.length >= 4) base = lf; }
    return base;
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

  function buildSession(n, opts) {
    opts = opts || {};
    var pool = candidatePool(opts);
    if (!pool.length) return [];
    var exercises = [];
    var lastType = null, lastMed = null, guard = 0;
    while (exercises.length < n && guard < n * 12) {
      guard++;
      var med = opts.medId ? PML.deck.get(opts.medId) : weightedPick(pool, medWeight);
      if (med === lastMed && pool.length > 2) continue;
      var type = typeFor(med, lastType);
      var ex = PML.exercises.generate(type, med, lastType);
      if (!ex) continue;
      if (ex.type === lastType && exercises.length) continue; // never same format twice in a row
      exercises.push(ex);
      lastType = ex.type; lastMed = med;
    }
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
        onAnswer(correct);
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
      onAnswer(correct);
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
      onAnswer(correct);
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

  // ---------------- session runner ----------------
  var active = null; // { exNode, ...} for keyboard

  function runSession(root, opts) {
    var exercises = opts.exercises;
    var i = 0, correctCount = 0;
    PML.game.resetCombo();
    PML.store.get().stats.sessions = (PML.store.get().stats.sessions || 0) + 1;

    function finish() {
      active = null;
      var acc = exercises.length ? Math.round(correctCount / exercises.length * 100) : 0;
      U.clear(root);
      root.appendChild(ce('div', { class: 'card pad center view stack' }, [
        ce('div', { style: { fontSize: '3rem' } }, [acc >= 80 ? '🎉' : acc >= 50 ? '👍' : '💪']),
        ce('h2', {}, ['Session complete']),
        ce('div', { class: 'stat-tiles' }, [
          bigTile(correctCount + '/' + exercises.length, 'correct'),
          bigTile(acc + '%', 'accuracy'),
          bigTile(PML.game.comboState().best, 'best combo'),
        ]),
        ce('div', { class: 'row', style: { justifyContent: 'center', gap: '8px' } }, [
          ce('button', { class: 'btn primary lg', onclick: function () { opts.onDone && opts.onDone({ again: true }); } }, ['Practice again']),
          ce('button', { class: 'btn lg ghost', onclick: function () { opts.onDone && opts.onDone({}); } }, ['Done']),
        ]),
      ]));
      PML.ui.refreshHud();
    }

    function render() {
      if (i >= exercises.length) return finish();
      var ex = exercises[i];
      U.clear(root);

      var dots = ce('div', { class: 'q-progress' });
      exercises.forEach(function (_, k) { dots.appendChild(ce('i', { class: k < i ? 'done' : (k === i ? 'cur' : '') })); });

      var comboBadge = ce('span', { class: 'chip combo-badge' }, ['⚡ ' + PML.game.comboState().count]);
      var head = ce('div', { class: 'row spread', style: { marginBottom: '4px' } }, [
        ce('span', { class: 'muted', text: (i + 1) + ' / ' + exercises.length }), comboBadge,
      ]);

      var card = ce('div', { class: 'card pad view' });
      var answered = false;
      var exNode = renderExercise(ex, onAnswer);
      card.appendChild(exNode);
      var fbSlot = ce('div');
      card.appendChild(fbSlot);

      function onAnswer(correct) {
        if (answered) return; answered = true;
        var cardRec = PML.store.card(ex.medId); cardRec.lastPracticed = U.todayKey();
        var res = PML.game.recordAnswer(ex.medId, ex.type, correct, ex.tags);
        if (correct) correctCount++;
        // quests
        PML.game.noteQuest('answer', 1);
        if (ex.type === 'vignette') PML.game.noteQuest('vignette', 1);
        var med = PML.deck.get(ex.medId);
        if (med) PML.game.noteQuest('classAnswer', 1, { cls: med.class });
        if (res.combo >= 5) PML.game.noteQuest('combo', res.combo);
        // combo badge bump
        comboBadge.textContent = '⚡ ' + res.combo;
        comboBadge.classList.add('bump'); setTimeout(function () { comboBadge.classList.remove('bump'); }, 220);
        // sound + celebration
        if (PML.sfxOn()) { correct ? (res.combo >= 3 ? PML.sfx.combo(res.combo) : PML.sfx.correct()) : PML.sfx.wrong(); }
        if (correct && window.PMLConfetti && res.combo && res.combo % 5 === 0) PMLConfetti.burst({ count: 50 });
        PML.ui.celebrate(res, {});
        renderFeedback(correct, res);
        PML.ui.refreshHud();
      }

      function renderFeedback(correct, res) {
        var fb = ce('div', { class: 'feedback ' + (correct ? 'ok' : 'no'), style: { marginTop: 'var(--sp-4)' } });
        fb.appendChild(ce('div', { class: 'row spread' }, [
          ce('h4', { style: { margin: 0 } }, [correct ? '✓ Correct' : '✗ Not quite']),
          ce('span', { class: 'combo-flash' }, ['+' + res.xp + ' XP' + (res.combo > 1 ? '  ×' + res.combo + ' combo' : '')]),
        ]));
        if (!correct && ex.answerDisplay) fb.appendChild(ce('p', { style: { margin: '6px 0 0' } }, [ce('b', {}, ['Answer: ']), ex.answerDisplay]));
        if (!correct && ex.answer && !ex.answerDisplay) fb.appendChild(ce('p', { style: { margin: '6px 0 0' } }, [ce('b', {}, ['Answer: ']), ex.answer]));
        if (ex.explanation) fb.appendChild(ce('p', { class: 'muted', style: { margin: '6px 0 0', fontSize: '.9rem' } }, [ex.explanation]));
        if (ex.source && ex.source.name) {
          var src = ex.source.url ? ce('a', { class: 'src-link', href: ex.source.url, target: '_blank', rel: 'noopener' }, ['Source: ' + ex.source.name]) : ce('span', { class: 'src-link' }, ['Source: ' + ex.source.name]);
          fb.appendChild(ce('div', { style: { marginTop: '6px' } }, [src]));
        }
        var next = ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' } }, [i + 1 >= exercises.length ? 'See results' : 'Continue →']);
        next.addEventListener('click', function () { i++; render(); });
        fb.appendChild(next);
        fbSlot.appendChild(fb);
        active.next = function () { next.click(); };
        next.focus();
      }

      root.appendChild(ce('div', { class: 'practice-wrap' }, [dots, head, card]));
      active = { exNode: exNode, answered: function () { return answered; }, next: null };
      if (exNode._focus) exNode._focus();
    }

    render();
  }

  function bigTile(big, label) { return ce('div', { class: 'tile' }, [ce('b', { text: String(big) }), ce('span', { text: label })]); }

  // ---------------- setup view ----------------
  function view(root, params) {
    params = params || {};
    if (params.start) return start(root, params);
    var learned = PML.deck.all().filter(function (m) { return PML.store.get().cards[m.id].learned; }).length;
    var wrap = ce('div', { class: 'view stack' });
    wrap.appendChild(ce('div', { class: 'pagehead' }, [ce('div', {}, [ce('h1', {}, ['Practice']), ce('p', { class: 'muted' }, ['An adaptive mix — weighted toward what you get wrong. ' + learned + ' meds learned so far.'])])]));

    var classSel = ce('select', {}, [ce('option', { value: '', text: 'All learned meds' })].concat(PML.deck.classes().map(function (c) { return ce('option', { value: c, text: c }); })));
    var lenSel = ce('select', {}, ['8', '12', '20'].map(function (n) { return ce('option', { value: n, text: n + ' questions', selected: n === '12' ? 'selected' : null }); }));

    wrap.appendChild(ce('div', { class: 'card pad stack' }, [
      ce('div', { class: 'filters' }, [ce('span', { class: 'muted' }, ['Focus:']), classSel, lenSel]),
      ce('button', { class: 'btn primary lg block', onclick: function () { start(root, { classFilter: classSel.value || null, n: +lenSel.value }); } }, ['▶ Start practice']),
      learned < 1 ? ce('p', { class: 'muted', style: { fontSize: '.85rem' } }, ['Tip: learn a med from Home first — practice draws from what you have learned (and everything, until you have a few).']) : null,
    ]));
    root.appendChild(wrap);
  }

  function start(root, opts) {
    U.clear(root);
    var exercises = buildSession(opts.n || 12, { classFilter: opts.classFilter, medId: opts.medId });
    if (!exercises.length) { root.appendChild(ce('div', { class: 'card pad center' }, [ce('p', {}, ['Could not build a session. Learn a few meds first.']), ce('button', { class: 'btn', onclick: function () { PML.ui.go('home'); } }, ['Home'])])); return; }
    runSession(root, { exercises: exercises, onDone: function (r) { if (r && r.again) start(root, opts); else PML.ui.go('home'); } });
  }

  function key(e) {
    if (!active || !active.exNode) return;
    if (active.answered && active.answered()) { if ((e.key === 'Enter' || e.key === ' ') && active.next) { e.preventDefault(); active.next(); } return; }
    var n = active.exNode;
    if (n._choose && /^[1-9]$/.test(e.key)) { e.preventDefault(); n._choose(+e.key - 1); }
    else if (n._submit && e.key === 'Enter') { e.preventDefault(); n._submit(); }
  }

  PML.practice = { view: view, buildSession: buildSession, runSession: runSession, renderExercise: renderExercise, key: key };
})();
