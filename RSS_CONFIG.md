# 📡 CONFIGURACIÓN DE RSS FEED - RPP INTERACTIVO

## ✅ Configuración Actualizada

### 1. MULTI-FEED SYSTEM
**Estado:** Activo y configurado por defecto.

El sistema ahora combina múltiples fuentes de información para ofrecer un panel de "Actualidad" rico y diverso:
1.  **Revista RPP (OJS):** Artículos científicos y convocatorias directas de la revista.
2.  **Universidad Panamericana (News):** Noticias institucionales, eventos y logros de la comunidad académica de la UP.

### 2. CATEGORIZACIÓN INTELIGENTE
**Ubicación:** `src/components/Common.tsx`

Las noticias se clasifican automáticamente usando una función robusta `categorizeByKeywords` que detecta:
- **Investigación:** Ciencia, metodología, hallazgos.
- **Internacional:** Convenios globales, Notre Dame, Erasmus.
- **Institucional:** Alianzas, acuerdos universitarios.
- **Sustentabilidad:** Energía, renovables, ecología.
- **Tecnología:** IA, plataformas digitales, robótica.
- **Convocatorias:** Call for papers, envíos de artículos.
- **Eventos:** Encuentros, talleres, webinars.
- **Publicaciones:** Nuevos números y ediciones de la revista.

---

## 🎛️ CONTROL DEL STREAM

### En la interfaz:
1.  **Toggle Automático:** El feed real está **ACTIVADO por defecto** (`LIVE_FEED_ON`).
2.  **Filtros Dinámicos:** Las categorías en el menú lateral se generan dinámicamente basadas en el contenido real cargado.
3.  **Búsqueda en Tiempo Real:** Filtra instantáneamente el stream de noticias por título o contenido.

### Swich Manual:
- 🟢 **LIVE_FEED_ON** - Conectado a los servidores de OJS y UP.
- ⚪ **MOCK_DATA_ON** - Datos de prueba (útil para desarrollo offline).

---

## 🔧 MANTENIMIENTO TÉCNICO

### Cambiar o Agregar Feeds:
Edite `src/components/BlogAndActualidad.tsx` y modifique la constante `FEEDS`:

```tsx
const FEEDS = [
  'https://revistas.up.edu.mx/index.php/rpp/.../rss2', // RPP Journal
  'https://www.up.edu.mx/feed/',                      // UP News
  'https://otra-fuente-relevante.com/feed'            // ¡Agrega más aquí!
];
```

### Ajustar Palabras Clave:
Si nota que algunas noticias no se categorizan bien, edite `src/components/Common.tsx`:

```tsx
if (lowerText.includes('ecología') || lowerText.includes('ambiental')) {
  return 'Sustentabilidad';
}
```

---

## 🔄 PROCESAMIENTO DE DATOS
1.  **Fetch Paralelo:** Carga todas las fuentes simultáneamente.
2.  **Deduplicación:** Elimina entradas duplicadas (comparando URLs).
3.  **Ordenamiento Cronológico:** Ordena el stream desde la noticia más reciente.
4.  **Limpieza HTML:** El sistema limpia automáticamente el código HTML de las descripciones del RSS para mantener el diseño Neobrutalista limpio.

---

**Última actualización:** 13 de abril de 2026  
**Componente principal:** `src/components/BlogAndActualidad.tsx`  
**Lógica de datos:** `src/components/Common.tsx`

