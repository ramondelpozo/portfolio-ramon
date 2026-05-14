import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Sekou: Raíces de Libertad | Novela Histórica de Ramón del Pozo Rott",
  description: "Una historia de amor, resistencia y supervivencia en tiempos de esclavitud. Ambientada en 1750. Próximamente en Amazon España.",
  keywords: ["novela histórica", "esclavitud", "siglo XVIII", "Ramón del Pozo Rott", "novela española", "resistencia", "libertad"],
  openGraph: {
    title: "Sekou: Raíces de Libertad | Ramón del Pozo Rott",
    description: "Una historia de amor, resistencia y supervivencia en tiempos de esclavitud. Ambientada en 1750.",
    images: ["/libros/portada.png"],
  },
};

export default function SekouRaicesDeLibertadPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero con portada */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Novela Histórica · 1750</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            SEKOU: RAÍCES DE LIBERTAD
          </h1>
          <p className="text-lg text-stone-300 italic max-w-2xl mx-auto">
            Una historia de amor, resistencia y supervivencia en tiempos de esclavitud.
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
                src="/libros/portada.png"
                alt="Portada de Sekou: Raíces de Libertad - novela histórica sobre esclavitud en 1750"
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
                En el año 1750, en plena época de esclavitud, Sekou y otros personajes luchan por sobrevivir en un mundo donde la libertad es un privilegio que les ha sido arrebatado.
              </p>
              <p>
                Entre campos de trabajo forzado, relaciones prohibidas y resistencia silenciosa, nace una historia de amor, dignidad y lucha por la libertad.
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
                "Esclavitud en el siglo XVIII (1750)",
                "Novela histórica y social",
                "Amor y resistencia",
                "Lucha por la libertad humana"
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
              Esta novela nace para mostrar una parte de la historia que no puede olvidarse: la lucha de quienes vivieron sin libertad y aun así resistieron.
            </p>
          </section>

          {/* Disponibilidad + CTA */}
          <section className="mb-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Disponible próximamente
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong className="text-premium-charcoal">Sekou: Raíces de Libertad</strong> es una novela histórica ambientada en 1750 sobre esclavitud y resistencia humana.
            </p>
            
            {/* Botón "Próximamente" con estilo deshabilitado */}
            <button
              disabled
              className="inline-flex items-center gap-2 px-8 py-4 bg-stone-300 text-stone-600 font-medium rounded-xl cursor-not-allowed shadow-soft"
            >
              <span className="text-premium-gold">⧗</span>
              Próximamente en Amazon
            </button>
            
            <p className="text-sm text-stone-500 mt-4">
              ¿Quieres ser avisado del lanzamiento? <Link href="/contacto" className="text-premium-gold hover:underline">Déjame tu email</Link>.
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
          <Link href="/libros/se-vende-derecho-a-una-vivienda" className="text-premium-charcoal hover:text-premium-gold transition-colors font-medium">
            Ver Se Vende →
          </Link>
        </div>
      </nav>

    </main>
  );
}
