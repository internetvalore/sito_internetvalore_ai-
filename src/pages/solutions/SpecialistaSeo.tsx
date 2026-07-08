import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';
import SolutionsNav from '../../components/SolutionsNav';
import {
  BarChart2, ShieldCheck, Search, ChevronDown, CheckCircle,
  AlertCircle, Phone, ArrowUpRight, Cpu, Layers
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function SpecialistaSeo() {
  const { language } = useLanguage();
  const isIt = language === 'it';
  const [openPain, setOpenPain] = useState<number | null>(null);

  const itContent = {
    eyebrow: 'SOLUZIONI PER LO SPECIALISTA SEO & CONTENUTI',
    title: 'Striking Distance Mining e ponti automatici SEO-to-Ads',
    subtitle: 'Come ottimizzare le parole chiave in posizione 4-10 che convertono di più e smettere di comprare chiavi brand già posizionate.',
    painsTitle: 'I punti di dolore tipici di chi lavora su SEO e Contenuti',
    pains: [
      {
        q: 'Ho migliaia di parole chiave posizionate ma non so da dove iniziare ad ottimizzare per fare fatturato.',
        a: 'La SEO a pioggia non funziona. Il nostro modulo "Opportunità SEO" suddivide le chiavi in quattro quadranti. Estraiamo la lista "Striking Distance": le keyword in posizione 4-10 che registrano già conversioni. Ottimizzando queste pagine (FAQ, tag, dati strutturati) porti vendite immediate con sforzo minimo.'
      },
      {
        q: 'Il traffico organico cala ma non riesco a capire se è colpa dell\'indicizzazione, della stagionalità o dei concorrenti.',
        a: 'Il playbook "organic_drop" incrocia le API di Search Console con i dati di crawling tecnici. Isola subito se hai perso posizioni su query transazionali chiave, se il mercato sta cercando meno quel servizio, o se c\'è un problema di scansione delle pagine.'
      },
      {
        q: 'Spendo soldi in Google Ads su ricerche del mio brand dove l\'organico è già primo al 100%.',
        a: 'Questa è la classica cannibalizzazione. Il nostro tool di cannibalizzazione individua dove stai comprando click inutili. Genera un report per escludere (negativizzare) le chiavi brand stabili al primo posto organico, risparmiando budget ads da deviare sulle chiavi miniera.'
      }
    ],
    solutionsTitle: 'I moduli SEO della nostra suite',
    solutions: [
      {
        icon: Layers,
        title: 'Mappa Opportunità a 4 Quadranti',
        desc: 'Classifica le query in Asset (posizionate e convertono), Spreco (posizionate, non convertono), Miniera (non posizionate, convertono) e Da Validare per darti la scaletta del lavoro redazionale.'
      },
      {
        icon: ArrowUpRight,
        title: 'Ponte Organic-to-RSA (H1)',
        desc: 'Trasforma i contenuti vincenti in organico in inserzioni Google Ads Search complete. Compra traffico a pagamento su ciò che ha già dimostrato di convertire naturalmente.'
      },
      {
        icon: ShieldCheck,
        title: 'Rilevatore Cannibalizzazione Brand',
        desc: 'Controlla quotidianamente se la spesa Google Ads sovrascrive risultati organici stabili al numero 1, bloccando gli sprechi finanziari sulle ricerche branded.'
      }
    ],
    playbookTitle: 'Playbook SEO & Contenuti (Vena H & Playbook)',
    playbookDesc: 'Le routine eseguite in background per massimizzare la visibilità organica:',
    playbooks: [
      {
        cmd: 'organic_drop',
        desc: 'Diagnosi automatica del calo di visite organiche, separando problemi tecnici da cambi di layout della SERP o cali della domanda.'
      },
      {
        cmd: 'get_striking_distance',
        desc: 'Filtra e ordina le query in posizione 4-10 con opportunità economica maggiore basandosi sul CPC medio teorico.'
      },
      {
        cmd: 'organic_to_rsa',
        desc: 'Prende le pagine organiche con più conversioni, estrae i claim testuali scritti dai redattori e li imposta in bozza come annunci Google Ads.'
      }
    ]
  };

  const enContent = {
    eyebrow: 'SOLUTIONS FOR SEO & CONTENT SPECIALISTS',
    title: 'Striking Distance Mining and automated SEO-to-Ads bridges',
    subtitle: 'How to optimize keywords in positions 4-10 that convert most and stop buying brand keywords you already rank for.',
    painsTitle: 'Typical pains of working on SEO and Content Management',
    pains: [
      {
        q: 'I have thousands of ranked keywords but don\'t know where to start to generate revenue.',
        a: 'Broad-brush SEO doesn\'t work. Our "SEO Opportunities" module splits keywords into four quadrants. We extract the "Striking Distance" list: keywords in positions 4-10 that already record conversions. Optimizing these pages (FAQ, tags, structured data) brings immediate sales with minimal effort.'
      },
      {
        q: 'Organic traffic is dropping but I cannot isolate if it is an indexing issue, seasonality, or competitors.',
        a: 'The "organic_drop" playbook crosses Search Console APIs with technical crawling. It isolates whether you lost rankings on key transactional queries, market demand fell, or pages have scanning blocks.'
      },
      {
        q: 'I spend money on Google Ads for search queries of my own brand where I already rank #1 organically.',
        a: 'This is classic brand cannibalization. Our cannibalization tool identifies where you are buying useless clicks. It generates a report to exclude (negative) brand keywords that are stable at organic #1, saving ads budget for non-brand queries.'
      }
    ],
    solutionsTitle: 'Our suite SEO modules',
    solutions: [
      {
        icon: Layers,
        title: '4-Quadrant Opportunity Map',
        desc: 'Categorizes queries into Assets (rank & convert), Waste (rank, no conversion), Mine (low rank, high conversion), and To Validate, structuring your content calendar.'
      },
      {
        icon: ArrowUpRight,
        title: 'Organic-to-RSA Bridge (H1)',
        desc: 'Converts organically winning content into search text ads. Buy paid traffic for what has already proven to convert naturally.'
      },
      {
        icon: ShieldCheck,
        title: 'Brand Cannibalization Blocker',
        desc: 'Daily checks to verify if Google Ads spend overlaps with stable organic #1 spots, blocking budget waste on branded search terms.'
      }
    ],
    playbookTitle: 'SEO & Content Playbooks (H Vena & Playbooks)',
    playbookDesc: 'Background routines executing to maximize organic visibility:',
    playbooks: [
      {
        cmd: 'organic_drop',
        desc: 'Automatic diagnosis of organic visit drops, separating technical issues from SERP layout changes or search volume decreases.'
      },
      {
        cmd: 'get_striking_distance',
        desc: 'Filters and ranks queries in positions 4-10 showing the largest economic opportunity based on keyword CPC rates.'
      },
      {
        cmd: 'organic_to_rsa',
        desc: 'Takes organic pages with the most conversions, extracts copywriting claims written by editors, and stages them as Google Ads drafts.'
      }
    ]
  };

  const c = isIt ? itContent : enContent;

  return (
    <div className="bg-gray-50 min-h-screen pt-10">
      <MetaTags
        title={isIt ? 'Soluzioni SEO & Striking Distance | Internet Valore' : 'SEO & Striking Distance Solutions | Internet Valore'}
        description={isIt 
          ? 'Ottimizza query striking distance in posizione 4-10, rileva cannibalizzazioni Ads brand, e trasforma le pagine SEO in annunci Search.' 
          : 'Optimize striking distance queries in positions 4-10, detect brand Ads cannibalization, and bridge SEO pages to Search ads.'}
        path="/solutions/specialista-seo"
      />

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        <span className="text-xs font-semibold tracking-wider text-green-600 uppercase bg-green-100 px-3 py-1 rounded-full">
          {c.eyebrow}
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight max-w-4xl mx-auto">
          {c.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          {c.subtitle}
        </p>
      </div>

      {/* ─── PAIN ACCORDION ──────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
            {c.painsTitle}
          </h2>
          <div className="space-y-4">
            {c.pains.map((pain, idx) => {
              const isOpen = openPain === idx;
              return (
                <div key={idx} className="border-b border-gray-100 pb-4">
                  <button
                    id={`pain-btn-${idx}`}
                    onClick={() => setOpenPain(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 hover:text-green-600 transition-colors"
                  >
                    <span>{pain.q}</span>
                    <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-2"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl">
                          {pain.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── SOLUTIONS GRID ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          {c.solutionsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {c.solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md flex flex-col items-start hover:shadow-lg transition-shadow">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl mb-6">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── PLAYBOOK BLOCK ──────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            {c.playbookTitle}
          </h2>
          <p className="text-gray-300 text-sm mb-8">
            {c.playbookDesc}
          </p>
          <div className="space-y-6">
            {c.playbooks.map((pb, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <code className="text-green-400 font-mono text-sm block mb-2">
                  {pb.cmd}
                </code>
                <p className="text-gray-300 text-sm">
                  {pb.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            {isIt ? 'Trova le tue opportunità striking distance' : 'Find your striking distance opportunities'}
          </h3>
          <p className="text-green-100 mb-6 text-sm max-w-xl mx-auto">
            {isIt 
              ? 'Connettiamo Search Console ed estraiamo subito le parole chiave pronte per essere spinte in Top 3.'
              : 'Connect your Search Console and extract keywords ready to be pushed to the Top 3 immediately.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:800940213"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto flex items-center justify-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              {isIt ? 'Chiama Ora · 800 940 213' : 'Call Now · 800 940 213'}
            </a>
          </div>
        </div>
      </div>

      {/* ─── INTERLINKING NAV ────────────────────────────────────────────── */}
      <SolutionsNav />
    </div>
  );
}
