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
      <img src="/brand/tecnogen-logo.png" alt="TecnoGen - Marketing • IA • Automatización" class="tg-brand-logo" width="165" height="46">
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="tg-nav-desktop" aria-label="Navegación principal">
      <ul class="tg-nav-links">
        
        <!-- Dropdown Soluciones -->
        <li class="tg-nav-item tg-has-dropdown">
          <a href="/#soluciones" class="tg-nav-link <?= in_array($current_slug, ['agencia-marketing-digital', 'agencia-seo-posicionamiento', 'inteligencia-artificial-empresas', 'agentes-inteligencia-artificial', 'automatizacion-de-procesos', 'crm-whatsapp-ventas', 'cliente-ideal']) ? 'active' : '' ?>">
            Soluciones <span class="tg-dropdown-arrow">▾</span>
          </a>
          <div class="tg-dropdown-menu">
            <a href="/agencia-marketing-digital" class="tg-dropdown-item <?= $current_slug === 'agencia-marketing-digital' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">📢</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">Marketing Digital & Funnels</div>
                <div class="tg-dropdown-sub">Sistemas de captación de leads en Google & Meta</div>
              </div>
            </a>
            <a href="/agencia-seo-posicionamiento" class="tg-dropdown-item <?= $current_slug === 'agencia-seo-posicionamiento' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">🔍</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">SEO & Motores de IA (GEO)</div>
                <div class="tg-dropdown-sub">Posicionamiento en Google, ChatGPT y Perplexity</div>
              </div>
            </a>
            <a href="/inteligencia-artificial-empresas" class="tg-dropdown-item <?= $current_slug === 'inteligencia-artificial-empresas' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">🤖</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">IA para Empresas & RAG</div>
                <div class="tg-dropdown-sub">Bases de conocimiento privadas e integraciones</div>
              </div>
            </a>
            <a href="/agentes-inteligencia-artificial" class="tg-dropdown-item <?= $current_slug === 'agentes-inteligencia-artificial' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">⚡</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">Agentes Autónomos de IA</div>
                <div class="tg-dropdown-sub">Fuerza comercial 24/7 para WhatsApp y CRM</div>
              </div>
            </a>
            <a href="/automatizacion-de-procesos" class="tg-dropdown-item <?= $current_slug === 'automatizacion-de-procesos' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">⚙️</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">Automatización de Procesos</div>
                <div class="tg-dropdown-sub">Flujos comerciales y sincronización sin código</div>
              </div>
            </a>
            <a href="/crm-whatsapp-ventas" class="tg-dropdown-item <?= $current_slug === 'crm-whatsapp-ventas' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">💬</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">CRM & WhatsApp API</div>
                <div class="tg-dropdown-sub">Pipeline de ventas en Kommo con Meta API oficial</div>
              </div>
            </a>
            <a href="/cliente-ideal" class="tg-dropdown-item tg-dropdown-highlight <?= $current_slug === 'cliente-ideal' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">🎯</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">Generador de Avatar IA <span class="tg-badge-pill-free">GRATIS</span></div>
                <div class="tg-dropdown-sub">Crea el perfil de tu Buyer Persona con IA</div>
              </div>
            </a>
          </div>
        </li>

        <!-- Dropdown Servicios -->
        <li class="tg-nav-item tg-has-dropdown">
          <a href="/#servicios" class="tg-nav-link">
            Servicios <span class="tg-dropdown-arrow">▾</span>
          </a>
          <div class="tg-dropdown-menu tg-dropdown-sm">
            <a href="/contacto" class="tg-dropdown-item">
              <span class="tg-dropdown-icon">📊</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">Consultoría & Auditoría</div>
                <div class="tg-dropdown-sub">Diagnóstico estratégico comercial y tecnológico</div>
              </div>
            </a>
            <a href="/agencia-marketing-digital" class="tg-dropdown-item">
              <span class="tg-dropdown-icon">📈</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">Pauta & Rendimiento</div>
                <div class="tg-dropdown-sub">Campañas orientadas a ROAS y ventas reales</div>
              </div>
            </a>
            <a href="/contenido-inteligencia-artificial" class="tg-dropdown-item <?= $current_slug === 'contenido-inteligencia-artificial' ? 'active' : '' ?>">
              <span class="tg-dropdown-icon">✍️</span>
              <div class="tg-dropdown-text">
                <div class="tg-dropdown-title">Content OS con IA</div>
                <div class="tg-dropdown-sub">Producción estratégica de contenidos y autoridad</div>
              </div>
            </a>
          </div>
        </li>

        <!-- Casos de éxito -->
        <li class="tg-nav-item">
          <a href="/sobre-nosotros#casos" class="tg-nav-link <?= $current_slug === 'casos' ? 'active' : '' ?>">Casos de éxito</a>
        </li>

        <!-- Nosotros -->
        <li class="tg-nav-item">
          <a href="/sobre-nosotros" class="tg-nav-link <?= $current_slug === 'sobre-nosotros' ? 'active' : '' ?>">Nosotros</a>
        </li>

        <!-- Evento Pill -->
        <li class="tg-nav-item">
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
      <a href="/contacto" class="tg-btn tg-btn-primary tg-btn-header">
        Contáctanos
      </a>
      <button class="tg-mobile-toggle" id="tg-mobile-toggle" aria-label="Abrir menú de navegación">☰</button>
    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div class="tg-mobile-menu" id="tg-mobile-menu">
    <div class="tg-mobile-group">
      <div class="tg-mobile-label">Navegación</div>
      <a href="/" class="tg-mobile-link <?= $current_slug === '' ? 'active' : '' ?>">Inicio</a>
      <a href="/sobre-nosotros" class="tg-mobile-link <?= $current_slug === 'sobre-nosotros' ? 'active' : '' ?>">Nosotros</a>
      <a href="/sobre-nosotros#casos" class="tg-mobile-link">Casos de éxito</a>
      <a href="/contacto" class="tg-mobile-link <?= $current_slug === 'contacto' ? 'active' : '' ?>">Contacto</a>
    </div>

    <div class="tg-mobile-group">
      <div class="tg-mobile-label">Soluciones</div>
      <a href="/agencia-marketing-digital" class="tg-mobile-link <?= $current_slug === 'agencia-marketing-digital' ? 'active' : '' ?>">📢 Marketing Digital & Funnels</a>
      <a href="/agencia-seo-posicionamiento" class="tg-mobile-link <?= $current_slug === 'agencia-seo-posicionamiento' ? 'active' : '' ?>">🔍 SEO & Motores IA (GEO)</a>
      <a href="/inteligencia-artificial-empresas" class="tg-mobile-link <?= $current_slug === 'inteligencia-artificial-empresas' ? 'active' : '' ?>">🤖 IA para Empresas & RAG</a>
      <a href="/agentes-inteligencia-artificial" class="tg-mobile-link <?= $current_slug === 'agentes-inteligencia-artificial' ? 'active' : '' ?>">⚡ Agentes Autónomos de IA</a>
      <a href="/automatizacion-de-procesos" class="tg-mobile-link <?= $current_slug === 'automatizacion-de-procesos' ? 'active' : '' ?>">⚙️ Automatización de Procesos</a>
      <a href="/crm-whatsapp-ventas" class="tg-mobile-link <?= $current_slug === 'crm-whatsapp-ventas' ? 'active' : '' ?>">💬 CRM Kommo & WhatsApp API</a>
      <a href="/cliente-ideal" class="tg-mobile-link <?= $current_slug === 'cliente-ideal' ? 'active' : '' ?>" style="color: #06B6D4; font-weight: 700;">🎯 Generador de Avatar IA</a>
    </div>

    <div class="tg-mobile-actions">
      <a href="/Mentalidad-Marketing-Neuroventas-con-IA" class="tg-nav-pill-event" style="display: flex; justify-content: center; width: 100%; padding: 10px;">
        <span class="tg-pill-dot"></span> Evento Presencial 10 Octubre
      </a>
      <a href="/Mentalidad-Marketing-Neuroventas-con-IA#entradas" class="tg-btn-entradas" style="display: flex; justify-content: center; width: 100%; padding: 12px;">
        🎟️ Comprar Entradas Evento
      </a>
      <a href="/contacto" class="tg-btn tg-btn-primary" style="display: flex; justify-content: center; width: 100%; padding: 12px;">
        Contáctanos
      </a>
    </div>
  </div>
</header>

