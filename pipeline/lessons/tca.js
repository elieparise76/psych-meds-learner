export default {
  amitriptyline: {
    hook: "The prototype sedating TCA — a low-dose pain/sleep workhorse that is lethal in overdose.",
    steps: [
      {
        title: "What it is",
        teach: "Amitriptyline is a tertiary-amine TCA: it blocks NE and 5-HT reuptake (NET + SERT) and is a potent H1, muscarinic (M1) and α1 blocker — making it the most sedating and most anticholinergic TCA.",
        check: { q: "Amitriptyline is best described as…", options: ["The most sedating/anticholinergic TCA", "A selective serotonin reuptake inhibitor", "A dopamine D2 antagonist"], answer: "The most sedating/anticholinergic TCA", why: "Its potent H1/M1 blockade makes it the most sedating and anticholinergic TCA." }
      },
      {
        title: "Lethal in overdose",
        teach: "The killer fact for the whole class: TCAs are lethal in overdose via the 3 C's — Cardiotoxicity (Na-channel block → wide QRS, arrhythmia), Convulsions, and Coma. This is the key contrast with SSRIs, which are relatively safe in overdose.",
        check: { q: "The 3 C's of TCA overdose are…", options: ["Cardiotoxicity, convulsions, coma", "Cough, constipation, cramps", "Chills, confusion, cyanosis"], answer: "Cardiotoxicity, convulsions, coma", why: "TCA overdose kills through cardiotoxicity (wide QRS), convulsions and coma — unlike the far safer SSRIs." }
      },
      {
        title: "The niche",
        teach: "Because it is the most sedating and anticholinergic TCA, low-dose amitriptyline (10–25 mg qhs) is used off-label for migraine prophylaxis, neuropathic pain and insomnia.",
        check: { q: "Low-dose amitriptyline is used off-label for…", options: ["Migraine, neuropathic pain, insomnia", "Hypertension", "Parkinson's disease"], answer: "Migraine, neuropathic pain, insomnia", why: "Its sedation and analgesic effect drive the low-dose migraine/neuropathic-pain/insomnia niche." }
      },
      {
        title: "Its metabolite",
        teach: "Amitriptyline is demethylated to nortriptyline (active) — a secondary amine that is more noradrenergic and better tolerated than its tertiary-amine parent.",
        check: { q: "Amitriptyline is demethylated to which better-tolerated drug?", options: ["Nortriptyline", "Desipramine", "Fluoxetine"], answer: "Nortriptyline", why: "Its active secondary-amine metabolite is nortriptyline." }
      }
    ],
    trap: "Don't confuse amitriptyline (sedating tertiary amine) with nortriptyline (its secondary-amine metabolite — better tolerated, with a TDM window).",
    takeaway: "Amitriptyline = the most sedating/anticholinergic TCA; great at low dose for pain/sleep, but lethal in overdose (the 3 C's)."
  },

  nortriptyline: {
    hook: "The better-tolerated secondary-amine TCA — and one of the few antidepressants with a real therapeutic window.",
    steps: [
      {
        title: "What it is",
        teach: "Nortriptyline is a secondary-amine TCA (the active metabolite of amitriptyline). It blocks NE > 5-HT reuptake with less H1/M1/α1 blockade than the tertiary amines — so it is less sedating and less anticholinergic.",
        check: { q: "How does nortriptyline compare to tertiary-amine TCAs?", options: ["Less sedating and anticholinergic", "More serotonergic", "A dopamine antagonist"], answer: "Less sedating and anticholinergic", why: "As a secondary amine it has less H1/M1/α1 blockade than tertiary TCAs." }
      },
      {
        title: "Therapeutic window",
        teach: "Its signature: a true therapeutic WINDOW (~50–150 ng/mL). The relationship is curvilinear — efficacy actually falls off above ~150 ng/mL — making it one of the rare antidepressants with genuine therapeutic drug monitoring.",
        check: { q: "What is unusual about nortriptyline's levels?", options: ["A therapeutic window (~50–150 ng/mL), not just a floor", "No relationship to dose", "It is never measured"], answer: "A therapeutic window (~50–150 ng/mL), not just a floor", why: "Efficacy falls off above ~150 ng/mL, so it has a genuine window with TDM." }
      },
      {
        title: "Still lethal in overdose",
        teach: "Better tolerated does not mean safe: like every TCA it is lethal in overdose via the 3 C's — cardiotoxicity (Na-channel block, wide QRS), convulsions and coma.",
        check: { q: "In overdose, nortriptyline is…", options: ["Lethal via cardiotoxicity, convulsions, coma", "As benign as an SSRI", "Only a GI hazard"], answer: "Lethal via cardiotoxicity, convulsions, coma", why: "All TCAs — even the tolerable secondary amines — carry the lethal 3-C overdose profile." }
      },
      {
        title: "Elderly-preferred",
        teach: "It causes the least orthostatic hypotension of the TCAs, which — with TDM guidance — makes it the preferred TCA in the elderly.",
        check: { q: "Why is nortriptyline preferred in the elderly?", options: ["Least orthostatic hypotension of the TCAs", "It has no cardiac effects", "It is not anticholinergic at all"], answer: "Least orthostatic hypotension of the TCAs", why: "Its low orthostasis (plus TDM) makes it the elderly-preferred TCA." }
      }
    ],
    trap: "Don't confuse nortriptyline (secondary amine, sedating-leaning, TDM window) with protriptyline (also secondary, but activating).",
    takeaway: "Nortriptyline = the tolerable, elderly-friendly secondary-amine TCA with a true therapeutic window (~50–150 ng/mL) — still lethal in overdose."
  },

  imipramine: {
    hook: "The original TCA — classic for childhood enuresis and panic, and the parent of desipramine.",
    steps: [
      {
        title: "What it is",
        teach: "Imipramine is the prototype tertiary-amine TCA: it blocks NE and 5-HT reuptake and antagonizes H1/M1/α1. It is demethylated to desipramine (active), mirroring the amitriptyline→nortriptyline pair.",
        check: { q: "Imipramine is…", options: ["The prototype tertiary-amine TCA", "A benzodiazepine", "An SNRI"], answer: "The prototype tertiary-amine TCA", why: "It is the original tertiary-amine tricyclic and parent of desipramine." }
      },
      {
        title: "Lethal in overdose",
        teach: "As with all TCAs, overdose is lethal via the 3 C's — cardiotoxicity (Na-channel block, wide QRS), convulsions and coma. This is especially worrying because the enuresis indication puts tablets in homes with young children.",
        check: { q: "Why is imipramine's overdose risk especially concerning?", options: ["Enuresis use puts lethal tablets in homes with children", "It is only used in ICUs", "Children are immune to its effects"], answer: "Enuresis use puts lethal tablets in homes with children", why: "The 3-C overdose is lethal, and pediatric enuresis use means the tablets sit in family homes." }
      },
      {
        title: "The niche",
        teach: "Imipramine is the classic TCA for childhood nocturnal enuresis and for panic disorder.",
        check: { q: "Imipramine is classically used for…", options: ["Childhood nocturnal enuresis and panic", "Schizophrenia", "Bipolar mania"], answer: "Childhood nocturnal enuresis and panic", why: "Enuresis and panic disorder are its signature indications." }
      },
      {
        title: "Its metabolite",
        teach: "Imipramine is demethylated to desipramine — the secondary-amine, most-noradrenergic metabolite.",
        check: { q: "Imipramine's active secondary-amine metabolite is…", options: ["Desipramine", "Nortriptyline", "Nordoxepin"], answer: "Desipramine", why: "Imipramine→desipramine parallels amitriptyline→nortriptyline." }
      }
    ],
    trap: "Don't confuse imipramine (tertiary parent) with desipramine (its secondary-amine, most noradrenergic metabolite).",
    takeaway: "Imipramine = the prototype tertiary-amine TCA (enuresis + panic), parent of desipramine, and lethal in overdose."
  },

  desipramine: {
    hook: "The cleanest, most noradrenergic TCA — activating, not sedating — but still deadly in overdose.",
    steps: [
      {
        title: "What it is",
        teach: "Desipramine is a secondary-amine TCA (the active metabolite of imipramine) and the most selective noradrenergic reuptake inhibitor of the TCAs — the closest to a 'clean,' activating tricyclic, with the least sedation and anticholinergic effect.",
        check: { q: "Desipramine is best described as…", options: ["The most noradrenergic, least anticholinergic TCA", "The most serotonergic TCA", "A pure H1 antihistamine"], answer: "The most noradrenergic, least anticholinergic TCA", why: "It is the most selective NE reuptake inhibitor and least sedating/anticholinergic TCA." }
      },
      {
        title: "Lethal in overdose",
        teach: "Being 'clean' does not make it safe: like all TCAs it is lethal in overdose via the 3 C's — cardiotoxicity (Na-channel block, wide QRS), convulsions and coma — with specific reports of pediatric sudden death.",
        check: { q: "What overdose signal is specifically noted for desipramine?", options: ["Pediatric sudden death", "It has no cardiac toxicity", "It is safer than SSRIs"], answer: "Pediatric sudden death", why: "Beyond the usual lethal 3-C profile, desipramine carries pediatric sudden-death reports." }
      },
      {
        title: "CYP2D6 substrate",
        teach: "Desipramine is a strong CYP2D6 substrate, so CYP2D6 inhibitors — fluoxetine, paroxetine, bupropion — sharply raise its level (and toxicity).",
        check: { q: "Which drugs sharply raise desipramine levels?", options: ["CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion)", "Antacids", "Beta-blockers"], answer: "CYP2D6 inhibitors (fluoxetine, paroxetine, bupropion)", why: "It is a CYP2D6 substrate, so 2D6 inhibitors markedly raise its level." }
      }
    ],
    trap: "Don't confuse desipramine (noradrenergic secondary-amine TCA) with desvenlafaxine (an SNRI) — similar prefix, different class.",
    takeaway: "Desipramine = the most noradrenergic, activating, 'cleanest' TCA — but still lethal in overdose and pushed high by CYP2D6 inhibitors."
  },

  clomipramine: {
    hook: "The OCD tricyclic — the most serotonergic TCA, and the one with the highest seizure risk.",
    steps: [
      {
        title: "What it is",
        teach: "Clomipramine is a tertiary-amine TCA and the most serotonergic of the class — the parent potently blocks SERT (its metabolite is noradrenergic). It also has H1/M1/α1 blockade.",
        check: { q: "Clomipramine stands out among TCAs as…", options: ["The most serotonergic TCA", "The most noradrenergic TCA", "A dopamine agonist"], answer: "The most serotonergic TCA", why: "Its parent is a potent SERT inhibitor — the most serotonergic TCA." }
      },
      {
        title: "OCD gold standard",
        teach: "It is the historical gold-standard TCA for OCD — the only TCA with robust OCD efficacy, a direct consequence of its strong serotonergic action.",
        check: { q: "Which condition is clomipramine the classic TCA for?", options: ["OCD", "Enuresis", "Insomnia"], answer: "OCD", why: "It is the only TCA with robust OCD efficacy — the gold-standard tricyclic for OCD." }
      },
      {
        title: "Highest seizure risk",
        teach: "Clomipramine carries the highest seizure risk of the TCAs (dose-dependent, especially above 250 mg/day) — which is why the dose is capped at 250 mg/day.",
        check: { q: "Why is clomipramine capped at 250 mg/day?", options: ["Highest, dose-dependent seizure risk of the TCAs", "It is too sedating", "Renal clearance limits"], answer: "Highest, dose-dependent seizure risk of the TCAs", why: "Its seizure risk is the highest of the TCAs and dose-dependent, driving the 250 mg ceiling." }
      },
      {
        title: "Lethal in overdose",
        teach: "On top of seizures, it shares the class 3-C overdose profile — cardiotoxicity (Na-channel block, wide QRS), convulsions and coma.",
        check: { q: "Clomipramine overdose kills via…", options: ["Cardiotoxicity, convulsions, coma (the 3 C's)", "Hypoglycemia", "Bone marrow failure"], answer: "Cardiotoxicity, convulsions, coma (the 3 C's)", why: "Like all TCAs it carries the lethal 3-C overdose profile, plus a high seizure burden." }
      }
    ],
    trap: "Don't confuse clomipramine (TCA for OCD) with clomifene/clomiphene (ovulation induction) or clonidine (α2 agonist).",
    takeaway: "Clomipramine = the most serotonergic TCA, the OCD gold standard, and the one with the highest (dose-capped) seizure risk."
  },

  doxepin: {
    hook: "The tricyclic that moonlights as a 3–6 mg sleep pill — a potent H1 blocker at very low dose.",
    steps: [
      {
        title: "What it is",
        teach: "Doxepin is a tertiary-amine TCA that blocks NE and 5-HT reuptake and is one of the most potent H1 antihistamines available, with M1/α1 blockade too.",
        check: { q: "Doxepin is notable for being…", options: ["One of the most potent H1 antihistamines", "A selective dopamine blocker", "A stimulant"], answer: "One of the most potent H1 antihistamines", why: "Its exceptional H1 potency is its defining pharmacology." }
      },
      {
        title: "Low-dose hypnotic",
        teach: "At just 3–6 mg qhs, doxepin acts as a selective H1-antihistamine hypnotic for sleep maintenance — with minimal TCA toxicity at that low dose.",
        check: { q: "What is low-dose (3–6 mg) doxepin used for?", options: ["Sleep maintenance (H1 hypnotic)", "OCD", "Enuresis"], answer: "Sleep maintenance (H1 hypnotic)", why: "At 3–6 mg it is a selective H1 hypnotic for sleep maintenance." }
      },
      {
        title: "Full dose = full TCA",
        teach: "At antidepressant doses it behaves like any tertiary-amine TCA: sedating, anticholinergic, and lethal in overdose via the 3 C's (cardiotoxicity, convulsions, coma).",
        check: { q: "At full antidepressant doses, doxepin…", options: ["Is a fully cardiotoxic, lethal-in-overdose TCA", "Stays a harmless sleep aid", "Loses anticholinergic effects"], answer: "Is a fully cardiotoxic, lethal-in-overdose TCA", why: "At antidepressant doses it carries the full sedating/anticholinergic/3-C toxicity of a tertiary TCA." }
      }
    ],
    trap: "Don't confuse doxepin (TCA / low-dose H1 hypnotic) with doxazosin (an α1-blocker for BPH/hypertension).",
    takeaway: "Doxepin = a potent-H1 TCA; a clean sleep-maintenance hypnotic at 3–6 mg, but a fully lethal-in-overdose tricyclic at antidepressant doses."
  },

  trimipramine: {
    hook: "The sedating TCA you reach for when depression comes with prominent insomnia.",
    steps: [
      {
        title: "What it is",
        teach: "Trimipramine is a tertiary-amine TCA with relatively WEAK monoamine reuptake inhibition but strong H1/M1/α1 antagonism — so it behaves mainly as a markedly sedating antidepressant.",
        check: { q: "What is unusual about trimipramine's pharmacology?", options: ["Weak reuptake inhibition but strong sedating H1/M1/α1 block", "The strongest reuptake inhibition of any TCA", "It is not anticholinergic"], answer: "Weak reuptake inhibition but strong sedating H1/M1/α1 block", why: "Its sedation comes from H1/M1/α1 blockade rather than potent reuptake inhibition." }
      },
      {
        title: "The niche",
        teach: "It is chosen mainly for depression with prominent insomnia, and is notable for causing relatively little REM-sleep suppression compared with other TCAs.",
        check: { q: "Trimipramine is mainly chosen for…", options: ["Depression with prominent insomnia", "OCD", "Panic disorder"], answer: "Depression with prominent insomnia", why: "Its strong sedation and minimal REM suppression suit depression with insomnia." }
      },
      {
        title: "Still lethal in overdose",
        teach: "Its weak reuptake action does not make it safe — in overdose it is fully cardiotoxic and lethal via the 3 C's (cardiotoxicity, convulsions, coma).",
        check: { q: "In overdose, trimipramine is…", options: ["Fully cardiotoxic and lethal (the 3 C's)", "Safer than an SSRI", "Only mildly sedating"], answer: "Fully cardiotoxic and lethal (the 3 C's)", why: "Weak reuptake inhibition doesn't spare it the lethal 3-C TCA overdose profile." }
      }
    ],
    trap: "Don't confuse trimipramine (sedating TCA) with trifluoperazine (a first-generation antipsychotic) — similar prefix, different class.",
    takeaway: "Trimipramine = a markedly sedating, weak-reuptake TCA for depression with insomnia — still fully cardiotoxic in overdose."
  },

  maprotiline: {
    hook: "A tetracyclic that behaves like a TCA — with a notably high seizure risk.",
    steps: [
      {
        title: "What it is",
        teach: "Maprotiline is a tetracyclic antidepressant that is functionally a selective-noradrenergic (NET) reuptake inhibitor with strong H1 and moderate M1/α1 blockade — pharmacologically TCA-like.",
        check: { q: "Maprotiline is best described as…", options: ["A tetracyclic that is functionally a selective-NE TCA", "An SSRI", "A benzodiazepine"], answer: "A tetracyclic that is functionally a selective-NE TCA", why: "It is a tetracyclic but behaves like a selective-noradrenergic, TCA-like agent." }
      },
      {
        title: "High seizure risk",
        teach: "Its long half-life (~43 h) and strong seizure-lowering effect give it a notably HIGH seizure risk that accumulates with dose — so titrate slowly and cap the dose.",
        check: { q: "What is maprotiline's most distinctive hazard?", options: ["High seizure risk (long half-life, accumulates)", "Agranulocytosis", "Serotonin syndrome as monotherapy"], answer: "High seizure risk (long half-life, accumulates)", why: "Its long half-life and seizure-lowering effect make seizure the standout risk." }
      },
      {
        title: "Lethal in overdose",
        teach: "It shares the TCA 3-C overdose profile — cardiotoxicity (Na-channel block, wide QRS), convulsions and coma — and skin rash is a recognized, relatively common adverse effect.",
        check: { q: "Beyond the lethal 3-C overdose, which common AE is notable for maprotiline?", options: ["Skin rash", "Hair loss", "Hypoglycemia"], answer: "Skin rash", why: "Skin rash/photosensitivity is a recognized, relatively common adverse effect." }
      }
    ],
    trap: "Don't confuse maprotiline (tetracyclic, high seizure risk, TCA-like) with mirtazapine (a NaSSA tetracyclic — very different pharmacology).",
    takeaway: "Maprotiline = a TCA-like tetracyclic with a long half-life and notably high seizure risk — lethal in overdose like any TCA."
  },

  amoxapine: {
    hook: "The TCA with an antipsychotic's dark side — a loxapine metabolite that blocks D2 and can cause EPS, TD and NMS.",
    steps: [
      {
        title: "What it is",
        teach: "Amoxapine is a tetracyclic antidepressant and a metabolite of the antipsychotic loxapine. It blocks NE (and some 5-HT) reuptake AND antagonizes dopamine D2 receptors — a unique dual profile among TCAs.",
        check: { q: "What makes amoxapine's mechanism unique among TCAs?", options: ["It also antagonizes dopamine D2 receptors", "It is a pure SSRI", "It blocks GABA receptors"], answer: "It also antagonizes dopamine D2 receptors", why: "As a loxapine metabolite it adds D2 antagonism to reuptake inhibition." }
      },
      {
        title: "D2 side effects",
        teach: "Because of that D2 blockade it can cause extrapyramidal symptoms, tardive dyskinesia, hyperprolactinemia and even neuroleptic malignant syndrome (NMS) — antipsychotic-type effects unlike any other TCA.",
        check: { q: "Which effects can amoxapine cause that other TCAs do not?", options: ["EPS, tardive dyskinesia, NMS", "Agranulocytosis", "Diabetes insipidus"], answer: "EPS, tardive dyskinesia, NMS", why: "Its D2 antagonism produces antipsychotic-type EPS/TD/NMS." }
      },
      {
        title: "Especially dangerous overdose",
        teach: "Overdose is particularly severe: on top of the usual TCA cardiotoxicity, expect severe seizures/status epilepticus and reports of acute renal failure.",
        check: { q: "Amoxapine overdose is especially dangerous because of…", options: ["Severe seizures/status and acute renal failure (plus cardiotoxicity)", "It has no cardiac effects", "Only mild sedation"], answer: "Severe seizures/status and acute renal failure (plus cardiotoxicity)", why: "Severe seizures/status and acute renal failure add to the usual TCA cardiotoxicity." }
      }
    ],
    trap: "Don't confuse amoxapine (antidepressant, D2-blocking) with loxapine (its parent antipsychotic) — or with amoxicillin.",
    takeaway: "Amoxapine = the only TCA-class agent with real D2 antagonism (EPS/TD/NMS), and an especially dangerous overdose (seizures, renal failure)."
  },

  protriptyline: {
    hook: "The activating secondary-amine TCA — dose it in the morning, at the lowest milligrams of the class.",
    steps: [
      {
        title: "What it is",
        teach: "Protriptyline is a secondary-amine TCA and a potent noradrenergic (NET) reuptake inhibitor that is activating rather than sedating.",
        check: { q: "Compared with other TCAs, protriptyline is…", options: ["Activating rather than sedating", "The most sedating", "A pure serotonergic"], answer: "Activating rather than sedating", why: "As a potent NE reuptake inhibitor it is activating, not sedating." }
      },
      {
        title: "The niche & dosing",
        teach: "It suits depression with psychomotor retardation or hypersomnia. Because it is activating, has the longest half-life of the TCAs (~74 h), and is the most potent per milligram, doses are low (≤60 mg/day) and given early in the day.",
        check: { q: "Why is protriptyline dosed early in the day?", options: ["It is activating and can cause insomnia", "It must be taken with food", "It is very sedating"], answer: "It is activating and can cause insomnia", why: "Being activating, late doses cause insomnia — so give it early." }
      },
      {
        title: "Lethal in overdose",
        teach: "It carries the full TCA 3-C overdose profile — cardiotoxicity (Na-channel block, wide QRS), convulsions and coma — with prominent tachycardia.",
        check: { q: "In overdose, protriptyline…", options: ["Is lethal via the 3 C's, with prominent tachycardia", "Is safer than an SSRI", "Causes only drowsiness"], answer: "Is lethal via the 3 C's, with prominent tachycardia", why: "It shares the lethal 3-C TCA overdose profile, with tachycardia prominent." }
      }
    ],
    trap: "Don't confuse protriptyline (activating secondary amine) with nortriptyline (sedating-leaning secondary amine with a TDM window) or amitriptyline (very sedating).",
    takeaway: "Protriptyline = the activating, low-milligram, longest-half-life secondary-amine TCA — dose it early, and it is still lethal in overdose."
  }
};
