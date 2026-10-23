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

// UUID v4 Generator for tracking
const generateUUIDv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export default function OutsourcingEcommerceGrazie() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // GA4 Key Event: lp_outsourcing_lead push on page mount
  useEffect(() => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'lp_outsourcing_lead',
      event_id: generateUUIDv4(),
      lang: language,
      page_path: window.location.pathname,
      artifact_id: 'lp-outsourcing-ecommerce-2026-08'
    });
  }, [language]);

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
            Torna alla Home <ArrowRight className="w-3.5 h-3.5" />
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
            Richiesta Registrata con Successo
          </span>

          <h1 className="title-xl mb-6">
            Cosa succede adesso
          </h1>

          <p className="lede measure mx-auto mb-8">
            Abbiamo ricevuto i dati del tuo ecommerce. Nessun venditore insistente: ecco come procediamo esattamente, passo dopo passo.
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
                  Risposta entro 1 giorno lavorativo
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Ti invieremo un'email con <strong>due proposte di orario</strong> per fissare la nostra call di approfondimento di 30 minuti.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="icon-tile w-9 h-9 rounded-full shrink-0">
                2
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-accent-600" />
                  In call: Registri e report reali anonimizzati
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Guarderemo insieme il tuo caso specifico e ti mostreremo concretamente <strong>come sono strutturati i nostri registri di modifica</strong> e l'analisi sul profitto netto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="icon-tile w-9 h-9 rounded-full shrink-0">
                3
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent-600" />
                  Controllo giorno zero senza stravolgimenti
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Se decideremo di lavorare insieme: prima la fotografia completa del conto e 30 giorni di osservazione senza stravolgere ciò che già genera risultati.
                </p>
              </div>
            </div>

          </div>

          {/* Prompt: Keep the 6 questions ready */}
          <div className="hairline pt-7 text-center">
            <h4 className="text-base font-semibold mb-2 flex items-center justify-center gap-2">
              <FileCheck className="w-5 h-5 text-accent-600" />
              Tieni sottomano le 6 domande del video
            </h4>
            <p className="text-sm text-ink-600 max-w-xl mx-auto mb-4 leading-relaxed">
              Puoi portarle in call con noi: risponderemo con i nostri registri a ciascuna di esse.
            </p>
            <a
              href={`/${language}/lp/outsourcing-campagne-ecommerce#sei-domande`}
              className="btn btn-sm"
            >
              Rivedi le 6 domande
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Emergency / Direct contact */}
          <div className="hairline pt-7 mt-7 text-xs text-ink-600 flex flex-wrap items-center justify-center gap-6">
            <span>Hai un'urgenza particolare?</span>
            <a href="tel:800940213" className="text-accent-600 hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> Numero Verde: 800 940 213
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
          <p>© {new Date().getFullYear()} Internet Valore S.r.l. — P.IVA 09055410967</p>
        </div>
      </footer>
    </div>
  );
}
