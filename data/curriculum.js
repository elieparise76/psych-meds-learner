/* curriculum.js — the learning PATH (window.CURRICULUM). Authored, clinician-orderable content;
 * decoupled from user state exactly like vignettes.js, so it can be reordered/expanded without
 * touching anyone's progress. The app never mutates it.
 *
 * Shape: a set of class BRANCHES (columns). Each branch is a ladder of TIERS ordered first-line
 * (top) -> obscure (bottom); tier 0 is "the basics". Every one of the 120 deck ids appears once.
 * Progression is derived in tree.js: learn `gate` of a tier to open the next tier of that branch;
 * a branch's boss unlocks at `bossAt` of the branch learned. Core branches are open from the
 * start; `specialist` branches dim until `specialistAtLearned` meds are learned anywhere.
 *
 * `keystones` maps high-yield ids to a rank (1 = keystone ★, 2 = major ★★) for visual weight. */
(function () {
  'use strict';

  window.CURRICULUM = {
    version: 1,
    gate: 0.5,                 // fraction of a tier's nodes to learn before the next tier opens (min 1)
    bossAt: 0.6,               // fraction of a branch's nodes learned before its boss unlocks
    specialistAtLearned: 5,    // meds learned (anywhere) before specialist branches light up

    keystones: {
      sertraline: 1, venlafaxine: 1, bupropion: 1, clomipramine: 1, phenelzine: 1, esketamine: 1,
      risperidone: 1, haloperidol: 1, clozapine: 2,
      lithium: 2, lamotrigine: 1,
      lorazepam: 1, zopiclone: 1,
      methylphenidate: 1,
      buprenorphine_naloxone: 1, methadone: 1,
      donepezil: 1,
      benztropine: 1, prazosin: 1,
    },

    branches: [
      {
        id: 'antidepressants', class: 'Antidepressant', title: 'Antidepressants', icon: '💊',
        blurb: 'Start here. Lift mood from SSRIs down to the specialist agents.',
        boss: { id: 'boss_antidepressants', title: 'Antidepressant boss', blurb: 'Tell the antidepressants apart under pressure.' },
        tiers: [
          { key: 'ssri', title: 'The basics · SSRIs', nodes: ['sertraline', 'escitalopram', 'fluoxetine', 'citalopram', 'paroxetine'] },
          { key: 'beyond-ssri', title: 'Beyond SSRIs', nodes: ['venlafaxine', 'duloxetine', 'desvenlafaxine', 'bupropion', 'mirtazapine', 'fluvoxamine'] },
          { key: 'atypical', title: 'Second-line & atypical', nodes: ['vortioxetine', 'trazodone', 'levomilnacipran', 'moclobemide'] },
          { key: 'tca', title: 'Tricyclics', nodes: ['amitriptyline', 'nortriptyline', 'clomipramine', 'imipramine', 'desipramine', 'doxepin', 'trimipramine', 'protriptyline', 'amoxapine', 'maprotiline'] },
          { key: 'maoi', title: 'MAOIs & interventional', nodes: ['phenelzine', 'tranylcypromine', 'selegiline', 'esketamine', 'zuranolone', 'brexanolone'] },
        ],
      },
      {
        id: 'antipsychotics', class: 'Antipsychotic', title: 'Antipsychotics', icon: '🧠',
        blurb: 'From first-line SGAs and haloperidol down to the legacy and novel agents.',
        boss: { id: 'boss_antipsychotics', title: 'Antipsychotic boss', blurb: 'Discriminate by metabolic, QTc, EPS and monitoring profile.' },
        tiers: [
          { key: 'first-line', title: 'The basics · first-line', nodes: ['risperidone', 'olanzapine', 'quetiapine', 'aripiprazole', 'haloperidol'] },
          { key: 'next-sga', title: 'Next-line SGAs', nodes: ['paliperidone', 'lurasidone', 'ziprasidone'] },
          { key: 'newer-cloz', title: 'Newer agonists & clozapine', nodes: ['brexpiprazole', 'cariprazine', 'asenapine', 'clozapine'] },
          { key: 'fga', title: 'Classic & depot FGAs', nodes: ['chlorpromazine', 'loxapine', 'perphenazine', 'fluphenazine', 'zuclopenthixol', 'flupenthixol'] },
          { key: 'legacy-novel', title: 'Legacy & novel', nodes: ['trifluoperazine', 'methotrimeprazine', 'pimozide', 'prochlorperazine', 'droperidol', 'pipotiazine', 'lumateperone', 'xanomeline_trospium', 'pimavanserin'] },
        ],
      },
      {
        id: 'mood', class: 'Mood stabilizer', title: 'Mood stabilizers', icon: '⚖️',
        blurb: 'The pillars — lithium, valproate, lamotrigine — then the anticonvulsant supporting cast.',
        boss: { id: 'boss_mood', title: 'Mood-stabilizer boss', blurb: 'Levels, teratogenicity, titration — choose right.' },
        tiers: [
          { key: 'pillars', title: 'The basics · pillars', nodes: ['lithium', 'valproate', 'lamotrigine'] },
          { key: 'other-ac', title: 'Other anticonvulsants', nodes: ['carbamazepine', 'oxcarbazepine'] },
          { key: 'adjunctive', title: 'Adjunctive', nodes: ['gabapentin', 'pregabalin', 'topiramate'] },
        ],
      },
      {
        id: 'anxiolytics', class: 'Anxiolytic / hypnotic', title: 'Anxiolytics & sleep', icon: '😌',
        blurb: 'Everyday benzos and the Z-drug down to procedural and legacy sedatives.',
        boss: { id: 'boss_anxiolytics', title: 'Anxiolytic boss', blurb: 'Half-life, hepatic safety, dependence — pick the right sedative.' },
        tiers: [
          { key: 'everyday', title: 'The basics · everyday', nodes: ['lorazepam', 'clonazepam', 'zopiclone'] },
          { key: 'common', title: 'Common anxiety & sleep', nodes: ['diazepam', 'alprazolam', 'buspirone', 'hydroxyzine', 'zolpidem'] },
          { key: 'other-newer', title: 'Other benzos & newer sleep', nodes: ['oxazepam', 'temazepam', 'bromazepam', 'chlordiazepoxide', 'lemborexant', 'daridorexant', 'melatonin'] },
          { key: 'procedural', title: 'Procedural & legacy', nodes: ['midazolam', 'triazolam', 'nitrazepam', 'flurazepam', 'clobazam', 'clorazepate', 'phenobarbital', 'ramelteon'] },
        ],
      },
      {
        id: 'adhd', class: 'ADHD', title: 'ADHD', icon: '⚡',
        blurb: 'First-line stimulants, then the alternatives and non-stimulants.',
        boss: { id: 'boss_adhd', title: 'ADHD boss', blurb: 'Stimulant vs non-stimulant, prodrug, onset — choose for the case.' },
        tiers: [
          { key: 'first-line', title: 'The basics · first-line', nodes: ['methylphenidate', 'lisdexamfetamine'] },
          { key: 'other-stim', title: 'Other stimulants', nodes: ['dextroamphetamine', 'amphetamine_salts'] },
          { key: 'non-stim', title: 'Non-stimulants', nodes: ['atomoxetine', 'guanfacine', 'clonidine'] },
        ],
      },
      {
        id: 'substance', class: 'Substance use', title: 'Substance use', icon: '💉', specialist: true,
        blurb: 'Opioid and alcohol use disorder — the core of addiction medicine.',
        boss: { id: 'boss_substance', title: 'Addictions boss', blurb: 'OAT induction, precipitated withdrawal, AUD choices.' },
        tiers: [
          { key: 'oud', title: 'The basics · OUD core', nodes: ['buprenorphine_naloxone', 'methadone', 'naloxone', 'naltrexone'] },
          { key: 'aud', title: 'AUD & cessation', nodes: ['acamprosate', 'disulfiram', 'varenicline'] },
          { key: 'other-form', title: 'Other formulations', nodes: ['buprenorphine'] },
        ],
      },
      {
        id: 'dementia', class: 'Dementia', title: 'Dementia', icon: '🧩', specialist: true,
        blurb: 'Cholinesterase inhibitors and the NMDA antagonist.',
        boss: { id: 'boss_dementia', title: 'Dementia boss', blurb: 'Mechanism, severity and formulation — choose the agent.' },
        tiers: [
          { key: 'chei', title: 'The basics · ChEIs', nodes: ['donepezil', 'rivastigmine'] },
          { key: 'addon', title: 'Add-on', nodes: ['galantamine', 'memantine'] },
        ],
      },
      {
        id: 'adjunct', class: 'Adjunct', title: 'Adjuncts & side effects', icon: '🛠️', specialist: true,
        blurb: 'The toolkit for drug-induced problems — EPS, akathisia, TD, nightmares.',
        boss: { id: 'boss_adjunct', title: 'Adjunct boss', blurb: 'Match the drug-induced syndrome to its antidote.' },
        tiers: [
          { key: 'eps', title: 'The basics · EPS & akathisia', nodes: ['benztropine', 'propranolol'] },
          { key: 'anticholinergic', title: 'More adjuncts', nodes: ['procyclidine', 'trihexyphenidyl', 'amantadine', 'prazosin'] },
          { key: 'specialist', title: 'Specialist', nodes: ['valbenazine', 'deutetrabenazine', 'tetrabenazine', 'modafinil', 'armodafinil', 'dexmedetomidine'] },
        ],
      },
    ],
  };
})();
