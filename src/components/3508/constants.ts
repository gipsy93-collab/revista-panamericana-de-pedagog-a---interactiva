import { QuizQuestion, Barrier, KeyStat, Quote } from './types';

export const ARTICLE_DATA = {
  title: "Las actitudes docentes frente a la inclusión educativa del TEA",
  author: "Celia Gallardo-Herrerías",
  institution: "Universidad de Almería, España",
  doi: "10.21555/rpp.3508",
  volume: "N° 41 (2026)",
  centralFinding: "Las actitudes del profesorado hacia la inclusión del TEA no dependen principalmente de su nivel de formación académica, sino de un conjunto de variables derivadas de preconcepciones y prejuicios personales.",
  introduction: {
    context: "El artículo se sitúa en el corazón de una tensión educativa global: la brecha entre la retórica inclusiva de los sistemas escolares y la realidad cotidiana del aula. La educación es un derecho humano universal, pero su implementación efectiva para personas con diversidad funcional —especialmente aquellas con TEA— enfrenta obstáculos sistémicos y culturales.",
    problem: "Determinar si las actitudes del profesorado influyen significativamente en la respuesta educativa ofrecida a los niños con dificultades de aprendizaje y participación.",
    objectives: [
      "Identificar las actitudes predominantes del profesorado que interactúa con alumnado con TEA en sistemas educativos de España y Ecuador.",
      "Analizar el impacto de las actitudes del profesorado en la planificación y organización de la respuesta educativa dirigida al alumnado con TEA."
    ]
  },
  methodology: {
    type: "Investigación cualitativa con diseño descriptivo de método mixto. Estudio comparativo internacional (España-Ecuador).",
    sample: {
      total: 10,
      spain: 7,
      ecuador: 3,
      criteria: "Mínimo 3 años de experiencia; tener al menos un alumno con TEA o sospecha de TEA en el aula"
    },
    demographics: {
      age: ["21-30 (1)", "31-40 (5)", "41-50 (3)", "51-60 (1)"],
      gender: { female: "60% (6)", male: "40% (4)" },
      education: { diploma: "60% (6)", master: "30% (3)", phd: "10% (1)" },
      centerType: { public: "70% (7)", private: "20% (2)", charter: "10% (1)" }
    },
    instruments: [
      "Entrevistas semiestructuradas en profundidad",
      'Cuestionario "Mi Pensamiento Sobre la Inclusión" (MTAI) adaptado de Kielblock y Woodcock (2023)',
      "Sección demográfica (10 preguntas)"
    ]
  },
  results: {
    spainVsEcuador: {
      priority: { ecuador: "80% priorizan cumplimiento del currículo oficial", spain: "Mayor flexibilidad hacia aprendizaje significativo" },
      focus: { ecuador: "Cumplimiento normativo", spain: "Funcionalidad y sentido de los contenidos" },
      adaptation: { ecuador: "Resistencia a modificar contenidos", spain: "Voluntad de adaptar a intereses del estudiante" }
    },
    barriers: [
      { title: "Falta de recursos", desc: "Material didáctico especializado y personal de apoyo insuficiente." },
      { title: "Formación insuficiente", desc: "No todos los docentes reciben preparación para implementar ajustes curriculares." },
      { title: "Currículo rígido", desc: "Tensión entre estandarización y necesidades individualizadas." },
      { title: "Incertidumbre", desc: "Sensación de incertidumbre ante las nuevas directrices nacionales de inclusión." }
    ] as Barrier[],
    keyStats: [
      { label: "Docentes ecuatorianos en currículo", value: "80%", note: "Priorizan cumplimiento sobre adaptación" },
      { label: "Nivel de formación", value: "60%", note: "Con diplomatura universitaria" },
      { label: "Centros públicos", value: "70%", note: "Representatividad del sector público" },
      { label: "Factor determinante", value: "7/10", note: "Coinciden en que la gravedad del autismo determina la metodología" }
    ] as KeyStat[],
    sampleData: [
      { name: 'España', value: 7 },
      { name: 'Ecuador', value: 3 },
    ]
  },
  quotes: [
    {
      text: "Los profesionales de la educación tienen una gran responsabilidad con el alumnado con necesidades educativas especiales, en concreto con aquellos con trastorno del espectro autista. Estos últimos representan un reto especialmente complejo, ya que no existe convergencia en el cuadro clínico y, por lo tanto, cada alumno requiere una respuesta pedagógica individualizada que exige un esfuerzo adicional por parte del profesorado.",
      author: "E1, PedEcu3"
    },
    {
      text: "No se trata tanto de diseñar materiales o un plan curricular específico para el alumnado, sino de diseñar estrategias pedagógicas adecuadas para cada uno de ellos.",
      author: "E1, PedEcu2"
    },
    {
      text: "Somos vulnerables debido a la falta de recursos humanos y materiales para que cada estudiante con TEA pueda recibir atención individualizada.",
      author: "E1, PedEcu6"
    },
    {
      text: "Debe partir de la experiencia curricular de cada alumno y de su capacidad para comprender el funcionamiento social que le rodea más allá de la memorización rotatoria.",
      author: "E1, PedEsp2"
    }
  ] as Quote[],
  conclusions: [
    "El compromiso y la vocación son fundamentales para buscar nuevas metodologías.",
    "La expresión de respuesta inclusiva no se limita a la presencia física en el aula.",
    "Es necesario difundir información para evitar falsos estereotipos sobre NEE.",
    "El profesorado necesita apoyo durante TODO el proceso (planificación a evaluación).",
    "La actitud hacia cambios curriculares y metodológicos es clave para abandonar prácticas homogeneizadoras."
  ],
  limitations: [
    'El tamaño de la muestra debería ser mayor en estudios posteriores para obtener una mayor variabilidad en los resultados.',
    'El desequilibrio muestral (7 españoles vs 3 ecuatorianos) limita la generalización comparativa.',
  ],
  quiz: [
    {
      question: "¿Cuál es el hallazgo principal sobre las actitudes docentes hacia la inclusión del TEA?",
      options: [
        "Dependen principalmente del nivel de formación académica",
        "Dependen más de preconcepciones y prejuicios personales",
        "Son siempre positivas independientemente del contexto",
        "Están determinadas por la cantidad de recursos materiales"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es la principal diferencia entre docentes ecuatorianos y españoles según el estudio?",
      options: [
        "Los españoles priorizan el cumplimiento del currículo",
        "Los ecuatorianos muestran mayor flexibilidad curricular",
        "Los ecuatorianos priorizan el cumplimiento del currículo",
        "No se encontraron diferencias significativas"
      ],
      correct: 2
    },
    {
      question: "¿Cuántos docentes participaron en el estudio y de qué países?",
      options: [
        "5 docentes de España y 5 de Ecuador",
        "7 docentes de España y 3 de Ecuador",
        "3 docentes de España y 7 de Ecuador",
        "10 docentes solo de España"
      ],
      correct: 1
    },
    {
      question: "¿Qué porcentaje de los docentes ecuatorianos prioriza el cumplimiento del currículo oficial?",
      options: [
        "50%",
        "60%",
        "70%",
        "80%"
      ],
      correct: 3
    },
    {
      question: "Según el estudio, ¿qué es más predictivo de las actitudes inclusivas del profesorado?",
      options: [
        "Los títulos universitarios obtenidos",
        "La disponibilidad de recursos materiales",
        "La disposición emocional y las creencias previas sobre el autismo",
        "La edad y el género del docente"
      ],
      correct: 2
    }
  ] as QuizQuestion[]
};
