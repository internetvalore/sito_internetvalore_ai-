import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Cpu, Sparkles } from 'lucide-react';

export default function CapabilitiesSlider() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  // 3 Rows of tools to show scale and depth
  const row1 = [
    'POAS Targeter',
    'Shopify Reconciler',
    'LMDI Δ Decomposition',
    'FX BCE Daily Layer',
    'MMM Adstock NNLS',
    'Causal Lift Welch Test',
    'Margine-Aware Bidding',
    'Delta Engine Solver',
    'POAS Targeter',
    'Shopify Reconciler',
    'LMDI Δ Decomposition',
    'FX BCE Daily Layer'
  ];

  const row2 = [
    'CRM Lead Reconciler',
    'RispondoSubito Voice',
    'Wound Thesaurus Hooks',
    'Adversarial Image Checker',
    'Organic-to-RSA Bridge',
    'Objection Rebuttals Generator',
    'Prebunking Content Engine',
    'Emotion Cue Selector',
    'CRM Lead Reconciler',
    'RispondoSubito Voice',
    'Wound Thesaurus Hooks',
    'Adversarial Image Checker'
  ];

  const row3 = [
    '5-Phase X-Ray Audit',
    'Brand Cannibalization Blocker',
    'Delivery Dayparting Modifiers',
    'Striking Distance Miner',
    'Orphan Page Finder',
    'Freshness & Token Sentinel',
    'Staged Actions in PAUSE',
    'Poisson Significance Calculator',
    '5-Phase X-Ray Audit',
    'Brand Cannibalization Blocker',
    'Delivery Dayparting Modifiers',
    'Striking Distance Miner'
  ];

  return (
    <section className="bg-slate-950 py-20 border-y border-white/5 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs mb-4">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          {isIt ? '128 TOOL DI ANALISI E AZIONE' : '128 ANALYSIS & ACTION TOOLS'}
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          {isIt ? 'La Suite Tecnologica masterAnalyzer' : 'The masterAnalyzer Tech Suite'}
        </h2>
        <p className="text-slate-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          {isIt
            ? 'Centinaia di algoritmi proprietari lavorano in tempo reale per monitorare, validare e ottimizzare ogni aspetto delle tue campagne.'
            : 'Hundreds of proprietary algorithms working in real-time to monitor, validate, and optimize every angle of your campaigns.'}
        </p>
      </div>

      {/* Marquee Container */}
      <div className="space-y-6 sm:space-y-8 relative z-10 select-none">
        
        {/* Row 1 - Scroll Left */}
        <div className="w-full overflow-hidden relative flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          
          <div className="flex gap-4 sm:gap-6 animate-marquee-left whitespace-nowrap">
            {row1.map((item, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] text-xl sm:text-3xl font-extrabold tracking-tight text-white hover:border-indigo-500/30 transition-colors flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="w-full overflow-hidden relative flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          
          <div className="flex gap-4 sm:gap-6 animate-marquee-right whitespace-nowrap">
            {row2.map((item, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] text-xl sm:text-3xl font-extrabold tracking-tight text-slate-300 hover:border-purple-500/30 transition-colors flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500 flex-shrink-0 animate-pulse" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Scroll Left */}
        <div className="w-full overflow-hidden relative flex">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          
          <div className="flex gap-4 sm:gap-6 animate-marquee-left whitespace-nowrap">
            {row3.map((item, idx) => (
              <div
                key={idx}
                className="px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] text-xl sm:text-3xl font-extrabold tracking-tight text-slate-400 hover:border-emerald-500/30 transition-colors flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind marquee animations embedded directly via styles to ensure portability */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
        /* Pause on hover to allow interactive discovery */
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
