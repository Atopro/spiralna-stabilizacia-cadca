import React from 'react';
import Section from '../ui/Section';
import { Shield, Activity, Heart, Brain } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Posilnenie svalového korzetu',
    description: 'Aktivácia a posilnenie hlbokého stabilizačného systému'
  },
  {
    icon: Activity,
    title: 'Odstránenie svalovej nerovnováhy',
    description: 'Harmonizácia svalového napätia a zlepšenie koordinácie'
  },
  {
    icon: Heart,
    title: 'Zlepšenie držania tela',
    description: 'Optimalizácia postoja a biomechaniky pohybu'
  },
  {
    icon: Brain,
    title: 'Prevencia bolesti',
    description: 'Predchádzanie problémom s chrbticou a kĺbmi'
  }
];

const BenefitsSection = () => {
  return (
    <Section
      id="benefits"
      title="Výhody Cvičenia"
      subtitle="Prečo si vybrať metódu SPS?"
      background="gray"
    >
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 transition-transform duration-300 group-hover:scale-110">
              <benefit.icon className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {benefit.title}
            </h3>
            <p className="text-gray-600">{benefit.description}</p>
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary-50 transition-transform duration-300 group-hover:scale-150"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;