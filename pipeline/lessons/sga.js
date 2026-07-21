// Second-generation (atypical) antipsychotics.
// Class theme: 5-HT2A antagonism + D2 modulation (antagonism, or PARTIAL agonism for
// aripiprazole/brexpiprazole/cariprazine). METABOLIC SYNDROME is the dominant class harm
// (olanzapine & clozapine worst; ziprasidone/lurasidone/aripiprazole/cariprazine favourable)
// → every SGA needs baseline + ongoing metabolic monitoring (weight/BMI, waist, BP, fasting
// glucose/HbA1c, lipids). Every entry grounded in data/deck.json.
export default {
  risperidone: {
    hook: "The most D2-potent SGA — so it behaves like a high-potency FGA: the most EPS and the most prolactin of the atypicals.",
    steps: [
      {
        title: "What it is",
        teach: "Risperidone is a combined 5-HT2A/D2 antagonist and the most D2-potent of the SGAs. That D2 potency is the key to its whole side-effect signature.",
        check: {
          q: "Risperidone's mechanism?",
          options: ["5-HT2A/D2 antagonist, most D2-potent SGA", "D2 partial agonist", "Pure serotonin reuptake inhibitor"],
          answer: "5-HT2A/D2 antagonist, most D2-potent SGA",
          why: "It is the most D2-potent atypical — combined 5-HT2A and D2 blockade."
        }
      },
      {
        title: "The signature harm",
        teach: "High D2 potency gives it the most dose-dependent EPS and the most hyperprolactinemia of the SGAs — galactorrhea, amenorrhea, gynecomastia, sexual dysfunction.",
        check: {
          q: "Which adverse effect is risperidone most known for among SGAs?",
          options: ["Hyperprolactinemia + dose-dependent EPS", "Agranulocytosis", "The lowest EPS of any SGA"],
          answer: "Hyperprolactinemia + dose-dependent EPS",
          why: "Being the most D2-potent SGA, it tops the class for prolactin and EPS."
        }
      },
      {
        title: "Metabolic + dose ceiling",
        teach: "Metabolic risk is intermediate (still monitor weight, glucose, lipids like every SGA). EPS climbs above ~6 mg with little added benefit up to the 8 mg/day max.",
        check: {
          q: "What happens as you push risperidone above ~6 mg/day?",
          options: ["More EPS with little added benefit", "Prolactin normalizes", "Metabolic risk disappears"],
          answer: "More EPS with little added benefit",
          why: "Above ~6 mg you mostly buy EPS; 8 mg is the labelled ceiling."
        }
      },
      {
        title: "Its metabolite is a drug",
        teach: "Risperidone is CYP2D6-metabolized to 9-hydroxyrisperidone — which IS paliperidone, a marketed antipsychotic in its own right. 2D6 inhibitors (fluoxetine, paroxetine, bupropion) raise the parent level.",
        check: {
          q: "Risperidone's active metabolite is marketed as which drug?",
          options: ["Paliperidone", "Olanzapine", "Clozapine"],
          answer: "Paliperidone",
          why: "9-hydroxyrisperidone is paliperidone."
        }
      }
    ],
    trap: "Risperidone vs paliperidone: paliperidone IS risperidone's active 9-OH metabolite — same pharmacology, but renally cleared with far fewer CYP interactions.",
    takeaway: "Risperidone = the most D2-potent SGA → most EPS + most prolactin; intermediate metabolic risk; its metabolite is paliperidone."
  },

  paliperidone: {
    hook: "Risperidone's active metabolite, sold on its own — renally cleared, few CYP interactions, and the king of long-acting injectables.",
    steps: [
      {
        title: "What it is",
        teach: "Paliperidone is 9-hydroxyrisperidone — the active metabolite of risperidone — so it is a 5-HT2A/D2 antagonist whose effects mirror risperidone (EPS, hyperprolactinemia).",
        check: {
          q: "Paliperidone is chemically what?",
          options: ["The active 9-OH metabolite of risperidone", "A D2 partial agonist", "A serotonin reuptake inhibitor"],
          answer: "The active 9-OH metabolite of risperidone",
          why: "Paliperidone = 9-hydroxyrisperidone."
        }
      },
      {
        title: "Renal, not hepatic",
        teach: "Unlike risperidone it undergoes limited hepatic metabolism — ~59% is excreted UNCHANGED in urine. Fewer CYP interactions (handy in hepatic impairment/polypharmacy), but it MUST be dose-reduced for renal impairment.",
        check: {
          q: "What must you adjust paliperidone for?",
          options: ["Renal function", "CYP2D6 genotype", "Smoking status"],
          answer: "Renal function",
          why: "It is cleared largely unchanged by the kidneys → renal dose adjustment."
        }
      },
      {
        title: "The LAI franchise",
        teach: "The oral ER needs no titration (start 6 mg AM). Its long-acting injectables — Sustenna (monthly) and Trinza (every 3 months) — are major adherence tools.",
        check: {
          q: "Trinza (paliperidone LAI) is dosed how often?",
          options: ["Every 3 months", "Twice daily", "Weekly"],
          answer: "Every 3 months",
          why: "Trinza is the every-3-month LAI; Sustenna is monthly."
        }
      }
    ],
    trap: "Same pharmacology as risperidone — but paliperidone is renally cleared (few CYP interactions) and needs renal dose adjustment, whereas risperidone is CYP2D6-dependent.",
    takeaway: "Paliperidone = renally-cleared risperidone metabolite: minimal CYP interactions, renal dosing, and the widest LAI options (monthly & q3-month)."
  },

  olanzapine: {
    hook: "Highly effective and very sedating — but shares with clozapine the worst metabolic burden of any antipsychotic.",
    steps: [
      {
        title: "What it is",
        teach: "Olanzapine is a 5-HT2A/D2 antagonist with broad extra H1, muscarinic, 5-HT2C and α1 blockade. That receptor promiscuity explains its sedation and appetite drive.",
        check: {
          q: "Why is olanzapine so sedating?",
          options: ["Potent H1 (and broad receptor) blockade", "D2 partial agonism", "It has no H1 activity"],
          answer: "Potent H1 (and broad receptor) blockade",
          why: "Broad H1/muscarinic/5-HT2C blockade drives sedation and weight gain."
        }
      },
      {
        title: "The metabolic bomb",
        teach: "With clozapine it is one of the two worst SGAs metabolically: marked weight gain, dyslipidemia, hyperglycemia/new-onset diabetes/DKA. Baseline + ongoing metabolic monitoring is mandatory.",
        check: {
          q: "Among mainstream SGAs (excluding clozapine), which causes the most weight gain and metabolic derangement?",
          options: ["Olanzapine", "Ziprasidone", "Lurasidone"],
          answer: "Olanzapine",
          why: "Olanzapine tops the metabolic-risk list alongside clozapine."
        }
      },
      {
        title: "Low EPS, low prolactin",
        teach: "The trade-off for its metabolic cost: olanzapine has low EPS and low prolactin, with high efficacy — a reason it is still widely used despite the weight gain.",
        check: {
          q: "Olanzapine's EPS and prolactin risk are:",
          options: ["Low", "The highest of all SGAs", "Zero and impossible"],
          answer: "Low",
          why: "Low EPS/low prolactin — the opposite pole from risperidone."
        }
      },
      {
        title: "Two DDI traps",
        teach: "Metabolized by CYP1A2 — smoking induces it and lowers levels (cessation raises them); fluvoxamine raises them. And never combine IM olanzapine with a parenteral benzodiazepine (cardiorespiratory depression).",
        check: {
          q: "What is unsafe to co-administer with IM olanzapine?",
          options: ["A parenteral benzodiazepine", "Oral vitamin D", "A statin"],
          answer: "A parenteral benzodiazepine",
          why: "IM olanzapine + parenteral benzodiazepine risks cardiorespiratory depression."
        }
      }
    ],
    trap: "Olanzapine vs clozapine: both thienobenzodiazepines with the worst metabolic burden — but clozapine is reserved (agranulocytosis) and uniquely effective in resistant illness.",
    takeaway: "Olanzapine = high efficacy, very sedating, low EPS/prolactin — but among the worst metabolically, so watch the weight/glucose/lipids and CYP1A2/smoking."
  },

  quetiapine: {
    hook: "The sedating, ultra-low-EPS SGA whose identity changes with the dose: sleep aid low, antidepressant mid, antipsychotic high.",
    steps: [
      {
        title: "What it is",
        teach: "Quetiapine is a 5-HT2A/D2 antagonist with LOOSE, transient D2 occupancy. Its active metabolite norquetiapine adds norepinephrine-reuptake inhibition — giving it genuine antidepressant properties.",
        check: {
          q: "What is distinctive about quetiapine's D2 binding?",
          options: ["Loose, transient (low occupancy)", "Irreversible", "It doesn't touch D2 at all"],
          answer: "Loose, transient (low occupancy)",
          why: "Loose D2 binding is why EPS/prolactin are so low."
        }
      },
      {
        title: "Lowest EPS/prolactin",
        teach: "Thanks to that loose D2 binding, quetiapine has the lowest EPS and prolactin of these agents — making it (with clozapine) a go-to in Parkinson disease psychosis and in EPS-prone patients.",
        check: {
          q: "Which SGA is preferred (with clozapine) in Parkinson disease psychosis for its very low EPS?",
          options: ["Quetiapine", "Risperidone", "Ziprasidone"],
          answer: "Quetiapine",
          why: "Its loose D2 binding gives minimal EPS — ideal in Parkinson psychosis."
        }
      },
      {
        title: "Dose = identity",
        teach: "Low dose = sedative (H1); mid dose = antidepressant (norquetiapine NET inhibition) and it is first-line for bipolar depression; high dose = antipsychotic. Metabolic risk is moderate.",
        check: {
          q: "Quetiapine is first-line (CANMAT) for which indication at mid-range dosing?",
          options: ["Bipolar depression", "Treatment-resistant schizophrenia", "Insomnia only"],
          answer: "Bipolar depression",
          why: "Quetiapine is a CANMAT first-line for acute bipolar depression."
        }
      },
      {
        title: "The lens pearl",
        teach: "Beyond moderate metabolic monitoring, the label recommends periodic lens/cataract examination — a classic quetiapine-specific monitoring point.",
        check: {
          q: "Which periodic exam does quetiapine's label specifically advise?",
          options: ["Lens/cataract examination", "Bone marrow biopsy", "Weekly ANC"],
          answer: "Lens/cataract examination",
          why: "Quetiapine carries a cataract/lens-exam caution."
        }
      }
    ],
    trap: "Quetiapine vs olanzapine: both sedating and metabolic, but quetiapine has lower EPS/prolactin, less weight gain, and the cataract/lens-exam caution.",
    takeaway: "Quetiapine = very sedating, lowest-EPS SGA; dose defines its role (sleep→mood→psychosis); first-line bipolar depression; remember the lens exam."
  },

  clozapine: {
    hook: "The only drug that beats treatment-resistant schizophrenia and cuts suicide — but it can kill five ways, so it's reserved.",
    steps: [
      {
        title: "Reserved & unique",
        teach: "Clozapine is the ONLY antipsychotic proven superior for treatment-resistant schizophrenia and the only one shown to reduce suicidality. It is reserved (not first-line) precisely because of agranulocytosis.",
        check: {
          q: "What is clozapine uniquely indicated for?",
          options: ["Treatment-resistant schizophrenia + reducing suicidality", "First-line for all new psychosis", "Insomnia"],
          answer: "Treatment-resistant schizophrenia + reducing suicidality",
          why: "It is the drug of choice in resistant illness and the only anti-suicidal antipsychotic."
        }
      },
      {
        title: "Agranulocytosis + ANC",
        teach: "It causes severe neutropenia/agranulocytosis. Check baseline ANC (start only if ≥1500/µL) then monitor on a mandatory registry schedule: weekly ×6 months → every 2 weeks to 12 months → every 4 weeks thereafter, holding/stopping by neutrophil thresholds.",
        check: {
          q: "The clozapine ANC schedule starts at what frequency?",
          options: ["Weekly for the first 6 months", "Once yearly", "Only if symptoms appear"],
          answer: "Weekly for the first 6 months",
          why: "Weekly ×6 months → q2 weeks to 12 months → q4 weeks."
        }
      },
      {
        title: "The other early killers",
        teach: "Blood is not the only danger. Myocarditis peaks in the first 6–8 weeks (watch chest pain, tachycardia, rising troponin/CRP). Seizures are dose-related (esp. >600 mg). Severe constipation can progress to paralytic ileus/obstruction — prescribe prophylactic laxatives.",
        check: {
          q: "A patient 3 weeks into clozapine has chest pain, tachycardia and rising troponin. Diagnosis?",
          options: ["Myocarditis", "Agranulocytosis", "Tardive dyskinesia"],
          answer: "Myocarditis",
          why: "Myocarditis is the classic early (first 6–8 weeks) clozapine emergency."
        }
      },
      {
        title: "Metabolic + drug levels",
        teach: "With olanzapine it carries the worst metabolic burden (weight/glucose/lipids, DKA). Therapeutic drug monitoring is genuinely useful: aim trough ≳350 ng/mL for response; levels >600 ng/mL raise seizure/toxicity risk.",
        check: {
          q: "The trough clozapine level usually targeted for response is about:",
          options: ["≳350 ng/mL", "≳50 ng/mL", "No level matters"],
          answer: "≳350 ng/mL",
          why: "≳350 ng/mL for response; >600 ng/mL raises seizure/toxicity risk."
        }
      },
      {
        title: "Practical handling",
        teach: "Loose D2 → NO EPS and low prolactin; sialorrhea is a paradox (hypersalivation). Levels swing with smoking and with CYP1A2 inhibitors (fluvoxamine, ciprofloxacin). After a gap of ≥48 h, re-titrate from 12.5 mg to avoid orthostasis/collapse.",
        check: {
          q: "A patient misses clozapine for 3 days. How do you restart?",
          options: ["Re-titrate from 12.5 mg", "Resume the full previous dose immediately", "Double the dose to catch up"],
          answer: "Re-titrate from 12.5 mg",
          why: "After ≥48 h off, restart low (12.5 mg) — full-dose restart risks orthostasis/collapse."
        }
      }
    ],
    trap: "Clozapine vs clonazepam: dangerously look-alike/sound-alike names but utterly different drugs — an atypical antipsychotic needing ANC monitoring vs a benzodiazepine. A classic prescribing/dispensing error.",
    takeaway: "Clozapine = uniquely effective in resistant schizophrenia & anti-suicidal, NO EPS — but agranulocytosis (registry ANC), myocarditis, seizures, ileus and severe metabolic effects make it the most monitoring-intensive antipsychotic."
  },

  ziprasidone: {
    hook: "A metabolically clean SGA — but only if you take it with a real meal, and only if you respect its QT prolongation.",
    steps: [
      {
        title: "What it is",
        teach: "Ziprasidone is a 5-HT2A/D2 antagonist that is also a 5-HT1A partial agonist. Its standout upside: it is weight- and lipid-neutral — metabolically favourable when a patient can't afford more weight/glucose trouble.",
        check: {
          q: "How does ziprasidone compare metabolically to olanzapine?",
          options: ["Much more favourable (weight/lipid-neutral)", "Much worse", "Identical"],
          answer: "Much more favourable (weight/lipid-neutral)",
          why: "Ziprasidone is weight/lipid-neutral — a metabolically favourable SGA."
        }
      },
      {
        title: "Take it WITH food",
        teach: "It must be taken WITH food (≥500 kcal). On an empty stomach absorption roughly halves — a classic, avoidable cause of apparent 'treatment failure'.",
        check: {
          q: "Ziprasidone must be taken with how much food?",
          options: ["A meal of ≥500 kcal", "Nothing — empty stomach is fine", "Only water"],
          answer: "A meal of ≥500 kcal",
          why: "Absorption halves without a ≥500 kcal meal."
        }
      },
      {
        title: "The QT drug",
        teach: "Ziprasidone has the greatest QT prolongation of the SGAs, with torsades risk. Check ECG and electrolytes and avoid combining it with other QT-prolonging drugs or anything causing hypokalemia/hypomagnesemia.",
        check: {
          q: "Which SGA carries the greatest QT-prolongation risk?",
          options: ["Ziprasidone", "Lurasidone", "Aripiprazole"],
          answer: "Ziprasidone",
          why: "Ziprasidone prolongs QT the most among the SGAs."
        }
      }
    ],
    trap: "Ziprasidone vs lurasidone: both need food, but ziprasidone needs ≥500 kcal + is BID + prolongs QT; lurasidone needs ≥350 kcal + is once daily + is low-QT + treats bipolar depression.",
    takeaway: "Ziprasidone = metabolically favourable but demands a ≥500 kcal meal and prolongs QT the most — twice-daily dosing, watch the ECG."
  },

  aripiprazole: {
    hook: "The 'dopamine stabilizer' — a D2 partial agonist that's metabolically kind and prolactin-sparing, but activating with akathisia.",
    steps: [
      {
        title: "Partial agonist",
        teach: "Aripiprazole is a dopamine D2/D3 PARTIAL agonist (plus 5-HT1A partial agonism and 5-HT2A antagonism) — it stabilizes dopamine tone rather than simply blocking it.",
        check: {
          q: "Aripiprazole's action at D2 is:",
          options: ["Partial agonism", "Full antagonism like risperidone", "Full agonism"],
          answer: "Partial agonism",
          why: "It is the prototype D2 partial agonist ('dopamine stabilizer')."
        }
      },
      {
        title: "Clean but activating",
        teach: "Partial agonism makes it weight- and prolactin-neutral (it can even LOWER prolactin) — metabolically favourable. The trade-off is that it is activating, with characteristic AKATHISIA and sometimes insomnia/anxiety.",
        check: {
          q: "Which is the characteristic adverse effect of aripiprazole?",
          options: ["Akathisia", "Marked hyperprolactinemia", "Heavy sedation"],
          answer: "Akathisia",
          why: "It is activating; akathisia is its signature, and prolactin is spared."
        }
      },
      {
        title: "Impulse-control warning",
        teach: "As a dopamine agonist it carries an impulse-control warning: pathological gambling, hypersexuality, compulsive shopping and binge-eating. Ask about these directly — patients rarely volunteer them.",
        check: {
          q: "Which behavioural adverse effect must you screen for on aripiprazole?",
          options: ["Impulse-control disorders (e.g., gambling)", "Agranulocytosis", "Cataracts"],
          answer: "Impulse-control disorders (e.g., gambling)",
          why: "Dopamine partial agonists carry the impulse-control (gambling/hypersexuality) risk."
        }
      },
      {
        title: "Long half-life + LAI",
        teach: "Very long half-life (~75 h; active metabolite ~94 h) and a long-acting injectable (Maintena) support adherence. Titrate slowly, and reduce the dose with strong CYP2D6/3A4 inhibitors.",
        check: {
          q: "Aripiprazole's half-life is best described as:",
          options: ["Long (~75 h)", "Very short (~2 h)", "Undetectable"],
          answer: "Long (~75 h)",
          why: "~75 h (metabolite ~94 h) — a long-acting profile supporting once-daily/LAI dosing."
        }
      }
    ],
    trap: "Aripiprazole vs brexpiprazole vs cariprazine — the three partial agonists: aripiprazole is the most activating (most akathisia), brexpiprazole is gentler (MDD adjunct), cariprazine is D3-preferring (bipolar mania + depression).",
    takeaway: "Aripiprazole = prototype D2 partial agonist: metabolically favourable and prolactin-sparing, but activating with akathisia and an impulse-control risk to screen for."
  },

  asenapine: {
    hook: "The only sublingual antipsychotic — swallow it and it barely works, because first-pass metabolism destroys it.",
    steps: [
      {
        title: "Sublingual only",
        teach: "Asenapine is a broad 5-HT2A/D2 antagonist that undergoes extensive first-pass metabolism if swallowed — so it MUST be given sublingually, and the patient must avoid food/drink for 10 minutes afterward.",
        check: {
          q: "How must asenapine be administered?",
          options: ["Sublingually (not swallowed)", "Swallowed whole with water", "By deep IM injection"],
          answer: "Sublingually (not swallowed)",
          why: "Swallowing triggers heavy first-pass metabolism — it must dissolve under the tongue."
        }
      },
      {
        title: "Tongue numbness",
        teach: "Oral hypoesthesia (numbness of the tongue) and dysgeusia (altered taste) are characteristic and expected — a useful clue that a patient is actually taking it correctly.",
        check: {
          q: "Which local effect is characteristic of asenapine?",
          options: ["Oral hypoesthesia (tongue numbness)", "Sialorrhea", "Blurred distance vision"],
          answer: "Oral hypoesthesia (tongue numbness)",
          why: "Tongue numbness/altered taste is expected with the sublingual route."
        }
      },
      {
        title: "First-dose hypersensitivity",
        teach: "Serious hypersensitivity reactions — anaphylaxis and angioedema — can occur, even with the FIRST dose. Metabolic effects are moderate (still monitor).",
        check: {
          q: "When can serious hypersensitivity (angioedema/anaphylaxis) occur with asenapine?",
          options: ["Even with the first dose", "Only after months of use", "Never — it is non-allergenic"],
          answer: "Even with the first dose",
          why: "Anaphylaxis/angioedema can occur with the very first dose."
        }
      }
    ],
    trap: "Asenapine (sublingual — must NOT be swallowed) vs olanzapine orally-disintegrating tablet/Zydis (which IS swallowed after it dissolves) — opposite administration logic.",
    takeaway: "Asenapine = the sublingual SGA: absolute no-swallow / no-food-or-drink-for-10-minutes rule, characteristic tongue numbness, and possible first-dose anaphylaxis."
  },

  lurasidone: {
    hook: "The bipolar-depression workhorse: metabolically clean and low-QT — but only absorbed if taken with food.",
    steps: [
      {
        title: "What it is",
        teach: "Lurasidone is a 5-HT2A/D2 antagonist with potent 5-HT7 antagonism and 5-HT1A partial agonism, and minimal H1/muscarinic activity — which is why it is metabolically favourable.",
        check: {
          q: "Lurasidone's metabolic and prolactin profile is:",
          options: ["Favourable (weight/lipid/glucose-neutral, low prolactin)", "The worst of the SGAs", "High prolactin, high weight gain"],
          answer: "Favourable (weight/lipid/glucose-neutral, low prolactin)",
          why: "Minimal H1/muscarinic activity → metabolically favourable, low prolactin, low QT."
        }
      },
      {
        title: "Take it WITH food",
        teach: "It must be taken WITH food (≥350 kcal) — less than ziprasidone's 500 kcal, but still essential, or absorption drops substantially. It is dosed once daily.",
        check: {
          q: "Lurasidone requires a meal of at least how many kcal?",
          options: ["350 kcal", "500 kcal", "No food needed"],
          answer: "350 kcal",
          why: "≥350 kcal (vs ziprasidone's ≥500 kcal) is needed for absorption."
        }
      },
      {
        title: "Bipolar depression role",
        teach: "Lurasidone is a strong CANMAT first-line for acute bipolar I depression — its metabolic-friendliness and low QT make it a preferred choice there.",
        check: {
          q: "Lurasidone is CANMAT first-line for which indication?",
          options: ["Acute bipolar I depression", "Treatment-resistant schizophrenia", "Acute mania only"],
          answer: "Acute bipolar I depression",
          why: "It is a first-line agent for bipolar I depression."
        }
      },
      {
        title: "CYP3A4 gatekeeper",
        teach: "Lurasidone is a CYP3A4 substrate: strong 3A4 inhibitors (ketoconazole, clarithromycin) and strong inducers (rifampin, carbamazepine) are CONTRAINDICATED, and grapefruit juice raises levels.",
        check: {
          q: "Which combination is contraindicated with lurasidone?",
          options: ["A strong CYP3A4 inhibitor or inducer", "A statin", "Vitamin D"],
          answer: "A strong CYP3A4 inhibitor or inducer",
          why: "Strong 3A4 inhibitors and inducers cause large exposure changes — contraindicated."
        }
      }
    ],
    trap: "Lurasidone vs ziprasidone: both need food, but lurasidone is ≥350 kcal, once daily, low-QT, and treats bipolar depression; ziprasidone is ≥500 kcal, BID, and prolongs QT.",
    takeaway: "Lurasidone = metabolically favourable, low-QT first-line for bipolar I depression — remember the ≥350 kcal food rule and its contraindicated CYP3A4 interactions."
  },

  brexpiprazole: {
    hook: "Aripiprazole's gentler cousin — a D2 partial agonist with less akathisia, and a go-to add-on for depression.",
    steps: [
      {
        title: "Partial agonist, softer",
        teach: "Brexpiprazole is a dopamine D2 PARTIAL agonist like aripiprazole but with lower intrinsic activity — so it is less activating, with less akathisia (at the cost of slightly more weight gain).",
        check: {
          q: "Compared with aripiprazole, brexpiprazole causes:",
          options: ["Less akathisia/activation", "Far more akathisia", "Agranulocytosis"],
          answer: "Less akathisia/activation",
          why: "Lower D2 intrinsic activity → less activation/akathisia than aripiprazole."
        }
      },
      {
        title: "MDD adjunct",
        teach: "Its signature role is as an ADJUNCT for major depressive disorder — added on when a patient has only partially responded to an antidepressant. Prolactin stays low.",
        check: {
          q: "Brexpiprazole is characteristically used to:",
          options: ["Augment an antidepressant in MDD", "Reduce suicidality in resistant schizophrenia", "Treat Parkinson psychosis"],
          answer: "Augment an antidepressant in MDD",
          why: "It is approved as an adjunct for major depressive disorder."
        }
      },
      {
        title: "Class warning + long t½",
        teach: "It shares the dopamine-partial-agonist impulse-control warning (gambling/hypersexuality/compulsive behaviours) and has a long half-life (~91 h). Reduce the dose with strong CYP2D6/3A4 inhibitors.",
        check: {
          q: "Which warning does brexpiprazole share with aripiprazole?",
          options: ["Impulse-control disorders", "Agranulocytosis", "Cataracts"],
          answer: "Impulse-control disorders",
          why: "All dopamine partial agonists carry the impulse-control warning."
        }
      }
    ],
    trap: "Brexpiprazole vs aripiprazole: same partial-agonist mechanism, but brexpiprazole is less activating (less akathisia), slightly more weight gain, and a common MDD adjunct.",
    takeaway: "Brexpiprazole = a better-tolerated aripiprazole-style partial agonist (less akathisia) with a defining adjunctive role in MDD — still watch for impulse-control effects."
  },

  cariprazine: {
    hook: "The D3-preferring partial agonist that covers BOTH poles of bipolar — with active metabolites that linger for weeks.",
    steps: [
      {
        title: "D3-preferring",
        teach: "Cariprazine is a dopamine D3-PREFERRING D2/D3 partial agonist — the most D3-selective antipsychotic — with 5-HT1A partial agonism and 5-HT2A/2B antagonism. The D3 preference is theorized to help negative symptoms/anhedonia.",
        check: {
          q: "What is pharmacologically distinctive about cariprazine?",
          options: ["It is D3-preferring", "It is a pure D2 antagonist", "It has no dopamine activity"],
          answer: "It is D3-preferring",
          why: "Cariprazine has the highest D3 affinity of the class."
        }
      },
      {
        title: "Both poles of bipolar",
        teach: "It is CANMAT first-line across bipolar I — for mania/mixed AND for depression. Covering both poles is what distinguishes it among the partial agonists.",
        check: {
          q: "Cariprazine treats which phases of bipolar I?",
          options: ["Both mania and depression", "Mania only", "Depression only"],
          answer: "Both mania and depression",
          why: "It is first-line for both bipolar mania/mixed and bipolar depression."
        }
      },
      {
        title: "Metabolites for weeks",
        teach: "Its active metabolites (desmethyl- and didesmethyl-cariprazine) are extremely long-lived (~1–3 weeks), giving an effective half-life of weeks — so both onset AND offset are slow: dose changes take time to show, and effects/side effects persist long after stopping.",
        check: {
          q: "A consequence of cariprazine's very long-lived metabolites is:",
          options: ["Slow onset AND slow offset of effect", "Rapid on/off within hours", "It cannot be dosed once daily"],
          answer: "Slow onset AND slow offset of effect",
          why: "Metabolites lasting weeks mean changes (and side effects) take time to appear and to clear."
        }
      },
      {
        title: "EPS + CYP3A4",
        teach: "It is metabolically favourable with low prolactin, but EPS/akathisia-prone. It is a CYP3A4 substrate — avoid strong 3A4 inhibitors/inducers, and remember the slow accumulation of the didesmethyl metabolite.",
        check: {
          q: "Cariprazine's metabolic and EPS profile is best summarized as:",
          options: ["Metabolically favourable but EPS/akathisia-prone", "Metabolically severe but EPS-free", "High prolactin, no EPS"],
          answer: "Metabolically favourable but EPS/akathisia-prone",
          why: "Weight-neutral/low-prolactin, but akathisia/EPS are common."
        }
      }
    ],
    trap: "Cariprazine vs aripiprazole/brexpiprazole: all partial agonists, but cariprazine is uniquely D3-preferring, has metabolites lasting weeks, and covers both bipolar mania AND depression.",
    takeaway: "Cariprazine = D3-preferring partial agonist with dual bipolar (mania + depression) coverage and the longest effective half-life (weeks) — metabolically kind but EPS/akathisia-prone."
  }
};
