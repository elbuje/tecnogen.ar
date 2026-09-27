<?php
/**
 * View: Automatizacion de Procesos - TecnoGen
 * https://tecnogen.ar/automatizacion-de-procesos
 */
$current_slug = 'automatizacion-de-procesos';
$page_data = [
    'title' => 'Automatización de Procesos Empresariales & Flujos Comerciales | TecnoGen',
    'description' => 'Automatización de procesos de negocio, flujos comerciales, sincronización de CRM, WhatsApp, pasarelas de pago y facturación sin intervención manual.',
    'keywords' => 'automatizacion de procesos empresas, integraciones make n8n zapier, automatizacion de flujos de trabajo, automatizacion comercial argentina',
    'service_name' => 'Automatización de Procesos Empresariales'
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <?php render_seo_head($page_data); ?>
</head>
<body>
  <?php require __DIR__ . '/layout/header.php'; ?>

  <section class="tg-hero">
    <div class="tg-container">
      <div class="tg-hero-grid">
        <div>
          <div class="tg-badge tg-badge-blue" style="margin-bottom: 20px;">
            ✦ Eficiencia Operativa & Escala
          </div>
          <h1 class="tg-hero-title">
            Eliminá tareas repetitivas y <span class="tg-gradient-text">escalá sin fricción</span>.
          </h1>
          <p class="tg-hero-subtitle">
            Conectamos tus herramientas de trabajo para que la información fluya en tiempo real. Cotizaciones automáticas, alertas comerciales, creación de facturas y nutrición de leads sin errores humanos.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero automatizar los procesos de mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Mapear Procesos por WhatsApp →
            </a>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-sm);">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
            ¿Qué automatizamos?
          </h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: var(--text-muted);">
            <li>🔗 <strong>Integración CRM + WhatsApp:</strong> Creación automática de contactos y tareas.</li>
            <li>🧾 <strong>Facturación & Cobranzas:</strong> Envío de enlaces de pago y recordatorios automáticos.</li>
            <li>📊 <strong>Reportes en Tiempo Real:</strong> Paneles ejecutivos en Google Looker Studio y Sheets.</li>
            <li>🔄 <strong>Seguimiento de Cotizaciones:</strong> Flujos de nutrición post-propuesta.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
