import type { Metadata } from "next";
import Link from "next/link";
import BlogPromo from "@/components/BlogPromo";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog literario de Ramón del Pozo Rott",
  description:
    "Artículos sobre escritura, thriller, procesos creativos y BOOKIA. Reflexiones del autor de El Bosque que Calla y Límite de Control.",
  path: "/blog",
});

const ARTICLES = [
  {
    href: "/blog/bookia-publisher-primer-libro",
    date: "8 Junio 2026",
    title: "Escribe tu primer libro con BOOKIA",
    excerpt: "Prólogo, sinopsis y 3 capítulos gratis. El ecosistema literario para nuevos autores.",
  },
  {
    href: "/blog/el-proceso-creativo-el-bosque-que-calla",
    date: "15 Enero 2026",
    title: 'El proceso creativo detrás de "El Bosque que Calla"',
    excerpt: "Cómo una idea sencilla se transformó en una novela sobre memoria, silencio y justicia.",
  },
  {
    href: "/blog/escribir-thrillers-era-digital",
    date: "3 Diciembre 2025",
    title: "Escribir thrillers en la era digital",
    excerpt: "Reflexiones sobre tensión narrativa, ritmo y tecnología en el suspense contemporáneo.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-premium-cream">
      
      {/* Hero del Blog */}
      <section className="bg-gradient-to-br from-premium-charcoal to-stone-800 text-white py-20 px-4 text-center">
        <div className="container-premium">
          <span className="badge-premium mb-4 inline-block">Blog & Reflexiones</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Historias, ideas y procesos de escritura
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">
            Artículos, análisis y recomendaciones relacionados con mis novelas y el mundo de la literatura.
          </p>
        </div>
      </section>

      {/* === BLOQUE PROMOCIONAL PREMIUM === */}
      <BlogPromo />

      {/* Artículos del blog (ejemplo) */}
      <section className="section-premium bg-white">
        <div className="container-premium">
          <h2 className="font-serif text-3xl font-bold text-premium-charcoal mb-8 text-center">
            Últimos artículos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ARTICLES.map((article) => (
              <article key={article.href} className="bg-stone-50 p-6 rounded-xl border border-stone-200 hover:shadow-premium transition-all">
                <span className="text-premium-gold text-sm font-medium">{article.date}</span>
                <h3 className="font-serif text-xl font-bold text-premium-charcoal mt-2 mb-3">{article.title}</h3>
                <p className="text-stone-600 mb-4">{article.excerpt}</p>
                <Link href={article.href} className="text-premium-gold font-medium hover:underline">
                  Leer más →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-premium-black text-center px-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-white mb-4">
            ¿Quieres más historias como estas?
          </h3>
          <p className="text-stone-400 mb-6">
            Suscríbete para recibir novedades, capítulos exclusivos y reflexiones literarias.
          </p>
          <Link href="/contacto" className="btn-premium inline-flex">
            Suscribirse al newsletter
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
