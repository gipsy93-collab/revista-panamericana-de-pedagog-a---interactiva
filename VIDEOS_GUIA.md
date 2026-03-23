# 📹 GUÍA PARA AGREGAR VIDEOS A RPP INTERACTIVO

## Ubicación de los videos

Los videos deben ir en la carpeta:
```
/public/archivos/videos/
```

## Videos actuales disponibles

Según el relevamiento, tienes estos videos:
1. `CIBERACOSO.mp4`
2. `ÉTICA IA (1).mp4`
3. `IA_en_Salud__El_Desafío_Ético.mp4`

## Pasos para indexar los videos

### Opción 1: Videos locales (recomendado para desarrollo)

1. **Verifica que los videos estén en la carpeta correcta:**
   ```
   /public/archivos/videos/CIBERACOSO.mp4
   /public/archivos/videos/ÉTICA_IA_(1).mp4
   /public/archivos/videos/IA_en_Salud__El_Desafío_Ético.mp4
   ```

2. **Actualiza el archivo `App.tsx` en la sección `Transmedia`:**

   Busca la constante `projects` y agrega los videos como nuevos proyectos:

   ```tsx
   const projects = [
     { 
       title: "Podcast: Voces Pedagógicas", 
       type: "Audio", 
       desc: "Entrevistas con los autores de la edición 42.", 
       icon: Mic,
       content: "podcast"
     },
     { 
       title: "Ética e IA en Salud", 
       type: "Video", 
       desc: "El desafío ético de la inteligencia artificial en ciencias de la salud.", 
       icon: Video,
       content: "video",
       videoSrc: "/archivos/videos/IA_en_Salud__El_Desafío_Ético.mp4"
     },
     { 
       title: "Ciberacoso Universitario", 
       type: "Video", 
       desc: "Comportamientos agresivos y prevención entre estudiantes.", 
       icon: Video,
       content: "video",
       videoSrc: "/archivos/videos/CIBERACOSO.mp4"
     },
     { 
       title: "Infografías", 
       type: "Interactivo", 
       desc: "Exploración visual de las teorías pedagógicas.", 
       icon: Newspaper,
       content: "infografia"
     }
   ];
   ```

3. **Actualiza el renderizado para mostrar videos:**

   En la sección del panel derecho, agrega un caso para videos:

   ```tsx
   {activeProject === 1 || activeProject === 2 ? (
     <video
       controls
       className="w-full h-full object-cover"
       poster="/archivos/videos/poster.jpg"
     >
       <source src={projects[activeProject].videoSrc} type="video/mp4" />
       Tu navegador no soporta reproducción de video.
     </video>
   ) : (
     // ... contenido actual para podcast e infografías
   )}
   ```

### Opción 2: Subir videos a YouTube/Vimeo (recomendado para producción)

1. **Sube tus videos a YouTube o Vimeo**

2. **Obtén el ID de embed de cada video**

3. **Actualiza el `App.tsx`:**

   ```tsx
   const projects = [
     // ... otros proyectos
     { 
       title: "Ética e IA en Salud", 
       type: "Video", 
       desc: "Descripción...", 
       icon: Video,
       content: "video",
       videoId: "DQw4w9WgXcQ", // ID de YouTube
       platform: "youtube" // o "vimeo"
     }
   ];
   ```

4. **Renderiza el iframe:**

   ```tsx
   {projects[activeProject].platform === "youtube" && (
     <iframe
       className="w-full h-full"
       src={`https://www.youtube.com/embed/${projects[activeProject].videoId}?autoplay=0&controls=1`}
       title={projects[activeProject].title}
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowFullScreen
     />
   )}
   ```

## Recomendaciones

### Para desarrollo local (tu caso actual):
- ✅ Usa videos locales en `/public/archivos/videos/`
- ✅ Formatos recomendados: MP4 con codec H.264
- ✅ Tamaño máximo sugerido: 100MB por video
- ✅ Resoluciones: 720p o 1080p

### Para producción (Vercel/Netlify):
- ⚠️ Los videos locales consumen mucho ancho de banda
- ✅ Mejor usa YouTube, Vimeo o Cloudinary
- ✅ Vercel tiene límite de 100MB por archivo
- ✅ Considera usar un CDN de videos

## Optimización de videos

1. **Comprime los videos antes de subir:**
   - Usa HandBrake (gratis)
   - Reduce a 720p si es necesario
   - Bitrate: 2000-5000 kbps para 1080p

2. **Agrega posters/thumbnails:**
   ```tsx
   <video poster="/archivos/videos/thumbnail-etica-ia.jpg" />
   ```

3. **Lazy loading:**
   Los videos solo se cargan cuando el usuario hace clic en la pestaña

## ¿Se puede configurar SEO y Analytics en local?

**Respuesta corta: SÍ, pero con limitaciones**

### SEO en local:
- ✅ Puedes agregar meta tags en `index.html`
- ✅ Puedes usar React Helmet en los componentes
- ❌ Los motores de búsqueda NO indexan localhost
- ✅ El SEO solo funcionará cuando despliegues

### Analytics en local:
- ✅ Puedes instalar Google Analytics
- ✅ Las vistas se registrarán (filtra tu propia IP)
- ✅ Útil para probar eventos y conversiones
- ❌ Los datos serán limitados (solo tú accediendo)

### Configuración recomendada para cuando despliegues:

1. **Crea un archivo `.env.local`:**
   ```env
   VITE_GA_ID=G-XXXXXXXXXX
   VITE_SITE_URL=https://rpp.edu.mx
   ```

2. **Para Vercel:**
   - Ve a tu proyecto en Vercel
   - Settings → Environment Variables
   - Agrega las variables

3. **Para producción:**
   - Los meta tags se leerán correctamente
   - Analytics funcionará con todos los visitantes
   - Podrás usar Vercel Analytics integrado

---

## Próximos pasos sugeridos

1. **Para los videos:** Dime cuál opción prefieres (local o YouTube) y actualizo el código
2. **Para SEO:** Puedo agregar React Helmet ahora (útil cuando despliegues)
3. **Para Analytics:** Puedo dejarlo configurado para cuando tengas el ID de GA

¿Quieres que proceda con alguna de estas configuraciones?
