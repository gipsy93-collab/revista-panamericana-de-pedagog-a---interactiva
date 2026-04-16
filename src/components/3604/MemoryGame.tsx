import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MEMORY_CONCEPTS } from './constants';
import { Brain, Trophy, RotateCcw } from 'lucide-react';

interface Card {
  id: number;
  content: string;
  pairId: number;
  type: 'term' | 'definition';
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  const initGame = () => {
    const termCards: Card[] = MEMORY_CONCEPTS.map((c, i) => ({
      id: i * 2,
      content: c.term,
      pairId: c.pairId,
      type: 'term',
      isFlipped: false,
      isMatched: false
    }));

    const definitionCards: Card[] = MEMORY_CONCEPTS.map((c, i) => ({
      id: i * 2 + 1,
      content: c.definition,
      pairId: c.pairId,
      type: 'definition',
      isFlipped: false,
      isMatched: false
    }));

    const allCards = [...termCards, ...definitionCards].sort(() => Math.random() - 0.5);
    setCards(allCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (cards.find(c => c.id === id)?.isMatched) return;
    if (flippedCards.includes(id)) return;

    setFlippedCards([...flippedCards, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves(prev => prev + 1);
      const [id1, id2] = flippedCards;
      const card1 = cards.find(c => c.id === id1);
      const card2 = cards.find(c => c.id === id2);

      if (card1 && card2 && card1.pairId === card2.pairId) {
        setCards(prev => prev.map(c => 
          (c.id === id1 || c.id === id2) ? { ...c, isMatched: true } : c
        ));
        setMatches(prev => prev + 1);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  return (
    <section className="py-24 bg-[#FDFCFB]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5A5A40]/10 border border-[#5A5A40]/20 rounded-full text-[#5A5A40] mb-6">
             <Brain size={16} />
             <span className="text-xs font-bold uppercase tracking-widest">Desafío Cognitivo</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a]">Memoria de <span className="italic text-[#5A5A40]">Conceptos</span></h2>
        </div>

        <div className="flex justify-between items-center mb-12 bg-white p-6 border-2 border-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <div className="text-left">
             <span className="text-[10px] uppercase font-bold text-[#1a1a1a]/40 tracking-widest block">Movimientos</span>
             <span className="text-3xl font-serif font-bold text-[#1a1a1a]">{moves}</span>
          </div>
          <div className="text-center">
             {matches === MEMORY_CONCEPTS.length && (
               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2 text-[#5A5A40] font-bold uppercase">
                 <Trophy size={20} /> ¡Completado!
               </motion.div>
             )}
          </div>
          <button onClick={initGame} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#5A5A40] transition-colors">
            <RotateCcw size={14} /> Reiniciar
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const isFlipped = flippedCards.includes(card.id) || card.isMatched;
            return (
              <div 
                key={card.id}
                className="perspective-1000 aspect-square cursor-pointer"
                onClick={() => handleCardClick(card.id)}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full preserve-3d"
                >
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden bg-white border-2 border-[#1a1a1a] flex items-center justify-center p-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
                    <div className="w-12 h-12 border-2 border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a]/20 font-serif text-2xl italic">
                       R
                    </div>
                  </div>

                  {/* Back */}
                  <div className={`absolute inset-0 backface-hidden flex items-center justify-center p-4 text-center rotate-y-180 border-2 ${card.isMatched ? 'bg-[#5A5A40]/10 border-[#5A5A40]/50 text-[#5A5A40]' : 'bg-[#5A5A40] border-[#1a1a1a] text-white shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]'}`}>
                    <span className={`font-medium ${card.type === 'definition' ? 'text-[10px] leading-tight' : 'text-sm font-bold uppercase tracking-tight'}`}>
                      {card.content}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
