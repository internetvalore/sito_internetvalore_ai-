import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';
import { formatSEOText } from '../../utils/seo';

export default function LandingPageProfessionali() {
  const { language } = useLanguage();
  const meta = metaContent.landingPageProfessionali[language];

  const content = language === 'it' ? {
    title: 'Landing Page Professionali',
    subtitle: 'La Tua Trasformazione per la **Lead Generation**',
    description: 'Costruiamo **Landing Page Professionali** basate sulla **Deep Search**. Aumenta il tuo **tasso di conversione** con contenuti che risuonano esattamente con ciò che il tuo target cerca, grazie a un **targeting** chirurgico.',
    features: [
      {
        title: 'Pronta in 5 giorni lavorativi',
        description: 'Ottieni la tua presenza operativa rapidamente con focus sull\'**efficacia**.'
      },
      {
        title: '**IA Generativa** e Asset',
        description: 'Utilizziamo l\'**IA Generativa** per creare grafiche e testi ad alto impatto emotivo.'
      },
      {
        title: '**Ottimizzata per le Conversioni**',
        description: 'Ogni elemento è progettato con **copywriting persuasivo** per massimizzare le vendite.'
      },
      {
        title: 'Struttura **Mobile Responsive**',
        description: 'Garantiamo una navigazione fluida su ogni dispositivo per catturare lead ovunque.'
      }
    ],
    process: {
      title: 'Protocollo Landing IA',
      steps: [
        {
          title: 'Deep Search Analysis',
          description: 'Identifichiamo le leve psicologiche del tuo pubblico per un **copywriting persuasivo**.'
        },
        {
          title: 'Surgical Design',
          description: 'Progettiamo la struttura con focus sulla **Call to Action (CTA)** e la **fiducia**.'
        },
        {
          title: 'Rapid Deployment',
          description: 'Pubblicazione e test di **velocità** per assicurare performance eccellenti.'
        },
        {
          title: 'ROI & Performance',
          description: 'Monitoraggio iniziale per assicurare che la tua **campagna marketing** generi risultati.'
        }
      ]
    },
    cta: {
      title: 'Pronto a scalare con le tue Landing Page?',
      description: 'Trasforma il traffico in clienti con un sistema ad alta performance.',
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
                    <h2 className="text-lg font-medium text-gray-900" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.title) }} />
                    <p className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: formatSEOText(feature.description) }} />
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
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
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