/**
 * MULTIPATH 3453 — Usando la plantilla genérica
 *
 * Este archivo ahora es solo un wrapper que conecta la configuración
 * del artículo con el motor visual genérico.
 *
 * Para crear un nuevo artículo multicamino, solo necesitas:
 * 1. Crear un archivo de configuración en configs/configXXXX.ts
 * 2. Crear un wrapper como este: createMultipathArticle(configXXXX, { theme: '...' })
 * 3. Integrar en App.tsx
 */

import { createMultipathArticle } from './createMultipathArticle';
import { config3453 } from './configs/config3453';

export default createMultipathArticle(config3453, { theme: 'visualnovel' });
