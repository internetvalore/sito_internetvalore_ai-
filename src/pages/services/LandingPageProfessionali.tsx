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
    subtitle: 'Landing page persuasive progettate in 5 Giorni',
    description: 'Non creiamo layout generici. Costruiamo landing page basandoci sugli intenti reali della Deep Search e le filtriamo col nostro Giudice Avversariale per massimizzare il ROI.',
    features: [
      {
        title: 'Creative Studio Concept',
        description: 'Pagine strutturate sui concept emotivi emersi dalle ferite (Wound Thesaurus) e bisogni Maslow del target.'
      },
      {
        title: 'Copy anti-kitsch & policy-proof',
        description: 'I testi vengono passati dal Giudice Avversariale per bloccare finti countdown, scritte pixelate e claim ingannevoli.'
      },
      {
        title: 'Ottimizzazione per conversioni reali',
        description: 'UX ed elementi interattivi posizionati per raccogliere dati puliti e pronti per la sincronizzazione CRM.'
      },
      {
        title: 'Codice e Hosting blindati',
        description: 'Sviluppo local-first/cloud-ready per garantire tempi di caricamento istantanei e sicurezza.'
      }
    ],
    process: {
      title: 'Il Nostro Metodo Creativo',
      steps: [
        {
          title: 'Briefing e baseline t0',
          description: 'Raccogliamo gli obiettivi storici e gli intenti emersi dalla Deep Search.'
        },
        {
          title: 'Design & Persuasione',
          description: 'Stendiamo il copy basato sulla mappa dei bisogni e sulle ferite emotive.'
        },
        {
          title: 'Giudizio Avversariale',
          description: 'Invio a revisione indipendente per pulire da cliché e didascalismi.'
        },
        {
          title: 'Pubblicazione e Tracciamento',
          description: 'Messa online della landing page e configurazione del tracciamento eventi reali.'
        }
      ]
    },
    cta: {
      title: 'Vuoi una landing page che converta davvero?',
      description: 'Prenota un audit gratuito e scopri come applichiamo la psicologia persuasiva alle pagine.',
      button: 'Contattaci Ora'
    }
  } : {
    title: 'Professional Landing Pages',
    subtitle: 'Persuasive landing pages deployed in 5 Days',
    description: 'We do not build generic templates. We build landing pages based on Deep Search intents and filter them through our Adversarial Judge to maximize conversions.',
    features: [
      {
        title: 'Creative Studio Concepting',
        description: 'Pages structured around emotional hooks derived from psychological wounds and Maslow needs.'
      },
      {
        title: 'Policy-proof Copy',
        description: 'All text passes our Adversarial Judge to exclude fake urgency, pixelated overlays, and manipulative claims.'
      },
      {
        title: 'Real Conversion Optimization',
        description: 'Layouts built to capture verified leads, ready for CRM synchronization and algorithm training.'
      },
      {
        title: 'Cloud-ready Performance',
        description: 'Local-first and cloud-optimized frameworks to guarantee instant load times and safety.'
      }
    ],
    process: {
      title: 'Our Creative Protocol',
      steps: [
        {
          title: 't0 Briefing',
          description: 'Gather historical targets and search intents uncovered by Deep Search.'
        },
        {
          title: 'Design & Persuasion',
          description: 'Draft page copy anchored to psychological wounds and Maslow targets.'
        },
        {
          title: 'Adversarial Validation',
          description: 'Pass concepts to independent review to purge visual and verbal clichés.'
        },
        {
          title: 'Launch & Event Track',
          description: 'Go live and configure verified event trackers to feed clean database statistics.'
        }
      ]
    },
    cta: {
      title: 'Ready for a high-converting page?',
      description: 'Book a free consultation and see how we apply persuasion frameworks to landing pages.',
      button: 'Contact Us Now'
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