import React from 'react';
import { ArrowRight, BarChart2 } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
  onExploreSolutions?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreSolutions }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions (Exact Image 04) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Small Eyebrow */}
            <span className="text-xs font-montserrat font-bold text-gray-500 tracking-widest uppercase block">
              MARKETING + IA + AUTOMATIZACIÓN
            </span>

            {/* H1 Title */}
            <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] text-[#0B1F3B] tracking-[-0.03em] leading-[1.12]">
              Ideas inteligentes para un mayor mañana
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 font-inter font-normal leading-relaxed max-w-xl">
              En TecnoGen combinamos marketing, inteligencia artificial y automatización para potenciar el crecimiento de negocios en un mundo más inteligente.
            </p>

            {/* Dual CTAs (Image 04) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation || (() => scrollTo('contacto'))}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-tg-blue hover:bg-blue-700 text-white font-montserrat font-bold text-sm tracking-wide shadow-sm transition-all"
              >
                <span>Agenda una consultoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreSolutions || (() => scrollTo('servicios'))}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-tg-blue text-tg-blue hover:bg-blue-50/50 font-montserrat font-bold text-sm tracking-wide transition-all"
              >
                <span>Conoce nuestras soluciones</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Card (Exact Image 04) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* City & Businessman Photo Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[16/11] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Tecnología que impulsa personas"
                  className="w-full h-full object-cover opacity-75"
                />
                
                {/* Silhouette / Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                {/* Overlay Text: TECNOLOGÍA QUE IMPULSA PERSONAS */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="font-montserrat font-extrabold text-white text-lg sm:text-2xl tracking-[0.08em] uppercase max-w-xs leading-snug drop-shadow-md">
                    TECNOLOGÍA QUE IMPULSA PERSONAS
                  </div>
                </div>
              </div>

              {/* Floating Badge: Más negocios. Más posibilidades. */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 text-tg-blue flex items-center justify-center flex-shrink-0">
                  <BarChart2 className="w-6 h-6 text-tg-blue" />
                </div>
                <div className="text-left">
                  <div className="font-montserrat font-bold text-[#0B1F3B] text-sm sm:text-base leading-tight">
                    Más negocios.
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-inter">
                    Más posibilidades.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
