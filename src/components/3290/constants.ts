export const ARTICLE_META = {
  id: '3290',
  title: 'Desafíos en el aprendizaje híbrido en una universidad del suroccidente colombiano',
  carouselTitle: 'HYBRID ODYSSEY // COLOMBIA',
  subtitle: 'LA PARADOJA DE LA INTERACCIÓN EN LA MULTIMODALIDAD',
  abstract: 'Investigación cualitativa fenomenológica que analiza los desafíos docentes en la educación híbrida post-pandemia. El estudio revela que la principal barrera no es técnica, sino pedagógica: el 47% de los docentes lucha por integrar a estudiantes presenciales y virtuales en una experiencia de aprendizaje unificada.',
  authors: 'Claudia-Alexandra Roldán-Morales & Andrés-Fernando Torres-Tovar',
  institution: 'Universidad Autónoma de Occidente (Colombia)',
  doi: '10.21555/rpp.3290',
  volume: 'Vol. 39',
  date: 'Febrero 2025',
  n: 23,
  ageRange: 'Docentes Universitarios (26-45 años)',
  context: 'Suroccidente Colombiano',
  methodology: 'Cualitativo Fenomenológico con análisis de contenido en Atlas.ti',
  phases: ['Cuestionario Digital (Marzo 2023)', 'Grupos Focales', 'Análisis en Atlas.ti 23']
};

export const LIMITATIONS = [
  'Tamaño muestral reducido (n=23) limitado a una única institución.',
  'Enfoque exclusivo en la percepción docente, omitiendo la visión estudiantil.',
  'La naturaleza subjetiva de los desafíos reportados requiere verificación empírica adicional.',
];

export const DIMENSIONS = [
  {
    code: 'INTER',
    name: 'Interacción Split',
    emoji: '👥',
    desc: 'El 47% de docentes reporta dificultades críticas para vincular a estudiantes remotos con presenciales en actividades colaborativas.',
    highlights: [
      'Brecha de conexión entre aula física y virtual.',
      'Dificultad en asignación de turnos y feedback.',
      'Atención dividida: "conducir dos clases a la vez".'
    ]
  },
  {
    code: 'MOTIV',
    name: 'Compromiso Atenuado',
    emoji: '💤',
    desc: 'El 26% identifica la baja participación y falta de motivación como una barrera estructural del modelo híbrido.',
    highlights: [
      'Silencios prolongados en el entorno virtual.',
      'Sensación de "clase fantasma" para el docente.',
      'Dificultad en producción oral (especialmente en idiomas).'
    ]
  },
  {
    code: 'TECH',
    name: 'Infraestructura',
    emoji: '🎤',
    desc: 'Aunque el 27% no reporta problemas, el audio (micrófonos) y la sincronización siguen siendo puntos de dolor técnicos (18%).',
    highlights: [
      'Problemas recurrentes de audio y micrófono.',
      'Lentitud ocasional en acceso a LMS.',
      'Desafío en gestión de permisos de plataforma.'
    ]
  },
  {
    code: 'PLAN',
    name: 'Carga Docente',
    emoji: '🧠',
    desc: 'La planificación se vuelve "más exigente", requiriendo una selección de herramientas mucho más estratégica y diversa.',
    highlights: [
      'Aumento en tiempo de preparación de material.',
      'Necesidad de formación pedagógica, no solo técnica.',
      'Adaptación de evaluaciones para ambos entornos.'
    ]
  },
];

export const QUOTES = [
  {
    text: "Un desafío fue poder vincular a los estudiantes remotos con los presenciales, especialmente al trabajar en actividades colaborativas.",
    author: "Participante 20"
  },
  {
    text: "El mayor desafío ha sido intentar atender a estudiantes presenciales y virtuales simultáneamente.",
    author: "Participante 16"
  },
  {
    text: "Asegurar que los estudiantes presentes en el aula y los remotos tengan iguales oportunidades para interactuar.",
    author: "Participante 8"
  },
  {
    text: "Se vuelve más exigente en términos de la selección de herramientas y el desarrollo de actividades.",
    author: "Participante 2"
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Cuál fue el principal desafío pedagógico reportado por casi la mitad (47%) de los docentes universitarios?',
    options: ['Falta de conexión a internet', 'Dificultad en la interacción presencial-virtual', 'Baja calidad de los materiales', 'Problemas de disciplina'],
    correct: 1,
    explanation: 'El 47% de los profesores subrayó que integrar la dinámica entre quienes están en el aula física y quienes se conectan remotamente es la barrera más compleja de superar.',
  },
  {
    question: 'Según el estudio, ¿qué porcentaje de docentes reportó NO haber tenido problemas tecnológicos?',
    options: ['5%', '15%', '27%', '50%'],
    correct: 2,
    explanation: 'Un 27% reportó condiciones técnicas favorables, lo que sugiere que en muchos casos el desafío es pedagógico y no simplemente falta de equipos.',
  },
  {
    question: '¿Qué herramienta de análisis se utilizó para procesar los datos de los 23 profesores?',
    options: ['SPSS v25', 'Atlas.ti 23', 'Excel avanzado', 'Python / R'],
    correct: 1,
    explanation: 'La investigación aplicó un análisis de contenido (Krippendorff) utilizando el software Atlas.ti 23 con un esquema de 4 categorías y 22 códigos.',
  },
  {
    question: '¿Cuál fue el problema técnico específico más mencionado (18%) después de la "toma de plataforma"?',
    options: ['Cámara web', 'Luz del aula', 'Problemas de micrófono / audio', 'Teclado'],
    correct: 2,
    explanation: 'El audio y los micrófonos representaron el 18% de las quejas técnicas, siendo una barrera crítica para la comunicación fluida entre ambos mundos.',
  },
  {
    question: '¿Qué perfil tenían mayoritariamente los docentes participantes en la muestra?',
    options: ['Estudiantes de pregrado', 'Técnicos administrativos', 'Docentes con posgrado nivel maestría', 'Directores de facultad'],
    correct: 2,
    explanation: 'La muestra consistió en 23 profesores con formación de maestría, predominantemente en el rango de edad de 26 a 45 años.',
  },
];
