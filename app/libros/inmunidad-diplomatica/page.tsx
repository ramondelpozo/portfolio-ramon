import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Inmunidad Diplomática | Thriller Político de Ramón del Pozo Rott",
  description: "Una novela sobre secretos, privilegios y los límites de la justicia cuando el poder no tiene fronteras. Disponible en Amazon España.",
  keywords: ["thriller político", "corrupción internacional", "diplomacia", "Ramón del Pozo Rott", "justicia", "novela española"],
  openGraph: {
    title: "Inmunidad Diplomática | Ramón del Pozo Rott",
    description: "Una historia sobre secretos, privilegios y los límites de la justicia cuando el poder no tiene fronteras.",
    images: ["/libros/3.jpg"],
  },
};

export default function InmunidadDiplomaticaPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero con portada */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Thriller Político · Denuncia</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">
            INMUNIDAD DIPLOMÁTICA
          </h1>
          <p className="text-lg text-stone-300 italic max-w-2xl mx-auto">
            Una historia sobre secretos, privilegios y los límites de la justicia cuando el poder no tiene fronteras.
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
                src="/libros/inmunidad-diplomatica.jpg"
                alt="Portada de Inmunidad Diplomática - novela de thriller político y corrupción internacional"
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
                En un entorno diplomático donde las leyes parecen no aplicarse a todos por igual, se destapan una serie de acontecimientos que ponen en jaque la idea de justicia internacional.
              </p>
              <p>
                Un investigador se adentra en una red de silencios, acuerdos ocultos y protección política, donde cada descubrimiento tiene un precio.
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
                "Thriller político y corrupción internacional",
                "Poder y privilegios diplomáticos",
                "Justicia vs impunidad",
                "Secretos de estado y silencios institucionales"
              ].map((tema, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-premium-gold mt-1">✦</span>
                  <span>{tema}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Por qué escribí este libro */}
          <section className="mb-10 bg-stone-50 p-6 rounded-xl border border-stone-200">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Por qué escribí este libro
            </h2>
            <p className="text-stone-700 leading-relaxed italic">
              Esta novela nace de la idea de que el poder no siempre responde a las mismas reglas para todos, y de cómo eso afecta a la justicia y a las personas comunes.
            </p>
          </section>

          {/* Disponibilidad + CTA */}
          <section className="mb-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Disponible en Amazon
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Puedes leer <strong className="text-premium-charcoal">Inmunidad Diplomática</strong> en formato físico y digital.
            </p>
            
            <a
              href="https://www.amazon.es/Inmunidad-diplom%C3%A1tica-Ram%C3%B3n-pozo-Rott/dp/B0DTJ2D2QF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-premium-charcoal text-white font-medium rounded-xl hover:bg-white hover:text-premium-charcoal hover:border hover:border-premium-charcoal transition-all duration-300 shadow-soft"
            >
              Leer en Amazon
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <p className="text-sm text-stone-500 mt-4">
              ¿Ya lo leíste? <a href="https://www.amazon.es/Inmunidad-diplom%C3%A1tica-Ram%C3%B3n-pozo-Rott/dp/B0DTJ2D2QF" target="_blank" rel="noopener noreferrer" className="text-premium-gold hover:underline">Deja tu reseña</a> y ayuda a otros lectores.
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
          <Link href="/libros/el-bosque-que-calla" className="text-premium-charcoal hover:text-premium-gold transition-colors font-medium">
            Ver El Bosque que Calla →
          </Link>
        </div>
      </nav>

    </main>
  );
}

