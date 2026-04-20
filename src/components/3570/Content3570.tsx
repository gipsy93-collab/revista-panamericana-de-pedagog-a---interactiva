import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText, Globe, Filter, ShieldCheck,
  TrendingUp, BarChart3, HelpCircle, Lightbulb, Scale, Ghost, Zap, Flame, MoveRight
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DataLab3570 } from './DataLab3570';

export default function Content3570() {
  return (
    <div className="bg-[#fdfcfb]">
      {/* 3. METODOLOGÍA */}
      <section className="bg-white py-24 px-6 border-b-[12px] border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 font-mono text-[200px] font-black text-black/[0.02] leading-none pointer-events-none select-none italic">
          MET_3570
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-orange-600" className="text-white mb-16 !rotate-0 shadow-[6px_6px_0_0_#000]" />
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
            <div className="space-y-12">
               <h3 className="font-display text-5xl uppercase font-black italic text-black leading-none">Revisión <span className="text-orange-600 underline decoration-8 decoration-black">Sistemática_</span></h3>
               <div className="space-y-8 font-sans font-bold uppercase text-[15px] leading-relaxed text-black/70">
                  <p className="border-l-8 border-orange-600 pl-8">
                     Los autores optaron por una revisión sistemática para identificar tendencias, enfoques y hallazgos de la última década, con el fin de detectar vacíos, orientar futuras investigaciones y aportar insumos para el diseño de programas de formación docente (p. 4).
                  </p>
                  <p className="border-l-8 border-black pl-8 font-black text-black">
                     La metodología PRISMA fue seleccionada por establecer un conjunto de criterios para la redacción transparente y con rigor académico de los resultados.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 { t: "Población", c: "Early Childhood Education / Preschool", i: Users },
                 { t: "Exposición", c: "Critical Thinking / Reflective Thinking", i: BrainCircuit },
                 { t: "Outcome", c: "Teacher Education / Preparation", i: GraduationCap },
                 { t: "Estrategia", c: "PEO (Population-Exposure-Outcome)", i: Target }
               ].map((item, idx) => (
                 <div key={idx} className="bg-zinc-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#ea580c] rotate-1 hover:rotate-0 transition-transform flex flex-col items-center text-center">
                    <item.i size={32} className="mb-4 text-orange-600" />
                    <h5 className="font-display text-xl font-black uppercase italic leading-none mb-2">{item.t}</h5>
                    <p className="font-mono text-[9px] uppercase font-black opacity-40">{item.c}</p>
                 </div>
               ))}
            </div>
          </div>
          <DataLab3570 />
        </div>
      </section>

      {/* 4. RESULTADOS EN TARJETAS */}
      <section className="bg-white py-32 px-6 border-b-[12px] border-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="4. RESULTADOS: CATEGORÍAS" color="bg-black" className="text-white mb-20 !rotate-0 shadow-[6px_6px_0_0_#ea580c]" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               {
                 t: "Perspectivas (4.1)",
                 c: "Reflexión sobre la práctica, razonamiento STEM, formación ética/ciudadana, educación política transformadora y creatividad.",
                 i: Lightbulb,
                 color: "bg-orange-50",
                 border: "border-orange-600"
               },
               {
                 t: "Estrategias (4.2)",
                 c: "Activas y experienciales (ABP), artísticas, basadas en lenguaje/argumentación, críticas feministas y tecnológicas/STEM.",
                 i: Zap,
                 color: "bg-zinc-50",
                 border: "border-black"
               },
               {
                 t: "Tipos (4.3)",
                 c: "Pensamiento Reflexivo, Analítico (STEM), Argumentativo (justificación) y Creativo-crítico (resolución compleja).",
                 i: Layers,
                 color: "bg-orange-50",
                 border: "border-orange-600"
               },
               {
                 t: "Dificultades (4.4)",
                 c: "Preconcepciones naturalizadas, falta de espacios de diálogo, rigidez curricular y escasa formación de formadores.",
                 i: AlertTriangle,
                 color: "bg-black text-white",
                 border: "border-black"
               }
             ].map((cat, i) => (
               <div key={i} className={`p-8 border-4 ${cat.border} ${cat.color} shadow-[10px_10px_0_0_#000] rotate-1 hover:-rotate-1 transition-transform cursor-pointer group`}>
                  <cat.i size={40} className="mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-display text-2xl font-black uppercase italic mb-4 leading-none">{cat.t}</h4>
                  <p className="font-sans font-bold uppercase text-[10px] opacity-70 leading-relaxed italic">"{cat.c}"</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. DISCUSIÓN EN TARJETAS INTERACTIVAS */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="steps">
        <div className="max-w-7xl mx-auto py-12">
          <BrutalSticker text="5. DISCUSIÓN" color="bg-orange-600" className="text-white mb-20 !rotate-0" />
          
          <div className="grid md:grid-cols-3 gap-8 mb-24">
             {[
               {
                 title: "Tensiones Conceptuales",
                 text: "El pensamiento crítico ocupa un lugar relevante pero persisten tensiones conceptuales y metodológicas que limitan su desarrollo completo. No se puede reducir a habilidades técnicas.",
                 author: "Díez-Ros et al. (2024)"
               },
               {
                 title: "Equilibrio Lipmaniano",
                 text: "Pensamiento complejo como un acto de equilibrio entre la indagación racional, la creatividad, el juicio ético y el compromiso comunitario (Lipman, 2014).",
                 author: "Lipman (2014)"
               },
               {
                 title: "Acto Emancipador",
                 text: "Pensar de manera crítica no es un ejercicio neutro, sino un acto político y emancipador. Formar docentes es formar sujetos capaces de leer el mundo para transformarlo.",
                 author: "Freire (1970)"
               }
             ].map((card, i) => (
               <div key={i} className="bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#ea580c] rotate-1 group hover:-rotate-1 transition-transform">
                  <Flame className="text-orange-600 mb-6" size={32} />
                  <h4 className="font-display text-3xl font-black uppercase italic mb-6 leading-none border-b-4 border-black pb-2">{card.title}</h4>
                  <p className="font-serif text-xl italic text-black/80 leading-relaxed mb-10">"{card.text}"</p>
                  <div className="flex justify-between items-center font-mono text-[9px] font-black uppercase tracking-widest leading-none">
                     <span>REFERENCIA</span>
                     <span className="text-orange-600 underline">{card.author}</span>
                  </div>
               </div>
             ))}
          </div>

          <div className="bg-zinc-900 border-[12px] border-orange-600 p-16 md:p-32 shadow-[30px_30px_0_0_#000] text-center rotate-1">
             <h3 className="text-5xl md:text-8xl font-display font-black uppercase italic text-white mb-10 leading-none">
               El Asombro & <br/><span className="text-orange-500">el Diálogo_</span>
             </h3>
             <p className="text-3xl md:text-5xl font-serif italic text-white/90 max-w-5xl mx-auto leading-tight mb-8">
               "El pensamiento crítico debe articularse con la experiencia, el asombro y el diálogo democrático."
             </p>
             <div className="w-64 h-2 bg-orange-600 mx-auto" />
          </div>
        </div>
      </WaveSection>

      {/* 6. CONCLUSIONES (HASTA LÍNEA 162) */}
      <section className="bg-black py-48 px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <BrutalSticker text="6. CONCLUSIONES" color="bg-white" className="text-black mb-20 !rotate-0 shadow-[8px_8px_0_0_#ea580c]" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-12">
                <p className="text-4xl md:text-6xl font-serif italic text-orange-500 leading-tight">
                  "El pensamiento crítico en la formación docente no debe entenderse únicamente como una competencia técnica, sino como una práctica transformadora que articula lo cognitivo, lo ético y lo político desde la primera infancia (p. 1)."
                </p>
             </div>
             <div className="bg-white text-black p-12 border-8 border-white shadow-[25px_25px_0_0_#ea580c] rotate-1">
                <p className="text-3xl font-display font-black uppercase italic leading-tight mb-8">
                  "Los resultados evidencian avances significativos en la incorporación del pensamiento crítico en la formación docente inicial en preescolar, pero también muestran la necesidad de revisar los marcos institucionales y curriculares que regulan dicha formación."
                </p>
                <div className="flex justify-between items-center border-t-2 border-black/10 pt-6 font-mono text-[10px] font-black uppercase">
                   <span>Pag. 13</span>
                   <span className="text-orange-600">Garcia-Martínez (2026)</span>
                </div>
             </div>
          </div>

          <div className="mt-48 flex flex-col md:flex-row items-center justify-between gap-12 border-t-4 border-white/20 pt-12">
             <div className="max-w-2xl">
                <p className="font-display text-xl uppercase font-black italic tracking-tighter leading-none mb-4">
                  Se requiere una apuesta por modelos que integren las dimensiones reflexiva, lógica, creativa, ética y política del pensamiento crítico (p. 13).
                </p>
             </div>
             <div className="flex gap-4">
                <div className="bg-orange-600 text-white px-3 py-1 shadow-[4px_4px_0_0_#fff]">RS_3570</div>
                <div className="bg-white text-black px-3 py-1 shadow-[4px_4px_0_0_#ea580c]">RPP_41</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
