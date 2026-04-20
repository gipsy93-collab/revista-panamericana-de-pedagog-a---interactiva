import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw, Award, ShieldAlert } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';
import { BrutalCard, PremiumTitle, BrutalSticker } from '../BrutalistLib';

export default function Quiz3453() {
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
    <section className="bg-[#FAF9F6] py-40 px-6 border-t-[15px] border-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <BrutalSticker text="VALIDACIÓN ACADÉMICA" color="bg-[#E11D48]" className="text-white mb-6 !rotate-0" />
          <PremiumTitle className="items-center" subtitle="ESTUDIO FENOMENOLÓGICO RPP">Desafío de Comprensión</PremiumTitle>
          <p className="mt-8 font-display uppercase font-black text-sm tracking-widest text-black/50 italic">Evaluación sobre el rol docente en situaciones de riesgo_</p>
        </div>

        <div className="space-y-12">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <BrutalCard
              key={qi}
              color="bg-white"
              className={`border-4 transition-all duration-500 ${submitted && answers[qi] === q.correct ? 'shadow-[12px_12px_0_0_#10b981]' : submitted ? 'shadow-[12px_12px_0_0_#e11d48]' : 'shadow-[15px_15px_0_0_#000]'}`}
            >
              <div className="flex gap-8 mb-10 items-start">
                <span className="w-16 h-16 bg-black text-white shrink-0 flex items-center justify-center font-display text-4xl font-black rotate-[-5deg]">
                  {qi + 1}
                </span>
                <p className="text-2xl md:text-3xl font-display uppercase font-black leading-none tracking-tighter pt-2">
                  {q.question}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {q.options.map((opt, oi) => {
                  const isSelected = answers[qi] === oi;
                  const isCorrect = oi === q.correct;
                  const showCorrect = submitted && isCorrect;
                  const showWrong = submitted && isSelected && !isCorrect;
                  
                  return (
                    <button
                      key={oi}
                      onClick={() => handleSelect(qi, oi)}
                      className={`text-left px-8 py-6 border-4 transition-all font-display uppercase font-black text-sm relative overflow-hidden group ${
                        showCorrect
                          ? 'bg-emerald-500 border-black text-white translate-x-[4px] translate-y-[4px] shadow-none'
                          : showWrong
                          ? 'bg-[#E11D48] border-black text-white'
                          : isSelected
                          ? 'bg-black border-black text-white'
                          : 'bg-white border-black text-black hover:bg-zinc-100 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000]'
                      } ${!submitted && !isSelected ? 'shadow-[4px_4px_0_0_#000]' : ''}`}
                    >
                      <span className="relative z-10">{opt}</span>
                      {showCorrect && <CheckCircle className="absolute right-6 top-1/2 -translate-y-1/2" size={28} />}
                      {showWrong && <XCircle className="absolute right-6 top-1/2 -translate-y-1/2" size={28} />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-10 p-8 bg-zinc-50 border-4 border-black border-dashed relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                       <ShieldAlert size={80} />
                    </div>
                    <span className="block font-mono text-[10px] uppercase font-black mb-4 text-[#E11D48] tracking-widest italic">Análisis Teórico del Autor //</span>
                    <p className="text-xl font-serif italic text-black/90 leading-relaxed border-l-8 border-[#E11D48] pl-8">
                      {q.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </BrutalCard>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center gap-10">
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.some((a) => a === -1)}
              className="group relative bg-[#E11D48] text-white px-16 py-8 border-4 border-black font-display text-4xl uppercase font-black shadow-[15px_15px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[20px_20px_0_0_#000] transition-all disabled:opacity-40 disabled:translate-y-0 disabled:shadow-[5px_5px_0_0_#000]"
            >
              Finalizar Auditoría_
            </button>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-12 w-full"
            >
              <div className="bg-white border-[12px] border-black p-16 shadow-[35px_35px_0_0_#E11D48] text-center w-full max-w-3xl relative rotate-[-1deg]">
                <Award className="absolute -top-12 -right-12 w-32 h-32 text-black bg-[#FDE047] border-4 border-black p-4 rounded-full shadow-[8px_8px_0_0_#000]" />
                <span className="block font-mono text-sm uppercase font-black mb-6 tracking-[0.5em] opacity-40">CALIFICACIÓN FINAL</span>
                <div className="text-[12rem] font-display font-black leading-none mb-4 italic text-black drop-shadow-[10px_10px_0_#E11D48]">
                  {score}/{QUIZ_QUESTIONS.length}
                </div>
                <p className="text-3xl font-display uppercase font-black tracking-tighter">
                  {score === QUIZ_QUESTIONS.length ? 'Dominio Profesional de Protocolo' : 'Se Requiere Nivelación Normativa'}
                </p>
                <div className="mt-10 flex justify-center gap-4">
                   {[...Array(QUIZ_QUESTIONS.length)].map((_, i) => (
                      <div key={i} className={`h-4 w-12 border-2 border-black ${i < score ? 'bg-[#E11D48]' : 'bg-zinc-200'}`} />
                   ))}
                </div>
              </div>
              
              <button
                onClick={reset}
                className="flex items-center gap-6 bg-black text-white border-4 border-black px-12 py-6 font-display text-xl uppercase font-black shadow-[8px_8px_0_0_#E11D48] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[12px_12px_0_0_#E11D48] transition-all"
              >
                <RotateCcw size={32} /> Reintentar Validación
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
