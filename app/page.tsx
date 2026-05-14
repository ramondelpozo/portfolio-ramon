'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Efecto parallax suave en el hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Revelar elementos al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const librosDestacados = [
    {
      titulo: 'Tras las huellas del pasado',
      subtitulo: 'Memoria • Culpa • Segundas oportunidades',
      descripcion: 'Un joven marcado por la pérdida y la adicción busca redención entre dos culturas. Una historia de resiliencia que conecta con el alma.',
      portada: '/libros/tras-huellas.jpg',
      categoria: 'Drama',
      precio: '14,95 €',
      amazon: '#'
    },
    {
      titulo: 'El bosque que calla',
      subtitulo: 'Thriller histórico • Misterio • Supervivencia',
      descripcion: 'Un bosque que guarda secretos. Una memoria rota. Una verdad que nadie podía decir. Cuando el silencio pesa más que el miedo.',
      portada: '/libros/bosque-calla.jpg',
      categoria: 'Thriller',
      precio: 'Próximamente',
      amazon: '#'
    },
    {
      titulo: 'Aventura en la Selva Mágica',
      subtitulo: 'Literatura infantil • 3-8 años • Para colorear',
      descripcion: 'Un viaje lleno de animales, amistad y descubrimientos donde cada página se convierte en una aventura para imaginar y crear.',
      portada: '/libros/selva-magica.jpg',
      categoria: 'Infantil',
      precio: '7,95 €',
      amazon: '#'
    }
  ];

  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* === HERO CINEMÁTICO === */}
      <section className="relative h-screen overflow-hidden bg-gradient-premium flex items-center justify-center">
        
        {/* Partículas de luz flotantes */}
        <div className="particles-bg">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle floating"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Brillo dorado sutil */}
        <div className="absolute inset-0 bg-gradient-gold opacity-20 pointer-events-none" />

        {/* Contenido principal */}
        <div ref={heroRef} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          
          <span className="cinematic-fade inline-block px-4 py-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full text-premium-gold text-sm font-medium tracking-wider mb-6">
            NUEVA COLECCIÓN 2026
          </span>
          
          <h1 className="cinematic-fade text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Tras las huellas del <span className="text-gradient-gold">pasado</span>
          </h1>
          
          <p className="cinematic-fade text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Historias que exploran la memoria, el destino y las decisiones que cambian una vida. 
            Desde novelas con profundidad humana hasta libros infantiles que despiertan creatividad e imaginación.
          </p>
          
          <div className="cinematic-fade flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/libros" 
              className="group px-8 py-4 bg-premium-gold text-premium-black font-medium rounded-full hover:bg-premium-goldLight transition-all duration-300 shadow-lg hover:shadow-premium-gold/30"
            >
              Descubre mis obras
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link 
              href="#coleccion" 
              className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explorar colección
            </Link>
          </div>
        </div>

        {/* Portada flotante en 3D */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="floating relative w-40 h-60 bg-premium-charcoal rounded-lg shadow-2xl border border-premium-gold/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center text-premium-gold/60 text-xs text-center p-4">
              [Portada 3D]
            </div>
          </div>
          {/* Sombra elegante */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/30 rounded-full blur-xl" />
        </div>
      </section>

      {/* === CARRUSEL DE LIBROS === */}
      <section id="coleccion" className="section-padding bg-premium-cream">
        <div className="container-premium">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-premium-gold font-medium tracking-wider uppercase text-sm">Colección Literaria</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-charcoal mt-3 mb-4">
              Libros que dejan huella
            </h2>
            <p className="text-premium-warm max-w-2xl mx-auto">
              Cada obra está diseñada para crear una experiencia: atmósfera, reflexión y emoción que permanecen después de cerrar la última página.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {librosDestacados.map((libro, i) => (
              <article 
                key={i} 
                className="book-card bg-white rounded-xl overflow-hidden shadow-soft border border-stone-100 reveal-on-scroll"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Portada */}
                <div className="relative aspect-[2/3] bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm text-center p-4">
                    {libro.portada ? (
                      <Image 
                        src={libro.portada} 
                        alt={libro.titulo} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                    ) : (
                      <span>[{libro.titulo}]</span>
                    )}
                  </div>
                  {/* Badge de categoría */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-premium-charcoal/90 text-premium-gold text-xs font-medium rounded-full">
                    {libro.categoria}
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-premium-charcoal mb-1">{libro.titulo}</h3>
                  <p className="text-premium-warm text-sm mb-3">{libro.subtitulo}</p>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{libro.descripcion}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                    <span className={`font-bold ${libro.precio === 'Próximamente' ? 'text-premium-gold' : 'text-premium-charcoal'}`}>
                      {libro.precio}
                    </span>
                    <a 
                      href={libro.amazon} 
                      className="px-4 py-2 bg-premium-charcoal text-white text-sm rounded-full hover:bg-premium-gold hover:text-premium-black transition-colors font-medium"
                    >
                      {libro.precio === 'Próximamente' ? 'Avísame' : 'Ver en Amazon'}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12 reveal-on-scroll">
            <Link href="/libros" className="inline-flex items-center gap-2 text-premium-charcoal font-medium hover:text-premium-gold transition-colors">
              Ver colección completa
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === SECCIÓN AUTOR (ELEGANCIA CINEMATOGRÁFICA) === */}
      <section className="section-padding bg-gradient-premium text-white">
        <div className="container-premium grid md:grid-cols-2 gap-12 items-center">
          
          {/* Foto autor */}
          <div className="reveal-on-scroll relative">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-premium-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-premium-gold/40">
                [Foto elegante B&W]
              </div>
            </div>
            {/* Brillo decorativo */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-premium-gold/20 rounded-full blur-2xl" />
          </div>

          {/* Texto */}
          <div className="reveal-on-scroll">
            <span className="text-premium-gold font-medium tracking-wider uppercase text-sm">Sobre el autor</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-6">
              Ramón del Pozo Rott
            </h2>
            <p className="text-stone-300 text-lg mb-6 leading-relaxed">
              Escritor de narrativa contemporánea y literatura infantil creativa.
            </p>
            <p className="text-stone-400 leading-relaxed mb-8">
              Mis historias nacen de una idea simple: <strong className="text-white">los libros no solo se leen, se viven</strong>. Cada obra busca dejar una sensación, una reflexión o una chispa de imaginación que permanezca incluso después de cerrar la última página.
            </p>
            <Link href="/biografia" className="inline-flex items-center gap-2 px-6 py-3 bg-premium-gold text-premium-black font-medium rounded-full hover:bg-premium-goldLight transition-all">
              Conocer mi historia
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === NOVELAS (OSCURAS, CINEMATOGRÁFICAS) === */}
      <section className="section-padding bg-premium-charcoal text-white relative overflow-hidden">
        {/* Textura de fondo sutil */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(201,169,97,0.1) 0%, transparent 50%)' }} />
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-premium-gold font-medium tracking-wider uppercase text-sm">Narrativa para adultos</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4">
              Novelas que dejan huella
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Historias sobre decisiones, memoria, cambio y búsqueda personal. Libros pensados para lectores que buscan algo más que entretenimiento: atmósfera, reflexión y emoción real.
            </p>
          </div>

          {/* Libro destacado con efecto de transición */}
          <div className="max-w-4xl mx-auto reveal-on-scroll">
            <div className="relative bg-premium-black/50 rounded-2xl p-8 md:p-12 border border-premium-gold/10 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[2/3] bg-stone-800 rounded-lg overflow-hidden floating">
                  <div className="absolute inset-0 flex items-center justify-center text-premium-gold/30 text-sm">
                    [Portada destacada]
                  </div>
                </div>
                <div>
                  <span className="text-premium-gold font-medium text-sm uppercase tracking-wide">Thriller psicológico</span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mt-2 mb-4">El bosque que calla</h3>
                  <p className="text-stone-300 leading-relaxed mb-6">
                    Hubo un tiempo en que el mundo decidió no mirar. Jacobo y otros supervivientes guardan fragmentos de memoria rota. Este libro no busca consolarte. Busca que no olvides.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-premium-gold font-bold">Próximamente</span>
                    <button className="px-5 py-2 border border-premium-gold/50 text-premium-gold rounded-full hover:bg-premium-gold hover:text-premium-black transition-colors text-sm font-medium">
                      Avísame del lanzamiento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 reveal-on-scroll">
            <Link href="/libros" className="inline-flex items-center gap-2 text-white font-medium hover:text-premium-gold transition-colors">
              Ver todas las novelas
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === LITERATURA INFANTIL (LUZ, COLOR, VIDA) === */}
      <section className="section-padding bg-gradient-warm relative overflow-hidden">
        {/* Elementos decorativos suaves */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-premium-gold/10 rounded-full blur-3xl floating-fast" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-amber-200/20 rounded-full blur-2xl floating" />
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-premium-warm font-medium tracking-wider uppercase text-sm">Para los más pequeños</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-premium-charcoal mt-3 mb-4">
              Literatura infantil para aprender jugando
            </h2>
            <p className="text-premium-earth max-w-2xl mx-auto">
              Libros diseñados para que los niños lean, imaginen y creen. Cada historia combina lectura, juego y creatividad para convertir el aprendizaje en una experiencia divertida y natural.
            </p>
          </div>

          {/* Beneficios en tarjetas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 reveal-on-scroll">
            {[
              { icon: '✨', title: 'Explorar', desc: 'Descubrir mundos nuevos' },
              { icon: '🎨', title: 'Imaginar', desc: 'Despertar la creatividad' },
              { icon: '🤝', title: 'Crear', desc: 'Aprender haciendo' }
            ].map((item, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-stone-200 text-center hover-lift">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h4 className="font-bold text-premium-charcoal mb-1">{item.title}</h4>
                <p className="text-sm text-premium-earth">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Libro infantil destacado */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft border border-stone-200 overflow-hidden reveal-on-scroll">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                <div className="text-6xl">🎨</div>
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-premium-gold text-premium-black text-xs font-bold rounded-full">
                  3-8 años
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-premium-charcoal mb-2">Aventura en la Selva Mágica</h3>
                <p className="text-premium-warm text-sm mb-4">Un viaje lleno de animales, amistad y descubrimientos</p>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Cada página se convierte en una aventura para colorear. Diseñado para estimular la imaginación, mejorar la concentración y favorecer el aprendizaje activo sin pantallas.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-stone-600">
                  <li className="flex items-center gap-2">✓ Estimula la creatividad</li>
                  <li className="flex items-center gap-2">✓ Mejora la concentración</li>
                  <li className="flex items-center gap-2">✓ Favorece la imaginación</li>
                </ul>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-premium-charcoal">7,95 €</span>
                  <a href="#" className="px-5 py-2 bg-premium-charcoal text-white rounded-full hover:bg-premium-gold hover:text-premium-black transition-colors text-sm font-medium">
                    Ver en Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 reveal-on-scroll">
            <Link href="/libros/literatura-infantil" className="inline-flex items-center gap-2 text-premium-charcoal font-medium hover:text-premium-gold transition-colors">
              Explorar colección infantil
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="py-20 bg-premium-black text-center px-4">
        <div className="max-w-3xl mx-auto reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            ¿Listo para entrar en el universo?
          </h2>
          <p className="text-stone-400 mb-8">
            Cada libro es una puerta a una nueva experiencia. Elige tu próxima aventura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/libros" className="px-8 py-4 bg-premium-gold text-premium-black font-medium rounded-full hover:bg-premium-goldLight transition-all">
              Explorar colección
            </Link>
            <Link href="/contacto" className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              Hablemos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
