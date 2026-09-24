import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-tg-dark text-white">
      
      {/* Background Watermark TG Isotype Glyph matching Image 04 */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-tg-blue">
          <path d="M15 25 H85 V42 H58 V80 H38 V42 H15 Z" />
          <path d="M42 42 H85 V80 H42 V62 H65 V58 H42 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* Text block */}
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-tg-cyan text-xs font-montserrat font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Un Mayor Mañana es Posible</span>
            </div>

            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Hagamos crecer tu próximo gran proyecto.
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-normal max-w-xl">
              Agenda una consultoría técnica y descubrí cómo la IA y la automatización pueden acelerar tus ventas y optimizar tus procesos.
            </p>
          </div>

          {/* Action buttons matching Image 04 */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-tg-blue hover:bg-blue-600 text-white font-montserrat font-bold text-sm tracking-wide shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Agenda una consultoría</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/5491100000000?text=Hola%20TecnoGen!%20Quiero%20conocer%20m%C3%A1s%20sobre%20sus%20sistemas%20de%20crecimiento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-montserrat font-bold text-sm hover:border-white/40 transition-all duration-200 backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Hablemos por WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
