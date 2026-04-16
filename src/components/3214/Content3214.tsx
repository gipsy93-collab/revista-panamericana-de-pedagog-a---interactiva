import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Leaf, Cpu, Map, Trees, Sparkles, Activity, AlertTriangle, MessageCircle, CheckCircle } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';
import { DIMENSIONS } from './constants';

export const Content3214 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN Y CONTEXTO RURAL */}
      <WaveSection topColor="#ffffff" bottomColor="#ecfdf5" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#059669]" />
               <PremiumTitle subtitle="REALIDAD AGROPECUARIA"> El Pulso del Campo </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#059669] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "¿Explotar recursos o cultivar el futuro? Un dilema que define la formación técnica en Manabí."
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <Target className="text-emerald-600" /> El Experimento_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    Integración digital y experiencial para la sostenibilidad en Ecuador_
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="BRECHA_TÉCNICA" icon={Trees} className="shadow-[10px_10px_0_0_#059669]">
                 <p className="text-lg font-bold leading-snug">Presión por formar técnicos bajo paradigmas de sobrexplotación tradicionales de los 80s.</p>
              </CinematicCard>
              
              <div className="bg-emerald-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">CUASI_EXPERIMENTO</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   Diseño pre-test/post-test de 12 semanas con inmersión tecnológica y familiar.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: DIMENSIONES DEL GIRO PEDAGÓGICO */}
      <WaveSection topColor="#ecfdf5" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="HALLAZGOS POR MATRIZ">Giro_Pedagógico_</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col gap-6">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-8 border-4 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-emerald-600 text-white shadow-[8px_8px_0_0_#000] -translate-y-1' 
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
                  className="bg-white border-[12px] border-black p-12 md:p-20 shadow-[25px_25px_0_0_#059669] rotate-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 font-display text-9xl font-black text-black/5 leading-none italic">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-5xl uppercase font-black mb-8 italic text-emerald-600 underline decoration-black decoration-8 underline-offset-8">
                    {DIMENSIONS[activeDimension].name}_
                  </h3>
                  
                  <p className="text-3xl font-serif italic text-black/80 font-medium leading-relaxed mb-12">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="bg-zinc-900 text-white p-10 border-4 border-black rotate-[-1deg]">
                    <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest text-emerald-400">ANÁLISIS_CRÍTICO</h4>
                    {activeDimension === 0 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">El estudiante campesino prioriza utilidades pragmáticas. El 10% de uso de RRSS se desplazó hacia AGRO_APPS técnicas.</p>}
                    {activeDimension === 1 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">Involucramiento tangencial del entorno familiar. Motivación saltó de REGULAR a EXCELENTE en 12 semanas.</p>}
                    {activeDimension === 2 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">PREFERENCIA: 45%. El alumno aprende ensuciándose las manos; la tecnología es cálculo, no sustituto de tierra.</p>}
                    {activeDimension === 3 && <p className="font-display text-sm uppercase font-black italic tracking-tighter">70% de docentes alerta sobre carencias asimétricas. Infraestructura envejecida y hardware sin luz.</p>}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: IMPLICACIONES Y CORAZÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. ESENCIA" color="bg-emerald-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="EL CORAZÓN DEL ASUNTO">Inplicaciones Críticas</PremiumTitle>
          </div>

          <BrutalQuote className="text-4xl font-serif italic mb-32 shadow-[30px_30px_0_0_#000] rotate-1">
             "Los estudiantes que participan en espacios con innovación basada en el aprendizaje experiencial y tecnologías digitales, demostraron mayor comprensión de la sostenibilidad."
          </BrutalQuote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Map, color: 'bg-emerald-600', text: 'Pertinencia Geográfica' },
               { icon: Cpu, color: 'bg-zinc-900', text: 'Tecnología de Baja Banda' },
               { icon: Activity, color: 'bg-yellow-400', text: 'Evolución Parental (+10%)' }
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

      {/* SECCIÓN FINAL: CIERRE */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto text-center pb-40">
           <div className="inline-block relative mb-20">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
              <div className="relative bg-emerald-600 text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Suelo_ <br/> Conectado_
                 </h2>
                 <div className="w-32 h-6 bg-yellow-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-emerald-100 uppercase font-black tracking-widest italic animate-pulse">
                   HACIA UNA PEDAGOGÍA RURAL 4.0
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-20 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">RURAL_TECH_REPORT_3214</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-none mb-12 italic">
                La técnica <span className="text-emerald-500">sin arraigo</span> es <span className="text-rose-600">tierra estéril</span>.
              </p>
              <div className="w-64 h-4 bg-emerald-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
