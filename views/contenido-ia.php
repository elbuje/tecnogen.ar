<?php
/**
 * View: Content OS con IA - TecnoGen
 * https://tecnogen.ar/contenido-inteligencia-artificial
 */
$current_slug = 'contenido-inteligencia-artificial';
$page_data = [
    'title' => 'Content OS & Generación de Contenido Estratégico con IA | TecnoGen',
    'description' => 'Sistema operativo de producción de contenidos con inteligencia artificial. Creación de carruseles, artículos de autoridad para LinkedIn, guiones y video IA.',
    'keywords' => 'content os inteligencia artificial, creacion de contenido con ia, marketing de contenidos b2b, generacion de articulos linkedin ia',
    'service_name' => 'Content OS con Inteligencia Artificial'
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
            ✦ Producción de Autoridad a Escala
          </div>
          <h1 class="tg-hero-title">
            Tu marca convertida en un <span class="tg-gradient-text">motor de contenido</span> con IA.
          </h1>
          <p class="tg-hero-subtitle">
            Diseñamos pipelines de creación de contenido asistidos por IA que transforman tus ideas en piezas de alto impacto para LinkedIn, Instagram y blogs comerciales, reduciendo el tiempo de producción un 80%.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero conocer más sobre el sistema Content OS con IA.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Consultar por Content OS →
            </a>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-sm);">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
            Flujo de Producción Inteligente
          </h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px; font-size: 0.95rem; color: var(--text-muted);">
            <li>🎙️ <strong>Entrada:</strong> Una nota de voz o idea de 5 minutos de tu especialista.</li>
            <li>⚙️ <strong>Procesamiento IA:</strong> Estructuración en frameworks de persuasión y tono de marca.</li>
            <li>📦 <strong>Salida Multi-Formato:</strong> 1 artículo de fondo, 3 posts para LinkedIn, 1 carrusel y 2 guiones de video listos para publicar.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
