// Hypnotic / anxiolytic micro-lessons (v2, clinical-first). Narrated by Neuro.
// Key = molecule id. Every fact grounded in data/deck.json — reuse, never invent.
export default {
  zopiclone: {
    hook: "The Canadian go-to Z-drug for short-term insomnia — spot it by the metallic aftertaste, and never call it 'non-addictive'.",
    steps: [
      {
        title: "The big picture",
        teach: "Zopiclone is a 'Z-drug' — a non-benzodiazepine sleeping pill. In Canada it's the workhorse hypnotic for short-term insomnia. But keep the frame straight: the first-line treatment for chronic insomnia is CBT-I (cognitive behavioural therapy), not a pill. Zopiclone is a short-term helper, not a cure."
      },
      {
        title: "Where it sits",
        teach: "Its only real job is the short-term treatment of insomnia. 'Short-term' is the operative word — you reach for it to get someone over a rough patch, not to keep them on it for months.",
        check: {
          q: "How is zopiclone best positioned in insomnia care?",
          options: ["Short-term aid while CBT-I does the real work", "First-line lifelong therapy", "A daytime anxiety pill"],
          answer: "Short-term aid while CBT-I does the real work",
          why: "Z-drugs bridge the short term; CBT-I is the durable first-line treatment."
        }
      },
      {
        title: "How you use it",
        teach: "Start 5 mg at bedtime — but only 3.75 mg in the elderly, debilitated, or those with liver impairment. Max is 7.5 mg/day (5 mg in those same lower-dose groups). Golden rule: take it only when a full 7–8 hours of sleep is actually possible, and reassess the need after 7–14 days."
      },
      {
        title: "The signature clue",
        teach: "The near-pathognomonic tip-off that a Z-drug is zopiclone is a metallic/bitter aftertaste. Dry mouth, headache, dizziness, and next-day drowsiness round out the common effects. And never mix it with alcohol.",
        check: {
          q: "Which hypnotic classically leaves a metallic/bitter taste?",
          options: ["Zopiclone", "Melatonin", "Buspirone"],
          answer: "Zopiclone",
          why: "That metallic aftertaste is zopiclone's calling card."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Here's the myth to kill: zopiclone is NOT a 'non-addictive' sleep aid. It acts at the very same GABA-A benzodiazepine site as benzos, so it still causes tolerance, dependence, and complex sleep behaviours — sleep-driving, sleep-eating, sleep-walking with no memory of it. If that happens, stop the drug and report it.",
        check: {
          q: "A patient on zopiclone reports eating at night with no memory of it. What is this?",
          options: ["A complex sleep behaviour — stop the drug", "A harmless dream", "Expected and safe to continue"],
          answer: "A complex sleep behaviour — stop the drug",
          why: "Complex sleep behaviours are a class effect; discontinue and report."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Mechanistically it's a positive allosteric modulator at the GABA-A benzodiazepine site — it makes the chloride channel open more FREQUENTLY when GABA is present. Because it's a benzo-site drug, its overdose is reversible with flumazenil, just like a benzodiazepine."
      },
      {
        title: "Don't mix them up",
        teach: "Zopiclone and zolpidem are both Z-drugs and sound alike, but they're different molecules. Zopiclone is the cyclopyrrolone with the metallic taste and a bit of anxiolytic action; zolpidem is the purely-hypnotic α1-selective one.",
        check: {
          q: "Your patient's Z-drug leaves a metallic taste. Which one is it?",
          options: ["Zopiclone", "Zolpidem", "Neither — Z-drugs don't affect taste"],
          answer: "Zopiclone",
          why: "The metallic aftertaste separates zopiclone from its look-alike zolpidem."
        }
      }
    ],
    trap: "Don't sell zopiclone as 'non-addictive' — it's a benzo-site drug with real dependence and complex-sleep-behaviour risk. And don't confuse it with zolpidem.",
    takeaway: "Zopiclone = the Canadian short-term Z-drug — metallic taste, benzo-site action, and genuine dependence and complex-sleep-behaviour risk."
  },

  zolpidem: {
    hook: "The most purely-hypnotic Z-drug — carries a boxed warning for complex sleep behaviours, and doses lower in women and the elderly.",
    steps: [
      {
        title: "The big picture",
        teach: "Zolpidem is a Z-drug for short-term insomnia, and it's the most single-mindedly hypnotic of the group — it puts you to sleep with little else going on. The Canadian product is Sublinox, a sublingual tablet."
      },
      {
        title: "Where it sits",
        teach: "Like all Z-drugs, it's for short-term insomnia only, and best aimed at trouble falling asleep. It's a bridge over a rough patch — CBT-I remains the durable first-line treatment for chronic insomnia."
      },
      {
        title: "How you use it",
        teach: "Give 5 mg sublingually at bedtime, taken immediately before lying down, and only when at least 7–8 hours in bed are available. The max is 10 mg/day. Its half-life is very short, which is why it's aimed at sleep onset."
      },
      {
        title: "The sex-specific dose",
        teach: "This is a favourite exam point: women and the elderly start at the LOWER dose (5 mg) because they clear zolpidem more slowly and wake with higher drug levels — meaning more next-morning impairment. Men may use 5–10 mg.",
        check: {
          q: "Why do women start zolpidem at the lower 5 mg dose?",
          options: ["Slower clearance → higher next-morning levels", "Higher clearance needs more drug", "It has nothing to do with clearance"],
          answer: "Slower clearance → higher next-morning levels",
          why: "Slower elimination leaves more drug on board in the morning, so start low."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Zolpidem carries a BOXED WARNING for complex sleep behaviours — sleep-walking, sleep-driving, and doing things while not fully awake, sometimes with serious injury or even death. If a patient ever has one of these events, discontinue immediately, and don't restart it.",
        check: {
          q: "A patient sleep-drives on zolpidem. What must you do?",
          options: ["Discontinue immediately and don't rechallenge", "Halve the dose and continue", "Reassure — it's harmless"],
          answer: "Discontinue immediately and don't rechallenge",
          why: "Prior complex sleep behaviour is a contraindication to further zolpidem."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Zolpidem is a benzo-site GABA-A modulator like other Z-drugs, but it's the most α1-selective — and the α1 subunit is the sedative one. That selectivity is why it's almost purely hypnotic, with little of the anxiolytic or muscle-relaxant effect you'd get from a benzodiazepine."
      },
      {
        title: "Don't mix them up",
        teach: "Zolpidem vs zopiclone: both Z-drugs, similar names, different drugs. Zolpidem is the α1-selective, purely-hypnotic imidazopyridine; zopiclone is the cyclopyrrolone with the tell-tale metallic taste.",
        check: {
          q: "Which Z-drug is the most α1-selective and therefore most purely hypnotic?",
          options: ["Zolpidem", "Zopiclone", "Both equally"],
          answer: "Zolpidem",
          why: "Zolpidem's α1 selectivity gives it a mostly-hypnotic, low-anxiolytic profile."
        }
      }
    ],
    trap: "Don't confuse zolpidem with zopiclone, and don't forget women and the elderly get the lower dose because they clear it slowly.",
    takeaway: "Zolpidem = the α1-selective, purely-hypnotic Z-drug — boxed warning for complex sleep behaviours, and lower dosing in women and the elderly."
  },

  buspirone: {
    hook: "The non-sedating, non-addictive GAD anxiolytic — but it takes ~2 weeks to work, must be taken daily, and is useless PRN.",
    steps: [
      {
        title: "The big picture",
        teach: "Buspirone is the odd one out among anxiolytics: no sedation, no abuse potential, and no dependence. It's an anti-anxiety drug that works through serotonin, not GABA — so it behaves completely differently from benzodiazepines."
      },
      {
        title: "What it treats",
        teach: "It's approved for generalized anxiety disorder (GAD). Off-label, it's used to augment antidepressants and to counter SSRI-induced sexual dysfunction.",
        check: {
          q: "What is buspirone's approved indication?",
          options: ["Generalized anxiety disorder", "Acute panic attacks, PRN", "Insomnia"],
          answer: "Generalized anxiety disorder",
          why: "Buspirone is a daily GAD anxiolytic — not a rescue or sleep drug."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Because it doesn't cause dependence or a high, buspirone is the anxiolytic of choice for GAD in a patient with a substance-use history — where you'd want to steer clear of benzodiazepines.",
        check: {
          q: "GAD in a patient with prior alcohol-use disorder. Which anxiolytic fits best?",
          options: ["Buspirone", "A benzodiazepine", "Zopiclone"],
          answer: "Buspirone",
          why: "No abuse potential makes buspirone ideal when addiction risk is a concern."
        }
      },
      {
        title: "How you use it",
        teach: "Start 7.5 mg twice daily, taken consistently with or without food, and titrate up by 5 mg every 2–3 days toward the usual 20–30 mg/day divided (max 60 mg/day). One habit to build: it's dosed BID–TID on a fixed schedule, every single day."
      },
      {
        title: "The key catch",
        teach: "Two things trip people up. First, buspirone takes about 2 weeks to work — no immediate relief. Second, it must be taken daily and is useless as an as-needed pill. So it will NOT calm an acute panic surge, and it will NOT cover or relieve benzodiazepine withdrawal (there's no cross-tolerance).",
        check: {
          q: "Can buspirone be used PRN for a sudden spike of anxiety?",
          options: ["No — it's daily and takes ~2 weeks to work", "Yes — it's a fast rescue pill", "Yes, but only at bedtime"],
          answer: "No — it's daily and takes ~2 weeks to work",
          why: "Delayed onset and daily dosing make buspirone useless PRN."
        }
      },
      {
        title: "What patients feel",
        teach: "The common effects are mild and non-sedating: dizziness, nausea, headache, lightheadedness, and some nervousness. Notably absent are the grogginess, sexual dysfunction, and dependence that dog other anxiety drugs."
      },
      {
        title: "The must-not-miss",
        teach: "Buspirone is serotonergic, so it's contraindicated with MAOIs — combining them (or starting within 14 days of an MAOI) risks serotonin syndrome and blood-pressure spikes. Also warn patients off grapefruit juice, which blocks CYP3A4 and can markedly raise buspirone levels.",
        check: {
          q: "Which combination is contraindicated with buspirone?",
          options: ["An MAOI", "A statin", "Acetaminophen"],
          answer: "An MAOI",
          why: "Buspirone plus an MAOI risks serotonin syndrome — a hard contraindication."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Buspirone is a 5-HT1A partial agonist — that single serotonin action is where the anxiolysis comes from. Crucially it has zero GABA-A/benzodiazepine activity, which explains why it's non-sedating, non-addictive, and can't substitute for a benzo."
      },
      {
        title: "Don't mix them up",
        teach: "Watch the near-homophones: busPIRone is the 5-HT1A anxiolytic for GAD; buPROPion is the NDRI antidepressant / smoking-cessation drug that LOWERS the seizure threshold. Totally different drugs, one letter-swap apart.",
        check: {
          q: "Which is the anxiolytic for GAD?",
          options: ["Buspirone", "Bupropion", "Both are anxiolytics"],
          answer: "Buspirone",
          why: "Buspirone treats anxiety; bupropion is an antidepressant/smoking-cessation NDRI."
        }
      }
    ],
    trap: "Don't confuse buspirone (5-HT1A anxiolytic, GAD) with bupropion (NDRI antidepressant). And never expect buspirone to work PRN or to cover benzo withdrawal.",
    takeaway: "Buspirone = the non-sedating, non-addictive GAD anxiolytic — daily dosing, ~2-week onset, no PRN use, and MAOI-contraindicated."
  },

  hydroxyzine: {
    hook: "A sedating antihistamine used PRN for anxiety — non-addictive, but watch anticholinergic burden and dose-related QT prolongation.",
    steps: [
      {
        title: "The big picture",
        teach: "Hydroxyzine is a first-generation antihistamine that doubles as an anxiolytic. Its selling point: it's non-dependence-forming and works fast, so you can use it as-needed — a handy PRN option when you want to avoid benzodiazepines."
      },
      {
        title: "What it treats",
        teach: "It's approved for anxiety/tension, itch (pruritus — that's the antihistamine job), and pre/post-op sedation. Off-label, it's used for insomnia and as a nausea adjunct.",
        check: {
          q: "Which of these is an approved use of hydroxyzine?",
          options: ["Anxiety/tension and pruritus", "Bipolar mania", "ADHD"],
          answer: "Anxiety/tension and pruritus",
          why: "As an antihistamine anxiolytic, it covers both anxiety and itch."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Like buspirone, hydroxyzine shines when abuse potential is a worry — a patient with a substance-use history who needs something for anxiety. The difference: hydroxyzine works quickly and can be dosed PRN, whereas buspirone is slow and daily.",
        check: {
          q: "Why might you pick hydroxyzine over a benzodiazepine for PRN anxiety?",
          options: ["It's not dependence-forming", "It works more slowly", "It has no side effects"],
          answer: "It's not dependence-forming",
          why: "No dependence risk makes it a safer as-needed option than a benzo."
        }
      },
      {
        title: "How you use it",
        teach: "For anxiety, 25–50 mg three-to-four times daily or PRN, up to about 100 mg/day — stay at the lowest effective dose, since anticholinergic and QT effects climb above that. A bedtime dose conveniently exploits its sedation."
      },
      {
        title: "What patients feel",
        teach: "Expect sedation and drowsiness (that's the point), plus anticholinergic effects — dry mouth, constipation, blurred vision, urinary retention — and dizziness. Tell patients not to drive until they know their response, and never to combine it with alcohol."
      },
      {
        title: "The must-not-miss",
        teach: "Two dose-related dangers: anticholinergic toxicity (especially risky in the elderly) and QT prolongation that can lead to torsades. It's actually contraindicated in patients with a prolonged QT interval — so consider an ECG if there are cardiac risk factors, electrolyte issues, or other QT-prolonging drugs.",
        check: {
          q: "Hydroxyzine is contraindicated in a patient with what finding?",
          options: ["A prolonged QT interval", "Well-controlled asthma", "Seasonal allergies"],
          answer: "A prolonged QT interval",
          why: "Dose-related QT prolongation makes a baseline long QT a contraindication."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Its calming effect comes from blocking central H1 histamine receptors (it's also antimuscarinic — hence the dry mouth). Fun fact: its active metabolite is cetirizine, itself a familiar second-generation allergy pill."
      }
    ],
    trap: "Hydroxyzine's non-addictive PRN appeal is real, but don't forget the two dose-related catches: anticholinergic burden (esp. elderly) and QT prolongation.",
    takeaway: "Hydroxyzine = the fast, non-addictive antihistamine anxiolytic for PRN use — mind the sedation, anticholinergic load, and dose-related QT prolongation."
  },

  lemborexant: {
    hook: "A newer orexin-blocker for insomnia — non-addictive, works for onset AND maintenance, but next-day grogginess climbs at the higher dose.",
    steps: [
      {
        title: "The big picture",
        teach: "Lemborexant is a dual orexin receptor antagonist — a 'DORA'. Instead of sedating you like a benzo-site drug, it takes the foot off the wakefulness pedal. It's a newer, mechanistically distinct option for insomnia, and it's non-dependence-forming."
      },
      {
        title: "What it treats",
        teach: "It's approved for insomnia — and unlike the sleep-onset-only agents, it helps with both falling asleep AND staying asleep.",
        check: {
          q: "What sleep problems does lemborexant address?",
          options: ["Both sleep onset and maintenance", "Sleep onset only", "Daytime anxiety"],
          answer: "Both sleep onset and maintenance",
          why: "Orexin antagonists work across the night, covering onset and maintenance."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "It's an attractive pick when you want a benzo-free hypnotic that also holds sleep through the night — for example, a patient who both struggles to fall asleep and wakes repeatedly, and where you'd rather avoid dependence.",
        check: {
          q: "Why choose a DORA like lemborexant over a Z-drug?",
          options: ["Non-dependence-forming and covers maintenance", "It's a controlled substance", "It only works for onset"],
          answer: "Non-dependence-forming and covers maintenance",
          why: "DORAs avoid dependence and treat both onset and maintenance."
        }
      },
      {
        title: "How you use it",
        teach: "Give 5 mg immediately before bed, with at least 7 hours available to sleep; you can go up to 10 mg based on response. Take it on an empty stomach — a meal delays its onset."
      },
      {
        title: "What patients feel",
        teach: "The common effects are next-day sleepiness, headache, fatigue, and abnormal (vivid) dreams. Warn patients they may also experience unusual sleep phenomena and to report anything odd."
      },
      {
        title: "The must-not-miss",
        teach: "Next-day somnolence is dose-related — clearly greater at 10 mg — so counsel patients about driving the morning after. It can also cause sleep paralysis and cataplexy-like muscle weakness, and it's contraindicated in narcolepsy.",
        check: {
          q: "Lemborexant is contraindicated in patients with which condition?",
          options: ["Narcolepsy", "Hypertension", "GERD"],
          answer: "Narcolepsy",
          why: "Blocking orexin in narcolepsy — already an orexin-deficient state — is contraindicated."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Orexin is the brain's wake-promoting signal. Lemborexant competitively blocks both orexin receptors (OX1R and OX2R), dialling down that wake drive so sleep can take over — with no GABA or benzodiazepine involvement at all. It's CYP3A4-dependent, so avoid strong CYP3A4 inhibitors."
      }
    ],
    trap: "Don't reflexively push to 10 mg — next-day somnolence and driving risk are clearly worse at the higher dose.",
    takeaway: "Lemborexant = a non-addictive orexin antagonist for sleep onset AND maintenance — but next-day grogginess rises at 10 mg."
  },

  daridorexant: {
    hook: "The shortest-acting orexin-blocker — engineered for the least next-day hangover while still holding sleep through the night.",
    steps: [
      {
        title: "The big picture",
        teach: "Daridorexant is another dual orexin receptor antagonist (DORA), a cousin of lemborexant. Same idea — quiet the brain's wake signal rather than sedate — but it's the shortest-acting of the marketed orexin blockers, deliberately designed to minimize next-day impairment."
      },
      {
        title: "What it treats",
        teach: "It's approved for insomnia, helping with both sleep onset and sleep maintenance — a full-night, benzo-free option."
      },
      {
        title: "When you'd reach for it",
        teach: "It's a natural pick when a patient needs maintenance coverage but can't afford morning grogginess — think someone who drives early or operates machinery, where you want the DORA benefits with the least residual sedation.",
        check: {
          q: "What's the design advantage of daridorexant over other orexin antagonists?",
          options: ["Shortest half-life → least next-day impairment", "It's the only one that's addictive", "It only helps sleep onset"],
          answer: "Shortest half-life → least next-day impairment",
          why: "Its ~8-hour half-life is engineered to reduce morning hangover."
        }
      },
      {
        title: "How you use it",
        teach: "Give 25 mg about 30 minutes before bed with at least 7 hours to sleep; you can increase to 50 mg if needed. As with lemborexant, take it on an empty stomach for faster onset."
      },
      {
        title: "What patients feel",
        teach: "Common effects are headache, some somnolence or fatigue, dizziness, and nausea — but residual daytime sleepiness tends to be less than with longer-acting hypnotics."
      },
      {
        title: "The must-not-miss",
        teach: "Even with the shorter half-life, use care driving the next morning. Like other DORAs it can cause sleep paralysis and cataplexy-like hypnagogic muscle weakness, it's contraindicated in narcolepsy, and it's CYP3A4-dependent — so avoid strong CYP3A4 inhibitors.",
        check: {
          q: "Which drug interaction matters most with daridorexant?",
          options: ["Strong CYP3A4 inhibitors", "Strong CYP2D6 inducers", "Calcium supplements"],
          answer: "Strong CYP3A4 inhibitors",
          why: "Daridorexant is CYP3A4-dependent, so strong inhibitors raise exposure."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Like all DORAs, it competitively blocks both orexin receptors (OX1R and OX2R) to reduce wake drive and let sleep come — no GABA or benzodiazepine action, and no dependence."
      }
    ],
    trap: "'Shortest-acting' doesn't mean zero next-day risk — still counsel on morning driving, and still respect the CYP3A4 interaction.",
    takeaway: "Daridorexant = the shortest-acting, non-addictive orexin antagonist — full-night coverage with the least next-day hangover."
  },

  melatonin: {
    hook: "Not a knockout pill — a body-clock nudge. For circadian and jet-lag problems, timing beats dose; sold OTC in Canada as an NPN, not a drug.",
    steps: [
      {
        title: "The big picture",
        teach: "Melatonin is the pineal hormone your brain already makes to signal 'night'. As a supplement it's not really a sedative — it doesn't knock you out, it nudges your internal clock. That framing matters: it shines for timing problems, not for garden-variety 'I can't sleep'."
      },
      {
        title: "What it treats",
        teach: "Its sweet spot is circadian rhythm disorders — delayed sleep-phase syndrome, jet lag, shift-work sleep disturbance — plus sleep onset in ASD/ADHD and adjunct roles in delirium prevention and REM sleep behaviour disorder.",
        check: {
          q: "For which problem is melatonin best suited?",
          options: ["Circadian rhythm disorders like jet lag", "Acute panic attacks", "Refractory seizures"],
          answer: "Circadian rhythm disorders like jet lag",
          why: "As a clock-setter, melatonin fits circadian/timing problems best."
        }
      },
      {
        title: "How you use it — timing is everything",
        teach: "For circadian/phase-shifting, use a LOW dose — 0.5–1 mg — timed to the shift you want (e.g. early evening for delayed sleep phase). As a plain hypnotic, 2–5 mg at bedtime. The mantra: correct timing matters far more than a bigger dose.",
        check: {
          q: "For delayed sleep-phase disorder, what matters most?",
          options: ["When you take it, more than how much", "Taking the highest possible dose", "Taking it with a fatty meal"],
          answer: "When you take it, more than how much",
          why: "Melatonin phase-shifts the clock — timing outweighs dose."
        }
      },
      {
        title: "What patients feel",
        teach: "It's remarkably well tolerated — occasional daytime drowsiness, headache, dizziness, or vivid dreams, and a very wide safety margin with essentially no dependence. Reassure patients it's a gentle clock-setter, not a heavy sedative."
      },
      {
        title: "The must-not-miss",
        teach: "The one interaction to flag: fluvoxamine. As a potent CYP1A2 inhibitor it dramatically raises melatonin levels — the same CYP1A2 pathway that makes fluvoxamine dangerous with ramelteon. So always ask about fluvoxamine.",
        check: {
          q: "Which drug markedly increases melatonin exposure via CYP1A2?",
          options: ["Fluvoxamine", "Metformin", "Amoxicillin"],
          answer: "Fluvoxamine",
          why: "Fluvoxamine's CYP1A2 inhibition sharply raises melatonin levels."
        }
      },
      {
        title: "A Canadian nuance",
        teach: "Here's a distinctly Canadian point: melatonin is sold over-the-counter as a Natural Health Product carrying an NPN (Natural Product Number), NOT a prescription drug with a DIN. Steer patients toward a reputable NPN-labelled product for consistent quality."
      }
    ],
    trap: "Don't treat melatonin like a sedative — it's a clock-setter. For circadian disorders, get the timing right before reaching for a bigger dose.",
    takeaway: "Melatonin = the OTC (NPN) body-clock nudge — best for circadian/jet-lag problems where timing beats dose; watch the fluvoxamine interaction."
  },

  ramelteon: {
    hook: "A prescription melatonin-receptor agonist for sleep onset — non-controlled, no abuse potential, but fluvoxamine is a hard contraindication.",
    steps: [
      {
        title: "The big picture",
        teach: "Ramelteon is a synthetic, pharmaceutical version of melatonin — a selective melatonin-receptor agonist. One thing to know up front: it's US-only and NOT marketed in Canada. We cover it mainly for awareness and to contrast with the OTC melatonin you can actually buy here."
      },
      {
        title: "What it treats",
        teach: "It's used for sleep-onset insomnia — trouble falling asleep — rather than staying asleep. Think of it as a targeted 'help me get to sleep' agent."
      },
      {
        title: "How you use it",
        teach: "The dose is a fixed 8 mg taken within 30 minutes of bedtime — no titration, that's the only dose. Avoid taking it with or right after a high-fat meal, which delays absorption."
      },
      {
        title: "The safety selling point",
        teach: "Its big advantage: no abuse potential. Unlike Z-drugs and benzodiazepines, ramelteon is NOT a controlled substance — a genuinely appealing feature for a hypnotic.",
        check: {
          q: "How does ramelteon differ from Z-drugs and benzodiazepines?",
          options: ["It's not a controlled substance", "It's more addictive", "It requires triplicate prescriptions"],
          answer: "It's not a controlled substance",
          why: "With no abuse potential, ramelteon isn't scheduled like the benzo-site hypnotics."
        }
      },
      {
        title: "The must-not-miss",
        teach: "The signature ramelteon fact: fluvoxamine is CONTRAINDICATED. As a potent CYP1A2 inhibitor, fluvoxamine raises ramelteon exposure enormously. This is the same CYP1A2 story you saw with melatonin — but here it's a hard 'do not combine'.",
        check: {
          q: "Which drug must NOT be combined with ramelteon?",
          options: ["Fluvoxamine", "Ibuprofen", "Loratadine"],
          answer: "Fluvoxamine",
          why: "Fluvoxamine's CYP1A2 inhibition raises ramelteon levels enormously — contraindicated."
        }
      },
      {
        title: "Chronic-use watch",
        teach: "With long-term use, ramelteon can nudge endocrine hormones — raising prolactin and lowering testosterone — so with chronic use ask about menstrual changes, libido, or galactorrhea. It also carries the class caution about worsening depression or suicidal ideation."
      },
      {
        title: "A touch of mechanism",
        teach: "It's a selective, high-affinity agonist at melatonin MT1/MT2 receptors — a pharmaceutical melatonergic. It promotes sleep onset with zero GABA or benzodiazepine activity, which is exactly why it isn't habit-forming."
      }
    ],
    trap: "Ramelteon's defining exam fact is the fluvoxamine (CYP1A2) contraindication — and remember it's US-only, unlike OTC melatonin.",
    takeaway: "Ramelteon = a non-controlled MT1/MT2 agonist for sleep onset (US-only) — no abuse potential, but fluvoxamine is contraindicated."
  },

  phenobarbital: {
    hook: "The dangerous outlier of the hypnotics: a barbiturate with no overdose ceiling, potent enzyme induction, and potentially fatal withdrawal.",
    steps: [
      {
        title: "The big picture",
        teach: "Phenobarbital is a long-acting barbiturate — and it's the dangerous outlier of the anxiolytic/hypnotic families. Everything the modern non-benzo sleep aids were designed to AVOID, phenobarbital has: a narrow therapeutic index, deadly overdoses, and severe withdrawal. Its calming/sedative use is now largely historical."
      },
      {
        title: "What it treats",
        teach: "Today its real jobs are neurological and detox: seizure disorders (including status epilepticus and neonatal seizures), and — off-label but protocolized — alcohol/sedative-hypnotic withdrawal and refractory benzodiazepine withdrawal.",
        check: {
          q: "What is a current, legitimate use of phenobarbital?",
          options: ["Seizure disorders and protocolized withdrawal", "First-line for everyday insomnia", "PRN anxiety in the clinic"],
          answer: "Seizure disorders and protocolized withdrawal",
          why: "Its modern role is seizures and supervised withdrawal — not routine sedation."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "You wouldn't pick phenobarbital for garden-variety anxiety or insomnia — the safer non-benzo options exist precisely to replace it. It's reserved for seizures or carefully protocolized withdrawal, under close monitoring.",
        check: {
          q: "Why is phenobarbital NOT a routine choice for insomnia?",
          options: ["Narrow index, lethal overdose, dangerous withdrawal", "It's too weak to help", "It has no drug interactions"],
          answer: "Narrow index, lethal overdose, dangerous withdrawal",
          why: "Its danger profile is exactly why safer hypnotics replaced it."
        }
      },
      {
        title: "How you use it",
        teach: "Dosing is level-guided. Maintenance is roughly 1–3 mg/kg/day (often 60–200 mg/day in adults); status epilepticus loads at ~15–20 mg/kg IV. Its long half-life allows once-daily dosing, but the narrow therapeutic index means you titrate slowly to a target serum level (~65–172 µmol/L)."
      },
      {
        title: "The no-ceiling danger",
        teach: "Here's the lethal difference from benzos. At normal doses phenobarbital enhances GABA. But at HIGH doses it opens the chloride channel directly, independent of GABA — so there's NO ceiling effect, and overdose causes profound respiratory depression and death. And flumazenil does NOT reverse it (it's not a benzo-site drug).",
        check: {
          q: "Why is phenobarbital overdose more lethal than a benzodiazepine overdose?",
          options: ["No ceiling effect — it opens the Cl- channel directly", "Flumazenil easily reverses it", "It can't cause respiratory depression"],
          answer: "No ceiling effect — it opens the Cl- channel directly",
          why: "Direct GABA-independent channel opening means no safety ceiling."
        }
      },
      {
        title: "The must-not-miss interaction",
        teach: "Phenobarbital is a potent, broad inducer of liver CYP enzymes — it speeds up the metabolism of many other drugs. It's the classic cause of oral-contraceptive failure and of falling warfarin levels (dropping INR). Always review every co-medication for induction interactions.",
        check: {
          q: "A patient on phenobarbital and warfarin — what happens to the INR?",
          options: ["It falls (enzyme induction lowers warfarin levels)", "It rises dangerously high", "Phenobarbital doesn't affect warfarin"],
          answer: "It falls (enzyme induction lowers warfarin levels)",
          why: "CYP induction speeds warfarin metabolism, dropping levels and INR."
        }
      },
      {
        title: "The withdrawal trap",
        teach: "Never stop phenobarbital suddenly. Like other sedative-hypnotics it causes physical dependence, and abrupt withdrawal can trigger seizures and delirium that are potentially fatal. Any taper must be slow and supervised — this is a counselling point to hammer home."
      },
      {
        title: "Monitoring & mechanism",
        teach: "Mechanistically it prolongs the DURATION of chloride-channel opening (benzos increase the FREQUENCY) — a neat contrast to file away. Monitor serum levels, sedation and respiratory status, a CBC (megaloblastic anemia from folate effects), and vitamin D/bone health with chronic use, since long-term phenobarbital can cause osteomalacia."
      }
    ],
    trap: "Phenobarbital is not a benzo: flumazenil won't reverse an overdose, there's no ceiling effect, and abrupt withdrawal can kill. Never confuse its danger profile with the safer non-benzo hypnotics.",
    takeaway: "Phenobarbital = the barbiturate outlier — no overdose ceiling, potent CYP induction (OCP/warfarin failure), and potentially fatal withdrawal; reserved for seizures and protocolized detox."
  }
};
