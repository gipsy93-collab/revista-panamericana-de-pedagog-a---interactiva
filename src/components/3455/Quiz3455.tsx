import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

const QUESTIONS = [
  {
    question: '¿Cuántos docentes en formación participaron en el estudio de Chan-Chi & Poot-May?',
    options: ['28', '35', '57', '61'],
    correct: 2,
    explanation: 'La muestra estuvo conformada por 57 docentes en formación (35 mujeres y 22 hombres).',
  },
  {
    question: '¿Cuál es el valor predominante identificado en los futuros docentes?',
    options: ['Respeto', 'Responsabilidad', 'Compromiso', 'Amabilidad'],
    correct: 1,
    explanation: 'Responsabilidad fue el valor más mencionado con un 52.6%, seguido de Respeto (49.1%) y Compromiso (38.6%).',
  },
  {
    question: 'Según el marco teórico, ¿cuál es la dimensión que da sentido a las demás?',
    options: ['Física', 'Psíquica', 'Social', 'Personal'],
    correct: 3,
    explanation: 'La Dimensión Personal es el "centro" que da sentido a las demás dimensiones del ser.',
  },
  {
    question: '¿Qué porcentaje de participantes admite desafíos en la gestión emocional y falta de confianza?',
    options: ['38.6%', '49.1%', '52.6%', '61%'],
    correct: 3,
    explanation: 'El 61% de los participantes admite que el mayor desafío es la falta de confianza y la gestión de sus propias emociones.',
  },
  {
    question: '¿Cuál es la propuesta central del estudio para la formación docente?',
    options: [
      'Priorizar el enfoque cognitivo',
      'Incluir espacios curriculares para el desarrollo humano y emocional',
      'Aumentar las horas de práctica docente',
      'Eliminar la teoría pedagógica de la malla'
    ],
    correct: 1,
    explanation: 'Los autores proponen que las mallas curriculares incluyan espacios específicos dedicados al desarrollo humano y emocional.',
  },
];

export default function Quiz3455() {
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
          <BrutalSticker text="[ EVALUACIÓN ]" color="bg-[#2D6A4F]" className="text-white mb-6" />
          <h2 className="text-4xl md:text-6xl font-pop uppercase mb-4">Comprueba tu comprensión</h2>
          <p className="text-black/60 text-lg">5 preguntas sobre la dimensión personal para la cultura de paz.</p>
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
                            ? 'bg-[#B7E4C7] border-[#2D6A4F] text-black'
                            : showWrong
                            ? 'bg-[#e81e61]/20 border-[#e81e61] text-black'
                            : isSelected
                            ? 'bg-[#2D6A4F] border-black text-white shadow-[4px_4px_0_#000]'
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
                        <span className="flex items-center gap-2 text-[#2D6A4F] font-bold">
                          <CheckCircle size={18} /> Correcto
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 text-[#e81e61] font-bold">
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
              className="bg-[#2D6A4F] hover:bg-[#1B4332] disabled:opacity-50 disabled:cursor-not-allowed text-white font-pop font-bold px-10 py-4 border-4 border-black shadow-[8px_8px_0_#000] transition-all uppercase text-xl"
            >
              Calificar
            </button>
          ) : (
            <>
              <BrutalCard color="bg-black" className="text-white px-10 py-6 text-center">
                <div className="text-5xl font-pop">{score}/{QUESTIONS.length}</div>
                <div className="text-sm uppercase tracking-widest text-[#B7E4C7] mt-2">Puntuación</div>
              </BrutalCard>
              <button
                onClick={reset}
                className="flex items-center gap-2 bg-[#e81e61] hover:bg-[#c4184e] text-white font-pop font-bold px-10 py-4 border-4 border-black shadow-[8px_8px_0_#000] transition-all uppercase text-xl"
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
