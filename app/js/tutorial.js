/* tutorial.js — the guided walkthrough. A little animated SVG mascot ("Neuro") steps through
 * every feature with a speech bubble. Text always works; each step also plays app/audio/<id>.mp3
 * IF that clip exists (generated optionally via pipeline/build-tutorial-audio.js) and narration
 * is enabled. Offered on first run (after profile), replayable from Settings and the ? button. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  // ---- mascot ----
  var NEURO_SVG =
    '<defs><linearGradient id="neuroGrad" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0" stop-color="#b79bff"/><stop offset="1" stop-color="#8a5cf6"/></linearGradient></defs>' +
    '<g class="neuro-bob">' +
    '<path d="M45 28 Q40 10 34 6" stroke="#8a5cf6" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<circle cx="33" cy="5" r="5" fill="#ffb020"/>' +
    '<path d="M75 28 Q80 10 86 6" stroke="#8a5cf6" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<circle cx="87" cy="5" r="5" fill="#37d9a0"/>' +
    '<ellipse cx="60" cy="66" rx="42" ry="40" fill="url(#neuroGrad)"/>' +
    '<ellipse cx="60" cy="75" rx="27" ry="24" fill="#c9b6ff" opacity=".45"/>' +
    '<circle cx="37" cy="73" r="7" fill="#ff9ed0" opacity=".55"/>' +
    '<circle cx="83" cy="73" r="7" fill="#ff9ed0" opacity=".55"/>' +
    '<g class="neuro-eyes">' +
    '<ellipse cx="47" cy="60" rx="9" ry="11" fill="#fff"/><ellipse cx="73" cy="60" rx="9" ry="11" fill="#fff"/>' +
    '<circle cx="49" cy="62" r="4.6" fill="#241436"/><circle cx="71" cy="62" r="4.6" fill="#241436"/>' +
    '<circle cx="50.6" cy="60.4" r="1.6" fill="#fff"/><circle cx="72.6" cy="60.4" r="1.6" fill="#fff"/>' +
    '</g>' +
    '<path d="M50 80 Q60 90 70 80" stroke="#241436" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '</g>';

  function mascot(size) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 120 120'); s.setAttribute('width', size); s.setAttribute('height', size);
    s.setAttribute('class', 'neuro'); s.innerHTML = NEURO_SVG;
    return s;
  }

  // ---- audio (optional) ----
  var currentAudio = null;
  function stopAudio() { if (currentAudio) { try { currentAudio.pause(); } catch (e) {} currentAudio = null; } }
  function playStep(id) {
    stopAudio();
    var s = PML.store.get().settings;
    if (s.voice === false) return;
    try {
      var a = new Audio('app/audio/' + id + '.mp3');
      a.addEventListener('error', function () {}); // missing clip → silent
      currentAudio = a;
      var p = a.play();
      if (p && p.catch) p.catch(function () {}); // autoplay block → silent
    } catch (e) {}
  }

  // ---- walkthrough ----
  function steps() { return window.TUTORIAL || []; }

  function start(opts) {
    opts = opts || {};
    var list = steps();
    if (!list.length) { opts.onDone && opts.onDone(); return; }
    var i = 0;

    var overlay = ce('div', { class: 'tutorial-overlay' });
    var card = ce('div', { class: 'tutorial-card pop', role: 'dialog', 'aria-label': 'Tutorial', 'aria-live': 'polite' });
    var bubbleText = ce('div', { class: 'tut-bubble-text' });
    var dots = ce('div', { class: 'q-progress', style: { margin: '0 0 4px' } });
    var mascotWrap = ce('div', { class: 'tut-mascot' }, [mascot(84)]);
    var bubble = ce('div', { class: 'tut-bubble' }, [ce('div', { class: 'tut-name' }, ['Neuro']), bubbleText]);
    var backBtn = ce('button', { class: 'btn sm ghost', onclick: prev }, ['← Back']);
    var nextBtn = ce('button', { class: 'btn primary', onclick: next }, ['Next →']);
    var skipBtn = ce('button', { class: 'btn sm ghost', onclick: finish }, ['Skip tour']);
    var controls = ce('div', { class: 'row spread', style: { marginTop: 'var(--sp-3)' } }, [skipBtn, ce('div', { class: 'row', style: { gap: '8px' } }, [backBtn, nextBtn])]);

    card.appendChild(dots);
    card.appendChild(ce('div', { class: 'row', style: { gap: '12px', alignItems: 'flex-start' } }, [mascotWrap, bubble]));
    card.appendChild(controls);
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    document.addEventListener('keydown', onKey);
    render();

    function clearHighlight() { U.qsa('.tut-pulse').forEach(function (el) { el.classList.remove('tut-pulse'); }); }
    function highlight(view) {
      clearHighlight();
      if (!view) return;
      var btn = U.qsa('.nav button').filter(function (b) { return b.dataset.view === view; })[0];
      if (btn) btn.classList.add('tut-pulse');
    }
    function render() {
      var s = list[i];
      U.clear(dots);
      list.forEach(function (_, k) { dots.appendChild(ce('i', { class: k < i ? 'done' : (k === i ? 'cur' : '') })); });
      bubbleText.textContent = s.text;
      backBtn.style.visibility = i === 0 ? 'hidden' : 'visible';
      nextBtn.textContent = (i === list.length - 1) ? "Let's go! ✨" : 'Next →';
      highlight(s.highlight);
      playStep(s.id);
      nextBtn.focus();
    }
    function next() { if (i < list.length - 1) { i++; render(); } else finish(); }
    function prev() { if (i > 0) { i--; render(); } }
    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); finish(); }
      else if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    }
    function finish() {
      stopAudio(); clearHighlight();
      document.removeEventListener('keydown', onKey);
      overlay.remove();
      PML.store.get().settings.tutorialSeen = true; PML.store.save();
      opts.onDone && opts.onDone();
    }
  }

  // Offer the tour on first run (once). Shows a small prompt; respects an earlier "seen" flag.
  function offerFirstRun() {
    var s = PML.store.get().settings;
    if (s.tutorialSeen) return;
    var overlay = ce('div', { class: 'tutorial-overlay' });
    var card = ce('div', { class: 'tutorial-card pop center stack' });
    card.appendChild(ce('div', { class: 'tut-mascot', style: { margin: '0 auto' } }, [mascot(96)]));
    card.appendChild(ce('h3', { style: { margin: 0 } }, ["Hi, I'm Neuro!"]));
    card.appendChild(ce('p', { class: 'muted', style: { margin: 0 } }, ['Want a quick 30-second tour of how everything works?']));
    card.appendChild(ce('div', { class: 'row', style: { justifyContent: 'center', gap: '8px', marginTop: '4px' } }, [
      ce('button', { class: 'btn ghost sm', onclick: function () { overlay.remove(); PML.store.get().settings.tutorialSeen = true; PML.store.save(); } }, ['Maybe later']),
      ce('button', { class: 'btn primary', onclick: function () { overlay.remove(); start({}); } }, ['Start the tour →']),
    ]));
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  }

  function replay() { start({}); }

  PML.tutorial = { start: start, offerFirstRun: offerFirstRun, replay: replay, mascot: mascot };
})();
