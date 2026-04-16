import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Calculator, Binary, Sparkles, Activity, AlertTriangle, MessageCircle, ShieldAlert, Cpu, BookOpen, Layers } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export const Content3455 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  const dimensions = [
    { name: "REDISEÑO", icon: BookOpen, desc: "Transformación de la currícula tradicional hacia un modelo centrado en el hacer y resolver." },
    { name: "DOCENCIA", icon: Activity, desc: "El profesor abandona la cátedra magistral para volverse un facilitador de experiencias." },
    { name: "EVALUACIÓN", icon: Target, desc: "Nuevas métricas que valoran el proceso de resolución tanto como el resultado final." }
  ];

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#ecfdf5" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#059669]" />
               <PremiumTitle subtitle="NUEVO PARADIGMA"> La Fuerza del Hacer </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#059669] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "Aprender matemáticas no es memorizar algoritmos, es construir el pensamiento a través de la resolución activa de problemas."
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <Calculator className="text-emerald-600" /> El Cambio_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    Del pizarrón estático a la dinámica participativa y el pensamiento crítico_
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="METODOLOGÍA" icon={Layers} className="shadow-[10px_10px_0_0_#059669]">
                 <p className="text-lg font-bold leading-snug">Implementación de talleres colaborativos y uso de software especializado para visualizar conceptos.</p>
              </CinematicCard>
              
              <div className="bg-emerald-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">RESULTADOS</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   Reducción del 20% en la tasa de reprobación en el grupo experimental.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: DIMENSIONES */}
      <WaveSection topColor="#ecfdf5" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="PILARES DEL CAMBIO">Estrategias_Activas_</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
             {dimensions.map((dim, i) => (
               <div 
                 key={i} 
                 onMouseEnter={() => setActiveDimension(i)}
                 className={`relative bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#000] transition-all cursor-pointer ${activeDimension === i ? 'scale-105 z-10' : 'opacity-60 scale-95'}`}
               >
                  <div className={`w-20 h-20 border-4 border-black flex items-center justify-center mb-8 ${activeDimension === i ? 'bg-emerald-600 text-white rotate-6' : 'bg-zinc-100 text-black'}`}>
                     <dim.icon size={40} />
                  </div>
                  <h3 className="font-display text-3xl uppercase font-black mb-6 italic tracking-tighter">{dim.name}</h3>
                  <p className="text-xl font-serif italic text-black/70 font-medium leading-relaxed">"{dim.desc}"</p>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: FRICCIONES Y CIERRE */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. FRICCIONES" color="bg-emerald-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#059669]" />
            <PremiumTitle className="items-center" subtitle="DESAFÍOS CRÍTICOS">Zonas_de_Tensión_</PremiumTitle>
          </div>

          <BrutalQuote className="text-4xl font-serif italic mb-32 shadow-[30px_30px_0_0_#000] rotate-1">
             "El mayor obstáculo para el aprendizaje activo no es la tecnología, sino la zona de confort metodológica del docente."
          </BrutalQuote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
             <div className="bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#000] -rotate-1">
                <h4 className="font-display text-2xl uppercase font-black mb-6 italic text-rose-600">Resistencia al Cambio</h4>
                <p className="text-xl font-serif italic text-black/70 font-medium leading-relaxed">"Profesores con décadas en el aula ven el rediseño como una amenaza a su autoridad expositiva, en lugar de una herramienta de empoderamiento."</p>
             </div>
             <div className="bg-zinc-900 border-8 border-black p-12 shadow-[15px_15px_0_0_#059669] rotate-1 text-white">
                <h4 className="font-display text-2xl uppercase font-black mb-6 italic text-emerald-500">Brecha de Formación</h4>
                <p className="text-xl font-serif italic text-white/70 font-medium leading-relaxed">"Saber matemáticas no es lo mismo que saber enseñarlas activamente. La carencia de pedagogía específica es la madre de la apatía estudiantil."</p>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto text-center pb-40">
           <div className="inline-block relative mb-20">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
              <div className="relative bg-emerald-600 text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Más_ que_ <br /> Números_
                 </h2>
                 <div className="w-32 h-6 bg-yellow-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-emerald-100 uppercase font-black tracking-widest italic animate-pulse">
                   HACIA UNA EDUCACIÓN MATEMÁTICA VIVA
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-20 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">MATH_REPORT_3455</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-none mb-12 italic">
                La técnica <span className="text-emerald-500">sin alma</span> es <span className="text-rose-600">cálculo vacío</span>_
              </p>
              <div className="w-64 h-4 bg-emerald-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
