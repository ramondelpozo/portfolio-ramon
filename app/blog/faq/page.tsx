import Link from 'next/link';

export default function FAQPage() {
  const preguntas = [
    {
      pregunta: "¿Dónde puedo comprar tus libros?",
      respuesta: "Mis libros están disponibles en todas las librerías online (Amazon, Casa del Libro, FNAC) y en librerías físicas bajo pedido."
    },
    {
      pregunta: "¿Haces presentaciones o firmas de libros?",
      respuesta: "Sí, regularmente organizo presentaciones en diferentes ciudades. Suscríbete a mi newsletter para estar al tanto de las próximas fechas."
    },
    {
      pregunta: "¿Aceptas manuscritos para leer o recomendar?",
      respuesta: "Lamentablemente, por volumen de trabajo no puedo leer manuscritos no solicitados. Sin embargo, siempre estoy abierto a colaborar con otros autores."
    },
    {
      pregunta: "¿Das charlas o talleres de escritura?",
      respuesta: "Sí, ofrezco talleres y charlas sobre escritura creativa y construcción de thrillers. Contacta conmigo para más información."
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="container mx-auto px-4 py-16">
        <Link href="/blog" className="text-amber-700 hover:underline mb-8 inline-block">← Volver al Blog</Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Preguntas Frecuentes</h1>
        <p className="text-xl text-stone-600 max-w-3xl mb-12">
          Resuelvo las dudas más habituales sobre mi trabajo, libros y colaboraciones.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {preguntas.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-stone-900 mb-3">{item.pregunta}</h3>
              <p className="text-stone-600">{item.respuesta}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">¿No encuentras lo que buscas?</p>
          <Link href="/contacto" className="inline-block px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition">
            Contacta conmigo
          </Link>
        </div>
      </section>
    </main>
  );
}