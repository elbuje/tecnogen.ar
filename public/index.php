<?php
/**
 * Front Controller & Routing - TecnoGen
 * Domain: https://tecnogen.ar
 */
require_once __DIR__ . "/../includes/config.php";
require_once __DIR__ . "/../includes/seo_helper.php";

// Parse URI
$request_uri = parse_url($_SERVER["REQUEST_URI"] ?? "/", PHP_URL_PATH);
$path = trim($request_uri, "/");

// Router table (Friendly URLs)
$routes = [
    ""                                    => __DIR__ . "/../views/index.php",
    "inicio"                              => __DIR__ . "/../views/index.php",
    "home"                                => __DIR__ . "/../views/index.php",
    
    // Marketing & Funnels
    "agencia-marketing-digital"           => __DIR__ . "/../views/marketing-digital.php",
    "agencia-marketing"                   => __DIR__ . "/../views/marketing-digital.php",
    "marketing-digital"                   => __DIR__ . "/../views/marketing-digital.php",
    
    // SEO & GEO
    "agencia-seo-posicionamiento"         => __DIR__ . "/../views/seo-posicionamiento.php",
    "agencia-seo"                         => __DIR__ . "/../views/seo-posicionamiento.php",
    "seo"                                 => __DIR__ . "/../views/seo-posicionamiento.php",
    "geo"                                 => __DIR__ . "/../views/seo-posicionamiento.php",
    
    // IA para Empresas
    "inteligencia-artificial-empresas"    => __DIR__ . "/../views/inteligencia-artificial.php",
    "inteligencia-artificial"             => __DIR__ . "/../views/inteligencia-artificial.php",
    "ia"                                  => __DIR__ . "/../views/inteligencia-artificial.php",
    
    // Agentes de IA
    "agentes-inteligencia-artificial"     => __DIR__ . "/../views/agentes-ia.php",
    "agentes-ia"                          => __DIR__ . "/../views/agentes-ia.php",
    "agentes"                             => __DIR__ . "/../views/agentes-ia.php",
    
    // Automatizaciones
    "automatizacion-de-procesos"          => __DIR__ . "/../views/automatizacion.php",
    "automatizacion"                      => __DIR__ . "/../views/automatizacion.php",
    "procesos"                            => __DIR__ . "/../views/automatizacion.php",
    
    // CRM & WhatsApp
    "crm-whatsapp-ventas"                 => __DIR__ . "/../views/crm-whatsapp.php",
    "crm-whatsapp"                        => __DIR__ . "/../views/crm-whatsapp.php",
    "whatsapp"                            => __DIR__ . "/../views/crm-whatsapp.php",
    "kommo"                               => __DIR__ . "/../views/crm-whatsapp.php",
    
    // Contenidos
    "contenido-inteligencia-artificial"   => __DIR__ . "/../views/contenido-ia.php",
    "contenido-ia"                        => __DIR__ . "/../views/contenido-ia.php",
    "content-os"                          => __DIR__ . "/../views/contenido-ia.php",
    
    // Institucional & Contacto
    "sobre-nosotros"                      => __DIR__ . "/../views/sobre-nosotros.php",
    "nosotros"                            => __DIR__ . "/../views/sobre-nosotros.php",
    "contacto"                            => __DIR__ . "/../views/contacto.php",
    
    // Evento Presencial 10 de Octubre
    "Mentalidad-Marketing-Neuroventas-con-IA" => __DIR__ . "/../views/landing-evento.php",
    "mentalidad-marketing-neuroventas-con-ia" => __DIR__ . "/../views/landing-evento.php",
    "evento"                                  => __DIR__ . "/../views/landing-evento.php",
    "evento-octubre"                          => __DIR__ . "/../views/landing-evento.php",
    "neuroventas-ia"                          => __DIR__ . "/../views/landing-evento.php",
];

// Static file serving fallback with High Performance Caching
if (file_exists(__DIR__ . "/" . $path) && is_file(__DIR__ . "/" . $path) && !preg_match("/\.php$/i", $path)) {
    $filePath = __DIR__ . "/" . $path;
    $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
    $mimes = [
        "ico"  => "image/x-icon",
        "jpg"  => "image/jpeg",
        "jpeg" => "image/jpeg",
        "png"  => "image/png",
        "webp" => "image/webp",
        "css"  => "text/css",
        "js"   => "application/javascript",
        "xml"  => "application/xml",
        "txt"  => "text/plain",
        "svg"  => "image/svg+xml",
        "html" => "text/html",
    ];
    $contentType = $mimes[$ext] ?? mime_content_type($filePath);
    $lastModified = filemtime($filePath);
    $etag = '"' . md5($lastModified . filesize($filePath)) . '"';

    header("Content-Type: " . $contentType);
    header("Content-Length: " . filesize($filePath));
    header("ETag: " . $etag);
    header("Last-Modified: " . gmdate("D, d M Y H:i:s", $lastModified) . " GMT");

    // Static assets cache for 1 year, HTML/TXT/XML for 1 hour
    if (in_array($ext, ["jpg", "jpeg", "png", "webp", "ico", "svg", "css", "js", "woff2", "woff"])) {
        header("Cache-Control: public, max-age=31536000, immutable");
    } else {
        header("Cache-Control: public, max-age=3600, must-revalidate");
    }

    if (isset($_SERVER['HTTP_IF_NONE_MATCH']) && trim($_SERVER['HTTP_IF_NONE_MATCH']) === $etag) {
        header("HTTP/1.1 304 Not Modified");
        exit;
    }

    readfile($filePath);
    exit;
}

// Sitemap XML dinámico
if ($path === "sitemap.xml") {
    header("Content-Type: application/xml; charset=utf-8");
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc><?= SITE_URL ?>/</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/agencia-marketing-digital</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/agencia-seo-posicionamiento</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/inteligencia-artificial-empresas</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/agentes-inteligencia-artificial</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/automatizacion-de-procesos</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/crm-whatsapp-ventas</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/contenido-inteligencia-artificial</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/sobre-nosotros</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/contacto</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc><?= SITE_URL ?>/Mentalidad-Marketing-Neuroventas-con-IA</loc>
    <lastmod><?= date("Y-m-d") ?></lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
</urlset>
    <?php
    exit;
}

// Robots.txt dinámico
if ($path === "robots.txt") {
    header("Content-Type: text/plain; charset=utf-8");
    echo "User-agent: *\nAllow: /\nSitemap: " . SITE_URL . "/sitemap.xml\n";
    exit;
}

// Route Execution
if (isset($routes[$path])) {
    require $routes[$path];
    exit;
}

// 404 Fallback
http_response_code(404);
$page_data = [
    'title' => 'Página no encontrada | TecnoGen',
    'description' => 'La página que buscás no existe o fue movida.'
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <?php render_seo_head($page_data); ?>
</head>
<body>
  <?php require __DIR__ . '/../views/layout/header.php'; ?>
  <section class="tg-section" style="min-height: 60vh; display: flex; align-items: center;">
    <div class="tg-container" style="text-align: center;">
      <h1 class="tg-hero-title">404</h1>
      <p class="tg-hero-subtitle" style="margin: 0 auto 30px;">La página solicitada no existe.</p>
      <a href="/" class="tg-btn tg-btn-primary">Volver al Inicio →</a>
    </div>
  </section>
  <?php require __DIR__ . '/../views/layout/footer.php'; ?>
</body>
</html>
