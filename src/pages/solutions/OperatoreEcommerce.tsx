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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
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
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni E-commerce Multilingua e Multivaluta | Internet Valore' : 'Multi-Language & Multi-Currency E-commerce Solutions | Internet Valore'}
        description={isIt 
          ? 'Riconciliazione multivaluta con tassi BCE ufficiali, riallocazione budget estero e Difference-in-Differences geografico.' 
          : 'Multi-currency reconciliation with official BCE rates, foreign budget reallocation, and geographic Difference-in-Differences.'}
        path="/solutions/operatore-ecommerce"
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-100 px-3 py-1 rounded-full">
          {c.eyebrow}
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto">
          {c.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          {c.subtitle}
        </p>
      </div>

      {/* ─── PAIN ACCORDION ──────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
            {c.painsTitle}
          </h2>
          <div className="space-y-4">
            {c.pains.map((pain, idx) => {
              const isOpen = openPain === idx;
              return (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <button
                    id={`pain-btn-${idx}`}
                    onClick={() => setOpenPain(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-teal-600 transition-colors"
                  >
                    <span>{pain.q}</span>
                    <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-2"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl">
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
      </div>

      {/* ─── SOLUTIONS GRID ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          {c.solutionsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {c.solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md flex flex-col items-start hover:shadow-lg transition-shadow">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── PLAYBOOK BLOCK ──────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            {c.playbookTitle}
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            {c.playbookDesc}
          </p>
          <div className="space-y-6">
            {c.playbooks.map((pb, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <code className="text-teal-400 font-mono text-sm block mb-2">
                  {pb.cmd}
                </code>
                <p className="text-gray-300 text-sm">
                  {pb.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Pronto a scalare i tuoi mercati esteri?' : 'Ready to scale your foreign markets?'}
          </h3>
          <p className="text-teal-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Effettua l\'allineamento multivaluta e scopri quali paesi hanno maggior potenziale residuo.'
              : 'Execute the multi-currency alignment and discover which countries show the highest residual potential.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isIt ? 'Chiama Ora · 800 940 213' : 'Call Now · 800 940 213'}
            </a>
          </div>
        </div>
      </div>

      {/* ─── INTERLINKING NAV ────────────────────────────────────────────── */}
      <SolutionsNav />
    </div>
  );
}
