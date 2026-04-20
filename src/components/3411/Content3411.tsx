import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Monitor, Users, AlertTriangle, ChevronRight, Binary, Plus, Trash2, 
  Target, Search, School, GraduationCap, ClipboardCheck, Brain, Activity,
  Quote, CheckCircle2, AlertCircle
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell 
} from 'recharts';
import { PREDICTORS, LIMITATIONS, STUDY_DATA } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard, BrutalTitle } from '../BrutalistLib';


const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Monitor,
  Users,
};

type Scenario = {
  id: string;
  promedio: number;
  sexo: 'mujer' | 'hombre';
  computadora: boolean;
  probabilidad: number;
};

function calcProb(promedio: number, sexo: 'mujer' | 'hombre', computadora: boolean) {
  let logit = -4.842 + 0.714 * promedio;
  if (sexo === 'hombre') logit -= 0.661;
  if (computadora) logit -= 0.919;
  const p = 1 / (1 + Math.exp(-logit));
  return parseFloat((p * 100).toFixed(1));
}

export default function Content3411() {
  const [promedio, setPromedio] = useState<number>(8.0);
  const [sexo, setSexo] = useState<'mujer' | 'hombre'>('mujer');
  const [computadora, setComputadora] = useState<boolean>(false);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);

  const probabilidad = useMemo(() => calcProb(promedio, sexo, computadora), [promedio, sexo, computadora]);

  const coefData = useMemo(() => [
    { name: 'Intercepto', value: -4.842, color: '#1e293b' },
    { name: 'Promedio', value: 0.714 * promedio, color: '#e11d48' },
    { name: 'Sexo', value: sexo === 'hombre' ? -0.661 : 0, color: '#3b82f6' },
    { name: 'PC', value: computadora ? -0.919 : 0, color: '#f59e0b' },
  ], [promedio, sexo, computadora]);

  const addScenario = () => {
    if (scenarios.length >= 3) return;
    const newScenario: Scenario = {
      id: Math.random().toString(36).slice(2),
      promedio,
      sexo,
      computadora,
      probabilidad,
    };
    setScenarios((prev) => [...prev, newScenario]);
  };

  const removeScenario = (id: string) => {
    setScenarios((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-[#020617] text-white">
      {/* 2.3 OBJETIVOS - DISEÑO PREMIUM */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-600 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
             <span className="font-mono text-rose-500 text-xs tracking-[0.5em] uppercase font-black mb-4">// RESEARCH_OBJECTIVES</span>
             <h2 className="text-5xl md:text-8xl font-display uppercase font-black leading-none selection:bg-rose-600">Horizonte de <span className="text-rose-600">Investigación</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border-[6px] border-white/10 p-12 flex flex-col justify-between group hover:border-rose-600 transition-colors">
               <div>
                  <h3 className="font-display text-4xl uppercase font-black text-rose-500 mb-8 italic">Meta Principal</h3>
                  <p className="text-3xl font-serif italic leading-relaxed text-slate-300">
                    "Identificar las variables que tienen mayor influencia en que los estudiantes se mantengan inscritos y vigentes entre el primer y el segundo semestre."
                  </p>
               </div>
               <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-8">
                  <div className="font-mono text-[10px] uppercase font-black opacity-30 italic">Target_ID: DES_01</div>
                  <Target className="text-rose-600 animate-pulse" size={40} />
               </div>
            </div>

            <div className="lg:col-span-7 bg-zinc-900 border-[6px] border-black p-12 shadow-[20px_20px_0_0_#000]">
               <h3 className="font-display text-4xl uppercase font-black text-white mb-12">Rutas Analíticas</h3>
               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { t: "Poder Predictivo", d: "Variables personales (sexo)", icon: Users },
                    { t: "Antecedentes", d: "Promedio y tipo de secundaria", icon: GraduationCap },
                    { t: "Capital Digital", d: "Hardware y conectividad", icon: Monitor },
                    { t: "Modelagem", d: "Regresión logística no paramétrica", icon: Binary }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                       <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <item.icon size={24} />
                       </div>
                       <div>
                          <h4 className="font-display text-lg uppercase font-black">{item.t}</h4>
                          <p className="text-xs font-mono uppercase font-black text-slate-500 mt-1">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 PREDICTORES & SIMULADOR - ESTILO TECH */}
      <WaveSection topColor="#020617" bottomColor="#f8fafc" variant="curved">
        <div className="max-w-7xl mx-auto text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
             <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-1 bg-black" />
                   <span className="font-mono text-xs font-black uppercase text-black/40 tracking-widest">Simulación de Escenarios</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none">
                  Predictor <span className="text-rose-600">3411</span>
                </h2>
             </div>
             <p className="max-w-sm text-sm font-sans font-bold uppercase text-black/50 leading-relaxed border-l-4 border-black pl-6">
                Herramienta basada en los resultados de la Tabla 4 para estimar la probabilidad de permanencia escolar.
             </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Controles del Simulador */}
            <div className="lg:col-span-12 grid md:grid-cols-3 gap-8">
               <div className="bg-white border-4 border-black p-10 shadow-[10px_10px_0_0_#000] space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <label className="font-display text-xl uppercase font-black">Promedio</label>
                      <span className="font-mono text-3xl font-black text-rose-600">{promedio.toFixed(1)}</span>
                    </div>
                    <input 
                      type="range" min="6.0" max="10.0" step="0.1" value={promedio}
                      onChange={(e) => setPromedio(parseFloat(e.target.value))}
                      className="w-full h-3 bg-zinc-100 border-2 border-black rounded-none appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 font-mono text-[10px] font-black opacity-30">
                      <span>MIN_6.0</span>
                      <span>MAX_10.0</span>
                    </div>
                  </div>
               </div>

               <div className="bg-white border-4 border-black p-10 shadow-[10px_10px_0_0_#000] flex flex-col justify-center gap-6">
                  <label className="font-display text-xl uppercase font-black text-center mb-2">Sexo del Estudiante</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setSexo('mujer')}
                      className={`py-4 font-display text-base uppercase font-black border-4 border-black transition-all ${sexo === 'mujer' ? 'bg-black text-white shadow-[4px_4px_0_0_#e11d48]' : 'bg-white text-black hover:bg-zinc-50'}`}
                    > Mujer </button>
                    <button 
                      onClick={() => setSexo('hombre')}
                      className={`py-4 font-display text-base uppercase font-black border-4 border-black transition-all ${sexo === 'hombre' ? 'bg-black text-white shadow-[4px_4px_0_0_#e11d48]' : 'bg-white text-black hover:bg-zinc-50'}`}
                    > Hombre </button>
                  </div>
               </div>

               <div className="bg-white border-4 border-black p-10 shadow-[10px_10px_0_0_#000] flex flex-col justify-center">
                  <label className="font-display text-xl uppercase font-black text-center mb-6">Equipamiento Digital</label>
                  <button 
                    onClick={() => setComputadora(!computadora)}
                    className={`p-6 border-4 border-black flex flex-col items-center gap-3 transition-all ${computadora ? 'bg-rose-600 text-white shadow-[8px_8px_0_0_#000]' : 'bg-zinc-100 text-black hover:bg-white'}`}
                  >
                    <Monitor size={32} />
                    <span className="font-mono text-xs font-black uppercase">{computadora ? 'Computadora: SÍ' : 'Computadora: NO'}</span>
                  </button>
               </div>
            </div>

            {/* Resultado Principal */}
            <div className="lg:col-span-8">
              <div className="bg-white border-8 border-black shadow-[30px_30px_0_0_#000] p-12 md:p-20 relative overflow-hidden min-h-[500px] flex flex-col justify-center items-center text-center">
                <div className="absolute top-0 left-0 w-full p-4 border-b-2 border-black flex justify-between bg-zinc-50">
                   <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase">
                      <Activity size={14} className="text-rose-600 animate-pulse" />
                      SYSTEM_PROBABILITY_ANALYZER_v2.0
                   </div>
                   <div className="w-12 h-2 bg-black" />
                </div>

                <div className="relative z-10 mt-12">
                   <span className="font-mono text-zinc-400 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Probabilidad de Permanencia</span>
                   <motion.div 
                     key={probabilidad}
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     className="text-[12rem] md:text-[18rem] font-display font-black leading-none text-black tracking-tighter"
                   >
                     {probabilidad.toFixed(0)}<span className="text-6xl md:text-8xl italic text-rose-600">%</span>
                   </motion.div>
                </div>

                <div className="w-full h-8 bg-zinc-100 border-4 border-black mt-12 relative">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: `${probabilidad}%` }}
                     className="h-full bg-rose-600 border-r-4 border-black"
                   />
                </div>

                <button 
                   onClick={addScenario}
                   disabled={scenarios.length >= 3}
                   className="mt-16 bg-black text-white px-12 py-5 font-display text-2xl uppercase border-4 border-black shadow-[10px_10px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all disabled:opacity-20 disabled:pointer-events-none group flex items-center gap-4"
                >
                  Comparar Escenario <Plus className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </div>

            {/* Gráfico de Pesos */}
            <div className="lg:col-span-4">
              <BrutalCard title="Pesos del Modelo (B)" color="bg-white" className="h-full flex flex-col !border-8">
                <div className="flex-1 h-[400px] mt-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={coefData} layout="vertical" margin={{ left: 0, right: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#ccc" />
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={100} axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                      <Tooltip />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {coefData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="mt-8 text-[10px] font-mono leading-tight uppercase font-black opacity-30 italic">
                  * Valores beta resultantes de la regresión logística. El promedio escolar es el factor compensatorio más potente.
                </p>
              </BrutalCard>
            </div>

            {/* Comparativa */}
            <AnimatePresence>
              {scenarios.length > 0 && (
                <div className="lg:col-span-12 mt-12">
                   <div className="grid md:grid-cols-3 gap-8">
                      {scenarios.map((s, idx) => (
                        <motion.div 
                          key={s.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="bg-black text-white p-10 border-4 border-black shadow-[15px_15px_0_0_#e11d48] relative group"
                        >
                           <button 
                             onClick={() => removeScenario(s.id)} 
                             className="absolute top-4 right-4 text-white/20 hover:text-rose-500 hover:rotate-90 transition-all p-2"
                           > <Trash2 size={24} /> </button>
                           
                           <div className="font-mono text-[9px] font-black uppercase text-rose-500 mb-8 tracking-[0.3em]"># COMPARISON_0{idx+1}</div>
                           <div className="text-8xl font-display font-black leading-none mb-10 italic">{s.probabilidad}%</div>
                           
                           <div className="space-y-4 border-t border-white/10 pt-8 font-mono text-[10px] font-black uppercase">
                              <div className="flex justify-between"><span>Promedio:</span> <span className="text-rose-500">{s.promedio}</span></div>
                              <div className="flex justify-between"><span>Género:</span> <span>{s.sexo}</span></div>
                              <div className="flex justify-between"><span>Computadora:</span> <span>{s.computadora ? 'SÍ' : 'NO'}</span></div>
                           </div>
                        </motion.div>
                      ))}
                   </div>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </WaveSection>

      {/* CONCLUSIÓN & LIMITACIONES - DISEÑO LIMPIO */}
      <section className="bg-white py-32 px-6 md:px-12 border-t-[20px] border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
             <div className="space-y-12">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-4 bg-rose-600" />
                   <h2 className="text-4xl md:text-6xl font-display uppercase font-black italic">La Paradoja Digital</h2>
                </div>
                <BrutalQuote author="Jiménez-Moreno & Feria-Juárez" className="!bg-zinc-50 border-rose-600 border-l-[16px] !rotate-0">
                  "El hecho de que los estudiantes con computadora tengan mayor probabilidad de deserción (OR = 0.399) sugiere que el capital digital, sin supervisión o propósito pedagógico, puede actuar como un distractor que desplaza el tiempo de estudio."
                </BrutalQuote>
             </div>

             <div className="grid gap-8">
                <CinematicCard title="Limitaciones del Modelo" icon={AlertTriangle} color="bg-rose-600" className="text-white shadow-[12px_12px_0_0_#000]">
                   <ul className="space-y-4 font-mono text-xs font-black uppercase leading-relaxed text-white/90">
                      {LIMITATIONS.map((l, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <span className="shrink-0">•</span>
                          {l}
                        </li>
                      ))}
                   </ul>
                </CinematicCard>
                <div className="bg-zinc-950 text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#e11d48]">
                   <h4 className="font-display text-2xl uppercase font-black mb-4">Nota de Investigación</h4>
                   <p className="text-sm font-sans font-bold leading-relaxed opacity-60 uppercase">
                      Se recomienda a las instituciones bachilleres no solo dotar de tecnología, sino supervisar su uso como mediador del aprendizaje para revertir el efecto distractor detectado en esta cohorte.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
