import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, Sparkles, Zap, Bot, MessageSquare, BarChart3, ArrowRight, Layers } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { name: 'Marketing Digital', desc: 'Google, Meta, LinkedIn y Funnels de conversión', href: '#servicios', icon: BarChart3 },
    { name: 'SEO & Posicionamiento GEO', desc: 'Visibilidad orgánica y citabilidad en IA', href: '#servicios', icon: Sparkles },
    { name: 'Inteligencia Artificial', desc: 'Agentes, asistentes y automatización cognitiva', href: '#servicios', icon: Bot },
    { name: 'Automatización de Procesos', desc: 'Flujos sin intervención manual 24/7', href: '#servicios', icon: Zap },
    { name: 'CRM & WhatsApp API', desc: 'Gestión y trazabilidad de leads de punta a punta', href: '#servicios', icon: MessageSquare },
    { name: 'Content OS (Contenido IA)', desc: 'Sistema operativo de producción multicanal', href: '#servicios', icon: Layers },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Logo variant="horizontal" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Solutions Dropdown */}
            <div className="relative" onMouseLeave={() => setSolutionsDropdownOpen(false)}>
              <button
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
              >
                <span>Soluciones</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-tg-blue' : 'text-gray-400'}`} />
              </button>

              {solutionsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="px-3 py-1.5 mb-1 border-b border-gray-50">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Sistemas de Crecimiento
                    </span>
                  </div>
                  <div className="space-y-1">
                    {solutions.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={idx}
                          href={item.href}
                          onClick={() => setSolutionsDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-blue-50 text-tg-blue group-hover:bg-tg-blue group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900 group-hover:text-tg-blue transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#por-que-tecnogen"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              ¿Por qué TecnoGen?
            </a>

            <a
              href="#servicios"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              Servicios
            </a>

            <a
              href="#proceso"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              Proceso
            </a>

            <a
              href="#casos"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              Casos de Éxito
            </a>

            <a
              href="#nosotros"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              Nosotros
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contacto"
              className="px-4 py-2 text-sm font-semibold text-tg-dark hover:text-tg-blue transition-colors"
            >
              Contacto
            </a>
            
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs tracking-wide uppercase transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Agenda una consultoría</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-tg-blue rounded-lg focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Soluciones & Servicios
            </a>
            <a
              href="#por-que-tecnogen"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              ¿Por qué TecnoGen?
            </a>
            <a
              href="#proceso"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Nuestro Proceso
            </a>
            <a
              href="#casos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Casos de Éxito
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Sobre TecnoGen
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Contacto Directo
            </a>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-tg-blue text-white font-montserrat font-bold text-sm shadow-md"
            >
              <span>Agenda una consultoría</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
