// SSRI micro-lessons. Key = molecule id. Facts grounded in data/deck.json.
export default {
  fluoxetine: {
    hook: "The marathon-runner SSRI: the longest half-life of the class — forgiving, activating, and a 2D6 troublemaker.",
    steps: [
      {
        title: "What it is",
        teach: "Fluoxetine is an SSRI: it blocks the serotonin transporter (SERT) to raise synaptic 5-HT. First-line for MDD and many anxiety disorders.",
        check: {
          q: "Fluoxetine's core mechanism?",
          options: ["Blocks serotonin reuptake (SERT)", "Blocks D2 receptors", "Inhibits MAO-A"],
          answer: "Blocks serotonin reuptake (SERT)",
          why: "SSRIs work by blocking SERT."
        }
      },
      {
        title: "Longest half-life",
        teach: "Its active metabolite norfluoxetine lasts 7–15 days — by far the longest of the SSRIs. Great for non-adherent patients, and the least discontinuation syndrome.",
        check: {
          q: "Which SSRI is most forgiving of missed doses / least discontinuation syndrome?",
          options: ["Fluoxetine", "Paroxetine", "Fluvoxamine"],
          answer: "Fluoxetine",
          why: "Norfluoxetine's 7–15 day half-life self-tapers."
        }
      },
      {
        title: "5-week washout",
        teach: "That long tail cuts both ways: MAOIs are contraindicated, and you must wait ~5 weeks after stopping fluoxetine before starting one (serotonin syndrome risk).",
        check: {
          q: "How long to wait after fluoxetine before an MAOI?",
          options: ["~5 weeks", "24 hours", "2 weeks"],
          answer: "~5 weeks",
          why: "Its long half-life demands an unusually long washout."
        }
      },
      {
        title: "Most activating",
        teach: "Fluoxetine is the most activating SSRI — it can worsen early anxiety and insomnia. Dose it in the morning.",
        check: {
          q: "Best time of day to dose fluoxetine?",
          options: ["Morning", "Bedtime", "With dinner"],
          answer: "Morning",
          why: "Its activating effect disrupts sleep if taken late."
        }
      },
      {
        title: "CYP2D6 inhibitor",
        teach: "Fluoxetine is a potent CYP2D6 inhibitor — a classic interaction source, raising levels of 2D6 substrates like TCAs, metoprolol, atomoxetine, and risperidone.",
        check: {
          q: "Which enzyme does fluoxetine potently inhibit?",
          options: ["CYP2D6", "CYP1A2", "MAO-B"],
          answer: "CYP2D6",
          why: "Potent 2D6 inhibition raises many co-prescribed drug levels."
        }
      }
    ],
    trap: "Fluoxetine vs fluvoxamine vs fluphenazine — all 'flu-', but fluvoxamine is the 1A2/OCD SSRI and fluphenazine is a typical antipsychotic.",
    takeaway: "Fluoxetine = the longest-half-life, most activating, potent-2D6-inhibitor SSRI; forgiving of missed doses but needs a 5-week MAOI washout."
  },

  sertraline: {
    hook: "The everyday first-line SSRI — broadest anxiety coverage, and the safe pick after a heart attack or in pregnancy.",
    steps: [
      {
        title: "What it is",
        teach: "Sertraline is an SSRI (blocks SERT), with the broadest anxiety-disorder approvals of the class. A go-to first-line for depression and anxiety.",
        check: {
          q: "Sertraline's main mechanism?",
          options: ["Blocks serotonin reuptake (SERT)", "Blocks D2 receptors", "Inhibits MAO-A"],
          answer: "Blocks serotonin reuptake (SERT)",
          why: "SSRIs block SERT to raise synaptic 5-HT."
        }
      },
      {
        title: "Cardiac-safe",
        teach: "Sertraline is the preferred antidepressant in cardiac disease — the SADHART trial supported its safety, making it the pick shortly after an MI.",
        check: {
          q: "Best-supported SSRI shortly after a heart attack?",
          options: ["Sertraline", "Citalopram", "Paroxetine"],
          answer: "Sertraline",
          why: "SADHART established its post-MI cardiac safety."
        }
      },
      {
        title: "Pregnancy & lactation",
        teach: "It's one of the preferred SSRIs in pregnancy and breastfeeding, with reassuring data and low milk transfer.",
        check: {
          q: "A preferred SSRI in pregnancy/lactation?",
          options: ["Sertraline", "Paroxetine", "Fluvoxamine"],
          answer: "Sertraline",
          why: "Good perinatal data and low milk transfer."
        }
      },
      {
        title: "Clean & GI",
        teach: "Sertraline has a cleaner interaction profile than fluoxetine/paroxetine (only a mild 2D6 inhibitor). Its signature side effect is diarrhea.",
        check: {
          q: "Sertraline's characteristic GI side effect?",
          options: ["Diarrhea", "Constipation", "Weight gain"],
          answer: "Diarrhea",
          why: "Diarrhea is the hallmark GI effect of sertraline."
        }
      }
    ],
    trap: "Don't confuse sertraline (SSRI) with sertindole (an antipsychotic).",
    takeaway: "Sertraline = clean, broad-anxiety, cardiac- and pregnancy-preferred first-line SSRI; expect diarrhea as its signature effect."
  },

  paroxetine: {
    hook: "The high-maintenance SSRI: worst discontinuation, most anticholinergic, most weight gain — and best avoided in pregnancy.",
    steps: [
      {
        title: "What it is",
        teach: "Paroxetine is an SSRI (blocks SERT) but also carries mild anticholinergic and weak NET effects, giving it a heavier side-effect burden than most SSRIs.",
        check: {
          q: "Beyond SERT blockade, paroxetine notably has…",
          options: ["Anticholinergic effects", "MAO inhibition", "D2 blockade"],
          answer: "Anticholinergic effects",
          why: "Its anticholinergic activity drives dry mouth, constipation, sedation."
        }
      },
      {
        title: "Worst discontinuation",
        teach: "Short half-life (~21 h) and no active metabolite make paroxetine the SSRI with the WORST discontinuation syndrome — taper slowly, never stop abruptly.",
        check: {
          q: "Which SSRI has the worst discontinuation syndrome?",
          options: ["Paroxetine", "Fluoxetine", "Escitalopram"],
          answer: "Paroxetine",
          why: "Short half-life + no active metabolite = abrupt drop-off."
        }
      },
      {
        title: "Avoid in pregnancy",
        teach: "Paroxetine is linked to cardiac malformations (e.g., septal defects) — it's generally AVOIDED in pregnancy.",
        check: {
          q: "Which SSRI is generally avoided in pregnancy for a cardiac-malformation signal?",
          options: ["Paroxetine", "Sertraline", "Citalopram"],
          answer: "Paroxetine",
          why: "Septal-defect signal makes it a pregnancy-avoid SSRI."
        }
      },
      {
        title: "Heaviest side effects",
        teach: "Paroxetine wins the 'most' contest: most anticholinergic, most sedating, most weight gain, and most sexual dysfunction of the SSRIs.",
        check: {
          q: "Which SSRI causes the most weight gain and sexual dysfunction?",
          options: ["Paroxetine", "Fluoxetine", "Sertraline"],
          answer: "Paroxetine",
          why: "It leads the class in weight gain, sedation, and sexual side effects."
        }
      },
      {
        title: "CYP2D6 inhibitor",
        teach: "Paroxetine is a potent CYP2D6 inhibitor — notably it reduces the activation of tamoxifen (to endoxifen), a clinically important interaction.",
        check: {
          q: "Paroxetine can blunt the benefit of which drug via CYP2D6?",
          options: ["Tamoxifen", "Warfarin", "Lithium"],
          answer: "Tamoxifen",
          why: "Blocking 2D6 lowers active endoxifen from tamoxifen."
        }
      }
    ],
    trap: "Paroxetine vs fluoxetine = opposite ends: short vs long half-life, worst vs least discontinuation.",
    takeaway: "Paroxetine = short-half-life, potent-2D6, anticholinergic, sedating, weight-gaining SSRI — worst discontinuation and pregnancy-avoid."
  },

  citalopram: {
    hook: "The clean SSRI with one catch — a dose-dependent QT warning and a hard dose ceiling.",
    steps: [
      {
        title: "What it is",
        teach: "Citalopram is a racemic SSRI (R- and S-citalopram) that blocks SERT. Metabolized mainly by CYP2C19 with a generally clean interaction profile.",
        check: {
          q: "Citalopram's mechanism?",
          options: ["Blocks serotonin reuptake (SERT)", "Blocks D2 receptors", "Inhibits MAO-A"],
          answer: "Blocks serotonin reuptake (SERT)",
          why: "It's an SSRI acting at SERT."
        }
      },
      {
        title: "The QT catch",
        teach: "Citalopram causes dose-dependent QT prolongation, so it has a hard ceiling: max 40 mg/day generally, and only 20 mg/day if >60 years, hepatic impairment, or CYP2C19 poor metabolizers/inhibitors.",
        check: {
          q: "Max citalopram dose in a patient over 60?",
          options: ["20 mg/day", "40 mg/day", "60 mg/day"],
          answer: "20 mg/day",
          why: "The QT risk caps elderly/hepatic/2C19 patients at 20 mg."
        }
      },
      {
        title: "QT interactions",
        teach: "Because of that QT effect, watch additive risk with other QT-prolonging drugs, and note that CYP2C19 inhibitors (omeprazole, cimetidine) raise citalopram levels.",
        check: {
          q: "Biggest interaction concern with citalopram?",
          options: ["Additive QT prolongation", "Raising clozapine levels", "Anticholinergic burden"],
          answer: "Additive QT prolongation",
          why: "Its own QT effect stacks with other QT-prolonging drugs."
        }
      },
      {
        title: "The enantiomer link",
        teach: "Escitalopram is citalopram's purified active S-enantiomer — same family, but with a lower dose ceiling and less QT effect.",
        check: {
          q: "Escitalopram is citalopram's…",
          options: ["S-enantiomer", "Metabolite", "Prodrug"],
          answer: "S-enantiomer",
          why: "Escitalopram is the isolated active S-enantiomer."
        }
      }
    ],
    trap: "Citalopram vs escitalopram — same family, but escitalopram caps at 20 mg (half of citalopram's 40 mg).",
    takeaway: "Citalopram = clean SSRI, but the QT one: 40 mg cap, 20 mg in elderly/hepatic/2C19 patients."
  },

  escitalopram: {
    hook: "The tolerability sweet spot: citalopram's purified active half — clean, well-tolerated, first-line for depression and GAD.",
    steps: [
      {
        title: "What it is",
        teach: "Escitalopram is the active S-enantiomer of citalopram (allosteric SERT binding). It has minimal CYP inhibition, so very few drug interactions.",
        check: {
          q: "Escitalopram is derived from which drug?",
          options: ["Citalopram", "Sertraline", "Paroxetine"],
          answer: "Citalopram",
          why: "It's the isolated active S-enantiomer of citalopram."
        }
      },
      {
        title: "Best tolerated",
        teach: "Often first-line: escitalopram is among the best-tolerated SSRIs with the cleanest interaction profile, and it's approved for both MDD and GAD.",
        check: {
          q: "A key advantage of escitalopram?",
          options: ["Best-tolerated, clean interactions", "Strongest 2D6 inhibitor", "Longest half-life"],
          answer: "Best-tolerated, clean interactions",
          why: "Tolerability and minimal interactions make it a common first choice."
        }
      },
      {
        title: "Dose ceiling",
        teach: "Max is 20 mg/day (10 mg in elderly/hepatic impairment). Roughly, 20 mg escitalopram ≈ 40 mg citalopram, and it has less QT effect than citalopram.",
        check: {
          q: "Maximum escitalopram dose?",
          options: ["20 mg/day", "40 mg/day", "80 mg/day"],
          answer: "20 mg/day",
          why: "Escitalopram caps at 20 mg (10 mg in elderly/hepatic)."
        }
      }
    ],
    trap: "Escitalopram vs citalopram — half the max dose (20 vs 40 mg) and less QT risk.",
    takeaway: "Escitalopram = the tolerability/interaction sweet spot; first-line SSRI for MDD and GAD, capped at 20 mg."
  },

  fluvoxamine: {
    hook: "The OCD SSRI with the biggest interaction problem — a potent CYP1A2 inhibitor that can send clozapine and theophylline sky-high.",
    steps: [
      {
        title: "What it is",
        teach: "Fluvoxamine is an SSRI (blocks SERT) and also a sigma-1 receptor agonist — a distinctive feature of the drug.",
        check: {
          q: "Besides SERT blockade, fluvoxamine acts as a…",
          options: ["Sigma-1 receptor agonist", "D2 antagonist", "MAO inhibitor"],
          answer: "Sigma-1 receptor agonist",
          why: "Sigma-1 agonism is a distinctive fluvoxamine feature."
        }
      },
      {
        title: "Interaction king",
        teach: "Fluvoxamine is the most interaction-prone SSRI — a potent CYP1A2 and 2C19 inhibitor. It dangerously raises clozapine, olanzapine, theophylline, caffeine, and tizanidine levels.",
        check: {
          q: "Fluvoxamine can dangerously raise the level of which drug (via CYP1A2)?",
          options: ["Clozapine", "Warfarin", "Lithium"],
          answer: "Clozapine",
          why: "Potent 1A2 inhibition sends clozapine/theophylline levels up."
        }
      },
      {
        title: "The OCD niche",
        teach: "Fluvoxamine is a go-to first-line agent for OCD.",
        check: {
          q: "Fluvoxamine is especially favored for which disorder?",
          options: ["OCD", "Bipolar mania", "ADHD"],
          answer: "OCD",
          why: "It's a first-line SSRI for OCD."
        }
      },
      {
        title: "Sedating & GI",
        teach: "It's sedating (dose at bedtime) and the most GI/nausea-prone SSRI. Short half-life (~15 h) means discontinuation symptoms if stopped abruptly.",
        check: {
          q: "When is fluvoxamine typically dosed?",
          options: ["At bedtime", "First thing in the morning", "With lunch"],
          answer: "At bedtime",
          why: "Its sedating effect makes bedtime dosing preferable."
        }
      }
    ],
    trap: "Fluvoxamine vs fluoxetine vs fluphenazine — fluvoxamine = 1A2/2C19 & OCD, fluoxetine = 2D6 & long half-life, fluphenazine = an antipsychotic.",
    takeaway: "Fluvoxamine = the OCD SSRI with the heaviest interaction burden (potent CYP1A2/2C19 — raises clozapine, theophylline, caffeine); sedating, short half-life."
  }
};
