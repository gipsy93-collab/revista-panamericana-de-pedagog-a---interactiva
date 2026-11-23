import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Map, Layout, Zap } from 'lucide-react';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3378 = () => {
  return (
    <section className="relative bg-white px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full bg-pink-400 blur-[90px]"
        />
        <div className="absolute bottom-20 left-[10%] w-[450px] h-[450px] rounded-full bg-indigo-500 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="PAISAJES DE APRENDIZAJE // COSTA RICA"
              color="bg-pink-600"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-pink-50 border-2 border-black px-3 py-1 rounded-xl flex items-center gap-2">
              <MessageSquare size={14} className="text-pink-600" /> {ARTICLE_META.carouselTitle}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-pink-600 font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-pink-600" /> // BURBUJAS DE DIÁLOGO PEDAGÓGICO
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords text={ARTICLE_META.title} accentColor="#db2777" highlightEvery={4} />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-pink-600 pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#db2777] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-pink-400">
                  MÉTRICA DE INTERVENCIÓN
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-pink-600 px-2.5 py-0.5 rounded-lg">
                  COSTA RICA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-600 p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Participación Foros</span>
                  <div className="text-4xl font-display font-black">
                    +<RapidCounter target={24} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">Alza Cualitativa</p>
                </div>
                <div className="bg-white text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-60 font-bold">Novedad Método</span>
                  <div className="text-4xl font-display font-black text-pink-600">
                    <RapidCounter target={100} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Primera Experiencia</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl">
                <p className="font-serif italic text-sm text-pink-100 leading-relaxed">
                  "Diseño de 12 micro-paisajes de aprendizaje dialógico durante 12 semanas."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="METÁFORA" icon={Map} className="shadow-[10px_10px_0_0_#db2777]">
          <div className="text-3xl font-display font-black text-black mb-2 uppercase">Burbujas</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Reflexión Dialógica</p>
        </CinematicCard>
        <CinematicCard color="bg-zinc-900" className="text-white shadow-[10px_10px_0_0_#000]" title="RESULTADO" icon={Zap}>
          <div className="text-4xl font-display font-black text-pink-400 mb-2 uppercase leading-none">
            <RapidCounter target={85} suffix="%" /> Útil
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Valoración de Recursos</p>
        </CinematicCard>
        <CinematicCard color="bg-white" title="TIEMPO" icon={Layout} className="shadow-[10px_10px_0_0_#db2777]">
          <div className="text-3xl font-display font-black text-indigo-600 mb-2 uppercase">
            <RapidCounter target={12} /> Semanas
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">12 Micro-paisajes</p>
        </CinematicCard>
      </div>
    </section>
  );
};
