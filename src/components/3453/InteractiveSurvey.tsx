import { useState } from 'react';
import { Target, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export default function InteractiveSurvey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      q: '¿Quién inicia el protocolo de actuación cuando se detecta un caso de consumo?',
      opts: ['El director', 'El profesor jefe', 'El equipo psicosocial', 'Carabineros'],
      correct: 1,
      exp: 'El protocolo comienza con el profesor jefe, quien realiza la entrevista inicial y contacta al apoderado.'
    },
    {
      q: '¿Cuál es la principal limitación metodológica del estudio?',
      opts: ['Solo incluye estudiantes', 'Muestra reducida de 8 docentes', 'No tiene marco teórico'],
      correct: 1,
      exp: 'La muestra de solo 8 docentes limita la generalización, y además solo se incluyó la perspectiva docente.'
    },
    {
      q: '¿Qué porcentaje de profesores jefes había acompañado al menos un caso de consumo?',
      opts: ['75%', '50%', '100%'],
      correct: 2,
      exp: 'El 100% (8/8) de los profesores jefes entrevistados había acompañado al menos a un estudiante.'
    }
  ];

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section id="quiz" className="relative w-full max-w-4xl mx-auto px-6 z-10 py-24 pb-32 text-black font-pop">
      <div className="flex flex-col items-center mb-16 text-center">
        <BrutalSticker text="[ EVALUACIÓN ]" color="bg-[#34d399]" className="text-black mb-8" />
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 leading-[0.9]">
          Evaluación de <span className="text-[#34d399]">Conocimientos</span>
        </h2>
      </div>

      <BrutalCard color="bg-white" className="border-[6px]">
        {!showResults ? (
          <div>
            <div className="flex justify-between items-end mb-12 border-b-4 border-black pb-8">
              <span className="font-black text-3xl uppercase tracking-tighter text-[#34d399]">
                Pregunta 0{currentQuestion + 1}
              </span>
              <div className="flex gap-2">
                {questions.map((_, i) => (
                    <div key={i} className={`w-4 h-4 border-2 border-black ${i <= currentQuestion ? 'bg-[#34d399]' : 'bg-white'}`} />
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black mb-12 leading-tight uppercase">
              {questions[currentQuestion].q}
            </h3>

            <div className="grid gap-4">
              {questions[currentQuestion].opts.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full text-left p-6 border-4 border-black font-black uppercase text-lg transition-all hover:bg-black hover:text-white hover:translate-x-2 shadow-[4px_4px_0_#000] hover:shadow-none"
                >
                  <span className="bg-black text-white px-2 mr-4">{String.fromCharCode(65 + idx)}</span> {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block p-8 border-4 border-black bg-[#F0F0F0] mb-8 shadow-[10px_10px_0_#000]">
              {score === questions.length ? (
                <CheckCircle2 size={80} className="text-[#34d399] mx-auto mb-6" />
              ) : (
                <XCircle size={80} className="text-[#fbbf24] mx-auto mb-6" />
              )}
              <h3 className="text-6xl font-display uppercase mb-4">
                {score}/{questions.length}
              </h3>
              <p className="font-bold text-xl uppercase tracking-tighter">
                {score === questions.length ? '¡Excelente Dominio!' : 'Revisión Necesaria'}
              </p>
            </div>

            <p className="font-bold text-lg mb-12 max-w-lg mx-auto leading-tight">
              {score === questions.length 
                ? 'Tienes claro el modelo de Arbex, el flujo del protocolo de la Circular N° 482 y las tensiones sociopolíticas respecto a las drogas.' 
                : 'Te sugerimos repasar la Discusión respecto a cómo los protocolos escolares pueden operar en una lógica punitiva.'}
            </p>

            <button 
              onClick={resetQuiz}
              className="group flex items-center gap-4 mx-auto px-10 py-5 bg-black text-white font-black uppercase text-xl border-4 border-black hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_#34d399] hover:shadow-none"
            >
              <RotateCcw className="group-hover:rotate-[-45deg] transition-transform" />
              Intentar de nuevo
            </button>
          </div>
        )}
      </BrutalCard>
    </section>
  );
}
