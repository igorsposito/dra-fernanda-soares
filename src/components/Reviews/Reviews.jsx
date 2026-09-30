'use client';

import { Star, ExternalLink, MessageSquarePlus } from 'lucide-react';
import styles from './Reviews.module.css';

const REVIEWS = [
  {
    id: 1,
    author: 'Dhiogo Meira',
    meta: '8 críticas • 6 fotos',
    time: 'Há um ano',
    rating: 5,
    initials: 'D',
    bgColor: '#1565C0',
    text: 'Quero deixar um grande agradecimento à minha doutora Fernanda. Desde o primeiro momento, foi super atenciosa comigo, explicando cada detalhe do tratamento e me dando todas as dicas para obter o melhor resultado. Além de ser extremamente qualificada, demonstra um carinho enorme pelo que faz. Muito obrigado por toda a dedicação!',
  },
  {
    id: 2,
    author: 'Mercia Moreira',
    meta: 'Guia local • 17 críticas • 1 foto',
    time: 'Há um ano',
    rating: 5,
    initials: 'M',
    bgColor: '#EF6C00',
    text: 'Recomendo a Dra. Fernanda, pois é uma verdadeira especialista em sua área de atuação, sempre atualizada com as melhores técnicas e com um toque muito humano. Muito cuidadosa, atenciosa e profissional, e passa muita confiança ao paciente.',
  },
  {
    id: 3,
    author: 'Thiago Soares Guimarães',
    meta: '3 críticas',
    time: 'Há um ano',
    rating: 5,
    initials: 'T',
    bgColor: '#2E7D32',
    text: 'Dra. Fernanda Moreira é uma ótima médica e excelente profissional!! A melhor em sua área!! Não nada do que reclamar, somente enaltecer seu trabalho impecável e maravilhoso!! Fe você é a melhor!!',
  },
  {
    id: 4,
    author: 'Cátia Boaventura',
    meta: '4 críticas',
    time: 'Há um ano',
    rating: 5,
    avatarImage: '/images/avatar-catia.jpg', // ou usar inicial 'C' se não tiver a foto
    initials: 'C',
    bgColor: '#6A1B9A',
    text: 'Dra. Fernanda é ótima médica. Problemas com queda de cabelo ou falhas no couro cabeludo, sobrancelhas e barbas, ela, com certeza, resolve, e com excelência.',
  },
  {
    id: 5,
    author: 'Nadson Silveira',
    meta: '8 críticas',
    time: 'Há um ano',
    rating: 5,
    avatarImage: '/images/avatar-nadson.jpg', // ou usar inicial 'N' se não tiver a foto
    initials: 'N',
    bgColor: '#0288D1',
    text: 'A Dra. Fernanda foi muito transparente e sincera, o que me fez sentir muito mais seguro e confiante de fazer o tratamento capilar',
  },
  {
    id: 6,
    author: 'Tânia Moreira Soares',
    meta: '1 crítica',
    time: 'Há um ano',
    rating: 5,
    initials: 'T',
    bgColor: '#455A64',
    text: 'Excelente profissional! Dedicada a tudo que faz!!',
  },
];

export default function Reviews() {
  const googleReviewLink =
    'https://search.google.com/local/writereview?placeid=ChIJpVC1ViS3S68RrC4i32XVZeg';

  return (
    <section id="avaliacoes" className={styles.section}>
      <div className={styles.container}>
        {/* Cabeçalho da Seção */}
        <div className={`${styles.header} reveal-zoom`}>
          <div className={styles.googleHeaderBadge}>
            <svg className={styles.googleGLogo} viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.23v3.13C3.21 21.28 7.32 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.6H1.23C.44 8.18 0 9.99 0 12s.44 3.82 1.23 5.4l4.05-3.13z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.21 2.72 1.23 6.6l4.05 3.13c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
            <span>Google Avaliações</span>
          </div>

          <h2 className={styles.title}>
            O que nossos pacientes <span className={styles.highlight}>dizem</span>
          </h2>

          <div className={styles.scoreRow}>
            <span className={styles.scoreNumber}>5.0</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FBBC05" color="#FBBC05" />
              ))}
            </div>
            <span className={styles.scoreText}>Avaliações Reais no Google Maps</span>
          </div>
        </div>

        {/* Cards dos Comentários Reais */}
        <div className={styles.grid}>
          {REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`${styles.card} reveal-up delay-${(index % 3) + 1}`}
            >
              <div className={styles.cardHeader}>
                <div
                  className={styles.avatar}
                  style={{ backgroundColor: review.bgColor }}
                >
                  {review.initials}
                </div>
                <div className={styles.authorMeta}>
                  <strong className={styles.authorName}>{review.author}</strong>
                  <span className={styles.reviewTime}>{review.time}</span>
                </div>
                <svg className={styles.cardGoogleIcon} viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.23v3.13C3.21 21.28 7.32 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.6H1.23C.44 8.18 0 9.99 0 12s.44 3.82 1.23 5.4l4.05-3.13z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.32 0 3.21 2.72 1.23 6.6l4.05 3.13c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div className={styles.cardStars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>

              <p className={styles.cardText}>"{review.text}"</p>
            </div>
          ))}
        </div>

        {/* Botões para Avaliar e Ver Mais */}
        <div className={`${styles.actionRow} reveal-up delay-2`}>
          <a
            href={googleReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.writeReviewBtn}
          >
            <MessageSquarePlus size={18} />
            <span>Fazer uma Avaliação no Google</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Dra+Fernanda+Soares+-+Transplante+Capilar+%2F+Tricologia/@-16.7230029,-43.8737421,17z/data=!4m8!3m7!1s0xab53b22456a54f:0xe865d565df2222bc!8m2!3d-16.7230081!4d-43.8711672!9m1!1b1!16s%2Fg%2F11x0dc12r6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAllBtn}
          >
            <span>Ver todas no Google Maps</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}