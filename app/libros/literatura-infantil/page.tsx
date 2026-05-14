import Link from 'next/link';

export default function LiteraturaInfantilPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-16">
        <Link href="/libros" className="text-amber-700 hover:underline mb-8 inline-block">← Volver a Libros</Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Literatura Infantil</h1>
        <p className="text-xl text-stone-600 max-w-3xl mb-12">
          Historias diseñadas para despertar la imaginación de los más pequeños, con valores y aventuras que perduran.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Próximamente</h2>
          <p className="text-stone-600">
            Estoy trabajando en nuevos proyectos de literatura infantil. ¡Muy pronto tendré novedades!
          </p>
        </div>
      </section>
    </main>
  );
}