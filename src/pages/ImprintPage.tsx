import React from 'react';
import Section from '../components/ui/Section';

const ImprintPage = () => {
  return (
    <main className="relative z-10 pt-20">
      <Section title="Impressum">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            
            <h2 className="text-2xl font-bold text-brand-navy mb-4">Prevádzkovateľ webovej stránky</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p><strong>Obchodné meno:</strong> Ctibor Koža</p>
              <p><strong>Adresa sídla:</strong></p>
              <p className="ml-4">A. Bernoláka 2588/1</p>
              <p className="ml-4">02201 Čadca</p>
              <p className="ml-4">Slovensko</p>
              <p><strong>IČO:</strong> 56452705</p>
              <p><strong>DIČ:</strong> 1129739380</p>
              <p><strong>Telefón:</strong> +421 948 525 380</p>
              <p><strong>E-mail:</strong> info@spiralnastabilizaciacadca.sk</p>
              <p><strong>Web:</strong> www.spiralnastabilizaciacadca.sk</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">Kontaktné údaje</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p><strong>Telefón:</strong> +421 948 525 380</p>
              <p><strong>E-mail:</strong> info@spiralnastabilizaciacadca.sk</p>
              <p><strong>Web:</strong> www.spiralnastabilizaciacadca.sk</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">Predmet podnikania</h2>
            <p className="mb-6">
              Poskytovanie služieb v oblasti fyzioterapie, rehabilitácie a pohybových aktivít 
              so zameraním na metódu špirálnej stabilizácie chrbtice.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">Registrácia</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>
                Podnikateľ je zapísaný v registri fyzických osôb - podnikateľov vedenom Okresným úradom Čadca.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">Autorské práva</h2>
            <p className="mb-6">
              Všetky texty, obrázky a ďalší obsah na tejto webovej stránke sú chránené autorským právom. 
              Akékoliek použitie bez písomného súhlasu je zakázané.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">Vyhlásenie o zodpovednosti</h2>
            <p className="mb-6">
              Napriek starostlivej kontrole obsahu nepreberáme žiadnu zodpovednosť za obsah externých odkazov. 
              Za obsah odkazovaných stránok sú výlučne zodpovední ich prevádzkovatelia.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">Riešenie sporov</h2>
            <p className="mb-6">
              Európska komisia poskytuje platformu na online riešenie sporov (ODR): 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>

            <p className="text-sm text-gray-600 mt-8">
              Posledná aktualizácia: {new Date().toLocaleDateString('sk-SK')}
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ImprintPage;