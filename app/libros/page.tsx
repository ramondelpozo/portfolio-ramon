'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIAS = ['Todos', 'Thriller histórico', 'Thriller tecnológico', 'Thriller y suspense', 'Novela social', 'Drama y superación'];

const LIBROS = [
  { seccion: 'Sección 01: Thriller histórico / Drama / Suspense psicológico', items: [
    { titulo: 'El bosque que calla', sub: 'La verdad que nadie podía decir', desc: 'Hubo un tiempo en que el mundo decidió no mirar. Jacobo y otros supervivientes guardan fragmentos de memoria rota. Este libro no busca consolarte. Busca que no olvides.', estado: 'Próximamente', cat: 'Thriller histórico' }
  ]},
  { seccion: 'Sección 02: Thriller tecnológico / Filosófico', items: [
    { titulo: 'Límite de control', sub: 'Hasta dónde ayudar sin decidir', desc: 'En un Madrid donde cada segundo puede predecirse, Álex Vega se enfrenta a la línea más difícil: salvar vidas sin perder su libertad.', estado: 'Comprar', cat: 'Thriller tecnológico' }
  ]},
  { seccion: 'Sección 03: Thriller y suspense', items: [
    { titulo: 'Ojos de lobo', sub: 'Entre sombras y traición', desc: 'Un accidente en Osaka. Una mentira enterrada. Cuando Lena descubre que sus padres fueron asesinados, se convierte en el siguiente objetivo.', estado: 'Comprar', cat: 'Thriller y suspense' },
    { titulo: 'La cuidadora', sub: 'Recuerda su nombre… o será el tuyo', desc: 'Una mansión aislada en los Picos de Europa. Claudia acepta el trabajo buscando empezar de nuevo. Lo que encuentra es algo muy distinto.', estado: 'Comprar', cat: 'Thriller y suspense' },
    { titulo: 'La mujer infiltrada', sub: 'Nadie sabe quién la controla', desc: 'Una mentira. Una misión. Un juego donde confiar es morir. Claudia descubre que ha sido elegida para algo mucho más peligroso.', estado: 'Comprar', cat: 'Thriller y suspense' },
    { titulo: 'El limpiador', sub: 'Lo que un hombre oculta', desc: 'Jack es invisible: padre distante, marido ausente. Hasta que alguien entra en su casa y deja un mensaje. No fue un robo. Fue un error.', estado: 'Comprar', cat: 'Thriller y suspense' },
    { titulo: 'El último refugio', sub: 'Un refugio oculto. Un pasado oscuro. Un enemigo silencioso', desc: 'Gabriel Orta, exmilitar, se esconde en una cabaña perdida en la montaña. Cuando Celia llega herida, su aislamiento termina para siempre.', estado: 'Comprar', cat: 'Thriller y suspense' },
    { titulo: 'La marea no olvida', sub: 'Una isla. Un secreto. Ninguna salida', desc: 'Elena huye de su pasado… pero en esa isla remota descubre que no se puede escapar de todo. Alguien los ha reunido por una razón.', estado: 'Comprar', cat: 'Thriller y suspense' }
  ]},
  { seccion: 'Sección 04: Novela social y denuncia', items: [
    { titulo: '100.000 millones perdidos', sub: 'La historia de cómo España malgastó tu futuro', desc: 'Entre 2018 y 2025, España perdió 100.000 millones. No fue un error: fue burocracia, ineficiencia y corrupción que hipotecaron una generación.', estado: 'Comprar', cat: 'Novela social' },
    { titulo: 'Bajo el cielo', sub: 'El problema de los sin hogar', desc: 'Revela la verdad sobre el sinhogarismo: no es una elección, sino el resultado de un sistema que falla. Con testimonios reales y soluciones concretas.', estado: 'Comprar', cat: 'Novela social' },
    { titulo: 'Tiempo de respetar', sub: 'La dignidad como derecho en la vejez', desc: 'Denuncia el abandono y la discriminación hacia las personas mayores. Un llamado a la empatía y a la acción.', estado: 'Comprar', cat: 'Novela social' },
    { titulo: 'Tierra herida', sub: 'Cuando la naturaleza golpea y el sistema falla', desc: 'Terremotos, incendios, inundaciones. Historias de quienes perdieron todo y de un sistema que a veces abandona en lugar de proteger.', estado: 'Comprar', cat: 'Novela social' },
    { titulo: 'Inmunidad diplomática', sub: '¿Límite o licencia para el abuso?', desc: 'Veinticinco años en el mundo diplomático enfrentando acoso, discriminación y un despido injusto. Un grito de justicia e igualdad.', estado: 'Comprar', cat: 'Novela social' },
    { titulo: 'Mascotas en el olvido', sub: 'Por el bienestar animal', desc: 'Un homenaje al amor incondicional con nuestras mascotas y una llamada de atención sobre el abandono y la irresponsabilidad.', estado: 'Comprar', cat: 'Novela social' },
    { titulo: 'Se vende', sub: 'Derecho a una vivienda', desc: 'Analiza la crisis habitacional, los precios inasequibles y los desahucios. Un llamado a exigir soluciones que pongan a las personas primero.', estado: 'Comprar', cat: 'Novela social' }
  ]},
  { seccion: 'Sección 05: Drama y superación', items: [
    { titulo: 'El invierno que nos unió', sub: 'Cuando la adversidad fortalece los lazos humanos', desc: 'Una madre desesperada. Su hijo enfermo. 48 horas para salvarlo. Atrapados en una tormenta, una historia de solidaridad y coraje.', estado: 'Comprar', cat: 'Drama y superación' },
    { titulo: 'Rostros de cristales', sub: 'Identidad, aceptación y la fuerza de ser uno mismo', desc: 'Martín lucha por encontrar su lugar en un mundo lleno de prejuicios. Una historia sobre autodescubrimiento y autenticidad.', estado: 'Comprar', cat: 'Drama y superación' },
    { titulo: 'Tras las huellas del pasado', sub: 'Desafíos y decisiones en la búsqueda de un nuevo destino', desc: 'Un joven marcado por la pérdida, la adicción y los desafíos de crecer entre dos culturas. Una historia inspiradora de resiliencia y esperanza.', estado: 'Comprar', cat: 'Drama y superación' }
  ]}
];

const RESENAS = [
  { nombre: 'Karin', texto: 'Denuncia social envuelta en suspense. Poco habitual y muy necesario. Lo recomendaré a todo el mundo.' },
  { nombre: 'Carolina', texto: 'Una lectura que te acompaña mucho después de terminarla. No es solo una novela, es una reflexión.' },
  { nombre: 'José Manuel', texto: 'La tensión está presente en cada página, pero lo que más me llegó fue la verdad emocional de los personajes.' }
];

const DESTACADOS = [
  { titulo: 'La Mujer Infiltrada', desc: 'En una ciudad que podría ser cualquiera —de noche, en pleno invierno—, una mujer sin identidad fija se infiltra donde nadie más logra entrar. Cambia de rostro, de nombre y de vida como quien cambia de abrigo...', autor: 'Carlos R.', cita: 'No podía dejar de leer. La protagonista es fascinante y la historia me mantuvo con el corazón en un puño hasta el final.' },
  { titulo: 'El invierno que nos unió', desc: 'En pleno invierno, una carrera contrarreloj reúne a personas muy distintas con un mismo objetivo: salvar la vida de Leo, un niño cuya única esperanza es llegar al hospital a tiempo...', autor: 'Ana B.', cita: 'Me emocionó de principio a fin. La historia de solidaridad y coraje me llegó al alma.' },
  { titulo: 'The Cleaner (El limpiador)', desc: 'Todos guardamos un secreto. Jack aprendió a hacerse invisible mucho antes de que la vida se lo exigiera: un hombre eficaz, un padre distante, un esposo incapaz de pedir perdón...', autor: 'Pedro M.', cita: 'Una novela intensa y adictiva. Cada giro me sorprendía y los personajes se sienten reales.' },
  { titulo: 'El último refugio', desc: 'Una cabaña aislada. Un pasado que no perdona. Un enemigo invisible. Gabriel Orta creyó que podía desaparecer. Pero cuando Celia, una joven cubierta de nieve y miedo, golpea su puerta...', autor: 'Manuel F.', cita: 'Suspenso constante y personajes inolvidables. Sentí el frío de la nieve y la tensión de cada escena.' },
  { titulo: 'La marea no olvida', desc: 'Hay lugares que no aparecen en los mapas pero que nadie puede ignorar. Lugares que observan en silencio y se quedan dentro de quien los pisa. Esta es la historia de uno de ellos...', autor: 'Laura B.', cita: 'Profundo y conmovedor. Cada personaje tiene su historia y sus secretos. Me hizo reflexionar sobre la memoria, la culpa y la esperanza.' }
];

export default function LibrosPage() {
  const [filtro, setFiltro] = useState('Todos');
  const [pasoRec, setPasoRec] = useState(0);
  const [respuestas, setRespuestas] = useState({});

  const librosFiltrados = filtro === 'Todos' 
    ? LIBROS 
    : LIBROS.map(sec => ({ ...sec, items: sec.items.filter(l => l.cat === filtro) })).filter(sec => sec.items.length > 0);

  const preguntas = [
    { q: '¿Qué tipo de historias te suelen enganchar más?', opts: ['Thriller y suspense', 'Drama y superación', 'Denuncia social', 'Literatura infantil'] },
    { q: '¿Prefieres ritmos rápidos o pausados?', opts: ['Rápidos y adictivos', 'Pausados y reflexivos', 'Mixto'] },
    { q: '¿Qué emoción buscas al leer?', opts: ['Tensión y adrenalina', 'Empatía y reflexión', 'Esperanza y superación'] }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO LIBROS */}
      <section className="py-16 text-center px-4 bg-white border-b border-stone-200">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Libros de Ramón del Pozo Rott</h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto">
          En esta sección encontrarás todos mis libros disponibles en Amazon y también los que próximamente saldrán a la venta.
        </p>
      </section>

      {/* FILTROS */}
      <section className="py-8 bg-stone-50 border-b border-stone-200">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {CATEGORIAS.map(cat => (
            <button key={cat} onClick={() => setFiltro(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${filtro === cat ? 'bg-stone-900 text-white' : 'bg-white text-stone-600 border border-stone-300 hover:border-stone-900'}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* CATÁLOGO */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-stone-900 text-center mb-2">Catálogo de Obras</h2>
        <p className="text-stone-600 text-center mb-12">Thriller, denuncia social y novela de superación</p>
        
        {librosFiltrados.map((sec, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-xl font-bold text-amber-700 mb-6 border-b border-stone-200 pb-2">{sec.seccion}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sec.items.map((libro, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wide text-amber-700 mb-2">{libro.cat}</span>
                  <h4 className="text-2xl font-bold text-stone-900 mb-1">{libro.titulo.toUpperCase()}</h4>
                  <p className="text-stone-500 italic mb-3">{libro.sub}</p>
                  <p className="text-stone-700 text-sm leading-relaxed mb-6 flex-grow">{libro.desc}</p>
                  {libro.estado === 'Comprar' ? (
                    <a href="#" className="inline-block text-center px-6 py-2 bg-stone-900 text-white rounded hover:bg-stone-800 transition font-medium">Comprar</a>
                  ) : (
                    <span className="inline-block text-center px-6 py-2 bg-stone-200 text-stone-600 rounded font-medium cursor-not-allowed">Próximamente</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* RECOMENDADOR */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">¿Por dónde empiezo?</h2>
          <p className="text-stone-300 mb-8">Si no sabes qué libro elegir, cuéntame qué tipos de historias te atrapan y te ayudo a encontrar la tuya.</p>
          
          <div className="bg-stone-800 p-8 rounded-lg text-left">
            {pasoRec < 3 ? (
              <>
                <div className="flex justify-between text-sm text-stone-400 mb-4">
                  <span>Pregunta {pasoRec + 1} de 3</span>
                  <span>{Math.round(((pasoRec)/3)*100)}% completado</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{preguntas[pasoRec].q}</h3>
                <div className="space-y-3">
                  {preguntas[pasoRec].opts.map(opt => (
                    <button key={opt} onClick={() => setRespuestas({...respuestas, [pasoRec]: opt, paso: pasoRec+1})} className="w-full text-left p-4 bg-stone-700 hover:bg-amber-700 rounded transition">
                      {opt}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-amber-400"> Tu recomendación personalizada</h3>
                <p className="text-stone-300 mb-6">Basado en tus respuestas, te recomendamos empezar por <strong>"Límite de Control"</strong> si buscas tensión tecnológica, o <strong>"El invierno que nos unió"</strong> si prefieres drama humano y superación.</p>
                <button onClick={() => setPasoRec(0)} className="px-6 py-2 border border-white rounded hover:bg-white hover:text-stone-900 transition">Volver a empezar</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">Lecturas y Reseñas</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {RESENAS.map((r, i) => (
              <div key={i} className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                <p className="text-stone-700 italic mb-4">"{r.texto}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center font-bold text-amber-800">{r.nombre[0]}</div>
                  <div>
                    <p className="font-bold text-stone-900">{r.nombre}</p>
                    <p className="text-xs text-stone-500">Lector en Amazon España</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTACADOS DETALLADOS */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">Libros Destacados</h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            {DESTACADOS.map((d, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 bg-stone-200 rounded flex items-center justify-center text-stone-500 text-sm">[Portada]</div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{d.titulo}</h3>
                  <p className="text-stone-700 mb-4 leading-relaxed">{d.desc}</p>
                  <div className="bg-stone-50 p-4 rounded border-l-4 border-amber-600 mb-4">
                    <p className="text-sm text-stone-600 italic">"{d.cita}"</p>
                    <p className="text-xs font-bold text-stone-900 mt-2">— {d.autor}</p>
                  </div>
                  <a href="#" className="inline-block px-6 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition font-medium">Lo Quiero</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 text-center bg-white border-t border-stone-200">
        <p className="text-stone-600 mb-4">¿Tienes dudas o quieres saber más sobre mi proceso creativo?</p>
        <Link href="/biografia" className="inline-block px-8 py-3 bg-stone-900 text-white rounded hover:bg-stone-800 transition font-medium">Conocer al autor</Link>
      </section>
    </main>
  );
}
