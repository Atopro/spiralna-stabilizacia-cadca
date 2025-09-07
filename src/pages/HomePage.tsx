import React, { useEffect } from 'react';
import { Phone, MessageCircle, CheckCircle, Users, Award, Clock } from 'lucide-react';
import { Section } from '../components/ui/redesign/Section';
import { CTAButton } from '../components/ui/redesign/CTAButton';
import { Card } from '../components/ui/redesign/Card';
import { Metrics } from '../components/ui/redesign/Metrics';
import { Testimonial } from '../components/ui/redesign/Testimonial';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';
import { useLanguage } from '../contexts/LanguageContext';
import { FeatureGridSection } from '../components/common/FeatureGridSection';

const HomePage = () => {
  const { t } = useLanguage();
  
  // Sample metrics - to be replaced with real data
  const metrics = [
    { value: '500+', label: 'Spokojných klientov', icon: <Users className="w-6 h-6" /> },
    { value: 'Aktívne Štúdium', label: 'Zvyšujem odbornosť pre lepšie výsledky', icon: <Award className="w-6 h-6" /> },
    { value: '95%', label: 'Úspešnosť liečby', icon: <CheckCircle className="w-6 h-6" /> },
  ];

  // Sample testimonials - to be replaced with real testimonials
  const testimonials = [
    {
      quote: "Po troch mesiacoch cvičenia SM systému sa mi výrazne zlepšili bolesti chrbta. Cítim sa omnoho lepšie a mám viac energie.",
      author: "Jana K.",
      role: "Klientka"
    },
    {
      quote: "Skvelý prístup a účinná metóda. Odporúčam každému, kto má problémy s chrbticou.",
      author: "Peter N.",
      role: "Klient"
    },
    {
      quote: "SM systém mi pomohol zbaviť sa chronických bolestí. Cvičenia sú jednoduché a dajú sa robiť aj doma.",
      author: "Mária H.",
      role: "Klientka"
    }
  ];

  // Map existing testimonials to AnimatedTestimonials shape (with stock photos)
  const animatedTestimonials = [
    {
      quote: testimonials[0].quote,
      name: testimonials[0].author,
      designation: testimonials[0].role,
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote: testimonials[1].quote,
      name: testimonials[1].author,
      designation: testimonials[1].role,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },
    {
      quote: testimonials[2].quote,
      name: testimonials[2].author,
      designation: testimonials[2].role,
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // SM System features for the FeatureGridSection
  const smSystemFeatures = [
    {
      iconUrl: "/assets/icons/icon-pain-relief.png",
      iconAlt: "Ikona úľavy od bolesti",
      title: "Zmierňuje bolesti chrbtice",
      description: "Aktivuje špirálne svalové reťazce a odľahčuje chrbticu pre úľavu od bolesti."
    },
    {
      iconUrl: "/assets/icons/icon-scoliosis-prevention.png",
      iconAlt: "Ikona prevencie skoliózy",
      title: "Podporuje prevenciu skoliózy",
      description: "Vedie k symetrii a správnym vzorom pohybu; vhodný aj pri sklone k zakriveniu."
    },
    {
      iconUrl: "/assets/icons/icon-all-ages.png",
      iconAlt: "Ikona všetkých vekových kategórií",
      title: "Pre všetky vekové kategórie",
      description: "Cvičenia sa prispôsobujú každému — od detí až po seniorov."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-navy via-[#0E5A6F] to-brand-aqua">
    <main className="relative">
      {/* Hero Section */}
      <Section className="section-hero min-h-screen flex items-center justify-center px-4 py-20" fadeIn={false}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <video
              className="w-full h-full object-cover"
              src="https://smsystem.b-cdn.net/videos/sm-system-hero-video.mp4"
              poster="https://smsystem.b-cdn.net/images/hero-poster.jpg"
              autoPlay
              loop
              muted
              playsInline
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E3C61]/80 to-[#00C6A7]/60" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-snug tracking-tight text-balance max-w-[22ch] md:max-w-[26ch]">
              <span>Pomôžem ti zbaviť sa bolestí</span>
              <br className="hidden md:block" />
              <span>&nbsp;—&nbsp;vďaka Špirálnej stabilizácii <span className="whitespace-nowrap">(SM systém)</span></span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Vysvetlím ti jasné kroky a ukážem pohyb, ktorý dáva zmysel.
            </p>
            
            {/* Primary CTA */}
            <div className="mb-12">
              <CTAButton
                size="lg"
                href="tel:+421948525380"
                className="text-xl px-12 py-5 shadow-2xl hover:scale-105"
              >
                Objednať termín
              </CTAButton>
            </div>
            
            {/* Metrics */}
            <Metrics metrics={metrics} />
          </div>
        </div>
      </Section>

      {/* Value Props Section */}
      <FeatureGridSection
        title="Prečo si vybrať SM systém?"
        features={smSystemFeatures}
        className="py-16 sm:py-20 bg-transparent"
      />

      {/* O mne Section */}
      <section aria-labelledby="o-mne" className="relative isolate py-16 sm:py-20 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1 relative before:content-[''] before:absolute before:-inset-x-6 before:-inset-y-4 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:blur-2xl before:rounded-3xl before:pointer-events-none">
              <p className="text-sm font-semibold tracking-wide uppercase text-brand-aqua/90">Certifikovaný špecialista SPS – SM systém</p>
              <h2 id="o-mne" className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white [text-wrap:balance]">O mne</h2>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed max-w-[58ch] [text-wrap:balance]">
                Volám sa Ctibor Koža a som certifikovaný špecialista na metódu Špirálnej stabilizácie chrbtice (SM systém).
                Pomáham ľuďom zbaviť sa bolestí, zlepšiť držanie tela a nájsť pohyb, ktorý dáva zmysel. Verím, že jasné
                vysvetlenie a jednoduché cvičenia prinášajú dlhodobý výsledok.
              </p>
              <div className="mt-6">
                <a
                  href="/o-mne"
                  className="inline-flex items-center justify-center rounded-2xl bg-white text-brand-navy px-5 py-3 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Viac o mne
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2">
              <img
                src="/assets/images/ctibor-image.jpg"
                alt="Ctibor Koža – špecialista na Špirálnu stabilizáciu (SM systém)"
                width="960" height="1200"
                loading="lazy" decoding="async"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative isolate py-16 sm:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Moje služby
          </h2>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Individuálny tréning */}
            <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 backdrop-blur-md shadow-sm transition hover:bg-white/10">
              <div className="relative w-full h-[260px] md:h-[280px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-3xl">
                <img
                  src="/assets/images/individual-image.jpg"
                  alt="Individuálny tréning"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent backdrop-blur-0"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight [text-wrap:balance] drop-shadow">
                  Individuálny tréning
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-[15px] leading-relaxed max-w-[30ch]">
                  Pripravím plán presne podľa tvojich potrieb.
                </p>
                <a
                  href="/sluzby"
                  className="mt-4 inline-flex items-center rounded-xl bg-white text-brand-navy px-4 py-2 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Zistiť viac
                </a>
              </div>
            </div>

            {/* Skupinové cvičenia */}
            <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 backdrop-blur-md shadow-sm transition hover:bg-white/10">
              <div className="relative w-full h-[260px] md:h-[280px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-3xl">
                <img
                  src="/assets/images/skupinovka-image.jpg"
                  alt="Skupinové cvičenia"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent backdrop-blur-0"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight [text-wrap:balance] drop-shadow">
                  Skupinové cvičenia
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-[15px] leading-relaxed max-w-[30ch]">
                  Cvičíme spolu v malej skupine s mojím vedením.
                </p>
                <a
                  href="/sluzby"
                  className="mt-4 inline-flex items-center rounded-xl bg-white text-brand-navy px-4 py-2 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Zistiť viac
                </a>
              </div>
            </div>

            {/* Športový tréning */}
            <div className="group relative overflow-hidden rounded-3xl ring-1 ring-white/15 bg-white/5 backdrop-blur-md shadow-sm transition hover:bg-white/10">
              <div className="relative w-full h-[260px] md:h-[280px] lg:h-[320px] xl:h-[360px] overflow-hidden rounded-3xl">
                <img
                  src="/assets/images/sport-image.jpg"
                  alt="Športový tréning"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent backdrop-blur-0"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight [text-wrap:balance] drop-shadow">
                  Športový tréning
                </h3>
                <p className="mt-1 text-white/90 text-sm md:text-[15px] leading-relaxed max-w-[30ch]">
                  Zameriam sa na výkon, stabilitu a prevenciu zranení.
                </p>
                <a
                  href="/sluzby"
                  className="mt-4 inline-flex items-center rounded-xl bg-white text-brand-navy px-4 py-2 font-semibold shadow-sm transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Zistiť viac
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
            Čo hovoria moji klienti
          </h2>
          <AnimatedTestimonials testimonials={animatedTestimonials} autoplay className="py-4" />
        </div>
      </section>

      <section className="relative isolate py-20 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Začnime spolu pracovať na tvojom zdraví
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Napíš mi alebo zavolaj — <strong>odpoviem do 24 hodín</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="phone"
              size="lg"
              href="tel:+421948525380"
              className="text-lg px-8"
            >
              +421 948 525 380
            </CTAButton>
            
            <CTAButton
              variant="whatsapp"
              size="lg"
              href="https://wa.me/421948525380"
              className="text-lg px-8"
            >
              WhatsApp
            </CTAButton>
          </div>
          
        </div>
      </section>

      <section className="relative isolate py-20 px-4 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Pozrite si viac z mojej práce
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                src="https://smsystem.b-cdn.net/Sequence%2002_1.mp4"
                autoPlay
                loop
                muted
                playsInline
                loading="lazy"
              />
            </div>
            <a 
              href="https://www.instagram.com/spiralna_stabilizacia_cadca/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/assets/images/spiralna-stabilizacia-cadca-qr.png"
                alt="QR kód"
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
                width="400"
                height="400"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Naši priatelia Section */}
      <section className="relative isolate py-16 sm:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white drop-shadow-sm mb-4">
            Naši priatelia
          </h2>
          <p className="text-center text-white/80 text-lg max-w-3xl mx-auto mb-12">
            Sme radi, že môžeme zdieľať spoločnú cestu za zdravím a vzájomne sa podporovať.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Spiralista */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg ring-1 ring-white/10 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="shrink-0 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <img
                    src="/assets/images/spiralista-logo.png"
                    alt="Spiralista – logo"
                    className="h-20 w-20 object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 80px, (min-width: 640px) 80px, 80px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">Spiralista</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Naši priatelia zo Špirálni Stabilizace, ktorí s rovnakým zanietením šíria metódu
                    Špirálnej stabilizácie a pomáhajú ľuďom žiť bez bolesti.
                  </p>
                </div>
              </div>
            </div>

            {/* Jablkový raj */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg ring-1 ring-white/10 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="shrink-0 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <img
                    src="/assets/images/jablkovyraj-logo.png"
                    alt="Jablkový raj – logo"
                    className="h-20 w-20 object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 80px, (min-width: 640px) 80px, 80px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">Jablkový raj</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Slovenský pestovatelia, ktorý prinášajú zdravé ovocné produkty priamo z prírody.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
    </div>
  );
};

export default HomePage;