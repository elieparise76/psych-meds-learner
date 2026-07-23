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

  // ---- scope: which meds may be TESTED ----
  // Practice sets this to the learned meds before building a session, so exercises that quiz more
  // than one drug at a time (matching, confusables, cross-med vignettes) never reach for material
  // the user has not met yet. null = whole deck. Distractors are deliberately NOT scoped: a wrong
  // option only has to be a plausible name, and unfamiliar ones make elimination honest.
  var scope = null;
  function setScope(ids) {
    scope = null;
    if (ids && ids.length) { scope = {}; ids.forEach(function (i) { scope[i] = 1; }); }
  }
  function inScope(id) { return !scope || scope[id] === 1; }
  function scopedPool() { return scope ? pool().filter(function (m) { return scope[m.id] === 1; }) : pool(); }
  // a vignette is fair game only if every deck med it leans on is in scope
  function vignetteInScope(v) {
    if (!scope) return true;
    var ms = v.meds || [];
    for (var i = 0; i < ms.length; i++) { if (PML.deck.get(ms[i]) && !inScope(ms[i])) return false; }
    return true;
  }

  // ---- category scope: which KINDS of information may be TESTED ----
  // Practice's setup lets the user pick which med-card categories to drill (mechanism, dosing,
  // safety, …). The category ids mirror render.js's fact groups (minus identity), plus a synthetic
  // 'vignette' for the cross-med case bank. Every generator tags its output with `category` and
  // returns null when that category is not allowed, so a scoped session only surfaces the chosen
  // kinds of question. null = everything (also the only mode where non-group 'class' items appear).
  var CATEGORIES = [
    { key: 'mechanism', label: 'Mechanism' },
    { key: 'pk', label: 'Pharmacokinetics' },
    { key: 'indications', label: 'Indications' },
    { key: 'dosing', label: 'Dosing' },
    { key: 'safety', label: 'Safety' },
    { key: 'monitoring', label: 'Monitoring' },
    { key: 'interactions', label: 'Interactions' },
    { key: 'populations', label: 'Populations' },
    { key: 'pedagogical', label: 'Pearls & hooks' },
    { key: 'vignette', label: 'Clinical vignettes' },
  ];
  var catScope = null;
  function setCategoryScope(cats) {
    catScope = null;
    if (cats && cats.length) { catScope = {}; cats.forEach(function (c) { catScope[c] = 1; }); }
  }
  function catAllowed(cat) { return !catScope || (cat != null && catScope[cat] === 1); }
  function anyCatAllowed(list) { for (var i = 0; i < list.length; i++) if (catAllowed(list[i])) return true; return false; }

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
    if (!catAllowed('indications')) return null;
    var ds = disordersOf(med);
    if (!ds.length) return null;
    var d = U.pick(ds);
    var treats = medsTreating(d.id);
    // distractors = meds that do NOT treat this disorder
    var wrong = distractors(med, 3, function (m) { return treats.indexOf(m.id) < 0; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'indication', category: 'indications',
      stem: 'Which of these is used for ' + d.name + '?',
      options: opts, answer: med.generic,
      explanation: med.generic + ' is used for ' + d.name + '.' + (med.canmatLineOfTherapy && med.canmatLineOfTherapy.length ? ' (' + first(med.canmatLineOfTherapy) + ')' : ''),
      source: srcFor(med, 'canmatLineOfTherapy') || null, meds: [med.id].concat(wrong.map(function (m) { return m.id; })), disorder: d.name, tags: [],
    };
  }
  function mcqSyndrome(med) {
    if (!catAllowed('safety')) return null;
    var items = (med.syndromes || []).concat(med.seriousAE || []).filter(function (x) { return x && x.length < 60; });
    if (!items.length) return null;
    var feature = U.pick(items);
    var fnorm = feature.toLowerCase().split(/[ /(]/)[0];
    var wrong = distractors(med, 3, function (m) { return (m.syndromes || []).concat(m.seriousAE || []).join(' ').toLowerCase().indexOf(fnorm) < 0; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'safety', category: 'safety',
      stem: 'Which agent is MOST associated with: ' + feature + '?',
      options: opts, answer: med.generic,
      explanation: med.generic + ' — ' + feature + '.' + (med.pearls && med.pearls[0] ? ' ' + med.pearls[0] : ''),
      source: srcFor(med, 'seriousAE') || srcFor(med, 'syndromes'), meds: [med.id], tags: tagsFor(med, feature),
    };
  }
  function mcqCanmat(med) {
    if (!catAllowed('indications')) return null;
    if (!has(med.canmatLineOfTherapy)) return null;
    var line = first(med.canmatLineOfTherapy);
    var wrong = distractors(med, 3, function (m) { return m.class === med.class; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'canmat', category: 'indications',
      stem: 'Per CANMAT, which agent fits: “' + line + '”?',
      options: opts, answer: med.generic, explanation: med.generic + ' — ' + line, source: srcFor(med, 'canmatLineOfTherapy'), meds: [med.id], tags: [],
    };
  }
  function mcqMoa(med) { // low-priority neuropharma fallback
    if (!catAllowed('mechanism')) return null;
    if (!has(med.moa)) return null;
    var wrong = distractors(med, 3, function (m) { return m.class === med.class; });
    if (wrong.length < 3) return null;
    var opts = shuffle([med].concat(wrong)).map(labelOf);
    return { type: 'mcq', medId: med.id, subtype: 'mechanism', category: 'mechanism', stem: 'Which agent has this mechanism: “' + med.moa + '”', options: opts, answer: med.generic, explanation: med.generic + (med.classDifferentiators ? ' — ' + med.classDifferentiators : ''), source: srcFor(med, 'moa'), meds: [med.id], tags: tagsFor(med) };
  }
  function mcq(med) {
    // clinical variants first; mechanism only as fallback (kept de-emphasized)
    var order = shuffle([mcqIndication, mcqSyndrome, mcqCanmat]);
    for (var i = 0; i < order.length; i++) { var ex = order[i](med); if (ex) return ex; }
    return mcqMoa(med) || mcqSyndrome(med) || mcqIndication(med);
  }

  // ============ Type-the-answer (clinical) ============
  var MONITOR_TOKENS = ['ANC', 'CBC', 'neutrophil', 'lithium level', 'level', 'renal', 'creatinine', 'thyroid', 'TSH', 'LFT', 'liver', 'ECG', 'QT', 'weight', 'BMI', 'glucose', 'HbA1c', 'lipids', 'sodium', 'prolactin', 'blood pressure', 'BP', 'CK'];
  function typeAnswer(med) {
    var cands = [];
    // 'class' is a core identifier, not one of the fact groups — only offered in an unscoped mix.
    if (med.subclass || med.class) cands.push({ w: 2, cat: '_core', q: 'What class of drug is ' + med.generic + '?', a: med.subclass ? [med.subclass, med.class] : [med.class], disp: med.subclass || med.class, key: 'class' });
    if (has(med.startingDose)) cands.push({ w: 2, cat: 'dosing', q: 'Usual STARTING dose of ' + med.generic + '?', a: acceptNums(med.startingDose), disp: med.startingDose, key: 'startingDose' });
    if (has(med.maxDose)) cands.push({ w: 1, cat: 'dosing', q: 'MAX dose of ' + med.generic + '?', a: acceptNums(med.maxDose), disp: med.maxDose, key: 'maxDose' });
    if (has(med.therapeuticLevel)) cands.push({ w: 2, cat: 'pk', q: 'Therapeutic LEVEL for ' + med.generic + '?', a: acceptNums(med.therapeuticLevel), disp: med.therapeuticLevel, key: 'therapeuticLevel' });
    if (has(med.halfLife)) cands.push({ w: 1, cat: 'pk', q: 'What is the HALF-LIFE of ' + med.generic + '?', a: acceptNums(med.halfLife), disp: med.halfLife, key: 'halfLife' });
    var mon = monitorTokens(med);
    if (mon.length) cands.push({ w: 2, cat: 'monitoring', q: 'Name one thing you MONITOR on ' + med.generic + '.', a: mon, disp: mon.slice(0, 3).join(', '), key: 'ongoingMonitoring', hint: 'A test or parameter you check.' });
    var ds = disordersOf(med);
    if (ds.length) { var d = U.pick(ds); cands.push({ w: 2, cat: 'indications', q: 'Name a condition ' + med.generic + ' is used to treat.', a: [d.name].concat((d.aka || []).slice(0, 3)), disp: d.name, key: 'canmatLineOfTherapy' }); }
    cands = cands.filter(function (c) { return catAllowed(c.cat); });
    if (!cands.length) return null;
    var c = weightedPick(cands);
    return { type: 'type', medId: med.id, subtype: c.key, category: c.cat === '_core' ? null : c.cat, stem: c.q, accept: c.a, answerDisplay: c.disp, explanation: med.generic + ' — ' + c.disp, source: srcFor(med, c.key), hint: c.hint || 'Minor wording differences are OK.', meds: [med.id], tags: [] };
  }
  function acceptNums(v) { var nums = String(v).match(/\d+(\.\d+)?/g) || []; return [v].concat(nums.length ? [nums.join(' ')] : []); }
  function monitorTokens(med) {
    var text = ((med.ongoingMonitoring || '') + ' ' + (med.baselineWorkup || []).join(' ')).toLowerCase();
    return MONITOR_TOKENS.filter(function (t) { return text.indexOf(t.toLowerCase()) >= 0; });
  }
  function weightedPick(cands) { var tot = 0; cands.forEach(function (c) { tot += c.w; }); var r = Math.random() * tot; for (var i = 0; i < cands.length; i++) { r -= cands[i].w; if (r <= 0) return cands[i]; } return cands[0]; }

  // ============ Reverse recall (clinical clue → name the drug) ============
  function reverse(med) {
    var opts = [];
    var ds = disordersOf(med);
    if (ds.length && (med.commonSE || []).length) opts.push({ cat: 'indications', kind: 'use + side effect', clue: 'treats ' + U.pick(ds).name + ', and commonly causes ' + (med.commonSE || []).slice(0, 2).join(' / ') });
    if (ds.length) opts.push({ cat: 'indications', kind: 'indication', clue: 'a go-to agent for ' + U.pick(ds).name });
    if ((med.commonSE || []).length) opts.push({ cat: 'safety', kind: 'side-effect profile', clue: (med.commonSE || []).slice(0, 3).join(', ') });
    if (has(med.classDifferentiators)) opts.push({ cat: 'mechanism', kind: 'clinical profile', clue: med.classDifferentiators });
    opts = opts.filter(function (o) { return catAllowed(o.cat); });
    if (!opts.length) return null;
    var o = U.pick(opts);
    return { type: 'reverse', medId: med.id, subtype: o.kind, category: o.cat, stem: 'Name the drug (' + o.kind + '): ' + o.clue, accept: [med.generic].concat((med.brandsCanada || []).slice(0, 2)), answerDisplay: med.generic, explanation: med.generic, source: null, meds: [med.id], tags: [] };
  }

  // ============ Cloze (clinical sentence) ============
  // The broad-coverage generator: blank a salient token from any populated field. This is how the
  // thinner categories (interactions, populations, PK, richer safety) stay drillable when selected.
  var STOP = ['because', 'without', 'patient', 'patients', 'should', 'consider', 'increase', 'increased', 'decrease', 'decreased', 'associated', 'concomitant', 'contraindicated', 'recommended', 'monitoring', 'following', 'greater', 'therapy', 'treatment', 'reported', 'especially', 'particularly'];
  function asText(v) { return Array.isArray(v) ? v.filter(Boolean).join('; ') : (v == null ? '' : String(v)); }
  function pickBlank(text) {
    var m = text.match(/CYP\s?\w+|\d+(\.\d+)?\s?(h|hours|mg|days|ng\/mL|mmol\/L|µmol\/L|%)|\b(ANC|CBC|ECG|EKG|TSH|QTc|QT|MAOIs?|SSRIs?|SNRIs?|LFTs?|CK|eGFR)\b|[A-Z][a-z]{4,}/);
    if (m) return m[0];
    var words = (text.match(/[A-Za-z][A-Za-z-]{5,}/g) || []).filter(function (w) { return STOP.indexOf(w.toLowerCase()) < 0; });
    words.sort(function (a, b) { return b.length - a.length; });
    return words[0] || null;
  }
  function cloze(med) {
    var order = [
      ['ongoingMonitoring', med.ongoingMonitoring, 'monitoring'], ['baselineWorkup', med.baselineWorkup, 'monitoring'],
      ['titration', med.titration, 'dosing'], ['frequencyTiming', med.frequencyTiming, 'dosing'], ['startingDose', med.startingDose, 'dosing'], ['maxDose', med.maxDose, 'dosing'],
      ['moa', med.moa, 'mechanism'], ['receptorProfile', med.receptorProfile, 'mechanism'],
      ['halfLife', med.halfLife, 'pk'], ['metabolism', med.metabolism, 'pk'],
      ['boxedWarning', med.boxedWarning, 'safety'], ['seriousAE', med.seriousAE, 'safety'], ['contraindications', med.contraindications, 'safety'], ['discontinuationSyndrome', med.discontinuationSyndrome, 'safety'],
      ['majorDDI', med.majorDDI, 'interactions'], ['contraindicatedCombos', med.contraindicatedCombos, 'interactions'], ['maoiWashout', med.maoiWashout, 'interactions'],
      ['pregnancy', med.pregnancy, 'populations'], ['lactation', med.lactation, 'populations'], ['geriatric', med.geriatric, 'populations'], ['cardiac', med.cardiac, 'populations'],
      ['counsellingPoints', first(med.counsellingPoints), 'pedagogical'], ['pearls', first(med.pearls), 'pedagogical'],
    ];
    var cands = shuffle(order.filter(function (o) { return has(o[1]) && catAllowed(o[2]); }));
    for (var i = 0; i < cands.length; i++) {
      var key = cands[i][0], cat = cands[i][2], src = asText(cands[i][1]);
      var blank = pickBlank(src);
      if (!blank) continue;
      return { type: 'cloze', medId: med.id, subtype: key, category: cat, stem: 'Fill the blank (' + med.generic + '):', clozeText: src.replace(blank, '_____'), accept: [blank], answerDisplay: blank, explanation: src, source: srcFor(med, key), meds: [med.id], tags: [] };
    }
    return null;
  }

  // ============ Matching (clinical features) ============
  function matching(med) {
    var featureFns = [
      { key: 'indication', label: 'main use', cat: 'indications', get: function (m) { var d = disordersOf(m); return d.length ? d[0].name : null; } },
      { key: 'class', label: 'class', cat: '_core', get: function (m) { return m.subclass || m.class; } },
      { key: 'monitoring', label: 'key monitoring', cat: 'monitoring', get: function (m) { return m.ongoingMonitoring ? String(m.ongoingMonitoring).split(/[;.]/)[0] : null; } },
      { key: 'syn', label: 'key warning', cat: 'safety', get: function (m) { return first(m.syndromes) || first(m.seriousAE); } },
    ];
    var allowed = featureFns.filter(function (f) { return catAllowed(f.cat); });
    if (!allowed.length) return null;
    var f = U.pick(allowed);
    var group = scopedPool().filter(function (m) { return has(f.get(m)); });   // every row is quizzed, so scope them all
    if (group.length < 4) return null;
    var sameClass = group.filter(function (m) { return m.class === med.class; });
    var chosen = (sameClass.length >= 4 ? U.sample(sameClass, 4) : U.sample(group, 4));
    var pairs = chosen.map(function (m) { return { l: m.generic, r: String(f.get(m)), id: m.id }; });
    var seen = {}; var uniq = pairs.filter(function (p) { if (seen[p.r]) return false; seen[p.r] = 1; return true; });
    if (uniq.length < 3) return null;
    return { type: 'matching', medId: med.id, subtype: f.label, category: f.cat === '_core' ? null : f.cat, stem: 'Match each drug to its ' + f.label + ':', pairs: uniq, explanation: uniq.map(function (p) { return p.l + ' → ' + p.r; }).join(' · '), source: null, meds: uniq.map(function (p) { return p.id; }), tags: [] };
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
    if (!catAllowed('pedagogical')) return null;
    // both halves are being tested, so both must be in scope
    var avail = CONFUSE_PAIRS.filter(function (p) { return inScope(p[0]) && inScope(p[1]); });
    if (!avail.length) return null;
    var pair = avail.filter(function (p) { return p[0] === med.id || p[1] === med.id; });
    var p = pair.length ? U.pick(pair) : U.pick(avail);
    var a = PML.deck.get(p[0]), b = PML.deck.get(p[1]);
    var aName = a ? a.generic : U.titleCase(p[0]);
    var bName = b ? b.generic : U.titleCase(p[1]);
    return { type: 'confusable', medId: (a ? a.id : med.id), subtype: 'lookalike', category: 'pedagogical', stem: p[2], options: shuffle([aName, bName]), answer: aName, explanation: (a && a.confusables && a.confusables[0]) ? a.confusables[0] : p[2], source: null, meds: [p[0], p[1]], tags: [] };
  }

  // ============ Vignette (bank + per-med) ============
  function vignette(med) {
    if (!catAllowed('vignette')) return null;
    var poolV = [];
    (window.VIGNETTES || []).forEach(function (v) { if ((v.meds || []).indexOf(med.id) >= 0 && Array.isArray(v.options) && v.options.indexOf(v.answer) >= 0 && vignetteInScope(v)) poolV.push({ stem: v.stem, options: v.options, answer: v.answer, explanation: v.explanation, source: v.source, meds: v.meds, disorder: v.disorder, tags: v.tags || [] }); });
    (med.vignettes || []).forEach(function (v) { if (v && v.options && v.answer) poolV.push({ stem: v.stem, options: v.options, answer: v.answer, explanation: v.explanation, source: v.source, meds: [med.id], disorder: null, tags: tagsFor(med, v.stem) }); });
    if (!poolV.length) return null;
    var v = U.pick(poolV);
    return { type: 'vignette', medId: med.id, subtype: v.disorder ? 'case · ' + v.disorder : 'clinical case', category: 'vignette', stem: v.stem, options: shuffle(v.options.slice()), answer: v.answer, explanation: v.explanation || '', source: v.source || srcFor(med, 'seriousAE'), meds: v.meds || [med.id], disorder: v.disorder || null, tags: v.tags && v.tags.length ? v.tags : tagsFor(med, v.stem) };
  }
  function bankVignette() {
    if (!catAllowed('vignette')) return null;
    var bank = (window.VIGNETTES || []).filter(function (v) { return Array.isArray(v.options) && v.options.indexOf(v.answer) >= 0 && vignetteInScope(v); });
    if (!bank.length) return null;
    var v = U.pick(bank);
    var med = (v.meds || []).map(function (id) { return PML.deck.get(id); }).filter(Boolean)[0];
    return { type: 'vignette', medId: med ? med.id : (v.meds || ['_'])[0], subtype: v.disorder ? 'case · ' + v.disorder : 'clinical case', category: 'vignette', stem: v.stem, options: shuffle(v.options.slice()), answer: v.answer, explanation: v.explanation || '', source: v.source || null, meds: v.meds || [], disorder: v.disorder || null, tags: v.tags || [] };
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

  PML.exercises = { TYPES: TYPES, CATEGORIES: CATEGORIES, generate: generate, GEN: GEN, bankVignette: bankVignette, setScope: setScope, setCategoryScope: setCategoryScope };
})();
