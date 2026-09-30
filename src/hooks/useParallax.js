'use client';

import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('[data-parallax-speed]');

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.2;
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const translateY = (windowHeight - rect.top) * speed * 0.1;
          el.style.transform = `translate3d(0, ${translateY}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}