import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Trophy, XCircle, CheckCircle2, RefreshCcw, Compass } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';
import { QuizResult } from './types';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const Quiz3378 = ({ onComplete }: { onComplete: (result: QuizResult) => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === QUIZ_QUESTIONS[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
      onComplete({
        score,
        maxScore: QUIZ_QUESTIONS.length,
        passed: score >= Math.ceil(QUIZ_QUESTIONS.length / 2),
        xp: score * 100
      });
    }
  };

  if (isFinished) {
    const passed = score >= Math.ceil(QUIZ_QUESTIONS.length / 2);
    
    return (
      <div className="py-24 px-6 bg-pink-50 min-h-[60vh] flex items-center justify-center">
        <BrutalCard color={passed ? "bg-black" : "bg-rose-600"} className="max-w-2xl w-full text-center p-12">
          <Compass size={80} className={`mx-auto mb-6 ${passed ? 'text-pink-400' : 'text-white'}`} />
          <h2 className="text-5xl font-display uppercase mb-4 text-white italic">
            {passed ? '¡Paisaje Completado!' : 'Exploración Fallida'}
          </h2>
          <p className="text-2xl font-serif text-white/90 mb-8 font-bold">
            Puntuación Académica: {score} / {QUIZ_QUESTIONS.length}
          </p>
          
          <div className="inline-block p-4 border-4 border-white bg-pink-600 text-white shadow-[6px_6px_0_#fff] font-mono text-xl uppercase font-black mb-8 rotate-[-2deg]">
            +{score * 100} XP PRAXIS
          </div>

          <p className="font-sans text-lg text-white mb-8">
            {passed 
              ? 'Has demostrado dominar los conceptos clave de la innovación en posgrado y el impacto de los paisajes de aprendizaje en Costa Rica.' 
              : 'Parece que el mapa se volvió confuso. Revisa los datos sobre la participación del 57% y el uso de Genially para completar tu análisis.'}
          </p>

          {!passed && (
            <button 
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setShowExplanation(false);
                setScore(0);
                setIsFinished(false);
              }}
              className="px-8 py-4 bg-white text-black font-display text-2xl uppercase hover:scale-105 transition-transform shadow-[6px_6px_0_rgba(219,39,119,0.5)] flex items-center gap-3 mx-auto"
            >
              <RefreshCcw /> Reiniciar Exploración
            </button>
          )}
        </BrutalCard>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="py-24 px-6 md:px-12 bg-white min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <BrutalSticker text="MÓDULO DE VALIDACIÓN" color="bg-black" className="text-white" />
          <div className="font-mono text-xl font-black bg-pink-600 text-white px-6 py-2 shadow-[4px_4px_0_#000] rotate-1">
            {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
          </div>
        </div>

        <BrutalCard className="mb-12 border-b-[12px] border-pink-600">
          <h3 className="text-3xl md:text-5xl font-display uppercase leading-tight italic">
            {question.question}
          </h3>
        </BrutalCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === question.correct;
            const showStatus = showExplanation && (isSelected || isCorrect);
            
            let bgConfig = "bg-white hover:bg-pink-50 border-zinc-200";
            if (showExplanation) {
              if (isCorrect) bgConfig = "bg-pink-600 text-white border-black";
              else if (isSelected) bgConfig = "bg-rose-600 text-white border-black";
              else bgConfig = "bg-zinc-100 opacity-50 border-black/20";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showExplanation}
                className={`p-8 border-4 border-black text-left font-display uppercase font-black italic text-xl transition-all shadow-[8px_8px_0_#000] relative overflow-hidden ${bgConfig}`}
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="flex-1 tracking-tighter leading-none">{option}</span>
                  {showStatus && (
                    <span className="shrink-0 bg-white rounded-full p-1 text-black">
                      {isCorrect ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 60 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="p-10 border-8 border-black bg-pink-50 shadow-[12px_12px_0_#db2777] rotate-[-1deg]">
                <h4 className="font-display text-3xl uppercase mb-4 flex items-center gap-3 italic text-pink-600">
                  <Target size={32} /> Retroalimentación
                </h4>
                <p className="font-serif text-2xl leading-relaxed italic">
                  {question.explanation}
                </p>
                <button
                  onClick={nextQuestion}
                  className="mt-10 px-12 py-4 bg-black text-white font-display text-3xl uppercase hover:bg-zinc-800 transition-colors w-full md:w-auto shadow-[6px_6px_0_#db2777]"
                >
                  {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Siguiente Paisaje →' : 'Finalizar Praxis'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
