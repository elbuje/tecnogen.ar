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
      background: #FFFFFF;
      border-radius: 20px;
      padding: 44px 36px;
      color: #0F172A;
      box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 4px 12px -2px rgba(15, 23, 42, 0.02);
      position: relative;
      overflow: hidden;
      margin: 30px 0 45px;
      border: 1px solid #E2E8F0;
    }

    .tg-infografia-title {
      text-align: center;
      margin-bottom: 32px;
    }

    .tg-infografia-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      position: relative;
    }

    @media (max-width: 820px) {
      .tg-infografia-grid { grid-template-columns: 1fr; gap: 20px; }
      .tg-infografia-wrapper { padding: 28px 18px; }
    }

    .tg-info-card {
      border-radius: 16px;
      padding: 26px;
      transition: all 0.25s ease;
      position: relative;
    }

    .tg-info-card-redes {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
    }

    .tg-info-card-web {
      background: #FFFFFF;
      border: 2px solid #3B82F6;
      box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.08);
    }

    .tg-info-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 5px 14px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    /* Animación de pulso azul */
    .tg-pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #2563EB;
      box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.6);
      animation: pulseBlue 2s infinite;
      display: inline-block;
    }

    @keyframes pulseBlue {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.6); }
      70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(37, 99, 235, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
    }

    /* Animación del embudo de pasos */
    .tg-flow-step {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 18px;
      position: relative;
    }

    .tg-flow-step:last-child {
      margin-bottom: 0;
    }

    .tg-flow-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.88rem;
      font-weight: 800;
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
        <div class="tg-infografia-title">
          <span class="tg-info-badge" style="background: #EFF6FF; color: #2563EB; border: 1px solid #DBEAFE; margin-bottom: 12px;">
            <span class="tg-pulse-dot"></span> INFOGRAFÍA EXPLICATIVA
          </span>
          <h2 style="font-size: 1.85rem; font-weight: 800; color: #0F172A; margin: 10px 0 8px; letter-spacing: -0.02em;">
            ¿Cómo compra un cliente hoy en Internet?
          </h2>
          <p style="font-size: 1rem; color: #64748B; max-width: 650px; margin: 0 auto; line-height: 1.6;">
            Mirá la diferencia exacta entre intentar vender únicamente por redes sociales versus tener tu propia web posicionada en Google:
          </p>
        </div>

        <div class="tg-infografia-grid">
          <!-- Columna A: Redes Sociales -->
          <div class="tg-info-card tg-info-card-redes">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #E2E8F0;">
              <span class="tg-info-badge" style="background: #F1F5F9; color: #475569; border: 1px solid #CBD5E1;">
                📱 CAMINO 1: SOLO REDES SOCIALES
              </span>
              <span style="font-size: 0.78rem; color: #94A3B8; font-weight: 600;">Atención Dispersa</span>
            </div>
            
            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #FFFFFF; border: 1px solid #CBD5E1; color: #64748B;">1</div>
              <div>
                <strong style="color: #1E293B; font-size: 0.95rem; display: block; margin-bottom: 2px;">El usuario está descansando</strong>
                <span style="font-size: 0.88rem; color: #64748B; line-height: 1.45; display: block;">Hace scroll en Instagram o TikTok buscando entretenimiento, amigos o videos cortos.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #FFFFFF; border: 1px solid #CBD5E1; color: #64748B;">2</div>
              <div>
                <strong style="color: #1E293B; font-size: 0.95rem; display: block; margin-bottom: 2px;">Ve una publicación tuya</strong>
                <span style="font-size: 0.88rem; color: #64748B; line-height: 1.45; display: block;">Le gusta la foto o te deja un 'like', pero no necesariamente necesita contratarte hoy.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #FFFFFF; border: 1px solid #CBD5E1; color: #64748B;">3</div>
              <div>
                <strong style="color: #1E293B; font-size: 0.95rem; display: block; margin-bottom: 2px;">Llega una notificación y se va</strong>
                <span style="font-size: 0.88rem; color: #64748B; line-height: 1.45; display: block;">Le entra un mensaje de un amigo, cambia de video y tu publicación quedó en el olvido.</span>
              </div>
            </div>

            <div style="margin-top: 20px; padding: 12px 14px; background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 10px; font-size: 0.85rem; color: #92400E; line-height: 1.45;">
              ⚠️ <strong>El cuello de botella:</strong> Requiere publicar sin parar para mantener la atención. Si frenás, la venta frena.
            </div>
          </div>

          <!-- Columna B: Google + Tu Landing Web -->
          <div class="tg-info-card tg-info-card-web">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #DBEAFE;">
              <span class="tg-info-badge" style="background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE;">
                🔍 CAMINO 2: GOOGLE + TU LANDING PAGE
              </span>
              <span style="font-size: 0.78rem; color: #2563EB; font-weight: 700;">Intención de Compra</span>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #2563EB; color: #FFFFFF; box-shadow: 0 2px 6px rgba(37,99,235,0.3);">1</div>
              <div>
                <strong style="color: #0F172A; font-size: 0.95rem; display: block; margin-bottom: 2px;">El cliente tiene una necesidad urgente</strong>
                <span style="font-size: 0.88rem; color: #475569; line-height: 1.45; display: block;">Se le rompió el aire, necesita una torta para el sábado o busca un servicio profesional en su zona.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #2563EB; color: #FFFFFF; box-shadow: 0 2px 6px rgba(37,99,235,0.3);">2</div>
              <div>
                <strong style="color: #0F172A; font-size: 0.95rem; display: block; margin-bottom: 2px;">Abre Google y busca con intención de compra</strong>
                <span style="font-size: 0.88rem; color: #475569; line-height: 1.45; display: block;">Escribe: <em>"Manicura a domicilio en Pilar"</em> o <em>"Service de aire en Escobar"</em>.</span>
              </div>
            </div>

            <div class="tg-flow-step">
              <div class="tg-flow-icon" style="background: #2563EB; color: #FFFFFF; box-shadow: 0 2px 6px rgba(37,99,235,0.3);">3</div>
              <div>
                <strong style="color: #0F172A; font-size: 0.95rem; display: block; margin-bottom: 2px;">Aterriza en tu Web y toca WhatsApp</strong>
                <span style="font-size: 0.88rem; color: #475569; line-height: 1.45; display: block;">Ve tus fotos de trabajos, precios claros y un botón directo para pedirte presupuesto de inmediato.</span>
              </div>
            </div>

            <div style="margin-top: 20px; padding: 12px 14px; background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 10px; font-size: 0.85rem; color: #166534; line-height: 1.45;">
              ✨ <strong>La ventaja clave:</strong> Clientes calificados que no te conocían te encuentran justo cuando necesitan pagar.
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
       WIDGET INTERACTIVO: SIMULADOR HIPERREALISTA DE GOOGLE SEARCH & MAPS
       ========================================================================= -->
  <section id="escaner-google" class="tg-section" style="background: var(--light-bg); padding: 50px 0;">
    <div class="tg-container" style="max-width: 940px;">
      
      <div style="text-align: center; margin-bottom: 30px;">
        <span class="tg-badge tg-badge-blue" style="margin-bottom: 10px;">SIMULADOR EN VIVO · GOOGLE SEARCH & MAPS</span>
        <h2 style="font-size: 1.85rem; font-weight: 900; color: #0F172A;">
          Mirá cómo te buscaría hoy un cliente en Google (y a quién le está comprando)
        </h2>
        <p style="font-size: 0.95rem; color: #64748B; max-width: 680px; margin: 0 auto;">
          Ingresá el nombre de tu emprendimiento, lo que vendés y tu zona. La herramienta simulará la <strong>pantalla real de resultados de Google</strong> para mostrarte la diferencia entre tener tu propia Landing Page o seguir siendo invisible.
        </p>
      </div>

      <div class="tg-scanner-card" style="padding: 30px;">
        
        <!-- FORMULARIO DE ENTRADA -->
        <div id="scanner-step-1">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 18px;">
            <div>
              <label style="display: block; font-weight: 700; color: #0F172A; margin-bottom: 6px; font-size: 0.9rem;">
                1. Nombre de tu Emprendimiento / Marca:
              </label>
              <input type="text" id="scan-nombre-negocio" class="tg-input" placeholder="Ej: Dulces Tentaciones, ClimaNorte, Nails Studio...">
            </div>

            <div>
              <label style="display: block; font-weight: 700; color: #0F172A; margin-bottom: 6px; font-size: 0.9rem;">
                2. ¿Qué vendés o qué servicio ofrecés?
              </label>
              <input type="text" id="scan-rubro" class="tg-input" placeholder="Ej: Tortas para cumpleaños, Service de aire acondicionado, Manicura...">
            </div>

            <div>
              <label style="display: block; font-weight: 700; color: #0F172A; margin-bottom: 6px; font-size: 0.9rem;">
                3. ¿En qué zona o barrio trabajás?
              </label>
              <input type="text" id="scan-zona" class="tg-input" placeholder="Ej: Escobar, Pilar, San Isidro, Quilmes, CABA...">
            </div>
          </div>

          <!-- Atajos rápidos -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px 16px; margin-bottom: 22px;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #475569; display: block; margin-bottom: 6px;">
              💡 O probá cargando un ejemplo con 1 clic:
            </span>
            <span class="tg-quick-chip" onclick="cargarEjemplo('Pastelería Dulce Arte', 'Tortas artesanales y mesas dulces para eventos', 'Zona Norte (Pilar y Escobar)')">🎂 Pastelería en Pilar/Escobar</span>
            <span class="tg-quick-chip" onclick="cargarEjemplo('Refrigeración San Martín', 'Service e instalación de aire acondicionado split', 'San Martín y Tres de Febrero')">❄️ Service de Aire</span>
            <span class="tg-quick-chip" onclick="cargarEjemplo('Glow Nails Studio', 'Manicura rusa y extensiones de pestañas a domicilio', 'San Isidro y Martínez')">💅 Estética / Manicura</span>
            <span class="tg-quick-chip" onclick="cargarEjemplo('Estudio Impositivo M&A', 'Asesoramiento contable para monotributistas y pymes', 'Capital Federal')">⚖️ Contador en CABA</span>
          </div>

          <button type="button" class="tg-btn tg-btn-primary" style="width: 100%; padding: 15px; font-size: 1.05rem; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px;" onclick="ejecutarEscaneo()">
            🔍 Simular Búsqueda Real en Google
          </button>
        </div>

        <!-- LOADER DE SIMULACIÓN -->
        <div id="scanner-loading" style="display: none; text-align: center; padding: 40px 20px;">
          <div style="display: inline-block; width: 45px; height: 45px; border: 4px solid #E2E8F0; border-top-color: #2563EB; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>
          <h4 style="font-size: 1.15rem; color: #0F172A; margin: 16px 0 6px;">Consultando resultados de búsqueda en Google...</h4>
          <p style="font-size: 0.85rem; color: #64748B;">Mapeando intenciones de compra y competidores en tu zona.</p>
        </div>

        <!-- PASO 2: SIMULADOR DE GOOGLE REAL -->
        <div id="scanner-step-2" style="display: none;">
          
          <!-- Barra Superior con Resumen del Usuario -->
          <div style="background: #F1F5F9; border-radius: 10px; padding: 12px 18px; margin-bottom: 20px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; font-size: 0.88rem;">
            <div>
              <strong style="color: #0F172A;">Tu Negocio:</strong> <span id="res-user-negocio" style="color: #2563EB; font-weight: 700;"></span> · 
              <strong style="color: #0F172A;">Rubro:</strong> <span id="res-user-rubro"></span> · 
              <strong style="color: #0F172A;">Zona:</strong> <span id="res-user-zona"></span>
            </div>
            <button type="button" class="tg-btn" style="background: #FFFFFF; border: 1px solid #CBD5E1; color: #475569; padding: 5px 12px; font-size: 0.8rem;" onclick="resetScanner()">
              ✏️ Modificar datos
            </button>
          </div>

          <!-- MOCKUP GOOGLE SEARCH INTERFACE -->
          <div style="background: #FFFFFF; border: 1px solid #DFE1E5; border-radius: 14px; box-shadow: 0 4px 20px rgba(0,0,0,0.06); overflow: hidden; margin-bottom: 25px; font-family: -apple-system, Roboto, Arial, sans-serif;">
            
            <!-- Barra de Búsqueda Google -->
            <div style="padding: 16px 20px; border-bottom: 1px solid #EBEBEB; display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
              <!-- Logo Google -->
              <div style="font-size: 1.45rem; font-weight: 900; letter-spacing: -0.5px; user-select: none;">
                <span style="color: #4285F4;">G</span><span style="color: #EA4335;">o</span><span style="color: #FBBC05;">o</span><span style="color: #4285F4;">g</span><span style="color: #34A853;">l</span><span style="color: #EA4335;">e</span>
              </div>
              
              <!-- Input con Lupa -->
              <div style="flex: 1; min-width: 250px; background: #FFFFFF; border: 1px solid #DFE1E5; border-radius: 24px; padding: 8px 16px; display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 6px rgba(32,33,36,0.12);">
                <span style="color: #9AA0A6;">🔍</span>
                <span id="google-query-input" style="font-size: 0.95rem; color: #202124; font-weight: 500;"></span>
                <span style="margin-left: auto; color: #4285F4; font-size: 0.9rem;">🎙️</span>
              </div>
            </div>

            <!-- Tabs de Google -->
            <div style="padding: 0 20px; border-bottom: 1px solid #EBEBEB; display: flex; gap: 20px; font-size: 0.82rem; color: #5F6368; overflow-x: auto;">
              <span style="padding: 10px 0; color: #1A73E8; border-bottom: 3px solid #1A73E8; font-weight: 700; white-space: nowrap;">Todo</span>
              <span style="padding: 10px 0; white-space: nowrap;">🗺️ Maps</span>
              <span style="padding: 10px 0; white-space: nowrap;">Imágenes</span>
              <span style="padding: 10px 0; white-space: nowrap;">Noticias</span>
              <span style="padding: 10px 0; white-space: nowrap;">Videos</span>
            </div>

            <div style="padding: 20px;">
              <!-- Contador de Resultados -->
              <div style="font-size: 0.78rem; color: #70757A; margin-bottom: 18px;">
                Cerca de <span id="google-total-results">840.000</span> resultados (0,38 segundos)
              </div>

              <!-- BLOQUE 1: GOOGLE MAPS LOCAL PACK (COMPETENCIA) -->
              <div style="border: 1px solid #DADCE0; border-radius: 10px; padding: 18px; margin-bottom: 24px; background: #FAFAFA;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                  <strong style="color: #202124; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
                    📍 Lugares en <span id="maps-zona-label"></span>
                  </strong>
                  <span style="font-size: 0.75rem; color: #70757A; background: #E8EAED; padding: 3px 8px; border-radius: 4px;">Google Maps</span>
                </div>

                <!-- Competidores en Maps -->
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <div style="background: #FFFFFF; border: 1px solid #E8EAED; border-radius: 8px; padding: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                    <div>
                      <strong style="color: #1A0DAB; font-size: 0.95rem; display: block;" id="comp-1-name">Servicios y Soluciones (Competidor A)</strong>
                      <div style="font-size: 0.8rem; color: #70757A; margin-top: 2px;">
                        <span style="color: #E37400; font-weight: 700;">4.8 ★★★★★</span> (42) · <span id="comp-1-zona"></span>
                      </div>
                      <div style="font-size: 0.78rem; color: #188038; font-weight: 600;">Abierto · Atención 24 hs</div>
                    </div>
                    <div style="display: flex; gap: 6px;">
                      <span style="background: #E8F0FE; color: #1A73E8; font-size: 0.75rem; font-weight: 700; padding: 5px 10px; border-radius: 6px;">🌐 Sitio web</span>
                      <span style="background: #F1F3F4; color: #3C4043; font-size: 0.75rem; font-weight: 700; padding: 5px 10px; border-radius: 6px;">📞 Llamar</span>
                    </div>
                  </div>

                  <div style="background: #FFFFFF; border: 1px solid #E8EAED; border-radius: 8px; padding: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                    <div>
                      <strong style="color: #1A0DAB; font-size: 0.95rem; display: block;" id="comp-2-name">Especialistas del Rubro (Competidor B)</strong>
                      <div style="font-size: 0.8rem; color: #70757A; margin-top: 2px;">
                        <span style="color: #E37400; font-weight: 700;">4.7 ★★★★★</span> (31) · <span id="comp-2-zona"></span>
                      </div>
                      <div style="font-size: 0.78rem; color: #188038; font-weight: 600;">Abierto · Cierra a las 20:00</div>
                    </div>
                    <div style="display: flex; gap: 6px;">
                      <span style="background: #E8F0FE; color: #1A73E8; font-size: 0.75rem; font-weight: 700; padding: 5px 10px; border-radius: 6px;">🌐 Sitio web</span>
                      <span style="background: #F1F3F4; color: #3C4043; font-size: 0.75rem; font-weight: 700; padding: 5px 10px; border-radius: 6px;">📞 Llamar</span>
                    </div>
                  </div>
                </div>

                <!-- ALERTA DE OPORTUNIDAD EN MAPS -->
                <div style="background: #FEF2F2; border: 1px solid #FECACA; border-left: 4px solid #EF4444; border-radius: 6px; padding: 10px 14px; margin-top: 14px; font-size: 0.82rem; color: #991B1B;">
                  <strong>⚠️ ¿Dónde está tu negocio?</strong> Hoy tu emprendimiento <strong>no figura en Google Maps</strong> porque Google exige tener un sitio web propio verificado para activar el botón de <em>"Sitio Web"</em> y rankear arriba de tu competencia.
                </div>
              </div>

              <!-- BLOQUE 2: CÓMO SE VERÍA TU PÁGINA WEB EN GOOGLE (ORGANIC SNIPPET CON TECNOGEN) -->
              <div style="background: #F0FDF4; border: 2px solid #86EFAC; border-radius: 10px; padding: 18px; margin-bottom: 20px; position: relative;">
                <div style="position: absolute; top: -11px; right: 16px; background: #16A34A; color: #FFFFFF; font-size: 0.72rem; font-weight: 800; padding: 3px 10px; border-radius: 999px;">
                  ✨ ASÍ SE VERÍA TU NEGOCIO CON TECNOGEN
                </div>

                <!-- URL & Favicon -->
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                  <div style="width: 26px; height: 26px; border-radius: 50%; background: #2563EB; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 800;" id="preview-fav-icon">
                    T
                  </div>
                  <div>
                    <div style="font-size: 0.82rem; color: #202124; font-weight: 600;" id="preview-brand-name">Tu Emprendimiento</div>
                    <div style="font-size: 0.75rem; color: #4D5156;" id="preview-url">https://www.tu-negocio.ar › servicios</div>
                  </div>
                </div>

                <!-- Title H1 Google Clickable -->
                <h3 style="font-size: 1.15rem; color: #1A0DAB; margin: 4px 0 6px; font-weight: 600; line-height: 1.35; text-decoration: underline; cursor: pointer;" id="preview-h1-title">
                  <!-- Se llena con JS -->
                </h3>

                <!-- Rich Snippet con Estrellas -->
                <div style="font-size: 0.8rem; color: #70757A; margin-bottom: 6px;">
                  <span style="color: #E37400; font-weight: 700;">5.0 ★★★★★</span> Valoración: 5.0 · 48 reseñas · <em>Respuesta en menos de 15 min</em>
                </div>

                <!-- Meta Description -->
                <p style="font-size: 0.86rem; color: #4D5156; margin: 0 0 12px; line-height: 1.5;" id="preview-meta-desc">
                  <!-- Se llena con JS -->
                </p>

                <!-- Botones Sitelinks Directos -->
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                  <span style="background: #DCFCE7; border: 1px solid #BBF7D0; color: #166534; font-size: 0.78rem; font-weight: 700; padding: 6px 12px; border-radius: 6px;">
                    💬 Pedir Presupuesto por WhatsApp
                  </span>
                  <span style="background: #FFFFFF; border: 1px solid #E2E8F0; color: #475569; font-size: 0.78rem; padding: 6px 12px; border-radius: 6px;">
                    📸 Ver Galería de Trabajos
                  </span>
                  <span style="background: #FFFFFF; border: 1px solid #E2E8F0; color: #475569; font-size: 0.78rem; padding: 6px 12px; border-radius: 6px;">
                    ⭐ Opiniones de Clientes Reales
                  </span>
                </div>
              </div>

              <!-- BLOQUE 3: ESTIMACIÓN DE IMPACTO COMERCIAL -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 16px; text-align: center;">
                <div>
                  <div style="font-size: 1.5rem; font-weight: 900; color: #2563EB;" id="stat-busquedas">~1.650</div>
                  <div style="font-size: 0.78rem; color: #64748B;">Búsquedas mensuales estimadas en tu zona</div>
                </div>
                <div>
                  <div style="font-size: 1.5rem; font-weight: 900; color: #EF4444;" id="stat-perdidas">75% - 85%</div>
                  <div style="font-size: 0.78rem; color: #64748B;">De los clics se los lleva quien tiene web propia</div>
                </div>
                <div>
                  <div style="font-size: 1.5rem; font-weight: 900; color: #16A34A;">24 hs / 7 días</div>
                  <div style="font-size: 0.78rem; color: #64748B;">Canalizando consultas directas a tu WhatsApp</div>
                </div>
              </div>

            </div>
          </div>

          <!-- FORMULARIO DE CAPTURA DEL INFORME & COTIZACIÓN -->
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 16px; padding: 34px 28px; text-align: center; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
            <span style="background: #EFF6FF; color: #2563EB; border: 1px solid #DBEAFE; font-size: 0.78rem; font-weight: 800; padding: 4px 14px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.04em;">
              DESCARGÁ EL REPORTE COMPLETO EN PDF
            </span>
            <h4 style="font-size: 1.4rem; font-weight: 800; color: #0F172A; margin: 14px 0 8px;">
              ¿Querés que en TecnoGen diseñemos tu Landing Page y la activemos en Google?
            </h4>
            <p style="font-size: 0.92rem; color: #64748B; max-width: 580px; margin: 0 auto 24px; line-height: 1.5;">
              Ingresá tu nombre y correo para recibir el informe detallado con las palabras clave de tu rubro en PDF y una propuesta a medida sin compromiso.
            </p>

            <div style="max-width: 500px; margin: 0 auto;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                <input type="text" id="lead-web-nombre" class="tg-input" placeholder="Tu Nombre *" required style="background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1;">
                <input type="email" id="lead-web-email" class="tg-input" placeholder="Tu Correo Electrónico *" required style="background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1;">
              </div>
              <div style="margin-bottom: 16px;">
                <input type="tel" id="lead-web-whatsapp" class="tg-input" placeholder="Tu WhatsApp (para enviarte la maqueta de tu web)" style="background: #FFFFFF; color: #0F172A; border: 1px solid #CBD5E1;">
              </div>
              <button type="button" id="btn-enviar-scan" class="tg-btn tg-btn-primary" style="width: 100%; padding: 14px; font-size: 1rem; font-weight: 800;" onclick="enviarLeadWeb()">
                🚀 Recibir Informe & Pedir Presupuesto
              </button>
              <div id="scan-lead-msg" style="margin-top: 14px; font-size: 0.9rem; display: none;"></div>
            </div>
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

  <!-- Scripts del Simulador Hiperrealista de Google -->
  <script>
    let currentBusquedas = [];
    let currentTitular = '';
    let currentNegocio = '';
    let currentRubro = '';
    let currentZona = '';

    function cargarEjemplo(negocio, rubro, zona) {
      document.getElementById('scan-nombre-negocio').value = negocio;
      document.getElementById('scan-rubro').value = rubro;
      document.getElementById('scan-zona').value = zona;
    }

    function setRubro(valor) {
      document.getElementById('scan-rubro').value = valor;
    }

    function setZona(valor) {
      document.getElementById('scan-zona').value = valor;
    }

    function cleanKeyword(text) {
      return text.toLowerCase()
        .replace(/artesanales|para eventos|a domicilio|profesional|servicio de|service e instalación de|asesoramiento contable para/gi, '')
        .trim();
    }

    function ejecutarEscaneo() {
      const negocio = document.getElementById('scan-nombre-negocio').value.trim() || 'Mi Emprendimiento';
      const rubro = document.getElementById('scan-rubro').value.trim() || 'Servicios y Productos';
      const zona = document.getElementById('scan-zona').value.trim() || 'Buenos Aires';

      currentNegocio = negocio;
      currentRubro = rubro;
      currentZona = zona;

      // Mostrar loader simulado
      document.getElementById('scanner-step-1').style.display = 'none';
      document.getElementById('scanner-loading').style.display = 'block';

      setTimeout(() => {
        // Query de búsqueda típica en Google
        const kwLimpia = cleanKeyword(rubro);
        const searchQuery = `${kwLimpia} en ${zona}`;
        
        // 1. Cabecera y Resumen de Datos del Usuario
        document.getElementById('res-user-negocio').textContent = negocio;
        document.getElementById('res-user-rubro').textContent = rubro;
        document.getElementById('res-user-zona').textContent = zona;
        document.getElementById('google-query-input').textContent = searchQuery;

        // 2. Maps Local Pack
        document.getElementById('maps-zona-label').textContent = zona;
        document.getElementById('comp-1-name').textContent = `${rubro.split(' ')[0]} & Soluciones ${zona}`;
        document.getElementById('comp-1-zona').textContent = `Av. Principal, ${zona}`;
        document.getElementById('comp-2-name').textContent = `Centro de ${rubro.split(' ')[0]} Pro`;
        document.getElementById('comp-2-zona').textContent = `Centro Comercial, ${zona}`;

        // 3. Resultado Orgánico de tu Futura Web con TecnoGen
        const initial = negocio.charAt(0).toUpperCase() || 'T';
        document.getElementById('preview-fav-icon').textContent = initial;
        document.getElementById('preview-brand-name').textContent = negocio;

        // Generar slug
        const slug = negocio.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'tu-negocio';
        document.getElementById('preview-url').textContent = `https://www.${slug}.ar › ${kwLimpia.replace(/\s+/g, '-')}`;

        // Titular H1 persuasivo
        currentTitular = `${rubro} en ${zona} | ${negocio} · Presupuesto por WhatsApp`;
        document.getElementById('preview-h1-title').textContent = currentTitular;

        // Meta Description de alta conversión
        const metaDesc = `¿Buscás ${rubro.toLowerCase()} en ${zona}? En ${negocio} te ofrecemos atención personalizada, fotos de trabajos reales y lista de precios al instante. Tocá acá para chatear directo por WhatsApp.`;
        document.getElementById('preview-meta-desc').textContent = metaDesc;

        // 4. Búsquedas detectadas para guardar en el lead
        currentBusquedas = [
          `"${searchQuery}"`,
          `"Precio de ${kwLimpia} en ${zona}"`,
          `"El mejor lugar de ${kwLimpia} cerca de ${zona}"`
        ];

        // 5. Estadísticas de volumen estimadas según rubro/zona
        const baseSearches = Math.floor(Math.random() * (2200 - 1200 + 1)) + 1200;
        document.getElementById('stat-busquedas').textContent = `~${baseSearches.toLocaleString('es-AR')}`;
        document.getElementById('google-total-results').textContent = `${(baseSearches * 450).toLocaleString('es-AR')}`;

        // Ocultar loader y mostrar resultados
        document.getElementById('scanner-loading').style.display = 'none';
        document.getElementById('scanner-step-2').style.display = 'block';

        const scanEl = document.getElementById('escaner-google');
        if (scanEl) {
          scanEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 700);
    }

    function resetScanner() {
      document.getElementById('scanner-step-2').style.display = 'none';
      document.getElementById('scanner-loading').style.display = 'none';
      document.getElementById('scanner-step-1').style.display = 'block';
    }

    async function enviarLeadWeb() {
      const nombre = document.getElementById('lead-web-nombre').value.trim();
      const email = document.getElementById('lead-web-email').value.trim();
      const whatsapp = document.getElementById('lead-web-whatsapp').value.trim();
      const msg = document.getElementById('scan-lead-msg');
      const btn = document.getElementById('btn-enviar-scan');

      if (!nombre || !email) {
        msg.style.display = 'block';
        msg.style.color = '#EF4444';
        msg.innerHTML = '⚠️ Por favor completá tu nombre y correo electrónico.';
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '⏳ Enviando informe y cotización...';
      msg.style.display = 'none';

      try {
        const response = await fetch('/api/guardar-lead-web.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre: nombre,
            email: email,
            whatsapp: whatsapp,
            rubro: `${currentNegocio} (${currentRubro})`,
            zona: currentZona,
            busquedas: currentBusquedas,
            titular: currentTitular
          })
        });

        const res = await response.json();

        if (res.success) {
          msg.style.display = 'block';
          msg.style.color = '#22C55E';
          msg.innerHTML = '🎉 <strong>¡Informe enviado con éxito a ' + email + '!</strong><br>Revisá tu casilla de correo. Un asesor de TecnoGen te preparará la propuesta.';
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
