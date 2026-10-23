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

      <div className="min-h-screen font-sans">

        {/* ── Header Pillar ──────────────────────────────────────────────── */}
        <header className="shell hero-premium py-20 lg:py-24 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-white mb-6"
          >
            <Cpu className="w-3.5 h-3.5" />
            {isIt ? 'ARCHITETTURA CAPACITÀ MASTERANALYZER' : 'MASTERANALYZER CAPABILITY ARCHITECTURE'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="title-xl hero-title"
          >
            {isIt ? 'Le Funzionalità che Proteggono il Tuo Margine' : 'The Capabilities Protecting Your Margin'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lede measure mx-auto mt-6"
          >
            {isIt
              ? 'Non vendiamo software in licenza: masterAnalyzer è la nostra infrastruttura proprietaria di oltre 1.000.000 di righe censite e 482 tool con cui gestiamo in outsourcing le campagne Google Ads e Meta per e-commerce e aziende qualificate.'
              : 'We do not sell software licenses: masterAnalyzer is our proprietary infrastructure of over 1,000,000 lines and 482 tools used to manage outsourced Google Ads & Meta campaigns for qualified brands.'}
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="chip">✓ 1.004.600+ Righe Censite</span>
            <span className="chip">✓ 482 Tool LLM Specializzati</span>
            <span className="chip">✓ 293 Playbook Operativi</span>
            <span className="chip">✓ 16.364 Test di Regressione</span>
          </div>
        </header>

        {/* ── Clusters Hubs Grid ─────────────────────────────────────────── */}
        <main className="shell pb-20 lg:pb-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {themes.map((theme) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="card card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="eyebrow">
                      Cluster {theme.id}
                    </span>
                    <span className="text-xs text-ink-500">
                      {theme.spokes.length} {isIt ? 'Capacità Dedicate' : 'Spokes'}
                    </span>
                  </div>

                  <h2 className="title-lg transition-colors">
                    <Link to={`/${language}/funzionalita/${theme.id}`}>
                      {theme.title[language]}
                    </Link>
                  </h2>

                  <p className="mt-3 text-[0.95rem] text-ink-600 leading-relaxed">
                    {theme.intro[language]}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <p className="eyebrow eyebrow-quiet">
                      {isIt ? 'Capacità & Soluzioni Analitiche:' : 'Key Capabilities:'}
                    </p>
                    {theme.spokes.map((spoke) => (
                      <Link
                        key={spoke.slug}
                        to={`/${language}/funzionalita/${theme.id}/${spoke.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-paper border border-line-soft hover:border-line transition-colors group/item text-[0.95rem]"
                      >
                        <span className="text-ink-900 font-medium">
                          {spoke.h1[language].split(':')[0]}
                        </span>
                        <ArrowRight className="w-4 h-4 text-ink-500 group-hover/item:text-accent-600 transition-colors flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 hairline flex items-center justify-between">
                  <Link
                    to={`/${language}/funzionalita/${theme.id}`}
                    className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    {isIt ? 'Esplora il cluster tematico' : 'Explore thematic cluster'} →
                  </Link>
                  <Link
                    to={`/${language}/casi-e-audit?tema=${theme.id}`}
                    className="text-xs font-medium text-ink-600 hover:text-ink-900 transition-colors"
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
          <div className="mt-16 card card-quiet text-center">
            <div className="eyebrow inline-flex items-center gap-2 mb-3">
              <Lock className="w-3.5 h-3.5" />
              {isIt ? 'ACCESSO QUALIFICATO & PROTEZIONE COMPETITIVA' : 'QUALIFIED ACCESS & COMPETITIVE PROTECTION'}
            </div>
            <h3 className="title-lg">
              {isIt ? 'Vuoi verificare queste capacità sul tuo account?' : 'Want to verify these capabilities on your account?'}
            </h3>
            <p className="lede measure mx-auto mt-2">
              {isIt
                ? 'Eseguiamo l\'audit a Raggi X in sola lettura per e-commerce e brand con spesa pubblicitaria superiore a 15.000€/mese, con accordo reciproco di riservatezza (NDA).'
                : 'We execute read-only X-Ray audits for brands spending over €15,000/mo, governed by a mutual non-disclosure agreement (NDA).'}
            </p>
            <div className="mt-6">
              <Link
                to={`/${language}/casi-e-audit`}
                className="btn btn-primary"
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
