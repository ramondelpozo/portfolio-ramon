import Link from 'next/link';

const LIBROS_INFANTILES = [
  { categoria: '3-8 años', titulo: 'Aventura en la Selva Mágica', desc: 'Historia ilustrada para leer y colorear. Ideal para estimular imaginación y creatividad.', precio: '7,95 €', amazon: '#' },
  { categoria: '3-8 años', titulo: 'El Gran Desfile de los Colores', desc: 'Un cuento visual donde los niños participan coloreando cada escena.', precio: '7,95 €', amazon: '#' },
  { categoria: '3-8 años', titulo: 'De la Arena a las Cumbres', desc: 'Aventura educativa que combina lectura y pintura paso a paso.', precio: '7,95 €', amazon: '#' },
  { categoria: '3-8 años', titulo: 'Un día en la Granja Alegre', desc: 'Animales, colores y diversión para aprender jugando.', precio: '7,95 €', amazon: '#' },
  { categoria: 'Educativo', titulo: 'Sopas de Letras para Niños', desc: 'Refuerza lectura y atención con actividades divertidas.', precio: '8,99 €', amazon: '#' },
  { categoria: 'Educativo', titulo: 'Mi Gran Cuaderno de Números', desc: 'Aprende números paso a paso de forma visual y sencilla.', precio: '8,99 €', amazon: '#' },
  { categoria: 'Creatividad', titulo: 'Traza, Colorea y Juega', desc: 'Desarrollo de motricidad fina y creatividad infantil.', precio: '7,95 €', amazon: '#' },
  { categoria: 'Aprendizaje', titulo: 'Aprender a trazar el abecedario', desc: 'Primer contacto con letras de forma divertida.', precio: '8,95 €', amazon: '#' },
  { categoria: 'Diversión', titulo: 'Diversión para Colorear', desc: 'Horas de entretenimiento creativo para niños pequeños.', precio: '7,95 €', amazon: '#' }
];

export default function LiteraturaInfantilPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <section className="py-16 text-center px-4 bg-white border-b border-stone-200">
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Literatura Infantil</h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-8">Cuentos infantiles para colorear (3 a 8 años)</p>
        <div className="max-w-3xl mx-auto text-stone-700 leading-relaxed space-y-4">
          <p>Imagina un libro donde tu hijo no solo lee la historia, sino que también la crea con sus propias manos.</p>
          <p>Estos cuentos infantiles para colorear están pensados para niños de 3 a 8 años que aprenden mejor cuando juegan, imaginan y participan activamente.</p>
          <p>Cada libro combina dos cosas que los niños adoran: historias sencillas y dibujos listos para dar vida con color.</p>
          <p className="font-medium text-stone-900 mt-4">No son solo cuentos. Son experiencias creativas que conectan lectura, imaginación y juego.</p>
        </div>
      </section>

      {/* CATÁLOGO DE LIBROS */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LIBROS_INFANTILES.map((libro, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition flex flex-col">
              <span className="inline-block w-fit px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wide rounded-full mb-3">{libro.categoria}</span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{libro.titulo}</h3>
              <p className="text-stone-600 text-sm mb-4 flex-grow">{libro.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                <span className="text-lg font-bold text-stone-900">{libro.precio}</span>
                <a href={libro.amazon} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-stone-900 text-white text-sm rounded hover:bg-stone-800 transition">Ver en Amazon</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS EDUCATIVOS */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-8">Libros para colorear con cuento: aprendizaje y diversión en uno</h2>
          <p className="text-stone-700 mb-6 text-center">Entre los 3 y los 8 años, los niños están desarrollando habilidades clave. Por eso, estos cuentos están pensados para:</p>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            {['Estimular la imaginación desde edades tempranas', 'Mejorar la motricidad fina a través del coloreado', 'Favorecer la concentración', 'Reforzar la comprensión lectora', 'Reducir el tiempo frente a pantallas'].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-stone-50 p-4 rounded-lg">
                <span className="text-amber-600 mt-1 font-bold">✓</span>
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <p className="text-stone-800 font-medium mb-2">👶 Para los más pequeños (3-5 años)</p>
            <p className="text-stone-600 mb-4">Los textos son breves y claros, ideales para leer en familia.</p>
            <p className="text-stone-800 font-medium mb-2">🧒 Para los mayores (6-8 años)</p>
            <p className="text-stone-600">Las historias fomentan la lectura autónoma y la creatividad personal.</p>
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Perfectos para casa, colegio o regalo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['Regalos de cumpleaños', 'Actividades escolares', 'Tiempo creativo en casa', 'Vacaciones sin pantallas'].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 text-stone-700 font-medium">{item}</div>
            ))}
          </div>
          <p className="text-stone-600">Son una opción práctica para padres y profesores que buscan algo más que un simple cuaderno de colorear.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center bg-white border-t border-stone-200">
        <Link href="/libros" className="inline-block px-8 py-3 bg-stone-900 text-white rounded hover:bg-stone-800 transition font-medium">← Volver al catálogo completo</Link>
      </section>
    </main>
  );
}
