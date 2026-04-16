import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Trophy, XCircle, CheckCircle2, RefreshCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';
import { QuizResult } from './types';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const Quiz3214 = ({ onComplete }: { onComplete: (result: QuizResult) => void }) => {
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
      <div className="py-24 px-6 bg-[#16a34a]/10 min-h-[60vh] flex items-center justify-center border-t-8 border-black">
        <BrutalCard color={passed ? "bg-black" : "bg-[#ef4444]"} className="max-w-2xl w-full text-center p-12">
          <Trophy size={80} className={`mx-auto mb-6 ${passed ? 'text-[#facc15]' : 'text-white'}`} />
          <h2 className="text-5xl font-display uppercase mb-4 text-white">
            {passed ? '¡Cosecha Exitosa!' : 'Sequía de Aprendizaje'}
          </h2>
          <p className="text-2xl font-serif text-white/90 mb-8">
            Puntuación Diagnóstica: {score} / {QUIZ_QUESTIONS.length}
          </p>
          
          <div className="inline-block p-4 border-4 border-white bg-[#16a34a] text-black shadow-[6px_6px_0_#fff] font-mono text-xl uppercase font-black mb-8 rotate-[-2deg]">
            +{score * 100} XP AGRÍCOLA
          </div>

          <p className="font-sans text-lg text-white mb-8">
            {passed 
              ? 'Has demostrado comprensión precisa sobre el giro metodológico agropecuario en Ecuador. Sabes diferenciar innovación sostenible de simples gadgets teóricos.' 
              : 'Los datos muestran vacíos de asimilación. Repasa la lógica cuasiexperimental de este bachillerato rural para subir tus números de cosecha.'}
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
              className="px-8 py-4 bg-white text-black font-display text-2xl uppercase hover:scale-105 transition-transform shadow-[6px_6px_0_rgba(255,255,255,0.5)] flex items-center gap-3 mx-auto"
            >
              <RefreshCcw /> Analizar Nuevamente
            </button>
          )}
        </BrutalCard>
      </div>
    );
  }

  const question = QUIZ_QUESTIONS[currentQuestion];

  return (
    <div className="py-24 px-6 md:px-12 bg-zinc-50 min-h-[80vh] border-t-8 border-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <BrutalSticker text="COMPROBACIÓN DE TERRENO" color="bg-[#facc15]" />
          <div className="font-mono text-xl font-black bg-black text-white px-4 py-2 shadow-[4px_4px_0_#16a34a]">
            {currentQuestion + 1} / {QUIZ_QUESTIONS.length}
          </div>
        </div>

        <BrutalCard className="mb-12 border-b-[8px]">
          <h3 className="text-3xl md:text-5xl font-display uppercase leading-tight">
            {question.question}
          </h3>
        </BrutalCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {question.options.map((option, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === question.correct;
            const showStatus = showExplanation && (isSelected || isCorrect);
            
            let bgConfig = "bg-white hover:bg-zinc-200 border-zinc-200";
            if (showExplanation) {
              if (isCorrect) bgConfig = "bg-[#16a34a] text-white border-black";
              else if (isSelected) bgConfig = "bg-[#ef4444] text-white border-black";
              else bgConfig = "bg-zinc-100 opacity-50 border-black/20";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showExplanation}
                className={`p-6 border-4 border-black text-left font-sans text-xl  transition-all shadow-[6px_6px_0_#000] relative overflow-hidden ${bgConfig}`}
              >
                <div className="flex justify-between items-center gap-4">
                  <span className="font-bold flex-1">{option}</span>
                  {showStatus && (
                    <span className="shrink-0">
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
              animate={{ height: 'auto', opacity: 1, marginTop: 48 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className="p-8 border-4 border-black bg-[#facc15] shadow-[8px_8px_0_#000]">
                <h4 className="font-display text-2xl uppercase mb-2 flex items-center gap-3">
                  <Target size={24} /> Observación Empírica
                </h4>
                <p className="font-serif text-xl leading-relaxed">
                  {question.explanation}
                </p>
                <button
                  onClick={nextQuestion}
                  className="mt-8 px-8 py-3 bg-black text-white font-display text-2xl uppercase hover:bg-zinc-800 transition-colors w-full md:w-auto"
                >
                  {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Siguiente Pregunta →' : 'Generar Reporte Final'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
