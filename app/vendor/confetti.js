/* confetti.js — tiny self-contained particle burst. No CDN. Respects prefers-reduced-motion.
 * Usage: PMLConfetti.burst({ count, colors, spread }); PMLConfetti.fromElement(el). */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function host() {
    var h = document.querySelector('.confetti-host');
    if (!h) { h = document.createElement('div'); h.className = 'confetti-host'; document.body.appendChild(h); }
    return h;
  }

  var PALETTE = ['#ffb020', '#37d9a0', '#9b6dff', '#49b6ff', '#ff5d6c', '#ffd27f'];

  function burst(opts) {
    opts = opts || {};
    if (reduce) return;               // no motion for reduced-motion users
    var h = host();
    var count = opts.count || 90;
    var colors = opts.colors || PALETTE;
    var originX = opts.x != null ? opts.x : window.innerWidth / 2;
    var originY = opts.y != null ? opts.y : window.innerHeight * 0.32;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('i');
      var c = colors[(Math.random() * colors.length) | 0];
      p.style.background = c;
      p.style.left = originX + (Math.random() - 0.5) * (opts.spread || 220) + 'px';
      p.style.top = originY + 'px';
      var dur = 1.1 + Math.random() * 1.4;
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = (Math.random() * 0.15) + 's';
      p.style.transform = 'translateX(' + ((Math.random() - 0.5) * 260) + 'px) rotate(' + (Math.random() * 360) + 'deg)';
      if (Math.random() < 0.5) p.style.borderRadius = '50%';
      p.style.width = (6 + Math.random() * 8) + 'px';
      p.style.height = (8 + Math.random() * 8) + 'px';
      h.appendChild(p);
      (function (node) { setTimeout(function () { node.remove(); }, (dur + 0.4) * 1000); })(p);
    }
  }

  function fromElement(el, opts) {
    if (!el) return burst(opts);
    var r = el.getBoundingClientRect();
    burst(Object.assign({ x: r.left + r.width / 2, y: r.top + r.height / 2 }, opts || {}));
  }

  window.PMLConfetti = { burst: burst, fromElement: fromElement };
})();
