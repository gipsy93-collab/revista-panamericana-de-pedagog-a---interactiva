export const ARTICLE_META = {
  id: "3476",
  title: "Docentes e inclusión educativa en la educación media superior",
  subtitle: "Hallazgos de una revisión sistemática (2015-2025)",
  authors: "Pacheco-Gómez, A. & Cisneros-Cohernour, E. J.",
  institution: "Universidad Autónoma de Yucatán, México",
  journal: "Revista Panamericana de Pedagogía, n. 41 (2026)",
  doi: "10.21555/rpp.3476",
  abstract: "Esta revisión sistemática analiza 23 estudios empíricos publicados entre 2015 y 2025 sobre las experiencias docentes en la inclusión educativa. El hallazgo central revela una 'fragilidad institucional': la inclusión depende mayoritariamente de la voluntad individual del profesor, enfrentando barreras estructurales como la rigidez curricular y la falta de formación situada, lo que compromete la sostenibilidad de las trayectorias escolares para estudiantes con necesidades especiales.",
  stats: {
    sample: "23 Estudios",
    period: "2015-2025",
    global: "17% Leyes",
    risk: "2.5x Riesgo"
  }
};

export const DIMENSIONS = [
  {
    title: "La Voluntad Individual vs. Sistema",
    description: "Las experiencias exitosas recaen en el compromiso personal del docente, careciendo de un respaldo institucional articulado.",
    highlight: "Sostenibilidad en Riesgo",
    quote: "La inclusión depende mayoritariamente de la disposición del docente ante la falta de marcos institucionales.",
    source: "Pacheco-Gómez (2026)"
  },
  {
    title: "Barreras Estructurales",
    description: "Rigidez curricular y horarios inflexibles actúan como muros invisibles que impiden la personalización del aprendizaje.",
    highlight: "Solo 17% Leyes Plenas",
    quote: "La fragmentación de recursos y la segmentación por rendimiento son barreras culturales persistentes.",
    source: "UNESCO 2020"
  },
  {
    title: "Transversalidad Formativa",
    description: "La inclusión no debe ser un módulo secundario; requiere una formación situada y reflexiva para todos los pedagogos.",
    highlight: "Gap Formativo",
    quote: "La formación debe pasar de talleres aislados a comunidades de práctica profesional.",
    source: "Hallazgos de Revisión"
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: "Según el informe UNESCO 2020 citado, ¿qué porcentaje de países tiene leyes que promueven la inclusión plena?",
    options: ["5%", "17%", "35%", "50%"],
    correctAnswer: 1,
    feedback: "Solo el 17% de los países cuentan con marcos legales que garantizan la inclusión plena en escuelas regulares."
  },
  {
    question: "¿Cuántos artículos científicos conformaron el corpus final de esta revisión sistemática?",
    options: ["10 estudios", "23 estudios", "55 estudios", "228 estudios"],
    correctAnswer: 1,
    feedback: "Tras un riguroso proceso PRISMA que inició con 228 registros, 23 estudios empíricos cumplieron con todos los criterios de calidad."
  },
  {
    question: "¿Qué factor se identifica como el principal motor actual de la inclusión, a falta de apoyo institucional?",
    options: ["El uso de Inteligencia Artificial", "La voluntad individual del docente", "Las donaciones internacionales", "La infraestructura física"],
    correctAnswer: 1,
    feedback: "El estudio señala que la inclusión hoy depende críticamente de la disposición individual del profesor, lo cual arriesga su continuidad a largo plazo."
  }
];
