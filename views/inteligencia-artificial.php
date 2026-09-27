<?php
/**
 * View: Inteligencia Artificial para Empresas - TecnoGen
 * https://tecnogen.ar/inteligencia-artificial-empresas
 */
$current_slug = 'inteligencia-artificial-empresas';
$page_data = [
    'title' => 'Inteligencia Artificial para Empresas & Soluciones RAG | TecnoGen',
    'description' => 'Modelos de IA aplicada, bases de conocimiento privadas (RAG), análisis predictivo y automatización cognitiva para empresas e industrias.',
    'keywords' => 'inteligencia artificial empresas, modelos rag argentina, bases de conocimiento ia, automatizacion cognitiva, consultoria ia empresas',
    'service_name' => 'Inteligencia Artificial para Empresas'
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
            ✦ IA Aplicada a Negocios
          </div>
          <h1 class="tg-hero-title">
            Inteligencia Artificial que resuelve <span class="tg-gradient-text">problemas reales</span>.
          </h1>
          <p class="tg-hero-subtitle">
            Implementamos modelos de lenguaje privados, sistemas RAG conectados a la base de datos de tu empresa y flujos de trabajo inteligentes que multiplican la productividad de tu equipo.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero consultar sobre proyectos de IA para mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Agendar Consultoría de IA →
            </a>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-sm);">
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
            Arquitectura RAG Privada
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px;">
            Tus datos empresariales nunca se comparten con terceros ni se usan para entrenar modelos públicos.
          </p>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.9rem; color: var(--text-muted);">
            <li>🔒 <strong>Seguridad Bancaria:</strong> Vector databases locales y encriptación de extremo a extremo.</li>
            <li>📚 <strong>Conexión a Documentos:</strong> PDFs, bases de datos SQL, manuales y catálogos de productos.</li>
            <li>⚡ <strong>Respuestas en Milisegundos:</strong> Información precisa y sin alucinaciones.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
