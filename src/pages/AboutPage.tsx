import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { AboutSection } from '../components/AboutSection';
import { WhyTecnoGen } from '../components/WhyTecnoGen';
import { CTASection } from '../components/CTASection';
import { Link, useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-28 bg-slate-50">
      <SEOHead
        title="Sobre Nosotros - La Unión de TecnoBrain y GEN de Negocio"
        description="TecnoGen combina la experiencia técnica en infraestructura, automatización e IA de TecnoBrain con la visión estratégica de marketing y crecimiento de GEN de Negocio."
        keywords="TecnoGen historia, TecnoBrain, GEN de negocio, Empresa tecnologia marketing IA, Equipo TecnoGen"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">Sobre Nosotros</span>
        </nav>
      </div>

      <AboutSection />
      <WhyTecnoGen />
      <CTASection onOpenConsultation={() => navigate('/contacto')} />
    </div>
  );
};
