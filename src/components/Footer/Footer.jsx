'use client';

import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Linha Dourada Sólida no Topo do Footer */}
      <div className={styles.goldDivider} />

      <div className={styles.container}>
        
        {/* COLUNA 1: Logo e Resumo */}
        <div className={styles.brandCol}>
          <a href="#" className={styles.brandLink}>
            <img
              src="/images/logo-dra-fernanda.png"
              alt="Dra. Fernanda Soares"
              className={styles.footerLogo}
            />
          </a>
          <p className={styles.brandText}>
            Médica dedicada à Tricologia Avançada, diagnóstico de patologias do couro cabeludo e transplante capilar de alta precisão.
          </p>
          <div className={styles.crmBadge}>
            <span>CRM-MG | Montes Claros & Pirapora</span>
          </div>
        </div>

        {/* COLUNA 2: Links Rápidos */}
        <div className={styles.navCol}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.navList}>
            <li><a href="#sobre">Sobre a Dra.</a></li>
            <li><a href="#tratamentos">Tratamentos</a></li>
            <li><a href="#resultados">Resultados</a></li>
            <li><a href="#localizacao">Localização</a></li>
            <li><a href="#avaliacoes">Avaliações</a></li>
          </ul>
        </div>

        {/* COLUNA 3: Contato & Atendimento */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Atendimento</h4>
          
          <div className={styles.contactItem}>
            <MapPin size={18} className={styles.icon} />
            <span>Clínica Raffe — Montes Claros & Pirapora (MG)</span>
          </div>

          <div className={styles.contactItem}>
            <Phone size={18} className={styles.icon} />
            <span>(38) 99910-2357</span>
          </div>

          <div className={styles.contactItem}>
            <Clock size={18} className={styles.icon} />
            <span>Segunda a Sexta, das 08h às 18h</span>
          </div>

          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/drafernandamsoares/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* RODAPÉ INFERIOR: Direitos Autorais & Créditos Ágave Lab */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Dra. Fernanda Soares. Todos os direitos reservados.
          </p>

          {/* Créditos Ágave Lab */}
          <div className={styles.developerCredit}>
            <span>Desenvolvido por</span>
            <a
              href="https://www.agavelab.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.agaveLink}
              title="Ágave Lab - Estúdio de Software"
            >
              <img
                src="/images/logo-agave.png"
                alt="Ágave Lab"
                className={styles.agaveLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}