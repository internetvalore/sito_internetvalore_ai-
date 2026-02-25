import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('it')}
        className={`flex items-center justify-center w-8 h-8 rounded-full overflow-hidden ${
          language === 'it' ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
        }`}
        aria-label="Italiano"
      >
        <img
          src="https://flagcdn.com/w40/it.png"
          srcSet="https://flagcdn.com/w80/it.png 2x"
          width="32"
          height="32"
          alt="Italia"
          className="object-cover"
        />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage('en')}
        className={`flex items-center justify-center w-8 h-8 rounded-full overflow-hidden ${
          language === 'en' ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'
        }`}
        aria-label="English"
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          srcSet="https://flagcdn.com/w80/gb.png 2x"
          width="32"
          height="32"
          alt="English"
          className="object-cover"
        />
      </motion.button>
    </div>
  );
}
