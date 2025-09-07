import React from 'react';
import Section from '../components/ui/Section';

const PrivacyPolicyPage = () => {
  return (
    <main className="relative z-10 pt-20">
      <Section title="Ochrana osobných údajov">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Základné informácie</h2>
            <p className="mb-4">
              Táto stránka informuje o tom, ako spracúvame vaše osobné údaje v súlade s nariadením GDPR 
              a zákonom o ochrane osobných údajov.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Prevádzkovateľ osobných údajov:</h3>
              <p><strong>Obchodné meno:</strong> Ctibor Koža</p>
              <p><strong>Adresa:</strong> A. Bernoláka 2588/1, 02201 Čadca, Slovensko</p>
              <p><strong>IČO:</strong> 56452705</p>
              <p><strong>DIČ:</strong> 1129739380</p>
              <p><strong>Kontakt:</strong> info@spiralnastabilizaciacadca.sk, +421 948 525 380</p>
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. Aké údaje zbierame</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Meno a priezvisko (kontaktný formulár)</li>
              <li>E-mailová adresa (kontaktný formulár)</li>
              <li>Telefónne číslo (kontaktný formulár)</li>
              <li>Správa/dotaz (kontaktný formulár)</li>
              <li>IP adresa a technické údaje (automaticky)</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Účel spracovania</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Odpoveď na vaše dotazy a požiadavky</li>
              <li>Poskytovanie našich služeb</li>
              <li>Zlepšovanie kvality webovej stránky</li>
              <li>Plnenie zákonných povinností</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Právny základ spracovania</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Oprávnený záujem (čl. 6 ods. 1 písm. f GDPR)</li>
              <li>Plnenie zmluvy (čl. 6 ods. 1 písm. b GDPR)</li>
              <li>Súhlas dotknutej osoby (čl. 6 ods. 1 písm. a GDPR)</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Doba uchovávania údajov</h2>
            <p className="mb-6">
              Osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelu spracovania, 
              maximálne však po dobu 3 rokov od posledného kontaktu.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Vaše práva</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Právo na prístup k údajom</li>
              <li>Právo na opravu údajov</li>
              <li>Právo na vymazanie údajov</li>
              <li>Právo na obmedzenie spracovania</li>
              <li>Právo na prenosnosť údajov</li>
              <li>Právo namietať proti spracovaniu</li>
              <li>Právo podať sťažnosť na dozorný orgán</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">7. Cookies</h2>
            <p className="mb-4">
              Naša webová stránka používa cookies na zlepšenie používateľského zážitku. 
              Podrobné informácie nájdete v našich <a href="/cookie-policy" className="text-brand-teal hover:underline">Zásadách používania cookies</a>.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy mb-4">8. Kontakt</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p>Pre otázky týkajúce sa ochrany osobných údajov nás kontaktujte:</p>
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

export default PrivacyPolicyPage;