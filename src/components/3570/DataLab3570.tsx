import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, PieChart, Globe, Database, FileSearch, Filter, 
  MapPin, CheckCircle2, AlertTriangle, Layers, Zap, Info
} from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3570 = () => {
  const [activeTab, setActiveTab] = useState<'prism' | 'geo' | 'categories'>('prism');

  const prismaStats = [
    { label: 'Identificados', value: 51, desc: 'Web of Science, ERIC, Academic Search Ultimate, Education Source.' },
    { label: 'Duplicados', value: 2, desc: 'Eliminados tras revisión inicial.' },
    { label: 'Excluidos (Tema)', value: 25, desc: 'Fuera de la población de preescolar/formación docente.' },
    { label: 'Muestra Final', value: 15, desc: 'Artículos empíricos finales analizados.' },
  ];

  const regions = [
    { region: 'Europa', n: 7, p: '46.6%', countries: 'España (4), Finlandia, Reino Unido', color: 'bg-orange-500' },
    { region: 'Asia', n: 6, p: '40.0%', countries: 'Corea del Sur, China, Turquía, Emiratos Árabes, Singapur', color: 'bg-zinc-900' },
    { region: 'Sudamérica', n: 1, p: '6.7%', countries: 'Costa Rica', color: 'bg-orange-300' },
    { region: 'Norteamérica', n: 1, p: '6.7%', countries: 'Israel', color: 'bg-zinc-500' },
  ];

  return (
    <div className="bg-[#fffcf9] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 left-0 p-12 font-mono text-[180px] font-black text-orange-600/[0.03] leading-none pointer-events-none select-none italic">
        3570_RS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
          <div>
            <BrutalSticker text="3. METODOLOGÍA & 4. RESULTADOS" color="bg-orange-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000]" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              LAB <span className="text-orange-600 underline decoration-8 decoration-black">CRÍTICO_</span>
            </h2>
          </div>
          <div className="flex gap-4">
             {['prism', 'geo', 'categories'].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab as any)}
                 className={`px-6 py-3 border-4 border-black font-display uppercase text-[10px] font-black transition-all shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeTab === tab ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
               >
                 {tab === 'prism' ? '3.3 PRISMA' : tab === 'geo' ? '4. Distribución' : '3.1 Estrategia'}
               </button>
             ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'prism' && (
              <motion.div 
                key="prism"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="grid md:grid-cols-4 gap-6"
              >
                {prismaStats.map((s, i) => (
                  <div key={i} className="bg-white border-8 border-black p-10 shadow-[12px_12px_0_0_#ea580c] group hover:-translate-y-2 transition-transform">
                     <span className="font-mono text-[10px] uppercase font-black opacity-40 block mb-6 tracking-widest leading-none italic">PASO_0{i+1}</span>
                     <div className="text-7xl font-display font-black italic mb-4 text-black">{s.value}</div>
                     <h4 className="font-display text-xl font-black uppercase italic mb-4 leading-none">{s.label}</h4>
                     <p className="font-mono text-[9px] uppercase font-black opacity-60 leading-tight">{s.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'geo' && (
              <motion.div 
                key="geo"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {regions.map((r, i) => (
                  <div key={i} className={`border-8 border-black p-10 shadow-[15px_15px_0_0_#000] flex flex-col h-full group hover:rotate-1 transition-transform ${r.color} ${i % 2 === 0 ? 'text-white' : 'text-black bg-white'}`}>
                     <Globe className={`${i % 2 === 0 ? 'text-orange-400' : 'text-orange-600'} mb-8`} size={48} />
                     <h4 className="font-display text-4xl font-black uppercase italic mb-2 leading-none">{r.region}</h4>
                     <div className="text-5xl font-display font-black italic mb-6">{r.p}</div>
                     <div className="mt-auto space-y-4">
                        <div className="flex justify-between font-mono text-xs font-black uppercase">
                           <span>N. Artículos</span>
                           <span>{r.n}</span>
                        </div>
                        <div className="h-px bg-current opacity-20" />
                        <p className="font-sans font-bold uppercase text-[9px] leading-relaxed">{r.countries}</p>
                     </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'categories' && (
              <motion.div 
                key="cats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-12 gap-12"
              >
                <div className="lg:col-span-8 bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#ea580c]">
                   <h3 className="font-display text-4xl font-black uppercase italic mb-10 border-b-4 border-orange-600 pb-4">3.1 Estrategia PEO_</h3>
                   <div className="grid grid-cols-3 gap-8 text-center uppercase font-display font-black italic">
                      {[
                        { l: 'Population', v: 'Preescolar / Early Learning' },
                        { l: 'Exposure', v: 'Thinking (Critical / Reflective)' },
                        { l: 'Outcome', v: 'Teacher Education' }
                      ].map((item, i) => (
                        <div key={i} className="space-y-4">
                           <div className="w-16 h-16 bg-black text-white flex items-center justify-center text-3xl mx-auto rotate-3">{item.l[0]}</div>
                           <span className="text-xl block leading-none text-orange-600 underline">{item.l}</span>
                           <span className="text-[9px] block leading-tight opacity-40">{item.v}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="lg:col-span-4 bg-zinc-950 text-white p-12 border-8 border-black shadow-[15px_15px_0_0_#000] flex flex-col justify-center rotate-1">
                   <h4 className="font-display text-3xl font-black uppercase italic mb-8">Bases de Datos</h4>
                   <ul className="space-y-6 list-none">
                      {[
                        { n: "Web of Science", v: 28 },
                        { n: "ERIC", v: 19 },
                        { n: "Acad. Search Ult.", v: 3 },
                        { n: "Education Source", v: 1 }
                      ].map((db, idx) => (
                        <li key={idx} className="flex justify-between items-center border-b border-white/10 pb-2">
                           <span className="font-mono text-[10px] font-black uppercase">{db.n}</span>
                           <span className="font-display text-2xl text-orange-500 italic">{db.v}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-24 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60 italic">
           <div className="flex items-center gap-6">
              <Globe size={24} className="text-orange-600" />
              <p>REVISIÓN SISTEMÁTICA // PENSAMIENTO CRÍTICO // RPP 41 // 2026</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-orange-600 text-white px-3 py-1 shadow-[4px_4px_0_0_#000]">PRISMA_2020</div>
              <div className="bg-black text-white px-3 py-1 shadow-[4px_4px_0_0_#ea580c]">N_15_STUDIES</div>
           </div>
        </div>
      </div>
    </div>
  );
};
