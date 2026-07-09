import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  FileText, HelpCircle, Activity, ChevronDown, CheckCircle,
  TrendingDown, Database, MessageSquare, AlertCircle, Phone
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function AccountManager() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER L\'ACCOUNT MANAGER',
    title: 'Report mensili inattaccabili e diagnosi immediate dei cali ads',
    subtitle: 'Come spiegare le variazioni di fatturato e conversioni senza tirare a indovinare, proteggendo la reputazione e il rapporto con il cliente.',
    painsTitle: 'I punti di dolore quotidiani dell\'Account Manager',
    pains: [
      {
        q: 'Il cliente chiama arrabbiato: "Gli ordini sono crollati! Cosa succede?"',
        a: 'Spesso la risposta d\'istinto dell\'account è "ci stiamo guardando". Con il nostro sistema, apri lo strumento "Spiega un calo (Δ)" e in 30 secondi hai la decomposizione algebrica LMDI del calo: vedi immediatamente se il calo viene da una contrazione delle sessioni, da un calo del CVR o dallo scontrino medio.'
      },
      {
        q: 'Non sono sicuro al 100% che i numeri sulle dashboard siano corretti o sincronizzati.',
        a: 'Prima di fare qualsiasi analisi, eseguiamo il "Rito di Affidabilità". Questo playbook verifica se i token delle API sono attivi, se i dati di ieri sono pronti e se ci sono stati blocchi sui tag di tracciamento nelle ultime 24 ore.'
      },
      {
        q: 'Passo giornate intere a comporre report e presentazioni per mostrare cosa abbiamo fatto.',
        a: 'Il nostro "Report Storytelling" unisce i dati quantitativi con le annotazioni del "Decision Repository". Genera automaticamente un report narrativo che racconta: "Abbiamo rilevato X, applicato l\'azione Y, e ottenuto un lift misurato del Z%". Meno Excel, più valore strategico.'
      }
    ],
    solutionsTitle: 'Gli strumenti dedicati nella Suite',
    solutions: [
      {
        icon: Activity,
        title: 'Spiega un calo (Δ) & Decomposizione LMDI',
        desc: 'Un modello matematico che scompone le variazioni di revenue isolando l\'effetto esatto dei tre driver: traffico, conversione (sito) e scontrino. Fornisce un verdetto certo sulla causa primaria.'
      },
      {
        icon: Database,
        title: 'Rito di Affidabilità (trust_then_judge)',
        desc: 'Un check automatico a semaforo che garantisce l\'integrità dei dati prima di qualsiasi riunione. Se un tracciamento ha smesso di registrare dati, il report lo dichiara chiaramente invece di mostrare dati falsati.'
      },
      {
        icon: FileText,
        title: 'Report Storytelling & Direzionale',
        desc: 'Generazione automatica di report narrativi pronti da presentare al cliente, ancorati al registro storico delle decisioni per dimostrare il valore effettivo portato dall\'agenzia.'
      }
    ],
    playbookTitle: 'Playbook per l\'Account (Vena A & F)',
    playbookDesc: 'Le procedure di diagnosi ed allineamento che l\'LLM esegue per supportarti nelle telefonate ed e-mail critiche:',
    playbooks: [
      {
        cmd: 'trust_then_judge',
        desc: 'Verifica la freschezza dei dati e la salute dei tracciamenti e ti dice se puoi fidarti dei numeri di questa settimana.'
      },
      {
        cmd: 'explain_revenue_drop',
        desc: 'Esegue l\'indagine completa incrociando i cambiamenti nelle creatività, le release della landing page e le variazioni di traffico.'
      },
      {
        cmd: 'get_resumption_briefing',
        desc: 'Fornisce un briefing rapido dello stato del cliente, le decisioni in corso e i compiti da completare, ideale dopo un periodo di assenza.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR THE ACCOUNT MANAGER',
    title: 'Bulletproof monthly reports and instant diagnostic of ads drops',
    subtitle: 'How to explain revenue and conversion shifts without guessing, protecting your credibility and client relationship.',
    painsTitle: 'Typical daily pains of an Account Manager',
    pains: [
      {
        q: 'The client calls panicked: "Orders dropped! What is happening?"',
        a: 'Often the account\'s default answer is "we are looking into it". With our system, you open the "Explain a drop (Δ)" page and in 30 seconds you get the algebraic LMDI decomposition: you see immediately if the drop is driven by traffic loss, CVR drop, or average order value shifts.'
      },
      {
        q: 'I am not 100% sure that the numbers on the dashboards are correct or synchronized.',
        a: 'Before doing any analysis, we execute the "Reliability Ritual". This playbook checks if API tokens are active, if yesterday\'s data is ready, and if there were any tracking tag breakages in the last 24 hours.'
      },
      {
        q: 'I spend whole days compiling reports and slides to show what we did.',
        a: 'Our "Storytelling Report" merges quantitative metrics with notes from the "Decision Repository". It generates a narrative report: "We identified X, applied change Y, and measured a lift of Z%". Less Excel, more strategy.'
      }
    ],
    solutionsTitle: 'Dedicated tools in the Suite',
    solutions: [
      {
        icon: Activity,
        title: 'Explain a drop (Δ) & LMDI Decomposition',
        desc: 'A mathematical model that breaks down revenue shifts, isolating the exact effect of traffic, site conversions, and order values. Gives a clear verdict on the primary driver.'
      },
      {
        icon: Database,
        title: 'Reliability Ritual (trust_then_judge)',
        desc: 'An automatic traffic-light check that guarantees data integrity before any meeting. If a tracking tag stopped firing, the report notes it clearly instead of showing misleading drops.'
      },
      {
        icon: FileText,
        title: 'Storytelling & Board Report',
        desc: 'Automatic generation of narrative reports ready for client review, anchored to the historical decision log to demonstrate actual agency performance.'
      }
    ],
    playbookTitle: 'Account Playbooks (A & F Vena)',
    playbookDesc: 'Diagnostic and alignment procedures the LLM runs to support you in critical client emails and calls:',
    playbooks: [
      {
        cmd: 'trust_then_judge',
        desc: 'Checks data freshness and tracking health, stating whether you can trust this week\'s metrics.'
      },
      {
        cmd: 'explain_revenue_drop',
        desc: 'Conducts a full analysis cross-referencing creative edits, landing page updates, and traffic source variations.'
      },
      {
        cmd: 'get_resumption_briefing',
        desc: 'Delivers a quick briefing of client status, pending decisions, and upcoming tasks — perfect when returning from leave.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni per Account Manager | Internet Valore' : 'Solutions for Account Managers | Internet Valore'}
        description={isIt
          ? 'Diagnostica cali di fatturato con LMDI, prepara report narrativi in automatico ed evita discussioni basate sul rumore di mercato.'
          : 'Diagnose revenue drops with LMDI, prepare automated narrative reports, and avoid arguments based on market noise.'}
        path="/solutions/account-manager"
        serviceType={isIt ? 'Diagnostica Performance & Reporting Automatico' : 'Performance Diagnostics & Automated Reporting'}
        serviceDescription={isIt
          ? 'Strumenti di diagnostica per account manager: decomposizione LMDI del calo conversioni, validazione affidabilità dati e report narrativi automatici.'
          : 'Diagnostic tools for account managers: LMDI conversion drop decomposition, data reliability validation, and automated narrative reports.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Soluzioni' : 'Solutions', path: '/solutions' },
          { name: 'Account Manager', path: '/solutions/account-manager' }
        ]}
        faq={c.pains.map(p => ({ question: p.q, answer: p.a }))}
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-100 px-3 py-1 rounded-full">
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
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
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
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl mb-6">
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
                <code className="text-indigo-400 font-mono text-sm block mb-2">
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
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Metti in sicurezza i tuoi dati di reportistica' : 'Secure your reporting data'}
          </h3>
          <p className="text-indigo-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Abilita il rito di affidabilità sul tuo e-commerce per assicurare report credibili e risposte immediate.'
              : 'Enable the reliability check on your e-commerce to ensure credible reports and immediate diagnostics.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
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
