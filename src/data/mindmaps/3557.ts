import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

/**
 * Mapa conceptual: Artículo 3557
 * "Educación jurídica en la era digital: tensiones, resistencias y oportunidades"
 * Autores: Prince Tritto, Galbán-Lozano & Meza-Mejía
 * Universidad Panamericana, México — RPP n.41 (2026)
 * DOI: https://doi.org/10.21555/rpp.3557
 *
 * Layout: Estructura "diamante" con tensión tradición-innovación
 * como eje principal, reflejando la dicotomía central del artículo
 */

export const nodes3557: NodeData[] = [
  // ═══════════════════════════════════════════════
  // NIVEL 1 — NÚCLEO CENTRAL
  // ═══════════════════════════════════════════════
  {
    id: 'central',
    label: 'Derecho en la Era Digital',
    category: 'Núcleo Central',
    level: 1,
    x: 0,
    y: 0,
    color: '#8B5CF6',
    icon: 'Target',
    posterVariant: 'dark',
    content: {
      title: 'Educación Jurídica en la Era Digital',
      breadcrumb: 'Tesis Central',
      sections: [
        {
          type: 'insight',
          content: 'Solo el 10% de las 38 facultades de derecho analizadas han incorporado materias de tecnología en su currículo obligatorio. Sin embargo, el 58% las ofrece como optativas. Esta dicotomía revela una tensión irresuelta entre tradición e innovación.',
        },
        {
          type: 'body',
          content: 'Este artículo explora la convergencia entre la formación jurídica tradicional y las competencias tecnológicas emergentes, abordando la metamorfosis educativa que enfrenta el derecho en la era digital. A través de una evaluación comparativa de planes de estudios y entrevistas con juristas en activo, examina las transformaciones necesarias en el currículum académico para preparar a los abogados del siglo XXI.',
        },
        {
          type: 'metadata',
          tags: ['Legal Tech', 'IA', 'Currículo', 'Competencias Digitales', 'México'],
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
    x: 0,
    y: -450,
    color: '#6366F1',
    icon: 'FileText',
    posterVariant: 'light',
    content: {
      title: 'Ficha Técnica del Artículo',
      breadcrumb: 'Ficha Técnica',
      sections: [
        {
          type: 'list',
          items: [
            'Revista: Panamericana de Pedagogía, n. 41 (2026)',
            'DOI: 10.21555/rpp.3557',
            'Método: Mixto — Evaluación comparativa de planes de estudio + Entrevistas cualitativas',
            'Análisis cualitativo: Método comparativo constante (Teoría Fundamentada)',
            'Rankings analizados: THE World University Rankings 2022 + QS Rankings 2021',
            'Participantes cualitativos: 7 profesionales jurídicos en activo',
          ],
        },
        {
          type: 'metadata',
          tags: ['Mixto', 'Curricular', '2026'],
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
    x: 280,
    y: -550,
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
            'Philippe Prince Tritto — Gestión del proyecto, conceptualización, software, supervisión',
            'Sara-Elvira Galbán-Lozano — Análisis formal, metodología, supervisión',
            'Mónica-del-Carmen Meza-Mejía — Conceptualización, investigación, supervisión',
          ],
        },
        {
          type: 'body',
          content: 'Todos los autores pertenecen a la Universidad Panamericana, México.',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — INFORMÁTICA JURÍDICA (izquierda arriba)
  // ═══════════════════════════════════════════════
  {
    id: 'legaltech',
    label: 'Legal Tech e IA',
    category: 'Legal Tech',
    level: 2,
    x: -550,
    y: -250,
    color: '#06B6D4',
    icon: 'Cpu',
    posterVariant: 'light',
    content: {
      title: 'Informática Jurídica y Legal Tech',
      breadcrumb: 'Legal Tech',
      sections: [
        {
          type: 'insight',
          content: 'La IA contribuirá con $15.7 billones de dólares al PIB global para 2030, un aumento del 26% en la economía mundial (Bezzazi et al., 2021). Los abogados como trabajadores del conocimiento están directamente expuestos a la automatización.',
        },
        {
          type: 'body',
          content: 'La informática jurídica incluye herramientas tecnológicas diseñadas para optimizar y automatizar el trabajo legal: gestión de casos, plataformas de contratación en línea, herramientas de investigación jurídica, y sistemas de arbitraje descentralizado mediante blockchain como Kleros (Wiegandt, 2022).',
        },
        {
          type: 'list',
          items: [
            'Generación de textos legales con IA generativa',
            'Análisis de bases de datos de jurisprudencia',
            'Identificación de patrones en decisiones judiciales',
            'El 75% de los empleos futuros estarán relacionados con TIC (Collett et al., 2022)',
          ],
        },
      ],
    }
  },

  // Nivel 3 — Brecha de género
  {
    id: 'legaltech-genero',
    label: 'Brecha de Género',
    category: 'Legal Tech',
    level: 3,
    parentId: 'legaltech',
    x: -800,
    y: -350,
    color: '#06B6D4',
    icon: 'Users',
    posterVariant: 'light',
    content: {
      title: 'Género y Competencias Tecnológicas',
      breadcrumb: 'Legal Tech > Género',
      sections: [
        {
          type: 'insight',
          content: 'Los hombres tienen un dominio mucho mayor de las TIC que las mujeres, lo cual es preocupante dado que las mujeres son mayoría en las facultades de derecho de México, EEUU y Francia.',
        },
        {
          type: 'body',
          content: 'La integración de competencias informáticas no es solo una oferta académica consistente con los ODS 4 (Educación de Calidad) y 5 (Igualdad de Género), sino una necesidad para la equidad de género en el campo jurídico (Collett et al., 2022).',
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — EVALUACIÓN CURRICULAR (derecha)
  // ═══════════════════════════════════════════════
  {
    id: 'curriculo',
    label: 'Evaluación Curricular',
    category: 'Currículo',
    level: 2,
    x: 550,
    y: -250,
    color: '#10B981',
    icon: 'BookOpen',
    posterVariant: 'light',
    content: {
      title: 'Análisis de 38 Facultades de Derecho',
      breadcrumb: 'Evaluación Curricular',
      sections: [
        {
          type: 'insight',
          content: 'Se analizaron 3 grupos: Top 10 mundial, Top 10 derecho civil, y Top 15 Latinoamérica. Solo el 10% incluye tecnología como materia obligatoria.',
        },
        {
          type: 'list',
          items: [
            '10% con materias obligatorias de tecnología',
            '58% ofrecen derecho digital como optativa',
            '37% incluyen informática jurídica como optativa',
            'Tradición anglosajona: mayor flexibilidad en oferta tecnológica',
            'Tradición civilista: más resistencia a la transformación',
          ],
        },
        {
          type: 'body',
          content: 'Cursos innovadores que trascienden fronteras tradicionales: "Statistical Inference in Law" (Stanford), "Computer Science for Lawyers" (Harvard), "Algorithms, Rights, and Responsibilities" (Harvard), "Legal Analytics" (Maastricht).',
        },
      ],
    }
  },

  // Nivel 3 — Programas de referencia
  {
    id: 'curriculo-programas',
    label: 'Programas de Referencia',
    category: 'Currículo',
    level: 3,
    parentId: 'curriculo',
    x: 810,
    y: -150,
    color: '#10B981',
    icon: 'Globe2',
    posterVariant: 'light',
    content: {
      title: 'Instituciones Líderes',
      breadcrumb: 'Currículo > Programas',
      sections: [
        {
          type: 'list',
          items: [
            'Harvard: Programa "Law, Science, and Technology" + IA y Derecho',
            'Columbia: Concentraciones en análisis de datos, seguridad y privacidad',
            'Stanford: Inferencia Estadística en Derecho',
            'Arizona State / UC Berkeley: Programas especializados en IA',
            'Vanderbilt: AI Law Lab',
            'U. del Rosario (Colombia): Especialización interdisciplinaria en ML y blockchain',
            'DigComp (UE): Marco de Competencia Digital para Ciudadanos (2024)',
          ],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — RESULTADOS CUALITATIVOS (izquierda abajo)
  // ═══════════════════════════════════════════════
  {
    id: 'resultados',
    label: 'Voces de los Juristas',
    category: 'Resultados',
    level: 2,
    x: -550,
    y: 250,
    color: '#F59E0B',
    icon: 'MessageSquare',
    posterVariant: 'dark',
    content: {
      title: 'Tres Categorías Emergentes',
      breadcrumb: 'Resultados Cualitativos',
      sections: [
        {
          type: 'insight',
          content: 'Las entrevistas a 7 juristas revelaron una evolución desde "la computadora como máquina de escribir" hasta "ChatGPT reduce mi carga laboral en un 80%".',
        },
        {
          type: 'list',
          items: [
            'FORMACIÓN UNIVERSITARIA: Uso en la universidad, adquisición de habilidades, formación',
            'PRÁCTICA PROFESIONAL: Necesidad, software, beneficios, resistencias',
            'PROSPECTIVA: Evolución, áreas de desarrollo tecnológico, informática jurídica en México',
          ],
        },
      ],
    }
  },

  // Nivel 3 — Testimonios clave
  {
    id: 'resultados-voces',
    label: 'Testimonios Clave',
    category: 'Resultados',
    level: 3,
    parentId: 'resultados',
    x: -800,
    y: 150,
    color: '#F59E0B',
    icon: 'MessageCircle',
    posterVariant: 'light',
    content: {
      title: 'La Tensión Tradición vs. Innovación',
      breadcrumb: 'Resultados > Testimonios',
      sections: [
        {
          type: 'quote',
          quote: 'Un profesor me reprobó un examen porque en lugar de tener los códigos en papel, los tenía en mi computadora. No solo no me enseñaron nada sobre el uso de tecnología para ejercer el derecho, sino que había una actitud hostil hacia ella.',
          attribution: 'Participante P1, Socio de firma, 17 años de experiencia',
        },
        {
          type: 'quote',
          quote: 'Uso ChatGPT y me ha ayudado a reducir mi carga de trabajo en un 80% al proporcionar rápidamente información sobre los casos que estoy trabajando.',
          attribution: 'Participante P5, CEO de firma tecnológica, 14 años de experiencia',
        },
        {
          type: 'quote',
          quote: 'Todavía conozco abogados que piden a la secretaria que les imprima porque no pueden leer un documento en la computadora; siguen haciéndolo a mano y corrigiendo a mano.',
          attribution: 'Participante P6, Litigante, 35 años de experiencia',
        },
      ],
    }
  },

  // Nivel 3 — Resistencias
  {
    id: 'resultados-resistencias',
    label: 'Resistencias',
    category: 'Resultados',
    level: 3,
    parentId: 'resultados',
    x: -800,
    y: 350,
    color: '#F59E0B',
    icon: 'Shield',
    posterVariant: 'light',
    content: {
      title: 'Barreras a la Adopción Tecnológica',
      breadcrumb: 'Resultados > Resistencias',
      sections: [
        {
          type: 'quote',
          quote: 'Básicamente, el desconocimiento de los no nativos digitales sobre la tecnología hace que no se sientan seguros usándola; les parece muy riesgoso.',
          attribution: 'Participante P1',
        },
        {
          type: 'list',
          items: [
            'Desconocimiento: Falta de familiaridad con herramientas digitales',
            'Inercia institucional: Paradigmas tradicionales arraigados',
            'Brecha generacional: Nativos vs. no nativos digitales',
            'Falta de competencias digitales del profesorado (Alnasib, 2023)',
            'Diferencia entre despachos "nacidos digitales" y despachos tradicionales',
          ],
        },
      ],
    }
  },

  // ═══════════════════════════════════════════════
  // NIVEL 2 — DISCUSIÓN Y PROSPECTIVA (derecha abajo)
  // ═══════════════════════════════════════════════
  {
    id: 'discusion',
    label: 'Discusión y Prospectiva',
    category: 'Discusión',
    level: 2,
    x: 550,
    y: 250,
    color: '#3B82F6',
    icon: 'Lightbulb',
    posterVariant: 'dark',
    content: {
      title: 'Hacia una Formación Jurídica Digital',
      breadcrumb: 'Discusión',
      sections: [
        {
          type: 'insight',
          content: 'La brecha entre la formación académica y las demandas de la práctica profesional contemporánea sugiere la necesidad de un replanteamiento fundamental de la educación jurídica.',
        },
        {
          type: 'body',
          content: 'La adaptación parece reactiva en lugar de proactiva, lo que podría resultar en una formación que siempre va por detrás de las necesidades del mercado laboral. Como señala el Profesor Gary Marchant: "en cinco años, ya no será posible ser un abogado exitoso sin usar IA" (Sloan, 2024).',
        },
        {
          type: 'list',
          items: [
            'Las materias optativas son insuficientes: la tecnología debe ser obligatoria',
            'El cuerpo docente necesita formación digital previa',
            'Riesgo de que la inercia institucional retrase la transformación',
            'México necesita mantener el ritmo con otros países en innovación legal',
            'Tres preguntas clave: ¿Qué aprender? ¿Cómo aprender? ¿Por qué aprender en digital?',
          ],
        },
        {
          type: 'metadata',
          tags: ['Transformación', 'IA', 'Prospectiva', 'Legal Tech'],
        },
      ],
    }
  },
];
