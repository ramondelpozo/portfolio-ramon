// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

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
    <nav className="bg-[#faf9f6] border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-stone-800 tracking-wide">
            Ramón del Pozo <span className="text-amber-600">Rott</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.submenu && setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-stone-600 hover:text-stone-900 uppercase tracking-wider transition-colors py-4"
                >
                  {item.name}
                </Link>
                
                {item.submenu && (
                  <div className={`absolute left-0 top-full bg-white shadow-lg rounded-md py-2 w-48 border border-stone-100 transition-all duration-200 ${dropdownOpen === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
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

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-stone-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-stone-200 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} className="block text-stone-700 font-medium py-2">
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 mt-1 space-y-2">
                    {item.submenu.map((sub) => (
                      <Link key={sub.name} href={sub.href} onClick={() => setMobileOpen(false)} className="block text-sm text-stone-500 py-1">
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