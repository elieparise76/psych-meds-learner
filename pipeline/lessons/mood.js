// Mood stabilizers — micro-lessons. Facts grounded in ../../data/deck.json.
// Therapeutic levels reused verbatim from the deck (lithium/valproate/carbamazepine).
export default {
  lithium: {
    hook: "The gold-standard mood stabilizer — the only psychotropic proven to cut suicide, on a razor-thin therapeutic window.",
    steps: [
      {
        title: "What it is",
        teach: "Lithium is an ion, not a receptor drug — first-line for bipolar mania and maintenance, and the ONLY psychotropic with robust evidence for reducing suicide.",
        check: {
          q: "What makes lithium unique among mood stabilizers?",
          options: ["Robust anti-suicide evidence", "It is metabolized by CYP3A4", "It causes weight loss"],
          answer: "Robust anti-suicide evidence",
          why: "Lithium is the only psychotropic with strong evidence for lowering suicide risk."
        }
      },
      {
        title: "The narrow window",
        teach: "Therapeutic level is 0.6–1.2 mmol/L (maintenance ~0.6–0.8, acute mania ~0.8–1.2), drawn as a 12-hour trough. Toxicity begins ~>1.5 and is severe >2.0 — a true emergency.",
        check: {
          q: "What is lithium's therapeutic serum range?",
          options: ["0.6–1.2 mmol/L", "4–12 mmol/L", "50–100 mmol/L"],
          answer: "0.6–1.2 mmol/L",
          why: "0.6–1.2 mmol/L; toxicity begins around >1.5, so small changes matter."
        }
      },
      {
        title: "What tips it toxic",
        teach: "Lithium is excreted UNCHANGED by the kidney — not metabolized. Anything that lowers renal clearance raises the level: NSAIDs, thiazides, ACE inhibitors/ARBs, dehydration, and low sodium.",
        check: {
          q: "Which everyday drug can precipitate lithium toxicity?",
          options: ["An NSAID", "Acetaminophen", "A proton-pump inhibitor"],
          answer: "An NSAID",
          why: "NSAIDs (like thiazides and ACEi/ARBs) cut renal lithium clearance and raise the level."
        }
      },
      {
        title: "The organ toll",
        teach: "Chronic toxicity clusters at three organs: kidney (nephrogenic diabetes insipidus, CKD), thyroid (hypothyroidism/goiter), and parathyroid (hypercalcemia). Monitor renal and thyroid function.",
        check: {
          q: "Which trio of organs does chronic lithium threaten?",
          options: ["Kidney, thyroid, parathyroid", "Liver, marrow, skin", "Heart, lungs, pancreas"],
          answer: "Kidney, thyroid, parathyroid",
          why: "Nephrogenic DI/CKD, hypothyroidism, and hypercalcemia are the classic chronic harms."
        }
      },
      {
        title: "In pregnancy",
        teach: "First-trimester lithium is linked to Ebstein anomaly, a tricuspid-valve malformation (absolute risk lower than historically taught). If continued, track levels closely and arrange fetal echocardiography.",
        check: {
          q: "Which cardiac malformation is associated with in-utero lithium?",
          options: ["Ebstein anomaly", "Tetralogy of Fallot", "Coarctation of the aorta"],
          answer: "Ebstein anomaly",
          why: "First-trimester lithium is classically linked to Ebstein anomaly of the tricuspid valve."
        }
      }
    ],
    trap: "Lithium's nephrogenic DI does NOT respond to desmopressin (that's central DI) — amiloride helps instead.",
    takeaway: "Lithium = the anti-suicide gold standard, renally cleared with a narrow 0.6–1.2 window — guard the level and watch kidney, thyroid, parathyroid."
  },

  valproate: {
    hook: "The loadable, broad-spectrum antimanic workhorse — and the worst teratogen of the whole class.",
    steps: [
      {
        title: "What it is",
        teach: "Valproate is an anticonvulsant mood stabilizer — boosts GABA and blocks sodium channels. Broad-spectrum antimanic, good for mixed features and rapid cycling, and loadable for acute mania.",
        check: {
          q: "What is a signature clinical strength of valproate?",
          options: ["Loadable, broad-spectrum antimanic agent", "Best agent for bipolar depression", "The safest choice in pregnancy"],
          answer: "Loadable, broad-spectrum antimanic agent",
          why: "It can be loaded for acute mania and covers mixed/rapid-cycling presentations."
        }
      },
      {
        title: "Never in pregnancy",
        teach: "Valproate is the MOST teratogenic mood stabilizer: neural-tube defects (spina bifida) plus the LOWEST childhood IQ and increased autism. Avoid in anyone who can become pregnant.",
        check: {
          q: "Why avoid valproate in people who can become pregnant?",
          options: ["Neural-tube defects and lowest fetal IQ", "It causes contraceptive failure only", "It is ineffective in bipolar disorder"],
          answer: "Neural-tube defects and lowest fetal IQ",
          why: "Valproate carries the highest NTD risk and the worst neurodevelopmental/IQ harm."
        }
      },
      {
        title: "Doubles lamotrigine",
        teach: "Valproate inhibits glucuronidation, roughly DOUBLING the lamotrigine level. Always halve the lamotrigine dose when co-prescribing — otherwise you risk Stevens–Johnson syndrome.",
        check: {
          q: "What happens to lamotrigine when valproate is added?",
          options: ["Its level roughly doubles", "Its level roughly halves", "It is unchanged"],
          answer: "Its level roughly doubles",
          why: "Valproate inhibits lamotrigine glucuronidation — halve the lamotrigine dose to avoid SJS."
        }
      },
      {
        title: "Liver & ammonia",
        teach: "Boxed warning: hepatotoxicity that can be fatal (highest risk <2 y and polytherapy). Beware hyperammonemic encephalopathy — it can occur even with NORMAL liver enzymes, so check an ammonia level.",
        check: {
          q: "Encephalopathy on valproate with normal LFTs — what should you check?",
          options: ["Serum ammonia", "Serum lithium", "TSH"],
          answer: "Serum ammonia",
          why: "Hyperammonemic encephalopathy can occur with normal LFTs — check ammonia, not just LFTs."
        }
      },
      {
        title: "The level",
        teach: "Target a trough of 350–700 µmol/L (SI) / 50–100 µg/mL (conventional); acute mania is sometimes pushed toward the upper end. It is highly protein-bound and a CYP2C9/UGT inhibitor.",
        check: {
          q: "What is valproate's conventional therapeutic range?",
          options: ["50–100 µg/mL", "4–12 µg/mL", "0.6–1.2 µg/mL"],
          answer: "50–100 µg/mL",
          why: "350–700 µmol/L SI equals 50–100 µg/mL conventional; draw a trough."
        }
      }
    ],
    trap: "Valproate INHIBITS enzymes and RAISES lamotrigine; carbamazepine INDUCES enzymes and LOWERS it — mirror opposites.",
    takeaway: "Valproate = loadable broad antimanic (50–100 µg/mL), but the worst teratogen, potentially hepatotoxic, and it doubles lamotrigine."
  },

  carbamazepine: {
    hook: "The enzyme-inducing sodium-channel blocker that speeds up its own metabolism — and defeats the pill.",
    steps: [
      {
        title: "What it is",
        teach: "Carbamazepine is an anticonvulsant that blocks voltage-gated sodium channels in a use-dependent way. It is structurally tricyclic (related to TCAs), which matters in overdose.",
        check: {
          q: "What is carbamazepine's core mechanism?",
          options: ["Use-dependent sodium-channel blockade", "Serotonin reuptake inhibition", "Dopamine D2 antagonism"],
          answer: "Use-dependent sodium-channel blockade",
          why: "It stabilizes hyperexcitable membranes via use-dependent Na-channel block."
        }
      },
      {
        title: "HLA-B*1502 & SJS",
        teach: "Boxed warning: serious, sometimes fatal skin reactions (SJS/TEN). Screen for HLA-B*1502 before starting in patients of Han Chinese or Southeast Asian ancestry — it strongly predicts SJS/TEN.",
        check: {
          q: "Which allele should be screened before carbamazepine in at-risk ancestry?",
          options: ["HLA-B*1502", "HLA-B27", "BRCA1"],
          answer: "HLA-B*1502",
          why: "HLA-B*1502 strongly predicts carbamazepine SJS/TEN in Asian populations."
        }
      },
      {
        title: "Autoinduction",
        teach: "Carbamazepine is a potent CYP3A4 inducer that speeds up its OWN metabolism, so the level drops over the first 2–4 weeks. Recheck the level at ~1 month and re-titrate.",
        check: {
          q: "Why recheck the carbamazepine level at about one month?",
          options: ["Autoinduction lowers its own level", "The kidney clears it faster over time", "It binds more protein over time"],
          answer: "Autoinduction lowers its own level",
          why: "It induces its own CYP3A4 metabolism, so levels fall over 2–4 weeks."
        }
      },
      {
        title: "Defeats the pill",
        teach: "As a broad 3A4 inducer it lowers many drug levels — a classic cause of oral-contraceptive FAILURE (use a non-hormonal method) and subtherapeutic warfarin.",
        check: {
          q: "Why can an oral contraceptive fail on carbamazepine?",
          options: ["CYP3A4 induction lowers hormone levels", "It displaces protein binding", "It blocks estrogen receptors"],
          answer: "CYP3A4 induction lowers hormone levels",
          why: "Potent 3A4 induction drops contraceptive hormone levels — use a non-hormonal method."
        }
      },
      {
        title: "Sodium, marrow & level",
        teach: "Watch for hyponatremia/SIADH and for agranulocytosis/aplastic anemia. Therapeutic level is 17–51 µmol/L (SI) / 4–12 µg/mL (conventional).",
        check: {
          q: "What is carbamazepine's conventional therapeutic range?",
          options: ["4–12 µg/mL", "50–100 µg/mL", "0.6–1.2 µg/mL"],
          answer: "4–12 µg/mL",
          why: "17–51 µmol/L SI equals 4–12 µg/mL conventional."
        }
      }
    ],
    trap: "Carbamazepine (potent autoinducer, agranulocytosis, HLA-B*1502) vs oxcarbazepine (weaker inducer, no active epoxide, MORE hyponatremia).",
    takeaway: "Carbamazepine = autoinducing Na-blocker (4–12 µg/mL): screen HLA-B*1502 for SJS, recheck the level at ~1 month, and expect OCP failure and hyponatremia."
  },

  lamotrigine: {
    hook: "The go-to for bipolar depression and maintenance — pregnancy-safer, but titrate slowly or risk SJS.",
    steps: [
      {
        title: "What it is",
        teach: "Lamotrigine blocks sodium channels and cuts presynaptic glutamate release. Its niche is bipolar DEPRESSION and MAINTENANCE — it is NOT effective for acute mania.",
        check: {
          q: "What is lamotrigine's main bipolar role?",
          options: ["Bipolar depression and maintenance", "Acute mania", "Rapid loading in agitation"],
          answer: "Bipolar depression and maintenance",
          why: "It prevents depressive relapse; it does not treat acute mania."
        }
      },
      {
        title: "Slow titration = SJS shield",
        teach: "Boxed warning: serious rash including SJS/TEN. The slow titration exists precisely to prevent it — never front-load, and restart from the beginning after a gap of more than 5 days.",
        check: {
          q: "Why is lamotrigine titrated so slowly?",
          options: ["To prevent Stevens–Johnson syndrome", "To reach a therapeutic level faster", "To avoid renal toxicity"],
          answer: "To prevent Stevens–Johnson syndrome",
          why: "Fast titration is the key driver of SJS/TEN — go slow."
        }
      },
      {
        title: "Valproate halves the dose",
        teach: "Valproate doubles the lamotrigine level by inhibiting glucuronidation, so you HALVE the lamotrigine dose (e.g., 25 mg every other day). Inducers and estrogen-containing OCPs lower it instead.",
        check: {
          q: "Adding valproate to lamotrigine means you should…",
          options: ["Halve the lamotrigine dose", "Double the lamotrigine dose", "Leave the dose unchanged"],
          answer: "Halve the lamotrigine dose",
          why: "Valproate doubles the level, so halve the dose to avoid SJS."
        }
      },
      {
        title: "Pregnancy-safer",
        teach: "Lamotrigine is comparatively pregnancy-SAFER, with no consistent major teratogenic signal — often preferred for maintenance. But levels fall markedly in pregnancy (increase antenatally) and must be reduced postpartum.",
        check: {
          q: "How do lamotrigine levels behave in pregnancy?",
          options: ["They fall (may need a dose increase)", "They rise (need a dose cut)", "They stay constant"],
          answer: "They fall (may need a dose increase)",
          why: "Levels drop antenatally — increase then, and reduce postpartum."
        }
      },
      {
        title: "No routine level",
        teach: "Lamotrigine is cleared by glucuronidation (UGT), not CYP, and there is NO routine serum level to monitor — you dose by titration schedule and clinical response.",
        check: {
          q: "Do you routinely check a lamotrigine serum level?",
          options: ["No — there is no routine level", "Yes — a 12-hour trough", "Yes — target 4–12 µg/mL"],
          answer: "No — there is no routine level",
          why: "There is no routine therapeutic level for lamotrigine."
        }
      }
    ],
    trap: "Valproate RAISES lamotrigine (halve the dose); carbamazepine and estrogen-containing OCPs LOWER it — opposite directions.",
    takeaway: "Lamotrigine = bipolar depression/maintenance, pregnancy-safer, no routine level — titrate slowly to dodge SJS and halve the dose with valproate."
  },

  oxcarbazepine: {
    hook: "Carbamazepine's better-tolerated cousin — fewer blood problems, but more hyponatremia and weaker mood evidence.",
    steps: [
      {
        title: "What it is",
        teach: "Oxcarbazepine is the keto-analog of carbamazepine — a prodrug reduced to the active MHD. It bypasses the carbamazepine epoxide pathway, so it is better tolerated with far less marrow monitoring.",
        check: {
          q: "Why is oxcarbazepine better tolerated than carbamazepine?",
          options: ["No active epoxide, less marrow toxicity", "It is renally cleared, not hepatic", "It has a wider therapeutic index measured by levels"],
          answer: "No active epoxide, less marrow toxicity",
          why: "It skips the epoxide metabolite, so fewer blood dyscrasias and less monitoring."
        }
      },
      {
        title: "More hyponatremia",
        teach: "Clinically significant hyponatremia/SIADH is MORE common than with carbamazepine — check sodium, especially early and in the elderly or diuretic users.",
        check: {
          q: "Compared with carbamazepine, oxcarbazepine causes hyponatremia…",
          options: ["More often", "Less often", "Never"],
          answer: "More often",
          why: "Hyponatremia is more frequent with oxcarbazepine — monitor sodium."
        }
      },
      {
        title: "Lighter but weaker",
        teach: "It has little autoinduction and a lighter interaction burden than carbamazepine, but the mood-stabilizer evidence is weak — it is off-label and NOT first-line. Contraceptive efficacy can still fall.",
        check: {
          q: "How strong is oxcarbazepine's evidence as a mood stabilizer?",
          options: ["Weak — off-label, not first-line", "Strong — first-line for mania", "Equal to lithium"],
          answer: "Weak — off-label, not first-line",
          why: "Its mood-stabilizing evidence is weak; it is used off-label, not first-line."
        }
      },
      {
        title: "Cross-reactivity",
        teach: "About a quarter of patients allergic to carbamazepine will cross-react with oxcarbazepine, and it shares the HLA-B*1502-associated SJS/TEN risk.",
        check: {
          q: "Roughly what fraction of carbamazepine-allergic patients cross-react with oxcarbazepine?",
          options: ["About a quarter", "Essentially none", "Nearly all"],
          answer: "About a quarter",
          why: "~25% cross-react, and the HLA-B*1502 SJS risk is shared."
        }
      }
    ],
    trap: "Oxcarbazepine (more hyponatremia, no epoxide, weaker mood evidence) vs carbamazepine (potent autoinducer, agranulocytosis/aplastic anemia).",
    takeaway: "Oxcarbazepine = a cleaner carbamazepine — fewer blood dyscrasias and less autoinduction, but MORE hyponatremia and weaker mood-stabilizer evidence."
  },

  gabapentin: {
    hook: "Despite the name it never touches GABA receptors — and it is NOT a real mood stabilizer.",
    steps: [
      {
        title: "Mechanism & role",
        teach: "Gabapentin binds the α2δ subunit of voltage-gated calcium channels, reducing excitatory transmitter release — it does NOT act at GABA receptors. Bipolar RCTs are negative; it is an adjunct for anxiety, sleep, or pain.",
        check: {
          q: "Where does gabapentin act?",
          options: ["The α2δ calcium-channel subunit", "GABA-A receptors", "The serotonin transporter"],
          answer: "The α2δ calcium-channel subunit",
          why: "It is an α2δ calcium-channel ligand — no GABA-receptor activity despite the name."
        }
      },
      {
        title: "Renal, no CYP",
        teach: "Gabapentin is excreted UNCHANGED by the kidney with no CYP metabolism, giving a clean interaction profile. Its absorption is saturable/nonlinear (dosed TID), so bioavailability falls at higher doses.",
        check: {
          q: "How is gabapentin eliminated?",
          options: ["Renally, unchanged (no CYP)", "Hepatic CYP3A4 metabolism", "Glucuronidation"],
          answer: "Renally, unchanged (no CYP)",
          why: "It is cleared renally without CYP — clean interactions but dose-adjust in renal impairment."
        }
      },
      {
        title: "Misuse & opioids",
        teach: "Gabapentin has recognized misuse/dependence potential (increasingly monitored) and can cause respiratory depression when combined with opioids or other CNS depressants.",
        check: {
          q: "What sharply raises overdose risk with gabapentin?",
          options: ["Co-administered opioids/CNS depressants", "Taking it with food", "An NSAID"],
          answer: "Co-administered opioids/CNS depressants",
          why: "Additive respiratory depression with opioids/CNS depressants is the key hazard."
        }
      }
    ],
    trap: "Gabapentin and pregabalin are α2δ calcium-channel ligands — NOT GABA drugs, despite the name.",
    takeaway: "Gabapentin = a renally cleared α2δ ligand with no CYP interactions — an anxiety/sleep/pain adjunct with misuse potential, NOT a bipolar mood stabilizer."
  },

  pregabalin: {
    hook: "Gabapentin's more potent, predictable cousin — a genuine anxiolytic, not a mood stabilizer.",
    steps: [
      {
        title: "Mechanism & role",
        teach: "Pregabalin binds the α2δ calcium-channel subunit like gabapentin, but is more potent with linear kinetics. It has GAD approval (Europe) and real anti-anxiety efficacy — but it is an anxiolytic, NOT a bipolar mood stabilizer.",
        check: {
          q: "What is pregabalin's legitimate psychiatric role?",
          options: ["Generalized anxiety (anxiolytic)", "Acute mania", "Bipolar maintenance"],
          answer: "Generalized anxiety (anxiolytic)",
          why: "It is GAD-approved in Europe as an anxiolytic — not a mood stabilizer."
        }
      },
      {
        title: "Renal & linear",
        teach: "Pregabalin is excreted essentially unchanged by the kidney with no CYP, and its kinetics are linear and predictable — more reliable absorption than gabapentin.",
        check: {
          q: "How is pregabalin cleared?",
          options: ["Renally, unchanged, with linear kinetics", "Hepatic CYP2D6", "Biliary excretion"],
          answer: "Renally, unchanged, with linear kinetics",
          why: "Clean renal clearance and linear PK make it more predictable than gabapentin."
        }
      },
      {
        title: "Misuse & opioids",
        teach: "Pregabalin carries recognized misuse/dependence potential (scheduled/controlled in several jurisdictions) and can cause respiratory depression with opioids or CNS depressants.",
        check: {
          q: "What is a key safety concern with pregabalin?",
          options: ["Misuse plus respiratory depression with opioids", "Nephrogenic diabetes insipidus", "Autoinduction"],
          answer: "Misuse plus respiratory depression with opioids",
          why: "It has misuse potential and additive respiratory depression with opioids/CNS depressants."
        }
      }
    ],
    trap: "Pregabalin has linear kinetics and is more potent; gabapentin has nonlinear, saturable absorption — same α2δ mechanism, different PK.",
    takeaway: "Pregabalin = a potent, renally cleared α2δ ligand with GAD approval — an anxiolytic with misuse potential, NOT a mood stabilizer."
  },

  topiramate: {
    hook: "The weight-LOSS anticonvulsant ('dopamax') — used to offset drug-induced weight gain, not as a real mood stabilizer.",
    steps: [
      {
        title: "Its real role",
        teach: "Topiramate is NOT a primary mood stabilizer. It is used for weight mitigation, migraine prophylaxis, and off-label for alcohol-use and binge-eating disorders.",
        check: {
          q: "How is topiramate best classified for bipolar disorder?",
          options: ["Not a primary mood stabilizer", "First-line antimanic", "First-line for bipolar depression"],
          answer: "Not a primary mood stabilizer",
          why: "It is an adjunct (weight/migraine/AUD), not a primary mood stabilizer."
        }
      },
      {
        title: "Weight LOSS",
        teach: "Unlike lithium and valproate (which cause weight GAIN), topiramate causes weight LOSS and anorexia — which is exactly why it is added to offset drug-induced weight gain.",
        check: {
          q: "What is topiramate's signature metabolic effect?",
          options: ["Weight loss", "Weight gain", "Weight neutral"],
          answer: "Weight loss",
          why: "Topiramate causes weight loss — the opposite of lithium/valproate."
        }
      },
      {
        title: "'Dopamax'",
        teach: "Cognitive slowing and word-finding difficulty (the 'dopamax' nickname), plus paresthesia, are the classic day-to-day complaints that limit dosing.",
        check: {
          q: "What cognitive side effect earns topiramate the 'dopamax' nickname?",
          options: ["Word-finding difficulty / cognitive slowing", "Vivid dreams", "Euphoria"],
          answer: "Word-finding difficulty / cognitive slowing",
          why: "Cognitive dulling and word-finding trouble are the hallmark 'dopamax' effect."
        }
      },
      {
        title: "The CA-inhibitor cluster",
        teach: "Weak carbonic-anhydrase inhibition unifies a cluster: paresthesia, non-anion-gap metabolic acidosis, calcium-phosphate kidney STONES, and idiosyncratic acute angle-closure glaucoma. In pregnancy it causes oral clefts and reduces OCP efficacy.",
        check: {
          q: "Which serious harm follows from topiramate's carbonic-anhydrase inhibition?",
          options: ["Calcium-phosphate kidney stones", "Nephrogenic diabetes insipidus", "Agranulocytosis"],
          answer: "Calcium-phosphate kidney stones",
          why: "CA inhibition drives stones (plus acidosis, paresthesia, and angle-closure glaucoma)."
        }
      }
    ],
    trap: "Topiramate = weight LOSS; lithium, valproate, gabapentin, and pregabalin all cause weight GAIN.",
    takeaway: "Topiramate = the weight-LOSS, carbonic-anhydrase-inhibiting adjunct (stones, acidosis, glaucoma, 'dopamax') — not a mood stabilizer."
  }
};
