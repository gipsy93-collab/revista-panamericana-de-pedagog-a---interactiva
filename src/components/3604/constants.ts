import { Question, ArticleSection } from './types';

export const CENTRAL_FINDING = {
  title: "El Cine como Lenguaje Pedagógico",
  text: "Más que un apoyo motivacional, el cine se constituye en un lenguaje capaz de articular emoción, pensamiento y cultura, reconciliando la palabra escrita con las nuevas formas de significación juveniles.",
  highlight: "Solo el 21% de los alumnos utilizaba material audiovisual en sus procesos de aprendizaje previos al estudio."
};

export const INVESTIGATION_PHASES = [
  { id: 1, name: "Diagnóstico", description: "Reconocimiento de condiciones del grupo, hábitos de estudio y prácticas mediáticas" },
  { id: 2, name: "Planeación", description: "Diseño de secuencia didáctica reflexiva: antes, durante y después de la proyección" },
  { id: 3, name: "Acción", description: "Implementación con películas adaptadas de obras literarias" },
  { id: 4, name: "Observación", description: "Registro sistemático mediante bitácora docente y retroalimentación" },
  { id: 5, name: "Reflexión", description: "Análisis conjunto mediante focus group virtual de aprendizajes" }
];

export const LIMITATIONS = [
  'Falta de formación específica docente en análisis fílmico y alfabetización audiovisual.',
  'Limitaciones tecnológicas: conectividad inestable, diferencias en dispositivos, acceso desigual a recursos digitales.',
  'Condicionalidad del contexto pandémico: resultados pueden variar en contexto presencial.',
  'Muestra reducida: un solo grupo de 30 estudiantes limita generalización.',
];

export const CONCLUSIONS = [
  {
    id: 1,
    title: "Viabilidad Pedagógica",
    content: "Es pedagógicamente viable enseñar literatura con cine cuando la práctica se fundamenta en diseño didáctico reflexivo y mediación pedagógica consciente."
  },
  {
    id: 2,
    title: "Lenguaje Educativo",
    content: "El cine constituye un lenguaje educativo capaz de activar procesos cognitivos, estéticos y críticos, más allá de su función meramente motivacional."
  },
  {
    id: 3,
    title: "Aprendizaje Significativo",
    content: "El aprendizaje significativo se fortalece cuando se relacionan nuevos contenidos con experiencias previas de los estudiantes."
  },
  {
    id: 4,
    title: "Investigación-Acción",
    content: "La investigación-acción educativa resultó metodológicamente pertinente para transformar la práctica docente en experiencia reflexiva y colaborativa."
  },
  {
    id: 5,
    title: "Formación Docente",
    content: "Se evidenció la necesidad institucional de fortalecer la formación docente en alfabetización audiovisual."
  }
];

export const ARTICLE_SECTIONS: ArticleSection[] = [
  {
    id: "ficha",
    title: "Ficha Técnica del Estudio",
    content: "Artículo 'e3604' publicado en la Revista Panamericana de Pedagogía (2026). Investigadores: María Teresa López Martínez (U. del Mar) y Marco Antonio Muñoz Madrid (U. Veracruzana). Institución: CBQ Plantel Chetumal 1. Periodo: Octubre 2020 - Enero 2021 (Virtual). E-ISSN: 2594-2190. DOI: 10.21555/rpp.3604.",
    quote: "Investigación empírica con 30 estudiantes en contexto de pandemia COVID-19."
  },
  {
    id: "introduccion",
    title: "Introducción: La Brecha de Lenguajes",
    content: "El estudio aborda la tensión entre los lenguajes escolares tradicionales y los mediáticos. Ante la crisis de interés por la literatura, el cine surge no como distractor, sino puente para reconciliar la palabra escrita con las nuevas formas de significación juvenil tras la pandemia.",
    quote: "La enseñanza de la literatura enfrenta hoy el desafío de reconciliar la palabra escrita con las nuevas formas culturales de significación."
  },
  {
    id: "metodologia",
    title: "Metodología: Investigación-Acción",
    content: "Implementada en 5 fases con 30 estudiantes del CBQ Plantel Chetumal 1. Modalidad virtual mediante Google Meet, Classroom y WhatsApp. Condiciones heterogéneas: algunos con computadora e internet estable, otros con teléfono móvil y datos limitados.",
    quote: "Un proceso reflexivo donde el docente analiza su práctica, la transforma y produce conocimiento desde su experiencia."
  },
  {
    id: "resultados",
    title: "Resultados: Tres Dimensiones",
    content: "1. Dimensión Afectiva: Despertar de entusiasmo e implicación emocional. 2. Dimensión Cognitiva: Desarrollo de capacidades analíticas del lenguaje visual (plano, montaje, ritmo). 3. Dimensión Social: Diálogo cooperativo y construcción de significados entre pares.",
    quote: "Los estudiantes ya no miraban las películas: las leían."
  },
  {
    id: "corpus",
    title: "Corpus: Cine y Literatura",
    content: "Se trabajaron obras fundamentales a través de sus adaptaciones: 'Romeo y Julieta' (Luhrmann/Shakespeare), 'Crónica de una muerte anunciada' (Rosi/García Márquez) y 'Rebelión en la granja' (Halas/Orwell). El cine actuó como anclaje para la comprensión literaria.",
    quote: "El cine funcionó como mediador simbólico del mundo compartido."
  },
  {
    id: "discusion",
    title: "Discusión: Marcos Teóricos",
    content: "La experiencia valida el Aprendizaje Significativo (Ausubel) como anclaje cognitivo, la Pedagogía Crítica (Freire/Giroux) como mediación del mundo y la Alfabetización Audiovisual (Ferrés) como necesidad urgente para 'aprender a mirar' en el siglo XXI.",
    quote: "La escuela no puede seguir actuando como si los medios no existieran, porque educar hoy implica también enseñar a mirar."
  },
  {
    id: "limitaciones",
    title: "Limitaciones",
    content: "1. Falta de formación específica docente en análisis fílmico y alfabetización audiovisual.\n2. Limitaciones tecnológicas: conectividad inestable, diferencias en dispositivos, acceso desigual a recursos digitales.\n3. Condicionalidad del contexto pandémico: resultados pueden variar en contexto presencial.\n4. Muestra reducida: un solo grupo de 30 estudiantes limita generalización."
  },
  {
    id: "conclusiones",
    title: "Conclusiones",
    content: "El estudio demuestra que: (1) Es viable enseñar literatura con cine mediante diseño reflexivo; (2) El cine es lenguaje educativo, no solo recurso motivacional; (3) El aprendizaje significativo se fortalece anclando contenidos en experiencias previas; (4) La investigación-acción transforma la práctica docente; (5) Se necesita fortalecer la formación en alfabetización audiovisual.",
    quote: "El cine es más que un recurso didáctico: es un transmisor de valores que permite desarrollar el pensamiento crítico."
  }
];


export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    difficulty: 'fácil',
    text: "¿Cuál es el hallazgo central sobre el papel del cine en el aula?",
    options: [
      "Es un simple entretenimiento para descansar",
      "Es un mediador pedagógico que articula emoción y pensamiento",
      "Es un sustituto total de los libros de texto",
      "Es una herramienta que distrae del aprendizaje real"
    ],
    correctAnswer: 1,
    explanation: "El estudio demuestra que el cine actúa como un lenguaje pedagógico, no solo como un recurso motivacional."
  },
  {
    id: 2,
    difficulty: 'medio',
    text: "¿Qué porcentaje de alumnos usaba material audiovisual antes del estudio?",
    options: ["50%", "10%", "21%", "75%"],
    correctAnswer: 2,
    explanation: "Solo el 21% de los alumnos integraba lo audiovisual en su estudio, revelando una gran brecha digital y pedagógica."
  },
  {
    id: 3,
    difficulty: 'medio',
    text: "¿Cuántas fases integraron el proceso metodológico de la investigación-acción?",
    options: ["3 fases", "5 fases", "2 fases", "7 fases"],
    correctAnswer: 1,
    explanation: "El proceso se estructuró en 5 fases: Diagnóstico, Planeación, Acción, Observación y Reflexión."
  },
  {
    id: 4,
    difficulty: 'difícil',
    text: "¿Bajo qué marco teórico se explica el cine como 'anclaje cognitivo'?",
    options: [
      "Conductismo",
      "Aprendizaje significativo (Ausubel)",
      "Pedagogía del oprimido",
      "Constructivismo radical"
    ],
    correctAnswer: 1,
    explanation: "Ausubel define el aprendizaje significativo como el anclaje de nuevos conocimientos en estructuras previas (en este caso, la familiaridad con lo audiovisual)."
  },
  {
    id: 5,
    difficulty: 'difícil',
    text: "¿Qué autor advierte que 'educar hoy implica también enseñar a mirar'?",
    options: ["Freire", "Elliott", "Ferrés", "Giroux"],
    correctAnswer: 2,
    explanation: "Joan Ferrés (1994) es el referente clave para la alfabetización audiovisual citado por los autores."
  }
];

export const FLASHCARD_DATA = [
  {
    front: "¿Qué es el Aprendizaje Significativo?",
    back: "Es el anclaje de nuevos conocimientos en estructuras previas (presaberes) del estudiante.",
    category: "Teoría"
  },
  {
    front: "Cita clave de Joan Ferrés",
    back: "La escuela no puede actuar como si los medios no existieran; educar es 'enseñar a mirar'.",
    category: "Cita"
  },
  {
    front: "La Pedagogía Crítica (Freire)",
    back: "Los hombres se educan entre sí, mediatizados por el mundo y el diálogo.",
    category: "Fílosofía"
  },
  {
    front: "Investigación-Acción",
    back: "Ciclo reflexivo donde el docente analiza, transforma y produce conocimiento desde su práctica.",
    category: "Metodología"
  }
];

export const MEMORY_CONCEPTS = [
  { term: "Montaje", definition: "Organización de los planos de una película.", pairId: 1 },
  { term: "Encuadre", definition: "Espacio que captura la cámara en un plano.", pairId: 2 },
  { term: "Ritmo", definition: "Cadencia narrativa lograda mediante la edición.", pairId: 3 },
  { term: "Mediación", definition: "Intervención docente que articula emoción y saber.", pairId: 4 },
  { term: "Anclaje", definition: "Concepto que sirve de base para el nuevo saber.", pairId: 5 },
  { term: "Protocolo", definition: "Guía de observación antes, durante y después del cine.", pairId: 6 }
];
