export const ARTICLE_META = {
  id: '3454',
  title: 'Inclusión y cultura de paz en la universidad: contexto de violencia delictiva',
  carouselTitle: 'CULTURA DE PAZ',
  subtitle: 'La Academia Frente a la Delincuencia en Colima, México',
  authors: 'Ramos-Ramírez & Márquez-Cabellos',
  institution: 'Universidad de Colima (México)',
  doi: '10.21555/rpp.3454',
  volume: 'Vol. 40',
  date: '2025',
  n: 200,
  context: 'Campus Colima, México (Ciudad más violenta del mundo 2022)',
};

export const LIMITATIONS = [
  'Muestra limitada a áreas de humanidades y ciencias sociales.',
  'Diseño de corte transversal (no mide evolución a lo largo del tiempo).',
  'Sesgo potencial de autopercepción y reporte individual de la victimización.',
  'No se desagregan cruces detallados entre violencia y perspectiva de género.',
];

export const DIMENSIONS = [
  {
    code: 'VIOL',
    name: 'Exposición Criminal',
    emoji: '🚨',
    desc: 'Un alarmante 64.6% de los universitarios ha atestiguado directamente actos de violencia delictiva extrema en sus entornos cotidianos.',
  },
  {
    code: 'CURR',
    name: 'Brecha Curricular',
    emoji: '📚',
    desc: 'El 92.7% exige formación para la paz, pero apenas el 55.9% logra identificar alguna acción concreta dentro del currículo oficial de su carrera.',
  },
  {
    code: 'DOC',
    name: 'Docentes como Escudos',
    emoji: '🛡️',
    desc: 'El 77.7% visualiza a sus profesores primarios como los auténticos agentes y promotores de la paz, más allá del marco político oficial.',
  },
  {
    code: 'SAFE',
    name: 'Espacios Seguros',
    emoji: '🔒',
    desc: 'Apenas el 4.5% percibe a la universidad como su zona primaria de refugio, prefiriendo sus hogares (92.7%) ante el clima urbano inseguro.',
  },
];

export const QUIZ_QUESTIONS = [
  {
    question: 'Según los datos recopilados, ¿A qué espacio vital la abrumadora mayoría de los estudiantes (92.7%) relega su sensación real de "seguridad"?',
    options: ['Al campus universitario', 'A los centros comerciales', 'A su hogar / domicilio', 'A ningún espacio, viven en alerta constante'],
    correct: 2,
    explanation: 'El 92.7% se siente a salvo únicamente y primordialmente en sus propios hogares, exponiendo la vulnerabilidad del trayecto público y los espacios abiertos de la academia.',
  },
  {
    question: '¿Qué porcentaje de estudiantes declara haber atestiguado de primera mano actos de violencia o delincuencia?',
    options: ['12.4%', '45.3%', '64.6%', '85.8%'],
    correct: 2,
    explanation: 'Un crítico 64.6% confesó ser testigo activo de la violencia criminal. Esto implica que la violencia no es una anécdota mediática, sino un trauma colectivo real e integrado en su psique académica.',
  },
  {
    question: 'Frente al discurso institucional de pacificación social, ¿quiénes son vistos por el 77.7% del alumnado como los VERDADEROS operarios o promotores de esta cultura?',
    options: ['Los policías asignados', 'Los docentes y profesores de aula', 'Las autoridades gubernamentales', 'Los líderes estudiantiles y sindicatos'],
    correct: 1,
    explanation: 'El docente de a pie es la primera línea de defensa. Casi el 80% del padrón reconoce a su profesor/a como el agente moral y protector tangible ante la zozobra y la violencia del macroentorno.',
  },
  {
    question: 'A pesar de ser una universidad pública... ¿Cuál es la mayor petición formativa de los encuestados para contrarrestar este clima de miedo?',
    options: ['Que se contrate seguridad privada fuertemente armada', 'Que se muden los campus a zonas rurales aisladas', '70% pide más cursos, conferencias e información sobre paz', 'Suspender las materias humanísticas para priorizar autodefensa'],
    correct: 2,
    explanation: 'El 70% pide más herramientas dialógicas e informativas (cursos, cultura, conferencias). Los alumnos creen en la educación como escudo sociológico, no en la militarización del campus.',
  },
  {
    question: 'La investigación evidenció una brecha o disonancia cognitiva profunda. ¿Cuál es?',
    options: ['Los alumnos piden paz comunitaria, pero fomentan acoso dentro de las aulas', 'Los alumnos demandan más tareas, pero los docentes no imparten clases', 'El 92.7% considera necesario enseñar la paz, pero apenas un 55.9% logra encontrar esto en sus planes de estudio', 'Ninguna; las autoridades escolares tienen una alineación curricular perfecta.'],
    correct: 2,
    explanation: 'La brecha entre expectativa y realidad. Casi todos consideran URGENTE la materia de la paz transversal, pero apenas la mitad la detecta formalizada dentro de su pensum. La academia se ha quedado corta institucionalmente.',
  },
];
