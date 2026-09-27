<?php
/**
 * View: Evento 10 de Octubre - Mentalidad y Marketing
 * https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA
 */
$html_path = __DIR__ . '/../public/Mentalidad-Marketing-Neuroventas-con-IA.html';
if (file_exists($html_path)) {
    include $html_path;
} else {
    header("Location: /Mentalidad-Marketing-Neuroventas-con-IA.html");
    exit;
}
