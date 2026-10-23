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

      <div className="min-h-screen font-sans">

        {/* ── Breadcrumb visual navigation ──────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="shell pt-8 text-xs text-ink-600">
          <ol className="flex items-center gap-2">
            <li><Link to={`/${language}`} className="navlink">Home</Link></li>
            <li><ChevronRight className="w-3 h-3 text-ink-400 flex-shrink-0" /></li>
            <li><Link to={`/${language}/funzionalita`} className="navlink">{isIt ? 'Funzionalità' : 'Capabilities'}</Link></li>
            <li><ChevronRight className="w-3 h-3 text-ink-400 flex-shrink-0" /></li>
            <li className="text-ink-900 font-medium truncate">{theme.title[language]}</li>
          </ol>
        </nav>

        {/* ── Hero / Intro Head Block ────────────────────────────────────── */}
        <header className="shell pt-12 pb-14">
          <div className="max-w-4xl">
            <div className="eyebrow inline-flex items-center gap-2 mb-4">
              <Cpu className="w-3.5 h-3.5" />
              {isIt ? 'TOPIC CLUSTER HUB' : 'THEMATIC CLUSTER HUB'}
            </div>

            <h1 className="title-xl hero-title">
              {theme.title[language]}
            </h1>

            <p className="lede measure mt-4 font-medium">
              {theme.tagline[language]}
            </p>

            <div className="mt-6 card card-quiet">
              <p>{theme.intro[language]}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}`}
                className="btn btn-primary"
              >
                {isIt ? 'Richiedi Audit a Raggi X su Questo Tema' : 'Request X-Ray Audit on This Topic'}
              </Link>
              <span className="text-xs text-ink-600">
                {isIt ? 'Protetto da NDA · Riservato a spend >15k€/mese' : 'Governed by NDA · Spend >€15k/mo'}
              </span>
            </div>
          </div>
        </header>

        {/* ── Symptoms Block («I Sintomi») ─────────────────────────────────── */}
        <section className="shell section border-t border-line">
          <div className="mb-8">
            <div className="eyebrow eyebrow-quiet inline-flex items-center gap-2 mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              {isIt ? 'DIAGNOSTICA PREVENTIVA' : 'PREVENTATIVE DIAGNOSTICS'}
            </div>
            <h2 className="title-xl mb-3">
              {isIt ? 'I Sintomi: Ti succede che…' : 'The Symptoms: Does this happen to you?'}
            </h2>
            <p className="text-sm text-ink-600 mt-1">
              {isIt
                ? 'Se riconosci uno di questi scenari, il problema non è il mercato ma la qualità del dato.'
                : 'If you recognize these scenarios, the issue is data integrity, not customer demand.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {theme.symptoms.map((symptom, idx) => (
              <div
                key={idx}
                className="card card-hover card-quiet flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-line bg-white text-ink-900 flex items-center justify-center text-xs font-semibold mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {symptom.text[language]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-line flex justify-end">
                  <Link
                    to={`/${language}/funzionalita/${theme.id}/${symptom.spokeSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
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
        <section className="shell section border-t border-line">
          <div className="mb-8">
            <h2 className="title-xl mb-3">
              {isIt ? 'Le Capacità di masterAnalyzer per Questo Cluster' : 'masterAnalyzer Capabilities in This Cluster'}
            </h2>
            <p className="text-sm text-ink-600 mt-1">
              {isIt
                ? 'Ogni capacità è un playbook operativo codificato nel nostro motore deterministico.'
                : 'Each capability is an operational playbook encoded in our deterministic engine.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {theme.spokes.map((spoke) => (
              <div
                key={spoke.slug}
                className="card card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-ink-500 mb-2">
                    <span className="text-accent-600">{spoke.primaryKeyword}</span>
                    <span>{spoke.proofData.metric} {isIt ? 'metriche' : 'metrics'}</span>
                  </div>
                  <h3 className="text-[1.05rem] font-semibold transition-colors">
                    <Link to={`/${language}/funzionalita/${theme.id}/${spoke.slug}`}>
                      {spoke.h1[language]}
                    </Link>
                  </h3>
                  <p className="text-sm text-ink-600 mt-2 leading-relaxed">
                    {spoke.uspTagline[language]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <Link
                    to={`/${language}/funzionalita/${theme.id}/${spoke.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    {isIt ? 'Approfondisci la capacità' : 'Read full capability'} →
                  </Link>
                  <Link
                    to={`/${language}/casi-e-audit?tema=${theme.id}&cap=${spoke.slug}`}
                    className="text-xs font-medium text-ink-600 hover:text-ink-900 transition-colors"
                  >
                    {isIt ? 'Audit su questa USP' : 'Audit this USP'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Video Overview Section ─────────────────────────────────────── */}
        <section className="shell section border-t border-line">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="eyebrow inline-flex items-center gap-2 mb-2">
                <Play className="w-3.5 h-3.5" />
                {isIt ? 'VIDEO-LEZIONE DALLA COLLANA MANIFESTO' : 'MANIFESTO VIDEO INSIGHT'}
              </div>
              <h2 className="title-xl mb-3">
                {isIt ? 'Ascolta la Spiegazione Tecnica' : 'Watch The Technical Breakdown'}
              </h2>
              <p className="text-sm text-ink-600 mt-3 leading-relaxed">
                {isIt
                  ? 'Il fondatore Andrea Falzin illustra il principio matematico e gli scenari reali in cui le agenzie tradizionali sbagliano la lettura dei dati.'
                  : 'Founder Andrea Falzin breaks down the mathematical foundation and real-world scenarios where standard agencies misread telemetry.'}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="media aspect-video w-full">
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
          <section className="shell section border-t border-line">
            <div className="mb-8">
              <div className="eyebrow inline-flex items-center gap-2 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                {isIt ? 'DOMANDE FREQUENTI' : 'FREQUENTLY ASKED QUESTIONS'}
              </div>
              <h2 className="title-xl mb-3">
                {isIt ? 'FAQ su Questo Cluster' : 'Cluster FAQs'}
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {theme.faqs.map((faq, idx) => (
                <div key={idx} className="card card-quiet">
                  <h3 className="text-[1.05rem] font-semibold mb-2">{faq.question[language]}</h3>
                  <p className="text-sm text-ink-600 mt-2 leading-relaxed">{faq.answer[language]}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Adjacent Themes ────────────────────────────────────────────── */}
        {theme.adjacentThemes.length > 0 && (
          <section className="shell section border-t border-line">
            <h3 className="eyebrow eyebrow-quiet mb-4">
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
                    className="chip"
                  >
                    → {adjTheme.title[language]}
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ── Final Conversion CTA ───────────────────────────────────────── */}
        <section className="shell section text-center">
          <div className="card card-quiet max-w-3xl mx-auto">
            <h2 className="title-xl mb-3">
              {isIt ? 'Verifica il Tuo Account su Questo Tema' : 'Audit Your Account on This Cluster'}
            </h2>
            <p className="lede measure mx-auto mt-3">
              {isIt
                ? 'Prenota un audit a Raggi X: colleghiamo l\'account in sola lettura e in pochi giorni evidenziamo le discrepanze protette da patto di riservatezza.'
                : 'Book an X-Ray audit: we connect read-only and pinpoint discrepancies under mutual non-disclosure agreement within days.'}
            </p>
            <div className="mt-8">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}`}
                className="btn btn-primary"
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
