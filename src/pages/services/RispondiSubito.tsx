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
        title: 'Risponditore automatico H24',
        description: 'Disponibile 24 ore su 24, 7 giorni su 7 per non perdere mai una chiamata.'
      },
      {
        title: 'Smistamento intelligente delle chiamate',
        description: 'Trasferimento delle chiamate al reparto giusto, senza attese inutili.'
      },
      {
        title: 'Integrazione con CRM',
        description: 'Tutte le informazioni sui clienti a portata di mano, per un\'assistenza personalizzata.'
      },
      {
        title: 'Nessun costo per operatore',
        description: 'Risparmia sui costi del personale e aumenta l\'efficienza.'
      }
    ],
    process: {
      title: 'Come Funziona',
      steps: [
        {
          title: 'Configurazione',
          description: 'Definisci le regole di risposta e smistamento'
        },
        {
          title: 'Integrazione',
          description: 'Collega il centralino al tuo CRM e agli altri strumenti aziendali'
        },
        {
          title: 'Attivazione',
          description: 'Metti online il centralino e inizia a rispondere alle chiamate'
        },
        {
          title: 'Monitoraggio',
          description: 'Controlla le statistiche e ottimizza le performance'
        }
      ]
    },
    cta: {
      title: 'Pronto a migliorare il tuo servizio clienti?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
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
        title: '24/7 automatic answering',
        description: 'Available 24 hours a day, 7 days a week to never miss a call.'
      },
      {
        title: 'Intelligent call routing',
        description: 'Transfer calls to the right department, without unnecessary waiting.'
      },
      {
        title: 'CRM integration',
        description: 'All customer information at your fingertips for personalized support.'
      },
      {
        title: 'No operator costs',
        description: 'Save on personnel costs and increase efficiency.'
      }
    ],
    process: {
      title: 'How it Works',
      steps: [
        {
          title: 'Configuration',
          description: 'Define the answering and routing rules'
        },
        {
          title: 'Integration',
          description: 'Connect the switchboard to your CRM and other business tools'
        },
        {
          title: 'Activation',
          description: 'Put the switchboard online and start answering calls'
        },
        {
          title: 'Monitoring',
          description: 'Check the statistics and optimize performance'
        }
      ]
    },
    cta: {
      title: 'Ready to improve your customer service?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/rispondi-subito"
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
        </div>
      </div>
    </>
  );
}