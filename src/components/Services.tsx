import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Users, ShoppingBag, Target, BarChart, Rocket, MessageCircle, ArrowRight, Layout, PhoneCall, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from './MetaTags';
import { metaContent } from '../seo/metaContent';
import { CORE_SERVICES_IT, CORE_SERVICES_EN, VERIFIED_REVIEWS } from '../seo/schemaData';

const EASE = [0.22, 1, 0.36, 1];
const WHATSAPP_HREF = 'https://wa.me/393475012682';

type ServiceCard = {
  key: string;
  icon: LucideIcon;
  path: string;
};

/**
 * Griglia dei servizi, divisa nei due percorsi del sito:
 * e-commerce (campagne ads) e PMI (lead generation + servizi di supporto).
 * Usata in home e come pagina /services.
 */
export default function Services() {
  const { t, language } = useLanguage();
  const isIt = language === 'it';
  const location = useLocation();
  const isServicesPage = location.pathname.endsWith('/services') || location.pathname.endsWith('/services/');
  const meta = metaContent.services[language];
  const serviceOffersList = isIt ? CORE_SERVICES_IT : CORE_SERVICES_EN;

  const features = (key: string): string[] => {
    const value = t(`services.sections.${key}.features`) as unknown;
    return Array.isArray(value) ? (value as string[]) : [];
  };

  const ecommerce: ServiceCard[] = [
    { key: 'ecommerce', icon: ShoppingBag, path: '/services/ecommerce' },
    { key: 'ads', icon: Target, path: '/services/ads' },
    { key: 'analytics', icon: BarChart, path: '/services/analytics' }
  ];

  const pmiMain: ServiceCard = { key: 'leadGeneration', icon: Users, path: '/services/lead-generation' };

  const pmiSupport: ServiceCard[] = [
    { key: 'landingPageProfessionali', icon: Layout, path: '/landing-page-professionali' },
    { key: 'instantWebsites', icon: Rocket, path: '/instant-websites' },
    { key: 'rispondiSubito', icon: PhoneCall, path: '/services/rispondi-subito' }
  ];

  const learnMore = isIt ? 'Scopri di più' : 'Learn more';

  const renderCard = (service: ServiceCard, index: number, withFeatures = true) => (
    <motion.div
      key={service.key}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: EASE, delay: index * 0.05 }}
      className="h-full"
    >
      <Link to={`/${language}${service.path}`} className="card card-hover flex h-full flex-col">
        <span className="icon-tile mb-5">
          <service.icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h4 className={withFeatures ? 'title-lg mb-3' : 'text-[1.05rem] font-semibold text-ink-900 leading-snug mb-2 break-words'}>
          {t(`services.sections.${service.key}.title`)}
        </h4>
        <p className={withFeatures ? 'text-[0.95rem] text-ink-600 leading-relaxed' : 'text-[0.875rem] text-ink-600 leading-relaxed'}>
          {t(`services.sections.${service.key}.description`)}
        </p>
        {withFeatures && (
          <ul className="mt-4 space-y-2">
            {features(service.key).map((feature) => (
              <li key={feature} className="flex items-start">
                <svg className="h-4 w-4 text-accent-600 flex-shrink-0 mt-[3px]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-3 text-sm text-ink-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-600">
          {learnMore}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>
    </motion.div>
  );

  return (
    <div className="section">
      {isServicesPage && (
        <MetaTags
          title={meta.title}
          description={meta.description}
          path="/services"
          serviceType={meta.serviceType}
          serviceDescription={meta.serviceDescription}
          serviceOffers={serviceOffersList}
          includeLocalBusiness={true}
          reviews={VERIFIED_REVIEWS}
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: isIt ? 'Servizi' : 'Services', path: '/services' }
          ]}
        />
      )}

      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-center"
        >
          <p className="eyebrow mb-3">{t('services.title')}</p>
          {isServicesPage ? (
            <h1 className="title-xl">{t('services.subtitle')}</h1>
          ) : (
            <h2 className="title-xl">{t('services.subtitle')}</h2>
          )}
          <p className="lede measure mt-4 mx-auto">{t('services.description')}</p>
        </motion.div>

        {/* Percorso e-commerce */}
        <div className="mt-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow mb-2">{isIt ? 'Per gli e-commerce' : 'For e-commerce'}</p>
              <h3 className="title-lg">
                {isIt
                  ? 'Campagne ads e-commerce gestite sul margine reale'
                  : 'E-commerce ad campaigns managed on real margin'}
              </h3>
            </div>
            <Link to={`/${language}/analisi-gratuita`} className="btn btn-primary btn-sm">
              {isIt ? 'Richiedi l’analisi gratuita del tuo e-commerce' : 'Request your free e-commerce analysis'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ecommerce.map((service, index) => renderCard(service, index))}
          </div>
        </div>

        {/* Percorso PMI */}
        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow mb-2">{isIt ? 'Per le PMI che cercano clienti' : 'For SMEs looking for customers'}</p>
              <h3 className="title-lg">
                {isIt
                  ? 'Lead generation e strumenti per convertire i contatti'
                  : 'Lead generation and tools to convert your leads'}
              </h3>
            </div>
            <Link to={`/${language}/lp/lead-generation`} className="btn btn-primary btn-sm">
              {isIt ? 'Richiedi l’analisi gratuita del tuo account' : 'Request your free account analysis'}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_2fr]">
            {renderCard(pmiMain, 0)}
            <div>
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.11em] text-ink-500 mb-3">
                {isIt ? 'Servizi di supporto' : 'Supporting services'}
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {pmiSupport.map((service, index) => renderCard(service, index + 1, false))}
              </div>
            </div>
          </div>
        </div>

        {/* Contatti diretti */}
        <div className="mt-14 flex flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:800940213" className="btn btn-ghost btn-sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              800 940 213
            </a>
            <a
              href={`${WHATSAPP_HREF}?text=${encodeURIComponent(isIt ? 'Ciao! Vorrei avere maggiori informazioni sui vostri servizi.' : 'Hi! I would like more information about your services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {isIt ? 'Scrivici su WhatsApp' : 'Message us on WhatsApp'}
            </a>
          </div>
          <p className="text-sm text-ink-600 measure">{t('services.available247')}</p>
        </div>
      </div>
    </div>
  );
}
