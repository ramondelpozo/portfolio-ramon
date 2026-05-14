'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de envío (ej: Formspree, EmailJS, API Route)
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    setFormData({ nombre: '', telefono: '', email: '', asunto: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO CONTACTO */}
      <section className="py-20 bg-stone-900 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contacto</h1>
        <p className="text-2xl text-amber-400 font-medium">Hablemos de libros</p>
      </section>

      {/* INTRO + FORMULARIO */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Texto introductorio */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Si mis novelas te han conmovido...</h2>
            <p className="text-stone-700 leading-relaxed mb-6">
              Si quieres invitarme a una charla, presentación o simplemente compartir tus reflexiones, este es el espacio para hacerlo.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Estoy disponible para eventos, colaboraciones y, sobre todo, para conversar con mis lectores.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-3">✉️ Email directo</h3>
              <a href="mailto:info@ramondelpozorott.es" className="text-amber-700 hover:underline text-lg font-medium">
                info@ramondelpozorott.es
              </a>
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-stone-900 mb-4">Sígueme en redes</h3>
              <div className="flex gap-4 text-2xl">
                <a href="#" className="text-stone-600 hover:text-amber-700 transition" aria-label="Instagram">📸</a>
                <a href="#" className="text-stone-600 hover:text-amber-700 transition" aria-label="Facebook">📘</a>
                <a href="#" className="text-stone-600 hover:text-amber-700 transition" aria-label="YouTube">📺</a>
                <a href="#" className="text-stone-600 hover:text-amber-700 transition" aria-label="LinkedIn">💼</a>
                <a href="#" className="text-stone-600 hover:text-amber-700 transition" aria-label="X / Twitter">🐦</a>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Escríbeme</h3>
            
            {enviado && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                ¡Gracias por tu mensaje! Te responderé a la mayor brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-stone-700 mb-1">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-stone-700 mb-1">Teléfono (opcional)</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Correo electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-stone-700 mb-1">Asunto *</label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition"
                  placeholder="Motivo de tu mensaje"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-stone-700 mb-1">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 text-white py-3 rounded-md hover:bg-stone-800 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={enviado}
              >
                {enviado ? '¡Enviado!' : 'Enviar mensaje'}
              </button>
            </form>

            <p className="text-xs text-stone-500 mt-4 text-center">
              Al enviar este formulario aceptas nuestra <Link href="/privacidad" className="underline hover:text-amber-700">Política de Privacidad</Link>.
            </p>
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-12 bg-white border-t border-stone-200 text-center px-4">
        <p className="text-stone-600 mb-4">¿Prefieres explorar mis obras antes de escribirme?</p>
        <Link href="/libros" className="inline-block px-6 py-2 border-2 border-stone-900 text-stone-900 rounded hover:bg-stone-100 transition font-medium">
          Ver mis libros →
        </Link>
      </section>
    </main>
  );
}
