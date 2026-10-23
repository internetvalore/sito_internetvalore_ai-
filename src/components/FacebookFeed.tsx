import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

declare global {
  interface Window {
    eapps?: {
      init: () => void;
    };
  }
}

export default function FacebookFeed() {
  const { language } = useLanguage();

  useEffect(() => {
    // Load Elfsight script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    const initializeElfsight = (retries = 0, maxRetries = 5) => {
      if (window.eapps?.init) {
        window.eapps.init();
      } else if (retries < maxRetries) {
        // Retry after 1 second if init is not available
        setTimeout(() => initializeElfsight(retries + 1, maxRetries), 1000);
      } else {
        console.warn('Failed to initialize Elfsight after maximum retries');
      }
    };

    script.onload = () => {
      initializeElfsight();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="section">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10"
        >
          <h2 className="title-xl mb-4">
            {language === 'it' ? 'Seguici su Facebook' : 'Follow us on Facebook'}
          </h2>
          <p className="lede">
            {language === 'it' 
              ? 'Resta aggiornato sulle ultime novità e consigli di marketing digitale'
              : 'Stay updated with the latest digital marketing news and tips'}
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="card p-0 overflow-hidden w-full max-w-3xl">
            <div 
              className="elfsight-app-8890b5cd-b1e1-4c98-bc99-c9a8a5cdebd6"
              style={{ 
                minHeight: '480px',
                width: '720px',
                maxWidth: '100%',
                margin: '0 auto'
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}