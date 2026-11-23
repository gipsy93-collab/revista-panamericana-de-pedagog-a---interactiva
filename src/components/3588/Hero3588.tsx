import React from 'react';
import { motion } from 'motion/react';
import { Ruler, ShieldCheck, Activity, Binary, Sparkles } from 'lucide-react';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3588 = () => {
  return (
    <section className="relative bg-white px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-indigo-600 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="ESTUDIO INSTRUMENTAL // PILOTO PSICOMÉTRICO"
              color="bg-indigo-600"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-indigo-50 border-2 border-black px-3 py-1 rounded-xl flex items-center gap-2">
              <Binary size={14} className="text-indigo-600" /> {ARTICLE_META.carouselTitle}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-indigo-700 font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-indigo-600" /> // VALIDACIÓN DE ESCALA DE INTENCIÓN DE ABANDONO
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#4f46e5"
                highlightWords={['psicométrico', 'deserción', 'escala', 'abandono']}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-indigo-600 pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#4f46e5] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-indigo-400">
                  PRECISIÓN PSICOMÉTRICA
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-indigo-600 px-2.5 py-0.5 rounded-lg">
                  N = {ARTICLE_META.n}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-600 p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Omega McDonald</span>
                  <div className="text-4xl font-display font-black">
                    <RapidCounter target={0.959} decimals={3} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">Confiabilidad</p>
                </div>
                <div className="bg-white text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-60 font-bold">Alpha Cronbach</span>
                  <div className="text-4xl font-display font-black text-indigo-600">
                    <RapidCounter target={0.969} decimals={3} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Decisión Final</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl">
                <p className="font-serif italic text-sm text-indigo-100 leading-relaxed">
                  "La autoeficacia académica actúa como factor protector inverso significativo (r = -.436) frente a la intención de abandono."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="PROTECTOR" icon={ShieldCheck} className="shadow-[10px_10px_0_0_#4f46e5]">
          <div className="text-3xl font-display font-black text-indigo-600 mb-2 uppercase">Autoeficacia</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">r = -.436 Correlación Inversa</p>
        </CinematicCard>
        <CinematicCard color="bg-zinc-950" className="text-white shadow-[10px_10px_0_0_#000]" title="INSTRUMENTO" icon={Ruler}>
          <div className="text-3xl font-display font-black text-indigo-400 mb-2 uppercase leading-none">Escala Bäulke</div>
          <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">15 Ítems • 5 Fases Progresivas</p>
        </CinematicCard>
        <CinematicCard color="bg-white" title="DATO PILOTO" icon={Activity} className="shadow-[10px_10px_0_0_#4f46e5]">
          <div className="text-3xl font-display font-black text-black mb-2 uppercase">
            <RapidCounter target={87} suffix="%" /> Mujeres
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Representación en Muestra N={ARTICLE_META.n}</p>
        </CinematicCard>
      </div>
    </section>
  );
};
