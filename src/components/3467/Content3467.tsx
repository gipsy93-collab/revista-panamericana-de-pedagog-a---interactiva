import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, BookText, History, Sparkles, Activity, AlertTriangle, MessageCircle, ShieldAlert, Cpu, BookOpen, Layers, Search } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export const Content3467 = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { title: "RECOPILAR", icon: Search, text: "Búsqueda activa de fuentes primarias y testimonios que contradicen las narrativas oficiales." },
    { title: "ANALIZAR", icon: BookOpen, text: "Uso de herramientas de pensamiento crítico para deconstruir discursos históricos." },
    { title: "SINTETIZAR", icon: Target, text: "Creación de nuevas narrativas propias fundamentadas en la evidencia y el análisis multicausal." }
  ];

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#fff1f2" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#e11d48]" />
               <PremiumTitle subtitle="PENSAMIENTO HISTÓRICO"> De la Memoria al Análisis </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#e11d48] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "Enseñar historia no es transmitir datos del pasado, es enseñar a interrogar al presente a través de la evidencia acumulada."
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <History className="text-rose-600" /> El Método_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    Indagación basada en fuentes y desarrollo de la conciencia histórica ciudadana_
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="CONCIENCIA" icon={Search} className="shadow-[10px_10px_0_0_#e11d48]">
                 <p className="text-lg font-bold leading-snug">El estudiante deja de ser un receptor para convertirse en un investigador del pasado.</p>
              </CinematicCard>
              
              <div className="bg-rose-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">RESULTADOS</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   Mejora del 30% en la capacidad de argumentación escrita tras el programa de intervención.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: PROCESO */}
      <WaveSection topColor="#fff1f2" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="EL TALLER DEL HISTORIADOR">Fases_de_Indagación_</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
             {stages.map((stage, i) => (
               <div 
                 key={i} 
                 onMouseEnter={() => setActiveStage(i)}
                 className={`relative bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#000] transition-all cursor-pointer ${activeStage === i ? 'scale-105 z-10' : 'opacity-60 scale-95'}`}
               >
                  <div className={`w-20 h-20 border-4 border-black flex items-center justify-center mb-8 ${activeStage === i ? 'bg-rose-600 text-white -rotate-6' : 'bg-zinc-100 text-black'}`}>
                     <stage.icon size={40} />
                  </div>
                  <h3 className="font-display text-3xl uppercase font-black mb-6 italic tracking-tighter">{stage.title}</h3>
                  <p className="text-xl font-serif italic text-black/70 font-medium leading-relaxed">"{stage.text}"</p>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: ESENCIA Y CIERRE */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. ESENCIA" color="bg-rose-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#9f1239]" />
            <PremiumTitle className="items-center" subtitle="PENSAMIENTO CRÍTICO">La Historia como Herramienta</PremiumTitle>
          </div>

          <BrutalQuote className="text-4xl font-serif italic mb-32 shadow-[30px_30px_0_0_#000] rotate-1">
             "Sin pensamiento histórico, el futuro es solo una repetición de los errores que nos negamos a analizar."
          </BrutalQuote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Activity, color: 'bg-rose-600', text: 'Análisis Multicausal' },
               { icon: Search, color: 'bg-zinc-900', text: 'Crítica de Fuentes' },
               { icon: Target, color: 'bg-orange-600', text: 'Conciencia Ciudadana' }
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
              <div className="relative bg-rose-600 text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Interrogar_ <br /> el_ <br /> Pasado_
                 </h2>
                 <div className="w-32 h-6 bg-yellow-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-rose-100 uppercase font-black tracking-widest italic animate-pulse">
                   HACIA UNA CIUDADANÍA HISTÓRICAMENTE CONSCIENTE
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-20 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">HISTORY_REPORT_3467</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-none mb-12 italic">
                La historia <span className="text-rose-500">no es destino</span>, es <span className="text-orange-500">herramienta</span>_
              </p>
              <div className="w-64 h-4 bg-rose-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
