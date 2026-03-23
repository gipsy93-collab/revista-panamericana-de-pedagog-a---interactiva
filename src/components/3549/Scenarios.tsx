import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const scenarios = [
  {
    id: 1,
    title: "Misión 1: El Libro Oficial",
    text: "La SEP te envía el 'Libro sin recetas' pidiendo usar a Freire. Pero el director exige que te apegues estrictamente a la matriz de evaluación formal. ¿Qué haces?",
    options: [
      { text: "Acatar la norma", win: false, result: "Obedeces a la burocracia pero sacrificas la libertad crítica. (Pierdes el ideal de Freire)", bg: "bg-white" },
      { text: "Adaptar al contexto", win: true, result: "¡Emancipación descubierta! Has ignorado el formato oficial para atender la realidad de tus alumnos. Ganaste.", bg: "bg-[#fccb06]" }
    ]
  },
  {
    id: 2,
    title: "Misión 2: Burocracia contra Rousseau",
    text: "Rousseau defendía el juego libre y natural. Tu escuela te exige mandar evidencias fotográficas diarias y estandarizadas de cómo los niños 'juegan'.",
    options: [
      { text: "Falsificar fotos", win: false, result: "El juego se convierte en teatro burocrático. Pierdes la autenticidad.", bg: "bg-[#0f3896]" },
      { text: "Rebelarte cívicamente", win: true, result: "Cuestionas al sistema. Proteges la autonomía infantil. Freire y Rousseau aprueban.", bg: "bg-[#5bc2a8]" }
    ]
  },
  {
    id: 3,
    title: "Misión 3: Aprender Haciendo",
    text: "Dewey proponía resolver problemas de la comunidad. Tus alumnos descubrieron un problema real de agua. Pero interrumpe el bloque D del currículo oficial.",
    options: [
      { text: "Resolver el agua", win: true, result: "¡Has logrado el aprendizaje significativo! Tu currículo se vinculó con la vida real.", bg: "bg-[#fccb06]" },
      { text: "Volver al libro de texto", win: false, result: "Mataste la curiosidad para cumplir con el temario. Estandarización asfixiante.", bg: "bg-white" }
    ]
  }
];

export default function Scenarios() {
  const [current, setCurrent] = useState(0);
  const [feedback, setFeedback] = useState<any>(null);

  const handleChoice = (opt: any) => { setFeedback(opt); }
  const handleNext = () => {
    setFeedback(null);
    if(current < scenarios.length - 1) setCurrent(c => c + 1);
    else setCurrent(0); // Reinicia
  }

  return (
    <section className="py-48 px-6 bg-[#e81e61] text-black relative z-30">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-6xl md:text-8xl font-pop mb-16 text-white drop-shadow-[8px_8px_0_#000]" style={{WebkitTextStroke: '2px black'}}>ESCENARIOS DE FRICCIÓN</h2>
        
        <AnimatePresence mode="wait">
          {!feedback ? (
            <motion.div key={`q-${current}`} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="sticker bg-[#fccb06] p-8 md:p-12">
              <span className="font-pop text-3xl bg-black text-white px-6 py-2 border-4 border-white shadow-[4px_4px_0_#000]">{scenarios[current].title}</span>
              <p className="font-bold text-2xl md:text-4xl mt-12 mb-12 leading-snug bg-white p-6 border-4 border-black rounded-xl">{scenarios[current].text}</p>
              <div className="flex flex-col md:flex-row gap-8 justify-center">
                {scenarios[current].options.map((opt, i) => (
                  <button key={i} onClick={() => handleChoice(opt)} className="btn-brutal bg-black text-white border-white px-8 py-6 rounded-2xl flex-1 text-2xl font-bold hover:bg-white hover:text-black hover:border-black">
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key={`f-${current}`} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`sticker flex flex-col items-center ${feedback.bg} p-12 -rotate-1`}>
              <h3 className="font-pop text-5xl md:text-7xl mb-6">{feedback.win ? '¡LOGRO DESBLOQUEADO!' : '¡FRICCIÓN DETECTADA!'}</h3>
              <p className="font-bold text-3xl mb-12 p-8 bg-black text-white rounded-3xl">{feedback.result}</p>
              <button onClick={handleNext} className="btn-brutal bg-white text-black px-12 py-6 rounded-full text-3xl hover:bg-[#e81e61] hover:text-white">
                {current < scenarios.length - 1 ? 'SIGUIENTE MISIÓN' : 'REINICIAR ESCENARIOS'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-auto block" preserveAspectRatio="none"><path d="M0,0 C480,100 960,-50 1440,50 L1440,100 L0,100 Z" fill="#5bc2a8" /></svg>
      </div>
    </section>
  );
}
