export interface FeatureStep {
  step: number;
  title: { it: string; en: string };
  description: { it: string; en: string };
}

export interface FeatureFAQ {
  question: { it: string; en: string };
  answer: { it: string; en: string };
}

export interface FeatureSpoke {
  slug: string;
  themeId: string;
  videoId: string; // Maps to videoList in src/pages/manifesto/videoData.ts
  h1: { it: string; en: string };
  uspTagline: { it: string; en: string };
  metaTitle: { it: string; en: string };
  metaDescription: { it: string; en: string };
  primaryKeyword: string;
  problemStory: { it: string[]; en: string[] };
  blindSpot: { it: string[]; en: string[] };
  howWeDoIt: FeatureStep[];
  whatYouGet: {
    title: { it: string; en: string };
    items: { it: string; en: string }[];
  };
  proofData: {
    metric: string;
    label: { it: string; en: string };
    sourceTimestamp: string;
  };
  whatWeDoNotPromise: { it: string[]; en: string[] };
  faqs: FeatureFAQ[];
  relatedSpokes: string[];
}

export interface FeatureThemeHub {
  id: string; // URL theme slug e.g. 'dati-affidabili'
  title: { it: string; en: string };
  tagline: { it: string; en: string };
  metaTitle: { it: string; en: string };
  metaDescription: { it: string; en: string };
  primaryKeyword: string;
  intro: { it: string; en: string };
  symptoms: {
    text: { it: string; en: string };
    spokeSlug: string;
  }[];
  spokes: FeatureSpoke[];
  adjacentThemes: string[];
  videoOverviewId: string;
  faqs: FeatureFAQ[];
}

export const FEATURE_THEMES: Record<string, FeatureThemeHub> = {
  'dati-affidabili': {
    id: 'dati-affidabili',
    title: {
      it: 'Dati Affidabili & Riconciliazione Tracciamento',
      en: 'Reliable Data & Tracking Reconciliation'
    },
    tagline: {
      it: 'I tuoi dati di marketing sono corretti? Verifichiamo la misura prima di giudicare le campagne.',
      en: 'Are your marketing numbers correct? We audit measurement integrity before judging performance.'
    },
    metaTitle: {
      it: 'Dati Affidabili e Audit Tracciamento GA4 & Ads | Internet Valore',
      en: 'Reliable Data & GA4 Tracking Audit | Internet Valore'
    },
    metaDescription: {
      it: 'Audit tracciamento conversioni, riconciliazione ordini Shopify vs GA4 e allarmi precoci. Non spegnere campagne sane per un contatore rotto.',
      en: 'Conversion tracking audit, Shopify vs GA4 order reconciliation and automated anomaly alarms. Stop pausing profitable ads due to broken pixels.'
    },
    primaryKeyword: 'audit tracciamento conversioni ga4',
    intro: {
      it: 'Quando le conversioni calano, il panico spinge le aziende a tagliare i budget pubblicitari o a cambiare agenzia. Ma in oltre il 60% dei casi non è crollata la domanda di mercato: si è semplicemente rotto il contatore. masterAnalyzer verifica la coerenza algebrica del dato prima di toccare una sola campagna.',
      en: 'When reported conversions drop, panic leads businesses to slash ad spend or fire agencies. Yet in over 60% of cases, real customer demand never dropped: the tracking tag simply broke. masterAnalyzer verifies mathematical data consistency before touching active campaigns.'
    },
    videoOverviewId: 'Wxs7oweKq6k',
    symptoms: [
      {
        text: {
          it: 'Le conversioni nel pannello Ads sono crollate improvvisamente a zero ma i click e le sessioni continuano regolarmente.',
          en: 'Ad conversions suddenly plunged to zero while clicks and sessions remain completely steady.'
        },
        spokeSlug: 'tracciamento-rotto-allarmi'
      },
      {
        text: {
          it: 'A fine mese il fatturato del gestionale (Shopify / Woo) non corrisponde a quello registrato su Google Analytics 4.',
          en: 'At month-end, backend store revenue (Shopify / Woo) diverges drastically from GA4 numbers.'
        },
        spokeSlug: 'ordini-non-tracciati-analytics'
      },
      {
        text: {
          it: 'Google Ads attribuisce a sé stesso lo stesso ordine che Meta Ads reclama nel proprio pannello.',
          en: 'Google Ads claims the exact same conversion that Meta Ads also takes credit for in its dashboard.'
        },
        spokeSlug: 'discrepanza-google-ads-vs-analytics'
      },
      {
        text: {
          it: 'Il report mostra conversioni gonfiate da micro-eventi che non hanno portato alcun euro effettivo in cassa.',
          en: 'Reports display inflated conversions fueled by vanity micro-actions that generated zero actual revenue.'
        },
        spokeSlug: 'conversioni-gonfiate-difendibili'
      }
    ],
    adjacentThemes: ['profitto-reale'],
    faqs: [
      {
        question: {
          it: 'Perché i dati di Google Ads e GA4 non coincidono quasi mai?',
          en: 'Why do Google Ads and GA4 numbers almost never match?'
        },
        answer: {
          it: 'Google Ads utilizza un modello di attribuzione basato sull\'interazione con l\'annuncio (spesso con finestre di 30 giorni e modellazione algoritmica), mentre GA4 registra sessioni ed eventi cross-channel. masterAnalyzer incrocia le API di entrambe le piattaforme e riconcilia le discrepanze con il gestionale reale.',
          en: 'Google Ads applies ad-interaction attribution with modeling over 30-day windows, whereas GA4 records cross-channel sessions. masterAnalyzer cross-references APIs and reconciles variances against verified store transactions.'
        }
      },
      {
        question: {
          it: 'Quanto tempo occorre per diagnosticare un tracciamento rotto?',
          en: 'How long does it take to diagnose broken tracking?'
        },
        answer: {
          it: 'I nostri tool automatizzati di preflight eseguono la diagnosi in pochi minuti, confrontando le transazioni registrate su Shopify o CRM con i payload inviati ai server di tracciamento.',
          en: 'Our automated preflight tools perform diagnostics within minutes, matching Shopify/CRM logs directly against event payloads sent to tracking endpoints.'
        }
      }
    ],
    spokes: [
      {
        slug: 'tracciamento-rotto-allarmi',
        themeId: 'dati-affidabili',
        videoId: 'Wxs7oweKq6k',
        h1: {
          it: 'Audit Tracciamento Rotto & Allarmi Precoci: Si rompe il contatore, non il negozio',
          en: 'Broken Tracking Audit & Early Alarms: The Counter Breaks, Not The Store'
        },
        uspTagline: {
          it: 'Distinguiamo all\'istante il crollo delle vendite da un pixel disattivato, prima di spegnere campagne sane.',
          en: 'Instantly differentiating real revenue drops from broken pixels before pausing profitable ads.'
        },
        metaTitle: {
          it: 'Audit Tracciamento Conversioni & Pixel Rotto | Internet Valore',
          en: 'Conversion Tracking & Broken Tag Audit | Internet Valore'
        },
        metaDescription: {
          it: 'Le conversioni Google Ads sono a picco? Scopri se è crollato il negozio o se si è rotto il tag con l\'audit di masterAnalyzer. Allarmi sentinella h24.',
          en: 'Did Google Ads conversions drop? Determine whether real sales fell or tracking broke with masterAnalyzer tracking audit.'
        },
        primaryKeyword: 'audit tracciamento conversioni rotte',
        problemStory: {
          it: [
            'Lunedì mattina: apri la dashboard pubblicitaria e le conversioni registrate sono crollate. Scatta la riunione d\'urgenza, il responsabile marketing va nel panico e la prima proposta sul tavolo è tagliare i budget o spegnere i canali.',
            'In molti casi non è cambiato nulla nei comportamenti d\'acquisto: un aggiornamento al tema del sito, un plugin di cookie banner o un conflitto JavaScript hanno disattivato il tag. Il negozio continua a incassare, ma il sistema decisionale è diventato cieco.'
          ],
          en: [
            'Monday morning: you open your ad dashboard and reported conversions collapsed. An emergency meeting is called and the instinct is to slash budget or shut off campaigns.',
            'In reality, buying behavior never changed: a theme update, consent banner change, or script conflict muted the tag. Orders keep processing, but management is flying blind.'
          ]
        },
        blindSpot: {
          it: [
            'Le agenzie tradizionali si limitano a guardare le dashboard fornite da Google e Meta. Se il grafico scende, attribuiscono la colpa alla saturazione o chiedono più budget creativo.',
            'Nessuno controlla se i click a monte e i carrelli a gestionale continuano a reggere prima di toccare i bid.'
          ],
          en: [
            'Traditional agencies rely solely on native ad dashboards. When graphs dip, they blame market saturation or request extra creative budget.',
            'Nobody cross-verifies whether upstream clicks and backend cart additions hold steady before modifying bids.'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Scansione Tag & Payload', en: 'Tag & Payload Scan' },
            description: {
              it: 'masterAnalyzer esegue un test sintetico di checkout per verificare se i dati di transazione raggiungono i server GA4 e Google Ads.',
              en: 'masterAnalyzer runs a synthetic checkout test verifying transaction payloads reaching GA4 and Google Ads servers.'
            }
          },
          {
            step: 2,
            title: { it: 'Test di Coerenza Click vs Carrelli', en: 'Click vs Cart Ratio Validation' },
            description: {
              it: 'Se i click tengono e i carrelli a gestionale sono stabili mentre l\'evento di acquisto tace, il verdetto è categorico: guasto alla misura.',
              en: 'If ad clicks hold steady and cart creations are unchanged while purchase events flatline, the diagnosis is clear: broken tracking.'
            }
          },
          {
            step: 3,
            title: { it: 'Attivazione Sentinella Continua', en: 'Continuous Watchdog Activation' },
            description: {
              it: 'La Sentinella (modulo monitoraggio anomalie) rileva silenzi improvvisi entro 6 ore dall\'anomalia, inviando un alert prima che si bruci budget.',
              en: 'The Watchdog module flags sudden telemetry drops within 6 hours, alerting before budget is misallocated.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi con l\'Audit', en: 'Audit Deliverables' },
          items: {
            it: [
              'Diagnosi tecnica dello stato dei tag (GA4, Google Ads Enhanced Conversions, Meta CAPI).',
              'Report comparativo tra ordini reali a gestionale e conversioni registrate per identificare la data esatta della rottura.',
              'Piano d\'azione correttivo per ripristinare la raccolta senza toccare le campagne sane in corso.'
            ],
            en: [
              'Technical status report of tracking tags (GA4, Google Ads Enhanced Conversions, Meta CAPI).',
              'Comparative log between backend orders and tracked events pinpointing the exact breakage timestamp.',
              'Corrective action plan restoring instrumentation without destabilizing live campaigns.'
            ]
          }
        },
        proofData: {
          metric: '16.364',
          label: {
            it: 'funzioni di test automatiche a protezione dei moduli analitici',
            en: 'automated test functions guarding analytical modules'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo che riparare il tracciamento aumenti automaticamente il fatturato: riparare la misura ripristina la verità, non la domanda di mercato.',
            'Senza accessi storici ad almeno 28 giorni di dati, il sistema emette solo verdetti descrittivi.'
          ],
          en: [
            'We never claim fixing tracking magically generates extra revenue: it restores analytical truth, not consumer demand.',
            'Without at least 28 days of historical data, diagnostics remain strictly descriptive.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'Cosa succede se spengo una campagna mentre il tracciamento è rotto?',
              en: 'What happens if I pause a campaign while tracking is broken?'
            },
            answer: {
              it: 'Spegnendo una campagna che sta effettivamente vendendo (anche se non tracciata), resetti la cronologia dell\'algoritmo di Smart Bidding e perdi quote di mercato a favore dei competitor.',
              en: 'Pausing a campaign generating real sales (despite missed tracking) resets Smart Bidding history and cedes impression share to competitors.'
            }
          },
          {
            question: {
              it: 'Supportate anche il tracciamento Server-Side e le Enhanced Conversions?',
              en: 'Do you support Server-Side Tracking and Enhanced Conversions?'
            },
            answer: {
              it: 'Sì, masterAnalyzer verifica la corretta cifratura SHA256 dei dati utente per le conversioni avanzate di Google Ads e le API Conversions di Meta.',
              en: 'Yes, masterAnalyzer verifies SHA256 hash formatting for Google Ads Enhanced Conversions and Meta Conversions API.'
            }
          }
        ],
        relatedSpokes: ['ordini-non-tracciati-analytics', 'discrepanza-google-ads-vs-analytics', 'conversioni-gonfiate-difendibili']
      },
      {
        slug: 'ordini-non-tracciati-analytics',
        themeId: 'dati-affidabili',
        videoId: 'QDNf-Wi4-yQ',
        h1: {
          it: 'Riconciliazione Ordini Invisibili: Ritrovare le vendite che GA4 non vede',
          en: 'Invisible Orders Reconciliation: Recovering Sales GA4 Missed'
        },
        uspTagline: {
          it: 'Confrontiamo gli ordini reali del tuo gestionale con GA4 per calcolare la percentuale esatta di copertura.',
          en: 'Cross-referencing backend store orders with GA4 to isolate your exact tracking coverage ratio.'
        },
        metaTitle: {
          it: 'Ordini Non Tracciati GA4 vs Shopify | Riconciliazione Dati',
          en: 'Missing Orders GA4 vs Shopify | Data Reconciliation'
        },
        metaDescription: {
          it: 'Fino al 40% degli ordini e-commerce non compare su GA4. masterAnalyzer riconcilia carrello reale e ads per ottimizzare sul profitto effettivo.',
          en: 'Up to 40% of e-commerce orders go undetected in GA4. masterAnalyzer reconciles true store revenue with advertising channels.'
        },
        primaryKeyword: 'ordini non tracciati google analytics',
        problemStory: {
          it: [
            'Tra cookie banner rifiutati, browser con adblocker e restrizioni di tracciamento mobile, ogni e-commerce è parzialmente cieco. Una parte consistente delle transazioni non finisce mai nei report di Google Analytics.',
            'Il vero pericolo sorge quando si prendono decisioni di budget basandosi su un report che vede solo il 50% o il 60% della cassa: campagne altamente redditizie appaiono in perdita e vengono ingiustamente tagliate.'
          ],
          en: [
            'Between rejected consent banners, adblockers, and mobile browser restrictions, every e-commerce store is partially blind. A large share of transactions never enters GA4 reports.',
            'The true danger occurs when allocating budgets on data capturing only 50% of real volume: profitable ads look unprofitable and get cut.'
          ]
        },
        blindSpot: {
          it: [
            'I report mensili delle agenzie tradizionali calcolano il ROAS dividendo il fatturato registrato in piattaforma per la spesa, ignorando completamente il divario tra cassa effettiva e tracciamento.',
            'Nessuno calcola la metrica di "Copertura del Dato" (Backend Orders / GA4 Orders).'
          ],
          en: [
            'Standard agency reports calculate ROAS using in-platform tracked revenue, completely overlooking the gap between bank cash and analytics pixels.',
            'Nobody quantifies the "Data Coverage Ratio" (Backend Orders / GA4 Orders).'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Estrazione Ordini Backend', en: 'Backend Order Extraction' },
            description: {
              it: 'Importiamo gli ordini reali da Shopify, WooCommerce o ERP escludendo cancellazioni, resi e ordini di test.',
              en: 'We ingest verified orders from Shopify, WooCommerce, or ERP, filtering out test orders and returns.'
            }
          },
          {
            step: 2,
            title: { it: 'Riconciliazione Transazione per Transazione', en: '1:1 Transaction Matching' },
            description: {
              it: 'Il modulo Reconciler confronta ogni `transaction_id` contro gli eventi `purchase` di GA4 identificando le discrepanze sistematiche.',
              en: 'The Reconciler module matches every `transaction_id` against GA4 `purchase` events, exposing systemic gaps.'
            }
          },
          {
            step: 3,
            title: { it: 'Ricalcolo del Margine Reale (POAS)', en: 'POAS Net Margin Recalculation' },
            description: {
              it: 'Ricalcoliamo il ritorno sull\'investimento sul totale reale del carrello, fornendo il vero moltiplicatore di profitto.',
              en: 'We recompute campaign ROI based on true sales volume, surfacing real profit multipliers.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi', en: 'Deliverables' },
          items: {
            it: [
              'Tasso percentuale di copertura del tracciamento (es. 68% visibile vs 32% perso).',
              'Stima dell\'impatto sui ROAS dichiarati nelle campagne Google Ads e Meta Ads.',
              'Mappa delle discrepanze per browser e dispositivo (iOS vs Android, Safari vs Chrome).'
            ],
            en: [
              'Precise tracking coverage percentage (e.g. 68% captured vs 32% lost).',
              'Variance impact analysis on reported ROAS across Google Ads and Meta Ads.',
              'Discrepancy segmentation by device and browser (iOS vs Android, Safari vs Chrome).'
            ]
          }
        },
        proofData: {
          metric: '188',
          label: {
            it: 'tabelle SQL nello schema di persistenza analitica per riconciliazione dati',
            en: 'SQL tables in masterAnalyzer schema dedicated to data reconciliation'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo di recuperare il 100% degli ordini nel pixel di Google: le leggi sulla privacy impongono il rispetto del rifiuto dei cookie.',
            'La nostra riconciliazione opera a livello aggregato e deterministico senza violare il GDPR.'
          ],
          en: [
            'We do not promise 100% pixel capture: privacy legislation prohibits tracking users who decline consent.',
            'Our reconciliation is aggregate and deterministic, in full compliance with GDPR.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'Se GA4 perde ordini, l\'algoritmo di Google Ads ne risente?',
              en: 'If GA4 misses orders, is Google Ads bidding affected?'
            },
            answer: {
              it: 'Certamente. Lo Smart Bidding di Google ottimizza su ciò che vede. Se perde il 40% degli acquisti ad alto scontrino, ridurrà le offerte su segmenti che in realtà sono i più profittevoli.',
              en: 'Yes. Smart Bidding optimizes for observed signals. Losing high-AOV orders skews algorithms away from your most lucrative cohorts.'
            }
          },
          {
            question: {
              it: 'Come posso verificare da solo la discrepanza?',
              en: 'How can I verify this variance myself?'
            },
            answer: {
              it: 'Basta confrontare il numero totale di ordini su Shopify degli ultimi 30 giorni con gli eventi `purchase` in GA4: la differenza è il buco di tracciamento.',
              en: 'Simply compare the total order count in Shopify over the last 30 days against GA4 `purchase` events: the gap is your tracking loss.'
            }
          }
        ],
        relatedSpokes: ['tracciamento-rotto-allarmi', 'discrepanza-google-ads-vs-analytics', 'poas-profitto-sulla-spesa']
      },
      {
        slug: 'discrepanza-google-ads-vs-analytics',
        themeId: 'dati-affidabili',
        videoId: 'rA6njGfAANM',
        h1: {
          it: 'Google Ads vs GA4: L\'arbitro indipendente tra i numeri che non tornano',
          en: 'Google Ads vs GA4: The Independent Arbiter For Conflicting Numbers'
        },
        uspTagline: {
          it: 'Meta dice 100, Google dice 80, il conto ne registra 90. Mettiamo fine alla guerra dei pannelli.',
          en: 'Meta claims 100, Google claims 80, bank deposits show 90. We settle the dashboard dispute.'
        },
        metaTitle: {
          it: 'Differenza Conversioni Google Ads e GA4 | Arbitro masterAnalyzer',
          en: 'Google Ads vs GA4 Conversion Discrepancy | masterAnalyzer'
        },
        metaDescription: {
          it: 'Perché Google Ads conta più conversioni di GA4? Scopri l\'auto-attribuzione delle piattaforme adv e ottieni un numero pulito e difendibile in riunione.',
          en: 'Why does Google Ads report more conversions than GA4? Understand cross-channel overlap and get defensible metrics for decision making.'
        },
        primaryKeyword: 'differenza conversioni google ads ga4',
        problemStory: {
          it: [
            'A fine mese si ripete il solito paradosso: tre pannelli pubblicitari, tre verità opposte. Meta rivendica 100 vendite, Google Ads ne reclama 80, il carrello del sito ne conta 90 complessive e l\'agenzia seleziona la metrica che fa più bella figura in call.',
            'Ogni piattaforma applica le proprie finestre temporali di attribuzione e tenta di prendersi il merito della stessa transazione. Il risultato? Doppia spesa e decisioni strategiche prese su numeri gonfiati.'
          ],
          en: [
            'Month-end brings the classic dilemma: three ad dashboards, three contradictory realities. Meta claims 100 orders, Google claims 80, the store recorded 90 total, and the agency picks whichever metric looks prettiest.',
            'Every platform applies wide attribution windows claiming credit for the same sale, resulting in duplicated budgets and distorted ROI.'
          ]
        },
        blindSpot: {
          it: [
            'I report d\'agenzia standard sommano i ROAS dichiarati da ciascun canale pubblicitario senza deflazionare l\'overlap tra sorgenti.',
            'Nessuno testa se il merito della campagna regge al variare della finestra di attribuzione da 30 giorni a 1 giorno post-click.'
          ],
          en: [
            'Standard agency decks sum claimed ROAS figures without adjusting for multi-touch channel overlap.',
            'Nobody stress-tests whether campaign performance holds when collapsing attribution windows from 30 days to 1-day post-click.'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Allineamento Multi-Sorgente', en: 'Multi-Source Alignment' },
            description: {
              it: 'masterAnalyzer raccoglie i log temporali delle interazioni da Google Ads, Meta Ads e GA4 sullo stesso intervallo di calendario.',
              en: 'masterAnalyzer extracts timestamped logs across Google Ads, Meta Ads, and GA4 over identical calendar ranges.'
            }
          },
          {
            step: 2,
            title: { it: 'Calcolo Sovrapposizione (Overlap)', en: 'Overlap Calculation' },
            description: {
              it: 'Isoliamo le transazioni toccate da entrambi i canali per quantificare la percentuale di auto-incensamento delle piattaforme.',
              en: 'We isolate multi-touched orders to calculate the exact percentage of platform self-attribution.'
            }
          },
          {
            step: 3,
            title: { it: 'Verdetto Difendibile', en: 'Defensible Boardroom Verdict' },
            description: {
              it: 'Forniamo un unico numero depurato che riflette la cassa reale, dichiarando apertamente lo scarto non attribuibile.',
              en: 'We deliver a reconciled net figure reflecting cash flow, openly declaring non-attributable variance.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi', en: 'Deliverables' },
          items: {
            it: [
              'Matrice di sovrapposizione tra Google Ads e Meta Ads con tasso di cannibalizzazione incrociata.',
              'Sensibilità del rendimento al variare delle finestre di attribuzione (1d click, 7d click, 1d view).',
              'Numero netto difendibile per il bilancio e le riunioni di direzione.'
            ],
            en: [
              'Cross-channel overlap matrix between Google Ads and Meta Ads.',
              'Performance sensitivity analysis across attribution windows (1-day click, 7-day click, 1-day view).',
              'Single defensible net performance figure ready for board meetings.'
            ]
          }
        },
        proofData: {
          metric: '482',
          label: {
            it: 'tool specializzati integrati per interrogazione API di Google, Meta e Analytics',
            en: 'specialized tools integrated for Google, Meta, and Analytics API inspection'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo modelli di attribuzione magici che pretendono di sapere esattamente quale click da 0,30€ ha generato la vendita: l\'attribuzione perfetta non esiste.',
            'Laddove l\'incertezza è elevata, il nostro software dichiara l\'intervallo di confidenza invece di fingere precisione.'
          ],
          en: [
            'We do not sell magical attribution algorithms claiming exact truth on a €0.30 click: perfect multi-touch attribution is impossible.',
            'Where statistical noise is high, masterAnalyzer states confidence intervals rather than feigning precision.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'Perché Google Ads conta conversioni per visite avvenute giorni prima?',
              en: 'Why does Google Ads count conversions for visits days earlier?'
            },
            answer: {
              it: 'Per impostazione predefinita, Google Ads retrodata la conversione al giorno in cui è avvenuto il click sull\'annuncio, mentre GA4 registra la transazione nel giorno esatto dell\'acquisto.',
              en: 'By default, Google Ads backdates conversions to the day of ad impression/click, whereas GA4 timestamps when the purchase took place.'
            }
          },
          {
            question: {
              it: 'Dobbiamo fidarci di Google Ads o di GA4?',
              en: 'Should we trust Google Ads or GA4?'
            },
            answer: {
              it: 'Di nessuno dei due in via esclusiva. La verità sta nella riconciliazione tra gli ordini reali registrati a gestionale e l\'impatto causale delle campagne misurato con test dedicati.',
              en: 'Neither exclusively. Truth lies in reconciling backend transactions against measured incremental campaign lift.'
            }
          }
        ],
        relatedSpokes: ['tracciamento-rotto-allarmi', 'ordini-non-tracciati-analytics', 'conversioni-gonfiate-difendibili']
      },
      {
        slug: 'conversioni-gonfiate-difendibili',
        themeId: 'dati-affidabili',
        videoId: 'QvcrLhd3CPc', // V04: Numeri veri o niente
        h1: {
          it: 'Audit Conversioni Difendibili: Stop a conteggi gonfiati e micro-conversioni inutili',
          en: 'Defensible Conversions Audit: Eliminating Inflated Counts & Vanity Triggers'
        },
        uspTagline: {
          it: 'Contiamo solo le azioni che portano denaro reale in cassa. Filtriamo micro-eventi e lead fasulli.',
          en: 'Counting only business transactions generating real bank deposits. Filtering vanity triggers.'
        },
        metaTitle: {
          it: 'Conversioni Google Ads Gonfiate? | Audit Conteggio Difendibile',
          en: 'Inflated Google Ads Conversions? | Defensible Counting Audit'
        },
        metaDescription: {
          it: 'La tua agenzia festeggia centinaia di conversioni ma il conto langue? Scopri come masterAnalyzer epura click su numeri di telefono e bot dai report.',
          en: 'Is your agency celebrating hundreds of conversions while revenue stalls? Discover how masterAnalyzer purges vanity triggers and bot fills.'
        },
        primaryKeyword: 'conversioni google ads gonfiate',
        problemStory: {
          it: [
            'Il report dell\'agenzia indica "250 conversioni a 8€ ciascuna". L\'imprenditore esulta, poi apre il conto in banca e scopre che il fatturato è fermo.',
            'Cosa è successo? Dentro il conteggio sono stati inseriti click sul pulsante WhatsApp, visite alla pagina contatti o visualizzazioni di video. Lo Smart Bidding ha ottimizzato su azioni facili da compiere, consumando budget per intercettare utenti curiosi ma incapaci di acquistare.'
          ],
          en: [
            'The agency monthly report celebrates "250 conversions at €8 each". The business owner rejoices, then checks the bank account and sees revenue is flat.',
            'What happened? Conversion actions included phone clicks, page scrolls, or button hovers. Smart Bidding optimized for friction-free actions, burning budget on tyre-kickers.'
          ]
        },
        blindSpot: {
          it: [
            'Molti consulenti impostano micro-conversioni come obiettivo "Primario" per far sembrare le campagne attive e nascondere la difficoltà di generare vendite o lead qualificati.',
            'L\'algoritmo di Google Ads segue le istruzioni: se gli chiedi click sul form, ti porterà click sul form, anche se sono bot.'
          ],
          en: [
            'Agencies frequently set soft micro-actions as "Primary" conversion goals to artificially inflate campaign activity and mask sluggish actual sales.',
            'Google Smart Bidding follows directives strictly: bid for form clicks, and it hunts form clicks—even if they are bots.'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Audit Azioni Primarie vs Secondarie', en: 'Primary vs Secondary Goals Audit' },
            description: {
              it: 'Analizziamo ogni singola azione di conversione attiva nell\'account Google Ads separando i veri incassi dalle azioni di contorno.',
              en: 'We inspect every conversion goal registered in Google Ads, isolating real financial events from secondary interactions.'
            }
          },
          {
            step: 2,
            title: { it: 'De-duplica e Filtro Qualità', en: 'Deduplication & Quality Filter' },
            description: {
              it: 'Riconciliamo i contatti con il CRM o gli ordini con il gestionale per escludere conversioni doppie o non pagate.',
              en: 'We reconcile leads against CRM records or orders against gateway settlements, eliminating duplicate or unpaid fills.'
            }
          },
          {
            step: 3,
            title: { it: 'Ricalibrazione Smart Bidding', en: 'Smart Bidding Recalibration' },
            description: {
              it: 'Spostiamo le micro-azioni su "Solo Osservazione" (Secondarie), addestrando l\'algoritmo unicamente sul profitto effettivo.',
              en: 'We relegate soft actions to Secondary Observation, re-training machine learning exclusively on profitable revenue.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi', en: 'Deliverables' },
          items: {
            it: [
              'Mappa delle azioni di conversione classificate per difendibilità economica.',
              'Ricalcolo del CPA e ROAS reale epurato da micro-eventi gonfiati.',
              'Configurazione in staging delle nuove impostazioni di conversione pronte per l\'applicazione via API.'
            ],
            en: [
              'Classification audit of all conversion goals graded by financial defensibility.',
              'Recalculated true CPA and ROAS purged of vanity triggers.',
              'Staged configuration bundle ready for deployment via verified dry-run API.'
            ]
          }
        },
        proofData: {
          metric: '293',
          label: {
            it: 'playbook operativi codificati nel registro masterAnalyzer',
            en: 'operational playbooks encoded in masterAnalyzer registry'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo che il tuo CPA rimarrà apparentemente basso: ripulendo le conversioni fasulle, il CPA "sulla carta" salirà, ma il costo per ogni cliente reale diminuirà.',
            'L\'onestà analitica richiede di accettare numeri veri invece di report compiacenti.'
          ],
          en: [
            'We do not promise reported CPA will stay artificially cheap: purging junk conversions makes paper CPA rise while actual customer acquisition cost drops.',
            'Analytical integrity requires embracing true numbers over pleasing reports.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'Perché la mia agenzia ha impostato i click su WhatsApp come conversione primaria?',
              en: 'Why did my agency set WhatsApp clicks as a primary conversion?'
            },
            answer: {
              it: 'Spesso viene fatto per generare volume di dati e consentire allo Smart Bidding di uscire dalla fase di apprendimento, ma a lungo termine inquina i segnali di offerta con utenti non qualificati.',
              en: 'Often done to artificially feed conversion volume and push bidding out of learning phase, but long-term it pollutes signals with non-buyers.'
            }
          },
          {
            question: {
              it: 'Se cambio le conversioni primarie, l\'account perde lo storico?',
              en: 'If I reconfigure primary conversions, will my account lose historical learning?'
            },
            answer: {
              it: 'No, lo storico rimane nell\'account. Si attraversa una breve fase di transizione in cui l\'algoritmo apprende a cercare acquirenti reali anziché semplici cliccatori.',
              en: 'No, historical records remain intact. A short transition phase occurs as machine learning re-aligns toward real purchasers.'
            }
          }
        ],
        relatedSpokes: ['tracciamento-rotto-allarmi', 'discrepanza-google-ads-vs-analytics', 'poas-profitto-sulla-spesa']
      }
    ]
  },

  'profitto-reale': {
    id: 'profitto-reale',
    title: {
      it: 'Profitto Reale & Algoritmi POAS',
      en: 'Real Profit & POAS Optimization'
    },
    tagline: {
      it: 'Le tue campagne generano utile o solo fatturato lordo? Ottimizziamo sul margine netto.',
      en: 'Are your campaigns generating real margin or just gross turnover? We optimize on net profit.'
    },
    metaTitle: {
      it: 'Gestione Campagne sul Margine Reale (POAS) | Internet Valore',
      en: 'E-commerce Campaign Management on Real Profit (POAS) | Internet Valore'
    },
    metaDescription: {
      it: 'Basta rincorrere ROAS fittizi. masterAnalyzer ottimizza Google Ads e Meta sul POAS (Profit on Ad Spend) reale, eliminando la cannibalizzazione del brand.',
      en: 'Stop chasing vanity ROAS. masterAnalyzer optimizes campaigns strictly on real POAS (Profit on Ad Spend), eliminating brand search cannibalization.'
    },
    primaryKeyword: 'poas profit on ad spend ecommerce',
    intro: {
      it: 'Il fatturato è una metrica di vanità, il profitto è sanità mentale. Ottimizzare le campagne sul ROAS spinge gli algoritmi a vendere prodotti ad alto prezzo ma a margine zero. Internet Valore gestisce le tue campagne in outsourcing calcolando il costo del venduto (COGS), i resi e le spese di spedizione, puntando esclusivamente al POAS netto.',
      en: 'Revenue is vanity, profit is sanity. Optimizing on ROAS forces bidding algorithms to push high-ticket products carrying razor-thin margins. Internet Valore manages outsourced campaigns factoring in COGS, returns, and logistics to scale strictly on net POAS.'
    },
    videoOverviewId: 'f63mqaNu72Q',
    symptoms: [
      {
        text: {
          it: 'Le dashboard mostrano un ROAS 8x ma l\'utile netto dell\'azienda a fine mese continua a diminuire.',
          en: 'Dashboards boast an 8x ROAS while net bottom-line company profit continues to decline.'
        },
        spokeSlug: 'poas-profitto-sulla-spesa'
      },
      {
        text: {
          it: 'Fino al 35% del budget Google Ads viene speso su ricerche del tuo stesso nome brand dove sei già primo gratis.',
          en: 'Up to 35% of Google Ads budget is burned on branded search queries where you already hold the organic #1 spot.'
        },
        spokeSlug: 'campagne-brand-cannibalizzazione'
      },
      {
        text: {
          it: 'Vuoi una seconda opinione neutrale e oggettiva sull\'account gestito dall\'attuale fornitore.',
          en: 'You want an objective, neutral second opinion on the accounts managed by your incumbent agency.'
        },
        spokeSlug: 'audit-google-ads-indipendente'
      },
      {
        text: {
          it: 'A metà mese non hai idea di dove atterrerà la spesa pubblicitaria complessiva e quale sarà il ritorno atteso.',
          en: 'Mid-month arrives and you have zero visibility into where total ad spend will land or projected profit.'
        },
        spokeSlug: 'previsione-budget-fine-mese'
      }
    ],
    adjacentThemes: ['dati-affidabili'],
    faqs: [
      {
        question: {
          it: 'Qual è la differenza fondamentale tra ROAS e POAS?',
          en: 'What is the fundamental difference between ROAS and POAS?'
        },
        answer: {
          it: 'Il ROAS (Fatturato / Spesa Pubblicitaria) ignora se un prodotto ha il 10% o il 70% di margine. Il POAS (Margine Lordo - Spesa Pubblicitaria / Spesa Pubblicitaria) calcola l\'utile netto effettivo generato per ogni euro investito.',
          en: 'ROAS (Revenue / Ad Spend) ignores whether an SKU has a 10% or 70% margin. POAS (Gross Profit / Ad Spend) measures actual net earnings generated per advertising euro.'
        }
      },
      {
        question: {
          it: 'È possibile inviare i margini reali a Google Ads senza svelarli ai concorrenti?',
          en: 'Can we feed real profit margins to Google Ads without revealing them to competitors?'
        },
        answer: {
          it: 'Sì. masterAnalyzer calcola i margini in backend e invia a Google Ads il valore economico del profitto tramite conversion value adjustment via API protetta, senza esporre dati sensibili nel codice pubblico del sito.',
          en: 'Yes. masterAnalyzer computes margins server-side and pushes adjusted conversion values via secure API without exposing cost data in public frontend markup.'
        }
      }
    ],
    spokes: [
      {
        slug: 'poas-profitto-sulla-spesa',
        themeId: 'profitto-reale',
        videoId: 'f63mqaNu72Q', // V06: Il fatturato non paga le bollette
        h1: {
          it: 'POAS over ROAS: Ottimizzazione Campagne sul Margine Reale Netto',
          en: 'POAS over ROAS: Campaign Optimization on True Net Margin'
        },
        uspTagline: {
          it: 'Smettila di pagare commissioni su un fatturato che non ti lascia margine. Scaliamo solo ciò che genera utile.',
          en: 'Stop paying agency fees on revenue that leaves zero margin. We scale strictly profitable SKUs.'
        },
        metaTitle: {
          it: 'POAS Cos\'è e Come Calcolarlo | Gestione E-commerce sul Profitto',
          en: 'What is POAS & How to Calculate It | Profit-Driven E-commerce'
        },
        metaDescription: {
          it: 'Vendere non significa guadagnare. Scopri come masterAnalyzer integra il costo del venduto in Google Ads per ottimizzare sul POAS reale invece del ROAS fittizio.',
          en: 'Generating sales does not guarantee profit. Discover how masterAnalyzer feeds COGS into Google Ads to optimize for real POAS.'
        },
        primaryKeyword: 'poas cos è profit on ad spend',
        problemStory: {
          it: [
            'Due prodotti venduti nello stesso e-commerce: il Prodotto A costa 100€ e genera 10€ di margine; il Prodotto B costa 40€ ma ne genera 25€. Per un\'agenzia tradizionale che ragiona in ROAS, il Prodotto A è un successo strepitoso, perché gonfia il fatturato del report.',
            'Per l\'imprenditore, invece, vendere il Prodotto A significa lavorare gratis o addirittura in perdita dopo aver sottratto spedizioni, resi e commissioni pubblicitarie. Senza una misura del profitto reale, le campagne scalano proprio i prodotti che affossano i margini aziendali.'
          ],
          en: [
            'Consider two SKUs: Product A sells for €100 with €10 margin; Product B sells for €40 with €25 margin. To an agency thinking in ROAS, Product A is a triumph because it inflates top-line volume in monthly decks.',
            'For the business owner, scaling Product A means losing money after fulfillment and return costs. Without net margin feedback, campaigns pump products that bankrupt the business.'
          ]
        },
        blindSpot: {
          it: [
            'I pixel standard di Google e Facebook leggono solo il prezzo di vendita lordo. Non sanno quanto ti costa acquistare o produrre la merce.',
            'Le agenzie adorano il ROAS perché spesso calcolano le proprie fee variabili su percentuali di fatturato o spesa, disallineandosi dagli interessi dell\'imprenditore.'
          ],
          en: [
            'Native pixels only ingest top-line order totals. They have zero visibility into wholesale COGS or handling fees.',
            'Agencies prefer ROAS because variable management retainers frequently scale with gross ad spend, misaligning client and agency incentives.'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Mappatura Costo del Venduto (COGS)', en: 'COGS Integration' },
            description: {
              it: 'Colleghiamo il catalogo prodotti a masterAnalyzer importando il margine netto per singola referenza o categoria.',
              en: 'We connect product feeds into masterAnalyzer, importing net margins per SKU or product category.'
            }
          },
          {
            step: 2,
            title: { it: 'Iniezione Valore di Profitto via API', en: 'Profit-Value Injection via API' },
            description: {
              it: 'Invece di comunicare il fatturato lordo, inviamo a Google Ads il valore del margine netto effettivo come valore di conversione.',
              en: 'Instead of raw gross sales, we transmit net margin value to Google Ads as the target conversion value.'
            }
          },
          {
            step: 3,
            title: { it: 'Smart Bidding sul Margine', en: 'Smart Bidding on Net Margin' },
            description: {
              it: 'L\'algoritmo Target ROAS impara a cercare acquirenti ad alta marginalità invece di acquirenti cacciatori di sconti a basso utile.',
              en: 'Target ROAS bidding recalibrates to seek high-margin purchasers rather than unprofitable bargain hunters.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi', en: 'Deliverables' },
          items: {
            it: [
              'Dashboard del POAS netto reale per campagna, canale e categoria di prodotto.',
              'Identificazione dei prodotti "falsi campioni" (alto fatturato, perdita netta).',
              'Riorganizzazione delle campagne Shopping e Performance Max per fasce di margine reale.'
            ],
            en: [
              'Net POAS dashboard segmented by campaign, channel, and product category.',
              'Identification of "trojan horse" SKUs (high top-line volume, negative net margin).',
              'Restructuring of Shopping and PMax campaigns by margin tier.'
            ]
          }
        },
        proofData: {
          metric: '775.752',
          label: {
            it: 'righe di codice Python proprietario per calcolo algebrico del margine',
            en: 'lines of proprietary Python code powering algorithmic margin calculation'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo che il fatturato lordo raddoppierà in 30 giorni: spesso eliminare prodotti a margine negativo riduce leggermente il fatturato di facciata aumentando sensibilmente l\'utile netto in banca.',
            'L\'ottimizzazione POAS richiede trasparenza sui costi del catalogo.'
          ],
          en: [
            'We do not guarantee gross turnover doubles in 30 days: cutting negative-margin SKUs often trims vanity top-line while drastically expanding retained cash flow.',
            'POAS optimization requires transparency on SKU cost structures.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'Qual è un valore sano di POAS per un e-commerce?',
              en: 'What is considered a healthy POAS benchmark?'
            },
            answer: {
              it: 'Un POAS superiore a 1,2x - 1,5x indica che le campagne stanno generando un utile netto tangibile dopo aver ripagato interamente sia la spesa pubblicitaria sia i costi del prodotto.',
              en: 'A POAS above 1.2x - 1.5x proves advertising produces tangible net profit after absorbing both ad spend and product COGS.'
            }
          },
          {
            question: {
              it: 'Funziona anche con cataloghi complessi da migliaia di prodotti?',
              en: 'Does this scale across large catalogs with thousands of SKUs?'
            },
            answer: {
              it: 'Assolutamente sì. masterAnalyzer raggruppa dinamicamente i prodotti in bucket di margine (es. High Margin >50%, Medium Margin 30-50%, Low Margin <30%) orientando il budget di conseguenza.',
              en: 'Yes. masterAnalyzer clusters inventory into margin buckets (e.g. High Margin >50%, Medium 30-50%, Low <30%), guiding automated budget allocation.'
            }
          }
        ],
        relatedSpokes: ['campagne-brand-cannibalizzazione', 'audit-google-ads-indipendente', 'previsione-budget-fine-mese']
      },
      {
        slug: 'campagne-brand-cannibalizzazione',
        themeId: 'profitto-reale',
        videoId: 'q4b9JkLwEZM', // V07: Stai ricomprando i tuoi clienti
        h1: {
          it: 'Controllo Cannibalizzazione Brand: Smetti di pagare per clienti che avevi già',
          en: 'Brand Cannibalization Control: Stop Paying For Customers You Already Owned'
        },
        uspTagline: {
          it: 'Identifichiamo ed escludiamo le ricerche sul tuo brand dove sei già primo gratis nell\'organico SEO.',
          en: 'Identifying and excluding branded search queries where you already hold the organic #1 spot.'
        },
        metaTitle: {
          it: 'Campagne Brand Cannibalizzazione Google Ads | Internet Valore',
          en: 'Brand Search Cannibalization in Google Ads | Internet Valore'
        },
        metaDescription: {
          it: 'Fino al 30% del tuo budget Ads va su click di utenti che stavano già cercando il tuo nome. masterAnalyzer misura e blocca la cannibalizzazione del brand.',
          en: 'Up to 30% of your search budget is wasted buying clicks from users already looking for you. masterAnalyzer measures and curbs brand cannibalization.'
        },
        primaryKeyword: 'campagne brand google ads cannibalizzazione',
        problemStory: {
          it: [
            'C\'è un paradosso diffuso: la campagna con il costo per acquisizione più basso, quella che nel report dell\'agenzia sembra la migliore in assoluto, è spesso la più inutile. Perché raccoglie clienti che ti avrebbero trovato comunque, cercando il tuo nome esatto su Google.',
            'E dentro Performance Max, la campagna automatica di Google che decide da sola dove mostrare gli annunci, la spesa sul proprio marchio viene spesso nascosta per gonfiare artificialmente il ROAS complessivo.'
          ],
          en: [
            'A common paradox: the campaign boasting the lowest CPA—the star of agency monthly decks—is frequently the least valuable. It captures users who already searched for your exact company name.',
            'Inside Google Performance Max, branded spend is frequently concealed to artificially inflate overall reported account ROAS.'
          ]
        },
        blindSpot: {
          it: [
            'Le agenzie tradizionali amano le campagne brand: costano poco, hanno tassi di conversione altissimi e fanno sembrare l\'operato straordinariamente profittevole.',
            'Pochissimi verificano se in assenza di annunci a pagamento il traffico organico assorbirebbe oltre il 95% di quei click a costo zero.'
          ],
          en: [
            'Agencies favor branded search: clicks are cheap, conversion rates are sky-high, and it makes management look brilliantly effective.',
            'Rarely does anyone audit whether natural organic rankings would absorb 95%+ of those searches for free.'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Incrocio Organico vs Ads', en: 'Organic vs Paid Cross-Verification' },
            description: {
              it: 'Incrociamo i dati di Search Console con Google Ads per misurare quanta spesa pubblicitaria viene drenata da ricerche dove sei già posizionato stabilmente al primo posto.',
              en: 'We cross-reference Search Console with Google Ads to quantify ad spend diverted to terms where your site holds permanent #1 organic rank.'
            }
          },
          {
            step: 2,
            title: { it: 'Audit Difesa Competitiva', en: 'Competitor Threat Audit' },
            description: {
              it: 'Verifichiamo tramite Auction Insights se ci sono veri competitor che acquistano il tuo nome. Se non ci sono rivali, il click sponsorizzato è puro spreco.',
              en: 'We run Auction Insights to verify whether actual competitors bid on your name. Without aggressive rivals, brand bidding is pure budget waste.'
            }
          },
          {
            step: 3,
            title: { it: 'Esclusione Brand Protetta', en: 'Protected Brand Exclusion' },
            description: {
              it: 'Configuriamo liste di esclusione del brand su Search e script su Performance Max, riallocando il budget recuperato sull\'acquisizione di clienti nuovi.',
              en: 'We implement brand negative exclusion lists on Search and PMax, redirecting reclaimed spend toward incremental prospect acquisition.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi', en: 'Deliverables' },
          items: {
            it: [
              'Quantificazione esatta dell\'euro-budget speso per ricomprare il proprio traffico.',
              'Analisi della presenza di competitor aggressivi sulle parole chiave del brand.',
              'Implementazione delle liste di esclusione negative a protezione dei margini.'
            ],
            en: [
              'Exact euro figure calculation of budget wasted buying existing customers.',
              'Competitor bidding threat analysis across brand trademark terms.',
              'Negative brand exclusion list deployment protecting operating margin.'
            ]
          }
        },
        proofData: {
          metric: '126×',
          label: {
            it: 'fattore di compressione ingegneristica per analisi algoritmica di cannibalizzazione',
            en: 'engineering compression factor powering algorithmic cannibalization audits'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo di spegnere sempre il brand al 100%: se competitor aggressivi comprano il tuo marchio rubando clienti, difendere la posizione è strategicamente necessario.',
            'La nostra regola software è: il brand serve a proteggersi quando serve, ma non si spaccia per nuova crescita.'
          ],
          en: [
            'We do not promise blanket 100% brand shutoff: if aggressive competitors hijack your trademark, defending the top spot is necessary.',
            'Our algorithmic rule: protect brand queries when contested, but never disguise existing demand as new growth.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'Se spengo gli annunci sul mio brand, i concorrenti mi ruberanno clienti?',
              en: 'If I pause brand ads, will competitors steal my traffic?'
            },
            answer: {
              it: 'Lo verifichiamo preventivamente con i dati di impression share e sovrapposizione d\'asta. Se nessun concorrente fa offerte sul tuo marchio, nessuno ruberà nulla.',
              en: 'We audit Auction Insights first. If zero rivals bid on your trademark, organic listings absorb incoming traffic with zero leakage.'
            }
          },
          {
            question: {
              it: 'Come faccio a escludere il brand dalle campagne Performance Max?',
              en: 'How do you exclude brand terms from Google Performance Max?'
            },
            answer: {
              it: 'Utilizziamo elenchi di marchi a livello di account o script API approvati da Google, impedendo all\'algoritmo di bruciare il budget sulle ricerche facili.',
              en: 'We configure account-level brand exclusion lists and approved Google API scripts, preventing algorithms from exhausting budgets on easy queries.'
            }
          }
        ],
        relatedSpokes: ['poas-profitto-sulla-spesa', 'audit-google-ads-indipendente', 'previsione-budget-fine-mese']
      },
      {
        slug: 'audit-google-ads-indipendente',
        themeId: 'profitto-reale',
        videoId: 'tJejrvR0BCc', // V08: La risposta che a nessuno conviene darti
        h1: {
          it: 'Audit Google Ads a Raggi X: La seconda opinione tecnica e indipendente sul tuo account',
          en: 'Independent Google Ads X-Ray Audit: Objective Second Opinion on Your Campaigns'
        },
        uspTagline: {
          it: 'Un check-up strutturale dell\'account prima e durante la gestione, senza conflitti d\'interesse.',
          en: 'Structural account diagnostic before and during management, free of conflicts of interest.'
        },
        metaTitle: {
          it: 'Audit Google Ads Indipendente a Raggi X | Internet Valore',
          en: 'Independent Google Ads X-Ray Audit | Internet Valore'
        },
        metaDescription: {
          it: 'Vuoi sapere dove la tua attuale agenzia sta sprecando budget? Richiedi l\'audit indipendente a Raggi X di masterAnalyzer con accordo di riservatezza.',
          en: 'Wondering where your current agency is leaking budget? Request an objective X-Ray audit powered by masterAnalyzer under mutual NDA.'
        },
        primaryKeyword: 'audit google ads indipendente',
        problemStory: {
          it: [
            'Chiedere a chi gestisce attualmente le tue campagne se sta lavorando bene è come chiedere all\'oste se il vino è buono: ti mostrerà i grafici in salita ed eviterà di parlare di dispersioni.',
            'L\'Audit a Raggi X di Internet Valore nasce per offrire una valutazione terza, matematica e imparziale, condotta con oltre 167 tool di analisi Google Ads integrati nel nostro software proprietario.'
          ],
          en: [
            'Asking your current agency if they are doing a good job is like asking a barber if you need a haircut: they will highlight winning graphs and omit inefficiencies.',
            'Internet Valore independent X-Ray Audit delivers an impartial diagnostic executed with 167 proprietary Google Ads analysis tools.'
          ]
        },
        blindSpot: {
          it: [
            'Molti audit commerciali tradizionali si limitano a dare consigli generici ("aggiungi più estensioni" o "alza il budget").',
            'Nessuno controlla la reale cannibalizzazione interna tra campagne Search e Shopping o la qualità semantica delle corrispondenze.'
          ],
          en: [
            'Standard agency audits offer generic platitudes ("add ad extensions" or "increase your budget").',
            'Nobody runs deep diagnostics on internal keyword self-competition between Search and Shopping or match-type degradation.'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Estrazione API in Sola Lettura', en: 'Read-Only API Ingestion' },
            description: {
              it: 'Connettiamo l\'account in modalità sola lettura senza toccare né modificare nulla della configurazione esistente.',
              en: 'We connect in strict read-only mode via API, leaving live campaigns and bidding structures 100% untouched.'
            }
          },
          {
            step: 2,
            title: { it: 'Scansione a Raggi X in 5 Fasi', en: '5-Phase X-Ray Scan' },
            description: {
              it: 'Analizziamo dispersione delle query di ricerca, igiene RSA, conflitti di cannibalizzazione e Quality Score storico.',
              en: 'We analyze search term waste, RSA ad hygiene, internal cannibalization conflicts, and historical Quality Scores.'
            }
          },
          {
            step: 3,
            title: { it: 'Dossier di Valutazione Qualificato', en: 'Qualified Diagnostic Dossier' },
            description: {
              it: 'Generiamo un report dettagliato con gli interventi prioritari classificati per impatto economico e confidenza statistica.',
              en: 'We generate an executive dossier detailing corrective optimizations ranked by profit impact and statistical confidence.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi', en: 'Deliverables' },
          items: {
            it: [
              'Stima in euro del budget pubblicitario sprecato negli ultimi 90 giorni.',
              'Elenco delle keyword negative da inserire immediatamente per bloccare ricerche fuori target.',
              'Piano strategico di presa in carico con data baseline t0 congelata.'
            ],
            en: [
              'Quantified euro calculation of ad budget wasted over the last 90 days.',
              'Negative keyword list ready for deployment to instantly halt off-target search spend.',
              'Strategic onboarding blueprint locking a versioned Day-0 performance baseline.'
            ]
          }
        },
        proofData: {
          metric: '167',
          label: {
            it: 'tool specializzati per audit automatico Google Ads in masterAnalyzer',
            en: 'specialized tools dedicated to automated Google Ads auditing in masterAnalyzer'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo miracoli né promesse di fatturato garantito sulla carta: l\'audit mostra la realtà oggettiva dei dati.',
            'L\'audit è riservato a brand con spesa mensile attiva superiore a 15.000€/mese per garantire rilevanza statistica.'
          ],
          en: [
            'We never offer paper revenue guarantees: the audit reflects objective analytical facts.',
            'Audits are reserved for brands with active ad spend exceeding €15,000/mo to ensure statistical validity.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'La mia attuale agenzia si accorgerà che state analizzando l\'account?',
              en: 'Will my current agency know you are auditing the account?'
            },
            answer: {
              it: 'L\'accesso avviene tramite ID cliente MCC in sola lettura. Non viene effettuata alcuna modifica alle campagne attive e la procedura è protetta da patto di riservatezza reciproco (NDA).',
              en: 'Access occurs via MCC read-only invitation. No changes are applied to active campaigns and proceedings are governed by mutual NDA.'
            }
          },
          {
            question: {
              it: 'Quanto tempo richiede l\'esecuzione dell\'Audit a Raggi X?',
              en: 'How long does the X-Ray Audit take?'
            },
            answer: {
              it: 'Una volta concessi gli accessi in sola lettura, il report completo viene elaborato e discusso entro 3-5 giorni lavorativi.',
              en: 'Once read-only access is provisioned, full diagnostic dossiers are finalized and reviewed within 3-5 business days.'
            }
          }
        ],
        relatedSpokes: ['poas-profitto-sulla-spesa', 'campagne-brand-cannibalizzazione', 'previsione-budget-fine-mese']
      },
      {
        slug: 'previsione-budget-fine-mese',
        themeId: 'profitto-reale',
        videoId: 'nMczOzc0lgU', // V09: A metà mese sai già dove atterri
        h1: {
          it: 'Previsione Budget & Rendimento a Fine Mese: A metà mese sai dove atterri',
          en: 'Month-End Budget & Yield Forecasting: Mid-Month Landing Visibility'
        },
        uspTagline: {
          it: 'Algoritmo predittivo di pacing del budget per evitare sforamenti imprevisti o rallentamenti a fine mese.',
          en: 'Predictive budget pacing algorithm preventing accidental overspends or end-of-month budget freezes.'
        },
        metaTitle: {
          it: 'Previsione Budget e Spesa Google Ads | masterAnalyzer',
          en: 'Google Ads Budget Forecasting & Pacing | masterAnalyzer'
        },
        metaDescription: {
          it: 'Basta sorprese a fine mese. masterAnalyzer calcola la traiettoria di spesa e ritorno atteso a metà mese per correggere la rotta prima della chiusura.',
          en: 'Eliminate month-end surprises. masterAnalyzer models ad spend trajectory and projected return mid-month to calibrate pacing.'
        },
        primaryKeyword: 'previsione spesa pubblicitaria google ads',
        problemStory: {
          it: [
            'Il terrore di ogni responsabile marketing: arrivare al 25 del mese e scoprire che l\'algoritmo di Google Ads ha accelerato la spesa, esaurendo il budget con una settimana d\'anticipo, oppure accorgersi che ha speso la metà del previsto lasciando margini sul tavolo.',
            'Controllare la spesa guardando i totali giorno per giorno non serve: servono modelli econometrici che tengano conto della stagionalità settimanale (weekend vs giorni feriali) e del comportamento degli Smart Bidding.'
          ],
          en: [
            'Every marketing manager nightmare: reaching the 25th of the month only to discover Google Ads algorithms spiked pacing, burning budgets days early—or under-pacing and leaving margin behind.',
            'Monitoring daily totals manually fails: you need econometric models factoring in day-of-week seasonality and Smart Bidding pacing mechanics.'
          ]
        },
        blindSpot: {
          it: [
            'Le agenzie tradizionali si accorgono dello sforamento solo a cose fatte, quando la fattura di Google è già emessa.',
            'Non considerano che Google Ads può spendere fino a 2 volte il budget giornaliero impostato nei giorni di picco della domanda.'
          ],
          en: [
            'Incumbent agencies notice budget overruns reactively, once Google invoices have already been charged.',
            'They forget that Google Ads can spend up to 200% of daily targets during temporary demand spikes.'
          ]
        },
        howWeDoIt: [
          {
            step: 1,
            title: { it: 'Modellazione Stagionale Dayparting', en: 'Dayparting Seasonality Modeling' },
            description: {
              it: 'masterAnalyzer analizza lo storico delle variazioni giornaliere per stimare il consumo atteso nei giorni rimanenti.',
              en: 'masterAnalyzer models historical intraday variances to project expected consumption over remaining calendar days.'
            }
          },
          {
            step: 2,
            title: { it: 'Simulazione di Atterraggio', en: 'Landing Trajectory Simulation' },
            description: {
              it: 'Simuliamo la spesa e il ritorno economico atteso a fine mese basandoci sulle aste correnti e sul conversion delay.',
              en: 'We simulate projected month-end spend and margin yield incorporating current auction dynamics and conversion lag.'
            }
          },
          {
            step: 3,
            title: { it: 'Ricalibrazione Preventiva', en: 'Preventative Budget Calibration' },
            description: {
              it: 'Moduliamo i budget giornalieri con interventi graduali per atterrare esattamente sull\'obiettivo senza resettare l\'apprendimento.',
              en: 'We modulate daily limits gradually to stick the planned landing target without resetting machine learning.'
            }
          }
        ],
        whatYouGet: {
          title: { it: 'Cosa Ricevi', en: 'Deliverables' },
          items: {
            it: [
              'Previsione settimanale di atterraggio del budget pubblicitario con stima dell\'utile netto.',
              'Allarme automatico di overspending o underspending se la traiettoria devia di oltre il 5%.',
              'Controllo rigoroso della cassa aziendale senza sprechi imprevisti.'
            ],
            en: [
              'Weekly projected budget landing forecast with net profit modeling.',
              'Automated pacing alerts triggered whenever trajectory deviates by >5%.',
              'Strict financial cash flow control eliminating surprise ad overspends.'
            ]
          }
        },
        proofData: {
          metric: '1.533',
          label: {
            it: 'anelli di catena esecutiva codificati per calcolo predittivo e audit continuo',
            en: 'execution chain links programmed for predictive modeling and ongoing monitoring'
          },
          sourceTimestamp: 'Censimento masterAnalyzer 13ª battuta, 11 Ottobre 2026'
        },
        whatWeDoNotPromise: {
          it: [
            'Non promettiamo che la domanda di mercato sia costante ogni singolo giorno: i mercati oscillano.',
            'Il nostro modello assicura che il budget mensile concordato venga rispettato al millesimo con il massimo ritorno possibile.'
          ],
          en: [
            'We do not promise consumer demand remains identical every day: markets fluctuate naturally.',
            'Our pacing system guarantees agreed monthly budgets land on-target while maximizing net profit.'
          ]
        },
        faqs: [
          {
            question: {
              it: 'Perché Google Ads spende più del budget giornaliero che ho impostato?',
              en: 'Why does Google Ads spend more than my configured daily budget?'
            },
            answer: {
              it: 'Google applica la regola del moltiplicatore 2x: può spendere fino al doppio del budget giornaliero nei giorni di picco, compensando nei giorni più calmi nel corso del mese.',
              en: 'Google enforces a 2x ceiling rule: daily limits may surge up to 200% during spikes, balancing out over the course of the monthly billing cycle.'
            }
          },
          {
            question: {
              it: 'Come evitate di resettare la fase di apprendimento quando modificate il budget?',
              en: 'How do you prevent resetting learning phase during budget edits?'
            },
            answer: {
              it: 'Applichiamo modifiche percentuali scaglionate non superiori al 15-20% per volta, mantenendo gli algoritmi di Smart Bidding stabili.',
              en: 'We apply incremental pacing adjustments within 15-20% intervals, preserving Smart Bidding stability.'
            }
          }
        ],
        relatedSpokes: ['poas-profitto-sulla-spesa', 'campagne-brand-cannibalizzazione', 'audit-google-ads-indipendente']
      }
    ]
  }
};
