import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileText,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Sparkles
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
        'nda_requested': formData.nda_requested ? 'true' : 'false'
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
        role: formData.role
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
    <section id="casi-audit-riservati" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            {isIt ? 'Patto di Riservatezza Industriale' : 'Industrial Confidentiality Pact'}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {isIt
              ? 'Perché non troverai i nomi e i margini dei nostri clienti esposti su questa pagina'
              : 'Why you won’t find our clients’ names and margins publicly exposed here'}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {isIt
              ? 'I margini reali di profitto (POAS), i prodotti eroe e le quote d’asta sono il segreto industriale più prezioso di un e-commerce. Pubblicare case study aperti significa consegnare su un piatto d’argento la strategia ai loro competitor diretti. Proteggiamo l’asset dei nostri clienti come proteggiamo il nostro codice.'
              : 'Real profit margins (POAS), hero products, and auction impression shares are the most valuable trade secrets of an e-commerce brand. Publicly broadcasting case studies hands the playbook directly to their competitors. We protect our clients’ competitive asset as strictly as our proprietary code.'}
          </p>
        </div>

        {/* The 3 Protective Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 relative">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
              <EyeOff className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">
              {isIt ? 'Protezione da comportamenti opportunistici' : 'Protection from opportunistic competitors'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isIt
                ? 'Nessun competitor potrà mai copiare i test creativi, le keyword convertenti o i canali di traffico dei nostri clienti attraverso la nostra agenzia.'
                : 'No competitor will ever copy creative tests, converting search queries, or traffic channels of our clients through our agency showcase.'}
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 relative">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">
              {isIt ? 'Dossier e Benchmark in sessione privata' : 'Private Dossiers & Benchmark sessions'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isIt
                ? 'Condividiamo scomposizioni LMDI, dati di riconciliazione contabile e benchmark di settore solo in sessioni 1-to-1 con metriche aggregate e anonimizzate.'
                : 'We share LMDI breakdowns, reconciled accounting data, and industry benchmarks only in 1-on-1 confidential sessions with anonymized metrics.'}
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-7 relative">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">
              {isIt ? 'Accesso qualificato (Soglia 15.000 €/mese)' : 'Qualified Access (15,000 €/month threshold)'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isIt
                ? 'Riserviamo il nostro tempo e la nostra suite tecnologica a merchant e brand con volumi significativi, garantendo serietà e rigore ad ogni audit.'
                : 'We dedicate our time and proprietary suite to stores and brands with significant spend, ensuring rigor and seriousness for every audit.'}
            </p>
          </div>

        </div>

        {/* The Qualified Access Form Gate */}
        <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              {isIt ? 'Richiesta di Consultazione Riservata' : 'Confidential Consultation Request'}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {isIt
                ? 'Richiedi l’Accesso al Dossier Benchmark & Audit E-commerce'
                : 'Request Access to the E-commerce Benchmark Dossier & Audit'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isIt
                ? 'Compila il modulo per verificare il fit con il nostro modello di outsourcing. Rispondiamo entro 24 ore lavorative per organizzare una sessione riservata.'
                : 'Fill out the form to verify methodological fit with our outsourcing framework. We respond within 24 business hours to arrange a confidential session.'}
            </p>
          </div>

          {/* Success State */}
          <AnimatePresence>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {isIt ? 'Richiesta di Accesso Ricevuta' : 'Access Request Received'}
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed max-w-md mx-auto mb-4">
                  {isIt
                    ? 'Abbiamo preso in carico la tua richiesta. Analizzeremo lo store e ti ricontatteremo entro 1 giorno lavorativo per predisporre il dossier riservato e concordare la call protetta da NDA.'
                    : 'We have received your request. We will review your store and reach back within 1 business day to prepare the confidential dossier and arrange the NDA-protected session.'}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-800">
                  <ShieldCheck className="w-4 h-4" />
                  {isIt ? 'Tutela Dati & Riservatezza Garantita' : 'Data Protection & Confidentiality Guaranteed'}
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{isIt ? 'Attenzione' : 'Attention'}</p>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome e Cognome */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 text-left">
                      {isIt ? 'Nome e Cognome' : 'Full Name'} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isIt ? 'Es. Mario Rossi' : 'e.g. John Smith'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Email Aziendale */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 text-left">
                      {isIt ? 'Email Aziendale' : 'Business Email'} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={isIt ? 'Es. m.rossi@tuonegozio.it' : 'e.g. j.smith@yourbrand.com'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* URL Negozio E-commerce */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 text-left">
                      {isIt ? 'URL Negozio E-commerce' : 'E-commerce Store URL'} <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="https://www.tuonegozio.it"
                      value={formData.shop_url}
                      onChange={(e) => setFormData({ ...formData, shop_url: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Ruolo Aziendale */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 text-left">
                      {isIt ? 'Ruolo in Azienda' : 'Company Role'} <span className="text-blue-400">*</span>
                    </label>
                    <select
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
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
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 text-left">
                    {isIt ? 'Investimento Pubblicitario Mensile Attuale (Ads)' : 'Current Monthly Ads Spend'} <span className="text-blue-400">*</span>
                  </label>
                  <select
                    required
                    value={formData.ad_spend}
                    onChange={(e) => setFormData({ ...formData, ad_spend: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="">{isIt ? 'Seleziona fascia di investimento...' : 'Select investment tier...'}</option>
                    <option value="15.000 € – 50.000 € / mese">15.000 € – 50.000 € / mese</option>
                    <option value="50.000 € – 100.000 € / mese">50.000 € – 100.000 € / mese</option>
                    <option value="Oltre 100.000 € / mese">{isIt ? 'Oltre 100.000 € / mese' : 'Over 100,000 € / month'}</option>
                  </select>
                  <p className="text-[11px] text-slate-400 mt-1.5 text-left">
                    {isIt
                      ? 'L’outsourcing con masterAnalyzer è strutturato per massimizzare la resa economica su budget mensili a partire da 15.000 €.'
                      : 'Outsourcing campaign management with masterAnalyzer is engineered for monthly budgets starting from €15,000.'}
                  </p>
                </div>

                {/* Richiesta NDA Reciproco */}
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.nda_requested}
                      onChange={(e) => setFormData({ ...formData, nda_requested: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed">
                      {isIt ? (
                        <>
                          <strong className="text-white">Richiedo Accordo di Riservatezza (NDA) preliminare:</strong> desidero siglare un accordo bilaterale di non divulgazione prima della condivisione dei dati di audit e marginalità.
                        </>
                      ) : (
                        <>
                          <strong className="text-white">Request Mutual NDA:</strong> I wish to sign a non-disclosure agreement prior to sharing audit and margin metrics.
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
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-slate-400 leading-relaxed">
                      {isIt ? (
                        <>
                          Ho letto e accetto l’<a href="/it/about" className="text-blue-400 underline hover:text-blue-300">informativa sulla privacy</a> e autorizzo il trattamento dei dati ai fini della consultazione riservata.
                        </>
                      ) : (
                        <>
                          I have read and agree to the <a href="/en/about" className="text-blue-400 underline hover:text-blue-300">privacy policy</a> and consent to data processing for confidential consultation.
                        </>
                      )}
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 disabled:opacity-60 disabled:cursor-not-allowed text-base cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{isIt ? 'Verifica e invio in corso...' : 'Submitting request...'}</span>
                    </div>
                  ) : (
                    <>
                      <span>{isIt ? 'Richiedi Accesso Qualificato al Dossier E-commerce' : 'Request Qualified Access to E-commerce Dossier'}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
