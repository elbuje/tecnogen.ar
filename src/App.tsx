import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyTecnoGen } from './components/WhyTecnoGen';
import { ProblemSolutionSelector } from './components/ProblemSolutionSelector';
import { ServicesSection } from './components/ServicesSection';
import { ProcessFlow } from './components/ProcessFlow';
import { CaseStudies } from './components/CaseStudies';
import { MetricsSocialProof } from './components/MetricsSocialProof';
import { SmartLeadForm } from './components/SmartLeadForm';
import { CTASection } from './components/CTASection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForForm(serviceName);
    }
    const contactElem = document.getElementById('contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Header */}
      <Header onOpenConsultation={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section (Image 04 Layout) */}
        <Hero onOpenConsultation={() => scrollToContact()} />

        {/* 2. Why TecnoGen? (4 Core Pillars) */}
        <WhyTecnoGen />

        {/* 3. Interactive Problem / Solution Selector */}
        <ProblemSolutionSelector onSelectSolution={(solution) => scrollToContact(solution)} />

        {/* 4. The 6 Main Services & Solutions with Drawers */}
        <ServicesSection onOpenConsultation={() => scrollToContact()} />

        {/* 5. Process Diagram: Automatiza. Escala. Crece. (01 to 04) */}
        <ProcessFlow />

        {/* 6. Quantified Case Studies */}
        <CaseStudies />

        {/* 7. Social Proof & Statistics Strip */}
        <MetricsSocialProof />

        {/* 8. Smart Lead Qualification Form (Live AI Routing Simulation) */}
        <SmartLeadForm preselectedService={selectedServiceForForm} />

        {/* 9. About TecnoGen: TecnoBrain + GEN de Negocio Synergy */}
        <AboutSection />

        {/* 10. High-Impact Night Blue CTA Banner with TG Watermark */}
        <CTASection onOpenConsultation={() => scrollToContact()} />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/5491100000000?text=Hola%20TecnoGen!%20Quiero%20conocer%20m%C3%A1s%20sobre%20sus%20servicios."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-montserrat font-bold">
          Chatear por WhatsApp
        </span>
      </a>
    </div>
  );
};

export default App;
