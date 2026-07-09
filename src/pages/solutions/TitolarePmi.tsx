import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  ShieldCheck, FileText, ChevronDown, CheckCircle, HelpCircle,
  TrendingUp, Activity, AlertCircle, Phone, Lock
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function TitolarePmi() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER L\'IMPRENDITORE',
    title: 'Controllo del budget e profitto reale per il Titolare di PMI',
    subtitle: 'Come valutare il profitto delle tue campagne e-commerce o lead generation senza delegare ciecamente all\'agenzia.',
    painsTitle: 'I punti di dolore tipici di un imprenditore',
    pains: [
      {
        q: 'Spendo in pubblicità, ma non so se sto generando profitto o solo fatturato.',
        a: 'Molte agenzie mostrano il ROAS (Ritorno sulla Spesa Pubblicitaria) basato sulle vendite lorde. Ma se vendi prodotti a basso margine o spendi troppo per acquisire un cliente, potresti star vendendo in perdita. Noi ottimizziamo sul POAS (Profit on Ad Spend) reale, importando i costi del venduto ed escludendo le tasse.'
      },
      {
        q: 'L\'agenzia effettua modifiche alle campagne a mia insaputa, spesso facendo danni.',
        a: 'Con il nostro sistema non esistono lanci improvvisi o modifiche "sotto banco". Ogni manovra segue un iter rigido: viene preparata in staging, testata in dry-run e può essere applicata solo dopo il tuo via libera (checkbox o firma del report).'
      },
      {
        q: 'Non ho un punto di partenza trasparente (baseline) per capire cosa sia migliorato da quando lavoriamo insieme.',
        a: 'All\'onboarding stabiliamo un Dossier di presa in carico al giorno zero (t0). Questa baseline fotografa i dati storici effettivi. Qualsiasi incremento futuro verrà misurato matematicamente a partire da questo t0 storico.'
      }
    ],
    solutionsTitle: 'Le risposte della nostra suite tecnologica',
    solutions: [
      {
        icon: FileText,
        title: 'Dossier di Presa in Carico (t0)',
        desc: 'Una fotografia versionata ed esterna alla firma che certifica lo stato dei tracciamenti e delle performance al primo giorno. Nessuno potrà spostare l\'asticella in seguito.'
      },
      {
        icon: Lock,
        title: 'approval_mode (Modifiche in PAUSA & Doppia Firma)',
        desc: 'Le nuove campagne nascono sempre in PAUSA. Per le approvazioni, ricevi due PDF distinti: il PDF Lean con gli interventi effettivi da firmare, e il PDF Valore contenente le stime e le proiezioni (così non ti facciamo firmare promesse).'
      },
      {
        icon: ShieldCheck,
        title: 'Storico decisionale & Incremento Reale',
        desc: 'Ogni modifica viene salvata in un registro immutabile. Il sistema calcola l\'impatto incrementale netto (lift before/after) depurato dalle oscillazioni stagionali.'
      }
    ],
    playbookTitle: 'Playbook correlati (Uso Interno dell\'Agenzia per te)',
    playbookDesc: 'Ecco le procedure codificate nel nostro sistema che l\'account o i media buyer richiamano in chat per gestire il tuo account:',
    playbooks: [
      {
        cmd: 'handoff_day0_dossier_takeover_proposal',
        desc: 'Genera il dossier giorno-zero t0 e prepara la prima coda di azioni correttive da sottoporti in approvazione.'
      },
      {
        cmd: 'measure_decisions_incrementality',
        desc: 'Analisi statistica prima/dopo per misurare la variazione del margine al netto del rumore stagionale.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR THE ENTREPRENEUR',
    title: 'Budget control and real profit for the SME Owner',
    subtitle: 'How to evaluate the real profit of your e-commerce or lead generation campaigns without blindly delegating to the agency.',
    painsTitle: 'Typical pain points of an entrepreneur',
    pains: [
      {
        q: 'I spend on advertising, but I don\'t know if I am generating profit or just revenue.',
        a: 'Many agencies show ROAS (Return on Ad Spend) based on gross sales. But if you sell low-margin items or spend too much to acquire a customer, you might be selling at a loss. We optimize for real POAS (Profit on Ad Spend), importing cost of goods sold and excluding taxes.'
      },
      {
        q: 'The agency edits campaigns without my knowledge, sometimes causing drops.',
        a: 'With our system, there are no sudden launches or "hidden" edits. Every maneuver follows a rigid path: prepared in staging, tested in dry-run, and only applied after your explicit check or signed report.'
      },
      {
        q: 'I don\'t have a transparent starting baseline to see what actually improved.',
        a: 'During onboarding, we produce a Day-Zero Hand-off Dossier (t0). This baseline captures true historical data. Any future increment will be mathematically measured from this historical t0.'
      }
    ],
    solutionsTitle: 'Our suite technological answers',
    solutions: [
      {
        icon: FileText,
        title: 'Hand-off Dossier (t0 Baseline)',
        desc: 'A versioned, external document certifying the state of tracking and performance on day one. No one can move the benchmark later.'
      },
      {
        icon: Lock,
        title: 'approval_mode (Paused campaigns & Double Signature)',
        desc: 'New campaigns are always built in PAUSE. For approvals, you receive two separate PDFs: the Lean PDF containing the exact edits to sign, and the Value PDF containing estimates (so you never sign off on estimations).'
      },
      {
        icon: ShieldCheck,
        title: 'Decision History & Incremental Lift',
        desc: 'Every edit is logged in an immutable repository. The system calculates the net incremental lift (before/after) cleaned from seasonal fluctuations.'
      }
    ],
    playbookTitle: 'Related Playbooks (Internal Agency Use for you)',
    playbookDesc: 'Here are the coded procedures our accounts or media buyers execute to manage your account:',
    playbooks: [
      {
        cmd: 'handoff_day0_dossier_takeover_proposal',
        desc: 'Generates the day-zero t0 dossier and queues the first batch of optimization actions for your approval.'
      },
      {
        cmd: 'measure_decisions_incrementality',
        desc: 'Statistical analysis to measure the net margin shift before and after changes, cleaned from seasonal noise.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni per Titolari PMI e Imprenditori | Internet Valore' : 'Solutions for SME Owners and Entrepreneurs | Internet Valore'}
        description={isIt
          ? 'Controlla il profitto reale delle tue campagne. Baseline t0, approval_mode con doppia firma, e zero modifiche arbitrarie sul tuo account.'
          : 'Control the real profit of your campaigns. t0 baseline, approval_mode with double signatures, and zero arbitrary account changes.'}
        path="/solutions/titolare-pmi"
        serviceType={isIt ? 'Consulenza Budget & Profitto Campagne' : 'Campaign Profit & Budget Control'}
        serviceDescription={isIt
          ? 'Controllo del profitto reale (POAS) sulle campagne e-commerce e lead generation, con sistema approval_mode a doppia firma e baseline t0.'
          : 'Real profit (POAS) control for e-commerce and lead generation campaigns, with double-signature approval_mode and t0 baseline.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Soluzioni' : 'Solutions', path: '/solutions' },
          { name: isIt ? 'Titolare PMI' : 'SME Owner', path: '/solutions/titolare-pmi' }
        ]}
        faq={c.pains.map(p => ({ question: p.q, answer: p.a }))}
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-3 py-1 rounded-full">
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
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors"
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
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl mb-6">
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
                <code className="text-blue-400 font-mono text-sm block mb-2">
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
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Riprendi il controllo del tuo budget ads' : 'Reclaim control of your ads budget'}
          </h3>
          <p className="text-blue-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Connettiamo le tue sorgenti e stabiliamo la baseline t0 in 3 giorni. Nessuna promessa fittizia, solo controllo matematico.'
              : 'We connect your sources and establish the t0 baseline in 3 days. No generic promises, just mathematical control.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isIt ? 'Numero Verde · 800 940 213' : 'Toll-Free · 800 940 213'}
            </a>
          </div>
        </div>
      </div>

      {/* ─── INTERLINKING NAV ────────────────────────────────────────────── */}
      <SolutionsNav />
    </div>
  );
}
