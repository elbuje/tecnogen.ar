<?php
/**
 * View: Páginas Web y Landing Pages para Emprendedores
 * TecnoGen - https://tecnogen.ar/paginas-web-para-emprendedores
 */
$current_slug = 'paginas-web-para-emprendedores';
$page_data = [
    'title' => 'Páginas Web y Landing Pages para Emprendedores | TecnoGen',
    'description' => '¿Por qué tu emprendimiento necesita una página web si ya vendés por Instagram? Descubrí cómo aparecer en Google cuando la gente busca comprar y canalizá clientes a tu WhatsApp 24/7.',
    'keywords' => 'paginas web para emprendedores, landing page argentina, diseño web emprendimientos, vender en google whatsapp, crear pagina web pymes, tecnogen',
    'service_name' => 'Páginas Web & Landing Pages para Emprendedores'
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <?php render_seo_head($page_data); ?>
  <style>
    /* Estilos propios de la Landing Emprendedores */
    .tg-infografia-wrapper {
      background: linear-gradient(145deg, #0F172A 0%, #1E293B 100%);
      border-radius: 20px;
      padding: 40px 30px;
      color: #FFFFFF;
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
      position: relative;
      overflow: hidden;
      margin: 35px 0 50px;
      border: 1px solid rgba(255,255,255,0.08);
    }

    .tg-infografia-title {
      text-align: center;
      margin-bottom: 30px;
    }

    .tg-infografia-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      position: relative;
    }

    @media (max-width: 820px) {
      .tg-infografia-grid { grid-template-columns: 1fr; gap: 25px; }
    }

    .tg-info-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      padding: 24px;
      transition: all 0.3s ease;
      position: relative;
    }

    .tg-info-card:hover {
      transform: translateY(-4px);
      background: rgba(255,255,255,0.07);
    }

    .tg-info-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      font-weight: 800;
      padding: 5px 12px;
      border-radius: 9999px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    /* Animación de pulso */
    .tg-pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #22C55E;
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
      animation: pulseGreen 2s infinite;
      display: inline-block;
    }

    @keyframes pulseGreen {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
    }

    /* Animación del embudo de pasos */
    .tg-flow-step {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 16px;
      position: relative;
    }

    .tg-flow-step:last-child {
      margin-bottom: 0;
    }

    .tg-flow-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    /* Estilos del Widget Escáner */
    .tg-scanner-card {
      background: #FFFFFF;
      border: 1px solid var(--light-border);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.06);
      margin: 40px 0;
    }

    .tg-quick-chip {
      background: #F1F5F9;
      border: 1px solid #CBD5E1;
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.82rem;
      font-weight: 600;
      color: #334155;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-block;
      margin: 4px 2px;
    }

    .tg-quick-chip:hover, .tg-quick-chip.active {
      background: #2563EB;
      color: #FFFFFF;
      border-color: #2563EB;
    }

    /* Comparativa Table */
    .tg-compare-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      border-radius: 12px;
      overflow: hidden;
      margin: 30px 0;
      border: 1px solid var(--light-border);
      background: #FFFFFF;
    }

    .tg-compare-table th {
      padding: 16px 20px;
      font-weight: 800;
      font-size: 0.95rem;
      text-align: left;
    }

    .tg-compare-table td {
      padding: 16px 20px;
      border-top: 1px solid var(--light-border);
      font-size: 0.9rem;
      color: #334155;
      vertical-align: top;
    }

    @media (max-width: 640px) {
      .tg-compare-table th, .tg-compare-table td { padding: 12px; font-size: 0.82rem; }
      .tg-scanner-card { padding: 24px 18px; }
    }
  </style>
</head>
<body>
  <?php require __DIR__ . '/layout/header.php'; ?>

  <!-- Hero Section -->
  <section class="tg-hero">
    <div class="tg-container">
      <div class="tg-breadcrumb">
        <a href="/">Inicio</a> <span class="tg-sep">/</span> <span class="tg-current">Páginas Web para Emprendedores</span>
      </div>

      <div class="tg-hero-grid">
        <div>
          <div class="tg-badge tg-badge-blue" style="margin-bottom: 18px;">
            ✦ DEJA DE DEPENDER EXCLUSIVAMENTE DEL ALGORITMO
          </div>
          <h1 class="tg-hero-title">
            ¿Por qué tu emprendimiento necesita una <span class="tg-gradient-text">página web</span> si ya vendés por Instagram?
          </h1>
          <p class="tg-hero-subtitle">
            En las redes sociales la gente entra a entretenerse. En <strong>Google</strong> entran cuando ya decidieron comprar. Creamos tu Landing Page rápida, profesional y optimizada para que te encuentren en tu zona y te pidan presupuesto directo por WhatsApp las 24 horas.
          </p>
          <div class="tg-hero-cta">
            <a href="#escaner-google" class="tg-btn tg-btn-primary">
              🚀 Probar Escáner de Búsquedas en Google →
            </a>
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero consultar por el diseño de una Landing Page para mi emprendimiento.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-secondary">
              💬 Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div>
          <!-- Tarjeta de Contraste Rápido -->
          <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 32px; box-shadow: var(--shadow-sm);">
            <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 1.5px; color: var(--primary); text-transform: uppercase; margin-bottom: 10px;">
              EL DILEMA DEL EMPRENDEDOR ACTUAL
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">
              Muchos emprendedores publican todos los días, pero...
            </h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.92rem; color: var(--text-muted);">
              <li style="display: flex; align-items: flex-start; gap: 10px;">
                <span style="color: #EF4444; font-weight: 900; font-size: 1.1rem;">✗</span>
                <span>Si no subís historias hoy, tus consultas caen a cero.</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px;">
                <span style="color: #EF4444; font-weight: 900; font-size: 1.1rem;">✗</span>
                <span>Tus publicaciones compiten contra memes, noticias y videos de baile.</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 10px;">
                <span style="color: #22C55E; font-weight: 900; font-size: 1.1rem;">✓</span>
                <span><strong>En Google nadie busca por aburrimiento:</strong> quien escribe <em>"Tortas en Zona Norte"</em> o <em>"Service de aire en Pilar"</em> busca comprar ya.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =========================================================================
       INFOGRAFÍA INTERACTIVA CON MOVIMIENTO: EL CAMINO DE LA COMPRA
       ========================================================================= -->
  <section class="tg-section" style="padding-top: 20px;">
    <div class="tg-container">
      
      <div class="tg-infografia-wrapper">
        <!-- Fondo con efecto Glow -->
        <div style="position: absolute; top: -50px; right: -50px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(37,99,235,0.25) 0%, rgba(0,0,0,0) 70%); pointer-events: none;"></div>

        <div class="tg-infografia-title">
          <span class="tg-info-badge" style="background: rgba(37,99,235,0.25); color: #38BDF8;">
            <span class="tg-pulse-dot"></span> INFOGRAFÍA EXPLICATIVA EN VIVO
          </span>
          <h2 style="font-size: 1.7rem; font-weight: 900; color: #FFFFFF; margin: 8px 0;">
            ¿Cómo compra un cliente hoy en Internet?
          </h2>
          <p style="font-size: 0.95rem; color: #94A3B8; max-width: 650px; margin: 0 auto;">
            Mirá la diferencia exacta entre intentar vender únicamente por redes sociales versus tener tu propia web posicionada en Google:
          </p>
        </div>

        <div class="tg-infografia-grid">
          <!-- Columna A: Redes Sociales -->
          <div class="tg-info-card" style="border-left: 4px solid #F59E0B;">
            <div class="tg-info-badge" style="background: rgba(245, 158, 11, 0.2); color: #FBBF24;">
              📱 CAMINO 1: SOLO REDES SOCIALES (ATENCIÓN DISPERSA)
            </div>
            
            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #334155; color: #FBBF24;">1</div>
              <div>
                <strong style="color: #FFFFFF; font-size: 0.92rem; display: block;">El usuario está descansando</strong>
                <span style="font-size: 0.85rem; color: #94A3B8;">Hace scroll en Instagram o TikTok buscando entretenimiento, amigos o videos cortos.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #334155; color: #FBBF24;">2</div>
              <div>
                <strong style="color: #FFFFFF; font-size: 0.92rem; display: block;">Ve una publicación tuya</strong>
                <span style="font-size: 0.85rem; color: #94A3B8;">Le gusta la foto o te deja un 'like', pero no necesariamente necesita contratarte hoy.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #334155; color: #FBBF24;">3</div>
              <div>
                <strong style="color: #FFFFFF; font-size: 0.92rem; display: block;">Llega una notificación y se va</strong>
                <span style="font-size: 0.85rem; color: #94A3B8;">Le entra un mensaje de un amigo, cambia de video y tu publicación quedó en el olvido.</span>
              </div>
            </div>

            <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.82rem; color: #F59E0B;">
              ⚠️ <strong>Resultado:</strong> Requiere publicar sin parar para mantener la atención. Si frenás, la venta frena.
            </div>
          </div>

          <!-- Columna B: Google + Tu Landing Web -->
          <div class="tg-info-card" style="border-left: 4px solid #22C55E; background: rgba(34, 197, 94, 0.05);">
            <div class="tg-info-badge" style="background: rgba(34, 197, 94, 0.2); color: #4ADE80;">
              🔍 CAMINO 2: GOOGLE + TU LANDING PAGE (INTENCIÓN PURA)
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #14532D; color: #4ADE80;">1</div>
              <div>
                <strong style="color: #FFFFFF; font-size: 0.92rem; display: block;">El cliente tiene una necesidad urgente</strong>
                <span style="font-size: 0.85rem; color: #94A3B8;">Se le rompió el aire, necesita una torta para el sábado o busca un servicio profesional en su zona.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #14532D; color: #4ADE80;">2</div>
              <div>
                <strong style="color: #FFFFFF; font-size: 0.92rem; display: block;">Abre Google y busca con intención de compra</strong>
                <span style="font-size: 0.85rem; color: #94A3B8;">Escribe: <em>"Manicura a domicilio en Pilar"</em> o <em>"Service de aire en Escobar"</em>.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #14532D; color: #4ADE80;">3</div>
              <div>
                <strong style="color: #FFFFFF; font-size: 0.92rem; display: block;">Aterriza en tu Web y toca WhatsApp</strong>
                <span style="font-size: 0.85rem; color: #94A3B8;">Ve tus fotos de trabajos, precios claros y un botón para pedirte presupuesto de inmediato.</span>
              </div>
            </div>

            <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.82rem; color: #4ADE80;">
              ✨ <strong>Resultado:</strong> Clientes calificados que no te conocían te encuentran justo cuando necesitan pagar.
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- =========================================================================
       SECCIÓN EDUCATIVA: ¿PARA QUÉ SIRVE Y QUÉ ES UNA LANDING PAGE?
       ========================================================================= -->
  <section class="tg-section" style="background: #FFFFFF; border-top: 1px solid var(--light-border); border-bottom: 1px solid var(--light-border);">
    <div class="tg-container" style="max-width: 960px;">
      
      <div style="text-align: center; max-width: 760px; margin: 0 auto 40px;">
        <span class="tg-badge tg-badge-blue" style="margin-bottom: 12px;">CLARIDAD TOTAL PARA EMPRENDEDORES</span>
        <h2 style="font-size: 1.8rem; font-weight: 900; color: #0F172A; margin-bottom: 12px;">
          ¿Para qué sirve realmente una página web o Landing Page?
        </h2>
        <p style="font-size: 1rem; color: #64748B; line-height: 1.6;">
          Una página web es como tener tu propio local comercial abierto en Internet las <strong>24 horas, los 365 días del año</strong>. No tenés que ser una multinacional para aprovecharla: los emprendimientos chicos y medianos son los que más rápido multiplican sus consultas.
        </p>
      </div>

      <!-- Cuadrícula de 4 Pilares -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 40px;">
        
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 26px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🏪</div>
          <h3 style="font-size: 1.1rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Tu negocio abierto 24/7</h3>
          <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
            Mostrás lo que vendés, contás quién sos, publicás fotos de tus trabajos, tus listas de precios y tus promociones, incluso mientras estás durmiendo o descansando el fin de semana.
          </p>
        </div>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 26px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🎯</div>
          <h3 style="font-size: 1.1rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">¿Qué es una Landing Page?</h3>
          <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
            Es una página de una sola pantalla diseñada para <strong>un objetivo puntual</strong>: por ejemplo, una pastelería crea una landing dedicada solo a tortas de cumpleaños para llevar personas directo a pedir presupuesto por WhatsApp.
          </p>
        </div>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 26px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🛡️</div>
          <h3 style="font-size: 1.1rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Máxima Confianza Profesional</h3>
          <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
            Tener tu propio dominio (ej: <em>tumarca.ar</em> o <em>tumarca.com</em>) genera una tranquilidad enorme frente a perfiles de Instagram anónimos, permitiéndote cobrar mejores precios y presupuestos.
          </p>
        </div>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 26px;">
          <div style="font-size: 2rem; margin-bottom: 10px;">🤝</div>
          <h3 style="font-size: 1.1rem; font-weight: 800; color: #0F172A; margin-bottom: 8px;">No reemplaza a tus redes: se potencian</h3>
          <p style="font-size: 0.88rem; color: #64748B; line-height: 1.55;">
            Instagram y TikTok te ayudan a mantener relación con tu comunidad; Google atrae personas nuevas que no te conocen; y tu página web los convierte en clientes que te escriben a WhatsApp.
          </p>
        </div>

      </div>

      <!-- Tabla Comparativa -->
      <h3 style="font-size: 1.3rem; font-weight: 800; color: #0F172A; text-align: center; margin-bottom: 18px;">
        Comparativa directa: ¿Por qué tener tu web propia cambia las reglas?
      </h3>
      
      <table class="tg-compare-table">
        <thead style="background: #F8FAFC;">
          <tr>
            <th style="width: 45%; color: #64748B;">Dependiendo solo de Redes Sociales</th>
            <th style="width: 55%; color: #2563EB;">Con tu Web Propia en TecnoGen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solo llegás a quienes te siguen o a quien el algoritmo decide mostrarle tu post.</td>
            <td><strong>Llegás a personas que buscan en Google</strong> activamente lo que ofrecés en tu barrio o ciudad.</td>
          </tr>
          <tr>
            <td>Tus fotos y precios quedan perdidos entre cientos de historias y posteos viejos.</td>
            <td><strong>Tenés todo ordenado en 1 enlace limpio:</strong> servicios, fotos, preguntas frecuentes y contacto.</td>
          </tr>
          <tr>
            <td>Tenés que contestar preguntas repetidas una por una por mensaje directo (DM).</td>
            <td><strong>El cliente ya leyó los detalles</strong> y te escribe a WhatsApp listo para cerrar la compra.</td>
          </tr>
          <tr>
            <td>Estás en "terreno alquilado": si Meta o TikTok cambian las reglas, tus ventas sufren.</td>
            <td><strong>Sos dueño de tu activo:</strong> tu página web es tu propiedad y nadie te la puede apagar.</td>
          </tr>
        </tbody>
      </table>

    </div>
  </section>

  <!-- =========================================================================
       WIDGET INTERACTIVO / LEAD MAGNET: ESCÁNER DE VISIBILIDAD EN GOOGLE
       ========================================================================= -->
  <section id="escaner-google" class="tg-section" style="background: var(--light-bg); padding: 50px 0;">
    <div class="tg-container" style="max-width: 860px;">
      
      <div style="text-align: center; margin-bottom: 30px;">
        <span class="tg-badge tg-badge-blue" style="margin-bottom: 10px;">HERRAMIENTA GRATUITA TECNOGEN</span>
        <h2 style="font-size: 1.75rem; font-weight: 900; color: #0F172A;">
          🔍 Escáner de Visibilidad en Google para tu Negocio
        </h2>
        <p style="font-size: 0.95rem; color: #64748B;">
          Elegí tu rubro y zona para descubrir las búsquedas exactas con las que tus clientes hoy buscan tus servicios en Google.
        </p>
      </div>

      <div class="tg-scanner-card">
        <!-- Paso 1: Configurar Rubro y Zona -->
        <div id="scanner-step-1">
          <div style="margin-bottom: 22px;">
            <label style="display: block; font-weight: 700; color: #0F172A; margin-bottom: 8px;">
              1. ¿Cuál es el rubro o producto principal de tu emprendimiento?
            </label>
            <input type="text" id="scan-rubro" class="tg-input" placeholder="Ej: Pastelería y tortas para eventos, Reparación de aire acondicionado, Manicura...">
            
            <div style="margin-top: 8px;">
              <span style="font-size: 0.8rem; color: #64748B; margin-right: 6px;">Atajos rápidos:</span>
              <span class="tg-quick-chip" onclick="setRubro('Pastelería artesanal y tortas de cumpleaños')">🎂 Pastelería</span>
              <span class="tg-quick-chip" onclick="setRubro('Service e instalación de aire acondicionado')">❄️ Aire Acondicionado</span>
              <span class="tg-quick-chip" onclick="setRubro('Estética, manicura y pestañas a domicilio')">💅 Manicura / Estética</span>
              <span class="tg-quick-chip" onclick="setRubro('Servicios contables y monotributo')">⚖️ Contador / Profesional</span>
              <span class="tg-quick-chip" onclick="setRubro('Indumentaria y ropa de mujer')">👗 Ropa / Moda</span>
            </div>
          </div>

          <div style="margin-bottom: 25px;">
            <label style="display: block; font-weight: 700; color: #0F172A; margin-bottom: 8px;">
              2. ¿En qué zona o localidad ofrecés tus productos/servicios?
            </label>
            <input type="text" id="scan-zona" class="tg-input" placeholder="Ej: Zona Norte (San Isidro, Pilar, Tigre), CABA, Escobar, Todo el país...">
            
            <div style="margin-top: 8px;">
              <span style="font-size: 0.8rem; color: #64748B; margin-right: 6px;">Zonas habituales:</span>
              <span class="tg-quick-chip" onclick="setZona('Zona Norte GBA (Pilar, Tigre, San Isidro)')">📍 Zona Norte</span>
              <span class="tg-quick-chip" onclick="setZona('CABA / Buenos Aires')">📍 Capital Federal</span>
              <span class="tg-quick-chip" onclick="setZona('Zona Oeste GBA')">📍 Zona Oeste</span>
              <span class="tg-quick-chip" onclick="setZona('Zona Sur GBA')">📍 Zona Sur</span>
              <span class="tg-quick-chip" onclick="setZona('Envíos a todo el país')">🇦🇷 Todo el país</span>
            </div>
          </div>

          <button type="button" class="tg-btn tg-btn-primary" style="width: 100%; padding: 15px; font-size: 1rem;" onclick="ejecutarEscaneo()">
            ⚡ Analizar Oportunidades en Google Ahora
          </button>
        </div>

        <!-- Paso 2: Pantalla de Resultados + Captura de Lead -->
        <div id="scanner-step-2" style="display: none;">
          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 22px; margin-bottom: 25px;">
            <span style="background: #2563EB; color: #FFFFFF; font-size: 0.75rem; font-weight: 800; padding: 3px 10px; border-radius: 999px;">ANÁLISIS COMPLETADO</span>
            <h3 style="font-size: 1.25rem; font-weight: 800; color: #1E3A8A; margin: 10px 0 6px;">
              🔍 Búsquedas de Oro Detectadas en tu Zona:
            </h3>
            <p style="font-size: 0.88rem; color: #3B82F6; margin-bottom: 14px;">
              Estas son las frases con las que personas en tu zona buscan en Google cuando quieren comprar tu servicio:
            </p>

            <div id="scan-results-box" style="background: #FFFFFF; border-radius: 8px; padding: 14px 18px; border: 1px solid #DBEAFE; font-size: 0.95rem; line-height: 1.7; color: #0F172A;">
              <!-- Se completa con JS -->
            </div>

            <div style="margin-top: 16px; font-size: 0.88rem; color: #1E40AF;">
              <strong>✍️ Titular (H1) sugerido para tu Landing Page:</strong>
              <div id="scan-h1-box" style="font-style: italic; background: #FFFFFF; padding: 10px 14px; border-radius: 6px; margin-top: 6px; border: 1px solid #DBEAFE; color: #0F172A;"></div>
            </div>
          </div>

          <!-- Formulario de Captura -->
          <div style="background: #0F172A; color: #FFFFFF; border-radius: 14px; padding: 30px; text-align: center;">
            <h4 style="font-size: 1.25rem; font-weight: 800; color: #FFFFFF; margin-bottom: 6px;">
              📩 Recibí tu Informe Completo + Guía de Landing Page en PDF
            </h4>
            <p style="font-size: 0.85rem; color: #94A3B8; max-width: 520px; margin: 0 auto 20px;">
              Te enviamos el reporte a tu casilla y un asesor de TecnoGen te puede armar un presupuesto sin compromiso adaptado al tamaño de tu negocio.
            </p>

            <div style="max-width: 480px; margin: 0 auto;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
                <input type="text" id="lead-web-nombre" class="tg-input" placeholder="Tu Nombre *" required style="background: #1E293B; color: #FFFFFF; border-color: #334155;">
                <input type="email" id="lead-web-email" class="tg-input" placeholder="Tu Email *" required style="background: #1E293B; color: #FFFFFF; border-color: #334155;">
              </div>
              <div style="margin-bottom: 14px;">
                <input type="tel" id="lead-web-whatsapp" class="tg-input" placeholder="Tu WhatsApp (para enviarte cotización)" style="background: #1E293B; color: #FFFFFF; border-color: #334155;">
              </div>
              <button type="button" id="btn-enviar-scan" class="tg-btn tg-btn-primary" style="width: 100%; padding: 14px;" onclick="enviarLeadWeb()">
                🚀 Enviar Informe y Desbloquear Guía PDF
              </button>
              <div id="scan-lead-msg" style="margin-top: 14px; font-size: 0.88rem; display: none;"></div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 16px;">
            <button type="button" class="tg-btn" style="background: transparent; color: #64748B; font-size: 0.85rem;" onclick="resetScanner()">
              ← Probar con otro rubro o zona
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- =========================================================================
       PLANES TRANSPARENTES PARA EMPRENDEDORES
       ========================================================================= -->
  <section class="tg-section" style="background: #FFFFFF; border-top: 1px solid var(--light-border);">
    <div class="tg-container">
      
      <div style="text-align: center; max-width: 720px; margin: 0 auto 40px;">
        <span class="tg-badge tg-badge-blue" style="margin-bottom: 12px;">SOLUCIONES A TU MEDIDA</span>
        <h2 style="font-size: 1.8rem; font-weight: 900; color: #0F172A;">
          Opciones para tener tu Web en TecnoGen
        </h2>
        <p style="font-size: 0.95rem; color: #64748B;">
          Sin tecnicismos complicados ni costos ocultos. Te entregamos tu sitio 100% listo para recibir clientes.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 25px;">
        
        <!-- Plan 1 -->
        <div style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 16px; padding: 32px; display: flex; flex-direction: column;">
          <span style="font-size: 0.8rem; font-weight: 800; color: #2563EB; text-transform: uppercase;">Para empezar ya</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 6px 0 12px;">Landing Page Express</h3>
          <p style="font-size: 0.88rem; color: #64748B; margin-bottom: 20px;">
            Ideal si tenés 1 servicio o producto estrella y querés una página rápida que mande clientes a tu WhatsApp.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 25px; font-size: 0.88rem; color: #334155; line-height: 1.8; flex-grow: 1;">
            <li>✓ Diseño de 1 página de alto impacto</li>
            <li>✓ 100% adaptada a teléfonos celulares</li>
            <li>✓ Botón flotante directo a tu WhatsApp</li>
            <li>✓ Sección de fotos de tus trabajos</li>
            <li>✓ Entrega express en 5 a 7 días</li>
          </ul>
          <a href="<?= get_whatsapp_url('Hola TecnoGen! Me interesa el plan Landing Page Express para mi emprendimiento.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn" style="background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; text-align: center;">
            Consultar Presupuesto
          </a>
        </div>

        <!-- Plan 2: Destacado -->
        <div style="background: #FFFFFF; border: 2px solid #2563EB; border-radius: 16px; padding: 32px; display: flex; flex-direction: column; position: relative; box-shadow: 0 10px 25px rgba(37,99,235,0.08);">
          <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #2563EB; color: #FFFFFF; font-size: 0.75rem; font-weight: 800; padding: 4px 14px; border-radius: 999px;">
            MÁS ELEGIDO POR EMPRENDEDORES
          </div>
          <span style="font-size: 0.8rem; font-weight: 800; color: #2563EB; text-transform: uppercase; margin-top: 6px;">Completo & Escalable</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 6px 0 12px;">Web Emprendedora Pro</h3>
          <p style="font-size: 0.88rem; color: #64748B; margin-bottom: 20px;">
            Para negocios con varios servicios, catálogo de productos o local a la calle que quieren rankear en Google.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 25px; font-size: 0.88rem; color: #334155; line-height: 1.8; flex-grow: 1;">
            <li>✓ Múltiples secciones (Inicio, Servicios, Galería, Contacto)</li>
            <li>✓ Optimización para búsquedas en Google (SEO Local)</li>
            <li>✓ Integración con Google Maps y ficha de Google</li>
            <li>✓ Botón de WhatsApp con mensaje personalizado</li>
            <li>✓ Dominio propio (.ar o .com) y correos corporativos</li>
          </ul>
          <a href="<?= get_whatsapp_url('Hola TecnoGen! Me interesa el plan Web Emprendedora Pro.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary" style="text-align: center;">
            Pedir Cotización WhatsApp →
          </a>
        </div>

        <!-- Plan 3: Con IA -->
        <div style="background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 16px; padding: 32px; display: flex; flex-direction: column;">
          <span style="font-size: 0.8rem; font-weight: 800; color: #059669; text-transform: uppercase;">Tecnología Avanzada</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin: 6px 0 12px;">Web + Agente de IA</h3>
          <p style="font-size: 0.88rem; color: #64748B; margin-bottom: 20px;">
            Tu web conectada a un bot inteligente que responde dudas y califica a tus prospectos en WhatsApp 24/7.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0 0 25px; font-size: 0.88rem; color: #334155; line-height: 1.8; flex-grow: 1;">
            <li>✓ Todo lo incluido en el Plan Web Pro</li>
            <li>✓ Agente conversacional con IA entrenado con tus precios</li>
            <li>✓ Respuestas instantáneas en WhatsApp sin demoras</li>
            <li>✓ Registro automático de consultas y presupuestos</li>
          </ul>
          <a href="<?= get_whatsapp_url('Hola TecnoGen! Me interesa el plan Web + Agente de IA.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn" style="background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1; text-align: center;">
            Consultar por Implementación
          </a>
        </div>

      </div>

    </div>
  </section>

  <!-- =========================================================================
       PREGUNTAS FRECUENTES (FAQ) CON SCHEMA SEO
       ========================================================================= -->
  <section class="tg-section" style="background: var(--light-bg); padding: 50px 0;">
    <div class="tg-container" style="max-width: 820px;">
      
      <div style="text-align: center; margin-bottom: 35px;">
        <span class="tg-badge tg-badge-blue" style="margin-bottom: 10px;">DUDAS FRECUENTES</span>
        <h2 style="font-size: 1.6rem; font-weight: 900; color: #0F172A;">
          Preguntas Frecuentes sobre Páginas Web para Emprendimientos
        </h2>
      </div>

      <div class="tg-faq-item">
        <div class="tg-faq-q">❓ ¿Necesito saber de computación o programación para tener una web?</div>
        <div class="tg-faq-a">Para nada. En TecnoGen nos encargamos del 100% de la parte técnica: registro del nombre, configuración de servidores, diseño y conexión con tu WhatsApp. Vos solo nos pasás fotos y datos de lo que vendés.</div>
      </div>

      <div class="tg-faq-item">
        <div class="tg-faq-q">❓ ¿Cuánto tiempo tarda en estar lista mi Landing Page?</div>
        <div class="tg-faq-a">Una Landing Page Express suele estar lista y publicada en <strong>5 a 7 días hábiles</strong> una vez que nos compartís la información básica de tu negocio.</div>
      </div>

      <div class="tg-faq-item">
        <div class="tg-faq-q">❓ ¿Tengo que dejar de usar Instagram o TikTok si tengo una web?</div>
        <div class="tg-faq-a">Al contrario. Tu página web se convierte en el destino ideal para poner en el enlace de tu biografía (Link in bio) o en tus anuncios de redes, para que la gente vea todo ordenado sin distraerse.</div>
      </div>

      <div class="tg-faq-item">
        <div class="tg-faq-q">❓ ¿Sirve si mi negocio es muy chico o recién arranco?</div>
        <div class="tg-faq-a">Es el momento perfecto. Tener una página web desde el inicio te hace ver como una opción mucho más seria y confiable frente a competidores informales, ayudándote a cerrar tus primeras ventas a mejores precios.</div>
      </div>

    </div>
  </section>

  <!-- Banner CTA Final -->
  <section class="tg-section" style="background: #0F172A; color: #FFFFFF; text-align: center; padding: 60px 0;">
    <div class="tg-container" style="max-width: 720px;">
      <h2 style="font-size: 2rem; font-weight: 900; margin-bottom: 14px; color: #FFFFFF;">
        ¿Querés que más personas encuentren tu emprendimiento en Google?
      </h2>
      <p style="font-size: 1rem; color: #94A3B8; margin-bottom: 25px;">
        En TecnoGen te ayudamos a crear tu propia página web, adaptada a tu negocio y lista para transformar visitas en ventas por WhatsApp.
      </p>
      <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero asesoramiento para crear la página web de mi emprendimiento.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn" style="background: #22C55E; color: #000000; font-weight: 800; padding: 15px 32px; font-size: 1.05rem;">
        💬 ¡Escribinos por WhatsApp y Hablemos de tu Negocio!
      </a>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>

  <!-- Scripts del Escáner Interactivo -->
  <script>
    let currentBusquedas = [];
    let currentTitular = '';

    function setRubro(valor) {
      document.getElementById('scan-rubro').value = valor;
    }

    function setZona(valor) {
      document.getElementById('scan-zona').value = valor;
    }

    function ejecutarEscaneo() {
      const rubro = document.getElementById('scan-rubro').value.trim() || 'Servicios profesionales y venta';
      const zona = document.getElementById('scan-zona').value.trim() || 'Buenos Aires';

      // Generar 3 búsquedas clave de Google con intención de compra
      currentBusquedas = [
        `"${rubro} en ${zona}"`,
        `"Presupuesto de ${rubro.toLowerCase()} en ${zona}"`,
        `"El mejor lugar para ${rubro.toLowerCase()} cerca de mí"`
      ];

      currentTitular = `La Solución Confiable en ${rubro} para Clientes en ${zona} — Atención Directa por WhatsApp`;

      const resultsBox = document.getElementById('scan-results-box');
      resultsBox.innerHTML = `
        <div style="margin-bottom: 6px;"><strong>1.</strong> 🔍 <em>${currentBusquedas[0]}</em></div>
        <div style="margin-bottom: 6px;"><strong>2.</strong> 🔍 <em>${currentBusquedas[1]}</em></div>
        <div><strong>3.</strong> 🔍 <em>${currentBusquedas[2]}</em></div>
      `;

      document.getElementById('scan-h1-box').textContent = `"${currentTitular}"`;

      document.getElementById('scanner-step-1').style.display = 'none';
      document.getElementById('scanner-step-2').style.display = 'block';

      document.getElementById('escaner-google').scrollIntoView({ behavior: 'smooth' });
    }

    function resetScanner() {
      document.getElementById('scanner-step-2').style.display = 'none';
      document.getElementById('scanner-step-1').style.display = 'block';
    }

    async function enviarLeadWeb() {
      const nombre = document.getElementById('lead-web-nombre').value.trim();
      const email = document.getElementById('lead-web-email').value.trim();
      const whatsapp = document.getElementById('lead-web-whatsapp').value.trim();
      const rubro = document.getElementById('scan-rubro').value.trim() || 'No especificado';
      const zona = document.getElementById('scan-zona').value.trim() || 'No especificada';
      const msg = document.getElementById('scan-lead-msg');
      const btn = document.getElementById('btn-enviar-scan');

      if (!nombre || !email) {
        msg.style.display = 'block';
        msg.style.color = '#EF4444';
        msg.innerHTML = '⚠️ Por favor completá tu nombre y correo electrónico.';
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '⏳ Enviando informe...';
      msg.style.display = 'none';

      try {
        const response = await fetch('/api/guardar-lead-web.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre: nombre,
            email: email,
            whatsapp: whatsapp,
            rubro: rubro,
            zona: zona,
            busquedas: currentBusquedas,
            titular: currentTitular
          })
        });

        const res = await response.json();

        if (res.success) {
          msg.style.display = 'block';
          msg.style.color = '#22C55E';
          msg.innerHTML = '🎉 <strong>¡Informe enviado con éxito a ' + email + '!</strong><br>Revisá tu casilla de correo.';
          btn.innerHTML = '✅ ¡Informe Enviado!';
        } else {
          msg.style.display = 'block';
          msg.style.color = '#EF4444';
          msg.innerHTML = '⚠️ ' + (res.error || 'Ocurrió un error al enviar.');
          btn.disabled = false;
          btn.innerHTML = 'Reintentar Envío';
        }
      } catch (err) {
        msg.style.display = 'block';
        msg.style.color = '#EF4444';
        msg.innerHTML = '⚠️ Problema de conexión. Por favor reintentá.';
        btn.disabled = false;
        btn.innerHTML = 'Reintentar Envío';
      }
    }
  </script>
</body>
</html>
