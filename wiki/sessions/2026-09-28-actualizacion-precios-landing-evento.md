---
title: Sesión 2026-09-28 - Actualización de Precios Landing Evento y Auditoría LLM Wiki
date: 2026-09-28
author: Antigravity Agent
status: completado
tags:
  - pricing
  - landing
  - evento
  - wiki
  - produccion
---

# 🚀 Sesión 2026-09-28: Actualización de Precios Landing Evento y Sincronización LLM Wiki

## 📋 Contexto y Objetivos
1. **Auditoría y Reparación de la Wiki:** Sincronizar y registrar la sesión pendiente del 27 de Septiembre (migración total del stack a PHP 8.x nativo modular estándar `fedenowback.com.ar`).
2. **Actualización de Precios del Evento:** Ajustar los valores de preventa y precio regular para el evento presencial del 10 de Octubre en Microcentro ("Mentalidad y Marketing — Neuroventas con IA"):
   - Preventa exclusiva hasta el 3 de Octubre: **$80.000** (Ahorro de $70.000).
   - Precio de lista regular luego del 3 de Octubre: **$150.000**.
   - Actualizar los enlaces directos y mensajes preconfigurados de WhatsApp CRO.
3. **Despliegue y Validación:** Desplegar en producción (Ploi `errante`) y validar la respuesta HTTP 200 en vivo.

---

## 🛠️ Acciones Realizadas

1. **Reparación de la LLM Wiki:**
   - Creación de [`wiki/sessions/2026-09-27-migracion-arquitectura-php-fedenowback.md`](file:///home/mfmujic/tecnogen.ar/wiki/sessions/2026-09-27-migracion-arquitectura-php-fedenowback.md).
   - Actualización completa del nodo [`wiki/nodes/arquitectura_web.md`](file:///home/mfmujic/tecnogen.ar/wiki/nodes/arquitectura_web.md) documentando el stack PHP 8.x nativo modular, Front Controller y eliminación de dependencias de frontend pesadas.
   - Actualización de [`wiki/log.md`](file:///home/mfmujic/tecnogen.ar/wiki/log.md) e [`wiki/index.md`](file:///home/mfmujic/tecnogen.ar/wiki/index.md).

2. **Ajuste de Precios en Landing de Evento:**
   - Modificación de titulares de sección: `"Asegurá tu lugar antes del 3 de octubre."`.
   - Actualización de card de Preventa:
     - Subtítulo: `HASTA EL 3 DE OCTUBRE`.
     - Precio anterior tachado: `$150.000`.
     - Precio actual preventa: `$80.000`.
     - Badge de ahorro: `Ahorrás $70.000`.
     - Enlace WhatsApp preconfigurado: `Hola, quiero aprovechar la preventa de $80.000 para el evento Mentalidad y Marketing del 10 de octubre.`
   - Actualización de card Precio de Lista:
     - Subtítulo: `LUEGO DEL 3 DE OCTUBRE`.
     - Importe: `$150.000`.
   - Sincronización en todos los entrypoints estáticos y dinámicos:
     - `public/Mentalidad-Marketing-Neuroventas-con-IA.html`
     - `public/mentalidad-marketing-neuroventas-con-ia.html`
     - `public/Mentalidad-Marketing-Neuroventas-con-IA/index.html`
     - `public/mentalidad-marketing-neuroventas-con-ia/index.html`

3. **Deploy y Verificación en Producción:**
   - Commit `c2c8828` en GitHub.
   - Despliegue en Ploi Producción (Server: `105871`, Site: `411124`).
   - Verificación con `curl -s -L` confirmando valores en vivo en [https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA](https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA).

---

## 🔗 URLs Verificadas
- **Sitio Oficial:** [https://tecnogen.ar](https://tecnogen.ar)
- **Landing Evento:** [https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA](https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA)
