import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#0E3C61] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <p className="text-sm">
                  {t('common.address')}
                </p>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href={`tel:${t('common.phone')}`} className="hover:text-brand-aqua transition-colors text-sm">
                  {t('common.phone')}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href={`mailto:${t('common.email')}`} className="hover:text-brand-aqua transition-colors text-sm">
                  {t('common.email')}
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/spiralna_stabilizacia_cadca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00C6A7] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quick.links')}</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('nav.home')}
              </Link>
              <Link to="/o-mne" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('nav.about')}
              </Link>
              <Link to="/sluzby" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('nav.services')}
              </Link>
              <Link to="/sm-system" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('nav.system')}
              </Link>
              <Link to="/diagnozy-a-liecba" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('nav.diagnoses')}
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.legal')}</h3>
            <nav className="space-y-3">
              <Link to="/privacy-policy" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('footer.privacy')}
              </Link>
              <Link to="/cookie-policy" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('footer.cookies')}
              </Link>
              <Link to="/terms-of-service" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('footer.terms')}
              </Link>
              <Link to="/impressum" className="block text-gray-300 hover:text-brand-aqua transition-colors text-sm">
                {t('footer.impressum')}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;