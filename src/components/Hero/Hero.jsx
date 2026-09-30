'use client';

import { MapPin, Award, MessageCircle, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Imagem de Fundo */}
      <div className={styles.bgImageWrapper}>
        <img
          src="/images/hero-bg.png"
          alt="Dra. Fernanda Soares - Tricologia e Transplante Capilar"
          className={styles.bgImage}
        />
      </div>

      {/* Gradiente de Fusão */}
      <div className={styles.overlayGradient} />

      {/* Conteúdo da Hero */}
      <div className={styles.container}>
        <div className={`${styles.content} reveal-hidden`}>
          <div className={styles.badgeGroup}>
            <span className={styles.badge}>
              <CheckCircle2 size={13} />
              CRM-MG
            </span>
            <span className={styles.badge}>
              <MapPin size={13} />
              Montes Claros
            </span>
            <span className={`${styles.badge} ${styles.badgeGold}`}>
              <Award size={13} />
              Pioneira em Pirapora
            </span>
          </div>

          <h1 className={styles.mainTitle}>
            A excelência médica que transforma a sua <span className={styles.highlightText}>saúde capilar</span>.
          </h1>

          <p className={styles.subtitle}>
            Tratamentos capilares avançados, prevenção e transplante capilar com acompanhamento médico especializado. Te ajudo no combate à queda de cabelo!
          </p>

          <div className={styles.actionArea}>
            <a
              href="https://wa.me/5538999102357?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20capilar."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <MessageCircle size={20} />
              <span>Agendar Avaliação</span>
            </a>

            <div className={styles.locationInfo}>
              <MapPin size={16} color="#C5A059" />
              <span>Atendimentos na Clínica Raffe - Montes Claros & Pirapora</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.goldDivider} />
    </section>
  );
}