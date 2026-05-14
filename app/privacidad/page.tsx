import { Metadata } from "next";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Política de Privacidad | Ramón del Pozo Rott",
  description: "Información sobre el tratamiento de datos personales en www.ramondelpozorott.es. Derechos RGPD, finalidad, conservación y seguridad.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const rights = [
    "Confirmar si estamos tratando sus datos personales.",
    "Acceder a sus datos, solicitar su rectificación o supresión.",
    "Solicitar la limitación del tratamiento en determinadas circunstancias.",
    "Oponerse al tratamiento por motivos relacionados con su situación particular.",
    "Solicitar la portabilidad de sus datos en soporte automatizado a otro responsable."
  ];

  const dataCategories = [
    "Datos de identificación",
    "Códigos o claves de identificación",
    "Direcciones postales o electrónicas",
    "Preferencias e intereses asociados a la actividad en la web"
  ];

  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Protección de Datos</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Política de Privacidad
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Información sobre el tratamiento de datos personales en www.ramondelpozorott.es
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <article className="section-premium bg-white">
        <div className="container-premium max-w-4xl mx-auto prose prose-stone max-w-none">
          
          {/* Responsable del tratamiento */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              ¿Quién es el Responsable del tratamiento de sus datos?
            </h2>
            <ul className="space-y-2 text-stone-700">
              <li className="flex gap-2">
                <span className="text-premium-gold">•</span>
                <span><strong>Identidad:</strong> Ramón del Pozo Rott</span>
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

          {/* Finalidad del tratamiento */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              ¿Con qué finalidad tratamos sus datos personales?
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              En www.ramondelpozorott.es tratamos la información que nos facilitan las personas interesadas con el fin de:
            </p>
            <ul className="space-y-2 text-stone-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-premium-gold mt-1">✦</span>
                <span>Informar sobre mis libros, novedades, contenidos y eventos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-premium-gold mt-1">✦</span>
                <span>Gestionar la inscripción y participación en concursos, sorteos o eventos que se soliciten.</span>
              </li>
            </ul>
            <p className="text-stone-600 text-sm italic">
              Sólo podrán prestar su consentimiento personas mayores de 16 años. Si se tomasen decisiones automatizadas en base a dicha información, se informará debidamente antes de recabar los datos en el formulario de registro.
            </p>
          </section>

          {/* Conservación de datos */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              ¿Por cuánto tiempo conservaremos sus datos?
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Los datos personales se conservarán hasta que el interesado solicite su supresión o revoque su consentimiento. Para revocar su consentimiento puede enviar su solicitud a: <a href="mailto:info@ramondelpozorott.es" className="text-premium-gold hover:underline">info@ramondelpozorott.es</a>.
            </p>
          </section>

          {/* Legitimación */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              ¿Cuál es la legitimación para el tratamiento de sus datos?
            </h2>
            <p className="text-stone-700 leading-relaxed">
              La base legal para el tratamiento de los datos es el consentimiento del interesado, que podrá revocar en cualquier momento.
            </p>
          </section>

          {/* Derechos del interesado */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              ¿Cuáles son sus derechos cuando nos facilita sus datos?
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Cualquier persona tiene derecho a:
            </p>
            <ul className="space-y-2 text-stone-700 mb-4">
              {rights.map((right, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-premium-gold mt-1">✓</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="text-stone-600 leading-relaxed mb-4">
              Tras la cancelación, los datos se conservarán únicamente bloqueados para cumplir obligaciones legales.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Para más información sobre sus derechos o para presentar una reclamación, puede contactar con nuestro departamento de protección de datos en <a href="mailto:contacto@ramondelpozorott.es" className="text-premium-gold hover:underline">contacto@ramondelpozorott.es</a> o ante la Agencia Española de Protección de Datos: <a href="https://www.agpd.es" target="_blank" rel="noopener noreferrer" className="text-premium-gold hover:underline">www.agpd.es</a>.
            </p>
          </section>

          {/* Obtención de datos */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              ¿Cómo hemos obtenido sus datos?
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Los datos personales tratados proceden directamente del propio interesado.
            </p>
          </section>

          {/* Categorías de datos */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Categorías de datos que se tratan
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-stone-700 mb-4">
              {dataCategories.map((category, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-premium-gold mt-1">✦</span>
                  <span>{category}</span>
                </li>
              ))}
            </ul>
            <p className="text-stone-600 italic">
              No se tratan datos especialmente protegidos.
            </p>
          </section>

          {/* Seguridad */}
          <section className="mb-10 bg-stone-50 p-6 rounded-xl border border-stone-200">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              ¿Cómo garantizamos la seguridad de sus datos?
            </h2>
            <p className="text-stone-700 leading-relaxed">
              Adoptamos las medidas necesarias para evitar su alteración, tratamiento o acceso no autorizado, teniendo en cuenta en todo momento el estado de la tecnología.
            </p>
          </section>

          {/* Enlaces a otras páginas legales */}
          <section className="pt-8 border-t border-stone-200">
            <p className="text-stone-600 text-center">
              También puedes consultar:{" "}
              <Link href="/aviso-legal" className="text-premium-gold hover:underline font-medium">Aviso Legal</Link>
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
