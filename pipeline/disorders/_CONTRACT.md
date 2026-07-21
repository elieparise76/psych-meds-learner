# Disorder-page authoring contract (READ FIRST)

You are authoring **wiki pages for psychiatric disorders and drug-related syndromes** for the
psych-meds-learner app. These pages are the connective tissue: they link to the medications
that treat them, and the app links to them from questions. Keep them **useful and tightly tied
to the deck's drugs** — no obscure entities.

## ⚠️ COPYRIGHT — read carefully

The **DSM-5(-TR) diagnostic criteria are copyrighted**. Do **NOT** reproduce them verbatim,
and do **NOT** output a numbered/lettered criteria checklist that mirrors DSM-5. Write your
own **original, educational prose** describing how the condition presents and is recognised.
You may mention "meets DSM-5 criteria for ≥2 weeks" as a *concept*, but never copy the
criteria text. Treatment content should follow **CANMAT / Canadian guidelines** (cite them).
This is a learning aid, not a diagnostic manual.

## Grounding

The `meds` you list MUST be real deck molecule ids. Get them + their indications:
```
cd "/Users/elieparise/Documents/Projets/Alex - Psych meds"
node -e "const d=require('./data/deck.json'); console.log(d.map(c=>c.id+' ('+c.generic+')').join(', '))"
node -e "const d=require('./data/deck.json'); const c=d.find(x=>x.id==='sertraline'); console.log(c.approvedCanada, c.offLabel, c.canmatLineOfTherapy)"
```
Only list a med under a disorder if it genuinely treats it (approved or well-established
off-label). Do not invent doses — if you mention one, it must match the deck.

## Output format

An ES module at your given path, e.g. `pipeline/disorders/mood.js`:
```js
export default [
  {
    id: "mdd",                                  // use the EXACT id from the assigned list
    name: "Major depressive disorder",
    aka: ["MDD", "depression", "major depression", "unipolar depression"],  // lowercase-matchable synonyms
    category: "Mood",                           // Mood | Anxiety | Psychotic | Neurocognitive | Substance | Other | Syndrome
    oneLiner: "Persistent low mood/anhedonia with neurovegetative and cognitive symptoms.",
    overview: "2–4 original sentences: what it is, core features (your words, NOT DSM text).",
    epidemiology: "1–2 sentences (lifetime prevalence, sex ratio, onset).",
    presentation: ["bullet", "bullet", "…"],    // how it shows up, in your own words
    redFlags: ["Suicidality — screen and safety-plan", "…"],
    workup: ["Rule out medical mimics (thyroid, anemia…)", "Screen for bipolarity before an antidepressant", "…"],
    management: {
      overview: "CANMAT-aligned approach in 1–2 sentences.",
      firstLine: [
        { text: "SSRIs / SNRIs / bupropion / mirtazapine / vortioxetine (CANMAT first-line)", meds: ["escitalopram","sertraline","venlafaxine","bupropion","mirtazapine","vortioxetine"] }
      ],
      later: [ { text: "TCAs, MAOIs, augmentation (lithium, atypical antipsychotic), esketamine/ECT for resistant", meds: ["amitriptyline","phenelzine","lithium","aripiprazole","esketamine"] } ],
      nonPharm: ["Psychotherapy (CBT, IPT)", "…"]
    },
    meds: ["escitalopram","sertraline", "…"],    // ALL deck meds relevant to this condition (union of the above)
    related: ["gad","bipolar","perinatal"],      // ids of related pages (from the full id list below)
    sources: [ { name: "CANMAT 2016/2023 MDD", url: "https://journals.sagepub.com/doi/10.1177/0706743716659416" } ]
  }
];
```

For **Syndrome** pages (serotonin syndrome, NMS, EPS, etc.), keep the same shape but focus
`presentation` on recognition, `management` on treatment, and `meds` on the CULPRIT drugs (and
where relevant, the antidote/treatment drug, e.g. benztropine for dystonia, dantrolene concept
for NMS — dantrolene isn't in the deck, that's fine to mention in prose).

## The full page id list (use these EXACT ids; only author the ones assigned to you)

Mood: `mdd` (Major depressive disorder), `bipolar` (Bipolar disorder), `perinatal` (Perinatal mood & anxiety disorders)
Anxiety: `gad` (Generalized anxiety disorder), `panic` (Panic disorder), `social-anxiety` (Social anxiety disorder), `ocd` (Obsessive-compulsive disorder), `ptsd` (Post-traumatic stress disorder)
Psychotic/Neurocognitive: `schizophrenia` (Schizophrenia), `pd-psychosis` (Parkinson disease psychosis), `delirium` (Delirium), `dementia` (Major neurocognitive disorder / dementia), `agitation` (Acute agitation / behavioural emergency)
Substance/Other: `aud` (Alcohol use disorder), `oud` (Opioid use disorder), `tud` (Tobacco use disorder), `adhd` (ADHD), `insomnia` (Insomnia disorder)
Syndromes: `serotonin-syndrome`, `nms` (Neuroleptic malignant syndrome), `eps` (Extrapyramidal symptoms), `tardive-dyskinesia`, `anticholinergic-toxicity`, `lithium-toxicity`, `metabolic-syndrome` (Antipsychotic metabolic syndrome), `discontinuation-syndrome` (Antidepressant discontinuation syndrome), `tyramine-crisis` (Tyramine / hypertensive crisis)

`related` and cross-references must use ids from this list. `aka` should include the display
variants used in questions (e.g. bipolar → "bipolar i disorder", "bipolar ii disorder",
"mania"; dementia → "major neurocognitive disorder", "alzheimer"; serotonin-syndrome →
"serotonin toxicity").

Verify it imports and ids/meds are valid:
`cd "/Users/elieparise/Documents/Projets/Alex - Psych meds/pipeline" && node -e "import('./disorders/<file>').then(m=>{const d=JSON.parse(require('fs').readFileSync('../data/deck.json'));const ids=new Set(d.map(c=>c.id));const bad=[];m.default.forEach(p=>{(p.meds||[]).forEach(x=>{if(!ids.has(x))bad.push(p.id+'->'+x)})});console.log('OK',m.default.length,'pages; bad med refs:',bad.length?bad.join(','):'none')})"`
Return a one-line summary (page count + that all med refs are valid deck ids).
