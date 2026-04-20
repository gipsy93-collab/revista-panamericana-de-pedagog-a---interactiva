export const LIMITATIONS = [
  'Tamaño de muestra (n=228) limita generalización.',
  'Concentración geográfica exclusiva en AMBA.',
  'Diseño transversal impide observar evolución temporal.',
  'Muestreo no probabilístico por conveniencia.',
  'No se realizó estudio psicométrico profundo de validación factorial.',
];

export const ARTICLE_META = {
  id: '3412',
  title: 'Descubriendo competencias blandas en estudiantes de secundaria: exploración y reflexiones',
  carouselTitle: 'TECNOLOGÍA',
  authors: 'Dides-Iliana Hernández-Silvera; María-Alejandra Ghilardelli; María Julia Giulianelli; Vanesa-Elena Correia',
  institution: 'Pontificia Universidad Católica Argentina (UCA)',
  doi: '10.21555/rpp.3412',
  volume: 'n. 41 (2026)',
  date: '20-09-2025',
  n: 228,
  duration: 'Ciclo lectivo 2025',
  abstract: 'El estudio explora la validez y confiabilidad de un inventario piloto de habilidades blandas en adolescentes, analizando su relación con variables sociodemográficas y proyectos áulicos en 15 escuelas del AMBA.',
};

export const METHODOLOGY = {
  design: 'Descriptivo-comparativo de corte transversal',
  approach: 'Cuantitativo',
  sample: '228 estudiantes (13-20 años)',
  instruments: 'Inventario piloto de 32 ítems (4 dimensiones), Validación por Juicio de expertos (Kappa = 0.95)',
  analysis: 'SPSS 25, U de Mann-Whitney, Kruskal-Wallis',
};

export const TESTIMONIALS = [
  {
    quote: "Las habilidades blandas influyen en el desempeño académico, en la capacidad de autorregulación y en el bienestar integral de los adolescentes.",
    author: "Perspectiva Académica",
    role: "Hallazgo Central"
  },
  {
    quote: "Las desigualdades socioeconómicas también se expresan en el desarrollo de las habilidades blandas, lo que representa un desafío para la formación académica.",
    author: "Análisis de Contexto",
    role: "Observación Crítica"
  },
  {
    quote: "Los estudiantes expuestos a metodologías activas y proyectos áulicos presentan un mayor desarrollo de habilidades blandas.",
    author: "Impacto Pedagógico",
    role: "Correlación Significativa"
  }
];

export const DIMENSIONS = [
  {
    code: 'HI',
    name: 'Habilidades Interpersonales',
    emoji: '🤝',
    desc: 'Empatía, comunicación efectiva y capacidad de establecer relaciones.',
    highlight: 'Brecha de 46.63 pts entre niveles socioeconómicos (p < .001).'
  },
  {
    code: 'HINT',
    name: 'Habilidades Intelectuales',
    emoji: '🧠',
    desc: 'Pensamiento crítico, resolución de problemas y toma de decisiones.',
    highlight: 'Mujeres puntuaron significativamente más alto (M=122.91 vs 104.36).'
  },
  {
    code: 'HS',
    name: 'Habilidades Sociales',
    emoji: '👋',
    desc: 'Asertividad, cooperación y manejo de conflictos.',
    highlight: 'ABP obtuvo 138.50 pts, superando a metodologías tradicionales.'
  },
  {
    code: 'HPRE',
    name: 'Habilidades de Precisión',
    emoji: '✏️',
    desc: 'Exactitud, atención al detalle y meticulosidad.',
    highlight: 'No mostró diferencias significativas por nivel socioeconómico.'
  },
];

export const NSE_BASE: Record<string, number> = {
  'Baja-baja': 129.98,
  Baja: 109.89,
  'Media-baja': 93.56,
  Media: 140.19,
};

export const MET_MULTIPLIER: Record<string, number> = {
  ABR: 0.63,
  Convivencia: 0.79,
  Disciplina: 0.82,
  'Sin proyecto': 0.94,
  ABP: 1.12,
};

export const QUIZ_QUESTIONS = [
  {
    question: '¿Qué nivel de confiabilidad (Alfa de Cronbach) arrojó el inventario piloto?',
    options: ['0.75 (Aceptable)', '0.82 (Bueno)', '0.93 (Muy alto)', '0.60 (Bajo)'],
    correct: 2,
    explanation: 'El instrumento mostró una consistencia interna de 0.933, lo que garantiza un alto rigor en la medición académica.'
  },
  {
    question: '¿Cuál fue la brecha de puntuación más contundente detectada según el nivel socioeconómico?',
    options: ['10.5 puntos', '25.3 puntos', '46.6 puntos', '5.2 puntos'],
    correct: 2,
    explanation: 'Se observó una brecha de 46.63 puntos en Habilidades Interpersonales entre estudiantes de clase media y media-baja.'
  },
  {
    question: 'De acuerdo con el estudio, ¿qué metodología pedagógica se asocia con el mayor desarrollo de competencias blandas?',
    options: ['Aprendizaje Basado en Retos (ABR)', 'Proyecto de Disciplina Tradicional', 'Aprendizaje Basado en Proyectos (ABP)', 'Clase Magistral'],
    correct: 2,
    explanation: 'El ABP obtuvo las puntuaciones más altas (144.97) en las dimensiones clave, confirmando su eficacia para el desarrollo de soft skills.'
  },
  {
    question: '¿Qué tendencia se observó respecto al género en las habilidades interpersonales e intelectuales?',
    options: ['Los varones puntuaron más alto', 'Las mujeres puntuaron significativamente más alto', 'No hubo diferencias de género', 'Solo hubo diferencias en habilidades de precisión'],
    correct: 1,
    explanation: 'Las mujeres alcanzaron medias superiores (M=122.67 en HI) en comparación con los varones (M=104.61).'
  }
];

