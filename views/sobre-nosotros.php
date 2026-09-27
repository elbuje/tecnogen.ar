<?php
/**
 * View: Sobre Nosotros - TecnoGen
 * https://tecnogen.ar/sobre-nosotros
 */
$current_slug = 'sobre-nosotros';
$page_data = [
    'title' => 'Sobre Nosotros - La Unión de TecnoBrain y GEN de Negocio | TecnoGen',
    'description' => 'TecnoGen combina la solidez técnica en infraestructura, automatización e IA de TecnoBrain con la visión estratégica de marketing y crecimiento de GEN de Negocio.',
    'keywords' => 'sobre tecnogen, tecnobrain gen de negocio, consultora tecnologia marketing buenos aires, equipo tecnogen'
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
      <div style="max-width: 780px; margin: 0 auto; text-align: center;">
        <div class="tg-badge tg-badge-blue" style="margin-bottom: 20px;">
          ✦ NUESTRA IDENTIDAD
        </div>
        <h1 class="tg-hero-title">
          Tecnología de precisión y <span class="tg-gradient-text">visión estratégica</span> unidas.
        </h1>
        <p class="tg-hero-subtitle" style="margin: 0 auto 30px;">
          TecnoGen nace de la alianza entre <strong>TecnoBrain</strong> (especialistas en infraestructura en la nube, servidores y modelos de IA) y <strong>GEN de Negocio</strong> (estrategia comercial, marketing y escalado de empresas).
        </p>
      </div>
    </div>
  </section>

  <section class="tg-section" style="background: #ffffff;">
    <div class="tg-container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
        <div class="tg-card">
          <div class="tg-badge tg-badge-blue" style="margin-bottom: 14px;">INFRAESTRUCTURA & IA</div>
          <h3 class="tg-card-title">El ADN de TecnoBrain</h3>
          <p class="tg-card-desc">
            Aportamos la solidez técnica: arquitectura cloud de alta disponibilidad, desarrollo de agentes inteligentes, despliegue de modelos RAG privados y automatizaciones robustas que garantizan velocidad y seguridad.
          </p>
        </div>

        <div class="tg-card">
          <div class="tg-badge tg-badge-gold" style="margin-bottom: 14px;">ESTRATEGIA & VENTAS</div>
          <h3 class="tg-card-title">El ADN de GEN de Negocio</h3>
          <p class="tg-card-desc">
            Aportamos el enfoque comercial: comprensión profunda de la psicología del consumidor, embudos de conversión, neuroventas y estrategias de adquisición que transforman la tecnología en facturación.
          </p>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
