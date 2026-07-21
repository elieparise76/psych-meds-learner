# CLAUDE.md — working agreement for psych-meds-learner

This file governs how anyone (including Claude) builds on this repository. Read it before
making changes.

> **Picking up fresh? Start with [HANDOFF.md](HANDOFF.md)** — it has the complete current state
> (all features built), the app module map, how to regenerate the generated content, the
> ElevenLabs voice flow, and the concrete plan for the one remaining piece (the macOS `.app`).

## Project overview

`psych-meds-learner` is a **local, offline-capable, single-page HTML app** that teaches a
psychiatry resident psychopharmacology Duolingo-style: one new Canadian psych med a day,
SM-2 spaced-repetition review, streaks/XP, an adaptive Practice engine, and a full Catalog.
The end user is a **resident, not a developer** — it must run by double-clicking
`index.html` with no server, no build step, and no internet connection.

It is a **learning aid, not a prescribing reference.** Accuracy is paramount: where a fact
is dangerous to get wrong, it is extracted from a real source and cited — never guessed.

The project is built in two phases:
1. A **reproducible data-generation pipeline** (`pipeline/`) that produces a vetted,
   source-attributed deck (`data/deck.js`).
2. **The app** built around the frozen deck.

## How to run

**Double-click `index.html`.** No server, no build. Runs from `file://` in any modern
browser. All per-user state lives in `localStorage`; back up via Settings → Export/Import.

To regenerate the deck: `cd pipeline && node run.js` (see [DATA_SOURCES.md](DATA_SOURCES.md)).

## Commit discipline (required)

**After every meaningful step — a working pipeline stage, a completed data class, a finished
feature, a passing test run — commit and push:**

```bash
git add -A && git commit -m "descriptive message" && git push
```

Never let large amounts of work sit uncommitted. Small, frequent, descriptive commits.
History lives on GitHub at `elieparise76/psych-meds-learner`.

## Subagent policy (use them liberally, in parallel)

**Fan out aggressively. Do not hold back on subagent count or usage — parallelism is wanted
here.** Use subagents wherever they help, in parallel:

- **One extraction subagent per drug class** — each owns its slice of the deck.
- **A source-enrichment subagent per external source** (DPD, monograph, openFDA label,
  openFDA FAERS, DailyMed) that other agents call.
- **A vignette-authoring subagent** (board-style cases, multiple per drug).
- **A schema-validation subagent** (every card conforms to the schema; required fields
  present; provenance attached).
- **A clinical-QA subagent** that cross-checks safety-critical fields against the cited
  source and flags mismatches.
- **UI/component subagents** for the study modes and the game-feel layer.

Reconcile all fan-out through the shared schema and the deck file.

**Safety rule for any agent authoring medical content:** extract safety-critical fields from
*fetched source text you were given*, never from memory. If a source can't confirm a
safety-critical fact, mark it `unknown` and set `verifyFlag` — do not guess.

## Tech constraints (hard)

- **Vanilla stack:** HTML + CSS + JS. No framework requiring a build. No bundler.
- **Runs from `file://`:** therefore **do not `fetch()` the deck** (CORS blocks local fetch).
  Ship the deck as a JS file that assigns `window.MEDS = [...]` and load it with a `<script>`
  tag. For the same reason, **use classic scripts, not ES modules** (`type="module"` fails
  from `file://`). App code uses a global namespace (`window.PML`), loaded via `<script src>`.
- **Fully offline:** vendor any animation/sound helper locally — no CDN dependency at
  runtime. The resident may be on call with no wifi.
- **Persistence:** `localStorage` for all per-user state (SRS scheduling, streak, XP,
  settings, seeded deck order). Provide JSON export/import for backup and device transfer.
- **Separation of concerns:** the generated deck (`data/deck.js`) is distinct from app logic.
  **The app never mutates the deck;** user state is stored separately.
- **Accessibility floor:** keyboard navigable, visible focus, `prefers-reduced-motion`
  respected (animations degrade gracefully), responsive to mobile width.

## Data & provenance rules

- Every non-trivial field carries a `source` reference (which source + a link) and a
  `lastVerified` date.
- Safety-critical fields (boxed warnings, contraindications, therapeutic levels, overdose
  lethality, monitoring protocols) **must be source-extracted, not model-authored.**
- Pedagogical fields (mnemonics, confusables, pearls, vignettes, pronunciation) are
  model-authored but still tagged with the sources of the facts they test.
- **Do not invent DINs, levels, or warnings.** Unknown > guessed.
- The CPS (Compendium of Pharmaceuticals and Specialties) is **licensed** — never copied in,
  only linked. DPD, monographs, openFDA, and DailyMed are public/reusable with attribution.
- `data/PROVENANCE.md` must summarise coverage and list any fields that fell back to model
  authorship.

## Pointers

- **Full handoff (state, module map, regeneration, .app plan):** [HANDOFF.md](HANDOFF.md)
- **Data sources & licensing:** [DATA_SOURCES.md](DATA_SOURCES.md)
- **App architecture, SRS, daily engine, adaptive Practice:** [ARCHITECTURE.md](ARCHITECTURE.md)
- **Deck coverage (class → drug list):** [DECK_MANIFEST.md](DECK_MANIFEST.md)
- **Provenance report:** [data/PROVENANCE.md](data/PROVENANCE.md)
