import React, { useState } from 'react';
import { MapPin, Eye, ShieldCheck, UserMinus, Search, ChevronRight } from 'lucide-react';

const EVIDENCE_DATA = [
  {
    id: 'entorno',
    label: 'EN EL ENTORNO',
    stat: '62.3%',
    desc: 'Estudiantes presenciaron venta de drogas en cercanías.',
    icon: MapPin,
    color: 'text-red-600',
    accent: 'bg-red-600',
    insight: 'Escuela permeable a dinámicas del barrio.'
  },
  {
    id: 'interior',
    label: 'AL INTERIOR',
    stat: '52.0%',
    desc: 'Consumo presenciado dentro de la institución.',
    icon: Eye,
    color: 'text-yellow-600',
    accent: 'bg-yellow-400',
    insight: 'Normalización en espacios de convivencia.'
  },
  {
    id: 'regional',
    label: 'REGIONAL',
    stat: '32.8%',
    desc: 'Consumo de marihuana en enseñanza media.',
    icon: Search,
    color: 'text-blue-600',
    accent: 'bg-blue-600',
    insight: 'Cifra superior a la media nacional.'
  }
];

export default function EvidenceMap3453() {
  const [selectedId, setSelectedId] = useState(EVIDENCE_DATA[0].id);
  const current = EVIDENCE_DATA.find(d => d.id === selectedId) || EVIDENCE_DATA[0];

  return (
    <div className="w-full my-12 bg-zinc-950 border-[10px] border-black p-8 shadow-[25px_25px_0_0_#000] text-white flex flex-col gap-10 opacity-100 visible" style={{display: 'flex', opacity: 1}}>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-4">
           {EVIDENCE_DATA.map((item) => (
             <button
               key={item.id}
               onClick={() => setSelectedId(item.id)}
               className={`w-full text-left p-6 border-4 border-black transition-all flex items-center justify-between shadow-[6px_6px_0_0_#000] active:shadow-none ${selectedId === item.id ? 'bg-white text-black -translate-x-1' : 'bg-zinc-900 text-zinc-400'}`}
             >
                <div className="flex items-center gap-4">
                  <item.icon size={24} />
                  <span className="font-black text-sm uppercase tracking-widest">{item.label}</span>
                </div>
                <ChevronRight size={20} />
             </button>
           ))}
        </div>

        <div className="flex-1 bg-white text-black p-10 border-8 border-black shadow-[15px_15px_0_0_#ef4444]">
           <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-left">
              <div className={`text-8xl md:text-[10rem] font-black leading-none tracking-tighter ${current.color}`}>
                {current.stat}
              </div>
              <div className="space-y-6 pt-6">
                 <h5 className="text-4xl font-black uppercase italic border-b-4 border-black pb-4 leading-none">{current.label}</h5>
                 <p className="font-serif italic text-3xl leading-tight">"{current.desc}"</p>
                 <div className={`p-6 border-4 border-black font-black uppercase text-lg italic ${current.accent} text-white shadow-[6px_6px_0_0_#000]`}>
                   INSIGHT: {current.insight}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
