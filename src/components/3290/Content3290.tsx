import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Monitor, Globe, Sparkles, Activity, AlertTriangle, MessageCircle, ShieldAlert, Cpu, BookOpen } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';
import { QUOTES } from './constants';

export const Content3290 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { label: "PARTICIPACIÓN", val: "45%", desc: "Baja interacción en remotos" },
    { label: "DESAFÍO TÉCNICO", val: "78%", desc: "Fallos de conectividad" },
    { label: "ADAPTACIÓN", val: "62%", desc: "Docentes sobrepasados" }
  ];

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#ecfdff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#0891b2]" />
               <PremiumTitle subtitle="EL VIAJE HÍBRIDO"> La Odisea del Aula </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#0891b2] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "Vincular a estudiantes remotos con presenciales es el desafío más exigente de la pedagogía contemporánea en Colombia."
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <BookOpen className="text-cyan-600" /> El Desafío_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    Atención simultánea y equidad de oportunidades en el aprendizaje_
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="CONECTIVIDAD" icon={Cpu} className="shadow-[10px_10px_0_0_#0891b2]">
                 <p className="text-lg font-bold leading-snug">La infraestructura técnica sigue siendo el talón de Aquiles de la modalidad síncrona.</p>
              </CinematicCard>
              
              <div className="bg-cyan-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">SOBRECARGA_DOCENTE</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   La planificación se vuelve más exigente en selección de herramientas y actividades duales.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: METRICAS Y DATOS */}
      <WaveSection topColor="#ecfdff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="MÉTRICAS DE LA ODISEA">Métricas_Híbridas_</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
             {stats.map((s, i) => (
               <div key={i} className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] hover:-translate-y-2 transition-transform">
                  <p className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest text-cyan-600">{s.label}</p>
                  <div className="text-7xl font-display font-black mb-4 italic tracking-tighter">{s.val}</div>
                  <p className="text-lg font-bold leading-tight uppercase border-t-4 border-black pt-4">{s.desc}</p>
               </div>
             ))}
          </div>

          <div className="bg-zinc-950 text-white p-12 md:p-24 border-[12px] border-black shadow-[35px_35px_0_0_#0891b2] rotate-1">
             <div className="flex flex-col md:flex-row gap-20 items-center">
                <div className="md:w-1/2">
                   <h3 className="text-5xl md:text-7xl font-display uppercase font-black mb-8 italic text-cyan-500 drop-shadow-[5px_5px_0_#000]">
                     Voces_ del_ <br/> Campus_
                   </h3>
                   <div className="flex flex-wrap gap-4">
                      {QUOTES.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setActiveTab(i)}
                          className={`w-12 h-12 border-4 border-white flex items-center justify-center font-display text-xl font-black transition-all ${activeTab === i ? 'bg-cyan-500 text-black scale-110' : 'bg-black text-white hover:bg-white/10'}`}
                        >
                          {i+1}
                        </button>
                      ))}
                   </div>
                </div>
                
                <div className="md:w-1/2 min-h-[300px] flex items-center">
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="relative"
                      >
                         <MessageCircle className="text-cyan-800 w-32 h-32 absolute -top-16 -left-16 -z-10 rotate-12" />
                         <p className="text-3xl font-serif italic text-white/90 leading-relaxed relative z-10">
                            "{QUOTES[activeTab].text}"
                         </p>
                         <p className="mt-8 font-mono text-xs uppercase font-black text-cyan-500">
                           — TESTIMONIO {QUOTES[activeTab].author}
                         </p>
                      </motion.div>
                   </AnimatePresence>
                </div>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: ESENCIA Y CIERRE */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. ESENCIA" color="bg-cyan-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#0891b2]" />
            <PremiumTitle className="items-center" subtitle="CONCLUSIONES CLAVE">Inplicaciones Docentes</PremiumTitle>
          </div>

          <BrutalQuote className="text-4xl font-serif italic mb-32 shadow-[30px_30px_0_0_#000] -rotate-1">
             "La modalidad híbrida no es solo tecnología; es una reconfiguración total del tiempo y el espacio pedagógico."
          </BrutalQuote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Activity, color: 'bg-cyan-600', text: 'Interacción Constante' },
               { icon: Monitor, color: 'bg-zinc-900', text: 'Hardware Robusto' },
               { icon: Target, color: 'bg-indigo-600', text: 'Equidad Educativa' }
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
              <div className="relative bg-cyan-600 text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Híbrido_ <br /> Síncrono_
                 </h2>
                 <div className="w-32 h-6 bg-yellow-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-cyan-100 uppercase font-black tracking-widest italic animate-pulse">
                   HACIA UNA NUEVA PRESENCIALIDAD
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-20 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">HYBRID_REPORT_3290</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-none mb-12 italic">
                La distancia <span className="text-cyan-500">no es física</span>, es <span className="text-indigo-500">pedagógica</span>_
              </p>
              <div className="w-64 h-4 bg-cyan-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
