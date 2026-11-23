import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Globe, BarChart2, BookPlus, Sparkles } from 'lucide-react';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3476 = () => {
  return (
    <section className="relative bg-[#F0FDF4] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-emerald-600 blur-[140px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-teal-400 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="REVISIÓN SISTEMÁTICA // 2015-2025"
              color="bg-emerald-600"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-3 py-1 rounded-xl flex items-center gap-2">
              <HeartHandshake size={14} className="text-emerald-600" /> Método PRISMA · 23 Estudios
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-emerald-800 font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-emerald-600" /> // {ARTICLE_META.subtitle}
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#059669"
                highlightWords={['docentes', 'inclusión', 'superior']}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-emerald-600 pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#059669] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-emerald-400">
                  SÍNTESIS PRISMA
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-emerald-600 px-2.5 py-0.5 rounded-lg">
                  228 → 23 ARTÍCULOS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-600 p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Corpus Final</span>
                  <div className="text-4xl font-display font-black">
                    <RapidCounter target={23} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">Estudios Empíricos</p>
                </div>
                <div className="bg-white text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-60 font-bold">Leyes Inclusivas</span>
                  <div className="text-4xl font-display font-black text-red-600">
                    <RapidCounter target={17} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Nivel Global UNESCO</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl">
                <p className="font-serif italic text-sm text-emerald-100 leading-relaxed">
                  "La inclusión depende mayoritariamente de la voluntad individual del profesor ante la fragilidad institucional."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="CORPUS" icon={Globe} className="shadow-[8px_8px_0_0_#059669]">
          <div className="text-3xl font-display font-black text-emerald-700 mb-2 leading-none">
            <RapidCounter target={23} /> Estudios
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Investigaciones Empíricas</p>
        </CinematicCard>
        <CinematicCard color="bg-emerald-50" title="BRECHA LEGAL" icon={BarChart2} className="shadow-[8px_8px_0_0_#000]">
          <div className="text-3xl font-display font-black text-red-600 mb-2 leading-none">
            <RapidCounter target={17} suffix="%" /> Leyes
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Países con Inclusión Plena</p>
        </CinematicCard>
        <CinematicCard color="bg-black" className="text-white shadow-[8px_8px_0_0_#10b981]" title="FACTOR RIESGO" icon={BookPlus}>
          <div className="text-3xl font-display font-black text-emerald-300 mb-2 uppercase">
            <RapidCounter target={2.5} decimals={1} suffix="x" /> Riesgo
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Riesgo de Exclusión</p>
        </CinematicCard>
        <CinematicCard color="bg-white" className="shadow-[8px_8px_0_0_#059669]" title="HORIZONTE" icon={Globe}>
          <div className="text-2xl font-display font-black text-black mb-2 leading-none uppercase">2015 - 2025</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Década Analizada</p>
        </CinematicCard>
      </div>
    </section>
  );
};
