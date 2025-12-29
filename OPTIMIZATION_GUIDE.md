# 🚀 Guía de Optimización de Modelos 3D

## 📊 Estado Actual
- **Tamaño total de modelos**: 47MB
- **Modelo más pesado**: apple_vision_pro.glb (26MB)
- **Problema**: Carga lenta en producción

## ✅ Soluciones Implementadas

### 1. **Comprimir Modelos GLB con Draco** (60-90% reducción)

#### Opción A: Usar el script automático (Recomendado)
```bash
chmod +x compress-models.sh
./compress-models.sh
```

#### Opción B: Comprimir manualmente
```bash
# Instalar gltf-pipeline
npm install -g gltf-pipeline

# Comprimir un modelo específico
gltf-pipeline -i public/models/apple_vision_pro.glb -o public/models/apple_vision_pro.glb -d

# Comprimir todos los modelos
for file in public/models/*.glb; do
  gltf-pipeline -i "$file" -o "$file" -d
done
```

**Resultado esperado**:
- apple_vision_pro.glb: 26MB → ~3-5MB
- macbook_pro.glb: 9.3MB → ~1-2MB
- Total: 47MB → ~10-15MB

### 2. **Usar DRACOLoader en React Three Fiber**

Actualiza tus componentes para usar Draco compression:

```tsx
// En tu componente principal (Hero.tsx, About.tsx, etc)
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

<Canvas>
  <Suspense fallback={<CanvasLoader />}>
    {/* Tus modelos aquí */}
  </Suspense>
</Canvas>
```

### 3. **Preload Estratégico de Modelos**

Ya creé el hook `usePreloadModels.ts`. Para usarlo:

```tsx
// En src/App.tsx o tu componente raíz
import { usePreloadModels } from './hooks/usePreloadModels';

function App() {
  usePreloadModels(); // Precarga modelos inteligentemente

  return (
    // Tu app
  );
}
```

### 4. **Lazy Loading por Sección**

Solo carga los modelos cuando el usuario scrollea a esa sección:

```tsx
import { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const MacBookPro = lazy(() => import('./components/MacBookPro'));

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo carga una vez
    threshold: 0.1,    // Cuando 10% es visible
  });

  return (
    <div ref={ref}>
      {inView && (
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <MacBookPro />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
```

### 5. **Optimizar Texturas**

```bash
# Comprimir imágenes PNG/JPG
npm install -g imagemin-cli

# Optimizar todas las texturas
imagemin public/textures/**/*.{jpg,png} --out-dir=public/textures/
```

### 6. **Configurar Headers de Cache (Nginx/Coolify)**

En tu configuración de servidor (si tienes acceso):

```nginx
location ~* \.(glb|gltf|fbx|bin)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 7. **Usar CDN para Modelos** (Opcional)

Sube modelos grandes a un CDN:
- Cloudflare R2 (gratis hasta 10GB)
- AWS S3 + CloudFront
- Vercel Blob Storage

```tsx
// En lugar de:
const { scene } = useGLTF('/models/apple_vision_pro.glb')

// Usa:
const { scene } = useGLTF('https://cdn.tudominio.com/models/apple_vision_pro.glb')
```

## 📈 Mejoras Esperadas

| Optimización | Reducción Esperada | Mejora de Carga |
|--------------|-------------------|-----------------|
| Draco Compression | 60-90% | 3-5x más rápido |
| Preload Estratégico | N/A | Carga progresiva |
| Lazy Loading | N/A | Inicial 50% más rápido |
| CDN | N/A | 2-3x más rápido |

## 🎯 Plan de Acción Recomendado

1. **Inmediato** (5 min):
   ```bash
   ./compress-models.sh
   git add public/models/
   git commit -m "Optimize: Compress 3D models with Draco"
   ```

2. **Corto Plazo** (15 min):
   - Implementar `usePreloadModels` hook
   - Agregar lazy loading a secciones no críticas

3. **Mediano Plazo** (opcional):
   - Configurar CDN para modelos
   - Optimizar texturas

## 🔍 Verificar Resultados

```bash
# Ver tamaño antes
du -sh public/models

# Comprimir
./compress-models.sh

# Ver tamaño después
du -sh public/models

# Medir tiempo de carga en producción
# Chrome DevTools → Network → Filter: .glb
```

## 📚 Recursos Adicionales

- [glTF Pipeline](https://github.com/CesiumGS/gltf-pipeline)
- [Draco Compression](https://google.github.io/draco/)
- [React Three Fiber Performance](https://docs.pmnd.rs/react-three-fiber/advanced/performance)
