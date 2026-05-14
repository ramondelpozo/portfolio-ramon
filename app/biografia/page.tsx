export default function BiografiaPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 text-center">Sobre Mí</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-stone-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Soy <strong>Ramón del Pozo Rott</strong>, escritor apasionado por los thrillers y la narrativa contemporánea. Mi trabajo explora los límites de la condición humana en un mundo cada vez más complejo.
              </p>
              
              <p>
                Mis obras combinan la tensión del thriller con reflexiones profundas sobre la sociedad actual. Desde "Límite de Control" hasta "El Bosque que Calla", cada libro es una invitación a cuestionar lo que damos por sentado.
              </p>
              
              <p>
                Cuando no estoy escribiendo, me dedico a explorar nuevas formas narrativas y a compartir mi experiencia con otros escritores a través de talleres y charlas.
              </p>
              
              <div className="mt-8 pt-8 border-t border-stone-200">
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Contacto</h2>
                <p>
                  ¿Quieres saber más sobre mis libros o colaborar en algún proyecto? 
                  <a href="/contacto" className="text-amber-700 hover:underline ml-1">Escríbeme</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}