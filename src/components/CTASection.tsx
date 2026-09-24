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
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M20 30 L42 16 H86 C89.3 16 92 18.7 92 22 V31 C92 34.3 89.3 37 86 37 H28 C23.5 37 20 34 20 30 Z"
                fill="#2563EB"
              />
              <path
                d="M38 37 C34 37 31 40 31 44 V68 C31 81 41 90 55 90 H72 C83 90 92 82 92 70 V58 C92 54.7 89.3 52 86 52 H64 C60.7 52 58 54.7 58 58 V62 C58 64.2 59.8 66 62 66 H76 V70 C76 75 72 78 67 78 H55 C47 78 43 73 43 65 V46 C43 41 40 37 38 37 Z"
                fill="#06B6D4"
              />
            </svg>
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
