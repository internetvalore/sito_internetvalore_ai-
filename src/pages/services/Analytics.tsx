import { BarChart2, LineChart, PieChart, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';
import { formatSEOText } from '../../utils/seo';

export default function Analytics() {
  const { language } = useLanguage();
  const meta = metaContent.analytics[language];

  const content = language === 'it' ? {
    title: 'Data Analytics Aziendale',
    subtitle: 'Trasforma i Numeri in Decisioni Strategiche',
    description: 'I dati sono il nuovo petrolio, ma solo se sai come estrarli. Attraverso la **Data Analytics Aziendale**, utilizziamo la **Deep Search** per navigare tra **dati reali** e ottenere **insights** azionabili che guidano il tuo **decision making** e assicurano un alto **ROI**.',
    features: [
      {
        title: '**Business Intelligence** Avanzata',
        description: 'Creiamo un\'infrastruttura di dati solida per monitorare i tuoi **KPI** in tempo reale e prevedere le performance future.'
      },
      {
        title: '**Dashboard Interattive**',
        description: 'Visualizza la salute della tua azienda con strumenti di analisi dinamici che rendono ogni report chiaro e immediato.'
      },
      {
        title: '**Tracciamento** e Attribuzione',
        description: 'Misuriamo ogni interazione dell\'utente per attribuire correttamente il valore a ogni canale e ottimizzare il tuo **budget pubblicitario**.'
      },
      {
        title: '**Analisi Predittiva** IA',
        description: 'Utilizziamo algoritmi di **Machine Learning** per identificare pattern nascosti e darti un **vantaggio competitivo** duraturo nel tuo **digital success**.'
      }
    ],
    process: {
      title: 'Protocollo Data Driven',
      steps: [
        {
          title: 'Data Audit',
          description: 'Verifica dell\'integrità delle sorgenti per assicurare una raccolta di **dati reali** e puliti.'
        },
        {
          title: '**Integrazione Dati**',
          description: 'Connettiamo diverse piattaforme in un unico ecosistema di **Business Intelligence**.'
        },
        {
          title: 'Insights Delivery',
          description: 'Generazione di report e **insights** periodici per il miglioramento costante dei processi aziendali.'
        },
        {
          title: 'Actionable Results',
          description: 'Traduzione dei dati in azioni concrete per scalare il tuo business e ottenere una chiara **strategia di marketing**.'
        }
      ]
    },
    cta: {
      title: 'Pronto a prendere decisioni basate sui dati?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
    }
  } : {
    title: 'Analytics & Reporting',
    subtitle: 'Data-driven success',
    description: 'We transform Deep Search data into strategic insights, monitoring and optimizing performance in real-time to guarantee you a competitive advantage',
    features: [
      {
        title: 'Custom Dashboards',
        description: 'Clear and intuitive visualization of the most important KPIs'
      },
      {
        title: 'Real-time Monitoring',
        description: 'Constant performance monitoring in real-time'
      },
      {
        title: 'Competitive Analysis',
        description: 'Competitor comparison and market analysis'
      },
      {
        title: 'Strategic Reports',
        description: 'Weekly reports with insights and recommendations'
      }
    ],
    process: {
      title: 'Our Process',
      steps: [
        {
          title: 'Tracking Setup',
          description: 'Implementation of analytics tools'
        },
        {
          title: 'KPI Definition',
          description: 'Identification of key metrics'
        },
        {
          title: 'Data Analysis',
          description: 'Processing and interpretation'
        },
        {
          title: 'Optimization',
          description: 'Data-driven actions'
        }
      ]
    },
    cta: {
      title: 'Ready to make data-driven decisions?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/analytics"
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        {index === 0 && <BarChart2 className="h-6 w-6" />}
                        {index === 1 && <LineChart className="h-6 w-6" />}
                        {index === 2 && <PieChart className="h-6 w-6" />}
                        {index === 3 && <TrendingUp className="h-6 w-6" />}
                      </div>
                    </div>
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