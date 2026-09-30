import { Urbanist, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '../components/SmoothScroll/SmoothScroll';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-primary',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['italic'],
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Dra. Fernanda Soares | Tricologia Médica e Transplante Capilar',
  description: 'Tratamentos capilares avançados, combate à queda de cabelo e transplante capilar em Montes Claros e Pirapora - MG.',
  icons: {
    icon: '/fav.ico',
    shortcut: '/fav.ico',
    apple: '/fav.ico',
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
      </body>
    </html>
  );
}