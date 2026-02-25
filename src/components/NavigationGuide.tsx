import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const navigationFlow = [
  {
    path: '/',
    nextPath: '/services/lead-generation',
    messageIt: 'Scopri la Lead Generation',
    messageEn: 'Discover Lead Generation'
  },
  {
    path: '/services/lead-generation',
    nextPath: '/services/ecommerce',
    messageIt: 'Esplora le soluzioni E-commerce',
    messageEn: 'Explore E-commerce Solutions'
  },
  {
    path: '/services/ecommerce',
    nextPath: '/services/ads',
    messageIt: 'Scopri la Gestione Ads',
    messageEn: 'Discover Ads Management'
  },
  {
    path: '/services/ads',
    nextPath: '/services/analytics',
    messageIt: 'Esplora Analytics & Reporting',
    messageEn: 'Explore Analytics & Reporting'
  },
  {
    path: '/services/analytics',
    nextPath: '/services/rispondi-subito',
    messageIt: 'Scopri RispondiSubito',
    messageEn: 'Discover RispondiSubito'
  },
  {
    path: '/services/rispondi-subito',
    nextPath: '/landing-page-professionali',
    messageIt: 'Esplora le Landing Page Professionali',
    messageEn: 'Explore Professional Landing Pages'
  },
  {
    path: '/landing-page-professionali',
    nextPath: '/instant-websites',
    messageIt: 'Scopri i Siti Istantanei',
    messageEn: 'Discover Instant Websites'
  },
  {
    path: '/instant-websites',
    nextPath: '/flipping-catalog',
    messageIt: 'Esplora il Flipping Catalog',
    messageEn: 'Explore Flipping Catalog'
  },
  {
    path: '/flipping-catalog',
    nextPath: '/specializations',
    messageIt: 'Scopri le nostre Specializzazioni',
    messageEn: 'Discover our Specializations'
  },
  {
    path: '/specializations',
    nextPath: '/about',
    messageIt: 'Conosci chi siamo',
    messageEn: 'Get to know us'
  },
  {
    path: '/about',
    nextPath: '/',
    messageIt: 'Torna alla Home',
    messageEn: 'Back to Home'
  }
];

export default function NavigationGuide() {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const currentStep = navigationFlow.find(step => step.path === location.pathname);
  
  if (!currentStep) return null;

  const handleNext = () => {
    navigate(currentStep.nextPath);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <motion.a
        href="tel:800931785"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
      >
        <Phone className="h-5 w-5" />
        <span>{language === 'it' ? 'Chiama Ora' : 'Call Now'}</span>
      </motion.a>

      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        <span>{language === 'it' ? currentStep.messageIt : currentStep.messageEn}</span>
        <ArrowRight className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
