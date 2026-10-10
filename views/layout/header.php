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
      <img src="/brand/tecnogen-logo.png" alt="TecnoGen" class="tg-brand-logo" width="160" height="50">
    </a>

    <!-- Navigation Links (Exact from Template Image 2) -->
    <nav class="tg-nav-desktop" aria-label="Navegación principal">
      <ul class="tg-nav-links">
        <li><a href="/agencia-marketing-digital" class="tg-nav-link <?= $current_slug === 'agencia-marketing-digital' ? 'active' : '' ?>">Soluciones</a></li>
        <li><a href="/automatizacion-de-procesos" class="tg-nav-link <?= $current_slug === 'automatizacion-de-procesos' ? 'active' : '' ?>">Servicios</a></li>
        <li><a href="/sobre-nosotros#casos" class="tg-nav-link">Casos de éxito</a></li>
        <li><a href="/sobre-nosotros" class="tg-nav-link <?= $current_slug === 'sobre-nosotros' ? 'active' : '' ?>">Nosotros</a></li>
        <li>
          <a href="/Mentalidad-Marketing-Neuroventas-con-IA" class="tg-nav-pill-event">
            <span class="tg-pill-dot"></span> Evento 10 Oct
          </a>
        </li>
      </ul>
    </nav>

    <!-- Header Actions -->
    <div class="tg-header-actions">
      <a href="/Mentalidad-Marketing-Neuroventas-con-IA#entradas" class="tg-btn-entradas">
        🎟️ Entradas
      </a>
      <a href="/contacto" class="tg-btn-contactanos">
        Contáctanos
      </a>
      <button class="tg-mobile-toggle" id="tg-mobile-toggle" aria-label="Abrir menú de navegación">☰</button>
    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div class="tg-mobile-menu" id="tg-mobile-menu">
    <div class="tg-mobile-group">
      <a href="/" class="tg-mobile-link <?= $current_slug === '' ? 'active' : '' ?>">Inicio</a>
      <a href="/agencia-marketing-digital" class="tg-mobile-link <?= $current_slug === 'agencia-marketing-digital' ? 'active' : '' ?>">Soluciones</a>
      <a href="/automatizacion-de-procesos" class="tg-mobile-link <?= $current_slug === 'automatizacion-de-procesos' ? 'active' : '' ?>">Servicios</a>
      <a href="/sobre-nosotros#casos" class="tg-mobile-link">Casos de éxito</a>
      <a href="/sobre-nosotros" class="tg-mobile-link <?= $current_slug === 'sobre-nosotros' ? 'active' : '' ?>">Nosotros</a>
    </div>

    <div class="tg-mobile-actions">
      <a href="/Mentalidad-Marketing-Neuroventas-con-IA" class="tg-nav-pill-event" style="display: flex; justify-content: center; width: 100%; padding: 10px;">
        <span class="tg-pill-dot"></span> Evento Presencial 10 Octubre
      </a>
      <a href="/Mentalidad-Marketing-Neuroventas-con-IA#entradas" class="tg-btn-entradas" style="display: flex; justify-content: center; width: 100%; padding: 12px;">
        🎟️ Comprar Entradas Evento
      </a>
      <a href="/contacto" class="tg-btn-contactanos" style="display: flex; justify-content: center; width: 100%; padding: 12px;">
        Contáctanos
      </a>
    </div>
  </div>
</header>


