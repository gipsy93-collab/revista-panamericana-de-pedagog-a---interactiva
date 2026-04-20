import { QuizQuestion, Dimension } from './types';

export const ARTICLE_META = {
  id: "3543",
  title: "Prácticas docentes para el desarrollo de la escritura académica en estudiantes normalistas",
  subtitle: "Alfabetización académica y formación docente",
  abstract: "Investigación cualitativa que describe las prácticas docentes dirigidas al desarrollo de la escritura académica en una Escuela Normal Superior de México. A pesar de que el 93% de los docentes valora la escritura como una competencia crítica, solo el 14% proporciona acompañamiento durante el proceso, revelando una brecha estructural entre la importancia declarada y la implementación pedagógica real.",
  authors: "Selenne Ríos-Higuera & Francisco-Javier Sotomayor-Andrade",
  institution: "Escuela Normal Superior Hermosillo, México",
  doi: "10.21555/rpp.3543",
  journal: "Revista Panamericana de Pedagogía",
  year: "2026",
  vol: "N° 41",
  stats: {
    n: "14 Docentes",
    duration: "1 Semestre",
    method: "Estudio de Caso"
  },
  themeColor: "#10b981", // Emerald for Academic/Writing
};

export const DIMENSIONS: Dimension[] = [
  {
    id: "brecha-pedagogica",
    title: "La Paradoja de la Importancia",
    content: "Existe una discrepancia crítica entre la valoración teórica de la escritura y su práctica en el aula.",
    highlight: "93% de docentes la considera vital, pero solo 14% acompaña el proceso.",
    icon: "Target",
    testimonies: [
      { text: "El problema de la lectura y escritura debería dejar de ser adjudicado a los alumnos y convertirse en tema de ocupación institucional.", author: "P1: Carlino (Cita Ref)" },
      { text: "Implica el desarrollo de muchas habilidades... y la mejor forma de aprender es practicándola.", author: "P4: Beatriz" }
    ]
  },
  {
    id: "especializacion-disciplinar",
    title: "Varianza por Especialidad",
    content: "La frecuencia y profundidad de las tareas de escritura varían drásticamente según el área de formación.",
    highlight: "El área de Inglés lidera en frecuencia; Matemáticas presenta la menor incidencia.",
    icon: "BookOpen",
    testimonies: [
      { text: "La escritura de los alumnos de matemáticas está por debajo de estudiantes de otras licenciaturas, como los de inglés.", author: "P8: Fabián" },
      { text: "Partimos de una explicación del tipo de texto... escribir borradores del texto hasta su versión final.", author: "P3: Julia" }
    ]
  },
  {
    id: "evaluacion-terminal",
    title: "Evaluación Cruda vs. Acompañamiento",
    content: "La retroalimentación tiende a ser terminal y centrada en la corrección superficial más que en el desarrollo del pensamiento.",
    highlight: "Solo 7 de 14 docentes especifican criterios claros de evaluación en sus planeaciones.",
    icon: "CheckSquare",
    testimonies: [
      { text: "La escritura académica nos permite no solo aprender sino también plasmar lo aprendido, dar cuenta de ese aprendizaje.", author: "P3: Julia" },
      { text: "Retroalimentan trabajos una vez terminados, pero no acompañan durante el proceso.", author: "Informe General" }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿Cuál es la principal brecha identificada entre la percepción y la práctica docente?",
    options: [
      "Los docentes no creen que la escritura sea importante.",
      "El 93% la considera vital, pero solo el 14% brinda acompañamiento real.",
      "Los estudiantes se niegan a escribir ensayos.",
      "No hay internet en la Escuela Normal."
    ],
    correctAnswer: 1,
    feedback: "Exacto. El estudio revela que aunque casi todos los docentes (93%) valoran la escritura, muy pocos (14%) se involucran en el proceso de creación del estudiante."
  },
  {
    id: "q2",
    question: "¿Qué especialidad mostró una mayor frecuencia y variedad en la asignación de tareas de escritura?",
    options: [
      "Matemáticas",
      "Historia",
      "Inglés",
      "Español"
    ],
    correctAnswer: 2,
    feedback: "Correcto. El área de Inglés, posiblemente por la formación específica de sus docentes, integra la escritura de forma más sistemática."
  },
  {
    id: "q3",
    question: "Según el estudio, ¿cuál es el tipo de texto de extensión considerable más solicitado?",
    options: [
      "La Tesis",
      "El Ensayo",
      "El Resumen",
      "El Mapa Conceptual"
    ],
    correctAnswer: 1,
    feedback: "Así es. El ensayo fue identificado como el formato predominante en las cuatro especialidades analizadas."
  }
];

