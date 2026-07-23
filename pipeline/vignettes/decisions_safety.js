// Safety-driven DECISIONS: contraindication-driven avoidance, dangerous-combination
// recognition, and MANAGEMENT of emergent adverse effects (what to stop, what to give,
// what to avoid). Emphasis is on the NEXT decision, not pure recognition.
// Drug facts (washouts, levels, agents, EPS/TD management) are grounded in data/deck.json.
// Syndrome-management items use syndromes as options; decision items use real deck generics.

export default [
  // ————————————————————————————————————————————————————————————————
  // SEROTONIN SYNDROME — washout decision + management
  // ————————————————————————————————————————————————————————————————
  {
    id: "vx_safe_ss_fluoxetine_washout_1",
    stem: "A 44-year-old with treatment-resistant depression is being switched to the MAOI phenelzine. Before starting it, which current antidepressant demands a FULL FIVE-WEEK washout (rather than the usual ~14 days) to avoid a fatal serotonin syndrome?",
    options: ["Fluoxetine", "Sertraline", "Escitalopram", "Venlafaxine"],
    answer: "Fluoxetine",
    explanation: "Fluoxetine's long half-life and active metabolite norfluoxetine require a 5-week washout before an MAOI, versus ~14 days for other serotonergics; starting phenelzine too soon risks serotonin syndrome. Sertraline, escitalopram, and venlafaxine clear within roughly two weeks.",
    meds: ["fluoxetine", "phenelzine", "sertraline", "escitalopram", "venlafaxine"],
    disorder: "Serotonin syndrome",
    difficulty: 2,
    tags: ["serotonin", "interaction"],
    source: { name: "Fluoxetine monograph — MAOI washout", origin: "monograph" }
  },
  {
    id: "vx_safe_ss_manage_cyproheptadine_1",
    stem: "Two days after tranylcypromine was started with an inadequate washout from venlafaxine, a patient becomes hyperthermic and agitated with spontaneous ocular clonus and brisk hyperreflexia. The team stops all serotonergic agents, actively cools him, gives benzodiazepines, and adds the serotonin antagonist cyproheptadine. Which syndrome are they managing?",
    options: ["Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity", "Lithium toxicity"],
    answer: "Serotonin syndrome",
    explanation: "Rapid-onset clonus and hyperreflexia after two serotonergic agents (an MAOI stacked on venlafaxine without a washout) define serotonin syndrome; management is to STOP serotonergics, cool, sedate with benzodiazepines, and give cyproheptadine. NMS instead evolves over days with rigidity and hyporeflexia, and the others lack clonus.",
    meds: ["tranylcypromine", "venlafaxine"],
    disorder: "Serotonin syndrome",
    difficulty: 2,
    tags: ["serotonin", "interaction"],
    source: { name: "FRCPC serotonin syndrome management (Hunter criteria)", origin: "authored" }
  },

  // ————————————————————————————————————————————————————————————————
  // NEUROLEPTIC MALIGNANT SYNDROME — management decisions
  // ————————————————————————————————————————————————————————————————
  {
    id: "vx_safe_nms_stop_antipsychotic_1",
    stem: "Five days after starting haloperidol, a patient is febrile (40°C) with generalised lead-pipe rigidity, hyporeflexia, fluctuating consciousness, labile blood pressure, and CK 8000. Beyond aggressive cooling and IV fluids, what is the single most important FIRST management step, defining the syndrome you are treating?",
    options: ["Neuroleptic malignant syndrome", "Serotonin syndrome", "Anticholinergic toxicity", "Hypertensive crisis (tyramine reaction)"],
    answer: "Neuroleptic malignant syndrome",
    explanation: "NMS mandates immediate discontinuation of the dopamine antagonist plus supportive care (cooling, fluids), with dantrolene and a dopamine agonist for severe cases. Serotonin syndrome would show clonus/hyperreflexia and respond to cyproheptadine; anticholinergic toxicity lacks rigidity and CK rise; a tyramine reaction is a pure pressor crisis without rigidity.",
    meds: ["haloperidol"],
    disorder: "Neuroleptic malignant syndrome",
    difficulty: 2,
    tags: ["nms"],
    source: { name: "FRCPC NMS management", origin: "authored" }
  },
  {
    id: "vx_safe_nms_dopaminergic_agent_1",
    stem: "A patient with severe neuroleptic malignant syndrome has had the antipsychotic stopped and dantrolene started. The team wants to add a dopaminergic agent to counter the dopamine blockade. Which formulary agent is a dopaminergic/NMDA-antagonist used for this purpose (and also for drug-induced parkinsonism)?",
    options: ["Amantadine", "Benztropine", "Propranolol", "Lorazepam"],
    answer: "Amantadine",
    explanation: "Amantadine is a dopaminergic + NMDA antagonist used adjunctively in NMS to reverse dopamine blockade (bromocriptine is the classic dopamine agonist, amantadine an alternative) — and it must not be stopped abruptly, which itself can trigger an NMS-like withdrawal. Benztropine (anticholinergic) treats dystonia/parkinsonism, propranolol treats akathisia, and lorazepam targets agitation/catatonia, not the dopamine deficit.",
    meds: ["amantadine", "benztropine", "propranolol", "lorazepam"],
    disorder: "Neuroleptic malignant syndrome",
    difficulty: 3,
    tags: ["nms"],
    source: { name: "Amantadine monograph — dopaminergic/NMDA", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // LITHIUM TOXICITY — avoidance decision + management
  // ————————————————————————————————————————————————————————————————
  {
    id: "vx_safe_lithium_avoid_renal_1",
    stem: "A 72-year-old with bipolar I, stage 3 CKD (eGFR 34), and regular NSAID use for arthritis needs maintenance mood stabilization. Which agent is best AVOIDED here because reduced renal clearance readily precipitates toxicity?",
    options: ["Lithium", "Valproate", "Lamotrigine", "Quetiapine"],
    answer: "Lithium",
    explanation: "Lithium is renally excreted and not metabolized, so CKD, NSAIDs, thiazides, ACEi/ARBs, and dehydration cut its clearance and precipitate toxicity — avoid or use with great caution in renal impairment. Valproate, lamotrigine, and quetiapine are cleared hepatically and spare the kidney (each with its own separate cautions).",
    meds: ["lithium", "valproate", "lamotrigine", "quetiapine"],
    disorder: "Lithium toxicity",
    difficulty: 2,
    tags: ["monitoring", "elderly"],
    source: { name: "Lithium monograph — renal clearance/DDI", origin: "monograph" }
  },
  {
    id: "vx_safe_lithium_toxicity_dialysis_1",
    stem: "A patient on chronic lithium presents with a coarse tremor, ataxia, and confusion; the level is 3.2 mmol/L with acute kidney injury. Management is to hold lithium, give IV normal saline, and arrange hemodialysis. Which toxic syndrome, at which the dialysis threshold has been crossed, does this describe?",
    options: ["Lithium toxicity", "Serotonin syndrome", "Neuroleptic malignant syndrome", "Anticholinergic toxicity"],
    answer: "Lithium toxicity",
    explanation: "Coarse tremor, ataxia, and confusion with a level >2.5 mmol/L plus renal failure is severe lithium toxicity — hold lithium, restore volume with saline, and dialyze (indicated at >4, or >2.5 with symptoms/renal failure). The clonus of serotonin syndrome and the rigidity/CK rise of NMS are absent.",
    meds: ["lithium"],
    disorder: "Lithium toxicity",
    difficulty: 2,
    tags: ["overdose", "monitoring"],
    source: { name: "Lithium monograph — toxicity/dialysis", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // ANTICHOLINERGIC TOXICITY — management + avoidance decisions
  // ————————————————————————————————————————————————————————————————
  {
    id: "vx_safe_anticholinergic_tca_bicarb_1",
    stem: "A teenager brought in after an amitriptyline overdose is delirious, dry, and flushed with dilated pupils and a QRS of 130 ms. The team gives IV sodium bicarbonate for the widened QRS and specifically AVOIDS physostigmine. Which toxidrome underlies the peripheral findings, and what governs this management?",
    options: ["Anticholinergic toxicity", "Serotonin syndrome", "Lithium toxicity", "Neuroleptic malignant syndrome"],
    answer: "Anticholinergic toxicity",
    explanation: "TCA overdose pairs an anticholinergic toxidrome (dry/flushed skin, mydriasis, ileus, delirium) with life-threatening sodium-channel-blockade cardiotoxicity — treat QRS >100 ms with sodium bicarbonate; physostigmine is avoided in TCA poisoning because it can precipitate asystole and seizures. There is no clonus (serotonin syndrome) or rigidity (NMS).",
    meds: ["amitriptyline"],
    disorder: "Anticholinergic toxicity",
    difficulty: 2,
    tags: ["overdose"],
    source: { name: "Amitriptyline monograph — overdose management", origin: "monograph" }
  },
  {
    id: "vx_safe_anticholinergic_avoid_elderly_1",
    stem: "An 80-year-old with dementia, chronic constipation, BPH with urinary hesitancy, and narrow-angle glaucoma needs an antidepressant. Which is the WORST choice because its high anticholinergic burden risks delirium, urinary retention, ileus, and acute angle-closure?",
    options: ["Amitriptyline", "Sertraline", "Escitalopram", "Mirtazapine"],
    answer: "Amitriptyline",
    explanation: "Amitriptyline is a strongly anticholinergic tertiary-amine TCA — in a frail elderly patient with BPH, constipation, and narrow-angle glaucoma it risks delirium, urinary retention, paralytic ileus, and acute angle-closure. Sertraline and escitalopram are minimally anticholinergic, and mirtazapine is chiefly antihistaminergic rather than anticholinergic.",
    meds: ["amitriptyline", "sertraline", "escitalopram", "mirtazapine"],
    disorder: "Anticholinergic toxicity",
    difficulty: 2,
    tags: ["elderly", "overdose"],
    source: { name: "Amitriptyline monograph — anticholinergic burden", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // HYPERTENSIVE CRISIS (TYRAMINE REACTION) — avoidance decision
  // ————————————————————————————————————————————————————————————————
  {
    id: "vx_safe_tyramine_avoid_sympathomimetic_1",
    stem: "A patient stable on phenelzine for treatment-resistant depression asks about a medication for newly diagnosed ADHD. Which agent is CONTRAINDICATED because, potentiated by MAO inhibition, it can precipitate a hypertensive crisis?",
    options: ["Dextroamphetamine", "Guanfacine", "Clonidine", "Propranolol"],
    answer: "Dextroamphetamine",
    explanation: "MAOIs potentiate sympathomimetics — amphetamines, methylphenidate, and other indirect pressors are explicitly contraindicated with phenelzine and can trigger the same hypertensive crisis seen with tyramine. The three distractors LOWER blood pressure: guanfacine and clonidine are central alpha-2 agonists and propranolol is a beta-blocker.",
    meds: ["phenelzine", "dextroamphetamine", "guanfacine", "clonidine", "propranolol"],
    disorder: "Hypertensive crisis (tyramine reaction)",
    difficulty: 2,
    tags: ["interaction"],
    source: { name: "Phenelzine monograph — contraindicated sympathomimetics", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // EXTRAPYRAMIDAL SYMPTOMS — dystonia / akathisia / parkinsonism management
  // ————————————————————————————————————————————————————————————————
  {
    id: "vx_safe_eps_acute_dystonia_1",
    stem: "Hours after a first IM dose of haloperidol, a young man develops a sustained painful upward deviation of the eyes with neck twisting (oculogyric crisis / acute dystonia). What is the correct immediate treatment?",
    options: ["Benztropine", "Propranolol", "Valbenazine", "Lithium"],
    answer: "Benztropine",
    explanation: "Acute dystonia is a medical urgency treated with a parenteral anticholinergic — IM/IV benztropine (or procyclidine/diphenhydramine) rapidly rebalances striatal ACh vs dopamine. Propranolol is for akathisia, VMAT2 inhibitors like valbenazine are for tardive dyskinesia, and lithium is irrelevant.",
    meds: ["benztropine", "haloperidol", "propranolol", "valbenazine"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 1,
    tags: ["eps"],
    source: { name: "Benztropine monograph — acute dystonia", origin: "monograph" }
  },
  {
    id: "vx_safe_eps_akathisia_propranolol_1",
    stem: "A patient started on aripiprazole cannot sit still, paces constantly, and reports a distressing inner restlessness (akathisia). After considering an antipsychotic dose reduction, which agent is FIRST-LINE pharmacologic treatment?",
    options: ["Propranolol", "Benztropine", "Trihexyphenidyl", "Amantadine"],
    answer: "Propranolol",
    explanation: "Propranolol (a lipophilic beta-blocker) is first-line for antipsychotic-induced akathisia, alongside lowering the dose or a short benzodiazepine course; anticholinergics (benztropine, trihexyphenidyl) do NOT reliably relieve akathisia, and amantadine is for parkinsonism. Aripiprazole is notably activating with prominent akathisia.",
    meds: ["propranolol", "aripiprazole", "benztropine", "trihexyphenidyl", "amantadine"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 2,
    tags: ["eps"],
    source: { name: "Propranolol monograph — akathisia", origin: "monograph" }
  },
  {
    id: "vx_safe_eps_parkinsonism_amantadine_1",
    stem: "A 78-year-old on risperidone develops drug-induced parkinsonism (bradykinesia, cogwheel rigidity, resting tremor). You want to treat the EPS while MINIMIZING anticholinergic burden because of her cognitive impairment. Which agent is preferred?",
    options: ["Amantadine", "Benztropine", "Trihexyphenidyl", "Procyclidine"],
    answer: "Amantadine",
    explanation: "Amantadine (dopaminergic/NMDA antagonist) treats drug-induced parkinsonism with far LESS anticholinergic burden than benztropine, trihexyphenidyl, or procyclidine — important in the elderly, where anticholinergics cause delirium and falls. Reduce its dose in renal impairment and taper rather than stop abruptly; lowering the antipsychotic dose or switching to a lower-EPS agent also helps.",
    meds: ["amantadine", "risperidone", "benztropine", "trihexyphenidyl", "procyclidine"],
    disorder: "Extrapyramidal symptoms",
    difficulty: 2,
    tags: ["eps", "elderly"],
    source: { name: "Amantadine monograph — drug-induced parkinsonism", origin: "monograph" }
  },

  // ————————————————————————————————————————————————————————————————
  // TARDIVE DYSKINESIA — what to stop + what to give
  // ————————————————————————————————————————————————————————————————
  {
    id: "vx_safe_td_stop_anticholinergic_1",
    stem: "A patient on a long-term antipsychotic develops choreoathetoid tongue and lip movements (tardive dyskinesia). She is also taking benztropine for earlier parkinsonism. Which of her medications should be STOPPED because it can WORSEN tardive dyskinesia?",
    options: ["Benztropine", "Propranolol", "Amantadine", "Quetiapine"],
    answer: "Benztropine",
    explanation: "Anticholinergics such as benztropine WORSEN tardive dyskinesia (they help parkinsonism but unmask dopamine-receptor hypersensitivity) and should be discontinued when TD emerges. Amantadine may actually improve TD, propranolol targets akathisia, and switching toward a lower-D2 agent like quetiapine or clozapine is a reasonable additional step.",
    meds: ["benztropine", "propranolol", "amantadine", "quetiapine"],
    disorder: "Tardive dyskinesia",
    difficulty: 3,
    tags: ["td", "eps"],
    source: { name: "Benztropine monograph — worsens tardive dyskinesia", origin: "monograph" }
  },
  {
    id: "vx_safe_td_vmat2_inhibitor_1",
    stem: "A patient has persistent, disabling tardive dyskinesia despite stopping anticholinergics and reviewing the antipsychotic. Which agent is an evidence-based, VMAT2-inhibitor treatment specifically for tardive dyskinesia?",
    options: ["Deutetrabenazine", "Benztropine", "Propranolol", "Donepezil"],
    answer: "Deutetrabenazine",
    explanation: "VMAT2 inhibitors (deutetrabenazine, valbenazine, tetrabenazine) deplete presynaptic dopamine and are the evidence-based treatment for tardive dyskinesia — monitor for parkinsonism, QT prolongation, and depression/suicidality. Benztropine actually worsens TD, propranolol treats akathisia, and donepezil (a cholinesterase inhibitor) is unrelated.",
    meds: ["deutetrabenazine", "benztropine", "propranolol", "donepezil"],
    disorder: "Tardive dyskinesia",
    difficulty: 2,
    tags: ["td", "qt"],
    source: { name: "Deutetrabenazine monograph — VMAT2 for TD", origin: "monograph" }
  }
];
