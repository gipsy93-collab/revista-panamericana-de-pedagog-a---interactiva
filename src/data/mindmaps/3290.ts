import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

export const nodes3290: NodeData[] = [
  {
    id: 'central', label: 'Aprendizaje Híbrido', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#3B82F6', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'Desafíos del Aprendizaje Híbrido en Colombia',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'El 47% de los docentes señala que el mayor desafío es lograr una interacción valiosa entre estudiantes presenciales y virtuales simultáneamente.' },
        { type: 'body', content: 'Estudio cualitativo fenomenológico con 23 profesores de una universidad del suroccidente colombiano, que desde 2021 adoptó la multimodalidad como estrategia académica. Se analizan los desafíos pedagógicos y tecnológicos del aprendizaje híbrido.' },
        { type: 'metadata', tags: ['Aprendizaje Híbrido', 'Colombia', 'Multimodalidad', 'Fenomenología'] },
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
          'Revista: Panamericana de Pedagogía, n. 39 (2025)', 'DOI: 10.21555/rpp.3290',
          'Enfoque: Cualitativo fenomenológico',
          'Instrumentos: Cuestionario (4 preguntas abiertas) + Grupos focales',
          'Muestra: 23 profesores de 5 facultades', 'Software: Atlas.ti 23 (4 categorías, 22 códigos)',
          'Recolección: Marzo 15-23, 2023',
        ]},
      ],
    }
  },
  {
    id: 'ficha-autores', label: 'Autores', category: 'Ficha Técnica',
    level: 3, parentId: 'ficha', x: 300, y: -550, color: '#6366F1', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación', breadcrumb: 'Ficha Técnica > Autores',
      sections: [
        { type: 'list', items: [
          'Claudia-Alexandra Roldán-Morales — Universidad Autónoma de Occidente, Colombia',
          'Andrés-Fernando Torres-Tovar — Universidad Autónoma de Occidente, Colombia',
        ]},
      ],
    }
  },
  {
    id: 'pedagogico', label: 'Desafíos Pedagógicos', category: 'Desafíos',
    level: 2, x: -550, y: -200, color: '#EF4444', icon: 'AlertTriangle', posterVariant: 'dark',
    content: {
      title: '4 Desafíos Pedagógicos Críticos', breadcrumb: 'Desafíos Pedagógicos',
      sections: [
        { type: 'list', items: [
          '47% — Necesidad de mayor interacción presencial-virtual',
          '26% — Baja participación y falta de motivación',
          '21% — Implementar estrategias pedagógicas para ambos grupos',
          '6% — Retroalimentación integral insuficiente',
        ]},
        { type: 'quote', quote: 'El mayor reto ha sido tratar de atender a los estudiantes presenciales y en línea simultáneamente.', attribution: 'Participante P16' },
      ],
    }
  },
  {
    id: 'pedagogico-interaccion', label: 'Brecha de Interacción', category: 'Desafíos',
    level: 3, parentId: 'pedagogico', x: -820, y: -100, color: '#EF4444', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Integrar Dos Mundos en Una Aula', breadcrumb: 'Desafíos > Interacción',
      sections: [
        { type: 'quote', quote: 'Un reto fue poder vincular a los estudiantes remotos con los presenciales, especialmente cuando se realizan actividades colaborativas.', attribution: 'Participante P20' },
        { type: 'body', content: 'Los docentes enfatizan la necesidad de ofrecer igualdad de oportunidades a todos los estudiantes, independientemente de su entorno de participación (virtual o presencial).' },
      ],
    }
  },
  {
    id: 'tecnologico', label: 'Desafíos Tecnológicos', category: 'Tecnología',
    level: 2, x: 550, y: -200, color: '#F59E0B', icon: 'Laptop', posterVariant: 'light',
    content: {
      title: 'Infraestructura y Herramientas', breadcrumb: 'Desafíos Tecnológicos',
      sections: [
        { type: 'list', items: [
          '27% NO experimentó problemas tecnológicos',
          '18% — Dificultades en el uso de la tecnología',
          '18% — Problemas con el micrófono',
          '9% — Problemas de sincronización',
          '6% — Diversidad de roles y funciones en plataformas',
          '6% — Acceso lento a plataformas',
        ]},
      ],
    }
  },
  {
    id: 'conclusiones', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: -400, y: 350, color: '#10B981', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'Hacia un Aprendizaje Híbrido de Calidad', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'insight', content: 'Es necesario diseñar entornos interactivos y estimulantes que promuevan la construcción colectiva de conocimiento entre estudiantes presenciales y virtuales.' },
        { type: 'list', items: [
          'Formación docente integral: pedagógica y tecnológica',
          'Optimización de herramientas y soporte técnico continuo',
          'Retroalimentación formativa para mejorar persistencia académica',
          'Evaluación y adaptación institucional constante',
        ]},
        { type: 'metadata', tags: ['Formación Docente', 'Interacción', 'Calidad Educativa'] },
      ],
    }
  },
  {
    id: 'marco', label: 'Marco Teórico', category: 'Marco Teórico',
    level: 2, x: 400, y: 350, color: '#8B5CF6', icon: 'BookOpen', posterVariant: 'light',
    content: {
      title: 'Fundamentos del Aprendizaje Híbrido', breadcrumb: 'Marco Teórico',
      sections: [
        { type: 'body', content: 'El aprendizaje híbrido combina condiciones virtuales y físicas (Bonk & Graham, 2006). Integra recursos virtuales con interacciones presenciales para optimizar procesos educativos (Balladares Burgos, 2018). Se ha demostrado que mejora la motivación, autonomía y retención del conocimiento.' },
        { type: 'list', items: [
          '3 definiciones populares: modalidades, métodos, virtual+presencial',
          'Flexibilidad + accesibilidad + experiencias prácticas',
          'Requiere cambio en el rol docente (Freitas-Mandarino, 2023)',
        ]},
      ],
    }
  },
];
