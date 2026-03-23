import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const BOOT_LOGS = [
  "INITIALIZING_RPP_OS_v3.0...",
  "LOADING_NEURAL_NETWORKS...",
  "CONNECTING_TO_DATABASE_RPP-2026...",
  "FETCHING_INTERACTIVE_ARTICLES...",
  "CALIBRATING_TRANSMEDIA_ENGINE...",
  "SYNCING_GAMIFICATION_MODULES...",
  "OPTIMIZING_USER_INTERFACE...",
  "INITIALIZING_POP_ART_SYSTEM...",
  "LOADED_NEOBRUTALISM_ENGINE...",
  "SYSTEM_READY_FOR_BOOT."
];

export const LoadingScreen = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{ 
        y: '-100vh', 
        transition: { duration: 1, ease: [0.85, 0, 0.15, 1] } 
      }}
      className="fixed inset-0 z-[200] bg-zine-black text-zine-red font-mono p-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
         <div className="absolute inset-0" style={{ 
           backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
           backgroundSize: '40px 40px'
         }} />
      </div>

      <div className="space-y-3 relative z-10 overflow-y-auto max-h-[60vh] custom-scrollbar pr-4">
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center gap-6 overflow-hidden ${i === logs.length - 1 ? "text-white scale-105" : "text-zine-red opacity-60"}`}
          >
            <span className="opacity-40 text-xs shrink-0">[{new Date().toLocaleTimeString('es-ES')}]</span>
            <span className={`text-sm truncate ${i === BOOT_LOGS.length - 1 ? "font-black" : ""}`}>
              {i === BOOT_LOGS.length - 1 ? "> " : ""} {log}
            </span>
            {i === logs.length - 1 && <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2 h-4 bg-white" />}
          </motion.div>
        ))}
        {logs.length === BOOT_LOGS.length && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8 text-white font-black text-4xl animate-pulse">
            SISTEMA LISTO.
          </motion.div>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end gap-8 relative z-10 border-t border-white/5 pt-12">
        <div className="flex flex-col">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12rem] md:text-[20rem] font-display uppercase leading-[0.75] text-white select-none pointer-events-none font-black tracking-tighter"
          >
            RPP
          </motion.h1>
          <p className="text-xs tracking-[0.6em] mt-8 opacity-40 font-bold">REVISTA PANAMERICANA DE PEDAGOGÍA</p>
        </div>
        
        <div className="text-right w-full md:w-80">
          <div className="text-[10px] opacity-40 mb-4 font-black flex justify-between uppercase">
            <span>Progress: {Math.round((logs.length / BOOT_LOGS.length) * 100)}%</span>
            <span>Est_time: 2.1s</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5 p-[2px]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(logs.length / BOOT_LOGS.length) * 100}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-gradient-to-r from-zine-red via-orange-500 to-amber-500 rounded-full shadow-[0_0_15px_rgba(179,77,77,0.5)]"
            />
          </div>
          <p className="text-[10px] opacity-40 mt-4 uppercase">© 2026 Universidad de Guadalajara // Science_Transmedia</p>
        </div>
      </div>

      {/* Aesthetic corner details */}
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-white/10" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-white/10" />
    </motion.div>
  );
};
