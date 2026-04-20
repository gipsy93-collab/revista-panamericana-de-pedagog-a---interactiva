import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, RotateCcw, Brain, Activity } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';
import { QUIZ_QUESTIONS } from './constants';

const Quiz3508 = () => {
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
        <BrutalCard color="bg-violet-950" className="text-white text-center py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px]" />
          <Brain size={120} className="mx-auto text-pink-400 mb-10 relative z-10" />
          <h2 className="text-8xl font-display uppercase mb-4 italic relative z-10">Procesado</h2>
          <p className="text-2xl font-serif text-violet-200/60 mb-12 relative z-10 max-w-2xl mx-auto">
            Has completado la validación sobre actitudes docentes y el espectro autista.
          </p>
          <div className="text-[14rem] font-display font-black mb-16 text-white drop-shadow-[15px_15px_0_#ec4899] relative z-10 leading-none">
            {score}/{QUIZ_QUESTIONS.length}
          </div>
          <button 
            onClick={resetQuiz}
            className="group relative z-10 flex items-center gap-4 mx-auto bg-pink-500 text-black px-12 py-6 border-4 border-black shadow-[10px_10px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[14px_14px_0_0_#000] transition-all"
          >
            <RotateCcw className="group-hover:rotate-180 transition-transform duration-1000" size={32} />
            <span className="font-display uppercase text-3xl font-black">Reiniciar Sesión</span>
          </button>
        </BrutalCard>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
         <div className="text-center md:text-left">
            <BrutalSticker text="VALIDACIÓN CUALITATIVA" color="bg-violet-600" className="text-white mb-6" />
            <h2 className="text-7xl font-display uppercase leading-none italic">Sonda de <span className="text-pink-600">Creencias</span></h2>
         </div>
         <div className="bg-black text-white px-8 py-4 border-4 border-black font-display text-5xl font-black shadow-[8px_8px_0_0_#8b5cf6]">
            {currentQuestion + 1}
         </div>
      </div>

      <BrutalCard color="bg-white" className="mb-12 border-[10px] border-black shadow-[25px_25px_0_0_#000]">
        <div className="flex items-start gap-8 mb-16">
           <div className="bg-violet-100 p-4 border-4 border-black shrink-0 rotate-6">
              <Activity className="text-violet-700" size={40} />
           </div>
           <h3 className="text-4xl md:text-5xl font-display uppercase leading-[0.9] pt-4">
            {question.question}
           </h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              disabled={showFeedback}
              className={`w-full text-left p-10 border-4 border-black font-display text-3xl uppercase transition-all flex justify-between items-center group relative
                ${selectedOption === idx 
                  ? (idx === question.correctAnswer ? 'bg-violet-400' : 'bg-pink-400') 
                  : 'bg-white hover:bg-violet-50 hover:-translate-y-2'}
              `}
            >
              <span className="relative z-10">{option}</span>
              {showFeedback && idx === question.correctAnswer && <Check size={48} className="text-black relative z-10" />}
              {showFeedback && selectedOption === idx && idx !== question.correctAnswer && <X size={48} className="text-black relative z-10" />}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-16 pt-12 border-t-[12px] border-violet-50"
            >
              <div className="bg-zinc-900 p-12 border-4 border-black flex gap-10 items-start relative overflow-hidden shadow-[inset_0_0_40px_rgba(139,92,246,0.3)]">
                 <div className="bg-violet-600 w-16 h-16 shrink-0 flex items-center justify-center text-white font-black text-3xl border-4 border-black -rotate-6">
                    !
                 </div>
                 <div>
                    <p className="font-mono text-xs uppercase font-black text-pink-400 mb-4 tracking-[0.4em]">Análisis Descriptivo</p>
                    <p className="font-serif text-2xl text-white italic leading-[1.4] opacity-90">{question.feedback}</p>
                 </div>
              </div>

              <button
                onClick={handleNext}
                className="mt-12 w-full bg-violet-600 text-white p-10 font-display uppercase text-4xl flex justify-center items-center gap-8 hover:bg-black transition-all shadow-[15px_15px_0_0_#000] active:shadow-none active:translate-x-2 active:translate-y-2 group"
              >
                <span>Continuar Proceso</span>
                <ArrowRight className="group-hover:translate-x-8 transition-transform duration-700 text-pink-400" size={48} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </BrutalCard>
    </div>
  );
};

export default Quiz3508;
