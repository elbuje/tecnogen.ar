import React from 'react';

export const MetricsSocialProof: React.FC = () => {
  const stats = [
    { value: '+150', label: 'Clientes', sublabel: 'activos' },
    { value: '+300%', label: 'Crecimiento', sublabel: 'promedio' },
    { value: '98%', label: 'Satisfacción', sublabel: 'de clientes' },
    { value: '+5 años', label: 'Impulsando', sublabel: 'negocios' },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Title (Exact Image 04) */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest block mb-1">
              RESULTADOS QUE HABLAN
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#0B1F3B] tracking-tight leading-tight">
              La confianza de<br className="hidden sm:inline" /> negocios reales.
            </h2>
          </div>

          {/* Right 4 Metric Columns (Exact Image 04) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            {stats.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#0B1F3B] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-inter font-medium leading-tight">
                  {item.label}<br />{item.sublabel}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
