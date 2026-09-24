import React from 'react';
import { Megaphone, Cpu, Cog, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Marketing Digital',
      desc: 'Estrategias que conectan con las personas correctas.',
      url: '/agencia-marketing-digital',
    },
    {
      icon: Cpu,
      title: 'Inteligencia Artificial',
      desc: 'Soluciones de IA para decisiones más inteligentes.',
      url: '/inteligencia-artificial-empresas',
    },
    {
      icon: Cog,
      title: 'Automatización',
      desc: 'Procesos que trabajan por ti, 24/7.',
      url: '/automatizacion-de-procesos',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Exact Image 04) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest block mb-2">
              NUESTROS SERVICIOS
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#0B1F3B] tracking-tight">
              Soluciones para un crecimiento real
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-500 font-inter">
              Integramos marketing, IA y automatización en soluciones diseñadas para tu negocio.
            </p>
          </div>

          <div>
            <Link
              to="/agencia-marketing-digital"
              className="inline-flex items-center gap-1 text-xs font-montserrat font-bold text-tg-blue hover:text-blue-800 transition-colors uppercase tracking-wider"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Cards Grid (Exact Image 04) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-tg-blue bg-blue-50/50 mb-6">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="font-montserrat font-bold text-xl text-[#0B1F3B] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 font-inter leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <Link
                    to={item.url}
                    className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-tg-blue hover:text-blue-800 transition-colors"
                  >
                    <span>Saber más</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
