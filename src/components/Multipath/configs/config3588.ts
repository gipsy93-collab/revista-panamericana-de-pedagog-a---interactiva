/**
 * CONFIGURACIÓN: Artículo 3588
 * Análisis psicométrico piloto de la escala Bäulke para medir la intención de deserción universitaria
 * Euan-Catzín & Canto-Herrera (2026)
 *
 * Tipo: Cuantitativo (instrumental, transversal, correlacional)
 * Contexto: Universidades de Yucatán, México
 */

import type { ArticleGraph } from '../types';

export const config3588: ArticleGraph = {
  id: '3588',
  title: 'Análisis psicométrico piloto de la escala Bäulke para medir la intención de deserción universitaria en estudiantes de Yucatán, México',
  author: 'Euan-Catzín & Canto-Herrera',
  doi: '10.21555/rpp.3588',
  startingNode: 'bienvenida',

  nodes: {
    // ═══════════════════════════════════════════════════════════
    // BIENVENIDA
    // ═══════════════════════════════════════════════════════════
    bienvenida: {
      id: 'bienvenida',
      title: 'Laboratorio de Validación Psicométrica',
      type: 'choice',
      category: 'intro',
      content: `Este estudio piloto, realizado en Yucatán, México, traduce y analiza las propiedades psicométricas de la **Escala para medir la intención de deserción** desarrollada por Bäulke et al. (2022) en Alemania.\n\n**El problema:** La deserción universitaria alcanza hasta el **24% internacionalmente** (OECD, 2024), pero en México los instrumentos validados para medir la *intención* de deserción son prácticamente inexistentes.\n\n**¿Cómo quieres abordar esta validación?**`,
      accentColor: '#3498db',
      exits: [
        { to: 'contexto_problema', label: '¿Por qué medir la intención de deserción?', type: 'secuencial', icon: 'AlertTriangle' },
        { to: 'escala_baulke', label: 'Conocer la escala Bäulke primero', type: 'profundidad', icon: 'Target' },
        { to: 'metodologia', label: 'Ir directo a la metodología', type: 'transversal', icon: 'Microscope' },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // CONTEXTO
    // ═══════════════════════════════════════════════════════════
    contexto_problema: {
      id: 'contexto_problema',
      title: 'La Deserción: Un Problema Global',
      type: 'narrative',
      category: 'contexto',
      accentColor: '#e74c3c',
      content: `La deserción universitaria tiene consecuencias que van desde efectos individuales hasta implicaciones sociales de amplio alcance:\n\n**Efectos individuales:**\n• Baja autoestima\n• Pérdida del sentido de pertenencia\n\n**Implicaciones sociales:**\n• Pérdidas económicas institucionales\n• Aumento de la desigualdad social\n\n**La intención de deserción** es la fase previa al abandono real. Es una señal de alerta temprana que permite implementar estrategias institucionales para prevenir o reducir la deserción.\n\n**El desafío de medirla:**\n• Muchos estudios usan una sola pregunta\n• Algunos instrumentos confunden intención de deserción con intención de cambiar de carrera\n• Pocos instrumentos están validados psicométricamente\n• En México, no existen estudios ni instrumentos validados para este constructo`,
      exits: [
        { to: 'motivacion_autoeficacia', label: '¿Qué factores están relacionados?', type: 'profundidad', icon: 'Heart' },
        { to: 'escala_baulke', label: 'La escala que se va a validar', type: 'secuencial', icon: 'Target' },
        { to: 'metodologia', label: 'Saltar a metodología', type: 'transversal', icon: 'Microscope' },
      ],
    },

    motivacion_autoeficacia: {
      id: 'motivacion_autoeficacia',
      title: 'Motivación y Autoeficacia Académica',
      type: 'narrative',
      category: 'contexto',
      accentColor: '#f39c12',
      content: `Dos constructos teóricamente relacionados con la intención de deserción:\n\n**Motivación académica:**\n• La motivación intrínseca está **inversamente relacionada** con la intención de deserción\n• Es un predictor fuerte del abandono, especialmente en estudiantes de primer año\n• Mayor motivación intrínseca = mayor intención de permanecer\n\n**Autoeficacia académica:**\n• Estudiantes con alta autoeficacia son **menos propensos** a desertar\n• Media la relación entre deserción y otras variables (autorregulación, compromiso)\n• Está fuertemente asociada con la retención académica\n\n**Relación indirecta:**\nLa autoeficacia → motivación → intención de deserción. Es decir, la autoeficacia influye en la motivación, y esta a su vez en la intención de abandonar.`,
      exits: [
        { to: 'escala_baulke', label: 'Ver la escala Bäulke', type: 'secuencial', icon: 'Target' },
        { to: 'contexto_problema', label: 'Volver al contexto', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    escala_baulke: {
      id: 'escala_baulke',
      title: 'La Escala Bäulke et al. (2022)',
      type: 'data',
      category: 'instrumentos',
      accentColor: '#9b59b6',
      dataView: 'table',
      dataContent: `Escala original (alemán → inglés):\n• 2 subescalas: intención de deserción + intención de cambiar de carrera\n• En este estudio solo se valida la subescala de deserción\n• 5 dimensiones × 3 items = 15 items totales\n• Escala Likert: 1 = Totalmente en desacuerdo → 6 = Totalmente de acuerdo\n\nDimensiones:\n1. Percepción de no encajar (3 items)\n2. Pensamientos sobre desertar (3 items)\n3. Deliberación / Análisis (3 items)\n4. Búsqueda de información (3 items)\n5. Decisión final (3 items)\n\nValidez original (Alemania):\n• χ² = 422.7; df = 80; p < .001\n• RMSEA = 0.07; CFI = 0.98; TLI = 0.97; SRMR = 0.05\n• Confiabilidad: α = .80 – .95 por dimensión`,
      content: `La escala Bäulke tiene ventajas clave sobre otros instrumentos:\n\n• **Define claramente** la intención de deserción (no la confunde con cambio de carrera)\n• **Usa múltiples items** (no una sola pregunta)\n• **Está basada en un modelo teórico** de toma de decisiones cognitivas\n• **Mide el proceso completo**: desde contemplar la deserción hasta la decisión final`,
      exits: [
        { to: 'objetivos', label: 'Ver los objetivos del estudio', type: 'secuencial', icon: 'Target' },
        { to: 'metodologia', label: '¿Cómo se hizo la validación?', type: 'transversal', icon: 'Microscope' },
        { to: 'contexto_problema', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    objetivos: {
      id: 'objetivos',
      title: 'Objetivos del Estudio Piloto',
      type: 'narrative',
      category: 'hipotesis',
      accentColor: '#2980b9',
      content: `Este estudio piloto es la **primera fase** de una validación más amplia. Sus tres objetivos son:\n\n**1. Traducción:**\nTraducir el instrumento al español y verificar su claridad con estudiantes.\n\n**2. Confiabilidad:**\nAnalizar la consistencia interna usando:\n• Alfa de Cronbach (por dimensión)\n• Omega de McDonald (por dimensión y escala total)\n\n**3. Validez convergente externa:**\nCorrelacionar con:\n• Escala de Intención de Abandono de Frostad et al. (2015) validada en México por Jacobo-Galicia et al. (2021)\n• Motivación académica (Escala de Tendencias de Metas de Logro)\n• Autoeficacia académica (Escala EACA de Blanco et al.)`,
      exits: [
        { to: 'metodologia', label: 'Conocer la metodología', type: 'secuencial', icon: 'Microscope' },
        { to: 'muestra', label: '¿Quiénes participaron?', type: 'profundidad', icon: 'Users' },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // METODOLOGÍA
    // ═══════════════════════════════════════════════════════════
    metodologia: {
      id: 'metodologia',
      title: 'Diseño Metodológico',
      type: 'narrative',
      category: 'metodologia',
      accentColor: '#3498db',
      content: `**Tipo de estudio:** Cuantitativo piloto\n**Diseño:** Instrumental, no experimental, transversal, retrospectivo y correlacional\n\n**¿Por qué este diseño?**\n• Analiza propiedades psicométricas de una escala\n• Recolecta datos en un solo momento\n• No manipula variables directamente\n• Busca asociación sin identificar causalidad\n\n**Instrumentos utilizados:**\n• Escala Bäulke (intención de deserción)\n• Escala Frostad et al. (2015) — validada en México por Jacobo-Galicia et al. (2021)\n• Escala EACA de Blanco et al. (2011) — autoeficacia académica\n• Escala de Tendencias de Metas de Logro (Hayamizu & Weiner, 1991) — motivación\n\n**Análisis estadístico:**\n• Confiabilidad: Alfa de Cronbach y Omega de McDonald\n• Validez convergente: Correlación de Spearman (datos no normales)\n• Software: Jamovi 2.7.6.0`,
      exits: [
        { to: 'muestra', label: 'Conocer la muestra', type: 'secuencial', icon: 'Users' },
        { to: 'procedimiento', label: '¿Cómo se recolectaron los datos?', type: 'profundidad', icon: 'FileText' },
        { to: 'objetivos', label: 'Volver a objetivos', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    muestra: {
      id: 'muestra',
      title: 'La Muestra: 71 Estudiantes de Yucatán',
      type: 'data',
      category: 'muestra',
      accentColor: '#1abc9c',
      dataView: 'table',
      dataContent: `Participantes: 71 estudiantes universitarios\n\nInstituciones:\n• 2 universidades privadas\n• 1 universidad pública\n\nSexo:\n• 87% mujeres (n = 60)\n• 13% hombres (n = 9)\n\nEdad:\n• Media: 21.6 años (IC 95% = 20.5–22.6)\n• DE = 4.35\n• Rango: 18 a 50 años\n\nCarreras:\n• 62% Educación (n = 18)\n• 11.3% Intervención educativa (n = 8)\n• 9.9% Relaciones internacionales (n = 7)\n• 5.6% Psicología (n = 4)\n• 5.6% Psicología educativa (n = 4)\n• 5.6% Enseñanza del inglés (n = 4)\n\nSemestre:\n• 3° semestre: 36.6% (n = 26)\n• 8° semestre: 29.6% (n = 21)\n• 7° semestre: 29.6% (n = 21)\n• 2°, 4°, 5°, 6°: resto`,
      content: `**Limitaciones de la muestra:**\n\n• Es un estudio piloto con muestra pequeña (n = 71)\n• Predominio de mujeres (87%) puede sesgar resultados\n• La mayoría son de carreras de educación\n• Estas limitaciones afectan la generalización a otros contextos`,
      exits: [
        { to: 'procedimiento', label: 'Ver el procedimiento', type: 'secuencial', icon: 'FileText' },
        { to: 'metodologia', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    procedimiento: {
      id: 'procedimiento',
      title: 'Procedimiento de Recolección',
      type: 'narrative',
      category: 'metodologia',
      accentColor: '#16a085',
      content: `El estudio se realizó en **tres fases**:\n\n**Fase 1: Traducción al español**\n• Traducción del inglés al español por un experto en enseñanza de inglés de la UADY\n• El experto evaluó: ¿conserva el significado original? (0 = nada → 3 = completamente)\n\n**Fase 2: Aplicación presencial**\n• Dos modalidades probadas: impresa y en línea\n• Primero: aplicación a estudiantes de 8° semestre con retroalimentación sobre claridad\n• Luego: aplicación al resto de estudiantes (solo respuesta, sin retroalimentación)\n• Consentimiento informado previo\n\n**Fase 3: Aplicación en línea**\n• Microsoft Forms a estudiantes de segunda institución privada\n• Compartido por profesores en grupos de estudiantes\n• Consentimiento informado al inicio del formulario`,
      exits: [
        { to: 'resultados_traduccion', label: 'Resultados de la traducción', type: 'secuencial', icon: 'MessageSquare' },
        { to: 'metodologia', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // RESULTADOS
    // ═══════════════════════════════════════════════════════════
    resultados_traduccion: {
      id: 'resultados_traduccion',
      title: 'Claridad de la Traducción',
      type: 'narrative',
      category: 'resultados',
      accentColor: '#27ae60',
      content: `Los participantes indicaron que **entendieron correctamente** las preguntas:\n\n✓ No encontraron términos fuera de su vocabulario\n✓ La estructura de las oraciones fue clara y fluida\n✓ La longitud del instrumento no afectó su motivación para responder\n\n**Observación importante:**\nAlgunos estudiantes indicaron dificultad para diferenciar ciertos items:\n• Items 1 y 2 de la dimensión "búsqueda de información" parecen iguales\n• Items 2 y 3 de la dimensión "decisión final" parecen iguales\n\n**Recomendación:** Retener todos los items por su relevancia teórica y mantener el equilibrio en el número de items por dimensión.`,
      exits: [
        { to: 'resultados_confiabilidad', label: 'Ver confiabilidad', type: 'secuencial', icon: 'BarChart3' },
        { to: 'resultados_validez', label: 'Ver validez convergente', type: 'transversal', icon: 'Scale' },
      ],
    },

    resultados_confiabilidad: {
      id: 'resultados_confiabilidad',
      title: 'Confiabilidad: Alfa y Omega',
      type: 'data',
      category: 'datos',
      accentColor: '#e67e22',
      dataView: 'table',
      dataContent: `Resultados de consistencia interna:\n\nDimensión                  | Cronbach α | McDonald ω\n---------------------------|------------|------------\nPercepción de no encajar   |   .873     |   .877\nPensamientos de desertar   |   .763     |   .827\nDeliberación               |   .858     |   .863\nBúsqueda de información    |   .858     |   .862\nDecisión final             |   .969     |   .970\n---------------------------|------------|------------\nESCALA TOTAL               |    N/A     |   .959\n\nNota: Para la escala total no se calcula α porque es multidimensional.\n\nAnálisis item-total:\n• La dimensión "pensamientos de desertar" mostró aumento de α a .829 si se elimina el item 1\n• Se recomienda retener el item para corroborar en muestras mayores`,
      content: `**Interpretación:**\n\n• Todos los valores de α y ω superan el umbral de .70 (aceptable)\n• La escala total muestra excelente consistencia interna (ω = .959)\n• Los resultados son similares a los del estudio original alemán (α = .80 – .95)\n• Aunque es un piloto, los indicadores son prometedores`,
      exits: [
        { to: 'resultados_validez', label: 'Validez convergente', type: 'secuencial', icon: 'Scale' },
        { to: 'resultados_traduccion', label: 'Volver a traducción', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    resultados_validez: {
      id: 'resultados_validez',
      title: 'Validez Convergente',
      type: 'data',
      category: 'analisis',
      accentColor: '#8e44ad',
      dataView: 'table',
      dataContent: `Correlación con escala Frostad (Jacobo-Galicia et al., 2021):\n\nDimensión Bäulke           |    r    |  gl  |    p    | Tamaño efecto\n---------------------------|---------|------|---------|--------------\nPercepción de no encajar   |  .406   |  68  | < .001  | Moderado\nPensamientos de desertar   |  .476   |  68  | < .001  | Moderado\nDeliberación               |  .544   |  68  | < .001  | Fuerte\nBúsqueda de información    |  .540   |  68  | < .001  | Fuerte\nDecisión final             |  .473   |  68  | < .001  | Moderado\nESCALA TOTAL               |  .570   |  68  | < .001  | Fuerte\n\nCorrelación con constructos teóricos:\n\nVariable                   |    r    |  gl  |    p\n---------------------------|---------|------|---------\nMotivación académica       | -.326   |  66  | < .01\nAutoeficacia académica     | -.436   |  67  | < .001\n\nNota: Correlaciones inversas = mayor motivación/autoeficacia = menor intención de deserción`,
      content: `**Hallazgos clave:**\n\n1. **Correlaciones positivas significativas** entre Bäulke y Frostad en todas las dimensiones, confirmando que ambos instrumentos miden el mismo constructo\n\n2. **Correlaciones inversas significativas** con motivación y autoeficacia, consistentes con la literatura teórica:\n   • Mayor motivación → menor intención de deserción\n   • Mayor autoeficacia → menor intención de deserción\n\n3. Los tamaños de efecto van de moderado a fuerte según Cohen (1988)`,
      exits: [
        { to: 'discusion', label: 'Ir a la discusión', type: 'secuencial', icon: 'MessageCircle' },
        { to: 'resultados_confiabilidad', label: 'Volver a confiabilidad', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // DISCUSIÓN
    // ═══════════════════════════════════════════════════════════
    discusion: {
      id: 'discusion',
      title: 'Discusión',
      type: 'narrative',
      category: 'discusion',
      accentColor: '#c0392b',
      content: `Este estudio piloto logró traducir y analizar la validez externa de la escala Bäulke en el contexto mexicano, donde los instrumentos validados son escasos.\n\n**Sobre la traducción:**\n• La versión en español fue clara y comprensible\n• La similitud entre algunos items es un aspecto a monitorear en futuras validaciones\n\n**Sobre la confiabilidad:**\n• Los valores obtenidos (.829 – .970) son similares al estudio original alemán\n• La escala total muestra excelente consistencia (ω = .959)\n• El item 1 de "pensamientos de desertar" requiere atención en muestras mayores\n\n**Sobre la validez convergente:**\n• La correlación con Frostad confirma que ambos instrumentos miden el mismo fenómeno\n• Las correlaciones inversas con motivación y autoeficacia apoyan la validez teórica\n\n**Ventajas de la escala Bäulke sobre otros instrumentos:**\n• Define claramente la intención de deserción\n• Distingue deserción de cambio de carrera\n• Está basada en un modelo cognitivo de toma de decisiones\n• Mide el proceso completo: desde la percepción de no encajar hasta la decisión final`,
      exits: [
        { to: 'limitaciones', label: 'Ver limitaciones', type: 'secuencial', icon: 'AlertCircle' },
        { to: 'conclusiones', label: 'Ir a conclusiones', type: 'secuencial', icon: 'CheckCircle' },
      ],
    },

    limitaciones: {
      id: 'limitaciones',
      title: 'Limitaciones',
      type: 'narrative',
      category: 'limitaciones',
      accentColor: '#7f8c8d',
      content: `**1. Muestra pequeña (n = 71)**\nEs un estudio piloto, no permite generalizar a toda la población universitaria de México.\n\n**2. Sesgo de género**\n87% mujeres. Los resultados pueden no representar adecuadamente la experiencia de los hombres.\n\n**3. Recolección en línea**\nParte de los datos se recolectaron online, lo cual introduce limitaciones propias de esta modalidad.\n\n**4. Similitud entre items**\nAlgunos estudiantes confundieron items de dimensiones diferentes, lo que podría afectar la validez en aplicaciones futuras.\n\n**Recomendación:**\nSe requieren estudios con muestras más grandes y diversas para confirmar estas propiedades psicométricas.`,
      exits: [
        { to: 'conclusiones', label: 'Ver conclusiones', type: 'secuencial', icon: 'CheckCircle' },
        { to: 'discusion', label: 'Volver', type: 'retorno', icon: 'ArrowLeft' },
      ],
    },

    conclusiones: {
      id: 'conclusiones',
      title: 'Conclusiones',
      type: 'synthesis',
      category: 'conclusiones',
      accentColor: '#27ae60',
      content: `**Resultados principales:**\n\n1. **Traducción adecuada:** La versión en español es clara y comprensible para estudiantes de Yucatán.\n\n2. **Confiabilidad adecuada:** La escala muestra consistencia interna apropiada en todas sus dimensiones (α = .829 – .970; ω total = .959).\n\n3. **Validez convergente preliminar:**\n   • Correlaciones positivas significativas con otra escala de intención de deserción validada en México\n   • Correlaciones inversas significativas con motivación y autoeficacia académica\n\n**Contribución:**\nEste estudio avanza en el conocimiento sobre la intención de deserción universitaria en México, donde los instrumentos validados son limitados. Permite a las instituciones detectar señales tempranas de abandono y diseñar estrategias de prevención oportunas.\n\n**Próximos pasos:**\nValidar la escala con muestras más grandes y diversas en el contexto mexicano.`,
      exits: [
        { to: 'final_psicometrico', label: 'Final: Visión psicométrica', type: 'final', icon: 'BarChart3', requiresVisited: ['resultados_confiabilidad', 'resultados_validez', 'conclusiones'] },
        { to: 'final_aplicacion', label: 'Final: Visión aplicada', type: 'final', icon: 'Heart', requiresVisited: ['discusion', 'limitaciones', 'conclusiones'] },
        { to: 'final_completo', label: 'Final: Visión integral', type: 'final', icon: 'Award', requiresVisited: ['resultados_confiabilidad', 'resultados_validez', 'discusion', 'limitaciones', 'conclusiones'] },
      ],
    },

    // ═══════════════════════════════════════════════════════════
    // FINALES ALTERNATIVOS
    // ═══════════════════════════════════════════════════════════
    final_psicometrico: {
      id: 'final_psicometrico',
      title: 'Final: Visión Psicométrica',
      type: 'ending',
      category: 'conclusiones',
      accentColor: '#3498db',
      content: `**Has completado el recorrido: "Visión Psicométrica"**\n\nTu trayecto se centró en los indicadores técnicos de la validación:\n\n• Alfa de Cronbach y Omega de McDonald por dimensión\n• Correlaciones de Spearman con otras escalas\n• Tamaños de efecto según Cohen (1988)\n\n**Tu conclusión:** La escala Bäulke muestra propiedades psicométricas prometedoras en el contexto mexicano, aunque requiere validación con muestras mayores.\n\n**Reflexión:** ¿Es suficiente un estudio piloto para implementar la escala en políticas institucionales, o se necesita una validación confirmatoria más rigurosa?\n\n---\n*Para desbloquear el final "Visión Aplicada", explora las implicaciones prácticas en la Discusión y las Limitaciones.*`,
      exits: [
        { to: 'bienvenida', label: 'Reiniciar experiencia', type: 'retorno', icon: 'RotateCcw' },
        { to: 'discusion', label: 'Explorar implicaciones', type: 'transversal', icon: 'MessageCircle' },
      ],
    },

    final_aplicacion: {
      id: 'final_aplicacion',
      title: 'Final: Visión Aplicada',
      type: 'ending',
      category: 'conclusiones',
      accentColor: '#e74c3c',
      content: `**Has completado el recorrido: "Visión Aplicada"**\n\nTu trayecto te llevó a reflexionar sobre el uso práctico de la escala en instituciones educativas:\n\n• La escala permite detectar señales tempranas de deserción\n• Las 5 dimensiones revelan en qué fase del proceso está el estudiante\n• Las instituciones pueden diseñar intervenciones específicas según la dimensión identificada\n\n**Tu conclusión:** La validación de instrumentos no es solo un ejercicio académico: es una herramienta para retener estudiantes y reducir la desigualdad educativa.\n\n**Pero recuerda:** El estudio es un piloto. La generalización requiere cautela.\n\n---\n*Para desbloquear el final completo, explora también los resultados psicométricos detallados.*`,
      exits: [
        { to: 'bienvenida', label: 'Reiniciar experiencia', type: 'retorno', icon: 'RotateCcw' },
        { to: 'resultados_confiabilidad', label: 'Ver indicadores técnicos', type: 'transversal', icon: 'BarChart3' },
      ],
    },

    final_completo: {
      id: 'final_completo',
      title: 'Final: Visión Integral',
      type: 'ending',
      category: 'conclusiones',
      accentColor: '#f39c12',
      content: `**¡Has completado el recorrido integral del artículo 3588!**\n\nHas explorado todas las dimensiones de este estudio piloto de validación psicométrica:\n\n✓ El problema de la deserción universitaria en México\n✓ La escala Bäulke y sus ventajas sobre otros instrumentos\n✓ La metodología cuantitativa instrumental y correlacional\n✓ La muestra de 71 estudiantes de Yucatán\n✓ Los resultados de confiabilidad (α y ω)\n✓ La validez convergente con otras escalas\n✓ Las limitaciones del estudio piloto\n\n**Tu comprensión abarca:**\n• Cómo se traduce y adapta un instrumento internacional\n• Qué indicadores psicométricos son relevantes\n• Por qué la intención de deserción es medible y prevenible\n• La importancia de replicar estudios con muestras mayores\n\n**Reflexión final:**\nLa psicometría no mide números: mide experiencias humanas. Cada item de la escala Bäulke representa un momento en la vida de un estudiante que contempla abandonar. Detectarlo a tiempo puede cambiar su trayectoria.\n\n---\n*Artículo: Euan-Catzín, A. J., & Canto-Herrera, P. J. (2026). Revista Panamericana de Pedagogía, 41, e3588.*`,
      exits: [
        { to: 'bienvenida', label: 'Nueva experiencia', type: 'retorno', icon: 'RotateCcw' },
      ],
    },
  },

  endings: [
    {
      id: 'final_psicometrico',
      title: 'Visión Psicométrica',
      condition: 'Visitar resultados_confiabilidad, resultados_validez y conclusiones',
      description: 'Enfoque en los indicadores técnicos de validación',
    },
    {
      id: 'final_aplicacion',
      title: 'Visión Aplicada',
      condition: 'Visitar discusion, limitaciones y conclusiones',
      description: 'Enfoque en las implicaciones prácticas institucionales',
    },
    {
      id: 'final_completo',
      title: 'Visión Integral',
      condition: 'Visitar todos los nodos principales',
      description: 'Comprensión completa del estudio piloto',
    },
  ],
};
