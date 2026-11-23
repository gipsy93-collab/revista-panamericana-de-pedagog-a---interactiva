import React from 'react';
import { motion } from 'motion/react';
import { Film, Play, Sparkles, BookOpen, Users, Tv } from 'lucide-react';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative bg-[#1a1a1a] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black text-white">
      {/* Iluminación cinemática */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-amber-500/15 blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-rose-600/15 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="INVESTIGACIÓN-ACCIÓN // LITERATURA Y CINE"
              color="bg-amber-400"
              className="text-black !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-white/10 border border-white/20 px-3 py-1 rounded-xl flex items-center gap-2 text-amber-300">
              <Film size={14} /> Chetumal, Quintana Roo
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-amber-400 font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-amber-400" /> // {ARTICLE_META.subtitle}
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-white">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#fbbf24"
                highlightWords={['cine', 'mediador', 'literatura']}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-white/80 leading-relaxed max-w-2xl border-l-4 border-amber-400 pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={onStart}
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-black font-display text-xl uppercase font-black rounded-2xl border-4 border-black shadow-[8px_8px_0_0_#f43f5e] hover:bg-white transition-colors cursor-pointer"
            >
              Explorar la Experiencia <Play size={20} fill="currentColor" />
            </motion.button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-white text-black border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#fbbf24] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
                <span className="font-mono text-xs uppercase font-black text-black">
                  MEDIACIÓN AUDIOVISUAL
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-black text-amber-400 px-2.5 py-0.5 rounded-lg">
                  BACHILLERATO CBQ 1
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 text-amber-400">Uso Previo</span>
                  <div className="text-4xl font-display font-black">
                    <RapidCounter target={21} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1">Material Audiovisual</p>
                </div>
                <div className="bg-amber-400 text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-75 font-bold">Muestra</span>
                  <div className="text-4xl font-display font-black">
                    N=<RapidCounter target={30} />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-85 mt-1 font-bold">Estudiantes</p>
                </div>
              </div>

              <div className="bg-zinc-100 border-2 border-black p-4 rounded-2xl">
                <p className="font-serif italic text-sm text-black/80 leading-relaxed">
                  "De espectadores pasivos a lectores críticos de la imagen: articulación de las dimensiones afectiva, cognitiva y social."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14 text-black">
        <CinematicCard color="bg-white" title="DIAGNÓSTICO" icon={Tv} className="shadow-[10px_10px_0_0_#fbbf24]">
          <div className="text-3xl font-display font-black text-black mb-2 uppercase">
            Solo <RapidCounter target={21} suffix="%" />
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Usaba cine en clases de literatura</p>
        </CinematicCard>
        <CinematicCard color="bg-amber-400" title="CORPUS FÍLMICO" icon={BookOpen} className="shadow-[10px_10px_0_0_#000]">
          <div className="text-3xl font-display font-black text-black mb-2 uppercase">
            <RapidCounter target={3} /> Obras Clave
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Shakespeare, García Márquez y Orwell</p>
        </CinematicCard>
        <CinematicCard color="bg-white" title="IMPACTO" icon={Users} className="shadow-[10px_10px_0_0_#fbbf24]">
          <div className="text-3xl font-display font-black text-rose-600 mb-2 uppercase">3 Dimensiones</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Afectiva, Cognitiva y Social</p>
        </CinematicCard>
      </div>
    </section>
  );
}
