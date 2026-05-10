import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Angra Romance — Dia dos Namorados em Angra dos Reis',
  description:
    'Quatro dias privativos para casais em Angra dos Reis e Ilha Grande. Banquete autoral à beira-mar. Apenas 6 vagas por temporada.',
  metadataBase: new URL('https://seusite.com.br'),
  openGraph: {
    title: 'O Destino do Amor — Angra dos Reis · 2026',
    description:
      'Edição limitada para casais: 4 dias, 6 vagas, um banquete inesquecível.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-[#1A0F08] text-ink-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
