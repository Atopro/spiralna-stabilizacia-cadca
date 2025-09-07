import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Reset scroll position instantly when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Reset any IntersectionObserver animations that might have been triggered
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
      element.classList.remove('animate-in');
    });
  }, [pathname]);
};