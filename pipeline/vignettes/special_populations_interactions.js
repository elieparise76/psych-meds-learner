// Board-style (Royal College / FRCPC) cross-med vignettes concentrating on SPECIAL
// POPULATIONS (pregnancy/perinatal, geriatric, renal/hepatic impairment) and DRUG-DRUG
// INTERACTIONS (CYP inhibitors/inducers, MAOI washout & serotonergic combinations,
// QT-additive risk, lithium-clearance interactions) plus switching/washout. These themes
// are underrepresented in the other vignette files. Every drug fact is grounded in
// data/deck.json (pregnancy/geriatric text, majorDDI, metabolism, maoiWashout,
// renalHepaticAdjustment, therapeutic levels). See _CONTRACT.md.

export default [
  // ─────────────────────────── Pregnancy / perinatal ───────────────────────────
  {
    id: "va_spop_preg_valproate_avoid",
    stem: "A 26-year-old woman with bipolar I disorder who can become pregnant and does not use reliable contraception needs a mood stabilizer. Which agent should be AVOIDED because it is the most teratogenic (neural-tube defects and the lowest childhood IQ)?",
    options: ["Valproate / Divalproex", "Lamotrigine", "Lithium", "Quetiapine"],
    answer: "Valproate / Divalproex",
    explanation: "Valproate/divalproex is the most teratogenic mood stabilizer — neural-tube defects plus dose-dependent neurodevelopmental harm (lowest childhood IQ, increased autism) — so it is avoided in anyone who can become pregnant. Lamotrigine is comparatively pregnancy-safer, and quetiapine/lithium carry lower structural risk (lithium's concern is Ebstein anomaly).",
    meds: ["valproate", "lamotrigine", "lithium", "quetiapine"],
    disorder: "Bipolar I disorder",
    difficulty: 1,
    tags: ["pregnancy", "contraindication"],
    source: { name: "openFDA/monograph valproate label — pregnancy; CANMAT/ISBD 2018", origin: "openfda" }
  },
  {
    id: "va_spop_preg_sertraline_preferred",
    stem: "A 30-year-old at 8 weeks' gestation has moderate major depression and needs an antidepressant. Considering reproductive-safety data and low breast-milk transfer for continued use during lactation, which SSRI is a preferred first choice?",
    options: ["Sertraline", "Paroxetine", "Fluvoxamine", "Fluoxetine"],
    answer: "Sertraline",
    explanation: "Sertraline is among the preferred SSRIs in pregnancy/lactation given its data and low milk transfer (CANMAT perinatal). Paroxetine is generally avoided (cardiac malformation signal), fluvoxamine has more limited perinatal data, and fluoxetine's very long half-life secretes more into milk.",
    meds: ["sertraline", "paroxetine", "fluvoxamine", "fluoxetine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["pregnancy", "first-line"],
    source: { name: "CANMAT perinatal 2024; deck pregnancy/lactation fields", origin: "canmat" }
  },
  {
    id: "va_spop_preg_paroxetine_avoid",
    stem: "A woman planning pregnancy asks which SSRI carries a reported association with fetal cardiac (septal) malformations and is generally avoided in the first trimester. Which agent is she describing?",
    options: ["Paroxetine", "Sertraline", "Citalopram", "Escitalopram"],
    answer: "Paroxetine",
    explanation: "Paroxetine has been associated with cardiac malformations (e.g., septal defects) in some studies and is generally avoided in pregnancy. Sertraline, citalopram, and escitalopram show no consistent major teratogenic signal and are more reasonable perinatal choices.",
    meds: ["paroxetine", "sertraline", "citalopram", "escitalopram"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["pregnancy", "contraindication"],
    source: { name: "CANMAT perinatal 2024; deck paroxetine pregnancy field", origin: "canmat" }
  },
  {
    id: "va_spop_preg_lithium_ebstein",
    stem: "A 28-year-old with bipolar I who wants to continue a mood stabilizer through the first trimester should be counselled about a small increased risk of a specific cardiac malformation (Ebstein anomaly) and offered fetal echocardiography. Which drug carries this specific association?",
    options: ["Lithium", "Lamotrigine", "Quetiapine", "Valproate / Divalproex"],
    answer: "Lithium",
    explanation: "First-trimester lithium is linked to Ebstein anomaly (tricuspid valve malformation); absolute risk is lower than historically taught, and if continued, levels must be watched closely (clearance rises in pregnancy then falls abruptly at delivery). Valproate's signature is neural-tube defects, not Ebstein; lamotrigine and quetiapine lack this specific cardiac association.",
    meds: ["lithium", "lamotrigine", "quetiapine", "valproate"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["pregnancy"],
    source: { name: "openFDA/DailyMed lithium label — pregnancy (Ebstein anomaly)", origin: "openfda" }
  },

  // ─────────────────────────── Geriatric ───────────────────────────
  {
    id: "va_spop_geri_benzo_lorazepam",
    stem: "An 82-year-old with disabling anxiety has failed non-pharmacologic measures, and a short course of a benzodiazepine is judged unavoidable. To minimize accumulation and fall/delirium risk, which agent is preferred because it is glucuronidated with no active metabolite?",
    options: ["Diazepam", "Lorazepam", "Flurazepam", "Clonazepam"],
    answer: "Lorazepam",
    explanation: "Lorazepam is cleared by glucuronidation (UGT) to an inactive metabolite with no oxidative CYP step, so it does not accumulate the way long-acting/active-metabolite agents do. Diazepam (desmethyldiazepam), flurazepam, and clonazepam are long-acting and accumulate in older adults, worsening falls, sedation, and confusion.",
    meds: ["lorazepam", "diazepam", "flurazepam", "clonazepam"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["elderly"],
    source: { name: "Beers-type reasoning; deck geriatric/metabolism fields", origin: "authored" }
  },
  {
    id: "va_spop_geri_amitriptyline_avoid",
    stem: "A 76-year-old with recurrent depression, a history of falls, constipation, and mild cognitive impairment needs an antidepressant. Which agent is best AVOIDED because it is the most anticholinergic/orthostatic and is on Beers-type lists?",
    options: ["Amitriptyline", "Sertraline", "Mirtazapine", "Bupropion"],
    answer: "Amitriptyline",
    explanation: "Amitriptyline is the most anticholinergic and orthostatic antidepressant (falls, confusion, constipation, urinary retention) and is Beers-listed — avoid in older adults; if a TCA is required, nortriptyline is preferred. Sertraline, mirtazapine, and bupropion are far less anticholinergic and more appropriate here.",
    meds: ["amitriptyline", "sertraline", "mirtazapine", "bupropion"],
    disorder: "Major depressive disorder",
    difficulty: 1,
    tags: ["elderly", "contraindication"],
    source: { name: "Beers-type reasoning; deck amitriptyline geriatric field", origin: "authored" }
  },
  {
    id: "va_spop_geri_ssri_hyponatremia",
    stem: "A 79-year-old woman started on an SSRI three weeks ago for depression presents with new confusion, unsteadiness, and headache. Serum sodium is 124 mmol/L; she is euvolemic with concentrated urine. What best explains this picture?",
    options: ["SSRI-induced hyponatremia (SIADH)", "Serotonin syndrome", "Lithium toxicity", "Anticholinergic toxicity"],
    answer: "SSRI-induced hyponatremia (SIADH)",
    explanation: "SSRIs are a common cause of SIADH/hyponatremia, especially in older women within the first weeks of therapy — euvolemic hyponatremia with inappropriately concentrated urine fits. Serotonin syndrome causes clonus/hyperthermia (not isolated low sodium), lithium toxicity gives coarse tremor/ataxia, and anticholinergic toxicity gives dry skin and delirium without hyponatremia.",
    meds: ["sertraline"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["elderly", "hyponatremia"],
    source: { name: "FRCPC geriatric psychopharmacology; deck SSRI geriatric fields", origin: "authored" }
  },

  // ─────────────────────────── Renal / hepatic impairment ───────────────────────────
  {
    id: "va_spop_renal_lithium",
    stem: "A 74-year-old on bipolar maintenance develops chronic kidney disease with a declining eGFR. Which maintenance agent demands the greatest caution and dose reduction here because it is excreted unchanged by the kidney and accumulates as clearance falls?",
    options: ["Lithium", "Valproate / Divalproex", "Lamotrigine", "Quetiapine"],
    answer: "Lithium",
    explanation: "Lithium is not metabolized — it is renally cleared unchanged, so falling GFR (and the elderly's reduced clearance) raises the level toward its narrow toxic threshold (>1.5 mmol/L). Valproate, lamotrigine, and quetiapine are hepatically metabolized and are not primarily renally eliminated.",
    meds: ["lithium", "valproate", "lamotrigine", "quetiapine"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["renal"],
    source: { name: "openFDA/DailyMed lithium label — renal elimination; deck metabolism field", origin: "openfda" }
  },
  {
    id: "va_spop_hepatic_oxazepam",
    stem: "A 58-year-old with decompensated alcohol-related cirrhosis needs a benzodiazepine to manage alcohol withdrawal. Which agent is preferred because it is cleared by glucuronidation and is spared the impaired oxidative metabolism of liver disease?",
    options: ["Diazepam", "Chlordiazepoxide", "Oxazepam", "Clonazepam"],
    answer: "Oxazepam",
    explanation: "Oxazepam undergoes glucuronidation only (no oxidative CYP step), so its clearance is preserved in hepatic impairment — preferred alongside lorazepam/temazepam (the 'LOT' agents). Diazepam and chlordiazepoxide are long-acting, oxidatively metabolized, and accumulate active metabolites in liver disease.",
    meds: ["oxazepam", "diazepam", "chlordiazepoxide", "clonazepam"],
    disorder: "Alcohol use disorder",
    difficulty: 2,
    tags: ["hepatic"],
    source: { name: "Deck renalHepaticAdjustment/metabolism fields (glucuronidated benzodiazepines)", origin: "authored" }
  },

  // ─────────────────────────── Drug-drug interactions: CYP ───────────────────────────
  {
    id: "va_spop_ddi_fluvoxamine_clozapine",
    stem: "A patient with schizophrenia stabilized on clozapine develops prominent obsessive-compulsive symptoms, and an SSRI is being considered. Which SSRI is the MOST dangerous choice here because it can raise clozapine levels toward toxicity/seizures?",
    options: ["Fluvoxamine", "Sertraline", "Escitalopram", "Citalopram"],
    answer: "Fluvoxamine",
    explanation: "Fluvoxamine is a potent CYP1A2 inhibitor, and clozapine is a 1A2 substrate — combining them can dramatically raise clozapine levels, precipitating toxicity and seizures. Sertraline, escitalopram, and citalopram have minimal 1A2 inhibition and are safer co-prescriptions.",
    meds: ["fluvoxamine", "clozapine", "sertraline", "escitalopram", "citalopram"],
    disorder: "Schizophrenia",
    difficulty: 3,
    tags: ["interaction"],
    source: { name: "Deck fluvoxamine/clozapine majorDDI (CYP1A2 inhibition)", origin: "openfda" }
  },
  {
    id: "va_spop_ddi_carbamazepine_ocp",
    stem: "A 23-year-old woman with bipolar I who relies on a combined oral contraceptive is starting a mood stabilizer. Which agent most requires counselling about contraceptive FAILURE (advise a non-hormonal method) because it is a potent enzyme inducer?",
    options: ["Carbamazepine", "Lamotrigine", "Lithium", "Valproate / Divalproex"],
    answer: "Carbamazepine",
    explanation: "Carbamazepine is a potent CYP3A4 inducer that accelerates metabolism of estrogen/progestin, lowering contraceptive efficacy — counsel a non-hormonal method. Lithium is renally cleared (no induction), valproate is an inhibitor rather than an inducer, and lamotrigine does not reduce contraceptive levels (the interaction runs the other way — estrogen lowers lamotrigine).",
    meds: ["carbamazepine", "lamotrigine", "lithium", "valproate"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["interaction"],
    source: { name: "Deck carbamazepine majorDDI (3A4 induction → contraceptive failure)", origin: "openfda" }
  },
  {
    id: "va_spop_ddi_valproate_lamotrigine",
    stem: "A patient stabilized on lamotrigine for bipolar maintenance is about to have a second agent added. Which addition would roughly DOUBLE the lamotrigine level and sharply raise the risk of Stevens-Johnson syndrome, mandating that the lamotrigine dose be halved?",
    options: ["Valproate / Divalproex", "Carbamazepine", "Lithium", "Sertraline"],
    answer: "Valproate / Divalproex",
    explanation: "Valproate inhibits lamotrigine glucuronidation, roughly doubling its level and increasing SJS risk — the lamotrigine dose must be halved when they are combined. Carbamazepine does the opposite (induces glucuronidation, lowering lamotrigine); lithium and sertraline do not meaningfully alter lamotrigine levels.",
    meds: ["valproate", "lamotrigine", "carbamazepine", "lithium", "sertraline"],
    disorder: "Bipolar I disorder",
    difficulty: 3,
    tags: ["interaction"],
    source: { name: "Deck valproate/lamotrigine majorDDI (glucuronidation inhibition; SJS)", origin: "openfda" }
  },

  // ─────────────────── Interaction toxidromes & QT (recognise / avoid) ───────────────────
  {
    id: "va_spop_ddi_lithium_nsaid_toxicity",
    stem: "A 62-year-old stable on lithium starts regular ibuprofen for arthritis. Ten days later she has a coarse tremor, unsteady gait, slurred speech, and confusion. Which is the most likely diagnosis?",
    options: ["Lithium toxicity", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity"],
    answer: "Lithium toxicity",
    explanation: "NSAIDs reduce renal lithium clearance and raise the level (as thiazides and ACE inhibitors/ARBs do), producing the classic toxicity picture: coarse tremor, ataxia, dysarthria, and confusion. Serotonin syndrome brings clonus/hyperthermia, NMS brings lead-pipe rigidity over days, and anticholinergic toxicity gives dry flushed skin — none fit an NSAID added to lithium.",
    meds: ["lithium"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["interaction", "overdose"],
    source: { name: "openFDA/DailyMed lithium label — drug interactions (NSAID)", origin: "openfda" }
  },
  {
    id: "va_spop_ddi_maoi_serotonin",
    stem: "A patient on phenelzine for refractory depression is inadvertently started on sertraline without a washout. Within hours he develops agitation, diaphoresis, hyperthermia, and inducible lower-limb clonus with hyperreflexia. Which is the most likely syndrome?",
    options: ["Serotonin syndrome", "Neuroleptic malignant syndrome", "Hypertensive (tyramine) crisis", "Anticholinergic toxicity"],
    answer: "Serotonin syndrome",
    explanation: "An MAOI (phenelzine) combined with an SSRI is a classic, potentially fatal cause of serotonin syndrome — rapid onset with neuromuscular excitability (clonus, hyperreflexia, hyperthermia). A tyramine/hypertensive crisis instead follows sympathomimetics/aged foods and presents with severe hypertension and headache rather than clonus; NMS evolves over days with rigidity and hyporeflexia.",
    meds: ["phenelzine", "sertraline"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["serotonin", "interaction"],
    source: { name: "Deck phenelzine contraindicatedCombos/maoiWashout (serotonin syndrome)", origin: "openfda" }
  },

  // ─────────────────────────── Switching / washout & QT-additive ───────────────────────────
  {
    id: "va_spop_switch_fluoxetine_maoi_washout",
    stem: "A patient who failed an SSRI is being switched to an irreversible MAOI (phenelzine). Discontinuing which of these antidepressants requires an unusually long 5-week washout before the MAOI is started, because of its long-half-life active metabolite?",
    options: ["Fluoxetine", "Sertraline", "Venlafaxine", "Paroxetine"],
    answer: "Fluoxetine",
    explanation: "Fluoxetine (via norfluoxetine) has a very long half-life, so a 5-week washout is required before starting an MAOI to avoid serotonin syndrome — versus roughly 2 weeks for shorter-acting agents like sertraline, venlafaxine, and paroxetine. Starting the MAOI too early risks a fatal serotonergic reaction.",
    meds: ["fluoxetine", "sertraline", "venlafaxine", "paroxetine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["washout", "serotonin", "interaction"],
    source: { name: "Deck fluoxetine majorDDI / phenelzine maoiWashout (5-week rule)", origin: "openfda" }
  },
  {
    id: "va_spop_ddi_qt_ziprasidone",
    stem: "A patient with schizophrenia is also on methadone (a QT-prolonging opioid agonist) for opioid use disorder. Which antipsychotic is the LEAST appropriate choice because it prolongs the QT interval more than the other second-generation agents?",
    options: ["Ziprasidone", "Aripiprazole", "Olanzapine", "Lurasidone"],
    answer: "Ziprasidone",
    explanation: "Ziprasidone causes the greatest QT prolongation of the SGAs and should be avoided alongside another QT-prolonging drug such as methadone (additive torsades risk). Aripiprazole, olanzapine, and lurasidone have minimal QT effect and are safer partners here.",
    meds: ["ziprasidone", "aripiprazole", "olanzapine", "lurasidone", "methadone"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["qt", "interaction"],
    source: { name: "Deck ziprasidone cardiac/majorDDI (greatest SGA QT); methadone QT", origin: "openfda" }
  }
];
