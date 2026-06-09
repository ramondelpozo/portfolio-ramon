import Link from "next/link";
import Image from "next/image";
import { ECOSYSTEM } from "@/lib/brand";

export default function EcosystemBar() {
  return (
    <section
      className="border-y border-amber-500/20 bg-gradient-to-r from-stone-950 via-slate-900 to-stone-950 text-white"
      aria-label={`Ecosistema literario Ramón del Pozo Rott y ${ECOSYSTEM.bookiaName}`}
    >
      <div className="container-premium py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Image
            src="/bookia/logo.png"
            alt={`Logo ${ECOSYSTEM.bookiaName}`}
            width={36}
            height={36}
            className="rounded-md border border-amber-500/30"
          />
          <p className="text-sm text-stone-300">
            <span className="font-semibold text-amber-400">{ECOSYSTEM.author}</span>
            <span className="mx-2 text-stone-600">+</span>
            <span className="font-semibold text-amber-400">{ECOSYSTEM.bookiaName}</span>
            <span className="hidden sm:inline"> — {ECOSYSTEM.tagline}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/libros"
            className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-premium-gold/40 text-premium-gold hover:bg-premium-gold/10 transition-colors"
          >
            Mis novelas
          </Link>
          <Link
            href={ECOSYSTEM.bookiaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:opacity-90 transition-opacity"
          >
            Crear con BOOKIA →
          </Link>
        </div>
      </div>
    </section>
  );
}
