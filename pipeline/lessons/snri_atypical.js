export default {
  venlafaxine: {
    hook: "The prototype SNRI: serotonergic when low, noradrenergic when pushed — and the messiest to stop.",
    steps: [
      {
        title: "What it is",
        teach: "Venlafaxine is an SNRI — it blocks SERT and NET. It's mainly serotonergic at low doses; the noradrenergic effect is dose-dependent and only emerges above ~150 mg/day.",
        check: {
          q: "When does venlafaxine's noradrenergic effect kick in?",
          options: ["At any dose", "Only above ~150 mg/day", "Never — it's purely serotonergic"],
          answer: "Only above ~150 mg/day",
          why: "The NE reuptake block is dose-dependent, emerging above ~150 mg/day."
        }
      },
      {
        title: "Watch the blood pressure",
        teach: "Because the noradrenergic effect is dose-dependent, venlafaxine causes dose-dependent, sustained hypertension. Check blood pressure as you titrate above ~150 mg/day.",
        check: {
          q: "What must you monitor as you push venlafaxine higher?",
          options: ["Blood pressure", "Serum lithium level", "Liver enzymes only"],
          answer: "Blood pressure",
          why: "Venlafaxine causes dose-dependent hypertension — monitor BP on titration."
        }
      },
      {
        title: "Worst discontinuation",
        teach: "Its very short half-life (~5 h; active metabolite ~11 h) gives venlafaxine the worst discontinuation syndrome of the antidepressants. Never stop it abruptly — taper.",
        check: {
          q: "Why does venlafaxine have the worst discontinuation syndrome?",
          options: ["Very short half-life", "It's stored in fat for months", "It has no active metabolite"],
          answer: "Very short half-life",
          why: "A short half-life means levels crash fast when stopped — worst-in-class withdrawal."
        }
      },
      {
        title: "Overdose danger",
        teach: "Venlafaxine is more dangerous than SSRIs in overdose — think seizures and cardiotoxicity. It's also contraindicated with MAOIs (serotonin syndrome).",
        check: {
          q: "Compared with SSRIs, venlafaxine in overdose is:",
          options: ["More dangerous (seizures, cardiotoxicity)", "Completely inert", "Identical risk"],
          answer: "More dangerous (seizures, cardiotoxicity)",
          why: "Venlafaxine overdose carries seizure and cardiotoxicity risk beyond SSRIs."
        }
      }
    ],
    trap: "Don't confuse venlafaxine with desvenlafaxine — desvenlafaxine IS venlafaxine's active metabolite, and it bypasses the CYP2D6 step.",
    takeaway: "Venlafaxine = the SNRI prototype: dose-dependent NE effect and hypertension, shortest half-life → worst discontinuation, riskier in overdose."
  },

  desvenlafaxine: {
    hook: "Venlafaxine's active metabolite in a bottle — the metabolically clean, no-titration SNRI.",
    steps: [
      {
        title: "What it is",
        teach: "Desvenlafaxine is an SNRI (blocks SERT and NET) and is literally the major active metabolite of venlafaxine (O-desmethylvenlafaxine).",
        check: {
          q: "Desvenlafaxine is:",
          options: ["Venlafaxine's active metabolite", "A tricyclic antidepressant", "An MAOI"],
          answer: "Venlafaxine's active metabolite",
          why: "Desvenlafaxine is O-desmethylvenlafaxine, venlafaxine's downstream active metabolite."
        }
      },
      {
        title: "Metabolically clean",
        teach: "It's cleared mainly by glucuronidation (UGT) with essentially no CYP2D6 dependence — so levels are predictable and interactions few. Handy in CYP2D6 poor metabolizers or patients on 2D6 inhibitors.",
        check: {
          q: "Why is desvenlafaxine chosen to avoid CYP2D6 variability?",
          options: ["It's cleared mainly by glucuronidation, not 2D6", "It's not metabolized at all", "It strongly induces 2D6"],
          answer: "It's cleared mainly by glucuronidation, not 2D6",
          why: "Bypassing the 2D6 step gives predictable kinetics and few interactions."
        }
      },
      {
        title: "Flat dosing",
        teach: "Dose-response is flat: 50 mg/day is both the start and the target for most patients. Going higher mostly adds side effects, not benefit. It's still an SNRI, so BP rise and discontinuation still apply.",
        check: {
          q: "What's the usual target dose of desvenlafaxine?",
          options: ["50 mg/day", "150 mg/day", "It must be titrated to 300 mg"],
          answer: "50 mg/day",
          why: "Flat dose-response — 50 mg is start and target; higher just adds side effects."
        }
      }
    ],
    trap: "Same molecule as venlafaxine downstream — the point of desvenlafaxine is that it skips the 2D6 conversion step.",
    takeaway: "Desvenlafaxine = the clean SNRI: minimal CYP metabolism, predictable levels, flat 50 mg dosing — still an SNRI (BP, discontinuation)."
  },

  duloxetine: {
    hook: "The SNRI that treats the pain too — but keep it away from a sick liver.",
    steps: [
      {
        title: "What it is",
        teach: "Duloxetine is an SNRI (blocks SERT and NET) with a relatively balanced 5-HT/NE effect. That noradrenergic action also drives analgesia — pain relief can precede mood benefit.",
        check: {
          q: "What partly mediates duloxetine's analgesic effect?",
          options: ["Its noradrenergic (NET) action", "Dopamine D2 blockade", "Histamine H1 blockade"],
          answer: "Its noradrenergic (NET) action",
          why: "The NE reuptake block underlies duloxetine's analgesia."
        }
      },
      {
        title: "The pain niche",
        teach: "Duloxetine has formal chronic-pain indications: diabetic neuropathy, fibromyalgia, and chronic musculoskeletal pain. It's the SNRI to reach for when depression coexists with these.",
        check: {
          q: "Depression plus diabetic neuropathy — which SNRI fits best?",
          options: ["Duloxetine", "Desvenlafaxine", "Levomilnacipran"],
          answer: "Duloxetine",
          why: "Duloxetine carries the neuropathic/fibromyalgia pain indications."
        }
      },
      {
        title: "Spare the liver",
        teach: "Duloxetine can cause hepatotoxicity — avoid it in hepatic disease or substantial alcohol use.",
        check: {
          q: "Which SNRI is avoided in liver disease / heavy alcohol use?",
          options: ["Duloxetine", "Venlafaxine", "Desvenlafaxine"],
          answer: "Duloxetine",
          why: "Duloxetine's hepatotoxicity risk makes it a poor choice with liver disease or heavy drinking."
        }
      },
      {
        title: "CYP1A2 quirk",
        teach: "Duloxetine is a CYP1A2 substrate: smoking (a 1A2 inducer) lowers its levels, while fluvoxamine (a potent 1A2 inhibitor) dangerously raises them.",
        check: {
          q: "What happens to duloxetine levels with fluvoxamine (a potent CYP1A2 inhibitor)?",
          options: ["Rise dangerously", "Fall to zero", "Unchanged"],
          answer: "Rise dangerously",
          why: "Inhibiting CYP1A2 slows duloxetine clearance, raising levels."
        }
      }
    ],
    trap: "Duloxetine vs venlafaxine: duloxetine owns the pain indications plus a hepatotoxicity/CYP1A2 profile; venlafaxine is the BP/discontinuation one.",
    takeaway: "Duloxetine = the balanced SNRI with real pain indications — but hepatotoxic (avoid in liver disease) and CYP1A2-sensitive."
  },

  levomilnacipran: {
    hook: "The SNRI that leans hardest on norepinephrine — flip the usual 5-HT > NE ratio.",
    steps: [
      {
        title: "What it is",
        teach: "Levomilnacipran is an SNRI and the active enantiomer of milnacipran. Uniquely, it's MORE noradrenergic — greater potency at NET than SERT, the reverse of most SNRIs.",
        check: {
          q: "Which is the most noradrenergic SNRI (NET > SERT)?",
          options: ["Levomilnacipran", "Duloxetine", "Desvenlafaxine"],
          answer: "Levomilnacipran",
          why: "Levomilnacipran's NET potency exceeds SERT — the most noradrenergic SNRI."
        }
      },
      {
        title: "Noradrenergic side effects",
        teach: "Because it's NE-predominant, expect more tachycardia/palpitations, blood-pressure rise, and urinary hesitancy than the serotonergic-leaning SNRIs.",
        check: {
          q: "Which side effect fits its noradrenergic profile?",
          options: ["Urinary hesitancy / tachycardia", "Profound sedation", "Weight gain"],
          answer: "Urinary hesitancy / tachycardia",
          why: "Noradrenergic drive raises heart rate/BP and causes urinary hesitancy."
        }
      },
      {
        title: "CYP3A4 substrate",
        teach: "It's metabolized by CYP3A4 — cap the dose with strong 3A4 inhibitors (e.g., ketoconazole) and in renal impairment.",
        check: {
          q: "A strong CYP3A4 inhibitor with levomilnacipran means you should:",
          options: ["Cap the dose", "Double the dose", "Ignore it"],
          answer: "Cap the dose",
          why: "3A4 inhibition raises levels, so the dose is capped."
        }
      }
    ],
    trap: "Levomilnacipran (for MDD) vs milnacipran (marketed for fibromyalgia) — enantiomer vs racemate.",
    takeaway: "Levomilnacipran = the noradrenergic-predominant SNRI (NET > SERT): more tachycardia/BP/urinary hesitancy; CYP3A4 substrate with dose caps."
  },

  bupropion: {
    hook: "The dopaminergic outlier: activating, weight-neutral, no sexual side effects — but it drops the seizure floor.",
    steps: [
      {
        title: "What it is",
        teach: "Bupropion is an NDRI — it blocks NET and DAT (norepinephrine and dopamine reuptake) with NO direct serotonergic activity. It's also a nicotinic antagonist, the basis for smoking cessation (Zyban).",
        check: {
          q: "Bupropion's mechanism is best described as:",
          options: ["Norepinephrine-dopamine reuptake inhibitor (NDRI)", "SSRI", "MAO-A inhibitor"],
          answer: "Norepinephrine-dopamine reuptake inhibitor (NDRI)",
          why: "Bupropion blocks NET and DAT with no serotonergic action — an NDRI."
        }
      },
      {
        title: "The signature win",
        teach: "No sexual dysfunction and no weight gain (often weight loss) — so it's favoured when those SSRI effects are limiting, and used to augment SSRI-induced sexual dysfunction. No serotonergic activity also means no serotonin syndrome from bupropion alone.",
        check: {
          q: "Which antidepressant is known for NO sexual dysfunction and no weight gain?",
          options: ["Bupropion", "Paroxetine", "Mirtazapine"],
          answer: "Bupropion",
          why: "Bupropion is weight-neutral/weight-loss and lacks sexual side effects."
        }
      },
      {
        title: "The seizure trap",
        teach: "Bupropion lowers the seizure threshold (dose-dependent seizures). It's CONTRAINDICATED in seizure disorders, in eating disorders (bulimia/anorexia), and with abrupt alcohol or benzodiazepine withdrawal.",
        check: {
          q: "Bupropion is contraindicated in which patient?",
          options: ["Bulimia / seizure disorder", "Diabetic neuropathy", "Insomnia"],
          answer: "Bulimia / seizure disorder",
          why: "It lowers seizure threshold — contraindicated in eating and seizure disorders."
        }
      },
      {
        title: "Activating + 2D6",
        teach: "It's energizing and can worsen anxiety and insomnia (dose in the morning). Bupropion and its metabolite are also potent CYP2D6 inhibitors, raising drugs like TCAs, metoprolol, and risperidone.",
        check: {
          q: "Bupropion is a potent inhibitor of which enzyme?",
          options: ["CYP2D6", "CYP3A4", "UGT"],
          answer: "CYP2D6",
          why: "Bupropion and hydroxybupropion strongly inhibit CYP2D6."
        }
      }
    ],
    trap: "Bupropion (NDRI, activating, no sexual SE) vs buspirone (a 5-HT1A partial agonist anxiolytic) — sound-alike but unrelated.",
    takeaway: "Bupropion = activating, weight-neutral, no sexual dysfunction, no serotonin syndrome — but lowers seizure threshold (avoid in seizure/eating disorders)."
  },

  mirtazapine: {
    hook: "Not a reuptake inhibitor — an α2 blocker that's paradoxically MORE sedating at LOW doses.",
    steps: [
      {
        title: "What it is",
        teach: "Mirtazapine is a NaSSA: a presynaptic α2-adrenergic antagonist that increases NE and 5-HT release. It also blocks 5-HT2A/2C/3 and is a potent H1 antihistamine — it is NOT a reuptake inhibitor.",
        check: {
          q: "Mirtazapine works primarily by:",
          options: ["Blocking presynaptic α2 receptors", "Blocking serotonin reuptake (SERT)", "Inhibiting MAO"],
          answer: "Blocking presynaptic α2 receptors",
          why: "It's a NaSSA — α2 antagonism boosts NE and 5-HT release, not reuptake block."
        }
      },
      {
        title: "The low-dose paradox",
        teach: "Sedation and appetite/weight gain are WORSE at LOW doses. The potent H1 antihistamine effect dominates until higher doses add offsetting noradrenergic drive.",
        check: {
          q: "Mirtazapine's sedation is generally:",
          options: ["Worse at LOW doses", "Worse at HIGH doses", "Dose-independent"],
          answer: "Worse at LOW doses",
          why: "At low doses H1 antihistamine sedation dominates; higher doses add activating NE tone."
        }
      },
      {
        title: "Best niche",
        teach: "Great for depression with insomnia, poor appetite, or weight loss/cachexia. Its 5-HT3 blockade is antiemetic and means less nausea and less sexual dysfunction than SSRIs.",
        check: {
          q: "Mirtazapine is a strong pick for depression with:",
          options: ["Insomnia and poor appetite", "Agitation you want to sedate less", "Diabetic neuropathy"],
          answer: "Insomnia and poor appetite",
          why: "Sedation plus appetite stimulation target insomnia and poor appetite directly."
        }
      },
      {
        title: "Rare but serious",
        teach: "Mirtazapine can rarely cause agranulocytosis/neutropenia. Tell patients to report fever or sore throat.",
        check: {
          q: "Which rare serious effect warrants warning about fever/sore throat?",
          options: ["Agranulocytosis", "Priapism", "Hepatotoxicity"],
          answer: "Agranulocytosis",
          why: "Rare agranulocytosis can present as fever/sore throat."
        }
      }
    ],
    trap: "Remember the counterintuitive rule: mirtazapine's sedation and appetite effects are strongest at LOW dose, not high.",
    takeaway: "Mirtazapine = α2-antagonist NaSSA: sedation + appetite (worse at LOW dose), antiemetic, low sexual dysfunction, rare agranulocytosis."
  },

  trazodone: {
    hook: "The sedating SARI mostly used as a sleep aid — and the antidepressant that can cause priapism.",
    steps: [
      {
        title: "What it is",
        teach: "Trazodone is a SARI: postsynaptic 5-HT2A antagonism plus dose-dependent SERT inhibition. It also blocks α1-adrenergic and H1 receptors, which drives its sedation and orthostatic effects.",
        check: {
          q: "Trazodone's class is:",
          options: ["SARI (serotonin antagonist and reuptake inhibitor)", "SNRI", "NDRI"],
          answer: "SARI (serotonin antagonist and reuptake inhibitor)",
          why: "5-HT2A antagonism plus SERT inhibition defines the SARI class."
        }
      },
      {
        title: "Priapism",
        teach: "The classic board fact: trazodone can cause PRIAPISM (α1 blockade) — a urologic emergency. Warn men to seek emergency care for an erection lasting more than 4 hours.",
        check: {
          q: "Which antidepressant is classically linked to priapism?",
          options: ["Trazodone", "Bupropion", "Duloxetine"],
          answer: "Trazodone",
          why: "Trazodone's α1 blockade can cause priapism — a urologic emergency."
        }
      },
      {
        title: "The sleep drug",
        teach: "In practice it's used mainly as a low-dose hypnotic (25–50 mg at bedtime). Full antidepressant doses are often too sedating and cause orthostatic hypotension (also α1-mediated).",
        check: {
          q: "Trazodone is most often used clinically as a:",
          options: ["Low-dose hypnotic for sleep", "Stimulant", "First-line monotherapy for severe depression"],
          answer: "Low-dose hypnotic for sleep",
          why: "Antidepressant doses are too sedating/orthostatic, so it's mostly a sleep aid."
        }
      }
    ],
    trap: "Trazodone vs nefazodone — both SARIs, but nefazodone carries a hepatotoxicity black-box warning and is rarely used.",
    takeaway: "Trazodone = the sedating SARI hypnotic (5-HT2A/α1/H1 block): signature priapism and orthostatic hypotension; mostly low-dose for sleep."
  },

  vortioxetine: {
    hook: "The multimodal serotonergic — reuptake block PLUS direct receptor tuning, pitched at foggy cognition.",
    steps: [
      {
        title: "What it is",
        teach: "Vortioxetine is a multimodal antidepressant: it inhibits serotonin reuptake (SERT) AND directly modulates 5-HT receptors — 5-HT1A agonism, 5-HT3/5-HT7 antagonism, and more — which sets it apart from a plain SSRI.",
        check: {
          q: "What makes vortioxetine 'multimodal'?",
          options: ["SERT inhibition PLUS direct 5-HT receptor modulation", "It blocks dopamine and histamine only", "It inhibits MAO-A and MAO-B"],
          answer: "SERT inhibition PLUS direct 5-HT receptor modulation",
          why: "It combines reuptake inhibition with direct action at several 5-HT receptors."
        }
      },
      {
        title: "Pro-cognitive claim",
        teach: "Vortioxetine is marketed for the cognitive symptoms of depression — there's some evidence it improves processing speed and executive function, partly independent of mood.",
        check: {
          q: "Which antidepressant is highlighted for cognitive symptoms of depression?",
          options: ["Vortioxetine", "Trazodone", "Venlafaxine"],
          answer: "Vortioxetine",
          why: "Vortioxetine carries pro-cognitive claims in depression."
        }
      },
      {
        title: "Nausea, not sex",
        teach: "Its dominant side effect is dose-dependent nausea. On the upside, sexual dysfunction is lower than with SSRIs.",
        check: {
          q: "Vortioxetine's main dose-dependent side effect is:",
          options: ["Nausea", "Priapism", "Seizures"],
          answer: "Nausea",
          why: "Nausea is the most common, dose-dependent side effect."
        }
      },
      {
        title: "CYP2D6 dosing",
        teach: "It's primarily metabolized by CYP2D6, so poor metabolizers or strong 2D6 inhibitors (bupropion, fluoxetine, paroxetine) raise levels — cap at 10 mg with a strong 2D6 inhibitor.",
        check: {
          q: "With a strong CYP2D6 inhibitor, vortioxetine should be:",
          options: ["Capped (about halved) to 10 mg", "Doubled to 40 mg", "Left unchanged"],
          answer: "Capped (about halved) to 10 mg",
          why: "2D6 inhibition raises levels, so the dose is roughly halved to 10 mg."
        }
      }
    ],
    trap: "Vortioxetine vs vilazodone — both newer serotonergic agents (vilazodone is an SSRI + 5-HT1A partial agonist); different molecules.",
    takeaway: "Vortioxetine = the multimodal serotonergic (reuptake + receptor modulation): long half-life, pro-cognitive pitch, dose-dependent nausea, lower sexual dysfunction."
  }
};
