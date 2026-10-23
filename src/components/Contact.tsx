import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();

  const title = language === 'it' 
    ? "Parliamo del Tuo Progetto"
    : "Let's Talk About Your Project";

  const description = language === 'it'
    ? "Siamo qui per trasformare la tua visione in realtà. Contattaci per una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi digitali."
    : "We're here to transform your vision into reality. Contact us for a free consultation and discover how we can help you achieve your digital goals.";

  const digitalConcierge = language === 'it' 
    ? "Risponde 7x24 Leonardo, il nostro assistente AI digitale, che raccoglie tutte le informazioni per farti richiamare da un nostro consulente umano." 
    : "Answered 24/7 by Leonardo, our digital AI assistant, who collects all details for a prompt callback from a human consultant.";
  const bookMeeting = language === 'it' ? "Prenota una Consulenza Gratuita" : "Book a Free Consultation";
  const legalAddress = language === 'it' ? "Sede Legale" : "Legal Address";
  const operationalAddress = language === 'it' ? "Sede Operativa" : "Operational Address";

  return (
    <div id="contact" className="section">
      <div className="shell">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="title-lg">
              {title}
            </h2>
            <div className="mt-4">
              <p className="lede measure">
                {description}
              </p>
            </div>
            <motion.div 
              className="card card-hover mt-9"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-start gap-3 py-3 border-b border-line last:border-b-0"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                }}
              >
                <div className="icon-tile flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div className="text-[0.95rem] text-ink-600">
                  <motion.a 
                    href="tel:800940213" 
                    className="text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-220"
                  >
                    800 940 213
                  </motion.a>
                  <p className="mt-1">{digitalConcierge}</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 py-3 border-b border-line last:border-b-0"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                }}
              >
                <div className="icon-tile flex-shrink-0">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="text-[0.95rem] text-ink-600">
                  <motion.a
                    href="https://calendar.app.google/hrTJoM1BDccQw75NA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {bookMeeting}
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
              <motion.div 
                className="flex flex-col gap-4 pt-3"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="icon-tile flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-[0.95rem] text-ink-600">
                    <p className="text-[0.95rem] font-semibold text-ink-900 mb-1">{legalAddress}:</p>
                    <p>Via G.B. Pergolesi 16</p>
                    <p>20900 Monza</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="icon-tile flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-[0.95rem] text-ink-600">
                    <p className="text-[0.95rem] font-semibold text-ink-900 mb-1">{operationalAddress}:</p>
                    <p>Via Giovanni Battista Pergolesi 29</p>
                    <p>20124 Milano</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-10 md:mt-0"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.55, ease: [0.22, 1, 0.36, 1]
            }}
          >
            <motion.div 
              className="media h-96"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}