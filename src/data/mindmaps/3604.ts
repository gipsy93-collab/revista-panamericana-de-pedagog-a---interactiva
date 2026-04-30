import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

export const nodes3604: NodeData[] = [
  {
    id: 'central', label: 'Cine y Enseñanza Literaria', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#EC4899', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'El Cine como Mediador Pedagógico en la Literatura',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'Solo el 21% de los estudiantes utilizaba material audiovisual antes de la intervención. El cine, más que apoyo motivacional, se revela como un lenguaje pedagógico que articula emoción, pensamiento y cultura.' },
        { type: 'body', content: 'Investigación-acción educativa en el Colegio de Bachilleres de Quintana Roo (CBQ) durante la pandemia (octubre 2020-enero 2021), explorando cómo el cine puede favorecer el aprendizaje significativo y crítico de la literatura en condiciones de desigualdad tecnológica.' },
        { type: 'metadata', tags: ['Cine Educativo', 'Literatura', 'Pedagogía Crítica', 'Quintana Roo'] },
      ],
    }
  },
  {
    id: 'ficha', label: 'Ficha Técnica', category: 'Ficha Técnica',
    level: 2, x: 520, y: -380, color: '#6366F1', icon: 'FileText', posterVariant: 'light',
    content: {
      title: 'Ficha Técnica', breadcrumb: 'Ficha Técnica',
      sections: [
        { type: 'list', items: [
          'Revista: Panamericana de Pedagogía, n. 41 (2026)', 'DOI: 10.21555/rpp.3604',
          'Enfoque: Cualitativo, investigación-acción educativa',
          'Instrumentos: Observación participante, entrevistas, bitácora, grupo focal',
          'Participantes: 30 estudiantes de Literatura II (4to semestre)',
          'Periodo: Octubre 2020 - Enero 2021 (pandemia COVID-19)',
          'Herramientas: Google Meet, Google Classroom, WhatsApp',
        ]},
      ],
    }
  },
  {
    id: 'ficha-autores', label: 'Autores', category: 'Ficha Técnica',
    level: 3, parentId: 'ficha', x: 790, y: -480, color: '#6366F1', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación', breadcrumb: 'Ficha Técnica > Autores',
      sections: [
        { type: 'list', items: [
          'María-Teresa López-Martínez — Universidad del Mar, México',
          'Marco-Antonio Muñoz-Madrid — Universidad Veracruzana, México',
        ]},
      ],
    }
  },
  {
    id: 'marco', label: '3 Ejes Teóricos', category: 'Marco Teórico',
    level: 2, x: -520, y: -380, color: '#8B5CF6', icon: 'BookOpen', posterVariant: 'light',
    content: {
      title: 'Tres Marcos Convergentes', breadcrumb: 'Marco Teórico',
      sections: [
        { type: 'list', items: [
          '1. Aprendizaje significativo (Ausubel et al., 2000): el cine como "ancla cognitiva"',
          '2. Pedagogía crítica (Freire, 2005; Giroux, 2015): diálogo y emancipación',
          '3. Alfabetización audiovisual (Ferrés, 1994; Novillo-López, 2020): leer imágenes',
        ]},
        { type: 'quote', quote: 'Educar en el siglo XXI implica enseñar a ver, reconociendo el poder formativo de las imágenes.', attribution: 'Ferrés, 1994' },
      ],
    }
  },
  {
    id: 'marco-freire', label: 'Pedagogía Freiriana', category: 'Marco Teórico',
    level: 3, parentId: 'marco', x: -790, y: -280, color: '#8B5CF6', icon: 'Brain', posterVariant: 'light',
    content: {
      title: 'Freire y el Cine como Mediador del Mundo', breadcrumb: 'Marco Teórico > Freire',
      sections: [
        { type: 'quote', quote: 'Nadie educa a nadie, nadie se educa a sí mismo. Los hombres se educan entre sí, mediatizados por el mundo.', attribution: 'Freire, 2005, p. 79' },
        { type: 'body', content: 'En esta experiencia, el cine actuó precisamente como ese mediador del mundo: un espacio simbólico donde los estudiantes pudieron reflexionar sobre su propia realidad a través del arte.' },
      ],
    }
  },
  {
    id: 'metodologia', label: '4 Fases de la I-A', category: 'Metodología',
    level: 2, x: -600, y: 100, color: '#10B981', icon: 'FlaskConical', posterVariant: 'light',
    content: {
      title: 'Investigación-Acción: Diagnóstico → Reflexión', breadcrumb: 'Metodología',
      sections: [
        { type: 'list', items: [
          'DIAGNÓSTICO: Solo 21% usaba material audiovisual',
          'PLANIFICACIÓN: Secuencia didáctica antes-durante-después del filme',
          'ACCIÓN: Proyecciones de Romeo+Juliet, Crónica de una muerte anunciada, Rebelión en la granja',
          'REFLEXIÓN: Grupo focal enero 2021, bitácora docente',
        ]},
        { type: 'body', content: 'La estrategia articuló tres componentes: contextualización y activación de conocimientos previos, proyección con pausas analíticas, y producción reflexiva (reseñas comparativas, debates, podcasts).' },
      ],
    }
  },
  {
    id: 'resultados', label: 'Transformación Estudiantil', category: 'Resultados',
    level: 2, x: 600, y: 100, color: '#F59E0B', icon: 'Zap', posterVariant: 'dark',
    content: {
      title: 'De Espectadores Pasivos a Lectores Críticos', breadcrumb: 'Resultados',
      sections: [
        { type: 'insight', content: 'Los estudiantes dejaron de simplemente ver películas: aprendieron a leerlas. Reconocieron en el cine un lenguaje tan estructurado y simbólico como la literatura.' },
        { type: 'quote', quote: 'Aprendí a reconocer algunos detalles del cine y veré las películas desde otras perspectivas.', attribution: 'Estudiante participante' },
        { type: 'list', items: [
          'Desarrollo de interpretación simbólica',
          'Fortalecimiento del pensamiento reflexivo',
          'Participación colaborativa incrementada',
          'Tres dimensiones: afectiva (empatía), cognitiva (estructuras narrativas), social (cooperación)',
        ]},
      ],
    }
  },
  {
    id: 'resultados-voces', label: 'Voces Estudiantiles', category: 'Resultados',
    level: 3, parentId: 'resultados', x: 850, y: 0, color: '#F59E0B', icon: 'MessageCircle', posterVariant: 'light',
    content: {
      title: 'Testimonios de Transformación', breadcrumb: 'Resultados > Voces',
      sections: [
        { type: 'quote', quote: 'Es una forma de aprendizaje porque no es solo un medio auditivo sino también visual. Se complementan y pueden crear una atmósfera que nos intriga.', attribution: 'Estudiante participante' },
        { type: 'quote', quote: 'Valoré más el arte, el cine, la literatura y la música.', attribution: 'Estudiante en grupo focal' },
      ],
    }
  },
  {
    id: 'discusion', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: 0, y: 450, color: '#3B82F6', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'Educar con Arte es Educar a Pensar', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'insight', content: 'La innovación pedagógica no depende de recursos abundantes sino de la disposición docente a experimentar y reflexionar sobre su práctica.' },
        { type: 'list', items: [
          'Necesidad de formación docente en alfabetización audiovisual',
          'Importancia de espacios de intercambio interdisciplinario',
          'La creatividad pedagógica es investigación legítima',
          'El cine democratiza la experiencia estética en contextos desiguales',
          'Propuesta: no modelo replicable sino perspectiva pedagógica situada',
        ]},
        { type: 'metadata', tags: ['Innovación', 'Formación Docente', 'Equidad', 'Arte'] },
      ],
    }
  },
];
