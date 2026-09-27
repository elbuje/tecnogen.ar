import React, { useState, useEffect } from 'react';

export const MentalidadMarketingPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Mentalidad y Marketing — Neuroventas con IA | Evento Presencial 10 de Octubre';
  }, []);

  const whatsappUrl = 'https://wa.me/5491170610766?text=Hola%2C%20quiero%20reservar%20mi%20lugar%20en%20el%20evento%20Mentalidad%20y%20Marketing%20-%20Neuroventas%20con%20IA%20del%2010%20de%20octubre.';

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div style={{
      backgroundColor: '#080808',
      color: '#EDE8DF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      minHeight: '100vh',
      lineHeight: 1.55,
      overflowX: 'hidden'
    }}>
      {/* Inline styles for fonts and media queries */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&display=swap');
        
        .mm-font-serif {
          font-family: 'Playfair Display', Georgia, serif;
        }
        .mm-font-cinzel {
          font-family: 'Cinzel', serif;
        }
        .mm-gold-gradient {
          background: linear-gradient(135deg, #F5D680 0%, #D4AF37 50%, #AA820A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .mm-btn-gold {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: linear-gradient(135deg, #ECC868 0%, #D4AF37 50%, #9E7915 100%);
          color: #080808;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          padding: 16px 36px;
          border-radius: 9999px;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.35);
          transition: all 0.25s ease;
          border: none;
        }
        .mm-btn-gold:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(212, 175, 55, 0.55);
          background: linear-gradient(135deg, #F5D680 0%, #DEBA46 50%, #B89222 100%);
        }
        .mm-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          background: rgba(212, 175, 55, 0.08);
          color: #D4AF37;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 9999px;
        }
        .mm-card-hover {
          transition: all 0.3s ease;
        }
        .mm-card-hover:hover {
          transform: translateY(-6px);
          border-color: rgba(212, 175, 55, 0.55) !important;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.12) !important;
        }
        
        /* Grid responsives */
        .mm-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
        }
        .mm-keywords-grid {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 10px;
        }
        .mm-manifiesto-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .mm-speakers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .mm-takeaways-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }
        .mm-agenda-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: center;
        }
        .mm-pricing-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr 0.9fr;
          gap: 24px;
          align-items: stretch;
        }
        .mm-faq-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 50px;
        }
        .mm-mobile-sticky {
          display: none;
        }

        @media (max-width: 1024px) {
          .mm-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .mm-keywords-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .mm-manifiesto-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .mm-speakers-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
          .mm-takeaways-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mm-agenda-grid {
            grid-template-columns: 1fr;
          }
          .mm-pricing-grid {
            grid-template-columns: 1fr;
            max-width: 460px;
            margin: 0 auto;
          }
          .mm-faq-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .mm-keywords-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mm-takeaways-grid {
            grid-template-columns: 1fr;
          }
          .mm-mobile-sticky {
            display: block;
          }
          .mm-nav-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* TOP NAVBAR */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8, 8, 8, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '14px 20px',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#hero" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
            <span className="mm-font-serif" style={{ fontSize: '16px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.5px' }}>
              MENTALIDAD Y MARKETING
            </span>
            <span style={{ fontSize: '9px', letterSpacing: '2px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>
              NEUROVENTAS CON IA
            </span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#entradas" className="mm-btn-gold mm-nav-btn" style={{ padding: '9px 20px', fontSize: '12px' }}>
              Quiero mi entrada →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" style={{
        position: 'relative',
        padding: '60px 20px 70px',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 75% 30%, rgba(212, 175, 55, 0.12) 0%, rgba(8, 8, 8, 0) 65%), linear-gradient(180deg, #080808 0%, #110E08 50%, #080808 100%)',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="mm-hero-grid">
            {/* Text Content */}
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '3.5px', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
                ◆ EVENTO PRESENCIAL ◆
              </div>
              <h1 className="mm-font-serif" style={{
                fontSize: 'clamp(38px, 4.8vw, 62px)',
                lineHeight: 1.05,
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '20px',
                letterSpacing: '-0.5px',
              }}>
                Mentalidad<br />
                y Marketing<br />
                <span className="mm-gold-gradient">Neuroventas con IA</span>
              </h1>
              <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(237, 232, 223, 0.82)', maxWidth: '540px', marginBottom: '28px' }}>
                Una jornada para transformar la forma en que pensás, comunicás y vendés tu negocio, con neurociencia, inteligencia artificial, marca personal y casos reales.
              </p>

              {/* Meta bar */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '12px',
                marginBottom: '30px',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#D4AF37', fontSize: '18px' }}>📅</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>10 de octubre</div>
                    <div style={{ fontSize: '11px', color: 'rgba(237, 232, 223, 0.6)' }}>Sábado · Presencial</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#D4AF37', fontSize: '18px' }}>⏰</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>10:00 a 17:00 hs</div>
                    <div style={{ fontSize: '11px', color: 'rgba(237, 232, 223, 0.6)' }}>Break de 13 a 14 hs</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: '#D4AF37', fontSize: '18px' }}>📍</span>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF' }}>Lavalle 362, Piso 7</div>
                    <div style={{ fontSize: '11px', color: 'rgba(237, 232, 223, 0.6)' }}>Microcentro, CABA</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#entradas" className="mm-btn-gold">Reservar mi lugar →</a>
                <span className="mm-badge-pill">👥 CUPOS LIMITADOS</span>
              </div>
            </div>

            {/* Hero Image & Signatures */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/events_new/hero-speakers-group-hires.jpg"
                alt="Speakers: Fede Nowback, Anthony Sánchez Altuna, Christian Cencherle"
                style={{
                  width: '100%',
                  maxWidth: '460px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                }}
              />
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                width: '100%',
                maxWidth: '460px',
                marginTop: '14px',
                textAlign: 'center',
              }}>
                <div style={{ padding: '6px 4px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '8px' }}>
                  <div className="mm-font-serif" style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF' }}>Fede Nowback</div>
                  <div style={{ fontSize: '8.5px', letterSpacing: '1px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>Marca Personal</div>
                </div>
                <div style={{ padding: '6px 4px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '8px' }}>
                  <div className="mm-font-serif" style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF' }}>Anthony Altuna</div>
                  <div style={{ fontSize: '8.5px', letterSpacing: '1px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>Neuroventas & IA</div>
                </div>
                <div style={{ padding: '6px 4px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(212, 175, 55, 0.15)', borderRadius: '8px' }}>
                  <div className="mm-font-serif" style={{ fontSize: '12px', fontWeight: 700, color: '#FFFFFF' }}>C. Cencherle</div>
                  <div style={{ fontSize: '8.5px', letterSpacing: '1px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>Trayectoria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEYWORDS PILLS */}
      <section style={{
        padding: '24px 20px',
        background: '#0B0B0B',
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.12)',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="mm-keywords-grid">
            {[
              { icon: '🧠', label: 'Mentalidad' },
              { icon: '📈', label: 'Marketing' },
              { icon: '🎯', label: 'Neuroventas' },
              { icon: '⚡', label: 'IA Aplicada' },
              { icon: '📸', label: 'Contenido' },
              { icon: '💼', label: 'Casos Reales' },
              { icon: '🤝', label: 'Networking' },
              { icon: '🚀', label: 'Crecimiento' },
            ].map((k, idx) => (
              <div key={idx} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 6px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(212, 175, 55, 0.12)',
                borderRadius: '10px',
                textAlign: 'center',
              }}>
                <span style={{ fontSize: '20px', marginBottom: '4px' }}>{k.icon}</span>
                <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(237, 232, 223, 0.9)' }}>{k.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFIESTO SECTION */}
      <section style={{
        position: 'relative',
        padding: '90px 20px',
        background: 'linear-gradient(180deg, #080808 0%, #120D06 50%, #080808 100%)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/events_new/manifiesto-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
          mixBlendMode: 'luminosity',
        }} />
        <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div className="mm-manifiesto-grid">
            <div>
              <h2 className="mm-font-serif" style={{
                fontSize: 'clamp(28px, 3.4vw, 42px)',
                lineHeight: 1.15,
                fontWeight: 800,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                letterSpacing: '-0.5px',
              }}>
                No necesitás más información.<br />
                <span className="mm-gold-gradient">Necesitás saber cómo usarla para vender.</span>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(237, 232, 223, 0.85)', marginBottom: '16px' }}>
                Hoy tenemos más herramientas que nunca. Pero tener acceso a ellas no significa saber utilizarlas estratégicamente.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(237, 232, 223, 0.85)' }}>
                <strong style={{ color: '#FFFFFF' }}>Mentalidad y Marketing — Neuroventas con IA</strong> es una experiencia presencial para dueños de negocio y emprendedores que quieren entender cómo toman decisiones sus clientes, cómo comunicar valor y cómo utilizar la inteligencia artificial y las redes sociales para vender más, con casos reales y herramientas concretas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section id="speakers" style={{ padding: '90px 20px', background: '#080808' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3.5px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
              SPEAKERS
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
              <h2 className="mm-font-serif" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.15 }}>
                Tres miradas. Un mismo objetivo:<br />
                <span className="mm-gold-gradient">hacer crecer tu negocio.</span>
              </h2>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(212, 175, 55, 0.85)', fontWeight: 700, textTransform: 'uppercase' }}>
                Experiencia real · Conocimientos aplicables · Resultados
              </div>
            </div>
          </div>

          <div className="mm-speakers-grid">
            {/* Anthony Card */}
            <div className="mm-card-hover" style={{
              background: 'rgba(18, 18, 18, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.22)',
              borderRadius: '18px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '85%', overflow: 'hidden', background: '#0E0E0E' }}>
                <img src="/events_new/speaker-anthony-card.jpg" alt="Anthony Sánchez Altuna" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8, 8, 8, 0) 50%, rgba(18, 18, 18, 0.95) 100%)' }} />
              </div>
              <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '6px' }}>
                  <span className="mm-font-serif" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', display: 'block', lineHeight: 1.05 }}>Anthony</span>
                  <span className="mm-font-serif mm-gold-gradient" style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1.05 }}>Altuna</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(237, 232, 223, 0.65)', marginBottom: '16px', lineHeight: 1.4, fontStyle: 'italic' }}>
                  Economista · Empresario · Especialista en Marketing Digital
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {['Dueño de una clínica dental y de una agencia de marketing.', 'Director de GEN (Gestión Empresarial de Negocios).', 'Formado junto a Jürgen Klaric.'].map((b, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '18px', fontSize: '13px', color: 'rgba(237, 232, 223, 0.8)', marginBottom: '7px', lineHeight: 1.4 }}>
                      <span style={{ position: 'absolute', left: '4px', color: '#D4AF37', fontWeight: 'bold' }}>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', padding: '12px 14px', background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.35)', borderRadius: '10px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', color: '#D4AF37', textTransform: 'uppercase', lineHeight: 1.35, textAlign: 'center' }}>
                    NEUROVENTAS Y NEUROMARKETING CON IA
                  </div>
                </div>
                <p style={{ fontSize: '12.5px', lineHeight: 1.5, color: 'rgba(237, 232, 223, 0.7)', margin: 0 }}>
                  Herramientas de diseño, contenido y campañas publicitarias en redes sociales, con ejemplos y métricas reales de sus propios negocios.
                </p>
              </div>
            </div>

            {/* Fede Card */}
            <div className="mm-card-hover" style={{
              background: 'rgba(18, 18, 18, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.22)',
              borderRadius: '18px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '85%', overflow: 'hidden', background: '#0E0E0E' }}>
                <img src="/events_new/speaker-fede-card.jpg" alt="Fede Nowback" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8, 8, 8, 0) 50%, rgba(18, 18, 18, 0.95) 100%)' }} />
              </div>
              <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '6px' }}>
                  <span className="mm-font-serif" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', display: 'block', lineHeight: 1.05 }}>Fede</span>
                  <span className="mm-font-serif mm-gold-gradient" style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1.05 }}>Nowback</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(237, 232, 223, 0.65)', marginBottom: '16px', lineHeight: 1.4, fontStyle: 'italic' }}>
                  Productor · Creador de contenido · Referente en Marca Personal
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {['Marca personal consolidada.', 'Referente e influencer en redes sociales.', 'Especialista en comunicación magnética.'].map((b, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '18px', fontSize: '13px', color: 'rgba(237, 232, 223, 0.8)', marginBottom: '7px', lineHeight: 1.4 }}>
                      <span style={{ position: 'absolute', left: '4px', color: '#D4AF37', fontWeight: 'bold' }}>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', padding: '12px 14px', background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.35)', borderRadius: '10px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', color: '#D4AF37', textTransform: 'uppercase', lineHeight: 1.35, textAlign: 'center' }}>
                    MARCA PERSONAL, MENTALIDAD Y VENTAS
                  </div>
                </div>
                <p style={{ fontSize: '12.5px', lineHeight: 1.5, color: 'rgba(237, 232, 223, 0.7)', margin: 0 }}>
                  Cómo vender a través de redes sociales, humanizar tu marca personal, trabajar la mentalidad y la autoconfianza, y dar los primeros pasos para vender online.
                </p>
              </div>
            </div>

            {/* Christian Card */}
            <div className="mm-card-hover" style={{
              background: 'rgba(18, 18, 18, 0.7)',
              border: '1px solid rgba(212, 175, 55, 0.22)',
              borderRadius: '18px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ position: 'relative', width: '100%', paddingTop: '85%', overflow: 'hidden', background: '#0E0E0E' }}>
                <img src="/events_new/speaker-christian-card.jpg" alt="Christian Cencherle" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8, 8, 8, 0) 50%, rgba(18, 18, 18, 0.95) 100%)' }} />
              </div>
              <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '6px' }}>
                  <span className="mm-font-serif" style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', display: 'block', lineHeight: 1.05 }}>Christian</span>
                  <span className="mm-font-serif mm-gold-gradient" style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1.05 }}>Cencherle</span>
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(237, 232, 223, 0.65)', marginBottom: '16px', lineHeight: 1.4, fontStyle: 'italic' }}>
                  Empresario · Más de 25 años en el mercado argentino
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {['Referente del rubro lanas y confección.', 'Dos locales estratégicos (Palermo y Lomas de Zamora).', 'Liderazgo resiliente en economías complejas.'].map((b, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '18px', fontSize: '13px', color: 'rgba(237, 232, 223, 0.8)', marginBottom: '7px', lineHeight: 1.4 }}>
                      <span style={{ position: 'absolute', left: '4px', color: '#D4AF37', fontWeight: 'bold' }}>•</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', padding: '12px 14px', background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.35)', borderRadius: '10px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '1px', color: '#D4AF37', textTransform: 'uppercase', lineHeight: 1.35, textAlign: 'center' }}>
                    EMPRENDER CUANDO LA TEORÍA SE TERMINA
                  </div>
                </div>
                <p style={{ fontSize: '12.5px', lineHeight: 1.5, color: 'rgba(237, 232, 223, 0.7)', margin: 0 }}>
                  Charla motivacional basada en su trayectoria de más de 25 años construyendo y sosteniendo una empresa en el mercado argentino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ TE LLEVAS SECTION */}
      <section style={{
        padding: '90px 20px',
        background: 'linear-gradient(180deg, #080808 0%, #100C05 50%, #080808 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3.5px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
              QUÉ TE LLEVÁS
            </div>
            <h2 className="mm-font-serif" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              Ideas que podés <span className="mm-gold-gradient">implementar.</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(237, 232, 223, 0.7)', maxWidth: '600px', margin: '0 auto' }}>
              Vas a salir del evento con herramientas concretas, inspiración y contactos para seguir haciendo crecer tu negocio.
            </p>
          </div>

          <div className="mm-takeaways-grid">
            {[
              { icon: '💻', title: 'Herramientas prácticas de IA', desc: 'Aplicadas directamente a tus redes sociales y flujos de ventas.' },
              { icon: '📊', title: 'Casos reales y métricas', desc: 'De campañas publicitarias y negocios implementados con éxito.' },
              { icon: '🧠', title: 'Estrategias de neuroventas', desc: 'Y neuromarketing para entender cómo toma decisiones tu cliente.' },
              { icon: '👤', title: 'Construcción de marca personal', desc: 'Cómo humanizar tu comunicación para generar autoridad y confianza.' },
              { icon: '👥', title: 'Networking de alto valor', desc: 'Conexión con otros dueños de negocio, comerciantes y emprendedores.' },
            ].map((t, idx) => (
              <div key={idx} className="mm-card-hover" style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '14px',
                padding: '24px 18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  marginBottom: '16px',
                }}>
                  {t.icon}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>{t.title}</div>
                <div style={{ fontSize: '12px', color: 'rgba(237, 232, 223, 0.65)', lineHeight: 1.45 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA SECTION */}
      <section id="agenda" style={{ padding: '90px 20px', background: '#080808' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="mm-agenda-grid">
            <div style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.25)' }}>
              <img src="/events_new/agenda-auditorium.jpg" alt="Auditorio de conferencias" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'brightness(0.9)' }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.85) 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '28px',
              }}>
                <div className="mm-font-serif" style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>Ideas reales para negocios reales.</div>
                <div style={{ fontSize: '12px', color: '#D4AF37', letterSpacing: '1px', textTransform: 'uppercase' }}>Herramientas que podés aplicar desde el día siguiente</div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', letterSpacing: '3.5px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
                AGENDA DEL EVENTO
              </div>
              <h2 className="mm-font-serif" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px' }}>
                Un día, <span className="mm-gold-gradient">todo lo que necesitás.</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { time: '10:00', title: 'Apertura: Neuroventas y marketing con IA', desc: 'Anthony Sánchez Altuna — Inteligencia artificial aplicada a redes, anuncios, creación de contenido y neuroventas.' },
                  { time: '13:00', title: 'Break & Networking (1 hora)', desc: 'Almuerzo libre y espacio para conectar con otros asistentes y speakers.' },
                  { time: '14:00', title: 'Bloque especial: Trayectoria & Mentalidad', desc: 'Christian Cencherle: Charla motivacional para empresarios (más de 25 años de trayectoria). Fede Nowback: Marca personal, mentalidad y cómo vender desde redes sociales.' },
                  { time: '17:00', title: 'Cierre del evento', desc: 'Conclusiones finales, ronda de preguntas y oferta especial para asistentes.' },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '18px 20px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(212, 175, 55, 0.15)',
                    borderRadius: '12px',
                  }}>
                    <div style={{
                      padding: '6px 12px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid rgba(212, 175, 55, 0.35)',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '13px',
                      color: '#D4AF37',
                      whiteSpace: 'nowrap',
                    }}>
                      {item.time}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ fontSize: '12.5px', color: 'rgba(237, 232, 223, 0.7)', lineHeight: 1.4, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / ENTRADAS SECTION */}
      <section id="entradas" style={{
        padding: '90px 20px',
        background: 'linear-gradient(180deg, #080808 0%, #150E06 50%, #080808 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '3.5px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
              TU INVERSIÓN
            </div>
            <h2 className="mm-font-serif" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
              Asegurá tu lugar <span className="mm-gold-gradient">antes del 30 de septiembre.</span>
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(237, 232, 223, 0.7)', maxWidth: '540px', margin: '0 auto' }}>
              Evento presencial con cupos estrictamente limitados para garantizar una experiencia personalizada.
            </p>
          </div>

          <div className="mm-pricing-grid">
            {/* Preventa Card */}
            <div style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, rgba(20, 20, 20, 0.95) 75%)',
              border: '2px solid #D4AF37',
              borderRadius: '18px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 16px 50px rgba(212, 175, 55, 0.2)',
            }}>
              <div style={{
                position: 'absolute',
                top: '-13px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, #ECC868 0%, #D4AF37 50%, #9E7915 100%)',
                color: '#080808',
                fontSize: '10px',
                fontWeight: 900,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '5px 16px',
                borderRadius: '9999px',
                whiteSpace: 'nowrap',
              }}>
                ⭐ PREVENTA EXCLUSIVA
              </div>
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '2px', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '6px' }}>
                PREVENTA
              </div>
              <div style={{ fontSize: '11.5px', color: 'rgba(237, 232, 223, 0.55)', marginBottom: '20px' }}>
                HASTA EL 30 DE SEPTIEMBRE
              </div>
              <div style={{ fontSize: '16px', textDecoration: 'line-through', color: 'rgba(237, 232, 223, 0.4)', marginBottom: '2px' }}>
                $200.000
              </div>
              <div className="mm-font-serif mm-gold-gradient" style={{ fontSize: '42px', fontWeight: 800, lineHeight: 1, marginBottom: '8px' }}>
                $150.000
              </div>
              <div style={{
                display: 'inline-block',
                fontSize: '11px',
                fontWeight: 700,
                color: '#22C55E',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                padding: '3px 10px',
                borderRadius: '9999px',
                marginBottom: '24px',
                alignSelf: 'flex-start',
              }}>
                Ahorrás $50.000
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', marginTop: 'auto' }}>
                {[
                  'Acceso a la jornada completa (10 a 17 hs)',
                  'Las 3 charlas y talleres de los speakers',
                  'Acceso a sesión de networking',
                  'Material complementario digital',
                  'Certificado de asistencia',
                ].map((f, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '20px', fontSize: '12.5px', color: 'rgba(237, 232, 223, 0.8)', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D4AF37', fontWeight: 'bold' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/5491170610766?text=Hola%2C%20quiero%20reservar%20mi%20lugar%20con%20precio%20de%20PREVENTA%20($150.000)%20para%20el%20evento%20Mentalidad%20y%20Marketing%20del%2010%20de%20octubre." target="_blank" rel="noopener noreferrer" className="mm-btn-gold" style={{ width: '100%' }}>
                Quiero mi entrada →
              </a>
            </div>

            {/* Precio General Card */}
            <div style={{
              background: 'rgba(20, 20, 20, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '18px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '2px', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '6px' }}>
                PRECIO DE LISTA
              </div>
              <div style={{ fontSize: '11.5px', color: 'rgba(237, 232, 223, 0.55)', marginBottom: '20px' }}>
                DESDE EL 1 DE OCTUBRE
              </div>
              <div style={{ height: '22px' }} />
              <div className="mm-font-serif" style={{ fontSize: '42px', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, marginBottom: '8px' }}>
                $200.000
              </div>
              <div style={{ fontSize: '12px', color: 'rgba(237, 232, 223, 0.5)', marginBottom: '24px' }}>
                Precio regular
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', marginTop: 'auto' }}>
                {[
                  'Acceso a la jornada completa (10 a 17 hs)',
                  'Las 3 charlas y talleres de los speakers',
                  'Acceso a sesión de networking',
                  'Material complementario digital',
                ].map((f, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '20px', fontSize: '12.5px', color: 'rgba(237, 232, 223, 0.8)', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D4AF37', fontWeight: 'bold' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/5491170610766?text=Hola%2C%20quiero%20consultar%20por%20entradas%20para%20el%20evento%20Mentalidad%20y%20Marketing%20del%2010%20de%20octubre." target="_blank" rel="noopener noreferrer" className="mm-btn-gold" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', border: '1px solid rgba(212, 175, 55, 0.4)', boxShadow: 'none' }}>
                Consultar entrada
              </a>
            </div>

            {/* Comunidad Fede Nowback Card */}
            <div style={{
              background: 'rgba(20, 20, 20, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              borderRadius: '18px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '2px', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '6px' }}>
                COMUNIDAD FEDE NOWBACK
              </div>
              <div style={{ fontSize: '11.5px', color: 'rgba(237, 232, 223, 0.55)', marginBottom: '20px' }}>
                BENEFICIO PARA ALUMNOS / SEGUIDORES
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#D4AF37', margin: '18px 0 8px' }}>
                Valor Especial
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(237, 232, 223, 0.7)', lineHeight: 1.5, marginBottom: '24px' }}>
                Si formás parte de la comunidad de Fede Nowback, accedés a un descuento exclusivo para el evento.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', marginTop: 'auto' }}>
                {[
                  'Acceso completo a toda la jornada',
                  'Descuento exclusivo de comunidad',
                  'Ubicaciones preferenciales',
                ].map((f, i) => (
                  <li key={i} style={{ position: 'relative', paddingLeft: '20px', fontSize: '12.5px', color: 'rgba(237, 232, 223, 0.8)', marginBottom: '8px' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#D4AF37', fontWeight: 'bold' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/5491170610766?text=Hola%2C%20soy%20de%20la%20comunidad%20de%20Fede%20Nowback%20y%20quiero%20mi%20descuento%20especial%20para%20el%20evento%20del%2010%20de%20octubre." target="_blank" rel="noopener noreferrer" className="mm-btn-gold" style={{ background: 'rgba(212, 175, 55, 0.15)', color: '#D4AF37', border: '1px solid rgba(212, 175, 55, 0.5)', boxShadow: 'none' }}>
                Consultá para acceder →
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div style={{
            marginTop: '36px',
            padding: '16px 20px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: '11px', letterSpacing: '2px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>
              MEDIOS DE PAGO:
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(237, 232, 223, 0.8)' }}><span>💵</span> Efectivo</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(237, 232, 223, 0.8)' }}><span>🏦</span> Transferencia</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(237, 232, 223, 0.8)' }}><span>💳</span> Tarjeta de crédito / débito</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(237, 232, 223, 0.8)' }}><span>💻</span> Pago online</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '90px 20px', background: '#080808' }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div className="mm-faq-grid">
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '3.5px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
                PREGUNTAS FRECUENTES
              </div>
              <h2 className="mm-font-serif" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>
                Todo lo que<br />
                <span className="mm-gold-gradient">necesitás saber.</span>
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(237, 232, 223, 0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                ¿Tenés alguna consulta puntual? Escribinos por WhatsApp y te asesoramos al instante.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mm-btn-gold" style={{ fontSize: '13px', padding: '12px 24px' }}>
                💬 Chatear al +54 9 11 7061-0766
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { q: '¿Dónde se realiza el evento?', a: 'El evento se realizará en Lavalle 362, Piso 7, Microcentro, Ciudad Autónoma de Buenos Aires. En una sala moderna y equipada con todas las comodidades.' },
                { q: '¿Qué incluye la entrada?', a: 'Incluye el acceso completo a la jornada presencial (10:00 a 17:00 hs), las exposiciones de Anthony Altuna, Fede Nowback y Christian Cencherle, espacio de networking y material digital descargable.' },
                { q: '¿Puedo cancelar o transferir mi inscripción?', a: 'Las entradas son transferibles notificando por WhatsApp hasta 48 horas antes del evento con los datos del nuevo asistente.' },
                { q: '¿Hay estacionamiento cerca?', a: 'Sí, hay múltiples cocheras y estacionamientos privados sobre Lavalle, Corrientes, Florida y San Martín a pocos metros del lugar.' },
                { q: '¿A quién está dirigido?', a: 'A dueños de negocio, comerciantes, profesionales independientes, emprendedores y líderes comerciales que quieran potenciar sus ventas usando redes sociales, marca personal e inteligencia artificial.' },
                { q: '¿Cómo se realiza el pago?', a: 'Podés abonar por transferencia bancaria directa en pesos, tarjeta de crédito/débito o en efectivo. Al contactarnos por WhatsApp te enviamos los datos de pago al instante.' },
              ].map((faq, idx) => (
                <div key={idx} style={{
                  background: activeFaq === idx ? 'rgba(212, 175, 55, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                  border: activeFaq === idx ? '1px solid rgba(212, 175, 55, 0.5)' : '1px solid rgba(212, 175, 55, 0.18)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'all 0.2s',
                }}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      background: 'none',
                      border: 'none',
                      color: '#FFFFFF',
                      fontSize: '14.5px',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{
                      color: '#D4AF37',
                      fontSize: '20px',
                      transform: activeFaq === idx ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.25s ease',
                    }}>+</span>
                  </button>
                  {activeFaq === idx && (
                    <div style={{
                      padding: '0 20px 20px 20px',
                      fontSize: '13.5px',
                      lineHeight: 1.6,
                      color: 'rgba(237, 232, 223, 0.75)',
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA & CLOSING BANNER */}
      <section style={{
        position: 'relative',
        padding: '100px 20px',
        background: 'linear-gradient(180deg, #080808 0%, #150E06 50%, #080808 100%)',
        overflow: 'hidden',
        textAlign: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/events_new/footer-audience.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '3.5px', color: '#D4AF37', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
            ◆ SÁBADO 10 DE OCTUBRE · CABA ◆
          </div>
          <h2 className="mm-font-serif" style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', lineHeight: 1.1, fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>
            Tu negocio también puede<br />
            <span className="mm-gold-gradient">ir más lejos.</span>
          </h2>
          <p style={{ fontSize: '15.5px', color: 'rgba(237, 232, 223, 0.75)', marginBottom: '32px', lineHeight: 1.6 }}>
            Un día para inspirarte, aprender herramientas prácticas y conectar con personas que impulsan sus proyectos todos los días.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#entradas" className="mm-btn-gold" style={{ fontSize: '16px', padding: '18px 44px' }}>
              Quiero mi entrada →
            </a>
          </div>

          <div style={{ marginTop: '24px', fontSize: '14px', color: 'rgba(212, 175, 55, 0.85)', fontWeight: 600 }}>
            💬 WhatsApp Oficial: +54 9 11 7061-0766
          </div>

          {/* Organizers */}
          <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
            <div style={{ fontSize: '10.5px', letterSpacing: '3px', color: 'rgba(212, 175, 55, 0.8)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '20px' }}>
              ORGANIZAN
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px', flexWrap: 'wrap' }}>
              <div className="mm-font-cinzel" style={{ fontSize: '15px', letterSpacing: '1.5px', color: 'rgba(237, 232, 223, 0.7)', fontWeight: 600 }}>
                GEN · Gestión de Negocios
              </div>
              <div className="mm-font-cinzel" style={{ fontSize: '15px', letterSpacing: '1.5px', color: 'rgba(237, 232, 223, 0.7)', fontWeight: 600 }}>
                TecnoBrain
              </div>
              <div className="mm-font-cinzel" style={{ fontSize: '15px', letterSpacing: '1.5px', color: 'rgba(237, 232, 223, 0.7)', fontWeight: 600 }}>
                Cencherle Lanas
              </div>
              <div className="mm-font-cinzel" style={{ fontSize: '15px', letterSpacing: '1.5px', color: 'rgba(237, 232, 223, 0.7)', fontWeight: 600 }}>
                Fede Nowback
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '28px 20px',
        background: '#040404',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center',
        fontSize: '12px',
        color: 'rgba(237, 232, 223, 0.4)',
      }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <p style={{ margin: 0 }}>© 2026 · Mentalidad y Marketing — Neuroventas con IA · Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="mm-mobile-sticky" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99,
        background: 'rgba(10, 10, 10, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
        padding: '12px 16px',
        boxShadow: '0 -8px 25px rgba(0, 0, 0, 0.8)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '9.5px', color: '#D4AF37', textTransform: 'uppercase', fontWeight: 700 }}>PREVENTA 10 OCT</span>
            <span className="mm-font-serif" style={{ fontSize: '18px', fontWeight: 800, color: '#FFFFFF' }}>$150.000</span>
          </div>
          <a href="#entradas" className="mm-btn-gold" style={{ padding: '10px 20px', fontSize: '13px' }}>
            Reservar →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentalidadMarketingPage;
