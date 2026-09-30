'use client';

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleciona todas as variações de animação
    const elements = document.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-hidden'
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;