export const ARTICLE_META = {
  id: "3467",
  title: "Ciberacoso entre estudiantes universitarios en la postpandemia",
  subtitle: "Comportamientos agresivos y prevención",
  authors: "Vallejos-Parás, C., Andrade-Rosas, L. A., & Echeverría-García, J.",
  institution: "Universidad La Salle, México",
  journal: "Revista Panamericana de Pedagogía, n. 41 (2026)",
  doi: "10.21555/rpp.3467",
  abstract: "El estudio explora la frecuencia de comportamientos agresivos entre pares mediante TIC en estudiantes universitarios durante el retorno a la presencialidad post-COVID-19. Con una muestra de 863 estudiantes, se estima que el 23% ha experimentado ciberacoso. Utilizando un modelo de regresión logística, los hallazgos demuestran que reducir los comportamientos de 'provocación' (memes, rumores, grabaciones) tiene el doble de efecto preventivo que controlar la 'insinuación'.",
  stats: {
    sample: "863",
    duration: "Post-Pandemia",
    reliability: "0.84 α",
    prevalence: "23%"
  }
};

export const DIMENSIONS = [
  {
    title: "La Paradoja del Espectador",
    description: "Casi 35 de cada 100 estudiantes consumen rumores digitales sin ser agresores directos, perpetuando el ciclo de violencia.",
    highlight: "34.76% ven rumores",
    quote: "Si te llevas, te aguantas: el cómplice de hoy es la víctima de mañana.",
    source: "P16" 
  },
  {
    title: "El Poder de la Provocación",
    description: "La intervención más efectiva no es técnica, sino conductual. Controlar el envío de memes y grabaciones sin permiso es clave.",
    highlight: "-21% Proclividad",
    quote: "Reducir la provocación es el punto de intervención más efectivo identificado cuantitativamente.",
    source: "Autores"
  },
  {
    title: "Cultura de la Insinuación",
    description: "El consumo de videos violentos y desagradables actúa como un predictor de comportamientos agresivos futuros.",
    highlight: "11% Reducción",
    quote: "Aceptar videos violentos sobre terceros aumenta el riesgo de normalizar la agresión.",
    source: "Hallazgos Logit"
  }
];

export const QUIZ_QUESTIONS = [
  {
    question: "¿Cuál es el porcentaje de estudiantes universitarios que ha experimentado ciberacoso en la postpandemia según este estudio?",
    options: ["10%", "23%", "45%", "60%"],
    correctAnswer: 1,
    feedback: "El estudio reporta una prevalencia del 23%, lo cual es consistente con rangos internacionales en educación superior."
  },
  {
    question: "De acuerdo al modelo predictivo Logit, ¿qué variable tiene el doble de impacto al ser controlada?",
    options: ["La Insinuación (videos)", "La Ubicación geográfica", "La Provocación (memes/rumores)", "El Uso de redes sociales"],
    correctAnswer: 2,
    feedback: "Controlar la provocación reduce un 21% la probabilidad de ejercer ciberacoso, frente al 11% de la insinuación."
  },
  {
    question: "¿Qué comportamiento fue identificado como el más frecuente ocasionalmente?",
    options: ["Filtrar información confidencial", "Enviar amenazas directas", "Ver rumores sobre compañeros", "Subir fotos sin permiso"],
    correctAnswer: 2,
    feedback: "El 34.76% de los estudiantes reportó ver rumores sobre otros, siendo este el comportamiento más común."
  }
];
