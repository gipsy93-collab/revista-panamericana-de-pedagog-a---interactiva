import { QuizQuestion, Dimension } from './types';

export const ARTICLE_META = {
  id: "3549",
  title: "Teorías pedagógicas en la Nueva Escuela Mexicana",
  subtitle: "Arqueología de la innovación educativa",
  abstract: "Análisis teórico-documental que rastrea las raíces históricas de la Nueva Escuela Mexicana (NEM). El estudio demuestra que la 'innovación radical' del Plan de Estudios 2022 es, en realidad, una síntesis política de tradiciones pedagógicas que datan de 1712, integrando el pensamiento de Rousseau, Pestalozzi, Dewey y Freire en un mandato nacional.",
  authors: "Carlos-Antonio Quintero-Macías & Carmen-Citlalli Bautista-Villalaz",
  institution: "Universidad de Guadalajara, México",
  doi: "10.21555/rpp.3549",
  journal: "Revista Panamericana de Pedagogía",
  year: "2026",
  vol: "N° 41",
  stats: {
    n: "Análisis Documental",
    duration: "23 Años de Horizonte",
    method: "Revisión Sistemática"
  },
  themeColor: "#4f46e5", // Indigo for Technology/Theory
};

export const DIMENSIONS: Dimension[] = [
  {
    id: "legado-historico",
    title: "La Paradoja de la Innovación",
    content: "La NEM no inventa principios, sino que reorganiza ideas clásicas en un marco institucional contemporáneo.",
    highlight: "Principios pedagógicos de 1712-1952 son el núcleo del Plan de Estudios 2022.",
    icon: "History",
    testimonies: [
      { text: "El fin último de la educación no es la perfección en las tareas, sino la preparación para la vida.", author: "Johann Heinrich Pestalozzi" },
      { text: "La NEM recupera la idea de que el aprendizaje debe girar en torno al niño, respetando su desarrollo natural.", author: "Jean-Jacques Rousseau" }
    ]
  },
  {
    id: "didactica-critica",
    title: "De la Educación Bancaria al Diálogo",
    content: "El modelo actual rechaza la transferencia pasiva de datos para enfocarse en la construcción social del saber.",
    highlight: "Transición del libro de texto informativo al libro como material de proyectos.",
    icon: "Users",
    testimonies: [
      { text: "Enseñar no es transferir conocimiento, sino crear las posibilidades para su producción.", author: "Paulo Freire" },
      { text: "Si se consigue que la experiencia escolar se relacione con la significativa, los estudiantes se desarrollarán más.", author: "John Dewey" }
    ]
  },
  {
    id: "tecnologia-humanista",
    title: "Integración Tecnológica con Sentido",
    content: "La digitalización en la NEM debe servir al desarrollo socioemocional y no solo a la eficiencia técnica.",
    highlight: "Se identifican 6 herramientas TIC clave (Gamificación, RA, Portafolios) alineadas con la NEM.",
    icon: "Cpu",
    testimonies: [
      { text: "El reto no es solo enseñar mejor, sino enseñar con sentido, con corazón y con visión de futuro.", author: "Quintero & Bautista" },
      { text: "Herramientas como ClassDojo se alinean con los principios de respeto y perseverancia de la reforma.", author: "Hallazgo Tecnológico" }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿Cuál es la premisa principal del artículo sobre la 'innovación' de la NEM?",
    options: [
      "Es una invención filosófica totalmente nueva del siglo XXI.",
      "No inventa nada nuevo; reorganiza teorías pedagógicas de siglos pasados.",
      "Se basa exclusivamente en modelos de inteligencia artificial.",
      "Es una copia del modelo educativo finlandés."
    ],
    correctAnswer: 1,
    feedback: "Correcto. El estudio demuestra que la NEM es una síntesis de tradiciones pedagógicas clásicas (Rousseau, Freire, etc.) reorganizadas bajo una nueva voluntad política."
  },
  {
    id: "q2",
    question: "¿Quién es el autor que influye en la transición de la 'educación bancaria' a la didáctica dialógica en la NEM?",
    options: [
      "Jean-Jacques Rousseau",
      "John Dewey",
      "Paulo Freire",
      "Johann Heinrich Pestalozzi"
    ],
    correctAnswer: 2,
    feedback: "Así es. Paulo Freire es el referente fundamental para el rechazo a la educación bancaria y la promoción de una pedagogía de la libertad y el diálogo."
  },
  {
    id: "q3",
    question: "¿Qué horizonte de tiempo se estima necesario para que la NEM se consolide institucionalmente?",
    options: [
      "6 años (un sexenio)",
      "23 años (hasta 2042)",
      "10 meses",
      "100 años"
    ],
    correctAnswer: 1,
    feedback: "Exacto. El artículo menciona un horizonte de 23 años para la consolidación total de esta transformación educativa."
  }
];
