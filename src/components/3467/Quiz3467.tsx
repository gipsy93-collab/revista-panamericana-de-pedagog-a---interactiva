import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

const QUESTIONS = [
  {
    question: '¿Cuál fue el tamaño de la muestra en el estudio sobre ciberacoso universitario?',
    options: ['500 estudiantes', '863 estudiantes', '1000 estudiantes', '228 estudiantes'],
    correct: 1,
    explanation: 'El estudio de Vallejos-Parás et al. recolectó datos de 863 estudiantes universitarios de la CDMX.',
  },
  {
    question: '¿Qué porcentaje de la población ha experimentado ciberacoso según los hallazgos?',
    options: ['10%', '15%', '23%', '35%'],
    correct: 2,
    explanation: 'El 23% de los estudiantes universitarios ha experimentado ciberacoso; el 10% vive victimización frecuente.',
  },
  {
    question: '¿Cuál es el comportamiento de ciberacoso más frecuente reportado?',
    options: ['Recibir memes ofensivos', 'Ver rumores sobre compañeros', 'Filtración de fotos/videos', 'Grabación sin autorización'],
    correct: 1,
    explanation: '"Ver rumores sobre compañeros" lideró el ranking con 34.76%, seguido de "Recibir memes ofensivos" con 20.97%.',
  },
  {
    question: 'Según el modelo Logit, ¿qué variable tiene mayor impacto preventivo?',
    options: ['Insinuación (X1)', 'Provocación (X2)', 'Intencionalidad', 'Uso de TIC'],
    correct: 1,
    explanation: 'Controlar la provocación (X2) reduce un 21% la probabilidad de ejercer ciberacoso, el doble de impacto que la insinuación (-11%).',
  },
  {
    question: '¿Cuál es el mensaje central del "Efecto Boomerang" descrito en el estudio?',
    options: [
      'El acosador nunca recibe consecuencias',
      'Ser partícipe de burlas aumenta el riesgo de ser la próxima víctima',
      'Las víctimas se vuelven agresores',
      'El ciberacoso solo afecta a quienes responden'
    ],
    correct: 1,
    explanation: 'El efecto boomerang señala que "si te llevas, te aguantas": ser partícipe de burlas aumenta el riesgo de ser la próxima víctima.',
  },
];

export default function Quiz3467() {
  const [answers, setAnswers] = useState<number[]>(Array(QUESTIONS.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce((acc, a, i) => acc + (a === QUESTIONS[i].correct ? 1 : 0), 0);

  const handleSelect = (qIndex: number, optionIndex: number) => {
    if (submitted) return;
    const next = [...answers];
    next[qIndex] = optionIndex;
    setAnswers(next);
  };

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(-1));
    setSubmitted(false);
  };

  return (
    <section className="bg-[#f5ece0] text-black py-24 px-6 border-b-[12px] border-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <BrutalSticker text="[ EVALUACIÓN ]" color="bg-[#ef4444]" className="text-white mb-6" />
          <h2 className="text-4xl md:text-6xl font-pop uppercase mb-4">Comprueba tu comprensión</h2>
          <p className="text-black/60 text-lg">5 preguntas sobre ciberacoso universitario y prevención.</p>
        </motion.div>

        <div className="space-y-6">
          {QUESTIONS.map((q, qi) => (
            <motion.div
              key={qi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qi * 0.05 }}
            >
              <BrutalCard color="bg-white" className="p-6 md:p-8">
                <p className="font-bold text-xl mb-6">
                  <span className="inline-block bg-black text-white px-3 py-1 font-pop mr-3">0{qi + 1}</span>
                  {q.question}
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
                        className={`text-left px-4 py-3 border-4 font-medium transition-all ${
                          showCorrect
                            ? 'bg-emerald-200 border-emerald-600 text-black'
                            : showWrong
                            ? 'bg-[#ef4444]/20 border-[#ef4444] text-black'
                            : isSelected
                            ? 'bg-[#ef4444] border-black text-white shadow-[4px_4px_0_#000]'
                            : 'bg-white border-black hover:bg-black hover:text-white'
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
                        <span className="flex items-center gap-2 text-emerald-700 font-bold">
                          <CheckCircle size={18} /> Correcto
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-[#ef4444] font-bold">
                          <XCircle size={18} /> Incorrecto
                        </span>
                      )}
                      <p className="mt-1 text-black/70">{q.explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </BrutalCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.some((a) => a === -1)}
              className="bg-[#ef4444] hover:bg-[#dc2626] disabled:opacity-50 disabled:cursor-not-allowed text-white font-pop font-bold px-10 py-4 border-4 border-black shadow-[8px_8px_0_#000] transition-all uppercase text-xl"
            >
              Calificar
            </button>
          ) : (
            <>
              <BrutalCard color="bg-[#0f172a]" className="text-white px-10 py-6 text-center shadow-[10px_10px_0_#ef4444]">
                <div className="text-5xl font-pop">{score}/{QUESTIONS.length}</div>
                <div className="text-sm uppercase tracking-widest text-[#ef4444] mt-2">Puntuación</div>
              </BrutalCard>
              <button
                onClick={reset}
                className="flex items-center gap-2 bg-black hover:bg-white hover:text-black text-white font-pop font-bold px-10 py-4 border-4 border-black shadow-[8px_8px_0_#ef4444] transition-all uppercase text-xl"
              >
                <RotateCcw size={20} /> Reintentar
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
