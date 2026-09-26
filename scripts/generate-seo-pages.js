import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

const seoRoutes = [
  {
    path: 'agencia-marketing-digital',
    title: 'Agencia de Marketing Digital & Funnels de Conversión | TecnoGen',
    description: 'Agencia de marketing digital para empresas y PyMEs. Campañas en Google Ads, Meta Ads, LinkedIn y landing pages de alta conversión orientadas a ventas.'
  },
  {
    path: 'agencia-seo-posicionamiento',
    title: 'Agencia SEO & Posicionamiento Transaccional y Motores de IA (GEO) | TecnoGen',
    description: 'Agencia SEO especializada en posicionamiento en Google y motores de Inteligencia Artificial (ChatGPT, Perplexity, Gemini). Visibilidad orgánica de alta intención comercial.'
  },
  {
    path: 'inteligencia-artificial-empresas',
    title: 'Inteligencia Artificial para Empresas & Consultoría en IA | TecnoGen',
    description: 'Soluciones de Inteligencia Artificial aplicada a empresas y PyMEs. Modelos RAG, bases de conocimiento privadas, análisis predictivo y automatización cognitiva.'
  },
  {
    path: 'agentes-inteligencia-artificial',
    title: 'Agentes de Inteligencia Artificial & Asistentes Autónomos | TecnoGen',
    description: 'Desarrollo e implementación de Agentes de IA autónomos y asistentes comerciales para WhatsApp, CRM y atención 24/7. Calificación automática de leads y ejecución de tareas.'
  },
  {
    path: 'automatizacion-de-procesos',
    title: 'Automatización de Procesos & Flujos de Trabajo para Empresas | TecnoGen',
    description: 'Automatización de procesos empresariales y flujos comerciales. Integración de CRM, WhatsApp, correos, bases de datos y sistemas sin intervención manual.'
  },
  {
    path: 'crm-whatsapp-ventas',
    title: 'CRM, WhatsApp Business API & Procesos Comerciales | TecnoGen',
    description: 'Implementación de CRM Kommo y WhatsApp Cloud API oficial para empresas. Automatización de embudos comerciales, calificación de prospectos y trazabilidad total.'
  },
  {
    path: 'contenido-inteligencia-artificial',
    title: 'Content OS & Generación de Contenido con Inteligencia Artificial | TecnoGen',
    description: 'Sistema operativo de producción de contenidos con IA. Creación de carruseles, artículos de autoridad para LinkedIn, guiones y video IA para posicionar tu marca.'
  },
  {
    path: 'sobre-nosotros',
    title: 'Sobre Nosotros - La Unión de TecnoBrain y GEN de Negocio | TecnoGen',
    description: 'TecnoGen combina la experiencia técnica en infraestructura, automatización e IA de TecnoBrain con la visión estratégica de marketing y crecimiento de GEN de Negocio.'
  },
  {
    path: 'contacto',
    title: 'Contacto & Agendamiento de Consultoría | TecnoGen',
    description: 'Agendá una sesión de consultoría técnica sin cargo con TecnoGen. Hablemos de cómo implementar marketing, IA y automatizaciones en tu empresa.'
  },
  {
    path: 'Mentalidad-Marketing-Neuroventas-con-IA',
    title: 'Mentalidad y Marketing — Neuroventas con IA | Evento Presencial 10 de Octubre',
    description: 'Evento presencial exclusivo para dueños de negocio y emprendedores: Anthony Altuna, Fede Nowback y Christian Cencherle en CABA. 10 de octubre de 10:00 a 17:00 hs.'
  },
  {
    path: 'mentalidad-marketing-neuroventas-con-ia',
    title: 'Mentalidad y Marketing — Neuroventas con IA | Evento Presencial 10 de Octubre',
    description: 'Evento presencial exclusivo para dueños de negocio y emprendedores: Anthony Altuna, Fede Nowback y Christian Cencherle en CABA. 10 de octubre de 10:00 a 17:00 hs.'
  }
];

// Create index.php fallback for Nginx / PHP
const indexPhp = `<?php
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$trimmed = trim($uri, '/');
$dir = __DIR__ . '/' . $trimmed;

if (!empty($trimmed) && file_exists($dir . '/index.html')) {
    include $dir . '/index.html';
    exit;
}
if (!empty($trimmed) && file_exists(__DIR__ . '/' . $trimmed . '.html')) {
    include __DIR__ . '/' . $trimmed . '.html';
    exit;
}
if (!empty($trimmed) && file_exists(__DIR__ . '/' . $trimmed) && !is_dir(__DIR__ . '/' . $trimmed)) {
    return false;
}
include __DIR__ . '/index.html';
`;

fs.writeFileSync(path.join(distDir, 'index.php'), indexPhp);

seoRoutes.forEach(route => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let customHtml = baseHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.description}" />`);

  // Both directory index.html and root .html file for maximum compatibility
  fs.writeFileSync(path.join(routeDir, 'index.html'), customHtml);
  fs.writeFileSync(path.join(distDir, `${route.path}.html`), customHtml);
  console.log(`✅ SEO Page generated: /${route.path}/index.html and /${route.path}.html`);
});

console.log('🎉 All SEO landing pages and index.php fallback created successfully.');
