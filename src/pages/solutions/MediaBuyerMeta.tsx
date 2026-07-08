import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  TrendingUp, ShieldCheck, Heart, ChevronDown, CheckCircle,
  AlertCircle, Phone, Image, Eye, MessageCircle, BarChart2
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function MediaBuyerMeta() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER IL MEDIA BUYER META & CREATIVE STRATEGIST',
    title: 'Creative Loop ABC e concept basati sulla psicologia del target',
    subtitle: 'Come combattere la creative fatigue su Facebook Ads e allineare i dati di attribuzione gonfiati con GA4.',
    painsTitle: 'I punti di dolore quotidiani per chi gestisce Meta Ads',
    pains: [
      {
        q: 'Creative fatigue: le mie inserzioni convertono bene per pochi giorni e poi calano rapidamente.',
        a: 'La creative fatigue è l\'ostacolo principale su Meta. Il nostro playbook "creative_loop" esegue un\'analisi ABC per dividere gli asset in Vincenti (A), Stabili (B) e Morti (C). Ti propone di spegnere subito i morti e lanciare varianti testuali/visive dei vincenti prima del crollo.'
      },
      {
        q: 'Non so quale angolo psicologico o copy attira davvero i clienti (e non solo quale colore o foto).',
        a: 'La maggior parte dei grafici si concentra sull\'estetica. La nostra suite "Creative Studio" definisce i concept ancorandoli ai bisogni della piramide di Maslow e alle "ferite" del target. Il Giudice Avversariale (Vision+Text) boccia le grafiche con testi sovrapposti pixelati che abbassano il ranking di Meta.'
      },
      {
        q: 'Meta Ads Manager dichiara un ROAS stellare, ma il fatturato a gestionale non cresce.',
        a: 'Meta attribuisce le vendite in base a finestre di visualizzazione (1d-view) o click (28d-click) molto ampie. Il nostro "Meta ↔ GA4 Bridge" incrocia le sessioni reali sul sito per darti la verità sul comportamento reale degli utenti portati da Meta.'
      }
    ],
    solutionsTitle: 'La cassetta degli attrezzi per Meta Ads',
    solutions: [
      {
        icon: Eye,
        title: 'Creative Loop (ABC Analysis)',
        desc: 'Una scansione continua degli asset creativi che taglia la spesa inefficiente sulle creatività saturate e rialloca il budget sui concetti attivi più performanti.'
      },
      {
        icon: Image,
        title: 'Creative Studio & Giudice Avversariale',
        desc: 'Un flusso di generazione concetti che scrive testi basati su urgenza, riprova sociale o empatia e valida le immagini con modelli Vision prima di caricarle.'
      },
      {
        icon: BarChart2,
        title: 'Meta ↔ GA4 Bridge',
        desc: 'La riconciliazione analitica che corregge la sovra-attribuzione di Meta, calcolando l\'incremento reale e il costo per lead (CPL) effettivo sul sito.'
      }
    ],
    playbookTitle: 'Playbook Meta (Vena G)',
    playbookDesc: 'Le automazioni e le routine della suite dedicate alla gestione creativa di Meta:',
    playbooks: [
      {
        cmd: 'creative_loop',
        desc: 'Scansiona la spesa degli ad set, assegna il ranking ABC e mette in bozza in staging la pausa degli annunci saturi.'
      },
      {
        cmd: 'generate_creative_concepts',
        desc: 'Estrae i claim del tuo sito e genera 8 angoli di comunicazione focalizzati sulle obiezioni e sui bisogni reali del cliente.'
      },
      {
        cmd: 'meta_placement_optimize',
        desc: 'Analizza i posizionamenti (feed, stories, reel) con test di Poisson per eliminare le visualizzazioni sprecate senza basarsi sul rumore.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR META MEDIA BUYERS & CREATIVE STRATEGISTS',
    title: 'Creative Loop ABC and concepts built on target psychology',
    subtitle: 'How to fight creative fatigue on Facebook Ads and align inflated attribution metrics with GA4.',
    painsTitle: 'Typical daily pains when managing Meta Ads',
    pains: [
      {
        q: 'Creative fatigue: my ads perform well for a few days and then drop rapidly.',
        a: 'Creative fatigue is the main challenge on Meta. Our "creative_loop" playbook runs an ABC analysis, dividing assets into Winners (A), Stable (B), and Dead (C). It recommends immediately pausing dead ads and spinning off variants of winners before performance decays.'
      },
      {
        q: 'I don\'t know which emotional angle or copy converts (and not just which color or photo).',
        a: 'Most designers focus purely on aesthetics. Our "Creative Studio" maps concepts to Maslow\'s hierarchy and customer pain points. The Adversarial Judge (Vision+Text) flags images with bad overlay text that lower Meta\'s delivery ranking.'
      },
      {
        q: 'Meta Ads Manager reports a stellar ROAS, but backend revenue isn\'t growing.',
        a: 'Meta attributes conversions using wide windows like 1d-view or 28d-click. Our "Meta ↔ GA4 Bridge" cross-references real on-site sessions to give you the objective truth of user actions driven by Meta campaigns.'
      }
    ],
    solutionsTitle: 'Meta Ads Toolbox',
    solutions: [
      {
        icon: Eye,
        title: 'Creative Loop (ABC Analysis)',
        desc: 'Continuous scanning of creative assets that cuts budget waste on saturated ads and reallocates spend to winning concepts.'
      },
      {
        icon: Image,
        title: 'Creative Studio & Adversarial Judge',
        desc: 'A concept generator that writes copy focused on urgency, social proof, or empathy and validates visual assets via Vision model checks before uploading.'
      },
      {
        icon: BarChart2,
        title: 'Meta ↔ GA4 Bridge',
        desc: 'Analytical reconciliation correcting Meta\'s over-attribution, calculating true incremental revenue and real cost per lead (CPL) on your website.'
      }
    ],
    playbookTitle: 'Meta Playbooks (G Vena)',
    playbookDesc: 'Suite automations and routines dedicated to Meta creative management:',
    playbooks: [
      {
        cmd: 'creative_loop',
        desc: 'Scans spend across ad sets, assigns ABC rankings, and stages pauses for saturated creative units.'
      },
      {
        cmd: 'generate_creative_concepts',
        desc: 'Pulls core claims from your landing page and generates 8 communication angles focused on consumer needs and objections.'
      },
      {
        cmd: 'meta_placement_optimize',
        desc: 'Analyzes placements (feed, stories, reels) using Poisson significance tests to trim waste without acting on noise.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni Meta Ads e Creative Loop | Internet Valore' : 'Meta Ads & Creative Loop Solutions | Internet Valore'}
        description={isIt 
          ? 'Risolvi l\'ad fatigue con il Creative Loop ABC, scrivi concept basati sulla psicologia ed elimina le discrepanze ROAS Meta vs GA4.' 
          : 'Resolve ad fatigue with Creative Loop ABC, write psychology-driven concepts, and fix Meta vs GA4 ROAS discrepancies.'}
        path="/solutions/media-buyer-meta"
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-pink-600 uppercase bg-pink-100 px-3 py-1 rounded-full">
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
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-pink-600 transition-colors"
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
                <div className="p-3 bg-pink-50 text-pink-600 rounded-xl mb-6">
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
                <code className="text-pink-400 font-mono text-sm block mb-2">
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
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Smetti di sprecare budget in creatività sature' : 'Stop wasting budget on saturated creatives'}
          </h3>
          <p className="text-pink-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Lancia il nostro Creative Loop per classificare le tue inserzioni e individuare subito le idee da testare.'
              : 'Launch our Creative Loop to rank your ads and immediately discover the best angles to test.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
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
