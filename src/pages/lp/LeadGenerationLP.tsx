import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar, CheckCircle, Star, ShieldCheck, ArrowDown, X, Lock, ExternalLink } from 'lucide-react';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';

// UUID v4 Generator
const generateUUIDv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const reviews = [
  {
    author: "Matteo Cereda",
    company: "ortodacoltivare.it",
    rating: 5,
    body: "Ho trovato in Internet Valore e in Andrea Falzin un partner affidabile e competente per la gestione delle ads. Andrea ha la capacità di ottimizzare le campagne in modo davvero eccellente, per ottenere conversioni e per ridurre il CPC. Consigliatissimo."
  },
  {
    author: "Giovanni Lugli",
    company: "Immobiliare Milano",
    rating: 5,
    body: "Andrea Falzin è una persona molto gentile, molto preparato e molto paziente, infatti è riuscito a spiegarmi con calma alcuni aspetti del web che mi erano di difficile comprensione oltre a mettere in moto gli strumenti necessari per farmi vedere e farmi contattare dai clienti."
  },
  {
    author: "Hari-Om The Yoga Home",
    company: "",
    rating: 5,
    body: "Internet Valore nella persona di Andrea Falzin oltre a significare grande competenza tecnica è anche disponibilità e gentilezza. Il nostro sito, in particolare sul mercato estero, è passato dall'essere totalmente sconosciuto ad avere un visibilità mondiale negli ambiti per noi interessanti."
  },
  {
    author: "Andrea Vandoni",
    company: "",
    rating: 5,
    body: "Ho trovato in Internet Valore disponibilità e professionalità. I servizi proposti sono molto validi e permettono di stabilire un piano di marketing strategico che porta ogni cliente ad una crescita costante."
  }
];

export default function LeadGenerationLP() {
  const { language } = useLanguage();
  const meta = metaContent.lpLeadGeneration ? metaContent.lpLeadGeneration[language] : {
    title: language === 'it' ? 'Agenzia Lead Generation B2B | Internet Valore' : 'B2B Lead Generation Agency | Internet Valore',
    description: language === 'it' ? 'Campagne lead generation B2B che portano contatti veri per la tua PMI. Ricevi l\'analisi gratuita del tuo account Google Ads in 3 giorni.' : 'B2B lead generation campaigns for SMBs. Receive a free analysis of your Google Ads account.'
  };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    alreadyInvesting: 'Sì',
    privacyAccepted: false
  });

  const [requestType, setRequestType] = useState<'call' | 'audit'>('call');
  const [submitted, setSubmitted] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const encodeForm = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) return;

    const payload = {
      'form-name': 'lead-generation-form',
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      alreadyInvesting: formData.alreadyInvesting,
      request_type: requestType
    };

    // 1. Submit to Netlify Forms via POST fetch
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm(payload)
    }).catch(error => console.error('Netlify form submit error:', error));

    // 2. Push GTM dataLayer Event
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'lead_submit',
      event_id: generateUUIDv4(),
      lang: language,
      page_path: window.location.pathname,
      ...payload
    });

    setSubmitted(true);
  };

  const isIt = language === 'it';

  const faqs = [
    {
      q: isIt ? 'Quanto costa?' : 'How much does it cost?',
      a: isIt
        ? 'Il nostro compenso parte da €800/mese, separato dal budget pubblicitario che resta tuo e sul tuo account. Te lo diciamo nella prima call, senza giri.'
        : 'Our management fee starts at €800/month, completely separate from your ad budget which stays directly in your account. We tell you clearly in the first call.'
    },
    {
      q: isIt ? 'Servono contratti lunghi?' : 'Are long-term contracts required?',
      a: isIt
        ? 'No. Lavoriamo con una gestione trasparente disdicibile di mese in mese con un preavviso di 30 giorni, senza vincoli capestro.'
        : 'No. We work with transparent month-to-month management with a 30-day notice, with no long-term lock-in contracts.'
    },
    {
      q: isIt ? 'In quanto tempo si vedono i primi contatti?' : 'How quickly do the first leads arrive?',
      a: isIt
        ? 'I primi dati e contatti arrivano nelle prime 2-3 settimane. Nella prima call ti diciamo esattamente cosa è realistico per il tuo settore.'
        : 'Initial data and leads arrive within the first 2-3 weeks. In our first call, we tell you exactly what is realistic for your industry.'
    },
    {
      q: isIt ? 'Il budget pubblicitario a chi va?' : 'Who receives the ad budget?',
      a: isIt
        ? 'A Google, direttamente dal tuo account con la tua carta. Vedi ogni singolo euro speso. Noi non tocchiamo mai il tuo budget pubblicitario.'
        : 'Directly to Google, paid from your own account with your own card. You see every single euro spent. We never touch your ad budget.'
    },
    {
      q: isIt ? 'Lavorate con la mia categoria?' : 'Do you work with my business sector?',
      a: isIt
        ? 'Lavoriamo prevalentemente con PMI B2B e servizi ad alto valore. Se la tua categoria non è tra quelle su cui possiamo garantire risultati eccellenti, te lo diciamo subito al primo contatto.'
        : 'We specialize in B2B SMBs and high-value professional services. If your category is not one where we can guarantee top performance, we tell you immediately.'
    }
  ];

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/lp/lead-generation"
        faq={faqs.map(f => ({ question: f.q, answer: f.a }))}
        reviews={reviews}
      />

      {/* ISOLATED HEADER (NO EXIT LINKS) */}
      <header className="bg-white border-b border-gray-100 py-4 px-4 sm:px-8 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-black text-blue-600 tracking-tight select-none">
              Internet Valore
            </span>
            <span className="text-xs bg-blue-50 text-blue-700 font-bold px-2.5 py-1 rounded-full border border-blue-200">
              B2B Lead Gen
            </span>
          </div>
          <div className="flex items-center space-x-4 text-xs sm:text-sm font-bold text-gray-700">
            <span className="hidden sm:inline-block text-emerald-600">
              ✓ Google Partner Ufficiale (ID 6948869441)
            </span>
            <a
              href="tel:800940213"
              className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition flex items-center gap-1.5"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>800 940 213</span>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-white text-gray-900">

        {/* ── SEZIONE 1: HERO (ABOVE THE FOLD MOBILE OPTIMIZED) ──────────── */}
        <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 pt-8 pb-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center lg:text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-5">
              {/* H1 - Exact Keyword Match */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                {isIt
                  ? 'Agenzia di lead generation per PMI B2B'
                  : 'B2B Lead Generation Agency for SMBs'}
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-700 font-medium leading-snug">
                {isIt
                  ? 'Campagne che portano contatti veri, con i numeri sotto gli occhi ogni mese. Nessun report che non sai leggere.'
                  : 'Campaigns that deliver real leads, with transparent metrics every month. No confusing agency reports.'}
              </p>

              {/* Qualification badge */}
              <div className="inline-block bg-blue-100/80 text-blue-900 text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-md border border-blue-200">
                {isIt
                  ? '🎯 Lavoriamo con aziende che investono da almeno €1.000/mese in acquisizione.'
                  : '🎯 We work with companies investing at least €1,000/month in acquisition.'}
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={() => {
                    setRequestType('call');
                    scrollToSection('action-form');
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isIt ? 'Prenota una call da 30 minuti' : 'Book a 30-minute Call'}
                </button>

                <div>
                  <button
                    onClick={() => {
                      setRequestType('audit');
                      scrollToSection('audit-section');
                    }}
                    className="text-sm font-bold text-blue-700 hover:text-blue-900 underline inline-flex items-center gap-1 mt-2"
                  >
                    {isIt
                      ? 'Oppure chiedi prima l’analisi gratuita del tuo account →'
                      : 'Or request a free account audit first →'}
                  </button>
                </div>
              </div>

              {/* Trust Badge Line */}
              <p className="text-xs text-gray-500 font-semibold tracking-wide pt-2">
                Google Partner · Oltre 15 anni sul digitale · Centinaia di aziende seguite
              </p>
            </div>

            {/* Human Trust Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-2 opacity-10"></div>
                <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-gray-100">
                  <img
                    src="/images/andrea-falzin-office.jpg"
                    alt={isIt ? "Andrea Falzin - Founder & CEO Internet Valore" : "Andrea Falzin - Founder & CEO Internet Valore"}
                    className="rounded-2xl w-full h-64 object-cover object-top shadow-sm"
                  />
                  <div className="mt-3 text-center">
                    <p className="text-sm font-bold text-gray-900">
                      {isIt ? 'Andrea Falzin (Founder & CEO)' : 'Andrea Falzin (Founder & CEO)'}
                    </p>
                    <p className="text-xs text-gray-500">
                      {isIt ? 'Oltre 15 anni di esperienza in Lead Generation B2B' : 'Over 15 years in B2B Lead Generation'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SEZIONE 2: IL PROBLEMA, DETTO CON LE SUE PAROLE ───────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
          <div className="border-l-4 border-blue-600 pl-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              {isIt
                ? 'Il punto non è che non arrivano contatti. È che non sai perché.'
                : 'The problem isn’t just getting leads. It’s not knowing why.'}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              <p>
                {isIt
                  ? 'Paghi le campagne ogni mese. Arriva un report con impression, click e un CPC. Ma nessuno ti sa dire quali ricerche hanno davvero portato una richiesta, quali hanno bruciato budget, e quanto ti costa un cliente vero — non un contatto qualsiasi.'
                  : 'You pay for ad campaigns every month. You get a report with impressions, clicks, and CPC. But nobody tells you which search queries actually generated a customer request, which queries wasted budget, and how much a real paying client actually costs.'}
              </p>
              <p className="font-bold text-gray-900">
                {isIt
                  ? 'Quando i numeri non si leggono, l’unica cosa che puoi fare è avere fiducia. E la fiducia, senza prove, prima o poi finisce.'
                  : 'When metrics are unreadable, all you can do is rely on trust. And trust without proof eventually runs out.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── SEZIONE 3: DISINNESCO DEL CONCORRENTE VERO (IL SOFTWARE) ───── */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-black text-gray-900">
              {isIt ? '«Ma non basta un software?»' : '«Can’t I just use software?»'}
            </h2>
            <div className="space-y-3 text-gray-700 leading-relaxed text-base">
              <p>
                {isIt
                  ? 'Un tool ti dà una lista. Non ti dice quale metà del budget stai buttando, non scrive gli annunci, non sistema la pagina su cui atterrano le persone e non ti dice se quei contatti sono diventati clienti.'
                  : 'A software tool gives you a raw list. It doesn’t tell you which half of your budget is wasted, it doesn’t write your ad copy, it doesn’t optimize landing pages, and it doesn’t verify if leads turn into real paying customers.'}
              </p>
              <p className="font-semibold text-gray-900">
                {isIt
                  ? 'Gli strumenti li usiamo anche noi. La differenza è che qualcuno guarda i numeri ogni settimana e decide cosa cambiare.'
                  : 'We use software tools too. The difference is having experts analyze performance every single week and make real optimizations.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── SEZIONE 4: L'OFFERTA DI PROVA (IL CUORE DELLA PAGINA) ──────── */}
        <section id="audit-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-3xl p-8 sm:p-12 border-2 border-blue-200 shadow-xl space-y-6">
            <div className="inline-block bg-blue-600 text-white text-xs font-black uppercase px-3 py-1 rounded-full tracking-wide">
              {isIt ? 'L’offerta di prova prima di firmare' : 'Free Audit Before You Sign'}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              {isIt ? 'Prima di decidere, guarda i tuoi numeri' : 'Look at your real numbers before deciding'}
            </h2>

            <p className="text-base sm:text-lg text-gray-800">
              {isIt
                ? 'Ci dai un accesso in sola lettura al tuo Google Ads e ti mandiamo, entro 3 giorni lavorativi, un documento con:'
                : 'Give us read-only access to your Google Ads account, and within 3 business days we deliver a written report with:'}
            </p>

            <ul className="space-y-3 text-base text-gray-800 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{isIt ? 'su quali ricerche reali hai pagato negli ultimi 90 giorni;' : 'the actual search terms you paid for in the last 90 days;'}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{isIt ? 'quanta parte di quella spesa è finita fuori bersaglio, con i termini in chiaro;' : 'how much of your ad spend went off-target, with exact queries listed;'}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{isIt ? 'quanto ti costa oggi un contatto, e quanto potrebbe costarti;' : 'your actual cost per lead today vs. optimized target cost;'}</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{isIt ? 'le tre cose che cambieremmo per prime, in ordine di impatto.' : 'the top 3 immediate changes we would make, ranked by ROI impact.'}</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-blue-200">
              <p className="text-sm font-bold text-gray-900 mb-4">
                {isIt
                  ? 'È tuo, che tu lavori con noi o no. Nessun impegno, nessun contratto da firmare per averlo.'
                  : 'It’s yours to keep, whether you hire us or not. Zero commitment, no contracts to sign.'}
              </p>

              <button
                onClick={() => {
                  setRequestType('audit');
                  scrollToSection('action-form');
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-extrabold rounded-xl shadow transition duration-200"
              >
                {isIt ? 'Richiedi l’analisi del mio account' : 'Request Free Account Audit'}
              </button>
            </div>
          </div>
        </section>

        {/* ── SEZIONE 5: COME SI LAVORA (3 PASSI) ────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-5xl mx-auto space-y-10 text-center">
            <h2 className="text-3xl font-black text-gray-900">
              {isIt ? 'Come funziona' : 'How it works'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <span className="text-2xl font-black text-blue-600">1</span>
                <h3 className="text-lg font-bold text-gray-900">
                  {isIt ? 'Guardiamo i tuoi numeri' : '1. We analyze your data'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isIt
                    ? 'Accessi in sola lettura, analisi approfondita e una call in cui te la spieghiamo in italiano chiaro.'
                    : 'Read-only access, in-depth analysis, and a call where we explain findings in plain language.'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <span className="text-2xl font-black text-blue-600">2</span>
                <h3 className="text-lg font-bold text-gray-900">
                  {isIt ? 'Rimettiamo a fuoco le campagne' : '2. Refocus your campaigns'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isIt
                    ? 'Su quali ricerche reali vale la pena esserci, con quali annunci e landing page. Ed escludiamo tutto il resto.'
                    : 'We pinpoint exact high-intent queries worth targetting, with custom ads & landing pages.'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                <span className="text-2xl font-black text-blue-600">3</span>
                <h3 className="text-lg font-bold text-gray-900">
                  {isIt ? 'Ogni mese sai cosa è successo' : '3. Monthly clarity & ROI'}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isIt
                    ? 'Quanti contatti, da quali parole chiave, quanto sono costati e cosa cambiamo il mese successivo.'
                    : 'Transparent breakdown of leads, exact search terms, lead cost, and next month’s action plan.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SEZIONE 6: PROVE & RECENSIONI VERIFICATE ───────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-1.5 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
                <span className="text-sm font-extrabold text-gray-900 ml-2">
                  5.0 / 5.0 su Google Business Profile
                </span>
              </div>
              <h2 className="text-3xl font-black text-gray-900">
                {isIt ? 'Cosa dicono i titolari di PMI che lavorano con noi' : 'What SMB owners say about working with us'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-gray-900">{review.author}</p>
                      {review.company && <p className="text-xs text-blue-600 font-semibold">{review.company}</p>}
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, r) => (
                        <Star key={r} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed italic">
                    "{review.body}"
                  </p>
                </div>
              ))}
            </div>

            {/* Verification badges */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {isIt ? 'Google Partner Certificato Ufficiale' : 'Official Certified Google Partner'}
                </p>
                <p className="text-xs text-gray-500">
                  ID Partner: 6948869441 · Oltre 15 anni di attività a Milano e Monza
                </p>
              </div>
              <a
                href="https://www.google.com/search?q=Internet+Valore+srl+Recensioni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-700 hover:underline flex items-center gap-1"
              >
                {isIt ? 'Leggi tutte le recensioni verificate su Google →' : 'Read all verified Google reviews →'}
              </a>
            </div>
          </div>
        </section>

        {/* ── SEZIONE 7: FAQ (MAX 5 OBIEZIONI REALI) ────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-black text-gray-900 text-center">
              {isIt ? 'Domande Frequenti' : 'Frequently Asked Questions'}
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full text-left p-5 font-bold text-gray-900 flex justify-between items-center"
                  >
                    <span>{faq.q}</span>
                    <span className="text-blue-600 font-bold ml-2">
                      {openFaqIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEZIONE 8: CHIUSURA + FORM DI AZIONE ──────────────────────── */}
        <section id="action-form" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-gray-200 shadow-2xl space-y-8">

            <div className="text-center space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                {requestType === 'audit'
                  ? (isIt ? 'Richiedi l’Analisi Gratuita del tuo Account' : 'Request Free Account Audit')
                  : (isIt ? 'Parliamone 30 minuti' : 'Let’s talk for 30 minutes')}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {isIt
                  ? 'Ci racconti dove sei, guardiamo insieme i numeri, ti diciamo cosa faremmo. Se non siamo la scelta giusta per te, te lo diciamo in quella call.'
                  : 'Tell us where you are, we look at numbers together, and tell you what we would do. If we are not the right fit, we tell you immediately.'}
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold">
                  {isIt ? 'Richiesta ricevuta con successo!' : 'Request Successfully Received!'}
                </h3>
                <p className="text-base text-emerald-800">
                  {isIt
                    ? 'Ti ricontattiamo entro un giorno lavorativo per fissare la call o inviarti l’analisi dell’account.'
                    : 'We will contact you within 1 business day to schedule the call or send your audit report.'}
                </p>
              </div>
            ) : (
              <form
                name="lead-generation-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5 max-w-xl mx-auto"
              >
                {/* Netlify Form Hidden Inputs */}
                <input type="hidden" name="form-name" value="lead-generation-form" />
                <p className="hidden">
                  <label>Don’t fill this out: <input name="bot-field" /></label>
                </p>
                {/* Form type selector */}
                <div className="flex rounded-xl bg-gray-100 p-1 font-bold text-xs sm:text-sm">
                  <button
                    type="button"
                    onClick={() => setRequestType('call')}
                    className={`flex-1 py-2.5 rounded-lg transition ${requestType === 'call' ? 'bg-white shadow text-blue-700' : 'text-gray-600'}`}
                  >
                    {isIt ? '1. Prenota Call (30 min)' : '1. Book Call (30 min)'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setRequestType('audit')}
                    className={`flex-1 py-2.5 rounded-lg transition ${requestType === 'audit' ? 'bg-white shadow text-blue-700' : 'text-gray-600'}`}
                  >
                    {isIt ? '2. Solo Analisi Account' : '2. Account Audit Only'}
                  </button>
                </div>

                <p className="text-xs font-semibold text-gray-500 text-center">
                  {isIt
                    ? 'Ti ricontattiamo entro un giorno lavorativo per fissarla nell’orario che ti è comodo.'
                    : 'We will contact you within 1 business day to schedule at your convenience.'}
                </p>

                {/* Field 1: Nome e cognome */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">
                    {isIt ? 'Nome e cognome *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="Mario Rossi"
                  />
                </div>

                {/* Field 2: Azienda */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">
                    {isIt ? 'Azienda *' : 'Company Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="Nome Azienda Srl"
                  />
                </div>

                {/* Field 3: Email di lavoro */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">
                    {isIt ? 'Email di lavoro *' : 'Work Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="mario@azienda.it"
                  />
                </div>

                {/* Field 4: Telefono (Optional) */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">
                    {isIt ? 'Telefono (opzionale)' : 'Phone Number (optional)'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    placeholder="+39 333 1234567"
                  />
                </div>

                {/* Field 5: Qualifier dropdown */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-1">
                    {isIt ? 'Investi già in pubblicità online?' : 'Do you currently invest in online ads?'}
                  </label>
                  <select
                    value={formData.alreadyInvesting}
                    onChange={(e) => setFormData({ ...formData, alreadyInvesting: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white font-medium text-gray-800"
                  >
                    <option value="Sì">{isIt ? 'Sì (più di €1.000/mese)' : 'Yes (over €1,000/month)'}</option>
                    <option value="Sì-meno">{isIt ? 'Sì (meno di €1.000/mese)' : 'Yes (under €1,000/month)'}</option>
                    <option value="No">{isIt ? 'No, sto valutando' : 'No, currently evaluating'}</option>
                  </select>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                    className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="privacyAccepted" className="text-xs text-gray-600 leading-tight">
                    {isIt ? (
                      <>
                        Acconsento al trattamento dei dati personali ai sensi dell’art. 13 del Regolamento UE 2016/679.{' '}
                        <button
                          type="button"
                          onClick={() => setShowPrivacyModal(true)}
                          className="text-blue-700 font-bold underline"
                        >
                          Informativa Privacy
                        </button>
                      </>
                    ) : (
                      <>
                        I consent to the processing of my personal data under GDPR.{' '}
                        <button
                          type="button"
                          onClick={() => setShowPrivacyModal(true)}
                          className="text-blue-700 font-bold underline"
                        >
                          Privacy Policy
                        </button>
                      </>
                    )}
                  </label>
                </div>

                {/* Submit button - NEVER 'Invia' */}
                <button
                  type="submit"
                  disabled={!formData.privacyAccepted}
                  className={`w-full py-4 px-8 rounded-xl font-black text-lg text-white shadow-xl transition-all ${
                    formData.privacyAccepted
                      ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {requestType === 'audit'
                    ? (isIt ? 'Richiedi l’analisi del mio account' : 'Request Account Audit')
                    : (isIt ? 'Prenota la call' : 'Book the Call')}
                </button>
              </form>
            )}

            {/* Alternative contact channels */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <a
                href="tel:800940213"
                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 font-bold text-xs text-gray-800 flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Numero Verde: 800 940 213</span>
              </a>

              <a
                href="https://wa.me/393475012682"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 font-bold text-xs text-gray-800 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                <span>WhatsApp: +39 347 5012682</span>
              </a>

              <a
                href="https://calendar.app.google"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 font-bold text-xs text-gray-800 flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4 text-blue-600" />
                <span>Scegli tu lo slot in agenda</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* ISOLATED FOOTER (NO SITEMAP LINKS) */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-xs border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="font-bold text-white">Internet Valore S.r.l.</p>
            <p className="mt-0.5">P.IVA / C.F. 09055410967 · Via G.B. Pergolesi 29, 20124 Milano (MI)</p>
          </div>

          <div className="flex space-x-4 font-semibold">
            <button onClick={() => setShowPrivacyModal(true)} className="hover:text-white underline">
              Informativa Privacy
            </button>
            <span>·</span>
            <span className="text-gray-500">Cookie Preference (Iubenda)</span>
          </div>
        </div>
      </footer>

      {/* PRIVACY MODAL OVERLAY */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Informativa Privacy — Internet Valore S.r.l.</h3>
              <div className="text-xs text-gray-700 space-y-3 leading-relaxed">
                <p>
                  Ai sensi dell’art. 13 del Regolamento UE 2016/679 (GDPR), informiamo che i dati personali forniti tramite questo modulo (nome, cognome, azienda, email, telefono) saranno trattati da Internet Valore S.r.l. (Titolare del Trattamento) esclusivamente per ricontattarla in merito alla richiesta di prenotazione call o analisi gratuita dell’account.
                </p>
                <p>
                  I dati non saranno ceduti a terzi né utilizzati per invii promozionali non richiesti. È possibile esercitare i diritti di accesso, rettifica o cancellazione inviando una comunicazione a privacy@internetvalore.it.
                </p>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700"
                >
                  Chiudi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
