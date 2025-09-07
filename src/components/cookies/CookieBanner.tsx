import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    saveCookiePreferences(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    saveCookiePreferences(onlyNecessary);
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    saveCookiePreferences(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      preferences: prefs,
      timestamp: new Date().toISOString()
    }));

    // Here you would typically initialize/disable tracking services
    // Example: Google Analytics
    if (prefs.analytics) {
      // Initialize Google Analytics
      console.log('Analytics enabled');
    } else {
      // Disable Google Analytics
      console.log('Analytics disabled');
    }
  };

  const togglePreference = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] pointer-events-none">
      <div className="w-80 pointer-events-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-brand-navy text-white p-4 pb-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Cookie className="w-5 h-5 text-brand-teal" />
                <h3 className="text-base font-bold">Cookies</h3>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 pt-3">
            {!showSettings ? (
              // Main banner content
              <div>
                <p className="text-gray-700 mb-3 text-xs leading-relaxed">
                  Používame cookies na zlepšenie vášho zážitku na našej stránke. 
                  Niektoré sú nevyhnutné, iné nám pomáhajú analyzovať návštevnosť.
                </p>
                
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1.5">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 bg-brand-aqua hover:bg-brand-aqua/90 text-white px-3 py-2 rounded-lg font-medium transition-colors text-xs"
                    >
                      Prijať všetky
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg font-medium transition-colors text-xs"
                    >
                      Len nevyhnutné
                    </button>
                  </div>
                  
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center justify-center gap-1.5 text-brand-navy hover:text-brand-teal transition-colors text-xs font-medium"
                  >
                    <Settings className="w-3 h-3" />
                    Nastavenia cookies
                  </button>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-[10px] text-gray-500">
                    Viac informácií v našich{' '}
                    <Link to="/cookie-policy" className="text-brand-teal hover:underline">
                      Zásadách cookies
                    </Link>
                  </p>
                </div>
              </div>
            ) : (
              // Settings panel
              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-sm">Nastavenia cookies</h4>
                
                <div className="space-y-3">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-2">
                      <h5 className="font-medium text-gray-900 mb-0.5 text-xs">Nevyhnutné cookies</h5>
                      <p className="text-[10px] text-gray-600">
                        Potrebné pre základnú funkčnosť stránky
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-4 bg-brand-teal rounded-full flex items-center justify-end px-0.5">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-2">
                      <h5 className="font-medium text-gray-900 mb-0.5 text-xs">Analytické cookies</h5>
                      <p className="text-[10px] text-gray-600">
                        Pomáhajú nám pochopiť, ako používate stránku
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-8 h-4 rounded-full flex items-center transition-colors ${
                        preferences.analytics ? 'bg-brand-teal justify-end' : 'bg-gray-300 justify-start'
                      } px-0.5`}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1 mr-2">
                      <h5 className="font-medium text-gray-900 mb-0.5 text-xs">Marketingové cookies</h5>
                      <p className="text-[10px] text-gray-600">
                        Pre personalizované reklamy (momentálne nepoužívame)
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-8 h-4 rounded-full flex items-center transition-colors ${
                        preferences.marketing ? 'bg-brand-teal justify-end' : 'bg-gray-300 justify-start'
                      } px-0.5`}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </button>
                  </div>
                </div>

                <div className="flex gap-1.5 mt-4">
                  <button
                    onClick={handleSaveSettings}
                    className="flex-1 bg-brand-teal hover:bg-brand-teal/90 text-white px-3 py-2 rounded-lg font-medium transition-colors text-xs flex items-center justify-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    Uložiť nastavenia
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors text-xs"
                  >
                    Späť
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;