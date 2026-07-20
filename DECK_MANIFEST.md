# DECK_MANIFEST.md

The deck's coverage: class → drug list, with per-drug coverage status. Target **~120–130
molecules**. Formulations (IR / XR / ODT / liquid / IM / LAI depot / patch + strengths) are a
**field on the card, not a separate card**.

**The Health Canada DPD query finalises the exact in-scope set and Canadian availability.**
Molecules the DPD shows as *not* Health Canada–approved but that a resident should know are
**kept and flagged `US-only — for awareness`**.

**Status legend:** `planned` → in the target set, not yet extracted · `extracted` → pulled
from sources into `data/deck.js` · `qa` → passed the clinical-QA cross-check · `us-only` →
kept for awareness, flagged in-app.

_Last updated: M4 — full deck generated (120 molecules, all extracted end-to-end from the
live sources and schema-validated). See [data/PROVENANCE.md](data/PROVENANCE.md) for per-field
source grounding. The per-drug status tables below list the original targets; the generated
deck is the source of truth._

---

## Antidepressants (~30)

### SSRIs
| Generic | Canadian brand(s) | Status |
|---|---|---|
| fluoxetine | Prozac | planned |
| sertraline | Zoloft | planned |
| paroxetine | Paxil | planned |
| citalopram | Celexa | planned |
| escitalopram | Cipralex | planned |
| fluvoxamine | Luvox | planned |

### SNRIs
| Generic | Canadian brand(s) | Status |
|---|---|---|
| venlafaxine | Effexor XR | planned |
| desvenlafaxine | Pristiq | planned |
| duloxetine | Cymbalta | planned |
| levomilnacipran | Fetzima | planned |

### NDRI / atypicals
| Generic | Canadian brand(s) | Status |
|---|---|---|
| bupropion | Wellbutrin XL / Zyban | planned |
| mirtazapine | Remeron | planned |
| trazodone | Desyrel | planned |
| vortioxetine | Trintellix | planned |

### TCAs
| Generic | Canadian brand(s) | Status |
|---|---|---|
| amitriptyline | Elavil | planned |
| nortriptyline | Aventyl | planned |
| imipramine | Tofranil | planned |
| desipramine | Norpramin | planned |
| clomipramine | Anafranil | planned |
| doxepin | Sinequan | planned |
| trimipramine | Surmontil | planned |

### MAOIs / RIMA
| Generic | Canadian brand(s) | Status |
|---|---|---|
| phenelzine | Nardil | planned |
| tranylcypromine | Parnate | planned |
| moclobemide | Manerix | planned (Canada-specific RIMA) |
| selegiline | (patch US-only; PO Canada) | planned |

### Novel
| Generic | Canadian brand(s) | Status |
|---|---|---|
| esketamine | Spravato | planned |

## Antipsychotics (~28)

### First-generation (FGA)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| haloperidol | Haldol | planned |
| chlorpromazine | Largactil | planned |
| loxapine | Loxapac | planned |
| perphenazine | Trilafon | planned |
| fluphenazine | Modecate (LAI) | planned |
| zuclopenthixol | Clopixol | planned (Canada-specific) |
| flupenthixol | Fluanxol | planned (Canada-specific) |
| pimozide | Orap | planned |
| methotrimeprazine | Nozinan | planned (Canada-specific) |

### Second-generation (SGA)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| risperidone | Risperdal / Consta (LAI) | planned |
| paliperidone | Invega / Sustenna / Trinza (LAI) | planned |
| olanzapine | Zyprexa | planned |
| quetiapine | Seroquel / XR | planned |
| clozapine | Clozaril | planned (high difficulty prior) |
| ziprasidone | Zeldox | planned |
| aripiprazole | Abilify / Maintena (LAI) | planned |
| asenapine | Saphris | planned |
| lurasidone | Latuda | planned |
| brexpiprazole | Rexulti | planned |
| cariprazine | Vraylar | planned |

### US-only — for awareness
| Generic | Note | Status |
|---|---|---|
| lumateperone | Caplyta — verify HC status at build | us-only |
| xanomeline-trospium | KarXT / Cobenfy — verify HC status | us-only |
| zuranolone | Zurzuvae — verify HC status | us-only |

## Mood stabilizers (~8)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| lithium | Carbolith / Lithane | planned (high difficulty prior; therapeutic level) |
| valproate / divalproex | Epival / Depakene | planned (therapeutic level) |
| carbamazepine | Tegretol | planned (therapeutic level) |
| lamotrigine | Lamictal | planned (high difficulty prior) |
| oxcarbazepine | Trileptal | planned |
| gabapentin | Neurontin | planned |
| pregabalin | Lyrica | planned |
| topiramate | Topamax | planned |

## Anxiolytics / sedative-hypnotics (~17)

### Benzodiazepines (Targeted Substances in Canada)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| lorazepam | Ativan | planned |
| clonazepam | Rivotril | planned |
| diazepam | Valium | planned |
| alprazolam | Xanax | planned |
| oxazepam | Serax | planned |
| temazepam | Restoril | planned |
| chlordiazepoxide | Librium | planned |
| midazolam | Versed | planned |

### Z-drugs & other
| Generic | Canadian brand(s) | Status |
|---|---|---|
| zopiclone | Imovane | planned (the Canadian Z-drug standard) |
| zolpidem | Sublinox | planned |
| buspirone | Buspar | planned |
| hydroxyzine | Atarax | planned |

### Orexin antagonists / melatonergic
| Generic | Canadian brand(s) | Status |
|---|---|---|
| lemborexant | Dayvigo | planned |
| daridorexant | Quviviq | planned |
| melatonin | (OTC) | planned |
| ramelteon | Rozerem — verify HC status | us-only |

## ADHD (~8)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| methylphenidate | Ritalin / Concerta / Biphentin | planned (controlled) |
| dextroamphetamine | Dexedrine | planned (controlled) |
| lisdexamfetamine | Vyvanse | planned (controlled) |
| mixed amphetamine salts | Adderall XR | planned (controlled) |
| atomoxetine | Strattera | planned |
| guanfacine XR | Intuniv XR | planned |
| clonidine | Catapres | planned |

## Substance use (~9)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| methadone | Metadol | planned (controlled) |
| buprenorphine | Butrans / Belbuca | planned |
| buprenorphine/naloxone | Suboxone | planned |
| naltrexone | ReVia | planned |
| acamprosate | Campral | planned |
| disulfiram | Antabuse | planned |
| varenicline | Champix | planned |
| naloxone | Narcan | planned |

## Dementia (~5)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| donepezil | Aricept | planned |
| rivastigmine | Exelon (patch) | planned |
| galantamine | Reminyl ER | planned |
| memantine | Ebixa | planned |

## Adjuncts (~6)
| Generic | Canadian brand(s) | Status |
|---|---|---|
| benztropine | Cogentin | planned |
| procyclidine | Kemadrin | planned |
| propranolol | Inderal | planned |
| prazosin | Minipress | planned |
| modafinil | Alertec | planned |
| armodafinil | Nuvigil — verify HC status | planned |

---

## Coverage roll-up

| Class | In deck | Extracted | Validated |
|---|---:|---:|---:|
| Antidepressant | 31 | 31 | 31 |
| Antipsychotic | 27 | 27 | 27 |
| Mood stabilizer | 8 | 8 | 8 |
| Anxiolytic / hypnotic | 23 | 23 | 23 |
| ADHD | 7 | 7 | 7 |
| Substance use | 8 | 8 | 8 |
| Dementia | 4 | 4 | 4 |
| Adjunct | 12 | 12 | 12 |
| **Total** | **120** | **120** | **120** |

All 120 molecules were extracted end-to-end from the live sources (Health Canada DPD +
openFDA label/FAERS + DailyMed + CANMAT) and pass schema + provenance validation. 84% of
populated safety-critical field values are source-grounded; the remainder are model-authored
and flagged `verifyFlag` in-app (fully itemised in [data/PROVENANCE.md](data/PROVENANCE.md)).
10 US-only agents are kept for awareness and flagged.
