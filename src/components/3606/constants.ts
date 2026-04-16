import { QuizQuestion, GEPIAResult, Barrier, Adjustment, Quote } from './types';

export const ARTICLE_DATA = {
  title: "Ajustes razonables y prácticas docentes inclusivas para estudiantes con discapacidad y trastorno del espectro autista en educación superior",
  authors: "Ana Georgina Macías Rosado, Briseda Noemí Ramos Ramírez & Norma Guadalupe Márquez Cabellos",
  institutions: "Secretaría de Educación Pública en Colima, México; Universidad de Colima, México",
  doi: "10.21555/rpp.3606",
  volume: "N° 41 (2026)",
  centralFinding: "Los ajustes razonables dependen, en gran medida, de la iniciativa personal de los docentes, más que de una política institucional clara y estructurada.",
  introduction: {
    context: "El artículo aborda la inclusión de estudiantes con discapacidad en la educación superior, específicamente analizando los ajustes razonables implementados por docentes universitarios en la Universidad de Colima, México.",
    problem: "Existe una brecha crítica entre el marco normativo internacional y nacional sobre educación inclusiva y la práctica real en las aulas universitarias mexicanas.",
    objectives: "Examinar las estrategias y ajustes razonables que realizan los docentes para favorecer la inclusión de estudiantes con discapacidad y TEA, destacando buenas prácticas y áreas de oportunidad."
  },
  methodology: {
    type: "Cualitativo descriptivo",
    participants: {
      total: 7,
      teachers: 4,
      students: 2,
      exStudent: 1
    },
    program: "Licenciatura en Educación Especial, Universidad de Colima",
    techniques: "Entrevistas semiestructuradas y cuestionario GEPIA-A",
    duration: "60-80 minutos por entrevista, durante 3 semanas y 4 días"
  },
  gepiaResults: [
    { label: "Reflexión y sensibilización", value: 3.87, widthPercent: 96.75, color: "high" },
    { label: "Evaluación", value: 3.75, widthPercent: 93.75, color: "high" },
    { label: "Formación docente", value: 3.68, widthPercent: 92.0, color: "high" },
    { label: "Uso del tiempo", value: 3.66, widthPercent: 91.5, color: "high" },
    { label: "Condiciones físicas", value: 3.65, widthPercent: 91.25, color: "high" },
    { label: "Relación docente-alumnos", value: 3.58, widthPercent: 89.5, color: "high" },
    { label: "Planeación", value: 3.53, widthPercent: 88.25, color: "high" },
    { label: "Metodología", value: 3.50, widthPercent: 87.5, color: "medium" },
    { label: "Práctica del personal de apoyo", value: 3.41, widthPercent: 85.25, color: "medium" },
    { label: "Vinculación con familias", value: 1.75, widthPercent: 43.75, color: "low" },
  ] as GEPIAResult[],
  barriers: [
    { icon: "🏛️", name: "Estructurales", description: "Infraestructura inaccesible, falta de diseño universal" },
    { icon: "📋", name: "Normativas", description: "Ausencia de reglas claras y protocolos institucionales" },
    { icon: "📚", name: "Didácticas", description: "Métodos homogeneizados, evaluaciones rígidas" },
    { icon: "💭", name: "Actitudinales", description: "Desinformación, estigmas persistentes, capacitismo" },
    { icon: "🤟", name: "De comunicación", description: "Docentes sin habilidades en LSM o Braille" }
  ] as Barrier[],
  painfulCase: {
    title: "El caso que duele",
    description: "Un exalumno con autismo (TEA Grado 1) —el nivel 'menos comprometido'— abandonó la carrera a pesar de los 'ajustes' prometidos. Los ajustes no consideraron sus necesidades reales. Era paternalismo, no inclusión.",
    quote: "Cuando me pusieron tres materias con eso del diplomado pues no me gustó, no me iba a servir de nada ya por eso me salí.",
    author: "Exalumno con TEA que desertó"
  },
  adjustments: [
    { name: "Monitores entre pares", description: "Asignación de compañeros para reforzar contenidos", teacher: "Doc4" },
    { name: "Lengua de Señas Digital", description: "Método táctil para enseñar LSM a estudiante con discapacidad visual", teacher: "Doc2" },
    { name: "Evidencias alternativas", description: "Cuento en lugar de organizador gráfico (partes del oído)", teacher: "Doc2" },
    { name: "Preguntas de pensamiento crítico", description: "Verificación de comprensión durante clase", teacher: "Doc3" },
    { name: "Extensiones de tiempo", description: "Más días para entregas cuando comprometen funciones intelectuales", teacher: "Doc3" },
    { name: "Lectores de voz", description: "Evaluaciones digitales con apoyo auditivo", teacher: "Doc1, Doc2" }
  ] as Adjustment[],
  suggestions: {
    aspects: [
      "Capacitar personal administrativo en comunicación inclusiva (LSM)",
      "Establecer protocolos de atención claros",
      "Mejorar espacios físicos",
      "Potenciar asesorías y rol tutor",
      "Precisar límites del currículo para estudiantes con discapacidad",
      "Crear biblioteca especializada"
    ],
    topics: [
      "Materiales diversificados y especializados",
      "Adecuaciones metodológicas y didácticas",
      "Métodos actuales de evaluación",
      "Diseño universal de aprendizaje",
      "Uso de tecnología adaptada",
      "Curso de primeros auxilios",
      "Capacitación en comunicación (LSM, Braille)"
    ]
  },
  quotes: [
    { text: "No hay protocolos. No existen protocolos que nos digan a los profesores cómo actuar respecto a situaciones que requieran ajustes razonables.", author: "Doc4, p. 12" },
    { text: "[...] modificaciones que se realizan, o las adaptaciones, o los materiales que una persona requiere para acceder a información, a conocimiento, a contextos que otras personas típicas, neuróticas, no requieren.", author: "Doc1, p. 12" },
    { text: "Van a ser ellos quienes atiendan a las personas que presentan alguna condición, no ellos quienes vienen aquí para ser atendidos por su condición.", author: "Doc4, p. 16" },
    { text: "Mi estudiante ciego me dijo, ¿se lo puedo dar en braille? Y le dije, sí. Entonces, ahí el reto es para mí, [...] yo también tengo que aprender, reaprender y poner en práctica eso.", author: "Doc1, p. 14" },
    { text: "Existe una brecha importante entre lo que se establece en el papel y lo que ocurre en la práctica, si bien la normativa obliga, la realidad universitaria muestra que los ajustes razonables dependen mayormente de la iniciativa y criterio personal de algunos docentes, más que de lineamientos institucionales claros.", author: "Macías Rosado et al., p. 19" },
    { text: "Se vuelve indispensable pasar de una atención de buena voluntad a una atención con fundamento estructural, donde la inclusión no sea una excepción, sino una norma.", author: "Macías Rosado et al., p. 19" }
  ] as Quote[],
  results: {
    management_process: [
      { title: "Sensibilización", key_idea: "Reconocer la diversidad como valor y no como excepción." },
      { title: "Diagnóstico", key_idea: "Identificar barreras físicas, didácticas y actitudinales." },
      { title: "Ajustes", key_idea: "Diseñar adaptaciones curriculares y metodológicas concretas." },
      { title: "Seguimiento", key_idea: "Evaluar la efectividad de los ajustes y retroalimentar." }
    ],
    findings: {
      voices: [
        { quote: "No hay protocolos. No existen protocolos que nos digan a los profesores cómo actuar respecto a situaciones que requieran ajustes razonables.", author: "Doc4, p. 12" },
        { quote: "Mi estudiante ciego me dijo, ¿se lo puedo dar en braille? Y le dije, sí. Entonces, ahí el reto es para mí, yo también tengo que aprender, reaprender y poner en práctica eso.", author: "Doc1, p. 14" },
        { quote: "Existe una brecha importante entre lo que se establece en el papel y lo que ocurre en la práctica.", author: "Macías Rosado et al., p. 19" },
        { quote: "Se vuelve indispensable pasar de una atención de buena voluntad a una atención con fundamento estructural.", author: "Macías Rosado et al., p. 19" }
      ]
    },
    lines_of_action: [
      "Capacitar personal administrativo en comunicación inclusiva (LSM)",
      "Establecer protocolos de atención claros y accesibles",
      "Mejorar espacios físicos con diseño universal de aprendizaje",
      "Potenciar asesorías y el rol tutor en la inclusión",
      "Precisar límites del currículo para estudiantes con discapacidad",
      "Crear biblioteca especializada y materiales diversificados"
    ]
  },
  limitations: [
    "Muestra reducida (7 participantes) limita generalización.",
    "Enfoque en una sola universidad y programa específico.",
    "Muestreo por conveniencia puede introducir sesgo.",
    "Estudio transversal no permite seguimiento de trayectorias.",
    "Perspectiva de estudiantes con discapacidad intelectual leve y visual, pero no otras condiciones."
  ],
  conclusions: [
    "Los ajustes razonables dependen, en gran medida, de la iniciativa personal de los docentes, más que de una política institucional clara y estructurada",
    "La Licenciatura en Educación Especial se encuentra en transición de modelo integrador a modelo inclusivo",
    "La atención se caracteriza por ser principalmente individual y voluntaria, no institucional",
    "Existe inclusión condicionada por criterios de rendimiento académico, visibilizando prácticas capacitistas sutiles",
    "La corresponsabilidad entre docentes y estudiantes emerge como estrategia facilitadora",
    "La vinculación con familias es el área más crítica de oportunidad"
  ],
  quiz: [
    {
      question: "¿Cuál fue el promedio general de la escala GEPIA-A en el estudio?",
      options: [
        "2.89",
        "3.44",
        "3.87",
        "1.75"
      ],
      correct: 1
    },
    {
      question: "¿Qué subescala obtuvo la puntuación más baja en el GEPIA-A?",
      options: [
        "Reflexión y sensibilización",
        "Vinculación con familias",
        "Evaluación",
        "Condiciones físicas"
      ],
      correct: 1
    },
    {
      question: "¿Cuántos participantes tuvo el estudio?",
      options: [
        "4",
        "5",
        "7",
        "12"
      ],
      correct: 2
    },
    {
      question: "¿Qué método utilizó el Doc2 para enseñar LSM a una estudiante con discapacidad visual?",
      options: [
        "Intérprete profesional",
        "Lengua de Señas Digital (táctil)",
        "Video subtitulado",
        "Libro en Braille"
      ],
      correct: 1
    },
    {
      question: "Según el estudio, ¿en qué dependen principalmente los ajustes razonables en la universidad?",
      options: [
        "Política institucional clara",
        "Iniciativa personal de los docentes",
        "Normativa federal",
        "Recursos tecnológicos"
      ],
      correct: 1
    }
  ] as QuizQuestion[]
};
