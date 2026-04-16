import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EyeOff, UserX, AlertTriangle, BookMarked, Map, ArrowDownCircle, Sparkles, Activity, MessageCircle, ShieldAlert } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';
import { DIMENSIONS } from './constants';

export const Content3153 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: PROBLEMA Y CONTEXTO SOCIAL */}
      <WaveSection topColor="#ffffff" bottomColor="#eff6ff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. ANATOMIA DE LA EXCLUSIÓN" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#2563eb]" />
               <PremiumTitle subtitle="REALIDAD PSICOSOCIAL"> ¿Academia o Escaparate? </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#2563eb] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "La variable del color de piel, tatuajes y masa corporal funcionan como semáforos implacables de exclusión en el campus."
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <UserX className="text-blue-600" /> El Voto de la Piel_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    Discriminación fisiológica y académica basada en normatividad estética preestablecida_
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="DISONANCIA_SILENCIOSA" icon={ShieldAlert} className="shadow-[10px_10px_0_0_#2563eb]">
                 <p className="text-lg font-bold leading-snug">Los estudiantes absorben ansiosamente el trauma sin escudos cognitivos para defenderse.</p>
              </CinematicCard>
              
              <div className="bg-blue-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">GROUNDED_THEORY</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   Muestra fenomenológica (N=12) desnudando jerarquías y estigmas de Goffman.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: DIMENSIONES DE UN CAMPUS EXCLUYENTE */}
      <WaveSection topColor="#eff6ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="HUELLAS DEL ESTIGMA">Campus_Excluyente_</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col gap-6">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-8 border-4 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-blue-600 text-white shadow-[8px_8px_0_0_#000] -translate-y-1' 
                      : 'bg-white hover:bg-zinc-50 shadow-[4px_4px_0_0_#000]'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-4xl">{dim.emoji}</span>
                    <span className="font-display text-2xl uppercase font-black tracking-tighter italic">{dim.name}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDimension}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white border-[12px] border-black p-12 md:p-20 shadow-[25px_25px_0_0_#2563eb] rotate-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 font-display text-9xl font-black text-black/5 leading-none italic">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-5xl uppercase font-black mb-8 italic text-blue-600 underline decoration-black decoration-8 underline-offset-8">
                    {DIMENSIONS[activeDimension].name}_
                  </h3>
                  
                  <p className="text-3xl font-serif italic text-black/80 font-medium leading-relaxed mb-12">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="bg-zinc-900 text-white p-10 border-4 border-black rotate-[-1deg]">
                    <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest text-blue-400">ANÁLISIS_FENOMENOLÓGICO</h4>
                    {activeDimension === 0 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">"Nadie quería hacer equipo con ella... refiriéndose como la sirvienta." La pigmentocracia no se esfuma en la élite.</p>}
                    {activeDimension === 1 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">"Ay se le ven los pezones... un aspecto como de asco." El juicio estético fractura la autoimagen y genera ansiedad crónica.</p>}
                    {activeDimension === 2 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">"Mi motivación se fue para abajo." El enmascaramiento social destruye la participación y el desempeño académico.</p>}
                    {activeDimension === 3 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">Desconocimiento total de mecanismos de ayuda. La oficina de inclusión es invisible para el radar estudiantil.</p>}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: IMPLICACIONES PSICOSOCIALES */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. IMPACTO" color="bg-blue-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="CONSECUENCIAS REALES">Huellas_del_Miedo_</PremiumTitle>
          </div>

          <BrutalQuote className="text-4xl font-serif italic mb-32 shadow-[30px_30px_0_0_#000] rotate-1">
             "Al sentirte incómoda se te hace difícil encajar... muchas veces te sientes inseguro de cómo te ves."
          </BrutalQuote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: AlertTriangle, color: 'bg-blue-600', text: 'Vulnerabilidad de Afrontamiento' },
               { icon: EyeOff, color: 'bg-zinc-900', text: 'Pasividad y Bloqueo Defensivo' },
               { icon: ArrowDownCircle, color: 'bg-rose-600', text: 'Deserción Silenciosa' }
             ].map((it, i) => (
               <div key={i} className="group flex flex-col items-center bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] hover:-translate-y-4 transition-transform cursor-pointer">
                  <div className={`${it.color} text-white p-6 border-4 border-black mb-6 group-hover:rotate-12 transition-transform`}>
                    <it.icon size={48} />
                  </div>
                  <p className="font-display text-2xl uppercase font-black text-center italic tracking-tighter">{it.text}</p>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto text-center pb-40">
           <div className="inline-block relative mb-20">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
              <div className="relative bg-blue-600 text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Justicia_ <br/> Socioemocional_
                 </h2>
                 <div className="w-32 h-6 bg-yellow-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-blue-100 uppercase font-black tracking-widest italic animate-pulse">
                   HACIA UNA INCLUSIÓN SIN ESTIGMAS
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-20 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">SOCIAL_STIGMA_REPORT_3153</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-none mb-12 italic">
                La universidad <span className="text-blue-500">no es un escaparate</span>, es un <span className="text-rose-600">motor de equidad</span>_
              </p>
              <div className="w-64 h-4 bg-blue-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
