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
    <section id="calcolatore-audit" className="section relative border-t border-b border-line">
      <div className="shell">
        <div className="text-center measure mx-auto mb-10 rise">
          <div className="chip mb-4 inline-flex items-center gap-2 px-4 py-2 text-accent-600">
            <Calculator className="h-4 w-4 text-accent-600" />
            {isIt ? 'SIMULATORE DIAGNOSTICO PRE-AUDIT' : 'PRE-AUDIT DIAGNOSTIC SIMULATOR'}
          </div>

          <h2 className="title-lg mb-3 text-ink-900">
            {isIt
              ? 'Calcola in 30 Secondi l\'Entità delle Discrepanze del Tuo E-commerce'
              : 'Calculate Your E-commerce Data Variances in 30 Seconds'}
          </h2>

          <p className="mt-3 text-[0.95rem] text-ink-600 leading-relaxed">
            {isIt
              ? 'Nessuna registrazione richiesta. Simula l\'impatto matematico sul tuo account prima di richiedere il dossier riservato.'
              : 'Zero sign-up required. Simulate algebraic impact on your account before requesting confidential audit dossiers.'}
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex flex-wrap justify-center gap-1 rounded-full border border-line bg-white p-1.5">
            <button
              onClick={() => setActiveTab('coverage')}
              className={`rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-colors duration-220 cursor-pointer ${
                activeTab === 'coverage'
                  ? 'bg-paper text-ink-900'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {isIt ? '1. Copertura Ordini GA4' : '1. GA4 Order Coverage'}
            </button>
            <button
              onClick={() => setActiveTab('brand')}
              className={`rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-colors duration-220 cursor-pointer ${
                activeTab === 'brand'
                  ? 'bg-paper text-ink-900'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {isIt ? '2. Spreco Campagne Brand' : '2. Brand Spend Cannibalization'}
            </button>
            <button
              onClick={() => setActiveTab('poas')}
              className={`rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-colors duration-220 cursor-pointer ${
                activeTab === 'poas'
                  ? 'bg-paper text-ink-900'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              {isIt ? '3. Margine Netto POAS' : '3. Real POAS Margin'}
            </button>
          </div>
        </div>

        {/* Tab 1: Coverage Calculator */}
        {activeTab === 'coverage' && (
          <div className="card card-hover max-w-4xl mx-auto border border-line p-6 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h3 className="text-[1.05rem] font-semibold text-ink-900 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-accent-600" />
                  {isIt ? 'Verifica il Buco di Tracciamento GA4' : 'Verify GA4 Tracking Loss'}
                </h3>
                <p className="text-[0.85rem] text-ink-600 leading-relaxed">
                  {isIt
                    ? 'Confronta gli ordini del tuo gestionale con quelli visti da Google Analytics 4 negli ultimi 30 giorni.'
                    : 'Compare backend transactions against GA4 reported conversions over the last 30 days.'}
                </p>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? 'Ordini reali a gestionale (Shopify/ERP)' : 'Backend store orders'}</span>
                    <span className="font-semibold text-accent-600">{storeOrders}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="10"
                    value={storeOrders}
                    onChange={(e) => setStoreOrders(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? 'Ordini registrati su GA4' : 'Orders recorded in GA4'}</span>
                    <span className="font-semibold text-accent-600">{ga4Orders}</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max={storeOrders}
                    step="10"
                    value={Math.min(ga4Orders, storeOrders)}
                    onChange={(e) => setGa4Orders(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? 'ROAS medio dichiarato a report' : 'Reported in-platform ROAS'}</span>
                    <span className="font-semibold text-accent-600">{panelRoas.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="10.0"
                    step="0.1"
                    value={panelRoas}
                    onChange={(e) => setPanelRoas(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Result Box */}
              <div className="card card-quiet border border-line flex flex-col justify-between">
                <div>
                  <div className="eyebrow eyebrow-quiet">
                    {isIt ? 'Tasso di Copertura del Dato' : 'Data Coverage Ratio'}
                  </div>
                  <div className="text-[2.4rem] font-semibold tracking-[-0.03em] mt-1 mb-2">
                    {coverageRatio}%
                  </div>
                  <div className="text-[0.85rem] font-medium text-amber-600">
                    ⚠ {lostOrders} {isIt ? 'ordini invisibili al mese a GA4' : 'orders invisible monthly to GA4'} ({100 - coverageRatio}% {isIt ? 'persi' : 'lost'})
                  </div>

                  <div className="mt-4 pt-4 border-t border-line space-y-2 text-[0.85rem] text-ink-600">
                    <div className="flex justify-between">
                      <span className="text-ink-600">{isIt ? 'ROAS apparente a pannello:' : 'Dashboard ROAS:'}</span>
                      <span className="font-semibold text-ink-900">{panelRoas.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink-600">{isIt ? 'ROAS stimato su cassa reale:' : 'Estimated true cash ROAS:'}</span>
                      <span className="font-semibold text-emerald-600">{trueRoas}x</span>
                    </div>
                  </div>

                  <p className="mt-4 text-[0.8rem] text-ink-600 leading-relaxed">
                    {isIt
                      ? 'Rischio: stai prendendo decisioni di budget basandoti su report che vedono solo parte dei tuoi incassi. Campagne sane potrebbero apparire ingiustamente in perdita.'
                      : 'Risk: allocating spend based on data capturing only partial volume. Profitable campaigns may appear falsely unprofitable.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    to={`/${language}/casi-e-audit?tema=dati-affidabili&cap=ordini-non-tracciati-analytics`}
                    className="btn btn-primary btn-sm w-full"
                  >
                    <span>{isIt ? 'Richiedi l\'Audit di Riconciliazione (NDA)' : 'Request Reconciliation Audit (NDA)'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Brand Cannibalization */}
        {activeTab === 'brand' && (
          <div className="card card-hover max-w-4xl mx-auto border border-line p-6 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h3 className="text-[1.05rem] font-semibold text-ink-900 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-accent-600" />
                  {isIt ? 'Stima Spreco Campagne sul Tuo Marchio' : 'Estimate Branded Ads Waste'}
                </h3>
                <p className="text-[0.85rem] text-ink-600 leading-relaxed">
                  {isIt
                    ? 'Misura quanto budget pubblicitario viene drenato per riacquistare clienti che stavano già cercando il tuo nome esatto.'
                    : 'Quantify ad budget diverted to buy clicks from users already searching for your brand trademark.'}
                </p>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? 'Spesa mensile totale Google Ads' : 'Total monthly Google Ads spend'}</span>
                    <span className="font-semibold text-accent-600">{totalSpend.toLocaleString()} €</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="2500"
                    value={totalSpend}
                    onChange={(e) => setTotalSpend(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? '% Spesa stimata su query Brand (Search + PMax)' : '% Spend on Branded terms'}</span>
                    <span className="font-semibold text-accent-600">{brandShare}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={brandShare}
                    onChange={(e) => setBrandShare(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isOrganicFirst}
                      onChange={(e) => setIsOrganicFirst(e.target.checked)}
                      className="h-4 w-4 rounded border border-line bg-white text-accent-600 focus:outline-none focus:ring-1 focus:ring-accent-600"
                    />
                    <span className="text-[0.85rem] text-ink-600">
                      {isIt
                        ? 'Il tuo sito è già 1° in organico SEO gratis sul tuo nome esatto'
                        : 'Your site holds #1 organic SEO rank on your exact trademark'}
                    </span>
                  </label>
                </div>
              </div>

              {/* Result Box */}
              <div className="card card-quiet border border-line flex flex-col justify-between">
                <div>
                  <div className="eyebrow eyebrow-quiet">
                    {isIt ? 'Budget Bruciato a Ricomprare i Tuoi Clienti' : 'Budget Wasted Buying Existing Traffic'}
                  </div>
                  <div className="text-[2.4rem] font-semibold tracking-[-0.03em] mt-1 mb-2 text-amber-600">
                    {wastedBudget.toLocaleString()} €
                    <span className="text-[0.8rem] font-normal text-ink-600"> / {isIt ? 'mese' : 'mo'}</span>
                  </div>
                  <div className="text-[0.85rem] text-ink-600">
                    pari a <strong>{(wastedBudget * 12).toLocaleString()} €</strong> {isIt ? 'all\'anno di liquidità recuperabile' : '/ year in recoverable cash'}
                  </div>

                  <p className="mt-4 pt-4 border-t border-line text-[0.8rem] text-ink-600 leading-relaxed">
                    {isIt
                      ? 'Questo budget viene spesso mascherato dentro Performance Max per far sembrare il ROAS complessivo stratosferico, mentre in realtà non sta producendo alcuna crescita incrementale.'
                      : 'This spend is often hidden inside Performance Max to inflate reported ROAS without producing incremental prospective acquisition.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    to={`/${language}/casi-e-audit?tema=profitto-reale&cap=campagne-brand-cannibalizzazione`}
                    className="btn btn-primary btn-sm w-full"
                  >
                    <span>{isIt ? 'Richiedi l\'Audit Anti-Cannibalizzazione' : 'Request Anti-Cannibalization Audit'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Real POAS Margin */}
        {activeTab === 'poas' && (
          <div className="card card-hover max-w-4xl mx-auto border border-line p-6 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <h3 className="text-[1.05rem] font-semibold text-ink-900 flex items-center gap-2">
                  <PieChart className="h-4 w-4 text-accent-600" />
                  {isIt ? 'Calcola il Vero Profitto sulle Ads (POAS)' : 'Calculate True Profit on Ad Spend (POAS)'}
                </h3>
                <p className="text-[0.85rem] text-ink-600 leading-relaxed">
                  {isIt
                    ? 'Il fatturato è una metrica di vanità: sottraiamo il costo del venduto e i resi per verificare se stai guadagnando o lavorando gratis.'
                    : 'Revenue is vanity: factoring in COGS and returns to isolate whether campaigns produce net earnings or losses.'}
                </p>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? 'ROAS lordo a report' : 'Reported gross ROAS'}</span>
                    <span className="font-semibold text-accent-600">{inputRoas.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="1.5"
                    max="10.0"
                    step="0.1"
                    value={inputRoas}
                    onChange={(e) => setInputRoas(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? 'Margine lordo medio prodotti (COGS)' : 'Gross product margin (COGS)'}</span>
                    <span className="font-semibold text-accent-600">{productMargin}%</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    step="1"
                    value={productMargin}
                    onChange={(e) => setProductMargin(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[0.85rem] font-semibold text-ink-900 mb-2">
                    <span>{isIt ? 'Tasso medio di resi e rimborsi' : 'Average return & refund rate'}</span>
                    <span className="font-semibold text-accent-600">{returnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40"
                    step="1"
                    value={returnRate}
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full accent-accent-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Result Box */}
              <div className="card card-quiet border border-line flex flex-col justify-between">
                <div>
                  <div className="eyebrow eyebrow-quiet">
                    {isIt ? 'Moltiplicatore POAS Netto Reale' : 'Net Real POAS Multiplier'}
                  </div>
                  <div className={`text-[2.4rem] font-semibold tracking-[-0.03em] mt-1 mb-2 ${Number(poasMultiplier) >= 1.3 ? 'text-emerald-600' : Number(poasMultiplier) >= 1.0 ? 'text-amber-600' : 'text-red-600'}`}>
                    {poasMultiplier}x
                  </div>
                  <div className="text-[0.85rem] text-ink-600">
                    {isIt ? 'Utile netto al margine post-ads:' : 'Net margin yield post-ad spend:'}{' '}
                    <strong className={Number(realPoas) >= 0 ? 'text-emerald-600' : 'text-red-600'}>
                      {Number(realPoas) >= 0 ? `+${(Number(realPoas) * 100).toFixed(0)}%` : `${(Number(realPoas) * 100).toFixed(0)}%`}
                    </strong>
                  </div>

                  <p className="mt-4 pt-4 border-t border-line text-[0.8rem] text-ink-600 leading-relaxed">
                    {Number(poasMultiplier) < 1.2
                      ? (isIt ? 'Attenzione: con un POAS inferiore a 1.2x stai operando vicino al punto di pareggio o in perdita occulta una volta considerate spedizioni e commissioni gateway.' : 'Warning: POAS under 1.2x operates near break-even or hidden net loss once shipping and gateway fees apply.')
                      : (isIt ? 'Conferma: le tue campagne generano utile netto positivo, ma la segmentazione per categorie può raddoppiare il moltiplicatore.' : 'Confirmed: campaigns produce net profit, though SKU-level segmentation can further expand net retained margin.')}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line">
                  <Link
                    to={`/${language}/casi-e-audit?tema=profitto-reale&cap=poas-profitto-sulla-spesa`}
                    className="btn btn-primary btn-sm w-full"
                  >
                    <span>{isIt ? 'Richiedi l\'Audit sul Margine Reale POAS' : 'Request Real POAS Margin Audit'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
