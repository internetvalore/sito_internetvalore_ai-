import React from 'react';
import { Users, Target, BarChart2, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import HeroSection from '../../components/HeroSection';

export default function LeadGeneration() {
  const { language } = useLanguage();
  const meta = metaContent.leadGeneration[language];

  const content = language === 'it' ? {
    title: 'Lead Generation',
    subtitle: 'Domina il Mercato Intercettando i Bisogni Inespressi',
    description: 'Andiamo oltre la semplice acquisizione. Attraverso la Deep Search guidata dall\'IA, prediciamo la domanda e saturiamo le nicchie di mercato prima della concorrenza, trasformando l\'intento di ricerca in contratti firmati.',
    features: [
      {
        title: 'Saturazione Nicchie (Deep Search)',
        description: 'Identifichiamo e dominiamo segmenti di mercato inesplorati grazie all\'analisi predittiva dei dati.'
      },
      {
        title: 'IA Conversazionale (Leonardo)',
        description: 'Il nostro assistente virtuale non si limita a rispondere: qualifica, educa e chiude lead h24 per te.'
      },
      {
        title: 'Integrazione WhatsApp CRM',
        description: 'Comunicazione istantanea e workflow automatizzati che eliminano ogni attrito nel processo di vendita.'
      },
      {
        title: 'Ottimizzazione Algoritmica',
        description: 'Monitoraggio granulare e miglioramento costante delle performance guidato dall\'IA per massimizzare il ROI.'
      }
    ],
    process: {
      title: 'Protocollo Lead Gen IA',
      steps: [
        {
          title: 'Deep Search Discovery',
          description: 'Analisi profonda degli intenti di ricerca per trovare il "Blue Ocean" del tuo settore.'
        },
        {
          title: 'Generative Strategy',
          description: 'Funnel e contenuti dinamici che si adattano in tempo reale al comportamento dell\'utente.'
        },
        {
          title: 'Surgical Execution',
          description: 'Lancio delle campagne con precisione millimetrica sui canali a più alto potenziale.'
        },
        {
          title: 'AI Scaling',
          description: 'Scaling verticale dei risultati attraverso l\'ottimizzazione automatizzata dei dati.'
        }
      ]
    },
    cta: {
      title: 'Pronto a saturare il tuo mercato?',
      description: 'Prenota una sessione strategica di Deep Search e scopri le tue opportunità nascoste.',
      button: 'Attiva Ora'
    }
  } : {
    title: 'Lead Generation',
    subtitle: 'We acquire qualified contacts by intercepting real needs',
    description: 'We use Deep Search to intercept hidden search intents and generate highly qualified leads for your business',
    features: [
      {
        title: 'Complete Automation',
        description: 'Automated processes for lead management from acquisition to conversion'
      },
      {
        title: 'WhatsApp Integration',
        description: 'Direct and immediate communication through WhatsApp Business'
      },
      {
        title: 'Virtual Assistant 24/7',
        description: 'Leonardo, our virtual assistant, always available for your customers'
      },
      {
        title: 'Continuous Optimization',
        description: 'Constant monitoring and performance improvement'
      }
    ],
    process: {
      title: 'Our Process',
      steps: [
        {
          title: 'Target Analysis',
          description: 'We identify your ideal audience'
        },
        {
          title: 'Custom Strategy',
          description: 'We develop a tailored strategy'
        },
        {
          title: 'Implementation',
          description: 'We activate acquisition channels'
        },
        {
          title: 'Optimization',
          description: 'We monitor and improve results'
        }
      ]
    },
    cta: {
      title: 'Ready to generate more leads?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/lead-generation"
        serviceType={meta.serviceType}
        serviceDescription={meta.serviceDescription}
        priceRange={meta.priceRange}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Servizi' : 'Services', path: '/services' },
          { name: 'Lead Generation', path: '/services/lead-generation' }
        ]}
      />
      <div className="bg-white">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
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
                        {index === 0 && <Users className="h-5 w-5" />}
                        {index === 1 && <Target className="h-5 w-5" />}
                        {index === 2 && <Phone className="h-5 w-5" />}
                        {index === 3 && <BarChart2 className="h-5 w-5" />}
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

          {/* ══ SOTTO IL COFANO ══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="section section-quiet relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none bg-ink-900/[0.03]" />
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow mb-3">
                {language === 'it' ? 'SOTTO IL COFANO' : 'UNDER THE HOOD'}
              </p>
              <h2 className="title-lg mb-6 text-ink-900">
                {language === 'it' 
                  ? 'La tecnologia AI proprietaria al servizio della Lead Generation' 
                  : 'Proprietary AI Tech powering your Lead Generation'}
              </h2>
              <p className="lede measure mx-auto mb-8">
                {language === 'it'
                  ? 'La lead generation di successo non si basa su metriche artificiali. Usiamo la nostra suite di gestione proprietaria per riconciliare i contatti del tuo CRM con GA4 e Ads, ripulendo i dati dallo spam prima di inviarli agli algoritmi. Massimizziamo la qualità dei contatti riducendo i costi di acquisizione.'
                  : 'Successful lead generation doesn\'t rely on artificial pixel counts. We use our proprietary management suite to reconcile CRM leads with GA4 and Ads, filtering out spam before feeding data to bidding algorithms. We maximize lead quality while reducing acquisition costs.'}
              </p>
              <Link
                to={`/${language}/la-nostra-tecnologia-ai`}
                className="btn btn-primary"
              >
                {language === 'it' 
                  ? 'Scopri la nostra Tecnologia AI per la gestione delle campagne' 
                  : 'Discover our AI Technology for campaign management'}
                <ArrowRight className="h-4 w-4" />
              </Link>
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
              <Link to={`/${language}/solutions/titolare-pmi`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Titolare PMI' : 'SME Owner'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Controllo profitto reale e approval_mode' : 'Real profit control and approval_mode'}</p>
              </Link>
              <Link to={`/${language}/solutions/account-manager`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">Account Manager</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Diagnostica cali e report automatici' : 'Drop diagnostics and automated reports'}</p>
              </Link>
              <Link to={`/${language}/solutions/media-buyer-google-ads`} className="card card-hover block group">
                <h3 className="font-semibold text-ink-900 group-hover:text-accent-600 transition-colors">{language === 'it' ? 'Media Buyer Google Ads' : 'Google Ads Media Buyer'}</h3>
                <p className="text-[0.9rem] text-ink-600 mt-2">{language === 'it' ? 'Audit Raggi X e ristrutturazione Quality Score' : 'X-Ray audit and Quality Score restructuring'}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}