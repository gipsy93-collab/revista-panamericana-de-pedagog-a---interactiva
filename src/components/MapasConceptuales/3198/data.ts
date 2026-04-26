export const nodes = [
  // === LEVEL 1: CENTRAL THESIS ===
  {
    id: 'central',
    label: 'Aprendizaje TIC y Envejecimiento Activo',
    category: 'Núcleo Central',
    level: 1,
    x: -700,
    y: 0,
    color: '#F97316',
    icon: 'Target',
    posterVariant: 'dark',
    content: {
      title: 'Núcleo Central',
      breadcrumb: 'Tesis Central',
      sections: [
        {
          type: 'insight',
          content: 'El aprendizaje de tecnología en adultos mayores no es alfabetización digital, sino un proceso psicopedagógico integral que transforma su autonomía, relaciones familiares y lugar en la sociedad digital.'
        },
        {
          type: 'body',
          content: 'Este estudio revela que cuando los adultos mayores aprenden a usar tecnología —especialmente teléfonos móviles— el impacto trasciende lo instrumental. Se transforman sus relaciones familiares, su autonomía personal y su sentido de pertenencia en la sociedad digital.'
        },
        {
          type: 'metadata',
          tags: ['27 participantes', '60-95 años', '21 categorías emergentes', 'AMBA, Argentina']
        },
        {
          type: 'quote',
          quote: 'Las TIC tienen el potencial de transformar no solo la forma en que los adultos mayores se relacionan con el mundo, sino también cómo se perciben a sí mismos dentro de un contexto en constante cambio.',
          attribution: 'Hernández-Silvera et al., 2025'
        },
        {
          type: 'body',
          content: 'Dato que lo soporta: 27 adultos mayores generaron 21 categorías analíticas emergentes sobre autonomía, apoyo social y envejecimiento activo.\n\nEfecto transformador: El aprendizaje tecnológico fortalece la identidad del adulto mayor como ciudadano activo y conectado.'
        }
      ],
      image: '/archivos/imágenes/bg-hands-smartphone.jpg',
      imageAlt: 'Manos de adulto mayor usando smartphone'
    }
  },

  // === LEVEL 2: CATEGORY NODES (10 categories) ===
  {
    id: 'ficha-tecnica',
    label: 'Ficha Técnica',
    category: 'Ficha Técnica',
    level: 2,
    x: -100,
    y: -785,
    color: '#8B5CF6',
    icon: 'FileText',
    posterVariant: 'light',
    content: {
      title: 'Ficha Técnica del Estudio',
      breadcrumb: 'Metadatos de la Investigación',
      sections: [
        {
          type: 'metadata',
          tags: ['2025', 'Cualitativo', 'Teoría Fundamentada', 'Argentina']
        },
        {
          type: 'body',
          content: 'Estudio empírico cualitativo que explora el aprendizaje de TIC (teléfonos móviles) en adultos mayores comprometidos con el envejecimiento activo en el Área Metropolitana de Buenos Aires (AMBA), Argentina.'
        },
        {
          type: 'list',
          items: [
            'Autores: Dides-Iliana Hernández-Silvera, Alejandra-Noelia Pécora, Florencia-Julia Núñez',
            'Institución: Universidad Católica Argentina',
            'Revista: Revista Panamericana de Pedagogía, n. 39 (2025)',
            'E-ISSN: 2594-2190',
            'DOI: https://doi.org/10.21555/rpp.3198'
          ]
        },
        {
          type: 'body',
          content: 'Tipo de estudio: Empírico — Cualitativo (Teoría Fundamentada / Grounded Theory). Enfoque epistemológico inductivo: de los datos a la teoría, no al revés.'
        }
      ],
      image: '/archivos/imágenes/bg-classroom-wide.jpg',
      imageAlt: 'Aula comunitaria de tecnología'
    }
  },
  {
    id: 'nucleo-central',
    label: 'Núcleo Central',
    category: 'Núcleo Central',
    level: 2,
    x: -100,
    y: -580,
    color: '#F97316',
    icon: 'Target',
    posterVariant: 'dark',
    content: {
      title: 'Núcleo Central',
      breadcrumb: 'Tesis Principal',
      sections: [
        {
          type: 'insight',
          content: 'El aprendizaje de tecnología en adultos mayores no es alfabetización digital, sino un proceso psicopedagógico integral que transforma su autonomía, relaciones familiares y lugar en la sociedad digital.'
        },
        {
          type: 'body',
          content: 'Dato que lo soporta: 27 adultos mayores (60-95 años) generaron 21 categorías analíticas emergentes sobre autonomía, apoyo social y envejecimiento activo.\n\nVisión: Las TIC actúan como puentes intergeneracionales y herramientas de empoderamiento personal.'
        }
      ],
      image: '/archivos/imágenes/bg-hands-smartphone.jpg',
      imageAlt: 'Manos de adulto mayor usando smartphone'
    }
  },
  {
    id: 'contexto',
    label: 'Contexto y Problemática',
    category: 'Contexto',
    level: 2,
    x: -100,
    y: -395,
    color: '#3B82F6',
    icon: 'Globe',
    posterVariant: 'light',
    content: {
      title: 'Contexto y Problemática',
      breadcrumb: '¿Por qué importa este estudio?',
      sections: [
        {
          type: 'body',
          content: 'Argentina y América Latina enfrentan el envejecimiento poblacional más acelerado del mundo. La transformación digital de servicios públicos, bancarios y de salud deja fuera a quienes no dominan la tecnología.'
        },
        {
          type: 'quote',
          quote: 'The technological gap excludes older adults from numerous opportunities and services available in the digital age. By studying their technological learning, the barriers and challenges they face are identified, and strategies are developed to incorporate this population into society.',
          attribution: 'Hernández-Silvera et al., p. 3'
        },
        {
          type: 'body',
          content: 'Pregunta de investigación: ¿Cómo los adultos mayores apropian las TIC no como mera habilidad técnica, sino como proceso con implicaciones cognitivas, emocionales y sociales profundas?'
        },
        {
          type: 'list',
          items: [
            'Objetivo general: Explorar el impacto del aprendizaje de TIC en el envejecimiento activo',
            'Determinar impacto mediante muestra estratificada por ubicación geográfica',
            'Describir motivaciones para aprender tecnología',
            'Explicar relación entre uso de tecnología y envejecimiento activo',
            'Identificar aplicaciones que promueven envejecimiento activo',
            'Analizar estrategias pedagógicas más efectivas'
          ]
        }
      ],
      image: '/archivos/imágenes/bg-desk-notebook.jpg',
      imageAlt: 'Adulto mayor trabajando en laptop'
    }
  },
  {
    id: 'marco-teorico',
    label: 'Marco Teórico',
    category: 'Marco Teórico',
    level: 2,
    x: -100,
    y: -180,
    color: '#06B6D4',
    icon: 'BookOpen',
    posterVariant: 'light',
    content: {
      title: 'Marco Teórico',
      breadcrumb: 'Pilares Conceptuales',
      sections: [
        {
          type: 'body',
          content: 'Psicopedagogía + Educomunicación + Teoría Fundamentada (Grounded Theory). Las TIC como "andamiaje" que permite autonomía, pero solo cuando se integran con apoyo social y estrategias pedagógicas personalizadas.'
        },
        {
          type: 'list',
          items: [
            'González (2019) — Psicopedagogía del envejecimiento',
            'Gabelas-Barroso y Marta-Lazo (2020) — Educomunicación',
            'Fajardo-Cuéllar y Wobbeking-Sánchez (2020) — Brecha digital',
            'Román-Graván et al. (2021) — TIC y adultos mayores',
            'Corbin y Strauss (2022) — Teoría Fundamentada'
          ]
        },
        {
          type: 'body',
          content: 'Conceptos clave traducidos al contexto del estudio:'
        },
        {
          type: 'list',
          items: [
            'TRIC (Tecnologías de la R-elación): Tecnologías que no solo informan, sino que conectan emocionalmente',
            'Reserva Cognitiva: La "colchoneta" cerebral que se fortalece aprendiendo cosas nuevas',
            'Envejecimiento Activo: No envejecer "bien", sino seguir participando en la sociedad',
            'Teoría Fundamentada: No partir con hipótesis, dejar que los datos hablen'
          ]
        }
      ],
      image: '/archivos/imágenes/bg-reading-device.jpg',
      imageAlt: 'Adulto mayor leyendo en tablet'
    }
  },
  {
    id: 'metodologia',
    label: 'Metodología',
    category: 'Metodología',
    level: 2,
    x: -100,
    y: 30,
    color: '#10B981',
    icon: 'Microscope',
    posterVariant: 'light',
    content: {
      title: 'Metodología',
      breadcrumb: 'Cómo lo hicieron',
      sections: [
        {
          type: 'metadata',
          tags: ['Cualitativo', 'Grounded Theory', 'ATLAS.ti', '27 entrevistas']
        },
        {
          type: 'body',
          content: 'Diseño cualitativo con Teoría Fundamentada. Enfoque epistemológico inductivo: de los datos a la teoría.'
        },
        {
          type: 'list',
          items: [
            'N = 27 adultos mayores (60-95 años)',
            'Perfil: Participantes en talleres sobre uso de TIC, asistencia continua durante tres meses',
            'Contexto: Tres instituciones en AMBA',
            '— Asociación de Jubilados y Pensionados en Villa Lugano (CABA)',
            '— Unión de Empleados de Comercio (zona sur)',
            '— Taller protegido en Barracas (CABA)'
          ]
        },
        {
          type: 'body',
          content: 'Instrumentos: 27 entrevistas semiestructuradas con preguntas abiertas sobre actividades diarias, motivación, aplicaciones conocidas, beneficios percibidos, dificultades de acceso y grado de independencia.'
        },
        {
          type: 'body',
          content: 'Análisis: Método comparativo constante de Corbin y Strauss (2022): codificación abierta → axial → selectiva. Software ATLAS.ti para generar diagramas, nubes de palabras y redes conceptuales. Resultado: 21 categorías analíticas emergentes.'
        }
      ],
      image: '/archivos/imágenes/bg-classroom.jpg',
      imageAlt: 'Taller de tecnología para adultos mayores'
    }
  },
  {
    id: 'resultados',
    label: 'Resultados',
    category: 'Resultados',
    level: 2,
    x: -100,
    y: 275,
    color: '#EAB308',
    icon: 'BarChart3',
    posterVariant: 'light',
    content: {
      title: 'Resultados',
      breadcrumb: 'Hallazgos Principales',
      sections: [
        {
          type: 'insight',
          content: 'Las TIC (especialmente teléfonos móviles) tienen impacto significativo en el envejecimiento activo, facilitando integración en la sociedad digital.'
        },
        {
          type: 'quote',
          quote: 'ICTs have the potential to transform not only the way older adults relate to the world, but also how they perceive themselves within a constantly changing context.',
          attribution: 'p. 24'
        },
        {
          type: 'body',
          content: 'Hallazgo 1 — Autonomía incrementada: Los participantes lograron mayor independencia en comunicación, gestión de trámites y acceso a información. Sin embargo, persisten dependencias y necesidad de soporte continuo. La tecnología actúa como "andamiaje" que permite actividades antes delegadas a otros.'
        },
        {
          type: 'body',
          content: 'Hallazgo 2 — Motivaciones emocionales, no utilitarias: Las razones principales para aprender son mantenerse conectados con familiares (especialmente hijos y nietos en el extranjero), realizar trámites bancarios de forma autónoma, y reducir dependencia de otros. El motor no es la eficiencia, sino la conexión afectiva y la dignidad de no depender.'
        },
        {
          type: 'body',
          content: 'Hallazgo 3 — WhatsApp como infraestructura emocional: WhatsApp, email, Skype y Zoom se volvieron indispensables; Google para búsquedas, YouTube para entretenimiento, aplicaciones bancarias para autogestión. No son "aplicaciones", son puentes hacia familiares lejanos.'
        },
        {
          type: 'body',
          content: 'Hallazgo 4 — Apoyo social como condición de posibilidad: El apoyo social y familiar se identificó como facilitador crucial. Talleres presenciales en centros comunitarios + acompañamiento de pares y familiares = estrategia efectiva.'
        }
      ],
      image: '/archivos/imágenes/bg-video-call.jpg',
      imageAlt: 'Adulto mayor en videollamada'
    }
  },
  {
    id: 'discusion',
    label: 'Discusión',
    category: 'Discusión',
    level: 2,
    x: -100,
    y: 515,
    color: '#EC4899',
    icon: 'MessageCircle',
    posterVariant: 'light',
    content: {
      title: 'Discusión',
      breadcrumb: 'Qué significa todo esto',
      sections: [
        {
          type: 'body',
          content: 'El aprendizaje de TIC no es meramente instrumental; tiene profundas implicaciones emocionales, sociales y cognitivas. La tecnología aborda aspectos emocionales relacionados con la autonomía y la autoestima, reforzando el aprendizaje y la adaptación tecnológica.'
        },
        {
          type: 'body',
          content: 'Coincide con: López-López y Álvarez-Aros (2021) sobre TIC y autonomía; Hogan (2022) sobre redes sociales y autonomía de adultos mayores; Fisk et al. (2020) sobre diferencias individuales en habilidades tecnológicas.'
        },
        {
          type: 'body',
          content: 'Contradice / va más allá de: La alfabetización digital convencional, al introducir las TRIC y la educomunicación como marcos para comprender el impacto relacional de las tecnologías.'
        },
        {
          type: 'list',
          items: [
            'Para educadores/psicopedagogos: Diseñar programas personalizados que adapten la enseñanza a capacidades, necesidades e intereses individuales',
            'Para políticos/gestores: Promover inclusión digital equitativa colaborando con organizaciones comunitarias; integrar talleres de seguridad digital',
            'Para familiares/cuidadores: Ofrecer formación para acompañar el proceso de aprendizaje, brindando soporte técnico y motivación emocional',
            'Para centros comunitarios: Integrar alfabetización tecnológica con talleres de memoria, yoga, teatro, gimnasia, danza — enfoque integral'
          ]
        }
      ],
      image: '/archivos/imágenes/bg-grandchild.jpg',
      imageAlt: 'Abuela con nieto usando tablet'
    }
  },
  {
    id: 'relevancia',
    label: 'Relevancia',
    category: 'Relevancia',
    level: 2,
    x: -100,
    y: 730,
    color: '#84CC16',
    icon: 'Clock',
    posterVariant: 'light',
    content: {
      title: 'Relevancia Contemporánea',
      breadcrumb: 'Por qué importa hoy',
      sections: [
        {
          type: 'body',
          content: 'La digitalización de servicios públicos, bancarios y de salud se ha intensificado globalmente. La brecha digital de adultos mayores es ahora una problemática de justicia social urgente. América Latina enfrenta uno de los procesos de envejecimiento más rápidos del mundo.'
        },
        {
          type: 'body',
          content: 'El legado post-pandémico evidenció la importancia de la inclusión digital: telemedicina, comunicación familiar remota y servicios esenciales en línea son ahora derechos digitales fundamentales.'
        },
        {
          type: 'body',
          content: 'Perspectiva desde el Sur Global: este estudio considera contextos de desigualdad y el rol crucial de centros comunitarios para la cohesión social.'
        },
        {
          type: 'quote',
          quote: 'Leveraging ICTs in active aging represents not only an opportunity for digital inclusion but also a path toward more autonomous, participatory, and connected aging.',
          attribution: 'p. 24'
        }
      ],
      image: '/archivos/imágenes/bg-walking-street.jpg',
      imageAlt: 'Adulto mayor caminando con smartphone'
    }
  },

  // === LEVEL 3: DETAIL NODES (sub-nodes for each category) ===
  // Ficha Técnica details
  {
    id: 'ft-autores',
    label: 'Autores',
    category: 'Ficha Técnica',
    level: 3,
    x: 450,
    y: -820,
    color: '#B87D5E',
    icon: 'Users',
    parentId: 'ficha-tecnica',
    posterVariant: 'light',
    content: {
      title: 'Autores',
      breadcrumb: 'Ficha Técnica',
      sections: [
        {
          type: 'list',
          items: [
            'Dides-Iliana Hernández-Silvera',
            'Alejandra-Noelia Pécora',
            'Florencia-Julia Núñez',
            'Universidad Católica Argentina'
          ]
        }
      ],
      image: '/archivos/imágenes/bg-desk-notebook.jpg',
      imageAlt: 'Escritorio de investigación'
    }
  },
  {
    id: 'ft-revista',
    label: 'Revista',
    category: 'Ficha Técnica',
    level: 3,
    x: 450,
    y: -750,
    color: '#B87D5E',
    icon: 'Newspaper',
    parentId: 'ficha-tecnica',
    posterVariant: 'light',
    content: {
      title: 'Publicación',
      breadcrumb: 'Ficha Técnica',
      sections: [
        {
          type: 'list',
          items: [
            'Revista Panamericana de Pedagogía, n. 39 (2025)',
            'E-ISSN: 2594-2190',
            'DOI: https://doi.org/10.21555/rpp.3198'
          ]
        }
      ],
      image: '/archivos/imágenes/bg-reading-device.jpg',
      imageAlt: 'Lectura académica'
    }
  },

  // Contexto details
  {
    id: 'ctx-latam',
    label: 'Latinoamérica',
    category: 'Contexto',
    level: 3,
    x: 450,
    y: -430,
    color: '#B87D5E',
    icon: 'MapPin',
    parentId: 'contexto',
    posterVariant: 'light',
    content: {
      title: 'Contexto Latinoamericano',
      breadcrumb: 'Contexto',
      sections: [
        {
          type: 'body',
          content: 'Argentina y América Latina enfrentan el envejecimiento poblacional más acelerado del mundo. La transformación digital deja fuera a quienes no dominan la tecnología.'
        }
      ],
      image: '/archivos/imágenes/bg-walking-street.jpg',
      imageAlt: 'Ciudad y sociedad'
    }
  },
  {
    id: 'ctx-brecha',
    label: 'Brecha Digital',
    category: 'Contexto',
    level: 3,
    x: 450,
    y: -360,
    color: '#B87D5E',
    icon: 'GitBranch',
    parentId: 'contexto',
    posterVariant: 'light',
    content: {
      title: 'La Brecha Digital',
      breadcrumb: 'Contexto',
      sections: [
        {
          type: 'quote',
          quote: 'The technological gap excludes older adults from numerous opportunities and services available in the digital age.',
          attribution: 'p. 3'
        }
      ],
      image: '/archivos/imágenes/bg-hands-smartphone.jpg',
      imageAlt: 'Brecha y uso de tecnología'
    }
  },

  // Marco Teórico details
  {
    id: 'mt-psicopedagogia',
    label: 'Psicopedagogía',
    category: 'Marco Teórico',
    level: 3,
    x: 450,
    y: -250,
    color: '#B87D5E',
    icon: 'Brain',
    parentId: 'marco-teorico',
    posterVariant: 'light',
    content: {
      title: 'Psicopedagogía',
      breadcrumb: 'Marco Teórico',
      sections: [
        {
          type: 'body',
          content: 'La psicopedagogía proporciona una perspectiva más completa integrando dimensiones psicológicas y educativas, crucial para diseñar intervenciones efectivas que consideren las necesidades emocionales y cognitivas del aprendiz.'
        }
      ],
      image: '/archivos/imágenes/bg-classroom.jpg',
      imageAlt: 'Aprendizaje guiado'
    }
  },
  {
    id: 'mt-tric',
    label: 'TRIC',
    category: 'Marco Teórico',
    level: 3,
    x: 450,
    y: -180,
    color: '#B87D5E',
    icon: 'Heart',
    parentId: 'marco-teorico',
    posterVariant: 'light',
    content: {
      title: 'TRIC: Tecnologías de la R-elación',
      breadcrumb: 'Marco Teórico',
      sections: [
        {
          type: 'insight',
          content: 'Tecnologías que no solo informan, sino que conectan emocionalmente a las personas. Van más allá de la alfabetización digital convencional.'
        }
      ],
      image: '/archivos/imágenes/bg-video-call.jpg',
      imageAlt: 'Tecnologías de la relación'
    }
  },
  {
    id: 'mt-reserva',
    label: 'Reserva Cognitiva',
    category: 'Marco Teórico',
    level: 3,
    x: 450,
    y: -110,
    color: '#B87D5E',
    icon: 'Shield',
    parentId: 'marco-teorico',
    posterVariant: 'light',
    content: {
      title: 'Reserva Cognitiva',
      breadcrumb: 'Marco Teórico',
      sections: [
        {
          type: 'body',
          content: 'La "colchoneta" cerebral que se fortalece aprendiendo cosas nuevas, retrasando el deterioro mental. Aprender tecnología en la vejez es ejercicio cognitivo.'
        }
      ],
      image: '/archivos/imágenes/bg-reading-device.jpg',
      imageAlt: 'Estímulo cognitivo'
    }
  },

  // Metodología details
  {
    id: 'met-participantes',
    label: '27 Participantes',
    category: 'Metodología',
    level: 3,
    x: 450,
    y: -40,
    color: '#B87D5E',
    icon: 'Users',
    parentId: 'metodologia',
    posterVariant: 'light',
    content: {
      title: 'Los Participantes',
      breadcrumb: 'Metodología',
      sections: [
        {
          type: 'list',
          items: [
            'N = 27 adultos mayores',
            'Edades: 60-95 años',
            'Tres instituciones en AMBA',
            'Asistencia continua durante tres meses'
          ]
        }
      ],
      image: '/archivos/imágenes/bg-classroom-wide.jpg',
      imageAlt: 'Grupo de participantes'
    }
  },
  {
    id: 'met-atlas',
    label: 'ATLAS.ti',
    category: 'Metodología',
    level: 3,
    x: 450,
    y: 30,
    color: '#B87D5E',
    icon: 'Database',
    parentId: 'metodologia',
    posterVariant: 'light',
    content: {
      title: 'ATLAS.ti y Análisis',
      breadcrumb: 'Metodología',
      sections: [
        {
          type: 'body',
          content: 'Software ATLAS.ti para generar diagramas, nubes de palabras y redes conceptuales. Método comparativo constante: codificación abierta → axial → selectiva. Resultado: 21 categorías analíticas emergentes.'
        }
      ],
      image: '/archivos/imágenes/bg-desk-notebook.jpg',
      imageAlt: 'Análisis de datos'
    }
  },
  {
    id: 'met-entrevistas',
    label: '27 Entrevistas',
    category: 'Metodología',
    level: 3,
    x: 450,
    y: 100,
    color: '#B87D5E',
    icon: 'MessageSquare',
    parentId: 'metodologia',
    posterVariant: 'light',
    content: {
      title: 'Instrumentos',
      breadcrumb: 'Metodología',
      sections: [
        {
          type: 'body',
          content: '27 entrevistas semiestructuradas con preguntas abiertas: actividades diarias, motivación para asistir a talleres, aplicaciones conocidas, beneficios percibidos, dificultades de acceso, grado de independencia alcanzado.'
        }
      ],
      image: '/archivos/imágenes/bg-classroom.jpg',
      imageAlt: 'Entrevistas de campo'
    }
  },

  // Resultados details
  {
    id: 'res-autonomia',
    label: 'Autonomía',
    category: 'Resultados',
    level: 3,
    x: 450,
    y: 170,
    color: '#B87D5E',
    icon: 'Unlock',
    parentId: 'resultados',
    posterVariant: 'light',
    content: {
      title: 'Autonomía Incrementada',
      breadcrumb: 'Resultados',
      sections: [
        {
          type: 'body',
          content: 'Los participantes lograron mayor independencia en comunicación, gestión de trámites y acceso a información. Sin embargo, persisten dependencias y necesidad de soporte continuo. La tecnología actúa como "andamiaje" que permite actividades antes delegadas a otros, pero no elimina por completo la necesidad de ayuda.'
        }
      ],
      image: '/archivos/imágenes/bg-walking-street.jpg',
      imageAlt: 'Autonomía en la vejez'
    }
  },
  {
    id: 'res-motivaciones',
    label: 'Motivaciones',
    category: 'Resultados',
    level: 3,
    x: 450,
    y: 240,
    color: '#B87D5E',
    icon: 'Heart',
    parentId: 'resultados',
    posterVariant: 'light',
    content: {
      title: 'Motivaciones Emocionales',
      breadcrumb: 'Resultados',
      sections: [
        {
          type: 'body',
          content: 'Las razones principales para aprender: mantenerse conectados con familiares (especialmente hijos y nietos en el extranjero), realizar trámites bancarios de forma autónoma, reducir dependencia de otros. El motor no es la eficiencia, sino la conexión afectiva y la dignidad de no depender.'
        }
      ],
      image: '/archivos/imágenes/bg-grandchild.jpg',
      imageAlt: 'Conexión familiar'
    }
  },
  {
    id: 'res-whatsapp',
    label: 'WhatsApp',
    category: 'Resultados',
    level: 3,
    x: 450,
    y: 310,
    color: '#B87D5E',
    icon: 'Smartphone',
    parentId: 'resultados',
    posterVariant: 'light',
    content: {
      title: 'WhatsApp como Infraestructura Emocional',
      breadcrumb: 'Resultados',
      sections: [
        {
          type: 'body',
          content: 'WhatsApp, email, Skype y Zoom se volvieron indispensables; Google para búsquedas, YouTube para entretenimiento, aplicaciones bancarias para autogestión. No son "aplicaciones", son puentes hacia familiares lejanos y herramientas de autonomía económica.'
        }
      ],
      image: '/archivos/imágenes/bg-hands-smartphone.jpg',
      imageAlt: 'Uso de WhatsApp'
    }
  },
  {
    id: 'res-apoyo',
    label: 'Apoyo Social',
    category: 'Resultados',
    level: 3,
    x: 450,
    y: 380,
    color: '#B87D5E',
    icon: 'Users',
    parentId: 'resultados',
    posterVariant: 'light',
    content: {
      title: 'Apoyo Social como Condición',
      breadcrumb: 'Resultados',
      sections: [
        {
          type: 'insight',
          content: 'Sin red social, la tecnología no se adopta; sin tecnología, la red social se debilita.'
        },
        {
          type: 'body',
          content: 'El apoyo social y familiar se identificó como facilitador crucial. Talleres presenciales en centros comunitarios + acompañamiento de pares y familiares = estrategia efectiva.'
        }
      ],
      image: '/archivos/imágenes/bg-grandchild.jpg',
      imageAlt: 'Redes de apoyo'
    }
  },

  // Discusión details
  {
    id: 'disc-implicaciones',
    label: 'Implicaciones',
    category: 'Discusión',
    level: 3,
    x: 450,
    y: 480,
    color: '#B87D5E',
    icon: 'Lightbulb',
    parentId: 'discusion',
    posterVariant: 'light',
    content: {
      title: 'Implicaciones Prácticas',
      breadcrumb: 'Discusión',
      sections: [
        {
          type: 'list',
          items: [
            'Educadores: Programas personalizados adaptados a capacidades individuales',
            'Políticos: Inclusión digital equitativa con organizaciones comunitarias',
            'Familiares: Formación para acompañar con soporte técnico y emocional',
            'Centros comunitarios: Integrar tecnología con memoria, yoga, teatro, danza'
          ]
        }
      ],
      image: '/archivos/imágenes/bg-reading-device.jpg',
      imageAlt: 'Implicaciones y futuro'
    }
  },
  {
    id: 'disc-literatura',
    label: 'Literatura',
    category: 'Discusión',
    level: 3,
    x: 450,
    y: 550,
    color: '#B87D5E',
    icon: 'BookMarked',
    parentId: 'discusion',
    posterVariant: 'light',
    content: {
      title: 'Diálogo con la Literatura',
      breadcrumb: 'Discusión',
      sections: [
        {
          type: 'body',
          content: 'Coincide con: López-López y Álvarez-Aros (2021) sobre TIC y autonomía; Hogan (2022) sobre redes sociales y autonomía; Fisk et al. (2020) sobre diferencias individuales.\n\nVa más allá de: La alfabetización digital convencional, introduciendo TRIC y educomunicación como marcos para comprender el impacto relacional de las tecnologías.'
        }
      ],
      image: '/archivos/imágenes/bg-desk-notebook.jpg',
      imageAlt: 'Marco de literatura'
    }
  },

  // Relevancia details
  {
    id: 'rel-postpandemia',
    label: 'Post-Pandemia',
    category: 'Relevancia',
    level: 3,
    x: 450,
    y: 660,
    color: '#B87D5E',
    icon: 'Activity',
    parentId: 'relevancia',
    posterVariant: 'light',
    content: {
      title: 'Legado Post-Pandémico',
      breadcrumb: 'Relevancia',
      sections: [
        {
          type: 'body',
          content: 'La pandemia evidenció la vulnerabilidad de adultos mayores excluidos digitalmente: sin telemedicina, sin comunicación familiar remota, sin servicios esenciales en línea.'
        }
      ],
      image: '/archivos/imágenes/bg-video-call.jpg',
      imageAlt: 'Lecciones de la pandemia'
    }
  },
  {
    id: 'rel-ia',
    label: 'IA Generativa',
    category: 'Relevancia',
    level: 3,
    x: 450,
    y: 730,
    color: '#B87D5E',
    icon: 'Cpu',
    parentId: 'relevancia',
    posterVariant: 'light',
    content: {
      title: 'IA y Nuevas Tecnologías',
      breadcrumb: 'Relevancia',
      sections: [
        {
          type: 'body',
          content: 'El surgimiento de IA generativa y asistentes conversacionales plantea nuevas oportunidades y desafíos para la inclusión digital de adultos mayores. ¿Cómo adaptar estas herramientas para personas mayores?'
        }
      ],
      image: '/archivos/imágenes/bg-hands-smartphone.jpg',
      imageAlt: 'Inteligencia Artificial'
    }
  },
  {
    id: 'rel-global-south',
    label: 'Sur Global',
    category: 'Relevancia',
    level: 3,
    x: 450,
    y: 800,
    color: '#B87D5E',
    icon: 'Globe2',
    parentId: 'relevancia',
    posterVariant: 'light',
    content: {
      title: 'Perspectiva del Sur Global',
      breadcrumb: 'Relevancia',
      sections: [
        {
          type: 'body',
          content: 'A diferencia de la literatura dominante de Europa y Norteamérica, este estudio considera contextos de desigualdad, acceso desigual a infraestructura y el rol crucial de centros comunitarios en América Latina.'
        }
      ],
      image: '/archivos/imágenes/bg-walking-street.jpg',
      imageAlt: 'Contexto Sur Global'
    }
  }
] as any[];

export const edges = [
  // Ficha Técnica → children
  { id: 'e11', source: 'ficha-tecnica', target: 'ft-autores', level: 2 },
  { id: 'e12', source: 'ficha-tecnica', target: 'ft-revista', level: 2 },

  // Contexto → children
  { id: 'e15', source: 'contexto', target: 'ctx-latam', level: 2 },
  { id: 'e16', source: 'contexto', target: 'ctx-brecha', level: 2 },

  // Marco Teórico → children
  { id: 'e17', source: 'marco-teorico', target: 'mt-psicopedagogia', level: 2 },
  { id: 'e18', source: 'marco-teorico', target: 'mt-tric', level: 2 },
  { id: 'e19', source: 'marco-teorico', target: 'mt-reserva', level: 2 },

  // Metodología → children
  { id: 'e20', source: 'metodologia', target: 'met-participantes', level: 2 },
  { id: 'e21', source: 'metodologia', target: 'met-atlas', level: 2 },
  { id: 'e22', source: 'metodologia', target: 'met-entrevistas', level: 2 },

  // Resultados → children
  { id: 'e23', source: 'resultados', target: 'res-autonomia', level: 2 },
  { id: 'e24', source: 'resultados', target: 'res-motivaciones', level: 2 },
  { id: 'e25', source: 'resultados', target: 'res-whatsapp', level: 2 },
  { id: 'e26', source: 'resultados', target: 'res-apoyo', level: 2 },

  // Discusión → children
  { id: 'e27', source: 'discusion', target: 'disc-implicaciones', level: 2 },
  { id: 'e28', source: 'discusion', target: 'disc-literatura', level: 2 },

  // Relevancia → children
  { id: 'e33', source: 'relevancia', target: 'rel-postpandemia', level: 2 },
  { id: 'e34', source: 'relevancia', target: 'rel-ia', level: 2 },
  { id: 'e35', source: 'relevancia', target: 'rel-global-south', level: 2 },
] as any[];

export const getNodeById = (id: string) => nodes.find((n: any) => n.id === id);
export const getChildrenNodes = (parentId: string) => nodes.filter((n: any) => n.parentId === parentId);
export const getCategoryNodes = () => nodes.filter((n: any) => n.level === 2);
export const getDetailNodes = () => nodes.filter((n: any) => n.level === 3);
