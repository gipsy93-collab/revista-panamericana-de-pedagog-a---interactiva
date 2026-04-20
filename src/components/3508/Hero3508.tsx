import React from 'react';
import { motion } from 'motion/react';
import { Eye, BrainCircuit, Heart, Fingerprint } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard, ArticleFicha } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3508 = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#FAF5FF] px-4 py-32 border-b-[20px] border-black">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-violet-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-pink-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe-light.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full mb-12">
            <BrutalSticker 
              text="ESTUDIO CUALITATIVO COMPARADO" 
              color="bg-violet-600" 
              className="text-white mx-auto !rotate-0 px-10 py-3 text-2xl border-4 shadow-[10px_10px_0_0_#000] z-10" 
            />
            
            <motion.div 
              initial={{ rotate: -15, x: 20 }}
              animate={{ rotate: 15, x: 0 }}
              transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
              className="absolute -top-16 -right-10 md:right-20 w-32 h-32 bg-pink-500 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <BrainCircuit size={56} />
            </motion.div>
          </div>

          <PremiumTitle 
            subtitle={ARTICLE_META.subtitle.toUpperCase()} 
            className="items-center max-w-6xl mx-auto mb-16 leading-none"
          >
            {ARTICLE_META.title.toUpperCase()}
          </PremiumTitle>

          <div className="flex flex-col lg:flex-row gap-16 items-start justify-center w-full mb-24">
            <div className="flex-1 max-w-2xl text-left bg-white p-12 border-8 border-black shadow-[25px_25px_0_0_#8b5cf6] rotate-1 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">QUALITATIVE_DATA // ESP-ECU</div>
               <p className="text-2xl font-serif italic leading-relaxed text-violet-950 mb-8">
                 "{ARTICLE_META.abstract}"
               </p>
               <div className="grid grid-cols-2 gap-6 border-t-4 border-violet-100 pt-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-violet-600 text-white flex items-center justify-center rounded-full font-black">E1</div>
                    <span className="font-mono text-xs font-black uppercase">España</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-pink-500 text-white flex items-center justify-center rounded-full font-black">E2</div>
                    <span className="font-mono text-xs font-black uppercase">Ecuador</span>
                  </div>
               </div>
            </div>

            <ArticleFicha 
              doi={ARTICLE_META.doi}
              authors={ARTICLE_META.authors}
              institution={ARTICLE_META.institution}
              vol={ARTICLE_META.journal}
              date="2026"
              className="lg:mt-24 shadow-[15px_15px_0_0_#ec4899]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left mb-24 w-full px-4">
            <CinematicCard color="bg-white" title="MUESTRA" icon={Eye} className="shadow-[8px_8px_0_0_#8b5cf6]">
              <div className="text-4xl font-display font-black text-violet-700 mb-2 italic leading-none">{ARTICLE_META.stats.sample}</div>
              <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Entrevistas Profundas</p>
            </CinematicCard>
            <CinematicCard color="bg-violet-50" title="DISPOSICIÓN" icon={Heart} className="shadow-[8px_8px_0_0_#000] lg:translate-y-4">
              <div className="text-4xl font-display font-black text-pink-600 mb-2 leading-none uppercase">EMOCIONAL</div>
              <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Propiedad Predictiva</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[8px_8px_0_0_#ec4899] lg:translate-y-8" title="RIGIDEZ" icon={Fingerprint}>
              <div className="text-5xl font-display font-black text-violet-300 mb-2 leading-none">{ARTICLE_META.stats.rigidity}</div>
              <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Enfoque Curricular</p>
            </CinematicCard>
            <CinematicCard color="bg-white" className="shadow-[8px_8px_0_0_#8b5cf6] lg:translate-y-12" title="TERRITORIO">
              <div className="text-4xl font-display font-black text-black mb-2 leading-none uppercase italic">{ARTICLE_META.stats.geography}</div>
              <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Sistemas Educativos</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-4 text-violet-600 animate-pulse">Analizar Percepciones</p>
             <div className="w-1 h-32 bg-violet-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
