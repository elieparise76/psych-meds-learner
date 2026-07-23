# HANDOFF.md — full project state & how to continue

Read this first if you're picking up the project fresh. It captures everything: what's built,
how it fits together, how to regenerate the generated content, and how the macOS `.app` is built
and packaged. Companion docs: [CLAUDE.md](CLAUDE.md) (working rules),
[ARCHITECTURE.md](ARCHITECTURE.md) (design), [DATA_SOURCES.md](DATA_SOURCES.md),
[DECK_MANIFEST.md](DECK_MANIFEST.md), [data/PROVENANCE.md](data/PROVENANCE.md).

## What this is

**Titrate** (repo slug `psych-meds-learner`) — a **local, offline, single-page app** that teaches
a Canadian psychiatry resident their psychopharmacology, Duolingo-style. Vanilla HTML/CSS/JS, **no
build step, no framework, runs from `file://` by double-clicking `index.html`** (classic `<script>`
tags only — NEVER ES modules or `fetch()` for local data; see CLAUDE.md "Tech constraints"). All
per-user state is in `localStorage`; JSON export/import for backup. GitHub:
`elieparise76/psych-meds-learner` (public).

**Look & feel (Round 5):** the product name is **Titrate** ("psychopharm, perfected"). The theme is
**light-only** — a "Regal Violet" palette (deep violet primary on soft lavender-paper), defined once
on `:root` in `tokens.css` (no dark theme, no theme switcher; `applyTheme()` normalises any legacy
saved theme to light). The primary-accent CSS var is still named `--honey` for compatibility — it
just carries the violet value now. The guide/study buddy is **Neuro**, voiced as an over-confident,
faintly pretentious mentor; the animal pictures are the user's **avatar** (not "study buddy").

**It is a learning aid, not a prescribing reference.** Safety-critical facts are extracted from
real sources and cited; model-authored fallbacks are flagged (`verifyFlag`, ⚠ badge).

## Current state — everything that's built (all done, committed, pushed)

- **Deck**: 120 Canadian-centered psych meds, source-attributed (Health Canada DPD + openFDA
  label/FAERS + DailyMed + CANMAT). 100% schema-valid; 84% of safety-critical fields
  source-grounded, rest flagged. `data/deck.js` → `window.MEDS`.
- **Lessons (v2, clinical-first)**: 120 per-med Duolingo lessons — general→specific, ~7 cards
  each, ~half "Neuro explains" cards + ~half quick checks. Mechanism is de-emphasized (one brief
  step). `data/lessons.js` → `window.LESSONS`. The player (Round 6) puts **teaching and its check
  on separate pages** (11–18 pages per med) with a clickable step bar + Back/Next over everything
  already completed; see `lesson.js` and "Lesson" in [ARCHITECTURE.md](ARCHITECTURE.md).
- **Vignettes**: 118 cross-med board-style cases across 26 disorders, each referencing meds + a
  disorder (for wiki interlinking). `data/vignettes.js` → `window.VIGNETTES`. Regenerating/expanding
  this bank is safe for existing users — see "Regenerating vignettes safely" below.
- **Wiki**: interlinked reference — rich med pages + 27 disorder/syndrome pages (original prose,
  DSM-5 criteria NOT copied; CANMAT-aligned treatment linking to meds). Calm search-first hub
  (class tiles / condition tiles / syndrome tiles; "Full list & filters" opens the dex).
  Med↔disorder cross-links both ways; `linkify()` makes med/condition names clickable in prose
  and vignette explanations. `data/disorders.js` → `window.DISORDERS`.
- **Learning roadmap (skill tree)**: a dedicated **Roadmap page** (nav tab + the dashboard's
  main button), laid out as **chapters** — horizontal priority bands top→bottom ("The
  essentials" → "Deep cuts"), each holding **class rows** where every same-level med sits on one
  horizontal line (basic SSRIs side by side, etc.). Flat circular nodes (learned ✓ / available /
  current / locked / keystone ⭐💎 / due 🔁), and **a Review at the end of every row** (one per
  class per chapter). To open a class's next-chapter row you must learn its **whole** current row
  **and pass that row's Review** (`tierUnlocked = rowComplete(prev) && reviewCleared(prev)`);
  specialist branches also gate on total learned. Learning derives from the `learned` flag so
  returning users keep all progress; the "Continue" button (`nextAction`) feeds the next med to
  learn, or the next available Review when nothing's left to learn. Data: `data/curriculum.js` →
  `window.CURRICULUM` (all 120 meds placed once as class branches × tiers + `chapters` metadata).
  **Reviews** are per-row discrimination+coverage quizzes authored fresh by subagents
  (`pipeline/reviews/<branchId>.json` → `data/reviews.js` → `window.REVIEWS`, keyed
  `"branchId:tierIndex"`, built by `node pipeline/build-reviews.js`; 165 Qs / 28 rows). Engine in
  `tree.js`, view + review runner in `roadmap.js`. **Home stays a dashboard** (greeting, streak,
  XP, quests, class mastery). New roadmap **achievements** in `game.js` (Foundations, Cartographer,
  Consolidator, Class Act, Keystone, …). (The old per-branch boss system was retired.)
- **Study loop**: one-new-med-a-day daily engine now fed by the roadmap frontier (manual pick counts toward streak),
  SM-2 lite spaced **Review** — now a per-fact active-recall **question set** (each due med is
  quizzed on its populated non-identity facts one at a time: recall → reveal sourced answer →
  Got it / Missed; the score maps to the SM-2 quality), adaptive **Practice** (clinical-first, 7 exercise
  types — mcq, type-the-answer, matching, reverse, cloze, confusables, vignettes; tap-to-build
  was removed), **Cram** (timed), **Compare v2** (pick any 2–4 meds → aligned clinical versus
  table).
- **Practice scope (Round 6)**: Practice and Cram draw **only from meds already learned** — no
  previewing the deck. The setup's Focus list shows only classes you have learned in (with counts),
  and the question count is capped at `PML.practice.maxQuestions()` = `min(100, learnedMeds × 5)`,
  which the number input, the preset chips and Cram's length list all follow. Exercises that quiz
  several drugs at once (matching, confusables, cross-med vignettes) are fenced by
  `PML.exercises.setScope(ids)`; distractors deliberately are not. Zero learned meds → a "Nothing to
  practice yet" card instead of a session, and "🎮 Drill this med" only appears on learned meds.
- **Practice topics + no-repeat (latest)**: the setup adds an **"Include topics"** chip row
  (Mechanism, PK, Indications, Dosing, Safety, Monitoring, Interactions, Populations, Pearls,
  Clinical vignettes — all on by default). Each exercise is tagged with a `category`; the selection
  is fenced by `PML.exercises.setCategoryScope(cats)` (parallel to the med `setScope`), so a scoped
  session only surfaces the chosen kinds of question. **cloze** is the broad-coverage generator that
  keeps thin categories (interactions/populations/PK) drillable alone. Also: a session **never
  repeats the same question** — `buildSession` de-dupes by an `exSig` signature and returns a shorter
  set if unique material runs out. See ARCHITECTURE.md "Topic (category) selection".
- **Practice UX (Round 4)**: the setup lets you pick **any question count** up to that cap (free
  number input + preset chips). During a session a **left progress grid** shows one cell
  per question, colour-coded live by outcome (mint = right, coral = wrong, honey ring = current);
  **tapping any finished cell opens a read-only review** of that question (options with your pick
  vs. the correct answer, explanation, wiki links) with a "← Back to question N" button that
  restores the live question untouched. The results screen adds a **recap grid** (tap a cell →
  review modal). All in `practice.js`; styles under "Practice: progress grid layout" in `app.css`.
- **Progression / game feel**: XP, levels, streak (no streak-freeze — removed), per-med mastery
  tiers, class mastery map, achievements, session combo, daily quests, and **big center-screen
  celebration "moments"** (Round 4): finishing the day's learning / clearing reviews fires a
  full-screen streak card with a glowing flame and the streak number **counting up** (0→1, etc.),
  confetti and a `streakup` fanfare; level-ups mid-practice pop a lightweight non-blocking *flash*;
  a strong Practice session (≥80%, ≥4 Qs) gets its own moment. The engine is `PML.ui.moment` /
  `celebrate` in `ui.js` (queued block moments + flash), keyframes under "big center-screen
  celebration" in `animations.css`, sounds `streakup`/`fanfare`/`poptick` in `vendor/sfx.js`. Plus
  the pre-existing confetti/toast layer, now 20 synthesized sound effects (on by default), light
  Regal-Violet theme, all `prefers-reduced-motion`-aware (count-up + rays degrade to a static number).
- **Profile**: first-run name + one of 8 hand-drawn SVG **avatars** (in `profile.js`); shown in the
  header; reset re-runs it. (The picker says "Choose your avatar" — "study buddy" now = Neuro, the guide.)
- **Tutorial (Round 5)**: guided walkthrough narrated by **Neuro**, an over-confident, faintly
  pretentious mentor, introducing "Titrate". **Not skippable** (no Skip control; Escape ignored;
  mandatory on first run) and you **cannot press Next until the step's audio finishes** — with no
  clip / narration off, a short reading-time gate stands in so you're never trapped. Canonical text
  in `pipeline/tutorial-script.js` (~2k chars, 10 steps) → `data/tutorial.js` → `window.TUTORIAL`;
  replay via header `?`. Voice clips are `app/audio/<step-id>.mp3` — see `app/audio/README.md` for
  the ElevenLabs (browser or API) flow; recommended voice is a British male ("Daniel").
- **Accessibility**: keyboard nav, focus rings, `prefers-reduced-motion`, mobile width, skip
  link, ARIA dialog roles.

## How to run / preview

- **Ship path**: double-click `index.html` in any modern browser. Works offline.
- **Dev preview**: the Claude Code Browser pane renders `file://` as a *static snapshot* (no JS),
  so to actually exercise the app, serve over http and open localhost:
  ```bash
  cd "/Users/elieparise/Documents/Projets/Alex - Psych meds"
  python3 -m http.server 8080
  # open http://localhost:8080/index.html
  ```
  The classic-script code path is identical to `file://`, so localhost testing is valid.
  Browser caches JS aggressively — bump the port (or hard-reload) after editing to bust cache.

## App module map (`app/js/*.js`, classic scripts on `window.PML`, loaded in `index.html` order)

`util` (PML namespace, seeded PRNG, fuzzy match, DOM helpers) · `deck` (read-only `window.MEDS`
accessor + `primaryBrand`) · `store` (localStorage state, day/week rollover, streak, export/import)
· `srs` (SM-2 lite) · `game` (XP/levels/combo/mastery/achievements/quests) · `daily` (daily
engine + streak/goal, now fed by the roadmap frontier) · `tree` (skill-tree derivation over
`window.CURRICULUM`: node states, tier/branch unlocks, chapters, frontier, boss state) · `render` (shared
fact groups + provenance badges + source text) · `profile`
(first-run + 8 SVG avatars) · `flashcard` (Review = per-fact recall question set → SM-2; flip card
kept for the learn fallback) · `lesson` (v2 learning flow —
Neuro explain+check) · `exercises` (clinical-first exercise generators) · `practice` (adaptive
session runner + all exercise renderers) · `catalog` (the filterable "dex" grid; `detail` delegates
to `wiki.medPage`) · `wiki` (hub + med pages + disorder pages + linkify + reverse index) · `compare`
(v2 versus picker) · `cram` (timed) · `progress` (class map + achievements + stats) · `tutorial`
(Neuro walkthrough + Neuro mascot SVG, reused by lessons) · `roadmap` (the Roadmap page —
chapters × class rows of flat nodes + the boss gauntlet runner) · `ui` (router, HUD, home, celebrations,
settings, sounds wiring) · `main` (boot). Vendored offline: `app/vendor/confetti.js`, `sfx.js`
(WebAudio, 17 sounds), `fonts.css` (Space Grotesk woff2 base64).

## Content pipeline & regeneration

The generated `data/*.js` files come from `pipeline/`. Regenerate:

```bash
cd pipeline
node run.js            # queries live APIs → data/deck.json + data/deck.js (window.MEDS)
                       #   --refresh bypasses the raw cache; --class=NAME / --only=id1,id2 to scope
node validate.js       # schema + provenance validation of the deck
node provenance.js     # writes data/PROVENANCE.md
node build-content.js  # merges authored content → data/lessons.js, vignettes.js, disorders.js, tutorial.js
```

Authored (subagent-generated) source content lives in:
- `pipeline/authored/*.js` (15 files) — per-class med overlays merged into the deck by `build.js`
  (called by `run.js`). Each file: `export default { <molId>: {…schema fields…} }`. Contract:
  `pipeline/authored/_CONTRACT.md`.
- `pipeline/lessons/*.js` (14 files) — per-class lessons → `data/lessons.js`. Contract (v2):
  `pipeline/lessons/_CONTRACT.md`.
- `pipeline/vignettes/*.js` (6 files) — cross-med vignettes → `data/vignettes.js`. Contract:
  `pipeline/vignettes/_CONTRACT.md`. (`anxiety_spectrum.js` + `special_populations_interactions.js`
  were the Round-4 additions.)
- `pipeline/disorders/*.js` (5 files) — disorder pages → `data/disorders.js`. Contract:
  `pipeline/disorders/_CONTRACT.md`.
- `pipeline/tutorial-script.js` — the single source of truth for tutorial steps → `data/tutorial.js`.

**To re-author content with subagents** (the established pattern): read the relevant `_CONTRACT.md`,
fan out one general-purpose subagent per class file (they overwrite `pipeline/<kind>/<file>.js`,
grounded in `data/deck.json`), then run `node build-content.js`. This is how all lessons/vignettes/
disorders were made. Safety rule: safety-critical facts must be grounded in the deck, never invented.

### Regenerating vignettes safely (users keep their progress)

Adding/regenerating vignettes never touches user progress — **content and state are fully
decoupled**:
- Vignettes are *content*: `data/vignettes.js` assigns `window.VIGNETTES`, loaded fresh by a
  `<script>` tag each launch. Practice reads them live (`exercises.js` → `window.VIGNETTES`).
- Progress is *state*: everything per-user lives in `localStorage['pml.state.v1']` (streak, XP,
  learned meds, SRS schedule, profile). **No vignette id is ever stored there** — vignettes are
  picked fresh per session, and the only vignette-related stat (`stats.vignetteAces`) is a plain
  counter, not keyed by id. So you can add, remove, or renumber vignettes with zero risk of
  orphaning or wiping state.

The loop to add more:
1. Drop a new file in `pipeline/vignettes/` (e.g. `pipeline/vignettes/mynew.js`) following
   `_CONTRACT.md`, grounded in `data/deck.json` (or hand a subagent that prompt — the established
   pattern). Ids must be unique; each `answer` must be one of exactly 4 real deck `generic` names.
2. `cd pipeline && node build-content.js` — merges every `pipeline/vignettes/*.js`, de-dupes by id,
   **drops malformed entries**, and rewrites `data/vignettes.js`. It prints the new count and warns
   on unknown med-id refs.
3. Reload the app (hard-reload / bump the dev port to bust the `<script>` cache). New vignettes
   appear in Practice immediately; the resident's streak/XP/learned meds are exactly as they were.

The same decoupling holds for regenerating the whole deck (`node run.js`): `store.initDeck` appends
any newly added meds to the seeded order and creates fresh card records **without** clobbering
existing ones. The one true reset is Settings → Reset (or `localStorage.clear()`); use
Settings → Export/Import to move a resident's progress between devices/origins.

## Voice narration (ElevenLabs) — optional, offline

The tutorial always works as text. To add voice: each step plays `app/audio/<step-id>.mp3` if it
exists and narration is on (Settings → Tutorial narration; `settings.voice`). Generate the clips
(pre-generated + committed so playback stays offline — no runtime CDN):

```bash
export ELEVENLABS_API_KEY=your_key          # your key; read from env only, never committed
export ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM   # optional stock voice ("Rachel")
cd pipeline && node build-tutorial-audio.js  # writes app/audio/<id>.mp3 for each step; commit them
```

The definitive tutorial is 10 steps, ~1,262 chars total — well under the ElevenLabs free budget
(~10k credits). Uses a STOCK voice (never a cloned real person). See `app/audio/README.md`.

## macOS `.app` (BUILT — Round 6): native WKWebView wrapper

A double-clickable **`Titrate.app`** — a tiny **native** wrapper that embeds the whole web app in a
`WKWebView`. WebKit ships with every Mac, so there are **no runtime dependencies** (no browser, no
server, no Python/Node) and it runs fully offline. This replaced the old server + Chromium plan —
it's simpler, more robust, and truly "send to anyone." `index.html` double-click still works too.

Everything lives in [`app-package/`](app-package/) (see [app-package/README.md](app-package/README.md)):
- `src/main.swift` — `NSWindow` + `WKWebView`; a `WKURLSchemeHandler` serves the bundled assets over
  **`titrate://app/…`** (with HTTP-range support so the tutorial MP3s play); persistent data store;
  minimal menu. Universal (arm64 + x86_64), ad-hoc code-signed.
- `src/make-icon.swift` — draws the purple-square/white-ψ icon → PNG → `iconutil` → `AppIcon.icns`.
- `Info.plist` — `com.titrate.app`, icon, min macOS 11.
- `make-app.sh` — reproducible assembler. Run **`app-package/make-app.sh`**; it compiles, bundles the
  current `index.html` + `app/` + the five `data/*.js`, signs, and writes `dist/Titrate.app` +
  **`dist/Titrate-macOS.zip`** (the zip is the sendable artifact; committed to the repo).

**Storage persists across launches (verified).** The custom scheme gives a stable origin
(`titrate://app`), so `WKWebsiteDataStore.default()` keeps `localStorage` on disk under
`~/Library/WebKit/com.titrate.app/…/LocalStorage/localstorage.sqlite3`. Confirmed the state's
`createdAt`/`seed` are unchanged across quit + relaunch (i.e. it reloads, never resets).

**Origin caveat / migration.** `titrate://app` is a DIFFERENT origin than `file://` (double-clicked
`index.html`) or `http://localhost` — progress does not auto-carry between them. Move it with the
built-in **Settings → Export / Import** (JSON).

**Gatekeeper.** The app is ad-hoc signed (required so Apple Silicon will launch it) but **not**
notarized. First launch on another Mac: right-click → Open → Open (once), or
`xattr -dr com.apple.quarantine Titrate.app`. Frictionless double-click needs Developer-ID signing +
notarization (a paid Apple account) — out of scope unless the user has one. Do NOT switch to
Electron/Tauri/npm (violates the vanilla/no-build constraint); the native WKWebView wrapper is the
minimal approach.

## Known limitations / gotchas

- Preview pane won't run JS for `file://` — always test over a localhost server (above).
- Some `seriousAE`/`syndromes` source-text excerpts are grounded in the label's generic
  "Clinical Worsening/Suicide Risk" boilerplate rather than the specific AE (values are correct;
  the shown excerpt is weakly matched). Would improve by refining excerpt selection in `build.js`
  then re-running `node run.js`.
- `data/raw/` (pipeline API cache) is gitignored; `node run.js` re-fetches from live APIs.
- Regenerating the deck refreshes `lastVerified` dates and may shift a few source-grounded vs
  flagged fields as labels change upstream.
