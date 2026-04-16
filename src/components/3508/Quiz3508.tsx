import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARTICLE_DATA } from './constants';
import { Brain, ChevronRight, RotateCcw } from 'lucide-react';

export default function Quiz3508() {
  const [quizStep, setQuizStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    if (index === ARTICLE_DATA.quiz[quizStep].correct) {
      setScore(s => s + 1);
    }
  };

  const next = () => {
    if (quizStep < ARTICLE_DATA.quiz.length - 1) {
      setQuizStep(s => s + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setQuizStep(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
    setAnswered(false);
  };

  const current = ARTICLE_DATA.quiz[quizStep];

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <Brain className="text-amber-400" size={32} />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Test de Comprensión</h2>
              </div>

              <div className="mb-6 flex justify-between items-center text-sm text-slate-400">
                <span>Pregunta {quizStep + 1} de {ARTICLE_DATA.quiz.length}</span>
                <span>Puntuación: {score}</span>
              </div>

              <h3 className="text-xl md:text-2xl text-slate-100 mb-8 font-medium">
                {current.question}
              </h3>

              <div className="grid gap-4">
                {current.options.map((option, index) => {
                  const isCorrect = index === current.correct;
                  const isSelected = index === selected;
                  let btnClass = "p-5 rounded-xl text-left text-lg border border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors";
                  if (answered) {
                    if (isCorrect) btnClass = "p-5 rounded-xl text-left text-lg border border-emerald-500 bg-emerald-500/20 text-emerald-100";
                    else if (isSelected) btnClass = "p-5 rounded-xl text-left text-lg border border-red-500 bg-red-500/20 text-red-100";
                    else btnClass = "p-5 rounded-xl text-left text-lg border border-slate-700 bg-slate-800 text-slate-400 opacity-60";
                  }
                  return (
                    <button
                      key={index}
                      disabled={answered}
                      onClick={() => handleAnswer(index)}
                      className={btnClass}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={next}
                  className="mt-8 px-6 py-3 bg-gradient-to-r from-teal-600 to-amber-600 hover:from-teal-500 hover:to-amber-500 text-white rounded-xl font-semibold flex items-center gap-2 transition-all"
                >
                  {quizStep === ARTICLE_DATA.quiz.length - 1 ? 'Ver resultado' : 'Siguiente'} <ChevronRight size={18} />
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 p-12 rounded-3xl border border-slate-800 shadow-2xl text-center"
            >
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">¡Completado!</h3>
              <p className="text-slate-300 text-lg mb-8">
                Has respondido correctamente <span className="text-emerald-400 font-bold">{score}</span> de <span className="text-white font-bold">{ARTICLE_DATA.quiz.length}</span> preguntas.
              </p>
              <button
                onClick={reset}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-amber-600 text-white rounded-xl font-bold hover:shadow-lg transition-shadow flex items-center gap-2 mx-auto"
              >
                <RotateCcw size={18} /> Reintentar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
