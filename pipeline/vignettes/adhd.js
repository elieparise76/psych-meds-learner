// Cross-med FRCPC-style vignettes: ADHD pharmacotherapy.
// Every drug fact is grounded in data/deck.json (mechanism, formulation, monitoring,
// interactions, contraindications, overdose profile). See _CONTRACT.md.
export default [
  // ---------- Formulation / duration of action ----------
  {
    id: "vd_adhd_ir_to_once_daily",
    stem: "A 9-year-old with ADHD takes immediate-release methylphenidate at breakfast and again at lunch. Symptom control is good while the drug is on board, but the school will no longer administer the midday dose and the family reports marked irritability and loss of control by late afternoon. Which agent best addresses both problems?",
    options: ["Lisdexamfetamine", "Dextroamphetamine", "Clonidine", "Atomoxetine"],
    answer: "Lisdexamfetamine",
    explanation: "Immediate-release methylphenidate has a half-life of only ~2–3 h, which is why a midday dose is needed and why late-day rebound occurs; lisdexamfetamine is given once each morning and its rate-limited conversion to dextroamphetamine gives a smooth ~13–14 h profile that covers the school day without a midday dose. Immediate-release dextroamphetamine still requires morning ± midday dosing, atomoxetine takes 2–4 weeks to work rather than fixing today's coverage gap, and clonidine is sedating and used off-label for ADHD in Canada.",
    meds: ["lisdexamfetamine", "methylphenidate", "dextroamphetamine", "clonidine", "atomoxetine"],
    disorder: "ADHD",
    difficulty: 1,
    tags: ["formulation", "stimulant", "pediatric"],
    source: { name: "Lisdexamfetamine / methylphenidate monographs — pharmacokinetics and dosing", origin: "monograph" }
  },

  // ---------- Switching within the stimulant classes ----------
  {
    id: "vd_adhd_switch_stimulant_class",
    stem: "A 12-year-old with ADHD has been titrated to an optimal, well-tolerated dose of long-acting methylphenidate over 8 weeks with adherence confirmed, but there has been no meaningful improvement in attention or hyperactivity. There is no misuse risk, no cardiac disease and no tics. What is the most appropriate next pharmacologic step?",
    options: ["Dextroamphetamine", "Atomoxetine", "Clonidine", "Modafinil"],
    answer: "Dextroamphetamine",
    explanation: "Methylphenidate is a pure DAT/NET reuptake blocker whereas amphetamines drive presynaptic release of dopamine and norepinephrine, so failure of one stimulant class does not predict failure of the other — trial the amphetamine class before abandoning stimulants. Atomoxetine and clonidine are non-stimulants reserved mainly for stimulant failure, intolerance or misuse risk (atomoxetine also needs 2–4 weeks to work), and modafinil is a wakefulness-promoting agent that is not a first-line ADHD drug.",
    meds: ["dextroamphetamine", "methylphenidate", "atomoxetine", "clonidine", "modafinil"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["switching", "stimulant", "mechanism"],
    source: { name: "Methylphenidate vs amphetamine mechanism (deck monograph fields)", origin: "monograph" }
  },

  // ---------- Adjunct to a stimulant, with tics ----------
  {
    id: "vd_adhd_adjunct_with_tics",
    stem: "A 13-year-old is on an optimally dosed long-acting stimulant with a partial response: he still has disruptive impulsivity late in the day, and he has mild pre-existing motor tics that the family does not want to worsen. You want to add a second agent that carries a Canadian indication as an adjunct to a stimulant. Which do you add?",
    options: ["Guanfacine XR", "Clonidine", "Atomoxetine", "Modafinil"],
    answer: "Guanfacine XR",
    explanation: "Guanfacine XR is the α2A-selective agonist approved in Canada for ADHD both as monotherapy and as an adjunct to a stimulant, and it is also used off-label for tics — so it fits a partial stimulant responder with tics. Clonidine's ADHD use in Canada is off-label and it is markedly more sedating, atomoxetine has no adjunct-to-stimulant indication, and modafinil is a wakefulness agent with no ADHD indication. Monitor BP/HR and sedation, and taper guanfacine rather than stopping abruptly (rebound hypertension).",
    meds: ["guanfacine", "clonidine", "atomoxetine", "modafinil"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["adjunct", "tics", "non-stimulant"],
    source: { name: "Guanfacine XR monograph — ADHD monotherapy or stimulant adjunct", origin: "monograph" }
  },

  // ---------- Hepatotoxicity ----------
  {
    id: "vd_adhd_hepatotoxicity_atomoxetine",
    stem: "A 28-year-old treated for ADHD for four months presents with jaundice, dark urine, pruritus and right-upper-quadrant discomfort. ALT and AST are markedly elevated with a rising bilirubin; viral serologies and an ultrasound are unremarkable, and she drinks no alcohol. Which of her possible ADHD medications is the most likely cause?",
    options: ["Atomoxetine", "Methylphenidate", "Guanfacine XR", "Clonidine"],
    answer: "Atomoxetine",
    explanation: "Atomoxetine carries a rare but potentially severe drug-induced liver injury signal — jaundice or markedly elevated liver enzymes mandate permanent discontinuation with no rechallenge. Methylphenidate is de-esterified by carboxylesterase to inactive ritalinic acid, and guanfacine and clonidine are characterised by sedation, bradycardia and hypotension rather than hepatotoxicity.",
    meds: ["atomoxetine", "methylphenidate", "guanfacine", "clonidine"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["hepatic", "adverse-effect", "monitoring"],
    source: { name: "Atomoxetine monograph — hepatotoxicity warning", origin: "monograph" }
  },

  // ---------- CYP2D6 interaction ----------
  {
    id: "vd_adhd_cyp2d6_paroxetine",
    stem: "A 35-year-old man with major depressive disorder is doing well on paroxetine, which he does not want to change, and now needs pharmacotherapy for adult ADHD. Which agent's exposure is LEAST likely to be altered by paroxetine's potent CYP2D6 inhibition?",
    options: ["Methylphenidate", "Atomoxetine", "Dextroamphetamine", "Mixed Amphetamine Salts"],
    answer: "Methylphenidate",
    explanation: "Methylphenidate is de-esterified by carboxylesterase CES1A1 with minimal CYP involvement, so it has comparatively few pharmacokinetic interactions. Atomoxetine is a CYP2D6 substrate whose levels rise markedly with paroxetine, fluoxetine or quinidine (start low and titrate slowly), and both dextroamphetamine and mixed amphetamine salts undergo CYP2D6-dependent metabolism, so 2D6 inhibitors can raise amphetamine exposure.",
    meds: ["methylphenidate", "atomoxetine", "dextroamphetamine", "amphetamine_salts", "paroxetine"],
    disorder: "ADHD",
    difficulty: 3,
    tags: ["interaction", "cyp2d6", "pharmacokinetics"],
    source: { name: "Methylphenidate (CES1) and atomoxetine (CYP2D6) monographs", origin: "monograph" }
  },

  // ---------- Pregnancy planning ----------
  {
    id: "vd_adhd_pregnancy_avoid_modafinil",
    stem: "A 27-year-old woman with ADHD is actively planning a pregnancy and asks you to review her options. Which agent carries an explicit recommendation to AVOID use in pregnancy, plus a specific need for backup contraception if it is continued?",
    options: ["Modafinil", "Methylphenidate", "Atomoxetine", "Guanfacine XR"],
    answer: "Modafinil",
    explanation: "Modafinil is to be avoided in pregnancy given signals of intrauterine growth restriction and congenital anomalies, and it induces CYP3A4 — reducing hormonal contraceptive efficacy during use and for about a month afterwards, so backup contraception must be counselled. Methylphenidate, atomoxetine and guanfacine XR all have limited human pregnancy data requiring an individualized risk–benefit decision, but none carries modafinil's explicit avoid-plus-contraception warning.",
    meds: ["modafinil", "methylphenidate", "atomoxetine", "guanfacine"],
    disorder: "ADHD",
    difficulty: 3,
    tags: ["pregnancy", "interaction", "special-population"],
    source: { name: "Modafinil monograph — pregnancy and CYP3A4 induction", origin: "monograph" }
  },

  // ---------- Comorbid bipolar I ----------
  {
    id: "vd_adhd_bipolar_mania_risk",
    stem: "A 25-year-old with bipolar I disorder, euthymic on lithium for the past year, is referred for treatment of longstanding ADHD symptoms. Which of the following agents carries the greatest risk of precipitating a manic or psychotic episode and therefore demands the most careful screening and mood surveillance before it is started?",
    options: ["Mixed Amphetamine Salts", "Guanfacine XR", "Clonidine", "Atomoxetine"],
    answer: "Mixed Amphetamine Salts",
    explanation: "Stimulant labels list new or worsened mania and psychosis among their serious adverse effects and specifically direct prescribers to screen for risk factors for a manic episode before starting and to reconsider the drug if manic or psychotic symptoms emerge. The α2 agonists guanfacine XR and clonidine and the non-stimulant atomoxetine do not carry that mania signal — their characteristic risks are sedation, bradycardia and hypotension (α2 agonists) and hepatotoxicity and youth suicidality (atomoxetine).",
    meds: ["amphetamine_salts", "guanfacine", "clonidine", "atomoxetine", "lithium"],
    disorder: "Bipolar I disorder",
    difficulty: 2,
    tags: ["mania", "special-population", "screening"],
    source: { name: "Amphetamine monograph — psychiatric adverse reactions / pretreatment screening", origin: "monograph" }
  },

  // ---------- Growth suppression ----------
  {
    id: "vd_adhd_growth_suppression_switch",
    stem: "An 8-year-old has been on a stimulant for 18 months. ADHD control is adequate, but his appetite is poor, his weight has fallen from the 50th to the 15th percentile and he has crossed down two height percentiles despite calorie-dense meals and evening snacks. The family wants an agent that does not carry the stimulant class's growth warning. Which do you switch to?",
    options: ["Guanfacine XR", "Lisdexamfetamine", "Methylphenidate", "Dextroamphetamine"],
    answer: "Guanfacine XR",
    explanation: "Long-term growth suppression is a labelled serious adverse effect shared by all the stimulants, so switching among methylphenidate, lisdexamfetamine and dextroamphetamine will not solve it; guanfacine XR is a non-stimulant α2A agonist whose monitoring burden is blood pressure, heart rate and sedation rather than growth suppression. Height and weight should still be plotted at each visit on any ADHD medication.",
    meds: ["guanfacine", "lisdexamfetamine", "methylphenidate", "dextroamphetamine"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["growth", "monitoring", "pediatric"],
    source: { name: "Stimulant monographs — long-term suppression of growth in pediatric patients", origin: "monograph" }
  },

  // ---------- Pediatric ingestion ----------
  {
    id: "vd_adhd_toddler_ingestion_clonidine",
    stem: "A 2-year-old is found beside an open pill bottle belonging to his older brother, who is treated for ADHD. In the emergency department the toddler is deeply lethargic with a respiratory rate of 10, heart rate 52, blood pressure 72/40 and pinpoint pupils. Naloxone produces no convincing response. Which medication did he most likely ingest?",
    options: ["Clonidine", "Methylphenidate", "Lisdexamfetamine", "Atomoxetine"],
    answer: "Clonidine",
    explanation: "Clonidine overdose in a small child produces CNS and respiratory depression, bradycardia, hypotension and miosis — a picture that mimics opioid toxicity but responds only variably to naloxone, and even small ingestions can be lethal, so management is supportive with cardiac monitoring. Methylphenidate and lisdexamfetamine would instead cause a sympathomimetic picture (agitation, tachycardia, hypertension, mydriasis, hyperthermia), and atomoxetine overdose typically causes somnolence, agitation and tachycardia rather than profound bradycardia with miosis.",
    meds: ["clonidine", "methylphenidate", "lisdexamfetamine", "atomoxetine"],
    disorder: "ADHD",
    difficulty: 3,
    tags: ["overdose", "pediatric", "safety"],
    source: { name: "Clonidine monograph — overdose in young children", origin: "monograph" }
  },

  // ---------- Recognise the toxidrome ----------
  {
    id: "vd_adhd_sympathomimetic_toxidrome",
    stem: "A 19-year-old university student is brought in after swallowing a handful of a friend's mixed amphetamine salts capsules. He is agitated and diaphoretic with heart rate 148, blood pressure 195/115, temperature 39.4°C and dilated pupils. Tone is normal with no rigidity and no inducible clonus, and he is on no other medication. Which syndrome does this represent?",
    options: ["Sympathomimetic toxicity", "Anticholinergic toxicity", "Serotonin syndrome", "Neuroleptic malignant syndrome"],
    answer: "Sympathomimetic toxicity",
    explanation: "Amphetamine overdose produces a sympathomimetic crisis — agitation, hypertension, tachyarrhythmia, hyperthermia, mydriasis and seizures — and diaphoresis with preserved normal tone is the key discriminator; benzodiazepines plus cooling and supportive care are first-line. Anticholinergic toxicity gives dry flushed skin and urinary retention, serotonin syndrome requires a serotonergic agent and features clonus and hyperreflexia, and neuroleptic malignant syndrome follows dopamine blockade with lead-pipe rigidity evolving over days.",
    meds: ["amphetamine_salts", "dextroamphetamine", "lisdexamfetamine"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["overdose", "toxidrome", "safety"],
    source: { name: "Amphetamine monograph — overdosage", origin: "monograph" }
  },

  // ---------- Stimulant-associated sleep-onset insomnia ----------
  {
    id: "vd_adhd_stimulant_insomnia_melatonin",
    stem: "A 9-year-old on lisdexamfetamine has excellent daytime ADHD control that the family does not want to give up, but sleep-onset latency is consistently over 90 minutes despite good sleep hygiene and a morning-only dosing schedule. The parents ask for the option with the widest safety margin and no dependence risk. What do you recommend?",
    options: ["Melatonin", "Clonidine", "Zopiclone", "Temazepam"],
    answer: "Melatonin",
    explanation: "Melatonin is an MT1/MT2 agonist used for sleep onset in ADHD, has a very wide safety margin with no dependence, and in Canada is sold over the counter as a Natural Health Product (NPN, not a DIN). Bedtime clonidine is an alternative but adds sedation, bradycardia, hypotension and rebound hypertension on abrupt withdrawal, while the Z-drug zopiclone and the benzodiazepine temazepam carry dependence, next-day impairment and no pediatric role.",
    meds: ["melatonin", "clonidine", "zopiclone", "temazepam", "lisdexamfetamine"],
    disorder: "Insomnia",
    difficulty: 2,
    tags: ["insomnia", "pediatric", "adjunct"],
    source: { name: "Melatonin and clonidine deck entries — sleep onset in ADHD", origin: "authored" }
  },

  // ---------- Comorbid tobacco use disorder ----------
  {
    id: "vd_adhd_comorbid_smoking_varenicline",
    stem: "A 34-year-old with ADHD, stable and well controlled on lisdexamfetamine, smokes a pack a day and has set a quit date in two weeks. He is psychiatrically stable, has normal renal function and no history of seizures, and asks for the single most effective medication to help him stop. Which do you prescribe?",
    options: ["Varenicline", "Bupropion", "Naltrexone", "Atomoxetine"],
    answer: "Varenicline",
    explanation: "Varenicline, an α4β2 nicotinic partial agonist started about a week before the quit date, is the most effective single pharmacotherapy for smoking cessation; it is renally cleared and essentially free of CYP interactions with his stimulant, with nausea and vivid dreams as the hallmark side effects. Bupropion is an approved but less effective cessation aid that also lowers the seizure threshold, naltrexone treats alcohol and opioid use disorder, and atomoxetine has no role in smoking cessation.",
    meds: ["varenicline", "bupropion", "naltrexone", "atomoxetine", "lisdexamfetamine"],
    disorder: "Tobacco use disorder",
    difficulty: 2,
    tags: ["first-line", "substance", "comorbidity"],
    source: { name: "Varenicline monograph / deck pearls — smoking cessation efficacy", origin: "monograph" }
  }
];
