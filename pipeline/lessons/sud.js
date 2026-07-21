// Substance-use-disorder micro-lessons. Key = molecule id. Facts grounded in data/deck.json.
export default {
  methadone: {
    hook: "The full-agonist workhorse of opioid agonist therapy — powerful and proven, but induction is the deadly part.",
    steps: [
      {
        title: "The big picture",
        teach: "Methadone is a long-acting opioid you give ONCE daily to treat opioid use disorder — opioid agonist therapy (OAT). By keeping the mu receptor steadily occupied it holds off withdrawal and craving all day, so a patient can get out of the chaos of using and back into a stable life."
      },
      {
        title: "Where it sits",
        teach: "It's one of the two pillars of OAT (alongside buprenorphine). Buprenorphine/naloxone is usually first-line for its safety, but methadone is invaluable for patients who need a stronger full agonist or who don't stabilize on buprenorphine — and it's a standard, do-NOT-withdraw option in pregnancy.",
        check: {
          q: "For most patients starting OAT, methadone is best described as…",
          options: ["A key option, though buprenorphine is usually tried first", "Always the first choice over buprenorphine", "Only for pain, never for OUD"],
          answer: "A key option, though buprenorphine is usually tried first",
          why: "Buprenorphine/naloxone is generally first-line for safety, but methadone remains an essential OAT option."
        }
      },
      {
        title: "How you use it",
        teach: "Start LOW and go SLOW: about 10–30 mg on day 1 (never more than ~30–40 mg), witnessed daily at the pharmacy at first. Because it takes days to reach steady state, you only raise the dose by ~5–10 mg every 5+ days, aiming for a usual maintenance of roughly 60–120 mg/day."
      },
      {
        title: "The induction trap",
        teach: "Here's the must-not-miss. Methadone's half-life is long and unpredictable (~8–59 h, sometimes >100 h) and outlasts how long the patient FEELS the dose, so it quietly accumulates over days. Most overdose deaths land in the first 1–2 weeks — the patient can feel under-dosed and 'top up,' then stop breathing.",
        check: {
          q: "Why do methadone deaths cluster in the first 1–2 weeks of treatment?",
          options: ["The long half-life makes doses accumulate over days", "Tolerance is lost overnight", "It triggers an allergic reaction"],
          answer: "The long half-life makes doses accumulate over days",
          why: "It outlasts the felt effect, so repeated doses stack up during induction — start low, go slow."
        }
      },
      {
        title: "QT & torsades",
        teach: "Methadone causes dose-dependent QT prolongation and can tip into torsades de pointes. So you get a baseline ECG, another around 30 days, then periodically — especially with cardiac risk factors, other QT drugs, or doses above ~100 mg/day.",
        check: {
          q: "Which OAT agent specifically warrants baseline and follow-up ECGs?",
          options: ["Methadone", "Buprenorphine", "Naltrexone"],
          answer: "Methadone",
          why: "Its dose-dependent QT/torsades risk is what drives the ECG monitoring."
        }
      },
      {
        title: "What patients feel",
        teach: "Day to day, expect constipation, sweating, sedation, weight gain, and reduced libido (hypogonadism). Counsel hard: never miss or double up, never combine with alcohol, benzodiazepines, or other sedatives, and store it locked away — a single dose can kill a child."
      },
      {
        title: "Watch the CYP3A4 interactions",
        teach: "Methadone is metabolized by CYP3A4. Inducers like rifampin, carbamazepine, or phenytoin speed it up and can drop levels into withdrawal; inhibitors like azole antifungals or macrolides slow it down and push toward toxicity.",
        check: {
          q: "Starting rifampin (a CYP3A4 inducer) in a methadone patient tends to cause…",
          options: ["Withdrawal from falling levels", "Toxicity from rising levels", "No change at all"],
          answer: "Withdrawal from falling levels",
          why: "Inducers accelerate methadone metabolism, dropping levels toward withdrawal."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Under the hood it's a FULL mu-opioid agonist — that's why there's NO ceiling on respiratory depression (unlike buprenorphine). Cross-tolerance from steady occupancy is what suppresses withdrawal and blunts the high of any opioid used on top."
      }
    ],
    trap: "Methadone (opioid agonist for OUD) is NOT methylphenidate (the ADHD stimulant) — sound-alike names, completely opposite drugs.",
    takeaway: "Methadone = full-agonist OAT with no respiratory ceiling, dose-dependent QT/torsades, and long-half-life accumulation that makes the first 1–2 weeks of induction the most dangerous window."
  },

  buprenorphine: {
    hook: "The safety-first OAT: a built-in ceiling on respiratory depression — but start it too early and you trigger precipitated withdrawal.",
    steps: [
      {
        title: "The big picture",
        teach: "Buprenorphine is a once-daily sublingual medication for opioid use disorder — the safety-forward alternative to methadone. It occupies the mu receptor firmly enough to hold off withdrawal and craving, but with a partial effect that makes it much harder to overdose on."
      },
      {
        title: "Where it sits",
        teach: "Canadian guidance (CRISM) favours buprenorphine — as buprenorphine/naloxone — as FIRST-LINE OAT for most patients, ahead of methadone, mainly because of its safety ceiling and minimal QT effect.",
        check: {
          q: "For most patients, which OAT is generally recommended first-line in Canada?",
          options: ["Buprenorphine", "Methadone", "Naltrexone"],
          answer: "Buprenorphine",
          why: "CRISM favours buprenorphine/naloxone first-line for its safety profile."
        }
      },
      {
        title: "The safety ceiling",
        teach: "Because it only partially activates the receptor, buprenorphine has a CEILING on respiratory depression — push the dose and the effect plateaus. That's what makes it safer in overdose than methadone, though risk still climbs if it's combined with benzodiazepines or alcohol.",
        check: {
          q: "Why is buprenorphine safer in overdose than methadone?",
          options: ["Its partial action puts a ceiling on respiratory depression", "It isn't an opioid", "It's cleared instantly"],
          answer: "Its partial action puts a ceiling on respiratory depression",
          why: "Partial agonism plateaus respiratory depression — methadone as a full agonist has no such ceiling."
        }
      },
      {
        title: "The induction rule",
        teach: "This is the must-not-miss. Buprenorphine grips the receptor so tightly it will KNOCK OFF any full agonist still on board — dragging the patient into sudden, precipitated withdrawal. So you induce ONLY once they're already in objective withdrawal (COWS ≥ ~8–12), or use a micro-dosing protocol.",
        check: {
          q: "Why must buprenorphine be started only once the patient is already in withdrawal?",
          options: ["Its high affinity displaces residual full agonist, precipitating withdrawal", "It needs food to be absorbed", "It drops blood pressure sharply"],
          answer: "Its high affinity displaces residual full agonist, precipitating withdrawal",
          why: "Displacing a still-bound full agonist yanks the patient into precipitated withdrawal."
        }
      },
      {
        title: "How you use it",
        teach: "Once the patient is in withdrawal, give 2–4 mg sublingually and reassess in 1–2 hours; a typical day-1 total is 8–12 mg, titrating up to a usual maintenance of 12–24 mg/day. Little is gained above ~24 mg."
      },
      {
        title: "What patients feel",
        teach: "Common complaints are constipation, headache, sweating, nausea, and insomnia. Counsel them to let the tablet or film fully dissolve under the tongue — don't swallow, eat, or drink until it's gone — and to avoid alcohol and benzodiazepines."
      },
      {
        title: "A touch of mechanism",
        teach: "In one line: it's a PARTIAL mu agonist with high affinity but low intrinsic activity, plus kappa antagonism. High affinity explains the precipitated-withdrawal risk; low intrinsic activity explains the protective ceiling."
      }
    ],
    trap: "Buprenorphine = partial agonist, safety ceiling, precipitated-withdrawal risk on induction. Methadone = full agonist, no ceiling, QT risk. Mirror-image profiles.",
    takeaway: "Buprenorphine = partial-agonist, first-line OAT with a respiratory-depression ceiling and minimal QT — but only start it once the patient is in objective withdrawal."
  },

  buprenorphine_naloxone: {
    hook: "Buprenorphine plus a clever decoy — the naloxone does nothing under the tongue, and only bites if someone tries to inject it.",
    steps: [
      {
        title: "The big picture",
        teach: "This is the standard first-line OAT product: buprenorphine (the partial agonist that does all the therapeutic work) combined with naloxone (an opioid antagonist) in one sublingual tablet or film. It behaves just like plain buprenorphine when taken correctly."
      },
      {
        title: "The clever decoy",
        teach: "Naloxone is barely absorbed under the tongue, so taken as directed it's essentially inert — you get pure buprenorphine effect. But if someone dissolves and INJECTS the product, the naloxone becomes active, blocks the high, and precipitates withdrawal. It's a built-in deterrent against IV misuse.",
        check: {
          q: "Why is naloxone added to sublingual buprenorphine?",
          options: ["To deter injection — it's inert sublingually but bites if injected", "To reverse overdose faster", "To add extra pain relief"],
          answer: "To deter injection — it's inert sublingually but bites if injected",
          why: "Poor sublingual bioavailability makes it inert when taken correctly; it only precipitates withdrawal if injected."
        }
      },
      {
        title: "Where it sits",
        teach: "Because that abuse-deterrent design pairs with buprenorphine's safety ceiling, buprenorphine/naloxone is the CRISM first-line OAT choice over methadone for most patients.",
        check: {
          q: "In Canadian OAT guidance, buprenorphine/naloxone is generally…",
          options: ["First-line for most patients", "Reserved for methadone failures only", "Used only in pregnancy"],
          answer: "First-line for most patients",
          why: "Its safety ceiling plus abuse-deterrent design make it first-line per CRISM."
        }
      },
      {
        title: "How you use it",
        teach: "It's dosed by its buprenorphine content — start ~2/0.5 to 4/1 mg sublingually, day-1 total around 8/2–12/3 mg, maintenance ~12/3–24/6 mg/day. Same rule as plain buprenorphine: induce only once the patient is in objective withdrawal."
      },
      {
        title: "Whose risk is it?",
        teach: "Key subtlety: the precipitated-withdrawal caution at induction comes from the BUPRENORPHINE (high mu affinity), not the naloxone — the naloxone is inert sublingually. So the timing rule is identical to the mono product.",
        check: {
          q: "At induction, the precipitated-withdrawal risk is driven by…",
          options: ["The buprenorphine component", "The naloxone component", "Both equally"],
          answer: "The buprenorphine component",
          why: "Buprenorphine's high affinity precipitates withdrawal; the sublingual naloxone is inert."
        }
      },
      {
        title: "What patients feel",
        teach: "Expect constipation, headache, sweating, nausea, and insomnia — the buprenorphine effects. Counsel: dissolve it under the tongue and NEVER inject it, start only when clearly in withdrawal, and avoid alcohol and benzodiazepines."
      }
    ],
    trap: "The naloxone here is a diversion deterrent — not naloxone the overdose-rescue drug, and not naltrexone the maintenance antagonist.",
    takeaway: "Buprenorphine/naloxone = first-line OAT; the naloxone is an inert sublingual abuse deterrent that only bites if injected, while buprenorphine drives both the benefit and the induction-timing rule."
  },

  naltrexone: {
    hook: "The maintenance antagonist that treats both the bottle and the needle — but only after a clean opioid-free window.",
    steps: [
      {
        title: "The big picture",
        teach: "Naltrexone is a long-acting opioid BLOCKER, taken as a daily pill or a monthly injection, used to help people stay off alcohol or opioids. Instead of satisfying the receptor like OAT does, it simply blocks it — so using has less reward and less point."
      },
      {
        title: "It treats both",
        teach: "This is its signature feature: naltrexone works for BOTH alcohol and opioid use disorder. In AUD it blunts the pleasurable 'buzz' of drinking, cutting craving and heavy-drinking days; in OUD it prevents relapse in a patient who's already detoxified.",
        check: {
          q: "Which agent is used for BOTH alcohol and opioid use disorder?",
          options: ["Naltrexone", "Acamprosate", "Methadone"],
          answer: "Naltrexone",
          why: "It reduces the reward of drinking in AUD and blocks relapse in detoxified OUD."
        }
      },
      {
        title: "The opioid-free window",
        teach: "Here's the must-not-miss for OUD. Because naltrexone is a blocker, a patient must be OPIOID-FREE for about 7–10 days before starting — otherwise it strips the opioids off the receptor and precipitates withdrawal. A naloxone challenge can confirm they're clear.",
        check: {
          q: "Why must an OUD patient be opioid-free ~7–10 days before starting naltrexone?",
          options: ["The blocker would precipitate withdrawal if opioids are on board", "It causes serotonin syndrome", "It needs an empty stomach"],
          answer: "The blocker would precipitate withdrawal if opioids are on board",
          why: "Blocking receptors while opioids are still bound precipitates acute withdrawal."
        }
      },
      {
        title: "How you use it",
        teach: "Oral dosing is a simple 50 mg once daily. But adherence is the challenge, so the IM depot — 380 mg gluteal every 4 weeks (Vivitrol) — is often the better choice, guaranteeing a month of blockade with one visit."
      },
      {
        title: "It blocks pain relief",
        teach: "Because it occupies the mu receptor, naltrexone BLOCKS opioid analgesia — so a patient heading for surgery needs a non-opioid or regional pain plan, and must tell every anaesthetist they're on it.",
        check: {
          q: "A patient on naltrexone needs surgery. Opioid painkillers will be…",
          options: ["Blocked — plan non-opioid or regional analgesia", "More effective than usual", "Completely unaffected"],
          answer: "Blocked — plan non-opioid or regional analgesia",
          why: "Receptor blockade means opioids won't relieve pain — plan alternatives ahead of time."
        }
      },
      {
        title: "Two safety points",
        teach: "First, it's hepatotoxic (dose-dependent transaminitis) — check baseline and periodic LFTs, and flag jaundice or dark urine. Second, if a patient relapses their tolerance has dropped, so a return to their old opioid dose can be a fatal overdose."
      }
    ],
    trap: "Naltrexone (LONG-acting maintenance antagonist for AUD + OUD) vs naloxone (SHORT-acting acute overdose rescue) — same antagonist family, opposite clinical job.",
    takeaway: "Naltrexone = maintenance opioid blocker for AUD and detoxified OUD; needs a 7–10 day opioid-free window, blocks opioid analgesia, and is hepatotoxic — the monthly depot helps adherence."
  },

  acamprosate: {
    hook: "The liver-friendly anti-craving pill for alcohol — no CYP drama, no punishment, just three-times-a-day discipline.",
    steps: [
      {
        title: "The big picture",
        teach: "Acamprosate is a gentle anti-craving medication for alcohol use disorder. It doesn't punish drinking and it doesn't treat withdrawal — it quietly eases the lingering restlessness and craving that make abstinence hard to maintain, best started once the patient is already dry."
      },
      {
        title: "Where it sits",
        teach: "Along with naltrexone, it's a first-line anti-craving option to MAINTAIN abstinence in AUD. It works best in patients who have already stopped drinking, and it pairs nicely with naltrexone since their mechanisms differ.",
        check: {
          q: "Acamprosate is used mainly to…",
          options: ["Maintain abstinence and reduce craving", "Cause an aversive reaction to alcohol", "Reverse acute intoxication"],
          answer: "Maintain abstinence and reduce craving",
          why: "It's an anti-craving maintenance agent — not aversive and not for acute withdrawal."
        }
      },
      {
        title: "The liver-friendly one",
        teach: "This is acamprosate's standout trait: it's excreted UNCHANGED by the kidneys with no hepatic metabolism. That makes it a great pick in alcoholic liver disease — but you must dose-reduce or avoid it in renal impairment (it's contraindicated if CrCl ≤30).",
        check: {
          q: "Which AUD drug is renally cleared and safe to use in significant liver disease?",
          options: ["Acamprosate", "Naltrexone", "Disulfiram"],
          answer: "Acamprosate",
          why: "It's excreted unchanged by the kidneys, sparing the liver."
        }
      },
      {
        title: "How you use it",
        teach: "The practical catch is the schedule: two 333 mg tablets three times daily (666 mg TID). That six-pills-a-day burden is the main threat to adherence, so set expectations up front. It has minimal drug interactions."
      },
      {
        title: "What patients feel",
        teach: "Its signature side effect is DIARRHEA, usually early and self-limiting, along with some flatulence and nausea. Reassure patients it won't make them sick if they slip and drink — it's a support, not a deterrent.",
        check: {
          q: "Acamprosate's characteristic side effect is…",
          options: ["Diarrhea", "Constipation", "A flushing reaction with alcohol"],
          answer: "Diarrhea",
          why: "Diarrhea is the hallmark GI effect; the flushing reaction belongs to disulfiram."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "One line for the why: it modulates glutamate (NMDA) and GABA signalling, helping rebalance the excitatory/inhibitory tone that chronic alcohol throws off — which is what settles protracted craving."
      }
    ],
    trap: "Acamprosate (anti-craving, glutamate/GABA modulator) vs disulfiram (aversive) — acamprosate never makes you sick if you drink; it just reduces craving.",
    takeaway: "Acamprosate = renally-cleared, liver-friendly anti-craving agent for maintaining abstinence in AUD; TID dosing and diarrhea are the downsides, but interactions are minimal."
  },

  disulfiram: {
    hook: "The deterrent that turns one drink into misery — miss a hidden source of alcohol and your patient still pays for it.",
    steps: [
      {
        title: "The big picture",
        teach: "Disulfiram is the aversive AUD drug: it doesn't reduce craving — it makes drinking PUNISHING. Take it daily and any alcohol triggers a wave of flushing, pounding headache, nausea, vomiting, and racing heart. The fear of that reaction is the whole therapy."
      },
      {
        title: "Where it sits",
        teach: "It's second-line, not first — naltrexone and acamprosate (anti-craving) are preferred. Disulfiram suits a specific patient: motivated, insightful, committed to abstinence, ideally with someone supervising the daily dose.",
        check: {
          q: "Compared with naltrexone and acamprosate, disulfiram is…",
          options: ["Aversive and second-line", "Anti-craving and first-line", "For acute withdrawal"],
          answer: "Aversive and second-line",
          why: "It punishes drinking rather than reducing craving, so it sits behind the anti-craving agents."
        }
      },
      {
        title: "How you use it",
        teach: "Give 250 mg once daily (range 125–500 mg), and only START after at least 12–24 hours of abstinence — never in an intoxicated patient. Supervised dosing (a partner watching) markedly improves adherence."
      },
      {
        title: "Avoid ALL alcohol",
        teach: "The must-not-miss counselling point: because the enzyme block is IRREVERSIBLE, patients must avoid every hidden source of alcohol — mouthwash, cough syrup, sauces, hand sanitizer, aftershave — and a reaction can still occur up to ~2 weeks after the last dose.",
        check: {
          q: "A patient on disulfiram flushes and vomits after taking cough syrup. Why?",
          options: ["Hidden alcohol in the syrup triggered the reaction", "The syrup blocked disulfiram", "It's an allergy to the syrup"],
          answer: "Hidden alcohol in the syrup triggered the reaction",
          why: "Even trace alcohol drives the acetaldehyde reaction; irreversible enzyme block means the risk lingers for days."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "One line: disulfiram irreversibly blocks aldehyde dehydrogenase (ALDH), so alcohol's toxic breakdown product ACETALDEHYDE piles up — and acetaldehyde is exactly what produces that flushing, headache, and vomiting."
      },
      {
        title: "Toxicity & interactions",
        teach: "Beyond the reaction, disulfiram is hepatotoxic (can be fulminant — check LFTs) and it inhibits several CYP enzymes, so it raises warfarin (bleeding) and phenytoin levels. And avoid metronidazole, which can precipitate psychosis.",
        check: {
          q: "Adding disulfiram to a patient on warfarin tends to…",
          options: ["Raise the INR and bleeding risk", "Lower the INR", "Have no effect on warfarin"],
          answer: "Raise the INR and bleeding risk",
          why: "CYP inhibition raises warfarin levels, pushing the INR up."
        }
      }
    ],
    trap: "Disulfiram (aversive, ALDH inhibitor) vs naltrexone/acamprosate (anti-craving). And beware disulfiram-LIKE reactions from metronidazole and some cephalosporins.",
    takeaway: "Disulfiram = aversive, second-line AUD agent that makes drinking miserable via acetaldehyde; avoid all hidden alcohol for up to 2 weeks, watch for hepatotoxicity, and mind its CYP interactions."
  },

  varenicline: {
    hook: "The nicotinic partial agonist — the single most effective pill for quitting smoking, with vivid dreams to match.",
    steps: [
      {
        title: "The big picture",
        teach: "Varenicline is a pill for smoking cessation that does two things at once: it takes the edge off nicotine craving and withdrawal, while making an actual cigarette far less rewarding. It's the most effective single medication we have for quitting."
      },
      {
        title: "The most effective",
        teach: "Head-to-head, varenicline outperforms every other single agent for smoking cessation — better than the nicotine patch or bupropion on its own. If a patient is serious about quitting and has no contraindication, it's the standout choice.",
        check: {
          q: "The most effective single pharmacotherapy for smoking cessation is…",
          options: ["Varenicline", "Nicotine patch", "Disulfiram"],
          answer: "Varenicline",
          why: "It beats other single agents for cessation; disulfiram is for alcohol, not smoking."
        }
      },
      {
        title: "How you use it",
        teach: "Timing is the trick: start it about 1 WEEK before the target quit date so the patient keeps smoking while it builds up. Titrate over that week — 0.5 mg daily days 1–3, 0.5 mg twice daily days 4–7, then 1 mg twice daily — and take it with food to limit nausea. Usual course is 12 weeks."
      },
      {
        title: "What patients feel",
        teach: "The two hallmark complaints are NAUSEA (the most common) and VIVID or abnormal DREAMS, plus some insomnia. Reassure patients the dreams are usually harmless. It's renally cleared with few interactions, so you only adjust in severe renal impairment.",
        check: {
          q: "Which pair are the signature side effects of varenicline?",
          options: ["Nausea and vivid dreams", "Flushing and vomiting with alcohol", "QT prolongation and torsades"],
          answer: "Nausea and vivid dreams",
          why: "Nausea plus vivid/abnormal dreams are its classic complaints."
        }
      },
      {
        title: "Neuropsychiatric watch",
        teach: "It carries a boxed warning for neuropsychiatric events — mood and behaviour changes, rarely suicidal ideation. The large EAGLES trial found the real risk was lower than first feared, but you still monitor mood, especially in patients with a psychiatric history.",
        check: {
          q: "Per its boxed warning, what should you monitor on varenicline?",
          options: ["Mood and neuropsychiatric symptoms", "Thyroid function", "The QT interval"],
          answer: "Mood and neuropsychiatric symptoms",
          why: "The boxed warning concerns mood/behaviour changes and suicidality."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "One line for the why: varenicline is a PARTIAL agonist at the α4β2 nicotinic receptor. Partial stimulation eases craving and withdrawal, while occupying the receptor blocks nicotine from delivering its usual reward."
      }
    ],
    trap: "Varenicline (α4β2 nicotinic partial agonist) vs bupropion (an NDRI that also blocks nicotinic receptors) — both aid quitting, different mechanisms.",
    takeaway: "Varenicline = α4β2 nicotinic partial agonist, the most effective single smoking-cessation drug; start a week before quitting, expect nausea and vivid dreams, and monitor mood."
  },

  naloxone: {
    hook: "The overdose reversal that buys you minutes, not hours — it can wear off before the opioid does.",
    steps: [
      {
        title: "The big picture",
        teach: "Naloxone is THE opioid-overdose rescue drug — a pure opioid blocker that, given in an emergency, rapidly reverses the respiratory depression that's killing the patient. It comes as easy-to-use intramuscular and intranasal kits so bystanders can save a life before EMS arrives."
      },
      {
        title: "When you reach for it",
        teach: "Its one job is ACUTE rescue: someone with pinpoint pupils who isn't breathing after opioids. This is emergency reversal, not maintenance or relapse prevention — it acts within minutes to restart breathing.",
        check: {
          q: "Naloxone's role is…",
          options: ["Acute opioid-overdose rescue", "Long-term relapse prevention", "Daily maintenance therapy"],
          answer: "Acute opioid-overdose rescue",
          why: "It's the emergency antagonist that reverses opioid-induced respiratory depression."
        }
      },
      {
        title: "How you use it",
        teach: "Give 0.4–2 mg IV/IM/SC (or one 4 mg intranasal spray), and repeat every 2–3 minutes until breathing is adequate. There's no fixed max — you give what's needed. For long-acting opioids, be ready to start a continuous infusion."
      },
      {
        title: "The short-acting trap",
        teach: "Must-not-miss: naloxone is SHORT-acting (~30–90 min) and often wears off BEFORE the opioid it reversed — think methadone, extended-release, or fentanyl analogues. The patient can slip back into respiratory depression (re-narcotization), so always call EMS and be ready to re-dose.",
        check: {
          q: "Why can a methadone-overdose patient deteriorate again after responding to naloxone?",
          options: ["Naloxone wears off before methadone does", "Methadone isn't an opioid", "Naloxone caused an allergy"],
          answer: "Naloxone wears off before methadone does",
          why: "Naloxone is shorter-acting, so a long opioid re-narcotizes the patient once it fades."
        }
      },
      {
        title: "Titrate to breathing",
        teach: "In an opioid-dependent patient, naloxone precipitates acute withdrawal. So you titrate to restore adequate BREATHING, not full alertness — over-reversing just triggers vomiting, agitation, and aspiration risk.",
        check: {
          q: "In a dependent patient, you titrate naloxone to…",
          options: ["Adequate breathing, not full alertness", "Full consciousness right away", "The maximum dose all at once"],
          answer: "Adequate breathing, not full alertness",
          why: "Over-reversing precipitates florid withdrawal; the goal is adequate ventilation."
        }
      },
      {
        title: "Counsel the kit",
        teach: "For take-home kits, counsel the patient and their circle: keep it accessible, make sure family and friends know how to use it, ALWAYS call emergency services even after a good response, and stay ready to give a second dose."
      }
    ],
    trap: "Naloxone (SHORT-acting acute overdose RESCUE) vs naltrexone (LONG-acting maintenance blocker). And distinct again from the naloxone inside buprenorphine/naloxone (a sublingual abuse deterrent).",
    takeaway: "Naloxone = the short-acting opioid-antagonist rescue for overdose; titrate to breathing, expect precipitated withdrawal, and watch for re-narcotization when it outlasts the drug you gave."
  }
};
