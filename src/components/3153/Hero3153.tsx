import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Binary, Ghost, Droplet, UserMinus } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export default function Hero3153() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-pop-yellow px-4 pt-32 pb-16">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-blue-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-slate-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text="ANÁLISIS PSICOSOCIAL / MÉXICO" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#2563eb]" />
          
          <div className="max-w-6xl mx-auto mb-16 text-left">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[4px_4px_0_0_#000] border-2 border-black">
                <Ghost size={24} />
              </div>
              <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase bg-blue-100 px-3 py-1 border border-black italic">
                {ARTICLE_META.carouselTitle}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl xl:text-8xl font-display leading-[1] text-black tracking-tight uppercase mb-12 max-w-5xl">
              {ARTICLE_META.title.split(' ').map((word, k) => (
                <span key={k} className="inline-block mr-4">
                  <span className={k % 3 === 0 ? 'text-blue-600' : 'text-black'}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start text-left mb-20">
            {/* Dark Box for Abstract and Tech Data */}
            <div className="flex-1 bg-zinc-900 text-white p-10 border-4 border-black shadow-[15px_15px_0_0_#2563eb] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 font-mono text-[8px] opacity-30 uppercase font-black tracking-tighter">REF-3153 // RESUMEN</div>
               <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-blue-50/90 mb-10 border-l-4 border-blue-600 pl-6">
                "{ARTICLE_META.abstract}"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10 uppercase">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-blue-500 tracking-[0.2em] font-black">AUTORES</span>
                  <p className="font-display text-sm font-bold leading-tight">{ARTICLE_META.authors}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-blue-500 tracking-[0.2em] font-black">INSTITUCIÓN</span>
                  <p className="font-display text-sm font-bold">{ARTICLE_META.institution}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-blue-500 tracking-[0.2em] font-black">DOI / ID ACADÉMICO</span>
                  <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="font-mono text-xs opacity-70 hover:text-blue-500 hover:underline transition-colors">{ARTICLE_META.doi}</a>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-blue-500 tracking-[0.2em] font-black">LOCACIÓN / FECHA</span>
                  <p className="font-display text-sm font-bold">{ARTICLE_META.country} · {ARTICLE_META.date}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats / Stickers */}
            <div className="w-full lg:w-72 space-y-6">
              <div className="bg-blue-600 p-6 border-4 border-black shadow-[8px_8px_0_0_#000] text-white">
                <span className="block text-[10px] font-mono uppercase mb-2">Población</span>
                <div className="text-4xl font-display font-black italic">N={ARTICLE_META.n}</div>
                <p className="text-[10px] font-mono uppercase opacity-70 mt-2">Estudiantes Universitarios</p>
              </div>
              <div className="bg-yellow-400 p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
                <span className="block text-[10px] font-mono uppercase mb-2">Metodología</span>
                <div className="text-2xl font-display font-black leading-none uppercase">Grounded Theory</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="METODOLOGÍA" icon={UserMinus} className="shadow-[12px_12px_0_0_#2563eb]">
              <div className="text-4xl font-display font-black text-blue-600 mb-2 leading-none uppercase italic">Grounded Theory</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Cualitativa N={ARTICLE_META.n}</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="FOCO ESTIGMA" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:translate-y-8">
              <div className="text-6xl font-display font-black text-black mb-2 uppercase leading-none italic">Piel</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">El Voto de lo Visible</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="CONCEPTO">
              <div className="text-xl font-display font-black text-blue-400 mb-2 italic uppercase">Disonancia Cognitiva</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">"{ARTICLE_META.subtitle}"</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-4 text-blue-600 animate-pulse text-center">Explorar Hallazgos de Investigación</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
