import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

export const nodes3214: NodeData[] = [
  {
    id: 'central', label: 'Innovación Agropecuaria', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#10B981', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'Innovación Pedagógica para Prácticas Sostenibles',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'Tras la intervención, la percepción de que las estrategias ayudan "mucho" a entender el desarrollo sostenible aumentó un 20% (de 20% a 40%). El 85% de padres calificó la innovación como "muy importante".' },
        { type: 'body', content: 'Estudio cuasiexperimental mixto con 60 estudiantes, 45 padres y 14 docentes del Bachillerato Técnico Agropecuario de la UEFSI en San Isidro, Manabí, Ecuador. Implementación de 12 semanas de estrategias innovadoras con pre y post-test.' },
        { type: 'metadata', tags: ['Agropecuario', 'Innovación Pedagógica', 'Sostenibilidad', 'Ecuador', 'Rural'] },
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
          'Revista: Panamericana de Pedagogía, n. 39 (2025)', 'DOI: 10.21555/rpp.3214',
          'Diseño: Cuasiexperimental, mixto, exploratorio-descriptivo',
          'Muestra: 60 estudiantes + 45 padres + 14 docentes',
          'Institución: U.E.F. San Isidro, Manabí, Ecuador',
          'Duración: 12 semanas de intervención',
          'Técnicas: Cuestionarios, entrevistas, fichas de observación',
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
          'Celso Gustavo Dueñas Basurto — Universidad Laica "Eloy Alfaro" de Manabí, Ecuador',
          'Eura María Zambrano Vera — Universidad Laica "Eloy Alfaro" de Manabí, Ecuador',
        ]},
      ],
    }
  },
  {
    id: 'estudiantes', label: 'Resultados Estudiantes', category: 'Resultados',
    level: 2, x: -550, y: -200, color: '#F59E0B', icon: 'BarChart3', posterVariant: 'dark',
    content: {
      title: 'Percepción Estudiantil Pre vs Post', breadcrumb: 'Estudiantes',
      sections: [
        { type: 'list', items: [
          'Comprensión sostenible "mucho": 20% → 40% (+20%)',
          'Motivación para prácticas sostenibles "mucho": 20% → 40% (+20%)',
          'Apps móviles agropecuarias: 20% → 40% (+20%)',
          'Redes sociales educativas: 40% → 50% (+10%)',
          'Importancia innovación "muy importante": 80% → 85% (+5%)',
        ]},
      ],
    }
  },
  {
    id: 'padres', label: 'Resultados Padres', category: 'Resultados',
    level: 2, x: 550, y: -200, color: '#3B82F6', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Percepción de Padres de Familia', breadcrumb: 'Padres',
      sections: [
        { type: 'list', items: [
          'Muy satisfechos con estrategias: 15% → 25% (+10%)',
          'Satisfechos: 35% → 40% (+5%)',
          'Aprendizaje experiencial más eficaz: 60% → 70% (+10%)',
          'Uso de tecnologías digitales: 30% → 40% (+10%)',
          'Trabajo colaborativo: 40% → 50% (+10%)',
          'Innovación "muy importante": 70% → 80% (+10%)',
        ]},
      ],
    }
  },
  {
    id: 'docentes', label: 'Docentes y Barreras', category: 'Barreras',
    level: 2, x: -400, y: 300, color: '#EF4444', icon: 'AlertTriangle', posterVariant: 'light',
    content: {
      title: 'Desafíos para los Docentes', breadcrumb: 'Barreras',
      sections: [
        { type: 'list', items: [
          '70% — Falta de recursos y tiempo',
          '60% — Falta de formación docente',
          '40% — Resistencia al cambio',
          '30% — Falta de apoyo institucional',
          'Necesidades: formación (85%), recursos (80%), tiempo (70%)',
          'Contexto rural: internet deficiente o inexistente',
        ]},
      ],
    }
  },
  {
    id: 'conclusiones', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: 400, y: 300, color: '#8B5CF6', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'Potencial Transformador de la Innovación', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'insight', content: 'La innovación pedagógica tiene gran potencial para mejorar la formación agropecuaria sostenible. Las metodologías que integran teoría, práctica, tecnología y colaboración preparan mejor a los estudiantes para los desafíos del sector.' },
        { type: 'list', items: [
          'Aprendizaje experiencial: estrategia más valorada (70%)',
          'Apps móviles superan plataformas online en contexto rural',
          'Necesidad de mayor inversión en infraestructura rural',
          'Consenso absoluto: innovación pedagógica es relevante',
        ]},
        { type: 'metadata', tags: ['Educación Rural', 'Desarrollo Sostenible', 'Formación Docente'] },
      ],
    }
  },
];
