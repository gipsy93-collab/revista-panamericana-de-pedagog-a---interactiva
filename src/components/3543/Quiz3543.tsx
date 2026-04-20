import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS, ARTICLE_META } from './constants';
import { BrutalCard, BrutalSticker, PremiumTitle } from '../BrutalistLib';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

export const Quiz3543 = () => {
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
            <BrutalSticker text="RESULTADOS" color="bg-[#10b981]" className="text-white" />
            <h3 className="text-6xl font-display uppercase text-black">
              {score} / {QUIZ_QUESTIONS.length}
            </h3>
            <p className="text-xl font-sans text-black/70">
              Has completado el diagnóstico de terreno sobre prácticas de escritura académica.
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
          <BrutalSticker text="VALIDACIÓN DE TERRENO" color="bg-black" className="text-white" />
          <PremiumTitle subtitle={`PREGUNTA ${currentQuestion + 1} DE ${QUIZ_QUESTIONS.length}`}>
            Evaluación Académica
          </PremiumTitle>
        </div>

        <BrutalCard className="flex flex-col gap-8 p-12">
          <h4 className="text-3xl font-display uppercase leading-tight italic">
            {question.question}
          </h4>

          <div className="grid grid-cols-1 gap-4">
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === question.correctAnswer;
              
              let variantStyle = "bg-white border-black text-black";
              if (showFeedback) {
                if (isCorrect) variantStyle = "bg-green-100 border-green-600 text-green-900";
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
                  {showFeedback && isCorrect && <CheckCircle2 className="text-green-600" />}
                  {showFeedback && isSelected && !isCorrect && <XCircle className="text-red-600" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showFeedback && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 border-l-8 ${selectedOption === question.correctAnswer ? 'bg-green-50 border-green-600' : 'bg-red-50 border-red-600'}`}
              >
                <p className="font-sans text-lg italic font-medium">
                  {question.feedback}
                </p>
                <button 
                  onClick={nextQuestion}
                  className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 font-display uppercase self-end ml-auto"
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
