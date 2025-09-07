import React from 'react';
import Section from '../ui/Section';
import { WavePattern } from '../ui/decorative/WavePattern';

const HistorySection = () => {
  return (
    <Section
      id="history"
      title="História metódy"
      subtitle="Viac ako 30 rokov skúseností a výskumu"
      className="relative overflow-hidden"
    >
      <WavePattern className="text-primary-100" />
      
      <div className="relative mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Metóda SM System bola vyvinutá českým lekárom MUDr. Richardom Smíškom a zdokonaľovaná viac ako 30 rokov.
            Vznikla v Českej republike a rozšírila sa do krajín ako Dánsko, Južná Kórea, USA a Austrália.
          </p>
          <p className="text-lg text-gray-600">
            Využíva aktiváciu špirálových svalových reťazcov na dosiahnutie trakčného (naťahovacieho) efektu
            na medzistavcové platničky. Táto aktívna stabilizácia chrbtice počas pohybu vedie k zlepšeniu
            držania tela a úľave od bolesti chrbta.
          </p>
        </div>
        
        <div className="relative rounded-2xl bg-primary-50 p-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">Kľúčové míľniky</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600">
                1
              </span>
              <p className="text-gray-600">Vývoj základných princípov metódy v Českej republike</p>
            </li>
            <li className="flex items-start">
              <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600">
                2
              </span>
              <p className="text-gray-600">Rozšírenie do európskych krajín</p>
            </li>
            <li className="flex items-start">
              <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600">
                3
              </span>
              <p className="text-gray-600">Medzinárodné uznanie a certifikácia</p>
            </li>
            <li className="flex items-start">
              <span className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600">
                4
              </span>
              <p className="text-gray-600">Globálne rozšírenie metódy</p>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default HistorySection;