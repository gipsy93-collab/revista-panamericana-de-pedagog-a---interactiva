import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

export const nodes3198: NodeData[] = [
  {
    id: 'central', label: 'TIC y Envejecimiento Activo', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#8B5CF6', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'Aprendizaje Tecnológico para un Envejecimiento Activo',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'El aprendizaje de TIC tiene un impacto significativo en el envejecimiento activo de los adultos mayores, facilitando su integración en la sociedad digital y estimulando la reserva cognitiva.' },
        { type: 'body', content: 'Estudio cualitativo con diseño de teoría fundamentada. 27 entrevistas semidirigidas con adultos mayores (60-95 años) participantes de talleres TIC en AMBA, Buenos Aires. Análisis con método comparativo constante (Atlas.ti).' },
        { type: 'metadata', tags: ['TIC', 'Envejecimiento Activo', 'Adultos Mayores', 'Buenos Aires', 'Educomunicación'] },
      ],
    }
  },
  {
    id: 'ficha', label: 'Ficha Técnica', category: 'Ficha Técnica',
    level: 2, x: 550, y: -380, color: '#6366F1', icon: 'FileText', posterVariant: 'light',
    content: {
      title: 'Ficha Técnica', breadcrumb: 'Ficha Técnica',
      sections: [
        { type: 'list', items: [
          'Revista: Panamericana de Pedagogía, n. 39 (2025)', 'DOI: 10.21555/rpp.3198',
          'Enfoque: Cualitativo — Teoría Fundamentada (Corbin & Strauss, 2022)',
          'Instrumento: 27 entrevistas semidirigidas abiertas',
          'Muestra: 27 adultos mayores (60-95 años)',
          'Ubicaciones: Lugano, Barracas (CABA) y zona sur de Buenos Aires',
          'Software: Atlas.ti (codificación abierta, axial, selectiva)',
        ]},
      ],
    }
  },
  {
    id: 'ficha-autoras', label: 'Autoras', category: 'Ficha Técnica',
    level: 3, parentId: 'ficha', x: 820, y: -480, color: '#6366F1', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación', breadcrumb: 'Ficha Técnica > Autoras',
      sections: [
        { type: 'list', items: [
          'Dides-Iliana Hernández-Silvera — Universidad Católica Argentina',
          'Alejandra-Noelia Pécora — Universidad Católica Argentina',
          'Florencia-Julia Núñez — Universidad Católica Argentina',
        ]},
      ],
    }
  },
  {
    id: 'tric', label: 'TRIC y Educomunicación', category: 'Marco Teórico',
    level: 2, x: -550, y: -300, color: '#EC4899', icon: 'BookOpen', posterVariant: 'light',
    content: {
      title: 'De TIC a TRIC: El Factor Relacional', breadcrumb: 'Marco Teórico',
      sections: [
        { type: 'body', content: 'Las TRIC (Tecnologías de la Relación, Información y Comunicación) amplían el concepto de TIC al centrarse en cómo la tecnología facilita la conexión emocional, las relaciones interpersonales y la inclusión social (Gabelas-Barroso & Marta-Lazo, 2020).' },
        { type: 'list', items: [
          'Educomunicación: integra estrategias educativas con medios',
          'Psicopedagogía: procesos cognitivos, emocionales y sociales',
          'Reserva cognitiva: la plasticidad cerebral se mantiene toda la vida',
          'Aprendizaje a lo largo de la vida: formal, no formal e informal',
        ]},
      ],
    }
  },
  {
    id: 'hallazgos', label: '21 Hallazgos Clave', category: 'Resultados',
    level: 2, x: -550, y: 150, color: '#F59E0B', icon: 'BarChart3', posterVariant: 'dark',
    content: {
      title: 'Categorías Emergentes del Análisis', breadcrumb: 'Resultados',
      sections: [
        { type: 'list', items: [
          '1. Participación en actividades (memoria, danza, teatro)',
          '2. Superación de desafíos tecnológicos iniciales',
          '3. Apoyo social y familiar como andamiaje clave',
          '4. Expansión de comunicación (WhatsApp, email)',
          '5. Celular: herramienta fundamental de conexión familiar',
          '6. Aprendizaje autodidacta por necesidad o interés',
          '7. Utilidad para trámites bancarios y gubernamentales',
          '8. Preocupaciones de seguridad y privacidad',
        ]},
      ],
    }
  },
  {
    id: 'hallazgos-emocional', label: 'Dimensión Emocional', category: 'Resultados',
    level: 3, parentId: 'hallazgos', x: -820, y: 250, color: '#F59E0B', icon: 'Heart', posterVariant: 'light',
    content: {
      title: 'Emociones y Autonomía Digital', breadcrumb: 'Resultados > Emociones',
      sections: [
        { type: 'list', items: [
          'Autonomía e independencia: deseo de no depender de hijos/nietos',
          'Soledad los fines de semana: TIC como conexión',
          'Frustración inicial que se transforma en satisfacción',
          'Salud mental: motivación, detachment, depresión mencionados',
          'Tecnología no como dependencia sino como actitud independiente',
        ]},
      ],
    }
  },
  {
    id: 'discusion', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: 400, y: 350, color: '#10B981', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'Inclusión Digital para una Vida Plena', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'insight', content: 'Las TIC no solo mejoran la calidad de vida de los adultos mayores — estimulan la reserva cognitiva y retrasan síntomas de deterioro, al tiempo que fortalecen vínculos sociales y familiares.' },
        { type: 'list', items: [
          'TIC facilitan autonomía en comunicación y trámites',
          'Brecha digital persiste: género, nivel socioeconómico, educación',
          'Apoyo psicopedagógico personalizado es esencial',
          'Narrativa transmedia puede enriquecer el proceso de aprendizaje',
          'Necesidad de políticas públicas de inclusión digital para mayores',
        ]},
        { type: 'metadata', tags: ['Inclusión Digital', 'Reserva Cognitiva', 'Políticas Públicas'] },
      ],
    }
  },
];
