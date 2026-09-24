---
title: Infraestructura Dev & Producción
description: Mapeo de servidores, despliegue, túneles SSH y puertos de tecnogen.ar
tags:
  - infra
  - puertos
  - servidores
  - ploi
  - hostinger
---

# 🖥️ Infraestructura Dev & Producción — TecnoGen

## 🗺️ Topología de Servidores

```mermaid
graph LR
    Local["💻 Mac Local<br>(Túneles hvtunnels)"] --> Dev["🚀 Servidor Dev: Hostinger VPS<br>72.62.107.109 / antig.nippur.cloud<br>Puerto Dev: 5193 | Preview: 8019"]
    Dev --> Prod["🌐 Servidor Producción: Ploi errante<br>72.61.34.92<br>Dominio: https://tecnogen.ar"]
```

---

## 📊 Especificación de Puertos

| Puerto | Protocolo | Servicio | Entorno |
|:-------|:----------|:---------|:--------|
| **5193** | HTTP | Vite Web Dev Server (`tecnogen.ar`) | Hostinger VPS (Dev) |
| **8019** | HTTP | Web Preview / Production Build Server | Hostinger VPS (Dev) |
| **5190** | HTTP | MetaWiki Global Visualizador 3D | Hostinger VPS (Dev) |
| **443** | HTTPS | Nginx SSL Production Server | Ploi `errante` (`72.61.34.92`) |

---

## 🌉 Script de Túneles (`hvtunnels.sh`)

Mapea puertos remotos del VPS hacia `localhost` en la máquina local:
```bash
-L 5193:localhost:5193 \
-L 8019:localhost:8019 \
```
Acceso en navegador: `http://localhost:5193`
