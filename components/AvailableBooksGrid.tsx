import Image from "next/image";
import { AMAZON_AUTHOR_URL, AVAILABLE_BOOKS, type BookEntry } from "@/lib/books";

function bookHref(book: BookEntry): string {
  if (book.slug) return `/libros/${book.slug}`;
  return book.amazon ?? AMAZON_AUTHOR_URL;
}

export default function AvailableBooksGrid() {
  return (
    <section className="py-16 px-4 bg-[#fcfbfa]" aria-labelledby="biblioteca-disponible-heading">
      <div className="container-premium max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-amber-600 mb-3">
            Ya en Amazon
          </span>
          <h2
            id="biblioteca-disponible-heading"
            className="font-serif text-3xl md:text-4xl font-bold text-premium-charcoal mb-3"
          >
            Biblioteca disponible de Ramón del Pozo Rott
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Thriller, denuncia social y narrativa contemporánea. Cada título enlaza a su ficha o a Amazon España.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {AVAILABLE_BOOKS.map((book) => (
            <article key={book.id} className="group text-center">
              <a
                href={bookHref(book)}
                target={book.amazon ? "_blank" : undefined}
                rel={book.amazon ? "noopener noreferrer" : undefined}
                className="block"
              >
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-stone-200 shadow-sm group-hover:shadow-lg group-hover:border-amber-400/50 transition-all bg-stone-100">
                  <Image
                    src={book.image}
                    alt={`Portada de ${book.title} — ${book.badge}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 180px"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <h3 className="mt-3 text-sm font-bold text-premium-charcoal leading-tight">{book.title}</h3>
                <p className="text-[0.7rem] text-stone-500 mt-1">{book.badge}</p>
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={AMAZON_AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#ff9900] text-stone-900 font-bold rounded-full hover:bg-[#ffb84d] transition-colors"
          >
            Ver tienda completa en Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
