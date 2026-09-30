'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqData = [
  {
    question: 'Qual a diferença entre o tratamento em Montes Claros e Pirapora?',
    answer: 'A Dra. Fernanda realiza atendimentos regulares em ambas as cidades. Em Montes Claros, os atendimentos concentram-se na Clínica Raffe. Em Pirapora, os atendimentos ocorrem em datas específicas com agendamento prévio.',
  },
  {
    question: 'Como funciona a primeira consulta com a médica tricologista?',
    answer: 'Na primeira consulta é realizada uma anamnese detalhada, aliada à dermatoscopia digital (tricoscopia) para avaliar a saúde dos folículos pilosos e indicar o protocolo mais adequado para o seu caso.',
  },
  {
    question: 'Quais casos se qualificam para o Transplante Capilar?',
    answer: 'O transplante capilar é indicado após avaliação médica minuciosa para casos de alopecia androgenética (calvície) masculina e feminina, cicatrizes no couro cabeludo ou quando tratamentos clínicos não oferecem mais a densidade desejada.',
  },
  {
    question: 'Como faço para agendar um horário?',
    answer: 'Pode realizar o agendamento diretamente pelo WhatsApp (38) 99910-2357 ou pelos canais oficiais de atendimento da Clínica Raffe.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={`${styles.header} reveal-hidden`}>
          <h2 className={styles.title}>
            Perguntas <span className={styles.highlight}>Frequentes</span>
          </h2>
        </div>

        <div className={styles.accordion}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  className={styles.questionButton}
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`${styles.icon} ${isOpen ? styles.iconRotated : ''}`}
                    size={20}
                  />
                </button>
                <div className={styles.answerWrapper}>
                  <div className={styles.answer}>{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}