// Psychotic & neurocognitive disorder pages for the psych-meds-learner app.
// Copyright note: descriptions below are original educational prose. No DSM-5(-TR)
// criteria are reproduced. Treatment reflects Canadian / CANMAT-style guidance and is
// cited. Every id in `meds` is a real molecule id from data/deck.json.

export default [
  {
    id: "schizophrenia",
    name: "Schizophrenia",
    aka: [
      "schizophrenia",
      "schizophrenic disorder",
      "psychosis",
      "psychotic disorder",
      "chronic psychosis",
    ],
    category: "Psychotic",
    oneLiner:
      "Chronic psychotic illness spanning positive, negative and cognitive symptom domains, treated primarily with antipsychotics.",
    overview:
      "Schizophrenia is a chronic disorder in which a person's perception of reality, thinking and behaviour become disrupted for a sustained period. Clinicians think of the picture in three broad domains: positive features (hallucinations, delusions and disorganised thought that are 'added on' to normal experience), negative features (blunted emotion, reduced speech, social withdrawal and loss of drive that are 'taken away'), and cognitive features (problems with attention, working memory and processing speed). Functioning at work, at school or socially typically slips well below what the person had previously achieved, and the illness usually declares itself after a prodromal period of gradual decline.",
    epidemiology:
      "Lifetime prevalence is roughly 0.5–1%. Onset is typically in the late teens to mid-twenties in men and a few years later in women, and the sexes are affected at broadly similar rates over the lifespan.",
    presentation: [
      "Positive symptoms: fixed false beliefs (often persecutory), hearing voices, and speech or behaviour that becomes hard to follow",
      "Negative symptoms: flat or restricted affect, poverty of speech, anhedonia, avolition and social withdrawal — often the most disabling and treatment-resistant",
      "Cognitive symptoms: impaired attention, working memory and executive function that undermine day-to-day functioning",
      "Insight is frequently limited, which drives non-adherence and relapse",
      "Onset is usually preceded by a prodrome of declining function, odd ideas and social drift",
    ],
    redFlags: [
      "Command hallucinations or delusions directing harm to self or others — assess safety and risk",
      "First-episode psychosis — refer early to specialised/early-intervention services",
      "Acute agitation or catatonia — see the agitation and delirium pages",
      "Suicide risk is elevated across the illness, and clozapine specifically reduces recurrent suicidal behaviour",
    ],
    workup: [
      "Exclude organic and substance-induced causes (stimulants, cannabis, delirium, CNS lesion, autoimmune/limbic encephalitis) before settling on a primary psychotic diagnosis",
      "Baseline metabolic panel: weight/BMI and waist, blood pressure, fasting glucose/HbA1c and lipids before starting an antipsychotic",
      "Baseline ECG where QT-prolonging agents or cardiac risk are in play",
      "Movement exam (baseline AIMS) to track extrapyramidal and tardive effects over time",
      "Document symptom domains and functioning to gauge response",
    ],
    management: {
      overview:
        "Antipsychotics are the cornerstone; second-generation agents are generally preferred first-line for tolerability, and choice is individualised to the side-effect profile. After an adequate trial of two antipsychotics (one at minimum being second-generation) fails, the illness is treatment-resistant and clozapine is indicated. Long-acting injectables address the common problem of covert non-adherence.",
      firstLine: [
        {
          text: "Second-generation antipsychotic monotherapy, chosen by tolerability (metabolic, sedation, EPS, prolactin, QT profile) — Canadian schizophrenia guidance",
          meds: [
            "risperidone",
            "paliperidone",
            "aripiprazole",
            "olanzapine",
            "quetiapine",
            "ziprasidone",
            "lurasidone",
            "asenapine",
            "brexpiprazole",
            "cariprazine",
            "lumateperone",
          ],
        },
      ],
      later: [
        {
          text: "Treatment-RESISTANT schizophrenia (inadequate response to ≥2 antipsychotic trials): clozapine — the only agent with proven superiority in resistance and in reducing suicidality; requires haematologic monitoring for neutropenia",
          meds: ["clozapine"],
        },
        {
          text: "Long-acting injectables to secure adherence and reduce relapse when oral adherence is uncertain",
          meds: [
            "paliperidone",
            "aripiprazole",
            "risperidone",
            "flupenthixol",
            "fluphenazine",
            "zuclopenthixol",
            "pipotiazine",
          ],
        },
        {
          text: "First-generation antipsychotics (effective but higher EPS/tardive burden) and a newer muscarinic-agonist option remain alternatives",
          meds: [
            "haloperidol",
            "chlorpromazine",
            "perphenazine",
            "trifluoperazine",
            "loxapine",
            "xanomeline_trospium",
          ],
        },
      ],
      nonPharm: [
        "Psychoeducation and family intervention to reduce relapse",
        "Cognitive behavioural therapy for psychosis (CBTp)",
        "Supported employment/education and social-skills training",
        "Smoking cessation and active metabolic-syndrome management",
        "Coordinated early-intervention services in first-episode cases",
      ],
    },
    meds: [
      "risperidone",
      "paliperidone",
      "aripiprazole",
      "olanzapine",
      "quetiapine",
      "ziprasidone",
      "lurasidone",
      "asenapine",
      "brexpiprazole",
      "cariprazine",
      "lumateperone",
      "clozapine",
      "haloperidol",
      "chlorpromazine",
      "perphenazine",
      "trifluoperazine",
      "loxapine",
      "flupenthixol",
      "fluphenazine",
      "zuclopenthixol",
      "pipotiazine",
      "xanomeline_trospium",
    ],
    related: [
      "eps",
      "tardive-dyskinesia",
      "nms",
      "metabolic-syndrome",
      "agitation",
      "bipolar",
    ],
    sources: [
      {
        name: "CPA Canadian Guidelines for the Pharmacotherapy of Schizophrenia (Remington et al., 2017)",
        url: "https://journals.sagepub.com/doi/10.1177/0706743717720448",
      },
    ],
  },

  {
    id: "pd-psychosis",
    name: "Parkinson disease psychosis",
    aka: [
      "parkinson disease psychosis",
      "parkinson's psychosis",
      "pd psychosis",
      "pdp",
      "psychosis in parkinson disease",
      "dopaminergic psychosis",
    ],
    category: "Psychotic",
    oneLiner:
      "Visual hallucinations and delusions in Parkinson disease — treat gently and NEVER with high-potency D2 blockers.",
    overview:
      "Parkinson disease psychosis is the emergence of hallucinations (classically well-formed visual images, sometimes a sense of a presence or passage) and, later, delusions in someone with established Parkinson disease. It sits at the intersection of the disease itself, coexisting cognitive decline, and the dopaminergic medications used to treat motor symptoms. Because dopamine agonism drives both the motor benefit and the psychosis, management is a balancing act: quieten the psychosis without freezing the patient. The cardinal rule is that dopamine-blocking antipsychotics can precipitate a catastrophic worsening of parkinsonism, so high-potency D2 blockers are avoided.",
    epidemiology:
      "Hallucinations affect a large minority of Parkinson patients and become more common with longer disease duration, older age, and coexisting dementia; minor phenomena often precede frank psychosis by years.",
    presentation: [
      "Visual hallucinations are the hallmark, frequently of people or animals and often initially non-threatening",
      "Minor phenomena — illusions, sense of presence, fleeting images in the peripheral field — commonly come first",
      "Delusions (often paranoid or of spousal infidelity) appear later and are more distressing",
      "Insight is variable and tends to erode as cognition declines",
      "Symptoms cluster with cognitive impairment, sleep disturbance and higher dopaminergic drug burden",
    ],
    redFlags: [
      "Sudden onset or fluctuating confusion — screen for superimposed delirium (infection, metabolic upset, new drug) first",
      "AVOID high-potency D2 antagonists (e.g., haloperidol, risperidone) — they can trigger severe rigidity and immobility",
      "Watch for neuroleptic sensitivity, especially where Lewy body pathology is suspected",
      "Distressing or dangerous delusions warrant urgent, cautious treatment",
    ],
    workup: [
      "Look for and treat a reversible trigger: infection, dehydration, metabolic disturbance, pain, or a newly added drug",
      "Review the antiparkinsonian regimen — simplify by trimming the most psychotogenic agents first (anticholinergics, amantadine, then dopamine agonists, then reducing levodopa last)",
      "Assess cognition, since psychosis and dementia frequently travel together in advanced disease",
      "Baseline ECG if a QT-affecting antipsychotic is contemplated",
    ],
    management: {
      overview:
        "First reduce or remove aggravating drugs in a stepwise fashion; if an antipsychotic is still needed, use only agents with minimal D2 blockade at low dose. Quetiapine is the pragmatic first choice, clozapine has the strongest evidence but demands blood monitoring, and pimavanserin — a selective 5-HT2A inverse agonist with no dopamine blockade — is approved for this indication in the US (not in Canada). Cholinesterase inhibitors can help where dementia coexists.",
      firstLine: [
        {
          text: "Reduce/rationalise dopaminergic and anticholinergic burden, then low-dose quetiapine (minimal motor worsening, though evidence is modest)",
          meds: ["quetiapine"],
        },
      ],
      later: [
        {
          text: "Low-dose clozapine — best evidence for efficacy without worsening motor function; requires neutrophil monitoring",
          meds: ["clozapine"],
        },
        {
          text: "Pimavanserin — 5-HT2A inverse agonist, US-approved for PD psychosis, not marketed in Canada (carries the class dementia-related mortality warning)",
          meds: ["pimavanserin"],
        },
        {
          text: "Cholinesterase inhibitors may reduce psychosis and stabilise cognition in Parkinson/Lewy body dementia",
          meds: ["rivastigmine", "donepezil"],
        },
      ],
      nonPharm: [
        "Reassurance and caregiver education for non-distressing hallucinations that retain insight",
        "Optimise vision and lighting; reduce ambiguous visual cues",
        "Treat sleep disruption and screen for depression",
        "Correct sensory and environmental contributors",
      ],
    },
    meds: ["quetiapine", "clozapine", "pimavanserin", "rivastigmine", "donepezil"],
    related: ["dementia", "delirium", "schizophrenia", "eps"],
    sources: [
      {
        name: "Movement Disorder Society evidence-based review — treatments for PD non-motor symptoms (psychosis)",
        url: "https://www.movementdisorders.org/MDS/Resources/Publications-Reviews/EBM-Reviews.htm",
      },
    ],
  },

  {
    id: "delirium",
    name: "Delirium",
    aka: [
      "delirium",
      "acute confusional state",
      "acute confusion",
      "encephalopathy",
      "acute brain failure",
      "icu delirium",
    ],
    category: "Neurocognitive",
    oneLiner:
      "Acute, fluctuating disturbance of attention and awareness from an underlying medical cause — treat the cause, not just the agitation.",
    overview:
      "Delirium is an acute and characteristically fluctuating disturbance of attention, awareness and cognition that develops over hours to days as a direct consequence of a medical problem, a drug, a toxin, or withdrawal. Attention is the core deficit: the patient cannot sustain or shift focus, and the level of arousal waves between drowsy and hyperalert, often worse at night ('sundowning'). It is common, frequently missed — especially the quiet, hypoactive form — and is an independent marker of poor outcomes. The single most important intervention is to find and correct the underlying cause; medication is only for safety when agitation threatens the patient or care.",
    epidemiology:
      "Delirium affects a large share of hospitalised older adults and the majority of ICU patients; risk rises steeply with pre-existing dementia, advanced age, and severe illness.",
    presentation: [
      "Acute onset with a fluctuating course over the day, typically worse in the evening/overnight",
      "Inattention is the central feature — easily distracted, unable to follow a train of thought",
      "Disorganised thinking, disorientation, perceptual disturbances or transient hallucinations",
      "Hyperactive (agitated, restless), hypoactive (drowsy, withdrawn — easily overlooked), or mixed subtypes",
      "Altered sleep-wake cycle and clouded, shifting level of consciousness",
    ],
    redFlags: [
      "Hypoactive delirium is easily mistaken for depression or fatigue and carries a worse prognosis — screen actively",
      "New confusion is a symptom, not a diagnosis — hunt for hypoxia, infection, metabolic derangement, urinary retention, stroke, or a culprit drug",
      "AVOID benzodiazepines except in alcohol or sedative/benzodiazepine withdrawal — they usually deepen delirium",
      "Beware anticholinergic and opioid burden as precipitants",
    ],
    workup: [
      "Use a validated tool (e.g., CAM/CAM-ICU) and compare with the patient's baseline cognition",
      "Systematic search for causes — infection, hypoxia, electrolyte/glucose disturbance, renal/hepatic failure, urinary retention or constipation, pain, and new medications",
      "Review the medication list for deliriogenic agents (anticholinergics, benzodiazepines, opioids, sedatives)",
      "Targeted bloods, cultures, and imaging/EEG guided by the clinical picture",
    ],
    management: {
      overview:
        "Treat the underlying cause and apply non-drug measures first — these are the mainstay. Reserve pharmacology for severe agitation that endangers the patient or essential care, using the lowest effective dose of an antipsychotic for the shortest time (CCSMH guidance). Benzodiazepines are avoided as a treatment of delirium itself, the exception being alcohol/sedative withdrawal, where they are the treatment.",
      firstLine: [
        {
          text: "Non-pharmacological bundle: reorientation, sleep hygiene, mobilisation, hydration, sensory aids, family presence, and removing offending drugs — first-line for all",
          meds: [],
        },
      ],
      later: [
        {
          text: "Severe/dangerous agitation only: short-term low-dose antipsychotic (haloperidol classically, or a low-dose atypical), targeting behaviour rather than the confusion itself",
          meds: ["haloperidol", "quetiapine", "risperidone", "olanzapine"],
        },
        {
          text: "Alcohol or benzodiazepine withdrawal delirium: benzodiazepines are the treatment of choice (the only setting where they are indicated in delirium)",
          meds: ["lorazepam"],
        },
        {
          text: "ICU/ventilated patients: dexmedetomidine as a sedation strategy associated with less delirium than benzodiazepine-based sedation",
          meds: ["dexmedetomidine"],
        },
      ],
      nonPharm: [
        "Frequent reorientation and a calm, well-lit daytime / dark quiet night environment",
        "Restore glasses and hearing aids; encourage early mobilisation",
        "Protect the sleep-wake cycle and avoid unnecessary lines/restraints",
        "Involve family and maintain hydration and nutrition",
      ],
    },
    meds: [
      "haloperidol",
      "quetiapine",
      "risperidone",
      "olanzapine",
      "lorazepam",
      "dexmedetomidine",
    ],
    related: ["dementia", "agitation", "anticholinergic-toxicity", "aud"],
    sources: [
      {
        name: "CCSMH Canadian Guidelines on the Assessment & Treatment of Delirium in Older Adults",
        url: "https://ccsmh.ca/areas-of-focus/delirium/",
      },
    ],
  },

  {
    id: "dementia",
    name: "Major neurocognitive disorder (dementia)",
    aka: [
      "dementia",
      "major neurocognitive disorder",
      "alzheimer",
      "alzheimer's disease",
      "alzheimer disease",
      "neurocognitive disorder",
      "bpsd",
    ],
    category: "Neurocognitive",
    oneLiner:
      "Progressive, acquired cognitive decline; symptomatic cognitive drugs plus careful, time-limited management of behavioural symptoms.",
    overview:
      "Major neurocognitive disorder — dementia — is an acquired, usually progressive decline in one or more cognitive domains (memory, language, executive function, attention, visuospatial ability or social cognition) that is severe enough to compromise independence in everyday activities, and which is not explained by delirium or another mental disorder. Alzheimer disease is the commonest cause, followed by vascular, Lewy body and frontotemporal types. Alongside cognitive loss, most patients develop behavioural and psychological symptoms of dementia (BPSD) — agitation, psychosis, mood and sleep disturbance — which drive much of the caregiver burden and are managed cautiously because antipsychotics carry a mortality risk in this population.",
    epidemiology:
      "Prevalence rises sharply with age, roughly doubling every five years after 65; Alzheimer disease accounts for the majority of cases and women are affected somewhat more often, partly reflecting longevity.",
    presentation: [
      "Insidious, progressive cognitive decline — prominent short-term memory loss in Alzheimer type",
      "Functional erosion: difficulty with finances, medications, cooking, driving and other complex tasks",
      "BPSD: agitation, aggression, wandering, apathy, depression, delusions, hallucinations, and disrupted sleep",
      "Pattern hints at aetiology — stepwise decline (vascular), visual hallucinations with parkinsonism and fluctuations (Lewy body), early personality/behaviour change (frontotemporal)",
      "Stable arousal and chronic course distinguish it from the acute, fluctuating attention deficit of delirium",
    ],
    redFlags: [
      "Antipsychotics carry a BOXED WARNING for increased mortality (and stroke) in older adults with dementia-related psychosis — use only for serious, refractory symptoms, at low dose, time-limited, after informed consent",
      "Abrupt worsening suggests superimposed delirium — look for a medical trigger",
      "Rapidly progressive dementia warrants urgent workup for reversible/atypical causes",
      "Screen for safety: driving, wandering, fire/gas risk, medication mismanagement",
    ],
    workup: [
      "Cognitive testing (e.g., MoCA/MMSE) with a collateral history and functional assessment",
      "Exclude reversible contributors: B12, thyroid, calcium, metabolic panel, medication review (deprescribe anticholinergics/sedatives), depression screen",
      "Structural neuroimaging (CT/MRI) to characterise the subtype and exclude alternatives",
      "For BPSD, look for unmet needs, pain, infection, constipation or environmental triggers before reaching for drugs",
    ],
    management: {
      overview:
        "Cholinesterase inhibitors are the mainstay symptomatic treatment for mild-to-moderate Alzheimer (and Lewy body/Parkinson dementia), with memantine added in moderate-to-severe disease or where cholinesterase inhibitors are not tolerated. BPSD are addressed first with non-pharmacological, person-centred approaches; when medication is unavoidable, it is used sparingly and reviewed for discontinuation (CCSMH/Canadian consensus guidance).",
      firstLine: [
        {
          text: "Cholinesterase inhibitors for mild–moderate Alzheimer (and Lewy body / Parkinson dementia)",
          meds: ["donepezil", "galantamine", "rivastigmine"],
        },
        {
          text: "Memantine (NMDA antagonist) for moderate–severe disease, alone or added to a cholinesterase inhibitor",
          meds: ["memantine"],
        },
      ],
      later: [
        {
          text: "BPSD, serious/refractory only: cautious, low-dose, time-limited antipsychotic — risperidone has the best evidence and is the agent formally indicated for severe aggression/psychosis in dementia (weigh against the mortality warning)",
          meds: ["risperidone", "aripiprazole", "quetiapine", "olanzapine", "brexpiprazole"],
        },
        {
          text: "Agitation/depression: an SSRI (e.g., citalopram) can reduce agitation; trazodone is used for sleep and for behavioural symptoms in frontotemporal dementia",
          meds: ["citalopram", "trazodone"],
        },
      ],
      nonPharm: [
        "Structured routine, orientation cues, and a calm predictable environment",
        "Identify and address unmet needs, pain, and environmental triggers of behaviour",
        "Caregiver education, support and respite; behavioural activation and tailored activities",
        "Optimise vision/hearing, sleep and physical activity; review and deprescribe anticholinergics",
      ],
    },
    meds: [
      "donepezil",
      "galantamine",
      "rivastigmine",
      "memantine",
      "risperidone",
      "aripiprazole",
      "quetiapine",
      "olanzapine",
      "brexpiprazole",
      "citalopram",
      "trazodone",
    ],
    related: ["delirium", "pd-psychosis", "agitation", "metabolic-syndrome"],
    sources: [
      {
        name: "CCSMH Canadian Guidelines on Assessment & Treatment of BPSD",
        url: "https://ccsmh.ca/areas-of-focus/behavioural-issues-in-older-adults/",
      },
    ],
  },

  {
    id: "agitation",
    name: "Acute agitation (behavioural emergency)",
    aka: [
      "acute agitation",
      "agitation",
      "behavioural emergency",
      "behavioral emergency",
      "psychomotor agitation",
      "acute behavioural disturbance",
      "rapid tranquillisation",
    ],
    category: "Other",
    oneLiner:
      "Escalating arousal/aggression demanding immediate safety — de-escalate first; medicate collaboratively when needed.",
    overview:
      "Acute agitation is a state of heightened arousal, motor restlessness and building hostility that can rapidly progress to aggression toward self, staff or property. It is a symptom of many conditions — intoxication or withdrawal, delirium, psychosis, mania, dementia, or acute stress — and management runs in parallel: keep everyone safe, work out and treat the cause, and calm the patient with the least coercive means possible. Modern practice (e.g., Project BETA) frames verbal de-escalation and offered oral medication as the goal, reserving parenteral medication and restraint for when safety cannot otherwise be secured.",
    epidemiology:
      "A frequent presentation in emergency departments and inpatient psychiatric and medical units; underlying causes range from substance-related states to primary psychiatric illness and neurocognitive disorders.",
    presentation: [
      "Escalating motor activity, pacing, clenched posture, invasion of personal space",
      "Rising verbal hostility, threats, and reduced ability to be redirected",
      "Signs pointing to a cause: intoxication/withdrawal, psychosis, mania, delirium, or dementia",
      "A behavioural spectrum from anxious restlessness through to imminent violence",
    ],
    redFlags: [
      "Screen for medical/organic causes (hypoxia, hypoglycaemia, delirium, head injury, intoxication/withdrawal) — agitation is not always psychiatric",
      "AVOID combining IM olanzapine with a parenteral benzodiazepine — the pairing risks excessive sedation and cardiorespiratory depression; separate them in time",
      "Monitor airway, oximetry and vitals after any parenteral sedation ('rapid tranquillisation')",
      "Caution with benzodiazepines in delirium and in the elderly (paradoxical worsening); prefer cause-directed treatment",
    ],
    workup: [
      "Rapid risk assessment for staff and patient safety and environmental control",
      "Vital signs, glucose and oximetry as soon as safely feasible to catch reversible causes",
      "Establish the likely driver (substance state, psychosis, mania, delirium, dementia) to guide agent choice",
      "Baseline/consideration of ECG where a QT-prolonging antipsychotic is used",
    ],
    management: {
      overview:
        "Verbal de-escalation is always the first intervention and is often sufficient. Offer oral medication before parenteral; match the drug to the cause. For undifferentiated or psychotic agitation an antipsychotic (± a benzodiazepine, kept separate from IM olanzapine) is typical; for substance withdrawal a benzodiazepine leads. Aim for a calm, cooperative patient — not sleep — and re-assess frequently (Project BETA / rapid tranquillisation principles).",
      firstLine: [
        {
          text: "Verbal de-escalation and a safe environment; offer oral/collaborative medication (e.g., an oral second-generation antipsychotic ± benzodiazepine, or inhaled loxapine in cooperative patients)",
          meds: ["risperidone", "olanzapine", "quetiapine", "lorazepam", "loxapine"],
        },
      ],
      later: [
        {
          text: "Parenteral options when oral is refused/insufficient: IM antipsychotic (haloperidol, olanzapine, ziprasidone; droperidol where available) and/or IM benzodiazepine — do NOT give IM olanzapine together with a parenteral benzodiazepine",
          meds: ["haloperidol", "olanzapine", "ziprasidone", "droperidol", "midazolam", "lorazepam"],
        },
        {
          text: "Substance withdrawal (e.g., alcohol/benzodiazepine): benzodiazepine-led approach; sublingual dexmedetomidine is an option for mild–moderate agitation in schizophrenia/bipolar",
          meds: ["lorazepam", "diazepam", "dexmedetomidine"],
        },
      ],
      nonPharm: [
        "Trained verbal de-escalation, non-threatening stance and clear limits",
        "Reduce stimulation; offer space, food/drink and choices where safe",
        "Address unmet needs and the underlying cause",
        "Use restraint only as a last resort, briefly, with close monitoring",
      ],
    },
    meds: [
      "risperidone",
      "olanzapine",
      "quetiapine",
      "loxapine",
      "haloperidol",
      "ziprasidone",
      "droperidol",
      "midazolam",
      "lorazepam",
      "diazepam",
      "dexmedetomidine",
    ],
    related: ["schizophrenia", "delirium", "dementia", "aud"],
    sources: [
      {
        name: "Project BETA — Verbal De-escalation & Psychopharmacology of Agitation (West J Emerg Med, 2012)",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3298219/",
      },
    ],
  },
];
