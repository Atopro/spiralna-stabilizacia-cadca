import React from 'react';
import Section from '../components/ui/Section';

const CookiePolicyPage = () => {
  return (
    <main className="relative z-10 pt-20">
      <Section title="Zásady používania cookies">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Čo sú cookies</h2>
            <p className="mb-6">
              Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom prehliadači pri návšteve webových stránok. 
              Pomáhajú nám zlepšovať funkčnosť stránky a poskytovať lepší používateľský zážitok.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Aké cookies používame</h2>
            
            <h3 className="text-xl font-semibold text-brand-navy mb-3">Nevyhnutné cookies</h3>
            <p className="mb-4">
              Tieto cookies sú potrebné pre základnú funkčnosť webovej stránky a nemožno ich vypnúť.
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Cookies pre správu relácií</li>
              <li>Bezpečnostné cookies</li>
              <li>Cookies pre správne zobrazenie stránky</li>
            </ul>

            <h3 className="text-xl font-semibold text-brand-navy mb-3">Analytické cookies</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm">
                Momentálne nepoužívame analytické cookies. V prípade ich budúceho použitia vás budeme informovať.
              </p>
            </div>
            <p className="mb-6">
              Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, aby sme ju mohli zlepšovať.
            </p>

            <h3 className="text-xl font-semibold text-brand-navy mb-3">Marketingové cookies</h3>
            <p className="mb-6">
              Momentálne nepoužívame marketingové cookies.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Správa cookies</h2>
            <p className="mb-4">
              Cookies môžete spravovať v nastaveniach vašeho prehliadača:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Chrome:</strong> Nastavenia → Ochrana súkromia a zabezpečenie → Cookies</li>
              <li><strong>Firefox:</strong> Nastavenia → Ochrana súkromia a zabezpečenie</li>
              <li><strong>Safari:</strong> Predvoľby → Ochrana súkromia</li>
              <li><strong>Edge:</strong> Nastavenia → Cookies a povolenia stránok</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Súhlas s cookies</h2>
            <p className="mb-6">
              Používaním našej webovej stránky súhlasíte s používaním cookies v súlade s týmito zásadami. 
              Svoj súhlas môžete kedykoľvek odvolať zmenou nastavení prehliadača.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Kontakt</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>Pre otázky týkajúce sa cookies nás kontaktujte:</p>
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

export default CookiePolicyPage;