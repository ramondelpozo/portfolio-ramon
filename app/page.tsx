'use client';

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ColeccionLiteraria from "@/components/ColeccionLiteraria";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Efecto parallax
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Revelar elementos al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* === HERO CINEMÁTICO PREMIUM === */}
      <section className="hero-premium">
        {/* Partículas doradas */}
        <div className="hero-particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Contenido */}
        <div ref={heroRef} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="fade-in-up inline-block px-6 py-2 bg-premium-gold/10 border border-premium-gold/30 rounded-full text-premium-gold text-sm font-bold tracking-widest uppercase mb-6">
            Nueva Colección 2026
          </span>
          
          <h1 className="fade-in-up text-balance mb-6" style={{ animationDelay: "0.2s" }}>
            Tras las huellas del <span className="text-gradient-gold">pasado</span>
          </h1>
          
          <p className="fade-in-up text-lg md:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Historias que exploran la memoria, el destino y las decisiones que cambian una vida. 
            Literatura que emociona a adultos y despierta la imaginación infantil.
          </p>
          
          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.6s" }}>
            <Link href="/libros" className="btn-premium">
              Descubre mis obras
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#coleccion-teatro" className="btn-premium btn-outline">
              Explorar colección
            </Link>
          </div>
        </div>

        {/* Portada flotante 3D */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:block floating">
          <div className="relative w-48 h-72 bg-gradient-to-br from-premium-gold/20 to-premium-charcoal rounded-lg shadow-2xl border border-premium-gold/20 overflow-hidden" style={{ transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)" }}>
            <div className="absolute inset-0 flex items-center justify-center text-premium-gold/40 text-xs text-center p-4">
              [Portada 3D]
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/40 rounded-full blur-2xl" />
        </div>
      </section>

      {/* === WIDGET COLECCIÓN LITERARIA (TEATRO) === */}
      <section id="coleccion-teatro" className="section-premium bg-premium-black">
        <ColeccionLiteraria />
      </section>

      {/* === ÚLTIMOS LIBROS - DOS COLUMNAS === */}
      <section className="py-6 px-4 bg-[#f7f5f2]">
        {/* Header de sección */}
        <div className="text-center py-6">
          <span className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[#e11d48] mb-1">
            Novedades
          </span>
          <h2 className="text-xl md:text-2xl font-normal text-[#1a1714] mb-2">
            Últimos libros
          </h2>
          <p className="text-[0.9rem] text-[#7a7470] mb-4 max-w-xl mx-auto">
            Incluye tanto libros ya disponibles como títulos que se lanzarán próximamente.
          </p>
          <Link 
            href="/libros" 
            className="inline-block px-6 py-2.5 rounded-full bg-[#e11d48] text-white text-[0.8rem] font-bold tracking-[0.08em] uppercase no-underline shadow-[0_4px_12px_rgba(225,29,72,0.25)] hover:bg-[#c41a41] transition-all"
          >
            Ver todos mis libros
          </Link>
        </div>

        {/* Grid de dos columnas */}
        <div className="flex flex-wrap justify-center gap-10 py-4 px-2 bg-[#f7f5f2] max-w-7xl mx-auto">
          
          {/* Columna 1: Ya disponible */}
          <div className="text-center max-w-[520px]">
            <h3 className="text-base font-semibold text-[#1a1714] mb-3">Ya disponible</h3>
            <div className="flex justify-center">
              <div className="max-w-[300px] w-full">
                {/* Portada grande */}
                <div className="relative w-full h-[480px] overflow-hidden cursor-zoom-in bg-[#efecea] rounded-xl">
                  <Image
                    src="/libros/Portada-1.webp"
                    alt="Límite de control"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[0.58rem] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-white/90 text-[#e11d48] border border-[rgba(225,29,72,0.3)]">
                    Thriller tecnológico
                  </span>
                </div>
                {/* Info */}
                <div className="py-3.5 flex flex-col gap-0.5">
                  <p className="text-base font-extrabold text-[#1a1714] leading-tight uppercase tracking-[0.04em]">
                    Límite de control
                  </p>
                  <p className="text-[0.72rem] text-[#7a7470] italic leading-tight">
                    Hasta dónde ayudar sin decidir
                  </p>
                  <p className="text-[0.75rem] text-[#b0a89f] leading-tight mt-0.5">
                    En un Madrid donde cada segundo puede predecirse, Álex Vega se enfrenta a la línea más difícil: salvar vidas sin perder su libertad.
                  </p>
                  <a 
                    href="https://www.amazon.es/L%C3%ADmite-Control-Hasta-ayudar-decidir/dp/B0GW895LSQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 px-3.5 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.06em] uppercase no-underline bg-[#16a34a] text-white hover:bg-[#148f3e] transition-transform hover:scale-105 self-center"
                  >
                    🛒 Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Próximamente */}
          <div className="text-center max-w-[520px]">
            <h3 className="text-base font-semibold text-[#1a1714] mb-3">Próximamente</h3>
            <div className="flex justify-center">
              <div className="max-w-[300px] w-full">
                {/* Portada grande */}
                <div className="relative w-full h-[480px] overflow-hidden cursor-zoom-in bg-[#efecea] rounded-xl">
                  <Image
                    src="/libros/portada.webp"
                    alt="El bosque que calla"
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[0.58rem] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-white/90 text-[#e11d48] border border-[rgba(225,29,72,0.3)]">
                    Thriller histórico
                  </span>
                </div>
                {/* Info */}
                <div className="py-3.5 flex flex-col gap-0.5">
                  <p className="text-base font-extrabold text-[#1a1714] leading-tight uppercase tracking-[0.04em]">
                    El bosque que calla
                  </p>
                  <p className="text-[0.72rem] text-[#7a7470] italic leading-tight">
                    La verdad que nadie podía decir
                  </p>
                  <p className="text-[0.75rem] text-[#b0a89f] leading-tight mt-0.5">
                    Hubo un tiempo en que el mundo decidió no mirar. Jacobo y otros supervivientes guardan fragmentos de memoria rota.
                  </p>
                  <a 
                    href="https://www.amazon.es/stores/author/B0DLLJLYZR/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 px-3.5 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.06em] uppercase no-underline border border-[rgba(225,29,72,0.4)] text-[#e11d48] bg-transparent hover:bg-[#e11d48]/10 transition-transform hover:scale-105 self-center"
                  >
                    Próximamente
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === LISTA DE LIBROS DESTACADOS CON BOTONES VERDES === */}
      <section className="py-12 px-4 bg-white">
        <div className="container-premium max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-premium-charcoal mb-8 text-center">
            Explora mis historias
          </h2>
          
          <ul className="space-y-6">
            {/* El Bosque que calla */}
            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">El Bosque que calla</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                El bosque que calla es una novela de suspense y misterio en la que la supervivencia, la memoria y el trauma se entrelazan en un entorno donde el pasado nunca ha desaparecido del todo.
              </p>
              <Link 
                href="/libros/el-bosque-que-calla" 
                className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all"
              >
                Ver libro
              </Link>
            </li>

            {/* Tras las huellas del pasado */}
            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">Tras las huellas del pasado</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Una historia sobre memoria, culpa y segundas oportunidades. Un protagonista marcado por su pasado se enfrenta a sus heridas en un entorno injusto.
              </p>
              <Link 
                href="/libros/tras-las-huellas-del-pasado" 
                className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all"
              >
                Ver libro
              </Link>
            </li>

            {/* Inmunidad Diplomática */}
            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">Inmunidad Diplomática</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Corrupción y poder en el entorno diplomático. Secretos, privilegios y silencios donde la justicia deja de ser igual para todos.
              </p>
              <Link 
                href="/libros/inmunidad-diplomatica" 
                className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all"
              >
                Ver libro
              </Link>
            </li>

            {/* Mascotas en el Olvido */}
            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">Mascotas en el Olvido</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Bienestar animal, abandono y conciencia social. Una historia sobre maltrato, empatía y la posibilidad de cambiar lo que ignoramos.
              </p>
              <Link 
                href="/libros/mascotas-en-el-olvido" 
                className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all"
              >
                Ver libro
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* === SOBRE EL AUTOR === */}
      <section className="section-premium bg-gradient-premium text-white">
        <div className="container-premium grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll relative">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-premium-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-premium-gold/30 text-6xl">📸</div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-premium-gold/20 rounded-full blur-3xl" />
          </div>

          <div className="reveal-on-scroll">
            <span className="badge-premium mb-4 inline-block">Sobre el autor</span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-6">Ramón del Pozo Rott</h2>
            <p className="text-stone-300 text-lg mb-6">Escritor de narrativa contemporánea y literatura infantil creativa.</p>
            <p className="text-stone-400 leading-relaxed mb-8 text-balance">
              Mis historias nacen de una idea simple: <strong className="text-white">los libros no solo se leen, se viven</strong>. Cada obra busca dejar una sensación, una reflexión o una chispa de imaginación que permanezca incluso después de cerrar la última página.
            </p>
            <Link href="/biografia" className="btn-premium">
              Conocer mi historia
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="py-24 bg-premium-black text-center px-4">
        <div className="max-w-3xl mx-auto reveal-on-scroll">
          <h2 className="text-4xl font-serif font-bold text-white mb-6 text-balance">
            ¿Listo para entrar en el universo?
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Cada libro es una puerta a una nueva experiencia. Elige tu próxima aventura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/libros" className="btn-premium">
              Explorar colección
            </Link>
            <Link href="/contacto" className="btn-premium btn-outline">
              Hablemos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
