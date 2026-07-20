// validate.js — standalone deck validator. Run: node validate.js
// Reads ../data/deck.json and reports schema + provenance violations. Exit code 2 on errors.

import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateDeck, SAFETY_CRITICAL } from './schema.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DECK_JSON = join(__dirname, '..', 'data', 'deck.json');

const deck = JSON.parse(await readFile(DECK_JSON, 'utf8'));
const res = validateDeck(deck);

console.log(`Deck: ${res.totals.cards} cards | errors: ${res.totals.errors} | warnings: ${res.totals.warnings}\n`);

let flaggedFields = 0;
let groundedSC = 0, totalSC = 0;
for (const card of deck) {
  const prov = card._meta?.provenance || {};
  for (const k of SAFETY_CRITICAL) {
    const v = card[k];
    const has = Array.isArray(v) ? v.length : v != null && v !== '';
    if (!has) continue;
    totalSC++;
    const p = prov[k];
    if (p && p.origin !== 'authored') groundedSC++;
    if (p && p.verifyFlag) flaggedFields++;
  }
}

for (const [id, r] of Object.entries(res.perCard)) {
  if (!r.ok) console.log(`✗ ${id}\n    ${r.errors.join('\n    ')}`);
}

console.log(`\nSafety-critical fields populated: ${totalSC}`);
console.log(`  source-grounded (origin != authored): ${groundedSC} (${totalSC ? Math.round(100 * groundedSC / totalSC) : 0}%)`);
console.log(`  model-authored + verifyFlag'd: ${flaggedFields}`);
console.log(res.ok ? '\n✓ Deck valid.' : '\n✗ Deck has errors.');
process.exit(res.ok ? 0 : 2);
