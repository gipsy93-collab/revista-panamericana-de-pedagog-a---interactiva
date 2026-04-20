import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { History, BookOpen, Quote, Sparkles, Fingerprint, Layers, Share2, Compass, Landmark } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

const GENEALOGY_DATA = [
  { 
    author: 'Rousseau', 
    year: 1712, 
    concept: 'Naturalismo', 
    nemLink: 'Educación centrada en el niño y pausas activas.', 
    quote: 'El juego es el medio primordial del aprendizaje infantil.',
    color: 'bg-emerald-500'
  },
  { 
    author: 'Pestalozzi', 
    year: 1746, 
    concept: 'Holismo', 
    nemLink: 'Educación integral: Cabeza, corazón y mano.', 
    quote: 'El fin último no es la perfección escolar, sino la vida.',
    color: 'bg-indigo-600'
  },
  { 
    author: 'Dewey', 
    year: 1859, 
    concept: 'Pragmatismo', 
    nemLink: 'Aprendizaje Basado en Proyectos (ABP).', 
    quote: 'Enseñar es facilitar que el alumno aprenda haciendo.',
    color: 'bg-amber-500'
  },
  { 
    author: 'Freire', 
    year: 1921, 
    concept: 'Criticismo', 
    nemLink: 'Autonomía docente y didácticas decoloniales.', 
    quote: 'Enseñar no es transferir, sino crear posibilidades.',
    color: 'bg-rose-600'
  }
];

export const DataLab3549 = () => {
  const [activeNode, setActiveNode] = useState(0);

  return (
    <div className="bg-[#FFF1F2] py-32 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-rose-600/[0.05] leading-none pointer-events-none select-none italic">
        NEM_GEN_26
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div>
            <BrutalSticker text="PEDAGOGICAL_GENEALOGY // SEP // MEXICO" color="bg-rose-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000] px-6 py-2 font-black" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-[0.85] text-black tracking-tighter">
              LAB <span className="text-rose-600 italic underline decoration-8 decoration-black">GENEALOGÍA</span><br/>
              <span className="text-4xl md:text-5xl font-mono uppercase bg-black text-white px-4 leading-normal mt-3">ADN de la Nueva Escuela</span>
            </h2>
          </div>
          <div className="flex gap-6">
             <div className="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_#e11d48] rotate-[-2deg]">
                <Landmark size={48} className="text-rose-600" />
             </div>
             <div className="bg-black border-4 border-black p-5 shadow-[8px_8px_0_0_#ffffff] rotate-[3deg]">
                <Fingerprint size={48} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. LÍNEA DE TIEMPO INTERACTIVA */}
          <div className="lg:col-span-12">
             <BrutalCard title="FILTRADO_POR_HERENCIA_PEDAGÓGICA" color="bg-white" className="!border-[6px] shadow-[25px_25px_0_0_#000] p-12">
                <div className="grid lg:grid-cols-4 gap-4 mb-20 relative">
                   <div className="absolute top-1/2 left-0 w-full h-1 bg-black/10 -translate-y-1/2 hidden lg:block" />
                   {GENEALOGY_DATA.map((node, i) => (
                     <button
                       key={i}
                       onClick={() => setActiveNode(i)}
                       className={`relative z-10 p-6 border-4 border-black transition-all flex flex-col items-center group shadow-[4px_4px_0_0_#000] active:shadow-none ${activeNode === i ? node.color + ' text-white scale-105' : 'bg-zinc-50 text-black hover:bg-zinc-100'}`}
                     >
                        <span className="font-mono text-xs font-black mb-2 opacity-50">{node.year}</span>
                        <h4 className="font-display text-2xl uppercase italic font-black">{node.author}</h4>
                        <div className={`w-8 h-8 rounded-full border-2 border-black mt-4 flex items-center justify-center ${activeNode === i ? 'bg-white text-black animate-bounce' : 'bg-black text-white'}`}>
                           {i + 1}
                        </div>
                     </button>
                   ))}
                </div>

                <AnimatePresence mode="wait">
                   <motion.div
                     key={activeNode}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     className="grid lg:grid-cols-2 gap-16 p-10 bg-zinc-50 border-4 border-black relative overflow-hidden"
                   >
                      <div className="absolute -top-12 -right-12 text-[200px] font-black italic opacity-[0.03] select-none pointer-events-none">
                        {GENEALOGY_DATA[activeNode].author}
                      </div>

                      <div className="space-y-10 relative z-10">
                         <div>
                            <span className="font-mono text-[10px] uppercase font-black opacity-40 mb-3 block tracking-widest leading-none italic">Concepto_Matriz</span>
                            <h3 className={`text-6xl font-display uppercase font-black italic leading-none inline-block px-4 py-2 ${GENEALOGY_DATA[activeNode].color} text-white`}>
                               {GENEALOGY_DATA[activeNode].concept}
                            </h3>
                         </div>
                         <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000] rotate-1">
                            <Quote size={32} className="text-rose-600 mb-6" />
                            <p className="font-serif text-2xl italic leading-relaxed text-black/80">
                               "{GENEALOGY_DATA[activeNode].quote}"
                            </p>
                         </div>
                      </div>

                      <div className="flex flex-col justify-center gap-10 relative z-10">
                         <div className="bg-black text-white p-10 border-4 border-rose-600 shadow-[12px_12px_0_0_#000] rotate-[-1deg] group">
                            <div className="flex items-center gap-4 mb-6">
                               <Sparkles className="text-rose-400 group-hover:rotate-12 transition-transform" />
                               <h5 className="font-display text-2xl uppercase font-black italic">Presencia en la NEM</h5>
                            </div>
                            <p className="font-mono text-sm font-black uppercase tracking-tight text-white/90 leading-relaxed">
                               {GENEALOGY_DATA[activeNode].nemLink}
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center italic">
                               <span className="font-mono text-[9px] uppercase opacity-40 italic">Continuidad Histórica</span>
                               <Share2 size={20} className="text-rose-500 opacity-40" />
                            </div>
                         </div>
                      </div>
                   </motion.div>
                </AnimatePresence>
             </BrutalCard>
          </div>

          {/* II. MÉTRICAS DE ESTRUCTURA */}
          <div className="lg:col-span-12">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#e11d48] rotate-1 group hover:rotate-0 transition-transform">
                   <h5 className="font-display text-5xl font-black italic leading-none mb-2">23</h5>
                   <p className="font-mono text-[9px] uppercase font-black opacity-40">Años de Consolidación</p>
                   <p className="font-mono text-[10px] font-black uppercase text-rose-600 mt-4 leading-none italic">Horizonte 2019-2042</p>
                </div>
                <div className="bg-black border-4 border-black p-8 shadow-[10px_10px_0_0_#000] rotate-[-2deg] text-white">
                   <h5 className="font-display text-5xl font-black italic leading-none mb-2 text-rose-500">3</h5>
                   <p className="font-mono text-[9px] uppercase font-black opacity-60">Fases Primarias</p>
                   <p className="font-mono text-[10px] font-black uppercase text-white mt-4 leading-none italic">Niveles 1º a 6º</p>
                </div>
                <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#4f46e5] rotate-1">
                   <h5 className="font-display text-5xl font-black italic leading-none mb-2 text-indigo-700">6</h5>
                   <p className="font-mono text-[9px] uppercase font-black opacity-40">Herramientas TIC</p>
                   <p className="font-mono text-[10px] font-black uppercase text-black mt-4 leading-none italic">Sugerencia Digital</p>
                </div>
                <div className="bg-rose-600 border-4 border-black p-8 shadow-[10px_10px_0_0_#000] rotate-[-1deg] text-white">
                   <h5 className="font-display text-5xl font-black italic leading-none mb-2">41</h5>
                   <p className="font-mono text-[9px] uppercase font-black opacity-60">Journal Vol. 41</p>
                   <p className="font-mono text-[10px] font-black uppercase text-white mt-4 leading-none italic">Ríos-Higuera et al.</p>
                </div>
             </div>
          </div>

          {/* III. CONCLUSIÓN DE LABORATORIO */}
          <div className="lg:col-span-12 mt-8">
             <div className="bg-zinc-950 p-16 border-8 border-black shadow-[20px_20px_0_0_#e11d48] text-white relative overflow-hidden group">
                <Compass size={400} className="absolute -top-32 -right-32 text-white/[0.02] rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
                <div className="max-w-4xl relative z-10">
                   <div className="flex items-center gap-6 mb-12">
                      <Landmark className="text-rose-500" size={48} />
                      <h4 className="font-display text-4xl uppercase font-black italic leading-none">Veredicto Genético</h4>
                   </div>
                   <p className="text-3xl font-serif italic leading-relaxed text-zinc-300 font-medium mb-12 border-l-8 border-rose-600 pl-12">
                      "La Nueva Escuela Mexicana no es una invención disruptiva, sino un ensamblaje reflexivo de teorías pedagógicas clásicas que han resistido la prueba de los siglos."
                   </p>
                   <div className="flex gap-12 font-mono text-[10px] font-black uppercase tracking-[0.3em] opacity-40 italic">
                      <span>AUDITORÍA_NEM_2026</span>
                      <span>|</span>
                      <span>MÉXICO_SEP_ANALYSIS</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
