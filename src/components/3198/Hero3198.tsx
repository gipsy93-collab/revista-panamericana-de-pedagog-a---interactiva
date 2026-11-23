import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Sparkles, Users, UserPlus } from 'lucide-react';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3198 = () => {
  return (
    <section className="relative bg-white px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-rose-600 blur-[140px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-blue-400 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="EDUCOMUNICACIÓN // ADULTOS MAYORES"
              color="bg-rose-600"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-rose-50 border-2 border-black px-3 py-1 rounded-xl flex items-center gap-2">
              <Smartphone size={14} className="text-rose-600" /> {ARTICLE_META.carouselTitle}
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-rose-600 font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-rose-600" /> // INCLUSIÓN DIGITAL INTERGENERACIONAL
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords text={ARTICLE_META.title} accentColor="#e11d48" highlightEvery={3} />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-rose-600 pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#e11d48] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-rose-400">
                  MÉTRICA SILVER SURFERS
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-rose-600 px-2.5 py-0.5 rounded-lg">
                  TEORÍA TRIC
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-rose-600 p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-80">Población</span>
                  <div className="text-4xl font-display font-black">
                    N=<RapidCounter target={Number(ARTICLE_META.n) || 10} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">
                    {ARTICLE_META.ageRange}
                  </p>
                </div>
                <div className="bg-yellow-400 text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-70 font-bold">Paradigma</span>
                  <div className="text-2xl font-display font-black uppercase leading-tight">
                    Factor R
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Relación + TIC</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl">
                <p className="font-serif italic text-sm text-rose-100 leading-relaxed">
                  "{ARTICLE_META.subtitle}"
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="MÉTODO" icon={Users} className="shadow-[10px_10px_0_0_#e11d48]">
          <div className="text-3xl font-display font-black text-rose-600 mb-2 leading-none uppercase">Grounded Theory</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Método Comparativo Constante</p>
        </CinematicCard>
        <CinematicCard color="bg-white" title="RESULTADO" icon={Sparkles} className="shadow-[10px_10px_0_0_#000]">
          <div className="text-4xl font-display font-black text-black mb-2 uppercase leading-none">Autonomía</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Integración Tecnológica Exitosa</p>
        </CinematicCard>
        <CinematicCard color="bg-black" className="text-white shadow-[10px_10px_0_0_#fde047]" title="CONCEPTO" icon={UserPlus}>
          <div className="text-2xl font-display font-black text-rose-400 mb-2 uppercase">Envejecimiento Activo</div>
          <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">{ARTICLE_META.subtitle}</p>
        </CinematicCard>
      </div>
    </section>
  );
};
