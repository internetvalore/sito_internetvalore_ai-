import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from './MetaTags';
import { FEATURE_THEMES } from '../data/featuresData';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Cpu
} from 'lucide-react';

const generateUUIDv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default function QualifiedDossierSection() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const themeParam = searchParams.get('tema');
  const capParam = searchParams.get('cap');

  const focusedTheme = themeParam ? FEATURE_THEMES[themeParam] : undefined;
  const focusedSpoke = focusedTheme && capParam ? focusedTheme.spokes.find((s) => s.slug === capParam) : undefined;
  const isStandalonePage = location.pathname.includes('/casi-e-audit') || location.pathname.includes('/dossier-riservato');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shop_url: '',
    role: '',
    ad_spend: '',
    nda_requested: true,
    privacyAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.privacyAccepted) {
      setErrorMessage(
        isIt
          ? 'È necessario accettare l’informativa sulla privacy per procedere.'
          : 'Please accept the privacy policy to proceed.'
      );
      return;
    }

    if (!formData.ad_spend) {
      setErrorMessage(
        isIt
          ? 'Seleziona la tua fascia di investimento pubblicitario mensile.'
          : 'Please select your monthly advertising investment tier.'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams({
        'form-name': 'richiesta-dossier-qualificato',
        'name': formData.name,
        'email': formData.email,
        'shop_url': formData.shop_url,
        'role': formData.role,
        'ad_spend': formData.ad_spend,
        'nda_requested': formData.nda_requested ? 'true' : 'false',
        'tema': themeParam || '',
        'cap': capParam || ''
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      // Track GTM Event (No PII)
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'qualified_dossier_request',
        event_id: generateUUIDv4(),
        ad_spend_tier: formData.ad_spend,
        nda_requested: formData.nda_requested,
        role: formData.role,
        tema: themeParam || null,
        cap: capParam || null
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        isIt
          ? 'Si è verificato un errore durante l’invio. Ti invitiamo a riprovare o a contattarci direttamente via telefono.'
          : 'An error occurred while submitting. Please try again or reach out to us by phone.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isStandalonePage && (
        <MetaTags
          title={isIt ? 'Dossier di Audit Qualificato & Benchmark E-commerce | Internet Valore' : 'Qualified E-commerce Audit Dossier & Benchmark | Internet Valore'}
          description={isIt
            ? 'Richiedi l’accesso al dossier riservato di audit e benchmark e-commerce. Sessioni protette da NDA riservate ad investimenti pubblicitari a partire da 15.000€/mese.'
            : 'Request access to the confidential e-commerce audit dossier and benchmark. Mutual NDA sessions reserved for advertising spend starting from €15,000/mo.'}
          path="/casi-e-audit"
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: isIt ? 'Audit Riservato' : 'Confidential Audit', path: '/casi-e-audit' }
          ]}
        />
      )}

      <section id="casi-audit-riservati" className="section section-quiet relative border-t border-b border-line">
      <div className="shell relative">
        
        {/* Header Section */}
        <div className="text-center measure mx-auto mb-12 rise">
          <div className="chip mx-auto mb-4 inline-flex items-center gap-2 px-4 py-2 text-accent-600">
            <Lock className="h-4 w-4" />
            {isIt ? 'Patto di Riservatezza Industriale' : 'Industrial Confidentiality Pact'}
          </div>

          <h2 className="title-xl mb-6 text-ink-900">
            {isIt
              ? 'Perché non troverai i nomi e i margini dei nostri clienti esposti su questa pagina'
              : 'Why you won’t find our clients’ names and margins publicly exposed here'}
          </h2>

          <p className="lede measure mx-auto text-ink-600">
            {isIt
              ? 'I margini reali di profitto (POAS), i prodotti eroe e le quote d’asta sono il segreto industriale più prezioso di un e-commerce. Pubblicare case study aperti significa consegnare su un piatto d’argento la strategia ai loro competitor diretti. Proteggiamo l’asset dei nostri clienti come proteggiamo il nostro codice.'
              : 'Real profit margins (POAS), hero products, and auction impression shares are the most valuable trade secrets of an e-commerce brand. Publicly broadcasting case studies hands the playbook directly to their competitors. We protect our clients’ competitive asset as strictly as our proprietary code.'}
          </p>
        </div>

        {/* The 3 Protective Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <div className="card card-hover border border-line rise">
            <div className="icon-tile border border-line mb-4">
              <EyeOff className="h-5 w-5" />
            </div>
            <h3 className="text-[1.05rem] font-semibold mb-3 text-ink-900">
              {isIt ? 'Protezione da comportamenti opportunistici' : 'Protection from opportunistic competitors'}
            </h3>
            <p className="text-[0.9rem] text-ink-600 leading-relaxed">
              {isIt
                ? 'Nessun competitor potrà mai copiare i test creativi, le keyword convertenti o i canali di traffico dei nostri clienti attraverso la nostra agenzia.'
                : 'No competitor will ever copy creative tests, converting search queries, or traffic channels of our clients through our agency showcase.'}
            </p>
          </div>

          <div className="card card-hover border border-line rise-1">
            <div className="icon-tile border border-line mb-4">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-[1.05rem] font-semibold mb-3 text-ink-900">
              {isIt ? 'Dossier e Benchmark in sessione privata' : 'Private Dossiers & Benchmark sessions'}
            </h3>
            <p className="text-[0.9rem] text-ink-600 leading-relaxed">
              {isIt
                ? 'Condividiamo scomposizioni LMDI, dati di riconciliazione contabile e benchmark di settore solo in sessioni 1-to-1 con metriche aggregate e anonimizzate.'
                : 'We share LMDI breakdowns, reconciled accounting data, and industry benchmarks only in 1-on-1 confidential sessions with anonymized metrics.'}
            </p>
          </div>

          <div className="card card-hover border border-line rise-2">
            <div className="icon-tile border border-line mb-4">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-[1.05rem] font-semibold mb-3 text-ink-900">
              {isIt ? 'Accesso qualificato (Soglia 15.000 €/mese)' : 'Qualified Access (15,000 €/month threshold)'}
            </h3>
            <p className="text-[0.9rem] text-ink-600 leading-relaxed">
              {isIt
                ? 'Riserviamo il nostro tempo e la nostra suite tecnologica a merchant e brand con volumi significativi, garantendo serietà e rigore ad ogni audit.'
                : 'We dedicate our time and proprietary suite to stores and brands with significant spend, ensuring rigor and seriousness for every audit.'}
            </p>
          </div>

        </div>

        {/* The Qualified Access Form Gate */}
        <div className="card card-hover border border-line max-w-3xl mx-auto p-6 sm:p-10">
          
          <div className="text-center mb-8">
            <div className="chip mx-auto mb-3 inline-flex items-center gap-2 px-4 py-2 text-accent-600">
              <Sparkles className="h-4 w-4" />
              {isIt ? 'Richiesta di Consultazione Riservata' : 'Confidential Consultation Request'}
            </div>
            <h3 className="title-lg mb-3 text-ink-900">
              {isIt
                ? 'Richiedi l’Accesso al Dossier Benchmark & Audit E-commerce'
                : 'Request Access to the E-commerce Benchmark Dossier & Audit'}
            </h3>
            <p className="text-[0.95rem] text-ink-600 leading-relaxed">
              {isIt
                ? 'Compila il modulo per verificare il fit con il nostro modello di outsourcing. Rispondiamo entro 24 ore lavorative per organizzare una sessione riservata.'
                : 'Fill out the form to verify methodological fit with our outsourcing framework. We respond within 24 business hours to arrange a confidential session.'}
            </p>
          </div>

          {/* Focused Module Contextual Banner */}
          {focusedTheme && (
            <div className="card card-quiet border border-line p-4 mb-6 text-left flex items-start gap-3">
              <Cpu className="h-5 w-5 text-accent-600 shrink-0 mt-0.5" />
              <div>
                <div className="eyebrow eyebrow-quiet">
                  {isIt ? 'Focus Modulo Audit Selezionato' : 'Focused Audit Module Selected'}
                </div>
                <div className="text-[0.95rem] font-semibold mt-0.5">
                  {focusedSpoke ? focusedSpoke.h1[language] : focusedTheme.title[language]}
                </div>
                <p className="text-[0.85rem] text-ink-600 mt-1.5">
                  {isIt
                    ? 'La scansione API in sola lettura e il dossier riservato approfondiranno prioritariamente le metriche di questo modulo.'
                    : 'The read-only API inspection and confidential dossier will prioritize telemetry for this module.'}
                </p>
              </div>
            </div>
          )}

          {/* Success State */}
          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="card card-hover border border-line text-center"
              >
                <div className="h-12 w-12 rounded-full border border-line bg-paper text-accent-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="title-lg mb-2 text-ink-900">
                  {isIt ? 'Richiesta di Accesso Ricevuta' : 'Access Request Received'}
                </h4>
                <p className="text-[0.9rem] text-ink-600 leading-relaxed max-w-md mx-auto mb-4">
                  {isIt
                    ? 'Abbiamo preso in carico la tua richiesta. Analizzeremo lo store e ti ricontatteremo entro 1 giorno lavorativo per predisporre il dossier riservato e concordare la call protetta da NDA.'
                    : 'We have received your request. We will review your store and reach back within 1 business day to prepare the confidential dossier and arrange the NDA-protected session.'}
                </p>
                <div className="chip border border-line text-ink-600">
                  <ShieldCheck className="h-4 w-4" />
                  {isIt ? 'Tutela Dati & Riservatezza Garantita' : 'Data Protection & Confidentiality Guaranteed'}
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMessage && (
                  <div className="flex items-start gap-3 rounded-2xl border border-line bg-red-50 p-4 text-[0.9rem] text-red-700">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink-900">{isIt ? 'Attenzione' : 'Attention'}</p>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome e Cognome */}
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-ink-600 mb-2 text-left">
                      {isIt ? 'Nome e Cognome' : 'Full Name'} <span className="text-accent-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isIt ? 'Es. Mario Rossi' : 'e.g. John Smith'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 transition-colors duration-220"
                    />
                  </div>

                  {/* Email Aziendale */}
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-ink-600 mb-2 text-left">
                      {isIt ? 'Email Aziendale' : 'Business Email'} <span className="text-accent-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={isIt ? 'Es. m.rossi@tuonegozio.it' : 'e.g. j.smith@yourbrand.com'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 transition-colors duration-220"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* URL Negozio E-commerce */}
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-ink-600 mb-2 text-left">
                      {isIt ? 'URL Negozio E-commerce' : 'E-commerce Store URL'} <span className="text-accent-600">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://www.tuonegozio.it"
                      value={formData.shop_url}
                      onChange={(e) => setFormData({ ...formData, shop_url: e.target.value })}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 transition-colors duration-220"
                    />
                  </div>

                  {/* Ruolo Aziendale */}
                  <div>
                    <label className="block text-[0.8rem] font-semibold text-ink-600 mb-2 text-left">
                      {isIt ? 'Ruolo in Azienda' : 'Company Role'} <span className="text-accent-600">*</span>
                    </label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink-900 focus:outline-none focus:ring-1 focus:ring-accent-600 transition-colors duration-220"
                    >
                      <option value="">{isIt ? 'Seleziona ruolo...' : 'Select role...'}</option>
                      <option value="Titolare / CEO">{isIt ? 'Titolare / Amministratore Delegato' : 'Founder / CEO'}</option>
                      <option value="E-commerce Manager">{isIt ? 'E-commerce Manager / Head of Digital' : 'E-commerce Manager / Head of Digital'}</option>
                      <option value="CMO / Marketing Director">{isIt ? 'CMO / Direttore Marketing' : 'CMO / Marketing Director'}</option>
                      <option value="CFO / Finance">{isIt ? 'CFO / Direttore Finanziario' : 'CFO / Financial Director'}</option>
                    </select>
                  </div>
                </div>

                {/* Spesa Pubblicitaria Mensile (SOGLIA QUALIFICATA DA 15k IN SU) */}
                <div>
                  <label className="block text-[0.8rem] font-semibold text-ink-600 mb-2 text-left">
                    {isIt ? 'Investimento Pubblicitario Mensile Attuale (Ads)' : 'Current Monthly Ads Spend'} <span className="text-accent-600">*</span>
                  </label>
                  <select
                    required
                    value={formData.ad_spend}
                    onChange={(e) => setFormData({ ...formData, ad_spend: e.target.value })}
                    className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink-900 focus:outline-none focus:ring-1 focus:ring-accent-600 transition-colors duration-220"
                  >
                    <option value="">{isIt ? 'Seleziona fascia di investimento...' : 'Select investment tier...'}</option>
                    <option value="15.000 € – 50.000 € / mese">15.000 € – 50.000 € / mese</option>
                    <option value="50.000 € – 100.000 € / mese">50.000 € – 100.000 € / mese</option>
                    <option value="Oltre 100.000 € / mese">{isIt ? 'Oltre 100.000 € / mese' : 'Over 100,000 € / month'}</option>
                  </select>
                  <p className="text-[0.85rem] text-ink-600 mt-2 text-left">
                    {isIt
                      ? 'L’outsourcing con masterAnalyzer è strutturato per massimizzare la resa economica su budget mensili a partire da 15.000 €.'
                      : 'Outsourcing campaign management with masterAnalyzer is engineered for monthly budgets starting from €15,000.'}
                  </p>
                </div>

                {/* Richiesta NDA Reciproco */}
                <div className="rounded-2xl border border-line bg-white p-4 text-left">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.nda_requested}
                      onChange={(e) => setFormData({ ...formData, nda_requested: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border border-line bg-white text-accent-600 focus:outline-none focus:ring-1 focus:ring-accent-600"
                    />
                    <span className="text-[0.85rem] text-ink-600 leading-relaxed">
                      {isIt ? (
                        <>
                          <strong className="font-semibold">Richiedo Accordo di Riservatezza (NDA) preliminare:</strong> desidero siglare un accordo bilaterale di non divulgazione prima della condivisione dei dati di audit e marginalità.
                        </>
                      ) : (
                        <>
                          <strong className="font-semibold">Request Mutual NDA:</strong> I wish to sign a non-disclosure agreement prior to sharing audit and margin metrics.
                        </>
                      )}
                    </span>
                  </label>
                </div>

                {/* Privacy Consent */}
                <div className="text-left">
                  <label className="flex items-start gap-3 cursor-pointer">
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
                          Ho letto e accetto l’<a href="/it/about" className="text-accent-600 underline hover:text-accent-700">informativa sulla privacy</a> e autorizzo il trattamento dei dati ai fini della consultazione riservata.
                        </>
                      ) : (
                        <>
                          I have read and agree to the <a href="/en/about" className="text-accent-600 underline hover:text-accent-700">privacy policy</a> and consent to data processing for confidential consultation.
                        </>
                      )}
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-ink-100 border-t-transparent animate-spin" />
                      <span>{isIt ? 'Verifica e invio in corso...' : 'Submitting request...'}</span>
                    </div>
                  ) : (
                    <>
                      <span>{isIt ? 'Richiedi Accesso Qualificato al Dossier E-commerce' : 'Request Qualified Access to E-commerce Dossier'}</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
    </>
  );
}
