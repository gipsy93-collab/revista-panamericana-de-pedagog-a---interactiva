export const ARTICLE_META = {
  id: '3455',
  doi: '10.21555/rpp.3455',
  title: 'Dimensión personal para la cultura de paz en la formación inicial docente',
  carouselTitle: 'FORMACIÓN DOCENTE // MÉXICO',
  authors: 'Guadalupe-Ivone Chan-Chi, Josué-David Poot-May',
  institution: 'Universidad Autónoma de Yucatán, México',
  volume: '41',
  date: '2026',
  n: 57,
  abstract: 'Exploración de la dimensión personal en futuros docentes de México. El estudio devela una paradoja estructural: la formación tradicional privilegia lo cognitivo pero desatiende la gestión emocional y la autoconfianza, competencias básicas para construir ambientes de paz en contextos de violencia.'
};

export const METHODOLOGY = {
  design: 'Cualitativo / Interpretativo',
  approach: 'Análisis de Contenido + Triangulación',
  sample: '57 Docentes en Formación Inicial (UADY)',
  instruments: 'Cuestionario digital + Análisis de Carteles (Fuente Documental)',
  analysis: 'Codificación temática de significados, características y retos'
};

export const DIMENSIONS = [
  {
    code: 'DP',
    name: 'Significado Personal',
    emoji: '🧘',
    desc: 'Interpretación de la dimensión personal como crecimiento y autoconocimiento.',
    highlight: 'Vinculación directa entre el trabajo con uno mismo y el desempeño profesional.'
  },
  {
    code: 'VC',
    name: 'Valores y Compromiso',
    emoji: '🤝',
    desc: 'Responsabilidad y respeto como pilares del ejercicio docente.',
    highlight: 'El respeto es considerado el catalizador esencial de las relaciones de paz.'
  },
  {
    code: 'RC',
    name: 'Retos Críticos',
    emoji: '🚧',
    desc: 'Obstáculos emocionales: estrés, falta de confianza y baja gestión emocional.',
    highlight: 'Compartir experiencias personales genera niveles significativos de estrés y cansancio.'
  },
  {
    code: 'PE',
    name: 'Paradox Educativa',
    emoji: '🧩',
    desc: 'Tensión entre la preparación técnica y la madurez emocional del ser.',
    highlight: '¿De qué sirve enseñar pedagogía si quien la ejercerá no ha aprendido a ser?'
  }
];

export const DATA_HIGHLIGHTS = [
  { label: 'Participación Femenina', value: 61.4, unit: '%' },
  { label: 'Participación Masculina', value: 38.6, unit: '%' },
  { label: 'Rango Etario', value: '17-28', unit: 'Años' }
];

export const TESTIMONIALS = [
  {
    quote: 'Compartir mis pensamientos con los compañeros me generó estrés y cansancio.',
    author: 'Participante Cuali',
    role: 'Docente en Formación'
  },
  {
    quote: 'Me gustaría tener más confianza en mí misma... ser una buena profesora.',
    author: 'Participante Cuali',
    role: 'Docente en Formación'
  },
  {
    quote: 'La formación docente tradicional privilegia lo cognitivo y deja de lado la dimensión personal.',
    author: 'Chan-Chi & Poot-May',
    role: 'Hallazgo Central'
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Qué dimensión es frecuentemente desatendida en la formación docente tradicional?',
    options: ['Dimensión cognitiva', 'Dimensión pedagógica', 'Dimensión personal/emocional', 'Dimensión administrativa'],
    correct: 2,
    explanation: 'El estudio señala que la formación actual privilegia los contenidos cognitivos, descuidando el desarrollo emocional del futuro docente.'
  },
  {
    question: '¿Qué valor destacan los futuros docentes como esencial para el ejercicio profesional?',
    options: ['Eficiencia técnica', 'Respeto', 'Puntualidad', 'Competitividad'],
    correct: 1,
    explanation: 'El respeto y la responsabilidad son identificados como los valores pilares para la construcción de cultura de paz.'
  },
  {
    question: '¿Cuál es uno de los retos que debilita el potencial de los docentes en formación?',
    options: [
      'Exceso de bibliografía',
      'Falta de equipo tecnológico',
      'Dificultad para compartir experiencias personales',
      'Desinterés por la pedagogía'
    ],
    correct: 2,
    explanation: 'Los estudiantes reportan que la exposición de vivencias personales ante sus pares les genera estrés y cansancio.'
  },
  {
    question: '¿Qué institución respalda la Red Nacional para la Paz en México?',
    options: ['SEP', 'SENDA', 'ANUIES', 'UNESCO'],
    correct: 2,
    explanation: 'La Red Nacional para la Paz de la ANUIES, creada en 2023, es el marco institucional de respaldo para estas iniciativas.'
  }
];

export const LIMITATIONS = [
  'Muestra concentrada en una sola universidad del sureste mexicano.',
  'Alcance cualitativo que no permite generalizaciones estadísticas poblacionales.',
  'Uso de cuestionarios digitales como fuente primaria de percepción.',
  'Enfoque centrado exclusivamente en la formación inicial docente.'
];
