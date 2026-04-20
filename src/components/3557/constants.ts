import { QuizQuestion, Dimension } from './types';

export const ARTICLE_META = {
  id: "3557",
  title: "Educación jurídica en la era digital",
  subtitle: "Tensiones, resistencias y oportunidades",
  abstract: "Investigación de metodología mixta que analiza la brecha entre la formación jurídica tradicional y las exigencias tecnológicas de la praxis legal moderna. Revela una resistencia identitaria en las facultades de derecho, donde solo el 10% de las instituciones de élite integran competencias digitales obligatorias, a pesar de que herramientas como la IA ya optimizan hasta un 80% de la carga laboral profesional.",
  authors: "Philippe Prince-Tritto, Sara-Elvira Galbán-Lozano & Mónica-Meza-Mejía",
  institution: "Universidad Panamericana, México",
  doi: "10.21155/rpp.3557",
  journal: "Revista Panamericana de Pedagogía",
  year: "2026",
  vol: "N° 41",
  stats: {
    n: "38 Facultades / 7 Juristas",
    res: "10% Obligatoriedad Tech",
    method: "Metodología Mixta"
  },
  themeColor: "#3b82f6", // Blue for Legal/Integrity
};

export const DIMENSIONS: Dimension[] = [
  {
    id: "brecha-curricular",
    title: "El Decálogo de la Resistencia",
    content: "Las facultades de derecho operan con planes de estudio anacrónicos que ignoran la revolución digital.",
    highlight: "Solo 1 de cada 10 facultades incluye tecnología como materia obligatoria.",
    icon: "ShieldAlert",
    testimonies: [
      { text: "Un profesor me reprobó porque en vez de códigos en papel los llevaba en la computadora.", author: "P1: Jurista Senior" },
      { text: "No solo no nos enseñaron tecnología, sino que había una actitud adversa al respecto.", author: "P1: Experiencia cualitativa" }
    ]
  },
  {
    id: "eficiencia-ia",
    title: "La Propulsión de la IA",
    content: "La inteligencia artificial no es una promesa futura, es un catalizador de eficiencia actual en los despachos.",
    highlight: "El uso de IA (ChatGPT) reduce la carga laboral hasta en un 80% según los juristas entrevistados.",
    icon: "Cpu",
    testimonies: [
      { text: "Utilizo ChatGPT y eso me ha ayudado a reducir mi carga laboral... encuentro rápidamente información.", author: "P5: Especialista" },
      { text: "Dentro de cinco años ya no será posible ser un abogado exitoso sin usar IA.", author: "Gary Marchant (Cita Ref)" }
    ]
  },
  {
    id: "tradicion-vs-innovacion",
    title: "Tensión Identitaria",
    content: "Existe un conflicto entre el ideal del jurista 'clásico' y la necesidad de un perfil tecnológicamente fluido.",
    highlight: "La formación digital se adquiere mayormente de forma autónoma por interés personal.",
    icon: "Scale",
    testimonies: [
      { text: "La formación jurídica formal va siempre a la zaga de las necesidades del mercado laboral.", author: "Conclusión Académica" },
      { text: "Hay despachos que nacieron totalmente digitales y otros que siguen trabajando a mano.", author: "P1: Panorama Profesional" }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿Qué porcentaje de las facultades de derecho analizadas incluyen materias tecnológicas obligatorias?",
    options: [
      "50%",
      "10%",
      "85%",
      "37%"
    ],
    correctAnswer: 1,
    feedback: "Correcto. El estudio revela que solo el 10% (4 de 38 facultades de élite) consideran la tecnología como parte del núcleo obligatorio."
  },
  {
    id: "q2",
    question: "¿Cuál es el impacto reportado por los juristas en la reducción de carga laboral gracias a la IA?",
    options: [
      "10%",
      "No hay impacto real",
      "Hasta un 80%",
      "50%"
    ],
    correctAnswer: 2,
    feedback: "Así es. Participantes como P5 reportan que herramientas de IA generativa han reducido su carga operativa en un vasto 80%."
  },
  {
    id: "q3",
    question: "¿Cómo describen los autores la adquisición de competencias digitales en los abogados actuales?",
    options: [
      "Principalmente a través de la formación universitaria.",
      "Es nula, los abogados no usan tecnología.",
      "De forma autónoma, por interés personal o necesidad profesional.",
      "Mediante cursos obligatorios del colegio de abogados."
    ],
    correctAnswer: 2,
    feedback: "Exacto. Ante la falta de oferta curricular, los juristas se ven obligados a autoformarse en herramientas digitales."
  }
];
