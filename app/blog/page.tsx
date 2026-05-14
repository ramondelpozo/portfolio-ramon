import Link from 'next/link';

export default function BlogPage() {
  const articulos = [
    {
      titulo: "El proceso creativo detrás de 'Límite de Control'",
      fecha: "15 de Enero, 2024",
      resumen: "Cómo la tecnología actual inspiró una historia sobre el control y la libertad.",
      enlace: "/blog/proceso-creativo-limite-control"
    },
    {
      titulo: "Escribir thrillers en la era digital",
      fecha: "3 de Diciembre, 2023",
      resumen: "Reflexiones sobre cómo adaptar el género del thriller a los tiempos modernos.",
      enlace: "/blog/thrillers-era-digital"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 text-center">Blog</h1>
        <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto mb-16">
          Reflexiones sobre escritura, procesos creativos y el mundo de la literatura.
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {articulos.map((articulo) => (
            <article key={articulo.titulo} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <span className="text-stone-500 text-sm">{articulo.fecha}</span>
              <h2 className="text-2xl font-bold text-stone-900 mt-2 mb-3">{articulo.titulo}</h2>
              <p className="text-stone-600 mb-4">{articulo.resumen}</p>
              <Link href={articulo.enlace} className="text-amber-700 font-medium hover:underline">
                Leer más →
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog/faq" className="inline-block px-6 py-3 border-2 border-stone-900 text-stone-900 rounded-md hover:bg-stone-100 transition">
            Ver Preguntas Frecuentes (FAQ)
          </Link>
        </div>
      </section>
    </main>
  );
}