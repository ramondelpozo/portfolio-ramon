import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      
      {/* HERO: Presentación principal */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight">
          Ramón Del Pozo
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Escritor. Creador de historias. Apasionado por la literatura infantil y la narrativa contemporánea.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            href="/biografia" 
            className="px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition font-medium"
          >
            Conóceme
          </Link>
          <Link 
            href="/libros" 
            className="px-8 py-3 border-2 border-stone-900 text-stone-900 rounded-md hover:bg-stone-100 transition font-medium"
          >
            Ver mis libros
          </Link>
        </div>
      </section>

      {/* ACCESOS RÁPIDOS A SECCIONES */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Libros */}
          <Link 
            href="/libros" 
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-stone-200 group"
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition">Libros</h3>
            <p className="text-stone-600 text-sm">Explora mi obra publicada y mis próximas publicaciones.</p>
          </Link>

          {/* Blog & FAQ */}
          <Link 
            href="/blog" 
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-stone-200 group"
          >
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition">Blog & FAQ</h3>
            <p className="text-stone-600 text-sm">Artículos, reflexiones y respuestas a preguntas frecuentes.</p>
          </Link>

          {/* Contacto */}
          <Link 
            href="/contacto" 
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-stone-200 group"
          >
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition">Contacto</h3>
            <p className="text-stone-600 text-sm">¿Hablamos? Escríbeme para colaboraciones o consultas.</p>
          </Link>

        </div>
      </section>

    </main>
  );
}