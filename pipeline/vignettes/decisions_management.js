// Cross-med FRCPC-style vignettes: MANAGEMENT DECISIONS in substance use,
// psychosis, and agitation — which agent to start/switch, acute-agitation choice,
// LAI selection, clozapine initiation, and Parkinson-disease-psychosis agent choice.
// Every dose/level/monitoring fact is grounded in data/deck.json. See _CONTRACT.md.
export default [
  // ============================ OPIOID USE DISORDER ============================
  {
    id: "vx_mgmt_oud_first_line_bupnal",
    stem: "A 29-year-old with opioid use disorder (fentanyl) presents in objective withdrawal (COWS 14) wanting to start opioid agonist therapy. He has young children at home and no significant cardiac history. Which is the best first-line agent?",
    options: ["Buprenorphine / Naloxone", "Methadone", "Naltrexone", "Naloxone"],
    answer: "Buprenorphine / Naloxone",
    explanation: "CRISM guidance favours buprenorphine/naloxone as first-line OAT over methadone for most patients because the partial agonist has a ceiling on respiratory depression (safer in overdose and with take-home doses around children). Methadone is a full agonist with no respiratory ceiling and delayed accumulation; naltrexone is an antagonist that would precipitate withdrawal in an actively dependent patient; naloxone is a short-acting rescue antidote, not maintenance therapy.",
    meds: ["buprenorphine_naloxone", "methadone", "naltrexone", "naloxone"],
    disorder: "Opioid use disorder",
    difficulty: 1,
    tags: ["first-line", "oud", "overdose"],
    source: { name: "CRISM National OUD Guideline", origin: "authored" }
  },
  {
    id: "vx_mgmt_oud_switch_methadone",
    stem: "A 41-year-old with severe, long-standing opioid use disorder has twice been inducted onto buprenorphine/naloxone but each time developed precipitated withdrawal and left care; he continues to use high-potency opioids daily. His ECG is normal. What is the most appropriate next-step pharmacotherapy?",
    options: ["Methadone", "Naltrexone", "Naloxone", "Acamprosate"],
    answer: "Methadone",
    explanation: "For severe OUD with high tolerance and buprenorphine-induction failure, methadone (a full mu agonist) improves retention and avoids the high-affinity displacement that drives buprenorphine-precipitated withdrawal — accepting the trade-off of no respiratory ceiling and dose-dependent QT, so start low/go slow and monitor ECG. Naltrexone would precipitate withdrawal in an actively dependent patient; naloxone is an overdose antidote; acamprosate treats alcohol, not opioid, use disorder.",
    meds: ["methadone", "naltrexone", "naloxone", "acamprosate"],
    disorder: "Opioid use disorder",
    difficulty: 2,
    tags: ["switching", "oud", "qt"],
    source: { name: "CRISM National OUD Guideline", origin: "authored" }
  },

  // =========================== ALCOHOL USE DISORDER ===========================
  {
    id: "vx_mgmt_aud_hepatic_acamprosate",
    stem: "A 58-year-old with alcohol use disorder and Child-Pugh B alcoholic cirrhosis has been abstinent for 10 days after inpatient withdrawal management and wants a medication to maintain abstinence. Renal function is normal. Which agent is the best choice?",
    options: ["Acamprosate", "Naltrexone", "Disulfiram", "Gabapentin"],
    answer: "Acamprosate",
    explanation: "Acamprosate is renally excreted unchanged and not hepatically metabolized, making it the preferred anti-relapse agent in significant liver disease, and it works best in patients who are already abstinent. Naltrexone and disulfiram are both hepatotoxic and best avoided in decompensated cirrhosis; gabapentin is only an adjunct with weaker evidence, not a first-line maintenance agent here.",
    meds: ["acamprosate", "naltrexone", "disulfiram", "gabapentin"],
    disorder: "Alcohol use disorder",
    difficulty: 2,
    tags: ["hepatic", "aud"],
    source: { name: "Acamprosate product monograph", origin: "monograph" }
  },
  {
    id: "vx_mgmt_aud_disulfiram_motivated",
    stem: "A 47-year-old airline pilot with alcohol use disorder is currently abstinent, highly motivated, insightful, and specifically wants a medication that will strongly deter any drinking. He has relapsed despite anti-craving therapy, has normal LFTs and no cardiac disease, and is not taking metronidazole. Which agent best fits his goal?",
    options: ["Disulfiram", "Acamprosate", "Naltrexone", "Topiramate"],
    answer: "Disulfiram",
    explanation: "Disulfiram is an aversive (not anti-craving) agent reserved for motivated, insightful, abstinent patients who want a deterrent — it fits this supervised, high-stakes scenario despite being later-line. Acamprosate and naltrexone reduce craving/relapse but provide no aversive deterrent; topiramate is only an off-label option. Counsel to avoid all hidden alcohol (mouthwash, sauces) and metronidazole, and monitor LFTs.",
    meds: ["disulfiram", "acamprosate", "naltrexone", "topiramate"],
    disorder: "Alcohol use disorder",
    difficulty: 2,
    tags: ["aud", "switching"],
    source: { name: "Disulfiram product monograph", origin: "monograph" }
  },

  // =========================== TOBACCO USE DISORDER ===========================
  {
    id: "vx_mgmt_tobacco_first_line_varenicline",
    stem: "A 52-year-old smoker (25 pack-years) with no active psychiatric illness wants the single most effective pharmacotherapy to help him quit. Renal function is normal. Which agent should you recommend?",
    options: ["Varenicline", "Bupropion", "Nortriptyline", "Clonidine"],
    answer: "Varenicline",
    explanation: "Varenicline, an α4β2 nicotinic partial agonist, is the most effective single pharmacotherapy for smoking cessation; start about one week before the quit date and counsel about nausea and vivid dreams. Bupropion and nortriptyline are effective but less so as monotherapy, and clonidine is only a second-line option limited by sedation and hypotension.",
    meds: ["varenicline", "bupropion", "nortriptyline", "clonidine"],
    disorder: "Tobacco use disorder",
    difficulty: 1,
    tags: ["first-line", "tobacco"],
    source: { name: "EAGLES / Varenicline label", origin: "authored" }
  },
  {
    id: "vx_mgmt_tobacco_comorbid_depression_bupropion",
    stem: "A 38-year-old smoker also has a new, untreated moderate major depressive episode and wants to stop smoking. She has no seizure history and no eating disorder. If you could choose a single agent to address both problems, which is best?",
    options: ["Bupropion", "Varenicline", "Nortriptyline", "Naltrexone"],
    answer: "Bupropion",
    explanation: "Bupropion is both an antidepressant and an approved smoking-cessation aid (Zyban), so a single agent can treat the depression and support cessation. Varenicline is the most effective cessation drug but does not treat depression; nortriptyline is an aversively toxic later-line antidepressant/cessation aid; naltrexone targets alcohol/opioid use, not nicotine or mood. Avoid bupropion where seizure threshold matters or in eating disorders.",
    meds: ["bupropion", "varenicline", "nortriptyline", "naltrexone"],
    disorder: "Tobacco use disorder",
    difficulty: 2,
    tags: ["tobacco", "comorbidity"],
    source: { name: "Bupropion (Zyban) label", origin: "openfda" }
  },

  // =============================== ACUTE AGITATION ===============================
  {
    id: "vx_mgmt_agitation_qt_lorazepam",
    stem: "A 34-year-old is acutely agitated in the emergency department; the chart shows he is maintained on high-dose methadone and the ECG demonstrates a markedly prolonged QTc. He needs rapid parenteral calming. Which is the safest agent?",
    options: ["Lorazepam", "Droperidol", "Haloperidol", "Ziprasidone"],
    answer: "Lorazepam",
    explanation: "Lorazepam is reliably absorbed IM and does not prolong the QT interval, making it the safest choice for rapid tranquillization when the QTc is already prolonged (here compounded by methadone). Droperidol carries a prominent torsades warning even at low doses, IV haloperidol is a recognized torsades risk, and ziprasidone has the greatest QT effect among the SGAs — all are poor choices with a long QTc.",
    meds: ["lorazepam", "droperidol", "haloperidol", "ziprasidone"],
    disorder: "Acute agitation",
    difficulty: 2,
    tags: ["qt", "agitation"],
    source: { name: "Droperidol boxed warning / agitation practice", origin: "authored" }
  },
  {
    id: "vx_mgmt_agitation_post_im_olanzapine",
    stem: "A combative patient has just received IM olanzapine 10 mg for acute agitation but remains agitated 20 minutes later. The nurse asks whether to give IM lorazepam next. What is the most appropriate additional agent?",
    options: ["Haloperidol", "Lorazepam", "Midazolam", "Diazepam"],
    answer: "Haloperidol",
    explanation: "Parenteral benzodiazepines should not be combined with IM olanzapine because of the risk of excessive cardiorespiratory and CNS depression, so lorazepam, midazolam, and diazepam are all unsafe next steps here. Adding haloperidol (with ECG/QT awareness) is the appropriate additional agent when more control is needed after IM olanzapine.",
    meds: ["olanzapine", "haloperidol", "lorazepam", "midazolam", "diazepam"],
    disorder: "Acute agitation",
    difficulty: 3,
    tags: ["agitation", "interaction"],
    source: { name: "Olanzapine IM label caution", origin: "openfda" }
  },

  // ========================= PARKINSON DISEASE PSYCHOSIS =========================
  {
    id: "vx_mgmt_pdpsychosis_first_line_quetiapine",
    stem: "A 74-year-old with Parkinson disease develops distressing visual hallucinations and paranoid delusions after a dopaminergic dose increase; symptoms persist after the dose is optimized and precipitants are excluded. In Canada, which antipsychotic is the most appropriate first choice?",
    options: ["Quetiapine", "Risperidone", "Haloperidol", "Pimavanserin"],
    answer: "Quetiapine",
    explanation: "Quetiapine binds D2 loosely and has the lowest EPS/prolactin liability, making it the practical go-to in Parkinson disease psychosis because it least worsens parkinsonian motor symptoms. Risperidone (highly D2-potent) and haloperidol (high-potency FGA) both aggravate motor function, and pimavanserin — the mechanistically ideal 5-HT2A inverse agonist with no D2 activity — is not available in Canada.",
    meds: ["quetiapine", "risperidone", "haloperidol", "pimavanserin"],
    disorder: "Parkinson disease psychosis",
    difficulty: 2,
    tags: ["first-line", "elderly", "eps"],
    source: { name: "PD psychosis management", origin: "authored" }
  },
  {
    id: "vx_mgmt_pdpsychosis_refractory_clozapine",
    stem: "A 71-year-old with Parkinson disease psychosis remains severely hallucinated and delusional despite an adequate quetiapine trial. Cognition is intact, he consents to regular bloodwork, and pimavanserin is unavailable. Which agent has the best evidence without worsening his motor symptoms?",
    options: ["Clozapine", "Olanzapine", "Haloperidol", "Risperidone"],
    answer: "Clozapine",
    explanation: "Clozapine has the strongest evidence in Parkinson disease psychosis and, with its very loose D2 binding, produces essentially no EPS — appropriate here provided registry ANC monitoring is done. Olanzapine, risperidone, and haloperidol all block D2 more tightly and worsen parkinsonian motor symptoms, so they are inappropriate in this population.",
    meds: ["clozapine", "olanzapine", "haloperidol", "risperidone"],
    disorder: "Parkinson disease psychosis",
    difficulty: 3,
    tags: ["switching", "elderly", "eps"],
    source: { name: "PD psychosis refractory management", origin: "authored" }
  },

  // ================================ SCHIZOPHRENIA ================================
  {
    id: "vx_mgmt_scz_trs_clozapine",
    stem: "A 28-year-old with schizophrenia has had persistent positive symptoms despite two adequate trials of different antipsychotics at therapeutic doses and duration, with confirmed adherence. What is the most appropriate next-step medication?",
    options: ["Clozapine", "Olanzapine", "Risperidone", "Haloperidol"],
    answer: "Clozapine",
    explanation: "Failure of two adequate antipsychotic trials defines treatment-resistant schizophrenia, for which clozapine is the only antipsychotic proven superior (and the only one shown to reduce suicidality) — it should not be delayed further. Simply switching to another non-clozapine agent such as olanzapine, risperidone, or haloperidol offers no advantage once resistance is established.",
    meds: ["clozapine", "olanzapine", "risperidone", "haloperidol"],
    disorder: "Schizophrenia",
    difficulty: 1,
    tags: ["treatment-resistant", "clozapine"],
    source: { name: "Clozapine boxed warning / TRS guidance", origin: "openfda" }
  },
  {
    id: "vx_mgmt_scz_lai_aripiprazole",
    stem: "A 24-year-old man with schizophrenia has relapsed twice from covert non-adherence and now agrees to a long-acting injectable. He is very concerned about weight gain and sexual side effects and has a strong family history of diabetes. Which LAI best fits these priorities?",
    options: ["Aripiprazole", "Olanzapine", "Paliperidone", "Risperidone"],
    answer: "Aripiprazole",
    explanation: "Aripiprazole is a D2 partial agonist that is weight-neutral and prolactin-sparing and is available as a monthly LAI, aligning with his metabolic and sexual-side-effect concerns (watch for akathisia). Olanzapine LAI carries among the worst metabolic risk, while paliperidone and risperidone are the most prolactin-elevating and EPS-prone atypicals, making them poorer fits for his stated priorities.",
    meds: ["aripiprazole", "olanzapine", "paliperidone", "risperidone"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["lai", "adherence", "metabolic"],
    source: { name: "Aripiprazole LAI (Maintena) label", origin: "openfda" }
  },

  // ============================== BIPOLAR I DISORDER ==============================
  {
    id: "vx_mgmt_bipolar_mania_lithium",
    stem: "A 30-year-old man presents with a first episode of acute mania. He and his family want a mood stabilizer that is first-line for both acute mania and long-term maintenance and that carries evidence for reducing suicide. Renal and thyroid function are normal. Which agent best fits?",
    options: ["Lithium", "Gabapentin", "Topiramate", "Lamotrigine"],
    answer: "Lithium",
    explanation: "Lithium is CANMAT first-line for acute mania and for maintenance and is the only psychotropic with robust evidence for reducing suicide. Gabapentin and topiramate are not primary mood stabilizers (negative bipolar RCTs), and lamotrigine — while useful for maintenance and bipolar depression — has no role in treating acute mania.",
    meds: ["lithium", "gabapentin", "topiramate", "lamotrigine"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["first-line", "canmat", "mania"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },
  {
    id: "vx_mgmt_bipolar_depression_lurasidone",
    stem: "A 35-year-old with bipolar I disorder presents in an acute bipolar depressive episode. She is metabolically vulnerable (obese, prediabetic, dyslipidemic) and you want a first-line agent that will not worsen her metabolic profile. Which is the best choice?",
    options: ["Lurasidone", "Olanzapine", "Quetiapine", "Risperidone"],
    answer: "Lurasidone",
    explanation: "Lurasidone is CANMAT first-line for bipolar I depression and is metabolically favourable (weight/lipid/glucose-neutral, low prolactin), making it the best fit for a metabolically vulnerable patient — remember it must be taken with food (≥350 kcal). Olanzapine carries among the worst metabolic risk, quetiapine is first-line but more sedating and metabolically burdensome, and risperidone is not a first-line agent for bipolar depression.",
    meds: ["lurasidone", "olanzapine", "quetiapine", "risperidone"],
    disorder: "Bipolar I disorder",
    difficulty: 3,
    tags: ["first-line", "canmat", "metabolic"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  }
];
