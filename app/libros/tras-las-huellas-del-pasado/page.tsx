export default function TrasLasHuellasPage() {
  return (
    <main className="min-h-screen bg-premium-cream py-20 px-4">
      <div className="container-premium max-w-4xl mx-auto text-center">
        <h1 className="font-serif text-4xl font-bold text-premium-charcoal mb-6">
          Tras las huellas del pasado
        </h1>
        <p className="text-lg text-stone-600 mb-8">
          Una historia sobre memoria, culpa y segundas oportunidades.
        </p>
        <a 
          href="https://www.amazon.es/TRAS-LAS-HUELAS-DEL-PASADO/dp/B0DLGSCG8X"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#61CE70] text-white rounded-lg font-semibold hover:bg-[#4fb85d] transition-all"
        >
          Comprar en Amazon
        </a>
      </div>
    </main>
  );
}
