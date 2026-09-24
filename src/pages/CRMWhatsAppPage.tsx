import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { MessageSquare, CheckCircle2, UserCheck, Smartphone, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CRMWhatsAppPage: React.FC = () => {
  const faqs = [
    {
      q: '¿Por qué recomendamos Kommo CRM para empresas con ventas por WhatsApp?',
      a: 'Kommo está diseñado nativamente alrededor de la mensajería y WhatsApp. Permite centralizar múltiples números, asignar chats automáticamente a vendedores, automatizar seguimientos y visualizar el embudo de ventas en tiempo real sin perder una sola oportunidad.'
    },
    {
      q: '¿Podemos usar nuestra línea de WhatsApp actual?',
      a: 'Sí. Migramos o conectamos tu número a la API oficial de WhatsApp Cloud de Meta, lo que permite que todo tu equipo comercial atienda desde una misma línea sin bloquear la cuenta.'
    },
    {
      q: '¿Cómo ayuda el lead scoring automático en WhatsApp?',
      a: 'Apenas entra un mensaje, la IA analiza la intención y asigna una puntuación al lead. Los prospectos con alta intención de compra son derivados inmediatamente al mejor vendedor, reduciendo el tiempo de cierre a minutos.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <SEOHead
        title="CRM, WhatsApp Business API & Procesos Comerciales"
        description="Implementación de CRM Kommo y WhatsApp Cloud API oficial para empresas. Automatización de embudos comerciales, calificación de prospectos y trazabilidad total."
        keywords="CRM WhatsApp, Kommo CRM Argentina, WhatsApp Cloud API oficial, Automatizacion ventas WhatsApp, Lead scoring WhatsApp"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">CRM & WhatsApp Comercial</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-montserrat font-bold tracking-wider uppercase">
            <MessageSquare className="w-4 h-4" />
            <span>SOLUCIÓN 05 · CRM & WHATSAPP</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-tg-dark tracking-tight leading-tight">
            CRM, WhatsApp API y Gestión Comercial de Extremo a Extremo
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Desde que entra una consulta por WhatsApp hasta que se convierte en cliente fidelizado. Conectamos WhatsApp Business Cloud API oficial con Kommo CRM para que ningún lead quede sin seguimiento.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
            >
              Implementar CRM y WhatsApp en mi Empresa
            </a>
            <Link
              to="/agentes-inteligencia-artificial"
              className="px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:border-tg-blue transition-all"
            >
              Ver Agentes de IA para WhatsApp →
            </Link>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">WhatsApp Cloud API Oficial</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Múltiples agentes atendiendo desde un único número verificado, con plantillas aprobadas por Meta y cero riesgo de bloqueos.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Embudos & Pipelines Claros</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Visualizá el estado exacto de cada cotización, probabilidad de cierre y monto en juego en cada etapa del pipeline de ventas.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-tg-cyan flex items-center justify-center">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Asignación & Scoring Inteligente</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Distribución automática de leads según guardia, tipo de producto o zona geográfica, garantizando respuesta en menos de 2 minutos.
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm text-left mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-6">
            Qué incluye la solución de CRM & WhatsApp
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Configuración e integración de WhatsApp Cloud API oficial de Meta',
              'Personalización de embudos, campos y permisos en Kommo CRM',
              'Automatización de secuencias de seguimiento y re-contacto de prospectos',
              'Clasificación y lead scoring de mensajes entrantes mediante IA',
              'Integración con formularios web, Google Ads y campañas de Meta',
              'Configuración de respuestas rápidas y catálogos interactivos',
              'Capacitación práctica a todo tu equipo comercial y directivo',
              'Dashboards de conversión, tiempo de respuesta y ventas cerradas'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20 text-left">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-8 text-center">
            Preguntas Frecuentes sobre CRM y WhatsApp
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
        <SmartLeadForm preselectedService="CRM / WhatsApp Comercial" />

      </div>
    </div>
  );
};
