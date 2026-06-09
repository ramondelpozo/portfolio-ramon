import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BOOKIA_URL, SITE_NAME, SITE_URL, absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "BOOKIA: escribe tu primer libro sin experiencia previa",
  description:
    "BOOKIA de Ramón del Pozo Rott: prólogo, sinopsis y 3 capítulos gratis. La plataforma del ecosistema literario para nuevos autores.",
  path: "/blog/bookia-publisher-primer-libro",
  keywords: [
    "BOOKIA",
    "escribir un libro",
    "primer libro",
    "autoedición",
    "Ramón del Pozo Rott",
  ],
  image: {
    url: "/bookia/hero-all.png",
    width: 1200,
    height: 675,
    alt: "BOOKIA",
  },
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "BOOKIA: escribe tu primer libro sin experiencia previa",
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  datePublished: "2026-06-08",
  dateModified: "2026-06-08",
  image: absoluteUrl("/bookia/hero-all.png"),
  mainEntityOfPage: absoluteUrl("/blog/bookia-publisher-primer-libro"),
  inLanguage: "es-ES",
};

export default function BlogPostBookiaPage() {
  return (
    <article className="min-h-screen bg-premium-cream">
      <JsonLd data={articleJsonLd} />

      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/30 text-white py-16 px-4">
        <div className="container-premium max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-3">BOOKIA</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Escribe tu primer libro con BOOKIA
          </h1>
          <p className="text-stone-300">8 junio 2026 · {SITE_NAME}</p>
        </div>
      </header>

      <div className="container-premium max-w-3xl mx-auto py-12 px-4">
        <div className="relative max-w-2xl mx-auto mb-8 rounded-2xl overflow-hidden border border-amber-200 shadow-lg">
          <Image
            src="/bookia/hero-all.png"
            alt="BOOKIA"
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>

        <p className="text-lg text-stone-700 leading-relaxed mb-6">
          <strong>Tienes una historia dentro. BOOKIA la saca al mundo.</strong> Es el complemento natural de mi trabajo
          como autor: las mismas exigencias narrativas que aplico en mis novelas, convertidas en un flujo guiado para quien empieza desde cero.
        </p>

        <ul className="space-y-3 text-stone-700 mb-8 list-disc pl-6">
          <li><strong>Prólogo</strong> — abre tu libro con una introducción que enganche.</li>
          <li><strong>Sinopsis</strong> — define personajes, conflicto y tono.</li>
          <li><strong>3 capítulos gratis</strong> — prueba el flujo completo antes de decidir.</li>
        </ul>

        <p className="text-stone-700 leading-relaxed mb-8">
          Sin experiencia previa. Empieza hoy. BOOKIA y este portfolio forman un mismo ecosistema: aquí lees mis historias; allí puedes crear la tuya.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={BOOKIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:opacity-95"
          >
            Ir a BOOKIA →
          </a>
          <Link href="/#bookia" className="btn-premium btn-outline">Ver sección en inicio</Link>
        </div>
      </div>
    </article>
  );
}
