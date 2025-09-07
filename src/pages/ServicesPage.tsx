import React from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const services = [
  {
    titleKey: 'services.individual.title',
    descriptionKey: 'services.individual.desc',
    duration: '60 min',
    image: '/assets/images/individual-image.jpg',
    benefitKeys: [
      'services.individual.benefit1',
      'services.individual.benefit2',
      'services.individual.benefit3',
      'services.individual.benefit4',
      'services.individual.benefit5'
    ]
  },
  {
    titleKey: 'services.group.title',
    descriptionKey: 'services.group.desc',
    duration: '60 min',
    image: '/assets/images/skupinovka-image.jpg',
    benefitKeys: [
      'services.group.benefit1',
      'services.group.benefit2',
      'services.group.benefit3',
      'services.group.benefit4'
    ]
  },
  {
    titleKey: 'services.sport.title',
    descriptionKey: 'services.sport.desc',
    duration: '60 min',
    image: '/assets/images/sport-image.jpg',
    benefitKeys: [
      'services.sport.benefit1',
      'services.sport.benefit2',
      'services.sport.benefit3',
      'services.sport.benefit4'
    ]
  },
  {
    titleKey: 'services.massage.title',
    descriptionKey: 'services.massage.desc',
    duration: '60/90 min',
    image: '/assets/images/massage-image.jpg',
    benefitKeys: [
      'services.massage.benefit1',
      'services.massage.benefit2',
      'services.massage.benefit3',
      'services.massage.benefit4'
    ]
  }
];

const equipment = [
  {
    titleKey: 'services.elastic.title',
    descriptionKey: 'services.elastic.desc',
    image: '/assets/images/elasticke-lano-image.png'
  },
  {
    titleKey: 'services.sport.elastic.title',
    descriptionKey: 'services.sport.elastic.desc',
    image: '/assets/images/elasticke-lano-image.png'
  },
  {
    titleKey: 'services.pad.title',
    descriptionKey: 'services.pad.desc',
    image: '/assets/images/podlozka-image.png'
  },
  {
    titleKey: 'services.rod.title',
    descriptionKey: 'services.rod.desc',
    image: '/assets/images/tyce-image.png'
  },
  {
    titleKey: 'services.pass.title',
    descriptionKey: 'services.pass.desc',
    image: '/assets/images/pernamentka-image.jpg'
  },
  {
    titleKey: 'services.voucher.title',
    descriptionKey: 'services.voucher.desc',
    image: '/assets/images/poukaz-image.jpg'
  }
];

const ServicesPage = () => {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-navy via-[#0E5A6F] to-brand-aqua">
      {/* Hero Section */}
      <section className="relative isolate py-20 px-4 sm:py-32 text-center pt-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tréningy, ktoré ponúkam</h1>
        <p className="max-w-2xl mx-auto text-lg text-white/80">Individuálne aj skupinové cvičenia pre vaše zdravie a vitalitu</p>
      </section>

      {/* Training Grid */}
      <section className="relative isolate py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Individuálny tréning */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/assets/images/individual-image.jpg"
                  alt="Individuálny tréning"
                  className="h-full w-full object-cover object-[50%_38%]"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 text-white flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{t('services.individual.title')}</h3>
                <p className="text-white/80 mb-4">{t('services.individual.desc')}</p>
                <ul className="space-y-2 mb-6 text-sm text-white/70">
                  {services[0].benefitKeys.slice(0, 3).map((key, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <a href="tel:+421948525380" className="mt-auto px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-medium transition text-center block">Objednať sa</a>
              </div>
            </div>

            {/* Skupinový tréning */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/assets/images/skupinovka-image.jpg"
                  alt="Skupinový tréning"
                  className="h-full w-full object-cover object-[55%_45%]"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 text-white flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{t('services.group.title')}</h3>
                <p className="text-white/80 mb-4">{t('services.group.desc')}</p>
                <ul className="space-y-2 mb-6 text-sm text-white/70">
                  {services[1].benefitKeys.slice(0, 3).map((key, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <a href="tel:+421948525380" className="mt-auto px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-medium transition text-center block">Objednať sa</a>
              </div>
            </div>

            {/* Športový tréning */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/assets/images/sport-image.jpg"
                  alt="Športový tréning"
                  className="h-full w-full object-cover object-[50%_28%]"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 text-white flex flex-col flex-grow min-h-[280px]">
                <h3 className="text-xl font-semibold mb-2">{t('services.sport.title')}</h3>
                <p className="text-white/80 mb-4 line-clamp-3">{t('services.sport.desc')}</p>
                <ul className="space-y-2 mb-6 text-sm text-white/70">
                  {services[2].benefitKeys.slice(0, 3).map((key, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <a href="tel:+421948525380" className="mt-auto px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-medium transition text-center block">Objednať sa</a>
              </div>
            </div>

            {/* Masáže */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/assets/images/massage-image.jpg"
                  alt="Masáže"
                  className="h-full w-full object-cover object-[50%_28%]"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  sizes="(min-width:1024px) 560px, (min-width:768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-6 text-white flex flex-col flex-grow min-h-[280px]">
                <h3 className="text-xl font-semibold mb-2">{t('services.massage.title')}</h3>
                <p className="text-white/80 mb-4">{t('services.massage.desc')}</p>
                <ul className="space-y-2 mb-6 text-sm text-white/70">
                  {services[3].benefitKeys.slice(0, 3).map((key, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                      {t(key)}
                    </li>
                  ))}
                </ul>
                <a href="tel:+421948525380" className="mt-auto px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 font-medium transition text-center block">Objednať sa</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cvičebné pomôcky */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Cvičebné pomôcky</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item) => (
              <div
                key={item.titleKey}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-[1.02] hover:shadow-xl transition"
              >
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-60 mb-5 rounded-xl bg-white/10 ring-1 ring-white/10">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    className="absolute inset-0 h-full w-full object-contain p-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{t(item.titleKey)}</h3>
                <p className="text-white/80 text-sm">{t(item.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default ServicesPage;