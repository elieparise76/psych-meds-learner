// SSRI micro-lessons (v2, clinical-first). Narrated by Neuro.
// Key = molecule id. Every fact grounded in data/deck.json — reuse, never invent.
export default {
  fluoxetine: {
    hook: "The original blockbuster SSRI: the longest half-life of the class — activating, forgiving of missed doses, and a 5-week MAOI washout.",
    steps: [
      {
        title: "The big picture",
        teach: "Fluoxetine was the original blockbuster SSRI — Prozac — and it set the template for the whole class. It's a first-line antidepressant that raises serotonin by blocking its reuptake, and it's the long-acting, get-up-and-go member of the family."
      },
      {
        title: "What it treats",
        teach: "Beyond major depression, it's approved for OCD, bulimia nervosa, panic disorder, and PMDD — and it's a CANMAT first-line pick for MDD.",
        check: {
          q: "Which eating disorder is fluoxetine specifically approved to treat?",
          options: ["Bulimia nervosa", "Anorexia nervosa", "Binge eating with no purging"],
          answer: "Bulimia nervosa",
          why: "Fluoxetine is the classic SSRI approved for bulimia nervosa."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 20 mg once daily, taken in the morning. The usual range is 20–60 mg, up to a max of 80 mg, and like all antidepressants the full effect takes about 4–6 weeks to build."
      },
      {
        title: "The activating one",
        teach: "Of all the SSRIs, fluoxetine is the most activating — it can rev people up and worsen early anxiety or insomnia. That's exactly why you dose it in the morning.",
        check: {
          q: "Why is fluoxetine dosed in the morning?",
          options: ["It's activating and can disturb sleep", "It must be taken with breakfast", "It's fully cleared overnight"],
          answer: "It's activating and can disturb sleep",
          why: "Morning dosing keeps its activating effect from wrecking sleep."
        }
      },
      {
        title: "What patients feel",
        teach: "Early on, warn patients about nausea, headache, some jitteriness or insomnia, and decreased appetite. Longer term, sexual dysfunction is the effect people often stay quiet about — ask about it directly."
      },
      {
        title: "The long tail",
        teach: "Fluoxetine has by far the longest half-life of the SSRIs — its active metabolite norfluoxetine lingers for weeks. That makes it the most forgiving of missed doses and the least likely to cause a discontinuation syndrome.",
        check: {
          q: "Which SSRI is most forgiving if a patient misses doses?",
          options: ["Fluoxetine", "Paroxetine", "Fluvoxamine"],
          answer: "Fluoxetine",
          why: "Its weeks-long half-life self-tapers, so a missed dose barely registers."
        }
      },
      {
        title: "The must-not-miss",
        teach: "That long tail cuts both ways. Because the drug lingers for weeks, you must wait about 5 weeks after stopping fluoxetine before starting an MAOI — far longer than the usual 2-week SSRI washout — or you risk serotonin syndrome.",
        check: {
          q: "How long should you wait after stopping fluoxetine before starting an MAOI?",
          options: ["About 5 weeks", "24 hours", "3 days"],
          answer: "About 5 weeks",
          why: "Its long half-life demands an unusually long washout to avoid serotonin syndrome."
        }
      },
      {
        title: "One more thing",
        teach: "Keep the boxed warning in mind — like all antidepressants, watch closely for worsening mood or emerging suicidal thoughts in the first weeks, especially in patients under 25. And remember fluoxetine is a potent CYP2D6 inhibitor, a classic source of drug interactions."
      }
    ],
    trap: "Fluoxetine's long half-life is a feature and a trap: forgiving of missed doses, but it forces the longest MAOI washout of any SSRI.",
    takeaway: "Fluoxetine = the activating, longest-half-life SSRI — forgiving of missed doses, but needs a 5-week washout before an MAOI."
  },

  sertraline: {
    hook: "The reliable, broad-spectrum first-line antidepressant — and the SSRI you trust after a heart attack.",
    steps: [
      {
        title: "The big picture",
        teach: "Sertraline is one of the true workhorses of psychiatry — a safe, well-tolerated, broad-spectrum first-line antidepressant. Think of it as the reliable all-rounder: it handles depression and the widest range of anxiety disorders, with very few drug interactions."
      },
      {
        title: "What it treats",
        teach: "It's approved for major depression, OCD, panic disorder, PTSD, social anxiety, and PMDD — broader anxiety coverage than almost any other SSRI.",
        check: {
          q: "A patient has depression plus panic attacks. Why is sertraline a tidy single choice?",
          options: ["It covers both depression and anxiety disorders", "It is a stimulant", "It has no serotonergic activity"],
          answer: "It covers both depression and anxiety disorders",
          why: "One drug, broad evidence-based coverage — efficient and sensible."
        }
      },
      {
        title: "The heart-safe pick",
        teach: "Here's the fact that wins on exams and in clinic: sertraline is the SSRI of choice after a heart attack, backed by the SADHART trial. When your depressed patient also has cardiac disease, this is your go-to.",
        check: {
          q: "Which SSRI is preferred in a patient with recent MI or cardiac disease?",
          options: ["Sertraline", "Citalopram", "Fluvoxamine"],
          answer: "Sertraline",
          why: "SADHART showed sertraline is safe and effective post-MI."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 50 mg once daily — but drop to 25 mg in panic disorder, where too much activation can spook an anxious patient. Increase by 50 mg at weekly intervals up to a max of 200 mg, and take it with food to soften the GI upset."
      },
      {
        title: "What patients feel",
        teach: "Sertraline's signature side effect is diarrhea — more so than other SSRIs — along with nausea, insomnia, and sexual dysfunction. Taking it with food helps the gut settle.",
        check: {
          q: "Which GI side effect is especially characteristic of sertraline?",
          options: ["Diarrhea", "Severe constipation", "Bloody stools"],
          answer: "Diarrhea",
          why: "Diarrhea is sertraline's signature GI effect."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Like every antidepressant, sertraline carries a boxed warning: watch closely for worsening mood or emerging suicidal thoughts in the first weeks and after dose changes, especially in patients under 25. And never combine it with an MAOI — separate them by 14 days to avoid serotonin syndrome.",
        check: {
          q: "You're starting sertraline. Which boxed-warning risk do you monitor early?",
          options: ["Emerging suicidal thoughts in young patients", "Immediate weight loss", "Sudden hair loss"],
          answer: "Emerging suicidal thoughts in young patients",
          why: "All antidepressants carry a suicidality boxed warning — monitor closely early."
        }
      },
      {
        title: "Safe in pregnancy too",
        teach: "Sertraline is also one of the preferred SSRIs in pregnancy and breastfeeding, thanks to good safety data and low transfer into breast milk. When a pregnant patient needs an antidepressant, this is a comfortable choice."
      }
    ],
    trap: "Don't confuse sertraline (an SSRI) with sertindole (an antipsychotic).",
    takeaway: "Sertraline = the broad, well-tolerated, low-interaction first-line SSRI — and the safe pick after an MI or in pregnancy."
  },

  paroxetine: {
    hook: "The high-maintenance SSRI: sedating, weight-gaining, worst discontinuation of the class — and the one to avoid in pregnancy.",
    steps: [
      {
        title: "The big picture",
        teach: "Paroxetine is an effective first-line SSRI, but it's the highest-maintenance member of the family. It tends to be more sedating, cause more weight gain, and has the roughest discontinuation of any SSRI — so it's often not the first one you'd reach for."
      },
      {
        title: "What it treats",
        teach: "Its approvals are broad: major depression plus OCD, panic disorder, social anxiety, GAD, and PTSD — a strong anxiety-disorder line-up.",
        check: {
          q: "Besides depression, paroxetine is approved across which broad category?",
          options: ["Anxiety disorders", "Psychotic disorders", "Bipolar mania"],
          answer: "Anxiety disorders",
          why: "Paroxetine carries wide anxiety-disorder approvals."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 20 mg once daily, usually in the morning, and increase by 10 mg at weekly intervals. The max is 50 mg — or 60 mg for OCD in some labels."
      },
      {
        title: "What patients feel",
        teach: "Compared with other SSRIs, paroxetine is more sedating, causes the most weight gain, and has anticholinergic effects like dry mouth and constipation — plus the most sexual dysfunction. That's a lot of tolerability baggage.",
        check: {
          q: "Which SSRI is most associated with sedation, weight gain, and anticholinergic effects?",
          options: ["Paroxetine", "Fluoxetine", "Sertraline"],
          answer: "Paroxetine",
          why: "Paroxetine is the sedating, weight-gaining, anticholinergic SSRI."
        }
      },
      {
        title: "The discontinuation trap",
        teach: "Paroxetine has a short half-life and no long-acting metabolite, so stopping it abruptly triggers the worst discontinuation syndrome of the SSRIs — dizziness, flu-like symptoms, and brain zaps. Always taper slowly.",
        check: {
          q: "Why must paroxetine be tapered rather than stopped abruptly?",
          options: ["It has the worst SSRI discontinuation syndrome", "It causes rebound psychosis", "It permanently damages SERT"],
          answer: "It has the worst SSRI discontinuation syndrome",
          why: "Its short half-life means abrupt stops hit hard — taper it."
        }
      },
      {
        title: "The must-not-miss",
        teach: "The single biggest safety flag: paroxetine is associated with cardiac malformations, such as septal defects, when used in pregnancy. It's generally avoided in pregnancy and in anyone planning to conceive — bring it up early.",
        check: {
          q: "Why is paroxetine generally avoided in pregnancy?",
          options: ["A signal for cardiac malformations", "It always causes preterm labour", "It blocks folate absorption"],
          answer: "A signal for cardiac malformations",
          why: "Studies link paroxetine to cardiac defects like septal defects — avoid in pregnancy."
        }
      },
      {
        title: "A hidden interaction",
        teach: "Two more things to file away: separate paroxetine from any MAOI by 14 days to avoid serotonin syndrome, and remember it's a potent CYP2D6 inhibitor — it blunts tamoxifen's activation, which matters a great deal in breast-cancer patients."
      }
    ],
    trap: "Paroxetine's short half-life makes it the opposite of fluoxetine — miss a couple of doses and discontinuation symptoms can appear.",
    takeaway: "Paroxetine = the sedating, weight-gaining SSRI with the worst discontinuation — and the one to avoid in pregnancy."
  },

  citalopram: {
    hook: "The clean, well-tolerated SSRI with one defining catch: a hard dose ceiling to protect the QT interval.",
    steps: [
      {
        title: "The big picture",
        teach: "Citalopram is a clean, well-tolerated first-line SSRI with very few drug interactions. But it comes with one defining catch that shapes how you prescribe it: a hard dose ceiling to protect the heart."
      },
      {
        title: "What it treats",
        teach: "It's approved for major depression, and used off-label for anxiety disorders and for behavioural symptoms in dementia — where its gentle interaction profile is handy in older, medically complex patients."
      },
      {
        title: "How you use it",
        teach: "Start at 20 mg once daily and, if needed, step up to 40 mg after at least a week. Simple — but that 40 mg number is where the important part begins."
      },
      {
        title: "The QT dose cap",
        teach: "Citalopram causes dose-dependent QT prolongation, so the max is capped at 40 mg/day — and just 20 mg/day if the patient is over 60, has hepatic impairment, or is a CYP2C19 poor metabolizer or on a 2C19 inhibitor. Do not exceed it.",
        check: {
          q: "What is the maximum citalopram dose in a patient over 60?",
          options: ["20 mg/day", "40 mg/day", "60 mg/day"],
          answer: "20 mg/day",
          why: "Over 60 (or with hepatic/2C19 issues), the QT cap drops to 20 mg/day."
        }
      },
      {
        title: "Monitoring",
        teach: "Because the risk is cardiac, consider a baseline ECG if the patient has cardiac risk, takes other QT-prolonging drugs, or has electrolyte problems — and tell them to report palpitations or fainting.",
        check: {
          q: "When should you consider a baseline ECG before citalopram?",
          options: ["Cardiac risk, other QT drugs, or electrolyte issues", "Never — ECGs aren't relevant", "Only in patients under 30"],
          answer: "Cardiac risk, other QT drugs, or electrolyte issues",
          why: "An ECG is warranted when QT risk factors are present."
        }
      },
      {
        title: "What patients feel",
        teach: "Day to day it's an easy SSRI: nausea, some somnolence, sweating, dry mouth, and the usual sexual dysfunction. Apart from the QT issue, its interaction profile is very clean."
      },
      {
        title: "The enantiomer pearl",
        teach: "Here's a neat piece of pharmacology: escitalopram is citalopram's purified active S-enantiomer, which is why 20 mg of escitalopram is roughly equivalent to 40 mg of citalopram.",
        check: {
          q: "Escitalopram is best described as…",
          options: ["The active S-enantiomer of citalopram", "A metabolite of fluoxetine", "An SNRI"],
          answer: "The active S-enantiomer of citalopram",
          why: "Escitalopram is the purified S-enantiomer of citalopram."
        }
      }
    ],
    trap: "Citalopram is clean everywhere except the QT interval — the dose cap is the whole point.",
    takeaway: "Citalopram = the clean SSRI with a QT dose ceiling: 40 mg max, 20 mg if over 60, hepatic, or 2C19-limited."
  },

  escitalopram: {
    hook: "The tolerability and interaction sweet spot: often the default first-line SSRI, and one of the few approved for GAD.",
    steps: [
      {
        title: "The big picture",
        teach: "Escitalopram is, for many prescribers, the default first SSRI — it sits in the tolerability and interaction sweet spot. If you want a clean, easy, well-tolerated antidepressant to start with, this is often it."
      },
      {
        title: "What it treats",
        teach: "It's approved for major depression and generalized anxiety disorder, and it's a CANMAT first-line choice for MDD — one of the tidiest fits for a patient with both low mood and chronic worry.",
        check: {
          q: "Which anxiety disorder is escitalopram formally approved to treat?",
          options: ["Generalized anxiety disorder", "OCD", "PTSD"],
          answer: "Generalized anxiety disorder",
          why: "Escitalopram carries a GAD approval alongside MDD."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Picture a patient starting their first antidepressant who's anxious about side effects and already on several other medications. Escitalopram's clean profile and few interactions make it a natural first pick.",
        check: {
          q: "Why is escitalopram a strong first choice in a medically complex patient?",
          options: ["Best tolerability and fewest interactions", "It has no side effects at all", "It works within hours"],
          answer: "Best tolerability and fewest interactions",
          why: "Escitalopram's clean interaction profile suits complex patients."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 10 mg once daily and increase to 20 mg after at least a week if needed. The max is 20 mg — or 10 mg in the elderly or in hepatic impairment. The effect builds over about 4–6 weeks."
      },
      {
        title: "What patients feel",
        teach: "Common effects are nausea, changes in sleep either way, fatigue, sweating, and sexual dysfunction — but overall it's one of the best-tolerated SSRIs, which is a big reason it's so widely used."
      },
      {
        title: "The must-not-miss",
        teach: "It's still an antidepressant, so respect the boxed warning — monitor for worsening mood or suicidal thoughts early, especially under 25 — and keep it 14 days apart from any MAOI. It can mildly prolong QT, but far less than citalopram, so there's no citalopram-style hard dose cap.",
        check: {
          q: "How does escitalopram's QT risk compare with citalopram's?",
          options: ["Milder, with no hard dose cap", "Identical, same 40 mg cap", "Far worse"],
          answer: "Milder, with no hard dose cap",
          why: "Escitalopram prolongs QT less than citalopram and isn't dose-capped for it."
        }
      },
      {
        title: "The enantiomer pearl",
        teach: "Chemistry footnote worth knowing: escitalopram is the purified active S-enantiomer of citalopram, so 20 mg of escitalopram is roughly equivalent to 40 mg of citalopram — the same molecule, cleaned up."
      }
    ],
    trap: "Escitalopram and citalopram aren't interchangeable milligram-for-milligram — 10 mg escitalopram ≈ 20 mg citalopram.",
    takeaway: "Escitalopram = the best-tolerated, cleanest-interaction first-line SSRI, and one of the few approved for GAD."
  },

  fluvoxamine: {
    hook: "The OCD-focused SSRI — and the biggest interaction troublemaker of the class, thanks to potent CYP1A2/2C19 inhibition.",
    steps: [
      {
        title: "The big picture",
        teach: "Fluvoxamine is the SSRI you reach for in OCD — and the one you watch like a hawk for drug interactions. It's sedating, hard on the stomach, and the biggest interaction troublemaker of the whole class."
      },
      {
        title: "What it treats",
        teach: "It's a first-line treatment for OCD, and depending on the label it also treats major depression, with off-label use in social anxiety and panic. But OCD is its home turf.",
        check: {
          q: "Which condition is fluvoxamine especially known as a first-line treatment for?",
          options: ["OCD", "Bipolar mania", "ADHD"],
          answer: "OCD",
          why: "Fluvoxamine is a classic first-line SSRI for OCD."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 50 mg at bedtime — it's sedating, so night dosing works in your favour. Increase by 50 mg every 4–7 days, split doses above 100 mg into twice daily, up to a max of 300 mg."
      },
      {
        title: "What patients feel",
        teach: "It causes the most nausea of the SSRIs and notable sedation, along with the usual sexual dysfunction and some constipation. The sedation is why bedtime dosing suits it, and the GI upset usually eases with time.",
        check: {
          q: "Why is fluvoxamine usually dosed at bedtime?",
          options: ["It's sedating", "It must be taken fasting", "It only works overnight"],
          answer: "It's sedating",
          why: "Its sedation makes bedtime the natural time to dose it."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Here's the headline: fluvoxamine is a potent inhibitor of CYP1A2 and 2C19, giving it the highest interaction burden of any SSRI. It can push drugs like clozapine, theophylline, caffeine, and tizanidine up toward toxic levels.",
        check: {
          q: "Fluvoxamine's biggest safety issue is…",
          options: ["Potent CYP1A2/2C19 inhibition raising other drug levels", "Causing acute liver failure", "Blocking dopamine receptors"],
          answer: "Potent CYP1A2/2C19 inhibition raising other drug levels",
          why: "Its potent CYP inhibition is the defining fluvoxamine hazard."
        }
      },
      {
        title: "The clozapine trap",
        teach: "The interaction to burn into memory: fluvoxamine can dramatically raise clozapine levels via CYP1A2, risking seizures and toxicity. If a patient is on clozapine, this combination demands great caution and close monitoring of clozapine levels.",
        check: {
          q: "Adding fluvoxamine to clozapine does what to clozapine levels?",
          options: ["Raises them, risking toxicity", "Lowers them, risking relapse", "Has no effect"],
          answer: "Raises them, risking toxicity",
          why: "Fluvoxamine inhibits CYP1A2, sharply raising clozapine levels."
        }
      },
      {
        title: "More red lines",
        teach: "Beyond that, fluvoxamine is outright contraindicated with tizanidine, pimozide, thioridazine, alosetron, and ramelteon — and, like all SSRIs, it must be kept 14 days apart from an MAOI. When in doubt, reconcile every co-prescription."
      },
      {
        title: "A mechanistic footnote",
        teach: "One distinctive quirk: alongside blocking serotonin reuptake, fluvoxamine is a sigma-1 receptor agonist — unusual among the SSRIs. Its short half-life also means you should taper it rather than stop abruptly."
      }
    ],
    trap: "Fluvoxamine's problem isn't its own side effects so much as what it does to everything else — always reconcile the med list.",
    takeaway: "Fluvoxamine = the OCD SSRI with the heaviest interaction load — think clozapine, theophylline, caffeine, tizanidine — and taper it when stopping."
  }
};
