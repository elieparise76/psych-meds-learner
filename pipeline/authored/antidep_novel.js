// authored/antidep_novel.js — authored overlay for the novel/rapid-acting antidepressants.
//
// Mechanism/PK/dosing summaries + the pedagogical layer, grounded in established
// pharmacology and the fetched openFDA/monograph label sections. `_prov` declares which
// safety-critical fields the label text grounds; build.js attaches that source text and,
// where a field cannot be grounded, downgrades it to origin 'authored' + verifyFlag.
//
// Group theme: RAPID-ONSET antidepressants that break the classic ~2–6 wk monoaminergic
// lag. Two mechanistic families: (1) glutamatergic NMDA-receptor antagonism (esketamine);
// (2) GABA-A positive allosteric modulation by neuroactive steroids (zuranolone oral,
// brexanolone IV). Shared exam themes: supervised/monitored administration, sedation ±
// dissociation, additive risk with CNS depressants. zuranolone + brexanolone are US-only
// (for awareness) — the pipeline flags Canadian availability itself.

const GROUP_PROV = {
  startingDose: 'openfda', maxDose: 'openfda', seriousAE: 'openfda', syndromes: 'openfda',
  majorDDI: 'openfda', contraindicatedCombos: 'openfda', pregnancy: 'openfda',
  overdoseLethality: 'openfda',
};

export default {
  esketamine: {
    pronunciation: 'ess-KET-uh-meen',
    moa: 'Non-competitive NMDA-glutamate receptor antagonist (S-enantiomer of ketamine). NMDA blockade on GABAergic interneurons disinhibits a glutamate surge → AMPA-receptor activation and rapid synaptogenesis (BDNF/mTOR signalling), producing a fast antidepressant effect.',
    receptorProfile: 'NMDA-receptor antagonist (higher NMDA affinity than R-ketamine); downstream AMPA/BDNF/mTOR signalling.',
    onsetOfEffect: 'Rapid — antidepressant and anti-suicidal effect within hours to ~24 h, versus 2–6 wk for classic monoaminergic antidepressants. The defining selling point.',
    halfLife: 'Terminal ~7–12 h (biphasic; rapid initial decline over 2–4 h). Active metabolite noresketamine terminal ~8 h.',
    metabolism: 'Hepatic CYP2B6 and CYP3A4 (minor CYP2C9/2C19) → noresketamine (active). Not a clinically important CYP inhibitor.',
    activeMetabolites: 'Noresketamine (active; lower potency than parent).',
    elimination: 'Metabolites excreted predominantly in urine; <1% unchanged.',
    foodEffect: 'Intranasal; avoid food for ~2 h and liquids for ~30 min before dosing to limit nausea/vomiting.',
    approvedCanada: ['Treatment-resistant major depressive disorder (with an oral antidepressant)', 'MDD with acute suicidal ideation or behaviour (with an oral antidepressant)'],
    approvedPopulations: 'Adults; always used in conjunction with a newly initiated or ongoing oral antidepressant.',
    startingDose: 'Intranasal. Day 1: 56 mg. Induction (wk 1–4): 56–84 mg twice weekly (MDSI: 84 mg twice weekly). Each device = 28 mg; wait 5 min between devices.',
    maxDose: '84 mg per treatment session.',
    frequencyTiming: 'Twice weekly (induction) → weekly → every 1–2 weeks (maintenance). Self-administered under direct clinician supervision.',
    administrationNotes: 'Dispensed and given only in a certified healthcare setting under a REMS-type program — never for home use. Monitor ≥2 h after each dose (sedation, dissociation, BP). No driving until the next day after restful sleep.',
    commonSE: ['Dissociation', 'Dizziness', 'Nausea/vomiting', 'Sedation', 'Vertigo', 'Increased blood pressure', 'Headache', 'Dysgeusia (bad taste)', 'Nasal discomfort'],
    seriousAE: ['Sedation', 'Dissociation / perceptual disturbances', 'Transient blood-pressure elevation', 'Respiratory depression (esp. with CNS depressants)', 'Abuse/misuse potential', 'Suicidal thoughts/behaviour (monitor)'],
    syndromes: ['Dissociation', 'Sedation', 'Acute transient hypertension', 'Cystitis / lower-urinary-tract symptoms (chronic ketamine use)'],
    overdoseLethality: 'Limited nasal-route data; principal acute risks are excessive sedation/airway compromise and marked BP rise, amplified by other CNS depressants. Supervised administration mitigates risk.',
    baselineWorkup: ['Baseline blood pressure (defer dosing if uncontrolled hypertension; caution with aneurysmal vascular disease / AVM / prior intracerebral haemorrhage)', 'Screen for substance-use / abuse potential'],
    ongoingMonitoring: 'Assess BP before dosing, ~40 min after, then as clinically indicated; observe ≥2 h for sedation/dissociation; monitor mood and suicidality.',
    majorDDI: ['CNS depressants (benzodiazepines, opioids, alcohol) — additive sedation / respiratory depression', 'Psychostimulants (amphetamines, methylphenidate, modafinil) — additive BP increase', 'MAOIs — additive BP increase', 'Other blood-pressure-raising agents'],
    pregnancy: 'Not recommended; may cause fetal harm (ketamine class — neurodevelopmental / animal-toxicity concerns). Consider the pregnancy exposure registry.',
    lactation: 'Ketamine is present in human milk; breastfeeding not recommended during treatment.',
    cardiac: 'Transient BP surge peaks ~40 min post-dose; caution with cardiovascular / cerebrovascular disease.',
    pearls: [
      'Rapid onset (hours–1 day) is the whole point — a sharp contrast with the 2–6 wk lag of SSRIs/SNRIs; used for treatment-resistant depression and MDD with acute suicidality.',
      'Must be given in-clinic under a REMS-type program with ≥2 h monitoring for sedation, dissociation and BP rise — never dispensed for home use.',
      'Intranasal S-enantiomer of ketamine; a controlled substance with abuse potential — always paired with an oral antidepressant.',
    ],
    mnemonics: ['"Spravato = the four S": Supervised, Sedation, dISSociation, Systolic BP↑ — the monitoring themes.'],
    confusables: [
      'Esketamine (intranasal, S-enantiomer, NMDA antagonist) vs racemic ketamine IV (off-label, anaesthetic origin).',
      'Esketamine vs escitalopram — similar "es-" prefix, entirely different drug and class.',
    ],
    classDifferentiators: 'The only glutamatergic (NMDA-antagonist) antidepressant here — rapid-acting, dissociative, controlled, requiring supervised in-clinic dosing, unlike oral monoaminergic agents.',
    examHooks: [
      'Which antidepressant works within hours and requires ≥2 h in-clinic monitoring for dissociation/sedation/BP? (esketamine)',
      'Mechanism of esketamine? (NMDA-receptor antagonist → glutamate/AMPA/BDNF surge)',
    ],
    counsellingPoints: [
      'You will stay in the clinic for at least 2 hours after each dose.',
      'Do not eat for ~2 hours or drink for ~30 minutes before dosing (reduces nausea).',
      'You cannot drive until the next day, after a full night’s sleep.',
      'Keep taking your oral antidepressant — this is added on top of it.',
    ],
    vignettes: [
      {
        stem: 'A 43-year-old with treatment-resistant MDD (three adequate antidepressant trials failed) receives his first intranasal esketamine dose augmenting his oral antidepressant. Forty minutes later he feels "detached from his body" and his BP is 168/98. What does this represent?',
        options: ['Expected transient dissociation and BP rise — continue in-clinic monitoring', 'Serotonin syndrome', 'Hypertensive emergency requiring IV labetalol', 'Anaphylaxis'],
        answer: 'Expected transient dissociation and BP rise — continue in-clinic monitoring',
        explanation: 'Dissociation and a transient BP rise peaking ~40 min are known, self-limited esketamine effects; they are managed by observation (≥2 h) rather than emergency treatment unless severe or sustained. This supervised monitoring is exactly why esketamine is REMS-restricted.',
        testedFact: 'Esketamine dissociation + transient BP rise are expected, monitored effects',
        source: { name: 'openFDA/DailyMed Spravato label — warnings (dissociation, blood pressure)', origin: 'openfda' },
      },
      {
        stem: 'A patient with MDD and acute suicidal ideation needs an antidepressant that reduces symptoms within 24 hours rather than weeks. Which agent’s mechanism explains this rapid effect?',
        options: ['Sertraline — SERT blockade', 'Esketamine — NMDA-receptor antagonism', 'Bupropion — NDRI', 'Mirtazapine — α2 / 5-HT2 antagonism'],
        answer: 'Esketamine — NMDA-receptor antagonism',
        explanation: 'Esketamine antagonises NMDA receptors, triggering a rapid glutamate/AMPA/BDNF/mTOR cascade and synaptogenesis, giving benefit within hours to a day — unlike monoaminergic antidepressants, which take 2–6 weeks.',
        testedFact: 'Rapid onset of esketamine vs weeks for monoaminergic antidepressants',
        source: { name: 'openFDA/DailyMed Spravato label — indications / mechanism', origin: 'openfda' },
      },
    ],
    _prov: GROUP_PROV,
  },

  zuranolone: {
    pronunciation: 'zoo-RAN-oh-lone',
    moa: 'Oral neuroactive steroid; positive allosteric modulator of synaptic and extrasynaptic GABA-A receptors → enhances GABAergic inhibitory tone. A synthetic analogue of allopregnanolone.',
    receptorProfile: 'GABA-A positive allosteric modulator (both δ-subunit extrasynaptic and synaptic receptors).',
    onsetOfEffect: 'Rapid — depressive symptoms improve as early as day 3 within a finite 14-day course, contrasting with the weeks-long lag of classic antidepressants.',
    halfLife: '~16–24 h (terminal ~19.7–24.6 h).',
    metabolism: 'Hepatic, primarily CYP3A4 → inactive metabolites.',
    foodEffect: 'Take with a fat-containing meal — food substantially increases absorption.',
    approvedPopulations: 'Adults with postpartum depression (US FDA). NOT approved for major depressive disorder.',
    startingDose: '50 mg orally once daily in the evening with fat-containing food, for 14 days. Reduce to 40 mg for CNS-depressant effects, strong/moderate CYP3A4 inhibitors, or hepatic/renal impairment.',
    maxDose: '50 mg/day (as a 14-day course).',
    frequencyTiming: 'Once daily in the evening × 14 days — a complete 2-week course, not chronic daily therapy.',
    administrationNotes: 'Full 14-day course; a repeat course may be given if symptoms recur. Do not drive or operate machinery for ≥12 h after each dose (CNS depression).',
    commonSE: ['Somnolence / sedation', 'Dizziness', 'Diarrhea', 'Fatigue', 'Nasopharyngitis', 'Urinary tract infection'],
    seriousAE: ['Sedation / somnolence and CNS depression', 'Driving impairment', 'Suicidal thoughts / behaviour (monitor)'],
    syndromes: ['Sedation / CNS depression', 'Driving impairment'],
    ongoingMonitoring: 'Monitor for excessive sedation and suicidality; counsel on the driving restriction; ensure effective contraception during and just after the course.',
    majorDDI: ['CNS depressants (benzodiazepines, opioids, alcohol) — additive sedation', 'Strong/moderate CYP3A4 inhibitors — ↑ zuranolone (reduce dose to 40 mg)', 'Strong CYP3A4 inducers — avoid (reduced efficacy)'],
    pregnancy: 'May cause fetal harm; use effective contraception during treatment and for 1 week after the 14-day course.',
    lactation: 'Present in milk in low amounts; data limited — weigh benefit against risk (untreated postpartum depression is itself harmful).',
    pearls: [
      'Rapid-acting (benefit by ~day 3) ORAL neurosteroid given as a finite 14-day course — unlike open-ended daily SSRIs; specifically for postpartum depression.',
      'US-only — for awareness. Zurzuvae is FDA-approved for postpartum depression but NOT for MDD (the MDD application received a complete response letter); not marketed in Canada.',
      'Take in the evening with fatty food; no driving for ≥12 h afterward (sedation).',
    ],
    mnemonics: ['"Zuranolone = Zzz for 2 weeks" — evening dosing, sedation, 14-day postpartum course.'],
    confusables: [
      'Zuranolone (oral, 14-day home course) vs brexanolone (60-h IV infusion) — same GABA-A neurosteroid mechanism, opposite delivery.',
      'Zuranolone vs zolpidem/zonisamide — unrelated "z" drugs.',
    ],
    classDifferentiators: 'Oral, self-administered, time-limited neurosteroid for PPD — the practical outpatient counterpart to IV brexanolone.',
    examHooks: [
      'First ORAL drug approved for postpartum depression, given as a 14-day course? (zuranolone)',
      'Mechanism shared by brexanolone and zuranolone? (GABA-A positive allosteric modulation / neuroactive steroid)',
    ],
    counsellingPoints: [
      'Take once each evening with fatty food for 14 days.',
      'Do not drive or operate machinery for at least 12 hours after each dose.',
      'Use reliable contraception during the course and for 1 week after.',
      'This is a 2-week course, not an ongoing daily pill.',
    ],
    vignettes: [
      {
        stem: 'A 29-year-old woman, 5 weeks postpartum, has severe postpartum depression and asks about a rapid, short-course oral option available in the US. Which agent and mechanism best fits?',
        options: ['Zuranolone — oral GABA-A positive allosteric modulator (14-day course)', 'Brexanolone — 60-hour IV infusion', 'Esketamine — intranasal NMDA antagonist', 'Sertraline — SSRI'],
        answer: 'Zuranolone — oral GABA-A positive allosteric modulator (14-day course)',
        explanation: 'Zuranolone is the first oral neuroactive steroid (GABA-A PAM) FDA-approved for postpartum depression, given as a rapid-acting 14-day course. Brexanolone is IV, esketamine targets TRD / MDD with suicidality, and sertraline acts over weeks.',
        testedFact: 'Zuranolone = first oral 14-day neurosteroid for postpartum depression',
        source: { name: 'ZURZUVAE (zuranolone) US prescribing information', origin: 'monograph' },
      },
    ],
    _prov: GROUP_PROV,
  },

  brexanolone: {
    pronunciation: 'breks-AN-oh-lone',
    moa: 'IV formulation of allopregnanolone (an endogenous progesterone metabolite); positive allosteric modulator of synaptic and extrasynaptic GABA-A receptors → restores GABAergic inhibitory tone thought to fall abruptly after delivery.',
    receptorProfile: 'GABA-A positive allosteric modulator (synaptic + extrasynaptic δ-subunit receptors).',
    onsetOfEffect: 'Rapid — depressive symptoms improve during and by the end of the 60-h infusion, with benefit sustained to day 30; far faster than oral antidepressants.',
    halfLife: '~9 hours.',
    metabolism: 'Non-CYP: keto-reduction (AKRs), glucuronidation (UGTs) and sulfation (SULTs) → inactive metabolites. Low CYP-interaction potential.',
    elimination: 'Inactive metabolites excreted in feces and urine.',
    approvedPopulations: 'Adults with postpartum depression (US FDA).',
    startingDose: 'Continuous IV infusion over 60 h, weight-based titration: 0–4 h 30 µg/kg/h → 4–24 h 60 → 24–52 h 90 (or 60 if 90 not tolerated) → 52–56 h 60 → 56–60 h 30.',
    maxDose: '90 µg/kg/h (target maintenance infusion rate).',
    frequencyTiming: 'A single 60-hour continuous infusion (one course), in a certified healthcare setting.',
    administrationNotes: 'Available ONLY through the Zulresso REMS because of excessive sedation / sudden loss of consciousness risk. Continuous pulse-oximetry; patient must be accompanied when caring for her child; interrupt the infusion for excessive sedation or hypoxia.',
    commonSE: ['Sedation / somnolence', 'Dizziness', 'Dry mouth', 'Flushing / hot flush', 'Headache', 'Loss of consciousness (excessive sedation)'],
    seriousAE: ['Excessive sedation', 'Sudden loss of consciousness', 'Hypoxia'],
    syndromes: ['Excessive sedation / loss of consciousness', 'CNS depression'],
    baselineWorkup: ['Ensure continuous pulse-oximetry is in place; review concomitant CNS depressants before starting'],
    ongoingMonitoring: 'Continuous pulse-oximetry throughout; assess for excessive sedation during non-sleep periods; interrupt or reduce the infusion for excessive sedation or hypoxia; monitor mood and suicidality.',
    majorDDI: ['CNS depressants (opioids, benzodiazepines, alcohol) — additive sedation and risk of loss of consciousness'],
    pregnancy: 'Limited data; used in the postpartum period. Weigh maternal benefit against risk.',
    lactation: 'Low transfer into milk (small relative infant dose); brief interruption around dosing may be considered.',
    pearls: [
      'Rapid-acting IV neurosteroid — antidepressant effect within the 60-h infusion vs weeks for SSRIs; the FIRST drug ever approved specifically for postpartum depression (2019).',
      'Boxed-warning-level risk: excessive sedation and sudden loss of consciousness → available only via a REMS with continuous pulse-oximetry monitoring in a certified setting.',
      'US-only — for awareness. The 60-h monitored-infusion logistics limited uptake; oral zuranolone is the practical successor.',
    ],
    mnemonics: ['"Brexanolone = 60 hours, IV, pass-out risk" — the infusion neurosteroid you must watch for sudden loss of consciousness.'],
    confusables: [
      'Brexanolone (IV, 60 h, inpatient) vs zuranolone (oral, 14-day home course) — same GABA-A neurosteroid class, opposite delivery.',
      'Brexanolone (synthetic allopregnanolone) vs brexpiprazole (an antipsychotic) — a classic name trap.',
    ],
    classDifferentiators: 'The inpatient IV neurosteroid: fastest and most intensive delivery, requiring continuous monitoring — contrasts with oral zuranolone and intranasal esketamine.',
    examHooks: [
      'Which postpartum-depression drug is a 60-hour IV infusion carrying a boxed warning for sudden loss of consciousness? (brexanolone)',
      'Which endogenous molecule does brexanolone replicate? (allopregnanolone)',
    ],
    counsellingPoints: [
      'This is a continuous 60-hour IV infusion given in a monitored setting.',
      'You will be watched continuously because of sedation and fainting risk.',
      'Tell staff immediately if you feel very drowsy or lightheaded.',
    ],
    vignettes: [
      {
        stem: 'A woman with severe postpartum depression is admitted for a 60-hour continuous IV infusion of brexanolone. Which monitoring does its REMS mandate because of the drug’s boxed warning?',
        options: ['Continuous pulse-oximetry for excessive sedation / loss of consciousness', 'Serial ECGs for QT prolongation', 'Hourly serum lithium levels', 'Continuous EEG'],
        answer: 'Continuous pulse-oximetry for excessive sedation / loss of consciousness',
        explanation: 'Brexanolone can cause excessive sedation and sudden loss of consciousness; the Zulresso REMS mandates continuous monitoring (pulse-oximetry) and interruption of the infusion if these occur. QT/lithium/EEG monitoring are not the relevant risks.',
        testedFact: 'Brexanolone boxed warning → REMS with continuous pulse-oximetry',
        source: { name: 'openFDA/DailyMed Zulresso label — boxed warning / REMS', origin: 'openfda' },
      },
    ],
    _prov: GROUP_PROV,
  },
};
