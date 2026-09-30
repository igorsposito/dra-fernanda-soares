'use client';

import { MapPin, Phone, Building2, CalendarCheck } from 'lucide-react';
import styles from './ClinicLocation.module.css';

export default function ClinicLocation() {
  return (
    <section id="localizacao" className={styles.clinicLocation}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal-hidden`}>
          <h2 className={styles.title}>
            Nossos Locais de <span className={styles.highlight}>Atendimento</span>
          </h2>
          <p className={styles.subtitle}>
            Ambiente estruturado e preparado para oferecer conforto, privacidade e alta tecnologia médica.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card de Informações */}
          <div className={`${styles.infoCard} reveal-hidden`}>
            <div className={styles.clinicBadge}>
              <Building2 size={22} color="#C5A059" />
              <span>Clínica Raffe (@clinicaraffe)</span>
            </div>

            <div className={styles.addressGroup}>
              <div className={styles.item}>
                <div className={styles.iconBox}>
                  <MapPin size={20} />
                </div>
                <div className={styles.itemText}>
                  <strong>Montes Claros - MG</strong>
                  <p>Rua Gabriel Passos, 140 - Centro</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.iconBox}>
                  <CalendarCheck size={20} />
                </div>
                <div className={styles.itemText}>
                  <strong>Atendimento Pioneiro em Pirapora - MG</strong>
                  <p>Consultas e acompanhamentos periódicos agendados.</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.iconBox}>
                  <Phone size={20} />
                </div>
                <div className={styles.itemText}>
                  <strong>WhatsApp para Agendamento</strong>
                  <p>(38) 99910-2357</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaBox}>
              <a
                href="https://wa.me/5538999102357?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cl%C3%ADnica%20Raffe."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <span>Falar com a Recepção no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mapa do Google Embed */}
          <div className={`${styles.mapWrapper} reveal-hidden`}>
            <iframe
              title="Localização Clínica Raffe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.528249829569!2d-43.8687!3d-16.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQzJzIzLjEiUyA0M8KwNTInMDcuMyJX!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
              className={styles.mapIframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}