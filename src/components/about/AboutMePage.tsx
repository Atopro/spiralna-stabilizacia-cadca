import React from 'react';
import { Award, BookOpen, Clock, Users, Brain, Heart } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import ImageWithLoader from '../ui/ImageWithLoader';

const AboutMePage = () => {
  const expertise = [
    {
      icon: Award,
      title: 'Certifikácie',
      items: [
        'Certifikovaný terapeut SPS',
        'Špecialista na rehabilitáciu chrbtice',
        'Odborník na pohybový aparát'
      ]
    },
    {
      icon: BookOpen,
      title: 'Vzdelanie',
      items: [
        'Fyzioterapia a rehabilitácia',
        'Špirálna stabilizácia chrbtice',
        'Kontinuálne vzdelávanie v oblasti rehabilitácie'
      ]
    },
    {
      icon: Clock,
      title: 'Skúsenosti',
      items: [
        'Viac ako X rokov praxe',
        'Stovky spokojných klientov',
        'Individuálny prístup ku každému prípadu'
      ]
    }
  ];

  const approach = [
    {
      icon: Brain,
      title: 'Odborný prístup',
      description: 'Kombinujem najnovšie poznatky z fyzioterapie s overenou metódou SPS pre maximálnu efektivitu liečby.'
    },
    {
      icon: Heart,
      title: 'Individuálna starostlivosť',
      description: 'Ku každému klientovi pristupujem individuálne, s ohľadom na jeho špecifické potreby a zdravotný stav.'
    },
    {
      icon: Users,
      title: 'Dlhodobé výsledky',
      description: 'Zameriavam sa nielen na okamžitú úľavu, ale hlavne na dlhodobé riešenie problémov s pohybovým aparátom.'
    }
  ];

  return (
    <main className="relative z-10 pt-32">
      {/* My Story Section */}
      <Section title="Moja cesta k metóde SPS">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
                Som Ctibor Koža
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Špecialista na Špirálnu stabilizáciu chrbtice
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-navy/90">
                Moja cesta k metóde SPS sa začala v momente, keď som pochopil, aký dôležitý je správny pohyb pre zdravie človeka. Už od mladosti ma fascinovalo, ako funguje ľudské telo a aký obrovský vplyv má rehabilitácia na kvalitu života.
              </p>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-brand-navy/90">
                Po rokoch štúdia a praxe som sa rozhodol venovať špecializovaným metodikám, ktoré efektívne pomáhajú ľuďom zbaviť sa bolesti a zlepšiť ich pohybové schopnosti.
              </p>
            </div>
            <div className="pt-6">
              <Button 
                size="lg" 
                className="rounded-full text-xl px-10 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://cal.com/dejvo/konzultacia', '_blank')}
              >
                Objednať konzultáciu
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/ctibor-image.jpg"
                alt="Ctibor Koža pri práci"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-brand-teal/20 -z-10" />
            <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-brand-teal/20 -z-10" />
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section title="Moja expertíza" className="bg-white/5">
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex rounded-xl bg-brand-teal/10 p-4 mb-6">
                  <Icon className="h-10 w-10 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-6">{item.title}</h3>
                <ul className="space-y-4">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-center text-lg text-brand-navy/80 font-medium">
                      <div className="mr-3 h-2 w-2 rounded-full bg-brand-teal" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Lektorky Section */}
      <Section title="Moje Lektorky">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/assets/images/friends-image.jpg"
            alt="Moje Lektorky"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      </Section>

      {/* Approach Section */}
      <Section title="Môj prístup">
        <div className="grid md:grid-cols-3 gap-8">
          {approach.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex rounded-xl bg-brand-teal/10 p-4 mb-6">
                  <Icon className="h-10 w-10 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{item.title}</h3>
                <p className="text-lg font-medium text-brand-navy/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-8">
            Začnime spolu pracovať na vašom zdraví
          </h2>
          <p className="text-2xl text-brand-navy/90 font-medium mb-10 max-w-3xl mx-auto">
            Objednajte sa na konzultáciu a urobte prvý krok k životu bez bolesti
          </p>
          <Button 
            size="lg" 
            className="rounded-full text-xl px-10 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://cal.com/dejvo/konzultacia', '_blank')}
          >
            Objednať konzultáciu
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default AboutMePage;