<?php
/**
 * View: Generador & Auditor de Avatar de Cliente Ideal con IA
 * TecnoGen - https://tecnogen.ar/cliente-ideal
 */
$current_slug = 'cliente-ideal';
$page_data = [
    'title' => 'Generador & Auditor de Avatar de Cliente Ideal con IA | TecnoGen',
    'description' => 'Herramienta interactiva y guía metodológica para estructurar la psicología de tu cliente ideal con Neuroventas, mapear detonantes de compra y generar tu Mega-Prompt de IA para simular entrevistas de venta.',
    'keywords' => 'generador avatar cliente ideal, buyer persona ia, jobs to be done marketing, mapa de empatia ia, neuroventas cliente ideal, tecnogen'
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <?php render_seo_head($page_data); ?>
  <style>
    /* Estilos Generales del Asistente */
    .tg-wizard-wrapper {
      max-width: 960px;
      margin: 0 auto;
      padding-bottom: 70px;
    }
    
    .tg-progress-bar-container {
      background: #E2E8F0;
      border-radius: 9999px;
      height: 8px;
      width: 100%;
      margin: 20px 0 30px;
      overflow: hidden;
    }
    
    .tg-progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #2563EB, #06B6D4);
      width: 20%;
      transition: width 0.4s ease;
    }
    
    .tg-steps-nav {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 6px;
    }
    
    .tg-step-pill {
      flex: 1;
      text-align: center;
      padding: 10px 14px;
      border-radius: 10px;
      font-size: 0.82rem;
      font-weight: 700;
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      color: #64748B;
      transition: all 0.25s ease;
      cursor: pointer;
      white-space: nowrap;
    }
    
    .tg-step-pill.active {
      background: #EFF6FF;
      border-color: #2563EB;
      color: #2563EB;
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }
    
    .tg-step-pill.completed {
      background: #F0FDF4;
      border-color: #86EFAC;
      color: #16A34A;
    }

    .tg-app-card {
      background: #FFFFFF;
      border: 1px solid var(--light-border);
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
      position: relative;
    }

    .tg-field-group {
      margin-bottom: 26px;
    }

    .tg-field-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 6px;
      font-size: 1rem;
    }

    .tg-field-help {
      font-size: 0.85rem;
      color: #64748B;
      margin-bottom: 10px;
      line-height: 1.45;
    }

    .tg-input, .tg-textarea, .tg-select {
      width: 100%;
      padding: 14px 18px;
      border-radius: 10px;
      border: 1px solid #CBD5E1;
      background: #F8FAFC;
      font-family: inherit;
      font-size: 0.95rem;
      color: #0F172A;
      transition: all 0.2s ease;
    }

    .tg-input:focus, .tg-textarea:focus, .tg-select:focus {
      outline: none;
      border-color: #2563EB;
      background: #FFFFFF;
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
    }

    .tg-textarea {
      min-height: 95px;
      resize: vertical;
    }

    .tg-hint-btn {
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
      color: #1D4ED8;
      font-size: 0.78rem;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 6px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-top: 6px;
      transition: all 0.2s;
    }
    
    .tg-hint-btn:hover {
      background: #DBEAFE;
    }

    .tg-prompt-preview {
      background: #0B0F19;
      color: #38BDF8;
      padding: 24px;
      border-radius: 14px;
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: 0.88rem;
      line-height: 1.6;
      border: 1px solid rgba(255, 255, 255, 0.1);
      position: relative;
      white-space: pre-wrap;
      word-break: break-word;
      max-height: 420px;
      overflow-y: auto;
    }

    .tg-copy-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      background: #2563EB;
      color: #FFFFFF;
      border: none;
      padding: 8px 14px;
      border-radius: 6px;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      z-index: 10;
    }
    .tg-copy-btn:hover {
      background: #1D4ED8;
    }

    .tg-result-badge {
      display: inline-block;
      padding: 5px 12px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    /* Grilla de Fundamentos */
    .tg-fundamentos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      margin: 30px 0 45px;
    }

    .tg-fundamento-card {
      background: #FFFFFF;
      border: 1px solid var(--light-border);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .tg-fundamento-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    }

    .tg-fundamento-icon {
      font-size: 2rem;
      margin-bottom: 12px;
      display: inline-block;
    }

    .tg-fundamento-title {
      font-size: 1.05rem;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 8px;
    }

    .tg-fundamento-desc {
      font-size: 0.88rem;
      color: #64748B;
      line-height: 1.5;
    }

    /* Dossier Grid en Pantalla */
    .tg-dossier-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }

    .tg-dossier-card {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 14px;
      padding: 22px;
    }

    .tg-dossier-card h4 {
      font-size: 0.95rem;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .tg-dossier-card p {
      font-size: 0.88rem;
      color: #475569;
      line-height: 1.5;
    }

    /* FAQ Box */
    .tg-faq-item {
      background: #FFFFFF;
      border: 1px solid var(--light-border);
      border-radius: 12px;
      padding: 18px 22px;
      margin-bottom: 14px;
    }

    .tg-faq-q {
      font-weight: 800;
      font-size: 0.98rem;
      color: #0F172A;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .tg-faq-a {
      font-size: 0.88rem;
      color: #64748B;
      line-height: 1.55;
    }

    .tg-toast {
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: #0F172A;
      color: #FFFFFF;
      padding: 14px 22px;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      font-size: 0.9rem;
      font-weight: 600;
      display: none;
      z-index: 100000;
      align-items: center;
      gap: 10px;
      border-left: 4px solid #22C55E;
    }

    /* ==========================================================================
       ESTILOS EXCLUSIVOS DE IMPRESIÓN (PDF LIMPIO)
       ========================================================================== */
    #print-document {
      display: none;
    }

    @media print {
      body * {
        visibility: hidden;
      }
      
      .tg-header, .tg-footer, .tg-hero, #como-funciona, .tg-steps-nav, 
      .tg-progress-bar-container, .tg-app-card, .tg-faq-item, 
      .tg-wa-float, #lead-form-wrap, .tg-btn, .tg-copy-btn, .tg-hint-btn, 
      .tg-toast, section {
        display: none !important;
      }

      #print-document, #print-document * {
        visibility: visible !important;
      }

      #print-document {
        display: block !important;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: #FFFFFF;
        color: #0F172A;
        padding: 20px 30px;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        font-size: 13px;
        line-height: 1.5;
      }

      .print-header {
        border-bottom: 2px solid #2563EB;
        padding-bottom: 12px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }

      .print-title {
        font-size: 20px;
        font-weight: 800;
        color: #1E293B;
        margin: 0 0 4px;
      }

      .print-subtitle {
        font-size: 12px;
        color: #64748B;
        margin: 0;
      }

      .print-meta {
        text-align: right;
        font-size: 11px;
        color: #475569;
      }

      .print-section {
        margin-bottom: 18px;
        page-break-inside: avoid;
      }

      .print-section-title {
        font-size: 14px;
        font-weight: 800;
        color: #2563EB;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border-bottom: 1px solid #E2E8F0;
        padding-bottom: 4px;
        margin-bottom: 8px;
      }

      .print-box {
        background: #F8FAFC;
        border: 1px solid #CBD5E1;
        border-radius: 6px;
        padding: 10px 14px;
        margin-bottom: 8px;
      }

      .print-box strong {
        color: #0F172A;
        display: block;
        font-size: 12px;
        margin-bottom: 2px;
      }

      .print-prompt {
        background: #F1F5F9;
        border: 1px solid #94A3B8;
        border-radius: 6px;
        padding: 12px;
        font-family: monospace;
        font-size: 11px;
        white-space: pre-wrap;
        word-break: break-word;
        page-break-inside: avoid;
      }

      .print-footer {
        margin-top: 30px;
        border-top: 1px solid #E2E8F0;
        padding-top: 10px;
        text-align: center;
        font-size: 11px;
        color: #64748B;
      }
    }

    @media (max-width: 768px) {
      .tg-app-card { padding: 24px 18px; }
      .tg-steps-nav { justify-content: flex-start; }
      .tg-step-pill { flex: none; font-size: 0.75rem; }
    }
  </style>
</head>
<body>
  <?php require __DIR__ . '/layout/header.php'; ?>

  <!-- Hero Principal -->
  <section class="tg-hero" style="padding-bottom: 30px;">
    <div class="tg-container">
      <div style="max-width: 820px; margin: 0 auto; text-align: center;">
        <div class="tg-badge tg-badge-blue" style="margin-bottom: 18px;">
          ✦ HERRAMIENTA ESTRATÉGICA & NEUROVENTAS CON IA
        </div>
        <h1 class="tg-hero-title">
          Generador & Auditor de <span class="tg-gradient-text">Avatar de Cliente Ideal</span>
        </h1>
        <p class="tg-hero-subtitle" style="margin: 0 auto 24px; font-size: 1.05rem;">
          Descubre la psicología profunda de tu comprador, identifica sus detonantes reales de compra y ensambla un <strong>Mega-Prompt de IA</strong> para simular entrevistas de venta y validar tus ofertas antes de gastar en anuncios.
        </p>
        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a href="#asistente-avatar" class="tg-btn tg-btn-primary" style="padding: 14px 28px;">
            🚀 Iniciar Asistente Interactivo
          </a>
          <a href="#como-funciona" class="tg-btn" style="background: #FFFFFF; color: #1E293B; border: 1px solid #CBD5E1; padding: 14px 24px;">
            📖 Ver Fundamentos Metodológicos
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Sección: ¿Para qué sirve y Fundamentos Técnicos? -->
  <section id="como-funciona" class="tg-section" style="background: #FFFFFF; border-top: 1px solid var(--light-border); border-bottom: 1px solid var(--light-border); padding: 50px 0;">
    <div class="tg-container" style="max-width: 1040px;">
      
      <div style="text-align: center; max-width: 720px; margin: 0 auto 35px;">
        <span class="tg-badge tg-badge-blue" style="margin-bottom: 12px;">FUNDAMENTOS ESTRATÉGICOS</span>
        <h2 style="font-size: 1.6rem; font-weight: 900; color: #0F172A; margin-bottom: 10px;">
          ¿Por qué el 90% de los Avatares Tradicionales Fallan?
        </h2>
        <p style="font-size: 0.92rem; color: #64748B; line-height: 1.6;">
          Definir a tu cliente como <em>"Hombres y mujeres de 25 a 45 años de clase media"</em> no sirve para vender. En la era digital, la decisión de compra se basa en <strong>estados emocionales, momentos detonantes y fricciones de confianza</strong>.
        </p>
      </div>

      <!-- 4 Pilares -->
      <div class="tg-fundamentos-grid">
        <div class="tg-fundamento-card" style="border-top: 4px solid #2563EB;">
          <div class="tg-fundamento-icon">🎯</div>
          <h3 class="tg-fundamento-title">1. Jobs To Be Done (JTBD)</h3>
          <p class="tg-fundamento-desc">
            Metodología de Harvard: La gente no compra tu producto, compra el <strong>progreso</strong> que experimenta su vida o negocio al usarlo. Identificamos el evento detonante exacto.
          </p>
        </div>

        <div class="tg-fundamento-card" style="border-top: 4px solid #C026D3;">
          <div class="tg-fundamento-icon">🧠</div>
          <h3 class="tg-fundamento-title">2. Mapa de Empatía & VoC</h3>
          <p class="tg-fundamento-desc">
            Mapeamos los miedos nocturnos (3 AM) y las <strong>palabras textuales</strong> (Voz del Cliente) que usa al quejarse. Este lenguaje se usa luego en los títulos de tus páginas y anuncios.
          </p>
        </div>

        <div class="tg-fundamento-card" style="border-top: 4px solid #D97706;">
          <div class="tg-fundamento-icon">⚡</div>
          <h3 class="tg-fundamento-title">3. Matriz Dolor / Objeciones</h3>
          <p class="tg-fundamento-desc">
            Cruzamos sus 3 dolores más costosos contra sus 3 frenos de compra (precio, tiempo o malas experiencias pasadas) para que tu propuesta sea psicológicamente irresistible.
          </p>
        </div>

        <div class="tg-fundamento-card" style="border-top: 4px solid #06B6D4;">
          <div class="tg-fundamento-icon">🤖</div>
          <h3 class="tg-fundamento-title">4. Roleplay Inverso con IA</h3>
          <p class="tg-fundamento-desc">
            Ensamblamos un prompt para que ChatGPT, Claude o Gemini adopte la personalidad de tu comprador escéptico y puedas hacerle pruebas de fuego antes de lanzar.
          </p>
        </div>
      </div>

      <!-- Cómo Usar la Herramienta en 4 Pasos -->
      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 30px; margin-top: 20px;">
        <h3 style="font-size: 1.15rem; font-weight: 800; color: #0F172A; margin-bottom: 16px; text-align: center;">
          📋 Cómo usar esta herramienta paso a paso:
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 18px;">
          <div style="font-size: 0.88rem; color: #475569;">
            <strong style="color: #2563EB; display: block; margin-bottom: 4px;">Paso 1: Completa los campos</strong>
            Responde las preguntas de los 3 bloques. Si estás trabado, haz clic en <em>"💡 Cargar ejemplo"</em>.
          </div>
          <div style="font-size: 0.88rem; color: #475569;">
            <strong style="color: #2563EB; display: block; margin-bottom: 4px;">Paso 2: Genera tu Prompt</strong>
            El sistema ensambla automáticamente un Mega-Prompt estructurado con tus variables para Inteligencia Artificial.
          </div>
          <div style="font-size: 0.88rem; color: #475569;">
            <strong style="color: #2563EB; display: block; margin-bottom: 4px;">Paso 3: Entrevista a tu Avatar</strong>
            Copia el prompt en ChatGPT, Claude o Gemini y pregúntale qué le parece tu precio y tu oferta.
          </div>
          <div style="font-size: 0.88rem; color: #475569;">
            <strong style="color: #2563EB; display: block; margin-bottom: 4px;">Paso 4: Recibe tu Dossier</strong>
            Ingresa tu email para recibir el reporte consolidado en tu casilla y desbloquear la descarga en PDF.
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Interactive Wizard Section -->
  <section id="asistente-avatar" class="tg-section" style="background: var(--light-bg); padding-top: 40px;">
    <div class="tg-container tg-wizard-wrapper">
      
      <!-- Steps Navigation -->
      <div class="tg-steps-nav" id="steps-nav">
        <div class="tg-step-pill active" data-step="1" onclick="goToStep(1)">1. Oferta & JTBD</div>
        <div class="tg-step-pill" data-step="2" onclick="goToStep(2)">2. Mapa de Empatía</div>
        <div class="tg-step-pill" data-step="3" onclick="goToStep(3)">3. Dolores & Objeciones</div>
        <div class="tg-step-pill" data-step="4" onclick="goToStep(4)">4. Prompt de IA</div>
        <div class="tg-step-pill" data-step="5" onclick="goToStep(5)">5. Dossier & Resultados</div>
      </div>

      <!-- Progress Bar -->
      <div class="tg-progress-bar-container">
        <div class="tg-progress-fill" id="progress-fill"></div>
      </div>

      <!-- Card Container -->
      <div class="tg-app-card">
        <form id="avatar-form" onsubmit="event.preventDefault();">

          <!-- ================= PASO 1 ================= -->
          <div class="wizard-step" id="step-1">
            <span class="tg-result-badge" style="background: #EFF6FF; color: #2563EB;">PASO 1 DE 5: TU OFERTA & EL DETONANTE DE COMPRA</span>
            <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin-bottom: 6px;">
              ¿Qué problema resuelves y en qué momento exacto te buscan?
            </h2>
            <p style="font-size: 0.88rem; color: #64748B; margin-bottom: 22px;">
              El modelo <em>Jobs To Be Done (JTBD)</em> nos enseña que nadie compra un taladro, compran un agujero en la pared para colgar el cuadro de su familia.
            </p>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-producto">
                <span>1. ¿Cuál es tu producto, servicio o solución principal?</span>
              </label>
              <div class="tg-field-help">Describe brevemente lo que vendes (ej: Agencia de Marketing, Software CRM, Consultoría Contable, Curso de Neuroventas).</div>
              <input type="text" id="inp-producto" class="tg-input" placeholder="Ej: Implementación de agentes de IA y automatizaciones de venta para empresas de servicios">
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-producto', 'Servicio de consultoría y automatización con IA para captar clientes en empresas B2B')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-detonante">
                <span>2. El Detonante de Compra (Trigger Event)</span>
              </label>
              <div class="tg-field-help">¿Qué acontecimiento puntual ocurre en su día a día justo antes de decir: <em>"No aguanto más esto, necesito ayuda profesional ya"</em>?</div>
              <textarea id="inp-detonante" class="tg-textarea" placeholder="Ej: Su equipo comercial pierde 4 horas respondiendo consultas repetidas en WhatsApp y las ventas cayeron este mes."></textarea>
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-detonante', 'Se satura contestando mensajes en WhatsApp a deshoras y siente que está perdiendo ventas frente a competidores con más tecnología')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-transformacion">
                <span>3. La Transformación Deseada (Progreso)</span>
              </label>
              <div class="tg-field-help">¿Cómo cambia su realidad concreta tras comprar tu solución? (Menos horas de trabajo, ingresos predecibles, tranquilidad).</div>
              <input type="text" id="inp-transformacion" class="tg-input" placeholder="Ej: Recupera 15 horas semanales y tiene un flujo automático de 20 reuniones de venta calificadas por mes">
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-transformacion', 'Tener un sistema que califique prospectos y agende reuniones 24/7 sin depender de su presencia física')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div style="display: flex; justify-content: flex-end; margin-top: 25px;">
              <button type="button" class="tg-btn tg-btn-primary" onclick="nextStep(2)">
                Siguiente: Mapa de Empatía →
              </button>
            </div>
          </div>

          <!-- ================= PASO 2 ================= -->
          <div class="wizard-step" id="step-2" style="display: none;">
            <span class="tg-result-badge" style="background: #FDF4FF; color: #C026D3;">PASO 2 DE 5: MAPA DE EMPATÍA & VOZ DEL CLIENTE</span>
            <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin-bottom: 6px;">
              Entrando en la mente y emociones de tu comprador
            </h2>
            <p style="font-size: 0.88rem; color: #64748B; margin-bottom: 22px;">
              Mapeamos sus miedos no confesados y el lenguaje exacto que utiliza cuando se queja (ideal para escribir anuncios de alto impacto).
            </p>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-miedos">
                <span>1. Preocupaciones y Miedos a las 3 AM</span>
              </label>
              <div class="tg-field-help">¿Qué le quita el sueño o qué teme que pase si no resuelve este problema en los próximos 6 meses?</div>
              <textarea id="inp-miedos" class="tg-textarea" placeholder="Ej: Miedo a que su negocio quede obsoleto frente a la competencia, a no poder pagar sueldos o a quemarse de estrés trabajando sin parar."></textarea>
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-miedos', 'Teme que su negocio se estanque, que la competencia más tecnificada se quede con sus clientes y no tener tiempo para su vida personal.')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-entorno">
                <span>2. Entorno y Opiniones que lo Rodean</span>
              </label>
              <div class="tg-field-help">¿Qué le dicen sus socios, familiares o colegas? ¿Qué contenido ve en LinkedIn o Instagram que le genera presión?</div>
              <input type="text" id="inp-entorno" class="tg-input" placeholder="Ej: Sus socios le piden más rentabilidad; en redes ve que todos usan IA y siente que se está quedando atrás.">
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-entorno', 'Escucha a otros dueños de negocio hablar de Inteligencia Artificial, pero no sabe por dónde empezar y le abruma la parte técnica.')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-frases">
                <span>3. Frases Literales que Usa (Voz del Cliente)</span>
              </label>
              <div class="tg-field-help">Las quejas o expresiones exactas que repite habitualmente (palabras textuales entre comillas).</div>
              <input type="text" id="inp-frases" class="tg-input" placeholder="Ej: 'No doy abasto', 'Me llegan muchos curiosos pero nadie compra', 'No entiendo nada de tecnología'.">
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-frases', '\"Gasto plata en publicidad y me mandan mensajes que no responden\", \"Siento que soy esclavo de mi propio negocio\"')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 25px;">
              <button type="button" class="tg-btn" style="background: #E2E8F0; color: #475569;" onclick="goToStep(1)">
                ← Volver
              </button>
              <button type="button" class="tg-btn tg-btn-primary" onclick="nextStep(3)">
                Siguiente: Dolores & Objeciones →
              </button>
            </div>
          </div>

          <!-- ================= PASO 3 ================= -->
          <div class="wizard-step" id="step-3" style="display: none;">
            <span class="tg-result-badge" style="background: #FFFBEB; color: #D97706;">PASO 3 DE 5: MATRIZ DOLOR, DESEO & OBJECIONES</span>
            <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin-bottom: 6px;">
              Los frenos y motivadores de compra
            </h2>
            <p style="font-size: 0.88rem; color: #64748B; margin-bottom: 22px;">
              Si conoces y desarmas las objeciones de tu cliente antes de que las mencione, tu tasa de cierre se multiplica.
            </p>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-dolores">
                <span>1. Top 3 Dolores Principales (Pains)</span>
              </label>
              <div class="tg-field-help">Lo que le sangra hoy en tiempo, dinero o desgaste de energía.</div>
              <textarea id="inp-dolores" class="tg-textarea" placeholder="1. Falta de predictibilidad en ventas.&#10;2. Pérdida de tiempo en tareas manuales repetitivas.&#10;3. Alto costo por lead en publicidad."></textarea>
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-dolores', '1. No tiene tiempo para responder rápido a prospectos.&#10;2. Falta de seguimiento comercial estructurado.&#10;3. Caída en el margen de rentabilidad.')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-deseos">
                <span>2. Top 3 Deseos y Aspiraciones (Gains)</span>
              </label>
              <div class="tg-field-help">El resultado que le haría celebrar con champaña a fin de año.</div>
              <textarea id="inp-deseos" class="tg-textarea" placeholder="1. Facturar el doble con menos esfuerzo operativo.&#10;2. Delegar y sistematizar su negocio.&#10;3. Posicionarse como líder de su nicho."></textarea>
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-deseos', '1. Flujo constante de clientes de alto valor.&#10;2. Procesos de venta automatizados.&#10;3. Paz mental y libertad de agenda.')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div class="tg-field-group">
              <label class="tg-field-label" for="inp-objeciones">
                <span>3. Top 3 Objeciones de Compra (Por qué dudaría en pagar)</span>
              </label>
              <div class="tg-field-help">¿Precio? ¿Miedo a que sea difícil? ¿Falta de tiempo? ¿Malas experiencias con otras agencias?</div>
              <textarea id="inp-objeciones" class="tg-textarea" placeholder="1. 'Ya contraté una agencia y no tuve resultados'.&#10;2. 'No tengo tiempo para aprender esto'.&#10;3. 'No sé si funcionará para mi tipo de negocio'."></textarea>
              <button type="button" class="tg-hint-btn" onclick="fillExample('inp-objeciones', '1. Miedo a que la IA sea fría o despersonalizada.&#10;2. Duda sobre el retorno de inversión y el costo.&#10;3. Miedo a que sea muy complejo de configurar.')">
                💡 Cargar ejemplo
              </button>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 25px;">
              <button type="button" class="tg-btn" style="background: #E2E8F0; color: #475569;" onclick="goToStep(2)">
                ← Volver
              </button>
              <button type="button" class="tg-btn tg-btn-primary" onclick="generatePromptAndNext()">
                Siguiente: Ensamblar Prompt de IA →
              </button>
            </div>
          </div>

          <!-- ================= PASO 4 ================= -->
          <div class="wizard-step" id="step-4" style="display: none;">
            <span class="tg-result-badge" style="background: #ECFDF5; color: #059669;">PASO 4 DE 5: MEGA-PROMPT DE ROLEPLAY INVERSO CON IA</span>
            <h2 style="font-size: 1.35rem; font-weight: 800; color: #0F172A; margin-bottom: 6px;">
              Tu Prompt de Inteligencia Artificial Listo para Usar
            </h2>
            <p style="font-size: 0.88rem; color: #64748B; margin-bottom: 18px;">
              Este prompt convierte a ChatGPT, Claude, DeepSeek o Gemini en tu Avatar escéptico para que puedas "entrevistarlo", probar tus ofertas y descubrir cómo reacciona ante tus precios.
            </p>

            <div class="tg-field-group">
              <div style="position: relative;">
                <button type="button" class="tg-copy-btn" onclick="copyPrompt()">
                  📋 Copiar Prompt
                </button>
                <div class="tg-prompt-preview" id="prompt-output">
                  <!-- Prompt generado dinámicamente -->
                </div>
              </div>
            </div>

            <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 12px; padding: 18px; margin-bottom: 25px; display: flex; gap: 14px; align-items: flex-start;">
              <div style="font-size: 1.5rem;">💡</div>
              <div style="font-size: 0.88rem; color: #1E40AF; line-height: 1.5;">
                <strong>Instrucciones para la simulación:</strong><br>
                1. Haz clic arriba en <strong>"Copiar Prompt"</strong>.<br>
                2. Pégalo en tu IA favorita (ChatGPT, Claude o Gemini).<br>
                3. Hazle preguntas como: <em>"¿Qué titular te convencería de agendar una llamada conmigo?"</em> o <em>"¿Por qué rechazarías mi precio?"</em>.
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 25px;">
              <button type="button" class="tg-btn" style="background: #E2E8F0; color: #475569;" onclick="goToStep(3)">
                ← Volver
              </button>
              <button type="button" class="tg-btn tg-btn-primary" onclick="showResultsDashboard()">
                Ver Dossier Completo & Desbloquear PDF →
              </button>
            </div>
          </div>

          <!-- ================= PASO 5: RESULTADOS & LEAD MAGNET ================= -->
          <div class="wizard-step" id="step-5" style="display: none;">
            <div style="text-align: center; margin-bottom: 22px;">
              <span class="tg-result-badge" style="background: #EFF6FF; color: #2563EB;">DIAGNÓSTICO FINALIZADO</span>
              <h2 style="font-size: 1.7rem; font-weight: 900; color: #0F172A; margin-bottom: 6px;">
                🎯 Tu Dossier Estratégico de Cliente Ideal
              </h2>
              <p style="font-size: 0.92rem; color: #64748B; max-width: 620px; margin: 0 auto;">
                Este es el resumen consolidado de la psicología de tu cliente. Completa tus datos a continuación para recibirlo en tu correo y <strong>desbloquear la descarga en PDF</strong>.
              </p>
            </div>

            <!-- Dashboard Grid en Pantalla -->
            <div class="tg-dossier-grid">
              <div class="tg-dossier-card" style="border-top: 4px solid #2563EB;">
                <h4>🎯 1. Oferta & Detonante</h4>
                <p><strong>Solución:</strong> <span id="res-producto"></span></p>
                <p style="margin-top: 8px;"><strong>Momento Detonante:</strong> <span id="res-detonante"></span></p>
                <p style="margin-top: 8px;"><strong>Progreso Deseado:</strong> <span id="res-transformacion"></span></p>
              </div>

              <div class="tg-dossier-card" style="border-top: 4px solid #C026D3;">
                <h4>🧠 2. Psicología & Empatía</h4>
                <p><strong>Miedos 3 AM:</strong> <span id="res-miedos"></span></p>
                <p style="margin-top: 8px;"><strong>Entorno:</strong> <span id="res-entorno"></span></p>
                <p style="margin-top: 8px;"><strong>Vocabulario / Frases:</strong> <span id="res-frases"></span></p>
              </div>

              <div class="tg-dossier-card" style="border-top: 4px solid #D97706;">
                <h4>⚡ 3. Dolores & Deseos</h4>
                <p><strong>Dolores Principales:</strong></p>
                <p id="res-dolores" style="white-space: pre-line;"></p>
                <p style="margin-top: 8px;"><strong>Deseos y Metas:</strong></p>
                <p id="res-deseos" style="white-space: pre-line;"></p>
              </div>

              <div class="tg-dossier-card" style="border-top: 4px solid #EF4444;">
                <h4>🛡️ 4. Top Objeciones</h4>
                <p><strong>Por qué dudaría en pagar:</strong></p>
                <p id="res-objeciones" style="white-space: pre-line;"></p>
              </div>
            </div>

            <!-- Lead Capture Card & PDF Unlocker -->
            <div id="lead-box-container" style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border-radius: 16px; padding: 35px; color: #FFFFFF; text-align: center; margin-top: 25px; box-shadow: 0 15px 35px rgba(0,0,0,0.15); transition: all 0.3s ease;">
              <div class="tg-badge" style="background: rgba(56, 189, 248, 0.2); color: #38BDF8; margin-bottom: 14px;">
                ✉️ RECIBIR EN TU CORREO & DESBLOQUEAR PDF
              </div>
              <h3 style="font-size: 1.35rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">
                Ingresa tu Correo para Recibir tu Dossier y Desbloquear la Descarga
              </h3>
              <p style="font-size: 0.88rem; color: #94A3B8; max-width: 550px; margin: 0 auto 22px;">
                Te enviamos el reporte detallado a tu casilla y habilitamos la opción para descargar o imprimir tu documento en PDF listo para compartir.
              </p>

              <div id="lead-form-wrap" style="max-width: 520px; margin: 0 auto;">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                  <input type="text" id="lead-nombre" class="tg-input" placeholder="Tu Nombre Completo *" required style="background: #1E293B; color: #FFFFFF; border-color: #334155;">
                  <input type="email" id="lead-email" class="tg-input" placeholder="Tu Correo Electrónico *" required style="background: #1E293B; color: #FFFFFF; border-color: #334155;">
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                  <input type="tel" id="lead-whatsapp" class="tg-input" placeholder="WhatsApp (Opcional)" style="background: #1E293B; color: #FFFFFF; border-color: #334155;">
                  <input type="text" id="lead-negocio" class="tg-input" placeholder="Tu Rubro o Empresa" style="background: #1E293B; color: #FFFFFF; border-color: #334155;">
                </div>
                <button type="button" id="btn-enviar-lead" class="tg-btn tg-btn-primary" style="width: 100%; padding: 14px; font-size: 1rem;" onclick="enviarReporteLead()">
                  🚀 Enviar por Correo y Desbloquear PDF
                </button>
                <div id="lead-status-msg" style="margin-top: 15px; font-size: 0.9rem; display: none;"></div>
              </div>

              <!-- Banner Secundario: Consultoría TecnoGen -->
              <div style="margin-top: 30px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 15px; text-align: left;">
                <div>
                  <h4 style="font-size: 0.98rem; color: #FFFFFF; margin-bottom: 4px;">¿Querés que en TecnoGen diseñemos el Embudo para este Avatar?</h4>
                  <p style="font-size: 0.84rem; color: #94A3B8; margin: 0;">Landing page, campañas de tráfico y agentes de WhatsApp con IA integrados.</p>
                </div>
                <a href="<?= get_whatsapp_url('Hola TecnoGen! Completé el asistente de Cliente Ideal y quiero consultar por la implementación de mi embudo con IA.') ?>" target="_blank" rel="noopener noreferrer" class="tg-btn" style="background: #22C55E; color: #000000; font-weight: 800; padding: 10px 20px; font-size: 0.88rem;">
                  💬 Consultar por WhatsApp
                </a>
              </div>
            </div>

            <!-- Botones de Acción Final -->
            <div style="display: flex; justify-content: center; gap: 15px; margin-top: 25px; flex-wrap: wrap;">
              <button type="button" class="tg-btn" style="background: #E2E8F0; color: #475569;" onclick="goToStep(4)">
                ← Volver al Prompt
              </button>
              <button type="button" id="btn-print-doc" class="tg-btn" style="background: #0F172A; color: #FFFFFF;" onclick="handlePrintClick()">
                🔒 Descargar / Imprimir Dossier en PDF
              </button>
            </div>
          </div>

        </form>
      </div>

    </div>
  </section>

  <!-- ==========================================================================
       PLANTILLA DE IMPRESIÓN EXCLUSIVA (SOLO VISIBLE AL IMPRIMIR / GUARDAR EN PDF)
       ========================================================================== -->
  <div id="print-document">
    <div class="print-header">
      <div>
        <h1 class="print-title">Dossier Estratégico de Cliente Ideal</h1>
        <p class="print-subtitle">Arquitectura Psicológica, Neuroventas & Mega-Prompt de IA · TecnoGen</p>
      </div>
      <div class="print-meta">
        <strong>Preparado para:</strong> <span id="print-nombre">Usuario</span><br>
        <strong>Rubro / Empresa:</strong> <span id="print-negocio">General</span><br>
        <strong>Fecha:</strong> <?= date('d/m/Y') ?>
      </div>
    </div>

    <div class="print-section">
      <div class="print-section-title">1. Jobs To Be Done (JTBD) & Propuesta de Valor</div>
      <div class="print-box">
        <strong>Tu Producto / Servicio:</strong>
        <span id="print-producto"></span>
      </div>
      <div class="print-box">
        <strong>Momento Detonante de Compra (Trigger Event):</strong>
        <span id="print-detonante"></span>
      </div>
      <div class="print-box">
        <strong>Transformación Deseada (Progreso Real):</strong>
        <span id="print-transformacion"></span>
      </div>
    </div>

    <div class="print-section">
      <div class="print-section-title">2. Mapa de Empatía & Voz del Cliente (VoC)</div>
      <div class="print-box">
        <strong>Miedos y Preocupaciones a las 3 AM:</strong>
        <span id="print-miedos"></span>
      </div>
      <div class="print-box">
        <strong>Entorno y Presiones que lo Rodean:</strong>
        <span id="print-entorno"></span>
      </div>
      <div class="print-box">
        <strong>Frases y Vocabulario Literal que Usa:</strong>
        <span id="print-frases"></span>
      </div>
    </div>

    <div class="print-section">
      <div class="print-section-title">3. Matriz Dolor, Deseo & Objeciones de Compra</div>
      <div class="print-box">
        <strong>Dolores Principales (Pains):</strong>
        <span id="print-dolores" style="white-space: pre-line;"></span>
      </div>
      <div class="print-box">
        <strong>Deseos y Metas (Gains):</strong>
        <span id="print-deseos" style="white-space: pre-line;"></span>
      </div>
      <div class="print-box">
        <strong>Top Objeciones de Compra (Frenos de Decisión):</strong>
        <span id="print-objeciones" style="white-space: pre-line;"></span>
      </div>
    </div>

    <div class="print-section">
      <div class="print-section-title">4. Mega-Prompt de Roleplay Inverso con Inteligencia Artificial</div>
      <div class="print-prompt" id="print-prompt"></div>
    </div>

    <div class="print-footer">
      Documento generado por <strong>TecnoGen</strong> (Marketing Digital, IA & Automatización) · https://tecnogen.ar · Lavalle 362, CABA, Argentina.
    </div>
  </div>

  <!-- Sección: Preguntas Frecuentes (FAQ) -->
  <section class="tg-section" style="background: #FFFFFF; border-top: 1px solid var(--light-border); padding: 50px 0;">
    <div class="tg-container" style="max-width: 820px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <span class="tg-badge tg-badge-blue" style="margin-bottom: 10px;">RESOLVEMOS TUS DUDAS</span>
        <h2 style="font-size: 1.5rem; font-weight: 900; color: #0F172A;">Preguntas Frecuentes sobre el Avatar de Cliente Ideal</h2>
      </div>

      <div class="tg-faq-item">
        <div class="tg-faq-q">❓ ¿Qué modelo de IA es el más recomendable para el roleplay?</div>
        <div class="tg-faq-a">Modelos de razonamiento avanzado como <strong>ChatGPT Plus (GPT-4o), Claude 3.5 Sonnet o Gemini 1.5 Pro</strong> son ideales porque comprenden la sutileza psicológica y las objeciones de venta sin caer en respuestas robóticas o complacientes.</div>
      </div>

      <div class="tg-faq-item">
        <div class="tg-faq-q">❓ ¿Cómo uso esta información en mi Landing Page y Anuncios?</div>
        <div class="tg-faq-a">Coloca la <strong>Transformación Deseada</strong> en tu título principal (H1), utiliza los <strong>Miedos y Frases Literales</strong> en el cuerpo de tu texto para conectar emocionalmente, y crea una sección de <em>Preguntas Frecuentes</em> que desactive las <strong>3 Objeciones de Compra</strong> detectadas.</div>
      </div>

      <div class="tg-faq-item">
        <div class="tg-faq-q">❓ ¿Cuántos Avatares debo crear para mi empresa?</div>
        <div class="tg-faq-a">Se recomienda comenzar con <strong>1 Avatar Principal</strong> (el 20% de clientes que generan el 80% de tus ingresos o rentabilidad). Una vez dominado ese mensaje, puedes crear avatares secundarios para otras líneas de producto.</div>
      </div>
    </div>
  </section>

  <!-- Toast Notification -->
  <div class="tg-toast" id="toast">
    <span id="toast-icon">✅</span>
    <span id="toast-text">¡Prompt copiado al portapapeles!</span>
  </div>

  <?php require __DIR__ . '/layout/footer.php'; ?>

  <!-- Script de la App -->
  <script>
    let currentStep = 1;
    let generatedPrompt = '';
    let isLeadCaptured = false;

    function updateProgress(step) {
      const fill = document.getElementById('progress-fill');
      const pills = document.querySelectorAll('.tg-step-pill');
      
      const pct = (step / 5) * 100;
      fill.style.width = pct + '%';

      pills.forEach(pill => {
        const s = parseInt(pill.getAttribute('data-step'));
        pill.classList.remove('active');
        if (s === step) {
          pill.classList.add('active');
        }
        if (s < step) {
          pill.classList.add('completed');
        } else {
          pill.classList.remove('completed');
        }
      });
    }

    function goToStep(step) {
      if (step < 1 || step > 5) return;
      
      for (let i = 1; i <= 5; i++) {
        const el = document.getElementById('step-' + i);
        if (el) el.style.display = (i === step) ? 'block' : 'none';
      }
      
      currentStep = step;
      updateProgress(step);
      
      const wizardEl = document.getElementById('asistente-avatar');
      if (wizardEl) {
        wizardEl.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function nextStep(step) {
      goToStep(step);
    }

    function fillExample(fieldId, text) {
      const field = document.getElementById(fieldId);
      if (field) {
        field.value = text;
        showToast('Ejemplo cargado en el campo');
      }
    }

    function generatePromptAndNext() {
      const producto = document.getElementById('inp-producto').value.trim() || 'Servicios profesionales / Solución especializada';
      const detonante = document.getElementById('inp-detonante').value.trim() || 'Crisis de tiempo y saturación de tareas manuales';
      const transformacion = document.getElementById('inp-transformacion').value.trim() || 'Automatización, crecimiento de ventas y tranquilidad mental';
      
      const miedos = document.getElementById('inp-miedos').value.trim() || 'Quedar obsoleto frente a competidores y perder rentabilidad';
      const entorno = document.getElementById('inp-entorno').value.trim() || 'Presión de socios y sobreabundancia de información sobre tecnología';
      const frases = document.getElementById('inp-frases').value.trim() || 'No doy abasto, necesito ayuda para escalar';
      
      const dolores = document.getElementById('inp-dolores').value.trim() || 'Falta de leads calificados, procesos desordenados y poco tiempo';
      const deseos = document.getElementById('inp-deseos').value.trim() || 'Tener un sistema predecible de ingresos y delegar operaciones';
      const objeciones = document.getElementById('inp-objeciones').value.trim() || 'Dudas sobre el precio, falta de tiempo de implementación y malas experiencias pasadas';

      generatedPrompt = `Actúa como mi Cliente Ideal y participa en una simulación de roleplay inverso ultra-realista.

[CONTEXTO DE MI NEGOCIO Y OFERTA]:
- Lo que te ofrezco: ${producto}
- El momento exacto en el que te encuentras (Detonante): ${detonante}
- La transformación que estás buscando: ${transformacion}

[TU PERFIL PSICOLÓGICO Y EMOCIONAL]:
- Tus mayores temores y lo que te desvela a las 3 AM: ${miedos}
- Lo que escuchas en tu entorno y te genera fricción: ${entorno}
- Tu forma de hablar y expresiones habituales: "${frases}"

[TUS DOLORES Y DESEOS]:
- Lo que más te duele hoy: 
${dolores}
- Tus aspiraciones y metas más ambiciosas: 
${deseos}

[TUS OBJECIONES Y DUDAS AL COMPRAR]:
${objeciones}

[INSTRUCCIÓN DE ROLEPLAY]:
Quiero que te mantengas 100% en personaje. No seas complaciente ni actúes como un robot. Responde con la honestidad visceral, dudas reales y lenguaje natural de este perfil.
Para iniciar, responde presentándote brevemente desde tu personaje, describe qué momento crítico estás atravesando hoy en tu día y pregúntame: "¿Qué tienes exactamente para ofrecerme y por qué debería creerte a ti y no a los demás?".`;

      const preview = document.getElementById('prompt-output');
      if (preview) {
        preview.textContent = generatedPrompt;
      }

      // Preparar versión para imprimir
      const printPrompt = document.getElementById('print-prompt');
      if (printPrompt) {
        printPrompt.textContent = generatedPrompt;
      }

      goToStep(4);
    }

    function showResultsDashboard() {
      const prod = document.getElementById('inp-producto').value.trim() || 'No especificado';
      const det = document.getElementById('inp-detonante').value.trim() || 'No especificado';
      const trans = document.getElementById('inp-transformacion').value.trim() || 'No especificado';
      
      const miedos = document.getElementById('inp-miedos').value.trim() || 'No especificado';
      const entorno = document.getElementById('inp-entorno').value.trim() || 'No especificado';
      const frases = document.getElementById('inp-frases').value.trim() || 'No especificado';
      
      const dolores = document.getElementById('inp-dolores').value.trim() || 'No especificado';
      const deseos = document.getElementById('inp-deseos').value.trim() || 'No especificado';
      const objeciones = document.getElementById('inp-objeciones').value.trim() || 'No especificado';

      // Dashboard Pantalla
      document.getElementById('res-producto').textContent = prod;
      document.getElementById('res-detonante').textContent = det;
      document.getElementById('res-transformacion').textContent = trans;
      
      document.getElementById('res-miedos').textContent = miedos;
      document.getElementById('res-entorno').textContent = entorno;
      document.getElementById('res-frases').textContent = frases;
      
      document.getElementById('res-dolores').textContent = dolores;
      document.getElementById('res-deseos').textContent = deseos;
      document.getElementById('res-objeciones').textContent = objeciones;

      // Documento Imprimible
      document.getElementById('print-producto').textContent = prod;
      document.getElementById('print-detonante').textContent = det;
      document.getElementById('print-transformacion').textContent = trans;
      
      document.getElementById('print-miedos').textContent = miedos;
      document.getElementById('print-entorno').textContent = entorno;
      document.getElementById('print-frases').textContent = frases;
      
      document.getElementById('print-dolores').textContent = dolores;
      document.getElementById('print-deseos').textContent = deseos;
      document.getElementById('print-objeciones').textContent = objeciones;

      goToStep(5);
    }

    function copyPrompt() {
      if (!generatedPrompt) {
        generatePromptAndNext();
      }
      navigator.clipboard.writeText(generatedPrompt).then(() => {
        showToast('¡Prompt copiado al portapapeles!');
      }).catch(err => {
        showToast('Selecciona el texto para copiarlo');
      });
    }

    function showToast(text) {
      const toast = document.getElementById('toast');
      const toastText = document.getElementById('toast-text');
      if (toast && toastText) {
        toastText.textContent = text;
        toast.style.display = 'flex';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3500);
      }
    }

    function handlePrintClick() {
      if (!isLeadCaptured) {
        // Bloqueado hasta dejar los datos
        showToast('⚠️ Ingresa tu nombre y correo para desbloquear el PDF');
        const leadBox = document.getElementById('lead-box-container');
        if (leadBox) {
          leadBox.scrollIntoView({ behavior: 'smooth' });
          leadBox.style.boxShadow = '0 0 30px rgba(37, 99, 235, 0.5)';
          setTimeout(() => {
            leadBox.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
          }, 2000);
        }
        const nameInput = document.getElementById('lead-nombre');
        if (nameInput) nameInput.focus();
        return;
      }

      // Desbloqueado: Imprimir el documento limpio
      window.print();
    }

    async function enviarReporteLead() {
      const nombre = document.getElementById('lead-nombre').value.trim();
      const email = document.getElementById('lead-email').value.trim();
      const whatsapp = document.getElementById('lead-whatsapp').value.trim();
      const negocio = document.getElementById('lead-negocio').value.trim();
      const statusMsg = document.getElementById('lead-status-msg');
      const btn = document.getElementById('btn-enviar-lead');
      const printBtn = document.getElementById('btn-print-doc');

      if (!nombre || !email) {
        statusMsg.style.display = 'block';
        statusMsg.style.color = '#EF4444';
        statusMsg.innerHTML = '⚠️ Por favor completá tu nombre y correo electrónico.';
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '⏳ Generando y enviando dossier...';
      statusMsg.style.display = 'none';

      // Actualizar metadatos del documento imprimible
      document.getElementById('print-nombre').textContent = nombre;
      document.getElementById('print-negocio').textContent = negocio || 'No especificado';

      const payload = {
        nombre: nombre,
        email: email,
        whatsapp: whatsapp,
        negocio: negocio,
        jtbd: {
          producto: document.getElementById('inp-producto').value.trim(),
          detonante: document.getElementById('inp-detonante').value.trim(),
          transformacion: document.getElementById('inp-transformacion').value.trim()
        },
        empatia: {
          miedos: document.getElementById('inp-miedos').value.trim(),
          entorno: document.getElementById('inp-entorno').value.trim(),
          frases: document.getElementById('inp-frases').value.trim()
        },
        matriz: {
          dolores: document.getElementById('inp-dolores').value.trim(),
          deseos: document.getElementById('inp-deseos').value.trim(),
          objeciones: document.getElementById('inp-objeciones').value.trim()
        },
        prompt_ia: generatedPrompt
      };

      try {
        // Usar la ruta PHP directa para garantizar compatibilidad total
        const response = await fetch('/api/guardar-avatar.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.success) {
          isLeadCaptured = true;
          statusMsg.style.display = 'block';
          statusMsg.style.color = '#22C55E';
          statusMsg.innerHTML = '🎉 <strong>¡Listo!</strong> Tu dossier fue enviado a <strong>' + email + '</strong>.<br><span style="color: #38BDF8; font-size: 0.95rem; font-weight: 700;">✅ ¡PDF Desbloqueado! Ya puedes descargarlo o imprimirlo abajo.</span>';
          btn.innerHTML = '✅ ¡Enviado con Éxito!';
          
          // Actualizar botón de impresión
          if (printBtn) {
            printBtn.style.background = '#2563EB';
            printBtn.innerHTML = '🖨️ Descargar / Imprimir Dossier en PDF';
          }
          
          showToast('Dossier enviado y PDF desbloqueado');
        } else {
          statusMsg.style.display = 'block';
          statusMsg.style.color = '#EF4444';
          statusMsg.innerHTML = '⚠️ Error: ' + (result.error || 'No se pudo enviar el correo.');
          btn.disabled = false;
          btn.innerHTML = '🚀 Reintentar Envío';
        }
      } catch (err) {
        statusMsg.style.display = 'block';
        statusMsg.style.color = '#EF4444';
        statusMsg.innerHTML = '⚠️ Hubo un problema de conexión al procesar el envío. Por favor reintentá.';
        btn.disabled = false;
        btn.innerHTML = '🚀 Reintentar Envío';
      }
    }
  </script>
</body>
</html>
