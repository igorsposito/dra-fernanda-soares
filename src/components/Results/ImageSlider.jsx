'use client';

import { useState, useRef, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';
import styles from './ImageSlider.module.css';

export default function ImageSlider({ beforeImage, afterImage, altText }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;

    // Limita entre 3% e 97% para não travar nas bordas
    if (position < 3) position = 3;
    if (position > 97) position = 97;

    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={styles.sliderContainer}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Imagem do DEPOIS */}
      <img
        src={afterImage}
        alt={`${altText} - Depois`}
        className={`${styles.image} ${styles.afterImage}`}
      />
      <span className={`${styles.badge} ${styles.afterBadge}`}>Depois</span>

      {/* Imagem do ANTES */}
      <div
        className={styles.beforeWrapper}
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={`${altText} - Antes`}
          className={`${styles.image} ${styles.beforeImage}`}
        />
        <span className={`${styles.badge} ${styles.beforeBadge}`}>Antes</span>
      </div>

      {/* Linha Divisória e Alça de Arraste */}
      <div
        className={styles.dividerHandle}
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className={styles.handleButton}>
          <MoveHorizontal size={18} color="#12251C" />
        </div>
      </div>
    </div>
  );
}