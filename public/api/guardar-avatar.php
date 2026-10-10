<?php
/**
 * API Endpoint: Guardar Avatar Lead & Enviar Correos
 * TecnoGen - https://tecnogen.ar
 */

ob_start();
header('Content-Type: application/json; charset=utf-8');

// Aceptar solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_clean();
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

// Leer payload JSON o POST estándar
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    $data = $_POST;
}

// Extraer campos del contacto
$nombre = trim($data['nombre'] ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$whatsapp = trim($data['whatsapp'] ?? '');
$negocio = trim($data['negocio'] ?? '');

// Validaciones básicas
if (empty($nombre) || !$email) {
    ob_clean();
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Por favor ingresá un nombre y un correo electrónico válido.']);
    exit;
}

// Extraer datos del Avatar
$jtbd = $data['jtbd'] ?? [];
$empatia = $data['empatia'] ?? [];
$matriz = $data['matriz'] ?? [];
$analisis_ia = $data['analisis_ia'] ?? [];
$prompt_ia = $data['prompt_ia'] ?? '';
$timestamp = date('Y-m-d H:i:s');
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Desconocida';

// 1. Guardar en Base de Datos de Archivos (JSON Local de Respaldo)
$leads_dir = __DIR__ . '/../../data/leads_avatar';
if (!is_dir($leads_dir)) {
    mkdir($leads_dir, 0755, true);
    file_put_contents($leads_dir . '/.htaccess', "Deny from all\n");
}

$lead_record = [
    'timestamp' => $timestamp,
    'ip' => $ip,
    'contacto' => [
        'nombre' => $nombre,
        'email' => $email,
        'whatsapp' => $whatsapp,
        'negocio' => $negocio
    ],
    'avatar' => [
        'jtbd' => $jtbd,
        'empatia' => $empatia,
        'matriz' => $matriz,
        'analisis_ia' => $analisis_ia,
        'prompt_ia' => $prompt_ia
    ]
];

$file_name = 'lead_' . date('Ymd_His') . '_' . substr(md5(uniqid()), 0, 6) . '.json';
@file_put_contents($leads_dir . '/' . $file_name, json_encode($lead_record, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// 2. Preparar el Contenido HTML del Dossier para el Correo
$producto = htmlspecialchars($jtbd['producto'] ?? 'No especificado');
$detonante = htmlspecialchars($jtbd['detonante'] ?? 'No especificado');
$transformacion = htmlspecialchars($jtbd['transformacion'] ?? 'No especificado');

$miedos = htmlspecialchars($empatia['miedos'] ?? 'No especificado');
$entorno = htmlspecialchars($empatia['entorno'] ?? 'No especificado');
$frases = htmlspecialchars($empatia['frases'] ?? 'No especificado');

$dolores = htmlspecialchars($matriz['dolores'] ?? 'No especificado');
$deseos = htmlspecialchars($matriz['deseos'] ?? 'No especificado');
$objeciones = htmlspecialchars($matriz['objeciones'] ?? 'No especificado');
$prompt_safe = nl2br(htmlspecialchars($prompt_ia));

// Datos generados por la IA / Estratega
$arquetipo = htmlspecialchars($analisis_ia['arquetipo'] ?? 'Perfil Profesional en Crecimiento');
$nivel_consciencia = htmlspecialchars($analisis_ia['nivel_consciencia'] ?? 'Consciente del Dolor & Buscando Solución');
$boton_emocional = htmlspecialchars($analisis_ia['boton_emocional'] ?? 'Seguridad, Libertad de Tiempo y Retorno de Inversión');
$titulares_html = nl2br(htmlspecialchars($analisis_ia['titulares'] ?? ''));
$anuncios_html = nl2br(htmlspecialchars($analisis_ia['anuncios'] ?? ''));
$scripts_objeciones_html = nl2br(htmlspecialchars($analisis_ia['scripts_objeciones'] ?? ''));
$estrategia_embudo = htmlspecialchars($analisis_ia['estrategia_embudo'] ?? 'Embudo directo a WhatsApp con Calificación por Agente de IA');

// Template HTML para el Usuario
$html_usuario = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b; margin: 0; padding: 20px; line-height: 1.6; }
  .card { max-width: 720px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
  .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 35px 30px; text-align: center; }
  .header h1 { margin: 0 0 8px; font-size: 24px; font-weight: 800; }
  .header p { margin: 0; opacity: 0.9; font-size: 14px; }
  .content { padding: 30px; }
  
  .ai-badge { display: inline-block; background: #eff6ff; color: #2563eb; font-weight: 800; font-size: 12px; padding: 4px 10px; border-radius: 999px; text-transform: uppercase; margin-bottom: 8px; }
  .section-title { font-size: 16px; font-weight: 800; color: #1e3a8a; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px; margin: 28px 0 14px; display: flex; align-items: center; gap: 8px; }
  .highlight-card { background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
  .highlight-card strong { color: #0f172a; display: block; margin-bottom: 4px; font-size: 14px; }
  
  .copy-box { background: #faf5ff; border: 1px solid #e9d5ff; border-left: 4px solid #a855f7; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
  .copy-box strong { color: #581c87; display: block; margin-bottom: 6px; font-size: 14px; }
  
  .script-box { background: #f0fdf4; border: 1px solid #bbf7d0; border-left: 4px solid #22c55e; border-radius: 8px; padding: 16px; margin-bottom: 16px; }
  .script-box strong { color: #14532d; display: block; margin-bottom: 6px; font-size: 14px; }

  .prompt-box { background: #0b0f19; color: #38bdf8; padding: 18px; border-radius: 8px; font-family: monospace; font-size: 12px; white-space: pre-wrap; word-break: break-word; }
  .cta-banner { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 24px; text-align: center; margin-top: 35px; }
  .btn { display: inline-block; background: #2563eb; color: #ffffff !important; font-weight: bold; text-decoration: none; padding: 12px 28px; border-radius: 8px; margin-top: 14px; font-size: 15px; }
  .footer { text-align: center; font-size: 12px; color: #64748b; padding: 20px; }
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <span class="ai-badge">Dossier Estratégico & Neuroventas</span>
    <h1>🎯 Informe de Cliente Ideal & Plan Táctico</h1>
    <p>Generado por el Asistente de IA de TecnoGen para <strong>{$nombre}</strong> ({$negocio})</p>
  </div>
  <div class="content">
    <p>Hola <strong>{$nombre}</strong>,</p>
    <p>A partir de los datos que ingresaste, nuestro motor de Neuroventas e IA estructuró la psicología de tu comprador y generó <strong>titulares de alta conversión, ganchos para anuncios y guiones de venta para cerrar objeciones</strong>.</p>
    
    <!-- BLOQUE 1: DIAGNÓSTICO DE NEUROVENTAS -->
    <div class="section-title">🧠 1. Diagnóstico Psicológico & Arquetipo</div>
    <div class="highlight-card">
      <strong>Arquetipo del Comprador:</strong>
      {$arquetipo}
    </div>
    <div class="highlight-card">
      <strong>Nivel de Consciencia de Compra (Eugene Schwartz):</strong>
      {$nivel_consciencia}
    </div>
    <div class="highlight-card">
      <strong>Botón Emocional Primario (*Disparador Biológico*):</strong>
      {$boton_emocional}
    </div>

    <!-- BLOQUE 2: COPYWRITING GENERADO -->
    <div class="section-title">✍️ 2. Titulares Ganadores para tu Landing Page (H1)</div>
    <div class="copy-box">
      <strong>Opciones de Títulos con Fórmulas de Alta Conversión:</strong>
      {$titulares_html}
    </div>

    <!-- BLOQUE 3: ANUNCIOS Y HOOKS -->
    <div class="section-title">📣 3. Ganchos & Anuncios para Redes (Meta / TikTok / LinkedIn)</div>
    <div class="copy-box">
      <strong>Ángulos de Anuncios Basados en sus Dolores y su Voz:</strong>
      {$anuncios_html}
    </div>

    <!-- BLOQUE 4: DESARME DE OBJECIONES -->
    <div class="section-title">🛡️ 4. Guion de Desarme de Objeciones (Cierres para WhatsApp)</div>
    <div class="script-box">
      <strong>Cómo Responder cuando el Cliente Dude:</strong>
      {$scripts_objeciones_html}
    </div>

    <!-- BLOQUE 5: ESTRATEGIA DE EMBUDO -->
    <div class="section-title">🚀 5. Hoja de Ruta Táctica Recomendada</div>
    <div class="highlight-card">
      <strong>Arquitectura de Embudo Sugerida:</strong>
      {$estrategia_embudo}
    </div>

    <!-- BLOQUE 6: MEGA PROMPT -->
    <div class="section-title">🤖 6. Mega-Prompt de Roleplay Inverso con IA</div>
    <p style="font-size: 13px; color: #64748b;">Copiá y pegá este prompt en ChatGPT, Claude o Gemini para entrevistar a tu avatar en vivo:</p>
    <div class="prompt-box">{$prompt_safe}</div>

    <!-- CTA TECNOGEN -->
    <div class="cta-banner">
      <h3 style="margin: 0 0 6px; color: #1e3a8a; font-size: 18px;">¿Querés implementar este Embudo con Agentes de IA en tu Negocio?</h3>
      <p style="margin: 0; font-size: 14px; color: #3b82f6;">En <strong>TecnoGen</strong> construimos tu Landing Page de alta conversión, redactamos tus campañas y configuramos agentes de WhatsApp con IA para atender y agendar reuniones 24/7.</p>
      <a href="https://wa.me/5491170610766?text=Hola%20TecnoGen!%20Recib%C3%AD%20mi%20Dossier%20de%20Cliente%20Ideal%20y%20quiero%20agendar%20una%20sesi%C3%B3n%20para%20implementar%20el%20embudo." class="btn" target="_blank">💬 Agendar Sesión Estratégica por WhatsApp</a>
    </div>
  </div>
  <div class="footer">
    TecnoGen — Marketing Digital, Inteligencia Artificial & Automatización<br>
    Buenos Aires, Argentina · <a href="https://tecnogen.ar" style="color: #2563eb;">tecnogen.ar</a>
  </div>
</div>
</body>
</html>
HTML;

// Template de Notificación Interna para mmujica@tecnobrain.com.ar
$html_notificacion = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
  .box { background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 20px; max-width: 650px; margin: 0 auto; }
  h2 { color: #38bdf8; margin-top: 0; }
  table { width: 100%; border-collapse: collapse; margin-top: 15px; }
  th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #334155; font-size: 14px; }
  th { color: #94a3b8; width: 35%; }
  td { color: #ffffff; }
  .badge { background: #22c55e; color: #000; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px; }
</style>
</head>
<body>
<div class="box">
  <h2>🔥 Nuevo Lead Capturado: Dossier Estratégico Generado</h2>
  <span class="badge">PROSPECTO CALIFICADO TECNOGEN</span>
  <table>
    <tr><th>Fecha & Hora</th><td>{$timestamp}</td></tr>
    <tr><th>Nombre</th><td><strong>{$nombre}</strong></td></tr>
    <tr><th>Email</th><td><a href="mailto:{$email}" style="color: #38bdf8;">{$email}</a></td></tr>
    <tr><th>WhatsApp</th><td><a href="https://wa.me/{$whatsapp}" style="color: #22c55e; font-weight: bold;" target="_blank">{$whatsapp}</a></td></tr>
    <tr><th>Negocio / Rubro</th><td>{$negocio}</td></tr>
    <tr><th>Arquetipo Generado</th><td>{$arquetipo}</td></tr>
    <tr><th>Oferta / Producto</th><td>{$producto}</td></tr>
    <tr><th>Detonante de Compra</th><td>{$detonante}</td></tr>
    <tr><th>Dolores Detectados</th><td>{$dolores}</td></tr>
    <tr><th>Objeciones Clave</th><td>{$objeciones}</td></tr>
    <tr><th>IP del Lead</th><td>{$ip}</td></tr>
  </table>
  <div style="margin-top: 20px; text-align: center;">
    <a href="https://wa.me/{$whatsapp}?text=Hola%20{$nombre},%20vi%20que%20generaste%20tu%20Dossier%20de%20Cliente%20Ideal%20en%20TecnoGen%20para%20tu%20negocio%20de%20{$negocio}.%20%C2%A1Excelente%20an%C3%A1lisis!%20%C2%BFTe%20gustar%C3%ADa%20que%20revisemos%20los%20titulares%20y%20el%20embudo%20con%20IA%20en%20una%20sesi%C3%B3n%20r%C3%A1pida?" style="background: #22c55e; color: #000; padding: 10px 18px; border-radius: 6px; font-weight: bold; text-decoration: none;" target="_blank">📲 Escribirle por WhatsApp</a>
  </div>
</div>
</body>
</html>
HTML;

// Headers para envío de correo
$from_email = 'contacto@tecnogen.ar';
$headers_user  = "MIME-Version: 1.0\r\n";
$headers_user .= "Content-type: text/html; charset=UTF-8\r\n";
$headers_user .= "From: TecnoGen <{$from_email}>\r\n";
$headers_user .= "Reply-To: {$from_email}\r\n";
$headers_user .= "X-Mailer: PHP/" . phpversion();

$headers_admin  = "MIME-Version: 1.0\r\n";
$headers_admin .= "Content-type: text/html; charset=UTF-8\r\n";
$headers_admin .= "From: TecnoGen Leads <{$from_email}>\r\n";
$headers_admin .= "Reply-To: {$email}\r\n";
$headers_admin .= "X-Mailer: PHP/" . phpversion();

// Enviar correos
$mail_user_sent = @mail($email, "🎯 Tu Dossier Estratégico de Cliente Ideal & Plan de Copywriting - TecnoGen", $html_usuario, $headers_user);
$admin_email = 'mmujica@tecnobrain.com.ar';
$mail_admin_sent = @mail($admin_email, "🔥 [Lead Avatar IA] {$nombre} ({$negocio})", $html_notificacion, $headers_admin);

ob_clean();
echo json_encode([
    'success' => true,
    'message' => '¡Dossier generado y enviado con éxito! Revisa tu casilla de correo electrónico.',
    'mail_sent' => $mail_user_sent,
    'lead_id' => $file_name
]);
