// dailymed.js — DailyMed (NLM SPL repository) client.
//
// Additional American structured-label detail and a stable, human-viewable SPL link. Used as
// a cross-reference and as an identity fallback when openFDA has no clean record. openFDA
// already exposes the label section text in JSON, so here we capture the set-id(s), title,
// and a human URL for citation.

import { getJSON } from '../lib/http.js';

const BASE = 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json';
const SOURCE = 'dailymed';

/**
 * @param {object} spec { id, dailymedName? }
 * @param {number} pagesize
 */
export async function lookupDailyMed(spec, pagesize = 5) {
  const name = spec.dailymedName || spec.genericName || spec.id;
  const url = `${BASE}?drug_name=${encodeURIComponent(name)}&pagesize=${pagesize}`;
  const res = await getJSON(url, { source: SOURCE, key: `dm_${name}` });

  if (!res.ok || !res.data || !Array.isArray(res.data.data) || res.data.data.length === 0) {
    return { found: false, name, spls: [], source: { name: 'DailyMed', url } };
  }

  const spls = res.data.data.map((x) => ({
    setid: x.setid,
    title: x.title,
    published: x.published_date || null,
    url: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${x.setid}`,
  }));

  return {
    found: true,
    name,
    total: res.data.metadata?.total_elements ?? spls.length,
    spls,
    source: {
      name: 'DailyMed (NLM SPL)',
      url: spls[0]?.url || url,
      apiUrl: url,
      license: 'US public domain (NLM)',
    },
  };
}
