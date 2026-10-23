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
    <div className="min-h-screen font-sans antialiased">
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
      <header className="iv-nav print-hide">
        <div className="shell h-16 flex items-center justify-between">
          <a
            href={`/${language}`}
            className="flex items-center gap-2"
            title="Internet Valore - Home"
          >
            <span className="font-semibold text-xl tracking-tight flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-600 inline-block"></span>
              Internet<span className="text-accent-600">Valore</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToForm}
              className="btn btn-sm hidden sm:inline-flex items-center gap-2"
            >
              Fissa il controllo del giorno zero
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION — VIDEO IN TESTA */}
        <section className="hero-premium relative py-16 lg:py-24 border-b border-line print-hide">
          {/* Subtle Ambient Glow */}

          <div className="shell">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Headline, Subhead, CTAs */}
              <div className="lg:col-span-6 flex flex-col justify-center text-left">
                {/* Badge Tag */}
                <div className="eyebrow inline-flex items-center gap-2 mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Metodo Verificabile · Gestione Campagne Ecommerce</span>
                </div>

                {/* H1 - Exact Match */}
                <h1 className="title-xl hero-title mb-6">
                  Chi guarda i tuoi soldi mentre tu fai impresa?
                </h1>

                {/* Subhead - Exact Match */}
                <p className="lede measure mb-8">
                  Orchestriamo in outsourcing le campagne del tuo ecommerce — Google Ads, Meta, Shopping — con un metodo che puoi controllare con i tuoi occhi. Nel video: come lavoriamo, e le sei domande da fare a chi gestisce i tuoi conti oggi.
                </p>

                {/* CTAs Group */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3">
                  <button
                    onClick={scrollToForm}
                    id="hero-primary-cta"
                    className="btn btn-primary"
                  >
                    Fissa il controllo del giorno zero
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handlePrint}
                    id="hero-secondary-ghost-cta"
                    className="btn btn-ghost"
                  >
                    <Download className="w-4 h-4" />
                    Scarica le 6 domande (PDF)
                  </button>
                </div>

                {/* Micro-copy */}
                <p className="text-xs text-ink-600 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-ink-500 shrink-0" />
                  <span>30 minuti, esempi reali anonimizzati, nessun impegno.</span>
                </p>
              </div>

              {/* Right Column: Lite-YouTube Embed */}
              <div className="lg:col-span-6 w-full" ref={videoSectionRef}>
                <div className="media aspect-video group relative">
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
                        className="w-full h-full object-cover"
                        loading="eager"
                      />

                      {/* Dark gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-black/25" />

                      {/* Big Play Button Badge */}
                      <div className="relative z-10 w-14 h-14 rounded-full bg-accent-600 text-white flex items-center justify-center">
                        <Play className="w-5 h-5 fill-white" />
                      </div>

                      {/* Video Top Bar Info */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-medium">
                          Video Ufficiale · 12/08/2026
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          3 min
                        </span>
                      </div>

                      {/* Video Bottom Title */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                        <p className="text-sm font-semibold text-white">
                          Chi guarda i tuoi soldi mentre tu fai impresa?
                        </p>
                        <p className="text-xs text-white/80">
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
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-600">
                  <span className="font-medium text-ink-900">Salta ai capitoli:</span>
                  <button
                    onClick={() => handlePlayVideo(46)}
                    className="chip"
                  >
                    0:46 Il controllo iniziale
                  </button>
                  <button
                    onClick={() => handlePlayVideo(77)}
                    className="chip"
                  >
                    1:17 Soldi veri vs slide
                  </button>
                  <button
                    onClick={() => handlePlayVideo(103)}
                    className="chip"
                  >
                    1:43 Ogni mossa firmata
                  </button>
                  <button
                    onClick={() => handlePlayVideo(131)}
                    className="chip"
                  >
                    2:11 Verdetto sospeso
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* S2 — IL MOMENTO CHE CONOSCI (PAIN EMOTIVO - MAI FEATURE QUI) */}
        <section className="section section-quiet">
          <div className="shell text-center">
            <div className="icon-tile mx-auto mb-6">
              <AlertCircle className="w-5 h-5" />
            </div>

            <h2 className="title-xl mb-6">
              «Una piattaforma dice una cosa. L'altra ne dice un'altra. Il report racconta cosa è successo, mai perché — e intanto il budget corre. Non devi diventare un tecnico: devi poter verificare.»
            </h2>

            <div className="w-12 h-px bg-line mx-auto rounded-full" />
          </div>
        </section>

        {/* S3 — PER CHI È / PER CHI NON È (QUALIFICAZIONE ONESTA = CPL PIÙ PULITO) */}
        <section className="shell section border-t border-line">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="title-xl mb-4">
              Una qualificazione onesta e trasparente
            </h2>
            <p className="text-sm text-ink-600">
              Non siamo l'agenzia per tutti. Lavoriamo solo dove possiamo portare un controllo matematico reale e difendibile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card: È per te se */}
            <div className="card card-hover card-quiet relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-tile shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-[1.05rem] font-semibold">È per te se:</h3>
              </div>

              <ul className="space-y-4 text-[0.95rem] text-ink-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" />
                  <span><strong>Hai un ecommerce attivo</strong> che investe budget in campagne ogni singolo mese.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" />
                  <span><strong>Vuoi capire il *perché* dei numeri</strong>, e non accontentarti solo di slide preconfezionate sul *quali*.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-600 mt-2 shrink-0" />
                  <span><strong>Vuoi decisioni firmate da te</strong> con motivazioni scritte, mantenendo la proprietà piena del tuo conto.</span>
                </li>
              </ul>
            </div>

            {/* Card: Non è per te se */}
            <div className="card card-hover card-quiet relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-tile shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <h3 className="text-[1.05rem] font-semibold">Non è per te se:</h3>
              </div>

              <ul className="space-y-4 text-[0.95rem] text-ink-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 mt-2 shrink-0" />
                  <span><strong>Cerchi «risultati garantiti»</strong> (nessun professionista onesto può prometterli senza conoscere il conto).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 mt-2 shrink-0" />
                  <span><strong>Non vendi online</strong> con un carrello o un catalogo e-commerce attivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-400 mt-2 shrink-0" />
                  <span><strong>Vuoi delegare alla cieca</strong> anche le decisioni finali di business (quelle restano sempre sotto la tua guida).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* S4 — LE QUATTRO ABITUDINI (HOW_IT_WORKS, ECO DEL VIDEO — RIMANDA AI MINUTAGGI) */}
        <section className="section section-quiet">
          <div className="shell">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="eyebrow inline-flex items-center gap-2 mb-3">
                Il Metodo Operativo
              </div>
              <h2 className="title-xl mb-4">
                Le quattro abitudini con cui gestiamo i tuoi conti
              </h2>
              <p className="text-sm text-ink-600">
                Non trucchi segreti, ma una disciplina rigorosa che puoi ascoltare nel video e verificare ogni giorno sui tuoi registri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Abitudine 1 */}
              <div className="card card-hover flex flex-col justify-between group">
                <div>
                  <div className="icon-tile mb-4">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="eyebrow">Abitudine 01</span>
                  <h3 className="text-[1.05rem] font-semibold mt-1 mb-2">Prima gli occhi, poi le gambe</h3>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    Su un conto nuovo prima si controlla, non si spende. Nessun euro viene allocato prima di aver verificato tracciamenti, carrello e sprechi latenti.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(46)}
                  className="hairline inline-flex items-center gap-2 text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 0:46
                </button>
              </div>

              {/* Abitudine 2 */}
              <div className="card card-hover flex flex-col justify-between group">
                <div>
                  <div className="icon-tile mb-4">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="eyebrow">Abitudine 02</span>
                  <h3 className="text-[1.05rem] font-semibold mt-1 mb-2">Soldi veri, non slide</h3>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    Il volume non è profitto; chi cercava già il tuo brand per nome non è merito esclusivo della campagna. Misuriamo l'incremento netto reale.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(77)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 1:17
                </button>
              </div>

              {/* Abitudine 3 */}
              <div className="card card-hover flex flex-col justify-between group">
                <div>
                  <div className="icon-tile mb-4">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <span className="eyebrow">Abitudine 03</span>
                  <h3 className="text-[1.05rem] font-semibold mt-1 mb-2">Ogni mossa ha una firma</h3>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    Motivo scritto, tua approvazione esplicita e ri-misura a registro dopo il tempo necessario. Anche la decisione consapevole di non toccare nulla.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(103)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 1:43
                </button>
              </div>

              {/* Abitudine 4 */}
              <div className="card card-hover flex flex-col justify-between group">
                <div>
                  <div className="icon-tile mb-4">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <span className="eyebrow">Abitudine 04</span>
                  <h3 className="text-[1.05rem] font-semibold mt-1 mb-2">Se i dati mancano, lo diciamo</h3>
                  <p className="text-sm text-ink-600 leading-relaxed mb-4">
                    Verdetto sospeso anziché certezza inventata. Se un test ha pochi ordini o la finestra di maturazione non è conclusa, non prendiamo decisioni affrettate.
                  </p>
                </div>
                <button
                  onClick={() => handlePlayVideo(131)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Guarda nel video a 2:11
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* S5 — LE SEI DOMANDE (IL CUORE DEL COMPLEMENTO: CHECKLIST INTERATTIVA + PRINT/PDF) */}
        <section id="sei-domande" className="shell section print-container border-t border-line">
          
          <div className="text-center max-w-3xl mx-auto mb-12 print-hide">
            <div className="eyebrow inline-flex items-center gap-2 mb-3">
              <CheckSquare className="w-4 h-4" />
              Strumento di Controllo Pratico
            </div>
            <h2 className="title-xl mb-4">
              Le sei domande da fare a chi gestisce i tuoi conti
            </h2>
            <p className="text-sm text-ink-600 leading-relaxed">
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
                  className={`card card-quiet cursor-pointer text-left page-break-inside-avoid transition-colors ${
                    isChecked
                      ? 'card card-quiet'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      type="button"
                      aria-label={`Segna domanda ${q.id} come fatta`}
                      className="mt-1 shrink-0 focus:outline-none"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-accent-600" />
                      ) : (
                        <Square className="w-5 h-5 text-ink-400 hover:text-ink-600" />
                      )}
                    </button>

                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="eyebrow">
                          Domanda 0{q.id}
                        </span>
                        {isChecked && (
                          <span className="chip">
                            Verificata
                          </span>
                        )}
                      </div>

                      <h3 className="text-[1.05rem] font-semibold mb-2 leading-snug">
                        {q.question}
                      </h3>

                      <div className="p-3 rounded-xl bg-paper border border-line text-sm text-ink-600 flex items-start gap-2.5">
                        <span className="font-semibold text-ink-900 shrink-0">🎯 Cosa ascoltare:</span>
                        <span className="leading-relaxed">{q.listenTo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Bar: Print & Download Buttons (non-gated) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 card card-quiet mb-8 print-hide">
            <div className="text-left">
              <h4 className="text-[0.95rem] font-semibold text-ink-900">Vuoi stamparle o salvarle in PDF?</h4>
              <p className="text-xs text-ink-600">È un documento A4 pulito, brandizzato e gratuito: nessun modulo o email richiesta.</p>
            </div>

            <button
              onClick={handlePrint}
              className="btn btn-sm btn-ghost w-full sm:w-auto"
            >
              <Printer className="w-4 h-4" />
              Stampa / Scarica il PDF (A4)
            </button>
          </div>

          {/* S5 Closing Statement - Exact Match */}
          <div className="card card-quiet text-center">
            <p className="text-sm text-ink-600 leading-relaxed font-medium">
              «Risposte precise e documentate? Hai un buon partner: tienitelo stretto. Un giro di parole? Adesso sai cosa pretendere. <strong className="text-ink-900">E sì: queste domande valgono anche per noi.</strong>»
            </p>
          </div>
        </section>

        {/* S6 — COSA SUCCEDE QUANDO CI SCRIVI (TOGLIE LA PAURA DEL CLICK) */}
        <section className="shell section border-t border-line">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow inline-flex items-center gap-2 mb-3">
              Trasparenza dall'inizio
            </div>
            <h2 className="title-xl mb-4">
              Cosa succede quando ci scrivi
            </h2>
            <p className="text-sm text-ink-600">
              Nessun venditore insistente, nessun preventivo al buio. Ecco i tre passi esatti:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="card card-hover card-quiet relative">
              <div className="icon-tile mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">Risposta entro 1 giorno</h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                Rispondiamo entro <strong>1 giorno lavorativo</strong> con due orari disponibili per fissare una call di approfondimento di 30 minuti.
              </p>
            </div>

            {/* Step 2 */}
            <div className="card card-hover card-quiet relative">
              <div className="icon-tile mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">Call con esempi reali</h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                In call guardiamo insieme il tuo caso specifico e ti mostriamo <strong>come sono fatti i nostri registri e report</strong> (esempi anonimizzati reali).
              </p>
            </div>

            {/* Step 3 */}
            <div className="card card-hover card-quiet relative">
              <div className="icon-tile mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-ink-900 mb-2">Controllo del giorno zero</h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                Se decidiamo di collaborare: <strong>fotografia del giorno zero</strong> del conto e 30 giorni di osservazione senza stravolgere ciò che già funziona.
              </p>
            </div>

          </div>
        </section>

        {/* S7 — FIDUCIA (SOLO FATTI VERIFICATI) */}
        <section className="section section-quiet">
          <div className="shell">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="title-xl mb-3">
                Fiducia costruita su fatti verificabili
              </h2>
              <p className="text-sm text-ink-600">
                Niente numeri gonfiati o percentuali inventate. Quello che diciamo è dimostrabile:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card card-hover card-quiet">
                <div className="icon-tile mb-4">
                  <Play className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-ink-900 mb-2">Metodo pubblico a viso aperto</h3>
                <p className="text-sm text-ink-600 leading-relaxed mb-3">
                  Raccontiamo le nostre metodologie, i controlli e il codice pubblicamente sul nostro canale YouTube.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=m7g6HcARV1w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 hover:text-accent-700 underline"
                >
                  Guarda il canale YouTube <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="card card-hover card-quiet">
                <div className="icon-tile mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-ink-900 mb-2">Proprietà 100% dei conti</h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Gli account pubblicitari, i pixel e i dati restano intestati a te. Nessun vincolo capestro o ostaggio di credenziali.
                </p>
              </div>

              <div className="card card-hover card-quiet">
                <div className="icon-tile mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-ink-900 mb-2">Misura sul dato reale</h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  Riconciliamo i tracciamenti con il carrello (Shopify, WooCommerce, Magento) per ottimizzare sul profitto effettivo, non sul ROAS di facciata.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* S8 — NOTA DEL TITOLARE (FOUNDER NOTE, FOTO VERA) */}
        <section className="shell section border-t border-line">
          <div className="shell">
            <div className="card flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 relative">
                <img
                  src="https://leprimescelte.com/wp-content/uploads/2025/02/AFimmagine.jpg"
                  alt="Andrea Falzin - Founder & CEO di Internet Valore"
                  className="media w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
                />
                <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-accent-600 text-[10px] font-medium uppercase text-white">
                  Founder
                </span>
              </div>

              <div className="text-left">
                <div className="mb-2">
                  <h3 className="text-[1.05rem] font-semibold">Andrea Falzin</h3>
                  <p className="text-xs font-medium text-accent-600">Founder & CEO, Internet Valore</p>
                </div>

                <p className="text-sm italic leading-relaxed mb-4">
                  «Sono Andrea Falzin. Nel video parla il mio avatar digitale — è dichiarato, perché la trasparenza non è un optional nemmeno lì. Qui rispondo io: se porti le sei domande alla tua agenzia e le risposte ti convincono, te lo dirò. Se non ti convincono, sai dove trovarmi.»
                </p>

                <div className="flex items-center gap-4 text-xs font-medium">
                  <a
                    href="https://www.linkedin.com/in/falzin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-600 hover:text-accent-700 inline-flex items-center gap-1"
                  >
                    Profilo LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={`/${language}/about`}
                    className="text-ink-600 hover:text-ink-900 inline-flex items-center gap-1"
                  >
                    Chi Siamo <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S9 — FAQ (OBIEZIONI VERE, RISPOSTE ONESTE) */}
        <section className="shell section border-t border-line">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="title-xl mb-3">
              Domande Frequenti (FAQ)
            </h2>
            <p className="text-sm text-ink-600">
              Risposte chiare alle obiezioni più comuni sull'outsourcing delle campagne ecommerce.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="card card-hover overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-semibold">
                      {faq.q}
                    </span>
                    <span className="text-accent-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-sm text-ink-600 leading-relaxed border-t border-line pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* S10 — CTA FINALE + FORM (NETLIFY SPA POST PATTERN) */}
        <section id="contact-form-section" className="shell section">
          <div className="card relative">
            
            {/* Background decorative glow */}

            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="eyebrow inline-block mb-2">
                Offerta Giorno Zero
              </span>
              <h2 className="title-xl mb-4">
                Fissa il controllo del giorno zero
              </h2>
              <p className="text-sm text-ink-600 leading-relaxed">
                Compila il modulo con i dati del tuo ecommerce. Rispondiamo entro 1 giorno lavorativo con due orari per una call di 30 minuti con esempi reali anonimizzati.
              </p>
            </div>

            {/* Error Message Notification */}
            {errorMessage && (
              <div className="card card-quiet flex items-start gap-3 mb-6">
                <AlertCircle className="w-4 h-4 text-ink-500 shrink-0 mt-0.5" />
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
                <label htmlFor="form-name" className="block text-sm font-semibold text-ink-900 mb-1.5 text-left">
                  Nome e Cognome <span className="text-accent-600">*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  required
                  placeholder="Es. Mario Rossi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 text-sm"
                />
              </div>

              {/* Field: Email */}
              <div>
                <label htmlFor="form-email" className="block text-sm font-semibold text-ink-900 mb-1.5 text-left">
                  Email aziendale <span className="text-accent-600">*</span>
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  required
                  placeholder="Es. mario@tuonegozio.it"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 text-sm"
                />
              </div>

              {/* Field: Shop URL */}
              <div>
                <label htmlFor="form-shop-url" className="block text-sm font-semibold text-ink-900 mb-1.5 text-left">
                  URL del tuo negozio ecommerce <span className="text-accent-600">*</span>
                </label>
                <input
                  type="url"
                  id="form-shop-url"
                  name="shop_url"
                  required
                  placeholder="Es. https://www.tuonegozio.it"
                  value={formData.shop_url}
                  onChange={(e) => setFormData({ ...formData, shop_url: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink-900 placeholder-ink-500 focus:outline-none focus:ring-1 focus:ring-accent-600 text-sm"
                />
              </div>

              {/* Field: Ad Spend (Optional Dropdown) */}
              <div>
                <label htmlFor="form-ad-spend" className="block text-sm font-semibold text-ink-900 mb-1.5 text-left">
                  Spesa pubblicitaria mensile approssimativa <span className="text-ink-500 text-xs font-normal">(facoltativo)</span>
                </label>
                <select
                  id="form-ad-spend"
                  name="ad_spend"
                  value={formData.ad_spend}
                  onChange={(e) => setFormData({ ...formData, ad_spend: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-line bg-white text-ink-900 focus:outline-none focus:ring-1 focus:ring-accent-600 text-sm"
                >
                  <option value="">Seleziona fascia di spesa mensile...</option>
                  <option value="15.000 € – 50.000 €/mese">15.000 € – 50.000 €/mese</option>
                  <option value="50.000 € – 100.000 €/mese">50.000 € – 100.000 €/mese</option>
                  <option value="> 100.000 €/mese">&gt; 100.000 €/mese</option>
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
                    className="mt-1 w-4 h-4 rounded border-line focus:outline-none focus:ring-1 focus:ring-accent-600"
                  />
                  <span className="text-xs text-ink-600 leading-relaxed">
                    Ho letto e accetto l'<a href={`/${language}/about`} target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline">informativa sulla privacy</a>. I tuoi dati sono trattati con riservatezza e utilizzati unicamente per ricontattarti in merito alla tua richiesta.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.privacyAccepted}
                className={`w-full btn btn-primary flex items-center justify-center gap-2 ${
                  isSubmitting || !formData.privacyAccepted
                    ? 'cursor-not-allowed opacity-60'
                    : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border border-line border-t-ink-600 rounded-full animate-spin" />
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
                <p className="text-xs text-ink-600 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-ink-500" />
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
          <h1 className="text-2xl font-semibold mb-1">INTERNET VALORE — LE 6 DOMANDE DA FARE A CHI GESTISCE LE TUE CAMPAGNE</h1>
          <p className="text-sm text-gray-700">
            Documento di controllo per ecommerce · Complemento al video di Andrea Falzin
          </p>
        </div>

        <div className="space-y-6">
          {SIX_QUESTIONS.map((q) => (
            <div key={q.id} className="border-b border-gray-300 pb-4 page-break-inside-avoid">
              <div className="flex items-baseline gap-3">
                <span className="font-semibold text-base">[{checkedQuestions[q.id] ? 'X' : '  '}] Domanda {q.id}:</span>
                <p className="font-semibold text-base text-gray-900">{q.question}</p>
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
      <footer className="footer-premium py-8 text-center text-xs text-ink-600 print-hide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Internet Valore S.r.l. — P.IVA 09055410967 — Tutti i diritti riservati.</p>
          <div className="flex items-center gap-4">
            <a href={`/${language}/about`} className="hover:text-ink-900">Privacy & Note Legali</a>
            <a href="tel:800940213" className="text-accent-600 hover:text-accent-700">Numero Verde: 800 940 213</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
