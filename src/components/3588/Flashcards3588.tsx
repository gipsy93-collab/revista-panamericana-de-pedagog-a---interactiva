import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FLASHCARD_DATA } from './constants';
import { RefreshCw, Zap } from 'lucide-react';

export default function Flashcards3588() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARD_DATA.length);
    }, 150);
  };

  return (
    <section className="py-24 bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#be123c]/30 rounded-full text-[#fecdd3] mb-8">
           <Zap size={14} />
           <span className="text-[10px] font-bold uppercase tracking-widest">Flashcards Académicas</span>
        </div>
        
        <h2 className="font-serif text-5xl text-[#F8FAFC] mb-16">Conceptos <span className="italic text-[#be123c]">Clave</span></h2>

        <div className="perspective-1000 w-full max-w-md mx-auto aspect-[3/4] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            className="relative w-full h-full preserve-3d"
          >
            {/* Front */}
            <div className="absolute inset-0 backface-hidden bg-white border-2 border-[#be123c] p-12 flex flex-col items-center justify-center shadow-[10px_10px_0px_0px_rgba(190,18,60,1)]">
               <span className="text-[10px] uppercase tracking-widest text-[#be123c] font-bold mb-4">{FLASHCARD_DATA[currentIndex].category}</span>
               <h3 className="font-serif text-3xl text-[#0f172a] leading-tight text-center">
                 {FLASHCARD_DATA[currentIndex].front}
               </h3>
               <p className="mt-12 text-[10px] text-[#0f172a]/40 uppercase tracking-widest font-bold">Click para girar</p>
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden bg-[#be123c] border-2 border-[#0f172a] p-12 flex flex-col items-center justify-center text-white rotate-y-180 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]">
               <p className="font-serif text-2xl leading-relaxed text-center whitespace-pre-line">
                 {FLASHCARD_DATA[currentIndex].back}
               </p>
            </div>
          </motion.div>
        </div>

        <button 
          onClick={(e) => { e.stopPropagation(); nextCard(); }}
          className="mt-16 group flex items-center gap-3 mx-auto px-8 py-4 bg-white text-[#0f172a] font-bold uppercase tracking-widest hover:bg-[#be123c] hover:text-white transition-all border-2 border-[#0f172a] shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
        >
          Siguiente Concepto <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
        </button>
      </div>
    </section>
  );
}
