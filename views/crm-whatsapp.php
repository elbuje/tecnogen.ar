<?php
/**
 * View: CRM & WhatsApp - TecnoGen
 * https://tecnogen.ar/crm-whatsapp-ventas
 */
$current_slug = 'crm-whatsapp-ventas';
$page_data = [
    'title' => 'CRM Kommo & WhatsApp Cloud API Oficial para Empresas | TecnoGen',
    'description' => 'Implementación oficial de Kommo CRM y WhatsApp Business Cloud API. Trazabilidad total de prospectos, embudos de venta y automatización de mensajes.',
    'keywords' => 'crm whatsapp empresas, kommo crm argentina, whatsapp business api oficial, embudos de venta whatsapp, crm ventas pymes',
    'service_name' => 'CRM Kommo & WhatsApp Business API'
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
            ✦ Partner Oficial Kommo & Meta
          </div>
          <h1 class="tg-hero-title">
            El CRM definitivo para vender por <span class="tg-gradient-text">WhatsApp</span>.
          </h1>
          <p class="tg-hero-subtitle">
            Centralizá todas las conversaciones de tu equipo en un solo lugar. Asignación automática de asesores, embudos visuales de venta y WhatsApp Cloud API oficial sin riesgo de bloqueos.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero implementar Kommo CRM y WhatsApp API en mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Solicitar Implementación de CRM →
            </a>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-sm);">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
            Beneficios de la API Oficial
          </h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: var(--text-muted);">
            <li>✅ <strong>Múltiples Asesores:</strong> Varios agentes respondiendo desde una sola línea corporativa.</li>
            <li>🛡️ <strong>Cero Riesgo de Baneo:</strong> Conexión nativa verificada por Meta.</li>
            <li>📊 <strong>Control y Auditoría:</strong> Registro histórico de cada mensaje y tiempo de respuesta.</li>
            <li>🤖 <strong>Disparadores Automáticos:</strong> Mensajes de seguimiento basados en la etapa del embudo.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
