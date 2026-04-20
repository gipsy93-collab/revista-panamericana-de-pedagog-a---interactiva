import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, AlertTriangle, CheckCircle2, Zap, GraduationCap, School, Layers, Filter, MessageSquare, PieChart, BarChart } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

const DATA_SET = {
  especialidades: {
    'Inglés': { n: 6, noAsigno: 4, unaVez: 2, múltiplesVeces: 3, hallazgo: 'Especialidad con más escritura y acompañamiento bilingüe.' },
    'Matemáticas': { n: 4, noAsigno: 4, unaVez: 0, múltiplesVeces: 0, hallazgo: '100% no asignó textos de extensión considerable.' },
    'Español': { n: 2, noAsigno: 1, unaVez: 0, múltiplesVeces: 1, hallazgo: 'Brecha inesperada entre área de lengua y práctica real.' },
    'Historia': { n: 2, noAsigno: 0, unaVez: 1, múltiplesVeces: 1, hallazgo: 'Enfoque en el producto argumentativo final.' },
  },
  global: {
    n: 14,
    valoracion: 93,
    criterios: 50,
    acompana: 14
  }
};

type Speciality = keyof typeof DATA_SET.especialidades;

export const DataLab3543 = () => {
  const [selectedEsp, setSelectedEsp] = useState<Speciality>('Inglés');
  const stats = DATA_SET.especialidades[selectedEsp];

  return (
    <div className="bg-[#FEFCE8] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-amber-600/[0.03] leading-none pointer-events-none select-none italic">
        3543_LAB
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
          <div>
            <BrutalSticker text="3.2 & 4.3 LABORATORIO DE PRÁCTICAS" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter italic">
              CASE <span className="text-indigo-600 underline decoration-8 decoration-black">3543</span>
            </h2>
          </div>
          <div className="bg-white border-4 border-black p-6 shadow-[10px_10px_0_0_#000] rotate-1">
             <div className="flex items-center gap-4">
                <PieChart size={32} className="text-indigo-600" />
                <div>
                   <span className="font-display text-4xl font-black italic">14</span>
                   <span className="font-mono text-[10px] uppercase font-black opacity-40 ml-2 italic tracking-widest">Docentes</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. 4.3 TABLA RESUMEN / MÉTRICAS GLOBALES */}
          <div className="lg:col-span-12 grid md:grid-cols-4 gap-6 mb-12">
             {[
               { l: 'VALORACIÓN EA', v: '93%', c: 'bg-indigo-600', d: 'Consideran importante la escritura' },
               { l: 'CRITERIOS EVAL.', v: '50%', c: 'bg-black', d: 'Especifican cómo califican' },
               { l: 'ACOMPAÑAMIENTO', v: '14%', c: 'bg-rose-600', d: 'Apoyo real durante el proceso' },
               { l: 'LÍDER ÁREA', v: 'Inglés', c: 'bg-emerald-600', d: 'Especialidad con mayor presencia' },
             ].map((stat, i) => (
               <div key={i} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] group hover:-translate-y-2 transition-transform">
                  <div className={`${stat.c} text-white px-2 py-1 text-[9px] font-black uppercase mb-4 inline-block`}>{stat.l}</div>
                  <div className="text-6xl font-display font-black italic mb-2">{stat.v}</div>
                  <p className="font-mono text-[9px] uppercase font-black opacity-40 leading-tight">{stat.d}</p>
               </div>
             ))}
          </div>

          {/* II. EXPLORADOR POR ESPECIALIDAD (3.2 & 4.2) */}
          <div className="lg:col-span-12">
             <BrutalCard title="4.2 FRECUENCIA DE ASIGNACIÓN (CANTIDAD DE DOCENTES)" color="bg-white" className="!border-8 shadow-[20px_20px_0_0_#4f46e5]">
                <div className="flex flex-col lg:flex-row min-h-[450px]">
                   <div className="lg:w-1/3 border-r-8 border-black p-10 bg-zinc-50 flex flex-col gap-4">
                      <span className="font-mono text-[10px] uppercase font-black opacity-30 mb-4 tracking-widest leading-none">Seleccionar Especialidad</span>
                      {(Object.keys(DATA_SET.especialidades) as Speciality[]).map((esp) => (
                        <button
                          key={esp}
                          onClick={() => setSelectedEsp(esp)}
                          className={`p-6 border-4 border-black font-display text-2xl uppercase italic text-left transition-all shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none ${selectedEsp === esp ? 'bg-indigo-600 text-white' : 'bg-white text-black hover:bg-zinc-100'}`}
                        >
                          {esp}
                        </button>
                      ))}
                   </div>
                   <div className="lg:w-2/3 p-12 bg-white relative">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedEsp}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="space-y-12"
                        >
                           <div className="flex justify-between items-end border-b-4 border-zinc-100 pb-6">
                              <h3 className="text-6xl font-display uppercase font-black italic leading-none">{selectedEsp}</h3>
                              <span className="font-mono text-xl font-black text-indigo-600 italic">n={stats.n}</span>
                           </div>

                           <div className="grid grid-cols-3 gap-8 text-center uppercase font-display font-black italic">
                              <div className="space-y-4">
                                 <span className="text-6xl font-black text-rose-600">{stats.noAsigno}</span>
                                 <span className="text-[10px] block leading-none opacity-40 italic">Nunca asignó <br/> (Largo)</span>
                              </div>
                              <div className="space-y-4 border-x-2 border-black/5">
                                 <span className="text-6xl font-black">{stats.unaVez}</span>
                                 <span className="text-[10px] block leading-none opacity-40 italic">Una vez al <br/> semestre</span>
                              </div>
                              <div className="space-y-4 text-emerald-600">
                                 <span className="text-6xl font-black">{stats.múltiplesVeces}</span>
                                 <span className="text-[10px] block leading-none opacity-40 italic">Múltiples <br/> veces</span>
                              </div>
                           </div>

                           <div className="bg-zinc-950 text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#4f46e5] rotate-1">
                              <div className="flex items-center gap-4 mb-4">
                                 <MessageSquare size={32} className="text-indigo-400" />
                                 <span className="font-mono text-[10px] uppercase font-black tracking-widest italic opacity-40">Interpretación 4.2</span>
                              </div>
                              <p className="font-serif italic text-2xl leading-snug">"{stats.hallazgo}"</p>
                           </div>
                        </motion.div>
                      </AnimatePresence>
                   </div>
                </div>
             </BrutalCard>
          </div>
        </div>

        <div className="mt-28 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60">
           <div className="flex items-center gap-6 text-black">
              <School size={24} />
              <p>PRÁCTICAS DOCENTES // ESCUELA NORMAL // RIOS-HIGUERA ET AL. 2026</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-black text-white px-2 py-1 shadow-[4px_4px_0_0_#4f46e5]">N_14_DOCTO</div>
              <div className="bg-indigo-600 text-white px-2 py-1 shadow-[4px_4px_0_0_#000]">QUALITATIVE_DATA</div>
           </div>
        </div>
      </div>
    </div>
  );
};
