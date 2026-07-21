# HANDOFF.md — full project state & how to continue

Read this first if you're picking up the project fresh. It captures everything: what's built,
how it fits together, how to regenerate the generated content, and the concrete plan for the
one remaining piece (the macOS `.app`). Companion docs: [CLAUDE.md](CLAUDE.md) (working rules),
[ARCHITECTURE.md](ARCHITECTURE.md) (design), [DATA_SOURCES.md](DATA_SOURCES.md),
[DECK_MANIFEST.md](DECK_MANIFEST.md), [data/PROVENANCE.md](data/PROVENANCE.md).

## What this is

`psych-meds-learner` — a **local, offline, single-page app** that teaches a Canadian psychiatry
resident their psychopharmacology, Duolingo-style. Vanilla HTML/CSS/JS, **no build step, no
framework, runs from `file://` by double-clicking `index.html`** (classic `<script>` tags only —
NEVER ES modules or `fetch()` for local data; see CLAUDE.md "Tech constraints"). All per-user
state is in `localStorage`; JSON export/import for backup. GitHub:
`elieparise76/psych-meds-learner` (public).

**It is a learning aid, not a prescribing reference.** Safety-critical facts are extracted from
real sources and cited; model-authored fallbacks are flagged (`verifyFlag`, ⚠ badge).

## Current state — everything that's built (all done, committed, pushed)

- **Deck**: 120 Canadian-centered psych meds, source-attributed (Health Canada DPD + openFDA
  label/FAERS + DailyMed + CANMAT). 100% schema-valid; 84% of safety-critical fields
  source-grounded, rest flagged. `data/deck.js` → `window.MEDS`.
- **Lessons (v2, clinical-first)**: 120 per-med Duolingo lessons — general→specific, ~7 cards
  each, ~half "Neuro explains" cards + ~half quick checks. Mechanism is de-emphasized (one brief
  step). `data/lessons.js` → `window.LESSONS`.
- **Vignettes**: 86 cross-med board-style cases across 26 disorders, each referencing meds + a
  disorder (for wiki interlinking). `data/vignettes.js` → `window.VIGNETTES`.
- **Wiki**: interlinked reference — rich med pages + 27 disorder/syndrome pages (original prose,
  DSM-5 criteria NOT copied; CANMAT-aligned treatment linking to meds). Calm search-first hub
  (class tiles / condition tiles / syndrome tiles; "Full list & filters" opens the dex).
  Med↔disorder cross-links both ways; `linkify()` makes med/condition names clickable in prose
  and vignette explanations. `data/disorders.js` → `window.DISORDERS`.
- **Study loop**: seeded one-new-med-a-day daily engine (manual pick counts toward streak),
  SM-2 lite spaced review (Flashcard surface), adaptive **Practice** (clinical-first, 7 exercise
  types — mcq, type-the-answer, matching, reverse, cloze, confusables, vignettes; tap-to-build
  was removed), **Cram** (timed), **Compare v2** (pick any 2–4 meds → aligned clinical versus
  table).
- **Progression / game feel**: XP, levels, streak (no streak-freeze — removed), per-med mastery
  tiers, class mastery map, achievements, session combo, daily quests, confetti/toast
  celebrations, 17 synthesized sound effects wired throughout (on by default), dark + light.
- **Profile**: first-run name + one of 8 hand-drawn SVG animal avatars (in `profile.js`); shown
  in the header; reset re-runs it.
- **Tutorial**: guided walkthrough with an animated SVG mascot **Neuro** (text; optional voice —
  see below). `data/tutorial.js` → `window.TUTORIAL`; offered on first run, replay via header `?`.
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
· `srs` (SM-2 lite) · `game` (XP/levels/combo/mastery/achievements/quests) · `daily` (seeded daily
engine + streak/goal) · `render` (shared fact groups + provenance badges + source text) · `profile`
(first-run + 8 SVG avatars) · `flashcard` (review flip + self-rate) · `lesson` (v2 learning flow —
Neuro explain+check) · `exercises` (clinical-first exercise generators) · `practice` (adaptive
session runner + all exercise renderers) · `catalog` (the filterable "dex" grid; `detail` delegates
to `wiki.medPage`) · `wiki` (hub + med pages + disorder pages + linkify + reverse index) · `compare`
(v2 versus picker) · `cram` (timed) · `progress` (class map + achievements + stats) · `tutorial`
(Neuro walkthrough + Neuro mascot SVG, reused by lessons) · `ui` (router, HUD, home, celebrations,
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
- `pipeline/vignettes/*.js` (4 files) — cross-med vignettes → `data/vignettes.js`. Contract:
  `pipeline/vignettes/_CONTRACT.md`.
- `pipeline/disorders/*.js` (5 files) — disorder pages → `data/disorders.js`. Contract:
  `pipeline/disorders/_CONTRACT.md`.
- `pipeline/tutorial-script.js` — the single source of truth for tutorial steps → `data/tutorial.js`.

**To re-author content with subagents** (the established pattern): read the relevant `_CONTRACT.md`,
fan out one general-purpose subagent per class file (they overwrite `pipeline/<kind>/<file>.js`,
grounded in `data/deck.json`), then run `node build-content.js`. This is how all lessons/vignettes/
disorders were made. Safety rule: safety-critical facts must be grounded in the deck, never invented.

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

## Round 3 (NOT YET BUILT): macOS `.app` packaging

Goal (user's choice): a double-clickable **`PsychMeds.app`** that starts a bundled **local static
server** and opens the user's default **Chromium browser in `--app` mode** (borderless window, no
tabs), pointing at `http://localhost:<stable-port>`. Keeps localStorage + every visual/sound
feature. `index.html` double-click keeps working too.

**Why a server (not just file://):** a stable `http://localhost:PORT` origin makes `localStorage`
persist reliably across launches; `file://` localStorage in Chromium can be flaky/cleared.

**Migration note:** the `.app` runs at origin `http://localhost:PORT`, a DIFFERENT origin than
`file://`, so existing `file://` progress does NOT carry over. The migration path is the built-in
**Settings → Export / Import** (JSON). Pin a STABLE port so relaunches keep the same origin/state.

**Suggested implementation:**
1. `app-package/launch.sh` (the bundle executable): pick a fixed port (e.g. `PORT=8971`); if
   already serving, reuse; else start a static server rooted at the app files:
   - try `python3 -m http.server $PORT --directory <appdir>` (macOS commonly has python3 via CLT),
   - else `node <appdir>/server.js` (tiny committed static server as a fallback),
   - else fall back to opening `file://<appdir>/index.html` (works, minus the stable origin).
   Then open a Chromium browser in app mode, trying in order:
   `open -na "Google Chrome" --args --app="http://localhost:$PORT/index.html" --user-data-dir="$HOME/Library/Application Support/PsychMedsLearner"`
   then Microsoft Edge / Brave Browser / Arc; else `open "http://localhost:$PORT/index.html"`.
2. `PsychMeds.app/Contents/`:
   - `MacOS/PsychMeds` → the launcher (shell script with `#!/bin/bash`, `chmod +x`).
   - `Info.plist` (CFBundleName=PsychMeds Learner, CFBundleExecutable=PsychMeds, CFBundleIconFile,
     LSUIElement optional).
   - `Resources/AppIcon.icns` (generate from the ψ mark), and either the app files under
     `Resources/app/` or the launcher `cd`s to the repo. Committing the app files inside the bundle
     makes it self-contained.
   - A committed `make-app.sh` that assembles the bundle from the repo (so it's reproducible).
3. **Gatekeeper**: an unsigned `.app` downloaded from the internet is quarantined. Document:
   right-click → Open (first launch), or `xattr -dr com.apple.quarantine PsychMeds.app`. (Signing/
   notarization needs an Apple Developer account — out of scope unless the user has one.)
4. **GitHub**: commit `app-package/` (launcher, Info.plist, make-app.sh, tiny server.js). A user
   clones/downloads, runs `make-app.sh` (or the bundle is committed directly), then double-clicks
   `PsychMeds.app`. Document all this in README.

Keep it dependency-light and offline; do NOT introduce Electron/Tauri/npm build steps (violates the
vanilla/no-build constraint). The server + browser-app-mode approach is deliberately minimal.

## Known limitations / gotchas

- Preview pane won't run JS for `file://` — always test over a localhost server (above).
- Some `seriousAE`/`syndromes` source-text excerpts are grounded in the label's generic
  "Clinical Worsening/Suicide Risk" boilerplate rather than the specific AE (values are correct;
  the shown excerpt is weakly matched). Would improve by refining excerpt selection in `build.js`
  then re-running `node run.js`.
- `data/raw/` (pipeline API cache) is gitignored; `node run.js` re-fetches from live APIs.
- Regenerating the deck refreshes `lastVerified` dates and may shift a few source-grounded vs
  flagged fields as labels change upstream.
