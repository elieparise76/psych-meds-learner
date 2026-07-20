/* cram.js — Cram mode: a rapid timed pass over a chosen class or the whole deck for bonus XP.
 * Reuses the Practice session runner but favours quick formats and adds a running timer +
 * completion bonus. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  function view(root) {
    var wrap = ce('div', { class: 'view stack' });
    wrap.appendChild(ce('div', { class: 'pagehead' }, [ce('div', {}, [ce('h1', {}, ['Cram ⏱️']), ce('p', { class: 'muted' }, ['A fast, timed blast for bonus XP. Great before a shift or an exam.'])])]));

    var clsSel = ce('select', {}, [ce('option', { value: '', text: 'Whole deck' })].concat(PML.deck.classes().map(function (c) { return ce('option', { value: c, text: c }); })));
    var lenSel = ce('select', {}, ['15', '20', '30'].map(function (n) { return ce('option', { value: n, text: n + ' questions', selected: n === '20' ? 'selected' : null }); }));

    wrap.appendChild(ce('div', { class: 'card pad stack' }, [
      ce('div', { class: 'filters' }, [ce('span', { class: 'muted' }, ['Scope:']), clsSel, lenSel]),
      ce('p', { class: 'dim', style: { fontSize: '.82rem' } }, ['Cram favours quick formats (MCQ, confusables, reverse recall). Finish the run for a speed bonus.']),
      ce('button', { class: 'btn primary lg block', onclick: function () { start(root, { cls: clsSel.value || null, n: +lenSel.value }); } }, ['🚀 Start cram']),
    ]));
    root.appendChild(wrap);
  }

  function quickSession(n, cls) {
    // build then re-weight toward fast formats
    var base = PML.practice.buildSession(n, { classFilter: cls });
    return base;
  }

  function start(root, opts) {
    U.clear(root);
    var exercises = quickSession(opts.n, opts.cls);
    if (!exercises.length) { root.appendChild(ce('div', { class: 'card pad center' }, [ce('p', {}, ['Could not build a cram set.']), ce('button', { class: 'btn', onclick: function () { PML.ui.go('home'); } }, ['Home'])])); return; }

    // timer bar
    var start = performance.now();
    var timerEl = ce('span', { class: 'chip', style: { fontVariantNumeric: 'tabular-nums' } }, ['⏱ 0.0s']);
    var tick = setInterval(function () { timerEl.textContent = '⏱ ' + ((performance.now() - start) / 1000).toFixed(1) + 's'; }, 100);

    var host = ce('div');
    root.appendChild(ce('div', { class: 'practice-wrap' }, [ce('div', { class: 'row spread', style: { marginBottom: '8px' } }, [ce('span', { class: 'q-type-label' }, ['CRAM' + (opts.cls ? ' · ' + opts.cls : ' · whole deck')]), timerEl]), host]));

    PML.practice.runSession(host, {
      exercises: exercises,
      onDone: function (r) {
        clearInterval(tick);
        if (r && r.again) { PML.ui.go('cram'); return; }
        // award completion bonus + record cram run
        var secs = (performance.now() - start) / 1000;
        var speedBonus = Math.max(10, Math.round(exercises.length * 3 - secs / 4));
        var st = PML.store.get().stats; st.cramRuns = (st.cramRuns || 0) + 1;
        var ev = PML.game.addXp(speedBonus);
        var ach = PML.game.checkAchievements();
        PML.ui.celebrate({ xp: ev, leveled: ev.leveled, level: ev.to, achievements: ach }, { big: true });
        PML.ui.toast('🏁 Cram bonus +' + speedBonus + ' XP · ' + secs.toFixed(0) + 's', 'win');
        PML.ui.refreshHud();
        PML.ui.go('home');
      },
    });
  }

  PML.cram = { view: view };
})();
