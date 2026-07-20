// canmat.js — CANMAT guideline references + line-of-therapy positioning.
//
// CANMAT guidelines are copyrighted journal publications, NOT an API. We therefore record the
// CITATION for each guideline and attach line-of-therapy *positioning facts* (e.g.
// "escitalopram — first-line for MDD, CANMAT 2016/2023") with that citation. The guideline
// text itself is never copied.
//
// Provenance note: line-of-therapy entries are "synthesised-but-cited" — recalled from the
// named guideline and attributed, NOT extracted from source text like the safety fields.
// They carry provenance tag `canmat-synthesised` so the app can flag them for verification.

// --- Guideline citation registry (verified references) ---
export const CANMAT_GUIDELINES = {
  mdd2016: {
    key: 'mdd2016',
    label: 'CANMAT 2016 MDD Guidelines',
    citation: 'Lam RW, McIntosh D, Wang J, et al. CANMAT 2016 Clinical Guidelines for the Management of Adults with Major Depressive Disorder. Can J Psychiatry. 2016;61(9):510-523.',
    doi: '10.1177/0706743716659416',
    url: 'https://journals.sagepub.com/doi/10.1177/0706743716659416',
  },
  mdd2023: {
    key: 'mdd2023',
    label: 'CANMAT 2023 MDD Update',
    citation: 'Lam RW, Kennedy SH, et al. CANMAT 2023 Update on Clinical Guidelines for Management of Major Depressive Disorder in Adults. Can J Psychiatry. 2024.',
    pmid: '38711351',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11351064/',
  },
  bipolar2018: {
    key: 'bipolar2018',
    label: 'CANMAT/ISBD 2018 Bipolar Guidelines',
    citation: 'Yatham LN, Kennedy SH, Parikh SV, et al. CANMAT and ISBD 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord. 2018;20(2):97-170.',
    doi: '10.1111/bdi.12609',
    url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/bdi.12609',
  },
  bipolar2023: {
    key: 'bipolar2023',
    label: 'CANMAT/ISBD 2023 Bipolar Evidence Update',
    citation: 'Yatham LN, et al. The CANMAT and ISBD Guidelines for the Treatment of Bipolar Disorder: Summary and a 2023 Update of Evidence. Focus (Am Psychiatr Publ). 2023.',
    doi: '10.1176/appi.focus.20230009',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11058959/',
  },
  anxiety2014: {
    key: 'anxiety2014',
    label: 'Canadian Anxiety Guidelines 2014',
    citation: 'Katzman MA, Bleau P, Blier P, et al. Canadian clinical practice guidelines for the management of anxiety, posttraumatic stress and obsessive-compulsive disorders. BMC Psychiatry. 2014;14(Suppl 1):S1.',
    doi: '10.1186/1471-244X-14-S1-S1',
    url: 'https://bmcpsychiatry.biomedcentral.com/articles/10.1186/1471-244X-14-S1-S1',
  },
  perinatal2024: {
    key: 'perinatal2024',
    label: 'CANMAT 2024 Perinatal Guidelines',
    citation: 'Vigod SN, Frey BN, Clark CT, et al. CANMAT 2024 Clinical Practice Guideline for the Management of Perinatal Mood, Anxiety, and Related Disorders. Can J Psychiatry. 2025.',
    doi: '10.1177/07067437241303031',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11985483/',
  },
};

export function citationFor(key) {
  return CANMAT_GUIDELINES[key] || null;
}

// --- Curated line-of-therapy seed ---
// Conservative, well-established positions. Each entry: { indication, line, guideline, note }.
// This seed is expanded per-drug during extraction; anything not present here is left null
// (unknown) rather than guessed. Positions are guideline-recalled and attributed.
const LINE_OF_THERAPY = {
  escitalopram: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  sertraline: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  citalopram: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  fluoxetine: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  paroxetine: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  fluvoxamine: [{ indication: 'OCD', line: 'first-line', guideline: 'anxiety2014' }],
  venlafaxine: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  desvenlafaxine: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  duloxetine: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  bupropion: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  mirtazapine: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  vortioxetine: [{ indication: 'MDD', line: 'first-line', guideline: 'mdd2016' }],
  'amitriptyline': [{ indication: 'MDD', line: 'second-line (TCA)', guideline: 'mdd2016' }],
  moclobemide: [{ indication: 'MDD', line: 'second-line', guideline: 'mdd2016' }],
  lithium: [
    { indication: 'Bipolar I — mania (acute)', line: 'first-line', guideline: 'bipolar2018' },
    { indication: 'Bipolar — maintenance', line: 'first-line', guideline: 'bipolar2018' },
  ],
  quetiapine: [
    { indication: 'Bipolar depression (acute)', line: 'first-line', guideline: 'bipolar2018' },
    { indication: 'Bipolar I — mania (acute)', line: 'first-line', guideline: 'bipolar2018' },
  ],
  'valproate': [{ indication: 'Bipolar I — mania (acute)', line: 'first-line', guideline: 'bipolar2018' }],
  divalproex: [{ indication: 'Bipolar I — mania (acute)', line: 'first-line', guideline: 'bipolar2018' }],
  lamotrigine: [{ indication: 'Bipolar — maintenance (depression prevention)', line: 'first-line', guideline: 'bipolar2018' }],
  lurasidone: [{ indication: 'Bipolar depression (acute)', line: 'first-line', guideline: 'bipolar2018' }],
  asenapine: [{ indication: 'Bipolar I — mania (acute)', line: 'first-line', guideline: 'bipolar2018' }],
  aripiprazole: [{ indication: 'Bipolar I — mania (acute)', line: 'first-line', guideline: 'bipolar2018' }],
  risperidone: [{ indication: 'Bipolar I — mania (acute)', line: 'first-line', guideline: 'bipolar2018' }],
  cariprazine: [{ indication: 'Bipolar I — mania & depression (acute)', line: 'first-line', guideline: 'bipolar2018' }],
};

/**
 * Returns curated line-of-therapy entries for a molecule id, each resolved with its citation.
 * Returns [] when none is curated (caller leaves the field unknown rather than guessing).
 */
export function lineOfTherapy(id) {
  const entries = LINE_OF_THERAPY[id];
  if (!entries) return [];
  return entries.map((e) => {
    const g = CANMAT_GUIDELINES[e.guideline];
    return {
      indication: e.indication,
      line: e.line,
      note: e.note || null,
      provenance: 'canmat-synthesised',
      source: g ? { name: g.label, citation: g.citation, url: g.url, doi: g.doi || null } : null,
    };
  });
}
