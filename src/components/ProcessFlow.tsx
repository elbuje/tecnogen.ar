import React, { useState } from 'react';
import { Database, BrainCircuit, Cog, TrendingUp, ChevronRight, CheckCircle2 } from 'lucide-react';

export const ProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Captura',
      subtitle: 'Atrae leads desde múltiples canales.',
      desc: 'Configuración de campañas de alta conversión en Google Ads, Meta y LinkedIn combinadas con arquitectura SEO para atraer prospectos con verdadera intención de compra.',
      icon: Database,
      details: ['Funnels y Landing Pages segmentadas', 'Campañas orientadas a intención de compra', 'Integración inmediata con canales de entrada'],
      badge: 'Tráfico Calificado',
      color: 'from-blue-600 to-blue-500',
    },
    {
      step: '02',
      title: 'Inteligencia',
      subtitle: 'La IA analiza y segmenta.',
      desc: 'Modelos de IA y agentes cognitivos procesan cada consulta en segundos, analizan la urgencia, clasifican el interés y asignan un score al lead.',
      icon: BrainCircuit,
      details: ['Clasificación automática por intención', 'Scoring de prospectos en tiempo real', 'Comprensión contextual del mensaje'],
      badge: 'IA & Scoring',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      step: '03',
      title: 'Automatiza',
      subtitle: 'Activa flujos personalizados.',
      desc: 'El sistema deriva el prospecto calificado al CRM, envía respuestas inmediatas por WhatsApp oficial, agenda reuniones y programa seguimientos sin intervención manual.',
      icon: Cog,
      details: ['WhatsApp Cloud API oficial', 'Creación y actualización de contactos en CRM', 'Secuencias de seguimiento automáticas'],
      badge: 'Cero Fricción',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      step: '04',
      title: 'Resultados',
      subtitle: 'Más ventas, menos esfuerzo.',
      desc: 'Tu equipo comercial recibe prospectos listos para comprar con todo su contexto documentado, aumentando drásticamente la tasa de cierre y el retorno de inversión.',
      icon: TrendingUp,
      details: ['Mayor tasa de conversión', 'Tiempos de respuesta menores a 2 minutos', 'Dashboards ejecutivos de rendimiento'],
      badge: 'Crecimiento Real',
      color: 'from-indigo-600 to-cyan-500',
    },
  ];

  return (
    <section id="proceso" className="py-24 bg-slate-50/70 border-y border-gray-200/60 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-400/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline matching Image 04 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-montserrat font-bold text-tg-blue uppercase tracking-widest block mb-2">
              DE LA IDEA AL RESULTADO
            </span>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-tg-dark tracking-tight leading-tight">
              Automatiza. Escala. Crece.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Diseñamos flujos inteligentes que conectan personas, datos y oportunidades comerciales.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-montserrat font-semibold text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-tg-cyan animate-ping" />
            <span>Flujo Operativo de Extremo a Extremo</span>
          </div>
        </div>

        {/* 4 Steps Horizontal Chain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = idx === activeStep;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 text-left border relative ${
                  isSelected
                    ? 'bg-white border-tg-blue shadow-lg shadow-blue-500/10 scale-[1.02]'
                    : 'bg-white/80 hover:bg-white border-gray-200/80 hover:border-gray-300 shadow-sm'
                }`}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.color} shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`font-montserrat font-bold text-sm tracking-wider ${isSelected ? 'text-tg-blue' : 'text-gray-400'}`}>
                    {item.step}
                  </span>
                </div>

                <h3 className="font-montserrat font-bold text-lg text-tg-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-gray-500 leading-snug mb-3">
                  {item.subtitle}
                </p>

                {/* Arrow connector indicator */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-gray-200 text-gray-400 flex items-center justify-center shadow-xs">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Deep Step Exploration Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-tg-blue font-montserrat font-bold text-xs uppercase tracking-wider">
              Paso {steps[activeStep].step} en Detalle
            </span>
            <span className="text-xs font-semibold text-tg-cyan uppercase tracking-wider">
              {steps[activeStep].badge}
            </span>
          </div>

          <h3 className="font-montserrat font-bold text-2xl text-tg-dark mb-3">
            {steps[activeStep].title}: {steps[activeStep].subtitle}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            {steps[activeStep].desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100">
            {steps[activeStep].details.map((point, pIdx) => (
              <div key={pIdx} className="flex items-center gap-2 text-xs font-medium text-gray-700 bg-slate-50 p-3 rounded-xl border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-tg-blue flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
