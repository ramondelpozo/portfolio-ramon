'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQS = [
  { q: "1. ¿Cómo surgió la idea de tu primer libro?", a: "La idea nació de experiencias personales y de mi deseo de contar historias que reflejen la realidad y los valores que considero importantes." },
  { q: "2. ¿Qué te inspira a escribir?", a: "Me inspiran la vida cotidiana, la justicia social, la naturaleza y las historias de personas que enfrentan desafíos." },
  { q: "3. ¿Cuál es tu proceso creativo o rutina de escritura?", a: "Suelo dedicar tiempo diario a escribir, organizar ideas y documentarme sobre los temas que voy a tratar. La disciplina es clave." },
  { q: "4. ¿Escribes todos los días o solo cuando tienes inspiración?", a: "Escribo de manera constante, aunque a veces la inspiración llegue en momentos inesperados. La constancia es más importante que la inspiración." },
  { q: "5. ¿Cómo eliges los temas de tus libros?", a: "Elijo temas que me preocupan, que me apasionan o que considero importantes para generar conciencia en los lectores." },
  { q: "6. ¿Tienes un género favorito para escribir?", a: "Me gusta combinar narrativa, investigación social y reflexiones sobre temas de actualidad. Cada libro puede abarcar varios géneros." },
  { q: "7. ¿Publicas solo en Amazon o también con editoriales?", a: "Algunos libros han sido publicados por editoriales, pero la mayoría los publico de manera independiente en Amazon." },
  { q: "8. ¿Qué consejos darías a alguien que quiere empezar a escribir?", a: "Que empiece sin miedo, mantenga disciplina, lea mucho y aprenda de cada paso del proceso. Publicar hoy en día es accesible si hay constancia." },
  { q: "9. ¿Cuánto tiempo te lleva escribir un libro?", a: "Depende del tema, la investigación y la extensión, pero cada libro requiere dedicación, revisiones y paciencia." },
  { q: "10. ¿Tus libros están basados en experiencias reales?", a: "Algunos sí, otros combinan hechos reales con ficción para transmitir mensajes y reflexiones importantes." },
  { q: "11. ¿Cómo decides los títulos y portadas de tus libros?", a: "Busco que sean llamativos, que reflejen el contenido y que conecten con los lectores desde el primer vistazo." },
  { q: "12. ¿Tienes otros proyectos además de escribir?", a: "Sí, creo contenido visual y musical que complementa mi obra escrita y enriquece la experiencia de los lectores." },
  { q: "13. ¿Cuál es tu libro favorito entre los que has escrito y por qué?", a: "Cada libro tiene un valor especial, pero los que me han permitido compartir experiencias profundas y generar reflexión suelen ser los más significativos para mí." },
  { q: "14. ¿Cómo te conectas con tus lectores?", a: "A través de redes sociales, mi página web y eventos literarios. Me gusta mantener un diálogo abierto y cercano." },
  { q: "15. ¿Piensas en adaptar algún libro a otros formatos, como audiolibros o series?", a: "Sí, siempre considero nuevas formas de llevar mis historias a más personas, incluyendo audiolibros y otros formatos multimedia." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <section className="py-16 text-center px-4 bg-white border-b border-stone-200">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Preguntas frecuentes</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Preguntas más populares. Preguntas frecuentes que suelen hacerle a un escritor y sus respuestas.
        </p>
      </section>

      {/* FAQ ACORDEÓN */}
      <section className="py-16 container mx-auto px-4 max-w-3xl">
        <div className="space-y-4">
          {FAQS.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left font-medium text-stone-900 hover:bg-stone-50 transition focus:outline-none"
              >
                <span>{item.q}</span>
                <span className={`text-2xl text-amber-600 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-stone-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section className="py-16 bg-stone-100 text-center px-4 border-t border-stone-200">
        <h2 className="text-3xl font-bold text-stone-900 mb-4">¿Necesitas ayuda?</h2>
        <p className="text-stone-600 mb-8 max-w-xl mx-auto">
          No dudes en contactarnos para obtener más ayuda. Rellena el formulario de contacto y me pondré en contacto contigo a la mayor brevedad.
        </p>
        <Link href="/contacto" className="inline-block px-8 py-3 bg-stone-900 text-white rounded hover:bg-stone-800 transition font-medium">
          Contacto
        </Link>
      </section>
    </main>
  );
}
