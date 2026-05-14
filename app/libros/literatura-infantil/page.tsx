import Link from 'next/link';

export default function LiteraturaInfantilPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <Link href="/libros" className="text-amber-600 hover:underline mb-8 inline-block">← Volver a Libros</Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Literatura Infantil</h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-12">
          Historias diseñadas para despertar la imaginación de los más pequeños, con valores y aventuras que perduran.
        </p>

        <div className="bg-white p-12 rounded-lg shadow-sm border border-stone-200 max-w-3xl mx-auto">
          <p className="text-stone-600 text-lg">
            En esta sección encontrarás mis obras dirigidas al público infantil. Fábulas modernas y cuentos que invitan a soñar.
          </p>
          <p className="text-stone-500 mt-4 italic">
            (Próximamente añadiremos las portadas y descripciones de los nuevos títulos).
          </p>
        </div>
      </div>
    </main>
  );
}
