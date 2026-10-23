import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';

export default function RispondiSubito() {
  const { language } = useLanguage();
  const meta = metaContent.rispondiSubito[language];

  const content = language === 'it' ? {
    title: 'RispondoSubito',
    subtitle: 'Centralino intelligente guidato dall\'IA per rispondere H24',
    description: 'Un Alleato basato sull\'IA per dominare il mercato. Centralino intelligente per intercettare le richieste H24 e trasformare ogni interazione in opportunità.',
    testCta: {
      title: 'Prova il Servizio Ora!',
      description: 'Chiama il Numero Verde 800 940 213 attivo 7x24: risponde Leonardo, il nostro assistente AI digitale, che raccoglie tutte le informazioni per farti richiamare da un consulente umano.',
      button: 'Chiama Ora'
    },
    features: [
      {
        title: 'Risponditore vocale intelligente H24',
        description: 'Leonardo risponde 7x24 al Numero Verde 800 940 213 per raccogliere tutte le informazioni necessarie e far richiamare il cliente da un consulente umano.'
      },
      {
        title: 'Integrazione CRM',
        description: 'Registra e mappa le chiamate direttamente sulla scheda cliente, aggiornando lo stato in tempo reale.'
      },
      {
        title: 'Riconciliazione eventi telefonici',
        description: 'Collega i numeri di telefono con le sorgenti Ads per attribuire correttamente i lead offline.'
      },
      {
        title: 'Nessun costo operatore',
        description: 'Struttura automatizzata per tagliare i tempi di attesa e i costi fissi telefonici.'
      }
    ],
    process: {
      title: 'Come Integriamo Leonardo',
      steps: [
        {
          title: 'Prompt Engineering & KB',
          description: 'Configuriamo le istruzioni e la knowledge base dell\'assistente Leonardo.'
        },
        {
          title: 'Integrazione API',
          description: 'Colleghiamo le numerazioni VoIP al CRM aziendale ed ai calendari.'
        },
        {
          title: 'Esecuzione Staging',
          description: 'Attiviamo il risponditore su un numero di test per verificarne il comportamento.'
        },
        {
          title: 'Allineamento Campagne',
          description: 'Colleghiamo le conversioni telefoniche reali allo Smart Bidding Ads.'
        }
      ]
    },
    cta: {
      title: 'Vuoi automatizzare il tuo centralino?',
      description: 'Prenota un appuntamento per configurare una demo personalizzata di Leonardo.',
      button: 'Contattaci Ora'
    }
  } : {
    title: 'RispondoSubito',
    subtitle: 'Intelligent AI-driven switchboard to answer 24/7',
    description: 'An AI-based Ally to dominate the market. Intelligent switchboard to intercept requests 24/7 and turn every interaction into an opportunity.',
    testCta: {
      title: 'Try the Service Now!',
      description: 'Call our toll-free number 800 940 213 (active 24/7): answered by Leonardo, our digital AI assistant, who gathers all info so a human consultant can call you back.',
      button: 'Call Now'
    },
    features: [
      {
        title: 'Intelligent 24/7 Voice Assistant',
        description: 'Leonardo answers 24/7 on Toll-Free 800 940 213 to collect all necessary information for a prompt callback from a human consultant.'
      },
      {
        title: 'CRM Deep Integration',
        description: 'Maps and logs calls directly to client profiles, updating stages in real time.'
      },
      {
        title: 'Offline Conversion Reconciliation',
        description: 'Matches inbound caller numbers with Google/Meta ad click data to properly attribute offline leads.'
      },
      {
        title: 'Zero Operator Overhead',
        description: 'Automated system to eliminate user hold times and cut flat-rate switchboard costs.'
      }
    ],
    process: {
      title: 'Our Integration Protocol',
      steps: [
        {
          title: 'Prompt Engineering & KB',
          description: 'Configure Leonardo\'s custom prompts and target knowledge bases.'
        },
        {
          title: 'API Integration',
          description: 'Connect switchboards to CRM databases and booking calendars.'
        },
        {
          title: 'Staged Testing',
          description: 'Activate the responder on a test number to audit conversation quality.'
        },
        {
          title: 'Campaign Alignment',
          description: 'Link offline phone call booking conversions directly into Smart Bidding algorithms.'
        }
      ]
    },
    cta: {
      title: 'Ready to automate your switchboard?',
      description: 'Book an appointment to set up a customized demo of Leonardo for your business.',
      button: 'Contact Us Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/rispondi-subito"
        serviceType={meta.serviceType}
        serviceDescription={meta.serviceDescription}
        priceRange={meta.priceRange}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Servizi' : 'Services', path: '/services' },
          { name: 'RispondiSubito', path: '/services/rispondi-subito' }
        ]}
      />
      <div className="bg-white">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        {/* Test Service CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="section shell text-center"
        >
          <h2 className="title-lg mb-4">{content.testCta.title}</h2>
          <p className="lede measure mx-auto mb-6">{content.testCta.description}</p>
          <motion.a
            href="tel:800940213"
            className="btn btn-primary"
          >
            <Phone className="h-4 w-4" />
            {content.testCta.button}
          </motion.a>
        </motion.div>

        <div className="shell">
          <div className="section grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="card card-hover relative"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-ink-900">{feature.title}</h2>
                    <p className="mt-2 text-[0.95rem] text-ink-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="section"
          >
            <h2 className="title-lg text-center mb-10">
              {content.process.title}
            </h2>
            <div className="relative">
              <div className="absolute inset-0 hidden md:flex items-center" aria-hidden="true">
                <div className="w-full hairline" />
              </div>
              <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
                {content.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                    className="card card-quiet card-hover"
                  >
                    <div className="relative">
                      <div className="icon-tile rounded-full text-lg font-semibold">
                        {index + 1}
                      </div>
                      <div className="mt-4">
                        <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                        <p className="mt-2 text-[0.9rem] text-ink-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="section"
          >
            <div className="card overflow-hidden">
              <div className="px-6 py-12 max-w-xl mx-auto sm:px-10 sm:py-16 lg:max-w-screen-xl lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="title-lg">
                    {content.cta.title}
                  </h2>
                  <p className="mt-4 lede measure mx-auto">
                    {content.cta.description}
                  </p>
                  <Link
                    to={`/${language}/contact`}
                    className="mt-8 btn btn-primary"
                  >
                    {content.cta.button}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cross-linking to related solutions */}
          <div className="section pb-8">
            <h2 className="title-lg text-center mb-8">
              {language === 'it' ? 'Soluzioni per il tuo ruolo' : 'Solutions for your role'}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Link to={`/${language}/solutions/titolare-pmi`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Titolare PMI' : 'SME Owner'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Controllo budget e profitto reale' : 'Budget control and real profit'}</p>
              </Link>
              <Link to={`/${language}/services/lead-generation`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">Lead Generation</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Deep Search e saturazione nicchie' : 'Deep Search and niche saturation'}</p>
              </Link>
              <Link to={`/${language}/services/analytics`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">Analytics</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Riconciliazione eventi e scomposizione LMDI' : 'Event reconciliation and LMDI decomposition'}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}