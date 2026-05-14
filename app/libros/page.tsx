import Link from 'next/link';

export default function LibrosPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6">Mis Libros</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12">
          Thrillers y narrativa contemporánea que exploran los límites de la condición humana.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          {/* Libro 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">Límite de Control</h2>
            <p className="text-amber-600 font-bold text-sm mb-4 uppercase tracking-wide">Thriller Tecnológico</p>
            <p className="text-stone-600 mb-6">
              En un Madrid donde cada segundo puede ser el último, un analista de datos descubre una conspiración que amenaza con colapsar la ciudad.
            </p>
            <Link href="/libros/limite-de-control" className="text-stone-900 font-bold hover:text-amber-600 transition underline">
              Leer más →
            </Link>
          </div>

          {/* Libro 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">El Bosque que Calla</h2>
            <p className="text-amber-600 font-bold text-sm mb-4 uppercase tracking-wide">Thriller Histórico</p>
            <p className="text-stone-600 mb-6">
              Hubo un tiempo en que el mundo decidió no mirar. Una historia sobre secretos enterrados y verdades que resurgen.
            </p>
            <Link href="/libros/el-bosque-que-calla" className="text-stone-900 font-bold hover:text-amber-600 transition underline">
              Leer más →
            </Link>
          </div>
        </div>

        {/* Enlace a Literatura Infantil */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <p className="text-stone-600 mb-4">¿Buscas algo diferente?</p>
          <Link href="/libros/literatura-infantil" className="inline-block px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition font-medium">
            Ver Literatura Infantil
          </Link>
        </div>
      </div>
    </main>
  );
}
