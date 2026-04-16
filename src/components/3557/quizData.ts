// ============================================================
// DATOS DE GAMIFICACIÓN — Artículo 3557 (Prince-Galbán)
// "Educación jurídica en la era digital: tensiones,
//  resistencias y oportunidades"
// ============================================================

// ── FICHA TÉCNICA ──────────────────────────────────────────
export const fichaTecnica = {
  titulo: 'Educación jurídica en la era digital: tensiones, resistencias y oportunidades',
  tituloEN: 'Legal education in the digital age: tensions, resistances and opportunities',
  autores: [
    'Philippe Prince Tritto',
    'Sara Elvira Galbán Lozano',
    'Mónica del Carmen Meza Mejía',
  ],
  institucion: 'Universidad Panamericana, México',
  revista: 'Revista Panamericana de Pedagogía, n. 41 (2026)',
  doi: 'https://doi.org/10.21555/rpp.3557',
  tipoArticulo: 'Empírico (metodología mixta: comparativa + cualitativa)',
  temaCentral:
    'Convergencia entre formación jurídica tradicional y competencias tecnológicas emergentes; cómo las facultades de derecho están (o no) adaptando sus currículos a la era digital.',
};

export const LIMITACIONES = [
  'Generalización: la muestra cualitativa es pequeña (7 participantes) y concentrada en México.',
  'Representatividad del análisis comparativo: solo facultades de élite en rankings; no incluye universidades locales o regionales.',
  'Temporalidad: los planes de estudio cambian lentamente; el análisis captura un momento específico.',
  'Sesgo de selección: las entrevistas fueron con juristas tecnológicamente activos; no incluye a quienes resisten la tecnología.',
];

// ── QUIZ (Preguntas de comprensión) ────────────────────────
export const quizQuestions = [
  {
    question:
      '¿Cuál es el hallazgo principal del artículo respecto a la formación jurídica?',
    options: [
      'Las facultades están perfectamente adaptadas a la era digital.',
      'Existe una brecha estructural entre la formación tradicional y las demandas tecnológicas del mercado.',
      'La tecnología es irrelevante para la práctica legal moderna.',
      'Todas las facultades de élite incluyen tecnología en su currículo obligatorio.',
    ],
    correctAnswer: 1,
    explanation:
      'El estudio documenta empíricamente una brecha significativa: solo el 10 % de las facultades de élite incluyen tecnología en su currículo obligatorio.',
  },
  {
    question:
      '¿Qué porcentaje de las facultades de derecho de élite incluye tecnología en su currículo obligatorio?',
    options: ['10 %', '50 %', '80 %', '5 %'],
    correctAnswer: 0,
    explanation:
      'Solo 4 de 38 facultades analizadas (≈ 10 %) integran tecnología como materia obligatoria.',
  },
  {
    question:
      '¿Qué impacto reportó uno de los juristas entrevistados al usar IA en su carga laboral?',
    options: [
      'Aumentó su carga en un 20 %.',
      'No tuvo impacto significativo.',
      'Redujo su carga laboral en un 80 %.',
      'Redujo su carga laboral en un 10 %.',
    ],
    correctAnswer: 2,
    explanation:
      'El participante P5 declaró: "Utilizo ChatGPT y eso me ha ayudado a reducir mi carga laboral en un 80 %".',
  },
  {
    question:
      '¿Qué dicotomía geográfica se observa entre las facultades analizadas?',
    options: [
      'Las facultades europeas son más conservadoras que las americanas.',
      'Las de tradición anglosajona ofrecen mayor flexibilidad tecnológica; las civilistas muestran mayor resistencia al cambio.',
      'No se observan diferencias geográficas relevantes.',
      'Las latinoamericanas lideran la innovación curricular.',
    ],
    correctAnswer: 1,
    explanation:
      'El estudio muestra una dicotomía clara: tradición anglosajona → mayor flexibilidad y amplitud; tradición civilista → mayor resistencia al cambio curricular.',
  },
  {
    question:
      '¿Cuál es el aporte proyectado de la IA al PIB mundial para 2030?',
    options: [
      '$5.2 billones',
      '$15.7 billones',
      '$8.4 billones',
      '$25.1 billones',
    ],
    correctAnswer: 1,
    explanation:
      'Según Bezzazi et al. (2021), la IA aportará $15.7 billones al PIB mundial para 2030, un incremento del 26 %.',
  },
];

// ── FLASHCARDS (Conceptos clave) ───────────────────────────
export const flashcards = [
  {
    id: 'fc-1',
    front: 'Informática Jurídica',
    back: 'Uso de herramientas tecnológicas (software, bases de datos, IA) para la gestión, análisis y práctica del derecho.',
  },
  {
    id: 'fc-2',
    front: 'Derecho Digital',
    back: 'Rama normativa que regula las relaciones jurídicas en el entorno digital: comercio electrónico, protección de datos, ciberdelitos.',
  },
  {
    id: 'fc-3',
    front: 'Brecha Estructural',
    back: 'Desconexión documentada entre lo que enseñan las facultades de derecho y las competencias tecnológicas que exige el mercado laboral.',
  },
  {
    id: 'fc-4',
    front: 'DigComp 2.2',
    back: 'Marco de referencia de la Comisión Europea (2024) que establece las competencias digitales necesarias para ciudadanos y profesionales.',
  },
  {
    id: 'fc-5',
    front: 'Teoría Fundamentada',
    back: 'Método cualitativo (Corbin y Strauss, 1998) usado en el estudio: codificación abierta → axial → selectiva para generar categorías emergentes.',
  },
  {
    id: 'fc-6',
    front: 'Metamorfosis Educativa Incompleta',
    back: 'Concepto del artículo: las facultades reconocen la importancia de la tecnología (ofertan optativas) pero NO la integran en el núcleo obligatorio.',
  },
];

// ── JUEGO DE MEMORIA (pares concepto ↔ dato) ──────────────
export const memoryPairs = [
  {
    id: 'mp-1',
    concept: 'Tradición Civilista',
    match: 'Mayor resistencia al cambio curricular',
  },
  {
    id: 'mp-2',
    concept: 'Tradición Anglosajona',
    match: 'Mayor flexibilidad y oferta tecnológica',
  },
  {
    id: 'mp-3',
    concept: 'IA Generativa (ChatGPT)',
    match: 'Reducción del 80 % de carga laboral',
  },
  {
    id: 'mp-4',
    concept: 'Currículo Obligatorio',
    match: 'Solo presente en el 10 % de facultades de élite',
  },
  {
    id: 'mp-5',
    concept: 'Aporte IA al PIB 2030',
    match: '$15.7 billones (26 % del PIB global)',
  },
  {
    id: 'mp-6',
    concept: 'Empleos futuros vinculados a TIC',
    match: '75 % de los empleos (Collett et al., 2022)',
  },
];
