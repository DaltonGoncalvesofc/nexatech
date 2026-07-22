import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'NexaTech | Agência Digital Premium',
  description: 'NexaTech transforma ideias em experiências digitais de alto impacto. Serviços em desenvolvimento web, marketing digital, design, IA e gerenciamento completo de projetos.',
  metadataBase: new URL('https://www.nexatech.digital'),
  openGraph: {
    title: 'NexaTech | Agência Digital Premium',
    description: 'Transformamos ideias em experiências digitais de alto impacto com desenvolvimento, marketing, design e IA.',
    type: 'website',
    url: 'https://www.nexatech.digital',
    siteName: 'NexaTech',
    locale: 'pt_BR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaTech | Agência Digital Premium',
    description: 'Experiências digitais premium com web, marketing, design e IA.'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} bg-base text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-base text-white">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
