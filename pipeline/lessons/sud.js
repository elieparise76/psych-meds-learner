// Substance-use-disorder micro-lessons. Key = molecule id. Facts grounded in data/deck.json.
export default {
  methadone: {
    hook: "The full-agonist OAT: no ceiling, a QT problem, and a long tail that makes induction the dangerous part.",
    steps: [
      {
        title: "What it is",
        teach: "Methadone is a FULL mu-opioid agonist used for opioid agonist therapy (OAT). Cross-tolerance suppresses withdrawal and craving and blunts the euphoria of other opioids.",
        check: {
          q: "Methadone acts at the mu-opioid receptor as a…",
          options: ["Full agonist", "Partial agonist", "Antagonist"],
          answer: "Full agonist",
          why: "It's a full mu agonist — the key contrast with buprenorphine."
        }
      },
      {
        title: "No ceiling",
        teach: "Because it's a full agonist, methadone has NO ceiling on respiratory depression — unlike buprenorphine's partial-agonist ceiling. Combined with benzodiazepines, alcohol, or gabapentinoids the risk climbs further.",
        check: {
          q: "Compared with buprenorphine, methadone's respiratory depression…",
          options: ["Has no ceiling", "Has a lower ceiling", "Cannot occur"],
          answer: "Has no ceiling",
          why: "Full agonism means dose-dependent respiratory depression with no plateau."
        }
      },
      {
        title: "Induction danger",
        teach: "Its elimination half-life is long and variable (~8–59 h, sometimes >100 h) and far outlasts the ~6–8 h analgesic effect, so it accumulates. Most overdose deaths cluster in the first 1–2 weeks — 'start low, go slow'.",
        check: {
          q: "Why do methadone overdose deaths cluster in the first 1–2 weeks?",
          options: ["Accumulation from a long, variable half-life", "Rapid tolerance loss", "An immune reaction"],
          answer: "Accumulation from a long, variable half-life",
          why: "The half-life outlasts the analgesic effect, so repeated doses accumulate during induction."
        }
      },
      {
        title: "QT & torsades",
        teach: "Methadone causes dose-dependent QT prolongation and torsades de pointes — get a baseline ECG and follow up, especially above ~100 mg/day.",
        check: {
          q: "Which OAT agent needs baseline and follow-up ECGs for QT?",
          options: ["Methadone", "Buprenorphine", "Naltrexone"],
          answer: "Methadone",
          why: "Methadone's dose-dependent QT/torsades risk drives ECG monitoring."
        }
      },
      {
        title: "CYP3A4 substrate",
        teach: "Methadone is a CYP3A4 substrate: inducers (rifampin, carbamazepine, phenytoin) lower levels and can precipitate withdrawal, while inhibitors (azoles, macrolides, protease inhibitors) push it toward toxicity.",
        check: {
          q: "Adding rifampin (a CYP3A4 inducer) to methadone tends to cause…",
          options: ["Withdrawal from lower levels", "Toxicity from higher levels", "No change"],
          answer: "Withdrawal from lower levels",
          why: "Inducers speed methadone metabolism, dropping levels toward withdrawal."
        }
      }
    ],
    trap: "Methadone (opioid agonist) is NOT methylphenidate (the ADHD stimulant) — similar names, opposite drugs.",
    takeaway: "Methadone = full-agonist OAT with no respiratory ceiling, QT/torsades, and long-half-life accumulation that makes the first 1–2 weeks of induction the deadliest window."
  },

  buprenorphine: {
    hook: "The partial-agonist OAT: a built-in safety ceiling — but start it too early and you'll trigger precipitated withdrawal.",
    steps: [
      {
        title: "What it is",
        teach: "Buprenorphine is a PARTIAL mu-opioid agonist (high affinity, low intrinsic activity) with kappa antagonism. It's the safety-forward alternative to methadone for OAT.",
        check: {
          q: "Buprenorphine acts at the mu receptor as a…",
          options: ["Partial agonist", "Full agonist", "Pure antagonist"],
          answer: "Partial agonist",
          why: "Partial agonism is what gives it a ceiling — unlike full-agonist methadone."
        }
      },
      {
        title: "The ceiling",
        teach: "Partial activation gives a CEILING on respiratory depression, making buprenorphine safer in overdose than methadone (though risk still rises with other CNS depressants).",
        check: {
          q: "Which OAT agent has a ceiling on respiratory depression?",
          options: ["Buprenorphine", "Methadone", "Neither"],
          answer: "Buprenorphine",
          why: "Its partial agonism plateaus respiratory depression."
        }
      },
      {
        title: "Precipitated withdrawal",
        teach: "Its high mu affinity displaces full agonists, so starting too soon yanks patients into precipitated withdrawal. Induce ONLY once the patient is in objective withdrawal (e.g., COWS ≥ ~8–12) or use micro-dosing.",
        check: {
          q: "Why must buprenorphine be started only once the patient is in withdrawal?",
          options: ["Its high affinity displaces residual full agonist", "It needs food to absorb", "It lowers blood pressure"],
          answer: "Its high affinity displaces residual full agonist",
          why: "Displacing a still-bound full agonist precipitates withdrawal."
        }
      },
      {
        title: "First-line OAT",
        teach: "CRISM guidance favours buprenorphine (as buprenorphine/naloxone) as first-line OAT over methadone for most patients — mainly for its safety ceiling and minimal QT effect.",
        check: {
          q: "For most patients, which OAT is generally first-line in Canada?",
          options: ["Buprenorphine", "Methadone", "Naltrexone"],
          answer: "Buprenorphine",
          why: "Its safety profile makes buprenorphine/naloxone first-line per CRISM."
        }
      }
    ],
    trap: "Buprenorphine = partial agonist / ceiling / precipitated-withdrawal risk; methadone = full agonist / no ceiling / QT & overdose. Opposite profiles.",
    takeaway: "Buprenorphine = partial-agonist first-line OAT with a respiratory-depression ceiling and minimal QT, but only start it once the patient is in objective withdrawal."
  },

  buprenorphine_naloxone: {
    hook: "Buprenorphine plus a clever decoy: the naloxone does nothing under the tongue — it only bites if you try to inject it.",
    steps: [
      {
        title: "What it is",
        teach: "This combines buprenorphine (partial mu agonist with a respiratory-depression ceiling) with naloxone (a mu antagonist) in one sublingual product — the standard first-line OAT formulation.",
        check: {
          q: "The two components of this product are…",
          options: ["Buprenorphine + naloxone", "Buprenorphine + naltrexone", "Methadone + naloxone"],
          answer: "Buprenorphine + naloxone",
          why: "It's buprenorphine plus naloxone — not naltrexone, not methadone."
        }
      },
      {
        title: "The abuse deterrent",
        teach: "Naloxone is poorly bioavailable sublingually, so it's essentially inert when taken correctly. But if the product is dissolved and injected, the naloxone blocks the high and precipitates withdrawal — deterring IV misuse.",
        check: {
          q: "Why is naloxone added to sublingual buprenorphine?",
          options: ["To deter IV misuse (inactive sublingually)", "To reverse an overdose faster", "To add pain relief"],
          answer: "To deter IV misuse (inactive sublingually)",
          why: "Inactive under the tongue, it only precipitates withdrawal if injected."
        }
      },
      {
        title: "Whose induction risk?",
        teach: "The precipitated-withdrawal caution on induction comes from the buprenorphine, not the naloxone — so start only in objective withdrawal (COWS), exactly as with the mono product.",
        check: {
          q: "The precipitated-withdrawal risk at induction is driven by…",
          options: ["Buprenorphine", "Naloxone", "Both equally"],
          answer: "Buprenorphine",
          why: "Buprenorphine's high mu affinity — not the inert sublingual naloxone — precipitates withdrawal."
        }
      }
    ],
    trap: "The naloxone here is a diversion deterrent — not naloxone the overdose-rescue drug, and not naltrexone the maintenance antagonist.",
    takeaway: "Buprenorphine/naloxone = first-line OAT; the naloxone is an inert sublingual abuse deterrent that only precipitates withdrawal if injected, while buprenorphine drives both the benefit and the induction caution."
  },

  naltrexone: {
    hook: "The maintenance antagonist that treats both bottle and needle — but only after a clean opioid-free window.",
    steps: [
      {
        title: "What it is",
        teach: "Naltrexone is an opioid receptor ANTAGONIST — it competitively blocks mu (and kappa/delta) receptors. In alcohol use disorder it blunts the opioid-mediated reward of drinking, cutting craving and heavy-drinking days.",
        check: {
          q: "Naltrexone acts at the opioid receptor as a…",
          options: ["Antagonist", "Full agonist", "Partial agonist"],
          answer: "Antagonist",
          why: "It's a competitive opioid antagonist — the opposite of the OAT agonists."
        }
      },
      {
        title: "Opioid-free window",
        teach: "Because it's an antagonist, a patient with OUD must be opioid-free ~7–10 days before starting, or blockade precipitates withdrawal (a naloxone challenge can confirm).",
        check: {
          q: "Why must a patient be opioid-free before starting naltrexone for OUD?",
          options: ["The antagonist precipitates withdrawal", "It causes a serotonin syndrome", "It needs an empty stomach"],
          answer: "The antagonist precipitates withdrawal",
          why: "Blocking receptors while opioids are on board precipitates withdrawal."
        }
      },
      {
        title: "Treats both",
        teach: "Naltrexone is dual-purpose: it reduces craving/heavy drinking in AUD AND prevents relapse in detoxified OUD. IM depot (Vivitrol, 380 mg q4 weeks) aids adherence.",
        check: {
          q: "Which agent treats BOTH alcohol and opioid use disorder?",
          options: ["Naltrexone", "Acamprosate", "Methadone"],
          answer: "Naltrexone",
          why: "It cuts drinking reward in AUD and blocks relapse in OUD."
        }
      },
      {
        title: "Blocks analgesia",
        teach: "It blocks opioid analgesia — plan non-opioid or regional pain control for surgery. It's also hepatotoxic, so check baseline and periodic LFTs.",
        check: {
          q: "A patient on naltrexone needs surgery. Opioid analgesia will be…",
          options: ["Blocked — plan non-opioid/regional", "Enhanced", "Unaffected"],
          answer: "Blocked — plan non-opioid/regional",
          why: "Receptor blockade means opioids won't relieve pain — plan alternatives."
        }
      }
    ],
    trap: "Naltrexone (LONG-acting maintenance antagonist, AUD + OUD) vs naloxone (SHORT-acting acute overdose rescue) — same antagonist family, opposite clinical use.",
    takeaway: "Naltrexone = maintenance opioid antagonist for AUD and detoxified OUD; needs a 7–10 day opioid-free window, blocks opioid analgesia, and is hepatotoxic."
  },

  acamprosate: {
    hook: "The liver-friendly anti-craving pill for alcohol — no CYP drama, no aversive punishment, just three-times-a-day discipline.",
    steps: [
      {
        title: "What it is",
        teach: "Acamprosate modulates glutamatergic (NMDA) and GABAergic signalling, helping restore the excitatory/inhibitory balance disrupted by chronic alcohol. It's an anti-craving maintenance agent — best started once abstinence is achieved.",
        check: {
          q: "Acamprosate is used mainly to…",
          options: ["Maintain abstinence / reduce craving", "Cause an aversive reaction to alcohol", "Reverse acute intoxication"],
          answer: "Maintain abstinence / reduce craving",
          why: "It's anti-craving — not aversive and not for acute withdrawal."
        }
      },
      {
        title: "Renal, not hepatic",
        teach: "Acamprosate is excreted UNCHANGED by the kidneys with no hepatic metabolism, making it a good choice in alcoholic liver disease — but it must be adjusted or avoided in renal impairment.",
        check: {
          q: "Which AUD drug is renally excreted and safe in significant liver disease?",
          options: ["Acamprosate", "Naltrexone", "Disulfiram"],
          answer: "Acamprosate",
          why: "It's cleared renally and unchanged, so the liver is spared."
        }
      },
      {
        title: "Dosing & tolerability",
        teach: "It's dosed 666 mg three times daily (TID), which hurts adherence, and diarrhea is its signature side effect. Minimal drug interactions — it can even be paired with naltrexone.",
        check: {
          q: "Acamprosate's characteristic side effect is…",
          options: ["Diarrhea", "Constipation", "A flushing reaction with alcohol"],
          answer: "Diarrhea",
          why: "Diarrhea is the hallmark side effect; TID dosing challenges adherence."
        }
      }
    ],
    trap: "Acamprosate (glutamate/GABA modulator, anti-craving) vs disulfiram (aversive) — acamprosate never makes you sick if you drink; it just reduces craving.",
    takeaway: "Acamprosate = renally-cleared, liver-friendly anti-craving agent for maintaining abstinence in AUD; TID dosing and diarrhea are its downsides, but interactions are minimal."
  },

  disulfiram: {
    hook: "The deterrent that turns one drink into misery — miss the hidden alcohol and your patient still pays for it.",
    steps: [
      {
        title: "What it is",
        teach: "Disulfiram irreversibly inhibits aldehyde dehydrogenase (ALDH). If alcohol is consumed, acetaldehyde builds up and produces the aversive disulfiram–alcohol reaction — flushing, throbbing headache, vomiting, tachycardia, hypotension.",
        check: {
          q: "Disulfiram works by inhibiting which enzyme?",
          options: ["Aldehyde dehydrogenase (ALDH)", "Monoamine oxidase", "CYP2D6"],
          answer: "Aldehyde dehydrogenase (ALDH)",
          why: "Blocking ALDH lets acetaldehyde accumulate — the basis of the reaction."
        }
      },
      {
        title: "Avoid ALL alcohol",
        teach: "Because ALDH inhibition is irreversible, avoid every source of alcohol — mouthwash, cough syrup, sauces, hand sanitizer, aftershave — and reactions can occur up to ~2 weeks after the last dose.",
        check: {
          q: "A patient on disulfiram flushes and vomits after cough syrup. Why?",
          options: ["Hidden alcohol triggered an acetaldehyde reaction", "The syrup blocked disulfiram", "An allergic response"],
          answer: "Hidden alcohol triggered an acetaldehyde reaction",
          why: "Even trace alcohol in the syrup drives the acetaldehyde reaction."
        }
      },
      {
        title: "Aversive, second-line",
        teach: "This is aversive therapy, NOT anti-craving — it needs a motivated, insightful, abstinent patient and is not first-line (naltrexone and acamprosate are preferred).",
        check: {
          q: "Compared with naltrexone/acamprosate, disulfiram is…",
          options: ["Aversive and second-line", "Anti-craving and first-line", "For acute withdrawal"],
          answer: "Aversive and second-line",
          why: "It punishes drinking rather than reducing craving; not first-line."
        }
      },
      {
        title: "Toxicity & interactions",
        teach: "Disulfiram is hepatotoxic (can be fulminant — check LFTs) and inhibits several CYPs, raising warfarin (bleeding) and phenytoin; avoid metronidazole (psychosis).",
        check: {
          q: "Adding disulfiram to warfarin tends to…",
          options: ["Raise INR / bleeding risk", "Lower INR", "Have no effect"],
          answer: "Raise INR / bleeding risk",
          why: "CYP inhibition raises warfarin levels and INR."
        }
      }
    ],
    trap: "Disulfiram (aversive, ALDH inhibitor) vs naltrexone/acamprosate (anti-craving). Beware disulfiram-LIKE reactions from metronidazole and some cephalosporins.",
    takeaway: "Disulfiram = aversive second-line AUD agent that makes drinking miserable via acetaldehyde; avoid all hidden alcohol for up to 2 weeks, watch for hepatotoxicity, and mind its CYP interactions."
  },

  varenicline: {
    hook: "The nicotinic partial agonist — the single most effective pill for quitting smoking, with dreams to match.",
    steps: [
      {
        title: "What it is",
        teach: "Varenicline is a PARTIAL agonist at the α4β2 nicotinic acetylcholine receptor: partial stimulation relieves craving/withdrawal while blocking nicotine reduces the reward of smoking.",
        check: {
          q: "At which receptor is varenicline a partial agonist?",
          options: ["α4β2 nicotinic", "Mu-opioid", "Dopamine D2"],
          answer: "α4β2 nicotinic",
          why: "It partially agonizes α4β2 nicotinic receptors — not opioid or dopamine."
        }
      },
      {
        title: "Most effective",
        teach: "Varenicline is the most effective single pharmacotherapy for smoking cessation. Start it ~1 week before the target quit date and titrate up over the first week.",
        check: {
          q: "The most effective monotherapy for smoking cessation is…",
          options: ["Varenicline", "Nicotine patch", "Disulfiram"],
          answer: "Varenicline",
          why: "It outperforms other single agents for cessation."
        }
      },
      {
        title: "Signature effects",
        teach: "Nausea and vivid/abnormal dreams are the hallmark side effects. It's renally cleared with few drug interactions, so adjust only in severe renal impairment.",
        check: {
          q: "Which pair are the hallmark side effects of varenicline?",
          options: ["Nausea and vivid dreams", "Flushing and vomiting with alcohol", "QT prolongation and torsades"],
          answer: "Nausea and vivid dreams",
          why: "Nausea plus vivid/abnormal dreams are its signature complaints."
        }
      },
      {
        title: "Neuropsychiatric watch",
        teach: "It carries a boxed warning for neuropsychiatric events (mood/behaviour changes, rare suicidal ideation). The EAGLES trial found the real risk lower than feared, but still monitor mood — especially with psychiatric history.",
        check: {
          q: "What should you monitor on varenicline, per its boxed warning?",
          options: ["Neuropsychiatric symptoms / mood", "Thyroid function", "QT interval"],
          answer: "Neuropsychiatric symptoms / mood",
          why: "The boxed warning concerns mood/behaviour changes and suicidality."
        }
      }
    ],
    trap: "Varenicline (α4β2 nicotinic partial agonist) vs bupropion (NDRI + nicotinic antagonist) — both aid cessation, different mechanisms.",
    takeaway: "Varenicline = α4β2 nicotinic partial agonist, the most effective single smoking-cessation drug; start a week before quitting, expect nausea and vivid dreams, and monitor mood."
  },

  naloxone: {
    hook: "The overdose reversal that buys you minutes, not hours — it can wear off before the opioid does.",
    steps: [
      {
        title: "What it is",
        teach: "Naloxone is a pure opioid ANTAGONIST that competitively displaces opioids at mu receptors, rapidly reversing respiratory depression. It's THE opioid-overdose rescue agent, available as IM and intranasal kits.",
        check: {
          q: "Naloxone's role is…",
          options: ["Acute opioid-overdose rescue", "Long-term relapse prevention", "Maintenance agonist therapy"],
          answer: "Acute opioid-overdose rescue",
          why: "It's the emergency antagonist that reverses respiratory depression."
        }
      },
      {
        title: "Short-acting",
        teach: "Its duration is SHORT (~30–90 min) — often shorter than the opioid it's reversing (methadone, extended-release, fentanyl analogues) — so re-narcotization can occur. Re-dose or start an infusion, and always summon emergency help.",
        check: {
          q: "Why can a methadone-overdose patient deteriorate again after responding to naloxone?",
          options: ["Naloxone is shorter-acting than methadone", "Methadone is not an opioid", "Naloxone caused an allergy"],
          answer: "Naloxone is shorter-acting than methadone",
          why: "Naloxone wears off first, so long opioids re-narcotize the patient."
        }
      },
      {
        title: "Titrate to breathing",
        teach: "In opioid-dependent patients it precipitates acute withdrawal — titrate to restore adequate breathing, not full consciousness, to limit vomiting/agitation.",
        check: {
          q: "In a dependent patient, titrate naloxone to…",
          options: ["Adequate breathing, not full alertness", "Full consciousness immediately", "The maximum dose at once"],
          answer: "Adequate breathing, not full alertness",
          why: "Over-reversing precipitates withdrawal; aim for adequate ventilation."
        }
      }
    ],
    trap: "Naloxone (SHORT-acting acute overdose RESCUE) vs naltrexone (LONG-acting maintenance antagonist). Also distinct from the naloxone inside buprenorphine/naloxone (a sublingual abuse deterrent).",
    takeaway: "Naloxone = the short-acting opioid-antagonist rescue for overdose; titrate to breathing, expect precipitated withdrawal, and watch for re-narcotization when it outlasts a shorter dose than the opioid."
  }
};
