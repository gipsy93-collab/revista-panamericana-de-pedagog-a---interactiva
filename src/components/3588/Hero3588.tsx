import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Ruler, ShieldCheck, Activity, GraduationCap, Microscope, Binary } from 'lucide-react';
import { BrutalSticker, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3588 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32">
      {/* Background Elements - Metric/Grid Theme */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[700px] h-[700px] rounded-full bg-indigo-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-zinc-300 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Header Sticker */}
          <BrutalSticker 
            text="ESTUDIO INSTRUMENTAL // PILOTO" 
            color="bg-indigo-600" 
            className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#000]" 
          />
          
          <div className="max-w-6xl mx-auto mb-16 text-left">
            {/* Context Label */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-indigo-400 shadow-[4px_4px_0_0_#4f46e5] border-2 border-white">
                <Binary size={32} />
              </div>
              <span className="font-mono text-sm font-black tracking-[0.2em] uppercase bg-black text-white px-4 py-2 border-2 border-indigo-600">
                {ARTICLE_META.carouselTitle}
              </span>
            </motion.div>

            {/* Academic Title - Sharp and Analytical */}
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-display font-black leading-[0.95] text-black tracking-tighter uppercase mb-20 max-w-6xl drop-shadow-[5px_5px_0_rgba(79,70,229,0.2)]">
              {ARTICLE_META.title.split(' ').map((word, k) => (
                <span key={k} className="inline-block mr-4">
                  <span className={['psicométrico', 'deserción', 'escala'].includes(word.toLowerCase()) ? 'text-indigo-600 italic' : 'text-black'}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start text-left mb-24">
            {/* Technical Box for Abstract and Authors */}
            <div className="flex-1 bg-black text-white p-12 border-8 border-indigo-600 shadow-[20px_20px_0_0_#000] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 font-mono text-[9px] opacity-40 uppercase font-black tracking-widest text-indigo-300">REF-3588 // PSYC-VALIDATION</div>
               
               <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-zinc-100 mb-10 border-l-8 border-indigo-600 pl-8">
                "{ARTICLE_META.abstract}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-white/20 uppercase">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-500 tracking-[0.2em] font-black">AUTORES</span>
                  <p className="font-display text-sm font-bold leading-tight underline decoration-indigo-600 underline-offset-4">{ARTICLE_META.authors}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-500 tracking-[0.2em] font-black">INSTITUCIÓN</span>
                  <p className="font-display text-sm font-bold uppercase">{ARTICLE_META.institution}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-500 tracking-[0.2em] font-black">MUESTRA PILOTO</span>
                  <p className="font-display text-sm font-bold italic">{ARTICLE_META.context} · N={ARTICLE_META.n}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-indigo-500 tracking-[0.2em] font-black">MÉTODO</span>
                  <p className="font-mono text-xs font-black bg-indigo-900/50 px-3 py-1 inline-block border border-indigo-500/30">{ARTICLE_META.methodology}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Sidebar */}
            <div className="w-full lg:w-80 space-y-8">
              <div className="bg-indigo-600 p-8 border-4 border-black shadow-[10px_10px_0_0_#000] text-white -rotate-1">
                <span className="block text-[11px] font-mono uppercase mb-3 font-black">Omega de McDonald</span>
                <div className="text-6xl font-display font-black italic">.959</div>
                <p className="text-[10px] font-mono uppercase opacity-70 mt-3 border-t border-white/20 pt-3">Confiabilidad Excelente</p>
              </div>
              <div className="bg-black p-8 border-4 border-indigo-600 shadow-[10px_10px_0_0_#4f46e5] rotate-2 text-white">
                <span className="block text-[11px] font-mono uppercase mb-3 text-indigo-500 font-black">Dimensión Crítica</span>
                <div className="text-4xl font-display font-black italic">Decisión Final</div>
                <p className="text-[10px] font-mono uppercase opacity-50 mt-3 tracking-tighter">Cronbach: .969</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-28 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="PROTECTOR" icon={ShieldCheck} className="shadow-[15px_15px_0_0_#4f46e5]">
              <div className="text-3xl font-display font-black text-indigo-600 mb-2 italic uppercase">Autoeficacia</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">r = -.436 Inversa</p>
            </CinematicCard>
            <CinematicCard color="bg-zinc-950" className="text-white shadow-[15px_15px_0_0_#000] lg:translate-y-10" title="CONVERGENCIA" icon={Ruler}>
              <div className="text-4xl font-display font-black text-indigo-400 mb-2 uppercase leading-none italic">Escala Bäulke</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">15 Ítems • 5 Fases</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="DATO PILOTO" icon={Activity} className="shadow-[15px_15px_0_0_#4f46e5]">
              <div className="text-3xl font-display font-black text-black mb-2 italic uppercase">Género (F)</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">87% Representación</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-10 text-indigo-600 animate-pulse">Explorar Dimensiones de la Intención</p>
             <div className="w-px h-24 bg-black mx-auto shadow-[2px_0_0_#4f46e5]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
