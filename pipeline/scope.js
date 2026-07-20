// scope.js — the in-scope molecule list that drives the pipeline.
//
// The DPD query finalises Canadian availability: molecules that come back not-approved are
// kept and flagged usOnly. Each entry:
//   id            stable slug (also the key user progress is stored against)
//   generic       display name (INN, title case)
//   class         top-level class (matches DECK_MANIFEST + app grouping)
//   subclass      finer grouping
//   searchTerms   DPD activeingredient ingredientname queries (partial match)
//   aiCountMax    drop products with more active ingredients than this (mono-agent filter)
//   genericName   openFDA generic_name / DailyMed drug_name (defaults to a cleaned id)
//   substance     openFDA substance_name fallback
//   faersName     FAERS medicinalproduct term (defaults to genericName)
//   difficulty    difficulty prior 0..1 (higher = more Practice reps until mastery proven)
//   usOnly        pre-marked US-only-for-awareness (pipeline still verifies via DPD)
//   controlledHint text hint for controlled status if DPD schedule is generic

const A = (o) => o; // identity helper for readability

export const SCOPE = [
  // ---------------- Antidepressants — SSRIs ----------------
  A({ id: 'fluoxetine', generic: 'Fluoxetine', class: 'Antidepressant', subclass: 'SSRI', searchTerms: ['fluoxetine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'sertraline', generic: 'Sertraline', class: 'Antidepressant', subclass: 'SSRI', searchTerms: ['sertraline'], aiCountMax: 1, difficulty: 0.45 }),
  A({ id: 'paroxetine', generic: 'Paroxetine', class: 'Antidepressant', subclass: 'SSRI', searchTerms: ['paroxetine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'citalopram', generic: 'Citalopram', class: 'Antidepressant', subclass: 'SSRI', searchTerms: ['citalopram'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'escitalopram', generic: 'Escitalopram', class: 'Antidepressant', subclass: 'SSRI', searchTerms: ['escitalopram'], aiCountMax: 1, difficulty: 0.4 }),
  A({ id: 'fluvoxamine', generic: 'Fluvoxamine', class: 'Antidepressant', subclass: 'SSRI', searchTerms: ['fluvoxamine'], aiCountMax: 1, difficulty: 0.55 }),

  // ---------------- Antidepressants — SNRIs ----------------
  A({ id: 'venlafaxine', generic: 'Venlafaxine', class: 'Antidepressant', subclass: 'SNRI', searchTerms: ['venlafaxine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'desvenlafaxine', generic: 'Desvenlafaxine', class: 'Antidepressant', subclass: 'SNRI', searchTerms: ['desvenlafaxine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'duloxetine', generic: 'Duloxetine', class: 'Antidepressant', subclass: 'SNRI', searchTerms: ['duloxetine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'levomilnacipran', generic: 'Levomilnacipran', class: 'Antidepressant', subclass: 'SNRI', searchTerms: ['levomilnacipran'], aiCountMax: 1, difficulty: 0.6 }),

  // ---------------- Antidepressants — NDRI / atypical ----------------
  A({ id: 'bupropion', generic: 'Bupropion', class: 'Antidepressant', subclass: 'NDRI', searchTerms: ['bupropion'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'mirtazapine', generic: 'Mirtazapine', class: 'Antidepressant', subclass: 'Atypical (NaSSA)', searchTerms: ['mirtazapine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'trazodone', generic: 'Trazodone', class: 'Antidepressant', subclass: 'Atypical (SARI)', searchTerms: ['trazodone'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'vortioxetine', generic: 'Vortioxetine', class: 'Antidepressant', subclass: 'Atypical (multimodal)', searchTerms: ['vortioxetine'], aiCountMax: 1, difficulty: 0.55 }),

  // ---------------- Antidepressants — TCAs ----------------
  A({ id: 'amitriptyline', generic: 'Amitriptyline', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['amitriptyline'], aiCountMax: 1, difficulty: 0.65 }),
  A({ id: 'nortriptyline', generic: 'Nortriptyline', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['nortriptyline'], aiCountMax: 1, difficulty: 0.65 }),
  A({ id: 'imipramine', generic: 'Imipramine', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['imipramine'], aiCountMax: 1, difficulty: 0.65 }),
  A({ id: 'desipramine', generic: 'Desipramine', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['desipramine'], aiCountMax: 1, difficulty: 0.65 }),
  A({ id: 'clomipramine', generic: 'Clomipramine', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['clomipramine'], aiCountMax: 1, difficulty: 0.65 }),
  A({ id: 'doxepin', generic: 'Doxepin', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['doxepin'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'trimipramine', generic: 'Trimipramine', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['trimipramine'], aiCountMax: 1, difficulty: 0.6 }),

  // ---------------- Antidepressants — MAOIs / RIMA ----------------
  A({ id: 'phenelzine', generic: 'Phenelzine', class: 'Antidepressant', subclass: 'MAOI', searchTerms: ['phenelzine'], aiCountMax: 1, difficulty: 0.8 }),
  A({ id: 'tranylcypromine', generic: 'Tranylcypromine', class: 'Antidepressant', subclass: 'MAOI', searchTerms: ['tranylcypromine'], aiCountMax: 1, difficulty: 0.8 }),
  A({ id: 'moclobemide', generic: 'Moclobemide', class: 'Antidepressant', subclass: 'RIMA', searchTerms: ['moclobemide'], aiCountMax: 1, difficulty: 0.65, note: 'Canada-specific RIMA' }),
  A({ id: 'selegiline', generic: 'Selegiline', class: 'Antidepressant', subclass: 'MAOI-B', searchTerms: ['selegiline'], aiCountMax: 1, difficulty: 0.7 }),

  // ---------------- Antidepressants — novel ----------------
  A({ id: 'esketamine', generic: 'Esketamine', class: 'Antidepressant', subclass: 'NMDA antagonist', searchTerms: ['esketamine'], aiCountMax: 1, difficulty: 0.7, controlledHint: 'Controlled (nasal spray, in-clinic REMS)' }),

  // ---------------- Antipsychotics — first-generation ----------------
  A({ id: 'haloperidol', generic: 'Haloperidol', class: 'Antipsychotic', subclass: 'FGA (high-potency)', searchTerms: ['haloperidol'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'chlorpromazine', generic: 'Chlorpromazine', class: 'Antipsychotic', subclass: 'FGA (low-potency)', searchTerms: ['chlorpromazine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'loxapine', generic: 'Loxapine', class: 'Antipsychotic', subclass: 'FGA (mid-potency)', searchTerms: ['loxapine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'perphenazine', generic: 'Perphenazine', class: 'Antipsychotic', subclass: 'FGA (mid-potency)', searchTerms: ['perphenazine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'fluphenazine', generic: 'Fluphenazine', class: 'Antipsychotic', subclass: 'FGA (high-potency, LAI)', searchTerms: ['fluphenazine'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'zuclopenthixol', generic: 'Zuclopenthixol', class: 'Antipsychotic', subclass: 'FGA (thioxanthene)', searchTerms: ['zuclopenthixol'], aiCountMax: 1, difficulty: 0.65, note: 'Canada-specific' }),
  A({ id: 'flupenthixol', generic: 'Flupenthixol', class: 'Antipsychotic', subclass: 'FGA (thioxanthene)', searchTerms: ['flupentixol', 'flupenthixol'], aiCountMax: 1, difficulty: 0.65, note: 'Canada-specific' }),
  A({ id: 'pimozide', generic: 'Pimozide', class: 'Antipsychotic', subclass: 'FGA (diphenylbutylpiperidine)', searchTerms: ['pimozide'], aiCountMax: 1, difficulty: 0.7 }),
  A({ id: 'methotrimeprazine', generic: 'Methotrimeprazine', class: 'Antipsychotic', subclass: 'FGA (phenothiazine)', searchTerms: ['methotrimeprazine'], aiCountMax: 1, difficulty: 0.65, note: 'Canada-specific; a.k.a. levomepromazine' }),

  // ---------------- Antipsychotics — second-generation ----------------
  A({ id: 'risperidone', generic: 'Risperidone', class: 'Antipsychotic', subclass: 'SGA', searchTerms: ['risperidone'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'paliperidone', generic: 'Paliperidone', class: 'Antipsychotic', subclass: 'SGA (LAI)', searchTerms: ['paliperidone'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'olanzapine', generic: 'Olanzapine', class: 'Antipsychotic', subclass: 'SGA', searchTerms: ['olanzapine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'quetiapine', generic: 'Quetiapine', class: 'Antipsychotic', subclass: 'SGA', searchTerms: ['quetiapine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'clozapine', generic: 'Clozapine', class: 'Antipsychotic', subclass: 'SGA (TRS)', searchTerms: ['clozapine'], aiCountMax: 1, difficulty: 0.85, note: 'High-complexity: ANC monitoring' }),
  A({ id: 'ziprasidone', generic: 'Ziprasidone', class: 'Antipsychotic', subclass: 'SGA', searchTerms: ['ziprasidone'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'aripiprazole', generic: 'Aripiprazole', class: 'Antipsychotic', subclass: 'SGA (partial agonist)', searchTerms: ['aripiprazole'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'asenapine', generic: 'Asenapine', class: 'Antipsychotic', subclass: 'SGA', searchTerms: ['asenapine'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'lurasidone', generic: 'Lurasidone', class: 'Antipsychotic', subclass: 'SGA', searchTerms: ['lurasidone'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'brexpiprazole', generic: 'Brexpiprazole', class: 'Antipsychotic', subclass: 'SGA (partial agonist)', searchTerms: ['brexpiprazole'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'cariprazine', generic: 'Cariprazine', class: 'Antipsychotic', subclass: 'SGA (partial agonist)', searchTerms: ['cariprazine'], aiCountMax: 1, difficulty: 0.6 }),

  // ---------------- Antipsychotics — US-only for awareness ----------------
  A({ id: 'lumateperone', generic: 'Lumateperone', class: 'Antipsychotic', subclass: 'SGA', searchTerms: ['lumateperone'], aiCountMax: 1, difficulty: 0.6, usOnly: true }),
  A({ id: 'xanomeline_trospium', generic: 'Xanomeline–Trospium', class: 'Antipsychotic', subclass: 'Muscarinic agonist (novel)', searchTerms: ['xanomeline'], genericName: 'xanomeline and trospium chloride', difficulty: 0.7, usOnly: true }),
  A({ id: 'zuranolone', generic: 'Zuranolone', class: 'Antidepressant', subclass: 'Neurosteroid (GABA-A PAM)', searchTerms: ['zuranolone'], aiCountMax: 1, difficulty: 0.65, usOnly: true }),

  // ---------------- Mood stabilizers ----------------
  A({ id: 'lithium', generic: 'Lithium', class: 'Mood stabilizer', subclass: 'Ion', searchTerms: ['lithium'], aiCountMax: 1, genericName: 'lithium carbonate', faersName: 'lithium', difficulty: 0.85, note: 'Therapeutic level 0.6–1.2' }),
  A({ id: 'valproate', generic: 'Valproate / Divalproex', class: 'Mood stabilizer', subclass: 'Anticonvulsant', searchTerms: ['divalproex', 'valproic acid'], genericName: 'divalproex sodium', substance: 'valproic acid', faersName: 'valproate', difficulty: 0.8 }),
  A({ id: 'carbamazepine', generic: 'Carbamazepine', class: 'Mood stabilizer', subclass: 'Anticonvulsant', searchTerms: ['carbamazepine'], aiCountMax: 1, difficulty: 0.8 }),
  A({ id: 'lamotrigine', generic: 'Lamotrigine', class: 'Mood stabilizer', subclass: 'Anticonvulsant', searchTerms: ['lamotrigine'], aiCountMax: 1, difficulty: 0.8, note: 'SJS/TEN titration' }),
  A({ id: 'oxcarbazepine', generic: 'Oxcarbazepine', class: 'Mood stabilizer', subclass: 'Anticonvulsant', searchTerms: ['oxcarbazepine'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'gabapentin', generic: 'Gabapentin', class: 'Mood stabilizer', subclass: 'Anticonvulsant (adjunct)', searchTerms: ['gabapentin'], aiCountMax: 1, difficulty: 0.4 }),
  A({ id: 'pregabalin', generic: 'Pregabalin', class: 'Mood stabilizer', subclass: 'Anticonvulsant (adjunct)', searchTerms: ['pregabalin'], aiCountMax: 1, difficulty: 0.45 }),
  A({ id: 'topiramate', generic: 'Topiramate', class: 'Mood stabilizer', subclass: 'Anticonvulsant (adjunct)', searchTerms: ['topiramate'], aiCountMax: 1, difficulty: 0.55 }),

  // ---------------- Anxiolytics / hypnotics — benzodiazepines ----------------
  A({ id: 'lorazepam', generic: 'Lorazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (short-acting)', searchTerms: ['lorazepam'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'clonazepam', generic: 'Clonazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (long-acting)', searchTerms: ['clonazepam'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'diazepam', generic: 'Diazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (long-acting)', searchTerms: ['diazepam'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'alprazolam', generic: 'Alprazolam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (short-acting)', searchTerms: ['alprazolam'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'oxazepam', generic: 'Oxazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (short-acting)', searchTerms: ['oxazepam'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'temazepam', generic: 'Temazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (hypnotic)', searchTerms: ['temazepam'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'chlordiazepoxide', generic: 'Chlordiazepoxide', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (long-acting)', searchTerms: ['chlordiazepoxide'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'midazolam', generic: 'Midazolam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (ultra-short)', searchTerms: ['midazolam'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Targeted Substance (Canada)' }),

  // ---------------- Anxiolytics / hypnotics — Z-drugs & others ----------------
  A({ id: 'zopiclone', generic: 'Zopiclone', class: 'Anxiolytic / hypnotic', subclass: 'Z-drug', searchTerms: ['zopiclone'], aiCountMax: 1, difficulty: 0.45, note: 'Canadian Z-drug standard' }),
  A({ id: 'zolpidem', generic: 'Zolpidem', class: 'Anxiolytic / hypnotic', subclass: 'Z-drug', searchTerms: ['zolpidem'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'buspirone', generic: 'Buspirone', class: 'Anxiolytic / hypnotic', subclass: '5-HT1A partial agonist', searchTerms: ['buspirone'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'hydroxyzine', generic: 'Hydroxyzine', class: 'Anxiolytic / hypnotic', subclass: 'Antihistamine', searchTerms: ['hydroxyzine'], aiCountMax: 1, difficulty: 0.4 }),

  // ---------------- Anxiolytics / hypnotics — orexin / melatonergic ----------------
  A({ id: 'lemborexant', generic: 'Lemborexant', class: 'Anxiolytic / hypnotic', subclass: 'Orexin antagonist (DORA)', searchTerms: ['lemborexant'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'daridorexant', generic: 'Daridorexant', class: 'Anxiolytic / hypnotic', subclass: 'Orexin antagonist (DORA)', searchTerms: ['daridorexant'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'melatonin', generic: 'Melatonin', class: 'Anxiolytic / hypnotic', subclass: 'Melatonergic', searchTerms: ['melatonin'], aiCountMax: 1, difficulty: 0.3, note: 'OTC (NPN, not DIN)' }),
  A({ id: 'ramelteon', generic: 'Ramelteon', class: 'Anxiolytic / hypnotic', subclass: 'Melatonin agonist', searchTerms: ['ramelteon'], aiCountMax: 1, difficulty: 0.5, usOnly: true }),

  // ---------------- ADHD ----------------
  A({ id: 'methylphenidate', generic: 'Methylphenidate', class: 'ADHD', subclass: 'Stimulant', searchTerms: ['methylphenidate'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Controlled Drug (Schedule III/G, Canada)' }),
  A({ id: 'dextroamphetamine', generic: 'Dextroamphetamine', class: 'ADHD', subclass: 'Stimulant', searchTerms: ['dextroamphetamine'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Controlled Drug (Canada)' }),
  A({ id: 'lisdexamfetamine', generic: 'Lisdexamfetamine', class: 'ADHD', subclass: 'Stimulant (prodrug)', searchTerms: ['lisdexamfetamine'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Controlled Drug (Canada)' }),
  A({ id: 'amphetamine_salts', generic: 'Mixed Amphetamine Salts', class: 'ADHD', subclass: 'Stimulant', searchTerms: ['amphetamine'], genericName: 'amphetamine', faersName: 'adderall', difficulty: 0.6, controlledHint: 'Controlled Drug (Canada)' }),
  A({ id: 'atomoxetine', generic: 'Atomoxetine', class: 'ADHD', subclass: 'NRI (non-stimulant)', searchTerms: ['atomoxetine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'guanfacine', generic: 'Guanfacine XR', class: 'ADHD', subclass: 'α2A agonist (non-stimulant)', searchTerms: ['guanfacine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'clonidine', generic: 'Clonidine', class: 'ADHD', subclass: 'α2 agonist', searchTerms: ['clonidine'], aiCountMax: 1, difficulty: 0.5 }),

  // ---------------- Substance use ----------------
  A({ id: 'methadone', generic: 'Methadone', class: 'Substance use', subclass: 'Opioid agonist (OAT)', searchTerms: ['methadone'], aiCountMax: 1, difficulty: 0.75, controlledHint: 'Narcotic (Canada)' }),
  A({ id: 'buprenorphine', generic: 'Buprenorphine', class: 'Substance use', subclass: 'Partial opioid agonist', searchTerms: ['buprenorphine'], aiCountMax: 1, difficulty: 0.65, controlledHint: 'Narcotic / controlled (Canada)' }),
  A({ id: 'buprenorphine_naloxone', generic: 'Buprenorphine / Naloxone', class: 'Substance use', subclass: 'OAT (combination)', searchTerms: ['buprenorphine'], genericName: 'buprenorphine and naloxone', faersName: 'suboxone', difficulty: 0.65, controlledHint: 'Controlled (Canada)' }),
  A({ id: 'naltrexone', generic: 'Naltrexone', class: 'Substance use', subclass: 'Opioid antagonist', searchTerms: ['naltrexone'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'acamprosate', generic: 'Acamprosate', class: 'Substance use', subclass: 'Anti-craving (AUD)', searchTerms: ['acamprosate'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'disulfiram', generic: 'Disulfiram', class: 'Substance use', subclass: 'Aversive (AUD)', searchTerms: ['disulfiram'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'varenicline', generic: 'Varenicline', class: 'Substance use', subclass: 'Nicotinic partial agonist', searchTerms: ['varenicline'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'naloxone', generic: 'Naloxone', class: 'Substance use', subclass: 'Opioid antagonist (rescue)', searchTerms: ['naloxone'], aiCountMax: 1, difficulty: 0.45 }),

  // ---------------- Dementia ----------------
  A({ id: 'donepezil', generic: 'Donepezil', class: 'Dementia', subclass: 'Cholinesterase inhibitor', searchTerms: ['donepezil'], aiCountMax: 1, difficulty: 0.45 }),
  A({ id: 'rivastigmine', generic: 'Rivastigmine', class: 'Dementia', subclass: 'Cholinesterase inhibitor', searchTerms: ['rivastigmine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'galantamine', generic: 'Galantamine', class: 'Dementia', subclass: 'Cholinesterase inhibitor', searchTerms: ['galantamine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'memantine', generic: 'Memantine', class: 'Dementia', subclass: 'NMDA antagonist', searchTerms: ['memantine'], aiCountMax: 1, difficulty: 0.45 }),

  // ---------------- Adjuncts ----------------
  A({ id: 'benztropine', generic: 'Benztropine', class: 'Adjunct', subclass: 'Anticholinergic (EPS)', searchTerms: ['benztropine', 'benzatropine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'procyclidine', generic: 'Procyclidine', class: 'Adjunct', subclass: 'Anticholinergic (EPS)', searchTerms: ['procyclidine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'propranolol', generic: 'Propranolol', class: 'Adjunct', subclass: 'Beta-blocker (akathisia/anxiety)', searchTerms: ['propranolol'], aiCountMax: 1, difficulty: 0.45 }),
  A({ id: 'prazosin', generic: 'Prazosin', class: 'Adjunct', subclass: 'α1 antagonist (PTSD nightmares)', searchTerms: ['prazosin'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'modafinil', generic: 'Modafinil', class: 'Adjunct', subclass: 'Wakefulness agent', searchTerms: ['modafinil'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Controlled (Canada)' }),
  A({ id: 'armodafinil', generic: 'Armodafinil', class: 'Adjunct', subclass: 'Wakefulness agent', searchTerms: ['armodafinil'], aiCountMax: 1, difficulty: 0.5, usOnly: true }),

  // ================= Supplementary high-yield Canadian agents (toward ~120–130) =================
  // DPD verifies Canadian availability; anything not approved is kept + flagged usOnly.

  // Antidepressants — older tetracyclic / TCA-adjacent
  A({ id: 'maprotiline', generic: 'Maprotiline', class: 'Antidepressant', subclass: 'Tetracyclic', searchTerms: ['maprotiline'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'amoxapine', generic: 'Amoxapine', class: 'Antidepressant', subclass: 'TCA (tetracyclic)', searchTerms: ['amoxapine'], aiCountMax: 1, difficulty: 0.6 }),
  A({ id: 'protriptyline', generic: 'Protriptyline', class: 'Antidepressant', subclass: 'TCA', searchTerms: ['protriptyline'], aiCountMax: 1, difficulty: 0.6 }),

  // Antipsychotics — additional FGAs + LAI
  A({ id: 'trifluoperazine', generic: 'Trifluoperazine', class: 'Antipsychotic', subclass: 'FGA (phenothiazine)', searchTerms: ['trifluoperazine'], aiCountMax: 1, difficulty: 0.55 }),
  A({ id: 'prochlorperazine', generic: 'Prochlorperazine', class: 'Antipsychotic', subclass: 'FGA (phenothiazine)', searchTerms: ['prochlorperazine'], aiCountMax: 1, difficulty: 0.5, note: 'Mostly used as antiemetic' }),
  A({ id: 'pipotiazine', generic: 'Pipotiazine', class: 'Antipsychotic', subclass: 'FGA (LAI)', searchTerms: ['pipotiazine', 'pipotiazine palmitate'], aiCountMax: 1, difficulty: 0.6, note: 'Canada-specific LAI (Piportil L4)' }),
  A({ id: 'droperidol', generic: 'Droperidol', class: 'Antipsychotic', subclass: 'FGA (butyrophenone)', searchTerms: ['droperidol'], aiCountMax: 1, difficulty: 0.6, note: 'QT boxed warning' }),

  // Movement disorders — VMAT2 inhibitors (tardive dyskinesia / chorea)
  A({ id: 'tetrabenazine', generic: 'Tetrabenazine', class: 'Adjunct', subclass: 'VMAT2 inhibitor', searchTerms: ['tetrabenazine'], aiCountMax: 1, difficulty: 0.6, note: 'Canada (Nitoman)' }),
  A({ id: 'valbenazine', generic: 'Valbenazine', class: 'Adjunct', subclass: 'VMAT2 inhibitor', searchTerms: ['valbenazine'], aiCountMax: 1, difficulty: 0.6, usOnly: true }),
  A({ id: 'deutetrabenazine', generic: 'Deutetrabenazine', class: 'Adjunct', subclass: 'VMAT2 inhibitor', searchTerms: ['deutetrabenazine'], aiCountMax: 1, difficulty: 0.6, usOnly: true }),
  A({ id: 'amantadine', generic: 'Amantadine', class: 'Adjunct', subclass: 'Dopaminergic (EPS/TD)', searchTerms: ['amantadine'], aiCountMax: 1, difficulty: 0.5 }),
  A({ id: 'trihexyphenidyl', generic: 'Trihexyphenidyl', class: 'Adjunct', subclass: 'Anticholinergic (EPS)', searchTerms: ['trihexyphenidyl'], aiCountMax: 1, difficulty: 0.55 }),

  // Benzodiazepines — additional Canadian agents
  A({ id: 'bromazepam', generic: 'Bromazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (intermediate)', searchTerms: ['bromazepam'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)', note: 'Canada (Lectopam)' }),
  A({ id: 'nitrazepam', generic: 'Nitrazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (hypnotic)', searchTerms: ['nitrazepam'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)', note: 'Canada (Mogadon)' }),
  A({ id: 'clobazam', generic: 'Clobazam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (1,5-)', searchTerms: ['clobazam'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'flurazepam', generic: 'Flurazepam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (hypnotic, long)', searchTerms: ['flurazepam'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'triazolam', generic: 'Triazolam', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (ultra-short hypnotic)', searchTerms: ['triazolam'], aiCountMax: 1, difficulty: 0.55, controlledHint: 'Targeted Substance (Canada)' }),
  A({ id: 'clorazepate', generic: 'Clorazepate', class: 'Anxiolytic / hypnotic', subclass: 'Benzodiazepine (long-acting)', searchTerms: ['clorazepate'], aiCountMax: 1, difficulty: 0.5, controlledHint: 'Targeted Substance (Canada)' }),

  // Sedatives / withdrawal
  A({ id: 'phenobarbital', generic: 'Phenobarbital', class: 'Anxiolytic / hypnotic', subclass: 'Barbiturate', searchTerms: ['phenobarbital'], aiCountMax: 1, difficulty: 0.6, controlledHint: 'Controlled (Canada)', note: 'Alcohol/sedative withdrawal, seizures' }),

  // Novel / US-only for awareness
  A({ id: 'pimavanserin', generic: 'Pimavanserin', class: 'Antipsychotic', subclass: '5-HT2A inverse agonist', searchTerms: ['pimavanserin'], aiCountMax: 1, difficulty: 0.65, usOnly: true, note: 'Parkinson disease psychosis' }),
  A({ id: 'brexanolone', generic: 'Brexanolone', class: 'Antidepressant', subclass: 'Neurosteroid (GABA-A PAM)', searchTerms: ['brexanolone'], aiCountMax: 1, difficulty: 0.7, usOnly: true, note: 'Postpartum depression, IV' }),
  A({ id: 'dexmedetomidine', generic: 'Dexmedetomidine (sublingual)', class: 'Adjunct', subclass: 'α2 agonist (agitation)', searchTerms: ['dexmedetomidine'], aiCountMax: 1, difficulty: 0.6, usOnly: true, note: 'Igalmi — acute agitation' }),
];

// classes in display order
export const CLASSES = [
  'Antidepressant', 'Antipsychotic', 'Mood stabilizer', 'Anxiolytic / hypnotic',
  'ADHD', 'Substance use', 'Dementia', 'Adjunct',
];

export function scopeByClass(className) {
  return SCOPE.filter((s) => s.class === className);
}

export function scopeById(id) {
  return SCOPE.find((s) => s.id === id) || null;
}
