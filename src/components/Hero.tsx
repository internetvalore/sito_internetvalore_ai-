import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const rise = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const { language } = useLanguage();

  const claimCards = language === 'it'
    ? [
        { headline: 'Riconciliazione Carrello vs GA4.', cta: 'Ordini reali Shopify & Woo →', to: `/${language}/services/ecommerce` },
        { headline: '1M+ righe di codice · 482 tool LLM.', cta: 'Esplora masterAnalyzer →', to: `/${language}/la-nostra-tecnologia-ai` },
        { headline: 'POAS over ROAS. Margine Reale.', cta: 'Stop a ROAS gonfiati →', to: `/${language}/casi-e-audit` },
      ]
    : [
        { headline: 'Cart vs GA4 Reconciliation.', cta: 'Real Shopify & Woo orders →', to: `/${language}/services/ecommerce` },
        { headline: '1M+ lines of code · 482 LLM tools.', cta: 'Explore masterAnalyzer →', to: `/${language}/la-nostra-tecnologia-ai` },
        { headline: 'POAS over ROAS. Real Margin.', cta: 'Stop vanity ROAS →', to: `/${language}/casi-e-audit` },
      ];

  const chipsIT = [
    { label: 'Lead Generation Riconciliata', to: `/${language}/services/lead-generation` },
    { label: 'E-commerce POAS over ROAS', to: `/${language}/services/ecommerce` },
    { label: 'Controllo Cannibalizzazione Brand', to: `/${language}/services/ads` },
    { label: '1M+ Righe Codice · 482 Tool LLM', to: `/${language}/la-nostra-tecnologia-ai` },
  ];

  return (
    <section className="hero-premium">
      <div className="shell">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center py-14 lg:py-20">
          <motion.div initial="hidden" animate="visible">
            <motion.p variants={rise} className="eyebrow mb-4">
              {language === 'it'
                ? 'Outsourcing Gestione Campagne E-commerce · Google Partner Certificato'
                : 'Outsourced E-commerce Campaign Management · Certified Google Partner'}
            </motion.p>

            <motion.h1 variants={rise} className="title-xl hero-title mb-5">
              <span className="block">{language === 'it' ? 'Il tuo e-commerce vende.' : 'Your e-commerce sells.'}</span>
              <span className="block text-accent-600">
                {language === 'it'
                  ? 'Ma quanto margine ti resta a fine mese?'
                  : 'How much real margin stays in your bank?'}
              </span>
            </motion.h1>

            <motion.p variants={rise} className="lede measure mb-8">
              {language === 'it'
                ? 'Orchestriamo in outsourcing le tue campagne Google Ads, Shopping, Performance Max e Meta con masterAnalyzer: oltre 1.000.000 di righe censite (775k+ Python, 482 tool LLM e 293 playbook operativi) per riconciliare gli ordini del carrello, bloccare la cannibalizzazione del brand e ottimizzare sul profitto reale (POAS) netto.'
                : 'We orchestrate your Google Ads, Shopping, PMax and Meta campaigns in outsourcing with masterAnalyzer: over 1,000,000 total census lines (775k+ Python, 482 LLM tools and 293 execution playbooks) reconciling cart orders, eliminating brand cannibalization, and optimizing strictly on net profit (POAS).'}
            </motion.p>

            <motion.div variants={rise} className="flex flex-wrap gap-3 mb-10">
              <Link to={`/${language}/casi-e-audit`} className="btn btn-primary">
                {language === 'it' ? 'Richiedi Audit a Raggi X (Da 15k€/mese)' : 'Request X-Ray Audit (From €15k/mo)'}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to={`/${language}/services/ecommerce`} className="btn btn-ghost">
                {language === 'it' ? 'Come Funziona l’Outsourcing' : 'How Outsourcing Works'}
              </Link>
            </motion.div>

            <motion.div variants={rise}>
              <p className="eyebrow eyebrow-quiet mb-4">
                {language === 'it'
                  ? 'La tecnologia che riconcilia i tuoi conti'
                  : 'The technology that reconciles your numbers'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {claimCards.map((card, i) => (
                  <Link key={i} to={card.to} className="card card-hover block">
                    <p className="text-[0.95rem] font-semibold text-ink-900 leading-snug mb-2">{card.headline}</p>
                    <p className="text-[0.85rem] font-semibold text-accent-600">{card.cta}</p>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div variants={rise} className="mt-10 pt-7 border-t border-line">
              <h2 className="title-lg mb-3">
                {language === 'it'
                  ? 'Outsourcing Gestione Campagne E-commerce & Algoritmi POAS'
                  : 'Outsourced E-commerce Campaign Management & POAS Algorithms'}
              </h2>
              <p className="lede measure mb-4">
                {language === 'it' ? (
                  <>
                    Internet Valore affianca e-commerce e aziende B2B nella{' '}
                    <Link to={`/${language}/services`} className="text-accent-700 font-medium hover:text-accent-800">
                      gestione campagne pubblicitarie in outsourcing
                    </Link>{' '}
                    (Google Ads e Meta Ads) con un approccio matematico su dati reali. Grazie alla nostra{' '}
                    <Link to={`/${language}/la-nostra-tecnologia-ai`} className="text-accent-700 font-medium hover:text-accent-800">
                      tecnologia proprietaria masterAnalyzer
                    </Link>{' '}
                    (oltre 1.000.000 di righe censite, 775k+ Python e 482 tool AI), forniamo servizi avanzati di{' '}
                    <Link to={`/${language}/services/lead-generation`} className="text-accent-700 font-medium hover:text-accent-800">
                      lead generation riconciliata col CRM
                    </Link>{' '}
                    ed ottimizzazione{' '}
                    <Link to={`/${language}/services/ecommerce`} className="text-accent-700 font-medium hover:text-accent-800">
                      E-commerce sul profitto (POAS) netto
                    </Link>. Scopri il profilo di{' '}
                    <Link to={`/${language}/about`} className="text-accent-700 font-medium hover:text-accent-800">
                      Andrea Falzin (Founder &amp; CEO)
                    </Link>{' '}
                    e le{' '}
                    <Link to={`/${language}/testimonials`} className="text-accent-700 font-medium hover:text-accent-800">
                      recensioni verificate dei clienti
                    </Link>.
                  </>
                ) : (
                  <>
                    Internet Valore partners with e-commerce and B2B companies in{' '}
                    <Link to={`/${language}/services`} className="text-accent-700 font-medium hover:text-accent-800">
                      outsourced campaign management
                    </Link>{' '}
                    (Google &amp; Meta Ads) using a mathematical real-data framework. Powered by our{' '}
                    <Link to={`/${language}/la-nostra-tecnologia-ai`} className="text-accent-700 font-medium hover:text-accent-800">
                      proprietary masterAnalyzer technology
                    </Link>{' '}
                    (over 1,000,000 total lines, 775k+ Python and 482 AI tools), we deliver{' '}
                    <Link to={`/${language}/services/lead-generation`} className="text-accent-700 font-medium hover:text-accent-800">
                      CRM-reconciled lead generation
                    </Link>{' '}
                    and{' '}
                    <Link to={`/${language}/services/ecommerce`} className="text-accent-700 font-medium hover:text-accent-800">
                      E-commerce POAS net profit optimization
                    </Link>. Learn more about{' '}
                    <Link to={`/${language}/about`} className="text-accent-700 font-medium hover:text-accent-800">
                      Andrea Falzin (Founder &amp; CEO)
                    </Link>{' '}
                    and read our{' '}
                    <Link to={`/${language}/testimonials`} className="text-accent-700 font-medium hover:text-accent-800">
                      verified client reviews
                    </Link>.
                  </>
                )}
              </p>
              <div className="flex flex-wrap gap-2">
                {chipsIT.map((chip, i) => (
                  <Link key={i} to={chip.to} className="chip">
                    {chip.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative"
          >
            <div className="media">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                alt={language === 'it'
                  ? 'Internet Valore - Marketing Digitale e Lead Generation a Milano'
                  : 'Internet Valore - Digital Marketing and Lead Generation in Milan'}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 card">
              <p className="eyebrow mb-2">Deep Search</p>
              <p className="text-[1.05rem] font-semibold text-ink-900 leading-snug">
                {language === 'it' ? 'Dati reali, conversioni reali' : 'Real data, real conversions'}
              </p>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
