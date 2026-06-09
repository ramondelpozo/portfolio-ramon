import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BOOKIA_URL, SITE_NAME, SITE_URL, absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Escribir thrillers en la era digital",
  description:
    "Reflexiones de Ramón del Pozo Rott sobre tensión narrativa, ritmo y tecnología en novelas como Límite de Control y la herramienta BOOKIA.",
  path: "/blog/escribir-thrillers-era-digital",
  keywords: [
    "escribir thriller",
    "novela de suspense",
    "Límite de Control",
    "Ramón del Pozo Rott",
    "escritura digital",
  ],
});

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Escribir thrillers en la era digital",
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  datePublished: "2025-12-03",
  dateModified: "2026-06-08",
  mainEntityOfPage: absoluteUrl("/blog/escribir-thrillers-era-digital"),
  inLanguage: "es-ES",
};

export default function BlogPostThrillersPage() {
  return (
    <article className="min-h-screen bg-premium-cream">
      <JsonLd data={articleJsonLd} />

      <header className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-16 px-4">
        <div className="container-premium max-w-3xl mx-auto text-center">
          <p className="text-premium-gold text-sm font-bold tracking-widest uppercase mb-3">Blog · Escritura</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">Escribir thrillers en la era digital</h1>
          <p className="text-stone-300">3 diciembre 2025 · {SITE_NAME}</p>
        </div>
      </header>

      <div className="container-premium max-w-3xl mx-auto py-12 px-4">
        <p className="text-lg text-stone-700 leading-relaxed mb-6">
          El thriller contemporáneo compite con notificaciones, redes y una atención fragmentada. La tensión ya no se construye solo
          con giros: se construye con <strong>ritmo</strong>, con preguntas abiertas en cada capítulo y con consecuencias que el lector
          siente inmediatas.
        </p>
        <p className="text-stone-700 leading-relaxed mb-6">
          En <Link href="/libros/limite-de-control" className="text-amber-700 font-semibold hover:underline">Límite de Control</Link> la
          tecnología no es decorado: es el escenario moral. ¿Hasta dónde ayudar sin decidir por otros? Esa pregunta define el thriller
          tecnológico que me interesa escribir.
        </p>
        <p className="text-stone-700 leading-relaxed mb-6">
          La era digital también cambia cómo escribimos. Herramientas como{" "}
          <a href={BOOKIA_URL} className="text-amber-700 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
            BOOKIA
          </a>{" "}
          no sustituyen la voz del autor: ordenan el proceso (prólogo, sinopsis, capítulos) para que la historia salga al mundo con
          método, no con caos.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link href="/libros" className="btn-premium">Explorar mis novelas</Link>
          <Link href="/blog" className="btn-premium btn-outline">Volver al blog</Link>
        </div>
      </div>
    </article>
  );
}
