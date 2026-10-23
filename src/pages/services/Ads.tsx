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
      <div className="bg-white">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
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
                        {index === 0 && <Target className="h-5 w-5" />}
                        {index === 1 && <TrendingUp className="h-5 w-5" />}
                        {index === 2 && <BarChart2 className="h-5 w-5" />}
                        {index === 3 && <Search className="h-5 w-5" />}
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
              <Link to={`/${language}/solutions/media-buyer-google-ads`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Media Buyer Google Ads' : 'Google Ads Media Buyer'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Audit Raggi X, Quality Score e staging protetto' : 'X-Ray audit, Quality Score and protected staging'}</p>
              </Link>
              <Link to={`/${language}/solutions/media-buyer-meta`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Media Buyer Meta' : 'Meta Media Buyer'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Creative Loop ABC e riconciliazione ROAS' : 'Creative Loop ABC and ROAS reconciliation'}</p>
              </Link>
              <Link to={`/${language}/solutions/titolare-pmi`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Titolare PMI' : 'SME Owner'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Controllo budget e approval_mode a doppia firma' : 'Budget control and double-signature approval_mode'}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}