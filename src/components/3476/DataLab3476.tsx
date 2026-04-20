import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, BarChart2, PieChart, Layers, ListFilter, Users, BookOpenCheck, Bookmark, 
  Search, Filter, Database, CheckCircle2, ShieldAlert, TrendingUp, AlertCircle, FileSearch
} from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3476 = () => {
  const [labSection, setLabSection] = useState<'prisma' | 'corpus' | 'summary'>('prisma');

  const methodDistribution = [
    { label: 'Cualitativo', value: 48, color: 'bg-emerald-600' },
    { label: 'Cuantitativo', value: 39, color: 'bg-indigo-600' },
    { label: 'Mixto', value: 13, color: 'bg-zinc-800' },
  ];

  const geographicalImpact = [
    { label: 'Turquía', value: 13 },
    { label: 'México', value: 13 },
    { label: 'Bélgica', value: 8.7 },
    { label: 'Canadá', value: 8.7 },
  ];

  const prismaFlow = [
    { label: 'Identificados', value: 228, icon: Database, color: 'bg-zinc-200' },
    { label: 'Duplicados Elim.', value: 55, icon: Filter, color: 'bg-zinc-400' },
    { label: 'Revisados (T/R)', value: 190, icon: Search, color: 'bg-indigo-400' },
    { label: 'Criterios Calidad', value: 42, icon: ShieldAlert, color: 'bg-rose-400' },
    { label: 'Corpus Final', value: 23, icon: CheckCircle2, color: 'bg-emerald-500' },
  ];

  const summaryData = [
    { label: 'Estudios Incluidos', value: '23', note: 'De 228 identificados inicialmente' },
    { label: 'Pico Publicaciones', value: '2024', note: '7 artículos (crecimiento exponencial)' },
    { label: 'Leyes Inclusión', value: '17%', note: 'Países con leyes de inclusión plena' },
    { label: 'Prob. No Asistir', value: '2.5x', note: 'Niños con discapacidad vs pares' },
  ];

  return (
    <div className="bg-[#F0FDF4] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-emerald-600/[0.03] leading-none pointer-events-none select-none italic text-emerald-500">
        3.3_LAB
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
          <div>
            <BrutalSticker text="3.2, 3.3 & 4.3 LABORATORIO DE REVISIÓN" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#059669]" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              PRISMA <span className="text-emerald-600 underline decoration-8 decoration-black">LAB</span>
            </h2>
          </div>
          <div className="flex gap-4">
             {['prisma', 'corpus', 'summary'].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setLabSection(tab as any)}
                 className={`px-6 py-3 border-4 border-black font-display uppercase text-[10px] font-black transition-all shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${labSection === tab ? 'bg-emerald-600 text-white' : 'bg-white'}`}
               >
                 {tab === 'prisma' ? '3.3 Proceso PRISMA' : tab === 'corpus' ? '3.2 El Corpus' : '4.3 Datos Clave'}
               </button>
             ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {labSection === 'prisma' && (
              <motion.div 
                key="prisma"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid lg:grid-cols-5 gap-4"
              >
                {prismaFlow.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className={`border-4 border-black p-8 shadow-[10px_10px_0_0_#000] h-full flex flex-col items-center text-center group hover:bg-white transition-colors ${step.color}`}>
                       <Icon size={40} className="mb-6 group-hover:rotate-12 transition-transform" />
                       <h4 className="font-display text-4xl font-black mb-2">{step.value}</h4>
                       <p className="font-mono text-[10px] uppercase font-black border-t-2 border-black/10 pt-4 w-full">{step.label}</p>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {labSection === 'corpus' && (
              <motion.div 
                key="corpus"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                <BrutalCard title="3.2 DISTRIBUCIÓN METODOLÓGICA" color="bg-zinc-950" className="text-white">
                   <div className="space-y-8 p-6">
                      {methodDistribution.map((m, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between font-display text-xl uppercase italic font-black">
                              <span>{m.label}</span>
                              <span className="text-emerald-400">{m.value}%</span>
                           </div>
                           <div className="h-4 w-full bg-white/10 border-2 border-white/20">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${m.value}%` }}
                                className={`h-full ${m.color}`}
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </BrutalCard>
                <BrutalCard title="GEOGRAFÍA DEL ESTUDIO" color="bg-white">
                   <div className="grid grid-cols-2 gap-4 p-6">
                      {geographicalImpact.map((g, i) => (
                        <div key={i} className="bg-zinc-50 border-4 border-black p-6 hover:bg-emerald-50 transition-colors">
                           <h5 className="font-display text-2xl font-black uppercase italic">{g.label}</h5>
                           <div className="flex justify-between items-end mt-4">
                              <span className="font-mono text-[9px] uppercase font-black opacity-40">Presencia</span>
                              <span className="font-mono font-black text-emerald-600">{g.value}%</span>
                           </div>
                        </div>
                      ))}
                      <div className="col-span-2 bg-black text-white p-6 mt-4">
                        <p className="font-serif italic text-sm leading-tight">"Predominio de estudios en Turquía y México, sugiriendo una creciente preocupación académica en estos contextos."</p>
                      </div>
                   </div>
                </BrutalCard>
              </motion.div>
            )}

            {labSection === 'summary' && (
              <motion.div 
                key="summary"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {summaryData.map((d, i) => (
                  <div key={i} className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#4f46e5] flex flex-col justify-center items-center text-center group hover:bg-indigo-50 transition-all rotate-1">
                     <span className="font-display text-6xl font-black text-indigo-600 mb-4 group-hover:scale-110 transition-transform">{d.value}</span>
                     <h5 className="font-mono text-xs uppercase font-black mb-4 border-b-2 border-black/10 pb-2">{d.label}</h5>
                     <p className="font-serif italic text-[10px] text-black/60 leading-tight">{d.note}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-24 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60">
           <div className="flex items-center gap-6 text-black">
              <Globe size={24} />
              <p>REVISIÓN SISTEMÁTICA INTERNACIONAL // MÉXICO-MUNDO // RPP PRISMA 2026</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-indigo-600 text-white px-2 py-1">DATA_PROTECTED</div>
              <div className="bg-black text-white px-2 py-1">N_23_STUDIES</div>
           </div>
        </div>
      </div>
    </div>
  );
};
