import Link from 'next/link';

export default function BiografiaPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 text-center">Sobre Mí</h1>
          
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-stone-200">
            <div className="text-stone-700 space-y-6 leading-relaxed">
              <p className="text-xl font-medium text-stone-900">
                Hola, soy Ramón del Pozo Rott.
              </p>
              <p>
                Soy escritor apasionado por el thriller y la narrativa contemporánea. Mis historias buscan explorar los límites de la realidad y la psicología humana.
              </p>
              <p>
                A través de mis obras, invito a los lectores a cuestionar lo que creen saber y a descubrir las sombras que se esconden tras la cotidianidad.
              </p>
              <hr className="border-stone-200" />
              <p>
                ¿Quieres conocer más detalles o colaborar en un proyecto?
                <Link href="/contacto" className="text-amber-700 font-bold hover:underline ml-1">Escríbeme aquí</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
