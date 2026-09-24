import React from 'react';
import { Network, LineChart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-slate-50 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-montserrat font-bold text-tg-blue uppercase tracking-widest block mb-2">
            NUESTRO ORIGEN Y PROPÓSITO
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-tg-dark tracking-tight leading-tight">
            Experiencia real en tecnología, negocios y personas
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            TecnoGen nace de la unión de dos trayectorias complementarias para resolver un desafío concreto: ayudar a las empresas a crecer con sistemas tecnológicos sólidos.
          </p>
        </div>

        {/* 2 Foundations Synergy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Experiencia Tecnológica */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm text-left relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-tg-blue flex items-center justify-center mb-6">
              <Network className="w-6 h-6" />
            </div>
            
            <span className="text-xs font-montserrat font-bold text-tg-blue uppercase tracking-wider block mb-1">
              Pilar Tecnológico & Sistemas
            </span>
            <h3 className="font-montserrat font-bold text-2xl text-tg-dark mb-3">
              Infraestructura, Automatización e IA
            </h3>
            
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Aportamos años de experiencia real trabajando con servidores, entornos cloud, arquitecturas empresariales, integraciones complejas de APIs, CRM y despliegue de modelos de Inteligencia Artificial.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">Cloud & Servidores</span>
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">APIs & Webhooks</span>
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">Agentes de IA</span>
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">Seguridad & Datos</span>
            </div>
          </div>

          {/* Pillar 2: Estrategia Comercial & Marketing */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm text-left relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-tg-cyan flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6" />
            </div>
            
            <span className="text-xs font-montserrat font-bold text-tg-cyan uppercase tracking-wider block mb-1">
              Pilar Comercial & Crecimiento
            </span>
            <h3 className="font-montserrat font-bold text-2xl text-tg-dark mb-3">
              Marketing, Contenidos & Ventas
            </h3>
            
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Aportamos visión estratégica comercial, generación de contenidos de alta autoridad, funnels de conversión, diseño de identidad y optimización de embudos para transformar prospectos en clientes leales.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">Funnels & Ads B2B/B2C</span>
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">Content OS</span>
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">Estrategia Comercial</span>
              <span className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-full font-medium">SEO Transaccional</span>
            </div>
          </div>

        </div>

        {/* Brand Values Badges Grid */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm text-left">
          <h4 className="font-montserrat font-bold text-lg text-tg-dark mb-6 text-center">
            Nuestros 6 Atributos de Marca
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100">
              <span className="font-montserrat font-bold text-xs text-tg-dark block">Innovadora</span>
              <span className="text-[11px] text-gray-500">Siempre un paso adelante</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100">
              <span className="font-montserrat font-bold text-xs text-tg-dark block">Estratégica</span>
              <span className="text-[11px] text-gray-500">Pensamiento con propósito</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100">
              <span className="font-montserrat font-bold text-xs text-tg-dark block">Confiable</span>
              <span className="text-[11px] text-gray-500">Resultados reales</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100">
              <span className="font-montserrat font-bold text-xs text-tg-dark block">Ágil</span>
              <span className="text-[11px] text-gray-500">Menos fricción</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100">
              <span className="font-montserrat font-bold text-xs text-tg-dark block">Tecnológica</span>
              <span className="text-[11px] text-gray-500">Inteligencia aplicada</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-gray-100">
              <span className="font-montserrat font-bold text-xs text-tg-dark block">Humana</span>
              <span className="text-[11px] text-gray-500">Personas + Tecnología</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
