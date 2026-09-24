#!/bin/bash
# ==============================================================================
# hvtunnels - Script de Túneles SSH para Mac hacia Hostinger VPS (72.62.107.109)
# Actualizado para TecnoGen Web (tecnogen.ar)
# ==============================================================================

echo "🌉 Abriendo túneles SSH hacia Servidor Central Hostinger (72.62.107.109)..."
echo ""
echo "  🚀 TecnoGen Web (tecnogen.ar):"
echo "     - Web Dev (Vite):           http://localhost:5193"
echo "     - Web Preview (Static):     http://localhost:8019"
echo ""
echo "  🌐 MetaWiki Global & Grafos:"
echo "     - Grafo 2D/3D (Obsidian):   http://localhost:5190"
echo ""

# Matar túneles previos que puedan estar colgados
pkill -f "ssh -f -N.*72.62.107.109" 2>/dev/null

ssh -f -N \
  -L 5193:localhost:5193 \
  -L 8019:localhost:8019 \
  -L 5190:localhost:5190 \
  -L 5177:localhost:5177 \
  -L 5191:localhost:5191 \
  -L 5188:localhost:5188 \
  -L 5189:localhost:5189 \
  -L 5182:localhost:5182 \
  -L 5181:localhost:5181 \
  -L 5180:localhost:5180 \
  -L 5179:localhost:5179 \
  -L 5178:localhost:5178 \
  -L 5176:localhost:5176 \
  -L 5175:localhost:5175 \
  -L 5174:localhost:5174 \
  -L 5173:localhost:5173 \
  -L 5184:localhost:5184 \
  -L 5185:localhost:5185 \
  -L 8000:localhost:8000 \
  -L 8001:localhost:8001 \
  -L 8002:localhost:8002 \
  -L 8003:localhost:8003 \
  -L 8004:localhost:8004 \
  -L 8005:localhost:8005 \
  -L 8007:localhost:8007 \
  -L 8008:localhost:8008 \
  -L 8009:localhost:8009 \
  -L 8010:localhost:8010 \
  -L 8011:localhost:8011 \
  -L 8012:localhost:8012 \
  -L 8013:localhost:8013 \
  -L 8016:localhost:8016 \
  -L 8018:localhost:8018 \
  -L 8181:localhost:8181 \
  -L 3307:localhost:3306 \
  mfmujic@72.62.107.109

if [ $? -eq 0 ]; then
    echo "✅ Túneles activos en segundo plano desde tu Mac."
    echo ""
    echo "👉 TecnoGen Web: http://localhost:5193"
    echo "📝 Para cerrar túneles: pkill -f 'ssh -f -N'"
else
    echo "❌ Error al crear los túneles SSH."
fi
