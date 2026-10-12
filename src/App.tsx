import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import MetaTags from './components/MetaTags';
import { metaContent } from './seo/metaContent';
import { VERIFIED_REVIEWS, HOMEPAGE_FAQS, HOMEPAGE_FAQS_EN } from './seo/schemaData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Stats from './components/Stats';
import Process from './components/Process';
import FeaturedVideo from './components/FeaturedVideo';
import ErrorBoundary from './components/ErrorBoundary';

// Below-the-fold homepage components lazy-loaded
const CapabilitiesSlider = lazy(() => import('./components/CapabilitiesSlider'));
const TestimonialsSlider = lazy(() => import('./components/TestimonialsSlider'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const NavigationGuide = lazy(() => import('./components/NavigationGuide'));
const QualifiedDossierSection = lazy(() => import('./components/QualifiedDossierSection'));

// Page level lazy-loaded components
const ContactPage = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Specializations = lazy(() => import('./pages/Specializations'));
const InstantWebsites = lazy(() => import('./pages/InstantWebsites'));
const LeadGeneration = lazy(() => import('./pages/services/LeadGeneration'));
const Ecommerce = lazy(() => import('./pages/services/Ecommerce'));
const Ads = lazy(() => import('./pages/services/Ads'));
const Analytics = lazy(() => import('./pages/services/Analytics'));
const LandingPageProfessionali = lazy(() => import('./pages/services/LandingPageProfessionali'));
const RispondiSubito = lazy(() => import('./pages/services/RispondiSubito'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const LandingPage = lazy(() => import('./pages/landing_page/LandingPage'));
const GoogleAdsLandingPage = lazy(() => import('./pages/landing_page/GoogleAdsLandingPage'));
const LeadGenerationLP = lazy(() => import('./pages/lp/LeadGenerationLP'));
const OutsourcingEcommerceLP = lazy(() => import('./pages/lp/OutsourcingEcommerceLP'));
const OutsourcingEcommerceGrazie = lazy(() => import('./pages/lp/OutsourcingEcommerceGrazie'));
const AIPlatform = lazy(() => import('./pages/AIPlatform'));

// Solutions Pages lazy-loaded
const SolutionsHub = lazy(() => import('./pages/solutions/SolutionsHub'));
const TitolarePmi = lazy(() => import('./pages/solutions/TitolarePmi'));
const AccountManager = lazy(() => import('./pages/solutions/AccountManager'));
const MediaBuyerGoogle = lazy(() => import('./pages/solutions/MediaBuyerGoogle'));
const MediaBuyerMeta = lazy(() => import('./pages/solutions/MediaBuyerMeta'));
const SpecialistaSeo = lazy(() => import('./pages/solutions/SpecialistaSeo'));
const MeasurementEngineer = lazy(() => import('./pages/solutions/MeasurementEngineer'));
const OperatoreEcommerce = lazy(() => import('./pages/solutions/OperatoreEcommerce'));
const AdvertiserSenzaTracking = lazy(() => import('./pages/solutions/AdvertiserSenzaTracking'));
const CostruttoreSistema = lazy(() => import('./pages/solutions/CostruttoreSistema'));

// Manifesto & Video pages lazy-loaded
const Manifesto = lazy(() => import('./pages/manifesto/Manifesto'));
const VideoDetail = lazy(() => import('./pages/manifesto/VideoDetail'));

// Features & Capability pages lazy-loaded
const FeaturesHub = lazy(() => import('./pages/features/FeaturesHub'));
const ThroughPage = lazy(() => import('./pages/features/ThroughPage'));
const LandingUspPage = lazy(() => import('./pages/features/LandingUspPage'));

// Loading Fallback Component
const PageLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center p-8">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-xs font-semibold text-slate-400">Caricamento...</span>
    </div>
  </div>
);


function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  const location = useLocation();
  const { language } = useLanguage();
  const meta = metaContent.home[language];
  const isFirstRender = useRef(true);

  // Global GTM Event Tracking
  useEffect(() => {
    // UUID v4 Generator
    const generateUUIDv4 = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    // dataLayer Push Helper
    const pushToDataLayer = (eventName: string, extraParams: Record<string, any> = {}) => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      const pathParts = location.pathname.split('/');
      const lang = pathParts[1] === 'en' ? 'en' : 'it';
      const page_path = location.pathname;
      const service_context = (pathParts[2] === 'services' && pathParts[3]) ? pathParts[3] : null;
      const event_id = generateUUIDv4();

      (window as any).dataLayer.push({
        event: eventName,
        event_id,
        lang,
        page_path,
        service_context,
        ...extraParams
      });
    };

    // Page view tracking (skip first render)
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      // Defer push slightly to guarantee document.title has been updated by MetaTags component
      const timer = setTimeout(() => {
        pushToDataLayer('spa_page_view', {
          page_title: document.title
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    // UUID v4 Generator
    const generateUUIDv4 = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    // dataLayer Push Helper
    const pushToDataLayer = (eventName: string, extraParams: Record<string, any> = {}) => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      const pathParts = location.pathname.split('/');
      const lang = pathParts[1] === 'en' ? 'en' : 'it';
      const page_path = location.pathname;
      const service_context = (pathParts[2] === 'services' && pathParts[3]) ? pathParts[3] : null;
      const event_id = generateUUIDv4();

      (window as any).dataLayer.push({
        event: eventName,
        event_id,
        lang,
        page_path,
        service_context,
        ...extraParams
      });
    };

    // Helper to identify link location
    const getLinkLocation = (element: HTMLElement): string => {
      let parent: HTMLElement | null = element;
      while (parent) {
        const id = (parent.id || '').toLowerCase();
        const className = (typeof parent.className === 'string' ? parent.className : '').toLowerCase();
        const tagName = parent.tagName.toLowerCase();

        if (tagName === 'header' || id.includes('header') || id.includes('nav') || className.includes('header') || className.includes('nav')) {
          return 'header';
        }
        if (tagName === 'footer' || id.includes('footer') || className.includes('footer')) {
          return 'footer';
        }
        if (id.includes('sticky') || className.includes('sticky') || id.includes('floating') || className.includes('floating') || className.includes('fixed') || id.includes('navigation-guide') || className.includes('navigation-guide')) {
          return 'sticky';
        }
        parent = parent.parentElement;
      }
      return 'body';
    };

    // Document-level Click Listener for tel, WhatsApp and booking links
    const handleGlobalClick = (event: MouseEvent) => {
      let target = event.target as HTMLElement | null;
      while (target && target.tagName !== 'A') {
        target = target.parentElement;
      }

      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Phone link click
      if (href.startsWith('tel:')) {
        const phoneNumber = href.substring(4).trim();
        pushToDataLayer('phone_click', {
          phone_number: phoneNumber,
          link_location: getLinkLocation(target)
        });
      }
      // WhatsApp link click
      else if (href.includes('wa.me') || href.includes('api.whatsapp.com') || href.includes('whatsapp.com')) {
        pushToDataLayer('whatsapp_click', {
          link_location: getLinkLocation(target)
        });
      }
      // Booking link click
      else if (href.includes('calendar.app.google') || href.includes('calendly.com')) {
        pushToDataLayer('booking_click', {
          link_location: getLinkLocation(target)
        });
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, [location.pathname]);

  // Get language from URL
  const urlLang = location.pathname.split('/')[1];
  const isValidLang = urlLang === 'it' || urlLang === 'en';

  // Handle root path
  if (location.pathname === '/') {
    return <Navigate to={`/${language}/${location.search}${location.hash}`} replace />;
  }

  // Handle paths without language prefix
  if (!isValidLang && location.pathname !== '/') {
    return <Navigate to={`/${language}${location.pathname}${location.search}${location.hash}`} replace />;
  }

  const isLandingPage = location.pathname.includes('/lp/');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {location.pathname === `/${language}` && (
        <MetaTags
          title={meta.title}
          description={meta.description}
          path="/"
          includeLocalBusiness={true}
          reviews={VERIFIED_REVIEWS}
          faq={language === 'it' ? HOMEPAGE_FAQS : HOMEPAGE_FAQS_EN}
          breadcrumbs={[
            { name: 'Home', path: '/' }
          ]}
        />
      )}
      {!isLandingPage && <Navbar />}
      <ScrollHandler />
      <div className={`flex-grow ${isLandingPage ? '' : 'pt-16'}`}>
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes location={location}>
              {/* Base routes with language prefix */}
              <Route path="/:lang" element={
                <>
                  <Hero />
                  <FeaturedVideo />
                  <Methodology />
                  <Suspense fallback={<div className="py-12 flex justify-center"><div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
                    <CapabilitiesSlider />
                  </Suspense>
                  <Stats />
                  <Services />
                  <Process />
                  <Suspense fallback={<div className="py-12 flex justify-center"><div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
                    <QualifiedDossierSection />
                    <TestimonialsSlider />
                    <FAQ />
                    <Contact />
                  </Suspense>
                </>
              } />

              {/* Service routes */}
              <Route path="/:lang/services" element={<Services />} />
              <Route path="/:lang/services/lead-generation" element={<LeadGeneration />} />
              <Route path="/:lang/services/ecommerce" element={<Ecommerce />} />
              <Route path="/:lang/services/ads" element={<Ads />} />
              <Route path="/:lang/services/analytics" element={<Analytics />} />
              <Route path="/:lang/services/rispondi-subito" element={<RispondiSubito />} />

              {/* Dedicated Landing Pages (Isolated, Zero-Exit) */}
              <Route path="/:lang/lp/lead-generation" element={<LeadGenerationLP />} />
              <Route path="/:lang/lp/outsourcing-campagne-ecommerce" element={<OutsourcingEcommerceLP />} />
              <Route path="/:lang/lp/outsourcing-campagne-ecommerce/grazie" element={<OutsourcingEcommerceGrazie />} />

              {/* Qualified Case & Audit Route */}
              <Route path="/:lang/casi-e-audit" element={<QualifiedDossierSection />} />
              <Route path="/:lang/dossier-riservato" element={<QualifiedDossierSection />} />

              {/* Other routes */}
              <Route path="/:lang/instant-websites" element={<InstantWebsites />} />
              <Route path="/:lang/specializations" element={<Specializations />} />
              <Route path="/:lang/about" element={<About />} />
              <Route path="/:lang/contact" element={<ContactPage />} />
              <Route path="/:lang/landing-page-professionali" element={<LandingPageProfessionali />} />
              <Route path="/:lang/testimonials" element={<Testimonials />} />
              <Route path="/:lang/landing" element={<LandingPage />} />
              <Route path="/:lang/google-ads" element={<GoogleAdsLandingPage />} />
              <Route path="/:lang/la-nostra-tecnologia-ai" element={<AIPlatform />} />

              {/* Solutions & Profile routes */}
              <Route path="/:lang/solutions" element={<SolutionsHub />} />
              <Route path="/:lang/solutions/titolare-pmi" element={<TitolarePmi />} />
              <Route path="/:lang/solutions/account-manager" element={<AccountManager />} />
              <Route path="/:lang/solutions/media-buyer-google-ads" element={<MediaBuyerGoogle />} />
              <Route path="/:lang/solutions/media-buyer-meta" element={<MediaBuyerMeta />} />
              <Route path="/:lang/solutions/specialista-seo" element={<SpecialistaSeo />} />
              <Route path="/:lang/solutions/measurement-engineer" element={<MeasurementEngineer />} />
              <Route path="/:lang/solutions/operatore-ecommerce" element={<OperatoreEcommerce />} />
              <Route path="/:lang/solutions/advertiser-senza-tracking" element={<AdvertiserSenzaTracking />} />
              <Route path="/:lang/solutions/costruttore-sistema" element={<CostruttoreSistema />} />

              {/* Manifesto & Video-Spot routes */}
              <Route path="/:lang/manifesto" element={<Manifesto />} />
              <Route path="/:lang/video/:videoId" element={<VideoDetail />} />

              {/* Features & Capability Architecture routes */}
              <Route path="/:lang/funzionalita" element={<FeaturesHub />} />
              <Route path="/:lang/funzionalita/:themeId" element={<ThroughPage />} />
              <Route path="/:lang/funzionalita/:themeId/:featureSlug" element={<LandingUspPage />} />

              {/* Catch all redirect */}
              <Route path="*" element={<Navigate to={`/${language}/${location.search}${location.hash}`} replace />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
      {!isLandingPage && (
        <Suspense fallback={null}>
          <NavigationGuide />
        </Suspense>
      )}
      {!isLandingPage && <Footer />}
    </div>
  );
}

export default App;
