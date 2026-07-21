/* exercises.js — generate Practice exercises from the schema. CLINICAL-FIRST: the primary
 * material is how a drug is used (indications, role, dosing, side effects, monitoring,
 * counselling, safety, CANMAT positioning). Mechanism / receptor / PK content is secondary.
 * Each generator returns a normalized descriptor consumed by practice.js, or null. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;

  // No 'build' (word-ordering) — removed at the user's request.
  var TYPES = ['mcq', 'type', 'matching', 'reverse', 'cloze', 'confusable', 'vignette'];

  function first(v) { return Array.isArray(v) ? v[0] : v; }
  function has(v) { return v != null && v !== '' && !(Array.isArray(v) && v.length === 0); }
  function pool() { return PML.deck.all(); }
  function shuffle(a) { return U.sample(a, a.length); }
  function labelOf(m) { return m.generic; }

  function tagsFor(med, text) {
    var t = [];
    var s = (text || '') + ' ' + (med.syndromes || []).join(' ') + ' ' + (med.seriousAE || []).join(' ');
    if (/serotonin/i.test(s)) t.push('serotonin');
    if (/nms|neuroleptic malignant/i.test(s)) t.push('nms');
    if (/qt|torsad/i.test(s)) t.push('qt');
    if (/agranulocyt|neutropen/i.test(s)) t.push('agranulocytosis');
    return t;
  }
  function distractors(med, n, filterFn) {
    return U.sample(pool().filter(function (m) { return m.id !== med.id && (!filterFn || filterFn(m)); }), n);
  }
  function srcFor(med, key) {
    var p = med._meta && med._meta.provenance && med._meta.provenance[key];
    if (p) return { name: ({ dpd: 'Health Canada DPD', openfda: 'openFDA/DailyMed', canmat: 'CANMAT', faers: 'FAERS', monograph: 'Monograph' }[p.origin] || 'authored'), origin: p.origin, url: p.url || null };
    return null;
  }

  // ---- clinical helpers: med <-> disorder ----
  function disordersOf(med) { return (PML.wiki && PML.wiki.disordersFor) ? PML.wiki.disordersFor(med.id) : []; }
  function medsTreating(disorderId) {
    return (window.DISORDERS || []).filter(function (d) { return d.id === disorderId; }).map(function (d) { return d.meds || []; })[0] || [];
  }

  // ============ MCQ (clinical-weighted) ============
  function mcqIndication(med) {
    var ds = disordersOf(med);
    if (!ds.length) return null;
    var d = U.pick(ds);
    var treats = medsTreating(d.id);
    // distractors = meds that do NOT treat this disorder
    var wrong = distractors(med, 3, function (m) { return treats.indexOf(m.id) < 0; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'indication',
      stem: 'Which of these is used for ' + d.name + '?',
      options: opts, answer: med.generic,
      explanation: med.generic + ' is used for ' + d.name + '.' + (med.canmatLineOfTherapy && med.canmatLineOfTherapy.length ? ' (' + first(med.canmatLineOfTherapy) + ')' : ''),
      source: srcFor(med, 'canmatLineOfTherapy') || null, meds: [med.id].concat(wrong.map(function (m) { return m.id; })), disorder: d.name, tags: [],
    };
  }
  function mcqSyndrome(med) {
    var items = (med.syndromes || []).concat(med.seriousAE || []).filter(function (x) { return x && x.length < 60; });
    if (!items.length) return null;
    var feature = U.pick(items);
    var fnorm = feature.toLowerCase().split(/[ /(]/)[0];
    var wrong = distractors(med, 3, function (m) { return (m.syndromes || []).concat(m.seriousAE || []).join(' ').toLowerCase().indexOf(fnorm) < 0; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'safety',
      stem: 'Which agent is MOST associated with: ' + feature + '?',
      options: opts, answer: med.generic,
      explanation: med.generic + ' — ' + feature + '.' + (med.pearls && med.pearls[0] ? ' ' + med.pearls[0] : ''),
      source: srcFor(med, 'seriousAE') || srcFor(med, 'syndromes'), meds: [med.id], tags: tagsFor(med, feature),
    };
  }
  function mcqCanmat(med) {
    if (!has(med.canmatLineOfTherapy)) return null;
    var line = first(med.canmatLineOfTherapy);
    var wrong = distractors(med, 3, function (m) { return m.class === med.class; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'canmat',
      stem: 'Per CANMAT, which agent fits: “' + line + '”?',
      options: opts, answer: med.generic, explanation: med.generic + ' — ' + line, source: srcFor(med, 'canmatLineOfTherapy'), meds: [med.id], tags: [],
    };
  }
  function mcqMoa(med) { // low-priority neuropharma fallback
    if (!has(med.moa)) return null;
    var wrong = distractors(med, 3, function (m) { return m.class === med.class; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return { type: 'mcq', medId: med.id, subtype: 'mechanism', stem: 'Which agent has this mechanism: “' + med.moa + '”', options: opts, answer: med.generic, explanation: med.generic + (med.classDifferentiators ? ' — ' + med.classDifferentiators : ''), source: srcFor(med, 'moa'), meds: [med.id], tags: tagsFor(med) };
  }
  function mcq(med) {
    // clinical variants first; mechanism only ~15% of the time and only as fallback
    var order = shuffle([mcqIndication, mcqSyndrome, mcqCanmat]);
    for (var i = 0; i < order.length; i++) { var ex = order[i](med); if (ex) return ex; }
    return (Math.random() < 0.5 ? mcqMoa(med) : null) || mcqSyndrome(med) || mcqIndication(med);
  }

  // ============ Type-the-answer (clinical) ============
  var MONITOR_TOKENS = ['ANC', 'CBC', 'neutrophil', 'lithium level', 'level', 'renal', 'creatinine', 'thyroid', 'TSH', 'LFT', 'liver', 'ECG', 'QT', 'weight', 'BMI', 'glucose', 'HbA1c', 'lipids', 'sodium', 'prolactin', 'blood pressure', 'BP', 'CK'];
  function typeAnswer(med) {
    var cands = [];
    if (med.subclass || med.class) cands.push({ w: 2, q: 'What class of drug is ' + med.generic + '?', a: med.subclass ? [med.subclass, med.class] : [med.class], disp: med.subclass || med.class, key: 'class' });
    if (has(med.startingDose)) cands.push({ w: 2, q: 'Usual STARTING dose of ' + med.generic + '?', a: acceptNums(med.startingDose), disp: med.startingDose, key: 'startingDose' });
    if (has(med.maxDose)) cands.push({ w: 1, q: 'MAX dose of ' + med.generic + '?', a: acceptNums(med.maxDose), disp: med.maxDose, key: 'maxDose' });
    if (has(med.therapeuticLevel)) cands.push({ w: 2, q: 'Therapeutic LEVEL for ' + med.generic + '?', a: acceptNums(med.therapeuticLevel), disp: med.therapeuticLevel, key: 'therapeuticLevel' });
    var mon = monitorTokens(med);
    if (mon.length) cands.push({ w: 2, q: 'Name one thing you MONITOR on ' + med.generic + '.', a: mon, disp: mon.slice(0, 3).join(', '), key: 'ongoingMonitoring', hint: 'A test or parameter you check.' });
    var ds = disordersOf(med);
    if (ds.length) { var d = U.pick(ds); cands.push({ w: 2, q: 'Name a condition ' + med.generic + ' is used to treat.', a: [d.name].concat((d.aka || []).slice(0, 3)), disp: d.name, key: 'canmatLineOfTherapy' }); }
    if (!cands.length) return null;
    var c = weightedPick(cands);
    return { type: 'type', medId: med.id, subtype: c.key, stem: c.q, accept: c.a, answerDisplay: c.disp, explanation: med.generic + ' — ' + c.disp, source: srcFor(med, c.key), hint: c.hint || 'Minor wording differences are OK.', meds: [med.id], tags: [] };
  }
  function acceptNums(v) { var nums = String(v).match(/\d+(\.\d+)?/g) || []; return [v].concat(nums.length ? [nums.join(' ')] : []); }
  function monitorTokens(med) {
    var text = ((med.ongoingMonitoring || '') + ' ' + (med.baselineWorkup || []).join(' ')).toLowerCase();
    return MONITOR_TOKENS.filter(function (t) { return text.indexOf(t.toLowerCase()) >= 0; });
  }
  function weightedPick(cands) { var tot = 0; cands.forEach(function (c) { tot += c.w; }); var r = Math.random() * tot; for (var i = 0; i < cands.length; i++) { r -= cands[i].w; if (r <= 0) return cands[i]; } return cands[0]; }

  // ============ Reverse recall (clinical clue → name the drug) ============
  function reverse(med) {
    var clue = null, kind = null;
    var ds = disordersOf(med);
    if (ds.length && (med.commonSE || []).length) { clue = 'treats ' + U.pick(ds).name + ', and commonly causes ' + (med.commonSE || []).slice(0, 2).join(' / '); kind = 'use + side effect'; }
    else if (ds.length) { clue = 'a go-to agent for ' + U.pick(ds).name; kind = 'indication'; }
    else if ((med.commonSE || []).length) { clue = (med.commonSE || []).slice(0, 3).join(', '); kind = 'side-effect profile'; }
    else if (has(med.classDifferentiators)) { clue = med.classDifferentiators; kind = 'clinical profile'; }
    if (!clue) return null;
    return { type: 'reverse', medId: med.id, subtype: kind, stem: 'Name the drug (' + kind + '): ' + clue, accept: [med.generic].concat((med.brandsCanada || []).slice(0, 2)), answerDisplay: med.generic, explanation: med.generic, source: null, meds: [med.id], tags: [] };
  }

  // ============ Cloze (clinical sentence) ============
  function cloze(med) {
    var src = null, key = null;
    var order = [['ongoingMonitoring', med.ongoingMonitoring], ['titration', med.titration], ['frequencyTiming', med.frequencyTiming], ['startingDose', med.startingDose], ['counsellingPoints', first(med.counsellingPoints)], ['moa', med.moa]];
    for (var i = 0; i < order.length; i++) { if (has(order[i][1])) { src = String(order[i][1]); key = order[i][0]; break; } }
    if (!src) return null;
    var m = src.match(/CYP\s?\w+|\d+(\.\d+)?\s?(h|hours|mg|days|ng\/mL|mmol\/L|µmol\/L)|ANC|CBC|ECG|TSH|[A-Z][a-z]{4,}/);
    if (!m) return null;
    var blank = m[0];
    return { type: 'cloze', medId: med.id, subtype: key, stem: 'Fill the blank (' + med.generic + '):', clozeText: src.replace(blank, '_____'), accept: [blank], answerDisplay: blank, explanation: src, source: srcFor(med, key), meds: [med.id], tags: [] };
  }

  // ============ Matching (clinical features) ============
  function matching(med) {
    var featureFns = [
      { key: 'indication', label: 'main use', get: function (m) { var d = disordersOf(m); return d.length ? d[0].name : null; } },
      { key: 'class', label: 'class', get: function (m) { return m.subclass || m.class; } },
      { key: 'monitoring', label: 'key monitoring', get: function (m) { return m.ongoingMonitoring ? String(m.ongoingMonitoring).split(/[;.]/)[0] : null; } },
      { key: 'syn', label: 'key warning', get: function (m) { return first(m.syndromes) || first(m.seriousAE); } },
    ];
    var f = U.pick(featureFns);
    var group = pool().filter(function (m) { return has(f.get(m)); });
    if (group.length < 4) return null;
    var sameClass = group.filter(function (m) { return m.class === med.class; });
    var chosen = (sameClass.length >= 4 ? U.sample(sameClass, 4) : U.sample(group, 4));
    var pairs = chosen.map(function (m) { return { l: m.generic, r: String(f.get(m)), id: m.id }; });
    var seen = {}; var uniq = pairs.filter(function (p) { if (seen[p.r]) return false; seen[p.r] = 1; return true; });
    if (uniq.length < 3) return null;
    return { type: 'matching', medId: med.id, subtype: f.label, stem: 'Match each drug to its ' + f.label + ':', pairs: uniq, explanation: uniq.map(function (p) { return p.l + ' → ' + p.r; }).join(' · '), source: null, meds: uniq.map(function (p) { return p.id; }), tags: [] };
  }

  // ============ Confusables ============
  var CONFUSE_PAIRS = [
    ['clozapine', 'clonazepam', 'Which is the antipsychotic (vs the benzodiazepine)?'],
    ['bupropion', 'buspirone', 'Which is the antidepressant that aids smoking cessation (vs the 5-HT1A anxiolytic)?'],
    ['quetiapine', 'olanzapine', 'Which antipsychotic has the HIGHEST metabolic/weight risk?'],
    ['naltrexone', 'naloxone', 'Which is the LONG-acting maintenance antagonist (vs the overdose rescue)?'],
    ['methadone', 'methylphenidate', 'Which is the opioid agonist used in OAT?'],
    ['fluvoxamine', 'fluoxetine', 'Which SSRI is the potent CYP1A2 inhibitor used for OCD (raises clozapine)?'],
    ['hydroxyzine', 'hydralazine', 'Which is the antihistamine anxiolytic?'],
    ['clomipramine', 'clonidine', 'Which is the TCA used for OCD?'],
  ];
  function confusable(med) {
    var pair = CONFUSE_PAIRS.filter(function (p) { return p[0] === med.id || p[1] === med.id; });
    var p = pair.length ? U.pick(pair) : U.pick(CONFUSE_PAIRS);
    var a = PML.deck.get(p[0]), b = PML.deck.get(p[1]);
    var aName = a ? a.generic : U.titleCase(p[0]);
    var bName = b ? b.generic : U.titleCase(p[1]);
    return { type: 'confusable', medId: (a ? a.id : med.id), subtype: 'lookalike', stem: p[2], options: shuffle([aName, bName]), answer: aName, explanation: (a && a.confusables && a.confusables[0]) ? a.confusables[0] : p[2], source: null, meds: [p[0], p[1]], tags: [] };
  }

  // ============ Vignette (bank + per-med) ============
  function vignette(med) {
    var poolV = [];
    (window.VIGNETTES || []).forEach(function (v) { if ((v.meds || []).indexOf(med.id) >= 0 && Array.isArray(v.options) && v.options.indexOf(v.answer) >= 0) poolV.push({ stem: v.stem, options: v.options, answer: v.answer, explanation: v.explanation, source: v.source, meds: v.meds, disorder: v.disorder, tags: v.tags || [] }); });
    (med.vignettes || []).forEach(function (v) { if (v && v.options && v.answer) poolV.push({ stem: v.stem, options: v.options, answer: v.answer, explanation: v.explanation, source: v.source, meds: [med.id], disorder: null, tags: tagsFor(med, v.stem) }); });
    if (!poolV.length) return null;
    var v = U.pick(poolV);
    return { type: 'vignette', medId: med.id, subtype: v.disorder ? 'case · ' + v.disorder : 'clinical case', stem: v.stem, options: shuffle(v.options.slice()), answer: v.answer, explanation: v.explanation || '', source: v.source || srcFor(med, 'seriousAE'), meds: v.meds || [med.id], disorder: v.disorder || null, tags: v.tags && v.tags.length ? v.tags : tagsFor(med, v.stem) };
  }
  function bankVignette() {
    var bank = (window.VIGNETTES || []).filter(function (v) { return Array.isArray(v.options) && v.options.indexOf(v.answer) >= 0; });
    if (!bank.length) return null;
    var v = U.pick(bank);
    var med = (v.meds || []).map(function (id) { return PML.deck.get(id); }).filter(Boolean)[0];
    return { type: 'vignette', medId: med ? med.id : (v.meds || ['_'])[0], subtype: v.disorder ? 'case · ' + v.disorder : 'clinical case', stem: v.stem, options: shuffle(v.options.slice()), answer: v.answer, explanation: v.explanation || '', source: v.source || null, meds: v.meds || [], disorder: v.disorder || null, tags: v.tags || [] };
  }

  var GEN = { mcq: mcq, type: typeAnswer, reverse: reverse, cloze: cloze, matching: matching, confusable: confusable, vignette: vignette };

  function generate(type, med, avoid) {
    var order = [type].concat(TYPES.filter(function (t) { return t !== type; }));
    for (var i = 0; i < order.length; i++) {
      if (avoid && order[i] === avoid && order.length > 1) continue;
      var ex = GEN[order[i]] && GEN[order[i]](med);
      if (ex) return ex;
    }
    return null;
  }

  PML.exercises = { TYPES: TYPES, generate: generate, GEN: GEN, bankVignette: bankVignette };
})();
