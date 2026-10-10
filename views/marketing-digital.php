<?php
/**
 * View: Marketing Digital - TecnoGen
 * https://tecnogen.ar/agencia-marketing-digital
 */
$current_slug = 'agencia-marketing-digital';
$page_data = [
    'title' => 'Agencia de Marketing Digital & Sistemas de Captación de Leads | TecnoGen',
    'description' => 'Conseguimos que las personas correctas encuentren, conozcan y contacten a tu empresa. Diseñamos funnels de alta conversión en Google Ads, Meta Ads y LinkedIn Ads conectados directamente a tu CRM.',
    'keywords' => 'marketing digital argentina, funnels de venta, pauta publicitaria meta ads, google ads empresas, generacion de leads calificados, captacion de prospectos',
    'service_name' => 'Agencia de Marketing Digital & Sistemas de Captación de Leads'
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <?php render_seo_head($page_data); ?>
</head>
<body>
  <?php require __DIR__ . '/layout/header.php'; ?>

  <!-- ===== HERO SECTION (TEMPLATE DESIGN) ===== -->
  <section class="tg-hero" style="padding: 40px 0 60px; background: #ffffff;">
    <div class="tg-container">
      
      <!-- Breadcrumb -->
      <div class="tg-breadcrumb">
        <a href="/">Inicio</a> <span class="tg-sep">/</span> <span class="tg-current">Marketing Digital</span>
      </div>

      <div style="max-width: 900px; margin-bottom: 50px;">
        <div class="tg-badge tg-badge-blue" style="margin-bottom: 18px; font-weight: 800; letter-spacing: 0.5px;">
          📢 SOLUCIÓN 01 · MARKETING DIGITAL
        </div>
        
        <h1 class="tg-hero-title" style="font-size: clamp(2.2rem, 4vw, 3.4rem); line-height: 1.15; margin-bottom: 20px;">
          Agencia de Marketing Digital & Sistemas de Captación de Leads
        </h1>
        
        <p class="tg-hero-subtitle" style="font-size: 1.15rem; color: #475569; line-height: 1.6; max-width: 820px; margin-bottom: 32px;">
          Conseguimos que las personas correctas encuentren, conozcan y contacten a tu empresa. Diseñamos funnels de alta conversión en Google Ads, Meta Ads y LinkedIn Ads conectados directamente a tu CRM.
        </p>
        
        <div class="tg-hero-cta" style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero solicitar un Plan de Captación de Leads para mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary" style="text-transform: uppercase; letter-spacing: 0.5px; font-weight: 800; padding: 16px 32px;">
            SOLICITAR PLAN DE CAPTACIÓN
          </a>
          <a href="/crm-whatsapp-ventas" class="tg-btn tg-btn-secondary" style="font-weight: 700; padding: 16px 28px; text-transform: uppercase; font-size: 0.88rem;">
            VER INTEGRACIÓN CON CRM →
          </a>
        </div>
      </div>

      <!-- 3 Pillar Cards (Exact Match to Template) -->
      <div class="tg-services-grid" style="margin-top: 20px;">
        
        <div class="tg-card" style="padding: 36px 30px; border-radius: var(--radius-lg); background: #ffffff;">
          <div class="tg-card-icon" style="background: rgba(37, 99, 235, 0.08); color: var(--primary); width: 50px; height: 50px; border-radius: 12px; margin-bottom: 20px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h3 class="tg-card-title" style="font-size: 1.35rem; margin-bottom: 12px;">Google Ads Transaccional</h3>
          <p class="tg-card-desc" style="color: #64748B; font-size: 0.95rem; line-height: 1.6;">
            Capturamos la demanda existente de usuarios que están buscando activamente tus productos o servicios con alta intención de compra.
          </p>
        </div>

        <div class="tg-card" style="padding: 36px 30px; border-radius: var(--radius-lg); background: #ffffff;">
          <div class="tg-card-icon" style="background: rgba(6, 182, 212, 0.08); color: #0891B2; width: 50px; height: 50px; border-radius: 12px; margin-bottom: 20px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3 class="tg-card-title" style="font-size: 1.35rem; margin-bottom: 12px;">Meta & LinkedIn Ads B2B</h3>
          <p class="tg-card-desc" style="color: #64748B; font-size: 0.95rem; line-height: 1.6;">
            Segmentación quirúrgica por cargo, tamaño de empresa, industria e intereses comerciales para generar demanda calificada.
          </p>
        </div>

        <div class="tg-card" style="padding: 36px 30px; border-radius: var(--radius-lg); background: #ffffff;">
          <div class="tg-card-icon" style="background: rgba(34, 197, 94, 0.08); color: #16A34A; width: 50px; height: 50px; border-radius: 12px; margin-bottom: 20px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </div>
          <h3 class="tg-card-title" style="font-size: 1.35rem; margin-bottom: 12px;">Landing Pages & CRO</h3>
          <p class="tg-card-desc" style="color: #64748B; font-size: 0.95rem; line-height: 1.6;">
            Páginas de aterrizaje diseñadas con rigor persuasivo, alta velocidad de carga y formularios sin fricción para maximizar la tasa de conversión.
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- ===== METODOLOGÍA Y RESULTADOS ===== -->
  <section class="tg-section" style="background: var(--light-bg); border-top: 1px solid var(--light-border);">
    <div class="tg-container">
      <div class="tg-section-header">
        <div class="tg-badge tg-badge-blue">PROCESO DE CRECIMIENTO</div>
        <h2 class="tg-section-title">De Clic a Cliente Calificado en tu CRM</h2>
        <p class="tg-section-desc">No acumulamos contactos inertes. Integramos cada etapa para que tus vendedores solo hablen con prospectos listos para comprar.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <div class="tg-card">
          <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary); margin-bottom: 10px;">01</div>
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; margin-bottom: 10px;">Atracción de Alta Precisión</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Creatividades en video y texto persuasivo dirigidos a los dolores exactos de tu cliente ideal.</p>
        </div>
        
        <div class="tg-card">
          <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary); margin-bottom: 10px;">02</div>
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; margin-bottom: 10px;">Filtro y Calificación con IA</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Agentes de IA en WhatsApp responden en menos de 30 segundos, validan el presupuesto y agendan llamadas.</p>
        </div>

        <div class="tg-card">
          <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary); margin-bottom: 10px;">03</div>
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; font-weight: 800; margin-bottom: 10px;">Trazabilidad & Cierre en CRM</h4>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">Automatizaciones en Kommo CRM para que ningún contacto quede sin seguimiento comercial oportuno.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CTA SECTION ===== -->
  <section class="tg-section tg-section-dark">
    <div class="tg-container" style="text-align: center; max-width: 800px; margin: 0 auto;">
      <h2 style="font-family: var(--font-heading); font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 900; margin-bottom: 18px; color: #ffffff;">
        ¿Listo para estructurar un canal de adquisición predecible?
      </h2>
      <p style="font-size: 1.1rem; color: var(--text-light-muted); margin-bottom: 36px; line-height: 1.6;">
        Analizamos tu negocio, estructuramos tu funnel de ventas y configuramos los anuncios que tu empresa necesita para crecer.
      </p>
      <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero agendar una reunión para analizar la captación de leads de mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary" style="padding: 16px 36px; font-size: 1rem;">
        Agendar Consulta Estratégica Gratuita →
      </a>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>

