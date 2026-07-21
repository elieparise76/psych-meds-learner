// Drug-related SYNDROME pages for the psych-meds-learner app.
// Focus: `presentation` = RECOGNITION, `management` = TREATMENT, `meds` = CULPRIT drugs
// (plus antidote/treatment drugs that exist in the deck). Antidotes not in the deck
// (cyproheptadine, dantrolene, bromocriptine, physostigmine, phentolamine, metformin)
// are described in prose only. Original educational prose — no verbatim DSM-5 criteria.

export default [
  {
    id: "serotonin-syndrome",
    name: "Serotonin syndrome",
    aka: [
      "serotonin syndrome",
      "serotonin toxicity",
      "serotonergic toxicity",
      "5-ht syndrome",
      "ssri toxicity",
      "is this serotonin syndrome",
      "serotonin toxidrome"
    ],
    category: "Syndrome",
    oneLiner: "Acute, potentially fatal excess of serotonergic activity — the triad of neuromuscular excitation, autonomic instability, and altered mental status.",
    overview: "Serotonin syndrome (better called serotonin toxicity) is a predictable, dose-related reaction to too much serotonergic drug activity — usually within hours of starting, increasing, or combining serotonergic agents, or after overdose. It spans a spectrum from mild tremor to a life-threatening state with hyperthermia and rigidity. The hallmark that separates it from its main mimic (NMS) is neuromuscular excitation — clonus and hyperreflexia, predominantly in the lower limbs — with a rapid onset.",
    epidemiology: "Most severe cases arise from drug combinations, classically an MAOI plus another serotonergic agent; it is under-recognised because mild presentations are easily missed.",
    presentation: [
      "Neuromuscular excitation: inducible, spontaneous, or ocular clonus; hyperreflexia; tremor; myoclonus; rigidity (lower limbs > upper) — the key discriminator from NMS",
      "Autonomic instability: hyperthermia, tachycardia, hypertension, diaphoresis, mydriasis, flushing, diarrhoea, hyperactive bowel sounds",
      "Altered mental status: agitation, anxiety, restlessness, delirium",
      "Rapid onset — often within 6–24 h of a serotonergic change (vs the days-long onset of NMS)",
      "Hunter Criteria approach: serotonergic agent PLUS clonus (spontaneous/inducible/ocular) with agitation, diaphoresis, tremor, hyperreflexia, or temperature > 38 °C"
    ],
    redFlags: [
      "Core temperature > 41 °C — hyperthermic emergency; risk of rhabdomyolysis, DIC, and death",
      "Sustained clonus or rigidity with hyperthermia — needs sedation, paralysis, cooling, and ICU care",
      "MAOI combined with any other serotonergic drug — the highest-risk scenario, can be fatal"
    ],
    workup: [
      "Clinical diagnosis (Hunter Criteria) — there is no confirmatory laboratory test",
      "Medication reconciliation: SSRIs/SNRIs, MAOIs, TCAs, plus non-deck agents (tramadol, linezolid, methylene blue, triptans, dextromethorphan, St John's wort); note any recent dose increase or overdose",
      "Bloods: CK (rhabdomyolysis), renal function, electrolytes, coagulation; ECG; continuous core temperature",
      "Differentiate from NMS (dopamine blocker, slower onset, bradyreflexia and lead-pipe rigidity), anticholinergic toxicity (dry skin, normal reflexes), and malignant hyperthermia"
    ],
    management: {
      overview: "Stop all serotonergic agents; supportive care is the cornerstone. Benzodiazepines control agitation and clonus; the 5-HT2A antagonist cyproheptadine is the antidote for moderate–severe cases (NOTE: cyproheptadine is not in this deck); aggressive cooling and ICU care are needed for hyperthermia.",
      firstLine: [
        { text: "Immediately STOP all serotonergic drugs (SSRIs/SNRIs/MAOIs/TCAs and non-deck culprits such as tramadol/linezolid)", meds: ["sertraline", "escitalopram", "citalopram", "fluoxetine", "fluvoxamine", "paroxetine", "venlafaxine", "desvenlafaxine", "duloxetine", "levomilnacipran", "phenelzine", "tranylcypromine", "moclobemide", "selegiline", "clomipramine", "amitriptyline", "trazodone", "vortioxetine", "esketamine"] },
        { text: "Benzodiazepines to control agitation, tremor, and clonus", meds: ["lorazepam", "diazepam", "midazolam"] },
        { text: "Supportive care: IV fluids, active external cooling, continuous cardiorespiratory and temperature monitoring", meds: [] }
      ],
      later: [
        { text: "Cyproheptadine (oral 5-HT2A antagonist antidote) for moderate–severe cases — NOT in this deck", meds: [] },
        { text: "Severe/hyperthermic: intubation, deep sedation, neuromuscular paralysis, ICU; avoid antipyretics (ineffective here) and physical restraints (worsen isometric heat production)", meds: [] }
      ],
      nonPharm: [
        "Continuous vitals plus core-temperature monitoring",
        "External cooling for hyperthermia; ICU-level sedation and paralysis if severe",
        "Most mild cases resolve within 24–72 h once the offending agent is stopped",
        "Prevent by respecting MAOI washout intervals before/after other serotonergic drugs"
      ]
    },
    meds: ["sertraline", "escitalopram", "citalopram", "fluoxetine", "fluvoxamine", "paroxetine", "venlafaxine", "desvenlafaxine", "duloxetine", "levomilnacipran", "phenelzine", "tranylcypromine", "moclobemide", "selegiline", "clomipramine", "amitriptyline", "trazodone", "vortioxetine", "mirtazapine", "esketamine", "lithium", "lorazepam", "diazepam", "midazolam"],
    related: ["nms", "discontinuation-syndrome", "tyramine-crisis", "mdd"],
    sources: [
      { name: "Boyer & Shannon — The Serotonin Syndrome (NEJM 2005)", url: "https://www.nejm.org/doi/full/10.1056/NEJMra041867" }
    ]
  },

  {
    id: "nms",
    name: "Neuroleptic malignant syndrome",
    aka: [
      "nms",
      "neuroleptic malignant syndrome",
      "antipsychotic malignant syndrome",
      "neuroleptic malignant",
      "is this nms"
    ],
    category: "Syndrome",
    oneLiner: "Idiosyncratic, life-threatening reaction to dopamine-blocking drugs — fever, lead-pipe rigidity, autonomic instability, and markedly raised CK.",
    overview: "NMS is a rare but life-threatening reaction to dopamine D2 blockade (or to abrupt withdrawal of a dopaminergic drug). Loss of central dopamine tone produces hyperthermia, severe generalised rigidity, altered mental status, and autonomic dysfunction, with a hallmark rise in creatine kinase from muscle breakdown. Onset is over days — slower than serotonin syndrome — and untreated cases carry significant mortality.",
    epidemiology: "Uncommon (well under 1% of antipsychotic exposures) but more likely with high-potency FGAs, rapid titration, parenteral/depot dosing, dehydration, agitation, and in younger males.",
    presentation: [
      "Classic tetrad: hyperthermia (often > 38–40 °C), generalised 'lead-pipe' rigidity, altered mental status (confusion → stupor → coma), autonomic instability (labile BP, tachycardia, diaphoresis, tachypnoea)",
      "Onset over 1–3 days, usually within two weeks of starting or increasing a dopamine blocker",
      "Bradyreflexia with lead-pipe rigidity — contrast with the hyperreflexia and clonus of serotonin syndrome",
      "Can also follow abrupt withdrawal of a dopaminergic agent (e.g., amantadine, levodopa)"
    ],
    redFlags: [
      "Rising temperature with rigidity and elevated CK — treat as a medical emergency",
      "Rhabdomyolysis → acute kidney injury; also risk of DIC and respiratory failure",
      "CK typically > 1000 and can reach the tens of thousands"
    ],
    workup: [
      "Elevated CK (hallmark), leukocytosis, raised LFTs, metabolic acidosis, myoglobinuria; low serum iron is characteristic",
      "Exclude serotonin syndrome (onset/reflexes), anticholinergic toxicity, malignant hyperthermia, CNS infection, sepsis, and heat stroke",
      "Culprit review: any D2 blocker including antiemetic antipsychotics (prochlorperazine, droperidol); check for recent dopaminergic withdrawal"
    ],
    management: {
      overview: "Stop the offending antipsychotic immediately and give aggressive supportive care (cooling, fluids, electrolyte correction). Moderate–severe cases may need dantrolene and/or the dopamine agonist bromocriptine (concepts — not in the deck); benzodiazepines help agitation; ECT is an option if refractory.",
      firstLine: [
        { text: "STOP the causative dopamine blocker (any antipsychotic); if the trigger was dopaminergic withdrawal, resume that agent", meds: ["haloperidol", "fluphenazine", "trifluoperazine", "perphenazine", "loxapine", "flupenthixol", "zuclopenthixol", "pimozide", "pipotiazine", "prochlorperazine", "droperidol", "chlorpromazine", "methotrimeprazine", "olanzapine", "risperidone", "paliperidone", "quetiapine", "clozapine", "aripiprazole", "ziprasidone", "lurasidone", "asenapine", "cariprazine", "brexpiprazole", "lumateperone"] },
        { text: "Aggressive supportive care: IV fluids, active cooling, electrolyte correction, monitor for rhabdomyolysis/AKI", meds: [] },
        { text: "Benzodiazepines for agitation and milder cases", meds: ["lorazepam", "diazepam"] }
      ],
      later: [
        { text: "Moderate–severe: dantrolene (muscle relaxant) and/or bromocriptine (dopamine agonist) — concepts, not in this deck; amantadine is a deck dopaminergic sometimes used adjunctively", meds: ["amantadine"] },
        { text: "Refractory or malignant-catatonia picture: ECT", meds: [] },
        { text: "Rechallenge only after full recovery (wait ≥ 2 weeks) using a lower-potency agent at low dose with slow titration", meds: [] }
      ],
      nonPharm: [
        "ICU-level supportive care with cooling and aggressive hydration",
        "ECT for refractory cases",
        "Cautious rechallenge with a different, lower-potency antipsychotic after recovery"
      ]
    },
    meds: ["haloperidol", "fluphenazine", "trifluoperazine", "perphenazine", "loxapine", "flupenthixol", "zuclopenthixol", "pimozide", "pipotiazine", "prochlorperazine", "droperidol", "chlorpromazine", "methotrimeprazine", "olanzapine", "risperidone", "paliperidone", "quetiapine", "clozapine", "aripiprazole", "ziprasidone", "lurasidone", "asenapine", "cariprazine", "brexpiprazole", "lumateperone", "amantadine", "lorazepam", "diazepam"],
    related: ["serotonin-syndrome", "eps", "tardive-dyskinesia", "metabolic-syndrome", "schizophrenia"],
    sources: [
      { name: "Berman — Neuroleptic Malignant Syndrome: A Review (Neurohospitalist 2011)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3726098/" }
    ]
  },

  {
    id: "eps",
    name: "Extrapyramidal symptoms",
    aka: [
      "eps",
      "extrapyramidal symptoms",
      "extrapyramidal side effects",
      "drug-induced movement disorder",
      "acute dystonia",
      "dystonic reaction",
      "akathisia",
      "drug-induced parkinsonism"
    ],
    category: "Syndrome",
    oneLiner: "Dopamine-blockade movement disturbances — acute dystonia, akathisia, and parkinsonism — each matched to a specific antidote.",
    overview: "EPS are movement disturbances from D2 blockade in the nigrostriatal pathway. They come in classic forms defined by timing: acute dystonia (hours–days), akathisia (days–weeks), and drug-induced parkinsonism (weeks); tardive dyskinesia (months–years) is covered on its own page. Recognising which form is present matters because the treatment differs for each.",
    epidemiology: "Common with high-potency FGAs and higher-dose SGAs (especially risperidone/paliperidone); acute dystonia favours young males, while parkinsonism is commoner in older and female patients.",
    presentation: [
      "Acute dystonia: sudden, sustained, painful muscle spasm — torticollis, oculogyric crisis, trismus, or laryngospasm (airway emergency); onset within hours to days",
      "Akathisia: distressing inner restlessness with an inability to sit still, pacing, and fidgeting — easily mistaken for agitation or worsening psychosis, and linked to distress and suicidality",
      "Drug-induced parkinsonism: bradykinesia, cogwheel rigidity, resting tremor, masked facies; develops over weeks",
      "Timing plus phenomenology point to the diagnosis and to the correct antidote"
    ],
    redFlags: [
      "Laryngeal or pharyngeal dystonia → airway compromise — give a parenteral anticholinergic immediately",
      "Akathisia misread as psychotic agitation, leading to a dose increase that makes it worse — screen actively; it is linked to suicidality",
      "Oculogyric crisis or opisthotonos"
    ],
    workup: [
      "Clinical; correlate onset with antipsychotic start or dose change; use rating scales (e.g., Barnes Akathisia Rating Scale, Simpson-Angus Scale)",
      "Distinguish from a primary movement disorder, catatonia, anxiety, and serotonin syndrome/NMS"
    ],
    management: {
      overview: "Match the treatment to the subtype: anticholinergics for acute dystonia and parkinsonism, propranolol (or a benzodiazepine) for akathisia, and reduce the dose or switch to a lower-EPS agent.",
      firstLine: [
        { text: "Acute dystonia: parenteral anticholinergic — benztropine (or procyclidine/trihexyphenidyl); IV diphenhydramine is an alternative (not in deck)", meds: ["benztropine", "procyclidine", "trihexyphenidyl"] },
        { text: "Akathisia: propranolol is first-line; a benzodiazepine is an alternative; reduce the antipsychotic dose", meds: ["propranolol", "clonazepam", "lorazepam"] },
        { text: "Drug-induced parkinsonism: reduce the dose or switch to a lower-potency agent; add an anticholinergic or amantadine if needed", meds: ["benztropine", "trihexyphenidyl", "procyclidine", "amantadine"] }
      ],
      later: [
        { text: "Refractory: switch to a lower-EPS antipsychotic (e.g., quetiapine, clozapine, aripiprazole); avoid long-term anticholinergics (cognitive burden, TD risk)", meds: ["quetiapine", "clozapine", "aripiprazole"] }
      ],
      nonPharm: [
        "Prevent by choosing a lower-potency/lower-dose antipsychotic",
        "Actively screen for akathisia — it is frequently missed",
        "Anticholinergics treat acute dystonia and parkinsonism, NOT akathisia or tardive dyskinesia"
      ]
    },
    meds: ["haloperidol", "fluphenazine", "trifluoperazine", "perphenazine", "loxapine", "flupenthixol", "zuclopenthixol", "pimozide", "pipotiazine", "prochlorperazine", "droperidol", "chlorpromazine", "methotrimeprazine", "risperidone", "paliperidone", "benztropine", "procyclidine", "trihexyphenidyl", "propranolol", "clonazepam", "lorazepam", "amantadine", "quetiapine", "clozapine", "aripiprazole"],
    related: ["nms", "tardive-dyskinesia", "schizophrenia", "agitation"],
    sources: [
      { name: "Remington et al — Canadian Schizophrenia Guidelines (Can J Psychiatry 2017)", url: "https://journals.sagepub.com/doi/10.1177/0706743717720448" }
    ]
  },

  {
    id: "tardive-dyskinesia",
    name: "Tardive dyskinesia",
    aka: [
      "tardive dyskinesia",
      "td",
      "tardive syndrome",
      "tardive dystonia",
      "orofacial dyskinesia",
      "tardive"
    ],
    category: "Syndrome",
    oneLiner: "Late-onset, often irreversible involuntary movements from chronic dopamine-blocker exposure — treated with VMAT2 inhibitors and worsened by anticholinergics.",
    overview: "After months to years of D2 blockade, dopamine-receptor upregulation and supersensitivity produce involuntary choreoathetoid movements — classically orofacial (lip-smacking, tongue protrusion, grimacing) but also limb, trunk, and respiratory. Unlike acute EPS, tardive dyskinesia frequently persists after the drug is stopped, so prevention and early detection are essential.",
    epidemiology: "Risk rises with cumulative FGA exposure, older age, female sex, diabetes, and longer duration; it is lower but still real with SGAs. Annual incidence is substantially higher with FGAs than SGAs.",
    presentation: [
      "Involuntary, repetitive, choreoathetoid movements — orofacial (lip-smacking, chewing, tongue-thrusting) plus limb, trunk, or respiratory involvement",
      "Late onset (typically after > 3 months of exposure, often years); may first appear or worsen when the dose is reduced or the drug withdrawn",
      "Often irreversible — a key contrast with acute EPS, which respond to anticholinergics and resolve",
      "Anticholinergics WORSEN tardive dyskinesia (the opposite of their effect in acute dystonia/parkinsonism)"
    ],
    redFlags: [
      "Progressive or disabling TD (dysphagia, respiratory, or gait involvement) — start VMAT2 therapy and reassess urgently",
      "Masking by simply increasing the antipsychotic — it transiently suppresses movements but worsens the long-term course"
    ],
    workup: [
      "Serial AIMS (Abnormal Involuntary Movement Scale) at baseline and periodically",
      "Confirm ≥ 3 months of dopamine-blocker exposure; exclude other dyskinesias (Huntington, Wilson, levodopa-induced, stimulant-related)"
    ],
    management: {
      overview: "Prevent with the lowest effective dose and preferential use of SGAs. Once TD is present, reduce or switch the antipsychotic where clinically safe, start a VMAT2 inhibitor, and stop anticholinergics because they worsen it.",
      firstLine: [
        { text: "VMAT2 inhibitors — valbenazine or deutetrabenazine (best evidence); tetrabenazine is an older option", meds: ["valbenazine", "deutetrabenazine", "tetrabenazine"] },
        { text: "Reduce the dose or switch to a lower-risk agent (e.g., clozapine, quetiapine); do not stop abruptly (withdrawal can unmask/worsen movements)", meds: ["clozapine", "quetiapine"] },
        { text: "STOP anticholinergics — they worsen tardive dyskinesia", meds: ["benztropine", "trihexyphenidyl", "procyclidine"] }
      ],
      later: [
        { text: "Refractory: consider a switch to clozapine; botulinum toxin for focal tardive dystonia (not in deck)", meds: ["clozapine"] }
      ],
      nonPharm: [
        "Prevention: lowest effective dose, prefer SGAs, and regular AIMS screening",
        "Early recognition matters — TD is frequently permanent",
        "Avoid anticholinergics in anyone with, or at risk of, TD"
      ]
    },
    meds: ["haloperidol", "fluphenazine", "trifluoperazine", "perphenazine", "loxapine", "flupenthixol", "zuclopenthixol", "pimozide", "pipotiazine", "prochlorperazine", "droperidol", "chlorpromazine", "methotrimeprazine", "risperidone", "paliperidone", "olanzapine", "quetiapine", "aripiprazole", "valbenazine", "deutetrabenazine", "tetrabenazine", "clozapine", "benztropine", "trihexyphenidyl", "procyclidine"],
    related: ["eps", "nms", "schizophrenia"],
    sources: [
      { name: "Bhidayasiri et al — AAN Evidence-Based Guideline: Treatment of Tardive Syndromes (Neurology 2013)", url: "https://www.neurology.org/doi/10.1212/WNL.0b013e318281546c" }
    ]
  },

  {
    id: "anticholinergic-toxicity",
    name: "Anticholinergic toxicity",
    aka: [
      "anticholinergic toxicity",
      "anticholinergic toxidrome",
      "anticholinergic syndrome",
      "anticholinergic delirium",
      "anticholinergic burden",
      "antimuscarinic toxicity"
    ],
    category: "Syndrome",
    oneLiner: "Antimuscarinic overload — 'mad, red, hot, dry, and blind' — from TCAs, low-potency antipsychotics, and anticholinergic adjuncts, hitting the elderly hardest.",
    overview: "Anticholinergic toxicity results from blockade of peripheral and central muscarinic receptors. The classic toxidrome is captured by 'blind as a bat (mydriasis), mad as a hatter (delirium), red as a beet (flushing), hot as a hare (hyperthermia/anhidrosis), dry as a bone (dry skin and mouth), full as a flask (urinary retention).' Beyond acute overdose, cumulative 'anticholinergic burden' is a major driver of delirium, falls, and cognitive decline in older adults.",
    epidemiology: "Seen in overdose (especially TCAs) and from cumulative burden of multiple anticholinergic drugs; the elderly are most vulnerable to delirium, falls, and functional decline.",
    presentation: [
      "Central: agitation, confusion, delirium, hallucinations, myoclonus, seizures, coma",
      "Peripheral: mydriasis with blurred vision, dry flushed skin, hyperthermia, tachycardia, urinary retention, ileus with absent bowel sounds",
      "Dry skin and absent sweating distinguish it from serotonin syndrome and sympathomimetic toxidromes (which are diaphoretic)",
      "In TCA overdose, cardiotoxicity is the killer — watch for QRS widening, arrhythmia, hypotension, and seizures"
    ],
    redFlags: [
      "TCA overdose with QRS > 100 ms — give IV sodium bicarbonate; high lethality",
      "Hyperthermia, seizures, or severe agitation",
      "New delirium in an older adult — review the total anticholinergic burden"
    ],
    workup: [
      "Recognise the toxidrome clinically; obtain ECG (QRS/QT, especially with TCAs), core temperature, and a bladder scan for retention",
      "Review anticholinergic burden: TCAs, benztropine/trihexyphenidyl/procyclidine, low-potency antipsychotics, plus non-deck agents (diphenhydramine, oxybutynin)",
      "Exclude serotonin syndrome, NMS, sympathomimetic toxicity, and sepsis"
    ],
    management: {
      overview: "Give supportive care with benzodiazepines for agitation; use IV sodium bicarbonate for TCA cardiotoxicity. Physostigmine (a cholinesterase-inhibitor antidote) is reserved for severe, pure antimuscarinic delirium (not in the deck) and is contraindicated in TCA overdose. In the elderly, deprescribe the offending agents.",
      firstLine: [
        { text: "STOP/deprescribe the offending anticholinergic agents; supportive care with cardiac monitoring", meds: ["amitriptyline", "clomipramine", "imipramine", "doxepin", "trimipramine", "amoxapine", "chlorpromazine", "methotrimeprazine", "clozapine", "olanzapine", "quetiapine", "benztropine", "trihexyphenidyl", "procyclidine", "paroxetine", "hydroxyzine"] },
        { text: "Benzodiazepines for agitation and seizures", meds: ["lorazepam", "diazepam"] },
        { text: "TCA overdose with a wide QRS: IV sodium bicarbonate (not in deck)", meds: [] }
      ],
      later: [
        { text: "Physostigmine (cholinesterase-inhibitor antidote) for severe, isolated antimuscarinic delirium — NOT in this deck; contraindicated with any TCA/QRS widening", meds: [] },
        { text: "In older adults, reduce cumulative anticholinergic burden and switch to lower-burden alternatives", meds: [] }
      ],
      nonPharm: [
        "Active cooling for hyperthermia; catheterisation for urinary retention",
        "Review and reduce anticholinergic burden in older adults (a major delirium/falls risk)",
        "Avoid physostigmine if there is any TCA exposure or QRS widening"
      ]
    },
    meds: ["amitriptyline", "clomipramine", "imipramine", "doxepin", "trimipramine", "amoxapine", "chlorpromazine", "methotrimeprazine", "clozapine", "olanzapine", "quetiapine", "benztropine", "trihexyphenidyl", "procyclidine", "paroxetine", "hydroxyzine", "lorazepam", "diazepam"],
    related: ["eps", "delirium", "nms"],
    sources: [
      { name: "Broderick et al — Anticholinergic Toxicity (StatPearls, NCBI Bookshelf)", url: "https://www.ncbi.nlm.nih.gov/books/NBK534798/" }
    ]
  },

  {
    id: "lithium-toxicity",
    name: "Lithium toxicity",
    aka: [
      "lithium toxicity",
      "lithium poisoning",
      "lithium overdose",
      "lithium level",
      "high lithium level"
    ],
    category: "Syndrome",
    oneLiner: "Narrow-therapeutic-index toxicity — tremor, GI upset, ataxia, and confusion — precipitated by dehydration and interacting drugs; always check the level.",
    overview: "Lithium has a narrow therapeutic window (roughly 0.6–1.0 mmol/L for maintenance; above ~1.5 mmol/L is toxic). Because it is cleared renally and handled like sodium, anything that lowers GFR or depletes salt/volume — dehydration, NSAIDs, thiazides, ACE inhibitors/ARBs — raises the level. Toxicity is predominantly neurological and gastrointestinal and may be acute, acute-on-chronic, or chronic.",
    epidemiology: "Frequently occurs in long-term users during intercurrent illness, dehydration, or after a new interacting medication; older adults and those with renal impairment are at higher risk.",
    presentation: [
      "Early/mild: coarse tremor (vs the fine physiologic tremor of therapeutic use), nausea/vomiting/diarrhoea, polyuria/polydipsia, lethargy",
      "Moderate–severe: ataxia, dysarthria, confusion, myoclonus/fasciculations, hyperreflexia, nystagmus",
      "Severe: seizures, delirium, coma, and cardiovascular collapse; risk of SILENT (persistent neurotoxicity)",
      "Chronic toxicity can be symptomatic at 'lower' levels than an acute overdose"
    ],
    redFlags: [
      "Altered mental status, seizures, or a level typically > 2.5 mmol/L — consider haemodialysis",
      "A new NSAID, thiazide, or ACE inhibitor (or dehydration) in a lithium patient",
      "Coarse tremor plus GI upset and confusion — treat as toxicity until proven otherwise"
    ],
    workup: [
      "Serum lithium level (note timing relative to last dose), renal function, electrolytes (sodium), TSH, and ECG; repeat levels to track clearance",
      "Identify precipitants: volume depletion (vomiting/diarrhoea, diuretics), NSAIDs, thiazides, ACE inhibitors/ARBs, and a low-sodium diet"
    ],
    management: {
      overview: "Stop lithium, restore volume with IV isotonic saline (which enhances renal clearance), withhold interacting drugs, and use haemodialysis for severe toxicity or renal failure.",
      firstLine: [
        { text: "STOP lithium and any interacting/precipitating drugs", meds: ["lithium"] },
        { text: "IV isotonic (0.9%) saline to restore volume and enhance renal excretion", meds: [] },
        { text: "Serial lithium levels, renal function, and cardiac/neurological monitoring", meds: [] }
      ],
      later: [
        { text: "Haemodialysis for severe toxicity (marked neurological signs, very high levels, or renal failure); repeat sessions may be needed because of rebound", meds: [] },
        { text: "After recovery, reassess the indication, dose, renal function, and interactions before restarting", meds: ["lithium"] }
      ],
      nonPharm: [
        "IV fluid resuscitation is the mainstay of mild–moderate toxicity",
        "Haemodialysis for severe cases or renal failure",
        "Prevent: hold lithium during acute illness/dehydration, avoid NSAIDs, and teach hydration and sick-day rules",
        "Whole-bowel irrigation for large ingestions of sustained-release lithium"
      ]
    },
    meds: ["lithium"],
    related: ["bipolar", "serotonin-syndrome"],
    sources: [
      { name: "Yatham et al — CANMAT/ISBD 2018 Bipolar Guidelines (Bipolar Disord 2018)", url: "https://onlinelibrary.wiley.com/doi/10.1111/bdi.12609" }
    ]
  },

  {
    id: "metabolic-syndrome",
    name: "Antipsychotic metabolic syndrome",
    aka: [
      "metabolic syndrome",
      "antipsychotic metabolic syndrome",
      "antipsychotic weight gain",
      "metabolic side effects",
      "antipsychotic-induced diabetes",
      "dyslipidemia from antipsychotics"
    ],
    category: "Syndrome",
    oneLiner: "Antipsychotic-induced weight gain, dyslipidaemia, and dysglycaemia — worst with olanzapine and clozapine — demanding structured metabolic monitoring.",
    overview: "Many antipsychotics (via histamine H1, 5-HT2C, and muscarinic effects) drive weight gain, insulin resistance, dyslipidaemia, and hypertension, which cluster as metabolic syndrome and raise cardiovascular risk. The risk is strongly agent-dependent: olanzapine and clozapine are the worst offenders, while aripiprazole, lurasidone, and ziprasidone carry the least. This is a leading contributor to the large mortality gap in serious mental illness.",
    epidemiology: "A major driver of the roughly 15–20-year reduction in life expectancy in serious mental illness; weight gain can begin within the first weeks to months of treatment.",
    presentation: [
      "Rapid or progressive weight gain (often early) with increasing waist circumference",
      "New or worsening dyslipidaemia (raised triglycerides, low HDL), hyperglycaemia or new-onset diabetes (occasionally presenting as DKA, especially with olanzapine/clozapine), and hypertension",
      "Risk tiers — highest: olanzapine, clozapine; moderate: quetiapine, risperidone, paliperidone, asenapine, chlorpromazine; lowest: aripiprazole, ziprasidone, lurasidone, lumateperone, brexpiprazole, cariprazine",
      "Often clinically silent until complications appear — scheduled monitoring, not symptoms, is what detects it"
    ],
    redFlags: [
      "Polyuria, polydipsia, and weight loss with hyperglycaemia — possible new diabetes or DKA (olanzapine, clozapine)",
      "Large, rapid weight gain in the first weeks of treatment",
      "Pre-existing cardiovascular disease or diabetes at baseline"
    ],
    workup: [
      "Baseline and scheduled monitoring: weight/BMI/waist circumference, fasting glucose or HbA1c, lipid panel, and blood pressure (e.g., at baseline, 12 weeks, then annually)",
      "Assess personal and family history of diabetes, cardiovascular disease, and dyslipidaemia"
    ],
    management: {
      overview: "Choose lower-risk agents where possible, monitor proactively, and intervene early with lifestyle change and, if needed, an agent switch or the addition of metformin (not in the deck); treat lipids, glucose, and blood pressure to target.",
      firstLine: [
        { text: "Prefer lower-metabolic-risk antipsychotics where clinically appropriate", meds: ["aripiprazole", "ziprasidone", "lurasidone", "brexpiprazole", "cariprazine", "lumateperone"] },
        { text: "Start lifestyle intervention (diet, exercise) from initiation, with structured metabolic monitoring", meds: [] },
        { text: "For significant gain, switch from a high-risk agent to a lower-risk one where it is clinically safe", meds: ["olanzapine", "clozapine", "quetiapine"] }
      ],
      later: [
        { text: "Metformin to attenuate antipsychotic-associated weight gain (not in this deck); treat dyslipidaemia (statin), hyperglycaemia, and hypertension to target", meds: [] },
        { text: "Clozapine-specific: its metabolic burden is an accepted trade-off in treatment resistance — manage aggressively rather than stopping a working clozapine", meds: ["clozapine"] }
      ],
      nonPharm: [
        "Diet and exercise counselling started at initiation, not after weight is gained",
        "Structured monitoring of weight, glucose/HbA1c, lipids, and blood pressure",
        "Smoking cessation and broad cardiovascular risk-factor management",
        "Agent selection is the single strongest lever"
      ]
    },
    meds: ["olanzapine", "clozapine", "quetiapine", "risperidone", "paliperidone", "asenapine", "chlorpromazine", "aripiprazole", "ziprasidone", "lurasidone", "lumateperone", "brexpiprazole", "cariprazine"],
    related: ["schizophrenia", "bipolar", "nms"],
    sources: [
      { name: "ADA/APA Consensus on Antipsychotic Drugs and Metabolic Risk (Diabetes Care 2004)", url: "https://diabetesjournals.org/care/article/27/2/596/22482" }
    ]
  },

  {
    id: "discontinuation-syndrome",
    name: "Antidepressant discontinuation syndrome",
    aka: [
      "discontinuation syndrome",
      "antidepressant discontinuation syndrome",
      "antidepressant withdrawal",
      "ssri discontinuation",
      "ssri withdrawal",
      "snri discontinuation",
      "brain zaps",
      "finish syndrome"
    ],
    category: "Syndrome",
    oneLiner: "Withdrawal symptoms after stopping or reducing an antidepressant ('FINISH') — worst with short-half-life agents like paroxetine and venlafaxine; prevented by tapering.",
    overview: "Abrupt cessation, dose reduction, or even missed doses of an antidepressant taken for four or more weeks can produce a self-limiting withdrawal syndrome, usually within a few days and lasting one to two weeks. It reflects neuroadaptation, not addiction. Severity tracks inversely with half-life. A useful mnemonic is FINISH: Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances, and Hyperarousal.",
    epidemiology: "Common; more frequent and more severe with short-half-life SSRIs/SNRIs, and frequently misattributed to relapse of the underlying disorder.",
    presentation: [
      "Flu-like malaise, fatigue, and myalgia; nausea and GI upset; insomnia with vivid dreams",
      "Imbalance and dizziness; sensory 'brain zaps' (electric-shock sensations) and paraesthesia",
      "Hyperarousal: anxiety, irritability, and agitation",
      "Onset within 1–3 days of stopping or lowering the dose — distinct from a depressive/anxiety relapse, which is slower and mood-dominant",
      "Worst with paroxetine and venlafaxine (short half-life); minimal with fluoxetine (long half-life)"
    ],
    redFlags: [
      "Symptoms after an abrupt stop of paroxetine or venlafaxine — restart and taper more slowly",
      "Distinguish from relapse of the underlying disorder (later onset, returning core mood/anxiety symptoms)",
      "MAOI discontinuation can be more severe and abrupt"
    ],
    workup: [
      "Clinical; correlate with a recent dose reduction or missed doses and review the medication timeline",
      "Differentiate from relapse — discontinuation symptoms are early, physical, and self-limiting, whereas relapse is later and mood/anxiety-driven"
    ],
    management: {
      overview: "Prevention by gradual tapering is the key. If it occurs, reassure the patient (it is self-limiting) and either taper more slowly or briefly reinstate the drug and then taper; a fluoxetine bridge helps with hard-to-stop short-half-life agents.",
      firstLine: [
        { text: "Taper gradually over weeks to months rather than stopping abruptly — prevention is the priority", meds: [] },
        { text: "If symptoms are severe, reinstate the antidepressant, stabilise, then taper more slowly", meds: ["paroxetine", "venlafaxine", "duloxetine", "desvenlafaxine", "sertraline"] }
      ],
      later: [
        { text: "Bridge/switch to fluoxetine (long half-life) and then taper, for difficult short-half-life agents such as paroxetine and venlafaxine", meds: ["fluoxetine"] },
        { text: "Reassurance and symptomatic support; symptoms are self-limiting (usually resolving within two weeks)", meds: [] }
      ],
      nonPharm: [
        "Educate before starting: do not stop abruptly and avoid missed doses",
        "Use slow, individualised tapers, with hyperbolic (smaller) steps at the very end",
        "Distinguish discontinuation from relapse to avoid unnecessary indefinite treatment"
      ]
    },
    meds: ["paroxetine", "venlafaxine", "desvenlafaxine", "duloxetine", "sertraline", "fluvoxamine", "citalopram", "escitalopram", "amitriptyline", "phenelzine", "tranylcypromine", "fluoxetine"],
    related: ["mdd", "gad", "serotonin-syndrome"],
    sources: [
      { name: "Kennedy et al — CANMAT 2016 MDD Guidelines (Can J Psychiatry 2016)", url: "https://journals.sagepub.com/doi/10.1177/0706743716659416" }
    ]
  },

  {
    id: "tyramine-crisis",
    name: "Tyramine (hypertensive) crisis",
    aka: [
      "tyramine crisis",
      "tyramine reaction",
      "hypertensive crisis",
      "maoi hypertensive crisis",
      "cheese reaction",
      "maoi tyramine crisis",
      "maoi diet"
    ],
    category: "Syndrome",
    oneLiner: "MAOI plus dietary tyramine triggers a dangerous surge in blood pressure — the 'cheese reaction' — prevented by strict diet on irreversible MAOIs.",
    overview: "Irreversible MAO inhibitors block gut and hepatic MAO-A, so dietary tyramine (a sympathomimetic) escapes breakdown, enters the circulation, and drives a massive release of noradrenaline, producing a hypertensive crisis. Classic triggers are aged cheeses, cured or fermented meats, tap/draught beer, soy products, sauerkraut, and yeast extracts (Marmite). Reversible MAO-A inhibitors such as moclobemide carry a much lower risk.",
    epidemiology: "Risk is highest with irreversible, non-selective/MAO-A inhibitors (phenelzine, tranylcypromine) and high-dose oral selegiline; it is low with moclobemide and low-dose transdermal selegiline.",
    presentation: [
      "Sudden, severe occipital headache with markedly raised blood pressure, palpitations, flushing, sweating, and neck stiffness",
      "Nausea and vomiting; in severe cases chest pain, arrhythmia, hyperthermia, or intracranial haemorrhage",
      "Onset within minutes to hours of a tyramine-rich food or an interacting sympathomimetic",
      "Can also be triggered by sympathomimetic drugs (pseudoephedrine, stimulants) — a drug interaction, not only a dietary one"
    ],
    redFlags: [
      "Severe headache with very high blood pressure after cheese/cured meat/beer while on an MAOI — a hypertensive emergency",
      "Neurological signs (possible intracranial haemorrhage) or chest pain",
      "An MAOI combined with a sympathomimetic or another serotonergic agent"
    ],
    workup: [
      "Clinical, with a careful medication and dietary history; measure blood pressure and assess for end-organ damage (neurological, cardiac)",
      "Confirm MAOI use and washout status; screen for concurrent sympathomimetics and serotonergic drugs"
    ],
    management: {
      overview: "Prevent with strict tyramine avoidance and washout rules. Treat an acute crisis as a hypertensive emergency using a rapid, titratable vasodilator (phentolamine or nifedipine — not in the deck), lowering blood pressure in a controlled way while watching for end-organ damage.",
      firstLine: [
        { text: "Acute crisis = hypertensive emergency: controlled BP reduction with a short-acting agent (phentolamine or nifedipine — not in this deck); monitor for end-organ damage", meds: [] },
        { text: "Remove/avoid the tyramine source and review the offending MAOI", meds: ["phenelzine", "tranylcypromine", "selegiline"] }
      ],
      later: [
        { text: "Prevention: strict low-tyramine diet, avoid sympathomimetics, and observe MAOI washout intervals (≥ 2 weeks; 5 weeks after fluoxetine) before and after other agents", meds: ["moclobemide"] }
      ],
      nonPharm: [
        "Detailed dietary counselling (aged cheese, cured/fermented meats, tap beer, soy, yeast extracts)",
        "Avoid OTC sympathomimetic decongestants",
        "Prefer moclobemide or transdermal selegiline where tyramine risk is a particular concern",
        "Carry a warning card and know the washout intervals"
      ]
    },
    meds: ["phenelzine", "tranylcypromine", "selegiline", "moclobemide"],
    related: ["mdd", "serotonin-syndrome", "nms"],
    sources: [
      { name: "Gillman — MAOIs, dietary tyramine and drug interactions (review)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3195055/" }
    ]
  }
];
