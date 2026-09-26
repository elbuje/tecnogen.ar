import React, { useState, useEffect } from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Brain, 
  Bot, 
  Target, 
  ArrowRight, 
  MessageSquare, 
  Flame, 
  Award,
  ChevronDown,
  Building2,
  Coffee,
  Ticket,
  Instagram,
  Globe
} from 'lucide-react';

export const MentalidadMarketingPage: React.FC = () => {
  // Countdown Timer to October 10
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Form State for Quick Reservation
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    rubro: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-10-10T10:00:00-03:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = `¡Hola! Quiero reservar mi lugar para el evento *Mentalidad y Marketing — Neuroventas con IA* (10 de Octubre).%0A%0A*Mis Datos:*%0A• Nombre: ${encodeURIComponent(formData.nombre)}%0A• Email: ${encodeURIComponent(formData.email)}%0A• WhatsApp: ${encodeURIComponent(formData.telefono)}%0A• Empresa/Negocio: ${encodeURIComponent(formData.empresa || 'Emprendimiento')}%0A• Rubro: ${encodeURIComponent(formData.rubro || 'General')}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/5491138205570?text=${waText}`, '_blank');
    }, 600);
  };

  const faqs = [
    {
      q: '¿Cuándo y dónde se realiza el evento?',
      a: 'Se llevará a cabo el día 10 de octubre de 10:00 a 17:00 hs en Lavalle 362, Piso 7, Microcentro, CABA (Buenos Aires, Argentina). Habrá un receso de almuerzo/networking de 13:00 a 14:00 hs.'
    },
    {
      q: '¿A quién está dirigido?',
      a: 'A dueños de negocio, emprendedores, directores comerciales, profesionales independientes y creadores de contenido que deseen potenciar su mentalidad, crear contenidos de alto impacto con intención de compra y aplicar Inteligencia Artificial con Neuroventas para multiplicar sus conversiones.'
    },
    {
      q: '¿Necesito conocimientos técnicos previos sobre Inteligencia Artificial?',
      a: 'No. El enfoque del evento es 100% estratégico y práctico. Aprenderás a implementar herramientas de IA y principios neurocientíficos de toma de decisión de manera directa, sin tecnicismos complejos.'
    },
    {
      q: '¿Por qué los cupos son estrictamente limitados?',
      a: 'Para garantizar un espacio de aprendizaje inmersivo, interacción real con los tres speakers y una dinámica de networking de alto valor entre dueños de negocio, la sala cuenta con capacidad reducida.'
    },
    {
      q: '¿Cómo aseguro mi lugar y qué medios de pago están disponibles?',
      a: 'Completá el formulario de reserva o hacé clic en el botón de WhatsApp oficial para coordinar tu pase directo con el equipo. Podés abonar mediante transferencia bancaria en pesos (Argentina) o medios digitales.'
    }
  ];

  return (
    <div className="bg-[#0B0D13] text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black font-sans">
      <SEOHead
        title="Mentalidad y Marketing — Neuroventas con IA | Evento Presencial en Buenos Aires"
        description="Evento presencial exclusivo para dueños de negocio y emprendedores: Anthony Altuna, Fede Nowback y Christian Cencherle en Microcentro CABA. 10 de octubre de 10:00 a 17:00 hs."
        keywords="Mentalidad y Marketing, Neuroventas con IA, Fede Nowback, Anthony Altuna, Christian Cencherle, Evento Presencial Emprendedores Buenos Aires, Inteligencia Artificial Negocios"
      />

      {/* Hero Glows */}
      <div className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-500/15 via-orange-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Banner Tag */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-montserrat font-bold tracking-widest uppercase shadow-lg shadow-amber-900/20 backdrop-blur-md animate-pulse">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>EVENTO PRESENCIAL EXCLUSIVO • CUPOS LIMITADOS</span>
            </div>
          </div>

          {/* Main Title & Value Hook */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-montserrat font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
              Mentalidad y Marketing
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                Neuroventas con IA
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
              El intensivo presencial para <strong className="text-amber-400 font-semibold">Dueños de Negocio y Emprendedores</strong> que buscan romper sus techos de facturación combinando psicología de compra, autoridad digital y herramientas de Inteligencia Artificial.
            </p>

            {/* Quick Event Badges Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl mx-auto pt-4 text-sm font-montserrat">
              <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-semibold text-slate-200">10 de Octubre</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-semibold text-slate-200">10:00 a 17:00 hs</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-semibold text-slate-200">Lavalle 362, Piso 7 (CABA)</span>
              </div>
            </div>

            {/* Live Countdown Clock */}
            <div className="pt-6 pb-2">
              <div className="inline-block p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-amber-500/25 shadow-2xl shadow-amber-950/40 backdrop-blur-xl">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest mb-3 font-montserrat flex items-center justify-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>TIEMPO RESTANTE PARA EL EVENTO</span>
                </div>
                <div className="grid grid-cols-4 gap-3 sm:gap-6 text-center">
                  <div className="px-3 py-2 rounded-xl bg-black/50 border border-white/5 min-w-[65px] sm:min-w-[85px]">
                    <div className="font-montserrat font-black text-2xl sm:text-4xl text-amber-300">{timeLeft.days}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Días</div>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-black/50 border border-white/5 min-w-[65px] sm:min-w-[85px]">
                    <div className="font-montserrat font-black text-2xl sm:text-4xl text-amber-300">{timeLeft.hours}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Horas</div>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-black/50 border border-white/5 min-w-[65px] sm:min-w-[85px]">
                    <div className="font-montserrat font-black text-2xl sm:text-4xl text-amber-300">{timeLeft.minutes}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Min</div>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-black/50 border border-white/5 min-w-[65px] sm:min-w-[85px]">
                    <div className="font-montserrat font-black text-2xl sm:text-4xl text-amber-300">{timeLeft.seconds}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold">Seg</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#reservar"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-montserrat font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <Ticket className="w-5 h-5" />
                <span>Reservar Mi Entrada Ahora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/5491138205570?text=Hola!%20Quiero%20consultar%20por%20las%20entradas%20del%20evento%20Mentalidad%20y%20Marketing%20del%2010%20de%20Octubre."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-montserrat font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Official Flyer Poster Showcase */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-amber-500/30 via-slate-800 to-amber-950/40 border border-amber-500/30 shadow-2xl shadow-amber-950/60">
              <div className="rounded-2xl overflow-hidden bg-slate-950 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 p-4 sm:p-6 flex justify-center">
                  <img
                    src="/events/flyer-mentalidad-marketing.jpg"
                    alt="Flyer Oficial Mentalidad y Marketing - Neuroventas con IA"
                    className="rounded-xl shadow-2xl w-full max-w-sm object-cover border border-white/10 hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-5 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-montserrat font-bold uppercase">
                    <Award className="w-3.5 h-3.5" />
                    <span>3 Mentores Referentes en Vivo</span>
                  </div>

                  <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white">
                    Un día que redefinirá la dirección de tu negocio.
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Aprenderás de la mano de <strong className="text-white">Fede Nowback</strong>, <strong className="text-white">Anthony Altuna</strong> y <strong className="text-white">Christian Cencherle</strong> los 3 pilares indispensables para liderar en la era de la inteligencia artificial: mentalidad empresarial blindada, estrategia de contenidos magnética y neuroventas de alta conversión.
                  </p>

                  <div className="space-y-2.5 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Acceso a la jornada completa de 10:00 a 17:00 hs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Espacio de preguntas directas y mentoría abierta</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Networking de alto calibre con dueños de negocio</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#reservar"
                      className="inline-flex items-center gap-2 text-xs font-montserrat font-black text-amber-400 hover:text-amber-300 uppercase tracking-wider"
                    >
                      <span>Asegurar mi cupo antes que se agoten</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* The 3 Core Transformation Pillars */}
      <section className="py-20 bg-slate-950/70 border-t border-b border-white/[0.06] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 text-xs font-montserrat font-extrabold tracking-widest uppercase">
              Contenido de Alto Impacto
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">
              Los 3 Ejes Estratégicos del Evento
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Diseñado punto por punto para que salgas con un plan de acción concreto aplicable al día siguiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all group relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Brain className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-amber-400 font-montserrat uppercase tracking-wider">Eje 01 • Mentalidad</span>
                <h3 className="font-montserrat font-extrabold text-xl text-white">
                  Mentalidad de Dueño & Escalamiento
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Cómo superar los techos operativos y mentales que frenan tu crecimiento. Reestructuración de prioridades, liderazgo bajo presión y hábitos de alto rendimiento para pensar y ejecutar como un verdadero dueño y no como un autoempleado.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Por Christian Cencherle</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all group relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-orange-400 font-montserrat uppercase tracking-wider">Eje 02 • Marketing</span>
                <h3 className="font-montserrat font-extrabold text-xl text-white">
                  Marca Personal con Intención de Compra
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  El método comprobado para perder el miedo a la cámara, generar contenido magnético que atrae prospectos calificados y convertir seguidores en clientes fieles sin depender de la viralidad ni quemarte publicando a ciegas.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-400" />
                <span>Por Fede Nowback</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 transition-all group relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                  <Bot className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-amber-300 font-montserrat uppercase tracking-wider">Eje 03 • Neuroventas & IA</span>
                <h3 className="font-montserrat font-extrabold text-xl text-white">
                  Neuroventas & Cierres con IA
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Aprende la neurociencia detrás de cómo el cerebro toma decisiones de compra y cómo integrar agentes de Inteligencia Artificial para automatizar la prospección, personalizar respuestas y cerrar acuerdos de alto valor.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-300" />
                <span>Por Anthony Altuna</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Speakers Profile Section */}
      <section className="py-24 relative overflow-hidden" id="speakers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-amber-400 text-xs font-montserrat font-extrabold tracking-widest uppercase">
              Mentores & Expositores
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-5xl text-white">
              Conocé a los Speakers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Tres referentes que viven en la trinchera de los negocios, las ventas y la innovación.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Speaker 1: Anthony Altuna */}
            <div className="rounded-3xl bg-slate-900/80 border border-white/10 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 group">
              <div className="space-y-5">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-800 border border-white/10">
                  <img
                    src="/events/anthony_altuna.jpg"
                    alt="Anthony Altuna - Neurocoach y Consultor en Neuroventas"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 font-montserrat font-black text-[11px] uppercase tracking-wider">
                      Neuroventas & IA
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-montserrat font-black text-2xl text-white group-hover:text-amber-300 transition-colors">
                    Anthony Altuna
                  </h3>
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mt-1">
                    Economista & Neurocoach Profesional
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Consultor especializado en Neuroventas, conferencista internacional y ex-embajador formador de BIIA Lab en Argentina. Experto en psicología del comprador, comportamiento del consumidor y aplicación de Inteligencia Artificial para optimizar embudos de conversión comercial.
                </p>

                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Neurociencia aplicada a la toma de decisión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Estrategias de persuasión y cierre de ventas</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <a
                  href="https://www.instagram.com/gendenegocio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@gendenegocio</span>
                </a>
              </div>
            </div>

            {/* Speaker 2: Fede Nowback */}
            <div className="rounded-3xl bg-slate-900/80 border border-amber-500/30 p-6 flex flex-col justify-between transition-all duration-300 group shadow-xl shadow-amber-950/20">
              <div className="space-y-5">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-800 border border-amber-500/30">
                  <img
                    src="/events/fede_nowback.jpg"
                    alt="Fede Nowback - Mentor de Marca Personal y Negocios Digitales"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-orange-500 text-white font-montserrat font-black text-[11px] uppercase tracking-wider">
                      Marca Personal & Contenido
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-montserrat font-black text-2xl text-white group-hover:text-amber-300 transition-colors">
                    Fede Nowback
                  </h3>
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider mt-1">
                    Estratega de Marca Personal & Mentor
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Con más de 10 años en producción audiovisual y medios, creador del Método Nowback. Ha acompañado a cientos de profesionales y emprendedores a monetizar su conocimiento, vencer el miedo a la exposición y transformar sus redes en canales comerciales predecibles.
                </p>

                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Guiones de alto impacto y ganchos magnéticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>Ventas por DM y WhatsApp sin perseguir clientes</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <a
                  href="https://fedenowback.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Globe className="w-4 h-4 text-sky-400" />
                  <span>fedenowback.com.ar</span>
                </a>
                <a
                  href="https://www.instagram.com/fedenowback/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Speaker 3: Christian Cencherle */}
            <div className="rounded-3xl bg-slate-900/80 border border-white/10 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 group">
              <div className="space-y-5">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-800 border border-white/10">
                  <img
                    src="/events/christian_cencherle.jpg"
                    alt="Christian Cencherle - Empresario y Referente de Liderazgo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 font-montserrat font-black text-[11px] uppercase tracking-wider">
                      Liderazgo & Mentalidad
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-montserrat font-black text-2xl text-white group-hover:text-amber-300 transition-colors">
                    Christian Cencherle
                  </h3>
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mt-1">
                    Empresario Industrial & Creador
                  </p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Titular de Cencherle Lanas, referente en transformación de empresas tradicionales al entorno digital. Apasionado del trabajo duro, la resiliencia y el desarrollo de mentalidad de acero para dueños de empresas que quieren superar crisis y expandirse.
                </p>

                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Liderazgo ejecutivo y cultura de trabajo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Escalamiento real de operaciones y rentabilidad</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <a
                  href="https://www.instagram.com/christian_cencherle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-montserrat font-bold text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>@christian_cencherle</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Event Schedule Timeline */}
      <section className="py-20 bg-slate-950 border-t border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-amber-400 text-xs font-montserrat font-extrabold tracking-widest uppercase">
              Programa de la Jornada
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-white">
              Cronograma del 10 de Octubre
            </h2>
            <p className="text-slate-400 text-sm">
              Una estructura ágil e intensiva pensada para maximizar tu aprendizaje y networking.
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-amber-400 font-montserrat font-bold text-xs shrink-0">
                  09:30 - 10:00
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-base">Acreditaciones & Recepción</h4>
                  <p className="text-xs text-slate-400">Bienvenida, entrega de credenciales y primera ronda de contactos.</p>
                </div>
              </div>
              <Coffee className="w-5 h-5 text-amber-400 hidden sm:block shrink-0" />
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/[0.05] border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-montserrat font-black text-xs shrink-0">
                  10:00 - 11:30
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-base">Bloque 1: Mentalidad & Liderazgo de Alto Desempeño</h4>
                  <p className="text-xs text-slate-300">Christian Cencherle: Romper techos mentales, resiliencia y modelo de negocio para dueños.</p>
                </div>
              </div>
              <Brain className="w-5 h-5 text-amber-400 hidden sm:block shrink-0" />
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-orange-400 font-montserrat font-bold text-xs shrink-0">
                  11:45 - 13:00
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-base">Bloque 2: Marca Personal con Intención de Compra</h4>
                  <p className="text-xs text-slate-400">Fede Nowback: Estrategia de contenidos, confianza frente a cámara y conversión por DM/WhatsApp.</p>
                </div>
              </div>
              <Target className="w-5 h-5 text-orange-400 hidden sm:block shrink-0" />
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-dashed border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-montserrat font-bold text-xs shrink-0">
                  13:00 - 14:00
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-slate-200 text-base">Break de Almuerzo & Networking Estratégico</h4>
                  <p className="text-xs text-slate-400">Receso libre para conectar, intercambiar experiencias e ideas comerciales.</p>
                </div>
              </div>
              <Users className="w-5 h-5 text-slate-400 hidden sm:block shrink-0" />
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/[0.05] border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-montserrat font-black text-xs shrink-0">
                  14:00 - 15:30
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-base">Bloque 3: Neuroventas & Cierre de Ventas con IA</h4>
                  <p className="text-xs text-slate-300">Anthony Altuna: Psicología de decisión del consumidor, automatizaciones y agentes de IA.</p>
                </div>
              </div>
              <Bot className="w-5 h-5 text-amber-400 hidden sm:block shrink-0" />
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-amber-400 font-montserrat font-bold text-xs shrink-0">
                  15:45 - 16:45
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-base">Panel Abierto de Preguntas & Respuestas</h4>
                  <p className="text-xs text-slate-400">Los 3 speakers en el escenario respondiendo tus dudas concretas de negocio.</p>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-amber-400 hidden sm:block shrink-0" />
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 font-montserrat font-bold text-xs shrink-0">
                  16:45 - 17:00
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-base">Cierre Oficial & Fotos</h4>
                  <p className="text-xs text-slate-400">Conclusiones finales, fotografía grupal y cierre de la jornada.</p>
                </div>
              </div>
              <Award className="w-5 h-5 text-emerald-400 hidden sm:block shrink-0" />
            </div>

          </div>

        </div>
      </section>

      {/* Venue & Location Details */}
      <section className="py-20 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-montserrat font-bold uppercase">
                <Building2 className="w-3.5 h-3.5" />
                <span>Ubicación Estratégica</span>
              </div>

              <h2 className="font-montserrat font-black text-3xl sm:text-4xl text-white">
                Lavalle 362, Piso 7
                <span className="block text-amber-400 text-xl sm:text-2xl font-semibold mt-1">
                  Microcentro, CABA (Buenos Aires)
                </span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Ubicado en el epicentro financiero y corporativo de la Ciudad Autónoma de Buenos Aires, con excelente conectividad a través de líneas de Subte (Línea B - Estación Florida, Línea C - Lavalle/Diagonal Norte, Línea A - Perú) y múltiples líneas de colectivos y estacionamientos privados cercanos.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-bold text-white mb-1">🚇 Subtes cercanos:</div>
                  <div className="text-slate-400">Líneas B, C, A, D a pocas cuadras.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="font-bold text-white mb-1">🚗 Accesibilidad:</div>
                  <div className="text-slate-400">Cocheras privadas sobre Lavalle y Reconquista.</div>
                </div>
              </div>

              <div>
                <a
                  href="https://maps.google.com/?q=Lavalle+362+CABA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Ver ubicación en Google Maps</span>
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-auto lg:h-full min-h-[300px] bg-slate-950 flex items-center justify-center p-6 text-center">
              <div className="space-y-3">
                <MapPin className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                <div className="font-montserrat font-bold text-lg text-white">Lavalle 362, Piso 7</div>
                <div className="text-xs text-slate-400 max-w-xs mx-auto">
                  Microcentro, Ciudad Autónoma de Buenos Aires • Salón de Conferencias
                </div>
                <div className="pt-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                    ✓ Aire Acondicionado & Confort Premium
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reservation Form & Ticket Tier */}
      <section className="py-24 relative overflow-hidden" id="reservar">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-black border-2 border-amber-500/40 p-8 sm:p-12 shadow-2xl shadow-amber-950/40 text-center relative">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-montserrat font-bold uppercase tracking-widest mb-6">
              <Ticket className="w-4 h-4" />
              <span>Reserva de Entrada Oficial</span>
            </div>

            <h2 className="font-montserrat font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Asegurá Tu Lugar Hoy
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Completá el formulario para recibir la confirmación de tu cupo y los detalles de acreditación directamente por WhatsApp.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4 max-w-md mx-auto">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="font-montserrat font-bold text-xl text-white">¡Solicitud Recibida!</h3>
                <p className="text-xs text-slate-300">
                  Se ha abierto tu WhatsApp oficial para coordinar el pago y confirmar tu entrada. Si no se abrió automáticamente, hacé clic abajo:
                </p>
                <a
                  href="https://wa.me/5491138205570?text=Hola!%20Quiero%20confirmar%20mi%20reserva%20para%20el%20evento%20Mentalidad%20y%20Marketing%20del%2010%20de%20Octubre."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Abrir WhatsApp Ahora</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto text-left space-y-4">
                <div>
                  <label className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nombre@empresa.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="+54 9 11 ..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Empresa o Emprendimiento
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu negocio"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Rubro / Actividad
                    </label>
                    <select
                      name="rubro"
                      value={formData.rubro}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    >
                      <option value="Servicios Profesionales">Servicios Profesionales / Consultoría</option>
                      <option value="Comercio / Ecommerce">Comercio / E-commerce</option>
                      <option value="Industria / Fabricación">Industria / Fabricación</option>
                      <option value="Inmobiliario / Construcción">Inmobiliario / Construcción</option>
                      <option value="Salud / Estética">Salud / Estética / Bienestar</option>
                      <option value="Tecnología / Software">Tecnología / Software</option>
                      <option value="Otro">Otro Rubro</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-montserrat font-black text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Procesando Reserva...</span>
                    ) : (
                      <>
                        <span>Solicitar Mi Entrada por WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center pt-2">
                  🔒 Tus datos están protegidos. Nos contactaremos únicamente para coordinar tu entrada al evento.
                </p>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-amber-400 text-xs font-montserrat font-extrabold tracking-widest uppercase">
              Dudas & Consultas
            </span>
            <h2 className="font-montserrat font-extrabold text-3xl text-white">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-montserrat font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Final Urgency Strip */}
      <div className="py-12 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 font-montserrat text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight text-slate-950">
              ¿Listo para subir de nivel tu negocio?
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-900">
              Jueves 10 de Octubre • Lavalle 362, Piso 7, CABA • 10:00 a 17:00 hs
            </p>
          </div>
          <a
            href="https://wa.me/5491138205570?text=Hola!%20Quiero%20asegurar%20mi%20lugar%20para%20Mentalidad%20y%20Marketing%20del%2010%20de%20Octubre."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-black text-amber-300 font-black text-xs uppercase tracking-wider shadow-2xl transition-all shrink-0 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
};
