import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import MetaTags from '../../components/MetaTags';
import { FEATURE_THEMES, FeatureSpoke } from '../../data/featuresData';
import {
  Cpu,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  Play,
  HelpCircle,
  FileText,
  Lock,
  ChevronRight,
  Sparkles,
  Zap,
  Layers,
  Search
} from 'lucide-react';

export default function LandingUspPage() {
  const { themeId, featureSlug } = useParams<{ themeId: string; featureSlug: string }>();
  const { language } = useLanguage();
  const isIt = language === 'it';

  if (!themeId || !FEATURE_THEMES[themeId]) {
    return <Navigate to={`/${language}/funzionalita`} replace />;
  }

  const theme = FEATURE_THEMES[themeId];
  const spoke = theme.spokes.find((s) => s.slug === featureSlug);

  if (!spoke) {
    return <Navigate to={`/${language}/funzionalita/${theme.id}`} replace />;
  }

  return (
    <>
      <MetaTags
        title={spoke.metaTitle[language]}
        description={spoke.metaDescription[language]}
        path={`/funzionalita/${theme.id}/${spoke.slug}`}
        serviceType="Marketing Engineering Playbook"
        serviceDescription={spoke.uspTagline[language]}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: isIt ? 'Funzionalità' : 'Capabilities', path: '/funzionalita' },
          { name: theme.title[language], path: `/funzionalita/${theme.id}` },
          { name: spoke.h1[language].split(':')[0], path: `/funzionalita/${theme.id}/${spoke.slug}` }
        ]}
        faq={spoke.faqs.map((f) => ({
          question: f.question[language],
          answer: f.answer[language]
        }))}
        video={{
          name: spoke.h1[language],
          description: spoke.metaDescription[language],
          thumbnailUrl: `https://img.youtube.com/vi/${spoke.videoId}/maxresdefault.jpg`,
          uploadDate: '2026-08-01',
          embedUrl: `https://www.youtube.com/embed/${spoke.videoId}`
        }}
        software={{
          name: 'masterAnalyzer',
          description: 'Motore proprietario deterministico di analisi e orchestrazione campagne Google Ads e Meta per e-commerce.',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Cloud Native / Python'
        }}
      />

      <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* ── 1. Visual Breadcrumbs ────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-xs text-slate-400 relative z-10">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link to={`/${language}`} className="hover:text-white transition-colors">Home</Link></li>
            <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
            <li><Link to={`/${language}/funzionalita`} className="hover:text-white transition-colors">{isIt ? 'Funzionalità' : 'Capabilities'}</Link></li>
            <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
            <li><Link to={`/${language}/funzionalita/${theme.id}`} className="hover:text-white transition-colors truncate max-w-[200px] sm:max-w-none">{theme.title[language]}</Link></li>
            <li><ChevronRight className="w-3 h-3 text-slate-600" /></li>
            <li className="text-indigo-400 font-medium truncate max-w-[200px] sm:max-w-none">{spoke.h1[language].split(':')[0]}</li>
          </ol>
        </nav>

        {/* ── 2. Hero Header Block ─────────────────────────────────────────── */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-mono mb-6">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>masterAnalyzer · Playbook USP</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">{spoke.primaryKeyword}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {spoke.h1[language]}
            </h1>

            <p className="mt-5 text-xl sm:text-2xl text-indigo-200 font-medium leading-relaxed">
              {spoke.uspTagline[language]}
            </p>

            {/* Direct Qualified CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}&cap=${spoke.slug}`}
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-base text-white shadow-xl shadow-indigo-600/30 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <span>{isIt ? 'Richiedi l\'Audit a Raggi X su Questo Problema' : 'Request X-Ray Audit on This Problem'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-xs text-slate-400 space-y-0.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Lock className="w-3 h-3" />
                  <span>{isIt ? 'Accordo di Riservatezza Reciproco (NDA)' : 'Mutual NDA Protection'}</span>
                </div>
                <div>{isIt ? 'Spend attivo > 15.000 €/mese · Sola lettura API' : 'Active spend > €15,000/mo · Read-only API'}</div>
              </div>
            </div>
          </div>
        </header>

        {/* ── 3. Problem Narrative («La Storia del Problema») ───────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              {isIt ? 'Il Contesto Operativo' : 'Operational Context'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              {isIt ? 'Cosa Succede Davvero Dietro le Quinte' : 'What Truly Happens Behind The Scenes'}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {spoke.problemStory[language].map((paragraph, idx) => (
                <p key={idx} className="bg-slate-900/30 p-5 rounded-2xl border border-white/5">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Agency Blind Spot («Il Punto Cieco delle Agenzie Tradizionali») ── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="max-w-4xl bg-gradient-to-r from-amber-950/40 via-amber-950/20 to-slate-900/50 border border-amber-500/30 rounded-3xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-amber-200">
                  {isIt ? 'Il Punto Cieco delle Agenzie Tradizionali' : 'The Traditional Agency Blind Spot'}
                </h3>
                {spoke.blindSpot[language].map((line, idx) => (
                  <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. How We Do It («Come Lo Risolve masterAnalyzer: 3 Fasi») ──────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/5">
          <div className="max-w-4xl mb-10">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
              <Zap className="w-3.5 h-3.5" />
              {isIt ? 'METODOLOGIA INGEGNERISTICA' : 'ENGINEERING METHODOLOGY'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {isIt ? 'Come Lo Risolve masterAnalyzer in 3 Fasi' : 'How masterAnalyzer Solves This in 3 Steps'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              {isIt
                ? 'Nessuna supposizione arbitraria: esecuzione deterministica basata su codice proprietario e verifica algebrica.'
                : 'Zero arbitrary assumptions: deterministic execution powered by proprietary code and algebraic validation.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl">
            {spoke.howWeDoIt.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col justify-between relative group hover:border-indigo-500/40 transition-all shadow-lg"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 flex items-center justify-center font-mono font-bold text-base mb-4 group-hover:scale-105 transition-transform">
                    0{step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {step.title[language]}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description[language]}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                  {isIt ? `Fase ${step.step} di 3 · Esecuzione automatica` : `Phase ${step.step} of 3 · Automated`}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Deliverables List («Cosa Ricevi Con l'Audit») ───────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="max-w-4xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-white/10 rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                {spoke.whatYouGet.title[language]}
              </h2>
            </div>

            <div className="space-y-4">
              {spoke.whatYouGet.items[language].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Verified Proof Metric («La Prova Ingegneristica») ───────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="max-w-4xl bg-gradient-to-r from-indigo-950/60 via-slate-900/60 to-purple-950/40 border border-indigo-500/30 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {isIt ? 'PROVA INGEGNERISTICA CENSITA' : 'VERIFIED ENGINEERING BENCHMARK'}
            </div>

            <div className="text-5xl sm:text-7xl font-black tracking-tight text-white my-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
              {spoke.proofData.metric}
            </div>

            <p className="text-lg text-slate-300 font-medium max-w-xl mx-auto">
              {spoke.proofData.label[language]}
            </p>

            <div className="mt-4 inline-block px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-400">
              {spoke.proofData.sourceTimestamp}
            </div>
          </div>
        </section>

        {/* ── 8. Mandatory Limitation Section («Cosa NON Promettiamo») ────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="max-w-4xl bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-slate-400" />
              <h2 className="text-xl font-bold text-white">
                {isIt ? 'Cosa NON Promettiamo — Trasparenza Radicale' : 'What We Do NOT Promise — Radical Honesty'}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              {isIt
                ? 'Nel marketing abbondano promesse irrealistiche. Dichiariamo apertamente i limiti del software per proteggere la verità economica del tuo conto.'
                : 'Digital marketing is plagued by hype. We state strict software boundaries to protect the financial truth of your balance sheet.'}
            </p>

            <div className="space-y-3">
              {spoke.whatWeDoNotPromise[language].map((limitation, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-slate-500 font-mono text-xs font-bold mt-0.5">✕</span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {limitation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. YouTube Video Embed ────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
                <Play className="w-3.5 h-3.5" />
                {isIt ? 'VIDEO-LEZIONE ESPLICATIVA' : 'VIDEO EXPLAINER'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {isIt ? 'Guarda la Spiegazione Tecnica del Problema' : 'Watch The Technical Explanation'}
              </h2>
            </div>

            <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${spoke.videoId}?rel=0`}
                title={spoke.h1[language]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ── 10. FAQ Section ──────────────────────────────────────────────── */}
        {spoke.faqs.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
            <div className="max-w-4xl">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono mb-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  {isIt ? 'DOMANDE FREQUENTI' : 'FREQUENTLY ASKED QUESTIONS'}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {isIt ? 'Domande e Risposte su Questa Capacità' : 'Questions & Answers on This Capability'}
                </h2>
              </div>

              <div className="space-y-4">
                {spoke.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-white/5">
                    <h3 className="font-bold text-base text-white">{faq.question[language]}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{faq.answer[language]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 11. Related Spokes («Altre Capacità nel Cluster») ─────────────── */}
        {spoke.relatedSpokes.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 border-t border-white/5">
            <div className="max-w-4xl">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                {isIt ? 'Altre Capacità Correlate nel Cluster:' : 'Related Capabilities in This Cluster:'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {spoke.relatedSpokes.map((relSlug) => {
                  const relSpoke = theme.spokes.find((s) => s.slug === relSlug);
                  if (!relSpoke) return null;
                  return (
                    <Link
                      key={relSlug}
                      to={`/${language}/funzionalita/${theme.id}/${relSlug}`}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs text-indigo-400 font-mono mb-1">{relSpoke.primaryKeyword}</div>
                        <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {relSpoke.h1[language].split(':')[0]}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0 ml-2" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Final Conversion CTA ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-b from-indigo-950/40 to-slate-900/60 p-8 sm:p-12 rounded-3xl border border-indigo-500/30">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isIt ? 'Vuoi Verificare Questa USP sul Tuo Account?' : 'Want to Verify This Capability On Your Account?'}
            </h2>
            <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
              {isIt
                ? 'Concediamo l\'accesso in sola lettura via MCC: il software estrae le discrepanze e ti mostra dove l\'attuale gestione perde margine.'
                : 'Provision read-only MCC access: our software isolates variances and pinpoints where current management leaks margin.'}
            </p>
            <div className="mt-8">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}&cap=${spoke.slug}`}
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-base text-white shadow-xl shadow-indigo-600/20 transition-all inline-block active:scale-95"
              >
                {isIt ? 'Richiedi l\'Audit a Raggi X (Da 15k€/mese)' : 'Request Private Audit (From €15k/mo)'}
              </Link>
              <div className="text-xs text-slate-500 mt-3">
                {isIt ? 'Patto di Riservatezza Reciproco (NDA) · Nessuna modifica alle campagne attive' : 'Mutual NDA Protection · Zero edits to active campaigns'}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
