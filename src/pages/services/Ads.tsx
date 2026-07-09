import React from 'react';
import { Target, TrendingUp, BarChart2, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';

export default function Ads() {
  const { language } = useLanguage();
  const meta = metaContent.ads[language];

  const content = language === 'it' ? {
    title: 'Gestione Google & Meta Ads',
    subtitle: 'Modifiche sicure e controllo degli sprechi di budget',
    description: 'Gestiamo le tue campagne pubblicitarie Google e Meta integrando masterAnalyzer per eliminare gli sprechi del brand e della delivery, ottimizzando solo sui dati reali.',
    features: [
      {
        title: 'Raggi X automatici',
        description: 'Audit periodico del tracciamento e dello spreco per-device per stanare anomalie prima dei costi.'
      },
      {
        title: 'Delivery dayparting',
        description: 'Controllo orario e device bid modifiers per ottimizzare la spesa su dati storici statistici.'
      },
      {
        title: 'Modifiche in Staging',
        description: 'Le nuove campagne vengono caricate in PAUSA ed esaminate prima dell\'invio reale.'
      },
      {
        title: 'Restrutturazione RSA',
        description: 'Annunci RSA strutturati in base ai cluster SEO e ai claim emersi dai competitor.'
      }
    ],
    process: {
      title: 'Il Nostro Metodo di Gestione',
      steps: [
        {
          title: 'Audit baseline t0',
          description: 'Fermiamo la baseline storica e tracciamo gli errori dell\'attuale configurazione.'
        },
        {
          title: 'Intent Mapping',
          description: 'Mappiamo gli intenti e le query escludendo la cannibalizzazione brand.'
        },
        {
          title: 'Staging & Dry-run',
          description: 'Stadiamo gli interventi in coda approvazione ed effettuiamo dry-run di conformità.'
        },
        {
          title: 'Riconciliazione POAS',
          description: 'Colleghiamo le metriche reali ed ottimizziamo sul ritorno effettivo.'
        }
      ]
    },
    cta: {
      title: 'Pronto a eliminare gli sprechi pubblicitari?',
      description: 'Metti alla prova le tue campagne attuali con un audit Raggi X guidato dai dati.',
      button: 'Prenota un Audit gratuito'
    }
  } : {
    title: 'Google & Meta Ads Management',
    subtitle: 'Safe campaign modifications and budget waste control',
    description: 'We manage your Google and Meta Ads campaigns integrated with masterAnalyzer to block brand cannibalization and delivery waste.',
    features: [
      {
        title: 'Automatic X-Ray',
        description: 'Periodic tracking and per-device waste audits to fix account drops before they burn cash.'
      },
      {
        title: 'Delivery Dayparting',
        description: 'Hourly and device bid adjustments to optimize daily pacing based on historical math.'
      },
      {
        title: 'Paused Staging',
        description: 'New campaigns are built strictly as PAUSED and review-staged before deployment.'
      },
      {
        title: 'RSA restructuring',
        description: 'RSA search ads structured around competitor claims and high-conversion search queries.'
      }
    ],
    process: {
      title: 'Our Campaign Process',
      steps: [
        {
          title: 'Baseline t0 Audit',
          description: 'Freeze historical benchmarks and discover errors in current configurations.'
        },
        {
          title: 'Intent Mapping',
          description: 'Map user intent and queries while blocking branded search cannibalization.'
        },
        {
          title: 'Staging & Dry-run',
          description: 'Stage changes in the approval queue and execute dry-run API validation.'
        },
        {
          title: 'POAS Optimization',
          description: 'Sync real backend orders and optimize campaigns strictly on net profit margins.'
        }
      ]
    },
    cta: {
      title: 'Ready to cut advertising waste?',
      description: 'Test your current campaigns with our data-driven 5-phase X-Ray audit.',
      button: 'Book a Free Audit'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/ads"
        serviceType={meta.serviceType}
        serviceDescription={meta.serviceDescription}
        priceRange={meta.priceRange}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Servizi' : 'Services', path: '/services' },
          { name: language === 'it' ? 'Gestione Ads' : 'Ads Management', path: '/services/ads' }
        ]}
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
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
                        {index === 0 && <Target className="h-6 w-6" />}
                        {index === 1 && <TrendingUp className="h-6 w-6" />}
                        {index === 2 && <BarChart2 className="h-6 w-6" />}
                        {index === 3 && <Search className="h-6 w-6" />}
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

          {/* Cross-linking to related solutions */}
          <div className="mt-20 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {language === 'it' ? 'Soluzioni per il tuo ruolo' : 'Solutions for your role'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to={`/${language}/solutions/media-buyer-google-ads`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{language === 'it' ? 'Media Buyer Google Ads' : 'Google Ads Media Buyer'}</h3>
                <p className="text-sm text-gray-500 mt-2">{language === 'it' ? 'Audit Raggi X, Quality Score e staging protetto' : 'X-Ray audit, Quality Score and protected staging'}</p>
              </Link>
              <Link to={`/${language}/solutions/media-buyer-meta`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{language === 'it' ? 'Media Buyer Meta' : 'Meta Media Buyer'}</h3>
                <p className="text-sm text-gray-500 mt-2">{language === 'it' ? 'Creative Loop ABC e riconciliazione ROAS' : 'Creative Loop ABC and ROAS reconciliation'}</p>
              </Link>
              <Link to={`/${language}/solutions/titolare-pmi`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{language === 'it' ? 'Titolare PMI' : 'SME Owner'}</h3>
                <p className="text-sm text-gray-500 mt-2">{language === 'it' ? 'Controllo budget e approval_mode a doppia firma' : 'Budget control and double-signature approval_mode'}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}