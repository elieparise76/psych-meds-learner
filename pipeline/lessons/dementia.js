// Dementia micro-lessons (v2, clinical-first). Key = molecule id. Facts grounded in data/deck.json.
export default {
  donepezil: {
    hook: "The default first-line dementia drug — helps at every stage of Alzheimer, dosed once daily, and forgiving of a missed dose.",
    steps: [
      {
        title: "The big picture",
        teach: "Meet donepezil — the workhorse of Alzheimer treatment. It's a cholinesterase inhibitor, meaning it props up acetylcholine, the memory-and-attention messenger that runs low in Alzheimer. It's usually the first drug you'll reach for."
      },
      {
        title: "Where it fits",
        teach: "Donepezil is the go-to across ALL stages of Alzheimer — mild, moderate, and severe — which sets it apart from the other cholinesterase inhibitors. It's also used off-label in Lewy body, Parkinson-disease, and vascular dementia.",
        check: {
          q: "Across which stages of Alzheimer can donepezil be used?",
          options: ["Mild through severe", "Severe only", "Mild only"],
          answer: "Mild through severe",
          why: "Donepezil is the one cholinesterase inhibitor licensed across the full mild-to-severe range."
        }
      },
      {
        title: "Set expectations",
        teach: "Here's the honest part you must share with families: this is symptomatic treatment, not a cure. It can modestly steady memory and daily function for a while, but it does NOT stop the disease from progressing. Framing that up front prevents disappointment later.",
        check: {
          q: "What should you tell a family about what donepezil does?",
          options: ["Modest symptom help, but it won't stop the disease", "It reverses Alzheimer", "It halts progression completely"],
          answer: "Modest symptom help, but it won't stop the disease",
          why: "Cholinesterase inhibitors are symptomatic only — realistic expectations are part of good counselling."
        }
      },
      {
        title: "How you use it",
        teach: "Start low at 5 mg once daily, often at bedtime, and step up to 10 mg after 4-6 weeks if tolerated. Take it with food to soften early nausea. One neat quirk: if bedtime dosing brings vivid dreams or nightmares, just move the dose to the morning."
      },
      {
        title: "What patients feel",
        teach: "Because you're boosting acetylcholine everywhere, the common early effects are cholinergic and gut-heavy: nausea, diarrhea, and reduced appetite. These usually settle over a couple of weeks. Keep an eye on weight over the longer haul."
      },
      {
        title: "The must-not-miss",
        teach: "The high-stakes issue is the heart. Extra acetylcholine slows the heart, so donepezil can cause bradycardia, syncope, and even heart block. Be cautious in anyone with cardiac conduction problems, and if a treated patient faints, get an ECG rather than blaming the dementia.",
        check: {
          q: "A patient on donepezil has unexplained fainting. What's the key next step?",
          options: ["Get an ECG to look for bradycardia or heart block", "Increase the dose", "Ignore it as part of dementia"],
          answer: "Get an ECG to look for bradycardia or heart block",
          why: "Cholinergic slowing of the heart is a real cause of syncope — check the rhythm before attributing it to the disease."
        }
      },
      {
        title: "The classic error",
        teach: "Never pair a cholinesterase inhibitor with an anticholinergic drug — think oxybutynin for bladder or diphenhydramine for sleep. One is pushing acetylcholine up while the other blocks it: a pharmacologic tug-of-war that cancels the benefit AND worsens cognition. Always scan the med list.",
        check: {
          q: "Why is adding oxybutynin to donepezil a problem?",
          options: ["The anticholinergic opposes the cholinesterase inhibitor", "It doubles the cholinergic effect", "They have no interaction"],
          answer: "The anticholinergic opposes the cholinesterase inhibitor",
          why: "Anticholinergics blunt the very acetylcholine boost you're trying to create — a self-defeating combination."
        }
      },
      {
        title: "One on mechanism",
        teach: "In one line: donepezil reversibly blocks acetylcholinesterase in the brain, so synaptic acetylcholine isn't broken down as fast and cholinergic signalling improves. Its long half-life is why it's once daily and forgiving of the occasional missed dose."
      }
    ],
    trap: "Bradycardia and syncope are easy to miss — assess pulse and conduction history before starting, and re-check when a treated patient faints.",
    takeaway: "Donepezil = the once-daily, all-stages first-line cholinesterase inhibitor — modest symptomatic help, mind the heart, and never pair it with an anticholinergic."
  },

  rivastigmine: {
    hook: "The cholinesterase inhibitor that comes as a patch — gentler on the gut, and the only one also used for Parkinson-disease dementia.",
    steps: [
      {
        title: "The big picture",
        teach: "Rivastigmine is another cholinesterase inhibitor in the Alzheimer toolkit, but it has two signature moves: it comes as a skin patch, and it's the class member also indicated for Parkinson-disease dementia. Same symptomatic, non-curative goal as its cousins."
      },
      {
        title: "Where it fits",
        teach: "Use it for mild-to-moderate Alzheimer, and reach for it specifically when your patient has dementia in the setting of Parkinson disease — that's rivastigmine's niche.",
        check: {
          q: "Which cholinesterase inhibitor is the one carried for Parkinson-disease dementia?",
          options: ["Rivastigmine", "Donepezil", "Galantamine"],
          answer: "Rivastigmine",
          why: "Among the cholinesterase inhibitors, rivastigmine is the one indicated for Parkinson-disease dementia."
        }
      },
      {
        title: "The patch advantage",
        teach: "The oral form can be tough on the stomach, especially while titrating. The transdermal patch delivers smoother drug levels, so it causes noticeably less nausea and vomiting AND improves adherence. Two rules: rotate the application site, and never wear more than one patch at a time.",
        check: {
          q: "Why is the rivastigmine patch often preferred over the oral form?",
          options: ["Smoother levels mean less nausea and better adherence", "It's more potent", "It has no cholinergic effects"],
          answer: "Smoother levels mean less nausea and better adherence",
          why: "The patch avoids the peaks that drive GI side effects and is easier to keep taking."
        }
      },
      {
        title: "How you use it",
        teach: "Oral rivastigmine starts at 1.5 mg twice daily WITH FOOD, titrated up slowly by 1.5 mg BID every couple of weeks. The patch starts at 4.6 mg/24 h and steps up to 9.5 then 13.3 mg/24 h. Go slow — rushing the increase is what triggers vomiting."
      },
      {
        title: "The re-titration trap",
        teach: "This is the must-not-miss. If a patient stops for more than a few days and then restarts at their OLD dose, they can get severe vomiting and dehydration — esophageal rupture has been reported. After any interruption longer than three days, restart low and re-titrate.",
        check: {
          q: "A patient off rivastigmine for a week wants to resume. What do you do?",
          options: ["Restart low and re-titrate", "Resume the previous full dose", "Double the dose to catch up"],
          answer: "Restart low and re-titrate",
          why: "Jumping back to the old dose after an interruption risks dangerous vomiting — always re-titrate."
        }
      },
      {
        title: "The same cautions",
        teach: "It's still a cholinergic drug, so the familiar warnings apply: bradycardia and syncope, GI upset and peptic-ulcer risk, and the same rule against pairing it with anticholinergics. With the patch, also check the skin for site irritation."
      },
      {
        title: "One on mechanism",
        teach: "Rivastigmine's twist: it blocks BOTH acetylcholinesterase and butyrylcholinesterase, and it's cleared by esterases rather than the CYP enzymes — so it has few drug interactions. Handy in patients already on a long medication list."
      }
    ],
    trap: "After an interruption over three days, do NOT resume the old dose — restart low. And confirm only one patch is on at a time.",
    takeaway: "Rivastigmine = the dual-esterase cholinesterase inhibitor available as a gentler patch and the pick for Parkinson-disease dementia — re-titrate after any break."
  },

  galantamine: {
    hook: "A cholinesterase inhibitor with a bonus nicotinic boost — reserved for mild-to-moderate Alzheimer, with real renal and hepatic limits.",
    steps: [
      {
        title: "The big picture",
        teach: "Galantamine is a cholinesterase inhibitor with a little something extra: alongside blocking the enzyme, it also nudges nicotinic acetylcholine receptors to respond more strongly. Same symptomatic goal as the rest of the class."
      },
      {
        title: "Where it fits",
        teach: "Important limit: galantamine is for MILD-to-MODERATE Alzheimer only — unlike donepezil, it's not used in severe disease. It also has a role in mixed Alzheimer/vascular dementia.",
        check: {
          q: "For which severity of Alzheimer is galantamine appropriate?",
          options: ["Mild to moderate only", "Severe only", "Any stage"],
          answer: "Mild to moderate only",
          why: "Galantamine is restricted to mild-to-moderate disease, unlike donepezil which spans all stages."
        }
      },
      {
        title: "How you use it",
        teach: "The immediate-release form is 4 mg twice daily; the extended-release is 8 mg once each morning. Titrate in roughly 4-week steps up to a max of 24 mg/day. Always take it WITH MEALS and plenty of fluids — that keeps the nausea manageable."
      },
      {
        title: "What patients feel",
        teach: "Like its cousins, the everyday effects are cholinergic and GI: nausea, vomiting, diarrhea, and appetite loss, most prominent while titrating. Dizziness and headache can occur too. Food, fluids, and slow increases are your friends here."
      },
      {
        title: "The must-not-miss",
        teach: "Two big safety points. First, respect renal and hepatic function — galantamine has hard dosing limits and should be avoided in severe impairment. Second, it carries the class cardiac risks of bradycardia, syncope, and heart block.",
        check: {
          q: "What must you check before dosing galantamine that's especially important for this drug?",
          options: ["Renal and hepatic function", "Serum lithium level", "Thyroid antibodies"],
          answer: "Renal and hepatic function",
          why: "Galantamine has firm renal and hepatic dosing limits and is avoided in severe impairment."
        }
      },
      {
        title: "Watch the skin",
        teach: "A rare but serious flag: galantamine can trigger severe skin reactions like Stevens-Johnson syndrome. Tell patients to report any spreading rash or blistering right away, and stop the drug at the first sign of a serious reaction.",
        check: {
          q: "A patient on galantamine develops a spreading, blistering rash. What do you do?",
          options: ["Stop the drug and evaluate urgently", "Increase fluids and continue", "Halve the dose and continue"],
          answer: "Stop the drug and evaluate urgently",
          why: "Serious cutaneous reactions like Stevens-Johnson syndrome mean stopping immediately."
        }
      },
      {
        title: "One on mechanism",
        teach: "The memorable line: galantamine works two ways at once — it inhibits acetylcholinesterase AND allosterically potentiates nicotinic receptors, giving a double push to cholinergic signalling. And a caution: an excess-mortality signal appeared when it was tried in mild cognitive impairment, which is NOT an approved use."
      }
    ],
    trap: "Galantamine is mild-to-moderate only (not severe) and needs renal/hepatic dose limits — and don't use it for mild cognitive impairment.",
    takeaway: "Galantamine = the dual-mechanism (AChE + nicotinic) cholinesterase inhibitor for mild-to-moderate Alzheimer — mind renal/hepatic limits and rare serious rashes."
  },

  memantine: {
    hook: "The odd one out — not a cholinesterase inhibitor but an NMDA blocker, added on in moderate-to-severe disease and easy on the gut.",
    steps: [
      {
        title: "The big picture",
        teach: "Memantine breaks from the pack: it is NOT a cholinesterase inhibitor. Instead it blocks NMDA glutamate receptors, dialling down the excess glutamate signalling that damages neurons. Because the mechanism is completely different, so is its whole personality."
      },
      {
        title: "Where it fits",
        teach: "Memantine is for MODERATE-to-SEVERE Alzheimer — not first-line for mild disease. Its different mechanism means it can be safely COMBINED with a cholinesterase inhibitor, which is exactly how it's often used.",
        check: {
          q: "In which patients is memantine typically used?",
          options: ["Moderate-to-severe Alzheimer, often added to a cholinesterase inhibitor", "Mild Alzheimer as first-line monotherapy", "Only when cholinesterase inhibitors are contraindicated"],
          answer: "Moderate-to-severe Alzheimer, often added to a cholinesterase inhibitor",
          why: "Its distinct NMDA mechanism lets it stack onto a cholinesterase inhibitor in more advanced disease."
        }
      },
      {
        title: "When to reach for it",
        teach: "Picture a patient stable on donepezil whose Alzheimer is progressing into the moderate-to-severe range. Rather than swapping, you ADD memantine — two complementary mechanisms working together.",
        check: {
          q: "A patient on donepezil progresses to moderate-severe Alzheimer. A reasonable step?",
          options: ["Add memantine alongside the donepezil", "Stop donepezil and start an anticholinergic", "Do nothing — no options remain"],
          answer: "Add memantine alongside the donepezil",
          why: "Memantine's separate mechanism makes it a natural add-on in more advanced disease."
        }
      },
      {
        title: "How you use it",
        teach: "Start at 5 mg once daily and go up by 5 mg each week to a target of 10 mg twice daily (immediate-release) or 28 mg once daily (extended-release). The dose leans on kidney function, so ask about renal problems before pushing it up."
      },
      {
        title: "What patients feel",
        teach: "Here's the pleasant surprise: memantine is generally well tolerated and skips the cholinergic burden. No cholinergic nausea, no slow pulse. Its effects are CNS-flavoured instead — dizziness, constipation, headache, and occasionally mild confusion."
      },
      {
        title: "The monitoring point",
        teach: "The must-know is renal, not cardiac. Memantine is excreted largely UNCHANGED by the kidneys, so dose-reduce in severe renal impairment. A subtle trap: things that alkalinise the urine — like sodium bicarbonate or carbonic-anhydrase inhibitors — cut its clearance and raise its levels.",
        check: {
          q: "Which organ's function most directly guides memantine dosing?",
          options: ["The kidneys", "The liver", "The heart"],
          answer: "The kidneys",
          why: "Memantine is renally cleared largely unchanged, so renal function sets the dose — unlike the hepatically-handled cholinesterase inhibitors."
        }
      },
      {
        title: "One on mechanism",
        teach: "The elegant line: memantine is a low-affinity, open-channel NMDA antagonist. It plugs the pathological, tonic glutamate flow that drives excitotoxicity, yet its fast off-rate lets normal synaptic signals still get through — so it protects without freezing everyday brain traffic."
      }
    ],
    trap: "Memantine is NOT a cholinesterase inhibitor — don't expect (or monitor for) cholinergic GI upset or bradycardia. It's the kidneys you watch.",
    takeaway: "Memantine = the NMDA-antagonist outlier for moderate-to-severe Alzheimer — well tolerated, renally cleared, and safely combined with a cholinesterase inhibitor."
  }
};
