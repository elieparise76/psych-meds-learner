# Authored-overlay contract (READ THIS FIRST)

You are authoring one JS overlay file for a set of psychiatric medications. The pipeline
(`pipeline/build.js`) merges your overlay with **live source data** it fetches itself
(Health Canada DPD + openFDA label + FAERS). Your file supplies the *interpreted* and
*pedagogical* content; the pipeline supplies identity and verbatim safety text.

**Template to copy exactly:** read `pipeline/authored/ssri.js` — match its structure, style,
depth, and the `_prov` convention precisely. Read `pipeline/schema.js` for the exact field
keys (the `FIELDS` array). Use ONLY those keys.

## Output format

An ES module at the path you were given:

```js
// authored/<file>.js — authored overlay for <group>.
const GROUP_PROV = { startingDose:'openfda', maxDose:'openfda', seriousAE:'openfda',
  syndromes:'openfda', majorDDI:'openfda', contraindicatedCombos:'openfda',
  pregnancy:'openfda', overdoseLethality:'openfda' };

export default {
  <molecule_id>: { /* fields... */ , _prov: GROUP_PROV },
  ...
};
```

The object key **must** be the molecule `id` you were given (exactly). One entry per molecule.

## Fields you SHOULD author (all nullable — omit if genuinely unknown)

`pronunciation, moa, receptorProfile, onsetOfEffect, halfLife, timeToSteadyState, metabolism,
activeMetabolites, proteinBinding, elimination, foodEffect, therapeuticLevel, approvedCanada[],
offLabel[], approvedPopulations, startingDose, titration, therapeuticRange, maxDose,
frequencyTiming, renalHepaticAdjustment, startStopCrossTaper, administrationNotes, commonSE[],
seriousAE[], syndromes[], overdoseLethality, discontinuationSyndrome, baselineWorkup[],
ongoingMonitoring, majorDDI[], contraindicatedCombos[], maoiWashout, foodInteractions,
substances, pregnancy, lactation, pediatric, geriatric, renalHepatic, cardiac, pearls[],
mnemonics[], confusables[], classDifferentiators, examHooks[], counsellingPoints[], vignettes[]`

## Fields you MUST NOT set (the pipeline supplies these from live sources)

`id, generic, class, subclass, din, brandsCanada, formulationsCanada, controlledStatusCanada,
genericAvailable, boxedWarning, contraindications, canmatLineOfTherapy`

(The pipeline pulls DINs/brands/formulations/schedule from the DPD, and the boxed warning +
contraindications **verbatim** from the openFDA label. Do not author them — you'd be
overriding the source.)

## Accuracy rules (this is a medical study tool — accuracy is paramount)

- Author **standard, board-level Canadian psychopharmacology** only. This is well-established
  content (FRCPC/Royal College level). Be conservative and precise.
- **Never invent** a specific dose, half-life, therapeutic level, or DIN. If you are not
  confident of a specific value, **omit that field** (leave it out) — the pipeline will flag
  or skip it. Omission is always safe; a wrong number is not.
- `therapeuticLevel` — set ONLY for drugs with genuine therapeutic drug monitoring:
  lithium (0.6–1.2 mmol/L; ~1.0 acute mania), valproate (~350–700 µmol/L / 50–100 µg/mL),
  carbamazepine (~17–51 µmol/L / 4–12 µg/mL), clozapine (target ≳350 ng/mL),
  nortriptyline (therapeutic window ~50–150 ng/mL). For everything else, omit it.
- `vignettes` — 1–2 per molecule, Royal College / FRCPC-flavoured (NOT USMLE). Each is an
  object: `{ stem, options:[4], answer, explanation, testedFact, source:{name, origin} }`
  where `origin` is one of `'openfda' | 'canmat' | 'monograph' | 'authored'`. The tested fact
  must be a real, high-yield fact.
- Honour Canadian nuances: moclobemide (RIMA), zuclopenthixol/flupenthixol/methotrimeprazine
  (Canada-specific FGAs), zopiclone (Z-drug standard), Targeted Substances = benzodiazepines.
- For **US-only** molecules (you'll be told which), still author normally but you may note
  "US-only — for awareness" in a pearl; the pipeline flags Canadian availability itself.

## The `_prov` convention

`_prov` maps a safety-critical field → the source that grounds it. Use `'openfda'` for fields
that appear on a standard US drug label (dose, warnings/AEs, interactions, pregnancy,
overdose). The pipeline attaches the real label section text as proof and, if the label lacks
that section, automatically downgrades the field to `verifyFlag` — so declaring `'openfda'` is
safe and correct for these. Add `therapeuticLevel:'openfda'` (or `'monograph'`) to `_prov`
ONLY for the TDM drugs above.

## Quality bar

Match `ssri.js`: every molecule needs a real `moa`, `halfLife`, `metabolism` (with CYP role),
`startingDose`/`maxDose`, `commonSE`, `seriousAE`, `syndromes`, `majorDDI`, ≥2 `pearls`,
≥1 `mnemonic`, `confusables`, `examHooks`, `counsellingPoints`, and ≥1 `vignette`. Keep prose
tight (card-sized). Write `classDifferentiators` to distinguish this agent from its neighbours.

When done, your file must `import()` cleanly (valid ESM, no syntax errors) and export a plain
object. Do not add console output or side effects.
