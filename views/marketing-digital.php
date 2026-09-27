<?php
/**
 * View: Marketing Digital - TecnoGen
 * https://tecnogen.ar/agencia-marketing-digital
 */
$current_slug = 'agencia-marketing-digital';
$page_data = [
    'title' => 'Agencia de Marketing Digital & Funnels de Alta Conversión | TecnoGen',
    'description' => 'Campañas de adquisición en Meta Ads, Google Ads y LinkedIn Ads integradas con automatizaciones comerciales y calificación de leads por IA.',
    'keywords' => 'marketing digital argentina, funnels de venta, pauta publicitaria meta ads, google ads empresas, generacion de leads calificados',
    'service_name' => 'Marketing Digital & Funnels de Conversión'
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
            ✦ Adquisición & Conversión
          </div>
          <h1 class="tg-hero-title">
            Marketing Digital orientado a <span class="tg-gradient-text">Ventas Reales</span>, no solo clics.
          </h1>
          <p class="tg-hero-subtitle">
            Diseñamos embudos comerciales de alta conversión conectando anuncios precisos en Google y Meta con respuestas automáticas por WhatsApp y seguimiento en CRM.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero solicitar una auditoría de Marketing Digital para mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Solicitar Auditoría de Pauta →
            </a>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-sm);">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
            Nuestro Enfoque Estratégico
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
            No medimos el éxito en likes ni impresiones vacías. Cada peso invertido en pauta publicitaria está conectado a un pipeline de ventas para medir el Retorno de Inversión Real (ROAS).
          </p>
          <div style="background: var(--light-bg); padding: 20px; border-radius: var(--radius-md); border-left: 4px solid var(--primary);">
            <div style="font-weight: 800; font-size: 0.9rem; color: var(--text-dark);">Trazabilidad Total:</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">Desde el primer clic en el anuncio hasta la firma del contrato en el CRM.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="tg-section">
    <div class="tg-container">
      <div class="tg-section-header">
        <div class="tg-badge tg-badge-blue">SERVICIOS DE MARKETING</div>
        <h2 class="tg-section-title">Pilares de Nuestra Estrategia de Crecimiento</h2>
        <p class="tg-section-desc">Soluciones integradas para asegurar un flujo constante de prospectos calificados.</p>
      </div>

      <div class="tg-services-grid">
        <div class="tg-card">
          <div class="tg-card-icon">🎯</div>
          <h3 class="tg-card-title">Meta Ads (Facebook & Instagram)</h3>
          <p class="tg-card-desc">Segmentación avanzada por intereses, cargos e intención de compra con creatividades en video y carruseles de alta persuasión.</p>
        </div>

        <div class="tg-card">
          <div class="tg-card-icon">🔍</div>
          <h3 class="tg-card-title">Google Search & Performance Max</h3>
          <p class="tg-card-desc">Captura de demanda en el momento exacto en que los clientes buscan tus productos o servicios en Google.</p>
        </div>

        <div class="tg-card">
          <div class="tg-card-icon">💼</div>
          <h3 class="tg-card-title">LinkedIn Ads B2B</h3>
          <p class="tg-card-desc">Generación de leads corporativos contactando directamente a directores de compras, gerentes y dueños de empresas.</p>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
