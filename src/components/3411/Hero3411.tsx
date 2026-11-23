import React from 'react';
import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { Sparkles, Terminal, Activity, Users, Monitor, TrendingDown, GraduationCap } from 'lucide-react';

export default function Hero3411() {
  return (
    <section className="relative bg-[#0F172A] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      {/* Luz de fondo cinemática animada */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] rounded-full bg-blue-500/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] -right-[10%] w-[40%] h-[55%] rounded-full bg-rose-500/20 blur-[150px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Columna Izquierda: TÍTULO DEL ARTÍCULO PROTAGONISTA con palabras que caen */}
        <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="ESTUDIO PREDICTIVO // BACHILLERATO TECNOLÓGICO"
              color="bg-rose-600"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs uppercase font-bold text-rose-400 bg-white/5 border border-white/15 px-3.5 py-1.5 rounded-xl">
              CETis 74 · Ensenada, B.C.
            </span>
          </div>

          {/* Subtítulo + Título con caída de palabras e interactividad con el mouse */}
          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-rose-400 text-xs md:text-sm tracking-[0.28em] uppercase font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-rose-500" /> // {ARTICLE_META.subtitle}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-white selection:bg-rose-600">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#f43f5e"
                highlightWords={['mantenerse', 'desafiliación', 'tecnológico']}
              />
            </h1>
          </div>

          {/* Resumen con entrada suave */}
          <motion.p
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-slate-300 leading-relaxed max-w-2xl border-l-4 border-rose-500 pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>

          {/* Píldoras interactivas de métricas rápidas */}
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: Users, label: 'Muestra', val: `N = ${ARTICLE_META.n} Estudiantes`, bg: 'bg-white text-black', shadow: 'shadow-[6px_6px_0_0_#e11d48]' },
              { icon: GraduationCap, label: 'Predictor #1', val: 'Promedio Secundaria (OR 2.04)', bg: 'bg-slate-900 text-white border-white/20', shadow: 'shadow-[6px_6px_0_0_#3b82f6]' },
              { icon: Monitor, label: 'Factor Digital', val: 'PC en Casa (OR 0.399)', bg: 'bg-slate-900 text-white border-white/20', shadow: 'shadow-[6px_6px_0_0_#f43f5e]' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.75, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.1, type: 'spring', stiffness: 380, damping: 20 }}
                  whileHover={{ scale: 1.07, y: -5 }}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center gap-3 px-5 py-3 border-2 border-black ${item.bg} ${item.shadow} rounded-2xl cursor-pointer select-none`}
                >
                  <Icon size={20} className="text-rose-500 shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase opacity-60 font-bold leading-none">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs md:text-sm font-black uppercase mt-0.5">
                      {item.val}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Columna Derecha: Tarjeta Interactiva 3D con el Hallazgo Estadístico (28%) en su lugar armónico */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-white text-black border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#e11d48] rounded-3xl flex flex-col gap-6 relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="absolute -top-4 -right-4 bg-rose-600 text-white px-4 py-1.5 border-2 border-black rounded-2xl font-mono text-xs font-black uppercase shadow-[4px_4px_0_0_#000] flex items-center gap-1.5"
              >
                <Activity size={15} /> ALERTA TEMPRANA
              </motion.div>

              <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
                <span className="font-mono text-[10px] uppercase font-black tracking-widest text-black/60">
                  INDICADOR CRÍTICO // COHORTE 2023
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-rose-100 text-rose-700 border border-rose-300 px-2.5 py-0.5 rounded-lg">
                  1er → 2do Semestre
                </span>
              </div>

              <div className="bg-slate-950 text-white p-6 rounded-2xl border-4 border-black flex items-center justify-between gap-4 shadow-inner">
                <div>
                  <span className="font-mono text-[10px] uppercase text-rose-400 font-bold tracking-widest block mb-1">
                    TASA DE DESAFILIACIÓN
                  </span>
                  <div className="text-6xl md:text-7xl font-display font-black leading-none text-white">
                    <RapidCounter target={28} suffix="%" />
                  </div>
                  <span className="font-mono text-[11px] text-slate-300 mt-2 block">
                    <RapidCounter target={141} /> de <RapidCounter target={500} /> estudiantes causaron baja
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-rose-600/20 border-2 border-rose-500 flex items-center justify-center text-rose-500 shrink-0">
                  <TrendingDown size={34} />
                </div>
              </div>

              {/* Desglose rápido interactivo */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-zinc-100 border-2 border-black p-4 rounded-2xl"
                >
                  <span className="font-mono text-[9px] uppercase text-black/50 font-black block">
                    VARIANZA EXPLICADA
                  </span>
                  <div className="text-2xl font-display font-black text-rose-600 mt-1">
                    <RapidCounter target={8.9} decimals={1} suffix="%" />
                  </div>
                  <span className="font-mono text-[9px] uppercase text-black/60 font-bold">
                    R² de Nagelkerke
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="bg-zinc-100 border-2 border-black p-4 rounded-2xl"
                >
                  <span className="font-mono text-[9px] uppercase text-black/50 font-black block">
                    BAJAS HOMBRES
                  </span>
                  <div className="text-2xl font-display font-black text-black mt-1">
                    <RapidCounter target={58.2} decimals={1} suffix="%" />
                  </div>
                  <span className="font-mono text-[9px] uppercase text-black/60 font-bold">
                    82 de 141 bajas
                  </span>
                </motion.div>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      {/* Tarjetas inferiores con 3D tilt y micro-interacciones */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-14">
        <Tilt3DCard>
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/15 p-7 text-left hover:border-rose-500 transition-colors group rounded-3xl h-full">
            <div className="mb-4 flex justify-between items-start">
              <div className="p-3 bg-white/10 border border-white/20 rounded-2xl">
                <Terminal size={20} className="text-rose-500" />
              </div>
              <span className="font-mono text-[10px] text-white/40 font-bold">MUESTRA_01</span>
            </div>
            <h4 className="font-display text-xl text-white uppercase mb-2 tracking-normal">
              Seguimiento Longitudinal
            </h4>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Población de <RapidCounter target={ARTICLE_META.n} /> estudiantes analizada en el tránsito crítico del primer al segundo semestre en Ensenada, B.C.
            </p>
          </div>
        </Tilt3DCard>

        <Tilt3DCard>
          <div className="bg-white text-black p-7 text-left border-4 border-black shadow-[10px_10px_0_0_#e11d48] rounded-3xl h-full">
            <div className="mb-4 flex justify-between items-start text-black">
              <div className="p-3 bg-black text-white rounded-2xl">
                <Sparkles size={20} />
              </div>
              <span className="font-mono text-[10px] opacity-50 font-black">OBJETIVO_CENTRAL</span>
            </div>
            <h4 className="font-display text-xl uppercase font-black mb-2 tracking-normal">
              Determinantes de Permanencia
            </h4>
            <p className="text-sm font-sans font-semibold leading-relaxed text-black/80">
              Identificar mediante regresión logística no paramétrica qué variables académicas y tecnológicas sostienen la trayectoria escolar.
            </p>
          </div>
        </Tilt3DCard>

        <Tilt3DCard>
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/15 p-7 text-left hover:border-rose-500 transition-colors group rounded-3xl h-full">
            <div className="mb-4 flex justify-between items-start">
              <div className="p-3 bg-white/10 border border-white/20 rounded-2xl">
                <Activity size={20} className="text-blue-400" />
              </div>
              <span className="font-mono text-[10px] text-white/40 font-bold">HALLAZGO_CLAVE</span>
            </div>
            <h4 className="font-display text-xl text-white uppercase mb-2 tracking-normal">
              Peso del Promedio Previo
            </h4>
            <div className="text-3xl font-display font-black text-rose-500">
              OR <RapidCounter target={2.04} decimals={2} />
            </div>
            <p className="text-xs font-sans text-slate-300 mt-1 leading-relaxed">
              Cada punto adicional en secundaria duplica la probabilidad de mantenerse en el plantel.
            </p>
          </div>
        </Tilt3DCard>
      </div>
    </section>
  );
}
