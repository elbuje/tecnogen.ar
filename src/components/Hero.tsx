import React from 'react';
import { ArrowRight, TrendingUp, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-hero">
      {/* Subtle background ambient patterns */}
      <div className="absolute inset-0 pattern-bg opacity-40 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/80 text-tg-blue text-[11px] sm:text-xs font-montserrat font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-tg-cyan" />
              <span>Marketing + IA + Automatización</span>
            </div>

            {/* Main H1 Title (Brand statement) */}
            <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] text-tg-dark tracking-tight leading-[1.15]">
              Ideas inteligentes para un{' '}
              <span className="text-gradient-cyan">mayor mañana</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
              En <strong className="text-tg-dark font-semibold">TecnoGen</strong> integramos marketing digital, inteligencia artificial y automatización para conseguir clientes, mejorar procesos y acelerar el crecimiento de empresas.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-sm tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Agenda una consultoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-tg-dark border border-gray-200 font-montserrat font-semibold text-sm hover:border-tg-blue/40 hover:text-tg-blue transition-all duration-200 shadow-sm"
              >
                <span>Conoce nuestras soluciones</span>
              </a>
            </div>

            {/* Micro credibility badges */}
            <div className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-tg-cyan flex-shrink-0" />
                <span>Estrategia Medible</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <Zap className="w-4 h-4 text-tg-blue flex-shrink-0" />
                <span>Automatización 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <ShieldCheck className="w-4 h-4 text-tg-green flex-shrink-0" />
                <span>Experiencia Real</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Mockup with Glassmorphism */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-gradient-to-br from-slate-900 to-tg-dark aspect-[4/3] sm:aspect-[16/11]">
                
                {/* Visual Backdrop Overlay with City & Tech Skyline */}
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="TecnoGen - Tecnología e Inteligencia"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-40 transform scale-105 hover:scale-100 transition-transform duration-700"
                />
                
                {/* Brand Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-tg-dark via-tg-dark/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tr from-tg-blue/30 to-tg-cyan/20" />

                {/* Floating Headline inside Visual */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <div className="inline-block px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white font-montserrat font-bold text-[11px] tracking-widest uppercase mb-2">
                    Tecnología que impulsa personas
                  </div>
                  <h3 className="font-montserrat font-bold text-xl sm:text-2xl text-white leading-snug">
                    Sistemas integrados de crecimiento para PyMEs y empresas.
                  </h3>
                </div>
              </div>

              {/* Floating Bottom Card: "Más negocios. Más posibilidades." */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-subtle">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-tg-blue flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-tg-blue" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-gray-900 text-sm sm:text-base leading-tight">
                    Más negocios.
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">
                    Más posibilidades.
                  </div>
                </div>
              </div>

              {/* Floating Top Right Tag: "IA + CRM + WhatsApp" */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-4 shadow-lg border border-gray-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-montserrat font-semibold text-xs text-tg-dark">
                  Sistemas Activos 24/7
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
