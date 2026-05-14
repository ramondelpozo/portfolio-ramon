import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO NOVELA DESTACADA */}
      <section className="py-20 bg-stone-900 text-white text-center px-4">
        <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-4 block">LA NUEVA NOVELA DE</span>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Ramón del Pozo Rott</h1>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-100 mb-6">El Bosque que Calla</h2>
        <p className="text-xl max-w-2xl mx-auto mb-4 text-stone-300">Este libro no busca consolarte. Busca que no olvides. Porque el bosque calla. Pero no ha olvidado.</p>
        <blockquote className="text-lg italic text-stone-400 mb-8 max-w-xl mx-auto border-l-4 border-amber-500 pl-4 text-left">
          «El bosque no estaba vacío. Estaba lleno de un silencio que dolía en los huesos.»
        </blockquote>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contacto" className="px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition font-medium">Escríbeme</Link>
          <Link href="#novela-focus" className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-stone-900 transition font-medium">Conocer la novela</Link>
        </div>
      </section>

      {/* FOCUS: EL BOSQUE QUE CALLA */}
      <section id="novela-focus" className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-stone-900 mb-2 text-center">EL BOSQUE QUE CALLA</h3>
          <p className="text-stone-600 text-center mb-10 max-w-2xl mx-auto">
            Aquí encontrarás artículos, análisis y recomendaciones relacionados con la novela El bosque que calla, un thriller histórico de misterio y supervivencia.
            Este libro estará disponible próximamente. Muy pronto podrás leer la novela completa en formato físico y digital.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h4 className="font-bold text-amber-700 mb-3">📌 Artículos principales</h4>
              <ul className="space-y-2 text-stone-700 text-sm list-disc pl-5">
                <li>El bosque que calla: una novela de misterio y supervivencia diferente</li>
                <li>Cómo nació El bosque que calla y su idea central</li>
                <li>Personajes de El bosque que calla explicados</li>
                <li>Qué significa realmente El bosque que calla</li>
                <li>El bosque que calla: análisis del thriller histórico</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h4 className="font-bold text-amber-700 mb-3">📌 Temas de la novela</h4>
              <ul className="space-y-2 text-stone-700 text-sm list-disc pl-5">
                <li>El silencio como elemento narrativo en El bosque que calla</li>
                <li>La memoria colectiva y el trauma en la historia</li>
                <li>Supervivencia en entornos aislados: el significado del bosque</li>
                <li>El misterio como eje central de la novela</li>
                <li>Interpretación psicológica de los personajes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h4 className="font-bold text-amber-700 mb-3">📌 Lecturas relacionadas</h4>
              <ul className="space-y-2 text-stone-700 text-sm list-disc pl-5">
                <li>Novelas similares a El bosque que calla</li>
                <li>Libros de thriller histórico recomendados</li>
                <li>Historias de supervivencia y misterio que debes leer</li>
                <li>Novelas donde el entorno es un personaje más</li>
                <li>Libros con narrativas de trauma y memoria</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h4 className="font-bold text-amber-700 mb-3">📌 Disponibilidad</h4>
              <p className="text-stone-700 text-sm mb-4">El bosque que calla estará disponible próximamente. Muy pronto podrás acceder a la novela completa en Amazon.</p>
              <a href="#" className="inline-block px-4 py-2 bg-stone-900 text-white text-sm rounded hover:bg-stone-800 transition">leer más</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO LIBROS */}
      <section className="py-16 bg-stone-900 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Historias que te atraparán y no podrás soltar.</h2>
        <p className="text-stone-300 max-w-2xl mx-auto mb-8">Misterio, emoción y personajes inolvidables en cada página. Descubre los mundos creados por Ramón del Pozo Rott y vive experiencias que no olvidarás.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/libros" className="px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition font-medium">Ver todos los libros</Link>
          <a href="#" className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-stone-900 transition font-medium">Comprar en Amazon</a>
        </div>
      </section>

      {/* RESEÑAS AMAZON */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Opiniones de lectores en Amazon</h2>
          <p className="text-stone-600 mb-8">Si has disfrutado de estas historias, tu opinión en Amazon ayuda muchísimo. No solo apoya al autor, también permite que otros lectores descubran estos libros.</p>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 text-stone-900 rounded hover:bg-stone-200 transition font-medium mb-10">⭐ Ver y dejar reseña en Amazon</a>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <p className="text-stone-700 italic mb-4">"Cada libro me hizo sentir dentro de la historia, viviendo cada emoción."</p>
              <p className="font-bold text-stone-900">– Lector Apasionado</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <p className="text-stone-700 italic mb-4">"Un autor que combina emoción, tensión y profundidad."</p>
              <p className="font-bold text-stone-900">– Crítico Literario</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSEJOS PARA ESCRITORES */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center">Consejos para escritores</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 space-y-4 text-stone-700 leading-relaxed">
            <p>En esta sección comparto experiencias, aprendizajes y recomendaciones prácticas para quienes quieren escribir, mejorar su técnica o publicar sus propios libros. Aquí encontrarás ideas sobre creatividad, disciplina y herramientas útiles para la escritura y la autoedición, especialmente en plataformas como Amazon.</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-2">Cómo empezar a escribir y publicar un libro</h3>
            <p>Una guía práctica para escritores que quieren convertir ideas en historias publicadas.</p>

            <h4 className="font-bold text-stone-800 mt-4 mb-1">Introducción</h4>
            <p>Escribir no es un acto repentino de inspiración, sino un proceso de construcción. Cada autor empieza desde un punto distinto, pero todos comparten lo mismo: la necesidad de contar una historia.</p>

            <h4 className="font-bold text-stone-800 mt-4 mb-1">Encontrar tu voz narrativa</h4>
            <p>Tu estilo no se copia ni se aprende de forma directa. Se descubre escribiendo. Explorar temas, tonos y estructuras es parte del camino hasta encontrar una voz propia y reconocible.</p>

            <h4 className="font-bold text-stone-800 mt-4 mb-1">Disciplina y constancia</h4>
            <p>La escritura profesional no depende de la inspiración, sino del hábito. Avanzar cada día, aunque sea poco, es lo que transforma una idea en un libro completo.</p>

            <h4 className="font-bold text-stone-800 mt-4 mb-1">Herramientas del escritor moderno</h4>
            <ul className="list-disc pl-5 mb-4 space-y-1">
              <li>Procesadores de texto profesionales</li>
              <li>Sistemas de organización de ideas</li>
              <li>Notas digitales y gestores de investigación</li>
              <li>Herramientas de revisión y estilo</li>
            </ul>

            <h4 className="font-bold text-stone-800 mt-4 mb-1">Publicar en plataformas como Amazon</h4>
            <p>La autoedición ha democratizado el acceso a la publicación. Hoy, cualquier autor puede preparar su manuscrito y compartirlo con lectores de todo el mundo mediante plataformas digitales.</p>

            <h4 className="font-bold text-stone-800 mt-4 mb-1">Conclusión</h4>
            <p>Escribir es un proceso continuo de aprendizaje, revisión y evolución. No existe un punto final perfecto, solo la decisión de empezar y seguir mejorando.</p>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-center mt-8">
              <h5 className="font-bold text-stone-900 mb-2">¿Estás escribiendo tu propio libro?</h5>
              <p className="text-stone-600 mb-4">Comparte tus dudas o experiencias. Cada historia comienza con una conversación.</p>
              <Link href="/contacto" className="inline-block px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-800 transition font-medium">Escríbeme</Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center">Eventos y Promociones de Libros</h2>
          <p className="text-stone-600 mb-10 text-center">Madrid ofrece una amplia variedad de promociones de libros y eventos literarios durante todo el año. Aquí te presento algunas de las principales actividades y oportunidades para disfrutar de la literatura en la ciudad:</p>

          <div className="space-y-6">
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Feria del Libro de Madrid 2026</h3>
              <p className="text-stone-700 mb-3">La 85.ª edición de la Feria del Libro de Madrid se celebrará del 29 de mayo al 14 de junio de 2026 en el Parque de El Retiro. En esta edición, el humor será el protagonista, ofreciendo una programación llena de actividades, firmas de autores y descuentos especiales en libros.</p>
              <a href="#" className="text-amber-700 font-medium hover:underline">Ver más →</a>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-2">La Noche de los Libros 2026</h3>
              <p className="text-stone-700 mb-3">El 23 de abril de 2026, Madrid celebrará la 21.ª edición de La Noche de los Libros, una fiesta literaria que contará con más de 500 actividades gratuitas en toda la ciudad. Participarán más de 300 autores, librerías, bibliotecas y espacios culturales.</p>
              <a href="#" className="text-amber-700 font-medium hover:underline">Ver más →</a>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Actividades en Bibliotecas Municipales</h3>
              <p className="text-stone-700 mb-3">Las bibliotecas de Madrid organizan una amplia gama de actividades literarias, como presentaciones de libros, clubes de lectura y talleres de escritura. Por ejemplo, la Biblioteca Eugenio Trías en El Retiro ofrece una programación mensual con eventos para todos los públicos.</p>
              <a href="#" className="text-amber-700 font-medium hover:underline">Ver más →</a>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-2">Promociones de Libros</h3>
              <p className="text-stone-700">Durante eventos como la Feria del Libro y La Noche de los Libros, muchas librerías ofrecen descuentos especiales en libros. Además, cadenas como Fnac y Casa del Libro suelen realizar promociones durante estas fechas, ofreciendo descuentos y actividades relacionadas con la literatura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORIAS EN FORMATO VISUAL */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Historias en formato visual</h2>
          <p className="text-stone-300 mb-10 max-w-2xl mx-auto">Cada obra va acompañada de una pieza audiovisual que traslada la esencia del libro a la imagen. Una forma de explorar el tono, la atmósfera y la intensidad de cada historia antes de sumergirte en ella.</p>

          <div className="space-y-10">
            <div className="bg-stone-800 p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-2">Descubre el libro en vídeo: Capítulo 1</h3>
              <p className="text-stone-400 mb-4 text-sm">Aquí tienes una presentación del libro. Un avance visual para sumergirte en la historia antes de leerla.</p>
              <div className="aspect-video bg-stone-700 rounded mb-4 flex items-center justify-center text-stone-500">[Vídeo Embed Placeholder]</div>
              <p className="text-stone-300 mb-3">¿Te ha enganchado la historia? Descubre próximamente El Bosque que Calla completo en Amazon y adéntrate en un thriller de ficción histórica.</p>
              <a href="#" className="inline-block px-5 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition text-sm font-medium">Próximamente en Amazon</a>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-2">Descubre el libro en vídeo: Prólogo</h3>
              <p className="text-stone-400 mb-4 text-sm">Aquí tienes una presentación del libro. Un avance visual para sumergirte en la historia antes de leerla.</p>
              <div className="aspect-video bg-stone-700 rounded mb-4 flex items-center justify-center text-stone-500">[Vídeo Embed Placeholder]</div>
              <p className="text-stone-300 mb-3">¿Te ha enganchado la historia? Descubre próximamente El Bosque que Calla completo en Amazon.</p>
              <a href="#" className="inline-block px-5 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition text-sm font-medium">Próximamente en Amazon</a>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg text-left">
              <h3 className="text-xl font-bold mb-2">Descubre Límite de control en vídeo</h3>
              <p className="text-stone-400 mb-4 text-sm">Aquí tienes una presentación del libro. Un avance visual para sumergirte en la historia antes de leerla.</p>
              <div className="aspect-video bg-stone-700 rounded mb-4 flex items-center justify-center text-stone-500">[Vídeo Embed Placeholder]</div>
              <p className="text-stone-300 mb-3">¿Te ha enganchado la historia? Descubre Límite de control completo en Amazon y adéntrate en un thriller donde cada decisión tiene consecuencias.</p>
              <a href="#" className="inline-block px-5 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition text-sm font-medium">Comprar en Amazon</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
