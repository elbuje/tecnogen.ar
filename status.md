# Status del Proyecto — TecnoGen (tecnogen.ar)

**Última actualización:** 30 de Septiembre de 2026  
**Ecosistema:** Hostinger VPS KVM 4 (`72.62.107.109`) / Ploi Producción `errante` (`72.61.34.92`)  
**Dominio Oficial:** [https://tecnogen.ar](https://tecnogen.ar)

---

## 🎯 Arquitectura Tecnológica & Estado
- **Stack:** **PHP 8.x nativo modular** (siguiendo el estándar de arquitectura y rendimiento de `fedenowback.com.ar`).
- **Frontend & Estilos:** CSS Vanilla modular (`public/assets/css/style.css`) + JavaScript Vanilla (`public/assets/js/main.js`) sin dependencias pesadas ni node_modules.
- **Ruteo & Cache:** Front Controller (`public/index.php`) con URLs amigables, sitemap dinámico (`/sitemap.xml`), robots.txt, `Cache-Control` inmutable (1 año para assets) y `ETag`.
- **Landing del Evento 10 de Octubre:** `/Mentalidad-Marketing-Neuroventas-con-IA` (Optimizada a nivel Core Web Vitals con WOFF2 auto-hospedados, WebP responsive, Schema.org `Event` JSON-LD y `/public/llms.txt`).
- **Pasarela & Medios de Pago:** Integración de checkout directo de Mercado Pago ($80.000 y $150.000 para `mmujica@tecnobrain.com.ar`), panel interactivo de Transferencia Bancaria para Anthony Altuna (Alias `ia.master.argentina`, CBU, CUIL) y pago presencial en efectivo en oficinas de Lavalle 362 Piso 7 (Microcentro).

---

## 📁 Estructura del Repositorio
- `includes/`: `config.php`, `seo_helper.php` (Schema.org JSON-LD, OpenGraph, WhatsApp CRO).
- `views/`: Vistas modulares de todas las páginas de servicios e institucional.
  - `layout/`: `header.php`, `footer.php`.
- `public/`: Webroot Nginx conteniendo `index.php`, `assets/` (CSS/JS) y `events_new/` (imágenes).
- `wiki/`: LLM Wiki viva y sincronizada con MetaWiki Global (`~/.agent/wiki`).

---

## 🌐 Rutas Principales
- `/`: Home & Soluciones Integrales
- `/agencia-marketing-digital`: Marketing Digital & Funnels
- `/agencia-seo-posicionamiento`: SEO & Optimización en IA (GEO)
- `/inteligencia-artificial-empresas`: IA para Empresas & RAG
- `/agentes-inteligencia-artificial`: Agentes Autónomos 24/7
- `/automatizacion-de-procesos`: Automatización de Flujos
- `/crm-whatsapp-ventas`: CRM Kommo & WhatsApp API Oficial
- `/contenido-inteligencia-artificial`: Content OS con IA
- `/sobre-nosotros`: Identidad & Unión TecnoBrain + GEN de Negocio
- `/contacto`: Agendamiento de Consultoría
- `/Mentalidad-Marketing-Neuroventas-con-IA`: Landing Evento Presencial 10 de Octubre
