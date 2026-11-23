import React from 'react';
import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { Heart, Clock, Users, Sparkles } from 'lucide-react';

export const Hero3562 = () => {
  return (
    <section className="relative bg-[#f0f0f0] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#ec4899] -skew-x-12 translate-x-20 z-0 pointer-events-none rounded-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-left">
          <BrutalSticker
            text="ESTUDIO CUALITATIVO // CURSO DE VIDA"
            color="bg-[#ec4899]"
            className="text-white self-start !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
          />

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-[#ec4899] font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-[#ec4899]" /> // CUIDADOS Y TRAYECTORIAS UNIVERSITARIAS
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#ec4899"
                highlightWords={['cuidados', 'maternidad', 'universitarias']}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-[#ec4899] pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: Users, val: ARTICLE_META.stats.n, bg: 'bg-black text-white', shadow: 'shadow-[6px_6px_0_0_#ec4899]' },
              { icon: Clock, val: ARTICLE_META.stats.inter, bg: 'bg-white text-black', shadow: 'shadow-[6px_6px_0_0_#000]' },
              { icon: Heart, val: ARTICLE_META.stats.method, bg: 'bg-white text-black', shadow: 'shadow-[6px_6px_0_0_#000]' },
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
                  <Icon size={20} className="text-[#ec4899]" />
                  <span className="font-mono text-sm font-bold uppercase">{stat.val}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#ec4899] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-pink-400">
                  RELATOS BIOGRÁFICOS
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-[#ec4899] px-2.5 py-0.5 rounded-lg">
                  UNAM · FES IZTACALA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#ec4899] p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Participantes</span>
                  <div className="text-4xl font-display font-black">
                    N=<RapidCounter target={8} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">Madres Estudiantes</p>
                </div>
                <div className="bg-white text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-60 font-bold">Doble Jornada</span>
                  <div className="text-4xl font-display font-black text-[#ec4899]">
                    <RapidCounter target={100} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Sobrecarga Cuidados</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl">
                <p className="font-serif italic text-sm text-pink-100 leading-relaxed">
                  "La universidad opera bajo el supuesto del estudiante sin responsabilidades de cuidado, invisibilizando la maternidad estudiantil."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  );
};
