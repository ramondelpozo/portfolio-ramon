"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingActions() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isHome) {
    return (
      <Link
        href="/"
        className="fixed bottom-6 left-6 z-[60] inline-flex items-center gap-2 px-5 py-3 rounded-full bg-premium-charcoal text-premium-gold font-semibold text-sm shadow-lg border border-premium-gold/30 hover:bg-stone-900 hover:scale-105 transition-all"
        aria-label="Volver al inicio"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver
      </Link>
    );
  }

  if (!showScrollTop) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-[60] inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold text-sm shadow-lg border border-amber-400/40 hover:opacity-95 hover:scale-105 transition-all"
      aria-label="Subir al inicio"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
      Subir
    </button>
  );
}
