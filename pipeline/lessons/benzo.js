// Benzodiazepine micro-lessons. Key = molecule id. Facts grounded in data/deck.json.
// Class spine: GABA-A positive allosteric modulation; dependence/withdrawal (seizures on
// abrupt stop); falls/cognition in the elderly (Beers); RESPIRATORY DEPRESSION + death with
// opioids/alcohol (boxed warning); flumazenil reversal. Half-life class + the "LOT"
// glucuronidation-only liver-safe trio (Lorazepam/Oxazepam/Temazepam).
export default {
  lorazepam: {
    hook: "The versatile, liver-safe workhorse: glucuronidated so it spares the sick liver, and IM/IV for status epilepticus.",
    steps: [
      {
        title: "What it is",
        teach: "Lorazepam is a benzodiazepine — a positive allosteric modulator at GABA-A that increases the frequency of chloride-channel opening, giving sedation, anxiolysis, and anticonvulsant effect.",
        check: {
          q: "How do benzodiazepines act at GABA-A?",
          options: ["Positive allosteric modulator (↑ Cl⁻ channel opening frequency)", "Directly open the channel as a GABA agonist", "Block glutamate NMDA receptors"],
          answer: "Positive allosteric modulator (↑ Cl⁻ channel opening frequency)",
          why: "Benzos don't open the channel alone — they potentiate GABA, raising opening frequency."
        }
      },
      {
        title: "The LOT trio",
        teach: "Lorazepam is glucuronidated (UGT) to an inactive metabolite — NO oxidative CYP step. With Oxazepam and Temazepam it forms the \"LOT\" trio: preserved in liver disease and preferred in the elderly.",
        check: {
          q: "Why is lorazepam preferred in hepatic impairment?",
          options: ["Glucuronidation only — no CYP oxidation, no active metabolite", "It is renally cleared unchanged", "It has no sedative effect"],
          answer: "Glucuronidation only — no CYP oxidation, no active metabolite",
          why: "LOT agents skip the oxidative CYP step that fails in liver disease."
        }
      },
      {
        title: "IM / IV / status",
        teach: "Reliable IM and IV absorption makes lorazepam first-line for acute agitation and the IV benzo of choice for status epilepticus. It's also the \"lorazepam challenge\" agent in suspected catatonia.",
        check: {
          q: "First-line IV benzodiazepine for status epilepticus?",
          options: ["Lorazepam", "Oral diazepam", "Temazepam"],
          answer: "Lorazepam",
          why: "Reliable parenteral absorption plus anticonvulsant effect makes IV lorazepam the go-to."
        }
      },
      {
        title: "Deadly with opioids",
        teach: "Boxed warning: combined with opioids (or alcohol) benzos cause profound sedation, respiratory depression, coma, and death. Flumazenil can reverse benzo sedation but is used cautiously (can precipitate seizures).",
        check: {
          q: "Which combination carries the boxed warning for fatal respiratory depression?",
          options: ["Benzodiazepine + opioid", "Benzodiazepine + SSRI", "Benzodiazepine + metformin"],
          answer: "Benzodiazepine + opioid",
          why: "Additive CNS/respiratory depression with opioids (and alcohol) can be lethal."
        }
      },
      {
        title: "Dependence & falls",
        teach: "Regular use causes dependence; abrupt stop risks withdrawal SEIZURES, so taper. In the elderly it drives falls, fractures, and cognitive impairment — a Beers-list drug.",
        check: {
          q: "Why must you never stop a chronic benzodiazepine abruptly?",
          options: ["Risk of withdrawal seizures", "Risk of hypertensive crisis", "Risk of agranulocytosis"],
          answer: "Risk of withdrawal seizures",
          why: "GABAergic dependence means abrupt cessation can trigger seizures — taper instead."
        }
      }
    ],
    takeaway: "Lorazepam = the glucuronidated (LOT) liver-safe workhorse, IM/IV for status and agitation — mind opioids, falls, and withdrawal seizures."
  },

  clonazepam: {
    hook: "The long-acting, high-potency benzo for panic — and the classic cross-taper agent to get patients off alprazolam.",
    steps: [
      {
        title: "Long & high-potency",
        teach: "Clonazepam is a long-acting (~18–50 h), high-potency GABA-A positive allosteric modulator. The long half-life and BID dosing give steadier levels and less interdose rebound than alprazolam.",
        check: {
          q: "Clonazepam's half-life class?",
          options: ["Long-acting (~18–50 h)", "Ultra-short (~1–3 h)", "No measurable half-life"],
          answer: "Long-acting (~18–50 h)",
          why: "It sits in the long-acting class, giving steady levels."
        }
      },
      {
        title: "Panic & cross-taper",
        teach: "Its long, steady action makes it a mainstay for panic disorder and the preferred agent to cross-taper patients OFF short-acting benzos like alprazolam. It's also a genuine long-term anticonvulsant.",
        check: {
          q: "Why is clonazepam used to cross-taper someone off alprazolam?",
          options: ["Its long half-life smooths withdrawal", "It is a stimulant", "It blocks serotonin reuptake"],
          answer: "Its long half-life smooths withdrawal",
          why: "Switching a short-acting benzo to long-acting clonazepam reduces interdose rebound during taper."
        }
      },
      {
        title: "Class safety",
        teach: "Like every benzo: fatal respiratory depression with opioids/alcohol, dependence with withdrawal seizures on abrupt stop, and falls/cognitive impairment in the elderly (Beers).",
        check: {
          q: "Stopping chronic clonazepam abruptly risks…?",
          options: ["Withdrawal seizures", "Rebound hypertension only", "Nothing — it self-tapers instantly"],
          answer: "Withdrawal seizures",
          why: "Benzodiazepine dependence means abrupt cessation can seize — taper."
        }
      }
    ],
    trap: "CLONAZEPAM (benzodiazepine) vs CLOZAPINE (atypical antipsychotic needing ANC monitoring) — sound-alike, utterly different drugs.",
    takeaway: "Clonazepam = long-acting, high-potency benzo for panic and for cross-tapering off alprazolam — don't confuse it with clozapine."
  },

  diazepam: {
    hook: "The lipophilic, fast-onset, LONG-tail benzo — self-tapers via desmethyldiazepam but accumulates dangerously in the elderly.",
    steps: [
      {
        title: "Fast in, slow out",
        teach: "Diazepam is highly lipophilic → very rapid CNS onset, but it's oxidized to the ACTIVE metabolite desmethyldiazepam (nordiazepam, half-life up to ~200 h) → a long, self-tapering tail.",
        check: {
          q: "What gives diazepam its long duration and self-taper?",
          options: ["The long-lived active metabolite desmethyldiazepam", "Glucuronidation to an inactive metabolite", "Renal excretion unchanged"],
          answer: "The long-lived active metabolite desmethyldiazepam",
          why: "Nordiazepam (up to ~200 h) prolongs and smooths its effect."
        }
      },
      {
        title: "Withdrawal & spasm uses",
        teach: "The smooth long tail makes diazepam a classic for alcohol withdrawal, tapering off shorter benzos, muscle spasm, and acute seizures (rapid lipophilic onset).",
        check: {
          q: "Which use suits diazepam's fast onset + long tail?",
          options: ["Alcohol-withdrawal management", "First-line SSRI for depression", "Antipsychotic maintenance"],
          answer: "Alcohol-withdrawal management",
          why: "Rapid onset plus a self-tapering active metabolite fits withdrawal."
        }
      },
      {
        title: "Elderly accumulation",
        teach: "The opposite of the LOT agents: active-metabolite accumulation causes oversedation and falls in the elderly and in hepatic disease. Beers-list — avoid; switch to lorazepam/oxazepam.",
        check: {
          q: "Why avoid diazepam in the frail elderly?",
          options: ["Active-metabolite accumulation → oversedation/falls", "It has no CNS effect in the elderly", "It is renally toxic"],
          answer: "Active-metabolite accumulation → oversedation/falls",
          why: "Long-lived nordiazepam builds up, driving sedation and falls."
        }
      },
      {
        title: "Class safety",
        teach: "Fatal respiratory depression with opioids/alcohol (boxed warning); dependence with withdrawal seizures on abrupt stop; flumazenil reverses acute benzo sedation.",
        check: {
          q: "What reverses benzodiazepine sedation?",
          options: ["Flumazenil", "Naloxone", "Physostigmine"],
          answer: "Flumazenil",
          why: "Flumazenil is the benzodiazepine antagonist (naloxone is for opioids)."
        }
      }
    ],
    trap: "Diazepam vs lorazepam — diazepam accumulates via active metabolites; lorazepam is glucuronidated and liver-safe.",
    takeaway: "Diazepam = fast-onset, long-tail (nordiazepam) benzo for withdrawal/spasm/seizures — but it accumulates in the elderly and liver disease."
  },

  alprazolam: {
    hook: "Short half-life + high potency + fast onset = the benzo with the worst interdose rebound, dependence, and dangerous taper.",
    steps: [
      {
        title: "The rebound trap",
        teach: "Alprazolam is short-acting (~11–16 h), high-potency, and fast-onset — the combination most linked to interdose rebound anxiety, dependence, and a difficult, dangerous taper.",
        check: {
          q: "Why is alprazolam the most dependence-prone anxiolytic benzo?",
          options: ["Short half-life + high potency + fast onset", "It is long-acting and low-potency", "It has no CNS penetration"],
          answer: "Short half-life + high potency + fast onset",
          why: "Rapid peaks and troughs drive interdose rebound and reinforcement."
        }
      },
      {
        title: "CYP3A4 substrate",
        teach: "Alprazolam is metabolized by CYP3A4. Strong 3A4 inhibitors (azoles, protease inhibitors, clarithromycin, nefazodone) markedly raise levels and toxicity; inducers like carbamazepine lower them.",
        check: {
          q: "Which enzyme metabolizes alprazolam?",
          options: ["CYP3A4", "UGT glucuronidation only", "CYP2D6"],
          answer: "CYP3A4",
          why: "3A4 metabolism means many interactions — unlike the glucuronidated LOT agents."
        }
      },
      {
        title: "How to stop it",
        teach: "Don't stop abruptly — withdrawal seizures. To discontinue, cross-taper to a longer-acting benzo (clonazepam) first for a smoother course.",
        check: {
          q: "Preferred way to discontinue chronic alprazolam?",
          options: ["Cross-taper to a longer-acting benzo (e.g., clonazepam)", "Stop it abruptly overnight", "Double the dose then stop"],
          answer: "Cross-taper to a longer-acting benzo (e.g., clonazepam)",
          why: "A longer-acting agent smooths the taper and reduces rebound/seizure risk."
        }
      },
      {
        title: "Class safety",
        teach: "Boxed warning: profound respiratory depression, coma, and death with opioids or alcohol. Falls and cognitive impairment in the elderly (Beers).",
        check: {
          q: "Alprazolam plus which agent is a boxed-warning fatal combination?",
          options: ["Opioids", "Beta-blockers", "Statins"],
          answer: "Opioids",
          why: "Additive respiratory depression with opioids can be lethal."
        }
      }
    ],
    trap: "Alprazolam vs lorazepam — alprazolam is CYP3A4, higher-potency, with worse rebound/dependence; lorazepam is glucuronidated, liver-safe, and IM/IV.",
    takeaway: "Alprazolam = short, high-potency, CYP3A4 benzo with the worst rebound and dependence — taper via clonazepam, never abruptly."
  },

  oxazepam: {
    hook: "A slow-onset, glucuronidated LOT agent — liver-safe and low-abuse, favoured for anxiety and alcohol withdrawal.",
    steps: [
      {
        title: "A LOT agent",
        teach: "Oxazepam is glucuronidated (UGT) only — no oxidative CYP step, no active metabolite. One of the LOT trio (Lorazepam/Oxazepam/Temazepam): liver- and elderly-preferred.",
        check: {
          q: "Oxazepam is a member of which liver-safe trio?",
          options: ["The \"LOT\" agents (Lorazepam/Oxazepam/Temazepam)", "The tricyclics", "The Z-drugs"],
          answer: "The \"LOT\" agents (Lorazepam/Oxazepam/Temazepam)",
          why: "All three are glucuronidated with no active metabolite — safe in liver disease."
        }
      },
      {
        title: "Slow onset, low abuse",
        teach: "Its slow onset gives low abuse-reinforcement relative to alprazolam/diazepam, and it's used for alcohol withdrawal when hepatic function is impaired. (It's itself an active metabolite of diazepam.)",
        check: {
          q: "Why is oxazepam relatively low in abuse liability?",
          options: ["Slow onset of action", "It is not a GABA-A modulator", "It has an ultra-long half-life"],
          answer: "Slow onset of action",
          why: "A slow rise gives less reinforcing 'rush' than fast-onset benzos."
        }
      },
      {
        title: "Class safety",
        teach: "Still a benzo: respiratory depression with opioids/alcohol (boxed warning), dependence with withdrawal seizures on abrupt stop, and falls in the elderly.",
        check: {
          q: "Abrupt cessation of chronic oxazepam can cause…?",
          options: ["Withdrawal seizures", "Serotonin syndrome", "Neutropenia"],
          answer: "Withdrawal seizures",
          why: "Benzo dependence means abrupt stop can seize — taper."
        }
      }
    ],
    trap: "Oxazepam vs temazepam — both glucuronidated LOT agents; temazepam is marketed as a hypnotic, oxazepam as an anxiolytic/withdrawal agent.",
    takeaway: "Oxazepam = slow-onset, glucuronidated LOT anxiolytic — liver-safe, low-abuse, useful in alcohol withdrawal with impaired liver."
  },

  temazepam: {
    hook: "The liver-safe benzo hypnotic: glucuronidated (a LOT agent), intermediate-acting for sleep maintenance with less carryover.",
    steps: [
      {
        title: "LOT hypnotic",
        teach: "Temazepam is glucuronidated (UGT) only — no CYP, no active metabolite. It's the LOT-trio hypnotic: the sleep benzo of choice in liver disease and the elderly.",
        check: {
          q: "Why is temazepam the safer benzo hypnotic in liver disease?",
          options: ["Glucuronidation only — no CYP, no active metabolite", "It is not sedating", "It is excreted unchanged by the lungs"],
          answer: "Glucuronidation only — no CYP, no active metabolite",
          why: "As a LOT agent it skips the failing oxidative step and doesn't accumulate."
        }
      },
      {
        title: "Intermediate half-life",
        teach: "Its intermediate half-life (~8–15 h) targets sleep MAINTENANCE with less accumulation than flurazepam or nitrazepam — less next-day hangover.",
        check: {
          q: "Temazepam is best suited for which sleep problem?",
          options: ["Sleep maintenance", "Only sleep onset", "Daytime alertness"],
          answer: "Sleep maintenance",
          why: "Its intermediate duration covers the night without a long carryover tail."
        }
      },
      {
        title: "Hypnotic hazards",
        teach: "Like other hypnotics it can cause complex sleep behaviours (sleep-driving) and anterograde amnesia; plus the class risks — respiratory depression with opioids/alcohol and falls in the elderly.",
        check: {
          q: "Which is a recognised benzodiazepine-hypnotic adverse effect?",
          options: ["Complex sleep behaviours (e.g., sleep-driving)", "Hypertensive crisis", "Agranulocytosis"],
          answer: "Complex sleep behaviours (e.g., sleep-driving)",
          why: "Sleep-driving and anterograde amnesia are classic hypnotic effects."
        }
      }
    ],
    trap: "Temazepam vs triazolam — temazepam is intermediate/glucuronidated (liver-safe); triazolam is ultra-short/CYP3A4 with marked amnesia and rebound.",
    takeaway: "Temazepam = the intermediate, glucuronidated LOT benzo hypnotic for sleep maintenance — liver-safe with less next-day carryover."
  },

  chlordiazepoxide: {
    hook: "The original Librium alcohol-withdrawal benzo: long-acting via active metabolites for a smooth fixed-dose taper.",
    steps: [
      {
        title: "Withdrawal taper agent",
        teach: "Chlordiazepoxide is the classic long-acting alcohol-withdrawal benzo, giving a smooth fixed-dose taper in patients with normal liver function.",
        check: {
          q: "What is chlordiazepoxide classically used for?",
          options: ["Alcohol-withdrawal taper", "Status epilepticus IV push", "Procedural sedation"],
          answer: "Alcohol-withdrawal taper",
          why: "Its long, self-tapering action suits fixed-dose withdrawal protocols."
        }
      },
      {
        title: "Active metabolites",
        teach: "It's oxidized (CYP) to multiple long-lived ACTIVE metabolites, including desmethyldiazepam — extending its duration to the long class but causing accumulation.",
        check: {
          q: "What extends chlordiazepoxide's duration of action?",
          options: ["Long-lived active metabolites (e.g., desmethyldiazepam)", "Glucuronidation to inactive metabolite", "Rapid renal clearance"],
          answer: "Long-lived active metabolites (e.g., desmethyldiazepam)",
          why: "Oxidative metabolism yields active nordiazepam and others that accumulate."
        }
      },
      {
        title: "When to switch",
        teach: "Because of accumulation, avoid it in cirrhosis and the frail elderly — switch withdrawal to a LOT agent (lorazepam/oxazepam) that is glucuronidated and liver-safe.",
        check: {
          q: "In cirrhosis, switch alcohol-withdrawal cover from chlordiazepoxide to…?",
          options: ["Lorazepam or oxazepam (LOT agents)", "Diazepam", "Flurazepam"],
          answer: "Lorazepam or oxazepam (LOT agents)",
          why: "Glucuronidated LOT agents don't accumulate when the liver is impaired."
        }
      }
    ],
    trap: "Chlordiazepoxide vs clorazepate — both feed into desmethyldiazepam; chlordiazepoxide is the older Librium withdrawal agent.",
    takeaway: "Chlordiazepoxide = the long-acting Librium withdrawal-taper benzo (normal liver) — accumulates, so switch to a LOT agent in cirrhosis/elderly."
  },

  midazolam: {
    hook: "The ultra-short, water-soluble procedural-sedation benzo — IM/intranasal/buccal for seizures without IV access.",
    steps: [
      {
        title: "Procedural workhorse",
        teach: "Midazolam is ultra-short-acting (~1.5–3 h) and water-soluble — the procedural-sedation and anesthesia-induction benzo. Its amnestic effect is used therapeutically.",
        check: {
          q: "What is midazolam's signature clinical niche?",
          options: ["Procedural sedation", "Chronic anxiety maintenance", "Long-term epilepsy monotherapy"],
          answer: "Procedural sedation",
          why: "Ultra-short action plus amnesia fits short procedures."
        }
      },
      {
        title: "No IV? No problem",
        teach: "IM, intranasal, and buccal routes let midazolam treat seizures when there's NO IV access — where IV lorazepam would be first-line if access existed.",
        check: {
          q: "Benzodiazepine of choice for seizures when there is NO IV access?",
          options: ["IM or intranasal midazolam", "Oral temazepam", "IV lorazepam"],
          answer: "IM or intranasal midazolam",
          why: "Its non-IV parenteral routes work when you can't get a line; IV lorazepam needs access."
        }
      },
      {
        title: "CYP3A4 & delayed emergence",
        teach: "A CYP3A4 substrate — strong inhibitors prolong sedation. Its active metabolite 1-hydroxymidazolam accumulates in renal failure and long ICU infusions → delayed awakening.",
        check: {
          q: "Why can prolonged ICU midazolam cause delayed awakening in renal failure?",
          options: ["Accumulation of active 1-hydroxymidazolam", "Irreversible SERT blockade", "Depletion of GABA stores"],
          answer: "Accumulation of active 1-hydroxymidazolam",
          why: "The renally-cleared active metabolite builds up when clearance fails."
        }
      },
      {
        title: "Monitor & reverse",
        teach: "IV midazolam warning: respiratory depression and arrest — give only where airway management and monitoring (pulse oximetry, resuscitation) are available. Flumazenil reverses it; opioids compound the risk.",
        check: {
          q: "What is the antidote to midazolam over-sedation?",
          options: ["Flumazenil", "Naloxone", "Atropine"],
          answer: "Flumazenil",
          why: "Flumazenil antagonizes benzodiazepines (naloxone reverses opioids)."
        }
      }
    ],
    trap: "Midazolam vs lorazepam for status — IM/intranasal midazolam when there's no IV access; IV lorazepam when access exists.",
    takeaway: "Midazolam = ultra-short, water-soluble procedural-sedation benzo with IM/IN/buccal routes — CYP3A4, monitor the airway, reverse with flumazenil."
  },

  bromazepam: {
    hook: "A Canada/Europe intermediate-acting anxiolytic benzo — behaves like a mid-range member of the class.",
    steps: [
      {
        title: "Intermediate anxiolytic",
        teach: "Bromazepam is an intermediate-half-life (~10–20 h) GABA-A positive allosteric modulator used for anxiety — available in Canada and Europe but not US-marketed.",
        check: {
          q: "Bromazepam's half-life class?",
          options: ["Intermediate (~10–20 h)", "Ultra-short (~1–3 h)", "Ultra-long (~200 h)"],
          answer: "Intermediate (~10–20 h)",
          why: "It sits in the intermediate anxiolytic range."
        }
      },
      {
        title: "Oxidatively metabolized",
        teach: "Unlike the glucuronidated LOT agents, bromazepam is oxidatively metabolized (CYP) — so hepatic impairment and CYP inhibitors can raise its levels.",
        check: {
          q: "How is bromazepam metabolized (vs the LOT agents)?",
          options: ["Oxidatively via CYP", "Glucuronidation only", "Excreted unchanged in urine"],
          answer: "Oxidatively via CYP",
          why: "It relies on oxidative metabolism, unlike glucuronidated LOT benzos."
        }
      },
      {
        title: "Class rules apply",
        teach: "As a standard benzo it carries the class risks: respiratory depression with opioids/alcohol, dependence with withdrawal seizures on abrupt stop, and falls/cognition problems in the elderly.",
        check: {
          q: "What is the key hazard of stopping chronic bromazepam abruptly?",
          options: ["Withdrawal seizures", "Rebound psychosis", "Bone-marrow suppression"],
          answer: "Withdrawal seizures",
          why: "Benzo dependence means abrupt cessation can seize — taper."
        }
      }
    ],
    trap: "Bromazepam vs lorazepam — both intermediate anxiolytics; lorazepam is glucuronidated and IM/IV-available, while bromazepam is oxidatively metabolized and Canada/Europe-only.",
    takeaway: "Bromazepam = a Canada/Europe intermediate anxiolytic benzo — same GABA-A action and class cautions as its neighbours."
  },

  nitrazepam: {
    hook: "A long-acting Canada/Europe hypnotic — potent sleep, but notable next-day hangover and falls.",
    steps: [
      {
        title: "Long-acting hypnotic",
        teach: "Nitrazepam is a long-acting (~16–40 h) benzodiazepine hypnotic (Canada/Europe, not US). Its long duration causes next-day drowsiness (\"hangover\") and falls, especially in the elderly.",
        check: {
          q: "Why does nitrazepam cause next-day sedation?",
          options: ["Its long half-life carries over into the day", "It has no CNS effect", "It is a stimulant metabolite"],
          answer: "Its long half-life carries over into the day",
          why: "Long-acting hypnotics leave residual sedation the next morning."
        }
      },
      {
        title: "Class safety",
        teach: "Standard benzo hazards: respiratory depression with opioids/alcohol, dependence with rebound insomnia, and falls/next-day impairment in the elderly.",
        check: {
          q: "In the elderly, nitrazepam's long action most raises the risk of…?",
          options: ["Falls / next-day impairment", "Hypertensive crisis", "Hyperthyroidism"],
          answer: "Falls / next-day impairment",
          why: "Carryover sedation drives falls in older patients."
        }
      },
      {
        title: "Choose temazepam instead",
        teach: "For a cleaner hypnotic in the elderly or hepatic patients, contrast nitrazepam with the intermediate, glucuronidated LOT agent temazepam, which accumulates less.",
        check: {
          q: "A less-accumulating benzo hypnotic alternative to nitrazepam?",
          options: ["Temazepam (intermediate, glucuronidated)", "Flurazepam (very long metabolite)", "Diazepam (long active tail)"],
          answer: "Temazepam (intermediate, glucuronidated)",
          why: "Glucuronidated temazepam has no long active metabolite, so less carryover."
        }
      }
    ],
    trap: "Nitrazepam vs temazepam — nitrazepam is long-acting (carryover); temazepam is intermediate/glucuronidated (liver-safe, less carryover).",
    takeaway: "Nitrazepam = a long-acting Canada/Europe benzo hypnotic with notable next-day sedation and falls — contrast the cleaner LOT agent temazepam."
  },

  clobazam: {
    hook: "The 1,5-benzodiazepine seizure adjunct: more anticonvulsant, less sedation — with a CYP2C19-cleared long-acting active metabolite.",
    steps: [
      {
        title: "A 1,5-benzodiazepine",
        teach: "Clobazam is a 1,5-benzodiazepine (vs the classic 1,4 structure), giving relatively MORE anticonvulsant/anxiolytic effect with comparatively LESS sedation.",
        check: {
          q: "What distinguishes clobazam structurally from most benzos?",
          options: ["It is a 1,5-benzodiazepine (less sedating, anticonvulsant-selective)", "It is not a GABA-A modulator", "It lacks a benzene ring"],
          answer: "It is a 1,5-benzodiazepine (less sedating, anticonvulsant-selective)",
          why: "The 1,5 structure shifts the profile toward anticonvulsant with less sedation."
        }
      },
      {
        title: "Lennox-Gastaut niche",
        teach: "Its key niche is as an ADJUNCT for Lennox-Gastaut syndrome and refractory epilepsy — one of the few benzos used routinely long-term for seizures.",
        check: {
          q: "Clobazam's flagship epilepsy indication?",
          options: ["Adjunct for Lennox-Gastaut syndrome", "Monotherapy for absence seizures only", "Status epilepticus IV push"],
          answer: "Adjunct for Lennox-Gastaut syndrome",
          why: "It's a recognised LGS/refractory-epilepsy adjunct."
        }
      },
      {
        title: "CYP2C19 metabolite",
        teach: "Clobazam is metabolized (CYP3A4/2C19) to N-desmethylclobazam — a long-acting active metabolite CLEARED by CYP2C19. Poor metabolizers or 2C19 inhibitors (fluconazole, omeprazole) accumulate it.",
        check: {
          q: "Which CYP polymorphism makes clobazam's active metabolite accumulate?",
          options: ["CYP2C19 (poor metabolizers/inhibitors)", "CYP2D6 ultrarapid metabolizers", "CYP1A2 inducers"],
          answer: "CYP2C19 (poor metabolizers/inhibitors)",
          why: "N-desmethylclobazam is cleared by 2C19, so 2C19 blockage builds it up."
        }
      },
      {
        title: "Rare severe rash",
        teach: "Watch for rare serious skin reactions (Stevens-Johnson/TEN). Plus the class risks: respiratory depression with opioids/alcohol and seizure exacerbation if stopped abruptly.",
        check: {
          q: "Which rare but serious reaction is flagged with clobazam?",
          options: ["Stevens-Johnson syndrome / TEN", "Priapism", "Peripheral neuropathy"],
          answer: "Stevens-Johnson syndrome / TEN",
          why: "Severe cutaneous reactions are a recognised (rare) clobazam risk."
        }
      }
    ],
    trap: "Clobazam vs clonazepam — clobazam is a 1,5-benzodiazepine (LGS adjunct, less sedating, CYP2C19-cleared metabolite); clonazepam is a 1,4-benzodiazepine.",
    takeaway: "Clobazam = the 1,5-benzodiazepine LGS/epilepsy adjunct — anticonvulsant-selective with a CYP2C19-dependent long-acting active metabolite."
  },

  flurazepam: {
    hook: "The classic \"accumulating hypnotic\": its ~250 h active metabolite piles up night after night into daytime sedation.",
    steps: [
      {
        title: "The accumulating tail",
        teach: "Flurazepam's parent is short, but its active metabolite N-desalkylflurazepam lasts up to ~250 h → cumulative next-day sedation that worsens over successive nights.",
        check: {
          q: "Why does flurazepam cause worsening daytime sedation over several nights?",
          options: ["Its very long active metabolite accumulates", "It induces its own metabolism", "It is renally toxic"],
          answer: "Its very long active metabolite accumulates",
          why: "N-desalkylflurazepam (~250 h) builds up with repeated dosing."
        }
      },
      {
        title: "Falls & class safety",
        teach: "Accumulation drives falls in the elderly (Beers). Standard benzo hazards apply: respiratory depression with opioids/alcohol and dependence/rebound insomnia.",
        check: {
          q: "Flurazepam's accumulation most endangers which group?",
          options: ["The elderly (falls)", "Young athletes", "Neonates only"],
          answer: "The elderly (falls)",
          why: "Cumulative next-day sedation raises fall risk in older patients."
        }
      },
      {
        title: "Pick temazepam instead",
        teach: "For a cleaner hypnotic in the elderly or hepatic patients, choose temazepam — intermediate half-life, glucuronidated, no active metabolite — so it doesn't pile up like flurazepam.",
        check: {
          q: "Which hypnotic avoids flurazepam's accumulation problem?",
          options: ["Temazepam (glucuronidated, no active metabolite)", "Diazepam (long active metabolite)", "Clorazepate (nordiazepam prodrug)"],
          answer: "Temazepam (glucuronidated, no active metabolite)",
          why: "As a LOT agent temazepam has no long active metabolite to accumulate."
        }
      }
    ],
    trap: "Flurazepam vs temazepam — flurazepam accumulates (long active metabolite); temazepam does not (intermediate, glucuronidated LOT agent).",
    takeaway: "Flurazepam = the accumulating benzo hypnotic (N-desalkylflurazepam ~250 h) → cumulative daytime sedation and falls — the opposite of temazepam."
  },

  triazolam: {
    hook: "The ultra-short sleep-onset hypnotic — minimal hangover, but marked amnesia, early rebound, and CYP3A4 contraindications.",
    steps: [
      {
        title: "Ultra-short sleep-onset",
        teach: "Triazolam is ultra-short-acting (~1.5–5.5 h) → little next-day hangover, but it's a sleep-ONSET agent only; it wears off too fast to maintain sleep, causing early-morning rebound.",
        check: {
          q: "Triazolam is best for which sleep problem?",
          options: ["Sleep onset (falling asleep)", "Sleep maintenance through the night", "Daytime somnolence"],
          answer: "Sleep onset (falling asleep)",
          why: "Ultra-short action helps initiation but wears off, so it can't maintain sleep."
        }
      },
      {
        title: "Amnesia & rebound",
        teach: "It's the benzo most associated with prominent anterograde amnesia and early-morning rebound insomnia/anxiety, plus complex sleep behaviours (sleep-driving).",
        check: {
          q: "Which effect is most prominent with triazolam?",
          options: ["Anterograde amnesia", "Weight gain", "Hyperprolactinemia"],
          answer: "Anterograde amnesia",
          why: "Marked anterograde amnesia is a signature triazolam adverse effect."
        }
      },
      {
        title: "CYP3A4 contraindications",
        teach: "Extensively metabolized by CYP3A4 → strong inhibitors (ketoconazole, itraconazole, protease inhibitors, clarithromycin, nefazodone) and grapefruit are CONTRAINDICATED — they push levels to toxicity.",
        check: {
          q: "Which combination with triazolam is contraindicated?",
          options: ["Strong CYP3A4 inhibitors (e.g., azoles, protease inhibitors, grapefruit)", "A high-fibre diet", "Vitamin C"],
          answer: "Strong CYP3A4 inhibitors (e.g., azoles, protease inhibitors, grapefruit)",
          why: "3A4 inhibition raises triazolam to toxic levels — a labelled contraindication."
        }
      }
    ],
    trap: "Triazolam vs temazepam — triazolam is ultra-short/CYP3A4 (amnesia, rebound, many interactions); temazepam is intermediate/glucuronidated (liver-safe, fewer interactions).",
    takeaway: "Triazolam = the ultra-short, CYP3A4 sleep-onset hypnotic — little hangover but marked amnesia, rebound, and contraindicated strong-3A4/grapefruit combos."
  },

  clorazepate: {
    hook: "A benzodiazepine PRODRUG: acid in the stomach converts it to long-acting nordiazepam — behaves like diazepam.",
    steps: [
      {
        title: "A gastric prodrug",
        teach: "Clorazepate is a PRODRUG: gastric acid decarboxylates it to desmethyldiazepam (nordiazepam) before absorption. Antacids that reduce stomach acidity can blunt this conversion.",
        check: {
          q: "How is clorazepate activated?",
          options: ["Gastric acid converts it to desmethyldiazepam (nordiazepam)", "Renal hydroxylation to an active form", "It is already fully active as given"],
          answer: "Gastric acid converts it to desmethyldiazepam (nordiazepam)",
          why: "It's decarboxylated pre-systemically in the acidic stomach to nordiazepam."
        }
      },
      {
        title: "Long-acting like diazepam",
        teach: "Because its effect is really that of nordiazepam (up to ~100–200 h), clorazepate is long-acting and self-tapering — the same active metabolite shared by diazepam and chlordiazepoxide.",
        check: {
          q: "Clorazepate shares its long-acting active metabolite with…?",
          options: ["Diazepam and chlordiazepoxide (desmethyldiazepam)", "Lorazepam and oxazepam", "Midazolam"],
          answer: "Diazepam and chlordiazepoxide (desmethyldiazepam)",
          why: "All three converge on long-lived nordiazepam."
        }
      },
      {
        title: "Elderly accumulation",
        teach: "Like diazepam, the long active metabolite accumulates in the elderly and hepatic disease → oversedation and falls (Beers). Plus class risks: respiratory depression with opioids/alcohol and withdrawal seizures on abrupt stop.",
        check: {
          q: "Why avoid clorazepate in the frail elderly?",
          options: ["Nordiazepam accumulation → oversedation/falls", "It causes hypertension", "It has no active metabolite"],
          answer: "Nordiazepam accumulation → oversedation/falls",
          why: "Its long-lived active metabolite builds up, driving sedation and falls."
        }
      }
    ],
    trap: "Clorazepate vs clonazepam — sound-alike, but clorazepate is a long-acting prodrug of nordiazepam; clonazepam is a distinct high-potency long-acting benzo.",
    takeaway: "Clorazepate = an acid-activated benzo prodrug of long-acting nordiazepam — behaves like diazepam and accumulates in the elderly/liver disease."
  }
};
