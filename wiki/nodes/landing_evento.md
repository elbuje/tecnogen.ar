---
title: Landing Page Evento "Mentalidad y Marketing — Neuroventas con IA"
description: Documentación de la landing page del evento presencial del 10 de octubre, pasarela de pagos (Mercado Pago, Transferencia, Efectivo) y optimización Core Web Vitals
tags:
  - evento
  - landing
  - mercadopago
  - pagos
  - cwv
  - performance
---

# 🎟️ Landing Page Evento "Mentalidad y Marketing — Neuroventas con IA"

## 📍 Datos Generales del Evento
- **Fecha:** Viernes 10 de Octubre de 2026
- **Horario:** 10:00 a 17:00 hs (Break de networking y almuerzo de 13:00 a 14:00 hs)
- **Lugar:** Lavalle 362, Piso 7, Microcentro, CABA
- **Speakers:** Anthony Altuna, Fede NowBack y Christian Cencherle
- **Ruta Oficial:** `/Mentalidad-Marketing-Neuroventas-con-IA` (con mirrors `/evento`, `/mentalidad-marketing-neuroventas-con-ia`, y sus variantes de directorio)

---

## 💳 Pasarela y Medios de Pago Integrados

### 1. Mercado Pago (Online Inmediato)
- **Cuenta Cobradora:** `mmujica@tecnobrain.com.ar` (Collector ID: `22567901`)
- **Checkout Preventa ($80.000 ARS):**  
  `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=22567901-db498e19-b6be-4430-823f-b7959eaeacf8`
- **Checkout Precio de Lista ($150.000 ARS):**  
  `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=22567901-7a88cd43-826d-483a-b3f7-9873f6e255ab`

### 2. Transferencia Bancaria Directa
- **Titular:** Anthony Altuna
- **Alias:** `ia.master.argentina` (con botón de copiado interactivo en 1 clic)
- **CBU:** `0150512201000132174449`
- **CUIL/CUIT:** `23953241099`
- **Tipo de Cuenta:** CA $ `0512/01132174/44`
- **Flujo:** Envío de comprobante vía WhatsApp a `+54 9 11 7061-0766` para emisión inmediata de credencial.

### 3. Pago en Efectivo Presencial
- **Oficinas:** Lavalle 362, Piso 7, Microcentro, CABA
- **Horarios:** Lunes a Viernes de 9:00 a 18:00 hs (con coordinación previa por WhatsApp)

---

## ⚡ Optimizaciones de Rendimiento & Core Web Vitals
- **Fuentes Auto-hospedadas (0 llamadas externas):** WOFF2 en `/public/assets/fonts/` (`playfair-display-latin-700.woff2`, `alex-brush-latin.woff2`, `cinzel-latin-700.woff2`).
- **Responsive Media:** Contenedor `<picture>` con WebP mobile ultraligero (`hero-real-speakers-clean-mobile.webp` de 12.9 KB).
- **Layout Shift Estricto (CLS = 0.000):** Medidas y `aspect-ratio` rígidos en todos los elementos visuales.
- **Micro-interacciones:** Función nativa `copyToClipboard` con fallback en JavaScript puro (sin bibliotecas externas).
