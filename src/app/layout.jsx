import { Urbanist, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';
import { Analytics } from '@vercel/analytics/react';

const urbanist = Urbanist({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-primary',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'], 
  weight: ['400', '600'],
  style: ['italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Dra. Fernanda Soares | Tricologia Médica e Transplante Capilar',
  description:
    'Tratamentos capilares avançados, combate à queda de cabelo e transplante capilar em Montes Claros e Pirapora - MG.',
  icons: {
    icon: '/fav.ico',
    shortcut: '/fav.ico',
    apple: '/fav.ico',
  },
  openGraph: {
    title: 'Dra. Fernanda Soares | Tricologia Médica e Transplante Capilar',
    description:
      'Tratamentos capilares avançados, combate à queda de cabelo e transplante capilar em Montes Claros e Pirapora - MG.',
    url: 'https://dra-fernanda-soares-beta.vercel.app/',
    siteName: 'Dra. Fernanda Soares',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Fernanda Soares - Tricologia e Transplante Capilar',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Fernanda Soares | Tricologia Médica e Transplante Capilar',
    description:
      'Tratamentos capilares avançados, combate à queda de cabelo e transplante capilar em Montes Claros e Pirapora - MG.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${urbanist.variable} ${playfair.variable}`}
    >
      <body>
        <SmoothScroll>
          {children}
          <WhatsAppButton />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}