---
name: generate-vignettes
description: Generate new board-style clinical vignettes for the Titrate deck by fanning out parallel subagents, then rebuild data/vignettes.js through the pipeline. Use this whenever the user wants more vignettes, practice cases, clinical cases, board/exam questions, or a bigger question bank for the app — including phrasings like "add 40 more vignettes", "we need more OCD cases", "expand the question bank", "generate 20 vignettes on lithium", or "the practice questions are getting repetitive". Trigger it even if the user never says "subagent", "pipeline", or "vignette bank".
---

# Generate clinical vignettes

Vignettes are the highest-value exercise type in Practice — cross-med, board-style cases that make
the resident reason clinically rather than recall a fact. This skill scales that bank up.

Authoring them is embarrassingly parallel: each vignette is independent, and each subagent owns its
own source file, so N agents can write at once with **zero write conflicts**. The orchestrator (you)
plans the split, launches the agents, then validates and builds **once** at the end.

## The one non-negotiable: ground everything in the deck

This is a medical study aid. Per `CLAUDE.md`, safety-critical facts (doses, levels, interactions,
contraindications, boxed warnings) must be **extracted from `data/deck.json`, never recalled from
memory**. A plausible-sounding invented dose is the worst failure mode this repo has — it teaches a
resident something false. Every subagent brief must repeat this instruction, and every drug named in
an option must be a real deck `generic` whose molecule id exists in the deck.

If a scenario can't be grounded, the agent should pick a different scenario rather than guess.

## Step 1 — Scope the request

Settle two things (ask only if genuinely ambiguous; otherwise infer and say what you assumed):

- **How many** vignettes. If unspecified, 30 is a good default batch.
- **What focus**, if any. A topic ("lithium", "pregnancy", "OCD") aims the fan-out; with no topic,
  aim at the thinnest coverage (Step 2 tells you where that is).

## Step 2 — Survey what already exists

```bash
node .claude/skills/generate-vignettes/scripts/coverage.js
```

Prints the current total, per-disorder counts **thinnest-first**, and every id prefix already in use.
Read it before planning: it stops you from piling a seventh case onto an area that already has
eighteen, and from reusing an id prefix (duplicate ids are silently dropped at build time).

## Step 3 — Plan the fan-out

- **~12–18 vignettes per subagent.** Proven batch size — quality stays high and the agent finishes
  comfortably. Going much bigger tends to produce thinner, more repetitive cases.
- **One agent → one new file** at `pipeline/vignettes/<domain>.js`. Never two agents on one file;
  that's what makes parallelism safe here.
- **A fresh id prefix per file** (e.g. `vg_periop_`), checked against the coverage output.
- Give each agent a **distinct domain** with named target disorders, so agents don't converge on the
  same obvious cases. Use the exact `disorder` strings from the coverage report — the app keys its
  wiki interlinks off them, so a novel spelling silently orphans the link.

## Step 4 — Launch the agents in parallel

Send **all** `Agent` calls in a single message so they run concurrently. Use this brief, filling the
bracketed parts:

```
You are authoring board-style (Royal College / FRCPC) clinical vignettes for a Canadian
psychopharmacology learning app.

WORKING DIRECTORY: /Users/elieparise/Documents/Projets/Alex - Psych meds

STEP 1 — Read and follow the contract exactly: pipeline/vignettes/_CONTRACT.md

STEP 2 — Ground every drug fact in the built deck. This is a hard safety rule: extract facts from
the deck, never from memory, and never invent doses/levels/warnings.
  - Valid molecule ids: node -e "const d=require('./data/deck.json'); console.log(d.map(c=>c.id).join(', '))"
  - Inspect a drug:     node -e "const d=require('./data/deck.json'); const c=d.find(x=>x.id==='lithium'); console.log(JSON.stringify(c,null,1))"
  Only use drugs present in the deck, and only cite properties that match it. If you cannot ground a
  scenario, choose a different one.

STEP 3 — Write `pipeline/vignettes/[FILE].js` in the contract's ES-module format
(`export default [ {...} ]`), containing [N] high-yield vignettes on [DOMAIN].
  - Cover these disorders, using these exact `disorder` strings: [EXACT STRINGS]
  - Vary the scenario type: first-line choice, contraindication avoidance, interaction danger,
    recognise-the-syndrome, monitoring, special populations, switching/washout, overdose.
  - `options`: exactly 4 real deck generics (or real syndromes for recognise-the-syndrome items),
    one of which is the verbatim `answer`. `meds`: the molecule ids referenced.
  - `explanation`: 1–3 sentences on why the answer is right AND why the traps are wrong.
  - Unique `id` per entry, all prefixed `[PREFIX]`.

STEP 4 — Verify before finishing:
  node .claude/skills/generate-vignettes/scripts/validate.js
  Fix anything it reports that belongs to your file.

Do NOT run build-content.js — the orchestrator builds once after all agents finish. Do NOT edit any
file other than your own. Return one line: file path, count, and confirmation it validates clean.
```

The last paragraph matters: if agents build concurrently they race on `data/vignettes.js`, and an
agent that wanders into another file undoes a sibling's work.

## Step 5 — Validate, then build once

```bash
node .claude/skills/generate-vignettes/scripts/validate.js     # names the exact bad entry, if any
cd pipeline && node build-content.js
```

Validate first. `build-content.js` **silently drops** malformed entries and duplicate ids, so a
subagent can report success while its work quietly vanishes; the validator fails loudly with the
offending file and id instead. Then confirm the build line reads `dropped 0` and that the total rose
by roughly what you asked for. If it dropped anything, fix the source file and rebuild — don't
accept a lossy build.

## Step 6 — Report and commit

Tell the user the before/after totals, which disorders gained coverage, and anything an agent
flagged as ungroundable. Then commit per the repo's discipline:

```bash
git add -A && git commit -m "Add N clinical vignettes (<domains>)" && git push
```

## Why this never disturbs the user's progress

Vignettes are **content**; the resident's streak, XP, learned meds, and SRS schedule are **state** in
`localStorage` under `pml.state.v1`. Nothing is keyed to a vignette id — Practice samples the bank
fresh each session — so regenerating `data/vignettes.js` grows the question pool without touching
progress. Adding vignettes is always safe to ship to an existing user; say so when reporting.
