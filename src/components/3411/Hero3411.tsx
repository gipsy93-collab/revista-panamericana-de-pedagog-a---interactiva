import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { Sparkles, Terminal, Activity } from 'lucide-react';

export default function Hero3411() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-[#0F172A] relative overflow-hidden border-b-[20px] border-black">
      {/* Luz de fondo cinemática */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-rose-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto w-full"
      >
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[2px] w-12 bg-rose-600 hidden md:block" />
          <BrutalSticker text={`RPP // V.${ARTICLE_META.volume.replace('Vol. ', '')}`} color="bg-white" className="text-black !rotate-0 px-6 py-2 text-sm border-2 shadow-[4px_4px_0_0_#e11d48]" />
          <div className="h-[2px] w-12 bg-rose-600 hidden md:block" />
        </div>
        
        <div className="relative mb-8 group cursor-default">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -top-6 -right-12 w-24 h-24 bg-rose-600 border-4 border-black rounded-full flex flex-col items-center justify-center text-white z-20 shadow-[6px_6px_0_0_#000] rotate-12"
          >
            <Activity size={24} className="mb-1" />
            <span className="font-mono text-[10px] font-black uppercase">CRÍTICO</span>
          </motion.div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-[14rem] md:text-[22rem] font-display uppercase leading-[0.7] text-white tracking-tighter drop-shadow-[15px_15px_0_rgba(255,255,255,0.05)] hover:scale-[1.02] transition-transform duration-500">
               28<span className="text-[0.4em] italic text-rose-600">%</span>
            </h1>
            <div className="bg-black text-white px-8 py-2 mt-[-20px] border-x-4 border-black font-mono text-sm tracking-[0.5em] font-black uppercase z-20 shadow-[0_10px_0_0_#e11d48]">
              DESAFILIACIÓN_COHORTE_2023
            </div>
          </div>
        </div>

        <div className="mt-24 mb-16 space-y-4 max-w-5xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-mono text-rose-500 text-xs tracking-[0.4em] uppercase font-bold"
          >
            // {ARTICLE_META.subtitle}
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-display uppercase leading-none text-white selection:bg-rose-600">
            {ARTICLE_META.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 p-8 text-left hover:border-rose-600 transition-colors group">
            <div className="mb-4 flex justify-between items-start">
               <div className="p-3 bg-white/10 border border-white/20"><Terminal size={20} className="text-rose-500" /></div>
               <span className="font-mono text-[9px] opacity-40">SAMPLE_01</span>
            </div>
            <h4 className="font-display text-xl text-white uppercase mb-4">La Muestra</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Población de {ARTICLE_META.n} estudiantes seguida durante el ciclo escolar en Ensenada, B.C.
            </p>
          </div>

          <div className="bg-white text-black p-8 text-left border-4 border-black shadow-[12px_12px_0_0_#e11d48] -rotate-1 hover:rotate-0 transition-transform">
            <div className="mb-4 flex justify-between items-start text-black">
               <div className="p-3 bg-black text-white"><Sparkles size={20} /></div>
               <span className="font-mono text-[9px] opacity-40 font-black">CORE_GOAL</span>
            </div>
            <h4 className="font-display text-xl uppercase font-black mb-4">Determinantes</h4>
            <p className="text-sm font-sans font-bold leading-relaxed uppercase opacity-80">
               Identificar por qué los jóvenes rompen el vínculo escolar usando regresión logística.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 p-8 text-left hover:border-rose-600 transition-colors group">
            <div className="mb-4 flex justify-between items-start">
               <div className="p-3 bg-white/10 border border-white/20"><Activity size={20} className="text-blue-500" /></div>
               <span className="font-mono text-[9px] opacity-40">MODEL_R2</span>
            </div>
            <h4 className="font-display text-xl text-white uppercase mb-4">Varianza</h4>
            <div className="text-4xl font-display font-black text-rose-600">8.9%</div>
            <p className="text-[10px] font-mono uppercase font-black text-slate-500 mt-2">
              Nagelkerke Power Index
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
