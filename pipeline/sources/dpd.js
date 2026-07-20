// dpd.js — Health Canada Drug Product Database client.
//
// The authoritative Canadian skeleton: which molecules are approved in Canada, Canadian
// brand names, DINs, formulations/strengths, dosage form/route, schedule (controlled
// status), and marketing status. This decides what counts as Canadian and in-scope.
//
// Flow for a molecule:
//   1. activeingredient/?ingredientname=<term>  → all product drug_codes + strengths
//   2. for a sample of products: drugproduct (brand/DIN/company), form, route, schedule, status
//   3. aggregate into a Canadian identity block with a citation.

import { getJSON } from '../lib/http.js';

const BASE = 'https://health-products.canada.ca/api/drug';
const SOURCE = 'dpd';

// Cap how many products we fully expand per molecule. The activeingredient query already
// yields every strength; per-product detail is sampled for brands/forms/schedule/status.
const MAX_DETAIL = 24;
const MAX_META = 14; // form/route/schedule/status calls per molecule

function titleCase(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/\b([a-z])/g, (m) => m.toUpperCase())
    .replace(/\bXr\b/g, 'XR').replace(/\bEr\b/g, 'ER').replace(/\bIr\b/g, 'IR')
    .replace(/\bOdt\b/g, 'ODT').replace(/\bSr\b/g, 'SR').replace(/\bLa\b/g, 'LA')
    .trim();
}

function uniq(arr) { return [...new Set(arr.filter(Boolean))]; }

async function ingredientProducts(term) {
  const url = `${BASE}/activeingredient/?ingredientname=${encodeURIComponent(term)}&type=json`;
  const res = await getJSON(url, { source: SOURCE, key: `ai_${term}` });
  if (!res.ok || !Array.isArray(res.data)) return { rows: [], url };
  return { rows: res.data, url };
}

async function productDetail(code) {
  const url = `${BASE}/drugproduct/?id=${code}&type=json`;
  const res = await getJSON(url, { source: SOURCE, key: `dp_${code}` });
  const row = Array.isArray(res.data) ? res.data[0] : res.data;
  return row || null;
}

async function meta(kind, code) {
  const url = `${BASE}/${kind}/?id=${code}&type=json`;
  const res = await getJSON(url, { source: SOURCE, key: `${kind}_${code}` });
  return Array.isArray(res.data) ? res.data : (res.data ? [res.data] : []);
}

/**
 * Look up a molecule in the DPD.
 * @param {object} spec { id, searchTerms:[...], comboOnly?, aiCountMax? }
 *   searchTerms — ingredient name(s) to query (DPD partial-matches).
 *   aiCountMax  — if set, drop products whose number_of_ais exceeds this (filters out
 *                 combination products when we only want the mono agent).
 */
export async function lookupMolecule(spec) {
  const terms = spec.searchTerms || [spec.id];
  const seen = new Map(); // drug_code -> { strengths:Set, ingredientNames:Set }

  const citations = [];
  for (const term of terms) {
    const { rows, url } = await ingredientProducts(term);
    citations.push(url);
    for (const r of rows) {
      const code = r.drug_code;
      if (!code) continue;
      if (!seen.has(code)) seen.set(code, { strengths: new Set(), ingredientNames: new Set() });
      const rec = seen.get(code);
      if (r.strength) rec.strengths.add(`${r.strength}${r.strength_unit ? ' ' + r.strength_unit : ''}`.trim());
      if (r.ingredient_name) rec.ingredientNames.add(r.ingredient_name);
    }
  }

  const codes = [...seen.keys()];
  if (codes.length === 0) {
    return {
      found: false,
      searchTerms: terms,
      productCount: 0,
      source: { name: 'Health Canada DPD', url: citations[0] || `${BASE}/activeingredient/` },
    };
  }

  // Detail sample
  const brands = [];
  const dins = [];
  const companies = [];
  const descriptors = [];
  const forms = [];
  const routes = [];
  const schedules = [];
  const statuses = [];
  const strengths = new Set();
  const ingredientNames = new Set();

  for (const rec of seen.values()) {
    rec.strengths.forEach((s) => strengths.add(s));
    rec.ingredientNames.forEach((s) => ingredientNames.add(s));
  }

  const detailCodes = codes.slice(0, MAX_DETAIL);
  for (const code of detailCodes) {
    // combo filter
    const dp = await productDetail(code);
    if (!dp) continue;
    if (spec.aiCountMax && Number(dp.number_of_ais) > spec.aiCountMax) continue;
    if (dp.brand_name) brands.push(titleCase(dp.brand_name));
    if (dp.drug_identification_number) dins.push(dp.drug_identification_number);
    if (dp.company_name) companies.push(titleCase(dp.company_name));
    if (dp.descriptor) descriptors.push(titleCase(dp.descriptor));
  }

  const metaCodes = codes.slice(0, MAX_META);
  for (const code of metaCodes) {
    const [f, r, sc, st] = await Promise.all([
      meta('form', code), meta('route', code), meta('schedule', code), meta('status', code),
    ]);
    f.forEach((x) => x.pharmaceutical_form_name && forms.push(x.pharmaceutical_form_name));
    r.forEach((x) => x.route_of_administration_name && routes.push(x.route_of_administration_name));
    sc.forEach((x) => x.schedule_name && schedules.push(titleCase(x.schedule_name)));
    st.forEach((x) => x.status && statuses.push(x.status));
  }

  const uStatuses = uniq(statuses);
  const marketed = uStatuses.some((s) => /market/i.test(s));
  const approvedInCanada = marketed || uStatuses.some((s) => /approved|dormant/i.test(s));

  const sampled = codes.length > MAX_DETAIL;

  return {
    found: true,
    searchTerms: terms,
    productCount: codes.length,
    detailCount: detailCodes.length,
    brandsCanada: uniq(brands).sort(),
    din: uniq(dins).slice(0, 12),
    companies: uniq(companies).slice(0, 10),
    descriptors: uniq(descriptors),
    ingredientNames: [...ingredientNames],
    strengths: uniq([...strengths]),
    forms: uniq(forms),
    routes: uniq(routes),
    schedules: uniq(schedules),
    statuses: uStatuses,
    marketed,
    approvedInCanada,
    sampled,
    sampleNote: sampled
      ? `DPD returned ${codes.length} products; brand/DIN/form detail sampled from ${detailCodes.length}. Strengths reflect all products.`
      : null,
    source: {
      name: 'Health Canada Drug Product Database',
      url: `${BASE}/drugproduct/?id=${codes[0]}`,
      query: `activeingredient/?ingredientname=${encodeURIComponent(terms[0])}`,
      license: 'Open Government Licence – Canada',
    },
  };
}
