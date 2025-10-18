"use client";
// frontend/src/components/layout/Navbar.tsx

import { useState } from "react";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/70 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Search className="w-7 h-7 text-amber-500" />
          <span className="text-xl font-bold tracking-wider">
            ElRinconDelDetective.com
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#servicios"
            className="hover:text-amber-400 transition-colors"
          >
            Servicios
          </a>
          <a href="#rincon" className="hover:text-amber-400 transition-colors">
            El Rincón
          </a>
          <a
            href="#comunidad"
            className="hover:text-amber-400 transition-colors"
          >
            Comunidad
          </a>
          <a
            href="#sobre-nosotros"
            className="hover:text-amber-400 transition-colors"
          >
            Sobre Nosotros
          </a>
          <a
            href="#nosotros"
            className="hover:text-amber-400 transition-colors"
          >
            Testimonios
          </a>
        </div>

        {/* 2. Botón de hamburguesa para móviles */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // <-- 3. Uso de setIsMenuOpen
            className="text-white focus:outline-none"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Menú desplegable para móviles */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/90 pb-4">
          <a
            href="#servicios"
            className="block text-center py-2 px-4 text-sm hover:bg-slate-800 transition-colors"
          >
            Servicios
          </a>
          <a
            href="#rincon"
            className="block text-center py-2 px-4 text-sm hover:bg-slate-800 transition-colors"
          >
            El Rincón
          </a>
          <a
            href="#comunidad"
            className="block text-center py-2 px-4 text-sm hover:bg-slate-800 transition-colors"
          >
            Comunidad
          </a>
          <a
            href="#sobre-nosotros"
            className="block text-center py-2 px-4 text-sm hover:bg-slate-800 transition-colors"
          >
            Sobre Nosotros
          </a>
          <a
            href="#nosotros"
            className="block text-center py-2 px-4 text-sm hover:bg-slate-800 transition-colors"
          >
            Testimonios
          </a>
        </div>
      )}
    </header>
  );
}
