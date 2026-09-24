import React from 'react';
import { Database, Brain, Cog, BarChart3, ChevronRight } from 'lucide-react';

export const ProcessFlow: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Database,
      title: 'Captura',
      desc: 'Atrae leads desde múltiples canales.',
    },
    {
      num: '02',
      icon: Brain,
      title: 'Inteligencia',
      desc: 'La IA analiza y segmenta.',
    },
    {
      num: '03',
      icon: Cog,
      title: 'Automatiza',
      desc: 'Activa flujos personalizados.',
    },
    {
      num: '04',
      icon: BarChart3,
      title: 'Resultados',
      desc: 'Más ventas, menos esfuerzo.',
    },
  ];

  return (
    <section id="proceso" className="py-20 bg-slate-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Exact Image 04) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest block mb-2">
              DE LA IDEA AL RESULTADO
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#0B1F3B] tracking-tight">
              Automatiza. Escala. Crece.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-500 font-inter max-w-md">
            Diseñamos flujos inteligentes que conectan personas, datos y oportunidades.
          </p>
        </div>

        {/* 4 Steps Chain (Exact Image 04) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative flex items-center">
                <div className="w-full p-6 rounded-2xl bg-white border border-gray-100 shadow-xs text-center flex flex-col items-center justify-between min-h-[170px]">
                  
                  {/* Step Number Top Left */}
                  <div className="w-full text-left">
                    <span className="text-xs font-montserrat font-bold text-tg-blue">
                      {item.num}
                    </span>
                  </div>

                  {/* Icon Center */}
                  <div className="my-2 text-tg-blue">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-montserrat font-bold text-base text-[#0B1F3B]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-inter mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>

                </div>

                {/* Chevron connector between cards */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white text-tg-blue items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-tg-blue" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
