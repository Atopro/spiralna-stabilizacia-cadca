import React from 'react';
import { Mail } from 'lucide-react';
import ContactForm from './contact/ContactForm';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[#0A4036] font-semibold tracking-wider text-lg mb-4 drop-shadow-md">
                {t('contact.title')}
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                {t('contact.heading')}
              </h2>
              <p className="text-xl text-white font-medium leading-relaxed drop-shadow-md">
                {t('contact.intro')}
              </p>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
              <div className="bg-white/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg drop-shadow-md">Email</h3>
                <p className="text-white text-base sm:text-lg break-all drop-shadow-md">
                  {t('common.email')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;