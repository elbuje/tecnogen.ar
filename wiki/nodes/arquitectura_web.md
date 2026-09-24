---
title: Arquitectura Web y Sistema de Diseño Frontend
description: Estructura técnica de tecnogen.ar, componentes, CSS modular y experiencia interactiva
tags:
  - web
  - react
  - vite
  - css
  - performance
---

# 💻 Arquitectura Web y Sistema de Diseño

## 🧱 Stack Tecnológico

- **Core & Runtime:** React + Vite (Fast HMR, bundle optimizado).
- **Estilos:** Vanilla CSS / Tokens CSS estructurados en `index.css` siguiendo fielmente la guía de estilos de TecnoGen.
- **Iconografía:** Lucide Icons optimizados y escalables.
- **Tipografías:** Google Fonts (`Montserrat` para Headings + `Inter` para cuerpo de texto).
- **SEO & Structured Data:** JSON-LD inyectado para `Organization`, `Service`, `FAQPage`, `BreadcrumbList`.

---

## 🎨 Jerarquía Visual y Componentes

1. **Header Sticky:**
   - Logotipo vectorizado SVG de TecnoGen con isotipo estilizado TG en degradado azul-cian.
   - Navegación interactiva con anclas inteligentes (`#soluciones`, `#por-que-tecnogen`, `#servicios`, `#proceso`, `#casos`, `#contacto`).
   - Botón CTA principal de alto contraste (`Agenda una consultoría`).

2. **Hero Section:**
   - Título de impacto: `Ideas inteligentes para un mayor mañana`.
   - Propuesta de valor clara y concisa.
   - Dual CTA (`Agenda una consultoría →` y `Conocé nuestras soluciones`).
   - Card flotante con estética moderna, imagen corporativa con degradado, badge `TECNOLOGÍA QUE IMPULSA PERSONAS` y métricas.

3. **¿Por qué TecnoGen?:**
   - 4 tarjetas modulares con micro-interacciones hover (Estrategias inteligentes, Procesos automatizados, Crecimiento sostenible, Un equipo que te acompaña).

4. **Selector Interactivo de Dolores / Objetivos:**
   - Tabs interactivas (`Conseguir más clientes`, `Automatizar procesos`, `Implementar IA`, `Mejorar ventas`, `Generar contenido`, `Posicionar mi empresa`) que actualizan dinámicamente el diagnóstico y la solución recomendada.

5. **6 Tarjetas de Soluciones (Deep Cards):**
   - Con badges de acento, lista de capacidades, y modal/drawer interactivo con detalle paso a paso.

6. **Diagrama de Proceso Interactivo:**
   - Etapas numeradas (01 Captura → 02 Inteligencia → 03 Automatiza → 04 Resultados) con desglose en tiempo real.

7. **Casos Reales con Métricas:**
   - Comparativas cuantificables (problema → implementación → resultado numérico).

8. **Formulario Inteligente de Calificación:**
   - Simulación en vivo de IA lead qualification y scoring.

9. **Banner Institucional & Footer:**
   - Fondo Azul Profundo con marca de agua SVG y links directos a WhatsApp, LinkedIn y redes.
