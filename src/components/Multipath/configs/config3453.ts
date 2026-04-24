/**
 * CONFIGURACIÓN: Artículo 3453
 * Experiencias docentes respecto al abordaje del consumo de drogas
 * Inostroza-Fuentes et al. (2025)
 *
 * Este archivo contiene SOLO los datos del artículo.
 * El motor visual (MultipathEngine) se encarga de todo lo demás.
 */

import type { ArticleGraph } from '../types';

export const config3453: ArticleGraph = {
  id: '3453',
  title: 'Experiencias docentes respecto al abordaje del consumo de drogas en establecimientos educacionales secundarios',
  author: 'Inostroza-Fuentes, Torres-Moreno, Vera-Jackson & Castillo-Mardones',
  doi: '10.21555/rpp.3453',
  startingNode: 'bienvenida',

  nodes: {
    bienvenida: {
      id: 'bienvenida',
      title: 'Laboratorio de Experiencias Docentes',
      type: 'choice',
      category: 'intro',
      content: `Este artículo investiga cómo 8 profesores jefes de cursos de enseñanza media en el sur de Chile (regiones del Bío-Bío, Los Lagos y Los Ríos) experimentan y gestionan situaciones de consumo de drogas entre sus estudiantes.\n\nLa investigación es cualitativa, con enfoque fenomenológico, y utiliza entrevistas semiestructuradas. Los autores buscan caracterizar estas experiencias para identificar aspectos a fortalecer en la prevención y abordaje del consumo.\n\n**¿Cómo quieres abordar esta investigación?**`,
      accentColor: '#ff6b9d',
      exits: [
        { to: 'contexto_nacional', label: 'Comprender el contexto chileno primero', type: 'secuencial', icon: 'MapPin' },
        { to: 'metodologia', label: 'Conocer cómo se hizo la investigación', type: 'transversal', icon: 'Microscope' },
        { to: 'perfil_docentes', label: '¿Quiénes son estos docentes?', type: 'profundidad', icon: 'Users' },
      ],
    },

    contexto_nacional: {
      id: 'contexto_nacional',
      title: 'El problema en Chile',
      type: 'narrative',
      category: 'contexto',
      accentColor: '#e74c3c',
      content: `El artículo sitúa el problema en cifras nacionales alarmantes:\n\n• **62,3%** de los estudiantes han visto a alguien vendiendo o pasando drogas en las cercanías de su establecimiento (SENDA, 2023).\n• **52%** admite haber visto a alguien consumiendo drogas dentro del establecimiento.\n• **32,8%** de estudiantes de enseñanza media consume marihuana (INJUV, 2021).\n\nEl consumo en adolescencia se considera siempre de riesgo porque pone en peligro el desarrollo integral de la persona, ya sea en etapa de "experimentación" o en la etapa de mayor evolución: la "adicción".`,
      exits: [
        { to: 'factores_riesgo', label: '¿Qué factores de riesgo identifican?', type: 'secuencial', icon: 'AlertTriangle' },
        { to: 'marco_legal', label: '¿Qué dice la normativa chilena?', type: 'profundidad', icon: 'Scale' },
        { to: 'metodologia', label: 'Saltar a la metodología', type: 'transversal', icon: 'Microscope' },
      ],
    },

    factores_riesgo: {
      id: 'factores_riesgo',
      title: 'Factores de Riesgo y Protección',
      type: 'narrative',
      category: 'contexto',
      accentColor: '#f39c12',
      content: `El estudio adopta la teoría de **Arbex et al. (2002)**, que sistematiza factores desde una perspectiva integral:\n\n**Factores de riesgo (escuela):**\n• Dificultad de adaptación al sistema educativo\n• Sentimientos de inutilidad y desmotivación\n• Absentismo escolar y falta de hábitos de estudio\n• Falta de modelos positivos en docentes\n• Mala integración en el grupo de pares\n• Dificultades para internalizar normas\n• Experiencias repetidas de fracaso y abandono\n\n**Factores protectores:**\n• Integración adecuada a la dinámica escolar\n• Motivación y compromiso con el proceso educativo\n• Hábitos de estudio consolidados\n• Buen rendimiento académico\n• Presencia de figuras docentes significativas\n• Sentido de pertenencia y adhesión a las normas escolares`,
      exits: [
        { to: 'rol_profesor_jefe', label: '¿Cuál es el rol del profesor jefe?', type: 'secuencial', icon: 'UserCheck' },
        { to: 'contexto_nacional', label: 'Volver al contexto', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    marco_legal: {
      id: 'marco_legal',
      title: 'Marco Legal en Chile',
      type: 'narrative',
      category: 'contexto',
      accentColor: '#9b59b6',
      content: `En Chile, las acciones de los establecimientos educacionales frente al consumo de drogas están reguladas por:\n\n**Circular N° 482** (Superintendencia de Educación, 2018):\nEstablece que los reglamentos internos deben incorporar estrategias de prevención y un protocolo de acción para situaciones relacionadas con alcohol y otras drogas.\n\n**Guía SENDA (2018):** "Gestión Escolar Preventiva"\nOrientada a crear culturas preventivas fortaleciendo el liderazgo pedagógico.\n\n**Guía SENDA (2019):** "Estrategias de Detección Temprana"\nPropone tres condiciones fundamentales:\n1. Un discurso común y coherente\n2. Actitudes alineadas con el cuidado y la protección\n3. Acciones oportunas y consensuadas\n\n**Protocolo sugerido:**\n• Recopilar información para la adecuada gestión del caso\n• Contactar al adulto responsable del estudiante\n• Intervenir en la institución o derivar a la red de salud\n• Evaluar necesidad de tratamiento\n• Realizar seguimiento del caso`,
      exits: [
        { to: 'critica_protocolos', label: '¿Funcionan estos protocolos?', type: 'profundidad', icon: 'MessageCircle' },
        { to: 'rol_profesor_jefe', label: 'Continuar: el rol del profesor jefe', type: 'secuencial', icon: 'ArrowRight' },
        { to: 'contexto_nacional', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    critica_protocolos: {
      id: 'critica_protocolos',
      title: 'Crítica a los Protocolos',
      type: 'quote',
      category: 'profundidad',
      accentColor: '#e67e22',
      content: `El artículo cita a **Córdova et al. (2022)** sobre la implementación real de los protocolos en escuelas chilenas:`,
      quote: {
        text: 'Los protocolos se difunden principalmente a través de los reglamentos de convivencia escolar, sin considerar otros mecanismos de difusión. Además, existe una falta de participación de la comunidad escolar en el desarrollo de este tipo de protocolos.',
        author: 'Córdova, Fernández & Vergara-Morales (2022)',
        context: 'Percepción de actores educativos sobre protocolos de actuación',
      },
      exits: [
        { to: 'discusion_tension', label: 'Ver la tensión en la discusión', type: 'transversal', icon: 'GitBranch' },
        { to: 'marco_legal', label: 'Volver al marco legal', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    rol_profesor_jefe: {
      id: 'rol_profesor_jefe',
      title: 'El Profesor Jefe: Agente Clave',
      type: 'narrative',
      category: 'contexto',
      accentColor: '#3498db',
      content: `En Chile, el profesor jefe acompaña un curso durante todo el año escolar. Esto implica una responsabilidad adicional:\n\n• Se reúne semanalmente con el grupo en el "Consejo de Curso" y/o clases de "Orientación"\n• Aborda temas de relaciones, comportamiento, adecuación normativa y desequilibrios conductuales\n• Mantiene una relación cercana y de apoyo con los estudiantes\n• Establece comunicación constante con familias y el equipo docente\n• Identifica y resuelve problemas que puedan afectar a los estudiantes\n\nEl artículo destaca que son quienes más tiempo pasan con el grupo, contienen y acompañan, buscando generar lazos de confianza.`,
      exits: [
        { to: 'percepcion_brasil', label: '¿Cómo lo ven en otros países?', type: 'profundidad', icon: 'Globe' },
        { to: 'metodologia', label: 'Conocer la metodología del estudio', type: 'secuencial', icon: 'Microscope' },
      ],
    },

    percepcion_brasil: {
      id: 'percepcion_brasil',
      title: 'Perspectiva desde Brasil',
      type: 'quote',
      category: 'profundidad',
      accentColor: '#2ecc71',
      content: `El artículo cita a **Martini & Furegato (2008)**, quienes estudiaron percepciones de docentes en Florianópolis, Brasil:`,
      quote: {
        text: 'Los docentes asocian el consumo de drogas con factores familiares, la dificultad de los jóvenes para enfrentar frustraciones en una sociedad que prioriza "tener" sobre "ser", la fácil disponibilidad de drogas, la falta de seguridad pública y la influencia engañosa de los medios.',
        author: 'Martini & Furegato (2008)',
        context: 'Representaciones sociales de profesores sobre el uso de drogas',
      },
      exits: [
        { to: 'formacion_docente', label: '¿Y la formación docente?', type: 'profundidad', icon: 'GraduationCap' },
        { to: 'rol_profesor_jefe', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    formacion_docente: {
      id: 'formacion_docente',
      title: 'Formación y Representaciones',
      type: 'narrative',
      category: 'profundidad',
      accentColor: '#1abc9c',
      content: `El artículo cita a **Camarotti & Capriati (2024)** sobre formación docente en prevención del consumo de drogas en Argentina:\n\n• La figura docente juega un rol crucial en implementar estrategias preventivas\n• Su función no se limita a transmitir información\n• Debe crear ambientes seguros, coordinar con otras instituciones y promover la participación progresiva de los estudiantes\n\n**Advertencia clave del artículo:**\n> Una visión prejuiciosa o basada únicamente en la prohibición y el peligro puede dificultar la comunicación efectiva con los adolescentes. En cambio, si los docentes adoptan una perspectiva más crítica y contextualizada, pueden contribuir al desarrollo de estrategias de prevención más efectivas.`,
      exits: [
        { to: 'metodologia', label: 'Ver cómo se hizo este estudio', type: 'transversal', icon: 'Microscope' },
        { to: 'percepcion_brasil', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    perfil_docentes: {
      id: 'perfil_docentes',
      title: 'Los 8 Docentes Participantes',
      type: 'data',
      category: 'metodologia',
      accentColor: '#9b59b6',
      dataView: 'table',
      dataContent: `Perfil de los participantes:\n• 6 de la región del Bío-Bío\n• 1 de la región de Los Lagos\n• 1 de la región de Los Ríos\n• Edades: 28 a 64 años\n• Experiencia docente: 3 a 30 años\n• 4 trabajan en escuelas públicas (municipales)\n• 4 trabajan en escuelas particulares subvencionadas`,
      content: `Los participantes fueron seleccionados por criterios de inclusión específicos: ser profesor jefe de enseñanza media, trabajar actualmente en establecimientos públicos y particulares subvencionados de la zona sur de Chile, y tener experiencia en abordar el consumo de drogas en sus estudiantes.\n\n**Contexto educativo chileno:** El sistema distingue entre establecimientos públicos (financiados por el Estado municipal) y particulares subvencionados (reciben aporte estatal pero son de gestión privada). Esta distinción resultará relevante en los resultados.`,
      exits: [
        { to: 'metodologia', label: 'Conocer el diseño metodológico', type: 'secuencial', icon: 'Microscope' },
        { to: 'contexto_nacional', label: 'Primero, el contexto nacional', type: 'transversal', icon: 'MapPin' },
      ],
    },

    metodologia: {
      id: 'metodologia',
      title: 'Diseño Metodológico',
      type: 'narrative',
      category: 'metodologia',
      accentColor: '#3498db',
      content: `**Enfoque:** Cualitativo, fenomenológico\n\n**Objetivo:** Caracterizar las experiencias de docentes con rol de jefatura de curso respecto al abordaje del consumo de drogas entre estudiantes de secundaria.\n\n**Instrumento:** Entrevista semiestructurada, desarrollada por las investigadoras, con validación por juicio de expertos (dos evaluaciones) y prueba piloto.\n\n**Matriz de Coherencia Metodológica:**\nLa investigación organizó sus objetivos en categorías:\n• Experiencias docentes (mecanismos de apoyo, redes institucionales, recursos disponibles)\n• Salvaguarda de la intimidad (protocolo de confidencialidad, manejo de información sensible)\n• Acciones derivativas (canales de denuncia, procedimientos legales)\n• Abordaje del consumo (recopilación de información, acciones de derivación, seguimiento)\n\n**Criterios éticos:** Basados en la Declaración de Singapur (2010): honestidad, responsabilidad, cortesía profesional e imparcialidad, y buena gestión.`,
      exits: [
        { to: 'matriz_coherencia', label: 'Ver la Matriz de Coherencia completa', type: 'profundidad', icon: 'Table' },
        { to: 'resultados', label: 'Ir a los resultados principales', type: 'secuencial', icon: 'BarChart3' },
        { to: 'contexto_nacional', label: 'Volver al contexto', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    matriz_coherencia: {
      id: 'matriz_coherencia',
      title: 'Matriz de Coherencia',
      type: 'data',
      category: 'metodologia',
      accentColor: '#2980b9',
      dataView: 'table',
      dataContent: `Objetivo general: Determinar aspectos a fortalecer en prevención y abordaje del consumo de drogas en adolescentes desde el rol de profesionales clave en establecimientos públicos y particulares subvencionados del sur de Chile.\n\nObjetivo específico: Caracterizar experiencias de docentes con rol de jefatura de curso.\n\nCategorías y códigos:\n1. Experiencias docentes (72): Percepción del consumo (27), Impacto en el docente (23), Formas de apoyo (22)\n2. Acciones derivativas (38): Contacto con instituciones (27), Generar reportes (11)\n3. Acciones de seguimiento (60): Apoyo psicosocial (18), Monitoreo continuo (17)\n4. Mecanismos de apoyo del establecimiento (41): Redes institucionales (23), Recursos disponibles (18)\n5. Procedimiento interno (42): Protocolo escolar (26), Canales de denuncia (10), Procedimientos legales (6)\n6. Recopilación de información (36): Entrevista estudiante (12), Entrevista apoderado, Entrevista otros docentes (3)\n7. Salvaguarda de identidad (28): Manejo de información sensible (15), Derecho al honor (13)`,
      content: `La Matriz de Coherencia Metodológica fue el instrumento que permitió desarrollar las preguntas de la entrevista y posteriormente analizar la información obtenida. Las unidades de análisis fueron significados, episodios, roles y procesos, relevantes para abordar la experiencia de los informantes en situaciones de consumo.`,
      exits: [
        { to: 'metodologia', label: 'Volver a metodología', type: 'retorno', icon: 'ArrowLeft' },
        { to: 'resultados', label: 'Ver los resultados', type: 'secuencial', icon: 'BarChart3' },
      ],
    },

    resultados: {
      id: 'resultados',
      title: 'Hallazgos Principales',
      type: 'narrative',
      category: 'resultados',
      accentColor: '#e74c3c',
      content: `Los resultados se organizan en **7 categorías** con sus respectivos códigos y frecuencias:\n\n**1. Abordaje docente (72 apariciones)**\n• Percepción del docente sobre el consumo: 27\n• Impacto en el docente: 23\n• Formas de proporcionar apoyo y contención: 22\n\n**2. Acciones derivativas (38)**\n• Contacto y vinculación con otras instituciones: 27\n• Generar reportes: 11\n\n**3. Acciones de seguimiento (60)**\n• Apoyo psicosocial para estudiantes: 18\n• Monitoreo continuo y evaluación de progreso: 17\n• Redes con instituciones de derivación: 25\n\n**4. Mecanismos de apoyo del establecimiento (41)**\n• Redes de apoyo institucional: 23\n• Recursos disponibles: 18\n\n**5. Procedimiento interno (42)**\n• Protocolo escolar interno: 26\n• Canales de denuncia: 10\n• Procedimientos legales: 6\n\n**6. Recopilación de información (36)**\n• Entrevista con estudiante: 12\n• Entrevista con otros docentes: 3\n\n**7. Salvaguarda de identidad (28)**\n• Manejo de información sensible: 15\n• Derecho al honor: 13`,
      exits: [
        { to: 'resultados_protocolo', label: 'El protocolo como eje central', type: 'secuencial', icon: 'GitCommit' },
        { to: 'resultados_recursos', label: 'Diferencias entre tipos de escuela', type: 'profundidad', icon: 'Scale' },
        { to: 'resultados_citas', label: 'Escuchar las voces de los docentes', type: 'profundidad', icon: 'MessageSquare' },
        { to: 'discusion', label: 'Ir a la discusión', type: 'transversal', icon: 'MessageCircle' },
      ],
    },

    resultados_protocolo: {
      id: 'resultados_protocolo',
      title: 'El Protocolo: Eje Central',
      type: 'quote',
      category: 'resultados',
      accentColor: '#c0392b',
      content: `El análisis revela que el **"Protocolo Escolar Interno"** es el nodo central de la red de experiencias docentes. Todo el abordaje está mediado por este protocolo.`,
      quote: {
        text: 'Empezamos a poner las alertas, en mi caso como profesor jefe, lo que hice inmediatamente cuando empecé a sospechar, eh... Primero hicimos lo que dice el protocolo: tenemos que entrevistar al estudiante, entrevistar al apoderado, darles pistas sobre lo que observamos, que generalmente, eh... Es un cambio en la conducta.',
        author: 'Participante N° 2',
        context: 'Entrevista semiestructurada sobre experiencia de abordaje',
      },
      exits: [
        { to: 'resultados_red_externa', label: '¿Qué pasa con las derivaciones?', type: 'secuencial', icon: 'Network' },
        { to: 'marco_legal', label: 'Ver el marco legal que lo respalda', type: 'profundidad', icon: 'Scale' },
        { to: 'resultados', label: 'Volver a resultados', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    resultados_red_externa: {
      id: 'resultados_red_externa',
      title: 'La Red Externa',
      type: 'quote',
      category: 'resultados',
      accentColor: '#8e44ad',
      content: `El equipo de apoyo del establecimiento es quien contacta, vincula y desarrolla redes con instituciones externas:`,
      quote: {
        text: 'Acá hay un protocolo muy claro, que lo sigue el profesor jefe, convivencia. Desde convivencia se hacen las derivaciones dentro del mismo área. Tenemos psicólogos que son expertos en drogas, y si no lo solicitan, ¿cierto? Es verdad, donde pueden ser derivados, ya sea a Senda o a un hogar de rehabilitación de drogas. Y eso, estamos claros. Dependiendo de las necesidades y vulnerabilidad del estudiante, decidimos dónde será derivado y lo solicitamos.',
        author: 'Participante N° 6',
        context: 'Sobre el protocolo de derivación institucional',
      },
      exits: [
        { to: 'resultados_impacto', label: 'El impacto en el docente', type: 'secuencial', icon: 'Heart' },
        { to: 'resultados', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    resultados_impacto: {
      id: 'resultados_impacto',
      title: 'Impacto en el Docente',
      type: 'quote',
      category: 'resultados',
      accentColor: '#d35400',
      content: `Los docentes experimentan el abordaje como una situación de riesgo para ellos mismos y la comunidad educativa:`,
      quote: {
        text: 'Estás expuesto a un grupo de estudiantes que van a tener otros tipos de respuestas. Otros tipos de reacciones, un estudiante que no consume drogas es muy distinto a un estudiante que sí las consume, entonces, uh… porque un estudiante que está expuesto al consumo de drogas inevitablemente ve vulneradas sus necesidades más básicas, y llega al aula sin haber descansado bien, sin haber comido bien, aunque viva en un contexto socioeconómico que pueda brindarle buen bienestar, pero lo van a descuidar y de la misma manera, y por otro lado, eso puede generar también un nivel de mayor agresividad en la conducta del estudiante. Estamos entonces expuestos a tener estudiantes capaces de responder de una manera mucho más extrema de lo que quisiéramos.',
        author: 'Participante N° 1',
        context: 'Sobre el impacto del consumo en la dinámica de aula',
      },
      exits: [
        { to: 'resultados_recursos', label: '¿Y los recursos disponibles?', type: 'secuencial', icon: 'Scale' },
        { to: 'resultados', label: 'Volver a resultados', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    resultados_recursos: {
      id: 'resultados_recursos',
      title: 'Recursos: Brecha Público-Privado',
      type: 'narrative',
      category: 'resultados',
      accentColor: '#27ae60',
      content: `El estudio revela una **brecha significativa** entre tipos de establecimientos:\n\n**Escuelas particulares subvencionadas:**\n• Cuentan con recursos humanos y financieros\n• Pero estos son **insuficientes** para toda la comunidad escolar\n\n**Escuelas municipales (públicas):**\n• Tienen recursos **mínimos**\n• Lo disponible es **insuficiente** para atender sus necesidades\n\nEsta diferencia estructural afecta directamente la capacidad de respuesta ante situaciones de consumo.`,
      exits: [
        { to: 'discusion', label: '¿Qué implica esto?', type: 'secuencial', icon: 'MessageCircle' },
        { to: 'resultados_citas', label: 'Más voces de docentes', type: 'profundidad', icon: 'MessageSquare' },
        { to: 'resultados', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    resultados_citas: {
      id: 'resultados_citas',
      title: 'Voces de los Docentes',
      type: 'quote',
      category: 'resultados',
      accentColor: '#16a085',
      content: `Recopilación de testimonios directos de los participantes:`,
      quote: {
        text: 'Hay un protocolo muy claro acá, que lo sigue el profesor jefe, convivencia. Desde convivencia se hacen las derivaciones dentro del mismo área... Dependiendo de las necesidades y vulnerabilidad del estudiante, decidimos dónde será derivado.',
        author: 'Participante N° 6',
        context: 'Sobre la derivación institucional',
      },
      exits: [
        { to: 'resultados', label: 'Volver a resultados', type: 'retorno', icon: 'ArrowLeft' },
        { to: 'discusion', label: 'Ir a la discusión', type: 'transversal', icon: 'MessageCircle' },
      ],
    },

    discusion: {
      id: 'discusion',
      title: 'Discusión',
      type: 'narrative',
      category: 'discusion',
      accentColor: '#8e44ad',
      content: `La discusión plantea una **tensión central** en el abordaje del consumo de drogas en escuelas chilenas:\n\n**La tensión normativa vs. derechos:**\n\nEl abordaje está fuertemente mediado por la aplicación del Reglamento Interno del establecimiento, frecuentemente enmarcado dentro de una **acción sancionatoria** que incluye:\n• Desarrollo de un proceso legal\n• Conexión con entidades policiales (Carabineros, Policía Investigadora)\n• Aplicación de leyes como la Ley 20.000 (tráfico ilícito) o Ley 20.084 (responsabilidad de adolescentes)\n\n**Pero desde la perspectiva de derechos:**\nLa Convención sobre los Derechos del Niño (ratificada por Chile en 1990), Artículo 33, establece que el Estado debe proteger a niños y adolescentes del consumo, producción y tráfico de drogas.\n\nLa Ley 21.430 refuerza una visión integral, enfatizando el derecho a un entorno seguro y el derecho fundamental al honor, privacidad e imagen propia.`,
      exits: [
        { to: 'discusion_tension', label: 'La tensión: ¿sanción o cuidado?', type: 'secuencial', icon: 'Scale' },
        { to: 'discusion_formacion', label: 'La formación como necesidad', type: 'profundidad', icon: 'GraduationCap' },
        { to: 'conclusiones', label: 'Ir a conclusiones', type: 'transversal', icon: 'CheckCircle' },
      ],
    },

    discusion_tension: {
      id: 'discusion_tension',
      title: 'Sanción vs. Cuidado',
      type: 'narrative',
      category: 'discusion',
      accentColor: '#c0392b',
      content: `El artículo identifica una **contradicción estructural**:\n\n**El enfoque sancionatorio actual:**\n• Deriva hacia procesos legales y policiales\n• Puede llevar a la estigmatización o criminalización del estudiante\n• Se alinea con la Circular N° 482 pero de forma restrictiva\n\n**El enfoque de cuidado propuesto:**\n• Medidas reparadoras orientadas a restablecer el bienestar del adolescente\n• Abordar los factores que conducen al consumo\n• Promover estrategias de prevención\n• Frenar acciones punitivas para evitar estigmatización\n\n**La pregunta que deja el artículo:**\n¿Cómo transitar hacia una **cultura educativa centrada en el cuidado** más que en el castigo, reconociendo el consumo adolescente como un fenómeno complejo y multifacético que puede abordarse mediante el compromiso comunitario y la participación estudiantil?`,
      exits: [
        { to: 'discusion_formacion', label: 'La formación como brecha', type: 'secuencial', icon: 'GraduationCap' },
        { to: 'discusion', label: 'Volver a discusión', type: 'retorno', icon: 'ArrowLeft' },
        { to: 'conclusiones', label: 'Ver las conclusiones', type: 'secuencial', icon: 'CheckCircle' },
      ],
    },

    discusion_formacion: {
      id: 'discusion_formacion',
      title: 'La Formación como Brecha',
      type: 'narrative',
      category: 'discusion',
      accentColor: '#2980b9',
      content: `Los resultados muestran que la mayoría de los docentes **carecen de recursos y herramientas** para abordar el problema de forma óptima:\n\n• No reciben información suficiente de las instituciones competentes sobre prevención del consumo de sustancias\n• Reconocen la necesidad de mayor formación en regulaciones legales relacionadas con el consumo de drogas en estudiantes\n• Necesitan comprender el alcance legal de sus acciones\n\n**Lo que proponen los autores:**\nSe requiere una **política educativa que apoye, capacite y dote de recursos reales** (humanos y materiales) para actuar efectivamente. Esto permitiría transitar hacia una cultura educativa centrada en el cuidado.`,
      exits: [
        { to: 'discusion_tension', label: 'La tensión sanción vs. cuidado', type: 'secuencial', icon: 'Scale' },
        { to: 'discusion', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
        { to: 'conclusiones', label: 'Ir a conclusiones', type: 'secuencial', icon: 'CheckCircle' },
      ],
    },

    conclusiones: {
      id: 'conclusiones',
      title: 'Conclusiones',
      type: 'synthesis',
      category: 'conclusiones',
      accentColor: '#27ae60',
      content: `**Conclusiones principales del estudio:**\n\n1. **Los protocolos escolares internos** de establecimientos municipales y particulares subvencionados están estrechamente vinculados a las disposiciones legales del país. La Circular N° 482 es el referente normativo central.\n\n2. **Los docentes con rol de jefatura son actores clave** en la implementación de los protocolos:\n   • Cumplen con la recopilación y gestión de información sensible\n   • Coordinan y conducen entrevistas con el estudiante y su apoderado\n   • Contactan al equipo de apoyo psicosocial del establecimiento\n\n3. **El equipo de apoyo debe vincular** a estudiantes y familias con redes de apoyo institucional: SENDA, Carabineros, Policía Investigadora, Centros de Salud.\n\n4. **Aunque los docentes tienen una idea de cómo actuar, se requiere formación constante** sobre regulaciones legales relacionadas con el consumo de drogas en estudiantes.`,
      exits: [
        { to: 'proyecciones', label: 'Proyecciones futuras', type: 'secuencial', icon: 'TrendingUp' },
        { to: 'limitaciones', label: 'Limitaciones del estudio', type: 'profundidad', icon: 'AlertCircle' },
        { to: 'final_protocolo', label: 'Final: El protocolo como centro', type: 'final', icon: 'GitCommit', requiresVisited: ['resultados_protocolo', 'conclusiones'] },
        { to: 'final_cuidado', label: 'Final: Hacia el cuidado', type: 'final', icon: 'Heart', requiresVisited: ['discusion_tension', 'discusion_formacion', 'conclusiones'] },
      ],
    },

    proyecciones: {
      id: 'proyecciones',
      title: 'Proyecciones',
      type: 'narrative',
      category: 'proyecciones',
      accentColor: '#f39c12',
      content: `**Hacia dónde debe ir la investigación:**\n\n• El consumo de drogas de riesgo en niños y adolescentes es un tema que debe seguir estudiándose\n• Representa una realidad persistente a nivel nacional con múltiples complejidades en su abordaje y prevención\n• El consumo en algunos establecimientos ya es un problema que no puede abordarse dada la perspectiva de los padres o el entorno del estudiante\n\n**Propuesta de los autores:**\nUsar esta investigación como fundamento para generar mayores oportunidades de acción que minimicen los impactos futuros de esta población con consumo de riesgo, y dignificar las diferentes profesiones que componen la comunidad educativa como **factor protector** que está en contacto directo con los estudiantes.`,
      exits: [
        { to: 'limitaciones', label: 'Ver limitaciones', type: 'secuencial', icon: 'AlertCircle' },
        { to: 'conclusiones', label: 'Volver a conclusiones', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    limitaciones: {
      id: 'limitaciones',
      title: 'Limitaciones',
      type: 'narrative',
      category: 'limitaciones',
      accentColor: '#7f8c8d',
      content: `**Principales limitaciones del estudio:**\n\n1. **Dificultad para encontrar informantes** interesados en participar dentro de la provincia de Concepción. Se tuvieron que usar diferentes formas de difusión:\n   • Entrega in-persona de información (el equipo visitó establecimientos)\n   • Difusión por redes sociales (no dio resultados)\n   • Difusión entre conocidos, quienes a su vez agregaron a otros\n\n2. **Limitaciones de tiempo:** Los docentes con roles de jefatura tenían diferentes obligaciones durante el período de búsqueda de informantes, resultando en un número limitado de participantes.\n\n3. **A pesar de las dificultades**, se alcanzó adecuadamente el punto de saturación teórica de los datos.`,
      exits: [
        { to: 'conclusiones', label: 'Volver a conclusiones', type: 'retorno', icon: 'ArrowLeft' },
        { to: 'final_completo', label: 'Final: Visión integral', type: 'final', icon: 'Award', requiresVisited: ['resultados_protocolo', 'discusion_tension', 'discusion_formacion', 'conclusiones', 'limitaciones'] },
      ],
    },

    final_protocolo: {
      id: 'final_protocolo',
      title: 'Final: El Protocolo como Centro',
      type: 'ending',
      category: 'conclusiones',
      accentColor: '#e74c3c',
      content: `**Has completado el recorrido: "El Protocolo como Centro"**\n\nTu trayecto se centró en comprender cómo el protocolo escolar interno estructura toda la experiencia docente frente al consumo de drogas. Descubriste que:\n\n• El protocolo es el eje organizador de las acciones\n• Los docentes siguen procedimientos establecidos de forma rigurosa\n• El sistema prioriza la normativa sobre el cuidado individual\n\n**Pero queda una pregunta:** ¿Es suficiente un enfoque normativo para abordar un problema tan complejo como el consumo de drogas en adolescentes?\n\n---\n*Para desbloquear el final alternativo "Hacia el Cuidado", explora la tensión entre sanción y cuidado en la Discusión.*`,
      exits: [
        { to: 'bienvenida', label: 'Reiniciar experiencia', type: 'retorno', icon: 'RotateCcw' },
        { to: 'discusion_tension', label: 'Explorar la tensión', type: 'transversal', icon: 'Scale' },
      ],
    },

    final_cuidado: {
      id: 'final_cuidado',
      title: 'Final: Hacia el Cuidado',
      type: 'ending',
      category: 'conclusiones',
      accentColor: '#27ae60',
      content: `**Has completado el recorrido: "Hacia el Cuidado"**\n\nTu trayecto te llevó a explorar la tensión fundamental del artículo: la contradicción entre un enfoque sancionatorio y uno basado en el cuidado de los derechos de los adolescentes. Comprendiste que:\n\n• Los protocolos actuales pueden estigmatizar y criminalizar a los estudiantes\n• Se necesita una política educativa que apoye, capacite y dote de recursos reales a los docentes\n• El consumo adolescente debe abordarse como un fenómeno complejo, multifacético, que requiere compromiso comunitario\n\n**Tu conclusión:** El cambio hacia una cultura educativa centrada en el cuidado es posible, pero requiere transformaciones estructurales en política, formación y recursos.\n\n---\n*Para desbloquear el final completo, explora todas las secciones del artículo.*`,
      exits: [
        { to: 'bienvenida', label: 'Reiniciar experiencia', type: 'retorno', icon: 'RotateCcw' },
        { to: 'conclusiones', label: 'Revisar conclusiones', type: 'transversal', icon: 'CheckCircle' },
      ],
    },

    final_completo: {
      id: 'final_completo',
      title: 'Final: Visión Integral',
      type: 'ending',
      category: 'conclusiones',
      accentColor: '#f39c12',
      content: `**¡Has completado el recorrido integral del artículo 3453!**\n\nHas explorado todas las dimensiones de esta investigación:\n\n✓ Contexto nacional y marco legal\n✓ Metodología cualitativa fenomenológica\n✓ Perfil de los 8 docentes participantes\n✓ Resultados organizados en 7 categorías\n✓ La tensión entre sanción y cuidado\n✓ Las limitaciones del estudio\n\n**Tu comprensión abarca:**\n• Cómo el protocolo escolar estructura las experiencias docentes\n• La brecha de recursos entre escuelas públicas y subvencionadas\n• La necesidad de formación continua para los docentes\n• La posibilidad de transitar hacia una cultura de cuidado\n\n**Reflexión final:**\nLos docentes son actores fundamentales, pero no pueden hacerlo solos. Se requiere un sistema educativo que los respalde con recursos, formación y políticas centradas en el bienestar de los adolescentes.\n\n---\n*Artículo: Inostroza-Fuentes et al. (2025). Revista Panamericana de Pedagogía, 40, e3453.*`,
      exits: [
        { to: 'bienvenida', label: 'Nueva experiencia', type: 'retorno', icon: 'RotateCcw' },
      ],
    },
  },

  endings: [
    {
      id: 'final_protocolo',
      title: 'El Protocolo como Centro',
      condition: 'Visitar resultados_protocolo y conclusiones',
      description: 'Enfoque en la estructura normativa del abordaje',
    },
    {
      id: 'final_cuidado',
      title: 'Hacia el Cuidado',
      condition: 'Visitar discusion_tension, discusion_formacion y conclusiones',
      description: 'Enfoque en la transformación hacia una cultura de cuidado',
    },
    {
      id: 'final_completo',
      title: 'Visión Integral',
      condition: 'Visitar todos los nodos principales',
      description: 'Comprensión completa de la investigación',
    },
  ],
};
