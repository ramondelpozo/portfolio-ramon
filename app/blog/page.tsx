import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Blog</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12">Reflexiones sobre escritura, procesos creativos y el mundo de la literatura.</p>
        
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <article className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            <span className="text-stone-500 text-sm">15 de Enero, 2024</span>
            <h2 className="text-2xl font-bold text-stone-900 mt-2 mb-3">El proceso creativo detrás de 'Límite de Control'</h2>
            <p className="text-stone-600 mb-4">Cómo la tecnología actual inspiró una historia sobre el control y la libertad.</p>
            <Link href="#" className="text-amber-700 font-medium hover:underline">Leer más →</Link>
          </article>
          <article className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            <span className="text-stone-500 text-sm">3 de Diciembre, 2023</span>
            <h2 className="text-2xl font-bold text-stone-900 mt-2 mb-3">Escribir thrillers en la era digital</h2>
            <p className="text-stone-600 mb-4">Reflexiones sobre cómo adaptar el género del thriller a los tiempos modernos.</p>
            <Link href="#" className="text-amber-700 font-medium hover:underline">Leer más →</Link>
          </article>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200">
          <Link href="/blog/faq" className="inline-block px-8 py-3 border-2 border-stone-900 text-stone-900 rounded-md hover:bg-stone-100 transition font-medium">
            Ver Preguntas Frecuentes (FAQ)
          </Link>
        </div>
      </div>
    </main>
  );
}
