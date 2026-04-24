import { ArticleGraph } from '../types';

export const config3557: ArticleGraph = {
  id: '3557',
  title: 'Educación Jurídica en la Era Digital',
  startingNode: 'root',
  nodes: {
    root: {
      id: 'root',
      title: '⚖️ El Despertar del Derecho',
      subtitle: 'CONFLICTO_Y_VISIÓN',
      category: 'contexto',
      content: [
        'La Inteligencia Artificial no es una promesa futura; es una realidad que está redefiniendo la economía global con un impacto estimado de $15.7 billones para 2030.',
        'Sin embargo, el mundo jurídico se debate entre dos posturas:',
        '1. La Tradicional: El jurista es un experto en razonamiento puro.\n2. La Innovadora: El jurista necesita dominar el lenguaje digital.',
        '¿Qué aspecto de esta transformación quieres investigar?'
      ],
      exits: [
        { to: 'metodologia', label: 'Ver Metodología', icon: 'Search' },
        { to: 'hallazgos', label: 'Hallazgos Curriculares', icon: 'BookOpen' }
      ]
    },
    metodologia: {
      id: 'metodologia',
      title: '🔍 Rigor en el Análisis',
      subtitle: 'METODOLOGÍA_MIXTA',
      category: 'metodologia',
      content: [
        'Este estudio analizó 38 de las mejores facultades de derecho del mundo (rankings THE y QS).',
        'Además, se realizaron entrevistas profundas a 7 juristas activos en México: magistrados, litigantes y expertos fiscales.',
        'Se utilizó el método comparativo constante para procesar la información.'
      ],
      exits: [
        { to: 'voces', label: 'Escuchar a los Profesionales', icon: 'MessageSquare' },
        { to: 'root', label: 'Volver al inicio', icon: 'ArrowLeft' }
      ]
    },
    hallazgos: {
      id: 'hallazgos',
      title: '📊 La Brecha Curricular',
      subtitle: 'ANÁLISIS_ACADÉMICO',
      category: 'resultados',
      content: [
        'Los datos son reveladores:',
        '- Solo el 10% de las facultades incluye tecnología como materia obligatoria.\n- El 58% la ofrece solo como optativa.',
        'Universidades como Harvard y Stanford ya integran "Computer Science for Lawyers" y analítica de datos en sus programas core.'
      ],
      exits: [
        { to: 'voces', label: 'Testimonios Reales', icon: 'Users' },
        { to: 'root', label: 'Volver al inicio', icon: 'ArrowLeft' }
      ]
    },
    voces: {
      id: 'voces',
      title: '💬 Voces desde el Campo',
      subtitle: 'TESTIMONIOS_Y_EXPERIENCIAS',
      category: 'desarrollo',
      content: [
        'Los profesionales denuncian una formación universitaria obsoleta.',
        '"Un profesor me reprobó por tener los códigos en la computadora, no en papel", comenta uno de los entrevistados.',
        'A pesar de la resistencia, algunos ya usan IA para reducir su carga administrativa en un 80%.'
      ],
      exits: [
        { to: 'competencias', label: 'Ver Competencias Digitales', icon: 'Zap' },
        { to: 'root', label: 'Volver al inicio', icon: 'ArrowLeft' }
      ]
    },
    competencias: {
      id: 'competencias',
      title: '🎯 El Nuevo Perfil Jurídico',
      subtitle: 'MARCO_DIGCOMP_2.2',
      category: 'desarrollo',
      content: [
        'Para sobrevivir en la era digital, el jurista moderno debe dominar 5 áreas:',
        '1. Alfabetización de información\n2. Comunicación y colaboración digital\n3. Creación de contenido y copyright\n4. Seguridad de datos personales\n5. Resolución de problemas técnicos'
      ],
      exits: [
        { to: 'conclusiones', label: 'Ver Conclusiones', icon: 'CheckCircle' }
      ]
    },
    conclusiones: {
      id: 'conclusiones',
      title: '💡 El Futuro no Espera',
      subtitle: 'REFLEXIÓN_FINAL',
      category: 'conclusiones',
      content: [
        'La brecha entre la formación académica y las demandas del mercado es crítica.',
        'No se trata solo de usar software, sino de comprender los principios éticos y técnicos de la tecnología.',
        'Has completado el análisis del Mapa 04.'
      ],
      quote: {
        text: 'El abogado del futuro no será reemplazado por la IA, sino por el abogado que sepa usarla con criterio.',
        author: 'Reflexión del Estudio',
        context: 'Cierre de la investigación'
      },
      exits: [
        { to: 'root', label: 'Reiniciar Mapa', icon: 'RotateCcw' }
      ]
    }
  }
};
