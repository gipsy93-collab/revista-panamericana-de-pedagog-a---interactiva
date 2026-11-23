import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Award, MapPin, ShieldCheck, BookOpen } from 'lucide-react';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

interface Props {
  onStart: () => void;
}

export default function Hero3497({ onStart }: Props) {
  return (
    <section className="relative bg-[#FAF9F6] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-indigo-500/30 blur-[140px]"
        />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-amber-400/25 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Columna Izquierda: Título del artículo protagonista con caída de palabras */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="ANÁLISIS PEDAGÓGICO // PARAGUAY"
              color="bg-indigo-600"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-3 py-1 rounded-xl shadow-[3px_3px_0_0_#4f46e5]">
              PNTE 2040 · ética directiva
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-indigo-700 font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-indigo-600" /> // {ARTICLE_META.subtitle}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#4f46e5"
                highlightWords={['liderazgo', 'ético', 'educación']}
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

          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.96 }}
              onClick={onStart}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-display text-xl uppercase font-black border-4 border-black shadow-[8px_8px_0_0_#000] hover:bg-black transition-colors cursor-pointer"
            >
              Explorar Auditoría Pedagógica <Play size={20} fill="currentColor" />
            </motion.button>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta 3D Interactiva de Síntesis Conceptual */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#4f46e5] rounded-3xl flex flex-col gap-6 relative">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-indigo-400" />
                  <span className="font-mono text-xs uppercase font-black tracking-wider text-indigo-300">
                    SÍNTESIS TEÓRICA
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase font-bold bg-indigo-600 px-2.5 py-0.5 rounded-lg">
                  PARAGUAY
                </span>
              </div>

              <div className="bg-white/5 border-2 border-white/15 p-5 rounded-2xl">
                <span className="font-mono text-[10px] uppercase text-indigo-400 font-bold block mb-1">
                  EJE CENTRAL
                </span>
                <div className="text-3xl font-display uppercase font-black text-white leading-tight">
                  Del Autoritarismo a la Convicción Moral
                </div>
                <p className="text-sm font-sans text-indigo-100/80 mt-2 leading-relaxed">
                  Superación del esquema burocrático vertical mediante la interiorización de hábitos éticos y confianza institucional.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white text-black border-2 border-black p-4 rounded-2xl">
                  <span className="font-mono text-[9px] uppercase text-black/50 font-black block">
                    MARCO NACIONAL
                  </span>
                  <div className="text-xl font-display font-black text-indigo-600 mt-1">
                    PNTE 2040
                  </div>
                </div>
                <div className="bg-white text-black border-2 border-black p-4 rounded-2xl">
                  <span className="font-mono text-[9px] uppercase text-black/50 font-black block">
                    ENFOQUE
                  </span>
                  <div className="text-xl font-display font-black text-black mt-1">
                    Ética & Carisma
                  </div>
                </div>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      {/* Tarjetas inferiores con 3D Tilt */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="CONTEXTO" icon={MapPin} className="shadow-[10px_10px_0_0_#4f46e5]">
          <div className="text-3xl font-display font-black text-indigo-600 mb-2 uppercase">{ARTICLE_META.stats.context}</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Plan Nacional PNTE 2040</p>
        </CinematicCard>
        <CinematicCard color="bg-white" title="MODELO" icon={Sparkles} className="shadow-[10px_10px_0_0_#000]">
          <div className="text-3xl font-display font-black text-black mb-2 uppercase leading-tight">{ARTICLE_META.stats.model}</div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Liderazgo Ético & Carisma</p>
        </CinematicCard>
        <CinematicCard color="bg-black" className="text-white shadow-[10px_10px_0_0_#fde047]" title="ENFOQUE" icon={ShieldCheck}>
          <div className="text-2xl font-display font-black text-indigo-400 mb-2 uppercase">{ARTICLE_META.stats.focus}</div>
          <p className="text-xs font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Interiorización de Hábitos</p>
        </CinematicCard>
      </div>
    </section>
  );
}
