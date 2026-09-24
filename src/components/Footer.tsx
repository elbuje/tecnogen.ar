import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row (Exact Image 04) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          
          {/* Left: Logo */}
          <div>
            <Logo variant="horizontal" size="sm" />
          </div>

          {/* Middle: Links matching Image 04 (Soluciones, Servicios, Recursos, Nosotros, Contacto) */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-gray-600 font-inter">
            <button onClick={() => scrollTo('servicios')} className="hover:text-tg-blue transition-colors">
              Soluciones
            </button>
            <button onClick={() => scrollTo('servicios')} className="hover:text-tg-blue transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollTo('recursos')} className="hover:text-tg-blue transition-colors">
              Recursos
            </button>
            <button onClick={() => scrollTo('nosotros')} className="hover:text-tg-blue transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollTo('contacto')} className="hover:text-tg-blue transition-colors">
              Contacto
            </button>
          </nav>

          {/* Right: Social Icons (LinkedIn, Instagram, YouTube) */}
          <div className="flex items-center gap-4 text-gray-600">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tg-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Subfooter Line (Exact Image 04) */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-400 font-inter">
          <div>
            © 2026 TecnoGen. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Tecnología e inteligencia para hacer crecer negocios.</span>
            <span className="w-6 h-0.5 bg-tg-blue inline-block rounded-full" />
          </div>
        </div>

      </div>
    </footer>
  );
};
