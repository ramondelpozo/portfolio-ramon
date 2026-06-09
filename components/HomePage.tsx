"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AvailableBooksGrid from "@/components/AvailableBooksGrid";
import ColeccionLiteraria from "@/components/ColeccionLiteraria";
import EcosystemBar from "@/components/EcosystemBar";
import { BOOKIA_URL } from "@/lib/seo";
import { BOOKIA_NAME, ECOSYSTEM } from "@/lib/brand";

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

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
    <>
      <section
        className="hero-premium relative min-h-[85vh] sm:min-h-[90vh] bg-stone-950 overflow-hidden flex items-center justify-center"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner/Banner-Facebook.webp"
            alt="Banner de El Bosque que Calla, thriller histórico de Ramón del Pozo Rott"
            fill
            sizes="100vw"
            className="object-cover opacity-20 sm:opacity-100 blur-md sm:blur-0 transition-all duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-950 sm:bg-black/40" />
        </div>

        <div className="hero-particles z-10" aria-hidden="true">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        <div
          ref={heroRef}
          className="relative w-full z-20 text-center max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-6 sm:gap-8 will-change-transform"
        >
          <p className="fade-in-up text-premium-gold text-xs sm:text-sm font-bold tracking-[0.25em] uppercase" style={{ animationDelay: "0.1s" }}>
            Ramón del Pozo Rott · Escritor español
          </p>

          <h1
            id="hero-heading"
            className="fade-in-up text-white font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full"
            style={{ animationDelay: "0.2s" }}
          >
            El Bosque que <span className="text-gradient-gold block sm:inline">Calla</span>
          </h1>

          <p className="fade-in-up text-stone-300 text-base sm:text-lg max-w-2xl mx-auto" style={{ animationDelay: "0.3s" }}>
            Thriller histórico y suspense psicológico. Novelas de misterio, denuncia social y literatura infantil del autor Ramón del Pozo Rott.
          </p>

          <div
            className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-none"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="/libros" className="btn-premium w-full sm:w-auto justify-center">
              Descubre mis obras
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={BOOKIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-outline w-full sm:w-auto justify-center border-amber-500/50 text-amber-300 hover:text-amber-200"
            >
              Crear con {BOOKIA_NAME}
            </a>
          </div>
        </div>
      </section>

      <EcosystemBar />

      <section
        id="bookia"
        className="py-20 bg-gradient-to-b from-[#fcfbfa] via-white to-amber-50/40"
        aria-labelledby="bookia-heading"
      >
        <div className="container-premium max-w-6xl mx-auto reveal-on-scroll">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <Image
                src="/bookia/logo.png"
                alt={BOOKIA_NAME}
                width={48}
                height={48}
                className="rounded-lg border border-amber-500/30 shadow-sm"
              />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-amber-600">
                {BOOKIA_NAME}
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-4">{ECOSYSTEM.bookiaMeaning}</p>

            <h2
              id="bookia-heading"
              className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto"
            >
              Tienes una historia dentro.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                {BOOKIA_NAME} la saca al mundo.
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              La misma visión literaria que impulsa mis novelas, ahora en una plataforma para autores:
              del concepto al manuscrito, paso a paso.
              <strong className="text-slate-900"> Sin experiencia previa. Sin complicaciones.</strong>
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden border border-slate-900/10 shadow-2xl bg-slate-950 p-1.5">
            <Image
              src="/bookia/hero-all.png"
              alt={`${BOOKIA_NAME} — plataforma para escribir y publicar tu libro, creada por Ramón del Pozo Rott`}
              width={1200}
              height={675}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
            <article className="text-center p-6 bg-white rounded-xl border border-amber-200 shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">📜</div>
              <h3 className="font-bold text-black mb-2">Prólogo</h3>
              <p className="text-gray-600 text-sm">
                Abre tu libro con una introducción que enganche al lector desde la primera página
              </p>
            </article>
            <article className="text-center p-6 bg-white rounded-xl border border-amber-200 shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">✨</div>
              <h3 className="font-bold text-black mb-2">Sinopsis</h3>
              <p className="text-gray-600 text-sm">
                Define la esencia de tu historia: personajes, conflicto y el tono que la hace única
              </p>
            </article>
            <article className="text-center p-6 bg-white rounded-xl border border-amber-200 shadow-sm">
              <div className="text-4xl mb-3" aria-hidden="true">📖</div>
              <h3 className="font-bold text-black mb-2">3 capítulos gratis</h3>
              <p className="text-gray-600 text-sm">
                Empieza a escribir sin pagar nada: prueba el flujo completo antes de decidir
              </p>
            </article>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={BOOKIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:opacity-95 transition-all shadow-lg text-lg"
            >
              Empieza hoy →
            </Link>
            <Link
              href={BOOKIA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all text-lg"
            >
              Ver cómo funciona
            </Link>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Prólogo, sinopsis y 3 capítulos gratis &nbsp;•&nbsp; Sin experiencia previa &nbsp;•&nbsp; Empieza hoy
          </p>
        </div>
      </section>

      <AvailableBooksGrid />

      <section id="coleccion-teatro" className="section-premium bg-premium-black" aria-label="Colección literaria de teatro">
        <ColeccionLiteraria />
      </section>

      <section className="py-6 px-4 bg-[#f7f5f2]" aria-labelledby="ultimos-libros-heading">
        <div className="text-center py-6">
          <span className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[#e11d48] mb-1">
            Novedades
          </span>
          <h2 id="ultimos-libros-heading" className="text-xl md:text-2xl font-normal text-[#1a1714] mb-2">
            Últimos libros de Ramón del Pozo Rott
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
          <article className="text-center max-w-[520px]">
            <h3 className="text-base font-semibold text-[#1a1714] mb-3">Ya disponible</h3>
            <div className="flex justify-center">
              <div className="max-w-[300px] w-full">
                <div className="relative w-full h-[480px] overflow-hidden bg-[#efecea] rounded-xl">
                  <Image
                    src="/libros/limite-de-control.webp"
                    alt="Portada de Límite de Control, thriller tecnológico de Ramón del Pozo Rott"
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
                    Comprar en Amazon
                  </a>
                </div>
              </div>
            </div>
          </article>

          <article className="text-center max-w-[520px]">
            <h3 className="text-base font-semibold text-[#1a1714] mb-3">Próximamente</h3>
            <div className="flex justify-center">
              <div className="max-w-[300px] w-full">
                <div className="relative w-full h-[480px] overflow-hidden bg-[#efecea] rounded-xl">
                  <Image
                    src="/libros/el-bosque-que-calla.png"
                    alt="Portada de El Bosque que Calla, thriller histórico de Ramón del Pozo Rott"
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
                  <Link
                    href="/libros/el-bosque-que-calla"
                    className="inline-flex items-center gap-1.5 mt-2.5 px-3.5 py-1 rounded-full text-[0.68rem] font-bold tracking-[0.06em] uppercase no-underline border border-[rgba(225,29,72,0.4)] text-[#e11d48] bg-transparent hover:bg-[#e11d48]/10 transition-transform hover:scale-105 self-center"
                  >
                    Ver ficha del libro
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="py-12 px-4 bg-white" aria-labelledby="explora-historias-heading">
        <div className="container-premium max-w-4xl mx-auto">
          <h2 id="explora-historias-heading" className="font-serif text-2xl md:text-3xl font-bold text-premium-charcoal mb-8 text-center">
            Explora mis historias
          </h2>

          <ul className="space-y-6">
            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h3 className="font-bold text-lg text-premium-charcoal mb-2">El Bosque que calla</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Novela de suspense y misterio en la que la supervivencia, la memoria y el trauma se entrelazan en un entorno donde el pasado nunca ha desaparecido del todo.
              </p>
              <Link href="/libros/el-bosque-que-calla" className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all">
                Ver libro
              </Link>
            </li>

            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h3 className="font-bold text-lg text-premium-charcoal mb-2">Tras las huellas del pasado</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Una historia sobre memoria, culpa y segundas oportunidades. Un protagonista marcado por su pasado se enfrenta a sus heridas en un entorno injusto.
              </p>
              <Link href="/libros/tras-las-huellas-del-pasado" className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all">
                Ver libro
              </Link>
            </li>

            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h3 className="font-bold text-lg text-premium-charcoal mb-2">Inmunidad Diplomática</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-3">
                Corrupción y poder en el entorno diplomático. Secretos, privilegios y silencios donde la justicia deja de ser igual para todos.
              </p>
              <Link href="/libros/inmunidad-diplomatica" className="inline-block px-4 py-2.5 bg-[#61CE70] text-white rounded-lg font-semibold text-sm tracking-[0.2px] hover:bg-[#4fb85d] transition-all">
                Ver libro
              </Link>
            </li>

            <li className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h3 className="font-bold text-lg text-premium-charcoal mb-2">Mascotas en el Olvido</h3>
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

      <section className="py-20 bg-stone-900 text-white" aria-labelledby="sobre-autor-heading">
        <div className="container-premium grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll relative">
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-premium-gold/20">
              <Image
                src="/autor/autor-oficina.png"
                alt="Ramón del Pozo Rott, escritor español de novelas de suspense y literatura infantil"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-premium-gold/20 rounded-full blur-3xl" aria-hidden="true" />
          </div>

          <div className="reveal-on-scroll">
            <span className="badge-premium mb-4 inline-block">Sobre el autor</span>
            <h2 id="sobre-autor-heading" className="text-4xl font-serif font-bold mt-3 mb-6">
              Ramón del Pozo Rott
            </h2>
            <p className="text-stone-300 text-lg mb-6">
              Escritor de narrativa contemporánea, thriller y literatura infantil creativa en España.
            </p>
            <p className="text-stone-300 leading-relaxed mb-8 text-white font-bold drop-shadow-lg">
              Mis historias nacen de una idea simple:{" "}
              <strong className="text-white">los libros no solo se leen, se viven</strong>. Cada obra busca dejar una sensación, una reflexión o una chispa de imaginación que permanezca incluso después de cerrar la última página.
            </p>
            <Link href="/biografia" className="btn-premium">
              Conocer mi historia
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-premium-black text-center px-4" aria-labelledby="cta-final-heading">
        <div className="max-w-3xl mx-auto reveal-on-scroll">
          <h2 id="cta-final-heading" className="text-4xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            ¿Listo para entrar en el universo literario?
          </h2>
          <p className="text-stone-400 mb-10 text-lg">
            Cada libro es una puerta a una nueva experiencia. Elige tu próxima aventura con Ramón del Pozo Rott.
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
    </>
  );
}
