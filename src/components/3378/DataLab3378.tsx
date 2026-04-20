import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, PieChart, Users, TrendingUp, Activity, BookOpen, GraduationCap, Layout, MousePointer2, CheckSquare, AlertTriangle } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3378 = () => {
  const summaryData = [
    { label: 'Incremento Participación', value: '+23.8 pp', note: 'De 33.3% a 57.1% en foros' },
    { label: 'Utilidad Recursos', value: '85.7%', note: 'Calificados como "Extremadamente Útiles"' },
    { label: 'Motivación Post', value: '71.4%', note: 'Estudiantes "Muy Motivados"' },
    { label: 'Interés Temático', value: '71.4%', note: 'Aumento significativo tras el paisaje' },
    { label: 'Diversidad Recursos', value: '71.4%', note: 'Calificación "Excelente"' },
    { label: 'Experiencia Previa', value: '0%', note: '100% nunca usó paisajes antes' },
  ];

  const preVsPost = [
    { indicator: 'Participación en Foros', pre: 33.3, post: 57.1 },
    { indicator: 'Interacción con Pares', pre: 33.3, post: 57.1 },
    { indicator: 'Motivación Alta', pre: 66.7, post: 71.4 },
    { indicator: 'Compromiso Moderado/Alto', pre: 50.0, post: 71.4 },
  ];

  return (
    <div className="bg-[#fff1f2] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-black/[0.03] leading-none pointer-events-none select-none">
        LAB_PEDAGOGY
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div>
            <BrutalSticker text="STATISTICAL_LAB // COSTA RICA // LEARNING_LANDSCAPES" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#db2777] px-6 py-2" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              LAB <span className="text-pink-600">3378</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0_0_#000] rotate-[-2deg]">
                <Activity size={40} className="text-pink-600" />
             </div>
             <div className="bg-black border-4 border-black p-4 shadow-[6px_6px_0_0_#db2777] rotate-[3deg]">
                <BookOpen size={40} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. LA CIFRA CRÍTICA - HALLAZGO PRINCIPAL */}
          <div className="lg:col-span-5">
            <BrutalCard title="HALLAZGO_PRINCIPAL_PARTICIPACIÓN" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#000] h-full flex flex-col justify-center text-center p-12">
               <span className="font-mono text-[10px] font-black uppercase opacity-40 mb-4 tracking-[0.4em]">INCREMENTO NETO</span>
               <div className="flex items-baseline justify-center gap-2">
                  <p className="text-9xl md:text-[12rem] font-display font-black text-pink-600 italic tracking-tighter leading-none">+24</p>
                  <p className="text-6xl font-display font-black text-black">PP</p>
               </div>
               <p className="text-xs font-mono font-black uppercase mt-12 border-t-4 border-black pt-6">
                 La participación constante en foros saltó de 33.3% a 57.1% tras la implementación.
               </p>
            </BrutalCard>
          </div>

          {/* II. COMPARATIVA PRE VS POST */}
          <div className="lg:col-span-7">
             <BrutalCard title="EVOLUCIÓN DE INDICADORES: PRE VS POST" color="bg-zinc-950" className="text-white !border-[8px] shadow-[20px_20px_0_0_#db2777]">
                <div className="p-8 space-y-8">
                   {preVsPost.map((item, i) => (
                     <div key={i} className="space-y-4">
                        <div className="flex justify-between items-end">
                           <span className="font-display text-xl uppercase italic font-black leading-none">{item.indicator}</span>
                           <span className="font-mono text-sm font-black text-pink-400">{item.pre}% → {item.post}%</span>
                        </div>
                        <div className="relative h-6 w-full bg-zinc-800 border-2 border-white/10 overflow-hidden">
                           {/* Pre-bar */}
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${item.pre}%` }} 
                             className="absolute top-0 left-0 h-full bg-zinc-600 opacity-50 transition-all"
                           />
                           {/* Post-bar */}
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${item.post}%` }} 
                             className="absolute top-0 left-0 h-full bg-pink-500 transition-all shadow-[0_0_15px_rgba(219,39,119,0.3)]"
                           />
                        </div>
                     </div>
                   ))}
                   <div className="bg-zinc-900 border-2 border-white/10 p-6 mt-8">
                      <p className="text-xs font-mono font-black uppercase text-pink-400 mb-2 mt-4">Nota del Auditor:</p>
                      <p className="font-serif italic text-sm text-zinc-400 leading-relaxed">
                        "La mejora es transversal a todos los indicadores de interacción, validando el impacto del paisaje en la autorregulación y el interés."
                      </p>
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* III. TABLA RESUMEN INTERACTIVA (4.3) */}
          <div className="lg:col-span-12">
             <BrutalCard title="TABLA 4.3: RESUMEN DE DATOS CLAVE (INTERACTIVO)" color="bg-white" className="!border-[8px] shadow-[25px_25px_0_0_#000]">
                <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="bg-black text-white font-display uppercase text-sm tracking-widest">
                            <th className="p-6 border-r border-white/20">Variable / Dato</th>
                            <th className="p-6 border-r border-white/20">Valor</th>
                            <th className="p-6">Contexto / Nota</th>
                         </tr>
                      </thead>
                      <tbody className="font-sans font-bold uppercase text-xs">
                         {summaryData.map((row, i) => (
                           <tr key={i} className="border-b-4 border-black hover:bg-pink-50 transition-colors group">
                              <td className="p-6 border-r-4 border-black bg-white group-hover:bg-pink-100">{row.label}</td>
                              <td className="p-6 border-r-4 border-black font-display text-2xl text-pink-600 italic group-hover:scale-110 transition-transform">{row.value}</td>
                              <td className="p-6 text-black/60 italic">{row.note}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </BrutalCard>
          </div>

          {/* IV. RESULTADOS POR OBJETIVO (4.2) */}
          <div className="lg:col-span-12">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#db2777] flex flex-col justify-between">
                   <Target className="text-pink-500 mb-6" size={40} />
                   <h5 className="font-display text-2xl font-black uppercase italic leading-none mb-4">Objetivo 1</h5>
                   <p className="text-sm font-sans font-medium opacity-60 mb-6">Identificar contradicciones y desafíos.</p>
                   <div className="p-4 bg-zinc-900 border-l-4 border-pink-500">
                      <p className="text-xs italic">"100% nunca había usado paisajes, lo que evidencia la novedad metodológica."</p>
                   </div>
                </div>
                <div className="bg-white text-black p-10 border-4 border-black shadow-[12px_12px_0_0_#000] flex flex-col justify-between">
                   <Layout className="text-pink-600 mb-6" size={40} />
                   <h5 className="font-display text-2xl font-black uppercase italic leading-none mb-4">Objetivo 2</h5>
                   <p className="text-sm font-sans font-medium opacity-60 mb-6">Diseñar paisaje participativo y reflexivo.</p>
                   <div className="p-4 bg-pink-50 border-l-4 border-black">
                      <p className="text-xs italic">"12 micro-paisajes semanales con metáfora de burbujas de diálogo."</p>
                   </div>
                </div>
                <div className="bg-pink-600 text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#000] flex flex-col justify-between">
                   <Activity className="text-white mb-6" size={40} />
                   <h5 className="font-display text-2xl font-black uppercase italic leading-none mb-4">Objetivo 3</h5>
                   <p className="text-sm font-sans font-medium opacity-80 mb-6">Evaluar impacto del paisaje.</p>
                   <div className="p-4 bg-pink-700 border-l-4 border-white">
                      <p className="text-xs italic">"85.7% extrema utilidad. 71.4% alta motivación post-implementación."</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60">
           <div className="flex items-center gap-6">
              <GraduationCap size={24} />
              <p>UNIVERSIDAD NACIONAL DE COSTA RICA // RPP INF-3378 // LAB_DATA</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-pink-600 text-white px-2 py-1">QUALITATIVE_DATA</div>
              <div className="bg-black text-white px-2 py-1">N_9</div>
           </div>
        </div>
      </div>
    </div>
  );
};
