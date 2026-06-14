import React from 'react';
import { Target, Facebook, Search, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import HeroSection from '../components/HeroSection';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Specializations() {
  const { language } = useLanguage();
  const meta = metaContent.specializations[language];

  const content = language === 'it' ? {
    title: 'Specializzazioni',
    subtitle: 'Expertise in Marketing Digitale',
    description: 'Soluzioni specializzate guidate dalla Deep Search per catturare ogni opportunità di mercato nascosta'
  } : {
    title: 'Specializations',
    subtitle: 'Digital Marketing Expertise',
    description: 'Deep Search-driven specialized solutions to capture every hidden market opportunity'
  };

  const googleAdsFeatures = language === 'it' ? [
    {
      title: 'Campagne Ottimizzate',
      description: 'Ottimizzazione continua delle campagne per massimizzare il ROI'
    },
    {
      title: 'Targeting Preciso',
      description: 'Raggiungimento del pubblico ideale con targeting demografico e comportamentale'
    },
    {
      title: 'Analisi Dettagliata',
      description: 'Report completi e analisi approfondite delle performance'
    }
  ] : [
    {
      title: 'Optimized Campaigns',
      description: 'Continuous campaign optimization to maximize ROI'
    },
    {
      title: 'Precise Targeting',
      description: 'Reach your ideal audience with demographic and behavioral targeting'
    },
    {
      title: 'Detailed Analysis',
      description: 'Comprehensive reports and in-depth performance analysis'
    }
  ];

  const facebookAdsFeatures = language === 'it' ? [
    {
      title: 'Audience Personalizzate',
      description: 'Creazione di audience specifiche basate sui tuoi clienti ideali'
    },
    {
      title: 'Creatività Coinvolgente',
      description: 'Design accattivante e messaggi persuasivi per massimizzare l\'engagement'
    },
    {
      title: 'Retargeting Avanzato',
      description: 'Strategie di remarketing per riconvertire visitatori interessati'
    }
  ] : [
    {
      title: 'Custom Audiences',
      description: 'Creation of specific audiences based on your ideal customers'
    },
    {
      title: 'Engaging Creativity',
      description: 'Captivating design and persuasive messages to maximize engagement'
    },
    {
      title: 'Advanced Retargeting',
      description: 'Remarketing strategies to reconvert interested visitors'
    }
  ];

  const seoFeatures = language === 'it' ? [
    {
      title: 'Ottimizzazione On-Page',
      description: 'Miglioramento di contenuti e struttura del sito per i motori di ricerca'
    },
    {
      title: 'Link Building',
      description: 'Costruzione di backlink di qualità per aumentare l\'autorità del dominio'
    },
    {
      title: 'SEO Tecnico',
      description: 'Ottimizzazione della performance e dell\'architettura del sito'
    }
  ] : [
    {
      title: 'On-Page Optimization',
      description: 'Improvement of website content and structure for search engines'
    },
    {
      title: 'Link Building',
      description: 'Quality backlink building to increase domain authority'
    },
    {
      title: 'Technical SEO',
      description: 'Optimization of website performance and architecture'
    }
  ];

  const analyticsFeatures = language === 'it' ? [
    {
      title: 'Dashboard Personalizzate',
      description: 'Visualizzazione chiara dei KPI più importanti per il tuo business'
    },
    {
      title: 'Tracciamento Avanzato',
      description: 'Monitoraggio dettagliato del comportamento degli utenti'
    },
    {
      title: 'Report Automatizzati',
      description: 'Generazione automatica di report periodici con insights chiave'
    }
  ] : [
    {
      title: 'Custom Dashboards',
      description: 'Clear visualization of the most important KPIs for your business'
    },
    {
      title: 'Advanced Tracking',
      description: 'Detailed monitoring of user behavior'
    },
    {
      title: 'Automated Reports',
      description: 'Automatic generation of periodic reports with key insights'
    }
  ];

  const sections = {
    googleAds: {
      title: 'Google Ads',
      description: language === 'it'
        ? 'Ottimizzazione per i motori di ricerca per aumentare la visibilità organica'
        : 'Search engine optimization to increase organic visibility'
    },
    facebookAds: {
      title: 'Facebook Ads',
      description: language === 'it'
        ? 'Strategie social media per raggiungere il tuo pubblico target'
        : 'Social media strategies to reach your target audience'
    },
    seo: {
      title: 'SEO & Deep Search',
      description: language === 'it'
        ? 'Analisi profonda degli intenti di ricerca per dominare le vere opportunità di mercato prima della concorrenza'
        : 'Deep analysis of search intents to dominate true market opportunities before the competition'
    },
    analytics: {
      title: 'Analytics',
      description: language === 'it'
        ? 'Analisi approfondita dei dati per decisioni basate sui risultati'
        : 'In-depth data analysis for results-based decisions'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/specializations"
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                    >
                      <Target className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {sections.googleAds.title}
                    </h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {googleAdsFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="text-lg font-medium text-gray-900 flex items-center">
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-gray-500">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                    >
                      <Facebook className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {sections.facebookAds.title}
                    </h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {facebookAdsFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <h4 className="text-lg font-medium text-gray-900 flex items-center">
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-gray-500">
                          {feature.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                    >
                      <Search className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {sections.seo.title}
                    </h3>
                  </div>
                  <div className="mt-6">
                    <p className="text-gray-500 mb-4">
                      {sections.seo.description}
                    </p>
                    <div className="space-y-4">
                      {seoFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                          whileHover={{ y: -5 }}
                        >
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">{feature.title}</h4>
                            <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="p-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-lg"
                    >
                      <BarChart2 className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {sections.analytics.title}
                    </h3>
                  </div>
                  <div className="mt-6">
                    <p className="text-gray-500 mb-4">
                      {sections.analytics.description}
                    </p>
                    <div className="space-y-4">
                      {analyticsFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                          whileHover={{ y: -5 }}
                        >
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900">{feature.title}</h4>
                            <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}