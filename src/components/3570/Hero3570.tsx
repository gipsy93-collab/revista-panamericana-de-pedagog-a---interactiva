import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Globe, Brain, BookOpen, Layers, Target } from 'lucide-react';
import { BrutalSticker, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3570 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32">
      {/* Background Elements - Filter/Symmetry Theme */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] border-[40px] border-orange-100 rounded-full" 
        />
        <div className="absolute bottom-20 left-20 w-[600px] h-[600px] rounded-full bg-orange-600 blur-[180px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-40" />
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
            text="REVISIÓN SISTEMÁTICA // PRISMA 2020" 
            color="bg-orange-600" 
            className="text-white mb-12 !rotate-1 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#000]" 
          />
          
          <div className="max-w-6xl mx-auto mb-20 text-left">
            {/* Meta-Analysis Label */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-orange-500 shadow-[4px_4px_0_0_#ea580c] border-2 border-white">
                <Filter size={32} />
              </div>
              <span className="font-mono text-sm font-black tracking-[0.2em] uppercase bg-white px-4 py-2 border-2 border-orange-600 shadow-[4px_4px_0_0_#000]">
                {ARTICLE_META.carouselTitle}
              </span>
            </motion.div>

            {/* Academic Title - Structured and Impactful */}
            <h1 className="text-4xl md:text-7xl xl:text-8xl font-display font-black leading-[0.85] text-black tracking-tighter uppercase mb-20 max-w-5xl drop-shadow-[5px_5px_0_#ea580c]">
              {ARTICLE_META.title.split(' ').map((word, k) => {
                const isHighlight = ['formación', 'pensamiento', 'crítico', 'docente', 'desarrollo'].includes(word.toLowerCase().replace(/[,.]/g, ''));
                return (
                  <span key={k} className="inline-block mr-4">
                    <span className={isHighlight ? 'text-orange-600 italic underline decoration-black/10' : 'text-black'}>
                      {word}
                    </span>
                  </span>
                )
              })}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start text-left mb-24">
            {/* Technical Box for Abstract and Authors */}
            <div className="flex-1 bg-white text-black p-12 border-8 border-black shadow-[25px_25px_0_0_#ea580c] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-mono text-[9px] opacity-40 uppercase font-black tracking-widest border-l-2 border-b-2 border-black">REF-3570 // YUCATÁN STUDY</div>
               
               <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-zinc-800 mb-12 border-l-[12px] border-orange-600 pl-8 group-hover:pl-10 transition-all">
                "{ARTICLE_META.abstract}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-12 border-t-4 border-black uppercase">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-orange-600 tracking-[0.2em] font-black">AUTORES</span>
                  <p className="font-display text-sm font-bold leading-tight decoration-orange-600 underline underline-offset-4">{ARTICLE_META.authors}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-orange-600 tracking-[0.2em] font-black">INSTITUCIÓN</span>
                  <p className="font-display text-sm font-bold uppercase">{ARTICLE_META.institution}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-orange-600 tracking-[0.2em] font-black">MÉTODO</span>
                  <p className="font-display text-sm font-bold italic">{ARTICLE_META.methodology}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-orange-600 tracking-[0.2em] font-black">DOI ACADÉMICO</span>
                  <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="font-mono text-xs font-black bg-orange-50 px-2 py-1 border border-orange-200 inline-block hover:text-orange-600 hover:underline transition-colors">{ARTICLE_META.doi}</a>
                </div>
              </div>
            </div>

            {/* Quick Stats Sidebar - The PRISMA Funnel */}
            <div className="w-full lg:w-96 space-y-8">
              <div className="bg-black p-10 border-4 border-black shadow-[12px_12px_0_0_#ea580c] text-white rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                <span className="block text-[11px] font-mono uppercase mb-4 text-orange-400 font-black">El Embudo PRISMA</span>
                <div className="flex items-center gap-6">
                   <div className="text-6xl font-display font-black italic">15</div>
                   <div className="text-3xl font-display font-black opacity-30">/ 51</div>
                </div>
                <p className="text-[10px] font-mono uppercase mt-6 border-t border-white/20 pt-4 font-black">Artículos Incluidos Tras Cribado</p>
              </div>
              <div className="bg-orange-50 p-10 border-8 border-black shadow-[12px_12px_0_0_#000] -rotate-1 group">
                <span className="block text-[11px] font-mono uppercase mb-4 text-black font-black">Sesgo Geográfico</span>
                <div className="text-5xl font-display font-black text-orange-600 group-hover:scale-110 transition-transform">86%</div>
                <p className="text-[10px] font-mono uppercase font-black opacity-60 mt-4">Europa + Asia dominan el discurso</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-32 max-w-7xl mx-auto">
            <CinematicCard color="bg-white" title="ESTÁNDAR" icon={Target} className="shadow-[15px_15px_0_0_#ea580c]">
              <div className="text-4xl font-display font-black text-black mb-2 italic uppercase">PRISMA 2020</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Transparencia Metodológica</p>
            </CinematicCard>
            <CinematicCard color="bg-zinc-900" className="text-white shadow-[15px_15px_0_0_#000] lg:translate-y-12" title="AFILIACIÓN" icon={Globe}>
              <div className="text-5xl font-display font-black text-orange-400 mb-2 uppercase leading-none italic underline decoration-white/20">MÉXICO</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">U. Autónoma de Yucatán</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="REVISIÓN" icon={Layers} className="shadow-[15px_15px_0_0_#ea580c]">
              <div className="text-3xl font-display font-black text-orange-600 mb-2 italic uppercase">10 Años</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Periodo: 2015 - 2025</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center"
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.6em] mb-12 text-orange-600">Entrar al Análisis Crítico</p>
             <div className="w-16 h-16 rounded-full bg-black border-4 border-white flex items-center justify-center animate-bounce shadow-[10px_10px_0_0_#ea580c]">
                <Search className="text-white" />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
