#!/bin/bash

# Script para comprimir modelos 3D usando gltf-pipeline
# Esto puede reducir el tamaño de los archivos en un 60-90%

echo "🔧 Installing gltf-pipeline..."
npm install -g gltf-pipeline

echo ""
echo "📦 Compressing 3D models..."

# Crear directorio de backup
mkdir -p public/models/backup

# Función para comprimir un archivo GLB
compress_glb() {
    local input=$1
    local filename=$(basename "$input")
    local backup="public/models/backup/$filename"

    echo "  Compressing: $filename"

    # Backup original
    cp "$input" "$backup"

    # Comprimir con Draco
    gltf-pipeline -i "$input" -o "$input" -d

    # Mostrar reducción de tamaño
    local original_size=$(du -h "$backup" | cut -f1)
    local compressed_size=$(du -h "$input" | cut -f1)
    echo "    Original: $original_size → Compressed: $compressed_size"
}

# Comprimir todos los archivos .glb
for file in public/models/*.glb; do
    if [ -f "$file" ]; then
        compress_glb "$file"
    fi
done

echo ""
echo "✅ Compression complete!"
echo "📊 Original files backed up to: public/models/backup/"
echo ""
echo "Before:"
du -sh public/models/backup 2>/dev/null || echo "N/A"
echo "After:"
du -sh public/models
