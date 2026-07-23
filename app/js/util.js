/* util.js — bootstraps window.PML and shared helpers. Classic script (no ES modules, so it
 * loads from file://). Every other app module attaches to window.PML. */
(function () {
  'use strict';
  var PML = window.PML = window.PML || {};

  // ---- DOM helpers ----
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function ce(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') el.className = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else if (k === 'text') el.textContent = attrs[k];
      else if (k === 'style' && typeof attrs[k] === 'object') { var sty = attrs[k]; Object.keys(sty).forEach(function (p) { if (p.slice(0, 2) === '--') el.style.setProperty(p, sty[p]); else el.style[p] = sty[p]; }); }
      else if (k.slice(0, 2) === 'on' && typeof attrs[k] === 'function') el.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] != null && attrs[k] !== false) el.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null || c === false) return;
      el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return el;
  }
  function clear(el) { while (el && el.firstChild) el.removeChild(el.firstChild); return el; }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // ---- misc ----
  function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }
  function round(n, d) { var m = Math.pow(10, d || 0); return Math.round(n * m) / m; }
  function todayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function addDaysKey(key, n) { var p = key.split('-'); var d = new Date(+p[0], +p[1] - 1, +p[2]); d.setDate(d.getDate() + n); return todayKey(d); }
  function daysBetween(a, b) { var pa = a.split('-'), pb = b.split('-'); var da = new Date(+pa[0], +pa[1] - 1, +pa[2]); var db = new Date(+pb[0], +pb[1] - 1, +pb[2]); return Math.round((db - da) / 86400000); }
  function weekKey(d) { d = d || new Date(); var t = new Date(d); t.setHours(0, 0, 0, 0); t.setDate(t.getDate() - (t.getDay() || 7) + 1); return todayKey(t); } // ISO-ish Monday start

  // ---- seeded PRNG (mulberry32) ----
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffleSeeded(arr, seed) {
    var a = arr.slice(); var rnd = mulberry32(seed >>> 0);
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pick(arr, rnd) { return arr[Math.floor((rnd ? rnd() : Math.random()) * arr.length)]; }
  function sample(arr, n, rnd) {
    var a = arr.slice(), out = [];
    while (a.length && out.length < n) { var i = Math.floor((rnd ? rnd() : Math.random()) * a.length); out.push(a.splice(i, 1)[0]); }
    return out;
  }

  // ---- text normalization + fuzzy match (for type-the-answer) ----
  function normalize(s) {
    return String(s || '').toLowerCase()
      .replace(/\(.*?\)/g, ' ')
      .replace(/[^a-z0-9µ\s./-]/g, ' ')
      .replace(/\b(the|a|an|of|per|po|once|daily|mg|day)\b/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  function levenshtein(a, b) {
    if (a === b) return 0;
    var m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    var prev = new Array(n + 1), cur = new Array(n + 1), i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a.charCodeAt(i - 1) === b.charCodeAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      var tmp = prev; prev = cur; cur = tmp;
    }
    return prev[n];
  }
  // returns 0..1 similarity; also accepts if answer contains the key token set
  function fuzzy(input, target) {
    var a = normalize(input), b = normalize(target);
    if (!a || !b) return 0;
    if (a === b) return 1;
    if (b.indexOf(a) >= 0 || a.indexOf(b) >= 0) return 0.92;
    var d = levenshtein(a, b);
    return 1 - d / Math.max(a.length, b.length);
  }
  // accept if similarity high OR all significant target words appear in input
  function answerMatches(input, targets, threshold) {
    threshold = threshold || 0.8;
    var list = Array.isArray(targets) ? targets : [targets];
    var ni = normalize(input);
    for (var i = 0; i < list.length; i++) {
      var t = list[i]; if (t == null) continue;
      if (fuzzy(input, t) >= threshold) return true;
      var words = normalize(t).split(' ').filter(function (w) { return w.length > 2; });
      if (words.length && words.every(function (w) { return ni.indexOf(w) >= 0; })) return true;
    }
    return false;
  }

  function titleCase(s) { return String(s || '').replace(/\b\w/g, function (c) { return c.toUpperCase(); }); }

  PML.util = {
    qs: qs, qsa: qsa, ce: ce, clear: clear, esc: esc, clamp: clamp, round: round,
    todayKey: todayKey, addDaysKey: addDaysKey, daysBetween: daysBetween, weekKey: weekKey,
    mulberry32: mulberry32, shuffleSeeded: shuffleSeeded, pick: pick, sample: sample,
    normalize: normalize, fuzzy: fuzzy, answerMatches: answerMatches, titleCase: titleCase,
  };
})();
