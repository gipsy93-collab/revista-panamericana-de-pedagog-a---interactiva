import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

export const nodes3378: NodeData[] = [
  {
    id: 'central', label: 'Paisajes de Aprendizaje', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#10B981', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'Paisajes de Aprendizaje en Entornos Virtuales',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'El 100% de los estudiantes nunca había usado paisajes de aprendizaje. Tras la implementación, el 85.7% calificó los recursos como "extremadamente útiles" y el 71.4% reportó alta motivación.' },
        { type: 'body', content: 'Investigación exploratoria cualitativa con 9 estudiantes de Maestría en Educación (énfasis inglés) de la Universidad Nacional de Costa Rica. Se implementaron paisajes de aprendizaje durante 12 semanas en el módulo de Praxis Pedagógica.' },
        { type: 'metadata', tags: ['Paisajes de Aprendizaje', 'EVA', 'Posgrado', 'Costa Rica', 'Genially'] },
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
          'Revista: Panamericana de Pedagogía, n. 40 (2025)', 'DOI: 10.21555/rpp.3378',
          'Enfoque: Exploratorio, cualitativo', 'Muestra: 9 estudiantes de Maestría',
          'Duración: 12 semanas (3 sincrónicas + 9 asincrónicas)',
          'Herramienta diseño: Genially', 'Plataforma colaborativa: Padlet',
          'Instrumentos: Cuestionarios pre/post + Estudio de caso instrumental',
        ]},
      ],
    }
  },
  {
    id: 'ficha-autoras', label: 'Autoras', category: 'Ficha Técnica',
    level: 3, parentId: 'ficha', x: 790, y: -480, color: '#6366F1', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación', breadcrumb: 'Ficha Técnica > Autoras',
      sections: [
        { type: 'list', items: [
          'Silvia Saborío-Taylor — Universidad Nacional de Costa Rica',
          'Alejandra Álvarez-Chaves — Universidad Nacional de Costa Rica',
          'Stephanie Valdivia-Durán — Universidad Nacional de Costa Rica',
        ]},
      ],
    }
  },
  {
    id: 'concepto', label: '¿Qué es un Paisaje?', category: 'Concepto',
    level: 2, x: -550, y: -300, color: '#8B5CF6', icon: 'BookOpen', posterVariant: 'light',
    content: {
      title: 'Paisajes de Aprendizaje como Estrategia', breadcrumb: 'Concepto',
      sections: [
        { type: 'body', content: 'Los paisajes de aprendizaje son representaciones visuales de una asignatura que incluyen enlaces a recursos, mini-paisajes y actividades. Promueven autonomía, motivación e imaginación, atendiendo la diversidad y el ritmo individual (Mosquera-Gende, 2019).' },
        { type: 'list', items: [
          'Combinan múltiples inteligencias y estilos de aprendizaje',
          'Priorizan habilidades de orden superior: crear, analizar, evaluar',
          'Diseño basado en Taxonomía de Bloom + inteligencias múltiples',
          'Herramienta principal: Genially (interactividad + multimedia)',
        ]},
      ],
    }
  },
  {
    id: 'pre', label: 'Antes (Pre-Test)', category: 'Resultados',
    level: 2, x: -550, y: 150, color: '#EF4444', icon: 'BarChart3', posterVariant: 'light',
    content: {
      title: 'Diagnóstico Inicial: Participación Limitada', breadcrumb: 'Pre-Test',
      sections: [
        { type: 'list', items: [
          '33% participaba activamente en foros',
          '33% interactuaba con herramientas colaborativas',
          '50% con compromiso moderado en tareas',
          '66.7% con motivación moderada (dependía del tema)',
          '50% satisfecho con su participación',
          '100% NUNCA había usado paisajes de aprendizaje',
        ]},
      ],
    }
  },
  {
    id: 'post', label: 'Después (Post-Test)', category: 'Resultados',
    level: 2, x: 550, y: 150, color: '#10B981', icon: 'TrendingUp', posterVariant: 'dark',
    content: {
      title: 'Transformación: Participación Activa', breadcrumb: 'Post-Test',
      sections: [
        { type: 'list', items: [
          '57.1% participación activa en foros (↑24%)',
          '57.1% interacción con herramientas colaborativas (↑24%)',
          '85.7% calificó recursos como "extremadamente útiles"',
          '71.4% motivación alta para actividades interactivas',
          '71.4% calificó diversidad de recursos como "excelente"',
          '42.9% indicó que el paisaje facilitó "en gran medida" su participación',
        ]},
      ],
    }
  },
  {
    id: 'post-inclusion', label: 'Caso de Inclusión', category: 'Resultados',
    level: 3, parentId: 'post', x: 800, y: 250, color: '#10B981', icon: 'Heart', posterVariant: 'light',
    content: {
      title: 'Impacto en Diversidad Funcional', breadcrumb: 'Post-Test > Inclusión',
      sections: [
        { type: 'insight', content: 'Un estudiante con trastorno de déficit de atención expresó que el paisaje de aprendizaje le ayudó a mantenerse organizado y al día con sus tareas — evidencia del potencial inclusivo de la estrategia.' },
      ],
    }
  },
  {
    id: 'conclusiones', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: 0, y: 450, color: '#F59E0B', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'Transformar Dinámicas Educativas', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'insight', content: 'Los paisajes de aprendizaje representan una herramienta eficaz para transformar las dinámicas educativas en entornos virtuales de posgrado.' },
        { type: 'list', items: [
          'Mejoran participación activa, motivación e interés',
          'Facilitan autorregulación del aprendizaje',
          'Riesgo de sobrecarga cognitiva (UNESCO, 2024)',
          'Necesidad de optimizar cantidad de herramientas digitales',
          'Futuro: explorar en otras disciplinas y niveles educativos',
        ]},
        { type: 'metadata', tags: ['Autorregulación', 'Inclusión', 'Innovación Digital'] },
      ],
    }
  },
];
