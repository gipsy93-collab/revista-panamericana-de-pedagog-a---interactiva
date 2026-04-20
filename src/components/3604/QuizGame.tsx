import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from './constants';
import { Award, CheckCircle2, XCircle, RotateCcw, ChevronRight } from 'lucide-react';

export default function QuizGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    if (optionIndex === QUIZ_QUESTIONS[currentIndex].correctAnswer) {
      setScore(score + 10);
    }
  };

  const nextQuestion = () => {
    const next = currentIndex + 1;
    if (next < QUIZ_QUESTIONS.length) {
      setCurrentIndex(next);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];

  return (
    <section className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <div className="inline-block p-4 border-2 border-[#1a1a1a] mb-6 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
            <Award className="text-[#5A5A40] w-12 h-12" />
          </div>
          <h2 className="font-serif text-5xl mb-4 text-[#1a1a1a]">Interrogatorio <span className="italic text-[#5A5A40]">Final</span></h2>
          <p className="text-[#1a1a1a]/60 font-bold uppercase tracking-widest text-xs">Valida tu comprensión de la investigación-acción</p>
        </div>

        <div className="min-h-[500px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="w-full"
              >
                <div className="mb-12 flex justify-between items-end">
                   <div className="text-left">
                     <span className="text-[10px] uppercase font-serif font-black tracking-widest text-[#1a1a1a]/20 block mb-2">Pregunta 0{currentIndex + 1} de 0{QUIZ_QUESTIONS.length}</span>
                     <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-[#1a1a1a]/10 inline-block ${currentQuestion.difficulty === 'fácil' ? 'text-green-600' : currentQuestion.difficulty === 'medio' ? 'text-orange-600' : 'text-red-600'}`}>
                        Grado: {currentQuestion.difficulty}
                     </div>
                   </div>
                   <div className="text-right">
                      <span className="text-4xl font-serif text-[#5A5A40] font-bold">{score} <span className="text-xs uppercase text-[#1a1a1a]/40">puntos</span></span>
                   </div>
                </div>

                <div className="bg-white border-2 border-[#1a1a1a] p-8 md:p-12 mb-8 shadow-[12px_12px_0px_0px_rgba(26,26,26,1)] transition-all">
                  <h3 className="font-serif text-3xl md:text-4xl mb-12 leading-tight text-[#1a1a1a]">
                    {currentQuestion.text}
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {currentQuestion.options.map((option, idx) => {
                      const isCorrect = idx === currentQuestion.correctAnswer;
                      const isSelected = idx === selectedOption;
                      
                      let appearance = "border-[#1a1a1a]/10 hover:border-[#5A5A40] hover:bg-[#5A5A40]/5";
                      if (isAnswered) {
                        if (isCorrect) appearance = "border-green-600 bg-green-50 text-green-900";
                        else if (isSelected) appearance = "border-red-600 bg-red-50 text-red-900";
                        else appearance = "opacity-40 border-[#1a1a1a]/5";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => handleAnswer(idx)}
                          className={`group p-6 text-left border-2 transition-all duration-300 flex items-center justify-between ${appearance} ${!isAnswered ? 'hover:-translate-y-1' : ''}`}
                        >
                          <span className="text-lg">{option}</span>
                          {isAnswered && (
                            isCorrect ? <CheckCircle2 className="text-green-600" /> : isSelected ? <XCircle className="text-red-600" /> : null
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col md:flex-row items-center gap-8"
                    >
                      <div className="flex-1 text-sm text-[#1a1a1a]/60 font-medium italic">
                        {currentQuestion.explanation}
                      </div>
                      <button
                        onClick={nextQuestion}
                        className="px-8 py-4 bg-[#1a1a1a] text-white font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#5A5A40] transition-colors"
                      >
                        {currentIndex === QUIZ_QUESTIONS.length - 1 ? 'Finalizar Examen' : 'Siguiente'} <ChevronRight size={18} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center bg-white border-2 border-[#1a1a1a] p-16 shadow-[20px_20px_0px_0px_rgba(90,90,64,1)] w-full"
              >
                <div className="text-8xl mb-8">🎬</div>
                <h3 className="font-serif text-6xl mb-4 text-[#1a1a1a]">¡Corte y Queda!</h3>
                <p className="text-[#1a1a1a]/60 text-xl mb-12 max-w-md mx-auto">
                  Has completado la experiencia pedagógica sobre el cine y la literatura.
                </p>
                
                <div className="flex justify-center gap-8 mb-16">
                   <div className="text-center">
                     <span className="text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a]/40 block mb-2">Puntaje Final</span>
                     <span className="text-7xl font-serif text-[#5A5A40] font-bold">{score}</span>
                   </div>
                   <div className="w-px h-20 bg-[#1a1a1a]/10" />
                   <div className="text-center">
                     <span className="text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a]/40 block mb-2">Desempeño</span>
                     <span className="text-7xl font-serif text-[#1a1a1a] font-bold">{Math.round((score/30)*100)}%</span>
                   </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <button
                    onClick={resetQuiz}
                    className="w-full md:w-auto px-8 py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                  >
                    <RotateCcw size={18} /> Reintentar
                  </button>
                  <button
                    className="w-full md:w-auto px-8 py-4 bg-[#5A5A40] text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-all shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]"
                  >
                    Descargar Certificado
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
