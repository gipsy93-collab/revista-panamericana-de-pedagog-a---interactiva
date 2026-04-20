import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText, Globe, Filter, ShieldCheck,
  TrendingUp, BarChart3, HelpCircle, ShieldAlert, FileSearch
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DataLab3476 } from './DataLab3476';

export default function Content3476() {
  const [activeCategory, setActiveCategory] = useState(0);

  const theoryCards = [
    { 
      title: "Educación Segregada", 
      period: "Hasta mediados del siglo XX", 
      content: "Se caracterizó por la creación de instituciones separadas para estudiantes con discapacidad, basándose en un modelo médico que los consideraba 'inclasificables' en el sistema regular." 
    },
    { 
      title: "Normalización / Integración", 
      period: "1950 - 1980", 
      content: "Buscó la incorporación física y social del estudiante, pero sin una participación curricular igualitaria. El estudiante debía 'adaptarse' al sistema preexistente." 
    },
    { 
      title: "Educación Inclusiva", 
      period: "Desde 1990", 
      content: "Propone la transformación profunda de los sistemas para eliminar barreras al aprendizaje. Se reconoce la diversidad como un valor y un motor de desarrollo organizacional." 
    },
    { 
      title: "Principios UNESCO", 
      period: "Horizonte 2020", 
      content: "Derecho a educación de calidad para todos, universalidad, participación activa y logros significativos. El sistema se adapta a la diversidad, no al revés." 
    }
  ];

  const categories = [
    {
      title: "PRÁCTICAS PEDAGÓGICAS",
      content: "Tendencia hacia la instrucción diferenciada (adaptación de contenidos, procesos y productos). Uso de estrategias activas: aprendizaje cooperativo, proyectos integrados y co-enseñanza. Paradoja: Muchas prácticas dependen de la voluntad individual del docente más que de un compromiso institucional.",
      icon: HelpCircle
    },
    {
      title: "BARRERAS ESTRUCTURALES",
      content: "Rigidez de diseños curriculares, ausencia de mecanismos de evaluación inclusiva y horarios inflexibles. Escuelas públicas y rurales enfrentan doble desigualdad: alta demanda + recursos insuficientes. Genera agotamiento y sensación de desamparo institucional.",
      icon: ShieldAlert
    },
    {
      title: "ACTITUDES Y CREENCIAS",
      content: "Tensión central: Docentes con predisposición favorable que no implementan estrategias específicas. Las creencias segregadoras persisten en docentes sin formación. Sin embargo, estas actitudes son susceptibles de cambio a través de procesos formativos reflexivos.",
      icon: BrainCircuit
    },
    {
      title: "FORMACIÓN DOCENTE",
      content: "Diferencia significativa entre demandas del modelo y competencias adquiridas. Carencias en DUA (Diseño Universal para el Aprendizaje) y gestión emocional. La formación debe ser transversal a los planes de estudio, no secundaria o limitada a talleres aislados.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="bg-white">
      {/* 2.3 OBJETIVOS */}
      <section className="bg-emerald-950 text-white p-16 md:p-32 border-b-[12px] border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 font-mono text-[200px] font-black text-emerald-600/[0.03] leading-none pointer-events-none select-none">
          OBJ_3476
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <BrutalSticker text="2.3 OBJETIVOS" color="bg-emerald-600" className="text-white mb-10 !rotate-0" />
          <h3 className="font-display text-4xl md:text-6xl uppercase font-black italic mb-8 leading-tight">Objetivo General_</h3>
          <p className="text-3xl md:text-5xl font-serif italic border-l-8 border-emerald-600 pl-8 leading-tight text-emerald-50">
            "Analizar los hallazgos de las investigaciones sobre experiencias de los docentes de educación media superior en la inclusión educativa, con un enfoque en estudiantes con necesidades educativas especiales, discapacidades intelectuales y físicas."
          </p>
        </div>
      </section>

      {/* 2.4 MARCO TEÓRICO: TARJETAS INTERACTIVAS */}
      <WaveSection topColor="#064e3b" bottomColor="#f8fafc" variant="steps">
        <div className="max-w-7xl mx-auto py-12">
          <div className="text-center mb-20">
            <BrutalSticker text="2.4 MARCO TEÓRICO" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="EVOLUCIÓN DEL CONCEPTO">Etapas de la Inclusión</PremiumTitle>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {theoryCards.map((card, i) => (
              <div key={i} className="group h-full">
                <BrutalCard title={card.title} color="bg-white" className="h-full flex flex-col shadow-[12px_12px_0_0_#065f46] hover:shadow-[12px_12px_0_0_#4f46e5] transition-all">
                   <span className="font-mono text-[10px] uppercase font-black text-emerald-600 mb-4 block underline decoration-2">{card.period}</span>
                   <p className="text-sm font-sans font-bold uppercase leading-relaxed text-black/80 flex-1">{card.content}</p>
                </BrutalCard>
              </div>
            ))}
          </div>
        </div>
      </WaveSection>

      {/* 3. METODOLOGÍA (3.1 & 3.5) */}
      <section className="py-24 bg-[#f8fafc] border-y-[12px] border-black px-6">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white mb-16 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16">
             <div className="space-y-12">
                <div>
                   <h3 className="font-display text-4xl font-black uppercase italic mb-6">3.1 Tipo de estudio</h3>
                   <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000] rotate-[-1deg]">
                      <p className="text-xl font-sans font-medium text-black leading-relaxed">
                        <strong>Revisión sistemática</strong> siguiendo los lineamientos de la declaración **PRISMA** (Higgins y Green, 2011) y la estrategia **PEO** (Población, Exposición, Resultado). Se analizaron exclusivamente investigaciones empíricas del período 2015-2025.
                      </p>
                   </div>
                </div>
                <div>
                   <h3 className="font-display text-4xl font-black uppercase italic mb-6">3.5 Análisis de datos</h3>
                   <div className="bg-emerald-600 text-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000] rotate-[1deg]">
                      <p className="text-lg font-sans font-bold uppercase leading-snug">
                         Análisis de contenido para agrupar investigaciones en cuatro categorías temáticas: Prácticas pedagógicas, Barreras estructurales, Actitudes/creencias y Formación docente.
                      </p>
                   </div>
                </div>
             </div>
             <div className="relative">
                <div className="absolute inset-0 bg-indigo-600/20 blur-[80px]" />
                <div className="relative bg-zinc-950 text-white p-12 border-8 border-black shadow-[20px_20px_0_0_#065f46]">
                   <FileSearch size={48} className="text-emerald-400 mb-8" />
                   <h4 className="font-display text-3xl uppercase font-black italic mb-8 border-b-2 border-white/10 pb-4 text-emerald-400">Estrategia PEO_</h4>
                   <ul className="space-y-6 list-none font-display text-xl uppercase font-black">
                      <li className="flex gap-4"><span className="text-emerald-600">[P]</span> Población: Teachers / Professors</li>
                      <li className="flex gap-4"><span className="text-indigo-600">[E]</span> Exposición: High School + Inclusion</li>
                      <li className="flex gap-4"><span className="text-white">[O]</span> Resultado: Experiences / Outcomes</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS & LAB (4.1 & 4.3 integrated) */}
      <section className="bg-white">
        <DataLab3476 />
      </section>

      {/* 4.2 RESULTADOS POR CATEGORÍA: TARJETAS INTERACTIVAS */}
      <WaveSection topColor="#F0FDF4" bottomColor="#0F172A" variant="dramatic">
        <div className="max-w-7xl mx-auto py-12">
          <div className="text-center mb-24">
            <BrutalSticker text="4.2 RESULTADOS CATEGORIZADOS" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="text-white items-center" subtitle="HALLAZGOS DEL CORPUS">Nodos de la Revisión</PremiumTitle>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {categories.map((cat, i) => (
               <button
                 key={i}
                 onClick={() => setActiveCategory(i)}
                 className={`group p-8 border-4 border-black text-left flex flex-col h-full transition-all shadow-[8px_8px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeCategory === i ? 'bg-emerald-600' : 'bg-white hover:bg-emerald-50'}`}
               >
                 <h4 className={`font-display text-2xl font-black uppercase italic mb-6 leading-none ${activeCategory === i ? 'text-white' : 'text-black'}`}>
                   {cat.title}
                 </h4>
                 <p className={`text-xs font-sans font-bold uppercase leading-relaxed ${activeCategory === i ? 'text-white/80' : 'text-black/60'}`}>
                   {cat.content}
                 </p>
                 <div className={`mt-auto pt-6 text-[10px] font-mono font-black uppercase italic ${activeCategory === i ? 'text-white/40' : 'text-emerald-600'}`}>
                    Hallazgo_Clave_3476_{i+1}
                 </div>
               </button>
             ))}
          </div>

          <div className="mt-20 bg-zinc-900 border-[10px] border-emerald-600 p-12 text-center rotate-1 shadow-[20px_20px_0_0_#000]">
             <h5 className="font-display text-2xl uppercase font-black text-white mb-6 animate-pulse">4.1 Hallazgo Principal_</h5>
             <p className="text-3xl md:text-5xl font-serif italic text-emerald-400 max-w-5xl mx-auto">
               "La inclusión educativa depende tanto de la disposición del docente como del apoyo institucional, las transformaciones estructurales y los procesos formativos."
             </p>
          </div>
        </div>
      </WaveSection>

      {/* 5.1 INTERPRETACIÓN */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="5.1 INTERPRETACIÓN" color="bg-black" className="text-white mb-12 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12">
               <BrutalQuote author="Síntesis de Interpretación" className="bg-zinc-50 border-[10px] border-black text-4xl font-serif italic shadow-[30px_30px_0_0_#065f46]">
                 <div className="space-y-10">
                    <p>"Los resultados confirman que el docente es actor central en la implementación de la educación inclusiva, pero su efectividad está condicionada por factores estructurales, formativos e ideológicos que van más allá de su voluntad individual."</p>
                    <p className="text-2xl font-sans font-bold uppercase text-black/50 border-t-2 border-black/10 pt-8 italic leading-snug">
                      La revisión revela un escenario de tensiones no resueltas entre intención inclusiva y práctica cotidiana, políticas normativas y condiciones reales, y formación recibida vs demandas del aula diversa.
                    </p>
                 </div>
               </BrutalQuote>
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 CONCLUSIONES DE AUTORES */}
      <WaveSection topColor="#ffffff" bottomColor="#064e3b" variant="steps">
        <div className="max-w-7xl mx-auto pb-24">
          <BrutalSticker text="6.2 CONCLUSIONES ESPECÍFICAS" color="bg-black" className="text-white mb-16 !rotate-0" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "EXPERIENCIAS FRÁGILES", c: "Dependen más de la disposición individual que de marcos institucionales articulados, lo que arriesga su sostenibilidad." },
              { t: "BARRERAS SISTÉMICAS", c: "Rigidez curricular, organización inflexible y falta de recursos constituyen obstáculos persistentes." },
              { t: "CREENCIAS DINÁMICAS", c: "Las actitudes no son estáticas; cambian con acompañamiento profesional y experiencias exitosas." },
              { t: "FORMACIÓN GRIEVE", c: "Tanto inicial como continua presentan grietas significativas respecto a las demandas reales del aula diversa." },
              { t: "TRANSFORMACIÓN PROFUNDA", c: "La inclusión no es un estado alcanzado sino un proceso en construcción que interpela a toda la comunidad." },
              { t: "RESPONSABILIDAD COMPARTIDA", c: "Trasciende las estrategias individuales; requiere respaldo de políticas y condiciones adecuadas." }
            ].map((item, i) => (
              <div key={i} className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#000] group hover:bg-emerald-50 transition-all">
                 <h4 className="font-display text-2xl font-black uppercase italic mb-4 border-b-2 border-black pb-2">{item.t}</h4>
                 <p className="font-sans font-bold uppercase text-xs leading-relaxed text-black/70">"{item.c}"</p>
              </div>
            ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL */}
      <section className="py-32 bg-emerald-950 text-white border-t-[12px] border-black overflow-hidden relative text-center">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-7xl md:text-[14rem] font-display uppercase font-black italic leading-[0.8] tracking-tighter mb-16 opacity-10">
              INCLUSIÓN<br/>PLENA_
            </h2>
            <div className="relative z-10">
               <div className="inline-block bg-white text-black p-16 border-8 border-black shadow-[25px_25px_0_0_#4f46e5] rotate-2">
                  <p className="text-5xl font-display font-black uppercase italic tracking-tighter mb-8">
                    "La diversidad es la norma"
                  </p>
                  <p className="font-mono text-sm font-black uppercase opacity-40">UNESCO 2020 // Revisión Sistemática 3476</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
