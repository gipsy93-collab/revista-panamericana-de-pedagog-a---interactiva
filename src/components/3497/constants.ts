import { QuizQuestion, LeadershipType, Dimension, TimelineEvent, Quote } from './types';

export const ARTICLE_DATA = {
  title: "Liderazgo docente y formación del carácter: claves para la transformación educativa en Paraguay",
  authors: "Yeni Servin-Mendieta; Lucía Rivas-Benítez; Ana Riveros-Lesmo",
  institutions: "Universidad Iberoamericana, Paraguay; Colegio Las Almenas, Paraguay; Ministerio de Educación y Ciencias, Paraguay",
  doi: "10.21555/rpp.3497",
  volume: "N° 41 (2026)",
  centralFinding: "El liderazgo docente y la formación del carácter son pilares mutuamente constitutivos para transformar la escuela paraguaya, superando el modelo administrativo tradicional.",
  introduction: {
    context: "El sistema escolar paraguayo ha caracterizado por un liderazgo tradicional enfocado en lo administrativo, limitando que otros agentes educativos ejerzan roles de liderazgo.",
    problem: "¿Cómo pueden el liderazgo docente y la formación del carácter articularse como pilares transformadores del sistema educativo paraguayo?",
    relevance: "Las autoras sostienen que el liderazgo docente y la formación del carácter constituyen los elementos fundamentales para la transformación educativa."
  },
  methodology: {
    type: "Estudio teórico-documental",
    strategy: "Análisis conceptual y revisión de literatura especializada",
    sources: "Literatura académica internacional en liderazgo educativo, formación del carácter y políticas educativas",
    perspective: "Análisis normativo-contextual del caso paraguayo",
    legalFramework: "Ley General de Educación N.º 1264/98 y Plan Nacional de Transformación Educativa 2040"
  },
  leadershipTypes: [
    {
      name: "Transformacional",
      features: "Centrado en generar cambio significativo; motiva seguidores; promueve altas expectativas; crea visión compartida",
      impact: "Cambios estructurales y culturales a largo plazo"
    },
    {
      name: "Pedagógico",
      features: "Garantiza gestión para excelentes resultados; asegura calidad curricular; fortalece prácticas de enseñanza",
      impact: "Creación de condiciones favorables al aprendizaje; desarrollo profesional docente"
    },
    {
      name: "Distribuido",
      features: "Liderazgo repartido entre miembros de la comunidad educativa; dirección escolar como motor de cambio",
      impact: "Fomenta colaboración y participación activa; mejora resultados académicos"
    }
  ] as LeadershipType[],
  dimensions: [
    {
      key: "professional",
      name: "Profesional",
      icon: "🧠",
      description: "Capacidad para facilitar el logro de metas educativas",
      elements: ["Dominio pedagógico", "Conocimiento del contenido", "Estrategias didácticas", "Gestión de recursos"],
      status: "evaluated"
    },
    {
      key: "affective",
      name: "Afectiva",
      icon: "❤️",
      description: "Capacidad para establecer relaciones interpersonales significativas",
      elements: ["Vínculos genuinos", "Relaciones significativas", "Ambientes seguros", "Reconocimiento de dignidad"],
      status: "ignored"
    },
    {
      key: "charismatic",
      name: "Carismática",
      icon: "✨",
      description: "Capacidad para atraer y motivar estudiantes y comunidad educativa",
      elements: ["Capacidad de inspirar", "Motivación estudiantil", "Visión compartida", "Entusiasmo por aprender"],
      status: "ignored"
    }
  ] as Dimension[],
  comparison: {
    values: {
      label: "Educación en valores",
      tag: "Común en Paraguay",
      items: [
        { label: "Teórico", text: "Enseña conceptos" },
        { label: "Declarativo", text: '"La honestidad es..."' },
        { label: "Enseñar", text: "SOBRE valores" },
        { label: "Resultado", text: "Queda en el aula", negative: true }
      ]
    },
    character: {
      label: "Formación del carácter",
      tag: "Lo que necesitamos",
      items: [
        { label: "Práctico", text: "Modela acciones" },
        { label: "Experiencial", text: "Vivir valores" },
        { label: "Modelar", text: "honestidad" },
        { label: "Resultado", text: "Transforma vidas", positive: true }
      ]
    },
    quote: "Mientras que la educación en valores puede quedarse en un plano normativo y conceptual, la formación del carácter busca impactar de manera directa en la conducta, promoviendo la adquisición de competencias personales y sociales que guíen la toma de decisiones éticas."
  },
  timeline: [
    {
      year: "2003-2007",
      title: "Valores para Vivir",
      description: "Programa con UNESCO. Integración de valores en currículo mediante talleres vivenciales.",
      status: "finished"
    },
    {
      year: "Actualidad",
      title: "Teach for Paraguay",
      description: "Red global Teach for All. Selección de jóvenes con liderazgo, formación intensiva.",
      status: "active"
    },
    {
      year: "2023",
      title: "PNTE 2040",
      description: "Plan Nacional de Transformación Educativa. Apuesta estructural suspendida.",
      status: "cancelled"
    }
  ] as TimelineEvent[],
  effectiveProgramElements: [
    "Implementación con fidelidad (respeto a principios pedagógicos)",
    "Sostenibilidad temporal (no esporádicos)",
    "Enfoque integral y multifacético (cognitivo, emocional y conductual)",
    "Participación activa de toda la comunidad educativa",
    "Formación y compromiso del profesorado como modelos de conducta"
  ],
  strategies: [
    { title: "Aprendizaje-servicio", desc: "Integración de objetivos curriculares con participación en proyectos sociales" },
    { title: "Cultura simbólica", desc: "Uso de máximas, frases y referentes que encarnen valores institucionales" },
    { title: "Promoción de relaciones positivas", desc: "Fomento de vínculos basados en respeto mutuo, confianza y cooperación" },
    { title: "Pedagogía del empoderamiento", desc: "Esquemas participativos y democráticos con liderazgo compartido" },
    { title: "Pedagogía del desarrollo", desc: "Estrategias de aula centradas en autonomía, sentido de pertenencia, competencia y relevancia" }
  ],
  challenges: [
    "Desigualdad en acceso y calidad educativa",
    "Tasas de deserción escolar preocupantes",
    "Desigualdades sociales y económicas marcadas",
    "Crisis del aprendizaje estructural",
    "Ausencia de cultura de reflexión crítica sobre la práctica docente",
    "Fragilidad institucional frente a ciclos políticos"
  ],
  conclusions: [
    "El liderazgo docente constituye un elemento estratégico para la transformación del sistema educativo",
    "El liderazgo debe entenderse como práctica ética, formativa e inspiradora, no solo gestión técnica",
    "Se requiere avanzar hacia modelos de liderazgo distribuidos, éticos y colaborativos",
    "La formación del carácter debe ser una prioridad institucional explícita",
    "La educación en valores atraviesa todo el quehacer educativo como finalidad en sí misma",
    "Se requieren políticas públicas integrales que integren la formación del carácter transversalmente"
  ],
  limitations: [
    "Ausencia de datos empíricos: El artículo es exclusivamente teórico; no presenta evidencia empírica del contexto paraguayo (encuestas, estudios de caso, entrevistas) que sustenten el diagnóstico más allá de referencias a evaluaciones estandarizadas",
    "Delimitación del concepto 'docente': Aunque se aclara que 'docente' incluye a formadores, orientadores y supervisores, el artículo no desarrolla especificidades de liderazgo para cada uno de estos roles",
    "Análisis de políticas públicas limitado: La referencia al PNTE 2040 describe su suspensión pero no profundiza en las causas estructurales de la 'fragilidad institucional'",
    "Contextualización de experiencias internacionales: Los programas internacionales mencionados (Design Thinking, Positive Youth Development, etc.) no se analizan en términos de adaptabilidad al contexto paraguayo específico"
  ],
  quotes: [
    {
      text: "Durante muchos años, el sistema escolar se ha caracterizado por un liderazgo tradicional enfocado en lo administrativo, limitando la posibilidad de que otros agentes educativos, aparte del director del establecimiento, ejerzan roles de liderazgo.",
      author: "Servin-Mendieta et al., p. 2"
    },
    {
      text: "El liderazgo docente y la formación del carácter adquieren un rol preponderante, ya que constituyen los elementos fundamentales para la transformación educativa.",
      author: "Servin-Mendieta et al., p. 2"
    },
    {
      text: "Mientras que la educación en valores puede quedarse en un plano normativo y conceptual, la formación del carácter busca impactar de manera directa en la conducta, promoviendo la adquisición de competencias personales y sociales que guíen la toma de decisiones éticas.",
      author: "Servin-Mendieta et al., p. 6"
    },
    {
      text: "Los docentes-líderes no se limitan a transmitir contenidos, sino que fomentan una cultura institucional basada en la ética, el respeto, la responsabilidad y la convivencia democrática.",
      author: "Servin-Mendieta et al., p. 10"
    },
    {
      text: "El liderazgo docente no puede limitarse a la gestión técnica o al cumplimiento de funciones administrativas. Por el contrario, debe entenderse como una práctica ética, formativa e inspiradora.",
      author: "Servin-Mendieta et al., p. 15"
    },
    {
      text: "Solo así será posible cumplir con el ideal de una educación verdaderamente integral, que atienda a la totalidad de la persona humana y que forme a los estudiantes paraguayos no solo como aprendices competentes, sino como ciudadanos comprometidos.",
      author: "Servin-Mendieta et al., p. 15"
    }
  ] as Quote[],
  quiz: [
    {
      question: "¿Cuál es la problemática central del liderazgo escolar tradicional en Paraguay según el artículo?",
      options: [
        "Falta de recursos tecnológicos en las escuelas",
        "Un enfoque exclusivamente administrativo que concentra el liderazgo en el director",
        "Exceso de docentes en cada aula",
        "Ausencia total de normativas educativas"
      ],
      correct: 1
    },
    {
      question: "¿Cuántas dimensiones del liderazgo docente efectivo propone el artículo?",
      options: [
        "Dos",
        "Tres",
        "Cuatro",
        "Cinco"
      ],
      correct: 1
    },
    {
      question: "Según el artículo, ¿qué distingue a la formación del carácter de la educación en valores?",
      options: [
        "La formación del carácter es más teórica",
        "La educación en valores impacta directamente en la conducta",
        "La formación del carácter busca cambio observable en la conducta mediante práctica",
        "No hay diferencia entre ambas"
      ],
      correct: 2
    },
    {
      question: "¿Qué programa de transformación educativa en Paraguay fue suspendido?",
      options: [
        "Valores para Vivir",
        "Teach for Paraguay",
        "PNTE 2040",
        "Ley General de Educación 1264/98"
      ],
      correct: 2
    },
    {
      question: "¿Cuál de las siguientes dimensiones del liderazgo docente es la única que tradicionalmente evalúa el sistema paraguayo?",
      options: [
        "Afectiva",
        "Carismática",
        "Profesional",
        "Ninguna"
      ],
      correct: 2
    }
  ] as QuizQuestion[]
};
