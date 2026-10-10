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
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Por favor ingresá un nombre y un correo electrónico válido.']);
    exit;
}

// Extraer datos del Avatar
$jtbd = $data['jtbd'] ?? [];
$empatia = $data['empatia'] ?? [];
$matriz = $data['matriz'] ?? [];
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

// Template HTML para el Usuario
$html_usuario = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f6f9; color: #1e293b; margin: 0; padding: 20px; line-height: 1.6; }
  .card { max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); }
  .header { background: linear-gradient(135deg, #1e293b 0%, #2563eb 100%); color: #ffffff; padding: 35px 30px; text-align: center; }
  .header h1 { margin: 0 0 8px; font-size: 24px; font-weight: 800; }
  .header p { margin: 0; opacity: 0.9; font-size: 15px; }
  .content { padding: 30px; }
  .section-title { font-size: 16px; font-weight: 700; color: #2563eb; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #eff6ff; padding-bottom: 6px; margin: 24px 0 12px; }
  .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-bottom: 15px; }
  .box strong { color: #0f172a; display: block; margin-bottom: 4px; font-size: 14px; }
  .prompt-box { background: #0b0f19; color: #38bdf8; padding: 18px; border-radius: 8px; font-family: monospace; font-size: 13px; white-space: pre-wrap; word-break: break-word; }
  .cta-banner { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 22px; text-align: center; margin-top: 30px; }
  .btn { display: inline-block; background: #2563eb; color: #ffffff !important; font-weight: bold; text-decoration: none; padding: 12px 26px; border-radius: 6px; margin-top: 12px; font-size: 15px; }
  .footer { text-align: center; font-size: 12px; color: #64748b; padding: 20px; }
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <h1>🎯 Tu Dossier Estratégico de Cliente Ideal</h1>
    <p>Generado con el Asistente de Neuroventas e IA de TecnoGen</p>
  </div>
  <div class="content">
    <p>Hola <strong>{$nombre}</strong>,</p>
    <p>¡Felicitaciones por completar el diagnóstico de tu Avatar! Aquí tienes tu reporte consolidado con toda la arquitectura psicológica de tu cliente ideal y tu mega-prompt listo para ejecutar en Inteligencia Artificial.</p>
    
    <div class="section-title">1. Jobs To Be Done & Propuesta de Valor</div>
    <div class="box">
      <strong>Tu Producto / Servicio:</strong>
      {$producto}
    </div>
    <div class="box">
      <strong>Momento Detonante de Compra:</strong>
      {$detonante}
    </div>
    <div class="box">
      <strong>Transformación o Progreso Buscado:</strong>
      {$transformacion}
    </div>

    <div class="section-title">2. Mapa de Empatía & Voz del Cliente</div>
    <div class="box">
      <strong>Miedos y Preocupaciones a las 3 AM:</strong>
      {$miedos}
    </div>
    <div class="box">
      <strong>Entorno y Opiniones que lo Rodean:</strong>
      {$entorno}
    </div>
    <div class="box">
      <strong>Frases y Vocabulario Literal que Usa:</strong>
      {$frases}
    </div>

    <div class="section-title">3. Matriz Dolor - Deseo - Objeciones</div>
    <div class="box">
      <strong>Dolores Principales (Pains):</strong>
      {$dolores}
    </div>
    <div class="box">
      <strong>Deseos y Metas (Gains):</strong>
      {$deseos}
    </div>
    <div class="box">
      <strong>Top Objeciones de Compra:</strong>
      {$objeciones}
    </div>

    <div class="section-title">4. Tu Mega-Prompt de Roleplay Inverso con IA</div>
    <p style="font-size: 13px; color: #64748b;">Copiá y pegá este prompt en ChatGPT, Claude, Gemini o DeepSeek para entrevistar y validar a tu avatar en vivo:</p>
    <div class="prompt-box">{$prompt_safe}</div>

    <div class="cta-banner">
      <h3 style="margin: 0 0 6px; color: #1e3a8a; font-size: 18px;">¿Querés implementar este Avatar en un Embudo de Ventas con IA?</h3>
      <p style="margin: 0; font-size: 14px; color: #3b82f6;">En <strong>TecnoGen</strong> diseñamos tu Landing Page de alta conversión, tus anuncios en Meta/Google y tus agentes de WhatsApp con IA para captar a este cliente 24/7.</p>
      <a href="https://wa.me/5491170610766?text=Hola%20TecnoGen!%20Complet%C3%A9%20el%20asistente%20de%20Cliente%20Ideal%20y%20quiero%20agendar%20una%20sesi%C3%B3n%20estrat%C3%A9gica%20con%20ustedes." class="btn" target="_blank">💬 Agendar Consultoría Estratégica por WhatsApp</a>
    </div>
  </div>
  <div class="footer">
    TecnoGen — Soluciones en Marketing Digital, IA & Automatización<br>
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
  <h2>🔥 Nuevo Lead Capturado: Generador de Cliente Ideal</h2>
  <span class="badge">NUEVO PROSPECTO TECNOGEN</span>
  <table>
    <tr><th>Fecha & Hora</th><td>{$timestamp}</td></tr>
    <tr><th>Nombre</th><td><strong>{$nombre}</strong></td></tr>
    <tr><th>Email</th><td><a href="mailto:{$email}" style="color: #38bdf8;">{$email}</a></td></tr>
    <tr><th>WhatsApp</th><td><a href="https://wa.me/{$whatsapp}" style="color: #22c55e; font-weight: bold;" target="_blank">{$whatsapp}</a></td></tr>
    <tr><th>Negocio / Rubro</th><td>{$negocio}</td></tr>
    <tr><th>Producto / Oferta</th><td>{$producto}</td></tr>
    <tr><th>Detonante de Compra</th><td>{$detonante}</td></tr>
    <tr><th>Dolores Detectados</th><td>{$dolores}</td></tr>
    <tr><th>Objeciones Clave</th><td>{$objeciones}</td></tr>
    <tr><th>IP del Lead</th><td>{$ip}</td></tr>
  </table>
  <div style="margin-top: 20px; text-align: center;">
    <a href="https://wa.me/{$whatsapp}?text=Hola%20{$nombre},%20vi%20que%20completaste%20el%20diagn%C3%B3stico%20de%20Cliente%20Ideal%20en%20TecnoGen.%20%C2%A1Excelente%20an%C3%A1lisis!%20%C2%BFTe%20gustar%C3%ADa%20que%20hablemos%20de%20c%C3%B3mo%20automatizar%20la%20captaci%C3%B3n%20de%20este%20avatar?" style="background: #22c55e; color: #000; padding: 10px 18px; border-radius: 6px; font-weight: bold; text-decoration: none;" target="_blank">📲 Escribirle por WhatsApp</a>
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
$mail_user_sent = @mail($email, "🎯 Tu Dossier Estratégico de Cliente Ideal - TecnoGen", $html_usuario, $headers_user);
$admin_email = 'mmujica@tecnobrain.com.ar';
$mail_admin_sent = @mail($admin_email, "🔥 [Lead Avatar IA] {$nombre} ({$negocio})", $html_notificacion, $headers_admin);

ob_clean();
echo json_encode([
    'success' => true,
    'message' => '¡Dossier generado y enviado con éxito! Revisa tu casilla de correo electrónico.',
    'mail_sent' => $mail_user_sent,
    'lead_id' => $file_name
]);
