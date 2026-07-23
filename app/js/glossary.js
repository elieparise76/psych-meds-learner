/* glossary.js — the clinical hover-glossary. Reads window.GLOSSARY (data/glossary.js), lightly
 * underlines every flagged term/expression wherever prose is rendered in the app, and shows a
 * small definition tooltip on hover/focus. If a term maps to a Wiki page it also offers a
 * "Learn more" link that opens that entry (a new window when the browser allows it, otherwise an
 * in-app navigation). Fully offline, classic script on window.PML.
 *
 * How it stays "everywhere": a MutationObserver watches the app for newly rendered content and
 * decorates it (idempotently, first-mention-per-render to stay uncluttered). We never mutate the
 * generated deck or user state — this is a pure presentation layer over already-rendered text. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  // ---------- index ----------
  var terms = [];          // canonical entries {term, def, aliases[], wiki, category}
  var byKey = {};          // lowercased alias -> entry
  var matcher = null;      // compiled RegExp over all aliases, longest-first
  var ready = false;

  function escapeRe(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function initIndex() {
    var G = window.GLOSSARY;
    terms = (G && G.terms) || [];
    byKey = {};
    var alts = [];
    terms.forEach(function (t) {
      if (!t || !t.term || !t.def) return;
      var forms = [t.term].concat(t.aliases || []);
      forms.forEach(function (f) {
        if (!f) return;
        var key = String(f).toLowerCase().trim();
        if (key.length < 3) return;               // too short to flag safely
        if (byKey[key] == null) { byKey[key] = t; alts.push(key); }
      });
    });
    // longest first so multi-word / specific phrases win over their substrings
    alts.sort(function (a, b) { return b.length - a.length; });
    matcher = alts.length ? new RegExp('\\b(' + alts.map(escapeRe).join('|') + ')\\b', 'gi') : null;
    ready = !!matcher;
  }

  function enabled() {
    var s = PML.store && PML.store.get && PML.store.get().settings;
    return ready && !(s && s.glossary === false);
  }

  // ---------- decoration ----------
  // A text node is skipped if any ancestor is interactive, already decorated, an overlay, or
  // explicitly opted out. Keeps flags out of buttons/links/answer options and modals.
  var BLOCK = 'a,button,input,textarea,select,code,[role="button"],[role="link"],[contenteditable],' +
    '.wikilink,.gloss-term,.gloss-tip,.no-gloss,.opt,.tutorial-overlay,.celeb-overlay,.moment-overlay,' +
    '.toast-host,.modal-back,.nav,.topbar,.hud';

  function blocked(node) {
    var el = node.parentElement;
    return !el || el.closest(BLOCK);
  }

  // Decorate one subtree. `seen` (optional) dedupes to first-mention-per-render batch.
  function decorate(root, seen) {
    if (!enabled() || !root || root.nodeType !== 1) return;
    if (root.closest && root.closest(BLOCK)) return;
    seen = seen || Object.create(null);
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || n.nodeValue.length < 3 || !/[A-Za-z]/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (blocked(n)) return NodeFilter.FILTER_REJECT;
        matcher.lastIndex = 0;
        return matcher.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    var targets = [];
    var tn;
    while ((tn = walker.nextNode())) targets.push(tn);
    targets.forEach(function (node) { wrapNode(node, seen); });
  }

  function wrapNode(node, seen) {
    var text = node.nodeValue;
    matcher.lastIndex = 0;
    var frag = null, last = 0, m;
    while ((m = matcher.exec(text))) {
      var raw = m[1];
      var entry = byKey[raw.toLowerCase()];
      if (!entry) continue;
      var key = entry.term.toLowerCase();
      if (seen[key]) continue;                    // first mention only, per render batch
      seen[key] = true;
      if (!frag) frag = document.createDocumentFragment();
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      frag.appendChild(makeTermSpan(raw, entry));
      last = m.index + raw.length;
    }
    if (frag) {
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    }
  }

  function makeTermSpan(label, entry) {
    var span = ce('span', {
      class: 'gloss-term' + (entry.wiki ? ' has-wiki' : ''),
      tabindex: '0',
      role: 'button',
      'aria-label': entry.term + ' — definition',
      'data-gk': entry.term.toLowerCase(),
    }, [label]);
    span.__gloss = entry;
    span.addEventListener('mouseenter', function () { show(span, entry); });
    span.addEventListener('mouseleave', scheduleHide);
    span.addEventListener('focus', function () { show(span, entry); });
    span.addEventListener('blur', scheduleHide);
    span.addEventListener('click', function (e) { e.stopPropagation(); toggle(span, entry); });
    span.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (entry.wiki) openWiki(entry.wiki); else toggle(span, entry); }
      else if (e.key === 'Escape') { hide(); }
    });
    return span;
  }

  // ---------- tooltip ----------
  var tip = null, tipDef = null, tipMore = null, hideTimer = null, activeEntry = null;
  function buildTip() {
    tipDef = ce('div', { class: 'gloss-tip-def' });
    tipMore = ce('button', { class: 'gloss-tip-more', type: 'button' }, ['Click to learn more →']);
    tipMore.addEventListener('click', function (e) { e.stopPropagation(); if (activeEntry && activeEntry.wiki) openWiki(activeEntry.wiki); });
    tip = ce('div', { class: 'gloss-tip no-gloss', role: 'tooltip' }, [tipDef, tipMore]);
    tip.addEventListener('mouseenter', function () { clearTimeout(hideTimer); });
    tip.addEventListener('mouseleave', scheduleHide);
    document.body.appendChild(tip);
  }

  function show(anchor, entry) {
    if (!tip) buildTip();
    clearTimeout(hideTimer);
    activeEntry = entry;
    tipDef.textContent = entry.def;
    if (entry.wiki) { tipMore.style.display = ''; tip.classList.add('has-more'); }
    else { tipMore.style.display = 'none'; tip.classList.remove('has-more'); }
    tip.classList.add('show');
    position(anchor);
  }
  function toggle(anchor, entry) {
    if (tip && tip.classList.contains('show') && activeEntry === entry) hide();
    else show(anchor, entry);
  }
  function scheduleHide() { clearTimeout(hideTimer); hideTimer = setTimeout(hide, 160); }
  function hide() { if (tip) { tip.classList.remove('show'); activeEntry = null; } }

  function position(anchor) {
    var r = anchor.getBoundingClientRect();
    // measure the tip
    tip.style.left = '0px'; tip.style.top = '0px';
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var margin = 8;
    var left = r.left + r.width / 2 - tw / 2;
    left = Math.max(margin, Math.min(left, window.innerWidth - tw - margin));
    var above = r.top - th - 10;
    var top = above > margin ? above : r.bottom + 10;   // flip below if no room above
    tip.classList.toggle('below', !(above > margin));
    tip.style.left = Math.round(left) + 'px';
    tip.style.top = Math.round(top) + 'px';
  }

  // hide on scroll / resize / outside interaction (position would go stale)
  function wireGlobalDismiss() {
    window.addEventListener('scroll', function () { if (tip && tip.classList.contains('show')) hide(); }, true);
    window.addEventListener('resize', function () { hide(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
  }

  // ---------- Wiki deep-link ("learn more", ideally a new window) ----------
  function openWiki(id) {
    hide();
    var base = location.href.split('#')[0];
    var url = base + '#wiki=' + encodeURIComponent(id);
    var w = null;
    try { w = window.open(url, '_blank'); } catch (e) { w = null; }
    if (!w) {                                    // popup blocked or unsupported (e.g. WKWebView) → in-app
      if (PML.wiki && PML.wiki.open) { if (PML.ui && PML.ui.go) PML.ui.go('wiki'); PML.wiki.open(id); }
    }
  }
  // On boot / hash change, route a #wiki=<id> deep-link to that Wiki entry.
  function consumeHash() {
    var m = /^#wiki=(.+)$/.exec(location.hash || '');
    if (!m) return false;
    var id = decodeURIComponent(m[1]);
    if (PML.wiki && PML.wiki.open) { if (PML.ui && PML.ui.go) PML.ui.go('wiki'); PML.wiki.open(id); return true; }
    return false;
  }

  // ---------- auto-apply via MutationObserver ----------
  var observer = null, pending = [], scheduled = false;
  function observe() {
    if (!observer) observer = new MutationObserver(onMutations);
    observer.observe(document.body, { childList: true, subtree: true });
  }
  function onMutations(muts) {
    for (var i = 0; i < muts.length; i++) {
      var added = muts[i].addedNodes;
      for (var j = 0; j < added.length; j++) {
        var n = added[j];
        if (n.nodeType === 1 && !n.classList.contains('gloss-tip')) pending.push(n);
      }
    }
    if (pending.length && !scheduled) { scheduled = true; requestAnimationFrame(flush); }
  }
  function flush() {
    scheduled = false;
    var nodes = pending; pending = [];
    if (!enabled()) return;
    observer.disconnect();
    var seen = Object.create(null);
    try {
      nodes.forEach(function (n) { if (n.nodeType === 1 && document.contains(n)) decorate(n, seen); });
    } finally { observe(); }
  }

  // ---------- init ----------
  function init() {
    initIndex();
    if (!ready) return;
    buildTip();
    wireGlobalDismiss();
    // decorate whatever is already on screen, then watch for everything rendered afterward
    var host = document.getElementById('main') || document.body;
    decorate(host, Object.create(null));
    observe();
    window.addEventListener('hashchange', consumeHash);
    consumeHash();
  }

  PML.glossary = { init: init, decorate: decorate, initIndex: initIndex, openWiki: openWiki, count: function () { return terms.length; } };
})();
