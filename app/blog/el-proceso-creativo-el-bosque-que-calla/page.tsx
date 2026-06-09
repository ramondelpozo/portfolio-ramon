import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BOOKIA_URL, SITE_NAME, SITE_URL, absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "El proceso creativo detrás de El Bosque que Calla",
  description:
    "Ramón del Pozo Rott cuenta cómo nació su thriller histórico El Bosque que Calla: memoria, silencio y la decisión de no mirar hacia otro lado.",
  path: "/blog/el-proceso-creativo-el-bosque-que-calla",
  keywords: [
    "El Bosque que Calla",
    "proceso creativo",
    "thriller histórico",
    "Ramón del Pozo Rott",
    "escribir novela",
  ],
  image: {
    url: "/libros/el-bosque-que-calla.png",
    width: 800,
    height: 1200,
    alt: "Portada de El Bosque que Calla",
  },
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "El proceso creativo detrás de El Bosque que Calla",
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  datePublished: "2026-01-15",
  dateModified: "2026-06-08",
  image: absoluteUrl("/libros/el-bosque-que-calla.png"),
  mainEntityOfPage: absoluteUrl("/blog/el-proceso-creativo-el-bosque-que-calla"),
  inLanguage: "es-ES",
};

export default function BlogPostBosquePage() {
  return (
    <article className="min-h-screen bg-premium-cream">
      <JsonLd data={articleJsonLd} />

      <header className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-3xl mx-auto text-center">
          <p className="text-premium-gold text-sm font-bold tracking-widest uppercase mb-3">Blog · Thriller histórico</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            El proceso creativo detrás de &ldquo;El Bosque que Calla&rdquo;
          </h1>
          <p className="text-stone-300">15 enero 2026 · {SITE_NAME}</p>
        </div>
      </header>

      <div className="container-premium max-w-3xl mx-auto py-12 px-4 prose prose-stone">
        <div className="relative w-48 mx-auto aspect-[2/3] mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image src="/libros/el-bosque-que-calla.png" alt="El Bosque que Calla" fill className="object-cover" sizes="192px" />
        </div>

        <p className="text-lg text-stone-700 leading-relaxed">
          Hubo un tiempo en que el mundo decidió no mirar. Esa frase no nació en un brainstorming: llegó cuando entendí que
          el thriller histórico más honesto no persigue solo al culpable, sino al silencio colectivo que lo protege.
        </p>
        <p className="text-stone-700 leading-relaxed">
          <strong>El Bosque que Calla</strong> une supervivencia, memoria rota y suspense psicológico. Jacobo y otros personajes
          guardan fragmentos de un pasado que la sociedad prefirió enterrar. Escribir esta novela fue reconstruir esas piezas una a una.
        </p>
        <p className="text-stone-700 leading-relaxed">
          Si estás escribiendo tu propia historia —ficción o testimonio— la misma disciplina aplica: una idea clara, personajes con
          conflicto real y un tono que no traiciona al lector. Para ese camino creé{" "}
          <a href={BOOKIA_URL} className="text-amber-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
            BOOKIA
          </a>
          : prólogo, sinopsis y 3 capítulos gratis para empezar hoy.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 not-prose">
          <Link href="/libros/el-bosque-que-calla" className="btn-premium">Ver ficha del libro</Link>
          <Link href="/blog" className="btn-premium btn-outline">Más artículos</Link>
        </div>
      </div>
    </article>
  );
}
