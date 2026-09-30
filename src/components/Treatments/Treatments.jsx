'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import styles from './Treatments.module.css';

const PROCEDURES = [
  {
    id: 'tricologia',
    title: 'Tricologia Médica & Tricoscoipia',
    description: 'Diagnóstico computadorizado e investigação aprofundada para tratar calvície, eflúvio telógeno e patologias do couro cabeludo.',
    image: '/images/proc-tricologia.webp',
  },
  {
    id: 'transplante',
    title: 'Transplante Capilar FUE',
    description: 'Restauração cirúrgica de alta precisão com extração de unidades foliculares, garantindo densidade e linha frontal 100% natural.',
    image: '/images/proc-transplante.webp',
  },
  {
    id: 'mmp',
    title: 'MMP Capilar & Microagulhamento',
    description: 'Microinfusão de medicamentos diretamente na raiz do folículo para estimular o crescimento de novos fios e cessar a queda.',
    image: '/images/proc-mmp.jpg',
  },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className={styles.section}>
      <div className={styles.container}>
        
        {/* Cabeçalho da Seção */}
        <div className={`${styles.header} reveal-zoom`}>
          <h2 className={styles.title}>
            Conheça nossos <span className={styles.highlight}>procedimentos</span>
          </h2>
          <p className={styles.subtitle}>
            Tecnologia médica de ponta e protocolos científicos desenvolvidos para a saúde integral do seu cabelo.
          </p>
        </div>

        {/* Grade de Cards com Animações Diversificadas */}
        <div className={styles.grid}>
          {/* Card 1: Entra da Esquerda */}
          <div className={`${styles.card} reveal-left delay-1`}>
            <div className={styles.imageWrapper}>
              <img
                src={PROCEDURES[0].image}
                alt={PROCEDURES[0].title}
                className={styles.cardImage}
              />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{PROCEDURES[0].title}</h3>
              <p className={styles.cardDescription}>{PROCEDURES[0].description}</p>
              <a
                href="https://wa.me/5538999102357?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Tricologia%20M%C3%A9dica."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardCta}
              >
                <span>Saber mais</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Card 2: Subindo pelo Centro */}
          <div className={`${styles.card} reveal-up delay-2`}>
            <div className={styles.imageWrapper}>
              <img
                src={PROCEDURES[1].image}
                alt={PROCEDURES[1].title}
                className={styles.cardImage}
              />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{PROCEDURES[1].title}</h3>
              <p className={styles.cardDescription}>{PROCEDURES[1].description}</p>
              <a
                href="https://wa.me/5538999102357?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Transplante%20Capilar."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardCta}
              >
                <span>Saber mais</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Card 3: Entra da Direita */}
          <div className={`${styles.card} reveal-right delay-3`}>
            <div className={styles.imageWrapper}>
              <img
                src={PROCEDURES[2].image}
                alt={PROCEDURES[2].title}
                className={styles.cardImage}
              />
              <div className={styles.imageOverlay} />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{PROCEDURES[2].title}</h3>
              <p className={styles.cardDescription}>{PROCEDURES[2].description}</p>
              <a
                href="https://wa.me/5538999102357?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Gostaria%20de%20saber%20mais%20sobre%20o%20MMP%20Capilar."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardCta}
              >
                <span>Saber mais</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}