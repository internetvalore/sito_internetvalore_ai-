import React, { useState } from 'react';
import {
  TrendingUp, BarChart2, Eye, DollarSign, Database, AlertCircle,
  ShoppingBag, CheckCircle, ShieldCheck, ArrowRight, ChevronDown,
  Award, MessageCircle, Search, Target, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

import MetaTags from '../../components/MetaTags';
import Stats from '../../components/Stats';
import TestimonialsSlider from '../../components/TestimonialsSlider';
import QualifiedDossierSection from '../../components/QualifiedDossierSection';

// ─── Fade-in on scroll ────────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
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
        className="card card-hover w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-ink-900 pr-4">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}>
          <ChevronDown className="h-5 w-5 text-ink-500 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-5 hairline">
              <p className="text-base text-ink-600 leading-relaxed">{answer}</p>
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
        ? 'Campagne Ads E-commerce sul dato vero | Internet Valore'
        : 'E-commerce Promotion on Real Data | Internet Valore',
      description: it
        ? 'Campagne ads e-commerce su Google Ads e Facebook Ads ottimizzate sul profitto reale (POAS). Scopri quanti ordini il tuo tracciamento non vede. Analisi gratuita.'
        : 'Find out how many orders your tracking doesn\'t see and where you leave margin. We optimize Google Ads and Meta on real profit (POAS), with every move approved by you.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },

    hero: {
      eyebrow: it ? 'CAMPAGNE ADS E-COMMERCE' : 'E-COMMERCE PROMOTION',
      h1: it
        ? 'Il tuo e-commerce vende. Ma quanto, davvero?'
        : 'Your e-commerce sells. But how much, really?',
      sub: it
        ? 'Quasi tutti i negozi online vedono solo una parte degli ordini che incassano — e finiscono per tagliare campagne sane su numeri bucati. Noi partiamo da qui: ti diciamo quanti ordini il tuo tracciamento non vede e dove stai lasciando margine. Poi gestiamo con te le campagne ads del tuo e-commerce — Google Ads e Facebook Ads — solo sul dato vero.'
        : 'Almost every online store sees only part of the orders it earns — and ends up cutting healthy campaigns on broken numbers. We start here: we tell you how many orders your tracking doesn\'t see and where you\'re leaving margin on the table. Then we act, with you, only on real data.',
      btnPrimary: it ? 'Prenota l\'analisi gratuita del tuo e-commerce' : 'Book your free e-commerce analysis',
      btnPhone: it ? 'Numero Verde 800 940 213 (7x24 risponde Leonardo AI per farti richiamare da un consulente umano)' : 'Toll-Free 800 940 213 (24/7 answered by Leonardo AI to get a human consultant callback)',
      btnWa: it ? 'Messaggia l\'agenzia su WhatsApp' : 'Message the agency on WhatsApp',
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

    channels: {
      eyebrow: it ? 'GOOGLE ADS E FACEBOOK ADS' : 'GOOGLE ADS & FACEBOOK ADS',
      h2: it
        ? 'Campagne ads e-commerce: Google Ads e Facebook Ads, gestite sul profitto reale.'
        : 'E-commerce ad campaigns: Google Ads and Facebook Ads, managed on real profit.',
      sub: it
        ? 'Gestiamo in outsourcing le campagne ads del tuo e-commerce sui canali su cui lavoriamo ogni giorno — Google Ads e Facebook Ads (Meta) — con una regola sola: si ottimizza sul margine che ti resta (POAS), non sul fatturato che le piattaforme dichiarano.'
        : 'We manage your e-commerce ad campaigns in outsourcing on the channels we work on every day — Google Ads and Facebook Ads (Meta) — with a single rule: we optimize on the margin you keep (POAS), not on the revenue the platforms report.',
      cards: it ? [
        {
          icon: ShoppingBag,
          title: 'Google Shopping e Merchant Center',
          body: 'Leggiamo il catalogo prodotto per prodotto: quali articoli assorbono budget senza lasciare margine, quali best seller restano invisibili e dove a frenare le vendite è il prezzo, non il budget.',
        },
        {
          icon: Target,
          title: 'Performance Max',
          body: 'Separiamo chi ti cercava già per nome dai clienti davvero nuovi: il ritorno della campagna non viene gonfiato dal traffico brand che avresti incassato comunque.',
        },
        {
          icon: Search,
          title: 'Google Ads Search',
          body: 'Mappiamo query e intenti di ricerca escludendo la cannibalizzazione del brand. Ogni modifica strutturale passa da staging e dry-run prima di andare online.',
        },
        {
          icon: Sparkles,
          title: 'Facebook Ads e Instagram Ads (Meta)',
          body: 'Rinnoviamo le creatività con metodo per prevenire l\'ad fatigue e riconciliamo il ROAS dichiarato da Meta con GA4 e con gli ordini reali del carrello.',
        },
      ] : [
        {
          icon: ShoppingBag,
          title: 'Google Shopping & Merchant Center',
          body: 'We read the catalog product by product: which items absorb budget without leaving margin, which best sellers stay invisible, and where price — not budget — is holding sales back.',
        },
        {
          icon: Target,
          title: 'Performance Max',
          body: 'We separate people who were already searching for you by name from genuinely new customers: campaign return is not inflated by brand traffic you would have earned anyway.',
        },
        {
          icon: Search,
          title: 'Google Ads Search',
          body: 'We map queries and search intent while excluding brand cannibalization. Every structural change goes through staging and dry-run before going live.',
        },
        {
          icon: Sparkles,
          title: 'Facebook Ads & Instagram Ads (Meta)',
          body: 'We refresh creatives methodically to prevent ad fatigue and reconcile the ROAS reported by Meta with GA4 and real cart orders.',
        },
      ],
      link: it
        ? 'Approfondisci la gestione Google Ads e Facebook Ads'
        : 'Learn more about Google Ads and Facebook Ads management',
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
          q: 'Su quali canali gestite le campagne ads e-commerce?',
          a: 'Principalmente Google Ads (Search, Shopping con Merchant Center e Performance Max) e Facebook Ads, cioè le campagne Meta su Facebook e Instagram. La misurazione è la stessa per tutti i canali: ordini reali del carrello riconciliati con GA4 e ottimizzazione sul profitto (POAS).',
        },
        {
          q: 'Funziona con Shopify / WooCommerce / il mio gestionale?',
          a: 'Sì. Ci integriamo con le piattaforme e i gestionali più diffusi — Shopify, WooCommerce e i principali ERP. Nella fase iniziale stabiliamo insieme quali dati possiamo collegare e come, così sai esattamente da dove partiamo.',
        },
        {
          q: 'Dovete accedere ai miei account Google Ads, Meta e Analytics?',
          a: 'Sì. Per la diagnosi lavoriamo in sola lettura: vediamo i dati, non modifichiamo nulla. Ogni accesso in scrittura — per applicare ottimizzazioni — è separato, richiede la tua autorizzazione esplicita e rimane sempre sotto il tuo controllo.',
        },
        {
          q: 'In quanto tempo vedo i primi risultati?',
          a: 'La diagnosi iniziale è pronta in pochi giorni dall\'onboarding. Le prime ottimizzazioni misurabili arrivano nelle settimane successive: Google e Meta registrano le conversioni con ritardo rispetto al click, quindi i numeri si leggono bene dopo 4-8 settimane.',
        },
        {
          q: 'Applicate modifiche alle campagne senza chiedermelo?',
          a: 'No. Nessuna modifica parte senza il tuo via libera. Ti mostriamo prima cosa faremo e perché, tu approvi, poi agiamo e misuriamo l\'esito reale. Ogni intervento è tracciato e reversibile.',
        },
        {
          q: 'Come misurate il valore che portate?',
          a: 'Partiamo dalla copertura del tracciamento — quanti ordini reali i tuoi strumenti vedono — e ragioniamo in profitto (POAS), non solo fatturato. Ogni report dice cosa è stato fatto, perché e se ha funzionato, con i numeri a supporto.',
        },
      ] : [
        {
          q: 'Which channels do you run e-commerce ad campaigns on?',
          a: 'Mainly Google Ads (Search, Shopping with Merchant Center and Performance Max) and Facebook Ads, i.e. Meta campaigns on Facebook and Instagram. Measurement is the same across all channels: real cart orders reconciled with GA4 and optimization on profit (POAS).',
        },
        {
          q: 'Does it work with Shopify / WooCommerce / my backend?',
          a: 'Yes. We integrate with the most widely used platforms and backends — Shopify, WooCommerce and major ERPs. In the initial phase we agree together which data to connect and how, so you know exactly where we\'re starting from.',
        },
        {
          q: 'Do you need access to my Google Ads, Meta and Analytics accounts?',
          a: 'Yes. For the diagnosis we work in read-only mode: we see the data, we change nothing. Every write access — to apply optimizations — is separate, requires your explicit authorization and always stays under your control.',
        },
        {
          q: 'How long before I see the first results?',
          a: 'The initial diagnosis is ready within a few days of onboarding. The first measurable optimizations come in the following weeks: Google and Meta record conversions with a delay after the click, so numbers read well after 4-8 weeks.',
        },
        {
          q: 'Do you apply campaign changes without asking me?',
          a: 'No. No change happens without your approval. We show you first what we\'ll do and why, you approve, then we act and measure the real outcome. Every action is tracked and reversible.',
        },
        {
          q: 'How do you measure the value you bring?',
          a: 'We start from tracking coverage — how many real orders your tools actually see — and reason in profit (POAS), not just revenue. Every report states what was done, why, and whether it worked, with the numbers to back it up.',
        },
      ],
    },

    hood: {
      eyebrow: it ? 'SOTTO IL COFANO' : 'UNDER THE HOOD',
      h2: it
        ? 'Non una dashboard in più. Una piattaforma che scava dove l\'occhio non arriva.'
        : 'Not just another dashboard. A platform that digs where the eye can\'t reach.',
      body: it
        ? 'Per leggere davvero un e-commerce non basta un foglio di calcolo. Abbiamo costruito una piattaforma proprietaria che incrocia tutte le tue fonti — Google Analytics 4, Search Console, Google Ads, Meta, Merchant Center e il carrello e-commerce — e trasforma milioni di righe di dati in decisioni. Quello che un team impiegherebbe giorni a controllare a mano, qui gira in secondi. È l\'equivalente di oltre 34,9 anni-uomo di lavoro specializzato (con una batteria di 16.364 test automatici e 482 tool LLM): quello che serve per ricostruire da zero ciò che oggi lavora per il tuo e-commerce. Un foglio di calcolo o un tool generico non hanno questo dietro.'
        : 'Reading an e-commerce properly takes more than a spreadsheet. We built a proprietary platform that cross-references all your sources — Google Analytics 4, Search Console, Google Ads, Meta, Merchant Center and your store cart — and turns millions of rows of data into decisions. What a team would spend days checking manually, here runs in seconds. That\'s the equivalent of over 34.9 person-years of development (backed by 16,364 automated tests and 482 LLM tools): what it would take to rebuild from scratch what works for your e-commerce today. A spreadsheet or a generic tool doesn\'t have this behind it.',
      tricolon: it ? 'Analizziamo. Scopriamo. Potenziamo.' : 'Analyze. Discover. Amplify.',
      tiles: [
        { value: it ? '1.004.600+' : '1,004,600+', label: it ? 'righe totali censite (775k+ Python)' : 'total verified lines (775k+ Python)' },
        { value: it ? '34,9' : '34.9',      label: it ? 'anni-uomo equivalenti modellati (126× compressione)' : 'modeled person-years (126× compression factor)' },
        { value: '482',       label: it ? 'tool LLM su 18 famiglie specializzate' : 'LLM tools across 18 specialized families' },
        { value: '293',       label: it ? 'playbook operativi (1.533 anelli di catena)' : 'operational playbooks (1,533 chain links)' },
        { value: it ? '16.364' : '16,364',    label: it ? 'funzioni di test automatiche (188 tabelle SQL)' : 'automated test functions (188 SQL tables)' },
        { value: it ? 'milioni' : 'Millions',   label: it ? 'di righe di dati per cliente, analizzate in secondi' : 'of data rows per client, analyzed in seconds' },
      ],
    },

    cta: {
      h2: it ? 'Scopri quanto stai davvero vendendo. Gratis.' : 'Find out how much you\'re really selling. Free.',
      body: it
        ? 'Prenota una consulenza gratuita: analizziamo il tuo e-commerce e in pochi giorni ti diciamo quanti ordini il tuo tracciamento non vede e dove stai lasciando margine sul tavolo. Poi decidi tu.'
        : 'Book a free consultation: we analyze your e-commerce and within days tell you how many orders your tracking doesn\'t see and where you\'re leaving margin on the table. Then you decide.',
      btnPrimary: it ? 'Prenota l\'analisi gratuita' : 'Book the free analysis',
      btnPhone: it ? 'Numero Verde 800 940 213 (7x24 risponde Leonardo AI per farti richiamare da un consulente umano)' : 'Toll-Free 800 940 213 (24/7 answered by Leonardo AI to get a human consultant callback)',
      btnWa: it ? 'Messaggia l\'agenzia' : 'Message the agency',
    },
  };
}

// ─── Componente principale ────────────────────────────────────────────────────
export default function Ecommerce() {
  const { language } = useLanguage();
  const c = getContent(language);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  // Numero WhatsApp reale (usato anche in Services.tsx e GoogleAdsLandingPage.tsx)
  const WA_HREF = 'https://wa.me/393475012682';
  const BOOKING_HREF = 'https://calendar.app.google/hrTJoM1BDccQw75NA';

  return (
    <>
      <MetaTags
        title={c.meta.title}
        description={c.meta.description}
        path="/services/ecommerce"
        image={c.meta.image}
        serviceType={language === 'it' ? 'Campagne Ads E-commerce' : 'E-commerce Marketing'}
        serviceDescription={language === 'it'
          ? 'Gestione campagne ads e-commerce (Google Ads, Shopping, Performance Max e Facebook Ads) basata sul dato reale: tracciamento ordini riconciliato e ottimizzazione sul profitto vero (POAS), con ogni modifica approvata dal cliente.'
          : 'E-commerce promotion based on real data: reconciled order tracking, Google Ads and Meta optimization on true profit (POAS), with every change client-approved.'}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: language === 'it' ? 'Servizi' : 'Services', path: '/services' },
          { name: language === 'it' ? 'Campagne Ads E-commerce' : 'E-commerce', path: '/services/ecommerce' }
        ]}
        faq={c.faq.items.map(item => ({ question: item.q, answer: item.a }))}
      />

      <div className="bg-white">

        {/* ══ 1. HERO ══════════════════════════════════════════════════════════ */}
        <div className="relative hero-premium overflow-hidden">
          <div className="absolute inset-0 bg-paper-soft" />
          <div className="relative shell py-14 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="eyebrow mb-4">
                {c.hero.eyebrow}
              </p>
              <h1 className="title-xl hero-title mb-5">
                {c.hero.h1}
              </h1>
              <p className="lede measure mb-8">
                {c.hero.sub}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
                <a
                  href={BOOKING_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {c.hero.btnPrimary}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:800940213"
                  className="btn btn-ghost"
                >
                  {c.hero.btnPhone}
                </a>
              </div>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <MessageCircle className="h-4 w-4" />
                {c.hero.btnWa}
              </a>

              {/* Trust line */}
              <p className="mt-6 text-xs text-ink-500 font-medium">
                {c.hero.trust}
              </p>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="hidden lg:block absolute right-0 inset-y-0 w-5/12 media rounded-none border-0"
          >
            <img
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt={language === 'it'
                ? 'Campagne ads e-commerce: analisi performance e tracciamento POAS - Internet Valore'
                : 'E-commerce performance analysis and POAS tracking - Internet Valore'}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/25 pointer-events-none" />
          </motion.div>
        </div>

        {/* ══ 2. TI SUONA FAMILIARE? ══════════════════════════════════════════ */}
        <Section className="section shell">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">
              {c.familiar.eyebrow}
            </p>
            <h2 className="title-lg mb-4">
              {c.familiar.h2}
            </h2>
            <p className="lede measure mx-auto">
              {c.familiar.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.familiar.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                className="card card-hover flex items-start gap-4"
              >
                <div className="icon-tile">
                  <card.icon className="h-5 w-5" />
                </div>
                <p className="text-[0.95rem] text-ink-600 font-medium leading-relaxed italic">{card.quote}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ══ 3. COSA CAMBIA ══════════════════════════════════════════════════ */}
        <div className="section section-quiet">
          <Section className="shell">
            <div className="text-center mb-12">
              <p className="eyebrow mb-3">
                {c.after.eyebrow}
              </p>
              <h2 className="title-lg">
                {c.after.h2}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {c.after.blocks.map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.08 }}
                  className="card card-hover flex items-start gap-4"
                >
                  <div className="icon-tile">
                    <block.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-900 mb-1">{block.title}</h3>
                    <p className="text-[0.95rem] text-ink-600 leading-relaxed">{block.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* ══ 3b. CANALI: CAMPAGNE ADS E-COMMERCE (GOOGLE ADS + FACEBOOK ADS) ══ */}
        <Section className="section shell">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">
              {c.channels.eyebrow}
            </p>
            <h2 className="title-lg mb-4">
              {c.channels.h2}
            </h2>
            <p className="lede measure mx-auto">
              {c.channels.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {c.channels.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.08 }}
                className="card card-hover flex items-start gap-4"
              >
                <div className="icon-tile">
                  <card.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink-900 mb-1">{card.title}</h3>
                  <p className="text-[0.95rem] text-ink-600 leading-relaxed">{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to={`/${language}/services/ads`} className="btn btn-ghost">
              {c.channels.link}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>

        {/* ══ 4. SOTTO IL COFANO ══════════════════════════════════════════════ */}
        <div className="section section-quiet">
          <Section className="shell">
            {/* Header */}
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">
                {c.hood.eyebrow}
              </p>
              <h2 className="title-lg measure mx-auto mb-6 text-ink-900">
                {c.hood.h2}
              </h2>
              <p className="lede measure mx-auto mb-8">
                {c.hood.body}
              </p>
              <p className="text-lg font-semibold text-accent-600">
                {c.hood.tricolon}
              </p>
            </div>

            {/* Tile grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {c.hood.tiles.map((tile, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="card card-hover border border-line text-center"
                >
                  <p className="text-2xl font-semibold mb-2 leading-none text-ink-900">
                    {tile.value}
                  </p>
                  <p className="text-xs text-ink-600 leading-snug">{tile.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Link to detail platform page */}
            <div className="mt-12 text-center">
              <Link
                to={`/${language}/la-nostra-tecnologia-ai`}
                className="btn btn-primary"
              >
                {language === 'it' 
                  ? 'Scopri la nostra Tecnologia AI per la gestione delle campagne' 
                  : 'Discover our AI Technology for campaign management'}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Section>
        </div>

        {/* ══ 5. PROVA (Stats + Testimonial + Google Partner) ════════════════ */}
        <Stats />
        <TestimonialsSlider />

        {/* ══ 6. PERCHÉ FIDARTI ═══════════════════════════════════════════════ */}
        <Section className="section shell">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">
              {c.trust.eyebrow}
            </p>
            <h2 className="title-lg">
              {c.trust.h2}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {c.trust.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="card card-quiet card-hover flex items-start gap-4"
              >
                <point.icon className="h-5 w-5 text-accent-600 flex-shrink-0 mt-0.5" />
                <p className="text-[0.95rem] text-ink-600 leading-relaxed">{point.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Google Partner badge */}
          <div className="mt-10 flex justify-center">
            <div className="chip">
              <Award className="h-4 w-4 text-accent-600" />
              <span className="text-sm font-semibold text-ink-600">{c.trust.badge}</span>
            </div>
          </div>
        </Section>

        {/* ══ ACCESSO RISERVATO — DOSSIER & BENCHMARK E-COMMERCE ══════════════ */}
        <QualifiedDossierSection />

        {/* ══ FAQ ══════════════════════════════════════════════════════════════ */}
        <div className="section section-quiet">
          <Section className="shell measure">
            <h2 className="title-lg text-center mb-10">
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
        <Section className="section shell">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="card"
          >
            <div className="px-8 py-16 sm:px-16 max-w-3xl mx-auto text-center">
              <h2 className="title-lg mb-4">
                {c.cta.h2}
              </h2>
              <p className="lede measure mx-auto mb-10">
                {c.cta.body}
              </p>

              {/* Unica CTA primaria */}
              <a
                href={BOOKING_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mb-6"
              >
                {c.cta.btnPrimary}
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* Secondarie, meno evidenti */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
                <a
                  href="tel:800940213"
                  className="text-sm font-semibold text-ink-600 hover:text-ink-900 transition-colors duration-200"
                >
                  {c.cta.btnPhone}
                </a>
                <span className="hidden sm:inline text-ink-300">·</span>
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-ink-600 hover:text-ink-900 transition-colors duration-200"
                >
                  <MessageCircle className="h-4 w-4" />
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
