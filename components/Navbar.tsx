"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/" },
    {
      name: "Libros",
      href: "/libros",
      submenu: [{ name: "Literatura Infantil", href: "/libros/literatura-infantil" }],
    },
    {
      name: "BOOKAI",
      href: "https://editorial-ten-roan.vercel.app/",
      external: true,
    },
    {
      name: "Blog",
      href: "/blog",
      submenu: [{ name: "FAQ", href: "/blog/faq" }],
    },
    { name: "Biografía", href: "/biografia" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? "scrolled" : ""}`}>
      <div className="container-premium py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-premium-charcoal hover:text-premium-gold transition-colors">
            Ramón del Pozo <span className="text-premium-gold">Rott</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-medium transition-colors py-2 flex items-center gap-1 ${
                      item.name === "BOOKAI"
                        ? "bg-premium-gold text-black px-4 py-1.5 rounded-lg font-bold shadow-lg border-2 border-black hover:bg-[#d4af37]/90"
                        : "text-stone-600 hover:text-premium-gold"
                    }`}
                  >
                    {item.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {item.submenu && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors py-2 flex items-center gap-1 ${
                      item.name === "BOOKAI"
                        ? "bg-premium-gold text-black px-4 py-1.5 rounded-lg font-bold shadow-lg border-2 border-black hover:bg-[#d4af37]/90"
                        : "text-stone-600 hover:text-premium-gold"
                    }`}
                  >
                    {item.name}
                    {item.submenu && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                {item.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-stone-100 overflow-hidden transition-all duration-200 ${
                      dropdownOpen === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-stone-600 hover:bg-premium-gold/10 hover:text-premium-gold transition-colors border-b border-stone-50 last:border-b-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-premium-gold transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-stone-200 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={`block transition py-2 font-medium ${
                      item.name === "BOOKAI"
                        ? "bg-premium-gold text-black px-4 py-2 rounded-lg font-bold shadow-lg border-2 border-black mt-2 mb-2 inline-block hover:bg-[#d4af37]/90"
                        : "text-stone-600 hover:text-premium-gold"
                    }`}
                  >
                    {item.name} ↗
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block transition py-2 font-medium ${
                      item.name === "BOOKAI"
                        ? "bg-premium-gold text-black px-4 py-2 rounded-lg font-bold shadow-lg border-2 border-black mt-2 mb-2 inline-block hover:bg-[#d4af37]/90"
                        : "text-stone-600 hover:text-premium-gold"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-2 border-l-2 border-stone-200">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-stone-500 hover:text-premium-gold transition py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
