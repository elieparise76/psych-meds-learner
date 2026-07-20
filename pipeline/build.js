// build.js — assemble a source-attributed card per molecule.
//
// Each card = deterministic extraction (DPD identity + verbatim openFDA safety text + FAERS +
// CANMAT positioning) MERGED with an authored overlay (mechanism/PK/dosing summaries and the
// pedagogical layer). Provenance is wired onto every field; safety-critical fields must be
// grounded in attached source text (origin dpd/openfda/…), else they are downgraded to
// origin 'authored' + verifyFlag so the app surfaces them for verification.

import { lookupMolecule } from './sources/dpd.js';
import { lookupLabel } from './sources/openfda-label.js';
import { lookupFaers } from './sources/openfda-faers.js';
import { lookupDailyMed } from './sources/dailymed.js';
import { lineOfTherapy } from './sources/canmat.js';
import { makeEmptyCard, SAFETY_CRITICAL, FIELD_KEYS } from './schema.js';
import { today } from './lib/http.js';

const SC = new Set(SAFETY_CRITICAL);
const SOURCE_ORIGINS = new Set(['dpd', 'openfda', 'dailymed', 'monograph', 'faers', 'canmat']);

// Which openFDA label section grounds each safety-critical field (with fallbacks).
const SECTION_FOR = {
  boxedWarning: ['boxedWarning'],
  contraindications: ['contraindications'],
  therapeuticLevel: ['dosing', 'pharmacokinetics', 'laboratoryTests'],
  therapeuticRange: ['dosing'],
  startingDose: ['dosing'],
  maxDose: ['dosing'],
  seriousAE: ['warnings', 'adverseReactions'],
  syndromes: ['warnings', 'adverseReactions'],
  overdoseLethality: ['overdosage'],
  baselineWorkup: ['warnings', 'laboratoryTests'],
  ongoingMonitoring: ['warnings', 'laboratoryTests'],
  majorDDI: ['drugInteractions'],
  contraindicatedCombos: ['drugInteractions', 'contraindications'],
  pregnancy: ['pregnancy', 'useInPopulations'],
  din: [],
  controlledStatusCanada: [],
};

const EXCERPT = 700;
function excerpt(text, n = EXCERPT) {
  if (!text) return null;
  const t = String(text).replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n).replace(/\s\S*$/, '') + ' …' : t;
}

function sectionText(label, key) {
  if (!label?.found) return null;
  for (const s of (SECTION_FOR[key] || [])) {
    if (label.sections[s]) return excerpt(label.sections[s]);
  }
  return null;
}

// Derive Canadian formulations from DPD forms + strengths + descriptors.
function deriveFormulations(dpd) {
  if (!dpd?.found) return [];
  const forms = dpd.forms || [];
  const strengths = dpd.strengths || [];
  const routes = dpd.routes || [];
  const out = [];
  const routeNote = routes.length ? routes.map((r) => r).join('/') : '';
  for (const f of forms) {
    out.push(strengths.length ? `${f} (${strengths.join(', ')})` : f);
  }
  if (!out.length && strengths.length) out.push(strengths.join(', '));
  if (routeNote && !/oral/i.test(routeNote)) out.push(`Route: ${routeNote}`);
  // surface depot/patch hints from descriptors
  for (const d of (dpd.descriptors || [])) {
    if (/depot|la|palmitate|decanoate|patch|xr|er|sr|cr|odt/i.test(d)) out.push(d);
  }
  return [...new Set(out)];
}

function deriveControlled(dpd, hint) {
  const scheds = (dpd?.schedules || []).map((s) => s.toLowerCase());
  const flags = [];
  if (scheds.some((s) => /narcotic/.test(s))) flags.push('Narcotic (CDSA)');
  if (scheds.some((s) => /targeted/.test(s))) flags.push('Targeted Substance (benzodiazepine)');
  if (scheds.some((s) => /controlled/.test(s))) flags.push('Controlled Drug');
  if (flags.length) return flags.join('; ');
  if (hint) return hint;
  if (scheds.some((s) => /prescription/.test(s))) return 'Prescription (not a controlled substance)';
  return null;
}

function deriveGeneric(dpd) {
  if (!dpd?.found) return null;
  const brands = dpd.brandsCanada || [];
  // Generic available if there are multiple manufacturers / an "Apo-/Teva-/Sandoz-/Pms-/Mylan-" brand.
  const hasGenericMaker = brands.some((b) => /apo-|teva-|sandoz|pms-|mylan|riva-|jamp|auro-|dom-|pro-|gen-|nu-|phl-|ran-|mint-|act |ava-|bio-/i.test(b));
  return hasGenericMaker || brands.length > 3;
}

function fmtLot(lot) {
  return lot.map((e) => `${e.indication}: ${e.line}${e.source ? ` (${e.source.name})` : ''}`);
}

function setProv(card, key, prov) {
  card._meta.provenance[key] = prov;
  if (prov.verifyFlag && !card._meta.verifyFlags.includes(key)) card._meta.verifyFlags.push(key);
}

/**
 * Build one card.
 * @param {object} scope   scope entry
 * @param {object} overlay authored overlay (may be undefined)
 * @param {object} opts    { fetch:true } — set false to skip network (uses cache only via getJSON)
 */
export async function buildCard(scope, overlay = {}, opts = {}) {
  const card = makeEmptyCard(scope.id);
  card.generic = scope.generic;
  card.class = scope.class;
  card.subclass = scope.subclass || null;
  card._meta.difficultyPrior = scope.difficulty ?? 0.5;
  card._meta.lastVerified = today();
  card._meta.sources = [];

  // --- Fetch sources ---
  const [dpd, label, faers, dm] = await Promise.all([
    lookupMolecule(scope),
    lookupLabel(scope),
    lookupFaers(scope, 12),
    lookupDailyMed(scope, 3),
  ]);

  const srcList = card._meta.sources;
  if (dpd.found) srcList.push(dpd.source);
  if (label.found) srcList.push(label.source);
  if (faers.found) srcList.push(faers.source);
  if (dm.found) srcList.push(dm.source);

  // --- US-only determination ---
  const usOnly = scope.usOnly || !dpd.found || !dpd.approvedInCanada;
  card._meta.usOnly = usOnly;
  card._meta.canadaStatus = dpd.found ? dpd.statuses : ['Not found in DPD'];
  if (usOnly) card._meta.flags.push('US-only — for awareness');

  // --- Identity from DPD ---
  if (dpd.found) {
    card.brandsCanada = dpd.brandsCanada;
    setProv(card, 'brandsCanada', { origin: 'dpd', url: dpd.source.url });
    card.din = dpd.din;
    setProv(card, 'din', { origin: 'dpd', url: dpd.source.url, note: dpd.sampled ? 'representative sample' : null });
    card.formulationsCanada = deriveFormulations(dpd);
    setProv(card, 'formulationsCanada', { origin: 'dpd', url: dpd.source.url });
    card.controlledStatusCanada = deriveControlled(dpd, scope.controlledHint);
    if (card.controlledStatusCanada) setProv(card, 'controlledStatusCanada', { origin: 'dpd', url: dpd.source.url });
    card.genericAvailable = deriveGeneric(dpd);
  } else {
    // US-only: still record any US brand from the label
    if (label.found && label.openfda.brand_name?.length) {
      card.brandsCanada = []; // none in Canada
    }
    if (scope.controlledHint) {
      card.controlledStatusCanada = scope.controlledHint;
      setProv(card, 'controlledStatusCanada', { origin: 'authored', verifyFlag: true });
    }
  }

  // --- Verbatim safety text from openFDA label ---
  if (label.found) {
    if (label.sections.boxedWarning && !overlay.boxedWarning) {
      card.boxedWarning = excerpt(label.sections.boxedWarning, 900);
      setProv(card, 'boxedWarning', { origin: 'openfda', url: label.source.url, sourceText: excerpt(label.sections.boxedWarning, 1400) });
    }
    if (label.sections.contraindications && !overlay.contraindications) {
      card.contraindications = excerpt(label.sections.contraindications, 900);
      setProv(card, 'contraindications', { origin: 'openfda', url: label.source.url, sourceText: excerpt(label.sections.contraindications, 1400) });
    }
    card._meta.labelSetId = label.source.setId || null;
    card._meta.hasUsBoxedWarning = !!label.sections.boxedWarning;
  }

  // --- FAERS top reactions (hint for commonSE / vignettes; not incidence) ---
  if (faers.found) {
    card._meta.faersTop = faers.topReactions.slice(0, 12);
    card._meta.faersSource = faers.source;
  }

  // --- CANMAT line of therapy ---
  const lot = lineOfTherapy(scope.id);
  if (lot.length && !overlay.canmatLineOfTherapy) {
    card.canmatLineOfTherapy = fmtLot(lot);
    setProv(card, 'canmatLineOfTherapy', { origin: 'canmat', citations: lot.map((e) => e.source) });
  }

  // --- Merge authored overlay ---
  const prov = overlay._prov || {};
  for (const [key, val] of Object.entries(overlay)) {
    if (key === '_prov') continue;
    if (!FIELD_KEYS.includes(key)) continue;
    if (val == null || (Array.isArray(val) && val.length === 0)) continue;
    card[key] = val;

    let declared = prov[key];
    let entry;
    if (SC.has(key)) {
      // safety-critical: must be grounded in a source excerpt
      const grounded = declared && SOURCE_ORIGINS.has(declared);
      const st = grounded ? sectionText(label, key) : null;
      if (grounded && st) {
        entry = { origin: declared, url: label?.source?.url || null, sourceText: st };
      } else if (grounded && declared === 'canmat') {
        entry = { origin: 'canmat' };
      } else {
        // could not ground → honest downgrade
        entry = { origin: 'authored', verifyFlag: true };
      }
    } else {
      entry = { origin: declared && SOURCE_ORIGINS.has(declared) ? declared : 'authored' };
    }
    setProv(card, key, entry);
  }

  // Ensure boxed warning / contraindications overlay (if provided) get grounded too
  for (const key of ['boxedWarning', 'contraindications']) {
    if (overlay[key]) {
      const st = sectionText(label, key);
      setProv(card, key, st
        ? { origin: 'openfda', url: label.source.url, sourceText: st }
        : { origin: 'authored', verifyFlag: true });
    }
  }

  // Top-level verify flag if any safety-critical field is model-authored or unknown.
  card._meta.verifyFlag = card._meta.verifyFlags.length > 0;

  // Attach the raw section availability for downstream QA (not shipped verbatim beyond excerpts).
  card._meta.availableSections = label.found ? Object.keys(label.sections) : [];

  return { card, raw: { dpd, label, faers, dm } };
}

/** Build a set of cards. overlays is a map id -> overlay. */
export async function buildDeck(scopeEntries, overlays = {}, opts = {}) {
  const cards = [];
  const raws = {};
  for (const s of scopeEntries) {
    const { card, raw } = await buildCard(s, overlays[s.id] || {}, opts);
    cards.push(card);
    raws[s.id] = raw;
    if (opts.log) opts.log(card, raw);
  }
  return { cards, raws };
}
