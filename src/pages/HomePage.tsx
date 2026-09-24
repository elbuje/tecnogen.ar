import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { WhyTecnoGen } from '../components/WhyTecnoGen';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessFlow } from '../components/ProcessFlow';
import { MetricsSocialProof } from '../components/MetricsSocialProof';
import { CTASection } from '../components/CTASection';
import { SmartLeadForm } from '../components/SmartLeadForm';

export const HomePage: React.FC = () => {
  const handleOpenConsultation = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="Marketing + Inteligencia Artificial + Automatización"
        description="En TecnoGen combinamos marketing, inteligencia artificial y automatización para potenciar el crecimiento de negocios en un mundo más inteligente."
        keywords="TecnoGen, Ideas inteligentes para un mayor mañana, Marketing Digital, Inteligencia Artificial empresas, Automatización de procesos"
      />

      {/* 1. Hero Section (Exact Image 04) */}
      <Hero onOpenConsultation={handleOpenConsultation} onExploreSolutions={() => {
        const el = document.getElementById('servicios');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* 2. ¿Por qué TecnoGen? (Exact Image 04) */}
      <WhyTecnoGen />

      {/* 3. Nuestros Servicios (Exact Image 04) */}
      <ServicesSection />

      {/* 4. De la Idea al Resultado: Automatiza. Escala. Crece. (Exact Image 04) */}
      <ProcessFlow />

      {/* 5. Resultados que hablan (Exact Image 04) */}
      <MetricsSocialProof />

      {/* 6. Contact Form Section */}
      <SmartLeadForm />

      {/* 7. Dark CTA Banner with TG Watermark (Exact Image 04) */}
      <CTASection onOpenConsultation={handleOpenConsultation} />
    </>
  );
};
