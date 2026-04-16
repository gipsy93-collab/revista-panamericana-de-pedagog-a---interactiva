import React from 'react';
import { motion } from 'motion/react';
import { BrutalTitle, BrutalSticker } from '../BrutalistLib';
import { useLanguage } from '../../LanguageContext';

export const Hero3476 = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#f0f0f0] overflow-hidden p-6 border-b-[12px] border-black">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#e81e61] border-4 border-black rotate-12 -z-0 opacity-20" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#38bdf8] border-4 border-black rounded-full -z-0 opacity-20 animate-pulse" />
      
      <div className="relative z-10 text-center max-w-6xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <BrutalSticker 
            text={t.pacheco.hero.badge} 
            color="bg-[#fbbf24]" 
            className="mb-8" 
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
        >
          <BrutalTitle className="text-[clamp(3rem,10vw,8rem)] text-black mb-6">
            {t.pacheco.hero.title.split(' ').slice(0, 2).concat(['...']).join(' ')}
          </BrutalTitle>
        </motion.div>
        
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-black text-white p-6 md:p-10 border-4 border-white shadow-[12px_12px_0_#e81e61] mb-12"
        >
            <p className="font-pop text-2xl md:text-3xl uppercase leading-none italic">
              "{t.pacheco.hero.title}"
            </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <div className="font-mono text-xl bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0_#000]">
            AUTORES: A. PACHECO-GÓMEZ / E. CISNEROS
          </div>
          <div className="font-mono text-xl bg-[#e81e61] text-white border-4 border-black px-6 py-2 shadow-[4px_4px_0_#000]">
            RPP N° 41 (2026)
          </div>
        </motion.div>
      </div>

      {/* "The Page Talks" - Intro Teaser */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-pop uppercase tracking-[0.3em] text-sm font-bold animate-bounce">Scroll para entrar al aula</span>
        <div className="w-1 h-20 bg-black" />
      </motion.div>
    </section>
  );
};
