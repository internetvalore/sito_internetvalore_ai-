import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import {
  Cpu, Users, Shield, Terminal, CheckCircle, AlertTriangle, ArrowRight,
  TrendingUp, BarChart2, Zap, Settings, Search, MessageSquare, Database,
  Percent, Globe, Image, Check, AlertCircle, Play, Sparkles, HelpCircle, FileText,
  ThumbsDown, Sparkle, RefreshCw, XCircle
} from 'lucide-react';

export default function AIPlatform() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  
  // States for interactive components
  const [selectedProfile, setSelectedProfile] = useState<number>(0);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simulationRunning, setSimulationRunning] = useState<boolean>(false);
  const [simulationLogs, setSimulationLogs] = useState<string[]>([]);
  const [simStep, setSimStep] = useState<number>(0);

  // Links
  const WA_HREF = 'https://wa.me/393475012682';
  const BOOKING_HREF = 'https://calendar.app.google/hrTJoM1BDccQw75NA';

  // 9 Profiles Data updated with both E-commerce & Lead Gen capabilities
  const profiles = [
    {
      id: 1,
      title: isIt ? 'Il Titolare / Stratega d\'Agenzia' : 'Agency Owner / Strategist',
      tagline: isIt ? 'Decide quali clienti prendere e risponde del ROI.' : 'Decides which clients to onboard and owns the final ROI.',
      phrase: isIt ? '«Questo cliente vale la fee che paga? Come dimostriamo l\'incremento reale?»' : '“Is this client worth the fee they pay? How do we prove real lift?”',
      icon: Users,
      tools: isIt 
        ? ['Prospecting (discovery pagine & clustering)', 'Prendi in carico (Audit & baseline t0)', 'Proposte cliente con firma digitale (PDF)', 'Storico Decisioni & incrementality test']
        : ['Prospecting (discovery & clustering)', 'Onboarding Day-0 (audit & t0 baseline)', 'Signed client proposals (PDF)', 'Decision History & incrementality test'],
      paths: isIt ? [
        {
          name: 'Dal prospect al pitch (senza accessi)',
          steps: [
            'Inserisci l\'URL del prospect nella pagina Prospecting.',
            'Il sistema avvia la discovery e il clustering degli intenti, stimando la domanda lato-mercato con DataForSEO.',
            'Genera e scarica il PDF "sulla carta" da mostrare in chiamata (senza promesse di fatturato).',
            'Al via libera, l\'Action Plan approvato genera le campagne direttamente in PAUSA.'
          ]
        },
        {
          name: 'Giorno-zero & Protocollo di presa in carico',
          steps: [
            'Collega le sorgenti nell\'area Onboarding e avvia il sync storico.',
            'Apri il Dossier di Presa in Carico, stabilisci la data t0 (baseline storica versionata).',
            'Avvia il takeover: calcola gli interventi prioritari per impatto × confidenza.',
            'Esporta la proposta t0 per allineare il cliente e congelare lo stato iniziale.'
          ]
        }
      ] : [
        {
          name: 'From Prospect to Pitch (Zero Access Required)',
          steps: [
            'Enter the prospect URL in the Prospecting tool.',
            'The system crawls pages, clusters search intents, and estimates market demand via DataForSEO.',
            'Download the "On Paper" PDF dossier to present during the pitch call (no revenue promises).',
            'Once signed, the approved Action Plan stages the campaigns as PAUSED.'
          ]
        },
        {
          name: 'Day-Zero Onboarding Protocol',
          steps: [
            'Connect sources in the Onboarding dashboard and trigger historical sync.',
            'Open the Day-0 Dossier, set the t0 timestamp to lock a versioned baseline.',
            'Run the takeover job: ranks optimizations by impact × confidence.',
            'Export the t0 proposal to align the client and freeze the starting benchmark.'
          ]
        }
      ],
      guardrails: isIt 
        ? ['Il prospecting mostra la domanda latente, mai il fatturato garantito.', 'Senza almeno 28 giorni di dati storici, il sistema resta descrittivo (niente verdetti frettolosi).', 'La firma del cliente copre gli interventi strutturali, non le proiezioni di valore (che risiedono in un PDF separato).']
        : ['Prospecting estimates demand, never guaranteed revenue.', 'With less than 28 days of fresh data, the system remains strictly descriptive (no instant verdicts).', 'The client signs for exact changes, not for projections (which live in a separate Value PDF).']
    },
    {
      id: 2,
      title: isIt ? 'L\'Account Manager' : 'Account Manager',
      tagline: isIt ? 'La voce verso il cliente: report, allineamento e spiegazione dei trend.' : 'The voice facing the client: reporting, alignment, and explaining trends.',
      phrase: isIt ? '«Perché è calato il fatturato o il CPL questa settimana? Di quale dato possiamo fidarci?»' : '“Why did revenue or CPL drop this week? Which data can we actually trust?”',
      icon: MessageSquare,
      tools: isIt
        ? ['Rito di affidabilità (sync & tracking audit)', 'Spiega un calo (Δ) (scomposizione LMDI)', 'Il filo del lavoro (timeline delle mosse)', 'Report Storytelling (narrativa automatica)']
        : ['Reliability sanity check (sync & tracking audit)', 'Explain a drop (Δ) (LMDI decomposition)', 'Activity log (timeline of decisions)', 'Storytelling Report (auto-narrative)'],
      paths: isIt ? [
        {
          name: 'Il rito del lunedì (Semaforo di affidabilità)',
          steps: [
            'Chiedi in Chat Globale: "Posso fidarmi dei numeri di questa settimana?"',
            'L\'AI controlla ubi-health, sync_status e lancia l\'audit sul tracciamento.',
            'Se il semaforo è verde, procedi. Se rosso, identifica quale tracciamento è rotto ed evidenzialo nel report.'
          ]
        },
        {
          name: 'Spiegare una variazione improvvisa (Δ)',
          steps: [
            'Avvia la diagnosi "Spiega un calo (Δ)" per scorporare i fattori tramite scomposizione LMDI.',
            'Verifica se il calo dipende dal Conversion Rate (sito/funnel) o dal Mix di Traffico (sorgenti).',
            'Incrocia le date con il registro degli "artefatti" (cambiamenti di landing, modifiche a campagne).',
            'Comunica al cliente una spiegazione basata su dati precisi, non su congetture.'
          ]
        }
      ] : [
        {
          name: 'The Monday Ritual (Data Trust Check)',
          steps: [
            'Ask in the Global Chat: "Can I trust this week\'s numbers?"',
            'The AI verifies sync status, token health, and runs a tracking event audit.',
            'If green, proceed. If red, pinpoint the broken tag and declare it in the report.'
          ]
        },
        {
          name: 'Explaining a Sudden Performance Drop (Δ)',
          steps: [
            'Run the "Explain a drop" tool to isolate variables using LMDI decomposition.',
            'Identify if the drop stems from Conversion Rate (funnel/site issue) or Traffic Mix (acquisition issue).',
            'Cross-reference dates with the "artifact change log" (new landing page versions, budget changes).',
            'Deliver a clear, data-backed answer to the client instead of defensive excuses.'
          ]
        }
      ],
      guardrails: isIt
        ? ['Se il tracciamento è rotto (tracking-break), la finestra temporale viene marcata "non giudicabile".', 'Ogni verdetto indica la significatività statistica: se è rumore, si dichiara "troppo presto per decidere".']
        : ['If tracking is broken, the affected date range is locked as "non-judgmental".', 'Every analysis shows statistical confidence: if it is noise, the official response is "too early to judge".']
    },
    {
      id: 3,
      title: isIt ? 'Il Media Buyer Google Ads' : 'Google Ads Specialist',
      tagline: isIt ? 'Ottimizzazione delle campagne Search, Shopping e PMax.' : 'Management of Search, Shopping, and PMax campaigns.',
      phrase: isIt ? '«Stiamo sprecando budget su keyword inutili? Dove abbiamo margine di crescita?»' : '“Are we wasting budget on off-topic terms? Where is our scaling headroom?”',
      icon: Terminal,
      tools: isIt
        ? ['Audit Raggi X (radiografia account)', 'Analisi Auction Insights (budget vs rank)', 'Quality Score Restructure', 'Forensics del CPA (retrospettiva)']
        : ['Google Ads X-Ray (account audit)', 'Auction Insights (budget vs rank loss)', 'Quality Score Restructure', 'CPA Forensics (historical review)'],
      paths: isIt ? [
        {
          name: 'Audit Raggi X e staging modifiche',
          steps: [
            'Lancia il job Raggi X in 5 fasi per analizzare strutture, conflitti, igiene RSA e Quality Score.',
            'Rivedi le keyword da bloccare e le proposte di redistribuzione del budget.',
            'Esporta le azioni nella coda Staging.',
            'Valida tramite dry-run, conferma i checkbox e applica via API (le nuove campagne nascono in PAUSA).'
          ]
        },
        {
          name: 'Risoluzione perdita di Impression Share (Rank vs Budget)',
          steps: [
            'Apri Auction Insights: isola l\'IS persa per budget (risolvibile con capitali) da quella per rank (qualità/bid).',
            'Per IS persa per rank, avvia `is_rank_loss_terrain_recovery` per capire se il problema è il bid o l\'annuncio.',
            'Per IS persa per budget, esegui la stima dell\'headroom per verificare se c\'è reale domanda aggiuntiva.'
          ]
        }
      ] : [
        {
          name: 'X-Ray Audit & Change Staging',
          steps: [
            'Run the 5-phase X-Ray job to check keywords, RSA asset strength, and Quality Score issues.',
            'Review proposed negative keywords and budget reallocations.',
            'Push chosen actions to the Staging area.',
            'Run a validation dry-run, check the boxes, and apply via API (new campaigns start as PAUSED).'
          ]
        },
        {
          name: 'Fixing Impression Share Loss (Rank vs Budget)',
          steps: [
            'Go to Auction Insights: isolate IS lost due to budget (requires funds) vs rank (requires bid/quality).',
            'For rank loss, run `is_rank_loss_terrain_recovery` to diagnose if the barrier is bid or ad relevance.',
            'For budget loss, run the headroom tool to see if there is actual search volume to capture.'
          ]
        }
      ],
      guardrails: isIt
        ? ['Non scalare mai le campagne brand se sei già primo organico (cannibalizzazione).', 'Ragiona in POAS (profitto) e non solo in ROAS per non spingere prodotti in perdita.']
        : ['Never scale brand search campaigns if you already rank #1 organically (cannibalization).', 'Optimize for POAS (profit) rather than ROAS to avoid driving unprofitable sales volume.']
    },
    {
      id: 4,
      title: isIt ? 'Il Media Buyer Meta & Creative Strategist' : 'Meta & Creative Strategist',
      tagline: isIt ? 'Gestione budget Meta e ciclo di vita creativo basato sui dati.' : 'Manages Meta Ads budget and data-driven creative iterations.',
      phrase: isIt ? '«Quale angolo creativo sta convertendo meglio? Quale asset è morto?»' : '“Which creative angle is actually converting? Which ad is dead?”',
      icon: Image,
      tools: isIt
        ? ['Report Creatività (performance per-angolo)', 'Creative Studio (generatore & validatore concept)', 'Meta ↔ GA4 Bridge (attribuzione reale)', 'Breakdown Significance Test']
        : ['Creative Performance Report (angle analysis)', 'Creative Studio (concept generation & validator)', 'Meta ↔ GA4 Bridge (real attribution)', 'Breakdown Significance Test'],
      paths: isIt ? [
        {
          name: 'Il Loop Creativo (Manutenzione asset)',
          steps: [
            'Esegui il `creative_loop`: analizza gli asset tramite categorizzazione ABC (vincenti, stabili, morti).',
            'Metti in pausa i creativi morti (che bruciano budget senza ritorno).',
            'Genera varianti dei creativi di classe A (vincenti) per evitare la fatica dell\'ad.'
          ]
        },
        {
          name: 'Filiera Generazione Campagna Lead',
          steps: [
            'Chiedi in Chat: "Generami concept per il servizio X basato sulla landing Y".',
            'Il tool estrae claim e scrive concept basati sulle ferite psicologiche e bisogni Maslow.',
            'Invia i concept al Giudice Indipendente per scartare didascalico, kitsch o manipolatorio.',
            'Prepara le varianti, effettua il dry-run e pubblica su Meta in PAUSA.'
          ]
        }
      ] : [
        {
          name: 'The Creative Loop (Asset Maintenance)',
          steps: [
            'Run the `creative_loop` to sort ad creatives using ABC analysis.',
            'Pause "dead" creative assets that consume budget without conversion returns.',
            'Generate variations of "Class A" winners to combat ad fatigue and maintain scale.',
          ]
        },
        {
          name: 'Full Lead Campaign Generation',
          steps: [
            'Ask the Chat: "Generate creative concepts for service X based on landing page Y".',
            'The tool extracts claims and writes hooks anchored to psychological wounds and Maslow needs.',
            'Pass the concepts to the Adversarial Judge to filter out kitsch, hype, or policy flags.',
            'Build variations, run the staging dry-run, and deploy to Meta as PAUSED.'
          ]
        }
      ],
      guardrails: isIt
        ? ['Il testo pubblicitario non deve contenere claim che non compaiono sulla landing page reale.', 'I test sui posizionamenti o pubblici usano la significatività di Poisson: non escludere placement con dati insufficienti.']
        : ['Ad copy must never claim features or certifications not present on the actual landing page.', 'Placement or audience breakdowns use Poisson significance: never exclude based on thin, noisy data.']
    },
    {
      id: 5,
      title: isIt ? 'Lo Specialista SEO & Contenuti' : 'SEO & Content Specialist',
      tagline: isIt ? 'Analisi dell\'intento di ricerca reale e canalizzazione del traffico organico.' : 'Analyzes real search intent and funnels organic traffic value.',
      phrase: isIt ? '«Quali ricerche ad alta conversione possiamo aggredire? Stiamo cannibalizzando?»' : '“Which high-intent terms can we target? Are we cannibalizing organic wins?”',
      icon: Search,
      tools: isIt
        ? ['Mappa delle opportunità (4 quadranti)', 'Striking Distance analysis', 'Sito & Topologia URL (pagine orfane)', 'Ponte Organic-to-RSA (SEO → Ads)']
        : ['SEO Opportunity Map (4 quadrants)', 'Striking Distance tracker', 'Site Topology & Orphan page finder', 'Organic-to-RSA bridge (SEO → Ads)'],
      paths: isIt ? [
        {
          name: 'Individuare la "Miniera" (Striking Distance)',
          steps: [
            'Apri la Mappa delle Opportunità: filtra per keyword in posizione 4-10 ad alta conversione.',
            'Esegui `get_striking_distance` per ottenere la lista di ottimizzazione contenuti prioritaria.',
            'Aggiorna testi, FAQ e schema markup delle pagine identificate per portarle in Top 3.'
          ]
        },
        {
          name: 'Ottimizzazione del budget tramite Cannibalizzazione',
          steps: [
            'Esegui `get_cannibalizzazione` per trovare keyword Google Ads dove sei primo organico.',
            'Identifica i termini "brand" o query stabili dove il traffico a pagamento duplica quello gratuito.',
            'Esporta le keyword come negative per far risparmiare budget al team Google Ads.'
          ]
        }
      ] : [
        {
          name: 'Finding the "Goldmines" (Striking Distance)',
          steps: [
            'Open the Opportunity Map: filter for high-conversion keywords ranking in positions 4-10.',
            'Run `get_striking_distance` to compile the priority content optimization list.',
            'Update page content, add structured FAQ schema to push pages into the top 3.'
          ]
        },
        {
          name: 'Optimizing Budget by Blocking Cannibalization',
          steps: [
            'Run `get_cannibalizzazione` to cross-reference search ads bids with top organic spots.',
            'Identify search queries where paid clicks duplicate what you already capture for free.',
            'Stage these keywords as negatives to instantly save budget for the Google Ads team.'
          ]
        }
      ],
      guardrails: isIt
        ? ['I volumi estratti da DataForSEO sono stime di mercato: non confonderli con le conversioni misurate.', 'Le ricerche sono geolocalizzate: risolvi sempre il mercato esatto prima di estrarre i trend.']
        : ['DataForSEO volumes are external market estimates: never confuse them with measured internal conversions.', 'Search queries are geo-dependent: always resolve the exact market language before extracting trends.']
    },
    {
      id: 6,
      title: isIt ? 'Il Measurement Engineer' : 'Measurement Engineer',
      tagline: isIt ? 'Garanzia di qualità del dato, tracciamento del funnel e integrità UTM.' : 'Data quality assurance, funnel tracking, and UTM taxonomy integrity.',
      phrase: isIt ? '«Quanti ordini o lead stiamo perdendo nei tracciamenti standard? Il dato è pulito?»' : '“How many orders or leads are standard tags missing? Is our marketing data clean?”',
      icon: Shield,
      tools: isIt
        ? ['Copertura Tracciamento (GA4 vs backend)', 'Audit Tag Manager & Event Taxonomy', 'Rilevatore Tracking-Break (sentinella)', 'Utm Health & Connessioni Live']
        : ['Tracking Coverage (GA4 vs backend reconciler)', 'Tag Manager & Event Taxonomy Audit', 'Tracking-Break Detector (sentinel)', 'UTM Health & Live Connection Check'],
      paths: isIt ? [
        {
          name: 'Riconciliazione ordini ed eventi lead nel CRM',
          steps: [
            'Controlla la Copertura Tracciamento: incrocia gli ID transazione o contatti CRM reali con GA4/Ads.',
            'Se la copertura scende sotto il 50%, notifica il team: il sistema declassa automaticamente i report economici o CPA a qualitativi.',
            'Riconcilia il conteggio lead (`lead_count_reconcile_before_cpl`) per ripulire lo spam prima di alimentare lo Smart Bidding.'
          ]
        },
        {
          name: 'Caccia al Tracking-Break',
          steps: [
            'La sentinella rileva cali anomali a zero di specifici key event (es. purchase, lead).',
            'Esegui `hunt_tracking_break` per verificare se le sessioni reggono mentre il tag è fermo.',
            'Genera il brief di riparazione per GTM o GA4 (esportato in staging per l\'applicazione manuale).'
          ]
        }
      ] : [
        {
          name: 'CRM Lead & Order Reconciliation',
          steps: [
            'Run Tracking Coverage: cross-reference database order IDs or CRM contacts with GA4/Ads.',
            'If coverage falls below 50%, flag the account: the system automatically downgrades CPL or value metrics to qualitative.',
            'Run `lead_count_reconcile_before_cpl` to clean spam and reconcile CRM leads before feeding Smart Bidding.'
          ]
        },
        {
          name: 'Hunting for Tracking Breaks',
          steps: [
            'The sentinel monitors key events (e.g., purchase, lead) for sudden drops to zero.',
            'Run `hunt_tracking_break` to check if sessions remain active while events are dead.',
            'Generate a GTM/GA4 configuration fix brief (staged for manual technician deployment).'
          ]
        }
      ],
      guardrails: isIt
        ? ['Riparare un tracciamento non crea valore di business: è un miglioramento di misura, non di vendite.', 'Le modifiche a GTM e GA4 Admin nascono come istruzioni umane (manual_ui): niente scritture automatiche non controllate.']
        : ['Fixing tracking does not create business value: it is a measurement upgrade, not a sales boost.', 'Changes to GTM and GA4 Admin are generated as step-by-step instructions (manual_ui) to keep humans in control.']
    },
    {
      id: 7,
      title: isIt ? 'L\'Operatore E-commerce Multi-Mercato' : 'Multi-Market E-commerce Operator',
      tagline: isIt ? 'Gestione coordinata di performance, cambi e budget per-paese.' : 'Coordinated management of performance, exchange rates, and budgets per country.',
      phrase: isIt ? '«Quale mercato ha il miglior ritorno reale al netto del tasso di cambio?»' : '“Which country has the best real return net of exchange rate fluctuations?”',
      icon: Globe,
      tools: isIt
        ? ['Layer FX (tassi BCE giornalieri)', 'Selettore Mercato (Scoped vs Aggregato)', 'Geo Holdout Test (Difference-in-Differences)', 'Riallocazione Budget Geo-Aware']
        : ['FX Layer (BCE daily exchange rates)', 'Market Selector (Scoped vs Aggregate)', 'Geo Holdout Test (Difference-in-Differences)', 'Geo-Aware Budget Reallocation'],
      paths: isIt ? [
        {
          name: 'Lettura corretta multi-valuta (Contratto dei 3 stati)',
          steps: [
            'Imposta il Selettore Mercato su "Aggregato EUR" per avere una vista unica convertita con tassi BCE del giorno specifico.',
            'Spostati su un singolo mercato (es. UK) per analizzare le metriche in valuta nativa (GBP) evitando distorsioni FX.',
            'In caso di valute orfane di tasso, il sistema blocca il calcolo (fail-closed) per impedire somme errate.'
          ]
        },
        {
          name: 'Geo Holdout & Incrementality Test',
          steps: [
            'Scegli un paese come test e uno speculare come controllo (holdout).',
            'Lancia la variazione (es. aumento budget Ads 20%) sul paese test.',
            'Esegui `geo_holdout_test` dopo 14 giorni per calcolare l\'incremento netto col modello DiD.'
          ]
        }
      ] : [
        {
          name: 'Multi-Currency Analysis (The 3-State Contract)',
          steps: [
            'Set the Market Selector to "Aggregate EUR" for a converted overview using historical BCE exchange rates.',
            'Scope into a single country (e.g., UK) to inspect campaigns in native currency (GBP), removing FX noise.',
            'If a currency rate is missing, the system halts (fail-closed) instead of printing skewed estimates.'
          ]
        },
        {
          name: 'Geo Holdout & Incrementality Test',
          steps: [
            'Select a test country and a matching control (holdout) market.',
            'Apply the variable change (e.g., +20% Ads budget) only in the test country.',
            'Run the `geo_holdout_test` after 14 days to compute net lift via Difference-in-Differences (DiD).'
          ]
        }
      ],
      guardrails: isIt
        ? ['Non sommare mai valute diverse senza tasso di cambio specifico del giorno di transazione.', 'La riallocazione budget geografica deve tenere conto della qualità di tracciamento di ogni paese per non penalizzare mercati ciechi.']
        : ['Never sum different currencies without transaction-date exchange rates.', 'Geographical budget shifts must respect tracking coverage quality to avoid penalizing blind markets.']
    },
    {
      id: 8,
      title: isIt ? 'L\'Editore / Advertiser senza Tracking' : 'No-Tracking Advertiser / Publisher',
      tagline: isIt ? 'Ottimizzazione su piattaforme esterne senza pixel (Amazon, KDP, ecc.).' : 'Optimizes spend on external channels without pixel tracking (Amazon, KDP).',
      phrase: isIt ? '«Come ottimizzo la mia spesa se non ho un tracciamento diretto delle vendite?»' : '“How do I optimize Facebook Ads if the sale happens where the pixel can\'t go?”',
      icon: Percent,
      tools: isIt
        ? ['Triangolazione Spesa ↔ Royalties', 'Riconciliazione temporale delle vendite', 'Pacing & CPA stimato per canale', 'Modello predittivo a ritardo']
        : ['Spend-to-Royalty Triangulator', 'Temporal Sales Reconciler', 'Estimated CPA Pacing', 'Time-lagged predictive model'],
      paths: isIt ? [
        {
          name: 'Triangolazione e calcolo del costo-vendita',
          steps: [
            'Importa la spesa Meta Ads e le royalties/vendite scaricate manualmente dal marketplace.',
            'Il tool esegue una scomposizione temporale applicando un modello a ritardo (time-lag) di 3-5 giorni.',
            'Calcola il CPA e il ROI indiretti per determinare quali campagne Meta spingono davvero le vendite offline.'
          ]
        }
      ] : [
        {
          name: 'Triangulation & CPA Estimation',
          steps: [
            'Import daily Meta Ads spend alongside offline/marketplace royalty reports.',
            'The tool applies a time-lagged mathematical model (typically 3-5 days) to account for shipping delays.',
            'Calculates indirect CPA and ROI to determine which ad sets drive actual marketplace volume.'
          ]
        }
      ],
      guardrails: isIt
        ? ['In assenza di pixel, i dati sono correlazioni temporali: mantieni margini di cautela elevati.', 'Non lanciare modifiche massive contemporanee, altrimenti rompi il modello di correlazione.']
        : ['Without direct tracking, results are temporal correlations: treat them with wider confidence intervals.', 'Avoid simultaneous multi-channel changes, as they break the correlation model.']
    },
    {
      id: 9,
      title: isIt ? 'Il Costruttore del Sistema' : 'System Architect',
      tagline: isIt ? 'Manutenzione del codice, estensione dei tool LLM e integrità API.' : 'Code maintenance, extending LLM tools, and API integrity.',
      phrase: isIt ? '«Come aggiungo un nuovo playbook? Tutti i moduli API sono connessi?»' : '“How do I deploy a new analysis playbook? Are all API modules healthy?”',
      icon: Settings,
      tools: isIt
        ? ['Playground dei Playbook', 'Health & API preflight checks', 'Filtro Consumi & Token budget', 'Auto-documentazione dei moduli']
        : ['Playbook Sandbox', 'Health & API preflight checks', 'Quota & Token budget controller', 'Auto-generated module documentation'],
      paths: isIt ? [
        {
          name: 'Aggiungere e testare un nuovo Playbook',
          steps: [
            'Scrivi il nuovo tool Python ed esponilo tramite l\'endpoint `/actions`.',
            'Nel Playground, definisci la catena di esecuzione e associala a un trigger in chat.',
            'Esegui il test preflight: controlla la risposta dell\'API e la coerenza del JSON restituito.',
            'Aggiorna la mappa nel Centro Capacità.'
          ]
        }
      ] : [
        {
          name: 'Adding & Testing a New Playbook',
          steps: [
            'Develop the Python tool class and register it under the `/actions` endpoint.',
            'In the sandbox, define the execution chain and map it to an LLM chat trigger.',
            'Run the preflight health check: monitors API latency and JSON scheme consistency.',
            'Publish the update to the Capability Center.'
          ]
        }
      ],
      guardrails: isIt
        ? ['Qualsiasi chiamata verso API a consumo (Firecrawl, DataForSEO) deve superare il budget pre-flight.', 'Non bypassare mai il log delle autorizzazioni (`fact_approval_log`) per le operazioni di scrittura.']
        : ['Any external API call (Firecrawl, DataForSEO) must pass the pre-flight quota filter to avoid bills spikes.', 'Never bypass the secure authorization log (`fact_approval_log`) for writing operations.']
    }
  ];

  // Creative Studio Simulation Steps
  const simulationSteps = [
    {
      name: '1. generate_creative_concepts',
      desc: isIt 
        ? 'L\'AI analizza la landing page ed estrae i claim reali. Crea concept basandosi sulle ferite psicologiche sane (Wound Thesaurus) e bisogni Maslow del target.' 
        : 'The AI crawls the landing page, extracts actual claims, and builds concepts anchored to target psychological wounds and Maslow needs.',
      log: isIt 
        ? 'CRAWLING: aurora.it/check-up... Trovati 3 claim. ANALISI TARGET: Estrazione bisogni (Esteem, Safety). GENERAZIONE CONCEPT: Concept 3: "Sollievo dall\'incertezza medica" (E6/Safety).'
        : 'CRAWLING: aurora.it/check-up... 3 claims found. TARGET AUDIENCE: Extracted needs (Esteem, Safety). GENERATED CONCEPTS: Concept 3: "Relief from medical uncertainty" (E6/Safety).'
    },
    {
      name: '2. judge_creative (Concept)',
      desc: isIt 
        ? 'Un modulo adversarial indipendente valuta il testo dei concept per scartare manipolazione, falsi segreti o esagerazioni non provate.' 
        : 'An independent adversarial module evaluates concept texts to filter out manipulation, hype, fake secrets, or unbacked claims.',
      log: isIt
        ? 'VERIFICA ETICA: Superata. VERIFICA REBUTTAL: Trovata ("Anche se hai paura dei medici"). TEST PREBUNKING: Nessuna tecnica manipolatoria rilevata. CONCEPT 3 APPROVATO.'
        : 'ETHICS CHECK: Passed. REBUTTAL TEST: Found ("Even if you fear clinics"). PREBUNKING CHECK: No manipulative tricks found. CONCEPT 3 APPROVED.'
    },
    {
      name: '3. generate_creative_image',
      desc: isIt 
        ? 'Genera l\'immagine a partire dai cue fisici e osservabili dell\'emozione (Emotion Thesaurus), evitando immagini stock patinate.' 
        : 'Generates the image brief using physical, observable cues (Emotion Thesaurus) instead of generic glossy stock models.',
      log: isIt
        ? 'ESTRAZIONE CUE: "Soggetto adulto, spalle rilassate, esala tenendo un foglio con esito chiaro". PROMPT GENERATO: "A close-up photo of a relieved person exhaling... no marketing text overlay".'
        : 'EXTRACTING CUE: "Adult subject, shoulders dropped, exhaling while holding a clear paper". PROMPT SENT: "A close-up photo of a relieved person exhaling... no marketing text overlay".'
    },
    {
      name: '4. judge_creative_image (Vision)',
      desc: isIt 
        ? 'Il modulo Vision analizza l\'immagine per scartare kitsch, testi promozionali pixelati ed errori anatomici.' 
        : 'The Vision module inspects the generated image to reject kitsch, pixelated text overlays, or anatomical errors.',
      log: isIt
        ? 'ANALISI VISION: Rilevato testo pixelato "OFFERTA" -> RETRY. RIGENERAZIONE... ANALISI VISION 2: Nessun testo, ottima enargia visiva, posa naturale. IMMAGINE APPROVATA.'
        : 'VISION ANALYSIS: Pixelated text overlay "OFFER" detected -> RETRY. RE-GENERATING... VISION ANALYSIS 2: No text overlays, excellent visual detail, natural pose. IMAGE APPROVED.'
    },
    {
      name: '5. stage_meta_creative',
      desc: isIt 
        ? 'La campagna Meta viene impacchettata ed esportata nella coda del Media Buyer. Nasce in stato PAUSA.' 
        : 'The Meta ad assets are packaged and pushed to the Media Buyer queue, staged as PAUSED.',
      log: isIt
        ? 'STAGING: Creato AdSet "Safety_CheckUp", creato AdCreative con Immagine 2 e copy persuasivo. STATO: PAUSED. Coda pronti per l\'invio a Meta Ads.'
        : 'STAGING: Staged AdSet "Safety_CheckUp", staged AdCreative with Image 2 and persuasive copy. STATUS: PAUSED. Ready for human review.'
    }
  ];

  const startSimulation = () => {
    setSimulationRunning(true);
    setSimulationLogs([]);
    setSimStep(0);
    runSimStep(0);
  };

  const runSimStep = (index: number) => {
    if (index >= simulationSteps.length) {
      setSimulationRunning(false);
      return;
    }
    setSimStep(index);
    setSimulationLogs(prev => [...prev, `[SYSTEM] Starting ${simulationSteps[index].name}...`, `[LOG] ${simulationSteps[index].log}`]);
    
    setTimeout(() => {
      runSimStep(index + 1);
    }, 2000);
  };

  const currentProfile = profiles[selectedProfile];

  return (
    <>
      <MetaTags
        title={metaContent.aiPlatform[language].title}
        description={metaContent.aiPlatform[language].description}
        path="/la-nostra-tecnologia-ai"
      />

      <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-indigo-500 selection:text-white overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* ─── HERO SECTION ────────────────────────────────────────────────── */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-sm mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            {isIt ? 'LA NOSTRA TECNOLOGIA DI GESTIONE' : 'OUR GESTION TECHNOLOGY'}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-400"
          >
            {isIt ? 'La Tecnologia AI Dietro la nostra Gestione' : 'The AI Technology Powering Our Services'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {isIt 
              ? 'Non vendiamo software. La nostra suite proprietaria (masterAnalyzer / Leonardo) è la struttura tecnologica esclusiva che utilizziamo per gestire le vostre campagne in outsourcing. Massima trasparenza, zero sprechi, ottimizzazione sul profitto (POAS) ed eventi reali.' 
              : 'We do not sell software. Our proprietary suite (masterAnalyzer / Leonardo) is the exclusive technology we use to manage your outsourced campaigns. Maximum transparency, zero waste, optimization on actual profit (POAS) and verified leads.'}
          </motion.p>
        </header>

        {/* ─── CHALLENGE THE PROVIDER SECTION (Sfida il fornitore) ─────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{isIt ? 'Metti alla prova chi gestisce oggi le tue campagne' : 'Challenge Your Current Provider'}</h2>
            <p className="text-slate-400 mt-2">
              {isIt 
                ? 'Confronta la nostra gestione basata su masterAnalyzer con quella di un fornitore tradizionale.' 
                : 'Compare our technology-driven outsourcing service against standard traditional management.'}
            </p>
          </div>

          <div className="overflow-x-auto bg-slate-900/50 border border-white/5 rounded-2xl">
            <table className="w-full text-left text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-slate-300">
                  <th className="p-5 font-semibold">{isIt ? 'Cosa gestiamo con masterAnalyzer' : 'How we manage with masterAnalyzer'}</th>
                  <th className="p-5 font-semibold text-slate-400">{isIt ? 'Cosa fa un fornitore tradizionale' : 'What a traditional agency does'}</th>
                  <th className="p-5 font-semibold text-rose-400 flex items-center gap-2">
                    <ThumbsDown className="w-4 h-4" />
                    {isIt ? 'Cosa ti perdi (Il Pain)' : 'What you lose (The Pain)'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="p-5 font-medium text-white flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{isIt ? 'Riconciliazione Dati Reali' : 'Real-Data Reconciliation'}</strong>
                      <p className="text-xs text-slate-400 mt-1">{isIt ? 'Confronto degli ordini reali Shopify o lead CRM con GA4/Ads per calcolare il vero ritorno.' : 'Cross-references Shopify sales or CRM leads with GA4/Ads to isolate real return.'}</p>
                    </div>
                  </td>
                  <td className="p-5 text-slate-400">
                    {isIt ? 'Ottimizza le campagne guardando solo le dashboard standard di Google e Facebook.' : 'Optimizes campaigns looking exclusively at Google/Facebook native dashboards.'}
                  </td>
                  <td className="p-5 text-rose-300 bg-rose-950/5">
                    <strong>{isIt ? 'Spreco di budget e decisioni cieche' : 'Wasted spend and blind decisions'}</strong>
                    <p className="text-xs text-rose-400 mt-1">{isIt ? 'Sotto-tracciamento del 20-50% degli ordini reali, che ti spinge a spegnere campagne sane scambiandole per inefficienti.' : 'Standard pixels miss 20-50% of real orders, leading you to kill highly profitable campaigns.'}</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-white flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{isIt ? 'Creative Studio & Giudice Avversariale' : 'Creative Studio & Adversarial Judge'}</strong>
                      <p className="text-xs text-slate-400 mt-1">{isIt ? 'Generazione di concept ancorati ai Maslow needs e ferite psicologiche con un arbitro anti-manipolazione e anti-kitsch.' : 'Concept generation anchored to Maslow needs and psychological wounds with anti-kitsch safety filters.'}</p>
                    </div>
                  </td>
                  <td className="p-5 text-slate-400">
                    {isIt ? 'Scrive copy "a sentimento" o genera immagini stock generiche o con prompt ChatGPT standard.' : 'Writes copy by feel and generates standard generic stock images or basic ChatGPT outputs.'}
                  </td>
                  <td className="p-5 text-rose-300 bg-rose-950/5">
                    <strong>{isIt ? 'Ad Fatigue rapido e conversioni basse' : 'Rapid Ad Fatigue and low conversion rates'}</strong>
                    <p className="text-xs text-rose-400 mt-1">{isIt ? 'Annunci indistinti che si confondono con la concorrenza, basati su cliché visivi che la gente ignora.' : 'Plain ads that blend with competitors, using worn-out visual clichés that people instantly scroll past.'}</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-white flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{isIt ? 'Rilevamento e Blocco Cannibalizzazione' : 'Anti-Cannibalization Control'}</strong>
                      <p className="text-xs text-slate-400 mt-1">{isIt ? 'Spegnimento o negativizzazione delle keyword Ads brand dove l\'organico SEO è già stabilmente in posizione 1.' : 'Excludes or pauses branded keywords where you already hold the absolute #1 organic spot.'}</p>
                    </div>
                  </td>
                  <td className="p-5 text-slate-400">
                    {isIt ? 'Paga volentieri per click sul brand per gonfiare artificialmente il ROAS del suo operato.' : 'Happy to pay for brand clicks to artificially inflate their reported ROAS.'}
                  </td>
                  <td className="p-5 text-rose-300 bg-rose-950/5">
                    <strong>{isIt ? 'Stai pagando per click che avresti gratis' : 'Paying for clicks you would get for free'}</strong>
                    <p className="text-xs text-rose-400 mt-1">{isIt ? 'Fino al 30% del budget speso per ricomprare utenti che stavano già cliccando sul tuo risultato organico.' : 'Up to 30% of your search budget wasted rebuying users who were already looking for you.'}</p>
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-white flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{isIt ? 'Lead Generation Riconciliata (CRM)' : 'CRM Reconciled Lead Gen'}</strong>
                      <p className="text-xs text-slate-400 mt-1">{isIt ? 'Riconciliazione dei contatti CRM per escludere spam o doppioni prima di inviarli all\'algoritmo Ads.' : 'Cleans CRM leads to exclude duplicate or spam form fills before reporting to the algorithm.'}</p>
                    </div>
                  </td>
                  <td className="p-5 text-slate-400">
                    {isIt ? 'Ottimizza su ogni click del form di contatto, contando lead non qualificati o bot.' : 'Optimizes for every contact form submission, counting junk leads and bots alike.'}
                  </td>
                  <td className="p-5 text-rose-300 bg-rose-950/5">
                    <strong>{isIt ? 'Algoritmi addestrati sullo spam' : 'Algorithms trained on spam data'}</strong>
                    <p className="text-xs text-rose-400 mt-1">{isIt ? 'Gli Smart Bidding ottimizzano per trovare "più spam" invece di contatti pronti all\'acquisto.' : 'Google/Meta bid optimization starts seeking more junk instead of actual buying prospects.'}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── PROFILE INTERACTIVE SELECTOR ────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{isIt ? 'Come Lavoriamo: Flussi Operativi per Profilo' : 'How We Work: Workflows by Profile'}</h2>
            <p className="text-slate-400 mt-2">
              {isIt 
                ? 'I nostri specialisti utilizzano la suite per eseguire attività precise. Seleziona il ruolo.' 
                : 'Our specialists leverage the suite to execute high-precision workflows. Select a role.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Buttons */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
              {profiles.map((prof, idx) => {
                const Icon = prof.icon;
                const isSelected = selectedProfile === idx;
                return (
                  <button
                    key={prof.id}
                    onClick={() => { setSelectedProfile(idx); setActiveStep(0); }}
                    className={`flex items-center gap-3 p-4 rounded-xl text-left border transition-all duration-300 ${
                      isSelected 
                        ? 'bg-indigo-600 border-indigo-500 shadow-lg shadow-indigo-600/20 text-white translate-x-1' 
                        : 'bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                    <span className="font-semibold text-sm truncate">{prof.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Profile Detail Content */}
            <div className="lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProfile}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-indigo-950/50 border border-indigo-500/30 text-indigo-400">
                      {React.createElement(currentProfile.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentProfile.title}</h3>
                      <p className="text-sm text-indigo-300">{currentProfile.tagline}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-indigo-500 bg-indigo-950/20 p-4 rounded-r-lg text-slate-300 italic text-sm mb-8 my-6">
                    {currentProfile.phrase}
                  </blockquote>

                  {/* Tools Box */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      {isIt ? 'La nostra cassetta degli attrezzi per questo profilo' : 'Internal tools for this profile'}
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {currentProfile.tools.map((tool, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Paths */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      {isIt ? 'Flussi operativi passo-passo' : 'Step-by-step workflows'}
                    </h4>
                    
                    {/* Path Selector Tabs */}
                    <div className="flex border-b border-white/10 gap-4 mb-4 overflow-x-auto pb-1">
                      {currentProfile.paths.map((path, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveStep(i)}
                          className={`pb-2 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                            activeStep === i 
                              ? 'border-indigo-500 text-indigo-400' 
                              : 'border-transparent text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {path.name}
                        </button>
                      ))}
                    </div>

                    {/* Active Path Steps */}
                    <div className="space-y-4 bg-slate-900/50 p-4 rounded-xl border border-white/5">
                      {currentProfile.paths[activeStep]?.steps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-950 border border-indigo-500/50 text-indigo-300 text-xs font-bold mt-0.5 flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-slate-300 leading-relaxed">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guardrails */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      {isIt ? 'Guard-rail di sicurezza (Cosa blocchiamo)' : 'Safety Guardrails'}
                    </h4>
                    <div className="space-y-2">
                      {currentProfile.guardrails.map((guard, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm bg-amber-950/20 border border-amber-500/20 p-3 rounded-lg text-amber-200/90">
                          <AlertTriangle className="w-4.5 h-4.5 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span>{guard}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ─── CREATIVE STUDIO & ADVERSARIAL JUDGE ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/5 bg-slate-950">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text side */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs mb-4">
                <Zap className="w-3.5 h-3.5 text-indigo-400" />
                {isIt ? 'CREATIVE STUDIO & PERSUASIONE' : 'CREATIVE STUDIO & PERSUASION'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {isIt ? 'La Filiera di Creazione & Giudice Avversariale' : 'Creative Generation & Adversarial Judge'}
              </h2>
              <p className="text-slate-400 mt-6 leading-relaxed">
                {isIt
                  ? 'Il nostro motore creativo trasforma la landing page in concept basandosi sulla mappa psicologica delle ferite e dei bisogni di Maslow del target.'
                  : 'Our creative engine crawls the landing page, converting claims into conceptual angles rooted in psychological wounds and Maslow needs.'}
              </p>
              <p className="text-slate-400 mt-4 leading-relaxed">
                {isIt
                  ? 'Prima di proporre qualsiasi campagna all\'account manager (in stato PAUSA), un modulo indipendente fa da "avvocato dell\'avversario", applicando regole rigide per escludere testi pixelati, clichè da stock o ganci manipolatori.'
                  : 'Before staging any campaign (strictly as PAUSED), an independent Adversarial module acts as a validator, applying strict rules to drop pixelated text overlays, visual stock clichés, or manipulative claims.'}
              </p>
            </div>

            {/* Interactive Simulation side */}
            <div className="lg:col-span-7 bg-slate-900 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 text-xs text-indigo-400/50 uppercase tracking-widest font-mono">
                {isIt ? 'simulatore_api' : 'api_simulator'}
              </div>
              
              <h3 className="font-mono text-sm text-slate-300 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                POST /api/v1/creative/generate-campaign
              </h3>

              {/* Simulation Box */}
              <div className="bg-slate-950 rounded-xl p-4 border border-white/10 font-mono text-xs text-slate-300 min-h-64 flex flex-col justify-between mb-4">
                <div className="space-y-2 overflow-y-auto max-h-56 scrollbar-thin">
                  {simulationLogs.length === 0 ? (
                    <div className="text-slate-500 italic py-12 text-center">
                      {isIt ? 'Clicca "Avvia Simulazione" per far girare la filiera creativa.' : 'Click "Run Simulation" to execute the creative generation API.'}
                    </div>
                  ) : (
                    simulationLogs.map((log, i) => (
                      <div key={i} className={log.startsWith('[SYSTEM]') ? 'text-indigo-400 font-semibold' : 'text-slate-300 pl-4'}>
                        {log}
                      </div>
                    ))
                  )}
                </div>

                {simulationRunning && (
                  <div className="flex items-center gap-2 mt-4 text-indigo-400 animate-pulse">
                    <HelpCircle className="w-4 h-4 animate-spin" />
                    <span>{isIt ? 'Elaborazione step...' : 'Processing step...'}</span>
                  </div>
                )}
              </div>

              {/* Steps indicators */}
              <div className="grid grid-cols-5 gap-1 mb-6 text-center text-[10px] font-mono text-slate-500">
                {simulationSteps.map((step, idx) => (
                  <div key={idx} className={`p-1 rounded ${idx === simStep && simulationRunning ? 'bg-indigo-950 text-indigo-300 font-bold border border-indigo-500/30' : ''}`}>
                    Step {idx + 1}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <button
                  disabled={simulationRunning}
                  onClick={startSimulation}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    simulationRunning 
                      ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95 shadow-md shadow-indigo-600/10'
                  }`}
                >
                  <Play className="w-4 h-4" />
                  {isIt ? 'Avvia Simulazione API' : 'Run API Simulation'}
                </button>
                <span className="text-xs text-slate-500">
                  {isIt ? 'Output finale: Campagna Meta in PAUSA' : 'Final output: Staged Meta Campaign (PAUSED)'}
                </span>
              </div>
            </div>
          </div>

          {/* Adversarial Criteria Table */}
          <div className="mt-16 bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" />
              {isIt ? 'La Rubrica del Giudice Avversariale (Criteri di Scarto)' : 'Adversarial Judge Guidelines (Filter Criteria)'}
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 uppercase text-xs tracking-wider">
                    <th className="pb-3 pr-4">{isIt ? 'Famiglia' : 'Category'}</th>
                    <th className="pb-3 px-4">{isIt ? 'Criterio' : 'Rule'}</th>
                    <th className="pb-3 px-4">{isIt ? 'Trigger di Scarto (Cosa blocchiamo)' : 'Rejection Trigger (What we block)'}</th>
                    <th className="pb-3 pl-4">{isIt ? 'Fonte' : 'Source'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-indigo-400 text-xs uppercase tracking-wider">A. {isIt ? 'Etica / Persuasione' : 'Ethics & Trust'}</td>
                    <td className="py-4 px-4 font-medium text-white">{isIt ? 'Test del Beneficiario' : 'Beneficiary Test'}</td>
                    <td className="py-4 px-4 text-slate-400">{isIt ? 'L\'unico a trarre beneficio è l\'inserzionista; la promessa non corrisponde a un valore reale per l\'utente.' : 'The advertiser is the sole beneficiary; the hook fails to deliver true value to the user.'}</td>
                    <td className="py-4 pl-4 text-xs font-mono text-slate-500">Cialdini/HCE</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-indigo-400 text-xs uppercase tracking-wider">A. {isIt ? 'Etica / Persuasione' : 'Ethics & Trust'}</td>
                    <td className="py-4 px-4 font-medium text-white">{isIt ? 'Falsa Scarsità' : 'Fake Urgency'}</td>
                    <td className="py-4 px-4 text-slate-400">{isIt ? 'Countdown, finti stock o limitazioni temporali non reali ed inventati.' : 'Countdown timers or limited stock claims that are not backed by real backend inventory.'}</td>
                    <td className="py-4 pl-4 text-xs font-mono text-slate-500">Ipnotica</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-indigo-400 text-xs uppercase tracking-wider">B. {isIt ? 'Efficacia Creativa' : 'Creative Quality'}</td>
                    <td className="py-4 px-4 font-medium text-white">{isIt ? 'Telling vs Showing' : 'Telling vs Showing'}</td>
                    <td className="py-4 px-4 text-slate-400">{isIt ? 'Dichiarare l\'emozione ("Ti senti solo?") invece di mostrarla con una scena o un trigger osservabile.' : 'Declaring the emotion ("Are you stressed?") rather than showing a physical cue (bills, clock).'}</td>
                    <td className="py-4 pl-4 text-xs font-mono text-slate-500">Ackerman/Puglisi</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-indigo-400 text-xs uppercase tracking-wider">B. {isIt ? 'Efficacia Creativa' : 'Creative Quality'}</td>
                    <td className="py-4 px-4 font-medium text-white">{isIt ? 'Cliché Visivo' : 'Stock Visual Clichés'}</td>
                    <td className="py-4 px-4 text-slate-400">{isIt ? 'Immagini stock patinate, sorrisi esagerati da orecchio a orecchio, o grafiche slegate dal brand.' : 'Glossy, unnatural model smiles, generic business stock visual tropes, or unanchored illustrations.'}</td>
                    <td className="py-4 pl-4 text-xs font-mono text-slate-500">Mind Marketing</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-indigo-400 text-xs uppercase tracking-wider">C. {isIt ? 'Coerenza / Policy' : 'Decorum & Policy'}</td>
                    <td className="py-4 px-4 font-medium text-white">{isIt ? 'Leggibilità Rotta' : 'Readability Check'}</td>
                    <td className="py-4 px-4 text-slate-400">{isIt ? 'Headline troppo lunghe (>3 parole complesse), testi ruotati o all-caps gridato.' : 'Headlines too long (>3 heavy content words), text rotated too much, or aggressive all-caps screaming.'}</td>
                    <td className="py-4 pl-4 text-xs font-mono text-slate-500">Dehaene</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-indigo-400 text-xs uppercase tracking-wider">C. {isIt ? 'Coerenza / Policy' : 'Decorum & Policy'}</td>
                    <td className="py-4 px-4 font-medium text-white">{isIt ? 'Policy Meta Evocate' : 'Meta Policy Flags'}</td>
                    <td className="py-4 px-4 text-slate-400">{isIt ? 'Riferimenti ad attributi personali fisici o psicologici ("hai questo disturbo?"), prima/dopo ingannevoli.' : 'Implicitly targeting personal attributes ("do you have anxiety?"), deceptive before/afters, or shock value.'}</td>
                    <td className="py-4 pl-4 text-xs font-mono text-slate-500">Facebook Policy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── IL MINIMO COMUNE (5 COSE DA SAPERE) ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">{isIt ? 'I 5 Principi di Affidabilità' : 'The 5 Core Principles'}</h2>
            <p className="text-slate-400 mt-2">
              {isIt 
                ? 'I cinque capisaldi che governano il nostro sistema di gestione e garantiscono trasparenza.' 
                : 'The five core tenets governing our management engine and guaranteeing transparency.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-white/[0.03] transition-all">
              <span className="text-2xl font-bold text-indigo-400">1</span>
              <h3 className="font-semibold text-lg mt-3">{isIt ? 'Come si Avvia' : 'Safe Bootup'}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {isIt 
                  ? 'Due processi separati: API (porta :8000) e UI (porta :8501). Se una pagina è grigia, è capability-gated: mancano gli accessi.' 
                  : 'Two isolated processes: API (:8000) and Streamlit UI (:8501). Greyed-out pages are capability-gated.'}
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-white/[0.03] transition-all">
              <span className="text-2xl font-bold text-indigo-400">2</span>
              <h3 className="font-semibold text-lg mt-3">{isIt ? 'Selettore Cliente' : 'Client Isolator'}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {isIt 
                  ? 'Il selettore in sidebar isola ogni account. Al cambio cliente la chat recupera la cronologia dedicata e la coda azioni si azzera.' 
                  : 'The client selector isolates each account. Switching clients dynamically recovers history and resets queues.'}
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-white/[0.03] transition-all">
              <span className="text-2xl font-bold text-indigo-400">3</span>
              <h3 className="font-semibold text-lg mt-3">{isIt ? 'Chat Scoped' : 'Scoped Chats'}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {isIt 
                  ? 'Quattro chat a disposizione: Globale (cross-source) e tre specifiche (GA4, Google Ads, Meta) che vedono solo la loro sorgente.' 
                  : 'Four AI chats: Global (cross-source) and three isolated scopes (GA4, GAds, Meta) restricted to their own data.'}
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-white/[0.03] transition-all">
              <span className="text-2xl font-bold text-indigo-400">4</span>
              <h3 className="font-semibold text-lg mt-3">{isIt ? 'Niente Scrive Solo' : 'No Auto-Write'}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {isIt 
                  ? 'Ciclo blindato: proponi → valida (dry-run) → checkbox → applica. Le nuove campagne nascono SEMPRE in PAUSA.' 
                  : 'Ironclad loop: stage → dry-run validation → checkbox → apply. New campaigns are staged as PAUSED.'}
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-indigo-500/20 hover:bg-white/[0.03] transition-all">
              <span className="text-2xl font-bold text-indigo-400">5</span>
              <h3 className="font-semibold text-lg mt-3">{isIt ? 'Job Asincroni' : 'Background Jobs'}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {isIt 
                  ? 'I compiti lunghi (takeover, Raggi X, batch creativi) girano in background con barra %, ETA e storico consultabile.' 
                  : 'Heavy scripts (takeover, X-Ray, creative batches) run in the background with progress bars, ETA, and history.'}
              </p>
            </div>
          </div>
        </section>

        {/* ─── LE TRE REGOLE D'ONESTÀ ──────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/5 bg-slate-900/40 rounded-3xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400">
              {isIt ? 'Le Tre Regole d\'Onestà' : 'The Three Rules of Honesty'}
            </h2>
            <p className="text-slate-400 mt-2">
              {isIt 
                ? 'I principi etici integrati direttamente nel codice per garantire l\'integrità delle decisioni analitiche.' 
                : 'The ethical principles compiled directly into our logic to protect analytical decision integrity.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 px-6 sm:px-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold">I</div>
              <div>
                <h3 className="font-bold text-lg text-white">{isIt ? 'No dati → No verdetti' : 'No Data → No Verdicts'}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {isIt
                    ? 'In assenza di misure solide (es. sotto il 50% di copertura ordini o lead CRM), il sistema si rifiuta di formulare valutazioni in denaro, degradando a qualitativo.'
                    : 'Without solid measurements (e.g., <50% of backend orders or CRM leads), the system halts monetary verdicts, falling back to qualitative statements.'}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold">II</div>
              <div>
                <h3 className="font-bold text-lg text-white">{isIt ? 'Spreco Type-Aware & Metrica' : 'Type-Aware Waste Check'}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {isIt
                    ? 'Una campagna upper-funnel non è considerata "spreco" solo perché ha zero conversioni dirette. La metrica si allinea alla modalità (CPL/CPA su lead-gen, POAS su e-commerce).'
                    : 'Upper-funnel campaigns are not classified as "waste" simply because direct conversions are zero. Performance metrics automatically align with the model (CPL/CPA or POAS).'}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold">III</div>
              <div>
                <h3 className="font-bold text-lg text-white">{isIt ? 'Ancoraggio all\'Artefatto' : 'Artifact Anchoring'}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  {isIt
                    ? 'Ogni variazione di rendimento deve essere agganciata a modifiche reali dell\'artefatto (annuncio, hash della landing, versione del copy) evitando giustificazioni qualitative generiche.'
                    : 'Every change in metrics must hook directly to the specific artifact version (exact ad asset, landing markdown version, copy hash).'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CALL TO ACTION ─────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-4 text-center py-16 relative z-10 border-t border-white/5 mb-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            {isIt ? 'Vuoi saperne di più sulla nostra gestione?' : 'Interested in Our Management Approach?'}
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            {isIt
              ? 'Prenota una sessione di audit. Analizziamo i tuoi canali di acquisizione (E-commerce o Lead Gen) ed evidenziamo dove l\'attuale fornitore sta lasciando margini e budget sul tavolo.'
              : 'Book an audit session. We will review your acquisition channels (E-commerce or Lead Gen) and pinpoint exactly where your current provider is leaking budget.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BOOKING_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all text-white active:scale-95 shadow-lg shadow-indigo-600/10"
            >
              {isIt ? 'Prenota un Audit gratuito' : 'Book a Free Audit'}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] rounded-xl font-bold transition-all text-slate-200 active:scale-95"
            >
              {isIt ? 'Messaggia l\'agenzia su WhatsApp' : 'Message the agency on WhatsApp'}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
