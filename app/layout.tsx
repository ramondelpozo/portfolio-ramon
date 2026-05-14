import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ramón del Pozo Rott | Escritor',
  description: 'Portfolio oficial de Ramón del Pozo Rott. Thrillers y narrativa contemporánea.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#faf9f6] text-stone-800`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm border-t border-stone-800">
          © {new Date().getFullYear()} Ramón del Pozo Rott. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}