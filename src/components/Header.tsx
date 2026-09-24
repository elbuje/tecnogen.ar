import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, Sparkles, Zap, Bot, MessageSquare, BarChart3, ArrowRight, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { name: 'Marketing Digital', desc: 'Google, Meta, LinkedIn y Funnels de conversión', href: '/agencia-marketing-digital', icon: BarChart3 },
    { name: 'SEO & Posicionamiento GEO', desc: 'Visibilidad orgánica y citabilidad en IA', href: '/agencia-seo-posicionamiento', icon: Sparkles },
    { name: 'Inteligencia Artificial', desc: 'Modelos RAG y automatización cognitiva', href: '/inteligencia-artificial-empresas', icon: Bot },
    { name: 'Agentes de IA', desc: 'Asistentes comerciales y atención 24/7', href: '/agentes-inteligencia-artificial', icon: Bot },
    { name: 'Automatización de Procesos', desc: 'Flujos sin intervención manual 24/7', href: '/automatizacion-de-procesos', icon: Zap },
    { name: 'CRM & WhatsApp API', desc: 'Gestión y trazabilidad de leads de punta a punta', href: '/crm-whatsapp-ventas', icon: MessageSquare },
    { name: 'Content OS (Contenido IA)', desc: 'Sistema operativo de producción multicanal', href: '/contenido-inteligencia-artificial', icon: Layers },
  ];

  const handleConsultationClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      navigate('/contacto');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo variant="horizontal" />
          </Link>

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
                  className="absolute top-full left-0 w-84 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 px-2 transition-all duration-200 animate-in fade-in slide-in-from-top-2 z-50"
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
                        <Link
                          key={idx}
                          to={item.href}
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
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/agencia-marketing-digital"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              Marketing Digital
            </Link>

            <Link
              to="/agencia-seo-posicionamiento"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              SEO & GEO
            </Link>

            <Link
              to="/inteligencia-artificial-empresas"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              IA & Agentes
            </Link>

            <Link
              to="/automatizacion-de-procesos"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              Automatización
            </Link>

            <Link
              to="/crm-whatsapp-ventas"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              CRM & WhatsApp
            </Link>

            <Link
              to="/sobre-nosotros"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-tg-blue transition-colors rounded-lg hover:bg-gray-50"
            >
              Nosotros
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contacto"
              className="px-4 py-2 text-sm font-semibold text-tg-dark hover:text-tg-blue transition-colors"
            >
              Contacto
            </Link>
            
            <button
              onClick={handleConsultationClick}
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
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Inicio
            </Link>
            <Link
              to="/agencia-marketing-digital"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Marketing Digital & Funnels
            </Link>
            <Link
              to="/agencia-seo-posicionamiento"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              SEO & Posicionamiento GEO
            </Link>
            <Link
              to="/inteligencia-artificial-empresas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Inteligencia Artificial para Empresas
            </Link>
            <Link
              to="/agentes-inteligencia-artificial"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Agentes Autónomos de IA
            </Link>
            <Link
              to="/automatizacion-de-procesos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Automatización de Procesos
            </Link>
            <Link
              to="/crm-whatsapp-ventas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              CRM & WhatsApp Comercial
            </Link>
            <Link
              to="/contenido-inteligencia-artificial"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Content OS (Contenido con IA)
            </Link>
            <Link
              to="/sobre-nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-blue-50 hover:text-tg-blue"
            >
              Contacto Directo
            </Link>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleConsultationClick();
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
