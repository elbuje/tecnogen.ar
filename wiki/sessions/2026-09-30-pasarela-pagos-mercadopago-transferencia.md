# Sesión: Integración de Medios de Pago (Mercado Pago, Transferencia y Efectivo)
**Fecha:** 30 de Septiembre de 2026  
**Proyecto:** TecnoGen (`tecnogen.ar`)  
**Ecosistema:** Hostinger VPS KVM 4 (`72.62.107.109`) / Ploi Producción `errante` (`72.61.34.92`)

---

## 🎯 Objetivos de la Sesión
1. Integrar enlaces directos de pago con **Mercado Pago** para la cuenta `mmujica@tecnobrain.com.ar` con los importes exactos de cada nivel de entrada.
2. Incorporar sección interactiva y destacada con los datos de **Transferencia Bancaria** a nombre de **Anthony Altuna** con botones de copia en 1 clic.
3. Incorporar los datos y horarios para **Pago en Efectivo** presencial en las oficinas comerciales de Microcentro (Lavalle 362, Piso 7).
4. Actualizar la sección de Preguntas Frecuentes (FAQ) y los botones principales (Hero y Pre-footer CTA) para dirigir el flujo hacia la selección de entradas y métodos de pago.

---

## 🛠️ Implementación Técnica

### 1. Generación de Enlaces de Checkout Mercado Pago
Utilizando las credenciales de Mercado Pago de la cuenta `mmujica@tecnobrain.com.ar` (`Collector ID: 22567901`), se generaron los checkouts directos:
- **Preventa ($80.000 ARS):**  
  `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=22567901-db498e19-b6be-4430-823f-b7959eaeacf8`
- **Precio de Lista ($150.000 ARS):**  
  `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=22567901-7a88cd43-826d-483a-b3f7-9873f6e255ab`

### 2. Panel Hub de Métodos de Pago (`#datos-pago`)
Se diseñó un grid de 3 columnas (responsivo a 1 columna en móviles) con estética premium dorada sobre negro carbón:
- **Columna 1 — Transferencia Bancaria Directa:**
  - Titular: **Anthony Altuna**
  - Alias: `ia.master.argentina` (con botón de copia instantánea y feedback visual `✓ Copiado`)
  - CBU: `0150512201000132174449` (con botón de copia instantánea)
  - CUIL/CUIT: `23953241099` (con botón de copia instantánea)
  - Cuenta: `CA $ 0512/01132174/44`
  - Botón directo de WhatsApp para envío de comprobante y emisión de credencial.
- **Columna 2 — Pago en Efectivo:**
  - Dirección: **Lavalle 362, Piso 7**, Microcentro, CABA.
  - Horario: **Lunes a Viernes de 9:00 hs a 18:00 hs**.
  - Botón de WhatsApp para coordinar visita y recepción en edificio corporativo.
- **Columna 3 — Mercado Pago & Tarjetas:**
  - Botones directos para $80.000 y $150.000 con acreditación automática e instantánea.

### 3. Tarjetas de Precios & Botones de Acción
- **Preventa ($80.000):** Botón dorado principal `PAGAR CON MERCADO PAGO ($80.000) →`, botón secundario `Transferencia bancaria o efectivo` hacia `#datos-pago` y enlace de soporte por WhatsApp.
- **Precio de Lista ($150.000):** Botón principal de checkout para $150.000, botón secundario hacia `#datos-pago` y enlace de soporte.
- **Comunidad Fede NowBack:** Botón `CONSULTAR ACCESO ESPECIAL →` vía WhatsApp.
- **Hero & Pre-Footer CTA:** Enlazados a `#entradas` para guiar a los usuarios al proceso de compra y selección de forma de pago.

### 4. Función de Copiado Ultra Ligera
Función JavaScript pura (`copyToClipboard`) sin librerías externas que utiliza la API `navigator.clipboard` nativa y fallback con `document.execCommand('copy')`, manteniendo el tiempo de carga instantáneo.

---

## 🚀 Despliegue
- Sincronización en todos los archivos de ruta espejo en `/public/`:
  - `public/Mentalidad-Marketing-Neuroventas-con-IA.html`
  - `public/Mentalidad-Marketing-Neuroventas-con-IA/index.html`
  - `public/evento.html`
  - `public/mentalidad-marketing-neuroventas-con-ia.html`
  - `public/mentalidad-marketing-neuroventas-con-ia/index.html`
- Git commit y push en ramas `dev` y `main`, con despliegue automático en Ploi Producción (`72.61.34.92`).
- Verificado en vivo con respuesta HTTP 200 en `https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA/`.
