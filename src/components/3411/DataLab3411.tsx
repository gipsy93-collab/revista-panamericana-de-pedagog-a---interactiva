import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, PieChart, Users, TrendingDown, Wifi, MonitorOff, Activity, MoreHorizontal, GraduationCap, School, Binary, Settings, AlertCircle, CheckCircle2 } from 'lucide-react';
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
    <div className="bg-[#fff1f2] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-black/[0.03] leading-none pointer-events-none select-none text-rose-500">
        LAB_STAT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div>
            <BrutalSticker text="3.2 PARTICIPANTES & 4.2 RESULTADOS" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#e11d48] px-6 py-2" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              LAB <span className="text-rose-600">3411</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0_0_#000] rotate-[-2deg]">
                <Settings size={40} className="text-rose-600" />
             </div>
             <div className="bg-black border-4 border-black p-4 shadow-[6px_6px_0_0_#e11d48] rotate-[3deg]">
                <Binary size={40} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. LA CIFRA CRÍTICA (4.1) */}
          <div className="lg:col-span-12">
            <BrutalCard title="4.1 HALLAZGO PRINCIPAL: TASA DE DESERCIÓN" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#000] p-12 text-center">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] font-black uppercase opacity-40 tracking-[0.4em]">DECOHERENCIA EDUCATIVA</span>
                    <div className="flex items-baseline justify-center gap-2">
                       <p className="text-9xl md:text-[12rem] font-display font-black text-rose-600 italic tracking-tighter leading-none">28</p>
                       <p className="text-6xl font-display font-black text-black">%</p>
                    </div>
                    <p className="text-sm font-mono font-black uppercase border-t-4 border-black pt-6">
                      141 estudiantes de 500 causaron baja entre el primer y segundo semestre.
                    </p>
                  </div>
                  <div className="bg-rose-50 border-4 border-black p-8 rotate-1">
                     <p className="text-xl font-serif italic text-black/70">
                       "Refleja que el primer año de bachillerato tecnológico es el periodo más crítico de abandono escolar en la región de Ensenada."
                     </p>
                  </div>
               </div>
            </BrutalCard>
          </div>

          {/* II. ORIGEN ESCOLAR (3.2) */}
          <div className="lg:col-span-7">
             <BrutalCard title="3.2 DISTRIBUCIÓN DE ORIGEN (N-500)" color="bg-zinc-950" className="text-white !border-[8px] shadow-[20px_20px_0_0_#e11d48]">
                <div className="grid md:grid-cols-1 gap-12 py-8 px-4">
                   <div className="space-y-6">
                      {origins.map((o, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="flex justify-between items-end mb-2">
                              <span className="font-display text-xl uppercase italic font-black leading-none">{o.label}</span>
                              <div className="flex gap-4 font-mono text-sm font-black">
                                <span className="text-rose-500">{o.value}%</span>
                                <span className="text-white/40">n={o.count}</span>
                              </div>
                           </div>
                           <div className="h-4 w-full bg-zinc-800 border-2 border-white/10 group-hover:border-rose-500 transition-colors">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${o.value}%` }} 
                                className="h-full bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* III. CARACTERIZACIÓN SOCIODIGITAL (3.2) */}
          <div className="lg:col-span-5">
             <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center text-center">
                   <Users className="text-rose-600 mb-2" size={32} />
                   <h5 className="font-display text-2xl font-black uppercase">46.4%</h5>
                   <p className="font-mono text-[8px] uppercase font-black opacity-40">Hombres</p>
                </div>
                <div className="bg-black text-white border-4 border-black p-8 shadow-[8px_8px_0_0_#e11d48] flex flex-col items-center justify-center text-center">
                   <Users className="text-rose-500 mb-2" size={32} />
                   <h5 className="font-display text-2xl font-black uppercase">53.0%</h5>
                   <p className="font-mono text-[8px] uppercase font-black opacity-40">Mujeres</p>
                </div>
                <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] flex flex-col items-center justify-center text-center col-span-2">
                   <AlertCircle className="text-rose-600 mb-2" size={32} />
                   <h5 className="font-display text-lg font-black uppercase">13.8% Sin Datos</h5>
                   <p className="font-mono text-[8px] uppercase font-black opacity-40">Falta info tipo secundaria (n=69)</p>
                </div>
             </div>
          </div>

          {/* IV. RESULTADOS POR CATEGORÍA (4.2) */}
          <div className="lg:col-span-12">
             <BrutalCard title="4.2 MODELO DE REGRESIÓN LOGÍSTICA: VARIABLES PREDICTIVAS" color="bg-white" className="!border-[8px] shadow-[25px_25px_0_0_#e11d48]">
                <div className="p-8">
                   <div className="grid md:grid-cols-3 gap-8">
                      {predictors.map((p, i) => (
                        <div key={i} className="bg-zinc-50 border-4 border-black p-10 shadow-[8px_8px_0_0_#000] group hover:-translate-y-2 transition-transform h-full flex flex-col">
                           <div className="text-5xl font-display font-black text-rose-600 mb-2 group-hover:scale-110 transition-transform">{p.value}</div>
                           <h5 className="font-mono text-[10px] font-black uppercase border-b-2 border-black/10 pb-2 mb-4 tracking-widest leading-none">{p.label}</h5>
                           <p className="text-xs font-mono font-black uppercase text-black/60 leading-tight mb-6 flex-1">{p.desc}</p>
                           <div className="pt-4 border-t-2 border-black/5">
                              <span className="bg-black text-white px-3 py-1 text-[9px] font-mono font-black uppercase tracking-tighter">Varianza: {p.r2}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* V. TABLA RESUMEN DE DATOS CLAVE */}
          <div className="lg:col-span-12">
             <BrutalCard title="TABLA RESUMEN DE DATOS CLAVE (INTERACTIVO)" color="bg-white" className="!border-[8px] shadow-[25px_25px_0_0_#000]">
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
                           <tr key={i} className="border-b-4 border-black hover:bg-rose-50 transition-colors group">
                              <td className="p-6 border-r-4 border-black bg-white group-hover:bg-rose-100">{row.label}</td>
                              <td className="p-6 border-r-4 border-black font-display text-3xl text-rose-600 italic transition-transform">{row.value}</td>
                              <td className="p-6 text-black/60 italic">{row.note}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </BrutalCard>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60">
           <div className="flex items-center gap-6 text-black">
              <School size={24} />
              <p>CETIS 74 - ENSENADA // INCLUSIÓN MÉXICO 2026</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-rose-600 text-white px-2 py-1">DATOS_SECU_TECNICA</div>
              <div className="bg-black text-white px-2 py-1">N_500</div>
           </div>
        </div>
      </div>
    </div>
  );
};
