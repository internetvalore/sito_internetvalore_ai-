import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';

export default function ContactPage() {
  const { language } = useLanguage();

  const content = language === 'it' ? {
    title: 'Contattaci',
    subtitle: 'Parliamo delle Tue Opportunità Nascoste',
    description: 'Siamo qui per applicare la nostra Deep Search e intercettare fette di mercato inesplorate per il tuo progetto. Contattaci per una prima analisi basata sull\'IA e scopri cosa cercano davvero i tuoi clienti.',
    digitalConcierge: 'Risponde 7x24 Leonardo, il nostro assistente AI digitale, che raccoglie le informazioni necessarie per farti richiamare da un nostro consulente umano.',
    bookMeeting: 'Prenota una Consulenza Gratuita',
    legalAddress: 'Sede Legale',
    operationalAddress: 'Sede Operativa'
  } : {
    title: 'Contact Us',
    subtitle: 'Let\'s Talk About Your Hidden Opportunities',
    description: 'We\'re here to apply our Deep Search and intercept unexplored market segments for your project. Contact us for an initial AI-driven analysis and discover what your customers are really looking for.',
    digitalConcierge: 'Answered 24/7 by Leonardo, our digital AI assistant, who gathers all info so a human consultant can call you back.',
    bookMeeting: 'Book a Free Consultation',
    legalAddress: 'Legal Address',
    operationalAddress: 'Operational Address'
  };

  return (
    <>
      <MetaTags
        title={content.title}
        description={content.description}
        path="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Contatti' : 'Contact', path: '/contact' }
        ]}
      />
      <div className="section">
        <div className="shell">
          <div className="max-w-lg mx-auto md:max-w-none grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="title-xl">
              {content.title}
            </h1>
            <h2 className="title-lg mt-2">
              {content.subtitle}
            </h2>
            <div className="mt-3">
              <p className="lede measure">
                {content.description}
              </p>
            </div>
            <motion.div
              className="mt-9 space-y-5"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
                <motion.div
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="icon-tile flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-[0.95rem] text-ink-600 leading-relaxed">
                    <motion.a
                      href="tel:800940213"
                      className="text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-200"
                    >
                      800 940 213
                    </motion.a>
                    <p className="mt-1">{content.digitalConcierge}</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="icon-tile flex-shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <motion.a
                      href="https://calendar.app.google/hrTJoM1BDccQw75NA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      {content.bookMeeting}
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
                <motion.div
                  className="space-y-3"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-tile flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-[0.95rem] text-ink-600 leading-relaxed">
                      <p className="font-semibold text-ink-900">{content.legalAddress}:</p>
                      <p>Via G.B. Pergolesi 16</p>
                      <p>20900 Monza</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="icon-tile flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-[0.95rem] text-ink-600 leading-relaxed">
                      <p className="font-semibold text-ink-900">{content.operationalAddress}:</p>
                      <p>Via Giovanni Battista Pergolesi 29</p>
                      <p>20124 Milano</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="media h-96"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.8!2d9.2139!3d45.4787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia%20Giovanni%20Battista%20Pergolesi%2C%2029%2C%2020124%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2sit!4v1710371245678!5m2!1sen!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Internet Valore"
                  className="h-full w-full"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}