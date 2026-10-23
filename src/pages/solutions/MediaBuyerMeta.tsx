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
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
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
    <div className="min-h-screen">
      <MetaTags
        title={isIt ? 'Soluzioni Meta Ads e Creative Loop | Internet Valore' : 'Meta Ads & Creative Loop Solutions | Internet Valore'}
        description={isIt
          ? 'Risolvi l\'ad fatigue con il Creative Loop ABC, scrivi concept basati sulla psicologia ed elimina le discrepanze ROAS Meta vs GA4.'
          : 'Resolve ad fatigue with Creative Loop ABC, write psychology-driven concepts, and fix Meta vs GA4 ROAS discrepancies.'}
        path="/solutions/media-buyer-meta"
        serviceType={isIt ? 'Ottimizzazione Meta Ads & Creative Strategy' : 'Meta Ads Optimization & Creative Strategy'}
        serviceDescription={isIt
          ? 'Creative Loop ABC per eliminare l\'ad fatigue, concept psicologici Maslow-driven e riconciliazione ROAS Meta vs GA4.'
          : 'Creative Loop ABC to mitigate ad fatigue, Maslow-driven psychological concepts, and Meta vs GA4 ROAS reconciliation.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Soluzioni' : 'Solutions', path: '/solutions' },
          { name: 'Media Buyer Meta', path: '/solutions/media-buyer-meta' }
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
            {isIt ? 'Smetti di sprecare budget in creatività sature' : 'Stop wasting budget on saturated creatives'}
          </h3>
          <p className="lede mb-6 max-w-xl mx-auto">
            {isIt 
              ? 'Lancia il nostro Creative Loop per classificare le tue inserzioni e individuare subito le idee da testare.'
              : 'Launch our Creative Loop to rank your ads and immediately discover the best angles to test.'}
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
