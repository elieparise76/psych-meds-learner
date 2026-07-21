# Lesson-authoring contract v2 (READ THIS FIRST — replaces the old one)

You are authoring **Duolingo-style micro-lessons** for psychiatric medications, narrated by a
friendly study-buddy character called **Neuro**. A resident "learns" a med by walking through
this lesson. Two big changes from before:

1. **Clinical-first, NOT neuropharmacology-first.** The primary focus is *how this drug is used
   clinically* — what it's for, when you'd reach for it, how you actually use it, what patients
   feel, and what you must not miss. Mechanism / receptor profiles / detailed PK are **secondary
   flavour**, mentioned only briefly and only when genuinely high-yield. Do **not** lead with,
   or dwell on, receptor binding or pharmacokinetics.
2. **Not every card is a question.** Lessons are a mix of **explain cards** (Neuro just teaching
   something, no question — the learner reads/hears it and taps Continue) and **check cards**
   (a teaching point followed by a quick question). Aim for roughly half-and-half.

Lessons are **longer than before and go general → specific**: start with the big picture, end
with the fine detail.

## Grounding

Ground every fact in the built deck (reuse its exact doses/levels/warnings — never invent):
```
cd "/Users/elieparise/Documents/Projets/Alex - Psych meds"
node -e "const d=require('./data/deck.json'); const c=d.find(x=>x.id==='sertraline'); console.log(JSON.stringify({generic:c.generic,class:c.class,subclass:c.subclass,approvedCanada:c.approvedCanada,offLabel:c.offLabel,canmatLineOfTherapy:c.canmatLineOfTherapy,startingDose:c.startingDose,titration:c.titration,maxDose:c.maxDose,frequencyTiming:c.frequencyTiming,commonSE:c.commonSE,seriousAE:c.seriousAE,syndromes:c.syndromes,boxedWarning:c.boxedWarning,contraindications:c.contraindications,baselineWorkup:c.baselineWorkup,ongoingMonitoring:c.ongoingMonitoring,pregnancy:c.pregnancy,counsellingPoints:c.counsellingPoints,pearls:c.pearls,classDifferentiators:c.classDifferentiators,moa:c.moa,therapeuticLevel:c.therapeuticLevel},null,1))"
```

## Output format

An ES module at your given path, e.g. `pipeline/lessons/ssri.js`:
```js
export default {
  sertraline: {
    hook: "The reliable, broad-spectrum first-line antidepressant — and the one you trust after a heart attack.",
    steps: [
      // EXPLAIN card (no `check`) — Neuro teaches; learner taps Continue.
      { title: "The big picture",
        teach: "Sertraline is one of the go-to first-line antidepressants. Think of it as a safe, well-tolerated all-rounder: it treats depression AND the widest range of anxiety disorders, with few drug interactions." },
      // CHECK card — teach + a quick question.
      { title: "What it treats",
        teach: "It's approved for major depression, panic disorder, OCD, PTSD, social anxiety, and PMDD — broader anxiety coverage than most.",
        check: { q: "A patient has depression plus panic attacks. Why is sertraline a tidy single choice?", options: ["It covers both depression and anxiety disorders", "It's a stimulant", "It has no serotonergic activity"], answer: "It covers both depression and anxiety disorders", why: "One drug, broad coverage — efficient and evidence-based." } },
      // …6–9 steps total, general → specific…
    ],
    trap: "Don't confuse sertraline (an SSRI) with sertindole (an antipsychotic).",
    takeaway: "Sertraline = the broad, well-tolerated, low-interaction first-line SSRI — and the safe pick after an MI."
  },
  // one entry per molecule id you were given
};
```

## The arc (adapt per drug; 6–9 steps, general → specific)

Cover, roughly in this order — blending explain + check cards:
1. **Big picture** (explain): what this drug *is* in one friendly framing, and the one thing
   it's known for. Class in plain language.
2. **What it treats** (explain or check): its real indications + where it sits in therapy
   (first-line? reserved? niche?) — use CANMAT line-of-therapy where present.
3. **When you'd reach for it** (check): a short clinical positioning scenario.
4. **How you use it** (explain): the *practical* approach — start low / titrate / timing /
   with food / any key administration quirk. Plain language, not a dose-memorization drill
   (though reuse the deck's real numbers).
5. **What patients feel** (explain or check): the common, day-to-day side effects and the key
   counselling points (what you'd tell the patient).
6. **The must-not-miss** (check): the single most important safety issue — boxed/serious
   warning, dangerous interaction, monitoring, or overdose risk. This is the high-stakes card.
7. **Monitoring** (explain, where relevant): what you'd check and how often (levels, bloodwork).
8. **A touch of mechanism** (explain, brief): one memorable line on why it works — keep it
   light, no receptor tables.
9. **Trap / pearl** (check or explain): the classic confusion or the clinical pearl.

Not every drug needs all nine — pick what matters. Complex drugs (clozapine, lithium, MAOIs,
carbamazepine, lamotrigine) deserve the longer end (8–9 steps); simple ones 6.

## Rules

- **Key = the molecule `id` exactly.** One entry per molecule.
- **`hook`** ≤140 chars — a punchy, clinical framing of why this drug matters.
- **`steps`**: 6–9. Each has `title` (2–4 words) + `teach` (1–3 conversational sentences, in
  Neuro's friendly teaching voice). `check` is **OPTIONAL** — include it on roughly half the
  steps. When present: `{ q, options:[2–4 short strings], answer (exactly one option), why (one
  line) }`, and the check must be answerable from that step's `teach` (fair, not a trick).
- **Clinical > neuropharma.** At most ONE lightweight mechanism step; do not include receptor
  profiles or detailed PK unless it's the single most important thing about the drug.
- **`trap`** (optional) + **`takeaway`** (required, one line — the thing to remember).
- Reuse the deck's real doses/levels/warnings; never invent. This is a learning aid, not
  prescribing (the app says so; you don't need to repeat it).
- Neuro's voice: warm, clear, a little fun — a smart senior resident explaining to a junior.

Verify it imports and every check is well-formed:
`cd "/Users/elieparise/Documents/Projets/Alex - Psych meds/pipeline" && node -e "import('./lessons/<file>').then(m=>{let bad=[];for(const[id,l]of Object.entries(m.default)){if(!l.hook||!l.takeaway||!Array.isArray(l.steps)||l.steps.length<6)bad.push(id+':shape');l.steps.forEach((s,i)=>{if(s.check&&(!s.check.options||s.check.options.indexOf(s.check.answer)<0))bad.push(id+':step'+i)})}console.log('OK',Object.keys(m.default).length,'lessons; issues:',bad.length?bad.join(','):'none')})"`
Return a one-line summary (lesson count, avg steps, that checks are ~half and all valid).
