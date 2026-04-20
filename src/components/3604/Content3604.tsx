import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText, Globe, Filter, ShieldCheck,
  TrendingUp, BarChart3, HelpCircle, Film, Play, Zap, Eye, Heart, Camera
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DataLab3604 } from './DataLab3604';

export default function Content3604() {
  return (
    <div className="bg-[#fdfcfb]">
      {/* 3. METODOLOGÍA */}
      <section className="py-24 px-6 border-b-[12px] border-black bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white mb-16 !rotate-0" />
          
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-7">
               <h3 className="font-display text-4xl uppercase font-black italic mb-8 leading-none text-rose-600 underline decoration-black decoration-8 underline-offset-8">Investigación-Acción</h3>
               <p className="text-2xl font-serif italic text-black/80 font-medium leading-tight mb-12 border-l-8 border-rose-600 pl-8">
                 "Un proceso reflexivo donde el docente analiza su práctica, la transforma y produce conocimiento desde su propia experiencia situada."
               </p>

               <div className="grid md:grid-cols-2 gap-6">
                 <BrutalCard title="ENFOQUE CUALITATIVO" color="bg-rose-50" className="rotate-1">
                   <p className="font-sans font-bold uppercase text-[10px] opacity-60 italic leading-relaxed">
                     Basado en Elliott (1990) y Kemmis & McTaggart (1988), el estudio se centra en el cambio de la práctica docente mediante la introducción del cine como lenguaje.
                   </p>
                 </BrutalCard>
                 <BrutalCard title="INSTRUMENTOS" color="bg-white" className="-rotate-1">
                   <ul className="font-mono text-[9px] font-black uppercase space-y-2 opacity-70">
                     <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-rose-600" /> Observación participante</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-rose-600" /> Bitácora docente</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-rose-600" /> Focus group virtual</li>
                   </ul>
                 </BrutalCard>
               </div>
            </div>

            <div className="lg:col-span-5">
               <div className="bg-rose-600 text-white p-12 border-[10px] border-black shadow-[20px_20px_0_0_#000] rotate-2">
                  <Camera className="mb-6 text-white" size={48} />
                  <h4 className="font-display text-2xl font-black uppercase italic mb-4">Contexto Situado</h4>
                  <p className="font-mono text-[10px] uppercase font-black opacity-80 leading-relaxed mb-6">
                    Colegio de Bachilleres (CBQ), Chetumal. Octubre 2020 - Enero 2021. Modalidad virtual forzada por pandemia.
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                    <Users size={24} />
                    <span className="font-display text-4xl font-black italic">30 ESTUDIANTES</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
        <DataLab3604 />
      </section>

      {/* 4. RESULTADOS */}
      <section className="bg-white py-24 px-6 border-b-[12px] border-black relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="4. RESULTADOS" color="bg-rose-600" className="text-white mb-16 !rotate-0 shadow-[6px_6px_0_0_#000]" />
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
               <div className="bg-zinc-50 border-8 border-black p-12 shadow-[20px_20px_0_0_#be123c] rotate-1">
                  <h4 className="font-display text-4xl font-black uppercase italic mb-8 border-b-4 border-rose-600 pb-2 inline-block">Dimensiones del Aprendizaje</h4>
                  <div className="space-y-10">
                    <div className="border-l-8 border-rose-600 pl-8">
                       <h5 className="font-display text-2xl font-black uppercase italic text-rose-700 mb-2">4.1 Dimensión Afectiva</h5>
                       <p className="font-serif text-xl italic text-black/80 leading-relaxed mb-4 font-medium">
                          "Aprender una nueva cosa, creo que soy muy auditiva, es algo que me emociona porque tal vez puede utilizarse en otras materias, escuchar más y aprender." (p. 10)
                       </p>
                    </div>
                    <div className="border-l-8 border-black pl-8">
                       <h5 className="font-display text-2xl font-black uppercase italic text-black mb-2">4.2 Dimensión Cognitiva</h5>
                       <p className="font-serif text-xl italic text-black/80 leading-relaxed mb-4 font-medium">
                          "Aprendí a reconocer algunos detalles del cine y veré el cine desde otras perspectivas." (p. 11). Los estudiantes desarrollaron capacidades analíticas transferibles, pasando de espectadores pasivos a lectores audiovisuales críticos.
                       </p>
                    </div>
                    <div className="border-l-8 border-rose-600 pl-8">
                       <h5 className="font-display text-2xl font-black uppercase italic text-rose-700 mb-2">4.3 Dimensión Social</h5>
                       <p className="font-serif text-xl italic text-black/80 leading-relaxed mb-4 font-medium">
                          La experiencia promovió la cooperación y el diálogo entre pares. Las sesiones virtuales funcionaron como espacios de evaluación formativa.
                       </p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-8">
               <div className="bg-black text-white p-10 border-4 border-rose-600 shadow-[10px_10px_0_0_#ffffff] rotate-[-2deg]">
                  <Film className="text-rose-500 mb-6" size={48} />
                  <h4 className="font-display text-2xl font-black uppercase italic mb-4 leading-tight">Alfabetización Audiovisual</h4>
                  <p className="font-mono text-[10px] uppercase font-black opacity-60 leading-tight italic">
                    Incluyó la lectura guiada de "Iniciación al lenguaje del cine" (1976) para introducir conceptos como plano, montaje, ritmo narrativo y encuadre.
                  </p>
               </div>
               <div className="bg-rose-100 border-8 border-black p-10 shadow-[10px_10px_0_0_#000] rotate-1 flex-1 flex flex-col justify-center text-center">
                  <Play className="mx-auto mb-6 text-rose-700" size={60} />
                  <p className="text-4xl font-display font-black uppercase italic leading-none text-rose-800">
                    "Los estudiantes ya no miraban las películas: <span className="text-black">las leían."</span>
                  </p>
                  <p className="mt-4 font-mono text-[9px] font-black uppercase opacity-40 italic underline decoration-rose-400">Pág. 11 // Evidencia Empírica</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DISCUSIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="steps">
        <div className="max-w-7xl mx-auto py-12">
          <BrutalSticker text="5. DISCUSIÓN" color="bg-rose-600" className="text-white mb-20 !rotate-0 shadow-[8px_8px_0_0_#fff]" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#be123c] group hover:-rotate-2 transition-transform h-full">
                <BrainCircuit className="text-rose-700 mb-8" size={40} />
                <h4 className="font-display text-3xl font-black uppercase italic mb-6 border-b-4 border-black pb-2 inline-block">5.1 Aprendizaje Significativo</h4>
                <p className="font-serif text-xl italic text-black/80 leading-relaxed mb-6 font-medium">
                   "El conocimiento se vuelve significativo cuando el nuevo material adquiere aspectos no arbitrarios y sustanciales para lo que el estudiante conoce previamente." (p. 12)
                </p>
                <div className="font-mono text-[9px] font-black uppercase opacity-40">Ref: Ausubel et al. (2000)</div>
             </div>

             <div className="bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#000] rotate-1 group hover:rotate-2 transition-transform h-full">
                <Users className="text-rose-700 mb-8" size={40} />
                <h4 className="font-display text-3xl font-black uppercase italic mb-6 border-b-4 border-black pb-2 inline-block">5.2 Pedagogía Crítica</h4>
                <p className="font-serif text-xl italic text-black/80 leading-relaxed mb-6 font-medium">
                   "Nadie educa a nadie, nadie se educa a sí mismo; los hombres se educan entre sí, mediatizados por el mundo." (p. 12)
                </p>
                <div className="font-mono text-[9px] font-black uppercase opacity-40">Ref: Freire (1970/2005)</div>
             </div>

             <div className="bg-zinc-950 text-white border-8 border-rose-600 p-12 shadow-[15px_15px_0_0_#ffffff] rotate-[-1deg] group hover:rotate-1 transition-transform h-full">
                <Eye className="text-rose-500 mb-8" size={40} />
                <h4 className="font-display text-3xl font-black uppercase italic mb-6 border-b-4 border-rose-700 pb-2 inline-block">5.3 Alfabetización Audiovisual</h4>
                <p className="font-serif text-xl italic text-rose-50 leading-relaxed mb-6 font-light">
                   "La escuela no puede seguir actuando como si los medios no existieran, porque educar hoy implica también enseñar a mirar." (p. 7)
                </p>
                <div className="font-mono text-[9px] font-black uppercase opacity-40 text-rose-400">Ref: Ferrés (1994)</div>
             </div>
          </div>

          <div className="mt-24 p-16 bg-white border-[12px] border-black shadow-[30px_30px_0_0_#be123c] text-center rotate-1 relative overflow-hidden group">
             <Film className="absolute -left-12 -bottom-12 text-rose-100 opacity-20 group-hover:rotate-12 transition-transform" size={400} />
             <h3 className="text-5xl md:text-8xl font-display font-black uppercase italic text-black mb-10 leading-none relative z-10">
               Enseñar a <span className="text-rose-700 underline decoration-black decoration-8">Mirar</span>
             </h3>
             <p className="text-3xl md:text-5xl font-serif italic text-black max-w-5xl mx-auto leading-tight mb-8 relative z-10 font-bold">
               "El cine es más que un recurso didáctico para motivar al alumnado; es un transmisor de valores y de contenidos que permite desarrollar el pensamiento crítico y reflexivo." (p. 14)
             </p>
             <div className="w-64 h-2 bg-rose-700 mx-auto relative z-10" />
          </div>
        </div>
      </WaveSection>

      {/* 6. CONCLUSIONES */}
      <section className="bg-zinc-900 py-32 px-6 overflow-hidden relative border-y-[12px] border-black">
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <BrutalSticker text="6. CONCLUSIONES" color="bg-rose-600" className="text-white mb-20 !rotate-0 shadow-[8px_8px_0_0_#fff]" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Es pedagógicamente viable enseñar literatura con cine cuando la práctica se fundamenta en diseño didáctico reflexivo.",
              "El cine constituye un lenguaje educativo capaz de activar procesos cognitivos, estéticos y críticos, más allá de la motivación.",
              "El aprendizaje significativo se fortalece cuando se relacionan nuevos contenidos con experiencias previas.",
              "La investigación-acción resultó metodológicamente pertinente para transformar la práctica docente.",
              "Necesidad institucional de fortalecer la formación docente en alfabetización audiovisual."
            ].map((text, i) => (
              <div key={i} className="bg-black border-4 border-rose-500 p-10 shadow-[10px_10px_0_0_#be123c] rotate-1 group hover:-translate-y-4 transition-transform flex flex-col text-left">
                <h4 className="font-display text-2xl font-black uppercase italic mb-6 text-rose-500 border-b border-rose-900 pb-2">Conclusión 0{i+1}</h4>
                <p className="font-serif text-xl italic text-white/90 leading-tight mb-6">"{text}"</p>
                <div className="mt-auto flex justify-between items-center font-mono text-[9px] font-black uppercase opacity-30 italic">
                   <span>Pag. 15</span>
                   <span className="text-rose-400">REF_3604</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-48 text-center">
             <BrutalQuote author="López-Martínez & Muñoz-Madrid (2026)" className="bg-white text-black border-[10px] border-rose-600 font-serif text-4xl md:text-6xl italic shadow-[30px_30px_0_0_#000]">
               "Enseñar implica también mirar, sentir y pensar el mundo desde la palabra y la imagen."
             </BrutalQuote>
          </div>
        </div>
      </section>
    </div>
  );
}
