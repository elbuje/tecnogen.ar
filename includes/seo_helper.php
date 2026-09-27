<?php
/**
 * SEO & Schema.org Helper - TecnoGen (https://tecnogen.ar)
 */

function render_seo_head($page_data = []) {
    $title = $page_data['title'] ?? 'TecnoGen | Marketing Digital, Inteligencia Artificial & Automatización';
    $desc = $page_data['description'] ?? 'Agencia y consultora especializada en infraestructura tecnológica, IA aplicada, agentes autónomos, CRM y marketing digital para empresas y PyMEs.';
    $canonical = $page_data['canonical'] ?? SITE_URL . parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
    $og_img = $page_data['og_image'] ?? SITE_URL . '/assets/images/og-tecnogen.jpg';
    $og_type = $page_data['og_type'] ?? 'website';
    $keywords = $page_data['keywords'] ?? 'tecnogen, marketing digital argentina, inteligencia artificial empresas, agentes de ia, automatizacion de procesos, crm whatsapp kommo, seo posicionamiento, consultoria tecnologica';
    $schema_type = $page_data['schema_type'] ?? 'organization';
    $service_name = $page_data['service_name'] ?? null;
    ?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title><?= htmlspecialchars($title) ?></title>
  <meta name="description" content="<?= htmlspecialchars($desc) ?>">
  <meta name="keywords" content="<?= htmlspecialchars($keywords) ?>">
  <meta name="author" content="TecnoGen (TecnoBrain & GEN de Negocio)">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <link rel="canonical" href="<?= htmlspecialchars($canonical) ?>">

  <!-- Favicons -->
  <link rel="icon" type="image/svg+xml" href="/vite.svg">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">

  <!-- Geo-Targeting & Local SEO -->
  <meta name="geo.region" content="AR-C">
  <meta name="geo.placename" content="Buenos Aires, Argentina">
  <meta name="geo.position" content="-34.6037;-58.3816">
  <meta name="ICBM" content="-34.6037, -58.3816">
  <meta name="language" content="Spanish">
  <meta name="coverage" content="Worldwide">
  <meta name="distribution" content="Global">

  <!-- Open Graph -->
  <meta property="og:type" content="<?= htmlspecialchars($og_type) ?>">
  <meta property="og:locale" content="es_AR">
  <meta property="og:site_name" content="TecnoGen">
  <meta property="og:title" content="<?= htmlspecialchars($title) ?>">
  <meta property="og:description" content="<?= htmlspecialchars($desc) ?>">
  <meta property="og:url" content="<?= htmlspecialchars($canonical) ?>">
  <meta property="og:image" content="<?= htmlspecialchars($og_img) ?>">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= htmlspecialchars($title) ?>">
  <meta name="twitter:description" content="<?= htmlspecialchars($desc) ?>">
  <meta name="twitter:image" content="<?= htmlspecialchars($og_img) ?>">

  <!-- Webfonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@700;800;900&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="/assets/css/style.css?v=1.0">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "<?= SITE_URL ?>/#organization",
        "name": "TecnoGen",
        "url": "<?= SITE_URL ?>",
        "logo": "<?= SITE_URL ?>/assets/images/logo.png",
        "description": "Unión estratégica de TecnoBrain y GEN de Negocio. Soluciones en IA, automatización, CRM y marketing digital.",
        "telephone": "<?= SITE_PHONE ?>",
        "email": "<?= SITE_EMAIL ?>",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Buenos Aires",
          "addressCountry": "AR"
        },
        "sameAs": [
          "<?= SITE_INSTAGRAM ?>",
          "<?= SITE_LINKEDIN ?>"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "<?= SITE_URL ?>/#website",
        "url": "<?= SITE_URL ?>",
        "name": "TecnoGen",
        "publisher": {
          "@id": "<?= SITE_URL ?>/#organization"
        }
      }
      <?php if (!empty($service_name)): ?>
      ,{
        "@type": "Service",
        "name": "<?= htmlspecialchars($service_name) ?>",
        "provider": {
          "@id": "<?= SITE_URL ?>/#organization"
        },
        "description": "<?= htmlspecialchars($desc) ?>",
        "areaServed": "Worldwide"
      }
      <?php endif; ?>
    ]
  }
  </script>
<?php
}
