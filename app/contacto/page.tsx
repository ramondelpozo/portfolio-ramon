export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 text-center">Contacto</h1>
          <p className="text-xl text-stone-600 mb-12 text-center">
            ¿Hablamos? Estoy abierto a entrevistas, colaboraciones y comentarios de lectores.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            {/* Datos de contacto */}
            <div className="mb-8 pb-8 border-b border-stone-200">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">📧 Email</h3>
                  <a href="mailto:contacto@ramondelpozorott.es" className="text-amber-700 hover:underline">
                    contacto@ramondelpozorott.es
                  </a>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">📱 Redes</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-stone-600 hover:text-amber-700">Twitter / X</a>
                    <a href="#" className="text-stone-600 hover:text-amber-700">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario simple */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Nombre</label>
                <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 outline-none" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 outline-none" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 outline-none" placeholder="Escribe tu mensaje..."></textarea>
              </div>
              <button type="submit" className="w-full bg-stone-900 text-white py-3 rounded-md hover:bg-stone-800 transition font-medium">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
