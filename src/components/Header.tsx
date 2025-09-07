import React, { useState } from 'react';
import { Home, User, Briefcase, FileText, Brain, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './ui/LanguageSwitcher';

const Header = () => {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: t('nav.home'), url: '/', icon: Home },
    { name: t('nav.about'), url: '/o-mne', icon: User },
    { name: t('nav.services'), url: '/sluzby', icon: Briefcase },
    { name: t('nav.system'), url: '/sm-system', icon: Brain },
    { name: t('nav.diagnoses'), url: '/diagnozy-a-liecba', icon: FileText },
  ];

  // Close menu when route changes
  React.useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E3C61]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C6A7]/50 rounded-md"
            aria-label="SPS — Špirálna stabilizácia, SM – SYSTÉM"
          >
            <img
              src="https://smsystem.b-cdn.net/logo/sps-logo.png"
              alt="SPS Logo"
              className="h-16 w-auto sm:h-20 shrink-0 object-contain [vector-effect:non-scaling-stroke]"
              width={64}
              height={64}
              loading="eager"
              decoding="sync"
              aria-hidden="true"
            />
            <span className="flex flex-col leading-tight -space-y-0.5">
              <span className="text-2xl sm:text-[26px] font-bold tracking-tight leading-none text-[#00C6A7]">SPS</span>
              <span className="text-[11px] sm:text-xs font-semibold text-white/90 tracking-wide whitespace-nowrap">ŠPIRÁLNA STABILIZÁCIA</span>
              <span className="text-[10px] sm:text-[11px] font-medium text-white/70 hidden sm:inline">SM&nbsp;–&nbsp;SYSTÉM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className={`font-medium transition-colors ${
                  pathname === item.url ? 'text-[#00C6A7]' : 'text-white/90 hover:text-[#00C6A7]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side: Language (desktop) + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop language */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C6A7]/60"
              aria-label={open ? t('nav.closeMenu') ?? 'Close menu' : t('nav.openMenu') ?? 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out bg-[#0E3C61]/98 border-t border-white/10 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <nav className="px-4 pb-4 pt-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className={`block rounded-lg px-3 py-3 text-base ${
                pathname === item.url ? 'bg-white/10 text-[#00C6A7]' : 'text-white/90 hover:bg-white/5'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile language switcher */}
          <div className="pt-2 border-t border-white/10">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
