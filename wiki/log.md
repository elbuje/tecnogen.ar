# 📜 Bitácora de Cambios (Changelog) - TecnoGen

## [2026-09-29] - Rediseño Manifiesto, Ajustes Mobile Hero, Footer Oficial y Banner OG
- **MANIFIESTO**: Rediseño integral de la sección a banner panorámico full-width con silueta centrada y nítida (`manifiesto-skyline-clean.jpg`), texto en Playfair Display a la izquierda y copy descriptivo con glassmorphism a la derecha.
- **MEDIA & OG**: Generación de tarjeta Open Graph de alta resolución 1200x630 px (`og-image-evento.jpg`) con tipografía nítida para redes y WhatsApp. Reemplazo de imágenes por fotografías limpias en auditorio (`agenda-auditorium.jpg`) y CTA (`cta-audience.jpg`).
- **HERO MOBILE**: Optimización del grid responsivo de firmas para que los nombres de los 3 speakers queden centrados y exactamente debajo de cada rostro en celulares.
- **FOOTER**: Ajuste exclusivo de organizadores en el pie de página a **TecnoGen** (*Marketing + IA*) y **Fede NowBack**.
- **DEPLOY**: Creación de rama `dev`, merge a `main` y despliegue en servidor de producción Ploi (`errante` `72.61.34.92`) vía SSH.

## [2026-09-28] - Actualización de Precios Evento y Auditoría LLM Wiki
- **PRICING**: Actualización del esquema de precios para el evento presencial del 10 de octubre: Preventa exclusiva a **$80.000** (hasta el 3 de octubre, ahorro de $70.000) y Precio de lista a **$150.000** (luego del 3 de octubre).
- **CRO**: Actualización de los mensajes preconfigurados de WhatsApp hacia `+54 9 11 7061-0766`.
- **WIKI**: Sincronización y registro de la sesión pendiente del 27 de Septiembre (migración total a PHP 8.x nativo modular fedenowback) y actualización del nodo `arquitectura_web.md`.
- **PROD**: Despliegue en Ploi Producción (`errante` `72.61.34.92`) verificado en vivo.

## [2026-09-27] - Reestructuración Total y Migración a PHP 8.x Modular (Estándar Fedenowback)
- **REFACTOR**: Eliminación completa de la infraestructura React/Vite/node_modules/Tailwind y migración integral al stack **PHP 8.x nativo modular** basado en el estándar de `fedenowback.com.ar`.
- **ROUTING**: Implementación del Front Controller en `public/index.php` con Clean URLs, manejo de 404, sitemap dinámico (`/sitemap.xml`) y robots.txt.
- **STRUCTURE**: Creación de `includes/config.php` y helper avanzado `includes/seo_helper.php` con Schema.org JSON-LD (`Organization`, `Service`, `BreadcrumbList`, `FAQPage`).
- **VIEWS**: Reconstrucción de todas las páginas a vistas PHP modulares en `views/` (`index.php`, `marketing-digital.php`, `seo-posicionamiento.php`, `inteligencia-artificial.php`, `agentes-ia.php`, `automatizacion.php`, `crm-whatsapp.php`, `contenido-ia.php`, `sobre-nosotros.php`, `contacto.php` y `landing-evento.php`).
- **ASSETS**: Sistema de diseño CSS puro en `public/assets/css/style.css` y JavaScript vanilla en `public/assets/js/main.js`.
- **PROD**: Despliegue en producción Ploi (`errante` `72.61.34.92`) vía commit `201b3d5`.

## [2026-09-26] - Landing Evento "Mentalidad y Marketing — Neuroventas con IA"
- **FEAT**: Creación de la página y landing page oficial para el evento del 10 de octubre: `/Mentalidad-Marketing-Neuroventas-con-IA` (con alias lowercase).
- **MEDIA**: Integración exclusiva de los flyers cargados por el usuario para Fede Nowback, Anthony Altuna y Christian Cencherle.
- **PHONE**: Configuración del canal oficial de WhatsApp y reservas al número `+54 9 11 7061-0766`.
- **UI/UX**: Aislamiento total de la navegación (ocultamiento de Header, Footer y botón flotante corporativo en esta landing) para una experiencia limpia y enfocada.
- **PROD**: Despliegue y validación en el servidor de producción Ploi.

## [2026-09-24] - Inicialización y Creación de la Web Oficial TecnoGen
- **INIT**: Instalación del estándar LLM Wiki (Capa 2) y vinculación con MetaWiki Global (Capa 1).
- **INFRA**: Asignación de puertos Dev (`5193` para Vite Dev y `8019` para Preview). Actualización de `PORT_REGISTRY.md`, `SERVER_CONFIG.md` y scripts `hvtunnels.sh`.
- **DESIGN**: Implementación del sistema de diseño basado en el Manual de Identidad Visual de TecnoGen (Montserrat + Inter, paleta Azul Profundo, Azul Eléctrico, Cian, Gris Claro, Gris Carbón).
- **FEAT**: Maquetación y desarrollo interactivo de la página principal según las especificaciones del briefing y layouts del manual de marca.
