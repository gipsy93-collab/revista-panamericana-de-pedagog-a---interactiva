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
  const [lastGreetedArticle, setLastGreetedArticle] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
            content: `¡Veo que estás explorando "${article.title}"! 👀 Es una investigación fascinante. ¿Tienes alguna pregunta sobre este artículo o te gustaría que te resuma sus puntos clave? 💡`
          }]);
        }
      }
    }
  }, [activeSubPage, isOpen, lastGreetedArticle, messages.length]);

  // Función para hacer las URLs clickeables
  const renderText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
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
      const modelsToTry = [
        'gemini-2.5-flash', 
        'gemini-2.0-flash', 
        'gemini-1.5-flash', 
        'gemini-1.5-flash-8b', 
        'gemini-1.0-pro'
      ];
      let lastError = '';

      for (const modelName of modelsToTry) {
        try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `Eres "PEPA", la asistente de investigación de la RPP (Revista Panamericana de Pedagogía). 
                  Tu personalidad es MUY jovial, entusiasta y llena de emojis ✨. Respondes con energía y resolución.
                  
                  TU MISIÓN:
                  Eres una experta en el catálogo de la RPP. Si el usuario pregunta por un tema (ej. ciberacoso, cine, deserción, tecnología), DEBES buscar en tu BASE DE CONOCIMIENTO y recomendar el artículo específico que más se acerque.
                  
                  REGLAS DE RESOLUCIÓN:
                  1. Si el tema coincide con algún artículo de la lista, proporciónale el TÍTULO EXACTO, los AUTORES y el ENLACE DOI directamente.
                  2. Si el usuario está leyendo un artículo específico actualmente (indicado en CONTEXTO ACTUAL), prioriza las respuestas basadas en ese artículo.
                  3. Mantén siempre el formato de TEXTO PLANO. Prohibido usar negritas (**) o cursivas (_). Usa saltos de línea para separar.
                  
                  CONTEXTO ACTUAL:
                  ${currentArticle 
                    ? `ESTÁS LEYENDO CON EL USUARIO EL ARTÍCULO:
                       Título: ${currentArticle.title}
                       Autores: ${currentArticle.authors}
                       Resumen: ${currentArticle.summary}
                       Palabras Clave: ${currentArticle.keywords}
                       DOI: ${currentArticle.doi}`
                    : 'El usuario está navegando la página principal del sitio.'}
                  
                  BASE DE CONOCIMIENTO (OTROS ARTÍCULOS RPP):
                  ${RPP_KNOWLEDGE.filter(a => a.id !== 'UP_JOURNALS' && a.id !== activeSubPage).map(a => `- ${a.title} (${a.authors}). Temas: ${a.keywords}. DOI: ${a.doi}`).join('\n')}
                  
                  NAV (Secciones con #): #inicio, #articulos, #semillero, #transmedia, #actualidad, #blog, #contacto.
                  
                  HISTORIAL RECIENTE:
                  ${messages.slice(-5).map(m => `${m.role === 'user' ? 'Usuario' : 'PEPA'}: ${m.content}`).join('\n')}
                  
                  USUARIO PREGUNTA: ${userMessage}`
                }]
              }]
            })
          });

          if (response.ok) {
            const data = await response.json();
            const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No pude procesar eso.';
            setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
            setIsLoading(false);
            return;
          } else {
            const errorData = await response.json();
            lastError = errorData.error?.message || `Error ${response.status}`;
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
                    <p className="text-[13px] md:text-sm font-sans leading-relaxed whitespace-pre-wrap break-words">
                      {renderText(m.content)}
                    </p>
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
