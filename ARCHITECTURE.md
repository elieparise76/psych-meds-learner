# ARCHITECTURE.md

How `psych-meds-learner` is put together: the file layout, the data/app separation, the
spaced-repetition scheduler, the daily engine, and the adaptive Practice engine.

## Design goals

- **Zero-install, offline, `file://`-safe.** Double-click `index.html`. No server, no build,
  no network at runtime.
- **Deck is data; the app is logic; user progress is state.** Three separate things that
  never bleed into each other.
- **Game-like but skippable.** Someone who just wants to flip cards can ignore the game
  layer; someone who leans in gets XP, streaks, mastery, and celebrations.

## File layout

```
index.html                 Single entry point. Loads, in order, via classic <script> tags:
                             1. data/deck.js         → window.MEDS
                             2. app/vendor/*.js       → vendored anim/sound helpers
                             3. app/js/*.js           → the app (window.PML namespace)
app/
  css/
    tokens.css             Design tokens: colour system, type scale, spacing, radii.
    app.css               Layout + components.
    animations.css        Keyframes; all gated behind prefers-reduced-motion.
  vendor/
    confetti.js           Tiny self-contained particle burst (no CDN).
    sfx.js                WebAudio blip/chime generator (no audio files needed).
  js/
    util.js               window.PML namespace bootstrap, helpers, seeded PRNG, fuzzy match.
    store.js              localStorage read/write, schema-versioned state, export/import.
    srs.js                SM-2 lite scheduler (see below).
    daily.js              Seeded daily engine: which new card today, streak logic.
    adaptive.js           Accuracy-weighted item selection for Practice (see below).
    exercises.js          Generators for each Practice exercise type from the schema.
    practice.js           Practice session orchestration (mix, combo, XP).
    flashcard.js          Review = per-fact recall question set; flip card kept for learn fallback.
    catalog.js            The "dex": browse, filter, per-med + per-exercise stats.
    compare.js            Class compare (side-by-side sortable table).
    cram.js               Timed rapid pass over a class or the whole deck.
    game.js               XP/levels, mastery tiers, achievements, quests, class map.
    ui.js                 Router, view mounting, header (streak flame, XP bar, progress ring).
    main.js               Boot: hydrate state, wire router, render.
data/
  deck.js                 Generated. window.MEDS = [ {med}, ... ]. Never mutated by the app.
  PROVENANCE.md           Coverage + model-authorship disclosures.
pipeline/                 The re-runnable generator (see DATA_SOURCES.md).
```

### Why classic scripts, not ES modules

Browsers refuse to load `type="module"` scripts and `fetch()` from `file://` (CORS /
same-origin policy treats each local file as a unique opaque origin). Classic
`<script src="...">` tags **do** load local sibling files. So:

- The deck is a plain script that assigns `window.MEDS`.
- App modules attach to a single global, `window.PML` (e.g. `PML.srs`, `PML.store`).
- No bundler, no import maps, no network.

## Data / app / state separation

- **Deck (`window.MEDS`)** — immutable at runtime. Each entry follows the medication schema
  (see [DECK_MANIFEST.md](DECK_MANIFEST.md) and the schema in `pipeline/schema.js`). Fields
  are all nullable; the card UI hides empty fields.
- **User state (`localStorage`)** — a single versioned JSON blob under one key
  (`pml.state.v1`). Contains: per-card SRS rows, per-card + per-exercise accuracy, streak,
  XP/level, mastery tiers, unlocked achievements, active quests, settings, and the seeded
  deck order. Export/import serialises exactly this blob.
- The app keys user state to the deck by each med's stable `id` (slug of the generic name),
  so regenerating the deck does not orphan progress for meds that persist.

## Spaced repetition — SM-2 lite

Per card we store `easeFactor` (EF, init **2.5**), `interval` (days, init 0),
`repetitions` (init 0), and `dueDate`. A review scores each card on a quality
value `q`:

| Quality | q |
|---------|---|
| Again   | 2 |
| Hard    | 3 |
| Good    | 4 |
| Easy    | 5 |

The learner never picks `q` directly. **Review is a question set** (see the Flashcard surface
below): each due med becomes several per-fact recall questions, and the fraction the learner marks
"Got it" maps to `q` — all → 5, ≥80% → 4, ≥50% → 3, else 2.

On review:

```
if q < 3:                      // lapse
    repetitions = 0
    interval    = 1
else:
    if   repetitions == 0: interval = 1
    elif repetitions == 1: interval = 6
    else:                  interval = round(interval * EF)
    repetitions += 1

EF = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
if EF < 1.3: EF = 1.3

dueDate = today + interval days
```

A newly learned med enters review **the day after** it is first learned. **Remember mode**
works the queue of every card with `dueDate <= today`. Lapses reschedule quietly — they
never scold (Duolingo's whole trick).

## Learning roadmap (the skill tree)

"What to learn next" lives on a dedicated **Roadmap page** (`data/curriculum.js` →
`window.CURRICULUM`, engine in `tree.js`, view in `roadmap.js`), opened from the dashboard home
and its own nav tab. It replaced the old random daily card and is **content decoupled from
state** (like `vignettes.js`): reorder it freely, nobody loses progress.

- **Two readings of one dataset.** The data is authored as **class branches × tiers** (each
  class ordered first-line → obscure; every one of the 120 ids appears once, asserted at build
  time). The page renders it the other way: as **chapters** — horizontal priority bands
  top→bottom (`CURRICULUM.chapters`), where chapter _i_ = tier _i_ of every class. So Chapter 1
  ("The essentials") is the first-line row of every class, and **every med at the same level
  sits on one horizontal line**. High-yield ids are flagged `keystones`.
- **Unlock model — derived, never stored.** A class's tier-0 row is open from the start; **its
  next-tier row opens once `gate` (default 50%, min 1) of the current row is learned**; a
  branch's **boss** unlocks at `bossAt` (60%) of the branch learned; `specialist` branches
  (substance/dementia/adjunct) stay dim until `specialistAtLearned` meds are learned anywhere.
  Because unlock is a pure function of each card's existing `learned` flag, a returning user's
  meds light up automatically — **no migration, no reset** — while `frontier()` always points at
  the *shallowest unlearned* node so everyone re-enters at the basics.
- **Bosses.** Per-branch **discrimination vignettes** (`data/boss.js` → `window.BOSSES`,
  authored in `pipeline/boss/*.json`, assembled by `pipeline/build-boss.js`): 4 options all
  from the branch, chosen to force telling look-alike agents apart. A boss sits at the end of
  its class's last row; defeat it (≥60%) to stamp the branch; retries are free (no hearts). The
  runner lives in `roadmap.js`.
- **View.** `roadmap.js` renders chapter cards (number, title, subtitle, progress) each holding
  class rows (a label + same-level meds on one line) of flat circular nodes (learned ✓ /
  available / current / locked / keystone ⭐💎 / due 🔁 / boss chest), reusing the celebration +
  XP/mastery engines. The **dashboard home** (`ui.home`) keeps greeting/ring/streak/XP/quests/
  class-mastery; its primary button opens the roadmap.

## Daily engine

- **Roadmap frontier drives the day.** `daily.nextNew()` delegates to `PML.tree.frontier()` —
  the shallowest unlearned node, basics-first across classes. The old **seeded shuffle**
  (`seededOrder` in `localStorage`) is kept only as a legacy/import fallback when the tree is
  unavailable.
- **One new/day minimum, more allowed.** Reviews are always available.
- **Streak.** Increments on any day the daily goal is met: **≥1 new card learned OR all due
  reviews cleared.** (Either satisfies the goal — a day with nothing new but a cleared review
  queue still counts, so a resident keeping up with reviews is never punished.)
- **XP and a visible streak** are tracked and shown in the header.
- **Manual override.** The user can pick a specific drug (search) or "a new one from class X"
  (filter → next unlearned in that class). **A manual pick counts as the day's new card and
  satisfies the streak** — never punish choosing what to learn.
- **Streak freeze.** The user holds a small stock of streak freezes that auto-protect the
  streak on a missed day, so a post-call miss doesn't wipe a long streak.

## Study surfaces

- **Lesson** (`lesson.js`, learning a *new* med) — a short Duolingo-style lesson: a hook, then
  3–5 "teach a point → check it" steps, a trap, and a takeaway, then the full reference card.
  **One idea per page:** Neuro's explanation and the check on that explanation are separate pages,
  so the teaching is never on screen while you answer. A step bar plus Back/Next let you re-walk
  any page you have already finished (answers stay locked to what you picked); pages ahead of your
  furthest point stay locked, and a check must be answered before it unlocks the next page.
  "Learned" is earned here (marks SRS + XP + streak). Content is generated per med
  (`data/lessons.js` = `window.LESSONS`, authored in `pipeline/lessons/`, grounded in the deck).
- **Flashcard** (`flashcard.js`, *review*) — active-recall **question set** over the due card.
  Each due med is split into one recall question per populated **non-identity** fact (mechanism,
  PK, indications, dosing, safety, monitoring, interactions, populations, pearls — never
  brands / DINs / formulations / controlled status), sampled breadth-first across those groups by
  clinical priority and capped at 7 per med. For each: recall → **Reveal answer** (the sourced
  field value, provenance and "show source text" reused from `render.js`) → self-rate **Got it /
  Missed**. The per-med "Got it" fraction becomes one SM-2 quality (see SRS table). Same SRS
  footprint as before (schedules the card + awards XP); it does **not** feed Practice's per-med
  accuracy. The original prompt→flip→"Learn this" card remains for `mode:'learn'`, the fallback
  when a med has no authored lesson.
- **Practice** (`practice.js`) — Duolingo-style adaptive mix of exercise types (below),
  including a bank of cross-med board vignettes (`data/vignettes.js` = `window.VIGNETTES`).
  **Drills learned meds only.** `candidatePool()` returns learned cards (never the whole deck),
  and `PML.exercises.setScope(ids)` fences the generators that quiz more than one drug at a time
  (matching, confusables, cross-med vignettes) to those same ids — distractors stay unscoped,
  since a wrong option only has to be a plausible name. Session length is capped at
  `maxQuestions()` = `min(100, learnedInScope × 5)`, so a 3-med pool cannot pretend to be a
  50-question set; the setup view, the preset chips and Cram all read that cap.
- **Wiki** (`wiki.js`) — the interlinked reference: rich med pages (the "dex" + per-med +
  per-exercise stats + full data + sources) and disorder/syndrome pages
  (`data/disorders.js` = `window.DISORDERS`; original summaries, CANMAT-aligned treatment).
  Meds ↔ disorders are cross-linked both ways; `linkify()` turns med/condition names in prose
  and in vignette explanations into clickable jumps.

Plus **Class compare** (side-by-side within a class, sortable) and **Cram** (rapid timed pass,
bonus XP).

Content for lessons/vignettes/disorders is authored in `pipeline/{lessons,vignettes,disorders}/`
and merged into the `data/*.js` browser files by `pipeline/build-content.js`.

## Practice exercise types

Each is auto-generatable from the schema, so any drug can drive any exercise:

- **Type-the-answer** — free-text recall with fuzzy/synonym-tolerant matching.
- **Matching / association** — tap-to-pair grids (drug↔mechanism, drug↔class, drug↔boxed
  warning, drug↔monitoring, side-effect↔drug).
- **Tap-to-build** — assemble an answer from word tiles (CYP interaction, titration schedule).
- **MCQ** — "which drug causes X?", "first-line for Y per CANMAT?"
- **Reverse recall** — given a side-effect / mechanism / receptor profile, name the drug.
- **Cloze** — blank out mechanism / PK / dose fragments in a sentence.
- **Confusables discrimination** — forced choice between look-alike/sound-alike pairs
  (clozapine/clonazepam, buPROPion/busPIRone).
- **Board-style vignettes** — Royal College / FRCPC-flavoured cases, multiple per drug, each
  with an explanation and the cited source for the tested fact.

A session never shows the same format twice in a row, and **never repeats the same question** —
`buildSession` keeps a signature set (`exSig`) so each generated exercise is unique within the run;
if the (scoped) material runs out it returns a shorter set rather than duplicating.

### Topic (category) selection

Every generated exercise carries a `category` — one of the render.js fact groups
(`mechanism`, `pk`, `indications`, `dosing`, `safety`, `monitoring`, `interactions`, `populations`,
`pedagogical`) plus a synthetic `vignette` for the cross-med case bank. The Practice setup exposes
these as toggle chips ("Include topics", all on by default); the selection is passed to
`buildSession`, which calls `PML.exercises.setCategoryScope(cats)`. Each generator gates on
`catAllowed(category)` and returns null when its category is excluded, so a scoped session only
surfaces the chosen kinds of question. The broad-coverage engine is **cloze**, which can blank a
salient token from any populated field — it's what keeps the thinner categories (interactions,
populations, PK) drillable in isolation. The bare "class of drug" items are treated as core, not a
fact group, so they only appear in the unscoped full mix. When every topic is selected the scope is
cleared (identical to the pre-existing behaviour).

## Adaptive Practice engine

This is **separate from the SRS**. The SRS decides *when a card is due* (time-based). Practice
adaptivity decides *what and how to drill within a session* (accuracy-based).

- **Per-user accuracy is tracked for every med and every (fact-type, exercise-type) pair.**
- **Weighted, not random.** Selection draws more heavily from items the user gets wrong —
  weak meds and weak fact categories resurface more often; mastered ones fade back.
- **Difficulty prior.** Each med gets a seeded difficulty prior so inherently complex agents
  (clozapine, lithium, MAOIs, lamotrigine) start with more reps; the prior decays toward the
  user's measured accuracy as they prove mastery.

Selection weight sketch: `weight(item) = base × difficultyPrior(med) × (1 - recentAccuracy)
× recencyBoost`, sampled without immediate repeats of the same format.

## Progression & game feel

- **XP & levels** — per correct answer; more for harder exercise types and vignettes.
- **Streak + streak-freeze** — visible flame; auto-protecting freezes.
- **Daily & weekly goals** — adjustable daily goal (progress ring) + weekly XP target.
- **Per-med mastery tiers** — Bronze → Silver → Gold → a top "burnished" tier for sustained
  accuracy over time, driven by accuracy + reps + retention. Shown in the Catalog.
- **Class mastery map** — a skill-tree overview where each class fills in as its members reach
  mastery. A *visualisation* of progress; it does **not** override the seeded daily order.
- **Achievements / badges**, **session combo multiplier** (consecutive correct answers boost
  XP; a wrong answer resets the combo — not a life), and **daily quests**.
- **No hearts/lives.** Never gate learning; a reference tool should let the resident drill as
  much as they want. Any "leaderboard" is self-competitive (beat last week's XP), not social.

All animation respects `prefers-reduced-motion`; sounds are muteable and off unless enabled.

## Accessibility

Keyboard navigable throughout (answer with number keys, submit with Enter, rate with 1–4);
visible focus rings; ARIA roles on interactive widgets; responsive down to mobile width;
dark mode is the default-friendly night-call theme with a light option.
