export const ARTICLE_META = {
  id: '3453',
  doi: '10.21555/rpp.3453',
  title: 'Experiencias docentes respecto al abordaje del consumo de drogas en establecimientos educacionales secundarios',
  carouselTitle: 'CONSUMO DE DROGAS // ROL DOCENTE',
  authors: 'Darling Inostroza-Fuentes, Francisca Torres-Moreno, Magdalena Vera-Jackson, Pamela Castillo-Mardones',
  institution: 'Universidad de Concepción, Chile',
  volume: '40',
  date: '14-08-2025',
  n: 8,
  abstract: 'Caracterización de las vivencias de profesores jefes en el sur de Chile ante el fenómeno del consumo de sustancias. El estudio revela que el Protocolo Escolar Interno es el eje articulador de las acciones docentes, evidenciando una brecha crítica entre la normativa vigente y los recursos reales para la intervención.'
};

export const METHODOLOGY = {
  design: 'Cualitativo / Fenomenológico',
  approach: 'Descriptivo Transversal',
  sample: '8 Docentes (Profesores Jefes) de la zona sur de Chile',
  instruments: 'Entrevista semiestructurada + Matriz de Coherencia Metodológica',
  analysis: 'Análisis de contenido con cálculo de frecuencias de categorías'
};

export const DIMENSIONS = [
  {
    code: 'ED',
    name: 'Enfoque Docente',
    emoji: '👤',
    desc: 'Percepción del consumo e impacto emocional y profesional en el docente.',
    highlight: 'Frecuencia: 72 menciones. El impacto emocional es un factor crítico no abordado.'
  },
  {
    code: 'AS',
    name: 'Acciones de Seguimiento',
    emoji: '🔗',
    desc: 'Vinculación con redes externas (SENDA, Salud) y apoyo psicosocial.',
    highlight: 'Frecuencia: 60 menciones. Dependencia crítica de la red de apoyo externa.'
  },
  {
    code: 'PI',
    name: 'Protocolo Interno',
    emoji: '📋',
    desc: 'Aplicación de la Circular 482 y procedimientos legales institucionales.',
    highlight: 'Frecuencia: 42 menciones. Eje central que guía todas las acciones.'
  },
  {
    code: 'MA',
    name: 'Mecanismos de Apoyo',
    emoji: '🛡️',
    desc: 'Recursos disponibles y redes de apoyo dentro del establecimiento.',
    highlight: 'Frecuencia: 41 menciones. Notoria desigualdad de recursos entre sectores.'
  }
];

export const DATA_HIGHLIGHTS = [
  { label: 'Visibilidad de tráfico', value: 62.3, unit: '%' },
  { label: 'Consumo intramuros', value: 52, unit: '%' },
  { label: 'Prevalencia Marihuana', value: 32.8, unit: '%' }
];

export const TESTIMONIALS = [
  {
    quote: 'Primero hicimos lo que dice el protocolo: tenemos que entrevistar al estudiante, darles pistas sobre lo que observamos, que generalmente es un cambio en la conducta.',
    author: 'Participante N° 2',
    role: 'Docente Jefe'
  },
  {
    quote: 'Un estudiante que está expuesto al consumo de drogas inevitablemente ve vulneradas sus necesidades más básicas... llega al aula sin haber descansado bien.',
    author: 'Participante N° 1',
    role: 'Docente Jefe'
  },
  {
    quote: 'Tenemos psicólogos especialistas en drogas, y si no la piden, es verdad, donde puedan ser derivados, ya sea a Senda o a un hogar de tratamiento.',
    author: 'Participante N° 6',
    role: 'Docente Jefe'
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Cuál es el eje central que guía las acciones de los docentes ante el consumo de drogas?',
    options: [
      'La intuición personal del profesor',
      'El Protocolo Escolar Interno',
      'La sanción inmediata del estudiante',
      'La comunicación con la policía'
    ],
    correct: 1,
    explanation: 'El estudio revela que el Protocolo Escolar Interno es el eje central de significados y guía los procedimientos establecidos.'
  },
  {
    question: '¿Qué porcentaje de estudiantes reporta haber visto venta de drogas cerca de su establecimiento según SENDA?',
    options: ['32.8%', '52%', '62.3%', '72%'],
    correct: 2,
    explanation: 'El 62.3% de los estudiantes reporta haber visto venta o traspaso de drogas en las cercanías de su establecimiento.'
  },
  {
    question: '¿Cuál es la categoría más frecuente mencionada por los docentes en el estudio?',
    options: ['Acciones de seguimiento', 'Protocolo interno', 'Enfoque docente', 'Protección de identidad'],
    correct: 2,
    explanation: 'El "Enfoque Docente" (percepción e impacto) es la categoría más frecuente con 72 menciones.'
  },
  {
    question: '¿Qué tensión paradigmática destaca la discusión del artículo?',
    options: [
      'Entre profesores y directivos',
      'Entre enfoque sancionatorio y enfoque de derechos',
      'Entre colegios públicos y privados',
      'Entre padres y estudiantes'
    ],
    correct: 1,
    explanation: 'Existe una tensión entre la lógica normativa/sancionatoria y el enfoque de derechos que exige medidas restitutivas.'
  }
];

export const LIMITATIONS = [
  'Muestra reducida (n=8) limita la generalización.',
  'Ausencia de perspectiva de estudiantes y familias.',
  'Cobertura geográfica limitada al sur de Chile.',
  'Perspectiva unilateral centrada solo en el discurso docente.'
];
