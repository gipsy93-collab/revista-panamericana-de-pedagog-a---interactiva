import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

/**
 * Mapa conceptual: Artículo 3453
 * "Experiencias docentes respecto al abordaje del consumo de drogas
 *  en establecimientos educacionales secundarios"
 * Autores: Inostroza-Fuentes, Torres-Moreno, Vera-Jackson & Castillo-Mardones
 * Universidad de Concepción, Chile — RPP n.40 (2025)
 * DOI: https://doi.org/10.21555/rpp.3453
 *
 * Layout: Radial orgánico con 7 categorías emergentes del análisis cualitativo
 */

export const nodes3453: NodeData[] = [
  // ═══════════════════════════════════════════════
  // NIVEL 1 — NÚCLEO CENTRAL
  // ═══════════════════════════════════════════════
  {
    id: 'central',
    label: 'Docencia y Drogas en Escuelas',
    category: 'Núcleo Central',
    level: 1,
    x: 0,
    y: 0,
    color: '#EC4899',
    icon: 'Target',
    posterVariant: 'dark',
    content: {
      title: 'El Docente como Primer Observador de Crisis',
      breadcrumb: 'Tesis Central',
      sections: [
        {
          type: 'insight',
          content: 'El docente no solo enseña; es el primer observador de las crisis de salud pública en el aula. Su experiencia ante el consumo de drogas revela una tensión irresuelta entre sancionar y cuidar.',
        },
        {
          type: 'body',
          content: 'Esta investigación fenomenológica explora cómo 8 profesores jefes de la zona sur de Chile enfrentan situaciones de consumo de drogas entre sus estudiantes de secundaria. Los hallazgos revelan que la experiencia docente está fuertemente mediada por los protocolos internos del establecimiento, pero también por las habilidades personales de contención que cada profesor posee.',
        },
        {
          type: 'quote',
          quote: 'Estamos expuestos a tener estudiantes capaces de responder de una forma que es mucho más extrema de lo que quisiéramos.',
          attribution: 'Participante No. 1, Docente de escuela pública',
        },
        {
          type: 'metadata',
          tags: ['Fenomenología', 'Consumo de Drogas', 'Chile', 'Secundaria', 'Rol Docente'],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — FICHA TÉCNICA (arriba-derecha)
  // ═══════════════════════════════════════════════
  {
    id: 'ficha',
    label: 'Ficha Técnica',
    category: 'Ficha Técnica',
    level: 2,
    x: 520,
    y: -380,
    color: '#6366F1',
    icon: 'FileText',
    posterVariant: 'light',
    content: {
      title: 'Ficha Técnica del Artículo',
      breadcrumb: 'Ficha Técnica',
      sections: [
        {
          type: 'insight',
          content: 'Investigación cualitativa fenomenológica que busca comprender las vivencias de profesores jefes ante el consumo de drogas en escuelas públicas y subvencionadas del sur de Chile.',
        },
        {
          type: 'list',
          items: [
            'Revista: Panamericana de Pedagogía, n. 40 (2025)',
            'DOI: 10.21555/rpp.3453',
            'Enfoque: Cualitativo, diseño fenomenológico',
            'Instrumento: Entrevista semiestructurada',
            'Participantes: 8 docentes de 3 regiones de Chile',
            'Recibido: 5 de marzo de 2025',
            'Aceptado: 29 de abril de 2025',
          ],
        },
        {
          type: 'metadata',
          tags: ['Fenomenología', 'Cualitativo', '2025', 'Chile'],
        },
      ],
    }
  },

  // Nivel 3 — Autores (CORREGIDO: nombres completos)
  {
    id: 'ficha-autores',
    label: 'Autores',
    category: 'Ficha Técnica',
    level: 3,
    parentId: 'ficha',
    x: 780,
    y: -480,
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
            'Darling Inostroza-Fuentes — Administración del proyecto, análisis formal, conceptualización, supervisión',
            'Francisca Torres-Moreno — Gestión del proyecto, análisis formal, conceptualización',
            'Magdalena Vera-Jackson — Gestión del proyecto, análisis formal, conceptualización',
            'Pamela Castillo-Mardones — Análisis formal, revisión y edición, supervisión',
          ],
        },
        {
          type: 'body',
          content: 'Todas las autoras son de la Universidad de Concepción, Chile. El estudio fue revisado y evaluado por el Departamento de Trabajo Social de la misma universidad.',
        },
      ],
    }
  },

  // Nivel 3 — Marco legal
  {
    id: 'ficha-marco-legal',
    label: 'Marco Legal Chileno',
    category: 'Ficha Técnica',
    level: 3,
    parentId: 'ficha',
    x: 780,
    y: -280,
    color: '#6366F1',
    icon: 'Shield',
    posterVariant: 'light',
    content: {
      title: 'Regulación y Normativa Chilena',
      breadcrumb: 'Ficha Técnica > Marco Legal',
      sections: [
        {
          type: 'insight',
          content: 'Las acciones escolares ante situaciones de drogas están reguladas exclusivamente por la Circular No. 482 de la Superintendencia de Educación (2018).',
        },
        {
          type: 'list',
          items: [
            'Circular No. 482: Instrucciones sobre Reglamentos Internos',
            'Ley 20.000: Sanciona el Tráfico Ilícito de Narcóticos',
            'Ley 20.084: Responsabilidad Penal Adolescente',
            'Ley 21.430: Garantías y Protección Integral de Niñez',
            'Convención sobre los Derechos del Niño (ratificada por Chile, 1990)',
          ],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — CONTEXTO (derecha)
  // ═══════════════════════════════════════════════
  {
    id: 'contexto',
    label: 'Contexto Epidemiológico',
    category: 'Contexto',
    level: 2,
    x: 650,
    y: 50,
    color: '#06B6D4',
    icon: 'Globe',
    posterVariant: 'light',
    content: {
      title: 'Crisis del Consumo Adolescente en Chile',
      breadcrumb: 'Contexto',
      sections: [
        {
          type: 'insight',
          content: 'El 62.3% de los estudiantes ha visto a alguien vendiendo drogas en las cercanías de su establecimiento, y el 52% ha visto consumo dentro del mismo.',
        },
        {
          type: 'body',
          content: 'Según el Décimo Cuarto Estudio Nacional de Drogas en Población Escolar de Chile 2021 (SENDA, 2023), y el programa Hablemos de Todo (INJUV, 2021), el 32.8% de los estudiantes de secundaria consume marihuana. Los factores de riesgo incluyen dificultad de adaptación al sistema educativo, sentimientos de inutilidad, deserción escolar y ausencia de referentes positivos en el profesorado (Arbex et al., 2002).',
        },
        {
          type: 'metadata',
          tags: ['SENDA', 'Chile', 'Marihuana', 'Adolescentes'],
        },
      ],
    }
  },

  // Nivel 3 — Factores de riesgo y protección
  {
    id: 'contexto-factores',
    label: 'Factores Riesgo/Protección',
    category: 'Contexto',
    level: 3,
    parentId: 'contexto',
    x: 920,
    y: 50,
    color: '#06B6D4',
    icon: 'AlertTriangle',
    posterVariant: 'light',
    content: {
      title: 'Factores de Riesgo vs. Protección Escolar',
      breadcrumb: 'Contexto > Factores',
      sections: [
        {
          type: 'body',
          content: 'Siguiendo a Arbex et al. (2002), los factores no deben entenderse de manera causal directa; son elementos que, en su interacción, configuran contextos de protección variable.',
        },
        {
          type: 'list',
          items: [
            'RIESGO: Desmotivación, ausentismo, falta de hábitos de estudio',
            'RIESGO: Ausencia de referentes docentes positivos',
            'RIESGO: Experiencias repetidas de fracaso y abandono escolar',
            'PROTECCIÓN: Integración adecuada en la dinámica escolar',
            'PROTECCIÓN: Motivación y compromiso con el proceso educativo',
            'PROTECCIÓN: Presencia de figuras docentes significativas',
            'PROTECCIÓN: Sentido de pertenencia y adherencia a normas',
          ],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — MARCO TEÓRICO (abajo-derecha)
  // ═══════════════════════════════════════════════
  {
    id: 'marco',
    label: 'Marco Teórico',
    category: 'Marco Teórico',
    level: 2,
    x: 420,
    y: 420,
    color: '#8B5CF6',
    icon: 'BookOpen',
    posterVariant: 'light',
    content: {
      title: 'Fenomenología y Prevención Escolar',
      breadcrumb: 'Marco Teórico',
      sections: [
        {
          type: 'insight',
          content: 'La investigación cualitativa permite acceder a la experiencia humana y describir aspectos íntimos del mundo vital de las personas (Willig & Stainton-Rogers, 2008).',
        },
        {
          type: 'body',
          content: 'Se utiliza un diseño fenomenológico cuyo propósito principal es "explorar, describir y comprender las experiencias de las personas respecto a un fenómeno y descubrir los elementos comunes de tales vivencias" (Hernández-Sampieri et al., 2014). El enfoque se centra en la perspectiva holística de Mejía-Navarrete (2004): comprender significados y cualidades interrelacionadas.',
        },
        {
          type: 'quote',
          quote: 'La metodología cualitativa da acceso a la experiencia humana y permite a los investigadores describir aspectos íntimos del mundo vital de las personas.',
          attribution: 'Willig & Stainton-Rogers, 2008, p. 263',
        },
      ],
    }
  },

  // Nivel 3 — Rol del profesor jefe
  {
    id: 'marco-profesor',
    label: 'El Profesor Jefe',
    category: 'Marco Teórico',
    level: 3,
    parentId: 'marco',
    x: 650,
    y: 520,
    color: '#8B5CF6',
    icon: 'Heart',
    posterVariant: 'light',
    content: {
      title: 'El Profesor Jefe como Agente Clave',
      breadcrumb: 'Marco Teórico > Profesor Jefe',
      sections: [
        {
          type: 'body',
          content: 'En Chile, el profesor jefe acompaña a un curso durante todo el año escolar, reuniéndose semanalmente en el "Consejo de Curso" y/o clases de "Orientación" (Ramírez-Muga, 2015). Sus funciones no solo se enfocan en la relación cercana con los estudiantes, sino también en establecer comunicación constante y asertiva con las familias (Pérez et al., 2007).',
        },
        {
          type: 'quote',
          quote: 'Los docentes más experimentados son quienes adquieren estrategias efectivas con el tiempo para el manejo de situaciones complejas de convivencia.',
          attribution: 'Agostinelli & Hernández-Silvera, 2024',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — METODOLOGÍA (abajo-izquierda)
  // ═══════════════════════════════════════════════
  {
    id: 'metodologia',
    label: 'Metodología',
    category: 'Metodología',
    level: 2,
    x: -420,
    y: 420,
    color: '#10B981',
    icon: 'FlaskConical',
    posterVariant: 'light',
    content: {
      title: 'Diseño Fenomenológico Cualitativo',
      breadcrumb: 'Metodología',
      sections: [
        {
          type: 'insight',
          content: 'Entrevistas semiestructuradas a 8 docentes de escuelas públicas y particulares subvencionadas de las regiones del Bío-Bío, Los Lagos y Los Ríos.',
        },
        {
          type: 'list',
          items: [
            'Participantes: 8 profesores jefes (4 escuelas públicas, 4 subvencionadas)',
            'Edades: 28 a 64 años',
            'Experiencia profesional: 3 a 30 años',
            'Regiones: Bío-Bío (6), Los Lagos (1), Los Ríos (1)',
            'Instrumento validado por juicio de expertos (2 evaluaciones + pilotaje)',
            'Criterios éticos: Declaración de Singapur sobre Integridad en la Investigación',
          ],
        },
        {
          type: 'body',
          content: 'El proceso de recolección de datos finaliza al alcanzar el punto de saturación teórica, es decir, cuando no se obtiene nueva información de los informantes.',
        },
      ],
    }
  },

  // Nivel 3 — Matriz de coherencia
  {
    id: 'metodologia-matriz',
    label: 'Matriz de Coherencia',
    category: 'Metodología',
    level: 3,
    parentId: 'metodologia',
    x: -680,
    y: 520,
    color: '#10B981',
    icon: 'Database',
    posterVariant: 'light',
    content: {
      title: 'Dimensiones y Categorías de Análisis',
      breadcrumb: 'Metodología > Matriz',
      sections: [
        {
          type: 'body',
          content: 'La matriz de coherencia metodológica organiza la investigación en 4 dimensiones principales, cada una con sus códigos de análisis específicos:',
        },
        {
          type: 'list',
          items: [
            'Mecanismos de apoyo: Redes institucionales, recursos disponibles, formas de contención',
            'Resguardo de identidad: Protocolo de confidencialidad, manejo de información sensible',
            'Procedimiento de denuncia: Canales, procedimientos legales',
            'Recopilación de información: Entrevistas al estudiante, apoderado y otros docentes',
            'Acciones derivativas: Vinculación con instituciones externas, generación de informes',
            'Acciones de seguimiento: Apoyo psicosocial, monitoreo continuo',
          ],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — RESULTADOS (izquierda)
  // ═══════════════════════════════════════════════
  {
    id: 'resultados',
    label: 'Resultados',
    category: 'Resultados',
    level: 2,
    x: -650,
    y: 50,
    color: '#F59E0B',
    icon: 'BarChart3',
    posterVariant: 'dark',
    content: {
      title: '7 Categorías Emergentes del Análisis',
      breadcrumb: 'Resultados',
      sections: [
        {
          type: 'insight',
          content: 'El "Protocolo Escolar Interno" emerge como eje central de la experiencia docente. La categoría "Abordaje Docente" concentra la mayor frecuencia con 72 unidades de significado.',
        },
        {
          type: 'list',
          items: [
            'Abordaje docente (72 frecuencias): Percepción del consumo, impacto en el docente, formas de contención',
            'Acciones de seguimiento (60): Apoyo psicosocial, monitoreo continuo',
            'Procedimiento interno (42): Protocolo escolar, canales de denuncia, procedimientos legales',
            'Mecanismos de apoyo (41): Redes institucionales, recursos disponibles',
            'Acciones derivativas (38): Vinculación con SENDA, Carabineros, CESFAM, Fiscalía',
            'Recopilación de información (36): Entrevistas con estudiantes, apoderados, otros docentes',
            'Resguardo de identidad (28): Manejo de información sensible, derecho al honor',
          ],
        },
      ],
    }
  },

  // Nivel 3 — Hallazgo clave
  {
    id: 'resultados-protocolo',
    label: 'Protocolo como Eje Central',
    category: 'Resultados',
    level: 3,
    parentId: 'resultados',
    x: -900,
    y: -50,
    color: '#F59E0B',
    icon: 'Shield',
    posterVariant: 'light',
    content: {
      title: 'El Protocolo Escolar como Articulador',
      breadcrumb: 'Resultados > Protocolo',
      sections: [
        {
          type: 'quote',
          quote: 'Aquí hay un protocolo muy claro, que se sigue desde la jefatura, convivencia. Desde convivencia, se hacen las derivaciones... Tenemos psicólogos que son expertos en drogas.',
          attribution: 'Participante No. 6, Docente',
        },
        {
          type: 'body',
          content: 'El protocolo interno estructura el proceso desde la recopilación de información hasta la intervención psicosocial y la colaboración con redes externas. El profesor jefe inicia con la entrevista al estudiante y su apoderado, notifica al equipo de convivencia escolar, y este activa las derivaciones correspondientes.',
        },
      ],
    }
  },

  // Nivel 3 — Brecha de recursos
  {
    id: 'resultados-brecha',
    label: 'Brecha Público/Privado',
    category: 'Resultados',
    level: 3,
    parentId: 'resultados',
    x: -900,
    y: 150,
    color: '#F59E0B',
    icon: 'AlertTriangle',
    posterVariant: 'light',
    content: {
      title: 'Desigualdad de Recursos entre Escuelas',
      breadcrumb: 'Resultados > Brecha',
      sections: [
        {
          type: 'insight',
          content: 'Las escuelas subvencionadas cuentan con recursos humanos y financieros, aunque insuficientes. Las escuelas municipales tienen recursos mínimos, indicando que lo disponible no basta para sus necesidades.',
        },
        {
          type: 'body',
          content: 'Los docentes coinciden en que carecen de los recursos y herramientas necesarias para abordar el problema de manera óptima, ya que no reciben suficiente información de las instituciones pertinentes respecto a la prevención del consumo.',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — DISCUSIÓN (arriba-izquierda)
  // ═══════════════════════════════════════════════
  {
    id: 'discusion',
    label: 'Discusión y Conclusiones',
    category: 'Discusión',
    level: 2,
    x: -520,
    y: -380,
    color: '#3B82F6',
    icon: 'MessageCircle',
    posterVariant: 'dark',
    content: {
      title: 'De la Sanción al Cuidado Integral',
      breadcrumb: 'Discusión',
      sections: [
        {
          type: 'insight',
          content: 'Es necesario transitar de una cultura educativa centrada en el castigo hacia una centrada en el cuidado, reconociendo el consumo adolescente como un fenómeno complejo y multifacético.',
        },
        {
          type: 'body',
          content: 'El abordaje predominante está frecuentemente enmarcado en una acción sancionatoria que incluye conexión con entidades policiales (Carabineros, PDI). Sin embargo, estas acciones normativamente válidas se tensan cuando se observan desde la perspectiva de la protección de los derechos de la niñez (Convención sobre los Derechos del Niño, art. 33).',
        },
        {
          type: 'quote',
          quote: 'Se requiere una política educativa que apoye, forme y proporcione a los docentes recursos y herramientas reales, tanto humanos como materiales, para actuar con eficacia.',
          attribution: 'Conclusiones del estudio',
        },
        {
          type: 'list',
          items: [
            'Los protocolos internos están estrechamente vinculados a las disposiciones legales del país',
            'Los docentes son actores clave pero necesitan formación continua sobre normativa legal',
            'La socialización de los mecanismos institucionales existentes debe fortalecerse',
            'El consumo adolescente requiere un abordaje integral: legal, social, biológico, psicológico',
          ],
        },
        {
          type: 'metadata',
          tags: ['Derechos del Niño', 'Cultura de Cuidado', 'Política Educativa'],
        },
      ],
    }
  },

  // Nivel 3 — Limitaciones
  {
    id: 'discusion-limitaciones',
    label: 'Limitaciones',
    category: 'Discusión',
    level: 3,
    parentId: 'discusion',
    x: -780,
    y: -480,
    color: '#3B82F6',
    icon: 'AlertTriangle',
    posterVariant: 'light',
    content: {
      title: 'Limitaciones del Estudio',
      breadcrumb: 'Discusión > Limitaciones',
      sections: [
        {
          type: 'list',
          items: [
            'Dificultad para encontrar informantes en la provincia de Concepción',
            'Se recurrió a la entrega presencial de información y difusión por redes sociales',
            'Escasez de espacios disponibles para docentes con rol de jefatura',
            'Número limitado de participantes, aunque se alcanzó saturación teórica',
          ],
        },
        {
          type: 'body',
          content: 'A pesar de las dificultades en la búsqueda de informantes, el punto de saturación teórica de los datos fue adecuadamente alcanzado, garantizando la validez del análisis.',
        },
      ],
    }
  },
];
