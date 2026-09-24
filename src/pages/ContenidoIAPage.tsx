import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { Layers, CheckCircle2, Share2, Video, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContenidoIAPage: React.FC = () => {
  const faqs = [
    {
      q: '¿Qué es Content OS y en qué se diferencia de contratar una agencia de redes sociales?',
      a: 'Content OS es un sistema operativo de contenidos. No hacemos posteos genéricos para "llenar el feed"; extraemos el conocimiento y casos reales de tu empresa para convertirlos en piezas de alta autoridad técnica en LinkedIn, carruseles, videos y artículos SEO.'
    },
    {
      q: '¿Cómo es el flujo de producción y aprobación?',
      a: 'Seguimos un flujo estructurado de 6 etapas: Idea ➔ Estructura ➔ Copywriting ➔ Identidad Visual ➔ Aprobación Ágil ➔ Programación y Publicación multicanal.'
    },
    {
      q: '¿Generan contenido con video y avatares de IA?',
      a: 'Sí. Diseñamos guiones estratégicos, edición asistida por IA y videos con avatares o clones de voz corporativos para amplificar la presencia de tus líderes.'
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-slate-50">
      <SEOHead
        title="Content OS & Generación de Contenido con Inteligencia Artificial"
        description="Sistema operativo de producción de contenidos con IA. Creación de carruseles, artículos de autoridad para LinkedIn, guiones y video IA para posicionar tu marca."
        keywords="Content OS empresas, Generacion de contenido con IA, Contenido LinkedIn B2B, Carruseles educativos empresas, Agencia creacion contenidos IA"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">Contenido con IA (Content OS)</span>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl text-left space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-montserrat font-bold tracking-wider uppercase">
            <Layers className="w-4 h-4" />
            <span>SOLUCIÓN 06 · CONTENT OS</span>
          </div>

          <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-tg-dark tracking-tight leading-tight">
            Content OS: Sistema Operativo de Contenidos con Inteligencia Artificial
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Un sistema continuo y escalable para transformar el conocimiento de tu empresa en contenido de alta autoridad para LinkedIn, Instagram, Blog y Video sin sobrecargar tu tiempo.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all"
            >
              Implementar Content OS en mi Empresa
            </a>
            <Link
              to="/agencia-seo-posicionamiento"
              className="px-6 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:border-tg-blue transition-all"
            >
              Ver Sinergia con SEO Transaccional →
            </Link>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Autoridad en LinkedIn & B2B</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Publicaciones y carruseles educativos diseñados para posicionar a los directivos de tu empresa como referentes indiscutidos de la industria.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Artículos de Autoridad & SEO</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Artículos profundos que resuelven dudas complejas de tomadores de decisión, listos para rankear en Google y ser citados por IA.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-left space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-tg-purple flex items-center justify-center">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="font-montserrat font-bold text-xl text-tg-dark">Video IA & Formatos Ágiles</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Guiones estratégicos, edición acelerada por IA y formatos dinámicos para Instagram Reels, TikTok y YouTube Shorts.
            </p>
          </div>
        </div>

        {/* Detailed Scope */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm text-left mb-20">
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-tg-dark mb-6">
            El Flujo de Trabajo Content OS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Extracción de ideas y aprendizajes clave de tu equipo',
              'Estructuración del copy con ganchos y narrativa persuasiva',
              'Aplicación de tu manual de identidad visual en plantillas premium',
              'Revisión y aprobación en un tablero unificado sin cadenas eternas de mails',
              'Programación y publicación automática en todos tus canales',
              'Redacción de artículos de blog optimizados para SEO y GEO',
              'Diseño de carruseles de alta retención e infografías',
              'Analítica de engagement, alcance orgánico y captación de leads'
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
            Preguntas Frecuentes sobre Content OS
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
        <SmartLeadForm preselectedService="Contenido con IA (Content OS)" />

      </div>
    </div>
  );
};
