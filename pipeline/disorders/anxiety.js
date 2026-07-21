// Anxiety, obsessive-compulsive, and trauma-related disorder pages.
// Treatment content follows the Canadian anxiety/OCD/PTSD guidelines (Katzman et al.,
// BMC Psychiatry 2014) and CANMAT-aligned practice. Descriptions are original educational
// prose — no DSM-5(-TR) criteria are reproduced. Doses are kept qualitative on purpose.

export default [
  {
    id: "gad",
    name: "Generalized anxiety disorder",
    aka: ["gad", "generalized anxiety", "generalised anxiety disorder", "chronic anxiety", "worry disorder"],
    category: "Anxiety",
    oneLiner: "Persistent, hard-to-control worry across many domains, with physical tension and restlessness lasting months.",
    overview:
      "GAD is a chronic condition defined by excessive, free-floating worry that is disproportionate to circumstances and difficult to switch off. The anxiety is not tied to a single trigger the way a phobia is; instead it drifts across finances, health, work, and family. Sufferers describe a background hum of apprehension accompanied by muscle tension, fatigue, and a mind that will not settle. To count as a disorder rather than ordinary stress, the worry is present more days than not for at least six months and impairs functioning.",
    epidemiology:
      "Lifetime prevalence is roughly 5–6%, about twice as common in women as in men. Onset is often gradual, frequently beginning in adolescence or early adulthood, and the course tends to wax and wane over years, commonly with comorbid depression.",
    presentation: [
      "Excessive worry the person recognises as out of proportion but cannot control",
      "Physical tension: tight muscles, headaches, jaw clenching, trembling",
      "Restlessness or feeling keyed up and on edge",
      "Easy fatigue and poor concentration ('mind going blank')",
      "Irritability and sleep disturbance (difficulty falling or staying asleep)",
      "Frequent reassurance-seeking and avoidance of uncertainty"
    ],
    redFlags: [
      "Screen for comorbid depression and suicidality — both are common and worsen prognosis",
      "Rule out an alcohol or sedative use disorder used to self-medicate anxiety",
      "New, severe anxiety in an older adult should prompt a medical/organic workup"
    ],
    workup: [
      "Exclude medical mimics: hyperthyroidism, arrhythmia, pheochromocytoma, hypoglycemia",
      "Ask about caffeine, stimulants, decongestants, and cannabis/alcohol withdrawal",
      "Screen for depression, panic, social anxiety and substance use (they cluster)",
      "Baseline before pharmacotherapy per the chosen agent (e.g., ECG/QTc considerations)"
    ],
    management: {
      overview:
        "Canadian guidelines place SSRIs, SNRIs, and pregabalin as first-line pharmacotherapy alongside CBT; benzodiazepines are reserved for short-term or crisis use because of dependence risk. Antidepressants take 2–6 weeks to work, so set expectations and start low.",
      firstLine: [
        { text: "SSRIs (first-line; escitalopram and paroxetine carry a Canadian GAD indication, sertraline is well established)", meds: ["escitalopram", "paroxetine", "sertraline"] },
        { text: "SNRIs (first-line; venlafaxine XR and duloxetine are indicated for GAD)", meds: ["venlafaxine", "duloxetine", "desvenlafaxine"] },
        { text: "Pregabalin (first-line in the Canadian guideline; useful when a rapid, non-serotonergic option is wanted)", meds: ["pregabalin"] }
      ],
      later: [
        { text: "Buspirone — a non-sedating 5-HT1A partial agonist option and antidepressant augmenter; no dependence but slow onset", meds: ["buspirone"] },
        { text: "Benzodiazepines for short-term or bridging use only, tapered off as an antidepressant takes effect", meds: ["alprazolam", "lorazepam", "diazepam", "clonazepam", "bromazepam", "oxazepam"] },
        { text: "Hydroxyzine — an antihistamine anxiolytic option with no dependence, useful as-needed or for those avoiding benzodiazepines", meds: ["hydroxyzine"] },
        { text: "Second/third-line and adjuncts: imipramine, quetiapine XR, mirtazapine, gabapentin, vortioxetine", meds: ["imipramine", "quetiapine", "mirtazapine", "gabapentin", "vortioxetine"] }
      ],
      nonPharm: [
        "Cognitive behavioural therapy (first-line, equal to medication and durable)",
        "Applied relaxation and mindfulness-based approaches",
        "Sleep hygiene, caffeine/alcohol reduction, regular exercise",
        "Combine CBT with medication for more severe or refractory cases"
      ]
    },
    meds: ["escitalopram", "paroxetine", "sertraline", "venlafaxine", "duloxetine", "desvenlafaxine", "pregabalin", "buspirone", "hydroxyzine", "alprazolam", "lorazepam", "diazepam", "clonazepam", "bromazepam", "oxazepam", "imipramine", "quetiapine", "mirtazapine", "gabapentin", "vortioxetine"],
    related: ["panic", "social-anxiety", "ocd", "ptsd", "mdd", "insomnia"],
    sources: [
      { name: "Canadian Anxiety Guidelines (Katzman et al., BMC Psychiatry 2014)", url: "https://bmcpsychiatry.biomedcentral.com/articles/10.1186/1471-244X-14-S1-S1" }
    ]
  },

  {
    id: "panic",
    name: "Panic disorder",
    aka: ["panic", "panic disorder", "panic attacks", "recurrent panic", "panic disorder with agoraphobia"],
    category: "Anxiety",
    oneLiner: "Recurrent unexpected panic attacks plus persistent worry about further attacks or their consequences.",
    overview:
      "Panic disorder is marked by sudden surges of intense fear that peak within minutes, arriving unexpectedly and often without an obvious trigger. The attacks themselves — pounding heart, shortness of breath, chest tightness, dizziness, and a sense of doom or unreality — are terrifying and frequently mistaken for a heart attack. What turns isolated attacks into a disorder is the aftermath: a month or more of dread about the next attack, worry about 'going crazy' or dying, and behaviour changes to avoid situations where escape feels hard, which can spiral into agoraphobia.",
    epidemiology:
      "Lifetime prevalence is about 2–4%, roughly twice as common in women. Onset typically clusters in late adolescence to the mid-30s. Many patients present first to emergency departments or cardiology before the diagnosis is made.",
    presentation: [
      "Abrupt attacks peaking within minutes: palpitations, sweating, trembling, dyspnea",
      "Chest pain, choking sensation, nausea, dizziness or light-headedness",
      "Paresthesias, chills or hot flushes, derealisation/depersonalisation",
      "Fear of dying, losing control, or going insane during the attack",
      "Anticipatory anxiety and worry about further attacks between episodes",
      "Avoidance of places/situations (crowds, transit, being alone) — emerging agoraphobia"
    ],
    redFlags: [
      "First-time or exertional 'panic' — exclude cardiac ischemia, arrhythmia, and PE before anchoring on panic",
      "Screen for depression and suicidality; comorbidity is high",
      "Watch for alcohol/benzodiazepine self-medication and escalating use"
    ],
    workup: [
      "Rule out cardiac (ACS, SVT/arrhythmia), respiratory (asthma, PE), and endocrine (thyroid, pheochromocytoma) causes",
      "Consider substances/stimulants, caffeine, and cannabis or alcohol/sedative withdrawal",
      "ECG and basic labs when the picture is atypical or the patient is older"
    ],
    management: {
      overview:
        "SSRIs and SNRIs are first-line and highly effective; the key nuance is to start at a LOW dose and titrate slowly, because panic patients are exquisitely sensitive to early activation/jitteriness that can otherwise trigger attacks and drop-out. A benzodiazepine can bridge the first few weeks until the antidepressant works, then be tapered.",
      firstLine: [
        { text: "SSRIs (first-line; sertraline, paroxetine and fluoxetine carry panic indications — start low, go slow to avoid activation)", meds: ["sertraline", "paroxetine", "fluoxetine", "escitalopram", "citalopram", "fluvoxamine"] },
        { text: "SNRI (first-line; venlafaxine XR is indicated for panic disorder)", meds: ["venlafaxine"] }
      ],
      later: [
        { text: "Benzodiazepines for early bridging or breakthrough attacks (clonazepam and alprazolam are indicated); use time-limited and taper", meds: ["clonazepam", "alprazolam", "lorazepam", "diazepam"] },
        { text: "TCAs when SSRIs/SNRIs fail (clomipramine and imipramine have panic evidence) and mirtazapine as an alternative", meds: ["clomipramine", "imipramine", "mirtazapine"] },
        { text: "MAOI (phenelzine) for refractory panic, with dietary/washout precautions", meds: ["phenelzine"] }
      ],
      nonPharm: [
        "CBT with interoceptive exposure and cognitive restructuring (first-line)",
        "Breathing retraining and psychoeducation that attacks are not dangerous",
        "Graded exposure for any agoraphobic avoidance",
        "Reduce caffeine, stimulants, and alcohol"
      ]
    },
    meds: ["sertraline", "paroxetine", "fluoxetine", "escitalopram", "citalopram", "fluvoxamine", "venlafaxine", "clonazepam", "alprazolam", "lorazepam", "diazepam", "clomipramine", "imipramine", "mirtazapine", "phenelzine"],
    related: ["gad", "social-anxiety", "ptsd", "mdd", "discontinuation-syndrome"],
    sources: [
      { name: "Canadian Anxiety Guidelines (Katzman et al., BMC Psychiatry 2014)", url: "https://bmcpsychiatry.biomedcentral.com/articles/10.1186/1471-244X-14-S1-S1" }
    ]
  },

  {
    id: "social-anxiety",
    name: "Social anxiety disorder",
    aka: ["social anxiety", "social anxiety disorder", "social phobia", "sad", "performance anxiety", "stage fright"],
    category: "Anxiety",
    oneLiner: "Intense fear of scrutiny or negative evaluation in social/performance situations, driving avoidance.",
    overview:
      "Social anxiety disorder is a persistent, marked fear of situations where one might be judged, embarrassed, or found wanting — speaking up, eating in front of others, being introduced, or performing. The person fears that visible anxiety (blushing, trembling, sweating, a shaky voice) will be noticed and humiliating, so feared situations are endured with dread or avoided altogether. A 'performance-only' subtype is limited to public speaking or performing. The condition is chronic and, untreated, narrows education, work, and relationships.",
    epidemiology:
      "One of the most common anxiety disorders, with lifetime prevalence around 7–12%. Onset is characteristically early — often in the early-to-mid teens — and it frequently precedes and predicts later depression and substance use.",
    presentation: [
      "Fear of embarrassment or negative evaluation in social/performance settings",
      "Anticipatory anxiety for days before an event; post-event 'rumination' afterward",
      "Physical signs the person fixates on: blushing, sweating, trembling, shaky voice",
      "Avoidance of speaking up, phone calls, eating in public, or being the centre of attention",
      "Safety behaviours (scripting, alcohol before events) that maintain the fear",
      "Performance-only subtype confined to public speaking/performing"
    ],
    redFlags: [
      "Screen for alcohol use disorder — pre-event drinking to cope is common and can escalate",
      "Assess for comorbid depression and suicidality",
      "Distinguish from avoidant personality disorder (pervasive, not situational) and autism"
    ],
    workup: [
      "Clarify generalised vs performance-only subtype (guides drug choice)",
      "Screen for depression, other anxiety disorders, and substance use",
      "Rule out medical causes of tremor/palpitations if a beta-blocker is being considered (e.g., thyroid)"
    ],
    management: {
      overview:
        "For generalised social anxiety, SSRIs and venlafaxine are first-line together with CBT. For the performance-only subtype, an as-needed beta-blocker such as propranolol taken before the event blunts the peripheral surge (tremor, palpitations) — it is NOT a treatment for the generalised form.",
      firstLine: [
        { text: "SSRIs (first-line; paroxetine and sertraline are indicated, escitalopram/fluvoxamine/fluoxetine also used)", meds: ["paroxetine", "sertraline", "escitalopram", "fluvoxamine", "fluoxetine"] },
        { text: "Venlafaxine XR (first-line SNRI, indicated for social anxiety disorder)", meds: ["venlafaxine"] }
      ],
      later: [
        { text: "Propranolol as-needed for PERFORMANCE-ONLY anxiety (dose ~30–60 min before performing); not for generalised SAD", meds: ["propranolol"] },
        { text: "Moclobemide (reversible MAOI, indicated for SAD) and phenelzine for refractory/generalised cases", meds: ["moclobemide", "phenelzine"] },
        { text: "Adjuncts / alternatives: pregabalin, gabapentin, and short-term clonazepam for severe anticipatory anxiety", meds: ["pregabalin", "gabapentin", "clonazepam"] }
      ],
      nonPharm: [
        "CBT with graded social exposure and cognitive restructuring (first-line)",
        "Social skills and video-feedback work; dropping safety behaviours",
        "Group CBT is effective and normalising",
        "Reduce reliance on alcohol as a social crutch"
      ]
    },
    meds: ["paroxetine", "sertraline", "escitalopram", "fluvoxamine", "fluoxetine", "venlafaxine", "propranolol", "moclobemide", "phenelzine", "pregabalin", "gabapentin", "clonazepam"],
    related: ["gad", "panic", "mdd", "aud"],
    sources: [
      { name: "Canadian Anxiety Guidelines (Katzman et al., BMC Psychiatry 2014)", url: "https://bmcpsychiatry.biomedcentral.com/articles/10.1186/1471-244X-14-S1-S1" }
    ]
  },

  {
    id: "ocd",
    name: "Obsessive-compulsive disorder",
    aka: ["ocd", "obsessive-compulsive disorder", "obsessions and compulsions", "obsessive compulsive"],
    category: "Anxiety",
    oneLiner: "Intrusive, unwanted obsessions paired with repetitive compulsions performed to reduce distress.",
    overview:
      "OCD is defined by two linked phenomena. Obsessions are recurrent, intrusive thoughts, images, or urges — about contamination, harm, symmetry, or forbidden themes — that the person experiences as unwanted and distressing. Compulsions are repetitive behaviours or mental acts (washing, checking, counting, reassurance-seeking) performed to neutralise the obsession or prevent a feared outcome, even when the link is clearly excessive. The rituals bring only fleeting relief and consume time, feeding a self-reinforcing loop. Insight is usually at least partial. It is now classified with obsessive-compulsive and related disorders rather than the anxiety disorders proper.",
    epidemiology:
      "Lifetime prevalence is about 1–2%, with a roughly equal sex distribution overall (earlier, male-predominant onset in childhood). Onset is typically in adolescence or early adulthood, and the course is often chronic and fluctuating.",
    presentation: [
      "Obsessions: contamination fears, pathological doubt, need for symmetry, taboo/aggressive thoughts",
      "Compulsions: washing, checking, ordering, counting, mental reviewing, reassurance-seeking",
      "Time-consuming rituals (often >1 hour/day) that the person recognises as excessive",
      "Marked distress if rituals are resisted or prevented",
      "Avoidance of triggers (public surfaces, sharp objects) to forestall obsessions",
      "Frequent comorbidity with depression and tic disorders"
    ],
    redFlags: [
      "Screen for depression and suicidality (elevated risk, especially with severe OCD)",
      "Ego-dystonic harm/taboo obsessions are NOT intent — reassure, but assess safety carefully",
      "Sudden-onset OCD in a child may warrant evaluation for PANDAS/PANS"
    ],
    workup: [
      "Distinguish true obsessions/compulsions from generalized worry, OCPD, and psychotic delusions",
      "Screen for tics, body-focused repetitive behaviours, and hoarding",
      "Assess severity (e.g., Y-BOCS) to track response over the long trial period"
    ],
    management: {
      overview:
        "SSRIs are first-line, but OCD differs from other anxiety disorders in two crucial ways: it typically needs HIGHER doses (toward the top of the range) and LONGER trials (10–12 weeks before judging response). Clomipramine is a highly effective second-line option, and atypical antipsychotic augmentation helps partial responders. CBT with exposure and response prevention is central.",
      firstLine: [
        { text: "SSRIs at higher doses and longer trials (fluoxetine, fluvoxamine, paroxetine, sertraline are indicated for OCD; escitalopram/citalopram also used)", meds: ["fluoxetine", "fluvoxamine", "paroxetine", "sertraline", "escitalopram", "citalopram"] }
      ],
      later: [
        { text: "Clomipramine — the most serotonergic TCA, strong OCD evidence; reserved for SSRI non-response given side-effects", meds: ["clomipramine"] },
        { text: "Antipsychotic augmentation for partial responders (add low-dose risperidone or aripiprazole to the SSRI)", meds: ["risperidone", "aripiprazole"] }
      ],
      nonPharm: [
        "Cognitive behavioural therapy with Exposure and Response Prevention (ERP) — first-line and durable",
        "Combine ERP with an SSRI for moderate-to-severe cases",
        "Family psychoeducation to stop accommodating rituals",
        "For refractory OCD: consider specialist referral (deep brain stimulation is investigational)"
      ]
    },
    meds: ["fluoxetine", "fluvoxamine", "paroxetine", "sertraline", "escitalopram", "citalopram", "clomipramine", "risperidone", "aripiprazole"],
    related: ["gad", "social-anxiety", "ptsd", "mdd"],
    sources: [
      { name: "Canadian Anxiety/OCD Guidelines (Katzman et al., BMC Psychiatry 2014)", url: "https://bmcpsychiatry.biomedcentral.com/articles/10.1186/1471-244X-14-S1-S1" }
    ]
  },

  {
    id: "ptsd",
    name: "Post-traumatic stress disorder",
    aka: ["ptsd", "post-traumatic stress disorder", "posttraumatic stress disorder", "post traumatic stress", "trauma disorder", "combat stress"],
    category: "Anxiety",
    oneLiner: "Persistent re-experiencing, avoidance, negative mood, and hyperarousal after a traumatic event.",
    overview:
      "PTSD develops after exposure to actual or threatened death, serious injury, or sexual violence — experienced, witnessed, or learned about. Its features cluster into four groups: intrusive re-experiencing (flashbacks, nightmares, distressing memories), avoidance of trauma reminders, negative shifts in mood and thinking (detachment, guilt, a foreshortened sense of the future), and heightened arousal (hypervigilance, startle, irritability, sleep disruption). Symptoms persist beyond a month and are not simply the immediate reaction to the event. It is classified among trauma- and stressor-related disorders.",
    epidemiology:
      "Lifetime prevalence is roughly 6–8%, about twice as high in women. Risk depends on trauma type (interpersonal and sexual trauma carry the highest risk), prior trauma, and lack of social support. Many cases remit, but a substantial minority become chronic.",
    presentation: [
      "Intrusions: flashbacks, nightmares, and distress on exposure to reminders",
      "Avoidance of trauma-related thoughts, feelings, people, or places",
      "Negative alterations in mood/cognition: detachment, numbing, guilt, blame",
      "Hyperarousal: hypervigilance, exaggerated startle, irritability, poor concentration",
      "Sleep disturbance, often with trauma-themed nightmares",
      "Dissociation (derealisation/depersonalisation) in a subset"
    ],
    redFlags: [
      "Screen for suicidality, depression, and substance use — all frequently comorbid",
      "Assess ongoing danger (intimate-partner violence, active combat/occupational exposure)",
      "Avoid benzodiazepines — they do not treat core PTSD and worsen outcomes/dependence"
    ],
    workup: [
      "Confirm a qualifying trauma and symptom pattern lasting >1 month with impairment",
      "Screen for comorbid depression, panic, and alcohol/substance use disorders",
      "Ask specifically about nightmares and sleep, which are targetable",
      "Rule out TBI/medical contributors when arousal or cognition is prominent"
    ],
    management: {
      overview:
        "Trauma-focused psychotherapy is the cornerstone. When medication is used, SSRIs are first-line — sertraline and paroxetine carry PTSD indications — with venlafaxine as an SNRI alternative. Prazosin specifically targets trauma-related nightmares and sleep disruption. Benzodiazepines should be AVOIDED: they do not treat the disorder and are associated with worse outcomes.",
      firstLine: [
        { text: "SSRIs (first-line; sertraline and paroxetine are indicated for PTSD, fluoxetine is also effective)", meds: ["sertraline", "paroxetine", "fluoxetine"] },
        { text: "Venlafaxine XR (first-line SNRI alternative)", meds: ["venlafaxine"] }
      ],
      later: [
        { text: "Prazosin — targeted add-on for PTSD-associated NIGHTMARES and sleep disruption (dosed at night, titrated up)", meds: ["prazosin"] },
        { text: "Adjuncts for partial response: mirtazapine (sleep/appetite), atypical antipsychotic augmentation (e.g., quetiapine) for severe/refractory cases", meds: ["mirtazapine", "quetiapine"] },
        { text: "Propranolol may blunt hyperarousal (limited evidence); benzodiazepines are avoided", meds: ["propranolol"] }
      ],
      nonPharm: [
        "Trauma-focused CBT, prolonged exposure, cognitive processing therapy (first-line)",
        "EMDR (eye movement desensitisation and reprocessing)",
        "Psychoeducation, sleep and nightmare-focused strategies",
        "Address comorbid substance use in parallel"
      ]
    },
    meds: ["sertraline", "paroxetine", "fluoxetine", "venlafaxine", "prazosin", "mirtazapine", "quetiapine", "propranolol"],
    related: ["gad", "panic", "mdd", "insomnia", "aud"],
    sources: [
      { name: "Canadian PTSD Guidelines (Katzman et al., BMC Psychiatry 2014)", url: "https://bmcpsychiatry.biomedcentral.com/articles/10.1186/1471-244X-14-S1-S1" }
    ]
  }
];
