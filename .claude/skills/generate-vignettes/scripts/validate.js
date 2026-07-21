#!/usr/bin/env node
/* validate.js — check every vignette SOURCE file before building.
 *
 * build-content.js silently DROPS malformed entries and duplicate ids, so a subagent can "succeed"
 * while its work quietly disappears. This fails loudly instead, naming the offending file + id.
 *
 * Run:  node .claude/skills/generate-vignettes/scripts/validate.js
 * Exit: 0 = all good, 1 = problems found (listed).  */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

function repoRoot(start) {
  let d = start;
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(d, 'data', 'deck.json'))) return d;
    const up = path.dirname(d);
    if (up === d) break;
    d = up;
  }
  throw new Error('Could not find repo root (no data/deck.json above ' + start + ')');
}

(async () => {
  const ROOT = repoRoot(__dirname);
  const deckIds = new Set(JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'deck.json'), 'utf8')).map((c) => c.id));
  const vdir = path.join(ROOT, 'pipeline', 'vignettes');
  const files = fs.readdirSync(vdir).filter((f) => f.endsWith('.js') && !f.startsWith('_')).sort();

  const problems = [];
  const seenIds = new Map();   // id -> file
  let total = 0;

  for (const f of files) {
    let mod;
    try {
      mod = await import(pathToFileURL(path.join(vdir, f)).href);
    } catch (e) {
      problems.push(`${f}: DOES NOT IMPORT — ${e.message.split('\n')[0]}`);
      continue;
    }
    const list = mod.default;
    if (!Array.isArray(list)) { problems.push(`${f}: default export is not an array`); continue; }
    total += list.length;

    list.forEach((v, i) => {
      const where = `${f}[${i}]${v && v.id ? ' id=' + v.id : ''}`;
      if (!v || typeof v !== 'object') { problems.push(`${where}: not an object`); return; }
      if (!v.id) problems.push(`${where}: missing id`);
      else if (seenIds.has(v.id)) problems.push(`${where}: DUPLICATE id (also in ${seenIds.get(v.id)}) — would be dropped`);
      else seenIds.set(v.id, f);

      if (!Array.isArray(v.options)) problems.push(`${where}: options is not an array`);
      else {
        if (v.options.length !== 4) problems.push(`${where}: ${v.options.length} options (contract requires exactly 4)`);
        if (v.options.indexOf(v.answer) < 0) problems.push(`${where}: answer "${v.answer}" is not verbatim in options — would be dropped`);
        if (new Set(v.options).size !== v.options.length) problems.push(`${where}: duplicate options`);
      }
      if (!v.stem || String(v.stem).length < 40) problems.push(`${where}: stem missing or suspiciously short`);
      if (!v.explanation) problems.push(`${where}: missing explanation`);
      if (!v.disorder) problems.push(`${where}: missing disorder (needed for the wiki interlink)`);
      if (!Array.isArray(v.meds) || v.meds.length === 0) problems.push(`${where}: meds must be a non-empty array of molecule ids`);
      else v.meds.filter((id) => !deckIds.has(id)).forEach((id) => problems.push(`${where}: med id "${id}" is not in the deck`));
    });
  }

  console.log(`Checked ${files.length} source files, ${total} vignettes, ${seenIds.size} unique ids.`);
  if (!problems.length) { console.log('✅ All valid — safe to run: cd pipeline && node build-content.js'); process.exit(0); }
  console.log(`\n❌ ${problems.length} problem(s):`);
  problems.forEach((p) => console.log('  - ' + p));
  console.log('\nFix these before building, or build-content.js will drop the affected entries.');
  process.exit(1);
})();
