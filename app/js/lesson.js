/* lesson.js — the substantive learning flow (v3). Learning a new med is a longer, conversational
 * lesson narrated by Neuro (the same mascot as the tutorial): general → specific. Teaching and
 * testing live on SEPARATE pages — Neuro explains an idea, then the quick check on that idea gets
 * its own page. Any page you have already completed stays reachable (step bar + Back/Next), with
 * your answers preserved. "Learned" is earned by working through it. Lesson content =
 * window.LESSONS (generated, clinical-first); full card from the deck. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  function neuro(size) {
    if (PML.tutorial && PML.tutorial.mascot) return PML.tutorial.mascot(size || 54);
    return ce('span', { class: 'brand-mark', style: { width: (size || 54) + 'px', height: (size || 54) + 'px', fontSize: '1.4rem' } }, ['ψ']);
  }
  function sfx(name) { if (PML.sfxOn() && PML.sfx && PML.sfx[name]) PML.sfx[name](); }

  function start(container, opts) {
    opts = opts || {};
    var id = opts.id;
    var med = PML.deck.get(id);
    var lesson = (window.LESSONS || {})[id];
    if (!lesson || !med) return PML.flashcard.session(container, { ids: [id], mode: 'learn', onComplete: opts.onComplete });

    // One idea per page: the teaching page, then its check on a page of its own.
    var slides = [{ kind: 'intro' }];
    (lesson.steps || []).forEach(function (st) {
      slides.push({ kind: 'teach', step: st });
      if (st.check) slides.push({ kind: 'check', step: st });
    });
    if (lesson.trap) slides.push({ kind: 'trap' });
    slides.push({ kind: 'takeaway' });

    var idx = 0;
    var furthest = 0;      // highest page unlocked; everything at or below it is revisitable
    var answers = {};      // slide index -> { pick, correct } — kept so revisits show what you did
    var totalChecks = slides.filter(function (s) { return s.kind === 'check'; }).length;
    var stepsBar = null, navRow = null;
    PML.game.resetCombo();

    function correctChecks() {
      var n = 0;
      Object.keys(answers).forEach(function (k) { if (answers[k].correct) n++; });
      return n;
    }

    // ---------- page chrome: step bar + Back/Next ----------
    function pageLabel(k) {
      var s = slides[k], n = 'Page ' + (k + 1) + ' — ';
      if (s.kind === 'intro') return n + 'meet ' + med.generic;
      if (s.kind === 'teach') return n + (s.step.title || 'lesson');
      if (s.kind === 'check') return n + 'check: ' + (s.step.title || 'quick check');
      if (s.kind === 'trap') return n + 'watch out';
      return n + 'takeaway';
    }
    function steps() {
      var wrap = ce('div', { class: 'lesson-steps', 'aria-label': 'Lesson pages' });
      slides.forEach(function (s, k) {
        var cls = ['lesson-step'];
        if (k < furthest) cls.push('done');
        if (answers[k] && !answers[k].correct) cls.push('miss');
        if (k === idx) cls.push('cur');
        if (k <= furthest) cls.push('nav');
        var b = ce('button', { class: cls.join(' '), type: 'button', title: pageLabel(k), 'aria-label': pageLabel(k) });
        if (k > furthest) b.disabled = true;
        else b.addEventListener('click', function () { goTo(k); });
        wrap.appendChild(b);
      });
      return wrap;
    }
    function nav() {
      var back = ce('button', { class: 'btn sm ghost', type: 'button', onclick: function () { goTo(idx - 1); } }, ['← Back']);
      if (idx === 0) back.disabled = true;
      var fwd = ce('button', { class: 'btn sm ghost', type: 'button', onclick: function () { goTo(idx + 1); } }, ['Next →']);
      if (idx >= furthest) fwd.disabled = true;   // you can only re-walk pages you have finished
      return ce('div', { class: 'lesson-nav' }, [back, ce('span', { class: 'dim lesson-pos' }, ['Page ' + (idx + 1) + ' of ' + slides.length]), fwd]);
    }
    function refreshChrome() {
      if (stepsBar && stepsBar.parentNode) { var s = steps(); stepsBar.parentNode.replaceChild(s, stepsBar); stepsBar = s; }
      if (navRow && navRow.parentNode) { var n = nav(); navRow.parentNode.replaceChild(n, navRow); navRow = n; }
    }
    function shell(children) {
      U.clear(container);
      stepsBar = steps(); navRow = nav();
      container.appendChild(ce('div', { class: 'lesson-wrap view' }, [stepsBar].concat(children).concat([navRow])));
    }

    // ---------- movement ----------
    function goTo(k) {
      if (k === idx || k < 0 || k > furthest) return;
      idx = k; render();
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    function next() {
      if (slides[idx].kind === 'check' && !answers[idx]) return;   // answer before moving on
      if (idx + 1 >= slides.length) return finish();
      idx++;
      if (idx > furthest) furthest = idx;
      sfx('advance');
      render();
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
    function render() {
      var s = slides[idx];
      if (!s) return finish();
      if (s.kind === 'intro') return intro();
      if (s.kind === 'teach') return teach(s.step);
      if (s.kind === 'check') return check(s.step);
      if (s.kind === 'trap') return trap();
      if (s.kind === 'takeaway') return takeaway();
    }

    // speech-bubble row: Neuro + a bubble of text
    function saysBubble(text, extraClass) {
      return ce('div', { class: 'lesson-says ' + (extraClass || '') }, [
        ce('div', { class: 'tut-mascot' }, [neuro(56)]),
        ce('div', { class: 'tut-bubble' }, [ce('div', { class: 'tut-name' }, ['Neuro']), ce('div', { class: 'tut-bubble-text' }, [text])]),
      ]);
    }

    // ---------- pages ----------
    function intro() {
      shell([ce('div', { class: 'card pad stack' }, [
        ce('div', { class: 'row wrap', style: { gap: '6px', justifyContent: 'center' } }, [PML.render.classChip(med)].concat(PML.render.statusChips(med))),
        ce('div', { class: 'center' }, [
          ce('div', { style: { fontSize: '2.1rem', fontFamily: 'var(--font-display)', fontWeight: 700 } }, [med.generic]),
          med.pronunciation ? ce('div', { class: 'pron muted', style: { fontStyle: 'italic' } }, ['/ ' + med.pronunciation + ' /']) : null,
          PML.deck.primaryBrand(med) ? ce('div', { class: 'muted', style: { fontSize: '.85rem', marginTop: '2px' } }, ['Canadian brand: ' + PML.deck.primaryBrand(med)]) : null,
        ]),
        saysBubble(lesson.hook),
        ce('button', { class: 'btn primary lg block', onclick: next }, ['Let’s learn it →']),
        ce('div', { class: 'dim center', style: { fontSize: '.72rem' } }, [
          slides.length + ' pages' + (totalChecks ? ' · ' + totalChecks + ' quick check' + (totalChecks === 1 ? '' : 's') : '') + ' · full reference at the end',
        ]),
      ])]);
    }

    function teach(st) {
      shell([ce('div', { class: 'card pad stack' }, [
        ce('div', { class: 'q-type-label' }, ['Neuro explains · ' + (st.title || '')]),
        saysBubble(st.teach),
        ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' }, onclick: next }, [st.check ? 'Got it — quiz me →' : 'Got it — continue →']),
      ])]);
    }

    function check(st) {
      var c = st.check;
      var here = idx;                      // the page this check belongs to; nav can move idx later
      var prior = answers[here];
      var card = ce('div', { class: 'card pad stack' });
      card.appendChild(ce('div', { class: 'q-type-label' }, ['Quick check · ' + (st.title || '')]));
      card.appendChild(ce('div', { class: 'lesson-check-q' }, [c.q]));
      var list = ce('div', { class: 'opt-list' });
      var fbSlot = ce('div');

      c.options.forEach(function (opt, i) {
        var b = ce('button', { class: 'opt', 'data-opt': opt }, [ce('span', { class: 'key' }, [String(i + 1)]), ce('span', { text: opt })]);
        if (prior) {
          b.disabled = true;
          if (opt === c.answer) b.classList.add('correct');
          else if (opt === prior.pick) b.classList.add('wrong');
        } else {
          b.addEventListener('click', function () { commit(opt, b); });
        }
        list.appendChild(b);
      });
      card.appendChild(list);
      card.appendChild(fbSlot);
      shell([card]);
      if (prior) feedback(prior.correct, false);

      function commit(opt, b) {
        if (answers[here]) return;
        var correct = opt === c.answer;
        answers[here] = { pick: opt, correct: correct };
        U.qsa('.opt', list).forEach(function (x) { x.disabled = true; if (x.dataset.opt === c.answer) x.classList.add('correct'); });
        if (!correct) b.classList.add('wrong');
        if (correct) { PML.game.addXp(6); sfx('correct'); } else sfx('wrong');
        PML.ui.refreshHud();
        refreshChrome();
        feedback(correct, true);
      }
      function feedback(correct, focus) {
        U.clear(fbSlot);
        var fb = ce('div', { class: 'feedback ' + (correct ? 'ok' : 'no'), style: { marginTop: 'var(--sp-3)' } }, [
          ce('h4', { style: { margin: 0 } }, [correct ? '✓ Right' : '✗ Not quite']),
          c.why ? ce('p', { class: 'muted', style: { margin: '4px 0 0', fontSize: '.9rem' } }, [c.why]) : null,
        ]);
        var cont = ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' }, onclick: next }, ['Continue →']);
        fb.appendChild(cont); fbSlot.appendChild(fb);
        if (focus) cont.focus();
      }
    }

    function trap() {
      shell([ce('div', { class: 'card pad stack' }, [
        ce('div', { class: 'q-type-label' }, ['⚠ Watch out']),
        saysBubble(lesson.trap, 'trap'),
        ce('button', { class: 'btn primary block', onclick: next }, ['Got it →']),
      ])]);
    }

    function takeaway() {
      var full = ce('details', { class: 'lesson-full' });
      full.appendChild(ce('summary', {}, ['📖 See the full card (all data + sources)']));
      var body = ce('div', { class: 'stack', style: { marginTop: 'var(--sp-3)' } });
      PML.render.factGroups(med).forEach(function (g) { body.appendChild(g); });
      full.appendChild(body);
      shell([ce('div', { class: 'card pad stack' }, [
        ce('div', { class: 'q-type-label center' }, ['The one thing to remember']),
        saysBubble(lesson.takeaway),
        totalChecks ? ce('div', { class: 'muted center', style: { fontSize: '.85rem' } }, ['You nailed ' + correctChecks() + ' / ' + totalChecks + ' checks. It comes back in review tomorrow.']) : null,
        full,
        ce('button', { class: 'btn primary lg block', onclick: finish }, ['✓ Add ' + med.generic + ' to my reviews']),
      ])]);
    }

    function finish() { sfx('goal'); var ev = PML.daily.learnNew(id); PML.ui.celebrate(ev, { anchor: container, big: true }); if (opts.onComplete) opts.onComplete(ev); }

    render();
  }

  PML.lesson = { start: start };
})();
