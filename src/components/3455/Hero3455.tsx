import React from 'react';
import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { Heart, Sparkles, Brain, Lock, Users } from 'lucide-react';

export default function Hero3455() {
  return (
    <section className="relative bg-[#F8F7FF] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="ESTUDIO INTERPRETATIVO // FORMACIÓN DOCENTE"
              color="bg-[#7C3AED]"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-3 py-1 rounded-xl flex items-center gap-2">
              <Heart size={14} className="text-[#7C3AED]" /> Yucatán, México
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-[#7C3AED] font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-[#7C3AED]" /> // GESTIÓN EMOCIONAL Y CULTURA DE PAZ
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#7C3AED"
                highlightWords={['personal', 'paz', 'docente']}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-[#7C3AED] pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#7C3AED] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-violet-400">
                  DIMENSIÓN PERSONAL
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-[#7C3AED] px-2.5 py-0.5 rounded-lg">
                  UADY · N=57
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#7C3AED] p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Mujeres</span>
                  <div className="text-4xl font-display font-black">
                    <RapidCounter target={61.4} decimals={1} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">Participación</p>
                </div>
                <div className="bg-yellow-400 text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-75 font-bold">Hombres</span>
                  <div className="text-4xl font-display font-black">
                    <RapidCounter target={38.6} decimals={1} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Participación</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl flex items-start gap-3">
                <Lock size={20} className="text-violet-400 shrink-0 mt-0.5" />
                <p className="font-serif italic text-sm text-violet-100 leading-relaxed">
                  "¿Aprender a enseñar o aprender a ser? Dificultad crítica para compartir vivencias personales ante pares."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="LA MUESTRA" icon={Users} className="shadow-[10px_10px_0_0_#7C3AED]">
          <div className="text-3xl font-display font-black text-[#7C3AED] mb-2 uppercase">
            n=<RapidCounter target={57} /> Futuros Docentes
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Formación inicial en Yucatán</p>
        </CinematicCard>
        <CinematicCard color="bg-[#7C3AED]" className="text-white shadow-[10px_10px_0_0_#000]" title="VALORES ANCLA" icon={Heart}>
          <div className="text-2xl font-display font-black text-white mb-2 uppercase">Respeto y Compromiso</div>
          <p className="text-xs font-mono font-black border-t-2 border-white/25 pt-2 uppercase">Pilares de la convivencia pacífica</p>
        </CinematicCard>
        <CinematicCard color="bg-yellow-400" title="TENSIÓN EMOCIONAL" icon={Brain} className="shadow-[10px_10px_0_0_#000]">
          <div className="text-2xl font-display font-black text-black mb-2 uppercase">Cuidado Docente</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">El trabajo personal requiere acompañamiento</p>
        </CinematicCard>
      </div>
    </section>
  );
}
