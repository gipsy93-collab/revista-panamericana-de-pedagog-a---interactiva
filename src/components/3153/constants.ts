export const ARTICLE_META = {
  id: '3153',
  title: 'Experiencias de discriminación basada en apariencia física en estudiantes',
  carouselTitle: 'LA ESTÉTICA DEL PREJUICIO',
  subtitle: 'Universidad Privada, Monterrey, México',
  authors: 'Ramos-Solís, Sáenz-González, Burnes-Garza & Elizondo-García',
  institution: 'Universidad de Monterrey (UDEM)',
  doi: '10.21555/rpp.v38.3153',
  volume: 'Vol. 38',
  date: '2024',
  n: 12,
  context: 'Entorno de élite académica',
};

export const LIMITATIONS = [
  'Muestra de conveniencia muy pequeña (n=12).',
  'Contexto socioeconómico de alto nivel (privado) que impide generalización a universidades públicas.',
  'Enfoque unilateral: no se indaga en el perfil cognitivo de los "agresores".',
  'Total ausencia de seguimiento o de intervenciones.',
];

export const DIMENSIONS = [
  {
    code: 'ESTIGMA',
    name: 'El Voto de la Piel',
    emoji: '👁️',
    desc: 'El color de la piel y el estilo de vestimenta actúan como barreras de aislamiento instantáneo para formar grupos o fraternizar.',
  },
  {
    code: 'MENTAL',
    name: 'Ansiedad Somática',
    emoji: '🧠',
    desc: 'Baja autoestima profunda, sensación de asfixia y estrés por sentirse "juzgado y bajo la lupa" de forma crónica.',
  },
  {
    code: 'ACAD',
    name: 'Caída de Notas',
    emoji: '📉',
    desc: 'Disonancia cognitiva: Los alumnos reportan extrema desmotivación, cortan su participación verbal en el aula y cancelan postulaciones.',
  },
  {
    code: 'INST',
    name: 'Ceguera Estructural',
    emoji: '🏢',
    desc: 'Inexistencia de estrategias de afrontamiento reales y total ignorancia del padrón sobre protocolos de emergencia institucional.',
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: 'Según esta investigación, en los campus de élite analizados, el "estigma social" no se limitó únicamente al nivel económico, sino que se fijó agresivamente en:',
    options: ['Las calificaciones de secundaria', 'El color de piel, ropa y tatuajes', 'La orientación sexual únicamente', 'El nivel de inglés hablado'],
    correct: 1,
    explanation: 'El estudio corroboró que el color de piel, el índice de masa corporal y elementos como tatuajes o ropa no de diseñador, fueron detonantes de segregación social instantánea (ej. negarse a hacer equipo con ellos).',
  },
  {
    question: '¿Cuál fue uno de los peores efectos ACADÉMICOS que sufrieron las víctimas, más allá del aspecto psicológico?',
    options: ['Falta de atención al maestro y disminución voluntaria y aguda de la participación en clase', 'Aumento de agresividad contra maestros', 'Mayor cantidad de tareas entregadas por perfeccionismo ansioso', 'Expulsión directa de la institución'],
    correct: 0,
    explanation: 'La discriminación apagó la proactividad. Los estudiantes narraron cómo el miedo al juicio paralizó su desempeño, se silenciaron en los debates, y perdieron concentración al estar obsesionados evaluando cómo se veían al resto del aula.',
  },
  {
    question: 'Frente a las oleadas de "carrilla", hostilidad o exclusión, ¿qué estrategia de "afrontamiento" predominaba entre estos universitarios?',
    options: ['Liderar marchas confrontativas dentro del campus universitario', 'Ninguna clara; la mayoría carecía de herramientas cognitivas de defensa y simplemente ignoraba pasivamente los hechos', 'Asistir masivamente a terapia', 'Ir de inmediato con las autoridades e iniciar procesos penales'],
    correct: 1,
    explanation: 'La carencia de escudos cognitivos fue generalizada. No existían mecanismos psicológicos eficientes en su caja de herramientas. Se limitaban a paralizarse o bloquear el estímulo (ignorar).',
  },
  {
    question: 'Bajo el paradigma cualitativo del "Grounded Theory" evaluado en el texto, ¿Qué expusieron explícitamente los estudiantes sobre las directrices de PAZ o departamentos de apoyo de la universidad?',
    options: ['Eran perfectos con atención psiquiátrica gratuita semanal', 'Los desconocían casi por completo y operaban con nula comunicación institucional hacia ellos', 'Estaban conformados solo por psicólogos', 'Tenían precios excesivos a pesar de ser estudiantes activos'],
    correct: 1,
    explanation: 'El vacío de comunicación institucional fue dramático. Los informantes indicaron que "no conocían de estos grupos que les puedan ayudar", dejando la infraestructura inclusiva como "letra muerta".',
  },
  {
    question: 'El estudio arroja una lección clave a nivel "Ley General de la Educación Superior (LGES)":',
    options: ['Los códigos de vestimenta rígidos salvan a los campus de discriminación', 'La discriminación de "pasillo" requiere abordarse no solo como riña de jóvenes, sino con apoyo psicológico activo, porque fractura la educación.', 'Las universidades deben expulsar a cualquier persona de bajo estrato', 'Es imposible detener las burlas, así que se debe enseñar resiliencia ruda.'],
    correct: 1,
    explanation: 'La discriminación interfiere violentamente con el derecho estipulado por la LGES a una educación y desarrollo integral. Los efectos de salud mental demandan que la "carrilla" social se escale como violencia estructural, no juego inocente.',
  },
];
