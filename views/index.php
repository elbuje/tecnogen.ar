<?php
/**
 * View: Home - TecnoGen
 * https://tecnogen.ar/
 */
$page_data = [
    'title' => 'TecnoGen | Marketing Digital, Inteligencia Artificial & Automatización para Empresas',
    'description' => 'Agencia y consultora especializada en infraestructura tecnológica, IA aplicada, agentes autónomos, CRM WhatsApp y marketing de alta conversión para empresas y PyMEs.',
    'keywords' => 'tecnogen, marketing digital argentina, inteligencia artificial empresas, agentes de ia, automatizacion de procesos, crm whatsapp kommo, seo posicionamiento, consultoria tecnologica'
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <?php render_seo_head($page_data); ?>
</head>
<body>
  <?php require __DIR__ . '/layout/header.php'; ?>

  <!-- ===== HERO SECTION ===== -->
  <section class="tg-hero">
    <div class="tg-container">
      <div class="tg-hero-grid">
        <div>
          <div class="tg-badge tg-badge-blue" style="margin-bottom: 20px;">
            ✦ La Unión de TecnoBrain & GEN de Negocio
          </div>
          <h1 class="tg-hero-title">
            Hacemos que tu empresa <span class="tg-gradient-text">venda más</span> con Inteligencia Artificial.
          </h1>
          <p class="tg-hero-subtitle">
            Combinamos infraestructura técnica robusta, agentes autónomos de IA y automatizaciones comerciales con estrategias de marketing digital y funnels orientados a resultados medibles.
          </p>
          <div class="tg-hero-cta">
            <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero solicitar una consultoría técnica estratégica.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
              Solicitar Consultoría Gratuita →
            </a>
            <a href="/Mentalidad-Marketing-Neuroventas-con-IA" class="tg-btn tg-btn-secondary" style="border-color: #F59E0B; color: #B45309;">
              ⚡ Evento Presencial 10 Oct
            </a>
          </div>
        </div>

        <div>
          <div style="background: linear-gradient(135deg, rgba(37,99,235,0.06), rgba(6,182,212,0.06)); border: 1px solid rgba(37,99,235,0.18); border-radius: var(--radius-lg); padding: 36px; box-shadow: var(--shadow-md);">
            <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 1.5px; color: var(--primary); text-transform: uppercase; margin-bottom: 12px;">
              STACK TECNOLÓGICO INTEGRAL
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: var(--text-dark); margin-bottom: 16px;">
              Tecnología & Estrategia Comercial
            </h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 14px; font-size: 0.95rem; color: var(--text-muted);">
              <li style="display: flex; align-items: center; gap: 10px;">
                <span style="color: #22C55E; font-weight: 900;">✓</span> Agentes de IA conversacionales para WhatsApp & CRM
              </li>
              <li style="display: flex; align-items: center; gap: 10px;">
                <span style="color: #22C55E; font-weight: 900;">✓</span> Modelos RAG y bases de conocimiento privadas
              </li>
              <li style="display: flex; align-items: center; gap: 10px;">
                <span style="color: #22C55E; font-weight: 900;">✓</span> Automatización de procesos comerciales sin código
              </li>
              <li style="display: flex; align-items: center; gap: 10px;">
                <span style="color: #22C55E; font-weight: 900;">✓</span> Posicionamiento SEO transaccional y optimización GEO (Motores IA)
              </li>
              <li style="display: flex; align-items: center; gap: 10px;">
                <span style="color: #22C55E; font-weight: 900;">✓</span> Campañas de pauta de alta conversión en Meta y Google Ads
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== DIAGNÓSTICO RÁPIDO / SELECTOR DE NECESIDAD ===== -->
  <section class="tg-section">
    <div class="tg-container">
      <div class="tg-section-header">
        <div class="tg-badge tg-badge-blue">DIAGNÓSTICO RÁPIDO</div>
        <h2 class="tg-section-title">¿Cuál es el principal desafío de tu negocio hoy?</h2>
        <p class="tg-section-desc">Seleccioná tu objetivo comercial para ver la solución tecnológica exacta que implementamos.</p>
      </div>

      <div class="tg-tabs-nav">
        <button class="tg-tab-btn active" data-target="tab-ventas">Quiero más ventas y prospectos</button>
        <button class="tg-tab-btn" data-target="tab-atencion">Quiero automatizar mi atención al cliente</button>
        <button class="tg-tab-btn" data-target="tab-procesos">Quiero reducir tareas operativas manuales</button>
        <button class="tg-tab-btn" data-target="tab-marca">Quiero posicionar mi marca y contenidos</button>
      </div>

      <!-- Tab Content 1 -->
      <div class="tg-tab-content active" id="tab-ventas">
        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-sm); display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
          <div>
            <span class="tg-badge tg-badge-blue" style="margin-bottom: 12px;">Solución Recomendada</span>
            <h3 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">
              Funnels de Tráfico Calificado + Agentes Comerciales
            </h3>
            <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Creamos campañas de alta precisión en Meta Ads y Google Ads integradas con Agentes de IA en WhatsApp que califican prospectos en menos de 30 segundos y los agendan directamente en tu CRM.
            </p>
            <a href="/agencia-marketing-digital" class="tg-btn tg-btn-primary">Ver Marketing Digital & Funnels →</a>
          </div>
          <div style="background: var(--light-bg); border-radius: var(--radius-md); padding: 30px; border: 1px solid #E2E8F0;">
            <div style="font-weight: 800; color: var(--text-dark); margin-bottom: 10px;">Impacto estimado:</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: var(--primary); margin-bottom: 6px;">+40% Conversión</div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">Reducción a cero en el tiempo de respuesta a nuevos prospectos.</div>
          </div>
        </div>
      </div>

      <!-- Tab Content 2 -->
      <div class="tg-tab-content" id="tab-atencion">
        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-sm); display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
          <div>
            <span class="tg-badge tg-badge-blue" style="margin-bottom: 12px;">Solución Recomendada</span>
            <h3 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">
              Agentes Autónomos de Inteligencia Artificial 24/7
            </h3>
            <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Implementamos agentes conversacionales inteligentes entrenados con los manuales, catálogo y políticas de tu empresa, capaces de resolver consultas complejas por WhatsApp, web y correo en cualquier horario.
            </p>
            <a href="/agentes-inteligencia-artificial" class="tg-btn tg-btn-primary">Ver Agentes de IA →</a>
          </div>
          <div style="background: var(--light-bg); border-radius: var(--radius-md); padding: 30px; border: 1px solid #E2E8F0;">
            <div style="font-weight: 800; color: var(--text-dark); margin-bottom: 10px;">Impacto estimado:</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: #06B6D4; margin-bottom: 6px;">24/7 Atención</div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">Resolución autónoma de hasta el 80% de consultas recurrentes.</div>
          </div>
        </div>
      </div>

      <!-- Tab Content 3 -->
      <div class="tg-tab-content" id="tab-procesos">
        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-sm); display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
          <div>
            <span class="tg-badge tg-badge-blue" style="margin-bottom: 12px;">Solución Recomendada</span>
            <h3 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">
              Automatización de Flujos de Trabajo & CRM Kommo
            </h3>
            <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Conectamos tus sistemas existentes (CRM, facturación, WhatsApp, Google Sheets, Make, Zapier) para eliminar la carga manual de datos, acelerar el seguimiento de cotizaciones y asegurar que ningún lead se pierda.
            </p>
            <a href="/automatizacion-de-procesos" class="tg-btn tg-btn-primary">Ver Automatizaciones →</a>
          </div>
          <div style="background: var(--light-bg); border-radius: var(--radius-md); padding: 30px; border: 1px solid #E2E8F0;">
            <div style="font-weight: 800; color: var(--text-dark); margin-bottom: 10px;">Impacto estimado:</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: #10B981; margin-bottom: 6px;">-70% Tareas Manuales</div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">Tu equipo enfocado únicamente en cerrar ventas y atender clientes VIP.</div>
          </div>
        </div>
      </div>

      <!-- Tab Content 4 -->
      <div class="tg-tab-content" id="tab-marca">
        <div style="background: #ffffff; border: 1px solid var(--light-border); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-sm); display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;">
          <div>
            <span class="tg-badge tg-badge-blue" style="margin-bottom: 12px;">Solución Recomendada</span>
            <h3 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 800; color: var(--text-dark); margin-bottom: 14px;">
              SEO Transaccional, Motores de IA (GEO) & Content OS
            </h3>
            <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px;">
              Posicionamos tu empresa en Google orgánico y en las respuestas de Inteligencia Artificial (ChatGPT, Perplexity, Gemini), generando tráfico calificado y contenido de alta autoridad con flujos de IA.
            </p>
            <a href="/agencia-seo-posicionamiento" class="tg-btn tg-btn-primary">Ver SEO & GEO →</a>
          </div>
          <div style="background: var(--light-bg); border-radius: var(--radius-md); padding: 30px; border: 1px solid #E2E8F0;">
            <div style="font-weight: 800; color: var(--text-dark); margin-bottom: 10px;">Impacto estimado:</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: #8B5CF6; margin-bottom: 6px;">Tráfico Orgánico</div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">Presencia garantizada en las búsquedas comerciales de mayor intención de compra.</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== SERVICIOS & SOLUCIONES ===== -->
  <section class="tg-section" style="background: #ffffff; border-top: 1px solid var(--light-border); border-bottom: 1px solid var(--light-border);">
    <div class="tg-container">
      <div class="tg-section-header">
        <div class="tg-badge tg-badge-blue">NUESTRAS SOLUCIONES</div>
        <h2 class="tg-section-title">Ecosistema Tecnológico de Crecimiento</h2>
        <p class="tg-section-desc">Servicios modulares e integrables diseñados para escalar operaciones comerciales.</p>
      </div>

      <div class="tg-services-grid">
        <!-- Servicio 1 -->
        <div class="tg-card">
          <div class="tg-card-icon">🤖</div>
          <h3 class="tg-card-title">Agentes de Inteligencia Artificial</h3>
          <p class="tg-card-desc">Asistentes autónomos entrenados con los datos de tu empresa para atención, cotización y soporte 24/7 en WhatsApp y web.</p>
          <a href="/agentes-inteligencia-artificial" class="tg-card-link">Conocer Agentes IA →</a>
        </div>

        <!-- Servicio 2 -->
        <div class="tg-card">
          <div class="tg-card-icon">⚡</div>
          <h3 class="tg-card-title">Automatización de Procesos</h3>
          <p class="tg-card-desc">Integración fluida de CRMs, bases de datos, pasarelas de pago y canales de comunicación sin intervención manual.</p>
          <a href="/automatizacion-de-procesos" class="tg-card-link">Conocer Automatización →</a>
        </div>

        <!-- Servicio 3 -->
        <div class="tg-card">
          <div class="tg-card-icon">📈</div>
          <h3 class="tg-card-title">Marketing Digital & Funnels</h3>
          <p class="tg-card-desc">Estrategias de pauta publicitaria en Meta Ads y Google Ads orientadas a la captación de leads de alto valor.</p>
          <a href="/agencia-marketing-digital" class="tg-card-link">Conocer Marketing Digital →</a>
        </div>

        <!-- Servicio 4 -->
        <div class="tg-card">
          <div class="tg-card-icon">🔍</div>
          <h3 class="tg-card-title">SEO & Optimización en IA (GEO)</h3>
          <p class="tg-card-desc">Posicionamiento en las primeras posiciones de Google y en los motores de búsqueda generativos (ChatGPT, Gemini, Perplexity).</p>
          <a href="/agencia-seo-posicionamiento" class="tg-card-link">Conocer SEO & GEO →</a>
        </div>

        <!-- Servicio 5 -->
        <div class="tg-card">
          <div class="tg-card-icon">💬</div>
          <h3 class="tg-card-title">CRM Kommo & WhatsApp API</h3>
          <p class="tg-card-desc">Implementación del CRM oficial para WhatsApp con trazabilidad completa de conversaciones, embudos y métricas de venta.</p>
          <a href="/crm-whatsapp-ventas" class="tg-card-link">Conocer CRM & WhatsApp →</a>
        </div>

        <!-- Servicio 6 -->
        <div class="tg-card">
          <div class="tg-card-icon">🎨</div>
          <h3 class="tg-card-title">Content OS con IA</h3>
          <p class="tg-card-desc">Sistema integral de producción de contenidos con inteligencia artificial para posicionar tu marca con autoridad.</p>
          <a href="/contenido-inteligencia-artificial" class="tg-card-link">Conocer Content OS →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== MÉTRICAS & SOCIAL PROOF ===== -->
  <section class="tg-section tg-section-dark">
    <div class="tg-container">
      <div class="tg-section-header">
        <div class="tg-badge tg-badge-gold">RESULTADOS DEMOSTRADOS</div>
        <h2 class="tg-section-title" style="color: #ffffff;">Métricas que Respaldan Nuestra Tecnología</h2>
        <p class="tg-section-desc">Infraestructura robusta y estrategias comerciales probadas en el mercado real.</p>
      </div>

      <div class="tg-metrics-grid">
        <div class="tg-metric-box">
          <div class="tg-metric-number">+150</div>
          <div class="tg-metric-label">Automatizaciones e integraciones activas</div>
        </div>
        <div class="tg-metric-box">
          <div class="tg-metric-number">99.8%</div>
          <div class="tg-metric-label">Disponibilidad en servidores e IA</div>
        </div>
        <div class="tg-metric-box">
          <div class="tg-metric-number">+40%</div>
          <div class="tg-metric-label">Incremento promedio en tasa de conversión</div>
        </div>
        <div class="tg-metric-box">
          <div class="tg-metric-number">+5M</div>
          <div class="tg-metric-label">Mensajes y eventos procesados de forma autónoma</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CTA FINAL / AGENDAR CONSULTA ===== -->
  <section class="tg-section" style="background: linear-gradient(135deg, rgba(37,99,235,0.04), rgba(6,182,212,0.04));">
    <div class="tg-container" style="text-align: center; max-width: 760px;">
      <div class="tg-badge tg-badge-blue" style="margin-bottom: 16px;">¿LISTO PARA ESCALAR?</div>
      <h2 class="tg-section-title">Hablemos de cómo implementar IA y Automatización en tu empresa</h2>
      <p class="tg-section-desc" style="margin-bottom: 32px;">
        Agendá una sesión de consultoría técnica sin cargo con los directores de TecnoGen para evaluar tus procesos y diseñar una solución a medida.
      </p>
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <a href="<?= get_whatsapp_url('Hola TecnoGen! Quiero agendar una consultoría para evaluar cómo implementar IA en mi empresa.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn tg-btn-primary">
          Agendar Consultoría por WhatsApp →
        </a>
        <a href="/contacto" class="tg-btn tg-btn-secondary">
          Formulario de Contacto
        </a>
      </div>
    </div>
  </section>

  <?php require __DIR__ . '/layout/footer.php'; ?>
</body>
</html>
