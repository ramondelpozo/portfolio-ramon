"use client";

import Link from "next/link";

export default function BlogPromo() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      
      {/* Título y texto */}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-premium-charcoal mb-4 text-center">
        Historias que te atraparán y no podrás soltar.
      </h2>
      <p className="text-lg text-stone-600 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
        Misterio, emoción y personajes inolvidables en cada página. Descubre los mundos creados por Ramón del Pozo Rott y vive experiencias que no olvidarás.
      </p>

      {/* Botones CTA */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <Link
          href="https://www.amazon.es/stores/author/B0DLLJLYZR/allbooks?ingress=0&visitId=3a78944c-09ec-428a-a0b1-c1475224713e&ref_=ap_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-premium-charcoal text-white font-medium rounded-lg hover:bg-stone-700 transition-all duration-300 shadow-soft hover:shadow-premium"
        >
          Ver todos los libros
        </Link>
        <Link
          href="https://www.amazon.es/stores/author/B0DLLJLYZR/allbooks?ingress=0&visitId=3a78944c-09ec-428a-a0b1-c1475224713e&ref_=ap_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#ff6b00] text-white font-medium rounded-lg hover:bg-[#ff8a33] transition-all duration-300 shadow-soft hover:shadow-[0_6px_18px_rgba(255,107,0,0.3)]"
        >
          Comprar en Amazon
        </Link>
      </div>

      {/* 🔥 Caja de reseñas Amazon */}
      <div className="bg-gradient-to-br from-[#fff7e6] to-[#fff1cc] border-2 border-[#ff9900] rounded-2xl p-6 mb-10 text-center shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-transform duration-300">
        
        {/* Header con logo Amazon */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
            alt="Amazon" 
            className="w-10 h-auto"
          />
          <span className="font-bold text-premium-charcoal text-lg">Opiniones de lectores en Amazon</span>
        </div>

        {/* Texto explicativo */}
        <p className="text-[15px] text-[#333] leading-relaxed mb-5 max-w-xl mx-auto">
          Si has disfrutado de estas historias, tu opinión en Amazon ayuda muchísimo.
          No solo apoya al autor, también permite que otros lectores descubran estos libros.
        </p>

        {/* Botón de reseñas */}
        <a
          href="https://www.amazon.es/stores/author/B0DLLJLYZR/allbooks?ingress=0&visitId=3a78944c-09ec-428a-a0b1-c1475224713e&ref_=ap_rdr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ff9900] text-[#111] font-bold px-5 py-3 rounded-xl hover:bg-[#ffb84d] hover:scale-105 transition-all duration-300 shadow-soft"
        >
          ⭐ Ver y dejar reseña en Amazon
        </a>
      </div>

      {/* Testimonios */}
      <h3 className="font-serif text-xl font-bold text-premium-charcoal mb-4 text-center">
        Testimonios de lectores
      </h3>
      
      <div className="space-y-4 max-w-2xl mx-auto">
        <blockquote className="italic text-stone-600 text-center">
          "Cada libro me hizo sentir dentro de la historia, viviendo cada emoción." 
          <span className="not-italic font-medium text-premium-charcoal block mt-1">– Lector Apasionado</span>
        </blockquote>
        
        <blockquote className="italic text-stone-600 text-center">
          "Un autor que combina emoción, tensión y profundidad." 
          <span className="not-italic font-medium text-premium-charcoal block mt-1">– Crítico Literario</span>
        </blockquote>
      </div>

    </section>
  );
}
