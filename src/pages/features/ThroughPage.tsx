import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { FEATURE_THEMES } from '../../data/featuresData';
import {
  Cpu,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Shield,
  HelpCircle,
  Play,
  FileText,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function ThroughPage() {
  const { themeId } = useParams<{ themeId: string }>();
  const { language } = useLanguage();
  const isIt = language === 'it';

  if (!themeId || !FEATURE_THEMES[themeId]) {
    return <Navigate to={`/${language}/funzionalita`} replace />;
  }

  const theme = FEATURE_THEMES[themeId];

  return (
    <>
      <MetaTags
        title={theme.metaTitle[language]}
        description={theme.metaDescription[language]}
        path={`/funzionalita/${theme.id}`}
        serviceType="Marketing Analytics Cluster"
        serviceDescription={theme.tagline[language]}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Funzionalità' : 'Capabilities', path: '/funzionalita' },
          { name: theme.title[language], path: `/funzionalita/${theme.id}` }
        ]}
        faq={theme.faqs.map((f) => ({
          question: f.question[language],
          answer: f.answer[language]
        }))}
        video={{
          name: theme.title[language],
          description: theme.metaDescription[language],
          thumbnailUrl: `https://img.youtube.com/vi/${theme.videoOverviewId}/maxresdefault.jpg`,
          uploadDate: '2026-08-01',
          embedUrl: `https://www.youtube.com/embed/${theme.videoOverviewId}`
        }}
      />

      <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
        {/* Glow Background */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* ── Breadcrumb visual navigation ──────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-xs text-slate-400">
          <ol className="flex items-center gap-2">
            <li><Link to={`/${language}`} className="hover:text-white transition-colors">Home</Link></li>
            <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
            <li><Link to={`/${language}/funzionalita`} className="hover:text-white transition-colors">{isIt ? 'Funzionalità' : 'Capabilities'}</Link></li>
            <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
            <li className="text-indigo-400 font-medium truncate">{theme.title[language]}</li>
          </ol>
        </nav>

        {/* ── Hero / Intro Head Block ────────────────────────────────────── */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-mono mb-4">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              {isIt ? 'TOPIC CLUSTER HUB' : 'THEMATIC CLUSTER HUB'}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {theme.title[language]}
            </h1>

            <p className="mt-4 text-lg text-indigo-200 font-medium leading-relaxed">
              {theme.tagline[language]}
            </p>

            <div className="mt-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-slate-300 text-base leading-relaxed">
              <p>{theme.intro[language]}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}`}
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm text-white shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
              >
                {isIt ? 'Richiedi Audit a Raggi X su Questo Tema' : 'Request X-Ray Audit on This Topic'}
              </Link>
              <span className="text-xs text-slate-400">
                {isIt ? 'Protetto da NDA · Riservato a spend >15k€/mese' : 'Governed by NDA · Spend >€15k/mo'}
              </span>
            </div>
          </div>
        </header>

        {/* ── Symptoms Block («I Sintomi») ─────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              {isIt ? 'DIAGNOSTICA PREVENTIVA' : 'PREVENTATIVE DIAGNOSTICS'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {isIt ? 'I Sintomi: Ti succede che…' : 'The Symptoms: Does this happen to you?'}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {isIt
                ? 'Se riconosci uno di questi scenari, il problema non è il mercato ma la qualità del dato.'
                : 'If you recognize these scenarios, the issue is data integrity, not customer demand.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {theme.symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 flex flex-col justify-between hover:border-amber-500/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 flex items-center justify-center font-mono text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {symptom.text[language]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                  <Link
                    to={`/${language}/funzionalita/${theme.id}/${symptom.spokeSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {isIt ? 'Vedi la capacità risolutiva' : 'View solving capability'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Capabilities Spoke Grid ────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {isIt ? 'Le Capacità di masterAnalyzer per Questo Cluster' : 'masterAnalyzer Capabilities in This Cluster'}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {isIt
                ? 'Ogni capacità è un playbook operativo codificato nel nostro motore deterministico.'
                : 'Each capability is an operational playbook encoded in our deterministic engine.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {theme.spokes.map((spoke) => (
              <div
                key={spoke.slug}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950 border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span className="text-indigo-400">{spoke.primaryKeyword}</span>
                    <span>{spoke.proofData.metric} {isIt ? 'metriche' : 'metrics'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    <Link to={`/${language}/funzionalita/${theme.id}/${spoke.slug}`}>
                      {spoke.h1[language]}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {spoke.uspTagline[language]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/${language}/funzionalita/${theme.id}/${spoke.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {isIt ? 'Approfondisci la capacità' : 'Read full capability'} →
                  </Link>
                  <Link
                    to={`/${language}/casi-e-audit?tema=${theme.id}&cap=${spoke.slug}`}
                    className="text-xs text-slate-500 hover:text-white transition-colors"
                  >
                    {isIt ? 'Audit su questa USP' : 'Audit this USP'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Video Overview Section ─────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
                <Play className="w-3.5 h-3.5" />
                {isIt ? 'VIDEO-LEZIONE DALLA COLLANA MANIFESTO' : 'MANIFESTO VIDEO INSIGHT'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {isIt ? 'Ascolta la Spiegazione Tecnica' : 'Watch The Technical Breakdown'}
              </h2>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                {isIt
                  ? 'Il fondatore Andrea Falzin illustra il principio matematico e gli scenari reali in cui le agenzie tradizionali sbagliano la lettura dei dati.'
                  : 'Founder Andrea Falzin breaks down the mathematical foundation and real-world scenarios where standard agencies misread telemetry.'}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${theme.videoOverviewId}?rel=0`}
                  title={theme.title[language]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs Section ───────────────────────────────────────────────── */}
        {theme.faqs.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                {isIt ? 'DOMANDE FREQUENTI' : 'FREQUENTLY ASKED QUESTIONS'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {isIt ? 'FAQ su Questo Cluster' : 'Cluster FAQs'}
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {theme.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5">
                  <h3 className="font-bold text-base text-white">{faq.question[language]}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{faq.answer[language]}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Adjacent Themes ────────────────────────────────────────────── */}
        {theme.adjacentThemes.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              {isIt ? 'Temi Adiacenti Correlati:' : 'Related Adjacent Clusters:'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {theme.adjacentThemes.map((adjId) => {
                const adjTheme = FEATURE_THEMES[adjId];
                if (!adjTheme) return null;
                return (
                  <Link
                    key={adjId}
                    to={`/${language}/funzionalita/${adjId}`}
                    className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:text-white transition-all text-xs font-medium text-slate-300"
                  >
                    → {adjTheme.title[language]}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Final Conversion CTA ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-indigo-950/40 to-slate-900/60 p-8 sm:p-12 rounded-3xl border border-indigo-500/30">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isIt ? 'Verifica il Tuo Account su Questo Tema' : 'Audit Your Account on This Cluster'}
            </h2>
            <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
              {isIt
                ? 'Prenota un audit a Raggi X: colleghiamo l\'account in sola lettura e in pochi giorni evidenziamo le discrepanze protette da patto di riservatezza.'
                : 'Book an X-Ray audit: we connect read-only and pinpoint discrepancies under mutual non-disclosure agreement within days.'}
            </p>
            <div className="mt-8">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}`}
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-base text-white shadow-xl shadow-indigo-600/20 transition-all inline-block active:scale-95"
              >
                {isIt ? 'Richiedi l\'Audit Riservato (Da 15k€/mese)' : 'Request Private Audit (From €15k/mo)'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
