import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const sections = [
  'INICIO',
  'ARTICULOS',
  'SEMILLERO',
  'TRANSMEDIA',
  'ACTUALIDAD',
  '¿POR QUÉ RPP?',
  'CONTACTO'
];

export const StatusBar = ({ currentSection }: { currentSection: number }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-10 bg-gradient-to-r from-zine-black via-zinc-900/95 to-zine-black text-white/50 text-[10px] font-mono px-6 flex items-center justify-between z-[100] border-t border-white/10 backdrop-blur-sm">
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-zine-red via-orange-500 to-zine-red w-full origin-left"
      />
      
      <div className="flex gap-8 relative z-10 items-center">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="hidden sm:inline font-bold">RPP_NODE_ONLINE</span>
        </span>
        <span className="hidden lg:inline text-white/30">|</span>
        <span className="hidden md:inline font-mono tracking-tighter">
          SECCIÓN: <span className="text-white font-bold">{sections[currentSection] || 'RPP'}</span>
        </span>
      </div>

      <div className="flex gap-8 items-center bg-white/5 px-4 h-full border-x border-white/5">
        <span className="hidden lg:inline group cursor-help transition-colors hover:text-white">
          BUFFER_STATUS: <span className="text-emerald-400">OPTIMAL</span>
        </span>
        <span className="hidden sm:inline text-zine-red font-black tracking-widest px-2 py-0.5 bg-zine-red/10 rounded">RPP_OS_v3.0</span>
        <span className="font-bold tabular-nums text-white/70">{time}</span>
      </div>
    </div>
  );
};
