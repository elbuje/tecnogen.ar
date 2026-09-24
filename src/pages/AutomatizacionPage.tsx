import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { Workflow, Zap, CheckCircle2, RefreshCw, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AutomatizacionPage: React.FC = () => {
  const faqs = [
    {
      q: '¿Qué herramientas pueden integrarse con las automatizaciones de TecnoGen?',
      a: 'Conectamos CRM (Kommo, HubSpot, Salesforce), WhatsApp Business API, Google Workspace (Gmail, Sheets, Drive, Calendar), Microsoft 365, pasarelas de pago, bases de datos SQL y software de facturación.'
    },
    {
      q: '¿Es necesario cambiar los sistemas actuales de mi empresa?',
      a: 'No. Nuestra filosofía consiste en construir puentes y flujos automáticos sobre las herramientas que tu equipo ya utiliza a diario, evitando fricciones o curvas de aprendizaje complejas.'
    },
    {
      q: '¿Cuánto tiempo de trabajo manual ahorra una automatización bien diseñada?',
      a: 'En promedio, nuestros clientes ahorran entre 15 y 25 horas semanales por persona en tareas de carga de datos, traspaso de planillas y emisión repetitiva de notificaciones.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <SEOHead
        title="Automatización de Procesos & Flujos de Trabajo para Empresas"
        description="Automatización de procesos empresariales y flujos comerciales. Integración de CRM, WhatsApp, correos, bases de datos y sistemas sin intervención manual."
        keywords="Automatizacion de procesos empresas, Integracion de APIs WhatsApp CRM, Automatizacion flujos comerciales, Reduccion tareas manuales PyME"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">Automatización de Procesos</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 text-amber-700 text-xs font-montserrat font-bold tracking-wider uppercase">
            <Workflow className="w-4 h-4" />
            <span>SOLUCIÓN 04 · AUTOMATIZACIÓN</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-tg-dark tracking-tight leading-tight">
            Automatización de Procesos y Flujos Empresariales
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Hacemos que procesos que hoy dependen de personas y tareas manuales funcionen automáticamente, 24/7 y sin margen de error. Conectamos tus sistemas para que la información fluya sin fricción.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
            >
              Automatizar Procesos de mi Empresa
            </a>
            <Link
              to="/crm-whatsapp-ventas"
              className="px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:border-tg-blue transition-all"
            >
              Ver Automatización de WhatsApp →
            </Link>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Sincronización Multi-Plataforma</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cada dato ingresado en un formulario, chat o email se replica automáticamente en el CRM, bases de datos y herramientas internas.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Notificaciones & Alertas</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Alertas automáticas por WhatsApp o Slack cuando un lead clave realiza una acción, vence un plazo o se requiere aprobación directiva.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Generación de Documentos</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Creación automática de cotizaciones, reportes, contratos y confirmaciones en PDF personalizados listos para enviar al cliente en segundos.
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm text-left mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-6">
            Qué procesos automatizamos habitualmente
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Seguimiento y re-activación de cotizaciones por WhatsApp y Email',
              'Sincronización bidireccional entre CRM, ERP y bases de datos',
              'Carga y validación automática de datos de prospectos y clientes',
              'Disparo de recordatorios de citas y vencimientos para reducir ausentismo',
              'Flujos de onboarding automático de nuevos clientes',
              'Generación y envío automático de reportes comerciales periódicos',
              'Conexión de pasarelas de pago con emisión de comprobantes y acceso a servicios',
              'Monitoreo y alertas automáticas de fallos en servicios críticos'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20 text-left">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-8 text-center">
            Preguntas Frecuentes sobre Automatización de Procesos
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
        <SmartLeadForm preselectedService="Automatización de Procesos" />

      </div>
    </div>
  );
};
