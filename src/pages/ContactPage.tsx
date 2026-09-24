import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { SmartLeadForm } from '../components/SmartLeadForm';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-12 bg-slate-50">
      <SEOHead
        title="Contacto & Agendamiento de Consultoría"
        description="Agendá una sesión de consultoría técnica sin cargo con TecnoGen. Hablemos de cómo implementar marketing, IA y automatizaciones en tu empresa."
        keywords="Contacto TecnoGen, Consultoria marketing IA, Agendar reunion TecnoGen"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8">
          <Link to="/" className="hover:text-tg-blue transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-tg-blue font-semibold">Contacto</span>
        </nav>
      </div>

      <SmartLeadForm />
    </div>
  );
};
