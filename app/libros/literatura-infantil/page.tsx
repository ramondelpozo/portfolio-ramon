"use client";

import Image from "next/image";
import Link from "next/link";

const LIBROS_INFANTILES = [
  {
    id: "selva",
    img: "/libros/Selva-Magica.webp",
    badge: "3-8 años",
    title: "Aventura en la Selva Mágica",
    desc: "Historia ilustrada para leer y colorear. Ideal para estimular imaginación y creatividad.",
    price: "7,95 €",
    amazon: "https://www.amazon.es/Aventura-Selva-M%C3%A1gica-cuento-colorear/dp/B0GQRHHCVP"
  },
  {
    id: "desfile",
    img: "/libros/2-1.jpg",
    badge: "3-8 años",
    title: "El Gran Desfile de los Colores",
    desc: "Un cuento visual donde los niños participan coloreando cada escena.",
    price: "7,95 €",
    amazon: "https://www.amazon.es/dp/B0GQYZN5HL"
  },
  {
    id: "cumbres",
    img: "/libros/Historia-para-colorear.png",
    badge: "3-8 años",
    title: "De la Arena a las Cumbres",
    desc: "Aventura educativa que combina lectura y pintura paso a paso.",
    price: "7,95 €",
    amazon: "https://www.amazon.es/dp/B0GR8JV8XM"
  },
  {
    id: "granja",
    img: "/libros/2-1.jpg",
    badge: "3-8 años",
    title: "Un día en la Granja Alegre",
    desc: "Animales, colores y diversión para aprender jugando.",
    price: "7,95 €",
    amazon: "https://www.amazon.es/d%C3%ADa-sol-Granja-Alegre/dp/B0GQVFK3NF"
  },
  {
    id: "sopas",
    img: "/libros/portada-2.png",
    badge: "Educativo",
    title: "Sopas de Letras para Niños",
    desc: "Refuerza lectura y atención con actividades divertidas.",
    price: "8,99 €",
    amazon: "https://www.amazon.es/dp/B0GTK4J2QV"
  },
  {
    id: "numeros",
    img: "/libros/portada-2.png",
    badge: "Educativo",
    title: "Mi Gran Cuaderno de Números",
    desc: "Aprende números paso a paso de forma visual y sencilla.",
    price: "8,99 €",
    amazon: "https://www.amazon.es/dp/B0GTJ5ZJQ6"
  },
  {
    id: "traza",
    img: "/libros/portada_final_ramon_pozo.webp",
    badge: "Creatividad",
    title: "Traza, Colorea y Juega",
    desc: "Desarrollo de motricidad fina y creatividad infantil.",
    price: "7,95 €",
    amazon: "https://www.amazon.es/dp/B0GTMCKZC2"
  },
  {
    id: "abecedario",
    img: "/libros/Portada-1.png",
    badge: "Aprendizaje",
    title: "Aprender a trazar el abecedario",
    desc: "Primer contacto con letras de forma divertida.",
    price: "8,95 €",
    amazon: "https://www.amazon.es/dp/B0GRNV7ZH5"
  },
  {
    id: "diversion",
    img: "/libros/portada.png",
    badge: "Diversión",
    title: "Diversión para Colorear",
    desc: "Horas de entretenimiento creativo para niños pequeños.",
    price: "7,95 €",
    amazon: "https://www.amazon.es/DIVERSI%C3%93N-PARA-COLOREAR-p%C3%A1ginas-dibujos/dp/B0GQQ8KZX1"
  }
];

export default function LiteraturaInfantilPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7]">
      
      {/* Header sencillo */}
      <header className="text-center py-12 px-4 bg-white border-b border-stone-200">
        <p className="text-sm font-medium tracking-widest uppercase text-[#e11d48] mb-2">
          Literatura Infantil
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111] mb-2">
          Libros para aprender jugando
        </h1>
        <p className="text-[#666] max-w-xl mx-auto">
          Cuentos ilustrados y actividades creativas para niños de 3 a 8 años
        </p>
      </header>

      {/* Galería de libros */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {LIBROS_INFANTILES.map((libro) => (
            <article 
              key={libro.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col"
            >
              {/* Imagen */}
              <div className="relative w-full h-72 sm:h-80 bg-stone-100 overflow-hidden">
                <Image
                  src={libro.img}
                  alt={libro.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Contenido */}
              <div className="p-4 flex flex-col flex-1 gap-2.5">
                
                {/* Badge de categoría */}
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wide text-white bg-[#e11d48] w-fit">
                  {libro.badge}
                </span>

                {/* Título */}
                <h3 className="font-bold text-base text-[#111] leading-tight">
                  {libro.title}
                </h3>

                {/* Descripción */}
                <p className="text-[13px] text-[#666] leading-relaxed flex-1">
                  {libro.desc}
                </p>

                {/* Precio + CTA */}
                <div className="mt-1">
                  <p className="text-[14px] font-bold text-[#111] mb-2">{libro.price}</p>
                  <a
                    href={libro.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-3 py-2.5 bg-[#e11d48] text-white rounded-xl text-[13px] font-bold no-underline hover:opacity-90 transition-opacity"
                  >
                    Ver en Amazon
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="py-12 px-4 text-center bg-white border-t border-stone-200">
        <p className="text-[#666] mb-4">¿Buscas más libros para adultos?</p>
        <Link 
          href="/libros" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] text-white rounded-xl font-medium hover:bg-[#222] transition-colors"
        >
          Ver colección completa
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>

    </main>
  );
}
