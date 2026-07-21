export default {
  phenelzine: {
    hook: "One of the original antidepressants — a reserved, irreversible MAOI whose whole life is the tyramine diet and deadly interactions.",
    steps: [
      {
        title: "The big picture",
        teach: "Phenelzine is one of the original antidepressants — an MAOI. These days you almost never start one, but you must know the family: they're potent, demanding drugs kept in reserve. Think of phenelzine as the sedating, anxiolytic member."
      },
      {
        title: "Its place today",
        teach: "MAOIs live at the back of the shelf — reserved for treatment-resistant depression and classic atypical depression (mood that lifts with good news, oversleeping, overeating, leaden heavy limbs, rejection sensitivity). They're off first-line purely because the diet and interactions are so demanding."
      },
      {
        title: "When you'd reach for it",
        teach: "Picture someone who has failed several first- and second-line antidepressants and has atypical features. That's the classic MAOI moment — phenelzine has a real evidence base for atypical/anxious depression when the safer drugs have let you down.",
        check: {
          q: "Which patient is the best fit for phenelzine?",
          options: ["Atypical depression after several failed first-line drugs", "A newly diagnosed, untreated depression", "A patient already taking an SSRI"],
          answer: "Atypical depression after several failed first-line drugs",
          why: "MAOIs are reserved for treatment-resistant and atypical depression — not first-line, and never alongside an SSRI."
        }
      },
      {
        title: "The tyramine diet",
        teach: "Here's the thing that dominates MAOI life: the low-tyramine diet. With gut MAO knocked out, tyramine in food is absorbed intact and dumps stored noradrenaline, causing a hypertensive crisis. So no aged cheese, cured or smoked meats, fermented soy, tap (draught) beer or Marmite — and a sudden pounding headache means get to the ER."
      },
      {
        title: "Spot the danger food",
        teach: "The worst offenders are aged and fermented: mature cheddar, salami and other cured meats, sauerkraut, soy sauce, draught beer. Fresh, simply-cooked food is fine. When in doubt: fresh is safe, aged is dangerous.",
        check: {
          q: "Which snack is unsafe on phenelzine?",
          options: ["A mature cheddar and salami board", "A fresh chicken salad", "Steamed rice and vegetables"],
          answer: "A mature cheddar and salami board",
          why: "Aged cheese and cured meats are tyramine-rich and can trigger a hypertensive crisis."
        }
      },
      {
        title: "The other killer",
        teach: "The second danger is serotonin syndrome. Phenelzine must never be combined with other serotonergics — SSRIs/SNRIs, TCAs, tramadol, meperidine, dextromethorphan, linezolid, triptans or St John's wort. Decongestants and stimulants (pseudoephedrine, amphetamines) instead drive a hypertensive crisis. Basically: check every new medicine first.",
        check: {
          q: "Which addition to phenelzine most risks serotonin syndrome?",
          options: ["Tramadol", "Acetaminophen", "Amoxicillin"],
          answer: "Tramadol",
          why: "Tramadol is serotonergic; with an MAOI it can precipitate serotonin syndrome."
        }
      },
      {
        title: "The washout rule",
        teach: "Because phenelzine blocks the enzyme irreversibly, its effect — and all these restrictions — persist about 2 weeks after the last dose, until the body makes fresh MAO. So allow a 14-day washout when switching to or from most serotonergics, and a full 5 weeks after stopping fluoxetine, whose long-lived metabolite lingers.",
        check: {
          q: "How long after stopping fluoxetine before starting phenelzine?",
          options: ["5 weeks", "14 days", "48 hours"],
          answer: "5 weeks",
          why: "Fluoxetine's long-lived metabolite needs ~5 weeks; the usual MAOI washout is 14 days."
        }
      },
      {
        title: "What patients feel",
        teach: "Day to day, expect orthostatic hypotension (rise slowly), weight gain, sedation, insomnia and sexual dysfunction. As a hydrazine, phenelzine can also deplete vitamin B6, causing peripheral neuropathy, and carries a hepatotoxicity risk — so ask about tingling feet and keep an eye on the liver.",
        check: {
          q: "Peripheral neuropathy on phenelzine suggests a deficiency of…",
          options: ["Vitamin B6 (pyridoxine)", "Vitamin C", "Vitamin D"],
          answer: "Vitamin B6 (pyridoxine)",
          why: "Hydrazine MAOIs like phenelzine deplete pyridoxine, causing neuropathy."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Mechanistically it's simple: phenelzine irreversibly blocks both MAO-A and MAO-B, so more noradrenaline, serotonin and dopamine hang around. That single irreversible, non-selective action is the root of everything — the diet, the interactions and the long washout."
      }
    ],
    trap: "Don't confuse phenelzine (MAOI) with phenytoin (an anticonvulsant) or phentermine (a sympathomimetic — dangerous WITH an MAOI).",
    takeaway: "Phenelzine = a reserved, irreversible hydrazine MAOI for atypical/treatment-resistant depression: its life is the strict tyramine diet, the no-serotonergics rule and a 14-day (5-week post-fluoxetine) washout."
  },

  tranylcypromine: {
    hook: "The activating, amphetamine-like MAOI — same deadly tyramine diet as phenelzine, but it wakes patients up instead of sedating them.",
    steps: [
      {
        title: "The big picture",
        teach: "Tranylcypromine is phenelzine's activating cousin. It's an irreversible MAOI too, but its amphetamine-like structure makes it energising rather than sedating — so patients tend to feel switched on, sometimes to the point of insomnia."
      },
      {
        title: "Its place today",
        teach: "Like all MAOIs it's reserved — a treatment-resistant depression option, also used in atypical depression, once safer first- and second-line drugs have failed. You reach for it for its potency and accept the demanding rules that come with it."
      },
      {
        title: "The activating one",
        teach: "Because it's stimulating, dose it earlier in the day or it will cause insomnia. Versus phenelzine it tends to cause less weight gain but more insomnia and agitation, and its amphetamine-like structure carries some dependence potential.",
        check: {
          q: "When should tranylcypromine be dosed?",
          options: ["Earlier in the day", "At bedtime", "Timing doesn't matter"],
          answer: "Earlier in the day",
          why: "It's activating — daytime dosing limits insomnia."
        }
      },
      {
        title: "The tyramine diet",
        teach: "The headline safety issue is identical to phenelzine's: a strict low-tyramine diet. No aged cheese, cured or smoked meats, fermented soy, or tap (draught) beer — any of these can trigger a hypertensive crisis, warned by a sudden pounding headache."
      },
      {
        title: "Spot the danger drink",
        teach: "Aged and fermented foods are the danger; the classic catch is draught (tap) beer, which is far more tyramine-rich than bottled. A throbbing occipital headache with soaring blood pressure is a hypertensive crisis — an emergency.",
        check: {
          q: "Which drink is off-limits on tranylcypromine?",
          options: ["Draught (tap) beer", "Bottled water", "Fresh orange juice"],
          answer: "Draught (tap) beer",
          why: "Tap/draught beer is tyramine-rich and can precipitate a hypertensive crisis."
        }
      },
      {
        title: "The other killer",
        teach: "Just like every MAOI, serotonergics are off-limits — SSRIs/SNRIs, TCAs, tramadol, meperidine, dextromethorphan, linezolid, triptans — because of serotonin syndrome. Decongestants and stimulants push blood pressure up instead. Screen every new drug.",
        check: {
          q: "Which combination risks serotonin syndrome?",
          options: ["Tranylcypromine + an SSRI", "Tranylcypromine + a statin", "Tranylcypromine + a laxative"],
          answer: "Tranylcypromine + an SSRI",
          why: "MAOI + SSRI is a classic serotonin-syndrome combination."
        }
      },
      {
        title: "The washout rule",
        teach: "It's irreversible, so its effects linger about 2 weeks until new enzyme is made. Allow a 14-day washout when switching to or from most serotonergics — but 5 weeks after stopping fluoxetine, because of its long-lasting metabolite.",
        check: {
          q: "Standard washout between a non-fluoxetine SSRI and an MAOI?",
          options: ["14 days", "24 hours", "6 months"],
          answer: "14 days",
          why: "Two weeks clears most serotonergics; fluoxetine specifically needs ~5 weeks."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "One mechanism line: tranylcypromine irreversibly and non-selectively inhibits MAO-A and MAO-B, and its amphetamine-like shape adds a mild stimulant kick. Same enzyme block as phenelzine, opposite bedside feel."
      }
    ],
    trap: "Don't confuse tranylcypromine (an MAOI) with trimipramine (a TCA) — look-alike names, very different drugs.",
    takeaway: "Tranylcypromine = the activating, amphetamine-like irreversible MAOI: same strict tyramine diet and no-serotonergics rule as phenelzine, same 14-day (5-week post-fluoxetine) washout, but dose it in the morning."
  },

  moclobemide: {
    hook: "The gentle, reversible Canadian MAOI (RIMA) — tyramine just displaces it, so no strict diet and a short washout.",
    steps: [
      {
        title: "The big picture",
        teach: "Moclobemide is the friendly face of the MAOI family — a reversible one. In Canada it's sold as Manerix; it isn't marketed in the US, which makes it a favourite Royal-College distinguishing point. It's far easier to live with than phenelzine or tranylcypromine."
      },
      {
        title: "Its place today",
        teach: "It's a genuine option for major depression — second-line by CANMAT — and is approved in Canada for social anxiety disorder too. Because it's better tolerated and much safer around food, you'll actually see it used, unlike the irreversible MAOIs.",
        check: {
          q: "Where does moclobemide sit for major depression?",
          options: ["A second-line option", "Strict first-line for everyone", "Never used for depression"],
          answer: "A second-line option",
          why: "CANMAT places moclobemide as a second-line antidepressant."
        }
      },
      {
        title: "Why no strict diet",
        teach: "Here's the RIMA magic: because it binds MAO-A reversibly, a big tyramine load can simply outcompete and displace it, so the enzyme still clears tyramine. That means NO strict low-tyramine diet and a far lower hypertensive risk — crises really only happen with huge tyramine loads or overdose.",
        check: {
          q: "Why does moclobemide avoid the classic 'cheese reaction'?",
          options: ["Tyramine reversibly displaces it from MAO-A", "It blocks tyramine absorption in the gut", "It doesn't affect MAO at all"],
          answer: "Tyramine reversibly displaces it from MAO-A",
          why: "Reversible binding lets tyramine outcompete the drug, so MAO-A still breaks tyramine down."
        }
      },
      {
        title: "The catch",
        teach: "Reversibility fixes the tyramine problem, NOT the serotonin one. Moclobemide is still contraindicated with SSRIs/SNRIs, tramadol, meperidine and dextromethorphan — serotonin syndrome remains the real danger. Its gentle reputation is only about food, not about serotonergic drugs.",
        check: {
          q: "Compared with irreversible MAOIs, moclobemide's serotonin-syndrome risk is…",
          options: ["Unchanged — still contraindicated with serotonergics", "Eliminated", "Only relevant in overdose"],
          answer: "Unchanged — still contraindicated with serotonergics",
          why: "The RIMA advantage is about tyramine, not serotonin; serotonergic combos stay dangerous."
        }
      },
      {
        title: "A shorter washout",
        teach: "Its short half-life plus reversibility mean stopping moclobemide clears quickly — a much shorter washout than the 2 weeks needed after an irreversible MAOI. But when you switch FROM a serotonergic INTO moclobemide, you still honour the incoming drug's washout: 14 days, or 5 weeks after fluoxetine."
      },
      {
        title: "How you use it",
        teach: "Give it after meals, usually 300 mg/day split BID, up to 600 mg/day. It's cleared by CYP2C19, so if a strong 2C19 inhibitor such as cimetidine is on board, halve the dose to stop levels piling up."
      },
      {
        title: "What to counsel",
        teach: "Reassure patients there's no strict diet — but common sense still applies: don't binge on a huge plate of aged cheese in one sitting. And make sure they tell any new prescriber they're on moclobemide, because the serotonergic interactions still bite.",
        check: {
          q: "What food advice fits moclobemide?",
          options: ["No strict diet, but avoid huge tyramine loads at once", "The same strict diet as phenelzine", "Avoid all protein"],
          answer: "No strict diet, but avoid huge tyramine loads at once",
          why: "Reversibility removes the strict diet, but very large single tyramine loads can still cause trouble."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "In one line: RIMA = Reversible Inhibitor of MAO-A. Selective for MAO-A and reversible — that single design choice is why the diet relaxes while the serotonin cautions stay put."
      }
    ],
    trap: "Moclobemide (reversible, MAO-A–selective, minimal diet, Canada) vs phenelzine/tranylcypromine (irreversible, strict tyramine diet).",
    takeaway: "Moclobemide = the reversible MAO-A–selective RIMA (Canadian, second-line): no strict tyramine diet and a short washout — but the serotonin-syndrome contraindications are exactly the same as any MAOI."
  },

  selegiline: {
    hook: "The MAO-B–selective MAOI — the low-dose patch skips the diet, but the tyramine risk returns as the dose climbs.",
    steps: [
      {
        title: "The big picture",
        teach: "Selegiline is the odd one out: at low dose it selectively blocks MAO-B. In Canada you'll meet it as an ORAL drug for Parkinson's (added to levodopa). As an antidepressant it's the transdermal patch, Emsam — US-approved and worth knowing about even though it isn't marketed here."
      },
      {
        title: "Its two lives",
        teach: "So it leads a double life. Low-dose oral selegiline raises dopamine and helps Parkinson's. The patch, at antidepressant doses, delivers enough drug to treat depression — and the interesting part is what the patch route does to the famous MAOI diet."
      },
      {
        title: "The patch trick",
        teach: "The classic exam point: the 6 mg/24 h patch bypasses first-pass gut MAO-A, so at that dose gut MAO-A still clears dietary tyramine — meaning NO dietary restriction is needed. Delivering the same drug through skin instead of gut is what buys the free diet.",
        check: {
          q: "Why does the 6 mg/24 h selegiline patch need no tyramine diet?",
          options: ["It bypasses first-pass gut MAO-A", "It contains no active drug", "It blocks tyramine in the skin"],
          answer: "It bypasses first-pass gut MAO-A",
          why: "Transdermal delivery spares gut MAO-A, so dietary tyramine is still broken down at the low dose."
        }
      },
      {
        title: "Diet returns",
        teach: "But that free pass is dose-dependent. Push the patch to 9 or 12 mg/24 h — or use higher oral doses — and MAO-A gets inhibited too, so the low-tyramine diet comes right back. Aged cheese, cured meats and tap beer are dangerous again.",
        check: {
          q: "The tyramine risk with selegiline is best described as…",
          options: ["Dose-dependent — it returns at higher doses", "Absent at every dose", "Fixed and unavoidable"],
          answer: "Dose-dependent — it returns at higher doses",
          why: "Low dose spares MAO-A (no diet); higher doses inhibit MAO-A and reinstate the risk."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "The mechanism in a line: selegiline is MAO-B–selective at low dose (raising dopamine), but selectivity is lost as the dose rises, when it also inhibits MAO-A. That sliding selectivity explains the whole dose-dependent tyramine story."
      },
      {
        title: "Serotonin at any dose",
        teach: "Here's the crucial asymmetry: the tyramine risk is dose-dependent, but the serotonin-syndrome risk is NOT. At any dose or route — even the low-dose patch — you must avoid SSRIs/SNRIs, tramadol, meperidine and dextromethorphan, and still observe the 14-day washout (5 weeks after fluoxetine).",
        check: {
          q: "Selegiline's serotonin-syndrome risk applies at which doses?",
          options: ["Any dose or route, including the low-dose patch", "Only the highest oral dose", "Only the patch"],
          answer: "Any dose or route, including the low-dose patch",
          why: "Unlike tyramine, the serotonergic contraindications are not dose-sparing."
        }
      },
      {
        title: "Amphetamine metabolites",
        teach: "Selegiline is broken down into l-amphetamine and l-methamphetamine, which can cause insomnia and activation — so dose oral forms earlier in the day. It's also why a routine urine drug screen can flag amphetamines.",
        check: {
          q: "Why might selegiline cause insomnia and flag a urine drug screen?",
          options: ["It forms amphetamine metabolites", "It contains caffeine", "It blocks all dopamine"],
          answer: "It forms amphetamine metabolites",
          why: "Selegiline metabolises to l-amphetamine/l-methamphetamine — activating, and detectable on screens."
        }
      },
      {
        title: "Using the patch",
        teach: "Practical patch care: apply to clean, dry, intact skin, rotate the site each day, and never cut the patch. The commonest nuisance is a mild application-site skin reaction rather than anything dramatic."
      },
      {
        title: "The look-alike",
        teach: "One last distinction: rasagiline is also MAO-B–selective but does NOT form amphetamine metabolites — so if a question hinges on amphetamine by-products, it's selegiline, not rasagiline.",
        check: {
          q: "Which MAO-B inhibitor produces amphetamine metabolites?",
          options: ["Selegiline", "Rasagiline", "Moclobemide"],
          answer: "Selegiline",
          why: "Selegiline forms l-amphetamine/l-methamphetamine; rasagiline does not."
        }
      }
    ],
    trap: "Selegiline (MAO-B–selective, patch for depression, amphetamine metabolites) vs rasagiline (MAO-B, no amphetamine metabolites) vs phenelzine (non-selective, strict diet).",
    takeaway: "Selegiline = the MAO-B–selective MAOI: the 6 mg/24 h patch spares first-pass gut MAO-A so no diet, but higher doses reinstate the tyramine risk — while the serotonin-syndrome rules and washout apply at every dose."
  }
};
