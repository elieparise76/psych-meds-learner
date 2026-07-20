# data/PROVENANCE.md

_Placeholder — populated by `pipeline/run.js` in the deck-generation milestone (M4)._

This report will summarise, once the deck is generated:

- **Coverage** — how many molecules were extracted per class, and which were flagged
  `US-only — for awareness`.
- **Source breakdown** — for each safety-critical field category (boxed warnings,
  contraindications, therapeutic levels, monitoring), which source confirmed it
  (DPD / monograph / openFDA label / DailyMed) and the `lastVerified` date.
- **Model-authorship disclosures** — every field that fell back to model authorship because no
  source could confirm it, so the resident knows exactly what to double-check. These carry
  `verifyFlag: true` in the deck and surface a verify badge in the app.

See [../DATA_SOURCES.md](../DATA_SOURCES.md) for the provenance model and the sources.
