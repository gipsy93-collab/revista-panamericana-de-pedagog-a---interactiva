import React from 'react';
import { motion } from 'motion/react';
import { Users, Fingerprint, ShieldAlert, Award, BookOpen, Compass, HeartHandshake } from 'lucide-react';
import { BrutalSticker, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3606 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32">
      {/* Background Elements - Organic Inclusion Theme */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[700px] h-[700px] rounded-full bg-emerald-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-zinc-200 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Header Sticker */}
          <BrutalSticker 
            text="ESTUDIO CUALITATIVO // AJUSTES RAZONABLES" 
            color="bg-emerald-600" 
            className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#000]" 
          />
          
          <div className="max-w-6xl mx-auto mb-16 text-left">
            {/* Meta Label */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-emerald-400 shadow-[4px_4px_0_0_#10b981] border-2 border-white">
                <HeartHandshake size={32} />
              </div>
              <span className="font-mono text-sm font-black tracking-[0.2em] uppercase bg-black text-white px-4 py-2 border-2 border-emerald-600 shadow-[6px_6px_0_0_#10b981]">
                {ARTICLE_META.carouselTitle}
              </span>
            </motion.div>

            {/* Academic Title - Bold and Accessible */}
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-display font-black leading-[0.95] text-black tracking-tighter uppercase mb-20 max-w-6xl drop-shadow-[5px_5px_0_rgba(16,185,129,0.2)]">
              {ARTICLE_META.title.split(' ').map((word, k) => (
                <span key={k} className="inline-block mr-4">
                  <span className={['ajustes', 'inclusivas', 'discapacidad', 'tea'].includes(word.toLowerCase()) ? 'text-emerald-600 italic underline decoration-black/10' : 'text-black'}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start text-left mb-24">
            {/* Technical Box for Abstract and Authors */}
            <div className="flex-1 bg-black text-white p-12 border-8 border-emerald-600 shadow-[20px_20px_0_0_#000] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-mono text-[9px] opacity-40 uppercase font-black tracking-widest text-emerald-300">REF-3606 // UDECOL // MEXICO</div>
               
               <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-zinc-100 mb-10 border-l-8 border-emerald-600 pl-8 group-hover:pl-10 transition-all">
                "{ARTICLE_META.abstract}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-white/20 uppercase font-bold">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-emerald-500 tracking-[0.2em] font-black italic">AUTORES</span>
                  <p className="font-display text-sm font-bold leading-tight underline decoration-emerald-600 underline-offset-4">{ARTICLE_META.authors}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-emerald-500 tracking-[0.2em] font-black italic">INSTITUCIÓN</span>
                  <p className="font-display text-sm font-bold uppercase">{ARTICLE_META.institution}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-emerald-500 tracking-[0.2em] font-black italic">METODOLOGÍA</span>
                  <p className="font-display text-sm font-bold italic">{ARTICLE_META.methodology}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-emerald-500 tracking-[0.2em] font-black italic">DOI</span>
                  <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="font-mono text-xs font-black bg-emerald-900/50 px-3 py-1 border border-emerald-500/30 inline-block hover:text-emerald-400 hover:underline transition-colors">{ARTICLE_META.doi}</a>
                </div>
              </div>
            </div>

            {/* Quick Stats Sidebar - The GEPIA Matrix */}
            <div className="w-full lg:w-80 space-y-8">
              <div className="bg-emerald-600 p-8 border-4 border-black shadow-[10px_10px_0_0_#000] text-white -rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                <span className="block text-[11px] font-mono uppercase mb-3 font-black tracking-tighter">Sensibilización GEPIA-A</span>
                <div className="text-6xl font-display font-black italic">3.87</div>
                <p className="text-[10px] font-mono uppercase opacity-70 mt-3 border-t border-white/20 pt-3 font-black tracking-widest leading-none">Poder de la Cultura Docente</p>
              </div>
              <div className="bg-black p-8 border-4 border-emerald-600 shadow-[10px_10px_0_0_#10b981] rotate-2 text-white group">
                <span className="block text-[11px] font-mono uppercase mb-3 text-emerald-500 font-black">Vínculo Familiar</span>
                <div className="text-5xl font-display font-black text-rose-500 group-hover:scale-110 transition-transform italic underline underline-offset-8">1.75</div>
                <p className="text-[10px] font-mono uppercase opacity-50 mt-6 tracking-widest border-t border-white/10 pt-4 leading-none font-black italic">Punto Crítico de Mejora</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-28 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="EL HALLAZGO" icon={ShieldAlert} className="shadow-[15px_15px_0_0_#10b981]">
              <div className="text-3xl font-display font-black text-emerald-600 mb-2 italic uppercase leading-none">Voluntad</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase tracking-tighter">Dependencia del Criterio Personal</p>
            </CinematicCard>
            <CinematicCard color="bg-zinc-950" className="text-white shadow-[15px_15px_0_0_#000] lg:translate-y-10" title="LAS BAPS" icon={Fingerprint}>
              <div className="text-4xl font-display font-black text-emerald-400 mb-2 uppercase leading-none italic tracking-tighter">BARRERAS</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Estructurales y Normativas</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="LA BRECHA" icon={Compass} className="shadow-[15px_15px_0_0_#10b981]">
              <div className="text-3xl font-display font-black text-black mb-2 italic uppercase leading-none">Normativa</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase tracking-tighter">Papel vs Práctica Real</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-10 text-emerald-600 animate-pulse italic">Analizar Prácticas Inclusivas</p>
             <div className="w-px h-24 bg-black mx-auto shadow-[2px_0_0_#10b981]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
