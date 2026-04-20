import React from 'react';
import { motion } from 'motion/react';
import { Brain, Fingerprint, Activity, Gauge, Zap, TrendingDown, ClipboardCheck, Users, Search, Target } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3588 = () => {
  const psychometrics = [
    { label: 'Relación: No encajar', alpha: 0.85, omega: 0.87, r: 0.406 },
    { label: 'Pensamientos: Deserción', alpha: 0.80, omega: 0.82, r: 0.476 },
    { label: 'Proceso: Deliberación', alpha: 0.94, omega: 0.86, r: 0.544 },
    { label: 'Búsqueda de Info', alpha: 0.92, omega: 0.86, r: 0.540 },
    { label: 'Decisión Final', alpha: 0.95, omega: 0.97, r: 0.473 },
  ];

  const validity = [
    { label: 'Autoeficacia Académica', r: -0.436, type: 'Inversa' },
    { label: 'Motivación Académica', r: -0.326, type: 'Inversa' },
    { label: 'Intención de Abandono', r: 0.570, type: 'Directa' },
  ];

  return (
    <div className="bg-[#eef2ff] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-black/[0.03] leading-none pointer-events-none select-none">
        PSYCH_METRIC
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div>
            <BrutalSticker text="PSYCHOMETRIC_LAB // SCALE_VALIDATION // YUCATÁN" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5] px-6 py-2" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              LAB <span className="text-indigo-600">PSICOMETRÍA</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="bg-white border-4 border-black p-4 shadow-[6px_6px_0_0_#000] rotate-[-2deg]">
                <Fingerprint size={40} className="text-indigo-600" />
             </div>
             <div className="bg-black border-4 border-black p-4 shadow-[6px_6px_0_0_#4f46e5] rotate-[3deg]">
                <Gauge size={40} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. CONFIABILIDAD DE LA ESCALA */}
          <div className="lg:col-span-12">
            <BrutalCard title="CONSISTENCIA INTERNA: COEFICIENTES DE FIABILIDAD" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#000]">
              <div className="grid md:grid-cols-12 gap-12 p-8 items-center">
                 <div className="md:col-span-4 bg-zinc-950 text-white p-12 border-8 border-indigo-600 shadow-[15px_15px_0_0_#000] rotate-2">
                    <span className="font-mono text-[10px] font-black uppercase opacity-40 mb-4 block">OMEGA DE MCDONALD</span>
                    <div className="text-8xl font-display font-black text-indigo-400 italic leading-none">.978</div>
                    <p className="mt-8 font-mono text-[11px] font-black uppercase border-t border-white/10 pt-4">Confiabilidad Global Casi Perfecta</p>
                 </div>
                 <div className="md:col-span-8 overflow-x-auto">
                    <table className="w-full text-left font-mono">
                       <thead>
                          <tr className="border-b-4 border-black font-black uppercase text-[10px] bg-indigo-50">
                             <th className="p-4">Dimensión del Instrumento</th>
                             <th className="p-4">Alpha cronbach</th>
                             <th className="p-4">Relación (r)</th>
                          </tr>
                       </thead>
                       <tbody className="text-sm font-black uppercase">
                          {psychometrics.map((p, i) => (
                            <tr key={i} className="border-b-2 border-black/5 hover:bg-white transition-colors">
                               <td className="p-4 font-display text-xl italic tracking-tighter">{p.label}</td>
                               <td className="p-4 text-indigo-600">{p.alpha}</td>
                               <td className="p-4">{p.r}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
            </BrutalCard>
          </div>

          {/* II. VALIDACIÓN CONVERGENTE E INVERSA */}
          <div className="lg:col-span-8">
             <BrutalCard title="CORRELACIÓN CON CONSTRUCTOS RELACIONADOS" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#4f46e5] h-full">
                <div className="grid md:grid-cols-2 gap-12 py-8">
                   <div className="space-y-8">
                      {validity.map((v, i) => (
                        <div key={i} className="bg-zinc-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] relative group cursor-help">
                           <div className={`absolute top-0 right-0 px-3 py-1 font-mono text-[8px] font-black uppercase shadow-sm ${v.type === 'Inversa' ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'}`}>
                              {v.type}
                           </div>
                           <h5 className="font-display text-lg font-black uppercase tracking-tighter mb-2">{v.label}</h5>
                           <div className="flex items-center gap-4">
                              <div className="text-4xl font-display font-black text-indigo-600 italic">r = {v.r}</div>
                              <Search size={20} className="opacity-10 group-hover:opacity-100 transition-opacity" />
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="bg-indigo-600 text-white p-12 border-8 border-black shadow-[15px_15px_0_0_#000] rotate-[-2deg] flex flex-col justify-center">
                      <Target size={60} className="text-white mb-6" />
                      <h4 className="font-display text-3xl font-black uppercase italic mb-6 leading-none">Validación Convergente</h4>
                      <p className="font-serif italic text-xl leading-relaxed font-bold border-l-8 border-white pl-8 opacity-90">
                        "Se confirma la validez externa a través de correlaciones inversas con la autoeficacia académica (r=-.436) y la motivación."
                      </p>
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* III. PERFIL DE LA MUESTRA */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-black text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#4f46e5] rotate-1">
                <Users size={48} className="text-indigo-400 mb-6" />
                <h4 className="font-display text-2xl font-black uppercase mb-2 leading-none italic">Sample N=71</h4>
                <div className="space-y-4 mt-8">
                   <div className="flex justify-between items-center font-mono text-xs font-black uppercase">
                      <span>Mujeres</span>
                      <span className="text-indigo-400">87%</span>
                   </div>
                   <div className="h-4 w-full bg-zinc-800 border-2 border-white/20">
                      <div className="h-full bg-indigo-500 w-[87%]" />
                   </div>
                   <div className="flex justify-between items-center font-mono text-xs font-black uppercase pt-4 opacity-40">
                      <span>Hombres</span>
                      <span>13%</span>
                   </div>
                   <div className="h-4 w-full bg-zinc-800 border-2 border-white/20">
                      <div className="h-full bg-zinc-600 w-[13%]" />
                   </div>
                </div>
             </div>

             <div className="bg-white border-8 border-black p-10 shadow-[12px_12px_0_0_#000] -rotate-1 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative z-10">
                   <ClipboardCheck size={40} className="text-indigo-600 mb-4" />
                   <h5 className="font-display text-xl font-black uppercase italic mb-2">Edad Media</h5>
                   <p className="text-6xl font-display font-black text-black">21.6</p>
                   <p className="font-mono text-[9px] uppercase font-black opacity-40 mt-4 tracking-widest border-t border-black/10 pt-4">Años // IC 95% (20.5 - 22.6)</p>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60 italic">
           <div className="flex items-center gap-6">
              <Zap size={24} />
              <p>SOFTWARE: JASP 0.16 // ESCALA BÄULKE ET AL (2022) // YUCATÁN</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-indigo-600 text-white px-2 py-1">ALPHA_.973</div>
              <div className="bg-black text-white px-2 py-1">SIG_.001</div>
           </div>
        </div>
      </div>
    </div>
  );
};
