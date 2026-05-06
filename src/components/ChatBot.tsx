import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

// Artículos base para el conocimiento del bot (Simplificado)
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
    keywords: 'bachillerato técnico, agropecuario, innovación pedagógica, desarrollo sostenible, educación rural, TIC rurales, San Isidro, Ecuador',
    doi: 'https://doi.org/10.21555/rpp.3214',
    summary: 'Analiza cómo la innovación pedagógica (ABP, TIC) ayuda a estudiantes en entornos rurales a adoptar prácticas agrícolas sostenibles, superando barreras de conectividad.'
  },
  { 
    id: '3153', 
    title: 'Experiencias de discriminación basada en la apariencia física de estudiantes universitarios', 
    authors: 'Ramos-Solís et al.',
    keywords: 'discriminación, apariencia física, estudiantes universitarios, salud mental, estigma social, Monterrey',
    doi: 'https://doi.org/10.21555/rpp.3153',
    summary: 'Explora cómo la discriminación por aspecto físico afecta el rendimiento académico y el bienestar emocional en la universidad.'
  },
  { 
    id: '3476', 
    title: 'Docentes e inclusión educativa en la educación media superior', 
    authors: 'Pacheco-Gómez & Cisneros-Cohernour',
    keywords: 'inclusión educativa, educación media superior, formación docente, barreras estructurales, fragilidad institucional',
    doi: 'https://doi.org/10.21555/rpp.3476',
    summary: 'Revisión sistemática que revela cómo la inclusión depende de la voluntad docente ante la falta de marcos institucionales sólidos.'
  },
  { 
    id: '3549', 
    title: 'Teorías pedagógicas en la Nueva Escuela Mexicana: Arqueología de la innovación educativa', 
    authors: 'Quintero-Macías & Bautista-Villalaz',
    keywords: 'Nueva Escuela Mexicana, NEM, innovación educativa, Freire, Rousseau, Dewey, arqueología pedagógica',
    doi: 'https://doi.org/10.21555/rpp.3549',
    summary: 'Analiza las raíces históricas y teóricas del Plan de Estudios 2022 en México, vinculándolo con tradiciones pedagógicas clásicas.'
  },
  { id: 'UP_JOURNALS', title: 'Ecosistema de Revistas UP', journals: ['Open Insight', 'Tópicos', 'Revista Panamericana de Comunicación', 'Ratio Decidendi'] }
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
  imageUrl?: string;
  isImageLoading?: boolean;
}

interface ChatBotProps {
  activeSubPage?: string | null;
}

const UP_JOURNALS_INFO = [
  { 
    name: 'Tópicos', 
    focus: 'Filosofía, ética y humanidades.', 
    relevance: 'Ideal para quienes buscan una fundamentación teórica profunda sobre el ser humano y la educación.'
  },
  { 
    name: 'Revista Panamericana de Comunicación', 
    focus: 'Periodismo, comunicación digital y narrativa transmedia.', 
    relevance: 'Perfecta para complementar el estudio de la narrativa transmedia desde una óptica de medios.'
  },
  { 
    name: 'Ratio Decidendi', 
    focus: 'Derecho, instituciones jurídicas y jurisprudencia.', 
    relevance: 'Útil para quienes exploran los marcos legales de la educación o el derecho digital.'
  },
  {
    name: 'Open Insight',
    focus: 'Ciencias sociales y humanidades con enfoque en investigación social avanzada.',
    relevance: 'Excelente para contextualizar problemas sociales contemporáneos.'
  }
];

export const ChatBot = ({ activeSubPage }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('pepa_messages');
    return saved ? JSON.parse(saved) : [
      { 
        role: 'assistant', 
        content: '¡Hola! Soy PEPA ✨ Tu asistente interactiva. Puedo ayudarte a navegar por la plataforma, profundizar en el artículo que estás leyendo o recomendarte textos de otras revistas de la Universidad Panamericana. ¿En qué te puedo ayudar hoy? 🚀' 
      }
    ];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [articleContext, setArticleContext] = useState<string | null>(null);
  const [lastGreetedArticle, setLastGreetedArticle] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Cargar contexto del artículo cuando cambie la subpágina
  useEffect(() => {
    const loadContext = async () => {
      if (activeSubPage && activeSubPage.match(new RegExp('^\\d+$'))) { // Si es un ID numérico (artículo)
        try {
          const response = await fetch(`/content/articles/${activeSubPage}.md`);
          if (response.ok) {
            const text = await response.text();
            // Limitar a ~60K caracteres para no exceder el contexto de Gemini
            setArticleContext(text.slice(0, 60000));
          } else {
            setArticleContext(null);
          }
        } catch (error) {
          console.error("Error cargando contexto de PEPA:", error);
          setArticleContext(null);
        }
      } else {
        setArticleContext(null);
      }
    };
    loadContext();
  }, [activeSubPage]);

  // Guardar mensajes en localStorage
  useEffect(() => {
    localStorage.setItem('pepa_messages', JSON.stringify(messages));
  }, [messages]);

  // Función de scroll optimizada
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior
      });
    }
  };

  // Efecto para saludar si cambia de artículo (evitando duplicados)
  useEffect(() => {
    if (activeSubPage && activeSubPage !== lastGreetedArticle) {
      const article = RPP_KNOWLEDGE.find(a => a.id === activeSubPage);
      if (article) {
        setLastGreetedArticle(activeSubPage);
        // Solo saludar si el chat está abierto o si no hay muchos mensajes
        if (isOpen || messages.length < 5) {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: `¡Veo que estás explorando "${article.title}"! 👀 Es una investigación fascinante. He cargado el texto completo para ayudarte con cualquier duda técnica. ¿Qué te gustaría saber? 💡`
          }]);
        }
      }
    }
  }, [activeSubPage, isOpen, lastGreetedArticle, messages.length]);

  // Función para hacer las URLs clickeables
  const renderText = (text: string) => {
    const urlRegex = new RegExp('(https?:\\/\\/[^\\s]+)', 'g');
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 font-bold hover:text-pop-blue transition-colors">{part}</a>;
      }
      return part;
    });
  };

  // Scroll automático cuando hay nuevos mensajes
  useEffect(() => {
    setTimeout(() => scrollToBottom('smooth'), 100);
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (window as any).process?.env?.GEMINI_API_KEY;
      
      if (!apiKey) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Error de Configuración: No se encontró la API Key. Por favor, asegúrate de haber reiniciado el servidor (npm run dev) después de editar el archivo .env.' 
        }]);
        setIsLoading(false);
        return;
      }

      const currentArticle = RPP_KNOWLEDGE.find(a => a.id === activeSubPage);
      
      // Detectar si el usuario quiere una imagen
      const imageKeywords = ['imagen', 'dibujo', 'dibuja', 'ilustra', 'ilustración', 'infografía', 'genera una imagen', 'crea una imagen', 'foto', 'visualiza', 'diseña', 'picture', 'draw', 'image'];
      const wantsImage = imageKeywords.some(kw => userMessage.toLowerCase().includes(kw));
      
      const systemPrompt = `Eres "PEPA", la asistente de investigación de la RPP (Revista Panamericana de Pedagogía). 
                  Tu personalidad es MUY jovial, entusiasta y llena de emojis, pero como experta académica, tus respuestas deben ser PRECISAS y basadas en evidencia.

                  TU MISIÓN:
                  Ayudar al usuario a navegar por la revista y, sobre todo, explicar los artículos científicos con rigor.

                  INSTRUCCIONES DE CONTEXTO:
                  ${articleContext 
                    ? `1. El usuario está LEYENDO UN ARTÍCULO. Tienes acceso al TEXTO COMPLETO a continuación.
                       2. Usa este texto como tu FUENTE PRIMARIA de información. 
                       3. Si te preguntan sobre metodología, resultados o autores de este texto, DEBES citar la información exacta.
                       4. Si la respuesta no está en el texto, indícalo educadamente.

                       --- DOCUMENTO DE REFERENCIA (TEXTO COMPLETO) ---
                       ${articleContext}
                       -----------------------------------------------`
                    : `1. El usuario está en una navegación general.
                       2. Recomienda artículos basados en tu BASE DE CONOCIMIENTO general.`
                  }

                  REGLAS DE FORMATO:
                  - Mantén siempre el formato de TEXTO PLANO. Prohibido usar negritas (**) o cursivas (_). Usa saltos de línea.
                  - Usa muchos emojis para mantener tu personalidad.
                  - Si detectas una pregunta sobre datos, intenta explicar la tendencia que ves en el texto.
                  ${wantsImage ? '\n                  INSTRUCCIÓN ESPECIAL: El usuario quiere una imagen. Genera una imagen relevante junto con tu explicación textual. Usa un estilo profesional, académico y de alta calidad.' : ''}

                  BASE DE CONOCIMIENTO (OTROS ARTÍCULOS RPP):
                  ${RPP_KNOWLEDGE.filter(a => a.id !== 'UP_JOURNALS' && a.id !== activeSubPage).map(a => `- ${a.title} (${a.authors}). DOI: ${a.doi}`).join('\n')}

                  HISTORIAL RECIENTE:
                  ${messages.slice(-5).map(m => `${m.role === 'user' ? 'Usuario' : 'PEPA'}: ${m.content}`).join('\n')}

                  USUARIO PREGUNTA: ${userMessage}`;

      const modelsToTry = [
        'gemini-2.0-flash-exp',
        'gemini-flash-latest',
        'gemini-pro-latest'
      ];
      let lastError = '';

      for (const modelName of modelsToTry) {
        try {
          const requestBody: any = {
            contents: [{ parts: [{ text: systemPrompt }] }]
          };

          // Si quiere imagen, activar el modelo especializado
          let currentModel = modelName;
          if (wantsImage) {
            currentModel = 'gemini-3-pro-image-preview';
            requestBody.generationConfig = {
              responseModalities: ['TEXT', 'IMAGE']
            };
          }

          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
          });

          if (response.ok) {
            const data = await response.json();
            const parts = data.candidates?.[0]?.content?.parts || [];
            
            let botText = '';
            let imageUrl = undefined;
            
            for (const part of parts) {
              if (part.text) botText += part.text;
              if (part.inlineData) {
                imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
              }
            }

            setMessages(prev => [...prev, { 
              role: 'assistant', 
              content: botText || (imageUrl ? '🎨 He generado esta infografía profesional para ti:' : 'No pude procesar eso.'),
              imageUrl: imageUrl
            }]);
            setIsLoading(false);
            return;
          } else {
            const errorData = await response.json();
            const errorMsg = errorData.error?.message || `Error ${response.status}`;
            
            // Fallback si el modelo Pro falla o está restringido
            if (wantsImage && (errorMsg.includes('not available') || errorMsg.includes('not supported') || response.status === 404)) {
              // Reintentar con el modelo de texto normal
              const textOnlyResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [{ parts: [{ text: systemPrompt + '\n\nNOTA: El modelo Nano Banana Pro no está disponible. Responde con texto explicando la limitación regional para imágenes, pero describe la infografía.' }] }]
                })
              });

              if (textOnlyResponse.ok) {
                const textData = await textOnlyResponse.json();
                const textResponse = textData.candidates?.[0]?.content?.parts?.[0]?.text || 'No pude generar la imagen.';
                setMessages(prev => [...prev, { role: 'assistant', content: textResponse }]);
                setIsLoading(false);
                return;
              }
            }
            
            lastError = errorMsg;
            if (response.status !== 404) break;
          }
        } catch (e: any) { lastError = e.message; }
      }
      throw new Error(lastError);

    } catch (error: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm('¿Quieres borrar el historial de conversación?')) {
      const initialMessage: Message = { 
        role: 'assistant', 
        content: '¡Historial borrado! ✨ ¿En qué más puedo ayudarte hoy? 🚀' 
      };
      setMessages([initialMessage]);
      localStorage.removeItem('pepa_messages');
    }
  };

  const currentArticle = RPP_KNOWLEDGE.find(a => a.id === activeSubPage);

  return (
    <div className="fixed bottom-6 right-6 z-[300]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[420px] h-[550px] bg-white border-4 border-zine-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden rounded-3xl"
          >
            {/* Header */}
            <div className="bg-zine-black p-5 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pop-yellow rounded-full flex items-center justify-center border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  <Bot size={22} className="text-zine-black" />
                </div>
                <div>
                  <h3 className="font-display uppercase text-sm tracking-widest font-bold">PEPA - Asistente RPP</h3>
                  {currentArticle ? (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-[10px] font-mono text-blue-300 uppercase truncate max-w-[150px]">Leyendo: {currentArticle.title}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-[10px] font-mono opacity-80 uppercase">Modo General</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={clearChat} title="Borrar chat" className="hover:bg-white/10 p-1 rounded-lg transition-colors">
                  <MessageSquare size={16} className="opacity-60" />
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1 bg-white/10 rounded-lg">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto overscroll-contain touch-pan-y p-4 space-y-6 bg-[#f8f7f2] flex flex-col relative"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#000 #f8f7f2',
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch'
              }}
              onWheel={(e) => e.stopPropagation()}
            >
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}
                >
                  <div className={`max-w-[90%] p-4 rounded-2xl border-2 border-zine-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    m.role === 'user' 
                      ? 'bg-zine-red text-white ml-4' 
                      : 'bg-white text-zine-black mr-4'
                  }`}>
                    <div className="text-[13px] md:text-sm font-sans leading-relaxed whitespace-pre-wrap break-words">
                      {renderText(m.content)}
                      {m.imageUrl && (
                        <div className="mt-4 rounded-xl overflow-hidden border-2 border-zine-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-zine-black/5">
                          <img 
                            src={m.imageUrl} 
                            alt="Imagen generada por PEPA" 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform cursor-pointer"
                            onClick={() => window.open(m.imageUrl, '_blank')}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-zine-black p-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Loader2 size={16} className="animate-spin text-zine-black" />
                  </div>
                </div>
              )}
              <div className="h-2 shrink-0" />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t-4 border-zine-black bg-white shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-3"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={currentArticle ? `Pregunta sobre este artículo...` : "Pregunta sobre pedagogía..."}
                  className="flex-1 px-4 py-3 border-2 border-zine-black rounded-2xl font-sans text-sm focus:outline-none focus:ring-4 focus:ring-pop-yellow/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-pop-yellow p-3 border-2 border-zine-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
                >
                  <Send size={22} className="text-zine-black" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-pop-blue text-white rounded-full flex items-center justify-center border-4 border-zine-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 bg-zine-red text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-zine-black animate-bounce">
            AI
          </div>
        )}
        {/* Tooltip */}
        <div className="absolute right-20 bg-zine-black text-white px-3 py-1 rounded-lg text-xs font-display uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border-2 border-white">
          Habla con PEPA
        </div>
      </motion.button>
    </div>
  );
};
