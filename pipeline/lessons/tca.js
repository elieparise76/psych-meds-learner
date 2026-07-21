export default {
  amitriptyline: {
    hook: "The classic sedating tricyclic — now a low-dose workhorse for migraine, nerve pain and sleep, not depression. And lethal in overdose.",
    steps: [
      {
        title: "The big picture",
        teach: "Amitriptyline is the prototypical tertiary-amine TCA — the most sedating and most anticholinergic of the bunch. Here's the twist: today you rarely start it for depression. It survives because those same 'side effects' are useful at low doses elsewhere."
      },
      {
        title: "What it treats",
        teach: "For major depression, CANMAT ranks it second-line — the SSRIs are safer and just as effective. Its real modern life is off-label and low-dose: migraine prophylaxis, neuropathic pain, chronic tension headache, fibromyalgia, and insomnia."
      },
      {
        title: "When you'd reach for it",
        teach: "Picture a patient with painful diabetic neuropathy who also sleeps badly. A small bedtime dose of amitriptyline can quiet the nerve pain and help sleep at once — you're using it as an analgesic-hypnotic, not really as an antidepressant.",
        check: {
          q: "Why is low-dose bedtime amitriptyline a tidy pick for neuropathic pain plus insomnia?",
          options: ["It relieves nerve pain and its sedation aids sleep", "It's a stimulant that boosts daytime energy", "It has no effect on sleep"],
          answer: "It relieves nerve pain and its sedation aids sleep",
          why: "The analgesic effect plus its strong sedation cover both problems with one low dose."
        }
      },
      {
        title: "How you use it",
        teach: "Start low and dose at bedtime: 25 mg qhs for depression, or just 10–25 mg qhs for pain or sleep. Titrate up by 25 mg every few days as tolerated. Outpatient ceiling is 150 mg/day (up to 300 mg inpatient)."
      },
      {
        title: "What patients feel",
        teach: "The anticholinergic and sedating load is front and centre: dry mouth, constipation, blurred vision, urinary hesitancy, weight gain, drowsiness, and dizziness on standing. Tell patients to rise slowly and expect a dry mouth.",
        check: {
          q: "Which cluster of side effects should you counsel about first with amitriptyline?",
          options: ["Dry mouth, constipation, sedation, orthostatic dizziness", "Diarrhea and insomnia", "None — it's very clean"],
          answer: "Dry mouth, constipation, sedation, orthostatic dizziness",
          why: "Its potent H1/M1/α1 blockade drives sedation, anticholinergic effects, and orthostasis."
        }
      },
      {
        title: "The must-not-miss",
        teach: "This is the headline: TCAs are lethal in overdose. By blocking cardiac sodium channels they widen the QRS and cause arrhythmias, plus seizures and coma — and the toxic dose isn't far above the therapeutic one. Never a casual first choice in someone with suicide risk; SSRIs are far safer if taken in excess.",
        check: {
          q: "What makes a TCA overdose so dangerous compared with an SSRI overdose?",
          options: ["Cardiac sodium-channel block → wide QRS, arrhythmia, seizures, coma", "Only mild nausea", "It's actually safer than an SSRI"],
          answer: "Cardiac sodium-channel block → wide QRS, arrhythmia, seizures, coma",
          why: "The narrow margin and cardiotoxicity make TCA overdose potentially fatal — SSRIs rarely are."
        }
      },
      {
        title: "Elderly caution",
        teach: "In older adults the anticholinergic burden bites hardest: confusion or frank delirium, falls from orthostasis, and worsened glaucoma or urinary retention. It's a Beers-list drug. Get a baseline ECG, especially over age 40 or with cardiac disease.",
        check: {
          q: "Why is amitriptyline a poor choice in a frail elderly patient?",
          options: ["Anticholinergic delirium, falls, and cardiac risk", "It has no side effects in the elderly", "It's too weak to work"],
          answer: "Anticholinergic delirium, falls, and cardiac risk",
          why: "Its heavy anticholinergic/orthostatic load makes it high-risk in older adults."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Under the hood it blocks reuptake of both noradrenaline and serotonin, but it's also a potent H1 (sedation), muscarinic (dry mouth) and α1 (orthostasis) blocker — which is why it feels the way it does. It's demethylated in the body to nortriptyline, its own better-tolerated metabolite."
      }
    ],
    trap: "Amitriptyline (tertiary amine, sedating) is demethylated to nortriptyline (secondary amine, cleaner) — same family, very different tolerability.",
    takeaway: "Amitriptyline = the sedating, anticholinergic tertiary-amine TCA now used mostly low-dose for migraine/nerve pain/sleep — second-line for depression because it's lethal in overdose and rough on the elderly."
  },

  nortriptyline: {
    hook: "The better-tolerated secondary-amine TCA — the one you pick for the elderly, and the rare antidepressant with a real blood-level target.",
    steps: [
      {
        title: "The big picture",
        teach: "Nortriptyline is the active secondary-amine metabolite of amitriptyline — and it's the more refined cousin. Less sedating, less anticholinergic, and the least likely TCA to drop blood pressure on standing. If you must use a TCA in an older patient, this is usually the one."
      },
      {
        title: "What it treats",
        teach: "Like the class it's a second-line antidepressant, but it also earns its keep off-label for neuropathic pain, migraine prophylaxis, and smoking cessation. Same toolkit as the other TCAs, just gentler to take."
      },
      {
        title: "When you'd reach for it",
        teach: "An older adult who genuinely needs a tricyclic — say for treatment-resistant depression or chronic pain — is the classic nortriptyline patient, precisely because it causes the least orthostatic hypotension and the fewest anticholinergic problems of the group.",
        check: {
          q: "Among the TCAs, why is nortriptyline preferred in the elderly?",
          options: ["Least orthostatic and anticholinergic burden", "It's the most sedating", "It has the strongest anticholinergic effect"],
          answer: "Least orthostatic and anticholinergic burden",
          why: "As a secondary amine it blocks H1/M1/α1 far less, so fewer falls and less confusion."
        }
      },
      {
        title: "How you use it",
        teach: "Start 25 mg at bedtime (10–25 mg in the elderly) and climb by 25 mg every few days toward 75–100 mg/day, ceiling 150 mg/day. Then do something you rarely do with antidepressants: check a blood level."
      },
      {
        title: "The therapeutic window",
        teach: "Here's the practical pearl — nortriptyline has a genuine therapeutic window, roughly 50–150 ng/mL, and it's curvilinear: go ABOVE ~150 and efficacy actually falls off. It's one of the very few antidepressants where a level truly guides dosing.",
        check: {
          q: "A patient on nortriptyline isn't improving and the level is 210 ng/mL. What's the smart move?",
          options: ["Lower the dose back into the 50–150 window", "Push the dose much higher", "Add a second TCA"],
          answer: "Lower the dose back into the 50–150 window",
          why: "The window is curvilinear — above ~150 ng/mL response can worsen, so aim back inside it."
        }
      },
      {
        title: "What patients feel",
        teach: "Expect the TCA staples but milder: dry mouth, constipation, some blurred vision, and only mild sedation and orthostasis. It's the best-tolerated tricyclic day-to-day — which is exactly why it survives in practice.",
        check: {
          q: "Compared with amitriptyline, nortriptyline's day-to-day side effects are…",
          options: ["Milder — it's the best-tolerated TCA", "More severe", "Exactly the same"],
          answer: "Milder — it's the best-tolerated TCA",
          why: "Less H1/M1/α1 blockade means milder sedation, dry mouth and orthostasis."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Better tolerated does NOT mean safe in overdose. Nortriptyline is still fully cardiotoxic — sodium-channel block, widened QRS, arrhythmias and seizures if too much is taken. Baseline ECG (especially over 40 or with heart disease), and keep the supply secured.",
        check: {
          q: "True or false: because nortriptyline is well tolerated, its overdose is benign.",
          options: ["False — it's still cardiotoxic and dangerous in overdose", "True — overdose is harmless", "True — it has no cardiac effects"],
          answer: "False — it's still cardiotoxic and dangerous in overdose",
          why: "Tolerability at therapeutic doses doesn't change TCA overdose lethality."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "As a secondary amine it blocks noradrenaline reuptake more than serotonin, with much less H1/M1/α1 blockade than its parent amitriptyline — that lighter receptor footprint is the whole reason it's cleaner to take."
      }
    ],
    trap: "Nortriptyline (secondary amine, cleaner, real blood-level target) vs amitriptyline (its sedating tertiary-amine parent).",
    takeaway: "Nortriptyline = the elderly-friendly secondary-amine TCA with a genuine therapeutic window (~50–150 ng/mL) — better tolerated, but still cardiotoxic in overdose."
  },

  imipramine: {
    hook: "The original tricyclic — the prototype antidepressant that also treats childhood bedwetting and panic. Still lethal in overdose.",
    steps: [
      {
        title: "The big picture",
        teach: "Imipramine is where it all began — the first tricyclic antidepressant and the template for the whole class. It's a tertiary amine, so like amitriptyline it's sedating and anticholinergic, with the full TCA safety baggage."
      },
      {
        title: "What it treats",
        teach: "In Canada it's actually approved for two things: depression and nocturnal enuresis (bedwetting) in children. Off-label it's a classic agent for panic disorder and for neuropathic pain — a surprisingly broad résumé for an old drug.",
        check: {
          q: "Besides depression, what is a classic Canadian-approved use of imipramine?",
          options: ["Nocturnal enuresis (bedwetting) in children", "Type 2 diabetes", "Asthma"],
          answer: "Nocturnal enuresis (bedwetting) in children",
          why: "Imipramine has a long-standing pediatric enuresis indication alongside depression."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Think of a child with stubborn nocturnal enuresis who hasn't responded to behavioural measures or desmopressin — imipramine at bedtime is a recognised next step. Historically it was also a go-to for panic disorder before SSRIs took over."
      },
      {
        title: "How you use it",
        teach: "For depression, 25–75 mg/day, titrating gradually with the bigger share at bedtime (ceiling 200 mg outpatient). For enuresis it's a small bedtime dose, usually no more than 50–75 mg qhs and age-adjusted."
      },
      {
        title: "The must-not-miss",
        teach: "Overdose is potentially lethal — the same cardiotoxic sodium-channel block, wide QRS, seizures and coma as every TCA. And here's the sharp edge: the enuresis indication puts these tablets in homes with young children, so securing the supply is not optional.",
        check: {
          q: "Why is imipramine's overdose risk especially worrying with the enuresis indication?",
          options: ["Tablets sit in homes with small children who could ingest them", "Children are immune to TCAs", "It becomes non-toxic in children"],
          answer: "Tablets sit in homes with small children who could ingest them",
          why: "A few tablets can be fatal to a small child — accidental ingestion is a real hazard."
        }
      },
      {
        title: "What patients feel",
        teach: "Standard tertiary-amine fare: dry mouth, constipation, sedation, weight gain, sweating, and dizziness on standing from orthostatic hypotension. Rising slowly and expecting a dry mouth are the everyday counselling points."
      },
      {
        title: "A touch of mechanism",
        teach: "Imipramine blocks reuptake of both noradrenaline and serotonin, with the usual H1/M1/α1 blockade on the side. It's demethylated to desipramine — an active secondary-amine metabolite — mirroring exactly how amitriptyline becomes nortriptyline.",
        check: {
          q: "Imipramine is demethylated to which active secondary-amine metabolite?",
          options: ["Desipramine", "Nortriptyline", "Fluoxetine"],
          answer: "Desipramine",
          why: "Imipramine→desipramine parallels amitriptyline→nortriptyline (tertiary→secondary amine)."
        }
      }
    ],
    trap: "Imipramine (tertiary-amine parent) is demethylated to desipramine (secondary amine) — the same parent/metabolite pattern as amitriptyline/nortriptyline.",
    takeaway: "Imipramine = the prototype TCA, uniquely used for childhood enuresis and panic — and, like all TCAs, cardiotoxic and lethal in overdose (keep it away from kids)."
  },

  desipramine: {
    hook: "The cleanest, most noradrenergic TCA — activating instead of sedating — but still cardiotoxic, with pediatric sudden-death reports.",
    steps: [
      {
        title: "The big picture",
        teach: "Desipramine is the closest thing to a 'clean' tricyclic: the most noradrenergic and the least sedating and anticholinergic of the family. It's the secondary-amine metabolite of imipramine, and it tends to activate rather than settle patients."
      },
      {
        title: "What it treats",
        teach: "It's used for depression, and off-label for neuropathic pain and as an ADHD adjunct — its noradrenergic punch fits both. Like all TCAs it sits behind the SSRIs as a later-line choice."
      },
      {
        title: "When you'd reach for it",
        teach: "Consider the patient who needs a TCA but can't tolerate dry mouth, constipation and grogginess. Desipramine's light anticholinergic footprint makes it the tricyclic of choice when those effects are the problem — though its flip side is activation.",
        check: {
          q: "Why might you choose desipramine over amitriptyline for a TCA-requiring patient?",
          options: ["Least anticholinergic and sedating of the TCAs", "It's the most sedating option", "It has the strongest dry-mouth effect"],
          answer: "Least anticholinergic and sedating of the TCAs",
          why: "As the most noradrenergic secondary amine, it has the lightest anticholinergic/sedative load."
        }
      },
      {
        title: "How you use it",
        teach: "Start 25–75 mg/day and build toward 100–200 mg/day (ceiling 200 outpatient). Because it's activating, it's often given in the morning rather than at bedtime — the opposite habit from sedating TCAs like amitriptyline."
      },
      {
        title: "What patients feel",
        teach: "Instead of sedation, expect insomnia and activation, plus sweating, tremor, and some orthostasis. Dose it earlier in the day if it disrupts sleep — a small counselling point that makes a real difference.",
        check: {
          q: "If desipramine is disrupting a patient's sleep, what's the simple fix?",
          options: ["Move the dose earlier in the day", "Move the dose to bedtime", "Double the dose"],
          answer: "Move the dose earlier in the day",
          why: "It's activating, so earlier dosing limits its insomnia."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Clean day-to-day, but still cardiotoxic in overdose — wide QRS, arrhythmias, seizures. Desipramine specifically carries reports of sudden death in children, so it's avoided in that age group. Get a baseline ECG in anyone with cardiac risk.",
        check: {
          q: "What's the notable safety flag specific to desipramine?",
          options: ["Reports of sudden death in children", "It's completely non-cardiotoxic", "It causes no arrhythmias"],
          answer: "Reports of sudden death in children",
          why: "Pediatric sudden-death reports make desipramine a drug to avoid in children."
        }
      },
      {
        title: "A drug-interaction pearl",
        teach: "Desipramine is a strong CYP2D6 substrate. Add a 2D6 inhibitor — fluoxetine, paroxetine or bupropion — and its level can climb sharply, pushing it toward toxicity. Worth remembering when it's combined with another antidepressant.",
        check: {
          q: "Adding fluoxetine to desipramine can do what to the desipramine level?",
          options: ["Raise it sharply by inhibiting CYP2D6", "Lower it to zero", "Have no effect"],
          answer: "Raise it sharply by inhibiting CYP2D6",
          why: "Fluoxetine inhibits CYP2D6, so desipramine accumulates — a real toxicity risk."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "It's the most selective noradrenaline-reuptake inhibitor of the tricyclics, with minimal H1/M1/α1 blockade — which is exactly why it's activating and low on anticholinergic effects."
      }
    ],
    trap: "Desipramine (secondary amine, activating, clean) vs its parent imipramine (tertiary amine, sedating).",
    takeaway: "Desipramine = the most noradrenergic, least anticholinergic, activating TCA — cleaner to take, but still cardiotoxic and specifically avoided in children."
  },

  clomipramine: {
    hook: "The most serotonergic tricyclic — the historic gold standard for OCD — but it has the highest seizure risk of the class.",
    steps: [
      {
        title: "The big picture",
        teach: "Clomipramine is the odd tricyclic that behaves almost like a serotonin drug — it's the most serotonergic TCA by far. That single quirk gives it a job no other tricyclic can really claim: treating OCD."
      },
      {
        title: "What it treats",
        teach: "In Canada it's approved for obsessive-compulsive disorder and depression, and used off-label for panic disorder and premature ejaculation. It's the only TCA with robust, proven efficacy in OCD — the historic gold standard before SSRIs.",
        check: {
          q: "What sets clomipramine apart from the other TCAs?",
          options: ["It's the only TCA with strong OCD efficacy", "It's the least serotonergic", "It has no antidepressant effect"],
          answer: "It's the only TCA with strong OCD efficacy",
          why: "Its potent serotonin reuptake block makes it uniquely effective in OCD."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "Think of OCD that hasn't responded to adequate trials of SSRIs. Clomipramine is the classic next step — its serotonergic firepower can succeed where SSRIs stalled, and you counsel that OCD response can take 6–12 weeks.",
        check: {
          q: "Where does clomipramine typically fit in OCD treatment today?",
          options: ["After SSRIs have failed", "As the very first drug before any SSRI", "Only for mild cases"],
          answer: "After SSRIs have failed",
          why: "SSRIs are first-line for OCD; clomipramine is the potent fallback given its toxicity."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 25 mg/day and titrate up over about two weeks toward 100–250 mg/day. The 250 mg/day ceiling isn't arbitrary — it's set by seizure risk, which is the next card."
      },
      {
        title: "The must-not-miss",
        teach: "Clomipramine has the highest seizure risk of any TCA, and it's dose-dependent — that's exactly why the dose is capped at 250 mg/day. Stack that on top of the usual TCA cardiotoxicity in overdose, and be wary of anything else that lowers the seizure threshold or adds serotonergic load.",
        check: {
          q: "Why is clomipramine's dose capped at 250 mg/day?",
          options: ["Dose-dependent seizure risk — highest of the TCAs", "It stops being absorbed", "It causes weight loss"],
          answer: "Dose-dependent seizure risk — highest of the TCAs",
          why: "Seizures rise sharply with dose, so the ceiling limits that risk."
        }
      },
      {
        title: "What patients feel",
        teach: "Because it's so serotonergic, sexual dysfunction is prominent — often the main complaint. Add the usual tertiary-amine load: dry mouth, sedation, constipation, weight gain, sweating and tremor.",
        check: {
          q: "Which side effect is especially prominent with clomipramine?",
          options: ["Sexual dysfunction", "Hair loss", "Hyperactivity"],
          answer: "Sexual dysfunction",
          why: "Its potent serotonergic action makes sexual dysfunction a leading complaint."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "The parent drug is a potent serotonin-reuptake blocker (hence the OCD effect), while its metabolite desmethylclomipramine swings noradrenergic — plus the standard H1/M1/α1 blockade of a tertiary amine."
      }
    ],
    trap: "Clomipramine (the TCA for OCD) vs clomiphene (a fertility drug) — one letter apart, completely different jobs.",
    takeaway: "Clomipramine = the most serotonergic TCA and the gold-standard tricyclic for OCD — but it carries the highest seizure risk (hence the 250 mg cap) plus TCA cardiotoxicity."
  },

  doxepin: {
    hook: "The most antihistaminic tricyclic — a full-dose antidepressant, but famous today as an ultra-low-dose sleep drug.",
    steps: [
      {
        title: "The big picture",
        teach: "Doxepin is a tertiary-amine TCA, but its standout feature is being one of the most potent H1 antihistamines ever made. That antihistamine power gives it a double life — a normal antidepressant at high doses, and something quite different at tiny ones."
      },
      {
        title: "The low-dose hypnotic",
        teach: "At just 3–6 mg it acts as a selective histamine-blocking hypnotic, especially for sleep-maintenance insomnia (waking in the night). At that microdose it's essentially a pure H1 blocker with minimal anticholinergic or cardiac toxicity — a genuinely useful, tolerable sleep aid.",
        check: {
          q: "At 3–6 mg, what is doxepin acting as?",
          options: ["A selective H1-antihistamine hypnotic for sleep maintenance", "A high-dose antidepressant", "A stimulant"],
          answer: "A selective H1-antihistamine hypnotic for sleep maintenance",
          why: "The microdose blocks histamine to promote sleep, with little TCA toxicity."
        }
      },
      {
        title: "When you'd reach for it",
        teach: "An older patient who keeps waking at 3 a.m. is a good candidate for low-dose doxepin — it targets sleep maintenance without the fall and next-day-confusion risks of benzodiazepines or Z-drugs, and it's off-label handy for chronic urticaria and pruritus too.",
        check: {
          q: "Why might low-dose doxepin beat a Z-drug for an older patient's sleep maintenance?",
          options: ["Fewer fall and next-day-confusion risks", "It's a much stronger sedative", "It builds dependence faster"],
          answer: "Fewer fall and next-day-confusion risks",
          why: "At 3–6 mg it aids sleep maintenance without the fall/confusion baggage of Z-drugs and benzodiazepines."
        }
      },
      {
        title: "How you use it",
        teach: "Two completely different dosing worlds. For depression: 25–75 mg at bedtime, titrated up (ceiling 150 mg/day outpatient). For insomnia: a flat 3–6 mg at bedtime that you do NOT titrate upward — pushing it higher just brings back the TCA baggage."
      },
      {
        title: "The must-not-miss",
        teach: "The safety of low-dose doxepin does not carry over. At full antidepressant doses it's a standard tertiary-amine TCA — sedating, anticholinergic, and cardiotoxic and potentially lethal in overdose. The dose literally defines how dangerous the drug is.",
        check: {
          q: "How does doxepin's overdose danger change with dose?",
          options: ["Safe as a 3–6 mg hypnotic, but cardiotoxic at full antidepressant doses", "Equally dangerous at every dose", "Always harmless"],
          answer: "Safe as a 3–6 mg hypnotic, but cardiotoxic at full antidepressant doses",
          why: "The microdose is benign; full antidepressant doses behave like any lethal TCA."
        }
      },
      {
        title: "What patients feel",
        teach: "Sedation is the dominant effect — marked drowsiness, and next-day grogginess if the dose is too high or taken too late. Warn against combining it with alcohol or other sedatives, and take it at bedtime.",
        check: {
          q: "What should you warn a doxepin patient to avoid?",
          options: ["Alcohol and other sedatives", "High-fibre foods", "Sunlight"],
          answer: "Alcohol and other sedatives",
          why: "Its strong sedation stacks dangerously with alcohol and other CNS depressants."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Like other tertiary amines it blocks noradrenaline and serotonin reuptake, but its defining trait is exceptionally potent H1 antihistamine blockade — the reason both the sedation and the low-dose hypnotic effect exist."
      }
    ],
    trap: "With doxepin the DOSE is the drug: 3–6 mg is a clean sleep aid; 100+ mg is a fully cardiotoxic TCA.",
    takeaway: "Doxepin = the most antihistaminic TCA — a safe selective H1 hypnotic at 3–6 mg, but a sedating, cardiotoxic tricyclic at full antidepressant doses."
  },

  trimipramine: {
    hook: "The very sedating tricyclic with weak reuptake action — chosen for depression when insomnia dominates. Still cardiotoxic in overdose.",
    steps: [
      {
        title: "The big picture",
        teach: "Trimipramine is a bit of an oddball: a markedly sedating tertiary-amine TCA whose actual reuptake inhibition is relatively weak. In other words, it feels like a heavy antihistamine that happens to be filed under antidepressants."
      },
      {
        title: "What it treats",
        teach: "It's approved for depression in Canada, and its practical niche is depression where insomnia is the loudest complaint. The strong sedation that would be a drawback elsewhere becomes the selling point here."
      },
      {
        title: "When you'd reach for it",
        teach: "A depressed patient who simply cannot sleep is the classic trimipramine patient — you're leaning on its sedation to fix both the mood and the insomnia in one bedtime dose.",
        check: {
          q: "What's trimipramine's main clinical niche?",
          options: ["Depression with prominent insomnia", "Activating a withdrawn, sleepy patient", "OCD"],
          answer: "Depression with prominent insomnia",
          why: "Its heavy sedation makes it a fit when insomnia dominates the picture."
        }
      },
      {
        title: "How you use it",
        teach: "Start 25–50 mg at bedtime and titrate toward 75–150 mg/day (ceiling 150 outpatient). It's a bedtime drug — the sedation is the point, so dose it at night."
      },
      {
        title: "What patients feel",
        teach: "Expect marked sedation, dry mouth, constipation, weight gain and orthostatic dizziness — the full tertiary-amine anticholinergic/antihistamine package. Rise slowly and avoid other sedatives and alcohol.",
        check: {
          q: "What's the dominant day-to-day effect patients notice on trimipramine?",
          options: ["Marked sedation", "Insomnia and agitation", "Diarrhea"],
          answer: "Marked sedation",
          why: "It's one of the most sedating TCAs — which is exactly why it's used for insomnia."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Weak reuptake action does NOT mean a weak poison. In overdose trimipramine is fully cardiotoxic like every TCA — sodium-channel block, wide QRS, arrhythmias, seizures. Baseline ECG if there's cardiac risk, and keep the supply secured.",
        check: {
          q: "Does trimipramine's weak reuptake inhibition make it safe in overdose?",
          options: ["No — it's still fully cardiotoxic in overdose", "Yes — overdose is harmless", "Yes — it has no cardiac effects"],
          answer: "No — it's still fully cardiotoxic in overdose",
          why: "Its receptor blockade and sodium-channel toxicity make overdose dangerous regardless of reuptake potency."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "It has weak monoamine reuptake inhibition but strong H1, M1 and α1 blockade — so it behaves mostly as a sedating antidepressant. A neat aside: it causes relatively little REM-sleep suppression compared with other TCAs."
      }
    ],
    trap: "Trimipramine's weak reuptake inhibition doesn't soften its overdose — it's as cardiotoxic as any TCA.",
    takeaway: "Trimipramine = a very sedating tertiary-amine TCA with weak reuptake action, used for depression with insomnia — and still lethal in overdose."
  },

  maprotiline: {
    hook: "A tetracyclic that acts like a noradrenergic TCA — but with a long half-life and a notably HIGH seizure risk.",
    steps: [
      {
        title: "The big picture",
        teach: "Maprotiline is technically a tetracyclic, but pharmacologically it behaves like a selective-noradrenergic tricyclic — same TCA-style toxicity. Its two defining quirks are a long half-life (so it accumulates) and a strong tendency to lower the seizure threshold."
      },
      {
        title: "What it treats",
        teach: "Its only real job is depression — no clever off-label niche here. Given its seizure liability and TCA toxicity, it's very much a later-line option now that safer antidepressants exist."
      },
      {
        title: "The must-not-miss",
        teach: "The headline risk is seizures. Because maprotiline lowers the seizure threshold AND its long half-life lets it accumulate, the seizure risk is genuinely high — worst with rapid titration or high doses. Layer the usual TCA cardiotoxicity on top, and caution is the watchword.",
        check: {
          q: "What's the standout safety concern with maprotiline?",
          options: ["High seizure risk from accumulation and a lowered seizure threshold", "It's completely seizure-free", "It causes no cardiac effects"],
          answer: "High seizure risk from accumulation and a lowered seizure threshold",
          why: "Its long half-life plus strong seizure-lowering effect give it a notably high seizure risk."
        }
      },
      {
        title: "How you use it",
        teach: "This is a titrate-slowly, keep-it-low drug. Start 25–75 mg/day and increase slowly given the accumulation risk, staying at the low end of the range (ceiling 150 mg/day; up to 225 short-term specialist use) precisely to limit seizures."
      },
      {
        title: "What patients feel",
        teach: "Sedation, dry mouth, constipation, weight gain and orthostasis — plus one distinctive extra: skin rash is relatively common with maprotiline. Tell patients to report any rash.",
        check: {
          q: "Which side effect is notably more common with maprotiline than other TCAs?",
          options: ["Skin rash", "Hair growth", "Hyperactivity"],
          answer: "Skin rash",
          why: "Skin rash (and photosensitivity) is a recognised, relatively common effect of maprotiline."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "It's a selective noradrenaline-reuptake inhibitor with strong H1 and moderate M1/α1 blockade — pharmacologically TCA-like, which is why it shares their cardiotoxic overdose profile despite the four-ring structure."
      },
      {
        title: "Overdose still counts",
        teach: "Don't let the tetracyclic label fool you — in overdose maprotiline blocks cardiac sodium channels just like a TCA (wide QRS, arrhythmias), and the seizures that make it risky at therapeutic doses become prominent in overdose too.",
        check: {
          q: "In overdose, maprotiline behaves like…",
          options: ["A cardiotoxic TCA, with prominent seizures too", "A harmless antihistamine", "A stimulant with no cardiac effect"],
          answer: "A cardiotoxic TCA, with prominent seizures too",
          why: "Its TCA-like pharmacology means sodium-channel cardiotoxicity plus seizures in overdose."
        }
      }
    ],
    trap: "Maprotiline (a tetracyclic TCA-like drug, high seizure risk) vs mirtazapine (a tetracyclic NaSSA, very different and much safer).",
    takeaway: "Maprotiline = a tetracyclic that acts like a noradrenergic TCA — long half-life, notably high seizure risk, skin rash, and TCA cardiotoxicity in overdose."
  },

  amoxapine: {
    hook: "The tricyclic that's secretly part antipsychotic — a loxapine metabolite that blocks dopamine, causing EPS, tardive dyskinesia, even NMS.",
    steps: [
      {
        title: "The big picture",
        teach: "Amoxapine is the family's black sheep. It's a tetracyclic antidepressant, but it's a metabolite of the antipsychotic loxapine — so unlike every other TCA it also blocks dopamine D2 receptors. That one fact reshapes its entire side-effect profile."
      },
      {
        title: "What it treats",
        teach: "It's used for depression. Its built-in D2 blockade meant it was sometimes reached for in depression with psychotic features — but that same dopamine blockade is exactly what makes it problematic, so it's rarely a good modern choice."
      },
      {
        title: "The unique risk",
        teach: "Because of its D2 antagonism, amoxapine can do things no other TCA does: extrapyramidal symptoms (akathisia, parkinsonism), tardive dyskinesia, hyperprolactinemia, and even neuroleptic malignant syndrome. Watch for abnormal movements, stiffness or high fever.",
        check: {
          q: "Why can amoxapine cause EPS and tardive dyskinesia, unlike other TCAs?",
          options: ["It blocks dopamine D2 receptors (it's a loxapine metabolite)", "It has no dopamine activity", "It's a pure serotonin drug"],
          answer: "It blocks dopamine D2 receptors (it's a loxapine metabolite)",
          why: "Its antipsychotic-like D2 blockade produces the movement disorders and NMS risk."
        }
      },
      {
        title: "How you use it",
        teach: "Start 50 mg two or three times daily and titrate toward 200–300 mg/day in divided doses (single doses ≤300 mg; ceiling 400 mg/day outpatient). Once settled it can be consolidated to a bedtime dose."
      },
      {
        title: "The must-not-miss",
        teach: "Amoxapine's overdose is especially nasty. On top of the usual TCA cardiotoxicity, it causes severe seizures and even status epilepticus, and there are reports of acute renal failure — a more dangerous overdose than most tricyclics.",
        check: {
          q: "What makes amoxapine overdose worse than a typical TCA overdose?",
          options: ["Severe seizures/status and acute renal failure on top of cardiotoxicity", "It's less toxic than other TCAs", "It only causes mild drowsiness"],
          answer: "Severe seizures/status and acute renal failure on top of cardiotoxicity",
          why: "Its overdose adds severe seizures and renal failure to the standard TCA cardiotoxicity."
        }
      },
      {
        title: "What patients feel",
        teach: "Expect the usual TCA effects — sedation, dry mouth, constipation, weight gain, orthostasis — PLUS antipsychotic-type problems like akathisia and parkinsonism. Counsel patients to report abnormal movements, stiffness or fever.",
        check: {
          q: "Beyond the usual TCA effects, what extra should amoxapine patients be told to report?",
          options: ["Abnormal movements, stiffness or fever", "Improved appetite", "Nothing extra"],
          answer: "Abnormal movements, stiffness or fever",
          why: "These flag its unique D2-driven risks: EPS, tardive dyskinesia and NMS."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "It's a tetracyclic that blocks noradrenaline (and some serotonin) reuptake AND antagonises dopamine D2 receptors — a genuinely dual antidepressant/antipsychotic pharmacology that no other TCA shares."
      }
    ],
    trap: "Amoxapine (a TCA with antipsychotic-like D2 blockade) vs amoxicillin (an antibiotic) — near-identical names, wildly different drugs.",
    takeaway: "Amoxapine = the loxapine-metabolite TCA with D2 blockade — uniquely causing EPS, tardive dyskinesia and NMS, plus an especially dangerous overdose (seizures, renal failure)."
  },

  protriptyline: {
    hook: "The activating, non-sedating tricyclic — a low-dose secondary amine for withdrawn or sleepy depression; longest half-life of the class.",
    steps: [
      {
        title: "The big picture",
        teach: "Protriptyline is the tricyclic that wakes you up. It's the activating, least-sedating secondary amine of the family — and it's also the most potent per milligram, so its doses are strikingly small."
      },
      {
        title: "What it treats",
        teach: "Its niche is depression with psychomotor retardation or hypersomnia — the slowed-down, oversleeping patient. Off-label it's used for narcolepsy and daytime somnolence, leaning on its activating profile."
      },
      {
        title: "When you'd reach for it",
        teach: "Picture a depressed patient who is withdrawn, sluggish and sleeping too much. Protriptyline's activating effect is a fit here — the opposite of when you'd reach for sedating amitriptyline.",
        check: {
          q: "Which depressed patient best fits protriptyline?",
          options: ["Withdrawn, slowed-down, oversleeping (psychomotor retardation)", "Agitated and not sleeping at all", "Someone who needs heavy sedation"],
          answer: "Withdrawn, slowed-down, oversleeping (psychomotor retardation)",
          why: "Its activating profile suits retarded/hypersomnolent depression, not agitation."
        }
      },
      {
        title: "How you use it",
        teach: "Doses are low: 5–10 mg three times daily, titrated gradually, ceiling just 60 mg/day. Crucially, dose it earlier in the day and avoid late-evening doses — it's stimulating and will cause insomnia at bedtime."
      },
      {
        title: "What patients feel",
        teach: "Rather than sedation, expect insomnia, activation, anxiety, and a fast heartbeat — tachycardia is prominent. Counsel patients to take it earlier in the day and to report palpitations.",
        check: {
          q: "Why should protriptyline be dosed earlier in the day?",
          options: ["It's activating and causes insomnia if taken late", "It must be taken with dinner", "It causes heavy sedation at night"],
          answer: "It's activating and causes insomnia if taken late",
          why: "Its stimulating profile disrupts sleep, so avoid evening doses."
        }
      },
      {
        title: "The must-not-miss",
        teach: "Still a cardiotoxic TCA in overdose — wide QRS, arrhythmias, seizures — with tachycardia especially prominent. And it has the longest half-life of the TCAs (about 74 hours), so it clears slowly and any toxicity lingers.",
        check: {
          q: "Which feature of protriptyline means toxicity clears especially slowly?",
          options: ["The longest half-life of the TCAs (~74 h)", "The shortest half-life of any drug", "It isn't metabolised at all"],
          answer: "The longest half-life of the TCAs (~74 h)",
          why: "Its ~74-hour half-life means slow clearance, so effects and toxicity persist."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "It's a secondary amine and a potent noradrenaline-reuptake inhibitor — activating rather than sedating, but still anticholinergic, and still blocking cardiac sodium channels in overdose."
      }
    ],
    trap: "Protriptyline (activating, non-sedating, low doses) sits at the opposite pole from sedating amitriptyline and doxepin.",
    takeaway: "Protriptyline = the activating, low-dose secondary-amine TCA for retarded/hypersomnolent depression — longest half-life of the class, and still cardiotoxic in overdose."
  }
};
