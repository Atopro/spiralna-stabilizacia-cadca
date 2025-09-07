import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface LanguageSwitcherProps {
  isMobile?: boolean;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  isMobile = false, 
  className = '' 
}) => {
  const { language, setLanguage } = useLanguage();

  if (isMobile) {
    return (
      <div className={`flex flex-col space-y-2 ${className}`}>
        <span className="text-gray-300 text-sm font-medium mb-2">Language / Jazyk</span>
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage('sk')}
            className={`flex-1 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
              language === 'sk'
                ? 'bg-brand-teal text-white shadow-md'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            Slovenčina
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`flex-1 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
              language === 'en'
                ? 'bg-brand-teal text-white shadow-md'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            English
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`hidden md:flex fixed top-4 right-4 z-[60] bg-white/10 backdrop-blur-sm rounded-full p-1 shadow-lg ${className}`}>
      <div className="flex">
        <button
          onClick={() => setLanguage('sk')}
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'sk'
              ? 'bg-brand-teal text-white shadow-md'
              : 'text-white hover:bg-white/10'
          }`}
        >
          SK
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-brand-teal text-white shadow-md'
              : 'text-white hover:bg-white/10'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;