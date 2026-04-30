import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

/**
 * Mapa conceptual: Artículo 128 (pp. 128-141)
 * "Experiencias de discriminación basada en la apariencia física
 *  de estudiantes universitarios"
 * Autoras: Ramos-Solís, Sáenz-González, Burnes-Garza & Elizondo-García
 * Universidad de Monterrey / Tecnológico de Monterrey — RPP n.38 (2024)
 * DOI: https://doi.org/10.21555/rpp.vi38.3153
 */

export const nodes128: NodeData[] = [
  {
    id: 'central', label: 'Discriminación y Apariencia', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#EF4444', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'Discriminación por Apariencia Física en la Universidad',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'Aproximadamente un cuarto de los participantes en estudios reportan experiencias de discriminación por apariencia física (Boutwell et al., 2017). En universidades privadas mexicanas, el color de piel y el estatus socioeconómico se intersectan como detonantes de estigma.' },
        { type: 'body', content: 'Estudio cualitativo con teoría fundamentada. 12 entrevistas a estudiantes de una universidad privada del área metropolitana de Monterrey que experimentaron discriminación por apariencia física. Se identificaron 5 categorías emergentes: tipos de discriminación, efectos socioemocionales, efectos académicos, estrategias de afrontamiento y apoyo institucional.' },
        { type: 'metadata', tags: ['Discriminación', 'Apariencia Física', 'Monterrey', 'Teoría Fundamentada', 'Inclusión'] },
      ],
    }
  },
  {
    id: 'ficha', label: 'Ficha Técnica', category: 'Ficha Técnica',
    level: 2, x: 0, y: -450, color: '#6366F1', icon: 'FileText', posterVariant: 'light',
    content: {
      title: 'Ficha Técnica', breadcrumb: 'Ficha Técnica',
      sections: [
        { type: 'list', items: [
          'Revista: Panamericana de Pedagogía, n. 38 (2024), pp. 128-141',
          'DOI: 10.21555/rpp.vi38.3153',
          'Enfoque: Cualitativo — Teoría Fundamentada (Strauss & Corbin, 2016)',
          'Instrumento: Entrevista semiestructurada',
          'Muestra: 12 participantes (11 estudiantes + 1 egresado)',
          'Muestreo: Bola de nieve',
          'Contexto: Universidad privada, Monterrey, México',
        ]},
      ],
    }
  },
  {
    id: 'ficha-autores', label: 'Autores', category: 'Ficha Técnica',
    level: 3, parentId: 'ficha', x: 350, y: -550, color: '#6366F1', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación', breadcrumb: 'Ficha Técnica > Autores',
      sections: [
        { type: 'list', items: [
          'Cecilia Ramos-Solís — Universidad de Monterrey',
          'Marie Josée Sáenz-González — Universidad de Monterrey',
          'Fernanda Burnes-Garza — Universidad de Monterrey',
          'Josemaría Elizondo-García — Tecnológico de Monterrey',
        ]},
      ],
    }
  },
  {
    id: 'tipos', label: 'Tipos de Discriminación', category: 'Hallazgos',
    level: 2, x: -550, y: -200, color: '#F59E0B', icon: 'AlertTriangle', posterVariant: 'dark',
    content: {
      title: 'Formas de Discriminación Identificadas', breadcrumb: 'Tipos',
      sections: [
        { type: 'list', items: [
          'Color de piel — estigma de estatus social',
          'Peso corporal — comentarios ofensivos',
          'Estatura — burlas y exclusión grupal',
          'Vestimenta — asociación a clase socioeconómica',
          'Tatuajes — estigma social, percibidos como marca de "clase baja"',
        ]},
        { type: 'quote', quote: 'Ella decidió irse [de la universidad] porque los comentarios llegaron a tal grado que no podía hacer equipo con nadie. Había comentarios… refiriéndose a ella como la sirvienta.', attribution: 'Ex-alumno participante' },
      ],
    }
  },
  {
    id: 'socio', label: 'Efectos Socioemocionales', category: 'Hallazgos',
    level: 2, x: 550, y: -200, color: '#EC4899', icon: 'Heart', posterVariant: 'light',
    content: {
      title: 'Impacto en el Bienestar Emocional', breadcrumb: 'Efectos Socioemocionales',
      sections: [
        { type: 'list', items: [
          'Inseguridad y baja autoestima persistente',
          'Sentimiento constante de ser juzgado/a',
          'Estrés y ansiedad elevados',
          'Reducción de socialización y aislamiento',
          'En casos extremos: abandono universitario',
        ]},
        { type: 'quote', quote: 'Sentirse incómodo crea inseguridades y hace difícil que encajes; muchas veces te sientes inseguro de cómo te ves.', attribution: 'Estudiante 5' },
      ],
    }
  },
  {
    id: 'academico', label: 'Efectos Académicos', category: 'Hallazgos',
    level: 2, x: -450, y: 300, color: '#3B82F6', icon: 'BookOpen', posterVariant: 'light',
    content: {
      title: 'Consecuencias en el Rendimiento', breadcrumb: 'Efectos Académicos',
      sections: [
        { type: 'list', items: [
          'Desmotivación progresiva desde primeros semestres',
          'Falta de concentración — energía desviada a la apariencia',
          'Menor participación en clase y actividades extracurriculares',
          'Renuncia a cargos estudiantiles por miedo a nueva discriminación',
        ]},
        { type: 'quote', quote: 'Me estoy enfocando más en mi apariencia de lo que debería, en lugar de enfocarme en mis estudios.', attribution: 'Estudiante 5' },
      ],
    }
  },
  {
    id: 'afrontamiento', label: 'Estrategias de Afrontamiento', category: 'Hallazgos',
    level: 2, x: 0, y: 400, color: '#10B981', icon: 'Shield', posterVariant: 'light',
    content: {
      title: 'Recursos Limitados de los Estudiantes', breadcrumb: 'Afrontamiento',
      sections: [
        { type: 'insight', content: 'La mayoría de estudiantes NO tiene estrategias de afrontamiento definidas. Los pocos que las tienen recurren a ignorar comentarios o enfocarse en metas propias.' },
        { type: 'quote', quote: 'Enfocarme en mis metas, estar segura de ellas. Cada quien tiene su opinión, y pues, tú sigues tu camino.', attribution: 'Estudiante 6' },
      ],
    }
  },
  {
    id: 'institucional', label: 'Apoyo Institucional', category: 'Hallazgos',
    level: 2, x: 450, y: 300, color: '#06B6D4', icon: 'Building', posterVariant: 'dark',
    content: {
      title: 'La Brecha entre Estudiantes y la Institución', breadcrumb: 'Apoyo Institucional',
      sections: [
        { type: 'insight', content: 'Los estudiantes no conocen los servicios de apoyo o no se sienten seguros para acudir. Cuando buscan ayuda, la respuesta se limita a "hablar con los agresores" sin derivar a personal especializado.' },
        { type: 'quote', quote: 'La verdad es que no conozco ninguno de estos grupos que pudieran ayudarme. Esperaría que mi director de carrera me orientara, pero la verdad no sé.', attribution: 'Estudiante 8' },
      ],
    }
  },
  {
    id: 'discusion', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: -550, y: 100, color: '#8B5CF6', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'Hacia Universidades Inclusivas', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'list', items: [
          'La apariencia expresa etnicidad, religión y preferencias — multidimensional',
          'Estigma social (Goffman, 2006) opera en entornos de alto NSE',
          'Programas de sensibilización y políticas antidiscriminación necesarios',
          'Capacitación docente en detección y derivación a personal especializado',
          'Promoción activa de servicios de apoyo psicológico institucional',
        ]},
        { type: 'metadata', tags: ['Inclusión', 'Políticas Institucionales', 'Estigma', 'Bienestar'] },
      ],
    }
  },
];
