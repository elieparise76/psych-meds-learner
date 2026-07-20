// openfda-label.js — openFDA drug/label (Structured Product Labeling) client.
//
// American enrichment + cross-reference. Extracts labeled sections VERBATIM (these are the
// source text that safety-critical fields are extracted from), normalising across the two
// SPL field-name conventions (newer `warnings_and_cautions` vs older `warnings`+`precautions`).
//
// Caveat: US labels. Canadian labeling can differ; the source is always recorded so
// US-vs-Canada divergence stays visible downstream.

import { getJSON } from '../lib/http.js';

const BASE = 'https://api.fda.gov/drug/label.json';
const SOURCE = 'openfda_label';
const MAX_SECTION = 2600; // chars kept per section in the raw extract

// section-key -> ordered list of SPL field names to try
const SECTION_MAP = {
  boxedWarning: ['boxed_warning'],
  indications: ['indications_and_usage'],
  contraindications: ['contraindications'],
  warnings: ['warnings_and_cautions', 'warnings'],
  precautions: ['precautions'],
  dosing: ['dosage_and_administration'],
  adverseReactions: ['adverse_reactions'],
  drugInteractions: ['drug_interactions'],
  mechanismOfAction: ['mechanism_of_action'],
  pharmacodynamics: ['pharmacodynamics'],
  pharmacokinetics: ['pharmacokinetics', 'clinical_pharmacology'],
  useInPopulations: ['use_in_specific_populations'],
  pregnancy: ['pregnancy'],
  lactation: ['nursing_mothers', 'lactation'],
  pediatricUse: ['pediatric_use'],
  geriatricUse: ['geriatric_use'],
  overdosage: ['overdosage'],
  abuseDependence: ['drug_abuse_and_dependence'],
  controlledSubstance: ['controlled_substance'],
  laboratoryTests: ['laboratory_tests'],
};

// Sections whose presence signals a "rich" label, used to pick the best of several results.
const RICH_KEYS = ['boxed_warning', 'contraindications', 'dosage_and_administration',
  'warnings_and_cautions', 'warnings', 'adverse_reactions', 'drug_interactions'];

function clean(val) {
  if (!val) return null;
  const text = Array.isArray(val) ? val.join('\n\n') : String(val);
  const t = text.replace(/\s+\n/g, '\n').replace(/[ \t]{2,}/g, ' ').trim();
  if (!t) return null;
  return t.length > MAX_SECTION ? t.slice(0, MAX_SECTION) + ' …[truncated]' : t;
}

function richness(r) {
  return RICH_KEYS.reduce((n, k) => n + (r[k] ? 1 : 0), 0);
}

/**
 * @param {object} spec { id, genericName?, brandForLabel?, substance? }
 */
export async function lookupLabel(spec) {
  const gname = (spec.genericName || spec.id).toLowerCase();
  // Try generic_name, then substance_name, then brand as fallbacks.
  const queries = [
    `search=openfda.generic_name:"${encodeURIComponent(gname)}"&limit=5`,
    `search=openfda.substance_name:"${encodeURIComponent(spec.substance || gname)}"&limit=5`,
  ];
  if (spec.brandForLabel) {
    queries.push(`search=openfda.brand_name:"${encodeURIComponent(spec.brandForLabel)}"&limit=5`);
  }

  let results = null;
  let usedUrl = null;
  for (const q of queries) {
    const url = `${BASE}?${q}`;
    const res = await getJSON(url, { source: SOURCE, key: `${gname}_${q.slice(7, 40)}` });
    if (res.ok && res.data && Array.isArray(res.data.results) && res.data.results.length) {
      results = res.data.results;
      usedUrl = url;
      break;
    }
  }

  if (!results) {
    return { found: false, genericName: gname, source: { name: 'openFDA drug/label', url: BASE } };
  }

  // Choose the richest label.
  const best = results.slice().sort((a, b) => richness(b) - richness(a))[0];
  const of = best.openfda || {};

  const sections = {};
  for (const [key, fields] of Object.entries(SECTION_MAP)) {
    for (const f of fields) {
      const v = clean(best[f]);
      if (v) { sections[key] = v; break; }
    }
  }

  const setId = of.spl_set_id?.[0] || best.set_id;
  const dailymedUrl = setId
    ? `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${setId}`
    : BASE;

  return {
    found: true,
    genericName: gname,
    openfda: {
      brand_name: of.brand_name || [],
      generic_name: of.generic_name || [],
      manufacturer_name: of.manufacturer_name || [],
      route: of.route || [],
      substance_name: of.substance_name || [],
      pharm_class_epc: of.pharm_class_epc || [],
      pharm_class_moa: of.pharm_class_moa || [],
      pharm_class_pe: of.pharm_class_pe || [],
      pharm_class_cs: of.pharm_class_cs || [],
      product_type: of.product_type || [],
      unii: of.unii || [],
      rxcui: of.rxcui || [],
    },
    sections,
    hasBoxedWarning: !!sections.boxedWarning,
    effectiveTime: best.effective_time || null,
    source: {
      name: 'openFDA drug/label (US SPL)',
      url: dailymedUrl,
      apiUrl: usedUrl,
      setId: setId || null,
      note: 'US label — cross-reference; Canadian monograph is authoritative for Canada.',
      license: 'US public domain (openFDA)',
    },
  };
}
