import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, BarChart3, Activity, Users, MousePointer2, Smartphone, Clock, TrendingDown } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3467 = () => {
  const victimStats = [
    { label: 'Frecuencia Global', value: 23, color: 'bg-red-600' },
    { label: 'Hombres (INEGI 24)', value: 23.7, color: 'bg-zinc-800' },
    { label: 'Mujeres (INEGI 24)', value: 29.3, color: 'bg-indigo-600' },
  ];

  const habits = [
    { label: 'Uso Diario Internet', value: 71, icon: MousePointer2 },
    { label: 'Promedio Horas Online', value: 8.2, icon: Clock, suffix: 'h' },
    { label: 'Uso para Tareas', value: 97.1, icon: Smartphone },
  ];

  return (
    <div className="bg-[#EEF2FF] py-32 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-indigo-600/[0.03] leading-none pointer-events-none select-none">
        LOGIT_MODEL
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div>
            <BrutalSticker text="PREDICTIVE_ANALYSIS // V.41 // 2026" color="bg-indigo-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000] px-6 py-2 font-black" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-[0.85] text-black tracking-tighter">
              DATA <span className="text-red-600">LAB</span><br/>
              <span className="text-indigo-900 border-b-8 border-indigo-600">CIBERACOSO</span>
            </h2>
          </div>
          <div className="flex gap-6">
             <div className="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_#ef4444] rotate-[-3deg]">
                <ShieldAlert size={48} className="text-red-600" />
             </div>
             <div className="bg-black border-4 border-black p-5 shadow-[8px_8px_0_0_#4f46e5] rotate-[2deg]">
                <Activity size={48} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. LA CIFRA DE PREVALENCIA */}
          <div className="lg:col-span-5">
            <BrutalCard title="INDICADOR_DE_FRECUENCIA" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#000] h-full flex flex-col justify-center text-center p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 font-mono text-[10px] font-black">CRITICAL_BEHAVIOR</div>
               <span className="font-mono text-[10px] font-black uppercase opacity-40 mb-6 tracking-[0.4em]">FRECUENCIA_UNIVERSITARIA</span>
               <div className="flex items-baseline justify-center gap-2 mb-8">
                  <p className="text-9xl md:text-[13rem] font-display font-black text-indigo-900 italic tracking-tighter leading-none">23</p>
                  <p className="text-6xl font-display font-black text-red-600">%</p>
               </div>
               <p className="text-sm font-mono font-black uppercase border-t-4 border-black pt-8 leading-relaxed">
                 Incidencia detectada de conductas agresivas en entornos digitales postpandemia.
               </p>
            </BrutalCard>
          </div>

          {/* II. EFECTO PREVENTIVO (MODELO LOGIT) */}
          <div className="lg:col-span-7 space-y-12">
             <BrutalCard title="POTENCIAL_DE_PREVENCIÓN: MODELO LOGIT" color="bg-indigo-950" className="text-white !border-[8px] shadow-[25px_25px_0_0_#ef4444]">
                <div className="py-8">
                   <p className="text-xl font-serif italic mb-12 text-indigo-100 font-medium leading-relaxed">
                     "La probabilidad de ciberacoso disminuye drásticamente al controlar variables específicas de interacción."
                   </p>
                   <div className="grid md:grid-cols-2 gap-10">
                      <div className="bg-white/5 border-2 border-indigo-500/30 p-8 hover:bg-white/10 transition-colors cursor-help group">
                         <div className="flex justify-between items-center mb-6">
                            <TrendingDown size={32} className="text-red-500 group-hover:scale-125 transition-transform" />
                            <span className="font-display text-5xl font-black text-white">-21%</span>
                         </div>
                         <h5 className="font-display text-xl uppercase italic mb-2">Control de Provocación</h5>
                         <p className="text-[11px] font-mono font-black text-indigo-300 uppercase leading-snug">Disminución al doble de la probabilidad de perpetración.</p>
                      </div>
                      <div className="bg-white/5 border-2 border-indigo-500/30 p-8 hover:bg-white/10 transition-colors cursor-help group">
                         <div className="flex justify-between items-center mb-6">
                            <TrendingDown size={32} className="text-indigo-400 group-hover:scale-125 transition-transform" />
                            <span className="font-display text-5xl font-black text-white">-11%</span>
                         </div>
                         <h5 className="font-display text-xl uppercase italic mb-2">Eliminación de Memes</h5>
                         <p className="text-[11px] font-mono font-black text-indigo-300 uppercase leading-snug">Reducción al evitar la difusión de contenido humillante.</p>
                      </div>
                   </div>
                </div>
             </BrutalCard>

             {/* III. HÁBITOS DIGITALES */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {habits.map((h, i) => (
                  <div key={i} className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#000] rotate-1 flex flex-col items-center group hover:-rotate-1 transition-transform">
                     <h.icon size={32} className="mb-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                     <div className="text-4xl font-display font-black text-black leading-none mb-2">
                       {h.value}{h.suffix || '%'}
                     </div>
                     <p className="font-mono text-[9px] font-black uppercase opacity-40 text-center leading-none">{h.label}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* IV. TENDENCIA POR GÉNERO */}
          <div className="lg:col-span-12 mt-8">
             <div className="bg-white border-[6px] border-black p-12 shadow-[15px_15px_0_0_#4f46e5]">
                <div className="flex items-center gap-4 mb-10">
                   <Users className="text-red-600" size={32} />
                   <h4 className="font-display text-3xl uppercase font-black italic">Prevalencia de Riesgo (Tendencia 2024)</h4>
                </div>
                <div className="flex flex-col gap-10">
                   {victimStats.slice(1).map((s, idx) => (
                     <div key={idx} className="relative">
                        <div className="flex justify-between items-end mb-3">
                           <span className="font-display text-xl uppercase font-black">{s.label}</span>
                           <span className="font-mono text-2xl font-black text-red-600 underline">{s.value}%</span>
                        </div>
                        <div className="h-6 w-full bg-zinc-100 border-2 border-black overflow-hidden shadow-[inner_4px_4px_0_rgba(0,0,0,0.05)]">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${s.value}%` }} 
                             viewport={{ once: true }}
                             className={`h-full ${s.color} border-r-4 border-black relative`}
                           >
                              <div className="absolute inset-0 bg-white/20 animate-pulse" />
                           </motion.div>
                        </div>
                     </div>
                   ))}
                </div>
                <div className="mt-12 flex justify-between items-center pt-8 border-t-4 border-zinc-100">
                   <p className="font-mono text-[10px] font-black uppercase opacity-50 italic max-w-2xl">
                     *Datos extraídos del Módulo de Ciberacoso INEGI, contrastados con la muestra universitaria de Vallejos-Parás (2026).
                   </p>
                   <div className="flex gap-2">
                     <span className="w-4 h-4 bg-indigo-600 border border-black" />
                     <span className="w-4 h-4 bg-red-600 border border-black" />
                     <span className="w-4 h-4 bg-black border border-black" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
