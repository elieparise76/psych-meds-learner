// ADHD micro-lessons (v2, clinical-first). Key = molecule id. Facts grounded in data/deck.json.
export default {
  methylphenidate: {
    hook: "The workhorse first-line ADHD stimulant — dosed by the clock and matched to how many hours of coverage you need.",
    steps: [
      {
        title: "The big picture",
        teach: "Methylphenidate is one of the two big stimulant families for ADHD, and stimulants are the most effective, first-line treatment we have. When you want fast, reliable symptom control, this is a go-to."
      },
      {
        title: "Where it sits",
        teach: "It's approved for ADHD and narcolepsy. Stimulants like this outperform the non-stimulants, so unless there's a specific reason to avoid them, they're the first thing you reach for.",
        check: {
          q: "Where do stimulants like methylphenidate sit in ADHD treatment?",
          options: ["First-line and most effective", "Last resort after everything else", "Only for narcolepsy, never ADHD"],
          answer: "First-line and most effective",
          why: "Stimulants are the most effective, first-line option for ADHD."
        }
      },
      {
        title: "Pick your formulation",
        teach: "Half the skill is matching the formulation to the day. Immediate-release (5 mg BID at breakfast and lunch) is short and flexible; extended-release products (e.g., OROS 18 mg) are taken once each morning and cover the whole school or work day — no awkward midday dose at the nurse's office."
      },
      {
        title: "Dose by the clock",
        teach: "Give it in the morning, and if you use a second IR dose, put it in the early afternoon. The last IR dose should land by mid-afternoon — dose too late and you'll wreck sleep. Titrate weekly to effect (max around 60 mg/day for most products).",
        check: {
          q: "Why give the last immediate-release dose by mid-afternoon?",
          options: ["To protect sleep / avoid insomnia", "To boost absorption", "Because food blocks it later"],
          answer: "To protect sleep / avoid insomnia",
          why: "Late dosing causes insomnia — a hallmark stimulant side effect."
        }
      },
      {
        title: "What patients feel",
        teach: "Expect decreased appetite and weight loss, trouble sleeping, headache, a bumped-up heart rate and blood pressure, and sometimes irritability as it wears off. Counsel a calorie-dense breakfast and evening snacks, and keep an eye on weight."
      },
      {
        title: "Screen the heart first",
        teach: "Before starting, ask about cardiac history and any family history of sudden death or structural heart disease, and check baseline BP and heart rate. Also screen for psychosis, bipolar disorder, and tics — stimulants can unmask or worsen all three.",
        check: {
          q: "What's the key thing to screen for before starting a stimulant?",
          options: ["Cardiac / sudden-death history", "History of migraines", "Prior antibiotic allergy"],
          answer: "Cardiac / sudden-death history",
          why: "Sudden cardiac death is a risk with pre-existing structural heart disease."
        }
      },
      {
        title: "Keep watching",
        teach: "At each visit recheck BP and heart rate, and in children plot height and weight on a growth chart — growth suppression is real. Track appetite, sleep, mood and tics, and stay alert for diversion or misuse (it carries a boxed warning for abuse and dependence)."
      },
      {
        title: "Never with an MAOI",
        teach: "The one you must not miss: stimulants plus an MAOI (or within 14 days of stopping one) can trigger a hypertensive crisis. It's an absolute contraindication. Mechanistically, methylphenidate is a pure reuptake blocker (DAT/NET) — it doesn't release dopamine the way amphetamines do — and it's cleared by CES1, not CYP, so it has few drug interactions.",
        check: {
          q: "Which combination is contraindicated with methylphenidate?",
          options: ["An MAOI", "Acetaminophen", "A multivitamin"],
          answer: "An MAOI",
          why: "Stimulant plus MAOI risks a hypertensive crisis — contraindicated."
        }
      }
    ],
    trap: "The OROS 'ghost tablet' seen in the stool is just the empty shell — normal, not treatment failure.",
    takeaway: "Methylphenidate = first-line stimulant; match the formulation to the hours you need, dose AM, screen the heart, watch growth, and never combine with an MAOI."
  },

  dextroamphetamine: {
    hook: "The other first-line stimulant family — an amphetamine that often works when methylphenidate doesn't (and vice versa).",
    steps: [
      {
        title: "The big picture",
        teach: "Dextroamphetamine is a first-line ADHD stimulant from the amphetamine family. Amphetamines and methylphenidate are the two main stimulant classes — if a patient doesn't respond to one class, switching to the other is a classic next move."
      },
      {
        title: "Where it sits",
        teach: "Approved for ADHD and narcolepsy, it's a highly effective first-line agent. Choice between the amphetamine and methylphenidate families often comes down to individual response and tolerability.",
        check: {
          q: "If a child doesn't respond to methylphenidate, a sensible next step is…",
          options: ["Try an amphetamine like dextroamphetamine", "Give up on stimulants entirely", "Double the methylphenidate indefinitely"],
          answer: "Try an amphetamine like dextroamphetamine",
          why: "Non-response to one stimulant class doesn't predict the other — switching classes is standard."
        }
      },
      {
        title: "How you use it",
        teach: "Start IR 5 mg once or twice daily and increase by about 5 mg/day each week to response (typically up to ~40 mg/day). Dose in the morning, with any second dose by early afternoon; sustained-release versions go once each morning."
      },
      {
        title: "What patients feel",
        teach: "The amphetamine profile: reduced appetite and weight loss, insomnia, a higher heart rate and blood pressure, dry mouth, and sometimes irritability or anxiety. In children, appetite suppression means you must monitor growth.",
        check: {
          q: "Which is a common, expected side effect of dextroamphetamine?",
          options: ["Decreased appetite", "Weight gain", "Slowed heart rate"],
          answer: "Decreased appetite",
          why: "Appetite suppression (with weight loss) is a hallmark stimulant effect."
        }
      },
      {
        title: "Screen and monitor",
        teach: "Before starting, check cardiac and family history of sudden death, baseline BP/HR, and height/weight, and screen for psychosis, bipolar disorder and misuse risk. Then recheck vitals and growth on follow-up, and watch for diversion."
      },
      {
        title: "The must-not-miss",
        teach: "It carries a boxed warning for abuse, misuse and addiction, so counsel secure storage. And like all amphetamines, it's contraindicated with MAOIs (or within 14 days) — hypertensive crisis.",
        check: {
          q: "Which pairing is contraindicated with dextroamphetamine?",
          options: ["An MAOI", "Water", "Ibuprofen"],
          answer: "An MAOI",
          why: "Amphetamine plus MAOI risks a hypertensive crisis."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "The memorable contrast: amphetamines RELEASE dopamine and norepinephrine (and block reuptake), whereas methylphenidate only blocks reuptake. One quirk — urine pH matters: alkaline urine (e.g., bicarbonate) raises amphetamine levels and toxicity, acidic urine clears it faster."
      }
    ],
    trap: "Don't confuse dextroamphetamine (the active drug) with lisdexamfetamine (its prodrug) or mixed amphetamine salts (a d+l blend).",
    takeaway: "Dextroamphetamine = first-line amphetamine that RELEASES dopamine; dose AM, watch appetite/growth/vitals, avoid MAOIs, and try it if methylphenidate fails."
  },

  lisdexamfetamine: {
    hook: "The amphetamine prodrug — inert until your blood switches it on, giving smooth once-daily cover and lower misuse potential.",
    steps: [
      {
        title: "The big picture",
        teach: "Lisdexamfetamine is a first-line amphetamine stimulant with a clever twist: it's a prodrug, inactive until the body converts it. That design makes it the lower-misuse member of the amphetamine family."
      },
      {
        title: "Why the prodrug matters",
        teach: "Because it's only activated after red-blood-cell enzymes cleave it in the bloodstream, you can't get a fast 'high' by snorting or injecting it — the conversion is rate-limited no matter the route. That lowers (though doesn't eliminate) misuse and diversion liability, so it's a nice pick when that's a concern.",
        check: {
          q: "Why does lisdexamfetamine have relatively lower misuse potential?",
          options: ["It can't be activated by snorting or injecting", "It isn't a controlled substance", "It has no dopamine effect"],
          answer: "It can't be activated by snorting or injecting",
          why: "It must be enzymatically converted in blood, so route-of-administration 'highs' are blunted."
        }
      },
      {
        title: "How you use it",
        teach: "Start 30 mg once each morning and adjust by 10–20 mg/week to response (max 70 mg/day). The rate-limited conversion gives a smooth, consistent all-day profile from a single morning dose — no midday top-up. Tell patients not to expect a faster effect by altering the capsule."
      },
      {
        title: "What patients feel",
        teach: "Once activated it behaves like dextroamphetamine: decreased appetite and weight loss, insomnia, dry mouth, irritability, and higher heart rate and blood pressure. Screen the heart first and monitor growth in children, just like any stimulant.",
        check: {
          q: "Once converted, lisdexamfetamine's side-effect profile resembles…",
          options: ["Dextroamphetamine (appetite loss, insomnia, higher HR/BP)", "A sedating antihistamine", "A blood-pressure-lowering agent"],
          answer: "Dextroamphetamine (appetite loss, insomnia, higher HR/BP)",
          why: "It's hydrolyzed to active dextroamphetamine, so it shares that profile."
        }
      },
      {
        title: "Still an amphetamine",
        teach: "The prodrug design lowers misuse liability but doesn't change the pharmacology once it's active. It still carries the boxed abuse warning, is still a controlled substance, and is still contraindicated with MAOIs.",
        check: {
          q: "Does the prodrug design remove the MAOI contraindication?",
          options: ["No — MAOIs are still contraindicated", "Yes — MAOIs are now safe", "Only in adults"],
          answer: "No — MAOIs are still contraindicated",
          why: "It becomes active amphetamine, so every amphetamine caution still applies."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "It's d-amphetamine covalently bound to the amino acid L-lysine; red-blood-cell peptidases slowly hydrolyze it to release active dextroamphetamine. That same rate-limited step is why it's also FDA-approved for binge eating disorder."
      }
    ],
    trap: "'Lower' misuse liability is not 'no' misuse liability — it's still a controlled amphetamine that needs secure storage.",
    takeaway: "Lisdexamfetamine = amphetamine prodrug activated in blood → smooth once-daily cover and lower misuse potential, but still a controlled amphetamine (no MAOIs)."
  },

  amphetamine_salts: {
    hook: "Mixed amphetamine salts — a 3:1 d:l blend giving once-daily cover, with a little extra cardiovascular kick from the l-isomer.",
    steps: [
      {
        title: "The big picture",
        teach: "Mixed amphetamine salts are a first-line ADHD stimulant made of roughly a 3:1 dextro-to-levo amphetamine blend. Like all amphetamines, they drive presynaptic release of dopamine and norepinephrine (and block reuptake)."
      },
      {
        title: "How you use it",
        teach: "The XR formulation is dosed once each morning (10 mg in children, adults often start 20 mg), increasing by about 10 mg/week to response. The beaded extended-release design gives all-day coverage without a midday dose."
      },
      {
        title: "The l-isomer twist",
        teach: "The levo-amphetamine component adds relatively more peripheral noradrenergic — that is, cardiovascular — effect than pure dextroamphetamine. Practically, that's one more reason to keep an eye on heart rate and blood pressure.",
        check: {
          q: "What does the l-amphetamine component contribute?",
          options: ["More peripheral cardiovascular effect", "Less cardiovascular effect", "A sedating effect"],
          answer: "More peripheral cardiovascular effect",
          why: "The l-isomer is relatively more peripherally (cardiovascular) active."
        }
      },
      {
        title: "What patients feel",
        teach: "The familiar stimulant picture: reduced appetite and weight loss, insomnia, higher heart rate and blood pressure, mood lability, and dry mouth. Screen the heart before starting and monitor growth in children."
      },
      {
        title: "The must-not-miss",
        teach: "It carries the boxed warning for abuse, misuse and addiction, so counsel secure storage and report chest pain, palpitations or new hallucinations. As an amphetamine, it's contraindicated with MAOIs.",
        check: {
          q: "Which is contraindicated with mixed amphetamine salts?",
          options: ["MAOIs", "Multivitamins", "Sunscreen"],
          answer: "MAOIs",
          why: "As an amphetamine, combining with an MAOI risks a hypertensive crisis."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Mechanistically it's a releaser-plus-reuptake-blocker, just like other amphetamines — the 3:1 d:l ratio is what distinguishes it, with that extra l-isomer cardiovascular effect being the main flavour."
      }
    ],
    trap: "Mixed amphetamine salts (Adderall XR) ≠ lisdexamfetamine (a prodrug) ≠ dextroamphetamine (the pure d-isomer).",
    takeaway: "Mixed amphetamine salts = a 3:1 d:l-amphetamine releaser; once-daily XR, extra l-isomer cardiovascular effect, standard stimulant/abuse cautions, no MAOIs."
  },

  atomoxetine: {
    hook: "The non-stimulant, non-controlled NRI — no misuse potential, but it takes weeks and carries liver and youth-suicidality warnings.",
    steps: [
      {
        title: "The big picture",
        teach: "Atomoxetine is the main non-stimulant option for ADHD. Unlike the stimulants, it's not a controlled substance and has no misuse potential — a genuinely different tool in the box."
      },
      {
        title: "When you'd reach for it",
        teach: "It's the go-to when diversion or misuse is a real concern — a household with substance use, or a patient who might sell their pills — and when stimulants aren't tolerated. Effective, just not first-choice for most.",
        check: {
          q: "In which situation does atomoxetine especially shine?",
          options: ["When diversion or misuse is a concern", "When you need an effect within the hour", "When the patient has liver failure"],
          answer: "When diversion or misuse is a concern",
          why: "Being non-controlled with no misuse potential is its signature advantage."
        }
      },
      {
        title: "How you use it",
        teach: "Dose by weight — start around 0.5 mg/kg/day (or 40 mg in adults) and titrate after a few weeks toward a target of about 1.2 mg/kg/day (or 80 mg). It can be once daily or split, and timing isn't sleep-critical the way stimulants are."
      },
      {
        title: "The catch — it's slow",
        teach: "Because it doesn't cause a striatal dopamine surge, it takes 2–4 weeks for full benefit. Counsel patients this is NOT a stimulant: they won't feel it on day one, and they need to keep taking it daily.",
        check: {
          q: "How long until atomoxetine reaches full effect?",
          options: ["2–4 weeks", "Within an hour", "About 6 months"],
          answer: "2–4 weeks",
          why: "No fast dopamine surge means a gradual, weeks-long onset."
        }
      },
      {
        title: "What patients feel",
        teach: "Common effects include decreased appetite, nausea and GI upset, dry mouth, insomnia or somnolence, fatigue, and a modest rise in heart rate and blood pressure. In adults you may also see urinary hesitancy and sexual dysfunction."
      },
      {
        title: "Two red flags",
        teach: "This is the must-not-miss card. It carries a boxed warning for suicidal ideation in children and adolescents — monitor closely early on — plus rare but potentially severe hepatotoxicity. Stop it for jaundice or markedly elevated LFTs, and do NOT rechallenge.",
        check: {
          q: "Which finding means you stop atomoxetine and do not rechallenge?",
          options: ["Signs of hepatotoxicity (jaundice / high LFTs)", "Mild dry mouth", "A transient headache"],
          answer: "Signs of hepatotoxicity (jaundice / high LFTs)",
          why: "Hepatotoxicity is rare but potentially severe — discontinue and don't rechallenge."
        }
      },
      {
        title: "Interactions & mechanism",
        teach: "It's cleared by CYP2D6, so poor metabolizers or patients on fluoxetine/paroxetine build up much higher levels — titrate cautiously — and MAOIs are contraindicated. Mechanistically it's a selective norepinephrine reuptake inhibitor; because prefrontal NET also clears dopamine, it lifts PFC dopamine/norepinephrine without the striatal surge that drives reward and misuse.",
        check: {
          q: "Adding fluoxetine to atomoxetine does what to atomoxetine levels?",
          options: ["Raises them (CYP2D6 inhibition)", "Lowers them", "No change"],
          answer: "Raises them (CYP2D6 inhibition)",
          why: "Fluoxetine inhibits CYP2D6, so atomoxetine accumulates."
        }
      }
    ],
    trap: "'Non-stimulant' does not mean 'no warnings' — remember the liver and the youth-suicidality signals.",
    takeaway: "Atomoxetine = non-controlled selective NRI; slow (2–4 wk) onset, CYP2D6-dependent, watch for hepatotoxicity and youth suicidality — the choice when misuse is a worry."
  },

  guanfacine: {
    hook: "The α2A-selective non-stimulant — calms hyperactivity and impulsivity, pairs well with a stimulant, but never stop it cold.",
    steps: [
      {
        title: "The big picture",
        teach: "Guanfacine XR is a non-stimulant α2A-adrenergic agonist approved for ADHD, either on its own or added to a stimulant. It's a different mechanism entirely from the stimulants and the NRI."
      },
      {
        title: "When you'd reach for it",
        teach: "It's handy for hyperactivity and impulsivity, for kids with tics or oppositional/aggressive behaviour, and as an add-on when a stimulant only partly works. That stimulant-adjunct role is one of its distinctive niches.",
        check: {
          q: "A common role for guanfacine in ADHD is…",
          options: ["Add-on to a stimulant for partial response", "A rapid rescue for acute agitation", "First-line over stimulants for everyone"],
          answer: "Add-on to a stimulant for partial response",
          why: "It's specifically indicated as monotherapy OR as an adjunct to a stimulant."
        }
      },
      {
        title: "How you use it",
        teach: "Start XR 1 mg once daily and increase by no more than 1 mg/week to response (max 4 mg/day in children 6–12). If daytime drowsiness is limiting, dose at bedtime. Swallow the XR tablet whole and avoid taking it with a high-fat meal, which raises exposure."
      },
      {
        title: "What patients feel",
        teach: "The α2-agonist signature: somnolence and fatigue, low blood pressure, a slow heart rate, dizziness and dry mouth. Warn patients to rise slowly and use caution driving until they know how it affects them.",
        check: {
          q: "Which side effect should you counsel patients about with guanfacine?",
          options: ["Drowsiness and low blood pressure", "Weight gain and mania", "Fast heart rate and tremor"],
          answer: "Drowsiness and low blood pressure",
          why: "Sedation, hypotension and bradycardia are the classic α2-agonist effects."
        }
      },
      {
        title: "Never stop it cold",
        teach: "The must-not-miss: abrupt discontinuation causes rebound hypertension. Always taper, and watch for hypotension, bradycardia and syncope along the way.",
        check: {
          q: "Why must guanfacine be tapered rather than stopped abruptly?",
          options: ["Rebound hypertension", "Serotonin syndrome", "Rebound psychosis"],
          answer: "Rebound hypertension",
          why: "Abrupt α2-agonist withdrawal triggers rebound hypertension."
        }
      },
      {
        title: "Monitoring",
        teach: "Check BP and heart rate at baseline, after each titration, and periodically thereafter, track growth in children, and review any other blood-pressure or sedating medications. It's metabolized by CYP3A4, so dose down with strong inhibitors and up with inducers."
      },
      {
        title: "vs clonidine (mechanism)",
        teach: "Guanfacine is more α2A-selective than clonidine, so for a given effect it's relatively less sedating and less hypotensive — and it's the α2 agonist with a formal ADHD/stimulant-adjunct indication. Postsynaptic α2A stimulation on prefrontal neurons strengthens the attention and working-memory network."
      }
    ],
    trap: "'Less sedating' is relative — guanfacine still sedates and lowers BP; it's just gentler than clonidine.",
    takeaway: "Guanfacine XR = non-stimulant α2A-selective agonist for ADHD; good as a stimulant adjunct or for tics, less sedating than clonidine, and must be tapered to avoid rebound hypertension."
  },

  clonidine: {
    hook: "The most sedating α2 agonist — great for ADHD with tics or sleep-onset problems, but taper it and lock it away from toddlers.",
    steps: [
      {
        title: "The big picture",
        teach: "Clonidine is a central α2-adrenergic agonist. In ADHD its use is largely off-label, reached for especially when there are tics, aggression and impulsivity, or trouble falling asleep — and it also treats hypertension and eases opioid and other withdrawal."
      },
      {
        title: "When you'd reach for it",
        teach: "Because it's noticeably sedating, it's a favourite for the child with ADHD plus sleep-onset insomnia or tics — often dosed at bedtime so the drowsiness works for you rather than against you.",
        check: {
          q: "Why is clonidine often chosen for a child with ADHD and sleep-onset insomnia?",
          options: ["It's sedating and can be dosed at bedtime", "It's a stimulant that improves sleep", "It has no effect on sleep"],
          answer: "It's sedating and can be dosed at bedtime",
          why: "Its marked sedation is leveraged for sleep-onset problems."
        }
      },
      {
        title: "How you use it",
        teach: "For ADHD or sleep it's often started around 0.05 mg (50 mcg) at bedtime and titrated slowly in divided doses, giving the larger portion at night (up to ~0.4 mg/day). Compared with guanfacine it's less α2A-selective, more sedating, and shorter-acting."
      },
      {
        title: "What patients feel",
        teach: "Expect marked sedation, dry mouth, low blood pressure, a slow heart rate, dizziness, constipation, and sometimes irritability as each dose wears off. Warn about drowsiness and rising slowly."
      },
      {
        title: "Rebound & taper",
        teach: "The must-not-miss: rebound hypertension on abrupt withdrawal is MORE marked than with guanfacine — and worse if the patient is on a beta-blocker — so always taper. Also watch for profound bradycardia, hypotension and AV block.",
        check: {
          q: "Compared with guanfacine, clonidine's rebound hypertension is…",
          options: ["More marked — taper carefully", "Milder and safe to stop abruptly", "Nonexistent"],
          answer: "More marked — taper carefully",
          why: "Clonidine causes more pronounced rebound hypertension; never stop it abruptly."
        }
      },
      {
        title: "Pediatric overdose",
        teach: "A classic lethal toddler ingestion: CNS and respiratory depression, bradycardia and pinpoint pupils can mimic an opioid toxidrome. Counsel families to store it securely, well out of a young child's reach.",
        check: {
          q: "A toddler with CNS depression, bradycardia and miosis after a home ingestion — which drug fits?",
          options: ["Clonidine", "Methylphenidate", "Atomoxetine"],
          answer: "Clonidine",
          why: "Clonidine overdose mimics the opioid toxidrome — a dangerous pediatric ingestion."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "It's a central α2 agonist (less α2A-selective than guanfacine, also acting at imidazoline receptors) that reduces sympathetic outflow. That same central action is why it's shorter-acting and more sedating than guanfacine, and why it doubles as an antihypertensive and withdrawal aid."
      }
    ],
    trap: "Clonidine vs clozapine vs clonazepam — sound-alikes, entirely different drugs.",
    takeaway: "Clonidine = the most sedating, less-selective α2 agonist; useful for ADHD with tics or sleep, must be tapered (marked rebound HTN), and dangerous in pediatric overdose."
  }
};
