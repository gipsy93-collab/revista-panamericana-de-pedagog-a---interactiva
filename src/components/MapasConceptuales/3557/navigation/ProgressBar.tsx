import { motion } from 'motion/react';
import { Target, Sparkles } from 'lucide-react';

interface ProgressBarProps {
  visitedNodes: Set<string>;
  totalNodes: number;
}

export function ProgressBar({ visitedNodes, totalNodes }: ProgressBarProps) {
  const percentage = Math.round((visitedNodes.size / totalNodes) * 100);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#FFFF00] border-b-8 border-black px-6 py-2 shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 border-4 border-black ${percentage >= 100 ? 'bg-black text-white' : 'bg-white text-black'} shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
              <Target className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40 leading-none mb-1">Status</p>
              <p className="text-sm font-black text-black uppercase leading-none">Exploración</p>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 border-2 border-black ${percentage >= 100 ? 'bg-[#00FFA3]' : 'bg-black animate-pulse'}`} />
                <span className="text-[10px] font-black text-black uppercase tracking-[0.2em]">
                  {percentage >= 100 ? 'Misión Cumplida' : 'Explorando Datos'}
                </span>
              </div>
              <motion.div
                key={percentage}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                <span className="text-xl font-black italic tracking-tighter text-black">
                  {percentage}%
                </span>
                {percentage >= 100 && <Sparkles className="w-4 h-4 text-black fill-current" />}
              </motion.div>
            </div>
            
            <div className="h-6 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center p-1">
              <motion.div
                className={`h-full border-2 border-black ${
                  percentage >= 100 ? 'bg-[#00FFA3]' : 'bg-[#00D4FF]'
                }`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 border-l-4 border-black pl-6">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-black/40 leading-none mb-1">Registro</p>
              <p className="text-base font-black text-black uppercase leading-none">
                {visitedNodes.size} / {totalNodes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
