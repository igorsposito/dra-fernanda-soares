'use client';

import { GraduationCap, ShieldCheck, HeartHandshake } from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* LADO ESQUERDO: Conteúdo e Texto */}
        <div className={`${styles.textContent} reveal-left`}>

          <h2 className={styles.title}>
            Ciência, precisão médica e <span className={styles.highlight}>naturalidade</span> na recuperação da sua autoestima.
          </h2>

          <p className={styles.description}>
            A Dra. Fernanda Soares é médica especialista focada em saúde capilar, prevenção da queda e transplante capilar. Com atuação pautada na ética e na individualidade de cada paciente, combina diagnóstico avançado a protocolos personalizados para devolver a densidade e a vitalidade dos seus cabelos.
          </p>

          {/* Destaques em Cards Finos */}
          <div className={styles.credentialsGrid}>
            <div className={`${styles.credentialCard} reveal-up delay-1`}>
              <div className={styles.cardIcon}>
                <GraduationCap size={22} color="#C5A059" />
              </div>
              <div>
                <h4>Especialização Médica</h4>
                <p>Formação focada em Tricologia Avançada e Cirurgia Capilar.</p>
              </div>
            </div>

            <div className={`${styles.credentialCard} reveal-up delay-2`}>
              <div className={styles.cardIcon}>
                <ShieldCheck size={22} color="#C5A059" />
              </div>
              <div>
                <h4>Atendimento Individualizado</h4>
                <p>Tratamentos baseados em exames tricoscópicos detalhados.</p>
              </div>
            </div>
          </div>

          {/* Citação / Assinatura */}
          <div className={styles.quoteBox}>
            <p>
              "Cada fio conta uma história. Meu objetivo não é apenas tratar a queda, mas devolver o bem-estar e a segurança de olhar-se no espelho."
            </p>
            <span className={styles.signature}>Dra. Fernanda Soares — CRM-MG</span>
          </div>
        </div>

        {/* LADO DIREITO: Foto com Moldura e Selo Flutuante */}
        <div className={`${styles.imageWrapper} reveal-right`}>
          <div className={styles.imageCard}>
            <img
              src="/images/dra-fernanda-sobre.png"
              alt="Dra. Fernanda Soares - Médica Tricologista"
              className={styles.doctorImage}
            />
            <div className={styles.goldFrame} />
          </div>

          <div className={`${styles.floatingBadge} reveal-zoom delay-3`}>
            <HeartHandshake size={24} color="#C5A059" />
            <div>
              <strong>Referência em Tricologia</strong>
              <span>Montes Claros & Pirapora</span>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.bottomDivider} />
    </section>
  );
}