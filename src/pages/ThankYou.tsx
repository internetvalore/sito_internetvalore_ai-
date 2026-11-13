import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { fireQueuedConversion, type ConversionKind } from '../utils/conversion';

const BOOKING_HREF = 'https://calendar.app.google/hrTJoM1BDccQw75NA';

type ThankYouKind = Extract<ConversionKind, 'analisi-ecommerce' | 'analisi-pmi' | 'contatti'>;

type Copy = {
  metaTitle: string;
  intro: string;
  steps: { title: string; body: string }[];
  note?: string;
};

const COPY: Record<ThankYouKind, { it: Copy; en: Copy }> = {
  'analisi-ecommerce': {
    it: {
      metaTitle: 'Richiesta ricevuta | Analisi gratuita e-commerce | Internet Valore',
      intro: 'Abbiamo ricevuto i dati del tuo e-commerce. Ecco come procediamo, passo dopo passo.',
      steps: [
        {
          title: 'Ti rispondiamo entro 1 giorno lavorativo',
          body: 'Ti scriviamo per concordare l’accesso in sola lettura ai tuoi account: vediamo i dati, non modifichiamo nulla.',
        },
        {
          title: 'Analizziamo i tuoi numeri',
          body: 'Confrontiamo gli ordini reali con quelli che il tracciamento registra e cerchiamo dove si sta perdendo margine.',
        },
        {
          title: 'Ti presentiamo l’analisi',
          body: 'In una call ti mostriamo cosa abbiamo trovato. Poi decidi tu.',
        },
      ],
      note: 'Su richiesta firmiamo un accordo di riservatezza (NDA) prima di vedere i tuoi dati.',
    },
    en: {
      metaTitle: 'Request received | Free e-commerce analysis | Internet Valore',
      intro: 'We have received your e-commerce details. Here is how we proceed, step by step.',
      steps: [
        {
          title: 'We reply within 1 business day',
          body: 'We write to arrange read-only access to your accounts: we see the data, we change nothing.',
        },
        {
          title: 'We analyze your numbers',
          body: 'We compare real orders with the ones your tracking records and look for where margin is being lost.',
        },
        {
          title: 'We present the analysis',
          body: 'In a call we show you what we found. Then you decide.',
        },
      ],
      note: 'On request we sign a non-disclosure agreement (NDA) before seeing your data.',
    },
  },
  'analisi-pmi': {
    it: {
      metaTitle: 'Richiesta ricevuta | Analisi gratuita dell’account | Internet Valore',
      intro: 'Abbiamo ricevuto la tua richiesta. Ecco come procediamo, passo dopo passo.',
      steps: [
        {
          title: 'Ti rispondiamo entro 1 giorno lavorativo',
          body: 'Ti chiediamo un accesso in sola lettura al tuo account Google Ads.',
        },
        {
          title: 'Analizziamo il tuo account',
          body: 'Entro 3 giorni lavorativi ricevi un documento con le ricerche su cui hai pagato, la spesa finita fuori bersaglio e le tre cose che cambieremmo per prime.',
        },
        {
          title: 'Decidi tu',
          body: 'Il documento è tuo, che tu lavori con noi o no. Nessun impegno, nessun contratto da firmare per averlo.',
        },
      ],
    },
    en: {
      metaTitle: 'Request received | Free account analysis | Internet Valore',
      intro: 'We have received your request. Here is how we proceed, step by step.',
      steps: [
        {
          title: 'We reply within 1 business day',
          body: 'We ask you for read-only access to your Google Ads account.',
        },
        {
          title: 'We analyze your account',
          body: 'Within 3 business days you receive a document with the searches you paid for, the spend that went off-target and the three things we would change first.',
        },
        {
          title: 'You decide',
          body: 'The document is yours to keep, whether you work with us or not. No commitment, no contract to sign.',
        },
      ],
    },
  },
  contatti: {
    it: {
      metaTitle: 'Messaggio ricevuto | Internet Valore',
      intro: 'Abbiamo ricevuto il tuo messaggio. Ti ricontattiamo di norma entro 1 giorno lavorativo.',
      steps: [],
    },
    en: {
      metaTitle: 'Message received | Internet Valore',
      intro: 'We have received your message. We normally get back to you within 1 business day.',
      steps: [],
    },
  },
};

const isThankYouKind = (value: string | undefined): value is ThankYouKind =>
  value === 'analisi-ecommerce' || value === 'analisi-pmi' || value === 'contatti';

/**
 * Pagina di ringraziamento unica per i form del sito.
 * L'evento di conversione parte solo se il form è stato davvero inviato (vedi utils/conversion).
 */
export default function ThankYou() {
  const { language } = useLanguage();
  const { kind } = useParams();
  const isIt = language === 'it';

  useEffect(() => {
    if (!isThankYouKind(kind)) return;
    fireQueuedConversion(kind, { lang: language, page_path: window.location.pathname });
    // L'evento deve partire una sola volta per invio: la coda viene svuotata alla prima lettura.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind]);

  if (!isThankYouKind(kind)) {
    return <Navigate to={`/${language}/`} replace />;
  }

  const copy = COPY[kind][language];

  return (
    <>
      <MetaTags
        title={copy.metaTitle}
        description={copy.intro}
        path={`/grazie/${kind}`}
        noIndex={true}
      />

      <div className="section section-quiet">
        <div className="shell">
          <div className="card max-w-3xl mx-auto text-center p-8 sm:p-10">
            <div className="icon-tile flex w-14 h-14 rounded-full mx-auto mb-6">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </div>

            <p className="eyebrow mb-4">{isIt ? 'Richiesta ricevuta' : 'Request received'}</p>

            <h1 className="title-xl mb-5">{isIt ? 'Cosa succede adesso' : 'What happens next'}</h1>

            <p className="lede measure mx-auto mb-8">{copy.intro}</p>

            {copy.steps.length > 0 && (
              <ol className="text-left space-y-6 mb-8">
                {copy.steps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="icon-tile w-9 h-9 rounded-full shrink-0 text-[0.9rem] font-semibold">{index + 1}</span>
                    <div>
                      <h2 className="text-base font-semibold text-ink-900 mb-1">{step.title}</h2>
                      <p className="text-[0.9rem] text-ink-600 leading-relaxed">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {copy.note && <p className="text-[0.875rem] text-ink-500 measure mx-auto mb-8">{copy.note}</p>}

            <div className="hairline pt-7">
              <p className="text-base font-semibold text-ink-900 mb-4">
                {isIt ? 'Vuoi fissare subito un orario?' : 'Want to pick a time right away?'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href={BOOKING_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {isIt ? 'Prenota una call in calendario' : 'Book a call in the calendar'}
                </a>
                <a href="tel:800940213" className="btn btn-ghost">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  800 940 213
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Link to={`/${language}/`} className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-accent-600 hover:text-accent-700">
                {isIt ? 'Torna alla home' : 'Back to the home page'}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
