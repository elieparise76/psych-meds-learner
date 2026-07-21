export default {
  phenelzine: {
    hook: "The sedating, anxiolytic hydrazine MAOI — potent for atypical/anxious depression, lethal if you forget the diet.",
    steps: [
      {
        title: "What it is",
        teach: "Phenelzine irreversibly and non-selectively blocks MAO-A and MAO-B, raising NE, 5-HT and dopamine. Because the block is irreversible, the effect (and the food/drug rules) persist ~2 weeks until new enzyme is made — the short plasma half-life is irrelevant.",
        check: {
          q: "Why do phenelzine's dietary rules last ~2 weeks after the last dose?",
          options: ["It has a 2-week half-life", "Inhibition is irreversible — MAO must be resynthesized", "It accumulates in fat"],
          answer: "Inhibition is irreversible — MAO must be resynthesized",
          why: "The drug clears fast, but enzyme activity only returns as new MAO is synthesized (~2 weeks)."
        }
      },
      {
        title: "Lethal #1: tyramine crisis",
        teach: "With gut MAO-A knocked out, dietary tyramine is absorbed intact and dumps stored noradrenaline → hypertensive crisis (classic occipital headache + severe hypertension). A strict low-tyramine diet is mandatory: no aged cheese, cured/smoked meats, or tap/draught beer.",
        check: {
          q: "Which food can trigger a hypertensive crisis on phenelzine?",
          options: ["Aged cheddar", "White rice", "Fresh apple"],
          answer: "Aged cheddar",
          why: "Aged cheese is tyramine-rich; tyramine → noradrenaline surge → hypertensive crisis."
        }
      },
      {
        title: "Lethal #2: serotonin syndrome",
        teach: "Combining phenelzine with any serotonergic — SSRIs/SNRIs/TCAs, tramadol, meperidine, linezolid, dextromethorphan, triptans, St John's wort — can cause serotonin syndrome. Sympathomimetics (pseudoephedrine, amphetamines) instead drive a hypertensive crisis.",
        check: {
          q: "Adding which drug to phenelzine most risks serotonin syndrome?",
          options: ["Tramadol", "Acetaminophen", "Amoxicillin"],
          answer: "Tramadol",
          why: "Tramadol is serotonergic; with an MAOI it can precipitate serotonin syndrome."
        }
      },
      {
        title: "The washout rule",
        teach: "Because the block is irreversible, allow a 14-day washout when switching between an MAOI and most serotonergics — but wait 5 weeks after stopping fluoxetine, whose long-lived metabolite norfluoxetine lingers.",
        check: {
          q: "How long after stopping fluoxetine before starting phenelzine?",
          options: ["5 weeks", "14 days", "48 hours"],
          answer: "5 weeks",
          why: "Fluoxetine/norfluoxetine's long half-life needs ~5 weeks; the usual MAOI washout is 14 days."
        }
      },
      {
        title: "Hydrazine quirks",
        teach: "As a hydrazine, phenelzine can deplete pyridoxine (B6) → peripheral neuropathy, and carries hepatotoxicity risk. Versus tranylcypromine it is the more sedating/anxiolytic one, with more weight gain.",
        check: {
          q: "Peripheral neuropathy on phenelzine points to deficiency of which vitamin?",
          options: ["Pyridoxine (B6)", "Vitamin C", "Vitamin D"],
          answer: "Pyridoxine (B6)",
          why: "Hydrazine MAOIs deplete B6, causing peripheral neuropathy."
        }
      }
    ],
    trap: "Phenelzine (MAOI) vs phenytoin (anticonvulsant) vs phentermine (a sympathomimetic — dangerous WITH an MAOI).",
    takeaway: "Phenelzine = irreversible hydrazine MAOI: strict tyramine diet, no serotonergics, 14-day (5-week post-fluoxetine) washout, plus B6-depletion neuropathy and hepatotoxicity."
  },

  tranylcypromine: {
    hook: "The activating, amphetamine-like irreversible MAOI — same deadly diet as phenelzine, but it wakes you up instead of sedating.",
    steps: [
      {
        title: "What it is",
        teach: "Tranylcypromine irreversibly and non-selectively inhibits MAO-A and MAO-B, but its amphetamine-like structure makes it activating/mildly stimulant. Like all irreversible MAOIs the effect lasts ~1–2 weeks after stopping.",
        check: {
          q: "How does tranylcypromine differ in feel from phenelzine?",
          options: ["More activating/stimulant", "More sedating", "No CNS effect"],
          answer: "More activating/stimulant",
          why: "Its amphetamine-like structure makes it the activating MAOI (insomnia)."
        }
      },
      {
        title: "Lethal #1: tyramine crisis",
        teach: "The strict low-tyramine diet is identical to phenelzine's: aged cheese, cured/smoked meats and tap/draught beer can trigger a hypertensive crisis (occipital headache + severe hypertension) because gut MAO-A is blocked.",
        check: {
          q: "Which drink is off-limits to avoid a hypertensive crisis?",
          options: ["Draught (tap) beer", "Bottled water", "Fresh orange juice"],
          answer: "Draught (tap) beer",
          why: "Tap/draught beer is tyramine-rich and can precipitate a hypertensive crisis."
        }
      },
      {
        title: "Lethal #2: serotonin syndrome",
        teach: "As with every MAOI, serotonergics — SSRIs/SNRIs/TCAs, tramadol, meperidine, linezolid, dextromethorphan, triptans, St John's wort — are contraindicated because of serotonin syndrome.",
        check: {
          q: "Which combination risks serotonin syndrome?",
          options: ["Tranylcypromine + an SSRI", "Tranylcypromine + a statin", "Tranylcypromine + a laxative"],
          answer: "Tranylcypromine + an SSRI",
          why: "MAOI + SSRI is a classic serotonin-syndrome combination."
        }
      },
      {
        title: "The washout rule",
        teach: "Being irreversible, it needs a 14-day washout when switching to/from most serotonergics — and 5 weeks after stopping fluoxetine because of its long-lived metabolite.",
        check: {
          q: "Standard washout between an SSRI (not fluoxetine) and an MAOI?",
          options: ["14 days", "24 hours", "6 months"],
          answer: "14 days",
          why: "Two weeks clears most serotonergics; fluoxetine specifically needs ~5 weeks."
        }
      },
      {
        title: "The activating one",
        teach: "Insomnia is common — dose in the morning. Versus phenelzine it causes less weight gain but more insomnia, and its amphetamine-like structure carries some dependence/abuse potential.",
        check: {
          q: "When should tranylcypromine be dosed to limit insomnia?",
          options: ["In the morning", "At bedtime", "Timing is irrelevant"],
          answer: "In the morning",
          why: "Because it is activating, morning dosing reduces insomnia."
        }
      }
    ],
    trap: "Tranylcypromine (MAOI) vs trimipramine (a TCA) — look-alike names, different classes.",
    takeaway: "Tranylcypromine = the activating amphetamine-like irreversible MAOI: same strict tyramine diet, same serotonergic contraindications and 14-day (5-week post-fluoxetine) washout, but dose it in the morning."
  },

  moclobemide: {
    hook: "The reversible, MAO-A–selective Canadian MAOI (RIMA) — tyramine just displaces it, so no strict diet and a short washout.",
    steps: [
      {
        title: "What it is",
        teach: "Moclobemide is a RIMA — a Reversible Inhibitor of MAO-A. It selectively and reversibly inhibits MAO-A, raising 5-HT, NE and dopamine. It's available in Canada (Manerix) but not marketed in the US — a favourite distinguishing point.",
        check: {
          q: "What does RIMA stand for?",
          options: ["Reversible Inhibitor of MAO-A", "Rapid Irreversible MAO Antagonist", "Renal Inhibitor of MAO-A"],
          answer: "Reversible Inhibitor of MAO-A",
          why: "Moclobemide reversibly and selectively inhibits MAO-A."
        }
      },
      {
        title: "Why no strict diet",
        teach: "Because the block is reversible, a tyramine load can outcompete moclobemide and displace it from MAO-A, restoring tyramine breakdown. So there is NO strict low-tyramine diet and the hypertensive risk is far lower (only huge tyramine loads or overdose).",
        check: {
          q: "Why does moclobemide largely avoid the tyramine 'cheese reaction'?",
          options: ["Tyramine reversibly displaces it from MAO-A", "It blocks tyramine absorption", "It has no effect on MAO"],
          answer: "Tyramine reversibly displaces it from MAO-A",
          why: "Reversible binding lets tyramine outcompete the drug, so MAO-A still clears tyramine."
        }
      },
      {
        title: "Serotonin risk unchanged",
        teach: "Reversibility lowers the tyramine danger but NOT the serotonin danger. Moclobemide is still contraindicated with SSRIs/SNRIs, tramadol, meperidine, dextromethorphan and other serotonergics — serotonin syndrome remains the main hazard.",
        check: {
          q: "Compared with irreversible MAOIs, moclobemide's serotonin syndrome risk is…",
          options: ["Unchanged — still contraindicated with serotonergics", "Eliminated", "Only relevant in overdose"],
          answer: "Unchanged — still contraindicated with serotonergics",
          why: "The RIMA advantage is about tyramine, not serotonin; serotonergic combinations remain dangerous."
        }
      },
      {
        title: "Short washout",
        teach: "Its short half-life (~1–3 h) plus reversibility mean a much shorter washout when stopping moclobemide than with irreversible MAOIs. But when switching FROM a serotonergic you still honour the incoming drug's washout — 14 days, or 5 weeks after fluoxetine.",
        check: {
          q: "Before starting moclobemide after fluoxetine, you should wait…",
          options: ["5 weeks", "24 hours", "No wait needed"],
          answer: "5 weeks",
          why: "Fluoxetine's long half-life demands ~5 weeks regardless of moclobemide's own quick clearance."
        }
      },
      {
        title: "Practical dosing",
        teach: "Take moclobemide after meals. It's metabolised largely by CYP2C19; a 2C19 inhibitor such as cimetidine raises levels, so halve the dose.",
        check: {
          q: "Adding cimetidine to moclobemide means you should…",
          options: ["Halve the moclobemide dose", "Double the dose", "Stop food entirely"],
          answer: "Halve the moclobemide dose",
          why: "Cimetidine inhibits CYP2C19 and raises moclobemide levels — reduce the dose."
        }
      }
    ],
    trap: "Moclobemide (reversible, MAO-A selective, minimal diet, Canada-only) vs phenelzine/tranylcypromine (irreversible, strict tyramine diet).",
    takeaway: "Moclobemide = reversible MAO-A–selective RIMA (Canadian): no strict tyramine diet and short washout, BUT serotonin-syndrome contraindications are unchanged."
  },

  selegiline: {
    hook: "The MAO-B–selective MAOI — the low-dose patch skips the diet entirely, but selectivity vanishes as the dose climbs.",
    steps: [
      {
        title: "What it is",
        teach: "At LOW dose selegiline irreversibly and selectively inhibits MAO-B (raising dopamine — hence its Parkinson's use). At high or oral antidepressant doses it loses selectivity and also inhibits MAO-A, bringing back the tyramine and serotonin risks.",
        check: {
          q: "At low dose, selegiline is selective for which enzyme?",
          options: ["MAO-B", "MAO-A", "COMT"],
          answer: "MAO-B",
          why: "Low-dose selegiline is MAO-B selective; selectivity is lost at higher doses."
        }
      },
      {
        title: "The patch trick",
        teach: "The transdermal 6 mg/24 h patch bypasses first-pass gut MAO-A, so at that dose no dietary restriction is needed — a classic exam point. Higher patch strengths (9–12 mg/24 h) reinstate the low-tyramine diet.",
        check: {
          q: "Why does the 6 mg/24 h selegiline patch need no tyramine diet?",
          options: ["It bypasses first-pass gut MAO-A", "It contains no active drug", "It blocks tyramine in the skin"],
          answer: "It bypasses first-pass gut MAO-A",
          why: "Transdermal delivery spares gut MAO-A, so dietary tyramine is still cleared at the low dose."
        }
      },
      {
        title: "Diet returns at higher dose",
        teach: "The tyramine/hypertensive risk is dose-dependent: at higher patch or oral antidepressant doses MAO-A is inhibited, so aged cheese, cured meats and tap beer can again trigger a hypertensive crisis.",
        check: {
          q: "The tyramine hypertensive risk with selegiline is best described as…",
          options: ["Dose-dependent — returns at higher doses", "Absent at every dose", "Fixed and unavoidable"],
          answer: "Dose-dependent — returns at higher doses",
          why: "Low dose spares MAO-A (no diet); higher doses inhibit MAO-A and reinstate the risk."
        }
      },
      {
        title: "Serotonin risk at ANY dose",
        teach: "Unlike the dose-dependent tyramine risk, serotonin-syndrome contraindications apply at ANY dose or route: no SSRIs/SNRIs, tramadol, meperidine, linezolid or dextromethorphan. Still observe the 14-day washout — 5 weeks after fluoxetine.",
        check: {
          q: "Selegiline's serotonin syndrome risk applies at which doses?",
          options: ["Any dose or route", "Only the highest oral dose", "Only the patch"],
          answer: "Any dose or route",
          why: "Serotonergic contraindications are not dose-sparing — they apply even to the low-dose patch."
        }
      },
      {
        title: "Amphetamine metabolites",
        teach: "Selegiline is metabolised to l-amphetamine and l-methamphetamine, which can cause insomnia and activation. Contrast rasagiline — also MAO-B selective but without amphetamine metabolites.",
        check: {
          q: "Which MAO-B inhibitor yields amphetamine metabolites?",
          options: ["Selegiline", "Rasagiline", "Moclobemide"],
          answer: "Selegiline",
          why: "Selegiline forms l-amphetamine/l-methamphetamine; rasagiline does not."
        }
      }
    ],
    trap: "Selegiline (MAO-B selective, patch for depression, amphetamine metabolites) vs rasagiline (MAO-B, no amphetamine metabolites) vs phenelzine (non-selective, strict diet).",
    takeaway: "Selegiline = MAO-B–selective MAOI: the 6 mg/24 h patch spares first-pass MAO-A so no diet, but higher doses reinstate the tyramine risk while serotonin-syndrome contraindications and the washout apply at any dose."
  }
};
