"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ColeccionLiteraria from "@/components/ColeccionLiteraria";

// Interfaz para tipar las partículas doradas
interface Particle {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  // Estado para guardar las partículas calculadas en el cliente
  const [particles, setParticles] = useState<Particle[]>([]);

  // Efecto para el efecto Parallax del Hero (solo actúa si el ref existe)
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

  // Efecto para el Intersection Observer (animaciones al hacer scroll)
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

  // Solución al Hydration Mismatch: valores aleatorios generados tras el montaje en navegador
  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${8 + Math.random() * 4}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* === HERO CINEMATICO PREMIUM === */}
      <section className="hero-premium relative min-h-[85vh] sm:min-h-[90vh] bg-stone-950 overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner/Banner-Facebook.webp"
            alt="El Bosque que Calla"
            fill
            sizes="100vw"
            className="object-cover opacity-20 sm:opacity-100 blur-md sm:blur-0 transition-all duration-500"
            priority
          />
          {/* Capa de degradado extra para fundir el fondo en móvil con el negro premium */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-950 sm:bg-black/40"></div>
        </div>

        {/* Partículas doradas seguras contra Hydration Errors */}
        <div className="hero-particles z-10">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>

        {/* Contenido (Corregido con Flexbox y anchos máximos controlados) */}
        <div 
          ref={heroRef} 
          className="relative w-full z-20 text-center max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-6 sm:gap-8 will-change-transform"
        >
          {/* Título adaptivo: text-4xl en móvil que escala hasta text-8xl en pantallas gigantes */}
          <h1 className="fade-in-up text-white font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full" style={{ animationDelay: "0.2s" }}>
            El Bosque que <span className="text-gradient-gold block sm:inline">Calla</span>
          </h1>
          
          {/* Contenedor de botones: columna en móvil, fila en escritorio */}
          <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none" style={{ animationDelay: "0.4s" }}>
            <Link href="/libros" className="btn-premium w-full sm:w-auto justify-center">
              Descubre mis obras
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#coleccion-teatro" className="btn-premium btn-outline w-full sm:w-auto justify-center">
              Explorar colección
            </Link>
          </div>
        </div>
      </section>

      {/* === SECCIÓN BOOKAI PUBLISHER === */}
      <section className="py-20 bg-white">
        <div className="container-premium max-w-5xl mx-auto reveal-on-scroll text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">
            Publica tu libro en 30 días <span className="text-premium-gold">con Inteligencia Artificial</span>
          </h2>

          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            BookAI Publisher es la plataforma que usan más de 150 autores para escribir, maquetar y publicar sus libros en Amazon KDP. 
            Nuestra IA te guía paso a paso: desde la idea inicial hasta tu primer libro publicado. 
            <strong className="text-black"> Sin experiencia previa. Sin complicaciones.</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-xl border border-premium-gold/30 shadow-sm">
              <div className="text-4xl mb-3">✍️</div>
              <h3 className="font-bold text-black mb-2">Escribe</h3>
              <p className="text-gray-600 text-sm">La IA genera contenido basado en tus ideas y estilo</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-premium-gold/30 shadow-sm">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold text-black mb-2">Maqueta</h3>
              <p className="text-gray-600 text-sm">Diseño profesional automático para Amazon KDP</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-premium-gold/30 shadow-sm">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="font-bold text-black mb-2">Publica</h3>
              <p className="text-gray-600 text-sm">Sube directamente a Amazon y empieza a vender</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://bookai-publisher-nextjs-6l1afn82v-ramondelpozos-projects.vercel.app" 
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-premium-gold font-bold rounded-full hover:bg-gray-900 transition-all shadow-[0_0_30px_rgba(0,0,0,0.3)] text-lg border-2 border-black"
            >
              Probar BOOKAI Gratis →
            </Link>
            <Link 
              href="https://bookai-publisher-nextjs.vercel.app/" 
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all text-lg"
            >
              Ver cómo funciona
            </Link>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            ✅ Sin tarjeta de crédito &nbsp;•&nbsp; ✅ 7 días gratis &nbsp;•&nbsp; ✅ Cancela cuando quieras
          </p>
        </div>
      </section>

      {/* === WIDGET COLECCION LITERARIA (TEATRO) === */}
      <section id="coleccion-teatro" className="section-premium bg-premium-black">
        <ColeccionLiteraria />
      </section>

      {/* === ULTIMOS LIBROS - DOS COLUMNAS === */}
      <section className="py-6 px-4 bg-[#f7f5f2]">
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

        <div className="flex flex-wrap justify-center gap-10 py-4 px-2 bg-[#f7f5f2] max-w-7xl mx-auto">
          
          {/* Columna 1: Ya disponible */}
          <div className="text-center max-w-[520px]">
            <h3 className="text-base font-semibold text-[#1a1714] mb-3">Ya disponible</h3>
            <div className="flex justify-center">
              <div className="max-w-[300px] w-full">
                <div className="relative w-full h-[480px] overflow-hidden cursor-zoom-in bg-[#efecea] rounded-xl">
                  <Image
                    src="/libros/limite-de-control.webp"
                    alt="Limite de control"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[0.58rem] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-white/90 text-[#e11d48] border border-[rgba(225,29,72,0.3)]">
                    Thriller tecnológico
                  </span>
                </div>
                <div className="py-3.5 flex flex-col gap-0.5">
                  <p className="text-base font-extrabold text-[#1a1714] leading-tight uppercase tracking-[0.04em]">
                    Límite de control
                  </p>
                  <p className="text-[0.72rem] text-[#7a7470] italic leading-tight">
                    Hasta dónde ayudar sin decidir
                  </p>
                  <p className="text-[0.75rem] text-[#b0a89f] leading-tight mt-0.5">
                    En un Madrid donde cada segundo puede predecirse, Alex Vega se enfrenta a la línea más difícil: salvar vidas sin perder su libertad.
                  </p>
                  <a
                    href="https://www.amazon.es/L%C3%ADmite-Control-Hasta-ayudar-decidir/dp/B0GW895LSQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 px-3.5 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.06em] uppercase no-underline bg-[#16a34a] text-white hover:bg-[#148f3e] transition-transform hover:scale-105 self-center"
                  >
                    Comprar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Proximamente */}
          <div className="text-center max-w-[520px]">
            <h3 className="text-base font-semibold text-[#1a1714] mb-3">Próximamente</h3>
            <div className="flex justify-center">
              <div className="max-w-[300px] w-full">
                <div className="relative w-full h-[480px] overflow-hidden cursor-zoom-in bg-[#efecea] rounded-xl">
                  <Image
                    src="/libros/el-bosque-que-calla.png"
                    alt="El bosque que calla"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[0.58rem] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-white/90 text-[#e11d48] border border-[rgba(225,29,72,0.3)]">
                    Thriller histórico
                  </span>
                </div>
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

      {/* === LISTA DE LIBROS DESTACADOS === */}
      <section className="py-12 px-4 bg-white">
        <div className="container-premium max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-premium-charcoal mb-8 text-center">
            Explora mis historias
          </h2>
          
          <ul className="space-y-6">
            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">El Bosque que calla</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                El bosque que calla es una novela de suspense y misterio en la que la supervivencia, la memoria y el trauma se entrelazan en un entorno donde el pasado nunca ha desaparecido del todo.
              </p>
              <Link href="/libros/el-bosque-que-calla" className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all">
                Ver libro
              </Link>
            </li>

            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">Tras las huellas del pasado</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Una historia sobre memoria, culpa y segundas oportunidades. Un protagonista marcado por su pasado se enfrenta a sus heridas en un entorno injusto.
              </p>
              <Link href="/libros/tras-las-huellas-del-pasado" className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all">
                Ver libro
              </Link>
            </li>

            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">Inmunidad Diplomática</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Corrupción y poder en el entorno diplomático. Secretos, privilegios y silencios donde la justicia deja de ser igual para todos.
              </p>
              <Link href="/libros/inmunidad-diplomatica" className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all">
                Ver libro
              </Link>
            </li>

            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h5 className="font-bold text-lg text-premium-charcoal mb-2">Mascotas en el Olvido</h5>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Bienestar animal, abandono y conciencia social. Una historia sobre maltrato, empatía y la posibilidad de cambiar lo que ignoramos.
              </p>
              <Link href="/libros/mascotas-en-el-olvido" className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all">
                Ver libro
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* === SOBRE EL AUTOR === */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="container-premium grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll relative">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-premium-gold/20">
              <Image
                src="/autor/autor-oficina.png"
                alt="Ramon del Pozo Rott - Escritor"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-premium-gold/20 rounded-full blur-3xl" />
          </div>

          <div className="reveal-on-scroll">
            <span className="badge-premium mb-4 inline-block">Sobre el autor</span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-6">Ramón del Pozo Rott</h2>
            <p className="text-stone-300 text-lg mb-6">Escritor de narrativa contemporánea y literatura infantil creativa.</p>
            <p className="text-stone-300 leading-relaxed mb-8 text-white font-bold drop-shadow-lg">
              Mis historias nacen de una idea simple: <strong className="text-white">los libros no solo se leen, se viven</strong>. Cada obra busca dejar una sensación, una reflexión o una chispa de imaginación que permanezca incluso después de cerrar la última página.
            </p>
            {/* Corregida errata de texto en el enlace */}
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
          <h2 className="text-4xl font-serif font-bold text-white mb-6 text-white font-bold drop-shadow-lg">
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
