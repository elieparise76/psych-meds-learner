// Cross-med FRCPC-style vignettes — PSYCHOSIS & MOVEMENT DISORDERS
// Grounded in data/deck.json (antipsychotics + EPS/movement adjuncts).
// See pipeline/vignettes/_CONTRACT.md.

export default [
  // ————————————————————————————————— SCHIZOPHRENIA —————————————————————————————————
  {
    id: "vp_scz_first_line_metabolic",
    stem: "A 23-year-old man with a first episode of schizophrenia, no prior antipsychotic exposure and a family history of type 2 diabetes, is anxious about weight gain. Which agent best balances efficacy with a weight- and prolactin-neutral profile as an initial choice?",
    options: ["Aripiprazole", "Olanzapine", "Clozapine", "Chlorpromazine"],
    answer: "Aripiprazole",
    explanation: "Aripiprazole is a D2 partial agonist that is essentially weight- and prolactin-neutral, making it a sensible first-episode choice when metabolic risk matters. Olanzapine has the worst metabolic burden of the mainstream SGAs; clozapine is reserved for treatment resistance; chlorpromazine is a sedating, anticholinergic low-potency FGA.",
    meds: ["aripiprazole", "olanzapine", "clozapine", "chlorpromazine"],
    disorder: "Schizophrenia",
    difficulty: 1,
    tags: ["first-line", "metabolic"],
    source: { name: "CPA Schizophrenia Guidelines", origin: "authored" }
  },
  {
    id: "vp_scz_trs_clozapine",
    stem: "A 29-year-old with schizophrenia has had persistent positive symptoms despite adequate trials (dose and duration) of risperidone and then olanzapine. Adherence is confirmed. What is the next best pharmacologic step?",
    options: ["Clozapine", "Haloperidol", "Quetiapine", "Benztropine"],
    answer: "Clozapine",
    explanation: "Failure of two adequate antipsychotic trials defines treatment-resistant schizophrenia, for which clozapine is the only agent with proven superior efficacy (and the only one shown to reduce suicidality). Switching to another standard antipsychotic or adding an anticholinergic does not address resistance.",
    meds: ["clozapine", "risperidone", "olanzapine", "haloperidol", "quetiapine", "benztropine"],
    disorder: "Schizophrenia",
    difficulty: 1,
    tags: ["treatment-resistant", "clozapine"],
    source: { name: "Clozapine monograph / CPA Schizophrenia Guidelines", origin: "monograph" }
  },
  {
    id: "vp_scz_clozapine_myocarditis",
    stem: "A patient in the third week of clozapine titration develops fever, pleuritic chest pain, tachycardia, and a rising troponin and CRP. Which clozapine-associated complication is most likely?",
    options: ["Myocarditis", "Neuroleptic malignant syndrome", "Agranulocytosis", "Pulmonary embolism"],
    answer: "Myocarditis",
    explanation: "Clozapine-induced myocarditis clusters in the first 6–8 weeks and presents with fever, chest pain, tachycardia, and rising troponin/CRP (± eosinophilia). It is distinct from the blood dyscrasia (agranulocytosis) and from NMS, and warrants stopping clozapine.",
    meds: ["clozapine"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["clozapine", "syndrome-id"],
    source: { name: "Clozapine boxed warning / monograph", origin: "monograph" }
  },
  {
    id: "vp_scz_clozapine_agranulocytosis",
    stem: "A patient on clozapine for 8 weeks presents with fever and a severe sore throat. The absolute neutrophil count is 300/µL. Which adverse effect does this represent?",
    options: ["Agranulocytosis", "Neuroleptic malignant syndrome", "Myocarditis", "Metabolic syndrome"],
    answer: "Agranulocytosis",
    explanation: "An ANC of 300/µL is severe neutropenia/agranulocytosis — clozapine must be stopped immediately (and not rechallenged) with hematology involvement, because of the risk of fatal infection. This mandatory ANC monitoring is why clozapine is reserved despite its efficacy.",
    meds: ["clozapine"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["clozapine", "agranulocytosis", "syndrome-id"],
    source: { name: "Clozapine boxed warning / monograph", origin: "monograph" }
  },
  {
    id: "vp_scz_clozapine_fluvoxamine",
    stem: "A patient stable on clozapine needs an antidepressant added for comorbid depression. Which co-prescription is most likely to raise clozapine levels and precipitate toxicity (sedation, seizures)?",
    options: ["Fluvoxamine", "Sertraline", "Escitalopram", "Bupropion"],
    answer: "Fluvoxamine",
    explanation: "Fluvoxamine is a potent CYP1A2 inhibitor and clozapine is a major CYP1A2 substrate, so co-prescription can markedly increase clozapine levels and seizure/toxicity risk. (Conversely, smoking cessation removes CYP1A2 induction and also raises levels.)",
    meds: ["clozapine", "fluvoxamine", "sertraline", "escitalopram", "bupropion"],
    disorder: "Schizophrenia",
    difficulty: 3,
    tags: ["clozapine", "interaction"],
    source: { name: "Clozapine monograph (CYP1A2 interactions)", origin: "monograph" }
  },
  {
    id: "vp_scz_metabolic_diabetes",
    stem: "A 45-year-old with schizophrenia has obesity and poorly controlled type 2 diabetes. You want maintenance antipsychotic therapy with the least metabolic impact. Which is most appropriate?",
    options: ["Lurasidone", "Olanzapine", "Clozapine", "Chlorpromazine"],
    answer: "Lurasidone",
    explanation: "Lurasidone is among the most metabolically favourable SGAs (largely weight-, lipid-, and glucose-neutral) — remembering it must be taken with ≥350 kcal of food for absorption. Olanzapine and clozapine carry the highest metabolic burden, and low-potency FGAs like chlorpromazine also cause weight gain.",
    meds: ["lurasidone", "olanzapine", "clozapine", "chlorpromazine"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["metabolic"],
    source: { name: "Lurasidone monograph", origin: "monograph" }
  },
  {
    id: "vp_scz_lai_adherence",
    stem: "A 34-year-old with schizophrenia has had three relapse hospitalizations driven by covert non-adherence to oral medication. He responds to and tolerates an SGA. What is the best strategy to improve adherence?",
    options: ["Paliperidone", "Quetiapine", "Lurasidone", "Clozapine"],
    answer: "Paliperidone",
    explanation: "Paliperidone palmitate is a long-acting injectable, directly addressing covert non-adherence and reducing relapse. Quetiapine, lurasidone, and clozapine are oral-only in Canada (clozapine is also reserved for treatment resistance).",
    meds: ["paliperidone", "quetiapine", "lurasidone", "clozapine"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["lai", "adherence"],
    source: { name: "Paliperidone palmitate monograph", origin: "monograph" }
  },

  // ————————————————————————————————— ACUTE AGITATION —————————————————————————————————
  {
    id: "vp_agit_olanzapine_benzo",
    stem: "An acutely agitated psychotic patient in the emergency department is being managed with intramuscular medication. Co-administering a parenteral benzodiazepine with which antipsychotic carries a specific risk of cardiorespiratory depression and should be avoided?",
    options: ["Olanzapine", "Haloperidol", "Ziprasidone", "Aripiprazole"],
    answer: "Olanzapine",
    explanation: "Intramuscular olanzapine combined with a parenteral benzodiazepine has caused excessive sedation and cardiorespiratory depression, so the combination is avoided (separate the doses). IM haloperidol is routinely combined with lorazepam, and the other agents do not carry this specific warning.",
    meds: ["olanzapine", "haloperidol", "ziprasidone", "aripiprazole", "lorazepam"],
    disorder: "Acute agitation",
    difficulty: 2,
    tags: ["agitation", "interaction"],
    source: { name: "Olanzapine monograph (IM warning)", origin: "monograph" }
  },

  // ————————————————————————————————— DELIRIUM —————————————————————————————————
  {
    id: "vp_delirium_haloperidol",
    stem: "An 80-year-old post-operative patient has hyperactive delirium with severe agitation that threatens lines and safety despite non-pharmacologic measures. Which pharmacologic agent is most appropriate for short-term control?",
    options: ["Haloperidol", "Lorazepam", "Quetiapine", "Chlorpromazine"],
    answer: "Haloperidol",
    explanation: "When medication is unavoidable for dangerous agitation in delirium, a low-dose high-potency antipsychotic such as haloperidol is preferred. Benzodiazepines can worsen or prolong delirium (reserved for alcohol/sedative withdrawal), and chlorpromazine's hypotension and anticholinergic load are poorly tolerated in the elderly.",
    meds: ["haloperidol", "lorazepam", "quetiapine", "chlorpromazine"],
    disorder: "Delirium",
    difficulty: 2,
    tags: ["delirium", "elderly"],
    source: { name: "Delirium management (authored)", origin: "authored" }
  },
  {
    id: "vp_delirium_etoh_withdrawal",
    stem: "A 55-year-old admitted 48 hours after his last drink becomes agitated and confused with tremor, diaphoresis, tachycardia, and hypertension. Which is the first-line pharmacologic treatment for this delirium?",
    options: ["Lorazepam", "Haloperidol", "Olanzapine", "Risperidone"],
    answer: "Lorazepam",
    explanation: "This is alcohol-withdrawal delirium (delirium tremens), for which a benzodiazepine such as lorazepam is first-line and lifesaving. Antipsychotics lower the seizure threshold and are only adjuncts here — the opposite of the approach to a general medical/post-operative delirium.",
    meds: ["lorazepam", "haloperidol", "olanzapine", "risperidone"],
    disorder: "Delirium",
    difficulty: 2,
    tags: ["delirium", "withdrawal"],
    source: { name: "Alcohol withdrawal management (authored)", origin: "authored" }
  },

  // ————————————————————————————————— DEMENTIA / BPSD & PD PSYCHOSIS —————————————————————————————————
  {
    id: "vp_bpsd_risperidone",
    stem: "An 82-year-old with Alzheimer dementia has persistent aggression and psychosis endangering caregivers despite behavioural interventions. After discussing the increased mortality risk, a short low-dose antipsychotic trial is chosen. Which agent has the best evidence for short-term severe aggression in dementia?",
    options: ["Risperidone", "Clozapine", "Ziprasidone", "Chlorpromazine"],
    answer: "Risperidone",
    explanation: "Low-dose risperidone is the best-studied option (with a limited short-term indication for severe aggression) in dementia, though all antipsychotics carry a boxed warning for increased mortality and cerebrovascular events — use the lowest dose for the shortest time. Clozapine (agranulocytosis monitoring) and sedating/anticholinergic FGAs are inappropriate in this population.",
    meds: ["risperidone", "clozapine", "ziprasidone", "chlorpromazine"],
    disorder: "Major neurocognitive disorder (dementia)",
    difficulty: 2,
    tags: ["bpsd", "elderly"],
    source: { name: "Risperidone monograph (dementia warning)", origin: "monograph" }
  },
  {
    id: "vp_pd_psychosis_pimavanserin",
    stem: "A 74-year-old with Parkinson disease develops distressing visual hallucinations. Dopaminergic therapy is already minimized. Which agent treats the psychosis with the least risk of worsening his motor symptoms?",
    options: ["Pimavanserin", "Haloperidol", "Risperidone", "Olanzapine"],
    answer: "Pimavanserin",
    explanation: "Pimavanserin is a selective 5-HT2A inverse agonist with no D2 blockade, so it treats Parkinson-disease psychosis without worsening motor function (low-dose quetiapine or clozapine are the usual Canadian alternatives). D2 blockers such as haloperidol, risperidone, and olanzapine aggravate parkinsonism and are avoided.",
    meds: ["pimavanserin", "haloperidol", "risperidone", "olanzapine", "quetiapine", "clozapine"],
    disorder: "Parkinson disease psychosis",
    difficulty: 3,
    tags: ["pd-psychosis", "eps"],
    source: { name: "Pimavanserin monograph", origin: "monograph" }
  },

  // ————————————————————————————————— EXTRAPYRAMIDAL SYNDROMES —————————————————————————————————
  {
    id: "vp_eps_acute_dystonia_tx",
    stem: "A 19-year-old man given intramuscular haloperidol for agitation develops, a few hours later, painful neck twisting (torticollis) and an upward fixed gaze (oculogyric crisis). What is the best immediate treatment?",
    options: ["Benztropine", "Propranolol", "Tetrabenazine", "Valbenazine"],
    answer: "Benztropine",
    explanation: "Acute dystonia (young men, high-potency FGAs, within hours) responds rapidly to an intramuscular anticholinergic such as benztropine (or diphenhydramine). Propranolol treats akathisia, and VMAT2 inhibitors (tetrabenazine, valbenazine) are for tardive dyskinesia.",
    meds: ["benztropine", "propranolol", "tetrabenazine", "valbenazine", "haloperidol"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 1,
    tags: ["eps", "dystonia"],
    source: { name: "Benztropine monograph", origin: "monograph" }
  },
  {
    id: "vp_eps_dystonia_syndrome_id",
    stem: "Hours after his first dose of a high-potency antipsychotic, a young patient develops sustained involuntary contraction of the neck and jaw muscles with an upward eye deviation. Which movement syndrome is this?",
    options: ["Acute dystonia", "Tardive dyskinesia", "Akathisia", "Neuroleptic malignant syndrome"],
    answer: "Acute dystonia",
    explanation: "Sustained, painful muscle contractions (torticollis, oculogyric crisis, trismus, potentially laryngospasm) appearing within hours to days of a D2 blocker define acute dystonia. It is distinct from the choreoathetoid movements of tardive dyskinesia, the restlessness of akathisia, and the rigidity/fever of NMS.",
    meds: ["haloperidol", "benztropine"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 2,
    tags: ["eps", "dystonia", "syndrome-id"],
    source: { name: "EPS recognition (authored)", origin: "authored" }
  },
  {
    id: "vp_eps_akathisia_propranolol",
    stem: "One week after starting an antipsychotic, a patient reports an intolerable inner restlessness and an inability to sit still, and is observed pacing and shifting constantly. After considering a dose reduction, which is the best-evidenced pharmacologic treatment?",
    options: ["Propranolol", "Benztropine", "Tetrabenazine", "Amantadine"],
    answer: "Propranolol",
    explanation: "Antipsychotic-induced akathisia responds best to a beta-blocker such as propranolol (± lowering the antipsychotic dose or a short benzodiazepine course). Anticholinergics like benztropine do not reliably relieve akathisia, and dopamine-depleting VMAT2 inhibitors are for tardive dyskinesia.",
    meds: ["propranolol", "benztropine", "tetrabenazine", "amantadine"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 2,
    tags: ["eps", "akathisia"],
    source: { name: "Propranolol monograph", origin: "monograph" }
  },
  {
    id: "vp_eps_td_syndrome_id",
    stem: "A 68-year-old who has taken an antipsychotic for several years develops persistent involuntary lip-smacking, tongue protrusion, and choreoathetoid facial movements that are absent during sleep. Which syndrome is this?",
    options: ["Tardive dyskinesia", "Acute dystonia", "Akathisia", "Drug-induced parkinsonism"],
    answer: "Tardive dyskinesia",
    explanation: "Late-onset, repetitive orofacial-lingual choreoathetoid movements after prolonged D2 blockade define tardive dyskinesia. It contrasts with the acute sustained spasm of dystonia, the subjective restlessness of akathisia, and the bradykinesia/rigidity/tremor of drug-induced parkinsonism.",
    meds: ["haloperidol", "tetrabenazine"],
    disorder: "Tardive dyskinesia",
    difficulty: 2,
    tags: ["eps", "tardive-dyskinesia", "syndrome-id"],
    source: { name: "EPS recognition (authored)", origin: "authored" }
  },
  {
    id: "vp_eps_td_tx",
    stem: "A patient has established tardive dyskinesia with troublesome orofacial movements after years of antipsychotic therapy. Which class of agent is the evidence-based treatment?",
    options: ["Tetrabenazine", "Benztropine", "Trihexyphenidyl", "Propranolol"],
    answer: "Tetrabenazine",
    explanation: "Tardive dyskinesia is treated with a VMAT2 inhibitor — tetrabenazine is the Canada-available option (the purpose-built agents valbenazine and deutetrabenazine are US-approved for TD). Anticholinergics such as benztropine and trihexyphenidyl actually WORSEN tardive dyskinesia, and propranolol targets akathisia.",
    meds: ["tetrabenazine", "benztropine", "trihexyphenidyl", "propranolol", "valbenazine", "deutetrabenazine"],
    disorder: "Tardive dyskinesia",
    difficulty: 2,
    tags: ["eps", "tardive-dyskinesia"],
    source: { name: "Tetrabenazine monograph", origin: "monograph" }
  },
  {
    id: "vp_eps_parkinsonism_amantadine",
    stem: "A patient on an antipsychotic develops bradykinesia, cogwheel rigidity, and a resting tremor consistent with drug-induced parkinsonism. Antipsychotic dose reduction is not fully sufficient. Which adjunct is appropriate, and which class must be avoided because it would worsen the picture?",
    options: ["Amantadine", "Tetrabenazine", "Valbenazine", "Propranolol"],
    answer: "Amantadine",
    explanation: "Drug-induced parkinsonism is managed by reducing/switching the antipsychotic and, if needed, an anticholinergic or the dopaminergic agent amantadine. VMAT2 inhibitors (tetrabenazine, valbenazine) deplete dopamine and would aggravate parkinsonism, and propranolol does not treat it.",
    meds: ["amantadine", "tetrabenazine", "valbenazine", "propranolol"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 2,
    tags: ["eps", "parkinsonism"],
    source: { name: "Amantadine monograph", origin: "monograph" }
  },

  // ————————————————————————————————— NMS —————————————————————————————————
  {
    id: "vp_nms_recognition",
    stem: "Three days after starting haloperidol, a patient develops a temperature of 40°C, generalized 'lead-pipe' rigidity, fluctuating consciousness, labile blood pressure and tachycardia, and a markedly elevated creatine kinase. What is the diagnosis?",
    options: ["Neuroleptic malignant syndrome", "Serotonin syndrome", "Malignant hyperthermia", "Anticholinergic toxicity"],
    answer: "Neuroleptic malignant syndrome",
    explanation: "Hyperthermia, lead-pipe rigidity, altered mental status, autonomic instability, and a high CK developing over days after a D2 blocker are the classic tetrad of NMS. Serotonin syndrome instead shows clonus/hyperreflexia with rapid onset after serotonergic drugs; anticholinergic toxicity gives dry, flushed skin without rigidity or CK elevation.",
    meds: ["haloperidol"],
    disorder: "Neuroleptic malignant syndrome",
    difficulty: 2,
    tags: ["nms", "syndrome-id"],
    source: { name: "NMS recognition (authored)", origin: "authored" }
  },
  {
    id: "vp_nms_culprit",
    stem: "Which of the following antipsychotics carries the highest risk of precipitating neuroleptic malignant syndrome?",
    options: ["Haloperidol", "Quetiapine", "Clozapine", "Aripiprazole"],
    answer: "Haloperidol",
    explanation: "NMS risk rises with potent, tight D2 blockade, so high-potency FGAs such as haloperidol carry the greatest risk (especially with rapid dose escalation or parenteral use). Loosely-binding or partial-agonist agents like quetiapine, clozapine, and aripiprazole carry lower — though not zero — risk.",
    meds: ["haloperidol", "quetiapine", "clozapine", "aripiprazole"],
    disorder: "Neuroleptic malignant syndrome",
    difficulty: 2,
    tags: ["nms"],
    source: { name: "Antipsychotic monographs (NMS)", origin: "monograph" }
  },

  // ————————————————————————————————— HYPERPROLACTINEMIA —————————————————————————————————
  {
    id: "vp_hyperprolactinemia_switch",
    stem: "A 26-year-old woman on risperidone develops amenorrhea and galactorrhea; her prolactin is markedly elevated with no pituitary lesion on imaging. Which switch best addresses the hyperprolactinemia?",
    options: ["Aripiprazole", "Paliperidone", "Haloperidol", "Fluphenazine"],
    answer: "Aripiprazole",
    explanation: "Risperidone (and its metabolite paliperidone) cause the most marked hyperprolactinemia among antipsychotics. Switching to the prolactin-sparing partial agonist aripiprazole typically normalizes prolactin, whereas high-potency FGAs like haloperidol and fluphenazine raise it further.",
    meds: ["aripiprazole", "paliperidone", "haloperidol", "fluphenazine", "risperidone"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["hyperprolactinemia"],
    source: { name: "Aripiprazole / risperidone monographs", origin: "monograph" }
  },

  // ————————————————————————————————— QT —————————————————————————————————
  {
    id: "vp_qt_ziprasidone",
    stem: "A patient with congenital long-QT syndrome and a baseline QTc of 480 ms needs an antipsychotic. Which agent is most important to AVOID because it carries the greatest QT-prolonging risk among the SGAs?",
    options: ["Ziprasidone", "Aripiprazole", "Lurasidone", "Brexpiprazole"],
    answer: "Ziprasidone",
    explanation: "Ziprasidone produces the greatest QTc prolongation of the SGAs and should be avoided when the QT is already long. Aripiprazole, lurasidone, and brexpiprazole are comparatively QT-neutral and are safer choices in this setting.",
    meds: ["ziprasidone", "aripiprazole", "lurasidone", "brexpiprazole"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["qt"],
    source: { name: "Ziprasidone monograph", origin: "monograph" }
  }
];
