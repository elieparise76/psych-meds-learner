// Cross-med vignette bank — MOOD STABILIZER PHARMACOTHERAPY
// Board-style (Royal College / FRCPC) items. Every drug fact below is extracted from data/deck.json
// (lithium, valproate, lamotrigine, carbamazepine, quetiapine, gabapentin, topiramate, sertraline,
// bupropion cards) — no doses, levels, or warnings are authored from memory.

export default [
  {
    id: "vd_ms_mania_mixed_features_valproate",
    stem: "A 33-year-old man with bipolar I disorder is admitted with a manic episode that carries prominent depressive features, and his chart documents four distinct mood episodes in the past 12 months. The team wants an antimanic agent that can be loaded for rapid control and that performs well in mixed presentations and rapid cycling. Which agent best fits?",
    options: ["Valproate / Divalproex", "Lamotrigine", "Gabapentin", "Topiramate"],
    answer: "Valproate / Divalproex",
    explanation: "Divalproex is a CANMAT/ISBD first-line agent for acute mania, is broad-spectrum for mixed features and rapid cycling, and is the one stabilizer that can be loaded (~20–30 mg/kg/day) for rapid control. Lamotrigine is a maintenance/anti-depressive agent and is not effective for acute mania, while gabapentin and topiramate are not primary mood stabilizers (negative bipolar trials; used for anxiety/sleep/pain and for weight or migraine, respectively).",
    meds: ["valproate", "lamotrigine", "gabapentin", "topiramate"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["acute-mania", "mixed-features", "rapid-cycling", "canmat"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },
  {
    id: "vd_ms_bipolar2_depression_quetiapine",
    stem: "A 29-year-old woman with bipolar II disorder presents with a six-week depressive episode marked by anergia and severe initial insomnia. She has never taken a mood stabilizer. Which single agent is an appropriate first-line monotherapy for acute bipolar depression here?",
    options: ["Quetiapine", "Sertraline", "Bupropion", "Gabapentin"],
    answer: "Quetiapine",
    explanation: "Quetiapine carries a CANMAT/ISBD first-line position for acute bipolar depression, and its potent H1 sedation also addresses the insomnia. Sertraline and bupropion are first-line for unipolar MDD only — antidepressant monotherapy is not the recommended approach to bipolar depression — and gabapentin has negative bipolar trials and is not a primary mood stabilizer.",
    meds: ["quetiapine", "sertraline", "bupropion", "gabapentin"],
    disorder: "Bipolar II disorder",
    difficulty: 1,
    tags: ["bipolar-depression", "first-line", "canmat"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },
  {
    id: "vd_ms_antidepressant_monotherapy_switch",
    stem: "A 27-year-old with known bipolar I disorder stopped all medication a year ago. Presenting to her family physician with low mood, she is started on sertraline alone. Four weeks later she is euphoric and grandiose, sleeping three hours a night, and has spent $14,000 on a business scheme. Which prescribed medication most likely precipitated this presentation?",
    options: ["Sertraline", "Lithium", "Quetiapine", "Lamotrigine"],
    answer: "Sertraline",
    explanation: "Antidepressant monotherapy in bipolar I disorder risks a switch into mania and is not recommended by CANMAT/ISBD — an antidepressant should only be considered alongside an antimanic mood stabilizer or atypical antipsychotic. Lithium and quetiapine are first-line antimanic agents, and lamotrigine is a maintenance agent for depressive relapse prevention; none of the three precipitates mania.",
    meds: ["sertraline", "lithium", "quetiapine", "lamotrigine"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["switch", "bipolar-depression", "canmat"],
    source: { name: "CANMAT/ISBD 2018 Bipolar Guidelines", origin: "canmat" }
  },
  {
    id: "vd_ms_lithium_hyperparathyroidism",
    stem: "A 54-year-old woman maintained on a mood stabilizer for nine years reports fatigue, constipation, and low mood. Routine bloodwork shows an elevated corrected serum calcium with an inappropriately non-suppressed PTH; renal function and TSH are stable. Which agent best explains this finding?",
    options: ["Lithium", "Valproate / Divalproex", "Lamotrigine", "Quetiapine"],
    answer: "Lithium",
    explanation: "Lithium's chronic organ toxicity clusters at the kidney, thyroid, and parathyroid — hyperparathyroidism with hypercalcemia is a recognized serious adverse effect, which is precisely why serum calcium joins renal function and TSH at baseline and every 6–12 months thereafter. Valproate (hepatic/pancreatic/haematologic), lamotrigine (dermatologic), and quetiapine (metabolic) do not cause hypercalcemia.",
    meds: ["lithium", "valproate", "lamotrigine", "quetiapine"],
    disorder: "Bipolar I disorder",
    difficulty: 3,
    tags: ["monitoring", "endocrine"],
    source: { name: "openFDA/DailyMed lithium label — warnings and precautions", origin: "openfda" }
  },
  {
    id: "vd_ms_lithium_nephrogenic_di",
    stem: "A 38-year-old man on lithium maintenance for six years passes about five litres of dilute urine daily and is constantly thirsty. Serum sodium is high-normal, urine osmolality is inappropriately low, and there is no improvement in urine concentration after a trial of desmopressin. What is the diagnosis?",
    options: ["Nephrogenic diabetes insipidus", "Central diabetes insipidus", "Primary polydipsia", "SIADH"],
    answer: "Nephrogenic diabetes insipidus",
    explanation: "Lithium blocks the action of ADH at the collecting duct, producing a nephrogenic diabetes insipidus that — unlike central DI — does not respond to desmopressin; amiloride is the pharmacologic answer. Primary polydipsia would not produce a rising sodium, and SIADH causes hyponatremia with concentrated urine, the opposite picture.",
    meds: ["lithium"],
    disorder: "Bipolar I disorder",
    difficulty: 3,
    tags: ["monitoring", "renal", "recognise-the-syndrome"],
    source: { name: "openFDA/DailyMed lithium label — warnings and precautions", origin: "openfda" }
  },
  {
    id: "vd_ms_lithium_metronidazole_toxicity",
    stem: "A 46-year-old man has been stable on lithium 900 mg daily for years, with trough levels around 0.8 mmol/L. His dentist starts metronidazole for a dental abscess. Nine days later he has a coarse tremor, ataxia, slurred speech, vomiting, and confusion; his 12-hour trough is now 2.3 mmol/L. Which medication's serum concentration did the antibiotic raise to cause this?",
    options: ["Lithium", "Valproate / Divalproex", "Lamotrigine", "Carbamazepine"],
    answer: "Lithium",
    explanation: "Lithium is not metabolized at all — it is excreted unchanged by the kidney, so metronidazole (like NSAIDs, thiazides, ACE inhibitors/ARBs, and dehydration) reduces its renal clearance and pushes the level from a therapeutic 0.6–1.2 mmol/L into the toxic range (toxicity begins above ~1.5, severe above 2.0). Hold the lithium and restore volume and sodium; hemodialysis is reserved for severe intoxication (e.g., level >4, or >2.5 with symptoms or renal failure). Valproate, lamotrigine, and carbamazepine are hepatically cleared and are unaffected in this way.",
    meds: ["lithium", "valproate", "lamotrigine", "carbamazepine"],
    disorder: "Lithium toxicity",
    difficulty: 3,
    tags: ["interaction", "toxicity", "monitoring", "overdose"],
    source: { name: "openFDA/DailyMed lithium label — drug interactions/overdosage", origin: "openfda" }
  },
  {
    id: "vd_ms_lactation_lithium_infant_monitoring",
    stem: "A 31-year-old woman with bipolar disorder is two weeks postpartum, euthymic on maintenance pharmacotherapy, and strongly wishes to breastfeed. Which of these maintenance agents has traditionally been discouraged during breastfeeding and, if continued, requires monitoring of the infant's serum levels, TSH, and hydration status?",
    options: ["Lithium", "Valproate / Divalproex", "Lamotrigine", "Quetiapine"],
    answer: "Lithium",
    explanation: "Lithium is excreted into breast milk and has traditionally been discouraged in lactation; it can be continued with close infant monitoring of levels, thyroid function, and hydration. Valproate has low milk transfer and is generally considered compatible with breastfeeding (in stark contrast to its pregnancy risk), lamotrigine passes into milk but is usable with infant monitoring, and quetiapine has a low relative infant dose requiring only monitoring for infant sedation.",
    meds: ["lithium", "valproate", "lamotrigine", "quetiapine"],
    disorder: "Bipolar disorder",
    difficulty: 2,
    tags: ["lactation", "pregnancy", "special-population"],
    source: { name: "Deck lactation fields (lithium, valproate, lamotrigine, quetiapine)", origin: "monograph" }
  },
  {
    id: "vd_ms_valproate_pancreatitis",
    stem: "A 29-year-old woman with bipolar I disorder, eight weeks into divalproex therapy, presents with severe epigastric pain boring through to her back, persistent vomiting, and a lipase six times the upper limit of normal. Her transaminases and serum ammonia are normal. What has happened?",
    options: ["Acute pancreatitis", "Valproate hepatotoxicity", "Hyperammonemic encephalopathy", "Lithium toxicity"],
    answer: "Acute pancreatitis",
    explanation: "Acute pancreatitis is a recognized serious adverse effect of valproate and, per the label, the drug should ordinarily be discontinued. Valproate hepatotoxicity — most likely in the first six months — presents with malaise, anorexia, vomiting, and deranged liver enzymes rather than an isolated lipase rise, and hyperammonemic encephalopathy presents with lethargy and confusion (classically with normal LFTs) rather than abdominal pain.",
    meds: ["valproate", "lithium"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["adverse-effect", "recognise-the-syndrome", "monitoring"],
    source: { name: "openFDA/DailyMed divalproex label — warnings and precautions", origin: "openfda" }
  },
  {
    id: "vd_ms_lamotrigine_sjs_with_valproate",
    stem: "A 23-year-old with bipolar II disorder taking divalproex has lamotrigine added, but it is started at 25 mg once daily rather than the reduced schedule required with valproate. Three weeks later he develops fever, painful oral and conjunctival ulceration, and a spreading dusky rash with blistering and skin sloughing. What is the diagnosis?",
    options: ["Stevens–Johnson syndrome", "DRESS", "Serotonin syndrome", "Acute pancreatitis"],
    answer: "Stevens–Johnson syndrome",
    explanation: "Valproate inhibits lamotrigine's glucuronidation and roughly doubles its level, so lamotrigine must be halved to 25 mg every other day when the two are combined; a full-dose start plus that interaction is the classic setup for Stevens–Johnson syndrome/TEN, and lamotrigine must be stopped immediately. DRESS is the other lamotrigine hypersensitivity syndrome but presents with eosinophilia and multi-organ involvement rather than mucosal blistering and epidermal detachment.",
    meds: ["lamotrigine", "valproate"],
    disorder: "Bipolar II disorder",
    difficulty: 2,
    tags: ["rash", "interaction", "sjs", "recognise-the-syndrome"],
    source: { name: "openFDA/DailyMed lamotrigine label — boxed warning (serious skin rashes)", origin: "openfda" }
  },
  {
    id: "vd_ms_lamotrigine_missed_doses_retitrate",
    stem: "A 34-year-old on 200 mg daily of maintenance therapy for bipolar II disorder returns from a three-week trip during which she ran out of her medication and took none for the last 10 days. She feels well and asks to simply resume her usual 200 mg dose tomorrow. Which agent's dosing rules make that unsafe, requiring a full restart of the original titration?",
    options: ["Lamotrigine", "Lithium", "Valproate / Divalproex", "Quetiapine"],
    answer: "Lamotrigine",
    explanation: "Lamotrigine's slow titration exists specifically to prevent Stevens–Johnson syndrome/TEN, and tolerance to that risk is lost after a gap; if doses are missed for more than five days the schedule must be restarted from 25 mg daily and re-escalated. Lithium, divalproex, and quetiapine carry no equivalent re-titration rule — lithium instead needs a repeat 12-hour trough about five days after any dose change.",
    meds: ["lamotrigine", "lithium", "valproate", "quetiapine"],
    disorder: "Bipolar II disorder",
    difficulty: 2,
    tags: ["titration", "sjs", "adherence"],
    source: { name: "openFDA/DailyMed lamotrigine label — dosage and administration", origin: "openfda" }
  },
  {
    id: "vd_ms_carbamazepine_hyponatremia_elderly",
    stem: "A 71-year-old man started on a mood stabilizer six weeks ago is brought in with new confusion, unsteadiness, and a fall. He is clinically euvolemic; serum sodium is 124 mmol/L with inappropriately concentrated urine, and his TSH and cortisol are normal. Which agent is the most likely cause?",
    options: ["Carbamazepine", "Lithium", "Lamotrigine", "Valproate / Divalproex"],
    answer: "Carbamazepine",
    explanation: "Carbamazepine causes SIADH with clinically significant hyponatremia, and the risk is highest in older patients — which is why serum sodium belongs in both the baseline workup and periodic monitoring alongside CBC and LFTs. Lithium does the reverse (hyponatremia raises the lithium level rather than being caused by it), and neither lamotrigine nor valproate is a recognized cause of SIADH.",
    meds: ["carbamazepine", "lithium", "lamotrigine", "valproate"],
    disorder: "Bipolar disorder",
    difficulty: 2,
    tags: ["hyponatremia", "geriatric", "monitoring"],
    source: { name: "openFDA/DailyMed carbamazepine label — warnings and precautions", origin: "openfda" }
  },
  {
    id: "vd_ms_carbamazepine_hla_b1502",
    stem: "A 28-year-old man of Han Chinese ancestry with bipolar disorder is about to start a mood stabilizer. Before the first dose, which agent specifically requires HLA-B*1502 genotyping because carrying that allele confers a strongly increased risk of Stevens–Johnson syndrome and toxic epidermal necrolysis?",
    options: ["Carbamazepine", "Lamotrigine", "Lithium", "Valproate / Divalproex"],
    answer: "Carbamazepine",
    explanation: "Carbamazepine's boxed warning ties SJS/TEN to HLA-B*1502, an allele found almost exclusively in patients of Asian ancestry, so genotyping is part of the baseline workup in that population (HLA-A*3101 instead predicts DRESS). Lamotrigine also causes SJS/TEN, but its risk is managed by slow titration rather than by any HLA screening; lithium and valproate carry no such pharmacogenetic requirement.",
    meds: ["carbamazepine", "lamotrigine", "lithium", "valproate"],
    disorder: "Bipolar disorder",
    difficulty: 1,
    tags: ["pharmacogenetics", "sjs", "monitoring"],
    source: { name: "openFDA/DailyMed carbamazepine label — boxed warning (HLA-B*1502)", origin: "openfda" }
  }
];
