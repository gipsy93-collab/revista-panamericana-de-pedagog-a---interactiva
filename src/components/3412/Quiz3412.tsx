import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';

export default function Quiz3412() {
  const [answers, setAnswers] = useState<number[]>(Array(QUIZ_QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce((acc, a, i) => acc + (a === QUIZ_QUESTIONS[i].correct ? 1 : 0), 0);

  const handleSelect = (qIndex: number, optionIndex: number) => {
    if (submitted) return;
    const next = [...answers];
    next[qIndex] = optionIndex;
    setAnswers(next);
  };

  const reset = () => {
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(-1));
    setSubmitted(false);
  };

  return (
    <section className="bg-[#F7FAFC] text-slate-900 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-2">Comprueba tu comprensión</h2>
          <p className="text-slate-600">5 preguntas sobre el inventario de competencias blandas y sus hallazgos.</p>
        </motion.div>

        <div className="space-y-6">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <motion.div
              key={qi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qi * 0.05 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <p className="font-semibold mb-4">
                {qi + 1}. {q.question}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt, oi) => {
                  const isSelected = answers[qi] === oi;
                  const isCorrect = oi === q.correct;
                  const showCorrect = submitted && isCorrect;
                  const showWrong = submitted && isSelected && !isCorrect;
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(qi, oi)}
                      className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                        showCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : showWrong
                          ? 'bg-rose-50 border-rose-500 text-rose-700'
                          : isSelected
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-sm"
                  >
                    {answers[qi] === q.correct ? (
                      <span className="flex items-center gap-2 text-emerald-600">
                        <CheckCircle size={16} /> Correcto
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-rose-600">
                        <XCircle size={16} /> Incorrecto
                      </span>
                    )}
                    <p className="mt-1 text-slate-600">{q.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.some((a) => a === -1)}
              className="bg-[#1E3A5F] hover:bg-[#2C5282] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-full transition-all"
            >
              Calificar
            </button>
          ) : (
            <>
              <div className="text-xl font-bold text-[#1E3A5F]">
                Puntuación: {score}/{QUIZ_QUESTIONS.length}
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold px-6 py-3 rounded-full transition-all"
              >
                <RotateCcw size={18} /> Reintentar
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
