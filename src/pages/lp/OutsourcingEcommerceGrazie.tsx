import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  Printer,
  Calendar,
  MessageCircle,
  Phone
} from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import { fireQueuedConversion } from '../../utils/conversion';

export default function OutsourcingEcommerceGrazie() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // Evento chiave GA4 "lp_outsourcing_lead": parte una sola volta e solo se il form della landing
  // è stato davvero inviato (la landing lo mette in coda dopo l'invio riuscito).
  useEffect(() => {
    fireQueuedConversion('lp-outsourcing', {
      lang: language,
      page_path: window.location.pathname
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen font-sans antialiased flex flex-col justify-between">
      <MetaTags
        title={isIt ? "Richiesta Ricevuta | Controllo del Giorno Zero | Internet Valore" : "Request Received | Day Zero Check | Internet Valore"}
        description={isIt ? "Abbiamo preso in carico la tua richiesta per il controllo del giorno zero del tuo ecommerce. Ecco i prossimi passi." : "We have received your request. Here are the next steps."}
        path="/lp/outsourcing-campagne-ecommerce/grazie"
        noIndex={true}
      />

      {/* Minimal Header */}
      <header className="iv-nav print-hide">
        <div className="shell h-16 flex items-center justify-between">
          <a
            href={`/${language}`}
            className="flex items-center gap-2 group"
            title="Internet Valore - Home"
          >
            <span className="font-semibold text-xl tracking-tight flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-600 inline-block"></span>
              Internet<span className="text-accent-600">Valore</span>
            </span>
          </a>

          <a
            href={`/${language}`}
            className="navlink flex items-center gap-1"
          >
            {isIt ? 'Torna alla Home' : 'Back to Home'} <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center section">
        <div className="card max-w-3xl mx-auto w-full text-center p-8 sm:p-10">
          
          {/* Success Check Icon */}
          <div className="icon-tile w-14 h-14 rounded-full mx-auto mb-6">
            <CheckCircle2 className="w-5 h-5" />
          </div>

          <span className="eyebrow inline-block mb-4">
            {isIt ? 'Richiesta Registrata con Successo' : 'Request Successfully Received'}
          </span>

          <h1 className="title-xl mb-6">
            {isIt ? 'Cosa succede adesso' : 'What happens now'}
          </h1>

          <p className="lede measure mx-auto mb-8">
            {isIt
              ? 'Abbiamo ricevuto i dati del tuo ecommerce. Nessun venditore insistente: ecco come procediamo esattamente, passo dopo passo.'
              : 'We’ve received your e-commerce details. No pushy salespeople: here is exactly how we proceed, step by step.'}
          </p>

          {/* Three steps recap */}
          <div className="text-left space-y-6 mb-8">
            
            <div className="flex items-start gap-4">
              <div className="icon-tile w-9 h-9 rounded-full shrink-0">
                1
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent-600" />
                  {isIt ? 'Risposta entro 1 giorno lavorativo' : 'A reply within 1 business day'}
                </h3>
                {isIt ? (
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Ti invieremo un'email con <strong>due proposte di orario</strong> per fissare la nostra call di approfondimento di 30 minuti.
                  </p>
                ) : (
                  <p className="text-sm text-ink-600 leading-relaxed">
                    We’ll send you an email with <strong>two proposed time slots</strong> to book our 30-minute in-depth call.
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="icon-tile w-9 h-9 rounded-full shrink-0">
                2
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-accent-600" />
                  {isIt ? 'In call: Registri e report reali anonimizzati' : 'On the call: real anonymized logs and reports'}
                </h3>
                {isIt ? (
                  <p className="text-sm text-ink-600 leading-relaxed">
                    Guarderemo insieme il tuo caso specifico e ti mostreremo concretamente <strong>come sono strutturati i nostri registri di modifica</strong> e l'analisi sul profitto netto.
                  </p>
                ) : (
                  <p className="text-sm text-ink-600 leading-relaxed">
                    We’ll look at your specific case together and show you, in concrete terms, <strong>how our change logs are structured</strong> and our net profit analysis.
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="icon-tile w-9 h-9 rounded-full shrink-0">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent-600" />
                  {isIt ? 'Controllo giorno zero senza stravolgimenti' : 'Day-zero check, no disruption'}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {isIt
                    ? 'Se decideremo di lavorare insieme: prima la fotografia completa del conto e 30 giorni di osservazione senza stravolgere ciò che già genera risultati.'
                    : 'If we decide to work together: first a complete snapshot of the account, then 30 days of observation without overturning what is already producing results.'}
                </p>
              </div>
            </div>

          </div>

          {/* Prompt: Keep the 6 questions ready */}
          <div className="hairline pt-7 text-center">
            <h4 className="text-base font-semibold mb-2 flex items-center justify-center gap-2">
              <FileCheck className="w-5 h-5 text-accent-600" />
              {isIt ? 'Tieni sottomano le 6 domande del video' : 'Keep the 6 questions from the video at hand'}
            </h4>
            <p className="text-sm text-ink-600 max-w-xl mx-auto mb-4 leading-relaxed">
              {isIt
                ? 'Puoi portarle in call con noi: risponderemo con i nostri registri a ciascuna di esse.'
                : 'You can bring them to the call with us: we’ll answer each one with our logs.'}
            </p>
            <a
              href={`/${language}/lp/outsourcing-campagne-ecommerce#sei-domande`}
              className="btn btn-sm"
            >
              {isIt ? 'Rivedi le 6 domande' : 'Review the 6 questions'}
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Emergency / Direct contact */}
          <div className="hairline pt-7 mt-7 text-xs text-ink-600 flex flex-wrap items-center justify-center gap-6">
            <span>{isIt ? "Hai un'urgenza particolare?" : 'Something urgent?'}</span>
            <a href="tel:800940213" className="text-accent-600 hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> {isIt ? 'Numero Verde: 800 940 213' : 'Toll-free: 800 940 213'}
            </a>
            <a href="mailto:info@internetvalore.it" className="text-accent-600 hover:underline">
              info@internetvalore.it
            </a>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="footer-premium py-6 text-center text-xs text-ink-500 print-hide">
        <div className="shell">
          <p>© {new Date().getFullYear()} Internet Valore S.r.l. — {isIt ? 'P.IVA 06767350967' : 'VAT No. 06767350967'}</p>
        </div>
      </footer>
    </div>
  );
}
