import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

export const nodes3454: NodeData[] = [
  {
    id: 'central', label: 'Cultura de Paz y Violencia', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#10B981', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'Cultura de Paz en la Ciudad más Violenta del Mundo',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'El 74.9% de los estudiantes percibe la delincuencia en Colima como alta. Colima fue catalogada como la ciudad más violenta del mundo en 2022 con 181.94 homicidios por cada 100,000 habitantes.' },
        { type: 'body', content: 'Estudio cualitativo exploratorio con 200 estudiantes de la Universidad de Colima sobre percepción de prácticas institucionales de cultura de paz e inclusión en un contexto de violencia delictiva extrema.' },
        { type: 'metadata', tags: ['Cultura de Paz', 'Violencia', 'Colima', 'Inclusión', 'ODS 4'] },
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
          'Revista: Panamericana de Pedagogía, n. 40 (2025)', 'DOI: 10.21555/rpp.3454',
          'Enfoque: Cualitativo exploratorio', 'Instrumento: 11 preguntas múltiples + 7 abiertas',
          'Validación: Juicio de 3 expertos', 'Muestra: 200 estudiantes, 20 programas',
          'Análisis: SPSS + Text Analytics for Surveys',
        ]},
      ],
    }
  },
  {
    id: 'ficha-autoras', label: 'Autoras', category: 'Ficha Técnica',
    level: 3, parentId: 'ficha', x: 300, y: -550, color: '#6366F1', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación', breadcrumb: 'Ficha Técnica > Autoras',
      sections: [
        { type: 'list', items: [
          'Briseda-Noemí Ramos-Ramírez — Administración, análisis, supervisión',
          'Norma-Guadalupe Márquez-Cabellos — Análisis, software, supervisión',
        ]},
        { type: 'body', content: 'Ambas de la Universidad de Colima, México.' },
      ],
    }
  },
  {
    id: 'social', label: 'Contexto Social', category: 'Contexto Social',
    level: 2, x: -600, y: -150, color: '#EF4444', icon: 'AlertTriangle', posterVariant: 'dark',
    content: {
      title: 'Colima: De Ciudad Segura a la Más Violenta', breadcrumb: 'Contexto Social',
      sections: [
        { type: 'insight', content: 'Hace 20 años, Colima era uno de los estados con mejor calidad de vida. Hoy, el 85.8% considera inseguro vivir en sus alrededores.' },
        { type: 'list', items: [
          'México 2022: 32,223 homicidios (25/100K hab.)', '67.6% por arma de fuego',
          'Colima: 181.94 homicidios/100K (récord mundial)', 'Inseguridad nacional: 62.3%',
          '64.6% de estudiantes ha presenciado violencia',
        ]},
      ],
    }
  },
  {
    id: 'social-percepcion', label: 'Percepción Estudiantil', category: 'Contexto Social',
    level: 3, parentId: 'social', x: -870, y: -50, color: '#EF4444', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Cómo Ven los Estudiantes la Violencia', breadcrumb: 'Contexto Social > Percepción',
      sections: [
        { type: 'list', items: [
          '74.9% percibe delincuencia como alta', '45.3% culpa a gestión gubernamental',
          '58.7% solo se informa por noticias', '20.1% evita el tema',
        ]},
      ],
    }
  },
  {
    id: 'universidad', label: 'Contexto Universitario', category: 'Contexto Universitario',
    level: 2, x: 600, y: -150, color: '#3B82F6', icon: 'BookOpen', posterVariant: 'light',
    content: {
      title: 'La Universidad como Refugio', breadcrumb: 'Contexto Universitario',
      sections: [
        { type: 'insight', content: 'El 78.2% considera suficientes las acciones institucionales, pero el 92.7% siente que su hogar es el lugar más seguro.' },
        { type: 'list', items: [
          '43% se siente muy seguro en la universidad', '55.9% identifica cultura de paz en el currículo',
          '44.1% NO la identifica: brecha comunicacional', '92.7% cree necesario promoverla',
          'Feb 2023: suspensión de clases por violencia',
        ]},
      ],
    }
  },
  {
    id: 'universidad-gap', label: 'Brecha Discurso-Práctica', category: 'Contexto Universitario',
    level: 3, parentId: 'universidad', x: 870, y: -50, color: '#3B82F6', icon: 'Search', posterVariant: 'light',
    content: {
      title: 'La Brecha entre Discurso y Experiencia', breadcrumb: 'Contexto Universitario > Brecha',
      sections: [
        { type: 'body', content: 'Los estudiantes perciben una débil implementación práctica. Como señala Fraser (2008), la justicia social requiere tanto reconocimiento como redistribución.' },
        { type: 'list', items: [
          '54.7% dice NO hay actividades extracurriculares de paz',
          '70% pide más cursos y conferencias sobre el tema',
        ]},
      ],
    }
  },
  {
    id: 'estudiantes', label: 'Contribución Estudiantil', category: 'Comunidad Estudiantil',
    level: 2, x: 0, y: 400, color: '#F59E0B', icon: 'Heart', posterVariant: 'dark',
    content: {
      title: 'Estudiantes como Constructores de Paz', breadcrumb: 'Comunidad Estudiantil',
      sections: [
        { type: 'list', items: [
          'Ámbito escolar: respeto, tolerancia, compañerismo',
          'Ámbito familiar: comunicación, evitar conflictos',
          'Ámbito amistades: debatir sin alterar el orden',
        ]},
      ],
    }
  },
  {
    id: 'marco', label: 'Marco Teórico', category: 'Marco Teórico',
    level: 2, x: -450, y: 300, color: '#8B5CF6', icon: 'BookMarked', posterVariant: 'light',
    content: {
      title: 'Inclusión, Paz y Pedagogía Crítica', breadcrumb: 'Marco Teórico',
      sections: [
        { type: 'body', content: 'Tres ejes: inclusión educativa (Booth & Ainscow, 2015), cultura de paz (ONU, 1999) y pedagogía de Freire (1970). Cruz-Vadillo (2024): la cultura de paz comienza con la educación inclusiva.' },
        { type: 'quote', quote: 'La inclusión se mueve como dos placas tectónicas que, al encontrarse, hacen temblar la tierra.', attribution: 'Jiménez, 2014, p. 69' },
      ],
    }
  },
  {
    id: 'discusion', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: 450, y: 300, color: '#06B6D4', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'La Universidad como Agente Transformador', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'insight', content: 'Fortalecer una cultura institucional de inclusión y paz posiciona a la universidad como agente transformador de sociedades justas y resilientes ante la violencia.' },
        { type: 'list', items: [
          'Pasar de enfoques declarativos a praxis comprometida',
          'La voz estudiantil como insumo clave',
          'Cultura de paz no puede ser materia aislada (Freire)',
          'Integración curricular transversal necesaria',
        ]},
        { type: 'metadata', tags: ['Transformación Social', 'Resiliencia', 'Currículo Transversal'] },
      ],
    }
  },
];
