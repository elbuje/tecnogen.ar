<?php
/**
 * Footer Global - TecnoGen
 * https://tecnogen.ar
 */
?>
<footer class="tg-footer">
  <div class="tg-container">
    <div class="tg-footer-grid">
      
      <!-- Brand & Mission Col -->
      <div>
        <div class="tg-logo" style="margin-bottom: 18px;">
          <div class="tg-logo-mark">TG</div>
          <div class="tg-logo-text" style="color: #ffffff;">Tecno<span style="color: #38BDF8;">Gen</span></div>
        </div>
        <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-light-muted); margin-bottom: 20px;">
          La unión estratégica de <strong>TecnoBrain</strong> y <strong>GEN de Negocio</strong>. Desarrollamos infraestructura tecnológica de vanguardia, inteligencia artificial aplicada, CRM y marketing de alta conversión.
        </p>
        <div style="display: flex; gap: 14px;">
          <a href="<?= SITE_INSTAGRAM ?>" target="_blank" rel="noopener noreferrer" style="color: #38BDF8; font-weight: 700; font-size: 0.9rem;">Instagram</a>
          <span style="color: rgba(255,255,255,0.2);">•</span>
          <a href="<?= SITE_LINKEDIN ?>" target="_blank" rel="noopener noreferrer" style="color: #38BDF8; font-weight: 700; font-size: 0.9rem;">LinkedIn</a>
        </div>
      </div>

      <!-- Soluciones Principales -->
      <div>
        <h4 class="tg-footer-title">Soluciones</h4>
        <ul class="tg-footer-links">
          <li><a href="/agentes-inteligencia-artificial" class="tg-footer-link">Agentes de IA</a></li>
          <li><a href="/inteligencia-artificial-empresas" class="tg-footer-link">IA para Empresas</a></li>
          <li><a href="/automatizacion-de-procesos" class="tg-footer-link">Automatización de Procesos</a></li>
          <li><a href="/crm-whatsapp-ventas" class="tg-footer-link">CRM & WhatsApp API</a></li>
          <li><a href="/contenido-inteligencia-artificial" class="tg-footer-link">Content OS con IA</a></li>
        </ul>
      </div>

      <!-- Marketing & SEO -->
      <div>
        <h4 class="tg-footer-title">Marketing & Crecimiento</h4>
        <ul class="tg-footer-links">
          <li><a href="/agencia-marketing-digital" class="tg-footer-link">Marketing Digital</a></li>
          <li><a href="/agencia-seo-posicionamiento" class="tg-footer-link">SEO & Motores IA (GEO)</a></li>
          <li><a href="/Mentalidad-Marketing-Neuroventas-con-IA" class="tg-footer-link" style="color: #F59E0B; font-weight: 700;">⚡ Evento Presencial 10 Oct</a></li>
          <li><a href="/sobre-nosotros" class="tg-footer-link">Sobre Nosotros</a></li>
          <li><a href="/contacto" class="tg-footer-link">Contacto</a></li>
        </ul>
      </div>

      <!-- Contacto Directo -->
      <div>
        <h4 class="tg-footer-title">Contacto Directo</h4>
        <p style="font-size: 0.9rem; color: var(--text-light-muted); margin-bottom: 10px;">
          📍 Buenos Aires, Argentina (Cobertura Global)
        </p>
        <p style="font-size: 0.9rem; color: var(--text-light-muted); margin-bottom: 10px;">
          💬 WhatsApp: <a href="<?= get_whatsapp_url() ?>" target="_blank" rel="noopener noreferrer" style="color: #22C55E; font-weight: 700;"><?= SITE_PHONE ?></a>
        </p>
        <p style="font-size: 0.9rem; color: var(--text-light-muted);">
          ✉️ Email: <a href="mailto:<?= SITE_EMAIL ?>" style="color: #38BDF8;"><?= SITE_EMAIL ?></a>
        </p>
      </div>

    </div>

    <!-- Bottom Copyright -->
    <div class="tg-footer-bottom">
      <div>
        &copy; <?= date('Y') ?> TecnoGen. Todos los derechos reservados. Unión estratégica de TecnoBrain y GEN de Negocio.
      </div>
      <div>
        Infraestructura Cloud de Alto Rendimiento · Buenos Aires, Argentina
      </div>
    </div>
  </div>
</footer>

<!-- Scripts Globales -->
<script src="/assets/js/main.js?v=1.0"></script>
<?= render_whatsapp_float() ?>
