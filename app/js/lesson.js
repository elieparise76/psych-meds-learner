/* lesson.js — the substantive learning flow (v2). Learning a new med is a longer, conversational
 * lesson narrated by Neuro (the same mascot as the tutorial): general → specific. Some cards are
 * Neuro just explaining (tap Continue), some are quick checks. "Learned" is earned by working
 * through it. Lesson content = window.LESSONS (generated, clinical-first); full card from the deck. */
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

    var slides = [{ kind: 'intro' }];
    (lesson.steps || []).forEach(function (st) { slides.push({ kind: 'step', step: st }); });
    if (lesson.trap) slides.push({ kind: 'trap' });
    slides.push({ kind: 'takeaway' });

    var idx = 0, correctChecks = 0;
    var totalChecks = (lesson.steps || []).filter(function (s) { return s.check; }).length;
    PML.game.resetCombo();

    function bar() {
      var wrap = ce('div', { class: 'q-progress', style: { marginBottom: 'var(--sp-4)' } });
      slides.forEach(function (_, k) { wrap.appendChild(ce('i', { class: k < idx ? 'done' : (k === idx ? 'cur' : '') })); });
      return wrap;
    }
    function shell(children) {
      U.clear(container);
      container.appendChild(ce('div', { class: 'lesson-wrap view' }, [bar()].concat(children)));
    }
    function next() { idx++; sfx('advance'); render(); }
    function render() {
      var s = slides[idx];
      if (!s) return finish();
      if (s.kind === 'intro') return intro();
      if (s.kind === 'step') return step(s.step);
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
        ce('div', { class: 'dim center', style: { fontSize: '.72rem' } }, [(lesson.steps || []).length + ' quick cards · full reference at the end']),
      ])]);
    }

    function step(st) {
      var card = ce('div', { class: 'card pad stack' });
      card.appendChild(ce('div', { class: 'q-type-label' }, [st.check ? 'Learn & check · ' + (st.title || '') : 'Neuro explains · ' + (st.title || '')]));
      card.appendChild(saysBubble(st.teach));

      if (!st.check) {
        card.appendChild(ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' }, onclick: next }, ['Got it — continue →']));
        shell([card]);
        return;
      }
      // check card
      var answered = false;
      var check = st.check;
      card.appendChild(ce('div', { class: 'lesson-check-q' }, [check.q]));
      var list = ce('div', { class: 'opt-list' });
      var fbSlot = ce('div');
      check.options.forEach(function (opt, i) {
        var b = ce('button', { class: 'opt', 'data-opt': opt }, [ce('span', { class: 'key' }, [String(i + 1)]), ce('span', { text: opt })]);
        b.addEventListener('click', function () {
          if (answered) return; answered = true;
          var correct = opt === check.answer;
          U.qsa('.opt', list).forEach(function (x) { x.disabled = true; if (x.dataset.opt === check.answer) x.classList.add('correct'); });
          if (!correct) b.classList.add('wrong');
          if (correct) { correctChecks++; PML.game.addXp(6); sfx('correct'); } else sfx('wrong');
          PML.ui.refreshHud();
          var fb = ce('div', { class: 'feedback ' + (correct ? 'ok' : 'no'), style: { marginTop: 'var(--sp-3)' } }, [
            ce('h4', { style: { margin: 0 } }, [correct ? '✓ Right' : '✗ Not quite']),
            check.why ? ce('p', { class: 'muted', style: { margin: '4px 0 0', fontSize: '.9rem' } }, [check.why]) : null,
          ]);
          var cont = ce('button', { class: 'btn primary block', style: { marginTop: 'var(--sp-3)' }, onclick: next }, ['Continue →']);
          fb.appendChild(cont); fbSlot.appendChild(fb); cont.focus();
        });
        list.appendChild(b);
      });
      card.appendChild(list); card.appendChild(fbSlot);
      shell([card]);
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
        totalChecks ? ce('div', { class: 'muted center', style: { fontSize: '.85rem' } }, ['You nailed ' + correctChecks + ' / ' + totalChecks + ' checks. It comes back in review tomorrow.']) : null,
        full,
        ce('button', { class: 'btn primary lg block', onclick: finish }, ['✓ Add ' + med.generic + ' to my reviews']),
      ])]);
    }

    function finish() { sfx('goal'); var ev = PML.daily.learnNew(id); PML.ui.celebrate(ev, { anchor: container, big: true }); if (opts.onComplete) opts.onComplete(ev); }

    render();
  }

  PML.lesson = { start: start };
})();
