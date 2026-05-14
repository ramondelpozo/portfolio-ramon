import Link from 'next/link';

export default function FAQPage() {
  const preguntas = [
    { q: "¿Dónde puedo comprar tus libros?", a: "Mis libros están disponibles en todas las librerías online (Amazon, Casa del Libro, FNAC) y en librerías físicas bajo pedido." },
    { q: "¿Haces presentaciones o firmas de libros?", a: "Sí, regularmente organizo presentaciones en diferentes ciudades. Suscríbete a mi newsletter para estar al tanto de las próximas fechas." },
    { q: "¿Aceptas manuscritos para leer o recomendar?", a: "Lamentablemente, por volumen de trabajo no puedo leer manuscritos no solicitados. Sin embargo, siempre estoy abierto a colaborar con otros autores." },
    { q: "¿Das charlas o talleres de escritura?", a: "Sí, ofrezco talleres y charlas sobre escritura creativa y construcción de thrillers. Contacta conmigo para más información." }
  ];

  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-4">
        <Link href="/blog" className="text-amber-700 hover:underline mb-8 inline-block">← Volver al Blog</Link>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 text-center">Preguntas Frecuentes</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12 text-center">Resuelvo las dudas más habituales sobre mi trabajo, libros y colaboraciones.</p>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {preguntas.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-2">{item.q}</h3>
              <p className="text-stone-600">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">¿No encuentras lo que buscas?</p>
          <Link href="/contacto" className="inline-block px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition font-medium">
            Contacta conmigo
          </Link>
        </div>
      </div>
    </main>
  );
}
