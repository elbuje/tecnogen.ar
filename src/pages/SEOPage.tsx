import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { Search, CheckCircle2, Globe2, Bot, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SEOPage: React.FC = () => {
  const faqs = [
    {
      q: '¿Qué es GEO (Generative Engine Optimization) y por qué importa hoy?',
      a: 'GEO es la disciplina de optimizar el sitio web y la presencia de marca para ser citados como fuente de referencia directa por motores de IA como ChatGPT, Google AI Overviews, Perplexity y Copilot cuando los usuarios buscan recomendaciones de proveedores.'
    },
    {
      q: '¿Cuál es la diferencia entre SEO tradicional y SEO transaccional?',
      a: 'El SEO tradicional a menudo persigue palabras clave informativas de mucho volumen pero baja conversión. El SEO transaccional se enfoca en términos donde el usuario ya tiene intención de contratación o compra, generando oportunidades comerciales inmediatas.'
    },
    {
      q: '¿Cuánto demora en madurar una estrategia de posicionamiento orgánico?',
      a: 'Las optimizaciones técnicas y de indexación muestran mejoras en 30 a 60 días, mientras que el posicionamiento de autoridad transaccional se consolida fuertemente entre los 3 y 6 meses.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <SEOHead
        title="Agencia SEO & Posicionamiento Transaccional y Motores de IA (GEO)"
        description="Agencia SEO especializada en posicionamiento en Google y motores de Inteligencia Artificial (ChatGPT, Perplexity, Gemini). Visibilidad orgánica de alta intención comercial."
        keywords="Agencia SEO Argentina, Posicionamiento web empresas, SEO transaccional, GEO Generative Engine Optimization, SEO local Google Business Profile"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">SEO & Posicionamiento GEO</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/70 text-tg-cyan text-xs font-montserrat font-bold tracking-wider uppercase">
            <Search className="w-4 h-4" />
            <span>SOLUCIÓN 02 · SEO & GEO</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-tg-dark tracking-tight leading-tight">
            Agencia SEO y Posicionamiento para Google y Motores de IA (GEO)
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Construimos visibilidad orgánica que sigue generando oportunidades comerciales incluso cuando dejás de pagar por cada clic. Optimizamos para los primeros resultados de Google y para ser citados en respuestas de ChatGPT, Perplexity y Gemini.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
            >
              Solicitar Auditoría SEO
            </a>
            <Link
              to="/contenido-inteligencia-artificial"
              className="px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:border-tg-blue transition-all"
            >
              Ver Content OS →
            </Link>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-tg-cyan flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">SEO Técnico & Schema.org</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Estructura semántica, velocidad de carga 100/100, Core Web Vitals y microdatos JSON-LD para que los robots indexen cada servicio a la perfección.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Optimización GEO (Motores IA)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Estructuración de datos, entidades de marca y respuestas autoritativas para que la IA cite a tu empresa cuando los usuarios soliciten recomendaciones.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-tg-purple flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Arquitectura Transaccional</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Páginas de servicio individuales orientadas a intención de compra, evitando agrupar todo en un `/servicios` genérico sin fuerza de ranking.
            </p>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm text-left mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-6">
            Alcance del Servicio de Posicionamiento SEO & GEO
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Auditoría técnica integral de indexabilidad y Core Web Vitals',
              'Investigación de palabras clave con intención comercial y transaccional',
              'Optimización de datos estructurados Schema.org (Organization, Service, FAQ)',
              'Estrategia de posicionamiento en motores generativos de IA (GEO / AIO)',
              'Creación de páginas transaccionales específicas por servicio o producto',
              'Optimización de Google Business Profile para búsquedas locales y mapas',
              'Monitoreo semanal de posiciones, clics orgánicos y Search Console',
              'Estrategia de autoridad y enlaces de alta relevancia temática'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-tg-cyan flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20 text-left">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-8 text-center">
            Preguntas Frecuentes sobre Posicionamiento SEO & GEO
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
        <SmartLeadForm preselectedService="SEO & Posicionamiento GEO" />

      </div>
    </div>
  );
};
