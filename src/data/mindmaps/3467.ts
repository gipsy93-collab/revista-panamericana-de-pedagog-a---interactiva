import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

/**
 * Mapa conceptual: Artículo 3467
 * "Ciberacoso entre estudiantes universitarios en la postpandemia:
 *  comportamientos agresivos y prevención"
 * Autores: Vallejos-Parás, Andrade-Rosas & Echeverría-García
 * Universidad La Salle, México — RPP n.41 (2026)
 * DOI: https://doi.org/10.21555/rpp.3467
 *
 * Layout: Estructura en "abanico" centrado, refleja la dualidad
 * agresión–prevención del modelo Logit
 */

export const nodes3467: NodeData[] = [
  // ═══════════════════════════════════════════════
  // NIVEL 1 — NÚCLEO CENTRAL
  // ═══════════════════════════════════════════════
  {
    id: 'central',
    label: 'Ciberacoso Universitario',
    category: 'Núcleo Central',
    level: 1,
    x: 0,
    y: 0,
    color: '#F43F5E',
    icon: 'Target',
    posterVariant: 'dark',
    content: {
      title: 'Ciberacoso entre Universitarios Post-COVID',
      breadcrumb: 'Tesis Central',
      sections: [
        {
          type: 'insight',
          content: 'La probabilidad de cometer ciberacoso disminuye un 21% cuando se controla su provocación, y un 11% cuando se controla la insinuación. La prevención no está en el castigo, sino en cortar la cadena de incitación.',
        },
        {
          type: 'body',
          content: 'Mediante un cuestionario aplicado a 863 estudiantes universitarios de la Ciudad de México, se explora la frecuencia de comportamientos agresivos entre pares a través de medios digitales durante el retorno a la presencialidad en el contexto del COVID-19. El estudio emplea un modelo Logit para predecir la probabilidad de ciberacoso a partir de dos variables: insinuación y provocación.',
        },
        {
          type: 'metadata',
          tags: ['Ciberacoso', 'Modelo Logit', 'COVID-19', 'México', 'Universitarios'],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — FICHA TÉCNICA
  // ═══════════════════════════════════════════════
  {
    id: 'ficha',
    label: 'Ficha Técnica',
    category: 'Ficha Técnica',
    level: 2,
    x: 500,
    y: -400,
    color: '#6366F1',
    icon: 'FileText',
    posterVariant: 'light',
    content: {
      title: 'Ficha Técnica del Estudio',
      breadcrumb: 'Ficha Técnica',
      sections: [
        {
          type: 'list',
          items: [
            'Revista: Panamericana de Pedagogía, n. 41 (2026)',
            'DOI: 10.21555/rpp.3467',
            'Muestra: 863 estudiantes universitarios',
            'Instrumento: Cuestionario de 54 preguntas en 3 dimensiones',
            'Confiabilidad: Alpha de Cronbach = 0.839',
            'Método predictivo: Modelo de Regresión Logística (Logit)',
            'Recolección: Enero 2023',
          ],
        },
        {
          type: 'metadata',
          tags: ['Cuantitativo', 'Logit', 'n=863'],
        },
      ],
    }
  },

  // Nivel 3 — Autores
  {
    id: 'ficha-autores',
    label: 'Autores',
    category: 'Ficha Técnica',
    level: 3,
    parentId: 'ficha',
    x: 770,
    y: -500,
    color: '#6366F1',
    icon: 'Users',
    posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación',
      breadcrumb: 'Ficha Técnica > Autores',
      sections: [
        {
          type: 'list',
          items: [
            'Cecilia Vallejos-Parás — Gestión del proyecto, análisis formal, conceptualización, metodología',
            'Luis-Antonio Andrade-Rosas — Análisis formal, curación de datos, software',
            'Jaime Echeverría-García — Revisión y edición, validación, visualización',
          ],
        },
        {
          type: 'body',
          content: 'Todos los autores pertenecen a la Universidad La Salle, México. Proyecto financiado: "El mundo virtual y sus efectos en la convivencia escolar: hacia la web 3.0" (código EDU-28-23).',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — CONTEXTO POST-PANDEMIA
  // ═══════════════════════════════════════════════
  {
    id: 'contexto',
    label: 'Contexto Post-COVID',
    category: 'Contexto',
    level: 2,
    x: 650,
    y: 80,
    color: '#06B6D4',
    icon: 'Globe',
    posterVariant: 'light',
    content: {
      title: 'La Transformación Digital Post-pandemia',
      breadcrumb: 'Contexto',
      sections: [
        {
          type: 'insight',
          content: 'En 2022, el 71% de la población de 15-24 años usaba internet diariamente a nivel mundial (ITU, 2022). Los adolescentes mexicanos de 15-23 años reportaron 8.2 horas al día en línea.',
        },
        {
          type: 'body',
          content: 'La pandemia de COVID-19 provocó una transición repentina a modalidades remotas, virtuales, híbridas y/o mixtas, transformando no solo la práctica educativa sino las formas de socialización de los jóvenes universitarios. Estadísticas del INEGI (2024) revelan que el 22.1% de los hombres y el 31.1% de las mujeres entre 20-29 años reportaron haber sido víctimas de ciberacoso.',
        },
        {
          type: 'metadata',
          tags: ['COVID-19', 'Virtualidad', 'INEGI', 'TIC'],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — MARCO TEÓRICO (5 criterios de ciberacoso)
  // ═══════════════════════════════════════════════
  {
    id: 'marco',
    label: '5 Criterios del Ciberacoso',
    category: 'Marco Teórico',
    level: 2,
    x: 400,
    y: 400,
    color: '#8B5CF6',
    icon: 'BookOpen',
    posterVariant: 'light',
    content: {
      title: 'Los 5 Criterios que Definen el Ciberacoso',
      breadcrumb: 'Marco Teórico',
      sections: [
        {
          type: 'insight',
          content: 'El ciberacoso no se limita por tiempo ni espacio: la exposición ocurre 24/7, alcanzando audiencias más amplias y potencialmente convirtiendo a observadores en agresores.',
        },
        {
          type: 'list',
          items: [
            '1. Acciones agresivas digitales intencionales',
            '2. Frecuencia de las acciones',
            '3. Uso de TIC (smartphones, computadoras, redes sociales)',
            '4. Sentimientos de la víctima respecto al acoso',
            '5. Desequilibrio de poder (anonimato, múltiples identidades)',
          ],
        },
        {
          type: 'body',
          content: 'El ciberacoso es un tipo de violencia escolar perpetrado por alguien de la comunidad educativa cuya principal característica es el uso de TIC con el objetivo de intimidar, herir, abusar, amenazar o revelar algún asunto personal para aislar socialmente a un ser humano (Alismaiel, 2023).',
        },
      ],
    }
  },

  // Nivel 3 — Efectos negativos
  {
    id: 'marco-efectos',
    label: 'Efectos en la Víctima',
    category: 'Marco Teórico',
    level: 3,
    parentId: 'marco',
    x: 630,
    y: 510,
    color: '#8B5CF6',
    icon: 'Heart',
    posterVariant: 'light',
    content: {
      title: 'Impacto del Ciberacoso en los Jóvenes',
      breadcrumb: 'Marco Teórico > Efectos',
      sections: [
        {
          type: 'list',
          items: [
            'Depresión, ansiedad y estrés',
            'Baja autoestima y problemas emocionales',
            'Ausentismo escolar y deserción',
            'El aislamiento social como objetivo del acoso',
            'Estigmatización dentro del grupo de referencia (Goffman, 2019)',
          ],
        },
        {
          type: 'body',
          content: 'Los efectos pueden ser incluso más devastadores que el bullying tradicional, ya que los agresores pueden actuar anónimamente y en cualquier momento (Zhu et al., 2021). El objetivo final del acoso es aislar socialmente a la persona, separándola del apoyo de sus pares.',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — METODOLOGÍA
  // ═══════════════════════════════════════════════
  {
    id: 'metodologia',
    label: 'Metodología Logit',
    category: 'Metodología',
    level: 2,
    x: -400,
    y: 400,
    color: '#10B981',
    icon: 'FlaskConical',
    posterVariant: 'light',
    content: {
      title: 'Diseño Cuantitativo Predictivo',
      breadcrumb: 'Metodología',
      sections: [
        {
          type: 'insight',
          content: 'Se seleccionó la tercera dimensión del cuestionario: frecuencia de comportamientos agresivos mediante TIC durante el retorno a la presencialidad.',
        },
        {
          type: 'list',
          items: [
            'Cuestionario: 54 preguntas, 3 dimensiones',
            'Dimensión analizada: 9 ítems con escala Likert de 5 puntos (1=Nunca, 5=Todos los días)',
            'Selección muestral: intencional (estudiantes que iniciaron en 2019)',
            'n = 863 estudiantes (supera los 363 recomendados)',
            'Alpha de Cronbach: 0.839 (fuerte consistencia interna)',
            'Análisis: Regresión logística (Modelo Logit)',
          ],
        },
      ],
    }
  },

  // Nivel 3 — Las 3 variables del modelo
  {
    id: 'metodologia-variables',
    label: '3 Variables Predictivas',
    category: 'Metodología',
    level: 3,
    parentId: 'metodologia',
    x: -670,
    y: 510,
    color: '#10B981',
    icon: 'Database',
    posterVariant: 'light',
    content: {
      title: 'Definición Operacional de Variables',
      breadcrumb: 'Metodología > Variables',
      sections: [
        {
          type: 'list',
          items: [
            'Y (Ciberacoso): Ítems 4, 5, 7, 9 — Fotos sin permiso, mensajes amenazantes, revelación de secretos, filtración de información',
            'X1 (Insinuación): Ítems 1, 2 — Videos no deseados, videos violentos. Acciones que requieren interpretación del receptor',
            'X2 (Provocación): Ítems 3, 6, 8 — Memes ofensivos, chismes en línea, grabaciones no autorizadas. Incitación a la agresión',
          ],
        },
        {
          type: 'body',
          content: 'La provocación se relaciona con la impulsividad, variable asociada tanto a la perpetración como a la victimización del ciberacoso, siendo su vínculo más fuerte con la perpetración (Gámez-Guadix et al., 2014).',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — RESULTADOS DESCRIPTIVOS
  // ═══════════════════════════════════════════════
  {
    id: 'resultados',
    label: 'Resultados Descriptivos',
    category: 'Resultados',
    level: 2,
    x: -650,
    y: 80,
    color: '#F59E0B',
    icon: 'BarChart3',
    posterVariant: 'dark',
    content: {
      title: 'Frecuencia del Ciberacoso: 23%',
      breadcrumb: 'Resultados',
      sections: [
        {
          type: 'insight',
          content: 'El 23% de los estudiantes experimentó alguna forma de ciberacoso al menos una vez. Los comportamientos más frecuentes: leer chismes en línea (34.76%) y recibir memes ofensivos (20.97%).',
        },
        {
          type: 'list',
          items: [
            'Ítem 6 (chismes en línea): 6.48% diario + 34.76% con "ocasionalmente"',
            'Ítem 3 (memes ofensivos): 4.17% diario + 20.97% con "ocasionalmente"',
            'Ítem 8 (grabaciones sin permiso): tercero más frecuente',
            'El 10% experimentó ciberacoso de forma ocasional a diaria',
          ],
        },
        {
          type: 'metadata',
          tags: ['23%', 'Chismes', 'Memes', 'Frecuencia'],
        },
      ],
    }
  },

  // Nivel 3 — Resultados predictivos (Logit)
  {
    id: 'resultados-logit',
    label: 'Modelo Logit',
    category: 'Resultados',
    level: 3,
    parentId: 'resultados',
    x: -910,
    y: -20,
    color: '#F59E0B',
    icon: 'Activity',
    posterVariant: 'light',
    content: {
      title: 'Resultados del Análisis Predictivo',
      breadcrumb: 'Resultados > Modelo Logit',
      sections: [
        {
          type: 'insight',
          content: 'Probabilidad base de ciberacoso: 14.3%. Se incrementa 11.8% con insinuación y 21.1% con provocación.',
        },
        {
          type: 'list',
          items: [
            'Efecto marginal de Insinuación (X1): 0.118 (p < 0.000)',
            'Efecto marginal de Provocación (X2): 0.211 (p < 0.000)',
            'Wald Test: Ambas variables significativas conjuntamente',
            'Especificidad y Sensibilidad: 0.73 (dentro de parámetros Hosmer-Lemeshow)',
            'Pseudo-R²: 0.304 (ajuste moderadamente bueno)',
          ],
        },
        {
          type: 'body',
          content: 'Si se evitan tanto la insinuación como la provocación, habría una disminución del 4.3% en la probabilidad de ciberacoso para uno mismo. En términos coloquiales: "Si no aguantas, no des".',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — DISCUSIÓN Y CONCLUSIONES
  // ═══════════════════════════════════════════════
  {
    id: 'discusion',
    label: 'Discusión y Prevención',
    category: 'Discusión',
    level: 2,
    x: -500,
    y: -400,
    color: '#3B82F6',
    icon: 'MessageCircle',
    posterVariant: 'dark',
    content: {
      title: 'Prevención Basada en Evidencia',
      breadcrumb: 'Discusión',
      sections: [
        {
          type: 'insight',
          content: 'Si un estudiante evita ser cómplice de burlas y bromas dirigidas a un compañero, la probabilidad de ser ciberacosado disminuye un 21%.',
        },
        {
          type: 'body',
          content: 'Nuestro análisis predictivo demuestra cuantitativamente los efectos de la insinuación y la provocación sobre la probabilidad de ciberacoso. Si sabemos que una disminución en el envío de videos violentos reduce la probabilidad de ciberacoso, y que la disminución en el envío de memes ofensivos la reduce aún más, las comunidades educativas podrían dirigir sus esfuerzos hacia acciones que contribuyan a esto.',
        },
        {
          type: 'list',
          items: [
            'La violencia verbal cibernética es la forma más común (5%-47.5% según Zhu et al., 2021)',
            'Los datos son consistentes con el Módulo MOCIBA del INEGI 2022 (20.8% de la población 12+)',
            'Variable no considerada que amerita estudio futuro: género',
            'Propuesta: Escala más compleja con aspectos físicos, conductuales, socioeconómicos y culturales',
          ],
        },
        {
          type: 'metadata',
          tags: ['Prevención', 'Evidencia', 'Política Educativa'],
        },
      ],
    }
  },

  // Nivel 3 — Meme-agresión
  {
    id: 'discusion-memes',
    label: 'Meme-Agresión',
    category: 'Discusión',
    level: 3,
    parentId: 'discusion',
    x: -760,
    y: -500,
    color: '#3B82F6',
    icon: 'Smartphone',
    posterVariant: 'light',
    content: {
      title: 'La Distinción Meme-Agresión vs. Meme-Bullying',
      breadcrumb: 'Discusión > Memes',
      sections: [
        {
          type: 'body',
          content: 'Marina-Elizalde y Ricaurte-Quijano (2022) proponen una distinción clave: el meme-agresión "se caracteriza por la emisión única de un meme haciendo uso de \'discurso de odio\'"; mientras que el meme-bullying es un subtipo que se distingue por la repetición de la agresión hacia una persona por factores físicos, de personalidad, sociodemográficos, ideológicos y de género.',
        },
        {
          type: 'insight',
          content: 'La producción y circulación de memes ocurre dentro de un contexto social, manteniendo un circuito comunicativo con códigos de significado compartidos que, enmarcados en una relación de poder, colocan a la víctima en estado de inferioridad.',
        },
      ],
    }
  },
];
