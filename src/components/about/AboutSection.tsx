import React from 'react';
import { Brain, Heart, Shield, Activity } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { benefits } from '../../data/content';

const iconMap = {
  Brain,
  Heart,
  Shield,
  Activity
};

const iconVariants = {
  Brain: 'brain',
  Heart: 'heart',
  Shield: 'shield',
  Activity: 'activity'
} as const;

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative isolate py-16 sm:py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
          O metóde SM System
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = iconMap[benefit.icon as keyof typeof iconMap];
          
          return (
            <div
              key={benefit.title}
              className="group rounded-2xl bg-white/8 ring-1 ring-white/15 backdrop-blur-md p-6 shadow-sm hover:bg-white/12 hover:shadow-lg transition"
            >
              <div className="mb-4 inline-grid place-items-center h-10 w-10 rounded-xl bg-white/10">
                <Icon className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default AboutSection;