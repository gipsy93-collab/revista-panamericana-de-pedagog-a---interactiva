import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { ARTICLE_DATA } from './constants';

export default function Quiz3562() {
  const questions = ARTICLE_DATA.quiz;
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [showResult, setShowResult] = useState(false);

  const answeredCount = Object.values(answers).filter((a) => a !== null).length;
  const correctCount = questions.reduce((acc, q, i) => (answers[i] === q.correct ? acc + 1 : acc), 0);

  const handleSelect = (qIndex: number, optIndex: number) => {
    if (showResult) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleReset = () => {
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">Quiz de comprensión</h2>
        <p className="text-slate-600 mb-6">Responde las siguientes preguntas basadas en el artículo interactivo.</p>

        <div className="space-y-6">
          {questions.map((q, qi) => (
            <div key={qi} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-medium text-slate-900 mb-3">
                {qi + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oi) => {
                  const isSelected = answers[qi] === oi;
                  const isCorrect = q.correct === oi;
                  const showCorrectness = showResult;
                  let btnClasses =
                    'w-full text-left px-4 py-3 rounded-lg border transition flex items-center justify-between ';
                  if (showCorrectness) {
                    if (isCorrect) {
                      btnClasses += 'bg-emerald-50 border-emerald-200 text-emerald-800';
                    } else if (isSelected) {
                      btnClasses += 'bg-rose-50 border-rose-200 text-rose-800';
                    } else {
                      btnClasses += 'bg-white border-slate-200 text-slate-700';
                    }
                  } else {
                    btnClasses += isSelected
                      ? 'bg-rose-50 border-rose-300 text-rose-900'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-rose-300';
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(qi, oi)}
                      className={btnClasses}
                      disabled={showResult}
                    >
                      <span>{opt}</span>
                      {showCorrectness && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      {showCorrectness && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Progreso: {answeredCount} / {questions.length}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
            >
              <RotateCcw className="w-4 h-4" />
              Reiniciar
            </button>
            <button
              onClick={() => setShowResult(true)}
              disabled={answeredCount < questions.length}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition ${
                answeredCount < questions.length
                  ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  : 'bg-rose-600 text-white hover:bg-rose-700'
              }`}
            >
              Ver resultados
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 p-5 rounded-xl bg-rose-50 border border-rose-100"
            >
              <p className="text-slate-900 font-medium">
                Obtuviste {correctCount} de {questions.length} respuestas correctas.
              </p>
              <p className="text-slate-600 text-sm mt-1">
                {correctCount === questions.length
                  ? '¡Excelente comprensión del artículo!'
                  : 'Revisa las secciones resaltadas para reforzar tu comprensión.'}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
