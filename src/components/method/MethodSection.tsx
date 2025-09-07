import React from 'react';
import Section from '../ui/Section';
import { Shield, Activity, Heart, Brain } from 'lucide-react';
import Button from '../ui/Button';

const MethodSection = () => {
  return (
    <Section
      id="method"
      title="O Metóde SPS"
      subtitle="Špirálna stabilizácia pre zdravú chrbticu"
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://smsystem.b-cdn.net/images/sps-pose-image.jpg"
            alt="Metóda SPS"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-lg font-medium text-white">
              "Špirálna stabilizácia spája rehabilitáciu s prevenciou a kondičným tréningom."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl bg-primary-50 p-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Princípy metódy</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 h-5 w-5 text-primary-500" />
                <span className="text-gray-600">
                  Aktivácia špirálových svalových reťazcov pre stabilizáciu chrbtice
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 h-5 w-5 text-primary-500" />
                <span className="text-gray-600">
                  Naťahovací efekt na medzistavcové platničky
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="mr-2 mt-1 h-5 w-5 text-primary-500" />
                <span className="text-gray-600">
                  Aktívna stabilizácia chrbtice počas pohybu
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3">
              <Activity className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Vedecky podložená metóda
            </h3>
            <p className="mb-6 text-gray-600">
              Metóda SPS je výsledkom 30-ročného výskumu a praxe. Jej účinnosť je
              dokumentovaná pomocou magnetickej rezonancie a klinických štúdií.
            </p>
            <Button variant="primary" className="w-full">
              Prečítať viac
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MethodSection;