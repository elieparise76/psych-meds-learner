// Novel-mechanism / rapid-acting agents. Key = molecule id. Facts grounded in data/deck.json.
export default {
  esketamine: {
    hook: "The antidepressant that works in hours, not weeks — an intranasal ketamine cousin you dose in the clinic and watch.",
    steps: [
      {
        title: "What it is",
        teach: "Esketamine is the S-enantiomer of ketamine, a non-competitive NMDA-glutamate receptor antagonist. NMDA blockade triggers a glutamate surge → AMPA activation and rapid synaptogenesis (BDNF/mTOR).",
        check: {
          q: "Esketamine's mechanism?",
          options: ["NMDA-glutamate receptor antagonist", "Blocks serotonin reuptake (SERT)", "D2 receptor antagonist"],
          answer: "NMDA-glutamate receptor antagonist",
          why: "It's the only glutamatergic antidepressant here — NMDA blockade drives a glutamate/AMPA/BDNF surge."
        }
      },
      {
        title: "The signature win",
        teach: "Rapid onset (hours to a day) is the whole point — a sharp contrast with the 2–6 week lag of SSRIs/SNRIs. It's used for treatment-resistant depression and MDD with acute suicidal ideation, always paired with an oral antidepressant.",
        check: {
          q: "Why choose esketamine over a standard SSRI?",
          options: ["It works within hours, not weeks", "It has no monitoring requirement", "It's cheaper and oral"],
          answer: "It works within hours, not weeks",
          why: "Rapid onset is its defining advantage — used in TRD and acute suicidality."
        }
      },
      {
        title: "Watch for 2 hours",
        teach: "Given intranasally in-clinic under a restricted (REMS) program: monitor for at least 2 hours for sedation, dissociation, and a transient blood-pressure rise. Never dispensed for home use.",
        check: {
          q: "Minimum in-clinic monitoring after each esketamine dose?",
          options: ["At least 2 hours", "15 minutes", "None — it's take-home"],
          answer: "At least 2 hours",
          why: "Boxed warning covers sedation, dissociation, and respiratory depression — hence ≥2 h supervised monitoring."
        }
      },
      {
        title: "The boxed warning",
        teach: "Boxed warning: sedation, dissociation, respiratory depression, and abuse/misuse (it's a controlled substance). Additive risk with CNS depressants (benzodiazepines, opioids, alcohol); psychostimulants and MAOIs add to the BP rise.",
        check: {
          q: "Which combination most raises esketamine's respiratory-depression risk?",
          options: ["CNS depressants (opioids, benzodiazepines, alcohol)", "Acetaminophen", "Oral SSRIs"],
          answer: "CNS depressants (opioids, benzodiazepines, alcohol)",
          why: "Additive sedation/respiratory depression is the key interaction."
        }
      }
    ],
    trap: "Esketamine (intranasal, S-enantiomer, NMDA antagonist) vs escitalopram — same 'es-' prefix, totally different drug and class.",
    takeaway: "Esketamine = intranasal NMDA-antagonist antidepressant with rapid onset for TRD/acute suicidality — in-clinic, ≥2 h monitored, boxed for sedation/dissociation/abuse."
  },

  zuranolone: {
    hook: "The first ORAL pill for postpartum depression — a 14-day neurosteroid course that helps within days, not weeks.",
    steps: [
      {
        title: "What it is",
        teach: "Zuranolone is an oral neuroactive steroid — a synthetic allopregnanolone analogue that is a positive allosteric modulator (PAM) of synaptic and extrasynaptic GABA-A receptors, boosting inhibitory GABAergic tone.",
        check: {
          q: "Zuranolone's mechanism?",
          options: ["GABA-A positive allosteric modulator (neurosteroid)", "NMDA antagonist", "5-HT2A inverse agonist"],
          answer: "GABA-A positive allosteric modulator (neurosteroid)",
          why: "It's a synthetic allopregnanolone analogue enhancing GABA-A signalling."
        }
      },
      {
        title: "The niche",
        teach: "It's for postpartum depression, given as a finite 14-day course (50 mg once daily in the evening with fatty food) — rapid-acting, with benefit by about day 3, unlike open-ended daily SSRIs.",
        check: {
          q: "How is zuranolone dosed?",
          options: ["A finite 14-day oral course", "A single IV infusion", "Indefinite daily maintenance"],
          answer: "A finite 14-day oral course",
          why: "PPD is treated with a time-limited 14-day course, benefit by ~day 3."
        }
      },
      {
        title: "No driving 12 h",
        teach: "Boxed warning: driving impairment from CNS depression — patients must not drive for at least 12 hours after each dose for the whole 14-day course, and may not sense their own impairment. Additive sedation with other CNS depressants.",
        check: {
          q: "After a zuranolone dose, patients must not drive for at least…",
          options: ["12 hours", "1 hour", "3 days"],
          answer: "12 hours",
          why: "The boxed warning is CNS-depressant driving impairment — no driving ≥12 h."
        }
      },
      {
        title: "US-only, PPD-only",
        teach: "For awareness: Zurzuvae is US-only (not marketed in Canada) and FDA-approved for postpartum depression but NOT for MDD (the MDD application got a complete response letter). Reduce to 40 mg with strong/moderate CYP3A4 inhibitors or hepatic/renal impairment.",
        check: {
          q: "What is zuranolone approved for?",
          options: ["Postpartum depression only", "MDD broadly", "Schizophrenia"],
          answer: "Postpartum depression only",
          why: "US-only for PPD; the MDD application was not approved."
        }
      }
    ],
    trap: "Zuranolone (oral, 14-day home course) vs brexanolone (60-h IV infusion) — same GABA-A neurosteroid mechanism, opposite delivery.",
    takeaway: "Zuranolone = the first oral neurosteroid for PPD — rapid 14-day course, no driving for 12 h after dosing, US-only and PPD-only."
  },

  brexanolone: {
    hook: "The first drug ever approved just for postpartum depression — a 60-hour IV neurosteroid infusion that acts within the drip.",
    steps: [
      {
        title: "What it is",
        teach: "Brexanolone is IV allopregnanolone (an endogenous progesterone metabolite) — a positive allosteric modulator of synaptic and extrasynaptic GABA-A receptors, restoring the GABAergic tone thought to fall abruptly after delivery.",
        check: {
          q: "Brexanolone replicates which endogenous molecule?",
          options: ["Allopregnanolone", "Serotonin", "Dopamine"],
          answer: "Allopregnanolone",
          why: "It's IV allopregnanolone, a GABA-A neurosteroid PAM."
        }
      },
      {
        title: "60-hour infusion",
        teach: "It's a continuous IV infusion over 60 hours with weight-based titration — the antidepressant effect appears within the infusion, versus weeks for SSRIs. It was the FIRST drug approved specifically for postpartum depression (2019).",
        check: {
          q: "How is brexanolone delivered?",
          options: ["A 60-hour continuous IV infusion", "A once-daily oral pill", "An intranasal spray"],
          answer: "A 60-hour continuous IV infusion",
          why: "It's an inpatient 60-h IV drip — the most intensive delivery of the neurosteroids."
        }
      },
      {
        title: "Watch the sats",
        teach: "The defining risk is excessive sedation and sudden loss of consciousness (and hypoxia) — so it's given only via a REMS program with continuous pulse-oximetry monitoring in a certified setting. Additive with CNS depressants.",
        check: {
          q: "What monitoring defines brexanolone administration?",
          options: ["Continuous pulse-oximetry for sudden loss of consciousness", "Weekly CBC", "QT monitoring only"],
          answer: "Continuous pulse-oximetry for sudden loss of consciousness",
          why: "Excessive sedation / sudden loss of consciousness drives the continuous monitoring requirement."
        }
      },
      {
        title: "US-only successor",
        teach: "For awareness: US-only, and the 60-h monitored-infusion logistics limited uptake — oral zuranolone is the practical successor for PPD.",
        check: {
          q: "Which drug is brexanolone's practical outpatient successor for PPD?",
          options: ["Zuranolone (oral)", "Esketamine (intranasal)", "Lumateperone (oral)"],
          answer: "Zuranolone (oral)",
          why: "Same GABA-A neurosteroid class; zuranolone is the oral, home-course version."
        }
      }
    ],
    trap: "Brexanolone (synthetic allopregnanolone, a neurosteroid) vs brexpiprazole (an antipsychotic) — a classic name trap.",
    takeaway: "Brexanolone = the first PPD-specific drug — a 60-h IV neurosteroid infusion needing continuous pulse-ox for loss of consciousness; US-only, largely succeeded by oral zuranolone."
  },

  lumateperone: {
    hook: "The atypical designed to be gentle: potent 5-HT2A block with unusually LOW D2 occupancy — light on weight, EPS, and prolactin.",
    steps: [
      {
        title: "The mechanism",
        teach: "Lumateperone pairs potent post-synaptic 5-HT2A antagonism with LOW/partial striatal D2 occupancy (~40% at therapeutic dose) plus SERT inhibition. The high 5-HT2A:D2 ratio and low absolute D2 occupancy explain its gentle profile.",
        check: {
          q: "What makes lumateperone's receptor profile distinctive?",
          options: ["High 5-HT2A:D2 ratio with low (~40%) D2 occupancy plus SERT inhibition", "Full, potent D2 blockade", "No serotonin activity at all"],
          answer: "High 5-HT2A:D2 ratio with low (~40%) D2 occupancy plus SERT inhibition",
          why: "Low absolute D2 occupancy + potent 5-HT2A block + SERT inhibition is the signature."
        }
      },
      {
        title: "Low-burden profile",
        teach: "That design gives an antipsychotic with unusually low EPS, low prolactin, and a low metabolic/weight signal — distinct from classic potent D2 blockers. Common effects are somnolence and dry mouth.",
        check: {
          q: "Compared with classic potent D2 blockers, lumateperone has…",
          options: ["Lower EPS, prolactin, and metabolic burden", "Much higher weight gain", "More tardive dyskinesia"],
          answer: "Lower EPS, prolactin, and metabolic burden",
          why: "The low D2 occupancy translates to a low EPS/prolactin/metabolic profile."
        }
      },
      {
        title: "One simple dose",
        teach: "Practically simple: a fixed 42 mg once daily with food, no titration — you start at the therapeutic dose. It's a sensitive CYP3A4 substrate, so strong 3A4 inhibitors/inducers markedly change exposure.",
        check: {
          q: "How is lumateperone dosed?",
          options: ["Fixed 42 mg once daily, no titration", "Titrated up over several weeks", "Weight-based IV"],
          answer: "Fixed 42 mg once daily, no titration",
          why: "You start at the single therapeutic dose of 42 mg."
        }
      },
      {
        title: "US-only + boxed",
        teach: "For awareness: Caplyta is US-only (not marketed in Canada), approved for schizophrenia and bipolar I/II depression. It still carries the antipsychotic-class boxed warning: increased mortality in elderly with dementia-related psychosis.",
        check: {
          q: "Which is true of lumateperone?",
          options: ["US-only; approved for schizophrenia and bipolar I/II depression", "Available in Canada as first-line", "Approved for dementia-related psychosis"],
          answer: "US-only; approved for schizophrenia and bipolar I/II depression",
          why: "US-only, covering schizophrenia plus both bipolar I and II depression."
        }
      }
    ],
    trap: "Lumateperone vs pimavanserin — both spare D2, but lumateperone keeps low/partial D2 activity (schizophrenia + bipolar depression), while pimavanserin has NO D2 activity at all (pure 5-HT2A inverse agonist for PD psychosis).",
    takeaway: "Lumateperone = a low-EPS, low-prolactin, low-metabolic atypical (high 5-HT2A:D2 ratio, ~40% D2, SERT inhibition) — fixed 42 mg, US-only for schizophrenia and bipolar I/II depression."
  },

  xanomeline_trospium: {
    hook: "The antipsychotic that never touches dopamine receptors — schizophrenia treated upstream via M1/M4 muscarinic agonism.",
    steps: [
      {
        title: "No D2 blockade",
        teach: "First-in-class: it works with NO direct D2 blockade. Xanomeline is an M1/M4 muscarinic agonist — striatal M4 activation indirectly dampens dopamine signalling and M1 modulates cortical/limbic circuits, acting upstream of the dopamine synapse.",
        check: {
          q: "How does xanomeline-trospium treat schizophrenia?",
          options: ["M1/M4 muscarinic agonism, no D2 blockade", "Potent D2 receptor blockade", "NMDA antagonism"],
          answer: "M1/M4 muscarinic agonism, no D2 blockade",
          why: "It's the only antipsychotic with no dopamine-receptor activity — muscarinic upstream."
        }
      },
      {
        title: "Why no EPS",
        teach: "Because there's no D2 blockade, there's essentially no EPS, no tardive dyskinesia from D2 blockade, and no prolactin elevation. The side-effect profile is cholinergic/anticholinergic, not dopaminergic/metabolic.",
        check: {
          q: "Why does xanomeline-trospium avoid EPS and hyperprolactinemia?",
          options: ["It doesn't block D2 receptors", "It blocks D2 very potently", "It's given only intravenously"],
          answer: "It doesn't block D2 receptors",
          why: "EPS/TD-from-D2/prolactin all stem from D2 blockade, which this drug lacks."
        }
      },
      {
        title: "Why trospium",
        teach: "Trospium is added purely as a peripheral muscarinic ANTAGONIST — a CNS-sparing quaternary amine that doesn't meaningfully cross the blood-brain barrier — to blunt xanomeline's peripheral cholinergic effects (nausea, sweating, GI) without touching the central antipsychotic action.",
        check: {
          q: "Why is trospium in the combination?",
          options: ["To blunt peripheral cholinergic side effects without entering the brain", "To add D2 blockade", "To boost central muscarinic agonism"],
          answer: "To blunt peripheral cholinergic side effects without entering the brain",
          why: "Trospium is a peripherally-restricted antimuscarinic that spares the central effect."
        }
      },
      {
        title: "US-only, cholinergic AEs",
        teach: "For awareness: Cobenfy (formerly KarXT) is US-only (not available in Canada), the first antipsychotic for schizophrenia that doesn't block dopamine. Watch cholinergic/anticholinergic effects — nausea, GI upset, dry mouth, constipation, urinary retention, and bradycardia.",
        check: {
          q: "What dominates this drug's side-effect profile?",
          options: ["Cholinergic/anticholinergic effects (GI, dry mouth, urinary retention)", "EPS and dystonia", "Hyperprolactinemia"],
          answer: "Cholinergic/anticholinergic effects (GI, dry mouth, urinary retention)",
          why: "No dopamine activity → side effects are cholinergic/anticholinergic, not dopaminergic."
        }
      }
    ],
    trap: "Xanomeline-trospium vs every other antipsychotic — it's the ONLY one with no dopamine-receptor activity; classic and atypical agents all block (or partially agonise) D2.",
    takeaway: "Xanomeline-trospium = first-in-class M1/M4 muscarinic-agonist antipsychotic with NO D2 blockade (no EPS/TD/prolactin); trospium blunts peripheral cholinergic AEs; US-only."
  },

  pimavanserin: {
    hook: "Psychosis relief for Parkinson's without wrecking movement — a selective 5-HT2A inverse agonist with zero dopamine activity.",
    steps: [
      {
        title: "The mechanism",
        teach: "Pimavanserin is a selective 5-HT2A inverse agonist/antagonist (with some 5-HT2C activity) and NO dopamine (D2) receptor activity. It dampens 5-HT2A signalling instead of blocking dopamine.",
        check: {
          q: "Pimavanserin's mechanism?",
          options: ["Selective 5-HT2A inverse agonist, no D2 activity", "Potent D2 blocker", "GABA-A neurosteroid"],
          answer: "Selective 5-HT2A inverse agonist, no D2 activity",
          why: "Pure 5-HT2A inverse agonism with zero dopaminergic activity."
        }
      },
      {
        title: "Parkinson's psychosis",
        teach: "Because it doesn't block dopamine, it treats the hallucinations and delusions of Parkinson disease psychosis WITHOUT worsening motor function — the key advantage over D2-blocking antipsychotics, which aggravate Parkinsonism.",
        check: {
          q: "Why is pimavanserin preferred for Parkinson disease psychosis?",
          options: ["It controls psychosis without worsening motor symptoms", "It's the fastest-acting sedative", "It raises dopamine to fix tremor"],
          answer: "It controls psychosis without worsening motor symptoms",
          why: "No D2 blockade means no worsening of Parkinsonian motor function."
        }
      },
      {
        title: "Mind the QT",
        teach: "QT prolongation is the defining safety caution — avoid additive QT-prolonging drugs. It's a CYP3A4 substrate: reduce to 10 mg/day with a strong 3A4 inhibitor; standard dose is 34 mg once daily, no titration.",
        check: {
          q: "Pimavanserin's defining safety caution?",
          options: ["QT prolongation", "Agranulocytosis", "Serotonin syndrome"],
          answer: "QT prolongation",
          why: "QT prolongation is the signature risk; watch additive QT-prolonging drugs."
        }
      },
      {
        title: "US-only + boxed",
        teach: "For awareness: Nuplazid is US-only (not available in Canada), approved for Parkinson disease psychosis. It carries the antipsychotic-class boxed warning for increased mortality in elderly dementia-related psychosis — it is NOT approved for dementia psychosis.",
        check: {
          q: "What does pimavanserin's boxed warning cover?",
          options: ["Increased mortality in elderly dementia-related psychosis", "Fatal arrhythmia in all patients", "Neonatal withdrawal"],
          answer: "Increased mortality in elderly dementia-related psychosis",
          why: "It carries the antipsychotic-class dementia-mortality boxed warning; not approved for dementia psychosis."
        }
      }
    ],
    trap: "Pimavanserin vs quetiapine/clozapine for PD psychosis — all avoid strong D2 blockade, but pimavanserin has NO D2 activity at all (pure 5-HT2A inverse agonist), while quetiapine/clozapine are low-D2 atypicals with off-target effects.",
    takeaway: "Pimavanserin = selective 5-HT2A inverse agonist with zero D2 activity — treats Parkinson disease psychosis without worsening movement; watch QT; US-only, dementia-mortality boxed warning."
  }
};
