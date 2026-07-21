/* wiki.js — the Wiki: a browsable, interlinked reference that replaces the Catalog. It holds
 * rich med pages (the old dex + full data + stats) and disorder/syndrome pages, cross-linked
 * both ways, and reachable from questions (a med or disorder name in a vignette links here). */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  // ---------- indices ----------
  var disorders = [];
  var dById = {};
  var medToDisorders = {};   // medId -> [disorderId]
  var nameIndex = [];        // [{re, id}] for resolving names in text

  function initIndex() {
    disorders = (window.DISORDERS || []).slice();
    dById = {}; medToDisorders = {}; nameIndex = [];
    disorders.forEach(function (d) {
      dById[d.id] = d;
      (d.meds || []).forEach(function (mid) { (medToDisorders[mid] = medToDisorders[mid] || []).push(d.id); });
    });
    // name index: disorder names + aka (longest first so we match specific phrases)
    var entries = [];
    disorders.forEach(function (d) {
      entries.push({ text: d.name, id: d.id, kind: 'disorder' });
      (d.aka || []).forEach(function (a) { entries.push({ text: a, id: d.id, kind: 'disorder' }); });
    });
    // med generics
    PML.deck.all().forEach(function (m) { entries.push({ text: m.generic, id: m.id, kind: 'med' }); });
    entries.sort(function (a, b) { return b.text.length - a.text.length; });
    nameIndex = entries.filter(function (e) { return e.text && e.text.length >= 3; });
  }

  function resolveName(name) {
    if (!name) return null;
    var n = String(name).toLowerCase().trim();
    for (var i = 0; i < nameIndex.length; i++) {
      var t = nameIndex[i].text.toLowerCase();
      if (t === n) return nameIndex[i];
    }
    // partial: the query contains a known name or vice versa
    for (var j = 0; j < nameIndex.length; j++) {
      var t2 = nameIndex[j].text.toLowerCase();
      if (n.indexOf(t2) >= 0 || t2.indexOf(n) >= 0) return nameIndex[j];
    }
    return null;
  }

  // ---------- navigation (internal back stack) ----------
  var stack = [];
  function mount(node, entry) {
    var main = document.getElementById('main');
    U.clear(main);
    if (stack.length) {
      var back = ce('button', { class: 'btn sm ghost', style: { marginBottom: 'var(--sp-3)' }, onclick: function () { stack.pop(); var prev = stack.pop(); if (prev) prev.render(); else PML.wiki.view(main); } }, ['← Back']);
      main.appendChild(back);
    }
    main.appendChild(node);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  function pushEntry(render) { stack.push({ render: render }); render(); }

  function open(ref) {
    // ref: {id, kind} or a med id or a disorder id or a display name string
    if (!ref) return;
    if (typeof ref === 'object') { if (ref.kind === 'med') return medPage(ref.id); return disorderPage(ref.id); }
    if (PML.deck.get(ref)) return medPage(ref);
    if (dById[ref]) return disorderPage(ref);
    var hit = resolveName(ref);
    if (hit) return open(hit);
  }

  // ---------- linkify prose ----------
  function linkify(text) {
    var frag = document.createDocumentFragment();
    if (!text) return frag;
    var remaining = String(text);
    var guard = 0;
    while (remaining.length && guard++ < 200) {
      var best = null, bestIdx = -1;
      for (var i = 0; i < nameIndex.length; i++) {
        var e = nameIndex[i];
        var idx = remaining.toLowerCase().indexOf(e.text.toLowerCase());
        if (idx >= 0 && (bestIdx < 0 || idx < bestIdx || (idx === bestIdx && e.text.length > best.text.length))) {
          // require word boundaries
          var before = idx === 0 ? ' ' : remaining[idx - 1];
          var after = remaining[idx + e.text.length] || ' ';
          if (/[A-Za-z0-9]/.test(before) || /[A-Za-z]/.test(after)) continue;
          best = e; bestIdx = idx;
        }
      }
      if (!best) { frag.appendChild(document.createTextNode(remaining)); break; }
      if (bestIdx > 0) frag.appendChild(document.createTextNode(remaining.slice(0, bestIdx)));
      var matched = remaining.substr(bestIdx, best.text.length);
      (function (e) { frag.appendChild(ce('span', { class: 'wikilink', role: 'link', tabindex: '0', onclick: function () { open(e); }, onkeydown: function (ev) { if (ev.key === 'Enter') open(e); } }, [matched])); })(best);
      remaining = remaining.slice(bestIdx + best.text.length);
    }
    return frag;
  }

  // ---------- Wiki hub (clean, browse-first landing) ----------
  function view(root) {
    stack = [];
    var wrap = ce('div', { class: 'view stack' });
    wrap.appendChild(ce('div', { class: 'pagehead' }, [ce('div', {}, [ce('h1', {}, ['Wiki']), ce('p', { class: 'muted' }, ['Every medication and the conditions they treat — all cross-linked. Search, or browse below.'])])]));

    var search = ce('input', { class: 'wiki-search', placeholder: '🔍 Search medications & conditions…', oninput: function () { runSearch(this.value); } });
    wrap.appendChild(ce('div', { class: 'card pad-sm' }, [search]));
    var searchHost = ce('div');
    wrap.appendChild(searchHost);
    var body = ce('div', { class: 'stack' });
    wrap.appendChild(body);

    // Medications — one calm tile per class
    body.appendChild(sectionHead('Medications by class', function () { openFullDex(); }, 'Full list & filters →'));
    var classGrid = ce('div', { class: 'wiki-tiles' });
    PML.deck.classes().forEach(function (cls) {
      var meds = PML.deck.byClass(cls);
      var learned = meds.filter(function (m) { return PML.store.get().cards[m.id].learned; }).length;
      classGrid.appendChild(tile(cls, meds.length + ' meds · ' + learned + ' learned', 'var(--c-' + PML.deck.classKey(cls) + ')', function () { classMedsPage(cls); }));
    });
    body.appendChild(classGrid);

    // Conditions
    body.appendChild(sectionHead('Conditions'));
    var condGrid = ce('div', { class: 'wiki-tiles' });
    disorders.filter(function (d) { return d.category !== 'Syndrome'; }).forEach(function (d) { condGrid.appendChild(condTile(d)); });
    body.appendChild(condGrid);

    // Syndromes & toxicities
    var syn = disorders.filter(function (d) { return d.category === 'Syndrome'; });
    if (syn.length) {
      body.appendChild(sectionHead('Syndromes & toxicities'));
      var synGrid = ce('div', { class: 'wiki-tiles' });
      syn.forEach(function (d) { synGrid.appendChild(condTile(d)); });
      body.appendChild(synGrid);
    }
    root.appendChild(wrap);

    function runSearch(q) {
      U.clear(searchHost);
      q = (q || '').toLowerCase().trim();
      body.style.display = q ? 'none' : '';
      if (!q) return;
      var meds = PML.deck.search(q).slice(0, 12);
      var ds = disorders.filter(function (d) { return (d.name + ' ' + (d.aka || []).join(' ') + ' ' + (d.category || '')).toLowerCase().indexOf(q) >= 0; });
      var res = ce('div', { class: 'stack', style: { marginTop: 'var(--sp-3)' } });
      if (ds.length) { res.appendChild(ce('h3', {}, ['Conditions'])); var g1 = ce('div', { class: 'wiki-tiles' }); ds.forEach(function (d) { g1.appendChild(condTile(d)); }); res.appendChild(g1); }
      if (meds.length) { res.appendChild(ce('h3', {}, ['Medications'])); var g2 = ce('div', { class: 'dex-grid' }); meds.forEach(function (m) { g2.appendChild(medCard(m)); }); res.appendChild(g2); }
      if (!ds.length && !meds.length) res.appendChild(ce('p', { class: 'muted' }, ['Nothing matches “' + q + '”.']));
      searchHost.appendChild(res);
    }
  }

  function sectionHead(title, onAction, actionLabel) {
    return ce('div', { class: 'row spread', style: { marginTop: 'var(--sp-4)', alignItems: 'baseline' } }, [
      ce('h3', { style: { margin: 0 } }, [title]),
      onAction ? ce('button', { class: 'btn sm ghost', onclick: onAction }, [actionLabel || 'More']) : null,
    ]);
  }
  function tile(title, sub, hue, onclick) {
    var t = ce('div', { class: 'wiki-tile', style: { '--hue': hue }, tabindex: '0', role: 'button', onclick: onclick });
    t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onclick(); } });
    t.appendChild(ce('span', { class: 'wiki-tile-dot', style: { background: hue } }));
    t.appendChild(ce('div', {}, [ce('div', { class: 'wiki-tile-title' }, [title]), ce('div', { class: 'wiki-tile-sub' }, [sub])]));
    return t;
  }
  function condTile(d) {
    return tile(d.name, (d.meds || []).length + ' meds', catHue(d.category), function () { disorderPage(d.id); });
  }

  // full-dex behind a click (the power-user filterable list)
  function openFullDex() { pushEntry(function () { var m = document.getElementById('main'); U.clear(m); if (stack.length > 1) m.appendChild(ce('button', { class: 'btn sm ghost', style: { marginBottom: 'var(--sp-3)' }, onclick: function () { stack.pop(); stack.pop(); view(m); } }, ['← Back'])); PML.catalog.view(m); }); }

  // a class's meds as cards (with tier/learned), back-stackable
  function classMedsPage(cls) {
    pushEntry(function () {
      var page = ce('div', { class: 'view stack' });
      page.appendChild(ce('h1', {}, [cls]));
      var grid = ce('div', { class: 'dex-grid' });
      PML.deck.byClass(cls).forEach(function (m) { grid.appendChild(medCard(m)); });
      page.appendChild(grid);
      mount(page);
    });
  }

  function medCard(m) {
    var c = PML.store.get().cards[m.id];
    var key = PML.deck.classKey(m.class);
    var tierCol = { bronze: 'var(--tier-bronze)', silver: 'var(--tier-silver)', gold: 'var(--tier-gold)', burnished: 'var(--tier-burnished)' }[c.mastery] || 'var(--surface-3)';
    var card = ce('div', { class: 'dex-card' + (c.learned ? '' : ' locked'), style: { '--dexhue': 'var(--c-' + key + ')' }, tabindex: '0', role: 'button', onclick: function () { medPage(m.id); } });
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); medPage(m.id); } });
    card.appendChild(ce('span', { class: 'tier-dot', style: { background: tierCol, boxShadow: c.mastery !== 'none' ? '0 0 8px ' + tierCol : 'none' } }));
    card.appendChild(ce('div', { class: 'gen', style: { fontSize: '.98rem' } }, [m.generic]));
    card.appendChild(ce('div', { class: 'sub' }, [m.subclass || m.class]));
    card.appendChild(ce('span', { class: 'chip', style: { marginTop: '6px', fontSize: '.62rem', color: c.learned ? tierCol : 'var(--text-muted)' } }, [c.learned ? (c.mastery === 'none' ? 'learned' : c.mastery) : 'not learned']));
    return card;
  }

  function catHue(cat) { return ({ Mood: 'var(--c-Antidepressant)', Anxiety: 'var(--c-Anxiolytic)', Psychotic: 'var(--c-Antipsychotic)', Neurocognitive: 'var(--c-Dementia)', Substance: 'var(--c-Substance)', Syndrome: 'var(--coral)', Other: 'var(--sky)' })[cat] || 'var(--sky)'; }

  function disorderCard(d) {
    var card = ce('div', { class: 'dex-card', style: { '--dexhue': catHue(d.category) }, tabindex: '0', role: 'button', onclick: function () { disorderPage(d.id); } });
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); disorderPage(d.id); } });
    card.appendChild(ce('div', { class: 'gen', style: { fontSize: '.98rem' } }, [d.name]));
    card.appendChild(ce('div', { class: 'sub' }, [d.oneLiner || d.category]));
    card.appendChild(ce('div', { class: 'row', style: { gap: '4px', marginTop: '6px', flexWrap: 'wrap' } }, [ce('span', { class: 'chip', style: { fontSize: '.62rem' } }, [(d.meds || []).length + ' meds'])]));
    return card;
  }
  function medMiniCard(m) {
    var key = PML.deck.classKey(m.class);
    return ce('div', { class: 'dex-card', style: { '--dexhue': 'var(--c-' + key + ')' }, tabindex: '0', role: 'button', onclick: function () { medPage(m.id); } }, [
      ce('div', { class: 'gen', style: { fontSize: '.98rem' } }, [m.generic]), ce('div', { class: 'sub' }, [m.subclass || m.class]),
    ]);
  }

  // ---------- Med page ----------
  function medPage(id) {
    var m = PML.deck.get(id); if (!m) return;
    pushEntry(function () {
      var c = PML.store.get().cards[id];
      var page = ce('div', { class: 'view stack wiki-page' });
      page.appendChild(ce('div', { class: 'row spread wrap', style: { gap: '8px' } }, [
        ce('div', {}, [ce('h1', { style: { margin: 0 } }, [m.generic]), ce('div', { class: 'muted', style: { fontSize: '.85rem' } }, [(m.pronunciation ? '/ ' + m.pronunciation + ' / · ' : '') + (m.subclass || m.class)])]),
        ce('div', { class: 'row', style: { gap: '4px', flexWrap: 'wrap' } }, [PML.render.classChip(m)].concat(PML.render.statusChips(m))),
      ]));

      // stats
      var acc = c.seen ? Math.round(c.correct / c.seen * 100) : null;
      page.appendChild(ce('div', { class: 'stat-tiles' }, [
        st(c.mastery === 'none' ? (c.learned ? 'Learned' : 'New') : U.titleCase(c.mastery), 'mastery'),
        st(acc == null ? '—' : acc + '%', 'accuracy', c.seen ? c.correct + '/' + c.seen : ''),
        st(c.learned ? PML.srs.nextLabel(id) : '—', 'next review'),
      ]));

      // actions
      page.appendChild(ce('div', { class: 'row wrap' }, [
        c.learned ? null : ce('button', { class: 'btn primary', onclick: function () { PML.ui.startLearn([id]); } }, ['✨ Learn this']),
        ce('button', { class: 'btn', onclick: function () { PML.ui.go('practice', { start: true, medId: id, n: 8 }); } }, ['🎮 Drill this med']),
      ]));

      // treats
      var treats = (medToDisorders[id] || []).map(function (did) { return dById[did]; }).filter(Boolean);
      if (treats.length) {
        page.appendChild(ce('div', { class: 'fact-group' }, [ce('h4', { text: 'Used for' }), chipRow(treats.map(function (d) { return { label: d.name, onclick: function () { disorderPage(d.id); } }; }))]));
      }
      // related (same subclass)
      var related = PML.deck.all().filter(function (x) { return x.id !== id && x.subclass === m.subclass; }).slice(0, 8);
      if (related.length) {
        page.appendChild(ce('div', { class: 'fact-group' }, [ce('h4', { text: 'Related agents (' + (m.subclass || m.class) + ')' }), chipRow(related.map(function (x) { return { label: x.generic, onclick: function () { medPage(x.id); } }; }))]));
      }

      // full data
      PML.render.factGroups(m).forEach(function (g) { page.appendChild(g); });

      // sources
      if (m._meta && m._meta.sources && m._meta.sources.length) {
        var srcs = ce('div', { class: 'fact-group' }, [ce('h4', { text: 'Sources' })]);
        m._meta.sources.forEach(function (s) { if (s && s.name) srcs.appendChild(ce('div', { style: { fontSize: '.78rem' } }, [s.url ? ce('a', { href: s.url, target: '_blank', rel: 'noopener' }, [s.name]) : ce('span', { class: 'muted' }, [s.name])])); });
        srcs.appendChild(ce('div', { class: 'dim', style: { fontSize: '.72rem', marginTop: '6px' } }, ['Last verified ' + (m._meta.lastVerified || '—') + '. Learning aid — verify against the current Health Canada monograph.']));
        page.appendChild(srcs);
      }
      mount(page);
    });
  }

  // ---------- Disorder page ----------
  function disorderPage(id) {
    var d = dById[id]; if (!d) return;
    pushEntry(function () {
      var page = ce('div', { class: 'view stack wiki-page' });
      page.appendChild(ce('div', { class: 'row spread wrap', style: { gap: '8px' } }, [
        ce('div', {}, [ce('h1', { style: { margin: 0 } }, [d.name]), d.aka && d.aka.length ? ce('div', { class: 'dim', style: { fontSize: '.78rem' } }, ['also: ' + d.aka.slice(0, 4).join(', ')]) : null]),
        ce('span', { class: 'chip', style: { background: catHue(d.category), color: '#12101a' } }, [d.category]),
      ]));
      if (d.oneLiner) page.appendChild(ce('p', { class: 'lesson-hook', style: { fontSize: '1.05rem' } }, [d.oneLiner]));

      section(page, 'Overview', d.overview);
      section(page, 'Epidemiology', d.epidemiology);
      listSection(page, 'How it presents', d.presentation);
      listSection(page, '⚠ Red flags', d.redFlags);
      listSection(page, 'Workup', d.workup);

      // management
      if (d.management) {
        var mg = ce('div', { class: 'fact-group' }, [ce('h4', { text: 'Management (CANMAT-aligned)' })]);
        if (d.management.overview) mg.appendChild(ce('p', { style: { margin: '0 0 8px' } }, [linkify(d.management.overview)]));
        mgLines(mg, 'First-line', d.management.firstLine);
        mgLines(mg, 'Later / adjunct', d.management.later);
        if (d.management.nonPharm && d.management.nonPharm.length) { mg.appendChild(ce('div', { class: 'k', style: { marginTop: '6px', fontWeight: 700 } }, ['Non-pharmacological'])); var ul = ce('ul'); d.management.nonPharm.forEach(function (x) { ul.appendChild(ce('li', {}, [linkify(x)])); }); mg.appendChild(ul); }
        page.appendChild(mg);
      }

      // meds grid
      var meds = (d.meds || []).map(function (mid) { return PML.deck.get(mid); }).filter(Boolean);
      if (meds.length) {
        page.appendChild(ce('h3', { style: { marginTop: 'var(--sp-4)' } }, ['Medications (' + meds.length + ')']));
        var grid = ce('div', { class: 'dex-grid' });
        meds.forEach(function (m) { grid.appendChild(medMiniCard(m)); });
        page.appendChild(grid);
      }
      // related
      var rel = (d.related || []).map(function (rid) { return dById[rid]; }).filter(Boolean);
      if (rel.length) page.appendChild(ce('div', { class: 'fact-group' }, [ce('h4', { text: 'Related' }), chipRow(rel.map(function (r) { return { label: r.name, onclick: function () { disorderPage(r.id); } }; }))]));
      // sources
      if (d.sources && d.sources.length) {
        var sc = ce('div', { class: 'fact-group' }, [ce('h4', { text: 'Sources' })]);
        d.sources.forEach(function (s) { if (s && s.name) sc.appendChild(ce('div', { style: { fontSize: '.78rem' } }, [s.url ? ce('a', { href: s.url, target: '_blank', rel: 'noopener' }, [s.name]) : ce('span', { class: 'muted' }, [s.name])])); });
        page.appendChild(sc);
      }
      page.appendChild(ce('div', { class: 'safety-banner' }, [ce('b', {}, ['Learning aid — not a diagnostic manual.']), ' Original educational summary; verify against current guidelines.']));
      mount(page);
    });
  }

  // ---------- helpers ----------
  function st(big, label, sub) { return ce('div', { class: 'tile' }, [ce('b', { text: String(big), style: { fontSize: '1.15rem' } }), ce('span', { text: label }), sub ? ce('div', { class: 'dim', style: { fontSize: '.68rem' } }, [sub]) : null]); }
  function chipRow(items) { var r = ce('div', { class: 'row wrap', style: { gap: '6px', marginTop: '4px' } }); items.forEach(function (it) { r.appendChild(ce('button', { class: 'chip wikilink', style: { cursor: 'pointer', border: '1px solid var(--border-strong)' }, onclick: it.onclick }, [it.label])); }); return r; }
  function section(page, title, text) { if (!text) return; page.appendChild(ce('div', { class: 'fact-group' }, [ce('h4', { text: title }), ce('p', { style: { margin: 0 } }, [linkify(text)])])); }
  function listSection(page, title, arr) { if (!arr || !arr.length) return; var g = ce('div', { class: 'fact-group' }, [ce('h4', { text: title })]); var ul = ce('ul'); arr.forEach(function (x) { ul.appendChild(ce('li', {}, [linkify(String(x))])); }); g.appendChild(ul); page.appendChild(g); }
  function mgLines(mg, label, arr) {
    if (!arr || !arr.length) return;
    mg.appendChild(ce('div', { style: { marginTop: '6px', fontWeight: 700, color: 'var(--honey)', fontSize: '.85rem' } }, [label]));
    arr.forEach(function (item) {
      var line = ce('div', { style: { margin: '2px 0' } }, [linkify(typeof item === 'string' ? item : item.text)]);
      if (item.meds && item.meds.length) {
        var meds = item.meds.map(function (mid) { return PML.deck.get(mid); }).filter(Boolean);
        if (meds.length) line.appendChild(chipRow(meds.map(function (m) { return { label: m.generic, onclick: function () { medPage(m.id); } }; })));
      }
      mg.appendChild(line);
    });
  }

  PML.wiki = { view: view, medPage: medPage, disorderPage: disorderPage, open: open, linkify: linkify, resolveName: resolveName, initIndex: initIndex, disordersFor: function (mid) { return (medToDisorders[mid] || []).map(function (id) { return dById[id]; }).filter(Boolean); } };
})();
