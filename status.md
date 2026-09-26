# 📌 Estado del Proyecto: TecnoGen Web (`tecnogen.ar`)

**Última Actualización:** 2026-09-26  
**Ambiente de Desarrollo:** `http://localhost:5193` (Túnel SSH Hostinger VPS `72.62.107.109`)  
**Ambiente de Producción:** `https://tecnogen.ar` (Ploi `errante` `72.61.34.92` / Site ID: `411124`)  
**Estado General:** 🚀 Código Base, Rutas SEO y Landing del Evento "Mentalidad y Marketing" 100% Listas

---

## 🎯 Tareas Completadas
- [x] **LLM Wiki Standard:** 3 capas de conocimiento instaladas y sincronizadas con MetaWiki Global.
- [x] **Infraestructura & Puertos:** Puerto `5193` (Vite Dev) y scripts `hvtunnels.sh` actualizados.
- [x] **Sistema de Diseño:** Montserrat + Inter, paleta oficial TecnoGen y landing nocturna con acentos dorados / fuego para eventos.
- [x] **Landing Page Evento Presencial:**
  - Ruta: `/Mentalidad-Marketing-Neuroventas-con-IA` (y aliases `/mentalidad-marketing-neuroventas-con-ia`)
  - Standalone HTML generado en `public/Mentalidad-Marketing-Neuroventas-con-IA.html` (listo para `fedenowback.com.ar` y `tecnogen.ar`).
  - Flyer oficial integrado, countdown en vivo, perfiles de los 3 speakers (Anthony Altuna, Fede Nowback, Christian Cencherle), cronograma detallado (10:00 a 17:00 hs), ubicación (Lavalle 362, Piso 7, CABA) y formulario con checkout/reserva por WhatsApp oficial.
- [x] **Rutas y Landings SEO Dedicadas:**
  - `/` (Home)
  - `/agencia-marketing-digital`
  - `/agencia-seo-posicionamiento`
  - `/inteligencia-artificial-empresas`
  - `/agentes-inteligencia-artificial`
  - `/automatizacion-de-procesos`
  - `/crm-whatsapp-ventas`
  - `/contenido-inteligencia-artificial`
  - `/sobre-nosotros`
  - `/contacto`
  - `/Mentalidad-Marketing-Neuroventas-con-IA` (Evento 10 de Octubre)
- [x] **Configuración en Producción (Ploi):**
  - Sitio `tecnogen.ar` creado en servidor `errante` (`72.61.34.92` - ID `105871`).
  - Certificado SSL Let's Encrypt solicitado y activo con HTTPS.
  - Script de despliegue configurado para Git.
- [x] **Repositorio GitHub Oficial:** [github.com/elbuje/tecnogen.ar](https://github.com/elbuje/tecnogen.ar) creado, sincronizado y vinculado como origen de CI/CD.
- [x] **Despliegue en Producción Vía Git:** Script en Ploi ejecuta `git pull`, `npm install` y `npm run build` en cada push.
- [x] **Verificación HTTP:** `https://tecnogen.ar/` y landings SEO activas respondiendo `200 OK`.

---

## 🌐 URLs de Referencia
- **Producción:** [https://tecnogen.ar](https://tecnogen.ar)
- **Repositorio Git:** [https://github.com/elbuje/tecnogen.ar](https://github.com/elbuje/tecnogen.ar)
- **Local Dev:** `http://localhost:5193` (vía `hvtunnels.sh`)
