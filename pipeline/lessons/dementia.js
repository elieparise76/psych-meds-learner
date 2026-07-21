// Dementia micro-lessons. Key = molecule id. Facts grounded in data/deck.json.
export default {
  donepezil: {
    hook: "The default first-line dementia drug: pumps up acetylcholine, works at every stage, and lasts the longest.",
    steps: [
      {
        title: "What it is",
        teach: "Donepezil is a reversible, centrally-selective acetylcholinesterase (AChE) inhibitor: block the enzyme that breaks down acetylcholine, and synaptic ACh rises in cortex and hippocampus.",
        check: {
          q: "How does donepezil raise acetylcholine?",
          options: ["Inhibits acetylcholinesterase (blocks ACh breakdown)", "Blocks NMDA receptors", "Stimulates dopamine release"],
          answer: "Inhibits acetylcholinesterase (blocks ACh breakdown)",
          why: "AChE inhibitors stop ACh from being degraded, so more stays in the synapse."
        }
      },
      {
        title: "Symptomatic only",
        teach: "This is symptomatic treatment, NOT disease-modifying — it eases cognitive symptoms but does not halt Alzheimer progression. Set expectations with families up front.",
        check: {
          q: "What does donepezil do to Alzheimer disease progression?",
          options: ["Nothing — it treats symptoms only", "Reverses the underlying disease", "Stops progression permanently"],
          answer: "Nothing — it treats symptoms only",
          why: "AChE inhibitors are symptomatic; they do not modify the disease course."
        }
      },
      {
        title: "Cholinergic toxicity",
        teach: "More ACh means cholinergic excess: nausea, vomiting, diarrhea, plus bradycardia and syncope. Unexplained syncope in a treated patient → get an ECG for bradycardia/heart block before blaming the dementia.",
        check: {
          q: "A patient on donepezil has new unexplained syncope — best next test?",
          options: ["ECG for bradycardia/heart block", "Reassure, it's the dementia", "Head CT only"],
          answer: "ECG for bradycardia/heart block",
          why: "Cholinergic excess can cause bradyarrhythmia and heart block — check the ECG."
        }
      },
      {
        title: "Longest half-life",
        teach: "At ~70 hours it has the longest half-life of the AChE inhibitors — convenient once-daily dosing (often at bedtime) and forgiving of a missed dose. It's the one approved across ALL stages, mild through severe.",
        check: {
          q: "Why is donepezil dosed just once daily?",
          options: ["~70-hour half-life (longest AChE inhibitor)", "It's a prodrug", "It has no active effect until day 5"],
          answer: "~70-hour half-life (longest AChE inhibitor)",
          why: "Its long ~70 h half-life supports convenient once-daily dosing."
        }
      },
      {
        title: "Avoid anticholinergics",
        teach: "Co-prescribing anticholinergics (oxybutynin, tolterodine, TCAs, first-gen antihistamines, benztropine) directly OPPOSES donepezil and worsens cognition — always scan the med list for them.",
        check: {
          q: "Why avoid oxybutynin in a patient on donepezil?",
          options: ["It's anticholinergic — opposes the drug and worsens cognition", "It raises donepezil to toxic levels", "It causes serotonin syndrome"],
          answer: "It's anticholinergic — opposes the drug and worsens cognition",
          why: "Anticholinergics counteract the cholinergic boost donepezil is trying to create."
        }
      }
    ],
    trap: "Donepezil (AChE inhibitor, cholinergic/GI/brady effects, all stages) vs memantine (NMDA antagonist, no cholinergic effects, moderate–severe).",
    takeaway: "Donepezil = the once-daily, longest-half-life, all-stages first-line AChE inhibitor — symptomatic only, watch for GI/bradycardia/syncope, and keep anticholinergics off the list."
  },

  rivastigmine: {
    hook: "The dual-esterase inhibitor: its patch tames the GI side effects, and it's the one that covers Parkinson dementia.",
    steps: [
      {
        title: "What it is",
        teach: "Rivastigmine is a pseudo-irreversible (carbamate) inhibitor of BOTH acetylcholinesterase AND butyrylcholinesterase, raising synaptic acetylcholine. That dual-esterase inhibition is its signature; symptomatic only.",
        check: {
          q: "What is distinctive about rivastigmine's mechanism?",
          options: ["Inhibits both acetyl- and butyrylcholinesterase", "Blocks NMDA receptors", "Selectively boosts dopamine"],
          answer: "Inhibits both acetyl- and butyrylcholinesterase",
          why: "Dual esterase inhibition (AChE + BuChE) sets rivastigmine apart from the others."
        }
      },
      {
        title: "GI-heavy oral",
        teach: "Like all AChE inhibitors it drives cholinergic GI effects — and oral rivastigmine is especially prone to nausea and vomiting, most notably during titration.",
        check: {
          q: "Which side effect is most prominent with ORAL rivastigmine, especially while titrating?",
          options: ["Nausea and vomiting", "Hair loss", "QT prolongation"],
          answer: "Nausea and vomiting",
          why: "Cholinergic GI toxicity is prominent with oral rivastigmine, particularly during titration."
        }
      },
      {
        title: "The patch wins",
        teach: "The transdermal patch delivers smooth, sustained levels over 24 h — this markedly REDUCES the GI side effects versus oral dosing and improves adherence.",
        check: {
          q: "Main advantage of the rivastigmine patch over oral?",
          options: ["Fewer GI side effects (smoother levels)", "It's disease-modifying", "It has no cholinergic effects at all"],
          answer: "Fewer GI side effects (smoother levels)",
          why: "Steady transdermal delivery cuts the nausea/vomiting seen with oral dosing."
        }
      },
      {
        title: "Parkinson dementia",
        teach: "Rivastigmine is the ONLY cholinesterase inhibitor also approved for Parkinson disease dementia — a key differentiator from donepezil and galantamine.",
        check: {
          q: "Which cholinesterase inhibitor is approved for Parkinson disease dementia?",
          options: ["Rivastigmine", "Donepezil", "Galantamine"],
          answer: "Rivastigmine",
          why: "Rivastigmine is the class member indicated for Parkinson disease dementia."
        }
      },
      {
        title: "Re-titrate after a gap",
        teach: "After an interruption >3 days, restart LOW and re-titrate — jumping back to the old dose risks severe vomiting/dehydration (esophageal rupture has been reported).",
        check: {
          q: "Rivastigmine was stopped for 4 days — how do you restart it?",
          options: ["Restart low and re-titrate", "Resume the previous full dose", "Double the dose to catch up"],
          answer: "Restart low and re-titrate",
          why: "After a >3-day gap, resuming the old dose risks severe vomiting — re-titrate from low."
        }
      }
    ],
    trap: "Rivastigmine (dual-esterase, twice-daily or patch, Parkinson dementia) vs donepezil (AChE-selective, once daily, all Alzheimer stages).",
    takeaway: "Rivastigmine = dual AChE+BuChE inhibitor; the patch smooths out GI side effects, and it's the class member for Parkinson disease dementia — but re-titrate after any >3-day break."
  },

  galantamine: {
    hook: "The cholinesterase inhibitor with a bonus mechanism — it also fine-tunes nicotinic receptors — but only for mild–moderate disease.",
    steps: [
      {
        title: "Dual mechanism",
        teach: "Galantamine is a reversible AChE inhibitor PLUS an allosteric potentiator of nicotinic acetylcholine receptors — a dual cholinergic action that further amplifies ACh signalling. Symptomatic only.",
        check: {
          q: "What's the EXTRA mechanism galantamine adds beyond AChE inhibition?",
          options: ["Allosteric potentiation of nicotinic receptors", "NMDA-receptor blockade", "Serotonin reuptake inhibition"],
          answer: "Allosteric potentiation of nicotinic receptors",
          why: "Galantamine both inhibits AChE and allosterically boosts nicotinic ACh receptors."
        }
      },
      {
        title: "Cholinergic class effects",
        teach: "It shares the class cholinergic toxicity — GI upset (nausea/vomiting/diarrhea) and bradycardia/syncope — and anticholinergics still OPPOSE it and reduce efficacy.",
        check: {
          q: "Co-prescribing an anticholinergic with galantamine will...",
          options: ["Oppose it and reduce efficacy", "Boost its cognitive benefit", "Have no effect"],
          answer: "Oppose it and reduce efficacy",
          why: "Anticholinergics counteract the cholinergic effect galantamine is producing."
        }
      },
      {
        title: "Mild–moderate only",
        teach: "Galantamine is approved for mild–moderate Alzheimer only (not severe), and it has hard limits — avoid it in severe renal or hepatic impairment.",
        check: {
          q: "Galantamine is contraindicated in which situation?",
          options: ["Severe renal or hepatic impairment", "Any bradycardia at all", "Age over 65"],
          answer: "Severe renal or hepatic impairment",
          why: "Galantamine must be avoided in severe renal/hepatic impairment and isn't used for severe disease."
        }
      },
      {
        title: "MCI mortality signal",
        teach: "An excess-mortality signal appeared when galantamine was trialled for mild cognitive impairment — which is NOT an approved indication. Don't use it off-label for MCI.",
        check: {
          q: "Why not use galantamine for mild cognitive impairment (MCI)?",
          options: ["Excess-mortality signal; not an approved use", "It's too sedating", "It causes serotonin syndrome"],
          answer: "Excess-mortality signal; not an approved use",
          why: "MCI trials showed an excess-mortality signal, and MCI is not an approved indication."
        }
      }
    ],
    trap: "Galantamine vs guanfacine — similar-sounding but unrelated (guanfacine is an α2 agonist for ADHD).",
    takeaway: "Galantamine = AChE inhibitor + nicotinic allosteric boost, restricted to mild–moderate Alzheimer, with hard renal/hepatic limits and an MCI mortality signal to respect."
  },

  memantine: {
    hook: "The odd one out — an NMDA antagonist, not cholinergic: well tolerated, moderate–severe, added onto a cholinesterase inhibitor.",
    steps: [
      {
        title: "Different mechanism",
        teach: "Memantine is an uncompetitive, open-channel NMDA-receptor antagonist. It dampens pathological glutamate-driven Ca²⁺ excitotoxicity while sparing normal signalling — a mechanism entirely DISTINCT from the cholinesterase inhibitors.",
        check: {
          q: "Memantine's mechanism of action?",
          options: ["NMDA-receptor antagonist", "Acetylcholinesterase inhibitor", "Dopamine agonist"],
          answer: "NMDA-receptor antagonist",
          why: "Memantine blocks NMDA receptors — not a cholinergic drug at all."
        }
      },
      {
        title: "No cholinergic effects",
        teach: "Because it isn't cholinergic, it has NO GI/bradycardia syndrome — it's well tolerated. Main issues are dizziness, constipation, confusion and somnolence, not nausea/vomiting.",
        check: {
          q: "Which side effect do you NOT expect with memantine?",
          options: ["Cholinergic bradycardia/vomiting", "Dizziness", "Constipation"],
          answer: "Cholinergic bradycardia/vomiting",
          why: "Memantine has no cholinergic action, so it lacks the GI/brady syndrome of AChE inhibitors."
        }
      },
      {
        title: "Combine + moderate–severe",
        teach: "Its distinct mechanism means it can be COMBINED with a cholinesterase inhibitor in moderate–severe Alzheimer. It's reserved for moderate–severe disease — not first-line for mild.",
        check: {
          q: "Can memantine be given together with donepezil?",
          options: ["Yes — different mechanisms, used together in moderate–severe disease", "No — they cancel out", "No — both are NMDA blockers"],
          answer: "Yes — different mechanisms, used together in moderate–severe disease",
          why: "NMDA antagonism is distinct from AChE inhibition, so the two are combined in moderate–severe Alzheimer."
        }
      },
      {
        title: "Renally cleared",
        teach: "Memantine is excreted largely UNCHANGED by the kidney (minimal hepatic metabolism) — dose-reduce in severe renal impairment. Alkaline urine cuts its clearance and raises levels.",
        check: {
          q: "In which patient must you dose-reduce memantine?",
          options: ["Severe renal impairment", "Severe hepatic impairment", "Any smoker"],
          answer: "Severe renal impairment",
          why: "It's renally cleared, so severe renal impairment demands a dose reduction."
        }
      },
      {
        title: "Avoid other NMDA drugs",
        teach: "Don't stack it with other NMDA-active agents — amantadine, ketamine, dextromethorphan — because of additive CNS effects.",
        check: {
          q: "Which drug should you avoid combining with memantine?",
          options: ["Amantadine (another NMDA-active drug)", "Metformin", "Amoxicillin"],
          answer: "Amantadine (another NMDA-active drug)",
          why: "Amantadine is also NMDA-active — combining risks additive CNS effects."
        }
      }
    ],
    trap: "Memantine vs amantadine — both NMDA-active, but amantadine is an antiviral/anti-parkinsonian and should NOT be co-prescribed with memantine.",
    takeaway: "Memantine = the non-cholinergic NMDA antagonist — well tolerated, renally cleared, reserved for moderate–severe disease, and safely combined with a cholinesterase inhibitor."
  }
};
