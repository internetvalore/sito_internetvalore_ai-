import React, { useId, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Calendar, MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { queueConversion } from '../utils/conversion';
import { submitNetlifyForm } from '../utils/netlifyForm';

const INPUT_CLASS =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 transition-colors duration-220';
const LABEL_CLASS = 'block text-[0.8rem] font-semibold text-ink-600 mb-2 text-left';

export default function ContactPage() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const navigate = useNavigate();
  const fieldId = useId();

  const content = isIt ? {
    title: 'Contattaci',
    subtitle: 'Parliamo delle Tue Opportunità Nascoste',
    description: 'Siamo qui per applicare la nostra Deep Search e intercettare fette di mercato inesplorate per il tuo progetto. Contattaci per una prima analisi basata sull\'IA e scopri cosa cercano davvero i tuoi clienti.',
    digitalConcierge: 'Risponde 7x24 Leonardo, il nostro assistente AI digitale, che raccoglie le informazioni necessarie per farti richiamare da un nostro consulente umano.',
    bookMeeting: 'Prenota una call in calendario',
    legalAddress: 'Sede Legale',
    operationalAddress: 'Sede Operativa'
  } : {
    title: 'Contact Us',
    subtitle: 'Let\'s Talk About Your Hidden Opportunities',
    description: 'We\'re here to apply our Deep Search and intercept unexplored market segments for your project. Contact us for an initial AI-driven analysis and discover what your customers are really looking for.',
    digitalConcierge: 'Answered 24/7 by Leonardo, our digital AI assistant, who gathers all info so a human consultant can call you back.',
    bookMeeting: 'Book a call in the calendar',
    legalAddress: 'Legal Address',
    operationalAddress: 'Operational Address'
  };

  // I valori inviati restano in italiano per uniformità nelle notifiche; le etichette seguono la lingua.
  const services = [
    { value: 'Campagne ads per e-commerce', label: isIt ? 'Campagne ads per e-commerce' : 'Ad campaigns for e-commerce' },
    { value: 'Lead generation per PMI', label: isIt ? 'Lead generation per PMI' : 'Lead generation for SMEs' },
    { value: 'Gestione Google Ads e Facebook Ads', label: isIt ? 'Gestione Google Ads e Facebook Ads' : 'Google Ads and Facebook Ads management' },
    { value: 'Analytics e tracciamento', label: isIt ? 'Analytics e tracciamento' : 'Analytics and tracking' },
    { value: 'Altro', label: isIt ? 'Altro' : 'Other' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage(null);

    if (!formData.privacyAccepted) {
      setErrorMessage(
        isIt
          ? 'È necessario accettare l’informativa sulla privacy per procedere.'
          : 'Please accept the privacy policy to proceed.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await submitNetlifyForm('contact', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim(),
        service: formData.service,
        message: formData.message.trim()
      });

      // Nessun dato personale nell'evento. Parte dalla pagina di ringraziamento, una sola volta.
      queueConversion('contatti', 'contact_form_submit', {
        service: formData.service || null
      });

      navigate(`/${language}/grazie/contatti`);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        isIt
          ? 'Si è verificato un errore durante l’invio. Riprova tra poco oppure chiamaci al Numero Verde 800 940 213.'
          : 'An error occurred while submitting. Please try again shortly or call us toll-free on 800 940 213.'
      );
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <MetaTags
        title={content.title}
        description={content.description}
        path="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Contatti' : 'Contact', path: '/contact' }
        ]}
      />
      <div className="section">
        <div className="shell">
          <div className="max-w-lg mx-auto md:max-w-none grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 items-start">

            {/* Colonna sinistra: titolo e form */}
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

              <form onSubmit={handleSubmit} className="card mt-8 space-y-5">
                <h2 className="text-[1.05rem] font-semibold text-ink-900">
                  {isIt ? 'Scrivici' : 'Write to us'}
                </h2>

                {errorMessage && (
                  <div role="alert" className="flex items-start gap-3 rounded-2xl border border-line bg-red-50 p-4 text-[0.9rem] text-red-700">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${fieldId}-name`} className={LABEL_CLASS}>
                      {isIt ? 'Nome e Cognome' : 'Full Name'} <span className="text-accent-600">*</span>
                    </label>
                    <input
                      id={`${fieldId}-name`}
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${fieldId}-email`} className={LABEL_CLASS}>
                      Email <span className="text-accent-600">*</span>
                    </label>
                    <input
                      id={`${fieldId}-email`}
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`${fieldId}-phone`} className={LABEL_CLASS}>
                      {isIt ? 'Telefono (facoltativo)' : 'Phone (optional)'}
                    </label>
                    <input
                      id={`${fieldId}-phone`}
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${fieldId}-company`} className={LABEL_CLASS}>
                      {isIt ? 'Azienda (facoltativo)' : 'Company (optional)'}
                    </label>
                    <input
                      id={`${fieldId}-company`}
                      type="text"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${fieldId}-service`} className={LABEL_CLASS}>
                    {isIt ? 'Di cosa vuoi parlare? (facoltativo)' : 'What would you like to discuss? (optional)'}
                  </label>
                  <select
                    id={`${fieldId}-service`}
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={INPUT_CLASS}
                  >
                    <option value="">{isIt ? 'Seleziona...' : 'Select...'}</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>{service.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={`${fieldId}-message`} className={LABEL_CLASS}>
                    {isIt ? 'Messaggio' : 'Message'} <span className="text-accent-600">*</span>
                  </label>
                  <textarea
                    id={`${fieldId}-message`}
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer text-left">
                  <input
                    type="checkbox"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border border-line bg-white text-accent-600 focus:outline-none focus:ring-1 focus:ring-accent-600"
                  />
                  <span className="text-[0.85rem] text-ink-600 leading-relaxed">
                    {isIt ? (
                      <>
                        Ho letto e accetto l’<a href="https://www.iubenda.com/privacy-policy/77132692" target="_blank" rel="noopener noreferrer" className="text-accent-600 underline hover:text-accent-700">informativa sulla privacy</a> e autorizzo il trattamento dei dati per essere ricontattato.
                      </>
                    ) : (
                      <>
                        I have read and agree to the <a href="https://www.iubenda.com/privacy-policy/77132692" target="_blank" rel="noopener noreferrer" className="text-accent-600 underline hover:text-accent-700">privacy policy</a> and consent to data processing in order to be contacted.
                      </>
                    )}
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? (isIt ? 'Invio in corso...' : 'Submitting...')
                    : (
                      <>
                        <span>{isIt ? 'Invia il messaggio' : 'Send the message'}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                </button>
              </form>

              <div className="mt-6 space-y-2 text-[0.9rem] text-ink-600">
                <p>
                  {isIt ? 'Hai un e-commerce? ' : 'Running an e-commerce? '}
                  <Link to={`/${language}/analisi-gratuita`} className="text-accent-700 font-medium hover:text-accent-800">
                    {isIt ? 'Richiedi l’analisi gratuita →' : 'Request the free analysis →'}
                  </Link>
                </p>
                <p>
                  {isIt ? 'Sei una PMI che cerca nuovi clienti? ' : 'An SME looking for new customers? '}
                  <Link to={`/${language}/lp/lead-generation`} className="text-accent-700 font-medium hover:text-accent-800">
                    {isIt ? 'Analisi gratuita del tuo account →' : 'Free analysis of your account →'}
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Colonna destra: telefono, calendario, sedi, mappa */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="icon-tile flex-shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="text-[0.95rem] text-ink-600 leading-relaxed">
                    <a
                      href="tel:800940213"
                      className="text-accent-600 font-semibold hover:text-accent-700 transition-colors duration-200"
                    >
                      800 940 213
                    </a>
                    <p className="mt-1">{content.digitalConcierge}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-tile flex-shrink-0">
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <a
                      href="https://calendar.app.google/hrTJoM1BDccQw75NA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                    >
                      {content.bookMeeting}
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-tile flex-shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="text-[0.95rem] text-ink-600 leading-relaxed">
                    <p className="font-semibold text-ink-900">{content.legalAddress}:</p>
                    <p>Via G.B. Pergolesi 16</p>
                    <p>20900 Monza</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="icon-tile flex-shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="text-[0.95rem] text-ink-600 leading-relaxed">
                    <p className="font-semibold text-ink-900">{content.operationalAddress}:</p>
                    <p>Via Giovanni Battista Pergolesi 29</p>
                    <p>20124 Milano</p>
                  </div>
                </div>
              </div>

              <div className="media h-80 mt-8">
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
