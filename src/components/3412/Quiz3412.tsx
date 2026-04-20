import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';
import { BrutalCard, PremiumTitle, BrutalSticker } from '../BrutalistLib';

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
    <section className="bg-[#F0F0F0] py-40 px-6 border-t-[10px] border-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <BrutalSticker text="AUTO-EVALUACIÓN" color="bg-[#4F46E5]" className="text-white mb-6 !rotate-0" />
          <PremiumTitle className="items-center" subtitle="VALIDACIÓN DE CONOCIMIENTO">Examen de Terreno Académico</PremiumTitle>
          <p className="mt-6 font-mono text-[10px] uppercase font-black opacity-60">Basado en el rigor del estudio empírico de la UCA</p>
        </div>

        <div className="space-y-10">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <BrutalCard
              key={qi}
              color="bg-white"
              className={`border-4 transition-all ${submitted && answers[qi] === q.correct ? 'shadow-[8px_8px_0_0_#10b981]' : submitted ? 'shadow-[8px_8px_0_0_#ef4444]' : 'shadow-[12px_12px_0_0_#000]'}`}
            >
              <div className="flex gap-6 mb-8">
                <span className="w-12 h-12 bg-black text-white shrink-0 flex items-center justify-center font-display text-2xl font-black">
                  {qi + 1}
                </span>
                <p className="text-2xl font-display uppercase font-black leading-tight tracking-tighter">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.options.map((opt, oi) => {
                  const isSelected = answers[qi] === oi;
                  const isCorrect = oi === q.correct;
                  const showCorrect = submitted && isCorrect;
                  const showWrong = submitted && isSelected && !isCorrect;
                  
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(qi, oi)}
                      className={`text-left px-6 py-4 border-4 transition-all font-display uppercase font-black text-sm relative overflow-hidden ${
                        showCorrect
                          ? 'bg-emerald-500 border-black text-white'
                          : showWrong
                          ? 'bg-rose-500 border-black text-white'
                          : isSelected
                          ? 'bg-[#4F46E5] border-black text-white'
                          : 'bg-white border-black text-black hover:bg-zinc-100'
                      }`}
                    >
                      {opt}
                      {showCorrect && <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2" size={20} />}
                      {showWrong && <XCircle className="absolute right-4 top-1/2 -translate-y-1/2" size={20} />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-8 p-6 bg-zinc-100 border-2 border-black border-dashed"
                  >
                    <span className="block font-mono text-[9px] uppercase font-black mb-2 opacity-60 italic">Retroalimentación Teórica:</span>
                    <p className="text-lg font-serif italic text-black/80">{q.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </BrutalCard>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-8">
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.some((a) => a === -1)}
              className="group relative bg-[#4F46E5] text-white px-12 py-6 border-4 border-black font-display text-3xl uppercase font-black shadow-[10px_10px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0_0_#000] transition-all disabled:opacity-50 disabled:translate-0 disabled:shadow-[4px_4px_0_0_#000]"
            >
              Calificar Examen_
            </button>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-10 w-full"
            >
              <div className="bg-black text-white border-8 border-black p-12 shadow-[20px_20px_0_0_#4F46E5] text-center w-full max-w-2xl relative rotate-1">
                <Award className="absolute -top-10 -left-10 w-24 h-24 text-[#FDE047]" />
                <span className="block font-mono text-xs uppercase font-black mb-4 opacity-60">Resultado de la Validación:</span>
                <div className="text-[10rem] font-display font-black leading-none mb-4 italic">
                  {score}/{QUIZ_QUESTIONS.length}
                </div>
                <p className="text-2xl font-display uppercase font-black">
                  {score === QUIZ_QUESTIONS.length ? 'Dominio Académico Total' : 'Revisión Sugerida'}
                </p>
              </div>
              
              <button
                onClick={reset}
                className="flex items-center gap-4 bg-white border-4 border-black px-8 py-4 font-display uppercase font-black shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#000] transition-all"
              >
                <RotateCcw size={24} /> Volver a Intentar
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
