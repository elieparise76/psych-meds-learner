/* render.js — shared medication rendering (fact groups, chips, provenance badges, source
 * text). Used by the Flashcard surface and the Catalog detail view. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;
  var ce = U.ce, esc = U.esc;

  // group -> ordered [key, label]
  var GROUPS = [
    ['mechanism', 'Mechanism', [['moa', 'Mechanism of action'], ['receptorProfile', 'Receptor profile'], ['onsetOfEffect', 'Onset of effect']]],
    ['pk', 'Pharmacokinetics', [['halfLife', 'Half-life'], ['timeToSteadyState', 'Steady state'], ['metabolism', 'Metabolism / CYP'], ['activeMetabolites', 'Active metabolites'], ['proteinBinding', 'Protein binding'], ['elimination', 'Elimination'], ['foodEffect', 'Food effect'], ['therapeuticLevel', 'Therapeutic level']]],
    ['indications', 'Indications', [['approvedCanada', 'Approved (Health Canada)'], ['offLabel', 'Off-label'], ['canmatLineOfTherapy', 'CANMAT line of therapy'], ['approvedPopulations', 'Populations']]],
    ['dosing', 'Dosing', [['startingDose', 'Starting dose'], ['titration', 'Titration'], ['therapeuticRange', 'Therapeutic range'], ['maxDose', 'Max dose'], ['frequencyTiming', 'Frequency / timing'], ['renalHepaticAdjustment', 'Renal/hepatic adj.'], ['startStopCrossTaper', 'Start/stop/cross-taper'], ['administrationNotes', 'Administration']]],
    ['safety', 'Safety', [['boxedWarning', 'Boxed / Serious Warning'], ['contraindications', 'Contraindications'], ['commonSE', 'Common side effects'], ['seriousAE', 'Serious adverse effects'], ['syndromes', 'Key syndromes'], ['overdoseLethality', 'Overdose lethality'], ['discontinuationSyndrome', 'Discontinuation / taper']]],
    ['monitoring', 'Monitoring', [['baselineWorkup', 'Baseline workup'], ['ongoingMonitoring', 'Ongoing monitoring']]],
    ['interactions', 'Interactions', [['majorDDI', 'Major interactions'], ['contraindicatedCombos', 'Contraindicated combos'], ['maoiWashout', 'MAOI washout'], ['foodInteractions', 'Food interactions'], ['substances', 'Substances']]],
    ['populations', 'Special populations', [['pregnancy', 'Pregnancy'], ['lactation', 'Lactation'], ['pediatric', 'Pediatric'], ['geriatric', 'Geriatric'], ['renalHepatic', 'Renal / hepatic'], ['cardiac', 'Cardiac (QT)']]],
    ['pedagogical', 'Pearls & hooks', [['pearls', 'Pearls'], ['mnemonics', 'Mnemonics'], ['confusables', 'Confusables'], ['classDifferentiators', 'Class differentiators'], ['examHooks', 'Exam hooks'], ['counsellingPoints', 'Counselling']]],
    ['identity', 'Identity', [['brandsCanada', 'Canadian brands'], ['formulationsCanada', 'Formulations'], ['din', 'DIN(s)'], ['controlledStatusCanada', 'Controlled status'], ['genericAvailable', 'Generic available']]],
  ];

  function isEmpty(v) { return v == null || (Array.isArray(v) && v.length === 0) || v === ''; }

  function valueNode(v) {
    if (Array.isArray(v)) {
      if (v.length === 1) return document.createTextNode(String(v[0]));
      var ul = ce('ul');
      v.forEach(function (item) { ul.appendChild(ce('li', { text: typeof item === 'object' ? (item.stem || JSON.stringify(item)) : String(item) })); });
      return ul;
    }
    if (typeof v === 'boolean') return document.createTextNode(v ? 'Yes' : 'No');
    return document.createTextNode(String(v));
  }

  function provBadges(med, key) {
    var frag = document.createDocumentFragment();
    var p = med._meta && med._meta.provenance && med._meta.provenance[key];
    if (!p) return frag;
    if (p.verifyFlag) {
      frag.appendChild(ce('span', { class: 'verify-badge', title: 'Model-authored — verify against the current Health Canada monograph.' }, ['⚠ verify']));
    } else if (p.origin && p.origin !== 'authored') {
      var label = { dpd: 'Health Canada DPD', openfda: 'openFDA/DailyMed label', dailymed: 'DailyMed', canmat: 'CANMAT', faers: 'FAERS', monograph: 'Monograph' }[p.origin] || p.origin;
      var a = p.url ? ce('a', { class: 'src-link', href: p.url, target: '_blank', rel: 'noopener', title: 'Source: ' + label }, ['· ' + label]) : ce('span', { class: 'src-link' }, ['· ' + label]);
      frag.appendChild(a);
    }
    return frag;
  }

  function factRow(med, key, label) {
    var v = med[key];
    if (isEmpty(v)) return null;
    var vwrap = ce('div', { class: 'v' });
    vwrap.appendChild(valueNode(v));
    // provenance
    var badges = provBadges(med, key);
    if (badges.childNodes.length) { var pl = ce('div', { class: 'dim', style: { fontSize: '.7rem', marginTop: '2px' } }); pl.appendChild(badges); vwrap.appendChild(pl); }
    // expandable source text for safety-critical grounded fields
    var p = med._meta && med._meta.provenance && med._meta.provenance[key];
    if (p && p.sourceText) {
      var det = ce('details');
      det.appendChild(ce('summary', { class: 'src-link', style: { cursor: 'pointer' } }, ['show source text']));
      det.appendChild(ce('div', { class: 'src-text' }, [p.sourceText]));
      vwrap.appendChild(det);
    }
    return ce('div', { class: 'fact' }, [ce('div', { class: 'k' }, [label]), vwrap]);
  }

  // Build fact groups (returns array of DOM group nodes). opts.only = [groupKeys] to limit.
  function factGroups(med, opts) {
    opts = opts || {};
    var out = [];
    GROUPS.forEach(function (g) {
      if (opts.only && opts.only.indexOf(g[0]) < 0) return;
      var rows = [];
      g[2].forEach(function (f) { var r = factRow(med, f[0], f[1]); if (r) rows.push(r); });
      if (!rows.length) return;
      var group = ce('div', { class: 'fact-group' }, [ce('h4', { text: g[1] })]);
      rows.forEach(function (r) { group.appendChild(r); });
      out.push(group);
    });
    return out;
  }

  function classChip(med) {
    var key = PML.deck.classKey(med.class);
    return ce('span', { class: 'chip class', style: { background: 'var(--c-' + key + ')', color: '#12101a' } }, [med.class + (med.subclass ? ' · ' + med.subclass : '')]);
  }
  function tierChip(tier) {
    if (!tier || tier === 'none') return null;
    return ce('span', { class: 'chip tier-' + tier }, [tier.charAt(0).toUpperCase() + tier.slice(1)]);
  }
  function statusChips(med) {
    var chips = [];
    if (med._meta && med._meta.usOnly) chips.push(ce('span', { class: 'chip us', title: 'Not Health Canada approved — for awareness' }, ['US-only']));
    if (med.controlledStatusCanada && /narcotic|targeted|controlled/i.test(med.controlledStatusCanada)) chips.push(ce('span', { class: 'chip ctrl' }, [med.controlledStatusCanada.split(';')[0]]));
    if (med._meta && med._meta.verifyFlag) chips.push(ce('span', { class: 'chip warn', title: 'Some fields are model-authored — verify against the monograph.' }, ['⚠ verify fields']));
    return chips;
  }

  PML.render = { factGroups: factGroups, classChip: classChip, tierChip: tierChip, statusChips: statusChips, isEmpty: isEmpty, GROUPS: GROUPS, provBadges: provBadges };
})();
