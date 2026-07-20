// openfda-faers.js — openFDA drug/event (FAERS) client.
//
// FAERS adverse-event report frequencies. Used to make vignettes and "most commonly
// reported…" statements precise. NOTE: FAERS is spontaneous-reporting data — counts reflect
// reporting patterns and disproportionality, NOT incidence. We record it as "most reported
// events" and never present it as an incidence rate.

import { getJSON } from '../lib/http.js';

const BASE = 'https://api.fda.gov/drug/event.json';
const SOURCE = 'openfda_faers';

/**
 * Top reported reactions for a drug.
 * @param {object} spec { id, faersName? } faersName defaults to the generic id.
 * @param {number} limit
 */
export async function lookupFaers(spec, limit = 15) {
  const name = (spec.faersName || spec.genericName || spec.id);
  const url = `${BASE}?search=patient.drug.medicinalproduct:"${encodeURIComponent(name)}"` +
    `&count=patient.reaction.reactionmeddrapt.exact&limit=${limit}`;
  const res = await getJSON(url, { source: SOURCE, key: `faers_${name}` });

  if (!res.ok || !res.data || !Array.isArray(res.data.results)) {
    return { found: false, name, topReactions: [], source: { name: 'openFDA drug/event (FAERS)', url } };
  }

  const topReactions = res.data.results.map((r) => ({
    term: r.term,
    count: r.count,
  }));

  const total = topReactions.reduce((n, r) => n + r.count, 0);

  return {
    found: true,
    name,
    topReactions,
    reportedTotalTop: total,
    source: {
      name: 'openFDA drug/event (FAERS)',
      url,
      note: 'Spontaneous reports — reflects reporting frequency, not incidence.',
      license: 'US public domain (openFDA)',
    },
  };
}
