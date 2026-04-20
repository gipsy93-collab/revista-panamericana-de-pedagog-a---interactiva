import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Compass, GraduationCap, Map, Layout, Zap } from 'lucide-react';
import { BrutalSticker, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3378 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32">
      {/* Dynamic Background with "Bubbles" Metaphor */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full bg-pink-400 blur-[80px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-40 left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500 blur-[100px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Header Sticker */}
          <BrutalSticker 
            text="PAISAJES DE APRENDIZAJE // COSTA RICA" 
            color="bg-pink-600" 
            className="text-white mb-10 shadow-[8px_8px_0_0_#000] !rotate-0 px-6" 
          />
          
          <div className="max-w-6xl mx-auto mb-16 text-left">
            {/* Mascot Icon Label using Bubbles */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 bg-pink-100 border-4 border-black rounded-full flex items-center justify-center text-pink-600 shadow-[4px_4px_0_0_#000]">
                <MessageSquare size={28} />
              </div>
              <span className="font-mono text-xs font-black tracking-[0.2em] uppercase bg-white px-4 py-2 border-2 border-dashed border-black">
                {ARTICLE_META.carouselTitle}
              </span>
            </motion.div>

            {/* Academic Title - Dialogue Patterned */}
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-black leading-[1.05] text-black tracking-tighter uppercase mb-12 max-w-6xl drop-shadow-[5px_5px_0_rgba(219,39,119,0.2)]">
              {ARTICLE_META.title.split(' ').map((word, k) => (
                <span key={k} className="inline-block mr-4">
                  <span className={k % 4 === 0 ? 'text-pink-600 italic underline decoration-black decoration-8' : 'text-black'}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start text-left mb-24">
            {/* Technical Box for Abstract and Authors */}
            <div className="flex-1 bg-white text-black p-12 border-8 border-black shadow-[20px_20px_0_0_#db2777] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 font-mono text-[9px] opacity-40 uppercase font-black tracking-widest">REF-3378 // LEARNING LANDSCAPES</div>
               
               <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-zinc-700 mb-10 border-l-[12px] border-pink-500 pl-8">
                "{ARTICLE_META.abstract}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t-4 border-black uppercase">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-pink-600 tracking-[0.2em] font-black">AUTORES</span>
                  <p className="font-display text-sm font-bold leading-tight decoration-pink-500/30 underline">{ARTICLE_META.authors}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-pink-600 tracking-[0.2em] font-black">LUGAR / FECHA</span>
                  <p className="font-display text-sm font-bold uppercase">{ARTICLE_META.context} · {ARTICLE_META.date}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-pink-600 tracking-[0.2em] font-black">DOI ACADÉMICO</span>
                  <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="font-mono text-xs font-bold bg-pink-50 px-2 py-1 border border-pink-200 inline-block hover:text-pink-600 hover:underline transition-colors">{ARTICLE_META.doi}</a>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-pink-600 tracking-[0.2em] font-black">METODOLOGÍA</span>
                  <p className="font-display text-sm font-bold italic">{ARTICLE_META.methodology}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Sidebar */}
            <div className="w-full lg:w-80 space-y-8">
              <div className="bg-black p-8 border-4 border-black shadow-[10px_10px_0_0_#db2777] text-white rotate-2">
                <span className="block text-[11px] font-mono uppercase mb-3 text-pink-400">PARTICIPACIÓN FOROS</span>
                <div className="text-5xl font-display font-black italic">+24%</div>
                <p className="text-[10px] font-mono uppercase opacity-70 mt-3 border-t border-white/20 pt-3">Incremento Cualitativo</p>
              </div>
              <div className="bg-pink-50 p-8 border-4 border-black shadow-[10px_10px_0_0_#000] -rotate-1">
                <span className="block text-[11px] font-mono uppercase mb-3 text-black">NOVEDAD MÉTODO</span>
                <div className="text-4xl font-display font-black text-pink-600">100%</div>
                <p className="text-[10px] font-mono uppercase font-black opacity-50 mt-3">Experiencia por Primera Vez</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-28 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="METÁFORA" icon={Map} className="shadow-[15px_15px_0_0_#db2777] border-pink-200">
              <div className="text-4xl font-display font-black text-black mb-2 italic uppercase">Burbujas</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Reflexión Dialógica</p>
            </CinematicCard>
            <CinematicCard color="bg-zinc-900" className="text-white shadow-[15px_15px_0_0_#000] lg:translate-y-10" title="RESULTADO" icon={Zap}>
              <div className="text-5xl font-display font-black text-pink-400 mb-2 uppercase leading-none italic">85% ÚTIL</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Valoración de Recursos</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="TIEMPO" icon={Layout} className="shadow-[15px_15px_0_0_#db2777]">
              <div className="text-3xl font-display font-black text-indigo-600 mb-2 italic uppercase">12 Semanas</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">12 Micro-paisajes</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.4em] mb-10 text-pink-600">Explorar los Paisajes de Aprendizaje</p>
             <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center animate-bounce shadow-[4px_4px_0_0_#db2777] bg-white">
                <Compass className="text-black" />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
