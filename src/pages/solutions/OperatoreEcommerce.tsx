import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  Globe, ShieldCheck, Activity, ChevronDown, CheckCircle,
  AlertCircle, Phone, DollarSign, Compass, Layers
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function OperatoreEcommerce() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER L\'OPERATORE E-COMMERCE MULTI-MERCATO',
    title: 'Controllo multivaluta BCE e riallocazione budget estero',
    subtitle: 'Come gestire cataloghi e budget pubblicitari in N paesi e N valute, proteggendo la contabilità e massimizzando il POAS locale.',
    painsTitle: 'I punti di dolore tipici delle vendite internazionali',
    pains: [
      {
        q: 'Le conversioni di valuta nei miei report sono approssimative, sballando i totali di spesa e fatturato.',
        a: 'Il nostro sistema segue il "Contratto dei tre stati". I numeri sono sempre presentati o in Aggregato-EUR (convertiti con i tassi BCE ufficiali del giorno esatto della vendita), o Scoped (in valuta nativa per ottimizzare localmente), o bloccati (Fail-closed) se manca un tasso. Nessuna somma "quasi giusta".'
      },
      {
        q: 'Ho budget extra da investire ma non so quale paese estero abbia più margine di crescita.',
        a: 'Il playbook "market_scale_priority_demand_serp" scansiona la domanda di ricerca locale per ciascun paese, stima l\'Impression Share residua non ancora coperta, e ordina i mercati per priorità di scala, evitando di investire in paesi saturi.'
      },
      {
        q: 'Sposto budget pubblicitario da un paese all\'altro basandomi sui dati di GA4, ma temo che il tracciamento locale sia difettoso.',
        a: 'Il nostro playbook "geo_waste_reallocation_coverage_aware" controlla la copertura di tracciamento di ciascun paese prima di spostare budget. Se un paese estero ha conversioni basse perché il pixel locale è disattivato, il sistema blocca il trasferimento di budget per non penalizzarlo.'
      }
    ],
    solutionsTitle: 'I driver internazionali della nostra suite',
    solutions: [
      {
        icon: DollarSign,
        title: 'FX BCE Layer (Tassi Ufficiali)',
        desc: 'Un livello di conversione dinamico collegato alla Banca Centrale Europea. Converte ogni singola transazione al tasso storico corretto per eliminare i disallineamenti di bilancio.'
      },
      {
        icon: Compass,
        title: 'new_market_entry_demand_gate',
        desc: 'Un cancello a tre stadi per l\'espansione estera: verifica la presenza di domanda reale nella lingua nativa, valida la landing page locale e infine crea la campagna ads sempre in PAUSA.'
      },
      {
        icon: Globe,
        title: 'geo_holdout_test (Difference-in-Differences)',
        desc: 'Una metodologia statistica per misurare l\'incremento reale di una campagna pubblicitaria usando un paese estero non toccato dalle promozioni come gruppo di controllo.'
      }
    ],
    playbookTitle: 'Playbook Internazionali (Vena F)',
    playbookDesc: 'Le procedure per l\'ottimizzazione cross-border:',
    playbooks: [
      {
        cmd: 'market_scale_priority_demand_serp',
        desc: 'Mappa la pressione competitiva e la domanda non intercettata in ciascun mercato e calcola dove investire il prossimo euro.'
      },
      {
        cmd: 'geo_waste_reallocation_coverage_aware',
        desc: 'Ottimizza i budget tra paesi spostando risorse solo se le metriche di tracciamento superano la soglia minima di affidabilità.'
      },
      {
        cmd: 'new_market_entry_demand_gate',
        desc: 'Protocollo pre-lancio per valutare il potenziale di fatturato prima di stanziare budget promozionali all\'estero.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR MULTI-MARKET E-COMMERCE OPERATORS',
    title: 'BCE multi-currency control and foreign budget reallocation',
    subtitle: 'How to manage catalogs and ads spend in N countries and N currencies, securing bookkeeping and maximizing local POAS.',
    painsTitle: 'Typical pains of international retail and sales',
    pains: [
      {
        q: 'Currency conversions in my reports are approximations, skewing spend and revenue totals.',
        a: 'Our system follows the "Three States Contract". Figures are displayed in Aggregated-EUR (converted with official daily BCE rates corresponding to the transaction date), Scoped (native currency to optimize locally), or Fail-closed (halts if a rate is missing). No "approximate" sums.'
      },
      {
        q: 'I have extra budget to invest but don\'t know which foreign country has the highest growth margin.',
        a: 'The "market_scale_priority_demand_serp" playbook scans local search volumes in each target country, computes residual Impression Share, and orders markets by scale priority, preventing spend on saturated areas.'
      },
      {
        q: 'I shift ads budget between countries based on GA4 data, but fear local tracking is broken.',
        a: 'Our "geo_waste_reallocation_coverage_aware" playbook checks local tracking coverage before moving budget. If a country reports low conversions because a local pixel is dead, the system blocks the transfer to prevent penalizing it.'
      }
    ],
    solutionsTitle: 'International drivers in our suite',
    solutions: [
      {
        icon: DollarSign,
        title: 'BCE FX Layer (Official Rates)',
        desc: 'A dynamic conversion layer connected to the European Central Bank. Converts transactions at exact historical rates to eliminate balance discrepancies.'
      },
      {
        icon: Compass,
        title: 'new_market_entry_demand_gate',
        desc: 'A three-stage gate for international expansion: verifies actual local-language demand, validates localized landing pages, and creates campaigns in PAUSE.'
      },
      {
        icon: Globe,
        title: 'geo_holdout_test (Difference-in-Differences)',
        desc: 'A statistical framework measuring ad lift by using a non-promoted country market as a natural control group.'
      }
    ],
    playbookTitle: 'International Playbooks (F Vena)',
    playbookDesc: 'Procedures for cross-border optimization:',
    playbooks: [
      {
        cmd: 'market_scale_priority_demand_serp',
        desc: 'Maps competitive pressure and untapped search volumes in each market to find where to allocate incremental spend.'
      },
      {
        cmd: 'geo_waste_reallocation_coverage_aware',
        desc: 'Optimizes budget across countries, shifting assets only if local tracking setup metrics pass the reliability threshold.'
      },
      {
        cmd: 'new_market_entry_demand_gate',
        desc: 'Pre-launch evaluation protocol estimating sales potential before spending any budget abroad.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="min-h-screen">
      <MetaTags
        title={isIt ? 'Soluzioni E-commerce Multilingua e Multivaluta | Internet Valore' : 'Multi-Language & Multi-Currency E-commerce Solutions | Internet Valore'}
        description={isIt
          ? 'Riconciliazione multivaluta con tassi BCE ufficiali, riallocazione budget estero e Difference-in-Differences geografico.'
          : 'Multi-currency reconciliation with official BCE rates, foreign budget reallocation, and geographic Difference-in-Differences.'}
        path="/solutions/operatore-ecommerce"
        serviceType={isIt ? 'E-commerce Internazionale & Multi-valuta' : 'International E-commerce & Multi-currency'}
        serviceDescription={isIt
          ? 'Gestione e-commerce multi-mercato: riconciliazione multivaluta BCE, allocazione budget estero e gate espansione mercati a tre stadi.'
          : 'Multi-market e-commerce: BCE multi-currency reconciliation, demand-based international budget allocation, and three-stage market expansion.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Soluzioni' : 'Solutions', path: '/solutions' },
          { name: isIt ? 'Operatore E-commerce' : 'E-commerce Operator', path: '/solutions/operatore-ecommerce' }
        ]}
        faq={c.pains.map(p => ({ question: p.q, answer: p.a }))}
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section className="section shell border-b border-line text-center">
        <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 rise">
          {c.eyebrow}
        </span>
        <h1 className="title-xl hero-title mt-5 max-w-4xl mx-auto rise rise-1">
          {c.title}
        </h1>
        <p className="lede measure mx-auto mt-5 rise rise-2">
          {c.subtitle}
        </p>
      </section>

      {/* ─── PAIN ACCORDION ──────────────────────────────────────────────── */}
      <section className="section shell section-quiet border-t border-line">
        <div className="card rounded-[24px] max-w-3xl mx-auto">
          <h2 className="title-lg mb-6 text-center flex items-center justify-center gap-2">
            <AlertCircle className="h-5 w-5 text-ink-400 flex-shrink-0" />
            {c.painsTitle}
          </h2>
          <div>
            {c.pains.map((pain, idx) => {
              const isOpen = openPain === idx;
              return (
                <div key={idx} className="border-b border-line">
                  <button
                    id={`pain-btn-${idx}`}
                    onClick={() => setOpenPain(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center gap-4 py-4 text-left text-[1.05rem] font-semibold text-ink-900 transition-colors duration-220 hover:text-accent-600"
                  >
                    <span>{pain.q}</span>
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 text-ink-400 transition-transform duration-220 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[0.95rem] text-ink-600 leading-relaxed max-w-[62ch]">
                          {pain.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS GRID ──────────────────────────────────────────────── */}
      <section className="section shell border-t border-line">
        <h2 className="title-lg text-center mb-10">
          {c.solutionsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div key={idx} className={`card card-hover flex flex-col items-start h-full rise rise-${idx + 1}`}>
                <div className="icon-tile mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="title-lg mb-2">{sol.title}</h3>
                <p className="text-[0.95rem] text-ink-600 leading-relaxed">{sol.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── PLAYBOOK BLOCK ──────────────────────────────────────────────── */}
      <section className="section shell section-quiet border-t border-line">
        <div className="max-w-3xl mx-auto">
          <h2 className="title-lg mb-4 text-ink-900">
            {c.playbookTitle}
          </h2>
          <p className="text-[0.95rem] text-ink-600 mb-8 leading-relaxed">
            {c.playbookDesc}
          </p>
          <div className="space-y-4">
            {c.playbooks.map((pb, idx) => (
              <div key={idx} className="card card-hover border border-line p-6">
                <code className="text-accent-600 font-mono text-sm block mb-2">
                  {pb.cmd}
                </code>
                <p className="text-[0.95rem] text-ink-600 leading-relaxed">
                  {pb.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="section shell section-quiet border-t border-line text-center">
        <div className="card card-quiet rounded-[24px]">
          <h3 className="title-lg mb-4">
            {isIt ? 'Pronto a scalare i tuoi mercati esteri?' : 'Ready to scale your foreign markets?'}
          </h3>
          <p className="lede mb-6 max-w-xl mx-auto">
            {isIt 
              ? 'Effettua l\'allineamento multivaluta e scopri quali paesi hanno maggior potenziale residuo.'
              : 'Execute the multi-currency alignment and discover which countries show the highest residual potential.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="tel:800940213"
              className="btn btn-primary w-full sm:w-auto"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              {isIt ? 'Chiama Ora · 800 940 213' : 'Call Now · 800 940 213'}
            </a>
          </div>
        </div>
      </section>

      {/* ─── INTERLINKING NAV ────────────────────────────────────────────── */}
      <SolutionsNav />
    </div>
  );
}
