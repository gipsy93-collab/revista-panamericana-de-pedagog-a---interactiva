import { QuizQuestion, Specialty, FrequencyRow, Quote } from './types';

export const ARTICLE_DATA = {
  title: "Prácticas docentes para el desarrollo de la escritura académica en estudiantes normalistas",
  authors: "Selenne Ríos Higuera & Francisco Javier Sotomayor Andrade",
  institution: "Escuela Normal Superior Hermosillo, México",
  doi: "10.21555/rpp.3543",
  volume: "N° 41 (2026)",
  centralFinding: "Aunque 13 de 14 docentes consideran importante la escritura académica, los hallazgos muestran que hay quienes la trabajan con poca frecuencia o no la trabajan. No existe acompañamiento durante el proceso de escritura ni uniformidad en criterios de evaluación.",
  introduction: {
    context: "La escritura académica como objeto de estudio en educación superior es reciente en América Latina. Tradicionalmente, la investigación se ha centrado en el desempeño de los estudiantes y sus deficiencias, dejando de lado el análisis de las prácticas docentes que podrían desarrollar esta habilidad.",
    problem: "¿Cómo enseñan los docentes a los normalistas a escribir académicamente?",
    objectives: [
      "Describir las prácticas docentes dirigidas al desarrollo de la escritura académica",
      "Determinar cómo los docentes conceptualizan la escritura académica",
      "Determinar la frecuencia con que asignan actividades de escritura académica",
      "Identificar qué tipo de trabajos de escritura académica asignan",
      "Determinar cómo evalúan los trabajos y el acompañamiento que brindan"
    ]
  },
  methodology: {
    type: "Cualitativo — Estudio de caso descriptivo de profundidad. Transeccional.",
    sample: {
      total: 14,
      specialties: [
        { name: "Inglés", count: 6 },
        { name: "Matemáticas", count: 4 },
        { name: "Español", count: 2 },
        { name: "Historia", count: 2 }
      ] as Specialty[]
    },
    instruments: [
      "Entrevista semiestructurada (11 preguntas abiertas)",
      "Revisión de planeaciones de clase del semestre previo"
    ]
  },
  conceptualization: [
    "Proceso vinculado al aprendizaje",
    "Requiere habilidades intelectuales diversas",
    "Uso de lenguaje formal y estandarizado",
    "Textos producidos dentro del contexto académico",
    "Algunos amplían a textos cortos (cuadros, reflexiones)"
  ],
  frequencyData: [
    { specialty: "Inglés", never: 4, once: 2, multiple: 3 },
    { specialty: "Matemáticas", never: 5, once: 0, multiple: 0 },
    { specialty: "Español", never: 1, once: 0, multiple: 1 },
    { specialty: "Historia", never: 0, once: 1, multiple: 1 },
  ] as FrequencyRow[],
  shortTexts: [
    "Párrafos, resúmenes, cuadros de información",
    "Esquemas, foros, organizadores gráficos",
    "Mapas conceptuales/mentales (especialmente en Matemáticas)"
  ],
  longTexts: [
    "Ensayo: el más mencionado en todas las especialidades",
    "Textos argumentativos y reflexivos",
    "Trabajo de titulación (tesis, informe de prácticas, portafolio)",
    "Anteproyecto de investigación"
  ],
  evaluation: {
    criteria: "Solo 7 de 14 docentes especificaron criterios de evaluación",
    commonCriteria: ["Ortografía", "Puntuación", "Gramática", "Estructura del escrito"],
    advancedCriteria: ["Coherencia", "Concisión", "Claridad", "Argumentación"],
    advancedGroup: "Docentes con formación en enseñanza del inglés",
    planningGap: "No se encontraron criterios en las planeaciones"
  },
  feedback: {
    channel: "Principalmente escrita vía plataformas virtuales (Moodle, Google Drive)",
    aspects: ["Contenido", "Gramática", "Ortografía", "Puntuación", "Redacción"],
    processSupport: "Mínimo — solo 2 de 14 docentes reportaron acompañamiento con ejemplos y enfoque de proceso"
  },
  gapData: {
    considerImportant: 13,
    total: 14,
    reasons: [
      "La asignatura no lo requiere",
      "El contenido no se presta para ello",
      "Requiere mucho tiempo (diseñar, aplicar, evaluar, retroalimentar)"
    ]
  },
  limitations: [
    "Estudio de caso en una sola institución limita transferibilidad.",
    "Muestra de docentes voluntarios puede introducir sesgo.",
    "Análisis de planeaciones de un solo semestre.",
    "No incluye la perspectiva de los estudiantes sobre las prácticas docentes.",
    "No se realizó observación directa de clases para contrastar con declaraciones."
  ],
  conclusions: [
    "Los docentes conceptualizan la escritura académica como proceso complejo que beneficia cognitivamente a los estudiantes",
    "La escritura académica se trabaja mayormente en la especialidad de Inglés",
    "El ensayo es el tipo de texto más solicitado en todas las especialidades",
    "No hay uniformidad en criterios de evaluación",
    "No existe acompañamiento sistemático durante el proceso de escritura",
    "No hay relación directa entre valoración de la escritura académica y práctica docente real"
  ],
  quotes: [
    {
      text: "La escritura académica como objeto de estudio en el nivel superior es reciente en América Latina.",
      author: "Ríos-Higuera & Sotomayor-Andrade, p. 1"
    },
    {
      text: "En México predomina la idea de que la dificultad de los estudiantes para escribir académicamente es resultado de las deficiencias que vienen arrastrando de los niveles anteriores.",
      author: "Hernández-Zamora (2009), citado en p. 2"
    },
    {
      text: "Las deficiencias en la escritura académica podrían minimizarse si ésta es incluida transversalmente en el currículo y si se origina una responsabilidad compartida entre estudiantes, docentes y autoridades institucionales.",
      author: "Ríos-Higuera & Sotomayor-Andrade, p. 19"
    }
  ] as Quote[],
  quiz: [
    {
      question: "¿Cuál es el hallazgo principal del estudio sobre la escritura académica?",
      options: [
        "Todos los docentes asignan escritura académica con frecuencia",
        "13 de 14 docentes consideran importante la escritura académica, pero no todos la practican",
        "Solo los docentes de Matemáticos valoran la escritura académica",
        "Existen rúbricas uniformes en todas las especialidades"
      ],
      correct: 1
    },
    {
      question: "¿Qué especialidad NO asignó textos de extensión considerable?",
      options: [
        "Inglés",
        "Español",
        "Historia",
        "Matemáticas"
      ],
      correct: 3
    },
    {
      question: "¿Cuántos docentes especificaron criterios de evaluación?",
      options: [
        "14 de 14",
        "10 de 14",
        "7 de 14",
        "2 de 14"
      ],
      correct: 2
    },
    {
      question: "¿Qué tipo de texto es el más solicitado en todas las especialidades?",
      options: [
        "Tesis",
        "Ensayo",
        "Resumen",
        "Portafolio"
      ],
      correct: 1
    },
    {
      question: "¿Cuántos docentes brindan acompañamiento durante el proceso de escritura?",
      options: [
        "14",
        "7",
        "2",
        "Ninguno"
      ],
      correct: 2
    }
  ] as QuizQuestion[]
};
