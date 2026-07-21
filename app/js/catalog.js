/* catalog.js — the "dex": a browsable catalog of the whole deck with per-med + per-exercise
 * stats, mastery tiers, and filters. Doubles as the reference browser and the progress ledger. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  var state = { q: '', cls: '', tier: '', learn: '', needs: false };

  function accuracyOf(c) { return c.seen ? c.correct / c.seen : 0; }
  function tierColor(t) { return { bronze: 'var(--tier-bronze)', silver: 'var(--tier-silver)', gold: 'var(--tier-gold)', burnished: 'var(--tier-burnished)', none: 'var(--surface-3)' }[t] || 'var(--surface-3)'; }

  function matches(m) {
    var c = PML.store.get().cards[m.id];
    if (state.cls && m.class !== state.cls) return false;
    if (state.learn === 'learned' && !c.learned) return false;
    if (state.learn === 'unlearned' && c.learned) return false;
    if (state.tier && c.mastery !== state.tier) return false;
    if (state.needs && !(c.learned && accuracyOf(c) < 0.7 && c.seen >= 2)) return false;
    if (state.q) {
      var q = state.q.toLowerCase();
      var hit = (m.generic + ' ' + (m.subclass || '') + ' ' + (m.brandsCanada || []).join(' ')).toLowerCase().indexOf(q) >= 0;
      if (!hit) return false;
    }
    return true;
  }

  function dexCard(m) {
    var c = PML.store.get().cards[m.id];
    var key = PML.deck.classKey(m.class);
    var acc = accuracyOf(c);
    var card = ce('div', { class: 'dex-card' + (c.learned ? '' : ' locked'), style: { '--dexhue': 'var(--c-' + key + ')' }, tabindex: '0', role: 'button', 'aria-label': m.generic, onclick: function () { detail(m.id); } });
    card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); detail(m.id); } });
    card.appendChild(ce('span', { class: 'tier-dot', style: { background: tierColor(c.mastery), boxShadow: c.mastery !== 'none' ? '0 0 8px ' + tierColor(c.mastery) : 'none' }, title: c.mastery }));
    card.appendChild(ce('div', { class: 'gen' }, [m.generic]));
    card.appendChild(ce('div', { class: 'sub' }, [m.subclass || m.class]));
    var chips = ce('div', { class: 'row', style: { gap: '4px', marginTop: '6px', flexWrap: 'wrap' } });
    if (!c.learned) chips.appendChild(ce('span', { class: 'chip', style: { fontSize: '.62rem' } }, ['not learned']));
    else chips.appendChild(ce('span', { class: 'chip', style: { fontSize: '.62rem', color: tierColor(c.mastery) } }, [c.mastery === 'none' ? 'learned' : c.mastery]));
    if (m._meta && m._meta.usOnly) chips.appendChild(ce('span', { class: 'chip us', style: { fontSize: '.62rem' } }, ['US']));
    card.appendChild(chips);
    if (c.seen) card.appendChild(ce('div', { class: 'mini-acc', title: Math.round(acc * 100) + '% over ' + c.seen }, [ce('span', { style: { width: Math.round(acc * 100) + '%', background: acc >= 0.7 ? 'var(--mint)' : 'var(--honey)' } })]));
    return card;
  }

  function view(root) {
    var learned = PML.deck.all().filter(function (m) { return PML.store.get().cards[m.id].learned; }).length;
    var wrap = ce('div', { class: 'view stack' });
    wrap.appendChild(ce('div', { class: 'pagehead' }, [
      ce('div', {}, [ce('h1', {}, ['Catalog']), ce('p', { class: 'muted' }, ['Your psych-med dex — ' + learned + ' / ' + PML.deck.count() + ' learned. Tap any card for facts, sources, and stats.'])]),
    ]));

    var search = ce('input', { placeholder: '🔍 Search…', value: state.q, oninput: function () { state.q = this.value; renderGrid(); } });
    var clsSel = sel([''].concat(PML.deck.classes()), state.cls, ['All classes'].concat(PML.deck.classes()), function (v) { state.cls = v; renderGrid(); });
    var tierSel = sel(['', 'bronze', 'silver', 'gold', 'burnished', 'none'], state.tier, ['Any tier', 'Bronze', 'Silver', 'Gold', 'Burnished', 'Unrated'], function (v) { state.tier = v; renderGrid(); });
    var learnSel = sel(['', 'learned', 'unlearned'], state.learn, ['Learned + not', 'Learned', 'Not learned'], function (v) { state.learn = v; renderGrid(); });
    var needsBtn = ce('button', { class: 'btn sm' + (state.needs ? ' primary' : ''), onclick: function () { state.needs = !state.needs; needsBtn.classList.toggle('primary', state.needs); renderGrid(); } }, ['⚠ Needs work']);

    wrap.appendChild(ce('div', { class: 'card pad-sm' }, [ce('div', { class: 'filters' }, [search, clsSel, tierSel, learnSel, needsBtn])]));

    var grid = ce('div', { class: 'dex-grid' });
    wrap.appendChild(grid);
    root.appendChild(wrap);

    function renderGrid() {
      U.clear(grid);
      var list = PML.deck.all().filter(matches);
      if (!list.length) { grid.appendChild(ce('p', { class: 'muted' }, ['No medications match these filters.'])); return; }
      list.forEach(function (m) { grid.appendChild(dexCard(m)); });
    }
    renderGrid();
  }

  function sel(vals, cur, labels, on) {
    var s = ce('select', { onchange: function () { on(s.value); } });
    vals.forEach(function (v, i) { s.appendChild(ce('option', { value: v, text: labels[i], selected: v === cur ? 'selected' : null })); });
    return s;
  }

  // ---------- detail ----------
  function detail(id) {
    // Prefer the full interlinked Wiki page when available; fall back to the modal.
    if (PML.wiki && PML.wiki.medPage) return PML.wiki.medPage(id);
    var m = PML.deck.get(id);
    var c = PML.store.get().cards[id];
    var box = ce('div', { class: 'stack' });

    // header
    box.appendChild(ce('div', { class: 'row spread wrap', style: { gap: '8px' } }, [
      ce('div', {}, [ce('h2', { style: { margin: 0 } }, [m.generic]), ce('div', { class: 'muted', style: { fontSize: '.85rem' } }, [(m.pronunciation ? '/ ' + m.pronunciation + ' / · ' : '') + (m.subclass || m.class)])]),
      ce('div', { class: 'row', style: { gap: '4px', flexWrap: 'wrap' } }, [PML.render.classChip(m)].concat(PML.render.statusChips(m))),
    ]));

    // stats panel
    var acc = accuracyOf(c);
    var stats = ce('div', { class: 'stat-tiles' }, [
      statTile(c.mastery === 'none' ? (c.learned ? 'Learned' : '—') : U.titleCase(c.mastery), 'mastery'),
      statTile(c.seen ? Math.round(acc * 100) + '%' : '—', 'accuracy', c.seen ? c.correct + '/' + c.seen : 'not seen'),
      statTile(c.streakCorrect || 0, 'correct streak'),
      statTile(c.learned ? PML.srs.nextLabel(id) : '—', 'next review', c.lastReviewed ? 'last ' + c.lastReviewed : ''),
    ]);
    box.appendChild(stats);

    // per-exercise breakdown
    var exKeys = Object.keys(c.ex || {});
    if (exKeys.length) {
      var perEx = ce('div', { class: 'card pad-sm stack' }, [ce('h4', { style: { margin: 0, color: 'var(--honey)' } }, ['Per-exercise accuracy'])]);
      exKeys.forEach(function (t) {
        var e = c.ex[t]; var a = e.seen ? e.correct / e.seen : 0;
        perEx.appendChild(ce('div', { class: 'row spread', style: { fontSize: '.85rem' } }, [
          ce('span', { text: exLabel(t) }),
          ce('div', { class: 'row', style: { gap: '8px', width: '140px' } }, [ce('div', { class: 'bar', style: { flex: 1, height: '7px' } }, [ce('span', { style: { width: Math.round(a * 100) + '%', background: a >= 0.7 ? 'var(--mint)' : 'var(--honey)' } })]), ce('span', { class: 'muted', style: { width: '46px', textAlign: 'right' }, text: e.correct + '/' + e.seen })]),
        ]));
      });
      box.appendChild(perEx);
    }

    // actions
    box.appendChild(ce('div', { class: 'row wrap' }, [
      c.learned ? null : ce('button', { class: 'btn primary', onclick: function () { dlg.close(); PML.ui.startLearn([id]); } }, ['✨ Learn this']),
      ce('button', { class: 'btn', onclick: function () { dlg.close(); PML.ui.go('practice', { start: true, medId: id, n: 8 }); } }, ['🎮 Drill this med']),
      c.learned ? ce('button', { class: 'btn ghost', onclick: function () { dlg.close(); studyOne(id); } }, ['🔁 Flip card']) : null,
    ]));

    // facts
    var facts = ce('div', { class: 'stack', style: { marginTop: '4px' } });
    PML.render.factGroups(m).forEach(function (g) { facts.appendChild(g); });
    box.appendChild(facts);

    // sources footer
    if (m._meta && m._meta.sources && m._meta.sources.length) {
      var srcs = ce('div', { class: 'fact-group' }, [ce('h4', { text: 'Sources' })]);
      m._meta.sources.forEach(function (s) { if (s && s.name) srcs.appendChild(ce('div', { style: { fontSize: '.78rem' } }, [s.url ? ce('a', { href: s.url, target: '_blank', rel: 'noopener' }, [s.name]) : ce('span', { class: 'muted' }, [s.name])])); });
      srcs.appendChild(ce('div', { class: 'dim', style: { fontSize: '.72rem', marginTop: '6px' } }, ['Last verified: ' + (m._meta.lastVerified || '—') + '. Learning aid — verify against the current Health Canada monograph.']));
      box.appendChild(srcs);
    }

    var dlg = PML.ui.modal(box);
  }

  function studyOne(id) {
    PML.ui.go('home');
    var main = document.getElementById('main'); U.clear(main);
    PML.flashcard.session(main, { ids: [id], mode: 'review', onComplete: function () { PML.ui.go('catalog'); } });
  }

  function statTile(big, label, sub) { return ce('div', { class: 'tile' }, [ce('b', { text: String(big), style: { fontSize: '1.15rem' } }), ce('span', { text: label }), sub ? ce('div', { class: 'dim', style: { fontSize: '.68rem' } }, [sub]) : null]); }
  function exLabel(t) { return { mcq: 'Multiple choice', type: 'Type-the-answer', matching: 'Matching', build: 'Tap-to-build', reverse: 'Reverse recall', cloze: 'Cloze', confusable: 'Confusables', vignette: 'Vignettes' }[t] || t; }

  PML.catalog = { view: view, detail: detail };
})();
