import { QuizQuestion, Profile, DataStat, AgeBar, Testimonial, Solution } from './types';

export const ARTICLE_DATA = {
  title: "Jóvenes universitarias y su transición a la maternidad: formación, retos y crianza",
  author: "Diego Rodríguez Calderón de la Barca",
  institution: "Universidad Pedagógica Nacional, México",
  doi: "10.21555/rpp.3562",
  volume: "N° 41 (2026)",
  centralFinding: "La maternidad durante la universidad no es un factor de abandono per se. El verdadero obstáculo es la estructura institucional diseñada para un 'estudiante ideal' sin responsabilidades de cuidado, combinada con desigualdades de clase.",
  introduction: {
    context: "En México hay casi 4.9 millones de estudiantes en educación superior. Sin embargo, las madres universitarias son invisibles en las políticas educativas. Este estudio se sitúa en la UPN 153 Ecatepec, una universidad pública en el Estado de México.",
    problem: "¿Cómo construyen su transición a la maternidad las jóvenes estudiantes de la UPN 153 que están embarazadas o tienen hijos menores de 22 años? ¿Qué retos enfrentan al compatibilizar estudios, maternidad y trabajo?",
    dimensions: ["Personal: reorganización del tiempo y prioridades", "Institucional: ausencia de políticas de apoyo", "Social: estigmas asociados a la condición de madre estudiante"]
  },
  methodology: {
    type: "Cualitativo exploratorio con enfoque de curso de vida",
    interviews: 9,
    questionnaires: 12,
    profile: "Estudiantes de licenciatura en Pedagogía, UPN 153, ciclo 2024-2025",
    criteria: "Madres con hijos menores de 22 años o embarazadas en momento de entrevista",
    period: "Enero - mayo de 2025",
    analysis: "Análisis cualitativo interpretativo de narrativas biográficas, articulando categorías de curso de vida, conceptos bourdianos y análisis de estigma"
  },
  keyFinding: "8 de 12 jóvenes interrumpieron sus estudios durante o después del embarazo (67%).",
  profiles: [
    {
      key: "gloria",
      name: "Gloria",
      age: 24,
      semester: "6° semestre",
      location: "Ecatepec",
      tags: ["Capital limitado", "Apoyo familiar"],
      story: "Gloria enfrenta una jornada diaria de múltiples responsabilidades: universidad, tareas, trabajo, bebé y labores del hogar. La administración del tiempo es su mayor dificultad, generándole estrés, ansiedad y privación de sueño.",
      quote: "Una de las dificultades más grandes es la administración del tiempo... Este tipo de responsabilidades me han generado estrés, ansiedad; no descanso lo suficiente, casi no duermo.",
      color: "rose"
    },
    {
      key: "marina",
      name: "Marina",
      age: 22,
      semester: "6° semestre",
      location: "Embarazo planeado",
      tags: ["Capital medio", "Alta resiliencia"],
      story: "Marina experimentó que el tiempo para ella misma dejó de existir. Divide su día entre escuela, tareas, lectura, comida, labores domésticas, trabajo y su hija. A pesar de la sobrecarga, mantiene una actitud resiliente.",
      quote: "El tiempo en mí misma dejó de existir por el momento, hago lo posible por cubrir cada una de mis responsabilidades entre escuela, tareas, tiempo para leer, comida, labores domésticas, trabajo y por supuesto mi hija.",
      color: "sky"
    },
    {
      key: "antonia",
      name: "Antonia",
      age: 29,
      semester: "2° semestre",
      location: "Madre a los 16",
      tags: ["Capital bajo", "Salud mental"],
      story: "Antonia se embarazó a los 16 años sin desearlo. Su madre le dijo que debía hacérse cargo de sus 'tonterías'. El papá la dejó y desde entonces ha llevado sola la crianza. Su motivación actual es darle un ejemplo a su hijo y no dejarse caer.",
      quote: "Me embaracé a los 16 años... Yo no quería ser mamá! pero mi mamá me dijo que tenía que hacerme cargo de mis tonterías. Y entonces tuve que continuar con el embarazo, el papá me dejó y pues aquí andamos haciéndonos cargo de nuestras tonterías.",
      color: "amber"
    },
    {
      key: "katherine",
      name: "Katherine",
      age: 29,
      semester: "2° semestre",
      location: "Retorno tras 13 años",
      tags: ["Capital limitado", "Motivación alta"],
      story: "Katherine retomó sus estudios tras 13 años de interrupción. Ve su carrera como un ejemplo para sus hijos y como una forma de abrir su panorama y el de ellos. Su determinación es un motor clave en su trayectoria.",
      quote: "Ser madre y estudiante es un reto. Pero también esto es lo que estoy haciendo es un ejemplo para mis hijos, y obviamente me abre mis expectativas, abre mi panorama y la de mis hijos.",
      color: "emerald"
    }
  ] as Profile[],
  stats: [
    { value: "67%", label: "interrumpen estudios", context: "8 de 12 participantes" },
    { value: "92%", label: "son pioneras en sus familias", context: "primera generación universitaria" },
    { value: "4.9M", label: "estudiantes en México", context: "mujeres ya son mayoría" },
    { value: "17%", label: "de madres llega a la universidad", context: "57% solo tiene primaria/secundaria" }
  ] as DataStat[],
  ageDistribution: [
    { label: "18-20 años", count: 2, widthPercent: 16 },
    { label: "21-23 años", count: 4, widthPercent: 33 },
    { label: "24-26 años", count: 2, widthPercent: 16 },
    { label: "27-29 años", count: 1, widthPercent: 8 },
    { label: "29-34 años", count: 3, widthPercent: 25 },
  ] as AgeBar[],
  capitalComparison: {
    high: "Mayor facilidad para conciliar estudios y maternidad; pueden delegar cuidado a abuelas/madres",
    low: "Acumulación de desventajas; estrategias de supervivencia; mayor riesgo de interrupción"
  },
  supportNetworks: [
    { name: "Familia de origen", desc: "Principal red de apoyo. Madres y abuelas que cuidan a los nietos/hijos.", icon: "🏠" },
    { name: "Pareja", desc: "Variable. Algunas reciben apoyo económico y emocional; otras quedan solas.", icon: "💕" },
    { name: "Universidad", desc: "Ausencia sistemática de apoyo institucional. La empatía es acto de buena voluntad individual.", icon: "🏫" },
    { name: "Pares", desc: "Estrategias colectivas: dividir lecturas, apoyo mutuo en tareas.", icon: "👥" }
  ],
  strategies: [
    "Organización extrema del tiempo ('sacar adelante' múltiples responsabilidades)",
    "Dinámicas de equipo con compañeras (dividir lecturas, colaborar en tareas)",
    "Estudio nocturno cuando los hijos duermen",
    "Priorización de la carrera como inversión familiar"
  ],
  stigmaExamples: [
    { label: "Señalamiento", text: "'Bebés inquietos que distraen al grupo'" },
    { label: "Atribución", text: "'Irresponsables por no haberse cuidado'" },
    { label: "Exclusión", text: "'Una buena madre debe dedicarse solo a sus hijos'" }
  ],
  solutions: [
    { id: "lactarios", label: "Lactarios en campus" },
    { id: "guarderias", label: "Guarderías universitarias" },
    { id: "flexibilidad", label: "Flexibilidad horaria real" },
    { id: "becas", label: "Becas específicas para madres" },
    { id: "capacitacion", label: "Capacitación docente en perspectiva de género" }
  ] as Solution[],
  testimonials: [
    { text: "El tiempo en mí misma dejó de existir por el momento. Hago lo posible por cubrir cada una de mis responsabilidades entre escuela, tareas, tiempo para leer, comida, labores domésticas, trabajo y por supuesto mi hija.", author: "Marina, estudiante de 6° semestre" },
    { text: "Ser madre y estudiante es un reto. Pero también esto es lo que estoy haciendo es un ejemplo para mis hijos, y obviamente me abre mis expectativas, abre mi panorama y la de mis hijos.", author: "Katherine, estudiante de 2° semestre" },
    { text: "Una de las dificultades más grandes es la administración del tiempo... Este tipo de responsabilidades me han generado estrés, ansiedad; no descanso lo suficiente, casi no duermo.", author: "Gloria, estudiante de 6° semestre" },
    { text: "El ejemplo que quiero darle a mi hijo es lo que me da motivos para continuar... seguir mi tratamiento psiquiátrico, continuar haciendo ejercicio y no dejarme caer en el hoyo nuevamente.", author: "Antonia, estudiante de 2° semestre" }
  ] as Testimonial[],
  limitations: [
    "Muestra pequeña (n=9 entrevistas) y localizada (una unidad universitaria).",
    "No incluye comparación con estudiantes sin hijos (efectos diferenciados no cuantificables).",
    "No profundiza en experiencias de padres estudiantes (comparación de género).",
    "Temporalidad: estudio transversal, no longitudinal (no sigue trayectorias en el tiempo)."
  ],
  conclusions: [
    "La maternidad durante la trayectoria universitaria no es un factor de abandono per se, sino un catalizador de resiliencia y motivación",
    "Las trayectorias académicas están marcadas por el capital familiar de origen: quienes tienen mayores recursos logran conciliar maternidad y carrera",
    "La familia (especialmente madres/abuelas) es la red de apoyo más importante, evidenciando que la supervivencia académica depende del trabajo de cuidado no remunerado de otras mujeres",
    "Las madres universitarias consideran sus estudios como medio de movilidad ascendente y capital para compartir con sus hijos",
    "El estigma institucional opera como violencia simbólica que desacredita la identidad de madres estudiantes",
    "La ausencia de políticas universitarias específicas reproduce desigualdades de género y clase"
  ],
  quiz: [
    {
      question: "¿Cuál es el hallazgo principal del estudio sobre madres universitarias?",
      options: [
        "La maternidad inevitablemente causa abandono escolar",
        "La falta de apoyo institucional y desigualdades de clase son los verdaderos obstáculos",
        "La mayoría de las madres universitarias tienen alto capital económico",
        "Las universidades mexicanas tienen excelentes políticas de cuidado"
      ],
      correct: 1
    },
    {
      question: "¿Qué porcentaje de las participantes interrumpió sus estudios durante o después del embarazo?",
      options: [
        "25%",
        "50%",
        "67%",
        "92%"
      ],
      correct: 2
    },
    {
      question: "¿Qué porcentaje de las participantes son pioneras en sus familias (primera generación universitaria)?",
      options: [
        "50%",
        "67%",
        "75%",
        "92%"
      ],
      correct: 3
    },
    {
      question: "Según el marco teórico, ¿qué autor explica las desigualdades educativas como procesos estructurales mediados por capitales?",
      options: [
        "Goffman",
        "Bourdieu",
        "Elder",
        "Miller"
      ],
      correct: 1
    },
    {
      question: "¿Cuál es la principal red de apoyo identificada por las participantes?",
      options: [
        "La universidad",
        "La pareja",
        "La familia de origen (madres/abuelas)",
        "El gobierno"
      ],
      correct: 2
    }
  ] as QuizQuestion[]
};
