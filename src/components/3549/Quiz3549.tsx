import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

const QUESTIONS = [
  {
    question: '¿Cuántos años de diferencia hay entre Rousseau (1712-1778) y la Nueva Escuela Mexicana (2019)?',
    options: ['Aproximadamente 100 años', 'Aproximadamente 175 años', 'Aproximadamente 250 años', 'Aproximadamente 300 años'],
    correct: 2,
    explanation: 'El interactivo destaca que la NEM retoma principios de pedagogos que escribieron hace aproximadamente 250 años.',
  },
  {
    question: '¿Qué pedagogo conceptualizó el principio de "Cabeza, Corazón y Mano"?',
    options: ['Rousseau', 'Pestalozzi', 'Dewey', 'Freire'],
    correct: 1,
    explanation: 'Pestalozzi (1801) propuso el enfoque integral de "cabeza, corazón y mano", hoy reempacado como "Enfoque Holístico" en la NEM.',
  },
  {
    question: '¿Qué término de la NEM está vinculado con John Dewey?',
    options: ['Autonomía del estudiante', 'Proyectos sociocomunitarios', 'Pedagogía crítica', 'Pausas activas'],
    correct: 1,
    explanation: 'Dewey propuso "aprender haciendo"; en la NEM este principio se manifiesta como "Proyectos Sociocomunitarios" o "Proyectos Comunitarios".',
  },
  {
    question: 'Según el artículo, ¿cuál es el problema real que enfrenta la NEM?',
    options: [
      'Falta de ideas pedagógicas innovadoras',
      'La incapacidad de implementarlas frente a la domesticación burocrática',
      'El rechazo de los docentes a los nuevos libros de texto',
      'La falta de financiamiento federal'
    ],
    correct: 1,
    explanation: 'El artículo sostiene que el problema no es la falta de ideas, sino la incapacidad de implementarlas y resistir la domesticación burocrática del aula.',
  },
  {
    question: '¿Cuál es el año límite de proyección de la Nueva Escuela Mexicana mencionado en el artículo?',
    options: ['2030', '2035', '2042', '2050'],
    correct: 2,
    explanation: 'El artículo señala que la NEM se proyecta hasta 2042, pero advierte que las reformas educativas en México suelen durar lo que dura cada administración.',
  },
];

export default function Quiz3549() {
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
    <section className="bg-white text-black py-24 px-6 border-b-[12px] border-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-block bg-[#fccb06] text-black px-6 py-2 font-pop text-xl uppercase border-4 border-black shadow-[4px_4px_0_#000] mb-6">
            [ Evaluación ]
          </span>
          <h2 className="text-4xl md:text-6xl font-pop uppercase mb-4">Comprueba tu comprensión</h2>
          <p className="text-black/60 text-lg">5 preguntas sobre la arqueología pedagógica de los Libros de Texto Gratuitos.</p>
        </motion.div>

        <div className="space-y-6">
          {QUESTIONS.map((q, qi) => (
            <motion.div
              key={qi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: qi * 0.05 }}
              className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_#000]"
            >
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
                          ? 'bg-[#5bc2a8] border-[#0f3896] text-black'
                          : showWrong
                          ? 'bg-[#e81e61]/20 border-[#e81e61] text-black'
                          : isSelected
                          ? 'bg-[#fccb06] border-black text-black shadow-[4px_4px_0_#000]'
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
                      <span className="flex items-center gap-2 text-[#0f3896] font-bold">
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
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answers.some((a) => a === -1)}
              className="bg-[#fccb06] hover:bg-[#eab305] disabled:opacity-50 disabled:cursor-not-allowed text-black font-pop font-bold px-10 py-4 border-4 border-black shadow-[8px_8px_0_#000] transition-all uppercase text-xl"
            >
              Calificar
            </button>
          ) : (
            <>
              <div className="bg-[#0f3896] text-white px-10 py-6 text-center border-4 border-black shadow-[10px_10px_0_#fccb06]">
                <div className="text-5xl font-pop">{score}/{QUESTIONS.length}</div>
                <div className="text-sm uppercase tracking-widest text-[#fccb06] mt-2">Puntuación</div>
              </div>
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
