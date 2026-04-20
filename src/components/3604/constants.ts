export const ARTICLE_META = {
  id: '3604',
  title: 'El cine como mediador pedagógico en la enseñanza de la literatura: aportes desde una investigación-acción',
  carouselTitle: 'AULA SORDA // CINE',
  subtitle: 'ALFABETIZACIÓN AUDIOVISUAL EN EL CBQ CHETUMAL',
  abstract: 'Investigación-acción educativa que explora el potencial del cine como mediador pedagógico en clases de literatura de bachillerato. Implementado en el CBQ de Chetumal, Quintana Roo, durante la pandemia, el estudio demuestra que el cine trasciende lo motivacional para convertirse en un lenguaje que articula la emoción, el pensamiento crítico y la construcción simbólica en entornos de aprendizaje virtual.',
  authors: 'López-Martínez, M. T. & Muñoz-Madrid, M. A.',
  institution: 'Universidad del Mar / Universidad Veracruzana, México',
  doi: '10.21555/rpp.3604',
  volume: 'Vol. 41',
  date: 'Diciembre 2025',
  n: 30,
  context: 'Chetumal, Quintana Roo (Bachillerato CBQ 1)',
  methodology: 'Cualitativa (Investigación-Acción Educativa)',
  phases: ['Diagnóstico (Uso previo 21%)', 'Planificación (Protocolo de Mediación)', 'Acción (Proyecciones Críticas)', 'Observación y Reflexión']
};

export const LIMITATIONS = [
  'Falta de formación específica de los docentes en análisis fílmico profesional.',
  'Limitaciones tecnológicas (conectividad inestable y diversidad de dispositivos).',
  'Sesgo de contexto pandémico: la virtualidad forzó dinámicas específicas.',
  'Muestra reducida a un solo grupo escolar (N=30).',
];

export const DIMENSIONS = [
  {
    code: 'AFECTIV',
    name: 'Dimensión Afectiva',
    emoji: '🎭',
    desc: 'El cine despierta interés y empatía hacia los personajes, rompiendo la apatía literaria tradicional.',
    highlights: [
      'Implicación emocional directa.',
      'Identificación con conflictos humanos.',
      'Atmósfera cautivadora de aprendizaje.'
    ]
  },
  {
    code: 'COGNIT',
    name: 'Dimensión Cognitiva',
    emoji: '🧠',
    desc: 'Comprensión de estructuras narrativas y recursos literarios mediante el lenguaje visual.',
    highlights: [
      'Análisis de montaje y fotografía.',
      'Traducción de figuras retóricas a imágenes.',
      'Comprensión secuencial de la trama.'
    ]
  },
  {
    code: 'SOCIAL',
    name: 'Dimensión Social',
    emoji: '🤝',
    desc: 'El aula virtual se transforma en un espacio de diálogo cooperativo y construcción colectiva.',
    highlights: [
      'Debates en Google Meet.',
      'Producción de reseñas colaborativas.',
      'Intercambio de interpretaciones simbólicas.'
    ]
  },
];

export const CORPUS = [
  {
    title: 'Romeo + Julieta',
    director: 'Baz Luhrmann',
    literature: 'William Shakespeare',
    goal: 'Contextualización y drama'
  },
  {
    title: 'Crónica de una muerte anunciada',
    director: 'Francesco Rosi',
    literature: 'Gabriel García Márquez',
    goal: 'Análisis de estructura narrativa'
  },
  {
    title: 'Rebelión en la granja',
    director: 'John Halas & Joy Batchelor',
    literature: 'George Orwell',
    goal: 'Crítica sociopolítica y alegoría'
  }
];

export const QUIZ_QUESTIONS = [
  {
    text: '¿Qué porcentaje de estudiantes reportaba usar material audiovisual antes del estudio?',
    options: ['5%', '21%', '50%', '85%'],
    correctAnswer: 1,
    difficulty: 'fácil',
    explanation: 'Solo el 21% usaba estos recursos, revelando una brecha masiva entre el entorno cultural juvenil y la práctica escolar.',
  },
  {
    text: '¿Bajo qué marco teórico se define el cine como "puente" para el conocimiento previo?',
    options: ['Conductismo', 'Aprendizaje Significativo', 'Teoría del Caos', 'Estructuralismo'],
    correctAnswer: 1,
    difficulty: 'medio',
    explanation: 'Ausubel sostiene que el aprendizaje surge al anclar conocimientos nuevos en estructuras previas (presaberes audiovisuales).',
  },
  {
    text: '¿Quién es el autor citado fundamental para la alfabetización audiovisual en este estudio?',
    options: ['Joan Ferrés', 'Paulo Freire', 'Lawrence Stenhouse', 'Henry Giroux'],
    correctAnswer: 0,
    difficulty: 'difícil',
    explanation: 'Ferrés (1994) es el referente clave para la alfabetización audiovisual y la necesidad de "aprender a mirar".',
  },
];

export const MEMORY_CONCEPTS = [
  { pairId: 1, term: "Alfabetización Audiovisual", definition: "Capacidad de analizar y producir mensajes con el lenguaje de la imagen y el sonido." },
  { pairId: 2, term: "Mediación Pedagógica", definition: "Tránsito del cine como distracción a herramienta de construcción de saber." },
  { pairId: 3, term: "Presaberes Fílmicos", definition: "Cultura visual previa que el alumno trae al aula virtual." },
  { pairId: 4, term: "Investigación-Acción", definition: "Metodología donde el docente investiga su propia práctica para mejorarla." }
];

export const FLASHCARD_DATA = [
  { category: "CINE", front: "El lenguaje de la emoción", back: "El cine permite que el alumno conecte con la literatura desde lo afectivo antes que lo racional." },
  { category: "VIRTUALIDAD", front: "Google Meet como Aula", back: "El espacio virtual se transformó en un cine-debate participativo." },
  { category: "RESULTADO", front: "Pensamiento Crítico", back: "Los alumnos pasaron de consumidores pasivos a analistas de la imagen." }
];

export const CENTRAL_FINDING = {
  title: "El Cine como Lenguaje Articulador",
  text: "El cine trasciende lo meramente motivacional para convertirse en un lenguaje que articula la emoción, el pensamiento crítico y la construcción simbólica en entornos de aprendizaje virtual.",
  highlight: "Mediación pedagógica transformadora en la enseñanza de la literatura."
};

export const ARTICLE_SECTIONS = [
  {
    id: 'problem',
    title: 'El Problema: Apatía Literaria',
    content: 'La desconexión entre el canon literario escolar y la cultura visual de los jóvenes genera una brecha en la comprensión simbólica.',
    quote: 'Solo el 21% de los estudiantes reportó usar material audiovisual previo al estudio.'
  },
  {
    id: 'theory',
    title: 'Marco Teórico: Cine como Mediador',
    content: 'El cine no se usa como postre motivacional, sino como un puente cognitivo que ancla los conceptos literarios abstractos.',
    quote: 'Aprender a mirar para aprender a leer.'
  },
  {
    id: 'method',
    title: 'Metodología: Acción en el Aula',
    content: 'Implementación de ciclos de planificación, acción y reflexión en el Bachillerato CBQ de Chetumal durante la virtualidad.',
    quote: 'La distancia física se rompió mediante la proximidad de la imagen compartida.'
  },
  {
    id: 'results',
    title: 'Dimensiones del Impacto',
    content: 'Se observaron mejoras significativas en las dimensiones afectiva (empatía), cognitiva (análisis) y social (diálogo colectiva).',
    quote: 'El cine articula la emoción con el pensamiento crítico.'
  }
];
