import { Metadata } from "next";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Política de Cookies | Ramón del Pozo Rott",
  description: "Información sobre el uso de cookies en www.ramondelpozorott.es. Tipos de cookies, gestión y configuración del navegador.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CookiesPolicyPage() {
  const cookies = [
    {
      name: "Google Analytics",
      purpose: "Recopila datos de navegación de manera anónima para analizar la información y mejorar la web.",
      link: "https://policies.google.com/privacy",
      linkText: "Política de privacidad de Google Analytics"
    },
    {
      name: "Google Adwords Conversion",
      purpose: "Recopila datos de navegación de manera anónima y permite ofrecer publicidad basada en intereses.",
      link: "https://policies.google.com/privacy",
      linkText: "Política de privacidad de Google Adwords Conversion"
    },
    {
      name: "AddThis",
      purpose: "Recopila datos de navegación de manera anónima para facilitar la compartición de contenidos.",
      link: "https://www.addthis.com/privacy/privacy-policy",
      linkText: "Política de privacidad de AddThis"
    }
  ];

  const browserLinks = [
    { name: "Internet Explorer", url: "https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" },
    { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647?hl=es" },
    { name: "Safari", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" }
  ];

  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Política de Cookies</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Política de Cookies
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Información sobre el uso de cookies en www.ramondelpozorott.es
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <article className="section-premium bg-white">
        <div className="container-premium max-w-4xl mx-auto prose prose-stone max-w-none">
          
          {/* ¿Qué son las cookies? */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              ¿Qué son las cookies y para qué se utilizan?
            </h2>
            <p className="text-stone-700 leading-relaxed">
              El acceso a este sitio web puede implicar la utilización de cookies. Las cookies son pequeños archivos de información que se almacenan en el navegador del usuario para que el servidor recuerde ciertos datos, lo que permite un acceso más rápido y mejora la experiencia de navegación. Las cookies tienen, generalmente, una duración limitada en el tiempo y actúan de manera anónima, sin permitir que se pueda contactar con tu correo electrónico ni con otros medios de contacto.
            </p>
          </section>

          {/* Tipos de cookies */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Tipos de cookies que utiliza www.ramondelpozorott.es
            </h2>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start gap-3">
                <span className="text-premium-gold mt-1 font-bold">•</span>
                <div>
                  <strong className="text-premium-charcoal">Cookies de terceros:</strong> Se envían al equipo del usuario desde un dominio que no es gestionado por nosotros, sino por otra entidad que trata los datos obtenidos mediante estas cookies.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-premium-gold mt-1 font-bold">•</span>
                <div>
                  <strong className="text-premium-charcoal">Cookies de sesión:</strong> Recogen y almacenan datos mientras el usuario accede a la página web, permitiendo un funcionamiento más fluido.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-premium-gold mt-1 font-bold">•</span>
                <div>
                  <strong className="text-premium-charcoal">Cookies de análisis:</strong> Nos permiten cuantificar el número de usuarios y analizar cómo se utiliza la web, con el fin de mejorar la oferta de contenidos y servicios.
                </div>
              </li>
            </ul>
            <p className="text-stone-600 mt-4">
              <strong>Entidades que gestionan estas cookies:</strong> Google, AddThis.
            </p>
          </section>

          {/* Tabla de cookies específicas */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Cookies específicas que utiliza www.ramondelpozorott.es
            </h2>
            <div className="overflow-x-auto rounded-lg border border-stone-200">
              <table className="w-full text-sm">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="text-left p-4 font-bold text-premium-charcoal">Cookie</th>
                    <th className="text-left p-4 font-bold text-premium-charcoal">Propósito</th>
                    <th className="text-left p-4 font-bold text-premium-charcoal">Más información</th>
                  </tr>
                </thead>
                <tbody>
                  {cookies.map((cookie, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                      <td className="p-4 border-t border-stone-200 font-medium text-premium-charcoal">{cookie.name}</td>
                      <td className="p-4 border-t border-stone-200 text-stone-700">{cookie.purpose}</td>
                      <td className="p-4 border-t border-stone-200">
                        <a 
                          href={cookie.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-premium-gold hover:underline font-medium"
                        >
                          {cookie.linkText} ↗
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Cómo configurar cookies */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4 pb-2 border-b border-premium-gold/20">
              Cómo configurar o desactivar las cookies
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              Puedes configurar tu navegador para aceptar o rechazar las cookies recibidas, según tus preferencias de privacidad. Todas las cookies, salvo las de Flash, pueden gestionarse desde tu navegador en la sección "Opciones" o "Preferencias".
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              Puedes desactivarlas todas, lo que impedirá que se instale cualquier cookie.
            </p>
            <p className="text-stone-700 leading-relaxed mb-4">
              O puedes desactivar solo las cookies de determinadas webs, permitiendo el correcto funcionamiento de aquellas que respetan tu privacidad.
            </p>
            <p className="text-stone-700 leading-relaxed mb-6">
              Todos los navegadores incluyen una sección de ayuda para gestionar las cookies. Aquí tienes los enlaces a las instrucciones de los más usados:
            </p>

            {/* Enlaces a navegadores */}
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {browserLinks.map((browser, i) => (
                <a
                  key={i}
                  href={browser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-stone-50 rounded-lg border border-stone-200 text-premium-charcoal hover:bg-premium-gold/10 hover:border-premium-gold/30 transition-all group"
                >
                  <span className="text-premium-gold group-hover:translate-x-1 transition-transform">→</span>
                  <span className="font-medium">{browser.name}</span>
                </a>
              ))}
            </div>

            <p className="text-stone-700 leading-relaxed mb-4">
              Si quieres eliminar la publicidad originada por cookies de terceros, puedes instalar un plugin como <strong>Adblock</strong>, que bloquea los anuncios.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Para las cookies instaladas por Adobe Flash Player, puedes gestionarlas desde la web de <a href="https://www.adobe.com/es/privacy/cookies.html" target="_blank" rel="noopener noreferrer" className="text-premium-gold hover:underline">Adobe</a>.
            </p>
          </section>

          {/* Enlaces a otras páginas legales */}
          <section className="pt-8 border-t border-stone-200">
            <p className="text-stone-600 text-center">
              También puedes consultar:{" "}
              <Link href="/aviso-legal" className="text-premium-gold hover:underline font-medium">Aviso Legal</Link>
              {" | "}
              <Link href="/privacidad" className="text-premium-gold hover:underline font-medium">Política de Privacidad</Link>
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
