import React from 'react';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Users, Search, AlertTriangle, Activity, BarChart3, Fingerprint, Layers, CheckCircle2 } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3606 = () => {
  const gepia = [
    { label: 'Sensibilización', value: 3.87, max: 4, color: 'bg-emerald-600' },
    { label: 'Práctica Docente', value: 3.40, max: 4, color: 'bg-emerald-500' },
    { label: 'Acceso a Instalaciones', value: 2.50, max: 4, color: 'bg-yellow-500' },
    { label: 'Vínculo con Familias', value: 1.75, max: 4, color: 'bg-rose-500' },
  ];

  const adjustments = [
    { type: 'Metodológicos', detail: 'Tiempos extendidos en exámenes, tutorías personalizadas.', frequency: '100% en entrevistas' },
    { type: 'Materiales', detail: 'Macrotipos, transcripciones a Braille (escasa), audios.', frequency: 'Frecuente' },
    { type: 'Evaluativos', detail: 'Criterios diferenciados sin perder el objetivo académico.', frequency: 'Ocasional' },
  ];

  return (
    <div className="bg-[#f0fdf4] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-emerald-200/[0.2] leading-none pointer-events-none select-none">
        INCLU_LAB
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div>
            <BrutalSticker text="INCLUSIVE_DATA_LAB // UNIVERSITY_PROTOCOL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#059669] px-6 py-2" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              LAB <span className="text-emerald-700">INCLUSIÓN</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0_0_#000] rotate-[-2deg]">
                <ShieldCheck size={40} className="text-emerald-700" />
             </div>
             <div className="bg-black border-4 border-black p-4 shadow-[6px_6px_0_0_#059669] rotate-[3deg]">
                <Heart size={40} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. MÉTRICAS GEPIA-A (BRECHA DE INCLUSIÓN) */}
          <div className="lg:col-span-12">
            <BrutalCard title="MATRIZ DE INDICADORES: INSTRUMENTO GEPIA-A" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#000]">
              <div className="grid md:grid-cols-2 gap-16 items-center py-8">
                <div className="space-y-8">
                   <div className="flex items-center gap-4 border-b-4 border-black pb-4">
                      <BarChart3 size={32} className="text-emerald-600" />
                      <h4 className="font-display text-3xl uppercase font-black italic">Puntuaciones por Dimensión</h4>
                   </div>
                   <div className="space-y-6">
                     {gepia.map((g, i) => (
                       <div key={i} className="space-y-2">
                         <div className="flex justify-between font-mono text-xs font-black uppercase">
                           <span>{g.label}</span>
                           <span className={g.value < 2 ? 'text-rose-600' : 'text-emerald-700'}>{g.value} / 4.0</span>
                         </div>
                         <div className="h-6 w-full bg-zinc-100 border-2 border-black shadow-[4px_4px_0_0_#000]">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(g.value / g.max) * 100}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className={`h-full ${g.color}`}
                            />
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
                
                <div className="bg-emerald-950 text-white p-12 border-[12px] border-emerald-600 shadow-[25px_25px_0_0_#000] rotate-1 flex flex-col justify-center h-full">
                   <h5 className="font-display text-4xl font-black uppercase mb-6 text-emerald-400 italic">Hallazgo Paradójico</h5>
                   <p className="text-2xl font-serif italic mb-8 font-bold leading-tight border-l-8 border-emerald-600 pl-8 opacity-90">
                     "Hay una alta sensibilización docente (3.87/4), pero el vínculo institucional con las familias es alarmantemente bajo (1.75/4)."
                   </p>
                   <div className="flex items-center gap-4 text-rose-400 font-mono text-xs font-black uppercase animate-bounce">
                      <AlertTriangle size={24} /> Debilidad en la Vinculación
                   </div>
                </div>
              </div>
            </BrutalCard>
          </div>

          {/* II. TIPOS DE AJUSTES RAZONABLES */}
          <div className="lg:col-span-8">
            <BrutalCard title="CATÁLOGO DE AJUSTES RAZONABLES IMPLEMENTADOS" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#059669] h-full overflow-x-auto">
               <table className="w-full mt-6 text-left border-collapse min-w-[600px]">
                 <thead>
                   <tr className="bg-emerald-50 font-display text-sm uppercase font-black border-b-4 border-black">
                     <th className="p-4">TIPO DE AJUSTE</th>
                     <th className="p-4">DETALLE TÉCNICO</th>
                     <th className="p-4">FRECUENCIA</th>
                   </tr>
                 </thead>
                 <tbody className="font-mono text-xs font-black uppercase leading-tight">
                   {adjustments.map((a, i) => (
                     <tr key={i} className="border-b-2 border-black/10 hover:bg-emerald-50/50 transition-colors">
                       <td className="p-4 font-display text-lg italic">{a.type}</td>
                       <td className="p-4 text-black/70">{a.detail}</td>
                       <td className="p-4">
                          <span className="bg-emerald-100 px-3 py-1 border border-emerald-300">{a.frequency}</span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
               <div className="mt-12 p-10 bg-black text-white flex items-center gap-8 border-l-[16px] border-emerald-600">
                  <CheckCircle2 size={60} className="text-emerald-500 shrink-0" />
                  <p className="font-serif italic text-xl leading-relaxed text-zinc-300">
                    "El 100% de los docentes entrevistados afirma aplicar ajustes, pero la mayoría lo hace por iniciativa propia y no por protocolo oficial."
                  </p>
               </div>
            </BrutalCard>
          </div>

          {/* III. PERFIL TÉCNICO */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-emerald-600 text-white p-10 border-[10px] border-black shadow-[15px_15px_0_0_#000] rotate-1 group">
                <Users size={48} className="mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-display text-4xl font-black uppercase leading-none mb-2 italic">UColima</h4>
                <p className="font-mono text-[11px] font-black uppercase opacity-60 mb-6 tracking-widest">Entorno Institucional</p>
                <div className="border-t-4 border-white/20 pt-6">
                   <div className="text-5xl font-display font-black italic">Facultad de Educación</div>
                </div>
             </div>

             <div className="bg-white border-[10px] border-black p-10 shadow-[15px_15px_0_0_#059669] -rotate-1 relative overflow-hidden group">
                <Fingerprint size={120} className="absolute -right-12 -bottom-12 opacity-5 group-hover:rotate-12 transition-transform" />
                <h4 className="font-display text-3xl font-black uppercase leading-none mb-4 italic">BAPs Detectadas</h4>
                <ul className="space-y-4 font-mono text-[10px] font-black uppercase border-t-2 border-black/5 pt-6">
                   <li className="flex gap-3"><span className="text-rose-600">01.</span> Físicas y Arquitectónicas</li>
                   <li className="flex gap-3"><span className="text-emerald-600">02.</span> Curriculares (Tiempos)</li>
                   <li className="flex gap-3"><span className="text-emerald-600">03.</span> Metodológicas (Materiales)</li>
                </ul>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-50 italic">
           <div className="flex items-center gap-6">
              <Layers size={24} />
              <p>MÉTRICAS GEPIA-A // REF. 3606 // EDUCACIÓN SUPERIOR MÉXICO</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-black text-white px-3 py-1">AJUSTES_LOG</div>
              <div className="bg-emerald-700 text-white px-3 py-1">QUALITATIVE_VALIDATION</div>
           </div>
        </div>
      </div>
    </div>
  );
};
