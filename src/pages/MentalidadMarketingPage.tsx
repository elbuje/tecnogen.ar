import React, { useState, useEffect } from 'react';

export const MentalidadMarketingPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    document.title = 'Mentalidad y Marketing — Neuroventas con IA | Evento Presencial 10 de Octubre';

    const eventDate = new Date('2026-10-10T10:00:00-03:00');
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff <= 0) { clearInterval(timer); return; }
      setTimeLeft({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = 'https://wa.me/5491170610766?text=Hola%2C%20quiero%20reservar%20mi%20lugar%20en%20el%20evento%20Mentalidad%20y%20Marketing%20-%20Neuroventas%20con%20IA%20del%2010%20de%20octubre.';

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: '#0a0a0a', color: '#f5f0e8', minHeight: '100vh' }}>

      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1208 50%, #0a0a0a 100%)',
      }}>
        {/* Flyer grupal como fondo difuminado */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/events/flyer-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.18,
          filter: 'blur(2px)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.3) 40%, rgba(10,10,10,0.85) 100%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '120px 24px 60px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            border: '1px solid rgba(212,175,55,0.5)',
            color: '#d4af37',
            fontSize: '11px',
            letterSpacing: '4px',
            padding: '8px 24px',
            marginBottom: '32px',
            textTransform: 'uppercase',
          }}>
            EVENTO PRESENCIAL · CUPOS LIMITADOS
          </div>

          <h1 style={{
            fontSize: 'clamp(42px, 8vw, 90px)',
            lineHeight: 1.05,
            margin: '0 0 8px',
            fontWeight: 700,
            color: '#f5f0e8',
          }}>
            Mentalidad y Marketing
          </h1>
          <h2 style={{
            fontSize: 'clamp(26px, 5vw, 54px)',
            fontWeight: 400,
            margin: '0 0 32px',
            background: 'linear-gradient(90deg, #d4af37, #f5d680, #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontStyle: 'italic',
          }}>
            Neuroventas con IA
          </h2>

          <p style={{
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.6)',
            marginBottom: '48px',
          }}>
            Para dueños de negocio y emprendedores
          </p>

          {/* Info del evento */}
          <div style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '56px',
          }}>
            {[
              { icon: '📅', label: '10 de Octubre' },
              { icon: '🕙', label: '10:00 a 17:00 hs', sub: 'Break 13 a 14 hs' },
              { icon: '📍', label: 'Lavalle 362, Piso 7', sub: 'Microcentro, CABA' },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '12px',
                padding: '16px 24px',
                textAlign: 'center',
                minWidth: '160px',
              }}>
                <div style={{ fontSize: '24px', marginBottom: '6px' }}>{item.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#f5f0e8' }}>{item.label}</div>
                {item.sub && <div style={{ fontSize: '12px', color: 'rgba(212,175,55,0.7)', marginTop: '2px' }}>{item.sub}</div>}
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '3px', color: 'rgba(212,175,55,0.6)', textTransform: 'uppercase', marginBottom: '16px' }}>El evento comienza en</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { val: timeLeft.dias, label: 'Días' },
                { val: timeLeft.horas, label: 'Horas' },
                { val: timeLeft.minutos, label: 'Min' },
                { val: timeLeft.segundos, label: 'Seg' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(212,175,55,0.4)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  minWidth: '80px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '36px', fontWeight: 700, color: '#d4af37', lineHeight: 1 }}>
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'rgba(245,240,232,0.5)', textTransform: 'uppercase', marginTop: '6px' }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #d4af37 0%, #f5d680 50%, #d4af37 100%)',
              color: '#0a0a0a',
              fontWeight: 700,
              fontSize: '16px',
              letterSpacing: '1px',
              padding: '18px 48px',
              borderRadius: '60px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              boxShadow: '0 8px 32px rgba(212,175,55,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(212,175,55,0.6)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(212,175,55,0.4)';
            }}
          >
            Reservá tu lugar →
          </a>
          <p style={{ marginTop: '16px', fontSize: '13px', color: 'rgba(245,240,232,0.4)' }}>
            Escribinos por WhatsApp · +54 9 11 7061-0766
          </p>
        </div>
      </section>

      {/* SPEAKERS */}
      <section style={{ padding: '100px 24px', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#d4af37', textTransform: 'uppercase', marginBottom: '16px' }}>
              Los que van a transformar tu negocio
            </p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, margin: 0 }}>
              Conocé a los Speakers
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}>
            {/* Fede Nowback */}
            <SpeakerCard
              flyerSrc="/events/flyer-principal.jpg"
              name="Fede Nowback"
              topic="Marca personal y mentalidad"
              pillars={['Marca personal que vende', 'Mentalidad y autoconfianza', 'Cómo vender desde redes sociales']}
              color="#d4af37"
            />
            {/* Anthony Altuna */}
            <SpeakerCard
              flyerSrc="/events/speaker-anthony.jpg"
              name="Anthony Altuna"
              topic="Neuroventas y marketing con IA"
              pillars={['IA aplicada a redes y ventas', 'Casos reales y métricas', 'Neuroventas para convertir más']}
              color="#d4af37"
            />
            {/* Christian Cencherle */}
            <SpeakerCard
              flyerSrc="/events/speaker-christian.jpg"
              name="Christian Cencherle"
              topic="Charla motivacional para empresarios"
              pillars={['Más de 25 años de experiencia', 'Aprendizajes de negocio reales', 'Mentalidad para crecer y sostenerse']}
              color="#d4af37"
            />
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section style={{ padding: '100px 24px', background: '#080808' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#d4af37', textTransform: 'uppercase', marginBottom: '16px' }}>
              Programa de la jornada
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, margin: 0 }}>
              Agenda del 10 de Octubre
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Línea vertical */}
            <div style={{
              position: 'absolute',
              left: '88px',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.4), transparent)',
            }} />

            {[
              { hora: '10:00', titulo: 'Marca personal y mentalidad', speaker: 'Fede Nowback', icon: '🎯' },
              { hora: 'Bloque especial', titulo: 'Charla motivacional para empresarios', speaker: 'Christian Cencherle', icon: '🔥' },
              { hora: '13:00', titulo: 'Break', speaker: '', icon: '☕' },
              { hora: '14:00', titulo: 'Neuroventas y marketing con IA', speaker: 'Anthony Altuna', icon: '🤖' },
              { hora: '17:00', titulo: 'Fin del evento', speaker: '', icon: '🏁' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'flex-start',
                marginBottom: '32px',
                position: 'relative',
              }}>
                {/* Hora */}
                <div style={{
                  minWidth: '88px',
                  textAlign: 'right',
                  paddingTop: '18px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#d4af37',
                  letterSpacing: '0.5px',
                  flexShrink: 0,
                }}>
                  {item.hora}
                </div>

                {/* Dot */}
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: '16px',
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#d4af37',
                    boxShadow: '0 0 12px rgba(212,175,55,0.6)',
                    flexShrink: 0,
                  }} />
                </div>

                {/* Contenido */}
                <div style={{
                  flex: 1,
                  background: item.titulo === 'Break' ? 'rgba(212,175,55,0.05)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${item.titulo === 'Break' ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '12px',
                  padding: '16px 20px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: item.speaker ? '4px' : 0 }}>
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span style={{ fontSize: '17px', fontWeight: 600, color: '#f5f0e8' }}>{item.titulo}</span>
                  </div>
                  {item.speaker && (
                    <p style={{ margin: 0, fontSize: '13px', color: 'rgba(212,175,55,0.7)', paddingLeft: '28px' }}>
                      {item.speaker}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLYER SECTION - Los flyers tal como los subiste */}
      <section style={{ padding: '80px 24px', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, margin: 0 }}>
              El evento que estabas esperando
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'start',
          }}>
            <img
              src="/events/flyer-agenda.jpg"
              alt="Agenda del evento - Mentalidad y Marketing Neuroventas con IA"
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
            />
            <img
              src="/events/flyer-cierre.jpg"
              alt="Te esperamos el 10 de octubre - Mentalidad y Marketing"
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
            />
            <img
              src="/events/flyer-christian.jpg"
              alt="Flyer Mentalidad y Marketing Neuroventas con IA"
              style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{
        padding: '100px 24px',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1208 50%, #0a0a0a 100%)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/events/flyer-cierre.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(212,175,55,0.15)',
            border: '1px solid rgba(212,175,55,0.4)',
            color: '#d4af37',
            fontSize: '11px',
            letterSpacing: '3px',
            padding: '8px 20px',
            borderRadius: '60px',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}>
            Cupos limitados
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            margin: '0 0 16px',
            lineHeight: 1.1,
          }}>
            Te esperamos el<br />
            <span style={{
              background: 'linear-gradient(90deg, #d4af37, #f5d680)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>10 de Octubre</span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: 'rgba(245,240,232,0.6)',
            marginBottom: '12px',
          }}>
            Lavalle 362, Piso 7 · Microcentro, CABA
          </p>
          <p style={{
            fontSize: '14px',
            color: 'rgba(245,240,232,0.4)',
            marginBottom: '48px',
          }}>
            10:00 a 17:00 hs (Break de 13 a 14 hs)
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #d4af37 0%, #f5d680 50%, #d4af37 100%)',
              color: '#0a0a0a',
              fontWeight: 800,
              fontSize: '18px',
              letterSpacing: '1px',
              padding: '20px 56px',
              borderRadius: '60px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              boxShadow: '0 12px 40px rgba(212,175,55,0.5)',
            }}
          >
            Reservá tu lugar →
          </a>

          <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ fontSize: '20px' }}>💬</span>
            <span style={{ fontSize: '15px', color: 'rgba(212,175,55,0.8)', fontWeight: 600 }}>
              +54 9 11 7061-0766
            </span>
          </div>
          <p style={{ marginTop: '8px', fontSize: '12px', color: 'rgba(245,240,232,0.3)', letterSpacing: '1px' }}>
            Escribinos para más información
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '32px 24px',
        background: '#000',
        textAlign: 'center',
        borderTop: '1px solid rgba(212,175,55,0.15)',
      }}>
        <p style={{ margin: 0, fontSize: '13px', color: 'rgba(245,240,232,0.3)' }}>
          © 2026 · Mentalidad y Marketing — Neuroventas con IA · Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

// Componente card de speaker
const SpeakerCard: React.FC<{
  flyerSrc: string;
  name: string;
  topic: string;
  pillars: string[];
  color: string;
}> = ({ flyerSrc, name, topic, pillars, color }) => {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(212,175,55,0.2)',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'transform 0.3s, box-shadow 0.3s',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(212,175,55,0.2)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
    }}
    >
      {/* Flyer del speaker */}
      <div style={{ position: 'relative', paddingBottom: '177%', overflow: 'hidden' }}>
        <img
          src={flyerSrc}
          alt={`${name} - ${topic}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 6px', color: '#f5f0e8' }}>{name}</h3>
        <p style={{ margin: '0 0 20px', fontSize: '14px', color: color, fontStyle: 'italic' }}>{topic}</p>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {pillars.map((p, i) => (
            <li key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13px',
              color: 'rgba(245,240,232,0.7)',
              marginBottom: '8px',
            }}>
              <span style={{ color: color, fontSize: '16px' }}>◆</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
