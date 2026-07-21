// Cross-cutting FRCPC safety vignettes: toxidrome/syndrome recognition, dangerous
// drug interactions, overdose lethality, pregnancy teratogenicity, and key monitoring.
// Drug facts (levels, thresholds, interactions, teratogenicity) are grounded in data/deck.json.
// Syndrome-recognition items use syndromes as options; others use real deck generics.

export default [
  // ————————————————————————————————————————————————————————————————
  // RECOGNISE THE TOXIDROME / SYNDROME (options are syndromes)
  // ————————————————————————————————————————————————————————————————
  {
    id: "vt_recognise_serotonin_syndrome_1",
    stem: "A 40-year-old on sertraline for depression is given tramadol for back pain. Over ~12 hours he develops agitation, diaphoresis, tachycardia, hyperthermia, and — on exam — inducible lower-limb clonus and hyperreflexia worse in the legs. Most likely syndrome?",
    options: ["Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity", "Lithium toxicity"],
    answer: "Serotonin syndrome",
    explanation: "Rapid onset (hours) with NEUROMUSCULAR EXCITABILITY — clonus and hyperreflexia, lower-limb predominant — after adding a second serotonergic (tramadol to an SSRI) is the signature of serotonin syndrome. NMS instead evolves over days with lead-pipe rigidity and hyporeflexia; anticholinergic toxicity gives dry skin and normal reflexes; lithium toxicity gives a coarse tremor and ataxia, not clonus.",
    meds: ["sertraline"],
    disorder: "Serotonin syndrome",
    difficulty: 2,
    tags: ["serotonin", "interaction"],
    source: { name: "FRCPC toxidrome recognition (Hunter criteria)", origin: "authored" }
  },
  {
    id: "vt_recognise_nms_1",
    stem: "A 28-year-old admitted with mania is started on haloperidol. Four days later he is febrile (39.5°C), profoundly diaphoretic, with generalised 'lead-pipe' rigidity, hyporeflexia, fluctuating consciousness, labile blood pressure, and CK 6000. Most likely syndrome?",
    options: ["Neuroleptic malignant syndrome", "Serotonin syndrome", "Anticholinergic toxicity", "Hypertensive crisis (tyramine reaction)"],
    answer: "Neuroleptic malignant syndrome",
    explanation: "Sub-acute onset (days) after a dopamine antagonist, with lead-pipe rigidity, HYPOreflexia, hyperthermia, autonomic instability, and markedly elevated CK, defines NMS. Serotonin syndrome is faster and features clonus/hyperreflexia rather than hyporeflexia; anticholinergic toxicity lacks rigidity and CK rise; a tyramine reaction is an acute hypertensive event without rigidity.",
    meds: ["haloperidol"],
    disorder: "Neuroleptic malignant syndrome",
    difficulty: 2,
    tags: ["nms"],
    source: { name: "FRCPC toxidrome recognition", origin: "authored" }
  },
  {
    id: "vt_ss_vs_nms_discriminator_1",
    stem: "A patient stabilised on olanzapine has sertraline added 2 days ago and now presents with hyperthermia, agitation, tremor, and — critically — spontaneous ocular clonus and brisk hyperreflexia rather than rigidity. Which single exam finding best distinguishes his diagnosis from neuroleptic malignant syndrome?",
    options: ["Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity", "Lithium toxicity"],
    answer: "Serotonin syndrome",
    explanation: "Clonus and hyperreflexia point to serotonin syndrome (here precipitated by the newly added serotonergic), whereas NMS produces lead-pipe RIGIDITY with hyporeflexia. Onset also helps: serotonin syndrome is hours, NMS is days. The distinction drives management — cyproheptadine and stopping serotonergics versus dantrolene/bromocriptine and stopping the antipsychotic.",
    meds: ["sertraline", "olanzapine"],
    disorder: "Serotonin syndrome",
    difficulty: 3,
    tags: ["serotonin", "nms", "interaction"],
    source: { name: "FRCPC toxidrome discriminator", origin: "authored" }
  },
  {
    id: "vt_recognise_anticholinergic_toxidrome_1",
    stem: "A 19-year-old is brought in after ingesting a bottle of amitriptyline. She is delirious and agitated with dilated pupils, dry flushed skin, absent bowel sounds, urinary retention, and tachycardia; the ECG shows a widening QRS. Which toxidrome best explains the peripheral findings?",
    options: ["Anticholinergic toxicity", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Lithium toxicity"],
    answer: "Anticholinergic toxicity",
    explanation: "The classic anticholinergic toxidrome — 'mad, blind, dry, red, hot, and full' (delirium, mydriasis, dry/flushed skin, ileus, urinary retention, hyperthermia) — is prominent in TCA overdose. Note the co-existing life-threat: Na-channel-blockade cardiotoxicity (wide QRS) is what actually kills in amitriptyline overdose and is treated with IV sodium bicarbonate for QRS >100 ms.",
    meds: ["amitriptyline"],
    disorder: "Anticholinergic toxicity",
    difficulty: 2,
    tags: ["overdose"],
    source: { name: "Amitriptyline monograph — overdose", origin: "monograph" }
  },
  {
    id: "vt_recognise_lithium_toxicity_1",
    stem: "A 55-year-old on long-term lithium for bipolar I develops a coarse tremor, unsteady gait, slurred speech, and confusion over several days. Her GP recently started hydrochlorothiazide for hypertension. Most likely syndrome?",
    options: ["Lithium toxicity", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity"],
    answer: "Lithium toxicity",
    explanation: "Coarse tremor, ataxia, dysarthria, and confusion are hallmark lithium toxicity; a thiazide (like NSAIDs and ACEi/ARBs) reduces renal lithium clearance and raises the level. Toxicity begins around >1.5 mmol/L and is severe >2.0; hemodialysis is indicated for levels >4, or >2.5 with symptoms/renal failure.",
    meds: ["lithium"],
    disorder: "Lithium toxicity",
    difficulty: 2,
    tags: ["interaction", "monitoring"],
    source: { name: "Lithium monograph — toxicity/DDI", origin: "monograph" }
  },
  {
    id: "vt_recognise_tyramine_crisis_1",
    stem: "A 47-year-old on phenelzine for treatment-resistant depression eats aged cheddar and cured salami at a party and within an hour develops a severe pounding occipital headache, blood pressure 220/125, palpitations, and neck stiffness. Most likely syndrome?",
    options: ["Hypertensive crisis (tyramine reaction)", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Lithium toxicity"],
    answer: "Hypertensive crisis (tyramine reaction)",
    explanation: "MAO inhibition prevents breakdown of dietary tyramine, causing a surge of norepinephrine release — the tyramine 'cheese reaction' with abrupt occipital headache and dangerous hypertension. It requires a strict low-tyramine diet (avoid aged cheese, cured/fermented meats, fermented soy, tap beer, and yeast extracts). It is a pressor crisis, not the neuromuscular picture of serotonin syndrome.",
    meds: ["phenelzine"],
    disorder: "Hypertensive crisis (tyramine reaction)",
    difficulty: 2,
    tags: ["interaction"],
    source: { name: "Phenelzine monograph — tyramine reaction", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // DANGEROUS DRUG INTERACTIONS
  // ————————————————————————————————————————————————————————————————
  {
    id: "vt_ddi_fluvoxamine_clozapine_1a2_1",
    stem: "A patient stable on clozapine for treatment-resistant schizophrenia develops comorbid OCD and needs an SSRI. Which SSRI is the most dangerous to add because it will sharply raise the clozapine level and risk seizures/toxicity?",
    options: ["Fluvoxamine", "Sertraline", "Escitalopram", "Citalopram"],
    answer: "Fluvoxamine",
    explanation: "Fluvoxamine is a potent CYP1A2 inhibitor and clozapine is a 1A2 substrate, so co-prescription can multiply clozapine levels and precipitate seizures, sedation, and cardiotoxicity. Sertraline, escitalopram, or citalopram are far safer 1A2-sparing choices. (The same 1A2 axis explains why stopping smoking also raises clozapine levels.)",
    meds: ["fluvoxamine", "clozapine", "sertraline", "escitalopram"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["interaction"],
    source: { name: "Fluvoxamine/clozapine monograph — CYP1A2", origin: "monograph" }
  },
  {
    id: "vt_ddi_maoi_meperidine_1",
    stem: "A 50-year-old maintained on phenelzine needs post-operative analgesia. The surgical team orders meperidine (pethidine). Shortly after the dose she becomes hyperthermic and agitated with clonus and rigidity. What syndrome has the MAOI + meperidine combination precipitated?",
    options: ["Serotonin syndrome", "Anticholinergic toxicity", "Neuroleptic malignant syndrome", "Hypertensive crisis (tyramine reaction)"],
    answer: "Serotonin syndrome",
    explanation: "Meperidine has serotonergic activity and is explicitly contraindicated with MAOIs — the combination can cause fatal serotonin syndrome. This is a classic 'never' interaction: MAOIs must be kept away from meperidine, SSRIs/SNRIs/TCAs, tramadol, dextromethorphan, and linezolid, with a 14-day washout each way (5 weeks after fluoxetine).",
    meds: ["phenelzine"],
    disorder: "Serotonin syndrome",
    difficulty: 2,
    tags: ["serotonin", "interaction"],
    source: { name: "Phenelzine monograph — contraindicated combos", origin: "monograph" }
  },
  {
    id: "vt_ddi_valproate_lamotrigine_1",
    stem: "A patient on lamotrigine maintenance for bipolar II is about to have a mood stabilizer added. Which agent roughly DOUBLES the lamotrigine level by inhibiting its glucuronidation, mandating that the lamotrigine dose be halved to reduce serious-rash risk?",
    options: ["Valproate", "Carbamazepine", "Lithium", "Gabapentin"],
    answer: "Valproate",
    explanation: "Valproate inhibits lamotrigine glucuronidation and roughly doubles its level, sharply increasing the risk of Stevens–Johnson syndrome/TEN — so the lamotrigine dose is halved and titrated even more slowly. Carbamazepine does the opposite (induces glucuronidation and LOWERS lamotrigine); lithium and gabapentin do not have this pharmacokinetic interaction.",
    meds: ["valproate", "lamotrigine", "carbamazepine", "lithium"],
    disorder: "Bipolar II disorder",
    difficulty: 2,
    tags: ["interaction"],
    source: { name: "Lamotrigine/valproate monograph — DDI", origin: "monograph" }
  },
  {
    id: "vt_ddi_carbamazepine_ocp_1",
    stem: "A 24-year-old woman with bipolar disorder using a combined oral contraceptive is started on a mood stabilizer, and three months later presents pregnant despite perfect pill adherence. Which drug most likely caused contraceptive failure through enzyme induction?",
    options: ["Carbamazepine", "Valproate", "Lamotrigine", "Lithium"],
    answer: "Carbamazepine",
    explanation: "Carbamazepine is a strong CYP3A4 inducer and lowers estrogen/progestin levels, causing oral-contraceptive failure — a non-hormonal or higher-dose method is required. Valproate, lamotrigine, and lithium do not induce the pill's metabolism (indeed the estrogen in the pill LOWERS lamotrigine levels, the reverse direction).",
    meds: ["carbamazepine", "valproate", "lamotrigine", "lithium"],
    disorder: "Bipolar disorder",
    difficulty: 2,
    tags: ["interaction"],
    source: { name: "Carbamazepine monograph — 3A4 induction", origin: "monograph" }
  },
  {
    id: "vt_ddi_carbamazepine_autoinduction_1",
    stem: "A man started on carbamazepine has a therapeutic level at week 1, but by week 4 — on the same dose, with good adherence — his level has fallen below range and seizures/mood symptoms return. Which property of carbamazepine explains this, requiring a level recheck at ~2–4 weeks?",
    options: ["Carbamazepine", "Valproate", "Lamotrigine", "Lithium"],
    answer: "Carbamazepine",
    explanation: "Carbamazepine AUTO-induces its own CYP3A4 metabolism over the first weeks, so a level that was therapeutic can drop despite a stable dose — hence the standard recheck at ~2–4 weeks with dose adjustment. Valproate, lamotrigine, and lithium do not autoinduce in this way.",
    meds: ["carbamazepine", "valproate", "lamotrigine", "lithium"],
    disorder: "Bipolar disorder",
    difficulty: 2,
    tags: ["interaction", "monitoring"],
    source: { name: "Carbamazepine monograph — autoinduction", origin: "monograph" }
  },
  {
    id: "vt_ddi_clozapine_carbamazepine_1",
    stem: "A patient on clozapine develops trigeminal neuralgia and a consultant suggests a mood stabilizer/anticonvulsant. Which agent is specifically CONTRAINDICATED to combine with clozapine because of additive bone-marrow suppression and agranulocytosis risk?",
    options: ["Carbamazepine", "Valproate", "Lithium", "Lamotrigine"],
    answer: "Carbamazepine",
    explanation: "Carbamazepine can itself cause agranulocytosis/aplastic anemia, so combining it with clozapine (already registry-monitored for neutropenia) is contraindicated — the marrow-suppression risk is additive, compounded by enzyme induction. Valproate, lithium (which can even raise the neutrophil count), or lamotrigine are used instead when a mood stabilizer is needed.",
    meds: ["carbamazepine", "clozapine", "valproate", "lithium"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["agranulocytosis", "interaction"],
    source: { name: "Clozapine monograph — contraindicated combos", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // OVERDOSE LETHALITY (which overdose is most dangerous?)
  // ————————————————————————————————————————————————————————————————
  {
    id: "vt_overdose_most_lethal_tca_1",
    stem: "Four patients each ingest a two-week supply of their antidepressant. Which agent carries the HIGHEST risk of a fatal overdose from wide-QRS ventricular arrhythmia, seizures, and coma?",
    options: ["Amitriptyline", "Sertraline", "Escitalopram", "Fluoxetine"],
    answer: "Amitriptyline",
    explanation: "TCAs like amitriptyline are among the most lethal antidepressants in overdose: sodium-channel blockade causes QRS widening and ventricular arrhythmia plus the 'three C's' (coma, convulsions, cardiotoxicity) and severe anticholinergic toxicity — treated with IV sodium bicarbonate. SSRIs (sertraline, escitalopram, fluoxetine) are comparatively safe in overdose, which is a major reason they are first-line.",
    meds: ["amitriptyline", "sertraline", "escitalopram", "fluoxetine"],
    disorder: "Major depressive disorder",
    difficulty: 1,
    tags: ["overdose"],
    source: { name: "TCA vs SSRI overdose lethality", origin: "authored" }
  },
  {
    id: "vt_overdose_maoi_vs_ssri_1",
    stem: "A patient with treatment-resistant depression asks which of her possible antidepressants would be the most dangerous in overdose because of delayed (up to 12–24 h) hyperthermia, autonomic collapse, and a narrow margin. Which one?",
    options: ["Phenelzine", "Fluoxetine", "Sertraline", "Escitalopram"],
    answer: "Phenelzine",
    explanation: "MAOI overdose (phenelzine) is dangerous and often DELAYED — agitation, hyperthermia, autonomic instability, and cardiovascular collapse can appear 12–24 h later, so a reassuring early picture is deceptive. This high lethality (shared with TCAs) contrasts sharply with the relative safety of SSRIs such as fluoxetine, sertraline, or escitalopram.",
    meds: ["phenelzine", "fluoxetine", "sertraline", "escitalopram"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["overdose"],
    source: { name: "Phenelzine monograph — overdose", origin: "monograph" }
  },
  {
    id: "vt_overdose_barbiturate_vs_benzo_1",
    stem: "A patient co-ingests a sedative and presents with profound respiratory depression and coma. Which sedative-hypnotic has NO ceiling effect and the highest overdose lethality, is NOT reversed by flumazenil, and requires airway support and urinary alkalinization?",
    options: ["Phenobarbital", "Lorazepam", "Diazepam", "Zopiclone"],
    answer: "Phenobarbital",
    explanation: "Barbiturates like phenobarbital have a narrow therapeutic index and no ceiling on CNS/respiratory depression, historically a common lethal overdose; management is supportive with multi-dose charcoal and urinary alkalinization, and flumazenil does NOT reverse them. This is the key contrast with benzodiazepines (lorazepam, diazepam) and z-drugs (zopiclone), which are far safer taken alone.",
    meds: ["phenobarbital", "lorazepam", "diazepam", "zopiclone"],
    disorder: "Insomnia",
    difficulty: 2,
    tags: ["overdose"],
    source: { name: "Phenobarbital monograph — overdose", origin: "monograph" }
  },
  {
    id: "vt_overdose_lithium_dialysis_1",
    stem: "A patient with a very narrow-therapeutic-index psychotropic presents obtunded after an overdose; the toxicology team is considering hemodialysis. For which of these is overdose a medical emergency with hemodialysis indicated at a serum level >4 (or >2.5 with symptoms/renal failure)?",
    options: ["Lithium", "Sertraline", "Lamotrigine", "Quetiapine"],
    answer: "Lithium",
    explanation: "Lithium has a narrow therapeutic index and its overdose is a medical emergency; hemodialysis is used for severe intoxication (level >4, or >2.5 with symptoms/renal failure) because dialysis efficiently clears the small ion. Sertraline, lamotrigine, and quetiapine overdoses are managed supportively and rarely require dialysis.",
    meds: ["lithium", "sertraline", "lamotrigine", "quetiapine"],
    disorder: "Lithium toxicity",
    difficulty: 2,
    tags: ["overdose", "monitoring"],
    source: { name: "Lithium monograph — overdose/dialysis", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // PREGNANCY TERATOGENICITY
  // ————————————————————————————————————————————————————————————————
  {
    id: "vt_pregnancy_valproate_avoid_1",
    stem: "A 27-year-old woman with bipolar I who plans to conceive is on a mood stabilizer. Which agent is the MOST teratogenic — causing neural-tube defects, the lowest childhood IQ, and increased autism — and should be avoided in people who can become pregnant?",
    options: ["Valproate", "Lamotrigine", "Lithium", "Carbamazepine"],
    answer: "Valproate",
    explanation: "Valproate is the most teratogenic mood stabilizer: neural-tube defects (spina bifida), craniofacial/cardiac malformations, and dose-dependent neurodevelopmental harm (lowest IQ, increased autism). Carbamazepine also causes neural-tube defects but less severely overall; lamotrigine is a comparatively safer maintenance option, and lithium's main risk is the (lower-than-historically-taught) cardiac malformation.",
    meds: ["valproate", "lamotrigine", "lithium", "carbamazepine"],
    disorder: "Bipolar I disorder",
    difficulty: 1,
    tags: ["pregnancy"],
    source: { name: "Valproate monograph — teratogenicity", origin: "monograph" }
  },
  {
    id: "vt_pregnancy_lithium_ebstein_1",
    stem: "A woman conceives while on maintenance therapy for bipolar disorder. First-trimester exposure to which agent is classically associated with Ebstein anomaly (a tricuspid-valve malformation), warranting fetal echocardiography?",
    options: ["Lithium", "Lamotrigine", "Sertraline", "Bupropion"],
    answer: "Lithium",
    explanation: "First-trimester lithium is linked to Ebstein anomaly (tricuspid malformation), though the absolute risk is lower than historically taught; if continued, monitor levels closely (clearance rises in pregnancy then falls abruptly at delivery) and arrange fetal echocardiography. Lamotrigine, sertraline, and bupropion do not carry the Ebstein association.",
    meds: ["lithium", "lamotrigine", "sertraline", "bupropion"],
    disorder: "Bipolar disorder",
    difficulty: 2,
    tags: ["pregnancy"],
    source: { name: "Lithium monograph — pregnancy", origin: "monograph" }
  },
  {
    id: "vt_pregnancy_safest_stabilizer_1",
    stem: "A pregnant woman with bipolar II needs mood-stabilizer maintenance. Which agent has the most reassuring reproductive-safety profile (no consistent major teratogenic signal) and is often preferred, keeping in mind that its levels fall in pregnancy and must be reduced postpartum?",
    options: ["Lamotrigine", "Valproate", "Carbamazepine", "Lithium"],
    answer: "Lamotrigine",
    explanation: "Lamotrigine is comparatively pregnancy-safer with no consistent major teratogenic signal and is often the preferred maintenance stabilizer; its levels fall markedly during pregnancy (may need dose increases) and must be reduced postpartum to avoid toxicity. Valproate and carbamazepine cause neural-tube defects, and lithium carries the Ebstein risk.",
    meds: ["lamotrigine", "valproate", "carbamazepine", "lithium"],
    disorder: "Bipolar II disorder",
    difficulty: 2,
    tags: ["pregnancy"],
    source: { name: "Lamotrigine monograph — pregnancy", origin: "monograph" }
  },
  {
    id: "vt_pregnancy_paroxetine_avoid_1",
    stem: "A woman planning pregnancy needs an antidepressant for recurrent MDD. Which SSRI is generally AVOIDED in the first trimester because of an association with fetal cardiac malformations (e.g., septal defects)?",
    options: ["Paroxetine", "Sertraline", "Escitalopram", "Fluoxetine"],
    answer: "Paroxetine",
    explanation: "Paroxetine has been associated with cardiac malformations (e.g., septal defects) and is generally avoided in pregnancy when alternatives exist. Sertraline is a common perinatal first choice; escitalopram and fluoxetine are also reasonable — reflecting CANMAT perinatal guidance to prefer better-studied, lower-risk SSRIs.",
    meds: ["paroxetine", "sertraline", "escitalopram", "fluoxetine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["pregnancy"],
    source: { name: "CANMAT perinatal 2024 / paroxetine monograph", origin: "canmat" }
  },

  // ————————————————————————————————————————————————————————————————
  // KEY MONITORING
  // ————————————————————————————————————————————————————————————————
  {
    id: "vt_monitor_clozapine_anc_1",
    stem: "Which antipsychotic requires mandatory, registry-enforced absolute neutrophil count monitoring — weekly for the first 6 months, then every 2 weeks to 12 months, then every 4 weeks — with discontinuation (and generally no rechallenge) if the ANC falls below 0.5 ×10⁹/L?",
    options: ["Clozapine", "Olanzapine", "Risperidone", "Quetiapine"],
    answer: "Clozapine",
    explanation: "Only clozapine carries a mandatory ANC-monitoring registry because of its risk of agranulocytosis: weekly ×6 months, then q2 weeks to 12 months, then q4 weeks; severe neutropenia (ANC <0.5 ×10⁹/L) means discontinue and generally do not rechallenge. Olanzapine, risperidone, and quetiapine have no such hematologic monitoring requirement.",
    meds: ["clozapine", "olanzapine", "risperidone", "quetiapine"],
    disorder: "Schizophrenia",
    difficulty: 1,
    tags: ["agranulocytosis", "monitoring"],
    source: { name: "Clozapine monograph — ANC monitoring", origin: "monograph" }
  },
  {
    id: "vt_monitor_citalopram_qt_1",
    stem: "Which SSRI carries a dose-dependent QT-prolongation warning with a maximum-dose ceiling of 40 mg/day (20 mg/day in the elderly or hepatic impairment / CYP2C19 poor metabolizers), and the most QT risk in overdose?",
    options: ["Citalopram", "Sertraline", "Fluoxetine", "Paroxetine"],
    answer: "Citalopram",
    explanation: "Citalopram has a dose-dependent QT-prolongation warning: cap at 40 mg/day (20 mg/day in the elderly, hepatic impairment, or CYP2C19 poor metabolizers), and it prolongs QT more than other SSRIs in overdose (get an ECG in significant ingestion). Its enantiomer escitalopram carries only a mild QT signal; sertraline, fluoxetine, and paroxetine lack this specific ceiling.",
    meds: ["citalopram", "sertraline", "fluoxetine", "paroxetine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["qt", "monitoring"],
    source: { name: "Citalopram monograph — QT warning", origin: "monograph" }
  }
];
