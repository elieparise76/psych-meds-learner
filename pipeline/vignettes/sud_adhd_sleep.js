// Cross-med FRCPC-style vignettes: Substance use (alcohol / opioid / tobacco),
// ADHD, and Insomnia. Facts grounded in data/deck.json. See _CONTRACT.md.
export default [
  // ===================== ALCOHOL USE DISORDER =====================
  {
    id: "vs_aud_first_line_naltrexone",
    stem: "A 44-year-old with alcohol use disorder is still drinking heavily and wants pharmacotherapy to cut down. He takes no opioids, and baseline LFTs and renal function are normal. Which agent is the best first-line choice?",
    options: ["Naltrexone", "Disulfiram", "Acamprosate", "Buprenorphine"],
    answer: "Naltrexone",
    explanation: "Naltrexone is a first-line anti-craving agent that blunts the opioid-mediated reward of drinking and reduces heavy-drinking days; it can be started while the patient is still drinking. Disulfiram is an aversive, later-line option needing a highly motivated abstinent patient; acamprosate maintains abstinence best once already abstinent; buprenorphine treats opioid, not alcohol, use disorder.",
    meds: ["naltrexone", "disulfiram", "acamprosate", "buprenorphine"],
    disorder: "Alcohol use disorder",
    difficulty: 1,
    tags: ["first-line", "craving"],
    source: { name: "CANMAT/CCSA alcohol use disorder", origin: "authored" }
  },
  {
    id: "vs_aud_hepatic_acamprosate",
    stem: "A 58-year-old with alcohol use disorder has been abstinent for two weeks and now wants relapse-prevention pharmacotherapy. She has established alcoholic cirrhosis with elevated transaminases; renal function is normal. Which agent is safest and most appropriate?",
    options: ["Acamprosate", "Naltrexone", "Disulfiram", "Methadone"],
    answer: "Acamprosate",
    explanation: "Acamprosate is renally excreted unchanged and is not hepatically metabolized, making it the preferred maintenance agent in significant liver disease. Naltrexone and disulfiram are both hepatotoxic and are cautioned/avoided with transaminitis; methadone is an opioid agonist irrelevant to alcohol use disorder.",
    meds: ["acamprosate", "naltrexone", "disulfiram", "methadone"],
    disorder: "Alcohol use disorder",
    difficulty: 2,
    tags: ["hepatic", "special-population", "maintenance"],
    source: { name: "Acamprosate monograph (renal clearance)", origin: "monograph" }
  },
  {
    id: "vs_aud_disulfiram_reaction",
    stem: "A patient on medication for alcohol use disorder rinses with an alcohol-containing mouthwash and within minutes develops intense facial flushing, throbbing headache, nausea and vomiting, tachycardia and hypotension. Which reaction is this?",
    options: ["Disulfiram–alcohol reaction", "Serotonin syndrome", "Anticholinergic toxicity", "Precipitated opioid withdrawal"],
    answer: "Disulfiram–alcohol reaction",
    explanation: "Disulfiram irreversibly inhibits aldehyde dehydrogenase; any alcohol exposure (including mouthwash, cough syrup, sauces) causes acetaldehyde accumulation with flushing, headache, nausea, tachycardia and hypotension. The picture is not serotonergic, anticholinergic, or opioid-withdrawal in nature.",
    meds: ["disulfiram"],
    disorder: "Alcohol use disorder",
    difficulty: 2,
    tags: ["recognise-syndrome", "interaction"],
    source: { name: "Disulfiram monograph", origin: "monograph" }
  },

  // ===================== OPIOID USE DISORDER =====================
  {
    id: "vs_oud_first_line_bupnx",
    stem: "A 29-year-old with opioid use disorder presents to an outpatient clinic to start opioid agonist therapy. He is medically stable and adherence/safety are priorities. Which agent is recommended as first-line?",
    options: ["Buprenorphine / Naloxone", "Methadone", "Naltrexone", "Naloxone"],
    answer: "Buprenorphine / Naloxone",
    explanation: "CRISM guidance favours buprenorphine/naloxone as first-line opioid agonist therapy because the partial agonist has a ceiling on respiratory depression and a far safer overdose profile than methadone. Methadone is a second-line full agonist; naltrexone is an antagonist requiring prior abstinence; naloxone is an acute rescue drug, not maintenance.",
    meds: ["buprenorphine_naloxone", "methadone", "naltrexone", "naloxone"],
    disorder: "Opioid use disorder",
    difficulty: 1,
    tags: ["first-line", "oat"],
    source: { name: "CRISM national OAT guideline", origin: "authored" }
  },
  {
    id: "vs_oud_precipitated_withdrawal",
    stem: "A patient who used a full-agonist opioid a few hours earlier is given a first dose of buprenorphine before objective withdrawal has appeared. Within 30 minutes he becomes acutely diaphoretic, nauseated, and markedly worse than before. What has happened?",
    options: ["Precipitated opioid withdrawal", "Opioid overdose", "Serotonin syndrome", "Disulfiram–alcohol reaction"],
    answer: "Precipitated opioid withdrawal",
    explanation: "Buprenorphine's high mu-receptor affinity but low intrinsic activity displaces the full agonist and abruptly drops receptor activation, precipitating withdrawal when started too early. Induction should wait for objective withdrawal (e.g. COWS) or use a micro-dosing protocol; this is the opposite of overdose and is not serotonergic.",
    meds: ["buprenorphine", "buprenorphine_naloxone"],
    disorder: "Opioid use disorder",
    difficulty: 2,
    tags: ["recognise-syndrome", "precipitated-withdrawal", "induction"],
    source: { name: "Buprenorphine induction (COWS)", origin: "authored" }
  },
  {
    id: "vs_oud_overdose_rescue",
    stem: "A man is found unresponsive with a respiratory rate of 6, pinpoint pupils, and drug paraphernalia nearby. Which agent is the immediate pharmacologic rescue?",
    options: ["Naloxone", "Naltrexone", "Methadone", "Buprenorphine"],
    answer: "Naloxone",
    explanation: "Naloxone is a short-acting opioid antagonist that rapidly reverses opioid-induced respiratory depression; watch for re-narcotization as it wears off. Naltrexone is a maintenance antagonist (not for acute rescue), while methadone and buprenorphine are agonists that would worsen the overdose.",
    meds: ["naloxone", "naltrexone", "methadone", "buprenorphine"],
    disorder: "Opioid use disorder",
    difficulty: 1,
    tags: ["overdose", "rescue"],
    source: { name: "Naloxone monograph", origin: "monograph" }
  },
  {
    id: "vs_oud_methadone_qt",
    stem: "A patient on methadone maintenance has his dose escalated above 100 mg/day and is also started on a QT-prolonging antibiotic. He develops syncope; ECG shows a markedly prolonged QTc. Which methadone-related complication does this represent?",
    options: ["QT prolongation / torsades de pointes", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Opioid withdrawal"],
    answer: "QT prolongation / torsades de pointes",
    explanation: "Methadone causes dose-dependent QT prolongation and torsades, so an ECG is obtained at baseline, around 30 days, and periodically, especially above 100 mg/day or with additive QT drugs. This is a cardiac-conduction event, not a serotonergic, dopaminergic (NMS), or withdrawal phenomenon.",
    meds: ["methadone"],
    disorder: "Opioid use disorder",
    difficulty: 3,
    tags: ["qt", "monitoring", "recognise-syndrome"],
    source: { name: "Methadone monograph (QT/ECG)", origin: "monograph" }
  },
  {
    id: "vs_oud_naltrexone_washout",
    stem: "A patient with opioid use disorder has completed a supervised withdrawal and has been opioid-free for 10 days. He prefers a non-agonist agent that will block relapse without any abuse potential. Which is appropriate?",
    options: ["Naltrexone", "Methadone", "Buprenorphine / Naloxone", "Acamprosate"],
    answer: "Naltrexone",
    explanation: "Naltrexone is an opioid antagonist for the detoxified patient; it requires roughly 7–10 opioid-free days first, otherwise it precipitates withdrawal, and the extended-release depot aids adherence. Methadone and buprenorphine/naloxone are agonist therapies; acamprosate is for alcohol, not opioid, use disorder.",
    meds: ["naltrexone", "methadone", "buprenorphine_naloxone", "acamprosate"],
    disorder: "Opioid use disorder",
    difficulty: 2,
    tags: ["washout", "switching", "relapse-prevention"],
    source: { name: "Naltrexone monograph (opioid-free interval)", origin: "monograph" }
  },

  // ===================== TOBACCO USE DISORDER =====================
  {
    id: "vs_tobacco_varenicline_first",
    stem: "A motivated 50-year-old smoker with no psychiatric or seizure history wants the single most effective pharmacotherapy for smoking cessation. Which do you recommend?",
    options: ["Varenicline", "Bupropion", "Clonidine", "Naltrexone"],
    answer: "Varenicline",
    explanation: "Varenicline, an α4β2 nicotinic partial agonist, is the most effective single agent for smoking cessation and is started about a week before the quit date (nausea and vivid dreams are the hallmark effects). Bupropion is effective but less so, clonidine is second-line, and naltrexone is not a cessation aid.",
    meds: ["varenicline", "bupropion", "clonidine", "naltrexone"],
    disorder: "Tobacco use disorder",
    difficulty: 1,
    tags: ["first-line"],
    source: { name: "Varenicline monograph / EAGLES", origin: "monograph" }
  },
  {
    id: "vs_tobacco_bupropion_dual",
    stem: "A 40-year-old smoker also has untreated major depression and no seizure or eating disorder history. He would prefer a single medication that helps both his mood and quitting smoking. Which is the best choice?",
    options: ["Bupropion", "Varenicline", "Escitalopram", "Clonidine"],
    answer: "Bupropion",
    explanation: "Bupropion treats major depression and is an established smoking-cessation aid (marketed as Zyban), making it the efficient single agent here — provided there is no seizure disorder or eating disorder, in which it is contraindicated. Varenicline aids cessation but not depression, escitalopram treats depression but not smoking, and clonidine is only a second-line cessation option.",
    meds: ["bupropion", "varenicline", "escitalopram", "clonidine"],
    disorder: "Tobacco use disorder",
    difficulty: 2,
    tags: ["dual-purpose", "depression"],
    source: { name: "Bupropion monograph (MDD + Zyban)", origin: "monograph" }
  },

  // ===================== ADHD =====================
  {
    id: "vs_adhd_stimulant_first_line",
    stem: "A healthy 24-year-old with newly diagnosed ADHD, no cardiac disease and no substance-use concerns, wants the most effective pharmacotherapy. Which agent class is first-line?",
    options: ["Lisdexamfetamine", "Atomoxetine", "Guanfacine XR", "Clonidine"],
    answer: "Lisdexamfetamine",
    explanation: "Stimulants are the most effective, first-line treatment for ADHD in patients without a contraindication; lisdexamfetamine is a stimulant (a prodrug of dextroamphetamine). Atomoxetine, guanfacine XR, and clonidine are non-stimulants reserved mainly for patients who cannot tolerate, misuse, or fail stimulants.",
    meds: ["lisdexamfetamine", "atomoxetine", "guanfacine", "clonidine"],
    disorder: "ADHD",
    difficulty: 1,
    tags: ["first-line", "stimulant"],
    source: { name: "CADDRA ADHD guideline", origin: "authored" }
  },
  {
    id: "vs_adhd_misuse_atomoxetine",
    stem: "A 30-year-old with ADHD has an active stimulant use disorder and a documented history of diverting medication. He needs effective ADHD treatment with the lowest misuse and diversion risk. Which agent is preferred?",
    options: ["Atomoxetine", "Dextroamphetamine", "Methylphenidate", "Mixed Amphetamine Salts"],
    answer: "Atomoxetine",
    explanation: "Atomoxetine is a non-controlled selective norepinephrine reuptake inhibitor with no abuse or diversion potential, making it preferred when misuse risk is high (it takes several weeks to work). Dextroamphetamine, methylphenidate, and mixed amphetamine salts are all controlled stimulants with abuse liability.",
    meds: ["atomoxetine", "dextroamphetamine", "methylphenidate", "amphetamine_salts"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["misuse", "special-population"],
    source: { name: "Atomoxetine monograph (non-controlled NRI)", origin: "monograph" }
  },
  {
    id: "vs_adhd_cardiac_avoid_stimulant",
    stem: "A 15-year-old with ADHD is found to have hypertrophic cardiomyopathy on cardiology work-up. Which ADHD medication is the most clearly contraindicated?",
    options: ["Lisdexamfetamine", "Atomoxetine", "Guanfacine XR", "Clonidine"],
    answer: "Lisdexamfetamine",
    explanation: "Stimulants such as lisdexamfetamine carry a risk of sudden cardiac death in patients with serious structural heart disease and should be avoided in hypertrophic cardiomyopathy. The non-stimulants are comparatively safer here — atomoxetine raises HR/BP modestly, and the α2 agonists tend to lower them — but the stimulant is the one to avoid outright.",
    meds: ["lisdexamfetamine", "atomoxetine", "guanfacine", "clonidine"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["cardiac", "contraindication"],
    source: { name: "Stimulant cardiac warnings", origin: "monograph" }
  },
  {
    id: "vs_adhd_maoi_guanfacine",
    stem: "An adult with treatment-refractory depression is stable on phenelzine and now needs treatment for comorbid ADHD. Which agent can be used without risking a hypertensive crisis?",
    options: ["Guanfacine XR", "Methylphenidate", "Lisdexamfetamine", "Atomoxetine"],
    answer: "Guanfacine XR",
    explanation: "Stimulants and atomoxetine are contraindicated with an MAOI or within 14 days of stopping one because of hypertensive-crisis risk. The α2A agonist guanfacine XR carries no MAOI-washout requirement and can be used, with monitoring for bradycardia and hypotension.",
    meds: ["guanfacine", "methylphenidate", "lisdexamfetamine", "atomoxetine", "phenelzine"],
    disorder: "ADHD",
    difficulty: 2,
    tags: ["maoi", "interaction"],
    source: { name: "Stimulant/atomoxetine MAOI washout", origin: "monograph" }
  },
  {
    id: "vs_adhd_mechanism_amphetamine",
    stem: "On an oral board, you are asked which ADHD stimulant works primarily by driving presynaptic RELEASE of dopamine and norepinephrine (reversing the transporters), rather than by pure reuptake blockade. Which is it?",
    options: ["Dextroamphetamine", "Methylphenidate", "Atomoxetine", "Guanfacine XR"],
    answer: "Dextroamphetamine",
    explanation: "Amphetamines such as dextroamphetamine enter the neuron and trigger vesicular release of dopamine and norepinephrine (and block reuptake). Methylphenidate is a pure reuptake blocker, atomoxetine is a selective NE reuptake inhibitor, and guanfacine is a postsynaptic α2A agonist — none of which drive presynaptic release.",
    meds: ["dextroamphetamine", "methylphenidate", "atomoxetine", "guanfacine"],
    disorder: "ADHD",
    difficulty: 3,
    tags: ["mechanism"],
    source: { name: "Stimulant pharmacology", origin: "authored" }
  },

  // ===================== INSOMNIA =====================
  {
    id: "vs_insomnia_elderly_dora",
    stem: "A 78-year-old with chronic insomnia and a prior fall wants ongoing pharmacotherapy. You want to minimize fall risk and next-day impairment. Which agent is the most appropriate?",
    options: ["Daridorexant", "Zopiclone", "Temazepam", "Flurazepam"],
    answer: "Daridorexant",
    explanation: "Daridorexant is a dual orexin antagonist with a short half-life and the least next-day impairment, avoiding the GABA-mediated fall/confusion risk of the other options. Benzodiazepine hypnotics (temazepam, flurazepam) and Z-drugs (zopiclone) are Beers-listed to avoid in older adults, and flurazepam's long-lived active metabolite accumulates.",
    meds: ["daridorexant", "zopiclone", "temazepam", "flurazepam"],
    disorder: "Insomnia",
    difficulty: 2,
    tags: ["elderly", "beers"],
    source: { name: "Beers criteria / daridorexant monograph", origin: "monograph" }
  },
  {
    id: "vs_insomnia_zdrug_complex_behaviour",
    stem: "Two weeks after starting a hypnotic, a patient's partner reports she has driven the car and prepared food while asleep, with no memory of these events the next morning. Which drug is the classic cause of this?",
    options: ["Zolpidem", "Melatonin", "Ramelteon", "Buspirone"],
    answer: "Zolpidem",
    explanation: "Z-drugs such as zolpidem carry a boxed/serious warning for complex sleep behaviours — sleep-driving, sleep-eating and sleep-walking with anterograde amnesia — and should be discontinued if these occur. Melatonin, the melatonin agonist ramelteon, and the anxiolytic buspirone are not characteristically implicated.",
    meds: ["zolpidem", "melatonin", "ramelteon", "buspirone"],
    disorder: "Insomnia",
    difficulty: 2,
    tags: ["complex-sleep-behaviour", "z-drug"],
    source: { name: "Zolpidem monograph (boxed warning)", origin: "monograph" }
  },
  {
    id: "vs_insomnia_ramelteon_fluvoxamine",
    stem: "A patient stabilized on fluvoxamine for OCD now needs a hypnotic for sleep-onset insomnia. Which agent is contraindicated because of a major CYP1A2 interaction?",
    options: ["Ramelteon", "Zopiclone", "Trazodone", "Temazepam"],
    answer: "Ramelteon",
    explanation: "Fluvoxamine is a potent CYP1A2 inhibitor that dramatically raises ramelteon (and melatonin) levels, so the combination is contraindicated. Zopiclone, trazodone, and temazepam are not CYP1A2-dependent in the same way and are not contraindicated with fluvoxamine on that basis.",
    meds: ["ramelteon", "fluvoxamine", "zopiclone", "trazodone", "temazepam"],
    disorder: "Insomnia",
    difficulty: 3,
    tags: ["interaction", "cyp1a2"],
    source: { name: "Ramelteon monograph (fluvoxamine)", origin: "monograph" }
  },
  {
    id: "vs_insomnia_maintenance_doxepin",
    stem: "A 72-year-old has sleep-MAINTENANCE insomnia with frequent early-morning awakenings and wants a non-controlled option with a low fall/amnesia risk. Which is the best choice?",
    options: ["Doxepin", "Triazolam", "Zolpidem", "Flurazepam"],
    answer: "Doxepin",
    explanation: "At low dose (3–6 mg) doxepin acts as a selective H1 antihistamine for sleep maintenance, is non-controlled, and is comparatively better studied in older adults. Triazolam causes marked amnesia and early rebound, and zolpidem and flurazepam are on Beers avoid lists for older adults.",
    meds: ["doxepin", "triazolam", "zolpidem", "flurazepam"],
    disorder: "Insomnia",
    difficulty: 3,
    tags: ["elderly", "maintenance"],
    source: { name: "Low-dose doxepin monograph", origin: "monograph" }
  },
  {
    id: "vs_insomnia_depression_mirtazapine",
    stem: "A 60-year-old with major depression also has prominent insomnia, poor appetite and weight loss. Which single agent best addresses all of these together?",
    options: ["Mirtazapine", "Trazodone", "Zopiclone", "Bupropion"],
    answer: "Mirtazapine",
    explanation: "Mirtazapine treats depression while its sedating (especially at low dose) and appetite-stimulating properties target insomnia, poor appetite and weight loss in one agent. Trazodone and zopiclone address only sleep, and bupropion is activating and can worsen insomnia.",
    meds: ["mirtazapine", "trazodone", "zopiclone", "bupropion"],
    disorder: "Major depressive disorder",
    difficulty: 2,
    tags: ["insomnia", "depression", "special-population"],
    source: { name: "Mirtazapine monograph", origin: "monograph" }
  }
];
