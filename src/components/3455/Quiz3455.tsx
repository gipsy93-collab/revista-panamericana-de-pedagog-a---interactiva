import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw, Award, Heart } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';
import { BrutalCard, PremiumTitle, BrutalSticker } from '../BrutalistLib';

export default function Quiz3455() {
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
    <section className="bg-[#F8F7FF] py-48 px-6 border-t-[12px] border-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-32">
          <BrutalSticker text="AUDITORÍA DE FORMACIÓN" color="bg-[#7C3AED]" className="text-white mb-8 !rotate-0 shadow-[8px_8px_0_0_#000]" />
          <PremiumTitle className="items-center" subtitle="ESTUDIO CHAN-CHI & POOT-MAY">Desafío de Autenticidad</PremiumTitle>
          <p className="mt-10 font-mono text-[11px] uppercase font-black text-[#7C3AED] tracking-[0.5em] italic">Validación conceptual sobre la dimensión personal_</p>
        </div>

        <div className="space-y-16">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <BrutalCard
              key={qi}
              color="bg-white"
              className={`border-[6px] transition-all duration-400 ${submitted && answers[qi] === q.correct ? 'shadow-[15px_15px_0_0_#10b981]' : submitted ? 'shadow-[15px_15px_0_0_#ef4444]' : 'shadow-[20px_20px_0_0_#000]'}`}
            >
              <div className="flex gap-10 mb-12 items-start">
                <div className="w-20 h-20 bg-black text-white shrink-0 flex items-center justify-center font-display text-5xl font-black rotate-3">
                   {qi + 1}
                </div>
                <p className="text-3xl md:text-4xl font-display uppercase font-black leading-none tracking-tighter pt-4">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {q.options.map((opt, oi) => {
                  const isSelected = answers[qi] === oi;
                  const isCorrect = oi === q.correct;
                  const showCorrect = submitted && isCorrect;
                  const showWrong = submitted && isSelected && !isCorrect;
                  
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(qi, oi)}
                      className={`text-left px-10 py-8 border-4 transition-all font-display uppercase font-black text-lg relative overflow-hidden group ${
                        showCorrect
                          ? 'bg-emerald-500 border-black text-white translate-x-[6px] translate-y-[6px] shadow-none'
                          : showWrong
                          ? 'bg-rose-500 border-black text-white'
                          : isSelected
                          ? 'bg-[#7C3AED] border-black text-white shadow-none translate-x-[4px] translate-y-[4px]'
                          : 'bg-white border-black text-black hover:bg-[#7C3AED]/10 shadow-[8px_8px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                      }`}
                    >
                      <span className="relative z-10">{opt}</span>
                      {showCorrect && <CheckCircle className="absolute right-10 top-1/2 -translate-y-1/2" size={32} />}
                      {showWrong && <XCircle className="absolute right-10 top-1/2 -translate-y-1/2" size={32} />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-12 p-12 bg-zinc-50 border-4 border-black border-dashed relative overflow-hidden"
                  >
                    <Heart className="absolute -top-6 -right-6 w-32 h-32 opacity-10 text-[#7C3AED] rotate-12" />
                    <span className="block font-mono text-[10px] uppercase font-black mb-6 text-[#7C3AED] tracking-[0.4em] italic font-bold">Feedback Académico //</span>
                    <p className="text-2xl font-serif italic text-black leading-relaxed border-l-[10px] border-[#7C3AED] pl-10 font-medium">
                      {q.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </BrutalCard>
          ))}
        </div>

        <div className="mt-40 flex flex-col items-center gap-16">
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.some((a) => a === -1)}
              className="group relative bg-[#7C3AED] text-white px-24 py-10 border-6 border-black font-display text-5xl uppercase font-black shadow-[20px_20px_0_0_#000] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[30px_30px_0_0_#000] transition-all disabled:opacity-40 disabled:translate-y-0"
            >
              Auditar Perfil_
            </button>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-20 w-full"
            >
              <div className="bg-white border-[16px] border-black p-24 shadow-[50px_50px_0_0_#7C3AED] text-center w-full max-w-5xl relative rotate-1">
                <Award className="absolute -top-20 -right-20 w-40 h-40 text-black bg-yellow-400 border-[6px] border-black p-6 rounded-full shadow-[12px_12px_0_0_#000] animate-bounce" />
                <span className="block font-mono text-sm uppercase font-black mb-10 tracking-[0.8em] opacity-40">CALIFICACIÓN DE HUMANIDAD ACADÉMICA</span>
                <div className="text-[18rem] font-display font-black leading-none mb-8 italic text-black drop-shadow-[20px_20px_0_#7C3AED] tracking-tighter">
                  {score}/{QUIZ_QUESTIONS.length}
                </div>
                <p className="text-5xl font-display uppercase font-black tracking-tighter italic text-[#7C3AED]">
                  {score === QUIZ_QUESTIONS.length ? 'Identidad Docente Íntegra' : 'Perfil en Desarrollo Emocional'}
                </p>
                <div className="mt-16 flex justify-center gap-8">
                   {[...Array(QUIZ_QUESTIONS.length)].map((_, i) => (
                      <div key={i} className={`h-8 w-24 border-6 border-black ${i < score ? 'bg-[#7C3AED]' : 'bg-zinc-100 shadow-inner'}`} />
                   ))}
                </div>
              </div>
              
              <button
                onClick={reset}
                className="flex items-center gap-8 bg-black text-white border-4 border-black px-16 py-8 font-display text-3xl uppercase font-black shadow-[12px_12px_0_0_#7C3AED] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[18px_18px_0_0_#7C3AED] transition-all active:translate-x-0 cursor-pointer"
              >
                <RotateCcw size={40} /> Reiniciar Validación
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
