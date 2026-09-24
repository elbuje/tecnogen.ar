import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { Bot, Zap, CheckCircle2, MessageSquareCode, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AgentesIAPage: React.FC = () => {
  const faqs = [
    {
      q: '¿Qué es exactamente un Agente de IA y en qué se diferencia de un chatbot tradicional?',
      a: 'Un chatbot tradicional sigue árboles rígidos de preguntas y respuestas predefinidas ("presione 1 para ventas"). Un Agente de IA comprende el lenguaje natural, tiene memoria contextual, razona sobre las necesidades del usuario y puede ejecutar acciones reales en tus sistemas (crear un lead en CRM, consultar stock, agendar reuniones).'
    },
    {
      q: '¿El agente puede operar en WhatsApp oficial?',
      a: 'Sí. Los agentes de TecnoGen se integran directamente sobre la API oficial de WhatsApp Cloud, permitiendo operar con tu número corporativo verificado y trazabilidad total en tu CRM.'
    },
    {
      q: '¿Qué sucede si un cliente realiza una consulta muy compleja o fuera de catálogo?',
      a: 'El agente detecta la excepción y transfiere la conversación de inmediato al asesor humano correspondiente en tu equipo, entregando un resumen claro del caso.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <SEOHead
        title="Agentes de Inteligencia Artificial & Asistentes Autónomos para Empresas"
        description="Desarrollo e implementación de Agentes de IA autónomos y asistentes comerciales para WhatsApp, CRM y atención 24/7. Calificación automática de leads y ejecución de tareas."
        keywords="Agentes de IA empresas, Asistentes de IA WhatsApp, Chatbots con IA avanzada, Agentes autonomos comerciales, Inteligencia artificial atencion al cliente"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/inteligencia-artificial-empresas" className="hover:text-tg-blue transition-colors">Inteligencia Artificial</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">Agentes de IA</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-tg-blue text-xs font-montserrat font-bold tracking-wider uppercase">
            <Bot className="w-4 h-4" />
            <span>AGENTES AUTÓNOMOS DE IA</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-tg-dark tracking-tight leading-tight">
            Agentes de Inteligencia Artificial para Ventas, Atención y Procesos
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            La IA responde, tu equipo decide y cierra. Diseñamos agentes de IA capaces de calificar consultas por WhatsApp, resolver dudas con precisión milimétrica sobre tu catálogo y agendar reuniones con prospectos calificados las 24 horas del día.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
            >
              Diseñar un Agente de IA para mi Empresa
            </a>
            <Link
              to="/crm-whatsapp-ventas"
              className="px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:border-tg-blue transition-all"
            >
              Ver Integración WhatsApp + CRM →
            </Link>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center">
              <MessageSquareCode className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Atención Comercial 24/7</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Tiempos de respuesta menores a 10 segundos en WhatsApp, web y redes. Ningún prospecto espera ni se enfría por falta de atención inmediata.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Calificación & Lead Scoring</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              El agente realiza las preguntas clave para validar presupuesto, urgencia y necesidad real antes de transferir la llamada al ejecutivo de ventas.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-tg-purple flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Cero Alucinaciones</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Calibración estricta basada exclusivamente en la documentación oficial de tu empresa, garantizando respuestas verídicas y profesionales.
            </p>
          </div>
        </div>

        {/* Detailed Scope */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm text-left mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-6">
            Capacidades de los Agentes de IA TecnoGen
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Comprensión avanzada de audios y textos en lenguaje natural',
              'Conexión directa con la API oficial de WhatsApp Cloud',
              'Sincronización automática de contactos, notas y etapas en el CRM',
              'Agendamiento automático de citas en Google Calendar / Outlook',
              'Envío de presupuestos y PDFs informativos bajo demanda',
              'Derivación fluida hacia asesores humanos con resumen contextual',
              'Panel de supervisión y analítica de conversaciones en tiempo real',
              'Seguridad, aislamiento y confidencialidad empresarial de los datos'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-tg-blue flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20 text-left">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-8 text-center">
            Preguntas Frecuentes sobre Agentes de Inteligencia Artificial
          </h2>
          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h3 className="font-montserrat font-bold text-base text-tg-dark mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <SmartLeadForm preselectedService="Inteligencia Artificial & Agentes" />

      </div>
    </div>
  );
};
