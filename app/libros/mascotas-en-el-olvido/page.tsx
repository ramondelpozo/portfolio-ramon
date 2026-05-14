import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Mascotas en el Olvido | Bienestar Animal de Ramón del Pozo Rott",
  description: "Una historia emotiva que mezcla denuncia social, sensibilidad y suspense sobre el vínculo entre humanos y animales. Disponible en Amazon España.",
  keywords: ["bienestar animal", "abandono de mascotas", "denuncia social", "Ramón del Pozo Rott", "novela española", "empatía"],
  openGraph: {
    title: "Mascotas en el Olvido | Ramón del Pozo Rott",
    description: "Una historia emotiva que mezcla denuncia social, sensibilidad y suspense sobre el vínculo entre humanos y animales.",
    images: ["/libros/4.jpg"],
  },
};

export default function MascotasEnElOlvidoPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero con portada */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Bienestar Animal · Denuncia Social</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            MASCOTAS EN EL OLVIDO
          </h1>
          <p className="text-lg text-stone-300 italic max-w-2xl mx-auto">
            Una historia emotiva que mezcla denuncia social, sensibilidad y suspense sobre el vínculo entre humanos y animales.
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
                src="/libros/mascotas-en-el-olvido.jpg"
                alt="Portada de Mascotas en el Olvido - historia sobre bienestar animal y abandono de mascotas"
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
                En una ciudad donde el abandono animal se ha convertido en algo invisible para la mayoría, diferentes historias se cruzan mostrando la realidad detrás de las mascotas olvidadas.
              </p>
              <p>
                Entre emociones, silencios y decisiones difíciles, la historia revela cómo la empatía puede cambiar destinos.
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
                "Bienestar animal y abandono de mascotas",
                "Denuncia social contemporánea",
                "Empatía y responsabilidad humana",
                "Relación entre humanos y animales"
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
              Esta historia nace de la necesidad de dar voz a quienes no la tienen, mostrando una realidad que muchas veces pasa desapercibida.
            </p>
          </section>

          {/* Disponibilidad + CTA */}
          <section className="mb-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Disponible en Amazon
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Puedes leer <strong className="text-premium-charcoal">Mascotas en el Olvido</strong> en formato físico y digital.
            </p>
            
            {/* Botón Amazon con hover effect */}
            <a
              href="https://www.amazon.es/Mascotas-olvido-RAM%C3%93N-POZO-ROTT/dp/8410975378"
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
              ¿Ya lo leíste? <a href="https://www.amazon.es/Mascotas-olvido-RAM%C3%93N-POZO-ROTT/dp/8410975378" target="_blank" rel="noopener noreferrer" className="text-premium-gold hover:underline">Deja tu reseña</a> y ayuda a otros lectores.
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
          <Link href="/libros/limite-de-control" className="text-premium-charcoal hover:text-premium-gold transition-colors font-medium">
            Ver Límite de Control →
          </Link>
        </div>
      </nav>

    </main>
  );
}

