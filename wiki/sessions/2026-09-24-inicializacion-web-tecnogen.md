---
title: Sesión 2026-09-24 - Inicialización y Creación de la Web Oficial TecnoGen
date: 2026-09-24
type: session
tags:
  - init
  - wiki
  - web
  - branding
  - infra
---

# 🚀 Sesión: Inicialización del Proyecto y Desarrollo del Sitio Web Oficial TecnoGen

## 🎯 Objetivos de la Sesión
1. Instalar la arquitectura LLM Wiki (3 capas) en `tecnogen.ar` y vincular con MetaWiki Global (`~/.agent/wiki`).
2. Configurar la infraestructura dev/prod (Hostinger VPS `72.62.107.109` en puerto `5193`/`8019`, Ploi `errante` `72.61.34.92`) y actualizar `PORT_REGISTRY.md`, `SERVER_CONFIG.md` y `hvtunnels.sh`.
3. Desarrollar la aplicación web oficial completa basada en el Manual de Identidad Visual y el Contexto Maestro de TecnoGen.

---

## 🛠️ Acciones Realizadas
- **Wiki Setup:** Creación de `.agent/workflows/`, `wiki/index.md`, `wiki/sources.md`, `wiki/log.md`, `wiki/nodes/` y conexión con MetaWiki Global.
- **Infraestructura:** Asignación de puertos `5193` (Frontend Vite) y `8019` (Static Preview), scripts de túnel SSH actualizados.
- **Frontend & Branding:** Implementación completa del sitio web con sistema de diseño modular (Montserrat + Inter, paleta Azul Profundo `#0B1F3B`, Azul Eléctrico `#2563EB`, Cian `#06B6D4`, Gris Claro `#E5EAF0`, Gris Carbón `#1F2937`).
- **Componentes Clave:** Hero según manual visual con imagen y métrica flotante, 4 pilares de propuesta de valor, selector interactivo de objetivos/dolores, 6 soluciones con vistas en profundidad, diagrama interactivo de proceso, casos de éxito con métricas reales, formulario interactivo de calificación con IA lead scoring en vivo, y footer con SEO Schema JSON-LD.

---

## 📁 Archivos Modificados / Creados
- [`wiki/index.md`](file:///home/mfmujic/tecnogen.ar/wiki/index.md)
- [`wiki/sources.md`](file:///home/mfmujic/tecnogen.ar/wiki/sources.md)
- [`wiki/log.md`](file:///home/mfmujic/tecnogen.ar/wiki/log.md)
- [`wiki/nodes/identidad_marca.md`](file:///home/mfmujic/tecnogen.ar/wiki/nodes/identidad_marca.md)
- [`wiki/nodes/arquitectura_web.md`](file:///home/mfmujic/tecnogen.ar/wiki/nodes/arquitectura_web.md)
- [`wiki/nodes/soluciones_servicios.md`](file:///home/mfmujic/tecnogen.ar/wiki/nodes/soluciones_servicios.md)
- [`wiki/nodes/estrategia_seo_geo.md`](file:///home/mfmujic/tecnogen.ar/wiki/nodes/estrategia_seo_geo.md)
- [`wiki/nodes/infraestructura_dev_prod.md`](file:///home/mfmujic/tecnogen.ar/wiki/nodes/infraestructura_dev_prod.md)
- [`status.md`](file:///home/mfmujic/tecnogen.ar/status.md)
- [`hvtunnels.sh`](file:///home/mfmujic/tecnogen.ar/hvtunnels.sh)
- Componentes y estilos de la aplicación web en `src/`.
