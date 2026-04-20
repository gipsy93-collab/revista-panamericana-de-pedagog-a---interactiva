import { QuizQuestion, Dimension } from './types';

export const ARTICLE_META = {
  id: "3562",
  title: "Jóvenes universitarias y su transición a la maternidad",
  subtitle: "Formación, retos y crianza en contextos vulnerables",
  abstract: "Estudio cualitativo con enfoque de curso de vida que visibiliza la trayectoria de madres estudiantes en la UPN Ecatepec. Desmonta el estigma de la maternidad como causa de abandono, revelando que la deserción es un subproducto de la falta de políticas institucionales y la fragilidad de capitales. El 67% de las estudiantes interrumpe sus estudios ante la ausencia de lactarios y guarderías universitarias.",
  authors: "Diego Rodríguez-Calderón-de-la-Barca",
  institution: "Universidad Pedagógica Nacional, México",
  doi: "10.21155/rpp.3562",
  journal: "Revista Panamericana de Pedagogía",
  year: "2026",
  vol: "N° 41",
  stats: {
    n: "12 Estudiantes",
    inter: "67% Interrupción",
    method: "Narrativa Biográfica"
  },
  themeColor: "#ec4899", // Pink for Motherhood/Care
};

export const DIMENSIONS: Dimension[] = [
  {
    id: "brecha-institucional",
    title: "La Invisibilidad Estructural",
    content: "Las universidades están diseñadas para un 'estudiante ideal' sin responsabilidades de cuidado.",
    highlight: "Ausencia total de lactarios y guarderías; el apoyo docente es voluntad individual, no política.",
    icon: "Building2",
    testimonies: [
      { text: "El tiempo en mí misma dejó de existir... mi hija está en cada una de mis responsabilidades.", author: "Marina" },
      { text: "Casi no descanso, no duermo lo suficiente; la administración del tiempo me genera ansiedad.", author: "Gloria" }
    ]
  },
  {
    id: "estigma-social",
    title: "La Marca de la 'Irresponsabilidad'",
    content: "La maternidad durante los estudios es percibida como una distracción o una falta de compromiso.",
    highlight: "El estigma asocia erróneamente el embarazo con el fracaso académico inevitable.",
    icon: "AlertTriangle",
    testimonies: [
      { text: "Mi mamá me dijo que tenía que hacerme cargo de mis 'tonterías' y continuar el embarazo.", author: "Antonia" },
      { text: "Me embaracé a los 16 años... el papá me dejó y aquí andamos haciéndonos cargo.", author: "Antonia (Narrativa)" }
    ]
  },
  {
    id: "resiliencia-agenciamiento",
    title: "Maternidad como Motivador",
    content: "Lejos de ser un obstáculo, los hijos se convierten en el motor para la finalización de la carrera.",
    highlight: "Las madres universitarias muestran mayor resiliencia ante la adversidad estructural.",
    icon: "Zap",
    testimonies: [
      { text: "Ser madre y estudiante es un reto. Pero esto que hago es un ejemplo para mis hijos.", author: "Katherine" },
      { text: "La carrera es una inversión para abrir el panorama y expectativas de mis hijos.", author: "Katherine" }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿Cuál es el hallazgo central sobre la deserción escolar en madres universitarias?",
    options: [
      "La maternidad es la causa directa y única del abandono.",
      "El 67% interrumpe estudios por falta de políticas de apoyo y capitales.",
      "Las estudiantes pierden interés en la pedagogía al ser madres.",
      "Todas las universidades mexicanas ya cuentan con guarderías gratuitas."
    ],
    correctAnswer: 1,
    feedback: "Correcto. El estudio demuestra que el 67% interrumpe estudios no por la maternidad per se, sino por la fragilidad de apoyos institucionales."
  },
  {
    id: "q2",
    question: "¿Qué teoría utiliza el autor para explicar la desacreditación social de las madres estudiantes?",
    options: [
      "Teoría de la Relatividad",
      "Teoría del Estigma de Erving Goffman",
      "Teoría del Caos",
      "Conductismo Radical"
    ],
    correctAnswer: 1,
    feedback: "Así es. Goffman es utilizado para analizar cómo la identidad de 'madre estudiante' es estigmatizada como irresponsable."
  },
  {
    id: "q3",
    question: "¿Cuáles son las principales demandas institucionales identificadas en el estudio?",
    options: [
      "Mejores cafeterías",
      "Más libros físicos",
      "Lactarios, guarderías y flexibilidad horaria",
      "Clases de deportes"
    ],
    correctAnswer: 2,
    feedback: "Exacto. El artículo concluye que para garantizar la permanencia se requieren servicios de cuidado y flexibilidad material."
  }
];
