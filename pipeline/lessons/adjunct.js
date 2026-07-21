// Adjunct micro-lessons (EPS / movement / wakefulness / agitation agents).
// Key = molecule id. Facts grounded in data/deck.json.
// Central theme: MATCH THE EPS TO THE FIX —
//   acute dystonia / drug-induced parkinsonism → ANTICHOLINERGIC (benztropine, procyclidine, trihexyphenidyl)
//   akathisia → PROPRANOLOL
//   tardive dyskinesia → VMAT2 INHIBITOR (tetrabenazine, valbenazine, deutetrabenazine)
// Anticholinergics WORSEN tardive dyskinesia; VMAT2 inhibitors deplete dopamine → depression/parkinsonism.
export default {
  benztropine: {
    hook: "The IM rescue for a haloperidol-induced neck twist — an anticholinergic that rebalances striatal dopamine vs acetylcholine.",
    steps: [
      {
        title: "What it is",
        teach: "Benztropine is a central anticholinergic (muscarinic antagonist). D2 blockade tips the striatum toward cholinergic excess; blocking ACh restores the dopamine:acetylcholine balance and relieves EPS.",
        check: {
          q: "Benztropine's core mechanism?",
          options: ["Central anticholinergic (muscarinic block)", "VMAT2 inhibition", "Beta-adrenergic blockade"],
          answer: "Central anticholinergic (muscarinic block)",
          why: "It antagonizes muscarinic ACh receptors to rebalance striatal ACh vs dopamine."
        }
      },
      {
        title: "The signature win",
        teach: "First-line for ACUTE DYSTONIA — give it IM or IV. Oculogyric crisis or torticollis hours after starting haloperidol is the classic scenario; it also treats drug-induced parkinsonism.",
        check: {
          q: "Oculogyric crisis hours after starting haloperidol — best rescue?",
          options: ["IM benztropine", "Oral propranolol", "IV valbenazine"],
          answer: "IM benztropine",
          why: "Acute dystonia is treated with an IM/IV anticholinergic like benztropine."
        }
      },
      {
        title: "The TD trap",
        teach: "Benztropine does NOT reliably help akathisia and WORSENS tardive dyskinesia — TD reflects dopamine hypersensitivity, so blocking ACh unmasks it. Never reach for an anticholinergic for TD.",
        check: {
          q: "Which movement problem does benztropine make WORSE?",
          options: ["Tardive dyskinesia", "Acute dystonia", "Drug-induced parkinsonism"],
          answer: "Tardive dyskinesia",
          why: "Anticholinergics unmask dopamine-hypersensitive TD movements."
        }
      },
      {
        title: "The price you pay",
        teach: "You trade EPS for anticholinergic burden: dry mouth, blurred vision, constipation, urinary retention, and confusion/memory loss (especially in the elderly) — the 'mad as a hatter' toxidrome at the extreme.",
        check: {
          q: "A typical benztropine side effect?",
          options: ["Dry mouth and urinary retention", "Diarrhea", "Bradycardia"],
          answer: "Dry mouth and urinary retention",
          why: "Anticholinergic burden causes dry mouth, constipation, and urinary retention."
        }
      }
    ],
    trap: "Benztropine (anticholinergic for EPS) vs bromocriptine (dopamine agonist for NMS) — sound-alike, opposite jobs.",
    takeaway: "Benztropine = the IM/IV anticholinergic rescue for acute dystonia + drug-induced parkinsonism; useless for akathisia and it WORSENS tardive dyskinesia."
  },

  procyclidine: {
    hook: "Benztropine's shorter-acting twin — same anticholinergic fix for dystonia and parkinsonism, just dosed three times a day.",
    steps: [
      {
        title: "What it is",
        teach: "Procyclidine is a central anticholinergic, essentially interchangeable with benztropine for EPS. It restores the striatal dopamine:acetylcholine balance disrupted by D2 blockade.",
        check: {
          q: "Procyclidine belongs to which adjunct class?",
          options: ["Anticholinergic", "Beta-blocker", "VMAT2 inhibitor"],
          answer: "Anticholinergic",
          why: "It is a central antimuscarinic, an anticholinergic peer of benztropine."
        }
      },
      {
        title: "Same rules apply",
        teach: "Like all anticholinergics: it treats acute dystonia and drug-induced parkinsonism, does NOT help akathisia, and can WORSEN tardive dyskinesia. A shorter half-life (~12 h) means TID dosing.",
        check: {
          q: "Procyclidine helps which of these?",
          options: ["Drug-induced parkinsonism", "Tardive dyskinesia", "Akathisia"],
          answer: "Drug-induced parkinsonism",
          why: "Anticholinergics treat dystonia/parkinsonism, not akathisia or TD (which they worsen)."
        }
      },
      {
        title: "The look-alike",
        teach: "Don't confuse procyclidine (treats EPS) with prochlorperazine — an antiemetic/antipsychotic that CAUSES dystonia. When benztropine isn't available, procyclidine or trihexyphenidyl fills the role.",
        check: {
          q: "Which drug CAUSES dystonia rather than treating it?",
          options: ["Prochlorperazine", "Procyclidine", "Trihexyphenidyl"],
          answer: "Prochlorperazine",
          why: "Prochlorperazine is a D2 blocker that can cause dystonia; the others treat it."
        }
      }
    ],
    trap: "Procyclidine vs prochlorperazine — one letter apart, but prochlorperazine causes the dystonia you'd use procyclidine to fix.",
    takeaway: "Procyclidine = an interchangeable anticholinergic peer of benztropine (dosed TID) for acute dystonia + parkinsonism; not for akathisia, and it worsens TD."
  },

  trihexyphenidyl: {
    hook: "The EPS anticholinergic with a street value — same dystonia/parkinsonism fix as its peers, but the one with real abuse potential.",
    steps: [
      {
        title: "What it is",
        teach: "Trihexyphenidyl (Artane) is a central anticholinergic that corrects the relative cholinergic excess caused by D2 blockade, relieving drug-induced EPS and parkinsonism.",
        check: {
          q: "Trihexyphenidyl's mechanism?",
          options: ["Central anticholinergic", "Dopamine depletion", "Alpha-1 blockade"],
          answer: "Central anticholinergic",
          why: "It is an antimuscarinic that rebalances striatal ACh vs dopamine."
        }
      },
      {
        title: "Same anticholinergic rules",
        teach: "Like benztropine and procyclidine: it helps acute dystonia and drug-induced parkinsonism, does NOT help akathisia, and WORSENS tardive dyskinesia.",
        check: {
          q: "Trihexyphenidyl should be AVOIDED in which condition?",
          options: ["Tardive dyskinesia", "Drug-induced parkinsonism", "Acute dystonia"],
          answer: "Tardive dyskinesia",
          why: "Anticholinergics worsen TD; they treat dystonia and parkinsonism."
        }
      },
      {
        title: "The distinctive twist",
        teach: "Unlike the other EPS anticholinergics, trihexyphenidyl carries a notable euphoriant/hallucinogenic MISUSE potential — watch for diversion and drug-seeking.",
        check: {
          q: "Which EPS anticholinergic is most flagged for abuse potential?",
          options: ["Trihexyphenidyl", "Benztropine", "Procyclidine"],
          answer: "Trihexyphenidyl",
          why: "Trihexyphenidyl has a euphoriant/hallucinogenic misuse potential the others lack."
        }
      }
    ],
    trap: "Trihexyphenidyl, benztropine, and procyclidine are interchangeable anticholinergics — trihexyphenidyl is the one flagged for abuse.",
    takeaway: "Trihexyphenidyl = an anticholinergic for dystonia + parkinsonism (not akathisia, worsens TD), distinctive for its euphoriant misuse potential."
  },

  propranolol: {
    hook: "Can't sit still on an antipsychotic? Reach for the beta-blocker — akathisia's first-line fix (anticholinergics don't work here).",
    steps: [
      {
        title: "What it is",
        teach: "Propranolol is a non-selective beta-blocker (β1 and β2). In psychiatry it blunts peripheral adrenergic symptoms and central noradrenergic tone.",
        check: {
          q: "Propranolol's mechanism?",
          options: ["Non-selective beta-adrenergic blockade", "Muscarinic blockade", "VMAT2 inhibition"],
          answer: "Non-selective beta-adrenergic blockade",
          why: "It antagonizes both β1 and β2 adrenergic receptors."
        }
      },
      {
        title: "The akathisia answer",
        teach: "FIRST-LINE for antipsychotic-induced AKATHISIA (that inner restlessness / inability to sit still). Anticholinergics do NOT reliably help akathisia — this is the beta-blocker's EPS niche.",
        check: {
          q: "Inner restlessness / can't-sit-still on an antipsychotic — first-line drug?",
          options: ["Propranolol", "Benztropine", "Tetrabenazine"],
          answer: "Propranolol",
          why: "Akathisia is treated first-line with propranolol, not an anticholinergic."
        }
      },
      {
        title: "Tremor & stage fright",
        teach: "It's also the classic agent for performance/'stage-fright' anxiety (a single dose ~30–60 min before) and for lithium- or SSRI-induced (and essential) tremor.",
        check: {
          q: "Fine tremor on lithium or an SSRI — which adjunct helps?",
          options: ["Propranolol", "Prazosin", "Amantadine"],
          answer: "Propranolol",
          why: "Propranolol is the go-to for lithium/SSRI and essential tremor."
        }
      },
      {
        title: "Who to avoid",
        teach: "Being non-selective it can trigger bronchospasm — caution/avoid in asthma or COPD, and in bradycardia, AV block, or decompensated heart failure. Never stop abruptly (rebound angina; boxed warning).",
        check: {
          q: "Propranolol is most concerning in a patient with…",
          options: ["Asthma", "PTSD", "Insomnia"],
          answer: "Asthma",
          why: "Non-selective β2 blockade can cause bronchospasm in asthma/COPD."
        }
      }
    ],
    trap: "Propranolol (β-blocker → akathisia/tremor) vs prazosin (α1 blocker → PTSD nightmares) — sound-alike, different receptors and jobs.",
    takeaway: "Propranolol = the beta-blocker for AKATHISIA (the one EPS anticholinergics miss), plus tremor and performance anxiety; watch asthma and never stop abruptly."
  },

  prazosin: {
    hook: "The bedtime α1-blocker that quiets combat nightmares — just warn the patient about that first-dose faint.",
    steps: [
      {
        title: "What it is",
        teach: "Prazosin is a selective α1-adrenergic ANTAGONIST. Centrally it blunts the noradrenergic activation behind trauma nightmares; peripherally it causes vasodilation.",
        check: {
          q: "Prazosin's mechanism?",
          options: ["Selective α1-adrenergic blockade", "Beta-blockade", "Muscarinic blockade"],
          answer: "Selective α1-adrenergic blockade",
          why: "It selectively antagonizes α1 receptors."
        }
      },
      {
        title: "PTSD nightmares",
        teach: "The off-label go-to for PTSD NIGHTMARES and trauma-related sleep disruption — a combat veteran with recurrent nightmares is the classic case. Dose at bedtime and titrate up.",
        check: {
          q: "Combat veteran with recurrent trauma nightmares — which adjunct?",
          options: ["Prazosin at bedtime", "Propranolol in the morning", "Modafinil"],
          answer: "Prazosin at bedtime",
          why: "Prazosin at bedtime is the go-to for PTSD nightmares."
        }
      },
      {
        title: "First-dose phenomenon",
        teach: "The defining hazard is the FIRST-DOSE PHENOMENON: marked orthostatic hypotension / syncope. Start at 1 mg at bedtime and warn the patient. Watch additive hypotension with PDE5 inhibitors and other antihypertensives.",
        check: {
          q: "Which adjunct causes a 'first-dose' orthostatic syncope?",
          options: ["Prazosin", "Benztropine", "Valbenazine"],
          answer: "Prazosin",
          why: "α1 blockade produces marked first-dose orthostatic hypotension."
        }
      }
    ],
    trap: "Prazosin (α1 blocker — PTSD nightmares, first-dose hypotension) vs propranolol (β-blocker — akathisia) vs clonidine (α2 agonist).",
    takeaway: "Prazosin = the bedtime α1-blocker for PTSD nightmares; its signature hazard is first-dose orthostatic hypotension — start 1 mg and warn the patient."
  },

  modafinil: {
    hook: "The daytime wakefulness pill for narcolepsy — and a sneaky CYP3A4 inducer that can make the pill (contraceptive) fail.",
    steps: [
      {
        title: "What it is",
        teach: "Modafinil is a wakefulness-promoting agent (weak dopamine-transporter inhibition plus orexin/histamine/noradrenergic effects). Used for narcolepsy, OSA (adjunct), and shift-work disorder — NOT a first-line ADHD or antidepressant drug.",
        check: {
          q: "Modafinil's main clinical role?",
          options: ["Promote wakefulness in narcolepsy", "Treat tardive dyskinesia", "Rescue acute dystonia"],
          answer: "Promote wakefulness in narcolepsy",
          why: "It is a wakefulness-promoter, first-line for narcolepsy sleepiness."
        }
      },
      {
        title: "The contraceptive trap",
        teach: "High-yield interaction: modafinil INDUCES CYP3A4, which LOWERS oral contraceptive efficacy. Counsel backup contraception during use and for ~1 month after.",
        check: {
          q: "A woman on the pill starts modafinil — what must you counsel?",
          options: ["Use backup contraception", "Double the pill dose", "Nothing needed"],
          answer: "Use backup contraception",
          why: "CYP3A4 induction reduces oral contraceptive efficacy."
        }
      },
      {
        title: "Watch the skin & mood",
        teach: "Rare but serious: SJS/TEN/DRESS-type rashes — stop for any serious rash. It can also cause stimulant-like psychiatric activation (anxiety, mania, psychosis). It's a Schedule IV controlled substance with misuse potential.",
        check: {
          q: "Which serious reaction warrants stopping modafinil?",
          options: ["Serious rash (SJS/TEN/DRESS)", "Dry mouth", "Mild headache"],
          answer: "Serious rash (SJS/TEN/DRESS)",
          why: "Serious cutaneous hypersensitivity reactions require discontinuation."
        }
      }
    ],
    trap: "Modafinil vs armodafinil (its longer-acting R-enantiomer) vs classic stimulants (methylphenidate/amphetamine).",
    takeaway: "Modafinil = the narcolepsy/shift-work wakefulness agent whose killer pearl is CYP3A4 induction lowering contraceptive efficacy — counsel backup contraception."
  },

  armodafinil: {
    hook: "Modafinil's purified R-enantiomer — same wakefulness, same contraceptive caveat, just longer into the day (US-only).",
    steps: [
      {
        title: "What it is",
        teach: "Armodafinil (Nuvigil) is the longer-acting R-(−)-enantiomer of modafinil, with the same wakefulness-promoting mechanism. As a single enantiomer, effective levels persist longer into the day. It's US-only (not marketed in Canada).",
        check: {
          q: "How does armodafinil relate to modafinil?",
          options: ["Its longer-acting R-enantiomer", "A metabolite of caffeine", "A VMAT2 inhibitor"],
          answer: "Its longer-acting R-enantiomer",
          why: "Armodafinil is the purified R-enantiomer, sustaining wakefulness longer."
        }
      },
      {
        title: "Same contraceptive trap",
        teach: "Identical interaction profile to modafinil: it INDUCES CYP3A4 and LOWERS oral contraceptive efficacy — counsel backup contraception during use and after.",
        check: {
          q: "Armodafinil's key interaction to counsel?",
          options: ["Reduced contraceptive efficacy (CYP3A4 induction)", "Raised lithium levels", "QT prolongation"],
          answer: "Reduced contraceptive efficacy (CYP3A4 induction)",
          why: "Like modafinil, it induces CYP3A4 and lowers contraceptive efficacy."
        }
      },
      {
        title: "Same class caveats",
        teach: "Same risks as modafinil: rare serious rash (SJS/TEN/DRESS), stimulant-like psychiatric activation, and Schedule IV controlled-substance status with misuse potential.",
        check: {
          q: "Armodafinil is a controlled substance because of…",
          options: ["Misuse potential", "Nephrotoxicity", "Bleeding risk"],
          answer: "Misuse potential",
          why: "It is Schedule IV with stimulant-like misuse potential."
        }
      }
    ],
    trap: "Armodafinil (R-enantiomer, US-only) vs modafinil (racemic, available in Canada) — same job, same contraceptive caveat.",
    takeaway: "Armodafinil = modafinil's longer-acting R-enantiomer (US-only); same wakefulness role and the same CYP3A4-induction contraceptive caveat."
  },

  tetrabenazine: {
    hook: "For the writhing tongue of tardive dyskinesia, DEPLETE the dopamine — a VMAT2 inhibitor, the opposite of an anticholinergic.",
    steps: [
      {
        title: "What it is",
        teach: "Tetrabenazine is a VMAT2 inhibitor: it blocks packaging of monoamines into presynaptic vesicles, DEPLETING dopamine to calm hyperkinetic movements (Huntington chorea, tardive dyskinesia).",
        check: {
          q: "Tetrabenazine's mechanism?",
          options: ["VMAT2 inhibition (depletes dopamine)", "Muscarinic blockade", "Beta-blockade"],
          answer: "VMAT2 inhibition (depletes dopamine)",
          why: "It inhibits VMAT2, depleting presynaptic dopamine."
        }
      },
      {
        title: "The TD answer",
        teach: "Persistent orofacial/lingual choreoathetoid movements (tardive dyskinesia) → a VMAT2 inhibitor like tetrabenazine, NOT an anticholinergic (which worsens TD). This is the drug's headline role.",
        check: {
          q: "Persistent tongue/facial writhing (tardive dyskinesia) — correct drug class?",
          options: ["VMAT2 inhibitor", "Anticholinergic", "Beta-blocker"],
          answer: "VMAT2 inhibitor",
          why: "TD is treated with a VMAT2 inhibitor; anticholinergics worsen it."
        }
      },
      {
        title: "Depletion has a cost",
        teach: "Because it DEPLETES dopamine, it can CAUSE depression and suicidality (boxed warning) and parkinsonism — screen mood, and avoid in active depression. Also watch QT prolongation.",
        check: {
          q: "Tetrabenazine's boxed-warning risk from depleting dopamine?",
          options: ["Depression and suicidality", "Bronchospasm", "Priapism"],
          answer: "Depression and suicidality",
          why: "Dopamine depletion carries a boxed warning for depression/suicidality."
        }
      },
      {
        title: "Metabolism & availability",
        teach: "The active HTBZ metabolites are metabolized by CYP2D6, so reduce the dose with 2D6 inhibitors (fluoxetine, paroxetine, bupropion) or in poor metabolizers. Canadian brand: Nitoman.",
        check: {
          q: "Which enzyme's inhibitors require a tetrabenazine dose reduction?",
          options: ["CYP2D6", "CYP1A2", "MAO-B"],
          answer: "CYP2D6",
          why: "CYP2D6 metabolizes the active HTBZ metabolites."
        }
      }
    ],
    trap: "Tetrabenazine (Canada: Nitoman) vs deutetrabenazine/valbenazine (US-only VMAT2 inhibitors) vs reserpine (older non-selective VMAT inhibitor).",
    takeaway: "Tetrabenazine = the VMAT2 inhibitor that DEPLETES dopamine for tardive dyskinesia/Huntington chorea — the right answer where anticholinergics are wrong; boxed warning for depression/suicidality."
  },

  valbenazine: {
    hook: "The once-daily VMAT2 inhibitor built for tardive dyskinesia — tetrabenazine's cleaner, simpler cousin (US-only).",
    steps: [
      {
        title: "What it is",
        teach: "Valbenazine (Ingrezza) is a selective VMAT2 inhibitor, a purified relative of tetrabenazine that depletes presynaptic dopamine to reduce tardive-dyskinesia movements. US-only (not marketed in Canada).",
        check: {
          q: "Valbenazine's mechanism and indication?",
          options: ["VMAT2 inhibitor for tardive dyskinesia", "Anticholinergic for dystonia", "Beta-blocker for akathisia"],
          answer: "VMAT2 inhibitor for tardive dyskinesia",
          why: "It is a VMAT2 inhibitor approved for TD."
        }
      },
      {
        title: "The advantage",
        teach: "Its edge over tetrabenazine is ONCE-DAILY dosing and generally better tolerability — no titration nightmare.",
        check: {
          q: "Which VMAT2 inhibitor for TD is dosed once daily?",
          options: ["Valbenazine", "Tetrabenazine", "Benztropine"],
          answer: "Valbenazine",
          why: "Valbenazine's key advantage is once-daily dosing."
        }
      },
      {
        title: "Same class caveats",
        teach: "It still depletes dopamine, so expect the class effects: parkinsonism, somnolence, QT prolongation, and dopamine-depletion mood effects (boxed warning for depression/suicidality in Huntington's).",
        check: {
          q: "A shared VMAT2-inhibitor risk to monitor?",
          options: ["QT prolongation and parkinsonism", "Bronchospasm", "First-dose hypotension"],
          answer: "QT prolongation and parkinsonism",
          why: "Dopamine depletion brings parkinsonism, somnolence, and QT risk."
        }
      }
    ],
    trap: "Valbenazine vs deutetrabenazine (both US-only TD agents) vs tetrabenazine (Canada-available).",
    takeaway: "Valbenazine = the once-daily VMAT2 inhibitor for tardive dyskinesia (US-only); simpler dosing than tetrabenazine, same dopamine-depletion/QT profile."
  },

  deutetrabenazine: {
    hook: "Tetrabenazine with a deuterium upgrade — heavier hydrogen slows metabolism for smoother levels and twice-daily dosing (US-only).",
    steps: [
      {
        title: "What it is",
        teach: "Deutetrabenazine (Austedo) is the DEUTERATED form of tetrabenazine — a VMAT2 inhibitor. Carbon-deuterium bonds slow metabolism of the active HTBZ metabolites, giving steadier levels and BID dosing. US-only.",
        check: {
          q: "What makes deutetrabenazine different from tetrabenazine?",
          options: ["Deuteration slows metabolism (steadier levels, BID)", "It blocks muscarinic receptors", "It is an alpha-1 blocker"],
          answer: "Deuteration slows metabolism (steadier levels, BID)",
          why: "Deuterium bonds slow HTBZ metabolism for smoother levels and BID dosing."
        }
      },
      {
        title: "What it treats",
        teach: "A VMAT2 inhibitor approved (US) for BOTH tardive dyskinesia and Huntington chorea — dopamine depletion calms the hyperkinetic movements.",
        check: {
          q: "Deutetrabenazine is used for…",
          options: ["Tardive dyskinesia and Huntington chorea", "Acute dystonia", "PTSD nightmares"],
          answer: "Tardive dyskinesia and Huntington chorea",
          why: "It is a VMAT2 inhibitor for TD and Huntington chorea."
        }
      },
      {
        title: "Same class caveats",
        teach: "Smoother PK, but the same dopamine-depletion profile: depression/suicidality (boxed warning), parkinsonism, and QT prolongation. Reduce dose with strong CYP2D6 inhibitors.",
        check: {
          q: "Deutetrabenazine shares which class risk?",
          options: ["Depression/suicidality from dopamine depletion", "Bronchospasm", "Anticholinergic delirium"],
          answer: "Depression/suicidality from dopamine depletion",
          why: "As a VMAT2 inhibitor it carries the dopamine-depletion depression/suicidality warning."
        }
      }
    ],
    trap: "Deutetrabenazine (deuterated, US-only) vs tetrabenazine (Canada: Nitoman) vs valbenazine (once-daily, US-only).",
    takeaway: "Deutetrabenazine = deuterated tetrabenazine (US-only): smoother levels and BID dosing for TD/Huntington chorea, sharing the dopamine-depletion depression/parkinsonism/QT profile."
  },

  amantadine: {
    hook: "The parkinsonism fix that isn't an anticholinergic — a dopaminergic/NMDA agent with mottled skin and swollen ankles as tells.",
    steps: [
      {
        title: "What it is",
        teach: "Amantadine is a dopaminergic + NMDA-receptor antagonist: it enhances dopamine release, blocks dopamine reuptake, and antagonizes glutamate NMDA receptors.",
        check: {
          q: "Amantadine's mechanism?",
          options: ["Dopaminergic + NMDA antagonist", "Muscarinic antagonist", "VMAT2 inhibitor"],
          answer: "Dopaminergic + NMDA antagonist",
          why: "It boosts dopamine and blocks NMDA receptors."
        }
      },
      {
        title: "Anticholinergic-sparing niche",
        teach: "Used for DRUG-INDUCED PARKINSONISM (and as a TD/levodopa-dyskinesia adjunct) — a good alternative when you want to AVOID anticholinergic burden, e.g. in the elderly.",
        check: {
          q: "Drug-induced parkinsonism in an elderly patient, avoiding anticholinergic burden — pick?",
          options: ["Amantadine", "Benztropine", "Trihexyphenidyl"],
          answer: "Amantadine",
          why: "Amantadine treats parkinsonism with much less anticholinergic burden."
        }
      },
      {
        title: "Signature side effects",
        teach: "Its calling cards are LIVEDO RETICULARIS (mottled skin) and ANKLE EDEMA; also hallucinations/confusion, especially in the elderly or with renal impairment.",
        check: {
          q: "Mottled skin (livedo reticularis) + ankle edema on a parkinsonism drug points to…",
          options: ["Amantadine", "Prazosin", "Propranolol"],
          answer: "Amantadine",
          why: "Livedo reticularis and ankle edema are amantadine's signature effects."
        }
      },
      {
        title: "Renal & withdrawal",
        teach: "It's excreted largely UNCHANGED by the kidneys — MUST reduce the dose in renal impairment. Do NOT stop abruptly: an NMS-like withdrawal syndrome can occur.",
        check: {
          q: "Amantadine requires dose adjustment for…",
          options: ["Renal impairment", "Hepatic impairment", "Asthma"],
          answer: "Renal impairment",
          why: "It is renally cleared unchanged, so renal impairment needs dose reduction."
        }
      }
    ],
    trap: "Amantadine (dopaminergic/NMDA — parkinsonism, renally cleared) vs memantine (NMDA antagonist for Alzheimer dementia).",
    takeaway: "Amantadine = a dopaminergic/NMDA agent for drug-induced parkinsonism with LESS anticholinergic burden; signature livedo reticularis + ankle edema, renally cleared, don't stop abruptly."
  },

  dexmedetomidine: {
    hook: "A sublingual film that calms acute agitation without EPS — an α2-agonist, but watch the blood pressure and pulse drop (US-only).",
    steps: [
      {
        title: "What it is",
        teach: "Dexmedetomidine is a selective α2-adrenergic AGONIST; it reduces central sympathetic (noradrenergic) outflow to calm/sedate without significant respiratory depression.",
        check: {
          q: "Dexmedetomidine's mechanism?",
          options: ["Selective α2-adrenergic agonist", "α1 antagonist", "Dopamine D2 antagonist"],
          answer: "Selective α2-adrenergic agonist",
          why: "It agonizes α2 receptors to reduce sympathetic outflow."
        }
      },
      {
        title: "The agitation niche",
        teach: "A sublingual/buccal FILM (Igalmi) for ACUTE AGITATION in schizophrenia or bipolar I/II — non-dopaminergic, so it calms WITHOUT the EPS risk of antipsychotics. US-only.",
        check: {
          q: "Sublingual α2-agonist film for acute agitation in schizophrenia/bipolar?",
          options: ["Dexmedetomidine", "Benztropine", "Modafinil"],
          answer: "Dexmedetomidine",
          why: "Dexmedetomidine sublingual film treats acute agitation without EPS."
        }
      },
      {
        title: "The trade-off",
        teach: "The catch is cardiovascular: hypotension, orthostatic hypotension, bradycardia (and possible QT prolongation) plus sedation. Monitor blood pressure and heart rate after dosing.",
        check: {
          q: "What must you monitor after dosing dexmedetomidine?",
          options: ["Blood pressure and heart rate", "INR", "Serum sodium"],
          answer: "Blood pressure and heart rate",
          why: "α2 agonism causes hypotension and bradycardia."
        }
      }
    ],
    trap: "Dexmedetomidine (α2 agonist for acute agitation, US-only) vs clonidine/guanfacine (α2 agonists) vs IM antipsychotics/benzodiazepines for agitation.",
    takeaway: "Dexmedetomidine = a sublingual α2-agonist film for acute agitation (US-only) that calms WITHOUT EPS; the trade-off is hypotension/bradycardia — monitor BP and HR."
  }
};
