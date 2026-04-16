export const LIMITATIONS = [
  'El estudio reconoce explícitamente que las variables analizadas permiten solo un "análisis somero". Con un máximo del 8.9% de varianza explicada, el 91.1% de los factores que determinan la deserción no están en este modelo.',
  'Variables no medidas: ingreso familiar, trabajo juvenil, clima escolar, calidad docente, salud mental, violencia en el entorno, expectativas familiares.',
  'Nivel de medición: falta de variables de razón o intervalo que permitieran modelos más robustos.',
  'Alcance temporal: solo mide entre primer y segundo semestre; no sigue hasta graduación.',
  'Contexto específico: resultados de una sola escuela; limitada generalización.',
  'No se entrevistó a estudiantes que desertaron. El "por qué" permanece abierto.',
];
export const ARTICLE_META = {
  id: '3411',
  title: 'Mantenerse en la escuela: desafiliación en un bachillerato tecnológico',
  carouselTitle: 'DESERCIÓN',
  authors: 'José Alfonso Jiménez Moreno & Zorayda Feria Juárez',
  institution: 'UNAM / CETis 74, Ensenada, México',
  doi: '10.21555/rpp.3411',
  volume: 'Vol. 41',
  date: 'Agosto 2025',
  n: 500,
  cohort: '2023-2025',
  context: 'CETis 74, Ensenada, Baja California, México',
};

export const PREDICTORS = [
  {
    icon: 'BookOpen',
    title: 'Promedio de Secundaria',
    value: '2.04x',
    color: 'text-blue-500',
    description:
      'Cada punto adicional en el promedio duplica la probabilidad de permanecer. Explica el 8.9% de la varianza (R²).',
  },
  {
    icon: 'Monitor',
    title: 'La Paradoja: Tener Computadora',
    value: '0.399',
    color: 'text-rose-500',
    description:
      'Los estudiantes SIN computadora tienen 2.5x más probabilidad de quedarse. Predice deserción, no permanencia.',
  },
  {
    icon: 'Users',
    title: 'Sexo (Masculino)',
    value: '0.516',
    color: 'text-blue-500',
    description:
      'Los hombres representan 58% de bajas vs. 46% de matrícula. Pero explica solo el 3.1% de la varianza.',
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: '¿Cuál es la tasa de deserción encontrada entre primer y segundo semestre?',
    options: ['15%', '28%', '35%', '42%'],
    correct: 1,
    explanation:
      'El estudio reporta que 141 de 500 estudiantes (28%) causaron baja antes del segundo semestre.',
  },
  {
    question: 'Según el modelo, ¿qué variable DUPLICA la probabilidad de permanecer?',
    options: ['Tener computadora', 'Ser mujer', 'Promedio de secundaria', 'Tipo de secundaria'],
    correct: 2,
    explanation:
      'El promedio de egreso de secundaria presenta un Exp(B)=2.042, lo que significa que cada punto adicional duplica las probabilidades de permanecer.',
  },
  {
    question: '¿Qué significa la "paradoja del capital digital" en este estudio?',
    options: [
      'Que Internet mejora las notas',
      'Que tener computadora predice deserción',
      'Que los sin tecnología abandonan más',
      'Que el smartphone es clave',
    ],
    correct: 1,
    explanation:
      'Contra lo esperado, tener computadora en casa predice deserción (Exp(B)=0.399), no éxito académico.',
  },
  {
    question: '¿Qué porcentaje de la varianza explica el modelo completo como máximo?',
    options: ['3.1%', '5.7%', '8.9%', '28%'],
    correct: 2,
    explanation:
      'El mejor modelo (antecedentes escolares) alcanza un R² de Nagelkerke de 8.9%, dejando un 91.1% no explicado.',
  },
  {
    question: '¿Cuál fue el contexto del estudio?',
    options: ['UNAM Ciudad de México', 'CETis 74 Ensenada', 'UPN Ecatepec', 'UCA Buenos Aires'],
    correct: 1,
    explanation:
      'La investigación se realizó en el CETis 74 de Ensenada, Baja California, México, con la cohorte 2023-2025.',
  },
];
