export const ARTICLE_META = {
  id: '3378',
  title: 'Estrategias didácticas para fomentar la participación activa en entornos virtuales mediante paisajes de aprendizaje',
  carouselTitle: 'SA-TA // COSTA RICA',
  subtitle: 'INNOVACIÓN PEDAGÓGICA EN POSGRADO',
  abstract: 'Investigación cualitativa exploratoria sobre la implementación de Paisajes de Aprendizaje en una Maestría de Educación en Costa Rica. El estudio demuestra cómo el diseño instruccional interactivo en Genially y Padlet incrementa la participación en foros de un 33.3% a un 57.1%, reduciendo la fatiga digital y mejorando la autorregulación.',
  authors: 'Saborío-Taylor, S., Álvarez-Chaves, A. & Valdivia-Durán, S.',
  institution: 'Universidad Nacional de Costa Rica',
  doi: '10.21555/rpp.3378',
  volume: 'Vol. 40',
  date: 'Agosto 2025',
  n: 9,
  ageRange: 'Estudiantes de Posgrado (Maestría)',
  context: 'Universidad Nacional de Costa Rica',
  methodology: 'Cualitativo Exploratorio con Triangulación de Datos',
  phases: ['Cuestionario Pre-implementación', '12 Micro-paisajes (12 semanas)', 'Cuestionario Post-implementación']
};

export const LIMITATIONS = [
  'Muestra reducida (n=9) propia de un estudio exploratorio cualitativo.',
  'Tasa de respuesta del 77.8% en el cuestionario post-implementación.',
  'Riesgo de sobrecarga cognitiva si el volumen de herramientas digitales es excesivo.',
];

export const DIMENSIONS = [
  {
    code: 'PART',
    name: 'Participación Activa',
    emoji: '📈',
    desc: 'Incremento neto de 23.8 puntos porcentuales en la participación constante en foros, pasando de 33.3% a 57.1%.',
    highlights: [
      'Alza del 33% al 57% en interacción.',
      'Mejora en la calidad de debates asincrónicos.',
      '71.4% de participación en actividades interactivas.'
    ]
  },
  {
    code: 'MOTIV',
    name: 'Interés y Motivación',
    emoji: '✨',
    desc: 'El 71.4% de los estudiantes se reportó "muy motivado" tras interactuar con el paisaje de aprendizaje.',
    highlights: [
      '85.7% considera los recursos "extremadamente útiles".',
      'Aumento del interés temático del 66% al 71%.',
      'Valoración "excelente" de la diversidad de recursos.'
    ]
  },
  {
    code: 'AUTO',
    name: 'Autorregulación',
    emoji: '🧭',
    desc: 'El diseño estructurado facilitó la organización personal, especialmente beneficioso para estudiantes con diversidad neurológica.',
    highlights: [
      'Soporte crítico para estudiantes con TDAH.',
      'Control total sobre la ruta de aprendizaje.',
      'Claridad y estructura dinámica del contenido.'
    ]
  },
  {
    code: 'DIGIT',
    name: 'Experiencia Digital',
    emoji: '🎨',
    desc: 'El 100% de la muestra nunca había utilizado paisajes de aprendizaje, destacando el impacto de la novedad metodológica.',
    highlights: [
      'Metáfora visual de "burbujas de diálogo".',
      'Uso estratégico de Genially y Padlet.',
      'Navegación flexible y no lineal.'
    ]
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Qué porcentaje de estudiantes de posgrado reportó NUNCA haber usado paisajes de aprendizaje antes del estudio?',
    options: ['25%', '50%', '75%', '100%'],
    correct: 3,
    explanation: 'Un rotundo 100% de la muestra desconocía esta metodología, lo que subraya la importancia del "efecto novedad" y la innovación en posgrado.',
  },
  {
    question: '¿En cuántas semanas se dividió la implementación de los 12 micro-paisajes temáticos?',
    options: ['4 semanas', '8 semanas', '12 semanas', '24 semanas'],
    correct: 2,
    explanation: 'El estudio duró 12 semanas, con una estructura de una ruta temática por semana integrada en la plataforma Genially.',
  },
  {
    question: '¿Qué incremento porcentual aproximado se observó en la participación constante en los foros?',
    options: ['5%', '10%', '24%', '50%'],
    correct: 2,
    explanation: 'La participación constante subió del 33.3% al 57.1%, lo que representa un salto cualitativo de casi 24 puntos porcentuales.',
  },
  {
    question: '¿Cuál fue la metáfora visual principal utilizada en el diseño del paisaje de aprendizaje?',
    options: ['Un mapa del tesoro', 'Burbujas de diálogo', 'Un bosque encantado', 'Un tablero de ajedrez'],
    correct: 1,
    explanation: 'Se utilizó la metáfora de burbujas de diálogo para representar gráficamente los procesos de reflexión dialógica y praxis pedagógica.',
  },
  {
    question: '¿A qué perfil de estudiante benefició específicamente la estructura organizada del paisaje para su control de tareas?',
    options: ['Estudiantes de pregrado', 'Estudiantes con TDAH', 'Estudiantes extranjeros', 'Docentes administrativos'],
    correct: 1,
    explanation: 'El informe destaca el caso de un estudiante con TDAH que encontró en el paisaje una herramienta clave para mantenerse organizado y al día con sus tareas.',
  },
];
