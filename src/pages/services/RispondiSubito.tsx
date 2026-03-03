import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';
import { formatSEOText } from '../../utils/seo';

export default function RispondiSubito() {
  const { language } = useLanguage();
  const meta = metaContent.rispondiSubito[language];

  const content = language === 'it' ? {
    title: 'RispondoSubito',
    subtitle: '**Centralino Virtuale IA** : Risposta H24 per il tuo Business',
    description: 'Non perdere più una chiamata. Attraverso il nostro **Centralino Virtuale IA**, garantiamo una **risposta H24** professionale, utilizzando la **Deep Search** per qualificare ogni lead e trasformare le conversazioni in **opportunità** concrete di business e alto **ROI**.',
    testCta: {
      title: 'Testa la Potenza dell\'IA!',
      description: 'Chiama l\'800 940 213 per scoprire come l\'**intelligenza artificiale** gestisce il tuo **customer service** in tempo reale attraverso l\'**automazione**.',
      button: 'Chiama Ora'
    },
    features: [
      {
        title: '**Automazione Telefonica** H24',
        description: 'Disponibilità totale 24/7 per non perdere mai un **contatto qualificato**, eliminando le attese e migliorando il **conversion rate**.'
      },
      {
        title: '**Smistamento Chiamate** Intelligente',
        description: 'L\'IA riconosce l\'intento e indirizza la chiamata verso il corretto **workflow** aziendale attraverso un accurato **targeting**.'
      },
      {
        title: '**Integrazione CRM** Totale',
        description: 'Sincronizzazione immediata dei dati per una **lead qualification** chirurgica e un tracciamento perfetto basato su **dati reali**.'
      },
      {
        title: '**Risparmio Costi** e Scalabilità',
        description: 'Riduci drasticamente le spese fisse aumentando l\'**efficienza operativa** del tuo ufficio e il tuo **vantaggio competitivo**.'
      }
    ],
    process: {
      title: 'Ingegneria del Contatto',
      steps: [
        {
          title: 'Mapping Workflow',
          description: 'Analizziamo i tuoi processi per definire le regole di **smistamento chiamate** e la **Customer Experience**.'
        },
        {
          title: 'IA Training',
          description: 'Istruiamo il **centralino virtuale IA** sulla tua conoscenza aziendale specifica tramite **IA Generativa**.'
        },
        {
          title: 'Integrazione Sistemi',
          description: 'Connettiamo l\'**automazione** ai tuoi strumenti di lavoro e al CRM per il tuo **digital success**.'
        },
        {
          title: 'Monitoraggio & ROI',
          description: 'Analizziamo i risultati per massimizzare la **user experience** e il ritorno sull\'investimento.'
        }
      ]
    },
    cta: {
      title: 'Pronto a eliminare le chiamate perse?',
      description: 'Attiva RispondoSubito e porta la tua assistenza al livello superiore.',
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
          <h2 className="text-2xl font-bold text-blue-900 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(content.testCta.title) }} />
          <p className="text-lg text-blue-700 mb-6" dangerouslySetInnerHTML={{ __html: formatSEOText(content.testCta.description) }} />
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
                      <h2 className="text-lg font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                      <p className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
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
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12" dangerouslySetInnerHTML={{ __html: formatSEOText(content.process.title) }} />

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
                        <h3 className="text-lg font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: formatSEOText(step.title) }} />
                        <p className="mt-2 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(step.description) }} />
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
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl" dangerouslySetInnerHTML={{ __html: formatSEOText(content.cta.title) }} />
                  <p className="mt-4 text-lg leading-6 text-blue-100" dangerouslySetInnerHTML={{ __html: formatSEOText(content.cta.description) }} />
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