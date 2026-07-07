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
    subtitle: 'Dati riconciliati e scomposizione delle variazioni',
    description: 'Forniamo un tracciamento matematico dell\'andamento delle tue campagne. Utilizziamo masterAnalyzer per scomposizioni LMDI e modelli adstock per attribuire in modo onesto ogni euro investito.',
    features: [
      {
        title: 'Scomposizione LMDI',
        description: 'Isolamento algebrico esatto delle cause di variazione dei KPI (Revenue, CPA, CPL).'
      },
      {
        title: 'Audit Tracciamento (Reconciler)',
        description: 'Incrocio sistematico degli ID ordine reali di backend contro i dati GA4 per misurare la copertura.'
      },
      {
        title: 'Modelli adstock MMM',
        description: 'Analisi adstock e NNLS per valutare l\'efficienza dei canali paid su Amazon e vendite offline.'
      },
      {
        title: 'Freshness & Token Check',
        description: 'Sanity check sui connettori e refresh token per prevenire silenziose perdite di dati storici.'
      }
    ],
    process: {
      title: 'Il Nostro Processo Analitico',
      steps: [
        {
          title: 'Setup & Baseline t0',
          description: 'Installazione adapters, connessione sorgenti e congelamento dati storici baseline.'
        },
        {
          title: 'Mappa di Ragionamento',
          description: 'Cablaggio delle euristiche nel prompt preambolo dell\'agente per guidare l\'analisi.'
        },
        {
          title: 'Riconciliazione CRM',
          description: 'Filtro automatico di lead duplicati e contatti bot per pulire i segnali prima delle decisioni.'
        },
        {
          title: 'Takeover & Action Staging',
          description: 'Trascrizione degli scostamenti in piani operativi tipizzati approvabili in outsourcing.'
        }
      ]
    },
    cta: {
      title: 'Vuoi capire perché i tuoi KPI variano?',
      description: 'Prenota un audit analitico e scopri la percentuale reale di ordini che il tuo tracciamento non vede.',
      button: 'Esplora masterAnalyzer'
    }
  } : {
    title: 'Data Analytics & Reporting',
    subtitle: 'Reconciled data and decomposition of variances',
    description: 'We supply mathematical tracking of your campaigns. We use masterAnalyzer for LMDI decompositions and adstock models to honestly attribute every spent euro.',
    features: [
      {
        title: 'LMDI Decomposition',
        description: 'Algebraic analysis isolating the exact factors causing shifts in revenue, CPA, and CPL.'
      },
      {
        title: 'Tracking Audit (Reconciler)',
        description: 'Cross-references CRM and Shopify backend database events to score standard tag coverage.'
      },
      {
        title: 'MMM Adstock models',
        description: 'NNLS regression to attribute returns to Meta and offline channels without active pixel tracking.'
      },
      {
        title: 'Token & Sync Sentinel',
        description: 'Continuous automated connection checks to avoid silent data losses due to API key expiry.'
      }
    ],
    process: {
      title: 'Our Analytical Protocol',
      steps: [
        {
          title: 'Setup & Baseline t0',
          description: 'Deploy data store adapters, sync historic datasets, and lock baseline benchmark.'
        },
        {
          title: 'Reasoning Preambles',
          description: 'Inject client capability maps and heuristics directly into agent system prompts.'
        },
        {
          title: 'CRM Reconciliation',
          description: 'Clean database duplicates and bot entries to deliver reconciled numbers.'
        },
        {
          title: 'Takeover & Action Staging',
          description: 'Transform analytics anomalies directly into structured, staging-approved action items.'
        }
      ]
    },
    cta: {
      title: 'Want to unlock what drives your KPI shifts?',
      description: 'Book an analytics audit and learn the real order coverage percentage of your store.',
      button: 'Explore masterAnalyzer'
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