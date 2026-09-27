<?php
/**
 * Header Global - TecnoGen
 * https://tecnogen.ar
 */
$current_slug = $current_slug ?? '';
?>
<header class="tg-header">
  <div class="tg-container tg-nav-wrap">
    <!-- Brand Logo -->
    <a href="/" class="tg-logo" aria-label="TecnoGen - Inicio">
      <div class="tg-logo-mark">TG</div>
      <div class="tg-logo-text">Tecno<span>Gen</span></div>
    </a>

    <!-- Desktop Navigation Links -->
    <nav aria-label="Navegación principal">
      <ul class="tg-nav-links">
        <li><a href="/" class="tg-nav-link <?= $current_slug === '' ? 'active' : '' ?>">Inicio</a></li>
        <li><a href="/agencia-marketing-digital" class="tg-nav-link <?= $current_slug === 'agencia-marketing-digital' ? 'active' : '' ?>">Marketing Digital</a></li>
        <li><a href="/agencia-seo-posicionamiento" class="tg-nav-link <?= $current_slug === 'agencia-seo-posicionamiento' ? 'active' : '' ?>">SEO & IA</a></li>
        <li><a href="/inteligencia-artificial-empresas" class="tg-nav-link <?= $current_slug === 'inteligencia-artificial-empresas' ? 'active' : '' ?>">IA Empresas</a></li>
        <li><a href="/agentes-inteligencia-artificial" class="tg-nav-link <?= $current_slug === 'agentes-inteligencia-artificial' ? 'active' : '' ?>">Agentes IA</a></li>
        <li><a href="/automatizacion-de-procesos" class="tg-nav-link <?= $current_slug === 'automatizacion-de-procesos' ? 'active' : '' ?>">Automatización</a></li>
        <li><a href="/crm-whatsapp-ventas" class="tg-nav-link <?= $current_slug === 'crm-whatsapp-ventas' ? 'active' : '' ?>">CRM & WhatsApp</a></li>
        <li><a href="/Mentalidad-Marketing-Neuroventas-con-IA" class="tg-nav-event-link">⚡ Evento 10 Oct</a></li>
      </ul>
    </nav>

    <!-- Header Action Button -->
    <div style="display: flex; align-items: center; gap: 14px;">
      <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero solicitar una consultoría técnica para mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary" style="padding: 10px 20px; font-size: 0.85rem;">
        Agendar Consulta
      </a>
      <button class="tg-mobile-toggle" id="tg-mobile-toggle" aria-label="Abrir menú de navegación">☰</button>
    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div class="tg-mobile-menu" id="tg-mobile-menu">
    <a href="/" class="tg-nav-link <?= $current_slug === '' ? 'active' : '' ?>">Inicio</a>
    <a href="/agencia-marketing-digital" class="tg-nav-link <?= $current_slug === 'agencia-marketing-digital' ? 'active' : '' ?>">Marketing Digital & Funnels</a>
    <a href="/agencia-seo-posicionamiento" class="tg-nav-link <?= $current_slug === 'agencia-seo-posicionamiento' ? 'active' : '' ?>">SEO & Posicionamiento en IA (GEO)</a>
    <a href="/inteligencia-artificial-empresas" class="tg-nav-link <?= $current_slug === 'inteligencia-artificial-empresas' ? 'active' : '' ?>">IA para Empresas & RAG</a>
    <a href="/agentes-inteligencia-artificial" class="tg-nav-link <?= $current_slug === 'agentes-inteligencia-artificial' ? 'active' : '' ?>">Agentes Autónomos de IA</a>
    <a href="/automatizacion-de-procesos" class="tg-nav-link <?= $current_slug === 'automatizacion-de-procesos' ? 'active' : '' ?>">Automatización de Procesos</a>
    <a href="/crm-whatsapp-ventas" class="tg-nav-link <?= $current_slug === 'crm-whatsapp-ventas' ? 'active' : '' ?>">CRM Kommo & WhatsApp API</a>
    <a href="/contenido-inteligencia-artificial" class="tg-nav-link <?= $current_slug === 'contenido-inteligencia-artificial' ? 'active' : '' ?>">Content OS con IA</a>
    <a href="/sobre-nosotros" class="tg-nav-link <?= $current_slug === 'sobre-nosotros' ? 'active' : '' ?>">Sobre Nosotros</a>
    <a href="/contacto" class="tg-nav-link <?= $current_slug === 'contacto' ? 'active' : '' ?>">Contacto</a>
    <a href="/Mentalidad-Marketing-Neuroventas-con-IA" class="tg-nav-event-link" style="text-align: center; margin-top: 10px;">⚡ Evento Presencial 10 de Octubre</a>
  </div>
</header>
