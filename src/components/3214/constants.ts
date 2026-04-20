export const ARTICLE_META = {
  id: '3214',
  title: 'La innovación pedagógica y su aporte en la formación de bachilleres técnicos agropecuarios para implementar prácticas sostenibles',
  carouselTitle: 'AGRO INNOVACIÓN // MANABÍ',
  subtitle: 'TECNOLOGÍA Y SOSTENIBILIDAD EN EL AGRO RURAL',
  abstract: 'Investigación cuasiexperimental cuantitativa y cualitativa desarrollada en Manabí, Ecuador, sobre la efectividad de la innovación pedagógica en la formación técnica agropecuaria. El estudio demuestra cómo el aprendizaje experiencial y el uso de aplicaciones móviles incrementan en un 20% la motivación y comprensión del desarrollo sostenible en bachilleres rurales.',
  authors: 'Celso Gustavo Dueñas Basurto & Eura María Zambrano Vera',
  institution: 'Universidad Laica "Eloy Alfaro" de Manabí (Ecuador)',
  doi: '10.21555/rpp.3214',
  volume: 'Vol. 39',
  date: 'Febrero 2025',
  n: 119,
  ageRange: 'Estudiantes, Padres y Docentes',
  context: 'UEF San Isidro, Manabí, Ecuador',
  methodology: 'Cuasiexperimental, mixto, exploratorio y descriptivo',
  phases: ['Pre-test (1 sem)', 'Intervención (12 sem)', 'Post-test (1 sem)']
};

export const LIMITATIONS = [
  'Muestra reducida a una única institución educativa rural.',
  'Estudio dependiente de un contexto muy específico (20% de establecimientos).',
  'Intervención cuasiexperimental de solo 12 semanas (posible efecto novedad).',
  'Falta de grupo de control estricto para aislar variables macroeconómicas.',
];

export const DIMENSIONS = [
  {
    code: 'APP',
    name: 'Apps Agrícolas',
    emoji: '🌾',
    desc: 'Crecimiento del +20% en el uso de aplicaciones móviles especializadas tras la intervención, superando barreras de conectividad rural.',
    highlights: [
      'Alza del 20% al 40% en apps agro-técnicas.',
      'Sustitución de RRSS por utilidades productivas.',
      'Facilidad de uso en zonas con baja conectividad.'
    ]
  },
  {
    code: 'SOST',
    name: 'Compromiso Ecológico',
    emoji: '🌱',
    desc: 'La motivación por implementar prácticas sostenibles experimentó un salto cuantitativo (+20% categorizado como "Mucho").',
    highlights: [
      'Valores y actitudes responsables fortalecidas.',
      'Mayor disposición hacia proyectos de post-grado.',
      'Comprensión holística: Economía, Social y Ambiental.'
    ]
  },
  {
    code: 'EXP',
    name: 'Aprendizaje Experiencial',
    emoji: '🚜',
    desc: 'Las salidas de campo y laboratorios vivos lideraron como la estrategia pedagógica de mayor preferencia global (45%).',
    highlights: [
      'Preferencia mayoritaria: 45%.',
      'Conexión profunda entre teoría y práctica en fincas.',
      'Fomento de la reflexión crítica en territorio.'
    ]
  },
  {
    code: 'BRECHA',
    name: 'Retos Estructurales',
    emoji: '⚠️',
    desc: 'El 70% de docentes reportan escasez crítica de recursos e infraestructura para sostener estos marcos de innovación.',
    highlights: [
      '70%: Falta de recursos y tiempo.',
      '60%: Necesidad de mayor capacitación docente.',
      '40%: Resistencia al cambio institucional.'
    ]
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: 'Según los resultados post-test, ¿qué herramienta tecnológica logró el mayor aumento de uso (+20%) entre los estudiantes rurales?',
    options: ['Redes Sociales', 'Simuladores y herramientas digitales', 'Aplicaciones móviles para agricultura', 'Plataformas educativas en línea (Moodle)'],
    correct: 2,
    explanation: 'El uso de aplicaciones móviles repuntó enormemente, probando que el celular es un puente de acceso crítico en zonas con conectividad asimétrica e infraestructura computacional pobre.',
  },
  {
    question: '¿Qué porcentaje de docentes indicó que la "Falta de recursos y tiempo" dificulta la innovación sostenible?',
    options: ['30%', '40%', '60%', '70%'],
    correct: 3,
    explanation: 'Un crítico 70% identificó esto como la barrera principal, evidenciando una brecha estructural entre los planes curriculares teóricos y las limitantes de aula real.',
  },
  {
    question: '¿Cuál fue la principal metodología favorecida por los estudiantes (casi la mitad) a lo largo del estudio en técnicas agropecuarias?',
    options: ['Lectura Comprensiva', 'Aprendizaje Experiencial (proyectos en fincas)', 'Clases Magistrales Virtuales', 'Trabajo Autónomo'],
    correct: 1,
    explanation: 'El 45% de los alumnos en post-test indicaron que "meter las manos en la tierra" y conectar conceptos teóricos con dinámicas en fincas era su formato predilecto de asimilación.',
  },
  {
    question: 'El tipo de estudio aplicado al proceso escolar del bachillerato agropecuario fue:',
    options: ['Totalmente bibliográfico y exploratorio', 'Estudio Cuasiexperimental mixto con fases pre-test y post-test', 'Longitudinal prospectivo a 5 años', 'Ensayo Clínico Aleatorizado'],
    correct: 1,
    explanation: 'Emplearon métodos mixtos mediante una matriz cuasiexperimental, tomando mediciones previas y posteriores para diagnosticar el impacto real de la innovación docente e integrar datos numéricos con entrevistas de campo.',
  },
  {
    question: '¿Cómo cambió la percepción y nivel de confianza de los padres sobre el nuevo marco metodológico aplicado a sus hijos?',
    options: ['Existió una disminución en la satisfacción al cambiarles la educación rígida', 'Aumentó en un 10% el nivel "Muy satisfechos"', 'La mayoría se declaró totalmente insatisfecha con el aprendizaje', 'Sus indicadores se mantuvieron estáticos sin variaciones'],
    correct: 1,
    explanation: 'La categoría de padres "Muy Satisfechos" registró un aumento neto del +10%. Conectar las técnicas agropecuarias con herramientas modernas despertó su confianza en la pertinencia del modelo formativo para sus hijos.',
  },
];
