import React, { useState } from 'react';
import { 
  Megaphone, 
  Search, 
  Cpu, 
  Workflow, 
  MessageSquare, 
  Layers, 
  ArrowRight, 
  Check, 
  X,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  id: string;
  number: string;
  icon: any;
  title: string;
  summary: string;
  headline: string;
  color: string;
  accentBg: string;
  seoUrl: string;
  includes: string[];
  message: string;
  details: {
    problem: string;
    howItWorks: string[];
    deliverables: string[];
    idealFor: string;
  };
}

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'marketing',
      number: '01',
      icon: Megaphone,
      title: 'Marketing Digital',
      headline: 'Estrategias que conectan con las personas correctas.',
      summary: 'Google Ads, Meta Ads, LinkedIn Ads, funnels y optimización constante de conversiones orientadas a generar leads de alto valor.',
      color: 'text-tg-blue',
      accentBg: 'bg-blue-50',
      seoUrl: '/agencia-marketing-digital',
      message: 'Conseguimos que las personas correctas encuentren, conozcan y contacten tu empresa.',
      includes: [
        'Google Ads & Campañas de Búsqueda',
        'Meta Ads (Instagram & Facebook)',
        'LinkedIn Ads B2B',
        'Landing Pages de Alta Conversión',
        'Funnels y Embudos de Adquisición',
        'Remarketing y Analítica Avanzada'
      ],
      details: {
        problem: 'Muchas empresas invierten presupuesto en publicidad digital pero no logran atraer prospectos con verdadera intención de compra, desperdiciando clics en tráfico no calificado.',
        howItWorks: [
          'Auditoría y definición de la propuesta de valor comercial.',
          'Segmentación precisa por intención de compra y cargos de decisión B2B/B2C.',
          'Diseño de Landing Pages optimizadas para convertir visitas en consultas.',
          'Medición precisa de conversiones, costo por lead y retorno sobre la inversión publicitaria (ROAS).'
        ],
        deliverables: ['Estructura publicitaria completa', 'Landing Pages en producción', 'Dashboards de métricas en tiempo real', 'Optimización y testing semanal'],
        idealFor: 'PyMEs y empresas que necesitan un flujo constante y predecible de nuevas consultas comerciales.'
      }
    },
    {
      id: 'seo',
      number: '02',
      icon: Search,
      title: 'SEO y Posicionamiento',
      headline: 'Visibilidad orgánica que no depende de pagar cada clic.',
      summary: 'SEO técnico, arquitectura transaccional y optimización GEO para posicionar en Google y ser citados por motores de IA.',
      color: 'text-tg-cyan',
      accentBg: 'bg-cyan-50',
      seoUrl: '/agencia-seo-posicionamiento',
      message: 'Construimos visibilidad que sigue generando oportunidades incluso cuando dejás de pagar por cada clic.',
      includes: [
        'SEO Técnico y Core Web Vitals',
        'Keyword Research de Intención Transaccional',
        'Optimización GEO (Motores de IA: ChatGPT/Perplexity)',
        'Google Business Profile y SEO Local',
        'Arquitectura de Páginas Específicas por Servicio',
        'Estrategia de Autoridad y Contenidos'
      ],
      details: {
        problem: 'Depender exclusivamente de anuncios pagos encarece la captación a largo plazo. Al apagar la pauta, el flujo de prospectos cae a cero.',
        howItWorks: [
          'Investigación profunda de palabras clave con intención comercial.',
          'Optimización técnica de velocidad, semántica y datos estructurados Schema.org.',
          'Preparación de contenido para citabilidad en respuestas generadas por IA (GEO).',
          'Posicionamiento local para captar clientes en tu zona geográfica.'
        ],
        deliverables: ['Auditoría SEO completa', 'Páginas transaccionales optimizadas', 'Indexación y schema JSON-LD estructurado', 'Reporte mensual de ranking y tráfico'],
        idealFor: 'Empresas con servicios o productos de ticket medio/alto que buscan construir un activo orgánico de largo plazo.'
      }
    },
    {
      id: 'ia',
      number: '03',
      icon: Cpu,
      title: 'Inteligencia Artificial',
      headline: 'Soluciones de IA para decisiones más inteligentes.',
      summary: 'Agentes autónomos, asistentes comerciales 24/7, RAG y bases de conocimiento que ahorran tiempo y potencian decisiones.',
      color: 'text-tg-purple',
      accentBg: 'bg-purple-50',
      seoUrl: '/inteligencia-artificial-empresas',
      message: 'Encontramos dónde la IA puede ahorrar tiempo, mejorar decisiones o generar nuevas oportunidades.',
      includes: [
        'Agentes de IA Autónomos para Tareas Específicas',
        'Asistentes Comerciales y de Atención 24/7',
        'RAG (Bases de Conocimiento Privadas de la Empresa)',
        'IA para Clasificación y Scoring de Prospectos',
        'Análisis Predictivo de Datos Comerciales',
        'Consultoría e Implementación de Modelos de IA'
      ],
      details: {
        problem: 'Las empresas quieren adoptar IA pero se quedan en el uso informal de chatbots genéricos sin integrarlos a sus bases de datos ni a sus procesos clave.',
        howItWorks: [
          'Identificamos los cuellos de botella con mayor potencial de automatización inteligente.',
          'Entrenamos agentes con manuales, catálogo y reglas de negocio propias.',
          'Conectamos los agentes a canales directos (WhatsApp, CRM, Helpdesk, Slack/Teams).',
          'Supervisión humana: la IA atiende y filtra, el equipo decide y cierra.'
        ],
        deliverables: ['Agente de IA configurado y calibrado', 'Base de conocimiento vectorial segura', 'Integración en el flujo operativo', 'Capacitación al equipo'],
        idealFor: 'Empresas con alto volumen de consultas o procesos repetitivos que buscan escalar sin multiplicar personal.'
      }
    },
    {
      id: 'automatizacion',
      number: '04',
      icon: Workflow,
      title: 'Automatización',
      headline: 'Procesos que trabajan por ti, 24/7 y sin errores.',
      summary: 'Conexión de APIs, webhooks, correo, bases de datos y flujos entre plataformas para eliminar tareas manuales repetitivas.',
      color: 'text-amber-500',
      accentBg: 'bg-amber-50',
      seoUrl: '/automatizacion-de-procesos',
      message: 'Hacemos que procesos que hoy dependen de personas funcionen automáticamente.',
      includes: [
        'Integración entre CRM, WhatsApp y Correos',
        'Sincronización con Google Workspace / Microsoft 365',
        'Disparo Automático de Notificaciones y Tareas',
        'Generación de Documentos y Cotizaciones',
        'Webhooks y Conexión de Bases de Datos',
        'Reportes y Alertas Automáticas'
      ],
      details: {
        problem: 'La pérdida de tiempo en planillas, copia y pega manual de datos entre plataformas y olvidos en el seguimiento de prospectos.',
        howItWorks: [
          'Mapeo exhaustivo del flujo de información actual.',
          'Diseño de triggers (disparadores) y actions (acciones automáticas).',
          'Integración segura mediante APIs oficiales y herramientas empresariales.',
          'Monitoreo continuo de estado y alertas de fallos.'
        ],
        deliverables: ['Flujos automatizados operativos', 'Conectores entre aplicaciones clave', 'Documentación del flujo', 'Soporte y mantenimiento'],
        idealFor: 'Negocios en crecimiento que necesitan orden operativo y rapidez de respuesta.'
      }
    },
    {
      id: 'crm',
      number: '05',
      icon: MessageSquare,
      title: 'CRM, WhatsApp & Ventas',
      headline: 'Desde que entra una consulta hasta que se convierte en cliente.',
      summary: 'Implementación de Kommo/CRM, WhatsApp Business Cloud API, calificación automática y embudos de ventas claros.',
      color: 'text-tg-blue',
      accentBg: 'bg-blue-50',
      seoUrl: '/crm-whatsapp-ventas',
      message: 'Desde que entra una consulta hasta que se convierte en cliente.',
      includes: [
        'Implementación y Personalización de CRM (Kommo)',
        'WhatsApp Cloud API Multiusuario Oficial',
        'Clasificación y Lead Scoring Automático',
        'Asignación Inteligente al Vendedor Indicado',
        'Seguimientos Programados y Recordatorios',
        'Trazabilidad Comercial de Extremo a Extremo'
      ],
      details: {
        problem: 'Se reciben 100, 300 o 500 consultas por WhatsApp pero quedan en el celular de una sola persona, no hay registro en CRM y los seguimientos se pierden.',
        howItWorks: [
          'Configuramos el WhatsApp Cloud API centralizado multiagente.',
          'Estructuramos las etapas del embudo comercial en el CRM.',
          'La IA y las automatizaciones clasifican la urgencia y tipo de cliente.',
          'El vendedor recibe la oportunidad lista y con contexto completo para cerrar.'
        ],
        deliverables: ['CRM configurado a medida', 'Canal oficial WhatsApp API activo', 'Plantillas y secuencias de seguimiento', 'Tableros de control de ventas'],
        idealFor: 'Empresas con equipos comerciales que atienden prospectos por WhatsApp y buscan cerrar más ventas.'
      }
    },
    {
      id: 'contenido',
      number: '06',
      icon: Layers,
      title: 'Contenido con IA (Content OS)',
      headline: 'Un sistema operativo para producir contenido de autoridad.',
      summary: 'Flujo estructurado: Idea → Estructura → Copy → Identidad Visual → Aprobación → Publicación para LinkedIn, Instagram y Blogs.',
      color: 'text-emerald-500',
      accentBg: 'bg-emerald-50',
      seoUrl: '/contenido-inteligencia-artificial',
      message: 'Construimos un sistema continuo de creación de contenido para posicionar a tu empresa como líder de su sector.',
      includes: [
        'Content OS: Workflow de Producción Asistida por IA',
        'Contenido Estratégico para LinkedIn & Redes B2B',
        'Carruseles Educativos e Infografías de Marca',
        'Artículos de Autoridad para Blog y SEO',
        'Video IA, Avatares y Guiones Estructurados',
        'Automatización de Calendarios Editoriales'
      ],
      details: {
        problem: 'Crear contenido de calidad lleva demasiado tiempo o las agencias creativas tradicionales generan posts bonitos pero vacíos de sustancia técnica.',
        howItWorks: [
          'Extracción de conocimiento y casos de éxito de tu empresa.',
          'Estructuración del copy respetando el tono de voz de la marca.',
          'Aplicación de la identidad visual oficial con plantillas parametrizadas.',
          'Aprobación ágil y distribución multicanal programada.'
        ],
        deliverables: ['Parrilla de contenidos mensuales', 'Piezas gráficas y carruseles', 'Artículos de blog optimizados', 'Sistema Content OS adaptado'],
        idealFor: 'Directores, consultores y empresas B2B que necesitan generar autoridad constante en su industria.'
      }
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-montserrat font-bold text-gray-400 uppercase tracking-widest block mb-2">
              NUESTROS SERVICIOS
            </span>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-tg-dark tracking-tight leading-tight">
              Soluciones para un crecimiento real
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Integramos marketing, IA y automatización en soluciones diseñadas para tu negocio.
            </p>
          </div>

          <Link
            to="/agencia-marketing-digital"
            className="inline-flex items-center gap-2 text-sm font-montserrat font-bold text-tg-blue hover:text-blue-800 transition-colors uppercase tracking-wider"
          >
            <span>Ver páginas dedicadas SEO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200/80 hover:border-tg-blue/40 shadow-sm hover:shadow-tg-hover transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${s.accentBg} ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-montserrat font-bold text-lg text-gray-300 group-hover:text-tg-blue/40 transition-colors">
                      {s.number}
                    </span>
                  </div>

                  <h3 className="font-montserrat font-bold text-xl text-tg-dark mb-2 group-hover:text-tg-blue transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {s.headline}
                  </p>

                  {/* Feature preview checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
                    {s.includes.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-tg-blue flex-shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <button
                    onClick={() => setSelectedService(s)}
                    className="text-xs font-semibold text-gray-500 hover:text-tg-dark transition-colors"
                  >
                    Detalle rápido
                  </button>
                  <Link
                    to={s.seoUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-tg-blue hover:text-blue-800 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    <span>Ver Landing SEO</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal / Detailed Drawer for Service */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header of Modal */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-14 h-14 rounded-2xl ${selectedService.accentBg} ${selectedService.color} flex items-center justify-center flex-shrink-0`}>
                <selectedService.icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-montserrat font-bold text-tg-blue uppercase tracking-widest">
                  Solución {selectedService.number}
                </span>
                <h3 className="font-montserrat font-bold text-2xl text-tg-dark">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-tg-blue uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Propuesta de Valor</span>
              </div>
              <p className="text-sm font-medium text-tg-dark">
                {selectedService.message}
              </p>
            </div>

            {/* What problem it solves */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-montserrat font-bold text-sm text-tg-dark mb-1">
                  El Desafío que Resolvemos
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {selectedService.details.problem}
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-sm text-tg-dark mb-2">
                  ¿Qué incluye esta solución?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <Check className="w-4 h-4 text-tg-blue flex-shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-montserrat font-bold text-sm text-tg-dark mb-1">
                  Ideal para:
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  {selectedService.details.idealFor}
                </p>
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <Link
                to={selectedService.seoUrl}
                onClick={() => setSelectedService(null)}
                className="text-xs font-montserrat font-bold text-tg-blue hover:text-blue-800 uppercase tracking-wider"
              >
                Abrir Landing SEO completa →
              </Link>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 rounded-xl text-gray-600 hover:bg-gray-100 font-montserrat font-semibold text-xs transition-colors"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onOpenConsultation();
                  }}
                  className="px-5 py-3 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
                >
                  <span>Solicitar diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
