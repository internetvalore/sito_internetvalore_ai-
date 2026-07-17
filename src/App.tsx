import React, { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useLanguage } from './contexts/LanguageContext';
import MetaTags from './components/MetaTags';
import { metaContent } from './seo/metaContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Stats from './components/Stats';
import Process from './components/Process';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ContactPage from './pages/Contact';
import About from './pages/About';

import Specializations from './pages/Specializations';
import InstantWebsites from './pages/InstantWebsites';
import LeadGeneration from './pages/services/LeadGeneration';
import Ecommerce from './pages/services/Ecommerce';
import Ads from './pages/services/Ads';
import Analytics from './pages/services/Analytics';
import NavigationGuide from './components/NavigationGuide';
import LandingPageProfessionali from './pages/services/LandingPageProfessionali';
import RispondiSubito from './pages/services/RispondiSubito';
import Testimonials from './pages/Testimonials';
import TestimonialsSlider from './components/TestimonialsSlider';
import ErrorBoundary from './components/ErrorBoundary';
import LandingPage from './pages/landing_page/LandingPage';
import GoogleAdsLandingPage from './pages/landing_page/GoogleAdsLandingPage';
import AIPlatform from './pages/AIPlatform';
import CapabilitiesSlider from './components/CapabilitiesSlider';

// Solutions Pages
import SolutionsHub from './pages/solutions/SolutionsHub';
import TitolarePmi from './pages/solutions/TitolarePmi';
import AccountManager from './pages/solutions/AccountManager';
import MediaBuyerGoogle from './pages/solutions/MediaBuyerGoogle';
import MediaBuyerMeta from './pages/solutions/MediaBuyerMeta';
import SpecialistaSeo from './pages/solutions/SpecialistaSeo';
import MeasurementEngineer from './pages/solutions/MeasurementEngineer';
import OperatoreEcommerce from './pages/solutions/OperatoreEcommerce';
import AdvertiserSenzaTracking from './pages/solutions/AdvertiserSenzaTracking';
import CostruttoreSistema from './pages/solutions/CostruttoreSistema';

// Manifesto & Video pages
import Manifesto from './pages/manifesto/Manifesto';
import VideoDetail from './pages/manifesto/VideoDetail';

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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {location.pathname === `/${language}` && (
        <MetaTags
          title={meta.title}
          description={meta.description}
          path="/"
        />
      )}
      <Navbar />
      <ScrollHandler />
      <div className="flex-grow pt-16">
        <ErrorBoundary>
          <Routes location={location}>
            {/* Base routes with language prefix */}
            <Route path="/:lang" element={
              <>
                <Hero />
                <Methodology />
                <CapabilitiesSlider />
                <Stats />
                <Services />
                <Process />
                <TestimonialsSlider />
                <Clients />
                <FAQ />
                <Contact />
              </>
            } />

            {/* Service routes */}
            <Route path="/:lang/services" element={<Services />} />
            <Route path="/:lang/services/lead-generation" element={<LeadGeneration />} />
            <Route path="/:lang/services/ecommerce" element={<Ecommerce />} />
            <Route path="/:lang/services/ads" element={<Ads />} />
            <Route path="/:lang/services/analytics" element={<Analytics />} />
            <Route path="/:lang/services/rispondi-subito" element={<RispondiSubito />} />

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

            {/* Catch all redirect */}
            <Route path="*" element={<Navigate to={`/${language}/${location.search}${location.hash}`} replace />} />
          </Routes>
        </ErrorBoundary>
      </div>
      <NavigationGuide />
      <Footer />
    </div>
  );
}

export default App;
