import React, { useState, useEffect } from 'react';
import { Users, ShoppingBag, Target, BarChart, Rocket, Phone, MessageCircle, ArrowRight, Layout, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import MetaTags from './MetaTags';
import { metaContent } from '../seo/metaContent';
import { CORE_SERVICES_IT, CORE_SERVICES_EN, VERIFIED_REVIEWS } from '../seo/schemaData';

const EASE = [0.22, 1, 0.36, 1];

export default function Services() {
  const { t, language } = useLanguage();
  const [orderedIndexes, setOrderedIndexes] = useState<number[]>([]);
  const navigate = useNavigate();

  const services = [
    {
      title: t('services.sections.ecommerce.title'),
      description: t('services.sections.ecommerce.description'),
      icon: ShoppingBag,
      features: t('services.sections.ecommerce.features'),
      path: '/services/ecommerce'
    },
    {
      title: t('services.sections.ads.title'),
      description: t('services.sections.ads.description'),
      icon: Target,
      features: t('services.sections.ads.features'),
      path: '/services/ads'
    },
    {
      title: t('services.sections.analytics.title'),
      description: t('services.sections.analytics.description'),
      icon: BarChart,
      features: t('services.sections.analytics.features'),
      path: '/services/analytics'
    },
    {
      title: t('services.sections.leadGeneration.title'),
      description: t('services.sections.leadGeneration.description'),
      icon: Users,
      features: t('services.sections.leadGeneration.features'),
      path: '/services/lead-generation'
    },
    {
      title: t('services.sections.instantWebsites.title'),
      description: t('services.sections.instantWebsites.description'),
      icon: Rocket,
      features: t('services.sections.instantWebsites.features'),
      path: '/instant-websites'
    },
    {
      title: t('services.sections.whatsapp.title'),
      description: t('services.sections.whatsapp.description'),
      icon: MessageCircle,
      features: t('services.sections.whatsapp.features'),
      whatsapp: true
    },
    {
      title: t('services.sections.landingPageProfessionali.title'),
      description: t('services.sections.landingPageProfessionali.description'),
      icon: Layout,
      features: t('services.sections.landingPageProfessionali.features'),
      path: '/landing-page-professionali',
      whatsapp: false
    },
    {
      title: t('services.sections.rispondiSubito.title'),
      description: t('services.sections.rispondiSubito.description'),
      icon: PhoneCall,
      features: t('services.sections.rispondiSubito.features'),
      path: '/services/rispondi-subito',
      whatsapp: false
    }
  ];

  // Natural, stable order
  useEffect(() => {
    setOrderedIndexes(Array.from({ length: services.length }, (_, i) => i));
  }, []);

  const handleCardClick = (service: any) => {
    if (service.whatsapp) {
      handleWhatsAppClick();
    } else if (service.path) {
      navigate(`/${language}${service.path}`);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Ciao! Vorrei avere maggiori informazioni sui vostri servizi.");
    window.open(`https://wa.me/393475012682?text=${message}`, '_blank');
  };

  const location = useLocation();
  const isServicesPage = location.pathname.endsWith('/services') || location.pathname.endsWith('/services/');
  const meta = metaContent.services[language];
  const serviceOffersList = language === 'it' ? CORE_SERVICES_IT : CORE_SERVICES_EN;

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
            { name: language === 'it' ? 'Servizi' : 'Services', path: '/services' }
          ]}
        />
      )}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: EASE }}
        className="shell"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="eyebrow mb-3"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.08 }}
            className="title-xl"
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.16 }}
            className="lede measure mt-4 mx-auto"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orderedIndexes.map((orderIndex) => {
              const service = services[orderIndex];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: EASE, delay: orderIndex * 0.05 }}
                  className="card card-hover cursor-pointer h-full"
                  onClick={() => handleCardClick(service)}
                >
                  <div>
                    <span className="icon-tile mb-5">
                      <service.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="title-lg mb-3">{service.title}</h3>
                    <p className="text-[0.95rem] text-ink-600 leading-relaxed">{service.description}</p>
                    {!service.whatsapp && (
                      <ul className="mt-4 space-y-2">
                        {service.features.map((feature: string, featureIndex: number) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, ease: EASE, delay: featureIndex * 0.04 }}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 mt-[3px]">
                              <svg className="h-4 w-4 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm text-ink-600">{feature}</p>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Footer row — CTA secondario dell'ex retro carta */}
                  <div className="mt-5 pt-4 border-t border-line">
                    <div className="flex flex-wrap items-center gap-3">
                      {service.whatsapp ? (
                        <a
                          href={`https://wa.me/393475012682?text=${encodeURIComponent("Ciao! Vorrei avere maggiori informazioni sui vostri servizi.")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="btn btn-ghost btn-sm"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Invia messaggio o vocale
                        </a>
                      ) : (
                        <>
                          <a
                            href="tel:800940213"
                            onClick={(e) => e.stopPropagation()}
                            className="btn btn-ghost btn-sm"
                          >
                            <Phone className="h-4 w-4" />
                            {t('nav.call')}
                          </a>
                          <Link
                            to={service.path}
                            onClick={(e) => e.stopPropagation()}
                            className="text-sm font-semibold text-accent-600 hover:text-accent-700"
                          >
                            Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-ink-600">
                      {t('services.available247')}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}