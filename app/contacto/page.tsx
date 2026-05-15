"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: ""
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setEnviado(true);
    setFormData({ nombre: "", telefono: "", email: "", asunto: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ramon.delpozo.rott/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/RamondelPozoRott",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@delpozorottramon",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ramón-del-pozo-rott-335b58335",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/delPozoRott",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">
            Contacto
          </h1>
          <p className="text-premium-gold text-lg">
            Hablemos de libros
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="py-16 px-4">
        <div className="container-premium max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Columna izquierda: Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-premium-charcoal mb-4">
              Si mis novelas te han conmovido...
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Si quieres invitarme a una charla, presentación o simplemente compartir tus reflexiones, este es el espacio para hacerlo.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Estoy disponible para eventos, colaboraciones y, sobre todo, para conversar con mis lectores.
            </p>

            {/* Email directo */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-soft mb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📧</span>
                <h3 className="font-serif text-xl font-bold text-premium-charcoal">Email directo</h3>
              </div>
              <a href="mailto:info@ramondelpozorott.es" className="text-premium-gold font-medium hover:underline">
                info@ramondelpozorott.es
              </a>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="font-serif text-xl font-bold text-premium-charcoal mb-4">
                Sígueme en redes
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-premium-gold hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-soft">
            <h3 className="font-serif text-xl font-bold text-premium-charcoal mb-6">
              Escríbeme
            </h3>

            {enviado && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ¡Gracias por tu mensaje! Te responderé a la mayor brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-stone-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-stone-700 mb-1">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none transition"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-stone-700 mb-1">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none transition"
                  placeholder="Motivo de tu mensaje"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-stone-700 mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent outline-none transition resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-premium-charcoal text-white py-3 rounded-lg hover:bg-stone-800 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={enviado}
              >
                {enviado ? "¡Mensaje enviado!" : "Enviar mensaje"}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 bg-stone-50 border-t border-stone-200 text-center px-4">
        <p className="text-stone-600 mb-4">¿Prefieres explorar mis obras antes de escribirme?</p>
        <Link href="/libros" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-premium-charcoal text-premium-charcoal rounded-lg hover:bg-premium-charcoal hover:text-white transition font-medium">
          Ver mis libros
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>

    </main>
  );
}




