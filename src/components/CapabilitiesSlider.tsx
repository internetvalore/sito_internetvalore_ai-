import { Link } from 'react-router-dom';
import { Cpu, Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type ToolCopy = { desc: string; benefit: string };

type Tool = {
  /** Nome tecnico dello strumento (mostrato nell'elenco completo). */
  key: string;
  /** Nome in linguaggio semplice (mostrato in home per gli strumenti in evidenza). */
  plain?: { it: string; en: string };
  it: ToolCopy;
  en: ToolCopy;
};

const TOOLS: Tool[] = [
  {
    key: 'Shopify Reconciler',
    plain: { it: 'Riconciliazione degli ordini', en: 'Order reconciliation' },
    it: { desc: 'Incrocia gli ordini reali del gestionale con i dati di Analytics (GA4).', benefit: 'Vedi anche le vendite che i tag standard non registrano.' },
    en: { desc: 'Cross-references real backend orders with Analytics (GA4) data.', benefit: 'You also see the sales that standard tags fail to record.' }
  },
  {
    key: 'POAS Targeter',
    plain: { it: 'Budget deciso sul margine', en: 'Budget set on margin' },
    it: { desc: 'Calcola il budget ottimale partendo dal margine netto reale.', benefit: 'Eviti di spendere su prodotti che non rendono.' },
    en: { desc: 'Calculates the optimal ad spend starting from real net margin.', benefit: 'You avoid spending on products that do not pay back.' }
  },
  {
    key: 'Brand Cannibalization Blocker',
    plain: { it: 'Stop alla spesa sul tuo brand', en: 'No spend on your own brand' },
    it: { desc: 'Sospende gli annunci sul tuo nome quando sei già primo nei risultati organici.', benefit: 'Non paghi i clic di chi ti avrebbe trovato comunque.' },
    en: { desc: 'Pauses ads on your own name when you already rank first organically.', benefit: 'You do not pay for clicks from people who would have found you anyway.' }
  },
  {
    key: 'Staged Actions in PAUSE',
    plain: { it: 'Modifiche che nascono in pausa', en: 'Changes that start paused' },
    it: { desc: 'Ogni modifica passa da un\'area di prova e viene caricata in pausa.', benefit: 'Niente va online prima di essere stato controllato.' },
    en: { desc: 'Every change goes through a staging area and is uploaded as paused.', benefit: 'Nothing goes live before it has been checked.' }
  },
  {
    key: '5-Phase X-Ray Audit',
    plain: { it: 'Audit a raggi X dell\'account', en: 'X-ray audit of the account' },
    it: { desc: 'Radiografia dell\'account in cinque fasi per stanare conflitti e sprechi.', benefit: 'Individua il budget disperso su ricerche non pertinenti.' },
    en: { desc: 'A five-phase scan of the account to surface conflicts and waste.', benefit: 'Locates budget lost on irrelevant searches.' }
  },
  {
    key: 'LMDI Δ Decomposition',
    plain: { it: 'Perché sono cambiati i numeri', en: 'Why the numbers changed' },
    it: { desc: 'Scompone matematicamente le variazioni dei risultati di settimana in settimana.', benefit: 'Sai quale fattore ha causato un calo, non solo che c\'è stato.' },
    en: { desc: 'Mathematically breaks down week-over-week changes in results.', benefit: 'You know which factor caused a drop, not just that it happened.' }
  },
  {
    key: 'CRM Lead Reconciler',
    plain: { it: 'Pulizia dei contatti', en: 'Lead clean-up' },
    it: { desc: 'Toglie contatti doppi, spam e bot prima che le piattaforme imparino da loro.', benefit: 'Gli algoritmi ottimizzano solo sui contatti veri.' },
    en: { desc: 'Removes duplicate, spam and bot leads before the platforms learn from them.', benefit: 'Algorithms optimize on real contacts only.' }
  },
  {
    key: 'Causal Lift Welch Test',
    plain: { it: 'Era merito della campagna?', en: 'Was it the campaign?' },
    it: { desc: 'Test statistico per verificare l\'incremento reale dopo un cambio di budget.', benefit: 'Distingui i miglioramenti reali dalle oscillazioni del mercato.' },
    en: { desc: 'A statistical test verifying the real lift after a budget change.', benefit: 'You tell real improvements apart from market noise.' }
  },
  {
    key: 'FX BCE Daily Layer',
    it: { desc: 'Converte le transazioni multivaluta con i tassi storici giornalieri BCE.', benefit: 'Elimina le distorsioni del tasso di cambio sul ROI.' },
    en: { desc: 'Converts multi-currency sales using historical ECB rates.', benefit: 'Removes exchange rate fluctuations from ROI reports.' }
  },
  {
    key: 'MMM Adstock NNLS',
    it: { desc: 'Modello econometrico per attribuire le vendite su Amazon e canali offline.', benefit: 'Misura il ritorno del marketing senza tracciamento pixel.' },
    en: { desc: 'Econometric model attributing sales on Amazon & retail channels.', benefit: 'Measures marketing lift without direct pixel tracking.' }
  },
  {
    key: 'Margine-Aware Bidding',
    it: { desc: 'Regola le offerte Smart Bidding sulle marginalità reali dei prodotti.', benefit: 'Insegna agli algoritmi a vendere i prodotti più redditizi.' },
    en: { desc: 'Aligns bidding parameters with true product profit margins.', benefit: 'Trains bidding algorithms to seek high-margin sales.' }
  },
  {
    key: 'Delta Engine Solver',
    it: { desc: 'Isola e scompone i nodi di traffico e funnel in tempo reale.', benefit: 'Identifica all\'istante dove il funnel sta perdendo conversioni.' },
    en: { desc: 'Isolates and solves funnel traffic issues in real-time.', benefit: 'Instantly highlights where your funnel is leaking buyers.' }
  },
  {
    key: 'RispondoSubito Voice',
    it: { desc: 'Assistente vocale AI che risponde al telefono H24 per qualificare e prenotare.', benefit: 'Nessuna chiamata persa e zero costi fissi di personale.' },
    en: { desc: 'AI voice responder picking up 24/7 to book calendar slots.', benefit: 'Zero missed customer calls and reduced overhead.' }
  },
  {
    key: 'Wound Thesaurus Hooks',
    it: { desc: 'Genera ganci visivi e copy basati sulle ferite psicologiche del target.', benefit: 'Massimizza il CTR parlando ai bisogni reali dell\'utente.' },
    en: { desc: 'Generates visual and copy hooks keyed to emotional wounds.', benefit: 'Maximizes CTR by speaking directly to core human needs.' }
  },
  {
    key: 'Adversarial Image Checker',
    it: { desc: 'Verifica con computer vision che l\'immagine non contenga cliché o errori.', benefit: 'Blocca inserzioni kitsch o stonate prima della pubblicazione.' },
    en: { desc: 'Inspects generated ad images for kitsch or layout bugs.', benefit: 'Flags and rejects low-quality visual ads before launch.' }
  },
  {
    key: 'Organic-to-RSA Bridge',
    it: { desc: 'Crea campagne search automatiche usando le migliori keyword SEO.', benefit: 'Satura le ricerche ad alta conversione integrando Ads e organico.' },
    en: { desc: 'Creates text search ads automatically from top SEO keywords.', benefit: 'Dominates search results combining paid and organic assets.' }
  },
  {
    key: 'Objection Rebuttals Generator',
    it: { desc: 'Scrive copy focalizzati sulle principali resistenze del prospect.', benefit: 'Smantella i dubbi prima ancora che l\'utente chiuda la pagina.' },
    en: { desc: 'Generates persuasive copy targeting prospect resistances.', benefit: 'Neutralizes objections before the user leaves the page.' }
  },
  {
    key: 'Prebunking Content Engine',
    it: { desc: 'Anticipa le falsità dei competitor offrendo dati scientifici preventivi.', benefit: 'Protegge il brand e stabilisce fiducia immediata.' },
    en: { desc: 'Deploys pre-emptive facts against competitor claims.', benefit: 'Protects brand reputation and establishes trust upfront.' }
  },
  {
    key: 'Emotion Cue Selector',
    it: { desc: 'Seleziona pose e contesti visivi per trasmettere emozioni reali.', benefit: 'Evita le classiche foto stock didascaliche ignorate da tutti.' },
    en: { desc: 'Selects visual prompts conveying genuine human emotions.', benefit: 'Replaces generic stock photography that users ignore.' }
  },
  {
    key: 'Delivery Dayparting Modifiers',
    it: { desc: 'Aggiusta i bid modifiers per orari e device basandosi sulla statistica.', benefit: 'Satura la presenza solo nelle finestre orarie più redditizie.' },
    en: { desc: 'Applies statistical bid modifiers for device and time-of-day.', benefit: 'Saturates ad delivery during high-conversion windows.' }
  },
  {
    key: 'Striking Distance Miner',
    it: { desc: 'Identifica le keyword in posizione 4-10 ad alta conversione.', benefit: 'Ottimizzazione SEO focalizzata su query pronte per la prima pagina.' },
    en: { desc: 'Locates high-intent keywords ranking in positions 4-10.', benefit: 'Prioritizes SEO content efforts for quick traffic gains.' }
  },
  {
    key: 'Orphan Page Finder',
    it: { desc: 'Scansiona la struttura interna del sito alla ricerca di pagine non collegate.', benefit: 'Evita sprechi di crawling SEO e recupera valore nascosto.' },
    en: { desc: 'Scans site topology to locate unlinked or legacy pages.', benefit: 'Reduces wasted search crawl budget and recovers traffic.' }
  },
  {
    key: 'Freshness & Token Sentinel',
    it: { desc: 'Verifica dello stato di sincronizzazione dei connettori e delle API.', benefit: 'Previene la perdita silenziosa di dati storici delle campagne.' },
    en: { desc: 'Checks connector sync states and API credential freshness.', benefit: 'Prevents silent data loss in campaign histories.' }
  },
  {
    key: 'Poisson Significance Calculator',
    it: { desc: 'Calcola la significatività dei test basandosi su distribuzioni Poisson.', benefit: 'Evita di spegnere posizionamenti o asset su dati scarsi o rumore.' },
    en: { desc: 'Computes test significance using Poisson statistics.', benefit: 'Prevents killing placements based on thin, noisy datasets.' }
  }
];

type CapabilitiesProps = {
  /** 'home': gli strumenti in evidenza, in linguaggio semplice. 'full': elenco completo per la pagina tecnologia (sfondo scuro). */
  variant?: 'home' | 'full';
};

export default function CapabilitiesSlider({ variant = 'home' }: CapabilitiesProps) {
  const { language } = useLanguage();
  const isIt = language === 'it';

  if (variant === 'full') {
    return (
      <section className="shell section border-t border-white/10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="title-xl">
            {isIt ? 'Gli strumenti principali, uno per uno' : 'The main tools, one by one'}
          </h2>
          <p className="text-ink-400 mt-2">
            {isIt
              ? 'Cosa fa ciascuno strumento e quale beneficio porta al tuo budget pubblicitario.'
              : 'What each tool does and how it benefits your advertising budget.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => {
            const copy = isIt ? tool.it : tool.en;
            return (
              <div key={tool.key} className="card card-dark">
                <h3 className="text-base font-semibold mb-2">{tool.key}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{copy.desc}</p>
                <p className="mt-3 flex items-start gap-2 text-sm text-ink-200 leading-relaxed">
                  <Check className="h-4 w-4 text-accent-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{copy.benefit}</span>
                </p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  const featured = TOOLS.filter((tool) => tool.plain);

  return (
    <section className="section border-y border-line">
      <div className="shell">
        <div className="text-center mb-12 rise">
          <div className="chip mx-auto mb-4 inline-flex items-center gap-2 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.11em]">
            <Cpu className="w-3.5 h-3.5 text-accent-600" aria-hidden="true" />
            {isIt ? 'La nostra tecnologia' : 'Our technology'}
          </div>
          <h2 className="title-xl">
            {isIt
              ? 'masterAnalyzer: la tecnologia con cui gestiamo le tue campagne'
              : 'masterAnalyzer: the technology we manage your campaigns with'}
          </h2>
          <p className="lede measure mx-auto mt-4">
            {isIt
              ? 'Una piattaforma proprietaria da oltre 1.000.000 di righe di codice, 482 strumenti e 293 procedure operative. Ecco, in parole semplici, cosa fa per il tuo budget.'
              : 'A proprietary platform with over 1,000,000 lines of code, 482 tools and 293 operating procedures. Here is what it does for your budget, in plain words.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((tool) => {
            const copy = isIt ? tool.it : tool.en;
            return (
              <div key={tool.key} className="card card-hover flex flex-col h-full">
                <h3 className="text-base font-semibold text-ink-900 leading-snug mb-2">
                  {tool.plain ? (isIt ? tool.plain.it : tool.plain.en) : tool.key}
                </h3>
                <p className="text-[0.9rem] text-ink-600 leading-relaxed">{copy.desc}</p>
                <p className="mt-auto pt-4 flex items-start gap-2 text-[0.875rem] font-medium text-ink-900 leading-snug">
                  <Check className="h-4 w-4 text-accent-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{copy.benefit}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to={`/${language}/la-nostra-tecnologia-ai`} className="btn btn-ghost">
            {isIt ? 'Scopri tutta la tecnologia' : 'Explore the full technology'}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
