'use client';

import { useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import ImageSlider from './ImageSlider';
import styles from './ResultModal.module.css';

export default function ResultModal({ isOpen, onClose, caseData }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Trava o scroll de fundo
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !caseData) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Botão de Fechar */}
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <X size={24} />
        </button>

        {/* Comparador Interativo Ampliado */}
        <div className={styles.sliderWrapper}>
          <ImageSlider
            beforeImage={caseData.beforeImage}
            afterImage={caseData.afterImage}
            altText={caseData.title}
          />
        </div>

        {/* Informações do Caso */}
        <div className={styles.modalBody}>
          <span className={styles.category}>{caseData.category}</span>
          <h3 className={styles.title}>{caseData.title}</h3>
          <p className={styles.description}>{caseData.description}</p>
        </div>
      </div>
    </div>
  );
}