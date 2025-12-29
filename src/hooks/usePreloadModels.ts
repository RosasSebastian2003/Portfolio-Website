import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

// Hook para precargar modelos 3D de manera inteligente
export const usePreloadModels = () => {
  useEffect(() => {
    // Precargar solo modelos críticos (Hero section)
    const criticalModels = [
      '/models/macbook_pro_m3_16_inch_2024.glb',
      '/models/iphone_16_plus.glb',
    ];

    // Precargar modelos secundarios con prioridad baja después de 2 segundos
    const secondaryModels = [
      '/models/apple_vision_pro.glb',
      '/models/desk.glb',
    ];

    // Precargar modelos críticos inmediatamente
    criticalModels.forEach((model) => {
      useGLTF.preload(model);
    });

    // Precargar modelos secundarios después de un delay
    const timeoutId = setTimeout(() => {
      secondaryModels.forEach((model) => {
        useGLTF.preload(model);
      });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);
};
