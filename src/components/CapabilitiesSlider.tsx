import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Cpu, Sparkles, HelpCircle, Check, Info } from 'lucide-react';

export default function CapabilitiesSlider() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // State to track flipped cards
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});

  const handleCardClick = (cardKey: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  // Check if any card is currently flipped (to pause marquee animation for easier reading)
  const isAnyCardFlipped = Object.values(flippedCards).some(val => val === true);

  // Core capability details (descriptions & benefits)
  const toolDetails: {
    [key: string]: {
      it: { desc: string; benefit: string };
      en: { desc: string; benefit: string };
    };
  } = {
    'POAS Targeter': {
      it: { desc: 'Calcola il budget ottimale basandosi sul margine netto reale.', benefit: 'Evita di spendere budget su prodotti non redditizi.' },
      en: { desc: 'Calculates optimal ad spend based on net profit margins.', benefit: 'Prevents scaling products that sell at a loss.' }
    },
    'Shopify Reconciler': {
      it: { desc: 'Incrocia gli ID transazione reali di backend con i dati GA4.', benefit: 'Recupera il 20-50% delle vendite perse dai tag standard.' },
      en: { desc: 'Cross-references real backend orders with GA4 tag data.', benefit: 'Recovers 20-50% of conversions missed by standard pixels.' }
    },
    'LMDI Δ Decomposition': {
      it: { desc: 'Scompone matematicamente le variazioni dei KPI di settimana in settimana.', benefit: 'Trova la causa algebrica esatta dietro un calo.' },
      en: { desc: 'Decomposes KPI variations week-over-week mathematically.', benefit: 'Isolates the exact cause behind performance shifts.' }
    },
    'FX BCE Daily Layer': {
      it: { desc: 'Converte le transazioni multivaluta con i tassi storici giornalieri BCE.', benefit: 'Elimina le distorsioni del tasso di cambio sul ROI.' },
      en: { desc: 'Converts multi-currency sales using historical BCE rates.', benefit: 'Removes exchange rate fluctuations from ROI reports.' }
    },
    'MMM Adstock NNLS': {
      it: { desc: 'Modello econometrico per attribuire le vendite su Amazon e canali offline.', benefit: 'Misura il ritorno del marketing senza tracciamento pixel.' },
      en: { desc: 'Econometric model attributing sales on Amazon & retail channels.', benefit: 'Measures marketing lift without direct pixel tracking.' }
    },
    'Causal Lift Welch Test': {
      it: { desc: 'Test statistico per verificare l\'incremento reale dopo un cambio di budget.', benefit: 'Distingue i miglioramenti reali dalle fluttuazioni di mercato.' },
      en: { desc: 'Statistical test verifying incremental lift after budget changes.', benefit: 'Distinguishes real growth from standard market noise.' }
    },
    'Margine-Aware Bidding': {
      it: { desc: 'Regola le offerte Smart Bidding sulle marginalità reali dei prodotti.', benefit: 'Insegna agli algoritmi a vendere i prodotti più redditizi.' },
      en: { desc: 'Aligns bidding parameters with true product profit margins.', benefit: 'Trains bidding algorithms to seek high-margin sales.' }
    },
    'Delta Engine Solver': {
      it: { desc: 'Isola e scompone i nodi di traffico e funnel in tempo reale.', benefit: 'Identifica all\'istante dove il funnel sta perdendo conversioni.' },
      en: { desc: 'Isolates and solves funnel traffic issues in real-time.', benefit: 'Instantly highlights where your funnel is leaking buyers.' }
    },
    'CRM Lead Reconciler': {
      it: { desc: 'Pulisce i contatti duplicati o spam prima dello Smart Bidding.', benefit: 'Evita che gli algoritmi Ads ottimizzino su contatti bot.' },
      en: { desc: 'Filters duplicate or bot leads before feeding algorithms.', benefit: 'Prevents bidding tools from optimizing for junk traffic.' }
    },
    'RispondoSubito Voice': {
      it: { desc: 'Assistente vocale AI che risponde al telefono H24 per qualificare e prenotare.', benefit: 'Nessuna chiamata persa e zero costi fissi di personale.' },
      en: { desc: 'AI voice responder picking up 24/7 to book calendar slots.', benefit: 'Zero missed customer calls and reduced overhead.' }
    },
    'Wound Thesaurus Hooks': {
      it: { desc: 'Genera ganci visivi e copy basati sulle ferite psicologiche del target.', benefit: 'Massimizza il CTR parlando ai bisogni reali dell\'utente.' },
      en: { desc: 'Generates visual and copy hooks keyed to emotional wounds.', benefit: 'Maximizes CTR by speaking directly to core human needs.' }
    },
    'Adversarial Image Checker': {
      it: { desc: 'Verifica con computer vision che l\'immagine non contenga cliché o errori.', benefit: 'Blocca inserzioni kitsch o stonate prima della pubblicazione.' },
      en: { desc: 'Inspects generated ad images for kitsch or layout bugs.', benefit: 'Flags and rejects low-quality visual ads before launch.' }
    },
    'Organic-to-RSA Bridge': {
      it: { desc: 'Crea campagne search automatiche usando le migliori keyword SEO.', benefit: 'Satura le ricerche ad alta conversione integrando Ads e organico.' },
      en: { desc: 'Creates text search ads automatically from top SEO keywords.', benefit: 'Dominates search results combining paid and organic assets.' }
    },
    'Objection Rebuttals Generator': {
      it: { desc: 'Scrive copy focalizzati sulle principali resistenze del prospect.', benefit: 'Smantella i dubbi prima ancora che l\'utente chiuda la pagina.' },
      en: { desc: 'Generates persuasive copy targeting prospect resistances.', benefit: 'Neutralizes objections before the user leaves the page.' }
    },
    'Prebunking Content Engine': {
      it: { desc: 'Anticipa le falsità dei competitor offrendo dati scientifici preventivi.', benefit: 'Protegge il brand e stabilisce fiducia immediata.' },
      en: { desc: 'Deploys pre-emptive facts against competitor claims.', benefit: 'Protects brand reputation and establishes trust upfront.' }
    },
    'Emotion Cue Selector': {
      it: { desc: 'Seleziona pose e contesti visivi per trasmettere emozioni reali.', benefit: 'Evita le classiche foto stock didascaliche ignorate da tutti.' },
      en: { desc: 'Selects visual prompts conveying genuine human emotions.', benefit: 'Replaces generic stock photography that users ignore.' }
    },
    '5-Phase X-Ray Audit': {
      it: { desc: 'Radiografia profonda dell\'account per stanare conflitti e sprechi.', benefit: 'Trova all\'istante il budget disperso su keyword non pertinenti.' },
      en: { desc: 'Performs deep automated scans for conflicts and budget drains.', benefit: 'Instantly locates wasted budget on off-topic searches.' }
    },
    'Brand Cannibalization Blocker': {
      it: { desc: 'Spegne le ads sul brand se il posizionamento SEO organico è al numero 1.', benefit: 'Risparmia fino al 30% del budget pubblicitario di ricerca.' },
      en: { desc: 'Blocks search ads on your brand when organic rank is a solid #1.', benefit: 'Saves up to 30% of search ad spend instantly.' }
    },
    'Delivery Dayparting Modifiers': {
      it: { desc: 'Aggiusta i bid modifiers per orari e device basandosi sulla statistica.', benefit: 'Satura la presenza solo nelle finestre orarie più redditizie.' },
      en: { desc: 'Applies statistical bid modifiers for device and time-of-day.', benefit: 'Saturates ad delivery during high-conversion windows.' }
    },
    'Striking Distance Miner': {
      it: { desc: 'Identifica le keyword in posizione 4-10 ad alta conversione.', benefit: 'Ottimizzazione SEO focalizzata su query pronte per la prima pagina.' },
      en: { desc: 'Locates high-intent keywords ranking in positions 4-10.', benefit: 'Prioritizes SEO content efforts for quick traffic gains.' }
    },
    'Orphan Page Finder': {
      it: { desc: 'Scansiona la struttura interna del sito alla ricerca di pagine non collegate.', benefit: 'Evita sprechi di crawling SEO e recupera valore nascosto.' },
      en: { desc: 'Scans site topology to locate unlinked or legacy pages.', benefit: 'Reduces wasted search crawl budget and recovers traffic.' }
    },
    'Freshness & Token Sentinel': {
      it: { desc: 'Verifica dello stato di sincronizzazione dei connettori e delle API.', benefit: 'Previene la perdita silenziosa di dati storici delle campagne.' },
      en: { desc: 'Checks connector sync states and API credential freshness.', benefit: 'Prevents silent data loss in campaign histories.' }
    },
    'Staged Actions in PAUSE': {
      it: { desc: 'Le modifiche passano da un\'area di staging e sono caricate in PAUSA.', benefit: 'Elimina ogni rischio di pubblicazione di campagne errate.' },
      en: { desc: 'Modifications pass through staging and deploy as PAUSED.', benefit: 'Eliminates the risk of deploying broken campaigns.' }
    },
    'Poisson Significance Calculator': {
      it: { desc: 'Calcola la significatività dei test basandosi su distribuzioni Poisson.', benefit: 'Evita di spegnere posizionamenti o asset su dati scarsi o rumore.' },
      en: { desc: 'Computes test significance using Poisson statistics.', benefit: 'Prevents killing placements based on thin, noisy datasets.' }
    }
  };

  const renderCard = (item: string, rowIndex: number, cardIndex: number) => {
    const cardKey = `row-${rowIndex}-card-${cardIndex}-${item.replace(/\s+/g, '-')}`;
    const isFlipped = flippedCards[cardKey] || false;
    
    // Get detail text or fallback
    const details = toolDetails[item] ? toolDetails[item][language] : {
      desc: isIt ? 'Algoritmo proprietario della nostra suite di gestione.' : 'Proprietary algorithm of our management suite.',
      benefit: isIt ? 'Massimizza il ROI ed evita la dispersione di budget.' : 'Maximizes ROI and prevents ad spend leakage.'
    };

    return (
      <div 
        key={cardKey} 
        className="relative w-[280px] sm:w-[350px] h-[150px] flex-shrink-0 cursor-pointer"
        onClick={() => handleCardClick(cardKey)}
      >
        <div 
          className="relative w-full h-full"
        >
          {/* Front Side */}
          <div className={`card card-hover absolute inset-0 flex items-center justify-between p-5 border border-line transition-opacity duration-220 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-accent-600 flex-shrink-0" />
              <span className="text-[0.9375rem] sm:text-[1rem] font-semibold text-ink-900 tracking-[-0.018em] whitespace-normal">{item}</span>
            </div>
            <Info className="w-4 h-4 text-ink-500 flex-shrink-0" />
          </div>

          {/* Back Side (Info & Benefit) */}
          <div className={`card card-quiet card-hover absolute inset-0 z-10 flex flex-col justify-between p-4 text-left border border-line transition-opacity duration-220 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
            <div>
              <p className="text-[0.7rem] font-semibold text-accent-600 uppercase tracking-[0.11em] mb-1">
                {isIt ? 'Cosa Fa' : 'What it Does'}
              </p>
              <p className="text-[0.8125rem] text-ink-600 leading-relaxed line-clamp-2">
                {details.desc}
              </p>
            </div>
            <div className="border-t border-line pt-2">
              <p className="text-[0.7rem] font-semibold text-ink-500 uppercase tracking-[0.11em] flex items-center gap-1.5 mb-1">
                <Check className="w-3 h-3 flex-shrink-0" />
                {isIt ? 'Beneficio Reale' : 'Real Benefit'}
              </p>
              <p className="text-[0.8125rem] text-ink-600 leading-relaxed line-clamp-1">
                {details.benefit}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const row1 = ['POAS Targeter', 'Shopify Reconciler', 'LMDI Δ Decomposition', 'FX BCE Daily Layer', 'MMM Adstock NNLS', 'Causal Lift Welch Test', 'Margine-Aware Bidding', 'Delta Engine Solver'];
  const row2 = ['CRM Lead Reconciler', 'RispondoSubito Voice', 'Wound Thesaurus Hooks', 'Adversarial Image Checker', 'Organic-to-RSA Bridge', 'Objection Rebuttals Generator', 'Prebunking Content Engine', 'Emotion Cue Selector'];
  const row3 = ['5-Phase X-Ray Audit', 'Brand Cannibalization Blocker', 'Delivery Dayparting Modifiers', 'Striking Distance Miner', 'Orphan Page Finder', 'Freshness & Token Sentinel', 'Staged Actions in PAUSE', 'Poisson Significance Calculator'];

  // Double list arrays for seamless continuous scrolling
  const marquee1 = [...row1, ...row1];
  const marquee2 = [...row2, ...row2];
  const marquee3 = [...row3, ...row3];

  return (
    <section className="section relative overflow-hidden border-y border-line">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-ink-900/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-ink-900/[0.03] pointer-events-none" />

      <div className="shell relative z-10 text-center mb-12 rise">
        <div className="chip mx-auto mb-4 inline-flex items-center gap-2 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.11em]">
          <Cpu className="w-3.5 h-3.5 text-accent-600" />
          {isIt ? '128 TOOL DI ANALISI E AZIONE' : '128 ANALYSIS & ACTION TOOLS'}
        </div>
        <h2 className="title-xl">
          {isIt ? 'La Suite Tecnologica masterAnalyzer' : 'The masterAnalyzer Tech Suite'}
        </h2>
        <p className="mt-3 mx-auto max-w-2xl text-[0.95rem] text-ink-600 leading-relaxed">
          {isIt
            ? 'Tocca una scheda per scoprire cosa fa il singolo tool e come protegge il tuo budget pubblicitario.'
            : 'Tap any card to discover what it does and how it safeguards your advertising budget.'}
        </p>
      </div>

      {/* Marquee Container */}
      <div className="space-y-6 sm:space-y-8 relative z-10 select-none">
        
        {/* Row 1 - Scroll Left */}
        <div className="relative flex w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <div 
            className={`flex gap-6 whitespace-nowrap overflow-x-auto pr-6 [scrollbar-width:none] ${isAnyCardFlipped ? 'pause-animation' : ''}`}
          >
            {marquee1.map((item, idx) => renderCard(item, 1, idx))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative flex w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <div 
            className={`flex gap-6 whitespace-nowrap overflow-x-auto pr-6 [scrollbar-width:none] ${isAnyCardFlipped ? 'pause-animation' : ''}`}
          >
            {marquee2.map((item, idx) => renderCard(item, 2, idx))}
          </div>
        </div>

        {/* Row 3 - Scroll Left */}
        <div className="relative flex w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <div 
            className={`flex gap-6 whitespace-nowrap overflow-x-auto pr-6 [scrollbar-width:none] ${isAnyCardFlipped ? 'pause-animation' : ''}`}
          >
            {marquee3.map((item, idx) => renderCard(item, 3, idx))}
          </div>
        </div>

      </div>

    </section>
  );
}
