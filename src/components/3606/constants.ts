export const ARTICLE_META = {
  id: '3606',
  title: 'Ajustes razonables y prácticas docentes inclusivas para estudiantes con discapacidad y TEA en educación superior',
  carouselTitle: 'INCLUSIÓN // MÉXICO',
  subtitle: 'LA PARADOJA DE LA BUENA VOLUNTAD',
  abstract: 'Investigación cualitativa que analiza la implementación de ajustes razonables en una Licenciatura en Educación Especial en México. El estudio revela una contradicción crítica: aunque existe una alta sensibilización docente (3.87/4), la inclusión efectiva depende de la voluntad individual y no de protocolos institucionales, evidenciando barreras estructurales que perpetúan desigualdades sistémicas.',
  authors: 'Macías-Rosado, A. G., Ramos-Ramírez, B. N., & Márquez-Cabellos, N. G.',
  institution: 'Universidad de Colima, México',
  doi: '10.21155/rpp.3606',
  volume: 'Vol. 41',
  date: 'Diciembre 2025',
  n: 7,
  context: 'Colima, México (Educación Superior)',
  methodology: 'Cualitativa Interpretativa (GEPIA-A + Entrevistas)',
  phases: ['Diagnóstico Institucional', 'Aplicación GEPIA-A', 'Entrevistas a Profundidad', 'Análisis de Barreras (BAP)']
};

export const LIMITATIONS = [
  'Muestra reducida (7 participantes) que limita la generalización estadística.',
  'Enfoque en un solo programa académico (Educación Especial).',
  'Muestreo por conveniencia que puede introducir sesgos de deseabilidad social.',
  'Estudio transversal que no captura la evolución longitudinal de las trayectorias.',
];

export const DIMENSIONS = [
  {
    code: 'CULTURA',
    name: 'Cultura Inclusiva',
    emoji: '🤝',
    desc: 'Valores de respeto y sensibilización muy altos en el profesorado (3.87/4).',
    highlights: [
      'Voluntad genuina de inclusión.',
      'Reconocimiento de la diversidad.',
      'Compromiso personal docente.'
    ]
  },
  {
    code: 'POLITIC',
    name: 'Política Inexistencia',
    emoji: '📋',
    desc: 'Ausencia crítica de protocolos institucionales y normativas claras de acción.',
    highlights: [
      'Dependencia de la buena voluntad.',
      'Vacío de lineamientos formales.',
      'Falta de apoyo estructural.'
    ]
  },
  {
    code: 'PRACTIC',
    name: 'Práctica Adaptativa',
    emoji: '🛠️',
    desc: 'Ajustes metodológicos improvisados por los docentes ante la falta de recursos.',
    highlights: [
      'Exámenes con apoyo de lectores.',
      'Adaptación de materiales visuales.',
      'Flexibilidad en tiempos y formatos.'
    ]
  },
];

export const GEPIA_DATA = [
  { label: 'Sensibilización', value: 3.87, color: 'bg-emerald-500' },
  { label: 'Evaluación', value: 3.75, color: 'bg-emerald-400' },
  { label: 'Metodología', value: 3.50, color: 'bg-emerald-300' },
  { label: 'Planeación', value: 3.53, color: 'bg-emerald-300' },
  { label: 'Vínculo Familiar', value: 1.75, color: 'bg-rose-500' },
];

export const BARRIERS = [
  { title: 'Estructurales', desc: 'Infraestructura inaccesible y falta de biblioteca especializada.' },
  { title: 'Normativas', desc: 'Inexistencia de protocolos oficiales de atención a la discapacidad.' },
  { title: 'Didácticas', desc: 'Prácticas homogeneizadas y evaluaciones de difícil adaptación.' },
  { title: 'Comunicativas', desc: 'Carencia de habilidades en LSM y Braille por parte del personal.' },
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Cuál fue el hallazgo principal sobre la implementación de los ajustes razonables?',
    options: [
      'Están rígidamente estipulados por la ley universitaria.',
      'Dependen mayormente de la iniciativa personal de los docentes.',
      'Son automáticos y digitales en toda la institución.',
      'Nadie los realiza por miedo a sanciones.'
    ],
    correct: 1,
    explanation: 'El estudio concluye que, ante la falta de protocolos, es la voluntad individual del profesor la que sostiene la inclusión.',
  },
  {
    question: '¿Qué subescala del GEPIA-A obtuvo la puntuación más baja (1.75/4)?',
    options: ['Evaluación', 'Sensibilización', 'Vinculación con familias', 'Condiciones físicas'],
    correct: 2,
    explanation: 'La vinculación con las familias es el área más descuidada en el nivel superior según los resultados del GEPIA-A.',
  },
  {
    question: '¿Qué dimensión del modelo de educación inclusiva reportó el puntaje más alto (3.87)?',
    options: ['Políticas inclusivas', 'Cultura (Sensibilización)', 'Infraestructura', 'Sistemas de comunicación'],
    correct: 1,
    explanation: 'La cultura inclusiva y sensibilización de los docentes es el punto más fuerte del programa analizado.',
  },
  {
    question: '¿Cuál es el riesgo de la "Inclusión Condicionada" mencionada en el estudio?',
    options: [
      'Que solo se incluya a quienes pagan más.',
      'Que la inclusión se limite a quienes no tienen compromiso intelectual (capacitismo sutil).',
      'Que se condicione la entrada por género.',
      'Que solo se acepte a quienes saben LSM.'
    ],
    correct: 1,
    explanation: 'Los docentes expresaron que es más fácil incluir cuando no se compromete el nivel intelectual, lo que sugiere un capacitismo académico latente.',
  },
  {
    question: '¿Qué método innovador utilizó un docente para enseñar LSM a una estudiante ciega?',
    options: ['Audio-descripción', 'Lengua de Señas Táctil (Digital)', 'Videos con subtítulos', 'Braille'],
    correct: 1,
    explanation: 'La docente utilizó un método táctil (señas digitales) para superar la barrera sensorial de la estudiante.',
  },
];
