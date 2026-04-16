import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Gamepad2, Trophy, Sparkles, Activity, AlertTriangle, MessageCircle, ShieldAlert, Cpu, BookOpen, Layers } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export const Content3378 = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "RETO", icon: Target, text: "Introducir mecánicas de juego en un entorno curricular rígido sin perder el rigor científico." },
    { title: "MÉTODO", icon: Layers, text: "Cuasi-experimento con grupos control y experimental durante un semestre académico completo." },
    { title: "LOGRO", icon: Trophy, text: "Aumento significativo en la retención de conceptos y en la participación voluntaria extra-clase." }
  ];

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#eef2ff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
               <PremiumTitle subtitle="EL JUEGO SERIO"> Más que Entretenimiento </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#4f46e5] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "La gamificación no es 'jugar en clase', es aplicar la arquitectura del juego para resolver problemas de desmotivación estructural."
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <Gamepad2 className="text-indigo-600" /> El Despegue_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    Transformando el aula pasiva en un entorno de desafíos y recompensas reales_
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="DINÁMICAS" icon={Cpu} className="shadow-[10px_10px_0_0_#4f46e5]">
                 <p className="text-lg font-bold leading-snug">Uso de niveles, insignias y tablas de clasificación para fomentar la sana competencia.</p>
              </CinematicCard>
              
              <div className="bg-indigo-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">RESULTADOS</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   Incremento del 15% en el compromiso de los estudiantes según la escala de Lickert.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: PROCESO INTERACTIVO */}
      <WaveSection topColor="#eef2ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="PASO A PASO">Proceso_de_Gaming_</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
             {steps.map((step, i) => (
               <div 
                 key={i} 
                 onMouseEnter={() => setActiveStep(i)}
                 className={`relative bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#000] transition-all cursor-pointer ${activeStep === i ? 'scale-105 z-10' : 'opacity-60 scale-95'}`}
               >
                  <div className={`w-20 h-20 border-4 border-black flex items-center justify-center mb-8 ${activeStep === i ? 'bg-indigo-600 text-white rotate-12' : 'bg-zinc-100 text-black'}`}>
                     <step.icon size={40} />
                  </div>
                  <h3 className="font-display text-3xl uppercase font-black mb-6 italic tracking-tighter">{step.title}</h3>
                  <p className="text-xl font-serif italic text-black/70 font-medium leading-relaxed">"{step.text}"</p>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: ESENCIA Y CIERRE */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. ESENCIA" color="bg-indigo-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#4338ca]" />
            <PremiumTitle className="items-center" subtitle="ESTUDIO COSTA RICA">Inplicaciones Pedagógicas</PremiumTitle>
          </div>

          <BrutalQuote className="text-4xl font-serif italic mb-32 shadow-[30px_30px_0_0_#000] rotate-1">
             "La gamificación efectiva conecta la emoción del juego con la profundidad del conocimiento académico."
          </BrutalQuote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Activity, color: 'bg-indigo-600', text: 'Compromiso Cognitivo' },
               { icon: Sparkles, color: 'bg-zinc-900', text: 'Recompensa Intrínseca' },
               { icon: Target, color: 'bg-rose-600', text: 'Foco en el Logro' }
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
              <div className="relative bg-indigo-600 text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Game_ <br /> Over_ <br /> Passive_
                 </h2>
                 <div className="w-32 h-6 bg-yellow-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-indigo-100 uppercase font-black tracking-widest italic animate-pulse">
                   HACIA UNA EDUCACIÓN LÚDICA Y RIGUROSA
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-20 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">GAMIFICATION_REPORT_3378</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-none mb-12 italic">
                El aula <span className="text-indigo-500">no es un patio</span>, es un <span className="text-rose-600">campo de retos</span>_
              </p>
              <div className="w-64 h-4 bg-indigo-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
