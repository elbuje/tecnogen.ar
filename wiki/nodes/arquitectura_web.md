---
title: Arquitectura Web y Sistema de Diseño Frontend
description: Estructura técnica de tecnogen.ar en PHP 8.x Nativo Modular (Estándar Fedenowback), Vistas Modulares, CSS Vanilla y Front Controller
tags:
  - web
  - php
  - architecture
  - css
  - performance
  - fedenowback
---

# 💻 Arquitectura Web y Sistema de Diseño (PHP 8.x Modular)

## 🧱 Stack Tecnológico Actual

El proyecto migró el 27 de Septiembre de 2026 de React/Vite a **PHP 8.x Nativo Modular** siguiendo la arquitectura y estándar de rendimiento de `fedenowback.com.ar`:

- **Core & Runtime:** PHP 8.x nativo sin frameworks pesados ni dependencias de npm/node_modules.
- **Ruteo & Front Controller:** `public/index.php` con enrutamiento dinámico amigable (Clean URLs), manejo de errores 404, `/sitemap.xml` dinámico y `robots.txt`.
- **Configuración Global:** `includes/config.php` (URLs, teléfonos de contacto, parámetros canónicos).
- **SEO & Microdatos:** `includes/seo_helper.php` con inyección de meta tags OpenGraph, Twitter Cards y Schema.org JSON-LD (`Organization`, `Service`, `BreadcrumbList`, `FAQPage`).
- **Estilos:** Vanilla CSS modular en `public/assets/css/style.css` con variables CSS de la identidad corporativa de TecnoGen.
- **Interactividad:** JavaScript Vanilla en `public/assets/js/main.js` (selector de dolores/soluciones, FAQ acordeón, tracking y WhatsApp CRO).
- **Tipografías:** Google Fonts (`Montserrat` para encabezados + `Inter` para cuerpo de texto).

---

## 📁 Estructura del Repositorio

```
tecnogen.ar/
├── includes/
│   ├── config.php          # Configuración global, variables de entorno y metadatos
│   └── seo_helper.php      # Helper de SEO, OpenGraph y Schema.org JSON-LD
├── public/
│   ├── index.php           # Front Controller y despachador de rutas
│   ├── assets/
│   │   ├── css/style.css   # Sistema de diseño CSS completo
│   │   └── js/main.js      # Lógica interactiva cliente
│   └── events_new/         # Flyers y retratos optimizados del evento
├── views/
│   ├── layout/
│   │   ├── header.php      # Encabezado modular y navegación
│   │   └── footer.php      # Pie de página institucional
│   ├── index.php           # Home page
│   ├── marketing-digital.php
│   ├── seo-posicionamiento.php
│   ├── inteligencia-artificial.php
│   ├── agentes-ia.php
│   ├── automatizacion.php
│   ├── crm-whatsapp.php
│   ├── contenido-ia.php
│   ├── sobre-nosotros.php
│   ├── contacto.php
│   └── landing-evento.php  # Landing de evento 10 de octubre (/Mentalidad-Marketing-Neuroventas-con-IA)
├── wiki/                   # LLM Wiki viva del proyecto
└── status.md               # Estado operativo actual
```

---

## 🎨 Sistema de Diseño y Componentes

1. **Header Sticky Modular (`views/layout/header.php`):**
   - Logotipo vectorial SVG de TecnoGen con isotipo estilizado TG en degradado azul-cian.
   - Navegación con selector de soluciones desplegable y botón CTA de contacto.

2. **Hero Section (`views/index.php`):**
   - Titular: *Ideas inteligentes para un mayor mañana*.
   - Propuesta de valor: *Marketing + IA + Automatización*.
   - Métricas destacadas y CTAs de alta conversión a WhatsApp.

3. **Selector Interactivo de Soluciones:**
   - Tabs dinámicas por objetivos del cliente con diagnóstico y soluciones recomendadas.

4. **Vistas de Servicios Específicos:**
   - Páginas dedicadas con SEO on-page, tablas de capacidades y llamadas a la acción directas.

5. **Landing de Evento Aislada (`views/landing-evento.php`):**
   - Vista standalone sin header/footer corporativo con countdown y venta directa.
