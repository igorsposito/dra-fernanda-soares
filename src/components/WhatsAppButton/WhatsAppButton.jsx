'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/5538999102357?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20de%20avalia%C3%A7%C3%A3o.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatButton}
      aria-label="Falar pelo WhatsApp"
    >
      <div className={styles.pulseRing} />
      <MessageCircle size={28} className={styles.icon} />
      <span className={styles.tooltip}>Agendar Consulta</span>
    </a>
  );
}