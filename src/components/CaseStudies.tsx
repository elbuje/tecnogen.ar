import React from 'react';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      company: 'Clínica Médica & Especialidades',
      industry: 'Salud & Servicios',
      problem: 'Recibían más de 400 consultas mensuales por WhatsApp y el equipo demoraba hasta 4 horas en responder, perdiendo citas de alto valor.',
      solution: 'Implementamos WhatsApp Cloud API con Agente de IA para pre-calificación de turnos, sincronización en tiempo real con CRM y recordatorios automatizados.',
      tech: ['WhatsApp API', 'Agente IA', 'Kommo CRM', 'Webhooks'],
      results: [
        { label: 'Tiempo de respuesta', value: '< 2 min', note: 'Antes 4+ horas' },
        { label: 'Tasa de conversión a citas', value: '+45%', note: 'Crecimiento sostenido' },
        { label: 'Ahorro operativo', value: '35 h/mes', note: 'En recepción' },
      ],
      badge: 'Atención & Ventas 24/7'
    },
    {
      company: 'Empresa B2B de Tecnología & Software',
      industry: 'Tecnología B2B',
      problem: 'Invertían en Google Ads pero el costo por lead era excesivo y los contactos no tenían perfil de tomadores de decisión.',
      solution: 'Rediseño de funnel con landing pages transaccionales, campañas orientadas a intención de compra B2B y calificación automática de prospectos.',
      tech: ['Google Ads', 'Funnels B2B', 'Lead Scoring IA', 'Analítica'],
      results: [
        { label: 'Retorno de inversión (ROI)', value: '+320%', note: 'En 90 días' },
        { label: 'Costo por oportunidad', value: '-54%', note: 'Optimización de CPA' },
        { label: 'Reuniones calificadas', value: '4x', note: 'Con directores' },
      ],
      badge: 'Adquisición B2B'
    },
    {
      company: 'Consultora de Negocios & Finanzas',
      industry: 'Servicios Profesionales',
      problem: 'Cero presencia orgánica, dependían exclusivamente de referidos y carecían de un sistema para producir contenido de autoridad constante.',
      solution: 'Despliegue del sistema Content OS para LinkedIn y Blog + Estrategia SEO transaccional con arquitectura optimizada para motores de IA (GEO).',
      tech: ['Content OS', 'SEO Transaccional', 'GEO Optimization', 'LinkedIn'],
      results: [
        { label: 'Tráfico orgánico transaccional', value: '+180%', note: 'En 6 meses' },
        { label: 'Top 3 en Google', value: '14 keywords', note: 'Alta intención' },
        { label: 'Publicaciones semanales', value: '5 piezas', note: 'Cero fricción' },
      ],
      badge: 'Autoridad & SEO'
    }
  ];

  return (
    <section id="casos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-montserrat font-bold text-tg-cyan uppercase tracking-widest block mb-2">
            RESULTADOS REALES Y MEDIBLES
          </span>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-tg-dark tracking-tight leading-tight">
            Casos de éxito que hablan con números
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            No vendemos promesas vacías: mostramos el problema, qué tecnología implementamos y el impacto real en la facturación y los tiempos de nuestros clientes.
          </p>
        </div>

        {/* 3 Cases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-3xl p-7 border border-gray-200/80 hover:border-tg-blue/40 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between text-left"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold font-montserrat px-3 py-1 rounded-full bg-blue-100/70 text-tg-blue uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    {item.industry}
                  </span>
                </div>

                <h3 className="font-montserrat font-bold text-xl text-tg-dark mb-4">
                  {item.company}
                </h3>

                {/* Problem vs Solution */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100 text-gray-700">
                    <strong className="text-rose-700 block font-semibold mb-0.5">El Problema:</strong>
                    {item.problem}
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-gray-700">
                    <strong className="text-tg-blue block font-semibold mb-0.5">La Solución TecnoGen:</strong>
                    {item.solution}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-semibold bg-white border border-gray-200 text-gray-600 px-2.5 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantitative Results Block */}
              <div className="pt-4 border-t border-gray-200/70 grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl shadow-inner border border-gray-100">
                {item.results.map((res, rIdx) => (
                  <div key={rIdx} className="text-center">
                    <div className="font-montserrat font-extrabold text-base sm:text-lg text-tg-blue">
                      {res.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-medium text-gray-500 leading-tight">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
