import { ArticleGraph } from '../types';

export const config3214: ArticleGraph = {
  id: '3214',
  title: 'Innovación Pedagógica en Bachillerato Técnico',
  startingNode: 'root',
  nodes: {
    root: {
      id: 'root',
      title: '📍 El Desafío Rural',
      subtitle: 'CONTEXTO_MANABÍ',
      category: 'contexto',
      content: [
        'La parroquia San Isidro, en Manabí, es el escenario de una investigación que busca transformar la educación agropecuaria.',
        'El estudio se centra en la Unidad Educativa Fiscal San Isidro (UEFSI), donde se detectó una brecha crítica en el acceso a prácticas sostenibles.',
        '¿Por dónde quieres comenzar este análisis?'
      ],
      exits: [
        { to: 'objetivo', label: 'Ver Objetivos', icon: 'Target' },
        { to: 'marco', label: 'Fundamentación Teórica', icon: 'BookOpen' }
      ]
    },
    objetivo: {
      id: 'objetivo',
      title: '🎯 Transformación Sostenible',
      subtitle: 'OBJETIVOS_Y_DISEÑO',
      category: 'metodologia',
      content: [
        'El objetivo es claro: analizar cómo la innovación pedagógica puede formar mejores bachilleres técnicos agropecuarios.',
        'Se utilizó un diseño cuasiexperimental mixto, con pre-test, una intervención de 12 semanas y un post-test posterior.',
        'La muestra incluyó a 60 estudiantes, 45 padres y 14 docentes de la comunidad.'
      ],
      quote: {
        text: 'La educación agropecuaria necesita una transformación profunda para afrontar los desafíos ambientales del siglo XXI.',
        author: 'Dueñas Basurto & Zambrano Vera',
        context: 'Justificación del estudio'
      },
      exits: [
        { to: 'estrategias', label: 'Estrategias de Innovación', icon: 'Zap' },
        { to: 'root', label: 'Volver al inicio', icon: 'ArrowLeft' }
      ]
    },
    marco: {
      id: 'marco',
      title: '📚 Los 4 Pilares',
      subtitle: 'MARCO_TEÓRICO',
      category: 'contexto',
      content: [
        'La investigación se sustenta en cuatro ejes fundamentales:',
        '1. Aprendizaje Basado en Proyectos (ABP)\n2. Integración de TIC en el mundo rural\n3. Desarrollo Sostenible (ODS)\n4. Aprendizaje Experiencial'
      ],
      exits: [
        { to: 'estrategias', label: 'Implementación Práctica', icon: 'FlaskConical' },
        { to: 'root', label: 'Volver al inicio', icon: 'ArrowLeft' }
      ]
    },
    estrategias: {
      id: 'estrategias',
      title: '🔧 Innovación en el Aula',
      subtitle: 'INTERVENCIÓN_PRÁCTICA',
      category: 'desarrollo',
      content: [
        'Durante 12 semanas, se implementaron estrategias activas:',
        '- Uso de apps móviles para agricultura\n- Simuladores y plataformas digitales\n- Trabajo colaborativo en campo\n- Resolución de problemas reales del sector'
      ],
      exits: [
        { to: 'resultados', label: 'Ver Resultados', icon: 'BarChart2' },
        { to: 'docentes', label: 'Perspectiva Docente', icon: 'AlertTriangle' }
      ]
    },
    resultados: {
      id: 'resultados',
      title: '📈 Impacto Medido',
      subtitle: 'RESULTADOS_Y_DATOS',
      category: 'resultados',
      dataView: 'table',
      dataContent: 'Comprensión Sostenible: +20%\nMotivación Estudiantil: +20%\nUso de Apps Agrícolas: +20%\nSatisacción de Padres: +10%',
      content: [
        'Los hallazgos muestran un aumento significativo en la comprensión del desarrollo sostenible y la motivación estudiantil.',
        'El uso de tecnologías digitales aumentó un 20% a pesar de las limitaciones de conectividad.',
        '¿Cuáles son las conclusiones finales?'
      ],
      exits: [
        { to: 'conclusiones', label: 'Conclusiones Finales', icon: 'CheckCircle' },
        { to: 'docentes', label: 'Ver Desafíos Docentes', icon: 'AlertTriangle' }
      ]
    },
    docentes: {
      id: 'docentes',
      title: '⚠️ Desafíos del Profesorado',
      subtitle: 'PERSPECTIVA_DOCENTE',
      category: 'desarrollo',
      content: [
        'No todo fue sencillo. Los docentes identificaron barreras críticas:',
        '- Falta de recursos y tiempo (70%)\n- Necesidad de capacitación específica (60%)\n- Resistencia al cambio institucional'
      ],
      exits: [
        { to: 'resultados', label: 'Volver a Resultados', icon: 'ArrowLeft' },
        { to: 'conclusiones', label: 'Ir a Conclusiones', icon: 'CheckCircle' }
      ]
    },
    conclusiones: {
      id: 'conclusiones',
      title: '🎯 El Veredicto',
      subtitle: 'CONCLUSIONES_FINALES',
      category: 'conclusiones',
      content: [
        'La innovación pedagógica mejora significativamente el compromiso ambiental.',
        'Sin embargo, persisten barreras estructurales que requieren inversión en infraestructura y formación.',
        'El futuro de la agricultura rural depende de la integración de estas metodologías.'
      ],
      exits: [
        { to: 'recomendaciones', label: 'Recomendaciones y Futuro', icon: 'Lightbulb' }
      ]
    },
    recomendaciones: {
      id: 'recomendaciones',
      title: '💡 Hacia el Futuro',
      subtitle: 'IMPLICACIONES_Y_RECOMENDACIONES',
      category: 'conclusiones',
      content: [
        'Se recomienda adaptar los currículos para una cobertura integral de los ODS y facilitar el acceso tecnológico.',
        'Es vital que el aprendizaje experiencial sea la base de la formación técnica agropecuaria.',
        'Has completado el análisis del Mapa 01.'
      ],
      exits: [
        { to: 'root', label: 'Reiniciar Mapa', icon: 'RotateCcw' }
      ]
    }
  }
};
