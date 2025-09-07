import React from 'react';
import Section from '../ui/Section';
import { Clock, ClipboardCheck, Stethoscope, FileText } from 'lucide-react';
import Button from '../ui/Button';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Konzultácia',
    description: 'Podrobný rozhovor o vašich ťažkostiach'
  },
  {
    icon: Stethoscope,
    title: 'Vyšetrenie',
    description: 'Diagnostika aktuálneho stavu'
  },
  {
    icon: FileText,
    title: 'Plán',
    description: 'Návrh rehabilitačného programu'
  }
];

const InitialLessonSection = () => {
  return (
    <Section
      id="initial-lesson"
      title="Počiatočná Lekcia"
      subtitle="Váš prvý krok k zdravej chrbtici"
      background="gray"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center justify-center">
            <div className="inline-flex rounded-full bg-primary-100 p-3">
              <Clock className="h-8 w-8 text-primary-600" />
            </div>
            <span className="ml-4 text-xl font-semibold text-gray-900">
              Trvanie: 60 minút
            </span>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-primary-100"></div>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-8 top-4 -ml-[0.9375rem] h-4 w-4 rounded-full bg-primary-500"></div>
                  <div className="pl-16">
                    <div className="mb-2 inline-flex rounded-lg bg-primary-50 p-2">
                      <step.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              size="lg"
              className="rounded-full bg-brand-teal hover:bg-brand-teal-dark px-8 text-base hover:scale-105 transition-all duration-300"
            >
              Rezervovať Teraz
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InitialLessonSection;