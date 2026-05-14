import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Límite de Control | Thriller Tecnológico de Ramón del Pozo Rott",
  description: "Thriller tecnológico ambientado en un Madrid donde cada decisión puede ser anticipada antes de ocurrir. Disponible en Amazon España.",
  keywords: ["thriller tecnológico", "control social", "Madrid", "Ramón del Pozo Rott", "novela española", "predicción del comportamiento"],
  openGraph: {
    title: "Límite de Control | Ramón del Pozo Rott",
    description: "Thriller tecnológico ambientado en un Madrid donde cada decisión puede ser anticipada antes de ocurrir.",
    images: ["/libros/Portada.jpg"],
  },
};

export default function LimiteDeControlPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero con portada */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Thriller Tecnológico · Madrid</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            LÍMITE DE CONTROL
          </h1>
          <p className="text-lg text-stone-300 italic max-w-2xl mx-auto">
            Thriller tecnológico ambientado en un Madrid donde cada decisión puede ser anticipada antes de ocurrir.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <article className="section-premium bg-white">
        <div className="container-premium max-w-4xl mx-auto">
          
          {/* Portada destacada */}
          <div className="flex justify-center mb-12">
            <div className="relative w-56 md:w-72 aspect-[2/3] rounded-lg overflow-hidden shadow-premium border-2 border-premium-gold/20">
              <Image
                src="/libros/Portada.jpg"
                alt="Portada de Límite de Control - thriller tecnológico ambientado en Madrid"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Sinopsis */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Sinopsis
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                En un Madrid dominado por sistemas de predicción del comportamiento humano, Álex Vega trabaja dentro de una estructura diseñada para anticipar y evitar el caos social.
              </p>
              <p>
                Pero cuando descubre que el sistema no solo predice las decisiones, sino que también las influye, se enfrenta a una cuestión imposible: hasta dónde se puede controlar una sociedad sin destruir su libertad.
              </p>
            </div>
          </section>

          {/* Temas */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Temas del libro
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-stone-700">
              {[
                "Thriller tecnológico y control social",
                "Libertad individual vs seguridad colectiva",
                "Manipulación de datos y predicción del comportamiento",
                "Madrid como escenario contemporáneo"
              ].map((tema, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-premium-gold mt-1">✦</span>
                  <span>{tema}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Disponibilidad + CTA */}
          <section className="mb-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Disponible en Amazon
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Puedes leer <strong className="text-premium-charcoal">Límite de Control</strong> en formato físico y digital.
            </p>
            
            {/* Botón Amazon con hover effect usando Tailwind (sin JS inline) */}
            <a
              href="https://www.amazon.es/L%C3%ADmite-Control-Hasta-ayudar-decidir/dp/B0GW895LSQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-premium-charcoal text-white font-medium rounded-lg border border-premium-charcoal hover:bg-white hover:text-premium-charcoal transition-all duration-250 ease-in-out shadow-soft"
            >
              Leer en Amazon
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <p className="text-sm text-stone-500 mt-4">
              ¿Ya lo leíste? <a href="https://www.amazon.es/L%C3%ADmite-Control-Hasta-ayudar-decidir/dp/B0GW895LSQ" target="_blank" rel="noopener noreferrer" className="text-premium-gold hover:underline">Deja tu reseña</a> y ayuda a otros lectores.
            </p>
          </section>

        </div>
      </article>

      {/* Navegación entre libros */}
      <nav className="py-8 bg-stone-50 border-t border-stone-200 text-center px-4">
        <div className="container-premium flex flex-wrap justify-center gap-4">
          <Link href="/libros" className="text-premium-charcoal hover:text-premium-gold transition-colors font-medium">
            ← Volver al catálogo
          </Link>
          <span className="text-stone-300">•</span>
          <Link href="/libros/la-mujer-infiltrada" className="text-premium-charcoal hover:text-premium-gold transition-colors font-medium">
            Ver La Mujer Infiltrada →
          </Link>
        </div>
      </nav>

    </main>
  );
}
