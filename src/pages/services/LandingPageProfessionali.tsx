import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';

export default function LandingPageProfessionali() {
  const { language } = useLanguage();
  const meta = metaContent.landingPageProfessionali[language];

  const content = language === 'it' ? {
    title: 'Landing Page Professionali',
    subtitle: 'La Tua Landing Page in 5 Giorni',
    description: 'Costruiamo Landing Page sui bisogni emersi dalla Deep Search. Aumenta le conversioni con contenuti che risuonano esattamente con ciò che il tuo target cerca. Ci occupiamo di tutto noi.',
    features: [
      {
        title: 'Pronta in 5 giorni lavorativi',
        description: 'Ottieni la tua landing page operativa rapidamente.'
      },
      {
        title: 'Hosting incluso',
        description: 'Ci occupiamo noi dell\'hosting per te.'
      },
      {
        title: 'Ottimizzata per le conversioni',
        description: 'Progettata per massimizzare il tasso di conversione.'
      },
      {
        title: 'Contenuti creati per te',
        description: 'Creiamo contenuti coinvolgenti su misura per il tuo pubblico.'
      }
    ],
    process: {
      title: 'Il Nostro Metodo',
      steps: [
        {
          title: 'Giorno 1: Intervista e Briefing',
          description: 'Raccogliamo tutte le informazioni necessarie per comprendere le tue esigenze.'
        },
        {
          title: 'Giorno 2-3: Design e Sviluppo',
          description: 'Il nostro team progetta e sviluppa la tua landing page.'
        },
        {
          title: 'Giorno 4: Revisione e Modifiche',
          description: 'Rivedi la landing page e fornisci feedback.'
        },
        {
          title: 'Giorno 5: Pubblicazione',
          description: 'Pubblichiamo la tua landing page e ci assicuriamo che funzioni correttamente.'
        }
      ]
    },
    cta: {
      title: 'Pronto a lanciare la tua landing page?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
    }
  } : {
    title: 'Professional Landing Pages',
    subtitle: 'Your Landing Page in 5 Days',
    description: 'We build Landing Pages on the needs uncovered by Deep Search. Increase conversions with content that resonates exactly with what your target audience is looking for. We take care of everything.',
    features: [
      {
        title: 'Ready in 5 business days',
        description: 'Get your landing page up and running quickly.'
      },
      {
        title: 'Hosting included',
        description: 'We handle the hosting so you don\'t have to.'
      },
      {
        title: 'Optimized for conversions',
        description: 'Designed to maximize your conversion rates.'
      },
      {
        title: 'Content created for you',
        description: 'We create compelling content tailored to your audience.'
      }
    ],
    process: {
      title: 'Our Method',
      steps: [
        {
          title: 'Day 1: Interview and Briefing',
          description: 'We gather all the necessary information to understand your needs.'
        },
        {
          title: 'Day 2-3: Design and Development',
          description: 'Our team designs and develops your landing page.'
        },
        {
          title: 'Day 4: Review and Modifications',
          description: 'You review the landing page and provide feedback.'
        },
        {
          title: 'Day 5: Publication',
          description: 'We publish your landing page and ensure it\'s running smoothly.'
        }
      ]
    },
    cta: {
      title: 'Ready to launch your landing page?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/landing-page-professionali"
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {content.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">{feature.title}</h2>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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