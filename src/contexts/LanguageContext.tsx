import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations, Language } from '../i18n/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getCurrentLanguagePath: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>(() => {
    // First check URL path for language
    const pathLang = location.pathname.split('/')[1];
    if (pathLang === 'it' || pathLang === 'en') return pathLang;
    
    // Then check localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en' || savedLang === 'it') return savedLang;
    
    // Finally check browser language
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'it' ? 'it' : 'en';
  });

  useEffect(() => {
    // Handle direct access to URLs without language prefix
    const pathParts = location.pathname.split('/');
    const currentLangInPath = pathParts[1];
    
    if (currentLangInPath !== 'it' && currentLangInPath !== 'en') {
      const newPath = `/${language}${location.pathname}`;
      navigate(newPath, { replace: true });
    } else if (currentLangInPath !== language) {
      setLanguageState(currentLangInPath as Language);
    }
  }, [location.pathname]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
    
    // Update URL with new language prefix
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/');
    if (pathParts[1] === 'it' || pathParts[1] === 'en') {
      pathParts[1] = newLang;
    } else {
      pathParts.splice(1, 0, newLang);
    }
    navigate(pathParts.join('/'));
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const getCurrentLanguagePath = (path: string): string => {
    const pathParts = path.split('/');
    if (pathParts[1] === 'it' || pathParts[1] === 'en') {
      pathParts[1] = language;
    } else {
      pathParts.splice(1, 0, language);
    }
    return pathParts.join('/');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getCurrentLanguagePath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}