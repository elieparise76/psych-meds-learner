/* sfx.js — muteable WebAudio blips/chimes generated at runtime (no audio files, no CDN).
 * A generous, tasteful palette wired throughout the app. On by default; toggle via settings
 * (PMLSfx.enabled). Everything is synthesized, so the app stays fully offline. */
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

  function tone(freq, dur, type, gain, when, glideTo) {
    var c = ac(); if (!c || !api.enabled) return;
    var t0 = c.currentTime + (when || 0);
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain || 0.14, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(c.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  }
  function seq(notes, dur, type, gain, gap) {
    notes.forEach(function (f, i) { tone(f, dur, type, gain, i * (gap || 0.06)); });
  }

  var api = {
    enabled: false,
    // feedback
    correct: function () { tone(660, 0.11, 'triangle', 0.15); tone(990, 0.15, 'triangle', 0.12, 0.08); },
    wrong: function () { tone(210, 0.2, 'sawtooth', 0.11, 0, 150); },
    combo: function (n) { tone(520 + Math.min(n, 14) * 45, 0.1, 'triangle', 0.14); tone(780 + Math.min(n, 14) * 45, 0.09, 'triangle', 0.1, 0.05); },
    // interaction
    tap: function () { tone(430, 0.035, 'sine', 0.06); },
    nav: function () { tone(720, 0.05, 'triangle', 0.08, 0, 860); },
    advance: function () { tone(500, 0.07, 'sine', 0.1, 0, 640); },
    reveal: function () { tone(360, 0.09, 'sine', 0.09, 0, 520); },
    flip: function () { tone(420, 0.07, 'sine', 0.09, 0, 500); },
    open: function () { tone(300, 0.1, 'sine', 0.08, 0, 480); },
    tick: function () { tone(880, 0.03, 'square', 0.05); },
    select: function () { tone(600, 0.04, 'triangle', 0.07); },
    // rewards
    start: function () { seq([392, 523, 659], 0.12, 'triangle', 0.12, 0.07); },
    streak: function () { seq([523, 659, 784, 1047], 0.14, 'sine', 0.13, 0.08); },
    levelup: function () { seq([523, 659, 784, 1047, 1319], 0.18, 'triangle', 0.14, 0.08); },
    goal: function () { seq([440, 554, 659, 880], 0.16, 'sine', 0.14, 0.07); },
    badge: function () { tone(784, 0.13, 'triangle', 0.14); tone(1175, 0.2, 'triangle', 0.12, 0.1); },
    quest: function () { seq([659, 880], 0.12, 'triangle', 0.13, 0.06); },
  };
  window.PMLSfx = api;
})();
