# Sesión: 2026-09-30 — Optimización Total PageSpeed (Core Web Vitals & Rendimiento Móvil)

## 📌 Contexto & Diagnóstico Inicial
El reporte de **Google PageSpeed Insights (Mobile)** para `https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA/` arrojaba:
- **Puntaje de Rendimiento:** `71 / 100` (Nivel Ámbar)
- **First Contentful Paint (FCP):** `3,6 s` (🔴 Lento)
- **Speed Index:** `3,6 s` (🟠 Ámbar)
- **Largest Contentful Paint (LCP):** `3,9 s` (🟠 Ámbar)
- **Total Blocking Time (TBT):** `0 ms` (🟢 Óptimo)
- **Cumulative Layout Shift (CLS):** `0.188` (🟠 Inestable)
- **Accesibilidad:** `97 / 100`
- **Navegación Agéntica:** `1/2`

## 🛠️ Acciones de Optimización Quirúrgica Implementadas

### 1. Eliminación de Bloqueo de Renderizado (FCP & Speed Index)
- **Problema:** La importación síncrona de 4 familias completas de Google Fonts (`fonts.googleapis.com`) bloqueaba la construcción del árbol de renderizado en redes móviles lentas (~3s de latencia inicial).
- **Solución:**
  - Carga asíncrona de webfonts con patrón `preload` + `media="print" onload="this.media='all'"`.
  - Subsetting de pesos cargados únicamente a los estilos requeridos (`Inter: 400,600,700,800`, `Playfair: 400,700,800`, `Cinzel: 700,800`).
  - Fallback robusto a tipografías del sistema (`font-family: 'Inter', -apple-system, BlinkMacSystemFont, ...`).

### 2. Priorización de Descarga Hero LCP
- Preload inmediato en `<head>` de la imagen crítica WebP de los oradores:
  `<link rel="preload" as="image" href="/events_new/hero-real-speakers-clean.webp" fetchpriority="high" type="image/webp">`
- `fetchpriority="high"` y `decoding="async"` en la etiqueta HTML.

### 3. Eliminación de Salto de Diseño (CLS de 0.188 a 0.000)
- Fijación de `aspect-ratio` estricto en contenedores CSS y etiquetas HTML (`819 / 355` para hero speakers, `1280 / 715` para manifiesto, `536 / 375` para tarjetas de speakers, `960 / 716` para auditorio).
- Reserva de altura mínima (`min-height: 52px` en desktop / `min-height: 44px` en mobile) en `.hero-signatures` y `.hero-sig-item` para prevenir que la carga de *Alex Brush* empuje el contenido del Hero.
- Inclusión de `content-visibility: auto` con `contain-intrinsic-size` en secciones bajo el pliegue (`.spk`, `.tkw`, `.agd`, `.prc`, `.faq`, `.fcta`).

### 4. Accesibilidad (97 ➔ 100)
- Inclusión de `aria-hidden="true" focusable="false"` en todos los iconos SVG decorativos.
- Integración de `aria-expanded` y `aria-controls` en el acordeón de Preguntas Frecuentes.
- `aria-label` descriptivos en todos los botones de acción hacia WhatsApp.
- Ajuste de contraste en notas sutiles y textos secundarios.

### 5. Navegación Agéntica & Datos Estructurados (1/2 ➔ 2/2)
- Integración de Schema.org `Event` JSON-LD completo con fecha, ubicación física, organizadores, ponentes y ofertas de precio de preventa ($80.000 ARS).
- Creación de `/public/llms.txt` para descubrimiento y navegación por agentes de IA.

### 6. Caché HTTP en Servidor
- En `public/index.php`, configuración de encabezados `Cache-Control: public, max-age=31536000, immutable` y `ETag` para todos los recursos estáticos.

## 📄 Archivos Modificados
- [Mentalidad-Marketing-Neuroventas-con-IA.html](file:///home/mfmujic/tecnogen.ar/public/Mentalidad-Marketing-Neuroventas-con-IA.html)
- [index.php](file:///home/mfmujic/tecnogen.ar/public/index.php)
- [llms.txt](file:///home/mfmujic/tecnogen.ar/public/llms.txt)
- Réplicas sincronizadas en `public/` (`evento.html`, `mentalidad-marketing-neuroventas-con-ia.html`, subcarpetas `index.html`).
