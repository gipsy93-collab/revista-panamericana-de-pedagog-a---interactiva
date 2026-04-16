import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';
import { useLanguage } from '../../LanguageContext';
import { CheckCircle2, AlertCircle, RefreshCcw, ArrowRight } from 'lucide-react';

export const Quiz3476 = () => {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0); // 0: Intro, 1: Questions, 2: Result
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const quizData = t.pacheco.quiz;

  const handleAnswer = (optionScore: number, optionFeedback: string) => {
    setScore(score + optionScore);
    setFeedback(optionFeedback);
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentStep(2);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setCurrentQuestion(0);
    setScore(0);
    setFeedback(null);
    setShowFeedback(false);
  };

  return (
    <section className="py-24 px-6 bg-[#fbbf24] border-t-[12px] border-black">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {/* STEP 0: INTRO */}
          {currentStep === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <BrutalSticker text="GAMIFICACIÓN // TEST" color="bg-black" className="text-white mb-8" />
              <h2 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-none text-black">
                {quizData.title}
              </h2>
              <p className="font-mono text-xl mb-12 uppercase font-bold text-black/70">
                {quizData.intro}
              </p>
              <button
                onClick={() => setCurrentStep(1)}
                className="bg-black text-white px-12 py-6 font-pop text-2xl uppercase border-4 border-black shadow-[10px_10px_0_#fff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Comenzar Diagnóstico
              </button>
            </motion.div>
          )}

          {/* STEP 1: QUESTIONS */}
          {currentStep === 1 && (
            <motion.div
              key="questions"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="mb-8 flex justify-between items-end">
                <span className="font-pop font-black text-4xl">0{currentQuestion + 1}</span>
                <div className="w-full h-4 bg-black/10 mx-6 border-2 border-black">
                   <motion.div 
                     className="h-full bg-black" 
                     initial={{ width: 0 }}
                     animate={{ width: `${((currentQuestion + 1) / quizData.questions.length) * 100}%` }}
                   />
                </div>
                <span className="font-pop font-black text-xl whitespace-nowrap">/ 0{quizData.questions.length}</span>
              </div>

              <BrutalCard color="bg-white" className="p-12 mb-8">
                <h3 className="font-display text-3xl md:text-4xl italic mb-12">
                  {quizData.questions[currentQuestion].text}
                </h3>

                <div className="grid gap-6">
                  {quizData.questions[currentQuestion].options.map((opt: any, i: number) => (
                    <button
                      key={i}
                      disabled={showFeedback}
                      onClick={() => handleAnswer(opt.score, opt.feedback)}
                      className={`text-left p-6 border-4 border-black font-pop text-xl uppercase transition-all flex justify-between items-center group
                        ${showFeedback ? 'opacity-50 grayscale' : 'hover:bg-black hover:text-white hover:translate-x-2'}
                      `}
                    >
                      {opt.text}
                      <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  ))}
                </div>
              </BrutalCard>

              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black text-white p-8 border-4 border-white shadow-[10px_10px_0_#000] mb-8"
                >
                  <div className="flex gap-4 items-start">
                    <AlertCircle className="text-[#fbbf24] shrink-0" size={32} />
                    <div>
                      <h4 className="font-pop font-black uppercase text-xl mb-2">Retroinformación de Investigación:</h4>
                      <p className="font-mono text-lg uppercase leading-tight">{feedback}</p>
                    </div>
                  </div>
                  <button
                    onClick={nextQuestion}
                    className="mt-8 w-full bg-[#fbbf24] text-black py-4 font-pop font-black uppercase text-xl border-2 border-black hover:bg-white transition-colors"
                  >
                    Siguiente Pregunta
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* STEP 2: RESULT */}
          {currentStep === 2 && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="inline-block p-12 bg-white border-8 border-black shadow-[20px_20px_0_#000] mb-12">
                <CheckCircle2 size={80} className="mx-auto mb-6 text-green-600" />
                <h2 className="font-display text-5xl uppercase mb-4">
                  {score >= 20 ? quizData.results.high.title : quizData.results.low.title}
                </h2>
                <p className="font-mono text-xl uppercase font-bold max-w-lg mx-auto leading-tight">
                    {score >= 20 ? quizData.results.high.desc : quizData.results.low.desc}
                </p>
                <div className="mt-8 pt-8 border-t-4 border-black border-dashed">
                    <span className="font-pop text-xs uppercase opacity-50">Puntaje de Inclusión:</span>
                    <div className="text-7xl font-display">{score}/30</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <button
                  onClick={resetQuiz}
                  className="bg-black text-white px-10 py-5 font-pop text-xl uppercase border-4 border-black flex items-center gap-2 justify-center hover:bg-white hover:text-black transition-all"
                >
                  <RefreshCcw size={20} /> {quizData.cta}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
