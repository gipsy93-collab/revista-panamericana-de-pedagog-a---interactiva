import React from 'react';
import { motion } from 'motion/react';
import { Sprout, Sparkles, Users, Layers, Activity } from 'lucide-react';
import { BrutalSticker, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3214 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-emerald-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-yellow-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          {/* Header Sticker */}
          <BrutalSticker 
            text="EDUCACIÓN RURAL // INNOVACIÓN AGRO" 
            color="bg-black" 
            className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#059669]" 
          />
          
          <div className="max-w-6xl mx-auto mb-16 text-left">
            {/* Mascot Icon Label */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-[4px_4px_0_0_#000] border-2 border-black">
                <Sprout size={24} />
              </div>
              <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase bg-emerald-50 px-3 py-1 border border-black italic">
                {ARTICLE_META.carouselTitle}
              </span>
            </motion.div>

            {/* Exact Academic Title - Multi-color patterned */}
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-black leading-[1.1] text-black tracking-normal uppercase mb-12 max-w-6xl drop-shadow-[4px_4px_0_rgba(5,150,105,0.1)]">
              {ARTICLE_META.title.split(' ').map((word, k) => (
                <span key={k} className="inline-block mr-4">
                  <span className={k % 3 === 0 ? 'text-emerald-600' : 'text-black'}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start text-left mb-20">
            {/* Technical Box for Abstract and Authors */}
            <div className="flex-1 bg-zinc-900 text-white p-10 border-4 border-black shadow-[15px_15px_0_0_#059669] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 font-mono text-[8px] opacity-30 uppercase font-black tracking-tighter">REF-3214 // MANABÍ REPORT</div>
               <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-emerald-50/90 mb-10 border-l-4 border-emerald-600 pl-6">
                "{ARTICLE_META.abstract}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10 uppercase">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-500 tracking-[0.2em] font-black">AUTORES</span>
                  <p className="font-display text-sm font-bold leading-tight">{ARTICLE_META.authors}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-500 tracking-[0.2em] font-black">INSTITUCIÓN</span>
                  <p className="font-display text-sm font-bold">{ARTICLE_META.institution}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-500 tracking-[0.2em] font-black">DOI / ID ACADÉMICO</span>
                  <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="font-mono text-xs opacity-70 hover:text-emerald-500 hover:underline transition-colors">{ARTICLE_META.doi}</a>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-emerald-500 tracking-[0.2em] font-black">LOCACIÓN / FECHA</span>
                  <p className="font-display text-sm font-bold">{ARTICLE_META.context} · {ARTICLE_META.date}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Sidebar */}
            <div className="w-full lg:w-72 space-y-6">
              <div className="bg-emerald-600 p-6 border-4 border-black shadow-[8px_8px_0_0_#000] text-white">
                <span className="block text-[10px] font-mono uppercase mb-2">Población Total</span>
                <div className="text-4xl font-display font-black italic">N={ARTICLE_META.n}</div>
                <p className="text-[10px] font-mono uppercase opacity-70 mt-2">Estudiantes, Padres y Docentes</p>
              </div>
              <div className="bg-yellow-400 p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
                <span className="block text-[10px] font-mono uppercase mb-2">Intervención</span>
                <div className="text-2xl font-display font-black leading-none uppercase italic">12 Semanas</div>
                <p className="text-[10px] font-mono uppercase opacity-70 mt-2 tracking-tighter">Fases Pre-test / Post-test</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="MÉTODO" icon={Users} className="shadow-[12px_12px_0_0_#059669]">
              <div className="text-4xl font-display font-black text-emerald-600 mb-2 leading-none uppercase italic">Cuasiexperimental</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Investigación Mixta y Descriptiva</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="RESULTADO" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:translate-y-8">
              <div className="text-5xl font-display font-black text-black mb-2 uppercase leading-none italic">+20% MOTIVACIÓN</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Alza en Comprensión Sostenible</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="CONCEPTO">
              <div className="text-xl font-display font-black text-emerald-400 mb-2 italic uppercase">APRENDIZAJE EXPERIENCIAL</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">"{ARTICLE_META.subtitle}"</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-8 text-emerald-600 animate-pulse">Analizar Hallazgos de Agro-Ingeniería</p>
             <div className="w-px h-24 bg-black mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
