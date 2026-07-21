// First-generation (typical) antipsychotics — Duolingo-style micro-lessons (v2, clinical-first).
// Class story: potent D2 blockade quiets psychosis but drives the class toxicities —
// EPS (dystonia / akathisia / parkinsonism / tardive dyskinesia), NMS, hyperprolactinemia, QT.
// The practical framing is POTENCY: high-potency (haloperidol, fluphenazine, trifluoperazine,
// pimozide) = more EPS, less sedation; low-potency (chlorpromazine, methotrimeprazine) =
// more sedation / anticholinergic / orthostasis, comparatively less EPS.
// All carry the elderly-dementia mortality caution. Every fact grounded in data/deck.json.

export default {
  haloperidol: {
    hook: "The prototype high-potency FGA: the go-to for acute agitation and delirium — and an IV form that puts you on telemetry.",
    steps: [
      {
        title: "The big picture",
        teach: "Haloperidol is THE benchmark first-generation antipsychotic. It's high-potency, meaning it hits dopamine hard: powerful antipsychotic effect, very little sedation or anticholinergic baggage — but the most movement side effects of the class."
      },
      {
        title: "What it treats",
        teach: "Beyond schizophrenia, it's a hospital workhorse for acute agitation (2–5 mg IM) and the drug most people reach for in delirium. It's fast, predictable, and comes in oral, IM, IV, and a long-acting depot."
      },
      {
        title: "Reaching for it",
        teach: "Picture a delirious, agitated patient on the ward at 3 a.m. Haloperidol's minimal sedation and blood-pressure effects make it easier to dose than a heavily sedating agent.",
        check: {
          q: "Why is haloperidol often preferred for agitation in a medically frail, delirious patient?",
          options: ["Little sedation or orthostatic hypotension", "It has no EPS risk", "It lowers seizure threshold the most"],
          answer: "Little sedation or orthostatic hypotension",
          why: "High-potency = clean autonomic profile, so it's easier to titrate in fragile patients."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — 0.5–5 mg PO (just 0.25–0.5 mg in the elderly) — and titrate to response, keeping the dose minimal to spare EPS. The decanoate depot is given deep IM every 4 weeks at roughly 10–20× the oral daily dose; overlap oral until levels build."
      },
      {
        title: "What patients feel",
        teach: "The dominant complaints are movement-related: akathisia (an inner restlessness), acute dystonia, and drug-induced parkinsonism. Long term, watch for tardive dyskinesia. Hyperprolactinemia can cause galactorrhea or amenorrhea.",
        check: {
          q: "A young man on haloperidol paces constantly and can't sit still. Most likely cause?",
          options: ["Akathisia", "Tardive dyskinesia", "Cholestatic jaundice"],
          answer: "Akathisia",
          why: "Akathisia is a drug-induced restlessness — a classic, distressing high-potency EPS."
        }
      },
      {
        title: "The IV catch",
        teach: "Intravenous haloperidol prolongs the QT interval and can trigger torsades — so ECG monitoring is mandatory and many hospitals restrict IV use. Check potassium and magnesium first.",
        check: {
          q: "What must you monitor when giving haloperidol IV?",
          options: ["ECG for QT prolongation", "Liver enzymes only", "Nothing extra is needed"],
          answer: "ECG for QT prolongation",
          why: "IV haloperidol carries a real torsades risk — QT surveillance is non-negotiable."
        }
      },
      {
        title: "Elderly caution",
        teach: "Like all antipsychotics, it carries a boxed warning: elderly patients with dementia-related psychosis have an increased risk of death (mostly cardiovascular or infectious). Use is off-label there and must be justified."
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: haloperidol is a butyrophenone that potently blocks post-synaptic D2 receptors. Mesolimbic blockade calms psychosis; nigrostriatal blockade causes EPS; tuberoinfundibular blockade raises prolactin."
      }
    ],
    trap: "Don't confuse haloperidol (high-potency, IM/depot workhorse) with the sedating low-potency chlorpromazine — same class, opposite side-effect flavour.",
    takeaway: "Haloperidol = the high-potency FGA benchmark: excellent for agitation and delirium, EPS-heavy, minimal sedation, and IV use demands QT monitoring."
  },

  chlorpromazine: {
    hook: "The original antipsychotic and the low-potency prototype: heavy on sedation, orthostasis and anticholinergic effects, lighter on EPS.",
    steps: [
      {
        title: "The big picture",
        teach: "Chlorpromazine was the first true antipsychotic and it's the low-potency benchmark. It blocks dopamine less avidly but hits many other receptors — so its signature is sedation, low blood pressure and dry-mouth-type effects rather than stiffness."
      },
      {
        title: "What it treats",
        teach: "Its main role is schizophrenia and acute psychosis, and its sedating punch is sometimes useful for very agitated patients. Historically it was also used for intractable hiccups and nausea."
      },
      {
        title: "How you use it",
        teach: "Start around 25–50 mg (often TID) and increase gradually — the dose range is wide, up to ~800–1000 mg/day in resistant cases. Because it's so sedating, load the larger portion at bedtime."
      },
      {
        title: "What patients feel",
        teach: "Expect marked drowsiness, orthostatic dizziness, and anticholinergic effects (dry mouth, constipation, blurred vision, urinary retention). Counsel patients to rise slowly and warn them the sedation is strongest early.",
        check: {
          q: "Compared with haloperidol, what dominates chlorpromazine's side-effect profile?",
          options: ["Sedation, orthostasis and anticholinergic effects", "Severe EPS with little sedation", "QT is its only concern"],
          answer: "Sedation, orthostasis and anticholinergic effects",
          why: "Low-potency agents trade EPS for autonomic and sedating burden."
        }
      },
      {
        title: "The sun rule",
        teach: "Photosensitivity is classic — patients burn easily, so counsel sunscreen and protective clothing. Long-term high-dose use can also cause blue-grey skin discoloration and lens or corneal deposits.",
        check: {
          q: "What lifestyle counselling is classic for chlorpromazine?",
          options: ["Use sun protection", "Avoid all dairy", "Take it on an empty stomach only"],
          answer: "Use sun protection",
          why: "Phenothiazine photosensitivity makes sunburn and skin discoloration a real risk."
        }
      },
      {
        title: "Don't miss",
        teach: "Beyond the shared NMS and tardive dyskinesia risks, chlorpromazine has distinctive hazards: cholestatic jaundice, a lowered seizure threshold, agranulocytosis, and QT prolongation.",
        check: {
          q: "Which is a distinctive serious risk with chlorpromazine?",
          options: ["Cholestatic jaundice", "It cannot cause NMS", "It has no effect on seizure threshold"],
          answer: "Cholestatic jaundice",
          why: "Cholestatic jaundice and a lowered seizure threshold are classic phenothiazine hazards."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: it's an aliphatic phenothiazine that blocks D2 but also H1, muscarinic, alpha-1 and 5-HT2 receptors — that broad off-target blockade explains the sedation, orthostasis and dry-mouth profile."
      }
    ],
    trap: "Same phenothiazine family as trifluoperazine, but opposite behaviour: chlorpromazine is low-potency and sedating, trifluoperazine is high-potency and EPS-heavy — potency, not chemistry, predicts the side effects.",
    takeaway: "Chlorpromazine = the low-potency FGA prototype: sedating, hypotensive, anticholinergic and photosensitizing, with less EPS but more autonomic and hepatic risk."
  },

  loxapine: {
    hook: "A mid-potency FGA with a party trick: an inhaled form that aborts acute agitation in minutes — if the lungs cooperate.",
    steps: [
      {
        title: "The big picture",
        teach: "Loxapine sits in the middle of the potency spectrum, so it shares the usual FGA profile. But the reason it stands out is its unique INHALED formulation for rapidly calming acute agitation."
      },
      {
        title: "What it treats",
        teach: "Oral loxapine treats schizophrenia (10 mg BID, up to ~250 mg/day). The inhaled version is a single 10 mg dose used only in a monitored healthcare setting for acute agitation in schizophrenia or bipolar disorder."
      },
      {
        title: "The lung caveat",
        teach: "Inhaled loxapine can trigger bronchospasm, so it's contraindicated in asthma or COPD, and a rescue bronchodilator must be on hand. Watch the patient for wheeze or chest tightness after the dose.",
        check: {
          q: "Before giving inhaled loxapine, what must you screen for and have ready?",
          options: ["Airway disease; a rescue bronchodilator", "Renal function; IV fluids", "Nothing — it's fully inhaled and safe"],
          answer: "Airway disease; a rescue bronchodilator",
          why: "Bronchospasm risk makes asthma/COPD a contraindication and a bronchodilator mandatory."
        }
      },
      {
        title: "One and done",
        teach: "The inhaled dose is a one-time, in-clinic treatment — not something a patient takes home or repeats freely (max one 10 mg dose per 24 h). It's a bridge to calm, not maintenance therapy.",
        check: {
          q: "How is inhaled loxapine used?",
          options: ["A single in-clinic dose for acute agitation", "Three times daily at home", "As a monthly depot"],
          answer: "A single in-clinic dose for acute agitation",
          why: "It's a one-time monitored dose, capped at one per 24 hours."
        }
      },
      {
        title: "What patients feel",
        teach: "Like other FGAs, expect sedation, dizziness and EPS (akathisia, dystonia, parkinsonism). The inhaled route adds throat irritation and an unpleasant taste. Long-term oral use carries the usual tardive dyskinesia and NMS risks."
      },
      {
        title: "A family secret",
        teach: "One line of mechanism: loxapine is a dibenzoxazepine, structurally related to clozapine, blocking D2 and 5-HT2A. Fun fact — its metabolite amoxapine is itself marketed as an antidepressant.",
        check: {
          q: "Loxapine is a dibenzoxazepine structurally related to which antipsychotic?",
          options: ["Clozapine", "Haloperidol", "Lithium"],
          answer: "Clozapine",
          why: "Loxapine shares the dibenzoxazepine chemistry with clozapine."
        }
      }
    ],
    trap: "The exam angle isn't oral loxapine — it's the INHALED form and its bronchospasm contraindication in asthma/COPD.",
    takeaway: "Loxapine = a mid-potency FGA whose signature is an inhaled single-dose treatment for acute agitation, gated by bronchospasm risk."
  },

  perphenazine: {
    hook: "The mid-potency phenothiazine that held its own against the newer drugs in the CATIE trial — cheap, balanced, and quietly effective.",
    steps: [
      {
        title: "The big picture",
        teach: "Perphenazine is a mid-potency phenothiazine — it sits between chlorpromazine and haloperidol, with moderate EPS and moderate sedation. No extreme in either direction.",
        check: {
          q: "Where does perphenazine sit on the potency spectrum?",
          options: ["Mid-potency, between chlorpromazine and haloperidol", "The most sedating of all FGAs", "Higher potency than haloperidol"],
          answer: "Mid-potency, between chlorpromazine and haloperidol",
          why: "It's the balanced middle child — moderate EPS, moderate sedation."
        }
      },
      {
        title: "What it treats",
        teach: "Its main job is schizophrenia, usual dosing around 12–24 mg/day. Its balanced profile made it the FGA chosen to represent the whole 'older drug' camp in a landmark comparison trial."
      },
      {
        title: "The CATIE lesson",
        teach: "In the CATIE trial, mid-potency perphenazine performed roughly as well as several second-generation antipsychotics and was far more cost-effective — a reminder that newer doesn't automatically mean better.",
        check: {
          q: "What did CATIE teach about perphenazine?",
          options: ["It was about as effective as SGAs and cost-effective", "It was clearly inferior to every SGA", "It has no antipsychotic effect"],
          answer: "It was about as effective as SGAs and cost-effective",
          why: "CATIE showed this older, cheaper FGA held its own against newer agents."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 4–8 mg BID–TID and titrate to response, up to a max of ~64 mg/day. The effect on psychosis builds over weeks, so counsel patience."
      },
      {
        title: "What patients feel",
        teach: "Being mid-potency, it gives a balanced mix: moderate EPS, moderate sedation, mild orthostasis, and mild anticholinergic effects. Hyperprolactinemia and the usual NMS/tardive dyskinesia risks still apply.",
        check: {
          q: "How would you describe perphenazine's side-effect profile?",
          options: ["Balanced — moderate EPS and moderate sedation", "Pure EPS, zero sedation", "Only autonomic effects, no EPS"],
          answer: "Balanced — moderate EPS and moderate sedation",
          why: "Mid-potency means it splits the difference between the extremes of the class."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: it's a piperazine phenothiazine that antagonizes D2. Practically, it's metabolized by CYP2D6, so 2D6 inhibitors (like fluoxetine or bupropion) can raise its levels."
      }
    ],
    trap: "Don't dismiss FGAs as obsolete — CATIE showed perphenazine roughly matched newer agents. Cost and side effects, not just era, drive the choice.",
    takeaway: "Perphenazine = the balanced mid-potency phenothiazine and the CATIE benchmark that showed older FGAs remain effective and cost-effective."
  },

  fluphenazine: {
    hook: "A high-potency phenothiazine defined by its depot: a shorter-interval long-acting injection for patients who can't take daily pills.",
    steps: [
      {
        title: "The big picture",
        teach: "Fluphenazine is a high-potency phenothiazine — think haloperidol-like: lots of EPS, little sedation or anticholinergic effect. Its standout feature is a long-acting injectable for maintenance."
      },
      {
        title: "What it treats",
        teach: "Its job is schizophrenia, especially long-term maintenance. Oral dosing is 2.5–10 mg/day in divided doses, but the decanoate depot is where it earns its keep."
      },
      {
        title: "The depot advantage",
        teach: "The fluphenazine decanoate depot is given deep IM every 2–3 weeks — a notably shorter interval than haloperidol decanoate's 4 weeks. It's a common choice when non-adherence keeps derailing recovery.",
        check: {
          q: "Why choose a long-acting fluphenazine depot?",
          options: ["Steady levels despite poor pill adherence", "It eliminates all EPS", "It works instantly, within minutes"],
          answer: "Steady levels despite poor pill adherence",
          why: "Depots deliver reliable drug levels for patients who struggle to take daily pills."
        }
      },
      {
        title: "What patients feel",
        teach: "As a high-potency agent, EPS dominate: akathisia, acute dystonia, parkinsonism, and restlessness or insomnia. Sedation is minimal. Hyperprolactinemia and long-term tardive dyskinesia round out the picture.",
        check: {
          q: "A patient on fluphenazine develops a sudden painful neck spasm and eyes rolling upward. What is this?",
          options: ["Acute dystonia", "Photosensitivity", "Cholestatic jaundice"],
          answer: "Acute dystonia",
          why: "Acute dystonia — a sudden sustained muscle contraction — is a classic high-potency reaction."
        }
      },
      {
        title: "How you use it",
        teach: "Keep the oral dose at the lowest effective level to limit EPS. When switching to depot, attend every scheduled injection — the whole point is steady levels — and never stop abruptly.",
        check: {
          q: "How often is the fluphenazine decanoate depot typically given?",
          options: ["Every 2–3 weeks", "Every 12 hours", "Once a year"],
          answer: "Every 2–3 weeks",
          why: "Fluphenazine decanoate runs every 2–3 weeks — shorter than haloperidol's 4."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: fluphenazine is a piperazine phenothiazine, the high-potency branch of that family, and a potent D2 antagonist — which is exactly why EPS are prominent."
      }
    ],
    trap: "Both haloperidol and fluphenazine come as decanoate depots — but haloperidol's is every 4 weeks and fluphenazine's every 2–3 weeks.",
    takeaway: "Fluphenazine = a high-potency, EPS-heavy phenothiazine whose shorter-interval decanoate depot makes it a maintenance workhorse for non-adherence."
  },

  zuclopenthixol: {
    hook: "A Canadian thioxanthene with three faces — oral, a short-acting acute injection (Acuphase), and a maintenance depot.",
    steps: [
      {
        title: "The big picture",
        teach: "Zuclopenthixol is a thioxanthene antipsychotic used in Canada and Europe (not the US). What makes it special is that it comes in THREE distinct forms for three different jobs."
      },
      {
        title: "The three forms",
        teach: "There's oral (dihydrochloride) for day-to-day dosing; the ACETATE, called Acuphase, a short-acting IM shot whose effect lasts about 72 hours for acute disturbance; and the DECANOATE depot, deep IM every 2–4 weeks for maintenance.",
        check: {
          q: "Which zuclopenthixol form is used for a few days of acute behavioural control?",
          options: ["Acetate (Acuphase)", "Decanoate depot", "Oral dihydrochloride"],
          answer: "Acetate (Acuphase)",
          why: "The acetate ester (Acuphase) gives ~72 hours of cover for acute disturbance."
        }
      },
      {
        title: "Acuphase pitfall",
        teach: "Acuphase is for ACUTE management only — a single injection bridges roughly 2–3 days while other treatment is arranged. It is NOT a long-acting maintenance depot, and confusing the two is a real prescribing error.",
        check: {
          q: "True or false: Acuphase is a monthly maintenance depot.",
          options: ["False — it's a short-acting acute injection", "True — it lasts about a month", "True — it's the oral form"],
          answer: "False — it's a short-acting acute injection",
          why: "Acuphase covers ~72 hours; the DECANOATE is the maintenance depot."
        }
      },
      {
        title: "What patients feel",
        teach: "Zuclopenthixol brings the usual EPS (akathisia, dystonia, parkinsonism) plus somewhat more sedation, orthostasis and dry mouth than a pure high-potency agent, thanks to some alpha-1 and H1 blockade. NMS and tardive dyskinesia risks apply.",
        check: {
          q: "Why is zuclopenthixol somewhat more sedating than pure high-potency agents?",
          options: ["Added alpha-1 and H1 blockade", "It doesn't touch dopamine", "It has no EPS at all"],
          answer: "Added alpha-1 and H1 blockade",
          why: "Alpha-1/H1 blockade adds sedation and orthostasis on top of the EPS."
        }
      },
      {
        title: "How you use it",
        teach: "Oral is roughly 10–50 mg/day; the acetate is 50–150 mg per acute episode, repeated no more often than every 2–3 days. For maintenance, transition to the decanoate depot and attend scheduled injections."
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: it's a thioxanthene that blocks both D1 and D2 receptors — the D2 antagonism drives the antipsychotic effect and the shared class toxicities."
      }
    ],
    trap: "Acuphase (acetate, ~72 h) versus the decanoate depot (q2–4 weeks) — same molecule, completely different roles. Never use Acuphase for maintenance.",
    takeaway: "Zuclopenthixol = a Canadian thioxanthene with three esters; the exam point is Acuphase (short-acting acute) versus the decanoate maintenance depot."
  },

  flupenthixol: {
    hook: "The other Canadian thioxanthene: oral plus a depot — and a quirky low dose that can act like an antidepressant.",
    steps: [
      {
        title: "The big picture",
        teach: "Flupenthixol is a thioxanthene used in Canada and Europe, and the sibling of zuclopenthixol. It comes as an oral form and a decanoate depot — but no Acuphase."
      },
      {
        title: "What it treats",
        teach: "Its main use is schizophrenia. Curiously, LOW-dose flupenthixol can be activating and mildly antidepressant, while higher doses (a few mg/day, up to ~12) do the antipsychotic work.",
        check: {
          q: "What's distinctive about low-dose flupenthixol?",
          options: ["It can be activating / mildly antidepressant", "It's purely sedating", "It only works as a depot"],
          answer: "It can be activating / mildly antidepressant",
          why: "The dose-dependent flip — activating low, antipsychotic high — is its signature quirk."
        }
      },
      {
        title: "How you use it",
        teach: "Oral dosing runs from ~1 mg/day (low, activating) up to a few mg for psychosis; keep it low to limit EPS. The decanoate depot is given deep IM every 2–3 weeks (up to ~4) for maintenance."
      },
      {
        title: "What patients feel",
        teach: "Expect EPS (akathisia, dystonia, parkinsonism) and, at low doses, restlessness or activation and insomnia. Sedation is mild. The usual NMS, tardive dyskinesia and hyperprolactinemia risks apply.",
        check: {
          q: "A patient on low-dose flupenthixol complains of feeling wired and can't sleep. This fits which of its known effects?",
          options: ["Activation / restlessness at low doses", "Profound sedation", "Cholestatic jaundice"],
          answer: "Activation / restlessness at low doses",
          why: "Low-dose flupenthixol is activating, which can drive restlessness and insomnia."
        }
      },
      {
        title: "Sibling check",
        teach: "Remember the pairing: zuclopenthixol adds the short-acting Acuphase, whereas flupenthixol is oral plus depot only. Both are D1/D2-blocking thioxanthenes.",
        check: {
          q: "Which thioxanthene has the short-acting acute Acuphase injection?",
          options: ["Zuclopenthixol", "Flupenthixol", "Neither — both are depot-only"],
          answer: "Zuclopenthixol",
          why: "Only zuclopenthixol offers the acetate Acuphase; flupenthixol is oral plus depot."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: flupenthixol is a thioxanthene that blocks both D1 and D2 receptors — the D2 antagonism drives the antipsychotic effect and the shared class toxicities."
      }
    ],
    trap: "Flupenthixol vs zuclopenthixol — both Canadian thioxanthene depots, but only zuclopenthixol has the acute-use Acuphase.",
    takeaway: "Flupenthixol = a Canadian thioxanthene (oral + decanoate depot) with a dose-dependent quirk: activating/antidepressant low, antipsychotic high."
  },

  pimozide: {
    hook: "The QT champion of the FGAs: a niche Tourette drug hemmed in by ECG monitoring and a long list of dangerous interactions.",
    steps: [
      {
        title: "The big picture",
        teach: "Pimozide is a diphenylbutylpiperidine antipsychotic notorious for one thing above all: it prolongs the QT interval more than its peers. That cardiac signal shapes everything about how it's used."
      },
      {
        title: "What it treats",
        teach: "Its niche is Tourette syndrome that hasn't responded to other agents. It's not a first-choice psychosis drug — the QT risk keeps it in reserve.",
        check: {
          q: "What is pimozide's main clinical niche?",
          options: ["Refractory Tourette syndrome", "First-line depression", "Acute agitation in the ER"],
          answer: "Refractory Tourette syndrome",
          why: "Pimozide is reserved for Tourette's when other agents fail."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — 1–2 mg/day, often at bedtime — and increase slowly every few days, up to ~10 mg/day, with an ECG before and during each increase. Its long half-life allows once-daily dosing."
      },
      {
        title: "The QT rule",
        teach: "Dose-dependent QT prolongation with torsades (and reported sudden death) is the headline risk, so ECG monitoring is mandatory and you must correct low potassium or magnesium. It's contraindicated with congenital long QT or other QT-prolonging drugs.",
        check: {
          q: "What monitoring is mandatory throughout pimozide treatment?",
          options: ["Serial ECGs", "Weekly liver ultrasounds", "Daily prolactin levels"],
          answer: "Serial ECGs",
          why: "Its dose-dependent QT/torsades risk makes ECG surveillance essential."
        }
      },
      {
        title: "Interaction trap",
        teach: "Pimozide is metabolized by CYP3A4, so macrolide antibiotics, azole antifungals, protease inhibitors and grapefruit juice are CONTRAINDICATED — they raise its levels and push the QT higher.",
        check: {
          q: "Which should a patient on pimozide avoid?",
          options: ["Grapefruit juice and azole antifungals", "Leafy green vegetables", "Ordinary tap water"],
          answer: "Grapefruit juice and azole antifungals",
          why: "CYP3A4 inhibitors raise pimozide levels and dangerously worsen QT prolongation."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: pimozide is a potent, selective D2 antagonist that also blocks cardiac calcium channels — which is precisely why it prolongs the QT interval."
      }
    ],
    trap: "Pimozide's danger isn't EPS — it's the QT interval and its CYP3A4 interactions. Treat any new antibiotic or antifungal as a red flag.",
    takeaway: "Pimozide = the high-QT, CYP3A4-sensitive FGA reserved for refractory Tourette's, requiring serial ECGs and a strict interaction watch."
  },

  methotrimeprazine: {
    hook: "A low-potency Canadian phenothiazine that pulls triple duty in palliative care: deeply sedating, analgesic, and antiemetic.",
    steps: [
      {
        title: "The big picture",
        teach: "Methotrimeprazine (also called levomepromazine) is a low-potency phenothiazine. Its defining feature isn't psychosis control — it's a rare combination of heavy sedation with genuine pain-relieving and anti-nausea properties."
      },
      {
        title: "What it treats",
        teach: "It's a palliative-care workhorse: given for terminal agitation, intractable nausea and pain, often subcutaneously. That three-in-one action makes it valuable at the end of life.",
        check: {
          q: "In what setting does methotrimeprazine shine?",
          options: ["Palliative care — agitation, nausea, and pain", "First-line schizophrenia in young adults", "Acute mania as monotherapy"],
          answer: "Palliative care — agitation, nausea, and pain",
          why: "Its combined sedative, antiemetic and analgesic action fits end-of-life symptom control."
        }
      },
      {
        title: "How you use it",
        teach: "In palliative care it's used at low doses (e.g., 6.25–12.5 mg) for nausea or agitation, often at bedtime or by continuous subcutaneous infusion. Titrate to symptom control while watching for oversedation and low blood pressure."
      },
      {
        title: "What patients feel",
        teach: "Profound sedation and marked orthostatic hypotension are the dose-limiting effects — patients feel very drowsy and can faint on standing. Anticholinergic effects and weight gain also occur.",
        check: {
          q: "What are the dose-limiting effects of methotrimeprazine?",
          options: ["Profound sedation and marked orthostatic hypotension", "Severe EPS and rigidity", "Insomnia and agitation"],
          answer: "Profound sedation and marked orthostatic hypotension",
          why: "As a low-potency agent, sedation and orthostasis dominate over EPS."
        }
      },
      {
        title: "Potency framing",
        teach: "Because it's low-potency, EPS are comparatively mild — the trade-off is all that sedation and orthostasis. NMS, tardive dyskinesia and QT prolongation remain possible, and rarely agranulocytosis.",
        check: {
          q: "Being low-potency, how prominent are methotrimeprazine's EPS?",
          options: ["Comparatively mild", "The most severe of any FGA", "Absent entirely"],
          answer: "Comparatively mild",
          why: "Low-potency agents have milder EPS but heavier sedation and orthostasis."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: it's a low-potency phenothiazine blocking D2 plus broad H1, muscarinic, alpha-1 and 5-HT2 receptors, with intrinsic analgesic and antiemetic activity — hence its palliative versatility."
      }
    ],
    trap: "Don't think 'antipsychotic' first — methotrimeprazine's real-world role is palliative sedation, nausea and pain, where its heavy sedation is a feature, not a bug.",
    takeaway: "Methotrimeprazine = a low-potency phenothiazine unique for combined sedative, analgesic and antiemetic use in palliative care; heavy on sedation and orthostasis, light on EPS."
  },

  trifluoperazine: {
    hook: "The phenothiazine that behaves like haloperidol: high-potency, EPS-heavy, and barely sedating.",
    steps: [
      {
        title: "The big picture",
        teach: "Trifluoperazine is a high-potency piperazine phenothiazine. Even though it's chemically a phenothiazine like chlorpromazine, its potency means it acts like haloperidol: lots of EPS, minimal sedation and anticholinergic effect.",
        check: {
          q: "In its side-effect behaviour, trifluoperazine most resembles which drug?",
          options: ["Haloperidol", "Chlorpromazine", "Clozapine"],
          answer: "Haloperidol",
          why: "As a high-potency agent it's EPS-heavy and barely sedating — haloperidol-like."
        }
      },
      {
        title: "What it treats",
        teach: "Its main use is schizophrenia, usual dosing around 15–20 mg/day. An older, low-dose use for severe anxiety exists but is now uncommon."
      },
      {
        title: "Potency over chemistry",
        teach: "Here's the key teaching point: chlorpromazine and trifluoperazine are BOTH phenothiazines, yet one is sedating (low-potency) and one is EPS-heavy (high-potency). It's the potency, not the chemical family, that predicts the side-effect pattern.",
        check: {
          q: "Trifluoperazine and chlorpromazine are both phenothiazines. Why do their side effects differ so much?",
          options: ["Potency differs — high vs low", "One isn't really an antipsychotic", "Only one blocks dopamine"],
          answer: "Potency differs — high vs low",
          why: "Potency predicts the profile: high-potency = EPS, low-potency = sedation/autonomic."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 2–5 mg PO BID and titrate to response, up to a max of ~40 mg/day. The antipsychotic effect builds over weeks, and it shouldn't be stopped abruptly."
      },
      {
        title: "What patients feel",
        teach: "Being high-potency, EPS lead the way: akathisia, dystonia, parkinsonism, plus restlessness or insomnia and hyperprolactinemia. Sedation and orthostasis are mild. NMS and tardive dyskinesia risks apply.",
        check: {
          q: "What dominates trifluoperazine's side-effect profile?",
          options: ["EPS, with little sedation", "Heavy sedation and orthostasis", "Photosensitivity above all"],
          answer: "EPS, with little sedation",
          why: "High-potency agents are EPS-predominant with minimal sedation."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: it's a piperazine phenothiazine and a potent D2 antagonist — the same high-affinity dopamine blockade that makes haloperidol so EPS-prone."
      }
    ],
    trap: "Same family as chlorpromazine, opposite behaviour: trifluoperazine is the 'phenothiazine that acts like haloperidol.'",
    takeaway: "Trifluoperazine = a high-potency piperazine phenothiazine: EPS-predominant, barely sedating — proof that potency, not chemistry, predicts the profile."
  },

  prochlorperazine: {
    hook: "The 'antiemetic' that's secretly a dopamine-blocking antipsychotic — and can throw a young patient into acute dystonia from a single dose.",
    steps: [
      {
        title: "The big picture",
        teach: "Prochlorperazine is a phenothiazine, but you'll almost always meet it as an ANTIEMETIC and anti-vertigo drug rather than an antipsychotic. Under the hood, though, it's still blocking dopamine."
      },
      {
        title: "What it treats",
        teach: "Its everyday role is nausea, vomiting and vertigo — 5–10 mg PO TID–QID, or IM, with a suppository option too. Antipsychotic dosing exists but is largely historical.",
        check: {
          q: "What is prochlorperazine mainly used for in practice?",
          options: ["Nausea, vomiting and vertigo", "First-line schizophrenia", "Long-term depot maintenance"],
          answer: "Nausea, vomiting and vertigo",
          why: "It's used chiefly as an antiemetic/anti-vertigo agent, not for psychosis."
        }
      },
      {
        title: "The dystonia trap",
        teach: "Because it blocks dopamine, an acute dystonic reaction can strike even after a single antiemetic dose — classically in young women, with sudden spasms of the neck, eyes (oculogyric crisis) or tongue. Treat it with an anticholinergic like benztropine, or diphenhydramine.",
        check: {
          q: "A young woman gets sudden neck spasm and eyes rolling up after one antiemetic dose of prochlorperazine. Best treatment?",
          options: ["Benztropine or diphenhydramine", "IV potassium", "A second dose of prochlorperazine"],
          answer: "Benztropine or diphenhydramine",
          why: "Acute dystonia responds fast to an anticholinergic or diphenhydramine."
        }
      },
      {
        title: "How you use it",
        teach: "Use it short-term at the lowest effective antiemetic dose (typically ≤40 mg/day). Warn patients about drowsiness and dizziness, and to seek care for any sudden muscle spasms."
      },
      {
        title: "The bigger reminder",
        teach: "Prochlorperazine is the poster child for a key rule: dopamine-blocking antiemetics (this and metoclopramide) carry real EPS and tardive dyskinesia risk. 'Just an antiemetic' can still cause movement disorders.",
        check: {
          q: "What broader lesson does prochlorperazine teach?",
          options: ["Antiemetic dopamine blockers carry EPS/TD risk", "Antiemetics never cause EPS", "It has no dopamine activity"],
          answer: "Antiemetic dopamine blockers carry EPS/TD risk",
          why: "Dopamine-blocking antiemetics like prochlorperazine and metoclopramide share the EPS/TD hazard."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: it's a piperazine phenothiazine that antagonizes D2 in the chemoreceptor trigger zone — that's what makes it a potent antiemetic, and also what causes the EPS."
      }
    ],
    trap: "Don't file prochlorperazine under 'harmless antiemetic' — it's a dopamine blocker that can cause acute dystonia and, with prolonged use, tardive dyskinesia.",
    takeaway: "Prochlorperazine = a phenothiazine used mainly for nausea and vertigo; the must-not-miss is acute dystonia from even a single antiemetic dose."
  },

  pipotiazine: {
    hook: "A Canadian phenothiazine that exists essentially for one job: a monthly palmitate depot for maintenance.",
    steps: [
      {
        title: "The big picture",
        teach: "Pipotiazine (Piportil L4) is a Canada-specific phenothiazine, and it's used almost exclusively as a long-acting injectable. There's no everyday oral role — it's a maintenance depot, full stop."
      },
      {
        title: "What it treats",
        teach: "Its purpose is maintenance treatment of schizophrenia in patients who benefit from a depot. Deep IM dosing is roughly every 4 weeks — a convenient monthly rhythm.",
        check: {
          q: "How is pipotiazine used?",
          options: ["A roughly monthly maintenance depot", "A short-acting acute injection", "An oral daily tablet"],
          answer: "A roughly monthly maintenance depot",
          why: "Pipotiazine is essentially a q4-week palmitate LAI for maintenance."
        }
      },
      {
        title: "Naming the esters",
        teach: "Depot antipsychotics use different chemical esters to slow release. Most FGA depots are DECANOATES (haloperidol, fluphenazine, zuclopenthixol, flupenthixol), but pipotiazine is a PALMITATE — a handy distinguishing detail.",
        check: {
          q: "Which ester does pipotiazine use?",
          options: ["Palmitate", "Decanoate", "Acetate"],
          answer: "Palmitate",
          why: "Pipotiazine is the palmitate depot, unlike the decanoate esters of the others."
        }
      },
      {
        title: "How you use it",
        teach: "Start with a small test dose (e.g., ~25–50 mg IM) and titrate the dose and interval to response, commonly up to ~200 mg per injection. Establish tolerability first — depot effects persist for weeks and can't be quickly withdrawn."
      },
      {
        title: "What patients feel",
        teach: "As a phenothiazine depot it brings the usual EPS (akathisia, dystonia, parkinsonism), some sedation, hyperprolactinemia and orthostasis, plus injection-site reactions. NMS and tardive dyskinesia risks apply. Attending every scheduled injection is the whole point."
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: it's a piperidine phenothiazine and a D2 antagonist, esterified as a palmitate so a single deep IM injection releases drug slowly over about a month."
      }
    ],
    trap: "The depot esters: decanoate (haloperidol, fluphenazine, the thioxanthenes) versus pipotiazine PALMITATE — a favourite distinguishing detail.",
    takeaway: "Pipotiazine = a Canadian phenothiazine used essentially only as a roughly monthly palmitate maintenance depot; confirm tolerability before committing."
  },

  droperidol: {
    hook: "Haloperidol's fast, short-acting butyrophenone cousin — great for agitation and PONV, but shadowed by a QT/torsades warning.",
    steps: [
      {
        title: "The big picture",
        teach: "Droperidol is a butyrophenone — essentially haloperidol's short-acting cousin. It works fast, wears off quickly (half-life ~2 h), and is given by injection in monitored settings."
      },
      {
        title: "What it treats",
        teach: "Two main jobs: rapid control of acute agitation (2.5–5 mg IM/IV) and, at much lower doses (0.625–1.25 mg IV), a potent antiemetic for postoperative nausea and vomiting (PONV).",
        check: {
          q: "At low doses (0.625–1.25 mg IV), droperidol is used for what?",
          options: ["Postoperative nausea and vomiting", "Long-term maintenance of psychosis", "Lowering cholesterol"],
          answer: "Postoperative nausea and vomiting",
          why: "Low-dose droperidol is a potent antiemetic for PONV."
        }
      },
      {
        title: "How you use it",
        teach: "Give it IM or IV and titrate with small additional doses to effect, keeping the total minimal. Its short half-life makes it easy to titrate for rapid, controllable calming."
      },
      {
        title: "The QT warning",
        teach: "Droperidol carries a boxed warning: QT prolongation and torsades — reported even at low antiemetic doses and sometimes fatal. A 12-lead ECG is recommended before use, and you should correct potassium and magnesium.",
        check: {
          q: "What is the headline safety concern with droperidol, even at antiemetic doses?",
          options: ["QT prolongation / torsades", "Cholestatic jaundice", "Photosensitivity"],
          answer: "QT prolongation / torsades",
          why: "A boxed warning covers QT/torsades reported even at low antiemetic doses."
        }
      },
      {
        title: "What patients feel",
        teach: "Expect sedation, hypotension, dizziness, and EPS such as akathisia and acute dystonia. Because use is short-term, tardive dyskinesia is uncommon — but NMS remains possible.",
        check: {
          q: "Besides QT effects, what should you watch for shortly after droperidol?",
          options: ["Sedation, hypotension and acute dystonia", "New-onset diabetes", "Blue-grey skin discoloration"],
          answer: "Sedation, hypotension and acute dystonia",
          why: "Short-term autonomic effects and acute dystonia/akathisia are the common issues."
        }
      },
      {
        title: "Why it works",
        teach: "One line of mechanism: droperidol is a butyrophenone and potent D2 antagonist, like haloperidol — the dopamine blockade drives both the antipsychotic/antiemetic effect and the EPS."
      }
    ],
    trap: "Droperidol vs haloperidol — same butyrophenone family, but droperidol is shorter-acting and carries the more prominent QT/torsades boxed warning.",
    takeaway: "Droperidol = a fast, short-acting butyrophenone for acute agitation and PONV, dominated by a QT-prolongation/torsades boxed warning."
  }
};
