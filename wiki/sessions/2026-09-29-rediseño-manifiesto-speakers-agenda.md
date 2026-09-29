---
title: Rediseño Manifiesto, Hero Mobile, Footer Oficial, Banner OG y Despliegue Producción
date: 2026-09-29
author: Antigravity
tags:
  - landing-evento
  - manifiesto
  - hero-mobile
  - opengraph
  - footer-organizan
  - ploi
  - dev-prod
---

# 📅 Sesión 2026-09-29: Rediseño Manifiesto, Hero Mobile, Footer Oficial y Sincronización Dev/Prod

## 🎯 Objetivos de la Sesión
1. Rediseñar la sección de Manifiesto ("NO NECESITÁS MÁS INFORMACIÓN") a un formato de banner panorámico continuo (*full-width*) con la figura central despejada y visible.
2. Reemplazar las imágenes con texto incrustado por fotografías nítidas de alta definición para el auditorio y bloque CTA.
3. Corregir globalmente el nombre a **Fede NowBack**.
4. Ajustar la alineación responsiva de las firmas de los 3 speakers en dispositivos móviles para que queden directas y centradas bajo cada rostro.
5. Modificar el pie de página ("ORGANIZAN") dejando exclusivamente a **TecnoGen** (*Marketing + IA*) y **Fede NowBack**.
6. Crear nueva tarjeta Open Graph 1200x630 px con alta legibilidad y forzar refresco de caché en WhatsApp/redes (`og-mentalidad-marketing-ia-10oct.jpg`).
7. Sincronizar todas las variantes estáticas y desplegar a producción en el servidor Ploi `errante`.

## 🛠️ Acciones Realizadas
- **Manifiesto:**
  - Banner panorámico full-width (`/events_new/manifiesto-skyline-clean.jpg`) con silueta central abierta y glassmorphism en los laterales.
- **Media & Agenda:**
  - Nuevas fotografías limpias (`/events_new/agenda-auditorium.jpg` y `/events_new/cta-audience.jpg`).
- **Hero Signatures en Móvil:**
  - Ajuste en `@media (max-width: 991px)` con grid `repeat(3, 1fr)` y `clamp()` para asegurar alineación exacta bajo cada speaker sin saltos ni desbordes.
- **Footer Oficial ("ORGANIZAN"):**
  - Remoción de marcas no participantes (*GEN*, *Cencherle*, *TecnoBrain*) y configuración exclusiva de **TecnoGen** y **Fede NowBack**.
- **Open Graph (WhatsApp / Redes):**
  - Generación de `og-mentalidad-marketing-ia-10oct.jpg` (1200x630 px) con título dorado destacado, fecha (*10 de Octubre*), auditorio y speakers a la derecha.
- **Sincronización & Producción Ploi:**
  - Sincronización de todas las variantes (`Mentalidad-Marketing-Neuroventas-con-IA.html`, `Mentalidad-Marketing-Neuroventas-con-IA/index.html`, `mentalidad-marketing-neuroventas-con-ia.html`, `evento.html`).
  - Merge a `main` y deploy automático en Ploi Producción (`errante` `72.61.34.92`), validado con `HTTP/2 200 OK`.

## 🔗 Archivos Afectados
- [`public/Mentalidad-Marketing-Neuroventas-con-IA.html`](file:///home/mfmujic/tecnogen.ar/public/Mentalidad-Marketing-Neuroventas-con-IA.html)
- [`public/Mentalidad-Marketing-Neuroventas-con-IA/index.html`](file:///home/mfmujic/tecnogen.ar/public/Mentalidad-Marketing-Neuroventas-con-IA/index.html)
- [`public/mentalidad-marketing-neuroventas-con-ia.html`](file:///home/mfmujic/tecnogen.ar/public/mentalidad-marketing-neuroventas-con-ia.html)
- [`public/mentalidad-marketing-neuroventas-con-ia/index.html`](file:///home/mfmujic/tecnogen.ar/public/mentalidad-marketing-neuroventas-con-ia/index.html)
- [`public/evento.html`](file:///home/mfmujic/tecnogen.ar/public/evento.html)
- `public/events_new/og-mentalidad-marketing-ia-10oct.jpg`
- `public/events_new/manifiesto-skyline-clean.jpg`
- `public/events_new/agenda-auditorium.jpg`
- `public/events_new/cta-audience.jpg`
