import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  Database, ShieldCheck, Cpu, ChevronDown, CheckCircle,
  AlertCircle, Phone, RefreshCw, Layers, CheckSquare
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function MeasurementEngineer() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER IL MEASUREMENT ENGINEER & DATA ANALYST',
    title: 'Riconciliazione ordini Shopify e diagnosi automatica dei tracking-break',
    subtitle: 'Come eliminare le discrepanze tra gestionale e Google Analytics e garantire l\'integrità totale del dato di tracciamento.',
    painsTitle: 'I punti di dolore quotidiani legati alla qualità del dato',
    pains: [
      {
        q: 'Ho ordini su Shopify o contatti nel CRM che non compaiono in GA4, sballando i dati delle campagne.',
        a: 'La discrepanza è la norma negli e-commerce. Il nostro modulo "Copertura Tracciamento" riconcilia le transazioni reali del backend con gli ID transazione registrati da GA4. Se la copertura scende sotto il 50%, il sistema declassa da solo i report in "qualitativi": no dati certi, no verdetti in €.'
      },
      {
        q: 'I tag o i pixel di tracciamento smettono di funzionare all\'improvviso dopo un aggiornamento del sito.',
        a: 'La rottura silente del tracking costa migliaia di euro. Usiamo il modulo "Sentinella key-event" che monitora se un evento chiave (come `purchase` o `lead`) smette di sparare mentre gli utenti sul sito navigano regolarmente. Il comando `hunt_tracking_break` isola subito il tag rotto.'
      },
      {
        q: 'I link delle campagne Meta non hanno gli UTM corretti, accecando l\'attribuzione.',
        a: 'Gli UTM errati impediscono a Google Analytics di capire da dove arrivano i clienti. Il nostro "Audit UTM Meta" controlla regolarmente la coerenza tassonomica delle tue inserzioni attive, segnalando subito le discrepanze prima di inquinare lo storico.'
      }
    ],
    solutionsTitle: 'Gli strumenti di controllo dati nella suite',
    solutions: [
      {
        icon: RefreshCw,
        title: 'Copertura Tracciamento (Reconciler)',
        desc: 'Una dashboard di riconciliazione che incrocia le transazioni backend con GA4, certificando la percentuale reale di ordini tracciati per valutare l\'attendibilità delle decisioni.'
      },
      {
        icon: CheckSquare,
        title: 'Audit Tag Manager & Event Blueprint',
        desc: 'Un controllo automatico che confronta l\'inventario dei tag caricati su GTM con i requisiti del modello del cliente (e-commerce o lead-gen), evidenziando le mancanze.'
      },
      {
        icon: AlertCircle,
        title: 'Allarme Tracking-Break Continuo',
        desc: 'Un sistema di monitoraggio continuo che invia allarmi immediati se un evento chiave si disattiva, isolando il tag o il funnel specifico colpito.'
      }
    ],
    playbookTitle: 'Playbook di Ingegneria del Dato (Vena A)',
    playbookDesc: 'Le catene di analisi per connettere, validare e purificare i dati:',
    playbooks: [
      {
        cmd: 'run_tracking_audit',
        desc: 'Verifica la tassonomia degli eventi GA4, la configurazione dei tag GTM e rileva tag duplicati o assenti.'
      },
      {
        cmd: 'hunt_tracking_break',
        desc: 'Esegue una scansione temporale degli eventi delle ultime 72 ore per rilevare deviazioni anomale nel volume di conversioni registrate.'
      },
      {
        cmd: 'lead_count_reconcile_before_cpl',
        desc: 'Riconcilia il conteggio lead tra pannello ads e GA4 per stabilire il costo per lead (CPL) reale prima di ritarare gli algoritmi.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR MEASUREMENT ENGINEERS & DATA ANALYSTS',
    title: 'Shopify order reconciliation and automated tracking-break diagnostics',
    subtitle: 'How to eliminate discrepancies between backend databases and Google Analytics, ensuring complete data integrity.',
    painsTitle: 'Typical daily pains regarding data quality and tracking',
    pains: [
      {
        q: 'I have Shopify orders or CRM contacts that do not appear in GA4, skewing campaign data.',
        a: 'Data discrepancy is common in e-commerce. Our "Tracking Coverage" module reconciles backend transactions with transaction IDs in GA4. If coverage falls below 50%, the system downgrades reports to "qualitative": no solid data, no decisions in €.'
      },
      {
        q: 'Tracking tags or pixels stop firing suddenly after a website release.',
        a: 'Silent tracking breakage costs thousands. We use the "Key-event Sentinel" module that monitors if a key conversion tag (like `purchase` or `lead`) stops firing while users browse. The `hunt_tracking_break` playbook isolates the broken tag.'
      },
      {
        q: 'Meta campaigns lack correct UTM parameters, blinding the attribution models.',
        a: 'Wrong UTMs prevent Google Analytics from knowing where traffic comes from. Our "Meta UTM Audit" regularly checks the taxonomic hygiene of your live ads, flagging issues before they pollute the historical database.'
      }
    ],
    solutionsTitle: 'Data validation tools in the suite',
    solutions: [
      {
        icon: RefreshCw,
        title: 'Tracking Coverage (Reconciler)',
        desc: 'A reconciliation dashboard cross-referencing backend transactions with GA4, certifying the true percentage of tracked orders to evaluate decision reliability.'
      },
      {
        icon: CheckSquare,
        title: 'Tag Manager Audit & Event Blueprint',
        desc: 'An automated check comparing the GTM container setup with client-mode requirements (e-commerce vs. lead-gen), flagging missing actions.'
      },
      {
        icon: AlertCircle,
        title: 'Continuous Tracking-Break Alerting',
        desc: 'A monitoring system sending immediate alerts if a key event falls silent, isolating the specific tag or step in the funnel.'
      }
    ],
    playbookTitle: 'Data Engineering Playbooks (A Vena)',
    playbookDesc: 'Analysis chains to connect, validate, and clean incoming data flows:',
    playbooks: [
      {
        cmd: 'run_tracking_audit',
        desc: 'Verifies GA4 event taxonomy, GTM container configurations, and flags duplicated or missing tags.'
      },
      {
        cmd: 'hunt_tracking_break',
        desc: 'Scans the last 72 hours of events to flag anomalous drops in logged conversions compared to site traffic.'
      },
      {
        cmd: 'lead_count_reconcile_before_cpl',
        desc: 'Reconciles lead submissions between Ads manager and GA4 to establish true CPL before optimizing bids.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni Qualità del Dato e Tracciamento | Internet Valore' : 'Data Quality & Tracking Solutions | Internet Valore'}
        description={isIt
          ? 'Riconciliazione ordini Shopify vs GA4, audit Tag Manager automatico e allarmi tempestivi per tracciamenti rotti.'
          : 'Reconcile Shopify orders vs GA4, automate Tag Manager audits, and get fast alerts on broken tracking.'}
        path="/solutions/measurement-engineer"
        serviceType={isIt ? 'Data Quality & Tracking Assurance' : 'Data Quality & Tracking Assurance'}
        serviceDescription={isIt
          ? 'Riconciliazione ordini Shopify/CRM contro GA4, rilevamento automatico rotture tag e monitoraggio integrità token API.'
          : 'Shopify/CRM order reconciliation against GA4, automated tag breakage detection, and API token health monitoring.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Soluzioni' : 'Solutions', path: '/solutions' },
          { name: 'Measurement Engineer', path: '/solutions/measurement-engineer' }
        ]}
        faq={c.pains.map(p => ({ question: p.q, answer: p.a }))}
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-purple-600 uppercase bg-purple-100 px-3 py-1 rounded-full">
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
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors"
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
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mb-6">
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
                <code className="text-purple-400 font-mono text-sm block mb-2">
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
        <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Vuoi riconciliare il tuo tracciamento e-commerce?' : 'Want to reconcile your e-commerce tracking?'}
          </h3>
          <p className="text-purple-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Effettua l\'audit del tracciamento sul tuo account e calcola il fatturato reale misurabile.'
              : 'Audit the tracking setup on your account and compute the real measurable revenue.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
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
