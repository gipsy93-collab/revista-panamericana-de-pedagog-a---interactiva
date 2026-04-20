import React, { useState } from 'react';
import { History, BookOpen, Quote, Sparkles } from 'lucide-react';

const GENEALOGY_DATA = {
  philosophers: {
    'Rousseau': { year: 1712, concept: 'Naturalismo', nem_match: 'Pausas activas y el Aprendizaje por el Juego.', quote: 'El aprendizaje debe girar en torno al niño, respetando su desarrollo natural.' },
    'Pestalozzi': { year: 1746, concept: 'Holismo', nem_match: 'Desarrollo de habilidades socioemocionales.', quote: 'La educación integral involucra cabeza, corazón y mano.' },
    'Dewey': { year: 1859, concept: 'Pragmatismo', nem_match: 'Proyectos comunitarios y trabajo interdisciplinario.', quote: 'La escuela no es preparación para la vida; la escuela es vida.' },
    'Freire': { year: 1921, concept: 'Pedagogía Crítica', nem_match: 'Didácticas decoloniales y autonomía docente.', quote: 'Enseñar no es transferir conocimiento, sino crear las posibilidades para construirlo.' },
  },
  metrics: {
    horizonte: 23,
    fases: 3,
    leyes: 4
  }
};

export default function DataExplorer3549() {
  const [activePhilo, setActivePhilo] = useState<keyof typeof GENEALOGY_DATA.philosophers>('Freire');
  const data = GENEALOGY_DATA.philosophers[activePhilo];

  return (
    <div className="w-full my-12 bg-white border-[10px] border-black p-8 shadow-[24px_24px_0_0_#4f46e5] text-black">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* PANEL IZQUIERDO: SELECCIÓN */}
        <div className="space-y-8">
          <div className="bg-zinc-100 p-6 border-4 border-black">
            <h4 className="font-black uppercase mb-6 text-xl italic flex items-center gap-3">
              <History size={24} /> Genealogía_ADN
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(GENEALOGY_DATA.philosophers).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePhilo(p as any)}
                  className={`p-4 border-4 border-black font-black uppercase text-sm transition-all shadow-[6px_6px_0_0_#999] active:shadow-none ${activePhilo === p ? 'bg-black text-white shadow-[#4f46e5]' : 'bg-white text-black hover:bg-zinc-200'}`}
                >
                  {p} ({GENEALOGY_DATA.philosophers[p as keyof typeof GENEALOGY_DATA.philosophers].year})
                </button>
              ))}
            </div>
          </div>

          <div className="bg-black text-white p-6 border-4 border-black shadow-[10px_10px_0_0_#4f46e5] rotate-[-1deg]">
             <h5 className="font-mono text-xs uppercase opacity-50 mb-3 tracking-widest italic">CONSOLIDACIÓN_ESTRATÉGICA</h5>
             <div className="flex justify-around items-center">
                <div className="text-center">
                   <div className="text-4xl font-black">{GENEALOGY_DATA.metrics.horizonte}</div>
                   <div className="text-[9px] uppercase font-bold opacity-60">Años Horizonte</div>
                </div>
                <div className="w-[2px] h-10 bg-white/20"></div>
                <div className="text-center">
                   <div className="text-4xl font-black">{GENEALOGY_DATA.metrics.fases}</div>
                   <div className="text-[9px] uppercase font-bold opacity-60">Fases Primaria</div>
                </div>
             </div>
          </div>
        </div>

        {/* PANEL DERECHO: INTERFACE NEM */}
        <div className="bg-zinc-50 border-8 border-black p-8 flex flex-col justify-between">
           <div>
              <div className="flex justify-between items-center mb-6">
                <span className="bg-[#4f46e5] text-white px-3 py-1 font-mono text-[10px] uppercase font-black">NEMCORE_LINK</span>
                <span className="font-display font-black uppercase text-sm italic">{data.concept}</span>
              </div>
              
              <h5 className="text-3xl font-black uppercase leading-tight mb-6">
                LINK: {activePhilo} <span className="text-[#4f46e5]">➔</span> N.E.M.
              </h5>

              <div className="space-y-6">
                 <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
                    <span className="font-mono text-[9px] uppercase font-black opacity-30 block mb-2 underline">Cita_Inspiración:</span>
                    <p className="text-xl font-serif italic font-medium leading-relaxed">"{data.quote}"</p>
                 </div>

                 <div className="bg-white p-6 border-4 border-black border-l-[16px] border-l-[#4f46e5]">
                    <span className="font-mono text-[9px] uppercase font-black opacity-30 block mb-2 underline">Aplicación_Práctica_NEM:</span>
                    <p className="text-lg font-bold uppercase tracking-tight">{data.nem_match}</p>
                 </div>
              </div>
           </div>

           <div className="mt-8 flex justify-end gap-3 grayscale opacity-30">
              <BookOpen size={24} />
              <Quote size={24} />
              <Sparkles size={24} />
           </div>
        </div>
      </div>

       <div className="mt-8 bg-zinc-900 text-white p-4 font-mono text-[10px] uppercase font-black flex justify-between tracking-widest italic overflow-hidden">
          <span className="animate-pulse">SISTEMA_VINCULADO_CORE_3549</span>
          <span className="hidden md:block">GENEALOGÍA_NEM // NO_ES_INVENCIÓN_ES_REORGANIZACIÓN</span>
          <span>v1.0_RPP</span>
       </div>
    </div>
  );
}
