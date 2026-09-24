import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Banner Container (Exact Image 04) */}
        <div className="relative rounded-2xl bg-[#0B1F3B] p-8 sm:p-12 md:p-14 overflow-hidden shadow-xl text-left">
          
          {/* Subtle Watermark TG Isotype in Background (Image 04) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-15 pointer-events-none w-96 h-96">
            <img
              src="/brand/tecnogen-icon.png"
              alt=""
              className="w-full h-full object-contain filter brightness-150"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Left Copy */}
            <div className="max-w-xl space-y-2">
              <h2 className="font-montserrat font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Hagamos crecer tu próximo gran proyecto.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-inter font-normal">
                Agenda una consultoría y descubre cómo la IA y la automatización pueden llevar tu negocio más lejos.
              </p>
            </div>

            {/* Right Buttons (Exact Image 04) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-tg-blue hover:bg-blue-600 text-white font-montserrat font-bold text-xs tracking-wide shadow-md transition-all"
              >
                <span>Agenda una consultoría</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/5491100000000?text=Hola%20TecnoGen!%20Quiero%20conversar%20sobre%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0B1F3B] hover:bg-slate-800 text-white border border-gray-600 font-montserrat font-bold text-xs tracking-wide transition-all"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Hablemos por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
