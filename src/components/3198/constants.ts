export const ARTICLE_META = {
  id: '3198',
  title: 'Aprendizaje de las Tecnologías de la Información y la Comunicación en el envejecimiento activo: un estudio cualitativo en Buenos Aires',
  carouselTitle: 'SILVER SURFERS // ENVEJECIMIENTO ACTIVO',
  subtitle: 'PREVENCIÓN DEL AISLAMIENTO SOCIAL MEDIANTE APRENDIZAJE MÓVIL',
  abstract: 'Estudio cualitativo (Grounded Theory) en Buenos Aires sobre cómo el aprendizaje móvil previene el aislamiento social mediante la Teoría TRIC. La investigación analiza cómo 27 adultos mayores integran el smartphone en su vida cotidiana para fortalecer la autonomía y los vínculos familiares.',
  authors: 'Hernández-Silvera, Pécora & Núñez',
  institution: 'Universidad Católica Argentina (UCA)',
  doi: '10.21555/rpp.3198',
  volume: 'Vol. 39',
  date: 'Noviembre 2024',
  n: 27,
  ageRange: '60-95 años',
  context: 'AMBA (Avellaneda, Lugano, Barracas), Buenos Aires',
  methodology: 'Grounded Theory (Teoría Fundamentada)',
  stages: ['Codificación Abierta', 'Codificación Axial', 'Codificación Selectiva']
};

export const LIMITATIONS = [
  'Muestra limitada a contextos urbanos específicos de Buenos Aires.',
  'Estudio transversal sin seguimiento longitudinal de efectos.',
  'Posible sesgo hacia adultos mayores ya comprometidos con el envejecimiento activo.',
  'Ausencia de comparación entre diferentes niveles socioeconómicos.',
  'No se incluye la perspectiva de quienes no acceden a talleres comunitarios.',
];

export const DIMENSIONS = [
  {
    code: 'ACT',
    name: 'Espacios de Encuentro',
    emoji: '🧘',
    desc: 'Participación en talleres de memoria, yoga, teatro y gimnasia como motores de socialización y reserva cognitiva.',
    highlights: [
      'Talleres de memoria para estimulación cognitiva.',
      'Yoga y teatro para expresión artística.',
      'Almuerzos compartidos como red de apoyo mutuo.'
    ]
  },
  {
    code: 'DIG',
    name: 'Ecosistema Digital',
    emoji: '📱',
    desc: 'Uso estratégico de dispositivos: WhatsApp para vínculos, Google para información y YouTube para entretenimiento (K-pop).',
    highlights: [
      'WhatsApp: Cordón umbilical con hijos y nietos.',
      'YouTube: Descubrimiento de música coreana y tutoriales.',
      'Homebanking: Búsqueda de independencia financiera.'
    ]
  },
  {
    code: 'BAR',
    name: 'Barreras & Temores',
    emoji: '🛡️',
    desc: 'El miedo al fraude bancario y la complejidad técnica generan una dependencia inicial de familiares y amigos.',
    highlights: [
      'Temor al robo de información personal.',
      'Preocupación por la falta de paciencia familiar.',
      'Sensación de complejidad ante fallas técnicas.'
    ]
  },
  {
    code: 'AUT',
    name: 'Giro de Autonomía',
    emoji: '🔓',
    desc: 'La superación del estigma "demasiado viejo para aprender" devuelve la dignidad y el sentimiento de pertenencia social.',
    highlights: [
      'Sentimiento de logro al resolver problemas solos.',
      'Reducción drástica de la soledad percibida.',
      'Identificación como "usuarios regulares" de internet.'
    ]
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Qué concepto teórico integra la dimensión relacional con el uso de la tecnología?',
    options: ['Envejecimiento Activo', 'Educomunicación', 'Tecnologías de la R-elación (TRIC)', 'Reserva Cognitiva'],
    correct: 2,
    explanation: 'El enfoque TRIC (Tecnologías de la Relación, Información y Comunicación) subraya que más allá del uso instrumental, la tecnología crea espacios emocionales y vínculos de confianza vitales para los adultos mayores.',
  },
  {
    question: 'Según el estudio, ¿cuál fue la principal barrera o preocupación de los adultos mayores frente a las TIC?',
    options: ['El costo de los dispositivos móviles', 'El temor a robos de información y seguridad bancaria', 'La falta de interés en aprender', 'La pérdida de memoria a corto plazo'],
    correct: 1,
    explanation: 'El temor a estafas virtuales y robos de información bancaria representó una de las preocupaciones más significativas, actuando como la principal barrera psicológica.',
  },
  {
    question: '¿A quiénes prefieren acudir los adultos mayores cuando enfrentan un reto tecnológico?',
    options: ['Al soporte técnico de la compañía', 'A tutoriales en YouTube', 'A sus familiares (hijos o nietos) y pares', 'A profesores universitarios'],
    correct: 2,
    explanation: 'El estudio destaca que el apoyo social y familiar es crucial. El andamiaje emocional provisto por la familia directa ayuda a adquirir confianza tecnológica.',
  },
  {
    question: '¿Qué motivación principal los impulsa inicialmente a aprender a usar el celular?',
    options: ['Evitar el aislamiento y comunicarse con su red afectiva', 'Conseguir mejores oportunidades laborales', 'Comprar productos en línea con descuento', 'Leer noticias internacionales'],
    correct: 0,
    explanation: 'El uso del teléfono móvil se vuelve fundamental primariamente para no quedar excluidos del tejido social, manteniendo el vínculo vivo con hijos y nietos lejanos.',
  },
  {
    question: 'El tipo de estudio cualitativo empleado para generar conocimiento desde los datos fue:',
    options: ['Experimento Ciego', 'Teoría Fundamentada (Grounded Theory)', 'Estudio Clínico Longitudinal', 'Revisión Sistemática (PRISMA)'],
    correct: 1,
    explanation: 'Se empleó Teoría Fundamentada, analizando las 27 entrevistas mediante método comparativo constante para codificar y descubrir conceptos emergentes desde la voz de los mayores.',
  },
];
