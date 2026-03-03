import { ShoppingBag, TrendingUp, Users, BarChart2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';
import { formatSEOText } from '../../utils/seo';

export default function Ecommerce() {
  const { language } = useLanguage();
  const meta = metaContent.ecommerce[language];

  const content = language === 'it' ? {
    title: 'E-commerce Marketing IA',
    subtitle: 'Massimizza le Vendite con l\'Analisi Predittiva',
    description: 'Non limitarti a vendere, domina il tuo mercato. Attraverso l\'**E-commerce Marketing IA**, ottimizziamo ogni fase del percorso d\'acquisto, trasformando visitatori occasionali in clienti ricorrenti grazie a decisioni **data-driven** e a una solida **strategia di marketing**.',
    features: [
      {
        title: '**Analisi Comportamentale** Deep',
        description: 'Utilizziamo la **Deep Search** e il **Machine Learning** per comprendere le abitudini d\'acquisto reali e prevedere le tendenze del mercato.'
      },
      {
        title: '**Ottimizzazione Conversioni** (CRO)',
        description: 'Miglioriamo costantemente il **conversion rate** testando e affinando ogni elemento della tua **User Experience (UX)**.'
      },
      {
        title: '**Retargeting Predittivo**',
        description: 'Recupera i carrelli abbandonati e aumenta il lifetime value con campagne di remarketing basate sulla probabilità d\'acquisto e sull\'**IA Generativa**.'
      },
      {
        title: '**Personalizzazione** Dinamica',
        description: 'Offri un\'esperienza di shopping unica a ogni utente, aumentando le **vendite online** e garantendo un alto **ROI**.'
      }
    ],
    process: {
      title: 'Strategia E-commerce IA',
      steps: [
        {
          title: 'Audit Data-Driven',
          description: 'Analisi profonda dello stato attuale e identificazione dei colli di bottiglia nel **fatturato** attraverso **dati reali**.'
        },
        {
          title: 'Setup Predittivo',
          description: 'Implementazione di tracciamenti avanzati e algoritmi di **personalizzazione** per il tuo **digital success**.'
        },
        {
          title: 'Execution & Scale',
          description: 'Lancio di campagne multicanale focalizzate sulla crescita della **Customer Experience**.'
        },
        {
          title: 'Optimization Loop',
          description: 'Cicli costanti di **A/B Testing** per una crescita esponenziale delle performance e un netto **vantaggio competitivo**.'
        }
      ]
    },
    cta: {
      title: 'Pronto a far crescere il tuo e-commerce?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
    }
  } : {
    title: 'E-commerce Promotion',
    subtitle: 'Increase your online store sales',
    description: 'Deep Search strategies for e-commerce that intercept ready-to-buy shoppers, maximizing conversions and revenue',
    features: [
      {
        title: 'Interactive Digital Catalogs',
        description: 'Engaging product presentation with browsable and interactive catalogs'
      },
      {
        title: 'Conversion Optimization',
        description: 'Analysis and improvement of the purchase journey to increase sales'
      },
      {
        title: 'Advanced Retargeting',
        description: 'Targeted strategies to recover abandoned carts and potential customers'
      },
      {
        title: 'Behavioral Analysis',
        description: 'Detailed study of buyer behavior to optimize the experience'
      }
    ],
    process: {
      title: 'Our Approach',
      steps: [
        {
          title: 'E-commerce Analysis',
          description: 'Complete evaluation of your online store'
        },
        {
          title: 'Sales Strategy',
          description: 'Personalized action plan to increase sales'
        },
        {
          title: 'Optimization',
          description: 'Continuous performance improvement'
        },
        {
          title: 'Monitoring',
          description: 'Results analysis and strategic adjustments'
        }
      ]
    },
    cta: {
      title: 'Ready to grow your e-commerce?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/ecommerce"
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
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
                        {index === 0 && <ShoppingBag className="h-6 w-6" />}
                        {index === 1 && <TrendingUp className="h-6 w-6" />}
                        {index === 2 && <Users className="h-6 w-6" />}
                        {index === 3 && <BarChart2 className="h-6 w-6" />}
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