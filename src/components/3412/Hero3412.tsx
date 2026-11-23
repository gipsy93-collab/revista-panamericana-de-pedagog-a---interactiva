import React from 'react';
import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { Brain, Users, Database, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero3412() {
  return (
    <section className="relative bg-[#F0F0F0] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text={`ESTUDIO EMPÍRICO // ${ARTICLE_META.carouselTitle}`}
              color="bg-[#4F46E5]"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-3 py-1 rounded-xl flex items-center gap-2">
              <Brain size={14} className="text-[#4F46E5]" /> AMBA, Argentina
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-[#4F46E5] font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-[#4F46E5]" /> // INVESTIGACIÓN PSICOPEDAGÓGICA
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords text={ARTICLE_META.title} accentColor="#4F46E5" highlightEvery={3} />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-[#4F46E5] pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#4F46E5] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
                <span className="font-mono text-xs uppercase font-black text-[#4F46E5]">
                  IMPACTO SOCIOECONÓMICO
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-[#4F46E5] text-white px-2.5 py-0.5 rounded-lg">
                  α = .93
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#4F46E5] p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Muestra Total</span>
                  <div className="text-3xl md:text-4xl font-display font-black">
                    N=<RapidCounter target={Number(ARTICLE_META.n) || 1845} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">15 Instituciones</p>
                </div>
                <div className="bg-[#FDE047] text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-75 font-bold">Brecha Máxima</span>
                  <div className="text-3xl md:text-4xl font-display font-black">
                    <RapidCounter target={46.6} decimals={1} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Puntos según NSE</p>
                </div>
              </div>

              <div className="bg-zinc-900 text-white p-5 rounded-2xl border-2 border-black">
                <span className="block font-mono text-[10px] uppercase font-black text-indigo-400 mb-1">
                  Hallazgo Central
                </span>
                <p className="font-serif italic text-sm leading-relaxed">
                  "El Aprendizaje Basado en Proyectos (ABP) obtuvo las puntuaciones más elevadas en todas las dimensiones analizadas."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="LA MUESTRA" icon={Users} className="shadow-[10px_10px_0_0_#4F46E5]">
          <div className="text-3xl font-display font-black text-[#4F46E5] mb-2 uppercase">
            n=<RapidCounter target={Number(ARTICLE_META.n) || 1845} />
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">15 Escuelas del AMBA (Argentina)</p>
        </CinematicCard>
        <CinematicCard color="bg-[#FDE047]" title="SIGNIFICANCIA" icon={TrendingUp} className="shadow-[10px_10px_0_0_#000]">
          <div className="text-3xl font-display font-black text-black mb-2 uppercase">p &lt; .001</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">En Habilidades Interpersonales</p>
        </CinematicCard>
        <CinematicCard color="bg-black" className="text-white shadow-[10px_10px_0_0_#4F46E5]" title="PRECISIÓN" icon={Database}>
          <div className="text-3xl font-display font-black text-indigo-400 mb-2 uppercase">Alpha = 0.93</div>
          <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Confiabilidad Psicométrica</p>
        </CinematicCard>
      </div>
    </section>
  );
}
