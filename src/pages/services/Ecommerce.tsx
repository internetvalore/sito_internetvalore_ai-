import React, { useState } from 'react';
import {
  ShoppingBag, TrendingUp, BarChart2, Target, Search, Zap, Eye, AlertCircle,
  CheckCircle, Clock, ArrowRight, ChevronDown, RotateCcw, Activity, Layers,
  DollarSign, PieChart, Globe, Star, Cpu, Database, LineChart, Package,
  RefreshCw, FileText, Users, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import HeroSection from '../../components/HeroSection';

// ─── Animazione scroll fade-in ──────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Badge Attivo / In arrivo ─────────────────────────────────────────────────
function StatusBadge({ active, lang }: { active: boolean; lang: string }) {
  return active ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
      <CheckCircle className="h-3 w-3" />
      {lang === 'it' ? 'Attivo' : 'Active'}
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
      <Clock className="h-3 w-3" />
      {lang === 'it' ? 'In arrivo' : 'Coming soon'}
    </span>
  );
}

// ─── Accordion FAQ ────────────────────────────────────────────────────────────
function AccordionItem({ question, answer, index, openIndex, setOpenIndex }: {
  question: string; answer: string; index: number;
  openIndex: number | null; setOpenIndex: (i: number | null) => void;
}) {
  const isOpen = openIndex === index;
  return (
    <div className="mb-4">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white border-t border-gray-100 rounded-b-lg">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Dati contenuto IT / EN ───────────────────────────────────────────────────
function getContent(language: string) {
  const it = language === 'it';

  return {
    hero: {
      title: it ? 'Il tuo e-commerce, guidato dal dato vero' : 'Your e-commerce, driven by real data',
      subtitle: it
        ? 'Non ottimizziamo a sensazione'
        : 'We don\'t optimise by gut feeling',
      description: it
        ? 'Misuriamo quanti dei tuoi ordini vediamo DAVVERO, scopriamo dove si spreca margine e agiamo con te sui numeri reali. Niente numeri gonfiati: quando la misura è rotta te lo diciamo — e la ripariamo.'
        : 'We measure how many of your orders we REALLY see, find where margin is wasted and act with you on real numbers. No inflated figures: when measurement is broken we tell you — and we fix it.',
    },

    problem: {
      sectionTitle: it ? 'Riconosci qualcuno di questi problemi?' : 'Do any of these sound familiar?',
      cards: it ? [
        {
          icon: BarChart2,
          title: 'Non sai quanto vendi DAVVERO',
          body: 'Il tuo analytics traccia solo una parte degli ordini reali; decidi su numeri bucati.'
        },
        {
          icon: DollarSign,
          title: 'Spendi in ads senza sapere cosa rende',
          body: 'Vedi il fatturato, non il margine: alcune campagne vendono ma erodono profitto.'
        },
        {
          icon: Database,
          title: 'I dati sono tanti, le decisioni poche',
          body: 'Dashboard piene, ma nessuno ti dice PERCHÉ e cosa fare.'
        },
        {
          icon: AlertCircle,
          title: 'Ottimizzi a sensazione',
          body: 'Cambi campagne e prezzi senza un ciclo che misuri l\'esito di ogni mossa.'
        }
      ] : [
        {
          icon: BarChart2,
          title: 'You don\'t know how much you REALLY sell',
          body: 'Your analytics only tracks part of real orders; you make decisions on broken numbers.'
        },
        {
          icon: DollarSign,
          title: 'You spend on ads without knowing what works',
          body: 'You see revenue, not margin: some campaigns sell but erode profit.'
        },
        {
          icon: Database,
          title: 'Lots of data, few decisions',
          body: 'Dashboards are full, but no one tells you WHY or what to do.'
        },
        {
          icon: AlertCircle,
          title: 'You optimise by gut feeling',
          body: 'You change campaigns and prices without a cycle that measures the outcome of each move.'
        }
      ]
    },

    magic: {
      superTitle: it ? 'LA PIATTAFORMA' : 'THE PLATFORM',
      sectionTitle: it
        ? 'Tutto quello che facciamo lavorare per il tuo e-commerce'
        : 'Everything we put to work for your e-commerce',
      sectionSubtitle: it
        ? 'Ogni funzione serve un solo scopo: decisioni difendibili, raccontabili col dato. La regola d\'oro: niente dati affidabili, niente verdetti.'
        : 'Every function serves one purpose: decisions that are defensible and explainable with data. The golden rule: no reliable data, no verdicts.',
      closingLine: it
        ? 'Un solo faro guida ogni scelta: il tuo interesse, testato dalla capacità di raccontare e difendere ogni decisione con i dati.'
        : 'A single guide for every choice: your interest, tested by the ability to tell and defend every decision with data.',
      blocks: it ? [
        {
          active: true,
          icon: Eye,
          title: 'Il dato vero: quanto vendi davvero',
          points: [
            'Confrontiamo gli ordini che i tuoi strumenti VEDONO con quelli REALI a gestionale (Shopify): saprai esattamente quanto è sottostimato il tuo ROAS.',
            'Ogni verdetto in euro porta con sé quanto fidarsi (copertura + attribuzione). Sotto una certa soglia il giudizio diventa onestamente qualitativo.',
            'Sentinella del singolo evento: se un tag si rompe solo sull\'\'acquisto\' lo scopri il primo giorno, non a fine mese.',
            'Multi-mercato e multi-valuta ai tassi ufficiali BCE.'
          ]
        },
        {
          active: true,
          icon: Search,
          title: 'Google Ads a raggi X',
          points: [
            'Audit strumentato in 5 fasi (strategia, opportunità, qualità, keyword, landing) + salute account (prodotti disapprovati, Quality Score, geo).',
            'Budget o posizionamento? Ti diciamo se perdi domanda perché il budget è troppo basso o perché i concorrenti hanno annunci migliori.',
            'Miniera dei termini di ricerca: negative da tagliare e nuove keyword che convertono.',
            'Prodotti Shopping/Performance Max per singolo articolo: quale prodotto trascina giù il ROAS. Interventi sempre con la tua approvazione.'
          ]
        },
        {
          active: true,
          icon: Users,
          title: 'Meta Ads e Creatività',
          points: [
            'ROAS reale on-site: colleghiamo la spesa di ogni campagna Meta al comportamento vero sul sito.',
            'Prodotti a catalogo (DPA): performance per singolo articolo, con i prodotti che spendono senza vendere.',
            'Saturazione di frequenza + verdetto di scalabilità: quale pubblico puoi spingere e quale è saturo.',
            'Fabbrica di creatività: genera angoli diversi → giudice AI pre-pubblicazione → varianti A/B → impara quale angolo costa meno per risultato.'
          ]
        },
        {
          active: true,
          icon: TrendingUp,
          title: 'Oltre il ROAS: il profitto vero',
          points: [
            'POAS (profitto sulla spesa): dove conosci il margine, giudichiamo sul guadagno, non sul fatturato.',
            'Vista d\'insieme (blended): spesa totale Google+Meta vs ricavo → efficienza complessiva (MER), CAC e POAS d\'insieme.',
            'Sensibilità dell\'attribuzione: ti diciamo se un ROAS regge cambiando finestra di misura — merito solido o miraggio? — prima di scalare.',
            '(In arrivo: POAS reale per singolo prodotto dai costi importati dal tuo gestionale.)'
          ]
        },
        {
          active: true,
          icon: ShoppingBag,
          title: 'Il tuo negozio ai raggi X: funnel, prodotti, clienti',
          points: [
            'Funnel reale vista prodotto → carrello → checkout → acquisto, per canale e dispositivo.',
            'Top prodotti + regola 80/20 + "visti ma non comprati": candidati a problemi di scheda, prezzo o disponibilità.',
            'Merchandising on-site: quali vetrine (home, ricerca, categorie, correlati, promo) vendono davvero.',
            'Retention per coorte: chi acquisisci oggi torna più o meno di chi acquisivi mesi fa?'
          ]
        },
        {
          active: true,
          icon: Zap,
          title: 'Diagnosi e cause: ti spieghiamo il perché',
          points: [
            '"Perché è cambiato X": scomponiamo un calo nei driver (traffico × conversione × scontrino medio) e diciamo quanto è tracciamento rotto e quanto performance vera.',
            'Cosa è cambiato nell\'artefatto: quali landing o creatività sono state toccate nella finestra del calo.',
            'Anomalie e alert proattivi: ROAS sotto il break-even, pacing anomalo, dati stantii, tracciamento rotto — scoperti il primo giorno.',
            'Pulse live durante lanci e promo: sta arrivando traffico ADESSO? La campagna gira?'
          ]
        },
        {
          active: true,
          icon: Globe,
          title: 'SEO, Search Console e concorrenza',
          points: [
            'Opportunità SEO: keyword a un passo dalla prima pagina (posizioni 4-20) e il valore organico in euro di ogni landing.',
            'Copertura indice (le tue pagine sono davvero in Google?) e Core Web Vitals: un sito lento perde la gara prima ancora dell\'annuncio.',
            'Mappa del sito + pagine orfane + cannibalizzazione (più pagine che si contendono la stessa query).',
            'Concorrenza: chi ti batte e su cosa (content gap), volume e stagionalità della domanda per scegliere il timing del lancio.'
          ]
        },
        {
          active: true,
          icon: RefreshCw,
          title: 'Il motore che ottimizza e rende conto',
          points: [
            'Il ciclo continuo: MISURA → PROPONE una mossa conservativa → APPLICA solo dopo la tua approvazione → MISURA l\'esito reale → CALIBRA.',
            'Report che decidono: COSA, PERCHÉ, QUANTO FIDARSI, HA FUNZIONATO — con badge di affidabilità del tracciamento.',
            'Onestà cablata: un fix di tracciamento è "spesa resa misurabile", mai contato come ricavo.',
            'Memoria del consulente: timeline di decisioni ed esiti per cliente, briefing di ripresa. Mai dati tra clienti diversi.'
          ]
        }
      ] : [
        {
          active: true,
          icon: Eye,
          title: 'Real data: how much you actually sell',
          points: [
            'We compare orders your tools SEE with REAL orders from your backend (Shopify): you\'ll know exactly how much your ROAS is underestimated.',
            'Every euro-denominated verdict carries its confidence level (coverage + attribution). Below a threshold, we give an honest qualitative judgement.',
            'Single-event sentinel: if a tag breaks only on \'purchase\' you find out on day one, not at month end.',
            'Multi-market and multi-currency at official ECB rates.'
          ]
        },
        {
          active: true,
          icon: Search,
          title: 'Google Ads X-ray',
          points: [
            '5-phase instrumented audit (strategy, opportunities, quality, keywords, landing) + account health (disapproved products, Quality Score, geo).',
            'Budget or positioning? We tell you whether you\'re losing volume because budget is too low or because competitors have better ads.',
            'Search term mine: negatives to cut and new converting keywords.',
            'Shopping/Performance Max per product: which product drags down ROAS. Every action requires your approval.'
          ]
        },
        {
          active: true,
          icon: Users,
          title: 'Meta Ads and Creatives',
          points: [
            'Real on-site ROAS: we connect each Meta campaign\'s spend to actual on-site behaviour.',
            'Catalogue products (DPA): performance per item, with products that spend without selling.',
            'Frequency saturation + scalability verdict: which audience you can push and which is saturated.',
            'Creative factory: generate multiple angles → AI pre-publication judge → A/B variants → learns which angle costs less per result.'
          ]
        },
        {
          active: true,
          icon: TrendingUp,
          title: 'Beyond ROAS: true profit',
          points: [
            'POAS (profit on ad spend): where you know margin, we judge on profit, not revenue.',
            'Blended view: total Google+Meta spend vs revenue → overall efficiency (MER), CAC and blended POAS.',
            'Attribution sensitivity: we tell you whether a ROAS holds when you change the measurement window — solid merit or mirage? — before scaling.',
            '(Coming soon: real POAS per product from costs imported from your backend.)'
          ]
        },
        {
          active: true,
          icon: ShoppingBag,
          title: 'Store X-ray: funnel, products, customers',
          points: [
            'Real funnel: product view → cart → checkout → purchase, by channel and device.',
            'Top products + 80/20 rule + "viewed but not bought": candidates for page, price or availability issues.',
            'On-site merchandising: which shelves (home, search, categories, related, promo) actually sell.',
            'Cohort retention: are customers you acquire today returning more or less than those acquired months ago?'
          ]
        },
        {
          active: true,
          icon: Zap,
          title: 'Diagnosis and causes: we explain the why',
          points: [
            '"Why did X change": we decompose a drop into its drivers (traffic × conversion × average order) and say how much is broken tracking vs real performance.',
            'What changed in the artefact: which landings or creatives were touched in the drop window.',
            'Proactive anomaly alerts: ROAS below break-even, anomalous pacing, stale data, broken tracking — found on day one.',
            'Live pulse during launches and promos: is traffic arriving NOW? Is the campaign running?'
          ]
        },
        {
          active: true,
          icon: Globe,
          title: 'SEO, Search Console and competition',
          points: [
            'SEO opportunities: keywords one step from page one (positions 4-20) and the organic value in euros of each landing.',
            'Index coverage (are your pages really in Google?) and Core Web Vitals: a slow site loses before the ad even runs.',
            'Site map + orphan pages + cannibalization (multiple pages competing for the same query).',
            'Competition: who beats you and on what (content gap), volume and seasonality to choose launch timing.'
          ]
        },
        {
          active: true,
          icon: RefreshCw,
          title: 'The engine that optimises and reports',
          points: [
            'Continuous cycle: MEASURE → PROPOSES a conservative action → APPLIES only after your approval → MEASURES real outcome → CALIBRATES.',
            'Decision-making reports: WHAT, WHY, HOW MUCH TO TRUST, DID IT WORK — with tracking reliability badges.',
            'Built-in honesty: a tracking fix is "spend made measurable", never counted as revenue.',
            'Consultant memory: decision and outcome timeline per client, resumption briefing. Never data shared between clients.'
          ]
        }
      ]
    },

    howItWorks: {
      sectionTitle: it ? 'Come funziona' : 'How it works',
      tagline: it
        ? 'Nessuna mossa alla cieca: ogni azione entra nel ciclo e viene misurata.'
        : 'No blind moves: every action enters the cycle and is measured.',
      steps: it ? [
        { num: '1', label: 'MISURA', desc: 'Raccogliamo il dato vero da tutte le fonti e ne verifichiamo l\'affidabilità.' },
        { num: '2', label: 'CAPISCE', desc: 'Troviamo anomalie, cause e opportunità, e ti spieghiamo il perché.' },
        { num: '3', label: 'PROPONE E APPLICA', desc: 'Mettiamo in campo le mosse, ma solo dopo la tua approvazione.' },
        { num: '4', label: 'VERIFICA L\'ESITO', desc: 'Misuriamo il risultato reale di ogni mossa e ricominciamo, più informati.' }
      ] : [
        { num: '1', label: 'MEASURES', desc: 'We gather real data from all sources and verify its reliability.' },
        { num: '2', label: 'UNDERSTANDS', desc: 'We find anomalies, causes and opportunities, and explain the why.' },
        { num: '3', label: 'PROPOSES & APPLIES', desc: 'We deploy actions, but only after your approval.' },
        { num: '4', label: 'VERIFIES OUTCOME', desc: 'We measure the real result of every action and start again, better informed.' }
      ],
      promises: it ? [
        {
          icon: Eye,
          title: 'Il dato vero, non quello comodo',
          body: 'Ti diciamo quanti ordini vediamo davvero; se la misura è rotta, te lo diciamo e la ripariamo.'
        },
        {
          icon: DollarSign,
          title: 'Il profitto, non il fatturato',
          body: 'Giudichiamo sul POAS, il guadagno al netto del costo del venduto.'
        },
        {
          icon: ShieldCheck,
          title: 'Ogni decisione raccontabile e reversibile',
          body: 'Vedi prima cosa accadrà, approvi, e misuriamo l\'esito: sai se ha funzionato, non lo speri.'
        }
      ] : [
        {
          icon: Eye,
          title: 'Real data, not convenient data',
          body: 'We tell you how many orders we really see; if measurement is broken, we tell you and fix it.'
        },
        {
          icon: DollarSign,
          title: 'Profit, not revenue',
          body: 'We judge on POAS, the gain net of cost of goods sold.'
        },
        {
          icon: ShieldCheck,
          title: 'Every decision explainable and reversible',
          body: 'You see what will happen first, approve, and we measure the outcome: you know if it worked, you don\'t hope.'
        }
      ]
    },

    roadmap: {
      sectionTitle: it ? 'Stiamo già costruendo il prossimo vantaggio' : 'We\'re already building your next advantage',
      items: it ? [
        { icon: BarChart2, title: 'Radiografia della misura (GA4 e Meta)', body: 'Cosa i tuoi analytics e il pixel vedono e, soprattutto, cosa NON vedono.' },
        { icon: Package, title: 'Merchant Center e Shopping', body: 'Salute del feed (prodotti disapprovati/offline), competitività di prezzo per prodotto e buchi di assortimento.' },
        { icon: Activity, title: 'Recupero del tracciamento perso', body: 'Invio eventi lato server a Meta (CAPI) e conversioni offline a Google, per non perdere fino al 40% delle conversioni da mobile.' },
        { icon: PieChart, title: 'Profitto reale per prodotto', body: 'POAS calcolato sui costi importati dal tuo gestionale, campagna per campagna.' },
        { icon: Cpu, title: 'Ottimizzatore automatico schedulato', body: 'Il ciclo che gira da solo ogni settimana, senza attendere che qualcuno lo chieda.' },
        { icon: FileText, title: 'Campagne generate dal sito', body: 'Dalla mappa dei tuoi contenuti a campagne Google e Meta già pronte.' },
        { icon: LineChart, title: 'Misurare anche senza tracciamento (MMM causale)', body: 'La stella polare: stimare il ritorno reale di ogni canale anche dove cookie e tag non arrivano.' }
      ] : [
        { icon: BarChart2, title: 'Measurement X-ray (GA4 and Meta)', body: 'What your analytics and pixel see and, above all, what they DON\'T see.' },
        { icon: Package, title: 'Merchant Center and Shopping', body: 'Feed health (disapproved/offline products), price competitiveness per product and assortment gaps.' },
        { icon: Activity, title: 'Lost tracking recovery', body: 'Server-side event sending to Meta (CAPI) and offline conversions to Google, to avoid losing up to 40% of mobile conversions.' },
        { icon: PieChart, title: 'Real profit per product', body: 'POAS calculated on costs imported from your backend, campaign by campaign.' },
        { icon: Cpu, title: 'Scheduled automatic optimiser', body: 'The cycle that runs by itself every week, without waiting for someone to ask.' },
        { icon: FileText, title: 'Site-generated campaigns', body: 'From your content map to ready-made Google and Meta campaigns.' },
        { icon: LineChart, title: 'Measuring even without tracking (causal MMM)', body: 'The north star: estimating the real return of every channel even where cookies and tags don\'t reach.' }
      ]
    },

    faq: {
      sectionTitle: it ? 'Domande frequenti' : 'Frequently asked questions',
      items: it ? [
        {
          q: 'Funziona con Shopify / WooCommerce / il mio gestionale?',
          a: 'Sì. Lavoriamo con Shopify, WooCommerce e i principali gestionali. L\'integrazione avviene nella fase iniziale di onboarding: analizziamo quali dati possiamo estrarre e costruiamo il collegamento tra gli ordini del gestionale e quelli tracciati dagli strumenti di advertising.'
        },
        {
          q: 'Dovete accedere ai miei account Google Ads, Meta e Analytics?',
          a: 'Sì, è necessario. Lavoriamo in modalità "visualizzazione" o "amministratore" a seconda delle operazioni previste. Non compiamo mai azioni sugli account senza prima averle concordate con te.'
        },
        {
          q: 'In quanto tempo vedo i primi risultati?',
          a: 'L\'audit iniziale e la prima diagnosi sono pronti entro le prime settimane dall\'onboarding. I risultati delle ottimizzazioni sulle campagne si misurano tipicamente su un orizzonte di 4-8 settimane, perché le conversioni Google e Meta arrivano in ritardo rispetto al click.'
        },
        {
          q: 'Applicate modifiche alle campagne senza chiedermelo?',
          a: 'No. Ogni mossa — keyword, offerta, budget, creatività — ti viene proposta con una spiegazione e una stima dell\'effetto atteso. Applichiamo solo dopo la tua approvazione esplicita. Ogni intervento è tracciato e reversibile.'
        },
        {
          q: 'Come misurate il valore che portate?',
          a: 'Con un doppio formato di report: uno operativo (metriche, anomalie, azioni intraprese) e uno di valore in euro per chi guida l\'azienda. Ogni raccomandazione riporta il tasso di successo storico delle decisioni simili prese in passato.'
        }
      ] : [
        {
          q: 'Does it work with Shopify / WooCommerce / my backend?',
          a: 'Yes. We work with Shopify, WooCommerce and major backends. Integration happens during the initial onboarding phase: we analyse which data we can extract and build the connection between backend orders and those tracked by advertising tools.'
        },
        {
          q: 'Do you need access to my Google Ads, Meta and Analytics accounts?',
          a: 'Yes, it is required. We work in "view" or "admin" mode depending on the planned operations. We never take actions on accounts without first agreeing them with you.'
        },
        {
          q: 'How long before I see the first results?',
          a: 'The initial audit and first diagnosis are ready within the first weeks of onboarding. Campaign optimisation results are typically measured over a 4-8 week horizon, because Google and Meta conversions arrive late relative to the click.'
        },
        {
          q: 'Do you apply campaign changes without asking me?',
          a: 'No. Every action — keyword, bid, budget, creative — is proposed to you with an explanation and an estimated expected effect. We apply only after your explicit approval. Every action is tracked and reversible.'
        },
        {
          q: 'How do you measure the value you bring?',
          a: 'With a dual-format report: an operational one (metrics, anomalies, actions taken) and a euro-value one for company leadership. Every recommendation shows the historical success rate of similar past decisions.'
        }
      ]
    },

    cta: {
      title: it ? 'Pronto a far crescere il tuo e-commerce sul dato vero?' : 'Ready to grow your e-commerce on real data?',
      btnConsulenza: it ? 'Prenota una Consulenza Gratuita' : 'Book a Free Consultation',
      callLabel: it ? 'Chiama Ora' : 'Call Now',
    }
  };
}

// ─── Componente principale ────────────────────────────────────────────────────
export default function Ecommerce() {
  const { language } = useLanguage();
  const c = getContent(language);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const metaTitles: Record<string, string> = {
    it: 'E-commerce | Vendi di Più con il Dato Reale | Internet Valore',
    en: 'E-commerce | Sell More with Real Data | Internet Valore'
  };
  const metaDescs: Record<string, string> = {
    it: 'Ottimizza il tuo e-commerce con dati reali: misura gli ordini veri, ottimizza Google Ads e Meta, aumenta il profitto. Consulenza gratuita.',
    en: 'Optimise your e-commerce with real data: measure true orders, optimise Google Ads and Meta, increase profit. Free consultation.'
  };

  return (
    <>
      <MetaTags
        title={metaTitles[language] ?? metaTitles.it}
        description={metaDescs[language] ?? metaDescs.it}
        path="/services/ecommerce"
      />
      <div className="bg-gradient-to-b from-white to-gray-50">

        {/* ── HERO ── */}
        <HeroSection
          title={c.hero.title}
          subtitle={c.hero.subtitle}
          description={c.hero.description}
          imageSrc="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        {/* ── CTA HERO ── */}
        <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-4">
          <Link
            to={`/${language}/contact`}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            {c.cta.btnConsulenza}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="tel:800940213"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            {c.cta.callLabel} 800 940 213
          </a>
        </Section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── IL PROBLEMA ── */}
          <Section className="py-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              {c.problem.sectionTitle}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {c.problem.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-400 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-red-50 flex items-center justify-center">
                      <card.icon className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{card.title}</h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">{card.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ── LE MAGIE ── */}
          <Section className="py-16">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
                {c.magic.superTitle}
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {c.magic.sectionTitle}
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-base leading-relaxed">
                {c.magic.sectionSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {c.magic.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <block.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{block.title}</h3>
                    </div>
                    <StatusBadge active={block.active} lang={language} />
                  </div>
                  <ul className="space-y-2">
                    {block.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <Section className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
              <p className="text-lg font-semibold text-blue-800 italic">
                "{c.magic.closingLine}"
              </p>
            </Section>
          </Section>

          {/* ── COME FUNZIONA ── */}
          <Section className="py-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              {c.howItWorks.sectionTitle}
            </h2>

            {/* Steps numerati */}
            <div className="relative">
              {/* Linea orizzontale desktop */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200" aria-hidden="true" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {c.howItWorks.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold shadow-md mb-4">
                      {step.num}
                    </div>
                    <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-1">{step.label}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    {/* Freccia circolare: solo dopo l'ultimo step, torna all'1 */}
                    {i === 3 && (
                      <div className="mt-3 flex items-center gap-1 text-xs text-blue-400 font-medium">
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>{language === 'it' ? 'torna al passo 1' : 'back to step 1'}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-center text-gray-500 italic">{c.howItWorks.tagline}</p>

            {/* Tre promesse */}
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {c.howItWorks.promises.map((pr, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <pr.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{pr.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pr.body}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* ── IN ARRIVO ── */}
          <Section className="py-16">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 mb-3">
                  <Clock className="h-3 w-3" />
                  {language === 'it' ? 'In sviluppo' : 'In development'}
                </span>
                <h2 className="text-2xl font-extrabold text-gray-900">{c.roadmap.sectionTitle}</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {c.roadmap.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-8 w-8 rounded-md bg-amber-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-amber-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>

          {/* ── FAQ ── */}
          <Section className="py-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
              {c.faq.sectionTitle}
            </h2>
            <div className="max-w-3xl mx-auto">
              {c.faq.items.map((item, i) => (
                <AccordionItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  index={i}
                  openIndex={faqOpen}
                  setOpenIndex={setFaqOpen}
                />
              ))}
            </div>
          </Section>

          {/* ── CTA FINALE ── */}
          <Section className="py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="px-6 py-14 sm:px-12 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
                  {c.cta.title}
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link
                    to={`/${language}/contact`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
                  >
                    {c.cta.btnConsulenza}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <a
                    href="tel:800940213"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    {c.cta.callLabel} 800 940 213
                  </a>
                </div>
              </div>
            </motion.div>
          </Section>

        </div>
      </div>
    </>
  );
}
