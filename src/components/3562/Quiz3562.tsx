import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS, ARTICLE_META } from './constants';
import { BrutalCard, BrutalSticker, PremiumTitle } from '../BrutalistLib';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Heart } from 'lucide-react';

export const Quiz3562 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (idx: number) => {
    if (showFeedback) return;
    setSelectedOption(idx);
    setShowFeedback(true);
    if (idx === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <section className="py-20 px-6 bg-black text-white min-h-[60vh] flex items-center justify-center">
        <BrutalCard color="bg-white" className="max-w-2xl w-full text-center py-16" shadowColor={ARTICLE_META.themeColor}>
          <div className="flex flex-col gap-8 items-center">
            <BrutalSticker text="ANÁLISIS COMPLETADO" color="bg-[#ec4899]" className="text-white" />
            <h3 className="text-6xl font-display uppercase text-black">
              {score} / {QUIZ_QUESTIONS.length}
            </h3>
            <p className="text-xl font-sans text-black/70">
              Has validado los retos de las trayectorias de maternidad universitaria.
            </p>
            <button 
              onClick={restartQuiz}
              className="flex items-center gap-2 bg-black text-white px-8 py-4 font-display uppercase hover:scale-105 transition-transform"
            >
              <RotateCcw size={20} /> Reintentar
            </button>
          </div>
        </BrutalCard>
      </section>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <section className="py-20 px-6 bg-[#f0f0f0]">
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center items-center">
          <BrutalSticker text="DIAGNÓSTICO SOCIAL" color="bg-black" className="text-white" />
          <PremiumTitle subtitle={`PEDAGOGÍA Y GÉNERO // ${currentQuestion + 1} / ${QUIZ_QUESTIONS.length}`}>
            Cuestionario de Empatía
          </PremiumTitle>
        </div>

        <BrutalCard className="flex flex-col gap-8 p-12">
          <div className="flex items-center gap-3 text-[#ec4899] mb-2 font-mono text-sm font-black uppercase">
            <Heart size={24} /> Desafío de Curso de Vida
          </div>
          <h4 className="text-3xl font-display uppercase leading-tight italic">
            {question.question}
          </h4>

          <div className="grid grid-cols-1 gap-4">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;
              
              let variantStyle = "bg-white border-black text-black";
              if (showFeedback) {
                if (isCorrect) variantStyle = "bg-pink-100 border-pink-600 text-pink-900";
                else if (isSelected) variantStyle = "bg-red-100 border-red-600 text-red-900";
              } else if (isSelected) {
                variantStyle = "bg-black text-white";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={showFeedback}
                  className={`w-full text-left p-6 border-4 font-bold text-lg transition-all flex items-center justify-between ${variantStyle} ${!showFeedback && 'hover:translate-x-2'}`}
                >
                  {opt}
                  {showFeedback && isCorrect && <CheckCircle2 className="text-pink-600" />}
                  {showFeedback && isSelected && !isCorrect && <XCircle className="text-red-600" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showFeedback && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 border-4 border-black border-l-[16px] ${selectedOption === question.correctAnswer ? 'bg-pink-50 border-pink-600' : 'bg-red-50 border-red-600'}`}
              >
                <p className="font-sans text-lg italic font-medium">
                  {question.feedback}
                </p>
                <button 
                  onClick={nextQuestion}
                  className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 font-display uppercase self-end ml-auto shadow-[4px_4px_0_0_#ec4899]"
                >
                  Siguiente <ArrowRight size={18} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </BrutalCard>
      </div>
    </section>
  );
};
