import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Binary, Gamepad2, Trophy } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';

export const Hero3378 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-indigo-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-pink-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text="GAMIFICACIÓN // COSTA RICA" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#4f46e5]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ rotate: -20 }}
              animate={{ rotate: 20 }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-indigo-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <Gamepad2 size={48} />
            </motion.div>
            
            <div className="text-[10rem] md:text-[15rem] font-display uppercase leading-[0.7] text-indigo-600 drop-shadow-[20px_20px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: '4px black' }}>
              Play_
            </div>
          </div>

          <PremiumTitle subtitle="ESTRATEGIAS DE MOTIVACIÓN" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            El Juego como Motor de Cambio
          </PremiumTitle>

          <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#4f46e5] rotate-1 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">REF_3378 // GAMIFICATION_STUDY</div>
            <p className="text-3xl font-serif italic leading-relaxed text-indigo-100">
              "Investigando cómo elementos del juego transforman la participación y el rendimiento en escuelas de Costa Rica."
            </p>
            <div className="h-2 w-48 bg-indigo-600 mx-auto" />
            <p className="font-display uppercase text-xl font-black tracking-widest text-[#F8FAFC]">
              Saborío-Taylor <span className="text-indigo-600">//</span> CIENCIA TRANSMEDIA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="METODOLOGÍA" icon={Binary} className="shadow-[12px_12px_0_0_#4f46e5]">
              <div className="text-5xl font-display font-black text-indigo-600 mb-2 uppercase italic leading-none text-center">CUASI_EXP</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Diseño de Campo Controlado_</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="UBICACIÓN" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:translate-y-8">
              <div className="text-4xl font-display font-black text-black mb-2 uppercase leading-none italic">Costa Rica</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Educación Secundaria_</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="FOCO">
              <div className="text-xl font-display font-black text-indigo-400 mb-2 italic uppercase">MOTIVACIÓN</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Vínculo con el Logro_</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-8 text-indigo-600 animate-pulse">Press start to explore_</p>
             <Trophy className="mx-auto w-12 h-12 text-yellow-400 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
