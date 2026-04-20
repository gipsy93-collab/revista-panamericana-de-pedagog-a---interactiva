import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, RotateCcw, ShieldCheck, Compass } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';
import { QUIZ_QUESTIONS } from './constants';

const Quiz3476 = () => {
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
        <BrutalCard color="bg-emerald-950" className="text-white text-center py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-emerald-400" />
          <ShieldCheck size={100} className="mx-auto text-emerald-400 mb-10" />
          <h2 className="text-7xl font-display uppercase mb-4 italic">Certificación</h2>
          <p className="text-2xl font-serif text-emerald-100/60 mb-12">
            Has procesado los hallazgos críticos sobre la inclusión educativa.
          </p>
          <div className="text-9xl font-display font-black mb-16 text-white drop-shadow-[10px_10px_0_#10b981]">
            {score}/{QUIZ_QUESTIONS.length}
          </div>
          <button 
            onClick={resetQuiz}
            className="group flex items-center gap-4 mx-auto bg-white text-black px-12 py-6 border-4 border-black shadow-[10px_10px_0_0_#10b981] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[14px_14px_0_0_#10b981] transition-all"
          >
            <RotateCcw className="group-hover:rotate-180 transition-transform duration-700" size={28} />
            <span className="font-display uppercase text-2xl font-black">Reevaluar Corpus</span>
          </button>
        </BrutalCard>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
         <div className="text-center md:text-left">
            <BrutalSticker text="DIAGNÓSTICO SISTEMÁTICO" color="bg-emerald-600" className="text-white mb-4" />
            <h2 className="text-6xl font-display uppercase leading-none">Validación de <span className="text-emerald-700">Evidencia</span></h2>
         </div>
         <div className="bg-black text-white px-6 py-2 border-4 border-black font-mono text-3xl font-black italic">
            {currentQuestion + 1} // {QUIZ_QUESTIONS.length}
         </div>
      </div>

      <BrutalCard color="bg-white" className="mb-12 border-[8px] border-black shadow-[20px_20px_0_0_#000]">
        <div className="flex items-start gap-4 mb-10">
           <div className="bg-emerald-100 p-3 border-2 border-black rounded-full shrink-0">
              <Compass className="text-emerald-700" size={32} />
           </div>
           <h3 className="text-4xl font-display uppercase leading-tight pt-2">
            {question.question}
           </h3>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              disabled={showFeedback}
              className={`w-full text-left p-8 border-4 border-black font-display text-2xl uppercase transition-all flex justify-between items-center group relative overflow-hidden
                ${selectedOption === idx 
                  ? (idx === question.correctAnswer ? 'bg-emerald-400' : 'bg-red-400') 
                  : 'bg-white hover:bg-emerald-50 hover:translate-x-3'}
              `}
            >
              <span className="relative z-10">{option}</span>
              {showFeedback && idx === question.correctAnswer && <Check size={36} className="text-black relative z-10" />}
              {showFeedback && selectedOption === idx && idx !== question.correctAnswer && <X size={36} className="text-black relative z-10" />}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 pt-10 border-t-8 border-emerald-50"
            >
              <div className="bg-emerald-50 p-8 border-4 border-emerald-500/30 flex gap-6 items-start relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 -rotate-12 translate-x-12 -translate-y-8 rounded-full" />
                 <div className="bg-black w-14 h-14 shrink-0 flex items-center justify-center text-emerald-400 transform rotate-3">
                    <span className="font-mono text-xs font-black">LOG</span>
                 </div>
                 <div>
                    <p className="font-mono text-xs uppercase font-black text-emerald-600 mb-2">Retroalimentación PRISMA</p>
                    <p className="font-serif text-xl text-emerald-950 italic leading-relaxed">{question.feedback}</p>
                 </div>
              </div>

              <button
                onClick={handleNext}
                className="mt-10 w-full bg-emerald-600 text-white p-8 font-display uppercase text-3xl flex justify-center items-center gap-6 hover:bg-black transition-all shadow-[10px_10px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 group"
              >
                <span>Siguiente Reactivo</span>
                <ArrowRight className="group-hover:translate-x-4 transition-transform duration-300" size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </BrutalCard>
    </div>
  );
};

export default Quiz3476;
