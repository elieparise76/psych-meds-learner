// ADHD micro-lessons. Key = molecule id. Facts grounded in data/deck.json.
export default {
  methylphenidate: {
    hook: "The first-line stimulant that only BLOCKS reuptake — it never tells the neuron to release dopamine.",
    steps: [
      {
        title: "What it is",
        teach: "Methylphenidate is a first-line ADHD stimulant. It blocks the presynaptic dopamine and norepinephrine transporters (DAT/NET), raising synaptic DA/NE — a pure REUPTAKE BLOCKER.",
        check: {
          q: "Methylphenidate's core mechanism?",
          options: ["Blocks DAT/NET reuptake", "Triggers vesicular dopamine release", "Inhibits MAO-A"],
          answer: "Blocks DAT/NET reuptake",
          why: "It blocks the transporters; it does not drive release like amphetamines."
        }
      },
      {
        title: "vs amphetamines",
        teach: "The classic contrast: methylphenidate ONLY blocks reuptake, whereas amphetamines also drive presynaptic RELEASE of dopamine/norepinephrine. Same net effect (more synaptic DA), different mechanism.",
        check: {
          q: "How does methylphenidate differ mechanistically from amphetamines?",
          options: ["It releases dopamine; they block reuptake", "It blocks reuptake only; they also release transmitter", "It inhibits MAO; they block reuptake"],
          answer: "It blocks reuptake only; they also release transmitter",
          why: "Amphetamines are releasers-plus-blockers; methylphenidate is a pure blocker."
        }
      },
      {
        title: "The stimulant toll",
        teach: "Expect decreased appetite/weight loss, insomnia, and increased heart rate/blood pressure. In children, monitor growth. Carries a boxed warning for abuse and dependence.",
        check: {
          q: "Which is a hallmark stimulant side effect to monitor in a child?",
          options: ["Growth suppression", "Weight gain", "Bradycardia"],
          answer: "Growth suppression",
          why: "Appetite suppression and reduced growth velocity mean growth must be tracked."
        }
      },
      {
        title: "Cleanest interactions",
        teach: "Metabolized by carboxylesterase (CES1) to ritalinic acid, with minimal CYP involvement → far fewer PK interactions than most psychotropics. But MAOIs are contraindicated (hypertensive crisis).",
        check: {
          q: "Which combination risks a hypertensive crisis?",
          options: ["Methylphenidate + MAOI", "Methylphenidate + acetaminophen", "Methylphenidate + vitamin D"],
          answer: "Methylphenidate + MAOI",
          why: "Stimulant plus MAOI can precipitate a hypertensive crisis — contraindicated."
        }
      }
    ],
    trap: "Methylphenidate (Ritalin/Concerta) is NOT dexmethylphenidate — the latter is just its active d-enantiomer. The OROS 'ghost tablet' in stool is the empty shell, not treatment failure.",
    takeaway: "Methylphenidate = first-line stimulant, pure DAT/NET reuptake blocker, CES1 (not CYP) metabolism → few interactions, but never with an MAOI."
  },

  dextroamphetamine: {
    hook: "The amphetamine that RELEASES dopamine — the mechanistic mirror-image of methylphenidate.",
    steps: [
      {
        title: "What it is",
        teach: "Dextroamphetamine is a first-line ADHD stimulant. It enters the neuron via DAT/NET and drives RELEASE of dopamine/norepinephrine (plus blocks reuptake) — primarily a transmitter RELEASER.",
        check: {
          q: "Dextroamphetamine's primary mechanism?",
          options: ["Drives presynaptic DA/NE release", "Pure reuptake blockade only", "Blocks D2 receptors"],
          answer: "Drives presynaptic DA/NE release",
          why: "Amphetamines reverse the transporters to release transmitter — releasers, not just blockers."
        }
      },
      {
        title: "Stimulant safety",
        teach: "Like all stimulants: decreased appetite/weight loss, insomnia, raised heart rate/blood pressure, and growth suppression in children. Boxed warning for abuse, misuse, and addiction; MAOIs are contraindicated.",
        check: {
          q: "Which pairing is contraindicated?",
          options: ["Dextroamphetamine + MAOI", "Dextroamphetamine + water", "Dextroamphetamine + ibuprofen"],
          answer: "Dextroamphetamine + MAOI",
          why: "Amphetamine plus MAOI risks hypertensive crisis."
        }
      },
      {
        title: "Urine pH quirk",
        teach: "Renal excretion is urine-pH dependent: alkaline urine (e.g., bicarbonate) prolongs amphetamine and raises toxicity risk; acidic urine speeds clearance and lowers levels.",
        check: {
          q: "Alkalinizing the urine does what to amphetamine levels?",
          options: ["Raises them (prolonged, more toxicity)", "Lowers them", "No effect"],
          answer: "Raises them (prolonged, more toxicity)",
          why: "Alkaline urine reduces excretion, so amphetamine accumulates."
        }
      }
    ],
    trap: "Don't confuse dextroamphetamine (the active drug) with lisdexamfetamine (its prodrug) or mixed amphetamine salts (a d+l blend).",
    takeaway: "Dextroamphetamine = first-line amphetamine that RELEASES dopamine; watch appetite/growth/HR/BP, avoid MAOIs, and remember urine-pH alters exposure."
  },

  lisdexamfetamine: {
    hook: "The amphetamine PRODRUG — inert until your blood switches it on, which blunts the snort-or-inject high.",
    steps: [
      {
        title: "What it is",
        teach: "Lisdexamfetamine is an inactive prodrug: d-amphetamine bound to L-lysine. Red-blood-cell peptidases hydrolyze it in the blood to active dextroamphetamine, which then releases and blocks reuptake of DA/NE.",
        check: {
          q: "How is lisdexamfetamine activated?",
          options: ["Hydrolyzed in blood to dextroamphetamine", "Absorbed already active from the gut", "Converted by CYP3A4 in the liver"],
          answer: "Hydrolyzed in blood to dextroamphetamine",
          why: "RBC peptidases cleave off L-lysine to liberate active dextroamphetamine."
        }
      },
      {
        title: "Lower misuse liability",
        teach: "Because activation is rate-limited and happens in the bloodstream, it can't be 'switched on' by snorting or injecting → lower misuse potential and a smooth, once-daily duration.",
        check: {
          q: "Why is lisdexamfetamine's abuse potential relatively lower?",
          options: ["It can't be activated by snorting/injecting", "It isn't a controlled substance", "It has no dopamine effect"],
          answer: "It can't be activated by snorting/injecting",
          why: "The prodrug must be enzymatically hydrolyzed in blood, blunting a route-of-administration 'high'."
        }
      },
      {
        title: "Still an amphetamine",
        teach: "Once activated it behaves like dextroamphetamine: appetite loss, insomnia, raised HR/BP, growth suppression in children. It still carries the boxed abuse warning and the MAOI contraindication.",
        check: {
          q: "Does the prodrug design remove the MAOI contraindication?",
          options: ["No — MAOIs are still contraindicated", "Yes — MAOIs are now safe", "Only in adults"],
          answer: "No — MAOIs are still contraindicated",
          why: "It becomes active amphetamine, so all amphetamine cautions (including MAOI) apply."
        }
      }
    ],
    trap: "Lisdexamfetamine (Vyvanse, prodrug) ≠ dextroamphetamine (its active drug) ≠ mixed amphetamine salts (Adderall XR). 'Lower' misuse liability is not 'no' misuse liability.",
    takeaway: "Lisdexamfetamine = amphetamine prodrug activated in blood → smooth once-daily effect and lower misuse potential, but still a controlled amphetamine (no MAOIs)."
  },

  amphetamine_salts: {
    hook: "A 3:1 d:l-amphetamine blend — the l-isomer adds extra peripheral cardiovascular punch.",
    steps: [
      {
        title: "What it is",
        teach: "Mixed amphetamine salts are a ~3:1 dextro-to-levo amphetamine mixture. Like all amphetamines, they drive presynaptic RELEASE of dopamine/norepinephrine and block reuptake. First-line stimulant.",
        check: {
          q: "Mixed amphetamine salts are best described as…",
          options: ["A d+l amphetamine blend that releases DA/NE", "A pure reuptake blocker", "A non-stimulant NRI"],
          answer: "A d+l amphetamine blend that releases DA/NE",
          why: "It's a d:l-amphetamine mixture acting as a releaser-plus-blocker."
        }
      },
      {
        title: "The l-isomer twist",
        teach: "The l-amphetamine component contributes relatively MORE peripheral noradrenergic (cardiovascular) effect than pure dextroamphetamine — so watch heart rate and blood pressure.",
        check: {
          q: "What does the l-amphetamine component add?",
          options: ["More peripheral noradrenergic/cardiovascular effect", "Less cardiovascular effect", "A sedating antihistamine effect"],
          answer: "More peripheral noradrenergic/cardiovascular effect",
          why: "The l-isomer is relatively more peripherally (cardiovascular) active."
        }
      },
      {
        title: "Amphetamine cautions",
        teach: "Shares the whole amphetamine profile: appetite loss/weight loss, insomnia, raised HR/BP, growth suppression in children, boxed abuse warning, and the MAOI contraindication.",
        check: {
          q: "Which is contraindicated with mixed amphetamine salts?",
          options: ["MAOIs", "Multivitamins", "Topical sunscreen"],
          answer: "MAOIs",
          why: "As an amphetamine, combining with an MAOI risks hypertensive crisis."
        }
      }
    ],
    trap: "Mixed amphetamine salts (Adderall XR) ≠ lisdexamfetamine (prodrug) ≠ dextroamphetamine (pure d-isomer).",
    takeaway: "Mixed amphetamine salts = a 3:1 d:l-amphetamine releaser; extra l-isomer cardiovascular effect, standard stimulant/abuse cautions, no MAOIs."
  },

  atomoxetine: {
    hook: "The NON-stimulant NRI: no misuse potential, but it takes weeks — and carries liver and youth-suicidality warnings.",
    steps: [
      {
        title: "What it is",
        teach: "Atomoxetine is a NON-stimulant selective norepinephrine reuptake inhibitor (blocks NET). In the prefrontal cortex NET also clears dopamine, so it raises PFC DA/NE without a striatal dopamine surge → no reward/reinforcement and no misuse potential.",
        check: {
          q: "Atomoxetine's mechanism?",
          options: ["Selective norepinephrine reuptake inhibition (NET)", "Amphetamine-like dopamine release", "α2A receptor agonism"],
          answer: "Selective norepinephrine reuptake inhibition (NET)",
          why: "It's a selective NRI — non-stimulant, no striatal DA surge."
        }
      },
      {
        title: "Slow but non-controlled",
        teach: "Because it lacks the striatal dopamine surge, it takes 2–4 weeks for full effect — but it is NOT a controlled substance and has no misuse potential, making it the go-to when diversion/misuse is a concern.",
        check: {
          q: "How long until atomoxetine reaches full effect?",
          options: ["2–4 weeks", "Within an hour", "6 months"],
          answer: "2–4 weeks",
          why: "No fast dopamine surge means a gradual, weeks-long onset."
        }
      },
      {
        title: "The two red flags",
        teach: "Boxed warning for suicidal ideation in children/adolescents (monitor closely early), plus rare but potentially severe hepatotoxicity — stop for jaundice or markedly elevated LFTs and do not rechallenge.",
        check: {
          q: "Which serious risk warrants stopping atomoxetine and NOT rechallenging?",
          options: ["Signs of hepatotoxicity (jaundice / high LFTs)", "Mild dry mouth", "Transient headache"],
          answer: "Signs of hepatotoxicity (jaundice / high LFTs)",
          why: "Hepatotoxicity is rare but potentially severe — discontinue and don't rechallenge."
        }
      },
      {
        title: "CYP2D6 sensitivity",
        teach: "Cleared by CYP2D6. Poor metabolizers, or patients on strong 2D6 inhibitors (fluoxetine, paroxetine, quinidine), get much higher levels (half-life ~5 h → up to ~24 h) — titrate cautiously. MAOIs are contraindicated.",
        check: {
          q: "Adding fluoxetine to atomoxetine does what to atomoxetine levels?",
          options: ["Raises them (CYP2D6 inhibition)", "Lowers them", "No change"],
          answer: "Raises them (CYP2D6 inhibition)",
          why: "Fluoxetine inhibits CYP2D6, so atomoxetine accumulates."
        }
      }
    ],
    trap: "Atomoxetine (ADHD NRI) vs reboxetine (antidepressant NRI) vs duloxetine (SNRI) — different drugs. And 'non-stimulant' does not mean 'no warnings' (liver + youth suicidality).",
    takeaway: "Atomoxetine = non-controlled selective NRI; slow (2–4 wk) onset, CYP2D6-dependent, watch for hepatotoxicity and youth suicidality; the choice when misuse is a worry."
  },

  guanfacine: {
    hook: "The α2A-selective non-stimulant that tunes the prefrontal cortex — less sedating than clonidine, but never stop it cold.",
    steps: [
      {
        title: "What it is",
        teach: "Guanfacine XR is a NON-stimulant selective α2A-adrenergic AGONIST. Postsynaptic α2A stimulation on prefrontal pyramidal neurons strengthens working-memory/attention network connectivity.",
        check: {
          q: "Guanfacine's mechanism?",
          options: ["Selective α2A-adrenergic agonist", "Dopamine releaser", "Norepinephrine reuptake inhibitor"],
          answer: "Selective α2A-adrenergic agonist",
          why: "It's an α2A agonist acting on prefrontal neurons — a non-stimulant."
        }
      },
      {
        title: "vs clonidine",
        teach: "More α2A-selective than clonidine → relatively LESS sedation and hypotension for its effect (though both still occur), and it's the α2 agonist with a specific ADHD (XR) indication and stimulant-adjunct role.",
        check: {
          q: "Compared with clonidine, guanfacine is…",
          options: ["More α2A-selective and less sedating", "Less selective and more sedating", "A stimulant"],
          answer: "More α2A-selective and less sedating",
          why: "Greater α2A selectivity means comparatively less sedation/hypotension."
        }
      },
      {
        title: "Sedation & rebound",
        teach: "Expect somnolence, fatigue, hypotension and bradycardia. Critically: never stop abruptly — abrupt discontinuation causes rebound hypertension. Taper it.",
        check: {
          q: "Why must guanfacine be tapered rather than stopped abruptly?",
          options: ["Rebound hypertension", "Serotonin syndrome", "Rebound psychosis"],
          answer: "Rebound hypertension",
          why: "Abrupt α2-agonist withdrawal triggers rebound hypertension."
        }
      },
      {
        title: "CYP3A4 dosing",
        teach: "Metabolized by CYP3A4: dose DOWN with strong inhibitors (ketoconazole) and UP with inducers (rifampin, carbamazepine). Don't crush the XR tablet.",
        check: {
          q: "A strong CYP3A4 inhibitor like ketoconazole means you should…",
          options: ["Reduce the guanfacine dose", "Increase the guanfacine dose", "No change needed"],
          answer: "Reduce the guanfacine dose",
          why: "Inhibiting 3A4 raises guanfacine levels, so lower the dose."
        }
      }
    ],
    trap: "Guanfacine (α2A-selective, longer-acting, less sedating) vs clonidine (less selective, more sedating, more rebound HTN). 'Less sedating' is relative — it still sedates and lowers BP.",
    takeaway: "Guanfacine XR = non-stimulant α2A-selective agonist for ADHD; less sedating than clonidine, CYP3A4-dosed, and must be tapered to avoid rebound hypertension."
  },

  clonidine: {
    hook: "The most sedating α2 agonist — handy for ADHD with tics or sleep, but a classic lethal toddler ingestion.",
    steps: [
      {
        title: "What it is",
        teach: "Clonidine is a central α2-adrenergic AGONIST (less α2A-selective than guanfacine) that lowers central sympathetic outflow. In ADHD it's used especially with tics, aggression/impulsivity, or sleep-onset insomnia.",
        check: {
          q: "Clonidine's mechanism?",
          options: ["Central α2-adrenergic agonist", "Dopamine reuptake blocker", "Selective NET inhibitor"],
          answer: "Central α2-adrenergic agonist",
          why: "It's a central α2 agonist reducing sympathetic outflow — non-stimulant."
        }
      },
      {
        title: "Most sedating niche",
        teach: "Less α2-selective and MORE sedating than guanfacine, so it's favoured for sleep-onset insomnia and tics — often dosed at bedtime. In ADHD its use is largely off-label.",
        check: {
          q: "Why is clonidine often chosen for a child with ADHD and sleep-onset insomnia?",
          options: ["It's more sedating and dosed at bedtime", "It's a stimulant that improves sleep", "It has no effect on sleep"],
          answer: "It's more sedating and dosed at bedtime",
          why: "Its greater sedation is leveraged for sleep-onset problems."
        }
      },
      {
        title: "Rebound & taper",
        teach: "Rebound hypertension on abrupt withdrawal is MORE marked than with guanfacine (worse if the patient is on a beta-blocker) — always taper. Watch for bradycardia, hypotension and AV block.",
        check: {
          q: "Compared with guanfacine, clonidine's rebound hypertension is…",
          options: ["More marked — taper carefully", "Milder and safe to stop abruptly", "Nonexistent"],
          answer: "More marked — taper carefully",
          why: "Clonidine causes more pronounced rebound hypertension; never stop abruptly."
        }
      },
      {
        title: "Pediatric overdose",
        teach: "A classic lethal pediatric ingestion: CNS/respiratory depression, bradycardia and miosis can mimic opioid toxicity. Store safely.",
        check: {
          q: "A toddler with CNS depression, bradycardia and miosis after a home ingestion — which drug fits?",
          options: ["Clonidine", "Methylphenidate", "Atomoxetine"],
          answer: "Clonidine",
          why: "Clonidine overdose mimics opioid toxidrome — a dangerous pediatric ingestion."
        }
      }
    ],
    trap: "Clonidine vs clozapine vs clonazepam — sound-alikes, entirely different drugs. And clonidine ≠ guanfacine (clonidine is less selective, more sedating, more rebound HTN, shorter-acting).",
    takeaway: "Clonidine = the most sedating, less-selective α2 agonist; useful for ADHD with tics/sleep, must be tapered (marked rebound HTN), and dangerous in pediatric overdose."
  }
};
