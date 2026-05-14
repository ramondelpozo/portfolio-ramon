export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 text-center">Contacto</h1>
          <p className="text-xl text-stone-600 text-center mb-12">
            ¿Hablamos? Estoy abierto a colaboraciones, preguntas o simplemente charlar sobre literatura.
          </p>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-bold text-stone-900 mb-2">📧 Email</h3>
                <a href="mailto:contacto@ramondelpozorott.es" className="text-amber-700 hover:underline">
                  contacto@ramondelpozorott.es
                </a>
              </div>
              
              <div>
                <h3 className="font-bold text-stone-900 mb-2">📱 Redes Sociales</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-stone-600 hover:text-amber-700">Twitter / X</a>
                  <a href="#" className="block text-stone-600 hover:text-amber-700">Instagram</a>
                  <a href="#" className="block text-stone-600 hover:text-amber-700">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h3 className="font-bold text-stone-900 mb-4">O envíame un mensaje</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Mensaje</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent" placeholder="¿En qué puedo ayudarte?"></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition font-medium">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}