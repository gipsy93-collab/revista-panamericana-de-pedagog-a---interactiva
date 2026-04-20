export const ARTICLE_META = {
  id: '3411',
  title: 'Mantenerse en la escuela: desafiliación en un bachillerato tecnológico',
  carouselTitle: 'DESERCIÓN // MÉXICO',
  subtitle: 'PREDICTORES DE PERMANENCIA EN EL CETIS 74',
  abstract: 'Análisis estadístico predictivo sobre la deserción escolar temprana en un bachillerato tecnológico de Ensenada, México. El estudio de una cohorte de 500 estudiantes revela una alarmante tasa de desafiliación del 28% tan solo en el primer semestre, identificando el promedio de secundaria y el capital digital como los principales factores de protección.',
  authors: 'José-Alfonso Jiménez-Moreno & Zorayda Feria-Juárez',
  institution: 'UNAM / CETis 74 (Ensenada, Baja California)',
  doi: '10.21555/rpp.3411',
  volume: 'Vol. 41',
  date: 'Agosto 2026',
  n: 500,
  cohort: '2023-2025',
  context: 'Ensenada, Baja California (México)',
  methodology: 'Empírico Cuantitativo (Regresión Logística)',
  phases: ['Recolección Cohorte 2023', 'Análisis Estadístico Predictivo', 'Evaluación de Factores de Desafiliación']
};

export const LIMITATIONS = [
  'El modelo explica solo el 8.9% de la varianza; existen factores externos no capturados.',
  'Uso exclusivo de registros administrativos de control escolar.',
  'Falta de variables cualitativas sobre clima escolar y dinámicas familiares.',
];

export const DIMENSIONS = [
  {
    code: 'ALERTA',
    name: 'Desafiliación Crítica',
    emoji: '🚨',
    desc: 'El 28% de los estudiantes (141 de 500) causaron baja entre el primero y segundo semestre.',
    highlights: [
      'Alarma temprana: el 1er semestre es el más hostil.',
      'Casi 3 de cada 10 jóvenes rompen el vínculo escolar.',
      'Tasa de abandono triplica la media nacional oficial.'
    ]
  },
  {
    code: 'ACADEM',
    name: 'Peso del Promedio',
    emoji: '📈',
    desc: 'El promedio de secundaria es el mayor predictor de permanencia (OR 2.042).',
    highlights: [
      'Cada punto extra duplica la probabilidad de quedarse.',
      'La deserción se construye en la historia escolar previa.',
      'Explica el 8.9% del fenómeno de permanencia.'
    ]
  },
  {
    code: 'DIGIT',
    name: 'Capital Tecnológico',
    emoji: '💻',
    desc: 'Tener computadora en casa actúa como un factor protector decisivo (OR 0.399).',
    highlights: [
      '2.5 veces más probabilidades de éxito con equipo propio.',
      'Smartphone e Internet NO son predictores significativos.',
      'La brecha es de capacidad de producción, no solo conexión.'
    ]
  },
  {
    code: 'GENERO',
    name: 'Mito del Género',
    emoji: '⚖️',
    desc: 'Aunque los hombres abandonan más (58%), el sexo solo explica el 3.1% de la varianza.',
    highlights: [
      'Mayor proporción de bajas masculinas.',
      'El género NO es determinante estructural.',
      'Diferencias irrelevantes en modelos predictivos robustos.'
    ]
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Qué porcentaje de estudiantes causó baja antes de llegar al segundo semestre en el CETis 74?',
    options: ['10%', '15%', '28%', '45%'],
    correct: 2,
    explanation: 'El estudio documentó una tasa del 28% de desafiliación (141 estudiantes de una muestra de 500) en el periodo inicial.',
  },
  {
    question: 'Según el modelo de regresión logística, ¿cuál es el factor que DUPLICA la probabilidad de permanencia?',
    options: ['Beca gubernamental', 'Promedio de secundaria', 'Vivir cerca de la escuela', 'Tener smartphone'],
    correct: 1,
    explanation: 'El promedio de secundaria tuvo un Odds Ratio de 2.042, significando que cada punto adicional es un multiplicador de éxito.',
  },
  {
    question: '¿Cuál dispositivo digital resultó ser el ÚNICO predictor significativo de permanencia escolar?',
    options: ['Smartphone', 'Tablet', 'Computadora en casa', 'Consola de juegos'],
    correct: 2,
    explanation: 'Solo la computadora permite la producción académica técnica necesaria; smartphones e internet general no mostraron efecto protector.',
  },
  {
    question: '¿Qué porcentaje de la "razón del abandono" logra explicar este modelo estadístico?',
    options: ['8.9%', '25%', '50%', '90%'],
    correct: 0,
    explanation: 'El modelo explica solo el 8.9% (Nagelkerke); el otro 91.1% depende de factores invisibles como el clima escolar o la situación económica.',
  },
  {
    question: '¿En qué estado de México se realizó esta investigación de corte transversal?',
    options: ['CDMX', 'Baja California', 'Jalisco', 'Nuevo León'],
    correct: 1,
    explanation: 'El estudio se centró en el CETis 74 ubicado en Ensenada, Baja California, una zona con tasas de abandono superiores a la media nacional.',
  },
];

export const PREDICTORS = [
  {
    icon: 'BookOpen',
    color: 'text-blue-400',
    title: 'PROMEDIO_SEC',
    value: 'OR 2.04',
    description: 'Cada punto adicional en el promedio de secundaria <strong>duplica</strong> las probabilidades de permanencia.'
  },
  {
    icon: 'Monitor',
    color: 'text-rose-500',
    title: 'CAPITAL_DIGITAL',
    value: 'OR 0.39',
    description: 'Contar con una computadora propia en casa reduce el riesgo de deserción en un <strong>60%</strong>.'
  },
  {
    icon: 'Users',
    color: 'text-[#F4A261]',
    title: 'EJE_GÉNERO',
    value: '3.1%',
    description: 'El sexo del estudiante solo explica una mínima parte de la varianza, no siendo un factor determinante.'
  }
];

// Datos extraídos directamente de las tablas del PDF original
export const STUDY_DATA = {
  cohorte: {
    total: 500,
    bajas: 141,
    activos: 359,
    porcentajeBaja: 28.2,
    porcentajeActivo: 71.8,
  },
  sexo: {
    hombres: { total: 232, bajas: 82, pctBajas: 58.16, activos: 150, pctActivos: 41.78 },
    mujeres: { total: 268, bajas: 59, pctBajas: 41.84, activos: 209, pctActivos: 58.22 },
  },
  secundariaOrigen: [
    { tipo: 'Secundaria técnica', frecuencia: 225, porcentaje: 45.0 },
    { tipo: 'Secundaria general', frecuencia: 181, porcentaje: 36.2 },
    { tipo: 'Sin datos', frecuencia: 69, porcentaje: 13.8 },
    { tipo: 'Telesecundaria', frecuencia: 25, porcentaje: 5.0 },
  ],
  modelosRegresion: [
    { nombre: 'Sexo', r2Nagelkerke: 3.1, or: 0.516, p: 0.001, significativo: true },
    { nombre: 'Promedio', r2Nagelkerke: 8.9, or: 2.042, p: 0.000, significativo: true },
    { nombre: 'Computadora', r2Nagelkerke: 5.7, or: 0.399, p: 0.000, significativo: true },
  ],
  capitalDigital: {
    internet: 85.82,
    sinComputadora: 38.79,
    sinTablet: 91.49,
    smartphone: 70.92,
  },
};

