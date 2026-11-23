import React from 'react';
import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, CinematicCard, FallingWords, Tilt3DCard, RapidCounter } from '../BrutalistLib';
import { Bird, ShieldCheck, MapPin, AlertTriangle, Sparkles, Users } from 'lucide-react';

export default function Hero3454() {
  return (
    <section className="relative bg-[#F3F4F6] px-6 md:px-12 lg:px-24 pt-10 pb-20 md:pt-14 md:pb-24 overflow-hidden border-b-[16px] border-black">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <BrutalSticker
              text="ESTUDIO EXPLORATORIO // CULTURA DE PAZ"
              color="bg-[#059669]"
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl"
            />
            <span className="font-mono text-xs font-bold uppercase bg-white border-2 border-black px-3 py-1 rounded-xl flex items-center gap-2">
              <MapPin size={14} className="text-[#059669]" /> Colima, México
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] text-[#059669] font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-[#059669]" /> // EDUCACIÓN SUPERIOR Y JUSTICIA SOCIAL
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal text-black">
              <FallingWords
                text={ARTICLE_META.title}
                accentColor="#059669"
                highlightWords={['inclusión', 'paz', 'violencia']}
              />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/80 leading-relaxed max-w-2xl border-l-4 border-[#059669] pl-5"
          >
            {ARTICLE_META.abstract}
          </motion.p>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-2">
          <Tilt3DCard className="w-full max-w-md lg:max-w-[460px]">
            <div className="bg-zinc-900 text-white border-4 border-black p-7 md:p-8 shadow-[16px_16px_0_0_#059669] rounded-3xl flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <span className="font-mono text-xs uppercase font-black text-emerald-400">
                  PERCEPCIÓN ESTUDIANTIL
                </span>
                <span className="font-mono text-[10px] uppercase font-bold bg-[#059669] px-2.5 py-0.5 rounded-lg">
                  20 LICENCIATURAS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#059669] p-5 border-2 border-black rounded-2xl text-white">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-85">Demanda Curricular</span>
                  <div className="text-4xl font-display font-black">
                    <RapidCounter target={92.7} decimals={1} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-90 mt-1">Piden Cultura de Paz</p>
                </div>
                <div className="bg-white text-black p-5 border-2 border-black rounded-2xl">
                  <span className="block text-[10px] font-mono uppercase mb-1 opacity-60 font-bold">Testigos Violencia</span>
                  <div className="text-4xl font-display font-black text-rose-600">
                    <RapidCounter target={64.6} decimals={1} suffix="%" />
                  </div>
                  <p className="text-[10px] font-mono uppercase opacity-80 mt-1 font-bold">Entorno Delictivo</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/15 p-4 rounded-2xl flex items-start gap-3">
                <AlertTriangle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <p className="font-serif italic text-sm text-emerald-100 leading-relaxed">
                  "El 77.7% reconoce las acciones docentes positivas como promotores de paz en el aula."
                </p>
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-14">
        <CinematicCard color="bg-white" title="LA MUESTRA" icon={Users} className="shadow-[10px_10px_0_0_#059669]">
          <div className="text-3xl font-display font-black text-[#059669] mb-2 uppercase">
            n=<RapidCounter target={200} /> Estudiantes
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">20 Licenciaturas en la U. de Colima</p>
        </CinematicCard>
        <CinematicCard color="bg-[#059669]" className="text-white shadow-[10px_10px_0_0_#000]" title="URGENCIA" icon={Bird}>
          <div className="text-3xl font-display font-black text-white mb-2 uppercase">
            <RapidCounter target={92.7} decimals={1} suffix="%" /> Consenso
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-white/25 pt-2 uppercase">Integración curricular de la paz</p>
        </CinematicCard>
        <CinematicCard color="bg-white" title="ROL DOCENTE" icon={ShieldCheck} className="shadow-[10px_10px_0_0_#000]">
          <div className="text-3xl font-display font-black text-black mb-2 uppercase">
            <RapidCounter target={77.7} decimals={1} suffix="%" /> Valoración
          </div>
          <p className="text-xs font-mono font-black border-t-2 border-black pt-2 uppercase">Docentes como agentes de paz</p>
        </CinematicCard>
      </div>
    </section>
  );
}
