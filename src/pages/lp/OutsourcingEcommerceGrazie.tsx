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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased flex flex-col justify-between">
      <MetaTags
        title={isIt ? "Richiesta Ricevuta | Controllo del Giorno Zero | Internet Valore" : "Request Received | Day Zero Check | Internet Valore"}
        description={isIt ? "Abbiamo preso in carico la tua richiesta per il controllo del giorno zero del tuo ecommerce. Ecco i prossimi passi." : "We have received your request. Here are the next steps."}
        path="/lp/outsourcing-campagne-ecommerce/grazie"
      />

      {/* Minimal Header */}
      <header className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 print-hide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href={`/${language}`}
            className="flex items-center gap-2 group"
            title="Internet Valore - Home"
          >
            <span className="font-black text-xl tracking-tight text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
              Internet<span className="text-blue-400">Valore</span>
            </span>
          </a>

          <a
            href={`/${language}`}
            className="text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
          >
            Torna alla Home <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto w-full text-center">
          
          {/* Success Check Icon */}
          <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/10 animate-scale-up">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
            Richiesta Registrata con Successo
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Cosa succede adesso
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Abbiamo ricevuto i dati del tuo ecommerce. Nessun venditore insistente: ecco come procediamo esattamente, passo dopo passo.
          </p>

          {/* Three steps recap */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-left space-y-6 mb-10 shadow-2xl">
            
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
                1
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Risposta entro 1 giorno lavorativo
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Ti invieremo un'email con <strong>due proposte di orario</strong> per fissare la nostra call di approfondimento di 30 minuti.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
                2
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-blue-400" />
                  In call: Registri e report reali anonimizzati
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Guarderemo insieme il tuo caso specifico e ti mostreremo concretamente <strong>come sono strutturati i nostri registri di modifica</strong> e l'analisi sul profitto netto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md shadow-blue-600/30">
                3
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Controllo giorno zero senza stravolgimenti
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Se decideremo di lavorare insieme: prima la fotografia completa del conto e 30 giorni di osservazione senza stravolgere ciò che già genera risultati.
                </p>
              </div>
            </div>

          </div>

          {/* Prompt: Keep the 6 questions ready */}
          <div className="p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 text-center mb-10">
            <h4 className="text-base font-bold text-white mb-2 flex items-center justify-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-400" />
              Tieni sottomano le 6 domande del video
            </h4>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-4 leading-relaxed">
              Puoi portarle in call con noi: risponderemo con i nostri registri a ciascuna di esse.
            </p>
            <a
              href={`/${language}/lp/outsourcing-campagne-ecommerce#sei-domande`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              Rivedi le 6 domande
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Emergency / Direct contact */}
          <div className="text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <span>Hai un'urgenza particolare?</span>
            <a href="tel:800940213" className="text-blue-400 hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> Numero Verde: 800 940 213
            </a>
            <a href="mailto:info@internetvalore.it" className="text-blue-400 hover:underline">
              info@internetvalore.it
            </a>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 px-4 text-center text-xs text-slate-500 print-hide">
        <div className="max-w-7xl mx-auto">
          <p>© {new Date().getFullYear()} Internet Valore S.r.l. — P.IVA 09055410967</p>
        </div>
      </footer>
    </div>
  );
}
