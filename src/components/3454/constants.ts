export const ARTICLE_META = {
  id: '3454',
  doi: '10.21555/rpp.3454',
  title: 'Inclusión y cultura de paz en la universidad: percepciones de estudiantes en contexto de violencia delictiva',
  carouselTitle: 'CULTURA DE PAZ // COLIMA',
  authors: 'Briseda-Noemí Ramos-Ramírez, Norma-Guadalupe Márquez-Cabellos',
  institution: 'Universidad de Colima, México',
  volume: '40',
  date: '14-08-2025',
  n: 200,
  abstract: 'Análisis de la percepción estudiantil en Colima, México —región con altos índices de criminalidad—. El estudio revela una brecha entre el discurso institucional y la práctica operativa, donde el 92.7% de los estudiantes demanda una integración real de la cultura de paz en el currículo universitario.'
};

export const METHODOLOGY = {
  design: 'Cualitativo Exploratorio',
  approach: 'Análisis Mixto (SPSS + Text Analytics)',
  sample: '200 Estudiantes de 20 Licenciaturas (Universidad de Colima)',
  instruments: 'Cuestionario Validado por Expertos (18 ítems)',
  analysis: 'Análisis descriptivo y clasificación cualitativa en 7 categorías'
};

export const DIMENSIONS = [
  {
    code: 'VE',
    name: 'Violencia en el Entorno',
    emoji: '🏘️',
    desc: 'Percepción de criminalidad y seguridad en espacios públicos y privados.',
    highlight: '64.6% de los estudiantes han sido testigos directos de eventos de violencia criminal.'
  },
  {
    code: 'AU',
    name: 'Acciones Universitarias',
    emoji: '🏛️',
    desc: 'Efectividad de estrategias institucionales y presencia de paz en el currículo.',
    highlight: 'Solo el 55.9% identifica acciones de cultura de paz en sus carreras.'
  },
  {
    code: 'CE',
    name: 'Contribución Estudiantil',
    emoji: '🤝',
    desc: 'Acciones propuestas por estudiantes para promover la inclusión y la paz.',
    highlight: '70% de los estudiantes solicita más cursos y conferencias formativas.'
  },
  {
    code: 'JP',
    name: 'Justicia Social',
    emoji: '⚖️',
    desc: 'Reconocimiento y redistribución como bases para una sociedad justa.',
    highlight: '92.7% considera urgente promover la paz en actividades extracurriculares.'
  }
];

export const DATA_HIGHLIGHTS = [
  { label: 'Testigos de violencia', value: 64.6, unit: '%' },
  { label: 'Perciben criminalidad alta', value: 74.9, unit: '%' },
  { label: 'Seguros en la Universidad', value: 43.0, unit: '%' }
];

export const TESTIMONIALS = [
  {
    quote: 'El 92.7% de los estudiantes considera necesario promover una cultura de paz e inclusión tanto en las asignaturas como en las actividades extracurriculares.',
    author: 'Página 12',
    role: 'Evidencia Estadística'
  },
  {
    quote: 'La autonomía capacita a la persona para reafirmar su capacidad de actuar frente a la violencia, la indiferencia, la injusticia y la violación de derechos.',
    author: 'Cerdas-Agüero (Citado)',
    role: 'Marco Teórico'
  },
  {
    quote: 'Existe una brecha entre el discurso institucional y la implementación práctica en las aulas.',
    author: 'Ramos & Márquez',
    role: 'Conclusión Central'
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Qué porcentaje de estudiantes considera necesario promover la cultura de paz en el currículo?',
    options: ['55.9%', '78.2%', '92.7%', '43%'],
    correct: 2,
    explanation: 'Un abrumador 92.7% de los encuestados demanda la inclusión de cultura de paz en sus asignaturas.'
  },
  {
    question: '¿Cómo ha sido clasificado el contexto social de Colima en el estudio?',
    options: [
      'De violencia moderada',
      'Como una de las ciudades más violentas del mundo',
      'Sin impacto significativo en la universidad',
      'Como zona de paz prioritaria'
    ],
    correct: 1,
    explanation: 'Colima fue clasificada como la ciudad más violenta del mundo en 2022, con una tasa de 181.94 homicidios por cada 100k habitantes.'
  },
  {
    question: '¿Qué porcentaje de estudiantes reconoce el rol del docente como promotor de paz?',
    options: ['20%', '55.9%', '77.7%', '90%'],
    correct: 2,
    explanation: 'El 77.7% de los estudiantes reconoce y valora las acciones de sus docentes para promover la paz.'
  },
  {
    question: '¿Cuál es la principal demanda estudiantil para promover la paz?',
    options: [
      'Más guardias de seguridad',
      'Más cursos, conferencias y pláticas',
      'Cierre de los campus nocturnos',
      'Menos tareas académicas'
    ],
    correct: 1,
    explanation: 'El 70% de las propuestas estudiantiles se enfocan en la necesidad de más formación y conferencias sobre cultura de paz.'
  }
];

export const LIMITATIONS = [
  'Muestra limitada a dos campus de una sola universidad.',
  'Falta de desglose por género en un contexto de violencia diferenciada.',
  'Diseño transversal que no captura cambios temporales.',
  'Sesgo potencial de auto-reporte en percepciones de seguridad.'
];
