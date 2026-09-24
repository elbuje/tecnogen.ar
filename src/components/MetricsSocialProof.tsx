import React from 'react';

export const MetricsSocialProof: React.FC = () => {
  const metrics = [
    { value: '+150', label: 'Clientes activos', sublabel: 'Empresas y PyMEs en Latam' },
    { value: '+300%', label: 'Crecimiento promedio', sublabel: 'En volumen de consultas calificadas' },
    { value: '98%', label: 'Satisfacción de clientes', sublabel: 'Retención y continuidad de servicio' },
    { value: '+5 años', label: 'Impulsando negocios', sublabel: 'TecnoBrain + GEN de Negocio' },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Headline side */}
          <div className="lg:col-span-4 text-left">
            <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest block mb-1">
              RESULTADOS QUE HABLAN
            </span>
            <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark tracking-tight leading-snug">
              La confianza de negocios reales.
            </h3>
          </div>

          {/* 4 Stat Badges matching Image 04 */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs text-left">
                <div className="font-montserrat font-extrabold text-3xl sm:text-4xl text-tg-blue tracking-tight">
                  {m.value}
                </div>
                <div className="font-montserrat font-bold text-sm text-gray-900 mt-1">
                  {m.label}
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">
                  {m.sublabel}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
