import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="footer-premium pt-16 pb-8 border-t border-stone-800">
      <div className="container-premium">
        {/* Grid principal */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Brand + Redes */}
          <div className="md:col-span-1">
            <h3 className="text-premium-gold font-serif font-bold text-xl mb-4">
              Ramón del Pozo Rott
            </h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Escritor de narrativa contemporánea y literatura infantil. Historias que no solo se leen, se viven.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-premium-gold hover:bg-stone-700 transition-all duration-300"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Conocer Más */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Conocer Más</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/biografia" className="text-stone-400 hover:text-premium-gold transition-colors">Biografía</Link></li>
              <li><Link href="/blog" className="text-stone-400 hover:text-premium-gold transition-colors">Blog</Link></li>
              <li><Link href="/libros" className="text-stone-400 hover:text-premium-gold transition-colors">Tienda / Libros</Link></li>
              <li><Link href="/contacto" className="text-stone-400 hover:text-premium-gold transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contacto" className="text-stone-400 hover:text-premium-gold transition-colors">Formulario</Link></li>
              <li><a href="mailto:info@ramondelpozorott.es" className="text-stone-400 hover:text-premium-gold transition-colors">info@ramondelpozorott.es</a></li>
            </ul>
          </div>

          {/* Columna 4: Legal / Soporte */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal & Soporte</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog/faq" className="text-stone-400 hover:text-premium-gold transition-colors">FAQ</Link></li>
              <li><Link href="/privacidad" className="text-stone-400 hover:text-premium-gold transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/cookies" className="text-stone-400 hover:text-premium-gold transition-colors">Política de Cookies</Link></li>
              <li><Link href="/aviso-legal" className="text-stone-400 hover:text-premium-gold transition-colors">Aviso Legal</Link></li>
              <li><Link href="/mapa-sitio" className="text-stone-400 hover:text-premium-gold transition-colors">Mapa del Sitio</Link></li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-stone-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm text-center md:text-left">
            © {currentYear} Ramón del Pozo Rott. Reservados todos los derechos.
          </p>
          <p className="text-stone-600 text-xs font-mono">www.ramondelpozorott.es</p>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white font-bold mb-2">Mantente conectado</h4>
            <p className="text-stone-400 text-sm mb-4">Recibe noticias y actualizaciones sobre nuevos libros.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:border-premium-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-premium-gold text-premium-black font-medium rounded-lg hover:bg-premium-goldLight transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
