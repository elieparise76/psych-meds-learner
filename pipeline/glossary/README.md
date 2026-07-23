# pipeline/glossary — the clinical hover-glossary

Generates [`data/glossary.js`](../../data/glossary.js) → `window.GLOSSARY`, the set of clinical
words/expressions (symptoms, signs, syndromes, adverse effects, conditions, key pharmacology
concepts) that the app lightly underlines in prose everywhere and defines on hover. Terms that map
to a Wiki page (`data/disorders.js`) also offer a **"Click to learn more"** link.

Runtime engine: [`app/js/glossary.js`](../../app/js/glossary.js) (matcher + DOM decorator +
tooltip + MutationObserver auto-apply + `#wiki=<id>` deep-linking). Styles under
"Clinical hover-glossary" in `app/css/app.css`. Loaded in `index.html`; booted from `main.js`.

## Files

- `extract.js` — pulls all learner-facing prose from `data/*.js` into `corpus_full.txt`, a
  frequency table, and 8 balanced `slice_NN.txt` files for the authoring subagents. (Writes to the
  working dir; used only when re-authoring.)
- `EXTRACTION_PROMPT.md` — the instruction each authoring subagent follows: read a slice, emit
  `raw/out_NN.json` (`{term, aliases[], def, wikiId, category}`), accuracy-first, omit-if-unsure.
- `raw/out_01.json … out_08.json` — the committed subagent output (1,227 raw entries). These make
  the build **reproducible without re-running the model**.
- `raw/wiki_entries.json` — the 27 Wiki disorder/syndrome pages (id/name/aka) terms map to.
- `overrides.json` — manual clinical-QA fixes applied after consolidation (fix a definition, drop
  an over-broad alias, or drop a term). Keyed by canonical term.
- `build.js` — **deterministic**: merges `raw/out_*.json`, consolidates synonyms (union-find on
  alias overlap), applies alias hygiene (drops generic English words that would over-flag),
  computes corpus frequency, applies `overrides.json`, and writes `data/glossary.js`.

## Regenerate

```bash
node pipeline/glossary/build.js     # raw/out_*.json + overrides.json -> data/glossary.js (deterministic)
```

To re-author terms from scratch (e.g. after big content changes): run `node extract.js`, fan out
one subagent per `slice_NN.txt` following `EXTRACTION_PROMPT.md` (each writes `raw/out_NN.json`),
optionally run a clinical-QA subagent to refresh `overrides.json`, then `node build.js`.

## Safety

Definitions are pedagogical but must be **clinically accurate** (per the repo's data rules).
Authoring subagents are told to omit any term they cannot define confidently, and a clinical-QA
pass (recorded in `overrides.json`) corrects/removes anything wrong or misleading. The glossary is
a **presentation layer** — it never mutates the deck or user state.
