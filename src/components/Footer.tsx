import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          
          {/* Col 1: Brand & Slogan (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="horizontal" />
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Agencia tecnológica de crecimiento empresarial. Integramos marketing digital, inteligencia artificial y automatización para hacer crecer empresas.
            </p>
            <div className="pt-2 text-xs font-semibold text-tg-blue">
              Ideas inteligentes para un mayor mañana.
            </div>
          </div>

          {/* Col 2: Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-montserrat font-bold text-xs text-gray-900 uppercase tracking-wider">
              Sistemas & Soluciones
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="#servicios" className="hover:text-tg-blue transition-colors">Marketing Digital & Ads</a></li>
              <li><a href="#servicios" className="hover:text-tg-blue transition-colors">SEO & Posicionamiento GEO</a></li>
              <li><a href="#servicios" className="hover:text-tg-blue transition-colors">Inteligencia Artificial & Agentes</a></li>
              <li><a href="#servicios" className="hover:text-tg-blue transition-colors">Automatización de Procesos</a></li>
              <li><a href="#servicios" className="hover:text-tg-blue transition-colors">CRM & WhatsApp Cloud API</a></li>
              <li><a href="#servicios" className="hover:text-tg-blue transition-colors">Content OS (Producción IA)</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation & Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-montserrat font-bold text-xs text-gray-900 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="#por-que-tecnogen" className="hover:text-tg-blue transition-colors">¿Por qué TecnoGen?</a></li>
              <li><a href="#proceso" className="hover:text-tg-blue transition-colors">Proceso 4 Pasos</a></li>
              <li><a href="#casos" className="hover:text-tg-blue transition-colors">Casos de Éxito</a></li>
              <li><a href="#nosotros" className="hover:text-tg-blue transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-tg-blue transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-montserrat font-bold text-xs text-gray-900 uppercase tracking-wider">
              Conectemos
            </h4>
            <div className="flex items-center gap-3 text-gray-500">
              <a
                href="https://www.linkedin.com/company/tecnogen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-tg-blue border border-gray-200 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/tecnogen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-pink-50 hover:text-pink-600 border border-gray-200 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@tecnogen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-600 border border-gray-200 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 text-[11px] text-gray-500">
              Buenos Aires, Argentina<br />
              Atención en toda Latinoamérica
            </div>
          </div>

        </div>

        {/* Bottom Subfooter matching Image 04 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} TecnoGen. Todos los derechos reservados.
          </div>
          <div className="text-gray-400 font-medium">
            Tecnología e inteligencia para hacer crecer negocios.
          </div>
        </div>

      </div>
    </footer>
  );
};
