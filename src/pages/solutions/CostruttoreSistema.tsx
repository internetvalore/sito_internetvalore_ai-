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
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
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
    <div className="min-h-screen">
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
            {isIt ? 'Sviluppa nuove integrazioni sulla piattaforma' : 'Develop new integrations on the platform'}
          </h3>
          <p className="lede mb-6 max-w-xl mx-auto">
            {isIt 
              ? 'Connetti nuove API e definisci i playbook in modo modulare senza toccare il core engine.'
              : 'Connect new APIs and define playbooks modularly without modifying the core engine.'}
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
