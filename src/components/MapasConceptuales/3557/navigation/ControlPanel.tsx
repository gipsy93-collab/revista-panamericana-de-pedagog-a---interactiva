import { motion } from 'motion/react';
import { Home, Play, FileText, BookOpen, GraduationCap, Square } from 'lucide-react';

interface ControlPanelProps {
  onReset: () => void;
  onStartTour: () => void;
  onShowInfo: () => void;
  onShowQuiz: () => void;
  onShowGlossary: () => void;
  isTouring: boolean;
}

export function ControlPanel({
  onReset,
  onStartTour,
  onShowInfo,
  onShowQuiz,
  onShowGlossary,
  isTouring,
}: ControlPanelProps) {
  const buttons = [
    { icon: Home, label: 'Centro', onClick: onReset, color: 'bg-white' },
    { icon: isTouring ? Square : Play, label: isTouring ? 'Stop' : 'Tour', onClick: onStartTour, color: isTouring ? 'bg-[#FF5555]' : 'bg-[#00D4FF]' },
    { icon: FileText, label: 'Ficha', onClick: onShowInfo, color: 'bg-[#FF9BFF]' },
    { icon: GraduationCap, label: 'Quiz', onClick: onShowQuiz, color: 'bg-[#00FFA3]' },
    { icon: BookOpen, label: 'Gloss', onClick: onShowGlossary, color: 'bg-[#FFFF00]' },
  ];

  return (
    <motion.div
      initial={{ y: 150, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      className="fixed bottom-6 left-1/2 z-[60] px-4"
    >
      <div className="flex items-center gap-3 bg-black p-3 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] rotate-[-0.5deg] relative">
        <div className="absolute inset-0 halftone opacity-5 pointer-events-none" />
        {buttons.map((btn, i) => (
          <motion.button
            key={btn.label}
            whileHover={{ scale: 1.15, rotate: 0, y: -5, zIndex: 10 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={btn.onClick}
            className={`group relative flex flex-col items-center justify-center w-14 h-14 border-[3px] border-black ${btn.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all`}
            style={{ 
              transform: `rotate(${i % 2 === 0 ? '-3' : '3'}deg)` 
            }}
          >
            <div className="absolute inset-0 halftone opacity-0 group-hover:opacity-10 transition-opacity" />
            <btn.icon className="w-5 h-5 mb-0.5 text-black stroke-[3]" />
            <span className="text-[8px] font-black uppercase text-black leading-none tracking-tighter italic">
              {btn.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
