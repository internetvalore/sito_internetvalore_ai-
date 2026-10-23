import React from 'react';
import { Rocket, Clock, CheckCircle, Wrench, Calendar, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';
import HeroSection from '../components/HeroSection';

export default function InstantWebsites() {
  const { language } = useLanguage();
  const meta = metaContent.instantWebsites[language];

  const content = language === 'it' ? {
    title: 'Siti Web Istantanei',
    subtitle: 'Il tuo sito performante in soli 7 giorni',
    description: 'Realizziamo siti web nati dall\'osservazione dei maggiori successi di mercato. Uniamo Deep Search e analisi dei top performer per un design e un copy che convertono istantaneamente.',
    cta: {
      button: 'Inizia Ora'
    }
  } : {
    title: 'Instant Websites',
    subtitle: 'Your high-performance website in just 7 days',
    description: 'Fast web solutions based on Deep Search analysis to intercept market needs from the very first click',
    cta: {
      button: 'Start Now'
    }
  };

  const steps = [
    {
      icon: CheckCircle,
      title: language === 'it' ? 'Deep Search & Intent Mapping' : 'Deep Search & Intent Mapping',
      description: language === 'it'
        ? 'Scandagliamo il mercato per isolare i veri intenti del target ed evitare clichè.'
        : 'We crawl competitor claims and map exact target user search intents.',
      day: "1-2"
    },
    {
      icon: Wrench,
      title: language === 'it' ? 'Persuasion Blueprint' : 'Persuasion Blueprint',
      description: language === 'it'
        ? 'Definiamo copy e design basandoci sulle ferite emotive e bisogni Maslow nel Creative Studio.'
        : 'We structure layouts and copy around psychological wounds and needs.',
      day: "3"
    },
    {
      icon: Rocket,
      title: language === 'it' ? 'Sviluppo Local-First' : 'Local-First Development',
      description: language === 'it'
        ? 'Codice ottimizzato per caricamento istantaneo e tracciamenti pronti per il CRM.'
        : 'High-performance code with tags ready for CRM database integration.',
      day: "4-6"
    },
    {
      icon: Sparkles,
      title: language === 'it' ? 'Validazione Avversariale & Launch' : 'Adversarial Audit & Launch',
      description: language === 'it'
        ? 'Il Giudice Avversariale valida il copy ed eliminiamo finti countdown prima del lancio.'
        : 'Our Adversarial Judge validates page copy and drops fake urgency elements before deploy.',
      day: "7"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: language === 'it' ? 'Sviluppo Rapido' : 'Rapid Development',
      description: language === 'it'
        ? 'Dal primo contatto al lancio in soli 7 giorni, senza compromessi sulla qualità.'
        : 'From first contact to launch in just 7 days, without compromising on quality.'
    },
    {
      icon: Calendar,
      title: language === 'it' ? 'Supporto Annuale' : 'Annual Support',
      description: language === 'it'
        ? 'Assistenza tecnica e consulenza inclusa per tutto l\'anno.'
        : 'Technical assistance and consultation included for the entire year.'
    },
    {
      icon: Zap,
      title: language === 'it' ? 'Pacchetto Modifiche Annuali' : 'Annual Changes Package',
      description: language === 'it'
        ? 'Pacchetto modifiche annuali incluso nel prezzo iniziale.'
        : 'Annual changes package included in the initial price.'
    }
  ];

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/instant-websites"
        serviceType={meta.serviceType}
        serviceDescription={meta.serviceDescription}
        priceRange={meta.priceRange}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Servizi' : 'Services', path: '/services' },
          { name: language === 'it' ? 'Siti Web Istantanei' : 'Instant Websites', path: '/instant-websites' }
        ]}
      />
      <div className="bg-white">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        {/* Timeline */}
        <motion.div
          className="section shell relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-line" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
              >
                <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'}`}>
                  <motion.div
                    className="icon-tile rounded-full flex-shrink-0"
                  >
                    <step.icon className="h-5 w-5" />
                  </motion.div>
                  <div className={`${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'} card card-hover flex-grow`}>
                    <div className="flex items-center justify-between mb-2 gap-3">
                      <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                      <span className="chip">
                        Day {step.day}
                      </span>
                    </div>
                    <p className="text-[0.95rem] text-ink-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="section shell"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card card-hover"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
              >
                <motion.div
                  className="icon-tile mb-4"
                >
                  <feature.icon className="h-5 w-5" />
                </motion.div>
                <h3 className="text-lg font-semibold text-ink-900 mb-3">{feature.title}</h3>
                <p className="text-[0.95rem] text-ink-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="section shell"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="card text-center">
            <h3 className="title-lg mb-4">
              {language === 'it' ? 'Pronto a iniziare?' : 'Ready to start?'}
            </h3>
            <p className="lede measure mx-auto mb-8">
              {language === 'it'
                ? 'Contattaci oggi per avere il tuo sito professionale in una settimana'
                : 'Contact us today to get your professional website in a week'}
            </p>
            <Link
              to={`/${language}/contact`}
              className="btn btn-primary"
            >
              {content.cta.button}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}