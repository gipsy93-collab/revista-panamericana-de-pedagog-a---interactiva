import { QuizQuestion, RegionalData, Perspective, Strategy, TypeResult } from './types';

export const ARTICLE_DATA = {
  title: "Análisis de la formación docente para el desarrollo del pensamiento crítico",
  authors: "Laura García Martínez & William René Reyes Cabrera",
  doi: "10.21555/rpp.3570",
  volume: "N° 41 (2026)",
  centralFinding: "El pensamiento crítico en la formación docente no debe entenderse únicamente como una competencia técnica, sino como una práctica transformadora que articula lo cognitivo, lo ético y lo político desde la primera infancia.",
  introduction: {
    problematic: "Las brechas formativas entre docentes de educación preescolar en distintas regiones del mundo han generado desigualdades significativas en el desarrollo de habilidades cognitivas complejas como el pensamiento crítico en la primera infancia. Existe una falta de estándares internacionales claros sobre el desarrollo de competencias críticas, y los programas de formación docente a menudo mantienen enfoques tradicionales orientados hacia instrucciones mecánicas, especialmente en países de bajos recursos económicos.",
    researchQuestion: "¿Qué procesos formativos tienen los futuros docentes para el desarrollo del pensamiento crítico en estudiantes de educación preescolar?",
    objective: "Determinar los procesos formativos que tienen los docentes en formación para el desarrollo del pensamiento crítico en estudiantes de educación preescolar."
  },
  methodology: {
    approach: "Revisión sistemática utilizando la metodología PRISMA.",
    searchStrategy: "Estrategia PEO (Population, Exposure, Outcome) en Web of Science, ERIC, Academic Search Ultimate y Education Source.",
    prismaResults: {
      initial: 51,
      duplicatesRemoved: 2,
      topicFiltered: 24,
      included: 15
    }
  },
  results: {
    geographicalDistribution: [
      { region: "Europa", n: 7, percentage: 46.6, countries: "España (4), Finlandia, Reino Unido" },
      { region: "Asia", n: 6, percentage: 40.0, countries: "Corea del Sur, China, Turquía, Emiratos Árabes, Singapur" },
      { region: "Sudamérica", n: 1, percentage: 6.7, countries: "Costa Rica" },
      { region: "Norteamérica", n: 1, percentage: 6.7, countries: "Israel" }
    ] as RegionalData[],
    perspectives: [
      { focus: "Reflexión sobre la práctica", authors: "ElSayary y Mohebi (2025); Lim (2023); Niemi et al. (2024); Sabariego-Puit et al. (2020); Yigit-Gencten et al. (2024)", characteristics: "Autorreflexión, autoeficacia, toma de decisiones pedagógicas" },
      { focus: "Razonamiento en entornos STEM", authors: "Çiftçi y Topçu (2023); Evagorou (2024); Nong et al. (2022)", characteristics: "Argumentación, formulación de hipótesis, evaluación de evidencias" },
      { focus: "Formación ética y ciudadana", authors: "Birkeland (2015); Lee et al. (2018)", characteristics: "Contextualización, cuestionamiento de supuestos socioculturales" },
      { focus: "Educación política y transformadora", authors: "Díez-Ros et al. (2024); Gatti y Torrego-Egido (2024); Ziv (2015)", characteristics: "Derechos humanos, democracia, justicia social, compromiso ético" },
      { focus: "Creatividad y pensamiento divergente", authors: "Ramírez-Abrahams et al. (2024); Soto-González et al. (2023)", characteristics: "Resolución crítica de problemas, conexión emociones-crítica social" }
    ] as Perspective[],
    strategies: [
      { strategy: "Activas y experienciales", description: "Aprendizaje basado en proyectos, Aprendizaje-Servicio", authors: "Lee et al. (2018); Ramírez-Abrahams et al. (2024)" },
      { strategy: "Artísticas y creativas", description: "Danza, pintura, teatro, expresiones artísticas", authors: "Soto-González et al. (2023)" },
      { strategy: "Basadas en lenguaje y argumentación", description: "Análisis crítico del discurso, lectura en voz alta con preguntas", authors: "Birkeland (2015); Yigit-Gencten et al. (2024)" },
      { strategy: "Críticas y reflexivas", description: "Reflexión sobre identidad docente, pedagogía feminista", authors: "Díez-Ros et al. (2024); Ziv (2015)" },
      { strategy: "Investigación formativa", description: "Codiseño, resolución de problemas reales", authors: "Sabariego-Puit et al. (2020); Niemi et al. (2024)" },
      { strategy: "Tecnológicas y STEM", description: "Pensamiento computacional, alfabetización digital", authors: "Çiftçi y Topçu (2023); Lim (2023); Evagorou (2024)" }
    ] as Strategy[],
    types: [
      { type: "Reflexivo", description: "Cuestionamiento de prácticas educativas, autoconocimiento", studies: "ElSayary y Mohebi (2025); Birkeland (2015); Lee et al. (2018)" },
      { type: "Analítico", description: "Razonamiento lógico, evaluación de información, STEM", studies: "Çiftçi y Topçu (2023); Evagorou (2024); Lim (2023)" },
      { type: "Argumentativo", description: "Justificación de ideas, consideración de alternativas", studies: "Yigit-Gencten et al. (2024); Ziv (2015)" },
      { type: "Creativo-crítico", description: "Pensamiento abstracto, resolución de problemas complejos", studies: "Soto-González et al. (2023); Díez-Ros et al. (2024)" }
    ] as TypeResult[],
    difficulties: [
      "Preconcepciones naturalizadas que dificultan la apertura a perspectivas críticas o interculturales",
      "Falta de espacios en el sistema educativo para confrontar ideas y dialogar desde la diferencia",
      "Limitaciones del entorno educativo, institucional, cultural y socioeconómico",
      "Rigidez de los planteles de estudios y sobrecarga de contenidos",
      "Escasa formación de los formadores en pensamiento crítico",
      "Contextos escolares marcados por la estandarización y la idea de rendimiento"
    ],
    tensionQuotes: [
      "Decimos 'pensamiento crítico es político' pero estudiamos países donde la política educativa funciona.",
      "Formamos críticos de teoría, no pedagogos de práctica.",
      "Queremos pensamiento crítico transformador en sistemas diseñados para la estandarización.",
      "Investigamos pensamiento crítico infantil sin preguntar a los niños."
    ]
  },
  limitations: [
    "El 86.6% de los estudios revisados provienen de Europa y Asia —contextos con infraestructura y tradiciones democráticas consolidadas.",
    "Solo 15 estudios revisados; ninguno consulta a los niños de preescolar.",
    "Falta de estándares internacionales claros sobre el desarrollo de estas competencias.",
    "La producción académica sobre pensamiento crítico en educación es escasa en Latinoamérica y África."
  ],
  regionalData: [
    { name: "Europa", value: 46.6, n: 7, countries: "España (4), Finlandia, Reino Unido" },
    { name: "Asia", value: 40.0, n: 6, countries: "Corea del Sur, China, Turquía, EAU, Singapur" },
    { name: "Sudamérica", value: 6.7, n: 1, countries: "Costa Rica" },
    { name: "Norteamérica", value: 6.7, n: 1, countries: "Israel" },
  ] as RegionalData[],
  quiz: [
    {
      question: "¿Cuál es el hallazgo central del artículo respecto al pensamiento crítico en la formación docente?",
      options: [
        "Es una competencia técnica que se adquiere mediante instrucción mecánica.",
        "Es una práctica transformadora que articula lo cognitivo, ético y político.",
        "Es un concepto que solo aplica a la educación superior, no a la preescolar.",
        "Es un proceso que depende exclusivamente de la tecnología educativa."
      ],
      correct: 1
    },
    {
      question: "¿Qué metodología utilizaron los autores para realizar este estudio?",
      options: [
        "Estudio de caso cualitativo.",
        "Encuesta experimental.",
        "Revisión sistemática (PRISMA).",
        "Análisis estadístico de datos secundarios."
      ],
      correct: 2
    },
    {
      question: "¿Qué factor dificulta principalmente el desarrollo del pensamiento crítico según el estudio?",
      options: [
        "La falta de interés de los estudiantes.",
        "La excesiva formación en filosofía.",
        "La rigidez de los planes de estudio y la estandarización.",
        "La falta de acceso a internet."
      ],
      correct: 2
    }
  ] as QuizQuestion[]
};
