---
title: Sesión 2026-09-26 - Landing Evento Mentalidad y Marketing Neuroventas con IA
date: 2026-09-26
author: Antigravity Agent
status: completado
tags:
  - landing
  - eventos
  - marketing
  - produccion
---

# 🚀 Sesión 2026-09-26: Landing Page "Mentalidad y Marketing — Neuroventas con IA"

## 📋 Contexto y Objetivos
- Desarrollar la landing page oficial del evento presencial **"Mentalidad y Marketing — Neuroventas con IA"** para el 10 de octubre de 2026 (10:00 a 17:00 hs) en Lavalle 362, Piso 7, Microcentro, CABA.
- Integrar la landing en la ruta accesible: `https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA`.
- Garantizar que las imágenes provengan estrictamente de los flyers oficiales provistos por el usuario (sin fotos externas ni generadas por IA).
- Configurar el teléfono de reservas oficial: `+54 9 11 7061-0766`.
- Aislar completamente la landing quitando el header/navbar de TecnoGen, el footer corporativo y el botón flotante institucional para brindar una experiencia 100% dedicada al evento.

---

## 🛠️ Acciones Realizadas

1. **Gestión de Assets de Flyers (`public/events/`):**
   - Extracción y guardado de los flyers originales cargados por el usuario:
     - `speaker-anthony.jpg`: Flyer individual de Anthony Altuna.
     - `speaker-christian.jpg`: Flyer individual de Christian Cencherle.
     - `flyer-principal.jpg`: Flyer principal grupal utilizado para la card de Fede Nowback.
     - `flyer-agenda.jpg`: Flyer con la agenda y cronograma.
     - `flyer-cierre.jpg`: Flyer de cierre / "Te esperamos el 10 de octubre".
     - `flyer-hero.jpg`: Fondo con difuminado para la sección hero.

2. **Desarrollo del Componente `MentalidadMarketingPage.tsx`:**
   - Creación de interfaz con diseño dark/gold premium acorde a la estética del evento.
   - Cuenta regresiva dinámica en tiempo real hasta el 10 de octubre.
   - Cards de speakers con pilares temáticos:
     - **Fede Nowback:** Marca personal que vende, mentalidad y autoconfianza, cómo vender desde redes sociales.
     - **Anthony Altuna:** IA aplicada a redes y ventas, casos reales y métricas, neuroventas para convertir más.
     - **Christian Cencherle:** Más de 25 años de experiencia, aprendizajes de negocio reales, mentalidad para crecer y sostenerse.
   - Sección de temario y módulos con cronograma matutino y vespertino (break 13 a 14 hs).
   - Galería de flyers oficiales del evento.
   - CTAs directos a WhatsApp con mensaje preconfigurado al número `+54 9 11 7061-0766`.

3. **Aislamiento de Navegación en `src/App.tsx`:**
   - Lógica condicional (`useLocation`) para excluir `<Header />`, `<Footer />` y el botón flotante de WhatsApp corporativo cuando se visita la landing de Mentalidad y Marketing.

4. **Compilación y Despliegue en Producción:**
   - Compilación exitosa con Vite y generación de páginas estáticas SEO (`npm run build`).
   - Push al repositorio GitHub (`github.com/elbuje/tecnogen.ar`).
   - Despliegue automático en Ploi (Server ID: `105871`, Site ID: `411124`).

---

## 🔗 URLs Verificadas
- **Landing en Producción:** [https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA](https://tecnogen.ar/Mentalidad-Marketing-Neuroventas-con-IA)
