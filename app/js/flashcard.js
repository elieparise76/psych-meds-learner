/* flashcard.js — the plain flip-card surface. Front prompt → reveal structured facts (3D
 * flip) → self-rate (feeds SRS). No games layered on top. Drives both "Learn a new med" and
 * "Review" (SRS due queue). */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  function frontFace(med) {
    return ce('div', { class: 'face front' }, [
      ce('div', { class: 'row wrap', style: { gap: '6px' } }, [PML.render.classChip(med)].concat(PML.render.statusChips(med))),
      ce('div', { class: 'flash-front-prompt' }, [
        ce('div', { class: 'generic' }, [med.generic]),
        med.pronunciation ? ce('div', { class: 'pron' }, ['/ ' + med.pronunciation + ' /']) : null,
        PML.deck.primaryBrand(med) ? ce('div', { class: 'muted', style: { marginTop: '8px', fontSize: '.85rem' } }, ['Canadian brand: ' + PML.deck.primaryBrand(med)]) : null,
      ]),
      ce('div', { class: 'center muted', style: { fontSize: '.8rem' } }, ['Tap or press Space to reveal']),
    ]);
  }

  function backFace(med) {
    var back = ce('div', { class: 'face back' });
    back.appendChild(ce('div', { class: 'row spread wrap' }, [
      ce('h2', { style: { margin: 0 } }, [med.generic]),
      ce('span', { class: 'muted', text: med.subclass || med.class }),
    ]));
    PML.render.factGroups(med).forEach(function (g) { back.appendChild(g); });
    return back;
  }

  function session(container, opts) {
    opts = opts || {};
    var ids = opts.ids || [];
    var mode = opts.mode || 'review';
    var i = 0;
    var revealed = false;
    var reviewed = 0;

    function done() {
      U.clear(container);
      var summaryCard = ce('div', { class: 'card pad center view' }, [
        ce('div', { style: { fontSize: '3rem' } }, [mode === 'learn' ? '🎉' : '✅']),
        ce('h2', {}, [mode === 'learn' ? 'Learned!' : 'Reviews cleared']),
        ce('p', { class: 'muted' }, [reviewed + ' card' + (reviewed === 1 ? '' : 's') + ' ' + (mode === 'learn' ? 'added to your review schedule.' : 'reviewed. Nice work.')]),
        ce('button', { class: 'btn primary lg', onclick: function () { opts.onComplete && opts.onComplete({ reviewed: reviewed }); } }, ['Continue']),
      ]);
      container.appendChild(summaryCard);
      if (mode === 'review') { PML.daily.markReviewsCleared(); }
      PML.ui && PML.ui.refreshHud && PML.ui.refreshHud();
    }

    function render() {
      if (i >= ids.length) return done();
      revealed = false;
      var med = PML.deck.get(ids[i]);
      U.clear(container);

      var progress = ce('div', { class: 'row spread', style: { marginBottom: 'var(--sp-4)' } }, [
        ce('span', { class: 'q-type-label' }, [mode === 'learn' ? 'New medication' : 'Review']),
        ce('span', { class: 'muted', text: (i + 1) + ' / ' + ids.length }),
      ]);

      var flip = ce('div', { class: 'flip' });
      var inner = ce('div', { class: 'flip-inner' }, [frontFace(med), backFace(med)]);
      flip.appendChild(inner);
      flip.addEventListener('click', function () { if (!revealed) reveal(); });

      var actions = ce('div', { class: 'stack', style: { marginTop: 'var(--sp-4)' } });

      function reveal() {
        if (revealed) return;
        revealed = true;
        flip.classList.add('flipped');
        if (PML.sfxOn()) PML.sfx.flip();
        U.clear(actions);
        if (mode === 'learn') {
          actions.appendChild(ce('button', { class: 'btn primary block lg', onclick: learnIt }, ['✓ Learn this — add to my reviews']));
        } else {
          actions.appendChild(ce('div', { class: 'muted center', style: { fontSize: '.82rem', marginBottom: '4px' } }, ['How well did you recall it?']));
          actions.appendChild(rateRow(med));
        }
      }
      function learnIt() {
        var ev = PML.daily.learnNew(med.id);
        reviewed++;
        PML.ui.celebrate(ev, { anchor: flip });
        i++; render();
      }
      function rate(q) {
        PML.srs.review(med.id, q);
        // learning-mode reviews also count as "answered" lightly; award small XP
        var xpEv = PML.game.addXp(q >= 4 ? 8 : q === 3 ? 6 : 3);
        reviewed++;
        if (xpEv.leveled) PML.ui.celebrate({ xp: xpEv, leveled: true, level: xpEv.to }, { anchor: flip });
        PML.ui.refreshHud();
        i++; render();
      }
      function rateRow() {
        var wrap = ce('div', { class: 'rate' });
        [['again', 'Again', 2, '<1d'], ['hard', 'Hard', 3, ''], ['good', 'Good', 4, ''], ['easy', 'Easy', 5, '']].forEach(function (b) {
          wrap.appendChild(ce('button', { class: b[0], onclick: function () { rate(b[2]); } }, [
            ce('span', { text: b[1] }), ce('small', { text: b[0] === 'again' ? 'reset' : PML.srs.nextLabel ? '' : '' }),
          ]));
        });
        return wrap;
      }

      // keyboard
      flip._reveal = reveal; flip._rate = rate; flip._mode = mode;
      container._active = flip;

      container.appendChild(ce('div', { class: 'flash-wrap view' }, [progress, flip, actions]));
    }

    render();
  }

  // keyboard handler (registered once by ui)
  function key(e) {
    var host = PML.ui.currentFlash && PML.ui.currentFlash();
    if (!host || !host._active) return;
    var f = host._active;
    if ((e.key === ' ' || e.key === 'Enter') && !f.classList.contains('flipped')) { e.preventDefault(); f._reveal(); return; }
    if (f.classList.contains('flipped') && f._mode === 'review') {
      var map = { '1': 2, '2': 3, '3': 4, '4': 5 };
      if (map[e.key]) { e.preventDefault(); f._rate(map[e.key]); }
    }
  }

  PML.flashcard = { session: session, key: key };
})();
