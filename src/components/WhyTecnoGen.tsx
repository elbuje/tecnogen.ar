import React from 'react';
import { Lightbulb, BarChart4, ShieldCheck, Users } from 'lucide-react';

export const WhyTecnoGen: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Estrategias inteligentes',
      desc: 'Marketing basado en datos y IA.',
    },
    {
      icon: BarChart4,
      title: 'Procesos automatizados',
      desc: 'Más eficiencia, menos fricción.',
    },
    {
      icon: ShieldCheck,
      title: 'Crecimiento sostenible',
      desc: 'Resultados medibles y escalables.',
    },
    {
      icon: Users,
      title: 'Un equipo que te acompaña',
      desc: 'Tecnología con enfoque humano.',
    },
  ];

  return (
    <section id="por-que-tecnogen" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Title block (Image 04) */}
          <div className="lg:col-span-4 text-left">
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#0B1F3B] tracking-tight leading-tight">
              ¿Por qué<br />TecnoGen?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 font-inter leading-relaxed">
              Convertimos tecnología en resultados reales para tu negocio.
            </p>
          </div>

          {/* Right 4 Pillars (Image 04) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center sm:items-start space-y-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#0B1F3B] bg-slate-50 border border-gray-100">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-[#0B1F3B] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-inter mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
