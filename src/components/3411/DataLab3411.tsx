import React from 'react';
import { motion } from 'motion/react';
import { BarChart, PieChart, Users, TrendingDown, Wifi, MonitorOff, Activity, MoreHorizontal, GraduationCap, School, Binary, Settings, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3411 = () => {
  const demographics = [
    { label: 'Hombres', value: 46.4, color: 'bg-zinc-800' },
    { label: 'Mujeres', value: 53.0, color: 'bg-orange-600' },
  ];

  const origins = [
    { label: 'S. Técnica', value: 45.0, count: 225 },
    { label: 'S. General', value: 36.2, count: 181 },
    { label: 'Telesecundaria', value: 5.0, count: 25 },
    { label: 'Sin Datos', value: 13.8, count: 69 },
  ];

  const predictors = [
    { label: 'Promedio Secundaria', value: '+2.04x', desc: 'Cada punto adicional duplica las probabilidades de permanecer.', r2: '8.9%' },
    { label: 'Computadora (PC)', value: '0.399', desc: 'Paradójicamente, tener PC predice deserción, no permanencia.', r2: '5.7%' },
    { label: 'Sexo (Hombres)', value: '0.516', desc: 'Ser hombre reduce la probabilidad de permanecer (58% de bajas).', r2: '3.1%' },
  ];

  const summaryData = [
    { label: 'Tasa de deserción', value: '28%', note: '141 de 500 estudiantes (Primer año)' },
    { label: 'Hombres en bajas', value: '58.16%', note: 'Desproporcionado (solo son 46.4% matrícula)' },
    { label: 'Mujeres en bajas', value: '41.84%', note: 'Subrepresentadas en el abandono' },
    { label: 'Sin computadora en bajas', value: '68.79%', note: 'Predictor inverso significativo' },
    { label: 'Con Internet en bajas', value: '85.82%', note: 'No significativo en modelo final' },
    { label: 'Promedio común bajas', value: '7.1 - 8.0', note: 'Calificaciones escala 0-10' },
  ];

  return (
    <div className="bg-[#f8fafc] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-12 font-mono text-[120px] font-black text-black/[0.02] leading-none pointer-events-none select-none">
        LAB_3411_STAT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20 border-b-4 border-black pb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-1 bg-rose-600" />
               <span className="font-mono text-xs font-black uppercase tracking-widest opacity-40">Data Explorer // Systematic Review</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-display uppercase font-black leading-none text-black tracking-tighter">
              LAB <span className="text-rose-600">3411</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="bg-white border-2 border-black p-4 shadow-[6px_6px_0_0_#000] flex items-center gap-4">
                <Settings size={24} className="text-rose-600 animate-spin-slow" />
                <span className="font-mono text-[10px] font-black uppercase">Live_Analysis_ON</span>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* I. HALLAZGO CENTRAL - ESTILO PREMIUM */}
          <div className="lg:col-span-12">
            <div className="bg-white border-8 border-black shadow-[30px_30px_0_0_#000] overflow-hidden group">
               <div className="grid lg:grid-cols-2">
                  <div className="p-12 md:p-20 flex flex-col justify-center border-b-8 lg:border-b-0 lg:border-r-8 border-black bg-rose-50/30">
                     <span className="font-mono text-xs font-black uppercase text-rose-600 mb-6 tracking-widest italic"># Metric_Primary</span>
                     <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-[10rem] md:text-[14rem] font-display font-black leading-[0.7] text-black">28</span>
                        <span className="text-6xl md:text-8xl font-display font-black text-rose-600">%</span>
                     </div>
                     <h3 className="text-3xl font-display uppercase font-black mb-6">Tasa de Desafiliación Crítica</h3>
                     <p className="text-lg font-serif italic text-black/60 leading-relaxed max-w-md">
                        Un total de 141 estudiantes rompieron su vínculo institucional antes de concluir el primer ciclo académico.
                     </p>
                  </div>
                  <div className="p-12 md:p-16 flex flex-col justify-between">
                     <div className="space-y-8">
                        <div className="flex items-start gap-6">
                           <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0"><AlertCircle /></div>
                           <div>
                              <h4 className="font-display text-xl uppercase font-black">Periodo de Riesgo</h4>
                              <p className="text-sm font-mono uppercase font-medium opacity-60">El primer semestre se consolida como el mayor filtro excluyente del bachillerato tecnológico.</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-6">
                           <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center shrink-0"><CheckCircle2 /></div>
                           <div>
                              <h4 className="font-display text-xl uppercase font-black">Universo N=500</h4>
                              <p className="text-sm font-mono uppercase font-medium opacity-60">Seguimiento exhaustivo de la cohorte 2023 en Ensenada, Baja California.</p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-12 pt-8 border-t-2 border-black/10">
                        <div className="flex justify-between items-end">
                           <div className="font-mono text-[10px] font-black uppercase opacity-30">Archive_Reference_Jimenez_Feria</div>
                           <div className="w-24 h-4 bg-black" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* II. ORIGEN & DISTRIBUCIÓN */}
          <div className="lg:col-span-8">
             <CinematicCard title="Dinamica de Origen Secular" icon={School} color="bg-zinc-900" className="text-white h-full !p-12 !border-[6px] shadow-[20px_20px_0_0_#e11d48]">
                <div className="space-y-10 mt-6">
                   {origins.map((o, i) => (
                     <div key={i} className="group">
                        <div className="flex justify-between items-end mb-3">
                           <span className="font-display text-2xl uppercase italic font-black text-white group-hover:text-rose-500 transition-colors">{o.label}</span>
                           <div className="flex gap-4 font-mono text-sm font-black">
                             <span className="text-rose-500">{o.value}%</span>
                             <span className="text-white/20">n={o.count}</span>
                           </div>
                        </div>
                        <div className="h-3 w-full bg-white/5 border border-white/10 group-hover:border-rose-600/50 transition-all">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${o.value}%` }} 
                             className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                           />
                        </div>
                     </div>
                   ))}
                </div>
                <div className="mt-12 bg-white/5 p-6 border border-white/10">
                   <p className="text-xs font-mono uppercase font-black tracking-widest text-white/40 italic">
                     * El modelo omitió 69 casos por inconsistencia en los datos de origen (13.8% del universo total).
                   </p>
                </div>
             </CinematicCard>
          </div>

          {/* III. QUICK METRICS */}
          <div className="lg:col-span-4 grid gap-6">
             <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] flex flex-col items-center justify-center text-center group hover:bg-rose-600 hover:text-white transition-all">
                <Users className="mb-4 group-hover:scale-125 transition-transform" size={48} />
                <h5 className="font-display text-4xl font-black uppercase">46.4%</h5>
                <p className="font-mono text-[10px] uppercase font-black opacity-60">Matrícula Masculina</p>
             </div>
             <div className="bg-black text-white border-4 border-black p-8 shadow-[12px_12px_0_0_#e11d48] flex flex-col items-center justify-center text-center group hover:scale-[1.02] transition-transform">
                <Users className="text-rose-500 mb-4 group-hover:animate-pulse" size={48} />
                <h5 className="font-display text-4xl font-black uppercase">53.0%</h5>
                <p className="font-mono text-[10px] uppercase font-black opacity-40">Matrícula Femenina</p>
             </div>
             <div className="bg-rose-50 border-4 border-black p-8 shadow-[12px_12px_0_0_#000] flex items-center gap-6">
                <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center shrink-0">
                  <TrendingDown className="text-rose-600" />
                </div>
                <div>
                   <h5 className="font-display text-xl font-black uppercase">Filtro Temprano</h5>
                   <p className="text-[10px] font-mono leading-tight uppercase opacity-60">La mayor tasa de deserción se concentra en el tránsito al 2do semestre.</p>
                </div>
             </div>
          </div>

          {/* IV. VARIABLES PREDICTIVAS - ESTILO DASHBOARD */}
          <div className="lg:col-span-12">
             <div className="bg-black text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#000] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 font-mono text-[60px] font-black text-white/[0.03] uppercase">LOGISTIC_MODEL</div>
                <div className="relative z-10">
                   <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 mb-16">
                      <h3 className="text-4xl md:text-5xl font-display uppercase font-black italic">Influencia Predictiva (Odds Ratio)</h3>
                      <div className="bg-rose-600 text-white px-4 py-2 font-mono text-[10px] font-black uppercase tracking-widest">Nagelkerke R2: 8.9%</div>
                   </div>
                   <div className="grid md:grid-cols-3 gap-10">
                      {predictors.map((p, i) => (
                        <div key={i} className="bg-zinc-900 border-2 border-white/10 p-10 group hover:-translate-y-2 transition-all">
                           <div className="text-7xl font-display font-black text-rose-500 mb-4 italic group-hover:scale-110 transition-transform origin-left">{p.value}</div>
                           <h5 className="font-mono text-xs font-black uppercase border-b border-white/20 pb-4 mb-4 tracking-widest text-[#F4A261]">{p.label}</h5>
                           <p className="text-xs font-mono font-black uppercase text-white/40 leading-tight mb-8 h-12">{p.desc}</p>
                           <div className="flex items-center gap-3">
                              <div className="h-[1px] flex-1 bg-white/10" />
                              <span className="text-[10px] font-mono font-black text-white/20 uppercase">Var: {p.r2}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* V. RESUMEN TABULAR - ANALÍTICO */}
          <div className="lg:col-span-12">
             <BrutalCard title="MATRIZ DE DATOS CLAVE // CONSOLIDADO" color="bg-white" className="!border-[8px] shadow-[30px_30px_0_0_#000]">
                <div className="overflow-x-auto">
                   <table className="w-full text-left border-collapse">
                      <thead>
                         <tr className="bg-zinc-100 border-b-4 border-black font-display uppercase text-xs tracking-widest">
                            <th className="p-8 border-r-4 border-black">Variable Analítica</th>
                            <th className="p-8 border-r-4 border-black text-rose-600">Métrica Impacto</th>
                            <th className="p-8">Inferencias del Estudio</th>
                         </tr>
                      </thead>
                      <tbody className="font-sans font-bold uppercase text-[11px]">
                         {summaryData.map((row, i) => (
                           <tr key={i} className="border-b-2 border-black/10 hover:bg-zinc-50 transition-colors group">
                              <td className="p-8 border-r-4 border-black font-mono font-black">{row.label}</td>
                              <td className="p-8 border-r-4 border-black font-display text-4xl text-black hover:text-rose-600 transition-colors">{row.value}</td>
                              <td className="p-8 text-black/50 italic font-serif text-sm normal-case group-hover:text-black transition-colors">{row.note}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </BrutalCard>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t-4 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60">
           <div className="flex items-center gap-6 text-black">
              <School size={20} />
              <p>Centro de Estudios Tecnológicos industrial y de servicios No. 74</p>
           </div>
           <div className="flex gap-8">
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-rose-600 rounded-full" /> ENSENADA_BC</div>
              <div className="flex items-center gap-3"><div className="w-2 h-2 bg-black rounded-full" /> YEAR_2026</div>
           </div>
        </div>
      </div>
    </div>
  );
};

