import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  Search, ShieldCheck, Activity, ChevronDown, CheckCircle,
  AlertCircle, Phone, Award, Sliders, Cpu
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function MediaBuyerGoogle() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER IL MEDIA BUYER GOOGLE ADS',
    title: 'Audit Raggi X e ristrutturazione sistematica del Quality Score',
    subtitle: 'Come diagnosticare la perdita di Impression Share per Rank vs Budget ed eliminare gli sprechi strutturali di keyword off-topic.',
    painsTitle: 'I problemi tipici di chi gestisce campagne Search & Shopping',
    pains: [
      {
        q: 'Impression Share in calo: come capisco se è un problema di budget o di offerta/qualità?',
        a: 'Spesso si alzano i budget alla cieca. Il nostro playbook "auction_fix" analizza i report di asta e scompone la quota persa: se perdi per Budget serve scalabilità finanziaria, se perdi per Rank (punteggio) andiamo a recuperare pertinenza degli annunci (RSA) e pertinenza delle landing page.'
      },
      {
        q: 'Il Quality Score delle mie parole chiave oscilla tra 3 e 5, facendo alzare il CPC.',
        a: 'Un punteggio basso viene da un disallineamento tra keyword, annuncio e testo on-site. Usiamo il protocollo di "Ristrutturazione QS" (8 fasi): separiamo i cluster di intenti, scriviamo RSA iper-specifiche estraendo i claim reali del sito (via Firecrawl) e creiamo ad-group focalizzati.'
      },
      {
        q: 'Ho paura di applicare modifiche massive e rompere gli Smart Bidding.',
        a: 'Ogni modifica viene preparata prima in staging. Il sistema calcola un dry-run deterministico: ti mostra esattamente quali keyword verranno pausate, quali negative aggiunte e come cambieranno i budget, senza toccare le API finché non metti la spunta.'
      }
    ],
    solutionsTitle: 'I moduli della nostra suite per Google Ads',
    solutions: [
      {
        icon: Cpu,
        title: 'Audit Raggi X in 5 Fasi',
        desc: 'Un job profondo che scannerizza l\'intera struttura: conflitti tra parole chiave, igiene delle RSA, esclusioni geografiche, cannibalizzazioni brand e calcolo dell\'headroom reale di scala.'
      },
      {
        icon: Sliders,
        title: 'Manutenzione del Venerdì (Ottimizzazione Settimanale)',
        desc: 'Proposte di harvesting keyword dalle query di ricerca sane, e blocco immediato (negative add) dei termini di ricerca off-topic o spam.'
      },
      {
        icon: ShieldCheck,
        title: 'Ponte SEO-to-RSA (organic_to_rsa)',
        desc: 'Prende le pagine e le chiavi che stanno performando in organico (SEO) e ne genera automaticamente annunci Search. Ads compra la scala di ciò che l\'organico ha già validato.'
      }
    ],
    playbookTitle: 'Playbook Google Ads (Vena F)',
    playbookDesc: 'Le automazioni che governano le decisioni del media buyer Google Ads:',
    playbooks: [
      {
        cmd: 'auction_fix',
        desc: 'Scompone la perdita di quota d\'asta e suggerisce se alzare il budget, ricalibrare il tCPA/tROAS o riscrivere l\'RSA.'
      },
      {
        cmd: 'search_restructure_qs_cluster',
        desc: 'Clustera le query di ricerca per punteggio e intento, ristrutturando l\'account in ad group ristretti con annunci specifici.'
      },
      {
        cmd: 'waste_cut',
        desc: 'Identifica gli sprechi di spesa type-aware (escludendo le campagne upper-funnel dedicate al branding) e libera margine.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR GOOGLE ADS MEDIA BUYERS',
    title: 'X-Ray audits and systematic Quality Score restructuring',
    subtitle: 'How to diagnose Impression Share loss to Rank vs Budget and eliminate structural budget waste on off-topic search terms.',
    painsTitle: 'Typical pains of managing Search & Shopping campaigns',
    pains: [
      {
        q: 'Impression Share is falling: how do I know if it is a budget issue or bid/rank issue?',
        a: 'Often budgets are raised blindly. Our "auction_fix" playbook analyzes auction reports and breaks down lost share: if you lose to Budget you need financial scale, if you lose to Rank (quality score) we recover RSA and landing page relevance.'
      },
      {
        q: 'My keyword Quality Score hovers between 3 and 5, driving up my CPC.',
        a: 'A low score comes from a mismatch between keyword, ad copy, and on-site text. We use the "QS Restructuring" protocol (8 phases): split search intents, write hyper-specific RSAs extracting actual site claims (via Firecrawl), and build focused ad groups.'
      },
      {
        q: 'I am afraid of applying bulk changes and breaking Smart Bidding algorithms.',
        a: 'Every change is queued in staging first. The system calculates a deterministic dry-run: it shows exactly which keywords will be paused, negative keywords added, and budget adjustments made — without writing to the API until confirmed.'
      }
    ],
    solutionsTitle: 'Our suite modules for Google Ads',
    solutions: [
      {
        icon: Cpu,
        title: '5-Phase X-Ray Audit',
        desc: 'A deep background job scanning the entire structure: keyword conflicts, RSA copywriting hygiene, device and geo exclusions, brand cannibalization, and scale headroom estimation.'
      },
      {
        icon: Sliders,
        title: 'Weekly Optimization (Friday Maintenance)',
        desc: 'Harvests winning search terms into keywords and blocks bad searches (negative keyword additions) automatically.'
      },
      {
        icon: ShieldCheck,
        title: 'SEO-to-RSA Bridge (organic_to_rsa)',
        desc: 'Pulls pages and queries that perform organically and builds text ads. Ads buys scale for what organic has already proven.'
      }
    ],
    playbookTitle: 'Google Ads Playbooks (F Vena)',
    playbookDesc: 'Automations governing the Google Ads media buyer\'s actions:',
    playbooks: [
      {
        cmd: 'auction_fix',
        desc: 'Decomposes auction share loss and recommends raising budget, adjusting tCPA/tROAS, or rewriting RSAs.'
      },
      {
        cmd: 'search_restructure_qs_cluster',
        desc: 'Clusters search terms by score and intent, restructuring the account into tight ad groups with specific ads.'
      },
      {
        cmd: 'waste_cut',
        desc: 'Identifies type-aware budget waste (protecting upper-funnel branding campaigns) and frees up margin.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni Google Ads e Quality Score | Internet Valore' : 'Google Ads & Quality Score Solutions | Internet Valore'}
        description={isIt 
          ? 'Diagnosi di Impression Share persa per Rank vs Budget, ristrutturazione del Quality Score e modifiche protette in staging.' 
          : 'Diagnose Impression Share lost to Rank vs Budget, restructure Quality Scores, and protect changes in staging.'}
        path="/solutions/media-buyer-google-ads"
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-sky-600 uppercase bg-sky-100 px-3 py-1 rounded-full">
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
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-sky-600 transition-colors"
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
                <div className="p-3 bg-sky-50 text-sky-600 rounded-xl mb-6">
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
                <code className="text-sky-400 font-mono text-sm block mb-2">
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
        <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Vuoi eseguire l\'audit Raggi X sul tuo account?' : 'Want to run the X-Ray audit on your account?'}
          </h3>
          <p className="text-sky-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Connettiamo l\'account in lettura ed eseguiamo l\'audit in background in pochi minuti.'
              : 'Connect your account in read-only and we run the audit in the background in minutes.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-sky-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
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
