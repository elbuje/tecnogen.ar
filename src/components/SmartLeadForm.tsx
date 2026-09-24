import React, { useState } from 'react';
import { Send, Sparkles, Bot, ShieldCheck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

interface SmartLeadFormProps {
  preselectedService?: string;
}

export const SmartLeadForm: React.FC<SmartLeadFormProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    website: '',
    serviceInterest: preselectedService || 'CRM / WhatsApp',
    problem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Marketing Digital (Ads & Funnels)',
    'SEO & Posicionamiento GEO',
    'Inteligencia Artificial & Agentes',
    'Automatización de Procesos',
    'CRM / WhatsApp Comercial',
    'Contenido con IA (Content OS)',
    'Sistema Completo de Crecimiento',
  ];

  // Dynamic AI Classification Simulation
  const getAIScoring = () => {
    if (!formData.name && !formData.company && !formData.problem) {
      return { status: 'Esperando datos...', score: '--', routing: 'Comercial General' };
    }
    const isHighPriority = formData.problem.length > 20 || formData.company.length > 3;
    return {
      status: 'Consulta Calificada',
      score: isHighPriority ? '95/100 (Prioridad Alta)' : '80/100 (Estándar)',
      routing: formData.serviceInterest.includes('WhatsApp') || formData.serviceInterest.includes('CRM')
        ? 'Especialista en Automatización & Ventas'
        : formData.serviceInterest.includes('IA')
        ? 'Consultor de Inteligencia Artificial'
        : 'Estratega de Crecimiento & Ads',
    };
  };

  const aiScore = getAIScoring();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hola TecnoGen! Mi nombre es ${formData.name || 'un visitante'} de la empresa ${formData.company || 'mi empresa'}. Me interesa conversar sobre ${formData.serviceInterest || 'sus soluciones de crecimiento'}. Mi problema principal es: ${formData.problem || 'Mejorar captación y procesos'}.`
    );
    return `https://wa.me/5491100000000?text=${text}`;
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-tg-blue text-xs font-montserrat font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-tg-cyan" />
            <span>Contacto Directo & Calificación</span>
          </div>
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-tg-dark tracking-tight">
            Hablemos de tu negocio
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Completá este formulario inteligente para clasificar tu necesidad y agendar una sesión de consultoría técnica sin cargo.
          </p>
        </div>

        {/* 2-Column Form & AI Live Routing Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm text-left">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-tg-dark">
                  ¡Consulta recibida con éxito!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Nuestro sistema ha procesado tus datos y asignado tu caso a un especialista de TecnoGen. Te contactaremos en menos de 2 horas.
                </p>

                <div className="pt-4">
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat font-bold text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Continuar por WhatsApp Inmediato</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Martín García"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tg-blue/20 focus:border-tg-blue transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Empresa / Negocio *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. InnovaTech S.A."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tg-blue/20 focus:border-tg-blue transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      WhatsApp / Teléfono *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+54 9 11 ..."
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tg-blue/20 focus:border-tg-blue transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="martin@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tg-blue/20 focus:border-tg-blue transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-montserrat font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    ¿Qué querés mejorar principalmente?
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-tg-blue/20 focus:border-tg-blue transition-all"
                  >
                    {services.map((s, idx) => (
                      <option key={idx} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-montserrat font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    ¿Qué problema querés resolver hoy?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contanos brevemente qué proceso te genera fricción o qué meta comercial buscás alcanzar..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tg-blue/20 focus:border-tg-blue transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Procesando consulta...</span>
                    ) : (
                      <>
                        <span>Enviar y Agendar Consultoría</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-tg-green" />
                  <span>Tus datos están protegidos y no enviamos spam.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right: Live AI Qualification Showcase (TecnoGen sobre TecnoGen) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-tg-dark rounded-3xl p-6 sm:p-8 text-white text-left space-y-6 shadow-2xl border border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-tg-cyan text-[11px] font-montserrat font-bold uppercase tracking-wider mb-3">
                <Bot className="w-3.5 h-3.5" />
                <span>TecnoGen funcionando sobre TecnoGen</span>
              </div>
              <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white leading-snug">
                Así clasificamos y enrutamos cada consulta en tiempo real
              </h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Este mismo motor de IA y automatización es el que implementamos en tu empresa para que ningún lead quede sin seguimiento.
              </p>
            </div>

            {/* Live Pipeline Monitor Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-gray-400">Estado IA:</span>
                <span className="text-tg-cyan font-semibold">{aiScore.status}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-gray-400">Lead Scoring:</span>
                <span className="text-emerald-400 font-semibold">{aiScore.score}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Asignación:</span>
                <span className="text-blue-300 font-semibold truncate max-w-[180px]">{aiScore.routing}</span>
              </div>
            </div>

            {/* Direct WhatsApp Action alternative */}
            <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-sm text-white">
                    ¿Preferís hablar por WhatsApp?
                  </div>
                  <div className="text-[11px] text-gray-300">
                    Respuesta comercial en minutos.
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Chatear ahora por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
