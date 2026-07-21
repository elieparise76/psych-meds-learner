#!/usr/bin/env node
/* coverage.js — survey the vignette bank before fanning out.
 * Prints: current totals, per-disorder counts (thinnest first, so gaps are obvious),
 * and the source files with their id prefixes (so a new file picks a fresh, non-colliding one).
 * Run from anywhere:  node .claude/skills/generate-vignettes/scripts/coverage.js  */
const fs = require('fs');
const path = require('path');

function repoRoot(start) {
  let d = start;
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(d, 'data', 'vignettes.js'))) return d;
    const up = path.dirname(d);
    if (up === d) break;
    d = up;
  }
  throw new Error('Could not find repo root (no data/vignettes.js above ' + start + ')');
}

const ROOT = repoRoot(__dirname);

global.window = {};
require(path.join(ROOT, 'data', 'vignettes.js'));
const V = global.window.VIGNETTES || [];
const deck = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'deck.json'), 'utf8'));

const byDis = {};
V.forEach((v) => { const k = v.disorder || '(none)'; byDis[k] = (byDis[k] || 0) + 1; });
const sorted = Object.entries(byDis).sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));

console.log(`BUILT BANK : ${V.length} vignettes across ${Object.keys(byDis).length} disorders`);
console.log(`DECK       : ${deck.length} medications\n`);

console.log('COVERAGE (thinnest first — the best targets for new material):');
sorted.forEach(([d, n]) => console.log(`  ${String(n).padStart(3)}  ${d}`));

const vdir = path.join(ROOT, 'pipeline', 'vignettes');
const files = fs.readdirSync(vdir).filter((f) => f.endsWith('.js') && !f.startsWith('_'));
const allPrefixes = new Set();
console.log('\nSOURCE FILES (pipeline/vignettes/):');
files.forEach((f) => {
  const txt = fs.readFileSync(path.join(vdir, f), 'utf8');
  const ids = [...txt.matchAll(/id:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const prefixes = [...new Set(ids.map((i) => i.split('_').slice(0, 2).join('_')))];
  prefixes.forEach((p) => allPrefixes.add(p));
  console.log(`  ${f.padEnd(36)} ${String(ids.length).padStart(3)} entries   ${prefixes.join(', ')}`);
});

console.log(`\nID PREFIXES IN USE: ${[...allPrefixes].sort().join(', ')}`);
console.log('Give each new file a fresh prefix — build-content.js silently drops duplicate ids.');
