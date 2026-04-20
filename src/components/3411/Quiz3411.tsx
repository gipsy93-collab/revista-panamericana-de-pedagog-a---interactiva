import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw, Brain, Terminal } from 'lucide-react';
import { QUIZ_QUESTIONS } from './constants';
import { BrutalSticker } from '../BrutalistLib';

export default function Quiz3411() {
  const [answers, setAnswers] = useState<number[]>(Array(QUIZ_QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce((acc, a, i) => acc + (a === QUIZ_QUESTIONS[i].correct ? 1 : 0), 0);
  const isFinished = answers.every(a => a !== -1);

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
    <section className="bg-black text-white py-32 px-6 relative overflow-hidden" id="quiz-section">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-600/5 skew-x-[-20deg] translate-x-32" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-24">
           <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                 <Terminal size={16} className="text-rose-500" />
                 <span className="font-mono text-xs font-black uppercase text-rose-500 tracking-[0.4em]">Knowledge_Audit_v1</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none">
                Midiendo el <span className="text-rose-600 italic">Rigor</span>
              </h2>
           </div>
           <div className="bg-zinc-900 border-4 border-white/10 p-6 font-mono text-[10px] uppercase font-black italic text-white/40">
              Validación de hallazgos académicos // N-3411
           </div>
        </div>

        <div className="space-y-12">
          {QUIZ_QUESTIONS.map((q, qi) => (
            <div
              key={qi}
              className="bg-zinc-950 border-[6px] border-zinc-800 p-8 md:p-12 hover:border-rose-600 transition-colors group relative"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-black border-4 border-zinc-800 flex items-center justify-center font-display text-xl font-black group-hover:border-rose-600 group-hover:text-rose-600 transition-colors">
                 {qi + 1}
              </div>
              
              <p className="font-display text-2xl uppercase font-black mb-8 leading-tight">
                {q.question}
              </p>

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
                      className={`text-left px-6 py-4 border-4 transition-all font-mono text-xs uppercase font-black flex justify-between items-center ${
                        showCorrect
                          ? 'bg-rose-600 border-black text-white shadow-[6px_6px_0_0_#fff]'
                          : showWrong
                          ? 'bg-zinc-900 border-rose-600 text-rose-600'
                          : isSelected
                          ? 'bg-white border-black text-black shadow-[6px_6px_0_0_#e11d48]'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-500 hover:text-white'
                      }`}
                    >
                      <span>{opt}</span>
                      {showCorrect && <CheckCircle size={14} />}
                      {showWrong && <XCircle size={14} />}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-white/5 border-l-8 border-rose-600"
                  >
                    <p className="text-sm font-sans font-bold uppercase text-rose-500 mb-2">Análisis Post-Respuesta:</p>
                    <p className="text-sm font-sans font-bold opacity-60 leading-relaxed italic">{q.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-12 bg-zinc-900 border-[8px] border-black p-12 md:p-20 shadow-[20px_20px_0_0_#e11d48]">
          {!submitted ? (
            <div className="w-full flex flex-col items-center gap-8">
               <div className="font-mono text-xs font-black uppercase text-zinc-500">Estado: {answers.filter(a => a !== -1).length} / {QUIZ_QUESTIONS.length} Respondidas</div>
               <button
                 onClick={() => setSubmitted(true)}
                 disabled={!isFinished}
                 className="bg-white text-black px-16 py-6 font-display text-3xl uppercase font-black border-4 border-black shadow-[12px_12px_0_0_#e11d48] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all disabled:opacity-20 flex items-center gap-4 group"
               >
                 Procesar Audit <Brain className="group-hover:rotate-12 transition-transform" />
               </button>
            </div>
          ) : (
            <div className="w-full text-center space-y-12">
              <div>
                <span className="font-mono text-xs font-black uppercase text-rose-600 block mb-4">// FINAL_SCORE_REPORT</span>
                <div className="text-[10rem] md:text-[14rem] font-display font-black leading-none italic outline-text">
                  {score}<span className="text-6xl md:text-8xl not-italic opacity-20">/{QUIZ_QUESTIONS.length}</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <button
                  onClick={reset}
                  className="flex items-center justify-center gap-3 bg-zinc-800 text-white px-10 py-5 font-display text-xl uppercase font-black border-4 border-black hover:bg-black transition-colors"
                >
                  <RotateCcw size={24} /> Nueva Auditoría
                </button>
                <div className="px-10 py-5 border-4 border-rose-600 font-mono text-sm font-black uppercase flex items-center justify-center italic text-rose-500">
                  Respuesta Institucional: {score === QUIZ_QUESTIONS.length ? 'ÓPTIMA' : 'REQUIERE REVISIÓN'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
