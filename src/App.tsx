import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MarketingDigitalPage } from './pages/MarketingDigitalPage';
import { SEOPage } from './pages/SEOPage';
import { InteligenciaArtificialPage } from './pages/InteligenciaArtificialPage';
import { AgentesIAPage } from './pages/AgentesIAPage';
import { AutomatizacionPage } from './pages/AutomatizacionPage';
import { CRMWhatsAppPage } from './pages/CRMWhatsAppPage';
import { ContenidoIAPage } from './pages/ContenidoIAPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MessageSquare } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        {/* Header Global */}
        <Header />

        {/* Dynamic SEO Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agencia-marketing-digital" element={<MarketingDigitalPage />} />
            <Route path="/agencia-seo-posicionamiento" element={<SEOPage />} />
            <Route path="/inteligencia-artificial-empresas" element={<InteligenciaArtificialPage />} />
            <Route path="/agentes-inteligencia-artificial" element={<AgentesIAPage />} />
            <Route path="/automatizacion-de-procesos" element={<AutomatizacionPage />} />
            <Route path="/crm-whatsapp-ventas" element={<CRMWhatsAppPage />} />
            <Route path="/contenido-inteligencia-artificial" element={<ContenidoIAPage />} />
            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer Global */}
        <Footer />

        {/* Floating WhatsApp Quick Action */}
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
    </Router>
  );
};

export default App;
