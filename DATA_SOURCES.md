# DATA_SOURCES.md

Every source the pipeline draws on, what each contributes, how it is queried, and its
licensing. **Principle: extract what's dangerous to get wrong; synthesise what's
pedagogical — and cite everything.**

Each non-trivial field in a card carries a `source` (which source + a link) and a
`lastVerified` date. Safety-critical fields are extracted from source text, never authored
from memory. See [data/PROVENANCE.md](data/PROVENANCE.md) for the coverage report.

---

## 1. Health Canada — Drug Product Database (DPD)

- **What it is / contributes:** the authoritative **Canadian skeleton** — which molecules are
  approved in Canada, Canadian brand names, DINs, formulations/strengths, dosage form, route,
  schedule (controlled status), approval/marketing status, company. **This query decides what
  counts as Canadian and which drugs are in-scope.**
- **Access:** public JSON REST API, no key.
  - Base: `https://health-products.canada.ca/api/drug/`
  - Endpoints used: `drugproduct/`, `activeingredient/`, `form/`, `route/`, `status/`,
    `schedule/`, `company/`. Query by `?brandname=`, `?din=`, `?id=` (drug_code), `&type=json`.
  - Example: `drugproduct/?brandname=zoloft&type=json` → real DINs + companies.
- **Contributes to fields:** `brandsCanada`, `din`, `formulationsCanada`, `genericAvailable`,
  `controlledStatusCanada`, and the in-scope determination itself.
- **Licensing:** Open Government Licence – Canada. Public, reusable **with attribution**.

## 2. Health Canada — Product Monographs (reached via the DPD)

- **What it is / contributes:** the authoritative **Canadian clinical document**. Indications,
  dosing, contraindications, the **Serious Warnings and Precautions** box, adverse reactions,
  pharmacokinetics, interactions. **Safety-critical fields are extracted from here** where a
  machine-readable monograph is available.
- **Access:** monographs are reached from a DPD product record; the pipeline records the
  monograph URL / DPD product page as the citation. Monographs are largely PDF, so structured
  extraction is best-effort; where a field cannot be confirmed from the monograph, the
  pipeline falls back to the openFDA label (source noted) or marks the field `unknown` +
  `verifyFlag`.
- **Contributes to fields:** `boxedWarning`, `contraindications`, `approvedCanada`, dosing,
  `seriousAE`, PK, interactions.
- **Licensing:** Crown copyright, reproducible with attribution; the pipeline stores citations
  and extracted excerpts, not wholesale copies.

## 3. openFDA — `drug/label` and `drug/event`

- **What it is / contributes:** **American enrichment and cross-reference.**
  - `drug/label` (Structured Product Labeling fields) gives labeled sections we can extract
    verbatim: `boxed_warning`, `contraindications`, `warnings_and_cautions`,
    `dosage_and_administration`, `adverse_reactions`, `drug_interactions`,
    `clinical_pharmacology` (PK), `use_in_specific_populations`, `mechanism_of_action`.
  - `drug/event` (FAERS adverse-event reports) gives **adverse-event term frequencies** —
    makes vignettes precise ("most commonly reported…").
- **Access:** public JSON REST API, optional key for higher rate limits.
  - Label: `https://api.fda.gov/drug/label.json?search=openfda.generic_name:"sertraline"&limit=1`
  - Events: `https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:"sertraline"&count=patient.reaction.reactionmeddrapt.exact`
- **Contributes to fields:** `boxedWarning` (cross-check), `moa`, PK fields, `commonSE`/
  `seriousAE` (FAERS frequencies), `majorDDI`.
- **Caveat:** these are **US labels** — Canadian labeling can differ. openFDA is used to
  cross-reference and to fill gaps the Canadian monograph didn't yield, always with the source
  noted so Canadian-vs-US divergence is visible.
- **Licensing:** U.S. public domain (CC0-like); openFDA terms require the standard disclaimer.
  Reusable.

## 4. DailyMed (SPL)

- **What it is / contributes:** additional **American structured label** detail (NLM's SPL
  repository) — used when openFDA's copy is thin or when a specific SPL set-id gives cleaner
  section text.
- **Access:** public REST/SPL.
  - Search: `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=sertraline`
  - SPL: `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/{setid}.json`
- **Contributes to fields:** supplemental label sections, cross-reference for `boxedWarning`,
  monitoring, interactions.
- **Licensing:** U.S. public domain. Reusable.

## 5. CANMAT guidelines (line-of-therapy positioning)

- **What it is / contributes:** **Canadian line-of-therapy positioning** (1st / 2nd / 3rd
  line) — high-yield and genuinely Canadian. Covers:
  - **MDD** — CANMAT 2016, **2023 update**.
  - **Bipolar** — CANMAT/ISBD **2018** + **2023 evidence update**.
  - **Anxiety disorders** — CANMAT/Canadian anxiety guidelines.
  - **Perinatal** — CANMAT **2024**.
- **Access:** peer-reviewed publications (not an API). The pipeline stores the **citation**
  (journal, year, DOI/URL) for each line-of-therapy claim. Because these are copyrighted
  publications, only the *positioning fact* (e.g. "escitalopram — first-line for MDD, CANMAT
  2023") is recorded with its citation; the guideline text is not copied.
- **Contributes to fields:** `canmatLineOfTherapy`, `approvedPopulations` context, perinatal
  entries in `pregnancy`.
- **Licensing:** copyrighted journal content — **cited, never copied**. Line-of-therapy
  positioning that is synthesised from the guideline is tagged as such in provenance.

---

## The CPS is licensed — do not copy it in

The **Compendium of Pharmaceuticals and Specialties (CPS)** is a licensed commercial product.
It is **never copied into this repository** — only linked where a resident would consult it.
All extractable clinical content here comes from the public sources above.

## Provenance model

- **Source-extracted (safety-critical):** boxed warnings, contraindications, therapeutic
  levels, overdose lethality, monitoring protocols, DINs, formulations. Pulled from DPD /
  monograph / openFDA / DailyMed source text, with the excerpt and link stored.
- **Synthesised-but-cited (pedagogical):** mnemonics, confusables, pearls, vignettes,
  pronunciation, class differentiators. Model-authored, but tagged with the sources of the
  underlying facts they test.
- **Unknown:** when no source confirms a safety-critical fact, the field is left `unknown`
  and flagged (`verifyFlag: true`) rather than guessed.

`lastVerified` records the date each card's sources were last queried. Re-running
`pipeline/run.js` refreshes it.

## Attribution

- Health Canada Drug Product Database — © Government of Canada, Open Government Licence – Canada.
- Health Canada Product Monographs — © Her Majesty the Queen in Right of Canada.
- openFDA — U.S. Food & Drug Administration, openFDA. Data are not for clinical decisions.
- DailyMed — U.S. National Library of Medicine.
- CANMAT — cited per publication; not reproduced.
