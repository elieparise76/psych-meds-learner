// Adjunct micro-lessons (EPS / movement / wakefulness / agitation agents).
// Key = molecule id. Facts grounded in data/deck.json. Narrated by "Neuro".
// Central clinical teaching: MATCH THE MOVEMENT PROBLEM TO THE FIX —
//   acute dystonia / drug-induced parkinsonism → ANTICHOLINERGIC (benztropine, procyclidine, trihexyphenidyl)
//   akathisia → PROPRANOLOL
//   tardive dyskinesia → VMAT2 INHIBITOR (tetrabenazine, valbenazine, deutetrabenazine)
// Anticholinergics WORSEN tardive dyskinesia; VMAT2 inhibitors deplete dopamine → depression/parkinsonism.
export default {
  benztropine: {
    hook: "The IM rescue when an antipsychotic twists the neck or rolls the eyes up — the anticholinergic that owns acute dystonia.",
    steps: [
      {
        title: "The big picture",
        teach: "Antipsychotics can make the body move wrong, and each movement problem has its OWN antidote. Benztropine is your anticholinergic — the one you reach for when a drug causes a dystonia or a stiff, parkinsonian look."
      },
      {
        title: "Match the movement",
        teach: "Here's the map to keep straight all lesson: acute dystonia and drug-induced parkinsonism call for an anticholinergic (benztropine); akathisia calls for propranolol; tardive dyskinesia calls for a VMAT2 inhibitor. Pick the wrong one and you can make things worse.",
        check: {
          q: "Which movement problem is benztropine's job?",
          options: ["Acute dystonia / drug-induced parkinsonism", "Akathisia", "Tardive dyskinesia"],
          answer: "Acute dystonia / drug-induced parkinsonism",
          why: "Anticholinergics own dystonia and parkinsonism; akathisia → propranolol, TD → VMAT2 inhibitor."
        }
      },
      {
        title: "The signature win",
        teach: "Its headline moment is ACUTE DYSTONIA. Eyes rolling up (oculogyric crisis) or a twisting neck (torticollis) hours after a dose of haloperidol — give benztropine IM or IV and it settles fast. It also treats drug-induced parkinsonism.",
        check: {
          q: "Oculogyric crisis a few hours after starting haloperidol — best rescue?",
          options: ["IM benztropine", "Oral propranolol", "IV valbenazine"],
          answer: "IM benztropine",
          why: "Acute dystonia is treated with an IM/IV anticholinergic like benztropine."
        }
      },
      {
        title: "How you use it",
        teach: "For an acute dystonia, reach for the needle: 1–2 mg IM or IV, repeat if needed. For ongoing drug-induced parkinsonism, 1–2 mg PO once or twice daily (it's long-acting), up to 6 mg/day. Once the EPS settles, reassess — don't leave people on it indefinitely."
      },
      {
        title: "What patients feel",
        teach: "The cost of blocking acetylcholine is the classic anticholinergic burden: dry mouth, blurred vision, constipation, urinary retention, and in the elderly confusion and memory trouble. Impaired sweating also means impaired cooling — warn about overheating in hot weather."
      },
      {
        title: "The TD trap",
        teach: "This is the trap that catches people: benztropine does NOT help akathisia, and it WORSENS tardive dyskinesia. TD is a state of dopamine hypersensitivity, so stripping away acetylcholine only unmasks those writhing movements. Never reach for an anticholinergic in TD.",
        check: {
          q: "Which movement problem does benztropine make WORSE?",
          options: ["Tardive dyskinesia", "Acute dystonia", "Drug-induced parkinsonism"],
          answer: "Tardive dyskinesia",
          why: "Anticholinergics unmask dopamine-hypersensitive TD movements."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "The why, in one line: D2 blockade tips the striatum toward too much acetylcholine relative to dopamine. Benztropine blocks the muscarinic (ACh) side, restoring the dopamine:acetylcholine balance."
      },
      {
        title: "The look-alike",
        teach: "Watch the sound-alikes: benztropine is an anticholinergic for EPS, while bromocriptine is a dopamine AGONIST used for NMS. Similar names, opposite jobs.",
        check: {
          q: "Benztropine vs bromocriptine — which is the dopamine agonist for NMS?",
          options: ["Bromocriptine", "Benztropine", "Both are anticholinergics"],
          answer: "Bromocriptine",
          why: "Bromocriptine is a dopamine agonist for NMS; benztropine is the anticholinergic for EPS."
        }
      }
    ],
    trap: "Benztropine (anticholinergic for EPS) vs bromocriptine (dopamine agonist for NMS) — sound-alike, opposite jobs.",
    takeaway: "Benztropine = the IM/IV anticholinergic rescue for acute dystonia + drug-induced parkinsonism; useless for akathisia and it WORSENS tardive dyskinesia."
  },

  procyclidine: {
    hook: "Benztropine's shorter-acting twin — same anticholinergic fix for dystonia and parkinsonism, just dosed three times a day.",
    steps: [
      {
        title: "The big picture",
        teach: "Procyclidine is another central anticholinergic — essentially interchangeable with benztropine for EPS. The main practical difference is a shorter half-life, so you dose it three times a day rather than once."
      },
      {
        title: "Same movement rules",
        teach: "It follows the exact anticholinergic playbook: it treats acute dystonia and drug-induced parkinsonism, does NOT help akathisia, and can WORSEN tardive dyskinesia. Same family, same rules.",
        check: {
          q: "Procyclidine reliably helps which of these?",
          options: ["Drug-induced parkinsonism", "Tardive dyskinesia", "Akathisia"],
          answer: "Drug-induced parkinsonism",
          why: "Anticholinergics treat dystonia/parkinsonism, not akathisia or TD (which they worsen)."
        }
      },
      {
        title: "How you use it",
        teach: "Start around 2.5 mg PO three times daily, nudging up by 2.5 mg every few days to effect — often up to 20–30 mg/day in divided doses. If someone's been on it a while, don't stop it abruptly (rebound cholinergic EPS)."
      },
      {
        title: "What patients feel",
        teach: "Expect the anticholinergic signature: dry mouth, blurred vision, constipation, urinary hesitancy, and dizziness. At the extreme it tips into anticholinergic delirium — watch cognition, especially in the elderly.",
        check: {
          q: "A typical procyclidine side effect?",
          options: ["Dry mouth and constipation", "Diarrhea", "Bronchospasm"],
          answer: "Dry mouth and constipation",
          why: "Anticholinergic burden brings dry mouth, blurred vision, constipation, urinary hesitancy."
        }
      },
      {
        title: "The look-alike",
        teach: "Don't confuse procyclidine (which TREATS dystonia) with prochlorperazine — a D2-blocking antiemetic/antipsychotic that CAUSES dystonia. One letter apart, opposite effects.",
        check: {
          q: "Which of these CAUSES dystonia rather than treating it?",
          options: ["Prochlorperazine", "Procyclidine", "Benztropine"],
          answer: "Prochlorperazine",
          why: "Prochlorperazine is a D2 blocker that can cause dystonia; the others treat it."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Like its peers, procyclidine is a central antimuscarinic: it restores the striatal dopamine:acetylcholine balance that D2 blockade throws off."
      }
    ],
    trap: "Procyclidine vs prochlorperazine — one letter apart, but prochlorperazine causes the dystonia you'd use procyclidine to fix.",
    takeaway: "Procyclidine = an interchangeable anticholinergic peer of benztropine (dosed TID) for acute dystonia + parkinsonism; not for akathisia, and it worsens TD."
  },

  trihexyphenidyl: {
    hook: "The EPS anticholinergic with a street value — same dystonia/parkinsonism fix as its peers, but the one that gets misused.",
    steps: [
      {
        title: "The big picture",
        teach: "Trihexyphenidyl (Artane) is a third central anticholinergic for drug-induced EPS — a peer of benztropine and procyclidine. What sets it apart isn't the mechanism; it's that this one carries real abuse potential."
      },
      {
        title: "Same movement rules",
        teach: "Same anticholinergic playbook as its cousins: it helps acute dystonia and drug-induced parkinsonism, does NOT help akathisia, and WORSENS tardive dyskinesia.",
        check: {
          q: "Trihexyphenidyl should be AVOIDED in which condition?",
          options: ["Tardive dyskinesia", "Drug-induced parkinsonism", "Acute dystonia"],
          answer: "Tardive dyskinesia",
          why: "Anticholinergics worsen TD; they treat dystonia and parkinsonism."
        }
      },
      {
        title: "How you use it",
        teach: "Start low — 1 mg on day one — then climb by 2 mg every 3–5 days to a usual 6–10 mg/day in divided doses (max around 15 mg/day). Because it's shorter-acting, dose it BID to QID."
      },
      {
        title: "What patients feel",
        teach: "The usual anticholinergic burden — dry mouth, blurred vision, constipation, urinary retention — plus a distinctive nervousness/euphoria. Note the hard stop: it's contraindicated in narrow-angle glaucoma (long-term use has caused blindness).",
        check: {
          q: "Trihexyphenidyl is contraindicated in which eye condition?",
          options: ["Narrow-angle glaucoma", "Myopia", "Colour blindness"],
          answer: "Narrow-angle glaucoma",
          why: "Anticholinergics can precipitate angle-closure; long-term use has caused blindness."
        }
      },
      {
        title: "The distinctive twist",
        teach: "Unlike the other EPS anticholinergics, trihexyphenidyl has a notable euphoriant/hallucinogenic MISUSE potential — watch for drug-seeking and diversion, and don't just refill it on autopilot.",
        check: {
          q: "Which EPS anticholinergic is most flagged for abuse potential?",
          options: ["Trihexyphenidyl", "Benztropine", "Procyclidine"],
          answer: "Trihexyphenidyl",
          why: "Trihexyphenidyl carries a euphoriant/hallucinogenic misuse potential the others lack."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "Same engine as its peers: a central antimuscarinic that corrects the relative cholinergic excess D2 blockade creates in the striatum, relieving EPS and parkinsonism."
      }
    ],
    trap: "Trihexyphenidyl, benztropine, and procyclidine are interchangeable anticholinergics — trihexyphenidyl is the one flagged for abuse.",
    takeaway: "Trihexyphenidyl = an anticholinergic for dystonia + parkinsonism (not akathisia, worsens TD), distinctive for its euphoriant misuse potential."
  },

  propranolol: {
    hook: "Can't sit still on an antipsychotic? Reach for the beta-blocker — akathisia's first-line fix, the one EPS anticholinergics miss.",
    steps: [
      {
        title: "The big picture",
        teach: "Propranolol is the beta-blocker of this group — a non-selective β1/β2 antagonist that blunts adrenergic drive. In psychiatry its standout role is one specific movement problem: akathisia."
      },
      {
        title: "The akathisia answer",
        teach: "It's FIRST-LINE for antipsychotic-induced AKATHISIA — that inner restlessness and can't-sit-still feeling. This is the key exam pearl: anticholinergics do NOT reliably help akathisia, so this is the beta-blocker's unique EPS niche.",
        check: {
          q: "Inner restlessness / can't-sit-still on an antipsychotic — first-line drug?",
          options: ["Propranolol", "Benztropine", "Tetrabenazine"],
          answer: "Propranolol",
          why: "Akathisia is treated first-line with propranolol, not an anticholinergic."
        }
      },
      {
        title: "Tremor & stage fright",
        teach: "Two other classic uses: performance / 'stage-fright' anxiety (a single dose 30–60 min before the event) and tremor — lithium-induced, SSRI-induced, or essential.",
        check: {
          q: "Fine tremor on lithium or an SSRI — which adjunct helps?",
          options: ["Propranolol", "Prazosin", "Amantadine"],
          answer: "Propranolol",
          why: "Propranolol is the go-to for lithium/SSRI and essential tremor."
        }
      },
      {
        title: "How you use it",
        teach: "For akathisia, 10–20 mg PO BID–TID, titrating toward ~40–80 (up to ~120) mg/day as heart rate and blood pressure allow. For stage fright, a one-off 10–40 mg taken about 30–60 min before the moment."
      },
      {
        title: "What patients feel",
        teach: "The beta-blockade effects: bradycardia, low blood pressure with dizziness, fatigue, cold hands and feet, and sometimes vivid dreams or nightmares. Rise slowly to avoid the head-rush."
      },
      {
        title: "Who to avoid",
        teach: "Because it's non-selective it can trigger bronchospasm — caution or avoid in asthma and COPD, and in bradycardia, AV block, or decompensated heart failure. In diabetics it can also mask the warning signs of low blood sugar.",
        check: {
          q: "Propranolol is most concerning in a patient with…",
          options: ["Asthma", "PTSD", "Insomnia"],
          answer: "Asthma",
          why: "Non-selective β2 blockade can precipitate bronchospasm in asthma/COPD."
        }
      },
      {
        title: "Never stop abruptly",
        teach: "One safety non-negotiable: don't stop it suddenly. Abrupt withdrawal can trigger a rebound sympathetic surge — worsening angina and even MI (a boxed warning). Taper over at least a few weeks."
      },
      {
        title: "The look-alike",
        teach: "Keep the α/β pair straight: propranolol is a β-blocker for akathisia and tremor; prazosin is an α1-blocker for PTSD nightmares. Sound-alike names, different receptors and jobs.",
        check: {
          q: "Which is the α1-blocker used for PTSD nightmares?",
          options: ["Prazosin", "Propranolol", "Both block beta receptors"],
          answer: "Prazosin",
          why: "Prazosin is the α1-blocker (PTSD nightmares); propranolol is the β-blocker (akathisia/tremor)."
        }
      }
    ],
    trap: "Propranolol (β-blocker → akathisia/tremor) vs prazosin (α1 blocker → PTSD nightmares) — sound-alike, different receptors and jobs.",
    takeaway: "Propranolol = the beta-blocker for AKATHISIA (the one EPS anticholinergics miss), plus tremor and performance anxiety; watch asthma and never stop abruptly."
  },

  prazosin: {
    hook: "The bedtime α1-blocker that quiets combat nightmares — just warn the patient about that first-dose faint.",
    steps: [
      {
        title: "The big picture",
        teach: "Prazosin is a selective α1-adrenergic antagonist. In psychiatry it has one signature job: quieting the noradrenergic surge behind trauma nightmares — a targeted PTSD-sleep tool, not an EPS drug."
      },
      {
        title: "PTSD nightmares",
        teach: "It's the off-label go-to for PTSD NIGHTMARES and trauma-related sleep disruption — the combat veteran with recurrent nightmares is the classic case. You dose it at bedtime and titrate up.",
        check: {
          q: "Combat veteran with recurrent trauma nightmares — which adjunct?",
          options: ["Prazosin at bedtime", "Propranolol in the morning", "Modafinil"],
          answer: "Prazosin at bedtime",
          why: "Prazosin at bedtime is the go-to for PTSD nightmares."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 1 mg at bedtime, then titrate gradually as blood pressure tolerates — often to 2–6 mg at night (frequently higher effective doses in men, up to ~10–15 mg/day). A daytime dose can be added for daytime hyperarousal."
      },
      {
        title: "First-dose phenomenon",
        teach: "The defining hazard is the FIRST-DOSE PHENOMENON: marked orthostatic hypotension and even syncope. That's why you start at 1 mg at bedtime and warn the patient. Watch additive drops with PDE5 inhibitors and other antihypertensives.",
        check: {
          q: "Which adjunct causes a 'first-dose' orthostatic syncope?",
          options: ["Prazosin", "Benztropine", "Valbenazine"],
          answer: "Prazosin",
          why: "α1 blockade produces marked first-dose orthostatic hypotension."
        }
      },
      {
        title: "Other counselling",
        teach: "Beyond the first dose: dizziness, headache, drowsiness, nasal congestion, and palpitations. One easy-to-miss point — flag intraoperative floppy iris syndrome to the eye surgeon before any cataract surgery."
      },
      {
        title: "The look-alikes",
        teach: "Sort the alpha/beta agents: prazosin is an α1 antagonist (nightmares, first-dose hypotension), propranolol is a β-blocker (akathisia), and clonidine is an α2 agonist. Different receptors, different jobs.",
        check: {
          q: "Prazosin's receptor target is…",
          options: ["α1 antagonist", "β antagonist", "α2 agonist"],
          answer: "α1 antagonist",
          why: "Prazosin blocks α1; propranolol blocks β; clonidine agonizes α2."
        }
      }
    ],
    trap: "Prazosin (α1 blocker — PTSD nightmares, first-dose hypotension) vs propranolol (β-blocker — akathisia) vs clonidine (α2 agonist).",
    takeaway: "Prazosin = the bedtime α1-blocker for PTSD nightmares; its signature hazard is first-dose orthostatic hypotension — start 1 mg and warn the patient."
  },

  modafinil: {
    hook: "The daytime wakefulness pill for narcolepsy — and a sneaky CYP3A4 inducer that can make the contraceptive pill fail.",
    steps: [
      {
        title: "The big picture",
        teach: "Modafinil is a wakefulness-promoting agent — think 'stay awake,' not 'stimulant high.' It nudges dopamine and downstream orexin/histamine/noradrenergic systems, keeping people alert without the jolt of amphetamines."
      },
      {
        title: "What it treats",
        teach: "Its home turf is excessive daytime sleepiness: narcolepsy (first-line), obstructive sleep apnea (as a CPAP adjunct), and shift-work sleep disorder. It is NOT a first-line ADHD or antidepressant drug.",
        check: {
          q: "Modafinil's main clinical role?",
          options: ["Promote wakefulness in narcolepsy", "Treat tardive dyskinesia", "Rescue acute dystonia"],
          answer: "Promote wakefulness in narcolepsy",
          why: "It's a wakefulness-promoter, first-line for narcolepsy sleepiness."
        }
      },
      {
        title: "How you use it",
        teach: "Usually 200 mg PO once daily in the morning (some go to 400 mg/day, with limited added benefit). Timing matters — take it early to avoid insomnia; for shift work, dose about an hour before the shift."
      },
      {
        title: "The contraceptive trap",
        teach: "This is the high-yield pearl: modafinil INDUCES CYP3A4, which LOWERS oral contraceptive efficacy. Counsel backup contraception during use and for about a month after stopping.",
        check: {
          q: "A woman on the pill starts modafinil — what must you counsel?",
          options: ["Use backup contraception", "Double the pill dose", "Nothing is needed"],
          answer: "Use backup contraception",
          why: "CYP3A4 induction reduces oral contraceptive efficacy."
        }
      },
      {
        title: "Watch skin & mood",
        teach: "Rare but serious: SJS/TEN/DRESS-type rashes — stop the drug for any serious rash. It can also cause stimulant-like psychiatric activation (anxiety, mania, psychosis), and it's a Schedule IV controlled substance with misuse potential."
      },
      {
        title: "The family tree",
        teach: "Keep the relatives straight: modafinil (racemic, available in Canada), armodafinil (its longer-acting R-enantiomer, US-only), and the classic stimulants methylphenidate/amphetamine. Same 'wakefulness' family, but modafinil is the gentler racemic parent.",
        check: {
          q: "Armodafinil is best described as…",
          options: ["Modafinil's longer-acting R-enantiomer", "A metabolite of caffeine", "A classic amphetamine"],
          answer: "Modafinil's longer-acting R-enantiomer",
          why: "Armodafinil is the purified R-enantiomer of modafinil."
        }
      }
    ],
    trap: "Modafinil vs armodafinil (its longer-acting R-enantiomer) vs classic stimulants (methylphenidate/amphetamine).",
    takeaway: "Modafinil = the narcolepsy/shift-work wakefulness agent whose killer pearl is CYP3A4 induction lowering contraceptive efficacy — counsel backup contraception."
  },

  armodafinil: {
    hook: "Modafinil's purified R-enantiomer — same wakefulness, same contraceptive caveat, just longer into the day (US-only).",
    steps: [
      {
        title: "The big picture",
        teach: "Armodafinil (Nuvigil) is the longer-acting R-(−)-enantiomer of modafinil, with the same wakefulness-promoting mechanism. As a single enantiomer, effective levels persist further into the day. It's US-only — not marketed in Canada."
      },
      {
        title: "What it treats",
        teach: "Same indications as modafinil where it's available: narcolepsy, obstructive sleep apnea (as an adjunct), and shift-work sleep disorder. It targets excessive sleepiness, not ADHD or depression."
      },
      {
        title: "How you use it",
        teach: "Typically 150 mg PO once daily in the morning, sometimes up to 250 mg/day. As with modafinil, keep dosing to the morning to avoid insomnia; for shift work, take it about an hour before the shift."
      },
      {
        title: "Same contraceptive trap",
        teach: "Identical interaction to modafinil: it INDUCES CYP3A4 and LOWERS oral contraceptive efficacy. Counsel backup contraception during use and for about a month after.",
        check: {
          q: "Armodafinil's key interaction to counsel?",
          options: ["Reduced contraceptive efficacy (CYP3A4 induction)", "Raised lithium levels", "Bleeding risk"],
          answer: "Reduced contraceptive efficacy (CYP3A4 induction)",
          why: "Like modafinil, it induces CYP3A4 and lowers contraceptive efficacy."
        }
      },
      {
        title: "Same class caveats",
        teach: "Same risk profile as modafinil: rare serious rash (SJS/TEN/DRESS), stimulant-like psychiatric activation, and Schedule IV controlled-substance status with misuse potential.",
        check: {
          q: "Armodafinil is a controlled substance because of…",
          options: ["Misuse potential", "Nephrotoxicity", "QT prolongation"],
          answer: "Misuse potential",
          why: "It's Schedule IV with stimulant-like misuse potential."
        }
      },
      {
        title: "Armodafinil vs modafinil",
        teach: "The one distinction to remember: armodafinil is the purified R-enantiomer (US-only, longer-acting), whereas modafinil is the racemic mix available in Canada. Same job, same contraceptive caveat.",
        check: {
          q: "How does armodafinil differ from modafinil?",
          options: ["It's the longer-acting R-enantiomer (US-only)", "It's a VMAT2 inhibitor", "It has no contraceptive interaction"],
          answer: "It's the longer-acting R-enantiomer (US-only)",
          why: "Armodafinil is modafinil's single R-enantiomer, sustaining wakefulness longer; US-only."
        }
      }
    ],
    trap: "Armodafinil (R-enantiomer, US-only) vs modafinil (racemic, available in Canada) — same job, same contraceptive caveat.",
    takeaway: "Armodafinil = modafinil's longer-acting R-enantiomer (US-only); same wakefulness role and the same CYP3A4-induction contraceptive caveat."
  },

  tetrabenazine: {
    hook: "For the writhing tongue of tardive dyskinesia, DEPLETE the dopamine — a VMAT2 inhibitor, the mechanistic opposite of an anticholinergic.",
    steps: [
      {
        title: "The big picture",
        teach: "Tetrabenazine flips the logic of the anticholinergics. For tardive dyskinesia you don't block acetylcholine — you DEPLETE dopamine. It's a VMAT2 inhibitor, and it's the Canada-available one (brand: Nitoman)."
      },
      {
        title: "The TD answer",
        teach: "Persistent orofacial and lingual choreoathetoid movements — that writhing tongue of tardive dyskinesia — call for a VMAT2 inhibitor, NOT an anticholinergic (which worsens TD). This is the drug's headline role.",
        check: {
          q: "Persistent tongue/facial writhing (tardive dyskinesia) — correct drug class?",
          options: ["VMAT2 inhibitor", "Anticholinergic", "Beta-blocker"],
          answer: "VMAT2 inhibitor",
          why: "TD is treated with a VMAT2 inhibitor; anticholinergics worsen it."
        }
      },
      {
        title: "What it treats",
        teach: "Beyond tardive dyskinesia, its label covers hyperkinetic movement disorders broadly — Huntington chorea, hemiballismus, and Tourette/tics. Wherever there's too much movement from dopamine, depleting it helps."
      },
      {
        title: "How you use it",
        teach: "Start low and go slow: 12.5 mg PO once or twice daily, titrating by 12.5 mg every few days to effect, up to roughly 75–100 mg/day. The active metabolites are short-acting, so it's given in divided doses."
      },
      {
        title: "Depletion has a cost",
        teach: "Because it DEPLETES dopamine, it can CAUSE depression and suicidality — that's a boxed warning — plus parkinsonism and QT prolongation. It's contraindicated in active suicidality, untreated depression, hepatic impairment, and with MAOIs. Screen mood before and during.",
        check: {
          q: "Tetrabenazine's boxed-warning risk from depleting dopamine?",
          options: ["Depression and suicidality", "Bronchospasm", "Priapism"],
          answer: "Depression and suicidality",
          why: "Dopamine depletion carries a boxed warning for depression/suicidality."
        }
      },
      {
        title: "What patients feel",
        teach: "Day-to-day, expect sedation, low mood, parkinsonism (bradykinesia, rigidity), akathisia, insomnia, and nausea — and rise-slowly orthostatic dizziness. Essentially, dopamine depletion looks a bit like the parkinsonism it's meant to fight elsewhere.",
        check: {
          q: "Which is a common tetrabenazine effect from dopamine depletion?",
          options: ["Parkinsonism and sedation", "Bronchospasm", "Urinary retention"],
          answer: "Parkinsonism and sedation",
          why: "Depleting dopamine causes parkinsonism, sedation, depression, and akathisia."
        }
      },
      {
        title: "Metabolism & dosing",
        teach: "The active HTBZ metabolites are cleared by CYP2D6, so reduce the dose with 2D6 inhibitors — fluoxetine, paroxetine, bupropion — or in known poor metabolizers."
      },
      {
        title: "The VMAT2 cousins",
        teach: "Keep the VMAT2 family straight: tetrabenazine (Nitoman, Canada-available), and the US-only refinements deutetrabenazine and valbenazine. Reserpine is the older, non-selective ancestor.",
        check: {
          q: "Which VMAT2 inhibitor is available in Canada?",
          options: ["Tetrabenazine (Nitoman)", "Valbenazine", "Deutetrabenazine"],
          answer: "Tetrabenazine (Nitoman)",
          why: "Tetrabenazine is Canada-available; valbenazine and deutetrabenazine are US-only."
        }
      }
    ],
    trap: "Tetrabenazine (Canada: Nitoman) vs deutetrabenazine/valbenazine (US-only VMAT2 inhibitors) vs reserpine (older non-selective VMAT inhibitor).",
    takeaway: "Tetrabenazine = the VMAT2 inhibitor that DEPLETES dopamine for tardive dyskinesia/Huntington chorea — right where anticholinergics are wrong; boxed warning for depression/suicidality."
  },

  valbenazine: {
    hook: "The once-daily VMAT2 inhibitor built for tardive dyskinesia — tetrabenazine's cleaner, simpler cousin (US-only).",
    steps: [
      {
        title: "The big picture",
        teach: "Valbenazine (Ingrezza) is a selective VMAT2 inhibitor — a purified relative of tetrabenazine that depletes presynaptic dopamine to calm tardive-dyskinesia movements. It's US-only, not marketed in Canada."
      },
      {
        title: "The TD answer",
        teach: "It sits squarely in the tardive-dyskinesia slot: for that persistent orofacial writhing, you deplete dopamine with a VMAT2 inhibitor, never an anticholinergic.",
        check: {
          q: "Valbenazine's mechanism and indication?",
          options: ["VMAT2 inhibitor for tardive dyskinesia", "Anticholinergic for dystonia", "Beta-blocker for akathisia"],
          answer: "VMAT2 inhibitor for tardive dyskinesia",
          why: "It's a VMAT2 inhibitor approved for TD."
        }
      },
      {
        title: "The advantage",
        teach: "Its edge over tetrabenazine is convenience: ONCE-DAILY dosing and generally better tolerability — no fiddly titration schedule.",
        check: {
          q: "Which VMAT2 inhibitor for TD is dosed once daily?",
          options: ["Valbenazine", "Tetrabenazine", "Benztropine"],
          answer: "Valbenazine",
          why: "Valbenazine's key advantage is once-daily dosing."
        }
      },
      {
        title: "How you use it",
        teach: "Simple by design: 40 mg PO once daily, increasing to 80 mg once daily after about a week (40 mg can be maintained if that's enough). Lower it with strong CYP3A4 or 2D6 issues."
      },
      {
        title: "Same class caveats",
        teach: "It still depletes dopamine, so expect the class effects: parkinsonism, somnolence, QT prolongation, and dopamine-depletion mood effects — carrying the same boxed warning for depression/suicidality in Huntington's.",
        check: {
          q: "A shared VMAT2-inhibitor risk to monitor?",
          options: ["QT prolongation and parkinsonism", "Bronchospasm", "First-dose hypotension"],
          answer: "QT prolongation and parkinsonism",
          why: "Dopamine depletion brings parkinsonism, somnolence, and QT risk."
        }
      },
      {
        title: "The VMAT2 cousins",
        teach: "For orientation: valbenazine and deutetrabenazine are both US-only TD agents, while tetrabenazine is the one you'll actually see in Canada."
      }
    ],
    trap: "Valbenazine vs deutetrabenazine (both US-only TD agents) vs tetrabenazine (Canada-available).",
    takeaway: "Valbenazine = the once-daily VMAT2 inhibitor for tardive dyskinesia (US-only); simpler dosing than tetrabenazine, same dopamine-depletion/QT profile."
  },

  deutetrabenazine: {
    hook: "Tetrabenazine with a deuterium upgrade — heavier hydrogen slows metabolism for smoother levels and twice-daily dosing (US-only).",
    steps: [
      {
        title: "The big picture",
        teach: "Deutetrabenazine (Austedo) is the DEUTERATED form of tetrabenazine — still a VMAT2 inhibitor that depletes dopamine for tardive dyskinesia. Swapping in heavier hydrogen just makes the drug behave more smoothly. It's US-only."
      },
      {
        title: "What it treats",
        teach: "In the US it's approved for BOTH tardive dyskinesia and Huntington chorea — two hyperkinetic problems where dopamine depletion calms the excess movement.",
        check: {
          q: "Deutetrabenazine is used for…",
          options: ["Tardive dyskinesia and Huntington chorea", "Acute dystonia", "PTSD nightmares"],
          answer: "Tardive dyskinesia and Huntington chorea",
          why: "It's a VMAT2 inhibitor for TD and Huntington chorea."
        }
      },
      {
        title: "The deuterium edge",
        teach: "The trick: carbon-deuterium bonds slow the metabolism of the active HTBZ metabolites, giving steadier drug levels, twice-daily dosing, and generally better tolerability than plain tetrabenazine."
      },
      {
        title: "How you use it",
        teach: "Start around 6 mg/day (Huntington chorea) or 12 mg/day divided (tardive dyskinesia), stepping up weekly by 6 mg to effect, up to about 48 mg/day. Take it twice daily with food."
      },
      {
        title: "Same class caveats",
        teach: "Smoother pharmacokinetics, but the same dopamine-depletion profile: depression and suicidality (boxed warning), parkinsonism, and QT prolongation. Reduce the dose with strong CYP2D6 inhibitors.",
        check: {
          q: "Deutetrabenazine shares which class risk?",
          options: ["Depression/suicidality from dopamine depletion", "Bronchospasm", "Anticholinergic delirium"],
          answer: "Depression/suicidality from dopamine depletion",
          why: "As a VMAT2 inhibitor it carries the dopamine-depletion depression/suicidality warning."
        }
      },
      {
        title: "The VMAT2 cousins",
        teach: "Line them up: deutetrabenazine (deuterated, BID, US-only), valbenazine (once-daily, US-only), and tetrabenazine (the Canada-available original, Nitoman).",
        check: {
          q: "What makes deutetrabenazine distinct from tetrabenazine?",
          options: ["Deuteration slows metabolism (steadier levels, BID)", "It blocks muscarinic receptors", "It's an α1 blocker"],
          answer: "Deuteration slows metabolism (steadier levels, BID)",
          why: "Deuterium bonds slow HTBZ metabolism for smoother levels and BID dosing."
        }
      }
    ],
    trap: "Deutetrabenazine (deuterated, US-only) vs tetrabenazine (Canada: Nitoman) vs valbenazine (once-daily, US-only).",
    takeaway: "Deutetrabenazine = deuterated tetrabenazine (US-only): smoother levels and BID dosing for TD/Huntington chorea, sharing the dopamine-depletion depression/parkinsonism/QT profile."
  },

  amantadine: {
    hook: "The parkinsonism fix that isn't an anticholinergic — a dopaminergic/NMDA agent with mottled skin and swollen ankles as tells.",
    steps: [
      {
        title: "The big picture",
        teach: "Amantadine is the odd one out among the movement adjuncts — neither an anticholinergic nor a VMAT2 inhibitor. It's a dopaminergic + NMDA-antagonist that treats parkinsonism, and its big selling point is doing so with far less anticholinergic burden."
      },
      {
        title: "The anticholinergic-sparing niche",
        teach: "Reach for it for DRUG-INDUCED PARKINSONISM (and as an adjunct for tardive dyskinesia or levodopa-induced dyskinesia) — especially in the elderly, where you want to AVOID the dry mouth, constipation, and confusion of anticholinergics.",
        check: {
          q: "Drug-induced parkinsonism in an elderly patient, avoiding anticholinergic burden — pick?",
          options: ["Amantadine", "Benztropine", "Trihexyphenidyl"],
          answer: "Amantadine",
          why: "Amantadine treats parkinsonism with much less anticholinergic burden."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 100 mg PO once daily, moving to 100 mg BID after about a week if needed, up to roughly 300–400 mg/day. Dose it earlier in the day — late doses cause insomnia."
      },
      {
        title: "Signature side effects",
        teach: "Two calling cards make amantadine recognizable on sight: LIVEDO RETICULARIS (a lace-like purple mottling of the skin) and ANKLE EDEMA. It can also cause hallucinations and confusion, especially in the elderly or with renal impairment.",
        check: {
          q: "Mottled skin (livedo reticularis) + ankle edema on a parkinsonism drug points to…",
          options: ["Amantadine", "Prazosin", "Propranolol"],
          answer: "Amantadine",
          why: "Livedo reticularis and ankle edema are amantadine's signature effects."
        }
      },
      {
        title: "Renal & withdrawal",
        teach: "Two safety must-knows: it's excreted largely UNCHANGED by the kidneys, so you MUST reduce the dose in renal impairment — and you must NOT stop it abruptly, since an NMS-like withdrawal syndrome can occur.",
        check: {
          q: "Amantadine requires dose adjustment for…",
          options: ["Renal impairment", "Hepatic impairment", "Asthma"],
          answer: "Renal impairment",
          why: "It's renally cleared unchanged, so renal impairment needs dose reduction."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "The engine: amantadine enhances dopamine release, blocks its reuptake, and antagonizes glutamate NMDA receptors — a boost-dopamine, dampen-glutamate combination (it also has historical anti-influenza-A activity)."
      },
      {
        title: "The look-alike",
        teach: "Don't mix it up with memantine — an NMDA antagonist used for Alzheimer dementia. Amantadine is the dopaminergic/NMDA agent for parkinsonism; memantine is for cognition.",
        check: {
          q: "Which drug is used for Alzheimer dementia rather than parkinsonism?",
          options: ["Memantine", "Amantadine", "Both treat parkinsonism"],
          answer: "Memantine",
          why: "Memantine (NMDA antagonist) is for Alzheimer dementia; amantadine is for parkinsonism."
        }
      }
    ],
    trap: "Amantadine (dopaminergic/NMDA — parkinsonism, renally cleared) vs memantine (NMDA antagonist for Alzheimer dementia).",
    takeaway: "Amantadine = a dopaminergic/NMDA agent for drug-induced parkinsonism with LESS anticholinergic burden; signature livedo reticularis + ankle edema, renally cleared, don't stop abruptly."
  },

  dexmedetomidine: {
    hook: "A sublingual film that calms acute agitation without EPS — an α2-agonist, but watch the blood pressure and pulse drop (US-only).",
    steps: [
      {
        title: "The big picture",
        teach: "Dexmedetomidine is a selective α2-adrenergic AGONIST that dials down central sympathetic outflow to calm and sedate — and it does so without significant respiratory depression. Its psychiatric form is a sublingual film."
      },
      {
        title: "The agitation niche",
        teach: "That film (Igalmi) is for ACUTE AGITATION in schizophrenia or bipolar I/II. Because it's non-dopaminergic, it calms WITHOUT the EPS risk of antipsychotics — a nice quality when movement side effects are a concern. It's US-only.",
        check: {
          q: "Sublingual α2-agonist film for acute agitation in schizophrenia/bipolar?",
          options: ["Dexmedetomidine", "Benztropine", "Modafinil"],
          answer: "Dexmedetomidine",
          why: "Dexmedetomidine sublingual film treats acute agitation without EPS."
        }
      },
      {
        title: "How you use it",
        teach: "It's a PRN tool for episodes, not daily maintenance: a sublingual/buccal film around 120 micrograms for an acute agitation event (lower in mild-to-moderate hepatic impairment or the elderly), with limited re-dosing per label."
      },
      {
        title: "The trade-off",
        teach: "The catch is cardiovascular. Expect hypotension, orthostatic hypotension, and bradycardia (with possible QT prolongation) plus sedation — so check blood pressure and heart rate before and after dosing, and have patients rise slowly.",
        check: {
          q: "What must you monitor after dosing dexmedetomidine?",
          options: ["Blood pressure and heart rate", "INR", "Serum sodium"],
          answer: "Blood pressure and heart rate",
          why: "α2 agonism causes hypotension and bradycardia."
        }
      },
      {
        title: "A touch of mechanism",
        teach: "The why: by agonizing α2 receptors it reduces noradrenergic (sympathetic) outflow, producing calm and sedation — the same receptor family as clonidine, but delivered as a fast sublingual film."
      },
      {
        title: "The look-alikes",
        teach: "Place it among its neighbours: dexmedetomidine is the α2-agonist film for acute agitation (US-only), clonidine and guanfacine are the other α2 agonists, and IM antipsychotics or benzodiazepines are the more traditional agitation options.",
        check: {
          q: "Dexmedetomidine belongs to which receptor class?",
          options: ["α2 agonist", "α1 antagonist", "Dopamine D2 antagonist"],
          answer: "α2 agonist",
          why: "It's an α2 agonist, like clonidine and guanfacine."
        }
      }
    ],
    trap: "Dexmedetomidine (α2 agonist for acute agitation, US-only) vs clonidine/guanfacine (α2 agonists) vs IM antipsychotics/benzodiazepines for agitation.",
    takeaway: "Dexmedetomidine = a sublingual α2-agonist film for acute agitation (US-only) that calms WITHOUT EPS; the trade-off is hypotension/bradycardia — monitor BP and HR."
  }
};
