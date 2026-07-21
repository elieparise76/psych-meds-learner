// Cross-med vignette bank — ANTIDEPRESSANT PHARMACOTHERAPY
// Board-style (Royal College / FRCPC) items. Every drug fact below is taken from data/deck.json
// (indications, doses/ceilings, metabolism, warnings, contraindications) — nothing from memory.
// Deliberately NEW angles: these do not repeat mood_anxiety.js / anxiety_spectrum.js /
// safety_toxidromes.js / special_populations_interactions.js (no first-line SSRI-vs-MAOI picks,
// no aged-cheese tyramine item, no fluvoxamine–clozapine, no paroxetine-in-pregnancy).

export default [
  {
    id: "vd_ad_mdd_tamoxifen_cyp2d6",
    stem:
      "A 52-year-old woman is taking tamoxifen after breast-cancer surgery and develops a moderate major depressive episode. Tamoxifen requires CYP2D6 activation to endoxifen, so a strong CYP2D6 inhibitor must be avoided. Which antidepressant is the most appropriate choice?",
    options: ["Escitalopram", "Paroxetine", "Fluoxetine", "Bupropion"],
    answer: "Escitalopram",
    explanation:
      "Escitalopram is metabolized mainly by CYP2C19 and causes minimal CYP inhibition, so it does not meaningfully impair tamoxifen activation. Paroxetine is a potent CYP2D6 inhibitor explicitly flagged as an avoid-with-tamoxifen combination, fluoxetine is likewise a potent 2D6 inhibitor, and bupropion (with its hydroxybupropion metabolite) is also a potent 2D6 inhibitor that lowers tamoxifen activation.",
    meds: ["escitalopram", "paroxetine", "fluoxetine", "bupropion"],
    disorder: "Major depressive disorder",
    difficulty: 3,
    tags: ["interaction", "cyp2d6", "oncology"],
    source: { name: "Product monographs — CYP2D6 inhibition (paroxetine, fluoxetine, bupropion)", origin: "openfda" }
  },

  {
    id: "vd_ad_mdd_adjunct_aripiprazole",
    stem:
      "A 44-year-old with major depressive disorder has only a partial response after 8 weeks of escitalopram 20 mg/day with confirmed adherence. You elect to augment rather than switch. Which agent carries a Health Canada indication for adjunctive treatment of major depressive disorder?",
    options: ["Aripiprazole", "Haloperidol", "Loxapine", "Chlorpromazine"],
    answer: "Aripiprazole",
    explanation:
      "Aripiprazole is approved in Canada as adjunctive treatment of MDD and is used at low adjunct doses (2–5 mg/day); counsel about akathisia and about impulse-control urges (gambling, hypersexuality, compulsive shopping/eating). Haloperidol, loxapine and chlorpromazine are first-generation antipsychotics with no adjunctive MDD indication and greater EPS, sedation and anticholinergic burden.",
    meds: ["aripiprazole", "escitalopram", "haloperidol", "loxapine", "chlorpromazine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["augmentation", "canmat"],
    source: { name: "Health Canada indication — aripiprazole adjunctive MDD; CANMAT 2016 MDD", origin: "canmat" }
  },

  {
    id: "vd_ad_mdd_sexual_dysfunction_switch",
    stem:
      "A 34-year-old man is in remission from major depression on sertraline but has distressing anorgasmia and low libido and wants to switch. He has a history of bulimia nervosa, so bupropion is contraindicated. Which switch best preserves antidepressant efficacy with a lower rate of sexual dysfunction?",
    options: ["Vortioxetine", "Paroxetine", "Venlafaxine", "Fluvoxamine"],
    answer: "Vortioxetine",
    explanation:
      "Vortioxetine is a multimodal serotonergic agent approved for MDD whose rate of sexual dysfunction is lower than that of the SSRIs (its dominant, dose-dependent side effect is nausea). Paroxetine has the most sexual dysfunction of the SSRIs, and venlafaxine and fluvoxamine both list sexual dysfunction as a common effect; bupropion — normally the classic answer here — is excluded because it is contraindicated in bulimia/anorexia given its seizure risk.",
    meds: ["vortioxetine", "sertraline", "paroxetine", "venlafaxine", "fluvoxamine", "bupropion"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["sexual-dysfunction", "tolerability", "switching"],
    source: { name: "Vortioxetine and bupropion product monographs; CANMAT 2016 MDD", origin: "monograph" }
  },

  {
    id: "vd_ad_mdd_discontinuation_syndrome",
    stem:
      "A patient who ran out of his antidepressant 48 hours ago presents with dizziness, nausea, irritability, flu-like malaise and electric-shock “brain zaps”. Which of the following agents is the most likely culprit?",
    options: ["Paroxetine", "Fluoxetine", "Vortioxetine", "Mirtazapine"],
    answer: "Paroxetine",
    explanation:
      "Paroxetine has the worst discontinuation syndrome of the SSRIs: a roughly 21-hour half-life with no clinically significant active metabolite, so levels fall abruptly — always taper slowly. Fluoxetine is effectively self-tapering (norfluoxetine 7–15 days), vortioxetine's ~66-hour half-life makes discontinuation mild, and mirtazapine discontinuation is generally mild as well.",
    meds: ["paroxetine", "fluoxetine", "vortioxetine", "mirtazapine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["discontinuation", "half-life"],
    source: { name: "Paroxetine and fluoxetine product monographs — half-life and discontinuation", origin: "openfda" }
  },

  {
    id: "vd_ad_mdd_elderly_recurrent_hyponatremia",
    stem:
      "An 81-year-old woman developed symptomatic hyponatremia (Na 122 mmol/L) three weeks after starting citalopram; it resolved on stopping the drug, and a later trial of venlafaxine reproduced it. Her depression has now relapsed and she needs pharmacotherapy. Which antidepressant is least likely to cause SIADH/hyponatremia?",
    options: ["Bupropion", "Escitalopram", "Duloxetine", "Mirtazapine"],
    answer: "Bupropion",
    explanation:
      "Antidepressant-associated SIADH is essentially a serotonergic class effect, and older women are the highest-risk group; bupropion is a noradrenergic-dopaminergic agent with no direct serotonergic activity and hyponatremia is not among its listed serious adverse effects. Escitalopram, duloxetine and mirtazapine all carry hyponatremia/SIADH warnings and would risk repeating the event.",
    meds: ["bupropion", "citalopram", "venlafaxine", "escitalopram", "duloxetine", "mirtazapine"],
    disorder: "Major depressive disorder",
    difficulty: 3,
    tags: ["hyponatremia", "elderly", "monitoring"],
    source: { name: "SSRI/SNRI product monographs — hyponatremia/SIADH warnings", origin: "openfda" }
  },

  {
    id: "vd_ad_gad_hepatic_avoid_duloxetine",
    stem:
      "A 49-year-old man with generalized anxiety disorder drinks 6–8 standard drinks daily and has ALT and AST at three times the upper limit of normal. Which agent should be AVOIDED in this setting?",
    options: ["Duloxetine", "Escitalopram", "Buspirone", "Pregabalin"],
    answer: "Duloxetine",
    explanation:
      "Despite its Canadian GAD indication, duloxetine carries a hepatotoxicity warning and is specifically avoided in hepatic impairment or substantial alcohol use. Escitalopram remains usable with a reduced ceiling (10 mg/day in hepatic impairment), buspirone is a non-dependence-forming GAD option, and pregabalin is renally cleared with no CYP metabolism — all far safer for this liver.",
    meds: ["duloxetine", "escitalopram", "buspirone", "pregabalin"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["hepatic", "contraindication", "alcohol"],
    source: { name: "Duloxetine product monograph — hepatotoxicity warning", origin: "openfda" }
  },

  {
    id: "vd_ad_gad_bp_monitoring_titration",
    stem:
      "A 45-year-old with generalized anxiety disorder and borderline hypertension is having her medication titrated upward. Which of the following requires a blood-pressure check at every dose increase because its noradrenergic effect — and a sustained diastolic rise — emerges above roughly 150 mg/day?",
    options: ["Venlafaxine", "Sertraline", "Buspirone", "Mirtazapine"],
    answer: "Venlafaxine",
    explanation:
      "Venlafaxine is serotonergic at low doses but becomes noradrenergic above about 150 mg/day, which is when dose-dependent hypertension appears; check BP at each increase and use caution in uncontrolled hypertension. Sertraline and buspirone do not raise blood pressure, and mirtazapine's problems are sedation, appetite/weight gain and lipids rather than hypertension.",
    meds: ["venlafaxine", "sertraline", "buspirone", "mirtazapine"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["monitoring", "cardiac", "dosing"],
    source: { name: "Venlafaxine product monograph — dose-dependent hypertension", origin: "openfda" }
  },

  {
    id: "vd_ad_panic_propranolol_asthma",
    stem:
      "A 33-year-old woman with panic disorder and moderate persistent asthma (on regular inhaled salbutamol) read that a beta-blocker abolishes palpitations and asks to be prescribed one. Which of the following agents is contraindicated for her?",
    options: ["Propranolol", "Sertraline", "Escitalopram", "Clonazepam"],
    answer: "Propranolol",
    explanation:
      "Propranolol is non-selective and formally contraindicated in bronchial asthma — it can precipitate bronchospasm and antagonizes her β2-agonist — and in any case it has no role in maintenance treatment of panic disorder (its niche is akathisia, tremor and situational performance anxiety). Sertraline is Health Canada-approved for panic disorder, escitalopram is used off-label, and short-course clonazepam is an approved bridging option.",
    meds: ["propranolol", "sertraline", "escitalopram", "clonazepam"],
    disorder: "Panic disorder",
    difficulty: 2,
    tags: ["contraindication", "respiratory"],
    source: { name: "Propranolol label — contraindicated in bronchial asthma", origin: "openfda" }
  },

  {
    id: "vd_ad_ocd_dose_ceiling_seizure",
    stem:
      "A 31-year-old with severe OCD has only a partial response after 12 weeks and asks whether her dose can be pushed higher. Which of the following cannot be titrated beyond 250 mg/day because of dose-dependent seizure risk, and also carries by far the highest overdose lethality of the four?",
    options: ["Clomipramine", "Fluvoxamine", "Sertraline", "Escitalopram"],
    answer: "Clomipramine",
    explanation:
      "Clomipramine's 250 mg/day ceiling exists because it has the greatest dose-dependent seizure risk of the TCAs, and TCA overdose is potentially lethal through sodium-channel blockade (wide QRS, arrhythmia, coma) — a serious consideration in OCD, which often needs high-dose therapy. The SSRIs are capped for unrelated reasons (fluvoxamine 300 mg/day, sertraline 200 mg/day, escitalopram 20 mg/day) and are comparatively safe in overdose.",
    meds: ["clomipramine", "fluvoxamine", "sertraline", "escitalopram"],
    disorder: "Obsessive-compulsive disorder",
    difficulty: 3,
    tags: ["dosing", "seizure", "overdose"],
    source: { name: "Clomipramine product monograph — 250 mg/day ceiling, seizure and overdose risk", origin: "openfda" }
  },

  {
    id: "vd_ad_ptsd_sleep_onset_adjunct",
    stem:
      "A 38-year-old man with PTSD on sertraline 150 mg/day has good daytime improvement and no nightmares, but persistent difficulty initiating sleep. He has alcohol use disorder in sustained remission. Which adjunct is most appropriate?",
    options: ["Trazodone", "Zopiclone", "Lorazepam", "Prazosin"],
    answer: "Trazodone",
    explanation:
      "Low-dose trazodone is the usual non-dependence-forming sedating adjunct for sleep-onset insomnia alongside an SSRI; counsel men about priapism as a urologic emergency and watch orthostatic hypotension. Zopiclone and lorazepam are dependence-forming and best avoided given his substance-use history, and prazosin targets trauma nightmares — which this patient does not have.",
    meds: ["trazodone", "sertraline", "zopiclone", "lorazepam", "prazosin"],
    disorder: "Post-traumatic stress disorder",
    difficulty: 2,
    tags: ["insomnia", "adjunct", "substance-use"],
    source: { name: "Trazodone, zopiclone and prazosin product monographs; Canadian PTSD practice", origin: "monograph" }
  },

  {
    id: "vd_ad_sad_rima_moclobemide",
    stem:
      "A 30-year-old with generalized social anxiety disorder has failed adequate trials of paroxetine and then venlafaxine. Which agent carries a Health Canada indication for social anxiety disorder and, being a reversible MAO-A inhibitor, does not require a strict low-tyramine diet?",
    options: ["Moclobemide", "Phenelzine", "Selegiline", "Amitriptyline"],
    answer: "Moclobemide",
    explanation:
      "Moclobemide is a RIMA approved in Canada for both MDD and social anxiety disorder; because tyramine can displace it from MAO-A, no strict diet is required — but its serotonin-syndrome contraindications are unchanged, so allow a washout (about a week after venlafaxine, five weeks after fluoxetine) before starting it. Phenelzine has social-anxiety evidence but is irreversible and mandates a strict tyramine diet with a 14-day washout, selegiline is approved in Canada only for Parkinson's disease, and amitriptyline has no social-anxiety role.",
    meds: ["moclobemide", "phenelzine", "selegiline", "amitriptyline", "paroxetine", "venlafaxine"],
    disorder: "Social anxiety disorder",
    difficulty: 3,
    tags: ["maoi", "rima", "washout"],
    source: { name: "Moclobemide (Manerix) Canadian monograph — SAD indication, reversible MAO-A inhibition", origin: "monograph" }
  },

  {
    id: "vd_ad_ss_linezolid_ssri",
    stem:
      "A 58-year-old maintained on escitalopram is admitted with MRSA bacteremia and started on linezolid. Thirty-six hours later he is agitated and diaphoretic with a temperature of 38.6°C, dilated pupils, brisk reflexes and inducible clonus that is far more marked in the legs than the arms. What is the most likely diagnosis?",
    options: [
      "Serotonin syndrome",
      "Neuroleptic malignant syndrome",
      "Hypertensive crisis (tyramine reaction)",
      "Anticholinergic toxicity"
    ],
    answer: "Serotonin syndrome",
    explanation:
      "Linezolid is a monoamine oxidase inhibitor and SSRI labels list it as a contraindicated combination; onset within hours to a day with clonus, hyperreflexia, mydriasis and lower-limb predominance is classic serotonin toxicity — stop the serotonergic agents and give supportive care with benzodiazepines. NMS evolves over days after dopamine blockade with lead-pipe rigidity and hyporeflexia, a tyramine reaction requires an MAOI plus a tyramine load and causes hypertension without clonus, and anticholinergic toxicity gives dry flushed skin, absent bowel sounds and normal reflexes.",
    meds: ["escitalopram"],
    disorder: "Serotonin syndrome",
    difficulty: 2,
    tags: ["serotonin", "interaction"],
    source: { name: "SSRI product monographs — linezolid/MAOI contraindication", origin: "openfda" }
  },

  {
    id: "vd_ad_maoi_sympathomimetic_crisis",
    stem:
      "A 46-year-old on tranylcypromine for treatment-resistant depression takes an over-the-counter cold remedy containing pseudoephedrine. Within an hour he has a pounding occipital headache, neck stiffness, palpitations and a blood pressure of 220/125 mmHg. He is alert and oriented, with no rigidity and no clonus. What is the most likely diagnosis?",
    options: [
      "Hypertensive crisis (MAOI–sympathomimetic reaction)",
      "Serotonin syndrome",
      "Neuroleptic malignant syndrome",
      "Anticholinergic toxicity"
    ],
    answer: "Hypertensive crisis (MAOI–sympathomimetic reaction)",
    explanation:
      "Irreversible MAOIs prevent breakdown of indirect sympathomimetics such as pseudoephedrine, producing the same adrenergic crisis as a tyramine load — occipital headache, severe hypertension and palpitations, with a risk of intracranial hemorrhage; patients on tranylcypromine or phenelzine must avoid all decongestants, and the restriction persists about two weeks after stopping. Serotonin syndrome requires a serotonergic co-ingestant and shows clonus and hyperreflexia, NMS follows dopamine blockade with rigidity and fever over days, and anticholinergic toxicity causes delirium with dry flushed skin rather than this degree of hypertension.",
    meds: ["tranylcypromine"],
    disorder: "Hypertensive crisis (tyramine reaction)",
    difficulty: 3,
    tags: ["maoi", "hypertensive-crisis", "interaction"],
    source: { name: "Tranylcypromine label — sympathomimetics and hypertensive crisis", origin: "openfda" }
  }
];
