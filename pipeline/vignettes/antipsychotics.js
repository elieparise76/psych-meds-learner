// Cross-med FRCPC-style vignettes — ANTIPSYCHOTIC PHARMACOTHERAPY
// Deliberately NEW angles versus pipeline/vignettes/psychosis.js (which already covers
// first-episode metabolic choice, clozapine for TRS/agranulocytosis/myocarditis/fluvoxamine,
// LAI-for-adherence, IM olanzapine + benzodiazepine, haloperidol in delirium, risperidone in
// BPSD, pimavanserin in PD psychosis, dystonia/akathisia/parkinsonism/TD basics, NMS
// recognition, prolactin switch, and ziprasidone QT).
// Every drug fact here is extracted from data/deck.json. See pipeline/vignettes/_CONTRACT.md.

export default [
  // ————————————————————————————————— SCHIZOPHRENIA —————————————————————————————————
  {
    id: "vd_ap_scz_ziprasidone_food_absorption",
    stem: "A 27-year-old man with schizophrenia was switched to ziprasidone to avoid further weight gain. Eight weeks later his positive symptoms are unchanged; pill counts and a pharmacy profile confirm adherence, but he takes both doses on an empty stomach because food 'makes him feel worse'. Which antipsychotic's bioavailability falls by roughly half when it is not taken with a meal of at least 500 kcal?",
    options: ["Ziprasidone", "Aripiprazole", "Risperidone", "Quetiapine"],
    answer: "Ziprasidone",
    explanation: "Ziprasidone absorption roughly doubles with a ≥500 kcal meal, so empty-stomach dosing is a classic cause of apparent treatment failure — the correction is food, not dose escalation. Aripiprazole and risperidone may be taken with or without food, and quetiapine's only food caveat is that the XR form should be taken without food or with a light meal.",
    meds: ["ziprasidone", "aripiprazole", "risperidone", "quetiapine"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["pharmacokinetics", "adherence", "metabolic"],
    source: { name: "Ziprasidone monograph (food effect)", origin: "monograph" }
  },
  {
    id: "vd_ap_scz_clozapine_ileus_anticholinergic",
    stem: "A 38-year-old on clozapine 400 mg/day for treatment-resistant schizophrenia has had no bowel movement for six days and now has abdominal distension, vomiting and absent bowel sounds. His neutrophil count is normal and he is afebrile. Which co-prescribed medication most likely contributed to this potentially fatal complication?",
    options: ["Benztropine", "Propranolol", "Lorazepam", "Amantadine"],
    answer: "Benztropine",
    explanation: "Clozapine causes severe gastrointestinal hypomotility that can progress to paralytic ileus or bowel obstruction and be fatal, and anticholinergics compound it — paralytic ileus is itself a listed serious adverse effect of benztropine. Propranolol, lorazepam and amantadine carry no comparable antimuscarinic bowel risk; prophylactic laxatives and active bowel monitoring are standard clozapine care.",
    meds: ["clozapine", "benztropine", "propranolol", "lorazepam", "amantadine"],
    disorder: "Schizophrenia",
    difficulty: 3,
    tags: ["clozapine", "interaction", "monitoring"],
    source: { name: "Clozapine label — GI hypomotility warning", origin: "openfda" }
  },
  {
    id: "vd_ap_scz_lai_oral_overlap",
    stem: "A 31-year-old with schizophrenia stabilized on oral risperidone is started on a long-acting injectable to support adherence, and the team asks how long to continue the oral medication. Which long-acting injectable is the exception in requiring roughly three weeks of continued oral antipsychotic coverage after the first injection?",
    options: ["Risperidone", "Paliperidone", "Haloperidol", "Flupenthixol"],
    answer: "Risperidone",
    explanation: "Risperidone LAI (Consta) has a ~3-week lag before meaningful drug release, so oral risperidone must be continued through that window — it is the exception among depots. Paliperidone palmitate does not need a 3-week oral overlap, and the decanoates (haloperidol, flupenthixol) are covered by a shorter oral overlap until steady state is reached.",
    meds: ["risperidone", "paliperidone", "haloperidol", "flupenthixol"],
    disorder: "Schizophrenia",
    difficulty: 3,
    tags: ["lai", "switching", "adherence"],
    source: { name: "Risperidone / paliperidone monographs (LAI initiation)", origin: "monograph" }
  },
  {
    id: "vd_ap_scz_impulse_control_monitoring",
    stem: "A 34-year-old with schizophrenia, psychiatrically stable for a year, has quietly accumulated large gambling debts and reports new compulsive shopping and hypersexuality that began after his antipsychotic was started. Which agent carries a specific warning for these urges, such that they should be asked about at every visit?",
    options: ["Aripiprazole", "Haloperidol", "Quetiapine", "Ziprasidone"],
    answer: "Aripiprazole",
    explanation: "Dopamine partial agonists — aripiprazole, and as a class effect brexpiprazole — carry an impulse-control warning covering pathological gambling, hypersexuality, compulsive shopping and binge eating, so monitoring means specifically asking about these urges. Haloperidol, quetiapine and ziprasidone are D2 antagonists and do not carry this warning.",
    meds: ["aripiprazole", "haloperidol", "quetiapine", "ziprasidone", "brexpiprazole"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["monitoring", "impulse-control"],
    source: { name: "Aripiprazole monograph (impulse-control warning)", origin: "monograph" }
  },

  // ————————————————————————————————— ACUTE AGITATION —————————————————————————————————
  {
    id: "vd_ap_agit_inhaled_loxapine",
    stem: "A cooperative but escalating patient with psychotic agitation in a supervised clinic setting refuses an intramuscular injection. He has no asthma or COPD and a rescue bronchodilator is available. Which agent offers a rapid single-dose INHALED route for acute agitation?",
    options: ["Loxapine", "Perphenazine", "Pimozide", "Trifluoperazine"],
    answer: "Loxapine",
    explanation: "Loxapine's inhaled formulation gives rapid, single-dose control of acute agitation in a supervised setting — but it can cause bronchospasm, so it is contraindicated in asthma/COPD and a rescue bronchodilator must be on hand. Perphenazine, pimozide and trifluoperazine are oral agents with no rapid-onset inhaled option.",
    meds: ["loxapine", "perphenazine", "pimozide", "trifluoperazine"],
    disorder: "Acute agitation",
    difficulty: 2,
    tags: ["agitation", "formulation"],
    source: { name: "Loxapine monograph (inhaled formulation)", origin: "monograph" }
  },
  {
    id: "vd_ap_agit_zuclopenthixol_acetate",
    stem: "An inpatient with acute psychotic disturbance has required repeated intramuscular injections over 24 hours. The team wants a single intramuscular dose that will cover roughly the next two to three days while an oral regimen is established — explicitly not a maintenance depot. Which Canadian agent has a short-acting ACETATE ester for this purpose?",
    options: ["Zuclopenthixol", "Pipotiazine", "Fluphenazine", "Paliperidone"],
    answer: "Zuclopenthixol",
    explanation: "Zuclopenthixol acetate (Acuphase) is a short-acting intramuscular ester bridging roughly 72 hours of acute disturbance; the same molecule's decanoate is the maintenance depot, and confusing the two esters is the classic error. Pipotiazine palmitate, fluphenazine decanoate and paliperidone palmitate are all long-acting maintenance injectables that cannot be quickly withdrawn if poorly tolerated.",
    meds: ["zuclopenthixol", "pipotiazine", "fluphenazine", "paliperidone"],
    disorder: "Acute agitation",
    difficulty: 3,
    tags: ["agitation", "lai", "canada"],
    source: { name: "Zuclopenthixol monograph (acetate vs decanoate)", origin: "monograph" }
  },

  // ————————————————————————————————— DELIRIUM —————————————————————————————————
  {
    id: "vd_ap_delirium_qt_droperidol",
    stem: "A 71-year-old in the intensive care unit has hyperactive delirium requiring pharmacologic control. His QTc is 510 ms, potassium is 3.1 mmol/L, and he is already receiving other QT-prolonging medications. Which agent is most important to AVOID because torsades de pointes is its defining hazard, reported even at low antiemetic doses?",
    options: ["Droperidol", "Aripiprazole", "Loxapine", "Olanzapine"],
    answer: "Droperidol",
    explanation: "Droperidol carries a prominent dose-dependent QT/torsades warning that applies even at low antiemetic doses, making it the wrong choice with a QTc of 510 ms and hypokalemia — correct potassium and magnesium first. Aripiprazole is essentially QT-neutral and loxapine and olanzapine carry a far weaker QT signal, though any antipsychotic warrants caution in this setting.",
    meds: ["droperidol", "aripiprazole", "loxapine", "olanzapine"],
    disorder: "Delirium",
    difficulty: 2,
    tags: ["qt", "delirium", "elderly"],
    source: { name: "Droperidol monograph (QT/torsades warning)", origin: "monograph" }
  },
  {
    id: "vd_ap_delirium_anticholinergic_toxidrome",
    stem: "An 80-year-old receiving low-dose haloperidol for post-operative delirium has benztropine added for tremor. Two days later he is agitated and hallucinating, with dry flushed skin, dilated pupils, urinary retention, a temperature of 38.4°C and tachycardia. Muscle tone is normal, there is no clonus, and creatine kinase is normal. Which syndrome is this?",
    options: ["Anticholinergic toxicity", "Neuroleptic malignant syndrome", "Serotonin syndrome", "Catatonia"],
    answer: "Anticholinergic toxicity",
    explanation: "Delirium with dry flushed skin, mydriasis, urinary retention and hyperthermia from impaired sweating — with NORMAL tone and a normal CK — is the anticholinergic toxidrome; anticholinergic delirium and heat stroke are listed serious adverse effects of benztropine. NMS would show lead-pipe rigidity with a markedly raised CK, serotonin syndrome clonus and hyperreflexia, and catatonia immobility with waxy flexibility rather than this autonomic picture.",
    meds: ["benztropine", "haloperidol"],
    disorder: "Delirium",
    difficulty: 2,
    tags: ["syndrome-id", "anticholinergic", "elderly"],
    source: { name: "Benztropine monograph (anticholinergic delirium)", origin: "monograph" }
  },

  // ————————————————————— PARKINSON DISEASE PSYCHOSIS & DEMENTIA —————————————————————
  {
    id: "vd_ap_pdp_quetiapine_canada",
    stem: "A 76-year-old with Parkinson disease has distressing visual hallucinations. Medical precipitants have been treated and his dopaminergic therapy is already minimized, so an antipsychotic is needed — but pimavanserin is not marketed in Canada. Which agent is the usual Canadian choice because its loose, low-occupancy D2 binding makes it least likely to worsen his motor symptoms?",
    options: ["Quetiapine", "Risperidone", "Haloperidol", "Zuclopenthixol"],
    answer: "Quetiapine",
    explanation: "Quetiapine has the lowest EPS and prolactin burden of the standard agents because of its loose D2 binding, which is why it is the Canadian go-to for Parkinson disease psychosis (clozapine, which is also used off-label here, is the alternative when its monitoring is feasible). Risperidone is the most D2-potent SGA, and haloperidol and zuclopenthixol are high-potency D2 blockers that will aggravate parkinsonism.",
    meds: ["quetiapine", "risperidone", "haloperidol", "zuclopenthixol", "clozapine", "pimavanserin"],
    disorder: "Parkinson disease psychosis",
    difficulty: 2,
    tags: ["pd-psychosis", "eps", "canada"],
    source: { name: "Quetiapine / clozapine monographs", origin: "monograph" }
  },
  {
    id: "vd_ap_dementia_brexpiprazole_agitation",
    stem: "An 81-year-old with Alzheimer disease has persistent agitation despite optimized non-pharmacologic management. His daughter has read about a newer dopamine partial agonist that is approved in the United States specifically for agitation associated with Alzheimer dementia and asks whether it is an option. Which agent is she describing?",
    options: ["Brexpiprazole", "Chlorpromazine", "Pimozide", "Trifluoperazine"],
    answer: "Brexpiprazole",
    explanation: "Brexpiprazole, a D2/5-HT1A partial agonist, is approved in some jurisdictions (US) for agitation associated with dementia — it is not a Canadian indication, and like every antipsychotic it carries the warning of increased mortality and cerebrovascular events in elderly patients with dementia. Chlorpromazine, pimozide and trifluoperazine are older agents whose sedation, anticholinergic and orthostatic load, and QT risk make them poor choices in this population.",
    meds: ["brexpiprazole", "chlorpromazine", "pimozide", "trifluoperazine"],
    disorder: "Major neurocognitive disorder (dementia)",
    difficulty: 3,
    tags: ["bpsd", "elderly"],
    source: { name: "Brexpiprazole monograph", origin: "monograph" }
  },

  // ————————————————————— NMS / EPS / TARDIVE DYSKINESIA —————————————————————
  {
    id: "vd_ap_nms_amantadine_withdrawal",
    stem: "A 62-year-old on long-term haloperidol at an unchanged dose has been taking amantadine for drug-induced parkinsonism. On admission for pneumonia the amantadine is abruptly stopped. Within 48 hours he is febrile and rigid with fluctuating consciousness, labile blood pressure and a creatine kinase of 6000 U/L. What has happened?",
    options: ["Neuroleptic malignant syndrome", "Serotonin syndrome", "Anticholinergic toxicity", "Catatonia"],
    answer: "Neuroleptic malignant syndrome",
    explanation: "Abruptly withdrawing a dopaminergic agent such as amantadine can precipitate an NMS-like syndrome — hyperthermia, rigidity, altered mental status, autonomic instability and rhabdomyolysis — even with no change in antipsychotic dose, which is why amantadine should be tapered rather than stopped. Serotonin syndrome gives clonus and hyperreflexia, anticholinergic toxicity dry flushed skin with normal tone and CK, and catatonia immobility without autonomic collapse or a raised CK.",
    meds: ["amantadine", "haloperidol"],
    disorder: "Neuroleptic malignant syndrome",
    difficulty: 3,
    tags: ["nms", "syndrome-id", "withdrawal"],
    source: { name: "Amantadine monograph (NMS-like withdrawal syndrome)", origin: "monograph" }
  },
  {
    id: "vd_ap_eps_antiemetic_dystonia",
    stem: "A 22-year-old woman given an intramuscular antiemetic in the emergency department for vomiting returns four hours later with painful neck twisting, jaw stiffness and an upward fixed gaze. She takes no psychiatric medication and has never received an antipsychotic. Which drug is responsible?",
    options: ["Prochlorperazine", "Hydroxyzine", "Lorazepam", "Propranolol"],
    answer: "Prochlorperazine",
    explanation: "Prochlorperazine is a dopamine-blocking phenothiazine used mainly as an antiemetic, and a single 'just an antiemetic' dose can precipitate acute dystonia — classically in young patients — which is treated with an anticholinergic such as benztropine. Hydroxyzine, lorazepam and propranolol do not block D2 receptors and do not cause dystonic reactions.",
    meds: ["prochlorperazine", "hydroxyzine", "lorazepam", "propranolol", "benztropine"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 2,
    tags: ["eps", "dystonia"],
    source: { name: "Prochlorperazine monograph (acute dystonic reaction)", origin: "monograph" }
  },
  {
    id: "vd_ap_td_vmat2_depression_risk",
    stem: "A 59-year-old with schizophrenia has troublesome tardive dyskinesia and is simultaneously in an active major depressive episode with passive suicidal ideation. Valbenazine and deutetrabenazine are not marketed in Canada. Which of the following options carries a dopamine-depletion risk of worsening depression and suicidality that makes it hazardous in this particular patient?",
    options: ["Tetrabenazine", "Propranolol", "Clozapine", "Amantadine"],
    answer: "Tetrabenazine",
    explanation: "Tetrabenazine is the Canada-available VMAT2 inhibitor for tardive dyskinesia, but because it depletes dopamine its serious adverse effects include depression and suicidality (plus parkinsonism), so mood must be screened and it is avoided during an active depressive episode. Switching the offending antipsychotic to clozapine (essentially no EPS from its loose D2 binding) or using amantadine as a tardive-dyskinesia adjunct are safer routes here, while propranolol treats akathisia rather than tardive dyskinesia.",
    meds: ["tetrabenazine", "propranolol", "clozapine", "amantadine", "valbenazine", "deutetrabenazine"],
    disorder: "Tardive dyskinesia",
    difficulty: 3,
    tags: ["tardive-dyskinesia", "safety"],
    source: { name: "Tetrabenazine monograph (depression/suicidality)", origin: "monograph" }
  }
];
