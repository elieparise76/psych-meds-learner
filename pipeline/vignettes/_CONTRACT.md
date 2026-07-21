# Cross-med vignette bank contract (READ FIRST)

You are authoring **standalone, board-style (Royal College / FRCPC-flavoured) clinical
vignettes** for the Practice engine. Unlike the per-med vignettes, these are NOT tied to one
drug — they present a scenario and ask the resident to CHOOSE among agents (or identify a
syndrome/interaction), so the options span multiple medications. They also carry a `disorder`
tag so the app can interlink them to the (future) Wiki.

## Grounding

Ground drug facts in the built deck. You can list valid molecule ids:
```
cd "/Users/elieparise/Documents/Projets/Alex - Psych meds"
node -e "const d=require('./data/deck.json'); console.log(d.map(c=>c.id).join(', '))"
node -e "const d=require('./data/deck.json'); const c=d.find(x=>x.id==='lithium'); console.log(c.generic, c.canmatLineOfTherapy, c.seriousAE, c.syndromes)"
```
Use the drugs' real, deck-grounded properties. Do NOT invent doses/levels — if you cite a
number, it must match the deck. Options must be real deck `generic` names (or, for
syndrome/interaction items, real syndromes). CANMAT line-of-therapy positioning should match
`canmatLineOfTherapy` where used.

## Output format

An ES module at your given path, e.g. `pipeline/vignettes/mood_anxiety.js`:
```js
export default [
  {
    id: "va_mdd_first_line_1",          // unique, prefix by domain
    stem: "A 32-year-old with a first episode of major depression, no comorbidities, wants an antidepressant with a low interaction profile and both MDD and GAD coverage. Best first-line choice?",
    options: ["Escitalopram", "Phenelzine", "Amitriptyline", "Bupropion"],  // real deck generics
    answer: "Escitalopram",
    explanation: "Escitalopram is CANMAT first-line, best-tolerated, clean interactions, and approved for MDD + GAD. MAOIs/TCAs are later-line; bupropion lacks anxiety benefit.",
    meds: ["escitalopram", "phenelzine", "amitriptyline", "bupropion"],     // molecule ids referenced
    disorder: "Major depressive disorder",                                   // for wiki interlink
    difficulty: 1,                                                            // 1 easy, 2 medium, 3 hard
    tags: ["first-line", "canmat"],                                          // + "serotonin"/"nms"/"qt"/"overdose"/"pregnancy" where relevant
    source: { name: "CANMAT 2016 MDD", origin: "canmat" }                    // origin: canmat|openfda|monograph|authored
  },
  // 15–20 per file
];
```

## Rules

- **`options`** = exactly 4, one is `answer` (verbatim match). Use real deck `generic` names,
  EXCEPT syndrome/interaction items where options are syndromes (serotonin syndrome, NMS,
  anticholinergic toxicity, lithium toxicity, tyramine/hypertensive crisis, etc.).
- **`meds`** = the molecule ids referenced (so the app can link the vignette to those meds).
- **`disorder`** = the primary condition (from the deck's scope: MDD, bipolar I/II, GAD, panic
  disorder, OCD, PTSD, social anxiety disorder, schizophrenia, mania, alcohol use disorder,
  opioid use disorder, tobacco use disorder, ADHD, insomnia, delirium, major neurocognitive
  disorder/dementia, EPS/tardive dyskinesia, serotonin syndrome, NMS…). Keep it to conditions
  the deck's drugs actually treat — no obscure/unrelated entities.
- **`explanation`**: 1–3 sentences, teaches WHY the answer is right AND why the traps are wrong.
- Vary difficulty and scenario type: first-line choice, contraindication avoidance,
  interaction danger, recognise-the-syndrome, monitoring, special populations (pregnancy,
  elderly, renal/hepatic, cardiac), switching/washout, overdose management.
- FRCPC tone (Canadian). High-yield, unambiguous single best answer.
- Unique `id` per vignette, prefixed by your domain.

Verify it imports and every answer is in its options:
`cd "/Users/elieparise/Documents/Projets/Alex - Psych meds/pipeline" && node -e "import('./vignettes/<file>').then(m=>{const v=m.default;console.log('OK',v.length,'bad:',v.filter(x=>x.options.indexOf(x.answer)<0).length)})"`
Return a one-line summary (count + confirmation none are malformed).
