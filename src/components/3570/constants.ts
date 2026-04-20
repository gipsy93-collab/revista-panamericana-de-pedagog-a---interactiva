export const ARTICLE_META = {
  id: '3570',
  title: 'Análisis de la formación docente para el desarrollo del pensamiento crítico',
  carouselTitle: 'CRÍTICO // YUCATÁN',
  subtitle: 'REVISIÓN SISTEMÁTICA EN EDUCACIÓN PREESCOLAR',
  abstract: 'Revisión sistemática de literatura (PRISMA 2020) sobre la formación de docentes para fomentar el pensamiento crítico en preescolar. El estudio analiza 15 investigaciones globales (2015-2025) concluyendo que el pensamiento crítico no es solo una técnica cognitiva, sino una práctica ética y política que debe integrarse desde la formación inicial para transformar la realidad social.',
  authors: 'García-Martínez, L. & Reyes-Cabrera, W. R.',
  institution: 'Universidad Autónoma de Yucatán (UADY), México',
  doi: '10.21155/rpp.3570',
  volume: 'Vol. 41',
  date: 'Noviembre 2025',
  n: 15,
  context: 'Estudio de revisión global (PRISMA)',
  methodology: 'Revisión Sistemática de Literatura (PRISMA 2020)',
  phases: ['Identificación (51 papers)', 'Cribado (49)', 'Elegibilidad (15)', 'Inclusión Final']
};

export const LIMITATIONS = [
  'Escasez de estudios en Latinoamérica y África (86% concentrado en Europa y Asia).',
  'Falta de estándares internacionales unificados sobre competencias critical.',
  'Ausencia de la voz infantil: los estudios no consultan directamente a los niños.',
  'Rigidez de planes de estudio que priorizan el rendimiento sobre la crítica.',
];

export const DIMENSIONS = [
  {
    code: 'PRISMA',
    name: 'Filtro de Evidencia',
    emoji: '🔍',
    desc: 'De 51 investigaciones iniciales, solo 15 cumplieron con el rigor metodológico para ser incluidas.',
    highlights: [
      'Declaración PRISMA 2020 como estándar.',
      'Búsqueda en WoS, ERIC y EBSCOhost.',
      'Rango temporal: 2015-2025.'
    ]
  },
  {
    code: 'GEOG',
    name: 'Sesgo Geográfico',
    emoji: '🌍',
    desc: 'Concentración masiva en Europa (46%) y Asia (40%), evidenciando un vacío de investigación en el sur global.',
    highlights: [
      'España lidera la producción (4 papers).',
      'Sudamérica representada solo por Costa Rica (1).',
      'Desafío de descolonizar el pensamiento crítico.'
    ]
  },
  {
    code: 'PERSPEC',
    name: 'Perspectivas',
    emoji: '💡',
    desc: 'El pensamiento crítico se articula en dimensiones: Reflexiva, STEM, Ética y Transformadora.',
    highlights: [
      'Cognitivo: Argumentación y lógica.',
      'Ético: Contextualización social.',
      'Político: Compromiso con la justicia social.'
    ]
  },
  {
    code: 'ESTRAT',
    name: 'Estrategias',
    emoji: '🛠️',
    desc: 'Metodologías activas (Aprendizaje-Servicio) y artísticas emergen como las más efectivas.',
    highlights: [
      'Uso de Danza, Pintura y Teatro.',
      'Pensamiento Computacional en STEM.',
      'Análisis Crítico del Discurso.'
    ]
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Cuál es el hallazgo central sobre la naturaleza del pensamiento crítico en este estudio?',
    options: [
      'Es una competencia meramente técnica.',
      'Es una práctica transformadora cognitiva, ética y política.',
      'Es un proceso que depende solo de la genética.',
      'No es aplicable en educación preescolar.'
    ],
    correct: 1,
    explanation: 'El estudio concluye que el pensamiento crítico trasciende lo cognitivo para convertirse en una herramienta de transformación social y ética.',
  },
  {
    question: '¿Qué porcentaje de los estudios revisados provienen de Europa y Asia?',
    options: ['25%', '50%', '86%', '100%'],
    correct: 2,
    explanation: 'El 46.6% provienen de Europa y el 40% de Asia, sumando un 86.6%, lo que revela un sesgo geográfico significativo.',
  },
  {
    question: '¿Qué metodología de revisión se utilizó para garantizar la transparencia del estudio?',
    options: ['Revisión Narrativa', 'Meta-análisis Estadístico', 'Declaración PRISMA 2020', 'Entrevista a profundidad'],
    correct: 2,
    explanation: 'Se utilizó PRISMA 2020 para asegurar un proceso de identificación, cribado y selección sistemático y reproducible.',
  },
  {
    question: '¿Qué tipo de estrategia pedagógica integra el uso de la danza y el teatro?',
    options: ['Estrategias STEM', 'Estrategias Artísticas y Creativas', 'Análisis del Discurso', 'Instrucción Directa'],
    correct: 1,
    explanation: 'Las expresiones artísticas como pintura y teatro son citadas como medios para fomentar la reflexión crítica desde la creatividad.',
  },
  {
    question: '¿Cuál es el principal obstáculo para el desarrollo del pensamiento crítico según la revisión?',
    options: ['Falta de tecnología', 'Bajo presupuesto escolar', 'Rigidez de planes de estudio y estandarización', 'Desinterés de los padres'],
    correct: 2,
    explanation: 'La rigidez curricular y la cultura del rendimiento estandarizado son las mayores barreras para el pensamiento divergente.',
  },
];
