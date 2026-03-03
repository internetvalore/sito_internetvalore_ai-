import { Target, Facebook, Search, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import HeroSection from '../components/HeroSection';
import { formatSEOText } from '../utils/seo';

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
    subtitle: '**Expertise** in Marketing Digitale',
    description: 'Soluzioni specializzate guidate dalla **Deep Search** per catturare ogni opportunità di mercato nascosta attraverso una **Consulenza Digital Marketing** d\'eccellenza.'
  } : {
    title: 'Specializations',
    subtitle: 'Digital Marketing Expertise',
    description: 'Deep Search-driven specialized solutions to capture every hidden market opportunity through excellence in Digital Marketing Consulting.'
  };

  const googleAdsFeatures = language === 'it' ? [
    {
      title: '**Google Ads** Enterprise',
      description: 'Gestione avanzata per massimizzare il **ROI** attraverso un monitoraggio costante.'
    },
    {
      title: '**Targeting Comportamentale**',
      description: 'Raggiungimento del pubblico ideale con segmentazione precisa e analisi dei dati.'
    },
    {
      title: '**Analisi delle Performance**',
      description: 'Report dettagliati per una visione chiara dell\'andamento delle campagne.'
    }
  ] : [
    {
      title: 'Enterprise Google Ads',
      description: 'Advanced management to maximize ROI through constant monitoring.'
    },
    {
      title: 'Behavioral Targeting',
      description: 'Reach your ideal audience with precise segmentation and data analysis.'
    },
    {
      title: 'Performance Analysis',
      description: 'Detailed reports for a clear view of campaign progress.'
    }
  ];

  const facebookAdsFeatures = language === 'it' ? [
    {
      title: '**Social Media Marketing**',
      description: 'Strategie efficaci su Facebook e Instagram per aumentare la **brand awareness**.'
    },
    {
      title: '**Audience Personalizzate**',
      description: 'Creazione di segmenti di pubblico basati su interessi e comportamenti reali.'
    },
    {
      title: 'Creatività Ottimizzata',
      description: 'Design e copy persuasivi per convertire gli utenti in clienti fedeli.'
    }
  ] : [
    {
      title: 'Social Media Marketing',
      description: 'Effective strategies on Facebook and Instagram to increase brand awareness.'
    },
    {
      title: 'Custom Audiences',
      description: 'Creation of audience segments based on real interests and behaviors.'
    },
    {
      title: 'Optimized Creativity',
      description: 'Persuasive design and copy to convert users into loyal customers.'
    }
  ];

  const seoFeatures = language === 'it' ? [
    {
      title: '**Ottimizzazione Organica**',
      description: 'Miglioramento del posizionamento sui motori di ricerca per traffico qualificato.'
    },
    {
      title: '**Link Building** Strategica',
      description: 'Aumento dell\'autorità del dominio attraverso acquisizione di link di valore.'
    },
    {
      title: 'Deep Search SEO',
      description: 'Analisi profonda degli intenti di ricerca per dominare la SERP.'
    }
  ] : [
    {
      title: 'Organic Optimization',
      description: 'Improving search engine ranking for qualified traffic.'
    },
    {
      title: 'Strategic Link Building',
      description: 'Increasing domain authority through value link acquisition.'
    },
    {
      title: 'Deep Search SEO',
      description: 'Deep analysis of search intents to dominate the SERP.'
    }
  ];

  const analyticsFeatures = language === 'it' ? [
    {
      title: '**Business Intelligence**',
      description: 'Trasforma i dati in decisioni strategiche con dashboard personalizzate.'
    },
    {
      title: 'Integrazione Dati',
      description: 'Connessione di tutte le sorgenti di traffico in un unico hub di analisi.'
    },
    {
      title: 'Reporting Avanzato',
      description: 'Insights azionabili basati sulla nostra **metodologia** data-driven.'
    }
  ] : [
    {
      title: 'Business Intelligence',
      description: 'Transform data into strategic decisions with custom dashboards.'
    },
    {
      title: 'Data Integration',
      description: 'Connection of all traffic sources into a single analysis hub.'
    },
    {
      title: 'Advanced Reporting',
      description: 'Actionable insights based on our data-driven methodology.'
    }
  ];

  const sections = {
    googleAds: {
      title: 'Google Ads',
      description: language === 'it'
        ? 'Aumenta le tue vendite con campagne search e display ad alto rendimento.'
        : 'Increase your sales with high-performance search and display campaigns.'
    },
    facebookAds: {
      title: 'Facebook Ads',
      description: language === 'it'
        ? 'Raggiungi milioni di utenti con campagne social mirate e creative.'
        : 'Reach millions of users with targeted and creative social campaigns.'
    },
    seo: {
      title: 'SEO & Deep Search',
      description: language === 'it'
        ? 'Domina i risultati di ricerca intercettando la domanda prima della concorrenza.'
        : 'Dominate search results by intercepting demand before the competition.'
    },
    analytics: {
      title: 'Analytics',
      description: language === 'it'
        ? 'Misura ogni azione e ottimizza il tuo investimento pubblicitario.'
        : 'Measure every action and optimize your advertising investment.'
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
                          <span dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                        </h4>
                        <p className="mt-2 text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
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
                          <span dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                        </h4>
                        <p className="mt-2 text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
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
                    <p className="text-gray-500 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(sections.seo.description) }} />
                    <div className="space-y-4">
                      {seoFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                          whileHover={{ y: -5 }}
                        >
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                            <p className="mt-1 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
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
                    <p className="text-gray-500 mb-4" dangerouslySetInnerHTML={{ __html: formatSEOText(sections.analytics.description) }} />
                    <div className="space-y-4">
                      {analyticsFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start bg-white p-4 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors duration-300"
                          whileHover={{ y: -5 }}
                        >
                          <ArrowRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                            <p className="mt-1 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
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