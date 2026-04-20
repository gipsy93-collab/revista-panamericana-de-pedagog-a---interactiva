import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, RotateCcw, Award, Lightbulb } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';
import { QUIZ_QUESTIONS } from './constants';

const Quiz3467 = () => {
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
        <BrutalCard color="bg-zinc-900" className="text-white text-center py-16">
          <Award size={80} className="mx-auto text-yellow-400 mb-8" />
          <h2 className="text-6xl font-display uppercase mb-4 italic">Estudio Completado</h2>
          <p className="text-2xl font-serif text-zinc-400 mb-12">
            Has validado tus conocimientos sobre el rigor del ciberacoso universitario.
          </p>
          <div className="text-8xl font-display font-black mb-12 text-indigo-500">
            {score}/{QUIZ_QUESTIONS.length}
          </div>
          <button 
            onClick={resetQuiz}
            className="group flex items-center gap-3 mx-auto bg-indigo-600 text-white px-10 py-5 border-4 border-black shadow-[8px_8px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_#000] transition-all"
          >
            <RotateCcw className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-display uppercase text-xl font-black">Reiniciar Validación</span>
          </button>
        </BrutalCard>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="mb-12 flex justify-between items-end">
         <div>
            <BrutalSticker text="VALIDACIÓN DE TERRENO" color="bg-red-500" className="text-white mb-4" />
            <h2 className="text-5xl font-display uppercase">Laboratorio <span className="text-indigo-600">Cognitivo</span></h2>
         </div>
         <div className="font-mono text-2xl font-black">
            {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
         </div>
      </div>

      <BrutalCard color="bg-white" className="mb-12 border-8 shadow-[16px_16px_0_0_#000]">
        <h3 className="text-3xl font-display uppercase mb-12 leading-tight">
          {question.question}
        </h3>

        <div className="space-y-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              disabled={showFeedback}
              className={`w-full text-left p-6 border-4 border-black font-display text-xl uppercase transition-all flex justify-between items-center group
                ${selectedOption === idx 
                  ? (idx === question.correctAnswer ? 'bg-green-400' : 'bg-red-400') 
                  : 'bg-white hover:bg-indigo-50 hover:translate-x-2'}
              `}
            >
              <span>{option}</span>
              {showFeedback && idx === question.correctAnswer && <Check size={28} className="text-black" />}
              {showFeedback && selectedOption === idx && idx !== question.correctAnswer && <X size={28} className="text-black" />}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 pt-8 border-t-4 border-black"
            >
              <div className="bg-indigo-50 p-6 border-4 border-black flex gap-4">
                 <div className="bg-indigo-600 w-12 h-12 flex-shrink-0 flex items-center justify-center text-white">
                    <Lightbulb size={24} />
                 </div>
                 <div>
                    <p className="font-mono text-[10px] uppercase font-black text-indigo-600 mb-1">Retroalimentación Teórica</p>
                    <p className="font-serif text-lg text-indigo-950 italic">{question.feedback}</p>
                 </div>
              </div>

              <button
                onClick={handleNext}
                className="mt-8 w-full bg-black text-white p-6 font-display uppercase text-2xl flex justify-center items-center gap-4 hover:bg-indigo-700 transition-colors group"
              >
                <span>Siguiente Reactivo</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </BrutalCard>
    </div>
  );
};

export default Quiz3467;
