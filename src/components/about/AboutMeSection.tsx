import React from 'react';
import { Phone } from 'lucide-react';
import { CTAButton } from '../ui/redesign/CTAButton';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutMeHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative isolate py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 relative before:content-[''] before:absolute before:-inset-x-6 before:-inset-y-4 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:blur-2xl before:rounded-3xl before:pointer-events-none">
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">
              {t('aboutme.name')}
            </h1>
            <p className="text-sm font-semibold tracking-wide uppercase text-brand-aqua/90">
              {t('aboutme.subtitle')}
            </p>
            <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-[58ch] [text-wrap:balance]">
              {t('aboutme.intro1')}
            </p>
            <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-[58ch] [text-wrap:balance]">
              {t('aboutme.intro2')}
            </p>
            <div className="mt-6">
              <CTAButton
                variant="phone"
                size="lg"
                href="tel:+421948525380"
                className="text-lg px-8"
              >
                {t('common.phone')}
              </CTAButton>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2">
            <img
              src="/assets/images/ctibor-image.jpg"
              alt="Ctibor Koža – špecialista na Špirálnu stabilizáciu (SM systém)"
              width="960"
              height="1200"
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHero;