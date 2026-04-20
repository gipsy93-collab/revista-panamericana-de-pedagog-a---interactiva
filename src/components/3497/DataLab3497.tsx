import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Crown, Scale, Flame, ShieldAlert, History, Map, Activity, Globe2, BookPlus,
  Compass, Crosshair, Users, Sparkles, LayoutGrid, CheckCircle2, Bookmark
} from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3497 = () => {
  const [activeTab, setActiveTab] = useState<'leadership' | 'comparison' | 'strategies'>('leadership');

  const leadershipTypes = [
    { label: 'Transformacional', desc: 'Centrado en generar cambio significativo y visión compartida.', icon: Sparkles, color: 'bg-indigo-600' },
    { label: 'Pedagógico', desc: 'Garantiza calidad curricular y condiciones favorables al aprendizaje.', icon: BookPlus, color: 'bg-amber-500' },
    { label: 'Distribuido', desc: 'Liderazgo repartido entre toda la comunidad educativa.', icon: Users, color: 'bg-emerald-600' },
  ];

  const comparison = [
    { aspect: 'Nivel', values: 'Teórico / Declarativo', character: 'Práctico / Aplicado' },
    { aspect: 'Enfoque', values: 'Transmisión de principios', character: 'Interiorización de hábitos' },
    { aspect: 'Resultado', values: 'Comprensión normativa', character: 'Cambio conductual' },
    { aspect: 'Metodología', values: 'Enseñanza explícita', character: 'Experiencias vivenciales' },
  ];

  const strategies = [
    { t: 'Aprendizaje-servicio', d: 'Integración de currículo con proyectos sociales.' },
    { t: 'Cultura simbólica', d: 'Uso de máximas y referentes que encarnen valores.' },
    { t: 'Relaciones positivas', d: 'Vínculos basados en respeto mutuo y confianza.' },
    { t: 'Empoderamiento', d: 'Esquemas participativos y liderazgo compartido.' },
    { t: 'P. del Desarrollo', d: 'Autonomía y sentido de pertenencia en el aula.' },
  ];

  return (
    <div className="bg-[#FFFBEB] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 left-0 p-12 font-mono text-[180px] font-black text-amber-500/[0.03] leading-none pointer-events-none select-none italic">
        PY_LAB_3497
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
          <div>
            <BrutalSticker text="RESULTADOS: LIDERAZGO & CARÁCTER" color="bg-indigo-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000]" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              TEORÍA & <span className="text-amber-500 underline decoration-8 decoration-black">DATOS</span>
            </h2>
          </div>
          <div className="flex gap-3">
             {['leadership', 'comparison', 'strategies'].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab as any)}
                 className={`px-6 py-3 border-4 border-black font-display uppercase text-[10px] font-black transition-all shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-white text-black'}`}
               >
                 {tab === 'leadership' ? '4.1 Tipologías' : tab === 'comparison' ? '4.3 Comparativa' : '4.6 Estrategias'}
               </button>
             ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'leadership' && (
              <motion.div 
                key="leadership"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {leadershipTypes.map((type, i) => (
                  <div key={i} className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#4f46e5] group hover:bg-indigo-50 transition-all flex flex-col h-full">
                     <div className={`${type.color} w-16 h-16 border-4 border-black flex items-center justify-center text-white mb-8 group-hover:rotate-12 transition-transform`}>
                        <type.icon size={32} />
                     </div>
                     <h4 className="font-display text-3xl font-black uppercase italic mb-4 leading-none">{type.label}</h4>
                     <p className="font-sans font-bold uppercase text-xs leading-relaxed text-black/60 flex-1">{type.desc}</p>
                     <div className="mt-8 pt-6 border-t-2 border-black/10 flex justify-between items-center font-mono text-[9px] font-black uppercase">
                        <span>Impacto Educativo</span>
                        <CheckCircle2 size={16} className="text-indigo-600" />
                     </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'comparison' && (
              <motion.div 
                key="comparison"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border-8 border-black shadow-[20px_20px_0_0_#f59e0b] overflow-x-auto"
              >
                <div className="p-8 border-b-8 border-black bg-indigo-950 text-white flex items-center justify-between">
                   <h3 className="font-display text-3xl uppercase font-black italic">4.3 Educación en Valores vs Formación del Carácter</h3>
                   <div className="flex gap-4 font-mono text-[10px] uppercase font-black">
                      <span className="text-amber-500">Lickona (1991)</span>
                      <span className="opacity-40">// PY_AUDIT</span>
                   </div>
                </div>
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-zinc-100 border-b-4 border-black font-display uppercase italic text-sm">
                      <th className="p-6 border-r-4 border-black">Aspecto</th>
                      <th className="p-6 border-r-4 border-black text-indigo-700">Educación en Valores</th>
                      <th className="p-6 text-amber-600">Formación del Carácter</th>
                    </tr>
                  </thead>
                  <tbody className="font-sans font-bold uppercase text-xs">
                    {comparison.map((row, i) => (
                      <tr key={i} className="border-b-4 border-black hover:bg-zinc-50 transition-colors">
                        <td className="p-6 bg-zinc-50 border-r-4 border-black font-black">{row.aspect}</td>
                        <td className="p-6 border-r-4 border-black text-black/60 italic">{row.values}</td>
                        <td className="p-6 text-black italic">{row.character}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === 'strategies' && (
              <motion.div 
                key="strategies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                <div className="space-y-4">
                  {strategies.map((s, i) => (
                    <div key={i} className="bg-white border-4 border-black p-6 flex items-center gap-6 shadow-[8px_8px_0_0_#000] hover:translate-x-2 transition-transform cursor-pointer group">
                       <div className="bg-amber-100 p-3 rounded-full group-hover:bg-amber-500 transition-colors">
                          <Bookmark size={24} className="text-amber-600 group-hover:text-white" />
                       </div>
                       <div>
                          <h5 className="font-display text-xl font-black uppercase italic leading-none">{s.t}</h5>
                          <p className="font-mono text-[10px] font-black uppercase opacity-40 mt-1">{s.d}</p>
                       </div>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-950 text-white p-12 border-8 border-black shadow-[15px_15px_0_0_#f59e0b] flex flex-col justify-center rotate-1">
                   <h4 className="font-display text-4xl font-black uppercase italic mb-8 border-b-4 border-amber-500 pb-4">4.5 Programas Efectivos</h4>
                   <ul className="space-y-6">
                      {[
                        { l: "Fidelidad", d: "Respeto a principios pedagógicos originales." },
                        { l: "Sostenibilidad", d: "Continuidad en el tiempo, no acciones aisladas." },
                        { l: "Enfoque Integral", d: "Abarca lo cognitivo, emocional y conductual." },
                        { l: "Participación", d: "Involucramiento de toda la comunidad educativa." }
                      ].map((p, idx) => (
                        <li key={idx} className="flex gap-4">
                           <CheckCircle2 className="text-amber-500 shrink-0" size={24} />
                           <div>
                              <strong className="font-display text-lg uppercase block leading-none mb-1">{p.l}</strong>
                              <p className="font-mono text-[9px] uppercase opacity-60 leading-tight">{p.d}</p>
                           </div>
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
              <Scale size={24} className="text-amber-600" />
              <p>AUDITORÍA TEÓRICA PARAGUAY // LIDERAZGO & CARÁCTER // RPP 2026</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-indigo-600 text-white px-3 py-1 shadow-[4px_4px_0_0_#f59e0b]">PY_ANALYSIS</div>
              <div className="bg-black text-white px-3 py-1 shadow-[4px_4px_0_0_#4f46e5]">THEORETICAL_RESULTS</div>
           </div>
        </div>
      </div>
    </div>
  );
};
