import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText, Globe, Filter, ShieldCheck,
  TrendingUp, BarChart3, HelpCircle, Binary, Landmark, Zap, Cpu, Scale, History
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DataLab3557 } from './DataLab3557';

export default function Content3557() {
  return (
    <div className="bg-[#f8fafc]">
      {/* 2.3 OBJETIVOS */}
      <section className="bg-slate-900 text-white py-24 px-6 border-b-[12px] border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 font-mono text-[200px] font-black text-white/[0.03] leading-none pointer-events-none select-none">
          OBJ_3557
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="2.3 OBJETIVOS" color="bg-cyan-500" className="text-black mb-16 !rotate-0 shadow-[6px_6px_0_0_#fff]" />
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
               <h3 className="font-display text-4xl uppercase font-black italic mb-8 leading-none text-cyan-400 border-b-4 border-white/10 pb-4">Objetivo General_</h3>
               <p className="text-3xl md:text-5xl font-serif italic border-l-8 border-cyan-500 pl-8 leading-tight">
                 "Analizar la formación del jurista en relación con la informática jurídica y formación digital, complementado con la visión de juristas en activo sobre el uso de tecnología en la práctica profesional."
               </p>
            </div>
            <div className="bg-white/5 p-12 border-4 border-white/10 backdrop-blur-sm shadow-[15px_15px_0_0_#22d3ee]">
               <h3 className="font-display text-2xl uppercase font-black italic mb-8 text-white">Objetivos Implícitos</h3>
               <ul className="space-y-6">
                  {[
                    "Evaluar cómo las facultades de derecho integran (o no) competencias digitales.",
                    "Identificar tensiones entre tradición e innovación en la formación.",
                    "Diagnosticar la brecha entre formación académica y demandas del mercado laboral."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start font-sans font-bold uppercase text-xs text-white/80 italic">
                       <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METODOLOGÍA */}
      <section className="py-24 px-6 border-b-[12px] border-black relative bg-white">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="3. METODOLOGÍA MIXTA" color="bg-black" className="text-white mb-16 !rotate-0" />
          <div className="grid md:grid-cols-4 gap-4 mb-20">
             <div className="bg-zinc-50 border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <h4 className="font-display text-xl font-black uppercase italic mb-2">3.1 Tipo</h4>
                <p className="font-mono text-[10px] uppercase font-black opacity-50">Mixto: Comparativo + Cualitativo</p>
             </div>
             <div className="bg-zinc-50 border-4 border-black p-8 shadow-[6px_6px_0_0_#22d3ee]">
                <h4 className="font-display text-xl font-black uppercase italic mb-2">3.3 Instrumentos</h4>
                <p className="font-mono text-[10px] uppercase font-black opacity-50">Análisis documental + Entrevista semiestructurada</p>
             </div>
             <div className="bg-zinc-50 border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <h4 className="font-display text-xl font-black uppercase italic mb-2">3.4 Procedimiento</h4>
                <p className="font-mono text-[10px] uppercase font-black opacity-50">38 facultades (ranking THE/QS) + 7 Juristas MX</p>
             </div>
             <div className="bg-zinc-50 border-4 border-black p-8 shadow-[6px_6px_0_0_#22d3ee]">
                <h4 className="font-display text-xl font-black uppercase italic mb-2">3.5 Análisis</h4>
                <p className="font-mono text-[10px] uppercase font-black opacity-50">Comparaciones constantes (Theory-based)</p>
             </div>
          </div>
          <DataLab3557 />
        </div>
      </section>

      {/* 4.1 HALLAZGO PRINCIPAL */}
      <section className="py-32 bg-slate-900 border-b-[12px] border-black text-white relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <BrutalSticker text="4.1 HALLAZGO PRINCIPAL" color="bg-red-600" className="text-white mb-10 !rotate-0 shadow-[6px_6px_0_0_#fff]" />
          <BrutalQuote author="Prince-Galbán, Galbán-Lozano & Meza-Mejía (2026)" className="bg-black border-[8px] border-cyan-500 text-3xl md:text-5xl font-serif italic shadow-[30px_30px_0_0_#22d3ee]">
             "Existe una brecha estructural entre la formación jurídica tradicional y las demandas tecnológicas del mercado laboral. Solo 10% de las facultades de élite incluyen tecnología en su currículo obligatorio."
          </BrutalQuote>
        </div>
      </section>

      {/* 5. DISCUSIÓN */}
      <WaveSection topColor="#0f172a" bottomColor="#f8fafc" variant="steps">
        <div className="max-w-7xl mx-auto py-12">
          <BrutalSticker text="5. DISCUSIÓN" color="bg-black" className="text-white mb-20 !rotate-0" />
          
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
               <div className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#000] rotate-1">
                  <h4 className="font-display text-4xl font-black uppercase italic mb-6 border-b-4 border-cyan-500 pb-2 inline-block">5.1 Metamorfosis Incompleta_</h4>
                  <p className="text-2xl font-serif italic text-black/80 leading-relaxed mb-8">
                     "Las facultades de derecho reconocen la importancia de la tecnología, pero no la consideran parte del núcleo esencial de la formación jurídica. Esto crea una paradoja: se prepara a los estudiantes para un mundo que ya no existe."
                  </p>
                  <p className="font-sans font-bold uppercase text-xs opacity-60 leading-relaxed">
                     La tensión entre tradición e innovación no es solo pedagógica, es identitaria: el abogado tradicional se define por el dominio de textos normativos; el abogado del futuro requiere fluidez entre derecho y tecnología.
                  </p>
               </div>

               <div className="grid grid-cols-2 gap-8">
                  <div className="bg-black text-white p-10 border-4 border-cyan-500 shadow-[10px_10px_0_0_#ffffff]">
                     <h5 className="font-display text-xl font-black uppercase italic mb-4 text-cyan-400">5.2 Relación Teórica</h5>
                     <p className="font-mono text-[10px] uppercase font-black leading-tight opacity-70">Coincide con Susskind (2015) sobre la transformación de las profesiones del conocimiento y refuerza la urgencia de cerrar la brecha de género digital reportada por Collett et al. (2022).</p>
                  </div>
                  <div className="bg-indigo-600 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#22d3ee]">
                     <h5 className="font-display text-xl font-black uppercase italic mb-4">5.3 Implicaciones</h5>
                     <p className="font-mono text-[10px] uppercase font-black leading-tight opacity-70">La integración tecnológica no es solo aditiva sino transformadora; documentar el rezago curricular global es el primer paso para la reforma pedagógica real.</p>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-4 bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#22d3ee] flex flex-col justify-center">
               <h4 className="font-display text-3xl font-black uppercase italic mb-8">5.4 Implicaciones Prácticas</h4>
               <ul className="space-y-6 font-sans font-bold uppercase text-[10px] text-black/60 italic">
                  {[
                    "Integrar competencias digitales en el núcleo obligatorio.",
                    "Formar al profesorado antes de exigirles su enseñanza.",
                    "Preparar al estudiante para el éxito profesional vía IA (Próximos 5 años).",
                    "Adoptar posturas autónomas de alfabetización digital."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start border-b border-black/5 pb-4">
                       <Zap className="text-cyan-500 shrink-0" size={16} />
                       {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 6.2 CONCLUSIONES DE LOS AUTORES */}
      <section className="py-32 px-6 bg-white overflow-hidden relative border-y-[12px] border-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="6.2 CONCLUSIONES ESPECÍFICAS" color="bg-cyan-500" className="text-black mb-20 !rotate-0 shadow-[8px_8px_0_0_#000]" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Brecha Significativa", c: "Existe una distancia alarmante entre la formación académica tradicional y las demandas reales de la práctica profesional." },
              { t: "Dicotomía de Currículo", c: "La separación entre materias obligatorias y optativas perpetúa desigualdades entre graduados del mismo nivel." },
              { t: "Inercia Institucional", c: "La resistencia al cambio en el ámbito jurídico ralentiza la transformación necesaria para la supervivencia profesional." },
              { t: "Urgencia Reportada", c: "Los profesionales en activo subrayan la necesidad inmediata de acelerar los procesos de actualización curricular." },
              { t: "Desafío Docente", c: "La implementación efectiva enfrenta la barrera de las competencias tecnológicas limitadas del profesorado actual." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 text-white border-4 border-cyan-500 p-10 shadow-[12px_12px_0_0_#000] rotate-1 group hover:-translate-y-4 transition-transform flex flex-col h-full">
                 <h4 className="font-display text-2xl font-black uppercase italic mb-4 text-cyan-400 leading-none">{item.t}</h4>
                 <p className="font-sans font-bold uppercase text-[11px] opacity-70 leading-relaxed flex-1 italic">"{item.c}"</p>
                 <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <Binary size={16} className="text-indigo-400" />
                    <span className="font-mono text-[9px] font-black opacity-30">CONCLUSION_ENTRY_{i+1}</span>
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-64 text-center">
             <div className="inline-block bg-black text-white p-16 border-[12px] border-cyan-500 shadow-[30px_30px_0_0_#22d3ee] rotate-[-1deg]">
                <h3 className="text-5xl md:text-7xl font-display font-black uppercase italic mb-10 leading-none">
                  Visión <span className="text-cyan-400 underline decoration-white decoration-8">Transformativa_</span>
                </h3>
                <p className="text-3xl md:text-5xl font-serif italic max-w-5xl mx-auto leading-tight mb-16">
                   "Aunque el cambio es incipiente, existe un reconocimiento creciente de la necesidad de equipar a los juristas con herramientas adaptadas a un entorno legal cada vez más tecnológico."
                </p>
                <div className="w-64 h-2 bg-white/20 mx-auto" />
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="py-48 bg-cyan-500 border-t-[12px] border-black relative overflow-hidden text-center text-black">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h2 className="text-8xl md:text-[14rem] font-display uppercase font-black italic tracking-tighter leading-[0.8] mb-16">
              Iure<br/> <span className="text-white italic">Algoma_</span>
            </h2>
            <div className="relative z-10">
               <div className="inline-block bg-slate-950 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#ffffff] rotate-1">
                  <p className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter mb-8 leading-none">
                    "Dentro de cinco años ya no será posible ser un abogado exitoso sin usar IA."
                  </p>
                  <p className="font-mono text-xs font-black uppercase opacity-40 italic tracking-widest leading-none">Prince Tritto, Galbán Lozano & Meza Mejía // RPP 2026</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
