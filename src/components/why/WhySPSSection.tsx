import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Shield as Child, Activity, Dumbbell, Heart, Brain, Shield, Users, Stethoscope } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const WhySPSSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Section
      id="why-sps"
      title={t('why.title')}
    >
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Left Column - Introduction and Image */}
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-white">
            {t('why.intro')}
          </p>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative aspect-[4/3]">
              <img
                src="https://smsystem.b-cdn.net/images/sps-pose-image.jpg"
                alt="Špirálna stabilizácia v praxi"
                className="absolute h-full w-full object-cover object-center transform transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="rounded-full bg-brand-navy hover:bg-brand-navy/90 px-8 text-base hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/diagnozy-a-liecba')}
            >
              {t('why.diagnoses.btn')}
            </Button>
            <Button 
              size="lg"
              className="rounded-full bg-brand-navy hover:bg-brand-navy/90 px-8 text-base hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/sm-system')}
            >
              {t('why.system.btn')}
            </Button>
          </div>
        </div>

        {/* Right Column - Benefits Grid */}
        <div 
          ref={ref}
          className="grid gap-4 grid-cols-2 content-between"
        >
          {[
            {
              icon: Shield,
              title: t('why.benefit1.title'),
              description: t('why.benefit1.desc'),
              details: [
                'Správne držanie tela', // These could be translated too if needed
                'Stabilita chrbtice',
                'Vyrovnanie postoja'
              ]
            },
            {
              icon: Stethoscope,
              title: t('why.benefit2.title'),
              description: t('why.benefit2.desc'),
              details: [
                'Úľava od bolesti',
                'Prirodzená liečba',
                'Dlhodobé výsledky'
              ]
            },
            {
              icon: Heart,
              title: t('why.benefit3.title'),
              description: t('why.benefit3.desc'),
              details: [
                'Preventívna starostlivosť',
                'Rehabilitačný program'
              ]
            },
            {
              icon: Users,
              title: t('why.benefit4.title'),
              description: t('why.benefit4.desc'),
              details: [
                'Všetky vekové skupiny',
                'Individuálny prístup',
                'Prispôsobené cvičenia'
              ]
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/70 p-6 backdrop-blur-sm shadow-lg transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-1 cursor-pointer min-h-[240px]
                  ${inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4 transform transition-transform duration-500 ease-out group-hover:scale-110">
                  <div className="inline-flex rounded-xl bg-brand-teal/10 p-3">
                    <Icon className="h-6 w-6 text-brand-teal" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-2 text-lg font-semibold text-brand-navy">
                    {benefit.title}
                  </h3>
                  <p className="mb-4 text-sm text-brand-navy/80">
                    {benefit.description}
                  </p>

                  {/* Details List */}
                  <ul className="mb-6 space-y-2">
                    {benefit.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-brand-navy/70">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-teal"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-700 ease-in-out group-hover:scale-[2]" />
                <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-700 ease-in-out group-hover:scale-[2]" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default WhySPSSection;