import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BrainCircuit, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Sparkles, 
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Target,
  BookOpen,
  Award
} from 'lucide-react';

// ── DATOS DE GAMIFICACIÓN ──────────────────────────────────

const quizQuestions = [
  {
    question: '¿Cuál fue el principal hallazgo del estudio sobre paisajes de aprendizaje?',
    options: [
      'Los estudiantes prefieren clases presenciales',
      'Los paisajes mejoraron participación, motivación y autorregulación',
      'La tecnología no afecta el aprendizaje',
      'Los foros tradicionales son más efectivos',
    ],
    correctAnswer: 1,
    explanation: 'Los paisajes de aprendizaje mejoraron significativamente la participación activa (33.3% → 57.1%), incrementaron la motivación y facilitaron la autorregulación.',
  },
  {
    question: '¿Qué porcentaje de estudiantes NUNCA había usado paisajes de aprendizaje antes?',
    options: ['50%', '75%', '100%', '25%'],
    correctAnswer: 2,
    explanation: 'El dato que duele: 100% de los estudiantes de posgrado nunca habían utilizado paisajes de aprendizaje antes de este estudio.',
  },
  {
    question: '¿Cuál es la metáfora visual utilizada en el diseño del paisaje?',
    options: [
      'Árbol de conocimiento',
      'Mapa del tesoro',
      'Burbujas de diálogo',
      'Red neuronal',
    ],
    correctAnswer: 2,
    explanation: 'La metáfora de las burbujas de diálogo simboliza procesos reflexivos e interactivos, creando coherencia entre forma y contenido.',
  },
  {
    question: '¿Cuántos micro-paisajes semanales conformaron la experiencia?',
    options: ['8', '10', '12', '15'],
    correctAnswer: 2,
    explanation: 'El diseño incluyó 12 micro-paisajes semanales temáticos con navegación flexible.',
  },
  {
    question: '¿Qué herramientas principales se utilizaron para implementar el paisaje?',
    options: [
      'Zoom y Moodle',
      'Genially y Padlet',
      'Teams y Google Classroom',
      'Blackboard y WhatsApp',
    ],
    correctAnswer: 1,
    explanation: 'Se utilizó Genially para el diseño del paisaje y Padlet como plataforma colaborativa para las interacciones.',
  },
];

const flashcards = [
  {
    id: 'fc-1',
    front: 'Paisaje de Aprendizaje',
    back: 'Representación visual de una asignatura, predominantemente gráfica, que incluye enlaces a recursos, multimedia y espacios de interacción.',
  },
  {
    id: 'fc-2',
    front: 'Aprendizaje Activo',
    back: 'Enfoque donde el estudiante construye conocimiento mediante la práctica, la experiencia directa y la participación, no como mero receptor pasivo.',
  },
  {
    id: 'fc-3',
    front: 'Autorregulación',
    back: 'Capacidad del estudiante para gestionar su propio proceso de aprendizaje: planificar, monitorear y evaluar su desempeño.',
  },
  {
    id: 'fc-4',
    front: 'Habilidades de Orden Superior',
    back: 'Según Bloom: crear, analizar y evaluar. El diseño de paisajes prioriza estas sobre recordar y entender.',
  },
  {
    id: 'fc-5',
    front: 'Sobrecarga Cognitiva',
    back: 'Riesgo cuando múltiples herramientas y cantidad excesiva de información abruman al estudiante (alerta UNESCO, 2024).',
  },
  {
    id: 'fc-6',
    front: 'Triangulación de Datos',
    back: 'Método cualitativo que fortalece validez mediante múltiples fuentes: cuestionarios pre/post + análisis de contenido.',
  },
];

const memoryPairs = [
  {
    id: 'mp-1',
    concept: 'Participación Pre',
    match: '33.3%',
  },
  {
    id: 'mp-2',
    concept: 'Participación Post',
    match: '57.1%',
  },
  {
    id: 'mp-3',
    concept: 'Utilidad de recursos',
    match: '85.7%',
  },
  {
    id: 'mp-4',
    concept: 'Estudiantes en muestra',
    match: '9',
  },
  {
    id: 'mp-5',
    concept: 'Duración del estudio',
    match: '12 semanas',
  },
  {
    id: 'mp-6',
    concept: 'Nunca usaron paisajes',
    match: '100%',
  },
];

// ── COMPONENTE PRINCIPAL ───────────────────────────────────

export default function GamificationSection() {
  const [activeGame, setActiveGame] = useState<'menu' | 'quiz' | 'flashcards' | 'memory'>('menu');
  
  // Quiz state
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  // Flashcards state
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);

  // Memory state
  const [memCards, setMemCards] = useState<{ id: string; text: string; pairId: string; matched: boolean }[]>([]);
  const [memSelected, setMemSelected] = useState<number[]>([]);
  const [memMatched, setMemMatched] = useState<Set<string>>(new Set());

  const initMemory = useCallback(() => {
    const cards = memoryPairs.flatMap((p) => [
      { id: p.id + '-c', text: p.concept, pairId: p.id, matched: false },
      { id: p.id + '-m', text: p.match, pairId: p.id, matched: false },
    ]);
    setMemCards(shuffle(cards));
    setMemSelected([]);
    setMemMatched(new Set());
  }, []);

  useEffect(() => {
    if (activeGame === 'memory') initMemory();
  }, [activeGame, initMemory]);

  function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleAnswer = (index: number) => {
    if (feedback !== null) return;
    setSelectedOption(index);
    const isCorrect = index === quizQuestions[currentQuestion].correctAnswer;
    if (isCorrect) setScore((s) => s + 1);
    setFeedback(isCorrect ? 'correct' : 'incorrect');

    setTimeout(() => {
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion((q) => q + 1);
        setSelectedOption(null);
        setFeedback(null);
      } else {
        setQuizFinished(true);
      }
    }, 2000);
  };

  const handleMemClick = (idx: number) => {
    if (memSelected.length >= 2) return;
    if (memSelected.includes(idx)) return;
    if (memMatched.has(memCards[idx].pairId) && memCards[idx].matched) return;

    const next = [...memSelected, idx];
    setMemSelected(next);

    if (next.length === 2) {
      const [a, b] = next;
      if (memCards[a].pairId === memCards[b].pairId) {
        const newMatched = new Set(memMatched);
        newMatched.add(memCards[a].pairId);
        setMemMatched(newMatched);
        const updated = memCards.map((c) =>
          c.pairId === memCards[a].pairId ? { ...c, matched: true } : c,
        );
        setMemCards(updated);
      }
      setTimeout(() => setMemSelected([]), 900);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setFeedback(null);
    setQuizFinished(false);
  };

  // ── RENDER MENU ──────────────────────────────────────────
  if (activeGame === 'menu') {
    return (
      <section className="py-32 px-6 bg-[#f5f5f5] border-t-[12px] border-black min-h-screen relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-pop uppercase mb-4 text-black">Laboratorio de Aprendizaje</h2>
            <p className="text-xl font-bold opacity-60 uppercase tracking-widest text-black/60">// Selecciona una actividad interactiva</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quiz Card */}
            <motion.button
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame('quiz')}
              className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_#000] text-left hover:shadow-[16px_16px_0_#6C63FF] transition-all"
            >
              <div className="w-20 h-20 bg-[#6C63FF] flex items-center justify-center mb-6 border-4 border-black">
                <Target size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-pop uppercase mb-4 text-black">Quiz de Comprensión</h3>
              <p className="text-black/70 mb-4 font-bold">5 preguntas para evaluar tu comprensión del estudio</p>
              <div className="flex items-center gap-2 text-[#6C63FF] font-bold">
                <ArrowRight size={20} />
                Comenzar
              </div>
            </motion.button>

            {/* Flashcards Card */}
            <motion.button
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame('flashcards')}
              className="bg-[#00D9FF] border-4 border-black p-8 shadow-[12px_12px_0_#000] text-left hover:shadow-[16px_16px_0_#000] transition-all"
            >
              <div className="w-20 h-20 bg-black flex items-center justify-center mb-6 border-4 border-white">
                <Layers size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-pop uppercase mb-4 text-black">Flashcards</h3>
              <p className="text-black/70 mb-4 font-bold">6 conceptos clave del artículo para memorizar</p>
              <div className="flex items-center gap-2 text-black font-bold">
                <ArrowRight size={20} />
                Explorar
              </div>
            </motion.button>

            {/* Memory Card */}
            <motion.button
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveGame('memory')}
              className="bg-black text-white border-4 border-white p-8 shadow-[12px_12px_0_#6C63FF] text-left hover:shadow-[16px_16px_0_#00D9FF] transition-all"
            >
              <div className="w-20 h-20 bg-[#fccb06] flex items-center justify-center mb-6 border-4 border-white">
                <Sparkles size={40} className="text-black" />
              </div>
              <h3 className="text-3xl font-pop uppercase mb-4 text-white">Juego de Memoria</h3>
              <p className="text-white/70 mb-4 font-bold">Conecta los datos del estudio con sus conceptos</p>
              <div className="flex items-center gap-2 text-[#fccb06] font-bold">
                <ArrowRight size={20} />
                Jugar
              </div>
            </motion.button>
          </div>
        </div>
      </section>
    );
  }

  // ── RENDER QUIZ ──────────────────────────────────────────
  if (activeGame === 'quiz') {
    return (
      <section className="py-32 px-6 bg-[#6C63FF] border-t-[12px] border-black min-h-screen">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => { setActiveGame('menu'); resetQuiz(); }}
            className="mb-8 flex items-center gap-2 text-white/70 hover:text-white"
          >
            <ArrowLeft size={20} /> Volver al menú
          </button>

          {!quizFinished ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-pop uppercase text-white">Quiz de Comprensión</h2>
                  <span className="text-white/60">{currentQuestion + 1} / {quizQuestions.length}</span>
                </div>
                <div className="h-4 bg-black/30 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#fccb06]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_#000] mb-8">
                <h3 className="text-2xl font-bold mb-8 text-black">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="grid gap-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => {
                    let stateClasses = "bg-white border-2 border-black hover:bg-[#f5f5f5]";
                    if (selectedOption === index) {
                      stateClasses = feedback === 'correct' 
                        ? "bg-[#4ECB71] border-2 border-black" 
                        : "bg-[#e81e61] border-2 border-black text-white";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={feedback !== null}
                        className={`p-6 text-left font-bold transition-all text-lg ${stateClasses} ${feedback === null ? 'hover:translate-x-2' : ''}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0 font-bold">
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-black text-white p-6 border-4 border-white"
                  >
                    <div className={`flex items-center gap-3 text-xl font-bold mb-3 ${feedback === 'correct' ? 'text-[#4ECB71]' : 'text-[#e81e61]'}`}>
                      {feedback === 'correct' ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
                      {feedback === 'correct' ? '¡Correcto!' : 'Incorrecto'}
                    </div>
                    <p className="text-white/80">{quizQuestions[currentQuestion].explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center bg-white border-4 border-black p-12 shadow-[20px_20px_0_#000]"
            >
              <div className="w-32 h-32 bg-[#fccb06] rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-black">
                <Award size={64} className="text-black" />
              </div>
              <h2 className="text-5xl font-pop uppercase mb-6">¡Quiz Completado!</h2>
              <p className="text-6xl font-bold text-[#6C63FF] mb-4">
                {score}<span className="text-2xl text-black/30">/{quizQuestions.length}</span>
              </p>
              <p className="text-xl text-black/70 mb-8">
                {score === quizQuestions.length
                  ? '¡Perfecto! Dominas los conceptos de paisajes de aprendizaje.'
                  : score >= quizQuestions.length / 2
                  ? 'Buen trabajo. Has comprendido los aspectos clave del estudio.'
                  : 'Sigue practicando. Revisa las flashcards para reforzar.'}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="bg-black text-white px-8 py-4 font-bold flex items-center gap-2 hover:bg-[#6C63FF] transition-colors"
                >
                  <RotateCcw size={20} /> Reintentar
                </button>
                <button
                  onClick={() => setActiveGame('menu')}
                  className="bg-[#fccb06] text-black px-8 py-4 font-bold border-2 border-black hover:bg-[#00D9FF] transition-colors"
                >
                  Menú Principal
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  // ── RENDER FLASHCARDS ────────────────────────────────────
  if (activeGame === 'flashcards') {
    return (
      <section className="py-32 px-6 bg-[#00D9FF] border-t-[12px] border-black min-h-screen">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setActiveGame('menu')}
            className="mb-8 flex items-center gap-2 text-black/70 hover:text-black"
          >
            <ArrowLeft size={20} /> Volver al menú
          </button>

          <div className="text-center mb-12">
            <h2 className="text-5xl font-pop uppercase mb-4">Flashcards Conceptuales</h2>
            <p className="text-black/70">Haz clic en la tarjeta para voltearla · {fcIndex + 1} / {flashcards.length}</p>
          </div>

          <div
            className="cursor-pointer h-[400px] max-w-2xl mx-auto"
            onClick={() => setFcFlipped((f) => !f)}
          >
            <motion.div
              animate={{ rotateY: fcFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-white border-8 border-black p-10 flex flex-col items-center justify-center shadow-[15px_15px_0_#000]"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <BookOpen size={48} className="text-[#6C63FF] mb-6" />
                <h3 className="text-4xl font-pop uppercase text-center">{flashcards[fcIndex].front}</h3>
                <p className="mt-8 text-sm uppercase tracking-widest text-black/40">Click para voltear</p>
              </div>
              {/* Back */}
              <div
                className="absolute inset-0 bg-[#6C63FF] text-white border-8 border-black p-10 flex flex-col items-center justify-center shadow-[15px_15px_0_#000]"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-2xl leading-relaxed text-center">{flashcards[fcIndex].back}</p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <button
              disabled={fcIndex === 0}
              onClick={(e) => {
                e.stopPropagation();
                setFcIndex((i) => i - 1);
                setFcFlipped(false);
              }}
              className="bg-white border-4 border-black p-4 font-bold disabled:opacity-30 hover:bg-[#fccb06] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              disabled={fcIndex === flashcards.length - 1}
              onClick={(e) => {
                e.stopPropagation();
                setFcIndex((i) => i + 1);
                setFcFlipped(false);
              }}
              className="bg-white border-4 border-black p-4 font-bold disabled:opacity-30 hover:bg-[#fccb06] transition-colors"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── RENDER MEMORY ────────────────────────────────────────
  if (activeGame === 'memory') {
    return (
      <section className="py-32 px-6 bg-black border-t-[12px] border-[#6C63FF] min-h-screen">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => setActiveGame('menu')}
            className="mb-8 flex items-center gap-2 text-white/70 hover:text-white"
          >
            <ArrowLeft size={20} /> Volver al menú
          </button>

          <div className="text-center mb-12">
            <h2 className="text-5xl font-pop uppercase mb-4 text-white">Juego de Memoria</h2>
            <p className="text-white/70">Encuentra los pares concepto-dato · {memMatched.size} / {memoryPairs.length} pares</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {memCards.map((card, i) => {
              const isSelected = memSelected.includes(i);
              const isMatched = card.matched;
              const show = isSelected || isMatched;
              return (
                <button
                  key={card.id}
                  onClick={() => handleMemClick(i)}
                  disabled={isMatched}
                  className={`rounded-none p-4 min-h-[120px] text-sm font-bold transition-all duration-500 border-4 ${
                    isMatched
                      ? 'bg-[#4ECB71] border-[#4ECB71] text-white scale-95'
                      : show
                      ? 'bg-[#fccb06] text-black border-black scale-105 shadow-[8px_8px_0_#fff]'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                  }`}
                >
                  {show ? (
                    <span className="leading-tight">{card.text}</span>
                  ) : (
                    <Sparkles size={32} className="mx-auto opacity-30" />
                  )}
                </button>
              );
            })}
          </div>

          {memMatched.size === memoryPairs.length && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mt-12 bg-[#6C63FF] border-4 border-white p-8"
            >
              <p className="text-3xl font-bold text-white mb-4">
                🎉 ¡Todos los pares encontrados!
              </p>
              <button
                onClick={initMemory}
                className="bg-white text-black px-10 py-4 font-bold flex items-center gap-2 mx-auto hover:bg-[#fccb06] transition-colors"
              >
                <RotateCcw size={20} /> Reiniciar Juego
              </button>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  return null;
}
