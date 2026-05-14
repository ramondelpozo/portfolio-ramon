import Link from 'next/link';
import Image from 'next/image';

export default function LibrosPage() {
  const libros = [
    {
      titulo: "Límite de Control",
      genero: "Thriller Tecnológico",
      descripcion: "En un Madrid donde cada segundo puede ser el último, un analista de datos descubre una conspiración que amenaza con colapsar la ciudad.",
      portada: "/libros/limite-de-control.jpg", // Añade esta imagen en public/libros/
      enlace: "/libros/limite-de-control"
    },
    {
      titulo: "El Bosque que Calla",
      genero: "Thriller Histórico",
      descripcion: "Hubo un tiempo en que el mundo decidió no mirar. Una historia sobre secretos enterrados y verdades que resurgen.",
      portada: "/libros/bosque-que-calla.jpg",
      enlace: "/libros/el-bosque-que-calla"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 text-center">Mis Libros</h1>
        <p className="text-xl text-stone-600 text-center max-w-2xl mx-auto mb-16">
          Thrillers y narrativa contemporánea que exploran los límites de la condición humana.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {libros.map((libro) => (
            <div key={libro.titulo} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="aspect-[2/3] bg-stone-200 relative">
                {/* Aquí irá la portada real */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                  [Portada]
                </div>
              </div>
              <div className="p-6">
                <span className="text-amber-700 text-sm font-bold uppercase tracking-wide">{libro.genero}</span>
                <h2 className="text-2xl font-bold text-stone-900 mt-2 mb-3">{libro.titulo}</h2>
                <p className="text-stone-600 mb-4">{libro.descripcion}</p>
                <Link href={libro.enlace} className="text-amber-700 font-medium hover:underline">
                  Ver más detalles →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/libros/literatura-infantil" className="inline-block px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition">
            Ver Literatura Infantil
          </Link>
        </div>
      </section>
    </main>
  );
}