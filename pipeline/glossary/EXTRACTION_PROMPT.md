# Glossary term-extraction task (psych-meds learning app "Titrate")

You are extracting a **hover-glossary** for a Canadian psychiatry resident using an offline
Duolingo-style psychopharmacology app. When the resident hovers a flagged word anywhere in the
app, a short definition pops up (and, if the word maps to an existing wiki page, a "learn more"
link). Your job: read a slice of the app's real learner-facing text and return the clinical
words/expressions worth defining, each with an accurate short definition.

## What to INCLUDE (only terms that literally appear in your slice)
Center on things a resident might want a one-line reminder of:
- **Symptoms & signs**: anhedonia, psychomotor retardation, akathisia, tremor, diaphoresis,
  hyperreflexia, orthostatic hypotension, mydriasis, flight of ideas, pressured speech, etc.
- **Mental-health conditions / states**: depression, mania, hypomania, psychosis, delirium,
  catatonia, generalized anxiety, panic attack, insomnia, etc.
- **Syndromes & adverse-effect phenomena**: serotonin syndrome, neuroleptic malignant syndrome,
  extrapyramidal symptoms, tardive dyskinesia, discontinuation syndrome, QT prolongation,
  hyponatremia, agranulocytosis, metabolic syndrome, etc.
- **High-value pharmacology / lab concepts** a resident hovers to recall: half-life, titration,
  prodrug, active metabolite, first-pass metabolism, CYP2D6/CYP3A4 (as a concept), steady state,
  therapeutic index, washout, loading dose, partial agonist, therapeutic drug level, etc.

## What to EXCLUDE
- Specific **drug names** (generic or brand) — they are already linked elsewhere. (Drug *classes*
  like "SSRI", "benzodiazepine", "MAOI" ARE okay to include as concepts.)
- Generic English / filler: dose, drug, effect, patient, weeks, oral, agent, first-line, avoid,
  approved, active, etc. — unless they carry a specific clinical meaning worth defining.
- Dosing numbers, administrative words, anything not clinically instructive.

## Output — write a JSON file, do not print the whole thing back to me
Write your result to **`<SCRATCH>/out_<NN>.json`** (use YOUR slice number, zero-padded, e.g.
`out_03.json`). It must be a JSON array of objects with this exact shape:

```json
[
  {
    "term": "akathisia",
    "aliases": ["akathisia", "akathisic"],
    "def": "A distressing inner restlessness with an urge to move — a common early antipsychotic side effect.",
    "wikiId": "eps",
    "category": "adverse-effect"
  }
]
```

Field rules:
- `term`: the canonical **lowercase** display form (singular lemma). One concept per entry.
- `aliases`: every literal surface form that should be matched/underlined in text — include the
  term itself, plus plausible **plurals, adjective/noun variants, common synonyms, and
  abbreviations that actually read naturally** (e.g. "eps" for extrapyramidal symptoms,
  "hyponatraemia" spelling variant, "brain zaps" for discontinuation). Keep aliases specific
  enough that they won't over-match generic prose. Lowercase.
- `def`: ONE crisp, plain-language, clinically **accurate** definition, **≤ 170 characters**, no
  citation, no trailing source. Write for a resident. **Accuracy is paramount — if you are not
  confident a fact is correct, OMIT the term entirely rather than guess.**
- `wikiId`: if the term IS one of the existing wiki entries (match against `wiki_entries.json` by
  name or any `aka`), put that entry's `id`. Otherwise `null`. (Many symptom/PK terms will be
  `null` — that's expected; they'll be definition-only.)
- `category`: one of `symptom | sign | syndrome | disorder | adverse-effect | pharmacology | lab | class | other`.

## Quality bar
- Only include a term if a resident would genuinely benefit from the hover. Aim for the useful
  clinical vocabulary in your slice — quality over quantity. Duplicates across slices are fine
  (they'll be merged), so don't worry about other slices.
- Definitions must be self-contained and correct. Prefer omission over a shaky definition.
- Target roughly 40–90 solid entries from your slice (more if the slice is rich).
