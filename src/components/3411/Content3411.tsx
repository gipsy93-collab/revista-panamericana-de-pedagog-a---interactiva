import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Monitor, Users, AlertTriangle, ChevronRight, Binary, Plus, Trash2, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell 
} from 'recharts';
import { PREDICTORS, LIMITATIONS, STUDY_DATA } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DataLab3411 } from './DataLab3411';

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
    { name: 'Intercepto', value: -4.842, color: '#64748b' },
    { name: 'Promedio', value: 0.714 * promedio, color: '#F4A261' },
    { name: 'Sexo', value: sexo === 'hombre' ? -0.661 : 0, color: '#3b82f6' },
    { name: 'PC', value: computadora ? -0.919 : 0, color: '#f43f5e' },
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
    <div className="bg-white">
      {/* 2.3 OBJETIVOS */}
      <div className="bg-black text-white p-16 md:p-24 border-y-[12px] border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="2.3 OBJETIVOS" color="bg-[#F4A261]" className="text-black mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="font-display text-4xl uppercase font-black italic text-[#F4A261]">Objetivo General</h3>
              <p className="text-2xl font-serif italic border-l-8 border-[#F4A261] pl-8 leading-tight">
                Identificar las variables que tienen mayor influencia en que los estudiantes se mantengan inscritos y vigentes entre el primer y el segundo semestre de su formación en EMS.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="font-display text-4xl uppercase font-black italic text-[#F4A261]">Objetivos Específicos</h3>
              <ul className="space-y-6">
                {[
                  "Analizar el poder predictivo de variables personales (sexo)",
                  "Evaluar la influencia de antecedentes escolares (promedio y tipo de secundaria)",
                  "Determinar el impacto del capital digital (Internet, computadora, tablet, smartphone)",
                  "Construir un modelo no paramétrico de regresión logística"
                ].map((obj, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-8 h-8 bg-[#F4A261] text-black flex items-center justify-center font-display font-black shrink-0">{i + 1}</span>
                    <p className="text-lg font-sans font-bold uppercase">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2.4 MARCO TEÓRICO */}
      <WaveSection topColor="#000000" bottomColor="#f8fafc" variant="steps">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="2.4 MARCO TEÓRICO" color="bg-black" className="text-white mb-12 !rotate-0" />
          <PremiumTitle subtitle="DIMENSIONES DE LA DESERCIÓN">Fundamentación Teórica</PremiumTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <BrutalCard title="CAUSAS DE DESERCIÓN" color="bg-[#f1f5f9]">
              <p className="text-xs leading-relaxed text-black/70">
                Se fundamenta en múltiples perspectivas: contexto social y familiar, problemáticas psicológicas, falta de orientación vocacional, problemas económicos y aspectos de rendimiento escolar (Guzmán-Ventura y Moctezuma-Franco, 2022).
              </p>
            </BrutalCard>
            <BrutalCard title="CRÍTICA AL ABANDONO" color="bg-white">
              <p className="text-xs leading-relaxed text-black/70">
                Guzmán-Ventura y Moctezuma-Franco (2023) cuestionan el término por cargar responsabilidad exclusivamente al estudiante. Proponen responsabilidades compartidas entre estudiante, escuela y sistema.
              </p>
            </BrutalCard>
            <BrutalCard title="POLÍTICAS EDUCATIVAS" color="bg-[#F4A261]">
              <p className="text-xs leading-relaxed text-black/70">
                Se analizan programas como la Beca Universal Benito Juárez, la extra edad como factor de gestión escolar y las prácticas docentes (Román, 2013) como elementos clave de retención.
              </p>
            </BrutalCard>
            <BrutalCard title="CAPITAL DIGITAL" color="bg-zinc-900" className="text-white">
              <p className="text-xs leading-relaxed text-white/70 font-medium">
                Peniche-Cetzal y Ramón-Mac (2023) destacan la relevancia de infraestructura tecnológica para el éxito académico post-COVID-19 en el entorno de bachillerato tecnológico.
              </p>
            </BrutalCard>
          </div>
        </div>
      </WaveSection>

      {/* 3. METODOLOGÍA */}
      <section className="py-24 bg-[#f8fafc] px-6 border-b-[12px] border-black">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white mb-12 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16 items-start text-black">
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-4xl uppercase font-black italic mb-6">3.1 Tipo de estudio</h3>
                <p className="text-xl font-sans font-medium text-black/80 leading-relaxed">
                  Enfoque <strong>cuantitativo transversal no experimental</strong>. Se utilizó la técnica de <strong>Regresión logística no paramétrica</strong> (método forward condicional). Dado que las variables son nominales y ordinales, este modelo permite predecir probabilidades cuando la variable dependiente es binaria (permanencia/deserción).
                </p>
              </div>
              <div>
                <h3 className="font-display text-4xl uppercase font-black italic mb-6">3.3 Instrumentos</h3>
                <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#000]">
                  <p className="text-sm font-sans font-bold uppercase mb-4 opacity-60">Fuente de recolección:</p>
                  <p className="text-lg font-display font-black uppercase mb-6">Bases de datos de Servicios Escolares (CETis 74)</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-zinc-50 border-2 border-black font-mono text-[10px] uppercase font-black">Personales: Sexo</div>
                    <div className="p-4 bg-zinc-50 border-2 border-black font-mono text-[10px] uppercase font-black">Académicos: Promedio</div>
                    <div className="p-4 bg-zinc-50 border-2 border-black font-mono text-[10px] uppercase font-black">Capital Digital: PC/Internet</div>
                    <div className="p-4 bg-zinc-50 border-2 border-black font-mono text-[10px] uppercase font-black">Origen: Tipo Secular</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#F4A261] rotate-1">
               <h3 className="font-display text-4xl uppercase font-black mb-8 border-b-4 border-[#F4A261] pb-4 inline-block italic">3.2 Muestra</h3>
               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <span className="text-8xl font-display font-black text-[#F4A261]">500</span>
                    <p className="text-xl font-mono uppercase font-black leading-none opacity-60 italic">Universo Completo <br/> Cohorte 2023</p>
                  </div>
                  <div className="bg-zinc-900 p-6 border-l-8 border-[#F4A261]">
                    <p className="text-sm italic font-serif opacity-80">
                      "Para la Categoría de Antecedentes escolares, se omitieron 69 casos (13.8%) por falta de información sobre tipo de secundaria, trabajando finalmente con n=431 para dicho modelo."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS & DATALAB */}
      <DataLab3411 />

      {/* SIMULADOR INTERACTIVO (EXISTING) */}
      <section className="bg-[#0F172A] text-slate-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <BrutalSticker text="SIMUIADOR DE PROBABILIDAD" color="bg-[#F4A261]" className="text-black mb-10 !rotate-0" />
            <PremiumTitle className="text-white items-center" subtitle="MODELO DETERMINISTA_">
              Proyección de Permanencia
            </PremiumTitle>
          </div>

          <div className="bg-black border-[12px] border-zinc-800 p-8 md:p-16 shadow-[30px_30px_0_0_#F4A261] relative overflow-hidden group mb-16">
            <div className="absolute top-0 right-0 p-6 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black text-white group-hover:opacity-100 transition-opacity">PROBABILITY_ENGINE_3411</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Controls */}
              <div className="lg:col-span-5 space-y-10">
                <div className="bg-zinc-900 p-8 border-4 border-zinc-700 rotate-[-1deg]">
                  <label className="block text-xl font-display uppercase tracking-widest font-black mb-6 text-[#F4A261]">1. Promedio de Secundaria</label>
                  <input
                    type="range"
                    min={5}
                    max={10}
                    step={0.1}
                    value={promedio}
                    onChange={(e) => setPromedio(parseFloat(e.target.value))}
                    className="w-full h-8 bg-zinc-800 appearance-none cursor-pointer accent-[#F4A261] border-4 border-black"
                  />
                  <div className="text-right text-7xl font-display font-black mt-4 text-white italic">{promedio.toFixed(1)}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900 p-6 border-4 border-zinc-700">
                    <label className="block text-sm font-display uppercase tracking-widest font-black mb-6 text-blue-400 italic">2. Dimensión de Sexo</label>
                    <div className="flex gap-3">
                      {(['mujer', 'hombre'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSexo(s)}
                          className={`flex-1 py-4 border-4 border-black font-display uppercase text-xs font-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${
                            sexo === s
                              ? 'bg-blue-600 text-white'
                              : 'bg-zinc-800 text-slate-400 hover:bg-zinc-700'
                          }`}
                        >
                          {s === 'mujer' ? 'Femenino' : 'Masculino'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-zinc-900 p-6 border-4 border-zinc-700">
                    <label className="block text-sm font-display uppercase tracking-widest font-black mb-6 text-rose-500 italic">3. Acceso Tecnológico</label>
                    <div className="flex gap-3">
                      {[
                        { label: 'Sin PC', val: false },
                        { label: 'Con PC', val: true },
                      ].map((c) => (
                        <button
                          key={c.label}
                          onClick={() => setComputadora(c.val)}
                          className={`flex-1 py-4 border-4 border-black font-display uppercase text-xs font-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${
                            computadora === c.val
                              ? 'bg-rose-600 text-white'
                              : 'bg-zinc-800 text-slate-400 hover:bg-zinc-700'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="lg:col-span-7">
                <div className="bg-zinc-900 border-[16px] border-[#F4A261] p-10 md:p-14 rotate-1 shadow-[20px_20px_0_0_#000] relative text-center">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-[#F4A261] px-6 py-2 border-4 border-[#F4A261] font-black uppercase text-[10px] tracking-[0.3em] italic">RESULT_PROJECTION</div>
                  <p className="text-sm uppercase tracking-[0.5em] text-slate-500 mb-6 font-black">Probabilidad de Permanencia</p>
                  <motion.p
                    key={probabilidad}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-[8rem] md:text-[12rem] font-display font-black text-white italic leading-none drop-shadow-[15px_15px_0_#F4A261]"
                    style={{ WebkitTextStroke: 'var(--brutal-stroke-width) black' }}
                  >
                    {probabilidad}<span className="text-4xl not-italic ml-2">%</span>
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.1 INTERPRETACIÓN DE LOS HALLAZGOS */}
      <WaveSection topColor="#0F172A" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto py-24">
          <BrutalSticker text="5.1 INTERPRETACIÓN" color="bg-white" className="text-black mb-12 !rotate-0" />
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
               <div className="bg-white border-[12px] border-black p-12 md:p-20 shadow-[25px_25px_0_0_#F4A261]">
                  <h3 className="font-display text-5xl uppercase font-black italic mb-8 text-black leading-none">Interpretación de Hallazgos</h3>
                  <div className="space-y-8">
                    <p className="text-2xl font-serif italic leading-relaxed text-black/80">
                      "El estudio reconoce explícitamente que las variables analizadas permiten solo un 'análisis somero'. Con un máximo del 8.9% de varianza explicada, el 91.1% de los factores que determinan la deserción permanecen como una incógnita."
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                       <div className="p-6 bg-zinc-900 text-white">
                          <h4 className="font-display text-lg uppercase font-black mb-4 text-[#F4A261]">La paradoja digital</h4>
                          <p className="text-[10px] font-mono uppercase font-black opacity-60">El hallazgo de que tener computadora predice deserción contradice los supuestos de las políticas de dotación tecnológica.</p>
                       </div>
                       <div className="p-6 bg-[#F4A261] text-black">
                          <h4 className="font-display text-lg uppercase font-black mb-4">Acumulación histórica</h4>
                          <p className="text-[10px] font-mono uppercase font-black opacity-60">El promedio de secundaria como mejor predictor apoya que la deserción se construye a lo largo de la trayectoria, no es un evento aislado.</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center">
              <motion.div
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  className="w-full h-full rounded-full border-[20px] border-zinc-200"
                  style={{
                    background: `conic-gradient(#F4A261 0deg 32deg, #f1f5f9 32deg 360deg)`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[8rem] font-display font-black text-black/5 italic">?</span>
                </div>
              </motion.div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-4xl font-display font-black uppercase text-black italic">91.1%_</p>
                <p className="text-[10px] font-mono uppercase font-black opacity-40">Incógnita</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 6.2 CONCLUSIONES POR AUTORES */}
      <section className="bg-white py-24 px-6 border-t-[12px] border-black">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="6.2 CONCLUSIONES" color="bg-black" className="text-white mb-16 !rotate-0" />
          <div className="grid md:grid-cols-1 gap-12">
            <BrutalQuote author="Jiménez-Moreno & Feria-Juárez" className="bg-zinc-50 text-4xl font-serif italic border-[8px] border-black shadow-[20px_20px_0_0_#F4A261]">
              <div className="space-y-16 py-12">
                 <div className="group">
                   <p className="mb-4">"Las variables seleccionadas [...] permiten únicamente un análisis somero de la situación."</p>
                   <div className="h-2 w-24 bg-[#F4A261] group-hover:w-full transition-all duration-500" />
                 </div>
                 <div className="group">
                   <p className="mb-4">"El promedio obtenido en el nivel educativo previo (Secundaria) parece tener un amplio poder explicativo."</p>
                   <div className="h-2 w-24 bg-black group-hover:w-full transition-all duration-500" />
                 </div>
                 <div className="group">
                   <p className="mb-4">"El hecho de tener computadora en casa resulta ser la variable de mayor impacto [...] respecto a aquellas relacionadas con elementos tecnológicos."</p>
                   <div className="h-2 w-24 bg-rose-600 group-hover:w-full transition-all duration-500" />
                 </div>
                 <div className="group">
                   <p className="mb-4">"Se reafirman las tesis relacionadas con la baja influencia del sexo de los jóvenes."</p>
                   <div className="h-2 w-24 bg-blue-600 group-hover:w-full transition-all duration-500" />
                 </div>
              </div>
            </BrutalQuote>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="wavy">
        <div className="max-w-6xl mx-auto text-center pb-48">
           <div className="inline-block relative mb-24">
              <div className="absolute inset-0 bg-[#F4A261] translate-x-3 translate-y-3" />
              <div className="relative bg-black text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-[0.8] tracking-tighter italic">
                   La Escuela <br/> <span className="text-[#F4A261]">Filtrante</span>
                 </h2>
                 <div className="w-40 h-8 bg-[#F4A261] mx-auto mt-16 mb-16" />
                 <p className="text-2xl font-mono text-white uppercase font-black tracking-widest italic animate-pulse">
                   DENTRO DEL 91% DESCONOCIDO
                 </p>
              </div>
           </div>

           <div className="bg-zinc-50 text-black p-16 md:p-24 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#000] rotate-1 mt-20">
              <div className="absolute top-0 right-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black text-black">CETIS_74_ENSENADA_MEXICO_3411</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-tight mb-16 italic">
                La deserción <span className="text-rose-600">no es</span> un error, <br/> <span className="underline decoration-[#F4A261] decoration-8 underline-offset-8">es una trayectoria</span>
              </p>
              <div className="w-80 h-6 bg-black mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
}
