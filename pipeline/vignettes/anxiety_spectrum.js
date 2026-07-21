// Board-style (Royal College / FRCPC) cross-med vignettes deepening ANXIETY-DISORDER
// coverage for the Practice engine. Every drug fact is grounded in data/deck.json
// (indications, CANMAT/anxiety-guideline positioning, dosing). See _CONTRACT.md.

export default [
  // ─────────────────────────── Generalized anxiety disorder ───────────────────────────
  {
    id: "va_anx_gad_firstline_1",
    stem: "A 29-year-old with generalized anxiety disorder and no comorbidities has never been treated. You want a CANMAT/Canadian-guideline first-line agent that is also Health Canada-approved for GAD, well tolerated, and has a clean interaction profile. Best initial choice?",
    options: ["Escitalopram", "Bupropion", "Clonazepam", "Amitriptyline"],
    answer: "Escitalopram",
    explanation: "Escitalopram is first-line and approved for GAD with the cleanest interaction profile of the SSRIs. Bupropion has no anxiety indication (and can be activating); benzodiazepines are not first-line maintenance; TCAs are later-line and poorly tolerated.",
    meds: ["escitalopram", "bupropion", "clonazepam", "amitriptyline"],
    disorder: "Generalized anxiety disorder",
    difficulty: 1,
    tags: ["first-line", "canmat"],
    source: { name: "Canadian Anxiety Guidelines 2014; CANMAT", origin: "canmat" }
  },
  {
    id: "va_anx_gad_buspirone_aug_2",
    stem: "A patient with generalized anxiety disorder has a partial response after an adequate trial of escitalopram. She previously became dependent on a benzodiazepine and wants an augmenting agent with no abuse liability and no sedation. Which is the best add-on?",
    options: ["Buspirone", "Alprazolam", "Lorazepam", "Diazepam"],
    answer: "Buspirone",
    explanation: "Buspirone is a 5-HT1A partial agonist approved for GAD and used to augment SSRIs; it has no dependence liability and no sedation, but a delayed (1–2 week) onset. Alprazolam, lorazepam, and diazepam are all benzodiazepines carrying exactly the dependence risk she wants to avoid.",
    meds: ["buspirone", "alprazolam", "lorazepam", "diazepam"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["augmentation"],
    source: { name: "Canadian Anxiety Guidelines 2014; buspirone monograph", origin: "canmat" }
  },
  {
    id: "va_anx_gad_elderly_avoid_benzo_3",
    stem: "A 76-year-old with generalized anxiety disorder, a prior fall, and mild renal impairment needs pharmacotherapy. You want durable maintenance efficacy while minimizing falls, sedation, and dependence. Which agent best fits?",
    options: ["Diazepam", "Alprazolam", "Duloxetine", "Lorazepam"],
    answer: "Duloxetine",
    explanation: "Duloxetine is approved for GAD and is an appropriate first-line maintenance option; benzodiazepines are relatively contraindicated in older adults (Beers criteria) because of falls, sedation, cognitive impairment, and dependence. Long-acting diazepam is especially problematic given accumulation in the elderly.",
    meds: ["duloxetine", "diazepam", "alprazolam", "lorazepam"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["elderly", "avoidance"],
    source: { name: "Canadian Anxiety Guidelines 2014; Beers criteria", origin: "canmat" }
  },
  {
    id: "va_anx_gad_pregabalin_4",
    stem: "A patient with generalized anxiety disorder cannot tolerate SSRIs or SNRIs (repeated nausea and sexual dysfunction) and refuses ongoing benzodiazepines. You want a non-benzodiazepine agent with randomized-trial evidence and relatively rapid onset in GAD. Which is most appropriate?",
    options: ["Pregabalin", "Alprazolam", "Bupropion", "Clonazepam"],
    answer: "Pregabalin",
    explanation: "Pregabalin has robust RCT evidence in GAD (approved for GAD in Europe; used off-label in Canada), with a relatively fast onset and no serotonergic side effects. Alprazolam and clonazepam are benzodiazepines the patient declined; bupropion has no anxiety efficacy.",
    meds: ["pregabalin", "alprazolam", "bupropion", "clonazepam"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["first-line"],
    source: { name: "Canadian Anxiety Guidelines 2014; pregabalin GAD RCTs", origin: "canmat" }
  },

  // ──────────────────────────────── Panic disorder ────────────────────────────────
  {
    id: "va_anx_panic_firstline_startlow_5",
    stem: "A 34-year-old with panic disorder is very sensitive to somatic sensations and fears medication side effects. You choose an SSRI approved for panic disorder and plan to start at half the usual dose (25 mg) to avoid early activation/jitteriness. Which agent are you describing?",
    options: ["Sertraline", "Bupropion", "Phenelzine", "Amitriptyline"],
    answer: "Sertraline",
    explanation: "Sertraline is first-line and approved for panic disorder; the standard is to start at 25 mg (half-dose) and go slow to avoid the initial activation that can be mistaken for panic. Bupropion is activating and not indicated; MAOIs/TCAs are later-line reserved options.",
    meds: ["sertraline", "bupropion", "phenelzine", "amitriptyline"],
    disorder: "Panic disorder",
    difficulty: 1,
    tags: ["first-line", "start-low"],
    source: { name: "Canadian Anxiety Guidelines 2014; sertraline monograph", origin: "canmat" }
  },
  {
    id: "va_anx_panic_benzo_bridge_6",
    stem: "A patient with severe, frequent panic attacks is starting an SSRI, but you want a short-term benzodiazepine bridge for the first few weeks. You prefer an agent whose longer half-life gives smoother coverage and less inter-dose rebound anxiety. Which benzodiazepine best fits a panic bridge?",
    options: ["Clonazepam", "Alprazolam", "Lorazepam", "Oxazepam"],
    answer: "Clonazepam",
    explanation: "Clonazepam is long-acting and approved for panic disorder, giving smoother coverage with less inter-dose rebound than short-acting agents. Alprazolam and lorazepam are short-acting and prone to inter-dose rebound and dependence; oxazepam is short-acting and not used for panic bridging.",
    meds: ["clonazepam", "alprazolam", "lorazepam", "oxazepam"],
    disorder: "Panic disorder",
    difficulty: 2,
    tags: ["bridging"],
    source: { name: "Canadian Anxiety Guidelines 2014; clonazepam monograph", origin: "canmat" }
  },
  {
    id: "va_anx_panic_switch_snri_7",
    stem: "A patient with panic disorder has an inadequate response to paroxetine and you elect to switch to an SNRI that is Health Canada-approved specifically for panic disorder. Which agent qualifies?",
    options: ["Venlafaxine", "Duloxetine", "Desvenlafaxine", "Bupropion"],
    answer: "Venlafaxine",
    explanation: "Venlafaxine (XR) is approved for panic disorder and is an evidence-based next step after an SSRI. Duloxetine is approved for GAD but not panic; desvenlafaxine is approved only for MDD; bupropion is not an anxiolytic. Cross-taper and watch for early activation.",
    meds: ["venlafaxine", "duloxetine", "desvenlafaxine", "bupropion"],
    disorder: "Panic disorder",
    difficulty: 2,
    tags: ["switching", "first-line"],
    source: { name: "Canadian Anxiety Guidelines 2014; venlafaxine monograph", origin: "canmat" }
  },

  // ─────────────────────────── Obsessive-compulsive disorder ───────────────────────────
  {
    id: "va_anx_ocd_firstline_dosing_8",
    stem: "A 24-year-old with obsessive-compulsive disorder is starting pharmacotherapy. You counsel that OCD typically needs higher SSRI doses and a longer trial (10–12 weeks) than depression. Which agent is an appropriate guideline first-line SSRI for OCD?",
    options: ["Fluvoxamine", "Bupropion", "Nortriptyline", "Amitriptyline"],
    answer: "Fluvoxamine",
    explanation: "Fluvoxamine is a first-line SSRI approved for OCD; OCD requires higher doses and longer trials than MDD. Bupropion has no OCD efficacy, and TCAs other than clomipramine (e.g., nortriptyline, amitriptyline) are ineffective because they lack strong serotonergic activity.",
    meds: ["fluvoxamine", "bupropion", "nortriptyline", "amitriptyline"],
    disorder: "Obsessive-compulsive disorder",
    difficulty: 2,
    tags: ["first-line", "monitoring"],
    source: { name: "Canadian Anxiety Guidelines 2014 (OCD)", origin: "canmat" }
  },
  {
    id: "va_anx_ocd_clomipramine_9",
    stem: "A patient with obsessive-compulsive disorder has failed adequate high-dose trials of two SSRIs. You consider the one tricyclic with proven OCD efficacy, noting its dose is capped at 250 mg/day because of dose-dependent seizure risk. Which agent is it?",
    options: ["Clomipramine", "Amitriptyline", "Nortriptyline", "Desipramine"],
    answer: "Clomipramine",
    explanation: "Clomipramine is the strongly serotonergic TCA approved for OCD and effective when SSRIs fail; its ceiling of 250 mg/day is driven by dose-dependent seizure risk. The noradrenergic TCAs (amitriptyline, nortriptyline, desipramine) are not effective in OCD.",
    meds: ["clomipramine", "amitriptyline", "nortriptyline", "desipramine"],
    disorder: "Obsessive-compulsive disorder",
    difficulty: 2,
    tags: ["switching", "overdose"],
    source: { name: "Canadian Anxiety Guidelines 2014 (OCD); clomipramine monograph", origin: "canmat" }
  },
  {
    id: "va_anx_ocd_antipsychotic_aug_10",
    stem: "A patient with obsessive-compulsive disorder has only a partial response after an adequate high-dose SSRI trial plus CBT with exposure and response prevention. What is the best-evidenced pharmacologic augmentation strategy?",
    options: ["Risperidone", "Buspirone", "Lorazepam", "Mirtazapine"],
    answer: "Risperidone",
    explanation: "Low-dose antipsychotic augmentation (e.g., risperidone) is the evidence-based next step for SSRI-refractory OCD. Buspirone augmentation is not effective in OCD, benzodiazepines do not treat the core illness, and mirtazapine lacks OCD augmentation evidence.",
    meds: ["risperidone", "buspirone", "lorazepam", "mirtazapine"],
    disorder: "Obsessive-compulsive disorder",
    difficulty: 3,
    tags: ["augmentation"],
    source: { name: "Canadian Anxiety Guidelines 2014 (OCD augmentation)", origin: "canmat" }
  },

  // ──────────────────────────── Post-traumatic stress disorder ────────────────────────────
  {
    id: "va_anx_ptsd_firstline_11",
    stem: "A 40-year-old veteran with post-traumatic stress disorder is starting pharmacotherapy. Which agent is Health Canada-approved and first-line for PTSD?",
    options: ["Sertraline", "Diazepam", "Bupropion", "Alprazolam"],
    answer: "Sertraline",
    explanation: "Sertraline is approved and first-line for PTSD (SSRIs/SNRIs are the mainstay). Benzodiazepines such as diazepam and alprazolam are not recommended in PTSD—they do not treat core symptoms and may impair fear extinction—and bupropion has no PTSD efficacy.",
    meds: ["sertraline", "diazepam", "bupropion", "alprazolam"],
    disorder: "Post-traumatic stress disorder",
    difficulty: 1,
    tags: ["first-line"],
    source: { name: "Canadian Anxiety Guidelines 2014 (PTSD); sertraline monograph", origin: "canmat" }
  },
  {
    id: "va_anx_ptsd_prazosin_nightmares_12",
    stem: "A patient with post-traumatic stress disorder has good daytime improvement on paroxetine but persistent trauma-related nightmares and sleep disruption. You add a targeted agent at 1 mg at bedtime and warn about first-dose orthostatic hypotension. Which drug is this?",
    options: ["Prazosin", "Clonazepam", "Quetiapine", "Zopiclone"],
    answer: "Prazosin",
    explanation: "Prazosin, an α1-antagonist, is used off-label for PTSD nightmares, started at 1 mg at bedtime with counseling about first-dose orthostasis. Clonazepam is a benzodiazepine (avoided in PTSD), and quetiapine and zopiclone are not the targeted evidence-based choice for trauma nightmares.",
    meds: ["prazosin", "clonazepam", "quetiapine", "zopiclone"],
    disorder: "Post-traumatic stress disorder",
    difficulty: 2,
    tags: ["monitoring"],
    source: { name: "Prazosin PTSD-nightmares literature; prazosin monograph", origin: "monograph" }
  },
  {
    id: "va_anx_ptsd_avoid_benzo_13",
    stem: "A patient with post-traumatic stress disorder and prominent anxiety asks specifically for ongoing lorazepam. You explain that benzodiazepines are not recommended in PTSD (they can worsen outcomes and impair trauma processing) and instead start an approved first-line agent. Which do you choose?",
    options: ["Lorazepam", "Diazepam", "Paroxetine", "Alprazolam"],
    answer: "Paroxetine",
    explanation: "Paroxetine is approved and first-line for PTSD. Benzodiazepines (lorazepam, diazepam, alprazolam) are not recommended in PTSD—they fail to treat core symptoms, may impair fear extinction, and carry dependence and disinhibition risks.",
    meds: ["paroxetine", "lorazepam", "diazepam", "alprazolam"],
    disorder: "Post-traumatic stress disorder",
    difficulty: 2,
    tags: ["avoidance", "first-line"],
    source: { name: "Canadian Anxiety Guidelines 2014 (PTSD); paroxetine monograph", origin: "canmat" }
  },

  // ──────────────────────────────── Social anxiety disorder ────────────────────────────────
  {
    id: "va_anx_sad_generalized_firstline_14",
    stem: "A 27-year-old with generalized social anxiety disorder avoids meetings, dating, and phone calls across nearly all social situations. Which is an appropriate Health Canada-approved first-line agent for generalized social anxiety disorder?",
    options: ["Paroxetine", "Propranolol", "Bupropion", "Hydroxyzine"],
    answer: "Paroxetine",
    explanation: "Paroxetine is approved and first-line for generalized social anxiety disorder (SSRIs/SNRIs are the mainstay). Propranolol helps only performance-limited (non-generalized) SAD, bupropion has no SAD evidence, and hydroxyzine is not a first-line SAD treatment.",
    meds: ["paroxetine", "propranolol", "bupropion", "hydroxyzine"],
    disorder: "Social anxiety disorder",
    difficulty: 1,
    tags: ["first-line"],
    source: { name: "Canadian Anxiety Guidelines 2014 (SAD); paroxetine monograph", origin: "canmat" }
  },
  {
    id: "va_anx_sad_performance_betablocker_15",
    stem: "A professional violinist has intense anxiety, tremor, and palpitations only when performing on stage, with no anxiety in other social situations. She wants an as-needed agent taken shortly before performances. Which is most appropriate?",
    options: ["Propranolol", "Sertraline", "Clonazepam", "Escitalopram"],
    answer: "Propranolol",
    explanation: "Performance-only (non-generalized) social anxiety is best treated with a PRN beta-blocker such as propranolol (10–40 mg ~30–60 min before the event) to blunt autonomic symptoms. A daily SSRI is unnecessary for isolated performance anxiety, and benzodiazepines are avoided given sedation/dependence.",
    meds: ["propranolol", "sertraline", "clonazepam", "escitalopram"],
    disorder: "Social anxiety disorder",
    difficulty: 1,
    tags: ["first-line"],
    source: { name: "Canadian Anxiety Guidelines 2014 (performance anxiety); propranolol monograph", origin: "canmat" }
  },
  {
    id: "va_anx_sad_avoid_benzo_switch_16",
    stem: "A patient with generalized social anxiety disorder has been maintained on chronic clonazepam by a previous prescriber, with escalating dose and dependence concerns. You want to transition to a sustainable, approved maintenance agent while tapering the benzodiazepine. Which is the best choice?",
    options: ["Venlafaxine", "Alprazolam", "Diazepam", "Lorazepam"],
    answer: "Venlafaxine",
    explanation: "Venlafaxine (XR) is approved for social anxiety disorder and is an appropriate maintenance treatment while the benzodiazepine is slowly tapered. Switching to another benzodiazepine (alprazolam, diazepam, lorazepam) simply perpetuates dependence rather than treating the disorder.",
    meds: ["venlafaxine", "alprazolam", "diazepam", "lorazepam"],
    disorder: "Social anxiety disorder",
    difficulty: 2,
    tags: ["switching", "avoidance"],
    source: { name: "Canadian Anxiety Guidelines 2014 (SAD); venlafaxine monograph", origin: "canmat" }
  }
];
