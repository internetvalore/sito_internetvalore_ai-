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
        serviceType={meta.serviceType}
        serviceDescription={meta.serviceDescription}
        priceRange={meta.priceRange}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Servizi' : 'Services', path: '/services' },
          { name: language === 'it' ? 'Analytics' : 'Analytics', path: '/services/analytics' }
        ]}
      />
      <div className="bg-white">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        <div className="shell">
          <div className="section">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="card card-hover relative"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="icon-tile">
                        {index === 0 && <BarChart2 className="h-5 w-5" />}
                        {index === 1 && <LineChart className="h-5 w-5" />}
                        {index === 2 && <PieChart className="h-5 w-5" />}
                        {index === 3 && <TrendingUp className="h-5 w-5" />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold text-ink-900">{feature.title}</h2>
                      <p className="mt-2 text-[0.95rem] text-ink-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <Link to={`/${language}/solutions/measurement-engineer`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Measurement Engineer' : 'Measurement Engineer'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Riconciliazione ordini e audit tracciamento automatico' : 'Order reconciliation and automated tracking audit'}</p>
              </Link>
              <Link to={`/${language}/solutions/account-manager`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">Account Manager</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Decomposizione LMDI e report narrativi' : 'LMDI decomposition and narrative reports'}</p>
              </Link>
              <Link to={`/${language}/solutions/advertiser-senza-tracking`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Advertiser Senza Pixel' : 'No-Pixel Advertiser'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'MMM e Adstock per canali senza tracciamento' : 'MMM and Adstock for channels without tracking'}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}