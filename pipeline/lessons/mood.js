// Mood stabilizers & anticonvulsants — micro-lessons (v2, clinical-first).
// Facts grounded in ../../data/deck.json. Therapeutic levels reused verbatim from
// the deck for the three agents with true drug monitoring (lithium, valproate, carbamazepine).
export default {
  lithium: {
    hook: "The gold-standard mood stabilizer — the only psychotropic proven to cut suicide, riding a razor-thin therapeutic window.",
    steps: [
      {
        title: "The big picture",
        teach: "Meet lithium: an ion, not a receptor drug. It's the classic mood stabilizer and, uniquely, the ONLY psychotropic with robust evidence for reducing suicide. That single fact keeps it front and centre in bipolar care."
      },
      {
        title: "What it treats",
        teach: "It's first-line for bipolar I mania (acute) and for maintenance, and it's used to augment antidepressants in treatment-resistant depression. But the headline is the anti-suicide effect — no other agent matches it.",
        check: {
          q: "A patient with bipolar I has recurrent suicidal ideation. Which stabilizer has direct anti-suicide evidence?",
          options: ["Lithium", "Valproate", "Gabapentin"],
          answer: "Lithium",
          why: "Lithium is the only psychotropic with robust evidence for lowering suicide risk — a decisive reason to reach for it here."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — around 300 mg PO BID–TID — and let the serum level, not the dose, steer you. Adjust in ~300 mg steps and recheck a 12-hour trough about 5 days after each change. Most people land near 900–1200 mg/day; extended-release at bedtime can ease the polyuria."
      },
      {
        title: "The narrow window",
        teach: "This is a narrow-therapeutic-index drug. Aim for 0.6–1.2 mmol/L — maintenance ~0.6–0.8, acute mania ~0.8–1.2 — drawn as a 12-hour trough. Toxicity begins around >1.5 and is severe above 2.0. Small shifts genuinely matter.",
        check: {
          q: "What is lithium's therapeutic serum range?",
          options: ["0.6–1.2 mmol/L", "4–12 mmol/L", "50–100 mmol/L"],
          answer: "0.6–1.2 mmol/L",
          why: "0.6–1.2 mmol/L; toxicity starts around >1.5, which is why the level is watched so closely."
        }
      },
      {
        title: "What tips it toxic",
        teach: "Here's the must-not-miss: lithium is excreted UNCHANGED by the kidney — never metabolized. So anything that drops renal clearance pushes the level up: NSAIDs, thiazides, ACE inhibitors/ARBs, dehydration (vomiting, diarrhea, fever), and low sodium. Coarse tremor, slurred speech, ataxia, or confusion is toxicity until proven otherwise.",
        check: {
          q: "Which common over-the-counter drug can precipitate lithium toxicity?",
          options: ["An NSAID like ibuprofen", "Acetaminophen", "A proton-pump inhibitor"],
          answer: "An NSAID like ibuprofen",
          why: "NSAIDs (like thiazides and ACEi/ARBs) cut renal lithium clearance and raise the level."
        }
      },
      {
        title: "What patients feel",
        teach: "Day to day, expect fine tremor, polyuria and thirst, some GI upset, weight gain, a bit of cognitive dulling, and a metallic taste. The key counselling line: keep fluid and salt intake steady, and seek care with vomiting, diarrhea, or fever — dehydration is what turns a therapeutic level toxic."
      },
      {
        title: "Monitoring & the organ toll",
        teach: "Check a level ~5 days after any change, then every 3–6 months once stable, plus renal function, TSH, and calcium every 6–12 months. Chronic toxicity clusters at three organs — kidney (nephrogenic diabetes insipidus, CKD), thyroid (hypothyroidism), and parathyroid (hypercalcemia).",
        check: {
          q: "Which trio of organs does chronic lithium threaten?",
          options: ["Kidney, thyroid, parathyroid", "Liver, marrow, skin", "Heart, lungs, pancreas"],
          answer: "Kidney, thyroid, parathyroid",
          why: "Nephrogenic DI/CKD, hypothyroidism, and hypercalcemia are the classic chronic harms — hence the periodic renal, thyroid, and calcium checks."
        }
      },
      {
        title: "In pregnancy",
        teach: "First-trimester lithium is linked to Ebstein anomaly, a tricuspid-valve malformation (absolute risk lower than once taught). If it's continued, track levels closely — clearance rises in pregnancy then drops abruptly at delivery (toxicity risk) — and arrange fetal echocardiography."
      },
      {
        title: "Why it works",
        teach: "Mechanistically, lithium is a bit mysterious: it inhibits inositol monophosphatase and GSK-3β and nudges second-messenger signalling, with neuroprotective effects. You don't prescribe by mechanism here — you prescribe by the level."
      }
    ],
    trap: "Lithium's nephrogenic DI does NOT respond to desmopressin (that's central DI) — amiloride is the agent that helps.",
    takeaway: "Lithium = the anti-suicide gold standard, renally cleared with a narrow 0.6–1.2 window — guard the level and watch kidney, thyroid, parathyroid."
  },

  valproate: {
    hook: "The broad-spectrum, loadable antimanic — fast and effective for mania, but the worst teratogen of the mood stabilizers.",
    steps: [
      {
        title: "The big picture",
        teach: "Valproate (divalproex) is a broad-spectrum anticonvulsant that doubles as a powerful antimanic. Its signature move: you can LOAD it for acute mania and get a response quickly — handy when someone is floridly manic."
      },
      {
        title: "What it treats",
        teach: "It's first-line for bipolar I acute mania, and especially useful for mixed features and rapid cycling. Off-label roles include migraine prophylaxis, agitation/aggression, and schizoaffective adjunct.",
        check: {
          q: "Which presentation makes valproate an especially attractive antimanic?",
          options: ["Acute mania with mixed features or rapid cycling", "Pure bipolar depression", "Generalized anxiety"],
          answer: "Acute mania with mixed features or rapid cycling",
          why: "Valproate is broad-spectrum and can be loaded — a good fit for mania, mixed states, and rapid cycling."
        }
      },
      {
        title: "How you use it",
        teach: "Start around 250–500 mg PO BID; for acute mania you can load at ~20–30 mg/kg/day. Titrate by 250–500 mg every few days to response and level, up to 60 mg/kg/day. Extended-release divalproex allows once-daily dosing."
      },
      {
        title: "The level",
        teach: "Draw a trough and aim for 350–700 µmol/L (SI) / 50–100 µg/mL (conventional). For acute mania you sometimes push toward the upper end (up to ~125 µg/mL). Level plus clinical response guides the dose.",
        check: {
          q: "What is valproate's usual therapeutic trough range?",
          options: ["50–100 µg/mL (350–700 µmol/L)", "4–12 µg/mL", "0.6–1.2 mmol/L"],
          answer: "50–100 µg/mL (350–700 µmol/L)",
          why: "50–100 µg/mL (350–700 µmol/L); acute mania is sometimes targeted higher, up to ~125 µg/mL."
        }
      },
      {
        title: "What patients feel",
        teach: "Common, day-to-day effects: weight gain, tremor, GI upset, sedation, and some hair thinning (zinc/selenium may help). Warn about weight gain up front — it's a frequent reason people want to stop."
      },
      {
        title: "The must-not-miss: pregnancy",
        teach: "This is the highest-stakes point. Valproate is the MOST teratogenic mood stabilizer — neural-tube defects, craniofacial and cardiac malformations, and dose-dependent neurodevelopmental harm including the LOWEST childhood IQ and increased autism. Avoid it in anyone who could become pregnant; if truly unavoidable, use high-dose folate and the lowest effective dose.",
        check: {
          q: "Why is valproate generally avoided in people who can become pregnant?",
          options: ["It's the most teratogenic mood stabilizer (NTDs, lowest IQ)", "It causes weight loss", "It has no fetal risk"],
          answer: "It's the most teratogenic mood stabilizer (NTDs, lowest IQ)",
          why: "Neural-tube defects and the lowest childhood IQ make valproate the classic 'avoid if pregnancy is possible' stabilizer."
        }
      },
      {
        title: "Other serious harms",
        teach: "Watch for hepatotoxicity (boxed warning — can be fatal, usually in the first 6 months), pancreatitis, thrombocytopenia, and hyperammonemic encephalopathy — which can occur even with NORMAL liver enzymes. So check LFTs and platelets periodically, and send an ammonia level if someone gets unexplained lethargy or confusion."
      },
      {
        title: "The lamotrigine trap",
        teach: "Valproate inhibits glucuronidation and DOUBLES lamotrigine levels. Co-prescribe the two and you must halve the lamotrigine dose and titrate even more slowly — otherwise you're inviting Stevens–Johnson syndrome.",
        check: {
          q: "You add lamotrigine to a patient already on valproate. What must you do?",
          options: ["Halve the lamotrigine dose and go slower", "Double the lamotrigine dose", "Stop monitoring for rash"],
          answer: "Halve the lamotrigine dose and go slower",
          why: "Valproate doubles lamotrigine levels, sharply raising SJS risk — halve the dose and slow the titration."
        }
      },
      {
        title: "Why it works",
        teach: "In brief: valproate boosts GABAergic transmission, blocks voltage-gated sodium channels, and modulates T-type calcium channels — a broad anticonvulsant profile that translates into broad antimanic coverage."
      }
    ],
    trap: "Hyperammonemic encephalopathy can appear with entirely NORMAL LFTs — if a valproate patient turns lethargic or confused, check ammonia, not just liver enzymes.",
    takeaway: "Valproate = the broad, loadable antimanic (great for mixed/rapid cycling) — but the worst teratogen, and it doubles lamotrigine, so halve that dose."
  },

  carbamazepine: {
    hook: "The autoinducing sodium-channel blocker that lowers its own level, defeats the Pill, and carries HLA-linked SJS risk.",
    steps: [
      {
        title: "The big picture",
        teach: "Carbamazepine is an anticonvulsant with a tricyclic structure that also stabilizes mood. It's a second-line, more complex choice in bipolar — powerful but high-maintenance, so it's usually reached for after lithium and valproate."
      },
      {
        title: "What it treats",
        teach: "In psychiatry it's used off-label for acute mania and maintenance and for impulsivity/aggression; in neurology it's approved for trigeminal neuralgia. Note it doesn't carry a CANMAT first-line bipolar spot — it's a reserved agent.",
        check: {
          q: "Where does carbamazepine typically sit in bipolar treatment?",
          options: ["A reserved, off-label option (not first-line)", "First-line for every bipolar patient", "Only for bipolar depression"],
          answer: "A reserved, off-label option (not first-line)",
          why: "It's an off-label, more complex choice — generally after lithium/valproate rather than first-line."
        }
      },
      {
        title: "How you use it",
        teach: "Start 200 mg PO BID and increase by ~200 mg/day weekly toward response, up to ~1600 mg/day. Crucially, PLAN to re-titrate: the drug speeds up its own metabolism over the first weeks, so the level you set early will drift down."
      },
      {
        title: "Autoinduction",
        teach: "That self-lowering is autoinduction — carbamazepine induces the enzymes that clear it, so levels fall over the first 2–4 weeks. Target 17–51 µmol/L (SI) / 4–12 µg/mL (conventional), and recheck the level at about a month once autoinduction has settled.",
        check: {
          q: "Why must you recheck the carbamazepine level at ~2–4 weeks?",
          options: ["Autoinduction lowers its own level over time", "The level always rises", "It has no measurable level"],
          answer: "Autoinduction lowers its own level over time",
          why: "Carbamazepine induces its own metabolism, so an early therapeutic level can drift subtherapeutic within weeks."
        }
      },
      {
        title: "The must-not-miss: SJS",
        teach: "The boxed warning is serious skin reactions — Stevens–Johnson syndrome and TEN. The risk is strongly tied to HLA-B*1502, found almost exclusively in people of Asian (especially Han Chinese/Southeast Asian) ancestry. Screen for that allele before starting in at-risk patients; HLA-A*3101 flags DRESS risk.",
        check: {
          q: "Before starting carbamazepine in a patient of Han Chinese ancestry, what should you check?",
          options: ["HLA-B*1502 genotype", "Serum lithium level", "Body-mass index"],
          answer: "HLA-B*1502 genotype",
          why: "HLA-B*1502 strongly predicts SJS/TEN and should be screened in at-risk ancestry before starting."
        }
      },
      {
        title: "Other serious harms",
        teach: "Beyond the skin, carbamazepine can cause agranulocytosis/aplastic anemia, hyponatremia/SIADH, hepatotoxicity, and DRESS. So monitor CBC, LFTs, and sodium periodically — and sooner if fever, sore throat, rash, or lethargy appears."
      },
      {
        title: "The enzyme-inducer trap",
        teach: "It's a potent CYP3A4 inducer, so it drags down co-prescribed drugs — a classic cause of oral-contraceptive failure and subtherapeutic warfarin. Add its own teratogenicity (neural-tube defects) and you must counsel carefully on reliable, non-hormonal contraception.",
        check: {
          q: "A woman on carbamazepine relies on the oral contraceptive pill. What's the concern?",
          options: ["Induction can cause contraceptive failure", "It makes the Pill more effective", "No interaction exists"],
          answer: "Induction can cause contraceptive failure",
          why: "Carbamazepine is a potent 3A4 inducer — it lowers OCP levels and can cause failure, so backup contraception is essential."
        }
      },
      {
        title: "What patients feel",
        teach: "Common effects are dizziness, ataxia, diplopia, sedation, and nausea, plus hyponatremia. Give one clear safety line: report fever, sore throat, mouth ulcers, easy bruising, or ANY rash immediately — those flag the marrow and skin emergencies."
      },
      {
        title: "Why it works",
        teach: "Mechanistically it blocks voltage-gated sodium channels in a use-dependent way, calming hyperexcitable neurons. Its tricyclic backbone explains two quirks: a 14-day separation from MAOIs and TCA-like sodium-channel cardiotoxicity in overdose."
      }
    ],
    trap: "Oxcarbazepine and carbamazepine cross-react — about a quarter of carbamazepine-allergic patients will also react, and both carry HLA-B*1502-linked SJS risk.",
    takeaway: "Carbamazepine = the autoinducing Na-channel blocker — recheck the level at ~1 month, screen HLA-B*1502 for SJS, and remember it defeats the Pill."
  },

  lamotrigine: {
    hook: "The bipolar-depression and maintenance stabilizer — kind in pregnancy, but it demands a slow titration to dodge SJS.",
    steps: [
      {
        title: "The big picture",
        teach: "Lamotrigine is the mood stabilizer for the DOWN side of bipolar. It shines in bipolar depression and maintenance — and here's the catch that defines it: it does NOT treat acute mania. Wrong tool for a manic patient."
      },
      {
        title: "What it treats",
        teach: "It's CANMAT first-line for bipolar maintenance aimed at preventing depression, and it's a go-to for bipolar depression. Off-label, it's used in treatment-resistant depression and for borderline mood instability.",
        check: {
          q: "Which patient is lamotrigine best suited for?",
          options: ["Bipolar depression / maintenance", "Acute mania", "Alcohol withdrawal"],
          answer: "Bipolar depression / maintenance",
          why: "Lamotrigine prevents and treats the depressive pole — it's not effective for acute mania."
        }
      },
      {
        title: "How you use it",
        teach: "Go SLOW. Monotherapy: 25 mg daily for 2 weeks, then 50 mg daily for 2 weeks, then increase by ~50 mg weekly toward 200 mg/day. On valproate, halve every step; with inducers, go higher. And if doses are missed for more than 5 days, restart the whole titration from scratch."
      },
      {
        title: "Why so slow: SJS",
        teach: "The slow ramp isn't fussiness — it exists to prevent Stevens–Johnson syndrome and TEN, the boxed warning. Front-loading is what triggers the dangerous rash, so never speed it up. Report ANY rash, especially with fever, mucosal involvement, or swelling.",
        check: {
          q: "Why is lamotrigine titrated so slowly?",
          options: ["To prevent Stevens–Johnson syndrome", "To reach the therapeutic level faster", "To improve taste"],
          answer: "To prevent Stevens–Johnson syndrome",
          why: "Rapid titration is the key driver of SJS/TEN — the slow schedule is a safety measure, not a preference."
        }
      },
      {
        title: "The valproate interaction",
        teach: "Interactions run in opposite directions. Valproate DOUBLES lamotrigine levels (halve the dose and slow down further), while carbamazepine and estrogen-containing contraceptives LOWER them. Always check what else the patient is on before you titrate.",
        check: {
          q: "How does valproate affect lamotrigine dosing?",
          options: ["It doubles the level — halve the dose", "It halves the level — double the dose", "No interaction"],
          answer: "It doubles the level — halve the dose",
          why: "Valproate inhibits glucuronidation and doubles lamotrigine — halve the dose to limit SJS risk."
        }
      },
      {
        title: "What patients feel",
        teach: "It's generally well tolerated — headache, dizziness, a benign rash, nausea, and sometimes insomnia. There's no routine bloodwork or serum level to follow; the real counselling energy goes into the titration schedule and rash awareness."
      },
      {
        title: "In pregnancy",
        teach: "Good news here: lamotrigine is comparatively pregnancy-SAFER, with no consistent major teratogenic signal — often a preferred maintenance stabilizer in pregnancy. Just know that levels fall markedly during pregnancy (you may need to increase the dose) and must be reduced again postpartum.",
        check: {
          q: "What happens to lamotrigine levels during pregnancy?",
          options: ["They fall markedly — may need a dose increase", "They rise sharply", "They stay perfectly stable"],
          answer: "They fall markedly — may need a dose increase",
          why: "Clearance rises in pregnancy so levels drop — increase antenatally, then reduce postpartum to avoid toxicity."
        }
      },
      {
        title: "Why it works",
        teach: "In one line: lamotrigine blocks voltage-gated sodium channels and dials down presynaptic glutamate release, stabilizing overexcited neurons — a mechanism that fits its calming, anti-depressive profile."
      }
    ],
    trap: "Lamotrigine is for the depressive pole and maintenance — reaching for it to abort an acute manic episode is a classic mistake.",
    takeaway: "Lamotrigine = the bipolar-depression/maintenance stabilizer — titrate slowly to avoid SJS, halve it with valproate, and lean on it in pregnancy."
  },

  oxcarbazepine: {
    hook: "Carbamazepine's better-tolerated cousin — fewer blood dyscrasias, but more hyponatremia and weaker mood evidence.",
    steps: [
      {
        title: "The big picture",
        teach: "Oxcarbazepine is the keto-analog of carbamazepine — a prodrug rapidly converted to its active MHD (licarbazepine) form. Think 'carbamazepine, smoothed out': fewer of the marrow headaches, but a weaker mood-stabilizer track record."
      },
      {
        title: "What it treats",
        teach: "It's used off-label for bipolar disorder, but the evidence is weaker than for carbamazepine, so it's not first-line. Other off-label uses are trigeminal neuralgia and impulsivity/aggression.",
        check: {
          q: "How does oxcarbazepine's bipolar evidence compare with carbamazepine's?",
          options: ["Weaker — it's off-label, not first-line", "Stronger and first-line", "Identical and approved"],
          answer: "Weaker — it's off-label, not first-line",
          why: "Its mood-stabilizer evidence is weaker than carbamazepine's, so it's a reserved off-label option."
        }
      },
      {
        title: "How you use it",
        teach: "Start 300 mg PO BID and increase by ~300–600 mg/day weekly, up to ~1200–2400 mg/day. The upside versus carbamazepine: less autoinduction and a lighter interaction burden, so dosing is more predictable."
      },
      {
        title: "The must-not-miss: hyponatremia",
        teach: "Its signature safety issue is low sodium — hyponatremia is MORE common than with carbamazepine. Check sodium, especially in the first three months and in the elderly or those on diuretics, and watch for headache, nausea, confusion, or new unsteadiness.",
        check: {
          q: "Which adverse effect is MORE common with oxcarbazepine than carbamazepine?",
          options: ["Hyponatremia", "Agranulocytosis", "Weight loss"],
          answer: "Hyponatremia",
          why: "Oxcarbazepine causes hyponatremia more often — check sodium early and in higher-risk patients."
        }
      },
      {
        title: "Versus carbamazepine",
        teach: "Because there's no active epoxide metabolite, it's better tolerated and needs far less hematologic monitoring. But two cautions carry over: HLA-B*1502-linked SJS risk remains, and about a quarter of carbamazepine-allergic patients cross-react.",
        check: {
          q: "A patient had a rash reaction to carbamazepine. What's the concern with oxcarbazepine?",
          options: ["Roughly a quarter cross-react", "There is zero cross-reactivity", "It is always safe to substitute"],
          answer: "Roughly a quarter cross-react",
          why: "About 25% of carbamazepine-allergic patients cross-react, and SJS risk (HLA-B*1502) still applies."
        }
      },
      {
        title: "Why it works",
        teach: "Like carbamazepine, it blocks voltage-gated sodium channels — but as a prodrug reduced to the active MHD, it skips the troublesome epoxide, which is exactly why it's easier on the marrow."
      }
    ],
    trap: "Its main safety trade-off vs carbamazepine flips the script: less marrow toxicity, but MORE hyponatremia — check the sodium, not just the CBC.",
    takeaway: "Oxcarbazepine = a gentler carbamazepine cousin — easier on the marrow, but weaker mood evidence and more hyponatremia, so watch the sodium."
  },

  gabapentin: {
    hook: "Not a mood stabilizer — a clean, renally cleared α2δ ligand used as an adjunct for anxiety, sleep, and pain.",
    steps: [
      {
        title: "The big picture",
        teach: "Here's the myth-buster: despite living on the anticonvulsant shelf, gabapentin is NOT a primary mood stabilizer. Bipolar RCTs were negative. It's an adjunct — useful, but not the drug that controls the mood illness."
      },
      {
        title: "What it really treats",
        teach: "Its real jobs are adjunctive: generalized/anxiety symptoms, insomnia, alcohol use disorder, and (an approved neurology use) neuropathic pain. Reach for it to smooth the edges, not to stabilize bipolar mood.",
        check: {
          q: "Which role does gabapentin actually fill in psychiatry?",
          options: ["Adjunct for anxiety, sleep, or pain", "First-line bipolar mood stabilizer", "Antimanic loading agent"],
          answer: "Adjunct for anxiety, sleep, or pain",
          why: "Bipolar trials were negative — gabapentin is an adjunct for anxiety, sleep, and pain, not a mood stabilizer."
        }
      },
      {
        title: "How you use it",
        teach: "Start around 300 mg (often 300 mg at bedtime on day 1) and titrate to 300 mg TID over days, up to ~3600 mg/day. It's dosed TID because of its short half-life, and it should be separated from antacids by a couple of hours."
      },
      {
        title: "The must-not-miss: misuse & breathing",
        teach: "Two safety flags: gabapentin has recognized misuse and dependence potential (increasingly monitored), and it can cause respiratory depression when combined with opioids or other CNS depressants. Don't stop it abruptly — taper it.",
        check: {
          q: "What's the key danger when gabapentin is combined with opioids?",
          options: ["Respiratory depression", "Serotonin syndrome", "Hypertensive crisis"],
          answer: "Respiratory depression",
          why: "Gabapentin plus opioids/CNS depressants can cause respiratory depression — a genuine safety concern given its misuse potential."
        }
      },
      {
        title: "Clean interactions",
        teach: "One real strength: gabapentin is renally excreted with NO CYP metabolism, so its interaction profile is clean — handy amid polypharmacy. The flip side is that dosing must be adjusted for renal function, so keep an eye on the kidneys.",
        check: {
          q: "Why is gabapentin useful when a patient is on many CYP-interacting drugs?",
          options: ["It's renally cleared with no CYP metabolism", "It's a potent 3A4 inducer", "It's metabolized only by 2D6"],
          answer: "It's renally cleared with no CYP metabolism",
          why: "No CYP metabolism means a clean interaction profile — but dose it for renal function."
        }
      },
      {
        title: "Why it works",
        teach: "The name is misleading: gabapentin does NOT act at GABA receptors. It binds the α2δ subunit of voltage-gated calcium channels, cutting excitatory neurotransmitter release — the same mechanism it shares with pregabalin."
      }
    ],
    trap: "The name says GABA, but gabapentin has NO GABA-receptor activity — and it is not a bipolar mood stabilizer despite sitting among the anticonvulsants.",
    takeaway: "Gabapentin = a renally cleared α2δ ligand with clean interactions — an anxiety/sleep/pain adjunct, explicitly NOT a bipolar mood stabilizer."
  },

  pregabalin: {
    hook: "The α2δ ligand with real anti-anxiety power (GAD-approved in Europe) — an anxiolytic, not a bipolar mood stabilizer.",
    steps: [
      {
        title: "The big picture",
        teach: "Pregabalin is gabapentin's more potent sibling — and, like gabapentin, it's NOT a bipolar mood stabilizer. Its claim to fame is genuine anti-anxiety efficacy, with GAD approval in Europe and a faster onset than SSRIs."
      },
      {
        title: "What it really treats",
        teach: "Its true role is as an anxiolytic: generalized anxiety disorder (approved in Europe, off-label elsewhere) and as an insomnia adjunct. Think of it as an anxiety drug, not a mood-stabilizing one.",
        check: {
          q: "What is pregabalin's genuine therapeutic strength?",
          options: ["Anti-anxiety (GAD) efficacy", "Aborting acute mania", "Preventing bipolar depression"],
          answer: "Anti-anxiety (GAD) efficacy",
          why: "Pregabalin has real anti-anxiety efficacy with GAD approval in Europe — it's an anxiolytic, not a mood stabilizer."
        }
      },
      {
        title: "How you use it",
        teach: "Start 75 mg PO BID (or 150 mg/day divided), step up to 150 mg BID within a week, and go up to 300 mg BID as needed, capped at 600 mg/day. It's BID given the short half-life — and it's more potent than gabapentin with more reliable, linear absorption."
      },
      {
        title: "The must-not-miss: misuse & breathing",
        teach: "Same cautions as gabapentin, arguably sharper: recognized misuse and dependence potential (scheduled/controlled in several places) and respiratory depression with opioids or CNS depressants. Taper rather than stop abruptly, and watch for angioedema (facial/lip swelling, trouble breathing).",
        check: {
          q: "What should patients avoid combining with pregabalin without medical advice?",
          options: ["Opioids and other CNS depressants", "Vitamin C", "Dietary fibre"],
          answer: "Opioids and other CNS depressants",
          why: "Combining with opioids/CNS depressants risks respiratory depression — a real concern given misuse potential."
        }
      },
      {
        title: "Clean & predictable",
        teach: "Like gabapentin, pregabalin is renally excreted with NO CYP metabolism — but with LINEAR kinetics, so its absorption and interactions are especially predictable. Dose it for renal function and monitor edema and weight.",
        check: {
          q: "What makes pregabalin's dosing more predictable than gabapentin's?",
          options: ["Linear kinetics with renal clearance", "Extensive CYP3A4 metabolism", "Erratic saturable absorption"],
          answer: "Linear kinetics with renal clearance",
          why: "Pregabalin has linear kinetics and renal clearance — cleaner and more predictable than gabapentin's saturable absorption."
        }
      },
      {
        title: "Why it works",
        teach: "Mechanistically it's gabapentin's cousin: it binds the α2δ subunit of voltage-gated calcium channels to reduce excitatory neurotransmitter release — just more potent, with linear kinetics."
      }
    ],
    trap: "Real anti-anxiety efficacy can tempt you to treat it like a bipolar agent — but pregabalin is an anxiolytic, NOT a mood stabilizer.",
    takeaway: "Pregabalin = a potent, linear-kinetic α2δ anxiolytic (GAD-approved in Europe) — clean renal clearance, but misuse potential and no mood-stabilizing role."
  },

  topiramate: {
    hook: "Not a mood stabilizer — the weight-LOSS, carbonic-anhydrase-inhibiting agent (stones, acidosis, glaucoma, 'dopamax').",
    steps: [
      {
        title: "The big picture",
        teach: "Topiramate is the anticonvulsant that isn't really a mood stabilizer. Its real value in psychiatry is elsewhere: mitigating drug-induced weight gain, migraine prophylaxis (an approved use), and off-label alcohol use disorder and binge-eating disorder."
      },
      {
        title: "What it really treats",
        teach: "Reach for it to offset the weight gain of other psychotropics, for migraine prevention, or for alcohol/binge-eating disorder — not to stabilize bipolar mood, where it doesn't perform.",
        check: {
          q: "Why might you add topiramate to a patient gaining weight on other psychotropics?",
          options: ["It tends to cause weight loss", "It's a first-line mood stabilizer", "It boosts appetite"],
          answer: "It tends to cause weight loss",
          why: "Topiramate is the weight-LOSS anticonvulsant — used to offset drug-induced weight gain, not to stabilize mood."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — 25–50 mg/day — and titrate slowly by ~25–50 mg per week, dosed BID, up to ~400 mg/day. The slow ramp isn't optional: it's what keeps the cognitive and CNS side effects tolerable."
      },
      {
        title: "What patients feel",
        teach: "The classic cluster: weight LOSS, cognitive slowing and word-finding difficulty (the nickname 'dopamax'), paresthesias, taste changes (carbonated drinks taste flat), and reduced appetite. Warn patients about the mental fog especially.",
        check: {
          q: "Which side effect earned topiramate the nickname 'dopamax'?",
          options: ["Cognitive slowing / word-finding difficulty", "Weight gain", "Insomnia"],
          answer: "Cognitive slowing / word-finding difficulty",
          why: "'Dopamax' refers to topiramate's cognitive dulling and word-finding trouble."
        }
      },
      {
        title: "The must-not-miss: the CA cluster",
        teach: "Its carbonic-anhydrase inhibition drives a linked set of serious harms: non-anion-gap metabolic acidosis, calcium-phosphate kidney stones, and — idiosyncratically, usually in the first month — acute angle-closure glaucoma. Push fluids, consider a bicarbonate check, and treat sudden eye pain or blurred vision as an emergency.",
        check: {
          q: "A patient on topiramate develops sudden eye pain and blurred vision. What's the worry?",
          options: ["Acute angle-closure glaucoma", "A migraine aura", "Dry-eye syndrome"],
          answer: "Acute angle-closure glaucoma",
          why: "Topiramate can cause idiosyncratic acute angle-closure glaucoma, usually in the first month — an ophthalmologic emergency."
        }
      },
      {
        title: "Pregnancy & the Pill",
        teach: "Two counselling points: topiramate is a teratogen (oral clefts, reduced fetal growth), and at higher doses it reduces oral-contraceptive efficacy. So anyone who could become pregnant needs reliable, backed-up contraception."
      },
      {
        title: "Why it works",
        teach: "It's a multitasker — blocking sodium channels, potentiating GABA-A, antagonizing AMPA/kainate glutamate receptors, and weakly inhibiting carbonic anhydrase. That last action is the thread tying together the stones, acidosis, and glaucoma."
      }
    ],
    trap: "Unlike lithium and valproate (weight GAIN), topiramate causes weight LOSS — which is exactly why it's used to offset the others' metabolic toll.",
    takeaway: "Topiramate = the weight-LOSS, carbonic-anhydrase inhibitor — think stones, acidosis, glaucoma, and 'dopamax'; a migraine/AUD tool, not a mood stabilizer."
  }
};
