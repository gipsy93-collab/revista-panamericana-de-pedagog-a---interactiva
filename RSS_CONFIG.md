# 📡 CONFIGURACIÓN DE RSS FEED - RPP INTERACTIVO

## ✅ Cambios Realizados

### 1. SCROLL NATIVO - MÁS FLUIDO

**Problema resuelto:** El scroll se sentía "pegajoso" e incómodo.

**Solución:** 
- ✅ Eliminado Lenis (smooth scroll library)
- ✅ Usando scroll nativo del navegador
- ✅ Navegación ahora es fluida y responsiva

**Archivo modificado:** `src/App.tsx`

---

### 2. RSS FEED REAL - CONFIGURADO

**Nueva funcionalidad:** La sección "Actualidad" ahora puede mostrar RSS feeds reales de fuentes externas.

**Cómo funciona:**

1. **Por defecto:** Muestra datos mock (6 noticias de ejemplo)
2. **Con RSS activado:** Fetchea noticias reales de ScienceDirect

---

## 🎛️ CÓMO USAR EL RSS FEED

### En la interfaz:

1. Ve a la sección **Actualidad** (scroll o menú)
2. Verás un botón **"RSS: OFF"** en la esquina superior derecha del panel
3. Haz clic para activar: **"RSS: ON"**
4. El sistema cargará noticias reales automáticamente

### El botón muestra:
- 🟢 **RSS: ON** (verde) - Usando feed externo real
- ⚪ **RSS: OFF** (gris) - Usando datos mock de ejemplo

---

## 🔧 CONFIGURACIÓN DE FUENTES RSS

### Ubicación en el código:

Abre `src/App.tsx` y busca:

```tsx
const RSS_FEED_URLS = [
  // Ejemplo: Feed de ScienceDirect (Pedagogía)
  "https://www.sciencedirect.com/api/search/rss?qs=pedagogy&stem=true",
  
  // Tu feed personalizado (cuando lo tengas):
  // "https://rpp.edu.mx/feed.xml"
];
```

### Fuentes RSS recomendadas para pedagogía:

#### 1. ScienceDirect (Pedagogía) - ✅ YA CONFIGURADO
```
https://www.sciencedirect.com/api/search/rss?qs=pedagogy&stem=true
```
- Artículos científicos sobre pedagogía
- Actualización frecuente
- En inglés

#### 2. ERIC (Education Resources)
```
https://eric.ed.gov/?q=pedagogy&feed=rss
```
- Base de datos educativa del gobierno de EE.UU.
- Artículos en inglés y español

#### 3. Redalyc (América Latina)
```
https://www.redalyc.org/rss/revista.rss?revista=123
```
- Revistas científicas de América Latina
- En español
- Necesitas el ID de la revista específica

#### 4. Dialnet (España)
```
https://dialnet.unirioja.es/servlet/rss?tipo_busqueda=1&campo=FUENTE&texto=pedagogia
```
- Artículos de revistas españolas
- En español

#### 5. Google Scholar (vía RSS.app)
```
https://rss.app/feed/XXXXXXXXXX
```
- Necesitas crear cuenta en rss.app
- Puedes crear RSS de cualquier búsqueda de Google Scholar

---

## 📝 CÓMO AGREGAR TU PROPIO RSS

### Opción 1: Si tienes WordPress

1. Ve a tu WordPress
2. El feed ya existe en: `https://tusitio.com/feed/`
3. Copia esa URL
4. Pega en `RSS_FEED_URLS` en `App.tsx`

### Opción 2: Si usas otro CMS

La mayoría de CMS generan RSS automáticamente:

- **Drupal:** `/rss.xml`
- **Joomla:** `/index.php?option=com_ninjarsssyndicator&feed_id=1`
- **Wix:** `/blog-feed.xml`
- **Squarespace:** `/?format=rss`

### Opción 3: Crear RSS manualmente

1. Usa un generador como:
   - [rss.app](https://rss.app/) - Gratis hasta 10 items
   - [feedity.com](https://feedity.com/) - Gratis con límites
   - [politepol.com](https://politepol.com/) - Totalmente gratis

2. Crea tu feed con las noticias de RPP
3. Copia la URL generada
4. Pega en `RSS_FEED_URLS`

---

## 🛠️ PERSONALIZACIÓN AVANZADA

### Cambiar la fuente RSS

Edita `src/App.tsx`:

```tsx
const RSS_FEED_URLS = [
  // Tu fuente principal
  "https://tu-feed-rpp.com/feed.xml",
  
  // Fuentes secundarias (opcional)
  // "https://science-direct.com/...",
  // "https://eric.ed.gov/...",
];
```

### Activar RSS real por defecto

Busca esta línea en `BlogAndActualidad`:

```tsx
const [useRealRSS, setUseRealRSS] = useState(false);
```

Cámbiala a:

```tsx
const [useRealRSS, setUseRealRSS] = useState(true);
```

### Ajustar categorías automáticas

La función `categorizeByKeywords` clasifica las noticias:

```tsx
function categorizeByKeywords(text: string): string {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('convocatoria') || lowerText.includes('call for papers')) {
    return 'Convocatorias';
  }
  // ... más categorías
  
  return 'General';
}
```

Agrega tus propias palabras clave:

```tsx
if (lowerText.includes('tu-palabra-clave')) {
  return 'Tu Categoría';
}
```

---

## 🔄 CÓMO FUNCIONA EL FETCH

### Proceso de carga:

1. Usuario hace clic en "RSS: OFF" → "RSS: ON"
2. Sistema llama a `fetchRSSFeed(url)`
3. Usa `rss2json.com` para convertir RSS a JSON (evita CORS)
4. Parsea los items y categoriza automáticamente
5. Muestra las noticias en el panel

### Si el RSS falla:

- ✅ Automáticamente usa datos mock como fallback
- ✅ Muestra consola de error para debugging
- ✅ No rompe la interfaz

---

## 📊 ESTRUCTURA DE LOS DATOS

Cada item del RSS se convierte a:

```typescript
interface RSSItem {
  id: string;              // Único
  title: string;           // Título de la noticia
  link: string;            // URL original
  pubDate: string;         // Fecha de publicación
  description: string;     // Descripción (200 chars max)
  category: string;        // Categoría auto-generada
}
```

---

## 🎨 PERSONALIZACIÓN DE UI

### Colores de categorías

En `BlogAndActualidad`, busca:

```tsx
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Convocatorias': 'bg-blue-500',
    'Institucional': 'bg-zinc-500',
    'Premios': 'bg-amber-500',
    'Tecnología': 'bg-purple-500',
    'Eventos': 'bg-green-500',
    'Publicaciones': 'bg-zine-red'
  };
  return colors[category] || 'bg-zinc-500';
};
```

Agrega tus categorías:

```tsx
'Tu Categoría': 'bg-pink-500',
```

---

## 🧪 TESTING

### Probar el RSS:

1. **Abre la app:** `http://localhost:3000`
2. **Ve a Actualidad**
3. **Haz clic en "RSS: OFF"**
4. **Espera 1-2 segundos**
5. **Deberías ver noticias reales de ScienceDirect**

### Si no carga:

1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que la URL del RSS sea válida
4. Prueba la URL en tu navegador: `https://api.rss2json.com/v1/api.json?rss_url=TU_URL`

---

## 📱 CUÁNDO DESPLIEGUES

### Producción (Vercel, Netlify, etc.):

1. **Configura tu RSS feed real:**
   - Usa el feed de tu CMS
   - O crea uno con rss.app

2. **Activa RSS por defecto:**
   ```tsx
   const [useRealRSS, setUseRealRSS] = useState(true);
   ```

3. **Opcional: Usa variables de entorno:**
   ```tsx
   const RSS_FEED_URL = import.meta.env.VITE_RSS_FEED_URL || 'fallback-url';
   ```

4. **Agrega el `.env`:**
   ```env
   VITE_RSS_FEED_URL=https://rpp.edu.mx/feed.xml
   ```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "RSS no carga"

**Causa:** Problema de CORS o feed inválido

**Solución:**
1. Verifica la URL en tu navegador
2. Usa rss2json (ya está implementado)
3. Prueba con otro feed

### "Las noticias no se categorizan bien"

**Causa:** Palabras clave no coinciden

**Solución:**
1. Edita `categorizeByKeywords()`
2. Agrega más palabras clave
3. O asigna categoría manual en el mapeo

### "El toggle no funciona"

**Causa:** Error de JavaScript

**Solución:**
1. Abre consola (F12)
2. Busca errores
3. Verifica que React esté cargado correctamente

---

## 📋 RESUMEN RÁPIDO

| Item | Estado | Cómo cambiar |
|------|--------|--------------|
| Scroll fluido | ✅ Nativo | Ya está configurado |
| RSS Feed | ✅ Configurado | Botón "RSS: OFF/ON" |
| Fuente actual | ScienceDirect | Editar `RSS_FEED_URLS` |
| Fallback | ✅ Datos mock | Automático si falla RSS |
| Categorías | ✅ Auto | Función `categorizeByKeywords` |

---

## 🎯 PRÓXIMOS PASOS SUGERIDOS

1. **Probar el RSS ahora:**
   - Ve a Actualidad
   - Activa "RSS: ON"
   - Verifica que carguen noticias

2. **Configurar tu propio RSS:**
   - Si tienes CMS, usa su feed
   - Si no, crea uno en rss.app

3. **Personalizar categorías:**
   - Agrega palabras clave en español
   - Ajusta los colores

4. **Cuando despliegues:**
   - Activa RSS por defecto
   - Usa tu propio feed
   - Configura variables de entorno

---

**Documento creado:** 19 de marzo de 2026  
**Archivos relacionados:** `src/App.tsx`  
**Funciones clave:** `fetchRSSFeed()`, `categorizeByKeywords()`
