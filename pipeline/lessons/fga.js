// First-generation (typical) antipsychotics — Duolingo-style micro-lessons.
// Class theme: potent D2 blockade drives antipsychotic effect PLUS the class toxicities —
// EPS (dystonia / akathisia / parkinsonism / tardive dyskinesia), hyperprolactinemia, NMS, QT.
// HIGH-potency (haloperidol, fluphenazine, pimozide, trifluoperazine) = more EPS, less sedation;
// LOW-potency (chlorpromazine, methotrimeprazine) = more sedation / anticholinergic / orthostasis.
// Every fact is grounded in data/deck.json for these molecule ids.

export default {
  haloperidol: {
    hook: "The prototype high-potency FGA: maximal EPS, minimal sedation — and an IV form that puts you on telemetry.",
    steps: [
      {
        title: "What it is",
        teach: "Haloperidol is a high-potency butyrophenone and a potent D2 antagonist: mesolimbic blockade is antipsychotic, nigrostriatal blockade causes EPS, tuberoinfundibular blockade raises prolactin.",
        check: { q: "Haloperidol's core mechanism?", options: ["Potent D2 receptor antagonism", "Serotonin reuptake blockade", "MAO inhibition"], answer: "Potent D2 receptor antagonism", why: "It is a potent post-synaptic D2 blocker across dopamine pathways." }
      },
      {
        title: "High-potency signature",
        teach: "Very high D2 affinity with minimal H1/M1 blockade means little sedation or anticholinergic effect — so extrapyramidal symptoms dominate the side-effect picture.",
        check: { q: "Why does haloperidol cause lots of EPS but little sedation?", options: ["High D2, low H1/M1 affinity", "Low D2, high H1/M1 affinity", "It blocks only serotonin"], answer: "High D2, low H1/M1 affinity", why: "The clean off-target profile lets EPS predominate." }
      },
      {
        title: "Acute dystonia",
        teach: "Hours after IM haloperidol a young patient can develop torticollis or an oculogyric crisis — acute dystonia. Treat with IM benztropine or diphenhydramine.",
        check: { q: "Oculogyric crisis after IM haloperidol — treatment?", options: ["IM benztropine or diphenhydramine", "IV beta-blocker", "Oral SSRI"], answer: "IM benztropine or diphenhydramine", why: "Anticholinergics rapidly reverse acute dystonia." }
      },
      {
        title: "IV = QT risk",
        teach: "IV haloperidol carries dose-dependent QT prolongation and torsades risk — the highest-risk route — so QT/ECG monitoring is mandatory and many hospitals restrict IV use.",
        check: { q: "Which haloperidol route most demands ECG monitoring for QT?", options: ["Intravenous", "Oral tablet", "None — QT is not a concern"], answer: "Intravenous", why: "IV haloperidol has the greatest torsades risk." }
      },
      {
        title: "Decanoate depot",
        teach: "Haloperidol decanoate is a long-acting injectable given roughly every 4 weeks — a workhorse for non-adherence; overlap oral dosing until steady state.",
        check: { q: "Typical haloperidol decanoate dosing interval?", options: ["About every 4 weeks", "Every day", "Every 6 months"], answer: "About every 4 weeks", why: "The decanoate LAI is dosed roughly monthly." }
      }
    ],
    trap: "Haloperidol vs droperidol — droperidol is the short-acting butyrophenone cousin for agitation/antiemesis with the prominent QT warning.",
    takeaway: "Haloperidol = the high-potency FGA benchmark: most EPS, least sedation, IV form is the QT worry, decanoate LAI for adherence."
  },

  chlorpromazine: {
    hook: "The prototype low-potency FGA: sedating, hypotensive, anticholinergic — and the one that turns skin blue-grey in the sun.",
    steps: [
      {
        title: "What it is",
        teach: "Chlorpromazine is a low-potency aliphatic phenothiazine — a D2 antagonist with broad off-target blockade of H1, M1, α1 and 5-HT2 receptors.",
        check: { q: "Chlorpromazine's receptor profile?", options: ["D2 plus broad H1/M1/α1 blockade", "Selective D2 only", "Pure serotonin agonist"], answer: "D2 plus broad H1/M1/α1 blockade", why: "The wide off-target blockade defines the low-potency profile." }
      },
      {
        title: "Low-potency signature",
        teach: "Strong H1 (sedation), M1 (anticholinergic) and α1 (orthostatic hypotension) blockade dominate — while EPS are comparatively LESS than with high-potency agents.",
        check: { q: "Compared to haloperidol, chlorpromazine causes…", options: ["More sedation/orthostasis, less EPS", "More EPS, less sedation", "Identical side effects"], answer: "More sedation/orthostasis, less EPS", why: "Low-potency agents trade EPS for autonomic/sedating effects." }
      },
      {
        title: "Photosensitivity",
        teach: "Photosensitivity is classic — counsel sun protection; long-term high doses can cause blue-grey skin discoloration and lens/corneal deposits.",
        check: { q: "Classic dermatologic effect of chlorpromazine?", options: ["Photosensitivity / blue-grey skin", "Vitiligo", "Acne fulminans"], answer: "Photosensitivity / blue-grey skin", why: "Sun sensitivity and blue-grey pigmentation are signature." }
      },
      {
        title: "Distinctive hazards",
        teach: "Watch for cholestatic jaundice, a lowered seizure threshold and (rarely) agranulocytosis — distinctive phenothiazine dangers.",
        check: { q: "Which is a distinctive chlorpromazine hazard?", options: ["Cholestatic jaundice", "Pulmonary fibrosis", "Osteoporosis"], answer: "Cholestatic jaundice", why: "Cholestatic jaundice and a lowered seizure threshold are phenothiazine hazards." }
      }
    ],
    trap: "Chlorpromazine (low-potency, sedating) vs trifluoperazine/fluphenazine (high-potency piperazine phenothiazines, EPS-heavy) — same family, opposite profiles.",
    takeaway: "Chlorpromazine = the low-potency FGA benchmark: sedating, hypotensive, anticholinergic, photosensitizing, less EPS but more autonomic burden."
  },

  loxapine: {
    hook: "Mid-potency FGA with a party trick: an inhaled form for acute agitation — just mind the bronchospasm.",
    steps: [
      {
        title: "What it is",
        teach: "Loxapine is a mid-potency dibenzoxazepine (structurally related to clozapine): a D2 antagonist with 5-HT2A blockade and intermediate sedation/anticholinergic burden.",
        check: { q: "Where does loxapine sit on the potency spectrum?", options: ["Mid-potency (between low and high)", "The most potent FGA", "It is an SGA"], answer: "Mid-potency (between low and high)", why: "It carries intermediate sedation and EPS burden." }
      },
      {
        title: "Inhaled form",
        teach: "Its exam angle is the INHALED formulation — a single 10 mg dose for rapid control of acute agitation, given only in a supervised clinical setting.",
        check: { q: "What is loxapine's distinctive route for acute agitation?", options: ["Inhaled single dose", "Transdermal patch", "Rectal suppository"], answer: "Inhaled single dose", why: "Inhaled loxapine gives fast, single-dose agitation control." }
      },
      {
        title: "Bronchospasm caveat",
        teach: "Inhaled loxapine can cause bronchospasm — it is contraindicated in asthma/COPD, and a rescue bronchodilator must be available.",
        check: { q: "Key contraindication for INHALED loxapine?", options: ["Asthma/COPD (bronchospasm)", "Renal failure", "Hypertension"], answer: "Asthma/COPD (bronchospasm)", why: "Bronchospasm risk rules out reactive airway disease." }
      }
    ],
    trap: "Loxapine (FGA dibenzoxazepine) vs clozapine (SGA dibenzodiazepine, agranulocytosis) — similar skeleton, very different class and risk.",
    takeaway: "Loxapine = mid-potency FGA whose signature is the inhaled formulation for rapid agitation control, with a bronchospasm contraindication."
  },

  perphenazine: {
    hook: "The CATIE first-generation antipsychotic that quietly matched the newer SGAs — and challenged 'newer = better.'",
    steps: [
      {
        title: "What it is",
        teach: "Perphenazine is a mid-potency piperazine phenothiazine and D2 antagonist — sitting between chlorpromazine and haloperidol with a balanced side-effect profile.",
        check: { q: "Perphenazine's potency class?", options: ["Mid-potency phenothiazine", "Low-potency, very sedating", "A butyrophenone"], answer: "Mid-potency phenothiazine", why: "It has moderate EPS and moderate autonomic effects." }
      },
      {
        title: "The CATIE benchmark",
        teach: "In the CATIE trial this mid-potency FGA was roughly as effective as several SGAs and highly cost-effective — challenging the assumption that newer means better.",
        check: { q: "Why is perphenazine famous in trial history?", options: ["It matched SGAs in CATIE", "It was the first clozapine", "It cured tardive dyskinesia"], answer: "It matched SGAs in CATIE", why: "CATIE showed comparable effectiveness and cost-effectiveness." }
      },
      {
        title: "CYP2D6 metabolism",
        teach: "Perphenazine is metabolized mainly by CYP2D6 — inhibitors like paroxetine, fluoxetine or bupropion raise its levels.",
        check: { q: "Which enzyme mainly clears perphenazine?", options: ["CYP2D6", "CYP1A2", "It is renally cleared unchanged"], answer: "CYP2D6", why: "2D6 inhibitors raise perphenazine levels." }
      }
    ],
    trap: "Perphenazine is combined with amitriptyline in older fixed-dose products — don't mistake that combo for monotherapy.",
    takeaway: "Perphenazine = the balanced mid-potency phenothiazine and CATIE FGA benchmark; CYP2D6-metabolized."
  },

  fluphenazine: {
    hook: "The phenothiazine that behaves like haloperidol — EPS-heavy, low-sedation, with a shorter-interval decanoate depot.",
    steps: [
      {
        title: "What it is",
        teach: "Fluphenazine is a high-potency piperazine phenothiazine and potent D2 antagonist; low H1/M1 blockade means little sedation and an EPS-predominant profile like haloperidol.",
        check: { q: "Fluphenazine's side-effect profile most resembles…", options: ["Haloperidol (EPS-heavy, low sedation)", "Chlorpromazine (sedating, hypotensive)", "An SSRI"], answer: "Haloperidol (EPS-heavy, low sedation)", why: "High potency with low H1/M1 makes EPS dominate." }
      },
      {
        title: "Decanoate interval",
        teach: "Fluphenazine decanoate is a long-acting injectable dosed every 2–3 weeks — a shorter interval than haloperidol decanoate's roughly 4 weeks.",
        check: { q: "How does fluphenazine decanoate's interval compare to haloperidol decanoate?", options: ["Shorter (q2–3 wk vs q4 wk)", "Longer (q8 wk)", "Identical"], answer: "Shorter (q2–3 wk vs q4 wk)", why: "Fluphenazine decanoate is dosed roughly every 2–3 weeks." }
      },
      {
        title: "Dose to limit EPS",
        teach: "Because EPS scale with dose, use the lowest effective dose — its blockade is potent and sedation won't blunt the extrapyramidal effects.",
        check: { q: "Best strategy to limit fluphenazine's EPS?", options: ["Lowest effective dose", "Add an anticholinergic to every patient", "Maximize the dose"], answer: "Lowest effective dose", why: "EPS are dose-dependent, so minimize the dose." }
      }
    ],
    trap: "Fluphenazine (high-potency antipsychotic) vs fluoxetine and fluvoxamine (SSRIs) — all 'flu-', different classes.",
    takeaway: "Fluphenazine = high-potency phenothiazine, EPS-heavy and low-sedation, with a shorter-interval (q2–3 wk) decanoate depot."
  },

  zuclopenthixol: {
    hook: "The Canadian thioxanthene with three esters — including Acuphase, one shot covering ~2–3 days of acute psychosis.",
    steps: [
      {
        title: "What it is",
        teach: "Zuclopenthixol is a thioxanthene (Canada/Europe; not marketed in the US) that antagonizes D1 and D2 receptors; α1/H1 blockade makes it somewhat sedating for a higher-potency agent.",
        check: { q: "Zuclopenthixol belongs to which chemical class?", options: ["Thioxanthene", "Butyrophenone", "Dibenzodiazepine"], answer: "Thioxanthene", why: "It is a D1/D2-blocking thioxanthene." }
      },
      {
        title: "Acuphase (acetate)",
        teach: "The acetate ester (Acuphase) is a short-acting IM that covers about 72 hours of acute disturbance — bridging management, NOT a maintenance depot.",
        check: { q: "What is zuclopenthixol acetate (Acuphase) used for?", options: ["Short-term acute agitation (~2–3 days)", "Lifelong maintenance", "Oral daily dosing"], answer: "Short-term acute agitation (~2–3 days)", why: "Acuphase bridges an acute episode, not maintenance." }
      },
      {
        title: "Three forms",
        teach: "Know the trio: oral tablets, acetate (Acuphase, acute), and decanoate depot (maintenance, roughly every 2–4 weeks).",
        check: { q: "Which zuclopenthixol form is the maintenance depot?", options: ["Decanoate", "Acetate (Acuphase)", "Oral tablet"], answer: "Decanoate", why: "The decanoate ester is the long-acting maintenance depot." }
      }
    ],
    trap: "Zuclopenthixol ACETATE (Acuphase, short-acting) vs DECANOATE (maintenance depot) — same molecule, opposite purposes.",
    takeaway: "Zuclopenthixol = Canadian thioxanthene with a unique short-acting acetate (Acuphase) for acute psychosis plus oral and decanoate depot forms."
  },

  flupenthixol: {
    hook: "Zuclopenthixol's Canadian sibling — oral plus depot, with a low-dose activating/antidepressant quirk.",
    steps: [
      {
        title: "What it is",
        teach: "Flupenthixol is a Canadian thioxanthene (Canada/Europe; not in the US) that antagonizes D1 and D2 receptors, available as an oral form and a decanoate depot dosed every 2–3 weeks.",
        check: { q: "Flupenthixol is available in Canada as…", options: ["Oral plus decanoate depot", "Inhaled only", "IV infusion only"], answer: "Oral plus decanoate depot", why: "It comes as an oral form and a maintenance decanoate depot." }
      },
      {
        title: "Low-dose quirk",
        teach: "Distinctively, LOW-dose flupenthixol can be activating and mildly antidepressant, whereas higher doses are antipsychotic.",
        check: { q: "What is unusual about LOW-dose flupenthixol?", options: ["Activating / mildly antidepressant", "Deeply sedating", "It becomes an SSRI"], answer: "Activating / mildly antidepressant", why: "Low doses are described as activating/antidepressant." }
      },
      {
        title: "vs zuclopenthixol",
        teach: "Only its sibling zuclopenthixol adds the short-acting Acuphase acetate; flupenthixol is oral plus depot only.",
        check: { q: "Which sibling has the short-acting Acuphase form?", options: ["Zuclopenthixol", "Flupenthixol", "Both equally"], answer: "Zuclopenthixol", why: "Flupenthixol lacks the acetate; only zuclopenthixol has Acuphase." }
      }
    ],
    trap: "Flupenthixol vs zuclopenthixol — both Canadian thioxanthene depots; only zuclopenthixol has the short-acting acetate (Acuphase).",
    takeaway: "Flupenthixol = Canadian thioxanthene (oral + decanoate depot) with a low-dose activating/antidepressant quirk; no acetate form."
  },

  pimozide: {
    hook: "The QT champion of the FGAs — a Tourette-niche drug where the ECG, not the symptom, sets the dose.",
    steps: [
      {
        title: "What it is",
        teach: "Pimozide is a diphenylbutylpiperidine — a potent, selective D2 antagonist that also blocks cardiac calcium channels, driving QT prolongation.",
        check: { q: "Besides D2 blockade, what does pimozide do to the heart?", options: ["Blocks cardiac calcium channels → QT prolongation", "Speeds AV conduction", "Nothing cardiac"], answer: "Blocks cardiac calcium channels → QT prolongation", why: "Cardiac calcium-channel blockade drives its QT risk." }
      },
      {
        title: "QT / torsades",
        teach: "Its defining feature is marked, dose-dependent QT prolongation with torsades and reported sudden death — dosing is ECG-driven with slow titration.",
        check: { q: "What guides pimozide dose titration?", options: ["ECG / QT surveillance", "Body temperature", "Serum sodium"], answer: "ECG / QT surveillance", why: "Dose-dependent QT risk makes ECG monitoring mandatory." }
      },
      {
        title: "CYP3A4 traps",
        teach: "CYP3A4-dependent metabolism makes macrolides (clarithromycin/erythromycin), azole antifungals, protease inhibitors and grapefruit juice CONTRAINDICATED — they raise levels and QT.",
        check: { q: "Which is contraindicated with pimozide?", options: ["Clarithromycin (CYP3A4 inhibitor)", "Acetaminophen", "Normal saline"], answer: "Clarithromycin (CYP3A4 inhibitor)", why: "Strong CYP3A4 inhibitors raise pimozide levels and QT risk." }
      },
      {
        title: "Tourette niche",
        teach: "Its main indication is Tourette syndrome refractory to other agents — a narrow niche, not a first-line antipsychotic.",
        check: { q: "Pimozide's niche indication?", options: ["Refractory Tourette syndrome", "First-line depression", "Insomnia"], answer: "Refractory Tourette syndrome", why: "It is reserved for Tourette's when other agents fail." }
      }
    ],
    trap: "Pimozide vs primidone (an anticonvulsant) — similar names, unrelated drugs.",
    takeaway: "Pimozide = the highest-QT FGA with the most restrictive CYP3A4 interaction list; ECG-driven dosing and a refractory-Tourette niche."
  },

  methotrimeprazine: {
    hook: "The Canadian low-potency phenothiazine that pulls triple duty in palliative care: sedation, analgesia and antiemesis.",
    steps: [
      {
        title: "What it is",
        teach: "Methotrimeprazine (levomepromazine) is a low-potency phenothiazine: a D2 antagonist with broad H1/M1/α1/5-HT2 blockade plus intrinsic analgesic and antiemetic activity.",
        check: { q: "What is unusual about methotrimeprazine among antipsychotics?", options: ["It has intrinsic analgesic + antiemetic activity", "It is a selective D2 blocker", "It is a stimulant"], answer: "It has intrinsic analgesic + antiemetic activity", why: "Genuine analgesia and antiemesis extend its use beyond psychosis." }
      },
      {
        title: "Palliative workhorse",
        teach: "It is a palliative-care workhorse — often given subcutaneously for terminal agitation, intractable nausea and pain.",
        check: { q: "Where does methotrimeprazine shine clinically?", options: ["Palliative care (agitation, nausea, pain)", "Acute mania first-line", "ADHD"], answer: "Palliative care (agitation, nausea, pain)", why: "Its combined sedation/analgesia/antiemesis suits palliative use." }
      },
      {
        title: "Dose-limiting effects",
        teach: "Marked orthostatic hypotension and profound sedation are dose-limiting; EPS are comparatively mild because it is low-potency.",
        check: { q: "Main dose-limiting effects of methotrimeprazine?", options: ["Orthostatic hypotension and sedation", "Severe EPS", "Agranulocytosis in everyone"], answer: "Orthostatic hypotension and sedation", why: "Low-potency profile means autonomic/sedating effects limit dosing." }
      }
    ],
    trap: "Methotrimeprazine (levomepromazine, a phenothiazine) vs methotrexate — sound-alike, entirely different drugs.",
    takeaway: "Methotrimeprazine = Canadian low-potency phenothiazine prized in palliative care for combined sedation, analgesia and antiemesis; heavy orthostasis, mild EPS."
  },

  trifluoperazine: {
    hook: "The phenothiazine that behaves like haloperidol — proof that potency, not chemistry, predicts side effects.",
    steps: [
      {
        title: "What it is",
        teach: "Trifluoperazine is a high-potency piperazine phenothiazine and potent D2 antagonist; low H1/M1 blockade makes it EPS-predominant with little sedation.",
        check: { q: "Trifluoperazine's potency and profile?", options: ["High-potency, EPS-predominant", "Low-potency, sedating", "Non-dopaminergic"], answer: "High-potency, EPS-predominant", why: "High D2 with low H1/M1 gives an EPS-heavy, low-sedation profile." }
      },
      {
        title: "Potency vs chemistry",
        teach: "It shares the phenothiazine family with chlorpromazine yet has the opposite profile — potency, not chemical class, predicts the side-effect pattern.",
        check: { q: "Same phenothiazine family, opposite profiles — what explains the difference?", options: ["Potency (high vs low)", "Route of administration", "Molecular weight"], answer: "Potency (high vs low)", why: "High- vs low-potency, not chemistry, sets EPS vs sedation." }
      },
      {
        title: "Clinical fit",
        teach: "Its EPS-heavy, minimal-sedation profile resembles haloperidol and fluphenazine; older low-dose use for severe anxiety is now uncommon.",
        check: { q: "Trifluoperazine's side-effect profile most resembles…", options: ["Haloperidol / fluphenazine", "Chlorpromazine", "A benzodiazepine"], answer: "Haloperidol / fluphenazine", why: "As a high-potency agent it mirrors haloperidol and fluphenazine." }
      }
    ],
    trap: "Trifluoperazine (high-potency, EPS-heavy) vs chlorpromazine (low-potency, sedating) — same phenothiazine class, opposite side-effect profiles.",
    takeaway: "Trifluoperazine = the high-potency phenothiazine that behaves like haloperidol: EPS-predominant, minimal sedation."
  },

  prochlorperazine: {
    hook: "'Just an antiemetic' — until a single dose gives a young woman an oculogyric crisis.",
    steps: [
      {
        title: "What it is",
        teach: "Prochlorperazine is a piperazine phenothiazine used mainly as an ANTIEMETIC / anti-vertigo agent, blocking D2 at the chemoreceptor trigger zone more than treating psychosis.",
        check: { q: "Prochlorperazine's main clinical use?", options: ["Antiemetic / anti-vertigo", "Maintenance antipsychotic", "Antidepressant"], answer: "Antiemetic / anti-vertigo", why: "It is primarily a dopamine-blocking antiemetic." }
      },
      {
        title: "Acute dystonia",
        teach: "Acute dystonia can occur even after a single antiemetic dose — classically in young women — and is treated with an anticholinergic (benztropine) or diphenhydramine.",
        check: { q: "Neck spasm and eye-rolling after IV prochlorperazine — treatment?", options: ["Benztropine or diphenhydramine", "IV fluids alone", "A beta-blocker"], answer: "Benztropine or diphenhydramine", why: "Anticholinergics reverse acute dystonia." }
      },
      {
        title: "Antiemetics have EPS too",
        teach: "It is a reminder that dopamine-blocking antiemetics (also metoclopramide) carry EPS and tardive-dyskinesia risk despite the 'just an antiemetic' framing.",
        check: { q: "Which other antiemetic shares this EPS/TD risk?", options: ["Metoclopramide", "Ondansetron", "Loperamide"], answer: "Metoclopramide", why: "Metoclopramide is another dopamine-blocking antiemetic with EPS/TD risk." }
      }
    ],
    trap: "Prochlorperazine (antiemetic phenothiazine) vs chlorpromazine (antipsychotic) vs perphenazine — easily confused '-perazine/-promazine' names.",
    takeaway: "Prochlorperazine = a dopamine-blocking phenothiazine used mainly for nausea/vertigo; the catch is acute dystonia from even a single dose."
  },

  pipotiazine: {
    hook: "The Canadian FGA depot with the odd ester out — a palmitate, not a decanoate, dosed about monthly.",
    steps: [
      {
        title: "What it is",
        teach: "Pipotiazine (pipotiazine palmitate) is a Canada-specific piperidine phenothiazine and D2 antagonist used essentially only as a maintenance long-acting injectable.",
        check: { q: "How is pipotiazine used?", options: ["As a maintenance depot injectable", "As an inhaled agent", "As a daily oral first-line drug"], answer: "As a maintenance depot injectable", why: "It exists essentially only as a maintenance LAI." }
      },
      {
        title: "Palmitate LAI",
        teach: "It is the palmitate-ester depot (Piportil L4) dosed roughly every 4 weeks — the ester that distinguishes it from the more common decanoate depots.",
        check: { q: "Which ester makes pipotiazine unusual among FGA depots?", options: ["Palmitate (vs decanoate)", "Acetate", "Enanthate"], answer: "Palmitate (vs decanoate)", why: "Most FGA depots are decanoates; pipotiazine is a palmitate." }
      },
      {
        title: "Depot-only caution",
        teach: "Because depot effects can't be quickly withdrawn, establish tolerability first before committing to the long-acting injectable.",
        check: { q: "Why establish tolerability before a pipotiazine depot?", options: ["Depot effects can't be quickly reversed", "It is inhaled", "It has no side effects"], answer: "Depot effects can't be quickly reversed", why: "Long-acting release means adverse effects persist." }
      }
    ],
    trap: "Pipotiazine PALMITATE vs the DECANOATE depots (haloperidol/fluphenazine/thioxanthenes) — different ester, similar monthly-ish depot concept.",
    takeaway: "Pipotiazine = Canadian phenothiazine notable as a palmitate-ester LAI dosed about every 4 weeks (the ester exception among FGA depots)."
  },

  droperidol: {
    hook: "Haloperidol's short-acting cousin — fast for agitation and PONV, but a torsades warning even at antiemetic doses.",
    steps: [
      {
        title: "What it is",
        teach: "Droperidol is a butyrophenone (haloperidol's short-acting cousin, half-life ~2 h) and potent D2 antagonist used for acute agitation and as an antiemetic for postoperative nausea/vomiting.",
        check: { q: "Droperidol is chemically most like…", options: ["Haloperidol (butyrophenone)", "Chlorpromazine (phenothiazine)", "Clozapine (SGA)"], answer: "Haloperidol (butyrophenone)", why: "It is a butyrophenone — haloperidol's short-acting cousin." }
      },
      {
        title: "QT / torsades warning",
        teach: "It carries a boxed warning for QT prolongation and torsades — reported even at low antiemetic doses and sometimes fatal — so obtain a baseline ECG and correct potassium/magnesium.",
        check: { q: "Droperidol's boxed-warning safety concern?", options: ["QT prolongation / torsades", "Agranulocytosis", "Hepatic failure"], answer: "QT prolongation / torsades", why: "Its boxed warning is QT prolongation and torsades, even at low doses." }
      },
      {
        title: "Short half-life",
        teach: "A short ~2 hour half-life makes droperidol useful for rapid, titratable control of agitation or nausea.",
        check: { q: "What does droperidol's ~2 h half-life allow?", options: ["Rapid, titratable control", "Once-monthly dosing", "Slow depot release"], answer: "Rapid, titratable control", why: "The short half-life supports fast, adjustable dosing." }
      }
    ],
    trap: "Droperidol vs haloperidol — same butyrophenone family; droperidol is the short-acting agitation/antiemetic agent with the QT warning.",
    takeaway: "Droperidol = short-acting butyrophenone for agitation and PONV; QT prolongation/torsades (even at low doses) is the dominant caution."
  }
};
