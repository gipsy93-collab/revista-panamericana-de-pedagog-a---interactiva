import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Monitor, Users, AlertTriangle, ChevronRight, Binary, Plus, Trash2, 
  Target, Search, School, GraduationCap, ClipboardCheck, Brain, Activity,
  Quote, CheckCircle2, AlertCircle, Minus, ShieldCheck, Check
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell 
} from 'recharts';
import { PREDICTORS, LIMITATIONS, STUDY_DATA } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard, BrutalTitle, RapidCounter, FallingWords } from '../BrutalistLib';

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
  riesgo: number;
};

// Modelo de Regresión Logística según datos oficiales del CETis 74 (Tablas 8, 15 y 19 del artículo):
// - Constante base de antecedentes: -4.842
// - Promedio de egreso de secundaria: +0.714 por punto (OR = 2.042) -> Favorece la permanencia
// - Sexo masculino: -0.661 (OR = 0.516) -> Mayor vulnerabilidad a la baja (58% de bajas en cohorte)
// - Computadora en casa: +0.919 (OR = 2.506 / 0.399 inverso de baja) -> Factor protector decisivo
function calcProb(promedio: number, sexo: 'mujer' | 'hombre', computadora: boolean) {
  let logit = -4.842 + 0.714 * promedio;
  if (sexo === 'hombre') logit -= 0.661;
  if (computadora) logit += 0.919;
  const p = 1 / (1 + Math.exp(-logit));
  const probPermanencia = parseFloat((p * 100).toFixed(1));
  const probRiesgo = parseFloat((100 - probPermanencia).toFixed(1));
  return { probPermanencia, probRiesgo };
}

export default function Content3411() {
  const [promedio, setPromedio] = useState<number>(8.0);
  const [sexo, setSexo] = useState<'mujer' | 'hombre'>('mujer');
  const [computadora, setComputadora] = useState<boolean>(true);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);

  const { probPermanencia, probRiesgo } = useMemo(
    () => calcProb(promedio, sexo, computadora), 
    [promedio, sexo, computadora]
  );

  const coefData = useMemo(() => [
    { name: 'Intercepto', value: -4.842, color: '#1e293b' },
    { name: 'Promedio Sec.', value: parseFloat((0.714 * promedio).toFixed(2)), color: '#e11d48' },
    { name: 'Computadora', value: computadora ? 0.919 : 0, color: '#10b981' },
    { name: 'Sexo Hombre', value: sexo === 'hombre' ? -0.661 : 0, color: '#3b82f6' },
  ], [promedio, sexo, computadora]);

  const addScenario = () => {
    if (scenarios.length >= 3) return;
    const newScenario: Scenario = {
      id: Math.random().toString(36).slice(2),
      promedio,
      sexo,
      computadora,
      probabilidad: probPermanencia,
      riesgo: probRiesgo,
    };
    setScenarios((prev) => [...prev, newScenario]);
  };

  const removeScenario = (id: string) => {
    setScenarios((prev) => prev.filter((s) => s.id !== id));
  };

  const adjustPromedio = (delta: number) => {
    setPromedio((prev) => {
      const next = Math.round((prev + delta) * 10) / 10;
      return Math.min(10.0, Math.max(6.0, next));
    });
  };

  return (
    <div className="bg-[#020617] text-white">
      {/* 2.3 OBJETIVOS - DISEÑO PREMIUM */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-600 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
             <span className="font-mono text-rose-500 text-xs tracking-[0.5em] uppercase font-black mb-4">// OBJETIVOS DE INVESTIGACIÓN</span>
             <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase font-black leading-tight">
               Horizonte de <span className="text-rose-600">Investigación</span>
             </h2>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border-[4px] border-white/10 p-8 md:p-12 flex flex-col justify-between group hover:border-rose-600 transition-colors rounded-3xl">
               <div>
                  <h3 className="font-display text-3xl uppercase font-black text-rose-500 mb-6 italic">Meta Principal</h3>
                  <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-slate-300">
                    "Identificar las variables que tienen mayor influencia en que los estudiantes se mantengan inscritos y vigentes entre el primer y el segundo semestre."
                  </p>
               </div>
               <div className="mt-10 flex justify-between items-end border-t border-white/10 pt-6">
                  <div className="font-mono text-[10px] uppercase font-black opacity-40">CETis 74 · Ensenada, B.C.</div>
                  <Target className="text-rose-600 animate-pulse" size={36} />
               </div>
            </div>

            <div className="lg:col-span-7 bg-zinc-900 border-[4px] border-black p-8 md:p-12 shadow-[16px_16px_0_0_#000] rounded-3xl">
               <h3 className="font-display text-3xl uppercase font-black text-white mb-8">Ejes Analíticos del Modelo</h3>
               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { t: "Poder Predictivo", d: "Variables personales (sexo y edad)", icon: Users },
                    { t: "Antecedentes", d: "Promedio y tipo de secundaria", icon: GraduationCap },
                    { t: "Capital Digital", d: "Equipo de cómputo y conectividad", icon: Monitor },
                    { t: "Modelación", d: "Regresión logística multivariada", icon: Binary }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group rounded-2xl">
                       <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center shrink-0 rounded-xl group-hover:scale-105 transition-transform">
                          <item.icon size={22} />
                       </div>
                       <div>
                          <h4 className="font-display text-lg uppercase font-black tracking-normal">{item.t}</h4>
                          <p className="text-xs font-mono uppercase font-bold text-slate-400 mt-1">{item.d}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 SIMULADOR DE PERMANENCIA ESCOLAR */}
      <WaveSection topColor="#020617" bottomColor="#f8fafc" variant="curved">
        <div className="max-w-7xl mx-auto text-black">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
             <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-1 bg-rose-600 rounded-full" />
                   <span className="font-mono text-xs font-black uppercase text-rose-600 tracking-widest">
                     Modelo de Regresión Logística
                   </span>
                </div>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-display uppercase font-black leading-tight text-black">
                  Simulador de <span className="text-rose-600">Permanencia Escolar</span>
                </h2>
             </div>
             <p className="max-w-md text-sm font-sans font-semibold text-black/70 leading-relaxed border-l-4 border-rose-600 pl-4">
                Herramienta interactiva basada en los coeficientes estadísticos de las Tablas 8, 15 y 19 del estudio oficial (CETis 74). Permite estimar la probabilidad de retención del estudiante.
             </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Controles del Simulador */}
            <div className="lg:col-span-12 grid md:grid-cols-3 gap-6">
               {/* 1. Control de Promedio */}
               <div className="bg-white border-4 border-black p-7 shadow-[8px_8px_0_0_#000] flex flex-col justify-between gap-6 rounded-3xl">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs uppercase font-black text-black/60">
                        1. ANTECEDENTE ESCOLAR
                      </span>
                      <span className="font-mono text-xs uppercase font-bold bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md">
                        OR: 2.042
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline mb-4">
                      <label className="font-display text-xl uppercase font-black">Promedio Secundaria</label>
                      <span className="font-mono text-4xl font-black text-rose-600">{promedio.toFixed(1)}</span>
                    </div>

                    {/* Slider estilizado con thumb nativo visible */}
                    <input 
                      type="range" 
                      min="6.0" 
                      max="10.0" 
                      step="0.1" 
                      value={promedio}
                      onChange={(e) => setPromedio(parseFloat(e.target.value))}
                      className="w-full h-3 bg-zinc-200 rounded-lg cursor-pointer accent-rose-600"
                    />

                    <div className="flex justify-between mt-2 font-mono text-[10px] font-bold text-black/50">
                      <span>Mínimo 6.0</span>
                      <span>Promedio 8.0</span>
                      <span>Máximo 10.0</span>
                    </div>
                  </div>

                  {/* Botones de ajuste fino */}
                  <div className="flex items-center gap-2 pt-2 border-t border-black/10">
                    <button
                      onClick={() => adjustPromedio(-0.5)}
                      className="flex-1 py-2 px-3 border-2 border-black bg-zinc-100 hover:bg-zinc-200 text-black font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors"
                      title="Restar 0.5"
                    >
                      <Minus size={14} /> 0.5
                    </button>
                    <button
                      onClick={() => adjustPromedio(0.5)}
                      className="flex-1 py-2 px-3 border-2 border-black bg-zinc-100 hover:bg-zinc-200 text-black font-mono text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors"
                      title="Sumar 0.5"
                    >
                      <Plus size={14} /> 0.5
                    </button>
                    <button
                      onClick={() => setPromedio(8.0)}
                      className="py-2 px-3 border-2 border-black bg-rose-50 hover:bg-rose-100 text-rose-700 font-mono text-xs font-bold rounded-xl transition-colors"
                      title="Restablecer a promedio cohorte"
                    >
                      Media
                    </button>
                  </div>
               </div>

               {/* 2. Control de Sexo */}
               <div className="bg-white border-4 border-black p-7 shadow-[8px_8px_0_0_#000] flex flex-col justify-between gap-6 rounded-3xl">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs uppercase font-black text-black/60">
                        2. VARIABLE PERSONAL
                      </span>
                      <span className="font-mono text-xs uppercase font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md">
                        OR: 0.516
                      </span>
                    </div>
                    <label className="font-display text-xl uppercase font-black block mb-4">Sexo del Estudiante</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => setSexo('mujer')}
                        className={`py-4 px-4 font-display text-base uppercase font-black border-4 border-black rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1 ${
                          sexo === 'mujer' 
                            ? 'bg-black text-white shadow-[4px_4px_0_0_#e11d48]' 
                            : 'bg-zinc-50 text-black hover:bg-white'
                        }`}
                      > 
                        <span className="text-sm">Mujer</span>
                        <span className="text-[10px] font-mono font-normal opacity-70">41.8% de bajas</span>
                      </button>
                      <button 
                        onClick={() => setSexo('hombre')}
                        className={`py-4 px-4 font-display text-base uppercase font-black border-4 border-black rounded-2xl transition-all cursor-pointer flex flex-col items-center gap-1 ${
                          sexo === 'hombre' 
                            ? 'bg-black text-white shadow-[4px_4px_0_0_#e11d48]' 
                            : 'bg-zinc-50 text-black hover:bg-white'
                        }`}
                      > 
                        <span className="text-sm">Hombre</span>
                        <span className="text-[10px] font-mono font-normal opacity-70">58.2% de bajas</span>
                      </button>
                    </div>
                  </div>
                  <p className="text-[11px] font-sans text-black/60 leading-tight">
                    * Los hombres presentaron una tasa de baja desproporcionada respecto a su matrícula.
                  </p>
               </div>

               {/* 3. Control de Computadora */}
               <div className="bg-white border-4 border-black p-7 shadow-[8px_8px_0_0_#000] flex flex-col justify-between gap-6 rounded-3xl">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-mono text-xs uppercase font-black text-black/60">
                        3. CAPITAL DIGITAL
                      </span>
                      <span className="font-mono text-xs uppercase font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md">
                        FACTOR PROTECTOR
                      </span>
                    </div>
                    <label className="font-display text-xl uppercase font-black block mb-4">Computadora en Casa</label>
                    <button 
                      onClick={() => setComputadora(!computadora)}
                      className={`w-full p-5 border-4 border-black rounded-2xl flex items-center justify-between gap-4 transition-all cursor-pointer ${
                        computadora 
                          ? 'bg-emerald-600 text-white shadow-[6px_6px_0_0_#000]' 
                          : 'bg-zinc-100 text-black hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Monitor size={28} className={computadora ? 'text-white' : 'text-black/60'} />
                        <div className="text-left">
                          <span className="font-display text-base uppercase font-black block leading-none">
                            {computadora ? 'SÍ TIENE COMPUTADORA' : 'NO TIENE COMPUTADORA'}
                          </span>
                          <span className="font-mono text-[10px] opacity-80 mt-1 block">
                            {computadora ? 'Reduce el riesgo de abandono al 40%' : '68.8% de quienes causaron baja no tenían PC'}
                          </span>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 ${
                        computadora ? 'bg-white text-emerald-700' : 'bg-white text-black/30'
                      }`}>
                        {computadora ? <Check size={18} strokeWidth={3} /> : <Minus size={16} />}
                      </div>
                    </button>
                  </div>
                  <p className="text-[11px] font-sans text-black/60 leading-tight">
                    * El smartphone e internet no mostraron efecto protector; únicamente la computadora propia.
                  </p>
               </div>
            </div>

            {/* Resultado Principal del Modelo */}
            <div className="lg:col-span-8">
              <div className="bg-white border-8 border-black shadow-[24px_24px_0_0_#000] p-8 md:p-14 relative overflow-hidden min-h-[480px] flex flex-col justify-between items-center text-center rounded-3xl">
                <div className="w-full flex justify-between items-center border-b-2 border-black/10 pb-4">
                   <div className="flex items-center gap-2 font-mono text-[11px] font-black uppercase text-black">
                      <Activity size={16} className="text-rose-600 animate-pulse" />
                      ESTIMADOR_REGRESIÓN_LOGÍSTICA // CETIS_74
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="font-mono text-[10px] uppercase font-bold text-black/50">R² Nagelkerke:</span>
                     <span className="font-mono text-[11px] font-black bg-black text-white px-2 py-0.5 rounded">8.9%</span>
                   </div>
                </div>

                <div className="my-8 w-full flex flex-col items-center">
                   {/* Alerta de estado */}
                   <div className="mb-4">
                     {probPermanencia >= 75 ? (
                       <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 border-2 border-emerald-500 px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase tracking-wider">
                         <ShieldCheck size={16} /> Alta Probabilidad de Permanencia
                       </span>
                     ) : probPermanencia >= 50 ? (
                       <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border-2 border-amber-500 px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase tracking-wider">
                         <AlertCircle size={16} /> Zona de Atención y Seguimiento
                       </span>
                     ) : (
                       <span className="inline-flex items-center gap-2 bg-rose-100 text-rose-900 border-2 border-rose-500 px-4 py-1.5 rounded-full font-mono text-xs font-black uppercase tracking-wider">
                         <AlertTriangle size={16} /> Riesgo Crítico de Desafiliación
                       </span>
                     )}
                   </div>

                   <span className="font-mono text-black/60 text-xs font-black uppercase tracking-[0.25em] mb-2 block">
                     Probabilidad Estimada de Permanecer Activo
                   </span>

                   <motion.div 
                     key={probPermanencia}
                     initial={{ scale: 0.85, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ type: "spring", stiffness: 350, damping: 20 }}
                     className="text-7xl sm:text-9xl md:text-[11rem] font-display font-black leading-none text-black tracking-normal"
                   >
                     {probPermanencia.toFixed(0)}<span className="text-5xl md:text-7xl italic text-rose-600">%</span>
                   </motion.div>

                   {/* Métrica complementaria: Riesgo de Desafiliación */}
                   <div className="mt-4 flex items-center gap-3 text-sm font-mono text-black/70">
                     <span>Riesgo estimado de abandono temprano:</span>
                     <strong className="text-base text-rose-600 font-black">{probRiesgo}%</strong>
                   </div>

                   {/* Barra visual de probabilidad */}
                   <div className="w-full max-w-xl h-6 bg-zinc-200 border-3 border-black mt-8 relative rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${probPermanencia}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`h-full rounded-full transition-colors ${
                          probPermanencia >= 75 ? 'bg-emerald-500' : probPermanencia >= 50 ? 'bg-amber-500' : 'bg-rose-600'
                        }`}
                      />
                   </div>
                </div>

                <div className="w-full pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-left font-mono text-[11px] text-black/60">
                    Perfil actual: <strong>{sexo === 'mujer' ? 'Mujer' : 'Hombre'}</strong> · Promedio: <strong>{promedio.toFixed(1)}</strong> · PC: <strong>{computadora ? 'Sí' : 'No'}</strong>
                  </div>
                  <button 
                     onClick={addScenario}
                     disabled={scenarios.length >= 3}
                     className="bg-black text-white px-8 py-3.5 font-display text-lg uppercase font-black border-3 border-black shadow-[6px_6px_0_0_#e11d48] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all disabled:opacity-30 disabled:pointer-events-none group flex items-center gap-3 rounded-2xl cursor-pointer"
                  >
                    Guardar para Comparar <Plus className="group-hover:rotate-90 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Gráfico de Pesos Estadísticos */}
            <div className="lg:col-span-4">
              <BrutalCard title="Pesos del Modelo (B)" color="bg-white" className="h-full flex flex-col !border-[6px] rounded-3xl shadow-[16px_16px_0_0_#000]">
                <div className="flex-1 h-[320px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={coefData} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                      <XAxis type="number" tick={{ fontSize: 10, fontWeight: 'bold' }} />
                      <YAxis dataKey="name" type="category" width={110} axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'bold' }} />
                      <Tooltip formatter={(value: any) => [`${value} (Coef. B)`, 'Peso']} />
                      <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                        {coefData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 pt-4 border-t-2 border-black/10 space-y-2 text-[11px] font-mono leading-snug text-black/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600 inline-block" />
                    <span><strong>Promedio (+0.714/pto):</strong> Mayor fuerza compensatoria.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    <span><strong>Computadora (+0.919):</strong> Factor protector de permanencia.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                    <span><strong>Sexo Hombre (-0.661):</strong> Mayor vulnerabilidad observada.</span>
                  </div>
                </div>
              </BrutalCard>
            </div>

            {/* Comparativa de Escenarios Guardados */}
            <AnimatePresence>
              {scenarios.length > 0 && (
                <div className="lg:col-span-12 mt-8">
                   <div className="flex items-center justify-between mb-6">
                     <h4 className="font-display text-2xl uppercase font-black text-black">
                       Escenarios Comparados ({scenarios.length}/3)
                     </h4>
                     <button
                       onClick={() => setScenarios([])}
                       className="text-xs font-mono font-bold text-rose-600 hover:underline uppercase"
                     >
                       Limpiar todos
                     </button>
                   </div>
                   <div className="grid md:grid-cols-3 gap-6">
                      {scenarios.map((s, idx) => (
                        <motion.div 
                          key={s.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="bg-black text-white p-7 border-4 border-black shadow-[12px_12px_0_0_#e11d48] relative group rounded-3xl"
                        >
                           <button 
                             onClick={() => removeScenario(s.id)} 
                             className="absolute top-4 right-4 text-white/40 hover:text-rose-500 hover:rotate-90 transition-all p-1 cursor-pointer"
                             title="Eliminar escenario"
                           > 
                             <Trash2 size={20} /> 
                           </button>
                           
                           <div className="font-mono text-[10px] font-black uppercase text-rose-400 mb-4 tracking-[0.25em]">
                             # ESCENARIO_0{idx+1}
                           </div>
                           <div className="text-6xl font-display font-black leading-none mb-6 italic text-white">
                             {s.probabilidad}%
                           </div>
                           
                           <div className="space-y-2.5 border-t border-white/15 pt-5 font-mono text-xs uppercase">
                              <div className="flex justify-between">
                                <span className="opacity-60">Promedio:</span> 
                                <span className="text-rose-400 font-bold">{s.promedio.toFixed(1)}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="opacity-60">Sexo:</span> 
                                <span className="font-bold">{s.sexo === 'mujer' ? 'Mujer' : 'Hombre'}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="opacity-60">Computadora:</span> 
                                <span className={`font-bold ${s.computadora ? 'text-emerald-400' : 'text-zinc-400'}`}>
                                  {s.computadora ? 'SÍ (Protegido)' : 'NO'}
                                </span>
                              </div>
                              <div className="flex justify-between pt-2 border-t border-white/10 text-rose-300">
                                <span className="opacity-80">Riesgo baja:</span> 
                                <span className="font-bold">{s.riesgo}%</span>
                              </div>
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
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 border-t-[16px] border-black text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
             <div className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="w-14 h-3 bg-rose-600 rounded-full" />
                   <h2 className="text-3xl md:text-5xl font-display uppercase font-black">El Capital Digital Protector</h2>
                </div>
                <BrutalQuote author="Jiménez-Moreno & Feria-Juárez (2026)" className="!bg-zinc-50 border-rose-600 border-l-[16px] !rotate-0 rounded-3xl">
                  "El hecho de tener computadora en casa resulta ser la variable de mayor impacto en que los estudiantes sigan activos (permanezcan), respecto a los elementos tecnológicos en casa. Contar con equipo propio en el hogar reduce significativamente el riesgo de abandono escolar temprano al facilitar las tareas del bachillerato técnico."
                </BrutalQuote>
             </div>

             <div className="grid gap-6">
                <CinematicCard title="Limitaciones del Modelo" icon={AlertTriangle} color="bg-rose-600" className="text-white shadow-[12px_12px_0_0_#000]">
                   <ul className="space-y-3 font-mono text-xs font-black uppercase leading-relaxed text-white/95">
                      {LIMITATIONS.map((l, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <span className="shrink-0">•</span>
                          {l}
                        </li>
                      ))}
                   </ul>
                </CinematicCard>
                <div className="bg-zinc-950 text-white p-8 border-4 border-black shadow-[10px_10px_0_0_#e11d48] rounded-3xl">
                   <h4 className="font-display text-2xl uppercase font-black mb-3">Implicación de Política Escolar</h4>
                   <p className="text-sm font-sans font-medium leading-relaxed opacity-80">
                      Se recomienda a las instituciones bachilleres implementar programas de préstamo de equipos de cómputo y tutorías focalizadas desde las primeras semanas del primer semestre para estudiantes con promedios de secundaria inferiores a 8.0.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
