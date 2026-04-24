# 🗺️ PLANTILLA MULTICAMINO RPP

## ¿Qué es esto?

Sistema de narrativa multicamino para convertir artículos científicos de la RPP en experiencias interactivas estilo "visual novel". El usuario explora el artículo eligiendo su propio camino, con condiciones de desbloqueo, finales alternativos y persistencia de progreso.

---

## 🚀 Crear un nuevo artículo multicamino (3 pasos)

### PASO 1: Crear la configuración del artículo

Crea un archivo en `src/components/Multipath/configs/configXXXX.ts`:

```typescript
import type { ArticleGraph } from '../types';

export const configXXXX: ArticleGraph = {
  id: 'XXXX',                    // ID del artículo
  title: 'Título del artículo',
  author: 'Autor et al.',
  doi: '10.21555/rpp.XXXX',
  startingNode: 'bienvenida',    // Nodo inicial

  nodes: {
    // ─── NODO DE BIENVENIDA ───
    bienvenida: {
      id: 'bienvenida',
      title: 'Título de bienvenida',
      type: 'choice',            // 'narrative' | 'choice' | 'data' | 'quote' | 'synthesis' | 'ending'
      category: 'intro',         // Categoría para el mapa de progreso
      content: `Texto de introducción...\n\n**¿Cómo quieres abordar este artículo?**`,
      accentColor: '#3498db',    // Color de acento (opcional)
      exits: [
        { to: 'contexto', label: 'Ver el contexto', type: 'secuencial', icon: 'MapPin' },
        { to: 'metodologia', label: 'Metodología', type: 'transversal', icon: 'Microscope' },
      ],
    },

    // ─── NODO NARRATIVO ───
    contexto: {
      id: 'contexto',
      title: 'Contexto del estudio',
      type: 'narrative',
      category: 'contexto',
      content: `Texto con **negritas** y:\n\n• Items de lista\n• Con datos **destacados**`,
      exits: [
        { to: 'resultados', label: 'Ver resultados', type: 'secuencial', icon: 'BarChart3' },
        { to: 'bienvenida', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    // ─── NODO CON CITA ───
    cita_ejemplo: {
      id: 'cita_ejemplo',
      title: 'Voz del participante',
      type: 'quote',
      category: 'citas',
      content: `Contexto de la cita...`,
      quote: {
        text: 'Texto verbatim de la cita...',
        author: 'Participante N° 1',
        context: 'Entrevista semiestructurada',
      },
      exits: [
        { to: 'siguiente', label: 'Continuar', type: 'secuencial', icon: 'ArrowRight' },
      ],
    },

    // ─── NODO CON DATOS ───
    datos_tabla: {
      id: 'datos_tabla',
      title: 'Datos numéricos',
      type: 'data',
      category: 'datos',
      dataView: 'table',
      dataContent: `Variable X: 45%\nVariable Y: 32%`,
      content: `Interpretación de los datos...`,
      exits: [
        { to: 'discusion', label: 'Discutir resultados', type: 'secuencial' },
      ],
    },

    // ─── NODO CON CONDICIÓN DE DESBLOQUEO ───
    secreto: {
      id: 'secreto',
      title: 'Sección desbloqueable',
      type: 'narrative',
      category: 'profundidad',
      content: `Solo visible si visitaste ciertos nodos antes...`,
      exits: [
        { to: 'anterior', label: 'Volver', type: 'retorno' },
      ],
    },

    // ─── NODO ANTERIOR CON CONDICIÓN ───
    anterior: {
      id: 'anterior',
      title: 'Nodo que desbloquea',
      type: 'narrative',
      category: 'resultados',
      content: `Este nodo desbloquea el nodo "secreto"`,
      exits: [
        { to: 'secreto', label: 'Ver sección especial', type: 'profundidad', requiresVisited: ['anterior'] },
        { to: 'final', label: 'Ir al final', type: 'final' },
      ],
    },

    // ─── FINAL ───
    final: {
      id: 'final',
      title: 'Final del recorrido',
      type: 'ending',
      category: 'conclusiones',
      content: `**¡Has completado el recorrido!**\n\nResumen de lo aprendido...`,
      exits: [
        { to: 'bienvenida', label: 'Reiniciar', type: 'retorno', icon: 'RotateCcw' },
      ],
    },
  },

  endings: [
    {
      id: 'final',
      title: 'Final estándar',
      condition: 'Completar el recorrido básico',
      description: 'Visión general del artículo',
    },
  ],
};
```

---

### PASO 2: Crear el componente wrapper

Crea `src/components/Multipath/MultipathXXXX.tsx`:

```typescript
import { createMultipathArticle } from './createMultipathArticle';
import { configXXXX } from './configs/configXXXX';

export default createMultipathArticle(configXXXX, { theme: 'dark' });
```

**Temas disponibles:**
- `'dark'` — Fondo oscuro tipo biblioteca (default)
- `'warm'` — Tonos cálidos, madera, ámbar
- `'cool'` — Tonos fríos, azules, académico
- `'academic'` — Claro, papel, lectura cómoda

---

### PASO 3: Integrar en App.tsx

Añade dos líneas en `src/App.tsx`:

```typescript
// 1. Import (con los otros lazy imports)
const MultipathXXXX = lazy(() => import('./components/Multipath/MultipathXXXX'));

// 2. Ruta (dentro de AnimatePresence, con las otras rutas)
{activeSubPage === 'mapa_multicamino_XXXX' && (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] bg-[#1a0f0f] overflow-y-auto overscroll-none"
    data-lenis-prevent="true"
  >
    <Suspense fallback={<PageLoader />}>
      <MultipathXXXX onBack={() => setActiveSubPage('mapas_conceptuales')} />
    </Suspense>
  </motion.div>
)}
```

Y añade `'mapa_multicamino_XXXX'` a la lista de exclusión en el fallback genérico.

---

### PASO 4: Añadir a MapasConceptuales (opcional)

En `src/components/Transmedia/MapasConceptuales.tsx`, añade tu artículo al array `MAPAS`:

```typescript
{
  id: 'mapa_multicamino_XXXX',
  numero: '03',
  titulo: 'Título del artículo',
  autores: 'Autor et al.',
  año: '2025',
  revista: 'Revista Panamericana de Pedagogía, n. XX',
  tema: 'Multicamino · Cualitativo · País',
  color: '#3498db',
  colorAlt: '#2980b9',
  bg: 'from-blue-950 to-slate-950',
  disponible: true,
  tipo: 'multicamino',
},
```

---

## 📋 Categorías disponibles (auto-detectadas)

El motor detecta automáticamente qué categorías usa tu artículo. Estas son las disponibles:

| Categoría | Uso típico |
|---|---|
| `intro` | Bienvenida, presentación |
| `contexto` | Antecedentes, problema |
| `marco_teorico` | Fundamentos teóricos |
| `hipotesis` | Preguntas/hipótesis |
| `metodologia` | Diseño, enfoque |
| `muestra` | Participantes, muestra |
| `instrumentos` | Herramientas de medición |
| `resultados` | Hallazgos principales |
| `analisis` | Análisis estadístico |
| `discusion` | Interpretación |
| `conclusiones` | Conclusiones |
| `limitaciones` | Limitaciones |
| `proyecciones` | Trabajo futuro |
| `profundidad` | Nodos opcionales |
| `datos` | Tablas, cifras |
| `citas` | Voces de participantes |
| `sintesis` | Resúmenes |

**Para artículos cuantitativos** usa: `hipotesis`, `muestra`, `instrumentos`, `analisis`, `datos`

**Para artículos cualitativos** usa: `contexto`, `metodologia`, `citas`, `profundidad`

---

## 🔒 Condiciones de desbloqueo

### Requerir nodos visitados
```typescript
exits: [
  { 
    to: 'secreto', 
    label: 'Ver sección avanzada', 
    requiresVisited: ['resultados', 'discusion']  // Solo si visitaste ambos
  },
]
```

### Requerir NO haber visitado
```typescript
exits: [
  { 
    to: 'atajo', 
    label: 'Atajo directo', 
    requiresNotVisited: ['metodologia']  // Solo si NO visitaste metodología
  },
]
```

---

## 🎨 Iconos disponibles

Todos los iconos de Lucide React. Los más útiles:

| Icono | Uso |
|---|---|
| `MapPin` | Contexto, ubicación |
| `Microscope` | Metodología |
| `Users` | Participantes |
| `BarChart3` | Resultados |
| `Table` | Datos, tablas |
| `MessageSquare` | Citas |
| `MessageCircle` | Discusión |
| `Scale` | Tensión, dilemas |
| `Heart` | Cuidado, impacto |
| `AlertTriangle` | Riesgos |
| `GitBranch` | Ramificaciones |
| `Network` | Redes, conexiones |
| `CheckCircle` | Conclusiones |
| `TrendingUp` | Proyecciones |
| `Award` | Final completo |
| `RotateCcw` | Reiniciar |
| `ArrowLeft` | Volver |
| `ArrowRight` | Continuar |
| `Lock` / `Unlock` | Bloqueado/desbloqueado |
| `Globe` | Contexto internacional |
| `GraduationCap` | Formación |
| `FileText` | Documentos |
| `Lightbulb` | Teoría |
| `Target` | Objetivos |
| `Zap` | Hallazgos |
| `Layers` | Profundidad |
| `BookOpen` | Introducción |

---

## 📁 Estructura de archivos

```
src/components/Multipath/
├── types.ts                    ← Tipos TypeScript (NO TOCAR)
├── MultipathEngine.tsx         ← Motor visual genérico (NO TOCAR)
├── createMultipathArticle.tsx  ← Factory (NO TOCAR)
├── TEMPLATE_GUIDE.md           ← Esta guía
├── configs/
│   ├── config3453.ts           ← Configuración 3453
│   └── configXXXX.ts           ← Tu nueva configuración
├── Multipath3453.tsx           ← Wrapper 3453
└── MultipathXXXX.tsx           ← Tu nuevo wrapper
```

**Regla de oro:** Solo tocas `configs/` y creas wrappers. El motor se encarga de todo lo demás.

---

## ✅ Checklist antes de publicar

- [ ] Todos los nodos tienen al menos una salida (excepto finales)
- [ ] No hay ciclos infinitos sin salida
- [ ] Las condiciones `requiresVisited` apuntan a nodos que existen
- [ ] Los IDs de nodos son únicos
- [ ] El `startingNode` existe
- [ ] Los finales tienen `type: 'ending'`
- [ ] El contenido es fiel al artículo (sin inventar)
- [ ] Se verificó que el build compila
