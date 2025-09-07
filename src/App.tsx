import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSwitcher from './components/ui/LanguageSwitcher';
import CookieBanner from './components/cookies/CookieBanner';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ServicesPage from './pages/ServicesPage';
import DiagnosesPage from './pages/DiagnosesPage';
import SMSystemPage from './pages/SMSystemPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ImprintPage from './pages/ImprintPage';
import { useScrollToTop } from './hooks/useScrollToTop';

// Component to handle dynamic meta tags
const MetaTags = () => {
  const location = useLocation();
  
  useEffect(() => {
    const updateMetaTags = () => {
      let title = '';
      let description = '';
      let keywords = '';
      
      switch (location.pathname) {
        case '/':
          title = 'Špirálna stabilizácia Čadca – Fyzioterapia a SM Systém';
          description = 'Pomáhame ľuďom v Čadci zbaviť sa bolestí chrbtice pomocou metódy Špirálnej stabilizácie (SM Systém).';
          keywords = 'Špirálna stabilizácia Čadca, SM Systém, fyzioterapia, bolesť chrbta, cvičenie chrbtica';
          break;
        case '/sluzby':
          title = 'Naše služby – Fyzioterapia, tréning a masáže Čadca';
          description = 'Individuálne cvičenia SM Systém, skupinové tréningy, diagnostika a masáže. Komplexná starostlivosť o váš chrbát.';
          keywords = 'fyzioterapia Čadca, individuálny tréning, skupinové cvičenie, masáže, SM Systém, diagnostika';
          break;
        case '/o-mne':
          title = 'O mne – SM Systém a rehabilitácia v Čadci';
          description = 'Som odborník na Špirálnu stabilizáciu chrbtice. Pomáham ľuďom cítiť sa lepšie pohybom a cvičením.';
          keywords = 'o mne, fyzioterapeut Čadca, špirálna stabilizácia, SM Systém, cvičenie';
          break;
        case '/sm-system':
          title = 'SM Systém – Špirálna stabilizácia chrbtice Čadca';
          description = 'Zoznámte sa s metódou SM Systém - efektívna rehabilitácia chrbtice a prevencia bolestí.';
          keywords = 'SM Systém, špirálna stabilizácia, rehabilitácia chrbtice, prevencia bolestí';
          break;
        case '/diagnozy-a-liecba':
          title = 'Diagnózy a liečba – Skolióza, hernia disku, bolesti chrbta';
          description = 'Liečime skoliózu, herniu disku, bolesti chrbta a ďalšie problémy chrbtice pomocou SM Systému.';
          keywords = 'skolióza, hernia disku, bolesti chrbta, liečba chrbtice, diagnózy';
          break;
        default:
          title = 'Špirálna stabilizácia Čadca – Fyzioterapia a SM Systém';
          description = 'Pomáhame ľuďom v Čadci zbaviť sa bolestí chrbtice pomocou metódy Špirálnej stabilizácie (SM Systém).';
          keywords = 'Špirálna stabilizácia Čadca, SM Systém, fyzioterapia, bolesť chrbta, cvičenie chrbtica';
      }
      
      // Update title
      document.title = title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
      
      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
      
      // Update Open Graph tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }
      
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
      
      // Update Twitter tags
      let twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      }
      
      let twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
    };
    
    updateMetaTags();
  }, [location.pathname]);
  
  return null;
};

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <MetaTags />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/o-mne" element={<AboutMePage />} />
              <Route path="/sluzby" element={<ServicesPage />} />
              <Route path="/sm-system" element={<SMSystemPage />} />
              <Route path="/diagnozy-a-liecba" element={<DiagnosesPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/impressum" element={<ImprintPage />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;