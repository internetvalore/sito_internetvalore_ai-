import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
import AIAgentsMilano from './pages/services/AIAgentsMilano';

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

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  const location = useLocation();
  const { language } = useLanguage();
  const meta = metaContent.home[language];

  // Get language from URL
  const urlLang = location.pathname.split('/')[1];
  const isValidLang = urlLang === 'it' || urlLang === 'en';

  // Handle root path
  if (location.pathname === '/') {
    return <Navigate to={`/${language}/`} replace />;
  }

  // Handle paths without language prefix
  if (!isValidLang && location.pathname !== '/') {
    return <Navigate to={`/${language}${location.pathname}`} replace />;
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
        <AnimatePresence mode="wait">
          <ErrorBoundary>
            <Routes location={location} key={location.pathname}>
              {/* Base routes with language prefix */}
              <Route path="/:lang" element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Hero />
                  <Methodology />
                  <Stats />
                  <Services />
                  <Process />
                  <TestimonialsSlider />
                  <Clients />
                  <FAQ />
                  <Contact />
                </motion.div>
              } />

              {/* Service routes */}
              <Route path="/:lang/services" element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Services />
                </motion.div>
              } />
              <Route path="/:lang/services/lead-generation" element={<LeadGeneration />} />
              <Route path="/:lang/services/ecommerce" element={<Ecommerce />} />
              <Route path="/:lang/services/ads" element={<Ads />} />
              <Route path="/:lang/services/analytics" element={<Analytics />} />
              <Route path="/:lang/services/rispondi-subito" element={<RispondiSubito />} />
              <Route path="/:lang/services/sviluppo-agenti-ai-milano" element={<AIAgentsMilano />} />
              <Route path="/:lang/services/ai-agent-development-milan" element={<AIAgentsMilano />} />

              {/* Other routes */}
              <Route path="/:lang/instant-websites" element={<InstantWebsites />} />
              <Route path="/:lang/specializations" element={<Specializations />} />
              <Route path="/:lang/about" element={<About />} />
              <Route path="/:lang/contact" element={<ContactPage />} />
              <Route path="/:lang/landing-page-professionali" element={<LandingPageProfessionali />} />
              <Route path="/:lang/testimonials" element={<Testimonials />} />
              <Route path="/:lang/landing" element={<LandingPage />} />
              <Route path="/:lang/google-ads" element={<GoogleAdsLandingPage />} />

              {/* Catch all redirect */}
              <Route path="*" element={<Navigate to={`/${language}/`} replace />} />
            </Routes>
          </ErrorBoundary>
        </AnimatePresence>
      </div>
      <NavigationGuide />
      <Footer />
    </div>
  );
}

export default App;