import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { Cpu, Bot, CheckCircle2, Sparkles, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InteligenciaArtificialPage: React.FC = () => {
  const faqs = [
    {
      q: '¿Cómo se garantiza la seguridad y privacidad de los datos de mi empresa al usar IA?',
      a: 'Implementamos arquitecturas RAG privadas donde los documentos y datos sensibles de tu empresa nunca se utilizan para re-entrenar modelos públicos. Todo el procesamiento opera bajo cifrado y entornos aislados.'
    },
    {
      q: '¿Qué tipo de procesos pueden optimizarse con Inteligencia Artificial?',
      a: 'Atención comercial 24/7, clasificación de consultas por urgencia, análisis de grandes volúmenes de documentos, generación estructurada de contenido y automatización de toma de decisiones operativas.'
    },
    {
      q: '¿Reemplaza al personal humano de mi equipo?',
      a: 'No. En TecnoGen creemos en "Personas + Tecnología". La IA asume las tareas repetitivas de filtrado y procesamiento veloz, liberando a tu equipo para concentrarse en la venta, la empatía y las decisiones estratégicas.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <SEOHead
        title="Inteligencia Artificial para Empresas & Consultoría en IA"
        description="Soluciones de Inteligencia Artificial aplicada a empresas y PyMEs. Modelos RAG, bases de conocimiento privadas, análisis predictivo y automatización cognitiva."
        keywords="Inteligencia artificial empresas, Consultoria IA Argentina, Modelos RAG empresas, Automatizacion con IA, Chatbots inteligentes B2B"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">Inteligencia Artificial</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-tg-purple text-xs font-montserrat font-bold tracking-wider uppercase">
            <Cpu className="w-4 h-4" />
            <span>SOLUCIÓN 03 · INTELIGENCIA ARTIFICIAL</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-tg-dark tracking-tight leading-tight">
            Inteligencia Artificial Aplicada a Negocios y Procesos Reales
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Encontramos dónde la IA puede ahorrar tiempo, mejorar decisiones y generar nuevas oportunidades comerciales. No vendemos IA porque esté de moda: la implementamos donde reduce costos y acelera ventas.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
            >
              Consultar por Implementación de IA
            </a>
            <Link
              to="/agentes-inteligencia-artificial"
              className="px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:border-tg-blue transition-all"
            >
              Ver Agentes Autónomos de IA →
            </Link>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-tg-purple flex items-center justify-center">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Bases de Conocimiento (RAG)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Modelos de lenguaje conectados de forma segura a tus manuales, catálogos y políticas internas para responder consultas con 100% de precisión y cero alucinaciones.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Asistentes Comerciales 24/7</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Asistentes entrenados para atender consultas en canales digitales, calificar el perfil del prospecto y agendar reuniones con tu equipo de ventas.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-tg-cyan flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Automatización Cognitiva</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Extracción automática de datos estructurados desde emails, PDFs, cotizaciones y chats para volcarlos de inmediato a tu base de datos o CRM.
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm text-left mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-6">
            Qué desarrollamos e implementamos en IA
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Diagnóstico de viabilidad y ROI de Inteligencia Artificial para tu empresa',
              'Diseño e implementación de asistentes de atención y ventas 24/7',
              'Arquitectura RAG (Retrieval-Augmented Generation) con bases de conocimiento privadas',
              'Clasificación y enrutamiento inteligente de consultas por WhatsApp y correo',
              'Integración de modelos de lenguaje (OpenAI, Claude, Gemini, Llama) en tus sistemas',
              'Entrenamiento de modelos con el tono de voz y reglas de negocio de tu marca',
              'Monitoreo de rendimiento, calibración de respuestas y métricas de satisfacción',
              'Capacitación y acompañamiento a tu equipo directivo y operativo'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-tg-purple flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20 text-left">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-8 text-center">
            Preguntas Frecuentes sobre Inteligencia Artificial para Empresas
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
