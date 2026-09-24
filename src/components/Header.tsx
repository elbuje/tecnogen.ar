import React, { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo variant="horizontal" size="md" />
          </a>

          {/* Desktop Nav - EXACTLY as in Image 04: Soluciones, Servicios, Casos de éxito, Recursos, Nosotros */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
            <button
              onClick={() => scrollTo('servicios')}
              className="hover:text-tg-blue transition-colors font-inter"
            >
              Soluciones
            </button>
            <button
              onClick={() => scrollTo('servicios')}
              className="hover:text-tg-blue transition-colors font-inter"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollTo('casos')}
              className="hover:text-tg-blue transition-colors font-inter"
            >
              Casos de éxito
            </button>
            <button
              onClick={() => scrollTo('recursos')}
              className="hover:text-tg-blue transition-colors font-inter"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollTo('nosotros')}
              className="hover:text-tg-blue transition-colors font-inter"
            >
              Nosotros
            </button>
          </nav>

          {/* CTA Button: Contáctanos (Image 04) */}
          <div className="hidden md:block">
            <button
              onClick={onContactClick || (() => scrollTo('contacto'))}
              className="px-6 py-2.5 rounded-lg bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs tracking-wide transition-all shadow-sm"
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
