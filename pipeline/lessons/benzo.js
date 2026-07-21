// Benzodiazepine micro-lessons (v2, clinical-first). Key = molecule id.
// Facts grounded in data/deck.json — never invent doses/levels/warnings.
// Class spine (woven in, not led with): short-term use only; DEPENDENCE/tolerance/
// withdrawal (seizures on abrupt stop → taper); falls/cognition in the elderly (Beers);
// deadly respiratory depression + death with opioids/alcohol (boxed warning); flumazenil
// reversal. Practical half-life framing (anxiety vs sleep vs withdrawal) and the liver-safe
// glucuronidation-only "LOT" trio (Lorazepam/Oxazepam/Temazepam). One brief mechanism step max.
export default {
  lorazepam: {
    hook: "The versatile, liver-safe benzo you can push IM or IV — the go-to for status epilepticus, agitation, and alcohol withdrawal.",
    steps: [
      {
        title: "The big picture",
        teach: "Lorazepam is the benzodiazepine workhorse of the hospital. Most benzos are oral-only, but lorazepam is reliably absorbed IM and IV too — so it's the one you reach for when a patient can't or won't swallow a pill and you need calm fast."
      },
      {
        title: "What it treats",
        teach: "On-label it covers anxiety, insomnia from anxiety, and pre-op sedation. Its real fame is off-label though: status epilepticus, acute agitation, alcohol withdrawal, the \"lorazepam challenge\" for catatonia, and chemo-related nausea."
      },
      {
        title: "When to reach for it",
        teach: "Because it's dependable by IV, lorazepam is first-line for benzodiazepine-treated status epilepticus and a top pick for acute agitation.",
        check: {
          q: "A patient is in status epilepticus with IV access. Which benzo is first-line?",
          options: ["Lorazepam", "Oral temazepam", "Oral alprazolam"],
          answer: "Lorazepam",
          why: "Reliable parenteral absorption plus an anticonvulsant effect makes IV lorazepam the go-to."
        }
      },
      {
        title: "How you use it",
        teach: "For anxiety, start low — about 0.5–1 mg PO two or three times a day, lowest dose for the shortest time. In an emergency it's 1–2 mg IV or IM, repeated per protocol. Its intermediate half-life (~10–20 h) means BID–TID dosing.",
        check: {
          q: "Why does lorazepam usually need BID–TID dosing rather than once daily?",
          options: ["Its half-life is only intermediate (~10–20 h)", "It has no effect after the first dose", "It is excreted unchanged by the kidney"],
          answer: "Its half-life is only intermediate (~10–20 h)",
          why: "A shorter half-life than the long-acting benzos means it must be redosed through the day."
        }
      },
      {
        title: "The LOT liver tip",
        teach: "Here's a clinical gem: lorazepam is cleared by glucuronidation only — no oxidative CYP step, no active metabolite. With Oxazepam and Temazepam it forms the liver-safe \"LOT\" trio, the benzos of choice in cirrhosis and in the elderly.",
        check: {
          q: "Which trio is preferred in liver disease because it skips oxidative metabolism?",
          options: ["Lorazepam, Oxazepam, Temazepam (LOT)", "Diazepam, Clorazepate, Chlordiazepoxide", "Midazolam, Triazolam, Alprazolam"],
          answer: "Lorazepam, Oxazepam, Temazepam (LOT)",
          why: "Glucuronidation-only clearance with no active metabolite spares the failing liver."
        }
      },
      {
        title: "The must-not-miss",
        teach: "This is the high-stakes one. Combined with opioids or alcohol, benzos cause profound sedation, respiratory depression, coma, and death — that's the boxed warning. Flumazenil can reverse benzo sedation but is used cautiously, as it can precipitate seizures.",
        check: {
          q: "Which combination carries the boxed warning for fatal respiratory depression?",
          options: ["Lorazepam + an opioid or alcohol", "Lorazepam + an SSRI", "Lorazepam + food"],
          answer: "Lorazepam + an opioid or alcohol",
          why: "Additive CNS and respiratory depression with opioids or alcohol can be lethal."
        }
      },
      {
        title: "Dependence & the elderly",
        teach: "Regular use breeds tolerance and dependence, so stop abruptly and you risk withdrawal seizures — always taper. In older adults it drives falls, fractures, and confusion, which is why it sits on the Beers list. Short-term use is the whole game."
      },
      {
        title: "A touch of mechanism",
        teach: "Under the hood, lorazepam is a positive allosteric modulator at GABA-A: it doesn't open the chloride channel itself, it makes GABA open it more often — dialing up the brain's main \"brake\" for sedation, anxiolysis, and seizure control."
      }
    ],
    trap: "Lorazepam is glucuronidated (a LOT agent) — don't lump it with diazepam or chlordiazepoxide, which accumulate in the elderly and in liver disease.",
    takeaway: "Lorazepam = the liver-safe, IM/IV workhorse — first-line for status epilepticus, agitation, and withdrawal, and a LOT agent for the elderly."
  },

  clonazepam: {
    hook: "The long-acting, high-potency benzo for panic and seizures — and the smooth agent you cross-taper people onto to escape alprazolam.",
    steps: [
      {
        title: "The big picture",
        teach: "Clonazepam is a high-potency, long-acting benzo. That long half-life gives steadier blood levels and smoother coverage than short-acting agents, so patients feel fewer peaks and troughs across the day."
      },
      {
        title: "What it treats",
        teach: "On-label it's approved for panic disorder and for seizure disorders — absence, myoclonic, Lennox-Gastaut. Off-label it's used for anxiety, as an adjunct in acute mania, and for REM sleep behaviour disorder, restless legs, and akathisia."
      },
      {
        title: "Its dual role",
        teach: "Clonazepam is unusual: it's both an effective anxiolytic AND a genuine anticonvulsant, one of the few benzos formally used long-term in epilepsy.",
        check: {
          q: "What makes clonazepam stand out among the anxiolytic benzos?",
          options: ["It's both an anxiolytic and an anticonvulsant used long-term for epilepsy", "It's the shortest-acting benzo", "It has no dependence risk"],
          answer: "It's both an anxiolytic and an anticonvulsant used long-term for epilepsy",
          why: "That dual role is exactly why it appears in both panic and seizure regimens."
        }
      },
      {
        title: "How you use it",
        teach: "For panic, start around 0.25–0.5 mg PO twice daily and increase every few days; seizure dosing runs higher. Thanks to the long half-life (~18–50 h), once steady state is reached, BID dosing gives smooth levels with far less interdose rebound than alprazolam."
      },
      {
        title: "The cross-taper pearl",
        teach: "This is a favourite trick: to get someone off a difficult short-acting benzo like alprazolam, you can cross-taper them onto longer-acting clonazepam first, then taper that down slowly.",
        check: {
          q: "Why is clonazepam useful when discontinuing alprazolam?",
          options: ["Its long half-life smooths the taper off a short-acting benzo", "It blocks alprazolam's receptor", "It has no cross-tolerance with alprazolam"],
          answer: "Its long half-life smooths the taper off a short-acting benzo",
          why: "Switching to a long-acting agent avoids the sharp interdose crashes that make short-benzo tapers fail."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Same class red flags: with opioids or alcohol it can cause fatal respiratory depression (boxed warning), and after regular use, abrupt cessation risks withdrawal seizures — so always taper.",
        check: {
          q: "What must you never do with a patient on regular clonazepam?",
          options: ["Stop it abruptly — withdrawal seizures can occur", "Take it with food", "Give it twice daily"],
          answer: "Stop it abruptly — withdrawal seizures can occur",
          why: "GABAergic dependence means sudden cessation can trigger seizures; taper instead."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Like all benzos, clonazepam is a GABA-A positive allosteric modulator, boosting how often GABA opens the chloride channel. What sets it apart is high potency plus a long duration — hence smooth, steady effect."
      }
    ],
    trap: "Watch for behavioural changes and irritability, especially in children — clonazepam can paradoxically worsen mood and behaviour.",
    takeaway: "Clonazepam = the long-acting, high-potency benzo for panic and epilepsy — steady BID dosing and the ideal bridge to taper someone off alprazolam."
  },

  diazepam: {
    hook: "Fast in, slow out: rapid lipophilic onset then a marathon nordiazepam tail — great for withdrawal and tapers, risky in the elderly.",
    steps: [
      {
        title: "The big picture",
        teach: "Diazepam is the grandfather benzo. It's very lipophilic, so it hits the brain fast, but it's metabolized to long-lived active metabolites that give it a very long, self-tapering tail."
      },
      {
        title: "What it treats",
        teach: "It's a genuine multitool: anxiety, skeletal muscle spasm, seizure disorders and status epilepticus (it even comes as a rectal and IV form), alcohol withdrawal, and procedural or pre-op sedation."
      },
      {
        title: "The long tail",
        teach: "Diazepam's active metabolite, desmethyldiazepam (nordiazepam), lasts up to ~200 h. That long tail means the drug self-tapers as it clears — handy for a smooth alcohol-withdrawal course or for weaning off shorter benzos.",
        check: {
          q: "Why does diazepam give a smooth, self-tapering course?",
          options: ["Its active metabolite nordiazepam lasts up to ~200 h", "It's cleared within a couple of hours", "It has no active metabolites"],
          answer: "Its active metabolite nordiazepam lasts up to ~200 h",
          why: "The long-lived metabolite means levels fall gradually on their own as the drug clears."
        }
      },
      {
        title: "When to reach for it",
        teach: "Its fast onset suits acute muscle spasm and seizures, while the long tail suits a fixed-dose alcohol-withdrawal taper in a patient with a healthy liver.",
        check: {
          q: "A well-nourished patient with normal liver function needs a smooth alcohol-withdrawal taper. Why does diazepam fit?",
          options: ["Its long metabolite tail lets levels fall gradually, self-tapering", "It has no anticonvulsant activity", "It must be given IV only"],
          answer: "Its long metabolite tail lets levels fall gradually, self-tapering",
          why: "Long-acting agents cushion withdrawal; but you'd avoid them if the liver were impaired."
        }
      },
      {
        title: "How you use it",
        teach: "Oral dosing is roughly 2–10 mg two to four times a day depending on the indication; seizures and withdrawal use IV per protocol. Warn patients that drowsiness and effect build over days because of the accumulating metabolites."
      },
      {
        title: "The elderly pitfall",
        teach: "That accumulation is the catch. In older or hepatic patients diazepam piles up, causing oversedation and falls — the exact opposite of the LOT agents. In those patients you'd switch to lorazepam or oxazepam instead.",
        check: {
          q: "Why is diazepam a poor choice in a frail elderly patient?",
          options: ["Its long-lived metabolites accumulate, causing oversedation and falls", "It has no active metabolite", "It can't be given orally"],
          answer: "Its long-lived metabolites accumulate, causing oversedation and falls",
          why: "Accumulation in the elderly and in liver disease is diazepam's signature hazard."
        }
      },
      {
        title: "The must-not-miss",
        teach: "The class boxed warning applies in full: with opioids or alcohol, diazepam can cause profound respiratory depression and death, and abrupt cessation after regular use risks withdrawal seizures.",
        check: {
          q: "Which pairing is most dangerous with diazepam?",
          options: ["Opioids or alcohol — risk of fatal respiratory depression", "An SSRI", "A proton-pump inhibitor"],
          answer: "Opioids or alcohol — risk of fatal respiratory depression",
          why: "Additive CNS and respiratory depression is the lethal combination."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Diazepam is a GABA-A positive allosteric modulator like the rest, but its extreme lipophilicity is the practical twist — it enters the brain very quickly, which is why the onset feels so fast."
      }
    ],
    trap: "That quick, pleasant onset is deceptive — the long metabolite tail accumulates, so diazepam is exactly the wrong benzo for the elderly or hepatic patient.",
    takeaway: "Diazepam = fast-onset, long-tail benzo — excellent for muscle spasm, seizures, and withdrawal tapers, but it accumulates and is a poor pick in the elderly/liver disease."
  },

  alprazolam: {
    hook: "Short, potent, and fast-hitting — which is exactly why it's the benzo most prone to interdose rebound, dependence, and a dangerous taper.",
    steps: [
      {
        title: "The big picture",
        teach: "Alprazolam is short-acting, high-potency, and fast-onset. That combination feels great to patients — quick relief — but it's also precisely what makes it the most habit-forming and hardest-to-stop of the anxiolytic benzos."
      },
      {
        title: "What it treats",
        teach: "It's approved for panic disorder and anxiety, and used short-term for generalized anxiety. In practice, though, benzos aren't first-line for these — SSRIs/SNRIs are — and alprazolam's profile makes it one you use cautiously and briefly."
      },
      {
        title: "Why it's trouble",
        teach: "Because it clears fast, levels dip between doses and patients feel interdose rebound anxiety — which tempts dose escalation. Short half-life plus high potency plus fast onset is the recipe for dependence and a difficult, dangerous withdrawal.",
        check: {
          q: "Why is alprazolam especially linked to dependence and rebound?",
          options: ["Short half-life + high potency + fast onset", "It's long-acting with a gentle onset", "It has no effect on GABA-A"],
          answer: "Short half-life + high potency + fast onset",
          why: "Fast rise-and-fall levels drive interdose rebound and reinforce escalating use."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — about 0.25–0.5 mg PO three times a day for the immediate-release form, lower in the elderly. The short half-life forces frequent dosing (an XR form blunts the peaks and troughs). The key counselling point: take exactly as prescribed and do not escalate."
      },
      {
        title: "A CYP3A4 gotcha",
        teach: "Alprazolam is a CYP3A4 substrate, so strong 3A4 inhibitors — azole antifungals, protease inhibitors, clarithromycin, even grapefruit-type effects — markedly raise its levels. Strong 3A4 inhibitors are actually contraindicated.",
        check: {
          q: "Which drug interaction most raises alprazolam levels?",
          options: ["Strong CYP3A4 inhibitors (azoles, protease inhibitors)", "CYP3A4 inducers", "Antacids"],
          answer: "Strong CYP3A4 inhibitors (azoles, protease inhibitors)",
          why: "As a 3A4 substrate, alprazolam accumulates when that enzyme is blocked."
        }
      },
      {
        title: "Getting off it",
        teach: "Because a direct taper off alprazolam is so rebound-prone, the classic move is to cross-taper onto a longer-acting benzo like clonazepam first, then taper slowly. Never stop abruptly — withdrawal seizures can occur.",
        check: {
          q: "What's the safer strategy to discontinue chronic alprazolam?",
          options: ["Cross-taper to longer-acting clonazepam, then taper slowly", "Stop it in one day", "Double the dose then stop"],
          answer: "Cross-taper to longer-acting clonazepam, then taper slowly",
          why: "Switching to a long-acting agent smooths the rebound that makes alprazolam tapers fail."
        }
      },
      {
        title: "The must-not-miss",
        teach: "As with every benzo, the boxed warning is opioids and alcohol: profound sedation, respiratory depression, coma, and death. With alprazolam's potency and abuse potential, that risk is very real."
      }
    ],
    trap: "Interdose rebound anxiety can masquerade as worsening disease, tempting you to keep raising the dose — recognize it as the drug wearing off, not the illness getting worse.",
    takeaway: "Alprazolam = short, potent, fast-onset panic benzo — best relief but worst dependence and rebound; taper by cross-tapering to a long-acting agent, never abruptly."
  },

  oxazepam: {
    hook: "The slow, gentle LOT agent: liver-safe, low abuse-appeal, and a workhorse for alcohol withdrawal when the liver is sick.",
    steps: [
      {
        title: "The big picture",
        teach: "Oxazepam is a short-acting benzo with a notably slow onset. That gentle, unhurried rise makes it less reinforcing than fast hitters like alprazolam — and it's one of the liver-safe LOT trio."
      },
      {
        title: "What it treats",
        teach: "It's approved for anxiety, anxiety associated with depression, and acute alcohol withdrawal, and is used off-label for insomnia. Its niche is withdrawal in patients whose liver isn't working well."
      },
      {
        title: "The LOT liver tip",
        teach: "Oxazepam is cleared purely by glucuronidation — no oxidative CYP step and no active metabolite. That's why it (with Lorazepam and Temazepam) is preferred in liver disease and the elderly, and why it shines for alcohol withdrawal when hepatic function is impaired.",
        check: {
          q: "Why is oxazepam a good withdrawal benzo in a patient with cirrhosis?",
          options: ["Glucuronidation only — no oxidative step, no active metabolite", "It's renally cleared as an active drug", "It has the longest half-life of all benzos"],
          answer: "Glucuronidation only — no oxidative step, no active metabolite",
          why: "LOT agents bypass the oxidative metabolism that fails in liver disease."
        }
      },
      {
        title: "Low abuse liability",
        teach: "Its slow onset means it doesn't deliver the quick \"hit\" that drives misuse, so oxazepam has relatively low abuse potential compared with alprazolam or diazepam.",
        check: {
          q: "Why does oxazepam have lower abuse potential than alprazolam?",
          options: ["Its slow onset is less reinforcing", "It isn't a benzodiazepine", "It has no CNS effect"],
          answer: "Its slow onset is less reinforcing",
          why: "A gradual rise in effect gives less of the rapid reward that reinforces misuse."
        }
      },
      {
        title: "How you use it",
        teach: "For anxiety it's about 10–15 mg three to four times a day; alcohol withdrawal uses higher divided doses. Because onset is gradual, counsel patients to take it on schedule rather than expecting an instant effect."
      },
      {
        title: "The must-not-miss",
        teach: "Class rules still apply: avoid combining with opioids or alcohol (fatal respiratory depression), and don't stop abruptly after regular use — taper to avoid withdrawal seizures. Falls remain a concern in the elderly."
      }
    ],
    trap: "Don't expect a fast anxiolytic \"hit\" — oxazepam's slow onset means it should be taken on a schedule, not PRN whenever anxiety spikes.",
    takeaway: "Oxazepam = the slow-onset, liver-safe LOT benzo — low abuse appeal and the withdrawal agent of choice when the liver is impaired."
  },

  temazepam: {
    hook: "The liver-safe sleep benzo: a LOT hypnotic for sleep maintenance, with less next-day hangover than the long-acting hypnotics.",
    steps: [
      {
        title: "The big picture",
        teach: "Temazepam is a benzodiazepine marketed specifically as a hypnotic — a sleep drug. And it's a member of the liver-safe LOT trio, so it's the go-to benzo hypnotic when the liver is a concern."
      },
      {
        title: "What it treats",
        teach: "It's approved for short-term insomnia. Its intermediate half-life (~8–15 h) is aimed at sleep maintenance — helping people stay asleep — with only modest morning residue."
      },
      {
        title: "The LOT hypnotic",
        teach: "Like the other LOT agents, temazepam is glucuronidated with no active metabolite, so it accumulates far less than long-acting hypnotics like flurazepam or nitrazepam. That makes it the cleaner benzo hypnotic in the elderly.",
        check: {
          q: "Why does temazepam accumulate less than flurazepam?",
          options: ["Glucuronidation with no active metabolite", "It has a 250-hour metabolite", "It's an oxidatively metabolized prodrug"],
          answer: "Glucuronidation with no active metabolite",
          why: "No long-lived metabolite means less night-to-night buildup than the long-acting hypnotics."
        }
      },
      {
        title: "How you use it",
        teach: "Typical dose is 15 mg at bedtime (7.5 mg in the elderly), up to 30 mg. Counsel patients to take it right before bed and to allow 7–8 hours for sleep, so they don't wake up groggy — lowest effective dose, shortest time."
      },
      {
        title: "What patients feel",
        teach: "Common effects are residual daytime drowsiness, dizziness, and anterograde amnesia. Like other hypnotics, it can trigger complex sleep behaviours — sleep-driving and the like — which patients should report.",
        check: {
          q: "Which unusual effect should you warn a temazepam patient about?",
          options: ["Complex sleep behaviours like sleep-driving", "Hypertensive crisis", "Agranulocytosis"],
          answer: "Complex sleep behaviours like sleep-driving",
          why: "Benzo hypnotics can cause amnestic sleep-related behaviours patients don't remember."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Even as a sleep aid, the class dangers hold: don't combine with opioids or alcohol (respiratory depression), and after regular use expect dependence and rebound insomnia on stopping — plus falls in the elderly.",
        check: {
          q: "What happens when a regular temazepam user stops it suddenly?",
          options: ["Rebound insomnia and dependence symptoms", "Nothing — it's not habit-forming", "Immediate cure of insomnia"],
          answer: "Rebound insomnia and dependence symptoms",
          why: "Tolerance and dependence develop, so sleep can worsen transiently on abrupt cessation."
        }
      }
    ],
    trap: "Temazepam is the LOT hypnotic — don't confuse it with flurazepam or nitrazepam, whose long metabolites accumulate and cause next-day hangover.",
    takeaway: "Temazepam = the intermediate, liver-safe LOT hypnotic for sleep maintenance — less accumulation and hangover than the long-acting benzo sleep agents."
  },

  chlordiazepoxide: {
    hook: "Librium — the original long-acting benzo for a smooth alcohol-withdrawal taper, as long as the liver still works.",
    steps: [
      {
        title: "The big picture",
        teach: "Chlordiazepoxide is a classic long-acting benzo, best known as the traditional agent for alcohol withdrawal. Its long-lived metabolites give a self-tapering effect that cushions the withdrawal course."
      },
      {
        title: "What it treats",
        teach: "It's approved for anxiety, alcohol withdrawal, and pre-operative apprehension. In real-world practice, alcohol withdrawal is where you'll see it most."
      },
      {
        title: "Why it suits withdrawal",
        teach: "It's given either as a fixed-dose taper or symptom-triggered (dosed to a CIWA score), and its long active metabolites mean levels fall gradually — a smooth self-taper that keeps withdrawal controlled.",
        check: {
          q: "What makes chlordiazepoxide well suited to alcohol-withdrawal tapers?",
          options: ["Long active metabolites give a smooth, self-tapering course", "It has an ultra-short half-life", "It's only available IV"],
          answer: "Long active metabolites give a smooth, self-tapering course",
          why: "Gradually falling levels smooth the withdrawal course — provided the liver can clear it."
        }
      },
      {
        title: "How you use it",
        teach: "Withdrawal dosing is roughly 50–100 mg PO, repeated per protocol and tapered over days (up to ~300 mg/day in supervised settings). Anxiety dosing is much lower. Warn patients that drowsiness can build over days."
      },
      {
        title: "The accumulation pitfall",
        teach: "The catch is those same long metabolites (including nordiazepam): they accumulate in the elderly and in liver disease, causing oversedation. In cirrhosis or a frail older patient, switch to a LOT agent like lorazepam or oxazepam instead.",
        check: {
          q: "In a patient with cirrhosis needing withdrawal management, what's the better choice?",
          options: ["Switch to a LOT agent (lorazepam or oxazepam)", "Increase the chlordiazepoxide dose", "Use chlordiazepoxide IV only"],
          answer: "Switch to a LOT agent (lorazepam or oxazepam)",
          why: "LOT agents avoid the metabolite accumulation that oversedates hepatic and elderly patients."
        }
      },
      {
        title: "The must-not-miss",
        teach: "The class boxed warning holds — opioids or alcohol plus chlordiazepoxide can cause fatal respiratory depression — and abrupt cessation after regular use risks withdrawal seizures, so taper.",
        check: {
          q: "Which risk applies when combining chlordiazepoxide with opioids?",
          options: ["Profound sedation and respiratory depression", "Serotonin syndrome", "QT shortening"],
          answer: "Profound sedation and respiratory depression",
          why: "Additive CNS/respiratory depression with opioids or alcohol can be fatal."
        }
      }
    ],
    trap: "Chlordiazepoxide is a long-acting, oxidatively metabolized benzo — the opposite of the LOT agents; it accumulates in the elderly and in liver disease.",
    takeaway: "Chlordiazepoxide = the classic long-acting alcohol-withdrawal benzo for a smooth taper — but swap to a LOT agent in cirrhosis or the frail elderly."
  },

  midazolam: {
    hook: "The ultra-short procedural-sedation benzo: water-soluble, given IV/IM/intranasal/buccal — and it aborts seizures with no IV line.",
    steps: [
      {
        title: "The big picture",
        teach: "Midazolam is the ultra-short-acting, water-soluble benzo of the operating room and emergency department. Fast on, fast off — it's built for procedures, not for take-home prescriptions."
      },
      {
        title: "What it treats",
        teach: "Its jobs are procedural/conscious sedation, pre-op anxiolysis, induction and maintenance of anesthesia, and ICU sedation. Off-label it treats status epilepticus and is used in palliative sedation."
      },
      {
        title: "No IV? No problem",
        teach: "A standout feature: midazolam works reliably by IM, intranasal, and buccal routes too. That means you can abort a seizure in a patient without IV access — a huge practical advantage in the field or with a convulsing child.",
        check: {
          q: "Why is midazolam valuable for seizures when there's no IV access?",
          options: ["It's effective IM, intranasal, or buccal", "It only works orally", "It requires an arterial line"],
          answer: "It's effective IM, intranasal, or buccal",
          why: "Its flexible parenteral/mucosal routes let you treat seizures without a vein."
        }
      },
      {
        title: "How you use it",
        teach: "For procedural sedation you titrate small IV increments (e.g., 0.5–2 mg) slowly to effect, watching the patient the whole time. There's no fixed ceiling — you dose to the clinical endpoint. Crucially, opioids potentiate it, so go slower when they're on board."
      },
      {
        title: "The must-not-miss",
        teach: "Midazolam's boxed warning is dose-related respiratory depression and apnea — it has killed patients when used outside monitored settings. Only give it where continuous monitoring and airway management are available; flumazenil can reverse it.",
        check: {
          q: "What's the non-negotiable safety requirement for giving IV midazolam?",
          options: ["Continuous monitoring with airway/resuscitation capability", "An empty stomach only", "A normal ECG only"],
          answer: "Continuous monitoring with airway/resuscitation capability",
          why: "Respiratory depression and apnea demand monitoring and readiness to support the airway."
        }
      },
      {
        title: "Expected amnesia",
        teach: "Midazolam's amnesia is a feature, not a bug — patients usually won't remember the procedure. Counsel them not to drive or make important decisions for 24 hours and to arrange an escort home.",
        check: {
          q: "Why do you tell a midazolam patient to arrange a ride home?",
          options: ["It causes amnesia and impairs function for ~24 h", "It permanently impairs memory", "It causes long-term blindness"],
          answer: "It causes amnesia and impairs function for ~24 h",
          why: "Expected sedation and amnesia make driving and decisions unsafe afterward."
        }
      },
      {
        title: "A PK quirk",
        teach: "Midazolam is a CYP3A4 substrate, so strong inhibitors prolong sedation. And its active metabolite, 1-hydroxymidazolam, is renally cleared — it accumulates in renal failure or after long infusions, causing delayed awakening."
      }
    ],
    trap: "Midazolam is not a take-home anxiolytic — it's a monitored, procedural drug; using it without airway backup is how patients get hurt.",
    takeaway: "Midazolam = the ultra-short, water-soluble sedation benzo — flexible routes for seizures without IV, but strictly a monitored-setting drug because of apnea risk."
  },

  bromazepam: {
    hook: "A Canadian/European anxiolytic benzo with an intermediate half-life — a mid-range option that plays by all the class rules.",
    steps: [
      {
        title: "The big picture",
        teach: "Bromazepam is an intermediate-acting anxiolytic benzodiazepine available in Canada and Europe (it's not US-marketed). Think of it as a middle-of-the-road anxiolytic — nothing exotic, just a solid mid-range option."
      },
      {
        title: "What it treats",
        teach: "It's approved for short-term anxiety and used off-label for insomnia associated with anxiety. Like all benzos here, it's for short-term use, not a long-term anxiety solution."
      },
      {
        title: "How you use it",
        teach: "Typical dosing is about 6–18 mg/day in divided doses, lower in the elderly. Its intermediate half-life (~10–20 h) means BID–TID dosing to keep levels steady.",
        check: {
          q: "Why is bromazepam usually dosed BID–TID?",
          options: ["Its intermediate half-life (~10–20 h) needs redosing", "It has a 200-hour metabolite", "It's only given once a week"],
          answer: "Its intermediate half-life (~10–20 h) needs redosing",
          why: "An intermediate duration means the effect wears off through the day and must be topped up."
        }
      },
      {
        title: "What patients feel",
        teach: "Expect the usual benzo effects — sedation, dizziness, ataxia, fatigue. It's an anxiolytic for the short term, and patients should be reminded it's not meant for open-ended use.",
        check: {
          q: "How should bromazepam be positioned to patients?",
          options: ["Short-term use with class benzo side effects", "A lifelong daily medication", "A stimulant with no sedation"],
          answer: "Short-term use with class benzo side effects",
          why: "Sedation, dizziness, and dependence risk make it a short-term agent."
        }
      },
      {
        title: "The must-not-miss",
        teach: "All the class safety rules apply: avoid opioids and alcohol (fatal respiratory depression), taper rather than stopping abruptly (withdrawal seizures), and watch for falls in the elderly.",
        check: {
          q: "What's the shared benzodiazepine danger that also applies to bromazepam?",
          options: ["Fatal respiratory depression with opioids/alcohol", "Kidney stones", "Hair loss"],
          answer: "Fatal respiratory depression with opioids/alcohol",
          why: "Additive CNS/respiratory depression is a class-wide, potentially lethal risk."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Like every benzo, bromazepam is a GABA-A positive allosteric modulator — it makes GABA open the chloride channel more often, turning up the brain's main inhibitory brake for its anxiolytic and sedative effect."
      }
    ],
    trap: "Bromazepam isn't sold in the US — if a patient mentions it, they've likely been prescribed it in Canada or Europe.",
    takeaway: "Bromazepam = a Canadian/European intermediate-acting anxiolytic benzo — mid-range and unremarkable, with all the standard class cautions."
  },

  nitrazepam: {
    hook: "A long-acting hypnotic (Canada/Europe) that lingers into the next day — plus a seizure niche in myoclonic epilepsy and infantile spasms.",
    steps: [
      {
        title: "The big picture",
        teach: "Nitrazepam is a long-acting benzodiazepine hypnotic used in Canada and Europe (not the US). Its length is the defining feature — and the problem — because it carries over into the next day."
      },
      {
        title: "What it treats",
        teach: "It's approved for short-term insomnia and, unusually for a sleep benzo, for myoclonic seizures including infantile spasms as an adjunct."
      },
      {
        title: "The hangover problem",
        teach: "With a half-life around 16–40 h, nitrazepam produces next-day drowsiness — a true \"benzo hangover\" — and increases falls in the elderly from that carryover sedation.",
        check: {
          q: "What's the main downside of nitrazepam's long half-life?",
          options: ["Next-day drowsiness and falls in the elderly", "It wears off before morning", "It has no sedative effect"],
          answer: "Next-day drowsiness and falls in the elderly",
          why: "A long half-life means sedation carries into the following day, raising fall risk."
        }
      },
      {
        title: "How you use it",
        teach: "Typical dosing is 5 mg at bedtime (2.5 mg in the elderly), up to 10 mg, for short-term use. Warn patients about possible morning grogginess and caution around driving the next day.",
        check: {
          q: "What should you counsel a nitrazepam patient about the morning after?",
          options: ["Possible grogginess — use caution driving", "It causes early-morning highs", "It must be taken again at breakfast"],
          answer: "Possible grogginess — use caution driving",
          why: "Carryover sedation from its long half-life can impair next-day function."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Class dangers apply: avoid opioids and alcohol (respiratory depression), expect dependence and rebound insomnia on stopping, and note bronchial hypersecretion in infants when it's used for seizures."
      },
      {
        title: "Cleaner alternative",
        teach: "For a sleep benzo with less baggage, contrast nitrazepam with temazepam — intermediate-acting, glucuronidated, no active metabolite — which accumulates far less in older patients."
      }
    ],
    trap: "Nitrazepam's long half-life makes it a poor sleep choice for the elderly — reach for an intermediate, glucuronidated hypnotic like temazepam instead.",
    takeaway: "Nitrazepam = a long-acting Canadian/European benzo hypnotic with next-day hangover and falls — plus a niche role in myoclonic seizures."
  },

  clobazam: {
    hook: "The 1,5-benzodiazepine that's more anticonvulsant than sedative — a key add-on for Lennox-Gastaut and refractory epilepsy.",
    steps: [
      {
        title: "The big picture",
        teach: "Clobazam is the odd one out structurally — a 1,5-benzodiazepine rather than the classic 1,4 type. That small change gives it relatively more anticonvulsant and anxiolytic action with comparatively less sedation."
      },
      {
        title: "What it treats",
        teach: "Its home turf is epilepsy: it's approved as an adjunct, especially for Lennox-Gastaut syndrome, and used off-label for refractory focal and catamenial seizures. Some jurisdictions also approve it for anxiety."
      },
      {
        title: "The 1,5 advantage",
        teach: "The practical upshot of the 1,5 structure is that clobazam sedates less than classic benzos at anticonvulsant doses — useful when you need seizure control without flattening the patient.",
        check: {
          q: "What's distinctive about clobazam as a 1,5-benzodiazepine?",
          options: ["Anticonvulsant effect with comparatively less sedation", "It isn't a GABA-A modulator", "It has no anticonvulsant activity"],
          answer: "Anticonvulsant effect with comparatively less sedation",
          why: "The 1,5 structure shifts the profile toward anticonvulsant/anxiolytic over sedation."
        }
      },
      {
        title: "How you use it",
        teach: "Dosing is weight-based and gradual — often 5–10 mg/day to start, titrated over weeks. Its long-acting active metabolite lets you dose once or twice daily."
      },
      {
        title: "The must-not-miss",
        teach: "The high-stakes clobazam-specific flag is rare but serious skin reactions — Stevens-Johnson syndrome and toxic epidermal necrolysis, most often early in therapy. Tell patients to report any rash promptly.",
        check: {
          q: "Which reaction warrants urgent attention early in clobazam therapy?",
          options: ["A new rash — risk of Stevens-Johnson/TEN", "Mild dry mouth", "Increased appetite"],
          answer: "A new rash — risk of Stevens-Johnson/TEN",
          why: "Serious cutaneous reactions can occur early; any rash needs prompt evaluation."
        }
      },
      {
        title: "Don't stop suddenly",
        teach: "Clobazam still carries the class boxed warning with opioids and alcohol, and tolerance to its anticonvulsant effect can develop. Above all, don't stop it abruptly in an epilepsy patient — seizures can worsen.",
        check: {
          q: "Why must clobazam not be stopped abruptly in epilepsy?",
          options: ["Seizures can worsen on withdrawal", "It causes rebound hypertension", "It triggers mania"],
          answer: "Seizures can worsen on withdrawal",
          why: "Abrupt cessation of an anticonvulsant benzo can precipitate breakthrough seizures."
        }
      },
      {
        title: "A PK quirk",
        teach: "Clobazam's active metabolite, N-desmethylclobazam, is long-acting and cleared by CYP2C19. So CYP2C19 poor metabolizers or patients on 2C19 inhibitors accumulate it — worth remembering when sedation seems excessive."
      }
    ],
    trap: "Clobazam is a 1,5-benzodiazepine — don't assume it behaves exactly like classic 1,4 agents; it's more anticonvulsant-selective and less sedating.",
    takeaway: "Clobazam = the less-sedating 1,5-benzodiazepine for Lennox-Gastaut and refractory epilepsy — watch for early serious rash and never stop it abruptly."
  },

  flurazepam: {
    hook: "The accumulating hypnotic: a very long active metabolite piles up night after night — the textbook \"benzo hangover\" in the elderly.",
    steps: [
      {
        title: "The big picture",
        teach: "Flurazepam is a benzodiazepine hypnotic whose defining trait is accumulation. Its active metabolite, N-desalkylflurazepam, lasts an enormous 40–250 h, so sedation stacks up across successive nights."
      },
      {
        title: "What it treats",
        teach: "It's approved for short-term insomnia. But its accumulation makes it a poor long-term or elderly sleep choice, so it's largely eclipsed by cleaner options today."
      },
      {
        title: "The accumulation problem",
        teach: "Because the metabolite builds each night, next-day drowsiness gets worse over the first several nights of use — driving falls in the elderly. It's the classic \"accumulating hypnotic.\"",
        check: {
          q: "Why does flurazepam's grogginess worsen over successive nights?",
          options: ["Its long metabolite (up to ~250 h) accumulates", "It's glucuronidated with no metabolite", "It's ultra-short acting"],
          answer: "Its long metabolite (up to ~250 h) accumulates",
          why: "A very long-lived active metabolite piles up night after night."
        }
      },
      {
        title: "How you use it",
        teach: "Dosing is 15 mg at bedtime in the elderly, up to 30 mg, and short-term only. Warn patients that grogginess can build night after night and to use caution driving."
      },
      {
        title: "The must-not-miss",
        teach: "Class dangers apply: opioids and alcohol risk fatal respiratory depression, and expect dependence and rebound insomnia on stopping — layered on top of cumulative oversedation and falls.",
        check: {
          q: "Beyond the class opioid/alcohol risk, what's flurazepam's signature hazard?",
          options: ["Cumulative oversedation and falls from metabolite buildup", "Serotonin syndrome", "Photosensitivity"],
          answer: "Cumulative oversedation and falls from metabolite buildup",
          why: "The accumulating metabolite is what makes flurazepam distinctly risky in the elderly."
        }
      },
      {
        title: "Cleaner alternative",
        teach: "For a benzo hypnotic without the buildup, contrast flurazepam with temazepam — intermediate-acting, glucuronidated, no active metabolite — a cleaner choice in the elderly or hepatic patient.",
        check: {
          q: "Which hypnotic accumulates less in the elderly than flurazepam?",
          options: ["Temazepam", "Nitrazepam", "Diazepam"],
          answer: "Temazepam",
          why: "Temazepam is glucuronidated with no active metabolite, so it doesn't pile up."
        }
      }
    ],
    trap: "Flurazepam is the opposite of the LOT hypnotic temazepam — its long metabolite accumulates, so it's a poor sleep choice for older adults.",
    takeaway: "Flurazepam = the accumulating benzo hypnotic — its ~250-hour metabolite stacks up night after night, causing next-day hangover and falls in the elderly."
  },

  triazolam: {
    hook: "The ultra-short sleep-onset hypnotic: no next-day hangover, but prominent amnesia, early-morning rebound, and danger with CYP3A4 blockers.",
    steps: [
      {
        title: "The big picture",
        teach: "Triazolam is an ultra-short-acting benzo hypnotic built for sleep onset. It's in and out fast — which spares patients a morning hangover but creates a different set of problems."
      },
      {
        title: "What it treats",
        teach: "It's approved only for short-term, sleep-onset insomnia — helping people fall asleep. Because it wears off so quickly, it does nothing for staying asleep."
      },
      {
        title: "The onset-vs-rebound trade",
        teach: "The trade-off is stark: its ultra-short half-life (~1.5–5.5 h) means minimal next-day sedation, but prominent anterograde amnesia and early-morning rebound insomnia and anxiety as it wears off.",
        check: {
          q: "What's the downside of triazolam's ultra-short half-life?",
          options: ["Prominent amnesia and early-morning rebound", "Severe next-day hangover", "It helps with sleep maintenance"],
          answer: "Prominent amnesia and early-morning rebound",
          why: "Rapid wear-off avoids hangover but drives amnesia and rebound before morning."
        }
      },
      {
        title: "How you use it",
        teach: "Dosing is small — 0.125–0.25 mg at bedtime, 0.125 mg in the elderly — taken immediately before sleep, and only when the patient can devote a full night to sleep. Short-term use only."
      },
      {
        title: "A dangerous interaction",
        teach: "Triazolam is a CYP3A4 substrate, and strong 3A4 inhibitors are contraindicated — azole antifungals, nefazodone, protease inhibitors, clarithromycin, even grapefruit juice — because they push its levels dangerously high.",
        check: {
          q: "Which combination is contraindicated with triazolam?",
          options: ["Strong CYP3A4 inhibitors (azoles, protease inhibitors)", "A daily multivitamin", "Any beta-blocker"],
          answer: "Strong CYP3A4 inhibitors (azoles, protease inhibitors)",
          why: "As a 3A4 substrate, its levels spike dangerously when that enzyme is blocked."
        }
      },
      {
        title: "The must-not-miss",
        teach: "The class boxed warning holds — opioids and alcohol risk fatal respiratory depression — and triazolam is especially prone to complex sleep behaviours like sleep-driving plus marked amnesia. Tell patients to report memory gaps.",
        check: {
          q: "Which effect is especially prominent with triazolam?",
          options: ["Anterograde amnesia and sleep-driving", "Weight gain", "Tremor at rest"],
          answer: "Anterograde amnesia and sleep-driving",
          why: "Its potency and rapid action make amnestic complex sleep behaviours notably common."
        }
      }
    ],
    trap: "Triazolam is a sleep-onset drug only — it won't keep anyone asleep, and pairing it with a strong CYP3A4 inhibitor is contraindicated.",
    takeaway: "Triazolam = the ultra-short sleep-onset hypnotic — no hangover but marked amnesia and rebound, and strong CYP3A4 inhibitors are off-limits."
  },

  clorazepate: {
    hook: "A gastric-acid-activated prodrug for nordiazepam — behaves just like long-acting diazepam, long tail and all.",
    steps: [
      {
        title: "The big picture",
        teach: "Clorazepate is unusual: it's a prodrug. In the acidic stomach it's converted to desmethyldiazepam (nordiazepam) — the same long-acting active metabolite shared by diazepam and chlordiazepoxide — so it effectively is a long-acting benzo."
      },
      {
        title: "What it treats",
        teach: "It's approved for anxiety, as an adjunct in partial seizures, and for alcohol withdrawal — a familiar long-acting benzo lineup."
      },
      {
        title: "The prodrug quirk",
        teach: "Because it needs gastric acid to activate, antacids can blunt its conversion. And since it becomes nordiazepam, it behaves clinically just like diazepam — long-acting, self-tapering.",
        check: {
          q: "Clorazepate is a prodrug for which active compound?",
          options: ["Desmethyldiazepam (nordiazepam)", "Lorazepam glucuronide", "1-hydroxymidazolam"],
          answer: "Desmethyldiazepam (nordiazepam)",
          why: "Gastric acid converts clorazepate to nordiazepam, shared with diazepam and chlordiazepoxide."
        }
      },
      {
        title: "How you use it",
        teach: "For anxiety it's about 7.5–15 mg PO two to three times a day, lower in the elderly, and can be consolidated to once daily at steady state. Warn patients that effects and drowsiness build over days."
      },
      {
        title: "The elderly pitfall",
        teach: "Because it's really nordiazepam, clorazepate accumulates in the elderly and in hepatic disease, causing oversedation and falls — so, like diazepam, avoid it in those patients and reach for a LOT agent instead.",
        check: {
          q: "Why avoid clorazepate in a frail elderly patient?",
          options: ["Its long-acting nordiazepam accumulates, causing oversedation", "It's cleared too fast to work", "It has no active form"],
          answer: "Its long-acting nordiazepam accumulates, causing oversedation",
          why: "Behaving like diazepam, it piles up in the elderly and in liver disease."
        }
      },
      {
        title: "The must-not-miss",
        teach: "The class boxed warning applies — opioids or alcohol risk fatal respiratory depression — and abrupt cessation after regular use risks withdrawal seizures, so taper.",
        check: {
          q: "What must you do when discontinuing regular clorazepate?",
          options: ["Taper to avoid withdrawal seizures", "Stop it in a single day", "Switch to alcohol"],
          answer: "Taper to avoid withdrawal seizures",
          why: "Like all benzos, dependence means abrupt cessation can precipitate seizures."
        }
      }
    ],
    trap: "Clorazepate needs stomach acid to activate — antacids can reduce its conversion to nordiazepam, so timing matters.",
    takeaway: "Clorazepate = a gastric-acid-activated prodrug for nordiazepam — clinically a long-acting diazepam-like benzo that accumulates in the elderly and liver disease."
  }
};
