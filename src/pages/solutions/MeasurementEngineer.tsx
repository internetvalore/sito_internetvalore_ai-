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
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
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
    <div className="min-h-screen">
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
            {isIt ? 'Vuoi riconciliare il tuo tracciamento e-commerce?' : 'Want to reconcile your e-commerce tracking?'}
          </h3>
          <p className="lede mb-6 max-w-xl mx-auto">
            {isIt 
              ? 'Effettua l\'audit del tracciamento sul tuo account e calcola il fatturato reale misurabile.'
              : 'Audit the tracking setup on your account and compute the real measurable revenue.'}
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
