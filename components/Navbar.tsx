// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'Inicio', href: '/' },
    {
      name: 'Libros',
      href: '/libros',
      submenu: [{ name: 'Literatura Infantil', href: '/libros/literatura-infantil' }],
    },
    {
      name: 'Blog',
      href: '/blog',
      submenu: [{ name: 'FAQ', href: '/blog/faq' }],
    },
    { name: 'Biografía', href: '/biografia' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nombre */}
          <Link href="/" className="text-xl font-bold text-stone-800 tracking-wide">
            Ramón Del Pozo
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-stone-600 hover:text-amber-700 font-medium transition-colors py-2"
                >
                  {item.name}
                </Link>
                {/* Submenú Desktop (hover) */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-stone-100">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-stone-600 hover:bg-stone-50 hover:text-amber-700"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-amber-700"
            aria-label="Abrir menú"
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
          <div className="md:hidden pb-4 border-t border-stone-100 mt-2">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-stone-700 font-medium hover:text-amber-700"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      className="text-stone-400 hover:text-amber-700 p-1"
                    >
                      <svg className={`w-4 h-4 transform transition-transform ${mobileDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.submenu && mobileDropdown === item.name && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-stone-500 hover:text-amber-700"
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