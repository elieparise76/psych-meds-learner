/* lesson.js — the substantive learning flow (Duolingo-style). When you "learn" a new med you
 * get a short lesson that teaches the 3–5 highest-yield points one at a time, each with a quick
 * check, then the full reference card. "Learned" is earned by working through it — not a tap.
 * Lesson content lives in window.LESSONS (generated); the full card comes from the deck. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  function start(container, opts) {
    opts = opts || {};
    var id = opts.id;
    var med = PML.deck.get(id);
    var lesson = (window.LESSONS || {})[id];

    // Fallback: if no authored lesson, use the plain flashcard learn flow.
    if (!lesson || !med) {
      return PML.flashcard.session(container, { ids: [id], mode: 'learn', onComplete: opts.onComplete });
    }

    // Build the slide list.
    var slides = [{ kind: 'intro' }];
    (lesson.steps || []).forEach(function (st, i) { slides.push({ kind: 'step', step: st, i: i }); });
    if (lesson.trap) slides.push({ kind: 'trap' });
    slides.push({ kind: 'takeaway' });

    var idx = 0, correctChecks = 0, totalChecks = (lesson.steps || []).length;
    PML.game.resetCombo();

    function progressBar() {
      var wrap = ce('div', { class: 'q-progress', style: { marginBottom: 'var(--sp-4)' } });
      slides.forEach(function (_, k) { wrap.appendChild(ce('i', { class: k < idx ? 'done' : (k === idx ? 'cur' : '') })); });
      return wrap;
    }
    function shell(children) {
      U.clear(container);
      container.appendChild(ce('div', { class: 'lesson-wrap view' }, [progressBar()].concat(children)));
    }
    function next() { idx++; render(); }

    function render() {
      var s = slides[idx];
      if (!s) return finish();
      if (s.kind === 'intro') return intro();
      if (s.kind === 'step') return step(s.step);
      if (s.kind === 'trap') return trap();
      if (s.kind === 'takeaway') return takeaway();
    }

    function buddy() {
      var p = PML.store.get().profile;
      return p && PML.profile ? PML.profile.avatarEl(p.avatar, 44) : ce('span', { class: 'brand-mark', style: { width: '44px', height: '44px', fontSize: '1.4rem' } }, ['ψ']);
    }

    function intro() {
      shell([ce('div', { class: 'card pad stack center' }, [
        ce('div', { class: 'row', style: { justifyContent: 'center', gap: '10px' } }, [PML.render.classChip(med)].concat(PML.render.statusChips(med))),
        ce('div', { style: { fontSize: '2.4rem', fontFamily: 'var(--font-display)', fontWeight: 700 } }, [med.generic]),
        med.pronunciation ? ce('div', { class: 'pron muted', style: { fontStyle: 'italic' } }, ['/ ' + med.pronunciation + ' /']) : null,
        PML.deck.primaryBrand(med) ? ce('div', { class: 'muted', style: { fontSize: '.85rem' } }, ['Canadian brand: ' + PML.deck.primaryBrand(med)]) : null,
        ce('div', { class: 'lesson-hook' }, ['“' + lesson.hook + '”']),
        ce('button', { class: 'btn primary lg block', onclick: next }, ['Let’s learn it →']),
        ce('div', { class: 'dim', style: { fontSize: '.72rem' } }, [totalChecks + ' quick point' + (totalChecks === 1 ? '' : 's') + ' · full card at the end']),
      ])]);
    }

    function step(st) {
      var answered = false;
      var card = ce('div', { class: 'card pad stack' });
      card.appendChild(ce('div', { class: 'q-type-label' }, ['Learn · ' + (st.title || 'Key point')]));
      card.appendChild(ce('div', { class: 'lesson-teach' }, [st.teach]));

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
          if (correct) { correctChecks++; PML.game.addXp(6); if (PML.sfxOn()) PML.sfx.correct(); }
          else if (PML.sfxOn()) PML.sfx.wrong();
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
      shell([ce('div', { class: 'card pad stack center' }, [
        ce('div', { style: { fontSize: '2rem' } }, ['⚠️']),
        ce('h3', { style: { margin: 0 } }, ['Watch out']),
        ce('div', { class: 'lesson-teach', style: { textAlign: 'center' } }, [lesson.trap]),
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
        ce('div', { class: 'center stack' }, [
          buddy(),
          ce('div', { class: 'q-type-label' }, ['The one thing to remember']),
          ce('div', { class: 'lesson-takeaway' }, [lesson.takeaway]),
          ce('div', { class: 'muted', style: { fontSize: '.85rem' } }, ['You got ' + correctChecks + ' / ' + totalChecks + ' checks. It’ll come back in review tomorrow.']),
        ]),
        full,
        ce('button', { class: 'btn primary lg block', onclick: finish }, ['✓ Add ' + med.generic + ' to my reviews']),
      ])]);
    }

    function finish() {
      var ev = PML.daily.learnNew(id);
      PML.ui.celebrate(ev, { anchor: container, big: true });
      if (opts.onComplete) opts.onComplete(ev);
    }

    render();
  }

  PML.lesson = { start: start };
})();
