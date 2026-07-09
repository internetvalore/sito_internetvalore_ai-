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
      description: 'Chiama il nostro numero verde 800 940 213 per testare il servizio e scoprire come funziona il nostro risponditore automatico.',
      button: 'Chiama Ora'
    },
    features: [
      {
        title: 'Risponditore vocale intelligente H24',
        description: 'Leonardo risponde sempre al primo squillo per qualificare contatti e prendere appuntamenti, senza operatori.'
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
      description: 'Call our toll-free number 800 940 213 to test the service and discover how our automatic answering system works.',
      button: 'Call Now'
    },
    features: [
      {
        title: 'Intelligent 24/7 Voice Assistant',
        description: 'Leonardo picks up instantly to qualify leads and book calendar appointments, without human agents.'
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
          { name: 'RispondoSubito', path: '/services/rispondi-subito' }
        ]}
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        {/* Test Service CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-blue-50 rounded-xl p-8 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{content.testCta.title}</h2>
          <p className="text-lg text-blue-700 mb-6">{content.testCta.description}</p>
          <motion.a
            href="tel:800940213"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            <Phone className="h-6 w-6 mr-2" />
            {content.testCta.button}
          </motion.a>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900">{feature.title}</h2>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              {content.process.title}
            </h2>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-between">
                {content.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white px-4"
                  >
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">
                        {index + 1}
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-12 max-w-xl mx-auto sm:px-10 sm:py-16 lg:max-w-screen-xl lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {content.cta.title}
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-blue-100">
                    {content.cta.description}
                  </p>
                  <Link
                    to={`/${language}/contact`}
                    className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
                  >
                    {content.cta.button}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cross-linking to related solutions */}
          <div className="mt-20 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {language === 'it' ? 'Soluzioni per il tuo ruolo' : 'Solutions for your role'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to={`/${language}/solutions/titolare-pmi`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{language === 'it' ? 'Titolare PMI' : 'SME Owner'}</h3>
                <p className="text-sm text-gray-500 mt-2">{language === 'it' ? 'Controllo budget e profitto reale' : 'Budget control and real profit'}</p>
              </Link>
              <Link to={`/${language}/services/lead-generation`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Lead Generation</h3>
                <p className="text-sm text-gray-500 mt-2">{language === 'it' ? 'Deep Search e saturazione nicchie' : 'Deep Search and niche saturation'}</p>
              </Link>
              <Link to={`/${language}/services/analytics`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Analytics</h3>
                <p className="text-sm text-gray-500 mt-2">{language === 'it' ? 'Riconciliazione eventi e scomposizione LMDI' : 'Event reconciliation and LMDI decomposition'}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}