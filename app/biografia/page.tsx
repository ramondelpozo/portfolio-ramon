import Link from 'next/link';

export default function BiografiaPage() {
  const obras = [
    { titulo: "Inmunidad diplomática", tema: "Abusos de poder y corrupción en entornos diplomáticos. Una denuncia de la impunidad." },
    { titulo: "La mujer infiltrada", tema: "Intriga, secretos y la búsqueda de la justicia en un mundo de engaños." },
    { titulo: "Tierra Herida", tema: "El impacto devastador de los fallos del sistema ante desastres naturales." },
    { titulo: "SE VENDE: Derecho a una Vivienda", tema: "Denuncia sobre la especulación inmobiliaria y el derecho a un hogar digno." },
    { titulo: "Tras las huellas del pasado", tema: "Reflexión íntima sobre memoria, culpa y segundas oportunidades." },
    { titulo: "Mascotas en el Olvido", tema: "Bienestar animal y responsabilidad social hacia los seres que dependen de nosotros." }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO BIOGRAFÍA */}
      <section className="py-20 bg-stone-900 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Ramón del Pozo Rott</h1>
        <p className="text-xl text-amber-400 font-medium uppercase tracking-widest mb-6">ESCRITOR • CONDUCTOR PROFESIONAL • CREADOR DE CONTENIDOS</p>
        <p className="text-stone-300 max-w-2xl mx-auto mb-8">Una Trayectoria Marcada por la Autenticidad</p>
        <Link href="/libros" className="inline-block px-8 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition font-medium">
          Explorar mis obras
        </Link>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-stone-200">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Nacido en Frankfurt, Alemania, soy un profesional polifacético que ha sabido integrar mi experiencia en la carretera con una profunda vocación literaria y artística. Domino el español y el alemán como lenguas maternas, una dualidad que enriquece mi visión del mundo.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Mi vida ha sido un constante aprendizaje entre culturas, idiomas y realidades que me han moldeado como persona y como creador.
          </p>
        </div>
      </section>

      {/* CONDUCTOR PROFESIONAL */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">El Camino de un Conductor de Primera</h2>
          <p className="text-stone-700 leading-relaxed mb-8">
            Con una sólida carrera como conductor profesional, he recorrido miles de kilómetros a través de diferentes paisajes y realidades. Esta faceta no es solo un oficio, sino una fuente de inspiración constante que me ha brindado una perspectiva única sobre la sociedad, la responsabilidad y la precisión en cada acción.
          </p>
          <p className="text-stone-600 mb-8 italic">
            La conducción profesional me enseñó el valor de la disciplina, la atención al detalle y el respeto por quienes confían en tu experiencia. Estas lecciones han sido fundamentales en todas mis otras facetas.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">🚛 Conducción Profesional</h3>
              <p className="text-stone-600 text-sm">Experiencia al Volante</p>
              <p className="text-stone-700 text-sm mt-2">Años de trayectoria garantizando seguridad, eficiencia y profesionalismo en cada trayecto.</p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">✍️ Espacio de Escritura</h3>
              <p className="text-stone-600 text-sm">De la Carretera a la Pluma</p>
              <p className="text-stone-700 text-sm mt-2">Cómo las vivencias diarias se transforman en relatos con alma, propósito y denuncia social.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GIRO LITERARIO */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">El Giro Hacia la Literatura de Denuncia</h2>
          <p className="text-stone-700 leading-relaxed mb-6">
            Mi vida dio un giro profundo al enfrentar situaciones laborales que me llevaron a cuestionar valores esenciales como la justicia, el respeto y la dignidad. Estas experiencias me marcaron de manera indeleble y me impulsaron a escribir.
          </p>
          <p className="text-stone-700 leading-relaxed mb-6">
            Mi obra debut, <strong className="text-stone-900">Inmunidad diplomática</strong> (publicada en alemán como <em>Diplomatische Immunität</em>), es un testimonio valiente sobre los abusos de poder en entornos privilegiados. A través de esta novela, busco dar voz a quienes han sido silenciados por el sistema, a quienes han vivido realidades similares de injusticia y desprecio.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Esta obra es solo una entre varias que he escrito, muchas de ellas centradas en la defensa de derechos y la denuncia de injusticias. Mi producción literaria refleja mi compromiso con los temas sociales, políticos y medioambientales, siempre desde una perspectiva humana y cercana.
          </p>
        </div>
      </section>

      {/* TABLA DE OBRAS */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 text-center">Mis Obras: Compromiso Literario</h2>
          <p className="text-stone-600 text-center mb-10 max-w-2xl mx-auto">
            Cada libro que escribo es una invitación a reflexionar sobre las realidades que nos rodean. Son historias que no solo entretienen, sino que generan conciencia y provocan un diálogo necesario sobre la justicia, la dignidad y la transformación social.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="text-left p-4 font-bold text-stone-900 border-b border-stone-200">Obra Destacada</th>
                  <th className="text-left p-4 font-bold text-stone-900 border-b border-stone-200">Temática Principal</th>
                </tr>
              </thead>
              <tbody>
                {obras.map((obra, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="p-4 border-b border-stone-200 font-medium text-stone-900">{obra.titulo}</td>
                    <td className="p-4 border-b border-stone-200 text-stone-600">{obra.tema}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MULTIMEDIA */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-6 text-center">Creador Multimedia: Nuevas Formas de Comunicar</h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-center">
            Ramón no se limita a las palabras. Su creatividad se expande hacia lo visual y lo musical, buscando nuevas formas de conectar con el público y transmitir mensajes que inspiren una transformación social. Creo contenido visual y musical que complementa mi obra escrita.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">🎬 Creación Multimedia</h3>
              <p className="text-stone-600 text-sm">Contenido Audiovisual</p>
              <p className="text-stone-700 text-sm mt-2">Producciones que complementan la narrativa de mis libros y amplían el alcance del mensaje.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">🚀 Próximos Proyectos</h3>
              <p className="text-stone-600 text-sm">Proyectos en Curso</p>
              <p className="text-stone-700 text-sm mt-2">Nuevos horizontes que continúan el legado de conciencia social y transformación.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPÓSITO */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Mi Propósito</h2>
          <p className="text-stone-300 leading-relaxed mb-6">
            Esta página web es mi espacio para compartir noticias, reflexiones y proyectos en curso. Es una invitación a mis lectores y lectoras a participar en un diálogo abierto sobre los temas que me inspiran, con el fin de generar conciencia, abrir caminos de diálogo y aportar a una transformación social cimentada en el respeto y la dignidad humana.
          </p>
          <p className="text-amber-400 font-medium italic">
            Cada palabra, cada imagen, cada nota musical es un paso hacia un mundo más justo y humano.
          </p>
        </div>
      </section>

      {/* FOOTER BIO */}
      <section className="py-12 bg-stone-900 text-stone-400 text-center border-t border-stone-800">
        <div className="container mx-auto px-4">
          <p className="text-sm mb-2">© 2026 Ramón del Pozo Rott. Reservados todos los derechos.</p>
          <p className="text-xs text-stone-500 mb-4">Espacio para la transformación social y el respeto humano.</p>
          <a href="https://www.ramondelpozorott.es" className="text-amber-500 hover:underline text-sm">www.ramondelpozorott.es</a>
        </div>
      </section>
    </main>
  );
}
