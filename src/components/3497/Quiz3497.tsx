import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, RotateCcw, Medal, Compass } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';
import { QUIZ_QUESTIONS } from './constants';

const Quiz3497 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (showFeedback) return;
    setSelectedOption(index);
    setShowFeedback(true);
    if (index === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20">
        <BrutalCard color="bg-indigo-950" className="text-white text-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-950 to-black opacity-50" />
          <Medal size={100} className="mx-auto text-amber-500 mb-10 relative z-10" />
          <h2 className="text-7xl font-display uppercase mb-4 italic relative z-10">Liderazgo Validado</h2>
          <p className="text-2xl font-serif text-indigo-200 mb-12 relative z-10 max-w-2xl mx-auto">
            Has consolidado los conceptos clave para la transformación pedagógica del carácter.
          </p>
          <div className="text-[12rem] font-display font-black mb-16 text-amber-500 drop-shadow-[15px_15px_0_#000] relative z-10 leading-none">
            {score}/{QUIZ_QUESTIONS.length}
          </div>
          <button 
            onClick={resetQuiz}
            className="group relative z-10 flex items-center gap-4 mx-auto bg-amber-500 text-black px-12 py-6 border-4 border-black shadow-[10px_10px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0_0_#000] transition-all"
          >
            <RotateCcw className="group-hover:rotate-180 transition-transform duration-700" size={28} />
            <span className="font-display uppercase text-2xl font-black">Reiniciar Auditoría</span>
          </button>
        </BrutalCard>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
         <div className="text-center md:text-left">
            <BrutalSticker text="VALIDACIÓN TRANSVERSAL" color="bg-black" className="text-white mb-4" />
            <h2 className="text-6xl font-display uppercase leading-none">Examen de <span className="text-indigo-600 italic">Carácter</span></h2>
         </div>
         <div className="bg-amber-500 text-black px-10 py-3 border-4 border-black font-display text-4xl font-black italic shadow-[6px_6px_0_0_#000]">
            Q{currentQuestion + 1}
         </div>
      </div>

      <BrutalCard color="bg-white" className="mb-12 border-[8px] border-black shadow-[20px_20px_0_0_#f59e0b]">
        <div className="flex items-start gap-6 mb-12">
           <div className="bg-black p-4 border-2 border-black shrink-0 -rotate-3">
              <Compass className="text-amber-500" size={32} />
           </div>
           <h3 className="text-4xl font-display uppercase leading-tight pt-2 italic">
            {question.question}
           </h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              disabled={showFeedback}
              className={`w-full text-left p-8 border-4 border-black font-display text-2xl uppercase transition-all flex justify-between items-center group
                ${selectedOption === idx 
                  ? (idx === question.correctAnswer ? 'bg-amber-400' : 'bg-red-400') 
                  : 'bg-white hover:bg-amber-50 hover:translate-x-4'}
              `}
            >
              <span className="font-black italic mr-6 text-zinc-300 group-hover:text-amber-500">{idx + 1}.</span>
              <span className="flex-1">{option}</span>
              {showFeedback && idx === question.correctAnswer && <Check size={36} className="text-black" />}
              {showFeedback && selectedOption === idx && idx !== question.correctAnswer && <X size={36} className="text-black" />}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-12 pt-10 border-t-8 border-black overflow-hidden"
            >
              <div className="bg-indigo-900 p-10 border-4 border-black flex gap-8 items-start relative">
                 <div className="bg-amber-500 w-16 h-16 shrink-0 flex items-center justify-center text-black font-black text-2xl rotate-6 border-4 border-black">
                    PY
                 </div>
                 <div className="relative z-10">
                    <p className="font-mono text-xs uppercase font-black text-amber-500 mb-2 tracking-[0.2em]">Contextualización Teórica</p>
                    <p className="font-serif text-2xl text-white italic leading-relaxed">{question.feedback}</p>
                 </div>
              </div>

              <button
                onClick={handleNext}
                className="mt-10 w-full bg-black text-white p-10 font-display uppercase text-4xl flex justify-center items-center gap-6 hover:bg-amber-600 hover:text-black transition-all shadow-[12px_12px_0_0_#4f46e5] group"
              >
                <span>Siguiente Fase</span>
                <ArrowRight className="group-hover:translate-x-6 transition-transform duration-500 text-amber-500" size={40} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </BrutalCard>
    </div>
  );
};

export default Quiz3497;
