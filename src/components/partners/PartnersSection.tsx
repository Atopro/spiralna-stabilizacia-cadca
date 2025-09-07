import React from 'react';
import Section from '../ui/Section';
import { useLanguage } from '../../contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();
  
  return (
    <Section
      id="partners"
      title={t('partners.title')}
      className="bg-gradient-to-br from-[#58D1B5] to-[#3BA189]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center mb-12">
          <div className="flex flex-col items-center space-y-6">
            <a 
              href="https://www.smiskova.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="https://smsystem.b-cdn.net/images/spiralista-logo.png" 
                alt="Spiralista Logo"
                className="w-64 h-64 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <p className="text-base md:text-lg text-white/80 text-center max-w-xs">
              {t('partners.spiralista.desc')}
            </p>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <a 
              href="https://www.jablkovyraj.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="https://smsystem.b-cdn.net/images/Jablkovyraj%20logo.png" 
                alt="Jablkový Raj Logo"
                className="w-64 h-64 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <p className="text-base md:text-lg text-white/80 text-center max-w-xs">
              {t('partners.jablkovy.desc')}
            </p>
          </div>
        </div>
        
        <p className="text-center text-white/90 text-lg font-medium">
          {t('partners.outro')}
        </p>
      </div>
    </Section>
  );
};

export default PartnersSection;