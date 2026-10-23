import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const buttonClass = (active: boolean) =>
    `flex items-center justify-center w-7 h-7 rounded-full overflow-hidden transition-all duration-220 border ${
      active
        ? 'border-[rgba(29,29,31,0.14)] bg-white shadow-sm'
        : 'border-transparent opacity-60 hover:opacity-100 bg-transparent'
    }`;

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Seleziona lingua / Select language">
      <button
        type="button"
        onClick={() => setLanguage('it')}
        className={buttonClass(language === 'it')}
        aria-label="Italiano - Seleziona lingua italiano"
        aria-pressed={language === 'it'}
      >
        <img
          src="https://flagcdn.com/w40/it.png"
          srcSet="https://flagcdn.com/w80/it.png 2x"
          width="28"
          height="28"
          alt="Bandiera Italiana - Seleziona lingua Italiano"
          className="object-cover rounded-full"
        />
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={buttonClass(language === 'en')}
        aria-label="English - Select language English"
        aria-pressed={language === 'en'}
      >
        <img
          src="https://flagcdn.com/w40/gb.png"
          srcSet="https://flagcdn.com/w80/gb.png 2x"
          width="28"
          height="28"
          alt="Bandiera Britannica - Seleziona lingua Inglese / British flag - Select English"
          className="object-cover rounded-full"
        />
      </button>
    </div>
  );
}
