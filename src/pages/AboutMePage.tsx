import React from 'react';
import { Award, Clock, Target, Lightbulb, Heart, Phone } from 'lucide-react';
import Section from '../components/ui/Section';
import AboutMeHero from '../components/about/AboutMeSection';
import FeatureCard from '../components/ui/FeatureCard';
import { useLanguage } from '../contexts/LanguageContext';
import { CTAButton } from '../components/ui/redesign/CTAButton';

const AboutMePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-navy via-[#0E5A6F] to-brand-aqua">
      <main className="relative">
        {/* My Story Section (Hero) */}
        <AboutMeHero />

        {/* Expertise Section */}
        <section className="relative isolate py-16 sm:py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
              {t('aboutme.expertise')}
            </h2>
            <div className="max-w-4xl mx-auto relative">
              {/* subtle ambient glow behind the cards */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 -z-10 w-[85%] h-32 rounded-full bg-white/10 blur-3xl opacity-60"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Certifikáty */}
                <div className="group rounded-2xl bg-white/8 ring-1 ring-white/15 backdrop-blur-md p-6 md:p-7 shadow-sm hover:bg-white/12 hover:shadow-lg hover:-translate-y-0.5 transition">
                  <div
                    className="mb-5 inline-flex shrink-0 items-center justify-center rounded-2xl
                               h-16 w-16 md:h-[72px] md:w-[72px]
                               bg-white/10 backdrop-blur-sm ring-1 ring-white/25
                               shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)]"
                    aria-hidden="true"
                  >
                    <img
                      src="/assets/icons/icon-award.png"
                      alt="Certifikát"
                      width="48"
                      height="48"
                      className="h-10 w-10 md:h-12 md:w-12 object-contain
                                 brightness-125 contrast-125 saturate-125
                                 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {t('aboutme.cert.title')}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t('aboutme.cert.1'),
                      t('aboutme.cert.2'),
                      t('aboutme.cert.3'),
                      t('aboutme.cert.4'),
                      t('aboutme.cert.5'),
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-white/85 text-sm md:text-[15px] leading-relaxed">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-brand-teal mr-2 mt-[2px] shrink-0 fill-current">
                          <path d="M9 16.2l-3.5-3.5a1 1 0 10-1.4 1.4l4.2 4.2a1 1 0 001.4 0l9-9a1 1 0 10-1.4-1.4L9 16.2z"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skúsenosti */}
                <div className="group rounded-2xl bg-white/8 ring-1 ring-white/15 backdrop-blur-md p-6 md:p-7 shadow-sm hover:bg-white/12 hover:shadow-lg hover:-translate-y-0.5 transition">
                  <div
                    className="mb-5 inline-flex shrink-0 items-center justify-center rounded-2xl
                               h-16 w-16 md:h-[72px] md:w-[72px]
                               bg-white/10 backdrop-blur-sm ring-1 ring-white/25
                               shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)]"
                    aria-hidden="true"
                  >
                    <img
                      src="/assets/icons/icon-book.png"
                      alt="Skúsenosti"
                      width="48"
                      height="48"
                      className="h-10 w-10 md:h-12 md:w-12 object-contain
                                 brightness-125 contrast-125 saturate-125
                                 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {t('aboutme.exp.title')}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t('aboutme.exp.1'),
                      t('aboutme.exp.2'),
                      t('aboutme.exp.3'),
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-white/85 text-sm md:text-[15px] leading-relaxed">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-brand-teal mr-2 mt-[2px] shrink-0 fill-current">
                          <path d="M9 16.2l-3.5-3.5a1 1 0 10-1.4 1.4l4.2 4.2a1 1 0 001.4 0l9-9a1 1 0 10-1.4-1.4L9 16.2z"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lektorky Section */}
        <section className="relative isolate py-16 sm:py-20 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
              {t('aboutme.teachers')}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/images/friends-image.jpg"
                  alt={t('aboutme.teachers')}
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 space-y-2 text-center text-white/60 text-xs">
                <p>
                  <a
                    href="https://www.smiskova.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/80"
                  >
                    MUDr. Katarina Smišková - www.smiskova.com
                  </a>{' '}
                  (V strede na obrázku)
                </p>
                <p>
                  <a
                    href="https://spiralstabilization.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/80"
                  >
                    Pavla Jurasek - spiralstabilization.eu
                  </a>{' '}
                  (V ľavo na obrázku)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="relative isolate py-20 px-4 bg-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-12 text-center">
              {t('aboutme.approach')}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  iconUrl: '/assets/icons/icon-brain.png',
                  iconAlt: 'Ikona mozgu',
                  title: t('aboutme.approach.expert'),
                  description: t('aboutme.approach.expert.desc'),
                },
                {
                  iconUrl: '/assets/icons/icon-heart.png',
                  iconAlt: 'Ikona srdca',
                  title: t('aboutme.approach.individual'),
                  description: t('aboutme.approach.individual.desc'),
                },
                {
                  iconUrl: '/assets/icons/icon-target.png',
                  iconAlt: 'Ikona cieľa',
                  title: t('aboutme.approach.results'),
                  description: t('aboutme.approach.results.desc'),
                },
              ].map((item, index) => (
                <FeatureCard
                  key={index}
                  iconUrl={item.iconUrl}
                  iconAlt={item.iconAlt}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutMePage;