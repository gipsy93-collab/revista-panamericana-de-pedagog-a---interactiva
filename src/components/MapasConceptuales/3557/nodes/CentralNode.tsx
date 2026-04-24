import { motion } from 'motion/react';
import { Cpu, Sparkles } from 'lucide-react';

interface CentralNodeProps {
  onStartTour: () => void;
}

export function CentralNode({ onStartTour }: CentralNodeProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -20 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', damping: 12, stiffness: 200 }}
      className="relative z-50 group"
    >
      {/* Comic Burst Background */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-[-60px] bg-[#FF6B35] comic-burst opacity-15 blur-sm pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 3, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute inset-[-40px] bg-[#FFFF00] comic-burst opacity-30 pointer-events-none border-2 border-black halftone"
      />
      
      {/* Hard shadow layer */}
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2" />
      
      <div className="relative bg-white border-[6px] border-black p-8 md:p-10 flex flex-col items-center gap-6 min-w-[240px]">
        {/* Accent strip */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[#FF007A] border-b-[4px] border-black halftone-md" />
        
        {/* Main Icon Sticker */}
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [-4, 4, -4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black translate-x-1 translate-y-1" />
          <div className="relative w-16 h-16 bg-[#00D4FF] border-[3px] border-black flex items-center justify-center -rotate-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Cpu className="w-8 h-8 text-black stroke-[3]" />
          </div>
          {/* Sparkle sticker */}
          <div className="absolute -top-3 -right-3 bg-[#00FFA3] border-2 border-black p-0.5 rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
             <Sparkles className="w-4 h-4 text-black fill-current" />
          </div>
        </motion.div>

        <div className="text-center relative max-w-[280px]">
          <h2 className="text-[14px] md:text-[16px] font-black uppercase tracking-tight leading-[1.1] mb-3 text-black">
            Legal education <br /> in the digital age:
          </h2>
          
          <div className="bg-[#FFFF00] px-4 py-2 border-[4px] border-black inline-block -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
             <span className="font-black text-[10px] md:text-[12px] uppercase tracking-tighter leading-none italic">
               Tensions, resistances and opportunities
             </span>
          </div>

          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex flex-col items-center">
              <p className="text-[7px] font-black uppercase tracking-[0.2em] text-black/40 mb-1">Escrito por:</p>
              <p className="text-[9px] font-bold text-black uppercase leading-tight italic">
                P. Prince Tritto, S. Galban-Lozano <br /> & M. Meza-Mejia
              </p>
            </div>
            
            <div className="h-[2px] w-12 bg-black/10 my-1" />
            
            <div className="flex flex-col items-center">
              <p className="text-[7px] font-black uppercase tracking-[0.2em] text-[#FF007A] mb-0.5">Digital Object Identifier</p>
              <a 
                href="https://doi.org/10.21555/rpp.3557" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[8px] font-black text-black hover:text-[#00D4FF] underline decoration-2 underline-offset-2 transition-colors uppercase"
              >
                doi.org/10.21555/rpp.3557
              </a>
            </div>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95, rotate: -1 }}
          onClick={onStartTour}
          className="relative bg-[#00FFA3] border-[6px] border-black px-6 py-3 font-black uppercase text-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all active:scale-95"
        >
          <span className="relative z-10">¡INICIAR!</span>
          <div className="absolute inset-0 bg-white/20 halftone-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>
      </div>

      {/* Decorative stickers */}
      <div className="absolute -top-6 -right-6 w-10 h-10 bg-[#FFFF00] border-4 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black text-xs">?</div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#FF007A] border-[3px] border-black rotate-45 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" />
    </motion.div>
  );
}
