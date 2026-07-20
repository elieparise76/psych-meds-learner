/* compare.js — Class compare: side-by-side within a class, sortable by half-life, dosing,
 * receptor/SE burden. Fast way to see how members of a class differ. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce;

  var state = { cls: null, sort: 'generic', dir: 1 };

  function numFrom(s) { var m = String(s || '').match(/[\d.]+/); return m ? parseFloat(m[0]) : Infinity; }
  function seBurden(m) { return (m.commonSE || []).length + (m.seriousAE || []).length; }

  var COLS = [
    { key: 'generic', label: 'Drug', get: function (m) { return m.generic; }, cmp: function (m) { return m.generic.toLowerCase(); } },
    { key: 'subclass', label: 'Subclass', get: function (m) { return m.subclass || '—'; }, cmp: function (m) { return m.subclass || ''; } },
    { key: 'halfLife', label: 'Half-life', get: function (m) { return m.halfLife || '—'; }, cmp: function (m) { return numFrom(m.halfLife); } },
    { key: 'startingDose', label: 'Start', get: function (m) { return m.startingDose || '—'; }, cmp: function (m) { return numFrom(m.startingDose); } },
    { key: 'maxDose', label: 'Max', get: function (m) { return m.maxDose || '—'; }, cmp: function (m) { return numFrom(m.maxDose); } },
    { key: 'se', label: 'SE burden', get: function (m) { return seBurden(m) ? '●'.repeat(Math.min(6, seBurden(m))) : '—'; }, cmp: seBurden },
    { key: 'syn', label: 'Key syndromes', get: function (m) { return (m.syndromes || []).slice(0, 3).join(', ') || '—'; }, cmp: function (m) { return (m.syndromes || []).length; } },
  ];

  function view(root) {
    if (!state.cls) state.cls = PML.deck.classes()[0];
    var wrap = ce('div', { class: 'view stack' });
    wrap.appendChild(ce('div', { class: 'pagehead' }, [ce('div', {}, [ce('h1', {}, ['Class compare']), ce('p', { class: 'muted' }, ['Compare members of a class side by side. Click a column to sort.'])])]));

    var clsSel = ce('select', { onchange: function () { state.cls = this.value; render(); } });
    PML.deck.classes().forEach(function (c) { clsSel.appendChild(ce('option', { value: c, text: c, selected: c === state.cls ? 'selected' : null })); });
    wrap.appendChild(ce('div', { class: 'filters' }, [ce('span', { class: 'muted' }, ['Class:']), clsSel]));

    var host = ce('div');
    wrap.appendChild(host);
    root.appendChild(wrap);

    function render() {
      U.clear(host);
      var meds = PML.deck.byClass(state.cls).slice();
      var col = COLS.filter(function (c) { return c.key === state.sort; })[0] || COLS[0];
      meds.sort(function (a, b) { var va = col.cmp(a), vb = col.cmp(b); return (va < vb ? -1 : va > vb ? 1 : 0) * state.dir; });

      var table = ce('table', { class: 'compare-table' });
      var thead = ce('tr');
      COLS.forEach(function (c) {
        var arrow = state.sort === c.key ? (state.dir > 0 ? ' ▲' : ' ▼') : '';
        thead.appendChild(ce('th', { onclick: function () { if (state.sort === c.key) state.dir *= -1; else { state.sort = c.key; state.dir = 1; } render(); } }, [c.label + arrow]));
      });
      table.appendChild(ce('thead', {}, [thead]));
      var tbody = ce('tbody');
      meds.forEach(function (m) {
        var tr = ce('tr', { style: { cursor: 'pointer' }, onclick: function () { PML.catalog.detail(m.id); } });
        COLS.forEach(function (c) {
          var learned = PML.store.get().cards[m.id].learned;
          tr.appendChild(ce('td', { style: c.key === 'generic' ? { fontWeight: 700, color: learned ? 'var(--text)' : 'var(--text-dim)' } : {} }, [String(c.get(m))]));
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      host.appendChild(ce('div', { class: 'table-scroll' }, [table]));
      host.appendChild(ce('p', { class: 'dim', style: { fontSize: '.75rem', marginTop: '8px' } }, [meds.length + ' agents · click a row for full details + sources. Dashes mean the field is empty for that agent.']));
    }
    render();
  }

  PML.compare = { view: view };
})();
