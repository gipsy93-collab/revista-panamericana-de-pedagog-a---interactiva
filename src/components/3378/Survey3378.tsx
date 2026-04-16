import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../LanguageContext';

interface Question {
  q: string;
  opts: string[];
  correct: number;
}

export const Survey3378: React.FC = () => {
  const { t } = useLanguage();
  const s = t.saborio.survey;
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(['explorer']);

  const questions: Question[] = [
    { 
      q: "¿Qué porcentaje alcanzó la participación en foros?", 
      opts: ["45.2%", "57.1%", "62.8%", "33.3%"], 
      correct: 1 
    },
    { 
      q: "¿Cuántas semanas duró la implementación?", 
      opts: ["12 semanas", "8 semanas", "24 semanas", "4 semanas"], 
      correct: 0 
    },
    { 
      q: "¿Cuál fue la aceptación de los recursos?", 
      opts: ["70%", "95%", "85.7%", "50%"], 
      correct: 2 
    },
    { 
      q: "¿Qué ecosistema de herramientas se utilizó?", 
      opts: ["Moodle + Zoom", "Teams + Forms", "Genially + Padlet", "Blackboard + Docs"], 
      correct: 2 
    },
    { 
      q: "¿Iniciativa destacada por su potencial inclusivo en...?", 
      opts: ["Dislexia", "TDAH", "Baja visión", "TEA"], 
      correct: 1 
    }
  ];

  const handleAnswer = (idx: number) => {
    const isCorrect = idx === questions[currentIdx].correct;
    if (isCorrect) setScore(prev => prev + 1);

    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
      // Unlock logic
      const finalScore = isCorrect ? score + 1 : score;
      const newBadges = [...unlockedBadges];
      if (finalScore >= 1) newBadges.push('analyst');
      if (finalScore >= 3) newBadges.push('wise');
      if (finalScore === 5) newBadges.push('master');
      setUnlockedBadges(Array.from(new Set(newBadges)));
    }
  };

  const badgeIcons: Record<string, string> = {
    explorer: '🗺️',
    analyst: '📊',
    wise: '🧠',
    master: '🏆'
  };

  const badgeLabels: Record<string, string> = {
    explorer: s.badge_explorer,
    analyst: s.badge_analyst,
    wise: s.badge_wise,
    master: s.badge_master
  };

  return (
    <section className="py-32 px-6 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-slate-900 border border-slate-800 p-10 rounded-[3rem] shadow-2xl">
        <h2 className="text-3xl font-black text-white mb-2">{s.title}</h2>
        <p className="text-slate-500 text-sm italic mb-10">{s.question_count}</p>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div 
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h3 className="text-xl text-slate-300 font-bold mb-8">
                {currentIdx + 1}. {questions[currentIdx].q}
              </h3>
              <div className="space-y-4">
                {questions[currentIdx].opts.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#6C63FF]/20 hover:border-[#6C63FF]/30 transition-all duration-200 group flex items-center justify-between"
                  >
                    <span className="text-slate-400 group-hover:text-white transition-colors">{opt}</span>
                    <span className="text-xs text-[#6C63FF] opacity-0 group-hover:opacity-100 font-black">SOLVE</span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-2xl font-black text-white mb-2">¡Completado!</h3>
              <p className="text-[#00D9FF] font-bold mb-10">Puntaje: {score} / {questions.length}</p>

              <div className="flex flex-wrap justify-center gap-6 mt-12">
                {Object.keys(badgeIcons).map((type) => {
                  const isUnlocked = unlockedBadges.includes(type);
                  return (
                    <div 
                      key={type} 
                      className={`flex flex-col items-center transition-all duration-500 ${isUnlocked ? 'grayscale-0 scale-110' : 'grayscale opacity-20 scale-90'}`}
                    >
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg ${isUnlocked ? 'bg-gradient-to-br from-[#6C63FF] to-[#00D9FF]' : 'bg-slate-800'}`}>
                        {badgeIcons[type]}
                      </div>
                      <span className="text-[10px] uppercase font-black mt-3 tracking-widest text-slate-500">
                        {badgeLabels[type]}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              <button 
                onClick={() => {
                  setIsFinished(false);
                  setCurrentIdx(0);
                  setScore(0);
                  setUnlockedBadges(['explorer']);
                }}
                className="mt-12 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest transition-colors"
              >
                Reiniciar Diagnóstico
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
