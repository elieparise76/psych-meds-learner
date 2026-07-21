// Hypnotic / anxiolytic micro-lessons. Key = molecule id. Facts grounded in data/deck.json.
export default {
  zopiclone: {
    hook: "The Canadian Z-drug standard for short-term insomnia — spot it by the metallic aftertaste, and don't call it 'non-addictive'.",
    steps: [
      {
        title: "What it is",
        teach: "Zopiclone is a non-benzodiazepine cyclopyrrolone Z-drug. It's a positive allosteric modulator at the GABA-A benzodiazepine site, enhancing GABA-mediated Cl- influx (increases channel-opening FREQUENCY, just like benzos). It's the go-to Z-drug for short-term insomnia in Canada.",
        check: {
          q: "Where does zopiclone act?",
          options: ["The GABA-A benzodiazepine site", "Orexin OX1/OX2 receptors", "5-HT1A receptors"],
          answer: "The GABA-A benzodiazepine site",
          why: "Z-drugs are benzo-site positive allosteric modulators of GABA-A."
        }
      },
      {
        title: "The signature clue",
        teach: "A metallic/bitter aftertaste is the near-pathognomonic tip-off that a Z-drug is zopiclone. Dry mouth and next-day drowsiness are also common.",
        check: {
          q: "Which hypnotic characteristically leaves a metallic/bitter taste?",
          options: ["Zopiclone", "Melatonin", "Buspirone"],
          answer: "Zopiclone",
          why: "The metallic aftertaste is zopiclone's classic signature."
        }
      },
      {
        title: "Not 'non-addictive'",
        teach: "Because it binds the SAME benzo site, zopiclone still causes complex sleep behaviours (sleep-driving, sleep-eating), tolerance and dependence — and it's reversible with flumazenil. It is not a harmless sleep aid; use it short-term only.",
        check: {
          q: "Are Z-drugs like zopiclone reversible with flumazenil?",
          options: ["Yes — they bind the benzodiazepine site", "No — flumazenil has no effect", "Only in overdose with opioids"],
          answer: "Yes — they bind the benzodiazepine site",
          why: "Flumazenil reverses benzo-site agents, including Z-drugs."
        }
      },
      {
        title: "Stopping it",
        teach: "Take it only when a full 7–8 h night is possible, and avoid alcohol. After prolonged use, stopping brings rebound insomnia and a benzo-like withdrawal (anxiety, tremor, rarely seizures) — taper rather than stop abruptly.",
        check: {
          q: "How should prolonged zopiclone be discontinued?",
          options: ["Taper gradually", "Stop abruptly — no withdrawal occurs", "Switch to alcohol at night"],
          answer: "Taper gradually",
          why: "Prolonged use causes benzo-like withdrawal; taper to avoid it."
        }
      }
    ],
    trap: "Zopiclone vs zolpidem: both Z-drugs at the benzo site, but zopiclone = metallic taste + broader GABA-A action; zolpidem = α1-selective + sex-specific dosing.",
    takeaway: "Zopiclone = the Canadian Z-drug standard: metallic taste, benzo-site action, real dependence and complex sleep behaviours — short-term use only."
  },

  zolpidem: {
    hook: "The α1-selective Z-drug: almost purely hypnotic, dosed lower in women, and carrying a boxed warning for sleep-driving.",
    steps: [
      {
        title: "What it is",
        teach: "Zolpidem is an imidazopyridine Z-drug — a GABA-A benzo-site modulator that PREFERS the α1 (BZ1) subunit. That selectivity makes it predominantly sedative-hypnotic with little anxiolytic or muscle-relaxant effect.",
        check: {
          q: "Which GABA-A subunit does zolpidem preferentially target?",
          options: ["α1 (BZ1)", "α2 only", "It avoids GABA-A entirely"],
          answer: "α1 (BZ1)",
          why: "α1-selectivity makes zolpidem mostly hypnotic."
        }
      },
      {
        title: "Sex-specific dosing",
        teach: "Women and the elderly start at 5 mg because of slower clearance and higher next-morning drug levels; men may use 5–10 mg. Max is 10 mg/day, taken right before bed with ≥7–8 h to sleep.",
        check: {
          q: "Who gets the LOWER starting dose of zolpidem?",
          options: ["Women and the elderly", "Young men", "Everyone starts at 10 mg"],
          answer: "Women and the elderly",
          why: "Slower clearance raises morning levels, so they start at 5 mg."
        }
      },
      {
        title: "Boxed warning",
        teach: "Zolpidem carries a boxed warning for complex sleep behaviours — sleep-walking, sleep-driving and other activities while not fully awake, which can cause serious injury or death. Discontinue immediately if they occur.",
        check: {
          q: "What is zolpidem's boxed warning about?",
          options: ["Complex sleep behaviours (sleep-driving/walking)", "QT prolongation", "Enzyme induction"],
          answer: "Complex sleep behaviours (sleep-driving/walking)",
          why: "The boxed warning is for complex sleep behaviours."
        }
      },
      {
        title: "Short and reversible",
        teach: "Half-life is very short (~2.5–3 h), so it's a sleep-onset agent. Like all Z-drugs it's reversible with flumazenil; the real danger is additive respiratory depression with alcohol or opioids.",
        check: {
          q: "Zolpidem is reversible with which antidote?",
          options: ["Flumazenil", "Naloxone", "Physostigmine"],
          answer: "Flumazenil",
          why: "Benzo-site agents, including zolpidem, respond to flumazenil."
        }
      }
    ],
    trap: "Zolpidem vs zopiclone: both Z-drugs at the benzo site; zolpidem = α1-selective + sex-specific dosing, zopiclone = metallic taste + broader action.",
    takeaway: "Zolpidem = the α1-selective, short-acting Z-drug: purely hypnotic, dosed lower in women, boxed warning for complex sleep behaviours."
  },

  buspirone: {
    hook: "The non-addictive GAD anxiolytic: a 5-HT1A partial agonist that takes ~2 weeks to work and is useless as a PRN pill.",
    steps: [
      {
        title: "What it is",
        teach: "Buspirone is a 5-HT1A receptor PARTIAL agonist (with modest D2 activity). It relieves anxiety with NO GABA/benzodiazepine action — so it's non-sedating, non-myorelaxant, and non-anticonvulsant.",
        check: {
          q: "Buspirone's mechanism?",
          options: ["5-HT1A partial agonist", "GABA-A benzo-site modulator", "H1 antihistamine"],
          answer: "5-HT1A partial agonist",
          why: "Buspirone is a 5-HT1A partial agonist with no GABAergic action."
        }
      },
      {
        title: "Delayed onset, daily",
        teach: "Its anxiolytic effect builds over 1–2 weeks (full effect ~4 weeks) and it's dosed BID–TID. It is NOT effective PRN or for acute anxiety — it must be taken regularly.",
        check: {
          q: "Which anxiolytic is ineffective taken PRN?",
          options: ["Buspirone", "Hydroxyzine", "Zopiclone"],
          answer: "Buspirone",
          why: "Buspirone works only with regular daily dosing over ~2 weeks."
        }
      },
      {
        title: "No dependence, no benzo cross-tolerance",
        teach: "Buspirone has no abuse potential and no physiologic dependence — the anxiolytic of choice for GAD with a substance-use history. Crucially, it has NO cross-tolerance with benzodiazepines, so it will not relieve or cover benzo withdrawal.",
        check: {
          q: "Can buspirone relieve benzodiazepine withdrawal?",
          options: ["No — no cross-tolerance with benzos", "Yes — it fully covers withdrawal", "Only at high doses"],
          answer: "No — no cross-tolerance with benzos",
          why: "Buspirone isn't GABAergic, so it can't cover benzo withdrawal."
        }
      },
      {
        title: "Key interactions",
        teach: "MAOIs are contraindicated (hypertension / serotonin syndrome risk). Grapefruit juice and other strong CYP3A4 inhibitors markedly raise buspirone levels — reduce the dose.",
        check: {
          q: "Which markedly raises buspirone levels?",
          options: ["Grapefruit juice (CYP3A4 inhibition)", "Smoking", "A high-fat meal"],
          answer: "Grapefruit juice (CYP3A4 inhibition)",
          why: "Buspirone is a CYP3A4 substrate; grapefruit juice raises its levels."
        }
      }
    ],
    trap: "Buspirone vs bupropion — sound-alike but unrelated: BUSpirone = 5-HT1A anxiolytic for GAD; buPROPion = NDRI antidepressant/smoking-cessation agent that LOWERS the seizure threshold.",
    takeaway: "Buspirone = the non-dependence 5-HT1A GAD anxiolytic: slow (~2 wk) daily onset, useless PRN, and no benzo cross-tolerance."
  },

  hydroxyzine: {
    hook: "The antihistamine anxiolytic: rapid enough for PRN and non-addictive, but watch the anticholinergic load and the QT.",
    steps: [
      {
        title: "What it is",
        teach: "Hydroxyzine is a first-generation (piperazine) H1-antihistamine. Its anxiolytic/sedative effect comes from central H1 antagonism (plus antimuscarinic and mild 5-HT2 action) — with NO GABA/benzodiazepine activity.",
        check: {
          q: "What class is hydroxyzine?",
          options: ["First-generation H1-antihistamine", "Benzodiazepine", "Orexin antagonist"],
          answer: "First-generation H1-antihistamine",
          why: "Hydroxyzine is a sedating H1-antihistamine, not a GABAergic drug."
        }
      },
      {
        title: "Rapid and non-addictive",
        teach: "Onset is fast (~30–60 min), so hydroxyzine CAN be used PRN — and it's non-dependence-forming. That makes it a useful anxiolytic when abuse potential is a concern.",
        check: {
          q: "Can hydroxyzine be used PRN for anxiety?",
          options: ["Yes — rapid onset, non-addictive", "No — it takes 2 weeks like buspirone", "No — it's a controlled substance"],
          answer: "Yes — rapid onset, non-addictive",
          why: "Its ~30–60 min onset and lack of dependence make PRN use reasonable."
        }
      },
      {
        title: "Two cautions",
        teach: "At higher doses watch two things: anticholinergic burden (dry mouth, constipation, urinary retention — worse in the elderly) and dose-related QT prolongation/torsades. It's contraindicated with a prolonged QT interval.",
        check: {
          q: "Which cardiac risk is dose-related with hydroxyzine?",
          options: ["QT prolongation", "Bradycardia from β-blockade", "Coronary vasospasm"],
          answer: "QT prolongation",
          why: "Hydroxyzine causes dose-related QT prolongation and is contraindicated in long QT."
        }
      },
      {
        title: "Pearl: cetirizine",
        teach: "Its major active metabolite is cetirizine — itself a marketed second-generation antihistamine. That's a neat link between an anxiolytic and an over-the-counter allergy pill.",
        check: {
          q: "Hydroxyzine's active metabolite is which marketed antihistamine?",
          options: ["Cetirizine", "Loratadine", "Diphenhydramine"],
          answer: "Cetirizine",
          why: "Hydroxyzine is metabolised to the active antihistamine cetirizine."
        }
      }
    ],
    trap: "Hydroxyzine vs hydralazine (an antihypertensive) vs hydroxychloroquine — sound-alike, entirely unrelated drugs.",
    takeaway: "Hydroxyzine = the rapid, PRN-friendly, non-addictive antihistamine anxiolytic — mind the anticholinergic burden and dose-related QT."
  },

  lemborexant: {
    hook: "A dual orexin antagonist that blocks the wake signal for both sleep onset AND maintenance — the longer-acting DORA.",
    steps: [
      {
        title: "What it is",
        teach: "Lemborexant is a Dual Orexin Receptor Antagonist (DORA): it competitively blocks OX1R and OX2R, dialling down the orexin wake drive to promote both sleep onset and maintenance. There's no GABA/benzo activity, and it's non-dependence-forming.",
        check: {
          q: "How do orexin antagonists like lemborexant work?",
          options: ["Block orexin OX1/OX2 receptors", "Enhance GABA at the benzo site", "Agonise melatonin MT1/MT2"],
          answer: "Block orexin OX1/OX2 receptors",
          why: "DORAs reduce orexin wake-promoting signalling."
        }
      },
      {
        title: "The longer-acting DORA",
        teach: "Its half-life is ~17–19 h — longer than daridorexant — so next-day somnolence is more of an issue and is dose-related (greater at the 10 mg dose). Counsel about driving.",
        check: {
          q: "Compared with daridorexant, lemborexant's half-life is…",
          options: ["Longer (more next-day somnolence)", "Shorter (less carryover)", "Identical"],
          answer: "Longer (more next-day somnolence)",
          why: "Lemborexant (~17–19 h) outlasts daridorexant (~8 h)."
        }
      },
      {
        title: "Cautions",
        teach: "It's CYP3A4-dependent — avoid strong CYP3A4 inhibitors. It's contraindicated in narcolepsy, and can cause sleep paralysis or brief cataplexy-like hypnagogic muscle weakness.",
        check: {
          q: "Lemborexant is contraindicated in which condition?",
          options: ["Narcolepsy", "Hypertension", "Asthma"],
          answer: "Narcolepsy",
          why: "DORAs are contraindicated in narcolepsy."
        }
      }
    ],
    trap: "Lemborexant vs daridorexant: both DORAs, but lemborexant has the LONGER half-life → more next-day somnolence.",
    takeaway: "Lemborexant = a non-addictive dual orexin antagonist for sleep onset and maintenance — the longer-acting DORA, so watch next-day grogginess."
  },

  daridorexant: {
    hook: "The shortest-acting orexin antagonist — engineered for the least next-day grogginess of the DORAs.",
    steps: [
      {
        title: "What it is",
        teach: "Daridorexant is a Dual Orexin Receptor Antagonist (DORA), blocking OX1R and OX2R to cut the orexin wake drive and promote both sleep onset and maintenance. Like the class, it's non-dependence-forming with no GABA/benzo activity.",
        check: {
          q: "Daridorexant belongs to which class?",
          options: ["Orexin antagonist (DORA)", "Z-drug", "Barbiturate"],
          answer: "Orexin antagonist (DORA)",
          why: "It blocks OX1R/OX2R — a dual orexin receptor antagonist."
        }
      },
      {
        title: "Shortest half-life",
        teach: "Its half-life is ~8 h — shorter than lemborexant — so it's engineered to leave the least next-day residual impairment of the marketed orexin antagonists.",
        check: {
          q: "Which DORA has the least next-day carryover?",
          options: ["Daridorexant (~8 h half-life)", "Lemborexant (~17–19 h)", "They are equal"],
          answer: "Daridorexant (~8 h half-life)",
          why: "The shorter half-life minimises next-day impairment."
        }
      },
      {
        title: "Cautions",
        teach: "CYP3A4-dependent — avoid strong CYP3A4 inhibitors. It's contraindicated in narcolepsy and, like other DORAs, can cause sleep paralysis or cataplexy-like muscle weakness.",
        check: {
          q: "Which enzyme handles daridorexant (so avoid strong inhibitors of it)?",
          options: ["CYP3A4", "CYP1A2", "MAO-A"],
          answer: "CYP3A4",
          why: "Daridorexant is a CYP3A4 substrate; strong inhibitors raise exposure."
        }
      }
    ],
    trap: "Daridorexant vs lemborexant: same DORA class, but daridorexant is the SHORTER-acting one (less next-day carryover).",
    takeaway: "Daridorexant = the shortest-acting, non-addictive orexin antagonist — a benzo-free sleep option with the least next-day impairment."
  },

  melatonin: {
    hook: "The OTC circadian nudge: an MT1/MT2 hormone where the TIMING of the dose matters more than the amount — and it's remarkably safe.",
    steps: [
      {
        title: "What it is",
        teach: "Melatonin is the endogenous pineal hormone, acting as an agonist at MT1 (attenuates the wake/alerting signal → sleep onset) and MT2 (circadian phase-shifting) receptors. No GABA/benzo activity, no dependence.",
        check: {
          q: "Melatonin acts at which receptors?",
          options: ["MT1 and MT2", "GABA-A benzo site", "Orexin OX1/OX2"],
          answer: "MT1 and MT2",
          why: "Melatonin is an MT1/MT2 agonist."
        }
      },
      {
        title: "Timing beats dose",
        teach: "For circadian rhythm disorders, WHEN you take it (relative to the body clock) matters more than how much — low doses of 0.5–1 mg are used for phase-shifting. It's a gentle clock-nudger, not a knockout pill.",
        check: {
          q: "For a circadian rhythm disorder, what matters most?",
          options: ["The timing of the dose", "Taking the highest possible dose", "Taking it with a fatty meal"],
          answer: "The timing of the dose",
          why: "Phase-shifting depends on timing relative to the body clock, not dose."
        }
      },
      {
        title: "Canadian nuance",
        teach: "In Canada melatonin is sold OTC as a Natural Health Product carrying an NPN (Natural Product Number), NOT a DIN. Watch one interaction: fluvoxamine (a potent CYP1A2 inhibitor) sharply raises melatonin levels.",
        check: {
          q: "What regulatory number does OTC melatonin carry in Canada?",
          options: ["An NPN (Natural Product Number)", "A DIN", "A controlled-substance schedule"],
          answer: "An NPN (Natural Product Number)",
          why: "As a Natural Health Product it has an NPN, not a DIN."
        }
      }
    ],
    trap: "Melatonin (endogenous hormone, OTC/NPN) vs ramelteon (synthetic MT1/MT2 agonist, prescription, US-only).",
    takeaway: "Melatonin = the OTC (NPN) melatonergic for circadian problems — timing over dose, extremely safe, no dependence."
  },

  ramelteon: {
    hook: "The prescription melatonergic (US-only): an MT1/MT2 agonist for sleep onset, defined by one interaction — fluvoxamine.",
    steps: [
      {
        title: "What it is",
        teach: "Ramelteon is a selective, high-affinity melatonin MT1/MT2 receptor agonist — a pharmaceutical melatonergic that promotes sleep ONSET. It has no abuse potential and is NOT a controlled substance.",
        check: {
          q: "Ramelteon's mechanism?",
          options: ["MT1/MT2 melatonin agonist", "GABA-A benzo-site modulator", "Orexin antagonist"],
          answer: "MT1/MT2 melatonin agonist",
          why: "Ramelteon is a synthetic MT1/MT2 agonist."
        }
      },
      {
        title: "The fluvoxamine trap",
        teach: "Ramelteon is metabolised by CYP1A2. Fluvoxamine — a potent CYP1A2 inhibitor — raises ramelteon exposure enormously (~100-fold+) and is CONTRAINDICATED. This is the signature ramelteon interaction.",
        check: {
          q: "Which drug is contraindicated with ramelteon (CYP1A2)?",
          options: ["Fluvoxamine", "Grapefruit juice", "Rifampin"],
          answer: "Fluvoxamine",
          why: "Fluvoxamine's potent CYP1A2 inhibition makes it contraindicated."
        }
      },
      {
        title: "Positioning",
        teach: "Ramelteon is US-only (not marketed in Canada) — included for contrast with OTC melatonin. It's a fixed 8 mg dose with no titration, taken within 30 min of bedtime.",
        check: {
          q: "Is ramelteon a controlled substance?",
          options: ["No — no abuse potential", "Yes — Schedule IV", "Yes — same as barbiturates"],
          answer: "No — no abuse potential",
          why: "Melatonergics like ramelteon aren't controlled substances."
        }
      }
    ],
    trap: "Ramelteon (Rx melatonergic, US-only, MT1/MT2) vs melatonin (OTC/NPN hormone) vs the DORAs (orexin antagonists).",
    takeaway: "Ramelteon = the non-controlled prescription MT1/MT2 agonist for sleep onset — remember it's contraindicated with fluvoxamine (CYP1A2)."
  },

  phenobarbital: {
    hook: "The barbiturate outlier: it prolongs GABA channel DURATION with no ceiling, induces everything, and kills in overdose.",
    steps: [
      {
        title: "What it is",
        teach: "Phenobarbital is a long-acting barbiturate — a positive modulator at a distinct GABA-A site that increases the DURATION of Cl- channel opening (contrast benzodiazepines, which increase channel-opening FREQUENCY). It's a Controlled Drug.",
        check: {
          q: "At GABA-A, barbiturates increase the ___ of Cl- channel opening.",
          options: ["Duration", "Frequency", "Voltage threshold"],
          answer: "Duration",
          why: "Barbiturates prolong opening (duration); benzos increase frequency."
        }
      },
      {
        title: "No ceiling → lethal overdose",
        teach: "At high concentrations phenobarbital opens the Cl- channel directly, independent of GABA → there is NO ceiling effect → profound CNS and respiratory depression. Its overdose lethality is HIGH — the sharp contrast to overdose-safe benzodiazepines.",
        check: {
          q: "Why is phenobarbital overdose far more lethal than a benzodiazepine overdose?",
          options: ["No ceiling effect → profound respiratory depression", "It causes fatal QT prolongation", "It blocks orexin receptors"],
          answer: "No ceiling effect → profound respiratory depression",
          why: "Direct GABA-independent channel opening removes the safety ceiling."
        }
      },
      {
        title: "Flumazenil won't help",
        teach: "Phenobarbital is not a benzo-site drug, so flumazenil does NOT reverse it. Management is supportive: airway/ventilation, multi-dose activated charcoal, and urinary alkalinization.",
        check: {
          q: "Does flumazenil reverse phenobarbital overdose?",
          options: ["No — it's not a benzo-site drug", "Yes — same as benzos", "Only if given IV early"],
          answer: "No — it's not a benzo-site drug",
          why: "Flumazenil reverses benzo-site agents only, not barbiturates."
        }
      },
      {
        title: "Potent enzyme inducer",
        teach: "Phenobarbital is a potent, broad-spectrum CYP inducer (3A4, 2C, 1A2, UGT). It lowers levels of warfarin (INR falls), oral contraceptives (contraceptive FAILURE), corticosteroids and many others — a classic, high-yield interaction.",
        check: {
          q: "A classic consequence of phenobarbital's enzyme induction is…",
          options: ["Oral-contraceptive failure", "Serotonin syndrome", "Raised warfarin levels / bleeding"],
          answer: "Oral-contraceptive failure",
          why: "Induction lowers contraceptive levels, causing failure (and falling INR)."
        }
      },
      {
        title: "Dependence & withdrawal",
        teach: "Phenobarbital causes tolerance and dependence, and its withdrawal (anxiety, tremor, seizures, delirium) can be FATAL — always taper. Its half-life is very long (~2–5 days).",
        check: {
          q: "How must phenobarbital be discontinued?",
          options: ["Taper — abrupt stop risks fatal withdrawal", "Stop abruptly, it's safe", "Switch straight to alcohol"],
          answer: "Taper — abrupt stop risks fatal withdrawal",
          why: "Barbiturate withdrawal (seizures, delirium) can be fatal; always taper."
        }
      }
    ],
    trap: "Phenobarbital (barbiturate — enzyme INDUCER, GABA DURATION, overdose-lethal, flumazenil-resistant) vs a benzodiazepine (GABA FREQUENCY, overdose-safe, flumazenil-reversible).",
    takeaway: "Phenobarbital = the dangerous barbiturate outlier: prolongs Cl- channel duration with no ceiling, a potent CYP inducer, lethal in overdose, and fatal to stop abruptly."
  }
};
