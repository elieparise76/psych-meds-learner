# Titrate

*(repo slug `psych-meds-learner`)*

**Titrate** — a local, offline-capable, single-page app that teaches a psychiatry resident their
psychopharmacology the way Duolingo teaches a language — **one new Canadian psych med a
day**, spaced-repetition review, streaks, XP, and a genuinely game-like feel. Light "Regal Violet"
theme; guided by **Neuro**, a gleefully over-confident study buddy.

> ⚠️ **Learning aid — not a prescribing reference.** Always verify against the current
> Health Canada product monograph before any clinical use. See [Medical safety](#medical-safety).

## What it is

- **~120–130 Canadian-centered psychiatric medications**, organised by class.
- A **source-attributed deck**: safety-critical facts (boxed warnings, contraindications,
  therapeutic levels, monitoring) are extracted from real sources — Health Canada's Drug
  Product Database, product monographs, openFDA, DailyMed — and every card carries its
  provenance and a `lastVerified` date.
- A **Duolingo-style study loop**: a new med each day in a fixed, seeded order, each taught as
  a short **lesson** (a hook, 3–5 teach-then-check steps, a "watch out" trap, and a takeaway,
  then the full reference card) — learning is earned, not just displayed. Each explanation and
  the check on it sit on **separate pages**, and you can walk back through any page you have
  already finished. SM-2 spaced repetition for review; an adaptive **Practice** engine with many
  exercise types (type-the-answer, matching, MCQ, reverse recall, cloze, confusables,
  board-style vignettes — including a bank of cross-med cases) weighted toward what you get
  wrong, and drawn **only from meds you have already learned**.
- A **Wiki**: an interlinked reference of every med *and* the psychiatric conditions/syndromes
  they treat — cross-linked both ways, clickable from questions, with a per-med stats/"dex"
  view. Disorder pages are original educational summaries (DSM-5 criteria are copyrighted, so
  paraphrased) with CANMAT-aligned treatment.
- A **profile** (name + one of 8 hand-drawn animal avatars), mastery tiers, and filters.
- A **progression layer**: XP, levels, a streak (with streak-freeze so a post-call missed
  day doesn't wipe a 40-day streak), per-med mastery tiers, a class mastery map,
  achievements, a session combo multiplier, and daily quests.

## How to use

Two ways to run it:

- **The macOS app (recommended for daily use):** a double-clickable **`Titrate.app`** — a native
  WKWebView wrapper with **no dependencies** (no browser or server needed) that keeps your progress
  across launches. Build it with `app-package/make-app.sh` → produces `dist/Titrate-macOS.zip` to
  send to anyone. First launch on another Mac: right-click → *Open* (once). See
  [app-package/README.md](app-package/README.md).
- **Just the page:** **double-click `index.html`** — no server, no build step, no internet. Runs
  from `file://` in any modern browser.

All your progress (spaced-repetition scheduling, streak, XP, settings) is stored locally via
`localStorage`.

- **Back up / move devices:** Settings → *Export* writes a JSON backup; *Import* restores it.
  (Progress doesn't auto-carry between the `.app` and `file://` — different origins — so use
  Export/Import to move it.)
- **Offline:** everything (deck, animations, sounds) is vendored locally. Safe on call with
  no wifi.

## Screenshot

<!-- SCREENSHOT PLACEHOLDER: drop a PNG at app/docs/screenshot.png and it will render here. -->
![Titrate — home dashboard](app/docs/screenshot.png)

What you'll see: a **Home** dashboard (today's new med, a progress ring, streak + XP, daily
quests, a class-mastery snapshot); a **Practice** engine that mixes exercise types adaptively;
a **Review** queue (spaced repetition); a **Catalog** "dex" of all 120 meds with per-med and
per-exercise stats; **Compare** (sortable class tables); **Cram** (timed bonus runs); and a
**Progress** page with the class mastery map, mastery tiers, and achievements. Dark by default,
with a light theme. _(Add your own `app/docs/screenshot.png` to populate the image above.)_

## Project structure

```
index.html            The app — open this. Loads the deck + app scripts via <script> tags.
app/                  App logic (CSS + classic-script JS modules) and vendored libs.
data/deck.js          The generated deck: assigns window.MEDS = [...]. The app never mutates it.
data/lessons.js       Generated per-med micro-lessons: window.LESSONS.
data/vignettes.js     Generated cross-med board vignettes: window.VIGNETTES.
data/disorders.js     Generated disorder/syndrome wiki pages: window.DISORDERS.
data/PROVENANCE.md    Coverage summary + which fields fell back to model authorship.
pipeline/             The reproducible data-generation pipeline (re-runnable as drugs change).
                      Sub-authoring lives in pipeline/{authored,lessons,vignettes,disorders}/;
                      `node run.js` builds the deck, `node build-content.js` builds the rest.
HANDOFF.md            Full project state, module map, content regeneration, and the .app plan.
CLAUDE.md             Working agreement for anyone (incl. Claude) building on this repo.
ARCHITECTURE.md       App structure, the SRS, the daily engine, the adaptive Practice engine.
DATA_SOURCES.md       Every data source, what each contributes, and licensing notes.
DECK_MANIFEST.md      The class → drug list with coverage status.
```

## Two phases

1. **Data pipeline** (`pipeline/`) — a committed, re-runnable generator that queries the
   sources above and produces a vetted, source-attributed `data/deck.js`. It is a
   first-class artifact so the deck can be regenerated as drugs and warnings change.
2. **The app** — built around the frozen deck. The app is strictly separated from the deck:
   it reads `window.MEDS` and never writes to it; user state lives separately in
   `localStorage`.

## Medical safety

This is a study tool for a trainee, not a clinical decision aid.

- A persistent, quiet reminder is shown throughout the app: *"Learning aid — verify against
  the current Health Canada product monograph before clinical use."*
- Safety-critical fields trace to a cited source. Where a fact fell back to model authorship,
  the card surfaces a **verify flag** so you know to double-check it.
- The pipeline does not invent DINs, therapeutic levels, or warnings. When a source can't
  confirm a safety-critical fact, it is marked *unknown* rather than guessed.

## Licensing of data

Health Canada's Drug Product Database, product monographs, and the U.S. openFDA/DailyMed data
are public and reusable with attribution. The **Compendium of Pharmaceuticals and Specialties
(CPS) is licensed** and is **never copied into this repo** — only linked. See
[DATA_SOURCES.md](DATA_SOURCES.md).

## Regenerating the deck

```bash
cd pipeline
npm install        # only if the pipeline grows runtime deps; core clients use Node's built-in fetch
node run.js        # queries the sources, writes ../data/deck.js and ../data/PROVENANCE.md
```

See [DATA_SOURCES.md](DATA_SOURCES.md) and [ARCHITECTURE.md](ARCHITECTURE.md) for details.
