// smoke.js — exercise every source client on a couple of molecules and print a summary.
// Proves the pipeline scaffold works against the live APIs. Run: node smoke.js [--refresh]

import { lookupMolecule } from './sources/dpd.js';
import { lookupLabel } from './sources/openfda-label.js';
import { lookupFaers } from './sources/openfda-faers.js';
import { lookupDailyMed } from './sources/dailymed.js';
import { lineOfTherapy, citationFor } from './sources/canmat.js';

const SPECS = [
  { id: 'sertraline', genericName: 'sertraline', searchTerms: ['sertraline'], aiCountMax: 1 },
  { id: 'clozapine', genericName: 'clozapine', searchTerms: ['clozapine'], aiCountMax: 1 },
  { id: 'lithium', genericName: 'lithium carbonate', searchTerms: ['lithium'], aiCountMax: 1,
    dailymedName: 'lithium carbonate', faersName: 'lithium' },
];

function line(s) { console.log(s); }

for (const spec of SPECS) {
  line('\n============================================================');
  line(`  ${spec.id.toUpperCase()}`);
  line('============================================================');

  const dpd = await lookupMolecule(spec);
  line('\n[DPD]');
  line(`  found: ${dpd.found}  products: ${dpd.productCount}`);
  if (dpd.found) {
    line(`  brands: ${dpd.brandsCanada.join(', ')}`);
    line(`  DINs (sample): ${dpd.din.join(', ')}`);
    line(`  strengths: ${dpd.strengths.join(', ')}`);
    line(`  forms: ${dpd.forms.join(', ')} | routes: ${dpd.routes.join(', ')}`);
    line(`  schedule: ${dpd.schedules.join(', ')} | status: ${dpd.statuses.join(', ')}`);
    line(`  marketed in Canada: ${dpd.marketed}`);
  }

  const label = await lookupLabel(spec);
  line('\n[openFDA label]');
  line(`  found: ${label.found}  boxed warning: ${label.hasBoxedWarning}`);
  if (label.found) {
    line(`  sections: ${Object.keys(label.sections).join(', ')}`);
    line(`  pharm_class_moa: ${(label.openfda.pharm_class_moa || []).join('; ') || '—'}`);
    if (label.sections.boxedWarning) {
      line(`  boxed warning (excerpt): ${label.sections.boxedWarning.slice(0, 140).replace(/\n/g, ' ')}…`);
    }
    line(`  citation: ${label.source.url}`);
  }

  const faers = await lookupFaers(spec, 6);
  line('\n[openFDA FAERS]');
  line(`  found: ${faers.found}`);
  if (faers.found) {
    line(`  top reported: ${faers.topReactions.map((r) => `${r.term}(${r.count})`).join(', ')}`);
  }

  const dm = await lookupDailyMed(spec, 3);
  line('\n[DailyMed]');
  line(`  found: ${dm.found}  total SPLs: ${dm.total ?? 0}`);
  if (dm.found) line(`  link: ${dm.spls[0].url}`);

  const lot = lineOfTherapy(spec.id);
  line('\n[CANMAT]');
  if (lot.length) {
    for (const e of lot) line(`  ${e.indication}: ${e.line}  [${e.source?.name || ''}]`);
  } else {
    line('  (no curated line-of-therapy seed for this molecule)');
  }
}

line('\n============================================================');
line('  CANMAT citation registry sanity check');
line('============================================================');
for (const key of ['mdd2016', 'bipolar2018', 'perinatal2024']) {
  const c = citationFor(key);
  line(`  ${key}: ${c.citation.slice(0, 70)}…`);
}
line('\nSmoke test complete.');
