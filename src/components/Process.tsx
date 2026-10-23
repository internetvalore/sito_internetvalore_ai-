import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

export default function Process() {
  const { language } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: language === 'it' ? 'Discovery & Audit' : 'Discovery & Audit',
      description: language === 'it' 
        ? 'Rileviamo gli intenti reali e stabiliamo la baseline storica t0 con il Dossier di Presa in Carico.'
        : 'We map search intent and competitor claims, setting a versioned t0 benchmark.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: PenTool,
      title: language === 'it' ? 'Strategia Persuasiva' : 'Persuasion Blueprint',
      description: language === 'it'
        ? 'Ancoriamo i concept creativi alle ferite emotive del target ed ai bisogni Maslow nel Creative Studio.'
        : 'We build visual and copy concepts anchored to Maslow needs and target wounds.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Rocket,
      title: language === 'it' ? 'Staging in PAUSA' : 'Staging & Dry-run',
      description: language === 'it'
        ? 'Creiamo le nuove campagne sempre in stato PAUSA, verificandole in dry-run prima di renderle attive.'
        : 'Campaigns are created strictly as PAUSED. Changes are validated in dry-run before going live.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart,
      title: language === 'it' ? 'Riconciliazione & POAS' : 'CRM & POAS Control',
      description: language === 'it'
        ? 'Riconciliamo i lead ed ordini reali CRM contro lo spam, ottimizzando sul profitto netto (POAS).'
        : 'We reconcile CRM leads and Shopify sales, optimizing campaigns exclusively on real profit.',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="section section-quiet">
      <div className="shell">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="title-xl"
          >
            {language === 'it' ? 'Come Lavoriamo' : 'How We Work'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
            className="lede measure mt-4 mx-auto"
          >
            {language === 'it' 
              ? 'Il nostro processo in quattro step per il tuo successo'
              : 'Our four-step process for your success'}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-line -translate-y-1/2" />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: EASE, delay: index * 0.06 }}
                className={`relative card card-hover${index % 2 ? ' card-quiet' : ''}`}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <p className="eyebrow">{index + 1}</p>
                  <span className="icon-tile">
                    <step.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div>
                  <h3 className="title-lg mb-3">{step.title}</h3>
                  <p className="text-[0.95rem] text-ink-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}