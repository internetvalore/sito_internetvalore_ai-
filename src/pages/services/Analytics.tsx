import React from 'react';
import { BarChart2, LineChart, PieChart, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';

export default function Analytics() {
  const { language } = useLanguage();
  const meta = metaContent.analytics[language];

  const content = language === 'it' ? {
    title: 'Analisi e Reporting',
    subtitle: 'Dati che guidano il successo',
    description: 'Trasformiamo i dati della Deep Search in insight strategici, monitorando e ottimizzando le performance in tempo reale per garantirti un vantaggio competitivo',
    features: [
      {
        title: 'Dashboard Personalizzate',
        description: 'Visualizzazione chiara e intuitiva dei KPI più importanti'
      },
      {
        title: 'Monitoraggio Real-time',
        description: 'Controllo costante delle performance in tempo reale'
      },
      {
        title: 'Analisi Competitiva',
        description: 'Confronto con i competitor e analisi di mercato'
      },
      {
        title: 'Report Strategici',
        description: 'Report settimanali con insights e raccomandazioni'
      }
    ],
    process: {
      title: 'Il Nostro Processo',
      steps: [
        {
          title: 'Setup Tracking',
          description: 'Implementazione strumenti di analisi'
        },
        {
          title: 'Definizione KPI',
          description: 'Identificazione metriche chiave'
        },
        {
          title: 'Analisi Dati',
          description: 'Elaborazione e interpretazione'
        },
        {
          title: 'Ottimizzazione',
          description: 'Azioni basate sui dati'
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