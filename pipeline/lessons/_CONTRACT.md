# Lesson-authoring contract (READ THIS FIRST)

You are authoring **Duolingo-style micro-lessons** for a set of psychiatric medications. When
a resident "learns" a med, they do NOT just get a data dump — they get a short, substantive
lesson that teaches the **3–5 most important, highest-yield things** about the drug, one at a
time, each with a quick check-for-understanding. The full data card is shown separately at the
end for reference. Your job: distil what actually matters.

## Grounding (important)

Read the built deck for your molecules and ground every fact in it:
```
cd "/Users/elieparise/Documents/Projets/Alex - Psych meds"
node -e "const d=require('./data/deck.json'); const c=d.find(x=>x.id==='sertraline'); console.log(JSON.stringify({generic:c.generic,class:c.class,subclass:c.subclass,moa:c.moa,halfLife:c.halfLife,metabolism:c.metabolism,startingDose:c.startingDose,maxDose:c.maxDose,therapeuticLevel:c.therapeuticLevel,boxedWarning:c.boxedWarning,seriousAE:c.seriousAE,syndromes:c.syndromes,majorDDI:c.majorDDI,pregnancy:c.pregnancy,commonSE:c.commonSE,pearls:c.pearls,confusables:c.confusables,examHooks:c.examHooks,canmatLineOfTherapy:c.canmatLineOfTherapy,classDifferentiators:c.classDifferentiators},null,1))"
```
Do NOT invent new doses, levels, or warnings — reuse the deck's. Pedagogical framing and
emphasis are yours; the underlying safety facts must come from the deck.

## Output format

An ES module at the path you were given, e.g. `pipeline/lessons/ssri.js`:
```js
export default {
  sertraline: {
    hook: "The everyday SSRI you reach for first — and the safe one after a heart attack.",
    steps: [
      {
        title: "What it is",
        teach: "Sertraline is an SSRI: it blocks serotonin reuptake (SERT) to raise synaptic 5-HT. First-line for depression and most anxiety disorders.",
        check: { q: "Sertraline's main mechanism?", options: ["Blocks serotonin reuptake", "Blocks dopamine D2 receptors", "Inhibits MAO-A"], answer: "Blocks serotonin reuptake", why: "SSRIs block SERT." }
      },
      { title: "The signature win", teach: "…", check: { q:"…", options:[...], answer:"…", why:"…" } }
      // 3–5 steps total
    ],
    trap: "Don't confuse it with sertindole (an antipsychotic).",  // optional, high-yield confusion
    takeaway: "Sertraline = clean, broad anxiety coverage, cardiac-safe, low-interaction first-line SSRI."
  },
  // … one entry per molecule id you were given
};
```

## Rules

- **Key = the molecule `id` exactly** (as given). One entry per molecule.
- **`hook`**: one punchy sentence (≤130 chars) — why this drug matters / how to think about it.
- **`steps`**: 3–5 ordered from MOST to least important. Each step:
  - `title`: 2–4 words.
  - `teach`: 1–2 sentences — the actual teaching point (the killer fact, the mechanism, the
    signature toxicity, the monitoring, the niche). Concrete and high-yield.
  - `check`: a quick MCQ that tests THAT step's point. `options` = 2–4 short strings, `answer`
    must be exactly one of them, `why` = one-line explanation. The check must be answerable
    from the `teach` (fair, not a trick).
- **Cover the essentials**, tuned to the drug: mechanism/class, the ONE thing you must never
  forget (boxed warning / lethal toxicity / therapeutic level / key monitoring), a
  differentiator vs its neighbours, and a practical pearl. Complex drugs (clozapine, lithium,
  MAOIs, carbamazepine, lamotrigine) deserve the full 5 steps; simple ones can use 3.
- **`trap`** (optional): the classic look-alike/sound-alike or conceptual mistake.
- **`takeaway`**: the single most important one-liner, shown at the end.
- Tone: crisp, confident, a little fun — Duolingo for doctors. NOT a textbook paragraph.
- This is a **learning aid, not prescribing** — no need to restate that, the app does.

When done, verify it imports cleanly:
`cd "/Users/elieparise/Documents/Projets/Alex - Psych meds/pipeline" && node -e "import('./lessons/<file>').then(m=>console.log('OK', Object.keys(m.default).length, Object.keys(m.default).join(',')))"`
Fix any error. Confirm each entry has hook, 3–5 steps (each with a valid check whose answer is
in its options), and a takeaway. Return a one-line summary.
