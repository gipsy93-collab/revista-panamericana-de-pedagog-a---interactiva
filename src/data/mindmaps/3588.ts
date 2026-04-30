import type { NodeData } from '../../components/MapasConceptuales/MindMapEngine/types';

export const nodes3588: NodeData[] = [
  {
    id: 'central', label: 'Deserción Universitaria', category: 'Núcleo Central',
    level: 1, x: 0, y: 0, color: '#F59E0B', icon: 'Target', posterVariant: 'dark',
    content: {
      title: 'Medir la Intención de Deserción: Un Estudio Piloto',
      breadcrumb: 'Tesis Central',
      sections: [
        { type: 'insight', content: 'La deserción universitaria alcanza hasta el 24% internacionalmente. Este estudio traduce y valida al español la Escala de Intención de Deserción de Bäulke et al. (2022), con una consistencia interna de ω = .959.' },
        { type: 'body', content: 'Estudio piloto instrumental, transversal y correlacional con 71 estudiantes de Yucatán, México. El instrumento diferencia entre intención de desertar e intención de cambiar de carrera — distinción clave ausente en la mayoría de las escalas existentes.' },
        { type: 'metadata', tags: ['Deserción', 'Psicometría', 'Yucatán', 'Bäulke', 'Validación'] },
      ],
    }
  },
  {
    id: 'ficha', label: 'Ficha Técnica', category: 'Ficha Técnica',
    level: 2, x: 500, y: -380, color: '#6366F1', icon: 'FileText', posterVariant: 'light',
    content: {
      title: 'Ficha Técnica', breadcrumb: 'Ficha Técnica',
      sections: [
        { type: 'list', items: [
          'Revista: Panamericana de Pedagogía, n. 41 (2026)', 'DOI: 10.21555/rpp.3588',
          'Diseño: Instrumental, transversal, correlacional', 'Muestra: 71 estudiantes (87% mujeres)',
          'Edad media: 21.6 años (rango 18-50)', 'Instituciones: 2 privadas + 1 pública en Yucatán',
          'Software: Jamovi v2.7.6.0', 'Financiamiento: Beca SECIHTI No. 852241',
        ]},
      ],
    }
  },
  {
    id: 'ficha-autores', label: 'Autores', category: 'Ficha Técnica',
    level: 3, parentId: 'ficha', x: 770, y: -480, color: '#6366F1', icon: 'Users', posterVariant: 'light',
    content: {
      title: 'Equipo de Investigación', breadcrumb: 'Ficha Técnica > Autores',
      sections: [
        { type: 'list', items: [
          'Aarón-Javier Euan-Catzin — Gestión, análisis formal, conceptualización, software',
          'Pedro-José Canto-Herrera — Revisión, metodología, supervisión, validación',
        ]},
        { type: 'body', content: 'Universidad Autónoma de Yucatán, México.' },
      ],
    }
  },
  {
    id: 'problema', label: 'El Problema de Medición', category: 'Problema',
    level: 2, x: -550, y: -300, color: '#EF4444', icon: 'AlertTriangle', posterVariant: 'light',
    content: {
      title: 'Limitaciones en los Instrumentos Existentes', breadcrumb: 'Problema',
      sections: [
        { type: 'insight', content: 'Solo 6 instrumentos psicométricamente validados existen para medir la intención de deserción. En México, no se ha identificado ningún estudio previo sobre el tema.' },
        { type: 'list', items: [
          'Muchos instrumentos usan solo 1 pregunta (limita comprensión)',
          'Otros mezclan deserción con cambio de carrera (fenómenos distintos)',
          'Pocos definen operacionalmente la intención de desertar',
          'Solo el instrumento de Bäulke et al. (2022) la define explícitamente',
          'Revisiones sistemáticas: 0 estudios en contexto mexicano',
        ]},
      ],
    }
  },
  {
    id: 'escala', label: 'Escala Bäulke (2022)', category: 'Instrumento',
    level: 2, x: 0, y: 400, color: '#10B981', icon: 'Database', posterVariant: 'light',
    content: {
      title: '5 Dimensiones del Proceso de Deserción', breadcrumb: 'Instrumento',
      sections: [
        { type: 'insight', content: 'La escala concibe la deserción como un proceso cognitivo-decisional que va desde la contemplación hasta la decisión final — no como un evento aislado.' },
        { type: 'list', items: [
          '1. Percepción de no encajar (α = .873; ω = .877)',
          '2. Pensamientos sobre desertar (α = .829; ω = .850)',
          '3. Deliberación (α = .858; ω = .863)',
          '4. Búsqueda de información (α = .858; ω = .862)',
          '5. Decisión final (α = .969; ω = .970)',
          'Escala total: ω = .959',
          '15 ítems, Likert de 6 puntos (1=Totalmente en desacuerdo a 6)',
        ]},
      ],
    }
  },
  {
    id: 'escala-fases', label: 'Proceso Decisional', category: 'Instrumento',
    level: 3, parentId: 'escala', x: 300, y: 520, color: '#10B981', icon: 'GitBranch', posterVariant: 'light',
    content: {
      title: 'La Deserción como Proceso, no Evento', breadcrumb: 'Instrumento > Fases',
      sections: [
        { type: 'body', content: 'Basada en un modelo cognitivo de toma de decisiones, la intención de desertar es un proceso que va desde la contemplación hasta la decisión final. Esto difiere de otros instrumentos que tratan la deserción como un evento puntual.' },
        { type: 'list', items: [
          'Fase 1: Sentir que no encajas en la institución',
          'Fase 2: Pensar en abandonar los estudios',
          'Fase 3: Deliberar activamente sobre la decisión',
          'Fase 4: Buscar información sobre alternativas',
          'Fase 5: Tomar la decisión final de desertar',
        ]},
      ],
    }
  },
  {
    id: 'validez', label: 'Validez Convergente', category: 'Resultados',
    level: 2, x: -550, y: 200, color: '#8B5CF6', icon: 'BarChart3', posterVariant: 'dark',
    content: {
      title: 'Correlaciones Estadísticamente Significativas', breadcrumb: 'Resultados',
      sections: [
        { type: 'insight', content: 'Correlación fuerte entre la escala Bäulke y la escala Jacobo-Galicia validada en México (r = .570, p < .001). Motivación y autoeficacia correlacionan inversamente con la deserción.' },
        { type: 'list', items: [
          'Percepción no-encajar vs. Jacobo-Galicia: r = .406 (moderada)',
          'Deliberación vs. Jacobo-Galicia: r = .544 (fuerte)',
          'Escala total: r = .570 (fuerte)',
          'Motivación vs. deserción: r = -.326 (inversa)',
          'Autoeficacia vs. deserción: r = -.436 (inversa)',
        ]},
      ],
    }
  },
  {
    id: 'discusion', label: 'Conclusiones', category: 'Discusión',
    level: 2, x: 550, y: 200, color: '#3B82F6', icon: 'Lightbulb', posterVariant: 'dark',
    content: {
      title: 'Detección Temprana del Abandono', breadcrumb: 'Conclusiones',
      sections: [
        { type: 'insight', content: 'Instrumentos validados en contexto permiten a las IES detectar señales tempranas de abandono académico, posibilitando el diseño de estrategias oportunas de prevención.' },
        { type: 'list', items: [
          'La escala muestra validez externa y confiabilidad adecuadas',
          'Mayor motivación = menor intención de desertar',
          'Mayor autoeficacia = menor intención de desertar',
          'Limitación: muestra pequeña (n=71), predominantemente femenina',
          'Recomendación: estudios futuros con muestras mayores y diversas',
        ]},
        { type: 'metadata', tags: ['Prevención', 'Detección Temprana', 'Validación', 'México'] },
      ],
    }
  },
];
