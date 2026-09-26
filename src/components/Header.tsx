import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

import { Link } from 'react-router-dom';

interface HeaderProps {
  onContactClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-gray-700">
            <button
              onClick={() => scrollTo('servicios')}
              className="hover:text-tg-blue transition-colors font-inter cursor-pointer"
            >
              Soluciones
            </button>
            <button
              onClick={() => scrollTo('servicios')}
              className="hover:text-tg-blue transition-colors font-inter cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('casos')}
              className="hover:text-tg-blue transition-colors font-inter cursor-pointer"
            >
              Casos de éxito
            </button>
            <button
              onClick={() => scrollTo('nosotros')}
              className="hover:text-tg-blue transition-colors font-inter cursor-pointer"
            >
              Nosotros
            </button>

            {/* Highlighted Event Link */}
            <Link
              to="/Mentalidad-Marketing-Neuroventas-con-IA"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 hover:bg-amber-500/20 font-montserrat font-bold text-xs tracking-wide transition-all shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Evento 10 Oct</span>
            </Link>
          </nav>

          {/* CTA Button: Contáctanos */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/Mentalidad-Marketing-Neuroventas-con-IA"
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-black text-amber-300 font-montserrat font-bold text-xs tracking-wide transition-all shadow-sm"
            >
              🎟️ Entradas
            </Link>
            <button
              onClick={onContactClick || (() => scrollTo('contacto'))}
              className="px-5 py-2.5 rounded-lg bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs tracking-wide transition-all shadow-sm cursor-pointer"
            >
              Contáctanos
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-700 hover:text-tg-blue"
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <button
            onClick={() => scrollTo('servicios')}
            className="block w-full text-left py-2 text-base font-medium text-gray-800 hover:text-tg-blue"
          >
            Soluciones
          </button>
          <button
            onClick={() => scrollTo('servicios')}
            className="block w-full text-left py-2 text-base font-medium text-gray-800 hover:text-tg-blue"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollTo('casos')}
            className="block w-full text-left py-2 text-base font-medium text-gray-800 hover:text-tg-blue"
          >
            Casos de éxito
          </button>
          <button
            onClick={() => scrollTo('recursos')}
            className="block w-full text-left py-2 text-base font-medium text-gray-800 hover:text-tg-blue"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollTo('nosotros')}
            className="block w-full text-left py-2 text-base font-medium text-gray-800 hover:text-tg-blue"
          >
            Nosotros
          </button>

          <div className="pt-3 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileOpen(false);
                if (onContactClick) onContactClick();
                else scrollTo('contacto');
              }}
              className="w-full py-3 rounded-lg bg-tg-blue text-white font-montserrat font-bold text-sm text-center"
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
