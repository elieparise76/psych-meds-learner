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
    flashcard.js          The plain flip-card surface.
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
`repetitions` (init 0), and `dueDate`. A review presents four buttons mapping to a quality
score `q`:

| Button | q |
|--------|---|
| Again  | 2 |
| Hard   | 3 |
| Good   | 4 |
| Easy   | 5 |

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

## Daily engine

- **Seeded random order.** On first launch we generate a fixed shuffle of the deck using a
  seeded PRNG; the resulting order is persisted to `localStorage`. Each day serves the next
  *unlearned* card in that fixed order — arbitrary but deterministic per user.
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

Three distinct surfaces (see the build spec §10):

1. **Flashcard** — a plain flip card: front prompt → reveal structured facts → 3D flip →
   self-rate (Again/Hard/Good/Easy), which feeds the SRS. No games layered on top; the clean,
   fast review surface.
2. **Practice** — Duolingo-style adaptive mix of exercise types (below).
3. **Catalog** — the browsable "dex" with per-med + per-exercise stats, mastery tiers, and
   filters; doubles as the reference browser and the progress ledger.

Plus **Class compare** (side-by-side within a class, sortable by half-life, receptor profile,
SE burden) and **Cram** (rapid timed pass over a class or the whole deck, bonus XP).

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

A session never shows the same format twice in a row.

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
