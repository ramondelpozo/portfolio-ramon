import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

// Fuentes premium editorial
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

export const metadata: Metadata = {
  title: 'Ramón del Pozo Rott | Escritor de Mundos',
  description: 'Literatura que emociona a adultos y despierta la imaginación infantil. Novelas de suspense, denuncia social y cuentos para aprender jugando.',
  keywords: ['escritor', 'thriller', 'literatura infantil', 'novelas', 'suspense', 'cuentos'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-premium-cream text-premium-charcoal">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-premium-charcoal text-stone-400 py-12 border-t border-stone-800">
          <div className="container-premium text-center text-sm">
            <p>© 2026 Ramón del Pozo Rott. Todos los derechos reservados.</p>
            <p className="mt-2 text-stone-500">Un universo literario creado con pasión.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
