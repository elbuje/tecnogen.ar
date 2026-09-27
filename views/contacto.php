<?php
/**
 * View: Contacto - TecnoGen
 * https://tecnogen.ar/contacto
 */
$current_slug = 'contacto';
$page_data = [
    'title' => 'Contacto & Agendamiento de Consultoría | TecnoGen',
    'description' => 'Agendá una sesión de consultoría técnica sin cargo con TecnoGen. Hablemos de cómo implementar marketing, IA y automatizaciones en tu empresa.',
    'keywords' => 'contacto tecnogen, agendar consultoria ia, soporte tecnogen argentina'
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
      <div style="max-width: 680px; margin: 0 auto; text-align: center;">
        <div class="tg-badge tg-badge-blue" style="margin-bottom: 20px;">
          ✦ HABLEMOS DE TU PROYECTO
        </div>
        <h1 class="tg-hero-title">
          Agendá una sesión <span class="tg-gradient-text">estratégica sin cargo</span>.
        </h1>
        <p class="tg-hero-subtitle" style="margin: 0 auto 30px;">
          Evaluamos tus procesos actuales, identificamos oportunidades inmediatas de automatización e IA y diseñamos una hoja de ruta técnica a medida.
        </p>
        <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero agendar una consultoría técnica estratégica para mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary" style="font-size: 1.05rem; padding: 16px 36px;">
          💬 Iniciar Consulta Directa por WhatsApp
        </a>
      </div>
    </div>
  </section>

  <section class="tg-section" style="background: #ffffff;">
    <div class="tg-container" style="max-width: 800px;">
      <div style="background: var(--light-bg); border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-sm); display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px;">
        <div>
          <div style="font-size: 1.5rem; margin-bottom: 8px;">📍</div>
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 6px;">Ubicación</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted);">Lavalle 362, Microcentro, CABA, Argentina.</p>
        </div>
        <div>
          <div style="font-size: 1.5rem; margin-bottom: 8px;">💬</div>
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 6px;">WhatsApp Oficial</h4>
          <a href="<?= get_whatsapp_url() ?>" target="_blank" style="font-size: 0.9rem; color: #22C55E; font-weight: 700;"><?= SITE_PHONE ?></a>
        </div>
        <div>
          <div style="font-size: 1.5rem; margin-bottom: 8px;">✉️</div>
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-dark); margin-bottom: 6px;">Correo Electrónico</h4>
          <a href="mailto:<?= SITE_EMAIL ?>" style="font-size: 0.9rem; color: var(--primary);"><?= SITE_EMAIL ?></a>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
