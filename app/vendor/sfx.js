/* sfx.js — muteable WebAudio blips/chimes generated at runtime (no audio files, no CDN).
 * Off by default; the app toggles PMLSfx.enabled. Every sound is synthesized so the app
 * stays fully offline and adds zero binary weight. */
(function () {
  'use strict';
  var ctx = null;
  function ac() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, dur, type, gain, when) {
    var c = ac(); if (!c || !api.enabled) return;
    var t0 = c.currentTime + (when || 0);
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain || 0.16, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(c.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  }

  function chord(freqs, dur, type, gain) {
    freqs.forEach(function (f, i) { tone(f, dur, type, gain, i * 0.05); });
  }

  var api = {
    enabled: false,
    correct: function () { tone(660, 0.12, 'triangle', 0.15); tone(990, 0.16, 'triangle', 0.12, 0.09); },
    wrong: function () { tone(200, 0.22, 'sawtooth', 0.12); },
    flip: function () { tone(420, 0.07, 'sine', 0.09); },
    tick: function () { tone(880, 0.04, 'square', 0.05); },
    combo: function (n) { tone(520 + Math.min(n, 12) * 40, 0.1, 'triangle', 0.13); },
    levelup: function () { chord([523, 659, 784, 1047], 0.5, 'triangle', 0.14); },
    goal: function () { chord([440, 554, 659], 0.4, 'sine', 0.14); },
    badge: function () { tone(784, 0.14, 'triangle', 0.14); tone(1175, 0.2, 'triangle', 0.12, 0.11); },
  };
  window.PMLSfx = api;
})();
