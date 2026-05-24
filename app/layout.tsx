import type { Metadata } from 'next';
import { Playfair_Display, Inter, Cormorant_Garamond, IM_Fell_English } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Fuentes principales del sitio
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Fuentes adicionales para el widget Colección Literaria
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const imFell = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-im-fell',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ramón del Pozo Rott | Escritor de Mundos',
  description: 'Literatura que emociona a adultos y despierta la imaginación infantil. Novelas de suspense, denuncia social y cuentos para aprender jugando.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${imFell.variable}`}>
      <body className="font-sans antialiased bg-premium-cream text-premium-charcoal">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
