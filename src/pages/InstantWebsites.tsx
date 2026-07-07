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
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <HeroSection
          title={content.title}
          subtitle={content.subtitle}
          description={content.description}
          imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
        />

        {/* Timeline */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-blue-600" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        Day {step.day}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'it' ? 'Pronto a iniziare?' : 'Ready to start?'}
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              {language === 'it'
                ? 'Contattaci oggi per avere il tuo sito professionale in una settimana'
                : 'Contact us today to get your professional website in a week'}
            </p>
            <Link
              to={`/${language}/contact`}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              {content.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}