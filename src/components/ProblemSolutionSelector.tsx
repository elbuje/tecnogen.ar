import React, { useState } from 'react';
import { Target, Cpu, RefreshCw, MessageSquareQuote, Video, Search, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProblemSolutionSelectorProps {
  onSelectSolution: (solutionName: string) => void;
}

export const ProblemSolutionSelector: React.FC<ProblemSolutionSelectorProps> = ({ onSelectSolution }) => {
  const [activeTab, setActiveTab] = useState(0);

  const problems = [
    {
      id: 'leads',
      title: 'Conseguir más clientes',
      icon: Target,
      symptom: 'Invertís en anuncios o redes pero no sabés qué funciona realmente ni recibís suficientes consultas calificadas.',
      solutionTitle: 'Sistema de Captación Predictiva (Google Ads + Meta + Funnel Calificado)',
      solutionDesc: 'Diseñamos funnels de adquisición que filtran prospectos de alto ticket antes de que tomen contacto con tu equipo comercial, reduciendo el costo por lead y maximizando el retorno.',
      deliverables: ['Campañas B2B / B2C de alta intención', 'Landing Pages optimizadas para conversión', 'Medición y analítica de ROI por canal'],
      metric: '+40% leads calificados',
    },
    {
      id: 'automation',
      title: 'Automatizar procesos',
      icon: RefreshCw,
      symptom: 'Tu equipo pierde horas valiosas en tareas manuales, carga de planillas, traspaso de información y seguimiento repetitivo.',
      solutionTitle: 'Arquitectura de Automatización de Flujos (APIs + Webhooks + CRM)',
      solutionDesc: 'Conectamos tus sistemas existentes (CRM, WhatsApp, correos, bases de datos) para que la información fluya sin intervención humana y sin margen de error.',
      deliverables: ['Sincronización multi-plataforma', 'Notificaciones y recordatorios automáticos', 'Eliminación de tareas manuales repetitivas'],
      metric: '15+ horas semanales ahorradas por persona',
    },
    {
      id: 'ia',
      title: 'Implementar IA en el negocio',
      icon: Cpu,
      symptom: 'Querés aprovechar la Inteligencia Artificial pero no sabés exactamente en qué procesos específicos generará rentabilidad real.',
      solutionTitle: 'Agentes de IA y Asistentes Cognitivos a Medida',
      solutionDesc: 'Desplegamos agentes inteligentes entrenados con el conocimiento y reglas comerciales de tu empresa, capaces de responder, clasificar y operar 24/7.',
      deliverables: ['Asistentes comerciales y de atención 24/7', 'Bases de conocimiento seguras (RAG)', 'Agentes resolutivos de tareas internas'],
      metric: 'Respuestas precisas en <15 segundos',
    },
    {
      id: 'sales',
      title: 'Mejorar ventas y WhatsApp',
      icon: MessageSquareQuote,
      symptom: 'Llegan consultas por WhatsApp pero quedan sin responder, se pierden oportunidades y el seguimiento comercial es desordenado.',
      solutionTitle: 'CRM Comercial + WhatsApp Cloud API Integrado',
      solutionDesc: 'Implementamos un flujo comercial integral: lead entra por WhatsApp, la IA clasifica su necesidad, el CRM asigna al vendedor correspondiente y se ejecutan seguimientos automáticos.',
      deliverables: ['WhatsApp Business API multiagente', 'Embudo y pipeline de ventas claro', 'Seguimiento automatizado para que ningún lead se enfríe'],
      metric: '0 oportunidades perdidas por demora',
    },
    {
      id: 'content',
      title: 'Generar contenido constante',
      icon: Video,
      symptom: 'Necesitás publicar con regularidad en LinkedIn, Instagram o blog para ganar autoridad, pero no tenés tiempo ni equipo de producción.',
      solutionTitle: 'Content OS: Sistema de Producción de Contenidos con IA',
      solutionDesc: 'Un sistema operativo que transforma ideas y conocimientos de tu empresa en carruseles, posts de LinkedIn, guiones, videos y artículos con un flujo estructurado de aprobación.',
      deliverables: ['Flujo Idea → Copy → Gráfica → Publicación', 'Contenido para LinkedIn e Instagram de alta autoridad', 'Calendario editorial predecible'],
      metric: '4x volumen de contenido con máxima calidad',
    },
    {
      id: 'seo',
      title: 'Posicionar mi empresa (SEO/GEO)',
      icon: Search,
      symptom: 'Dependés 100% de la pauta publicitaria paga y dejás de recibir contactos apenas pausás los presupuestos de anuncios.',
      solutionTitle: 'SEO Transaccional & Optimización para Motores de IA (GEO)',
      solutionDesc: 'Estrategia de autoridad orgánica para posicionar en los primeros resultados de Google y ser citados como fuente de referencia en motores de IA (ChatGPT, Perplexity, Gemini).',
      deliverables: ['SEO técnico y arquitectura transaccional', 'Optimización para respuestas de IA (GEO / AIO)', 'Estrategia de palabras clave de alta intención de compra'],
      metric: 'Tráfico calificado continuo y acumulativo',
    },
  ];

  const current = problems[activeTab];

  return (
    <section className="py-20 bg-slate-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 text-tg-blue text-xs font-montserrat font-bold tracking-wider uppercase mb-3">
            Diagnóstico Rápido
          </div>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-tg-dark tracking-tight">
            ¿Qué querés mejorar en tu empresa?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Hacé clic en tu principal desafío actual para ver cómo lo resolvemos con sistemas integrados.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-montserrat font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-tg-blue text-white shadow-md shadow-blue-500/20 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-tg-blue'}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Detail Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Problem & Solution Breakdown */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100/80">
                <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                  El obstáculo actual:
                </span>
                <p className="text-sm text-gray-800 font-medium">
                  {current.symptom}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-tg-cyan uppercase tracking-wider block mb-1">
                  Cómo lo soluciona TecnoGen:
                </span>
                <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-tg-dark mb-2">
                  {current.solutionTitle}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {current.solutionDesc}
                </p>
              </div>

              {/* Deliverables list */}
              <div className="space-y-2 pt-2">
                {current.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-tg-blue flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Metric badge & Direct Action */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-tg-dark rounded-2xl p-7 text-white flex flex-col justify-between h-full space-y-6 shadow-inner">
              <div>
                <span className="text-xs font-montserrat font-semibold text-tg-cyan uppercase tracking-widest block mb-2">
                  Impacto Esperado
                </span>
                <div className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                  {current.metric}
                </div>
                <p className="text-xs text-gray-300 mt-2">
                  Medido en empresas y PyMEs que implementaron este sistema integrado.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onSelectSolution(current.title)}
                  className="w-full py-3 px-4 rounded-xl bg-tg-blue hover:bg-blue-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all duration-200"
                >
                  <span>Solicitar plan para {current.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
