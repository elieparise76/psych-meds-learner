/* pipeline/glossary/build.js — rebuild data/glossary.js (the clinical hover-glossary).
 *
 * Pipeline (see README.md):
 *   1. extract.js  — pulls all learner-facing prose from data/*.js into slices for subagents
 *                    (the authoring step; needs the model, produces raw/out_NN.json)
 *   2. build.js    — THIS: merges the committed raw/out_NN.json, consolidates synonyms, applies
 *                    alias hygiene, computes corpus frequency, and writes data/glossary.js.
 *
 * Deterministic: given the same raw/out_NN.json it always produces the same data/glossary.js, so
 * you can regenerate without re-running the extraction subagents. Run: `node pipeline/glossary/build.js`.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const RAW = path.join(__dirname, 'raw');

// ---------- load the deck/content globals (for corpus frequency) ----------
const window = {};
function loadGlobal(file) { try { eval(fs.readFileSync(path.join(ROOT, file), 'utf8')); } catch (e) { console.warn('skip', file, e.message); } }
['data/deck.js', 'data/lessons.js', 'data/vignettes.js', 'data/disorders.js', 'data/reviews.js', 'data/tutorial.js'].forEach(loadGlobal);

// ---------- build a lowercase corpus of prose (for frequency ranking) ----------
const chunks = [];
function push(t) { if (typeof t === 'string' && t.trim().length >= 6) chunks.push(t); }
Object.keys(window.LESSONS || {}).forEach(function (mid) {
  const l = window.LESSONS[mid]; push(l.hook);
  (l.steps || []).forEach(function (s) { push(s.title); push(s.teach); if (s.check) { push(s.check.q); push(s.check.why); (s.check.options || []).forEach(push); } });
});
(window.VIGNETTES || []).forEach(function (v) { push(v.stem); push(v.explanation); (v.options || []).forEach(push); });
Object.keys(window.REVIEWS || {}).forEach(function (k) { (window.REVIEWS[k] || []).forEach(function (q) { push(q.stem); push(q.explanation); push(q.focus); (q.options || []).forEach(push); }); });
(function walk(o) { if (o == null) return; if (typeof o === 'string') return push(o); if (Array.isArray(o)) return o.forEach(walk); if (typeof o === 'object') Object.keys(o).forEach(function (k) { if (['id', 'source', 'url', 'link', 'meds', 'aka', 'lastVerified'].indexOf(k) < 0) walk(o[k]); }); })(window.DISORDERS || []);
(window.MEDS || []).forEach(function (m) { ['tagline', 'mnemonic', 'pearls', 'confusables', 'watchOuts', 'counseling', 'highYield'].forEach(function (key) { const v = m[key]; if (Array.isArray(v)) v.forEach(function (x) { push(typeof x === 'string' ? x : x && x.text); }); else push(typeof v === 'string' ? v : v && v.text); }); });
(window.TUTORIAL || []).forEach(function (s) { push(s.text); });
const corpus = chunks.join('\n').toLowerCase();

// ---------- wiki ids (validation of wiki links) ----------
const wiki = JSON.parse(fs.readFileSync(path.join(RAW, 'wiki_entries.json'), 'utf8'));
const wikiIds = new Set(wiki.map(w => w.id));

// ---------- load + merge raw slices ----------
function norm(s) { return String(s == null ? '' : s).toLowerCase().replace(/\s+/g, ' ').trim(); }
function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
const raw = [];
fs.readdirSync(RAW).filter(f => /^out_\d+\.json$/.test(f)).sort().forEach(f => {
  try { JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8')).forEach(e => raw.push(e)); }
  catch (e) { console.warn('parse err', f, e.message); }
});

const byTerm = {};
raw.forEach(e => {
  const term = norm(e.term); const def = String(e.def || '').trim();
  if (!term || term.length < 3 || !def) return;
  const wid = e.wikiId && wikiIds.has(e.wikiId) ? e.wikiId : null;
  const t = byTerm[term] || (byTerm[term] = { term, defs: [], aliases: new Set(), wikis: {}, cats: {} });
  t.defs.push(def);
  (e.aliases || []).concat([term]).forEach(a => { const n = norm(a); if (n.length >= 3) t.aliases.add(n); });
  if (wid) t.wikis[wid] = (t.wikis[wid] || 0) + 1;
  t.cats[e.category || 'other'] = (t.cats[e.category || 'other'] || 0) + 1;
});

function freqOf(aliases) { let max = 0; aliases.forEach(a => { if (a.length < 3) return; let n = 0; const re = new RegExp('\\b' + escapeRe(a) + '\\b', 'g'); while (re.exec(corpus)) { if (++n > 9999) break; } if (n > max) max = n; }); return max; }
function pickDef(defs) { const u = Array.from(new Set(defs.filter(Boolean).map(d => d.trim()))); u.sort((a, b) => ((a.length <= 170 ? 0 : 1000) + Math.abs(a.length - 120)) - ((b.length <= 170 ? 0 : 1000) + Math.abs(b.length - 120))); return u[0]; }

const cand = Object.keys(byTerm).map(term => {
  const t = byTerm[term];
  const aliases = Array.from(t.aliases).sort((a, b) => b.length - a.length);
  return {
    term, aliases,
    def: pickDef(t.defs),
    wiki: Object.keys(t.wikis).sort((a, b) => t.wikis[b] - t.wikis[a])[0] || null,
    category: Object.keys(t.cats).sort((a, b) => t.cats[b] - t.cats[a])[0] || 'other',
    agreement: t.defs.length, freq: freqOf(aliases),
  };
});

// ---------- consolidate synonyms (union-find on strong alias overlap) ----------
const n = cand.length, parent = cand.map((_, i) => i);
const find = x => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
const aliasSets = cand.map(c => new Set(c.aliases));
const jac = (a, b) => { let i = 0; a.forEach(x => { if (b.has(x)) i++; }); return i / (a.size + b.size - i); };
for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
  if (cand[i].wiki && cand[j].wiki && cand[i].wiki !== cand[j].wiki) continue;
  if (jac(aliasSets[i], aliasSets[j]) >= 0.6) parent[find(i)] = find(j);
}
const groups = {};
for (let i = 0; i < n; i++) (groups[find(i)] = groups[find(i)] || []).push(cand[i]);

// ---------- alias hygiene ----------
// GENERIC = words that must never be a standalone alias (common English → would underline half the
// app). Includes clinical abbreviations that collide with everyday words (aims/cows/add/ten/load).
const GENERIC = new Set(('acute active agent agents effect effects drug drugs dose doses patient patients oral level levels week weeks avoid approved risk mood sleep weight daily first-line first line second-line onset chronic severe mild common rare early late high low start started starting stop stopping taper switch dosing response symptom symptoms sign signs treatment treatments therapy option options class classes once twice control good poor better best short long term terms use used using cause causes caused work works working take taken taking give given need needs make made line lines profile profiles range ranges add load boxed loads adds combativeness aims cows ten dress atypical scheduled ceiling loading').split(/\s+/));
const ABBR_OK = new Set(['eps', 'nms', 'ssri', 'snri', 'tca', 'tcas', 'maoi', 'rima', 'ocd', 'ptsd', 'adhd', 'gad', 'mdd', 'aud', 'oud', 'tud', 'td', 'qtc', 'dts', 'oat', 'sga', 'fga', 'sjs', 'dka', 'ecg', 'ekg', 'cns', 'bph', 'pdp', 'dora', 'ndri', 'nassa', 'ppd', 'bpsd', 'siadh', 'gaba', 'nmda', 'vmat2']);
function cleanAliases(term, aliases) {
  const seen = new Set(), out = [];
  aliases.forEach(a => { a = norm(a); if (!a || seen.has(a) || a.length < 3) return; if (a.length < 4 && !ABBR_OK.has(a)) return; if (GENERIC.has(a)) return; seen.add(a); out.push(a); });
  const tn = norm(term); if (!seen.has(tn) && !GENERIC.has(tn)) out.push(tn);
  return out.sort((a, b) => b.length - a.length);
}

let final = Object.keys(groups).map(k => {
  const m = groups[k]; m.sort((a, b) => (a.term.length - b.term.length) || (b.agreement - a.agreement));
  const term = m[0].term;
  const wikiVotes = {}, catVotes = {};
  m.forEach(x => { if (x.wiki) wikiVotes[x.wiki] = (wikiVotes[x.wiki] || 0) + x.agreement; catVotes[x.category] = (catVotes[x.category] || 0) + x.agreement; });
  return {
    term,
    aliases: cleanAliases(term, m.reduce((a, x) => a.concat(x.aliases), [])),
    def: pickDef(m.reduce((a, x) => a.concat([x.def]), [])),
    wiki: Object.keys(wikiVotes).sort((a, b) => wikiVotes[b] - wikiVotes[a])[0] || null,
    category: Object.keys(catVotes).sort((a, b) => catVotes[b] - catVotes[a])[0] || 'other',
    freq: Math.max.apply(null, m.map(x => x.freq)),
  };
}).filter(e => e.def && (e.freq >= 2 || e.wiki));
final.sort((a, b) => (b.freq - a.freq) || a.term.localeCompare(b.term));

// ---------- optional manual overrides (from clinical QA) ----------
let overrides = {};
const ovPath = path.join(__dirname, 'overrides.json');
if (fs.existsSync(ovPath)) { try { overrides = JSON.parse(fs.readFileSync(ovPath, 'utf8')); } catch (e) { console.warn('overrides parse err', e.message); } }
final = final.filter(e => overrides[e.term] !== 'DROP').map(e => {
  const ov = overrides[e.term];
  if (ov && typeof ov === 'object') { if (ov.def) e.def = ov.def; if (ov.dropAliases) e.aliases = e.aliases.filter(a => ov.dropAliases.indexOf(a) < 0); if (ov.wiki !== undefined) e.wiki = ov.wiki; }
  return e;
});

// ---------- write ----------
const out = { version: 1, generated: new Date().toISOString().slice(0, 10), terms: final.map(e => ({ term: e.term, aliases: e.aliases, def: e.def, wiki: e.wiki, category: e.category })) };
const banner = '/* data/glossary.js — GENERATED by pipeline/glossary/build.js. Do not edit by hand.\n' +
  ' * The clinical hover-glossary: window.GLOSSARY = { version, terms:[{term, aliases[], def, wiki, category}] }.\n' +
  ' * Terms are flagged/underlined in prose across the app; wiki-linked terms offer "learn more". */\n';
fs.writeFileSync(path.join(ROOT, 'data/glossary.js'), banner + 'window.GLOSSARY = ' + JSON.stringify(out, null, 0) + ';\n');

console.log('raw entries:', raw.length, '| unique concepts:', final.length, '| wiki-linked:', final.filter(e => e.wiki).length);
console.log('category spread:', JSON.stringify(final.reduce((a, e) => { a[e.category] = (a[e.category] || 0) + 1; return a; }, {})));
console.log('wrote data/glossary.js (' + fs.statSync(path.join(ROOT, 'data/glossary.js')).size + ' bytes)');
