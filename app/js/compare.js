/* compare.js — Compare v2. Pick any specific medications (across classes) and see them side by
 * side in a rich, aligned "versus" table — clinical fields first. Or quick-load a whole class. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  var selected = []; // med ids
  var MAX = 4;

  function fmtList(v, n) { return Array.isArray(v) ? (v.length ? v.slice(0, n || 4).join(', ') + (v.length > (n || 4) ? '…' : '') : '—') : (v || '—'); }
  function disordersOf(m) { return (PML.wiki && PML.wiki.disordersFor) ? PML.wiki.disordersFor(m.id).map(function (d) { return d.name; }) : []; }

  // clinical-first comparison rows
  var ROWS = [
    { label: 'Class', get: function (m) { return m.subclass || m.class; } },
    { label: 'Used for', get: function (m) { var d = disordersOf(m); return d.length ? fmtList(d, 4) : fmtList(m.approvedCanada, 3); } },
    { label: 'CANMAT line', get: function (m) { return fmtList(m.canmatLineOfTherapy, 2); } },
    { label: 'Starting dose', get: function (m) { return m.startingDose || '—'; } },
    { label: 'Max dose', get: function (m) { return m.maxDose || '—'; } },
    { label: 'Timing', get: function (m) { return m.frequencyTiming || '—'; } },
    { label: 'Common side effects', get: function (m) { return fmtList(m.commonSE, 4); } },
    { label: 'Serious / syndromes', get: function (m) { return fmtList((m.seriousAE || []).concat(m.syndromes || []), 4); } },
    { label: 'Monitoring', get: function (m) { return m.ongoingMonitoring || '—'; } },
    { label: 'Pregnancy', get: function (m) { return m.pregnancy ? String(m.pregnancy).slice(0, 120) + (String(m.pregnancy).length > 120 ? '…' : '') : '—'; } },
    { label: 'Controlled', get: function (m) { return m.controlledStatusCanada || '—'; } },
    { label: 'Half-life', get: function (m) { return m.halfLife || '—'; } },
    { label: 'Therapeutic level', get: function (m) { return m.therapeuticLevel || '—'; } },
  ];

  function view(root) {
    var wrap = ce('div', { class: 'view stack' });
    wrap.appendChild(ce('div', { class: 'pagehead' }, [ce('div', {}, [ce('h1', {}, ['Compare']), ce('p', { class: 'muted' }, ['Pick any two-to-four medications — even across classes — and see them side by side.'])])]));

    // picker
    var chips = ce('div', { class: 'row wrap', style: { gap: '6px', minHeight: '20px' } });
    var input = ce('input', { class: 'text-answer', placeholder: 'Search a medication to add…', autocomplete: 'off' });
    var sugg = ce('div', { class: 'dex-grid', style: { marginTop: '8px' } });
    var classSel = ce('select', {}, [ce('option', { value: '', text: 'Quick-load a class…' })].concat(PML.deck.classes().map(function (c) { return ce('option', { value: c, text: c }); })));
    classSel.addEventListener('change', function () { if (classSel.value) { selected = PML.deck.byClass(classSel.value).slice(0, MAX).map(function (m) { return m.id; }); classSel.value = ''; renderAll(); } });

    var picker = ce('div', { class: 'card pad stack' }, [
      ce('div', { class: 'row spread wrap' }, [ce('div', { class: 'q-type-label' }, ['Selected (up to ' + MAX + ')']), classSel]),
      chips, input, sugg,
    ]);
    wrap.appendChild(picker);

    var host = ce('div');
    wrap.appendChild(host);
    root.appendChild(wrap);

    input.addEventListener('input', function () {
      U.clear(sugg);
      var q = input.value.trim();
      if (!q) return;
      PML.deck.search(q).filter(function (m) { return selected.indexOf(m.id) < 0; }).slice(0, 8).forEach(function (m) {
        sugg.appendChild(ce('div', { class: 'dex-card', style: { '--dexhue': 'var(--c-' + PML.deck.classKey(m.class) + ')' }, onclick: function () { add(m.id); input.value = ''; U.clear(sugg); } }, [
          ce('div', { class: 'gen', style: { fontSize: '.95rem' } }, [m.generic]), ce('div', { class: 'sub' }, [m.subclass || m.class]),
        ]));
      });
    });

    function add(id) { if (selected.indexOf(id) < 0 && selected.length < MAX) { selected.push(id); if (PML.sfxOn()) PML.sfx.select(); renderAll(); } }
    function remove(id) { selected = selected.filter(function (x) { return x !== id; }); renderAll(); }

    function renderChips() {
      U.clear(chips);
      if (!selected.length) { chips.appendChild(ce('span', { class: 'dim', style: { fontSize: '.8rem' } }, ['No meds selected yet — search above or quick-load a class.'])); return; }
      selected.forEach(function (id) {
        var m = PML.deck.get(id);
        chips.appendChild(ce('span', { class: 'chip', style: { paddingRight: '4px' } }, [m.generic, ce('button', { 'aria-label': 'Remove', style: { border: 0, background: 'none', color: 'inherit', cursor: 'pointer', fontSize: '1rem', marginLeft: '2px' }, onclick: function () { remove(id); } }, ['×'])]));
      });
    }

    function renderTable() {
      U.clear(host);
      if (selected.length < 2) { host.appendChild(ce('div', { class: 'card pad center muted' }, ['Add at least two medications to compare.'])); return; }
      var meds = selected.map(function (id) { return PML.deck.get(id); });
      var table = ce('table', { class: 'compare-table versus' });
      var thead = ce('tr', {}, [ce('th', {}, [''])]);
      meds.forEach(function (m) { thead.appendChild(ce('th', { style: { cursor: 'pointer' }, onclick: function () { PML.wiki.medPage(m.id); } }, [m.generic])); });
      table.appendChild(ce('thead', {}, [thead]));
      var tbody = ce('tbody');
      ROWS.forEach(function (r) {
        // skip a row if every value is a dash
        var vals = meds.map(function (m) { return r.get(m); });
        if (vals.every(function (v) { return v === '—' || v == null; })) return;
        var tr = ce('tr', {}, [ce('td', { style: { fontWeight: 700, color: 'var(--text-muted)', whiteSpace: 'nowrap' } }, [r.label])]);
        vals.forEach(function (v) { tr.appendChild(ce('td', {}, [String(v)])); });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      host.appendChild(ce('div', { class: 'table-scroll' }, [table]));
      host.appendChild(ce('p', { class: 'dim', style: { fontSize: '.75rem', marginTop: '8px' } }, ['Tap a drug name for its full wiki page. Empty rows are hidden.']));
    }

    function renderAll() { renderChips(); renderTable(); }
    renderAll();
  }

  PML.compare = { view: view };
})();
