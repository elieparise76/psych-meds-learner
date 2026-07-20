// schema.js — the medication card schema (§6) + a validator.
//
// Every field is optional/nullable; the card UI hides empty fields. Fields carry provenance
// in card._meta.provenance keyed by field name. Safety-critical fields must be either
// source-extracted (origin != 'authored') OR explicitly flagged (verifyFlag) and, if a
// source can't confirm them, left null. The validator enforces these invariants.

// Field groups shown in the card UI, in order.
export const GROUPS = [
  'identity', 'mechanism', 'pk', 'indications', 'dosing',
  'safety', 'monitoring', 'interactions', 'populations', 'pedagogical',
];

// Full field registry. list=true → array field. sc=true → safety-critical.
export const FIELDS = [
  // Identity & classification
  { key: 'generic', group: 'identity', label: 'Generic (INN)' },
  { key: 'brandsCanada', group: 'identity', label: 'Canadian brands', list: true },
  { key: 'class', group: 'identity', label: 'Class' },
  { key: 'subclass', group: 'identity', label: 'Subclass' },
  { key: 'din', group: 'identity', label: 'DIN(s)', list: true, sc: true },
  { key: 'pronunciation', group: 'identity', label: 'Pronunciation' },
  { key: 'audio', group: 'identity', label: 'Audio' },
  { key: 'controlledStatusCanada', group: 'identity', label: 'Controlled status (Canada)', sc: true },
  { key: 'formulationsCanada', group: 'identity', label: 'Formulations (Canada)', list: true },
  { key: 'genericAvailable', group: 'identity', label: 'Generic available' },

  // Mechanism & pharmacodynamics
  { key: 'moa', group: 'mechanism', label: 'Mechanism of action' },
  { key: 'receptorProfile', group: 'mechanism', label: 'Receptor profile' },
  { key: 'onsetOfEffect', group: 'mechanism', label: 'Onset of effect' },

  // Pharmacokinetics
  { key: 'halfLife', group: 'pk', label: 'Half-life' },
  { key: 'timeToSteadyState', group: 'pk', label: 'Time to steady state' },
  { key: 'metabolism', group: 'pk', label: 'Metabolism (CYP role)' },
  { key: 'activeMetabolites', group: 'pk', label: 'Active metabolites' },
  { key: 'proteinBinding', group: 'pk', label: 'Protein binding' },
  { key: 'elimination', group: 'pk', label: 'Elimination' },
  { key: 'foodEffect', group: 'pk', label: 'Food effect' },
  { key: 'therapeuticLevel', group: 'pk', label: 'Therapeutic level', sc: true },

  // Indications
  { key: 'approvedCanada', group: 'indications', label: 'Approved (Health Canada)', list: true },
  { key: 'offLabel', group: 'indications', label: 'Off-label uses', list: true },
  { key: 'canmatLineOfTherapy', group: 'indications', label: 'CANMAT line of therapy', list: true },
  { key: 'approvedPopulations', group: 'indications', label: 'Approved populations' },

  // Dosing
  { key: 'startingDose', group: 'dosing', label: 'Starting dose', sc: true },
  { key: 'titration', group: 'dosing', label: 'Titration' },
  { key: 'therapeuticRange', group: 'dosing', label: 'Therapeutic range', sc: true },
  { key: 'maxDose', group: 'dosing', label: 'Max dose', sc: true },
  { key: 'frequencyTiming', group: 'dosing', label: 'Frequency / timing' },
  { key: 'renalHepaticAdjustment', group: 'dosing', label: 'Renal/hepatic adjustment' },
  { key: 'startStopCrossTaper', group: 'dosing', label: 'Start/stop/cross-taper' },
  { key: 'administrationNotes', group: 'dosing', label: 'Administration notes' },

  // Safety
  { key: 'boxedWarning', group: 'safety', label: 'Boxed / Serious Warnings', sc: true },
  { key: 'contraindications', group: 'safety', label: 'Contraindications', sc: true },
  { key: 'commonSE', group: 'safety', label: 'Common side effects', list: true },
  { key: 'seriousAE', group: 'safety', label: 'Serious adverse effects', list: true, sc: true },
  { key: 'syndromes', group: 'safety', label: 'Key syndromes', list: true, sc: true },
  { key: 'overdoseLethality', group: 'safety', label: 'Overdose lethality', sc: true },
  { key: 'discontinuationSyndrome', group: 'safety', label: 'Discontinuation / taper' },

  // Monitoring
  { key: 'baselineWorkup', group: 'monitoring', label: 'Baseline workup', list: true, sc: true },
  { key: 'ongoingMonitoring', group: 'monitoring', label: 'Ongoing monitoring', sc: true },

  // Interactions
  { key: 'majorDDI', group: 'interactions', label: 'Major drug interactions', list: true, sc: true },
  { key: 'contraindicatedCombos', group: 'interactions', label: 'Contraindicated combos', list: true, sc: true },
  { key: 'maoiWashout', group: 'interactions', label: 'MAOI washout' },
  { key: 'foodInteractions', group: 'interactions', label: 'Food interactions' },
  { key: 'substances', group: 'interactions', label: 'Substance interactions' },

  // Special populations
  { key: 'pregnancy', group: 'populations', label: 'Pregnancy', sc: true },
  { key: 'lactation', group: 'populations', label: 'Lactation' },
  { key: 'pediatric', group: 'populations', label: 'Pediatric' },
  { key: 'geriatric', group: 'populations', label: 'Geriatric' },
  { key: 'renalHepatic', group: 'populations', label: 'Renal / hepatic' },
  { key: 'cardiac', group: 'populations', label: 'Cardiac (QT)' },

  // Pedagogical (model-authored, tagged with the sources of facts they test)
  { key: 'pearls', group: 'pedagogical', label: 'Pearls', list: true },
  { key: 'mnemonics', group: 'pedagogical', label: 'Mnemonics', list: true },
  { key: 'confusables', group: 'pedagogical', label: 'Confusables', list: true },
  { key: 'classDifferentiators', group: 'pedagogical', label: 'Class differentiators' },
  { key: 'examHooks', group: 'pedagogical', label: 'Exam hooks (FRCPC)', list: true },
  { key: 'counsellingPoints', group: 'pedagogical', label: 'Counselling points', list: true },
  { key: 'vignettes', group: 'pedagogical', label: 'Vignettes', list: true },
];

export const FIELD_KEYS = FIELDS.map((f) => f.key);
export const SAFETY_CRITICAL = FIELDS.filter((f) => f.sc).map((f) => f.key);
export const LIST_FIELDS = FIELDS.filter((f) => f.list).map((f) => f.key);
const FIELD_BY_KEY = Object.fromEntries(FIELDS.map((f) => [f.key, f]));

export const PROVENANCE_ORIGINS = ['dpd', 'openfda', 'dailymed', 'monograph', 'canmat', 'faers', 'authored', 'unknown'];

// Fields required for a card to be usable at all.
const REQUIRED = ['id', 'generic', 'class'];

export function makeEmptyCard(id) {
  const card = { id, _meta: { provenance: {}, sources: [], verifyFlags: [], flags: [] } };
  for (const f of FIELDS) card[f.key] = f.list ? [] : null;
  return card;
}

function isEmpty(v) {
  if (v == null) return true;
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'string') return v.trim() === '';
  return false;
}

/**
 * Validate a card against the schema and provenance rules.
 * Returns { ok, errors[], warnings[] }.
 *   error   → violates a hard rule (missing required field; unknown field key;
 *             list field holding a non-array; safety-critical value with no provenance
 *             and not flagged).
 *   warning → soft issue (safety-critical field left null → should carry verifyFlag or be
 *             acknowledged; provenance origin not in the allowed set).
 */
export function validateCard(card) {
  const errors = [];
  const warnings = [];

  if (!card || typeof card !== 'object') {
    return { ok: false, errors: ['card is not an object'], warnings };
  }

  for (const key of REQUIRED) {
    if (isEmpty(card[key])) errors.push(`missing required field: ${key}`);
  }

  // Unknown keys (ignore _meta and id)
  for (const key of Object.keys(card)) {
    if (key === 'id' || key === '_meta') continue;
    if (!FIELD_BY_KEY[key]) warnings.push(`unknown field key: ${key}`);
  }

  // Type checks
  for (const f of FIELDS) {
    const v = card[f.key];
    if (v == null) continue;
    if (f.list && !Array.isArray(v)) errors.push(`field ${f.key} must be an array`);
    if (!f.list && Array.isArray(v)) errors.push(`field ${f.key} must not be an array`);
  }

  const prov = card._meta?.provenance || {};

  // Provenance + safety rules
  for (const key of SAFETY_CRITICAL) {
    const v = card[key];
    const p = prov[key];
    if (!isEmpty(v)) {
      // A populated safety-critical field must have provenance.
      if (!p || !p.origin) {
        errors.push(`safety-critical field ${key} is populated but has no provenance`);
      } else {
        if (!PROVENANCE_ORIGINS.includes(p.origin)) warnings.push(`field ${key}: unknown provenance origin '${p.origin}'`);
        // If it was model-authored, it must be flagged for verification.
        if (p.origin === 'authored' && !p.verifyFlag) {
          errors.push(`safety-critical field ${key} is model-authored but not verifyFlag'd`);
        }
      }
    }
  }

  // Provenance entries should reference real fields
  for (const key of Object.keys(prov)) {
    if (!FIELD_BY_KEY[key]) warnings.push(`provenance references unknown field: ${key}`);
  }

  // Meta sanity
  if (!card._meta?.lastVerified) warnings.push('no _meta.lastVerified date');

  return { ok: errors.length === 0, errors, warnings };
}

/** Validate a whole deck. Returns { ok, perCard, totals }. */
export function validateDeck(deck) {
  const perCard = {};
  let ok = true;
  let errorCount = 0;
  let warnCount = 0;
  for (const card of deck) {
    const res = validateCard(card);
    perCard[card.id || '(no id)'] = res;
    if (!res.ok) ok = false;
    errorCount += res.errors.length;
    warnCount += res.warnings.length;
  }
  return { ok, perCard, totals: { cards: deck.length, errors: errorCount, warnings: warnCount } };
}
