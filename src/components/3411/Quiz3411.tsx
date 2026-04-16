import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';

export default function Quiz3411() {
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
    <section className="bg-[#0F172A] text-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-2">Comprueba tu comprensión</h2>
          <p className="text-slate-400">5 preguntas sobre los hallazgos del estudio.</p>
        </motion.div>

        <div className="space-y-6">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <motion.div
              key={qi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qi * 0.05 }}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-6"
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
                          ? 'bg-emerald-600/20 border-emerald-500 text-emerald-100'
                          : showWrong
                          ? 'bg-rose-600/20 border-rose-500 text-rose-100'
                          : isSelected
                          ? 'bg-blue-600/20 border-blue-500 text-blue-100'
                          : 'bg-slate-900 border-slate-600 text-slate-300 hover:border-slate-400'
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
                    className="mt-4 text-sm text-slate-300"
                  >
                    {answers[qi] === q.correct ? (
                      <span className="flex items-center gap-2 text-emerald-400">
                        <CheckCircle size={16} /> Correcto
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-rose-400">
                        <XCircle size={16} /> Incorrecto
                      </span>
                    )}
                    <p className="mt-1">{q.explanation}</p>
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
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-full transition-all"
            >
              Calificar
            </button>
          ) : (
            <>
              <div className="text-xl font-bold">
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
