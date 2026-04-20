import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText, Globe, Filter, ShieldCheck,
  TrendingUp, BarChart3, HelpCircle, PenTool, LayoutTemplate, MessageSquareQuote
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DataLab3543 } from './DataLab3543';

export default function Content3543() {
  return (
    <div className="bg-white">
      {/* 2.3 OBJETIVOS */}
      <section className="bg-indigo-950 text-white p-16 md:p-32 border-b-[12px] border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 font-mono text-[200px] font-black text-white/[0.03] leading-none pointer-events-none select-none">
          OBJ_3543
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="2.3 OBJETIVOS" color="bg-indigo-600" className="text-white mb-10 !rotate-0 shadow-[6px_6px_0_0_#f59e0b]" />
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
               <h3 className="font-display text-5xl uppercase font-black italic mb-8 leading-none text-indigo-400">Objetivo General_</h3>
               <p className="text-3xl md:text-5xl font-serif italic border-l-8 border-indigo-600 pl-8 leading-tight">
                 "Describir las prácticas docentes dirigidas al desarrollo de la escritura académica."
               </p>
            </div>
            <div>
               <h3 className="font-display text-2xl uppercase font-black italic mb-8 border-b-2 border-white/20 pb-4">Objetivos Específicos</h3>
               <ul className="space-y-4 font-display text-lg uppercase font-black">
                  {[
                    "Conceptualización de la escritura académica.",
                    "Frecuencia de las actividades asignadas.",
                    "Tipos de trabajos de escritura académica.",
                    "Evaluación y acompañamiento brindado.",
                    "Relación entre asignación e importancia."
                  ].map((obj, i) => (
                    <li key={i} className="flex gap-4 items-center">
                       <span className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center font-black rotate-3">{i+1}</span>
                       {obj}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METODOLOGÍA */}
      <WaveSection topColor="#0f172a" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto py-12">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white mb-16 !rotate-0" />
          <div className="grid md:grid-cols-3 gap-8 mb-20">
             <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000]">
                <h4 className="font-display text-2xl font-black uppercase italic mb-4 flex items-center gap-3"><PenTool size={28} /> 3.1 Tipo</h4>
                <p className="font-sans font-bold uppercase text-xs leading-relaxed text-black/60">Enfoque Cualitativo, estudio de caso descriptivo de profundidad y transeccional.</p>
             </div>
             <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#4f46e5]">
                <h4 className="font-display text-2xl font-black uppercase italic mb-4 flex items-center gap-3"><LayoutTemplate size={28} /> 3.3 Instrumentos</h4>
                <p className="font-sans font-bold uppercase text-xs leading-relaxed text-black/60">Entrevista semiestructurada (11 preguntas) y revisión de planeaciones de clase.</p>
             </div>
             <div className="bg-zinc-950 text-white border-4 border-black p-8 shadow-[8px_8px_0_0_#f59e0b]">
                <h4 className="font-display text-2xl font-black uppercase italic mb-4 flex items-center gap-3 text-amber-500"><SearchCode size={28} /> 3.5 Análisis</h4>
                <p className="font-sans font-bold uppercase text-xs leading-relaxed text-white/70">Categorización emergente en torno a conceptualización, evaluación, retroalimentación e importancia.</p>
             </div>
          </div>
          
          <DataLab3543 />
        </div>
      </WaveSection>

      {/* 4.1 HALLAZGO PRINCIPAL */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <BrutalSticker text="4.1 HALLAZGO PRINCIPAL" color="bg-rose-600" className="text-white mb-10 !rotate-0 shadow-[6px_6px_0_0_#000]" />
          <BrutalQuote author="Ríos-Higuera & Sotomayor-Andrade (2026)" className="bg-zinc-50 border-[10px] border-black text-4xl font-serif italic shadow-[25px_25px_0_0_#f59e0b]">
             "Aunque 13 de 14 docentes consideran importante la escritura académica, hay quienes la trabajan con poca frecuencia o no la trabajan. No existe acompañamiento durante el proceso ni uniformidad en criterios de evaluación."
          </BrutalQuote>
        </div>
      </section>

      {/* 5.1 INTERPRETACIÓN DE LOS HALLAZGOS */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-7xl mx-auto py-24">
          <BrutalSticker text="5.1 INTERPRETACIÓN" color="bg-black" className="text-white mb-12 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-12">
                <h3 className="font-display text-6xl uppercase font-black italic text-black leading-none">La Brecha del <br/> <span className="text-indigo-600 underline decoration-8 decoration-indigo-200 uppercase">Acompañamiento_</span></h3>
                <p className="text-2xl font-serif italic leading-relaxed text-black/80 font-medium border-l-8 border-indigo-600 pl-8">
                  Los docentes muestran conciencia de la complejidad de la escritura como proceso cognitivo e instrumento epistémico, coincidiendo con el marco de Carlino (2008). Sin embargo, esta conciencia no se traduce necesariamente en práctica docente.
                </p>
             </div>
             <div className="bg-white border-[12px] border-black p-12 shadow-[30px_30px_0_0_#4f46e5] space-y-8">
                <p className="font-sans font-bold uppercase text-black/60 leading-relaxed text-sm">
                   COINCIDENCIA CON CASTELLÓ Y MATEOS (2015): LOS DOCENTES VALORAN LA ESCRITURA PERO REALIZAN POCAS PRÁCTICAS PARA APOYAR A LOS ESTUDIANTES REALMENTE.
                </p>
                <div className="h-px bg-black opacity-10" />
                <p className="font-sans font-bold uppercase text-black/60 leading-relaxed text-sm">
                   COINCIDENCIA CON ORTIZ-CASALLAS (2015): DOCENTES ASUMEN QUE OTROS (ÁREA DE LENGUA) DEBEN ENSEÑAR ESCRITURA.
                </p>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* 6.2 CONCLUSIONES ESPECÍFICAS */}
      <section className="py-32 bg-indigo-900 border-y-[12px] border-black px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <BrutalSticker text="6.2 CONCLUSIONES ESPECÍFICAS" color="bg-amber-500" className="text-black mb-16 !rotate-0 shadow-[6px_6px_0_0_#fff]" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Conceptualización", c: "Los docentes ven la escritura como un proceso complejo que beneficia cognitivamente al estudiante." },
              { t: "Liderazgo de Inglés", c: "La especialidad con mayor práctica activa, influenciada por formación bilingüe específica." },
              { t: "El Ensayo", c: "Es el tipo de texto más solicitado transversalmente en todas las especialidades." },
              { t: "Falta de Uniformidad", c: "No hay criterios de evaluación compartidos ni estandarizados entre el profesorado." },
              { t: "Vacío de Acompañamiento", c: "No existe acompañamiento sistemático durante el proceso interno de escritura." },
              { t: "Brecha Valor-Acción", c: "No existe una relación directa entre la importancia declarada y la práctica docente real." }
            ].map((item, i) => (
              <div key={i} className="bg-white text-black border-4 border-black p-10 shadow-[10px_10px_0_0_#000] rotate-1 hover:rotate-0 transition-transform flex flex-col h-full">
                 <h4 className="font-display text-2xl font-black uppercase italic mb-4 border-b-4 border-indigo-600 pb-2 inline-block">{item.t}</h4>
                 <p className="font-sans font-bold uppercase text-[10px] opacity-60 leading-relaxed italic flex-1">"{item.c}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="py-48 bg-white border-t-[12px] border-black relative overflow-hidden text-center">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-8xl md:text-[14rem] font-display uppercase font-black italic tracking-tighter leading-[0.8] mb-16">
              Escritura<br/> <span className="text-indigo-600 italic">Transversal_</span>
            </h2>
            <div className="relative z-10">
               <div className="inline-block bg-zinc-950 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#f59e0b] -rotate-1">
                  <p className="text-4xl md:text-5xl font-display font-black uppercase italic tracking-tighter mb-8 max-w-4xl mx-auto leading-none">
                    "La escritura académica es una responsabilidad institucional compartida."
                  </p>
                  <p className="font-mono text-xs font-black uppercase opacity-40 italic tracking-widest leading-none">Ríos-Higuera & Sotomayor-Andrade // RPP N. 41 // 2026</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
