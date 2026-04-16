import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  BookOpenText,
  Microscope,
  BarChart3,
  MessageSquareQuote,
  Layers,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import {
  fichaTecnica,
  quizQuestions,
  flashcards,
  memoryPairs,
  LIMITACIONES,
} from './quizData';
import { FilmGrain } from '../FilmGrain';
import { PremiumTitle } from '../BrutalistLib';

// ── tipos ──────────────────────────────────────────────────
type View =
  | 'home'
  | 'intro'
  | 'methodology'
  | 'results'
  | 'discussion'
  | 'flashcards'
  | 'memory'
  | 'quiz'
  | 'result';

// ── constantes de animación ────────────────────────────────
const pageIn  = { opacity: 0, x: 30 };
const pageOut = { opacity: 0, x: -30 };
const pageAnimate = { opacity: 1, x: 0 };

// ── utilidad: barajar array ────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL UNIFICADO 3557
// ════════════════════════════════════════════════════════════
export default function Unified3557({ onBack }: { onBack: () => void }) {
  const [view, setView] = useState<View>('home');

  // ── quiz state ──
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  // ── flashcard state ──
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);

  // ── memory game state ──
  const [memCards, setMemCards] = useState<
    { id: string; text: string; pairId: string; matched: boolean }[]
  >([]);
  const [memSelected, setMemSelected] = useState<number[]>([]);
  const [memMatched, setMemMatched] = useState<Set<string>>(new Set());

  // inicializar memory game
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
    if (view === 'memory') initMemory();
  }, [view, initMemory]);

  // ── quiz handler ──
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
        setView('result');
      }
    }, 2000);
  };

  // ── memory handler ──
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

  // ── navegación ──
  const navBtn = (label: string, target: View, icon?: React.ReactNode) => (
    <button
      onClick={() => setView(target)}
      className="mt-10 bg-white text-[#2563eb] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
    >
      {icon}
      {label} <ArrowRight size={20} />
    </button>
  );

  const backBtn = (target: View) => (
    <button
      onClick={() => setView(target)}
      className="absolute top-4 left-4 text-white/70 hover:text-white flex items-center gap-1 text-sm"
    >
      <ArrowLeft size={16} /> Atrás
    </button>
  );

  const exitBtn = () => (
    <button
      onClick={onBack}
      className="absolute top-4 right-4 bg-white/10 text-white/50 hover:bg-white/20 hover:text-white px-4 py-2 rounded-full font-bold text-xs transition-all flex items-center gap-2"
    >
      Escapar <XCircle size={14} />
    </button>
  );

  // ════════════════════════════════════════════════════════════
  // RENDER
  // ════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen w-full p-4 md:p-12 flex items-center justify-center bg-[#fef08a] font-sans relative overflow-hidden">
      <FilmGrain />
      
      {/* Elementos decorativos de fondo para densificar */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-[#2563eb] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#e81e61] opacity-5 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl bg-[#2563eb] rounded-[3rem] p-8 md:p-20 text-white border-[12px] border-black shadow-[30px_30px_0_0_#1e3a8a] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <AnimatePresence mode="wait">
          {/* ─── HOME ─────────────────────────────────── */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {exitBtn()}
              <div>
                <PremiumTitle subtitle="N-3557 // INVESTIGACIÓN" className="mb-10 text-white">
                  {fichaTecnica.titulo}
                </PremiumTitle>
                <p className="text-base opacity-80 mb-1 italic">
                  {fichaTecnica.autores.join(', ')}
                </p>
                <p className="text-sm opacity-60 mb-6">
                  {fichaTecnica.institucion} ·{' '}
                  <a
                    href={fichaTecnica.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#fef08a]"
                  >
                    DOI
                  </a>
                </p>
                <p className="text-lg opacity-90 mb-8">
                  Un viaje interactivo para descubrir las tensiones,
                  resistencias y oportunidades de la educación jurídica
                  en la era de la inteligencia artificial.
                </p>
                <button
                  onClick={() => setView('intro')}
                  className="bg-white text-[#2563eb] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Comenzar Aventura <ArrowRight size={20} />
                </button>
              </div>
              <div className="hidden md:flex justify-center">
                <BrainCircuit
                  size={200}
                  className="text-yellow-300 opacity-80"
                />
              </div>
            </motion.div>
          )}

          {/* ─── INTRODUCCIÓN ─────────────────────────── */}
          {view === 'intro' && (
            <motion.div
              key="intro"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="max-w-4xl mx-auto relative"
            >
              {backBtn('home')}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 mt-6 text-yellow-300">
                <BookOpenText size={36} /> Introducción y Problemática
              </h2>

              {/* Ficha Técnica */}
              <div className="bg-white/10 rounded-2xl p-6 mb-8 text-sm leading-relaxed border border-white/10">
                <h3 className="font-bold text-yellow-300 mb-3 text-base">
                  Resumen de Investigación
                </h3>
                <ul className="space-y-1">
                  <li>
                    <strong className="text-yellow-300/80">Tipo:</strong> {fichaTecnica.tipoArticulo}
                  </li>
                  <li className="flex gap-2">
                    <strong className="text-yellow-300/80 shrink-0">Tema:</strong> <span>{fichaTecnica.temaCentral}</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 text-lg opacity-95 leading-relaxed">
                <p>
                  La inteligencia artificial proyecta un aporte de{' '}
                  <strong className="text-yellow-300">
                    $15.7 billones al PIB mundial para 2030
                  </strong>{' '}
                  (un incremento del 26 %), pero la formación de los juristas
                  permanece anclada en paradigmas del siglo XX. La práctica
                  legal moderna exige competencias digitales —desde gestión
                  de casos con software hasta análisis de datos con IA—
                  mientras que los planes de estudio priorizan el
                  razonamiento jurídico tradicional y el dominio de códigos
                  en papel.
                </p>
                <p className="border-l-4 border-yellow-300 pl-4 italic bg-white/5 py-4 pr-4">
                  «La insuficiente atención prestada a la convergencia entre
                  la formación jurídica tradicional y las exigencias
                  tecnológicas de la praxis legal moderna adquiere una
                  relevancia cardinal en un contexto donde la imbricación de
                  la tecnología en el ejercicio del derecho se torna cada vez
                  más ineludible y omnipresente.»
                </p>
                <p>
                  <strong className="text-yellow-300">Objetivo general:</strong> Analizar la formación
                  del jurista en relación con la informática jurídica,
                  complementado con la visión de juristas en activo sobre el
                  uso de tecnología en la práctica profesional.
                </p>
              </div>
              {navBtn('Metodología', 'methodology', <Microscope size={20} />)}
            </motion.div>
          )}

          {/* ─── METODOLOGÍA ──────────────────────────── */}
          {view === 'methodology' && (
            <motion.div
              key="methodology"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="max-w-4xl mx-auto relative"
            >
              {backBtn('intro')}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 mt-6 text-yellow-300">
                <Microscope size={36} /> Metodología
              </h2>
              <div className="space-y-6 text-lg opacity-95 leading-relaxed">
                <p>
                  El estudio emplea un{' '}
                  <strong className="text-yellow-300">enfoque mixto</strong>:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                    <h3 className="font-bold text-yellow-300 mb-2">
                      Componente Cuantitativo-Comparativo
                    </h3>
                    <p className="text-base opacity-80">
                      Análisis de planes de estudio de{' '}
                      <strong>38 facultades de derecho</strong> de élite
                      seleccionadas de tres rankings: top 10 mundial
                      (THE 2022), top 10 tradición civil y top 15 América
                      Latina (QS 2021).
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
                    <h3 className="font-bold text-yellow-300 mb-2">
                      Componente Cualitativo
                    </h3>
                    <p className="text-base opacity-80">
                      <strong>7 entrevistas semiestructuradas</strong> a
                      juristas en activo (4 hombres, 3 mujeres; 35-60 años;
                      14-35 años de experiencia) en áreas: corporativo,
                      telecomunicaciones, fiscal, tecnológico, competencia
                      económica, civil y administrativo.
                    </p>
                  </div>
                </div>

                <p>
                  Las entrevistas virtuales (Zoom, ≈60 min) fueron analizadas
                  con el método de{' '}
                  <strong className="text-yellow-300">comparaciones constantes</strong> de la Teoría
                  Fundamentada (Corbin y Strauss, 1998): codificación
                  abierta → axial → selectiva. Tres investigadores
                  codificaron independientemente para triangular.
                </p>
              </div>
              {navBtn('Resultados', 'results', <BarChart3 size={20} />)}
            </motion.div>
          )}

          {/* ─── RESULTADOS ───────────────────────────── */}
          {view === 'results' && (
            <motion.div
              key="results"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="max-w-4xl mx-auto relative"
            >
              {backBtn('methodology')}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 mt-6 text-yellow-300">
                <BarChart3 size={36} /> Resultados
              </h2>

              {/* Datos duros */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { value: '10 %', label: 'incluyen tecnología obligatoria' },
                  { value: '58 %', label: 'ofrecen derecho digital optativo' },
                  { value: '80 %', label: 'reducción de carga con IA' },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="bg-white/10 rounded-2xl p-6 text-center border border-white/10"
                  >
                    <p className="text-4xl font-bold text-yellow-300">
                      {d.value}
                    </p>
                    <p className="text-xs mt-2 opacity-60 uppercase tracking-widest leading-tight">{d.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6 text-lg opacity-95 leading-relaxed">
                <h3 className="font-bold text-yellow-300">
                  Componente Comparativa
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base opacity-90">
                  <li>
                    Solo <strong>4 de 38</strong> facultades de élite
                    integran tecnología como materia obligatoria.
                  </li>
                  <li>
                    Facultades anglosajonas muestran mayor flexibilidad;
                    las de tradición civilista, mayor resistencia al cambio.
                  </li>
                </ul>

                <h3 className="font-bold text-yellow-300 mt-8">
                  Voces de los Profesionales
                </h3>

                <blockquote className="border-l-4 border-red-400 pl-4 py-2 italic text-base bg-white/5">
                  «Un profesor me reprobó en un examen porque en vez de los
                  códigos en papel los llevaba en la computadora. Entonces no
                  sólo no me enseñaron nada en referencia al uso de la
                  tecnología para ejercer el derecho, sino que además había
                  una actitud adversa al respecto.» — P1
                </blockquote>

                <blockquote className="border-l-4 border-green-400 pl-4 py-2 italic text-base bg-white/5">
                  «Utilizo ChatGPT y eso me ha ayudado a reducir mi carga
                  laboral en un 80 % porque encuentro rápidamente información
                  sobre los casos que estoy trabajando.» — P5
                </blockquote>

                <blockquote className="border-l-4 border-yellow-300 pl-4 py-2 italic text-base bg-white/5">
                  «Hay gran diferencia entre los despachos, pues hay algunos
                  que nacieron totalmente digitales y no hay ni sede física,
                  además de que se utiliza la inteligencia artificial para
                  todo y otros que siguen totalmente trabajando de forma
                  tradicional.» — P1
                </blockquote>
              </div>
              {navBtn('Discusión', 'discussion', <MessageSquareQuote size={20} />)}
            </motion.div>
          )}

          {/* ─── DISCUSIÓN Y CONCLUSIONES ─────────────── */}
          {view === 'discussion' && (
            <motion.div
              key="discussion"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="max-w-4xl mx-auto relative"
            >
              {backBtn('results')}
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 mt-6 text-yellow-300">
                <MessageSquareQuote size={36} /> Discusión y Conclusiones
              </h2>
              <div className="space-y-6 text-lg opacity-95 leading-relaxed">
                <p>
                  Los resultados revelan una{' '}
                  <strong className="text-yellow-300">
                    metamorfosis educativa incompleta
                  </strong>
                  . Las facultades reconocen la importancia de la tecnología
                  (proliferación de optativas), pero no la consideran parte
                  del núcleo esencial. Se prepara a los estudiantes para un
                  mundo que ya no existe.
                </p>
                <p>
                  La tensión entre tradición e innovación no es solo
                  pedagógica, es <strong>identitaria</strong>: el abogado
                  tradicional se define por el dominio de textos normativos;
                  el abogado del futuro requiere fluidez entre derecho y
                  tecnología.
                </p>

                <h3 className="font-bold text-yellow-300 mt-8">Conclusiones Clave</h3>
                <ol className="list-decimal pl-6 space-y-3 text-base opacity-90">
                  <li>
                    Existe una brecha significativa entre formación académica
                    y demandas de la práctica profesional.
                  </li>
                  <li>
                    La dicotomía obligatorio/optativo perpetúa desigualdades
                    entre graduados.
                  </li>
                  <li>
                    La inercia institucional y la resistencia al cambio
                    ralentizan la transformación necesaria.
                  </li>
                  <li>
                    Los profesionales subrayan la urgencia de acelerar el
                    proceso de actualización curricular.
                  </li>
                  <li>
                    La implementación efectiva enfrenta el desafío de las
                    competencias tecnológicas del profesorado.
                  </li>
                </ol>

                <p className="border-l-4 border-yellow-300 pl-4 py-4 italic bg-white/5 mt-8">
                  «Dentro de cinco años, ya no será posible ser un abogado
                  exitoso sin usar IA.» — Prof. Gary Marchant (en Sloan, 2024)
                </p>
              </div>

              {/* Limitaciones */}
              <div className="mt-10 bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-yellow-300 mb-4">Limitaciones</h3>
                <ul className="list-disc pl-5 space-y-2 text-base opacity-90">
                  {LIMITACIONES.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Botones de refuerzo */}
              <div className="mt-12 flex flex-wrap gap-4">
                <button
                  onClick={() => setView('flashcards')}
                  className="bg-yellow-300 text-[#2563eb] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <Layers size={18} /> Flashcards
                </button>
                <button
                  onClick={() => setView('memory')}
                  className="bg-green-400 text-[#2563eb] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <Sparkles size={18} /> Juego de Memoria
                </button>
                <button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setScore(0);
                    setSelectedOption(null);
                    setFeedback(null);
                    setView('quiz');
                  }}
                  className="bg-white text-[#2563eb] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg"
                >
                  <BrainCircuit size={18} /> Quiz Final
                </button>
              </div>
            </motion.div>
          )}

          {/* ─── FLASHCARDS ───────────────────────────── */}
          {view === 'flashcards' && (
            <motion.div
              key="flashcards"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="max-w-2xl mx-auto text-center relative"
            >
              {backBtn('discussion')}
              <h2 className="text-3xl font-bold mb-2 mt-6 text-yellow-300">
                <Layers className="inline mr-3" size={32} />
                Flashcards
              </h2>
              <p className="opacity-70 mb-8 text-sm uppercase tracking-widest">
                Toca la tarjeta para descubrir el significado · {fcIndex + 1} / {flashcards.length}
              </p>

              <div
                className="cursor-pointer perspective-1000 h-[300px]"
                onClick={() => setFcFlipped((f) => !f)}
              >
                <motion.div
                  animate={{ rotateY: fcFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* front */}
                  <div
                    className="absolute inset-0 bg-[#fef08a] text-[#1e3a8a] rounded-3xl p-10 flex flex-col items-center justify-center font-bold text-3xl border-4 border-[#1e3a8a] shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {flashcards[fcIndex].front}
                    <p className="mt-8 text-xs font-normal uppercase tracking-widest opacity-40">Click para girar</p>
                  </div>
                  {/* back */}
                  <div
                    className="absolute inset-0 bg-white text-[#1e3a8a] rounded-3xl p-10 flex flex-col items-center justify-center text-xl leading-relaxed border-4 border-[#1e3a8a] shadow-xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {flashcards[fcIndex].back}
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
                  className="bg-white/20 p-4 rounded-full font-bold disabled:opacity-20 hover:bg-white/30 transition-all"
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
                  className="bg-white/20 p-4 rounded-full font-bold disabled:opacity-20 hover:bg-white/30 transition-all"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ─── JUEGO DE MEMORIA ─────────────────────── */}
          {view === 'memory' && (
            <motion.div
              key="memory"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="max-w-4xl mx-auto relative"
            >
              {backBtn('discussion')}
              <h2 className="text-3xl font-bold mb-2 mt-6 text-center text-yellow-300">
                <Sparkles className="inline mr-3" size={32} />
                Juego de Memoria
              </h2>
              <p className="opacity-70 mb-8 text-sm text-center uppercase tracking-widest">
                Encuentra los pares concepto ↔ dato · {memMatched.size} / {memoryPairs.length} pares
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {memCards.map((card, i) => {
                  const isSelected = memSelected.includes(i);
                  const isMatched = card.matched;
                  const show = isSelected || isMatched;
                  return (
                    <button
                      key={card.id}
                      onClick={() => handleMemClick(i)}
                      disabled={isMatched}
                      className={`rounded-2xl p-4 min-h-[120px] text-sm font-bold transition-all duration-500 border-2 ${
                        isMatched
                          ? 'bg-green-500/30 border-green-400 text-green-100 scale-95 opacity-60'
                          : show
                          ? 'bg-yellow-300 text-[#1e3a8a] border-[#1e3a8a] scale-105 shadow-lg'
                          : 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                      }`}
                    >
                      {show ? (
                        <span className="leading-tight">{card.text}</span>
                      ) : (
                        <BrainCircuit size={32} className="mx-auto opacity-30" />
                      )}
                    </button>
                  );
                })}
              </div>

              {memMatched.size === memoryPairs.length && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center mt-12 bg-white/5 p-8 rounded-3xl border border-white/10"
                >
                  <p className="text-3xl font-bold text-yellow-300 mb-4">
                    🎉 ¡Conexión establecida con éxito!
                  </p>
                  <button
                    onClick={initMemory}
                    className="bg-white text-[#2563eb] px-10 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:scale-105 transition-transform shadow-xl"
                  >
                    <RotateCcw size={20} /> Reiniciar Juego
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ─── QUIZ ─────────────────────────────────── */}
          {view === 'quiz' && (
            <motion.div
              key="quiz"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="max-w-3xl mx-auto relative px-4"
            >
              {backBtn('discussion')}
              <h2 className="text-2xl font-bold mb-2 mt-6 uppercase tracking-widest text-yellow-300/80">
                Pregunta {currentQuestion + 1} de {quizQuestions.length}
              </h2>
              <div className="h-2 w-full bg-white/10 rounded-full mb-8 overflow-hidden">
                <motion.div 
                   className="h-full bg-yellow-300"
                   initial={{ width: 0 }}
                   animate={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-10 leading-snug">
                {quizQuestions[currentQuestion].question}
              </h3>
              
              <div className="grid gap-4">
                {quizQuestions[currentQuestion].options.map((option, index) => {
                   let stateClasses = "bg-white/10 hover:bg-white/20 border-white/10";
                   if (selectedOption === index) {
                      stateClasses = feedback === 'correct' ? "bg-green-500 border-green-400" : "bg-red-500 border-red-400";
                   }

                   return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={feedback !== null}
                      className={`p-6 rounded-2xl text-left font-bold transition-all text-lg border-2 ${stateClasses} ${feedback === null ? 'hover:translate-x-2' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">{index + 1}</span>
                        {option}
                      </div>
                    </button>
                   );
                })}
              </div>

              <AnimatePresence>
                {feedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-8 p-6 rounded-2xl bg-white/5 text-center border border-white/10"
                  >
                    <div className={`flex items-center justify-center gap-3 text-2xl font-bold mb-3 ${feedback === 'correct' ? 'text-green-400' : 'text-red-400'}`}>
                      {feedback === 'correct' ? (
                        <CheckCircle2 size={28} />
                      ) : (
                        <XCircle size={28} />
                      )}
                      {feedback === 'correct' ? '¡Respuesta Perfecta!' : 'Sigue Intentándolo'}
                    </div>
                    <p className="text-lg opacity-80 leading-relaxed italic">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ─── RESULTADO FINAL ──────────────────────── */}
          {view === 'result' && (
            <motion.div
              key="result"
              initial={pageIn}
              animate={pageAnimate}
              exit={pageOut}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(254,240,138,0.3)]">
                <BrainCircuit size={48} className="text-[#2563eb]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¡Expediente Académico Completado!
              </h2>
              <div className="text-center mb-10">
                <p className="text-sm uppercase tracking-[0.3em] opacity-50 mb-2">Tu Puntuación</p>
                <p className="text-8xl font-bold text-yellow-300">
                  {score}<span className="text-3xl opacity-30 ml-2">/ {quizQuestions.length}</span>
                </p>
              </div>

              <p className="text-2xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
                {score === quizQuestions.length
                  ? '¡Maestría absoluta! Has descifrado todas las complejidades de la educación jurídica digital.'
                  : score >= quizQuestions.length / 2
                  ? 'Excelente avance. Has comprendido los pilares de la brecha tecnológica en el derecho.'
                  : 'Has iniciado el camino hacia el derecho digital. Te recomendamos explorar más las flashcards.'}
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => {
                    setView('home');
                    setCurrentQuestion(0);
                    setScore(0);
                    setSelectedOption(null);
                    setFeedback(null);
                  }}
                  className="bg-white/10 text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2 border border-white/10"
                >
                  <RotateCcw size={20} /> Reiniciar Aventura
                </button>
                <button
                  onClick={onBack}
                  className="bg-yellow-300 text-[#2563eb] px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform shadow-xl flex items-center gap-2"
                >
                  <XCircle size={20} /> Finalizar y Regresar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
