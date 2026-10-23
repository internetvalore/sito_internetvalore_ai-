import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: language === 'it'
        ? 'Cos\'è la Lead Generation Riconciliata con il CRM?'
        : 'What is CRM-Reconciled Lead Generation?',
      answer: language === 'it'
        ? 'È la nostra strategia avanzata di acquisizione contatti che integra il tuo CRM con masterAnalyzer. Prima di addestrare gli algoritmi di Smart Bidding di Google Ads e Meta Ads, filtriamo bot, spam e lead fasulli, ottimizzando le campagne solo sui contatti reali e qualificati.'
        : 'It is our advanced lead acquisition strategy integrating your CRM with masterAnalyzer. Before training Google Ads and Meta Ads Smart Bidding algorithms, we filter out bots, spam, and fake leads, optimizing campaigns exclusively on real, qualified contacts.'
    },
    {
      question: language === 'it'
        ? 'Cosa significa ottimizzare sul profitto (POAS) rispetto al ROAS?'
        : 'What does optimizing for profit (POAS) over ROAS mean?',
      answer: language === 'it'
        ? 'Il ROAS (Return on Ad Spend) misura solo il fatturato lordo generato, ignorando i margini reali, i resi e i costi aziendali. Il POAS (Profit on Ad Spend) calcola il profitto netto effettivo, garantendo che ogni euro investito in pubblicità generi un vero utile aziendale.'
        : 'ROAS (Return on Ad Spend) measures only gross revenue generated, ignoring real margins, returns, and business costs. POAS (Profit on Ad Spend) calculates actual net profit, ensuring every euro invested in advertising yields genuine net profit.'
    },
    {
      question: language === 'it'
        ? 'Cos\'è la tecnologia proprietaria masterAnalyzer?'
        : 'What is the proprietary masterAnalyzer technology?',
      answer: language === 'it'
        ? 'masterAnalyzer è la nostra suite software proprietaria (oltre 1.000.000 di righe totali censite, 775.752 righe Python, 482 tool LLM e 293 playbook operativi). Riconcilia in tempo reale gli ordini e-commerce (Shopify/WooCommerce vs GA4) ed i lead del CRM, blocca la cannibalizzazione delle ricerche brand ed esegue analisi algebriche della variazione dei dati.'
        : 'masterAnalyzer is our proprietary software suite (over 1,000,000 total census lines, 775,752 Python lines, 482 LLM tools, and 293 operational playbooks). It reconciles e-commerce orders (Shopify/WooCommerce vs GA4) and CRM leads in real time, blocks brand search cannibalization, and performs algebraic performance variance analysis.'
    },
    {
      question: language === 'it'
        ? 'Come funziona la consulenza gratuita iniziale?'
        : 'How does the initial free consultation work?',
      answer: language === 'it'
        ? 'La consulenza gratuita è un audit strategico in cui analizziamo le tue campagne pubblicitarie attive, la qualità del tracciamento dati ed i margini di profitto. Identifichiamo dove avvengono gli sprechi e definiamo un piano d\'azione su misura per il tuo business.'
        : 'The free consultation is a strategic audit where we analyze your active ad campaigns, tracking data quality, and profit margins. We identify where budget waste occurs and define a tailored action plan for your business.'
    },
    {
      question: language === 'it'
        ? 'Quali sono i tempi di attivazione ed il modello di lavoro?'
        : 'What are the setup timelines and working model?',
      answer: language === 'it'
        ? 'I tempi di configurazione tecnica e pubblicazione delle campagne sono generalmente di 5-7 giorni lavorativi. Lavoriamo in outsourcing trasparente senza vincoli di lungo termine, con un modello Win-Win basato sulle performance reali.'
        : 'Technical setup and campaign launch timelines are typically 5-7 business days. We operate as transparent outsourced managers with no long-term trap contracts, utilizing a Win-Win model based on real performance.'
    },
    {
      question: language === 'it'
        ? 'Gestite campagne sia per E-commerce che per aziende B2B?'
        : 'Do you manage campaigns for both E-commerce and B2B companies?',
      answer: language === 'it'
        ? 'Sì, gestiamo campagne su Google Ads, Meta Ads e canali adiacenti sia per e-commerce che desiderano massimizzare il POAS netto, sia per aziende B2B che necessitano di un flusso costante di lead qualificati e verificati.'
        : 'Yes, we manage Google Ads, Meta Ads, and adjacent channels for both e-commerce businesses seeking net POAS maximization and B2B companies requiring a steady pipeline of qualified, verified leads.'
    }
  ];

  return (
    <section id="faq" className="section section-quiet border-t border-line">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="title-xl">
            {language === 'it' ? 'Domande Frequenti (FAQ)' : 'Frequently Asked Questions (FAQ)'}
          </h2>
          <p className="lede measure mx-auto mt-4">
            {language === 'it'
              ? 'Risposte trasparenti e approfondite sui nostri servizi di marketing digitale, tecnologia AI e gestione campagne in outsourcing.'
              : 'Transparent, in-depth answers about our digital marketing services, AI technology, and outsourced campaign management.'}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="border-b border-line"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between gap-4 py-4 text-left transition-colors duration-220"
              >
                <span className="text-[1.05rem] font-semibold text-ink-900 leading-snug tracking-[-0.018em] pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-shrink-0 text-ink-400"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5">
                      <p className="text-[0.95rem] text-ink-600 leading-relaxed max-w-[62ch]">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}