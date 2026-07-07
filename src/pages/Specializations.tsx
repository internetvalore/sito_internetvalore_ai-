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
      title: 'Quality Score Restructure',
      description: 'Focalizzato sul recupero di Impression Share persa per Rank, allineando keyword e annunci RSA.'
    },
    {
      title: 'Raggi X in 5 Fasi',
      description: 'Audit automatico e profondo per stanare conflitti, sprechi ed esclusioni device.'
    },
    {
      title: 'Pianificazione RSA basata su SEO',
      description: 'Integrazione delle migliori chiavi organiche negli annunci sponsorizzati.'
    }
  ] : [
    {
      title: 'Quality Score Restructure',
      description: 'Focused on capturing Impression Share lost to Rank, aligning keywords and RSA ads.'
    },
    {
      title: '5-Phase X-Ray Audit',
      description: 'Automatic deep auditing to isolate keyword conflicts, budget waste, and device bids.'
    },
    {
      title: 'SEO-to-RSA Campaign Bridge',
      description: 'Injecting high-performance organic keywords directly into text ads.'
    }
  ];

  const facebookAdsFeatures = language === 'it' ? [
    {
      title: 'Creative Loop (ABC)',
      description: 'Classificazione degli asset in Vincenti, Stabili e Morti, per spegnere all-caps e ad-fatigue prima dello spreco.'
    },
    {
      title: 'Wound & Maslow Targeting',
      description: 'Copy e concept basati sui bisogni reali e sulle ferite del target, non su clickbait generico.'
    },
    {
      title: 'Meta-to-GA4 Bridge',
      description: 'Attribuzione delle conversioni reali incrociando i click Meta con le sessioni tracciate.'
    }
  ] : [
    {
      title: 'Creative Loop (ABC Analysis)',
      description: 'Categorizing assets into Winners, Stable, and Dead to block ad-fatigue and bad copy early.'
    },
    {
      title: 'Wound & Maslow Concepting',
      description: 'Copy and imagery anchored to customer needs and wounds, instead of generic hype.'
    },
    {
      title: 'Meta-to-GA4 Bridge',
      description: 'Real attribution matching Meta click events with actual GA4 session behaviors.'
    }
  ];

  const seoFeatures = language === 'it' ? [
    {
      title: 'Opportunità Striking Distance',
      description: 'Filtriamo le query in posizione 4-10 ad alta conversione per spingerle in Top 3.'
    },
    {
      title: 'Mappa degli Intenti',
      description: 'Discovery delle parole chiave della nicchia e scomposizione degli intenti di ricerca.'
    },
    {
      title: 'Rilevatore di Cannibalizzazione',
      description: 'Blinder della spesa Google Ads brand dove l\'organico SEO è già stabile al numero 1.'
    }
  ] : [
    {
      title: 'Striking Distance Mining',
      description: 'Filter high-intent keywords ranking in positions 4-10 to systematically push them to the top 3.'
    },
    {
      title: 'Intent Mapping & Discovery',
      description: 'Decomposes user queries to uncover untyped market search intentions before competitors.'
    },
    {
      title: 'Brand Cannibalization Blocker',
      description: 'Excluding brand keywords from Google Ads when you already own the organic #1 spot.'
    }
  ];

  const analyticsFeatures = language === 'it' ? [
    {
      title: 'Scomposizione LMDI del Δ',
      description: 'Metodo matematico per isolare la causa esatta di ogni variazione del profitto o del CPL.'
    },
    {
      title: 'Copertura Tracciamento (Reconciler)',
      description: 'Incrocio transazioni Shopify o contatti CRM per calcolare la percentuale reale misurata.'
    },
    {
      title: 'MMM Read-Through (Adstock)',
      description: 'Modello statistico per stimare il ritorno delle campagne offline e marketplace senza tracciamenti.'
    }
  ] : [
    {
      title: 'LMDI Δ Decomposition',
      description: 'Algebraic method to isolate the exact cause of any weekly revenue or CPL shift.'
    },
    {
      title: 'CRM & Shopify Reconciliation',
      description: 'Cross-references CRM database entries against tags to report actual data coverage.'
    },
    {
      title: 'MMM Read-Through (Adstock)',
      description: 'Statistical model to estimate returns on offline, Amazon, and KDP channels without tracking.'
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