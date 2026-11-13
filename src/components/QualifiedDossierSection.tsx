import React, { useId, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from './MetaTags';
import { FEATURE_THEMES } from '../data/featuresData';
import { queueConversion } from '../utils/conversion';
import { submitNetlifyForm } from '../utils/netlifyForm';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileText,
  AlertCircle,
  ArrowRight,
  Check,
  Cpu
} from 'lucide-react';

const INPUT_CLASS =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 transition-colors duration-220';
const LABEL_CLASS = 'block text-[0.8rem] font-semibold text-ink-600 mb-2 text-left';

/**
 * Analisi gratuita del tuo e-commerce: offerta, form e blocco sulla riservatezza.
 * Usata come pagina (/analisi-gratuita) e come sezione in home, pagina e-commerce e recensioni.
 */
export default function QualifiedDossierSection() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const location = useLocation();
  const navigate = useNavigate();
  const fieldId = useId();

  const searchParams = new URLSearchParams(location.search);
  const themeParam = searchParams.get('tema');
  const capParam = searchParams.get('cap');

  const focusedTheme = themeParam ? FEATURE_THEMES[themeParam] : undefined;
  const focusedSpoke = focusedTheme && capParam ? focusedTheme.spokes.find((s) => s.slug === capParam) : undefined;
  const isStandalonePage = location.pathname.includes('/analisi-gratuita');
  const Heading = isStandalonePage ? 'h1' : 'h2';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shop_url: '',
    ad_spend: '',
    phone: '',
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
      await submitNetlifyForm('richiesta-dossier-qualificato', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        shop_url: formData.shop_url.trim(),
        ad_spend: formData.ad_spend,
        phone: formData.phone.trim(),
        tema: themeParam || '',
        cap: capParam || ''
      });

      // Nessun dato personale nell'evento. Parte dalla pagina di ringraziamento, una sola volta.
      queueConversion('analisi-ecommerce', 'qualified_dossier_request', {
        ad_spend_tier: formData.ad_spend,
        tema: themeParam || null,
        cap: capParam || null
      });

      navigate(`/${language}/grazie/analisi-ecommerce`);
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

  const included = isIt
    ? [
        'Quanti ordini reali il tuo tracciamento non registra',
        'Dove stai lasciando margine sul tavolo',
        'Lavoriamo in sola lettura: vediamo i dati, non modifichiamo nulla'
      ]
    : [
        'How many real orders your tracking fails to record',
        'Where you are leaving margin on the table',
        'We work read-only: we see the data, we change nothing'
      ];

  return (
    <>
      {isStandalonePage && (
        <MetaTags
          title={isIt ? 'Analisi Gratuita del tuo E-commerce | Internet Valore' : 'Free E-commerce Analysis | Internet Valore'}
          description={isIt
            ? 'Richiedi l’analisi gratuita del tuo e-commerce: ti diciamo quanti ordini il tuo tracciamento non vede e dove lasci margine. Per investimenti ads da 15.000 €/mese.'
            : 'Request your free e-commerce analysis: we tell you how many orders your tracking misses and where you leave margin. For ad spend from €15,000/month.'}
          path="/analisi-gratuita"
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: isIt ? 'Analisi gratuita' : 'Free analysis', path: '/analisi-gratuita' }
          ]}
        />
      )}

      <section id="analisi-gratuita" className="section section-quiet relative border-t border-b border-line scroll-mt-20">
        <div className="shell relative">

          {/* Offerta + form */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 items-start mb-16">

            <div className="rise">
              <p className="eyebrow mb-3">{isIt ? 'Analisi gratuita' : 'Free analysis'}</p>
              <Heading className="title-xl mb-4 text-ink-900">
                {isIt
                  ? 'Richiedi l’analisi gratuita del tuo e-commerce'
                  : 'Request the free analysis of your e-commerce'}
              </Heading>
              <p className="lede measure mb-6">
                {isIt
                  ? 'Ti diciamo quanti ordini il tuo tracciamento non vede e dove stai lasciando margine. Poi decidi tu.'
                  : 'We tell you how many orders your tracking misses and where you are leaving margin. Then you decide.'}
              </p>

              <ul className="space-y-3 mb-6">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-[0.95rem] font-medium text-ink-900 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[0.875rem] text-ink-500 measure">
                {isIt
                  ? 'Rispondiamo entro 1 giorno lavorativo. Su richiesta firmiamo un accordo di riservatezza (NDA) prima di vedere i tuoi dati.'
                  : 'We reply within 1 business day. On request we sign a non-disclosure agreement (NDA) before seeing your data.'}
              </p>
            </div>

            <div className="card border border-line p-6 sm:p-8">

              {/* Modulo di audit selezionato dalla pagina funzionalità */}
              {focusedTheme && (
                <div className="card card-quiet border border-line p-4 mb-6 text-left flex items-start gap-3">
                  <Cpu className="h-5 w-5 text-accent-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="eyebrow eyebrow-quiet">
                      {isIt ? 'Focus Modulo Audit Selezionato' : 'Focused Audit Module Selected'}
                    </div>
                    <div className="text-[0.95rem] font-semibold mt-0.5">
                      {focusedSpoke ? focusedSpoke.h1[language] : focusedTheme.title[language]}
                    </div>
                    <p className="text-[0.85rem] text-ink-600 mt-1.5">
                      {isIt
                        ? 'L’analisi approfondirà per prime le metriche di questo modulo.'
                        : 'The analysis will look at the metrics of this module first.'}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {errorMessage && (
                  <div role="alert" className="flex items-start gap-3 rounded-2xl border border-line bg-red-50 p-4 text-[0.9rem] text-red-700">
                    <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-ink-900">{isIt ? 'Attenzione' : 'Attention'}</p>
                      <p>{errorMessage}</p>
                    </div>
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
                      placeholder={isIt ? 'Es. Mario Rossi' : 'e.g. John Smith'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>

                  <div>
                    <label htmlFor={`${fieldId}-email`} className={LABEL_CLASS}>
                      {isIt ? 'Email Aziendale' : 'Business Email'} <span className="text-accent-600">*</span>
                    </label>
                    <input
                      id={`${fieldId}-email`}
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder={isIt ? 'Es. m.rossi@tuonegozio.it' : 'e.g. j.smith@yourbrand.com'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={`${fieldId}-shop`} className={LABEL_CLASS}>
                    {isIt ? 'Indirizzo del tuo negozio online' : 'Your online store address'} <span className="text-accent-600">*</span>
                  </label>
                  <input
                    id={`${fieldId}-shop`}
                    type="url"
                    name="shop_url"
                    autoComplete="url"
                    required
                    placeholder={isIt ? 'https://www.tuonegozio.it' : 'https://www.yourstore.com'}
                    value={formData.shop_url}
                    onChange={(e) => setFormData({ ...formData, shop_url: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </div>

                {/* Soglia di accesso: 15.000 € di ads spend al mese */}
                <div>
                  <label htmlFor={`${fieldId}-spend`} className={LABEL_CLASS}>
                    {isIt ? 'Investimento pubblicitario mensile attuale (ads spend)' : 'Current monthly ad spend'} <span className="text-accent-600">*</span>
                  </label>
                  <select
                    id={`${fieldId}-spend`}
                    name="ad_spend"
                    required
                    value={formData.ad_spend}
                    onChange={(e) => setFormData({ ...formData, ad_spend: e.target.value })}
                    className={INPUT_CLASS}
                  >
                    <option value="">{isIt ? 'Seleziona fascia di investimento...' : 'Select investment tier...'}</option>
                    <option value="15.000 € – 50.000 € / mese">{isIt ? '15.000 € – 50.000 € / mese' : '€15,000 – €50,000 / month'}</option>
                    <option value="50.000 € – 100.000 € / mese">{isIt ? '50.000 € – 100.000 € / mese' : '€50,000 – €100,000 / month'}</option>
                    <option value="Oltre 100.000 € / mese">{isIt ? 'Oltre 100.000 € / mese' : 'Over €100,000 / month'}</option>
                  </select>
                  <p className="text-[0.85rem] text-ink-600 mt-2 text-left">
                    {isIt
                      ? 'Il servizio è strutturato per budget pubblicitari a partire da 15.000 € al mese. '
                      : 'The service is designed for advertising budgets starting from €15,000 per month. '}
                    <Link to={`/${language}/services/lead-generation`} className="text-accent-700 font-medium hover:text-accent-800">
                      {isIt ? 'Spendi meno? Guarda il percorso per le PMI →' : 'Spending less? See the path for SMEs →'}
                    </Link>
                  </p>
                </div>

                <div>
                  <label htmlFor={`${fieldId}-phone`} className={LABEL_CLASS}>
                    {isIt ? 'Telefono (facoltativo)' : 'Phone (optional)'}
                  </label>
                  <input
                    id={`${fieldId}-phone`}
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+39 333 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={INPUT_CLASS}
                  />
                </div>

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
                          Ho letto e accetto l’<a href="https://www.iubenda.com/privacy-policy/77132692" target="_blank" rel="noopener noreferrer" className="text-accent-600 underline hover:text-accent-700">informativa sulla privacy</a> e autorizzo il trattamento dei dati per ricevere l’analisi richiesta.
                        </>
                      ) : (
                        <>
                          I have read and agree to the <a href="https://www.iubenda.com/privacy-policy/77132692" target="_blank" rel="noopener noreferrer" className="text-accent-600 underline hover:text-accent-700">privacy policy</a> and consent to data processing in order to receive the requested analysis.
                        </>
                      )}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-ink-100 border-t-transparent animate-spin" />
                      <span>{isIt ? 'Invio in corso...' : 'Submitting...'}</span>
                    </span>
                  ) : (
                    <>
                      <span>{isIt ? 'Richiedi l’analisi gratuita' : 'Request the free analysis'}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

          {/* Riservatezza: perché non pubblichiamo nomi e margini dei clienti */}
          <div className="text-center measure mx-auto mb-12">
            <div className="chip mx-auto mb-4 inline-flex items-center gap-2 px-4 py-2 text-accent-600">
              <Lock className="h-4 w-4" aria-hidden="true" />
              {isIt ? 'Patto di Riservatezza Industriale' : 'Industrial Confidentiality Pact'}
            </div>

            <h2 className="title-lg mb-5 text-ink-900">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="card card-hover border border-line">
              <div className="icon-tile border border-line mb-4">
                <EyeOff className="h-5 w-5" aria-hidden="true" />
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

            <div className="card card-hover border border-line">
              <div className="icon-tile border border-line mb-4">
                <FileText className="h-5 w-5" aria-hidden="true" />
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

            <div className="card card-hover border border-line">
              <div className="icon-tile border border-line mb-4">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-[1.05rem] font-semibold mb-3 text-ink-900">
                {isIt ? 'Accesso qualificato (Soglia 15.000 € ads spend /mese)' : 'Qualified Access (€15,000 ad spend /month threshold)'}
              </h3>
              <p className="text-[0.9rem] text-ink-600 leading-relaxed">
                {isIt
                  ? 'Riserviamo il nostro tempo e la nostra suite tecnologica a merchant e brand con volumi significativi, garantendo serietà e rigore ad ogni audit.'
                  : 'We dedicate our time and proprietary suite to stores and brands with significant spend, ensuring rigor and seriousness for every audit.'}
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
