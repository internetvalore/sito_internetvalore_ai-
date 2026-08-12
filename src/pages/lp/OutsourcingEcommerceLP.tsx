import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Play,
  CheckCircle2,
  XCircle,
  Clock,
  FileSpreadsheet,
  FileCheck,
  Download,
  Printer,
  ShieldCheck,
  ArrowRight,
  Lock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  AlertCircle,
  Eye,
  TrendingUp,
  Sliders,
  CheckSquare,
  Square
} from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';

// UUID v4 Generator for tracking
const generateUUIDv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

interface QuestionItem {
  id: number;
  question: string;
  listenTo: string;
}

const SIX_QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    question: "Quante modifiche avete fatto sul mio conto il mese scorso — e dov'è scritto il perché di ciascuna?",
    listenTo: "Ascolta: esiste un registro cronologico verificabile con motivo scritto, o rispondono con formule vaghe come 'ottimizziamo costantemente'?"
  },
  {
    id: 2,
    question: "Il ritorno che mi mostrate include chi mi cercava già per nome?",
    listenTo: "Ascolta: sanno separare le metriche e il fatturato generato dal traffico brand, o gonfiano il ROAS attribuendosi vendite che avresti fatto comunque?"
  },
  {
    id: 3,
    question: "Quanti dei miei ordini li vede davvero il tracciamento?",
    listenTo: "Ascolta: ti mostrano un tasso reale di discrepanza carrello vs GA4 con data precisa, o liquidano la questione dicendo 'è tutto tracciato'?"
  },
  {
    id: 4,
    question: "Se i dati non bastano per decidere, me lo dite — o decidete lo stesso?",
    listenTo: "Ascolta: hanno mai ammesso 'questo campione è insufficiente, verdetto sospeso', o inventano certezze e modifiche per sembrare attivi?"
  },
  {
    id: 5,
    question: "Prima di spegnere una campagna giovane, sapete dirmi quante conversioni sono ancora in viaggio?",
    listenTo: "Ascolta: conoscono il ritardo fisiologico di maturazione del TUO specifico ecommerce prima di tagliare un test promettente?"
  },
  {
    id: 6,
    question: "Se domani ci lasciamo, cosa resta a me per iscritto?",
    listenTo: "Ascolta: gli account pubblicitari, i pixel e lo storico di ogni decisione restano di tua esclusiva proprietà al 100%?"
  }
];

export default function OutsourcingEcommerceLP() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isIt = language === 'it';
  const meta = metaContent.lpOutsourcingEcommerce ? metaContent.lpOutsourcingEcommerce[language] : {
    title: isIt ? 'Chi guarda i tuoi soldi mentre tu fai impresa? | Internet Valore' : 'Who watches your money while you do business? | Internet Valore',
    description: isIt
      ? 'Orchestriamo in outsourcing le campagne del tuo ecommerce — Google Ads, Meta, Shopping — con un metodo che puoi controllare con i tuoi occhi.'
      : 'We orchestrate your ecommerce advertising campaigns in outsourcing with a method you can verify with your own eyes.'
  };

  // Video State & Deep-link Handling
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoStartSeconds, setVideoStartSeconds] = useState(0);
  const videoIframeRef = useRef<HTMLIFrameElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    shop_url: '',
    ad_spend: '',
    privacyAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Checklist State (Interactive)
  const [checkedQuestions, setCheckedQuestions] = useState<Record<number, boolean>>({});

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll Tracking (75%)
  const scrollTracked = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTracked.current) return;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrolled = window.scrollY / scrollHeight;
      if (scrolled >= 0.75) {
        scrollTracked.current = true;
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'scroll_75',
          event_id: generateUUIDv4(),
          page_path: location.pathname,
          artifact_id: 'lp-outsourcing-ecommerce-2026-08'
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle URL timestamp param if user arrives directly (e.g. ?t=46)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const t = params.get('t');
    if (t) {
      const sec = parseInt(t, 10);
      if (!isNaN(sec) && sec > 0) {
        setVideoStartSeconds(sec);
        setVideoStarted(true);
      }
    }
  }, [location.search]);

  // Video Trigger
  const handlePlayVideo = (startAtSec = 0) => {
    setVideoStartSeconds(startAtSec);
    setVideoStarted(true);

    // Push GA4 Video Start Event
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'video_start',
      event_id: generateUUIDv4(),
      video_id: 'm7g6HcARV1w',
      start_second: startAtSec,
      page_path: location.pathname,
      artifact_id: 'lp-outsourcing-ecommerce-2026-08'
    });

    // Scroll to video smoothly if triggered from habits section
    if (startAtSec > 0 && videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Checklist Toggle
  const toggleQuestionCheck = (id: number) => {
    const newState = !checkedQuestions[id];
    setCheckedQuestions(prev => ({ ...prev, [id]: newState }));

    // Track checklist interaction
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'checklist_check',
      event_id: generateUUIDv4(),
      question_id: id,
      checked: newState,
      page_path: location.pathname
    });
  };

  // Print / PDF action
  const handlePrint = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'pdf_download',
      event_id: generateUUIDv4(),
      action: 'print_dialog',
      page_path: location.pathname,
      artifact_id: 'lp-outsourcing-ecommerce-2026-08'
    });
    window.print();
  };

  // Scroll to Form
  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'cta_click',
      event_id: generateUUIDv4(),
      cta_label: 'Fissa il controllo del giorno zero',
      page_path: location.pathname
    });
  };

  // FAQ Toggle
  const toggleFaq = (index: number) => {
    const nextState = openFaq === index ? null : index;
    setOpenFaq(nextState);
    if (nextState !== null) {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'faq_open',
        event_id: generateUUIDv4(),
        faq_index: index,
        page_path: location.pathname
      });
    }
  };

  // Form Submit (Netlify URL-encoded POST)
  const encodeFormData = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      'form-name': 'lp-outsourcing-ecommerce',
      name: formData.name.trim(),
      email: formData.email.trim(),
      shop_url: formData.shop_url.trim(),
      ad_spend: formData.ad_spend || 'Non specificata',
      'bot-field': ''
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(payload)
      });

      if (!response.ok) {
        throw new Error(`Netlify form submit failed with status ${response.status}`);
      }

      // Successful submit: navigate directly to dedicated conversion page
      navigate(`/${language}/lp/outsourcing-campagne-ecommerce/grazie`);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(
        isIt
          ? 'Si è verificato un errore durante l’invio. Puoi riprovare subito o contattarci direttamente a info@internetvalore.it o al Numero Verde 800 940 213.'
          : 'An error occurred during submission. Please try again or contact us directly at info@internetvalore.it.'
      );
      setIsSubmitting(false);
    }
  };

  // FAQ Content & Schema
  const faqs = [
    {
      q: 'Cambiare gestione non è rischioso per le mie campagne?',
      a: 'La nostra presa in carico è senza strappi: prima di tutto scattiamo la fotografia del giorno zero, e nei primi 30 giorni non stravolgiamo ciò che già funziona. Soprattutto: tutti gli account restano TUOI al 100%, con accesso proprietario e storico intatto.'
    },
    {
      q: 'Devo lasciare la mia agenzia attuale prima di parlarvi?',
      a: 'No, affatto. Ti consigliamo di portare le sei domande alla prossima riunione con la tua agenzia o media buyer: se ti rispondono in modo puntuale, documentato e con registri scritti, ti diremo noi stessi di tenertela stretta. Se invece eludono le risposte, sai esattamente cosa pretendere.'
    },
    {
      q: 'Quanto costa il vostro servizio di outsourcing?',
      a: 'La nostra tariffa di gestione è chiara, trasparente e separata dal budget pubblicitario. Il budget per le ads viene addebitato direttamente dalle piattaforme sul tuo conto aziendale. Nella prima call di 30 minuti ti mostriamo la nostra struttura dei compensi senza sorprese o percentuali opache.'
    },
    {
      q: 'Con quali piattaforme pubblicitarie lavorate?',
      a: 'Siamo specializzati nell’ecosistema ecommerce completo: Google Ads (Search, Performance Max, Shopping/Merchant Center), Meta Ads (Facebook & Instagram Ads), e la relativa infrastruttura di misurazione avanzata su GA4 riconciliata con il carrello (Shopify, WooCommerce, Magento o custom).'
    },
    {
      q: 'Chi prende le decisioni finali: voi o noi?',
      a: 'Ogni nostro intervento o cambio strategico viene documentato a registro con motivazione scritta ed esplicita approvazione prima del rilascio. Tu mantieni il pieno controllo strategico e firmi le decisioni importanti, noi eseguiamo con precisione ingegneristica.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Dynamic SEO Meta & Structured Data */}
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/lp/outsourcing-campagne-ecommerce"
        faq={faqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      {/* VideoObject Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Chi guarda i tuoi soldi mentre tu fai impresa? — Outsourcing Campagne Ecommerce",
            "description": "Come gestiamo in outsourcing le campagne ecommerce (Google Ads, Meta, Shopping) e le 6 domande da fare a chi gestisce i tuoi conti.",
            "thumbnailUrl": [
              "https://img.youtube.com/vi/m7g6HcARV1w/maxresdefault.jpg",
              "https://img.youtube.com/vi/m7g6HcARV1w/hqdefault.jpg"
            ],
            "uploadDate": "2026-08-12T08:00:00+02:00",
            "embedUrl": "https://www.youtube-nocookie.com/embed/m7g6HcARV1w"
          })
        }}
      />

      {/* MINIMAL HEADER: LOGO ONLY (Zero Distractions / No Navigation Menu) */}
      <header className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 print-hide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href={`/${language}`}
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            title="Internet Valore - Home"
          >
            <span className="font-black text-xl tracking-tight text-white flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block animate-pulse"></span>
              Internet<span className="text-blue-400">Valore</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToForm}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-sm shadow-blue-500/20 active:scale-95"
            >
              Fissa il controllo del giorno zero
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION — VIDEO IN TESTA */}
        <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-800/80 print-hide">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Headline, Subhead, CTAs */}
              <div className="lg:col-span-6 flex flex-col justify-center text-left">
                {/* Badge Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-blue-400 mb-6 w-fit shadow-inner">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Metodo Verificabile · Gestione Campagne Ecommerce</span>
                </div>

                {/* H1 - Exact Match */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
                  Chi guarda i tuoi soldi mentre tu fai impresa?
                </h1>

                {/* Subhead - Exact Match */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                  Orchestriamo in outsourcing le campagne del tuo ecommerce — Google Ads, Meta, Shopping — con un metodo che puoi controllare con i tuoi occhi. Nel video: come lavoriamo, e le sei domande da fare a chi gestisce i tuoi conti oggi.
                </p>

                {/* CTAs Group */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-3">
                  <button
                    onClick={scrollToForm}
                    id="hero-primary-cta"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all duration-150 shadow-lg shadow-blue-600/30 active:scale-[0.98]"
                  >
                    Fissa il controllo del giorno zero
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handlePrint}
                    id="hero-secondary-ghost-cta"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all duration-150 hover:text-white active:scale-[0.98]"
                  >
                    <Download className="w-4 h-4 text-blue-400" />
                    Scarica le 6 domande (PDF)
                  </button>
                </div>

                {/* Micro-copy */}
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>30 minuti, esempi reali anonimizzati, nessun impegno.</span>
                </p>
              </div>

              {/* Right Column: Lite-YouTube Embed */}
              <div className="lg:col-span-6 w-full" ref={videoSectionRef}>
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-black/80 aspect-video group">
                  {!videoStarted ? (
                    <div
                      onClick={() => handlePlayVideo(0)}
                      className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
                      title="Riproduci il video"
                    >
                      {/* Poster Image with fetchpriority=high */}
                      <img
                        src="https://img.youtube.com/vi/m7g6HcARV1w/maxresdefault.jpg"
                        alt="Chi guarda i tuoi soldi mentre tu fai impresa? — Copertina Video"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="eager"
                      />

                      {/* Dark gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                      {/* Big Play Button Badge */}
                      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 group-hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-950/60 transition-all duration-300 group-hover:scale-110 border-2 border-white/20">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                      </div>

                      {/* Video Top Bar Info */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-semibold text-slate-200 border border-white/10">
                          Video Ufficiale · 12/08/2026
                        </span>
                        <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-medium text-slate-300 border border-white/10 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-blue-400" />
                          3 min
                        </span>
                      </div>

                      {/* Video Bottom Title */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                        <p className="text-sm sm:text-base font-bold text-white drop-shadow-md">
                          Chi guarda i tuoi soldi mentre tu fai impresa?
                        </p>
                        <p className="text-xs text-slate-300">
                          Clicca per guardare il metodo e le 6 domande
                        </p>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      ref={videoIframeRef}
                      className="w-full h-full border-0"
                      src={`https://www.youtube-nocookie.com/embed/m7g6HcARV1w?autoplay=1&rel=0&start=${videoStartSeconds}`}
                      title="Chi guarda i tuoi soldi mentre tu fai impresa?"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )}
                </div>

                {/* Video Chapters quick jump bar */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Salta ai capitoli:</span>
                  <button
                    onClick={() => handlePlayVideo(46)}
                    className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
                  >
                    0:46 Il controllo iniziale
                  </button>
                  <button
                    onClick={() => handlePlayVideo(77)}
                    className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
                  >
                    1:17 Soldi veri vs slide
                  </button>
                  <button
                    onClick={() => handlePlayVideo(103)}
                    className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
                  >
                    1:43 Ogni mossa firmata
                  </button>
                  <button
                    onClick={() => handlePlayVideo(131)}
                    className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
                  >
                    2:11 Verdetto sospeso
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* S2 — IL MOMENTO CHE CONOSCI (PAIN EMOTIVO - MAI FEATURE QUI) */}
        <section className="py-14 sm:py-20 bg-slate-900/60 border-b border-slate-800 print-hide">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
              <AlertCircle className="w-6 h-6" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-snug sm:leading-relaxed mb-6">
              «Una piattaforma dice una cosa. L'altra ne dice un'altra. Il report racconta cosa è successo, mai perché — e intanto il budget corre. Non devi diventare un tecnico: devi poter verificare.»
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
          </div>
        </section>

        {/* S3 — PER CHI È / PER CHI NON È (QUALIFICAZIONE ONESTA = CPL PIÙ PULITO) */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800 print-hide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Una qualificazione onesta e trasparente
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Non siamo l'agenzia per tutti. Lavoriamo solo dove possiamo portare un controllo matematico reale e difendibile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card: È per te se */}
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">È per te se:</h3>
              </div>

              <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Hai un ecommerce attivo</strong> che investe budget in campagne ogni singolo mese.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Vuoi capire il *perché* dei numeri</strong>, e non accontentarti solo di slide preconfezionate sul *quali*.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span><strong>Vuoi decisioni firmate da te</strong> con motivazioni scritte, mantenendo la proprietà piena del tuo conto.</span>
                </li>
              </ul>
            </div>

            {/* Card: Non è per te se */}
            <div className="bg-slate-900/90 border border-red-500/30 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Non è per te se:</h3>
              </div>

              <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong>Cerchi «risultati garantiti»</strong> (nessun professionista onesto può prometterli senza conoscere il conto).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong>Non vendi online</strong> con un carrello o un catalogo e-commerce attivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong>Vuoi delegare alla cieca</strong> anche le decisioni finali di business (quelle restano sempre sotto la tua guida).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* S4 — LE QUATTRO ABITUDINI (HOW_IT_WORKS, ECO DEL VIDEO — RIMANDA AI MINUTAGGI) */}
        <section className="py-16 sm:py-24 bg-slate-900/40 border-b border-slate-800 print-hide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Il Metodo Operativo
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Le quattro abitudini con cui gestiamo i tuoi conti
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Non trucchi segreti, ma una disciplina rigorosa che puoi ascoltare nel video e verificare ogni giorno sui tuoi registri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Abitudine 1 */}
              <div className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">Abitudine 01</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Prima gli occhi, poi le gambe</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Su un conto nuovo prima si controlla, non si spende. Nessun euro viene allocato prima di aver verificato tracciamenti, carrello e sprechi latenti.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(46)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors pt-3 border-t border-slate-800"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 0:46
                </button>
              </div>

              {/* Abitudine 2 */}
              <div className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Abitudine 02</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Soldi veri, non slide</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Il volume non è profitto; chi cercava già il tuo brand per nome non è merito esclusivo della campagna. Misuriamo l'incremento netto reale.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(77)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-3 border-t border-slate-800"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 1:17
                </button>
              </div>

              {/* Abitudine 3 */}
              <div className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">Abitudine 03</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Ogni mossa ha una firma</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Motivo scritto, tua approvazione esplicita e ri-misura a registro dopo il tempo necessario. Anche la decisione consapevole di non toccare nulla.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(103)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-3 border-t border-slate-800"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 1:43
                </button>
              </div>

              {/* Abitudine 4 */}
              <div className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">Abitudine 04</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2">Se i dati mancano, lo diciamo</h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    Verdetto sospeso anziché certezza inventata. Se un test ha pochi ordini o la finestra di maturazione non è conclusa, non prendiamo decisioni affrettate.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(131)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors pt-3 border-t border-slate-800"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 2:11
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* S5 — LE SEI DOMANDE (IL CUORE DEL COMPLEMENTO: CHECKLIST INTERATTIVA + PRINT/PDF) */}
        <section id="sei-domande" className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800 print-container">
          
          <div className="text-center max-w-3xl mx-auto mb-12 print-hide">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">
              <CheckSquare className="w-4 h-4" />
              Strumento di Controllo Pratico
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Le sei domande da fare a chi gestisce i tuoi conti
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Usa questa checklist interattiva per valutare chi gestisce le tue campagne oggi — o portala direttamente nella nostra prima call.
            </p>
          </div>

          {/* Interactive Checklist Cards */}
          <div className="space-y-4 mb-8">
            {SIX_QUESTIONS.map((q) => {
              const isChecked = !!checkedQuestions[q.id];
              return (
                <div
                  key={q.id}
                  onClick={() => toggleQuestionCheck(q.id)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer text-left page-break-inside-avoid ${
                    isChecked
                      ? 'bg-blue-950/40 border-blue-500/50 shadow-md shadow-blue-950/40'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      aria-label={`Segna domanda ${q.id} come fatta`}
                      className="mt-1 shrink-0 text-blue-400 focus:outline-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-6 h-6 text-blue-400 fill-blue-950" />
                      ) : (
                        <Square className="w-6 h-6 text-slate-500 hover:text-slate-400" />
                      )}
                    </button>

                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                          Domanda 0{q.id}
                        </span>
                        {isChecked && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                            Verificata
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                        {q.question}
                      </h3>

                      <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <span className="font-bold text-amber-400 shrink-0">🎯 Cosa ascoltare:</span>
                        <span className="leading-relaxed">{q.listenTo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Bar: Print & Download Buttons (non-gated) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 mb-8 print-hide">
            <div className="text-left">
              <h4 className="font-bold text-white text-sm sm:text-base">Vuoi stamparle o salvarle in PDF?</h4>
              <p className="text-xs text-slate-400">È un documento A4 pulito, brandizzato e gratuito: nessun modulo o email richiesta.</p>
            </div>

            <button
              onClick={handlePrint}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-600 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4 text-blue-400" />
              Stampa / Scarica il PDF (A4)
            </button>
          </div>

          {/* S5 Closing Statement - Exact Match */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-blue-950/40 border border-blue-500/30 text-center">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              «Risposte precise e documentate? Hai un buon partner: tienitelo stretto. Un giro di parole? Adesso sai cosa pretendere. <strong className="text-white">E sì: queste domande valgono anche per noi.</strong>»
            </p>
          </div>
        </section>

        {/* S6 — COSA SUCCEDE QUANDO CI SCRIVI (TOGLIE LA PAURA DEL CLICK) */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800 print-hide">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Trasparenza dall'inizio
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Cosa succede quando ci scrivi
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Nessun venditore insistente, nessun preventivo al buio. Ecco i tre passi esatti:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-lg shadow-blue-600/30">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Risposta entro 1 giorno</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rispondiamo entro <strong>1 giorno lavorativo</strong> con due orari disponibili per fissare una call di approfondimento di 30 minuti.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-lg shadow-blue-600/30">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Call con esempi reali</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                In call guardiamo insieme il tuo caso specifico e ti mostriamo <strong>come sono fatti i nostri registri e report</strong> (esempi anonimizzati reali).
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-7 relative">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-lg shadow-blue-600/30">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Controllo del giorno zero</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Se decidiamo di collaborare: <strong>fotografia del giorno zero</strong> del conto e 30 giorni di osservazione senza stravolgere ciò che già funziona.
              </p>
            </div>

          </div>
        </section>

        {/* S7 — FIDUCIA (SOLO FATTI VERIFICATI) */}
        <section className="py-16 sm:py-20 bg-slate-900/40 border-b border-slate-800 print-hide">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Fiducia costruita su fatti verificabili
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Niente numeri gonfiati o percentuali inventate. Quello che diciamo è dimostrabile:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-blue-400 mb-3">
                  <Play className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white mb-2">Metodo pubblico a viso aperto</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  Raccontiamo le nostre metodologie, i controlli e il codice pubblicamente sul nostro canale YouTube.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=m7g6HcARV1w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
                >
                  Guarda il canale YouTube <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-emerald-400 mb-3">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white mb-2">Proprietà 100% dei conti</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Gli account pubblicitari, i pixel e i dati restano intestati a te. Nessun vincolo capestro o ostaggio di credenziali.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="text-cyan-400 mb-3">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white mb-2">Misura sul dato reale</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Riconciliamo i tracciamenti con il carrello (Shopify, WooCommerce, Magento) per ottimizzare sul profitto effettivo, non sul ROAS di facciata.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* S8 — NOTA DEL TITOLARE (FOUNDER NOTE, FOTO VERA) */}
        <section className="py-16 sm:py-20 border-b border-slate-800 print-hide">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 relative">
                <img
                  src="https://leprimescelte.com/wp-content/uploads/2025/02/AFimmagine.jpg"
                  alt="Andrea Falzin - Founder & CEO di Internet Valore"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-blue-500/40 shadow-lg shadow-blue-500/10"
                />
                <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-blue-600 text-[10px] font-bold uppercase rounded-md text-white">
                  Founder
                </span>
              </div>

              <div className="text-left">
                <div className="mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Andrea Falzin</h3>
                  <p className="text-xs font-semibold text-blue-400">Founder & CEO, Internet Valore</p>
                </div>

                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-4">
                  «Sono Andrea Falzin. Nel video parla il mio avatar digitale — è dichiarato, perché la trasparenza non è un optional nemmeno lì. Qui rispondo io: se porti le sei domande alla tua agenzia e le risposte ti convincono, te lo dirò. Se non ti convincono, sai dove trovarmi.»
                </p>

                <div className="flex items-center gap-4 text-xs font-semibold">
                  <a
                    href="https://www.linkedin.com/in/falzin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    Profilo LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={`/${language}/about`}
                    className="text-slate-400 hover:text-slate-200 inline-flex items-center gap-1"
                  >
                    Chi Siamo <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S9 — FAQ (OBIEZIONI VERE, RISPOSTE ONESTE) */}
        <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-800 print-hide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Domande Frequenti (FAQ)
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Risposte chiare alle obiezioni più comuni sull'outsourcing delle campagne ecommerce.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-white text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <span className="text-blue-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/80 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* S10 — CTA FINALE + FORM (NETLIFY SPA POST PATTERN) */}
        <section id="contact-form-section" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 print-hide">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-3xl pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                Offerta Giorno Zero
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Fissa il controllo del giorno zero
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Compila il modulo con i dati del tuo ecommerce. Rispondiamo entro 1 giorno lavorativo con due orari per una call di 30 minuti con esempi reali anonimizzati.
              </p>
            </div>

            {/* Error Message Notification */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/80 border border-red-500 text-red-200 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Invio non riuscito</p>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleFormSubmit}
              className="space-y-5"
              name="lp-outsourcing-ecommerce"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="lp-outsourcing-ecommerce" />
              <input type="hidden" name="bot-field" />
              
              {/* Field: Name */}
              <div>
                <label htmlFor="form-name" className="block text-sm font-semibold text-slate-200 mb-1.5 text-left">
                  Nome e Cognome <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  placeholder="Es. Mario Rossi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Field: Email */}
              <div>
                <label htmlFor="form-email" className="block text-sm font-semibold text-slate-200 mb-1.5 text-left">
                  Email aziendale <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  placeholder="Es. mario@tuonegozio.it"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Field: Shop URL */}
              <div>
                <label htmlFor="form-shop-url" className="block text-sm font-semibold text-slate-200 mb-1.5 text-left">
                  URL del tuo negozio ecommerce <span className="text-blue-400">*</span>
                </label>
                <input
                  type="url"
                  id="form-shop-url"
                  name="shop_url"
                  required
                  placeholder="Es. https://www.tuonegozio.it"
                  value={formData.shop_url}
                  onChange={(e) => setFormData({ ...formData, shop_url: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Field: Ad Spend (Optional Dropdown) */}
              <div>
                <label htmlFor="form-ad-spend" className="block text-sm font-semibold text-slate-200 mb-1.5 text-left">
                  Spesa pubblicitaria mensile approssimativa <span className="text-slate-400 text-xs font-normal">(facoltativo)</span>
                </label>
                <select
                  id="form-ad-spend"
                  name="ad_spend"
                  value={formData.ad_spend}
                  onChange={(e) => setFormData({ ...formData, ad_spend: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="">Seleziona fascia di spesa...</option>
                  <option value="< 1.000 €/mese">&lt; 1.000 €/mese</option>
                  <option value="1.000 € – 5.000 €/mese">1.000 € – 5.000 €/mese</option>
                  <option value="5.000 € – 20.000 €/mese">5.000 € – 20.000 €/mese</option>
                  <option value="> 20.000 €/mese">&gt; 20.000 €/mese</option>
                </select>
              </div>

              {/* Privacy Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-left">
                  <input
                    type="checkbox"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded bg-slate-950 border-slate-700 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-400 leading-relaxed">
                    Ho letto e accetto l'<a href={`/${language}/about`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">informativa sulla privacy</a>. I tuoi dati sono trattati con riservatezza e utilizzati unicamente per ricontattarti in merito alla tua richiesta.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.privacyAccepted}
                className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-xl ${
                  isSubmitting || !formData.privacyAccepted
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30 hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Invio in corso...</span>
                  </>
                ) : (
                  <>
                    <span>Fissa il controllo del giorno zero</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  Nessun impegno · 30 minuti di call · Esempi reali anonimizzati
                </p>
              </div>

            </form>
          </div>
        </section>
      </main>

      {/* PRINT-ONLY CLEAN A4 DOCUMENT VIEW (RENDERED ONLY WHEN PRINTING) */}
      <div className="hidden print-only print-container text-black bg-white p-8">
        <div className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-2xl font-black mb-1">INTERNET VALORE — LE 6 DOMANDE DA FARE A CHI GESTISCE LE TUE CAMPAGNE</h1>
          <p className="text-sm text-gray-700">
            Documento di controllo per ecommerce · Complemento al video di Andrea Falzin
          </p>
        </div>

        <div className="space-y-6">
          {SIX_QUESTIONS.map((q) => (
            <div key={q.id} className="border-b border-gray-300 pb-4 page-break-inside-avoid">
              <div className="flex items-baseline gap-3">
                <span className="font-bold text-base">[{checkedQuestions[q.id] ? 'X' : '  '}] Domanda {q.id}:</span>
                <p className="font-bold text-base text-gray-900">{q.question}</p>
              </div>
              <div className="mt-2 ml-8 text-sm text-gray-800 bg-gray-100 p-2 rounded">
                <strong>Cosa ascoltare nella risposta:</strong> {q.listenTo}
              </div>
              <div className="mt-2 ml-8 text-xs text-gray-500">
                Note risposta agenzia: ____________________________________________________________________
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t-2 border-black text-xs text-gray-600 flex justify-between">
          <span>Internet Valore S.r.l. — Via G.B. Pergolesi 29, 20124 Milano</span>
          <span>info@internetvalore.it — Numero Verde: 800 940 213</span>
        </div>
      </div>

      {/* MINIMAL FOOTER FOR ISOLATED LANDING PAGE */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 px-4 text-center text-xs text-slate-400 print-hide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Internet Valore S.r.l. — P.IVA 09055410967 — Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href={`/${language}/about`} className="hover:text-slate-300">Privacy & Note Legali</a>
            <a href="tel:800940213" className="text-blue-400 hover:text-blue-300">Numero Verde: 800 940 213</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
