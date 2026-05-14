import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO PRINCIPAL */}
      <section className="bg-stone-50 py-20 md:py-32 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-4">Ramón del Pozo Rott</h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto mb-4">
          Historias de suspense, acción y realidad para adultos y aprendizaje para niños. Historias que no solo se leen. Se sienten.
        </p>
        <p className="text-stone-500 max-w-2xl mx-auto mb-8">
          Novelas de tensión real y denuncia social. Vivienda, poder, identidad y supervivencia contados desde la emoción y la experiencia humana.
        </p>
        <Link href="/libros" className="inline-block px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition font-medium">
          Descubrir mis libros
        </Link>
        <p className="mt-4 text-sm text-stone-500">Disponible ahora en Amazon España (físico y digital).</p>
      </section>

      {/* HERO NOVELA DESTACADA */}
      <section className="bg-stone-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hero de la novela El Bosque que Calla.</h2>
            <p className="text-stone-300 mb-6 leading-relaxed">
              Adéntrate en un bosque donde el silencio guarda secretos y la memoria pesa más que cualquier miedo. Una historia de supervivencia, misterios y aquello que permanece cuando todo lo demás desaparece.
            </p>
            <p className="text-amber-400 italic mb-6">
              ¡Si disfrutas de la lectura, deja tu reseña en Amazon! Tu opinión ayuda a otros lectores a descubrir esta historia.
            </p>
            <a href="#" className="inline-block px-6 py-3 border border-amber-400 text-amber-400 rounded-md hover:bg-amber-400 hover:text-stone-900 transition font-medium">
              Dejar reseña en Amazon
            </a>
          </div>
          <div className="md:w-1/2 bg-stone-800 aspect-[2/3] rounded-lg flex items-center justify-center text-stone-500">
            [Portada El Bosque que Calla]
          </div>
        </div>
      </section>

      {/* COLECCIÓN 2025-2026 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Estos son algunos de mis libros disponibles y próximos lanzamientos en Amazon España.</h2>
          <p className="text-stone-500 mb-12">Temporada 2025 · 2026 | Colección Literaria Ramón del Pozo Rott</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {['Sekou Raíces de Libertad', 'El Bosque que Calla', 'Límite de Control', 'Ojos de Lobo', 'La Cuidadora'].map((title, i) => (
              <div key={i} className="bg-stone-100 aspect-[2/3] rounded-lg flex items-center justify-center text-stone-600 text-sm p-4 text-center font-medium">
                {title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVEDADES / ÚLTIMOS LIBROS */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-700 font-bold uppercase tracking-wide text-sm">Novedades</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Últimos libros</h2>
            <p className="text-stone-600 mt-2 max-w-2xl mx-auto">Incluye tanto libros ya disponibles como títulos que se lanzarán próximamente.</p>
            <Link href="/libros" className="inline-block mt-4 text-stone-900 font-medium hover:underline">Ver todos mis libros →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 flex gap-6">
              <div className="w-24 h-36 bg-stone-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-stone-500">Portada</div>
              <div>
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">Ya disponible</span>
                <h3 className="text-xl font-bold text-stone-900">Límite de control</h3>
                <p className="text-amber-700 text-sm font-medium mb-2">Thriller tecnológico</p>
                <p className="text-stone-600 text-sm mb-4">Hasta dónde ayudar sin decidir. En un Madrid donde cada segundo puede predecirse, Álex Vega se enfrenta a la línea más difícil: salvar vidas sin perder su libertad.</p>
                <a href="#" className="inline-block px-4 py-2 bg-stone-900 text-white text-sm rounded hover:bg-stone-800 transition">🛒 Comprar</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 flex gap-6">
              <div className="w-24 h-36 bg-stone-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-stone-500">Portada</div>
              <div>
                <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mb-2">Próximamente</span>
                <h3 className="text-xl font-bold text-stone-900">El bosque que calla</h3>
                <p className="text-amber-700 text-sm font-medium mb-2">Thriller histórico</p>
                <p className="text-stone-600 text-sm mb-4">La verdad que nadie podía decir. Hubo un tiempo en que el mundo decidió no mirar. Jacobo y otros supervivientes guardan fragmentos de memoria rota.</p>
                <span className="inline-block px-4 py-2 bg-stone-200 text-stone-500 text-sm rounded cursor-not-allowed">Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÚLTIMAS HISTORIAS PUBLICADAS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">Últimas historias publicadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "El Bosque que calla", desc: "Novela de suspense y misterio donde la supervivencia, la memoria y el trauma se entrelazan..." },
              { title: "Tras las huellas del pasado", desc: "Una historia sobre memoria, culpa y segundas oportunidades. Un protagonista marcado por su pasado..." },
              { title: "Inmunidad Diplomática", desc: "Corrupción y poder en el entorno diplomático. Secretos, privilegios y silencios donde la justicia deja de ser igual..." },
              { title: "Mascotas en el Olvido", desc: "Bienestar animal, abandono y conciencia social. Una historia sobre maltrato, empatía y la posibilidad de cambiar..." }
            ].map((item, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-lg border border-stone-200 hover:shadow-md transition">
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{item.desc}</p>
                <Link href="#" className="text-amber-700 text-sm font-medium hover:underline">Ver libro →</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-stone-600 max-w-2xl mx-auto mb-4">Ficción basada en la realidad: historias sobre vivienda, poder, identidad, corrupción y supervivencia.</p>
            <Link href="/libros" className="inline-block px-6 py-2 border-2 border-stone-900 text-stone-900 rounded hover:bg-stone-100 transition">Explorar historias</Link>
          </div>
        </div>
      </section>

      {/* BIOGRAFÍA TEASER */}
      <section className="py-16 bg-stone-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">Escribo novelas de suspense, acción y ficción social donde la realidad y la emoción siempre están presentes.</p>
          <Link href="/biografia" className="inline-block px-8 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition font-medium">
            Conocer al autor
          </Link>
        </div>
      </section>

      {/* PROMOCIÓN */}
      <section className="py-12 bg-amber-50 border-t border-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-stone-900 mb-2">¡Algunos de mis libros tienen descuentos especiales!</h3>
          <p className="text-stone-600 mb-6">Aprovecha antes de que se agoten.</p>
          <Link href="/libros" className="inline-block px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-800 transition">Ver libros</Link>
        </div>
      </section>

      {/* FOOTER COMPLETO */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Ramón del Pozo Rott</h4>
              <p className="text-sm">Historias que no solo se leen. Se sienten.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">CONOCER MÁS</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/biografia" className="hover:text-white transition">BIOGRAFÍA</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">BLOG</Link></li>
                <li><Link href="/libros" className="hover:text-white transition">LIBROS</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition">CONTACTO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">SOPORTE</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white transition">POLÍTICA DE PRIVACIDAD</Link></li>
                <li><Link href="#" className="hover:text-white transition">POLÍTICA DE COOKIES</Link></li>
                <li><Link href="#" className="hover:text-white transition">AVISO LEGAL</Link></li>
                <li><Link href="#" className="hover:text-white transition">MAPA DEL SITIO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">SIGUE CONECTADO</h4>
              <p className="text-sm mb-4">Mantente conectado y recibe noticias interesantes.</p>
              <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-white transition">📘</a>
                <a href="#" className="hover:text-white transition">📸</a>
                <a href="#" className="hover:text-white transition">🐦</a>
                <a href="#" className="hover:text-white transition">💼</a>
                <a href="#" className="hover:text-white transition">📺</a>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-xs">
            <p>Copyright © 2026 Ramón del Pozo Rott. Reservados todos los derechos.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
