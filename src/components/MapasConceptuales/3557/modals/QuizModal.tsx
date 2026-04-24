import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trophy, CheckCircle2, Info } from 'lucide-react';
import { quizQuestions } from '../data';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (idx: number) => {
    if (showFeedback) return;
    setSelectedOption(idx);
    setShowFeedback(true);
    if (idx === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setIsFinished(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] popup-overlay flex items-center justify-center p-4 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, y: 100, rotate: -5 }}
          animate={{ scale: 1, y: 0, rotate: 0 }}
          className="bg-white border-[12px] border-black shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden noise"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header / Level Bar */}
          <div className="relative bg-[#FF6B35] border-b-[10px] border-black p-8 overflow-hidden">
            <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-black p-3 rotate-12 shadow-[4px_4px_0px_0px_rgba(255,165,0,0.2)]">
                  <Trophy className="w-10 h-10 text-[#FFFF00]" />
                </div>
                <div>
                   <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic" style={{ WebkitTextStroke: '1px black' }}>Reto RPP</h2>
                   <p className="text-[10px] font-black text-black/60 uppercase tracking-[.4em]">Checkpoint Digital</p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
              >
                <X className="w-8 h-8 stroke-[4]" />
              </button>
            </div>

            {/* Progress Bar Comic Style */}
            <div className="mt-8 relative h-6 bg-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#00FFA3] halftone-sm"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[10px] font-black text-white uppercase tracking-widest z-10">Misión {currentQuestion + 1} de {quizQuestions.length}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-10 bg-[#FDFD96] scrollbar-hide">
            {!isFinished ? (
              <div className="space-y-10">
                {/* Question Panel */}
                <motion.div
                  key={currentQuestion}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="bg-white border-[6px] border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
                >
                  <div className="absolute top-2 right-2 w-16 h-16 bg-black/5 halftone-lg rotate-12" />
                  <p className="text-2xl md:text-3xl font-black text-black leading-none tracking-tighter uppercase mb-2 italic">
                    {quizQuestions[currentQuestion].question}
                  </p>
                </motion.div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {quizQuestions[currentQuestion].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={showFeedback}
                      className={`relative p-5 border-4 border-black text-left font-black uppercase text-sm tracking-tight transition-all flex items-center justify-between ${
                        showFeedback
                          ? idx === quizQuestions[currentQuestion].answer
                            ? 'bg-[#00FFA3] translate-x-2'
                            : idx === selectedOption
                            ? 'bg-[#FF007A] text-white'
                            : 'bg-white opacity-40'
                          : 'bg-white hover:bg-[#00D4FF] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                      }`}
                    >
                      <span className="relative z-10">{option}</span>
                      {showFeedback && idx === quizQuestions[currentQuestion].answer && (
                         <CheckCircle2 className="w-6 h-6 text-black" />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Feedback Panel */}
                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-black p-8 border-l-[12px] border-[#FFFF00] relative overflow-hidden"
                    >
                      <div className="absolute inset-0 halftone opacity-10" />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                           <Info className="w-6 h-6 text-[#FFFF00]" />
                           <span className="text-[#FFFF00] font-black uppercase tracking-widest text-xs">Análisis de Datos:</span>
                        </div>
                        <p className="text-white font-bold leading-tight italic">
                          {quizQuestions[currentQuestion].feedback}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={nextQuestion}
                          className="mt-6 w-full bg-[#FFFF00] border-4 border-black py-3 font-black uppercase text-xs shadow-[4px_4px_0px_0px_rgba(255,255,255,0.4)] hover:shadow-none transition-all"
                        >
                          Continuar Misión →
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Results Screen Comic Style */
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                className="text-center space-y-10 py-10"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-[-40px] bg-[#FFFF00] comic-burst blur-sm opacity-30 animate-pulse" />
                  <div className="relative bg-white border-[8px] border-black p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
                    <Trophy className="w-24 h-24 text-[#FF007A] mx-auto mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
                    <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-2" style={{ WebkitTextStroke: '2px black' }}>
                       MISIÓN<br/>COMPLETA
                    </h2>
                    <div className="bg-black text-[#00FFA3] py-2 px-6 font-black text-3xl inline-block rotate-2 mt-4">
                      {score} / {quizQuestions.length}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="bg-[#00D4FF] border-8 border-black px-10 py-5 font-black uppercase text-xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                  >
                    REINTENTAR
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-[#FF007A] text-white border-8 border-black px-10 py-5 font-black uppercase text-xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                  >
                    SALIR
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer Tape */}
          <div className="bg-black p-2 flex items-center justify-center gap-4 overflow-hidden h-8">
             {[...Array(20)].map((_, i) => (
               <div key={i} className="w-4 h-4 bg-[#00FFA3] rotate-45 flex-shrink-0" />
             ))}
             <p className="absolute text-white font-black text-[10px] uppercase tracking-[0.5em] bg-black px-4">
               Transmedia Learning Session
             </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
