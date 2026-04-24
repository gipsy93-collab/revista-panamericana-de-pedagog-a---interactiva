import type { Branch, TourStep } from './types';

export const branches: Branch[] = [
  {
    id: 'rama1',
    position: 'top-left' as any,
    title: 'Contexto y Problematica',
    icon: '📊',
    color: '#2563EB',
    subNodes: [
      {
        id: '1.1',
        title: 'Impacto economico de la IA',
        icon: '💰',
        popup: {
          type: 'info',
          title: 'Impacto Economico de la IA',
          content: [
            { value: '$15.7 billones a la economia global para 2030', highlight: true },
            { value: '26% de aumento en la economia global', highlight: true },
          ],
          source: 'Bezzazi et al., 2021',
          animation: 'barras',
        },
      },
      {
        id: '1.2',
        title: 'Dos posturas enfrentadas',
        icon: '⚖️',
        popup: {
          type: 'compare',
          title: 'Visiones en Conflicto',
          content: [
            { label: 'Tradicional', value: 'El jurista = experto en razonamiento legal. La parte tecnica para ingenieros' },
            { label: 'Innovadora', value: 'El jurista necesita habilidades digitales para no quedar obsoleto' },
          ],
          animation: 'balanza',
        },
      },
      {
        id: '1.3',
        title: 'Brecha curricular',
        icon: '🎓',
        popup: {
          type: 'info',
          title: 'Brecha en la Formacion',
          content: [
            { value: 'Solo 10% incluye tecnologia como obligatoria', highlight: true },
            { value: '58% la ofrece como optativa' },
            { value: '37% incluye informatica juridica electiva' },
          ],
          animation: 'circular',
        },
      },
    ],
  },
  {
    id: 'rama2',
    position: 'top-right' as any,
    title: 'Metodologia del Estudio',
    icon: '🔍',
    color: '#0891B2',
    subNodes: [
      {
        id: '2.1',
        title: 'Analisis comparativo',
        icon: '📈',
        popup: {
          type: 'info',
          title: 'Analisis de 38 Facultades',
          content: [
            { value: '38 facultades de derecho top mundial', highlight: true },
            { value: 'Rankings: THE 2022 y QS 2021' },
            { value: 'Busqueda de materias: legal tech, derecho digital, informatica juridica' },
          ],
          animation: 'mapa',
        },
      },
      {
        id: '2.2',
        title: 'Investigacion cualitativa',
        icon: '🎙️',
        popup: {
          type: 'info',
          title: 'Entrevistas a Juristas',
          content: [
            { value: '7 juristas en activo en Mexico', highlight: true },
            { value: 'Entrevistas semiestructuradas (60 min c/u)' },
            { value: 'Perfiles: magistrados, socios de firma, litigantes, expertos fiscales' },
          ],
          animation: 'personas',
        },
      },
      {
        id: '2.3',
        title: 'Analisis de datos',
        icon: '🔬',
        popup: {
          type: 'info',
          title: 'Procesamiento de Datos',
          content: [
            { value: 'Metodo comparativo constante', highlight: true },
            { value: 'Codificacion: abierta, axial y selectiva' },
            { value: 'Triangulacion de investigadores' },
          ],
          animation: 'flujo',
        },
      },
    ],
  },
  {
    id: 'rama3',
    position: 'left' as any,
    title: 'Hallazgos Curriculares',
    icon: '📚',
    color: '#7C3AED',
    subNodes: [
      {
        id: '3.1',
        title: 'Diferencias geograficas',
        icon: '🌍',
        popup: {
          type: 'compare',
          title: 'Common Law vs. Derecho Civil',
          content: [
            { label: 'Common Law', value: 'Mayor flexibilidad y oferta tecnologica' },
            { label: 'Derecho Civil', value: 'Mas rezagadas en integracion tecnologica' },
          ],
          animation: 'columnas',
        },
      },
      {
        id: '3.2',
        title: 'Casos destacados',
        icon: '🏛️',
        popup: {
          type: 'cards',
          title: 'Universidades Innovadoras',
          content: [
            { label: 'Harvard', value: 'Law, Science & Technology + Computer Science for Lawyers' },
            { label: 'Stanford', value: 'Statistical Inference in Law' },
            { label: 'Columbia', value: 'Concentraciones en data analytics, privacidad y propiedad intelectual' },
            { label: 'Rosario (Colombia)', value: 'Especializacion academica en machine learning y blockchain' },
          ],
          animation: 'tarjetas',
        },
      },
      {
        id: '3.3',
        title: 'Proposito formativo',
        icon: '🎯',
        popup: {
          type: 'list',
          title: 'Objetivos de la Formacion',
          content: [
            { value: 'No solo usar software, sino comprender principios tecnologicos' },
            { value: 'Analisis critico de implicaciones eticas y sociales' },
            { value: 'Argumentacion basada en evidencia empirica' },
          ],
          animation: 'engranajes',
        },
      },
    ],
  },
  {
    id: 'rama4',
    position: 'right' as any,
    title: 'Voces de Profesionales',
    icon: '💬',
    color: '#DB2777',
    subNodes: [
      {
        id: '4.1',
        title: 'Formacion universitaria',
        icon: '🎓',
        popup: {
          type: 'testimonials',
          title: 'Testimonios sobre la Formacion',
          content: [
            { label: 'P1', value: '"Un profesor me reprobo por tener los codigos en la compu, no en papel"' },
            { label: 'P7', value: '"Nunca lleve un curso sobre como usar tecnologia para gestionar un despacho"' },
            { label: 'P3', value: '"Teniamos informatica juridica con bases de datos incipientes"' },
          ],
          animation: 'dialogo',
        },
      },
      {
        id: '4.2',
        title: 'Practica profesional',
        icon: '💼',
        popup: {
          type: 'testimonials',
          title: 'Experiencias en la Practica',
          content: [
            { label: 'P5', value: '"Uso ChatGPT y reduje 80% mi carga administrativa"' },
            { label: 'P1', value: '"Basicamente, el desconocimiento hace que no se sientan seguros"' },
            { label: 'P3', value: '"Con la pandemia implementamos sistema de gestion de casos"' },
          ],
          animation: 'timeline',
        },
      },
      {
        id: '4.3',
        title: 'Resistencias',
        icon: '🚧',
        popup: {
          type: 'list',
          title: 'Resistencias al Cambio',
          content: [
            { label: 'Causa principal', value: 'Falta de conocimiento, no terquedad', highlight: true },
            { label: 'Brecha digital', value: 'Mayor en mujeres a pesar de ser mayoria en facultades' },
            { label: 'Generacional', value: 'No nativos digitales lo perciben como riesgoso' },
          ],
          animation: 'muro',
        },
      },
      {
        id: '4.4',
        title: 'Prospectiva',
        icon: '🔮',
        popup: {
          type: 'testimonials',
          title: 'Mirando al Futuro',
          content: [
            { label: 'P1', value: '"Hay despachos 100% digitales sin sede fisica"' },
            { label: 'P1', value: '"Mexico va con retraso global, somos muy conservadores"' },
            { label: 'P4', value: '"Se abren areas de innovacion y comites de tecnologia"' },
          ],
          animation: 'flecha',
        },
      },
    ],
  },
  {
    id: 'rama5',
    position: 'bottom-left' as any,
    title: 'Competencias Digitales',
    icon: '🎯',
    color: '#059669',
    subNodes: [
      {
        id: '5.1',
        title: 'Alfabetizacion de informacion',
        icon: '📰',
        popup: {
          type: 'info',
          title: 'Alfabetizacion de Informacion',
          content: [{ value: 'Identificar, localizar, recuperar y analizar informacion digital' }],
        },
      },
      {
        id: '5.2',
        title: 'Comunicacion y colaboracion',
        icon: '💬',
        popup: {
          type: 'info',
          title: 'Comunicacion y Colaboracion',
          content: [{ value: 'Interactuar en comunidades digitales, gestionar identidad digital' }],
        },
      },
      {
        id: '5.3',
        title: 'Creacion de contenido',
        icon: '✍️',
        popup: {
          type: 'info',
          title: 'Creacion de Contenido Digital',
          content: [{ value: 'Desarrollar contenido, integrar conocimientos, entender copyright y programacion' }],
        },
      },
      {
        id: '5.4',
        title: 'Seguridad',
        icon: '🔒',
        popup: {
          type: 'info',
          title: 'Seguridad Digital',
          content: [{ value: 'Proteccion de datos personales e identidad digital' }],
        },
      },
      {
        id: '5.5',
        title: 'Resolucion de problemas',
        icon: '🧩',
        popup: {
          type: 'info',
          title: 'Resolucion de Problemas',
          content: [{ value: 'Identificar necesidades, tomar decisiones informadas sobre herramientas digitales' }],
        },
      },
    ],
  },
  {
    id: 'rama6',
    position: 'bottom-right' as any,
    title: 'Conclusiones',
    icon: '✅',
    color: '#DC2626',
    subNodes: [
      {
        id: '6.1',
        title: 'Brecha identificada',
        icon: '⚠️',
        popup: {
          type: 'list',
          title: 'La Brecha Critica',
          content: [
            { value: 'Formacion academica vs. demandas del mercado' },
            { value: 'Adaptacion reactiva, no proactiva' },
            { value: 'Riesgo de graduados mal preparados', highlight: true },
          ],
          animation: 'alerta',
        },
      },
      {
        id: '6.2',
        title: '4 Ejes de transformacion',
        icon: '🎓',
        popup: {
          type: 'list',
          title: 'Ejes de Transformacion',
          content: [
            { label: 'Transversalidad', value: 'No electiva, sino obligatoria', highlight: true },
            { label: 'Pensamiento critico', value: 'Comprension profunda, no solo uso instrumental', highlight: true },
            { label: 'Capacitacion docente', value: 'No se puede ensenar lo que no se domina', highlight: true },
            { label: 'Diseno proactivo', value: 'Anticipar tendencias, no reaccionar', highlight: true },
          ],
          animation: 'checkmarks',
        },
      },
      {
        id: '6.3',
        title: 'Reflexion final',
        icon: '💡',
        popup: {
          type: 'info',
          title: 'La Frase que lo Resume',
          content: [
            { value: 'El abogado del futuro no sera reemplazado por IA, sino por el abogado que sepa usarla con criterio', highlight: true },
          ],
          animation: 'brillo',
        },
      },
    ],
  },
];

export const tourSteps: TourStep[] = [
  { branchId: 'rama1', subNodeId: '1.1', message: 'Comencemos con el impacto economico de la IA en el sector legal' },
  { branchId: 'rama1', subNodeId: '1.2', message: 'Dos visiones enfrentadas sobre el rol del jurista' },
  { branchId: 'rama1', subNodeId: '1.3', message: 'La brecha entre formacion y realidad profesional' },
  { branchId: 'rama2', subNodeId: '2.1', message: 'Conozcamos la metodologia del estudio' },
  { branchId: 'rama2', subNodeId: '2.2', message: 'Las voces de los profesionales en activo' },
  { branchId: 'rama2', subNodeId: '2.3', message: 'El rigor del analisis de datos' },
  { branchId: 'rama3', subNodeId: '3.1', message: 'Diferencias regionales en la oferta academica' },
  { branchId: 'rama3', subNodeId: '3.2', message: 'Casos de universidades lideres' },
  { branchId: 'rama3', subNodeId: '3.3', message: 'El verdadero proposito formativo' },
  { branchId: 'rama4', subNodeId: '4.1', message: 'Testimonios sobre la formacion universitaria' },
  { branchId: 'rama4', subNodeId: '4.2', message: 'Experiencias en la practica profesional' },
  { branchId: 'rama4', subNodeId: '4.3', message: 'Las resistencias al cambio' },
  { branchId: 'rama4', subNodeId: '4.4', message: 'La mirada hacia el futuro' },
  { branchId: 'rama5', subNodeId: '5.1', message: 'Las 5 competencias digitales del marco DigComp 2.2' },
  { branchId: 'rama6', subNodeId: '6.1', message: 'La brecha que debemos cerrar' },
  { branchId: 'rama6', subNodeId: '6.2', message: 'Cuatro ejes para transformar la educacion' },
  { branchId: 'rama6', subNodeId: '6.3', message: 'Una reflexion final para recordar' },
];

export const articleInfo = {
  title: 'Legal education in the digital age: tensions, resistances and opportunities',
  authors: 'Philippe Prince Tritto, Sara-Elvira Galban-Lozano, Monica-del-Carmen Meza-Mejia',
  affiliation: 'Universidad Panamericana, Mexico',
  journal: 'Revista Panamericana de Pedagogia, n. 41 (2026)',
  doi: 'https://doi.org/10.21555/rpp.3557',
  eissn: '2594-2190',
  dates: {
    received: '09-02-2025',
    accepted: '10-13-2025',
    published: '19-11-2025',
  },
  license: 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
  keywords: [
    'Educacion juridica',
    'Competencias tecnologicas',
    'Curriculum academico',
    'Inteligencia Artificial',
    'Transformacion educativa',
    'Legal tech',
    'Educacion interdisciplinaria',
  ],
};

export const quizQuestions = [
  {
    question: 'Que porcentaje de facultades incluye tecnologia como materia obligatoria?',
    options: ['10%', '37%', '58%', '75%'],
    answer: 0,
    feedback: 'Solo el 10% de las facultades tiene tecnologia como obligatoria. El 58% es optativa y el 37% electiva.',
  },
  {
    question: 'Cuantas facultades de derecho se analizaron en el estudio?',
    options: ['20', '30', '38', '50'],
    answer: 2,
    feedback: 'Se analizaron 38 facultades de derecho top mundial segun rankings THE 2022 y QS 2021.',
  },
  {
    question: 'Cual es la causa principal de la resistencia al cambio tecnologico?',
    options: ['Terquedad', 'Falta de conocimiento', 'Falta de recursos', 'Regulacion restrictiva'],
    answer: 1,
    feedback: 'Segun los entrevistados, la causa principal es la falta de conocimiento, no la terquedad.',
  },
  {
    question: 'Cuantas areas de competencia digital incluye el marco DigComp 2.2?',
    options: ['3', '4', '5', '6'],
    answer: 2,
    feedback: 'El marco DigComp 2.2 contempla 5 areas de competencia digital.',
  },
  {
    question: 'Que reduccion de carga administrativa logro P5 usando ChatGPT?',
    options: ['50%', '60%', '80%', '90%'],
    answer: 2,
    feedback: 'P5 redujo 80% su carga administrativa usando ChatGPT.',
  },
];

export const glossary = [
  { term: 'Legal Tech', definition: 'Tecnologia aplicada a la practica del derecho para automatizar y mejorar procesos legales.' },
  { term: 'Blockchain', definition: 'Sistema de registro distribuido que garantiza la seguridad e integridad de datos mediante criptografia.' },
  { term: 'IA Generativa', definition: 'Inteligencia artificial capaz de crear contenido nuevo como texto, imagenes o codigo.' },
  { term: 'DigComp 2.2', definition: 'Marco europeo de competencias digitales con 5 areas y 21 competencias.' },
  { term: 'Codificacion abierta', definition: 'Tecnica de analisis cualitativo donde se asignan etiquetas iniciales a los datos.' },
  { term: 'Triangulacion', definition: 'Metodo que valida resultados usando multiples fuentes o investigadores.' },
  { term: 'Common Law', definition: 'Sistema juridico basado en precedentes judiciales, predominante en paises anglosajones.' },
  { term: 'Derecho Civil', definition: 'Sistema juridico basado en codigos escritos, predominante en Latinoamerica y Europa.' },
];
