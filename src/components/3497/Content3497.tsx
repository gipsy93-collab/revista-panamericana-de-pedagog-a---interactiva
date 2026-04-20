import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText, Globe, Filter, ShieldCheck,
  TrendingUp, BarChart3, HelpCircle, Map, Scale, Crown, Heart, Zap, History
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DataLab3497 } from './DataLab3497';

export default function Content3497() {
  return (
    <div className="bg-white">
      {/* 3. METODOLOGÍA */}
      <section className="bg-white py-24 px-6 border-b-[12px] border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-black/[0.02] leading-none pointer-events-none select-none italic">
          MET_3497
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-indigo-600" className="text-white mb-16 !rotate-0 shadow-[6px_6px_0_0_#f59e0b]" />
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <h3 className="font-display text-5xl uppercase font-black italic text-black leading-none">Análisis Teórico y <span className="text-indigo-600 underline">Contextual_</span></h3>
               <div className="space-y-8 font-sans font-bold uppercase text-[15px] leading-relaxed text-black/70">
                  <p className="border-l-8 border-indigo-600 pl-8">
                     El artículo adopta un enfoque teórico y contextual caracterizado por una revisión teórica y análisis documental. Se utiliza la estrategia de análisis conceptual y revisión de literatura especializada.
                  </p>
                  <p className="border-l-8 border-amber-500 pl-8">
                     Las fuentes comprenden literatura académica internacional en liderazgo educativo y formación del carácter, junto con el análisis normativo-contextual del caso paraguayo (Ley 1264/98).
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 { t: "Estudio", c: "Teórico-Documental", i: FileText },
                 { t: "Estrategia", c: "Análisis Conceptual", i: SearchCode },
                 { t: "Contexto", c: "Paraguay (MEC)", i: Map },
                 { t: "Perspectiva", c: "Ética-Pedagógica", i: Scale }
               ].map((item, idx) => (
                 <div key={idx} className="bg-zinc-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] rotate-1 hover:rotate-0 transition-transform">
                    <item.i size={32} className="mb-4 text-indigo-600" />
                    <h5 className="font-display text-xl font-black uppercase italic leading-none mb-2">{item.t}</h5>
                    <p className="font-mono text-[10px] uppercase font-black opacity-40">{item.c}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS (LAB INTEGRATED) */}
      <section className="bg-white">
        <DataLab3497 />
      </section>

      {/* 5. DISCUSIÓN */}
      <WaveSection topColor="#FFFBEB" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto py-12">
          <BrutalSticker text="5. DISCUSIÓN" color="bg-black" className="text-white mb-16 !rotate-0" />
          
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12">
               <BrutalQuote author="Articulación Liderazgo-Carácter" className="bg-indigo-950 text-white text-3xl font-serif italic border-[10px] border-amber-500 shadow-[30px_30px_0_0_#000]">
                  <div className="space-y-12">
                     <p>"Los docentes-líderes no se limitan a transmitir contenidos, sino que fomentan una cultura institucional basada en la ética, el respeto, la responsabilidad y la convivencia democrática. El educador se sitúa como referente de integridad, justicia y compromiso ciudadano." (p. 15)</p>
                     <div className="h-px bg-white/10" />
                     <p className="text-xl font-sans font-bold uppercase text-amber-500 italic leading-snug">
                        Paraguay enfrenta una crisis del aprendizaje estructural evidenciada en evaluaciones estandarizadas, lo que demanda una transición urgente del modelo administrativo tradicional al liderazgo pedagógico.
                     </p>
                  </div>
               </BrutalQuote>
            </div>

            <div className="lg:col-span-6">
               <BrutalCard title="5.2 DESAFÍOS PARAGUAYOS" color="bg-white" className="h-full border-[8px] border-black shadow-[15px_15px_0_0_#f59e0b]">
                  <ul className="space-y-6 list-none p-4">
                     {[
                       "Fragilidad institucional frente a intereses ideológicos.",
                       "Ausencia de visión estratégica de mediano y largo plazo.",
                       "Falta de mecanismos sólidos de implementación y evaluación.",
                       "Ineficiencia del Plan Nacional de Transformación Educativa 2040."
                     ].map((item, i) => (
                       <li key={i} className="flex gap-4 items-start font-sans font-bold uppercase text-[11px]">
                          <AlertCircle size={20} className="text-red-600 shrink-0" /> {item}
                       </li>
                     ))}
                  </ul>
               </BrutalCard>
            </div>

            <div className="lg:col-span-6">
               <BrutalCard title="5.3 REFLEXIÓN CRÍTICA" color="bg-zinc-950" className="text-white h-full border-[8px] border-black shadow-[15px_15px_0_0_#000]">
                  <div className="p-4 space-y-6">
                    <p className="text-lg font-serif italic text-white/80 leading-relaxed">
                       "Se identifica una ausencia de una cultura de reflexión crítica sobre la práctica docente. Los educadores carecen de herramientas institucionalizadas para analizar y mejorar sus estrategias pedagógicas."
                    </p>
                    <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                       <History className="text-amber-500" />
                       <span className="font-mono text-[9px] uppercase font-black">Rol habilitador de la Ley General de Educación N.º 1264/98</span>
                    </div>
                  </div>
               </BrutalCard>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 6. CONCLUSIONES */}
      <section className="bg-zinc-50 py-32 px-6 border-y-[12px] border-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="6. CONCLUSIONES" color="bg-indigo-600" className="text-white mb-20 !rotate-0 shadow-[8px_8px_0_0_#000]" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
               <h4 className="font-display text-4xl font-black uppercase italic text-black border-b-8 border-indigo-600 pb-4 inline-block">6.1 Liderazgo Docente_</h4>
               <ul className="space-y-8">
                  {[
                    { t: "Factor Estratégico", c: "Elemento clave para la transformación en contextos de rezago social." },
                    { t: "Práctica Ética", c: "Trascender la gestión administrativa hacia la inspiración formativa." },
                    { t: "Modelo Distribuido", c: "Reconocer múltiples agentes de liderazgo en la comunidad." }
                  ].map((item, i) => (
                    <li key={i} className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#000] rotate-[-1deg]">
                       <h5 className="font-display text-2xl font-black uppercase mb-2 italic text-indigo-700">{item.t}</h5>
                       <p className="font-sans font-bold uppercase text-[10px] opacity-60 leading-tight">"{item.c}"</p>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="space-y-12 translate-y-24">
               <h4 className="font-display text-4xl font-black uppercase italic text-black border-b-8 border-amber-500 pb-4 inline-block">6.2 Formación del Carácter_</h4>
               <ul className="space-y-8">
                  {[
                    { t: "Prioridad Institucional", c: "Incorporarse explícitamente en la misión y visión de las escuelas." },
                    { t: "Dimensión Transversal", c: "Atravesar todo el quehacer educativo como finalidad en sí misma." },
                    { t: "Evaluación Holística", c: "Medir no solo el rendimiento académico, sino el desarrollo socioemocional." }
                  ].map((item, i) => (
                    <li key={i} className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#f59e0b] rotate-[1deg]">
                       <h5 className="font-display text-2xl font-black uppercase mb-2 italic text-amber-600">{item.t}</h5>
                       <p className="font-sans font-bold uppercase text-[10px] opacity-60 leading-tight">"{item.c}"</p>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          <div className="mt-64 bg-black text-white p-16 md:p-32 border-[12px] border-amber-500 shadow-[30px_30px_0_0_#4f46e5] text-center rotate-1">
             <PremiumTitle className="text-white items-center h3" subtitle="IDEAL EDUCATIVO">Visión Final de Paraguay</PremiumTitle>
             <p className="text-3xl md:text-5xl font-serif italic mt-12 mb-16 leading-tight max-w-5xl mx-auto">
                "Solo así será posible cumplir con el ideal de una educación verdaderamente integral, que atienda a la totalidad de la persona humana y que forme a los estudiantes paraguayos no solo como aprendices competentes, sino como ciudadanos comprometidos."
             </p>
             <div className="w-64 h-4 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="py-32 bg-indigo-900 border-t-[12px] border-black relative overflow-hidden text-center text-white">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <h2 className="text-8xl md:text-[14rem] font-display uppercase font-black italic tracking-tighter leading-[0.8] mb-16 underline decoration-amber-500 decoration-[20px] underline-offset-[20px]">
              Agentes<br/>de Cambio_
            </h2>
            <div className="bg-white text-black p-12 border-8 border-black shadow-[20px_20px_0_0_#000] inline-block rotate-2">
               <p className="text-4xl font-display font-black uppercase italic tracking-tighter">
                 "Trabajar la totalidad de la persona humana"
               </p>
               <p className="font-mono text-[10px] font-black uppercase mt-6 opacity-40 italic">Servín-Mendieta, Rivas-Benítez & Riveros-Lesmo // MEC PARAGUAY // RPP 2026</p>
            </div>
         </div>
      </section>
    </div>
  );
}
