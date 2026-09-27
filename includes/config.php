<?php
/**
 * Configuración Central - TecnoGen
 * Dominio: https://tecnogen.ar
 * Soluciones Integrales en Marketing Digital, IA y Automatización
 */

// Detección automática de protocolo y host
$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || (isset($_SERVER['SERVER_PORT']) && $_SERVER['SERVER_PORT'] == 443)) ? "https://" : "http://";
$host = $_SERVER['HTTP_HOST'] ?? 'tecnogen.ar';
define('SITE_URL', rtrim($protocol . $host, '/'));
define('SITE_NAME', 'TecnoGen');
define('SITE_TAGLINE', 'Marketing Digital, Inteligencia Artificial & Automatización de Procesos');
define('SITE_PHONE', '+54 9 11 7061-0766');
define('SITE_PHONE_RAW', '5491170610766');
define('SITE_EMAIL', 'contacto@tecnogen.ar');
define('SITE_INSTAGRAM', 'https://instagram.com/tecnogen.ar');
define('SITE_LINKEDIN', 'https://linkedin.com/company/tecnogen');

/**
 * Generador de enlace WhatsApp con mensaje codificado
 */
function get_whatsapp_url($message = '') {
    if (empty($message)) {
        $message = "Hola TecnoGen! Me comunico desde el sitio web para solicitar consultoría sobre sus servicios.";
    }
    return "https://wa.me/" . SITE_PHONE_RAW . "?text=" . urlencode($message);
}

/**
 * Botón flotante WhatsApp CRO
 */
function render_whatsapp_float() {
    $url = get_whatsapp_url();
    return <<<HTML
    <a href="{$url}" target="_blank" rel="noopener noreferrer" class="tg-wa-float" aria-label="Contactar por WhatsApp">
        <svg class="tg-wa-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
        <span class="tg-wa-tooltip">Chatear por WhatsApp</span>
    </a>
HTML;
}
