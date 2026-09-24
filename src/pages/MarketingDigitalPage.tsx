import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { Megaphone, Target, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MarketingDigitalPage: React.FC = () => {
  const faqs = [
    {
      q: '¿Por qué las campañas tradicionales de marketing digital suelen fallar?',
      a: 'Muchas agencias optimizan para métricas vanidosas (clics o impresiones) en lugar de optimizar para leads calificados con intención de compra real. En TecnoGen construimos funnels completos desde el anuncio hasta el CRM.'
    },
    {
      q: '¿Cuánto tiempo toma ver resultados en Google Ads y Meta Ads?',
      a: 'Las primeras consultas comerciales comienzan a ingresar en los primeros 7 a 14 días tras el lanzamiento del funnel y las landing pages específicas.'
    },
    {
      q: '¿Hacen campañas B2B para captar tomadores de decisión?',
      a: 'Sí. Contamos con amplia experiencia en LinkedIn Ads y Google Search orientado a directores generales, gerentes de compras, operaciones y recursos humanos.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <SEOHead
        title="Agencia de Marketing Digital & Funnels de Conversión"
        description="Agencia de marketing digital para empresas y PyMEs. Campañas en Google Ads, Meta Ads, LinkedIn y landing pages de alta conversión orientadas a ventas."
        keywords="Agencia de marketing digital, Google Ads empresas, Meta Ads B2B, Funnels de venta, Landing pages conversion, Agencia marketing Buenos Aires"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">Marketing Digital</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-tg-blue text-xs font-montserrat font-bold tracking-wider uppercase">
            <Megaphone className="w-4 h-4" />
            <span>SOLUCIÓN 01 · MARKETING DIGITAL</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-tg-dark tracking-tight leading-tight">
            Agencia de Marketing Digital & Sistemas de Captación de Leads
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Conseguimos que las personas correctas encuentren, conozcan y contacten a tu empresa. Diseñamos funnels de alta conversión en Google Ads, Meta Ads y LinkedIn Ads conectados directamente a tu CRM.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
            >
              Solicitar Plan de Captación
            </a>
            <Link
              to="/crm-whatsapp-ventas"
              className="px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:border-tg-blue transition-all"
            >
              Ver Integración con CRM →
            </Link>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Google Ads Transaccional</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Capturamos la demanda existente de usuarios que están buscando activamente tus productos o servicios con alta intención de compra.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-tg-cyan flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Meta & LinkedIn Ads B2B</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Segmentación quirúrgica por cargo, tamaño de empresa, industria e intereses comerciales para generar demanda calificada.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Landing Pages & CRO</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Páginas de aterrizaje diseñadas con rigor persuasivo, alta velocidad de carga y formularios sin fricción para maximizar la tasa de conversión.
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm text-left mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-6">
            Qué incluye nuestro servicio de Marketing Digital
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Auditoría y definición de propuesta de valor comercial',
              'Creación y gestión integral de campañas en Google Ads',
              'Campañas en Meta Ads (Instagram y Facebook)',
              'Estrategia de prospección en LinkedIn Ads para B2B',
              'Diseño y desarrollo de Landing Pages de alta conversión',
              'Integración con WhatsApp y CRM para seguimiento inmediato',
              'Remarketing dinámico para recuperar prospectos indecisos',
              'Dashboards en tiempo real y optimización continua de ROI'
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
            Preguntas Frecuentes sobre Marketing Digital
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
        <SmartLeadForm preselectedService="Marketing Digital (Ads & Funnels)" />

      </div>
    </div>
  );
};
