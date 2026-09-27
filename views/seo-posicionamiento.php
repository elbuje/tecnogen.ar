<?php
/**
 * View: SEO & GEO - TecnoGen
 * https://tecnogen.ar/agencia-seo-posicionamiento
 */
$current_slug = 'agencia-seo-posicionamiento';
$page_data = [
    'title' => 'Agencia SEO & Posicionamiento en Motores de IA (GEO) | TecnoGen',
    'description' => 'Posicionamiento orgánico transaccional en Google y en respuestas de Inteligencia Artificial (ChatGPT, Gemini, Perplexity). Visibilidad de máxima intención comercial.',
    'keywords' => 'agencia seo argentina, posicionamiento en buscadores, geo generativo engine optimization, seo chatgpt perplexity, seo transaccional',
    'service_name' => 'SEO Transaccional & Motores de IA (GEO)'
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
            ✦ SEO de 5 Capas & GEO
          </div>
          <h1 class="tg-hero-title">
            Sé la primera respuesta en <span class="tg-gradient-text">Google y en la IA</span>.
          </h1>
          <p class="tg-hero-subtitle">
            Optimizamos tu arquitectura web y contenidos para que tu empresa lidere las búsquedas de Google y sea citada por ChatGPT, Perplexity y Gemini en consultas comerciales.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero solicitar una auditoría SEO para mi sitio web.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Solicitar Auditoría SEO Gratuita →
            </a>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-sm);">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
            ¿Qué es GEO (Generative Engine Optimization)?
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Los usuarios ya no solo buscan en Google: le preguntan a ChatGPT o Perplexity qué empresa contratar.
          </p>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">
            Implementamos datos estructurados Schema.org, entidades canónicas y contenido de alta densidad semántica para que los modelos LLM recomienden tus servicios.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="tg-section">
    <div class="tg-container">
      <div class="tg-section-header">
        <div class="tg-badge tg-badge-blue">METODOLOGÍA SEO</div>
        <h2 class="tg-section-title">Nuestras 5 Capas de Optimización</h2>
      </div>

      <div class="tg-services-grid">
        <div class="tg-card">
          <div class="tg-card-icon">⚙️</div>
          <h3 class="tg-card-title">1. Infraestructura & Core Web Vitals</h3>
          <p class="tg-card-desc">Tiempos de carga ultra rápidos (< 1s), renderizado server-side y código limpio optimizado para rastreo de bots.</p>
        </div>

        <div class="tg-card">
          <div class="tg-card-icon">🧠</div>
          <h3 class="tg-card-title">2. Datos Estructurados & Schema.org</h3>
          <p class="tg-card-desc">Marcado JSON-LD avanzado para Organization, Services, LocalBusiness y FAQ, permitiendo fragmentos enriquecidos en Google.</p>
        </div>

        <div class="tg-card">
          <div class="tg-card-icon">📝</div>
          <h3 class="tg-card-title">3. Contenido Semántico de Autoridad</h3>
          <p class="tg-card-desc">Artículos y landings creados para responder la intención de búsqueda exacta del comprador potencial.</p>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
