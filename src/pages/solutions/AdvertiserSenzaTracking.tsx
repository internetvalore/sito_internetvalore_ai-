import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  ShieldAlert, ShieldCheck, Activity, ChevronDown, CheckCircle,
  AlertCircle, Phone, TrendingUp, BarChart2, Layers
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function AdvertiserSenzaTracking() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER ADVERTISER SENZA PIXEL E EDITORI',
    title: 'MMM Read-Through e modellazione Adstock per Amazon, KDP e Marketplace',
    subtitle: 'Come ottimizzare le campagne Google e Meta Ads quando vendi su canali di terze parti privi di pixel di tracciamento.',
    painsTitle: 'I punti di dolore per chi vende senza tracciamenti diretti',
    pains: [
      {
        q: 'Spendo su Meta Ads per vendere libri su Amazon KDP o prodotti su marketplace dove non posso inserire pixel.',
        a: 'Questa è la sfida tipica dei marketplace chiusi. Meta vede solo i click, non le vendite. Il nostro modulo "MMM Read-Through" incrocia i report di vendita del marketplace con le curve storiche di investimento ads, usando regressioni statistiche per misurare l\'incremento reale.'
      },
      {
        q: 'Ottimizzo le mie campagne pubblicitarie basandomi solo sui click (CPC), procedendo alla cieca.',
        a: 'I click non garantiscono le vendite. Il nostro modello stima l\'incremento del ROI correlando i picchi di spesa pubblicitaria giornaliera con gli incrementi delle vendite aggregate fornite dal marketplace, depurandoli dalle oscillazioni organiche di base.'
      },
      {
        q: 'Non so per quanti giorni un annuncio continua a generare vendite indirette dopo che l\'utente ha cliccato.',
        a: 'L\'effetto trascinamento esiste ed è misurabile. Utilizziamo formule matematiche di "Adstock" per calcolare il tasso di decadimento dell\'impatto pubblicitario. Questo ti dice se una vendita avvenuta oggi è l\'eco di un investimento di 4 giorni fa.'
      }
    ],
    solutionsTitle: 'I modelli econometrici per canali senza tracking',
    solutions: [
      {
        icon: Layers,
        title: 'MMM Read-Through (Marketing Mix Modeling)',
        desc: 'Un motore statistico che analizza spesa e vendite complessive nel tempo per stimare il ritorno sull\'investimento (ROAS indiretto) su piattaforme prive di codice di tracciamento.'
      },
      {
        icon: TrendingUp,
        title: 'Modellazione di Decadimento Adstock',
        desc: 'Stima la memoria temporale delle tue campagne pubblicitarie per capire l\'effetto ritardato delle inserzioni sulle vendite del marketplace.'
      },
      {
        icon: BarChart2,
        title: 'Correlation Window Analysis',
        desc: 'Identifica legami matematici significativi tra le variazioni regionali o giornaliere di budget pubblicitario e le fluttuazioni dei fatturati.'
      }
    ],
    playbookTitle: 'Playbook Econometrici (Vena Analytics & MMM)',
    playbookDesc: 'Le metodologie matematiche utilizzate per ottimizzare i canali chiusi:',
    playbooks: [
      {
        cmd: 'mmm_read_through_reconcile',
        desc: 'Modello di regressione lineare che isola il fatturato organico di base da quello generato dalle campagne Meta/Google senza pixel.'
      },
      {
        cmd: 'calculate_adstock_decay',
        desc: 'Calcola il parametro lambda di decadimento per stimare il valore residuo a 3, 7 e 14 giorni dall\'esposizione pubblicitaria.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR NO-PIXEL ADVERTISERS & PUBLISHERS',
    title: 'MMM Read-Through and Adstock modeling for Amazon, KDP, and Marketplaces',
    subtitle: 'How to optimize Google and Meta Ads campaigns when selling on third-party channels lacking tracking pixels.',
    painsTitle: 'Key pains of selling without direct conversions tracking',
    pains: [
      {
        q: 'I spend on Meta Ads to sell books on Amazon KDP or items on marketplaces where I cannot add pixels.',
        a: 'This is the classic closed marketplace challenge. Meta only tracks clicks, not sales. Our "MMM Read-Through" module correlates marketplace sales reports with ads spending curves, using statistical regressions to calculate true incremental returns.'
      },
      {
        q: 'I optimize my advertising campaigns based solely on clicks (CPC), running blind.',
        a: 'Clicks do not equal sales. Our model estimates ROI lifts by correlating daily ads spend spikes with overall sales variations reported by the marketplace, cleaned from baseline organic performance.'
      },
      {
        q: 'I don\'t know how long an ad continues to drive indirect sales after a user clicks.',
        a: 'The carryover effect exists and is measurable. We use mathematical "Adstock" formulas to compute the decay rate of ad impact. This tells you if a sale today is an echo of spend from 4 days ago.'
      }
    ],
    solutionsTitle: 'Econometric models for channels without tracking',
    solutions: [
      {
        icon: Layers,
        title: 'MMM Read-Through (Marketing Mix Modeling)',
        desc: 'A statistical engine analyzing overall spend and sales over time to estimate ROI (indirect ROAS) on platforms lacking pixel code.'
      },
      {
        icon: TrendingUp,
        title: 'Adstock Decay Modeling',
        desc: 'Estimates the temporal memory of your ad campaigns to understand the delayed effect of promotions on marketplace sales.'
      },
      {
        icon: BarChart2,
        title: 'Correlation Window Analysis',
        desc: 'Identifies mathematical ties between regional or daily ads spend changes and sales fluctuations.'
      }
    ],
    playbookTitle: 'Econometric Playbooks (Analytics & MMM)',
    playbookDesc: 'Mathematical methodologies used to optimize closed channels:',
    playbooks: [
      {
        cmd: 'mmm_read_through_reconcile',
        desc: 'Linear regression model isolating baseline organic sales from revenue generated by Meta/Google campaigns.'
      },
      {
        cmd: 'calculate_adstock_decay',
        desc: 'Computes the lambda decay parameter to estimate the residual value of ads at 3, 7, and 14 days post-exposure.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni Ads Senza Pixel e MMM | Internet Valore' : 'No-Pixel Ads & MMM Solutions | Internet Valore'}
        description={isIt
          ? 'Ottimizza ads per Amazon, KDP e canali offline tramite Marketing Mix Modeling (MMM) e decadimento Adstock.'
          : 'Optimize ads for Amazon, KDP, and offline channels via Marketing Mix Modeling (MMM) and Adstock decay.'}
        path="/solutions/advertiser-senza-tracking"
        serviceType={isIt ? 'Marketing Mix Modeling & Econometria' : 'Marketing Mix Modeling & Econometrics'}
        serviceDescription={isIt
          ? 'Ottimizzazione campagne per marketplace senza pixel: modelli econometrici MMM Read-Through, Adstock decay e Correlation Window Analysis.'
          : 'Campaign optimization for no-pixel marketplaces: MMM Read-Through econometric models, Adstock decay and Correlation Window Analysis.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Soluzioni' : 'Solutions', path: '/solutions' },
          { name: isIt ? 'Advertiser Senza Pixel' : 'No-Pixel Advertiser', path: '/solutions/advertiser-senza-tracking' }
        ]}
        faq={c.pains.map(p => ({ question: p.q, answer: p.a }))}
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-amber-600 uppercase bg-amber-100 px-3 py-1 rounded-full">
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
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-amber-600 transition-colors"
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
                <div className="p-3 bg-amber-50 text-amber-600 rounded-xl mb-6">
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
                <code className="text-amber-400 font-mono text-sm block mb-2">
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
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Misura il ritorno reale delle tue ads Amazon' : 'Measure the real return of your Amazon ads'}
          </h3>
          <p className="text-amber-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Applica i modelli MMM sul tuo canale di vendita indiretto per ottimizzare i budget pubblicitari.'
              : 'Apply MMM frameworks to your indirect sales channels to optimize advertising budgets.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-amber-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
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
