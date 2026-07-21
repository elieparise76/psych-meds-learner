// Second-generation (atypical) antipsychotics — v2 clinical-first lessons (narrated by Neuro).
// Clinical framing first: what each drug is FOR (schizophrenia, bipolar mania/depression, MDD
// adjunct, low-dose quetiapine for sleep off-label) and how you actually use it. The dominant
// class harm is METABOLIC SYNDROME (olanzapine & clozapine worst; ziprasidone/lurasidone/
// aripiprazole/cariprazine favourable) → every SGA needs baseline + ongoing metabolic monitoring
// (weight/BMI, waist, BP, fasting glucose/HbA1c, lipids). LAIs support adherence; food-effect
// quirks matter (ziprasidone/lurasidone with food; asenapine sublingual). Clozapine gets the long
// treatment. Mechanism is one brief flavour step per drug. All facts grounded in data/deck.json.
export default {
  risperidone: {
    hook: "The everyday workhorse SGA — but the most D2-potent one, so it carries the most EPS and the most prolactin of the atypicals.",
    steps: [
      {
        title: "The big picture",
        teach: "Risperidone is one of the most-used second-generation antipsychotics — a reliable, effective all-rounder for psychosis and mania. The catch: it's the most D2-potent atypical, so at higher doses it starts behaving like an old-school high-potency antipsychotic."
      },
      {
        title: "What it treats",
        teach: "In Canada it's approved for schizophrenia, acute bipolar I mania (a CANMAT first-line for mania), and irritability/aggression in autistic children. It also shows up off-label as augmentation in resistant OCD or depression.",
        check: {
          q: "For which acute presentation is risperidone a CANMAT first-line choice?",
          options: ["Bipolar I mania", "Bipolar depression", "Panic disorder"],
          answer: "Bipolar I mania",
          why: "Risperidone is first-line for acute bipolar I mania in the CANMAT/ISBD guidelines."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — 1–2 mg/day (0.5 mg BID in the elderly or renal/hepatic patients) — and step up by 1–2 mg toward a usual target of 4–6 mg. The 8 mg/day ceiling exists on paper, but above ~6 mg you mostly just buy more EPS. There's also a long-acting injectable, Consta."
      },
      {
        title: "What patients feel",
        teach: "Because of that D2 potency, its signature is dose-dependent EPS and hyperprolactinemia — galactorrhea, missed periods, gynecomastia, sexual dysfunction. Metabolic risk is intermediate (still monitor), plus some sedation and orthostasis.",
        check: {
          q: "Which side-effect pair is risperidone most known for among the SGAs?",
          options: ["Hyperprolactinemia + dose-dependent EPS", "Agranulocytosis + myocarditis", "Weight-neutrality + low prolactin"],
          answer: "Hyperprolactinemia + dose-dependent EPS",
          why: "As the most D2-potent SGA, it leads the class for prolactin elevation and EPS."
        }
      },
      {
        title: "Don't miss this",
        teach: "Prolactin symptoms are the classic thing patients won't volunteer — ask directly about breast milk, missed periods, and sexual side effects. And like every SGA, run the metabolic panel: weight/waist, BP, fasting glucose, lipids at baseline and follow-up.",
        check: {
          q: "A woman on risperidone reports galactorrhea and amenorrhea. Most likely cause?",
          options: ["Hyperprolactinemia from D2 blockade", "Agranulocytosis", "QT prolongation"],
          answer: "Hyperprolactinemia from D2 blockade",
          why: "D2 blockade in the tuberoinfundibular pathway raises prolactin — risperidone's signature."
        }
      },
      {
        title: "A note on the LAI",
        teach: "One quirk worth knowing: the Consta long-acting injectable is the exception among LAIs — it needs a 3-week overlap with the oral form before the depot 'kicks in', because the microspheres release late. Don't stop the pills too early."
      },
      {
        title: "The mechanism, briefly",
        teach: "Under the hood it's a combined 5-HT2A/D2 antagonist — and the most D2-potent of the SGAs. That single fact explains its whole personality: good efficacy, but the EPS and prolactin of a high-potency agent."
      }
    ],
    trap: "Risperidone vs paliperidone: paliperidone IS risperidone's active 9-hydroxy metabolite — same pharmacology, but renally cleared with far fewer CYP interactions.",
    takeaway: "Risperidone = the most D2-potent SGA → most EPS + most prolactin; intermediate metabolic risk; and its own metabolite is a marketed drug (paliperidone)."
  },

  paliperidone: {
    hook: "Risperidone's active metabolite, sold in its own right — renally cleared, few CYP interactions, and the king of long-acting injectables.",
    steps: [
      {
        title: "The big picture",
        teach: "Paliperidone is literally 9-hydroxyrisperidone — the active metabolite of risperidone, marketed on its own. So its effects mirror risperidone (EPS, prolactin), but its handling is different: renal, not hepatic."
      },
      {
        title: "What it treats",
        teach: "It's approved for schizophrenia and schizoaffective disorder. Its real claim to fame is maintenance and adherence, thanks to an unusually rich menu of long-acting injectables.",
        check: {
          q: "Beyond schizophrenia, paliperidone carries a specific approval for which condition?",
          options: ["Schizoaffective disorder", "OCD", "Generalized anxiety disorder"],
          answer: "Schizoaffective disorder",
          why: "Paliperidone is approved for both schizophrenia and schizoaffective disorder."
        }
      },
      {
        title: "How you use it",
        teach: "The oral extended-release form is refreshingly simple: 6 mg once each morning, no initial titration, adjust in 3 mg steps (range 3–12 mg). It uses an OROS delivery shell — patients sometimes see the empty 'ghost tablet' in the stool, which is normal."
      },
      {
        title: "Renal, not hepatic",
        teach: "Because it's excreted largely unchanged by the kidneys, it has minimal CYP drug interactions — handy in polypharmacy or liver disease. The flip side: you MUST dose-reduce for reduced renal function.",
        check: {
          q: "Why must you check renal function before dosing paliperidone?",
          options: ["It's renally cleared, so the dose depends on kidney function", "It's hepatotoxic", "It requires ANC monitoring"],
          answer: "It's renally cleared, so the dose depends on kidney function",
          why: "Paliperidone is excreted largely unchanged renally — impaired clearance needs a lower dose."
        }
      },
      {
        title: "What patients feel",
        teach: "Expect the risperidone-family effects: dose-dependent EPS/akathisia, hyperprolactinemia, some sedation, orthostasis, and moderate weight gain. Run the same metabolic monitoring as any SGA, and ask about prolactin symptoms."
      },
      {
        title: "The adherence angle",
        teach: "This is where paliperidone shines: the LAIs. Sustenna is monthly, and Trinza covers a full three months per injection — powerful tools when non-adherence keeps driving relapse.",
        check: {
          q: "What makes paliperidone LAIs especially useful clinically?",
          options: ["Long dosing intervals (monthly, or every 3 months) aid adherence", "They eliminate all metabolic risk", "They work without any oral overlap ever"],
          answer: "Long dosing intervals (monthly, or every 3 months) aid adherence",
          why: "Sustenna (monthly) and Trinza (every 3 months) are major adherence tools."
        }
      }
    ],
    trap: "Paliperidone IS risperidone's active metabolite — same effects, but renally cleared (dose for kidneys, few CYP interactions), whereas risperidone is CYP2D6-metabolized.",
    takeaway: "Paliperidone = renally-cleared risperidone metabolite: simple once-daily oral, minimal CYP interactions but renal dose adjustment, and the best LAI options for adherence."
  },

  olanzapine: {
    hook: "One of the most effective and sedating SGAs — and, with clozapine, one of the two worst for weight and metabolic damage.",
    steps: [
      {
        title: "The big picture",
        teach: "Olanzapine is a heavy hitter: highly effective, calming, and very sedating. But that efficacy comes at a metabolic price — it sits with clozapine at the top of the class for weight gain, diabetes, and dyslipidemia."
      },
      {
        title: "What it treats",
        teach: "Approved for schizophrenia, bipolar I mania (both acute AND maintenance), and there's an IM form for acute agitation. Off-label, it's combined with fluoxetine for bipolar/treatment-resistant depression, and used as an appetite stimulant or antiemetic.",
        check: {
          q: "Olanzapine plus which antidepressant is a recognized combo for treatment-resistant/bipolar depression?",
          options: ["Fluoxetine", "Bupropion", "Phenelzine"],
          answer: "Fluoxetine",
          why: "The olanzapine–fluoxetine combination (marketed as Symbyax) is used for bipolar/resistant depression."
        }
      },
      {
        title: "How you use it",
        teach: "Start 5–10 mg once daily, usually at bedtime because it's so sedating, and titrate by 5 mg weekly toward 10–20 mg. Twenty mg/day is the labelled ceiling."
      },
      {
        title: "What patients feel",
        teach: "The day-to-day experience is increased appetite, real weight gain, sedation, dry mouth and constipation. Counsel patients up front that appetite and weight will climb — diet, exercise and monitoring matter from day one.",
        check: {
          q: "What should you warn a patient starting olanzapine to expect?",
          options: ["Increased appetite and weight gain", "Loss of appetite and weight loss", "Severe tremor within hours"],
          answer: "Increased appetite and weight gain",
          why: "Marked appetite and weight gain are hallmark, and worth pre-empting with counselling."
        }
      },
      {
        title: "Don't miss this",
        teach: "The must-not-miss is metabolic: olanzapine can trigger new-onset diabetes and even DKA, plus significant dyslipidemia. Check weight often early on, and fasting glucose and lipids at ~12 weeks then annually — sooner if weight is climbing.",
        check: {
          q: "Which serious metabolic emergency is olanzapine specifically associated with?",
          options: ["Diabetic ketoacidosis / new-onset diabetes", "Agranulocytosis", "Serotonin syndrome"],
          answer: "Diabetic ketoacidosis / new-onset diabetes",
          why: "Olanzapine can precipitate hyperglycemia, new-onset diabetes, and DKA — a high-metabolic-risk agent."
        }
      },
      {
        title: "Two safety traps",
        teach: "Two practical gotchas: don't give IM olanzapine together with a parenteral benzodiazepine — the combination has caused cardiorespiratory depression. And remember smoking induces CYP1A2, so starting or stopping smoking shifts olanzapine levels."
      },
      {
        title: "The mechanism, briefly",
        teach: "It's a 5-HT2A/D2 antagonist with broad extra blockade — H1 (hence the sedation and appetite), muscarinic (dry mouth, constipation), 5-HT2C and α1. Low EPS and low prolactin, but that receptor promiscuity is exactly why it's so metabolically unfriendly."
      }
    ],
    trap: "Don't confuse olanzapine with quetiapine — both are sedating, low-EPS SGAs, but olanzapine is far worse metabolically, while quetiapine adds cataract/lens monitoring and broad bipolar-depression use.",
    takeaway: "Olanzapine = highly effective, very sedating, low EPS/prolactin — but among the WORST metabolically (weight, diabetes/DKA, lipids); watch the IM-benzo and smoking interactions."
  },

  quetiapine: {
    hook: "The dose-defined chameleon: sedative low, antidepressant mid, antipsychotic high — and the lowest EPS and prolactin of the group.",
    steps: [
      {
        title: "The big picture",
        teach: "Quetiapine is the SGA whose personality changes with the dose. It's very sedating, has the loosest grip on the D2 receptor, and therefore the LOWEST EPS and prolactin of these agents — which is exactly why it's a favourite in patients prone to movement side effects."
      },
      {
        title: "What it treats",
        teach: "It has unusually broad approvals: schizophrenia, bipolar mania, bipolar DEPRESSION, bipolar maintenance, and (as XR) adjunctive treatment of major depression. For bipolar depression it's a CANMAT first-line — a real strength, since bipolar depression is hard to treat.",
        check: {
          q: "Quetiapine stands out among SGAs for being a CANMAT first-line in which hard-to-treat state?",
          options: ["Bipolar depression", "Treatment-resistant schizophrenia", "OCD"],
          answer: "Bipolar depression",
          why: "Quetiapine is a first-line agent for acute bipolar depression in the CANMAT/ISBD guidelines."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Its loose D2 binding makes it the go-to antipsychotic when EPS is the enemy — classically in Parkinson disease psychosis, where you can't afford to worsen the movement disorder.",
        check: {
          q: "Why is quetiapine preferred for psychosis in Parkinson disease?",
          options: ["Its loose D2 binding gives very low EPS", "It has the strongest D2 blockade", "It raises prolactin the most"],
          answer: "Its loose D2 binding gives very low EPS",
          why: "Low, transient D2 occupancy means minimal EPS — crucial in a patient with parkinsonism."
        }
      },
      {
        title: "How you use it",
        teach: "Think in tiers: low doses (25–50 mg) are sedating, mid doses (~300 mg) are antidepressant, higher doses (up to 800 mg) are antipsychotic. IR is divided BID; XR is once at bedtime. Titrate up gently to limit orthostasis, and give the XR without a heavy fatty meal."
      },
      {
        title: "The off-label sleep trap",
        teach: "You'll see low-dose quetiapine (25–50 mg) prescribed for insomnia — but this is off-label and generally discouraged. You expose the patient to weight gain, orthostasis and metabolic risk for a sleep effect that safer options can provide."
      },
      {
        title: "Don't miss this",
        teach: "Two monitoring points: the usual SGA metabolic panel (moderate risk here), and a quetiapine-specific one — the label advises periodic lens (slit-lamp) exams for cataracts. Also counsel on the marked sedation and orthostasis.",
        check: {
          q: "Which monitoring is uniquely emphasized on quetiapine's label?",
          options: ["Periodic eye (lens/cataract) examination", "Weekly white cell counts", "Serum lithium levels"],
          answer: "Periodic eye (lens/cataract) examination",
          why: "Quetiapine's label recommends periodic lens/cataract examination — a classic pearl."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "It's a 5-HT2A/D2 antagonist that only loosely, transiently occupies D2 — hence low EPS. Its active metabolite norquetiapine blocks norepinephrine reuptake, which is the neat explanation for why the mid-range dose acts like an antidepressant."
      }
    ],
    trap: "Don't confuse quetiapine with olanzapine — both are sedating and low-EPS, but quetiapine has the loosest D2 grip (Parkinson-friendly), broad bipolar-depression use, and cataract monitoring.",
    takeaway: "Quetiapine = dose-dependent identity (sedative → antidepressant → antipsychotic), the lowest EPS/prolactin, first-line for bipolar depression; watch metabolics and the eyes, and skip the off-label sleep habit."
  },

  clozapine: {
    hook: "The most effective antipsychotic we have — beats resistance and cuts suicidality — but reserved because it can wipe out your white cells.",
    steps: [
      {
        title: "The big picture",
        teach: "Clozapine is unique: it's the ONLY antipsychotic proven superior in treatment-resistant schizophrenia, and the only one shown to reduce recurrent suicidal behaviour. If it were safe, it'd be everywhere. It isn't — so it's reserved, wrapped in mandatory monitoring."
      },
      {
        title: "What it treats",
        teach: "Its approvals are precise: treatment-RESISTANT schizophrenia (inadequate response or intolerance to at least two antipsychotics), and reduction of recurrent suicidal behaviour in schizophrenia/schizoaffective disorder. Off-label, it's used in Parkinson disease psychosis and resistant bipolar/aggression.",
        check: {
          q: "What defines a patient as a candidate for clozapine in schizophrenia?",
          options: ["Inadequate response/intolerance to at least two antipsychotics", "First episode, never treated", "Any patient who prefers once-daily dosing"],
          answer: "Inadequate response/intolerance to at least two antipsychotics",
          why: "Clozapine is reserved for treatment resistance — failure of ≥2 adequate antipsychotic trials."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Two clear triggers: a patient whose psychosis hasn't responded to two adequate antipsychotic trials, or a patient with schizophrenia/schizoaffective disorder and persistent suicidality. Both are exactly where clozapine's unique evidence lives.",
        check: {
          q: "Beyond treatment resistance, clozapine has unique evidence for reducing what?",
          options: ["Recurrent suicidal behaviour", "Tardive dyskinesia", "Weight gain"],
          answer: "Recurrent suicidal behaviour",
          why: "Clozapine is the one antipsychotic shown to reduce recurrent suicidality — a distinct approved indication."
        }
      },
      {
        title: "How you use it",
        teach: "Titrate slowly to survive the early side effects: 12.5 mg on day 1, then creep up by 25–50 mg toward 300–450 mg over about two weeks (max 900 mg). Slow titration limits orthostasis, seizures and myocarditis. Crucial rule: if a patient misses 48+ hours of doses, you RE-TITRATE from 12.5 mg.",
        check: {
          q: "A patient stops clozapine for 3 days. How do you restart?",
          options: ["Re-titrate from 12.5 mg", "Resume the full previous dose immediately", "Double the next dose to catch up"],
          answer: "Re-titrate from 12.5 mg",
          why: "After a gap of ≥48 h, tolerance is lost — restart low from 12.5 mg to avoid orthostasis/seizures."
        }
      },
      {
        title: "What patients feel",
        teach: "Day-to-day it's sedating, causes paradoxical drooling (sialorrhea — a giveaway), constipation, weight gain, orthostasis with tachycardia, sometimes benign fever, even bed-wetting. Notably: NO EPS and low prolactin, because it barely holds the D2 receptor."
      },
      {
        title: "The must-not-miss: agranulocytosis",
        teach: "The headline danger is severe neutropenia/agranulocytosis — it can leave a patient defenceless against infection. So ANC monitoring is MANDATORY and registry-enforced: WEEKLY for the first 6 months, then every 2 weeks through month 12, then every 4 weeks thereafter. Teach patients to report any fever or sore throat immediately.",
        check: {
          q: "How often is the ANC checked during the first 6 months of clozapine?",
          options: ["Weekly", "Once at baseline only", "Every 6 months"],
          answer: "Weekly",
          why: "Registry monitoring is weekly for 6 months, then q2 weeks to 12 months, then q4 weeks — to catch neutropenia early."
        }
      },
      {
        title: "The other early killers",
        teach: "Blood isn't the only threat. In the first 6–8 weeks watch for MYOCARDITIS (chest pain, dyspnea, palpitations, rising HR/troponin/CRP). Seizures are dose-related, mostly above 600 mg (consider valproate cover). And constipation can silently progress to paralytic ileus and bowel obstruction — prescribe prophylactic laxatives.",
        check: {
          q: "Which clozapine complication is most likely in the FIRST 6–8 weeks and can present as chest pain, dyspnea and tachycardia?",
          options: ["Myocarditis", "Tardive dyskinesia", "Agranulocytosis at 5 years"],
          answer: "Myocarditis",
          why: "Myocarditis risk peaks in the first 6–8 weeks — screen with symptoms, HR, troponin/CRP."
        }
      },
      {
        title: "Levels and monitoring",
        teach: "Clozapine is one of the few antipsychotics where therapeutic drug monitoring truly helps: aim for a trough plasma level around 350 ng/mL or above for response, while levels over 600 ng/mL push up seizure and toxicity risk. Levels swing with smoking and CYP1A2 inhibitors (fluvoxamine, ciprofloxacin), so ask about smoking changes.",
        check: {
          q: "Above roughly which clozapine plasma level does seizure/toxicity risk climb?",
          options: ["600 ng/mL", "50 ng/mL", "10 ng/mL"],
          answer: "600 ng/mL",
          why: "Target ≳350 ng/mL for response; >600 ng/mL raises seizure/toxicity risk."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "Clozapine is the prototype 'atypical': a weak, loose D2 antagonist with potent 5-HT2A blockade and broad D4/muscarinic/H1/α1 activity. That low D2 occupancy is precisely why it gives no EPS and low prolactin despite being the strongest antipsychotic we have."
      }
    ],
    trap: "Don't confuse clozapine (the treatment-resistant-schizophrenia antipsychotic with ANC monitoring) with clonazepam (a benzodiazepine) — similar names, completely different drugs and risks.",
    takeaway: "Clozapine = uniquely effective for treatment-resistant schizophrenia and suicidality, NO EPS/low prolactin — but the most monitoring-intensive drug in psychiatry: mandatory ANC checks, myocarditis/seizure/ileus vigilance, big metabolic load, and useful drug levels (~350 ng/mL)."
  },

  ziprasidone: {
    hook: "The weight-friendly SGA with two strings attached: it must be taken with food, and it prolongs the QT more than any of its peers.",
    steps: [
      {
        title: "The big picture",
        teach: "Ziprasidone is the metabolically kind option — essentially weight- and lipid-neutral, which is a big deal in a class defined by weight gain. But it earns that with two quirks: a mandatory meal, and the most QT prolongation of the SGAs."
      },
      {
        title: "What it treats",
        teach: "Approved for schizophrenia and bipolar I mania, with off-label use as an adjunct in bipolar maintenance. A natural pick when you want antipsychotic efficacy but the patient can't afford more metabolic risk.",
        check: {
          q: "What's the main reason to choose ziprasidone in a metabolically vulnerable patient?",
          options: ["It's essentially weight- and lipid-neutral", "It has no QT effect", "It needs no monitoring"],
          answer: "It's essentially weight- and lipid-neutral",
          why: "Ziprasidone's metabolic neutrality is its headline advantage."
        }
      },
      {
        title: "How you use it",
        teach: "Dose it 20 mg twice daily WITH food to start, titrating to 40–80 mg BID (max 160 mg/day). Twice-daily-with-meals is the whole routine — and the 'with food' part is non-negotiable.",
        check: {
          q: "How should ziprasidone be taken?",
          options: ["Twice daily, each dose with a meal (~500 kcal)", "Once at bedtime on an empty stomach", "Sublingually, avoiding food"],
          answer: "Twice daily, each dose with a meal (~500 kcal)",
          why: "Food (≥500 kcal) is required for absorption; it's dosed BID."
        }
      },
      {
        title: "The food rule matters",
        teach: "Here's the classic exam-and-clinic trap: taken on an empty stomach, ziprasidone's absorption roughly HALVES. A patient who 'isn't responding' may simply be taking it without food. It needs about 500 kcal per dose.",
        check: {
          q: "A patient on ziprasidone isn't improving. What's a common, fixable reason?",
          options: ["Taking it without food, halving absorption", "Taking it with grapefruit", "Taking it sublingually"],
          answer: "Taking it without food, halving absorption",
          why: "Empty-stomach dosing cuts absorption about in half — a frequent cause of apparent treatment failure."
        }
      },
      {
        title: "Don't miss this",
        teach: "The safety headline is QT prolongation — the greatest of the SGAs, with torsades risk. It's contraindicated with a history of QT prolongation, recent MI, uncompensated heart failure, or alongside other QT-prolonging drugs. Check an ECG and electrolytes (K, Mg) if there's any cardiac risk.",
        check: {
          q: "Which cardiac risk most distinguishes ziprasidone from other SGAs?",
          options: ["QT prolongation (greatest of the class)", "Myocarditis", "Bradycardia from D2 blockade"],
          answer: "QT prolongation (greatest of the class)",
          why: "Ziprasidone prolongs the QT more than other SGAs — mind electrolytes and co-prescribed QT drugs."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "Beyond the usual 5-HT2A/D2 antagonism, ziprasidone is a 5-HT1A partial agonist and a modest serotonin/norepinephrine reuptake inhibitor — a profile some invoke to explain mood/anxiety benefit. Nice to know, but the food and QT rules are what you act on."
      }
    ],
    trap: "Remember ziprasidone needs ~500 kcal of food per dose (more than lurasidone's 350 kcal) — the bigger meal requirement of the two food-dependent SGAs.",
    takeaway: "Ziprasidone = metabolically favourable (weight/lipid-neutral) but two catches: take with a ~500 kcal meal (or absorption halves) and it's the most QT-prolonging SGA."
  },

  aripiprazole: {
    hook: "The 'dopamine stabilizer' — a weight- and prolactin-friendly D2 partial agonist, but activating, with akathisia and impulse-control urges.",
    steps: [
      {
        title: "The big picture",
        teach: "Aripiprazole rewrote the rules: instead of blocking dopamine, it's a D2 PARTIAL agonist — a 'dopamine stabilizer' that dials activity down where it's high and up where it's low. The payoff is a metabolically favourable, prolactin-sparing drug; the price is that it tends to be activating."
      },
      {
        title: "What it treats",
        teach: "Approved for schizophrenia, bipolar I mania (a CANMAT first-line for mania), and — importantly — as an ADJUNCT for major depression when an antidepressant alone isn't enough. Off-label it's used for autism irritability and tics.",
        check: {
          q: "In major depression, how is aripiprazole typically used?",
          options: ["As an adjunct added to an antidepressant", "As stand-alone first-line monotherapy", "Only for the psychotic subtype"],
          answer: "As an adjunct added to an antidepressant",
          why: "Aripiprazole is approved as adjunctive treatment of MDD — added on to an antidepressant."
        }
      },
      {
        title: "How you use it",
        teach: "For psychosis/mania start 10–15 mg once daily; as an MDD add-on, much lower — 2–5 mg. Its half-life is very long (~75 h), so titrate slowly, at 2-week intervals, and dose in the morning if it's causing insomnia. There's also an LAI (Maintena) for adherence."
      },
      {
        title: "What patients feel",
        teach: "The characteristic experience is akathisia — an inner restlessness, can't-sit-still feeling — plus activation, insomnia and anxiety early on. Weight and prolactin are largely spared (it can even lower prolactin), which is a real selling point.",
        check: {
          q: "Which side effect is most characteristic of aripiprazole?",
          options: ["Akathisia (inner restlessness)", "Marked weight gain", "Hyperprolactinemia"],
          answer: "Akathisia (inner restlessness)",
          why: "Akathisia and activation are hallmark; weight and prolactin are typically spared."
        }
      },
      {
        title: "Don't miss this",
        teach: "The must-not-miss is a dopamine-agonist quirk: impulse-control disorders — pathological gambling, hypersexuality, compulsive shopping, binge-eating. Patients rarely connect these to a pill, so you must ASK about them directly at follow-up.",
        check: {
          q: "What must you specifically ask about at aripiprazole follow-ups?",
          options: ["New urges to gamble, spend, binge-eat, or hypersexuality", "White-cell counts", "Sublingual numbness"],
          answer: "New urges to gamble, spend, binge-eat, or hypersexuality",
          why: "Dopamine partial agonists carry an impulse-control warning — screen for these urges explicitly."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "Aripiprazole is a dopamine D2/D3 partial agonist plus a 5-HT1A partial agonist and 5-HT2A antagonist. That partial agonism is the through-line: it's why the drug is prolactin-sparing and weight-friendly, and also why it's activating rather than sedating."
      }
    ],
    trap: "The metabolically friendly partial agonists (aripiprazole, brexpiprazole, cariprazine) trade weight gain for akathisia and impulse-control urges — ask about restlessness and gambling/spending, not just weight.",
    takeaway: "Aripiprazole = the prototype D2 partial agonist: weight- and prolactin-friendly, useful as an MDD adjunct, but activating with prominent akathisia and impulse-control risk."
  },

  asenapine: {
    hook: "The only sublingual antipsychotic — swallow it and it barely works — famous for numbing the tongue.",
    steps: [
      {
        title: "The big picture",
        teach: "Asenapine's defining trait isn't its receptor profile — it's the route. It's the ONE antipsychotic given sublingually, because if you swallow it, first-pass metabolism destroys the bioavailability and it barely reaches the blood."
      },
      {
        title: "What it treats",
        teach: "Approved for schizophrenia and bipolar I mania (monotherapy or adjunct — a CANMAT first-line for mania), with off-label bipolar maintenance use.",
        check: {
          q: "For which acute condition is asenapine a CANMAT first-line option?",
          options: ["Bipolar I mania", "Bipolar depression", "OCD"],
          answer: "Bipolar I mania",
          why: "Asenapine is first-line for acute bipolar I mania in CANMAT/ISBD."
        }
      },
      {
        title: "How you use it",
        teach: "Dose it 5–10 mg sublingually twice daily. The administration ritual is the whole point: place it under the tongue and let it dissolve — don't chew or swallow — and avoid food and drink for 10 minutes afterward so it can absorb.",
        check: {
          q: "What's the key administration rule for asenapine?",
          options: ["Dissolve under the tongue; no food/drink for 10 minutes", "Swallow whole with a large meal", "Crush and mix into juice"],
          answer: "Dissolve under the tongue; no food/drink for 10 minutes",
          why: "It's sublingual — swallowing destroys bioavailability; avoid food/drink for 10 minutes after."
        }
      },
      {
        title: "What patients feel",
        teach: "The signature complaints are oral hypoesthesia — numbness of the tongue and mouth — and altered taste (dysgeusia), both expected and temporary. Add somnolence, some akathisia/EPS, dizziness, and moderate weight gain.",
        check: {
          q: "Which characteristic, expected effect should you warn asenapine patients about?",
          options: ["Temporary tongue numbness and altered taste", "Permanent hearing loss", "Blue-grey skin discoloration"],
          answer: "Temporary tongue numbness and altered taste",
          why: "Oral hypoesthesia and dysgeusia are characteristic local effects of the sublingual route."
        }
      },
      {
        title: "Don't miss this",
        teach: "The serious one is hypersensitivity — anaphylaxis and angioedema can occur, even with the very first dose. Teach patients to seek urgent care for lip/tongue swelling or trouble breathing. It's also contraindicated in severe hepatic impairment (Child-Pugh C). Run the usual metabolic monitoring too.",
        check: {
          q: "Which serious asenapine reaction can occur even on the first dose?",
          options: ["Anaphylaxis/angioedema", "Agranulocytosis", "Tardive dyskinesia"],
          answer: "Anaphylaxis/angioedema",
          why: "Serious hypersensitivity reactions can occur with the first dose — a distinctive asenapine warning."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "Pharmacologically it's a broad, high-affinity antagonist across serotonin (2A, 2C, 6, 7), dopamine, α-adrenergic and H1 receptors, with almost no muscarinic activity. But clinically, the sublingual route and its quirks are what you'll actually manage."
      }
    ],
    trap: "Asenapine is the sublingual one — 'under the tongue, no food or drink for 10 minutes'; swallowing it wastes the dose.",
    takeaway: "Asenapine = the only sublingual antipsychotic (numb tongue, no food/drink for 10 min), moderate metabolic risk, and a distinctive first-dose hypersensitivity/angioedema warning."
  },

  lurasidone: {
    hook: "A metabolically clean, first-line agent for bipolar depression — as long as it's taken with a meal.",
    steps: [
      {
        title: "The big picture",
        teach: "Lurasidone is one of the friendlier SGAs metabolically — weight, lipids and glucose stay largely neutral, prolactin is low, QT is low. Its standout clinical role is bipolar depression, with one practical string attached: it needs food."
      },
      {
        title: "What it treats",
        teach: "Approved for schizophrenia and bipolar I DEPRESSION (as monotherapy or added to lithium/valproate), and it's a CANMAT first-line for bipolar depression. That combination — effective for the depressed pole AND metabolically kind — is its niche.",
        check: {
          q: "What is lurasidone's standout, CANMAT first-line indication?",
          options: ["Bipolar I depression", "Acute mania only", "Treatment-resistant schizophrenia"],
          answer: "Bipolar I depression",
          why: "Lurasidone is a first-line agent for bipolar depression in CANMAT/ISBD."
        }
      },
      {
        title: "How you use it",
        teach: "Start 20–40 mg once daily WITH food, titrate weekly toward 40–80 mg (max 120 mg in Canada), often given in the evening. The meal only needs to be about 350 kcal — lighter than ziprasidone's requirement, but still essential.",
        check: {
          q: "How much food does lurasidone need for reliable absorption?",
          options: ["A meal of at least ~350 kcal", "Strictly an empty stomach", "A high-fat meal over 1000 kcal"],
          answer: "A meal of at least ~350 kcal",
          why: "Lurasidone requires ~350 kcal with the dose — less than ziprasidone's 500 kcal, but mandatory."
        }
      },
      {
        title: "What patients feel",
        teach: "The common experiences are akathisia, some somnolence, nausea and mild EPS. Reassuringly, weight, cholesterol and glucose tend to stay put — a genuine advantage you can offer metabolically anxious patients."
      },
      {
        title: "Don't miss this",
        teach: "The must-not-miss is a drug-interaction rule: lurasidone is a CYP3A4 substrate, so STRONG 3A4 inhibitors AND strong inducers are both contraindicated — and patients should avoid grapefruit. Ask specifically about antifungals, macrolide antibiotics, and anti-seizure drugs.",
        check: {
          q: "Which drugs are contraindicated with lurasidone?",
          options: ["Strong CYP3A4 inhibitors AND inducers", "All SSRIs", "Any drug taken with food"],
          answer: "Strong CYP3A4 inhibitors AND inducers",
          why: "As a 3A4 substrate, both strong inhibitors and strong inducers are contraindicated (and avoid grapefruit)."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "It's a 5-HT2A/D2 antagonist with potent 5-HT7 antagonism and 5-HT1A partial agonism, and very little H1 or muscarinic activity — that clean receptor profile is why it's so metabolically favourable and non-sedating relative to peers."
      }
    ],
    trap: "Two food-dependent SGAs: lurasidone needs ~350 kcal, ziprasidone needs ~500 kcal — both fail silently if taken on an empty stomach.",
    takeaway: "Lurasidone = metabolically clean, low-QT, first-line for bipolar depression — but take it with a ~350 kcal meal, and beware strong CYP3A4 inhibitors/inducers and grapefruit."
  },

  brexpiprazole: {
    hook: "Aripiprazole's smoother cousin — same dopamine-stabilizer idea, but with less akathisia and activation.",
    steps: [
      {
        title: "The big picture",
        teach: "Brexpiprazole is a D2 partial agonist built in aripiprazole's mould, but tuned for tolerability: lower intrinsic activity at D2 means noticeably LESS akathisia and activation. The mild trade-off is slightly more weight gain."
      },
      {
        title: "What it treats",
        teach: "Approved for schizophrenia and as an ADJUNCT for major depression — added to an antidepressant that's only partly working. In some jurisdictions it's also approved for agitation in Alzheimer dementia.",
        check: {
          q: "How is brexpiprazole used in major depression?",
          options: ["As an adjunct to an antidepressant", "As first-line monotherapy for all depression", "Only for postpartum depression"],
          answer: "As an adjunct to an antidepressant",
          why: "Brexpiprazole is approved as adjunctive treatment of MDD."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — 1 mg/day (0.5–1 mg for the MDD add-on) — and titrate weekly toward 2–4 mg (max 4 mg). Like aripiprazole it has a long half-life (~91 h), so give changes time and don't chase an immediate effect."
      },
      {
        title: "What patients feel",
        teach: "Compared with aripiprazole, restlessness is usually milder — a key reason to pick it. Prolactin stays low. The counterweight is a bit more weight gain and modest metabolic change, so keep the usual monitoring going.",
        check: {
          q: "What's the main tolerability advantage of brexpiprazole over aripiprazole?",
          options: ["Less akathisia/activation", "No weight gain at all", "It needs no titration"],
          answer: "Less akathisia/activation",
          why: "Lower D2 intrinsic activity gives less akathisia and activation than aripiprazole."
        }
      },
      {
        title: "Don't miss this",
        teach: "It's a dopamine partial agonist, so it inherits the class impulse-control warning — pathological gambling, hypersexuality, compulsive shopping and binge-eating. Ask about these directly, just as you would with aripiprazole.",
        check: {
          q: "Which class warning does brexpiprazole share with aripiprazole?",
          options: ["Impulse-control disorders (gambling, hypersexuality, etc.)", "Agranulocytosis", "Serotonin syndrome"],
          answer: "Impulse-control disorders (gambling, hypersexuality, etc.)",
          why: "All dopamine partial agonists carry the impulse-control-disorder warning."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "Same family as aripiprazole — a D2 partial agonist with 5-HT1A partial agonism and 5-HT2A antagonism — but with lower intrinsic activity at D2. That single dial is the whole story: fewer activating side effects, at the cost of a touch more weight."
      }
    ],
    trap: "Brexpiprazole vs aripiprazole: same partial-agonist idea, but brexpiprazole is less activating (less akathisia) and slightly more weight-gaining.",
    takeaway: "Brexpiprazole = a better-tolerated D2 partial agonist (less akathisia than aripiprazole), useful as an MDD adjunct — but still carries the impulse-control warning."
  },

  cariprazine: {
    hook: "The D3-preferring partial agonist that covers BOTH poles of bipolar — with metabolites so long-lived its effects build and fade over weeks.",
    steps: [
      {
        title: "The big picture",
        teach: "Cariprazine is the partial agonist with two distinctive traits: it prefers the D3 receptor (the most D3-selective antipsychotic, theorized to help negative symptoms and anhedonia), and its active metabolites hang around for WEEKS — so effects, good and bad, build and fade slowly."
      },
      {
        title: "What it treats",
        teach: "Approved for schizophrenia and — unusually — for BOTH poles of bipolar I: acute manic/mixed episodes AND bipolar depression, both CANMAT first-line. That dual-pole coverage sets it apart from the other partial agonists.",
        check: {
          q: "What makes cariprazine distinctive among the partial agonists for bipolar disorder?",
          options: ["It covers both mania/mixed AND bipolar depression", "It only treats mania", "It's only for schizophrenia"],
          answer: "It covers both mania/mixed AND bipolar depression",
          why: "Cariprazine is first-line for both poles of bipolar I — mania/mixed and depression."
        }
      },
      {
        title: "How you use it",
        teach: "Start 1.5 mg once daily and titrate toward 1.5–6 mg (max 6 mg). Because the active metabolites accumulate slowly, don't rush dose changes — reassess over 1–2 weeks rather than day to day, and warn patients not to double up when they feel nothing right away."
      },
      {
        title: "What patients feel",
        teach: "Expect akathisia, some EPS/parkinsonism, insomnia and nausea. Metabolically it's favourable — weight-neutral with low prolactin — which, like the other partial agonists, is a real advantage.",
        check: {
          q: "Which side-effect profile fits cariprazine?",
          options: ["Akathisia/EPS with favourable metabolics", "Severe weight gain with high prolactin", "Agranulocytosis"],
          answer: "Akathisia/EPS with favourable metabolics",
          why: "Like other partial agonists, it's metabolically favourable but EPS/akathisia-prone."
        }
      },
      {
        title: "Don't miss this",
        teach: "The must-not-miss is that long tail: because the metabolites live for weeks, both benefit and side effects PERSIST long after you stop the drug. If a patient develops akathisia or EPS, remember it won't vanish the next day — and it shares the partial-agonist impulse-control warning too.",
        check: {
          q: "Why do cariprazine's effects and side effects linger after stopping?",
          options: ["Its active metabolites persist for weeks", "It's stored in bone", "It irreversibly binds D2"],
          answer: "Its active metabolites persist for weeks",
          why: "Very long-lived active metabolites mean slow onset AND slow offset — effects fade over weeks."
        }
      },
      {
        title: "The mechanism, briefly",
        teach: "It's a D2/D3 partial agonist with the highest D3 affinity of the class, plus 5-HT1A partial agonism and 5-HT2A/2B antagonism. That D3 preference is the theoretical basis for its edge on negative symptoms and mood."
      }
    ],
    trap: "Cariprazine's active metabolites last weeks — dose changes take time to show, and effects/side effects persist long after stopping (slow onset AND slow offset).",
    takeaway: "Cariprazine = D3-preferring partial agonist covering both poles of bipolar I; metabolically favourable but EPS/akathisia-prone, with uniquely long-lived metabolites (weeks of onset and offset)."
  }
};
