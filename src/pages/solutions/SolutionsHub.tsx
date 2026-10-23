import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import {
  TrendingUp, Users, ShieldAlert, Zap, Search, ShieldCheck,
  Globe, Play, MessageSquare, CheckSquare, RefreshCw, BarChart2,
  FileText, Cpu, Database
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

export default function SolutionsHub() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const content = {
    hero: {
      eyebrow: isIt ? 'IL LIBRO DELL\'UTENTE' : 'THE USER LOGBOOK',
      title: isIt ? 'Come usiamo la suite AI, profilo per profilo' : 'How we use our AI suite, profile by profile',
      subtitle: isIt 
        ? 'Trova il tuo ruolo nella mappa per scoprire i punti di dolore specifici che andiamo a risolvere e come la nostra suite automatizza la crescita del tuo business.'
        : 'Find your role in the map to see the specific pain points we solve and how our suite automates the growth of your business.'
    },
    minimoComune: {
      title: isIt ? 'Il minimo comune: le 5 regole di funzionamento' : 'The common ground: the 5 rules of operation',
      rules: [
        {
          icon: Play,
          title: isIt ? '1. Avvio & Capability-Gating' : '1. Launch & Capability-Gating',
          desc: isIt 
            ? 'Il sistema gira su due processi: API e UI. Se una pagina appare grigia, non è rotta: è capability-gated. Mancano le chiavi o i tracciamenti necessari, e il Centro Capacità ti spiega subito perché.'
            : 'The system runs on two processes: API and UI. If a page appears gray, it\'s not broken: it\'s capability-gated. You lack the necessary keys or tracking, and the Capacity Center tells you why.'
        },
        {
          icon: Globe,
          title: isIt ? '2. Cliente unico & Selettore Mercato' : '2. Single Client & Market Selector',
          desc: isIt 
            ? 'Il cliente si seleziona una volta in sidebar e governa tutto. Se operi su più paesi, il selettore aggrega in EUR o scende in valuta nativa. In assenza di tassi BCE, il sistema si blocca (fail-closed) piuttosto che sommare male.'
            : 'Select the client once in the sidebar and it governs everything. If you operate across multiple countries, the selector aggregates in EUR or drills down. Without BCE FX rates, the system halts (fail-closed) instead of summing incorrectly.'
        },
        {
          icon: MessageSquare,
          title: isIt ? '3. Chat scoped & Globale' : '3. Scoped & Global Chat',
          desc: isIt 
            ? 'La chat è la porta più veloce. C\'è la Chat Globale per ragionare cross-source, e tre chat scoped (GA4, Google Ads, Meta) che vedono solo la loro sorgente per analisi verticali.'
            : 'Chat is the fastest gateway. There is a Global Chat for cross-source reasoning, and three scoped chats (GA4, Google Ads, Meta) that see only their specific source for vertical analysis.'
        },
        {
          icon: CheckSquare,
          title: isIt ? '4. Niente scrive da solo. Mai.' : '4. Zero automated writes. Ever.',
          desc: isIt 
            ? 'Il flusso è sempre rigido: Proponi → Valida (dry-run) → Checkbox di conferma → Applica (con gate RBAC). Le nuove campagne nascono sempre in PAUSA, con doppia firma PDF e log in approval_log.'
            : 'The flow is always rigid: Propose → Validate (dry-run) → Checkbox → Apply (RBAC gated). New campaigns are created in PAUSE, requiring double PDF signature and logged in approval_log.'
        },
        {
          icon: RefreshCw,
          title: isIt ? '5. I job lunghi in background' : '5. Long jobs run in background',
          desc: isIt 
            ? 'Le analisi profonde o i batch creativi girano in background con progress bar ed ETA. Puoi cambiare pagina tranquillamente: un doppio click non lancia un duplicato ma riusa il job in corso.'
            : 'Deep analysis or creative batches run in the background with progress bars and ETAs. You can safely switch pages: double clicking won\'t launch duplicates, it reuses the running job.'
        }
      ]
    },
    rulesOfHonesty: {
      title: isIt ? 'Le Tre Regole d\'Onestà del Sistema' : 'The Three System Rules of Honesty',
      rules: [
        {
          title: isIt ? 'No Dati → No Verdetti' : 'No Data → No Verdicts',
          desc: isIt 
            ? 'Senza misurazioni stabili e tracciamenti sani, il sistema rifiuta di dare giudizi di valore e si limita a visualizzare descrizioni del traffico.'
            : 'Without stable tracking and clean measurements, the system refuses to give value judgments and limits itself to descriptive traffic logs.'
        },
        {
          title: isIt ? 'Spreco Type-Aware & Metrica per Modalità' : 'Type-Aware Waste & Mode-Specific Metrics',
          desc: isIt 
            ? 'Il budget upper-funnel non è classificato come spreco solo perché non ha conversioni dirette. Inoltre, niente ROAS su campagne lead-gen (si ottimizza in CPL/CPA).'
            : 'Upper-funnel budget isn\'t classified as waste just because it lacks direct conversions. Also, no ROAS on lead-gen campaigns (optimized for CPL/CPA).'
        },
        {
          title: isIt ? 'Ancoraggio all\'Artefatto' : 'Anchoring to the Artifact',
          desc: isIt 
            ? 'Ogni numero o metrica di performance visualizzato è rigorosamente collegato all\'elemento (landing, copy o creatività) che lo ha effettivamente generato.'
            : 'Every displayed performance metric or number is strictly anchored to the specific asset (landing page, copy, or creative) that generated it.'
        }
      ]
    }
  };

  const profiles = [
    {
      id: 'titolare-pmi',
      title: isIt ? 'Titolare PMI / Imprenditore' : 'SME Owner / Entrepreneur',
      desc: isIt 
        ? 'Controlla il budget di marketing, verifica il profitto reale e firma le proposte con totale visibilità e controllo delle decisioni.'
        : 'Controls the marketing budget, verifies real profits, and signs off on proposals with full visibility and control over decisions.',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      href: `/${language}/solutions/titolare-pmi`
    },
    {
      id: 'account-manager',
      title: isIt ? 'Account Manager' : 'Account Manager',
      desc: isIt 
        ? 'Spiega le variazioni di traffico o vendite con dati inattaccabili e gestisce i report periodici senza perdite di tempo.'
        : 'Explains traffic and sales shifts with bulletproof data and manages periodic reports without wasting time.',
      icon: FileText,
      color: 'from-indigo-500 to-purple-600',
      href: `/${language}/solutions/account-manager`
    },
    {
      id: 'media-buyer-google-ads',
      title: isIt ? 'Media Buyer Google Ads' : 'Google Ads Media Buyer',
      desc: isIt 
        ? 'Gestisce keyword, Quality Score e ottimizza i bid con staging sicuro e analisi di impression share persa per Rank o Budget.'
        : 'Manages keywords, Quality Scores, and optimizes bids with secure staging and rank vs. budget impression share analysis.',
      icon: Search,
      color: 'from-sky-500 to-blue-600',
      href: `/${language}/solutions/media-buyer-google-ads`
    },
    {
      id: 'media-buyer-meta',
      title: isIt ? 'Media Buyer Meta & Creative Strategist' : 'Meta Media Buyer & Creative Strategist',
      desc: isIt 
        ? 'Trova gli angoli creativi vincenti basati sulle ferite psicologiche, lancia varianti in batch ed esegue l\'ABC creative loop.'
        : 'Uncovers winning creative angles based on target pain points, launches batch variants, and runs the ABC creative loop.',
      icon: TrendingUp,
      color: 'from-pink-500 to-rose-600',
      href: `/${language}/solutions/media-buyer-meta`
    },
    {
      id: 'specialista-seo',
      title: isIt ? 'Specialista SEO & Contenuti' : 'SEO & Content Specialist',
      desc: isIt 
        ? 'Ottimizza query striking distance, rileva cannibalizzazioni di keyword brand ed esporta i vincitori SEO in campagne Ads.'
        : 'Optimizes striking distance queries, detects brand keyword cannibalization, and bridges SEO winners directly into Ads.',
      icon: BarChart2,
      color: 'from-green-500 to-emerald-600',
      href: `/${language}/solutions/specialista-seo`
    },
    {
      id: 'measurement-engineer',
      title: isIt ? 'Measurement Engineer' : 'Measurement Engineer',
      desc: isIt 
        ? 'Riconcilia ordini reali e tracciamenti, effettua audit di tag manager e monitora i flussi di dati e fresh tokens.'
        : 'Reconciles real transactions and analytics tracking, conducts Tag Manager audits, and monitors data feeds.',
      icon: Database,
      color: 'from-purple-500 to-violet-600',
      href: `/${language}/solutions/measurement-engineer`
    },
    {
      id: 'operatore-ecommerce',
      title: isIt ? 'Operatore E-commerce Multi-mercato' : 'Multi-Market E-commerce Operator',
      desc: isIt 
        ? 'Gestisce listini multivaluta e coordina allocazioni budget intelligenti e priorità di scala tra paesi in modo sicuro.'
        : 'Manages multi-currency inventory and coordinates smart budget allocations and scale priorities across countries safely.',
      icon: Globe,
      color: 'from-teal-500 to-cyan-600',
      href: `/${language}/solutions/operatore-ecommerce`
    },
    {
      id: 'advertiser-senza-tracking',
      title: isIt ? 'Editore / Advertiser senza Pixel' : 'Publisher / No-Pixel Advertiser',
      desc: isIt 
        ? 'Ottimizza la spesa marketing per marketplace o canali offline privi di pixel diretti tramite modellazione MMM e Adstock.'
        : 'Optimizes marketing spend for marketplaces or offline channels lacking direct tracking pixels via MMM & Adstock modeling.',
      icon: ShieldAlert,
      color: 'from-amber-500 to-orange-600',
      href: `/${language}/solutions/advertiser-senza-tracking`
    },
    {
      id: 'costruttore-sistema',
      title: isIt ? 'Costruttore del Sistema' : 'System Builder / Architect',
      desc: isIt 
        ? 'Manutiene i cataloghi, estende le capacità LLM della piattaforma e monitora i webhook e la stabilità del Centro Capacità.'
        : 'Maintains catalogs, extends platform LLM capabilities, and monitors webhooks and Capacity Center health.',
      icon: Cpu,
      color: 'from-gray-700 to-gray-900',
      href: `/${language}/solutions/costruttore-sistema`
    }
  ];

  return (
    <div className="min-h-screen">
      {isIt ? (
        <MetaTags
          title="Mappa dei Profili e delle Soluzioni | Internet Valore"
          description="Scopri come la suite AI di Internet Valore risolve i punti di dolore di ciascun ruolo aziendale in modo mirato e misurabile."
          path="/solutions"
          serviceType="AI Marketing Suite"
          serviceDescription="Suite di strumenti AI per la gestione campagne marketing, organizzata per ruolo aziendale: imprenditori, account manager, media buyer, SEO specialist e data engineer."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Soluzioni', path: '/solutions' }
          ]}
        />
      ) : (
        <MetaTags
          title="Profile Map and Solutions | Internet Valore"
          description="Discover how Internet Valore's AI suite resolves specific pain points for each business role in a targeted and measurable way."
          path="/solutions"
          serviceType="AI Marketing Suite"
          serviceDescription="AI-powered marketing tool suite organized by business role: entrepreneurs, account managers, media buyers, SEO specialists, and data engineers."
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Solutions', path: '/solutions' }
          ]}
        />
      )}

      {/* ─── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="section shell border-b border-line text-center">
        <motion.span 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5"
        >
          {content.hero.eyebrow}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="title-xl hero-title mt-5 max-w-4xl mx-auto"
        >
          {content.hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="lede measure mx-auto mt-5"
        >
          {content.hero.subtitle}
        </motion.p>
      </section>

      {/* ─── MAPPA DEI PROFILI GRID ───────────────────────────────────────── */}
      <section className="section shell border-t border-line">
        <h2 className="sr-only">{isIt ? 'Griglia dei Profili' : 'Profile Grid'}</h2>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={profile.id}
                variants={fadeInUp}
                className="card card-quiet card-hover flex flex-col h-full"
              >
                <div className="flex flex-col flex-1">
                  <div className="icon-tile mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="title-lg mb-2">{profile.title}</h3>
                  <p className="text-[0.95rem] text-ink-600 leading-relaxed">{profile.desc}</p>
                </div>
                <div className="mt-5 pt-5 border-t border-line">
                  <Link
                    to={profile.href}
                    className="btn btn-sm btn-ghost text-accent-600 w-full"
                  >
                    {isIt ? 'Esplora Pain-Soluzione' : 'Explore Pain-Solution'}
                    <span className="ml-1" aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── MINIMO COMUNE SECTION ────────────────────────────────────────── */}
      <section className="section shell section-quiet border-t border-line">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="card rounded-[24px] border border-line relative overflow-hidden"
        >
          <div className="absolute right-6 top-6 opacity-[0.06] pointer-events-none">
            <Cpu className="h-24 w-24 text-ink-700" />
          </div>
          
          <h2 className="title-lg mb-8 text-center sm:text-left text-ink-900">
            {content.minimoComune.title}
          </h2>

          <div className="space-y-6">
            {content.minimoComune.rules.map((rule, idx) => {
              const RuleIcon = rule.icon;
              return (
                <div key={idx} className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                  <div className="icon-tile flex-shrink-0 border border-line text-accent-600">
                    <RuleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[1.05rem] font-semibold text-ink-900">{rule.title}</h3>
                    <p className="mt-1 text-[0.95rem] text-ink-600 leading-relaxed max-w-[62ch]">{rule.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* ─── REGOLE D'ONESTÀ SECTION ──────────────────────────────────────────── */}
      <section className="section shell section-quiet border-t border-line">
        <div className="card rounded-[24px]">
          <h2 className="title-lg mb-8 text-center">
            {content.rulesOfHonesty.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.rulesOfHonesty.rules.map((rule, idx) => (
              <div key={idx} className="card card-quiet rounded-[14px] flex flex-col">
                <div className="h-1.5 w-10 rounded-full bg-line-strong mb-4"></div>
                <h3 className="text-[1.05rem] font-semibold mb-2">{rule.title}</h3>
                <p className="text-[0.95rem] text-ink-600 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FOOTER ───────────────────────────────────────────────────── */}
      <section className="section shell section-quiet border-t border-line text-center">
        <div className="card rounded-[24px]">
          <h3 className="title-lg mb-4">
            {isIt ? 'Hai riscontrato uno di questi problemi nel tuo business?' : 'Are you facing these issues in your business?'}
          </h3>
          <p className="lede mb-6 max-w-xl mx-auto">
            {isIt 
              ? 'Mettici alla prova. Chiama il Numero Verde 800 940 213 attivo 7x24: risponde Leonardo, assistente AI digitale che raccoglie i tuoi dati per farti richiamare da un nostro consulente umano.'
              : 'Put us to the test. Call Toll-Free 800 940 213 (active 24/7): answered by Leonardo, digital AI assistant collecting your info for a human consultant callback.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link
              to={`/${language}/contact`}
              className="btn btn-primary w-full sm:w-auto"
            >
              {isIt ? 'Contatta Leonardo per un Audit' : 'Contact Leonardo for an Audit'}
            </Link>
            <a
              href="tel:800940213"
              className="btn btn-ghost w-full sm:w-auto"
            >
              {isIt ? 'Chiama 800 940 213' : 'Call 800 940 213'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
