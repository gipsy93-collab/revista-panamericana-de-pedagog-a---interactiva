export const LIMITATIONS = [
  'Tamaño de muestra (n=228) limita generalización.',
  'Concentración geográfica exclusiva en AMBA.',
  'Diseño transversal impide observar evolución temporal.',
  'Muestreo no probabilístico por conveniencia.',
  'No se realizó estudio psicométrico profundo de validación factorial.',
];
export const ARTICLE_META = {
  id: '3412',
  title: 'Descubriendo competencias blandas en estudiantes secundarios: exploración y reflexiones',
  carouselTitle: 'TECNOLOGÍA',
  authors: 'Hernández-Silvera, Ghilardelli, Giulianelli & Correia',
  institution: 'Pontificia Universidad Católica Argentina (UCA)',
  doi: '10.21555/rpp.3412',
  volume: 'Vol. 41',
  date: 'Septiembre 2025',
  n: 228,
  context: '15 escuelas del AMBA, Argentina',
};

export const DIMENSIONS = [
  {
    code: 'HI',
    name: 'Habilidades Interpersonales',
    emoji: '🤝',
    desc: 'Empatía, comunicación efectiva, capacidad de establecer relaciones, trabajo en equipo.',
  },
  {
    code: 'HINT',
    name: 'Habilidades Intelectuales',
    emoji: '🧠',
    desc: 'Pensamiento crítico, resolución de problemas, creatividad, toma de decisiones.',
  },
  {
    code: 'HS',
    name: 'Habilidades Sociales',
    emoji: '👋',
    desc: 'Asertividad, cooperación, manejo de conflictos, adaptabilidad social.',
  },
  {
    code: 'HPRE',
    name: 'Habilidades de Precisión',
    emoji: '✏️',
    desc: 'Exactitud, control motor fino, atención al detalle, meticulosidad.',
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
    question: '¿Cuántos ítems tiene el inventario piloto de competencias blandas?',
    options: ['16', '24', '32', '40'],
    correct: 2,
    explanation: 'El inventario piloto consta de 32 ítems distribuidos en 4 dimensiones de 8 ítems cada una.',
  },
  {
    question: '¿Cuál dimensión mostró la mayor brecha entre clase media y media-baja?',
    options: ['HINT', 'HI', 'HS', 'HPRE'],
    correct: 1,
    explanation:
      'Habilidades Interpersonales (HI) presentó una diferencia de 46.63 puntos (p < .001), la mayor brecha observada.',
  },
  {
    question: '¿Qué metodología obtuvo la puntuación más alta en Habilidades Interpersonales?',
    options: ['ABR', 'Proyecto Disciplina', 'Sin proyecto', 'ABP'],
    correct: 3,
    explanation:
      'El Aprendizaje Basado en Proyectos (ABP) alcanzó 144.97 pts en HI, superando ampliamente a las demás metodologías.',
  },
  {
    question: '¿Cuál es el valor del Alfa de Cronbach del inventario?',
    options: ['0.79', '0.85', '0.93', '0.95'],
    correct: 2,
    explanation: 'El inventario mostró una alta consistencia interna con α = 0.933.',
  },
  {
    question: 'Según el estudio, ¿quiénes puntúan más alto en HI y HINT?',
    options: ['Varones', 'Mujeres', 'No hay diferencias', 'Depende de la edad'],
    correct: 1,
    explanation:
      'Las mujeres alcanzaron puntuaciones significativamente más altas tanto en Habilidades Interpersonales como Intelectuales.',
  },
];
