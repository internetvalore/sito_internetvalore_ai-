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

      <div className="min-h-screen font-sans">

        {/* ── 1. Visual Breadcrumbs ────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="shell pt-8 text-xs text-ink-600">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link to={`/${language}`} className="navlink">Home</Link></li>
            <li><ChevronRight className="w-3 h-3 text-ink-400 flex-shrink-0" /></li>
            <li><Link to={`/${language}/funzionalita`} className="navlink">{isIt ? 'Funzionalità' : 'Capabilities'}</Link></li>
            <li><ChevronRight className="w-3 h-3 text-ink-400 flex-shrink-0" /></li>
            <li><Link to={`/${language}/funzionalita/${theme.id}`} className="navlink truncate max-w-[200px] sm:max-w-none">{theme.title[language]}</Link></li>
            <li><ChevronRight className="w-3 h-3 text-ink-400 flex-shrink-0" /></li>
            <li className="text-ink-900 font-medium truncate max-w-[200px] sm:max-w-none">{spoke.h1[language].split(':')[0]}</li>
          </ol>
        </nav>

        {/* ── 2. Hero Header Block ─────────────────────────────────────────── */}
        <header className="shell pt-12 pb-16">
          <div className="max-w-4xl">
            <div className="eyebrow inline-flex items-center gap-2 mb-6">
              <Cpu className="w-3.5 h-3.5" />
              <span>masterAnalyzer · Playbook USP</span>
              <span className="text-ink-400">|</span>
              <span className="text-ink-600">{spoke.primaryKeyword}</span>
            </div>

            <h1 className="title-xl hero-title">
              {spoke.h1[language]}
            </h1>

            <p className="lede measure mt-5 font-medium">
              {spoke.uspTagline[language]}
            </p>

            {/* Direct Qualified CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}&cap=${spoke.slug}`}
                className="btn btn-primary"
              >
                <span>{isIt ? 'Richiedi l\'Audit a Raggi X su Questo Problema' : 'Request X-Ray Audit on This Problem'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-xs text-ink-600 space-y-0.5">
                <div className="flex items-center gap-1.5 text-ink-900 font-medium">
                  <Lock className="w-3 h-3" />
                  <span>{isIt ? 'Accordo di Riservatezza Reciproco (NDA)' : 'Mutual NDA Protection'}</span>
                </div>
                <div>{isIt ? 'Spend attivo > 15.000 €/mese · Sola lettura API' : 'Active spend > €15,000/mo · Read-only API'}</div>
              </div>
            </div>
          </div>
        </header>

        {/* ── 3. Problem Narrative («La Storia del Problema») ───────────────── */}
        <section className="shell section border-t border-line">
          <div className="max-w-4xl">
            <div className="eyebrow eyebrow-quiet inline-flex items-center gap-2 mb-3">
              <Layers className="w-3.5 h-3.5" />
              {isIt ? 'Il Contesto Operativo' : 'Operational Context'}
            </div>
            <h2 className="title-xl mb-6">
              {isIt ? 'Cosa Succede Davvero Dietro le Quinte' : 'What Truly Happens Behind The Scenes'}
            </h2>

            <div className="space-y-4 text-[0.95rem] text-ink-600 leading-relaxed font-normal">
              {spoke.problemStory[language].map((paragraph, idx) => (
                <p key={idx} className="card card-quiet">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Agency Blind Spot («Il Punto Cieco delle Agenzie Tradizionali») ── */}
        <section className="shell section section-quiet">
          <div className="max-w-4xl card card-quiet">
            <div className="flex items-start gap-4">
              <div className="icon-tile shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-[1.05rem] font-semibold mb-1">
                  {isIt ? 'Il Punto Cieco delle Agenzie Tradizionali' : 'The Traditional Agency Blind Spot'}
                </h3>
                {spoke.blindSpot[language].map((line, idx) => (
                  <p key={idx} className="text-ink-600 text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. How We Do It («Come Lo Risolve masterAnalyzer: 3 Fasi») ──────── */}
        <section className="shell section border-t border-line">
          <div className="max-w-4xl mb-10">
            <div className="eyebrow inline-flex items-center gap-2 mb-2">
              <Zap className="w-3.5 h-3.5" />
              {isIt ? 'METODOLOGIA INGEGNERISTICA' : 'ENGINEERING METHODOLOGY'}
            </div>
            <h2 className="title-xl">
              {isIt ? 'Come Lo Risolve masterAnalyzer in 3 Fasi' : 'How masterAnalyzer Solves This in 3 Steps'}
            </h2>
            <p className="text-sm text-ink-600 mt-2">
              {isIt
                ? 'Nessuna supposizione arbitraria: esecuzione deterministica basata su codice proprietario e verifica algebrica.'
                : 'Zero arbitrary assumptions: deterministic execution powered by proprietary code and algebraic validation.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-7xl">
            {spoke.howWeDoIt.map((step) => (
              <div
                key={step.step}
                className="card card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="icon-tile mb-4">
                    0{step.step}
                  </div>
                  <h3 className="text-[1.05rem] font-semibold mb-2 transition-colors">
                    {step.title[language]}
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {step.description[language]}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-line text-xs text-ink-500">
                  {isIt ? `Fase ${step.step} di 3 · Esecuzione automatica` : `Phase ${step.step} of 3 · Automated`}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Deliverables List («Cosa Ricevi Con l'Audit») ───────────────── */}
        <section className="shell section border-t border-line">
          <div className="max-w-4xl card card-quiet">
            <div className="flex items-center gap-3 mb-6">
              <div className="icon-tile">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="title-lg">
                {spoke.whatYouGet.title[language]}
              </h2>
            </div>

            <div className="space-y-4">
              {spoke.whatYouGet.items[language].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-accent-600 shrink-0 mt-0.5" />
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. Verified Proof Metric («La Prova Ingegneristica») ───────────── */}
        <section className="shell section border-t border-line">
          <div className="max-w-4xl card card-quiet text-center">
            <div className="eyebrow inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {isIt ? 'PROVA INGEGNERISTICA CENSITA' : 'VERIFIED ENGINEERING BENCHMARK'}
            </div>

            <div className="title-xl my-3">
              {spoke.proofData.metric}
            </div>

            <p className="text-[1.05rem] font-medium text-ink-900 max-w-xl mx-auto">
              {spoke.proofData.label[language]}
            </p>

            <div className="mt-4 chip">
              {spoke.proofData.sourceTimestamp}
            </div>
          </div>
        </section>

        {/* ── 8. Mandatory Limitation Section («Cosa NON Promettiamo») ────────── */}
        <section className="shell section border-t border-line">
          <div className="max-w-4xl card card-quiet">
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-5 h-5 text-ink-500" />
              <h2 className="text-[1.05rem] font-semibold">
                {isIt ? 'Cosa NON Promettiamo — Trasparenza Radicale' : 'What We Do NOT Promise — Radical Honesty'}
              </h2>
            </div>
            <p className="text-xs text-ink-600 mb-6">
              {isIt
                ? 'Nel marketing abbondano promesse irrealistiche. Dichiariamo apertamente i limiti del software per proteggere la verità economica del tuo conto.'
                : 'Digital marketing is plagued by hype. We state strict software boundaries to protect the financial truth of your balance sheet.'}
            </p>

            <div className="space-y-3">
              {spoke.whatWeDoNotPromise[language].map((limitation, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-line">
                  <span className="text-ink-500 text-xs font-semibold mt-0.5">✕</span>
                  <p className="text-ink-600 text-sm leading-relaxed">
                    {limitation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. YouTube Video Embed ────────────────────────────────────────── */}
        <section className="shell section border-t border-line">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="eyebrow inline-flex items-center gap-2 mb-2">
                <Play className="w-3.5 h-3.5" />
                {isIt ? 'VIDEO-LEZIONE ESPLICATIVA' : 'VIDEO EXPLAINER'}
              </div>
              <h2 className="title-xl mb-3">
                {isIt ? 'Guarda la Spiegazione Tecnica del Problema' : 'Watch The Technical Explanation'}
              </h2>
            </div>

            <div className="media aspect-video w-full">
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
          <section className="shell section border-t border-line">
            <div className="max-w-4xl">
              <div className="mb-6">
                <div className="eyebrow inline-flex items-center gap-2 mb-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  {isIt ? 'DOMANDE FREQUENTI' : 'FREQUENTLY ASKED QUESTIONS'}
                </div>
                <h2 className="title-xl mb-3">
                  {isIt ? 'Domande e Risposte su Questa Capacità' : 'Questions & Answers on This Capability'}
                </h2>
              </div>

              <div className="space-y-4">
                {spoke.faqs.map((faq, idx) => (
                  <div key={idx} className="card card-quiet">
                    <h3 className="text-[1.05rem] font-semibold mb-2">{faq.question[language]}</h3>
                    <p className="text-sm text-ink-600 mt-2 leading-relaxed">{faq.answer[language]}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 11. Related Spokes («Altre Capacità nel Cluster») ─────────────── */}
        {spoke.relatedSpokes.length > 0 && (
          <section className="shell section border-t border-line">
            <div className="max-w-4xl">
              <h3 className="eyebrow eyebrow-quiet mb-4">
                {isIt ? 'Altre Capacità Correlate nel Cluster:' : 'Related Capabilities in This Cluster:'}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {spoke.relatedSpokes.map((relSlug) => {
                  const relSpoke = theme.spokes.find((s) => s.slug === relSlug);
                  if (!relSpoke) return null;
                  return (
                    <Link
                      key={relSlug}
                      to={`/${language}/funzionalita/${theme.id}/${relSlug}`}
                      className="card card-hover flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs text-accent-600 mb-1">{relSpoke.primaryKeyword}</div>
                        <div className="text-sm font-semibold transition-colors">
                          {relSpoke.h1[language].split(':')[0]}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-ink-500 group-hover:text-accent-600 transition-colors shrink-0 ml-2" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Final Conversion CTA ─────────────────────────────────────────── */}
        <section className="shell section text-center">
          <div className="card card-quiet max-w-3xl mx-auto">
            <h2 className="title-xl mb-3">
              {isIt ? 'Vuoi Verificare Questa USP sul Tuo Account?' : 'Want to Verify This Capability On Your Account?'}
            </h2>
            <p className="lede measure mx-auto mt-3">
              {isIt
                ? 'Concediamo l\'accesso in sola lettura via MCC: il software estrae le discrepanze e ti mostra dove l\'attuale gestione perde margine.'
                : 'Provision read-only MCC access: our software isolates variances and pinpoints where current management leaks margin.'}
            </p>
            <div className="mt-8">
              <Link
                to={`/${language}/casi-e-audit?tema=${theme.id}&cap=${spoke.slug}`}
                className="btn btn-primary inline-block"
              >
                {isIt ? 'Richiedi l\'Audit a Raggi X (Da 15k€/mese)' : 'Request Private Audit (From €15k/mo)'}
              </Link>
              <div className="text-xs text-ink-600 mt-3">
                {isIt ? 'Patto di Riservatezza Reciproco (NDA) · Nessuna modifica alle campagne attive' : 'Mutual NDA Protection · Zero edits to active campaigns'}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
