import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DivideIcon as LucideIcon, Menu, X } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
}

export const NavBar: React.FC<NavBarProps> = ({ items }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://smsystem.b-cdn.net/logo/sps-logo.png"
                alt="SPS Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-bold text-brand-teal">SPS</span>
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-medium tracking-wider text-white">
                      ŠPIRÁLNA STABILIZÁCIA
                    </span>
                    <span className="text-sm md:text-base font-medium tracking-wider text-white">
                      SM - SYSTÉM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {items.map((item) => {
              const isActive = location.pathname === item.url;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`relative px-4 py-2 group transition-all duration-300 ease-in-out`}
                >
                  <span className={`relative z-10 flex items-center gap-2 font-medium ${
                    isActive ? 'text-brand-teal' : 'text-gray-200 group-hover:text-brand-teal'
                  }`}>
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </span>
                  
                  {isActive && (
                    <span className="absolute inset-0 z-0 bg-white/10 rounded-lg blur-sm transform scale-110" />
                  )}
                  
                  <span className="absolute inset-0 z-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-gray-200 hover:text-brand-teal hover:bg-white/5 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-16 bg-brand-navy/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          <div className="px-4 py-6 space-y-4 h-full flex flex-col">
            {/* Navigation Links */}
            <div className="space-y-3">
            {items.map((item) => {
              const isActive = location.pathname === item.url;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-brand-teal bg-white/10' 
                      : 'text-gray-200 hover:text-brand-teal hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
            </div>

            {/* Language Switcher - Bottom of mobile menu */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <LanguageSwitcher isMobile={true} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;