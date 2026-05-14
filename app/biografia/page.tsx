import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Biografía | Ramón del Pozo Rott - Escritor y Conductor Profesional",
  description: "Conoce la trayectoria de Ramón del Pozo Rott: escritor de narrativa contemporánea, conductor profesional y creador de contenido multimedia.",
  keywords: ["biografía", "Ramón del Pozo Rott", "escritor", "conductor profesional", "autor español"],
};

export default function BiografiaPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-12 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-3 inline-block">Sobre el Autor</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Ramón del Pozo Rott
          </h1>
          <p className="text-stone-300 mt-2 text-sm md:text-base">
            Escritor • Conductor Profesional • Creador de Contenidos
          </p>
        </div>
      </section>

      {/* Introducción con foto - CENTRADA */}
      <section className="py-10 px-4">
        <div className="container-premium max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft border border-stone-200 p-6 md:p-8">
            
            {/* Foto centrada */}
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-premium-gold/30 shadow-lg">
                <Image
                  src="/autor/autor.png"
                  alt="Ramón del Pozo Rott - Escritor"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Texto centrado */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-premium-charcoal mb-4">
                Una Trayectoria Marcada por la Autenticidad
              </h2>
              <div className="text-stone-700 space-y-3 text-sm md:text-base">
                <p>
                  Nacido en <span className="font-semibold text-premium-gold">Frankfurt, Alemania</span>, soy un profesional polifacético que ha sabido integrar mi experiencia en la carretera con una profunda vocación literaria y artística. Domino el español y el alemán como lenguas maternas, una dualidad que enriquece mi visión del mundo.
                </p>
                <p>
                  Mi vida ha sido un constante aprendizaje entre culturas, idiomas y realidades que me han moldeado como persona y como creador.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/libros" className="inline-flex items-center gap-2 px-6 py-3 bg-premium-gold text-premium-black font-medium rounded-full hover:bg-premium-goldLight transition-all">
                  Explorar mis obras
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conductor Profesional - CON IMÁGENES */}
      <section className="py-8 px-4 bg-white">
        <div className="container-premium max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
            El Camino de un Conductor de Primera
          </h3>
          <p className="text-stone-700 mb-4 text-sm md:text-base leading-relaxed">
            Con una sólida carrera como <span className="font-semibold text-premium-gold">conductor profesional</span>, he recorrido miles de kilómetros a través de diferentes paisajes y realidades. Esta faceta no es solo un oficio, sino una fuente de inspiración constante que me ha brindado una perspectiva única sobre la sociedad, la responsabilidad y la precisión en cada acción.
          </p>
          <p className="text-stone-600 mb-6 text-sm md:text-base leading-relaxed">
            La conducción profesional me enseñó el valor de la disciplina, la atención al detalle y el respeto por quienes confían en tu experiencia. Estas lecciones han sido fundamentales en todas mis otras facetas.
          </p>

          {/* Cards con imágenes */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
              <div className="relative h-40 bg-stone-200">
                <Image
                  src="/publicidad/conductor_profesional.png"
                  alt="Conducción Profesional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-premium-charcoal mb-2 text-base">🚛 Conducción Profesional</h4>
                <p className="text-stone-600 text-sm">Años de trayectoria garantizando seguridad, eficiencia y profesionalismo en cada trayecto.</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
              <div className="relative h-40 bg-stone-200">
                <Image
                  src="/publicidad/escritor_espacio.png"
                  alt="Espacio de Escritura"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-premium-charcoal mb-2 text-base">✍️ Espacio de Escritura</h4>
                <p className="text-stone-600 text-sm">Cómo las vivencias diarias se transforman en relatos con alma, propósito y denuncia social.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giro Literario */}
      <section className="py-8 px-4 bg-stone-50">
        <div className="container-premium max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
            El Giro Hacia la Literatura de Denuncia
          </h3>
          <p className="text-stone-700 mb-3 text-sm md:text-base leading-relaxed">
            Mi vida dio un giro profundo al enfrentar situaciones laborales que me llevaron a cuestionar valores esenciales como la <span className="font-semibold text-premium-gold">justicia, el respeto y la dignidad</span>. Estas experiencias me marcaron de manera indeleble y me impulsaron a escribir.
          </p>
          <p className="text-stone-700 mb-3 text-sm md:text-base leading-relaxed">
            Mi obra debut, <em className="font-semibold">Inmunidad diplomática</em> (publicada en alemán como <em>Diplomatische Immunität</em>), es un testimonio valiente sobre los abusos de poder en entornos privilegiados.
          </p>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Esta obra es solo una entre varias que he escrito, muchas de ellas centradas en la defensa de derechos y la denuncia de injusticias. Mi producción literaria refleja mi compromiso con los temas sociales, políticos y medioambientales, siempre desde una perspectiva humana y cercana.
          </p>
        </div>
      </section>

      {/* Tabla de Obras */}
      <section className="py-8 px-4 bg-white">
        <div className="container-premium max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 text-center">
            Mis Obras: Compromiso Literario
          </h3>
          <p className="text-stone-600 text-center mb-6 text-sm max-w-3xl mx-auto">
            Cada libro que escribo es una invitación a reflexionar sobre las realidades que nos rodean.
          </p>

          <div className="overflow-x-auto rounded-lg border border-stone-200">
            <table className="w-full text-sm">
              <thead className="bg-stone-100">
                <tr>
                  <th className="text-left p-3 font-bold text-premium-charcoal">Obra Destacada</th>
                  <th className="text-left p-3 font-bold text-premium-charcoal hidden md:table-cell">Temática Principal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: "Inmunidad diplomática", theme: "Abusos de poder y corrupción en entornos diplomáticos" },
                  { title: "La mujer infiltrada", theme: "Intriga, secretos y búsqueda de justicia" },
                  { title: "Tierra Herida", theme: "Impacto de fallos del sistema ante desastres naturales" },
                  { title: "SE VENDE: Derecho a una Vivienda", theme: "Especulación inmobiliaria y derecho a un hogar" },
                  { title: "Tras las huellas del pasado", theme: "Memoria, culpa y segundas oportunidades" },
                  { title: "Mascotas en el Olvido", theme: "Bienestar animal y responsabilidad social" }
                ].map((book, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="p-3 border-t border-stone-200 font-semibold text-premium-charcoal text-sm">{book.title}</td>
                    <td className="p-3 border-t border-stone-200 text-stone-600 text-sm hidden md:table-cell">{book.theme}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Multimedia - CON IMÁGENES */}
      <section className="py-8 px-4 bg-stone-50">
        <div className="container-premium max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 text-center">
            Creador Multimedia
          </h3>
          <p className="text-stone-700 mb-6 text-center text-sm max-w-3xl mx-auto">
            Mi creatividad se expande hacia lo visual y lo musical, buscando nuevas formas de conectar con el público.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <div className="relative h-40 bg-stone-200">
                <Image
                  src="/publicidad/creador_multimedia.png"
                  alt="Contenido Audiovisual"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-premium-charcoal mb-2 text-base">🎬 Contenido Audiovisual</h4>
                <p className="text-stone-600 text-sm">Producciones que complementan la narrativa de mis libros y amplían el alcance del mensaje.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              <div className="relative h-40 bg-stone-200">
                <Image
                  src="/publicidad/proximos_proyectos.png"
                  alt="Próximos Proyectos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-premium-charcoal mb-2 text-base">🚀 Proyectos en Curso</h4>
                <p className="text-stone-600 text-sm">Nuevos horizontes que continúan el legado de conciencia social y transformación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-8 px-4 bg-gradient-premium text-white">
        <div className="container-premium max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">Mi Propósito</h3>
          <p className="text-stone-300 mb-3 text-sm leading-relaxed">
            Esta página web es mi espacio para compartir noticias, reflexiones y proyectos en curso. Es una invitación a participar en un diálogo abierto sobre los temas que me inspiran.
          </p>
          <p className="text-premium-gold italic text-sm">
            Cada palabra, cada imagen, cada nota musical es un paso hacia un mundo más justo y humano.
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 bg-premium-black text-center px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-stone-400 mb-4 text-sm">¿Quieres conocer más sobre mi trabajo o colaborar en un proyecto?</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-premium-gold text-premium-black font-medium rounded-full hover:bg-premium-goldLight transition-all">
            Contacta conmigo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
