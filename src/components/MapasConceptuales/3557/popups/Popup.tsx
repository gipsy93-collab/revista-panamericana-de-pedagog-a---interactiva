import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import type { SubNode } from '../types';
import { PopupContentRenderer } from './PopupContent';

interface PopupProps {
  subNode: SubNode | null;
  branchColor: string;
  onClose: () => void;
}

export function Popup({ subNode, branchColor, onClose }: PopupProps) {
  return (
    <AnimatePresence>
      {subNode && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] popup-overlay flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, rotate: -2, y: 50 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.9, rotate: 2, y: 50 }}
            className="bg-white border-[8px] border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden noise"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Sticker */}
            <div className="relative border-b-[8px] border-black p-8 flex items-center justify-between" style={{ backgroundColor: branchColor }}>
              <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
              <div className="relative flex items-center gap-6">
                <div className="bg-white border-4 border-black p-4 rotate-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-4xl">{subNode.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none" style={{ WebkitTextStroke: '1px black', textShadow: '2px 2px 0px black' }}>
                    {subNode.popup.title}
                  </h3>
                  <div className="mt-2 bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.3em] inline-block">
                    Inbound Data
                  </div>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="w-14 h-14 bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <X className="w-10 h-10 stroke-[4]" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 md:p-10 bg-[#FDFD96] scrollbar-hide">
              <PopupContentRenderer
                type={subNode.popup.type}
                content={subNode.popup.content}
                source={subNode.popup.source}
              />
            </div>

            {/* Footer / Comic Tape */}
            <div className="bg-black p-2 flex items-center justify-center gap-4 overflow-hidden h-8">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className="w-4 h-4 bg-[#FFFF00] rotate-45 flex-shrink-0" />
               ))}
               <p className="absolute text-white font-black text-[10px] uppercase tracking-[0.5em] bg-black px-4">
                 Premium Digital Experience
               </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
