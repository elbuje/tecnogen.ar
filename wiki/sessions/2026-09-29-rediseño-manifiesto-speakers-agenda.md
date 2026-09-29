---
title: Rediseño Manifiesto, Imágenes Limpias de Agenda/CTA y Corrección Fede NowBack
date: 2026-09-29
author: Antigravity
tags:
  - landing-evento
  - manifiesto
  - agenda
  - ploi
  - dev-prod
---

# 📅 Sesión 2026-09-29: Rediseño Manifiesto, Imágenes Limpias y Sincronización Dev/Prod

## 🎯 Objetivos de la Sesión
1. Rediseñar la sección de Manifiesto ("NO NECESITÁS MÁS INFORMACIÓN") a un formato de banner panorámico continuo (*full-width*) con la figura central despejada y visible.
2. Reemplazar las imágenes que contenían texto/mockups incrustados (bloques de Agenda y CTA final) por fotografías nítidas y limpias de alta definición.
3. Corregir globalmente el nombre del disertante a **Fede NowBack** (eliminando cualquier referencia a "Novak").
4. Estandarizar el flujo de trabajo en la rama `dev`, con merge a `main` y despliegue automático vía SSH a producción Ploi (`errante`).

## 🛠️ Acciones Realizadas
- **Manifiesto:**
  - Generada imagen panorámica cinematográfica (`/events_new/manifiesto-skyline-clean.jpg`) con el hombre en el centro mirando el atardecer entre rascacielos.
  - Implementado layout con `flex: space-between` en `.mani-content`, dejando el tercio central abierto y visible.
  - Título a la izquierda en Playfair Display con degradado dorado; texto a la derecha con fondo glassmorphism sutil y bordes en oro.
- **Agenda & CTA:**
  - Generada fotografía auténtica y limpia de auditorio/conferencia para la sección de cronograma (`/events_new/agenda-auditorium.jpg`).
  - Generada fotografía de networking y cóctel empresarial para el bloque de llamada a la acción (`/events_new/cta-audience.jpg`).
- **Corrección de Identidad:**
  - Actualizado a **Fede NowBack** en metadatos, alt text, firmas, tarjeta de speaker, agenda, card de precios y footer.
- **Infraestructura & Despliegue:**
  - Rama `dev` creada y sincronizada con GitHub.
  - Servidor Dev PHP corriendo en el puerto `8019`.
  - Despliegue en el servidor Ploi `errante` (`72.61.34.92`) mediante SSH (`Host ploi-server` con clave `id_rsa_ploi_antigravity`).

## 🔗 Archivos Afectados
- [`public/Mentalidad-Marketing-Neuroventas-con-IA.html`](file:///home/mfmujic/tecnogen.ar/public/Mentalidad-Marketing-Neuroventas-con-IA.html)
- [`public/mentalidad-marketing-neuroventas-con-ia.html`](file:///home/mfmujic/tecnogen.ar/public/mentalidad-marketing-neuroventas-con-ia.html)
- [`public/evento.html`](file:///home/mfmujic/tecnogen.ar/public/evento.html)
- `public/events_new/manifiesto-skyline-clean.jpg`
- `public/events_new/agenda-auditorium.jpg`
- `public/events_new/cta-audience.jpg`
