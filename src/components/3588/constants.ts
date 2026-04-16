import { Question, ArticleSection, Flashcard } from './types';

export const CENTRAL_FINDING = {
  title: "Validación Preliminar en Contexto Mexicano",
  text: "La escala Bäulke traducida al español muestra propiedades psicométricas adecuadas para medir la intención de deserción universitaria en México, con confiabilidad alta en todas las dimensiones (α = .764 – .969) y correlaciones moderadas a fuertes con instrumentos validados previamente.",
  highlight: "ω = .959 — Confiabilidad casi perfecta de la escala total."
};

export const ARTICLE_SECTIONS: ArticleSection[] = [
  {
    id: "ficha",
    title: "Ficha Técnica",
    content: "Artículo publicado en Revista Panamericana de Pedagogía, n. 41 (2026). Autores: Aarón Javier Euan Catzín y Pedro José Canto Herrera (Universidad Autónoma de Yucatán, México). Tipo: Empírico piloto instrumental, transversal y correlacional. DOI: 10.21555/rpp.3588.",
    quote: "Primer estudio en México que traduce y analiza propiedades psicométricas de la escala Bäulke et al. (2022)."
  },
  {
    id: "introduccion",
    title: "Introducción: La Intención de Deserción",
    content: "La deserción universitaria alcanza hasta un 24% a nivel internacional (OECD, 2024). Estudiar la intención de deserción —pensamientos del estudiante sobre interrumpir sus estudios— es crucial porque actúa como señal de alerta temprana. El estudio identifica cuatro limitaciones críticas: uso de ítems únicos, confusión conceptual entre abandono y cambio de carrera, escasez de validación psicométrica y ausencia de definición conceptual explícita.",
    quote: "La intención de deserción se refiere a los pensamientos o la consideración por parte del estudiante de interrumpir de manera definitiva sus estudios antes de obtener el título universitario."
  },
  {
    id: "metodologia",
    title: "Metodología: Estudio Piloto",
    content: "Se realizó un estudio instrumental, no experimental, transversal y correlacional con n=71 estudiantes de universidades de Yucatán (87% mujeres, edad media 21.6 años). Se aplicaron cuatro instrumentos: Escala Bäulke (15 ítems, 5 dimensiones), Escala Frostad/Jacobo-Galicia (6 ítems), EACA de autoeficacia (13 ítems) y CEMA de motivación (6 ítems). El procedimiento incluyó traducción por experta, recolección presencial con retroalimentación de claridad y recolección online mediante Microsoft Forms.",
    quote: "Las cinco dimensiones permiten identificar en qué fase del proceso se encuentra el estudiante."
  },
  {
    id: "resultados",
    title: "Resultados: Confiabilidad y Validez",
    content: "La escala traducida mostró confiabilidad α = .829 – .970 por dimensión y ω = .959 en la escala total. Las correlaciones con el instrumento validado previo fueron moderadas a fuertes (r = .406 – .570, p < .001). Se encontraron correlaciones inversas significativas con motivación académica (r = -.326, p < .01) y autoeficacia (r = -.436, p < .001), consistentes con la literatura.",
    quote: "Los resultados indican que la Escala para medir la intención de deserción de Bäulke et al. (2022) muestra indicios de validez externa preliminar y con una adecuada confiabilidad."
  },
  {
    id: "discusion",
    title: "Discusión e Implicaciones",
    content: "Los hallazgos concuerdan con el estudio original de Bäulke et al. (2022) y con investigaciones sobre motivación y autoeficacia. El instrumento permite a las instituciones detectar señales tempranas de abandono y diseñar intervenciones específicas según la dimensión afectada. Las limitaciones principales son el tamaño muestral reducido (n=71), el sesgo de género (87% mujeres) y la recolección parcialmente online.",
    quote: "Contar con instrumentos validados en el contexto permite a las instituciones de educación superior detectar señales tempranas de abandono académico."
  },
  {
    id: "limitaciones",
    title: "Limitaciones",
    content: "1. Tamaño de muestra: 71 participantes es reducido para análisis factoriales confirmatorios.\n2. Sesgo de género: 87% mujeres limita generalización.\n3. Recolección mixta: datos presenciales y en línea pueden introducir varianza método.\n4. Diseño transversal: no permite evaluar estabilidad temporal de las mediciones."
  },
  {
    id: "conclusiones",
    title: "Conclusiones",
    content: "La escala Bäulke en español presenta indicios preliminares de validez externa y adecuada confiabilidad para el contexto mexicano. Supera limitaciones de instrumentos existentes al tener definición conceptual clara, distinguir abandono de cambio de carrera y medir de forma multidimensional. Se recomienda ampliar la muestra en futuras investigaciones.",
    quote: "Este estudio contribuye al avance del conocimiento en el campo de la intención de deserción escolar universitaria en México."
  }
];

export const RELIABILITY_DATA = [
  { dimension: "Percepción de no encajar", alpha: 0.873, omega: 0.877 },
  { dimension: "Pensamientos sobre desertar", alpha: 0.764, omega: 0.827 },
  { dimension: "Análisis", alpha: 0.858, omega: 0.863 },
  { dimension: "Búsqueda de información", alpha: 0.858, omega: 0.862 },
  { dimension: "Decisión final", alpha: 0.969, omega: 0.970 },
];

export const VALIDITY_DATA = [
  { dimension: "Percepción de no encajar", r: 0.406, magnitude: "Moderada" },
  { dimension: "Pensamientos sobre desertar", r: 0.476, magnitude: "Moderada" },
  { dimension: "Análisis", r: 0.544, magnitude: "Fuerte" },
  { dimension: "Búsqueda de información", r: 0.540, magnitude: "Fuerte" },
  { dimension: "Decisión final", r: 0.473, magnitude: "Moderada" },
  { dimension: "Puntuación total", r: 0.570, magnitude: "Fuerte" },
];

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    difficulty: 'fácil',
    text: "¿Cuál es el objetivo general del estudio de Euan-Catzín y Canto-Herrera?",
    options: [
      "Reducir la deserción universitaria en Yucatán",
      "Traducir y analizar propiedades psicométricas de la escala Bäulke",
      "Comparar universidades públicas y privadas",
      "Diseñar un programa de tutorías académicas"
    ],
    correctAnswer: 1,
    explanation: "El objetivo general es traducir y analizar propiedades psicométricas de la Escala para medir la intención de deserción de Bäulke et al. (2022)."
  },
  {
    id: 2,
    difficulty: 'medio',
    text: "¿Cuántas dimensiones tiene la escala Bäulke y cuántos ítems en total?",
    options: [
      "3 dimensiones y 12 ítems",
      "4 dimensiones y 16 ítems",
      "5 dimensiones y 15 ítems",
      "6 dimensiones y 18 ítems"
    ],
    correctAnswer: 2,
    explanation: "La escala tiene 5 dimensiones (percepción de no encajar, pensamientos sobre desertar, análisis, búsqueda de información, decisión final) con 3 ítems cada una = 15 ítems."
  },
  {
    id: 3,
    difficulty: 'medio',
    text: "¿Cuál fue el valor del omega de McDonald para la escala total?",
    options: [
      "ω = .829",
      "ω = .900",
      "ω = .959",
      "ω = .970"
    ],
    correctAnswer: 2,
    explanation: "El omega de McDonald para la escala total fue ω = .959, lo cual indica confiabilidad casi perfecta."
  },
  {
    id: 4,
    difficulty: 'difícil',
    text: "¿Qué correlación se encontró entre intención de deserción y autoeficacia académica?",
    options: [
      "r = +.436 (positiva moderada)",
      "r = -.436 (inversa moderada)",
      "r = +.570 (positiva fuerte)",
      "r = -.326 (inversa moderada)"
    ],
    correctAnswer: 1,
    explanation: "Se encontró una correlación inversa moderada de r = -.436 (p < .001): a mayor autoeficacia, menor intención de deserción."
  },
  {
    id: 5,
    difficulty: 'difícil',
    text: "¿Cuál es una limitación declarada por los autores del estudio?",
    options: [
      "No se encontró validez convergente",
      "El instrumento no pudo traducirse al español",
      "Tamaño muestral reducido y sesgo de género (87% mujeres)",
      "La escala solo funciona en universidades públicas"
    ],
    correctAnswer: 2,
    explanation: "Los autores declaran explícitamente como limitaciones el tamaño muestral reducido (n=71) y el sesgo de género (87% mujeres)."
  }
];

export const LIMITATIONS = [
  'Tamaño de muestra: 71 participantes es reducido para análisis factoriales confirmatorios.',
  'Sesgo de género: 87% mujeres limita generalización.',
  'Recolección mixta: datos presenciales y en línea pueden introducir varianza método.',
  'Diseño transversal: no permite evaluar estabilidad temporal de las mediciones.',
];

export const FLASHCARD_DATA: Flashcard[] = [
  {
    front: "¿Qué es la intención de deserción según Bäulke?",
    back: "Los pensamientos o consideración del estudiante de interrumpir definitivamente sus estudios antes de obtener el título.",
    category: "Definición"
  },
  {
    front: "Las 5 fases del modelo cognitivo",
    back: "1. Percepción de no encajar\n2. Pensamientos sobre desertar\n3. Análisis\n4. Búsqueda de información\n5. Decisión final",
    category: "Modelo"
  },
  {
    front: "¿Qué indicador de confiabilidad es recomendado para escalas multidimensionales?",
    back: "El omega de McDonald (ω), que en este estudio alcanzó .959 para la escala total.",
    category: "Psicometría"
  },
  {
    front: "Correlación con autoeficacia académica",
    back: "r = -.436 (p < .001). Mayor autoeficacia se asocia con menor intención de deserción.",
    category: "Dato clave"
  },
  {
    front: "¿Por qué es importante estudiar intención antes que deserción real?",
    back: "Porque permite acceder a estudiantes que aún están en el sistema e implementar estrategias de prevención oportunas.",
    category: "Implicación"
  }
];
