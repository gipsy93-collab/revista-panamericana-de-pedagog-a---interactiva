import React from 'react';
import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { History, Clock, FileText, Sparkles, BookOpen, Compass } from 'lucide-react';

export const Hero3549 = () => {
  return (
    <section className="relative bg-[#f0f0f0] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#4f46e5] -skew-x-12 translate-x-20 z-0 pointer-events-none rounded-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-left">
          <BrutalSticker
            text="REVISIÓN DOCUMENTAL // TEORÍA PEDAGÓGICA"
            color="bg-[#4f46e5]"
            className="text-white self-start !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
          />

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-[#4f46e5] font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-[#4f46e5]" /> // NUEVA ESCUELA MEXICANA
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#4f46e5"
                highlightWords={['teorías', 'nueva', 'mexicana']}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-[#4f46e5] pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: FileText, val: ARTICLE_META.stats.n, bg: 'bg-black text-white', shadow: 'shadow-[6px_6px_0_0_#4f46e5]' },
              { icon: Clock, val: ARTICLE_META.stats.duration, bg: 'bg-white text-black', shadow: 'shadow-[6px_6px_0_0_#000]' },
              { icon: History, val: ARTICLE_META.stats.method, bg: 'bg-white text-black', shadow: 'shadow-[6px_6px_0_0_#000]' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 380, damping: 20 }}
                  whileHover={{ scale: 1.07, y: -4 }}
                  className={`flex items-center gap-3 px-5 py-3 border-2 border-black ${stat.bg} ${stat.shadow} rounded-2xl cursor-pointer select-none`}
                >
                  <Icon size={20} className="text-[#4f46e5]" />
                  <span className="font-mono text-sm font-bold uppercase">{stat.val}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#4f46e5] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-indigo-400">
                  GENEALOGÍA PEDAGÓGICA
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-[#4f46e5] px-2.5 py-0.5 rounded-lg">
                  1712 → 2022
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#4f46e5] p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Horizonte NEM</span>
                  <div className="text-4xl font-display font-black">
                    <RapidCounter target={23} /> Años
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">Consolidación</p>
                </div>
                <div className="bg-white text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-60 font-bold">Herramientas TIC</span>
                  <div className="text-4xl font-display font-black text-[#4f46e5]">
                    <RapidCounter target={6} /> Ejes
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Tecnología Humanista</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl">
                <p className="font-serif italic text-sm text-indigo-100 leading-relaxed">
                  "Síntesis política de tradiciones pedagógicas de Rousseau, Pestalozzi, Dewey y Freire en el Plan de Estudios 2022."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  );
};
