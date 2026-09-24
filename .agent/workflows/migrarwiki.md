---
name: /migrarwiki
description: Migra la documentación de cualquier proyecto existente al nuevo estándar LLM Wiki sin perder historial ni datos.
---

# Workflow: Migración a LLM Wiki (Sin pérdida de datos)

Este workflow transforma la estructura documental de un proyecto legacy al estándar **LLM Wiki / Cerebro Viviente** manteniendo el 100% de la historia, bitácora y planes existentes.

## Pasos de Ejecución Automática

### 1. Detección e Inspección de Documentos Existentes
El agente revisa la carpeta raíz del proyecto y la carpeta `docs/`:
- `masterplan.md`
- `status.md`
- `docs/bitacora.md`
- `docs/planes/*.md` o `docs/*.md`

### 2. Creación del Directorio `wiki/`
```bash
mkdir -p wiki/nodes wiki/sessions
```

### 3. Migración de Planes a Nodos (`wiki/nodes/`)
Para cada archivo en `docs/planes/` o propuestas anteriores:
- Se crea una nota conceptual en `wiki/nodes/nombre_plan.md` agregando el frontmatter YAML (`area`, `tags`, `updated`).
- Se mantiene intonso todo el texto, diagramas y tablas originales.

### 4. Migración de Bitácora a Sesiones (`wiki/sessions/`)
- Se extrae cada fecha/sesión registrada en `docs/bitacora.md`.
- Se crea un archivo por sesión en `wiki/sessions/YYYY-MM-DD-tema.md`.

### 5. Generación del Catálogo (`wiki/index.md`), Sources y Log
- Se crea `wiki/index.md` listando todos los nodos convertidos con formato `[[wikilink]]`.
- Se crea `wiki/sources.md` vinculando las fuentes locales y el enlace a la **MetaWiki Global** (`file:///home/mfmujic/.agent/wiki/index.md`).
- Se registra el evento de migración en `wiki/log.md`.

### 6. Actualización de Masterplan y Workflows
- `masterplan.md` se actualiza para ser la puerta de entrada apuntando a `wiki/index.md`.
- Se actualizan los workflows locales `.agent/workflows/abrirsesion.md` y `cerrarsesion.md` al nuevo estándar.

### 7. Confirmación
Informar al usuario de los nodos migrados y la sincronización limpia con la MetaWiki Global.
