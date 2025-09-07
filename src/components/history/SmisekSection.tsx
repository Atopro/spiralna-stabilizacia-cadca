import React from 'react';
import Section from '../ui/Section';

const SmisekSection = () => {
  return (
    <Section
      id="smisek"
      title="Richard Smíšek – Otec metódy Špirálnej stabilizácie"
      background="glass"
    >
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90">
            Richard Smíšek je lekár a odborník v oblasti rehabilitácie, ktorý v roku 1979 vyvinul metódu Špirálnej stabilizácie chrbtice (SPS). Spolu so svojimi dcérami Kateřinou a Zuzanou túto metódu neustále zdokonaľuje.
          </p>
        </div>

        <div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            Metóda SPS sa dnes používa po celom svete ako revolučný prístup k fyzioterapii a prevencii problémov s chrbticou.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SmisekSection;