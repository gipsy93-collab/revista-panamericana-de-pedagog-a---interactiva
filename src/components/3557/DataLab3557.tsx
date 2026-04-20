import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Cpu, Brain, Zap, Clock, TrendingUp, Landmark, ShieldCheck, Database, Globe2, Binary, Briefcase } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3557 = () => {
  const [activeView, setActiveView] = useState<'faculties' | 'impact' | 'qualitative'>('faculties');

  const facultyData = [
    { l: 'Currículo Obligatorio', v: '10%', d: '4 de 38 facultades de élite incluyen tecnología como base obligatoria.', color: 'bg-red-600' },
    { l: 'Derecho Digital (Opt)', v: '58%', d: 'Asignaturas disponibles en catálogo optativo.', color: 'bg-black' },
    { l: 'Informática Jurídica', v: '37%', d: 'Enfoque en herramientas técnicas y gestión.', color: 'bg-indigo-600' },
  ];

  const economicImpact = [
    { l: 'PIB Mundial 2030', v: '$15.7T', d: 'Aporte proyectado de la IA a la economía global.', color: 'text-cyan-400' },
    { l: 'Reducción Carga IA', v: '80%', d: 'Ahorro de tiempo reportado por juristas en el uso de modelos como ChatGPT.', color: 'text-white' },
    { l: 'Empleos TIC', v: '75%', d: 'Proyección de empleos futuros que requieren dominio tecnológico.', color: 'text-indigo-400' },
  ];

  return (
    <div className="bg-[#0F172A] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative selection:bg-cyan-500 selection:text-black">
      <div className="absolute top-0 right-0 p-12 font-mono text-[200px] font-black text-cyan-500/[0.04] leading-none pointer-events-none select-none italic">
        3557_LAB
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
          <div>
            <BrutalSticker text="4.3 RESUMEN DE DATOS CLAVE" color="bg-cyan-500" className="text-black mb-6 !rotate-0 shadow-[6px_6px_0_0_#ffffff]" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-white tracking-widest italic">
              LEGAL <span className="text-cyan-400 underline decoration-8 decoration-white">ALGO_</span>
            </h2>
          </div>
          <div className="flex gap-4">
             {['faculties', 'impact', 'qualitative'].map((view) => (
               <button 
                 key={view}
                 onClick={() => setActiveView(view as any)}
                 className={`px-6 py-3 border-4 border-black font-display uppercase text-[10px] font-black transition-all shadow-[6px_6px_0_0_#ffffff] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeView === view ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-white'}`}
               >
                 {view === 'faculties' ? '3.4 Facultades' : view === 'impact' ? '2.1 Impacto IA' : '4.2 Cualitativo'}
               </button>
             ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeView === 'faculties' && (
              <motion.div 
                key="facs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-3 gap-8"
              >
                {facultyData.map((f, i) => (
                  <div key={i} className="bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#22d3ee] flex flex-col group hover:-translate-y-4 transition-transform">
                     <Binary className="text-indigo-600 mb-8" size={48} />
                     <h4 className="font-display text-2xl font-black uppercase italic mb-2 leading-none">{f.l}</h4>
                     <div className="text-7xl font-display font-black text-black italic mb-6">{f.v}</div>
                     <p className="font-sans font-bold uppercase text-[10px] opacity-60 leading-tight mb-8">{f.d}</p>
                     <div className={`mt-auto h-4 w-full border-2 border-black ${f.color}`} />
                  </div>
                ))}
              </motion.div>
            )}

            {activeView === 'impact' && (
              <motion.div 
                key="impact"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid lg:grid-cols-2 gap-12"
              >
                <div className="bg-cyan-500 border-8 border-black p-12 shadow-[20px_20px_0_0_#ffffff] rotate-1">
                   <TrendingUp className="text-black mb-8" size={60} />
                   <h3 className="font-display text-5xl font-black uppercase italic text-black mb-12">Economía de la IA</h3>
                   <div className="space-y-8">
                      {economicImpact.map((item, i) => (
                        <div key={i} className="flex justify-between items-end border-b-4 border-black/20 pb-4">
                           <span className="font-display text-xl uppercase font-black italic text-black">{item.l}</span>
                           <span className="font-display text-6xl font-black text-white drop-shadow-[4px_4px_0_#000]">{item.v}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="bg-black text-white p-12 border-8 border-cyan-500 shadow-[20px_20px_0_0_#22d3ee] flex flex-col justify-center">
                   <Globe2 className="text-cyan-400 mb-8" size={60} />
                   <p className="font-serif text-3xl italic leading-tight text-cyan-100">
                     "La IA transformará radicalmente la economía mundial, aportando 15.7 billones de dólares al PIB para 2030."
                   </p>
                   <div className="mt-12 pt-8 border-t border-white/10 flex justify-between font-mono text-[10px] uppercase font-black italic">
                      <span>Proyección Bezzazi et al. (2021)</span>
                      <span className="text-cyan-400">26% Inc. Global</span>
                   </div>
                </div>
              </motion.div>
            )}

            {activeView === 'qualitative' && (
              <motion.div 
                key="qual"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-12 flex gap-4 overflow-x-auto pb-4">
                   {[
                     { q: "Un profesor me reprobó porque en vez de códigos en papel los llevaba en la computadora.", a: "P1", t: "Tradición" },
                     { q: "Utilizo ChatGPT y eso me ha ayudado a reducir mi carga laboral en un 80%.", a: "P5", t: "Eficiencia" },
                     { q: "Hay gran diferencia entre los despachos que nacieron totalmente digitales y los tradicionales.", a: "P1", t: "Prospectiva" }
                   ].map((quote, idx) => (
                     <div key={idx} className="min-w-[400px] bg-slate-900 border-4 border-cyan-500 p-8 shadow-[8px_8px_0_0_#fff] hover:translate-x-2 transition-transform cursor-pointer">
                        <Zap className="text-cyan-400 mb-6" />
                        <p className="font-serif text-xl italic text-white/90 leading-snug mb-8">"{quote.q}"</p>
                        <div className="flex justify-between font-mono text-[9px] uppercase font-black">
                           <span className="text-indigo-400">{quote.a} - Jurista</span>
                           <span className="bg-cyan-500 text-black px-2 py-0.5">{quote.t}</span>
                        </div>
                     </div>
                   ))}
                </div>
                <div className="lg:col-span-12 bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#22d3ee] mt-8 flex flex-col md:flex-row items-center gap-16">
                   <div className="flex-1">
                      <h4 className="font-display text-4xl font-black uppercase italic mb-6">3.2 Muestra de Expertos</h4>
                      <p className="font-mono text-[11px] uppercase font-black text-black/40 mb-10 tracking-widest leading-none italic">7 JURISTAS EN MÉXICO // 35-60 AÑOS // 14-35 AÑOS EXP.</p>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                         {[
                           "Corp. & Telecom", "Fiscal & Admin", "Comp. Económica", "Civil & Litigio"
                         ].map((area, i) => (
                           <div key={i} className="bg-zinc-50 border-2 border-black p-4 font-display text-lg uppercase font-black italic flex items-center gap-3">
                              <Briefcase size={20} className="text-indigo-600" /> {area}
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="w-48 h-48 bg-cyan-500 border-4 border-black rotate-3 flex items-center justify-center shadow-[10px_10px_0_0_#000]">
                      <Users size={80} />
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-24 pt-12 border-t-8 border-white/20 flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60 italic">
           <div className="flex items-center gap-6">
              <ShieldCheck size={24} className="text-cyan-500" />
              <p>MÉTRICAS JURÍDICAS // ERA DIGITAL // RPP 41 // 2026</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-cyan-500 text-black px-3 py-1 shadow-[4px_4px_0_0_#ffffff]">TECH_LAW</div>
              <div className="bg-black text-white px-3 py-1 shadow-[4px_4px_0_0_#22d3ee]">PRINCE-GALBAN ET AL.</div>
           </div>
        </div>
      </div>
    </div>
  );
};
