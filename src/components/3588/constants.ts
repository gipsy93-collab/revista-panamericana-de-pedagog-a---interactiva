export const ARTICLE_META = {
  id: '3588',
  title: 'Análisis psicométrico de una escala para medir la intención de deserción universitaria: un estudio piloto',
  carouselTitle: 'PSICOMETRÍA // MÉXICO',
  subtitle: 'VALIDACIÓN DE LA ESCALA BÄULKE EN YUCATÁN',
  abstract: 'Estudio instrumental que adapta y valida la Escala de Intención de Deserción de Bäulke et al. (2022) en el contexto mexicano. Con una muestra piloto de 71 estudiantes en Yucatán, el análisis reporta una confiabilidad excepcional (ω = .959) y confirma la estructura multidimensional de la intención de abandono, permitiendo una detección temprana basada en evidencia psicométrica robusta.',
  authors: 'Euan-Catzin, A. J. & Canto-Herrera, P. J.',
  institution: 'Universidad Autónoma de Yucatán (UADY), México',
  doi: '10.21155/rpp.3588',
  volume: 'Vol. 41',
  date: 'Noviembre 2026',
  n: 71,
  context: 'Yucatán, México (Pública y Privada)',
  methodology: 'Cuantitativo Instrumental (Análisis Psicométrico)',
  phases: ['Traducción Sistemática', 'Recolección Híbrida', 'Análisis de Confiabilidad (Cronbach/Omega)', 'Validación Convergente']
};

export const LIMITATIONS = [
  'Tamaño muestral reducido (n=71); insuficiente para análisis factoriales confirmatorios.',
  'Sesgo de género significativo: el 87% de la muestra son mujeres.',
  'Alcance geográfico limitado a una sola entidad federativa (Yucatán).',
  'Diseño transversal que no permite evaluar la estabilidad temporal de la intención.',
];

export const DIMENSIONS = [
  {
    code: 'MODELO',
    name: 'Escala Bäulke',
    emoji: '📐',
    desc: 'Instrumento de 15 ítems que distingue entre intención de deserción e intención de cambio de carrera.',
    highlights: [
      'Supera limitaciones de ítems únicos.',
      'Definición conceptual explícita.',
      'Basado en modelo cognitivo de decisión.'
    ]
  },
  {
    code: 'CONFIG',
    name: 'Confiabilidad',
    emoji: '💎',
    desc: 'Altos niveles de consistencia interna en todas las dimensiones, alcanzando .969 en decisión final.',
    highlights: [
      'Omega total: .959 (Excelente).',
      'Alfa de Cronbach: .764 - .969.',
      'Propiedades similares al estudio original.'
    ]
  },
  {
    code: 'CONVERG',
    name: 'Validez',
    emoji: '🔗',
    desc: 'Correlaciones moderadas a fuertes (r= .570) con instrumentos previamente validados en México.',
    highlights: [
      'Correlación fuerte en Deliberación.',
      'Validación externa confirmada.',
      'Uso de correlación de Spearman.'
    ]
  },
  {
    code: 'INVERSA',
    name: 'Factores Protectores',
    emoji: '🛡️',
    desc: 'La intención de deserción se correlaciona inversamente con la motivación y la autoeficacia.',
    highlights: [
      'Motivación Académica: r = -.326.',
      'Autoeficacia Académica: r = -.436.',
      'A mayor autoeficacia, menor intención.'
    ]
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Qué diferencia a la Escala Bäulke de otros instrumentos tradicionales de deserción?',
    options: [
      'Mide la deserción real consumada.',
      'Distingue entre intención de deserción e intención de cambio de carrera.',
      'Utiliza una sola pregunta de sí/no.',
      'Solo se aplica a estudiantes graduados.'
    ],
    correct: 1,
    explanation: 'A diferencia de medir el acto, esta escala evalúa el proceso mental y distingue motivos de abandono total frente a cambios de programa.',
  },
  {
    question: '¿Cuál fue el coeficiente Omega de McDonald reportado para la escala total en la muestra mexicana?',
    options: ['.550', '.764', '.959', '.990'],
    correct: 2,
    explanation: 'El estudio reportó un ω = .959, indicando una consistencia interna casi perfecta del instrumento adaptado.',
  },
  {
    question: '¿Qué relación se encontró entre la autoeficacia académica y la intención de deserción?',
    options: [
      'Correlación positiva (a más autoeficacia, más deserción).',
      'Correlación nula.',
      'Correlación inversa (a más autoeficacia, menos intención).',
      'Solo hay relación en mujeres.'
    ],
    correct: 2,
    explanation: 'Se encontró una correlación inversa moderada (r = -.436), confirmando que sentirse capaz académicamente es un factor protector.',
  },
  {
    question: '¿Cuál fue una de las dimensiones analizadas con mayor consistencia interna (.969)?',
    options: ['Percepción de no encajar', 'Búsqueda de información', 'Decisión final', 'Análisis/Deliberación'],
    correct: 2,
    explanation: 'La dimensión de "Decisión final" mostró el alfa de Cronbach más alto (.969- .970), reflejando la claridad de este estado terminal.',
  },
  {
    question: '¿Cuál es la principal recomendación de los autores para futuras investigaciones?',
    options: [
      'Reducir el número de ítems de la escala.',
      'Cambiar el idioma de aplicación al inglés.',
      'Aumentar el tamaño y diversidad de la muestra.',
      'Dejar de medir la intención y enfocarse solo en notas.'
    ],
    correct: 2,
    explanation: 'Debido a que fue un estudio piloto con n=71, los autores enfatizan la necesidad de muestras más grandes para realizar análisis factoriales confirmatorios.',
  },
];
