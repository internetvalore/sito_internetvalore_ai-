import React, { useState } from 'react';
import {
  TrendingUp, BarChart2, Eye, DollarSign, Database, AlertCircle,
  ShoppingBag, CheckCircle, ShieldCheck, ArrowRight, ChevronDown,
  Award, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import Stats from '../../components/Stats';
import TestimonialsSlider from '../../components/TestimonialsSlider';

// ─── Fade-in on scroll ────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────
function AccordionItem({ question, answer, index, openIndex, setOpenIndex }: {
  question: string; answer: string; index: number;
  openIndex: number | null; setOpenIndex: (i: number | null) => void;
}) {
  const isOpen = openIndex === index;
  return (
    <div className="mb-4">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-white border-t border-gray-100 rounded-b-lg">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Contenuto IT / EN ────────────────────────────────────────────────────────
function getContent(language: string) {
  const it = language === 'it';

  return {
    meta: {
      title: it
        ? 'E-commerce | Sai quanto stai davvero vendendo? | Internet Valore'
        : 'E-commerce | Do you know how much you\'re really selling? | Internet Valore',
      description: it
        ? 'Scopri quanti ordini il tuo tracciamento non vede e dove perdi margine. Analisi gratuita del tuo e-commerce con dati reali.'
        : 'Find out how many orders your tracking doesn\'t see and where you lose margin. Free e-commerce analysis with real data.',
    },

    hero: {
      eyebrow: it ? 'PROMOZIONE E-COMMERCE' : 'E-COMMERCE PROMOTION',
      h1: it
        ? 'Il tuo e-commerce vende. Ma quanto, davvero?'
        : 'Your e-commerce sells. But how much, really?',
      sub: it
        ? 'Quasi tutti i negozi online vedono solo una parte degli ordini che incassano — e finiscono per tagliare campagne sane su numeri bucati. Noi partiamo da qui: ti diciamo quanti ordini il tuo tracciamento non vede e dove stai lasciando margine. Poi agiamo, con te, solo sul dato vero.'
        : 'Almost every online store sees only part of the orders it earns — and ends up cutting healthy campaigns on broken numbers. We start here: we tell you how many orders your tracking doesn\'t see and where you\'re leaving margin on the table. Then we act, with you, only on real data.',
      btnPrimary: it ? 'Prenota l\'analisi gratuita del tuo e-commerce' : 'Book your free e-commerce analysis',
      btnPhone: it ? 'Chiama Ora · 800 940 213' : 'Call Now · 800 940 213',
      btnWa: it ? 'Parla con Leonardo su WhatsApp' : 'Talk to Leonardo on WhatsApp',
      trust: it
        ? 'Google Partner · 15+ anni di esperienza · oltre 120 realtà seguite'
        : 'Google Partner · 15+ years of experience · 120+ businesses served',
    },

    familiar: {
      eyebrow: it ? 'TI SUONA FAMILIARE?' : 'DOES THIS RING A BELL?',
      h2: it
        ? 'Se gestisci un e-commerce, probabilmente convivi con una di queste sensazioni.'
        : 'If you run an e-commerce, you\'ve probably lived with one of these.',
      sub: it
        ? 'Non è colpa tua: gli strumenti standard ti mostrano metà del quadro.'
        : 'It\'s not your fault: standard tools only show you half the picture.',
      cards: it ? [
        { icon: DollarSign, quote: '«Spendo in pubblicità, ma non so davvero cosa mi rende.»' },
        { icon: BarChart2, quote: '«Vedo il fatturato, non il margine: certe vendite mi costano più di quanto incassano.»' },
        { icon: Database, quote: '«Ho dashboard piene di numeri e nessuno che mi dica cosa fare, adesso.»' },
        { icon: AlertCircle, quote: '«Ogni mese cambio qualcosa sperando funzioni — senza sapere se ha funzionato.»' },
      ] : [
        { icon: DollarSign, quote: '"I spend on advertising but don\'t really know what it returns."' },
        { icon: BarChart2, quote: '"I see revenue, not margin — some sales cost me more than they earn."' },
        { icon: Database, quote: '"I have dashboards full of numbers and no one to tell me what to do, right now."' },
        { icon: AlertCircle, quote: '"Every month I change something hoping it works — without knowing if it did."' },
      ],
    },

    after: {
      eyebrow: it ? 'COSA CAMBIA' : 'WHAT CHANGES',
      h2: it
        ? 'Quando parti dal dato vero, le decisioni cambiano.'
        : 'When you start from real data, decisions change.',
      blocks: it ? [
        {
          icon: Eye,
          title: 'Sai quanto vendi davvero.',
          body: 'Confrontiamo gli ordini che i tuoi strumenti vedono con quelli reali a gestionale: scopri di quanto è sottostimato il tuo ritorno, prima di decidere.',
        },
        {
          icon: TrendingUp,
          title: 'Spendi dove genera profitto, non solo fatturato.',
          body: 'Ragioniamo in POAS: il guadagno al netto del costo del venduto. Due campagne con lo stesso ROAS non rendono uguale.',
        },
        {
          icon: ShieldCheck,
          title: 'Ogni mossa è tua, e reversibile.',
          body: 'Vedi prima cosa faremo, approvi, e misuriamo l\'esito reale di ogni intervento. Niente parte alle tue spalle.',
        },
        {
          icon: ShoppingBag,
          title: 'Recuperi ciò che oggi si disperde.',
          body: 'Carrelli abbandonati, prodotti molto visti e mai comprati, budget speso su ricerche sbagliate: li individuiamo e li chiudiamo.',
        },
      ] : [
        {
          icon: Eye,
          title: 'You know how much you actually sell.',
          body: 'We compare orders your tools see with real backend orders: you find out how much your return is underestimated, before deciding.',
        },
        {
          icon: TrendingUp,
          title: 'You spend where it generates profit, not just revenue.',
          body: 'We reason in POAS: profit net of cost of goods sold. Two campaigns with the same ROAS don\'t return the same.',
        },
        {
          icon: ShieldCheck,
          title: 'Every move is yours, and reversible.',
          body: 'You see what we\'ll do first, approve it, and we measure the real outcome of every action. Nothing happens behind your back.',
        },
        {
          icon: ShoppingBag,
          title: 'You recover what\'s leaking today.',
          body: 'Abandoned carts, heavily viewed but never bought products, budget spent on the wrong searches: we find them and close the gaps.',
        },
      ],
    },

    trust: {
      eyebrow: it ? 'PERCHÉ FIDARTI' : 'WHY TRUST US',
      h2: it ? 'Tre impegni concreti, non promesse.' : 'Three concrete commitments, not promises.',
      points: it ? [
        {
          icon: CheckCircle,
          text: 'Funziona anche se hai già un\'agenzia o se le ads ti hanno già deluso: partiamo da una diagnosi, non da una promessa.',
        },
        {
          icon: ShieldCheck,
          text: 'Nessuna modifica alle tue campagne senza il tuo via libera.',
        },
        {
          icon: Eye,
          text: 'Quando la misura è rotta, te lo diciamo — e la ripariamo, invece di gonfiare i numeri.',
        },
      ] : [
        {
          icon: CheckCircle,
          text: 'Works even if you already have an agency or if ads have already let you down: we start with a diagnosis, not a promise.',
        },
        {
          icon: ShieldCheck,
          text: 'No changes to your campaigns without your explicit approval.',
        },
        {
          icon: Eye,
          text: 'When measurement is broken, we tell you — and fix it, instead of inflating the numbers.',
        },
      ],
      badge: it ? 'Google Partner Certificato' : 'Certified Google Partner',
    },

    faq: {
      h2: it ? 'Domande frequenti' : 'Frequently asked questions',
      items: it ? [
        {
          q: 'Funziona con Shopify / WooCommerce / il mio gestionale?',
          a: 'Sì. Lavoriamo con Shopify, WooCommerce e i principali gestionali. L\'integrazione avviene nella fase iniziale: analizziamo quali dati possiamo estrarre e costruiamo il collegamento tra gli ordini reali e quelli tracciati dagli strumenti di advertising.',
        },
        {
          q: 'Dovete accedere ai miei account Google Ads, Meta e Analytics?',
          a: 'Sì, è necessario. Lavoriamo in modalità "visualizzazione" o "amministratore" a seconda delle operazioni previste. Non compiamo mai azioni sugli account senza prima averle concordate con te.',
        },
        {
          q: 'In quanto tempo vedo i primi risultati?',
          a: 'L\'audit iniziale e la prima diagnosi sono pronti entro le prime settimane dall\'onboarding. I risultati delle ottimizzazioni si misurano tipicamente su un orizzonte di 4-8 settimane, perché le conversioni Google e Meta arrivano in ritardo rispetto al click.',
        },
        {
          q: 'Applicate modifiche alle campagne senza chiedermelo?',
          a: 'No. Ogni mossa — keyword, offerta, budget, creatività — ti viene proposta con una spiegazione e una stima dell\'effetto atteso. Applichiamo solo dopo la tua approvazione esplicita. Ogni intervento è tracciato e reversibile.',
        },
        {
          q: 'Come misurate il valore che portate?',
          a: 'Con un doppio formato di report: uno operativo (metriche, anomalie, azioni intraprese) e uno di valore in euro per chi guida l\'azienda. Ogni raccomandazione riporta i numeri reali dell\'intervento.',
        },
      ] : [
        {
          q: 'Does it work with Shopify / WooCommerce / my backend?',
          a: 'Yes. We work with Shopify, WooCommerce and major backends. Integration happens during the initial phase: we analyse which data we can extract and build the connection between real orders and those tracked by advertising tools.',
        },
        {
          q: 'Do you need access to my Google Ads, Meta and Analytics accounts?',
          a: 'Yes, it is required. We work in "view" or "admin" mode depending on the planned operations. We never take actions on accounts without first agreeing them with you.',
        },
        {
          q: 'How long before I see the first results?',
          a: 'The initial audit and first diagnosis are ready within the first weeks of onboarding. Optimisation results are typically measured over a 4-8 week horizon, because Google and Meta conversions arrive late relative to the click.',
        },
        {
          q: 'Do you apply campaign changes without asking me?',
          a: 'No. Every action — keyword, bid, budget, creative — is proposed to you with an explanation and an estimated expected effect. We apply only after your explicit approval. Every action is tracked and reversible.',
        },
        {
          q: 'How do you measure the value you bring?',
          a: 'With a dual-format report: an operational one (metrics, anomalies, actions taken) and a euro-value one for company leadership. Every recommendation is backed by real numbers from the intervention.',
        },
      ],
    },

    cta: {
      h2: it ? 'Scopri quanto stai davvero vendendo. Gratis.' : 'Find out how much you\'re really selling. Free.',
      body: it
        ? 'Prenota una consulenza gratuita: analizziamo il tuo e-commerce e in pochi giorni ti diciamo quanti ordini il tuo tracciamento non vede e dove stai lasciando margine sul tavolo. Poi decidi tu.'
        : 'Book a free consultation: we analyse your e-commerce and within days tell you how many orders your tracking doesn\'t see and where you\'re leaving margin on the table. Then you decide.',
      btnPrimary: it ? 'Prenota l\'analisi gratuita' : 'Book the free analysis',
      btnPhone: it ? 'Chiama Ora · 800 940 213' : 'Call Now · 800 940 213',
      btnWa: it ? 'Scrivi a Leonardo' : 'Message Leonardo',
    },
  };
}

// ─── Componente principale ────────────────────────────────────────────────────
export default function Ecommerce() {
  const { language } = useLanguage();
  const c = getContent(language);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // WhatsApp link riutilizzato uguale a resto del sito
  const WA_HREF = 'https://wa.me/393351234567';

  return (
    <>
      <MetaTags
        title={c.meta.title}
        description={c.meta.description}
        path="/services/ecommerce"
      />

      <div className="bg-gradient-to-b from-white to-gray-50">

        {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
        <div className="relative bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
                {c.hero.eyebrow}
              </p>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl leading-tight mb-6">
                {c.hero.h1}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {c.hero.sub}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  to={`/${language}/contact`}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-md"
                >
                  {c.hero.btnPrimary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:800940213"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  {c.hero.btnPhone}
                </a>
              </div>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-green-700 hover:text-green-800 transition-colors duration-200"
              >
                <MessageCircle className="mr-1.5 h-4 w-4" />
                {c.hero.btnWa}
              </a>

              {/* Trust line */}
              <p className="mt-6 text-xs text-gray-400 font-medium tracking-wide">
                {c.hero.trust}
              </p>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block absolute right-0 inset-y-0 w-5/12"
          >
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="E-commerce analytics"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
          </motion.div>
        </div>

        {/* ══ 2. TI SUONA FAMILIARE? ══════════════════════════════════════════ */}
        <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
              {c.familiar.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              {c.familiar.h2}
            </h2>
            <p className="text-base text-gray-500 max-w-xl mx-auto">
              {c.familiar.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.familiar.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-200 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <card.icon className="h-5 w-5 text-blue-500" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed italic">{card.quote}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ══ 3. COSA CAMBIA ══════════════════════════════════════════════════ */}
        <div className="bg-white py-20">
          <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
                {c.after.eyebrow}
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {c.after.h2}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {c.after.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="flex items-start gap-5 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
                    <block.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{block.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{block.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* ══ 4. PROVA (Stats + Testimonial + Google Partner) ════════════════ */}
        <Stats />
        <TestimonialsSlider />

        {/* ══ 5. PERCHÉ FIDARTI ═══════════════════════════════════════════════ */}
        <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">
              {c.trust.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {c.trust.h2}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            {c.trust.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md"
              >
                <point.icon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Google Partner badge */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full shadow-md border border-gray-100">
              <Award className="h-6 w-6 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">{c.trust.badge}</span>
            </div>
          </div>
        </Section>

        {/* ══ FAQ ══════════════════════════════════════════════════════════════ */}
        <div className="bg-gray-50 py-20">
          <Section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
              {c.faq.h2}
            </h2>
            {c.faq.items.map((item, i) => (
              <AccordionItem
                key={i}
                question={item.q}
                answer={item.a}
                index={i}
                openIndex={faqOpen}
                setOpenIndex={setFaqOpen}
              />
            ))}
          </Section>
        </div>

        {/* ══ 6. CTA FINALE ═══════════════════════════════════════════════════ */}
        <Section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="px-8 py-16 sm:px-16 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
                {c.cta.h2}
              </h2>
              <p className="text-blue-100 text-base leading-relaxed mb-10 max-w-xl mx-auto">
                {c.cta.body}
              </p>

              {/* Unica CTA primaria */}
              <Link
                to={`/${language}/contact`}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200 shadow-md mb-6"
              >
                {c.cta.btnPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              {/* Secondarie, meno evidenti */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                <a
                  href="tel:800940213"
                  className="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-200"
                >
                  {c.cta.btnPhone}
                </a>
                <span className="hidden sm:inline text-blue-400">·</span>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-200"
                >
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  {c.cta.btnWa}
                </a>
              </div>
            </div>
          </motion.div>
        </Section>

      </div>
    </>
  );
}
