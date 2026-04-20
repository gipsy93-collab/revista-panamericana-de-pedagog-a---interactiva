import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Users, Zap, Binary, BookOpen } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard, ArticleFicha } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3467 = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#EEF2FF] px-4 py-32 border-b-[20px] border-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-indigo-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-red-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker 
            text="SOCIEDAD DIGITAL / POSTPANDEMIA" 
            color="bg-indigo-600" 
            className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#000]" 
          />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-red-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <ShieldAlert size={48} />
            </motion.div>
            
            <div className="text-[6rem] md:text-[8rem] font-display uppercase leading-[0.8] text-indigo-700 drop-shadow-[15px_15px_0_#000] mb-8 tracking-tighter" style={{ WebkitTextStroke: 'var(--brutal-stroke-width) black' }}>
              Ciberacoso
            </div>
          </div>

          <PremiumTitle subtitle="COMPORTAMIENTOS AGRESIVOS Y PREVENCIÓN" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            ESTUDIANTES UNIVERSITARIOS
          </PremiumTitle>

          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center w-full mb-24">
            <div className="flex-1 max-w-2xl text-left bg-white p-10 border-8 border-black shadow-[20px_20px_0_0_#6366f1] rotate-1 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">ABSTRACT / RPP-3467</div>
               <p className="text-2xl font-serif italic leading-relaxed text-indigo-950 mb-6">
                 "{ARTICLE_META.abstract}"
               </p>
               <div className="flex items-center gap-4 border-t-4 border-indigo-100 pt-6">
                 <div className="w-12 h-12 bg-black flex items-center justify-center text-white rounded-full font-black text-xl">U</div>
                 <div>
                   <p className="font-display uppercase text-lg font-black leading-none">{ARTICLE_META.institution}</p>
                   <p className="font-mono text-xs opacity-50 font-black">MÉXICO // 2026</p>
                 </div>
               </div>
            </div>

            <ArticleFicha 
              doi={ARTICLE_META.doi}
              authors={ARTICLE_META.authors}
              institution={ARTICLE_META.institution}
              vol={ARTICLE_META.journal}
              date="SEP 2025"
              className="lg:mt-12"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-24 w-full">
            <CinematicCard color="bg-white" title="MUESTRA" icon={Users} className="shadow-[8px_8px_0_0_#ef4444]">
              <div className="text-6xl font-display font-black text-indigo-700 mb-2 italic leading-none">N={ARTICLE_META.stats.sample}</div>
              <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Estudiantes de Grado</p>
            </CinematicCard>
            <CinematicCard color="bg-indigo-50" title="PREVALENCIA" icon={Zap} className="shadow-[8px_8px_0_0_#000] lg:translate-y-4">
              <div className="text-6xl font-display font-black text-red-600 mb-2 leading-none">{ARTICLE_META.stats.prevalence}</div>
              <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Experiencia de Acoso</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[8px_8px_0_0_#6366f1] lg:translate-y-8" title="CONFIABILIDAD" icon={Binary}>
              <div className="text-4xl font-display font-black text-indigo-300 mb-2 italic uppercase">{ARTICLE_META.stats.reliability}</div>
              <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Alpha de Cronbach</p>
            </CinematicCard>
            <CinematicCard color="bg-white" className="shadow-[8px_8px_0_0_#f59e0b] lg:translate-y-12" title="MÉTRICA CLAVE" icon={BookOpen}>
              <div className="text-4xl font-display font-black text-black mb-2 leading-none uppercase italic">PROVOCACIÓN</div>
              <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">-21% Probabilidad</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-4 text-indigo-600 animate-pulse">Explorar Hallazgos</p>
             <div className="w-1 h-24 bg-gradient-to-b from-indigo-600 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
