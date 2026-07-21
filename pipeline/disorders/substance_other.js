// Substance use & "Other" disorder pages for the psych-meds-learner app.
// COPYRIGHT: original educational prose only — no DSM-5(-TR) criteria reproduced.
// Treatment content follows CANMAT / Canadian (CRISM, CADDRA, CFPC, Choosing Wisely
// Canada) guidance. All `meds` ids are real deck molecule ids (verified against
// data/deck.json). Thiamine is mentioned in prose but is intentionally NOT in `meds`
// because it is not a deck molecule.

export default [
  {
    id: "aud",
    name: "Alcohol use disorder",
    aka: [
      "aud",
      "alcohol use disorder",
      "alcohol dependence",
      "alcoholism",
      "alcohol abuse",
      "alcohol withdrawal",
      "delirium tremens",
      "dts",
      "wernicke",
      "wernicke-korsakoff"
    ],
    category: "Substance",
    oneLiner:
      "A chronic, relapsing pattern of compulsive alcohol use with tolerance, withdrawal, and impaired control despite harm.",
    overview:
      "Alcohol use disorder describes a spectrum in which drinking becomes compulsive and difficult to control, continuing despite mounting physical, psychological, and social harm. Recognition rests on a cluster of features — craving, loss of control over the amount or duration of drinking, tolerance, a withdrawal syndrome on stopping, and use that crowds out other roles and activities. Severity is graded by how many of these features are present rather than by a single threshold. It is best framed as a treatable medical condition, not a moral failing, and pharmacotherapy is under-used relative to its evidence.",
    epidemiology:
      "One of the most prevalent substance use disorders, with a lifetime prevalence in the range of 10–15% and a male predominance that has narrowed over time. Onset is typically in late adolescence to early adulthood, and it frequently co-occurs with mood, anxiety, and other substance use disorders.",
    presentation: [
      "Craving and preoccupation with drinking; unsuccessful attempts to cut down",
      "Tolerance (needing more for the same effect) and drinking to relieve or avoid withdrawal",
      "Withdrawal within 6–24 h of the last drink: tremor, sweating, anxiety, tachycardia, nausea",
      "Severe withdrawal: seizures (~12–48 h) and delirium tremens (~48–96 h) with confusion, agitation, autonomic instability",
      "Secondary harms: liver disease, hypertension, poor sleep, low mood, relationship and occupational decline"
    ],
    redFlags: [
      "Delirium tremens — confusion, fever, autonomic instability; a medical emergency with real mortality",
      "Withdrawal seizures or a prior complicated-withdrawal history",
      "Wernicke encephalopathy — confusion, ophthalmoplegia, ataxia; give thiamine BEFORE any glucose",
      "Suicidality and depression, which are common and elevated during heavy use and early abstinence"
    ],
    workup: [
      "Quantify use and screen with a validated tool (AUDIT / AUDIT-C); take a withdrawal-risk history",
      "Assess withdrawal severity prospectively (e.g., CIWA-Ar) to guide symptom-triggered dosing",
      "Bloods: CBC, electrolytes/magnesium, LFTs, GGT; consider glucose and infection screen",
      "Give thiamine to prevent Wernicke encephalopathy, and replete magnesium/electrolytes",
      "Screen for co-occurring depression, anxiety, and other substance use once stabilized"
    ],
    management: {
      overview:
        "Two distinct jobs: manage acute withdrawal safely, then support long-term abstinence or reduced drinking with relapse-prevention pharmacotherapy plus psychosocial care. Canadian guidance positions naltrexone and acamprosate as first-line relapse-prevention medications.",
      firstLine: [
        {
          text: "Relapse prevention (first-line, CFPC/Canadian AUD guideline): naltrexone (opioid antagonist, reduces heavy-drinking days) or acamprosate (supports maintenance of abstinence). Choose by goal, hepatic/renal status, and opioid use.",
          meds: ["naltrexone", "acamprosate"]
        },
        {
          text: "Acute withdrawal (first-line): long-acting benzodiazepines by symptom-triggered/CIWA-guided dosing (diazepam or chlordiazepoxide; lorazepam or oxazepam when hepatic impairment favours non-oxidative metabolism). Always co-administer thiamine.",
          meds: ["diazepam", "chlordiazepoxide", "lorazepam", "oxazepam"]
        }
      ],
      later: [
        {
          text: "Disulfiram (aversive therapy) as a second-line option in selected, motivated, closely supervised abstinent patients — never while intoxicated. Phenobarbital is used in protocolized/refractory or benzodiazepine-resistant withdrawal.",
          meds: ["disulfiram", "phenobarbital"]
        }
      ],
      nonPharm: [
        "Brief interventions, motivational interviewing, and structured psychosocial support",
        "Relapse-prevention CBT, contingency management, and mutual-help programs",
        "Thiamine and nutritional repletion; treat co-occurring depression/anxiety",
        "Set an explicit goal (abstinence vs reduced drinking) and match pharmacotherapy to it"
      ]
    },
    meds: [
      "naltrexone",
      "acamprosate",
      "disulfiram",
      "diazepam",
      "chlordiazepoxide",
      "lorazepam",
      "oxazepam",
      "phenobarbital"
    ],
    related: ["oud", "tud", "insomnia", "delirium", "mdd", "gad"],
    sources: [
      {
        name: "Canadian Guideline for the Clinical Management of High-Risk Drinking and Alcohol Use Disorder (CMAJ 2023)",
        url: "https://www.cmaj.ca/content/195/40/E1364"
      },
      {
        name: "CFPC / PEER simplified guideline — alcohol use disorder pharmacotherapy",
        url: "https://www.cfp.ca/content/66/9/665"
      }
    ]
  },

  {
    id: "oud",
    name: "Opioid use disorder",
    aka: [
      "oud",
      "opioid use disorder",
      "opioid dependence",
      "opioid addiction",
      "opiate use disorder",
      "opioid withdrawal",
      "opioid agonist therapy",
      "oat",
      "opioid overdose"
    ],
    category: "Substance",
    oneLiner:
      "Compulsive opioid use with tolerance and withdrawal; opioid agonist therapy is first-line and reduces mortality.",
    overview:
      "Opioid use disorder is a chronic, relapsing condition in which opioid use becomes compulsive despite serious harm, driven by powerful reinforcement, tolerance, and a distressing withdrawal syndrome. In the era of a contaminated, high-potency (fentanyl) drug supply, overdose is the dominant cause of death, so the central goal of treatment is retention on medication that reduces overdose mortality. Opioid agonist therapy — buprenorphine/naloxone and methadone — is the evidence-based backbone; abstinence-only approaches carry high relapse and overdose risk.",
    epidemiology:
      "Prevalence has risen sharply with the overdose crisis; opioids account for the majority of drug-toxicity deaths in Canada. Onset spans adolescence through mid-adulthood, often beginning with prescribed or diverted opioids, and psychiatric and other substance use comorbidity is high.",
    presentation: [
      "Craving, loss of control, and continued use despite harm; escalating tolerance",
      "Withdrawal: dysphoria, yawning, lacrimation, rhinorrhea, myalgia, cramps, diarrhea, piloerection, mydriasis",
      "Intoxication/overdose: pinpoint pupils, sedation, and depressed respiration (the lethal feature)",
      "Injection-related harms: skin/soft-tissue infection, endocarditis, HIV/HCV"
    ],
    redFlags: [
      "Opioid overdose — unresponsiveness with slow/absent breathing; give naloxone and support ventilation",
      "Fentanyl-contaminated supply makes potency unpredictable and overdose risk high",
      "Reduced tolerance after any abstinence period (jail, detox, hospital) sharply raises relapse-overdose risk",
      "Concurrent benzodiazepine/alcohol/stimulant use compounding respiratory depression"
    ],
    workup: [
      "Confirm the disorder and assess withdrawal severity (e.g., COWS) before agonist induction",
      "Baseline bloods including LFTs; screen HIV/HCV; pregnancy test where relevant",
      "ECG/QTc if starting or on higher-dose methadone (QT prolongation)",
      "Provide take-home naloxone and overdose education to the patient and their circle",
      "Screen for co-occurring pain, mental illness, and other substances"
    ],
    management: {
      overview:
        "Per the CRISM national OUD guideline, offer opioid agonist therapy as first-line: buprenorphine/naloxone is generally preferred for its safety ceiling, with methadone for those who need it. Naltrexone is an option only after full detoxification. Naloxone reverses acute overdose.",
      firstLine: [
        {
          text: "Opioid agonist therapy (first-line, CRISM): buprenorphine/naloxone (partial agonist; favourable safety, ceiling on respiratory depression) or methadone (full agonist; QT and interaction monitoring). Buprenorphine induction requires the patient to be in mild–moderate withdrawal to avoid precipitated withdrawal.",
          meds: ["buprenorphine_naloxone", "methadone", "buprenorphine"]
        }
      ],
      later: [
        {
          text: "Extended-release/oral naltrexone (opioid antagonist) for relapse prevention ONLY after ~7–10 opioid-free days — giving it too early precipitates withdrawal.",
          meds: ["naltrexone"]
        },
        {
          text: "Naloxone (opioid antagonist) for emergency reversal of overdose — take-home kits for all patients and their networks.",
          meds: ["naloxone"]
        }
      ],
      nonPharm: [
        "Harm reduction: take-home naloxone, drug-checking, safer-use and safe-supply pathways",
        "Retention-focused, low-barrier care; treat comorbid pain and mental illness",
        "Psychosocial supports and contingency management as adjuncts (not substitutes for OAT)",
        "In pregnancy, agonist therapy (buprenorphine or methadone) is preferred over withdrawal"
      ]
    },
    meds: [
      "buprenorphine_naloxone",
      "methadone",
      "buprenorphine",
      "naltrexone",
      "naloxone"
    ],
    related: ["aud", "tud", "delirium", "agitation"],
    sources: [
      {
        name: "CRISM National Guideline for the Clinical Management of Opioid Use Disorder (CMAJ 2018)",
        url: "https://www.cmaj.ca/content/190/9/E247"
      },
      {
        name: "CRISM National Injectable Opioid Agonist Treatment (iOAT) guideline",
        url: "https://crism.ca/projects/opioid-guideline/"
      }
    ]
  },

  {
    id: "tud",
    name: "Tobacco use disorder",
    aka: [
      "tud",
      "tobacco use disorder",
      "nicotine dependence",
      "nicotine use disorder",
      "smoking cessation",
      "tobacco dependence",
      "quit smoking"
    ],
    category: "Substance",
    oneLiner:
      "Nicotine dependence with compulsive tobacco use and withdrawal; pharmacotherapy plus counselling roughly triples quit rates.",
    overview:
      "Tobacco use disorder is nicotine dependence expressed as compulsive smoking, difficulty quitting, and a withdrawal syndrome (irritability, restlessness, poor concentration, craving, increased appetite) on abstinence. It is the leading preventable cause of death, yet highly treatable: combining a first-line medication with behavioural support substantially improves cessation. Every clinical contact is an opportunity to ask about tobacco, advise quitting, and offer help.",
    epidemiology:
      "Smoking prevalence in Canada has fallen but remains a major driver of cardiovascular disease, COPD, and cancer, with higher rates among people with mental illness and other substance use disorders. Most dependence is established in adolescence or early adulthood.",
    presentation: [
      "Compulsive daily use, often smoking within 30 minutes of waking (a marker of heavier dependence)",
      "Withdrawal on abstinence: irritability, anxiety, difficulty concentrating, low mood, insomnia, craving, hunger",
      "Repeated unsuccessful quit attempts and continued use despite known tobacco-related illness"
    ],
    redFlags: [
      "Watch mood and any neuropsychiatric symptoms during a quit attempt, especially with comorbid depression",
      "Cardiovascular events are a reason to quit, not a contraindication to first-line cessation pharmacotherapy",
      "Smoking induces CYP1A2 — quitting can raise levels of clozapine, olanzapine, and other 1A2 substrates"
    ],
    workup: [
      "Ask about tobacco use at every visit; gauge dependence (time-to-first-cigarette, cigarettes/day)",
      "Assess readiness, prior quit attempts, and what helped or hindered",
      "Screen for comorbid mood, anxiety, alcohol, and other substance use",
      "Anticipate dose changes for CYP1A2-metabolized drugs (e.g., clozapine, olanzapine) on quitting"
    ],
    management: {
      overview:
        "Canadian smoking-cessation guidance (CAN-ADAPTT / CTC) recommends offering first-line pharmacotherapy — varenicline, nicotine replacement (often combination NRT), or bupropion (as Zyban) — together with behavioural support.",
      firstLine: [
        {
          text: "Varenicline (partial nicotinic agonist) — among the most effective single agents; combination nicotine replacement therapy (patch plus a short-acting form) is comparably effective. NRT products are not deck molecules but are first-line.",
          meds: ["varenicline"]
        },
        {
          text: "Bupropion (as Zyban) — a first-line non-nicotine option, useful when depression coexists or NRT/varenicline is unsuitable; avoid with seizure or eating-disorder history.",
          meds: ["bupropion"]
        }
      ],
      later: [
        {
          text: "Combine or extend pharmacotherapy (e.g., varenicline plus NRT, longer duration) for highly dependent smokers or after relapse.",
          meds: ["varenicline", "bupropion"]
        }
      ],
      nonPharm: [
        "Brief advice at every visit; motivational and behavioural counselling and quitlines",
        "Set a quit date and pre-empt triggers; combine counselling with medication",
        "Reassess and re-treat after relapse — most quitters need several attempts"
      ]
    },
    meds: ["varenicline", "bupropion"],
    related: ["aud", "oud", "mdd"],
    sources: [
      {
        name: "CAN-ADAPTT Canadian Smoking Cessation Clinical Practice Guideline",
        url: "https://www.nicotinedependenceclinic.com/en/canadaptt"
      },
      {
        name: "CFPC/CTC tobacco cessation guidance (Choosing Wisely / first-line pharmacotherapy)",
        url: "https://www.cfp.ca/content/67/2/93"
      }
    ]
  },

  {
    id: "adhd",
    name: "Attention-deficit/hyperactivity disorder",
    aka: [
      "adhd",
      "attention deficit hyperactivity disorder",
      "attention-deficit/hyperactivity disorder",
      "add",
      "attention deficit disorder",
      "hyperactivity"
    ],
    category: "Other",
    oneLiner:
      "A neurodevelopmental disorder of inattention and/or hyperactivity-impulsivity; stimulants are first-line.",
    overview:
      "ADHD is a neurodevelopmental condition marked by a persistent pattern of inattention and/or hyperactivity-impulsivity that begins in childhood and impairs functioning across more than one setting. Presentation shifts with age — overt hyperactivity often gives way to restlessness, disorganization, procrastination, and emotional dysregulation in adults. Diagnosis is clinical, requires developmentally excessive and cross-situational symptoms, and depends on excluding or accounting for conditions that mimic it. Treatment is highly effective, with stimulants as the mainstay.",
    epidemiology:
      "Affects roughly 5% of children and about 2.5% of adults, with a childhood male predominance that narrows in adulthood (where inattentive presentations are often recognized late). It commonly co-occurs with learning disorders, anxiety, mood disorders, and substance use disorders.",
    presentation: [
      "Inattention: distractibility, careless errors, poor follow-through, disorganization, losing things, forgetfulness",
      "Hyperactivity-impulsivity: restlessness, fidgeting, talking over others, impatience, acting without reflection",
      "Adults: chronic lateness, unfinished projects, financial/occupational instability, emotional lability",
      "Onset of several symptoms before age 12, present in ≥2 settings, causing genuine functional impairment"
    ],
    redFlags: [
      "Screen for bipolar disorder and active substance use before starting a stimulant",
      "Cardiovascular risk: take a cardiac history and screen for structural heart disease before stimulants",
      "Diversion/misuse potential of stimulants — assess risk; consider non-stimulants or lisdexamfetamine",
      "Monitor growth (height/weight) in children and blood pressure/heart rate in all ages"
    ],
    workup: [
      "Confirm childhood onset and cross-situational impairment with collateral history and rating scales",
      "Cardiac history and exam (and ECG only if history/exam warrants) before stimulant therapy",
      "Assess comorbid mood, anxiety, sleep, and substance use — treat destabilizing conditions first",
      "Baseline height, weight, blood pressure, and heart rate; review these at follow-up"
    ],
    management: {
      overview:
        "Per CADDRA (Canadian ADHD Practice Guidelines), long-acting stimulants are first-line, with non-stimulants (atomoxetine, guanfacine XR) as alternatives or add-ons when stimulants are ineffective, poorly tolerated, or carry misuse concern.",
      firstLine: [
        {
          text: "Long-acting stimulants (first-line, CADDRA): methylphenidate-class (methylphenidate) and amphetamine-class (lisdexamfetamine, dextroamphetamine, mixed amphetamine salts). Lisdexamfetamine's prodrug design lowers abuse liability.",
          meds: [
            "methylphenidate",
            "lisdexamfetamine",
            "dextroamphetamine",
            "amphetamine_salts"
          ]
        }
      ],
      later: [
        {
          text: "Non-stimulants when stimulants fail, are not tolerated, or misuse is a concern: atomoxetine (norepinephrine reuptake inhibitor) or guanfacine XR / clonidine (alpha-2 agonists; also useful for tics or sleep-onset problems). These can be monotherapy or added to a stimulant.",
          meds: ["atomoxetine", "guanfacine", "clonidine"]
        }
      ],
      nonPharm: [
        "Psychoeducation, coaching, and CBT for organization/time-management skills",
        "Classroom/workplace accommodations and behavioural strategies",
        "Sleep, exercise, and structured routines; treat comorbid anxiety/mood",
        "Combine medication with behavioural/skills interventions for best functional gains"
      ]
    },
    meds: [
      "methylphenidate",
      "lisdexamfetamine",
      "dextroamphetamine",
      "amphetamine_salts",
      "atomoxetine",
      "guanfacine",
      "clonidine"
    ],
    related: ["insomnia", "mdd", "bipolar", "oud"],
    sources: [
      {
        name: "CADDRA — Canadian ADHD Practice Guidelines (4.1)",
        url: "https://www.caddra.ca/canadian-adhd-practice-guidelines/"
      }
    ]
  },

  {
    id: "insomnia",
    name: "Insomnia disorder",
    aka: [
      "insomnia",
      "insomnia disorder",
      "chronic insomnia",
      "sleeplessness",
      "difficulty sleeping",
      "sleep-onset insomnia",
      "sleep-maintenance insomnia"
    ],
    category: "Other",
    oneLiner:
      "Persistent dissatisfaction with sleep quantity/quality despite adequate opportunity, with daytime impairment; CBT-I is first-line.",
    overview:
      "Insomnia disorder is difficulty initiating or maintaining sleep, or non-restorative sleep, that occurs despite adequate opportunity and produces meaningful daytime consequences — fatigue, low mood, irritability, or impaired concentration. It becomes a disorder when it is frequent (typically ≥3 nights/week) and persistent (≥3 months), and it often perpetuates itself through conditioned arousal and unhelpful sleep habits. First-line treatment is behavioural (cognitive behavioural therapy for insomnia), not a pill; medications are adjuncts, generally short-term.",
    epidemiology:
      "Insomnia symptoms are very common (up to a third of adults); chronic insomnia disorder affects roughly 6–10%. Prevalence rises with age and is higher in women and in people with depression, anxiety, chronic pain, or other substance use disorders.",
    presentation: [
      "Trouble falling asleep, staying asleep, or early-morning awakening despite adequate opportunity",
      "Daytime consequences: fatigue, mood disturbance, reduced concentration, worry about sleep",
      "Conditioned arousal — the bed and bedtime become cues for wakefulness",
      "Often comorbid with depression, anxiety, pain, and circadian or breathing-related sleep problems"
    ],
    redFlags: [
      "Screen for obstructive sleep apnea (snoring, witnessed apneas, daytime sleepiness) before sedatives",
      "Rule out an underlying mood/anxiety disorder, substance use, or restless legs driving the insomnia",
      "Avoid chronic benzodiazepine/Z-drug use — especially in older adults (falls, cognitive impairment; Choosing Wisely Canada)",
      "Sedatives plus opioids/alcohol compound respiratory depression"
    ],
    workup: [
      "Take a sleep history and a 1–2 week sleep diary; screen for OSA and restless legs",
      "Review substances and medications (caffeine, alcohol, stimulants, activating antidepressants)",
      "Screen for and treat comorbid depression, anxiety, and pain",
      "Reserve polysomnography for suspected apnea or another primary sleep disorder"
    ],
    management: {
      overview:
        "Canadian guidance makes cognitive behavioural therapy for insomnia (CBT-I) first-line. When medication is used it should be short-term and matched to the problem; chronic benzodiazepine use is discouraged, particularly in the elderly.",
      firstLine: [
        {
          text: "CBT-I first (stimulus control, sleep restriction, cognitive work) — the durable first-line treatment. Optimize sleep hygiene and treat comorbid conditions before/with any medication.",
          meds: []
        },
        {
          text: "If a hypnotic is used short-term: Z-drugs (zopiclone, zolpidem) or a dual orexin-receptor antagonist (daridorexant, lemborexant). Melatonin/ramelteon help sleep onset and circadian-timing problems (ramelteon is not marketed in Canada).",
          meds: ["zopiclone", "zolpidem", "daridorexant", "lemborexant", "melatonin", "ramelteon"]
        }
      ],
      later: [
        {
          text: "Low-dose sedating agents used off-label when comorbidity fits: trazodone, mirtazapine, or low-dose doxepin (sedating antidepressants), hydroxyzine, and low-dose quetiapine (discouraged as a routine hypnotic given its side-effect burden).",
          meds: ["trazodone", "mirtazapine", "doxepin", "hydroxyzine", "quetiapine"]
        },
        {
          text: "Avoid CHRONIC benzodiazepines; if a short course of a hypnotic benzodiazepine is unavoidable, keep it brief and avoid in older adults (falls, dependence, cognitive effects).",
          meds: ["temazepam", "nitrazepam"]
        }
      ],
      nonPharm: [
        "CBT-I: stimulus control, sleep restriction, cognitive restructuring, relaxation",
        "Sleep hygiene: consistent schedule, limit caffeine/alcohol/screens, keep the bedroom for sleep",
        "Treat the driver — apnea, restless legs, pain, depression, anxiety, or a circadian mismatch",
        "Plan a time-limited course for any hypnotic with a clear stop/taper strategy"
      ]
    },
    meds: [
      "zopiclone",
      "zolpidem",
      "daridorexant",
      "lemborexant",
      "melatonin",
      "ramelteon",
      "trazodone",
      "mirtazapine",
      "doxepin",
      "hydroxyzine",
      "quetiapine",
      "temazepam",
      "nitrazepam"
    ],
    related: ["mdd", "gad", "ptsd", "aud", "adhd", "discontinuation-syndrome"],
    sources: [
      {
        name: "Canadian clinical practice guideline / review — management of chronic insomnia in adults (CBT-I first-line)",
        url: "https://www.cfp.ca/content/68/11/813"
      },
      {
        name: "Choosing Wisely Canada — benzodiazepines/sedative-hypnotics in older adults",
        url: "https://choosingwiselycanada.org/recommendation/geriatrics/"
      }
    ]
  }
];
