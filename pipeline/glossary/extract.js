/* Extract all learner-facing prose from the content files into (a) a full corpus for frequency
 * ranking and (b) balanced plain-text slices for parallel subagent term-extraction. Runs in Node
 * with a fake `window` so the `window.X = {...}` data files can be eval'd. Zero model tokens. */
const fs = require('fs');
const path = require('path');
const ROOT = '/Users/elieparise/Documents/Projets/Alex - Psych meds';
const OUT = '/private/tmp/claude-501/-Users-elieparise-Documents-Projets-Alex---Psych-meds/7feca9f4-d197-449f-aa8f-22f2a4d256f4/scratchpad';

const window = {};
function loadGlobal(file) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  // strip leading // comment lines are fine; eval assigns to our `window`
  eval(src);
}
['data/deck.js', 'data/lessons.js', 'data/vignettes.js', 'data/disorders.js', 'data/reviews.js', 'data/tutorial.js'].forEach(loadGlobal);

const sentences = []; // {text, src}
function push(text, src) {
  if (!text || typeof text !== 'string') return;
  const t = text.trim();
  if (t.length < 8) return;
  sentences.push({ text: t, src });
}

// ---- LESSONS: hook + steps.teach + check.q + check.why + options ----
Object.keys(window.LESSONS || {}).forEach(function (mid) {
  const l = window.LESSONS[mid];
  push(l.hook, 'lesson');
  (l.steps || []).forEach(function (s) {
    push(s.title, 'lesson'); push(s.teach, 'lesson');
    if (s.check) { push(s.check.q, 'lesson'); push(s.check.why, 'lesson'); (s.check.options || []).forEach(function (o) { push(o, 'lesson'); }); }
  });
});

// ---- VIGNETTES: stem + explanation + options ----
(window.VIGNETTES || []).forEach(function (v) {
  push(v.stem, 'vignette'); push(v.explanation, 'vignette');
  (v.options || []).forEach(function (o) { push(o, 'vignette'); });
});

// ---- REVIEWS: stem + explanation + focus + options ----
Object.keys(window.REVIEWS || {}).forEach(function (k) {
  (window.REVIEWS[k] || []).forEach(function (q) {
    push(q.stem, 'review'); push(q.explanation, 'review'); push(q.focus, 'review');
    (q.options || []).forEach(function (o) { push(o, 'review'); });
  });
});

// ---- DISORDERS: walk all string fields of prose ----
function walk(obj, src) {
  if (obj == null) return;
  if (typeof obj === 'string') { push(obj, src); return; }
  if (Array.isArray(obj)) { obj.forEach(function (x) { walk(x, src); }); return; }
  if (typeof obj === 'object') {
    Object.keys(obj).forEach(function (k) {
      if (k === 'id' || k === 'source' || k === 'url' || k === 'link' || k === 'meds' || k === 'aka' || k === 'lastVerified') return;
      walk(obj[k], src);
    });
  }
}
(window.DISORDERS || []).forEach(function (d) { walk(d, 'disorder'); });

// ---- DECK: the model-authored teaching fields (pearls/confusables/mnemonic/vignette-ish) ----
(window.MEDS || []).forEach(function (m) {
  ['tagline', 'mnemonic', 'pearls', 'confusables', 'watchOuts', 'counseling', 'highYield'].forEach(function (key) {
    if (m[key] == null) return;
    if (Array.isArray(m[key])) m[key].forEach(function (x) { push(typeof x === 'string' ? x : (x && x.text), 'deck'); });
    else push(typeof m[key] === 'string' ? m[key] : (m[key] && m[key].text), 'deck');
  });
});

// ---- TUTORIAL ----
(window.TUTORIAL || []).forEach(function (s) { push(s.text, 'tutorial'); });

// de-dup identical sentences
const seen = new Set();
const uniq = sentences.filter(function (s) { const k = s.text.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; });

// ---- full corpus text ----
const corpus = uniq.map(function (s) { return s.text; }).join('\n');
fs.writeFileSync(path.join(OUT, 'corpus_full.txt'), corpus);

// ---- frequency table (unigram/bigram/trigram over lowercased alpha tokens) ----
const STOP = new Set(('the a an and or of to in is are for with on at by from as it its this that these those be been being was were will can may might should would could not no if then than so but which who whom whose what when where why how all any each more most some such only other into out up down over under again further once here there when both few many much own same too very just also does do did has have had having get got make made use used using than then them they their you your our we us i me my he she his her him they’re it’s a via per vs etc eg ie e.g i.e about after before during while because between within without across around above below off out about often usually may can').split(/\s+/));
function tokenize(t) {
  return t.toLowerCase().replace(/[^a-z0-9\- ]+/g, ' ').split(/\s+/).filter(Boolean);
}
const freq = {}; // gram -> count
function bump(g) { freq[g] = (freq[g] || 0) + 1; }
uniq.forEach(function (s) {
  const toks = tokenize(s.text);
  for (let i = 0; i < toks.length; i++) {
    const w = toks[i];
    if (w.length >= 4 && !STOP.has(w) && !/^\d+$/.test(w)) bump(w);
    if (i + 1 < toks.length) {
      const b = w + ' ' + toks[i + 1];
      if (!STOP.has(toks[i + 1])) bump(b);
    }
    if (i + 2 < toks.length) bump(w + ' ' + toks[i + 1] + ' ' + toks[i + 2]);
  }
});
const ranked = Object.keys(freq).map(function (g) { return [g, freq[g]]; })
  .filter(function (x) { return x[1] >= 3; })
  .sort(function (a, b) { return b[1] - a[1]; });
fs.writeFileSync(path.join(OUT, 'freq.json'), JSON.stringify(ranked, null, 0));

// ---- balanced slices for subagents (by sentence, round-robin so each slice is varied) ----
const N = 8;
const slices = Array.from({ length: N }, function () { return []; });
uniq.forEach(function (s, i) { slices[i % N].push(s.text); });
slices.forEach(function (arr, i) {
  fs.writeFileSync(path.join(OUT, 'slice_' + String(i + 1).padStart(2, '0') + '.txt'), arr.join('\n'));
});

console.log('sentences (unique):', uniq.length);
console.log('corpus chars:', corpus.length, '(~' + Math.round(corpus.length / 4000) + 'k tokens)');
console.log('freq candidates (>=3):', ranked.length);
console.log('slices:', N, 'avg chars/slice ~', Math.round(corpus.length / N));
console.log('top 40 grams:');
ranked.slice(0, 40).forEach(function (r) { console.log('  ' + r[1] + '\t' + r[0]); });
