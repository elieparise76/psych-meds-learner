// Cross-med, board-style (FRCPC) vignettes — MOOD & ANXIETY disorders.
// Options are real deck `generic` names (or named syndromes for recognise-the-syndrome items).
// Drug facts grounded in data/deck.json (canmatLineOfTherapy, pearls, examHooks, offLabel, washout).
// See vignettes/_CONTRACT.md.

export default [
  // ───────────────────────────── Major depressive disorder ─────────────────────────────
  {
    id: "va_mdd_cardiac_post_mi_1",
    stem: "A 64-year-old man develops a major depressive episode 6 weeks after an acute myocardial infarction. He needs an antidepressant with the best cardiac safety evidence in this population. Which is the best choice?",
    options: ["Sertraline", "Amitriptyline", "Citalopram", "Venlafaxine"],
    answer: "Sertraline",
    explanation: "Sertraline is the preferred antidepressant post-MI (SADHART evidence) with a clean cardiac profile. Amitriptyline (TCA) is cardiotoxic and slows conduction, citalopram carries dose-dependent QT prolongation, and venlafaxine raises blood pressure at higher doses.",
    meds: ["sertraline", "amitriptyline", "citalopram", "venlafaxine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["special-population", "cardiac", "qt", "canmat"],
    source: { name: "CANMAT 2016 MDD; SADHART", origin: "canmat" }
  },
  {
    id: "va_mdd_bulimia_contra_1",
    stem: "A 24-year-old woman with major depression and active bulimia nervosa needs an antidepressant. Which agent is CONTRAINDICATED?",
    options: ["Bupropion", "Fluoxetine", "Sertraline", "Escitalopram"],
    answer: "Bupropion",
    explanation: "Bupropion lowers the seizure threshold and is contraindicated in eating disorders (bulimia/anorexia) and seizure disorders due to elevated seizure risk. SSRIs are safe here — fluoxetine is in fact the antidepressant of choice for bulimia.",
    meds: ["bupropion", "fluoxetine", "sertraline", "escitalopram"],
    disorder: "Major depressive disorder",
    difficulty: 1,
    tags: ["contraindication", "seizure", "eating-disorder"],
    source: { name: "Bupropion product monograph (deck)", origin: "monograph" }
  },
  {
    id: "va_mdd_elderly_mirtazapine_1",
    stem: "An 80-year-old woman with major depression has prominent insomnia, poor appetite, and 6 kg of weight loss. Which antidepressant best targets her presentation?",
    options: ["Mirtazapine", "Bupropion", "Fluoxetine", "Venlafaxine"],
    answer: "Mirtazapine",
    explanation: "Mirtazapine's H1 antihistamine effect promotes sleep and appetite/weight gain, making it ideal for depressed elderly patients with insomnia and cachexia; 5-HT3 blockade also limits nausea. Bupropion and fluoxetine are activating (worsen insomnia and anorexia), and venlafaxine is not appetite-promoting.",
    meds: ["mirtazapine", "bupropion", "fluoxetine", "venlafaxine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["special-population", "elderly"],
    source: { name: "CANMAT 2016 MDD; mirtazapine monograph (deck)", origin: "canmat" }
  },
  {
    id: "va_mdd_trd_lithium_augment_1",
    stem: "A 45-year-old with unipolar major depression has not responded to two adequate SSRI/SNRI trials. You want to add an evidence-based augmenting agent that also lowers suicide risk. Best choice?",
    options: ["Lithium", "Gabapentin", "Buspirone", "Diazepam"],
    answer: "Lithium",
    explanation: "Lithium is a classic evidence-based augmentation strategy in treatment-resistant unipolar depression and is the only psychotropic with robust anti-suicide evidence. Gabapentin and benzodiazepines lack antidepressant efficacy; buspirone augmentation is weaker and unrelated to suicide reduction.",
    meds: ["lithium", "gabapentin", "buspirone", "diazepam"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["treatment-resistant", "augmentation", "canmat"],
    source: { name: "CANMAT 2016 MDD; lithium data (deck)", origin: "canmat" }
  },
  {
    id: "va_mdd_trd_esketamine_1",
    stem: "A 38-year-old with treatment-resistant depression and acute suicidal ideation needs a rapidly acting option delivered in-clinic under monitoring, paired with an oral antidepressant. Which agent fits?",
    options: ["Esketamine", "Sertraline", "Amitriptyline", "Moclobemide"],
    answer: "Esketamine",
    explanation: "Intranasal esketamine acts within hours and is indicated for treatment-resistant depression and MDD with acute suicidality; it is given in-clinic under a REMS-type program with ≥2 h monitoring and always combined with an oral antidepressant. The oral agents take 2–6 weeks to work.",
    meds: ["esketamine", "sertraline", "amitriptyline", "moclobemide"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["treatment-resistant", "monitoring"],
    source: { name: "Esketamine monograph (deck)", origin: "monograph" }
  },
  {
    id: "va_mdd_atypical_maoi_1",
    stem: "A 34-year-old with recurrent atypical depression — mood reactivity, hypersomnia, hyperphagia, leaden paralysis, and rejection sensitivity — has failed sequential SSRI and SNRI trials. Which agent has the strongest historical evidence for this subtype?",
    options: ["Phenelzine", "Bupropion", "Nortriptyline", "Lithium"],
    answer: "Phenelzine",
    explanation: "Irreversible MAOIs, classically phenelzine, are the historical agents of choice for refractory atypical depression. Before starting, allow the required washout from serotonergic drugs (e.g., 5 weeks after fluoxetine) and counsel on the tyramine diet. TCAs are less effective in atypical depression than MAOIs.",
    meds: ["phenelzine", "bupropion", "nortriptyline", "lithium"],
    disorder: "Major depressive disorder",
    difficulty: 3,
    tags: ["treatment-resistant", "washout", "serotonin"],
    source: { name: "CANMAT 2016 MDD; phenelzine monograph (deck)", origin: "canmat" }
  },

  // ───────────────────────────── Generalized anxiety disorder ─────────────────────────────
  {
    id: "va_gad_first_line_1",
    stem: "A 29-year-old with newly diagnosed generalized anxiety disorder and no substance-use history wants first-line pharmacotherapy. Best initial choice?",
    options: ["Escitalopram", "Alprazolam", "Buspirone", "Quetiapine"],
    answer: "Escitalopram",
    explanation: "An SSRI (escitalopram) is first-line for GAD — effective, well tolerated, and non-dependence-forming. Benzodiazepines like alprazolam risk tolerance/dependence and are not first-line maintenance; buspirone is a second-line/augmenting option; quetiapine is off-label with a heavy side-effect burden.",
    meds: ["escitalopram", "alprazolam", "buspirone", "quetiapine"],
    disorder: "Generalized anxiety disorder",
    difficulty: 1,
    tags: ["first-line", "canmat"],
    source: { name: "Canadian Anxiety Guidelines 2014", origin: "canmat" }
  },
  {
    id: "va_gad_sud_buspirone_1",
    stem: "A 41-year-old with generalized anxiety disorder and active alcohol use disorder needs an anxiolytic with no abuse or dependence potential. Which is most appropriate?",
    options: ["Buspirone", "Diazepam", "Lorazepam", "Alprazolam"],
    answer: "Buspirone",
    explanation: "Buspirone (5-HT1A partial agonist) has no dependence or abuse potential and is a preferred anxiolytic in patients with a substance-use history; it must be taken daily and takes ~2 weeks to work. The benzodiazepines all carry dependence risk and are hazardous in active alcohol use disorder.",
    meds: ["buspirone", "diazepam", "lorazepam", "alprazolam"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["special-population", "substance-use"],
    source: { name: "Buspirone monograph (deck)", origin: "monograph" }
  },

  // ───────────────────────────── Panic disorder ─────────────────────────────
  {
    id: "va_panic_first_line_1",
    stem: "A 31-year-old with panic disorder wants maintenance pharmacotherapy. Which is the best first-line long-term agent (started low and titrated slowly)?",
    options: ["Sertraline", "Alprazolam", "Bupropion", "Propranolol"],
    answer: "Sertraline",
    explanation: "SSRIs such as sertraline are first-line for panic disorder; start low and go slow because initial activation can transiently worsen panic. Alprazolam works acutely but risks dependence and is not preferred for maintenance; bupropion is activating and not indicated; propranolol does not treat panic disorder.",
    meds: ["sertraline", "alprazolam", "bupropion", "propranolol"],
    disorder: "Panic disorder",
    difficulty: 1,
    tags: ["first-line", "canmat"],
    source: { name: "Canadian Anxiety Guidelines 2014", origin: "canmat" }
  },

  // ───────────────────────────── OCD ─────────────────────────────
  {
    id: "va_ocd_first_line_1",
    stem: "A 27-year-old with obsessive-compulsive disorder is starting pharmacotherapy. Which is an appropriate first-line agent, recognizing OCD often needs higher doses and a longer trial?",
    options: ["Fluvoxamine", "Bupropion", "Nortriptyline", "Lithium"],
    answer: "Fluvoxamine",
    explanation: "SSRIs are first-line for OCD, often at higher doses and with a 10–12 week trial; fluvoxamine is a go-to agent. Bupropion (NDRI) and nortriptyline (a noradrenergic TCA) lack anti-obsessional efficacy, and lithium is not a primary OCD treatment.",
    meds: ["fluvoxamine", "bupropion", "nortriptyline", "lithium"],
    disorder: "Obsessive-compulsive disorder",
    difficulty: 1,
    tags: ["first-line", "canmat"],
    source: { name: "Canadian Anxiety Guidelines 2014", origin: "canmat" }
  },
  {
    id: "va_ocd_clomipramine_1",
    stem: "A 33-year-old with severe OCD has failed adequate trials of three different SSRIs. Which agent has the strongest evidence as the next step?",
    options: ["Clomipramine", "Amitriptyline", "Desipramine", "Imipramine"],
    answer: "Clomipramine",
    explanation: "Clomipramine, the most serotonergic TCA, is the historical gold-standard for OCD and the only TCA with robust anti-obsessional efficacy — the classic choice after SSRI failure. The other TCAs are more noradrenergic and ineffective for OCD; watch clomipramine's dose-dependent seizure risk (250 mg/day ceiling).",
    meds: ["clomipramine", "amitriptyline", "desipramine", "imipramine"],
    disorder: "Obsessive-compulsive disorder",
    difficulty: 2,
    tags: ["treatment-resistant", "seizure"],
    source: { name: "Clomipramine monograph (deck)", origin: "monograph" }
  },

  // ───────────────────────────── PTSD ─────────────────────────────
  {
    id: "va_ptsd_first_line_1",
    stem: "A 36-year-old veteran with PTSD is starting pharmacotherapy alongside trauma-focused psychotherapy. Which is an appropriate first-line medication?",
    options: ["Sertraline", "Alprazolam", "Bupropion", "Lithium"],
    answer: "Sertraline",
    explanation: "SSRIs (sertraline, paroxetine) are first-line for PTSD. Benzodiazepines such as alprazolam are specifically discouraged — they do not treat core PTSD symptoms, may impair fear extinction, and carry dependence risk in a high-comorbidity population. Bupropion and lithium are not PTSD treatments.",
    meds: ["sertraline", "alprazolam", "bupropion", "lithium"],
    disorder: "Post-traumatic stress disorder",
    difficulty: 1,
    tags: ["first-line", "canmat"],
    source: { name: "Canadian Anxiety Guidelines 2014", origin: "canmat" }
  },
  {
    id: "va_ptsd_prazosin_1",
    stem: "A 44-year-old with PTSD is stable on an SSRI but has disabling recurrent trauma nightmares and fragmented sleep. Which adjunct specifically targets this symptom?",
    options: ["Prazosin", "Zopiclone", "Quetiapine", "Clonazepam"],
    answer: "Prazosin",
    explanation: "Prazosin, an α1-antagonist dosed at bedtime, is the off-label go-to for PTSD-associated nightmares and trauma-related sleep disruption. Warn about the first-dose orthostatic hypotension/syncope and start at 1 mg. Z-drugs, quetiapine, and benzodiazepines do not selectively address trauma nightmares.",
    meds: ["prazosin", "zopiclone", "quetiapine", "clonazepam"],
    disorder: "Post-traumatic stress disorder",
    difficulty: 2,
    tags: ["special-population", "adjunct"],
    source: { name: "Prazosin monograph (deck)", origin: "monograph" }
  },

  // ───────────────────────────── Social anxiety disorder ─────────────────────────────
  {
    id: "va_social_generalized_first_line_1",
    stem: "A 25-year-old with generalized social anxiety disorder (pervasive fear across most social situations) wants ongoing pharmacotherapy. Best first-line choice?",
    options: ["Paroxetine", "Propranolol", "Buspirone", "Amitriptyline"],
    answer: "Paroxetine",
    explanation: "SSRIs/SNRIs (e.g., paroxetine) are first-line for generalized social anxiety disorder. Propranolol helps only discrete performance (situational) anxiety, not the generalized subtype; buspirone is not established for SAD; and amitriptyline (TCA) is not a first-line anxiety agent.",
    meds: ["paroxetine", "propranolol", "buspirone", "amitriptyline"],
    disorder: "Social anxiety disorder",
    difficulty: 1,
    tags: ["first-line", "canmat"],
    source: { name: "Canadian Anxiety Guidelines 2014", origin: "canmat" }
  },
  {
    id: "va_social_performance_propranolol_1",
    stem: "A 30-year-old violinist has isolated performance anxiety — palpitations, tremor, and sweating only when playing on stage — and wants an as-needed agent for the physical symptoms. Which is most appropriate?",
    options: ["Propranolol", "Sertraline", "Buspirone", "Clonazepam"],
    answer: "Propranolol",
    explanation: "For discrete performance (situational) social anxiety, a PRN beta-blocker such as propranolol blunts the autonomic symptoms (tremor, palpitations) without sedation or dependence. SSRIs are for generalized SAD and take weeks; a benzodiazepine risks dependence and impairs fine motor performance.",
    meds: ["propranolol", "sertraline", "buspirone", "clonazepam"],
    disorder: "Social anxiety disorder",
    difficulty: 2,
    tags: ["performance", "adjunct"],
    source: { name: "Propranolol monograph (deck)", origin: "monograph" }
  },

  // ───────────────────────────── Bipolar disorder ─────────────────────────────
  {
    id: "va_bipolar_mania_lithium_1",
    stem: "A 26-year-old man with bipolar I disorder presents with a first euphoric manic episode and a strong family history of good lithium response. You want a first-line monotherapy that also reduces long-term suicide risk. Best choice?",
    options: ["Lithium", "Lamotrigine", "Bupropion", "Sertraline"],
    answer: "Lithium",
    explanation: "Lithium is CANMAT/ISBD first-line for acute mania and maintenance and uniquely reduces suicide risk, with a good family-history predictor of response. Lamotrigine is ineffective for acute mania, and antidepressants (bupropion, sertraline) can precipitate or worsen mania.",
    meds: ["lithium", "lamotrigine", "bupropion", "sertraline"],
    disorder: "Bipolar I disorder",
    difficulty: 1,
    tags: ["first-line", "mania", "canmat"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },
  {
    id: "va_bipolar_depression_lurasidone_1",
    stem: "A 40-year-old with bipolar I disorder presents in an acute bipolar depressive episode and you want first-line monotherapy with a favourable metabolic profile. Which is an appropriate choice?",
    options: ["Lurasidone", "Fluoxetine", "Diazepam", "Carbamazepine"],
    answer: "Lurasidone",
    explanation: "Lurasidone is CANMAT/ISBD first-line for acute bipolar depression and is relatively metabolically favourable. Antidepressant monotherapy (fluoxetine) is avoided in bipolar depression (mood-switch/cycling risk), a benzodiazepine does not treat the depression, and carbamazepine is not a first-line agent for the depressive pole.",
    meds: ["lurasidone", "fluoxetine", "diazepam", "carbamazepine"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["first-line", "bipolar-depression", "canmat"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },
  {
    id: "va_bipolar_maintenance_lamotrigine_1",
    stem: "A 35-year-old with bipolar II disorder has predominantly recurrent depressive episodes and few hypomanias. Which agent is best for maintenance to prevent depressive relapse?",
    options: ["Lamotrigine", "Valproate / Divalproex", "Haloperidol", "Bupropion"],
    answer: "Lamotrigine",
    explanation: "Lamotrigine is first-line for bipolar maintenance with predominant depressive polarity — it prevents depressive relapse but is not effective for acute mania. Titrate slowly to avoid SJS/TEN. Valproate targets the manic pole, haloperidol is not a maintenance mood-stabilizer of choice here, and antidepressant monotherapy is inappropriate in bipolar disorder.",
    meds: ["lamotrigine", "valproate", "haloperidol", "bupropion"],
    disorder: "Bipolar II disorder",
    difficulty: 2,
    tags: ["maintenance", "canmat"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },
  {
    id: "va_bipolar_pregnancy_valproate_1",
    stem: "A 28-year-old woman with bipolar disorder who is planning pregnancy asks which mood stabilizer should be AVOIDED because of the highest teratogenic risk. Which agent?",
    options: ["Valproate / Divalproex", "Lamotrigine", "Quetiapine", "Lithium"],
    answer: "Valproate / Divalproex",
    explanation: "Valproate carries the highest teratogenic risk — neural tube defects and impaired neurodevelopment/IQ — and is avoided in anyone who could become pregnant. Lamotrigine and quetiapine are comparatively safer options; lithium carries an Ebstein-anomaly signal but a much lower absolute risk than valproate.",
    meds: ["valproate", "lamotrigine", "quetiapine", "lithium"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["special-population", "pregnancy", "contraindication"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },

  // ───────────────────────────── Recognise-the-syndrome / interaction ─────────────────────────────
  {
    id: "va_serotonin_syndrome_1",
    stem: "A 52-year-old on phenelzine is inadvertently started on sertraline. Within a day he develops agitation, diaphoresis, hyperthermia, and lower-limb clonus with hyperreflexia. What is the diagnosis?",
    options: ["Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity", "Lithium toxicity"],
    answer: "Serotonin syndrome",
    explanation: "Combining an MAOI with an SSRI causes serotonin syndrome — the triad of neuromuscular excitability (clonus, hyperreflexia), autonomic instability, and altered mental status. Clonus/hyperreflexia distinguish it from NMS (rigidity, hyporeflexia, slower onset). This is why a strict washout is mandatory between MAOIs and serotonergic drugs.",
    meds: ["phenelzine", "sertraline"],
    disorder: "Serotonin syndrome",
    difficulty: 2,
    tags: ["serotonin", "interaction", "washout"],
    source: { name: "Phenelzine/sertraline interactions (deck)", origin: "openfda" }
  },
  {
    id: "va_maoi_tyramine_crisis_1",
    stem: "A 49-year-old on tranylcypromine eats aged cheese and cured meats at a party and rapidly develops a severe throbbing occipital headache, palpitations, and a blood pressure of 210/120. What is the diagnosis?",
    options: ["Tyramine (hypertensive) crisis", "Serotonin syndrome", "Anticholinergic toxicity", "Neuroleptic malignant syndrome"],
    answer: "Tyramine (hypertensive) crisis",
    explanation: "Irreversible MAOIs block gut/hepatic MAO, so dietary tyramine triggers a surge of noradrenaline release — a hypertensive crisis with occipital headache and palpitations. This is why a strict low-tyramine diet is required. The reversible RIMA moclobemide avoids this because tyramine can displace it from MAO-A.",
    meds: ["tranylcypromine", "moclobemide"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["hypertensive-crisis", "interaction", "diet"],
    source: { name: "Tranylcypromine/MAOI diet (deck)", origin: "monograph" }
  },
  {
    id: "va_lithium_toxicity_1",
    stem: "A 72-year-old woman stable on lithium is started on lisinopril for hypertension and then develops gastroenteritis with poor oral intake. She now has a coarse tremor, ataxia, slurred speech, and confusion. What is the diagnosis?",
    options: ["Lithium toxicity", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity"],
    answer: "Lithium toxicity",
    explanation: "ACE inhibitors and volume depletion reduce renal lithium clearance and raise the level; coarse tremor, ataxia, dysarthria, and confusion are hallmark toxicity signs (worse in the elderly with reduced renal reserve). NSAIDs, thiazides, ARBs, and dehydration act the same way — lithium has a narrow therapeutic index (toxic >1.5 mmol/L).",
    meds: ["lithium"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["overdose", "interaction", "elderly", "monitoring"],
    source: { name: "Lithium interactions/warnings (deck)", origin: "openfda" }
  }
];
