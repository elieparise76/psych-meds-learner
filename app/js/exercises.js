/* exercises.js — generate Practice exercises from the schema. Every med can drive every
 * exercise type. Each generator returns a normalized descriptor consumed by practice.js, or
 * null if the med lacks the needed field. */
(function () {
  'use strict';
  var PML = window.PML;
  var U = PML.util;

  var TYPES = ['mcq', 'type', 'matching', 'build', 'reverse', 'cloze', 'confusable', 'vignette'];

  function first(v) { return Array.isArray(v) ? v[0] : v; }
  function has(v) { return v != null && v !== '' && !(Array.isArray(v) && v.length === 0); }
  function pool() { return PML.deck.all(); }

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
    var others = pool().filter(function (m) { return m.id !== med.id && (!filterFn || filterFn(m)); });
    return U.sample(others, n);
  }
  function shuffle(a) { return U.sample(a, a.length); }
  function labelOf(m) { return m.generic; }

  function srcFor(med, key) {
    var p = med._meta && med._meta.provenance && med._meta.provenance[key];
    if (p) return { name: ({ dpd: 'Health Canada DPD', openfda: 'openFDA/DailyMed', canmat: 'CANMAT', faers: 'FAERS', monograph: 'Monograph' }[p.origin] || 'authored'), origin: p.origin, url: p.url || null };
    return null;
  }

  // ---------- MCQ: identify the drug by its mechanism ----------
  function mcqMoa(med) {
    if (!has(med.moa)) return null;
    var ds = distractors(med, 3, function (m) { return m.class === med.class; });
    if (ds.length < 3) ds = distractors(med, 3);
    if (ds.length < 3) return null;
    var opts = shuffle([med].concat(ds)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'moa',
      stem: 'Which agent has this mechanism / profile: “' + med.moa + '”',
      options: opts, answer: med.generic,
      explanation: med.generic + (med.classDifferentiators ? ' — ' + med.classDifferentiators : ''),
      source: srcFor(med, 'moa'), tags: tagsFor(med),
    };
  }

  // ---------- MCQ: which drug is most associated with a syndrome / serious AE ----------
  function mcqSyndrome(med) {
    var items = (med.syndromes || []).concat(med.seriousAE || []);
    items = items.filter(function (x) { return x && x.length < 60; });
    if (!items.length) return null;
    var feature = U.pick(items);
    var fnorm = feature.toLowerCase().split(/[ /(]/)[0];
    var ds = distractors(med, 3, function (m) {
      var mine = (m.syndromes || []).concat(m.seriousAE || []).join(' ').toLowerCase();
      return mine.indexOf(fnorm) < 0;
    });
    if (ds.length < 3) return null;
    var opts = shuffle([med].concat(ds)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'syndrome',
      stem: 'Which agent is MOST associated with: ' + feature + '?',
      options: opts, answer: med.generic,
      explanation: med.generic + ' — ' + feature + '.' + (med.pearls && med.pearls[0] ? ' ' + med.pearls[0] : ''),
      source: srcFor(med, 'seriousAE') || srcFor(med, 'syndromes'), tags: tagsFor(med, feature),
    };
  }

  // ---------- MCQ: CANMAT line of therapy ----------
  function mcqCanmat(med) {
    if (!has(med.canmatLineOfTherapy)) return null;
    var line = first(med.canmatLineOfTherapy);
    var ds = distractors(med, 3, function (m) { return m.class === med.class; });
    if (ds.length < 3) return null;
    var opts = shuffle([med].concat(ds)).map(labelOf);
    return {
      type: 'mcq', medId: med.id, subtype: 'canmat',
      stem: 'Per CANMAT, which agent fits: “' + line + '”?',
      options: opts, answer: med.generic,
      explanation: med.generic + ' — ' + line, source: srcFor(med, 'canmatLineOfTherapy'), tags: [],
    };
  }

  // ---------- Type-the-answer ----------
  function typeAnswer(med) {
    var candidates = [];
    if (has(med.startingDose)) candidates.push({ q: 'What is the usual STARTING dose of ' + med.generic + '?', a: med.startingDose, key: 'startingDose' });
    if (has(med.maxDose)) candidates.push({ q: 'What is the MAX dose of ' + med.generic + '?', a: med.maxDose, key: 'maxDose' });
    if (has(med.halfLife)) candidates.push({ q: 'Approximate HALF-LIFE of ' + med.generic + '?', a: med.halfLife, key: 'halfLife' });
    if (has(med.therapeuticLevel)) candidates.push({ q: 'Therapeutic LEVEL for ' + med.generic + '?', a: med.therapeuticLevel, key: 'therapeuticLevel' });
    if (!candidates.length) return null;
    var c = U.pick(candidates);
    var nums = String(c.a).match(/\d+(\.\d+)?/g) || [];
    var accept = [c.a].concat(nums.length ? [nums.join(' ')] : []);
    return {
      type: 'type', medId: med.id, subtype: c.key,
      stem: c.q, accept: accept, answerDisplay: c.a,
      explanation: med.generic + ' — ' + c.a, source: srcFor(med, c.key), tags: [],
      hint: 'Numbers and units; minor wording differences are OK.',
    };
  }

  // ---------- Reverse recall: given a feature, name the drug ----------
  function reverse(med) {
    var feature = null, kind = null;
    if (has(med.receptorProfile)) { feature = med.receptorProfile; kind = 'receptor profile'; }
    else if (has(med.commonSE)) { feature = (med.commonSE || []).slice(0, 3).join(', '); kind = 'side-effect trio'; }
    else if (has(med.moa)) { feature = med.moa; kind = 'mechanism'; }
    if (!feature) return null;
    return {
      type: 'reverse', medId: med.id, subtype: kind,
      stem: 'Name the drug (' + kind + '): ' + feature,
      accept: [med.generic].concat((med.brandsCanada || []).slice(0, 2)),
      answerDisplay: med.generic, explanation: med.generic, source: srcFor(med, 'moa'), tags: tagsFor(med, feature),
    };
  }

  // ---------- Cloze: blank a term ----------
  function cloze(med) {
    var src = null, key = null;
    if (has(med.metabolism)) { src = med.metabolism; key = 'metabolism'; }
    else if (has(med.halfLife)) { src = med.halfLife; key = 'halfLife'; }
    else if (has(med.moa)) { src = med.moa; key = 'moa'; }
    if (!src) return null;
    var m = src.match(/CYP\s?\w+|\d+(\.\d+)?\s?(h|hours|mg|days|ng\/mL|mmol\/L)|[A-Z][a-z]{4,}/);
    if (!m) return null;
    var blank = m[0];
    var text = src.replace(blank, '_____');
    return {
      type: 'cloze', medId: med.id, subtype: key,
      stem: 'Fill the blank (' + med.generic + '):', clozeText: text,
      accept: [blank], answerDisplay: blank, explanation: src, source: srcFor(med, key), tags: [],
    };
  }

  // ---------- Matching: 4 drugs ↔ a feature ----------
  function matching(med) {
    var featureFns = [
      { key: 'class', label: 'class', get: function (m) { return m.subclass || m.class; } },
      { key: 'moa', label: 'mechanism', get: function (m) { return m.moa; } },
      { key: 'syn', label: 'key syndrome / warning', get: function (m) { return first(m.syndromes) || first(m.seriousAE); } },
    ];
    var f = U.pick(featureFns);
    var group = pool().filter(function (m) { return has(f.get(m)); });
    if (group.length < 4) return null;
    var sameClass = group.filter(function (m) { return m.class === med.class; });
    var chosen = (sameClass.length >= 4 ? U.sample(sameClass, 4) : U.sample(group, 4));
    var pairs = chosen.map(function (m) { return { l: m.generic, r: String(f.get(m)), id: m.id }; });
    var seen = {}; var uniq = pairs.filter(function (p) { if (seen[p.r]) return false; seen[p.r] = 1; return true; });
    if (uniq.length < 3) return null;
    return {
      type: 'matching', medId: med.id, subtype: f.label,
      stem: 'Match each drug to its ' + f.label + ':', pairs: uniq,
      explanation: uniq.map(function (p) { return p.l + ' → ' + p.r; }).join(' · '),
      source: null, tags: [],
    };
  }

  // ---------- Tap-to-build: assemble a sentence from tiles ----------
  function build(med) {
    var src = null, key = null;
    if (has(med.titration)) { src = med.titration; key = 'titration'; }
    else if (has(med.startStopCrossTaper)) { src = med.startStopCrossTaper; key = 'taper'; }
    else if (has(med.maoiWashout)) { src = med.maoiWashout; key = 'MAOI washout'; }
    else if (has(med.onsetOfEffect)) { src = med.onsetOfEffect; key = 'onset'; }
    if (!src) return null;
    var words = String(src).replace(/\s+/g, ' ').trim().split(' ');
    if (words.length < 4 || words.length > 16) return null;
    return {
      type: 'build', medId: med.id, subtype: key,
      stem: 'Build the ' + key + ' for ' + med.generic + ':',
      tiles: shuffle(words.slice()), answerSeq: words, answerDisplay: src,
      explanation: med.generic + ' — ' + src, source: srcFor(med, key), tags: [],
    };
  }

  // ---------- Confusables: forced choice ----------
  var CONFUSE_PAIRS = [
    ['clozapine', 'clonazepam', 'Which is the antipsychotic (vs the benzodiazepine)?'],
    ['bupropion', 'buspirone', 'Which is the NDRI antidepressant (vs the 5-HT1A anxiolytic)?'],
    ['quetiapine', 'olanzapine', 'Which is the antipsychotic with the HIGHEST metabolic/weight risk?'],
    ['naltrexone', 'naloxone', 'Which is the LONG-acting maintenance opioid antagonist?'],
    ['methadone', 'methylphenidate', 'Which is the full opioid agonist used in OAT?'],
    ['fluvoxamine', 'fluoxetine', 'Which SSRI is the potent CYP1A2 inhibitor (raises clozapine/theophylline)?'],
    ['hydroxyzine', 'hydralazine', 'Which is the antihistamine anxiolytic?'],
    ['clomipramine', 'clonidine', 'Which is the most serotonergic TCA (used for OCD)?'],
  ];
  function confusable(med) {
    var pair = CONFUSE_PAIRS.filter(function (p) { return p[0] === med.id || p[1] === med.id; });
    var p = pair.length ? U.pick(pair) : U.pick(CONFUSE_PAIRS);
    var a = PML.deck.get(p[0]), b = PML.deck.get(p[1]);
    var aName = a ? a.generic : U.titleCase(p[0]);
    var bName = b ? b.generic : U.titleCase(p[1]);
    var opts = shuffle([aName, bName]);
    var explain = (a && a.confusables && a.confusables[0]) ? a.confusables[0] : p[2];
    return {
      type: 'confusable', medId: (a ? a.id : med.id), subtype: 'lookalike',
      stem: p[2], options: opts, answer: aName,
      explanation: explain, source: null, tags: [],
    };
  }

  // ---------- Vignette (board-style) ----------
  // Draws from the cross-med bank (window.VIGNETTES) referencing this med, plus the med's own
  // per-med vignettes. Carries `meds` + `disorder` for wiki interlinking.
  function vignette(med) {
    var pool = [];
    (window.VIGNETTES || []).forEach(function (v) {
      if ((v.meds || []).indexOf(med.id) >= 0 && Array.isArray(v.options) && v.options.indexOf(v.answer) >= 0) {
        pool.push({ stem: v.stem, options: v.options, answer: v.answer, explanation: v.explanation, source: v.source, meds: v.meds, disorder: v.disorder, tags: v.tags || [] });
      }
    });
    (med.vignettes || []).forEach(function (v) {
      if (v && v.options && v.answer) pool.push({ stem: v.stem, options: v.options, answer: v.answer, explanation: v.explanation, source: v.source, meds: [med.id], disorder: null, tags: tagsFor(med, (v.testedFact || '') + ' ' + (v.stem || '')) });
    });
    if (!pool.length) return null;
    var v = U.pick(pool);
    return {
      type: 'vignette', medId: med.id, subtype: v.disorder ? 'board · ' + v.disorder : 'board',
      stem: v.stem, options: shuffle(v.options.slice()), answer: v.answer,
      explanation: v.explanation || '', source: v.source || srcFor(med, 'seriousAE'),
      meds: v.meds || [med.id], disorder: v.disorder || null, tags: v.tags && v.tags.length ? v.tags : tagsFor(med, v.stem),
    };
  }

  // A standalone bank vignette not tied to the adaptive med pick (adds variety to sessions).
  function bankVignette() {
    var bank = (window.VIGNETTES || []).filter(function (v) { return Array.isArray(v.options) && v.options.indexOf(v.answer) >= 0; });
    if (!bank.length) return null;
    var v = U.pick(bank);
    var med = (v.meds || []).map(function (id) { return PML.deck.get(id); }).filter(Boolean)[0];
    return {
      type: 'vignette', medId: med ? med.id : (v.meds || ['_'])[0], subtype: v.disorder ? 'board · ' + v.disorder : 'board',
      stem: v.stem, options: shuffle(v.options.slice()), answer: v.answer,
      explanation: v.explanation || '', source: v.source || null, meds: v.meds || [], disorder: v.disorder || null, tags: v.tags || [],
    };
  }

  var GEN = {
    mcq: function (m) { return mcqSyndrome(m) || mcqMoa(m) || mcqCanmat(m); },
    type: typeAnswer, reverse: reverse, cloze: cloze, matching: matching,
    build: build, confusable: confusable, vignette: vignette,
  };

  // Generate a specific type for a med, falling back through other types if the field is absent.
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
