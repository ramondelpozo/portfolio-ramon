"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AvailableBooksGrid from "@/components/AvailableBooksGrid";
import ColeccionLiteraria from "@/components/ColeccionLiteraria";
import EcosystemBar from "@/components/EcosystemBar";
import BookiaPublisherSection from "@/components/BookiaPublisherSection";
import FeaturedBooksSection from "@/components/FeaturedBooksSection";
import { AMAZON_AUTHOR_URL } from "@/lib/books";

export default function HomePage() {
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
    <>
      <section
        className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#f8f9fa] to-white px-4 md:px-[5%] py-16 md:py-24 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-6 py-2.5 bg-[#c9a961]/10 border-l-4 border-[#c9a961] text-[#c9a961] text-[11px] font-bold tracking-[0.2em] uppercase mb-8">
              Próximo lanzamiento
            </div>

            <h1
              id="hero-heading"
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#1a1a1a] leading-[1.05] mb-6"
            >
              SEKOU
              <span className="block text-[#c9a961] text-2xl sm:text-3xl md:text-[2rem] mt-4 font-medium italic">
                Raíces de Libertad
              </span>
            </h1>

            <p className="text-lg text-[#666666] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Una epopeya inolvidable sobre la esclavitud, el amor prohibido y la inquebrantable lucha por la
              libertad. Inspirada en hechos reales que desafiaron el destino.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/libros"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-br from-[#c9a961] to-[#d4b978] text-white text-xs font-semibold tracking-[0.15em] uppercase rounded shadow-[0_4px_15px_rgba(201,169,97,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,169,97,0.4)] transition-all"
              >
                Explorar novelas
              </Link>
              <a
                href={AMAZON_AUTHOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-[#1a1a1a] text-xs font-semibold tracking-[0.15em] uppercase rounded border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
              >
                Ver autor en Amazon
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end perspective-[1000px]">
            <Image
              src="/libros/sekou-portada.webp"
              alt="Sekou: Raíces de Libertad — portada del próximo libro de Ramón del Pozo Rott"
              width={420}
              height={630}
              priority
              className="w-full max-w-[420px] rounded shadow-[20px_20px_60px_rgba(0,0,0,0.2)] transition-all duration-400 hover:-translate-y-3 hover:shadow-[0_40px_100px_rgba(0,0,0,0.3)]"
              style={{ transform: "rotateY(-8deg)" }}
            />
          </div>
        </div>
      </section>

      <FeaturedBooksSection />

      <EcosystemBar />

      <BookiaPublisherSection />

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
                    src="/libros/sekou-portada.webp"
                    alt="Portada de Sekou: Raíces de Libertad, novela histórica de Ramón del Pozo Rott"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[0.58rem] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-white/90 text-[#e11d48] border border-[rgba(225,29,72,0.3)]">
                    Novela histórica
                  </span>
                </div>
                <div className="py-3.5 flex flex-col gap-0.5">
                  <p className="text-base font-extrabold text-[#1a1714] leading-tight uppercase tracking-[0.04em]">
                    Sekou: Raíces de Libertad
                  </p>
                  <p className="text-[0.72rem] text-[#7a7470] italic leading-tight">
                    Resistencia y corazón
                  </p>
                  <p className="text-[0.75rem] text-[#b0a89f] leading-tight mt-0.5">
                    Una historia poderosa sobre la resistencia humana frente a la opresión, donde el amor se convierte en la única arma capaz de romper las cadenas.
                  </p>
                  <Link
                    href="/libros/sekou-raices-de-libertad"
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
