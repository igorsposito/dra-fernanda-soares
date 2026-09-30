'use client';

import { useState } from 'react';
import { Clock, CheckCircle2, Sparkles, Maximize2 } from 'lucide-react';
import ImageSlider from './ImageSlider';
import ResultModal from './ResultModal';
import styles from './Results.module.css';

const CASES = [
  {
    id: 1,
    category: 'TRATAMENTO CAPILAR • MESOTERAPIA',
    title: 'Manutenção Pós-Transplante & Recuperação de Densidade',
    duration: '8 meses de tratamento',
    description: 'Paciente com transplante capilar prévio realizado há 10 anos sem manutenção. Recuperação de volume e densidade através de protocolo contínuo de mesoterapia.',
    beforeImage: '/images/resultado-1-antes.jpg',
    afterImage: '/images/resultado-1-depois.jpg',
    animationClass: 'reveal-left delay-1',
  },
{
  id: 2,
  category: 'INTRADERMOTERAPIA • MESOTERAPIA',
  title: 'Preenchimento de Coroa e Aumento de Densidade',
  duration: '9 sessões de tratamento',
  description: 'Evolução na região do vértice através de protocolo bem indicado e constância nas sessões, estimulando o espessamento dos fios e a cobertura do couro cabeludo.',
  beforeImage: '/images/resultado-2-antes.jpg',
  afterImage: '/images/resultado-2-depois.jpg',
  animationClass: 'reveal-right delay-2',
},
{
  id: 3,
  category: 'TRANSPLANTE CAPILAR • CIRURGIA FUE',
  title: 'Restauração de Linha Frontal & Entradas',
  duration: '6 meses pós-operatório',
  description: 'Evolução expressiva com 6 meses de pós-transplante capilar, redesenhando a linha frontal com alta densidade folicular e acabamento 100% natural.',
  beforeImage: '/images/resultado-3-antes.jpg',
  afterImage: '/images/resultado-3-depois.jpg',
  animationClass: 'reveal-left delay-3',
},
{
  id: 4,
  category: 'ALOPECIA ANDROGENÉTICA • TRATAMENTO INTRADÉRMICO',
  title: 'Tratamento de Calvície Feminina & Fortalecimento',
  duration: '3 meses / 5ª sessão intradérmica',
  description: 'Paciente diagnosticada com alopecia androgenética. Ajuste preciso da dosagem medicamentosa associado ao protocolo intradérmico, devolvendo a cobertura e o volume na região parietal.',
  beforeImage: '/images/resultado-4-antes.jpg',
  afterImage: '/images/resultado-4-depois.jpg',
  animationClass: 'reveal-right delay-4',
},
];

export default function Results() {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section id="resultados" className={styles.section}>
      <div className={styles.container}>
        
        {/* Cabeçalho */}
        <div className={`${styles.header} reveal-zoom`}>
          <h2 className={styles.title}>
            Alguns de nossos <span className={styles.highlight}>resultados</span>
          </h2>
          <p className={styles.subtitle}>
            Arraste a barra para comparar. Clique na imagem para expandir em tela cheia.
          </p>
        </div>

        {/* Grade de Cards */}
        <div className={styles.grid}>
          {CASES.map((item) => (
            <div key={item.id} className={`${styles.card} ${item.animationClass}`}>
              
              {/* Container com Dica de Expandir */}
              <div className={styles.imageCardHeader}>
                <ImageSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  altText={item.title}
                  onOpenModal={() => setSelectedCase(item)}
                />
                <button
                  className={styles.expandHint}
                  onClick={() => setSelectedCase(item)}
                  title="Ver em tela cheia"
                >
                  <Maximize2 size={14} />
                  <span>Expandir</span>
                </button>
              </div>

              {/* Corpo do Card */}
              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <Clock size={14} color="#8C6F34" />
                  <span>{item.duration}</span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>

                <div className={styles.cardFooter}>
                  <CheckCircle2 size={16} color="#C5A059" />
                  <span>Acompanhamento Médico Direto</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`${styles.ctaBox} reveal-up delay-2`}>
          <div className={styles.ctaText}>
            <Sparkles size={20} color="#C5A059" />
            <span>Quer entender qual o protocolo ideal para o seu tipo de cabelo?</span>
          </div>
          <a
            href="https://wa.me/5538999102357?text=Ol%C3%A1%2C%20Dra.%20Fernanda!%20Vi%20os%20resultados%20no%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agendar Consulta de Avaliação
          </a>
        </div>

      </div>

      {/* Modal de Tela Cheia */}
      <ResultModal
        isOpen={!!selectedCase}
        onClose={() => setSelectedCase(null)}
        caseData={selectedCase}
      />
    </section>
  );
}