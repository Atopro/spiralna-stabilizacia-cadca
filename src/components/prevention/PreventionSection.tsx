import React from 'react';
import Section from '../ui/Section';
import { PersonStanding, Bike, Dumbbell } from 'lucide-react';
import Button from '../ui/Button';

const sports = [
  {
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80',
    title: 'Beh',
    icon: PersonStanding
  },
  {
    image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80',
    title: 'Cyklistika',
    icon: Bike
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    title: 'Fitness',
    icon: Dumbbell
  }
];

const PreventionSection = () => {
  return (
    <Section
      id="prevention"
      title="Prevencia a Šport"
      subtitle="Zlepšite svoj výkon a predchádzajte zraneniam"
      background="gray"
    >
      <div className="relative">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8">
          {sports.map((sport) => (
            <div
              key={sport.title}
              className="relative min-w-[300px] flex-none snap-center overflow-hidden rounded-xl bg-white shadow-lg first:ml-[calc((100%-300px)/2)] last:mr-[calc((100%-300px)/2)] sm:min-w-[400px]"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={sport.image}
                  alt={sport.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                  <sport.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{sport.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button size="lg">Naučte sa viac</Button>
        </div>
      </div>
    </Section>
  );
};

export default PreventionSection;