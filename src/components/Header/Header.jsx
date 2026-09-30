'use client';

import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logotipo da Médica */}
        <a href="#" className={styles.brand}>
          <img
            src="/images/logo-dra-fernanda.png"
            alt="Dra. Fernanda Soares - Tricologia e Transplante Capilar"
            className={styles.logo}
          />
        </a>

        {/* Navegação */}
        <nav className={styles.nav}>
          <a href="#sobre" className={styles.link}>Sobre</a>
          <a href="#tratamentos" className={styles.link}>Tratamentos</a>
          <a href="#resultados" className={styles.link}>Resultados</a>
          <a href="#avaliacoes" className={styles.link}>Avaliações</a>
          <a href="#localizacao" className={styles.link}>Localização</a>
          <a href="#faq" className={styles.link}>Dúvidas</a>
        </nav>

        {/* Botão de Agendamento */}
        <a
          href="https://wa.me/5538999102357?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headerCta}
        >
          <Calendar size={16} />
          <span>Agendar Consulta</span>
        </a>
      </div>
    </header>
  );
}