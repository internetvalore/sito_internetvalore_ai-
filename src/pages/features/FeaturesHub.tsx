import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { FEATURE_THEMES } from '../../data/featuresData';
import InteractiveAuditCalculator from '../../components/InteractiveAuditCalculator';
import {
  Cpu,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Database,
  Terminal,
  Zap,
  Sparkles,
  Lock
} from 'lucide-react';

export default function FeaturesHub() {
  const { language } = useLanguage();
  const isIt = language === 'it';

  const themes = Object.values(FEATURE_THEMES);

  return (
    <>
      <MetaTags
        title={isIt ? 'Funzionalità masterAnalyzer | Riconciliazione & POAS | Internet Valore' : 'masterAnalyzer Capabilities | Reconciliation & POAS | Internet Valore'}
        description={isIt 
          ? 'Esplora le capacità della suite masterAnalyzer: audit tracciamento, riconciliazione ordini reali, ottimizzazione POAS e controllo cannibalizzazione brand.'
          : 'Explore masterAnalyzer capabilities: tracking audit, real order reconciliation, POAS margin optimization, and brand cannibalization control.'}
        path="/funzionalita"
        serviceType="Proprietary Marketing Technology"
        serviceDescription="Suite tecnologica proprietaria per l'orchestrazione avanzata e l'audit matematico di campagne e-commerce."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Funzionalità' : 'Capabilities', path: '/funzionalita' }
        ]}
      />

      <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
        {/* Glow Background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* ── Header Pillar ──────────────────────────────────────────────── */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-mono mb-6 backdrop-blur-md"
          >
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            {isIt ? 'ARCHITETTURA CAPACITÀ MASTERANALYZER' : 'MASTERANALYZER CAPABILITY ARCHITECTURE'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-400"
          >
            {isIt ? 'Le Funzionalità che Proteggono il Tuo Margine' : 'The Capabilities Protecting Your Margin'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {isIt
              ? 'Non vendiamo software in licenza: masterAnalyzer è la nostra infrastruttura proprietaria di oltre 1.000.000 di righe censite e 482 tool con cui gestiamo in outsourcing le campagne Google Ads e Meta per e-commerce e aziende qualificate.'
              : 'We do not sell software licenses: masterAnalyzer is our proprietary infrastructure of over 1,000,000 lines and 482 tools used to manage outsourced Google Ads & Meta campaigns for qualified brands.'}
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">✓ 1.004.600+ Righe Censite</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">✓ 482 Tool LLM Specializzati</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">✓ 293 Playbook Operativi</span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">✓ 16.364 Test di Regressione</span>
          </div>
        </header>

        {/* ── Clusters Hubs Grid ─────────────────────────────────────────── */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest bg-indigo-950/60 px-2.5 py-1 rounded-md border border-indigo-500/30">
                      Cluster {theme.id}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {theme.spokes.length} {isIt ? 'Capacità Dedicate' : 'Spokes'}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    <Link to={`/${language}/funzionalita/${theme.id}`}>
                      {theme.title[language]}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {theme.intro[language]}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {isIt ? 'Capacità & Soluzioni Analitiche:' : 'Key Capabilities:'}
                    </p>
                    {theme.spokes.map((spoke) => (
                      <Link
                        key={spoke.slug}
                        to={`/${language}/funzionalita/${theme.id}/${spoke.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all group/item text-sm"
                      >
                        <span className="text-slate-300 group-hover/item:text-white font-medium">
                          {spoke.h1[language].split(':')[0]}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover/item:text-indigo-400 group-hover/item:translate-x-1 transition-all flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/${language}/funzionalita/${theme.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {isIt ? 'Esplora il cluster tematico' : 'Explore thematic cluster'} →
                  </Link>
                  <Link
                    to={`/${language}/casi-e-audit?tema=${theme.id}`}
                    className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    {isIt ? 'Richiedi audit dedicato' : 'Request dedicated audit'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Interactive Pre-Audit Calculator ───────────────────────────── */}
          <div className="mt-16">
            <InteractiveAuditCalculator />
          </div>

          {/* ── Bottom Section: Protected Access Reminder ─────────────────── */}
          <div className="mt-16 bg-indigo-950/20 border border-indigo-500/20 rounded-3xl p-8 text-center backdrop-blur-md">
            <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-mono mb-3">
              <Lock className="w-3.5 h-3.5" />
              {isIt ? 'ACCESSO QUALIFICATO & PROTEZIONE COMPETITIVA' : 'QUALIFIED ACCESS & COMPETITIVE PROTECTION'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isIt ? 'Vuoi verificare queste capacità sul tuo account?' : 'Want to verify these capabilities on your account?'}
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-2 leading-relaxed">
              {isIt
                ? 'Eseguiamo l\'audit a Raggi X in sola lettura per e-commerce e brand con spesa pubblicitaria superiore a 15.000€/mese, con accordo reciproco di riservatezza (NDA).'
                : 'We execute read-only X-Ray audits for brands spending over €15,000/mo, governed by a mutual non-disclosure agreement (NDA).'}
            </p>
            <div className="mt-6">
              <Link
                to={`/${language}/casi-e-audit`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm text-white shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
              >
                {isIt ? 'Accedi al Dossier di Audit Qualificato' : 'Access Qualified Audit Dossier'}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
