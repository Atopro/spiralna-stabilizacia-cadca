import React from 'react';
import { Stethoscope, Users, BookOpen, Activity } from 'lucide-react';
import Section from './ui/Section';
import ServiceCard from './services/ServiceCard';

const services = [
  {
    title: 'Individuálna terapia',
    description: 'Personalizované liečebné plány prispôsobené vašim špecifickým potrebám a stavu.',
    icon: Stethoscope
  },
  {
    title: 'Skupinové cvičenia',
    description: 'Pripojte sa k našim skupinovým cvičeniam pre vedené cviky a vzájomnú motiváciu.',
    icon: Users
  },
  {
    title: 'Špecializované programy',
    description: 'Cielené programy pre skoliózu, herniu disku a chronické bolesti chrbta.',
    icon: BookOpen
  },
  {
    title: 'Rehabilitácia',
    description: 'Komplexné rehabilitačné programy pre rôzne zdravotné stavy.',
    icon: Activity
  }
];

const Services = () => {
  return (
    <Section
      id="services"
      title="Naše služby"
      subtitle="Komplexná starostlivosť o zdravie vašej chrbtice"
      background="gray"
    >
      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            Icon={service.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;