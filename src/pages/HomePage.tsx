import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { WhyTecnoGen } from '../components/WhyTecnoGen';
import { ProblemSolutionSelector } from '../components/ProblemSolutionSelector';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessFlow } from '../components/ProcessFlow';
import { CaseStudies } from '../components/CaseStudies';
import { MetricsSocialProof } from '../components/MetricsSocialProof';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { CTASection } from '../components/CTASection';
import { AboutSection } from '../components/AboutSection';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleOpenConsultation = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contacto');
    }
  };

  return (
    <>
      <SEOHead
        title="Marketing + Inteligencia Artificial + Automatización"
        description="TecnoGen integra marketing, inteligencia artificial y automatización para hacer crecer negocios. Conseguí clientes calificados, automatizá WhatsApp y escalá tus ventas."
        keywords="TecnoGen, Agencia de Marketing, Inteligencia Artificial para empresas, Automatizacion de procesos, CRM WhatsApp, Kommo, SEO transaccional"
      />
      <Hero onOpenConsultation={handleOpenConsultation} />
      <WhyTecnoGen />
      <ProblemSolutionSelector onSelectSolution={() => handleOpenConsultation()} />
      <ServicesSection onOpenConsultation={handleOpenConsultation} />
      <ProcessFlow />
      <CaseStudies />
      <MetricsSocialProof />
      <SmartLeadForm />
      <AboutSection />
      <CTASection onOpenConsultation={handleOpenConsultation} />
    </>
  );
};
