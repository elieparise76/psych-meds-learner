// SNRI & atypical-antidepressant micro-lessons. Key = molecule id.
// Clinical-first; facts grounded in data/deck.json. Narrated by "Neuro".
export default {
  venlafaxine: {
    hook: "The prototype SNRI — serotonergic low, noradrenergic high; famous for dose-dependent BP and the worst discontinuation syndrome.",
    steps: [
      {
        title: "The big picture",
        teach: "Venlafaxine is the original SNRI and a solid first-line antidepressant. Think of it as an SSRI that grows a noradrenergic kick as you push the dose — more punch than a plain SSRI, but a couple of things to keep an eye on."
      },
      {
        title: "What it treats",
        teach: "It's first-line for major depression (CANMAT), and it also carries broad anxiety approvals — generalized anxiety, social anxiety, and panic disorder. Off-label you'll see it used for PTSD, neuropathic pain, and menopausal hot flashes.",
        check: {
          q: "A patient has depression plus generalized anxiety. Why is venlafaxine a tidy single choice?",
          options: ["It covers both depression and multiple anxiety disorders", "It's a stimulant", "It only treats pain"],
          answer: "It covers both depression and multiple anxiety disorders",
          why: "One SNRI gives broad mood and anxiety coverage."
        }
      },
      {
        title: "When to reach for it",
        teach: "It's a common next step when someone hasn't done well on an SSRI, or when you want that extra noradrenergic drive. The trade-off is that it needs a little more monitoring than a plain SSRI.",
        check: {
          q: "A frequent reason to switch from an SSRI to venlafaxine is:",
          options: ["Wanting dual serotonin + noradrenergic action after SSRI failure", "It has zero side effects", "It's a controlled stimulant"],
          answer: "Wanting dual serotonin + noradrenergic action after SSRI failure",
          why: "Its added noradrenergic effect makes it a logical step up from an SSRI."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — 37.5 to 75 mg of the XR once daily, taken with food to blunt the early nausea. Climb slowly, roughly 75 mg every few days. Most patients land at or below 225 mg XR."
      },
      {
        title: "What patients feel",
        teach: "Early on expect nausea, headache, insomnia, and sweating — diaphoresis is a classic venlafaxine tell. Sexual dysfunction is common too. Taking it with food and easing the dose up helps most people through the first weeks."
      },
      {
        title: "Watch the blood pressure",
        teach: "Here's the signature quirk: the noradrenergic effect is DOSE-DEPENDENT, really emerging above ~150 mg/day, and it brings a dose-dependent, sustained rise in blood pressure. Check BP at baseline and at every dose increase.",
        check: {
          q: "What must you monitor as you titrate venlafaxine higher?",
          options: ["Blood pressure", "Serum lithium level", "Liver enzymes only"],
          answer: "Blood pressure",
          why: "The noradrenergic effect drives dose-dependent hypertension — monitor BP on titration."
        }
      },
      {
        title: "Worst to stop",
        teach: "Its very short half-life gives venlafaxine the worst discontinuation syndrome of the antidepressants — dizziness, flu-like symptoms, and \"brain zaps.\" Even a missed dose can trigger it, so never stop abruptly. Always taper.",
        check: {
          q: "Why does venlafaxine have the worst discontinuation syndrome of the class?",
          options: ["Its very short half-life", "It's stored in fat for months", "It has no active metabolite"],
          answer: "Its very short half-life",
          why: "A short half-life means levels crash quickly when doses are missed or stopped."
        }
      },
      {
        title: "Danger in overdose",
        teach: "Unlike the very safe SSRIs, venlafaxine is more dangerous in overdose — think seizures and cardiotoxicity. And like all serotonergic antidepressants, it's contraindicated with MAOIs because of serotonin syndrome."
      }
    ],
    trap: "Don't confuse venlafaxine with desvenlafaxine — desvenlafaxine IS venlafaxine's active metabolite, and it skips the CYP2D6 step.",
    takeaway: "Venlafaxine = the SNRI prototype: dose-dependent noradrenergic effect and hypertension, shortest half-life → worst discontinuation, riskier in overdose."
  },

  desvenlafaxine: {
    hook: "Venlafaxine's active metabolite in a bottle — the metabolically clean, flat-dose SNRI that needs no titration.",
    steps: [
      {
        title: "The big picture",
        teach: "Desvenlafaxine is an SNRI, and here's the neat part: it's literally the major active metabolite of venlafaxine (O-desmethylvenlafaxine). So it acts a lot like venlafaxine — but with much cleaner, more predictable handling by the body."
      },
      {
        title: "What it treats",
        teach: "It's first-line for major depression (CANMAT). Off-label you'll see it used for menopausal hot flashes and generalized anxiety. A straightforward SNRI, just simpler to dose than its parent."
      },
      {
        title: "Simple dosing",
        teach: "Dose-response is flat: 50 mg once daily is BOTH the start and the target for most patients — no titration needed. Going higher mostly adds side effects, not benefit.",
        check: {
          q: "What's the usual dose of desvenlafaxine?",
          options: ["50 mg/day — start and target", "150 mg/day after titration", "Titrate to 300 mg"],
          answer: "50 mg/day — start and target",
          why: "Flat dose-response means 50 mg is both start and target; higher just adds side effects."
        }
      },
      {
        title: "Metabolically clean",
        teach: "Because it's already the metabolite, it's cleared mainly by glucuronidation and barely touches CYP2D6. That means predictable levels and few interactions — handy in CYP2D6 poor metabolizers or patients on a 2D6 inhibitor.",
        check: {
          q: "Why is desvenlafaxine a good pick to sidestep CYP2D6 variability?",
          options: ["It's cleared mainly by glucuronidation, bypassing 2D6", "It isn't metabolized at all", "It strongly induces 2D6"],
          answer: "It's cleared mainly by glucuronidation, bypassing 2D6",
          why: "Skipping the 2D6 step gives predictable kinetics and few drug interactions."
        }
      },
      {
        title: "Still an SNRI",
        teach: "Don't let the clean profile fool you — it's every bit an SNRI. The dose-dependent blood-pressure rise and the discontinuation syndrome still apply, so check BP and never stop it abruptly.",
        check: {
          q: "Which venlafaxine-class cautions still apply to desvenlafaxine?",
          options: ["BP rise and discontinuation syndrome", "None — it's side-effect free", "Only anticholinergic effects"],
          answer: "BP rise and discontinuation syndrome",
          why: "It's still an SNRI, so hypertension and discontinuation risk carry over."
        }
      },
      {
        title: "One quick reassurance",
        teach: "Patients sometimes panic when they spot a tablet shell in the stool — reassure them the drug is fully absorbed; only the empty shell passes through. Counsel to take it at the same time each day."
      }
    ],
    trap: "Same molecule as venlafaxine downstream — the whole point of desvenlafaxine is that it skips the 2D6 conversion step.",
    takeaway: "Desvenlafaxine = the clean SNRI: minimal CYP metabolism, predictable levels, flat 50 mg dosing — but still an SNRI (BP, discontinuation)."
  },

  duloxetine: {
    hook: "The SNRI that treats the pain too — diabetic neuropathy and fibromyalgia — but keep it away from a sick liver.",
    steps: [
      {
        title: "The big picture",
        teach: "Duloxetine is a balanced SNRI — it works serotonin and norepinephrine fairly evenly across its dose range. That steady noradrenergic action is what makes it special: it doesn't just lift mood, it relieves pain."
      },
      {
        title: "The pain niche",
        teach: "Beyond depression and generalized anxiety, duloxetine has FORMAL pain indications: diabetic peripheral neuropathic pain, fibromyalgia, and chronic musculoskeletal pain. It's the SNRI to reach for when depression rides alongside chronic pain.",
        check: {
          q: "Which SNRI carries formal chronic-pain indications like diabetic neuropathy and fibromyalgia?",
          options: ["Duloxetine", "Desvenlafaxine", "Venlafaxine"],
          answer: "Duloxetine",
          why: "Duloxetine is the SNRI with dedicated neuropathic and fibromyalgia indications."
        }
      },
      {
        title: "When to reach for it",
        teach: "Picture a patient with depression plus painful diabetic neuropathy. Duloxetine treats both at once — and because the analgesia is partly noradrenergic, pain relief can actually show up before the mood lifts.",
        check: {
          q: "Depression plus diabetic neuropathy — which agent fits best?",
          options: ["Duloxetine", "Bupropion", "Trazodone"],
          answer: "Duloxetine",
          why: "Duloxetine covers the depression and the neuropathic pain in one drug."
        }
      },
      {
        title: "How you use it",
        teach: "Start 30 mg to ease tolerability, then move to 60 mg — usually the sweet spot for depression, where higher doses add side effects more than benefit. It's a delayed-release capsule, so swallow it whole."
      },
      {
        title: "What patients feel",
        teach: "Common early complaints are nausea, dry mouth, constipation, decreased appetite, and sweating. Warn them the pain benefit may arrive before the mood benefit, so it's worth sticking with it through the first weeks."
      },
      {
        title: "Spare the liver",
        teach: "The must-not-miss: duloxetine can cause hepatotoxicity. Avoid it in liver disease or substantial alcohol use, and tell patients to report yellowing of the skin or eyes.",
        check: {
          q: "Which SNRI is best avoided in liver disease or heavy alcohol use?",
          options: ["Duloxetine", "Venlafaxine", "Desvenlafaxine"],
          answer: "Duloxetine",
          why: "Duloxetine's hepatotoxicity risk makes it a poor choice with liver disease or heavy drinking."
        }
      },
      {
        title: "A CYP1A2 quirk",
        teach: "Duloxetine is a CYP1A2 substrate. Smoking induces 1A2 and lowers its levels, while fluvoxamine — a potent 1A2 inhibitor — can raise them dangerously.",
        check: {
          q: "What happens to duloxetine levels when combined with fluvoxamine (a potent CYP1A2 inhibitor)?",
          options: ["They rise dangerously", "They fall to zero", "They're unchanged"],
          answer: "They rise dangerously",
          why: "Inhibiting CYP1A2 slows duloxetine clearance, pushing levels up."
        }
      }
    ],
    trap: "Duloxetine vs venlafaxine: duloxetine owns the pain indications plus the hepatotoxicity/CYP1A2 profile; venlafaxine is the BP/discontinuation one.",
    takeaway: "Duloxetine = the balanced SNRI with real pain indications — but hepatotoxic (avoid in liver disease) and CYP1A2-sensitive."
  },

  levomilnacipran: {
    hook: "The SNRI that leans hardest on norepinephrine — it flips the usual serotonin > noradrenaline balance on its head.",
    steps: [
      {
        title: "The big picture",
        teach: "Levomilnacipran is a newer SNRI with an unusual personality: it's MORE noradrenergic than serotonergic — greater potency at NET than SERT, the reverse of most SNRIs. It's the active enantiomer of milnacipran."
      },
      {
        title: "What it treats",
        teach: "Its approval is narrow — major depression only, no anxiety or pain indications. Think of it as a monotherapy option for depression when you specifically want a strong noradrenergic push."
      },
      {
        title: "The noradrenergic twist",
        teach: "Because it flips the usual ratio, its side-effect profile is distinctly noradrenergic. It's the most NE-predominant SNRI you'll meet.",
        check: {
          q: "Which SNRI is the most noradrenergic (NET > SERT)?",
          options: ["Levomilnacipran", "Duloxetine", "Desvenlafaxine"],
          answer: "Levomilnacipran",
          why: "Its NET potency exceeds its SERT potency — the reverse of most SNRIs."
        }
      },
      {
        title: "What patients feel",
        teach: "That noradrenergic drive shows up as tachycardia and palpitations, blood-pressure rise, sweating, and urinary hesitancy — more than you'd see with the serotonergic-leaning SNRIs. Ask patients to report a racing heart or trouble urinating.",
        check: {
          q: "Which side effect fits levomilnacipran's noradrenergic profile?",
          options: ["Urinary hesitancy / tachycardia", "Profound sedation", "Weight gain"],
          answer: "Urinary hesitancy / tachycardia",
          why: "Noradrenergic drive raises heart rate and BP and causes urinary hesitancy."
        }
      },
      {
        title: "How you use it",
        teach: "Start 20 mg once daily for the first 2 days — a deliberate tolerability step — then move to 40 mg once daily, with a usual range of 40 to 120 mg. It's an ER capsule, so swallow it whole."
      },
      {
        title: "Dosing cautions",
        teach: "It's a CYP3A4 substrate, so cap the dose with strong 3A4 inhibitors (like ketoconazole) and in renal impairment. Check BP and heart rate at baseline and on follow-up.",
        check: {
          q: "A strong CYP3A4 inhibitor alongside levomilnacipran means you should:",
          options: ["Cap the dose", "Double the dose", "Ignore it"],
          answer: "Cap the dose",
          why: "3A4 inhibition raises levels, so the dose is capped."
        }
      }
    ],
    trap: "Levomilnacipran (for depression) vs milnacipran (marketed for fibromyalgia) — enantiomer vs racemate, different niches.",
    takeaway: "Levomilnacipran = the noradrenergic-predominant SNRI (NET > SERT): more tachycardia, BP rise, and urinary hesitancy; CYP3A4 substrate with dose caps."
  },

  bupropion: {
    hook: "The dopaminergic outlier: activating, weight-neutral, no sexual side effects — but it lowers the seizure threshold.",
    steps: [
      {
        title: "The big picture",
        teach: "Bupropion is the odd one out among antidepressants — it has NO direct serotonergic activity. Instead it's dopaminergic and noradrenergic, which makes it energizing rather than calming. That single fact explains almost everything about it."
      },
      {
        title: "What it treats",
        teach: "It's first-line for major depression (CANMAT) and also approved for seasonal affective disorder and smoking cessation (as Zyban). Off-label it's a favourite to augment SSRIs and to rescue SSRI-induced sexual dysfunction.",
        check: {
          q: "Besides depression, bupropion is specifically approved for:",
          options: ["Smoking cessation (Zyban)", "Diabetic neuropathy", "Insomnia"],
          answer: "Smoking cessation (Zyban)",
          why: "Its nicotinic antagonism is the basis for its smoking-cessation approval."
        }
      },
      {
        title: "The signature win",
        teach: "Here's why people love it: no sexual dysfunction and no weight gain — often weight loss. So it shines when those SSRI effects are limiting, and it's used as an add-on to reverse SSRI-induced sexual dysfunction. No serotonin also means no serotonin syndrome from bupropion alone.",
        check: {
          q: "Which antidepressant is known for NO sexual dysfunction and no weight gain?",
          options: ["Bupropion", "Paroxetine", "Mirtazapine"],
          answer: "Bupropion",
          why: "Bupropion is weight-neutral or weight-losing and lacks sexual side effects."
        }
      },
      {
        title: "How you use it",
        teach: "It comes as SR (150 mg twice daily, doses at least 8 h apart) or XL (up to 300 mg once daily). Dose it in the MORNING — it's activating and will wreck sleep if taken late — and keep single doses low to limit seizure risk."
      },
      {
        title: "What patients feel",
        teach: "Because it's activating, expect insomnia, agitation or anxiety, dry mouth, tremor, and decreased appetite. It's the wrong pick for an already anxious, wired patient, and the right one for someone who's flat and fatigued."
      },
      {
        title: "The seizure trap",
        teach: "The must-not-miss: bupropion lowers the seizure threshold in a dose-dependent way. It's CONTRAINDICATED in seizure disorders, in eating disorders (bulimia or anorexia), and during abrupt alcohol or benzodiazepine withdrawal.",
        check: {
          q: "Bupropion is contraindicated in which patient?",
          options: ["One with bulimia or a seizure disorder", "One with diabetic neuropathy", "One with insomnia"],
          answer: "One with bulimia or a seizure disorder",
          why: "It lowers the seizure threshold — contraindicated in eating and seizure disorders."
        }
      },
      {
        title: "A 2D6 heads-up",
        teach: "One brief mechanism note: bupropion is an NDRI (blocks NET and DAT) and, with its metabolite, a potent CYP2D6 inhibitor. That raises levels of 2D6 substrates like TCAs, metoprolol, and risperidone.",
        check: {
          q: "Bupropion is a potent inhibitor of which enzyme?",
          options: ["CYP2D6", "CYP3A4", "UGT"],
          answer: "CYP2D6",
          why: "Bupropion and hydroxybupropion strongly inhibit CYP2D6, raising substrate levels."
        }
      }
    ],
    trap: "Bupropion (NDRI, activating, no sexual SE) vs buspirone (a 5-HT1A partial-agonist anxiolytic) — sound-alike, unrelated drugs.",
    takeaway: "Bupropion = activating, weight-neutral, no sexual dysfunction, no serotonin syndrome — but lowers the seizure threshold (avoid in seizure/eating disorders)."
  },

  mirtazapine: {
    hook: "Not a reuptake inhibitor — an α2 blocker that helps sleep and appetite, and is paradoxically MORE sedating at LOW doses.",
    steps: [
      {
        title: "The big picture",
        teach: "Mirtazapine breaks the mould: it's NOT a reuptake inhibitor. It's a NaSSA — it blocks presynaptic α2 receptors to boost serotonin and noradrenaline release, and it's a potent antihistamine. In the clinic that translates to sleep and appetite."
      },
      {
        title: "What it treats",
        teach: "It's first-line for major depression (CANMAT), but its off-label uses are where it earns its keep: insomnia, depression with poor appetite or weight loss, nausea, and augmentation — the classic \"California rocket fuel\" combo with venlafaxine."
      },
      {
        title: "When to reach for it",
        teach: "Its best niche is depression with insomnia and poor appetite or cachexia — the sedation and appetite boost become therapeutic features, not just side effects. Its 5-HT3 blockade also makes it antiemetic, with less nausea and less sexual dysfunction than SSRIs.",
        check: {
          q: "Mirtazapine is an especially strong pick for depression with:",
          options: ["Insomnia and poor appetite", "Agitation you'd rather not sedate", "Diabetic neuropathy"],
          answer: "Insomnia and poor appetite",
          why: "Its sedation and appetite stimulation directly target insomnia and poor intake."
        }
      },
      {
        title: "How you use it",
        teach: "Start 15 mg at bedtime and titrate up toward 30 to 45 mg over a week or two. Bedtime dosing takes advantage of the sedation to help sleep."
      },
      {
        title: "The low-dose paradox",
        teach: "Here's the counterintuitive rule everyone gets wrong: sedation and appetite/weight gain are WORSE at LOW doses. The potent antihistamine effect dominates until higher doses add offsetting noradrenergic drive — so sometimes going UP wakes people up.",
        check: {
          q: "Mirtazapine's sedation is generally:",
          options: ["Worse at LOW doses", "Worse at HIGH doses", "Dose-independent"],
          answer: "Worse at LOW doses",
          why: "At low doses the antihistamine sedation dominates; higher doses add activating noradrenergic tone."
        }
      },
      {
        title: "What patients feel",
        teach: "The main day-to-day effects are sedation, increased appetite and weight gain, dry mouth, and rising cholesterol and triglycerides. Track weight and lipids over time, and set the appetite expectation up front.",
        check: {
          q: "A common metabolic effect to monitor on mirtazapine is:",
          options: ["Weight gain and rising lipids", "Weight loss", "Hypokalemia"],
          answer: "Weight gain and rising lipids",
          why: "Appetite stimulation and antihistamine effects drive weight and lipid increases."
        }
      },
      {
        title: "Rare but serious",
        teach: "The must-not-miss: mirtazapine can rarely cause agranulocytosis or neutropenia. Tell every patient to report a fever or sore throat promptly so you can check a blood count.",
        check: {
          q: "Which rare serious effect warrants warning patients about fever or sore throat?",
          options: ["Agranulocytosis", "Priapism", "Hepatotoxicity"],
          answer: "Agranulocytosis",
          why: "Rare agranulocytosis can present as fever or sore throat."
        }
      }
    ],
    trap: "Remember the counterintuitive rule: mirtazapine's sedation and appetite effects are strongest at LOW dose, not high.",
    takeaway: "Mirtazapine = the α2-antagonist NaSSA: sedation + appetite (worse at LOW dose), antiemetic, low sexual dysfunction, rare agranulocytosis."
  },

  trazodone: {
    hook: "The sedating SARI mostly used as a low-dose sleeping pill — and the antidepressant that can cause priapism.",
    steps: [
      {
        title: "The big picture",
        teach: "Trazodone is technically an antidepressant, but in real life you'll almost always see it used as a sleep aid. It's heavily sedating thanks to its antihistamine and α1-blocking effects — that sedation is both its main use and its main limitation."
      },
      {
        title: "What it treats",
        teach: "It's approved for major depression, but full antidepressant doses are so sedating that they're hard to tolerate. In practice its bread-and-butter roles are low-dose insomnia (very common, off-label) and augmenting another antidepressant."
      },
      {
        title: "The sleep drug",
        teach: "Clinically, trazodone is used mostly as a low-dose hypnotic — 25 to 50 mg at bedtime. Antidepressant doses (150 mg and up) are often too sedating and drop the blood pressure, which is why the sleep dose stays small.",
        check: {
          q: "Trazodone is most often used clinically as a:",
          options: ["Low-dose hypnotic for sleep", "Stimulant", "First-line monotherapy for severe depression"],
          answer: "Low-dose hypnotic for sleep",
          why: "Antidepressant doses are too sedating and orthostatic, so it's mostly a sleep aid."
        }
      },
      {
        title: "What patients feel",
        teach: "Sedation is prominent — often the point. The other big one is orthostatic hypotension and dizziness from its α1 blockade, so counsel patients to rise slowly and take it at bedtime with a snack."
      },
      {
        title: "The priapism warning",
        teach: "The classic board fact and must-not-miss: trazodone can cause PRIAPISM through α1 blockade — a true urologic emergency. Warn every man that an erection lasting more than 4 hours means going to the emergency department.",
        check: {
          q: "Which antidepressant is classically linked to priapism?",
          options: ["Trazodone", "Bupropion", "Duloxetine"],
          answer: "Trazodone",
          why: "Trazodone's α1 blockade can cause priapism, a urologic emergency."
        }
      },
      {
        title: "Don't forget the heart",
        teach: "Beyond priapism, keep two things in mind: orthostatic hypotension can cause syncope and falls (watch the elderly), and trazodone can prolong the QT interval — get an ECG if there's cardiac or QT risk.",
        check: {
          q: "Besides priapism, which cardiovascular risks matter with trazodone?",
          options: ["Orthostatic hypotension and QT prolongation", "Malignant hypertension only", "Bradycardia and hypoglycemia"],
          answer: "Orthostatic hypotension and QT prolongation",
          why: "α1 blockade drops BP, and trazodone can prolong the QT interval."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "One line on why: trazodone is a SARI — it antagonizes postsynaptic 5-HT2A and, at higher doses, inhibits SERT, while blocking α1 and H1 receptors. That α1/H1 blockade is exactly what drives the sedation and the orthostatic drop."
      }
    ],
    trap: "Trazodone vs nefazodone — both SARIs, but nefazodone carries a hepatotoxicity black-box warning and is rarely used.",
    takeaway: "Trazodone = the sedating SARI hypnotic (5-HT2A/α1/H1 block): signature priapism and orthostatic hypotension; mostly used low-dose for sleep."
  },

  vortioxetine: {
    hook: "The multimodal serotonergic — reuptake block plus direct receptor tuning, pitched at the foggy cognition of depression.",
    steps: [
      {
        title: "The big picture",
        teach: "Vortioxetine is a newer antidepressant that does more than a plain SSRI: it inhibits serotonin reuptake AND directly tunes several serotonin receptors. That \"multimodal\" action is its selling point and the reason it's talked about differently."
      },
      {
        title: "What it treats",
        teach: "It's first-line for major depression (CANMAT), with a special off-label spotlight on depression that comes with prominent cognitive symptoms — the trouble concentrating and thinking clearly that many depressed patients describe.",
        check: {
          q: "Vortioxetine is highlighted for depression with prominent:",
          options: ["Cognitive symptoms", "Priapism", "Chronic pain"],
          answer: "Cognitive symptoms",
          why: "Its off-label niche is depression with prominent cognitive dysfunction."
        }
      },
      {
        title: "The pro-cognitive claim",
        teach: "This is its distinguishing pitch: there's some evidence vortioxetine improves cognitive symptoms of depression — processing speed and executive function — partly independent of its effect on mood. That's unusual among antidepressants.",
        check: {
          q: "What's vortioxetine's distinguishing clinical claim?",
          options: ["Improving cognitive symptoms partly independent of mood", "Curing insomnia in one dose", "Treating neuropathic pain"],
          answer: "Improving cognitive symptoms partly independent of mood",
          why: "Its pro-cognitive evidence is what sets it apart from other antidepressants."
        }
      },
      {
        title: "How you use it",
        teach: "Start 10 mg once daily (5 mg if tolerability is a worry), then aim for 20 mg as tolerated. It can be taken any time of day, which makes it easy to fit into a routine."
      },
      {
        title: "What patients feel",
        teach: "Its dominant side effect is nausea, which is DOSE-DEPENDENT and usually eases over the first couple of weeks. The upside patients appreciate: sexual dysfunction is lower than with the SSRIs.",
        check: {
          q: "Vortioxetine's main dose-dependent side effect is:",
          options: ["Nausea", "Priapism", "Seizures"],
          answer: "Nausea",
          why: "Nausea is the most common, dose-dependent side effect; it usually settles."
        }
      },
      {
        title: "CYP2D6 dosing",
        teach: "It's primarily metabolized by CYP2D6, so poor metabolizers or strong 2D6 inhibitors (bupropion, fluoxetine, paroxetine) push levels up. With a strong 2D6 inhibitor, cap the dose at 10 mg.",
        check: {
          q: "With a strong CYP2D6 inhibitor, vortioxetine should be:",
          options: ["Capped at 10 mg", "Doubled to 40 mg", "Left unchanged"],
          answer: "Capped at 10 mg",
          why: "2D6 inhibition raises levels, so the maximum dose is halved to 10 mg."
        }
      }
    ],
    trap: "Vortioxetine vs vilazodone — both newer serotonergic agents (vilazodone is an SSRI + 5-HT1A partial agonist); different molecules.",
    takeaway: "Vortioxetine = the multimodal serotonergic (reuptake + receptor modulation): pro-cognitive pitch, dose-dependent nausea, lower sexual dysfunction."
  }
};
