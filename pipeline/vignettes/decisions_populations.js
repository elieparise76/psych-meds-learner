// Special-population DECISIONS — the safest/best agent for THIS patient, driven by
// pregnancy/lactation, older age, renal or hepatic impairment, or cardiac (QT) disease.
// Every drug fact is grounded in data/deck.json (pregnancy/lactation/geriatric/renalHepatic/cardiac fields).
export default [
  {
    id: "vx_pop_mdd_pregnancy_ssri",
    stem: "A 28-year-old woman at 9 weeks' gestation presents with a first episode of major depression severe enough to warrant pharmacotherapy. Which antidepressant is the preferred first choice in pregnancy?",
    options: ["Sertraline", "Paroxetine", "Fluoxetine", "Venlafaxine"],
    answer: "Sertraline",
    explanation: "Sertraline is one of the preferred SSRIs in pregnancy/lactation given its data and low milk transfer (treat maternal illness per CANMAT perinatal). Paroxetine is generally avoided (association with cardiac septal defects); fluoxetine's long half-life and greater milk secretion make it less ideal; venlafaxine risks late-pregnancy neonatal adaptation.",
    meds: ["sertraline", "paroxetine", "fluoxetine", "venlafaxine"],
    disorder: "Major depressive disorder",
    difficulty: 1,
    tags: ["pregnancy", "first-line", "canmat"],
    source: { name: "CANMAT perinatal 2024", origin: "canmat" }
  },
  {
    id: "vx_pop_mdd_hepatic_avoid",
    stem: "A 54-year-old man with major depression has biopsy-proven cirrhosis and ongoing heavy alcohol use. Which antidepressant is best AVOIDED in this patient?",
    options: ["Duloxetine", "Sertraline", "Escitalopram", "Mirtazapine"],
    answer: "Duloxetine",
    explanation: "Duloxetine should be avoided in hepatic impairment and significant alcohol use because of hepatotoxicity. Sertraline, escitalopram, and mirtazapine are all reasonable antidepressant choices here (with escitalopram capped at 10 mg/day if hepatic function is compromised).",
    meds: ["duloxetine", "sertraline", "escitalopram", "mirtazapine"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["hepatic", "contraindication"],
    source: { name: "Duloxetine product monograph", origin: "monograph" }
  },
  {
    id: "vx_pop_bipolar_pregnancy_maint",
    stem: "A 30-year-old woman with bipolar I disorder and predominantly depressive episodes is 6 weeks pregnant and needs maintenance mood stabilization. Which agent is the comparatively safest choice in pregnancy?",
    options: ["Lamotrigine", "Valproate / Divalproex", "Carbamazepine", "Lithium"],
    answer: "Lamotrigine",
    explanation: "Lamotrigine is the comparatively pregnancy-safer, CANMAT-first-line maintenance stabilizer for depression prevention (watch for falling levels antenatally and reduce postpartum). Valproate is the most teratogenic mood stabilizer (neural-tube defects, lowest childhood IQ); carbamazepine also causes neural-tube/craniofacial defects; lithium carries a first-trimester Ebstein-anomaly risk.",
    meds: ["lamotrigine", "valproate", "carbamazepine", "lithium"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["pregnancy", "canmat"],
    source: { name: "CANMAT/ISBD 2018 Bipolar; perinatal 2024", origin: "canmat" }
  },
  {
    id: "vx_pop_bipolar_renal_elderly_avoid",
    stem: "A 74-year-old man with bipolar I disorder is admitted in acute mania. His eGFR is 34 mL/min. Which first-line antimanic agent is best AVOIDED given his age and renal function?",
    options: ["Lithium", "Valproate / Divalproex", "Quetiapine", "Aripiprazole"],
    answer: "Lithium",
    explanation: "Lithium is renally cleared, and reduced clearance in the elderly and in renal impairment narrows its therapeutic window and increases neurotoxicity, so it is best avoided here. Valproate, quetiapine, and aripiprazole are all CANMAT first-line for acute mania and do not depend on renal clearance the way lithium does.",
    meds: ["lithium", "valproate", "quetiapine", "aripiprazole"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["renal", "geriatric"],
    source: { name: "CANMAT/ISBD 2018 Bipolar", origin: "canmat" }
  },
  {
    id: "vx_pop_scz_qt_avoid",
    stem: "A 40-year-old man with schizophrenia has a baseline QTc of 480 ms and takes methadone. Which antipsychotic is best AVOIDED because it carries the greatest QT liability of the second-generation agents?",
    options: ["Ziprasidone", "Aripiprazole", "Lurasidone", "Risperidone"],
    answer: "Ziprasidone",
    explanation: "Ziprasidone causes the greatest QT prolongation of the SGAs and should be avoided alongside other QT-prolonging drugs and with uncorrected electrolytes. Aripiprazole is essentially QT-neutral, lurasidone is low-QT-risk, and risperidone has only a modest QT effect.",
    meds: ["ziprasidone", "aripiprazole", "lurasidone", "risperidone"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["qt", "cardiac"],
    source: { name: "Ziprasidone product label (QT)", origin: "openfda" }
  },
  {
    id: "vx_pop_scz_pregnancy_metabolic",
    stem: "A 27-year-old woman with schizophrenia relapses at 14 weeks' gestation and needs an antipsychotic restarted. She has obesity and impaired fasting glucose. Which agent is least desirable here because of its metabolic burden in pregnancy?",
    options: ["Olanzapine", "Aripiprazole", "Risperidone", "Lurasidone"],
    answer: "Olanzapine",
    explanation: "Olanzapine causes substantial gestational weight gain and glucose dysregulation, an added concern in a patient already at metabolic risk. Aripiprazole, risperidone, and lurasidone lack a clear teratogenic signal and carry a lighter metabolic load, though all three share third-trimester neonatal EPS/withdrawal considerations.",
    meds: ["olanzapine", "aripiprazole", "risperidone", "lurasidone"],
    disorder: "Schizophrenia",
    difficulty: 2,
    tags: ["pregnancy"],
    source: { name: "CANMAT perinatal 2024", origin: "canmat" }
  },
  {
    id: "vx_pop_gad_pregnancy_firstline",
    stem: "A 31-year-old woman at 11 weeks' gestation has generalized anxiety disorder refractory to psychotherapy and wants medication. Which is the most appropriate first-line pharmacologic choice?",
    options: ["Escitalopram", "Paroxetine", "Lorazepam", "Pregabalin"],
    answer: "Escitalopram",
    explanation: "Escitalopram has no consistent major teratogenic signal and is a reasonable first-line SSRI in pregnancy. Paroxetine is avoided (cardiac malformation signal); regular late-pregnancy lorazepam risks neonatal hypotonia/withdrawal ('floppy infant'); and pregabalin has a possible-harm signal and is avoided if possible.",
    meds: ["escitalopram", "paroxetine", "lorazepam", "pregabalin"],
    disorder: "Generalized anxiety disorder",
    difficulty: 1,
    tags: ["pregnancy", "first-line"],
    source: { name: "CANMAT perinatal 2024", origin: "canmat" }
  },
  {
    id: "vx_pop_gad_elderly_falls",
    stem: "A 76-year-old woman with generalized anxiety disorder has had two recent falls. You want an anxiolytic that will not add sedation-related fall risk. Best choice?",
    options: ["Buspirone", "Lorazepam", "Hydroxyzine", "Diazepam"],
    answer: "Buspirone",
    explanation: "Buspirone is approved for GAD and is non-sedating with no sedation-driven fall risk, making it well suited to a frail older adult. Lorazepam and diazepam are Beers-listed benzodiazepines (falls, fractures, delirium), and hydroxyzine is anticholinergic, sedating, and QT-prolonging (also Beers-cautioned).",
    meds: ["buspirone", "lorazepam", "hydroxyzine", "diazepam"],
    disorder: "Generalized anxiety disorder",
    difficulty: 2,
    tags: ["geriatric"],
    source: { name: "AGS Beers Criteria (geriatric)", origin: "authored" }
  },
  {
    id: "vx_pop_dementia_pd_psychosis",
    stem: "A 78-year-old man with Parkinson disease and major neurocognitive disorder develops distressing visual hallucinations. If an antipsychotic is required, which agent best avoids worsening his parkinsonism?",
    options: ["Quetiapine", "Haloperidol", "Risperidone", "Olanzapine"],
    answer: "Quetiapine",
    explanation: "Quetiapine's loose D2 binding gives it the lowest EPS/prolactin of these agents, making it a go-to in Parkinson disease psychosis. Haloperidol is a high-potency FGA with maximal EPS that would markedly worsen motor symptoms; risperidone raises prolactin and EPS; olanzapine adds anticholinergic burden. (All antipsychotics carry a boxed warning for increased mortality in dementia-related psychosis.)",
    meds: ["quetiapine", "haloperidol", "risperidone", "olanzapine"],
    disorder: "Major neurocognitive disorder (dementia)",
    difficulty: 2,
    tags: ["geriatric", "eps"],
    source: { name: "Quetiapine product monograph", origin: "monograph" }
  },
  {
    id: "vx_pop_dementia_cardiac_conduction",
    stem: "An 80-year-old woman with moderate-to-severe Alzheimer dementia has sick sinus syndrome and symptomatic bradycardia. Which cognitive-enhancing agent is safest for her heart?",
    options: ["Memantine", "Donepezil", "Rivastigmine", "Galantamine"],
    answer: "Memantine",
    explanation: "Memantine is an NMDA antagonist with no vagotonic effect, giving it a safer cardiac profile in conduction disease. Donepezil, rivastigmine, and galantamine are all cholinesterase inhibitors whose vagotonic action causes bradycardia and syncope and is cautioned in sick sinus syndrome and other conduction defects.",
    meds: ["memantine", "donepezil", "rivastigmine", "galantamine"],
    disorder: "Major neurocognitive disorder (dementia)",
    difficulty: 2,
    tags: ["cardiac", "geriatric"],
    source: { name: "Cholinesterase inhibitor monographs (cardiac)", origin: "monograph" }
  },
  {
    id: "vx_pop_delirium_avoid_benzo",
    stem: "An 82-year-old post-operative man has hyperactive delirium with agitation threatening his surgical drains; non-pharmacologic measures have failed. Which medication is most likely to WORSEN his delirium and should be avoided?",
    options: ["Lorazepam", "Haloperidol", "Quetiapine", "Risperidone"],
    answer: "Lorazepam",
    explanation: "Benzodiazepines such as lorazepam precipitate and prolong delirium in older adults and are Beers-listed for exactly this reason, so they are avoided outside of sedative/alcohol-withdrawal delirium. Low-dose haloperidol, quetiapine, or risperidone are the usual short-term options for a dangerously agitated hyperactive delirium.",
    meds: ["lorazepam", "haloperidol", "quetiapine", "risperidone"],
    disorder: "Delirium",
    difficulty: 2,
    tags: ["delirium", "geriatric"],
    source: { name: "AGS Beers Criteria (delirium)", origin: "authored" }
  },
  {
    id: "vx_pop_delirium_etoh_hepatic",
    stem: "A 66-year-old man with alcoholic cirrhosis is admitted with alcohol-withdrawal delirium (delirium tremens). Which agent is the best first-line choice for symptom-triggered management given his liver disease?",
    options: ["Lorazepam", "Diazepam", "Chlordiazepoxide", "Haloperidol"],
    answer: "Lorazepam",
    explanation: "Lorazepam is a 'LOT' agent cleared by glucuronidation with no active metabolite, making it the benzodiazepine of choice for withdrawal in hepatic impairment and the elderly. Diazepam and chlordiazepoxide have long-acting active metabolites that accumulate in cirrhosis; haloperidol does not treat withdrawal and lowers the seizure threshold.",
    meds: ["lorazepam", "diazepam", "chlordiazepoxide", "haloperidol"],
    disorder: "Delirium",
    difficulty: 3,
    tags: ["hepatic"],
    source: { name: "Lorazepam/diazepam product monographs", origin: "monograph" }
  },
  {
    id: "vx_pop_insomnia_elderly_falls",
    stem: "A 77-year-old woman with chronic sleep-onset insomnia and a history of falls asks for a sleep aid. Which option best minimizes fall and next-day-sedation risk?",
    options: ["Melatonin", "Zopiclone", "Zolpidem", "Temazepam"],
    answer: "Melatonin",
    explanation: "Endogenous melatonin declines with age, and low-dose melatonin can aid sleep onset with minimal risk, making it the safest listed option for a faller. Zopiclone and zolpidem are Z-drugs (falls, confusion, next-day sedation), and temazepam is a Beers-listed hypnotic benzodiazepine to avoid in older adults.",
    meds: ["melatonin", "zopiclone", "zolpidem", "temazepam"],
    disorder: "Insomnia",
    difficulty: 2,
    tags: ["geriatric"],
    source: { name: "AGS Beers Criteria (hypnotics)", origin: "authored" }
  },
  {
    id: "vx_pop_insomnia_hepatic_lot",
    stem: "A 70-year-old man with decompensated cirrhosis has severe insomnia and, after non-drug measures fail, a short course of a hypnotic benzodiazepine is chosen. Which agent is preferred in hepatic impairment?",
    options: ["Temazepam", "Diazepam", "Flurazepam", "Nitrazepam"],
    answer: "Temazepam",
    explanation: "Temazepam is a 'LOT' agent (glucuronidation, no active metabolite), so it is liver-safe and preferred when a hypnotic benzodiazepine must be used in hepatic impairment. Diazepam's and flurazepam's long-acting active metabolites accumulate, and nitrazepam's long parent half-life causes next-day impairment.",
    meds: ["temazepam", "diazepam", "flurazepam", "nitrazepam"],
    disorder: "Insomnia",
    difficulty: 3,
    tags: ["hepatic"],
    source: { name: "Temazepam product monograph (LOT agent)", origin: "monograph" }
  }
];
