import React from 'react';
import { Lightbulb, BarChart4, Shield, Users } from 'lucide-react';

export const WhyTecnoGen: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Estrategias inteligentes',
      desc: 'Marketing basado en datos e IA aplicada para conectar con las personas correctas.',
      badge: 'Datos + IA',
      color: 'text-amber-500',
      bgColor: 'bg-amber-50',
    },
    {
      icon: BarChart4,
      title: 'Procesos automatizados',
      desc: 'Más eficiencia, menos fricción. Automatizamos el seguimiento de tus consultas.',
      badge: 'Cero Fricción',
      color: 'text-tg-blue',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Shield,
      title: 'Crecimiento sostenible',
      desc: 'Resultados medibles y escalables que consolidan la rentabilidad de tu empresa.',
      badge: 'Resultados Reales',
      color: 'text-tg-cyan',
      bgColor: 'bg-cyan-50',
    },
    {
      icon: Users,
      title: 'Un equipo que te acompaña',
      desc: 'Tecnología con enfoque humano. Respaldado por años de trayectoria técnica y de negocios.',
      badge: 'Personas + Tech',
      color: 'text-tg-purple',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section id="por-que-tecnogen" className="py-20 bg-white border-y border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-tg-carbon text-xs font-montserrat font-bold tracking-wider uppercase mb-3">
            Ventaja TecnoGen
          </div>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-tg-dark tracking-tight">
            ¿Por qué TecnoGen?
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-normal">
            Convertimos tecnología en resultados reales para tu negocio. No vendemos tecnología por la tecnología misma: la aplicamos donde genera impacto comercial.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-2xl bg-slate-50/60 hover:bg-white border border-gray-200/70 hover:border-tg-blue/30 hover:shadow-tg-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-lg text-tg-dark mb-2.5 group-hover:text-tg-blue transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center text-xs font-semibold text-tg-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Conocer enfoque →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy highlight strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-cyan-50/50 to-transparent border border-blue-100/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-tg-dark font-medium">
            <span className="font-montserrat font-bold text-tg-blue">Filosofía TecnoGen:</span>
            <span>Negocios + Tecnología + Personas = Crecimiento Sostenible</span>
          </div>
          <a
            href="#contacto"
            className="text-xs font-montserrat font-bold text-tg-blue hover:text-blue-800 uppercase tracking-wider underline underline-offset-4"
          >
            Hablemos de tu caso específico →
          </a>
        </div>

      </div>
    </section>
  );
};
