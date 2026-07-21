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
    '<path class="neuro-smile" d="M50 80 Q60 90 70 80" stroke="#241436" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<ellipse class="neuro-mouth" cx="60" cy="82" rx="7" ry="2.6" fill="#3a1d5c"/>' +
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
  // Returns { audio, promise } (promise = the play() promise if any) or null when narration is off.
  function playStep(id) {
    stopAudio();
    var s = PML.store.get().settings;
    if (s.voice === false) return null;
    try {
      var a = new Audio('app/audio/' + id + '.mp3');
      currentAudio = a;
      var p = a.play();
      return { audio: a, promise: (p && p.catch) ? p : null };
    } catch (e) { return null; }
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
    var neuroSvg = mascot(84);
    var mascotWrap = ce('div', { class: 'tut-mascot' }, [neuroSvg]);
    function setTalking(on) { if (neuroSvg) neuroSvg.classList.toggle('neuro-talking', !!on); }
    var bubble = ce('div', { class: 'tut-bubble' }, [ce('div', { class: 'tut-name' }, ['Neuro']), bubbleText]);
    var backBtn = ce('button', { class: 'btn sm ghost', onclick: prev }, ['← Back']);
    var nextBtn = ce('button', { class: 'btn primary', onclick: next }, ['Next →']);
    var hint = ce('span', { class: 'tut-hint' }, ['']);
    // No "Skip" — the tour is not skippable.
    var controls = ce('div', { class: 'row spread', style: { marginTop: 'var(--sp-3)' } }, [hint, ce('div', { class: 'row', style: { gap: '8px' } }, [backBtn, nextBtn])]);

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

    // ---- live navigation: as Neuro describes a section, take the user to it (the page shows
    // through the lightened overlay). compare-cram visits Compare, then flips to Cram after 5s. ----
    var navTimer = null;
    function clearNav() { clearTimeout(navTimer); navTimer = null; }
    function setIntro(on) { overlay.classList.toggle('intro', !!on); }
    function goView(view) {
      if (!view) return;
      highlight(view);   // pulse the nav tab (cheap; never re-renders the page)
      // only actually switch pages when the target differs — avoids a jarring re-render/flash
      if (PML.ui.go && PML.ui.currentView && PML.ui.currentView() !== view) PML.ui.go(view);
    }
    function navigateFor(step) {
      clearNav();
      if (step.id === 'welcome') { setIntro(true); clearHighlight(); return; }  // clean intro — no page behind
      setIntro(false);
      if (step.id === 'compare-cram') {
        goView('compare');
        navTimer = setTimeout(function () { goView('cram'); }, 5000);
        return;
      }
      // steps with a nav target go straight there; general steps (safety/go) rest on Home
      goView(step.highlight || 'home');
    }

    // ---- advance-gate: you cannot press Next until Neuro finishes speaking. With no audio
    // (clip missing or narration off) a short reading-time elapses instead, so you're never
    // trapped — but you still can't blitz through. Combined with no Skip, the tour is mandatory. ----
    var gateTimer = null, safetyTimer = null, resolved = false;
    function clearGate() { clearTimeout(gateTimer); clearTimeout(safetyTimer); }
    function setGate(locked) {
      nextBtn.disabled = locked;
      var last = (i === list.length - 1);
      nextBtn.textContent = last ? "Let's go! ✨" : 'Next →';
      if (locked) {
        var voiceOn = PML.store.get().settings.voice !== false;
        hint.textContent = voiceOn ? '🔊 Neuro is speaking…' : 'Read on…';
      } else {
        hint.textContent = '';
        try { nextBtn.focus(); } catch (e) {}
      }
    }
    function beginStepGate(step) {
      clearGate();
      resolved = false;
      setGate(true);
      setTalking(false);
      function ungate() { if (resolved) return; resolved = true; clearGate(); setGate(false); }
      var voiceOn = PML.store.get().settings.voice !== false;
      var fallback = Math.min(6500, Math.max(2200, (step.text || '').length * 34)); // reading-time floor
      var pl = voiceOn ? playStep(step.id) : (stopAudio(), null);
      if (pl && pl.audio) {
        var a = pl.audio;
        a.addEventListener('playing', function () { setTalking(true); });  // mouth moves while speaking
        a.addEventListener('pause', function () { setTalking(false); });
        a.addEventListener('ended', function () { setTalking(false); });
        a.addEventListener('ended', ungate);
        a.addEventListener('error', function () { setTalking(false); gateTimer = setTimeout(ungate, fallback); }); // missing clip
        if (pl.promise) pl.promise.catch(function () { setTalking(false); gateTimer = setTimeout(ungate, fallback); }); // autoplay blocked
        safetyTimer = setTimeout(ungate, 90000); // never trap the user if 'ended' somehow never fires
      } else {
        gateTimer = setTimeout(ungate, fallback);
      }
    }

    function render() {
      var s = list[i];
      U.clear(dots);
      list.forEach(function (_, k) { dots.appendChild(ce('i', { class: k < i ? 'done' : (k === i ? 'cur' : '') })); });
      bubbleText.textContent = s.text;
      backBtn.style.visibility = i === 0 ? 'hidden' : 'visible';
      navigateFor(s);
      beginStepGate(s);
    }
    function next() { if (nextBtn.disabled) return; if (i < list.length - 1) { i++; render(); } else finish(); }
    function prev() { if (i > 0) { i--; render(); } }
    function onKey(e) {
      // Escape is intentionally ignored — the tour is not skippable.
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      else if ((e.key === 'ArrowRight' || e.key === 'Enter') && !nextBtn.disabled) { e.preventDefault(); next(); }
    }
    function finish() {
      clearGate(); clearNav(); stopAudio(); setTalking(false); clearHighlight();
      document.removeEventListener('keydown', onKey);
      overlay.remove();
      PML.store.get().settings.tutorialSeen = true; PML.store.save();
      opts.onDone && opts.onDone();
    }
  }

  // Offer the tour on first run (once). The tour is mandatory and not skippable, so there is no
  // "maybe later" — just an entrance. Respects an earlier "seen" flag for returning users.
  function offerFirstRun() {
    var s = PML.store.get().settings;
    if (s.tutorialSeen) return;
    var overlay = ce('div', { class: 'tutorial-overlay' });
    var card = ce('div', { class: 'tutorial-card pop center stack' });
    card.appendChild(ce('div', { class: 'tut-mascot', style: { margin: '0 auto' } }, [mascot(96)]));
    card.appendChild(ce('h3', { style: { margin: 0 } }, ["Ah — you made it."]));
    card.appendChild(ce('p', { class: 'muted', style: { margin: 0 } }, ["I'm Neuro. Before you touch a thing, let me show you around Titrate — properly. It'll take a minute, and no, you can't skip it."]));
    card.appendChild(ce('div', { class: 'row', style: { justifyContent: 'center', marginTop: '4px' } }, [
      ce('button', { class: 'btn primary lg', onclick: function () { overlay.remove(); start({}); } }, ['Show me →']),
    ]));
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  }

  function replay() { start({}); }

  PML.tutorial = { start: start, offerFirstRun: offerFirstRun, replay: replay, mascot: mascot };
})();
