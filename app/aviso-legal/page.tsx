import { Metadata } from "next";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Aviso Legal | Ramón del Pozo Rott",
  description: "Información legal, propiedad intelectual y condiciones de uso del sitio web www.ramondelpozorott.es",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Información Legal</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Aviso Legal
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE)
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <article className="section-premium bg-white">
        <div className="container-premium max-w-4xl mx-auto prose prose-stone max-w-none">
          
          {/* Información General */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Información General
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), ponemos a su disposición la información general del sitio web:
            </p>
            <ul className="space-y-2 text-stone-700">
              <li className="flex gap-2">
                <span className="text-premium-gold">•</span>
                <span><strong>Titular del sitio web:</strong> Ramón del Pozo Rott</span>
              </li>
              <li className="flex gap-2">
                <span className="text-premium-gold">•</span>
                <span><strong>Correo electrónico:</strong> <a href="mailto:info@ramondelpozorott.es" className="text-premium-gold hover:underline">info@ramondelpozorott.es</a></span>
              </li>
              <li className="flex gap-2">
                <span className="text-premium-gold">•</span>
                <span><strong>Sitio web:</strong> www.ramondelpozorott.es</span>
              </li>
            </ul>
          </section>

          {/* Propiedad Intelectual */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Propiedad Intelectual
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Todos los contenidos del sitio web <strong>www.ramondelpozorott.es</strong> —textos, imágenes, diseño gráfico, código fuente, logotipos, marcas, etc.— son propiedad exclusiva de Ramón del Pozo Rott y están protegidos por la normativa de Propiedad Intelectual e Industrial.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Queda prohibida la reproducción, modificación, distribución o manipulación de los contenidos sin autorización expresa del titular.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Los usuarios pueden acceder y visualizar los contenidos con fines personales y no comerciales, respetando siempre las indicaciones de propiedad intelectual y los dispositivos de protección incluidos.
            </p>
          </section>

          {/* Reserva de Derechos */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Reserva de Derechos
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Me reservo el derecho de actualizar, modificar o eliminar información contenida en este sitio web, así como su configuración y prestaciones, en cualquier momento y sin previo aviso.
            </p>
            <p className="text-stone-700 leading-relaxed mt-4">
              El acceso y uso del sitio web implica la aceptación de estas condiciones.
            </p>
          </section>

          {/* Licencia de Enlaces */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Licencia de Enlaces
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Cualquier enlace a este sitio web deberá dirigirse únicamente a la página principal de <strong>www.ramondelpozorott.es</strong>.
            </p>
            <p className="text-stone-700 font-medium mb-3">No se permite:</p>
            <ul className="space-y-2 text-stone-700">
              {[
                "Reproducir o imitar total o parcialmente el contenido o la apariencia gráfica del sitio web.",
                "Colocar marcos o enlaces ensamblados ('link inline') que alteren la navegación.",
                "Hacer manifestaciones falsas o denigratorias sobre el sitio web o sus contenidos.",
                "Utilizar contenidos con fines ilícitos o que puedan dañar el funcionamiento del sitio web o de terceros."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-premium-gold mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Legislación Aplicable */}
          <section className="mb-10 bg-stone-50 p-6 rounded-xl border border-stone-200">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Legislación Aplicable
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Este sitio web se rige por la legislación española.
            </p>
          </section>

          {/* Enlaces a otras páginas legales */}
          <section className="pt-8 border-t border-stone-200">
            <p className="text-stone-600 text-center">
              También puedes consultar:{" "}
              <Link href="/privacidad" className="text-premium-gold hover:underline font-medium">Política de Privacidad</Link>
              {" | "}
              <Link href="/cookies" className="text-premium-gold hover:underline font-medium">Política de Cookies</Link>
            </p>
          </section>

        </div>
      </article>

      {/* Navegación */}
      <nav className="py-8 bg-stone-50 border-t border-stone-200 text-center px-4">
        <div className="container-premium">
          <Link href="/" className="inline-flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-colors font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </nav>

    </main>
  );
}
