export const ARTICLE_META = {
  id: "3508",
  title: "Las actitudes docentes frente a la inclusión del TEA",
  subtitle: "Estudio comparado entre España y Ecuador",
  authors: "Gallardo-Herrerías, C.",
  institution: "Universidad de Almería, España",
  journal: "Revista Panamericana de Pedagogía, n. 41 (2026)",
  doi: "10.21555/rpp.3508",
  abstract: "Esta investigación cualitativa explora cómo las actitudes y prejuicios de los docentes influyen en la inclusión educativa de estudiantes con Trastorno del Espectro Autista (TEA). Mediante un estudio comparado entre España y Ecuador, se evidencia que la disposición emocional y las creencias previas son más determinantes que el nivel de formación académica. Los resultados subrayan una tensión constante entre el cumplimiento normativo curricular y el derecho a una educación personalizada.",
  stats: {
    sample: "10 Docentes",
    geography: "España/Ecuador",
    focus: "TEA",
    rigidity: "80% Currículo"
  }
};

export const DIMENSIONS = [
  {
    title: "Actitud vs. Título",
    description: "La efectividad inclusiva no depende de la formación académica formal, sino de la deconstrucción de prejuicios personales.",
    highlight: "Emoción > Academia",
    quote: "La disposición emocional es más predictiva que los títulos universitarios.",
    source: "Gallardo-Herrerías (2026)"
  },
  {
    title: "Rigidez Curricular",
    description: "En Ecuador, la prioridad absoluta es el cumplimiento del programa oficial, limitando la flexibilidad que el TEA requiere.",
    highlight: "80% Prioridad Legal",
    quote: "El currículo es la base que afecta directamente a la acción pedagógica.",
    source: "PedEcu5"
  },
  {
    title: "Vulnerabilidad de Recursos",
    description: "Los docentes se sienten desamparados ante la falta de personal especializado y materiales adaptados al espectro.",
    highlight: "Falta de Apoyo",
    quote: "Somos vulnerables debido a la falta de recursos humanos y materiales.",
    source: "Testimonio E1"
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: "¿Cuál es el factor que, según el estudio, predice mejor una actitud inclusiva exitosa?",
    options: ["Los años de estudio de posgrado", "La disposición emocional y creencias previas", "El sueldo percibido", "La cantidad de alumnos en el aula"],
    correctAnswer: 1,
    feedback: "El estudio concluye que las variables subjetivas (emociones/creencias) son más determinantes que la formación académica formal."
  },
  {
    question: "¿Qué porcentaje de docentes ecuatorianos prioriza el cumplimiento del currículo oficial sobre la adaptación?",
    options: ["20%", "40%", "80%", "100%"],
    correctAnswer: 2,
    feedback: "El 80% de los docentes en Ecuador encuestados priorizan el marco legal y curricular oficial."
  },
  {
    question: "¿Qué país de la muestra mostró una mayor tendencia a la flexibilidad hacia el aprendizaje significativo?",
    options: ["Ecuador", "España", "Ambos por igual", "Ninguno de los dos"],
    correctAnswer: 1,
    feedback: "Los docentes españoles de la muestra mostraron una mayor voluntad de adaptar contenidos hacia la funcionalidad social."
  }
];
