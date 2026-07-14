import Image from "next/image";
import Link from "next/link";
import { AMAZON_AUTHOR_URL } from "@/lib/books";

export default function FeaturedBooksSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-[5%] bg-white" aria-labelledby="featured-books-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-20 reveal-on-scroll">
          <div className="inline-block relative mb-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c9a961]">
              Obras destacadas
            </span>
            <span
              className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#c9a961]"
              aria-hidden
            />
          </div>
          <h2
            id="featured-books-heading"
            className="font-serif text-4xl md:text-[3.25rem] text-[#1a1a1a] mb-5"
          >
            Narrativa de impacto
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
            Sumérgete en historias donde el suspense, la historia y la emoción se entrelazan para crear
            experiencias inolvidables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <article className="group bg-white rounded-2xl border border-black/5 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] hover:border-[#c9a961]/30 transition-all duration-400">
            <div className="grid sm:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 p-8 md:p-10 items-start">
              <div className="flex justify-center sm:justify-start">
                <Image
                  src="/libros/el-bosque-portada-final.png"
                  alt="El Bosque que Calla — Ramón del Pozo Rott"
                  width={220}
                  height={330}
                  className="w-full max-w-[220px] rounded shadow-[10px_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-400 group-hover:scale-105 group-hover:-rotate-1"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#27ae60] text-white text-[10px] font-bold tracking-wider uppercase mb-4">
                  Disponible
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-3 leading-tight">
                  El Bosque que Calla
                </h3>
                <p className="text-[#c9a961] text-sm font-semibold mb-4 tracking-wide">
                  Supervivencia en la II Guerra Mundial
                </p>
                <p className="text-[#666666] text-[15px] leading-relaxed mb-6">
                  En un rincón olvidado del conflicto, el bosque no es un refugio, sino un testigo silencioso de
                  desapariciones y verdades que nadie se atreve a pronunciar.
                </p>
                <a
                  href="https://www.amazon.es/EL-BOSQUE-QUE-CALLA-verdad/dp/B0H6J33HGP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 bg-gradient-to-br from-[#c9a961] to-[#d4b978] text-white text-xs font-semibold tracking-[0.15em] uppercase rounded shadow-[0_4px_15px_rgba(201,169,97,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,169,97,0.4)] transition-all"
                >
                  Comprar ahora
                </a>
              </div>
            </div>
          </article>

          <article className="group bg-white rounded-2xl border border-black/5 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.1)] hover:border-[#c9a961]/30 transition-all duration-400">
            <div className="grid sm:grid-cols-[1fr_1.2fr] gap-6 md:gap-8 p-8 md:p-10 items-start">
              <div className="flex justify-center sm:justify-start">
                <Image
                  src="/libros/sekou-portada.webp"
                  alt="Sekou: Raíces de Libertad — Ramón del Pozo Rott"
                  width={220}
                  height={330}
                  className="w-full max-w-[220px] rounded shadow-[10px_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-400 group-hover:scale-105 group-hover:-rotate-1"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a961] text-white text-[10px] font-bold tracking-wider uppercase mb-4">
                  Próximamente
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-3 leading-tight">
                  Sekou: Raíces de Libertad
                </h3>
                <p className="text-[#c9a961] text-sm font-semibold mb-4 tracking-wide">
                  Resistencia y corazón
                </p>
                <p className="text-[#666666] text-[15px] leading-relaxed mb-6">
                  Una historia poderosa sobre la resistencia humana frente a la opresión, donde el amor se convierte
                  en la única arma capaz de romper las cadenas.
                </p>
                <Link
                  href="/libros/sekou-raices-de-libertad"
                  className="inline-block px-8 py-3.5 bg-transparent text-[#1a1a1a] text-xs font-semibold tracking-[0.15em] uppercase rounded border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all"
                >
                  Más información
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
