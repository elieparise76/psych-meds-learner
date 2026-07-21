// Mood-disorder wiki pages for the psych-meds-learner app.
// Original educational prose (no DSM-5 criteria reproduced). Treatment follows
// CANMAT / Canadian guidelines. `meds` are real deck molecule ids that genuinely
// treat the condition.

export default [
  {
    id: "mdd",
    name: "Major depressive disorder",
    aka: [
      "mdd",
      "depression",
      "major depression",
      "unipolar depression",
      "clinical depression",
      "major depressive episode"
    ],
    category: "Mood",
    oneLiner:
      "Sustained low mood and/or loss of interest with neurovegetative, cognitive, and somatic changes lasting at least two weeks.",
    overview:
      "Major depressive disorder is a common, recurrent illness defined by episodes of persistently depressed mood or a marked loss of interest and pleasure, together with changes in sleep, appetite, energy, concentration, and self-worth. To count as an episode the change must last most of the day, nearly every day, for a minimum of about two weeks and represent a real shift from the person's usual functioning. Severity ranges from mild and self-limited to severe episodes with psychotic features, profound psychomotor slowing, or high suicide risk. Before treating, clinicians confirm the picture is not better explained by bipolar disorder, a medical illness, or a substance, because that changes management substantially.",
    epidemiology:
      "Lifetime prevalence is roughly 10-15%, with women affected about twice as often as men. Onset is most common from the late teens through the thirties, and the course is frequently recurrent, so relapse prevention matters as much as acute treatment.",
    presentation: [
      "Persistent low, empty, or irritable mood, or a loss of interest/pleasure that the person no longer expects to feel better about",
      "Neurovegetative changes: insomnia or hypersomnia, appetite/weight change, fatigue, and psychomotor slowing or agitation",
      "Cognitive symptoms: poor concentration, indecisiveness, and slowed thinking that can look like memory loss (pseudodementia in older adults)",
      "Guilt, worthlessness, hopelessness, and rumination that are out of proportion to circumstances",
      "Somatic presentations (pain, GI complaints, low energy) are common, especially in primary care and in older adults",
      "Severe episodes may include mood-congruent delusions or hallucinations, or catatonic features"
    ],
    redFlags: [
      "Suicidality — always screen directly, assess intent/plan/access to means, and create a safety plan",
      "Psychotic features or catatonia — signal a severe episode that usually needs combined/antipsychotic treatment or ECT",
      "Emergent mania or hypomania after starting an antidepressant — reconsider a bipolar diagnosis and reassess treatment",
      "Rapid weight loss, dehydration, or refusal to eat/drink — a medical emergency",
      "New or worsening agitation and suicidal ideation early in antidepressant treatment, particularly in patients under 25"
    ],
    workup: [
      "Rule out medical mimics: check thyroid function, anemia/ferritin, and B12; consider other contributors (e.g., sleep apnea, chronic pain)",
      "Screen for bipolarity BEFORE starting an antidepressant — ask about prior manic/hypomanic episodes and family history",
      "Take a substance and medication history (alcohol, cannabis, corticosteroids, interferon, etc.)",
      "Use a validated severity measure (e.g., PHQ-9) at baseline and to track response",
      "Assess psychosocial stressors, functioning, and supports; document baseline suicide risk"
    ],
    management: {
      overview:
        "Per CANMAT 2016, first-line pharmacotherapy is a second-generation antidepressant (SSRI, SNRI, bupropion, mirtazapine, or vortioxetine), chosen by symptom profile, tolerability, comorbidity, and prior response; measurement-based care guides dose optimization, switching, or augmentation. Evidence-based psychotherapy is first-line alone for mild-to-moderate illness and combined with medication for moderate-to-severe illness.",
      firstLine: [
        {
          text:
            "SSRIs (CANMAT first-line): broad tolerability; sertraline and citalopram/escitalopram are common first choices.",
          meds: [
            "escitalopram",
            "sertraline",
            "citalopram",
            "fluoxetine",
            "paroxetine",
            "fluvoxamine"
          ]
        },
        {
          text:
            "SNRIs (CANMAT first-line): useful with prominent fatigue or comorbid pain.",
          meds: ["venlafaxine", "desvenlafaxine", "duloxetine", "levomilnacipran"]
        },
        {
          text:
            "Other first-line agents: bupropion (activating, weight/sexual-side-effect sparing), mirtazapine (helps sleep/appetite), and vortioxetine (multimodal, cognitive benefit).",
          meds: ["bupropion", "mirtazapine", "vortioxetine"]
        }
      ],
      later: [
        {
          text:
            "Second-line switches and adjuncts: trazodone (SARI, also used for sleep), and the RIMA moclobemide.",
          meds: ["trazodone", "moclobemide"]
        },
        {
          text:
            "TCAs/tetracyclics (CANMAT second/third-line; narrower therapeutic index, lethal in overdose): reserved when first-line agents fail.",
          meds: [
            "amitriptyline",
            "nortriptyline",
            "imipramine",
            "clomipramine",
            "desipramine",
            "doxepin",
            "trimipramine",
            "amoxapine",
            "maprotiline",
            "protriptyline"
          ]
        },
        {
          text:
            "Classical MAOIs (later-line, especially atypical/treatment-resistant depression; require tyramine dietary restriction and washout periods).",
          meds: ["phenelzine", "tranylcypromine"]
        },
        {
          text:
            "Adjunctive/augmentation strategies for inadequate response: atypical antipsychotic augmentation (aripiprazole, brexpiprazole, quetiapine XR) or lithium augmentation.",
          meds: ["aripiprazole", "brexpiprazole", "quetiapine", "lithium"]
        },
        {
          text:
            "Treatment-resistant depression: intranasal esketamine (with an oral antidepressant) or ECT; ECT is a leading option for severe, psychotic, or emergency presentations.",
          meds: ["esketamine"]
        }
      ],
      nonPharm: [
        "Evidence-based psychotherapy: CBT, interpersonal therapy (IPT), and behavioural activation (first-line for mild-moderate; combined for moderate-severe)",
        "Structured exercise and sleep/behavioural regulation as adjuncts",
        "Neurostimulation: ECT (severe/psychotic/refractory), and rTMS for treatment-resistant cases",
        "Bright light therapy for episodes with a seasonal pattern",
        "Safety planning and social/vocational support"
      ]
    },
    meds: [
      "escitalopram",
      "sertraline",
      "citalopram",
      "fluoxetine",
      "paroxetine",
      "fluvoxamine",
      "venlafaxine",
      "desvenlafaxine",
      "duloxetine",
      "levomilnacipran",
      "bupropion",
      "mirtazapine",
      "vortioxetine",
      "trazodone",
      "moclobemide",
      "amitriptyline",
      "nortriptyline",
      "imipramine",
      "clomipramine",
      "desipramine",
      "doxepin",
      "trimipramine",
      "amoxapine",
      "maprotiline",
      "protriptyline",
      "phenelzine",
      "tranylcypromine",
      "aripiprazole",
      "brexpiprazole",
      "quetiapine",
      "lithium",
      "esketamine"
    ],
    related: [
      "bipolar",
      "perinatal",
      "gad",
      "panic",
      "ptsd",
      "discontinuation-syndrome",
      "serotonin-syndrome"
    ],
    sources: [
      {
        name: "CANMAT 2016 Clinical Guidelines for the Management of Adults with MDD",
        url: "https://journals.sagepub.com/doi/10.1177/0706743716659416"
      }
    ]
  },

  {
    id: "bipolar",
    name: "Bipolar disorder",
    aka: [
      "bipolar disorder",
      "bipolar i disorder",
      "bipolar ii disorder",
      "bipolar i",
      "bipolar ii",
      "mania",
      "hypomania",
      "manic depression",
      "manic-depressive illness"
    ],
    category: "Mood",
    oneLiner:
      "A recurrent mood disorder with episodes of (hypo)mania and depression, requiring mood-stabilising rather than antidepressant-led treatment.",
    overview:
      "Bipolar disorder is defined by episodes of elevated or irritable, high-energy mood alongside recurrent depression. Bipolar I requires at least one full manic episode — a sustained period of elevated/irritable mood with increased activity, reduced need for sleep, rapid speech and thought, grandiosity, and risky or impulsive behaviour, severe enough to impair function or require hospitalization (psychotic features may occur). Bipolar II is defined by hypomania (a milder, non-impairing high) together with major depressive episodes, and never a full mania. Patients typically spend more time depressed than manic, so bipolar depression is a major source of morbidity. The central management principle is that treatment is built around mood stabilisers and antimanic agents, not antidepressants used alone.",
    epidemiology:
      "Lifetime prevalence is roughly 1% for bipolar I and around 1-2% across the bipolar spectrum, affecting men and women about equally. Onset is usually in the late teens to mid-twenties, and the illness is highly recurrent and often under-recognised because patients present during depression.",
    presentation: [
      "Mania: elevated or irritable mood, decreased need for sleep without fatigue, pressured speech, racing thoughts/flight of ideas, distractibility, grandiosity, and increased goal-directed or risky activity",
      "Hypomania: the same quality of change but milder, shorter, and without marked impairment or psychosis",
      "Bipolar depression: often looks like unipolar depression but may feature hypersomnia, increased appetite, leaden fatigue, and psychomotor slowing",
      "Mixed features: depressive and manic symptoms occurring together, which raise suicide risk and complicate treatment",
      "Clues to bipolarity in a depressed patient: early onset, many brief episodes, psychotic depression, family history, and antidepressant-induced activation or switch"
    ],
    redFlags: [
      "Acute mania with psychosis, aggression, or dangerous behaviour — often needs urgent/inpatient care",
      "Suicidality, especially during depressive or mixed episodes",
      "Antidepressant-triggered manic/hypomanic switch or rapid cycling",
      "Pregnancy or planning pregnancy while on valproate (teratogen) or lithium — needs specialist review",
      "Signs of lithium toxicity (tremor, ataxia, confusion, vomiting) — check level and hold the dose"
    ],
    workup: [
      "Confirm a history of mania/hypomania before diagnosing — this distinguishes bipolar from unipolar depression",
      "Screen every depressed patient for past (hypo)manic episodes to avoid antidepressant monotherapy in unrecognised bipolarity",
      "Rule out medical/substance causes of mania (thyroid, stimulants, corticosteroids, substance intoxication)",
      "Baseline labs before mood stabilisers: renal function, thyroid, and pregnancy test for lithium; CBC and liver function for valproate/carbamazepine",
      "Establish metabolic baselines (weight, glucose, lipids) before atypical antipsychotics"
    ],
    management: {
      overview:
        "Per CANMAT/ISBD 2018, treatment is organised by phase — acute mania, acute bipolar depression, and maintenance — and centres on lithium, selected anticonvulsants, and atypical antipsychotics. A key safety principle is that antidepressants are NOT used as monotherapy: in bipolar depression they are, at most, adjuncts to a mood stabiliser/antimanic agent and are avoided in mania, mixed states, and rapid cycling because of the risk of triggering a switch or destabilising mood.",
      firstLine: [
        {
          text:
            "Acute mania (CANMAT/ISBD first-line): lithium or valproate, and/or an antimanic atypical antipsychotic (quetiapine, aripiprazole, asenapine, risperidone, cariprazine); stop any antidepressant.",
          meds: [
            "lithium",
            "valproate",
            "quetiapine",
            "aripiprazole",
            "asenapine",
            "risperidone",
            "cariprazine"
          ]
        },
        {
          text:
            "Acute bipolar depression (CANMAT/ISBD first-line): quetiapine, lurasidone (monotherapy or added to lithium/valproate), lithium, lamotrigine, or cariprazine.",
          meds: ["quetiapine", "lurasidone", "lithium", "lamotrigine", "cariprazine"]
        },
        {
          text:
            "Maintenance (relapse prevention): lithium and lamotrigine (especially for preventing depression) are foundational; quetiapine, valproate, asenapine, aripiprazole, and risperidone are also maintenance options.",
          meds: [
            "lithium",
            "lamotrigine",
            "quetiapine",
            "valproate",
            "asenapine",
            "aripiprazole",
            "risperidone"
          ]
        }
      ],
      later: [
        {
          text:
            "Additional antimanic/mood-stabilising options: olanzapine, ziprasidone, carbamazepine, and paliperidone (including long-acting injectable antipsychotics to support adherence).",
          meds: [
            "olanzapine",
            "ziprasidone",
            "carbamazepine",
            "paliperidone"
          ]
        },
        {
          text:
            "Bipolar depression, further options: the olanzapine-fluoxetine combination, and lumateperone (approved for bipolar depression in the US; not marketed in Canada).",
          meds: ["olanzapine", "fluoxetine", "lumateperone"]
        },
        {
          text:
            "Adjunctive antidepressants ONLY with an antimanic agent, reserved for later lines and avoided in mixed features/rapid cycling; SSRIs and bupropion carry lower switch risk than SNRIs/TCAs.",
          meds: ["bupropion", "sertraline", "escitalopram"]
        }
      ],
      nonPharm: [
        "Psychoeducation, adherence support, and sleep/circadian regulation to prevent relapse",
        "Bipolar-specific psychotherapies: CBT, interpersonal and social rhythm therapy (IPSRT), and family-focused therapy as adjuncts",
        "ECT for severe, treatment-resistant, or high-risk mania or depression, and in pregnancy",
        "Substance-use treatment and mood/relapse monitoring"
      ]
    },
    meds: [
      "lithium",
      "valproate",
      "carbamazepine",
      "lamotrigine",
      "quetiapine",
      "olanzapine",
      "risperidone",
      "aripiprazole",
      "asenapine",
      "cariprazine",
      "lurasidone",
      "ziprasidone",
      "paliperidone",
      "lumateperone",
      "fluoxetine",
      "bupropion",
      "sertraline",
      "escitalopram"
    ],
    related: [
      "mdd",
      "perinatal",
      "schizophrenia",
      "lithium-toxicity",
      "metabolic-syndrome",
      "tardive-dyskinesia"
    ],
    sources: [
      {
        name: "CANMAT and ISBD 2018 Guidelines for the Management of Patients with Bipolar Disorder",
        url: "https://onlinelibrary.wiley.com/doi/10.1111/bdi.12609"
      }
    ]
  },

  {
    id: "perinatal",
    name: "Perinatal mood & anxiety disorders",
    aka: [
      "perinatal mood and anxiety disorders",
      "postpartum depression",
      "ppd",
      "postnatal depression",
      "peripartum depression",
      "antenatal depression",
      "perinatal depression",
      "postpartum anxiety",
      "maternal mental illness"
    ],
    category: "Mood",
    oneLiner:
      "Mood and anxiety disorders arising in pregnancy or the year after birth, where treatment must balance maternal illness against fetal/infant exposure.",
    overview:
      "Perinatal mood and anxiety disorders are episodes of depression, anxiety, or (in bipolar disorder) mood instability that begin during pregnancy or in the postpartum period. Postpartum depression is the most familiar, but anxiety, OCD-type intrusive thoughts, and bipolar episodes are also common in this window, and the early postpartum is the period of highest lifetime risk for bipolar relapse and for postpartum psychosis. Untreated maternal illness itself carries real risks to both parent and infant, so decisions weigh the harms of the illness against the harms of medication exposure rather than defaulting to stopping treatment. Per CANMAT-aligned perinatal guidance (2024), effective treatment is generally continued or started using the best-studied agents at the lowest effective dose.",
    epidemiology:
      "Depression affects roughly 10-15% of pregnant and postpartum people, with anxiety disorders at least as common. Onset clusters in late pregnancy and the first weeks-to-months postpartum; a personal or family history of mood disorder is the strongest risk factor.",
    presentation: [
      "Depressive symptoms with prominent anxiety, guilt about parenting, and intrusive worries about the baby",
      "Postpartum anxiety/OCD-spectrum intrusive thoughts (often ego-dystonic and distressing rather than reflecting intent to harm)",
      "Sleep and appetite disruption that exceed the normal demands of a newborn",
      "Distinguish transient 'baby blues' (peaks days 3-5, resolves within ~2 weeks) from a sustained major depressive episode",
      "Postpartum psychosis is a psychiatric emergency — rapid-onset confusion, mood lability, delusions, or thoughts of harming self or infant, frequently a bipolar-spectrum presentation"
    ],
    redFlags: [
      "Thoughts of harming self or the infant, or postpartum psychosis — treat as an emergency",
      "New mania/psychosis in the early postpartum — screen for bipolar disorder before any antidepressant",
      "Valproate in pregnancy or in anyone who could become pregnant — high teratogenic risk (neural tube and other defects); avoid",
      "Paroxetine when initiating in pregnancy — avoided due to a first-trimester cardiac malformation signal; prefer alternatives",
      "Lithium in the first trimester — small increased risk of Ebstein anomaly (cardiac); continue only with informed consent, level monitoring, and specialist care"
    ],
    workup: [
      "Screen routinely in pregnancy and postpartum (e.g., Edinburgh Postnatal Depression Scale) and assess suicide/infanticide risk",
      "Ask about past or family history of bipolar disorder BEFORE prescribing an antidepressant, given elevated postpartum switch/psychosis risk",
      "Rule out contributors: thyroid dysfunction (including postpartum thyroiditis), anemia, and sleep deprivation",
      "Review current medications for agents to avoid in pregnancy/lactation (notably valproate; paroxetine when starting anew)",
      "Coordinate care between psychiatry, obstetrics, primary care, and pediatrics; document a shared risk-benefit discussion"
    ],
    management: {
      overview:
        "Per CANMAT-aligned perinatal guidance (2024), untreated illness is itself a risk, so effective treatment is continued or started with the best-studied agents at the lowest effective dose. Among antidepressants, sertraline and citalopram are preferred in pregnancy and lactation; valproate and (when initiating) paroxetine are avoided. For bipolar disorder, mood stabilisation is maintained with careful agent selection and monitoring. Psychotherapy is first-line for mild-to-moderate presentations.",
      firstLine: [
        {
          text:
            "Preferred antidepressants in pregnancy/lactation: sertraline and citalopram (and escitalopram) are best-studied with low milk transfer; treat maternal illness at the lowest effective dose.",
          meds: ["sertraline", "citalopram", "escitalopram"]
        },
        {
          text:
            "Other reasonable antidepressant options when clinically indicated (e.g., prior response): fluoxetine, venlafaxine, duloxetine, and mirtazapine; nortriptyline is a well-studied TCA in lactation.",
          meds: ["fluoxetine", "venlafaxine", "duloxetine", "mirtazapine", "nortriptyline"]
        }
      ],
      later: [
        {
          text:
            "Bipolar disorder in the perinatal period: maintain mood stabilisation with lamotrigine, lithium (with level monitoring; counsel on first-trimester Ebstein risk), or an atypical antipsychotic such as quetiapine; avoid valproate.",
          meds: ["lamotrigine", "lithium", "quetiapine"]
        },
        {
          text:
            "Antidepressant adjunct/alternative where appropriate: bupropion (also relevant to smoking cessation counselling in pregnancy).",
          meds: ["bupropion"]
        },
        {
          text:
            "Postpartum-depression-specific neurosteroids brexanolone (IV) and zuranolone (oral) are FDA-approved in the US only; not marketed in Canada — mentioned for awareness.",
          meds: ["brexanolone", "zuranolone"]
        }
      ],
      nonPharm: [
        "Psychotherapy (CBT, IPT) — first-line for mild-to-moderate perinatal depression/anxiety and combined with medication when more severe",
        "Sleep protection, practical/social support, and partner/family involvement",
        "ECT for severe, psychotic, or high-risk episodes, including in pregnancy",
        "Urgent psychiatric admission for postpartum psychosis; monitor infant when medications are used in lactation"
      ]
    },
    meds: [
      "sertraline",
      "citalopram",
      "escitalopram",
      "fluoxetine",
      "venlafaxine",
      "duloxetine",
      "mirtazapine",
      "nortriptyline",
      "bupropion",
      "lamotrigine",
      "lithium",
      "quetiapine",
      "brexanolone",
      "zuranolone"
    ],
    related: [
      "mdd",
      "bipolar",
      "gad",
      "panic",
      "ocd",
      "discontinuation-syndrome"
    ],
    sources: [
      {
        name: "CANMAT 2024 Perinatal Mood & Anxiety Disorders Guidelines",
        url: "https://journals.sagepub.com/home/cpa"
      },
      {
        name: "CANMAT 2016 MDD Guidelines (general depression management)",
        url: "https://journals.sagepub.com/doi/10.1177/0706743716659416"
      }
    ]
  }
];
