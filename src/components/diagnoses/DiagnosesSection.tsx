import React from 'react';
import Section from '../ui/Section';
import { useNavigate } from 'react-router-dom';
import { Brain, Activity, Bone } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import Button from '../ui/Button';
import { CustomSpine } from '../ui/icons/CustomIcons';
import { useLanguage } from '../../contexts/LanguageContext';

const diagnoses = [
  {
    icon: CustomSpine,
    title: 'Problémy chrbtice',
    description: '',
    details: [
      'Skolióza a deformity chrbtice',
      'Hernia disku a výhrez platničky',
      'Spinálna stenóza',
      'Chronické bolesti chrbta'
    ]
  },
  {
    icon: Bone,
    title: 'Bolesť kĺbov a chôdza',
    description: '',
    details: [
      'Artróza kĺbov',
      'Problémy s chôdzou',
      'Nestabilita kĺbov',
      'Poúrazové stavy'
    ]
  },
  {
    icon: Brain,
    title: 'Neurologické poruchy',
    description: '',
    details: [
      'Migrény a bolesti hlavy',
      'Roztrúsená skleróza',
      'Chronická únava',
      'Vertebrogénne poruchy'
    ]
  }
];

const DiagnosesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Section
      id="diagnoses"
      title={t('diagnoses.title')}
    >
      {/* Introduction Text */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <p className="text-lg text-white/90">
          {t('diagnoses.intro')}
        </p>
      </div>

      {/* Diagnoses Cards */}
      <div 
        ref={ref}
        className="grid gap-8 md:grid-cols-3 mx-auto max-w-6xl"
      >
        {[
          {
            icon: CustomSpine,
            title: t('diagnoses.spine.title'),
            description: '',
            details: [
              t('diagnoses.spine.detail1'),
              t('diagnoses.spine.detail2'),
              t('diagnoses.spine.detail3'),
              t('diagnoses.spine.detail4')
            ]
          },
          {
            icon: Bone,
            title: t('diagnoses.joints.title'),
            description: '',
            details: [
              t('diagnoses.joints.detail1'),
              t('diagnoses.joints.detail2'),
              t('diagnoses.joints.detail3'),
              t('diagnoses.joints.detail4')
            ]
          },
          {
            icon: Brain,
            title: t('diagnoses.neuro.title'),
            description: '',
            details: [
              t('diagnoses.neuro.detail1'),
              t('diagnoses.neuro.detail2'),
              t('diagnoses.neuro.detail3'),
              t('diagnoses.neuro.detail4')
            ]
          }
        ].map((diagnosis, index) => {
          const Icon = diagnosis.icon;
          return (
            <div
              key={diagnosis.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/70 p-8 backdrop-blur-sm shadow-lg transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-1 cursor-pointer min-h-[240px]
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
                  {diagnosis.title}
                </h3>
                <p className="mb-4 text-sm text-brand-navy/80">
                  {diagnosis.description}
                </p>

                {/* Details List */}
                <ul className="mb-6 space-y-2">
                  {diagnosis.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-brand-navy/70">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-teal"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-300 group-hover:scale-150" />
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-300 group-hover:scale-150" />
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="rounded-full bg-brand-navy hover:bg-brand-navy/90 px-8 text-base hover:scale-105 transition-all duration-300"
          onClick={() => navigate('/diagnozy-a-liecba')}
        >
          {t('diagnoses.more.btn')}
        </Button>
      </div>
    </Section>
  );
};

export default DiagnosesSection;