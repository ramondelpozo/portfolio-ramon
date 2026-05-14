import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "El Bosque que Calla | Thriller Histórico de Ramón del Pozo Rott",
  description: "Una novela de suspense y misterio donde la supervivencia, la memoria y el trauma se entrelazan. Próximamente en Amazon España.",
  keywords: ["thriller histórico", "misterio", "supervivencia", "Ramón del Pozo Rott", "novela española", "suspense psicológico"],
  openGraph: {
    title: "El Bosque que Calla | Ramón del Pozo Rott",
    description: "Hubo un lugar donde el silencio se convirtió en la única prueba de lo ocurrido.",
    images: ["/libros/Portada-final-1.png"],
  },
};

export default function ElBosqueQueCallaPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero con portada */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Thriller Histórico · Misterio</span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-3">
            EL BOSQUE QUE CALLA
          </h1>
          <p className="text-lg text-stone-300 italic max-w-2xl mx-auto">
            Hubo un lugar donde el silencio se convirtió en la única prueba de lo ocurrido
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
                src="/libros/Portada-final-1.png"
                alt="Portada de El Bosque que Calla - novela de thriller histórico y misterio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Sobre el libro */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Sobre El Bosque que Calla
            </h2>
            <p className="text-lg text-stone-700 leading-relaxed">
              El bosque que calla es una novela de suspense y misterio en la que la supervivencia, la memoria y el trauma se entrelazan en un entorno donde el pasado nunca ha desaparecido del todo.
            </p>
          </section>

          {/* Sinopsis */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Sinopsis
            </h2>
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <p>
                Hubo un tiempo en el que nadie quiso mirar lo que estaba ocurriendo.
              </p>
              <p>
                En un entorno aislado, un grupo de supervivientes intenta reconstruir un acontecimiento que dejó más preguntas que respuestas. Un lugar donde el silencio no es ausencia, sino una forma de ocultar lo que realmente pasó.
              </p>
              <p>
                Jacobo, junto a los demás, se enfrenta no solo a la necesidad de sobrevivir, sino a algo mucho más difícil: entender qué ocurrió en un bosque donde el tiempo parece haberse detenido.
              </p>
              <p className="font-medium text-premium-charcoal">
                Cuanto más avanzan en su investigación, más evidente se vuelve que el problema no es recordar… sino aceptar lo que el bosque todavía guarda.
              </p>
              <p>
                Jacobo y los demás no solo luchan por sobrevivir, sino por entender qué ocurrió realmente en un lugar donde el pasado sigue vivo entre los árboles.
              </p>
            </div>
          </section>

          {/* Género */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Una novela de thriller histórico y misterio psicológico
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Esta historia combina elementos de thriller histórico, suspense psicológico y narrativa de supervivencia, con un fuerte enfoque en el comportamiento humano en situaciones límite.
            </p>
          </section>

          {/* Temas */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Temas del libro
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-stone-700">
              {[
                "Thriller histórico de supervivencia",
                "Memoria colectiva y trauma",
                "Misterio y reconstrucción del pasado",
                "El silencio como forma de verdad"
              ].map((tema, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-premium-gold mt-1">✦</span>
                  <span>{tema}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Para quién es */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Para quién es este libro
            </h2>
            <ul className="space-y-2 text-stone-700">
              {[
                "Lectores de novela thriller histórico",
                "Amantes del misterio psicológico y el suspense",
                "Personas interesadas en historias de supervivencia",
                "Lectores que buscan novelas intensas y atmosféricas"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-premium-gold mt-1">✓</span>
                  <span>{item}</span>
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
              Esta historia nace de la idea de que hay acontecimientos que no desaparecen, solo se silencian. El bosque representa ese espacio donde lo que no se dice sigue existiendo.
            </p>
          </section>

          {/* Contenido relacionado */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Contenido relacionado
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Muy pronto podrás encontrar artículos y análisis sobre <em>El Bosque que Calla</em>, su significado, sus personajes y su universo narrativo en la sección de <Link href="/blog" className="text-premium-gold hover:underline">Blog</Link>.
            </p>
          </section>

          {/* Más libros */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Más libros del autor
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Descubre otras novelas de Ramón del Pozo Rott y explora más historias de misterio, historia y supervivencia en la <Link href="/libros" className="text-premium-gold hover:underline">colección completa</Link>.
            </p>
          </section>

          {/* Disponibilidad + CTA */}
          <section className="mb-10 text-center">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Disponibilidad
            </h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              <strong className="text-premium-charcoal">El Bosque que Calla estará disponible próximamente.</strong><br />
              Disponible en Amazon España en formato físico y digital. Si te gustan los thrillers atmosféricos, psicológicos y con misterio progresivo, esta historia es para ti.
            </p>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-premium-charcoal text-white font-medium rounded-xl hover:bg-stone-700 transition-all duration-300 shadow-soft hover:shadow-premium hover:-translate-y-0.5"
            >
              <span className="text-premium-gold">⧗</span>
              Próximamente en Amazon
            </a>
            
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
          <Link href="/libros/literatura-infantil" className="text-premium-charcoal hover:text-premium-gold transition-colors font-medium">
            Ver literatura infantil →
          </Link>
        </div>
      </nav>

    </main>
  );
}
