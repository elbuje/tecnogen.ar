<?php
/**
 * API Endpoint: Guardar Lead de Landing Web para Emprendedores
 * TecnoGen - https://tecnogen.ar
 */

ob_start();
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_clean();
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);
if (!$data) {
    $data = $_POST;
}

$nombre = trim($data['nombre'] ?? '');
$email = filter_var(trim($data['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$whatsapp = trim($data['whatsapp'] ?? '');
$rubro = trim($data['rubro'] ?? '');
$zona = trim($data['zona'] ?? '');
$busquedas = $data['busquedas'] ?? [];
$titular = trim($data['titular'] ?? '');

if (empty($nombre) || !$email) {
    ob_clean();
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Por favor completá tu nombre y correo electrónico válido.']);
    exit;
}

$timestamp = date('Y-m-d H:i:s');
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Desconocida';

// 1. Guardar en JSON de Respaldo Local
$leads_dir = __DIR__ . '/../../data/leads_web';
if (!is_dir($leads_dir)) {
    @mkdir($leads_dir, 0755, true);
    @file_put_contents($leads_dir . '/.htaccess', "Deny from all\n");
}

$lead_record = [
    'timestamp' => $timestamp,
    'ip' => $ip,
    'tipo' => 'escaner_google_web_emprendedores',
    'contacto' => [
        'nombre' => $nombre,
        'email' => $email,
        'whatsapp' => $whatsapp,
        'rubro' => $rubro,
        'zona' => $zona
    ],
    'diagnostico' => [
        'busquedas' => $busquedas,
        'titular' => $titular
    ]
];

$file_name = 'lead_web_' . date('Ymd_His') . '_' . substr(md5(uniqid()), 0, 6) . '.json';
@file_put_contents($leads_dir . '/' . $file_name, json_encode($lead_record, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

// 2. Preparar el Correo para el Emprendedor
$busquedas_html = '';
if (is_array($busquedas) && count($busquedas) > 0) {
    $busquedas_html .= '<ul style="padding-left: 20px; line-height: 1.8;">';
    foreach ($busquedas as $b) {
        $busquedas_html .= '<li><strong>🔍 ' . htmlspecialchars($b) . '</strong></li>';
    }
    $busquedas_html .= '</ul>';
} else {
    $busquedas_html = '<p>Búsquedas de alta intención comercial en ' . htmlspecialchars($zona) . '</p>';
}

$titular_html = htmlspecialchars($titular ?: "La solución profesional en {$rubro} para clientes en {$zona}");

$html_usuario = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #1e293b; margin: 0; padding: 20px; line-height: 1.6; }
  .card { max-width: 680px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
  .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 35px 30px; text-align: center; }
  .header h1 { margin: 0 0 8px; font-size: 24px; font-weight: 800; }
  .content { padding: 30px; }
  .badge { display: inline-block; background: #eff6ff; color: #2563eb; font-weight: 800; font-size: 12px; padding: 4px 10px; border-radius: 999px; text-transform: uppercase; margin-bottom: 8px; }
  .box { background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #2563eb; border-radius: 8px; padding: 16px; margin: 18px 0; }
  .box-gold { background: #fffbeb; border: 1px solid #fde68a; border-left: 4px solid #d97706; border-radius: 8px; padding: 16px; margin: 18px 0; }
  .btn { display: inline-block; background: #2563eb; color: #ffffff !important; font-weight: bold; text-decoration: none; padding: 12px 28px; border-radius: 8px; margin-top: 14px; font-size: 15px; }
  .btn-wa { display: inline-block; background: #22c55e; color: #000000 !important; font-weight: 800; text-decoration: none; padding: 12px 26px; border-radius: 8px; margin-top: 12px; font-size: 15px; }
  .footer { text-align: center; font-size: 12px; color: #64748b; padding: 20px; }
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <span class="badge">Diagnóstico de Visibilidad en Google</span>
    <h1>🚀 Tu Informe de Oportunidades en Google</h1>
    <p>Para: <strong>{$nombre}</strong> · Rubro: {$rubro} ({$zona})</p>
  </div>
  <div class="content">
    <p>Hola <strong>{$nombre}</strong>,</p>
    <p>Gracias por usar el Escáner de Visibilidad de <strong>TecnoGen</strong>. Aquí tenés el resumen de cómo te buscan las personas que hoy tienen la tarjeta en la mano y necesitan tu producto o servicio en <strong>{$zona}</strong>:</p>

    <div class="box-gold">
      <h3 style="margin: 0 0 8px; color: #92400e; font-size: 16px;">🔍 Búsquedas de Oro detectadas en tu zona:</h3>
      <p style="font-size: 13px; color: #78350f; margin-bottom: 8px;">Estas son las frases exactas con las que tus futuros clientes buscan en Google en lugar de esperar una historia de Instagram:</p>
      {$busquedas_html}
    </div>

    <div class="box">
      <h3 style="margin: 0 0 6px; color: #1e3a8a; font-size: 16px;">✍️ El Titular Recomendado para la portada de tu Web:</h3>
      <p style="font-style: italic; font-size: 15px; color: #0f172a; margin: 0;">"{$titular_html}"</p>
    </div>

    <div style="background: #eff6ff; border-radius: 10px; padding: 20px; margin-top: 25px;">
      <h3 style="margin: 0 0 8px; color: #1e40af; font-size: 16px;">📋 Los 4 Bloques que no pueden faltar en tu Landing Page:</h3>
      <ol style="padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.6;">
        <li><strong>Propuesta de Valor Inmediata:</strong> Qué problema resolvés y en qué zona atendés (en menos de 3 segundos).</li>
        <li><strong>Fotos Reales y Casos de Éxito:</strong> Muestrario visual que demuestre que sos confiable.</li>
        <li><strong>Respuestas a Preguntas Frecuentes:</strong> Desactivar dudas de precio, envíos o formas de pago.</li>
        <li><strong>Botón Directo a WhatsApp:</strong> Un enlace flotante con mensaje pre-cargado para que te pidan presupuesto al instante.</li>
      </ol>
    </div>

    <div style="background: #0f172a; color: #ffffff; border-radius: 12px; padding: 24px; text-align: center; margin-top: 30px;">
      <h3 style="margin: 0 0 8px; font-size: 18px; color: #38bdf8;">¿Querés que en TecnoGen diseñemos tu Web o Landing Page?</h3>
      <p style="margin: 0 0 16px; font-size: 13px; color: #94a3b8;">La dejamos lista, rápida, optimizada para celular y preparada para aparecer en Google en menos de 7 días.</p>
      <a href="https://wa.me/5491170610766?text=Hola%20TecnoGen!%20Complet%C3%A9%20el%20esc%C3%A1ner%20web%20para%20mi%20negocio%20de%20{$rubro}%20en%20{$zona}%20y%20quiero%20cotizar%20mi%20Landing%20Page." class="btn-wa" target="_blank">💬 Pedir Presupuesto por WhatsApp</a>
    </div>

    <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 12px; margin-top: 25px; font-size: 11px; color: #78350f;">
      <strong>⚠️ Nota orientativa:</strong> Este diagnóstico es ilustrativo para potenciar tu estrategia comercial. En TecnoGen te asesoramos paso a paso sin tecnicismos para que tomes la mejor decisión para tu emprendimiento.
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

// 3. Notificación Interna para mmujica@tecnobrain.com.ar
$html_notificacion = <<<HTML
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px;">
<div style="background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 20px; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #38bdf8; margin-top: 0;">🔥 Nuevo Lead: Interesado en Página Web / Landing</h2>
  <span style="background: #22c55e; color: #000; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 12px;">EMPRENDEDOR CALIFICADO</span>
  <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">Nombre</th><td style="padding: 8px; border-bottom: 1px solid #334155;"><strong>{$nombre}</strong></td></tr>
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">Email</th><td style="padding: 8px; border-bottom: 1px solid #334155;"><a href="mailto:{$email}" style="color: #38bdf8;">{$email}</a></td></tr>
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">WhatsApp</th><td style="padding: 8px; border-bottom: 1px solid #334155;"><a href="https://wa.me/{$whatsapp}" style="color: #22c55e; font-weight: bold;" target="_blank">{$whatsapp}</a></td></tr>
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">Rubro</th><td style="padding: 8px; border-bottom: 1px solid #334155;">{$rubro}</td></tr>
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">Zona</th><td style="padding: 8px; border-bottom: 1px solid #334155;">{$zona}</td></tr>
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">Búsquedas</th><td style="padding: 8px; border-bottom: 1px solid #334155;">{$busquedas_html}</td></tr>
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">Titular Web</th><td style="padding: 8px; border-bottom: 1px solid #334155;">{$titular_html}</td></tr>
    <tr><th style="text-align: left; padding: 8px; border-bottom: 1px solid #334155; color: #94a3b8;">IP</th><td style="padding: 8px; border-bottom: 1px solid #334155;">{$ip}</td></tr>
  </table>
  <div style="margin-top: 20px; text-align: center;">
    <a href="https://wa.me/{$whatsapp}?text=Hola%20{$nombre}!%20Vi%20que%20hiciste%20el%20diagn%C3%B3stico%20en%20TecnoGen%20para%20tu%20emprendimiento%20de%20{$rubro}%20en%20{$zona}.%20%C2%A1Excelente%20oportunidad!%20%C2%BFQuer%C3%A9s%20que%20te%20muestre%20c%C3%B3mo%20quedar%C3%ADa%20tu%20landing%20page?" style="background: #22c55e; color: #000; padding: 10px 18px; border-radius: 6px; font-weight: bold; text-decoration: none;" target="_blank">📲 Escribirle por WhatsApp</a>
  </div>
</div>
</body>
</html>
HTML;

require_once __DIR__ . '/../../includes/mailer.php';

$mail_user_sent = tg_send_mail(
    $email,
    "🚀 Tu Informe de Oportunidades en Google + Estructura de Landing Page - TecnoGen",
    $html_usuario,
    "TecnoGen • Páginas Web & Crecimiento",
    "contacto@tecnogen.ar"
);

$admin_email = 'mmujica@tecnobrain.com.ar';
$mail_admin_sent = tg_send_mail(
    $admin_email,
    "🔥 [Lead Web Emprendedor] {$nombre} - {$rubro} ({$zona})",
    $html_notificacion,
    "TecnoGen Leads",
    $email
);

ob_clean();
echo json_encode([
    'success' => true,
    'message' => '¡Diagnóstico enviado con éxito! Revisa tu casilla de correo.',
    'mail_sent' => $mail_user_sent,
    'admin_mail_sent' => $mail_admin_sent,
    'lead_id' => $file_name
]);
