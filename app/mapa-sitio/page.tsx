import { Metadata } from "next";
import Link from "next/link";

// === METADATOS SEO ===
export const metadata: Metadata = {
  title: "Mapa del Sitio | Ramón del Pozo Rott",
  description: "Navegación completa del sitio web www.ramondelpozorott.es. Encuentra fácilmente libros, blog, biografía y más.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MapaDelSitioPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <span className="badge-premium mb-4 inline-block">Navegación</span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-3">
            Mapa del Sitio
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Encuentra fácilmente todo el contenido de www.ramondelpozorott.es
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <article className="section-premium bg-white">
        <div className="container-premium max-w-3xl mx-auto">
          
          <div className="bg-white rounded-2xl border border-stone-200 shadow-soft p-8 md:p-10">
            
            {/* Navegación principal */}
            <section className="mb-8 pb-6 border-b border-stone-100">
              <h3 className="text-[11px] font-bold tracking-[2.2px] uppercase text-stone-400 mb-4">
                Navegación principal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250"
                  >
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Inicio</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* Libros */}
            <section className="mb-8 pb-6 border-b border-stone-100">
              <h3 className="text-[11px] font-bold tracking-[2.2px] uppercase text-stone-400 mb-4">
                Libros
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/libros" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Catálogo completo</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/literatura-infantil" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Literatura infantil</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/el-bosque-que-calla" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">El Bosque que Calla</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/limite-de-control" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Límite de Control</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/ojos-de-lobo" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Ojos de Lobo</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/la-cuidadora" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">La Cuidadora</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/la-mujer-infiltrada" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">La Mujer Infiltrada</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/inmunidad-diplomatica" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Inmunidad Diplomática</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/mascotas-en-el-olvido" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Mascotas en el Olvido</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/se-vende-derecho-a-una-vivienda" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Se Vende: Derecho a una Vivienda</span>
                  </Link>
                </li>
                <li>
                  <Link href="/libros/sekou-raices-de-libertad" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Sekou: Raíces de Libertad</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* Blog */}
            <section className="mb-8 pb-6 border-b border-stone-100">
              <h3 className="text-[11px] font-bold tracking-[2.2px] uppercase text-stone-400 mb-4">
                Blog
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Blog principal</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/faq" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Preguntas Frecuentes (FAQ)</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* Autor */}
            <section className="mb-8 pb-6 border-b border-stone-100">
              <h3 className="text-[11px] font-bold tracking-[2.2px] uppercase text-stone-400 mb-4">
                Autor
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/biografia" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Biografía</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Contacto</span>
                  </Link>
                </li>
              </ul>
            </section>

            {/* Legal */}
            <section className="mb-8">
              <h3 className="text-[11px] font-bold tracking-[2.2px] uppercase text-stone-400 mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/aviso-legal" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Aviso Legal</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Política de Privacidad</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="group flex items-center gap-2 text-premium-charcoal hover:text-premium-gold transition-all duration-250">
                    <span className="text-stone-300 group-hover:text-premium-gold transition-colors">›</span>
                    <span className="text-base group-hover:translate-x-1 transition-transform">Política de Cookies</span>
                  </Link>
                </li>
              </ul>
            </section>

          </div>
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
