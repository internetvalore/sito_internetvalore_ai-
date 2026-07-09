import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  Cpu, ShieldCheck, Database, ChevronDown, CheckCircle,
  AlertCircle, Phone, Code, Terminal, Play
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function CostruttoreSistema() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER IL COSTRUTTORE DEL SISTEMA',
    title: 'Architettura modulare agentica e gestione della sicurezza OAuth',
    subtitle: 'Come estendere la suite AI, definire nuovi playbook ed integrare connettori API senza intasare le code o esporre chiavi segrete.',
    painsTitle: 'I punti di dolore quotidiani dello sviluppatore della suite',
    pains: [
      {
        q: 'Il sistema deve collegare decine di API esterne (Google, Meta, Shopify) in modo sicuro senza rischiare token scaduti.',
        a: 'La gestione dei token è centralizzata. Il nostro modulo "Consumi API" monitora live lo stato dei token, i limiti di quota di ciascun provider e segnala le scadenze o i sunset delle API prima che si verifichi un blocco operativo del sistema.'
      },
      {
        q: 'Gli utenti fanno doppio click sui bottoni di analisi lanciando job duplicati in background che bloccano il server.',
        a: 'Tutte le elaborazioni lunghe sono gestite come Job deterministici con ID univoco. Il sistema rileva se esiste già un job in corso per quel cliente ed associa l\'interfaccia utente a quello attivo invece di crearne uno duplicato.'
      },
      {
        q: 'Voglio rilasciare funzionalità di scrittura automatica, ma temo azioni indesiderate sugli account pubblicitari.',
        a: 'Seguiamo lo schema "Scaffold auth-blocked". I rami di scrittura automatica (es. su GTM o GA4 Admin) sono predisposti nel codice ma tenuti dormienti (bloccati per autorizzazione). L\'applicazione reale richiede sempre un checkbox esplicito di un operatore umano e transita per il log RBAC.'
      }
    ],
    solutionsTitle: 'I pilastri architetturali del sistema',
    solutions: [
      {
        icon: Terminal,
        title: 'Centro Capacità (Capability-Gating)',
        desc: 'Una mappatura dinamica che spegne (rende grigie) le sezioni della UI in mancanza di permessi o sorgenti dati collegate, fornendo all\'utente indicazioni chiare sul blocco.'
      },
      {
        icon: Code,
        title: 'Modular Tool-calling',
        desc: 'Un\'architettura ad agenti in cui ogni modulo (GSC, GA4, BCE, Shopify) espone i propri endpoint come tool LLM autonomi, rendendo semplicissimo il debug e il rilascio di nuovi playbook.'
      },
      {
        icon: ShieldCheck,
        title: 'Firma a due PDF (approval_log)',
        desc: 'Un protocollo di sicurezza immutabile a livello di scrittura database che registra chi, cosa, quando e quale report firmato ha autorizzato la scrittura sulle API Ads.'
      }
    ],
    playbookTitle: 'Procedure di sviluppo e manutenzione (Uso Interno)',
    playbookDesc: 'I comandi principali per monitorare lo stato di salute e caricare nuove regole nella piattaforma:',
    playbooks: [
      {
        cmd: 'get_api_health',
        desc: 'Verifica la connettività e la latenza di tutti i connettori esterni (DataForSEO, BCE, Firecrawl, Anthropic).'
      },
      {
        cmd: 'get_sync_health',
        desc: 'Analisi dello stato di sincronizzazione del database locale rispetto alle modifiche degli account pubblicitari del cliente.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR SYSTEM BUILDERS & ARCHITECTS',
    title: 'Modular agentic architecture and OAuth security management',
    subtitle: 'How to extend the AI suite, define new playbooks, and integrate API connectors without clogging queues or exposing secret keys.',
    painsTitle: 'Typical daily pains of the platform developer',
    pains: [
      {
        q: 'The system must connect dozens of external APIs safely without risking expired tokens.',
        a: 'Token management is centralized. Our "API Consumption" module monitors live token status and quotas of each provider, warning of API sunsets before they disrupt operations.'
      },
      {
        q: 'Users double click analysis buttons, launching duplicate background jobs that block the server.',
        a: 'All long-running tasks are structured as unique Job IDs. The system detects if an active job already exists for that client and binds the UI to it instead of starting a new process.'
      },
      {
        q: 'I want to release auto-write features but fear unintended modifications on ad accounts.',
        a: 'We use the "Scaffold auth-blocked" design. Automatic writing pathways are coded but kept dormant. Real applications require explicit human confirmation checkboxes and go through the RBAC approval log.'
      }
    ],
    solutionsTitle: 'Architectural pillars of the system',
    solutions: [
      {
        icon: Terminal,
        title: 'Capacity Center (Capability-Gating)',
        desc: 'Dynamic mapping that disables (grays out) UI sections when scopes or data connections are missing, detailing the exact reason.'
      },
      {
        icon: Code,
        title: 'Modular Tool-calling',
        desc: 'An agentic architecture where every module exposes endpoints as independent LLM tools, facilitating debugging and playbook releases.'
      },
      {
        icon: ShieldCheck,
        title: 'Double-PDF Signature (approval_log)',
        desc: 'An immutable database logging system recording who, what, when, and which signed report authorized write calls to the Ads APIs.'
      }
    ],
    playbookTitle: 'Development & Maintenance Procedures (Internal)',
    playbookDesc: 'Core diagnostic commands to monitor and update the platform:',
    playbooks: [
      {
        cmd: 'get_api_health',
        desc: 'Tests connectivity and latency to all third-party connectors (DataForSEO, BCE, Firecrawl, Anthropic).'
      },
      {
        cmd: 'get_sync_health',
        desc: 'Evaluates the sync status of the local database compared to live advertising account states.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni Architettura Suite Agentica | Internet Valore' : 'Agentic Suite Architecture Solutions | Internet Valore'}
        description={isIt
          ? 'Architettura modular agentic, gating Streamlit OAuth e gestione sicura dei job in background deduplicati.'
          : 'Modular agentic architecture, Streamlit OAuth gating, and secure deduplicated background job management.'}
        path="/solutions/costruttore-sistema"
        serviceType={isIt ? 'Architettura Software Agentica' : 'Agentic Software Architecture'}
        serviceDescription={isIt
          ? 'Architettura modulare agentica: capability-gating OAuth, modular tool-calling e code di job con protezione esecuzioni duplicate.'
          : 'Modular agentic architecture: OAuth capability-gating, modular tool-calling, and task queues with duplicate execution prevention.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Soluzioni' : 'Solutions', path: '/solutions' },
          { name: isIt ? 'Costruttore Sistema' : 'System Builder', path: '/solutions/costruttore-sistema' }
        ]}
        faq={c.pains.map(p => ({ question: p.q, answer: p.a }))}
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-gray-600 uppercase bg-gray-100 px-3 py-1 rounded-full">
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
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-gray-700 transition-colors"
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
                <div className="p-3 bg-gray-100 text-gray-600 rounded-xl mb-6">
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
                <code className="text-gray-400 font-mono text-sm block mb-2">
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
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Sviluppa nuove integrazioni sulla piattaforma' : 'Develop new integrations on the platform'}
          </h3>
          <p className="text-gray-300 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Connetti nuove API e definisci i playbook in modo modulare senza toccare il core engine.'
              : 'Connect new APIs and define playbooks modularly without modifying the core engine.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-gray-800 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
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
