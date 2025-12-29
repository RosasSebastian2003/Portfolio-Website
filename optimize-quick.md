# ⚡ Optimización Rápida de Modelos 3D

## 🎯 Solución Más Rápida (5 minutos)

### Paso 1: Comprimir modelos con Draco

```bash
# Instalar herramienta
npm install -g gltf-pipeline

# Comprimir el modelo más pesado (Apple Vision Pro - 26MB)
gltf-pipeline -i public/models/apple_vision_pro.glb -o public/models/apple_vision_pro_compressed.glb -d

# Reemplazar el original
mv public/models/apple_vision_pro_compressed.glb public/models/apple_vision_pro.glb

# Comprimir MacBook Pro (9.3MB)
gltf-pipeline -i public/models/macbook_pro_m3_16_inch_2024.glb -o public/models/macbook_pro_m3_16_inch_2024_compressed.glb -d
mv public/models/macbook_pro_m3_16_inch_2024_compressed.glb public/models/macbook_pro_m3_16_inch_2024.glb

# Comprimir iPhone 16 (4.4MB)
gltf-pipeline -i public/models/iphone_16_plus.glb -o public/models/iphone_16_plus_compressed.glb -d
mv public/models/iphone_16_plus_compressed.glb public/models/iphone_16_plus.glb
```

**Resultado**: 47MB → ~10-12MB (75% reducción)

### Paso 2: Commit y deploy

```bash
git add public/models/
git commit -m "perf: Compress 3D models with Draco (75% size reduction)"
git push
```

## 🚀 Resultado Esperado

- **Antes**: 47MB de modelos, carga lenta
- **Después**: ~12MB de modelos, 3-4x más rápido

## ⚠️ Nota Importante

Después de comprimir, asegúrate de que tus modelos se vean correctamente.
Si algo se ve mal, los archivos originales están en `public/models/backup/`.

## 🔧 Alternativa: Usar herramienta online

Si no quieres usar la terminal:

1. Ve a https://gltf.report/
2. Sube `apple_vision_pro.glb`
3. Click en "Export" → Habilita "Draco compression"
4. Descarga y reemplaza el archivo

## 📊 Verificar

```bash
# Ver tamaño reducido
ls -lh public/models/*.glb
```
