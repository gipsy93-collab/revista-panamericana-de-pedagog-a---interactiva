import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, BookOpen, Hash } from 'lucide-react';
import { glossary } from '../data';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlossaryModal({ isOpen, onClose }: GlossaryModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filteredGlossary = glossary.filter((item) => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = !selectedLetter || item.term.startsWith(selectedLetter);
    return matchesSearch && matchesLetter;
  });

  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[130] popup-overlay flex items-center justify-center p-4 backdrop-blur-md"
           onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 100, rotate: 3 }}
            animate={{ scale: 1, y: 0, rotate: 0 }}
            exit={{ scale: 0.9, y: 100, rotate: -3 }}
            className="bg-white border-[10px] border-black shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden noise"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Sticker */}
            <div className="relative bg-[#FFFF00] border-b-[10px] border-black p-10">
              <div className="absolute inset-0 halftone opacity-20 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="bg-black p-4 border-4 border-black rotate-[-12deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]">
                    <BookOpen className="w-12 h-12 text-[#FFFF00]" />
                  </div>
                  <div>
                    <h2 className="text-5xl font-black text-black uppercase tracking-tighter leading-none italic">Glosario</h2>
                    <p className="text-[10px] font-black text-black/60 uppercase tracking-[0.5em] mt-2">Terminología Jurídica Digital</p>
                  </div>
                </div>

                {/* Search Bar Sticker */}
                <div className="relative w-full md:w-96">
                   <div className="absolute inset-0 bg-black translate-x-1.5 translate-y-1.5" />
                   <div className="relative bg-white border-4 border-black p-4 flex items-center gap-4">
                     <Search className="w-6 h-6 text-black/40" />
                     <input
                       type="text"
                       placeholder="BUSCAR TÉRMINO..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       className="w-full bg-transparent font-black uppercase text-sm outline-none placeholder:text-black/10"
                     />
                   </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-12 h-12 bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <X className="w-8 h-8 stroke-[4]" />
              </button>
            </div>

            {/* Letter Filter Strip */}
            <div className="bg-[#00D4FF] border-b-[6px] border-black py-2 px-4 flex items-center justify-between overflow-x-auto scrollbar-hide gap-1">
               {alphabet.map((l) => (
                 <button
                   key={l}
                   onClick={() => setSelectedLetter(selectedLetter === l ? null : l)}
                   className={`w-8 h-8 flex-shrink-0 flex items-center justify-center font-black text-xs border-2 border-black transition-all ${
                     selectedLetter === l ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'
                   }`}
                 >
                   {l}
                 </button>
               ))}
               <button
                 onClick={() => setSelectedLetter(null)}
                 className="ml-2 w-8 h-8 flex-shrink-0 flex items-center justify-center bg-black text-white border-2 border-black"
               >
                 <Hash className="w-4 h-4" />
               </button>
            </div>

            {/* Glossary Content Grid */}
            <div className="flex-1 overflow-y-auto p-10 bg-white scrollbar-hide">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredGlossary.map((item, i) => (
                  <motion.div
                    key={item.term}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group"
                  >
                    <div className="relative bg-white border-[6px] border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px]">
                      <div className="absolute top-2 right-2 flex gap-1 opacity-10">
                        <div className="w-1 h-10 bg-black rotate-45" />
                        <div className="w-1 h-10 bg-black rotate-45" />
                      </div>
                      <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-4 border-b-4 border-[#00FFA3] w-fit italic">
                         {item.term}
                      </h3>
                      <p className="text-black font-bold text-sm leading-tight">
                         {item.definition}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer Tape */}
            <div className="bg-black p-2 flex items-center justify-center gap-4 overflow-hidden h-8">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className="w-4 h-4 bg-[#FFFF00] rotate-45 flex-shrink-0" />
               ))}
               <p className="absolute text-white font-black text-[10px] uppercase tracking-[0.5em] bg-black px-4">
                 Terminología RPP ©️ 2026
               </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
