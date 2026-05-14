"use client";

import Image from "next/image";
import Link from "next/link";

const LIBROS_INFANTILES = [
  { id: "selva", img: "/libros/infantil-selva-magica.webp", badge: "3-8 años", title: "Aventura en la Selva Mágica", desc: "Historia ilustrada para leer y colorear. Ideal para estimular imaginación y creatividad.", price: "7,95 €", amazon: "https://www.amazon.es/Aventura-Selva-M%C3%A1gica-cuento-colorear/dp/B0GQRHHCVP" },
  { id: "desfile", img: "/libros/infantil-desfile-colores.jpg", badge: "3-8 años", title: "El Gran Desfile de los Colores", desc: "Un cuento visual donde los niños participan coloreando cada escena.", price: "7,95 €", amazon: "https://www.amazon.es/dp/B0GQYZN5HL" },
  { id: "cumbres", img: "/libros/infantil-arena-cumbres.png", badge: "3-8 años", title: "De la Arena a las Cumbres", desc: "Aventura educativa que combina lectura y pintura paso a paso.", price: "7,95 €", amazon: "https://www.amazon.es/dp/B0GR8JV8XM" },
  { id: "granja", img: "/libros/infantil-granja-alegre.jpg", badge: "3-8 años", title: "Un día en la Granja Alegre", desc: "Animales, colores y diversión para aprender jugando.", price: "7,95 €", amazon: "https://www.amazon.es/d%C3%ADa-sol-Granja-Alegre/dp/B0GQVFK3NF" },
  { id: "sopas", img: "/libros/infantil-sopa-de-letras.webp", badge: "Educativo", title: "Sopas de Letras para Niños", desc: "Refuerza lectura y atención con actividades divertidas.", price: "8,99 €", amazon: "https://www.amazon.es/dp/B0GTK4J2QV" },
  { id: "numeros", img: "/libros/infantil-mi-gran-cuaderno-de-numeros.png", badge: "Educativo", title: "Mi Gran Cuaderno de Números", desc: "Aprende números paso a paso de forma visual y sencilla.", price: "8,99 €", amazon: "https://www.amazon.es/dp/B0GTJ5ZJQ6" },
  { id: "traza", img: "/libros/infantil-traza-colorea-y-juega.webp", badge: "Creatividad", title: "Traza, Colorea y Juega", desc: "Desarrollo de motricidad fina y creatividad infantil.", price: "7,95 €", amazon: "https://www.amazon.es/dp/B0GTMCKZC2" },
  { id: "abecedario", img: "/libros/infantil-abecedario.png", badge: "Aprendizaje", title: "Aprender a trazar el abecedario", desc: "Primer contacto con letras de forma divertida.", price: "8,95 €", amazon: "https://www.amazon.es/dp/B0GRNV7ZH5" },
  { id: "diversion", img: "/libros/diversion-para-colorear.png", badge: "Diversión", title: "Diversión para Colorear", desc: "Horas de entretenimiento creativo para niños pequeños.", price: "7,95 €", amazon: "https://www.amazon.es/DIVERSI%C3%93N-PARA-COLOREAR-p%C3%A1ginas-dibujos/dp/B0GQQ8KZX1" }
];

export default function LiteraturaInfantilPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      <header className="text-center py-12 px-4 bg-white border-b border-stone-200">
        <p className="text-sm font-medium tracking-widest uppercase text-[#e11d48] mb-2">Literatura Infantil</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111] mb-2">Libros para aprender jugando</h1>
        <p className="text-[#666] max-w-xl mx-auto">Cuentos ilustrados y actividades creativas para niños de 3 a 8 años</p>
      </header>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {LIBROS_INFANTILES.map((libro) => (
            <article key={libro.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="relative w-full h-80 sm:h-96 bg-stone-50 overflow-hidden flex items-center justify-center p-4">
                <Image src={libro.img} alt={libro.title} width={300} height={450} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-lg" />
                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wide text-white bg-[#e11d48] shadow-md">{libro.badge}</span>
              </div>
              <div className="p-5 flex flex-col flex-1 gap-3">
                <h3 className="font-bold text-lg text-[#111] leading-tight">{libro.title}</h3>
                <p className="text-[13px] text-[#666] leading-relaxed flex-1">{libro.desc}</p>
                <div className="mt-2 pt-4 border-t border-stone-100">
                  <p className="text-[16px] font-bold text-[#111] mb-3">{libro.price}</p>
                  <a href={libro.amazon} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center px-4 py-3 bg-[#e11d48] text-white rounded-xl text-[14px] font-bold no-underline hover:bg-[#c41a41] hover:shadow-lg transition-all">Ver en Amazon</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 text-center bg-white border-t border-stone-200">
        <p className="text-[#666] mb-4">¿Buscas más libros para adultos?</p>
        <Link href="/libros" className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] text-white rounded-xl font-medium hover:bg-[#222] transition-colors">
          Ver colección completa
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </section>
    </main>
  );
}