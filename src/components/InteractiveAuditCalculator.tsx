import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Calculator,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  DollarSign,
  PieChart,
  Eye,
  Lock,
  Sparkles
} from 'lucide-react';

export default function InteractiveAuditCalculator() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const [activeTab, setActiveTab] = useState<'coverage' | 'brand' | 'poas'>('coverage');

  // Tab 1: Coverage States
  const [storeOrders, setStoreOrders] = useState<number>(450);
  const [ga4Orders, setGa4Orders] = useState<number>(290);
  const [panelRoas, setPanelRoas] = useState<number>(3.2);

  // Tab 2: Brand Waste States
  const [totalSpend, setTotalSpend] = useState<number>(30000);
  const [brandShare, setBrandShare] = useState<number>(25);
  const [isOrganicFirst, setIsOrganicFirst] = useState<boolean>(true);

  // Tab 3: POAS States
  const [inputRoas, setInputRoas] = useState<number>(4.0);
  const [productMargin, setProductMargin] = useState<number>(42);
  const [returnRate, setReturnRate] = useState<number>(14);

  // Calculations
  // 1. Coverage
  const safeStore = Math.max(1, storeOrders);
  const coverageRatio = Math.min(100, Math.max(10, Math.round((ga4Orders / safeStore) * 100)));
  const lostOrders = Math.max(0, storeOrders - ga4Orders);
  const trueRoas = ((panelRoas / (coverageRatio / 100))).toFixed(2);

  // 2. Brand Waste
  const brandSpend = Math.round((totalSpend * brandShare) / 100);
  const wastedBudget = isOrganicFirst ? Math.round(brandSpend * 0.9) : Math.round(brandSpend * 0.35);

  // 3. POAS
  const netRevenueFactor = 1 - (returnRate / 100);
  const realPoas = (((inputRoas * (productMargin / 100) * netRevenueFactor) - 1)).toFixed(2);
  const poasMultiplier = (inputRoas * (productMargin / 100) * netRevenueFactor).toFixed(2);

  return (
    <section id="calcolatore-audit" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-indigo-400" />
            {isIt ? 'SIMULATORE DIAGNOSTICO PRE-AUDIT' : 'PRE-AUDIT DIAGNOSTIC SIMULATOR'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {isIt
              ? 'Calcola in 30 Secondi l\'Entità delle Discrepanze del Tuo E-commerce'
              : 'Calculate Your E-commerce Data Variances in 30 Seconds'}
          </h2>

          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {isIt
              ? 'Nessuna registrazione richiesta. Simula l\'impatto matematico sul tuo account prima di richiedere il dossier riservato.'
              : 'Zero sign-up required. Simulate algebraic impact on your account before requesting confidential audit dossiers.'}
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10 flex-wrap justify-center gap-1">
            <button
              onClick={() => setActiveTab('coverage')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'coverage'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {isIt ? '1. Copertura Ordini GA4' : '1. GA4 Order Coverage'}
            </button>
            <button
              onClick={() => setActiveTab('brand')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'brand'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {isIt ? '2. Spreco Campagne Brand' : '2. Brand Spend Cannibalization'}
            </button>
            <button
              onClick={() => setActiveTab('poas')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'poas'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {isIt ? '3. Margine Netto POAS' : '3. Real POAS Margin'}
            </button>
          </div>
        </div>

        {/* Tab 1: Coverage Calculator */}
        {activeTab === 'coverage' && (
          <div className="max-w-4xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-400" />
                  {isIt ? 'Verifica il Buco di Tracciamento GA4' : 'Verify GA4 Tracking Loss'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isIt
                    ? 'Confronta gli ordini del tuo gestionale con quelli visti da Google Analytics 4 negli ultimi 30 giorni.'
                    : 'Compare backend transactions against GA4 reported conversions over the last 30 days.'}
                </p>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? 'Ordini reali a gestionale (Shopify/ERP)' : 'Backend store orders'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{storeOrders}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="10"
                    value={storeOrders}
                    onChange={(e) => setStoreOrders(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? 'Ordini registrati su GA4' : 'Orders recorded in GA4'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{ga4Orders}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max={storeOrders}
                    step="10"
                    value={Math.min(ga4Orders, storeOrders)}
                    onChange={(e) => setGa4Orders(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? 'ROAS medio dichiarato a report' : 'Reported in-platform ROAS'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{panelRoas.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="10.0"
                    step="0.1"
                    value={panelRoas}
                    onChange={(e) => setPanelRoas(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Result Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {isIt ? 'Tasso di Copertura del Dato' : 'Data Coverage Ratio'}
                  </div>
                  <div className="text-5xl font-black text-white mt-1 mb-2 font-mono">
                    {coverageRatio}%
                  </div>
                  <div className="text-xs text-amber-400 font-medium">
                    ⚠ {lostOrders} {isIt ? 'ordini invisibili al mese a GA4' : 'orders invisible monthly to GA4'} ({100 - coverageRatio}% {isIt ? 'persi' : 'lost'})
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isIt ? 'ROAS apparente a pannello:' : 'Dashboard ROAS:'}</span>
                      <span className="font-mono">{panelRoas.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isIt ? 'ROAS stimato su cassa reale:' : 'Estimated true cash ROAS:'}</span>
                      <span className="font-mono font-bold text-emerald-400">{trueRoas}x</span>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] text-slate-400 leading-relaxed">
                    {isIt
                      ? 'Rischio: stai prendendo decisioni di budget basandoti su report che vedono solo parte dei tuoi incassi. Campagne sane potrebbero apparire ingiustamente in perdita.'
                      : 'Risk: allocating spend based on data capturing only partial volume. Profitable campaigns may appear falsely unprofitable.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    to={`/${language}/casi-e-audit?tema=dati-affidabili&cap=ordini-non-tracciati-analytics`}
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-indigo-600/20"
                  >
                    <span>{isIt ? 'Richiedi l\'Audit di Riconciliazione (NDA)' : 'Request Reconciliation Audit (NDA)'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Brand Cannibalization */}
        {activeTab === 'brand' && (
          <div className="max-w-4xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-indigo-400" />
                  {isIt ? 'Stima Spreco Campagne sul Tuo Marchio' : 'Estimate Branded Ads Waste'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isIt
                    ? 'Misura quanto budget pubblicitario viene drenato per riacquistare clienti che stavano già cercando il tuo nome esatto.'
                    : 'Quantify ad budget diverted to buy clicks from users already searching for your brand trademark.'}
                </p>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? 'Spesa mensile totale Google Ads' : 'Total monthly Google Ads spend'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{totalSpend.toLocaleString()} €</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="2500"
                    value={totalSpend}
                    onChange={(e) => setTotalSpend(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? '% Spesa stimata su query Brand (Search + PMax)' : '% Spend on Branded terms'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{brandShare}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={brandShare}
                    onChange={(e) => setBrandShare(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isOrganicFirst}
                      onChange={(e) => setIsOrganicFirst(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-950 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-xs text-slate-300">
                      {isIt
                        ? 'Il tuo sito è già 1° in organico SEO gratis sul tuo nome esatto'
                        : 'Your site holds #1 organic SEO rank on your exact trademark'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Result Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {isIt ? 'Budget Bruciato a Ricomprare i Tuoi Clienti' : 'Budget Wasted Buying Existing Traffic'}
                  </div>
                  <div className="text-5xl font-black text-amber-400 mt-1 mb-2 font-mono">
                    {wastedBudget.toLocaleString()} €
                    <span className="text-xs text-slate-500 font-normal"> / {isIt ? 'mese' : 'mo'}</span>
                  </div>
                  <div className="text-xs text-slate-300">
                    pari a <strong>{(wastedBudget * 12).toLocaleString()} €</strong> {isIt ? 'all\'anno di liquidità recuperabile' : '/ year in recoverable cash'}
                  </div>

                  <p className="mt-4 text-[11px] text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {isIt
                      ? 'Questo budget viene spesso mascherato dentro Performance Max per far sembrare il ROAS complessivo stratosferico, mentre in realtà non sta producendo alcuna crescita incrementale.'
                      : 'This spend is often hidden inside Performance Max to inflate reported ROAS without producing incremental prospective acquisition.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    to={`/${language}/casi-e-audit?tema=profitto-reale&cap=campagne-brand-cannibalizzazione`}
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-indigo-600/20"
                  >
                    <span>{isIt ? 'Richiedi l\'Audit Anti-Cannibalizzazione' : 'Request Anti-Cannibalization Audit'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Real POAS Margin */}
        {activeTab === 'poas' && (
          <div className="max-w-4xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-indigo-400" />
                  {isIt ? 'Calcola il Vero Profitto sulle Ads (POAS)' : 'Calculate True Profit on Ad Spend (POAS)'}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {isIt
                    ? 'Il fatturato è una metrica di vanità: sottraiamo il costo del venduto e i resi per verificare se stai guadagnando o lavorando gratis.'
                    : 'Revenue is vanity: factoring in COGS and returns to isolate whether campaigns produce net earnings or losses.'}
                </p>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? 'ROAS lordo a report' : 'Reported gross ROAS'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{inputRoas.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="10.0"
                    step="0.1"
                    value={inputRoas}
                    onChange={(e) => setInputRoas(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? 'Margine lordo medio prodotti (COGS)' : 'Gross product margin (COGS)'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{productMargin}%</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    step="1"
                    value={productMargin}
                    onChange={(e) => setProductMargin(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{isIt ? 'Tasso medio di resi e rimborsi' : 'Average return & refund rate'}</span>
                    <span className="text-indigo-400 font-mono font-bold">{returnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    step="1"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Result Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {isIt ? 'Moltiplicatore POAS Netto Reale' : 'Net Real POAS Multiplier'}
                  </div>
                  <div className={`text-5xl font-black mt-1 mb-2 font-mono ${Number(poasMultiplier) >= 1.3 ? 'text-emerald-400' : Number(poasMultiplier) >= 1.0 ? 'text-amber-400' : 'text-red-400'}`}>
                    {poasMultiplier}x
                  </div>
                  <div className="text-xs text-slate-300">
                    {isIt ? 'Utile netto al margine post-ads:' : 'Net margin yield post-ad spend:'}{' '}
                    <strong className={Number(realPoas) >= 0 ? 'text-emerald-400' : 'text-red-400'}>
                      {Number(realPoas) >= 0 ? `+${(Number(realPoas) * 100).toFixed(0)}%` : `${(Number(realPoas) * 100).toFixed(0)}%`}
                    </strong>
                  </div>

                  <p className="mt-4 text-[11px] text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                    {Number(poasMultiplier) < 1.2
                      ? (isIt ? 'Attenzione: con un POAS inferiore a 1.2x stai operando vicino al punto di pareggio o in perdita occulta una volta considerate spedizioni e commissioni gateway.' : 'Warning: POAS under 1.2x operates near break-even or hidden net loss once shipping and gateway fees apply.')
                      : (isIt ? 'Conferma: le tue campagne generano utile netto positivo, ma la segmentazione per categorie può raddoppiare il moltiplicatore.' : 'Confirmed: campaigns produce net profit, though SKU-level segmentation can further expand net retained margin.')}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    to={`/${language}/casi-e-audit?tema=profitto-reale&cap=poas-profitto-sulla-spesa`}
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs text-white flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-indigo-600/20"
                  >
                    <span>{isIt ? 'Richiedi l\'Audit sul Margine Reale POAS' : 'Request Real POAS Margin Audit'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
