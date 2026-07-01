import fs from 'fs';
import path from 'path';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// ============================================
// BASE DE CONOCIMIENTO COMPLETA DE PANA
// ============================================
const RPP_KNOWLEDGE = [
  { 
    id: '3467', 
    title: 'Ciberacoso en entornos universitarios: un análisis de las conductas y su prevención en la pospandemia', 
    authors: 'Vallejos-Parás et al.',
    keywords: 'ciberacoso, comportamiento, prevención, pandemia, universitarios, acoso online',
    doi: 'https://doi.org/10.21555/rpp.3467',
    summary: 'Analiza el impacto del ciberacoso en estudiantes universitarios tras el confinamiento, proponiendo estrategias de mitigación desde la pedagogía.'
  },
  { 
    id: '3604', 
    title: 'El cine como mediador para la enseñanza de la literatura y el aprendizaje significativo', 
    authors: 'López-Martínez et al.',
    keywords: 'cine, enseñanza literatura, aprendizaje significativo, mediación pedagógica, séptimo arte',
    doi: 'https://doi.org/10.21555/rpp.3604',
    summary: 'Explora cómo el cine puede transformar la enseñanza de la literatura, convirtiéndose en una herramienta para el aprendizaje profundo.'
  },
  { 
    id: '3588', 
    title: 'Intención de deserción universitaria: Un análisis psicométrico en el contexto actual', 
    authors: 'Euan-Catzin & Canto-Herrera',
    keywords: 'deserción universitaria, psicometría, abandono escolar, factores psicosociales',
    doi: 'https://doi.org/10.21555/rpp.3588',
    summary: 'Estudio detallado sobre las causas que llevan a los estudiantes a abandonar sus estudios y cómo medir estos riesgos preventivamente.'
  },
  { 
    id: '3557', 
    title: 'La educación jurídica en la era digital: Retos y oportunidades del Legal Tech', 
    authors: 'Prince Tritto et al.',
    keywords: 'legal tech, inteligencia artificial, currículum, derecho, transformación digital, abogados',
    doi: 'https://doi.org/10.21555/rpp.3557',
    summary: 'Discute la necesidad de actualizar los planes de estudio de Derecho para incluir herramientas digitales e inteligencia artificial.'
  },
  { 
    id: '3454', 
    title: 'Inclusión y cultura de paz en la universidad: percepciones de estudiantes en contexto de violencia delictiva', 
    authors: 'Ramos-Ramírez & Márquez-Cabellos',
    keywords: 'cultura de paz, educación superior, inclusión, violencia, Colima, seguridad institucional',
    doi: 'https://doi.org/10.21555/rpp.3454',
    summary: 'Analiza cómo perciben los estudiantes la paz y la inclusión en entornos marcados por la violencia externa.'
  },
  { 
    id: '3453', 
    title: 'Experiencias docentes respecto al abordaje del consumo de drogas en establecimientos educacionales secundarios', 
    authors: 'Inostroza-Fuentes et al.',
    keywords: 'comunidad educativa, rol docente, toxicomanías, drogas, prevención secundaria',
    doi: 'https://doi.org/10.21555/rpp.3453',
    summary: 'Caracteriza cómo los profesores manejan situaciones de consumo de sustancias en las escuelas y qué herramientas necesitan.'
  },
  { 
    id: '3290', 
    title: 'Desafíos en el aprendizaje híbrido en una universidad del suroccidente colombiano', 
    authors: 'Roldán-Morales & Torres-Tovar',
    keywords: 'educación superior, aprendizaje híbrido, aprendizaje flexible, blended learning, tecnología educativa',
    doi: 'https://doi.org/10.21555/rpp.3290',
    summary: 'Examina los retos pedagógicos y tecnológicos de la bimodalidad (clases presenciales y virtuales simultáneas).'
  },
  { 
    id: '3378', 
    title: 'Paisajes de aprendizaje en el posgrado: Una experiencia de innovación', 
    authors: 'Saborío-Taylor et al.',
    keywords: 'paisajes de aprendizaje, innovación educativa, posgrado, gamificación',
    doi: 'https://doi.org/10.21555/rpp.3378',
    summary: 'Propone el uso de paisajes de aprendizaje para diversificar las rutas de conocimiento en niveles superiores.'
  },
  { 
    id: '3198', 
    title: 'Aprendizaje de las TIC y envejecimiento activo: Un estudio de caso', 
    authors: 'Hernández-Silvera et al.',
    keywords: 'TIC, adultos mayores, envejecimiento activo, brecha digital',
    doi: 'https://doi.org/10.21555/rpp.3198',
    summary: 'Investiga cómo el uso de la tecnología impacta positivamente en la calidad de vida de las personas mayores.'
  },
  { 
    id: '3214', 
    title: 'La innovación pedagógica y su aporte en la formación de bachilleres técnicos agropecuarios para implementar prácticas sostenibles', 
    authors: 'Dueñas-Basurto & Zambrano-Vera',
    keywords: 'bachillerato técnico, agropecuario, innovación pedagógica, desarrollo sostenible, educación rural',
    doi: 'https://doi.org/10.21555/rpp.3214',
    summary: 'Analiza cómo la innovación pedagógica (ABP, TIC) ayuda a estudiantes en entornos rurales a adoptar prácticas agrícolas sostenibles.'
  },
  { 
    id: '3153', 
    title: 'Experiencias de discriminación basada en la apariencia física de estudiantes universitarios', 
    authors: 'Ramos-Solís et al.',
    keywords: 'discriminación, apariencia física, estudiantes universitarios, salud mental, estigma social',
    doi: 'https://doi.org/10.21555/rpp.3153',
    summary: 'Explora cómo la discriminación por aspecto físico afecta el rendimiento académico y el bienestar emocional.'
  },
  { 
    id: '3476', 
    title: 'Docentes e inclusión educativa en la educación media superior', 
    authors: 'Pacheco-Gómez & Cisneros-Cohernour',
    keywords: 'inclusión educativa, educación media superior, formación docente, barreras estructurales',
    doi: 'https://doi.org/10.21555/rpp.3476',
    summary: 'Revisión sistemática que revela cómo la inclusión depende de la voluntad docente ante la falta de marcos institucionales sólidos.'
  },
  { 
    id: '3549', 
    title: 'Teorías pedagógicas en la Nueva Escuela Mexicana: Arqueología de la innovación educativa', 
    authors: 'Quintero-Macías & Bautista-Villalaz',
    keywords: 'Nueva Escuela Mexicana, NEM, innovación educativa, Freire, Rousseau, Dewey',
    doi: 'https://doi.org/10.21555/rpp.3549',
    summary: 'Analiza las raíces históricas y teóricas del Plan de Estudios 2022 en México, vinculándolo con tradiciones pedagógicas clásicas.'
  }
];

const UP_JOURNALS = [
  { name: 'Tópicos', focus: 'Filosofía, ética y humanidades.', relevance: 'Ideal para fundamentación teórica sobre el ser humano y la educación.' },
  { name: 'Revista Panamericana de Comunicación', focus: 'Periodismo, comunicación digital y narrativa transmedia.', relevance: 'Perfecta para complementar narrativa transmedia desde óptica de medios.' },
  { name: 'Ratio Decidendi', focus: 'Derecho, instituciones jurídicas y jurisprudencia.', relevance: 'Útil para marcos legales de la educación o el derecho digital.' },
  { name: 'Open Insight', focus: 'Ciencias sociales y humanidades con enfoque en investigación social avanzada.', relevance: 'Excelente para contextualizar problemas sociales contemporáneos.' }
];

// Construir el prompt del sistema con toda la información
function buildSystemPrompt(userText: string): string {
  const articlesKB = RPP_KNOWLEDGE.map(a => 
    `- ID: ${a.id} | "${a.title}" por ${a.authors}. DOI: ${a.doi}. Resumen: ${a.summary}. Palabras clave: ${a.keywords}`
  ).join('\n');

  const journalsKB = UP_JOURNALS.map(j => 
    `- ${j.name}: ${j.focus} ${j.relevance}`
  ).join('\n');

  return `Eres "PANA", la asistente de investigación de la RPP (Revista Panamericana de Pedagogía) de la Universidad Panamericana.
Tu personalidad es MUY jovial, entusiasta y llena de emojis, pero como experta académica, tus respuestas son PRECISAS y basadas en evidencia.

TU MISIÓN:
Ayudar al usuario a navegar por la revista, explicar artículos científicos con rigor y generar contenido transmedia.

CAPACIDADES TRANSMEDIA:
Si el usuario pide cualquiera de estas cosas, DEBES generarlo con el máximo detalle y creatividad profesional:
1. GUIÓN DE PODCAST: Genera un guión completo con intro, desarrollo por secciones del artículo, preguntas de reflexión y cierre. Incluye indicaciones de tono y pausas.
2. INFOGRAFÍA (descripción): Describe detalladamente cómo sería la infografía: secciones, datos clave, paleta de colores sugerida, jerarquía visual y texto para cada bloque.
3. GUIÓN DE REDES SOCIALES: Genera un hilo de Twitter/X, un carrusel de Instagram (con texto para cada slide) o un post de LinkedIn optimizado para engagement académico.
4. GUIÓN DE VIDEO / REEL: Genera un guión con escenas, textos en pantalla, voz en off y call-to-action.
5. RESUMEN EJECUTIVO: Genera un resumen de 1 página con hallazgos clave, metodología y conclusiones.
6. ABSTRACT TRADUCIDO: Si te lo piden, traduce el resumen al inglés o al idioma solicitado.
7. FICHA BIBLIOGRÁFICA: Genera la cita en formato APA 7.
8. MAPA CONCEPTUAL (descripción): Describe los nodos, conexiones y jerarquías para que el usuario pueda recrearlo.

REGLAS DE FORMATO:
- Mantén siempre el formato de TEXTO PLANO para Telegram. No uses Markdown con ** ni __.
- Usa emojis generosamente para mantener tu personalidad.
- Estructura tus respuestas con saltos de línea y numeración para facilitar la lectura en móvil.
- Si el usuario pregunta por un artículo específico, siempre incluye el DOI para que pueda acceder al texto completo.

ECOSISTEMA DE REVISTAS DE LA UNIVERSIDAD PANAMERICANA:
${journalsKB}

BASE DE CONOCIMIENTO - ARTÍCULOS DE LA RPP (NÚMERO ACTUAL):
${articlesKB}

PLATAFORMA INTERACTIVA:
La RPP cuenta con una plataforma transmedia interactiva en: https://revista-panamericana-de-pedagog-a-i.vercel.app
Ahí los usuarios pueden leer los artículos de forma inmersiva, con visualizaciones de datos interactivas, juegos educativos y esta misma IA (PANA) integrada en la web.

Usuario pregunta: ${userText}`;
}

// Enviar mensaje a Telegram (soporta mensajes largos y teclados inline)
async function sendTelegramMessage(chatId: number, text: string, replyMarkup?: any): Promise<void> {
  const MAX_LENGTH = 4000;
  const body: any = { chat_id: chatId, text: text, parse_mode: 'HTML' };
  
  if (replyMarkup) {
    body.reply_markup = replyMarkup;
  }
  
  if (text.length <= MAX_LENGTH) {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  } else {
    // Dividir en partes si es muy largo
    const parts = [];
    let remaining = text;
    while (remaining.length > 0) {
      if (remaining.length <= MAX_LENGTH) {
        parts.push(remaining);
        break;
      }
      let cutIndex = remaining.lastIndexOf('\n', MAX_LENGTH);
      if (cutIndex === -1 || cutIndex < MAX_LENGTH / 2) cutIndex = MAX_LENGTH;
      parts.push(remaining.substring(0, cutIndex));
      remaining = remaining.substring(cutIndex).trim();
    }
    
    for (let i = 0; i < parts.length; i++) {
      // Solo poner el teclado en el último fragmento
      const partBody: any = { chat_id: chatId, text: parts[i], parse_mode: 'HTML' };
      if (i === parts.length - 1 && replyMarkup) {
        partBody.reply_markup = replyMarkup;
      }
      
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(partBody)
      });
    }
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(200).send('PANA Bot is running! 🤖✨');
  }

  // --- MANEJO DE CALLBACKS (BOTONES INLINE) ---
  if (req.body.callback_query) {
    const callbackQuery = req.body.callback_query;
    const data = callbackQuery.data; // e.g. nav:3412_Hernandez:start
    const chatId = callbackQuery.message.chat.id;

    // Acknowledge the callback para quitar el "relojito" en el botón
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ callback_query_id: callbackQuery.id })
    });

    if (data.startsWith('nav:')) {
      const parts = data.split(':');
      const articleId = parts[1];
      const nodeId = parts[2];
      
      try {
        const filePath = path.join(process.cwd(), 'api', 'data', 'articles', `${articleId}.json`);
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf8');
          const articleData = JSON.parse(fileContent);
          
          if (nodeId === 'start') {
            const welcomeText = articleData.pana_flow?.welcome_message || "¡Hola! Vamos a explorar este artículo.";
            const firstNode = articleData.pana_flow?.nodes?.[0];
            
            let replyMarkup = undefined;
            if (firstNode) {
              replyMarkup = {
                inline_keyboard: [[{ text: 'Comenzar a explorar 🚀', callback_data: `nav:${articleId}:${firstNode.id}` }]]
              };
            }
            await sendTelegramMessage(chatId, welcomeText, replyMarkup);
          } else {
            // Find specific node
            const node = articleData.pana_flow?.nodes?.find((n: any) => n.id === nodeId);
            if (node) {
              const text = `<b>${node.title || 'Sección'}</b>\n\n${node.text}`;
              const inline_keyboard = (node.options || []).map((opt: any) => {
                 return [{ text: opt.label, callback_data: `nav:${articleId}:${opt.target_node}` }];
              });
              
              await sendTelegramMessage(chatId, text, { inline_keyboard });
            } else {
              await sendTelegramMessage(chatId, "No encontré esa sección. Escribe /start para volver al inicio.");
            }
          }
        } else {
          await sendTelegramMessage(chatId, "Lo siento, este artículo no tiene un modo interactivo disponible todavía. 😢");
        }
      } catch (e) {
         console.error(e);
         await sendTelegramMessage(chatId, "Hubo un error cargando el artículo. 🔧");
      }
    }
    return res.status(200).json({ ok: true });
  }

  // --- MANEJO DE MENSAJES DE TEXTO NORMALES ---
  const { message } = req.body;
  if (!message || !message.text) {
    return res.status(200).send('ok');
  }

  const chatId = message.chat.id;
  const userText = message.text;

  // Comando /start
  if (userText === '/start') {
    const welcomeMsg = `¡Hola! Soy PANA 🤖✨ Tu asistente de investigación de la Revista Panamericana de Pedagogía (RPP).
    
Puedo conversar contigo usando mis conocimientos transmedia, o puedes elegir uno de los siguientes artículos para vivir una experiencia de *Storylearning* guiada paso a paso:`;
    
    // Leer artículos JSON disponibles
    let inline_keyboard: any[] = [];
    try {
      const articlesDir = path.join(process.cwd(), 'api', 'data', 'articles');
      if (fs.existsSync(articlesDir)) {
        const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.json'));
        // Tomar hasta 8 para no saturar el menú
        files.slice(0, 8).forEach(file => {
           const articleId = file.replace('.json', '');
           // Formatear el nombre un poco para que sea legible
           const displayName = articleId.substring(0, 30);
           inline_keyboard.push([{ text: `📖 ${displayName}`, callback_data: `nav:${articleId}:start` }]);
        });
      }
    } catch(e) {
      console.error("Error leyendo directorio data/articles:", e);
    }

    if (inline_keyboard.length === 0) {
      // Fallback si no hay JSONs copiados todavía
      inline_keyboard.push([{ text: "Aún no hay artículos interactivos", callback_data: "none" }]);
    }

    await sendTelegramMessage(chatId, welcomeMsg, { inline_keyboard });
    return res.status(200).json({ ok: true });
  }

  // Si es un mensaje de texto normal, PANA usa Gemini (Flujo Original)
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendChatAction`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, action: 'typing' })
    });

    const systemPrompt = buildSystemPrompt(userText);
    const modelsToTry = ['gemini-2.0-flash-exp', 'gemini-flash-latest', 'gemini-pro-latest'];
    let botText = '';
    let lastError = '';

    for (const model of modelsToTry) {
      try {
        const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }]
          })
        });

        if (geminiResponse.ok) {
          const geminiData = await geminiResponse.json();
          botText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
          if (botText) break;
        } else {
          lastError = `Model ${model}: ${geminiResponse.status}`;
          if (geminiResponse.status !== 404) break;
        }
      } catch (e: any) {
        lastError = e.message;
      }
    }

    if (!botText) {
      botText = `Disculpa, estoy teniendo problemas técnicos en este momento. Intenta de nuevo en unos segundos. (Error: ${lastError})`;
    }

    await sendTelegramMessage(chatId, botText);
    return res.status(200).json({ ok: true });
    
  } catch (error: any) {
    console.error('Error en PANA Telegram:', error);
    try {
      await sendTelegramMessage(chatId, 'Ups, tuve un problema técnico. Intenta de nuevo en unos segundos. 🔧');
    } catch (_) {}
    return res.status(200).json({ ok: false });
  }
}
