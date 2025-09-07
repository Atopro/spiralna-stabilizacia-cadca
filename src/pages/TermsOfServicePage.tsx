import React from 'react';
import Section from '../components/ui/Section';

const TermsOfServicePage = () => {
  return (
    <main className="relative z-10 pt-20">
      <Section title="Obchodné podmienky">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Základné ustanovenia</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Poskytovateľ služieb:</h3>
              <p><strong>Obchodné meno:</strong> Ctibor Koža</p>
              <p><strong>Adresa:</strong> A. Bernoláka 2588/1, 02201 Čadca, Slovensko</p>
              <p><strong>IČO:</strong> 56452705</p>
              <p><strong>DIČ:</strong> 1129739380</p>
              <p><strong>Kontakt:</strong> info@spiralnastabilizaciacadca.sk, +421 948 525 380</p>
            </div>
            <p className="mb-6">
              Tieto obchodné podmienky upravujú vzťahy medzi poskytovateľom služieb a klientmi 
              pri poskytovaní služieb špirálnej stabilizácie a súvisiacich aktivít.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Poskytované služby</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Individuálne tréningy špirálnej stabilizácie</li>
              <li>Skupinové cvičenia</li>
              <li>Športový tréning</li>
              <li>Masáže a manuálne techniky</li>
              <li>Konzultácie a diagnostika</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Objednávanie služieb</h2>
            <p className="mb-4">
              Služby je možné objednať:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Telefonicky na čísle +421 948 525 380</li>
              <li>Prostredníctvom kontaktného formulára na webovej stránke</li>
              <li>E-mailom na adrese info@spiralnastabilizaciacadca.sk</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Ceny a platby</h2>
            <p className="mb-4">
              Aktuálne ceny služieb sú uvedené na webovej stránke alebo budú oznámené pri objednávaní.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Platba sa realizuje v hotovosti na mieste</li>
              <li>Ceny sú uvedené vrátane DPH</li>
              <li>Právo na zmenu cien si vyhradzujeme</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Zrušenie a preloženie termínu</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Termín je možné zrušiť alebo preložiť najneskôr 24 hodín vopred</li>
              <li>Pri neskoršom zrušení si vyhradzujeme právo účtovať storno poplatek</li>
              <li>V prípade neúčasti bez ospravedlnenia je služba spoplatnená v plnej výške</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Povinnosti klienta</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Poskytnúť pravdivé informácie o svojom zdravotnom stave</li>
              <li>Dodržiavať pokyny terapeuta</li>
              <li>Informovať o akýchkoľvek zmenách zdravotného stavu</li>
              <li>Rešpektovať pravidlá prevádzky</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Obmedzenie zodpovednosti</h2>
            <p className="mb-6">
              Poskytovateľ nenesie zodpovednosť za škody vzniknuté nedodržaním pokynov klienta 
              alebo zatajením dôležitých zdravotných informácií. Služby nie sú náhradou za lekársku starostlivosť.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Ochrana osobných údajov</h2>
            <p className="mb-6">
              Spracovanie osobných údajov sa riadi našimi 
              <a href="/privacy-policy" className="text-brand-teal hover:underline"> Zásadami ochrany osobných údajov</a>.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">9. Záverečné ustanovenia</h2>
            <p className="mb-6">
              Tieto obchodné podmienky sú platné od {new Date().toLocaleDateString('sk-SK')}. 
              Právo na ich zmenu si vyhradzujeme. Vzťahy sa riadia právnym poriadkom Slovenskej republiky.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">10. Kontakt</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>Pre otázky týkajúce sa obchodných podmienok nás kontaktujte:</p>
              <p><strong>E-mail:</strong> info@spiralnastabilizaciacadca.sk</p>
              <p><strong>Telefón:</strong> +421 948 525 380</p>
              <p><strong>Adresa:</strong> A. Bernoláka 2588/1, 02201 Čadca, Slovensko</p>
            </div>

            <p className="text-sm text-gray-600 mt-8">
              Posledná aktualizácia: {new Date().toLocaleDateString('sk-SK')}
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default TermsOfServicePage;