# 📁 CARPETA DE VIDEOS - RPP INTERACTIVO

## Videos disponibles

Esta carpeta contiene los videos de la sección Transmedia.

### Archivos actuales:
1. `CIBERACOSO.mp4` - Video sobre ciberacoso universitario
2. `ÉTICA IA (1).mp4` - Video sobre ética e inteligencia artificial
3. `IA_en_Salud__El_Desafío_Ético.mp4` - Video sobre IA en salud

## Para agregar nuevos videos:

1. **Coloca el archivo MP4 en esta carpeta**
2. **Actualiza el `App.tsx`** en la sección `Transmedia`:

```tsx
const projects = [
  // ... proyectos existentes
  { 
    title: "Nuevo Video", 
    type: "Video", 
    desc: "Descripción del video", 
    icon: Video,
    contentType: "video",
    videoSrc: "/archivos/videos/NUEVO_VIDEO.mp4",
    thumbnail: "/archivos/videos/thumbnail-nuevo.jpg"
  }
];
```

## Thumbnails (opcional pero recomendado)

Para mejorar la apariencia antes de reproducir, crea thumbnails:

1. Usa una herramienta como **Canva** o **Photoshop**
2. Tamaño recomendado: **1280x720 px**
3. Formato: **JPG** (80% calidad)
4. Nombra como: `thumbnail-nombre-video.jpg`

## Formatos soportados

- ✅ MP4 (H.264 codec) - **Recomendado**
- ✅ WebM (VP9 codec)
- ⚠️ MOV (puede no funcionar en todos los navegadores)

## Optimización

Si los videos son muy pesados (>50MB):

1. **Usa HandBrake** (gratis): https://handbrake.fr/
2. Configura:
   - Resolution: 720p o 1080p
   - Bitrate: 2000-5000 kbps
   - Audio: AAC 128kbps

## Problemas comunes

### "Video no se reproduce"
- Verifica que el nombre del archivo coincida exactamente (incluyendo mayúsculas)
- Asegúrate de que el video esté en formato MP4
- Prueba en otro navegador (Chrome, Firefox, Edge)

### "Video se ve pixelado"
- El video original puede tener baja resolución
- Considera subir la calidad o usar otro video

### "Video tarda mucho en cargar"
- El archivo es muy pesado, comprímelo con HandBrake
- En producción, considera usar YouTube o Vimeo

---

**Nota:** Para producción (Vercel, Netlify), se recomienda usar YouTube o Vimeo en lugar de videos locales para ahorrar ancho de banda.
