// Novel-mechanism / rapid-acting agents. Key = molecule id. Facts grounded in data/deck.json.
export default {
  esketamine: {
    hook: "The antidepressant that works in hours, not weeks — an intranasal ketamine cousin you dose in the clinic and watch.",
    steps: [
      {
        title: "The big picture",
        teach: "Meet the fast one. Most antidepressants take 2–6 weeks to lift mood; esketamine can work within hours to a day. It's an intranasal spray you give in the clinic and watch — a completely different way to treat depression."
      },
      {
        title: "What it treats",
        teach: "It's approved (yes, in Canada too) for treatment-resistant depression and for major depression with acute suicidal ideation or behaviour. In both cases it's added on top of an oral antidepressant — never used alone.",
        check: {
          q: "Esketamine is used…",
          options: ["Added on top of an oral antidepressant, for TRD or MDD with acute suicidality", "As a standalone first-line antidepressant", "Only for generalized anxiety"],
          answer: "Added on top of an oral antidepressant, for TRD or MDD with acute suicidality",
          why: "It's an add-on for treatment-resistant depression and acute suicidality — always paired with an oral agent."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Picture someone who's failed two adequate antidepressant trials, or who's acutely suicidal and needs relief now — not in a month. That speed, and that resistant population, are exactly where esketamine earns its place.",
        check: {
          q: "Which patient is the best fit for esketamine?",
          options: ["Depression that hasn't responded to two adequate antidepressant trials", "First episode of mild depression", "Someone who wants a take-home pill with no monitoring"],
          answer: "Depression that hasn't responded to two adequate antidepressant trials",
          why: "Treatment-resistant depression (and acute suicidality) is its niche — rapid onset where standard agents have failed or are too slow."
        }
      },
      {
        title: "How you use it",
        teach: "It's self-administered intranasally under direct supervision: 56 mg on day 1, then 56–84 mg twice weekly to induce, tapering to weekly then every 1–2 weeks. Each device delivers 28 mg (wait 5 min between devices). Patients shouldn't eat for ~2 h or drink for ~30 min before dosing to cut nausea."
      },
      {
        title: "What patients feel",
        teach: "The in-clinic experience is distinctive: dissociation (feeling detached or dreamlike), dizziness, nausea, sedation, a bad taste, and a transient rise in blood pressure. It fades over the monitoring window — but patients cannot drive until the next day after a full night's sleep."
      },
      {
        title: "The must-not-miss",
        teach: "This is the high-stakes card. The boxed warning covers sedation, dissociation, respiratory depression, and abuse/misuse — so it's given only through a restricted (REMS) program and you monitor for at least 2 hours after every dose. Combining it with CNS depressants (opioids, benzodiazepines, alcohol) stacks the respiratory-depression risk.",
        check: {
          q: "Minimum in-clinic monitoring after each esketamine dose?",
          options: ["At least 2 hours", "15 minutes", "None — it's dispensed for home use"],
          answer: "At least 2 hours",
          why: "The boxed warning (sedation, dissociation, respiratory depression) mandates ≥2 h supervised monitoring; it's never take-home."
        }
      },
      {
        title: "Monitoring",
        teach: "Check blood pressure before dosing (defer if uncontrolled hypertension), again around 40 minutes after, then as needed. It's contraindicated with aneurysmal vascular disease, AVM, or prior intracerebral haemorrhage because of the BP spike. Keep watching mood and suicidality throughout treatment."
      },
      {
        title: "Why it's novel",
        teach: "Here's the one-line mechanism: esketamine is the S-enantiomer of ketamine, an NMDA-glutamate receptor antagonist. That blockade triggers a glutamate surge and rapid synaptogenesis — a glutamate pathway, not the serotonin/dopamine route of every other antidepressant. That's why it's so fast.",
        check: {
          q: "What makes esketamine mechanistically unusual among antidepressants?",
          options: ["It's a glutamatergic NMDA-receptor antagonist", "It blocks serotonin reuptake (SERT)", "It inhibits MAO-A"],
          answer: "It's a glutamatergic NMDA-receptor antagonist",
          why: "It's the only glutamatergic agent here — NMDA blockade drives the rapid antidepressant effect."
        }
      }
    ],
    trap: "Esketamine (intranasal NMDA antagonist) vs escitalopram (an oral SSRI) — same 'es-' prefix, totally different drug and class.",
    takeaway: "Esketamine = intranasal NMDA-antagonist antidepressant with rapid onset for TRD and acute suicidality — always added to an oral agent, given in-clinic with ≥2 h monitoring, boxed for sedation/dissociation/respiratory depression/abuse."
  },

  zuranolone: {
    hook: "The first ORAL pill for postpartum depression — a 14-day neurosteroid course that helps within days, not weeks.",
    steps: [
      {
        title: "The big picture",
        teach: "This is the one that made postpartum depression treatment convenient. Zuranolone is a rapid-acting antidepressant you take as a pill — a finite 2-week course, not an open-ended daily medication. It's built specifically for new mothers."
      },
      {
        title: "What it treats",
        teach: "Its lane is narrow and deliberate: postpartum depression, and only that. Notably it was studied for general MDD too, but that application wasn't approved — so PPD is where it lives.",
        check: {
          q: "What is zuranolone approved for?",
          options: ["Postpartum depression only", "Major depression broadly", "Schizophrenia"],
          answer: "Postpartum depression only",
          why: "It's approved for PPD; the general-MDD application was not approved."
        }
      },
      {
        title: "How you use it",
        teach: "The regimen is simple and self-contained: 50 mg once daily in the evening with fatty food, for 14 days — then you stop. Reduce to 40 mg with strong or moderate CYP3A4 inhibitors, or with hepatic or renal impairment. Benefit often shows by about day 3.",
        check: {
          q: "How is zuranolone dosed?",
          options: ["A finite 14-day oral course", "A single IV infusion", "Indefinite daily maintenance"],
          answer: "A finite 14-day oral course",
          why: "It's a time-limited 2-week course taken in the evening with food — not chronic therapy."
        }
      },
      {
        title: "What patients feel",
        teach: "Because it boosts inhibitory tone, the day-to-day effects skew sedating: somnolence, dizziness, fatigue, plus some diarrhea. Patients should also use reliable contraception during the course and for a week after, since it may cause fetal harm."
      },
      {
        title: "The must-not-miss",
        teach: "The boxed warning is driving impairment from CNS depression. Patients must not drive or do hazardous activities for at least 12 hours after each dose, for the whole 14-day course — and crucially, they may not be able to sense their own impairment. Additive sedation with other CNS depressants.",
        check: {
          q: "After a zuranolone dose, patients must not drive for at least…",
          options: ["12 hours", "1 hour", "3 days"],
          answer: "12 hours",
          why: "The boxed warning is CNS-depressant driving impairment — no driving for ≥12 h after each dose, and patients can't reliably judge their own impairment."
        }
      },
      {
        title: "Why it's novel",
        teach: "One line of mechanism: zuranolone is an oral neuroactive steroid — a synthetic allopregnanolone analogue that positively modulates GABA-A receptors, restoring the inhibitory tone thought to drop after delivery. It's the oral cousin of the IV drug brexanolone."
      },
      {
        title: "Good to know",
        teach: "For awareness: Zurzuvae is US-only and not marketed in Canada, so you'll meet it in the literature more than the clinic here. Its headline is simply that it's the first oral, rapid-acting, time-limited treatment purpose-built for postpartum depression."
      }
    ],
    trap: "Zuranolone (oral, 14-day home course) vs brexanolone (60-h IV infusion) — same GABA-A neurosteroid mechanism, opposite delivery.",
    takeaway: "Zuranolone = the first oral neurosteroid for PPD — a rapid, finite 14-day course, no driving for 12 h after each dose, US-only and postpartum-depression-only."
  },

  brexanolone: {
    hook: "The first drug ever approved just for postpartum depression — a 60-hour IV neurosteroid infusion that acts within the drip.",
    steps: [
      {
        title: "The big picture",
        teach: "This was the trailblazer: in 2019 brexanolone became the very first drug approved specifically for postpartum depression. It's not a pill — it's a continuous IV infusion given in hospital, and the antidepressant effect appears during the infusion itself."
      },
      {
        title: "What it treats",
        teach: "Its only job is postpartum depression, delivered inpatient in a certified setting. That intensity is the trade-off for its speed — you're admitting someone for a monitored, one-time course."
      },
      {
        title: "How you use it",
        teach: "It runs as a single continuous IV infusion over 60 hours, weight-based and titrated up then back down (30 → 60 → 90 → 60 → 30 µg/kg/h). One course, in a monitored setting — versus the weeks of waiting with an oral SSRI.",
        check: {
          q: "How is brexanolone delivered?",
          options: ["A single 60-hour continuous IV infusion", "A once-daily oral pill", "An intranasal spray"],
          answer: "A single 60-hour continuous IV infusion",
          why: "It's an inpatient 60-h IV drip — the most intensive delivery among these rapid agents."
        }
      },
      {
        title: "What patients feel",
        teach: "During the drip patients commonly feel sedation and somnolence, dizziness, dry mouth, and flushing. Most of that is manageable — but one risk sits above the rest, and it drives how you monitor."
      },
      {
        title: "The must-not-miss",
        teach: "The defining danger is excessive sedation and sudden loss of consciousness (with hypoxia). Because of that, brexanolone is given only through a REMS program with continuous pulse-oximetry, and staff assess sedation during waking periods — reducing or interrupting the infusion if it's excessive.",
        check: {
          q: "What monitoring defines brexanolone administration?",
          options: ["Continuous pulse-oximetry for sudden loss of consciousness", "Weekly CBC for agranulocytosis", "QT monitoring only"],
          answer: "Continuous pulse-oximetry for sudden loss of consciousness",
          why: "Excessive sedation / sudden loss of consciousness is the signature risk, so continuous pulse-ox is required throughout."
        }
      },
      {
        title: "Why it's novel",
        teach: "The one-line mechanism: brexanolone is IV allopregnanolone — the natural progesterone metabolite itself — acting as a positive allosteric modulator of GABA-A receptors, restoring GABAergic tone thought to fall abruptly after delivery."
      },
      {
        title: "The successor",
        teach: "For awareness, brexanolone is US-only, and those 60-hour monitored-infusion logistics limited how widely it was used. Its oral, home-course successor — same neurosteroid family — is zuranolone.",
        check: {
          q: "Which drug is brexanolone's practical outpatient successor for PPD?",
          options: ["Zuranolone (oral)", "Esketamine (intranasal)", "Lumateperone (oral)"],
          answer: "Zuranolone (oral)",
          why: "Same GABA-A neurosteroid class — zuranolone is the oral, take-home version that sidesteps the infusion logistics."
        }
      }
    ],
    trap: "Brexanolone (a GABA-A neurosteroid for PPD) vs brexpiprazole (a dopamine-partial-agonist antipsychotic) — a classic near-identical-name trap.",
    takeaway: "Brexanolone = the first PPD-specific drug — a 60-h IV neurosteroid infusion needing continuous pulse-ox for sudden loss of consciousness; US-only, largely succeeded by oral zuranolone."
  },

  lumateperone: {
    hook: "The atypical designed to be gentle — an antipsychotic with unusually low weight gain, movement effects, and prolactin.",
    steps: [
      {
        title: "The big picture",
        teach: "If your worry with antipsychotics is weight gain and stiffness, this is the calm one. Lumateperone is a second-generation antipsychotic engineered for an unusually light side-effect footprint — low metabolic burden, low movement problems, low prolactin."
      },
      {
        title: "What it treats",
        teach: "It's approved for schizophrenia and, notably, for bipolar I and II depression — as monotherapy or added to lithium or valproate. Covering both bipolar I and II depression is unusual and part of its appeal.",
        check: {
          q: "Lumateperone is approved for…",
          options: ["Schizophrenia and bipolar I/II depression", "Only schizophrenia", "Dementia-related psychosis"],
          answer: "Schizophrenia and bipolar I/II depression",
          why: "It spans schizophrenia plus both bipolar I and bipolar II depression — a broad depression footprint for an antipsychotic."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Think of the patient for whom metabolic side effects or movement problems would be a dealbreaker — someone already carrying weight, metabolic, or EPS risk. Lumateperone's gentle profile is the reason you'd pick it there.",
        check: {
          q: "What's the main reason to choose lumateperone over a classic potent D2 blocker?",
          options: ["Lower EPS, prolactin, and metabolic/weight burden", "Much stronger sedation for agitation", "It's cheaper and available everywhere"],
          answer: "Lower EPS, prolactin, and metabolic/weight burden",
          why: "Its signature is a low-burden side-effect profile — the reason to favour it when those risks matter most."
        }
      },
      {
        title: "How you use it",
        teach: "Refreshingly simple: a fixed 42 mg once daily with food, no titration — you start right at the therapeutic dose. It's a sensitive CYP3A4 substrate, though, so strong 3A4 inhibitors or inducers markedly shift its levels."
      },
      {
        title: "What patients feel",
        teach: "Day-to-day, the common effects are mild: somnolence, dry mouth, dizziness, nausea, and fatigue. Weight and movement side effects tend to be low — but you still keep standard antipsychotic monitoring in place."
      },
      {
        title: "The must-not-miss",
        teach: "It still carries the antipsychotic-class boxed warning: increased mortality in elderly patients with dementia-related psychosis — and it is NOT approved for that use. As with any antipsychotic, watch for neuroleptic malignant syndrome too.",
        check: {
          q: "Lumateperone's class boxed warning covers…",
          options: ["Increased mortality in elderly with dementia-related psychosis", "Agranulocytosis needing weekly CBC", "Neonatal withdrawal"],
          answer: "Increased mortality in elderly with dementia-related psychosis",
          why: "It carries the antipsychotic-class dementia-mortality warning and is not approved for dementia-related psychosis."
        }
      },
      {
        title: "Why it's novel",
        teach: "One line on the mechanism behind the gentleness: lumateperone pairs potent 5-HT2A antagonism with low (~40%) striatal D2 occupancy plus SERT inhibition. That high 5-HT2A:D2 ratio and low absolute D2 occupancy are why EPS, prolactin, and metabolic effects stay low. For awareness, Caplyta is US-only."
      }
    ],
    trap: "Lumateperone vs pimavanserin — both spare dopamine, but lumateperone keeps low/partial D2 activity (schizophrenia + bipolar depression), while pimavanserin has NO D2 activity at all (pure 5-HT2A inverse agonist for Parkinson psychosis).",
    takeaway: "Lumateperone = a low-EPS, low-prolactin, low-metabolic atypical (high 5-HT2A:D2 ratio, ~40% D2, SERT inhibition) — fixed 42 mg once daily, US-only, for schizophrenia and bipolar I/II depression."
  },

  xanomeline_trospium: {
    hook: "The antipsychotic that never touches dopamine receptors — schizophrenia treated upstream through muscarinic agonism.",
    steps: [
      {
        title: "The big picture",
        teach: "This one breaks a 70-year rule. Every antipsychotic before it worked by acting on dopamine D2 receptors. Xanomeline-trospium is the first that treats schizophrenia without blocking dopamine at all — a genuinely new mechanism."
      },
      {
        title: "What it treats",
        teach: "Its indication is schizophrenia. Sold as Cobenfy (formerly called KarXT), it's US-only and not available in Canada — but it's a landmark you'll hear about, so it's worth knowing why it's different."
      },
      {
        title: "Why it's novel",
        teach: "Here's the headline mechanism. Xanomeline is an M1/M4 muscarinic agonist: activating striatal M4 indirectly dampens dopamine signalling, and M1 modulates cortical circuits — so it works upstream of the dopamine synapse, with no direct D2 blockade.",
        check: {
          q: "How does xanomeline-trospium treat schizophrenia?",
          options: ["M1/M4 muscarinic agonism, with no D2 blockade", "Potent D2-receptor blockade", "NMDA antagonism"],
          answer: "M1/M4 muscarinic agonism, with no D2 blockade",
          why: "It's the only antipsychotic with no dopamine-receptor activity — it acts upstream via muscarinic receptors."
        }
      },
      {
        title: "The payoff",
        teach: "No D2 blockade means the classic dopamine-blocker problems largely disappear: essentially no EPS, no tardive dyskinesia from D2 blockade, and no prolactin elevation. The side effects shift entirely — they're cholinergic and anticholinergic instead.",
        check: {
          q: "Why does xanomeline-trospium avoid EPS and hyperprolactinemia?",
          options: ["It doesn't block D2 receptors", "It blocks D2 very potently", "It's given only intravenously"],
          answer: "It doesn't block D2 receptors",
          why: "EPS, tardive dyskinesia from D2 blockade, and prolactin elevation all stem from D2 blockade — which this drug lacks."
        }
      },
      {
        title: "Why the trospium",
        teach: "Xanomeline alone would cause miserable peripheral cholinergic effects (nausea, sweating, GI upset). So trospium is added purely as a peripheral muscarinic ANTAGONIST — a quaternary amine that barely crosses into the brain — to blunt those peripheral effects while leaving the central antipsychotic action untouched."
      },
      {
        title: "How you use it",
        teach: "It's dosed twice daily on an empty stomach, starting at xanomeline 50 mg / trospium 20 mg and titrating up over days (toward 125 mg / 30 mg BID as tolerated). Taking it away from food matters for absorption and tolerability."
      },
      {
        title: "What to watch",
        teach: "The side-effect profile is cholinergic/anticholinergic: nausea, constipation, dry mouth, dizziness, plus increased heart rate and blood pressure. It's contraindicated in urinary retention, gastric retention, untreated narrow-angle glaucoma, and moderate-to-severe hepatic impairment — and you'd watch LFTs and for urinary retention.",
        check: {
          q: "What dominates this drug's side-effect profile?",
          options: ["Cholinergic/anticholinergic effects (GI upset, dry mouth, urinary retention)", "EPS and dystonia", "Hyperprolactinemia"],
          answer: "Cholinergic/anticholinergic effects (GI upset, dry mouth, urinary retention)",
          why: "With no dopamine activity, the adverse effects are cholinergic/anticholinergic rather than dopaminergic or metabolic."
        }
      }
    ],
    trap: "Xanomeline-trospium vs every other antipsychotic — it's the ONLY one with no dopamine-receptor activity; all the classic and atypical agents block (or partially agonise) D2.",
    takeaway: "Xanomeline-trospium = first-in-class M1/M4 muscarinic-agonist antipsychotic with NO D2 blockade (so no EPS/TD/prolactin); trospium blunts peripheral cholinergic effects; US-only for schizophrenia."
  },

  pimavanserin: {
    hook: "Psychosis relief for Parkinson's without wrecking movement — a selective 5-HT2A agent with zero dopamine activity.",
    steps: [
      {
        title: "The big picture",
        teach: "Parkinson patients often develop hallucinations and delusions — but standard antipsychotics block dopamine and make their movement worse. Pimavanserin solves that dilemma: it treats the psychosis without touching dopamine, so motor function is spared."
      },
      {
        title: "What it treats",
        teach: "Its single, purpose-built indication is Parkinson disease psychosis — the hallucinations and delusions of PD. It's US-only (Nuplazid) and not available in Canada, but it's the go-to concept when D2 blockers would be harmful."
      },
      {
        title: "When you'd reach for it",
        teach: "The whole reason it exists: because it doesn't block dopamine, it controls PD psychosis without aggravating Parkinsonian motor symptoms — the exact problem that makes typical and most atypical antipsychotics risky in these patients.",
        check: {
          q: "Why is pimavanserin preferred for Parkinson disease psychosis?",
          options: ["It controls psychosis without worsening motor symptoms", "It's the fastest-acting sedative", "It raises dopamine to fix tremor"],
          answer: "It controls psychosis without worsening motor symptoms",
          why: "No D2 blockade means it treats the psychosis without worsening Parkinsonian movement — its defining advantage."
        }
      },
      {
        title: "How you use it",
        teach: "It's simple to dose: 34 mg once daily, with or without food, no titration. Reduce to 10 mg/day if it's combined with a strong CYP3A4 inhibitor. Counsel patients that it can take a few weeks to work — this isn't a rapid tranquilizer."
      },
      {
        title: "What patients feel",
        teach: "Common effects are relatively mild and non-motor: peripheral edema, nausea, constipation, confusion (especially in the elderly), and gait disturbance. Since the population is older PD patients, watch for falls and confusion."
      },
      {
        title: "The must-not-miss",
        teach: "The defining safety caution is QT prolongation — avoid stacking it with other QT-prolonging drugs, and check an ECG if there are risk factors. It also carries the antipsychotic-class boxed warning for increased mortality in elderly dementia-related psychosis, and is not approved for dementia psychosis.",
        check: {
          q: "Pimavanserin's defining safety caution?",
          options: ["QT prolongation", "Agranulocytosis", "Serotonin syndrome"],
          answer: "QT prolongation",
          why: "QT prolongation is its signature risk — avoid additive QT-prolonging drugs and check an ECG when risk factors are present."
        }
      },
      {
        title: "Why it's novel",
        teach: "One line on mechanism: pimavanserin is a selective 5-HT2A inverse agonist (with some 5-HT2C activity) and has NO dopamine D2 activity at all. It quiets 5-HT2A signalling instead of blocking dopamine — which is precisely why movement is protected."
      }
    ],
    trap: "Pimavanserin vs quetiapine/clozapine for PD psychosis — all avoid strong D2 blockade, but pimavanserin has NO D2 activity whatsoever (pure 5-HT2A inverse agonist), while quetiapine/clozapine are low-D2 atypicals with off-target effects.",
    takeaway: "Pimavanserin = a selective 5-HT2A inverse agonist with zero D2 activity — treats Parkinson disease psychosis without worsening movement; watch QT; US-only with the dementia-mortality boxed warning."
  }
};
