import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ramón Del Pozo | Escritor & Portfolio',
  description: 'Portfolio oficial de Ramón Del Pozo. Literatura infantil, blog y biografía.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-stone-50">{children}</main>
        <footer className="bg-stone-900 text-stone-400 py-8 text-center text-sm">
          © {new Date().getFullYear()} Ramón Del Pozo. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
