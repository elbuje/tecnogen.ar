<?php
/**
 * View: Agentes IA - TecnoGen
 * https://tecnogen.ar/agentes-inteligencia-artificial
 */
$current_slug = 'agentes-inteligencia-artificial';
$page_data = [
    'title' => 'Agentes de Inteligencia Artificial & Asistentes Autónomos 24/7 | TecnoGen',
    'description' => 'Desarrollo e implementación de Agentes de IA conversacionales para WhatsApp, CRM y web. Calificación automática de leads, agendamiento y resolución de consultas.',
    'keywords' => 'agentes de inteligencia artificial, asistentes autonomos whatsapp, chatbots con ia argentina, agentes de ventas ia, automatizacion de atencion al cliente',
    'service_name' => 'Agentes Autónomos de Inteligencia Artificial'
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
            ✦ Fuerza Comercial Autónoma 24/7
          </div>
          <h1 class="tg-hero-title">
            Agentes de IA que <span class="tg-gradient-text">atienden, califican y venden</span> por vos.
          </h1>
          <p class="tg-hero-subtitle">
            No son chatbots rígidos con botones limitados. Son agentes inteligentes capaces de entender lenguaje natural, consultar disponibilidad, enviar cotizaciones y derivar a tu equipo solo a los prospectos listos para comprar.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero ver una demo de los Agentes de IA en acción.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Ver Demo en Vivo por WhatsApp →
            </a>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-sm);">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
            Capacidades de Nuestros Agentes
          </h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: var(--text-muted);">
            <li>💬 <strong>Conversaciones Naturales:</strong> Respuestas humanas, empáticas y orientadas al cierre.</li>
            <li>⏱️ <strong>Tiempo de Respuesta Cero:</strong> Atención inmediata las 24 horas del día, los 365 días del año.</li>
            <li>📅 <strong>Agendamiento Automático:</strong> Sincronización directa con Google Calendar y CRM.</li>
            <li>📊 <strong>Calificación de Prospectos:</strong> Filtrado por presupuesto, urgencia y tipo de cliente.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
